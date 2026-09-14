"""Run with Blender -b --python; UV repair must preserve authored geometry/UV0."""
import bpy,sys,os
sys.path.insert(0,os.path.dirname(os.path.abspath(__file__)))
from lightmap_islands import ensure_sampled_islands
m=bpy.data.meshes.new('split-normal-seam')
# Two triangles of one strip, with split vertices as a glTF normal seam would use.
m.from_pydata([(0,0,0),(1,0,0),(1,3,0),(0,0,0),(1,3,0),(0,3,0)],[],[(0,1,2),(3,4,5)])
base=m.uv_layers.new(name='UVMap');lm=m.uv_layers.new(name='lightmap')
coords=[(.1,.2),(.10002,.2),(.10002,.21),(.1,.2),(.10002,.21),(.1,.21)]
for i,p in enumerate(coords):base.data[i].uv=(i/5,i/10);lm.data[i].uv=p
original=[tuple(v.co) for v in m.vertices];uv0=[tuple(v.uv) for v in base.data]
assert ensure_sampled_islands(m,8192)==1, 'split vertices must not split a continuous UV island'
assert [tuple(v.co) for v in m.vertices]==original
assert [tuple(v.uv) for v in base.data]==uv0
x=[v.uv.x*8192 for v in lm.data]
assert abs(max(x)-min(x)-1)<.001
assert abs(((max(x)+min(x))*.5)%1-.5)<.001
assert tuple(lm.data[0].uv)==tuple(lm.data[3].uv)
assert tuple(lm.data[2].uv)==tuple(lm.data[4].uv)
print('Lightmap strip coverage, shared seams, geometry and material UV0: PASS')

# Exercise Cycles itself: the old island lies entirely between texel centres.
import numpy as np
for obj in list(bpy.data.objects):
    bpy.data.objects.remove(obj, do_unlink=True)
mesh = bpy.data.meshes.new('subpixel-surface')
mesh.from_pydata([(0,0,0),(1,0,0),(1,3,0),(0,3,0)], [], [(0,1,2,3)])
layer = mesh.uv_layers.new(name='lightmap')
for loop, value in zip(layer.data, [(20.1/64,16/64),(20.3/64,16/64),
                                    (20.3/64,48/64),(20.1/64,48/64)]):
    loop.uv = value
obj = bpy.data.objects.new('subpixel-surface', mesh)
bpy.context.scene.collection.objects.link(obj)
obj.select_set(True)
bpy.context.view_layer.objects.active = obj
mat = bpy.data.materials.new('red-emission')
mat.use_nodes = True
mat.node_tree.nodes.clear()
output = mat.node_tree.nodes.new('ShaderNodeOutputMaterial')
emission = mat.node_tree.nodes.new('ShaderNodeEmission')
emission.inputs['Color'].default_value = (1,0,0,1)
mat.node_tree.links.new(emission.outputs[0], output.inputs['Surface'])
image = bpy.data.images.new('coverage-test', 64, 64, alpha=True, float_buffer=True)
image.generated_color = (0,0,0,0)
texture = mat.node_tree.nodes.new('ShaderNodeTexImage')
texture.image = image
mat.node_tree.nodes.active = texture
mesh.materials.append(mat)
scene = bpy.context.scene
scene.render.engine = 'CYCLES'
scene.cycles.device = 'CPU'
scene.cycles.samples = 1
scene.render.bake.margin = 0
scene.render.bake.use_clear = False
scene.render.bake.use_selected_to_active = False
def bake_pixels():
    image.pixels.foreach_set(np.zeros(64*64*4, dtype=np.float32))
    bpy.ops.object.bake(type='EMIT')
    pixels = np.empty(64*64*4, dtype=np.float32)
    image.pixels.foreach_get(pixels)
    return pixels.reshape(64,64,4)
before = bake_pixels()
print('before coverage', np.count_nonzero(before[:,:,3] > .5),
      'red', np.count_nonzero(before[:,:,0] > .5))
assert not np.any(before[:,:,3] > .5), 'fixture must reproduce missing samples'
assert ensure_sampled_islands(mesh, 64) == 1
after = bake_pixels()
covered = after[:,:,3] > .5
assert covered.sum() >= 32, 'the repaired strip must receive Cycles samples'
assert np.all(after[covered,0] > .99), 'sampled surface must retain its illumination'
print(f'Cycles subpixel strip: 0 samples before, {covered.sum()} after: PASS')
