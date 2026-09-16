import test from 'node:test';
import assert from 'node:assert/strict';
import { Document } from '@gltf-transform/core';
import { MeshoptSimplifier } from 'meshoptimizer';
import { simplifiedCopy } from './lod.mjs';
test('a masked leaf card retains both triangles at the far LOD',async()=>{
 await MeshoptSimplifier.ready;
 const doc=new Document(),buffer=doc.createBuffer();
 const acc=(type,array)=>doc.createAccessor().setType(type).setArray(array).setBuffer(buffer);
 const prim=doc.createPrimitive().setMaterial(doc.createMaterial().setAlphaMode('MASK'))
  .setAttribute('POSITION',acc('VEC3',new Float32Array([-1,0,0,1,0,0,1,2,0,-1,2,0])))
  .setAttribute('TEXCOORD_0',acc('VEC2',new Float32Array([0,0,1,0,1,1,0,1])))
  .setIndices(acc('SCALAR',new Uint32Array([0,1,2,0,2,3])));
 const result=simplifiedCopy(doc,prim,{ratio:.15,sloppy:true});
 assert.equal(result.getIndices().getCount(),6);
 assert.equal(result.getAttribute('TEXCOORD_0').getCount(),4);
});
