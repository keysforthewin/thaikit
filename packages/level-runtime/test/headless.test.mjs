import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import path from 'node:path';

import { loadLevelHeadless } from '../src/node.js';
import { RapierPhysics } from '../src/physics/rapier.js';

const LEVEL = process.env.THAIKIT_TEST_LEVEL ?? path.resolve(import.meta.dirname, '../../../levels/soi-test/build/level.glb');

const exists = await fs.access(LEVEL).then(() => true, () => false);

test('a baked level loads headlessly and builds its colliders in Rapier', { skip: !exists && 'no baked level at ' + LEVEL }, async () => {
  const RAPIER = (await import('@dimforge/rapier3d-compat')).default;
  await RAPIER.init();
  const physics = new RapierPhysics(RAPIER);
  const level = await loadLevelHeadless(LEVEL, { physics });
  assert.ok(level.manifest.cells.list.length > 0, 'has cells');
  assert.equal(level.colliders.staticHandle.colliders.length, level.manifest.colliders.reduce((n, c) => n + c.shapes.length, 0));

  // A ray dropped from above every static collider must hit something.
  physics.sync();
  const shape = level.manifest.colliders[0].shapes[0];
  const ray = new RAPIER.Ray({ x: shape.position[0], y: shape.position[1] + 50, z: shape.position[2] }, { x: 0, y: -1, z: 0 });
  const hit = physics.world.castRay(ray, 200, true);
  assert.ok(hit, 'ray from above the first collider hits');
  assert.ok(hit.timeOfImpact < 50 + 1e-3, 'hits at or above the collider top');
  level.dispose();
});

test('the manifest parser rejects a plain GLB', async () => {
  const { readGlbJson, manifestFromJson } = await import('../src/manifest.js');
  const json = { asset: { version: '2.0' }, scenes: [{}], scene: 0 };
  assert.throws(() => manifestFromJson(json), /thaikitManifest/);
  assert.throws(() => readGlbJson(new Uint8Array(20)), /not a GLB/);
});
