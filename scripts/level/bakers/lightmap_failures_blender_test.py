"""Replay actual full-level failures, then validate repaired UVs near atlas edges."""
import bpy,json,os,sys,tempfile,numpy as np
sys.path.insert(0,os.path.dirname(__file__))
from lightmap_layout import prepare_layout,audit_baked_coverage
fixture=json.load(open(os.path.join(os.path.dirname(__file__),'fixtures/atlas-009-failures.json')))
for o in list(bpy.data.objects):bpy.data.objects.remove(o,do_unlink=True)
mesh=bpy.data.meshes.new('zinc-and-plumeria');tris=fixture['triangles']
mesh.from_pydata([p for t in tris for p in t['points']],[],[tuple(range(i*3,i*3+3)) for i in range(len(tris))])
obj=bpy.data.objects.new('zinc-and-plumeria',mesh);bpy.context.scene.collection.objects.link(obj)
mesh.uv_layers.new(name='UVMap');uv=mesh.uv_layers.new(name='lightmap')
for i,t in enumerate(tris):
 for j in range(3):uv.data[i*3+j].uv=t['uv'][j]
ids=mesh.attributes.new('tk_chart','INT','FACE')
charts=sorted(map(int,fixture['rectangles']));rects=[dict(fixture['rectangles'][str(c)],atlas=0) for c in charts]
ids.data.foreach_set('value',[charts.index(t['chart']) for t in tris])
mat=bpy.data.materials.new('coverage');mat.use_nodes=True;mat.node_tree.nodes.clear()
e=mat.node_tree.nodes.new('ShaderNodeEmission');e.inputs[0].default_value=(1,1,1,1)
o=mat.node_tree.nodes.new('ShaderNodeOutputMaterial');mat.node_tree.links.new(e.outputs[0],o.inputs[0])
image=bpy.data.images.new('coverage',4096,4096,alpha=True,float_buffer=True)
tex=mat.node_tree.nodes.new('ShaderNodeTexImage');tex.image=image;mat.node_tree.nodes.active=tex
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=1
scene.render.bake.margin=0;scene.render.bake.use_clear=False
pixels=np.zeros(4096*4096*4,dtype=np.float32)
def check(objects,rectangles):
 image.pixels.foreach_set(np.zeros_like(pixels))
 for o in bpy.data.objects:o.select_set(o in objects)
 for o in objects:o.data.materials.clear();o.data.materials.append(mat);o.data.uv_layers.active=o.data.uv_layers['lightmap']
 bpy.context.view_layer.objects.active=objects[0]
 bpy.ops.object.bake(type='EMIT')
 image.pixels.foreach_get(pixels)
 return audit_baked_coverage(objects,pixels.reshape(4096,4096,4)[:,:,3]>.5,rectangles,0,4096)[1]
old=check([obj],rects);assert old,'fixture no longer reproduces original failure'
print('ORIGINAL FAILURES REPRODUCED',len(old),flush=True)
out=tempfile.mkdtemp();objects,mapping,report=prepare_layout([obj],4096,12,32,out,print)
layout=json.load(open(os.path.join(out,'atlas-layout.json')))
# Stress float32 rounding at the distant corner, including reflected UVs.
for o in objects:
 for v in o.data.uv_layers['lightmap'].data:v.uv=((v.uv.x*4096+3500)/4096,(v.uv.y*4096+3500)/4096)
for r in layout['rectangles']:r['x']+=3500;r['y']+=3500
failures=check(objects,layout['rectangles']);assert not failures,failures[:10]
print('FULL-LEVEL FAILURE REGRESSION PASS',report['charts'],flush=True)
