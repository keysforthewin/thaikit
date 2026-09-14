import unittest
from lightmap_islands import fit_strip_to_texel

class Strips(unittest.TestCase):
    def test_narrow_face_gets_a_pixel_centre(self):
        for phase in [0.01, .25, .5, .75, .99]:
            pts=[[(20+phase)/8192,100/8192],[(20+phase+.2)/8192,100/8192],[(20+phase+.2)/8192,112/8192],[(20+phase)/8192,112/8192]]
            out=fit_strip_to_texel(pts,8192)
            self.assertAlmostEqual((out[1][0]-out[0][0])*8192,1)
            centre=(out[0][0]+out[1][0])*4096
            self.assertAlmostEqual(centre%1,.5)
            self.assertEqual([p[1] for p in out],[p[1] for p in pts])
            self.assertTrue(all(abs(a[0]-b[0])*8192<1 for a,b in zip(pts,out)))
    def test_large_and_zero_area_faces_unchanged(self):
        self.assertIsNone(fit_strip_to_texel([[.1,.1],[.2,.1],[.2,.2]],8192))
        self.assertIsNone(fit_strip_to_texel([[.1,.1],[.1,.2],[.1,.3]],8192))
    def test_horizontal_strip(self):
        out=fit_strip_to_texel([[.1,.10001],[.2,.10001],[.2,.10002]],4096)
        self.assertAlmostEqual((max(p[1] for p in out)-min(p[1] for p in out))*4096,1)
        self.assertEqual([p[0] for p in out],[.1,.2,.2])

if __name__=='__main__': unittest.main()
