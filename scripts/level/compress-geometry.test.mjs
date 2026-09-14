import test from 'node:test';
import assert from 'node:assert/strict';
import { Document, NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptDecoder, MeshoptEncoder } from 'meshoptimizer';
import { compressLevelGeometry } from './pipeline/compress-geometry.mjs';

for (const shared of [false, true]) test(`compressed lightmap UVs retain sub-texel islands (${shared ? 'shared UV0/UV1' : 'separate UV0/UV1'})`, async () => {
  await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready]);
  const doc = new Document(), buffer = doc.createBuffer();
  const acc = (type, values) => doc.createAccessor().setType(type).setArray(new Float32Array(values)).setBuffer(buffer);
  // Less than one 12-bit UV step, but a valid narrow island in an 8K atlas.
  const uv = acc('VEC2', [.47851, .03172, .47854, .03172, .47851, .0329]);
  const expected = [...uv.getArray()];
  const prim = doc.createPrimitive()
    .setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint16Array([0,1,2])).setBuffer(buffer))
    .setAttribute('POSITION', acc('VEC3', [0,0,0, .02,0,0, 0,1.5,0]))
    .setAttribute('NORMAL', acc('VEC3', [0,0,1, 0,0,1, 0,0,1]))
    .setAttribute('TEXCOORD_0', shared ? uv : acc('VEC2', [0,0, 1,0, 0,1]))
    .setAttribute('TEXCOORD_1', uv);
  doc.createScene().addChild(doc.createNode().setMesh(doc.createMesh().addPrimitive(prim)));
  await doc.transform(compressLevelGeometry({ encoder: MeshoptEncoder }));
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({
    'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder,
  });
  const decoded = await io.readBinary(await io.writeBinary(doc));
  const p = decoded.getRoot().listMeshes()[0].listPrimitives()[0], a = p.getAttribute('TEXCOORD_1');
  assert.ok(a, 'unreferenced lightmap coordinates survive compression cleanup');
  assert.equal(a.getComponentType(), 5126);
  const actual = [];
  for (let i = 0; i < 3; i++) actual.push(a.getElement(p.getIndices()?.getScalar(i) ?? i, []));
  const pairs = [0,2,4].map(i => expected.slice(i, i+2));
  assert.deepEqual(actual.map(v=>v.join(',')).sort(), pairs.map(v=>v.join(',')).sort(), 'decoded UVs must be bit-exact');
  assert.ok(decoded.getRoot().listExtensionsRequired().some(e=>e.extensionName==='EXT_meshopt_compression'));
});
