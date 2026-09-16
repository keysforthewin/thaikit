import test from 'node:test';
import assert from 'node:assert/strict';
import { Document } from '@gltf-transform/core';
import { MeshoptSimplifier } from 'meshoptimizer';
import { copyGeometry, simplifyForTransfer } from './lod-transfer.mjs';

test('transfer simplification reduces a planar grid without changing source attributes', async () => {
  await MeshoptSimplifier.ready;
  const doc = new Document(), buffer = doc.createBuffer();
  const pos = [], uv = [], indices = [];
  for (let y=0;y<=12;y++) for(let x=0;x<=12;x++) { pos.push(x/12,y/12,0); uv.push(x/12,y/12); }
  for(let y=0;y<12;y++)for(let x=0;x<12;x++) { const i=y*13+x; indices.push(i,i+1,i+13,i+1,i+14,i+13); }
  const acc=(type,values)=>doc.createAccessor().setType(type).setArray(new Float32Array(values)).setBuffer(buffer);
  const source=doc.createPrimitive().setAttribute('POSITION',acc('VEC3',pos)).setAttribute('TEXCOORD_0',acc('VEC2',uv))
    .setAttribute('TEXCOORD_1',acc('VEC2',uv)).setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(indices)).setBuffer(buffer));
  const matrix=[1,0,0,0,0,1,0,0,0,0,1,0,20,2,-40,1];
  assert.throws(()=>simplifyForTransfer(doc,source,matrix,.15,.05),/lightmap UVs/);
  const unwound=copyGeometry(doc,source,['POSITION','TEXCOORD_0']);
  const reduced=simplifyForTransfer(doc,unwound,matrix,.15,.05);
  assert.ok(reduced.getIndices().getCount() <= Math.floor(indices.length/3*.15)*3);
  assert.deepEqual([...source.getIndices().getArray()],indices);
  assert.deepEqual([...source.getAttribute('POSITION').getArray()], [...new Float32Array(pos)]);
  assert.ok(source.getAttribute('TEXCOORD_1'));
  const p=reduced.getAttribute('POSITION'),t=reduced.getAttribute('TEXCOORD_0');
  for(let i=0;i<p.getCount();i++) assert.deepEqual(t.getElement(i,[]),p.getElement(i,[]).slice(0,2));
});
