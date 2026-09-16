"""Apply an audited translation-only foliage repair through the live Unreal MCP console."""
import unreal,json,os,traceback,math
OUT='C:/tk/foliage-placement-20260915'
changed=[]
try:
 for name in ('apply.done','apply.error'):
  if os.path.exists(OUT+'/'+name):os.remove(OUT+'/'+name)
 world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
 assert world.get_path_name().startswith('/Game/Maps/BangkokSoi.')
 assert os.path.isfile(OUT+'/BangkokSoi-before-placement-repair.umap')
 plan=json.load(open(OUT+'/placement-plan.json'))
 actors={a.get_path_name():a for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()}
 assert len(plan)==270 and len({p['path'] for p in plan})==270
 # Check every source position before modifying anything; fail on concurrent editing.
 for p in plan:
  a=actors[p['path']];v=a.get_actor_location()
  assert a.get_actor_label()==p['label'] and 'TK_FOLIAGE_V1' in [str(t) for t in a.tags]
  assert all(abs(x-y)<.01 for x,y in zip((v.x,v.y,v.z),p['before'])),p['label']+' moved since audit'
  assert all(math.isfinite(x) for x in p['after'])
 with unreal.ScopedEditorTransaction('Ground and clear BangkokSoi foliage'):
  for p in plan:
   a=actors[p['path']];a.modify();changed.append(p)
   a.set_actor_location(unreal.Vector(*p['after']),False,True)
  for p in plan:
   v=actors[p['path']].get_actor_location()
   assert all(abs(x-y)<.01 for x,y in zip((v.x,v.y,v.z),p['after']))
 assert unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
 json.dump({'changed':len(changed),'horizontal':sum(p['distanceXYCm']>1 for p in plan),'saved':True},open(OUT+'/apply.done','w'))
except Exception:
 error=traceback.format_exc()
 for p in reversed(changed):actors[p['path']].set_actor_location(unreal.Vector(*p['before']),False,True)
 if changed:unreal.get_editor_subsystem(unreal.LevelEditorSubsystem).save_current_level()
 open(OUT+'/apply.error','w').write(error);raise
