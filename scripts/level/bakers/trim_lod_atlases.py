"""Clear lighting for discarded LOD fragments; retain chart IDs for survivors."""
import argparse
import gzip
import json
import os
import sys
import bpy
import numpy as np
sys.path.insert(0, os.path.dirname(__file__))
from transfer_lod_lightmap import png16

ap=argparse.ArgumentParser()
ap.add_argument('--report',required=True)
ap.add_argument('--out',required=True)
args=ap.parse_args(sys.argv[sys.argv.index('--')+1:])
with open(args.report) as f: report=json.load(f)
for group in report['groups']:
    dropped=set(group.get('droppedSources',[]))
    if not dropped: continue
    source=group['directory']
    directory=os.path.join(args.out,f'shared-lod{group["tier"]}')
    os.makedirs(directory,exist_ok=True)
    with open(os.path.join(source,'atlas-layout.json')) as f: layout=json.load(f)
    keep=np.array([r['source'] not in dropped for r in layout['rectangles']],dtype=bool)
    layout['objects']={name:a for name,a in layout['objects'].items() if a['source'] not in dropped}
    for page,entry in enumerate(group['atlases']):
        size=entry['size']
        image=bpy.data.images.load(entry['file'],check_existing=False)
        image.alpha_mode='CHANNEL_PACKED';image.colorspace_settings.name='Non-Color'
        pixels=np.empty(size*size*4,dtype=np.float32);image.pixels.foreach_get(pixels)
        pixels=pixels.reshape(size,size,4);bpy.data.images.remove(image)
        with gzip.open(os.path.join(source,f'atlas-{page:03d}','owner.bin.gz'),'rb') as f:
            owner=np.frombuffer(f.read(),dtype=np.int32).reshape(size,size).copy()
        valid=(owner>=0)&keep[np.maximum(owner,0)]
        pixels[~valid]=0;owner[~valid]=-1
        target=os.path.join(directory,f'atlas-{page:03d}');os.makedirs(target,exist_ok=True)
        png16(os.path.join(target,'lightmap.png'),pixels)
        with gzip.open(os.path.join(target,'owner.bin.gz'),'wb') as f:f.write(owner.tobytes())
        entry['file']=os.path.join(target,'lightmap.png')
    with open(os.path.join(directory,'atlas-layout.json'),'w') as f:json.dump(layout,f)
    group['mapping']=layout['objects'];group['directory']=directory
with open(os.path.join(args.out,'shared-transfer.json'),'w') as f:json.dump(report,f)
