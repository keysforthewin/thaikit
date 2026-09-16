"""CPU-only surface transfer of existing lighting onto reduced LOD geometry.

No Cycles solve: RGB is interpolated in linear space, moon visibility separately.
Source lookup is restricted to the same material/primitive and facing surface.
"""
import argparse
import gzip
import json
import os
import struct
import sys
import zlib
import bpy
import numpy as np
from mathutils import Vector
from mathutils.bvhtree import BVHTree

sys.path.insert(0, os.path.dirname(__file__))
from lightmap_layout import prepare_layout, audit_baked_coverage, pad_owned
from lightmap_atlas import raster_triangle


def log(message):
    print('[lod-transfer] ' + message, flush=True)


def barycentric(points, triangle):
    a, b, c = triangle
    v0, v1 = b-a, c-a
    p = np.asarray(points)-a
    d00, d01, d11 = v0@v0, v0@v1, v1@v1
    det = d00*d11-d01*d01
    if abs(det) < 1e-25:
        return np.tile([1., 0., 0.], (len(p), 1))
    u = ((p@v0)*d11-(p@v1)*d01)/det
    v = ((p@v1)*d00-(p@v0)*d01)/det
    return np.column_stack((1-u-v, u, v))


def png16(filename, rgba):
    h, w, _ = rgba.shape
    values = np.rint(np.clip(rgba[::-1], 0, 1)*65535).astype('>u2')
    rows = np.zeros((h, w*8+1), dtype=np.uint8)
    rows[:, 1:] = values.reshape(h, w*4).view(np.uint8)
    def chunk(kind, data):
        return struct.pack('>I', len(data))+kind+data+struct.pack('>I', zlib.crc32(kind+data)&0xffffffff)
    with open(filename, 'wb') as f:
        f.write(b'\x89PNG\r\n\x1a\n'+chunk(b'IHDR', struct.pack('>IIBBBBB', w, h, 16, 6, 0, 0, 0))+
                chunk(b'IDAT', zlib.compress(rows.tobytes(), 6))+chunk(b'IEND', b''))


def world_coordinates(obj):
    # Match the layout's precision: float32 cross products can round a tiny
    # nonzero face to zero, skipping texels for a chart the layout retained.
    return np.array([obj.matrix_world @ v.co for v in obj.data.vertices], dtype=np.float64)


def source_data(obj):
    coords = world_coordinates(obj)
    faces = np.array([list(f.vertices) for f in obj.data.polygons], dtype=np.int32)
    uv = np.array([[obj.data.uv_layers[1].data[j].uv[:] for j in f.loop_indices] for f in obj.data.polygons])
    return coords, faces, uv, BVHTree.FromPolygons(coords.tolist(), faces.tolist(), all_triangles=True)


def project(points, normal, source, limit):
    """Return source triangle and position; reject distant or opposite surfaces."""
    tree = source[3]
    hits = []
    for point in points:
        hit = tree.find_nearest(Vector(point), limit)
        if hit[0] is None or np.dot(hit[1], normal) < .5:
            choices = [h for h in tree.find_nearest_range(Vector(point), limit) if np.dot(h[1], normal) >= .5]
            hit = min(choices, key=lambda h: h[3]) if choices else (None, None, None, None)
        if hit[0] is None:
            return None
        hits.append((hit[2], np.array(hit[0]), hit[3]))
    return hits


def sample(image, uv):
    h, w, _ = image.shape
    xy = np.clip(uv*np.array([w, h])-.5, [0, 0], [w-1.001, h-1.001])
    ij = np.floor(xy).astype(int)
    f = xy-ij
    x, y = ij.T
    return sum(image[y+dy, x+dx]*(np.where(dx, f[:, 0], 1-f[:, 0])*np.where(dy, f[:, 1], 1-f[:, 1]))[:, None]
               for dy in range(2) for dx in range(2))


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--config', required=True)
    args = ap.parse_args(sys.argv[sys.argv.index('--')+1:])
    with open(args.config) as f: config = json.load(f)
    out = config['out']
    os.makedirs(out, exist_ok=True)
    bpy.ops.wm.read_factory_settings(use_empty=True)
    bpy.ops.import_scene.gltf(filepath=config['input'])
    objects = {o.name: o for o in bpy.data.objects if o.type == 'MESH'}
    sources = {}
    rejected = []
    accepted = []
    # Check reduced surfaces before paying for UVs. Failure retains the safe
    # original-UV LOD in Node; it never silently expands the projection cage.
    for row in config['targets']:
        obj = objects[row['target']]
        if row['source'] not in sources: sources[row['source']] = source_data(objects[row['source']])
        source = sources[row['source']]
        coords = world_coordinates(obj)
        maximum = 0.
        for face in obj.data.polygons:
            triangle = coords[list(face.vertices)]
            normal = np.cross(triangle[1]-triangle[0], triangle[2]-triangle[0])
            length = np.linalg.norm(normal)
            if length < 1e-12: continue
            # Vertices, edge midpoints, centroid catch collapsed thin parts.
            probes = np.concatenate((triangle, (triangle+np.roll(triangle, 1, axis=0))/2, triangle.mean(axis=0)[None]))
            hits = project(probes, normal/length, source, row['maxDistance'])
            if hits is None:
                rejected.append({'target': row['target'], 'reason': 'surface correspondence exceeds distance/facing limit', 'face': face.index})
                break
            maximum = max(maximum, max(h[2] for h in hits))
        else:
            # A one-way test misses deleted disconnected components. Check
            # original face centres against the reduced mesh as well.
            faces = np.array([list(f.vertices) for f in obj.data.polygons], dtype=np.int32)
            reverse = (None, None, None, BVHTree.FromPolygons(coords.tolist(), faces.tolist(), all_triangles=True))
            for face_index, face in enumerate(source[1]):
                tri = source[0][face]
                normal = np.cross(tri[1]-tri[0], tri[2]-tri[0])
                length = np.linalg.norm(normal)
                if length < 1e-12: continue
                hits = project(tri.mean(axis=0)[None], normal/length, reverse, row['maxDistance'])
                if hits is None:
                    rejected.append({'target': row['target'], 'reason': 'removed source surface exceeds distance/facing limit', 'face': face_index})
                    break
                maximum = max(maximum, hits[0][2])
            else:
                row['maxProjectionDistance'] = maximum
                accepted.append(row)
        if (len(accepted)+len(rejected)) % 50 == 0: log(f'checked {len(accepted)+len(rejected)}/{len(config["targets"])} targets')
    log(f'surface gate: {len(accepted)} accepted, {len(rejected)} retained as original-UV LODs')
    images = {}
    for page in sorted({r['atlas'] for r in accepted}):
        entry = config['atlases'][page]
        image = bpy.data.images.load(entry['file'], check_existing=False)
        image.alpha_mode = 'CHANNEL_PACKED'
        image.colorspace_settings.name = 'Non-Color'
        pixels = np.empty(image.size[0]*image.size[1]*4, dtype=np.float32)
        image.pixels.foreach_get(pixels)
        pixels = pixels.reshape(image.size[1], image.size[0], 4)
        rgb = pixels[:, :, :3]
        pixels[:, :, :3] = np.where(rgb <= .04045, rgb/12.92, ((rgb+.055)/1.055)**2.4)*entry['range']
        images[page] = pixels
        bpy.data.images.remove(image)
    groups = []
    output_objects = []
    for tier in [1, 2]:
        rows = [r for r in accepted if r['tier'] == tier]
        if not rows: continue
        directory = os.path.join(out, f'lod{tier}')
        os.makedirs(directory, exist_ok=True)
        targets = [objects[r['target']] for r in rows]
        for obj in targets:
            if not obj.data.uv_layers: obj.data.uv_layers.new(name='UVMap')
            obj.data.uv_layers.new(name='lightmap')
        size = config['size']
        targets, mapping, coverage = prepare_layout(targets, size, config['density'][tier-1], config['maxAtlases'], directory, log)
        # The production layout compensates for Cycles' (.501, .502) raster
        # origin. This transfer rasterizer uses exact (.5, .5) texel centres.
        for obj in targets:
            for corner in obj.data.uv_layers['lightmap'].data:
                corner.uv -= Vector((.001/size, .002/size))
        with open(os.path.join(directory, 'atlas-layout.json')) as f: layout = json.load(f)
        by_name = {r['target']: r for r in rows}
        pages = []
        for page in range(layout['count']):
            page_dir = os.path.join(directory, f'atlas-{page:03d}')
            os.makedirs(page_dir, exist_ok=True)
            pixels = np.zeros((size, size, 4), dtype=np.float32)
            covered = np.zeros((size, size), dtype=bool)
            page_objects = [o for o in targets if mapping[o.name]['atlas'] == page]
            for oi, obj in enumerate(page_objects):
                row = by_name[mapping[obj.name]['source']]
                source = sources[row['source']]
                coords = world_coordinates(obj)
                for face in obj.data.polygons:
                    uv = np.array([obj.data.uv_layers['lightmap'].data[j].uv[:] for j in face.loop_indices])*size
                    y, x = raster_triangle(uv, size)
                    if not len(x): continue
                    tri = coords[list(face.vertices)]
                    normal = np.cross(tri[1]-tri[0], tri[2]-tri[0])
                    length = np.linalg.norm(normal)
                    if length < 1e-12: continue
                    weights = barycentric(np.column_stack((x+.5, y+.5)), uv)
                    positions = weights@tri
                    hits = project(positions, normal/length, source, row['maxDistance'])
                    if hits is None:
                        raise ValueError(f'{obj.name} face {face.index}: texel projection failed; refusing transfer')
                    values = np.empty((len(hits), 4), dtype=np.float32)
                    ids = np.array([h[0] for h in hits])
                    for face_id in np.unique(ids):
                        mask = ids == face_id
                        points = np.array([h[1] for h in hits])[mask]
                        bary = barycentric(points, source[0][source[1][face_id]])
                        values[mask] = sample(images[row['atlas']], bary@source[2][face_id])
                    pixels[y, x] = values
                    covered[y, x] = True
                if oi % 25 == 0: log(f'lod{tier} atlas {page+1}/{layout["count"]}: transfer {oi+1}/{len(page_objects)}')
            owner, failures = audit_baked_coverage(page_objects, covered, layout['rectangles'], page, size)
            if failures: raise ValueError(f'LOD transfer coverage failed: {failures[:5]}')
            with gzip.open(os.path.join(page_dir, 'owner.bin.gz'), 'wb') as f: f.write(owner.tobytes())
            value_range = max(config['atlases'][r['atlas']]['range'] for r in rows)
            rgb = pixels[:, :, :3]/value_range
            pixels[:, :, :3] = np.where(rgb <= .0031308, rgb*12.92, 1.055*np.maximum(rgb, 1e-8)**(1/2.4)-.055)
            pad_owned(pixels, covered, layout['rectangles'], page)
            png16(os.path.join(page_dir, 'lightmap.png'), pixels)
            pages.append({'file': os.path.join(page_dir, 'lightmap.png'), 'size': size, 'range': value_range})
        groups.append({'directory': directory, 'atlases': pages, 'mapping': mapping, 'tier': tier, 'coverage': {'ok': True}})
        output_objects.extend(targets)
    bpy.ops.object.select_all(action='DESELECT')
    for obj in output_objects: obj.select_set(True)
    if output_objects:
        bpy.ops.export_scene.gltf(filepath=os.path.join(out, 'out.glb'), export_format='GLB', use_selection=True,
            export_apply=True, export_texcoords=True, export_normals=True, export_materials='NONE', export_yup=True,
            export_animations=False, export_skins=False, export_morph=False, export_lights=False, export_cameras=False,
            export_vertex_color='ACTIVE', export_all_vertex_colors=True)
    with open(os.path.join(out, 'transfer.json'), 'w') as f:
        json.dump({'groups': groups, 'accepted': accepted, 'rejected': rejected}, f)
    log('transfer complete')


if __name__ == '__main__':
    main()
