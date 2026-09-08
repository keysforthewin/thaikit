"""Run with Blender's Python (NumPy is bundled), no scene or GPU required."""
import os
import sys
import unittest
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from lightmap_padding import dilate_lightmap


class PaddingTests(unittest.TestCase):
    def test_neighbouring_surfaces_and_black_self_shadows_survive(self):
        image = np.zeros((12, 12, 4), dtype=np.float32)
        covered = np.zeros((12, 12), dtype=bool)
        image[2:10, 1:4] = (1, 0, 0, 1)
        image[2:10, 6:9] = (0, 1, 0, .3)
        covered[2:10, 1:4] = True
        covered[2:10, 6:9] = True
        image[5:7, 2:4] = (0, 0, 0, 0)  # valid, fully shadowed surface
        expected = image[covered].copy()
        original_mask = covered.copy()
        expanded = dilate_lightmap(image, covered, 2)
        np.testing.assert_array_equal(image[covered], expected)
        np.testing.assert_array_equal(covered, original_mask)
        self.assertTrue(np.all(expanded[covered]))
        self.assertGreater(expanded.sum(), covered.sum())

    def test_padding_does_not_cascade_beyond_radius(self):
        image = np.zeros((9, 9, 4), dtype=np.float32)
        covered = np.zeros((9, 9), dtype=bool)
        covered[4, 4] = True
        image[4, 4] = (1, .5, .25, .75)
        expanded = dilate_lightmap(image, covered, 1)
        self.assertEqual(int(expanded.sum()), 9)
        self.assertTrue(np.all(image[expanded] == image[4, 4]))
        self.assertTrue(np.all(image[~expanded] == 0))

    def test_zero_padding_preserves_everything(self):
        image = np.ones((2, 2, 4), dtype=np.float32)
        covered = np.array([[True, False], [False, False]])
        np.testing.assert_array_equal(dilate_lightmap(image, covered, 0), covered)
        self.assertTrue(np.all(image == 1))


suite = unittest.defaultTestLoader.loadTestsFromTestCase(PaddingTests)
if not unittest.TextTestRunner(verbosity=2).run(suite).wasSuccessful():
    raise SystemExit(1)
