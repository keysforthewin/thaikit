import { useEffect } from 'react';

// Escape is bound on window in the CAPTURE phase, so two open modals both see
// the same keydown and stopPropagation cannot separate them -- capture
// listeners on one target fire in registration order, which is outermost
// first. A modal that opens a child therefore passes disableEscape while the
// child is up, so Esc closes only the top one.
export function Modal({ title, onClose, children, footer, width, disableEscape = false }) {
  useEffect(() => {
    if (disableEscape) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); onClose?.(); } };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose, disableEscape]);
  return (
    <div className="modal-backdrop" onMouseDown={onClose}>
      <div className="modal" role="dialog" aria-label={title} style={width ? { width } : undefined} onMouseDown={(e) => e.stopPropagation()}>
        <header>
          <strong>{title}</strong>
          <span className="grow" />
          <button onClick={onClose} title="close — Esc">✕</button>
        </header>
        <div className="body">{children}</div>
        {footer && <footer>{footer}</footer>}
      </div>
    </div>
  );
}
