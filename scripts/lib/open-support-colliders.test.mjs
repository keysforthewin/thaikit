import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import RAPIER from '@dimforge/rapier3d-compat';
import { AssetSchema, readRegistry } from '@thaikit/registry-core';
import { colliderPartCeiling, colliderVerdict } from './budget.mjs';
await RAPIER.init();
const q={x:0,y:0,z:0,w:1};
const capsule=new RAPIER.Capsule(.55,.35);
function compound(id){return JSON.parse(fs.readFileSync(new URL(`../../packages/props/src/models/${id}/colliders.json`,import.meta.url))).parts.map(p=>({name:p.name,pos:{x:p.offset[0],y:p.offset[1],z:p.offset[2]},shape:p.type==='cylinder'?new RAPIER.Cylinder(p.scale[1],p.scale[0]):new RAPIER.Cuboid(...p.scale)}));}
function hits(parts,x,y,z){return parts.filter(p=>{const c=capsule.contactShape({x,y,z},q,p.shape,p.pos,q,0);return c&&c.distance < -0.001;}).map(p=>p.name);}
function clearPath(parts,points,y){for(let i=1;i<points.length;i++)for(let j=0;j<=100;j++){const t=j/100,x=points[i-1][0]*(1-t)+points[i][0]*t,z=points[i-1][1]*(1-t)+points[i][1]*t;assert.deepEqual(hits(parts,x,y,z),[],`blocked at ${x},${y},${z}`);}}
const assets=(await readRegistry()).assets;
test('per-asset collider budgets survive schema parsing and retain the dynamic discount',()=>{
 const asset=assets.find(a=>a.id==='chinese-shrine');
 for(const n of [0,-1,1.5,129])assert.equal(AssetSchema.safeParse({...asset,physics:{...asset.physics,maxColliderParts:n}}).success,false);
 const parsed=AssetSchema.parse({...asset,physics:{enabled:false,maxColliderParts:48}});
 assert.equal(colliderPartCeiling(parsed),48);
 assert.equal(colliderPartCeiling({...parsed,physics:{...parsed.physics,enabled:true}}),24);
 assert.equal(colliderPartCeiling({budgetClass:'large',physics:{enabled:false}}),8);
});
test('both hand-tuned compounds pass their declared shipping gates',()=>{
 for(const id of ['chinese-shrine','bamboo-half-pipe-canopy-module']){const v=colliderVerdict(assets.find(a=>a.id===id));assert.equal(v.ok,true,JSON.stringify(v));}
});
test('player can enter and circulate in the shrine porch while pillars and closed hall block movement',()=>{
 const p=compound('chinese-shrine');
 clearPath(p,[[4.5,1.3],[1.5,1.3],[1.5,3.4],[4.5,3.4]],1.46);
 clearPath(p,[[4.5,-1.3],[1.5,-1.3],[1.5,-3.4],[4.5,-3.4]],1.46);
 for(const x of [.35,3.2])for(const z of [-4.3,-2.48,2.48,4.3])assert.ok(hits(p,x,1.46,z).some(n=>n.startsWith('column-')));
 assert.ok(hits(p,-1,1.46,0).includes('closed-hall'));
});
test('player can pass beneath the bamboo canopy in both directions and all four posts block movement',()=>{
 const p=compound('bamboo-half-pipe-canopy-module');
 clearPath(p,[[-2.5,0],[2.5,0]],.91);
 clearPath(p,[[0,-2.5],[0,2.5]],.91);
 for(const x of [-1.68,1.68])for(const z of [-1.68,1.68])assert.ok(hits(p,x+.2,.91,z).some(n=>n.startsWith('post-')));
});
