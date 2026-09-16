"""Run with Blender --background --python-exit-code 1 --python this_file."""
import os
import sys
import tempfile
import unittest
import bpy
import numpy as np
from mathutils.bvhtree import BVHTree

sys.path.insert(0, os.path.dirname(__file__))
from transfer_lod_lightmap import barycentric, png16, project, sample, world_coordinates


class TransferTests(unittest.TestCase):
    def test_thin_face_keeps_the_layouts_nonzero_normal(self):
        # Real LOD2 face: float32 cancellation skipped its allocated chart.
        mesh = bpy.data.meshes.new('thin-transfer-regression')
        mesh.from_pydata([
            (-4.176470756530762, -15.15999984741211, .6159999370574951),
            (-4.647058963775635, -15.15999984741211, .8624000549316406),
            (-4.882352828979492, -15.15999984741211, .9855999946594238),
        ], [], [(0, 1, 2)])
        obj = bpy.data.objects.new('thin-transfer-regression', mesh)
        try:
            tri = world_coordinates(obj)
            low = tri.astype(np.float32)
            self.assertEqual(np.linalg.norm(np.cross(low[1]-low[0], low[2]-low[0])), 0)
            self.assertGreater(np.linalg.norm(np.cross(tri[1]-tri[0], tri[2]-tri[0])), 2e-12)
        finally:
            bpy.data.objects.remove(obj)
            bpy.data.meshes.remove(mesh)

    def test_png_preserves_rgb_independent_of_moon_alpha(self):
        # A black moon mask must not premultiply away the baked RGB lighting.
        rgba = np.array([[[.1, .4, .8, 0], [.7, .2, .1, .25]],
                         [[.3, .6, .9, .5], [.2, .1, .4, 1]]], dtype=np.float32)
        with tempfile.TemporaryDirectory() as directory:
            filename = os.path.join(directory, 'lightmap.png')
            png16(filename, rgba)
            image = bpy.data.images.load(filename, check_existing=False)
            image.alpha_mode = 'CHANNEL_PACKED'
            image.colorspace_settings.name = 'Non-Color'
            result = np.empty(16, dtype=np.float32)
            image.pixels.foreach_get(result)
            np.testing.assert_allclose(result.reshape(2, 2, 4), rgba, atol=1/65535)
            bpy.data.images.remove(image)

    def test_projection_does_not_jump_to_reverse_side_of_thin_surface(self):
        positions = [(-1,-1,0),(1,-1,0),(0,1,0),(-1,-1,.01),(0,1,.01),(1,-1,.01)]
        tree = BVHTree.FromPolygons(positions, [(0,1,2),(3,4,5)], all_triangles=True)
        source = (None, None, None, tree)
        hit = project([[0,0,.008]], np.array([0,0,1]), source, .02)
        self.assertEqual(hit[0][0], 0)
        self.assertIsNone(project([[0,0,.008]], np.array([0,0,1]), source, .003))
        self.assertIsNone(project([[10,0,0]], np.array([0,0,1]), source, .02))

    def test_barycentric_and_bilinear_transfer_preserve_a_linear_signal(self):
        triangle = np.array([[0.,0.],[1.,0.],[0.,1.]])
        points = np.array([[.1,.2],[.5,.1],[0.,0.]])
        weights = barycentric(points, triangle)
        np.testing.assert_allclose(weights@triangle, points, atol=1e-7)
        image = np.array([[[0,0,0,.2],[1,0,0,.4]],[[0,1,0,.6],[1,1,0,.8]]])
        np.testing.assert_allclose(sample(image, np.array([[.5,.5]])), [[.5,.5,0,.5]], atol=1e-7)


if __name__ == '__main__':
    suite = unittest.defaultTestLoader.loadTestsFromTestCase(TransferTests)
    if not unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful():
        raise RuntimeError('LOD transfer tests failed')
