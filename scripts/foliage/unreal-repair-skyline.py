"""Restore skyline cutouts and editor/runtime yaw billboarding after GLB reimport.

Uses the existing M_Imposter camera-facing shader and current imported textures.
Component overrides keep the fix attached to placed actors as mesh defaults change.
"""
import unreal, json, os, sys, traceback, importlib
OUT = 'C:/tk/skyline-repair-20260915'
REPO = r'\\wsl.localhost\Ubuntu-22.04\home\mulligan\code\thaikit'
try:
    audit = json.load(open(OUT+'/audit.json'))
    world = unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    if not world.get_path_name().startswith('/Game/Maps/BangkokSoi.'):
        raise RuntimeError('Expected BangkokSoi')
    if not unreal.EditorLoadingAndSavingUtils.save_current_level(): raise RuntimeError('Save failed')
    parent = unreal.load_asset('/Game/BangkokSoi/Materials/M_Imposter')
    edit = unreal.MaterialEditingLibrary
    for prop in [unreal.MaterialProperty.MP_OPACITY_MASK, unreal.MaterialProperty.MP_WORLD_POSITION_OFFSET]:
        if not edit.get_material_property_input_node(parent,prop): raise RuntimeError('Original billboard shader is incomplete')
    if parent.get_editor_property('blend_mode') != unreal.BlendMode.BLEND_MASKED: raise RuntimeError('Original shader must be masked')
    actors = {a.get_actor_label():a for a in unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()}
    staged = []
    for row in audit['actors']:
        actor = actors[row['label']]
        if not actor.get_actor_label().startswith('bb_'): raise RuntimeError('Missing runtime billboard label')
        component = actor.static_mesh_component
        if component.static_mesh.get_path_name() != row['components'][0]['mesh']: raise RuntimeError('Skyline mesh changed since audit')
        source = audit['materials'][row['components'][0]['materials'][0]]
        textures = source['textures']
        if not isinstance(textures,list) or len(textures)!=1: raise RuntimeError('Expected one current skyline texture')
        texture = unreal.load_asset(textures[0])
        if not texture: raise RuntimeError('Missing texture')
        name = component.static_mesh.get_name()[6:]
        old = unreal.load_asset('/Game/BangkokSoi/Materials/MI_'+name)
        brightness = 1.6 if ('Led' in name or 'Mall' in name) else .9
        if old:
            for param in old.get_editor_property('scalar_parameter_values'):
                if str(param.parameter_info.name)=='Brightness': brightness=float(param.parameter_value)
        staged.append((actor,component,name,texture,brightness))
    if len(staged)!=15: raise RuntimeError('Expected 15 skyscrapers')
    result=[]
    for actor,component,name,texture,brightness in staged:
        instance_name = 'MI_TK_Skyline_'+name
        path = '/Game/BangkokSoi/Materials/'+instance_name
        material = unreal.load_asset(path)
        if not material:
            material = unreal.AssetToolsHelpers.get_asset_tools().create_asset(instance_name,'/Game/BangkokSoi/Materials',unreal.MaterialInstanceConstant,unreal.MaterialInstanceConstantFactoryNew())
        edit.set_material_instance_parent(material,parent)
        edit.set_material_instance_texture_parameter_value(material,'Tex',texture)
        edit.set_material_instance_scalar_parameter_value(material,'Brightness',brightness)
        component.set_material(0,material)
        component.set_cast_shadow(False)
        component.set_editor_property('bounds_scale',1.6)
        component.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
        unreal.EditorAssetLibrary.save_loaded_asset(material)
        result.append({'actor':actor.get_actor_label(),'material':path,'texture':texture.get_path_name(),'brightness':brightness,'masked':True,'cameraFacing':'material WPO yaw'})
    if not unreal.EditorLoadingAndSavingUtils.save_current_level(): raise RuntimeError('Final save failed')
    json.dump(result,open(OUT+'/repair.json','w'),indent=2)
    # Check the real exporter on these actors before the full-level export.
    sys.path.insert(0,os.path.join(REPO,'scripts/level/unreal'))
    import export_materials
    importlib.reload(export_materials)
    options = unreal.GLTFExportOptions()
    for key,value in {'export_uniform_scale':.01,'export_vertex_colors':True,'export_hidden_in_game':False,'export_proxy_materials':True,'bake_material_inputs':unreal.GLTFMaterialBakeMode.USE_MESH_DATA,'texture_image_format':unreal.GLTFTextureImageFormat.PNG}.items():options.set_editor_property(key,value)
    options.set_editor_property('default_material_bake_size',unreal.GLTFMaterialBakeSize(2048,2048))
    export_materials.export_level(world,OUT+'/skyline.glb',options,[a for a,*_ in staged])
    with open(OUT+'/repair.done','w') as f:f.write(str(len(result)))
except Exception:
    with open(OUT+'/repair.error','w') as f:f.write(traceback.format_exc())
    raise
