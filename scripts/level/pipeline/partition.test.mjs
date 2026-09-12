import test from 'node:test';
import assert from 'node:assert/strict';
import { Document } from '@gltf-transform/core';
import { join } from '@gltf-transform/functions';
import { partitionCells } from './partition.mjs';

test('noncasting instances retain their bake flag after joining without changing a shared casting instance', async () => {
  const doc = new Document();
  const scene = doc.createScene();
  const buffer = doc.createBuffer();
  const pos = doc.createAccessor().setType('VEC3').setArray(new Float32Array([0,0,0,1,0,0,0,1,0])).setBuffer(buffer);
  const mat = doc.createMaterial('shared');
  const mesh = doc.createMesh().addPrimitive(doc.createPrimitive().setAttribute('POSITION', pos).setMaterial(mat));
  const rows = [true, false].map((castShadow, i) => ({ id: `p${i}`, static: true, cell: '0_0', ix: 0, iz: 0, castShadow }));
  const nodes = rows.map((p) => {
    const node = doc.createNode().setMesh(mesh).setExtras({ tk: { kind: 'placement', placement: p.id } });
    scene.addChild(node); return node;
  });
  partitionCells({ bake: { placements: rows } })(doc);
  assert.equal(nodes[0].getMesh().listPrimitives()[0].getMaterial().getExtras().tkBakeCastShadow, undefined);
  assert.equal(nodes[1].getMesh().listPrimitives()[0].getMaterial().getExtras().tkBakeCastShadow, false);
  await doc.transform(join({ keepMeshes: false, keepNamed: false }));
  const flags = doc.getRoot().listMeshes().flatMap((m) => m.listPrimitives().map((p) => p.getMaterial().getExtras().tkBakeCastShadow));
  assert.ok(flags.includes(false));
  assert.ok(flags.includes(undefined));
});

test('a dynamic placement never shares a material with a static one, while dynamic-only materials stay shared', async () => {
  const doc = new Document();
  const scene = doc.createScene();
  const buffer = doc.createBuffer();
  const pos = doc.createAccessor().setType('VEC3').setArray(new Float32Array([0,0,0,1,0,0,0,1,0])).setBuffer(buffer);
  const paint = doc.createMaterial('M_TK_TukTuk_paint');
  const pvc = doc.createMaterial('M_TK_TrafficCone_pvc');
  // After the mesh dedup a static and a dynamic placement of one prop share a Mesh.
  const tuktuk = doc.createMesh('tuktuk').addPrimitive(doc.createPrimitive().setAttribute('POSITION', pos).setMaterial(paint));
  const cone = doc.createMesh('cone').addPrimitive(doc.createPrimitive().setAttribute('POSITION', pos).setMaterial(pvc));
  const rows = [
    { id: 'static-tuktuk', static: true, cell: '0_0', ix: 0, iz: 0 },
    { id: 'dyn-tuktuk', static: false, ref: '@thai-kit/tuk-tuk', position: [1, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { id: 'dyn-cone-0', static: false, ref: '@thai-kit/traffic-cone', position: [2, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { id: 'dyn-cone-1', static: false, ref: '@thai-kit/traffic-cone', position: [3, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
  ];
  const nodes = Object.fromEntries(rows.map((p) => {
    const node = doc.createNode(p.id).setMesh(p.id.includes('cone') ? cone : tuktuk).setExtras({ tk: { kind: 'placement', placement: p.id } });
    scene.addChild(node); return [p.id, node];
  }));
  partitionCells({ bake: { placements: rows } })(doc);
  const materialOf = (n) => n.getMesh().listPrimitives()[0].getMaterial();
  assert.equal(materialOf(nodes['static-tuktuk']), paint, 'the static placement keeps the original');
  assert.notEqual(materialOf(nodes['dyn-tuktuk']), paint, 'the dynamic placement gets its own material');
  assert.equal(materialOf(nodes['dyn-tuktuk']).getName(), 'M_TK_TukTuk_paint_dynamic');
  assert.notEqual(nodes['dyn-tuktuk'].getMesh(), tuktuk, 'the shared mesh is cloned so the swap cannot reach the static primitive');
  assert.equal(materialOf(nodes['dyn-cone-0']), pvc, 'a dynamic-only material is left alone');
  assert.equal(nodes['dyn-cone-0'].getMesh(), nodes['dyn-cone-1'].getMesh(), 'and its mesh stays shared');
  await doc.transform(join({ keepMeshes: false, keepNamed: false }));
  const names = doc.getRoot().listMaterials().map((m) => m.getName()).sort();
  assert.deepEqual(names, ['M_TK_TrafficCone_pvc', 'M_TK_TukTuk_paint', 'M_TK_TukTuk_paint_dynamic']);
});
