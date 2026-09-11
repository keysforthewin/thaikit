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
