"""Inspect the live skyline and preserve the current map before repair."""
import unreal, json, os, shutil, traceback
OUT = 'C:/tk/skyline-repair-20260915'
os.makedirs(OUT, exist_ok=True)
try:
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    if world.get_path_name().split('.')[0] != '/Game/Maps/BangkokSoi':
        raise RuntimeError('Expected BangkokSoi')
    if not unreal.EditorLoadingAndSavingUtils.save_current_level():
        raise RuntimeError('Could not save map')
    backup = OUT + '/BangkokSoi-before-skyline.umap'
    if not os.path.exists(backup):
        shutil.copy2(os.path.join(unreal.Paths.project_content_dir(), 'Maps/BangkokSoi.umap'), backup)
    edit = unreal.MaterialEditingLibrary
    materials = {}
    def inspect_material(mat):
        if not mat: return None
        path = mat.get_path_name()
        if path in materials: return path
        row = {'class':mat.get_class().get_name()}
        materials[path] = row
        if isinstance(mat, unreal.MaterialInstance):
            row['parent'] = inspect_material(mat.get_editor_property('parent'))
            row['textures'] = {str(p.parameter_info.name):p.parameter_value.get_path_name() if p.parameter_value else None for p in mat.get_editor_property('texture_parameter_values')}
            row['scalars'] = {str(p.parameter_info.name):p.parameter_value for p in mat.get_editor_property('scalar_parameter_values')}
            row['overrides'] = str(mat.get_editor_property('base_property_overrides'))
        else:
            row.update(blend=str(mat.get_editor_property('blend_mode')), twoSided=mat.get_editor_property('two_sided'), shading=str(mat.get_editor_property('shading_model')))
            row['inputs'] = {}
            for name, prop in [('opacity',unreal.MaterialProperty.MP_OPACITY_MASK),('emissive',unreal.MaterialProperty.MP_EMISSIVE_COLOR),('wpo',unreal.MaterialProperty.MP_WORLD_POSITION_OFFSET)]:
                node = edit.get_material_property_input_node(mat,prop)
                row['inputs'][name] = node.get_path_name() if node else None
            row['textures'] = [t.get_path_name() for t in edit.get_used_textures(mat)]
        return path
    rows=[]
    for actor in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors():
        if str(actor.get_folder_path()) != 'Skyline': continue
        p=actor.get_actor_location();r=actor.get_actor_rotation();s=actor.get_actor_scale3d()
        row={'label':actor.get_actor_label(),'path':actor.get_path_name(),'position':[p.x,p.y,p.z],'rotation':[r.pitch,r.yaw,r.roll],'scale':[s.x,s.y,s.z],'tags':[str(t) for t in actor.tags],'components':[]}
        for c in actor.get_components_by_class(unreal.StaticMeshComponent):
            row['components'].append({'mesh':c.static_mesh.get_path_name(),'materials':[inspect_material(c.get_material(i)) for i in range(c.get_num_materials())],'boundsScale':c.get_editor_property('bounds_scale'),'castShadow':c.cast_shadow})
        rows.append(row)
    inspect_material(unreal.load_asset('/Game/BangkokSoi/Materials/M_Imposter'))
    with open(OUT+'/audit.json','w') as f:json.dump({'actors':rows,'materials':materials,'contentDir':unreal.Paths.project_content_dir()},f,indent=2)
    with open(OUT+'/audit.done','w') as f:f.write(str(len(rows)))
except Exception:
    with open(OUT+'/audit.error','w') as f:f.write(traceback.format_exc())
    raise
