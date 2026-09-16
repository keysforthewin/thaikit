import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';

test('checked Unreal importer rejects the TukTuk empty-instance failure and missing textures', () => {
  const result = spawnSync('python3', ['-c', String.raw`
import runpy, types, tempfile, json, struct
from pathlib import Path
ns = runpy.run_path('web/client/src/unreal/import_into_unreal.py')
class Material:
    def __init__(self, textures=()): self.textures = textures
    def get_path_name(self): return '/Game/Test/Paint.Paint'
class EmptyInstance:
    def get_path_name(self): return '/Game/Test/Empty.Empty'
    def get_class(self): return types.SimpleNamespace(get_name=lambda: 'MaterialInstanceConstant')
class DefaultMaterial(Material):
    def get_path_name(self): return '/Engine/EngineMaterials/WorldGridMaterial.WorldGridMaterial'
class Texture:
    def __init__(self, path): self.path = path
    def get_path_name(self): return self.path
u = types.SimpleNamespace(Material=Material, MaterialEditingLibrary=types.SimpleNamespace(get_used_textures=lambda m: m.textures))
def mesh(material):
    return types.SimpleNamespace(static_materials=[types.SimpleNamespace(material_slot_name='paint', material_interface=material), types.SimpleNamespace(material_slot_name='UCX', material_interface=EmptyInstance())])
expected = [{'name':'paint', 'pbrMetallicRoughness':{'baseColorTexture':{'index':0}}}]
for material, message in [(EmptyInstance(), 'expected a generated Material'), (Material(), 'textures but imported material has none'), (None, 'missing material')]:
    try: ns['validate_materials'](mesh(material), expected, u)
    except RuntimeError as error: assert message in str(error), str(error)
    else: raise AssertionError('bad import accepted')
ns['validate_materials'](mesh(Material([Texture('/Game/Test/PaintTexture')])), expected, u)
try: ns['validate_materials'](mesh(Material([Texture('/InterchangeAssets/gltf/Textures/T_White_srgb')])), expected, u)
except RuntimeError as error: assert 'only missing/default textures' in str(error)
else: raise AssertionError('fallback textures counted as imported images')
ns['validate_materials'](mesh(Material()), [{'name':'paint'}], u)
try: ns['validate_materials'](mesh(DefaultMaterial()), [{'name':'paint'}], u)
except RuntimeError as error: assert 'default engine material' in str(error)
else: raise AssertionError('checkerboard accepted for an untextured GLB material')
# Collision-only material must not become a false visible-material failure.
gltf = {'meshes':[{'name':'SM_Test','primitives':[{'material':0}]}, {'name':'UCX_SM_Test_00','primitives':[{'material':1}]}], 'materials':[{'name':'paint'}, {'name':'UCX'}]}
body = json.dumps(gltf).encode(); body += b' ' * (-len(body) % 4)
with tempfile.TemporaryDirectory() as tmp:
    path = Path(tmp) / 'test.glb'
    path.write_bytes(struct.pack('<5I', 0x46546C67, 2, 20 + len(body), len(body), 0x4E4F534A) + body)
    assert ns['visible_materials'](path) == [{'name':'paint'}]
`], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
});

test('masked imports retain their cutoff for the editor and the glTF shortcut', () => {
  const result = spawnSync('python3', ['-c', String.raw`
import runpy, types
ns = runpy.run_path('web/client/src/unreal/import_into_unreal.py')
class Material:
    def __init__(self): self.props = {}
    def set_editor_property(self, name, value): self.props[name] = value
class Function:
    def __init__(self, material): self.material = material
    def get_outer(self): return self.material
class Constant(Function):
    def __init__(self, material): super().__init__(material); self.props = {'desc':''}
    def set_editor_property(self, key, value): self.props[key] = value
    def get_editor_property(self, key): return self.props[key]
material, unrelated = Material(), Material()
function, other = Function(material), Function(unrelated)
constants, links = [], []
def create(material, kind, x, y):
    node = kind(material); constants.append(node); return node
def connect(node, output, target, pin):
    links.append((node, target, pin)); return True
edit = types.SimpleNamespace(get_material_expression_input_names=lambda n: ['AlphaCutoff'],
    create_material_expression=create, connect_material_expressions=connect, recompile_material=lambda m: None)
u = types.SimpleNamespace(MaterialEditingLibrary=edit, MaterialExpressionMaterialFunctionCall=Function,
    MaterialExpressionConstant=Constant, BlendMode=types.SimpleNamespace(BLEND_MASKED='masked'),
    ObjectIterator=lambda cls: [function, other] if cls is Function else constants)
mesh = types.SimpleNamespace(static_materials=[types.SimpleNamespace(material_slot_name='wire', material_interface=material)])
source = {'name':'wire', 'alphaMode':'MASK', 'alphaCutoff':.25, 'doubleSided':True}
for _ in range(2): ns['preserve_alpha_settings'](mesh, [source], u)
assert material.props == {'two_sided':True, 'blend_mode':'masked', 'opacity_mask_clip_value':.25}
assert len(constants) == 1, 'repeat import must reuse its repair node'
assert constants[0].props['r'] == .25
assert all(target is function and pin == 'AlphaCutoff' for node, target, pin in links)
del source['alphaCutoff']
ns['preserve_alpha_settings'](mesh, [source], u)
assert constants[0].props['r'] == .5, 'missing cutoff uses glTF default'
`], { encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr || result.stdout);
});
