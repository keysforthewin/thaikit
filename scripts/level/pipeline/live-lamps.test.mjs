import test from 'node:test';
import assert from 'node:assert/strict';

import { selectLiveLamps } from './manifest.mjs';

const moon = { id: 'moon', type: 'directional', role: 'moon', intensity: 0.6, position: [0, 20, 0] };
const lamps = Array.from({ length: 6 }, (_, i) => ({ id: `l${i}`, type: 'point', role: null, intensity: 10 - i, position: [i * 5, 3, 0] }));
const spawns = [{ position: [0, 0, 0] }];

test('moon-only preserves every lamp in the bake and refuses an unlit deliverable', () => {
  const r = selectLiveLamps([moon, ...lamps], spawns, 'moon-only', true);
  assert.deepEqual(r.live, [moon]);
  assert.deepEqual(r.bakedOnly, lamps.map((l) => l.id));
  assert.deepEqual(r.dropped, []);
  assert.throws(() => selectLiveLamps([moon, ...lamps], spawns, 'moon-only', false), /requires a lightmap/);
});

test('nominated shadow lamps survive the live cap ahead of brighter decorative lamps', () => {
  const nominated = { id: 'street', type: 'spot', castShadow: true, intensity: 1, position: [40, 8, 0] };
  const r = selectLiveLamps([moon, ...lamps, nominated], spawns, 2, true);
  assert.deepEqual(r.live.map((l) => l.id), ['moon', 'l0', 'street']);
  assert.equal(r.live.length, 3);
});

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
