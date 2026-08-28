import { useEffect } from 'react';

export function Modal({ title, onClose, children, footer, width }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') { e.stopPropagation(); onClose?.(); } };
    window.addEventListener('keydown', onKey, true);
    return () => window.removeEventListener('keydown', onKey, true);
  }, [onClose]);
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
