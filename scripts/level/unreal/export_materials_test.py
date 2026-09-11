"""Pure validation tests; run with python3, without an Unreal installation."""
import copy
import unittest
from export_materials import validate_export


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


if __name__ == '__main__':
    unittest.main()
