import test from 'node:test';
import assert from 'node:assert/strict';

import { makeGrid, cellIndex, cellCentre, summarise, buildOccluders, occluded, rigMode, parseRects, defaultBounds } from './light-coverage.mjs';

const near = (a, b, tol = 1e-6) => assert.ok(Math.abs(a - b) <= tol, `${a} != ${b} (tol ${tol})`);

const placement = (over = {}) => ({
  static: true,
  billboard: 'none',
  ref: '@unreal/cube',
  source: { actor: 'wall' },
  bounds: { min: [0, 0, 0], max: [4, 4, 4] },
  ...over,
});

test('the grid round-trips a world position through its cell index', () => {
  const grid = makeGrid([-10, -10, 10, 10], 5);
  assert.equal(grid.nx, 4);
  assert.equal(grid.nz, 4);
  const k = cellIndex(grid, -8, 7);
  assert.deepEqual(cellCentre(grid, k), [-7.5, 7.5]);
  assert.equal(cellIndex(grid, -11, 0), -1, 'outside the west edge');
  assert.equal(cellIndex(grid, 0, 11), -1, 'outside the north edge');
});

test('a point lamp puts exactly I/d^2 on the floor beneath it', () => {
  // The photometry the whole tool rests on. A 100 cd lamp 4 m up gives
  // 100 / 16 = 6.25 lux directly below, and cos(theta)/d^2 off to the side.
  const grid = makeGrid([-1, -1, 1, 1], 2);
  const bake = {
    lights: [{ type: 'point', position: [0, 4, 0], intensity: 100, distance: null }],
    placements: [],
  };
  const detail = rigMode(bake, grid, { occlusion: false, sampleY: 0 });
  assert.equal(detail.lamps, 1);
  near(grid.sum[0], 100 / 16, 1e-9);
});

test('an uplight contributes nothing to the floor', () => {
  // Six of bangkoksoi's monument uplights sit at 0.3 m pitched up. They light
  // the facade and the ground gets nothing, which is the whole reason the
  // temple compound measured zero.
  const grid = makeGrid([-1, -1, 1, 1], 2);
  const bake = {
    lights: [{ type: 'spot', position: [0, -1, 0], direction: [0, 1, 0], intensity: 1000, angle: Math.PI / 4, penumbra: 0, distance: null }],
    placements: [],
  };
  rigMode(bake, grid, { occlusion: false, sampleY: 0 });
  assert.equal(grid.sum[0], 0);
});

test('penumbra feathers the cone instead of shrinking it', () => {
  // `penumbra` is the FRACTION of the cone that is feathered -- exactly what
  // the bake hands Blender as `spot_blend` -- so raising it must soften the
  // edge while leaving the lit footprint the same size.
  const at = (penumbra, x) => {
    const grid = makeGrid([x - 0.5, -0.5, x + 0.5, 0.5], 1);
    rigMode({
      lights: [{ type: 'spot', position: [0, 4, 0], direction: [0, -1, 0], intensity: 1000, angle: Math.PI / 4, penumbra, distance: null }],
      placements: [],
    }, grid, { occlusion: false, sampleY: 0 });
    return grid.sum[0];
  };
  // Just inside the 45-degree cone at 4 m up, i.e. near its edge at x = 4.
  assert.ok(at(0.9, 3.6) > at(0.1, 3.6) * 0 , 'sanity');
  assert.ok(at(0.1, 3.6) > at(0.9, 3.6), 'a hard cone is brighter at its rim than a feathered one');
  assert.ok(at(0.9, 3.6) > 0, 'a feathered cone still reaches its rim');
  assert.equal(at(0.9, 4.4), 0, 'and neither reaches past the outer angle');
  assert.equal(at(0.1, 4.4), 0);
});

test('three honours the lamp range that Cycles ignores', () => {
  // `distance` is three's hard cutoff and Blender has no equivalent, so the
  // rig map is deliberately the conservative of the two.
  const grid = makeGrid([9, -1, 11, 1], 2);
  const lit = { type: 'point', position: [10, 4, 0], intensity: 100, distance: null };
  const capped = { ...lit, distance: 2 };
  const a = makeGrid([9, -1, 11, 1], 2);
  rigMode({ lights: [lit], placements: [] }, a, { occlusion: false, sampleY: 0 });
  rigMode({ lights: [capped], placements: [] }, grid, { occlusion: false, sampleY: 0 });
  assert.ok(a.sum[0] > 0);
  assert.equal(grid.sum[0], 0, 'the sample is 4 m away and the range is 2 m');
});

test('only solid volumes occlude, and foliage never does', () => {
  const bounds = [0, 0, 40, 40];
  const solid = buildOccluders([placement({ bounds: { min: [10, 0, 10], max: [16, 6, 16] } })], bounds);
  assert.equal(solid.used, 1);

  // 176 `border_trees` and a dozen palms are what blacked the first version of
  // this map out: their bounding boxes are big and almost entirely air.
  const foliage = buildOccluders([placement({ source: { actor: 'border_trees_04' }, bounds: { min: [10, 0, 10], max: [16, 6, 16] } })], bounds);
  assert.equal(foliage.used, 0);

  const thin = buildOccluders([placement({ bounds: { min: [10, 0, 10], max: [10.3, 6, 10.3] } })], bounds);
  assert.equal(thin.used, 0, 'a 0.3 m pole is not a wall');

  const low = buildOccluders([placement({ bounds: { min: [10, 0, 10], max: [16, 0.4, 16] } })], bounds);
  assert.equal(low.used, 0, 'a kerb never shadows a street lamp');

  const ground = buildOccluders([placement({ ref: '@thaikit/ground', bounds: { min: [0, 0, 0], max: [24, 3, 24] } })], bounds);
  assert.equal(ground.used, 0);

  const imposter = buildOccluders([placement({ billboard: 'yaw', bounds: { min: [10, 0, 10], max: [30, 90, 16] } })], bounds);
  assert.equal(imposter.used, 0, 'a backdrop quad kilometres away is not a wall');
});

test('a wall blocks a lamp but a deck leaves the street under it lit', () => {
  const bounds = [0, 0, 40, 40];
  const wall = buildOccluders([placement({ bounds: { min: [19, 0, 0], max: [21, 8, 40] } })], bounds);
  assert.ok(occluded(wall, 10, 6, 20, 30, 0, 20), 'across the wall');
  assert.ok(!occluded(wall, 10, 6, 20, 15, 0, 20), 'both ends on the same side');

  // The spans model exists for exactly this: a heightfield would call the
  // expressway deck opaque from the ground up and black out the one stretch of
  // this level lit from directly overhead.
  const deck = buildOccluders([placement({ bounds: { min: [0, 11.8, 0], max: [40, 12.9, 40] } })], bounds);
  assert.equal(deck.used, 1);
  assert.ok(!occluded(deck, 10, 9, 20, 30, 0, 20), 'a soffit lamp under the deck still reaches the road');
  assert.ok(occluded(deck, 10, 20, 20, 30, 0, 20), 'a lamp above the deck does not');
});

test('summarise reports the two ratios the coverage target is gated on', () => {
  const grid = makeGrid([0, 0, 4, 1], 1);
  grid.sum.set([1, 2, 3, 40]);
  grid.weight.fill(1);
  const s = summarise(grid, { threshold: 2.5 });
  assert.equal(s.cells, 4);
  assert.equal(s.p50, 3);
  assert.equal(s.max, 40);
  assert.equal(s.uniformity, 0.333, 'p10 over p50');
  assert.equal(s.peakRatio, 13.333, 'max over p50');
  assert.equal(s.under, 2);
  assert.deepEqual(s.dark.map((d) => d.value), [1, 2], 'darkest first, so the list is a work queue');
});

test('an excluded rectangle leaves the alley out of the statistics entirely', () => {
  const grid = makeGrid([0, 0, 4, 1], 1);
  grid.sum.set([0, 0, 3, 3]);
  grid.weight.fill(1);
  const exclude = parseRects('alley=0,0,2,1');
  const s = summarise(grid, { threshold: 1, exclude });
  assert.equal(s.excludedCells, 2);
  assert.equal(s.cells, 2);
  assert.equal(s.under, 0, 'a deliberately dark alley is not a coverage failure');
});

test('a cell with no surface in it is empty, not dark', () => {
  const grid = makeGrid([0, 0, 2, 1], 1);
  grid.sum.set([5, 0]);
  grid.weight.set([1, 0]);
  const s = summarise(grid, { threshold: 1 });
  assert.equal(s.emptyCells, 1);
  assert.equal(s.cells, 1);
  assert.equal(s.under, 0);
});

test('parseRects wants four numbers and says so', () => {
  assert.deepEqual(parseRects('a=1,2,3,4'), [{ name: 'a', x0: 1, z0: 2, x1: 3, z1: 4 }]);
  assert.deepEqual(parseRects('3,4,1,2')[0], { name: '3,4,1,2', x0: 1, z0: 2, x1: 3, z1: 4 }, 'corners in any order');
  assert.equal(parseRects('a=1,2,3,4;b=5,6,7,8').length, 2);
  assert.deepEqual(parseRects(null), []);
  assert.throws(() => parseRects('a=1,2,3'), /--exclude wants name=x0,z0,x1,z1/);
});

test('default bounds follow the play block, not the imposter ring', () => {
  const bake = {
    spawns: [{ position: [0, 1, 0] }],
    lights: [
      { type: 'point', position: [10, 3, 20] },
      // A directional light sits at an arbitrary place and must not stretch the map.
      { type: 'directional', position: [9999, 20, 9999] },
    ],
  };
  assert.deepEqual(defaultBounds(bake, 5), [-5, -5, 15, 25]);
  assert.throws(() => defaultBounds({ spawns: [], lights: [] }), /pass --bounds/);
});
