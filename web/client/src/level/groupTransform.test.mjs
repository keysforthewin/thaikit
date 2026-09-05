import test from 'node:test';
import assert from 'node:assert/strict';

import { joinInto } from './groups.js';
import { centroidOf, composeGroupRotations, groupRotationOf, quatFromEuler, rotateLeavesAbout, setGroupRotation, translateLeaves } from './groupTransform.js';

const close = (a, b, eps = 1e-3) => { assert.equal(a.length, b.length); a.forEach((x, i) => assert.ok(Math.abs(x - b[i]) < eps, `${a} vs ${b}`)); };
// Two Eulers can spell one orientation ((-pi, 0, -pi) is (0, pi, 0)), so compare the rotation they mean.
const sameTurn = (a, b) => assert.ok(Math.abs(quatFromEuler(a).dot(quatFromEuler(b))) > 1 - 1e-6, `${a} vs ${b}`);

const doc = () => ({
  placements: [
    { id: 'p-1', position: [0, 0, 0], rotation: [0, 0, 0], scale: [1, 1, 1] },
    { id: 'p-2', position: [2, 0, 0], rotation: [0, Math.PI / 2, 0], scale: [1, 1, 1] },
  ],
  lights: [{ id: 'l-1', position: [1, 3, 0], direction: [1, 0, 0] }],
  spawns: [{ id: 's-1', position: [1, 0, 2], yawDeg: 0 }],
  groups: [],
});

test('centroid is the mean of the leaves and translation moves them by the delta', () => {
  const d = doc();
  close(centroidOf(d, ['p-1', 'p-2']), [1, 0, 0]);
  translateLeaves(d, ['p-1', 'p-2'], [1, 2, 3]);
  close(d.placements[0].position, [1, 2, 3]);
  close(d.placements[1].position, [3, 2, 3]);
  assert.equal(centroidOf(d, ['nope']), null);
});

test('a quarter turn about the centroid swings positions, composes rotations, and re-aims lights and spawns', () => {
  const d = doc();
  rotateLeavesAbout(d, ['p-1', 'p-2', 'l-1', 's-1'], [1, 0, 0], quatFromEuler([0, Math.PI / 2, 0]));
  // +90 about Y carries +X onto -Z: p-1 at (-1,0,0) from the pivot goes to (0,0,1) relative.
  close(d.placements[0].position, [1, 0, 1]);
  close(d.placements[1].position, [1, 0, -1]);
  close(d.placements[0].rotation, [0, Math.PI / 2, 0]);
  sameTurn(d.placements[1].rotation, [0, Math.PI, 0]);
  close(d.lights[0].direction, [0, 0, -1]);
  close(d.lights[0].position, [1, 3, 0]);
  close(d.spawns[0].position, [3, 0, 0]);
  close([d.spawns[0].yawDeg], [90]);
});

test('setting a group rotation is absolute: the leaves turn by the difference and the group records the value', () => {
  const d = doc();
  const gid = joinInto(d, ['p-1', 'p-2'], 'pair');
  const g = d.groups.find((x) => x.id === gid);
  close(groupRotationOf(g), [0, 0, 0]);
  setGroupRotation(d, g, ['p-1', 'p-2'], [0, Math.PI / 2, 0]);
  close(d.placements[0].position, [1, 0, 1]);
  close(g.rotation, [0, Math.PI / 2, 0]);
  // Back to 0 undoes it exactly.
  setGroupRotation(d, g, ['p-1', 'p-2'], [0, 0, 0]);
  close(d.placements[0].position, [0, 0, 0]);
  close(d.placements[1].rotation, [0, Math.PI / 2, 0]);
  close(g.rotation, [0, 0, 0]);
});

test('a gizmo turn composes into the selected group and the groups nested under it, not into siblings', () => {
  const d = doc();
  const inner = joinInto(d, ['p-1', 'p-2'], 'wall');
  const outer = joinInto(d, [inner, 'l-1'], 'house');
  const other = joinInto(d, ['s-1', outer], 'lot');
  composeGroupRotations(d, [outer], quatFromEuler([0, Math.PI / 4, 0]));
  const rot = (id) => groupRotationOf(d.groups.find((x) => x.id === id));
  close(rot(outer), [0, Math.PI / 4, 0]);
  close(rot(inner), [0, Math.PI / 4, 0]);
  close(rot(other), [0, 0, 0]);
});
