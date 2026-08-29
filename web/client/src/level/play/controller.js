import * as THREE from 'three';

/**
 * The character controller: position, velocity and the state machine, stepped
 * against a CollisionWorld.
 *
 * Pure -- it never touches the scene graph or React. `PlayMode.jsx` gathers the
 * input, calls `step`, and copies `eye()` onto the camera. Keeping it separate
 * is what makes the movement testable and what keeps the r3f frame callback
 * down to a few lines.
 *
 * The player's dimensions are the ones scripts/lib/colliders.mjs derives every
 * compound against (PLAYER_RADIUS 0.35, STEP_HEIGHT 0.3). That file is a Node
 * script the client cannot import, so the numbers are restated here; they must
 * stay in step, or a ledge the derivation certified as walkable is one the
 * player cannot climb.
 */

export const PLAYER_RADIUS = 0.35;
export const STEP_HEIGHT = 0.3;
export const STAND_HEIGHT = 1.8;
export const CROUCH_HEIGHT = 1.1;
/** Eyes a little below the crown, as a person's are. */
export const EYE_OFFSET = 0.15;

const WALK_SPEED = 4.5;
const SPRINT_SPEED = 7.5;
const CROUCH_SPEED = 2.0;
const FLY_SPEED = 12;
const FLY_SPRINT = 30;
/** Heavier than earth's, which is what an FPS wants: 9.8 makes a jump float. */
const GRAVITY = 22;
/** v = sqrt(2 g h); 1.1 m clears a waist-high wall and no more. */
const JUMP_SPEED = Math.sqrt(2 * GRAVITY * 1.1);
const TERMINAL_SPEED = 55;
/** Ground acceleration is near-instant; air control is deliberately weak. */
const GROUND_ACCEL = 60;
const AIR_ACCEL = 12;
const GROUND_FRICTION = 12;
/** How far below the feet a floor still counts as underfoot, so walking down a
 *  gentle ramp does not become a series of little falls. */
const GROUND_SNAP = 0.35;
/** A body has to be this close before it reads as a ladder you can grab. */
const LADDER_REACH = 0.25;
const LADDER_SPEED = 2.6;
/** One tap of jump on a ladder. Repeated taps stack up to LADDER_BOOST_MAX. */
const LADDER_BOOST = 2.4;
const LADDER_BOOST_MAX = 5.5;
/** Boost bleeds off in about a third of a second, so the rate follows the tapping. */
const LADDER_BOOST_DECAY = 7;
/** Never integrate more than this in one go, or a fast fall tunnels a thin floor. */
const MAX_SUBSTEP = 0.016;
const MAX_SUBSTEPS = 8;
/**
 * A tab-out hands back a dt of several seconds. Clamping it makes the world go
 * briefly slow-motion, which is the right failure: the alternative is the player
 * teleporting through the map on the frame the tab comes back.
 */
const MAX_DT = 1 / 20;
/** Still jumpable for this long after walking off an edge. */
const COYOTE = 0.12;
/** A jump pressed this long before landing still fires on touchdown. */
const JUMP_BUFFER = 0.15;
/** Below the world by this much and there is nothing left to fall onto. */
const VOID_DROP = 120;

/**
 * Where play mode drops the player in.
 *
 * A spawn entity if the level has one -- that is what it is for, and it carries
 * a facing. Otherwise the editor camera: you get to walk around whatever you
 * were just looking at, which is what "play" means from an authoring seat.
 *
 * @param doc     the level document
 * @param camera  the editor camera, or null
 * @returns { position:[x,y,z], yaw, from:'spawn'|'camera'|'origin' }
 */
export function resolveSpawn(doc, camera) {
  const spawn = doc?.spawns?.[0];
  if (spawn) {
    return {
      position: [...spawn.position],
      yaw: THREE.MathUtils.degToRad(spawn.yawDeg ?? 0),
      from: 'spawn',
    };
  }
  if (camera) {
    // The camera is at eye height already, so the FEET are a body below it.
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    return {
      position: [camera.position.x, camera.position.y - (STAND_HEIGHT - EYE_OFFSET), camera.position.z],
      yaw: Math.atan2(-dir.x, -dir.z),
      from: 'camera',
    };
  }
  return { position: [0, 0, 0], yaw: 0, from: 'origin' };
}

const _wish = new THREE.Vector3();
const _strafe = new THREE.Vector3();
const _flat = new THREE.Vector3();
const _delta = new THREE.Vector3();

export class Controller {
  /**
   * @param world  a CollisionWorld
   * @param start  { position:[x,y,z], yaw:number }
   */
  constructor(world, start = {}) {
    this.world = world;
    this.position = new THREE.Vector3().fromArray(start.position ?? [0, 0, 0]);
    this.velocity = new THREE.Vector3();
    this.yaw = start.yaw ?? 0;
    this.pitch = 0;
    this.height = STAND_HEIGHT;
    this.grounded = false;
    this.crouching = false;
    this.flying = false;
    this.onLadder = false;
    this.ladderId = null;
    this.ladderBoost = 0;
    this.fellOut = false;
    this.airTime = 0;
    this.jumpBuffer = 0;
    this.start = { position: this.position.clone(), yaw: this.yaw };
  }

  /** Back to where play mode began, upright and at rest. */
  respawn() {
    this.position.copy(this.start.position);
    this.yaw = this.start.yaw;
    this.velocity.set(0, 0, 0);
    this.onLadder = false;
    this.ladderId = null;
    this.fellOut = false;
    this.settle();
  }

  /** The camera position: the eyes, not the feet. */
  eye(out = new THREE.Vector3()) {
    return out.set(this.position.x, this.position.y + this.height - EYE_OFFSET, this.position.z);
  }

  /**
   * Put the player on the ground under `position`, so a spawn never starts
   * buried or hanging.
   *
   * The probe starts a STEP above the feet, not at the head: a spawn's y is a
   * floor height, and searching down from the crown finds the underside of a
   * low awning and stands the player on its roof.
   */
  settle() {
    const floor = this.world.floorUnder(this.position.x, this.position.y + STEP_HEIGHT, this.position.z, { reach: VOID_DROP, radius: PLAYER_RADIUS });
    if (floor != null) this.position.y = floor;
    // Then push out of anything the drop landed inside.
    const r = this.world.resolveCapsule(this.position, PLAYER_RADIUS, this.height);
    this.position.copy(r.position);
    this.start.position.copy(this.position);
  }

  /**
   * One frame.
   *
   * @param input { forward, right, up, jump, jumpPressed, sprint, crouch }
   *              forward/right/up are -1..1; `jump` is held, `jumpPressed` is
   *              the edge -- the ladder boost reads the edge, so holding space
   *              climbs at the steady rate and tapping it climbs faster.
   * @param dt    seconds
   */
  step(input, dt) {
    if (!Number.isFinite(dt) || dt <= 0) return;
    const clamped = Math.min(dt, MAX_DT);
    // A press is COUNTED, not flagged: at five taps a second on a thirty-hertz
    // frame two keydowns land in one step, and a boolean silently drops one --
    // which is exactly the input the ladder boost is listening for.
    const presses = input.jumpPresses ?? (input.jumpPressed ? 1 : 0);
    this.jumpBuffer = presses > 0 ? JUMP_BUFFER : Math.max(0, this.jumpBuffer - clamped);

    const before = this.position.clone();
    const n = Math.min(MAX_SUBSTEPS, Math.max(1, Math.ceil(clamped / MAX_SUBSTEP)));
    const h = clamped / n;
    for (let i = 0; i < n; i += 1) this.#substep(input, h, i === 0 ? presses : 0);

    // One non-finite number in the doc poisons the position for the rest of the
    // session, so it never gets to be written back.
    if (!Number.isFinite(this.position.x) || !Number.isFinite(this.position.y) || !Number.isFinite(this.position.z)) {
      this.position.copy(before);
      this.velocity.set(0, 0, 0);
    }
    if (this.position.y < this.world.bounds.min.y - VOID_DROP) {
      this.fellOut = true;
      this.respawn();
    }
  }

  #substep(input, dt, presses) {
    // The wish direction, in the plane the player is facing.
    const sin = Math.sin(this.yaw);
    const cos = Math.cos(this.yaw);
    _wish.set(
      input.right * cos - input.forward * sin,
      0,
      -input.right * sin - input.forward * cos,
    );
    if (_wish.lengthSq() > 1) _wish.normalize();
    // The strafe axis on its own. A ladder needs it separately: on rungs,
    // forward CLIMBS, and folding it into one vector walks you off the ladder
    // sideways while you think you are going up.
    _strafe.set(input.right * cos, 0, -input.right * sin);

    if (this.flying) { this.#flyStep(input, dt); return; }

    this.#applyCrouch(input.crouch);
    this.#tryLadder(input);

    if (this.onLadder) {
      this.#ladderStep(input, dt, presses);
      if (this.onLadder) return;
    }

    const speed = this.crouching ? CROUCH_SPEED : input.sprint ? SPRINT_SPEED : WALK_SPEED;
    const accel = this.grounded ? GROUND_ACCEL : AIR_ACCEL;

    // Horizontal: accelerate toward the wish velocity, with friction only on
    // the ground. Vertical is gravity's alone.
    _flat.set(this.velocity.x, 0, this.velocity.z);
    const target = _wish.clone().multiplyScalar(speed);
    _flat.lerp(target, Math.min(1, accel * dt / Math.max(speed, 1)));
    if (this.grounded && _wish.lengthSq() < 1e-6) {
      _flat.multiplyScalar(Math.max(0, 1 - GROUND_FRICTION * dt));
    }
    this.velocity.x = _flat.x;
    this.velocity.z = _flat.z;

    // Coyote time and the jump buffer between them are what make a jump feel
    // like it went off when you pressed it rather than one frame either side.
    this.airTime = this.grounded ? 0 : this.airTime + dt;
    if (this.jumpBuffer > 0 && this.airTime <= COYOTE) {
      this.velocity.y = JUMP_SPEED;
      this.grounded = false;
      this.airTime = COYOTE + 1;
      this.jumpBuffer = 0;
    } else {
      this.velocity.y = Math.max(-TERMINAL_SPEED, this.velocity.y - GRAVITY * dt);
    }

    _delta.copy(this.velocity).multiplyScalar(dt);
    this.#move(_delta);
    this.#groundCheck();
  }

  #flyStep(input, dt) {
    const speed = input.sprint ? FLY_SPRINT : FLY_SPEED;
    // Fly follows the LOOK direction, pitch included -- a noclip that only ever
    // travels horizontally cannot get you out of the hole you turned it on for.
    _flat.set(_wish.x, 0, _wish.z).multiplyScalar(Math.cos(this.pitch));
    _flat.y = Math.sin(this.pitch) * input.forward + (input.jump ? 1 : 0) - (input.crouch ? 1 : 0);
    if (_flat.lengthSq() > 0) _flat.normalize();
    this.velocity.copy(_flat).multiplyScalar(speed);
    this.position.addScaledVector(this.velocity, dt);
    this.grounded = false;
    this.onLadder = false;
    this.ladderId = null;
  }

  /** Crouch, and refuse to stand back up under something. */
  #applyCrouch(want) {
    if (want && !this.crouching) {
      this.crouching = true;
      this.height = CROUCH_HEIGHT;
      return;
    }
    if (!want && this.crouching) {
      const probe = this.world.resolveCapsule(this.position, PLAYER_RADIUS, STAND_HEIGHT);
      // Standing would push the player somewhere: there is a ceiling. Stay down.
      if (probe.position.distanceToSquared(this.position) > 1e-6) return;
      this.crouching = false;
      this.height = STAND_HEIGHT;
    }
  }

  #ladderStep(input, dt, presses) {
    if (presses > 0) {
      this.ladderBoost = Math.min(LADDER_BOOST_MAX, this.ladderBoost + LADDER_BOOST * presses);
    }
    this.ladderBoost = Math.max(0, this.ladderBoost - LADDER_BOOST_DECAY * dt);

    // Which way the climb is going: forward climbs, back descends. The boost
    // goes the same way, so tapping space while descending drops you faster.
    const dir = input.forward !== 0 ? Math.sign(input.forward) : (this.ladderBoost > 0 ? 1 : 0);
    // Forward climbs; only the strafe axis moves you along the rungs, so you can
    // shuffle to a landing without drifting off the face.
    this.velocity.set(_strafe.x * CROUCH_SPEED, dir * (LADDER_SPEED + this.ladderBoost), _strafe.z * CROUCH_SPEED);

    _delta.copy(this.velocity).multiplyScalar(dt);
    this.#move(_delta);

    const contact = this.world.resolveCapsule(this.position, PLAYER_RADIUS, this.height, { ladderTolerance: LADDER_REACH, ignore: this.ladderId });
    if (contact.ladder?.id !== this.ladderId) {
      // Off the top or stepped away: hand back to gravity with the climb's
      // upward momentum kept, which is what carries you onto the roof.
      this.onLadder = false;
      this.ladderId = null;
      this.ladderBoost = 0;
      this.velocity.set(0, Math.max(0, this.velocity.y * 0.6), 0);
      this.#groundCheck();
    }
  }

  /**
   * Move by `delta`, resolving collisions and stepping up small ledges.
   * Horizontal and vertical are moved separately, which is the cheapest way to
   * keep a wall from eating a fall and a floor from eating a strafe.
   */
  #move(delta) {
    const opts = this.onLadder ? { ignore: this.ladderId } : undefined;
    // Vertical first.
    if (delta.y !== 0) {
      this.position.y += delta.y;
      const r = this.world.resolveCapsule(this.position, PLAYER_RADIUS, this.height, opts);
      if (r.position.y !== this.position.y) {
        // Hit a floor going down, or a ceiling going up. Either way the vertical
        // velocity is spent.
        if ((delta.y < 0 && r.position.y > this.position.y) || (delta.y > 0 && r.position.y < this.position.y)) {
          this.velocity.y = 0;
        }
      }
      this.position.copy(r.position);
    }

    if (delta.x === 0 && delta.z === 0) return;

    const beforeX = this.position.x;
    const beforeZ = this.position.z;
    this.position.x += delta.x;
    this.position.z += delta.z;
    const r = this.world.resolveCapsule(this.position, PLAYER_RADIUS, this.height, opts);
    const blockedX = Math.abs(r.position.x - this.position.x);
    const blockedZ = Math.abs(r.position.z - this.position.z);
    this.position.copy(r.position);

    if (!this.grounded || (blockedX < 1e-4 && blockedZ < 1e-4)) return;

    // Blocked while walking: try the same move STEP_HEIGHT higher. If the raised
    // capsule is clear and there is something to stand on, it was a step and not
    // a wall. This is the whole reason a kerb is walkable.
    const stepped = this.position.clone();
    stepped.set(beforeX + delta.x, this.position.y + STEP_HEIGHT, beforeZ + delta.z);
    const up = this.world.resolveCapsule(stepped, PLAYER_RADIUS, this.height);
    if (up.position.distanceToSquared(stepped) > 1e-4) return;
    const floor = this.world.floorUnder(stepped.x, stepped.y, stepped.z, { reach: STEP_HEIGHT + 0.05, radius: PLAYER_RADIUS * 0.8 });
    if (floor == null) return;
    this.position.set(stepped.x, floor, stepped.z);
  }

  /** Ground state, and the snap that keeps a walk down a ramp on the ramp. */
  #groundCheck() {
    const wasGrounded = this.grounded;
    this.grounded = false;
    if (this.velocity.y > 0.01) return;

    const floor = this.world.floorUnder(
      this.position.x,
      this.position.y + 0.05,
      this.position.z,
      { reach: wasGrounded ? GROUND_SNAP : 0.08, radius: PLAYER_RADIUS * 0.9 },
    );
    if (floor == null) return;
    const drop = this.position.y - floor;
    if (drop < -0.01 || drop > (wasGrounded ? GROUND_SNAP : 0.1)) return;
    this.position.y = floor;
    this.velocity.y = 0;
    this.grounded = true;
  }

  /** Grab a ladder if one is within reach and the player is pushing at it. */
  #tryLadder(input) {
    if (this.flying || this.onLadder) return;
    if (!this.world.hasLadders) return;
    const contact = this.world.resolveCapsule(this.position, PLAYER_RADIUS, this.height, { ladderTolerance: LADDER_REACH });
    if (!contact.ladder) return;
    // Pushing into it, or already climbing off the ground.
    if (input.forward === 0 && input.right === 0 && this.grounded) return;
    this.onLadder = true;
    this.ladderId = contact.ladder.id;
    this.ladderBoost = 0;
    this.velocity.set(0, 0, 0);
  }

  toggleFly() {
    this.flying = !this.flying;
    this.onLadder = false;
    this.ladderId = null;
    this.velocity.set(0, 0, 0);
    return this.flying;
  }
}
