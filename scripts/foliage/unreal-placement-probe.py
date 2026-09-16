"""Save a recovery map and inspect live foliage/mesh-query APIs before repair."""
import unreal,json,os,shutil,traceback
OUT='C:/tk/foliage-placement-20260915'
os.makedirs(OUT,exist_ok=True)
try:
 world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
 assert world.get_path_name().split('.')[0]=='/Game/Maps/BangkokSoi',world.get_path_name()
 assert unreal.EditorLoadingAndSavingUtils.save_current_level(),'Level save failed'
 backup=OUT+'/BangkokSoi-before-placement-repair.umap'
 if not os.path.exists(backup):shutil.copy2(os.path.join(unreal.Paths.project_content_dir(),'Maps','BangkokSoi.umap'),backup)
 actors=unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
 foliage=[a for a in actors if 'TK_FOLIAGE_V1' in [str(t) for t in a.tags]]
 assert len(foliage)==270,len(foliage)
 actor=foliage[0];component=actor.static_mesh_component;mesh=component.static_mesh
 result={'world':world.get_path_name(),'backup':backup,'foliage':len(foliage),'mesh':mesh.get_path_name(),
 'componentQueries':[k for k in dir(component) if any(t in k for t in ['bound','transform','world','trace'])],
 'meshQueries':[k for k in dir(mesh) if any(t in k for t in ['section','vertex','description','lod'])]}
 library=getattr(unreal,'ProceduralMeshLibrary',None)
 result['proceduralMeshLibrary']=bool(library)
 if library:
  result['sectionDoc']=library.get_section_from_static_mesh.__doc__
  section=library.get_section_from_static_mesh(mesh,0,0)
  result['sectionTypes']=[type(v).__name__ for v in section]
  result['sectionLengths']=[len(v) for v in section]
 result['traceDoc']=unreal.SystemLibrary.line_trace_multi.__doc__
 result['traceSingleDoc']=unreal.SystemLibrary.line_trace_single.__doc__
 json.dump(result,open(OUT+'/probe.json','w'),indent=2)
except Exception:
 open(OUT+'/probe.error','w').write(traceback.format_exc());raise
