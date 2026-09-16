import fs from 'node:fs/promises';
import path from 'node:path';
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';
import { FOLIAGE } from './catalog.mjs';
import { combineManifests } from './combine-manifest.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const rendered=path.join(root,'scratch/foliage-20260915/rendered');
const reports=JSON.parse(await fs.readFile(path.join(rendered,'exports.json'),'utf8'));
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS);
const dest=path.join(root,'exports/unreal/foliage');await fs.mkdir(dest,{recursive:true});
const items=[];
for(const r of reports){
 const a=FOLIAGE.find(a=>a.id===r.id),file=path.join(rendered,r.id,`${r.name}.glb`),doc=await io.read(file),scene=doc.getRoot().listScenes()[0];
 const meshes=doc.getRoot().listMeshes();if(meshes.length!==1)throw new Error(`${file}: expected one mesh`);
 const b=getBounds(scene),h=b.max[1]-b.min[1];
 if(Math.abs(h-a.height)>.02)throw new Error(`${file}: height ${h} vs ${a.height}`);
 for(const m of doc.getRoot().listMaterials()){
  if(['billboard','cluster','exterior'].includes(r.name)&&!m.getExtension('KHR_materials_unlit'))throw new Error(`${file}: expected unlit`);
  if(m.getName().includes('leaves')||r.name==='billboard'||r.name==='cluster')if(m.getAlphaMode()!=='MASK'||!m.getDoubleSided())throw new Error(`${file}: incorrect alpha/side`);
 }
 for(const mesh of meshes)for(const p of mesh.listPrimitives()){
  if(p.getAttribute('TEXCOORD_1'))throw new Error(`${file}: unexpected lightmap UVs`);
  for(const key of ['POSITION','NORMAL','TEXCOORD_0']){const v=p.getAttribute(key);if(!v||!Array.from(v.getArray()).every(Number.isFinite))throw new Error(`${file}: invalid ${key}`);}
 }
 const shipped=`${r.asset}.glb`;await fs.copyFile(file,path.join(dest,shipped));
 items.push({ref:`@thai-kit/${r.id}`,variant:r.name,pack:'@thai-kit',name:r.id,asset:r.asset,file:shipped,folder:'ThaiKit/Foliage',title:a.name,category:'vegetation',size:{w:b.max[0]-b.min[0],h,d:b.max[2]-b.min[2]},bbox:[b.min,b.max],placement:['floor'],pivot:'base-center',physics:{enabled:false,massKg:null},colliders:[],triangles:r.triangles,materialSlots:r.materials,bakeLighting:false,billboard:r.name==='billboard'?'yaw':'none',translucentSlots:[]});
}
const manifest={schema:'thaikit-unreal-v1',generatedAt:new Date().toISOString(),source:'procedural-foliage-v1',units:'m',items,failures:[]};
await fs.writeFile(path.join(dest,'manifest.json'),JSON.stringify(manifest,null,2));
await combineManifests(root);
console.log(`Validated ${items.length} GLBs; staged ${dest}`);
// Reapply measured collision policies after rebuilding representation metadata.
await import('./sync-physical-colliders.mjs');
