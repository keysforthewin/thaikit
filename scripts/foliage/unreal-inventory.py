"""Run in Unreal before replacing the explicitly inventoried vegetation."""
import unreal, json, os, shutil, traceback
OUT='C:/tk/foliage-20260915'
os.makedirs(OUT,exist_ok=True)
try:
    world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    if world.get_path_name().split('.')[0]!='/Game/Maps/BangkokSoi':raise RuntimeError('Expected BangkokSoi, got '+world.get_path_name())
    if not unreal.EditorLoadingAndSavingUtils.save_current_level():raise RuntimeError('Level save failed')
    package=os.path.join(unreal.Paths.project_content_dir(),'Maps','BangkokSoi.umap')
    backup=os.path.join(OUT,'BangkokSoi-before-foliage.umap')
    if not os.path.isfile(backup):shutil.copy2(package,backup)
    actors=unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    result=[]
    for actor in actors:
        row={'label':actor.get_actor_label(),'path':actor.get_path_name(),'class':actor.get_class().get_name(),'folder':str(actor.get_folder_path()),'tags':[str(t) for t in actor.tags]}
        p=actor.get_actor_location();r=actor.get_actor_rotation();s=actor.get_actor_scale3d()
        row.update(position=[p.x,p.y,p.z],rotation=[r.roll,r.pitch,r.yaw],scale=[s.x,s.y,s.z],components=[])
        for c in actor.get_components_by_class(unreal.StaticMeshComponent):
            mesh=c.static_mesh
            entry={'path':c.get_path_name(),'mesh':mesh.get_name() if mesh else None,'meshPath':mesh.get_path_name() if mesh else None,'castShadow':c.cast_shadow,'visible':c.is_visible(),'collisionEnabled':str(c.get_collision_enabled())}
            if isinstance(c,unreal.InstancedStaticMeshComponent):entry['instances']=c.get_instance_count()
            row['components'].append(entry)
        result.append(row)
    with open(os.path.join(OUT,'inventory-before.json'),'w') as f:json.dump({'world':world.get_path_name(),'package':package,'backup':backup,'actors':result},f,indent=2)
    with open(os.path.join(OUT,'inventory.done'),'w') as f:f.write(str(len(result)))
except Exception:
    with open(os.path.join(OUT,'inventory.error'),'w') as f:f.write(traceback.format_exc())
    raise
