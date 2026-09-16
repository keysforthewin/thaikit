"""Read live rendered geometry and transforms, including collision-disabled meshes."""
import unreal,json,os,array,time,traceback
OUT='C:/tk/foliage-placement-20260915'
def v(a):return [a.x,a.y,a.z]
try:
 for marker in ['inventory.error','inventory.done']:
  if os.path.exists(OUT+'/'+marker):os.remove(OUT+'/'+marker)
 start=time.time()
 world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
 assert world.get_path_name().startswith('/Game/Maps/BangkokSoi.')
 assert os.path.isfile(OUT+'/BangkokSoi-before-placement-repair.umap')
 actors=unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
 rows=[];meshes={};data=open(OUT+'/geometry.bin','wb')
 for actor in actors:
  components=actor.get_components_by_class(unreal.StaticMeshComponent)
  if not components:continue
  p=actor.get_actor_location();r=actor.get_actor_rotation();s=actor.get_actor_scale3d()
  row={'label':actor.get_actor_label(),'path':actor.get_path_name(),'folder':str(actor.get_folder_path()),'tags':[str(t) for t in actor.tags],
       'position':v(p),'rotation':[r.roll,r.pitch,r.yaw],'scale':v(s),'hidden':actor.is_hidden_ed(),'components':[]}
  for c in components:
   mesh=c.static_mesh
   if not mesh or not c.is_visible():continue
   path=mesh.get_path_name()
   if path not in meshes:
    box=mesh.get_bounding_box();sections=[]
    for si in range(mesh.get_num_sections(0)):
     vertices,triangles,*_=unreal.ProceduralMeshLibrary.get_section_from_static_mesh(mesh,0,si)
     positions=array.array('f',(axis for point in vertices for axis in (point.x,point.y,point.z)))
     indices=array.array('I',triangles)
     offset=data.tell();data.write(positions.tobytes());data.write(indices.tobytes())
     material=mesh.get_material(si)
     sections.append({'offset':offset,'vertices':len(vertices),'indices':len(triangles),'material':material.get_name() if material else None})
    meshes[path]={'name':mesh.get_name(),'min':v(box.min),'max':v(box.max),'sections':sections}
   t=c.get_world_transform();q=t.rotation
   transform={'position':v(t.translation),'quaternion':[q.x,q.y,q.z,q.w],'scale':v(t.scale3d)}
   entry={'path':c.get_path_name(),'mesh':path,'transform':transform,'collision':str(c.get_collision_enabled()),'castShadow':c.cast_shadow}
   if isinstance(c,unreal.InstancedStaticMeshComponent):
    entry['instances']=[]
    for i in range(c.get_instance_count()):
     t=c.get_instance_transform(i,True);q=t.rotation
     entry['instances'].append({'position':v(t.translation),'quaternion':[q.x,q.y,q.z,q.w],'scale':v(t.scale3d)})
   row['components'].append(entry)
  if row['components']:rows.append(row)
 data.close()
 json.dump({'world':world.get_path_name(),'actors':rows,'meshes':meshes,'seconds':time.time()-start},open(OUT+'/inventory.json','w'),separators=(',',':'))
 open(OUT+'/inventory.done','w').write(str(len(rows)))
except Exception:
 open(OUT+'/inventory.error','w').write(traceback.format_exc());raise
