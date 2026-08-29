import { useEffect, useRef } from 'react';

/**
 * Keyboard and mouse for play mode, as a snapshot the controller reads once a
 * frame.
 *
 * It listens on the window rather than the canvas because pointer lock takes
 * the pointer off the canvas entirely, and it counts jump PRESSES rather than
 * flagging them: at five taps a second on a slow frame two keydowns arrive in
 * one step, and the ladder boost is listening for exactly that.
 *
 * `keydown` autorepeat is filtered with `e.repeat`, or holding space would read
 * as thirty taps a second and climb a ladder like a rocket.
 */
const KEYS = {
  KeyW: 'forward', ArrowUp: 'forward',
  KeyS: 'back', ArrowDown: 'back',
  KeyA: 'left', ArrowLeft: 'left',
  KeyD: 'right', ArrowRight: 'right',
};

export function usePlayInput({ active, onToggleView, onToggleFly, onExit, sensitivity = 0.0022 }) {
  const state = useRef({
    held: new Set(),
    forward: 0,
    right: 0,
    jump: false,
    jumpPresses: 0,
    sprint: false,
    crouch: false,
    lookX: 0,
    lookY: 0,
  });

  useEffect(() => {
    if (!active) return undefined;
    const s = state.current;

    const down = (e) => {
      // Releasing pointer lock is the usual way out, and the browser eats that
      // Escape before the page sees it. This is the other half: when there is no
      // lock to release -- it was refused, or the user tabbed away -- Escape is
      // the only key left that can get them back to the editor.
      if (e.code === 'Escape') { onExit?.(); return; }
      if (e.code === 'KeyC') { if (!e.repeat) onToggleView?.(); e.preventDefault(); return; }
      if (e.code === 'KeyF') { if (!e.repeat) onToggleFly?.(); e.preventDefault(); return; }
      if (e.code === 'Space') {
        if (!e.repeat) s.jumpPresses += 1;
        s.jump = true;
        e.preventDefault();
        return;
      }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { s.sprint = true; return; }
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') { s.crouch = true; e.preventDefault(); return; }
      const k = KEYS[e.code];
      if (k) { s.held.add(k); e.preventDefault(); }
    };

    const up = (e) => {
      if (e.code === 'Space') { s.jump = false; return; }
      if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') { s.sprint = false; return; }
      if (e.code === 'ControlLeft' || e.code === 'ControlRight') { s.crouch = false; return; }
      const k = KEYS[e.code];
      if (k) s.held.delete(k);
    };

    const move = (e) => {
      if (!document.pointerLockElement) return;
      s.lookX += e.movementX * sensitivity;
      s.lookY += e.movementY * sensitivity;
    };

    // A window that loses focus mid-sprint must not keep sprinting.
    const clear = () => { s.held.clear(); s.jump = false; s.sprint = false; s.crouch = false; };

    window.addEventListener('keydown', down);
    window.addEventListener('keyup', up);
    window.addEventListener('mousemove', move);
    window.addEventListener('blur', clear);
    return () => {
      window.removeEventListener('keydown', down);
      window.removeEventListener('keyup', up);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('blur', clear);
      clear();
    };
  }, [active, onToggleView, onToggleFly, onExit, sensitivity]);

  /**
   * The snapshot for one frame. Edge counters and the accumulated look delta are
   * CONSUMED here -- reading twice in a frame would double-count them.
   */
  const consume = () => {
    const s = state.current;
    const snapshot = {
      forward: (s.held.has('forward') ? 1 : 0) - (s.held.has('back') ? 1 : 0),
      right: (s.held.has('right') ? 1 : 0) - (s.held.has('left') ? 1 : 0),
      jump: s.jump,
      jumpPresses: s.jumpPresses,
      jumpPressed: s.jumpPresses > 0,
      sprint: s.sprint,
      crouch: s.crouch,
      lookX: s.lookX,
      lookY: s.lookY,
    };
    s.jumpPresses = 0;
    s.lookX = 0;
    s.lookY = 0;
    return snapshot;
  };

  return consume;
}
