"""Audit exported kit models with the production metric chart/coverage gate.

blender -b --python-exit-code 1 --python audit_models.py -- --out scratch/audit
Optional --asset substring restricts a regression investigation.
"""
import bpy,sys,os,json,argparse,traceback
sys.path.insert(0,os.path.dirname(__file__))
from lightmap_layout import prepare_layout
p=argparse.ArgumentParser();p.add_argument('--out',required=True);p.add_argument('--asset',default='')
a=p.parse_args(sys.argv[sys.argv.index('--')+1:]);os.makedirs(a.out,exist_ok=True)
manifest=json.load(open('exports/unreal/manifest.json'))
rows=[]
for item in manifest['items']:
    if a.asset and a.asset not in item['name']:continue
    target=os.path.join(a.out,item['name']);os.makedirs(target,exist_ok=True)
    for o in list(bpy.data.objects):bpy.data.objects.remove(o,do_unlink=True)
    for collection in (bpy.data.meshes,bpy.data.materials,bpy.data.images):
        for block in list(collection):
            if block.users==0:collection.remove(block)
    row={'asset':item['ref'],'file':item['file']}
    try:
        bpy.ops.import_scene.gltf(filepath=os.path.abspath(os.path.join('exports/unreal',item['file'])))
        objects=[o for o in bpy.data.objects if o.type=='MESH' and not o.name.startswith(('UCX_','UBX_','UCP_','USP_'))]
        for o in objects:
            if not o.data.uv_layers:o.data.uv_layers.new(name='UVMap')
            if not o.data.uv_layers.get('lightmap'):o.data.uv_layers.new(name='lightmap')
        _,_,report=prepare_layout(objects,4096,12,32,target,lambda m:None)
        row.update(ok=report['ok'],charts=report['charts'],atlases=report['atlasCount'],degenerateFaces=report['degenerateFaces'])
    except Exception as exc:
        row.update(ok=False,error=str(exc));traceback.print_exc()
    rows.append(row)
    with open(os.path.join(a.out,'models.json'),'w') as f:json.dump({'ok':all(r['ok'] for r in rows),'models':rows},f)
    print('MODEL_AUDIT',json.dumps(row),flush=True)
if not all(r['ok'] for r in rows):raise SystemExit(1)
