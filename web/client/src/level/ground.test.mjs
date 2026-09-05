/**
 * The ground plane's extent.
 *
 * The rule worth pinning is that BILLBOARDS ARE NOT GROUND. A skyline imposter
 * is a backdrop quad standing kilometres away; extending the floor out under it
 * costs a Cycles bake target, a lightmap island and a share of the atlas per
 * cell, for surface nobody can reach. `thepurge` wanted 53,128 tiles and got
 * the MAX_TILES cap's lopsided 4096 -- a floor that did not cover its own
 * 25 x 47 m walkable map while paying for 5.5 km of empty ground.
 */
import test from 'node:test';
import assert from 'node:assert/strict';

import { groundExtent, docFootprints, DEFAULT_GROUND } from './ground.js';

const box = (x, z, w = 2, d = 2, billboard = 'none') => ({
  min: [x - w / 2, 0, z - d / 2],
  max: [x + w / 2, 0, z + d / 2],
  billboard,
});

test('a lone prop still gets a floor under it', () => {
  // Four, not one: a prop at the origin straddles the cell boundary in both
  // axes, so the floor under it is the four cells meeting there.
  const e = groundExtent([box(0, 0)], { cellSize: 24, margin: 8 });
  assert.equal(e.tiles.length, 4);
  assert.equal(e.excluded, 0);
  assert.equal(e.truncated, false);
});

test('an empty level gets a floor rather than an infinite or NaN one', () => {
  const e = groundExtent([], { cellSize: 24, margin: 8 });
  assert.equal(e.tiles.length, 4);
  assert.ok(Number.isFinite(e.minX) && Number.isFinite(e.maxZ));
});

test('the floor follows a prop placed at the edge', () => {
  const near = groundExtent([box(0, 0)], { cellSize: 24, margin: 8 });
  const far = groundExtent([box(0, 0), box(100, 0)], { cellSize: 24, margin: 8 });
  assert.ok(far.tiles.length > near.tiles.length, 'adding a distant prop extends the ground');
});

test('billboards are excluded, however far out they stand', () => {
  const walkable = [box(0, 0), box(20, 40)];
  const imposters = [box(3000, 0, 400, 400, 'yaw'), box(-2600, 2200, 400, 400, 'full')];

  const withThem = groundExtent([...walkable, ...imposters.map((b) => ({ ...b, billboard: 'none' }))], { cellSize: 24, margin: 8 });
  const withoutThem = groundExtent([...walkable, ...imposters], { cellSize: 24, margin: 8 });

  assert.equal(withoutThem.excluded, 2);
  assert.equal(withoutThem.tiles.length, groundExtent(walkable, { cellSize: 24, margin: 8 }).tiles.length,
    'the extent is exactly what the walkable props alone would give');
  assert.ok(withThem.wanted > 10_000, `imposters would want ${withThem.wanted} tiles`);
  assert.ok(withoutThem.wanted < 20, `walkable map wants ${withoutThem.wanted} tiles`);
});

test('a level that is ONLY backdrop still gets a floor', () => {
  // Every box excluded means no finite bounds -- it must fall through to the
  // one-cell default rather than producing NaN tiles.
  const e = groundExtent([box(3000, 0, 400, 400, 'yaw')], { cellSize: 24, margin: 8 });
  assert.equal(e.excluded, 1);
  assert.equal(e.tiles.length, 4, 'the origin default, not a floor 3 km away');
  assert.ok(Number.isFinite(e.minX) && Number.isFinite(e.maxZ));
});

test('truncation is reported rather than silent', () => {
  // 4096 is the cap; ask for more and both the cap and the true count show.
  const e = groundExtent([box(0, 0), box(60_000, 60_000)], { cellSize: 24, margin: 8 });
  assert.equal(e.truncated, true);
  assert.ok(e.wanted > e.tiles.length);
  assert.equal(e.tiles.length, 4096);
});

test('docFootprints carries the billboard flag through', () => {
  const doc = {
    placements: [
      { ref: '@x/a', position: [0, 0, 0], scale: [1, 1, 1], billboard: 'none' },
      { ref: '@x/b', position: [3000, 0, 0], scale: [1, 1, 1], billboard: 'yaw' },
    ],
  };
  const byRef = { '@x/a': { size: { w: 4, d: 4 } }, '@x/b': { size: { w: 400, d: 400 } } };
  const boxes = docFootprints(doc, byRef);
  assert.deepEqual(boxes.map((b) => b.billboard), ['none', 'yaw']);
  // ...so the editor's preview floor matches what the bake will tile: a
  // handful of cells around the one real prop, not thousands out to the imposter.
  assert.equal(groundExtent(boxes, { cellSize: 24, margin: 8 }).tiles.length, 4);
});

test('the default ground is off, and grey enough to see when it is on', () => {
  assert.equal(DEFAULT_GROUND.enabled, false);
  assert.equal(DEFAULT_GROUND.color, '#8b909b');
});

test('the margin wraps the whole map, not only the sides that cross a cell line', () => {
  // A 10 x 6 m map at (5..15, 10..16) with a 1 m margin: the floor must end
  // exactly 1 m past every side. It used to snap out to whole 24 m cells, so
  // the two sides nearest a cell line jumped a whole cell and the others did
  // not move at all.
  const e = groundExtent([box(10, 13, 10, 6)], { cellSize: 24, margin: 1 });
  assert.deepEqual([e.minX, e.maxX, e.minZ, e.maxZ], [4, 16, 9, 17]);
  assert.equal(e.width, 12);
  assert.equal(e.depth, 8);
  assert.equal(e.tiles.length, 1);
  const [t] = e.tiles;
  assert.deepEqual([t.minX, t.maxX, t.minZ, t.maxZ], [4, 16, 9, 17]);
  assert.deepEqual([t.cx, t.cz, t.width, t.depth], [10, 13, 12, 8]);
});

test('tiles are cells clipped to the rectangle, and cover it exactly', () => {
  const e = groundExtent([box(20, 30, 40, 20)], { cellSize: 24, margin: 2 });
  // -2..42 in x spans cells -1, 0, 1; 18..42 in z spans cells 0 and 1.
  assert.deepEqual([e.ix0, e.ix1, e.iz0, e.iz1], [-1, 1, 0, 1]);
  const area = e.tiles.reduce((a, t) => a + t.width * t.depth, 0);
  assert.ok(Math.abs(area - e.width * e.depth) < 1e-9, 'tile areas sum to the rectangle');
  for (const t of e.tiles) {
    assert.ok(t.width > 0 && t.depth > 0, 'no degenerate tile');
    assert.ok(t.minX >= t.ix * 24 - 1e-9 && t.maxX <= (t.ix + 1) * 24 + 1e-9, 'tile stays inside its cell');
    assert.ok(t.minX >= e.minX && t.maxX <= e.maxX && t.minZ >= e.minZ && t.maxZ <= e.maxZ, 'tile stays inside the rectangle');
  }
});

test('an edge sitting exactly on a cell line claims no zero-width tile', () => {
  // 0..24 after the margin: exactly one cell, not a second empty one at ix=1.
  const e = groundExtent([box(12, 12, 22, 22)], { cellSize: 24, margin: 1 });
  assert.deepEqual([e.minX, e.maxX], [0, 24]);
  assert.equal(e.tiles.length, 1);
});
