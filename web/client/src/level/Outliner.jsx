import { useMemo } from 'react';

import { useLevel } from './store.js';
import { claimedIds, groupMap, isGroupId, selectedSet, topLevelGroups } from './groups.js';
import { kindOf } from './ids.js';

/**
 * The level's contents. Joined objects are shown as a named folder with their
 * members nested underneath, at whatever depth they were joined; everything
 * nothing has claimed stays in the flat lists below, grouped by pack.
 *
 * Clicking a folder selects the whole assembly (which is what the gizmo then
 * drags); clicking a member inside it selects just that piece.
 */
export function Outliner({ onFrame }) {
  const doc = useLevel((s) => s.doc);
  const selection = useLevel((s) => s.selection);
  const selected = useLevel(selectedSet);
  const openGroups = useLevel((s) => s.openGroups);
  const select = useLevel((s) => s.select);
  const toggleGroupOpen = useLevel((s) => s.toggleGroupOpen);
  const byRef = useLevel((s) => s.catalogue.byRef);
  const buildErrors = useLevel((s) => s.buildErrors);

  const groups = useMemo(() => groupMap(doc), [doc]);
  const roots = useMemo(() => topLevelGroups(doc), [doc]);
  const claimed = useMemo(() => claimedIds(doc), [doc]);
  const packs = useMemo(() => {
    const g = new Map();
    for (const p of doc?.placements ?? []) {
      if (claimed.has(p.id)) continue;
      const pack = p.ref.split('/')[0];
      if (!g.has(pack)) g.set(pack, []);
      g.get(pack).push(p);
    }
    return [...g.entries()];
  }, [doc, claimed]);

  if (!doc) return <aside className="outliner" />;

  const row = (id, label, extra, cls = '', depth = 0, twisty = null) => (
    <div
      key={id}
      className={`row-item ${selection.includes(id) || selected.has(id) ? 'on' : ''} ${cls}`}
      style={depth ? { paddingLeft: 12 + depth * 14 } : undefined}
      onClick={(e) => select(id, { toggle: e.shiftKey })}
      onDoubleClick={() => onFrame(id)}
      title={extra}
    >
      {twisty}
      <span className="label">{label}</span>
      {extra && <span className="muted mono small">{extra}</span>}
    </div>
  );

  /** One member of a group, whatever kind it is. */
  const member = (id, depth) => {
    if (isGroupId(id)) return groupRows(id, depth);
    const kind = kindOf(id);
    const p = doc.placements.find((x) => x.id === id);
    if (p) {
      const item = byRef[p.ref];
      const err = buildErrors[p.id] || (!item ? 'pack not installed' : !item.supported ? item.error : null);
      return row(p.id, p.name || item?.title || p.ref.split('/')[1], err ? '⚠' : '', err ? 'bad' : '', depth);
    }
    const l = doc.lights.find((x) => x.id === id);
    if (l) return row(l.id, l.name || l.type, l.type, l.enabled === false ? 'dim' : '', depth);
    const sp = doc.spawns.find((x) => x.id === id);
    if (sp) return row(sp.id, sp.name, sp.team ?? '', '', depth);
    return row(id, id, kind ?? '', 'dim', depth);
  };

  const groupRows = (id, depth = 0) => {
    const g = groups.get(id);
    if (!g) return null;
    const open = openGroups.includes(id);
    const twisty = (
      <span
        className="twisty"
        onClick={(e) => { e.stopPropagation(); toggleGroupOpen(id); }}
        title={open ? 'collapse' : 'expand'}
      >
        {open ? '▾' : '▸'}
      </span>
    );
    return (
      <div key={id}>
        {row(id, g.name, `${g.children.length}`, 'group', depth, twisty)}
        {open && g.children.map((c) => member(c, depth + 1))}
      </div>
    );
  };

  const lights = doc.lights.filter((l) => !claimed.has(l.id));
  const spawns = doc.spawns.filter((s) => !claimed.has(s.id));

  return (
    <aside className="outliner">
      {roots.length > 0 && (
        <>
          <h4>groups <span className="muted">{roots.length}</span></h4>
          {roots.map((g) => groupRows(g.id))}
        </>
      )}
      <h4>lights <span className="muted">{lights.length}</span></h4>
      {lights.map((l) => row(l.id, l.name || l.type, l.type, l.enabled === false ? 'dim' : ''))}
      <h4>spawns <span className="muted">{spawns.length}</span></h4>
      {spawns.map((s) => row(s.id, s.name, s.team ?? ''))}
      {packs.map(([pack, list]) => (
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
