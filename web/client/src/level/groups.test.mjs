import test from 'node:test';
import assert from 'node:assert/strict';

import {
  claimedIds, descendantsOf, expandIds, isGroupId, joinInto, pruneGroups, rootOf, selectionRoots, topLevelGroups, unjoin,
} from './groups.js';

const doc = () => ({
  placements: [{ id: 'p-1' }, { id: 'p-2' }, { id: 'p-3' }, { id: 'p-4' }],
  lights: [{ id: 'l-1' }],
  spawns: [{ id: 's-1' }],
  groups: [],
});

test('join makes a group over the selection and expands back to its members', () => {
  const d = doc();
  const g = joinInto(d, ['p-1', 'p-2'], 'wall');
  assert.ok(isGroupId(g));
  assert.deepEqual(d.groups[0].children, ['p-1', 'p-2']);
  assert.deepEqual(expandIds(d, [g]), ['p-1', 'p-2']);
  assert.equal(rootOf(d, 'p-1'), g);
  assert.equal(rootOf(d, 'p-3'), 'p-3');
});

test('a group joined with a loose object nests, and expands through both levels', () => {
  const d = doc();
  const inner = joinInto(d, ['p-1', 'p-2'], 'wall');
  const outer = joinInto(d, [inner, 'p-3'], 'house');
  assert.deepEqual(expandIds(d, [outer]), ['p-1', 'p-2', 'p-3']);
  assert.equal(rootOf(d, 'p-1'), outer);
  assert.deepEqual(topLevelGroups(d).map((g) => g.id), [outer]);
  assert.deepEqual(descendantsOf(d, outer).sort(), [inner, 'p-1', 'p-2', 'p-3'].sort());
});

test('joining two members of one group deepens it in place rather than pulling them out', () => {
  const d = doc();
  const outer = joinInto(d, ['p-1', 'p-2', 'p-3'], 'house');
  const inner = joinInto(d, ['p-1', 'p-2'], 'wall');
  const o = d.groups.find((g) => g.id === outer);
  assert.deepEqual(o.children, [inner, 'p-3']);
  assert.equal(rootOf(d, 'p-1'), outer);
});

test('a group and one of its own members is a single root', () => {
  const d = doc();
  const g = joinInto(d, ['p-1', 'p-2'], 'wall');
  assert.deepEqual(selectionRoots(d, [g, 'p-1', 'p-3']), [g, 'p-3']);
  // ...and cannot be joined to itself.
  assert.equal(joinInto(d, [g, 'p-1'], 'nope'), null);
});

test('unjoin puts the members back exactly where the group stood', () => {
  const d = doc();
  const inner = joinInto(d, ['p-1', 'p-2'], 'wall');
  const outer = joinInto(d, [inner, 'p-3'], 'house');
  const freed = unjoin(d, inner);
  assert.deepEqual(freed, ['p-1', 'p-2']);
  assert.deepEqual(d.groups.find((g) => g.id === outer).children, ['p-1', 'p-2', 'p-3']);
  assert.equal(d.groups.length, 1);
});

test('groups holding nothing live are dropped, all the way up', () => {
  const d = doc();
  const inner = joinInto(d, ['p-1', 'p-2'], 'wall');
  joinInto(d, [inner, 'p-3'], 'house');
  d.placements = d.placements.filter((p) => !['p-1', 'p-2'].includes(p.id));
  pruneGroups(d);
  assert.equal(d.groups.length, 1, 'the emptied inner group goes');
  assert.deepEqual(d.groups[0].children, ['p-3']);
  d.placements = d.placements.filter((p) => p.id !== 'p-3');
  pruneGroups(d);
  assert.deepEqual(d.groups, []);
});

test('lights and spawns can be joined like anything else', () => {
  const d = doc();
  const g = joinInto(d, ['p-1', 'l-1', 's-1'], 'lamp post');
  assert.deepEqual(expandIds(d, [g]), ['p-1', 'l-1', 's-1']);
  assert.deepEqual([...claimedIds(d)], ['p-1', 'l-1', 's-1']);
});
