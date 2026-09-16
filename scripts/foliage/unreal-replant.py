"""Replace the exact old foliage inventory after validating every new mesh."""
import unreal, json, os, math, random, traceback
OUT='C:/tk/foliage-20260915'
ASSETS='C:/tk/foliage-assets'
OLD={'SM_EXT_BananaClump','SM_EXT_CoconutPalm','SM_EXT_FicusTree','SM_EXT_PottedPlumeria','SM_EXT_BougainvilleaPlanter','SM_EXT_HedgePlanter','SM_EXT_RainTree','SM_EXT_TreelineSegment'}
PLANTS=['bougainvillea','ixora','croton','snake-plant','birds-nest-fern','elephant-ear','areca-palm','dwarf-banana','pandan','dwarf-plumeria']
TREES=['rain-tree','banyan','tropical-almond','mango-tree','tamarind','golden-shower','queens-crape-myrtle','indian-mast-tree','coconut-palm','foxtail-palm']
random.seed(731)
try:
    if os.path.exists(OUT+'/replant.done'):raise RuntimeError('Replacement already completed; inspect the saved report before rerunning')
    if not os.path.isfile(OUT+'/BangkokSoi-before-foliage.umap'):raise RuntimeError('Recovery copy missing')
    world=unreal.get_editor_subsystem(unreal.UnrealEditorSubsystem).get_editor_world()
    if world.get_path_name().split('.')[0]!='/Game/Maps/BangkokSoi':raise RuntimeError('Wrong level')
    subsystem=unreal.get_editor_subsystem(unreal.EditorActorSubsystem)
    actors=list(subsystem.get_all_level_actors())
    if any('TK_FOLIAGE_V1' in [str(t) for t in a.tags] for a in actors):raise RuntimeError('Partial replacement detected; inspect before retry')
    manifest=json.load(open(ASSETS+'/manifest.json'))
    meshes={};material_report=[]
    for item in manifest['items']:
        name=item['asset'];mesh=unreal.load_asset('/Game/ThaiKit/Foliage/'+name+'/'+name)
        if not isinstance(mesh,unreal.StaticMesh):raise RuntimeError('Missing '+name)
        extent=mesh.get_bounding_box();height=(extent.max.z-extent.min.z)/100
        if abs(height-item['size']['h'])>0.03:raise RuntimeError(name+' imported height mismatch: '+str(height))
        for slot in mesh.static_materials:
            mat=slot.material_interface
            if not isinstance(mat,unreal.Material):raise RuntimeError(name+' missing material graph')
            material_report.append({'asset':name,'material':mat.get_path_name(),'twoSided':mat.get_editor_property('two_sided'),'blendMode':str(mat.get_editor_property('blend_mode')),'shadingModel':str(mat.get_editor_property('shading_model'))})
        meshes[(item['name'],item['variant'])]=mesh
    with open(OUT+'/materials-imported.json','w') as f:json.dump(material_report,f,indent=2)
    old=[];fence=[]
    for actor in actors:
        folder=str(actor.get_folder_path())
        if folder=='Border/Fence':fence.append(actor)
        hits=[c.static_mesh.get_name() for c in actor.get_components_by_class(unreal.StaticMeshComponent) if c.static_mesh and c.static_mesh.get_name() in OLD]
        if hits:
            if len(hits)!=1:raise RuntimeError('Unexpected multi-component vegetation: '+actor.get_actor_label())
            old.append((actor,hits[0],folder))
    if len(old)!=232:raise RuntimeError('Expected 232 old foliage actors, found '+str(len(old)))
    if len(fence)!=234:raise RuntimeError('Expected 234 fence actors')
    bounds=[min(a.get_actor_location().x for a in fence),max(a.get_actor_location().x for a in fence),min(a.get_actor_location().y for a in fence),max(a.get_actor_location().y for a in fence)]
    def outside(p):return p.x<bounds[0]-10 or p.x>bounds[1]+10 or p.y<bounds[2]-10 or p.y>bounds[3]+10
    created=[];replacements=[]
    def spawn(species,variant,position,yaw,scale,label,folder):
        mesh=meshes[(species,variant)]
        actor=subsystem.spawn_actor_from_object(mesh,position,unreal.Rotator(roll=0,pitch=0,yaw=yaw))
        if not actor:raise RuntimeError('Spawn failed '+label)
        created.append(actor);actor.set_actor_label(label);actor.set_folder_path(folder)
        actor.set_actor_scale3d(unreal.Vector(scale,scale,scale))
        actor.tags=[unreal.Name('TK_FOLIAGE_V1'),unreal.Name('TK_BAKE_LIGHTING_OFF'),unreal.Name('TK_ASSET_'+species),unreal.Name('TK_VARIANT_'+variant)]
        if outside(position):actor.tags=list(actor.tags)+[unreal.Name('TK_EXTERIOR')]
        c=actor.static_mesh_component;c.set_cast_shadow(False);c.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
        return actor
    try:
        plant_index=0;tree_index=0;border_index=0
        for i,(actor,mesh,folder) in enumerate(sorted(old,key=lambda row:row[0].get_actor_label())):
            p=actor.get_actor_location();yaw=actor.get_actor_rotation().yaw
            if mesh=='SM_EXT_TreelineSegment':
                species=TREES[border_index%len(TREES)];border_index+=1
                variant='billboard' if folder=='Border/TreelineFar' else 'exterior'
                scale=random.uniform(.78,1.10)
                name=('bb_' if variant=='billboard' else '')+'tk_foliage_border_'+str(i).zfill(3)
                target='Border/Foliage/'+('Billboards' if variant=='billboard' else 'Trees')
            elif mesh in {'SM_EXT_CoconutPalm','SM_EXT_FicusTree','SM_EXT_RainTree'}:
                species=(['coconut-palm','foxtail-palm'][tree_index%2] if mesh=='SM_EXT_CoconutPalm' else ['banyan','mango-tree','tamarind'][tree_index%3] if mesh=='SM_EXT_FicusTree' else 'rain-tree');tree_index+=1
                variant='exterior' if outside(p) else 'mesh-lod0';scale=random.uniform(.85,1.05)
                name='tk_foliage_tree_'+str(i).zfill(3);target='Vegetation/Trees'
            else:
                species=PLANTS[plant_index%len(PLANTS)];plant_index+=1;variant='mesh-lod0';scale=random.uniform(.9,1.1)
                name='tk_foliage_plant_'+str(i).zfill(3);target='Vegetation/CityPlants'
            new=spawn(species,variant,p,yaw,scale,name,target)
            replacements.append({'old':actor.get_actor_label(),'oldMesh':mesh,'new':name,'species':species,'variant':variant,'position':[p.x,p.y,p.z],'scale':scale})
        # Small understorey breaks up the base of the outer tree line.
        for i,(actor,mesh,folder) in enumerate(row for row in old if row[2]=='Border/Treeline'):
            if i%3:continue
            p=actor.get_actor_location();p.x+=random.uniform(-120,120);p.y+=random.uniform(-120,120)
            species=['ixora','birds-nest-fern','elephant-ear','pandan','dwarf-banana'][(i//3)%5]
            spawn(species,'mesh-lod0',p,random.uniform(-180,180),random.uniform(1,1.3),'tk_foliage_understorey_'+str(i).zfill(3),'Border/Foliage/Understorey')
    except Exception:
        for actor in created:subsystem.destroy_actor(actor)
        raise
    # Every replacement now exists. Only the exact inventoried actors are removed.
    for actor,mesh,folder in old:
        if not subsystem.destroy_actor(actor):raise RuntimeError('Could not remove '+actor.get_actor_label())
    excluded=[]
    for actor in subsystem.get_all_level_actors():
        if str(actor.get_folder_path())=='Border/Fence':continue
        components=actor.get_components_by_class(unreal.StaticMeshComponent)
        if not components:continue
        tags=[str(t) for t in actor.tags]
        exterior=outside(actor.get_actor_location())
        if exterior or 'TK_FOLIAGE_V1' in tags:
            for tag in ['TK_BAKE_LIGHTING_OFF']+(['TK_EXTERIOR'] if exterior else []):
                if tag not in tags:tags.append(tag)
            actor.tags=[unreal.Name(t) for t in tags]
            for c in components:
                c.set_cast_shadow(False)
                if exterior:c.set_collision_enabled(unreal.CollisionEnabled.NO_COLLISION)
            excluded.append(actor.get_actor_label())
    if not unreal.EditorLoadingAndSavingUtils.save_current_level():raise RuntimeError('Final save failed')
    report={'removed':len(old),'created':len(created),'replacements':replacements,'excludedLighting':excluded,'fenceBoundsCm':bounds,'fenceActors':len(fence)}
    with open(OUT+'/replacement-report.json','w') as f:json.dump(report,f,indent=2)
    with open(OUT+'/replant.done','w') as f:f.write(str(len(created)))
except Exception:
    with open(OUT+'/replant.error','w') as f:f.write(traceback.format_exc())
    raise
