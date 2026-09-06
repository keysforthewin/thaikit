import test from 'node:test';
import assert from 'node:assert/strict';

import { buildColliders, ladderVolumes, shapesBounds } from '../src/colliders.js';
import { NullPhysics } from '../src/physics/null.js';

const box = (position, halfExtents, quaternion = [0, 0, 0, 1]) => ({ type: 'box', position, quaternion, halfExtents, isTrigger: false });

test('buildColliders lists the bodies tagged ladder as world volumes and keeps them in the static solid', () => {
  const manifest = {
    colliders: [
      { placement: 'wall', shapes: [box([0, 1, 0], [2, 1, 0.1])], tags: [] },
      { placement: 'ladder-a', shapes: [box([5, 1.5, 0], [0.25, 1.5, 0.1])], tags: ['ladder'] },
    ],
    dynamic: [],
  };
  const c = buildColliders(manifest, new NullPhysics());
  assert.equal(c.staticShapes.length, 2, 'a ladder is still something to stand on');
  assert.equal(c.ladders.length, 1);
  assert.equal(c.ladders[0].placement, 'ladder-a');
  assert.deepEqual(c.ladders[0].tags, ['ladder']);
  // The volume is the shapes' box grown by the reach on every side.
  assert.deepEqual(c.ladders[0].bounds, { min: [5 - 0.25 - 0.35, 0 - 0.35, -0.1 - 0.35], max: [5 + 0.25 + 0.35, 3 + 0.35, 0.1 + 0.35] });
});

test('a manifest baked before tags were carried has no ladders and does not throw', () => {
  const c = buildColliders({ colliders: [{ placement: 'wall', shapes: [box([0, 1, 0], [2, 1, 0.1])] }], dynamic: [] }, new NullPhysics());
  assert.deepEqual(c.ladders, []);
  assert.deepEqual(ladderVolumes({ colliders: [] }), []);
});

test('shapesBounds bounds a rotated box by its rotated half-extents', () => {
  const s = Math.SQRT1_2; // 90 degrees about Y swaps x and z extents
  const b = shapesBounds([box([0, 0, 0], [2, 1, 0.5], [0, s, 0, s])]);
  const r3 = (v) => +v.toFixed(6);
  assert.deepEqual(b.max.map(r3), [0.5, 1, 2]);
  assert.deepEqual(b.min.map(r3), [-0.5, -1, -2]);
});
