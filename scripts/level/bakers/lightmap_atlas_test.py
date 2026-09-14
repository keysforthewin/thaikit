import sys,os
sys.path.insert(0,os.path.dirname(__file__))
import unittest
import numpy as np
from lightmap_atlas import PagePacker, project_chart, raster_triangle, coverage_support

class AtlasTests(unittest.TestCase):
    def test_world_density_and_thin_surface(self):
        pts=np.array([[0,0,0],[5,0,0],[5,1.6,0],[0,1.6,0]])
        uv=project_chart(pts,[[0,1,2],[0,2,3]],12)
        self.assertAlmostEqual(np.linalg.norm(uv[1]-uv[0]),60)
        self.assertAlmostEqual(np.linalg.norm(uv[2]-uv[1]),19.2)
        thin=project_chart([[0,0,0],[5,0,0],[5,.001,0]],[[0,1,2]],12)
        self.assertGreaterEqual(np.ptp(thin,axis=0).min(),2)
    def test_budget_never_reduces_density(self):
        p=PagePacker(64,2)
        self.assertEqual(p.place(60,60)[0],0)
        self.assertEqual(p.place(60,60)[0],1)
        with self.assertRaisesRegex(ValueError,'budget exceeded'):p.place(60,60)
        with self.assertRaisesRegex(ValueError,'split'):PagePacker(64,2).place(61,60)
    def test_irregular_chart_can_have_samples_but_missing_regions(self):
        mask=np.zeros((64,64),dtype=bool)
        # A thin triangle tapers away from the sole centre column.
        tri=np.array([[20,5],[21,5],[20,50]])
        y,x=raster_triangle(tri,64);mask[y,x]=True
        self.assertTrue(mask.any())
        self.assertLess(coverage_support([[20.1,45]],mask)[0],.01)
    def test_black_is_covered(self):
        mask=np.ones((8,8),dtype=bool)
        self.assertEqual(coverage_support([[4,4]],mask)[0],1)
    def test_deterministic_pages(self):
        def run():
            p=PagePacker(64,32)
            return [p.place(w,h) for w,h in [(12,30),(8,4),(44,15),(40,40)]]
        self.assertEqual(run(),run())

if __name__=='__main__':unittest.main()
