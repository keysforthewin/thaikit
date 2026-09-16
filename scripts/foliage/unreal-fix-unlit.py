"""Restore glTF unlit vertex colour and alpha semantics lost by Interchange."""
import unreal, json, runpy, traceback
OUT='C:/tk/foliage-20260915'
ASSETS='C:/tk/foliage-assets'
try:
    visible=runpy.run_path(ASSETS+'/import_into_unreal.py',run_name='foliage_import')['visible_materials']
    manifest=json.load(open(ASSETS+'/manifest.json'));edit=unreal.MaterialEditingLibrary;report=[]
    for item in manifest['items']:
        mesh=unreal.load_asset('/Game/ThaiKit/Foliage/'+item['asset']+'/'+item['asset'])
        slots={str(s.material_slot_name):s.material_interface for s in mesh.static_materials}
        for source in visible(ASSETS+'/'+item['file']):
            if 'KHR_materials_unlit' not in source.get('extensions',{}):continue
            mat=slots[source['name']]
            textures=[t for t in edit.get_used_textures(mat) if not t.get_path_name().startswith(('/Engine/','/InterchangeAssets/'))]
            if len(textures)!=1:raise RuntimeError(mat.get_path_name()+': expected one albedo, got '+str(len(textures)))
            texture=textures[0];factor=source.get('pbrMetallicRoughness',{}).get('baseColorFactor',[1,1,1,1])
            edit.delete_all_material_expressions(mat)
            mat.set_editor_property('shading_model',unreal.MaterialShadingModel.MSM_UNLIT)
            mat.set_editor_property('two_sided',source.get('doubleSided',False))
            masked=source.get('alphaMode')=='MASK'
            mat.set_editor_property('blend_mode',unreal.BlendMode.BLEND_MASKED if masked else unreal.BlendMode.BLEND_OPAQUE)
            mat.set_editor_property('opacity_mask_clip_value',source.get('alphaCutoff',.5))
            def expr(cls,x,y):return edit.create_material_expression(mat,cls,x,y)
            sample=expr(unreal.MaterialExpressionTextureSample,-700,0);sample.set_editor_property('texture',texture)
            vertex=expr(unreal.MaterialExpressionVertexColor,-700,250)
            color=expr(unreal.MaterialExpressionConstant3Vector,-700,450);color.set_editor_property('constant',unreal.LinearColor(*factor[:3],1))
            first=expr(unreal.MaterialExpressionMultiply,-400,0);second=expr(unreal.MaterialExpressionMultiply,-150,0)
            edit.connect_material_expressions(sample,'RGB',first,'A');edit.connect_material_expressions(vertex,'RGB',first,'B')
            edit.connect_material_expressions(first,'',second,'A');edit.connect_material_expressions(color,'',second,'B')
            edit.connect_material_property(second,'',unreal.MaterialProperty.MP_EMISSIVE_COLOR)
            if masked:edit.connect_material_property(sample,'A',unreal.MaterialProperty.MP_OPACITY_MASK)
            edit.recompile_material(mat);unreal.EditorAssetLibrary.save_loaded_asset(mat)
            report.append({'material':mat.get_path_name(),'texture':texture.get_path_name(),'masked':masked,'twoSided':source.get('doubleSided',False),'vertexColor':True})
    with open(OUT+'/unlit-repair.json','w') as f:json.dump(report,f,indent=2)
    with open(OUT+'/unlit-repair.done','w') as f:f.write(str(len(report)))
except Exception:
    with open(OUT+'/unlit-repair.error','w') as f:f.write(traceback.format_exc())
    raise
