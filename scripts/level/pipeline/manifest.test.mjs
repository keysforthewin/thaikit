import test from 'node:test';
import assert from 'node:assert/strict';

import { worldShapes, localShapes, rotateByQuaternion } from './manifest.mjs';

/** three's Quaternion.setFromEuler for order 'XYZ', written out. */
function quatXYZ([x, y, z]) {
  const c1 = Math.cos(x / 2), c2 = Math.cos(y / 2), c3 = Math.cos(z / 2);
  const s1 = Math.sin(x / 2), s2 = Math.sin(y / 2), s3 = Math.sin(z / 2);
  return [s1 * c2 * c3 + c1 * s2 * s3, c1 * s2 * c3 - s1 * c2 * s3, c1 * c2 * s3 + s1 * s2 * c3, c1 * c2 * c3 - s1 * s2 * s3];
}
/** three's Matrix4.makeRotationFromEuler 'XYZ' (Rx * Ry * Rz) applied to v: the ground truth. */
function rotateEulerXYZ([x, y, z], [a, b, c]) {
  const ca = Math.cos(a), sa = Math.sin(a), cb = Math.cos(b), sb = Math.sin(b), cc = Math.cos(c), sc = Math.sin(c);
  const m = [
    [cb * cc, -cb * sc, sb],
    [sa * sb * cc + ca * sc, ca * cc - sa * sb * sc, -sa * cb],
    [sa * sc - ca * sb * cc, ca * sb * sc + sa * cc, ca * cb],
  ];
  return m.map((r) => r[0] * x + r[1] * y + r[2] * z);
}
const near = (a, b, eps = 1e-3) => a.forEach((v, i) => assert.ok(Math.abs(v - b[i]) < eps, `${a} vs ${b}`));

test('worldShapes rotates a part centre by the same rotation it orients the part with', () => {
  // A genuine two-axis tilt, not a yaw: the case the old euler helper got wrong by metres.
  for (const rotation of [[0.5, 0.7, 0], [0.5, 0, 0.7], [0, 0.7, 0.5], [0.3, 0.6, 0.9], [Math.PI, 0.4, Math.PI]]) {
    const p = { position: [10, 2, -5], rotation, scale: [1, 1, 1], colliders: [{ type: 'box', offset: [1, 2, 3], scale: [0.5, 0.5, 0.5] }] };
    const [s] = worldShapes(p);
    const truth = rotateEulerXYZ([1, 2, 3], rotation).map((v, i) => v + p.position[i]);
    near(s.position, truth);
    near(s.quaternion, quatXYZ(rotation));
    near(rotateByQuaternion([1, 2, 3], s.quaternion), rotateEulerXYZ([1, 2, 3], rotation));
  }
});

test('worldShapes scales offsets and half-extents in the placement frame before rotating', () => {
  const p = { position: [0, 0, 0], rotation: [0, Math.PI / 2, 0], scale: [2, 3, 4], colliders: [{ type: 'box', offset: [1, 1, 1], scale: [0.5, 0.5, 0.5] }] };
  const [s] = worldShapes(p);
  near(s.position, [4, 3, -2]); // (2,3,4) yawed a quarter turn: x' = z, z' = -x
  near(s.halfExtents, [1, 1.5, 2]);
});

test('localShapes folds the placement scale into a dynamic body, since the runtime places it unscaled', () => {
  const p = { position: [0, 0, 0], rotation: [0, 0, 0], scale: [2, 2, 2], colliders: [{ type: 'box', offset: [0, 0.5, 0], scale: [0.25, 0.5, 0.25] }, { type: 'cylinder', offset: [0, 1, 0], scale: [0.3, 0.2, 0.1] }] };
  const [box, cyl] = localShapes(p);
  near(box.position, [0, 1, 0]);
  near(box.halfExtents, [0.5, 1, 0.5]);
  near(cyl.halfExtents, [0.6, 0.4, 0.6]);
  const [unscaled] = localShapes({ ...p, scale: undefined });
  near(unscaled.halfExtents, [0.25, 0.5, 0.25]);
});
