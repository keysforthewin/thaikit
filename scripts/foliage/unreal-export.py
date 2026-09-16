import unreal,json,os,time,traceback,shutil,datetime
REPO=r'\\wsl.localhost\Ubuntu-22.04\home\mulligan\code\thaikit'
OUT=os.path.join(REPO,'levels','bangkoksoi','unreal')
RUN_ID=globals().get('RUN_ID','foliage-20260915')
RUN_DIR=os.path.join(REPO,'scratch',RUN_ID)
os.makedirs(RUN_DIR,exist_ok=True)
LOG=os.path.join(RUN_DIR,'export.log')
for marker in ['export.done','export.error']:
 if os.path.exists(os.path.join(RUN_DIR,marker)):os.remove(os.path.join(RUN_DIR,marker))
temporary_cameras=[]
saved_mesh_settings=[]
uv_copies=[];uv_swaps=[]

def log(s):
 with open(LOG,'a') as f:f.write(str(s)+'\n')
def vec(v,scale=1):return [v.x*scale,v.z*scale,v.y*scale]
try:
 world=unreal.EditorLevelLibrary.get_editor_world()
 assert world.get_path_name().startswith('/Game/Maps/BangkokSoi.')
 unreal.EditorLoadingAndSavingUtils.save_current_level()
 backup=os.path.join(OUT,'before-'+RUN_ID+'-'+datetime.datetime.now().strftime('%H%M%S'));os.makedirs(backup)
 for name in ['level.glb','level.glb.materials.json','actors.json','sky.json','lights.json']:
  p=os.path.join(OUT,name)
  if os.path.exists(p):shutil.copy2(p,backup)
 shutil.copy2(os.path.join(unreal.Paths.project_content_dir(),'Maps','BangkokSoi.umap'),os.path.join(backup,'BangkokSoi.umap'))
 rows={};lights=[];seen=set()
 for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
  label=a.get_actor_label()
  if label in seen:
   label=label+'__'+a.get_name();a.set_actor_label(label)
  seen.add(label)
  if isinstance(a,unreal.StaticMeshActor):
   c=a.static_mesh_component
   if c.static_mesh:
    if str(a.get_folder_path())=='Skyline' and label.startswith('bb_'):
     material=c.get_material(0)
     while isinstance(material,unreal.MaterialInstance):material=material.get_editor_property('parent')
     assert material.get_editor_property('blend_mode')==unreal.BlendMode.BLEND_MASKED,'Skyline lost transparency: '+label
     assert unreal.MaterialEditingLibrary.get_material_property_input_node(material,unreal.MaterialProperty.MP_WORLD_POSITION_OFFSET),'Skyline lost editor camera facing: '+label
    assert label not in rows, 'duplicate mesh label '+label
    rows[label]={'mesh':c.static_mesh.get_name(),'folder':str(a.get_folder_path()),'mobility':str(c.mobility),'physics':bool(c.is_simulating_physics()),'castShadow':bool(c.cast_shadow),'collisionEnabled':str(c.get_collision_enabled()),'bakeLighting':'TK_BAKE_LIGHTING_OFF' not in [str(t) for t in a.tags],'exterior':'TK_EXTERIOR' in [str(t) for t in a.tags],'billboard':'yaw' if label.startswith('bb_') else 'none','tags':[str(t) for t in a.tags]}
  for c in a.get_components_by_class(unreal.LightComponentBase):
   color=c.get_light_color() if hasattr(c,'get_light_color') else unreal.LinearColor(1,1,1,1)
   row={'label':label,'class':c.get_class().get_name(),'position':vec(c.get_world_location(),.01),'direction':vec(c.get_forward_vector()),'up':vec(c.get_up_vector()),'right':vec(c.get_right_vector()),'colorLinear':[color.r,color.g,color.b]}
   for key in ['intensity','intensity_units','use_temperature','temperature','cast_shadows','source_radius','soft_source_radius','source_length','source_width','source_height','barn_door_angle','barn_door_length','attenuation_radius','inner_cone_angle','outer_cone_angle','visible','affects_world','sky_distance_threshold','source_type','cubemap']:
    try:
     v=c.get_editor_property(key);row[key]=v if isinstance(v,(bool,int,float,str)) else str(v)
    except:pass
   if row.get('use_temperature'):
    t=unreal.LinearColor();t.set_temperature(row['temperature']);row['colorLinear']=[color.r*t.r,color.g*t.g,color.b*t.b]
   if isinstance(c,unreal.LocalLightComponent) and 'CANDELAS' not in row.get('intensity_units',''):
    import math
    cosine=math.cos(math.radians(row['outer_cone_angle'])) if row['class']=='SpotLightComponent' else -1
    factor=unreal.LocalLightComponent.get_units_conversion_factor(c.get_editor_property('intensity_units'),unreal.LightUnits.CANDELAS,cosine)
    row['sourceIntensity']=row['intensity'];row['sourceIntensityUnits']=row['intensity_units']
    row['intensity']*=factor;row['intensity_units']=str(unreal.LightUnits.CANDELAS)
   lights.append(row)
 json.dump({'actors':rows,'generatedAt':datetime.datetime.now().isoformat()},open(os.path.join(OUT,'actors.json'),'w'),indent=1)
 json.dump({'lights':lights,'generatedAt':datetime.datetime.now().isoformat()},open(os.path.join(OUT,'lights.json'),'w'),indent=1)
 unreal.EditorLoadingAndSavingUtils.save_current_level()
 log('sidecars: %d meshes, %d light components'%(len(rows),len(lights)))
 sub=unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
 starts=[a for a in sub.get_all_level_actors() if isinstance(a,unreal.PlayerStart)]
 for i,a in enumerate(starts):
  cam=sub.spawn_actor_from_class(unreal.CameraActor,a.get_actor_location(),a.get_actor_rotation())
  temporary_cameras.append(cam)
  cam.set_actor_label('spawn_'+a.get_actor_label().lower().replace(' ','_'))
 log('temporary spawn cameras: %d'%len(temporary_cameras))
 all_actors=list(sub.get_all_level_actors())
 moons=[a for a in all_actors if isinstance(a,unreal.DirectionalLight)]
 assert len(moons)==1 and moons[0].light_component.mobility==unreal.ComponentMobility.MOVABLE,'Expected one movable moon'
 assert any(isinstance(a,unreal.CameraActor) and a.get_actor_label().startswith('spawn_') for a in all_actors),'Missing spawn cameras'
 assert sum(a.get_class().get_name()=='BP_TK_Sky_C' for a in all_actors)==1,'Expected one sky'
 log('preflight passed: one movable moon, sky, and spawn cameras')

 o=unreal.GLTFExportOptions()
 opts={'export_uniform_scale':.01,'export_lights':True,'export_cameras':True,'export_vertex_colors':True,'export_hidden_in_game':False,'export_level_sequences':False,'export_animation_sequences':False,'bake_material_inputs':unreal.GLTFMaterialBakeMode.USE_MESH_DATA,'texture_image_format':unreal.GLTFTextureImageFormat.PNG,'export_proxy_materials':True,'use_mesh_quantization':False,'export_lightmaps':True}
 for k,v in opts.items():o.set_editor_property(k,v)
 o.set_editor_property('default_material_bake_size',unreal.GLTFMaterialBakeSize(2048,2048))
 log('export starting, USE_MESH_DATA 2048 PNG; all actors, lights and cameras')
 t=time.time();p=os.path.join(OUT,'level.glb');sys_path = os.path.join(REPO, 'scripts', 'level', 'unreal'); __import__('sys').path.insert(0, sys_path)
 import export_materials, importlib
 importlib.reload(export_materials)
 ok=export_materials.export_level(world,p,o,[])
 __import__('sys').settrace(None)
 assert ok and os.path.getsize(p)>100000,'export failed'
 log('export complete: %d bytes, %.1fs'%(os.path.getsize(p),time.time()-t))
 sky_script=os.path.join(REPO,'scripts','level','unreal','tk_sky_dump.py')
 exec(compile(open(sky_script,encoding='utf-8').read(),sky_script,'exec'),{})
 for filename in ['actors.json','lights.json','sky.json','level.glb.materials.json']:
  target=os.path.join(OUT,filename)
  data=open(target,'rb').read().replace(b'\r\n',b'\n')
  open(target,'wb').write(data)
 log('DONE')
 open(os.path.join(RUN_DIR,'export.done'),'w').write('ok')
except:
 log(traceback.format_exc())
 open(os.path.join(RUN_DIR,'export.error'),'w').write(traceback.format_exc())
finally:
 __import__('sys').settrace(None)

 for mesh,build in saved_mesh_settings:
  unreal.get_editor_subsystem(unreal.StaticMeshEditorSubsystem).set_lod_build_settings(mesh,0,build)
 for cam in temporary_cameras:
  unreal.get_editor_subsystem(unreal.EditorActorSubsystem).destroy_actor(cam)
 unreal.EditorLoadingAndSavingUtils.save_current_level()
 log('CLEANUP DONE')
