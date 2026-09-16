"""Temporarily isolate the target billboard; run again with RESTORE=True."""
import unreal, json
OUT='C:/tk/skyline-repair-20260915'
RESTORE=False
actors=unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
if RESTORE:
    state=json.load(open(OUT+'/visibility.json'))
    for actor in actors:
        if actor.get_path_name() in state:actor.set_is_temporarily_hidden_in_editor(state[actor.get_path_name()])
else:
    state={}
    for actor in actors:
        if str(actor.get_folder_path())=='Skyline' and actor.get_actor_label()!='bb_MallPodiumWithTwinTowers':
            state[actor.get_path_name()]=actor.is_temporarily_hidden_in_editor()
            actor.set_is_temporarily_hidden_in_editor(True)
    json.dump(state,open(OUT+'/visibility.json','w'))
