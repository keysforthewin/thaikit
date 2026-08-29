import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { buildCollisionWorld } from './collisionWorld.js';
import { Controller, resolveSpawn, PLAYER_RADIUS, STAND_HEIGHT, STEP_HEIGHT } from './controller.js';

const box = (id, position, half, extra = {}) => ({
  id,
  ref: `@t/${id}`,
  position,
  rotation: extra.rotation ?? [0, 0, 0],
  scale: extra.scale ?? [1, 1, 1],
  tags: extra.tags ?? [],
});

/** A catalogue whose every ref answers with one box compound of the given half-extents. */
const catalogueOf = (parts) => ({
  byRef: Object.fromEntries(Object.entries(parts).map(([ref, p]) => [ref, p])),
});

const docOf = (placements, settings = {}) => ({
  placements,
  lights: [],
  spawns: [],
  settings: { cellSize: 24, ...settings },
});

test('a capsule is pushed out of an axis-aligned box', () => {
  const doc = docOf([box('p1', [0, 0, 0], null)]);
  const cat = catalogueOf({
    '@t/p1': { colliders: { parts: [{ name: 'b', type: 'box', offset: [0, 1, 0], scale: [1, 1, 1] }] } },
  });
  const world = buildCollisionWorld(doc, cat);

  // Feet just inside the box's -X face.
  const foot = new THREE.Vector3(-0.8, 0, 0);
  const r = world.resolveCapsule(foot, PLAYER_RADIUS, STAND_HEIGHT);
  assert.ok(r.position.x < -1 - PLAYER_RADIUS + 1e-3, `pushed clear, got x=${r.position.x}`);
  assert.equal(r.position.z, 0);
});

test('a rotated box pushes out along its own face, not the world axis', () => {
  const doc = docOf([box('p1', [0, 0, 0], null, { rotation: [0, Math.PI / 4, 0] })]);
  const cat = catalogueOf({
    '@t/p1': { colliders: { parts: [{ name: 'b', type: 'box', offset: [0, 1, 0], scale: [2, 1, 0.2] }] } },
  });
  const world = buildCollisionWorld(doc, cat);

  // A thin wall turned 45 degrees. Standing at the origin, the push-out has to
  // be along the wall's normal -- equal parts x and z, not one or the other.
  const r = world.resolveCapsule(new THREE.Vector3(0, 0, 0), PLAYER_RADIUS, STAND_HEIGHT);
  const moved = r.position.length();
  assert.ok(moved > 0.1, 'the capsule was moved');
  assert.ok(
    Math.abs(Math.abs(r.position.x) - Math.abs(r.position.z)) < 1e-6,
    `pushed along the rotated normal, got ${r.position.x}, ${r.position.z}`,
  );
});

test('a cylinder pushes out radially', () => {
  const doc = docOf([box('p1', [0, 0, 0], null)]);
  const cat = catalogueOf({
    '@t/p1': { colliders: { parts: [{ name: 'c', type: 'cylinder', offset: [0, 0.5, 0], scale: [1, 0.5, 1] }] } },
  });
  const world = buildCollisionWorld(doc, cat);
  const r = world.resolveCapsule(new THREE.Vector3(0.5, 0, 0.5), PLAYER_RADIUS, STAND_HEIGHT);
  const radial = Math.hypot(r.position.x, r.position.z);
  assert.ok(radial > 1 + PLAYER_RADIUS - 1e-3, `outside the cylinder, got r=${radial}`);
});

test('an item with no compound falls back to a base-origin box from its size', () => {
  const doc = docOf([box('p1', [0, 0, 0], null)]);
  const cat = catalogueOf({ '@t/p1': { size: { w: 2, h: 3, d: 2 } } });
  const world = buildCollisionWorld(doc, cat);
  assert.equal(world.bodies.length, 1);
  // The box spans y in [0, 3], so its top is a floor at 3.
  assert.equal(world.floorUnder(0, 4, 0, { reach: 4 }), 3);
});

test('trigger parts are not solid', () => {
  const doc = docOf([box('p1', [0, 0, 0], null)]);
  const cat = catalogueOf({
    '@t/p1': {
      size: { w: 2, h: 2, d: 2 },
      colliders: { parts: [{ name: 't', type: 'box', offset: [0, 1, 0], scale: [1, 1, 1], isTrigger: true }] },
    },
  });
  const world = buildCollisionWorld(doc, cat);
  // Every declared part was a trigger, so it falls back to the declared size.
  assert.equal(world.bodies.length, 1);
  assert.equal(world.bodies[0].parts.length, 1);
});

test('the ground is a solid slab under its surface, not a sheet', () => {
  const doc = docOf([], { ground: { enabled: true, y: 2, margin: 8 } });
  const world = buildCollisionWorld(doc, { byRef: {} });
  assert.equal(world.bodies.length, 1);
  assert.equal(world.floorUnder(0, 5, 0, { reach: 10 }), 2);
  // A quarter metre of thickness below it, so a fast fall cannot pass through.
  assert.ok(world.bodies[0].bounds.min.y <= 2 - 0.25 + 1e-9);
});

test('a placement with a zero scale is skipped rather than crashing', () => {
  const doc = docOf([box('p1', [0, 0, 0], null, { scale: [1, 0, 1] })]);
  const cat = catalogueOf({ '@t/p1': { size: { w: 1, h: 1, d: 1 } } });
  assert.equal(buildCollisionWorld(doc, cat).bodies.length, 0);
});

test('an empty world still has usable bounds', () => {
  const world = buildCollisionWorld(docOf([]), { byRef: {} });
  assert.equal(world.bodies.length, 0);
  assert.ok(Number.isFinite(world.bounds.min.y));
  assert.equal(world.floorUnder(0, 0, 0), null);
});

// --- the controller -------------------------------------------------------

const groundDoc = () => docOf([], { ground: { enabled: true, y: 0, margin: 8 } });

test('gravity brings the player to rest on the ground', () => {
  const world = buildCollisionWorld(groundDoc(), { byRef: {} });
  const c = new Controller(world, { position: [0, 4, 0] });
  const idle = { forward: 0, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  for (let i = 0; i < 180; i += 1) c.step(idle, 1 / 60);
  assert.ok(Math.abs(c.position.y) < 1e-3, `landed at y=${c.position.y}`);
  assert.equal(c.grounded, true);
});

test('walking forward moves along the facing', () => {
  const world = buildCollisionWorld(groundDoc(), { byRef: {} });
  const c = new Controller(world, { position: [0, 0, 0] });
  c.settle();
  const fwd = { forward: 1, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  for (let i = 0; i < 60; i += 1) c.step(fwd, 1 / 60);
  // yaw 0 looks down -Z.
  assert.ok(c.position.z < -2, `walked to z=${c.position.z}`);
  assert.ok(Math.abs(c.position.x) < 1e-6);
});

test('a wall blocks and a kerb is stepped over', () => {
  const wall = box('wall', [0, 0, -2], null);
  const kerb = box('kerb', [0, 0, 2], null);
  const cat = catalogueOf({
    '@t/wall': { colliders: { parts: [{ name: 'w', type: 'box', offset: [0, 1, 0], scale: [4, 1, 0.2] }] } },
    '@t/kerb': { colliders: { parts: [{ name: 'k', type: 'box', offset: [0, 0.1, 0], scale: [4, 0.1, 1] }] } },
  });
  const doc = docOf([wall, kerb], { ground: { enabled: true, y: 0, margin: 8 } });
  const world = buildCollisionWorld(doc, cat);

  const into = { forward: 1, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  const c = new Controller(world, { position: [0, 0, 0] });
  c.settle();
  for (let i = 0; i < 120; i += 1) c.step(into, 1 / 60);
  assert.ok(c.position.z > -2 + 0.2, `stopped at the wall, got z=${c.position.z}`);

  // The kerb is 0.2 m tall -- under STEP_HEIGHT, so it is walkable.
  assert.ok(0.2 < STEP_HEIGHT);
  const back = { ...into, forward: -1 };
  const d = new Controller(world, { position: [0, 0, 0] });
  d.settle();
  for (let i = 0; i < 40; i += 1) d.step(back, 1 / 60);
  assert.ok(d.position.z > 1.5, `walked onto the kerb, got z=${d.position.z}`);
  assert.ok(d.position.y > 0.15, `stepped up onto it, got y=${d.position.y}`);
});

test('crouching cannot stand up under a ceiling', () => {
  const roof = box('roof', [0, 0, 0], null);
  const cat = catalogueOf({
    '@t/roof': { colliders: { parts: [{ name: 'r', type: 'box', offset: [0, 1.5, 0], scale: [3, 0.1, 3] }] } },
  });
  const world = buildCollisionWorld(docOf([roof], { ground: { enabled: true, y: 0, margin: 8 } }), cat);
  const c = new Controller(world, { position: [0, 0, 0] });
  c.settle();
  const down = { forward: 0, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: true };
  c.step(down, 1 / 60);
  assert.equal(c.crouching, true);
  c.step({ ...down, crouch: false }, 1 / 60);
  assert.equal(c.crouching, true, 'stayed crouched under the roof');
});

test('tapping jump on a ladder climbs faster than holding forward', () => {
  const ladder = box('lad', [0, 0, -0.5], null, { tags: ['ladder'] });
  const cat = catalogueOf({
    '@t/lad': { colliders: { parts: [{ name: 'l', type: 'box', offset: [0, 3, 0], scale: [0.4, 3, 0.15] }] } },
  });
  const world = buildCollisionWorld(docOf([ladder], { ground: { enabled: true, y: 0, margin: 8 } }), cat);

  const climb = (tap) => {
    const c = new Controller(world, { position: [0, 0, 0] });
    c.settle();
    for (let i = 0; i < 90; i += 1) {
      c.step({ forward: 1, right: 0, jump: tap, jumpPressed: tap && i % 6 === 0, sprint: false, crouch: false }, 1 / 60);
    }
    return c.position.y;
  };

  const steady = climb(false);
  const tapped = climb(true);
  assert.ok(steady > 0.5, `the steady climb went up at all, got ${steady}`);
  assert.ok(tapped > steady * 1.2, `tapping is faster: ${tapped} vs ${steady}`);
});

test('a ladder is solid until it is the one being climbed', () => {
  const ladder = box('lad', [0, 0, 0], null, { tags: ['ladder'] });
  const cat = catalogueOf({
    '@t/lad': { colliders: { parts: [{ name: 'l', type: 'box', offset: [0, 3, 0], scale: [0.4, 3, 0.15] }] } },
  });
  const world = buildCollisionWorld(docOf([ladder]), cat);

  // Not attached: as solid as anything else bolted to a wall.
  const blocked = world.resolveCapsule(new THREE.Vector3(0, 0, 0), PLAYER_RADIUS, STAND_HEIGHT);
  assert.ok(Math.abs(blocked.position.z) > 0.1, `pushed out, got z=${blocked.position.z}`);
  assert.ok(blocked.ladder, 'and reported as a ladder in reach');

  // Attached: the rungs stop pushing, so the player can occupy them.
  const on = world.resolveCapsule(new THREE.Vector3(0, 0, 0), PLAYER_RADIUS, STAND_HEIGHT, { ignore: 'lad' });
  assert.equal(on.position.z, 0);
  assert.equal(on.ladder.id, 'lad');
});

test('a jump leaves the ground and gravity brings it back', () => {
  const world = buildCollisionWorld(groundDoc(), { byRef: {} });
  const c = new Controller(world, { position: [0, 0, 0] });
  c.settle();
  const idle = { forward: 0, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  c.step(idle, 1 / 60);
  c.step({ ...idle, jumpPressed: true }, 1 / 60);
  assert.equal(c.grounded, false);
  let peak = 0;
  for (let i = 0; i < 120; i += 1) { c.step(idle, 1 / 60); peak = Math.max(peak, c.position.y); }
  assert.ok(peak > 0.9 && peak < 1.4, `jumped about a metre, peaked at ${peak}`);
  assert.ok(Math.abs(c.position.y) < 1e-3, 'and came back down');
});

test('a huge dt is clamped rather than teleporting the player', () => {
  const world = buildCollisionWorld(groundDoc(), { byRef: {} });
  const c = new Controller(world, { position: [0, 20, 0] });
  const idle = { forward: 0, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  c.step(idle, 8);
  assert.ok(c.position.y > 19, `a tab-out moved the player a little, not 8 s worth: y=${c.position.y}`);
});

test('falling out of the world respawns instead of running to -Infinity', () => {
  // No ground: nothing to land on.
  const world = buildCollisionWorld(docOf([]), { byRef: {} });
  const c = new Controller(world, { position: [0, 0, 0] });
  const idle = { forward: 0, right: 0, jump: false, jumpPressed: false, sprint: false, crouch: false };
  for (let i = 0; i < 600; i += 1) c.step(idle, 1 / 60);
  assert.equal(c.fellOut, false, 'the flag is cleared by the respawn it triggered');
  assert.ok(Number.isFinite(c.position.y));
  assert.ok(c.position.y > -200, `did not run away, y=${c.position.y}`);
});

test('a spawn entity is preferred over the camera', () => {
  const doc = docOf([]);
  doc.spawns = [{ id: 's1', name: 'spawn1', position: [3, 1, -4], yawDeg: 90, team: null }];
  const r = resolveSpawn(doc, null);
  assert.deepEqual(r.position, [3, 1, -4]);
  assert.equal(r.from, 'spawn');
  assert.ok(Math.abs(r.yaw - Math.PI / 2) < 1e-9);

  const camera = new THREE.PerspectiveCamera();
  camera.position.set(0, 10, 0);
  assert.equal(resolveSpawn(docOf([]), camera).from, 'camera');
});

test('pointSolid reads the parts, not the body envelope', () => {
  // A doorway: two posts with a two-metre gap. The body AABB spans the gap, so
  // anything testing envelopes would call the middle of the doorway solid.
  const doc = docOf([box('p1', [0, 0, 0], null)]);
  const cat = catalogueOf({
    '@t/p1': { colliders: { parts: [
      { name: 'l', type: 'box', offset: [-1.5, 1.5, 0], scale: [0.2, 1.5, 0.2] },
      { name: 'r', type: 'box', offset: [1.5, 1.5, 0], scale: [0.2, 1.5, 0.2] },
    ] } },
  });
  const world = buildCollisionWorld(doc, cat);
  assert.equal(world.bodies.length, 1);
  assert.equal(world.pointSolid(0, 1.5, 0, 0.2), false, 'the gap between the posts is open');
  assert.equal(world.pointSolid(-1.5, 1.5, 0, 0.2), true, 'the post itself is solid');
});
