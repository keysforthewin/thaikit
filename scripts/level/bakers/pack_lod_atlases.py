"""Pack four 2048 transfer pages into one 4096 page without resampling."""
import argparse
import gzip
import json
import os
import sys
import bpy
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from transfer_lod_lightmap import png16


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--report', required=True)
    ap.add_argument('--out', required=True)
    args = ap.parse_args(sys.argv[sys.argv.index('--')+1:])
    with open(args.report) as f: report = json.load(f)
    offset = report['groups'][0]['atlasOffset'] if report['groups'] else 0
    for group in report['groups']:
        original = group['directory']
        with open(os.path.join(original, 'atlas-layout.json')) as f: layout = json.load(f)
        size = layout['size']
        if size != 2048: raise ValueError('consolidation expects 2048 transfer pages')
        directory = os.path.join(args.out, f'packed-lod{group["tier"]}')
        os.makedirs(directory, exist_ok=True)
        pages = []
        for page in range((layout['count']+3)//4):
            entries = group['atlases'][page*4:page*4+4]
            value_range = max(p['range'] for p in entries)
            pixels = np.zeros((size*2, size*2, 4), dtype=np.float32)
            owner = np.full((size*2, size*2), -1, dtype=np.int32)
            for slot, entry in enumerate(entries):
                image = bpy.data.images.load(entry['file'], check_existing=False)
                image.alpha_mode = 'CHANNEL_PACKED'
                image.colorspace_settings.name = 'Non-Color'
                source = np.empty(size*size*4, dtype=np.float32)
                image.pixels.foreach_get(source)
                source = source.reshape(size, size, 4)
                bpy.data.images.remove(image)
                if entry['range'] != value_range:
                    rgb = source[:, :, :3]
                    linear = np.where(rgb <= .04045, rgb/12.92, ((rgb+.055)/1.055)**2.4)*entry['range']/value_range
                    source[:, :, :3] = np.where(linear <= .0031308, linear*12.92, 1.055*np.maximum(linear, 1e-8)**(1/2.4)-.055)
                x, y = (slot%2)*size, (slot//2)*size
                pixels[y:y+size, x:x+size] = source
                with gzip.open(os.path.join(original, f'atlas-{page*4+slot:03d}', 'owner.bin.gz'), 'rb') as f:
                    owner[y:y+size, x:x+size] = np.frombuffer(f.read(), dtype=np.int32).reshape(size, size)
            page_dir = os.path.join(directory, f'atlas-{page:03d}')
            os.makedirs(page_dir, exist_ok=True)
            png16(os.path.join(page_dir, 'lightmap.png'), pixels)
            with gzip.open(os.path.join(page_dir, 'owner.bin.gz'), 'wb') as f: f.write(owner.tobytes())
            pages.append({'file': os.path.join(page_dir, 'lightmap.png'), 'size': size*2, 'range': value_range})
        remap, mapping = {}, {}
        for name, assignment in layout['objects'].items():
            page = assignment['atlas']//4
            merged = f'{assignment["source"]}__packed_{page}'
            remap[name] = {'name': merged, 'source': assignment['source'], 'oldAtlas': assignment['atlas'], 'atlas': page}
            mapping[merged] = {'source': assignment['source'], 'atlas': page}
        for rect in layout['rectangles']:
            slot = rect['atlas']%4
            rect['x'] += (slot%2)*size
            rect['y'] += (slot//2)*size
            rect['atlas'] //= 4
        layout.update(size=size*2, count=len(pages), objects=mapping)
        with open(os.path.join(directory, 'atlas-layout.json'), 'w') as f: json.dump(layout, f)
        group.update(directory=directory, atlases=pages, mapping=mapping, nodeRemap=remap, atlasOffset=offset)
        offset += len(pages)
    report.pop('checkpointSha256', None)
    with open(os.path.join(args.out, 'packed-transfer.json'), 'w') as f: json.dump(report, f)


if __name__ == '__main__': main()
