"""World-metric charts, fixed-resolution pages and chart-owned coverage.

No material texture dimensions participate in this layout. All packing is in
pixels; an exhausted page budget is an error, never a density reduction.
"""
import math
import heapq
import numpy as np

VERSION = 1
PADDING = 2


def project_chart(points, triangles, density):
    """Orthographic projection with a lower bound on both surface derivatives."""
    points = np.asarray(points, dtype=np.float64)
    triangles = np.asarray(triangles, dtype=np.int32)
    cross = np.cross(points[triangles[:, 1]] - points[triangles[:, 0]],
                     points[triangles[:, 2]] - points[triangles[:, 0]])
    lengths = np.linalg.norm(cross, axis=1)
    good = lengths > 1e-12
    if not good.any():
        raise ValueError('degenerate chart')
    normal = cross[good].sum(axis=0)
    norm = np.linalg.norm(normal)
    if norm < 1e-12:
        raise ValueError('chart folds over its projection')
    normal /= norm
    cosines = cross[good] @ normal / lengths[good]
    if cosines.min() < math.cos(math.pi / 4) - 1e-7:
        raise ValueError('chart exceeds 45 degree projection cone')
    # Prefer a boundary edge: a quad's diagonal would rotate its chart by
    # 45 degrees and double its bounding-box allocation for no added detail.
    unique, inverse = np.unique(points, axis=0, return_inverse=True)
    ids=inverse[triangles]
    pairs=np.concatenate([np.sort(ids[:,[i,(i+1)%3]],axis=1) for i in range(3)])
    pairs,counts=np.unique(pairs,axis=0,return_counts=True)
    boundary=pairs[counts==1]
    if not len(boundary):boundary=pairs
    edges=unique[boundary[:,1]]-unique[boundary[:,0]]
    edges -= (edges @ normal)[:, None] * normal
    u = edges[np.argmax(np.linalg.norm(edges, axis=1))]
    u /= np.linalg.norm(u)
    v = np.cross(normal, u)
    uv = np.column_stack((points @ u, points @ v))
    uv -= uv.min(axis=0)
    # Singular values of orthographic projection are 1 and cos(angle).
    scale = density / cosines.min()
    uv *= scale
    spans = np.ptp(uv, axis=0)
    for axis in range(2):
        if spans[axis] > 1e-10 and spans[axis] < 2:
            uv[:, axis] *= 2 / spans[axis]
    return uv


class PagePacker:
    """Deterministic best-fit shelves; sizes never shrink to fit a page.

    Shelves are bucketed by integer height. This keeps packing practical for
    the million-chart street, unlike a quadratic all-free-rectangles scan.
    """
    def __init__(self, size, limit):
        self.size, self.limit = size, limit
        self.pages = []

    def place(self, width, height, preferred=None):
        width, height = math.ceil(width) + 2*PADDING, math.ceil(height) + 2*PADDING
        if width > self.size or height > self.size:
            raise ValueError(f'chart {width}x{height} exceeds {self.size}px page; split geometry/chart')
        # Put the shorter dimension along shelf height.
        rotate = height > width
        if rotate:
            width, height = height, width
        order = list(range(len(self.pages)))
        if preferred in order:
            order.remove(preferred)
            order.insert(0, preferred)
        for page_id in order:
            page = self.pages[page_id]
            candidates = [(h, rows) for h, rows in page['shelves'].items() if height <= h <= height*1.25+1]
            for h, rows in sorted(candidates):
                if rows and rows[0][0] + width <= self.size:
                    row = heapq.heappop(rows)
                    x, y = row[0], row[1]
                    row[0] += width
                    if row[0] + 5 <= self.size: heapq.heappush(rows, row)
                    return page_id, x+PADDING, y+PADDING, rotate
            if page['bottom'] + height <= self.size:
                y = page['bottom']
                page['bottom'] += height
                heapq.heappush(page['shelves'].setdefault(height, []), [width, y])
                return page_id, PADDING, y+PADDING, rotate
        if len(self.pages) >= self.limit:
            raise ValueError(f'lightmap budget exceeded: more than {self.limit} x {self.size}² atlases required; density was not reduced')
        self.pages.append({'bottom': height, 'shelves': {height: [[width, 0]]}})
        return len(self.pages)-1, PADDING, PADDING, rotate


def raster_triangle(uv, size):
    """Texel centres covered by a triangle; winding independent."""
    a, b, c = np.asarray(uv, dtype=np.float64)
    lo = np.maximum(0, np.ceil(np.minimum(np.minimum(a, b), c)-.5).astype(int))
    hi = np.minimum(size-1, np.floor(np.maximum(np.maximum(a, b), c)-.5).astype(int))
    det = (b[0]-a[0])*(c[1]-a[1])-(b[1]-a[1])*(c[0]-a[0])
    if abs(det) < 1e-12 or np.any(hi < lo):
        return np.array([], dtype=int), np.array([], dtype=int)
    # Scan rows to bound temporary memory even for large charts.
    xx = np.arange(lo[0], hi[0]+1)
    xs, ys = [], []
    for y in range(lo[1], hi[1]+1):
        p = np.column_stack((xx+.5, np.full(len(xx), y+.5)))
        u = ((b[0]-p[:,0])*(c[1]-p[:,1])-(b[1]-p[:,1])*(c[0]-p[:,0]))/det
        v = ((c[0]-p[:,0])*(a[1]-p[:,1])-(c[1]-p[:,1])*(a[0]-p[:,0]))/det
        keep = (u >= -1e-7) & (v >= -1e-7) & (u+v <= 1+1e-7)
        xs.extend(xx[keep]); ys.extend([y]*int(keep.sum()))
    return np.asarray(ys, dtype=int), np.asarray(xs, dtype=int)


def coverage_support(uv, mask):
    """Bilinear support at pixel-space points, matching texture filtering."""
    uv = np.asarray(uv)
    base = np.floor(uv-.5).astype(int)
    f = uv-.5-base
    support = np.zeros(len(uv))
    for dy in (0, 1):
        for dx in (0, 1):
            x, y = base[:, 0]+dx, base[:, 1]+dy
            valid = (x >= 0)&(y >= 0)&(x < mask.shape[1])&(y < mask.shape[0])
            weight = (f[:, 0] if dx else 1-f[:, 0])*(f[:, 1] if dy else 1-f[:, 1])
            support[valid] += mask[y[valid], x[valid]]*weight[valid]
    return support


def snap_triangle(points, uv, density):
    """Put all three corners on texel centres without reducing metric density.

    Only used for individually charted triangles; there are no shared chart
    edges to tear. Choosing the longest edge for projection avoids acute tips
    wandering between rows for an arbitrarily long distance.
    """
    points=np.asarray(points,dtype=float)
    uv=np.asarray(uv,dtype=float)
    a,b=points[1]-points[0],points[2]-points[0]
    e=a/np.linalg.norm(a)
    basis=np.array([[np.linalg.norm(a), b@e],[0,np.linalg.norm(b-(b@e)*e)]])
    for _ in range(16):
        candidate=np.rint(uv-uv.min(axis=0))
        transform=np.column_stack((candidate[1]-candidate[0],candidate[2]-candidate[0]))@np.linalg.inv(basis)
        minimum=np.linalg.svd(transform,compute_uv=False).min()
        if minimum>=density*(1-1e-7):return candidate
        uv=(uv-uv.min(axis=0))*max(1.05,density/max(minimum,.01))
    raise ValueError('cannot snap triangle without reducing density')
