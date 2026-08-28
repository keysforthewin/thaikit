import { PhysicsAdapter } from './adapter.js';

/** No physics: colliders are still exposed for your own use. */
export class NullPhysics extends PhysicsAdapter {
  createStatic(shapes) { return { shapes }; }
  createDynamic(entry, transform) {
    const t = { position: [...transform.position], quaternion: [...transform.quaternion] };
    return { handle: null, entry, getTransform: () => t };
  }
}
