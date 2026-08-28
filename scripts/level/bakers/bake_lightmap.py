"""
Bake a level's lightmap in Blender, headless.

    blender -b --python bake_lightmap.py -- --glb in.glb --out <dir> --size 4096 --samples 128
        --moon dx,dy,dz,r,g,b,strength --sky r,g,b,strength [--exposure 1.0] [--device GPU]

Reads the level's static geometry (the lod0 meshes under every cell_* node),
unwraps a second UV layer across all of them into ONE atlas, and bakes two
passes with Cycles:

  RGB  diffuse direct+indirect with the moon OFF: sky light, bounce, and every
       emissive surface in the level (a neon sign lights its wall).
  A    the moon's visibility (Cycles' SHADOW bake with only the sun present),
       so the runtime can keep the moon as a real-time light, masked by this,
       and put a small dynamic shadow map on top for players.

Writes <out>/lightmap.png (16-bit RGBA) and <out>/out.glb -- the same objects
re-exported with the lightmap UVs as TEXCOORD_1 so the Node side can swap the
vertex data back in by node name.
"""
import argparse
import math
import sys
import time

import bpy
import numpy as np
from mathutils import Vector

argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
ap = argparse.ArgumentParser()
ap.add_argument('--glb', required=True)
ap.add_argument('--out', required=True)
ap.add_argument('--size', type=int, default=4096)
ap.add_argument('--samples', type=int, default=128)
ap.add_argument('--moon', default='-0.4,-1,-0.3,0.72,0.78,0.95,1.0')
ap.add_argument('--sky', default='0.53,0.59,0.76,0.35')
ap.add_argument('--exposure', type=float, default=1.0)
ap.add_argument('--margin', type=float, default=0.004)
ap.add_argument('--device', default='AUTO')
args = ap.parse_args(argv)

T0 = time.time()


def log(msg):
    print(f'[thaikit] {time.time() - T0:6.1f}s {msg}', flush=True)


def floats(s):
    return [float(x) for x in s.split(',')]


# --- scene ------------------------------------------------------------------
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
for block in (bpy.data.meshes, bpy.data.materials, bpy.data.images, bpy.data.lights):
    for datablock in list(block):
        block.remove(datablock)

log(f'importing {args.glb}')
bpy.ops.import_scene.gltf(filepath=args.glb, merge_vertices=False)
scene = bpy.context.scene

# Static bake targets: mesh objects whose parent is a 'lod0' empty under a cell.
static = []
for obj in bpy.data.objects:
    if obj.type != 'MESH':
        continue
    p = obj.parent
    if p is not None and p.name.startswith('lod0') and p.parent is not None and p.parent.name.startswith('cell_'):
        static.append(obj)
log(f'{len(static)} static objects, {len(bpy.data.objects) - len(static)} others')
if not static:
    raise SystemExit('no static lod0 meshes found under cell_* nodes')

# Everything that is not static still occludes and bounces, but is not baked.
for obj in bpy.data.objects:
    obj.select_set(False)

# --- UV: one atlas across every static object -------------------------------
for obj in static:
    me = obj.data
    # A mesh with no UVs at all would make 'lightmap' its FIRST layer, and the
    # exporter writes layers in order -- TEXCOORD_0 -- where the Node side
    # expects TEXCOORD_1. Give every mesh a base layer first.
    if len(me.uv_layers) == 0:
        me.uv_layers.new(name='UVMap')
    if 'lightmap' not in me.uv_layers:
        me.uv_layers.new(name='lightmap')
    me.uv_layers.active = me.uv_layers['lightmap']
    me.uv_layers['lightmap'].active_render = False
    obj.select_set(True)
bpy.context.view_layer.objects.active = static[0]

log('unwrapping (smart project + pack)')
bpy.ops.object.mode_set(mode='EDIT')
bpy.ops.mesh.select_all(action='SELECT')
bpy.ops.uv.smart_project(angle_limit=math.radians(66), island_margin=0.001, correct_aspect=True, scale_to_bounds=False)
try:
    bpy.ops.uv.pack_islands(margin=args.margin, rotate=True, scale=True, margin_method='FRACTION')
except TypeError:
    bpy.ops.uv.pack_islands(margin=args.margin, rotate=True)
bpy.ops.object.mode_set(mode='OBJECT')

# --- bake target -------------------------------------------------------------
size = args.size
img_rgb = bpy.data.images.new('lm_rgb', size, size, alpha=False, float_buffer=True)
img_shadow = bpy.data.images.new('lm_shadow', size, size, alpha=False, float_buffer=True)


def set_target(image):
    seen = set()
    for obj in static:
        for slot in obj.material_slots:
            mat = slot.material
            if mat is None:
                mat = bpy.data.materials.new('lm_default')
                mat.use_nodes = True
                slot.material = mat
            if not mat.use_nodes:
                mat.use_nodes = True
            if mat.name in seen:
                continue
            seen.add(mat.name)
            nodes = mat.node_tree.nodes
            node = nodes.get('thaikit_bake') or nodes.new('ShaderNodeTexImage')
            node.name = 'thaikit_bake'
            node.image = image
            uvnode = nodes.get('thaikit_bake_uv') or nodes.new('ShaderNodeUVMap')
            uvnode.name = 'thaikit_bake_uv'
            uvnode.uv_map = 'lightmap'
            mat.node_tree.links.new(uvnode.outputs['UV'], node.inputs['Vector'])
            nodes.active = node


# --- lights ------------------------------------------------------------------
moon = floats(args.moon)
sky = floats(args.sky)
md = Vector(moon[0:3]).normalized()
sun_data = bpy.data.lights.new('thaikit_moon', 'SUN')
sun_data.color = moon[3:6]
sun_data.energy = moon[6]
sun_data.angle = math.radians(1.5)
sun = bpy.data.objects.new('thaikit_moon', sun_data)
scene.collection.objects.link(sun)
# glTF is Y-up, Blender is Z-up: (x, y, z) -> (x, -z, y).
d_bl = Vector((md.x, -md.z, md.y))
sun.rotation_euler = d_bl.to_track_quat('-Z', 'Y').to_euler()

world = scene.world or bpy.data.worlds.new('thaikit_world')
scene.world = world
world.use_nodes = True
bg = world.node_tree.nodes.get('Background')
if bg is None:
    bg = world.node_tree.nodes.new('ShaderNodeBackground')
    world.node_tree.links.new(bg.outputs['Background'], world.node_tree.nodes['World Output'].inputs['Surface'])

# --- cycles ------------------------------------------------------------------
scene.render.engine = 'CYCLES'
scene.cycles.samples = args.samples
scene.cycles.use_denoising = True
scene.cycles.bake_type = 'DIFFUSE'
scene.render.bake.margin = 6
scene.render.bake.use_clear = True
scene.render.bake.use_selected_to_active = False
if args.device in ('AUTO', 'GPU'):
    try:
        prefs = bpy.context.preferences.addons['cycles'].preferences
        for kind in ('OPTIX', 'CUDA', 'HIP', 'ONEAPI', 'METAL'):
            try:
                prefs.compute_device_type = kind
                prefs.get_devices()
                if any(d.type == kind for d in prefs.devices):
                    for d in prefs.devices:
                        d.use = d.type == kind or d.type == 'CPU'
                    scene.cycles.device = 'GPU'
                    log(f'cycles device: {kind}')
                    break
            except Exception:
                continue
    except Exception as exc:
        log(f'no GPU ({exc}); CPU')

for obj in bpy.data.objects:
    obj.select_set(obj in static)
bpy.context.view_layer.objects.active = static[0]

# Pass 1: sky + bounce + emission, moon off.
log(f'bake 1/2: diffuse (sky + indirect + emission) at {size}², {args.samples} samples')
sun.hide_render = True
bg.inputs['Color'].default_value = (sky[0], sky[1], sky[2], 1.0)
bg.inputs['Strength'].default_value = sky[3]
set_target(img_rgb)
scene.render.bake.use_pass_direct = True
scene.render.bake.use_pass_indirect = True
scene.render.bake.use_pass_color = False
bpy.ops.object.bake(type='DIFFUSE')

# Pass 2: moon visibility.
log('bake 2/2: moon shadow mask')
sun.hide_render = False
bg.inputs['Strength'].default_value = 0.0
set_target(img_shadow)
bpy.ops.object.bake(type='SHADOW')

# --- combine and save ----------------------------------------------------------
log('combining')
n = size * size * 4
rgb = np.empty(n, dtype=np.float32)
img_rgb.pixels.foreach_get(rgb)
sh = np.empty(n, dtype=np.float32)
img_shadow.pixels.foreach_get(sh)
rgb = rgb.reshape(-1, 4)
sh = sh.reshape(-1, 4)
out = np.empty_like(rgb)
out[:, 0:3] = np.clip(rgb[:, 0:3] * args.exposure, 0.0, 1.0)
out[:, 3] = np.clip(sh[:, 0], 0.0, 1.0)
img_out = bpy.data.images.new('lightmap', size, size, alpha=True, float_buffer=True)
img_out.pixels.foreach_set(out.reshape(-1))
img_out.alpha_mode = 'CHANNEL_PACKED'
scene.render.image_settings.file_format = 'PNG'
scene.render.image_settings.color_depth = '16'
scene.render.image_settings.color_mode = 'RGBA'
scene.view_settings.view_transform = 'Standard'
scene.view_settings.look = 'None'
scene.view_settings.exposure = 0.0
scene.view_settings.gamma = 1.0
img_out.save_render(filepath=f'{args.out}/lightmap.png', scene=scene)
log('wrote lightmap.png')

# --- export the unwrapped static meshes ---------------------------------------
for obj in bpy.data.objects:
    obj.select_set(obj in static)
kwargs = dict(filepath=f'{args.out}/out.glb', export_format='GLB', use_selection=True, export_apply=True,
              export_texcoords=True, export_normals=True, export_materials='NONE', export_yup=True,
              export_animations=False, export_skins=False, export_morph=False, export_lights=False, export_cameras=False)
for extra in (dict(export_vertex_color='ACTIVE', export_all_vertex_colors=True), dict(export_vertex_color='ACTIVE'), dict(export_colors=True), {}):
    try:
        bpy.ops.export_scene.gltf(**kwargs, **extra)
        break
    except TypeError as exc:
        log(f'export kwargs {list(extra)} rejected: {exc}')
log('wrote out.glb')
log('done')
