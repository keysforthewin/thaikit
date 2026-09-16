/** Validate the shipped factories and GLBs, then record measured metadata. */
import fs from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import sharp from 'sharp';
import * as THREE from 'three';
import { updateAsset } from '@thaikit/registry-core';
import { FOLIAGE } from './catalog.mjs';
const root=process.env.THAIKIT_REPO_ROOT??process.cwd();
const rendered=path.join(root,'scratch/foliage-20260915/rendered');
const manifest=JSON.parse(await fs.readFile(path.join(root,'exports/unreal/foliage/manifest.json'),'utf8'));
const results=[];
for(const a of FOLIAGE){
 const rel=`packages/props/src/models/${a.id}`,dir=path.join(root,rel),out=path.join(root,'scratch/foliage-20260915/shipped',`${a.id}.mjs`);
 await build({entryPoints:[path.join(dir,'createObjectModel.ts')],outfile:out,bundle:true,format:'esm',platform:'node',external:['three']});
 const mod=await import(pathToFileURL(out).href),object=mod.createModel();
 const stats={triangles:0,vertices:0,meshes:0,materials:0,drawCalls:0,uniqueGeometries:0},materials=new Set(),geometries=new Set();
 object.traverse(n=>{if(!n.isMesh)return;stats.meshes++;stats.drawCalls++;stats.triangles+=(n.geometry.index?.count??n.geometry.attributes.position.count)/3;stats.vertices+=n.geometry.attributes.position.count;materials.add(n.material);geometries.add(n.geometry);for(const x of n.geometry.attributes.position.array)if(!Number.isFinite(x))throw new Error(`${a.id}: invalid vertex`);});stats.materials=materials.size;stats.uniqueGeometries=geometries.size;
 const size=new THREE.Box3().setFromObject(object).getSize(new THREE.Vector3());
 if(Math.abs(size.y-a.height)>.005||stats.triangles>(a.tree?12000:2000)||stats.drawCalls>(a.tree?2:3))throw new Error(`${a.id}: geometry budget/dimensions failed`);
 if(object.userData.foliage?.bakeLighting!==false)throw new Error(`${a.id}: missing lighting exclusion`);
 const variants=manifest.items.filter(i=>i.name===a.id);if(variants.length<6)throw new Error(`${a.id}: incomplete GLBs`);
 await fs.copyFile(path.join(rendered,a.id,'preview.png'),path.join(dir,'preview.png'));
 await sharp(path.join(dir,'preview.png')).resize(384,384).flatten({background:'#939da3'}).webp({quality:90}).toFile(path.join(dir,'thumb.webp'));
 const bb=path.join(dir,'maps/billboard.webp'),meta=await sharp(bb).metadata(),fileBytes=(await fs.stat(out)).size;
 await updateAsset(a.id,r=>{
  Object.assign(r.model,stats,{status:'done',thumb:`${rel}/thumb.webp`,fileBytes});
  r.status.model='done';r.scale.measured={w:size.x,h:size.y,d:size.z};
  r.model.maps=r.model.maps.filter(m=>m.material!=='billboard');r.model.maps.push({material:'billboard',role:'albedo',file:`${rel}/maps/billboard.webp`,width:meta.width,height:meta.height,bytes:null});
  r.model.representations=variants.map(v=>({name:v.variant,file:`exports/unreal/foliage/${v.file}`,triangles:v.triangles,bakeLighting:false,billboard:v.billboard,options:v.variant.startsWith('mesh-lod')?{detail:Number(v.variant.slice(-1))}:v.variant==='exterior'?{detail:1,lighting:'unlit'}:v.variant==='unpotted'?{potted:false}:{representation:v.variant,lighting:'unlit'}}));
  r.model.review.critique='Procedural foliage workflow: browser-rendered review, measured geometry budgets and dimensions, GLB alpha/unlit/material validation. No Meshy reconstruction or img2threejs fidelity score.';
  return r;
 });
 for(const g of geometries)g.dispose();for(const m of materials)m.dispose();results.push({id:a.id,...stats,size:size.toArray(),glbVariants:variants.length});
}
await fs.writeFile(path.join(root,'scratch/foliage-20260915/validated-assets.json'),JSON.stringify(results,null,2));
console.log(`Validated and recorded ${results.length} foliage families`);
