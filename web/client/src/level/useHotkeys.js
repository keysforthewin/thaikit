import { useEffect } from 'react';

const inField = () => {
  const el = document.activeElement;
  return el?.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(el?.tagName);
};

/**
 * The editor's keyboard. `disabled` is what play mode sets: W, A, S, C and F are
 * movement there, and firing the gizmo and view toggles under the player's feet
 * would be a fine way to lose a level.
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
      else if (!ctrl && (e.key === 'Delete' || e.key === 'Backspace')) handlers.remove?.();
      else if (!ctrl && k === 'w') handlers.tool?.('translate');
      else if (!ctrl && k === 'e') handlers.tool?.('rotate');
      else if (!ctrl && k === 'r') handlers.tool?.('scale');
      else if (!ctrl && k === 'q') handlers.space?.();
      else if (!ctrl && k === 'g') handlers.toggle?.('grid');
      else if (!ctrl && k === 'c') handlers.toggle?.('cells');
      else if (!ctrl && k === 'x') handlers.toggle?.('colliders');
      else if (!ctrl && k === 'a' && !e.shiftKey) handlers.add?.();
      else if (!ctrl && k === 's' && e.shiftKey) handlers.surfaceSnap?.();
      else if (!ctrl && k === 'f') handlers.frame?.();
      else if (e.key === 'Escape') handlers.escape?.();
      else handled = false;
      if (handled) e.preventDefault();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [handlers, disabled]);
}
