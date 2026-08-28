import { useEffect, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';
import { packsApi } from '../api.js';

/** Add, refresh and remove vibe3d packs; watch the install job's log live. */
export function PackManagerModal({ onClose, onChanged }) {
  const packs = useLevel((s) => s.catalogue.packs);
  const doc = useLevel((s) => s.doc);
  const [source, setSource] = useState('');
  const [log, setLog] = useState([]);
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);
  const logRef = useRef(null);

  useEffect(() => {
    const es = new EventSource('/api/events');
    es.addEventListener('pack', (e) => {
      const evt = JSON.parse(e.data);
      setLog((l) => [...l.slice(-300), evt]);
      if (evt.phase === 'done' || evt.phase === 'failed') {
        setBusy(null);
        if (evt.phase === 'failed') setError(evt.message);
        onChanged?.(evt.result);
      }
    });
    return () => es.close();
  }, [onChanged]);
  useEffect(() => { logRef.current?.scrollTo(0, logRef.current.scrollHeight); }, [log]);

  const start = async (fn) => {
    setError(null);
    try { const { jobId } = await fn(); setBusy(jobId); setLog([]); } catch (e) { setError(e.message); }
  };

  const usedRefs = new Set((doc?.placements ?? []).map((p) => p.ref.split('/')[0]));

  return (
    <Modal title="Asset packs" onClose={onClose} width="min(900px, 94vw)">
      <p className="muted" style={{ marginTop: 0 }}>
        Any <a href="https://github.com/vibe-stack/vibe3d" target="_blank" rel="noreferrer">vibe3d</a>-compatible pack: an npm package name
        (<span className="mono">@scifi-kit/registry</span>), <span className="mono">npm:name@range</span>, an <span className="mono">https://</span> registry.json, or <span className="mono">file:</span> path.
        The server downloads it, bundles every model, builds it once to measure it, and derives a collider compound.
      </p>
      <form className="row-inline" onSubmit={(e) => { e.preventDefault(); if (source.trim()) start(() => packsApi.add(source.trim())); }}>
        <input placeholder="@scifi-kit/registry" value={source} onChange={(e) => setSource(e.target.value)} style={{ flex: 1 }} disabled={Boolean(busy)} />
        <button className="primary" type="submit" disabled={!source.trim() || Boolean(busy)}>add pack</button>
      </form>
      {error && <div className="banner">{error}</div>}
      <table>
        <thead><tr><th>pack</th><th>version</th><th>source</th><th>items</th><th /></tr></thead>
        <tbody>
          {packs.map((p) => (
            <tr key={p.id}>
              <td><strong>{p.name ?? p.id}</strong> <span className="mono muted">{p.id}</span></td>
              <td className="mono">{p.version ?? '–'}</td>
              <td className="mono muted" style={{ maxWidth: 260, overflow: 'hidden', textOverflow: 'ellipsis' }}>{p.source}</td>
              <td>{p.items}{p.unsupported ? <span className="score-bad mono"> ({p.unsupported} unsupported)</span> : null}</td>
              <td style={{ whiteSpace: 'nowrap' }}>
                {p.builtin ? <span className="muted">built-in</span> : (
                  <>
                    <button disabled={Boolean(busy)} onClick={() => start(() => packsApi.refresh(p.id))} title="re-resolve the source, download the latest version and rebuild">refresh</button>{' '}
                    <button className="danger" disabled={Boolean(busy)} onClick={() => { if (window.confirm(`Remove ${p.id}?${usedRefs.has(p.id) ? ' The open level uses it; its objects will become orphans.' : ''}`)) start(() => packsApi.remove(p.id)); }}>remove</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {(busy || log.length > 0) && (
        <div className="joblog" ref={logRef}>
          {log.map((l, i) => (
            <div key={i} className={l.phase === 'failed' ? 'score-bad' : l.phase === 'done' ? 'score-good' : ''}>
              <span className="muted">{l.phase}</span> {l.message}{l.item ? <span className="mono"> {l.item}</span> : null}
            </div>
          ))}
          {busy && <div className="muted">working… (job {busy})</div>}
        </div>
      )}
    </Modal>
  );
}
