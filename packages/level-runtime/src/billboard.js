/**
 * Billboarding: an object that turns to face the camera every frame.
 *
 * Shared verbatim between the editor's `<PlacementNode>` and `loadLevel()`, for
 * the same reason the sky is: a prop that faces one way while you place it and
 * another way in the game is not something you can art-direct.
 *
 * Two modes, and the difference matters:
 *
 * - `yaw` turns about the world Y axis only. This is what almost every placed
 *   prop wants -- a tree, a sign, a painted crowd card. It stays planted, and
 *   looking down on it from a rooftop shows it standing on the ground rather
 *   than tipping back to meet your eye.
 * - `full` copies the camera's own orientation, so the object is screen-aligned
 *   the way a `THREE.Sprite` is. That is right for a glow, a puff, a lens
 *   flare, and wrong for anything with a bottom edge that touches the world.
 *
 * The facing is REPLACED, not offset: while an object is billboarding, its
 * authored rotation has no effect on where it points. That is the same contract
 * the skyline imposters' own `onBeforeRender` has followed since they shipped,
 * so a placement-level billboard on an imposter is redundant rather than
 * conflicting -- both compute an absolute world facing and land in the same
 * place.
 */
import * as THREE from 'three';

export const BILLBOARD_MODES = ['none', 'yaw', 'full'];

export const isBillboard = (mode) => mode === 'yaw' || mode === 'full';

const Y_AXIS = new THREE.Vector3(0, 1, 0);
const _camPos = new THREE.Vector3();
const _selfPos = new THREE.Vector3();
const _parentQuat = new THREE.Quaternion();
const _quat = new THREE.Quaternion();

/**
 * Turn `object` to face `camera`.
 *
 * The desired facing is computed in WORLD space and then brought back into the
 * object's parent's frame, so this works wherever the object hangs: on the
 * editor's inner group under an authored transform, or on a baked
 * `dynamic/<placement>` node sitting directly under the level root.
 *
 * @param {THREE.Object3D} object
 * @param {'none'|'yaw'|'full'} mode
 * @param {THREE.Camera} camera
 * @returns {boolean} whether anything was applied
 */
export function applyBillboard(object, mode, camera) {
  if (!object || !camera || !isBillboard(mode)) return false;

  if (mode === 'full') {
    camera.getWorldQuaternion(_quat);
  } else {
    camera.getWorldPosition(_camPos);
    object.getWorldPosition(_selfPos);
    // atan2(x, z) rather than the usual (z, x): three's forward is -Z, so this
    // is the yaw that swings +Z round to the camera.
    _quat.setFromAxisAngle(Y_AXIS, Math.atan2(_camPos.x - _selfPos.x, _camPos.z - _selfPos.z));
  }

  if (object.parent) {
    object.parent.getWorldQuaternion(_parentQuat).invert();
    _quat.premultiply(_parentQuat);
  }
  object.quaternion.copy(_quat);
  // The caller may be running after the frame's matrix pass (`onBeforeRender`)
  // or before it (`useFrame`, the runtime's `update`). Pushing the new facing
  // through by hand is correct either way and costs one node.
  object.updateMatrixWorld(true);
  return true;
}
