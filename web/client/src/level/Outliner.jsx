import { useMemo } from 'react';

import { useLevel } from './store.js';

export function Outliner({ onFrame }) {
  const doc = useLevel((s) => s.doc);
  const selection = useLevel((s) => s.selection);
  const select = useLevel((s) => s.select);
  const byRef = useLevel((s) => s.catalogue.byRef);
  const buildErrors = useLevel((s) => s.buildErrors);
  const groups = useMemo(() => {
    const g = new Map();
    for (const p of doc?.placements ?? []) {
      const pack = p.ref.split('/')[0];
      if (!g.has(pack)) g.set(pack, []);
      g.get(pack).push(p);
    }
    return [...g.entries()];
  }, [doc]);
  if (!doc) return <aside className="outliner" />;
  const row = (id, label, extra, cls = '') => (
    <div
      key={id}
      className={`row-item ${selection.includes(id) ? 'on' : ''} ${cls}`}
      onClick={(e) => select(id, { toggle: e.shiftKey })}
      onDoubleClick={() => onFrame(id)}
      title={extra}
    >
      <span className="label">{label}</span>
      {extra && <span className="muted mono small">{extra}</span>}
    </div>
  );
  return (
    <aside className="outliner">
      <h4>lights <span className="muted">{doc.lights.length}</span></h4>
      {doc.lights.map((l) => row(l.id, l.name || l.type, l.type, l.enabled === false ? 'dim' : ''))}
      <h4>spawns <span className="muted">{doc.spawns.length}</span></h4>
      {doc.spawns.map((s) => row(s.id, s.name, s.team ?? ''))}
      {groups.map(([pack, list]) => (
        <div key={pack}>
          <h4>{pack} <span className="muted">{list.length}</span></h4>
          {list.map((p) => {
            const item = byRef[p.ref];
            const err = buildErrors[p.id] || (!item ? 'pack not installed' : !item.supported ? item.error : null);
            return row(p.id, p.name || item?.title || p.ref.split('/')[1], err ? '⚠' : '', err ? 'bad' : '');
          })}
        </div>
      ))}
    </aside>
  );
}
