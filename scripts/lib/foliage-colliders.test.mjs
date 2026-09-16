import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import {partsFromRoot,physicalGeometry,fitStemCylinders,measureStemClearance} from './colliders.mjs';
function mesh(g,name,x=0){const m=new THREE.Mesh(g);m.name=name;m.position.x=x;return m;}
test('explicit physical selection excludes leaf cards and fails closed on bad names',()=>{
 const root=new THREE.Group();root.add(mesh(new THREE.CylinderGeometry(.2,.2,3), 'trunk'));root.add(mesh(new THREE.BoxGeometry(20,20,20),'canopy'));
 const {parts}=partsFromRoot(root,10000);const selected=physicalGeometry(parts,{includeMeshes:['trunk','planter']});
 assert.equal(selected.length,1);assert.equal(selected[0].name,'trunk');assert.throws(()=>physicalGeometry(parts,{includeMeshes:['missing']}),/No physical meshes/);
 const shapes=fitStemCylinders(selected,4);assert.ok(shapes.every(s=>s.scale[0]<.21));
 assert.equal(measureStemClearance(selected,shapes).coverage,1);
});
test('separate canes stay separate, with a walkable gap between them',()=>{
 const root=new THREE.Group();root.add(mesh(new THREE.CylinderGeometry(.1,.1,2),'trunk',-1));root.add(mesh(new THREE.CylinderGeometry(.1,.1,2),'trunk',1));
 const {parts}=partsFromRoot(root,10000);const shapes=fitStemCylinders(parts,8);
 assert.ok(shapes.every(s=>Math.abs(s.offset[0])>.9&&s.scale[0]<.11));
 assert.throws(()=>fitStemCylinders(parts,1),/larger part budget/);
});
test('main trunk extraction discards disconnected branch tubes from the merged wood mesh',()=>{
 const root=new THREE.Group();root.add(mesh(new THREE.CylinderGeometry(.2,.3,5),'trunk'));root.add(mesh(new THREE.CylinderGeometry(.1,.1,1),'branch',3));
 const {parts}=partsFromRoot(root,10000);const merged={name:'trunk',tris:new Float64Array([...parts[0].tris,...parts[1].tris]),box:parts[0].box.clone().union(parts[1].box)};
 const selected=physicalGeometry([merged],{includeMeshes:['trunk'],trunkOnly:true});assert.equal(selected.length,1);assert.ok(selected[0].box.max.x<.31);
});

test('shipped foliage compounds contain every selected physical vertex and no canopy-sized shape',async()=>{
 const fs=await import('node:fs/promises');const {FOLIAGE}=await import('../foliage/catalog.mjs');const {loadParts}=await import('./colliders.mjs');const {resolveBundle}=await import('./bundle-for.mjs');
 for(const a of FOLIAGE){
  const doc=JSON.parse(await fs.readFile(new URL(`../../packages/props/src/models/${a.id}/colliders.json`,import.meta.url)));
  if(['birds-nest-fern','pandan'].includes(a.id)){assert.equal(doc.disabled,true);assert.deepEqual(doc.parts,[]);continue;}
  const physical=physicalGeometry(loadParts(await resolveBundle(a.id),400000).parts,doc.generator.params);
  for(const g of physical)for(let i=0;i<g.tris.length;i+=3){
   const [x,y,z]=g.tris.subarray(i,i+3);
   assert.ok(doc.parts.some(p=>Math.abs(y-p.offset[1])<=p.scale[1]+.001&&Math.hypot(x-p.offset[0],z-p.offset[2])<=p.scale[0]+.001),`${a.id}: physical vertex outside compound`);
  }
  if(a.tree){assert.equal(doc.parts.length,8);assert.ok(doc.parts.every(p=>p.type==='cylinder'&&p.scale[0]<1),a.id);}
 }
});
