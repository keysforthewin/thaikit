import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { obbFromBox, snapTranslation, computeSnap, dropToSurface, thinLift, THIN_LIFT } from './snap.js';

const tile = (x, z, w = 8, d = 8, ry = 0) => {
  const box = new THREE.Box3(new THREE.Vector3(-w / 2, 0, -d / 2), new THREE.Vector3(w / 2, 0.1, d / 2));
  const m = new THREE.Matrix4().compose(new THREE.Vector3(x, 0, z), new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), ry), new THREE.Vector3(1, 1, 1));
  return obbFromBox(box, m);
};
const opt = { threshold: 0.3, edgeThreshold: 0.25, angleDeg: 5, minOverlap: 0.05 };

test('a tile 0.2 m short of its neighbour butts up flush', () => {
  const hit = snapTranslation(tile(8.2, 0), [tile(0, 0)], opt);
  assert.ok(hit);
  assert.ok(Math.abs(hit.corr.x + 0.2) < 1e-6, `corr.x ${hit.corr.x}`);
  assert.ok(Math.abs(hit.corr.z) < 1e-6);
});

test('an overlapping tile is pushed back out', () => {
  const hit = snapTranslation(tile(7.85, 0), [tile(0, 0)], opt);
  assert.ok(hit);
  assert.ok(Math.abs(hit.corr.x - 0.15) < 1e-6);
});

test('a lateral offset inside the edge threshold aligns the edges', () => {
  const hit = snapTranslation(tile(8.1, 0.2), [tile(0, 0)], opt);
  assert.ok(hit);
  assert.ok(Math.abs(hit.corr.x + 0.1) < 1e-6);
  assert.ok(Math.abs(hit.corr.z + 0.2) < 1e-6, `corr.z ${hit.corr.z}`);
});

test('a lateral offset beyond the edge threshold is left alone', () => {
  const hit = snapTranslation(tile(8.1, 3), [tile(0, 0)], opt);
  assert.ok(hit);
  assert.ok(Math.abs(hit.corr.z) < 1e-6);
});

test('a yawed neighbour offers no butt joint, a 90-degree one does', () => {
  // Tops stay parallel whatever the yaw, so a co-facing top snap is still
  // allowed; what must not happen is a butt joint against a slanted side.
  const slanted = computeSnap(tile(8.2, 0), [tile(0, 0, 8, 8, 0.4)], opt);
  assert.ok(!slanted || !slanted.opposed);
  const square = computeSnap(tile(8.2, 0), [tile(0, 0, 8, 8, Math.PI / 2)], opt);
  assert.ok(square && square.opposed);
});

test('far objects do not snap', () => {
  assert.equal(snapTranslation(tile(20, 0), [tile(0, 0)], opt), null);
});

/** A solid block standing on y=0, as a real mesh the ray can hit. */
const block = (x, z, w, h, d) => {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial());
  m.position.set(x, h / 2, z);
  m.updateMatrixWorld(true);
  return m;
};

test('a footprint over a table climbs onto it', () => {
  const table = block(0, 0, 2, 0.8, 1);
  const r = dropToSurface({ x: 0.3, z: 0.1, bottomY: 0, climb: 2, targets: [table], groundY: 0 });
  assert.ok(r);
  assert.equal(r.on, 'object');
  assert.ok(Math.abs(r.dy - 0.8) < 1e-6, `dy ${r.dy}`);
});

test('a surface higher than the climb is not stepped onto', () => {
  const wall = block(0, 0, 2, 3, 1);
  const r = dropToSurface({ x: 0, z: 0, bottomY: 0, climb: 2, targets: [wall], groundY: 0 });
  // The ray starts inside the wall at y=2 and meets its floor face at 0 or the
  // ground at 0: either way the object stays where it is.
  assert.ok(r);
  assert.ok(Math.abs(r.dy) < 1e-6, `dy ${r.dy}`);
});

test('past the table edge the object drops to the ground, any distance', () => {
  const table = block(0, 0, 2, 0.8, 1);
  const r = dropToSurface({ x: 5, z: 0, bottomY: 6, climb: 2, targets: [table], groundY: 0 });
  assert.ok(r);
  assert.equal(r.on, 'ground');
  assert.ok(Math.abs(r.dy + 6) < 1e-6, `dy ${r.dy}`);
});

test('a pitched surface is hit where the ray lands, not at its bounding box', () => {
  const ramp = block(0, 0, 4, 1, 4);
  ramp.rotation.z = Math.PI / 6;
  ramp.updateMatrixWorld(true);
  const centre = dropToSurface({ x: 0, z: 0, bottomY: 0, climb: 4, targets: [ramp], groundY: null });
  const side = dropToSurface({ x: 1, z: 0, bottomY: 0, climb: 4, targets: [ramp], groundY: null });
  assert.ok(centre && side);
  assert.ok(side.dy > centre.dy, `slope ${centre.dy} -> ${side.dy}`);
});

test('nothing beneath means no correction', () => {
  assert.equal(dropToSurface({ x: 0, z: 0, bottomY: 1, climb: 2, targets: [], groundY: null }), null);
  // Ground above the reach of the climb is not beneath either.
  assert.equal(dropToSurface({ x: 0, z: 0, bottomY: 0, climb: 2, targets: [], groundY: 5 }), null);
});

test('a quad is lifted clear of the surface it lands on; a solid sits flush', () => {
  assert.equal(thinLift(0), THIN_LIFT);
  assert.equal(thinLift(0.005), THIN_LIFT);
  assert.equal(thinLift(0.1), 0);
  assert.equal(thinLift(4.6), 0);
});
