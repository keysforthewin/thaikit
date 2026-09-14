"""Pure validation tests; run with python3, without an Unreal installation."""
import copy
import unittest
from types import SimpleNamespace
from export_materials import validate_export, linear_texture_export


class ExportValidationTest(unittest.TestCase):
    def setUp(self):
        self.expected = [{'source': 'pier/concrete', 'proxy': 'concrete_TKExport_123',
                          'baseColorFactor': [.68, .67, .64, 1], 'roughnessFactor': .94,
                          'metallicFactor': 0, 'alphaMode': 'OPAQUE', 'doubleSided': False,
                          'textures': {'BaseColorTexture': '/Game/Concrete'}}]
        self.json = {'materials': [{'name': 'concrete_TKExport_123_actor', 'pbrMetallicRoughness': {
            'baseColorFactor': [.68, .67, .64, 1], 'roughnessFactor': .94, 'metallicFactor': 0,
            'baseColorTexture': {'index': 0}}}], 'textures': [{'source': 0}],
            'images': [{'bufferView': 0}], 'bufferViews': [{'byteLength': 100}],
            'meshes': [{'primitives': [{'material': 0, 'attributes': {'TEXCOORD_0': 0}}]}]}

    def test_correct_export(self):
        validate_export(self.json, self.expected)

    def test_black_export(self):
        self.json['materials'][0]['pbrMetallicRoughness'] = {'baseColorFactor': [0, 0, 0, 1]}
        with self.assertRaisesRegex(RuntimeError, 'incorrect baseColorFactor'):
            validate_export(self.json, self.expected)

    def test_missing_image_and_uv(self):
        for field in ('images', 'meshes'):
            data = copy.deepcopy(self.json)
            if field == 'images':
                data['images'] = []
            else:
                data['meshes'][0]['primitives'][0]['attributes'] = {}
            with self.assertRaisesRegex(RuntimeError, 'missing embedded texture or UVs'):
                validate_export(data, self.expected)

    def test_missing_material(self):
        self.json['materials'] = []
        with self.assertRaisesRegex(RuntimeError, 'absent from export'):
            validate_export(self.json, self.expected)

    def test_alpha_and_sidedness(self):
        self.json['materials'][0]['alphaMode'] = 'BLEND'
        self.json['materials'][0]['doubleSided'] = True
        with self.assertRaisesRegex(RuntimeError, 'incorrect alphaMode'):
            validate_export(self.json, self.expected)


class LinearTextureExportTest(unittest.TestCase):
    def test_only_linear_data_changes_and_restores_on_failure(self):
        class Texture:
            def __init__(self, name, srgb=False, compression='default'):
                self.name = name
                self.values = {'srgb': srgb, 'compression_settings': compression}
            def get_path_name(self): return self.name
            def get_editor_property(self, name): return self.values[name]
            def set_editor_property(self, name, value): self.values[name] = value
        class Instance:
            def get_editor_property(self, name):
                return [SimpleNamespace(parameter_value=mask)] if name == 'texture_parameter_values' else material
        linear = Texture('lookup')
        color = Texture('paint', srgb=True)
        normal = Texture('normal', compression='normal')
        mask = Texture('mask', compression='masks')
        material = object()
        unreal = SimpleNamespace(
            Texture2D=Texture, MaterialInstance=Instance,
            TextureCompressionSettings=SimpleNamespace(TC_DEFAULT='default', TC_MASKS='masks', TC_HDR='hdr'),
            MaterialEditingLibrary=SimpleNamespace(get_used_textures=lambda m: [linear, color, normal]))
        with self.assertRaisesRegex(RuntimeError, 'export failed'):
            with linear_texture_export([material, Instance()], unreal) as changed:
                self.assertEqual(set(changed), {'lookup', 'mask'})
                self.assertEqual(linear.values['compression_settings'], 'hdr')
                self.assertEqual(mask.values['compression_settings'], 'hdr')
                self.assertEqual(color.values['compression_settings'], 'default')
                self.assertEqual(normal.values['compression_settings'], 'normal')
                raise RuntimeError('export failed')
        self.assertEqual(linear.values['compression_settings'], 'default')
        self.assertEqual(mask.values['compression_settings'], 'masks')


if __name__ == '__main__':
    unittest.main()
