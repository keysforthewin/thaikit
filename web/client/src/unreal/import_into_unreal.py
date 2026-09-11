"""Run in Unreal's Python console using runpy.run_path (see the bundled README).

Or import this module and call import_kit(folder, refs=[...]). Imports are isolated
under /Game/ThaiKit/GLBImports; existing level actors are never rebound implicitly.
"""
import json
from pathlib import Path
import struct


def visible_materials(filename):
    data = Path(filename).read_bytes()
    magic, version, length, chunk_length, chunk_type = struct.unpack_from('<5I', data)
    if (magic, version, length, chunk_type) != (0x46546C67, 2, len(data), 0x4E4F534A):
        raise ValueError('Invalid GLB header: ' + str(filename))
    gltf = json.loads(data[20:20 + chunk_length])
    indices = {p['material'] for mesh in gltf.get('meshes', [])
               if not mesh.get('name', '').startswith('UCX_')
               for p in mesh['primitives'] if 'material' in p}
    return [gltf['materials'][i] for i in sorted(indices)]


def validate_materials(mesh, expected, unreal):
    slots = {str(s.material_slot_name): s.material_interface for s in mesh.static_materials}
    errors = []
    for source in expected:
        name = source['name']
        material = slots.get(name)
        if material is None:
            errors.append(name + ': missing material')
            continue
        # A generated Material graph is required. Empty generic PBR instances
        # lost vertex colours and every texture on the TukTuk in Unreal.
        if not isinstance(material, unreal.Material):
            errors.append(name + ': expected a generated Material graph, got ' + material.get_class().get_name())
            continue
        pbr = source.get('pbrMetallicRoughness', {})
        needs_texture = any(k.endswith('Texture') for k in source) or any(k.endswith('Texture') for k in pbr)
        if needs_texture and not unreal.MaterialEditingLibrary.get_used_textures(material):
            errors.append(name + ': GLB has textures but imported material has none')
    if errors:
        raise RuntimeError('\n'.join(errors))


def import_kit(folder, refs=None, destination='/Game/ThaiKit/GLBImports'):
    import unreal
    folder = Path(folder)
    manifest = json.loads((folder / 'manifest.json').read_text(encoding='utf-8'))
    items = [i for i in manifest['items'] if refs is None or i['ref'] in refs]
    if refs is not None and set(refs) - {i['ref'] for i in items}:
        raise ValueError('Requested ref is absent from manifest')
    report = []
    manager = unreal.InterchangeManager.get_interchange_manager_scripted()
    for item in items:
        try:
            filename = folder / item['file']
            expected = visible_materials(filename)
            pipeline = unreal.InterchangeGenericAssetsPipeline()
            pipeline.material_pipeline.material_import = unreal.InterchangeMaterialImportOption.IMPORT_AS_MATERIALS
            pipeline.material_pipeline.reuse_existing_materials = False
            pipeline.material_pipeline.texture_pipeline.allow_non_power_of_two = True
            pipeline.mesh_pipeline.import_collision_according_to_mesh_name = True
            pipeline.mesh_pipeline.collision = True
            pipeline.mesh_pipeline.build_nanite = False
            pipeline.common_meshes_properties.recompute_normals = False
            params = unreal.ImportAssetParameters()
            params.is_automated = True
            params.replace_existing = True
            params.override_pipelines = [unreal.SoftObjectPath(pipeline.get_path_name())]
            assets = manager.import_asset(destination + '/' + item['asset'], manager.create_source_data(str(filename)), params)
            meshes = [a for a in assets if isinstance(a, unreal.StaticMesh)]
            if len(meshes) != 1:
                raise RuntimeError('Expected one StaticMesh, got ' + str(len(meshes)))
            validate_materials(meshes[0], expected, unreal)
            for asset in assets:
                unreal.EditorAssetLibrary.save_loaded_asset(asset)
            report.append({'ref': item['ref'], 'ok': True, 'mesh': meshes[0].get_path_name()})
        except Exception as error:
            report.append({'ref': item['ref'], 'ok': False, 'error': str(error)})
    (folder / 'unreal-import-report.json').write_text(json.dumps(report, indent=2), encoding='utf-8')
    failures = [r for r in report if not r['ok']]
    if failures:
        raise RuntimeError(str(len(failures)) + ' imports failed; see unreal-import-report.json')
    return report


if __name__ == '__main__':
    # exec(open(...).read()) does not set __file__; use runpy instead (README).
    import_kit(Path(__file__).resolve().parent)
