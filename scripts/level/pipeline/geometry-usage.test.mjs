import test from 'node:test';
import assert from 'node:assert/strict';
import { Document, NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { MeshoptEncoder, MeshoptDecoder } from 'meshoptimizer';
import { compressLevelGeometry } from './compress-geometry.mjs';
import { auditGeometryUsage, pruneUnusedGeometry, weldIndexedGeometry } from './geometry-usage.mjs';

test('indexed welding merges exact duplicates while retaining UV and normal seams', async () => {
  const doc = new Document(), buffer = doc.createBuffer();
  const acc = (type, values) => doc.createAccessor().setType(type).setArray(new Float32Array(values)).setBuffer(buffer);
  const primitive = doc.createPrimitive()
    .setAttribute('POSITION', acc('VEC3', [0,0,0, 1,0,0, 0,1,0, 0,0,0, 1,0,0, 0,1,0]))
    .setAttribute('TEXCOORD_1', acc('VEC2', [.1,.1, .2,.1, .1,.2, .1,.1, .7,.1, .1,.2]))
    .setAttribute('NORMAL', acc('VEC3', [0,0,1, 0,0,1, 0,0,1, 0,0,1, 0,0,1, 0,1,0]))
    .setIndices(doc.createAccessor().setType('SCALAR').setArray(new Uint16Array([0,1,2,3,4,5])).setBuffer(buffer));
  doc.createMesh().addPrimitive(primitive);
  const corners = () => Array.from(primitive.getIndices().getArray(), i => primitive.listSemantics().map(s => primitive.getAttribute(s).getElement(i, [])));
  const before = corners();
  await doc.transform(weldIndexedGeometry());
  assert.equal(primitive.getAttribute('POSITION').getCount(), 5);
  assert.deepEqual(corners(), before);
});

test('fresh in-memory export clears detached primitives and their buffers while preserving lightmap UVs', async () => {
  await Promise.all([MeshoptEncoder.ready, MeshoptDecoder.ready]);
  const doc = new Document(), buffer = doc.createBuffer();
  const accessor = (type, array) => doc.createAccessor().setType(type).setArray(array).setBuffer(buffer);
  const uv = accessor('VEC2', new Float32Array([.123456, .345678, .223456, .345678, .123456, .445678]));
  const prim = doc.createPrimitive()
    .setAttribute('POSITION', accessor('VEC3', new Float32Array([0, 0, 0, 1, 0, 0, 0, 1, 0])))
    .setAttribute('TEXCOORD_1', uv)
    .setIndices(accessor('SCALAR', new Uint16Array([0, 1, 2])));
  const mesh = doc.createMesh('live').addPrimitive(prim);
  doc.createScene().addChild(doc.createNode('cell_0_0').addChild(doc.createNode('lod0').setMesh(mesh)));
  const abandoned = doc.createMesh('old-bake-source').addPrimitive(doc.createPrimitive()
    .setAttribute('POSITION', accessor('VEC3', new Float32Array([10, 0, 0, 11, 0, 0, 10, 1, 0]))));
  // Mesh.dispose() leaves its primitive in the graph. Reproduce both an
  // already detached primitive and a mesh that cleanup itself must dispose.
  abandoned.dispose();
  doc.createMesh('unused-mesh').addPrimitive(doc.createPrimitive()
    .setAttribute('POSITION', accessor('VEC3', new Float32Array([20, 0, 0, 21, 0, 0, 20, 1, 0]))));
  const values = [...uv.getArray()];
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS).registerDependencies({ 'meshopt.encoder': MeshoptEncoder, 'meshopt.decoder': MeshoptDecoder });
  await doc.transform(pruneUnusedGeometry(), compressLevelGeometry({ encoder: MeshoptEncoder }), pruneUnusedGeometry());
  const bytes = await io.writeBinary(doc);
  const json = JSON.parse(Buffer.from(bytes).subarray(20, 20 + new DataView(bytes.buffer, bytes.byteOffset).getUint32(12, true)));
  assert.equal(auditGeometryUsage(json).ok, true);
  assert.equal(json.meshes.length, 1);
  const reread = await io.readBinary(bytes);
  const result = reread.getRoot().listMeshes()[0].listPrimitives()[0];
  assert.equal(result.getIndices().getCount(), 3);
  // Reordering is allowed; every original lightmap coordinate must survive.
  const pairs = a => Array.from({ length: a.length / 2 }, (_, i) => `${a[i*2]},${a[i*2+1]}`).sort();
  assert.deepEqual(pairs(result.getAttribute('TEXCOORD_1').getArray()), pairs(values));
});

test('serialized audit detects dead and dangling accessors and preserves non-mesh users', () => {
  const json = {
    accessors: Array.from({ length: 8 }, () => ({ count: 1 })),
    meshes: [{ primitives: [{ attributes: { POSITION: 0 }, indices: 1, targets: [{ POSITION: 2 }] }] }],
    skins: [{ inverseBindMatrices: 3 }],
    animations: [{ samplers: [{ input: 4, output: 5 }] }],
    nodes: [{ extensions: { EXT_mesh_gpu_instancing: { attributes: { TRANSLATION: 6 } } } }],
  };
  assert.deepEqual(auditGeometryUsage(json).unusedAccessors, [7]);
  json.accessors.pop();
  assert.equal(auditGeometryUsage(json).ok, true);
  json.meshes[0].primitives[0].indices = 99;
  assert.match(auditGeometryUsage(json).failures.join('\n'), /missing accessor 99/);
});
