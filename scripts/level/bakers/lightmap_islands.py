"""Keep packed sub-texel lightmap strips on a real texel, within their gutter."""
import math


def fit_strip_to_texel(points, size, minimum=1.0):
    """Return adjusted UVs, or None. Only axes narrower than one pixel change.

    A packed island has a two-pixel gap to its neighbour. Growing a subpixel
    axis to one pixel and snapping its centre to a pixel centre moves either
    edge by less than one pixel, retaining separation. The baker's one-pixel
    padding then supplies the bilinear samples outside the strip.
    """
    lower = [min(p[i] for p in points) * size for i in range(2)]
    upper = [max(p[i] for p in points) * size for i in range(2)]
    spans = [upper[i] - lower[i] for i in range(2)]
    # Zero-area geometry has no surface to bake. Do not invent one.
    if min(spans) <= 1e-8 or min(spans) >= minimum:
        return None
    axes = {}
    for i, span in enumerate(spans):
        if span >= minimum:
            continue
        centre = (lower[i] + upper[i]) * .5
        snapped = math.floor(centre) + .5
        axes[i] = (centre, snapped, minimum / span)
    return [[((p[i] * size - axes[i][0]) * axes[i][2] + axes[i][1]) / size
             if i in axes else p[i] for i in range(2)] for p in points]


def ensure_sampled_islands(mesh, size, layer='lightmap'):
    """Group UV-connected faces even when glTF split vertices at normal seams."""
    uv = mesh.uv_layers[layer].data
    polygons = list(mesh.polygons)
    parent = list(range(len(polygons)))
    def find(i):
        while parent[i] != i:
            parent[i] = parent[parent[i]]
            i = parent[i]
        return i
    edges = {}
    for i, face in enumerate(polygons):
        loops = list(face.loop_indices)
        keys = []
        for j in loops:
            co = mesh.vertices[mesh.loops[j].vertex_index].co
            keys.append(tuple(round(v, 7) for v in (*co, *uv[j].uv)))
        for k in range(len(keys)):
            edge = tuple(sorted((keys[k], keys[(k + 1) % len(keys)])))
            if edge in edges:
                parent[find(i)] = find(edges[edge])
            else:
                edges[edge] = i
    groups = {}
    for i, face in enumerate(polygons):
        groups.setdefault(find(i), []).extend(face.loop_indices)
    changed = 0
    for loops in groups.values():
        adjusted = fit_strip_to_texel([tuple(uv[j].uv) for j in loops], size)
        if adjusted is None:
            continue
        for j, value in zip(loops, adjusted):
            uv[j].uv = value
        changed += 1
    return changed
