import { build } from 'esbuild';
import { FOLIAGE } from './catalog.mjs';
import fs from 'node:fs/promises';
import * as THREE from 'three';
const out='scratch/foliage-20260915/factory-probe.mjs';
await build({entryPoints:['scripts/foliage/factory.ts'],outfile:out,bundle:true,format:'esm',platform:'node',external:['three']});
const {makeFoliage}=await import(`../../${out}?v=${Date.now()}`);
const report=[];
for(const a of FOLIAGE){
 const tiers=[];
 for(const detail of [0,1,2]){
  const root=makeFoliage(a,{detail});let tris=0;const materials=new Set();
  root.traverse(n=>{if(n.isMesh){const p=n.geometry.getAttribute('position');tris+=(n.geometry.index?.count??p.count)/3;materials.add(n.material);for(const v of p.array)if(!Number.isFinite(v))throw new Error(`${a.id}: nonfinite geometry`);}});
  const box=new THREE.Box3().setFromObject(root),size=box.getSize(new THREE.Vector3()).toArray();
  tiers.push({detail,tris,materials:materials.size,size});
  root.traverse(n=>{if(n.isMesh)n.geometry.dispose();});for(const m of materials)m.dispose();
 }
 report.push({id:a.id,tiers});console.log(a.id,tiers.map(t=>t.tris).join('/'));
}
await fs.writeFile('scratch/foliage-20260915/geometry-report.json',JSON.stringify(report,null,2));
