"""Real Cycles regression: later batches must not paint over earlier islands."""
import os, sys
import bpy
import numpy as np
sys.path.insert(0,os.path.dirname(__file__))
from lightmap_padding import prepare_bake_images, dilate_lightmap
for o in list(bpy.data.objects):bpy.data.objects.remove(o,do_unlink=True)
scene=bpy.context.scene;scene.render.engine='CYCLES';scene.cycles.device='CPU';scene.cycles.samples=1
scene.render.bake.use_clear=False
objects=[]
for name,u,color,x in [('red',(0.1,0.4),(1,0,0,1),0),('green',(0.43,0.73),(0,1,0,1),3),('black',(0.76,0.95),(0,0,0,1),6)]:
    mesh=bpy.data.meshes.new(name);mesh.from_pydata([(x,0,0),(x+1,0,0),(x+1,1,0),(x,1,0)],[],[(0,1,2,3)])
    uv=mesh.uv_layers.new(name='UVMap')
    for loop,coord in zip(uv.data,[(u[0],.1),(u[1],.1),(u[1],.9),(u[0],.9)]):loop.uv=coord
    obj=bpy.data.objects.new(name,mesh);scene.collection.objects.link(obj)
    mat=bpy.data.materials.new(name);mat.use_nodes=True;mat.node_tree.nodes.clear()
    emit=mat.node_tree.nodes.new('ShaderNodeEmission');emit.inputs[0].default_value=color
    output=mat.node_tree.nodes.new('ShaderNodeOutputMaterial');mat.node_tree.links.new(emit.outputs[0],output.inputs['Surface'])
    target=mat.node_tree.nodes.new('ShaderNodeTexImage');mat.node_tree.nodes.active=target;obj.data.materials.append(mat)
    objects.append((obj,target))
for kind in ['EMIT','DIFFUSE','SHADOW']:
    image=bpy.data.images.new('atlas'+kind,width=64,height=64,alpha=True,float_buffer=True)
    prepare_bake_images(scene,[image])
    for obj,target in objects:target.image=image
    for obj,target in objects:
        for o,t in objects:o.select_set(o==obj)
        bpy.context.view_layer.objects.active=obj;bpy.ops.object.bake(type=kind)
    rgba=np.array(image.pixels,dtype=np.float32).reshape(64,64,4)
    covered=rgba[:,:,3]>.5
    assert covered[int(.5*64),int(.85*64)], 'fully black surface lost from coverage'
    assert not covered[63,63], 'uncovered gutter marked as surface'
    before=rgba[covered].copy()
    dilate_lightmap(rgba,covered,1)
    np.testing.assert_array_equal(rgba[covered],before)
    if kind=='EMIT':
        np.testing.assert_array_equal(rgba[32,int(.35*64),:3],[1,0,0])
        np.testing.assert_array_equal(rgba[32,int(.6*64),:3],[0,1,0])
        np.testing.assert_array_equal(rgba[32,int(.85*64),:3],[0,0,0])
    print('PASS',kind,'preserved',int(covered.sum()),'surface texels',flush=True)
