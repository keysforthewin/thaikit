/**
 * Billboarding, without a GL context.
 *
 * The two things worth pinning are the yaw convention (three's forward is -Z,
 * so an object that faces +Z has to swing round, and getting the sign wrong
 * points every billboard exactly away from the viewer) and the parent
 * compensation, which is what lets the editor turn an inner group under an
 * authored transform and the runtime turn a baked node under the level root and
 * get the same world facing from both.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';

import { applyBillboard, isBillboard, BILLBOARD_MODES } from '../src/billboard.js';

const cameraAt = (x, y, z) => {
  const c = new THREE.PerspectiveCamera();
  c.position.set(x, y, z);
  c.updateMatrixWorld(true);
  return c;
};

/** Where the object's local +Z ends up in world space. */
const facingOf = (object) => new THREE.Vector3(0, 0, 1).applyQuaternion(object.getWorldQuaternion(new THREE.Quaternion()));

test('modes', () => {
  assert.deepEqual(BILLBOARD_MODES, ['none', 'yaw', 'full']);
  assert.equal(isBillboard('none'), false);
  assert.equal(isBillboard(undefined), false);
  assert.equal(isBillboard('yaw'), true);
  assert.equal(isBillboard('full'), true);
});

test('none does nothing at all', () => {
  const o = new THREE.Object3D();
  o.rotation.y = 1.234;
  const before = o.quaternion.clone();
  assert.equal(applyBillboard(o, 'none', cameraAt(10, 0, 0)), false);
  assert.ok(o.quaternion.equals(before));
});

test('yaw swings the object\'s front round to the camera', () => {
  const scene = new THREE.Scene();
  const o = new THREE.Object3D();
  scene.add(o);
  for (const [cx, cz, want] of [[10, 0, [1, 0]], [-10, 0, [-1, 0]], [0, 10, [0, 1]], [0, -10, [0, -1]]]) {
    applyBillboard(o, 'yaw', cameraAt(cx, 0, cz));
    const f = facingOf(o);
    assert.ok(Math.abs(f.x - want[0]) < 1e-6 && Math.abs(f.z - want[1]) < 1e-6,
      `camera at (${cx}, ${cz}): expected +Z to point ${want}, got ${f.x.toFixed(3)},${f.z.toFixed(3)}`);
  }
});

test('yaw stays upright however high the camera is', () => {
  const scene = new THREE.Scene();
  const o = new THREE.Object3D();
  scene.add(o);
  // Straight overhead is the case that tips a naive lookAt onto its back.
  applyBillboard(o, 'yaw', cameraAt(3, 400, 3));
  const up = new THREE.Vector3(0, 1, 0).applyQuaternion(o.getWorldQuaternion(new THREE.Quaternion()));
  assert.ok(Math.abs(up.y - 1) < 1e-6, `expected +Y to stay up, got ${up.toArray()}`);
});

test('full copies the camera\'s orientation, pitch and all', () => {
  const scene = new THREE.Scene();
  const o = new THREE.Object3D();
  scene.add(o);
  const cam = cameraAt(5, 20, 5);
  cam.lookAt(0, 0, 0);
  cam.updateMatrixWorld(true);
  applyBillboard(o, 'full', cam);
  const camQ = cam.getWorldQuaternion(new THREE.Quaternion());
  assert.ok(o.getWorldQuaternion(new THREE.Quaternion()).angleTo(camQ) < 1e-6);
});

// The editor turns an inner group hanging under the authored transform; the
// runtime turns a baked node hanging under the level root. Both must end up
// pointing the same way, or a prop is placed facing one way and ships facing
// another.
test('the world facing is the same whatever the parent is rotated to', () => {
  const scene = new THREE.Scene();
  const camera = cameraAt(30, 0, -12);

  const bare = new THREE.Object3D();
  scene.add(bare);
  applyBillboard(bare, 'yaw', camera);

  const authored = new THREE.Object3D();
  authored.rotation.set(0, 2.1, 0);
  authored.position.set(0, 0, 0);
  scene.add(authored);
  authored.updateMatrixWorld(true);
  const inner = new THREE.Object3D();
  authored.add(inner);
  applyBillboard(inner, 'yaw', camera);

  assert.ok(facingOf(bare).distanceTo(facingOf(inner)) < 1e-6,
    'an authored parent rotation leaked into the billboard facing');
});

test('a scaled parent does not skew the facing', () => {
  const scene = new THREE.Scene();
  const camera = cameraAt(-7, 2, 19);
  const parent = new THREE.Object3D();
  parent.scale.set(3, 0.5, 3);
  parent.position.set(4, 0, -2);
  scene.add(parent);
  parent.updateMatrixWorld(true);
  const o = new THREE.Object3D();
  parent.add(o);
  applyBillboard(o, 'yaw', camera);

  const f = facingOf(o).setY(0).normalize();
  const toCam = camera.position.clone().sub(o.getWorldPosition(new THREE.Vector3())).setY(0).normalize();
  assert.ok(f.distanceTo(toCam) < 1e-6, `expected ${toCam.toArray()}, got ${f.toArray()}`);
});
