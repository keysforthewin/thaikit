"""Verify atlas splitting preserves positions, UV0 and authored corner normals."""
import bpy,sys,os,tempfile,math
import numpy as np
sys.path.insert(0,os.path.dirname(__file__))
from lightmap_layout import prepare_layout
for o in list(bpy.data.objects):bpy.data.objects.remove(o,do_unlink=True)
mesh=bpy.data.meshes.new('two-panels')
mesh.from_pydata([(x+offset,y,0) for offset in (0,10) for x,y in ((0,0),(3,0),(3,3),(0,3))],[],[(0,1,2),(0,2,3),(4,5,6),(4,6,7)])
obj=bpy.data.objects.new('two-panels',mesh);bpy.context.scene.collection.objects.link(obj)
base=mesh.uv_layers.new(name='UVMap');mesh.uv_layers.new(name='lightmap')
for i,item in enumerate(base.data):item.uv=(i*.03,i*.07)
for f in mesh.polygons:f.use_smooth=True
mesh.normals_split_custom_set([(.1 if i//3%2 else -.1,.2,math.sqrt(.95)) for i in range(len(mesh.loops))])
def corners(objects):
 result={}
 for obj in objects:
  for loop in obj.data.loops:
   key=tuple(obj.data.vertices[loop.vertex_index].co)+tuple(obj.data.uv_layers['UVMap'].data[loop.index].uv)
   result[key]=np.array(obj.data.corner_normals[loop.index].vector)
 return result
before=corners([obj]);out=tempfile.mkdtemp()
objects,mapping,report=prepare_layout([obj],64,12,32,out,print)
assert report['atlasCount']==2
assert len(objects)==2
assert sum(len(o.data.polygons) for o in objects)==4
after=corners(objects)
assert before.keys()==after.keys(), 'geometry or material UV changed'
for key in before:assert np.linalg.norm(before[key]-after[key])<1e-3, 'authored normal changed'
print('ATLAS SPLIT ATTRIBUTES PASS')
