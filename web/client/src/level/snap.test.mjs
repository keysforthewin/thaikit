import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { obbFromBox, snapTranslation, computeSnap } from './snap.js';

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
