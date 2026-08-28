import { PhysicsAdapter } from './adapter.js';

/**
 * Rapier (@dimforge/rapier3d-compat), which runs in the browser AND in Node --
 * the multiplayer server builds the same colliders from the same manifest.
 *
 *   import RAPIER from '@dimforge/rapier3d-compat';
 *   await RAPIER.init();
 *   const physics = new RapierPhysics(RAPIER, { gravity: [0, -9.81, 0] });
 */
export class RapierPhysics extends PhysicsAdapter {
  constructor(RAPIER, { gravity = [0, -9.81, 0], world = null } = {}) {
    super();
    this.RAPIER = RAPIER;
    this.world = world ?? new RAPIER.World({ x: gravity[0], y: gravity[1], z: gravity[2] });
    this.bodies = [];
  }

  #desc(shape) {
    const { RAPIER } = this;
    const [hx, hy, hz] = shape.halfExtents;
    let desc;
    if (shape.type === 'box') desc = RAPIER.ColliderDesc.cuboid(hx, hy, hz);
    else if (shape.type === 'sphere') desc = RAPIER.ColliderDesc.ball(Math.max(hx, hz));
    else if (shape.type === 'capsule') desc = RAPIER.ColliderDesc.capsule(Math.max(0, hy - Math.max(hx, hz)), Math.max(hx, hz));
    else desc = RAPIER.ColliderDesc.cylinder(hy, Math.max(hx, hz)); // (halfHeight, radius)
    desc.setTranslation(shape.position[0], shape.position[1], shape.position[2]);
    const q = shape.quaternion ?? [0, 0, 0, 1];
    desc.setRotation({ x: q[0], y: q[1], z: q[2], w: q[3] });
    if (shape.isTrigger) desc.setSensor(true);
    return desc;
  }

  createStatic(shapes) {
    const body = this.world.createRigidBody(this.RAPIER.RigidBodyDesc.fixed());
    const colliders = shapes.map((s) => this.world.createCollider(this.#desc(s), body));
    this.bodies.push(body);
    return { body, colliders };
  }

  createDynamic(entry, transform) {
    const { RAPIER } = this;
    const [x, y, z] = transform.position;
    const [qx, qy, qz, qw] = transform.quaternion;
    const desc = (entry.physics?.enabled ? RAPIER.RigidBodyDesc.dynamic() : RAPIER.RigidBodyDesc.fixed())
      .setTranslation(x, y, z)
      .setRotation({ x: qx, y: qy, z: qz, w: qw });
    const body = this.world.createRigidBody(desc);
    const colliders = (entry.colliders ?? []).map((s) => this.world.createCollider(this.#desc(s), body));
    if (entry.physics?.enabled && entry.physics.massKg) body.setAdditionalMass(entry.physics.massKg, true);
    this.bodies.push(body);
    return {
      handle: body,
      colliders,
      getTransform() {
        const t = body.translation();
        const r = body.rotation();
        return { position: [t.x, t.y, t.z], quaternion: [r.x, r.y, r.z, r.w] };
      },
    };
  }

  /** Make freshly created colliders visible to queries without simulating a step. */
  sync() {
    if (typeof this.world.updateSceneQueries === 'function') this.world.updateSceneQueries();
    else { const t = this.world.timestep; this.world.timestep = 1e-6; this.world.step(); this.world.timestep = t; }
  }

  step(dt) {
    if (dt) this.world.timestep = dt;
    this.world.step();
  }

  dispose() {
    for (const b of this.bodies) this.world.removeRigidBody(b);
    this.bodies = [];
  }
}
