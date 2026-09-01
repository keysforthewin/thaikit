import { useCallback, useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

import { useLevel } from './store.js';

/**
 * First-person flythrough navigation for the editor viewport.
 *
 * This REPLACES OrbitControls rather than sitting beside it. Orbit and a flycam
 * cannot share a camera: drei drives OrbitControls from a `useFrame(..., -1)`
 * that calls `update()` every frame while it is enabled, and `update()` puts the
 * camera back on a sphere around `target` -- which nothing in this editor has
 * ever set, so it is permanently the world origin. A flycam and that loop would
 * spend every frame undoing each other.
 *
 * Hold RIGHT mouse to look; W/A/S/D to move on the camera's own axes; Space and
 * C for world up and down. Movement is ALWAYS live, not gated on the look button
 * -- which is why `useHotkeys` had to give up W, A, C and Shift+S.
 */

/** Metres per second on the ground, and the Shift multiplier. */
const SPEED = 12;
const BOOST = 3.5;
/** Radians per pixel of pointer movement. Matches play mode's own sensitivity. */
const LOOK = 0.0022;
/** Just under a right angle: straight up has no yaw, and the camera flips. */
const MAX_PITCH = THREE.MathUtils.degToRad(89);
/** Metres per wheel notch, scaled by the same boost. */
const DOLLY = 1.4;

const MOVE = {
  KeyW: 'forward', KeyS: 'back', KeyA: 'left', KeyD: 'right',
  ArrowUp: 'forward', ArrowDown: 'back', ArrowLeft: 'left', ArrowRight: 'right',
  Space: 'up', KeyC: 'down',
};

/**
 * Typing in a panel must not fly the camera. Same test `useHotkeys` uses, and it
 * has to stay the same test -- two different answers to "is the user typing" is
 * how a level ends up moving while somebody renames it.
 */
const inField = () => {
  const el = document.activeElement;
  return el?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el?.tagName);
};

export function FlyControls({ enabled = true }) {
  const camera = useThree((s) => s.camera);
  const gl = useThree((s) => s.gl);
  const set = useThree((s) => s.set);
  const get = useThree((s) => s.get);

  const held = useRef(new Set());
  const boost = useRef(false);
  const look = useRef({ x: 0, y: 0 });
  const dolly = useRef(0);
  const looking = useRef(null);
  // Yaw and pitch are OURS, not read back from the camera every frame. Deriving
  // them from the quaternion each frame accumulates the euler conversion's own
  // error and lets roll creep in; keeping them here means the horizon stays
  // level however long you fly.
  //
  // But they cannot be the ONLY truth, because other things move this camera --
  // play mode saves and restores it around a session, and framing a selection
  // would too. `written` is the last orientation WE set, so a camera whose
  // quaternion no longer matches it has been moved by somebody else and is
  // re-adopted. Without that, the first mouse movement after leaving play mode
  // snapped the view back by however far the player had turned.
  const angles = useRef({ yaw: 0, pitch: 0, synced: false });
  const written = useRef(new THREE.Quaternion());

  /**
   * Published as the default controls so drei's TransformControls can suspend
   * navigation while a gizmo handle is being dragged -- it does that by setting
   * `enabled` on whatever is in `state.controls`, and with nothing there the
   * camera would fly out from under the object being moved.
   */
  const controls = useMemo(() => ({ enabled: true }), []);
  useEffect(() => {
    const previous = get().controls;
    set({ controls });
    return () => set({ controls: previous });
  }, [controls, get, set]);

  // Adopt the camera's current orientation once, so enabling the flycam (or
  // coming back from play mode) never snaps the view somewhere else.
  const adopt = useCallback(() => {
    const e = new THREE.Euler().setFromQuaternion(camera.quaternion, 'YXZ');
    angles.current = { yaw: e.y, pitch: e.x, synced: true };
    written.current.copy(camera.quaternion);
  }, [camera]);

  useEffect(() => {
    if (!enabled) { angles.current.synced = false; return; }
    adopt();
  }, [enabled, adopt]);

  useEffect(() => {
    if (!enabled) return undefined;
    const canvas = gl.domElement;

    const clear = () => { held.current.clear(); boost.current = false; looking.current = null; };

    const onKeyDown = (e) => {
      if (e.ctrlKey || e.metaKey || e.altKey) return;
      if (inField()) return;
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { boost.current = true; return; }
      const dir = MOVE[e.code];
      if (!dir) return;
      held.current.add(dir);
      // Space scrolls the page and activates a focused button; the arrows scroll
      // too. Neither is wanted from a viewport that is flying.
      e.preventDefault();
    };
    const onKeyUp = (e) => {
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { boost.current = false; return; }
      const dir = MOVE[e.code];
      if (dir) held.current.delete(dir);
    };

    const onPointerDown = (e) => {
      if (e.button !== 2) return;
      // OUR flag is what says a look is in progress -- not the pointer capture.
      // Capture is a convenience so a look that runs off the canvas keeps
      // turning instead of stopping dead at the panel edge, and it can refuse
      // (it throws on a pointer the browser no longer considers active); using
      // it as the state would make a failed capture look like broken mouselook.
      looking.current = e.pointerId;
      try { canvas.setPointerCapture(e.pointerId); } catch { /* look still works */ }
      e.preventDefault();
    };
    const onPointerMove = (e) => {
      if (looking.current === null) return;
      look.current.x += e.movementX;
      look.current.y += e.movementY;
    };
    const onPointerUp = (e) => {
      if (looking.current === null) return;
      if (e.button !== undefined && e.button !== 2 && e.type === 'pointerup') return;
      try { canvas.releasePointerCapture(looking.current); } catch { /* never captured */ }
      looking.current = null;
    };

    // OrbitControls used to swallow this. With it gone the browser menu would
    // open on every look, on top of the camera still turning underneath it.
    const onContextMenu = (e) => e.preventDefault();

    const onWheel = (e) => { dolly.current -= Math.sign(e.deltaY); e.preventDefault(); };

    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('keyup', onKeyUp);
    window.addEventListener('blur', clear);
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);
    // Released over a panel, or outside the window entirely, still ends the look.
    window.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('contextmenu', onContextMenu);
    canvas.addEventListener('wheel', onWheel, { passive: false });
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('keyup', onKeyUp);
      window.removeEventListener('blur', clear);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      window.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('contextmenu', onContextMenu);
      canvas.removeEventListener('wheel', onWheel);
      clear();
      look.current = { x: 0, y: 0 };
      dolly.current = 0;
    };
  }, [enabled, gl]);

  const forward = useMemo(() => new THREE.Vector3(), []);
  const right = useMemo(() => new THREE.Vector3(), []);
  const step = useMemo(() => new THREE.Vector3(), []);
  const euler = useMemo(() => new THREE.Euler(), []);

  useFrame((_, delta) => {
    if (!enabled || !controls.enabled) return;
    // A gizmo drag moves the object by where the pointer ray falls, so flying
    // mid-drag drags the object with the camera.
    if (useLevel.getState().dragging) return;
    if (!angles.current.synced) return;

    // Somebody else turned the camera since we last wrote it -- take their word
    // for it rather than yanking the view back to what we remembered.
    if (!camera.quaternion.equals(written.current)) adopt();

    const a = angles.current;
    if (look.current.x || look.current.y) {
      a.yaw -= look.current.x * LOOK;
      a.pitch = THREE.MathUtils.clamp(a.pitch - look.current.y * LOOK, -MAX_PITCH, MAX_PITCH);
      look.current = { x: 0, y: 0 };
      camera.quaternion.setFromEuler(euler.set(a.pitch, a.yaw, 0, 'YXZ'));
      written.current.copy(camera.quaternion);
    }

    const h = held.current;
    const fb = (h.has('forward') ? 1 : 0) - (h.has('back') ? 1 : 0);
    const lr = (h.has('right') ? 1 : 0) - (h.has('left') ? 1 : 0);
    const ud = (h.has('up') ? 1 : 0) - (h.has('down') ? 1 : 0);
    const speed = SPEED * (boost.current ? BOOST : 1);

    if (fb || lr || ud || dolly.current) {
      camera.getWorldDirection(forward);
      right.crossVectors(forward, camera.up).normalize();
      step.set(0, 0, 0);
      // Forward follows the camera's full direction including pitch, so looking
      // down and holding W descends -- which is what a flythrough means, and the
      // reason this is not a walk.
      step.addScaledVector(forward, fb * speed * delta);
      step.addScaledVector(right, lr * speed * delta);
      // Up and down are WORLD axes, so they stay predictable at any pitch.
      step.y += ud * speed * delta;
      if (dolly.current) {
        step.addScaledVector(forward, dolly.current * DOLLY * (boost.current ? BOOST : 1));
        dolly.current = 0;
      }
      camera.position.add(step);
    }
  });

  return null;
}
