import { test } from 'node:test';
import assert from 'node:assert/strict';

import { cyclePick, orderedPicks } from './pick.js';
import { registerNode } from './nodes.js';

const node = (name, parent = null) => { const o = { name, parent, visible: true }; return o; };

test('orderedPicks resolves hits to their owning node, nearest first, once each', () => {
  const a = node('p-a'); const b = node('p-b'); const plane = node('');
  registerNode('p-a', a); registerNode('p-b', b);
  const hits = [
    { object: node('box', a), distance: 1 },
    { object: node('mesh', a), distance: 1.5 },
    { object: plane, distance: 2 },
    { object: node('ring', b), distance: 3 },
  ];
  assert.deepEqual(orderedPicks(hits), ['p-a', 'p-b']);
  // Resolving two pieces to one group makes them one stop in the cycle.
  assert.deepEqual(orderedPicks(hits, () => 'g-1'), ['g-1']);
  registerNode('p-a', null); registerNode('p-b', null);
});

test('cyclePick goes deeper on a repeat click and restarts when the pointer moves', () => {
  const ids = ['near', 'mid', 'far'];
  let r = cyclePick(ids, [100, 100], null);
  assert.equal(r.id, 'near');
  r = cyclePick(ids, [102, 101], r.record);
  assert.equal(r.id, 'mid');
  r = cyclePick(ids, [102, 101], r.record);
  assert.equal(r.id, 'far');
  r = cyclePick(ids, [102, 101], r.record);
  assert.equal(r.id, 'near', 'wraps round');
  r = cyclePick(ids, [140, 100], r.record);
  assert.equal(r.id, 'near', 'a moved pointer starts from the front');
  // Same spot, different things under it: also from the front.
  r = cyclePick(['mid', 'far'], [140, 100], r.record);
  assert.equal(r.id, 'mid');
  assert.deepEqual(cyclePick([], [0, 0], r.record), { id: null, record: null });
});
