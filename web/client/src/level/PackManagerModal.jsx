import { useEffect, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';
import { packsApi } from '../api.js';

/**
 * The lines that say WHICH items did not build and why.
 *
 * install-pack.mjs reports every failure as it happens, but a hundred-item pack
 * scrolls those away long before it finishes; the result line only carries a
 * count. So the `done` event's `result.unsupported` -- name and error, straight
 * from the bundler or the probe -- is replayed as its own block at the end.
 */
function unsupportedLines(evt) {
  if (evt.phase !== 'done') return [];
  const bad = evt.result?.unsupported ?? [];
  if (!bad.length) return [];
  return [
    { phase: 'unsupported', message: `${bad.length} of ${evt.result.models} item(s) could not be built:` },
    ...bad.map((u) => ({ phase: 'unsupported', item: u.name, message: `— ${u.error ?? 'no reason recorded'}` })),
  ];
}

/** Add, refresh and remove vibe3d packs; watch the install job's log live. */
export function PackManagerModal({ onClose, onChanged }) {
  const packs = useLevel((s) => s.catalogue.packs);
  const catalogueItems = useLevel((s) => s.catalogue.items);
  const doc = useLevel((s) => s.doc);
  const [source, setSource] = useState('');
  const [log, setLog] = useState([]);
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);
  const [failuresFor, setFailuresFor] = useState(null);
  const logRef = useRef(null);

  useEffect(() => {
    const es = new EventSource('/api/events');
    es.addEventListener('pack', (e) => {
      const evt = JSON.parse(e.data);
      setLog((l) => [...l.slice(-300), evt, ...unsupportedLines(evt)]);
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
    <Modal title="Asset packs" onClose={onClose} width="min(900px, 94vw)" disableEscape={Boolean(failuresFor)}>
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
              <td>
                {p.items}
                {p.unsupported ? (
                  <button type="button" className="linkish score-bad mono" onClick={() => setFailuresFor(p.id)} title="what failed to build, and why">
                    ({p.unsupported} unsupported)
                  </button>
                ) : null}
              </td>
              <td style={{ whiteSpace: 'nowrap' }}>
                {p.builtin ? <span className="muted">built-in</span> : (
                  <>
                    <button disabled={Boolean(busy)} onClick={() => start(() => packsApi.refresh(p.id))} title="re-resolve the source, download the latest version and rebuild">refresh</button>{' '}
                    <button disabled={Boolean(busy)} onClick={() => start(() => packsApi.previews(p.id))} title="re-render every item's thumbnail from the bundles already on disk — nothing is downloaded">previews</button>{' '}
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
            <div key={i} className={l.phase === 'failed' || l.phase === 'unsupported' ? 'score-bad' : l.phase === 'done' ? 'score-good' : ''}>
              <span className="muted">{l.phase}</span>{l.item ? <span className="mono"> {l.item}</span> : null} {l.message}
            </div>
          ))}
          {busy && <div className="muted">working… (job {busy})</div>}
        </div>
      )}
      {failuresFor && (
        <PackFailuresModal
          pack={packs.find((p) => p.id === failuresFor)}
          items={catalogueItems.filter((it) => it.pack === failuresFor && !it.supported)}
          onClose={() => setFailuresFor(null)}
        />
      )}
    </Modal>
  );
}

/** Every item in one pack that would not build, its recorded reason, and the installer's warnings. */
function PackFailuresModal({ pack, items, onClose }) {
  const warnings = pack?.warnings ?? [];
  const [copied, setCopied] = useState(null);

  const asText = () => [
    `${pack?.name ?? pack?.id} ${pack?.version ?? ''} — ${items.length} unsupported item(s)`,
    '',
    ...items.map((it) => `${it.ref}\n  ${it.error ?? 'no reason recorded'}`),
    ...(warnings.length ? ['', `warnings (${warnings.length}):`, ...warnings.map((w) => `  ${w}`)] : []),
  ].join('\n');

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(asText());
      setCopied('copied');
    } catch {
      setCopied('could not reach the clipboard — select the text instead');
    }
  };

  return (
    <Modal
      title={`${pack?.id ?? 'pack'} — unsupported items`}
      onClose={onClose}
      width="min(760px, 94vw)"
      footer={(
        <>
          <button onClick={copy}>copy text</button>
          {copied && <span className="muted" style={{ marginLeft: 8 }}>{copied}</span>}
          <span className="grow" />
          <button className="primary" onClick={onClose}>close</button>
        </>
      )}
    >
      <p className="muted" style={{ marginTop: 0 }}>
        These built cleanly enough to bundle or not at all; either way the installer could not construct them once under
        Node, so they are recorded and left out of the picker. Everything else in the pack is usable.
      </p>
      {items.map((it) => (
        <div key={it.ref} style={{ marginBottom: 10 }}>
          <div className="mono"><strong>{it.name}</strong> <span className="muted">{it.ref}</span></div>
          <div className="score-bad mono" style={{ whiteSpace: 'pre-wrap' }}>{it.error ?? 'no reason recorded'}</div>
        </div>
      ))}
      {warnings.length > 0 && (
        <>
          <h4>warnings ({warnings.length})</h4>
          <div className="joblog">
            {warnings.map((w, i) => <div key={i} className="mono">{w}</div>)}
          </div>
        </>
      )}
    </Modal>
  );
}
