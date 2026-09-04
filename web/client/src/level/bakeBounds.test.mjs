/**
 * The bake bounds are the STATIC set plus the ground, and nothing else.
 *
 * A billboard is backdrop kilometres out; a dynamic prop is exported but lit
 * live. Neither is unwrapped, so neither may stretch the box -- the same rule
 * `groundExtent` learned from `thepurge`, where 14 imposters made a 25 x 47 m
 * map read as 5.5 km across.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { bakeBounds, describeBakeBounds } from './bakeBounds.js';

const box = (x, y, z, w, h, d) => ({ min: [x - w / 2, y, z - d / 2], max: [x + w / 2, y + h, z + d / 2] });
const boxes = {
  a: box(0, 0, 0, 2, 3, 2),
  b: box(10, 0, 4, 2, 1, 2),
  far: box(3000, 0, 0, 400, 300, 1),
  dyn: box(-50, 0, -50, 1, 1, 1),
};
const doc = {
  placements: [
    { id: 'a', static: true },
    { id: 'b', static: true },
    { id: 'far', static: true, billboard: 'yaw' },
    { id: 'dyn', static: false },
    { id: 'pending', static: true },
  ],
};
const opts = { boxOf: (p) => boxes[p.id] ?? null, isStatic: (p) => p.static };

test('unions the static placements only', () => {
  const b = bakeBounds(doc, opts);
  assert.deepEqual(b.min, [-1, 0, -1]);
  assert.deepEqual(b.max, [11, 3, 5]);
  assert.deepEqual(b.size, [12, 3, 6]);
  assert.equal(b.footprint, 72);
  assert.deepEqual(b.counts, { static: 2, ground: 0, dynamic: 1, billboard: 1, unmeasured: 1 });
});

test('the ground slab extends the box and counts its tiles', () => {
  const groundBox = { min: [-24, -0.25, -24], max: [24, 0, 24], tiles: 4 };
  const b = bakeBounds(doc, { ...opts, groundBox });
  assert.deepEqual(b.min, [-24, -0.25, -24]);
  assert.deepEqual(b.max, [24, 3, 24]);
  assert.equal(b.counts.ground, 4);
});

test('nothing static and no ground is null, and the label says so', () => {
  const b = bakeBounds({ placements: [{ id: 'dyn', static: false }] }, opts);
  assert.equal(b, null);
  assert.equal(describeBakeBounds(b), 'nothing to bake');
});

test('the label names what fell outside', () => {
  const s = describeBakeBounds(bakeBounds(doc, opts));
  assert.match(s, /^12\.0 × 3\.0 × 6\.0 m · 72\.0 m² footprint · 2 static · 1 dynamic, 1 billboard, 1 loading outside$/);
});
