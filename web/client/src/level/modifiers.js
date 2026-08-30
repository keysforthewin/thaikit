/**
 * The live state of the modifier keys, readable from a callback that was never
 * handed a DOM event.
 *
 * The gizmo's `mouseDown` / `objectChange` events are three's own -- they carry
 * a mode and nothing else -- so the only way to know whether Shift was down
 * when a drag began is to have been watching. `pointerdown` and `pointermove`
 * are watched as well as the key events because a keydown that happened while
 * another window had focus never arrives, and a pointer event carries the true
 * state of both keys with it.
 */
export const mods = { shift: false, ctrl: false };

const sync = (e) => {
  mods.shift = e.shiftKey === true;
  mods.ctrl = e.ctrlKey === true || e.metaKey === true;
};
const clear = () => { mods.shift = false; mods.ctrl = false; };

if (typeof window !== 'undefined') {
  for (const type of ['keydown', 'keyup', 'pointerdown', 'pointermove', 'pointerup']) {
    window.addEventListener(type, sync, true);
  }
  window.addEventListener('blur', clear);
}
