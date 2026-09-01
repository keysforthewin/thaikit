import { useEffect, useMemo, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';

const PREFS_KEY = 'thaikit.level.picker';
const EMPTY_PREFS = { q: '', pack: '', category: '', tag: '', scroll: 0 };

/** The picker unmounts on close, so its filters live outside it -- and across reloads. */
const loadPrefs = () => {
  try {
    const raw = JSON.parse(localStorage.getItem(PREFS_KEY) ?? 'null');
    if (!raw || typeof raw !== 'object') return { ...EMPTY_PREFS };
    return {
      q: typeof raw.q === 'string' ? raw.q : '',
      pack: typeof raw.pack === 'string' ? raw.pack : '',
      category: typeof raw.category === 'string' ? raw.category : '',
      tag: typeof raw.tag === 'string' ? raw.tag : '',
      scroll: Number.isFinite(raw.scroll) ? raw.scroll : 0,
    };
  } catch {
    return { ...EMPTY_PREFS };
  }
};

const savePrefs = (prefs) => {
  try {
    localStorage.setItem(PREFS_KEY, JSON.stringify(prefs));
  } catch {
    /* private window, or storage disabled -- the picker still works, it just forgets */
  }
};

const histogram = (items, key) => {
  const h = new Map();
  for (const it of items) for (const v of Array.isArray(it[key]) ? it[key] : [it[key]]) if (v) h.set(v, (h.get(v) ?? 0) + 1);
  return [...h.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

/** Search + filter over every installed pack; pick one to place it. */
export function PickerModal({ onClose, onPick }) {
  const catalogue = useLevel((s) => s.catalogue);
  const placements = useLevel((s) => s.doc?.placements);
  /** ref -> how many of it are in the level right now. */
  const placed = useMemo(() => {
    const n = new Map();
    for (const p of placements ?? []) n.set(p.ref, (n.get(p.ref) ?? 0) + 1);
    return n;
  }, [placements]);
  const [saved] = useState(loadPrefs);
  const [q, setQ] = useState(saved.q);
  // An empty catalogue is one still loading, not a pack that is gone.
  const [pack, setPack] = useState(() =>
    !catalogue.packs.length || catalogue.packs.some((p) => p.id === saved.pack) ? saved.pack : '');
  const [category, setCategory] = useState(saved.category);
  const [tag, setTag] = useState(saved.tag);
  const gridRef = useRef(null);

  const inPack = useMemo(() => catalogue.items.filter((it) => !pack || it.pack === pack), [catalogue, pack]);
  const categories = useMemo(() => histogram(inPack, 'category'), [inPack]);
  const tags = useMemo(() => histogram(inPack, 'tags').slice(0, 24), [inPack]);
  const visible = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return inPack.filter((it) => {
      if (category && it.category !== category) return false;
      if (tag && !it.tags.includes(tag)) return false;
      if (!needle) return true;
      return [it.name, it.title, it.description, it.category, it.pack, ...it.tags].join(' ').toLowerCase().includes(needle);
    });
  }, [inPack, q, category, tag]);

  // Only a real change of pack clears the narrower filters -- the restored pack must not.
  const lastPack = useRef(pack);
  useEffect(() => {
    if (lastPack.current === pack) return;
    lastPack.current = pack;
    setCategory('');
    setTag('');
  }, [pack]);

  // A category or tag whose pack is gone would filter everything away with no chip to unset.
  useEffect(() => {
    if (!catalogue.items.length) return;
    if (pack && !catalogue.packs.some((p) => p.id === pack)) { setPack(''); return; }
    if (category && !categories.some(([k]) => k === category)) setCategory('');
    if (tag && !inPack.some((it) => it.tags.includes(tag))) setTag('');
  }, [catalogue, categories, inPack, pack, category, tag]);

  useEffect(() => {
    const grid = gridRef.current;
    savePrefs({ q, pack, category, tag, scroll: grid ? grid.scrollTop : saved.scroll });
  }, [q, pack, category, tag]);

  // Restore the scroll position once the grid has the restored filters' cards in it.
  const restored = useRef(false);
  useEffect(() => {
    if (restored.current || !gridRef.current || !visible.length) return;
    restored.current = true;
    gridRef.current.scrollTop = saved.scroll;
  }, [visible]);

  const rememberScroll = (e) => savePrefs({ q, pack, category, tag, scroll: e.currentTarget.scrollTop });

  const chips = (list, value, set, all) => (
    <div className="filters compact">
      <span className={`chip ${!value ? 'on' : ''}`} onClick={() => set('')}>{all}</span>
      {list.map(([k, n]) => (
        <span key={k} className={`chip ${value === k ? 'on' : ''}`} onClick={() => set(value === k ? '' : k)}>{k} <span className="muted">{n}</span></span>
      ))}
    </div>
  );

  return (
    <Modal title="Add object" onClose={onClose} width="min(1100px, 94vw)">
      <form onSubmit={(e) => { e.preventDefault(); if (visible[0]?.supported) onPick(visible[0]); }}>
        <input autoFocus placeholder="search name, tag, category…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: '100%' }} />
      </form>
      {chips(catalogue.packs.map((p) => [p.id, p.items]), pack, setPack, 'all packs')}
      {chips(categories, category, setCategory, 'all categories')}
      {chips(tags, tag, setTag, 'any tag')}
      <div className="picker-grid" ref={gridRef} onScroll={rememberScroll}>
        {visible.map((it) => (
          <div
            key={it.ref}
            className={`card ${it.supported ? '' : 'unsupported'}`}
            title={it.supported ? it.description : it.error ?? 'unsupported'}
            onClick={() => it.supported && onPick(it)}
          >
            <div className="thumb">
              {it.thumb ? <img src={it.thumb} alt={it.title} loading="lazy" /> : <span>no preview</span>}
              {placed.get(it.ref) > 0 && (
                <span className="count-pill" title={`${placed.get(it.ref)} in this level`}>×{placed.get(it.ref)}</span>
              )}
            </div>
            <div className="body">
              <div className="name">{it.title}</div>
              <div className="muted" style={{ fontSize: 12 }}>
                {it.pack} · {it.category}
                {it.size ? ` · ${it.size.w}×${it.size.h}×${it.size.d} m` : ''}
              </div>
              <div className="badges">
                {it.stats?.triangles != null && <span className="badge mono">{(it.stats.triangles / 1000).toFixed(1)}k</span>}
                {it.stats?.drawCalls != null && <span className="badge mono">{it.stats.drawCalls} dc</span>}
                {it.physics?.enabled && <span className="badge">physics</span>}
                {it.collidersSource === 'hand-tuned' && <span className="badge" title="its collider compound was placed by hand">hand-tuned</span>}
                {it.override && <span className="badge" title="a local override changes what this pack says about it">override</span>}
                {!it.supported && <span className="badge score-bad">unsupported</span>}
              </div>
            </div>
          </div>
        ))}
        {visible.length === 0 && <p className="muted">nothing matches</p>}
      </div>
    </Modal>
  );
}
