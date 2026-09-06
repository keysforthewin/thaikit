import test from 'node:test';
import assert from 'node:assert/strict';

import { selectLiveLamps } from './manifest.mjs';

const moon = { id: 'moon', type: 'directional', role: 'moon', intensity: 0.6, position: [0, 20, 0] };
const lamps = Array.from({ length: 6 }, (_, i) => ({ id: `l${i}`, type: 'point', role: null, intensity: 10 - i, position: [i * 5, 3, 0] }));
const spawns = [{ position: [0, 0, 0] }];

test('0 keeps every lamp whether or not there is a lightmap', () => {
  for (const baked of [true, false]) {
    const r = selectLiveLamps([moon, ...lamps], spawns, 0, baked);
    assert.equal(r.live.length, 7);
    assert.deepEqual([r.bakedOnly, r.dropped], [[], []]);
  }
});

test('beside a lightmap the cap keeps the moon plus the strongest N and the rest ship baked-only', () => {
  const r = selectLiveLamps([moon, ...lamps], spawns, 2, true);
  assert.deepEqual(r.live.map((l) => l.id), ['moon', 'l0', 'l1']);
  assert.deepEqual(r.bakedOnly, ['l2', 'l3', 'l4', 'l5']);
  assert.deepEqual(r.dropped, []);
});

test('with no lightmap the cap still holds and the rest are dropped, named', () => {
  const r = selectLiveLamps([moon, ...lamps], spawns, 2, false);
  assert.deepEqual(r.live.map((l) => l.id), ['moon', 'l0', 'l1']);
  assert.deepEqual(r.bakedOnly, []);
  assert.deepEqual(r.dropped, ['l2', 'l3', 'l4', 'l5']);
});
