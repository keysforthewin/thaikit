import { useEffect } from 'react';

const inField = () => {
  const el = document.activeElement;
  return el?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el?.tagName);
};

/**
 * The editor's keyboard. `disabled` is what play mode sets: W, A, S, C and F are
 * movement there, and firing the gizmo and view toggles under the player's feet
 * would be a fine way to lose a level.
 *
 * FOUR bindings moved when the viewport became a flythrough, because the flycam
 * is live the whole time the editor is -- it is not gated on holding a mouse
 * button -- so every key it uses had to be given up here:
 *
 *   translate   W       -> 1   (Q is the letter alias, beside E and R for rotate and scale)
 *   gizmo space Q       -> T   (Q went to translate so Q/E/R sit together)
 *   add object  A       -> N
 *   cells       C       -> B
 *   surfaceSnap Shift+S -> V
 *
 * Shift+S went for a subtler reason than the other three: S is "fly backwards"
 * and Shift is the boost, so Shift+S is a shortcut you now fire by flying
 * backwards quickly. A modifier that is also a movement key cannot carry an
 * editor binding, which is why none of the replacements use Shift.
 */
export function useHotkeys(handlers, disabled = false) {
  useEffect(() => {
    if (disabled) return undefined;
    const onKey = (e) => {
      if (inField()) return;
      const ctrl = e.ctrlKey || e.metaKey;
      const k = e.key.toLowerCase();
      let handled = true;
      if (ctrl && k === 'z' && e.shiftKey) handlers.redo?.();
      else if (ctrl && k === 'z') handlers.undo?.();
      else if (ctrl && k === 'y') handlers.redo?.();
      else if (ctrl && k === 's') handlers.save?.();
      else if (ctrl && k === 'd') handlers.duplicate?.();
      else if (ctrl && k === 'a') handlers.selectAll?.();
      else if (ctrl && k === 'g' && e.shiftKey) handlers.unjoin?.();
      else if (ctrl && k === 'g') handlers.join?.();
      else if (!ctrl && (e.key === 'Delete' || e.key === 'Backspace')) handlers.remove?.();
      else if (!ctrl && (k === '1' || k === 'q')) handlers.tool?.('translate');
      else if (!ctrl && (k === '2' || k === 'e')) handlers.tool?.('rotate');
      else if (!ctrl && (k === '3' || k === 'r')) handlers.tool?.('scale');
      else if (!ctrl && k === 't') handlers.space?.();
      else if (!ctrl && k === 'g') handlers.toggle?.('grid');
      else if (!ctrl && k === 'b') handlers.toggle?.('cells');
      else if (!ctrl && k === 'x') handlers.toggle?.('colliders');
      else if (!ctrl && k === 'n') handlers.add?.();
      else if (!ctrl && k === 'v') handlers.surfaceSnap?.();
      else if (!ctrl && k === 'f') handlers.frame?.();
      else if (e.key === 'Escape') handlers.escape?.();
      else handled = false;
      if (handled) e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlers, disabled]);
}
