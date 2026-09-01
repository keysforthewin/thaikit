import { useMemo, useState } from 'react';

/**
 * The multi-select behind the browse bar's "categories" and "tags" buttons.
 *
 * One component serves both, because a facet is a facet: a name, how many props
 * carry it, and whether it is picked. The counts come from /api/meta, which
 * counts over the WHOLE registry rather than the current result -- a count that
 * moved as you ticked boxes would say nothing about what ticking the next one
 * buys you.
 *
 * Selection is applied live to the grid behind the dialog, so "done" is a way to
 * get the dialog out of the way and never a commit; there is nothing to cancel.
 */
export function FacetDialog({ title, counts, selected, onChange, onClose }) {
  const [needle, setNeedle] = useState('');

  // Busiest first: a facet list sorted alphabetically buries the handful of
  // values that actually partition a hundred-prop kit among the singletons.
  const rows = useMemo(() => {
    const all = Object.entries(counts ?? {}).sort(
      (a, b) => b[1] - a[1] || a[0].localeCompare(b[0]),
    );
    const n = needle.trim().toLowerCase();
    return n ? all.filter(([name]) => name.toLowerCase().includes(n)) : all;
  }, [counts, needle]);

  const picked = new Set(selected);
  const toggle = (name) => {
    const next = new Set(picked);
    if (next.has(name)) next.delete(name);
    else next.add(name);
    onChange([...next]);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <header>
          <strong>{title}</strong>
          <span className="muted">{picked.size} selected</span>
          <span className="grow" />
          <input
            placeholder="filter…"
            value={needle}
            onChange={(e) => setNeedle(e.target.value)}
            style={{ width: 180 }}
          />
        </header>
        <div className="body">
          {rows.length === 0 ? (
            <p className="muted">nothing matches “{needle}”.</p>
          ) : (
            <div className="facet-list">
              {rows.map(([name, count]) => (
                <label key={name} className={`facet ${picked.has(name) ? 'on' : ''}`}>
                  <input
                    type="checkbox"
                    checked={picked.has(name)}
                    onChange={() => toggle(name)}
                  />
                  <span className="facet-name">{name}</span>
                  <span className="muted mono">{count}</span>
                </label>
              ))}
            </div>
          )}
        </div>
        <footer>
          <button type="button" onClick={() => onChange([])} disabled={picked.size === 0}>
            clear
          </button>
          <button
            type="button"
            onClick={() => onChange(rows.map(([name]) => name))}
            disabled={rows.length === 0}
          >
            {/* Selects what is VISIBLE, so the search box doubles as a bulk pick. */}
            select {needle.trim() ? 'shown' : 'all'}
          </button>
          <button type="button" className="primary" onClick={onClose}>done</button>
        </footer>
      </div>
    </div>
  );
}
