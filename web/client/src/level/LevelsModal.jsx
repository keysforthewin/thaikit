import { useEffect, useState } from 'react';

import { Modal } from './Modal.jsx';
import { levelsApi } from '../api.js';

export function LevelsModal({ onClose, onOpen, onCreate, onDelete, current, dirty, readOnly = false }) {
  const [items, setItems] = useState(null);
  const [name, setName] = useState('');
  const [error, setError] = useState(null);
  const reload = () => levelsApi.list().then((r) => setItems(r.items)).catch((e) => setError(e.message));
  useEffect(() => { reload(); }, []);

  const guard = () => !dirty || window.confirm('Discard unsaved changes to the open level?');

  return (
    <Modal title="Levels" onClose={onClose} width="min(640px, 92vw)">
      {error && <div className="banner">{error}</div>}
      {!readOnly && <form className="row-inline" onSubmit={async (e) => { e.preventDefault(); if (!name.trim() || !guard()) return; try { const created = await onCreate(name.trim()); setName(''); await reload(); onOpen(created.id); } catch (err) { setError(err.message); } }}>
        <input placeholder="new level name…" value={name} onChange={(e) => setName(e.target.value)} style={{ flex: 1 }} />
        <button className="primary" type="submit" disabled={!name.trim()}>+ new level</button>
      </form>}
      {items === null ? <p className="muted">loading…</p> : items.length === 0 ? (
        <p className="muted">{readOnly ? 'No levels on this instance.' : 'No levels yet. Name one above.'}</p>
      ) : (
        <table>
          <thead><tr><th>name</th><th>id</th><th>objects</th><th>lights</th><th>updated</th><th /></tr></thead>
          <tbody>
            {items.map((l) => (
              <tr key={l.id} className={l.id === current ? 'current' : ''}>
                <td>{l.name}</td>
                <td className="mono muted">{l.id}</td>
                <td>{l.placements ?? '–'}</td>
                <td>{l.lights ?? '–'}</td>
                <td className="muted">{l.updatedAt ? new Date(l.updatedAt).toLocaleString() : '–'}</td>
                <td style={{ whiteSpace: 'nowrap' }}>
                  <button onClick={() => { if (guard()) onOpen(l.id); }} disabled={l.id === current}>open</button>{' '}
                  {!readOnly && <button className="danger" onClick={async () => { if (window.confirm(`Delete level "${l.name}"? This removes levels/${l.id}/ entirely.`)) { await onDelete(l.id); reload(); } }}>delete</button>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </Modal>
  );
}
