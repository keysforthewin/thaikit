import { useEffect, useMemo, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';

const histogram = (items, key) => {
  const h = new Map();
  for (const it of items) for (const v of Array.isArray(it[key]) ? it[key] : [it[key]]) if (v) h.set(v, (h.get(v) ?? 0) + 1);
  return [...h.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
};

/** Search + filter over every installed pack; pick one to place it. */
export function PickerModal({ onClose, onPick }) {
  const catalogue = useLevel((s) => s.catalogue);
  const [q, setQ] = useState('');
  const [pack, setPack] = useState('');
  const [category, setCategory] = useState('');
  const [tag, setTag] = useState('');

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

  useEffect(() => { setCategory(''); setTag(''); }, [pack]);

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
      <div className="picker-grid">
        {visible.map((it) => (
          <div
            key={it.ref}
            className={`card ${it.supported ? '' : 'unsupported'}`}
            title={it.supported ? it.description : it.error ?? 'unsupported'}
            onClick={() => it.supported && onPick(it)}
          >
            <div className="thumb">{it.thumb ? <img src={it.thumb} alt={it.title} loading="lazy" /> : <span>no preview</span>}</div>
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
                {it.maps?.length > 0 && !it.maps.every((m) => m.ktx2) && <span className="badge score-mid" title="ships images that are not KTX2">not ktx2</span>}
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
