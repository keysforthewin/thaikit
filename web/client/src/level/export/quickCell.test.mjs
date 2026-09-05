/**
 * Quick export's arithmetic: which lamps reach a cell, which cell `auto`
 * picks, and where the synthesised spawn lands.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { cellRect, lightReachesCell, describeCells, pickCell, placeSpawn } from './quickCell.js';

const rect = cellRect(1, -1, 24); // x 24..48, z -24..0
const spot = (x, z, extra = {}) => ({ id: `s${x}${z}`, type: 'spot', position: [x, 3, z], ...extra });
const point = (x, z, extra = {}) => ({ id: `p${x}${z}`, type: 'point', position: [x, 3, z], ...extra });

test('the moon always reaches; a plain directional never does', () => {
  assert.equal(lightReachesCell({ type: 'directional', role: 'moon', position: [999, 50, 999] }, rect), true);
  assert.equal(lightReachesCell({ type: 'directional', role: null, position: [30, 50, -10] }, rect), false);
});

test('a lamp inside the cell reaches it; one outside only within its distance', () => {
  assert.equal(lightReachesCell(spot(30, -10), rect), true);
  assert.equal(lightReachesCell(spot(50, -10, { distance: 3 }), rect), true);
  assert.equal(lightReachesCell(spot(50, -10, { distance: 1 }), rect), false);
  // distance 0 is INFINITE in three; that must not pull in every lamp on the map.
  assert.equal(lightReachesCell(point(50, -10, { distance: 0 }), rect), false);
  assert.equal(lightReachesCell(point(50, -10), rect), false);
});

const cellsMap = new Map([
  ['0_0', { key: '0_0', ix: 0, iz: 0, objects: 3, mergedDrawCalls: 5, triangles: 900 }],
  ['1_-1', { key: '1_-1', ix: 1, iz: -1, objects: 7, mergedDrawCalls: 12, triangles: 4000 }],
  ['2_0', { key: '2_0', ix: 2, iz: 0, objects: 1, mergedDrawCalls: 1, triangles: 10 }],
]);
const doc = {
  settings: { cellSize: 24 },
  lights: [
    { id: 'moon', type: 'directional', role: 'moon', position: [0, 50, 0] },
    spot(30, -10), point(5, 5), point(50, 5, { enabled: false }),
  ],
  spawns: [{ id: 'sp', name: 'a', position: [30, 0, -5] }],
};

test('describeCells counts the lamps and spawns standing in each cell, ignoring disabled and the moon', () => {
  const list = describeCells(doc, cellsMap);
  assert.deepEqual(list.map((c) => [c.key, c.spots, c.points, c.spawns]), [['0_0', 0, 1, 0], ['1_-1', 1, 0, 1], ['2_0', 0, 0, 0]]);
});

test('pickCell prefers the selection, then a spot-lit cell, then a point-lit one, then the busiest', () => {
  const list = describeCells(doc, cellsMap);
  assert.equal(pickCell(list, { selectionCell: '2_0' }).cell.key, '2_0');
  assert.equal(pickCell(list, { random: () => 0 }).cell.key, '1_-1');
  const noSpots = list.map((c) => ({ ...c, spots: 0 }));
  assert.equal(pickCell(noSpots, { random: () => 0.99 }).cell.key, '0_0');
  const unlit = noSpots.map((c) => ({ ...c, points: 0 }));
  assert.equal(pickCell(unlit).cell.key, '1_-1');
  assert.equal(pickCell([]), null);
});

test('placeSpawn avoids footprints, walks toward the lamps and faces the nearest spot', () => {
  const lamp = spot(40, -12.5);
  // A slab covering the whole east half of the cell: the free point nearest the
  // lamp is just west of x = 36 - pad.
  const placements = [{ bounds: { min: [36, 0, -24], max: [48, 4, 0] } }];
  const s = placeSpawn(rect, placements, [doc.lights[0], lamp], 0.5);
  assert.equal(s.free, true);
  assert.ok(s.position[0] < 36 - 0.5 && s.position[0] > 33, `x ${s.position[0]}`);
  assert.equal(s.position[1], 0.5);
  assert.ok(Math.abs(s.position[2] - -12.5) <= 0.5, `z ${s.position[2]}`);
  // The lamp is at +x, so the player turns toward +x: yaw -90.
  assert.equal(s.yawDeg, -90);
  const full = placeSpawn(rect, [{ bounds: { min: [0, 0, -100], max: [100, 4, 100] } }], [], 0);
  assert.equal(full.free, false);
  assert.deepEqual(full.position, [36, 0, -12]);
});
