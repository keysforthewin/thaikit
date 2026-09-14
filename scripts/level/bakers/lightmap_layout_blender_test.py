"""Real model regression, run under Blender --python-exit-code 1."""
import bpy,sys,os,math,tempfile,json
sys.path.insert(0,os.path.dirname(__file__))
from lightmap_layout import prepare_layout, audit_baked_coverage
for o in list(bpy.data.objects):bpy.data.objects.remove(o,do_unlink=True)
fixture=json.load(open(os.path.join(os.path.dirname(__file__),'fixtures/van-side.json')))
mesh=bpy.data.meshes.new('van-side')
points=[v['p'] for t in fixture['tris'] for v in t]
mesh.from_pydata(points,[],[tuple(range(i,i+3)) for i in range(0,len(points),3)])
obj=bpy.data.objects.new('van-side',mesh);bpy.context.scene.collection.objects.link(obj)
base=mesh.uv_layers.new(name='UVMap')
for i,loop in enumerate(base.data):loop.uv=(i%3/3,i%7/7)
objects=[o for o in bpy.data.objects if o.type=='MESH']
for obj in objects:
    obj.select_set(True)
    if not obj.data.uv_layers.get('lightmap'):obj.data.uv_layers.new(name='lightmap')
    obj.data.uv_layers.active=obj.data.uv_layers['lightmap']
bpy.context.view_layer.objects.active=objects[0]
def authored_corners(objects):
    # UV1 is intentionally regenerated; all authored surface data must survive.
    rows=[]
    for obj in objects:
        mesh=obj.data
        for face in mesh.polygons:
            rows.append(tuple(sorted(tuple(mesh.vertices[mesh.loops[j].vertex_index].co)
                +tuple(mesh.uv_layers['UVMap'].data[j].uv)
                +tuple(round(float(v),5) for v in mesh.corner_normals[j].vector)
                for j in face.loop_indices)))
    return sorted(rows)
before=authored_corners(objects)
if True:
    out='/repo/scratch/van-bake-diagnosis-20260914/new-layout'
    os.makedirs(out,exist_ok=True)
    objects,mapping,report=prepare_layout(objects,512,12,32,out,print)
    assert authored_corners(objects)==before, 'layout changed geometry, material UVs or corner normals'
    assert report['ok'] and not report['failures']
    assert all(o.name in mapping for o in objects)
    print('VAN COVERAGE PASS',json.dumps(report))

# Run the production coverage gate against Cycles, not only our rasteriser.
import numpy as np
mat=bpy.data.materials.new('coverage');mat.use_nodes=True;mat.node_tree.nodes.clear()
e=mat.node_tree.nodes.new('ShaderNodeEmission');e.inputs[0].default_value=(1,1,1,1)
o=mat.node_tree.nodes.new('ShaderNodeOutputMaterial');mat.node_tree.links.new(e.outputs[0],o.inputs[0])
image=bpy.data.images.new('coverage',512,512,alpha=True,float_buffer=True)
image.generated_color=(0,0,0,0)
t=mat.node_tree.nodes.new('ShaderNodeTexImage');t.image=image;mat.node_tree.nodes.active=t
for obj in bpy.data.objects:obj.select_set(obj in objects)
for obj in objects:
    obj.data.materials.clear();obj.data.materials.append(mat)
    obj.data.uv_layers.active=obj.data.uv_layers['lightmap']
bpy.context.view_layer.objects.active=objects[0]
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=1
scene.render.bake.margin=0;scene.render.bake.use_clear=False
bpy.ops.object.bake(type='EMIT')
pixels=np.array(image.pixels).reshape(512,512,4)
layout=json.load(open(os.path.join(out,'atlas-layout.json')))
owner,failures=audit_baked_coverage(objects,pixels[:,:,3]>.5,layout['rectangles'],0,512)
np.savez_compressed(os.path.join(out,'coverage-debug.npz'),raw=pixels[:,:,3],owner=owner)
with open(os.path.join(out,'failures.json'),'w') as f:json.dump(failures,f)
bpy.ops.wm.save_as_mainfile(filepath=os.path.join(out,'fixture.blend'))
assert not failures, failures[:10]
print('VAN REAL CYCLES COVERAGE PASS')
