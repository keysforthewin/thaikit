"""Install measured ThaiKit cylinders as separate convex collision hulls, through MCP."""
import unreal,json,os,shutil,traceback
OUT='C:/tk/foliage-colliders-20260916'
os.makedirs(OUT,exist_ok=True)
changed=[];old_components=[]
try:
 for name in ['apply.done','apply.error']:
  if os.path.exists(OUT+'/'+name):os.remove(OUT+'/'+name)
 world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
 assert world.get_path_name().split('.')[0]=='/Game/Maps/BangkokSoi'
 assert unreal.EditorLoadingAndSavingUtils.save_current_level()
 content=unreal.Paths.project_content_dir()
 backup=OUT+'/BangkokSoi-before-colliders.umap'
 if not os.path.isfile(backup):shutil.copy2(os.path.join(content,'Maps','BangkokSoi.umap'),backup)
 records=json.load(open(OUT+'/variant-colliders.json'))
 collision=unreal.GeometryScript_Collision
 options=unreal.GeometryScriptCollisionFromMeshOptions()
 options.set_editor_property('method',unreal.GeometryScriptCollisionGenerationMethod.CONVEX_HULLS)
 for name in ['auto_detect_boxes','auto_detect_spheres','auto_detect_capsules','simplify_hulls','remove_fully_contained_shapes']:options.set_editor_property(name,False)
 prim=unreal.GeometryScriptPrimitiveOptions()
 ready=[]
 # Build and validate the new compounds before modifying any imported asset.
 for row in records:
  name=row['asset'];mesh=unreal.load_asset('/Game/ThaiKit/Foliage/'+name+'/'+name)
  if not mesh:continue # Other GLB representations have not been imported into this project.
  assert isinstance(mesh,unreal.StaticMesh),name
  components=[]
  for p in row['parts']:
   assert p['type']=='cylinder'
   x,y,z=p['offset'];radius,halfheight,_=p['scale']
   dynamic=unreal.DynamicMesh()
   transform=unreal.Transform(location=unreal.Vector(x*100,z*100,y*100))
   # 32 sides circumscribe the analytic cylinder within 0.5% radial error.
   import math
   unreal.GeometryScript_Primitives.append_cylinder(dynamic,prim,transform,radius*100/math.cos(math.pi/32),halfheight*200,32,0,True,unreal.GeometryScriptPrimitiveOriginMode.CENTER)
   c=collision.generate_collision_from_mesh(dynamic,options)
   assert collision.get_simple_collision_shape_count(c)==1
   components.append(c)
  compound=collision.combine_simple_collision_array(components) if components else unreal.GeometryScriptSimpleCollision()
  assert collision.get_simple_collision_shape_count(compound)==len(row['parts']),name
  ready.append((mesh,compound,row))
 with unreal.ScopedEditorTransaction('ThaiKit physical foliage collision'):
  for mesh,compound,row in ready:
   body=mesh.get_editor_property('body_setup')
   old=collision.get_simple_collision_from_static_mesh(mesh)
   oldflag=body.get_editor_property('collision_trace_flag')
   assert unreal.EditorAssetLibrary.save_loaded_asset(mesh,False)
   rel=mesh.get_path_name().split('.')[0][len('/Game/'):]+'.uasset'
   dest=os.path.join(OUT,'assets',rel);os.makedirs(os.path.dirname(dest),exist_ok=True)
   if not os.path.isfile(dest):shutil.copy2(os.path.join(content,rel),dest)
   changed.append((mesh,old,oldflag))
   mesh.modify();body.modify()
   body.set_editor_property('collision_trace_flag',unreal.CollisionTraceFlag.CTF_USE_SIMPLE_AS_COMPLEX)
   collision.set_simple_collision_of_static_mesh(compound,mesh,unreal.GeometryScriptSetSimpleCollisionOptions(),unreal.GeometryScriptSetStaticMeshCollisionOptions())
   assert collision.get_simple_collision_shape_count(collision.get_simple_collision_from_static_mesh(mesh))==len(row['parts']),row['asset']
   assert unreal.EditorAssetLibrary.save_loaded_asset(mesh,False)
  lookup={r['asset']:r for r in records};actor_rows=[]
  for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
   if 'TK_FOLIAGE_V1' not in [str(t) for t in a.tags]:continue
   c=a.static_mesh_component;row=lookup[c.static_mesh.get_name()]
   old_components.append((c,c.get_collision_enabled(),c.get_collision_profile_name()))
   c.modify();c.set_collision_profile_name('BlockAll' if row['parts'] else 'NoCollision')
   c.set_collision_enabled(unreal.CollisionEnabled.QUERY_AND_PHYSICS if row['parts'] else unreal.CollisionEnabled.NO_COLLISION)
   actor_rows.append({'label':a.get_actor_label(),'asset':row['asset'],'parts':len(row['parts']),'enabled':str(c.get_collision_enabled())})
 assert unreal.EditorLoadingAndSavingUtils.save_current_level()
 json.dump({'assets':len(ready),'actors':actor_rows,'saved':True},open(OUT+'/apply.done','w'),indent=2)
except Exception:
 error=traceback.format_exc()
 for c,enabled,profile in reversed(old_components):c.set_collision_profile_name(profile);c.set_collision_enabled(enabled)
 for mesh,old,flag in reversed(changed):
  mesh.get_editor_property('body_setup').set_editor_property('collision_trace_flag',flag)
  unreal.GeometryScript_Collision.set_simple_collision_of_static_mesh(old,mesh,unreal.GeometryScriptSetSimpleCollisionOptions(),unreal.GeometryScriptSetStaticMeshCollisionOptions())
  unreal.EditorAssetLibrary.save_loaded_asset(mesh,False)
 if changed:unreal.EditorLoadingAndSavingUtils.save_current_level()
 open(OUT+'/apply.error','w').write(error);raise
