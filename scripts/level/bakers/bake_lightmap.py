"""
Bake a level's lightmap in Blender, headless.

    blender -b --python bake_lightmap.py -- --glb in.glb --out <dir> --size 4096 --samples 128
        --moon dx,dy,dz,r,g,b,strength --sky r,g,b,strength [--exposure 1.0]
        [--device GPU|GPU+CPU|CPU] [--gutter 2] [--texels-per-meter 8]

Reads the level's static geometry (the lod0 meshes under every cell_* node),
unwraps a second UV layer across all of them into ONE atlas, and bakes two
passes with Cycles:

  RGB  diffuse direct+indirect with the moon OFF: sky light, bounce, and every
       emissive surface in the level (a neon sign lights its wall).
  A    the moon's visibility (Cycles' SHADOW bake with only the sun present),
       so the runtime can keep the moon as a real-time light, masked by this,
       and put a small dynamic shadow map on top for players.

Every light that arrived WITH the glTF is hidden for both passes. The runtime
re-creates all of them from the manifest, so anything baked here would be
counted twice; the sun this script builds from --moon is the only light Cycles
sees, and it is the one the alpha channel measures.

Writes <out>/lightmap.png (16-bit RGBA) and <out>/out.glb -- the same objects
re-exported with the lightmap UVs as TEXCOORD_1 so the Node side can swap the
vertex data back in by node name.
"""
import argparse
import os
import json
import math
import struct
import zlib
import sys
import time

import bpy
import bmesh
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
ap.add_argument('--ground', default='0.05,0.04,0.03')
ap.add_argument('--env', default=None)
ap.add_argument('--env-strength', type=float, default=1.0)
ap.add_argument('--env-rotation', type=float, default=0.0)
ap.add_argument('--exposure', type=float, default=1.0)
ap.add_argument('--margin', type=float, default=0.004)
# Gap between packed islands, in TEXELS of the final atlas. The old pack used
# `--margin` as a FRACTION of the atlas around every island, which is 16 px at
# 4096 -- fine for 18 islands, impossible for the 107,740 that smart-project
# makes of a real level's 310k boxy polygons: the pack overflowed the unit
# square (u ran to 2.98) and every bake of that level shipped an EMPTY atlas.
ap.add_argument('--gutter', type=float, default=2.0)
# Requested lightmap density. `--size` is the CEILING the derived size is capped
# at, not the size itself; see the atlas block below.
ap.add_argument('--texels-per-meter', type=float, default=8.0)
# Which Cycles devices to enable. GPU: the first working backend of
# OPTIX/CUDA/HIP/ONEAPI/METAL and nothing else. GPU+CPU: the same plus every
# CPU device -- Cycles' hybrid mode, which used to be forced here and is usually
# SLOWER on a fast card (the CPU tiles hold up the frame). CPU: no probe at all.
# AUTO is an alias for GPU, kept so an older caller still means what it meant.
ap.add_argument('--device', default='GPU', choices=['AUTO', 'GPU', 'GPU+CPU', 'CPU'])
# Objects per bake call. Cycles' bake operator is one blocking call with no
# progress of its own, so the only way to report any is to hand it the work in
# batches. See bake_batched() for why this does not change the result.
ap.add_argument('--batch', type=int, default=128)
args = ap.parse_args(argv)

T0 = time.time()


def log(msg):
    print(f'[thaikit] {time.time() - T0:6.1f}s {msg}', flush=True)

# The host bake agent kills THIS process by PID on a cancel. Blender started
# through WSL interop is the child of a stub whose PID is not the Windows one,
# so the only reliable way to name it is to have it say so itself.
log(f'pid {os.getpid()}')


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


# --- cast shadow OFF: out of Cycles' shadow rays ------------------------------
#
# A dynamic placement arrives under a `dynamic/<id>` Empty whose node extras
# the importer keeps as custom properties. Its `tk.castShadow` is the switch
# the author set in the editor, and until this it reached nothing: every
# skyline billboard -- a kilometre-tall quad standing at its AUTHORED yaw --
# was a shadow caster in both passes. Static placements never carry the flag
# here; they are merged per cell and their shadows ARE the lightmap.
def placement_flags(obj):
    node = obj
    while node is not None:
        tk = node.get('tk')
        if tk is not None and 'castShadow' in tk.keys():
            return bool(tk['castShadow']), bool(tk.get('receiveShadow', True))
        node = node.parent
    return True, True


no_cast = 0
for obj in bpy.data.objects:
    if obj.type != 'MESH' or obj in static:
        continue
    cast, _receive = placement_flags(obj)
    if not cast:
        obj.visible_shadow = False
        no_cast += 1
log(f'{no_cast} dynamic mesh(es) with cast shadow off are hidden from shadow rays')

# --- one mesh per object, or they share one lightmap island ------------------
#
# `dedup({ MESH })` in stage 1 is right for shipping -- twelve identical ground
# tiles have no business being twelve copies of the same buffer -- but the glTF
# importer turns "one mesh, twelve nodes" into twelve Blender objects sharing
# ONE mesh datablock, and a lightmap UV layer lives on the MESH. So all twelve
# tiles get the same UVs, bake to the same island, and write over each other:
# every tile ends up with whichever one Cycles happened to bake last, even
# though each stands somewhere different under different light.
#
# It is invisible in the output -- a plausible-looking floor with the wrong
# lighting on it -- and the only reason it surfaced is that the UV areas summed
# to 115% of an atlas, which a correct pack cannot do.
#
# Making the meshes single-user costs geometry memory in Blender only; the
# shipped GLB is unaffected, because the Node side swaps the baked UVs back in
# by node name.
copied = 0
for obj in static:
    if obj.data.users > 1:
        obj.data = obj.data.copy()
        copied += 1
if copied:
    log(f'un-shared {copied} mesh datablock(s) so every object gets its own lightmap island')

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
bpy.ops.uv.smart_project(angle_limit=math.radians(66), island_margin=0.0, correct_aspect=True, scale_to_bounds=False)
bpy.ops.object.mode_set(mode='OBJECT')


def pack(margin_uv):
    """Pack every static island into the unit square with `margin_uv` added on
    each side (ADD: absolute UV units, so the gap is the same for a 1 m box face
    and the ground tile). scale=True so the islands FILL the square."""
    bpy.ops.object.mode_set(mode='EDIT')
    bpy.ops.mesh.select_all(action='SELECT')
    try:
        bpy.ops.uv.pack_islands(margin=margin_uv, rotate=True, scale=True, margin_method='ADD')
    except TypeError:
        bpy.ops.uv.pack_islands(margin=margin_uv, rotate=True)
    bpy.ops.object.mode_set(mode='OBJECT')


def count_islands():
    """UV islands across the static set: faces joined by an edge whose UVs agree on both sides."""
    n = 0
    for obj in static:
        bm = bmesh.new()
        bm.from_mesh(obj.data)
        uv = bm.loops.layers.uv['lightmap']
        seen = set()
        for f in bm.faces:
            if f.index in seen:
                continue
            n += 1
            seen.add(f.index)
            stack = [f]
            while stack:
                cur = stack.pop()
                for l in cur.loops:
                    for l2 in l.edge.link_loops:
                        g = l2.face
                        if g is cur or g.index in seen:
                            continue
                        if (l[uv].uv - l2.link_loop_next[uv].uv).length < 1e-6 and (l.link_loop_next[uv].uv - l2[uv].uv).length < 1e-6:
                            seen.add(g.index)
                            stack.append(g)
        bm.free()
    return n


# First pack with NO gutter: that measures how much surface there is per atlas
# and decides the size. The gutter is then a known number of texels of THAT
# size, and a second pack lays the islands out with it.
pack(0.0)
log(f'{count_islands():,} UV islands across {len(static)} static objects')

# --- bake target -------------------------------------------------------------
#
# The atlas size is DERIVED from the density the level asked for.
#
# `texelsPerMeter` sat in the schema and in the editor's defaults and was read
# by nothing at all: the unwrap packed whatever smart-project produced and the
# atlas was whatever `--size` said, so the density a level actually got was an
# accident of how much surface it happened to contain. A small level wasted most
# of a 4096 atlas; a big one starved every prop on it.
#
# Measure it instead. For each triangle, sqrt(uv_area / world_area) is the
# atlas fraction one metre of surface occupies, so `texels_per_meter / median`
# is the atlas edge that delivers the requested density to the typical
# triangle. The MEDIAN rather than the mean because one enormous island (the
# ground) would otherwise set the size for everything.
#
# `--size` becomes the ceiling: asking for 8 texels/m on a city block should not
# silently allocate a 16k atlas.
def measure_density():
    """Median atlas-fraction per metre of surface, over every static triangle."""
    ratios = []
    world_area = 0.0
    uv_area = 0.0
    for obj in static:
        me = obj.data
        layer = me.uv_layers.get('lightmap')
        if layer is None:
            continue
        mw = obj.matrix_world
        try:
            me.calc_loop_triangles()  # a no-op / removed on newer Blender, where loop_triangles is always current
        except (AttributeError, RuntimeError):
            pass
        uvs = layer.data
        for tri in me.loop_triangles:
            a, b, c = (mw @ me.vertices[i].co for i in tri.vertices)
            wa = (b - a).cross(c - a).length * 0.5
            ua, ub, uc = (uvs[i].uv for i in tri.loops)
            ta = abs((ub - ua).cross(uc - ua)) * 0.5
            if wa <= 1e-9 or ta <= 1e-12:
                continue
            world_area += wa
            uv_area += ta
            ratios.append(math.sqrt(ta / wa))
    if not ratios:
        return None, 0.0, 0.0, (0.0, 0.0)
    ratios.sort()
    mid = ratios[len(ratios) // 2]
    p10 = ratios[int(len(ratios) * 0.10)]
    p90 = ratios[int(len(ratios) * 0.90)]
    return mid, world_area, uv_area, (p10, p90)


def choose_size(median):
    needed = args.texels_per_meter / median
    return int(min(args.size, max(512, 2 ** math.ceil(math.log2(max(1.0, needed)))))), needed


median, world_area, uv_area, spread = measure_density()
if median and median > 0:
    size, needed = choose_size(median)
    log(f'atlas {size}² from the gutterless pack (wanted {int(needed)}, ceiling {args.size}); '
        f'{world_area:.0f} m² of surface, islands cover {uv_area * 100:.1f}% of the atlas before the gutter')
    # The real pack: `--gutter` texels between islands at this size. ADD margin
    # is per SIDE, so half the gutter each. The gutter costs area, which drops
    # the density; if that leaves the level under what it asked for and the
    # ceiling allows, step the atlas up once and pack again for the new size.
    for _ in range(3):
        pack(args.gutter / (2.0 * size))
        median, world_area, uv_area, spread = measure_density()
        achieved = median * size
        log(f'packed with a {args.gutter:g} texel gutter: islands cover {uv_area * 100:.1f}% of {size}², '
            f'density {achieved:.1f} texels/m requested {args.texels_per_meter:g} '
            f'(p10 {spread[0] * size:.1f}, p90 {spread[1] * size:.1f})')
        bigger, _ = choose_size(median)
        if achieved >= args.texels_per_meter * 0.5 or bigger <= size:
            break
        size = bigger
        log(f'under half the requested density; stepping the atlas up to {size}² and packing again')
    if uv_area > 1.0:
        # A correct pack fits every island inside 0..1 exactly once, so the UV
        # areas cannot sum past the atlas. Over 100% means islands OVERLAP, and
        # overlapping islands bake on top of each other -- two surfaces sharing
        # texels, each getting the other's light. Worth knowing about before
        # trusting anything the atlas says.
        log(f'WARNING islands cover {uv_area * 100:.1f}% of the atlas: they overlap and will bake over each other')
    if spread[0] > 0 and spread[1] / spread[0] > 2.0:
        # pack_islands(scale=True) is meant to preserve relative island scale.
        # If it does not, the spread says so and `average_islands_scale` before
        # packing is the follow-up -- measured, not guessed.
        log(f'WARNING island scale spread is {spread[1] / spread[0]:.1f}x; the packer is not preserving relative scale')
    if achieved < args.texels_per_meter * 0.5:
        log(f'WARNING density is under half what was asked for; raise --size above {args.size}')
else:
    size = args.size
    log(f'WARNING atlas {size}² (no measurable UV area after packing; the lightmap will be EMPTY)')

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

# The level's OWN lights came in with the glTF and must not be baked. The
# exporter writes every authored light as KHR_lights_punctual and nothing
# strips them before this stage, so Blender instantiates the moon a SECOND
# time alongside the sun built above, plus every point and spot light -- all
# of which the runtime then re-creates live from the manifest. Baking them
# here is double counting: static geometry was lit twice by the moon and
# twice by every lamp, and pass 2's SHADOW bake saw all of them, so the
# alpha channel was a mixture rather than the moon's visibility.
#
# The deliberate cost: a punctual light's BOUNCE is no longer baked. A neon
# sign still lights its wall if it is emissive geometry (pass 1 keeps every
# emitter); it does not if it is only a point light. That is the right trade
# against counting its direct term twice.
hidden = 0
for obj in bpy.data.objects:
    if obj.type == 'LIGHT' and obj is not sun:
        obj.hide_render = True
        hidden += 1
log(f'hid {hidden} imported light(s); RGB is sky + bounce + emissive only')

world = scene.world or bpy.data.worlds.new('thaikit_world')
scene.world = world
world.use_nodes = True
wnodes = world.node_tree.nodes
wlinks = world.node_tree.links
bg = wnodes.get('Background')
if bg is None:
    bg = wnodes.new('ShaderNodeBackground')
    wlinks.new(bg.outputs['Background'], wnodes['World Output'].inputs['Surface'])

# --- what the world actually IS ----------------------------------------------
#
# Three cases, in order of preference:
#
#   --env       the level's own sky, as an equirect. This is the whole point:
#               a level with an authored backdrop used to bake as though lit by
#               one flat colour, so none of the art direction reached the
#               lighting it should dominate. Both picture modes arrive here as
#               the SAME six faces the level ships, folded back to an equirect,
#               so the bake is lit by the pixels the player sees.
#
#   no --env    the hemisphere ramp, which is what the runtime still gives
#               dynamic objects and what the editor previews. Written as
#               Generated -> Z -> MapRange -> ColorRamp, i.e. exactly three's
#               `mix(ground, sky, y * 0.5 + 0.5)`. Before this the ground colour
#               never reached Cycles at all and the world was a uniform dome of
#               the SKY colour, so everything was lit from below as though the
#               floor glowed.
#
# Either way `bg.inputs['Strength']` stays the single exposure control, because
# pass 2 zeroes it to isolate the moon.
if args.env:
    tex = wnodes.new('ShaderNodeTexEnvironment')
    tex.image = bpy.data.images.load(args.env)
    tex.image.colorspace_settings.name = 'sRGB'
    coord = wnodes.new('ShaderNodeTexCoord')
    mapping = wnodes.new('ShaderNodeMapping')
    mapping.vector_type = 'POINT'
    mapping.inputs['Rotation'].default_value[2] = math.radians(args.env_rotation)
    wlinks.new(coord.outputs['Generated'], mapping.inputs['Vector'])
    wlinks.new(mapping.outputs['Vector'], tex.inputs['Vector'])
    wlinks.new(tex.outputs['Color'], bg.inputs['Color'])
    bg.inputs['Strength'].default_value = args.env_strength
    log(f'world: the level\'s sky ({args.env_strength:.3f}x, yaw {args.env_rotation:+.1f} deg)')
else:
    ground = floats(args.ground)
    coord = wnodes.new('ShaderNodeTexCoord')
    sep = wnodes.new('ShaderNodeSeparateXYZ')
    rng = wnodes.new('ShaderNodeMapRange')
    ramp = wnodes.new('ShaderNodeValToRGB')
    wlinks.new(coord.outputs['Generated'], sep.inputs['Vector'])
    # `Generated` on a world is the view direction, already unit length, so Z
    # runs -1 (straight down) to +1 (straight up).
    wlinks.new(sep.outputs['Z'], rng.inputs['Value'])
    rng.inputs['From Min'].default_value = -1.0
    rng.inputs['From Max'].default_value = 1.0
    rng.inputs['To Min'].default_value = 0.0
    rng.inputs['To Max'].default_value = 1.0
    wlinks.new(rng.outputs['Result'], ramp.inputs['Fac'])
    ramp.color_ramp.elements[0].position = 0.0
    ramp.color_ramp.elements[0].color = (ground[0], ground[1], ground[2], 1.0)
    ramp.color_ramp.elements[1].position = 1.0
    ramp.color_ramp.elements[1].color = (sky[0], sky[1], sky[2], 1.0)
    wlinks.new(ramp.outputs['Color'], bg.inputs['Color'])
    bg.inputs['Strength'].default_value = sky[3]
    log(f'world: hemisphere ramp, ground {tuple(round(c, 3) for c in ground)} -> sky {tuple(round(c, 3) for c in sky[0:3])}')

# --- cycles ------------------------------------------------------------------
scene.render.engine = 'CYCLES'
scene.cycles.samples = args.samples
scene.cycles.use_denoising = True
scene.cycles.bake_type = 'DIFFUSE'
# The pack gutter is a FRACTION of the atlas (0.004 -> 16 px at 4096 but only
# 2 px at 512), so a constant 6 px dilation bleeds across islands at the small
# sizes the cheap round-trip test uses -- which made that test lie about seams.
scene.render.bake.margin = max(2, int(size * args.margin / 2))
try:
    scene.render.bake.margin_type = 'ADJACENT_FACES'
except (AttributeError, TypeError):
    pass  # Blender < 3.1
scene.render.bake.use_clear = True  # overridden to False before the batched bake
scene.render.bake.use_selected_to_active = False
hybrid_cpu = args.device == 'GPU+CPU'
if args.device in ('AUTO', 'GPU', 'GPU+CPU'):
    try:
        prefs = bpy.context.preferences.addons['cycles'].preferences
        picked = None
        for kind in ('OPTIX', 'CUDA', 'HIP', 'ONEAPI', 'METAL'):
            try:
                prefs.compute_device_type = kind
                prefs.get_devices()
                if any(d.type == kind for d in prefs.devices):
                    for d in prefs.devices:
                        d.use = d.type == kind or (hybrid_cpu and d.type == 'CPU')
                    scene.cycles.device = 'GPU'
                    picked = kind
                    break
            except Exception:
                continue
        if picked:
            enabled = [d.name for d in prefs.devices if d.use]
            log(f'cycles device: {picked} ({", ".join(enabled)}; cpu {"on" if hybrid_cpu else "off"})')
        else:
            # The loop used to fall out here silently with compute_device_type
            # left at the LAST kind tried, so a bake with no GPU printed nothing
            # about it. Say so, and leave the preference honest.
            try:
                prefs.compute_device_type = 'NONE'
            except Exception:
                pass
            scene.cycles.device = 'CPU'
            log('cycles device: CPU (no GPU backend found)')
    except Exception as exc:
        scene.cycles.device = 'CPU'
        log(f'no GPU ({exc}); CPU')
else:
    scene.cycles.device = 'CPU'
    log('cycles device: CPU (requested)')

def hms(seconds):
    """Compact duration: 45s, 6m12s, 1h04m."""
    seconds = int(max(0, seconds))
    if seconds < 60:
        return f'{seconds}s'
    if seconds < 3600:
        return f'{seconds // 60}m{seconds % 60:02d}s'
    return f'{seconds // 3600}h{(seconds % 3600) // 60:02d}m'


def bake_batched(label, bake_type, targets, batch_size):
    """
    Bake `targets` in batches, reporting progress and an ETA.

    Cycles' bake operator is ONE blocking call that reports nothing until it
    finishes, so a level like `thepurge` -- whose ground plane alone becomes
    4099 per-cell tiles, 4142 static meshes in all -- sits silent for many
    minutes with no way to tell a slow bake from a hung one. Handing the
    operator a slice at a time is the only progress there is.

    This does NOT change the result. Selection decides what gets baked TO;
    every object stays in the scene either way, so each batch still gathers its
    indirect light, its shadows and its emissive bounce from the whole level.
    The one thing it requires is `use_clear = False`: the batches share one
    atlas, and clearing per batch would wipe the ones already done.

    The ETA is measured, not guessed -- elapsed over the fraction complete --
    and it is deliberately recomputed from the WHOLE run rather than the last
    batch, because per-batch times swing with how much screen each object's
    islands cover.
    """
    total = len(targets)
    # `--batch` is a CEILING, not the batch size. Left alone it gives one batch
    # and therefore no progress on a small level (58 objects here) and 33
    # batches on a big one -- so aim for ~10 reports either way, with a floor of
    # 16 so a tiny level does not pay per-call overhead for a progress bar
    # nobody needs. The ceiling still bounds how much work one blocking call
    # can hide.
    batch_size = max(1, min(batch_size, max(16, math.ceil(total / 10))))
    batches = max(1, math.ceil(total / batch_size))
    log(f'{label}: {total} objects in {batches} batch(es) of up to {batch_size}')
    started = time.time()
    done = 0
    for i in range(batches):
        chunk = targets[i * batch_size:(i + 1) * batch_size]
        if not chunk:
            continue
        for obj in bpy.data.objects:
            obj.select_set(obj in chunk)
        bpy.context.view_layer.objects.active = chunk[0]
        bpy.ops.object.bake(type=bake_type)
        done += len(chunk)
        elapsed = time.time() - started
        frac = done / total
        # No ETA off the first batch: one sample of a variable cost is noise.
        eta = f', eta {hms(elapsed / frac - elapsed)}' if i else ''
        log(f'{label}: {frac * 100:5.1f}%  {done}/{total} objects  elapsed {hms(elapsed)}{eta}')
    log(f'{label}: done in {hms(time.time() - started)}')


# The batches share one atlas, so the operator must never clear it. The images
# are freshly allocated and therefore already zero.
scene.render.bake.use_clear = False

# Pass 1: sky + bounce + emission, moon off.
log(f'bake 1/2: diffuse (sky + indirect + emission) at {size}², {args.samples} samples')
sun.hide_render = True
# The world was built above (sky image or hemisphere ramp) and its Strength is
# already set; pass 2 is the only thing that changes it.
set_target(img_rgb)
scene.render.bake.use_pass_direct = True
scene.render.bake.use_pass_indirect = True
scene.render.bake.use_pass_color = False
bake_batched('bake 1/2 diffuse', 'DIFFUSE', static, args.batch)

# Pass 2: moon visibility.
log('bake 2/2: moon shadow mask')
sun.hide_render = False
bg.inputs['Strength'].default_value = 0.0
set_target(img_shadow)
bake_batched('bake 2/2 moon mask', 'SHADOW', static, args.batch)

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
lin = rgb[:, 0:3] * args.exposure

# --- RANGE: stop throwing away everything brighter than 1 ---------------------
#
# This used to be `clip(lin, 0, 1)`, and on a real bake 7.5% of covered texels
# came back pinned at full scale -- one texel in thirteen with its bounce
# destroyed. That is not an edge case: a neon sign lighting its own wall, or any
# emissive surface at all, is exactly the thing the RGB channel exists to carry,
# and it is exactly what clips.
#
# The atlas cannot hold HDR (it ships as 8-bit KTX2), so the fix is a single
# scalar divided out here and multiplied back at runtime. That costs NOTHING in
# the shader: `lightMapIntensity` is already a plain multiply in three's
# `lights_fragment_maps`, so the range folds into a uniform that was there
# anyway. RGBM was the alternative and is worse -- three's lightmap chunk has no
# decode hook, it loses the hardware sRGB decode, and bilinear filtering across
# texels carrying different exponents is simply wrong.
#
# The divisor comes from the 99.9th percentile of LUMINANCE over covered texels
# rather than the maximum, so one runaway specular texel cannot dim the whole
# level; quantising to quarters keeps it a round number across re-bakes, and the
# ceiling of 16 stops a pathological scene from crushing everything else into
# the bottom of the 8-bit range.
covered = np.any(rgb[:, 0:3] > 0.0, axis=1)
# The PER-CHANNEL peak, not the luminance. Clipping happens channel by channel,
# and luminance weights blue at 0.0722 -- so on a blue night sky a texel can peg
# its B channel at full scale while its luminance is 0.07, nowhere near a
# luminance percentile. Measured on `thepurge`: luminance p99.9 said 0.396 and
# implied nothing was clipping, while 2.1% of covered texels were actually at
# full scale in at least one channel, two thirds of them in blue alone.
peak = np.max(lin, axis=1)
p999 = float(np.percentile(peak[covered], 99.9)) if covered.any() else 0.0
rng = float(min(16.0, max(1.0, math.ceil(p999 * 4.0) / 4.0)))
clipped_before = float(np.count_nonzero(np.any(lin > 1.0, axis=1) & covered)) / max(1, int(covered.sum()))
out[:, 0:3] = np.clip(lin / rng, 0.0, 1.0)
out[:, 3] = np.clip(sh[:, 0], 0.0, 1.0)
still_clipped = float(np.count_nonzero(np.any(lin / rng > 1.0, axis=1) & covered)) / max(1, int(covered.sum()))
log(f'range {rng:g} (p99.9 channel peak {p999:.3f}); clipped {clipped_before * 100:.2f}% -> {still_clipped * 100:.2f}% of covered texels')

stats = {
    'range': rng,
    'p999': p999,
    'clipRateBefore': clipped_before,
    'clipRate': still_clipped,
    'coverage': float(covered.sum()) / float(covered.size),
    'size': size,
    'samples': args.samples,
}
# --- write the PNG OURSELVES --------------------------------------------------
#
# Not `img_out.save_render()`. Blender's writer UN-PREMULTIPLIES on save --
# it divides RGB by alpha -- and `alpha_mode = 'CHANNEL_PACKED'`, which exists
# to say "these channels are unrelated, leave them alone", does not stop it.
#
# The lightmap packs the moon's visibility into alpha, so every shadowed texel
# was having its sky-and-bounce colour divided by a number approaching zero and
# saturating. Measured on a real bake: 24% of fully shadowed texels pinned at
# full scale, and shadowed texels averaging 13.5x BRIGHTER than lit ones in a
# channel the moon is not even part of -- physically backwards, since a
# moon-shadowed spot is usually under something and sees less sky too. It was in
# every level ever baked, and it is invisible unless you correlate RGB against
# alpha, because a too-bright shadow still looks like a shadow.
#
# Doing it here also removes the view transform from the equation: the sRGB
# encode below is explicit, rather than a scene setting that has to be talked
# out of tone mapping first.
def write_png16(path_out, rgba):
    """A 16-bit RGBA PNG, big-endian samples, one IDAT. rgba is (n, 4) in 0..1."""
    h, w = size, size
    u16 = np.clip(rgba, 0.0, 1.0).reshape(h, w, 4)
    # `Image.pixels` is BOTTOM row first (Blender's UV origin is bottom-left);
    # a PNG is top row first, and the glTF exporter writes v' = 1 - v on the
    # assumption that the image was saved that way round. Writing the rows in
    # array order shipped the whole atlas upside down against its UVs: every
    # ground tile sampled some other island -- roof rectangles, facade strips
    # -- and read as jagged shadows nothing was casting. `save_render()` did
    # this flip for free, and this writer replaced it.
    u16 = u16[::-1]
    u16 = np.rint(u16 * 65535.0).astype('>u2')
    raw = np.zeros((h, w * 4 * 2 + 1), dtype=np.uint8)
    raw[:, 1:] = u16.reshape(h, w * 4).view(np.uint8)  # filter byte 0 per row
    body = zlib.compress(raw.tobytes(), 9)

    def chunk(kind, data):
        return (struct.pack('>I', len(data)) + kind + data
                + struct.pack('>I', zlib.crc32(kind + data) & 0xffffffff))

    ihdr = struct.pack('>IIBBBBB', w, h, 16, 6, 0, 0, 0)
    with open(path_out, 'wb') as fh:
        fh.write(b'\x89PNG\r\n\x1a\n')
        fh.write(chunk(b'IHDR', ihdr))
        fh.write(chunk(b'IDAT', body))
        fh.write(chunk(b'IEND', b''))


# sRGB encode for the COLOUR only. Alpha is a mask, not a colour, and the
# runtime samples it raw -- an sRGB texture stores alpha linearly, so encoding
# it here would make the moon's shadow the wrong shape.
srgb = np.empty_like(out)
c = out[:, 0:3]
srgb[:, 0:3] = np.where(c <= 0.0031308, c * 12.92, 1.055 * np.power(np.maximum(c, 1e-8), 1.0 / 2.4) - 0.055)
srgb[:, 3] = out[:, 3]
write_png16(f'{args.out}/lightmap.png', srgb)
with open(f'{args.out}/lightmap.json', 'w') as fh:
    json.dump(stats, fh)
log('wrote lightmap.png + lightmap.json')

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
