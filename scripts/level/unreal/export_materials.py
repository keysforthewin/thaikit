"""Export with temporary legacy glTF proxies for Interchange Substrate instances.

Run inside Unreal Python. Call export_level(world, out, options, actors=[]).
No assets are saved. Original export options/user data are restored in finally.
Only the stock Interchange metallic/roughness Substrate parent is adapted;
custom Substrate graphs require an artist-authored export proxy.
"""
import json
import math
import os
import struct
import uuid

SUBSTRATE_PARENT = '/InterchangeAssets/gltf/Substrate/M_GLTF.M_GLTF'
LEGACY_PARENT = '/InterchangeAssets/gltf/M_Default.M_Default'
PARAMETERS = ('scalar_parameter_values', 'vector_parameter_values', 'texture_parameter_values')
TEXTURE_SLOTS = {'BaseColorTexture': ('pbrMetallicRoughness', 'baseColorTexture'),
                 'MetallicRoughnessTexture': ('pbrMetallicRoughness', 'metallicRoughnessTexture'),
                 'NormalTexture': ('normalTexture',), 'OcclusionTexture': ('occlusionTexture',),
                 'EmissiveTexture': ('emissiveTexture',)}


def read_glb_json(file):
    with open(file, 'rb') as stream:
        magic, version, length = struct.unpack('<III', stream.read(12))
        if magic != 0x46546C67 or version != 2 or length != os.path.getsize(file):
            raise ValueError('Invalid GLB: ' + file)
        size, kind = struct.unpack('<II', stream.read(8))
        if kind != 0x4E4F534A:
            raise ValueError('Missing GLB JSON chunk')
        return json.loads(stream.read(size))


def _at(value, keys):
    for key in keys:
        value = value.get(key, {})
    return value


def validate_export(json_data, expected):
    """Check the actual exported slots, including embedded images and required UVs."""
    failures = []
    used = {}
    for mesh in json_data.get('meshes', []):
        for primitive in mesh['primitives']:
            used.setdefault(primitive.get('material'), []).append(primitive)
    for row in expected:
        matches = [(i, m) for i, m in enumerate(json_data.get('materials', []))
                   if m.get('name') == row['proxy'] or m.get('name', '').startswith(row['proxy'] + '_')]
        if not matches:
            failures.append(row['source'] + ': proxy material absent from export')
        for index, material in matches:
            pbr = material.get('pbrMetallicRoughness', {})
            for key, default in [('baseColorFactor', [1, 1, 1, 1]), ('metallicFactor', 1), ('roughnessFactor', 1)]:
                actual, wanted = pbr.get(key, default), row[key]
                aa = actual if isinstance(actual, list) else [actual]
                bb = wanted if isinstance(wanted, list) else [wanted]
                if len(aa) != len(bb) or any(not math.isclose(a, b, abs_tol=1e-5) for a, b in zip(aa, bb)):
                    failures.append(row['source'] + ': incorrect ' + key)
            if material.get('alphaMode', 'OPAQUE') != row['alphaMode']:
                failures.append(row['source'] + ': incorrect alphaMode')
            if material.get('doubleSided', False) != row['doubleSided']:
                failures.append(row['source'] + ': incorrect doubleSided')
            for keys, wanted, default in row.get('properties', []):
                actual = material
                for key in keys[:-1]:
                    actual = actual.get(key, {})
                actual = actual.get(keys[-1], default)
                aa = actual if isinstance(actual, list) else [actual]
                bb = wanted if isinstance(wanted, list) else [wanted]
                if len(aa) != len(bb) or any(not math.isclose(a, b, abs_tol=1e-5) for a, b in zip(aa, bb)):
                    failures.append(row['source'] + ': incorrect ' + '.'.join(keys))
            for slot in row['textures']:
                info = _at(material, TEXTURE_SLOTS[slot])
                try:
                    texture = json_data['textures'][info['index']]
                    image = json_data['images'][texture['source']]
                    view = json_data['bufferViews'][image['bufferView']]
                    assert view['byteLength'] > 0
                    uv = info.get('extensions', {}).get('KHR_texture_transform', {}).get('texCoord', info.get('texCoord', 0))
                    assert all('TEXCOORD_' + str(uv) in p['attributes'] for p in used.get(index, []))
                except (KeyError, IndexError, AssertionError, TypeError):
                    failures.append(row['source'] + ': missing embedded texture or UVs for ' + slot)
    if failures:
        raise RuntimeError('Unreal material export validation failed:\n' + '\n'.join(failures))


def _chain(material, unreal):
    chain = []
    while isinstance(material, unreal.MaterialInstance):
        chain.append(material)
        material = material.get_editor_property('parent')
    return chain, material


def _parameters(chain):
    result = {}
    for field in PARAMETERS:
        merged = {}
        for instance in reversed(chain):
            for value in instance.get_editor_property(field):
                info = value.parameter_info
                if info.index != -1:
                    raise RuntimeError('Layered material parameters require an explicit export proxy')
                merged[str(info.name)] = value
        result[field] = list(merged.values())
    return result


def _proxy(material, chain, unreal):
    params = _parameters(chain)
    scalars = {str(p.parameter_info.name): float(p.parameter_value) for p in params[PARAMETERS[0]]}
    vectors = {str(p.parameter_info.name): p.parameter_value for p in params[PARAMETERS[1]]}
    textures = {str(p.parameter_info.name): p.parameter_value for p in params[PARAMETERS[2]] if p.parameter_value}
    supported_scalars = {'MetallicFactor', 'RoughnessFactor', 'AlphaMode', 'AlphaCutoff',
                         'NormalScale', 'OcclusionStrength', 'EmissiveStrength'}
    supported_vectors = {'BaseColorFactor', 'EmissiveFactor'}
    for slot in TEXTURE_SLOTS:
        supported_scalars.update(slot + suffix for suffix in ('_TexCoord', '_Rotation', '_Offset_X', '_Offset_Y', '_Scale_X', '_Scale_Y'))
        supported_vectors.update(slot + suffix for suffix in ('_OffsetScale', '_TilingMethod'))
    unknown = (set(scalars) - supported_scalars) | (set(vectors) - supported_vectors)
    if unknown:
        raise RuntimeError(material.get_path_name() + ': parameters require an explicit export proxy: ' + ', '.join(sorted(unknown)))
    if any(k not in TEXTURE_SLOTS for k in textures):
        raise RuntimeError(material.get_path_name() + ': extension texture requires an explicit export proxy')
    name = material.get_name() + '_TKExport_' + uuid.uuid4().hex[:8]
    proxy = unreal.new_object(unreal.MaterialInstanceConstant, outer=None, name=name)
    parent = unreal.load_asset(LEGACY_PARENT)
    if not parent:
        raise RuntimeError('Missing legacy glTF parent: ' + LEGACY_PARENT)
    proxy.set_editor_property('parent', parent)
    for field, values in params.items():
        proxy.set_editor_property(field, values)
    # AlphaMode is an imported scalar on Substrate, but the legacy shortcut reads
    # the material's blend mode. Carry both, plus effective two-sided overrides.
    mode = int(scalars.get('AlphaMode', 0))
    if mode not in (0, 1, 2):
        raise RuntimeError('Unsupported glTF AlphaMode: ' + str(mode))
    overrides = proxy.get_editor_property('base_property_overrides')
    overrides.set_editor_property('override_blend_mode', True)
    overrides.set_editor_property('blend_mode', [unreal.BlendMode.BLEND_OPAQUE, unreal.BlendMode.BLEND_MASKED, unreal.BlendMode.BLEND_TRANSLUCENT][mode])
    _, top = _chain(material, unreal)
    two_sided = bool(top.get_editor_property('two_sided'))
    for instance in reversed(chain):
        value = instance.get_editor_property('base_property_overrides')
        if value.get_editor_property('override_two_sided'):
            two_sided = bool(value.get_editor_property('two_sided'))
        if value.get_editor_property('override_blend_mode'):
            blend = value.get_editor_property('blend_mode')
            modes = [unreal.BlendMode.BLEND_OPAQUE, unreal.BlendMode.BLEND_MASKED, unreal.BlendMode.BLEND_TRANSLUCENT]
            if blend not in modes:
                raise RuntimeError('Unsupported blend override: ' + str(blend))
            mode = modes.index(blend)
            overrides.set_editor_property('blend_mode', blend)
    overrides.set_editor_property('override_two_sided', True)
    overrides.set_editor_property('two_sided', two_sided)
    proxy.set_editor_property('base_property_overrides', overrides)
    color = vectors.get('BaseColorFactor')
    row = {'source': material.get_path_name(), 'proxy': name,
           'baseColorFactor': [color.r, color.g, color.b, color.a] if color else [1, 1, 1, 1],
           'metallicFactor': scalars.get('MetallicFactor', 1), 'roughnessFactor': scalars.get('RoughnessFactor', 1),
           'alphaMode': ['OPAQUE', 'MASK', 'BLEND'][mode], 'doubleSided': two_sided,
           'textures': {key: value.get_path_name() for key, value in textures.items()}}
    row['properties'] = []
    emissive = vectors.get('EmissiveFactor')
    if emissive:
        row['properties'].append((['emissiveFactor'], [emissive.r, emissive.g, emissive.b], [0, 0, 0]))
    for parameter, keys in [
        ('EmissiveStrength', ['extensions', 'KHR_materials_emissive_strength', 'emissiveStrength']),
        ('NormalScale', ['normalTexture', 'scale']),
        ('OcclusionStrength', ['occlusionTexture', 'strength']),
    ]:
        if parameter in scalars:
            row['properties'].append((keys, scalars[parameter], 1))
    if mode == 1:
        cutoff = scalars.get('AlphaCutoff', 0.5)
        overrides.set_editor_property('override_opacity_mask_clip_value', True)
        overrides.set_editor_property('opacity_mask_clip_value', cutoff)
        proxy.set_editor_property('base_property_overrides', overrides)
        row['properties'].append((['alphaCutoff'], cutoff, 0.5))
    return proxy, row


def export_level(world, out, options, actors=None):
    """Drop-in replacement for GLTFExporter.export_to_gltf(world, out, options, actors).

    Writes the destination only after validation. An existing user proxy wins.
    Generated proxies live only in memory and are removed even on export failure.
    """
    import unreal
    selected = list(actors or [])
    candidates = selected or unreal.get_editor_subsystem(unreal.EditorActorSubsystem).get_all_level_actors()
    materials = {}
    for actor in candidates:
        if not options.get_editor_property('export_hidden_in_game') and actor.get_editor_property('hidden'):
            continue
        for component in actor.get_components_by_class(unreal.StaticMeshComponent):
            if not component.static_mesh or (not options.get_editor_property('export_hidden_in_game') and component.get_editor_property('hidden_in_game')):
                continue
            for material in component.get_materials():
                if material:
                    materials[material.get_path_name()] = material
    saved, expected, keep_alive = [], [], []
    temp = os.path.splitext(out)[0] + '.pending-' + uuid.uuid4().hex + '.glb'
    old_proxy_option = options.get_editor_property('export_proxy_materials')
    try:
        options.set_editor_property('export_proxy_materials', True)
        for material in materials.values():
            existing = material.get_asset_user_data_of_class(unreal.GLTFMaterialExportOptions)
            if existing and existing.get_editor_property('proxy'):
                continue
            chain, top = _chain(material, unreal)
            if not top:
                continue
            front = unreal.MaterialEditingLibrary.get_material_property_input_node(top, unreal.MaterialProperty.MP_FRONT_MATERIAL)
            if '/Substrate/' not in top.get_path_name() and not front:
                continue
            if not chain or top.get_path_name() != SUBSTRATE_PARENT:
                raise RuntimeError(material.get_path_name() + ': custom Substrate material needs an explicit export proxy')
            proxy, row = _proxy(material, chain, unreal)
            old_data = list(material.get_editor_property('asset_user_data'))
            saved.append((material, old_data))
            data = unreal.new_object(unreal.GLTFMaterialExportOptions, outer=material)
            data.set_editor_property('proxy', proxy)
            material.set_editor_property('asset_user_data', [d for d in old_data if not isinstance(d, unreal.GLTFMaterialExportOptions)] + [data])
            keep_alive.extend([proxy, data])
            expected.append(row)
        result = unreal.GLTFExporter.export_to_gltf(world, temp, options, selected)
        success = result[0] if isinstance(result, tuple) else result
        messages = result[1] if isinstance(result, tuple) and len(result) > 1 else result
        errors = getattr(messages, 'errors', [])
        if not success or errors:
            raise RuntimeError('Unreal glTF exporter failed: ' + str(result))
        validate_export(read_glb_json(temp), expected)
        os.replace(temp, out)
        report = {'schema': 'thaikit-unreal-material-export/1', 'file': out, 'proxies': expected}
        with open(out + '.materials.json', 'w', encoding='utf-8') as stream:
            json.dump(report, stream, indent=2)
        unreal.log('[thaikit] validated export: %d temporary material proxies' % len(expected))
        return result
    finally:
        for material, old_data in reversed(saved):
            material.set_editor_property('asset_user_data', old_data)
        options.set_editor_property('export_proxy_materials', old_proxy_option)
        if os.path.exists(temp):
            os.remove(temp)
