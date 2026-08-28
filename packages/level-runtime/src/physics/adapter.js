/**
 * What the runtime asks of a physics engine. Four calls, so the engine is a
 * choice a game makes, not one this package makes for it.
 *
 * Shapes are `{ type: 'box'|'cylinder'|'sphere'|'capsule', position, quaternion, halfExtents, isTrigger }`
 * in metres; `halfExtents` is [hx, hy, hz] for a box and [radius, halfHeight, radius] for the round ones.
 */
export class PhysicsAdapter {
  /** All static shapes of the level, world space. Returns an opaque handle. */
  createStatic(_shapes) { throw new Error('not implemented'); }
  /** One dynamic body with local shapes at a world transform. Returns { handle, getTransform() }. */
  createDynamic(_entry, _transform) { throw new Error('not implemented'); }
  step(_dt) {}
  dispose() {}
}
