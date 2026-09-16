/** Fit each existing GLB variant's physical geometry and sync only collision metadata. */
import fs from 'node:fs/promises';
import path from 'node:path';
import * as THREE from 'three';
import {NodeIO} from '@gltf-transform/core';
import {ALL_EXTENSIONS} from '@gltf-transform/extensions';
import {physicalGeometry,fitStemCylinders,measureStemClearance} from '../lib/colliders.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd(),dir=path.join(root,'exports/unreal/foliage');
const file=path.join(dir,'manifest.json'),manifest=JSON.parse(await fs.readFile(file));
const out=path.join(root,'scratch/foliage-colliders-20260916');
await fs.mkdir(out,{recursive:true});
const io=new NodeIO().registerExtensions(ALL_EXTENSIONS),reports=[];
for(const item of manifest.items){
 const doc=JSON.parse(await fs.readFile(path.join(root,'packages/props/src/models',item.name,'colliders.json')));
 if(doc.disabled||['billboard','cluster'].includes(item.variant)){
  item.colliders=[];item.collisionPolicy='none';reports.push({asset:item.asset,parts:[],variant:item.variant});continue;
 }
 const glb=await io.read(path.join(dir,item.file));const raw=[];
 for(const node of glb.getRoot().listNodes()){
  const mesh=node.getMesh();if(!mesh)continue;const matrix=new THREE.Matrix4().fromArray(node.getWorldMatrix());
  for(const prim of mesh.listPrimitives()){
   const mat=prim.getMaterial()?.getName()??'';const name=mat.includes('bark')?'trunk':mat.includes('planter')?'planter':null;if(!name)continue;
   const pos=prim.getAttribute('POSITION'),idx=prim.getIndices();const count=idx?.getCount()??pos.getCount();const tris=new Float64Array(count*3),box=new THREE.Box3(),v=new THREE.Vector3();
   for(let k=0;k<count;k++){const vi=idx?idx.getScalar(k):k;v.fromArray(pos.getElement(vi,[])).applyMatrix4(matrix);v.toArray(tris,k*3);box.expandByPoint(v);}
   raw.push({name,tris,box});
  }
 }
 if(!raw.length){item.colliders=[];item.collisionPolicy='none';reports.push({asset:item.asset,parts:[],variant:item.variant});continue;}
 const physical=physicalGeometry(raw,doc.generator.params);
 const parts=fitStemCylinders(physical,doc.generator.params.maxParts).map(p=>({...p,offset:p.offset.map(n=>+n.toFixed(5)),scale:p.scale.map(n=>+n.toFixed(5))}));
 const clearance=measureStemClearance(physical,parts);
 if(clearance.coverage<.999)throw new Error(item.asset+' incomplete physical coverage');
 item.colliders=parts;item.collisionPolicy='physical-foliage';
 reports.push({asset:item.asset,ref:item.ref,variant:item.variant,parts,clearance});
}
await fs.writeFile(file,JSON.stringify(manifest,null,2));
const combinedFile=path.join(dir,'combined-manifest.json'),combined=JSON.parse(await fs.readFile(combinedFile));
for(const item of combined.items){const source=manifest.items.find(v=>v.asset===item.asset);if(source){item.colliders=source.colliders;item.collisionPolicy=source.collisionPolicy;}}
await fs.writeFile(combinedFile,JSON.stringify(combined,null,2));
await fs.writeFile(path.join(out,'variant-colliders.json'),JSON.stringify(reports,null,2));
console.log(`Synced ${reports.filter(r=>r.parts.length).length} physical variants; ${reports.filter(r=>!r.parts.length).length} remain pass-through.`);
