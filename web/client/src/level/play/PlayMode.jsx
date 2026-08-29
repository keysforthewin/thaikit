import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useLevel } from '../store.js';
import { buildCollisionWorld } from './collisionWorld.js';
import { Controller, resolveSpawn, PLAYER_RADIUS, STAND_HEIGHT } from './controller.js';
import { usePlayInput } from './usePlayInput.js';

/**
 * How far behind the eyes the third-person camera sits, and how far above.
 *
 * At 3.4 m and barely any lift the capsule filled half the frame and hid
 * everything the view exists to show. Five metres and most of a body's lift puts
 * it in the lower third with the level behind it, which is what a third-person
 * camera is for.
 */
const BOOM = 5;
const BOOM_LIFT = 0.9;
/** Steps the boom is swept in, so it stops at a wall instead of going through it. */
const BOOM_STEPS = 8;
const PITCH_LIMIT = THREE.MathUtils.degToRad(89);

/**
 * Play mode, inside the Canvas.
 *
 * The scene is exactly the scene the editor was already drawing -- the same
 * props, ground, sky and lights. All this does is take the camera off
 * OrbitControls and put it in a character's head, so what you walk through is
 * what you were just editing.
 *
 * The collision world is a SNAPSHOT taken when play mode starts, rebuilt when
 * the document changes (an undo, say). Rebuilding is cheap -- it reads the
 * catalogue's collider compounds, not the built meshes -- and it means play mode
 * is usable before the models have finished loading.
 */
export function PlayMode() {
  const doc = useLevel((s) => s.doc);
  const catalogue = useLevel((s) => s.catalogue);
  const playView = useLevel((s) => s.playView);
  const setPlay = useLevel((s) => s.setPlay);
  const togglePlayView = useLevel((s) => s.togglePlayView);
  const setStatus = useLevel((s) => s.setStatus);
  const { camera, gl } = useThree();

  const world = useMemo(() => buildCollisionWorld(doc, catalogue), [doc, catalogue]);
  const controller = useRef(null);
  const capsuleRef = useRef(null);

  // One controller for the whole session. A doc change re-points it at the new
  // world and leaves the player standing where they were.
  if (!controller.current) {
    const start = resolveSpawn(doc, camera);
    controller.current = new Controller(world, start);
    controller.current.settle();
  }
  useEffect(() => { controller.current.world = world; }, [world]);
  // The same dev handle as window.__r3f and window.__level: a walkthrough that
  // misbehaves is otherwise impossible to inspect from the console.
  useEffect(() => {
    if (!import.meta.env.DEV) return undefined;
    window.__play = controller.current;
    return () => { delete window.__play; };
  }, []);

  // Tracks `world`, so the count stays honest after an undo adds or removes
  // props while the walkthrough is running.
  useEffect(() => {
    const c = controller.current;
    setStatus(
      `play — ${world.bodies.length} collider${world.bodies.length === 1 ? '' : 's'}` +
      (world.bodies.length ? '' : ' — nothing to stand on, flying'),
    );
    // A level with nothing solid in it would drop the player forever, so start
    // them flying instead. The alternative just reads as a crash.
    if (!world.bodies.length) c.flying = true;
    return () => setStatus(null);
  }, [world, setStatus]);

  const toggleFly = () => {
    const flying = controller.current.toggleFly();
    setStatus(flying ? 'fly — no collision' : 'walking');
  };

  const consume = usePlayInput({
    active: true,
    onToggleView: togglePlayView,
    onToggleFly: toggleFly,
    onExit: () => setPlay(false),
  });

  // Pointer lock is both the mouselook and the exit: the browser releases it on
  // Escape and never delivers that keydown, so the release IS the signal.
  //
  // `unadjustedMovement` is what makes the turn SMOOTH. Without it the browser
  // hands us `movementX` after the OS pointer pipeline -- Windows' "enhance
  // pointer precision" ballistics, which are superlinear -- so a slow drag turns
  // gently and a slightly faster one turns several times as far. Panning round a
  // level at a steady hand speed sits right on the knee of that curve, and the
  // view lurches ahead every time the hand crosses it. Raw counts are linear, so
  // yaw is exactly proportional to how far the mouse moved. Chrome rejects the
  // option where the platform cannot deliver raw input; the plain lock is the
  // fallback, and it is the pre-existing behaviour.
  useEffect(() => {
    const el = gl.domElement;
    const request = () => {
      if (document.pointerLockElement) return;
      const p = el.requestPointerLock?.({ unadjustedMovement: true });
      // A rejected promise here is "this platform has no raw input", not a
      // failure -- and an unhandled rejection in the console reads as one.
      p?.catch?.(() => { if (!document.pointerLockElement) el.requestPointerLock?.(); });
    };
    request();
    el.addEventListener('mousedown', request);
    let armed = false;
    const onChange = () => {
      if (document.pointerLockElement === el) { armed = true; return; }
      if (armed) setPlay(false);
    };
    document.addEventListener('pointerlockchange', onChange);
    return () => {
      el.removeEventListener('mousedown', request);
      document.removeEventListener('pointerlockchange', onChange);
      if (document.pointerLockElement === el) document.exitPointerLock?.();
    };
  }, [gl, setPlay]);

  // Remember the editor's camera so leaving play mode puts it back where it was.
  useEffect(() => {
    const saved = { position: camera.position.clone(), quaternion: camera.quaternion.clone() };
    return () => {
      camera.position.copy(saved.position);
      camera.quaternion.copy(saved.quaternion);
    };
  }, [camera]);

  const eye = useMemo(() => new THREE.Vector3(), []);
  const look = useMemo(() => new THREE.Vector3(), []);

  useFrame((_, delta) => {
    const c = controller.current;
    const input = consume();

    // Nothing moves while the pointer is unlocked: the user is reading a dialog,
    // not sprinting into a wall.
    if (!document.pointerLockElement) return;

    c.yaw -= input.lookX;
    c.pitch = THREE.MathUtils.clamp(c.pitch - input.lookY, -PITCH_LIMIT, PITCH_LIMIT);
    c.step(input, delta);

    c.eye(eye);
    look.set(
      -Math.sin(c.yaw) * Math.cos(c.pitch),
      Math.sin(c.pitch),
      -Math.cos(c.yaw) * Math.cos(c.pitch),
    );

    if (playView === 'third') {
      // Sweep the boom rather than casting it: step back until the camera would
      // be inside something, and stop one step short. A camera that clips a wall
      // for one frame is invisible; one that costs milliseconds is not.
      let back = BOOM;
      for (let i = 1; i <= BOOM_STEPS; i += 1) {
        const d = (BOOM * i) / BOOM_STEPS;
        const solid = c.world.pointSolid(
          eye.x - look.x * d,
          eye.y - look.y * d + BOOM_LIFT,
          eye.z - look.z * d,
          0.2,
        );
        if (solid) { back = (BOOM * (i - 1)) / BOOM_STEPS; break; }
      }
      camera.position.set(eye.x - look.x * back, eye.y - look.y * back + BOOM_LIFT, eye.z - look.z * back);
    } else {
      camera.position.copy(eye);
    }
    camera.lookAt(eye.x + look.x, eye.y + look.y, eye.z + look.z);

    const body = capsuleRef.current;
    if (body) {
      // Drawn from the capsule's CENTRE; the controller's position is its feet.
      body.position.set(c.position.x, c.position.y + c.height / 2, c.position.z);
      body.scale.y = c.height / STAND_HEIGHT;
      body.rotation.y = c.yaw;
    }
  });

  return (
    <mesh ref={capsuleRef} visible={playView === 'third'} castShadow>
      <capsuleGeometry args={[PLAYER_RADIUS, STAND_HEIGHT - PLAYER_RADIUS * 2, 6, 12]} />
      <meshStandardMaterial color="#7ee787" roughness={0.6} metalness={0} />
    </mesh>
  );
}
