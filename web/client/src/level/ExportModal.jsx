import { useEffect, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';
import { levelsApi } from '../api.js';
import { buildExportScene, exportGlb } from './export/buildExportScene.js';

/**
 * Bake and export: the editor materialises every factory (the only place the
 * procedural textures exist), ships the raw GLB to the server, and watches the
 * Node pipeline's stages arrive over SSE.
 */
export function ExportModal({ onClose }) {
  const doc = useLevel((s) => s.doc);
  const levelId = useLevel((s) => s.levelId);
  const dirty = useLevel((s) => s.dirty);
  const [phase, setPhase] = useState('idle');
  const [log, setLog] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [baker, setBaker] = useState(doc?.settings?.lightmap?.enabled === false ? 'none' : 'blender');
  const [build, setBuild] = useState(null);
  const logRef = useRef(null);

  useEffect(() => { levelsApi.build(levelId).then(setBuild).catch(() => setBuild(null)); }, [levelId, result]);

  useEffect(() => {
    const es = new EventSource('/api/events');
    es.addEventListener('level:bake', (e) => {
      const evt = JSON.parse(e.data);
      if (evt.level !== levelId) return;
      setLog((l) => [...l.slice(-400), evt]);
      if (evt.phase === 'done') { setPhase('done'); setResult(evt.result); }
      if (evt.phase === 'failed') { setPhase('failed'); setError(evt.message); }
    });
    return () => es.close();
  }, [levelId]);
  useEffect(() => { logRef.current?.scrollTo(0, logRef.current.scrollHeight); }, [log]);

  const start = async () => {
    setError(null); setResult(null); setLog([]); setPhase('building');
    const st = useLevel.getState();
    let scene = null;
    try {
      const built = await buildExportScene(st.doc, st.catalogue, st.orphans, {
        onProgress: (i, n) => setLog((l) => [...l.slice(-1), { phase: 'editor', message: `built ${i}/${n} placements` }]),
      });
      scene = built.scene;
      if (built.missing.length) setLog((l) => [...l, { phase: 'editor', message: `${built.missing.length} placement(s) have no geometry and were skipped: ${built.missing.join(', ')}` }]);
      setLog((l) => [...l, { phase: 'editor', message: 'exporting raw GLB…' }]);
      const glb = await exportGlb(scene, { maxTextureSize: st.doc.settings?.textures?.maxSize ?? 2048 });
      setLog((l) => [...l, { phase: 'editor', message: `uploading ${(glb.byteLength / 1048576).toFixed(1)} MB` }]);
      setPhase('baking');
      await levelsApi.bake(levelId, glb, { baker });
    } catch (e) {
      setPhase('failed');
      setError(e.message);
    } finally {
      if (scene) scene.traverse((o) => { if (o.userData?.tk?.kind === 'placement') o.clear(); });
    }
  };

  const busy = phase === 'building' || phase === 'baking';
  return (
    <Modal title="Export level" onClose={busy ? undefined : onClose} width="min(820px, 94vw)">
      <p className="muted" style={{ marginTop: 0 }}>
        Writes <span className="mono">levels/{levelId}/build/level.glb</span>: one self-contained glTF with geometry merged per {doc?.settings?.cellSize ?? 24} m cell and material,
        three LOD tiers per cell, every texture as KTX2, colliders and lights in the scene extras, and the lightmap if baked. It needs nothing from thaikit to load.
      </p>
      {dirty && <div className="banner">Unsaved changes are exported as they are on screen, but save first if you want the file and the level to match.</div>}
      <div className="row" style={{ alignItems: 'end' }}>
        <div className="field">
          <label>lightmap</label>
          <select value={baker} onChange={(e) => setBaker(e.target.value)} disabled={busy}>
            <option value="blender">Blender Cycles (headless)</option>
            <option value="none">none — real-time moon only</option>
          </select>
        </div>
        <div>
          <button className="primary" onClick={start} disabled={busy || !doc?.placements.length}>{busy ? 'working…' : 'bake & export'}</button>
        </div>
      </div>
      {error && <div className="banner">{error}</div>}
      {(log.length > 0) && (
        <div className="joblog" ref={logRef}>
          {log.map((l, i) => (
            <div key={i} className={l.phase === 'failed' ? 'score-bad' : l.phase === 'done' ? 'score-good' : ''}>
              <span className="muted">{l.phase}</span> {l.message}
            </div>
          ))}
        </div>
      )}
      {result && (
        <div style={{ marginTop: 12 }}>
          <h4>result</h4>
          <table>
            <tbody>
              <tr><th>file</th><td className="mono"><a href={`/levels/${levelId}/build/level.glb`} target="_blank" rel="noreferrer">levels/{levelId}/build/level.glb</a> · {(result.bytes / 1048576).toFixed(1)} MB</td></tr>
              <tr><th>cells</th><td>{result.cells} · {result.drawCalls?.join(' / ')} draw calls at LOD 0 / 1 / 2</td></tr>
              <tr><th>triangles</th><td>{result.triangles?.map((t) => t.toLocaleString()).join(' / ')}</td></tr>
              <tr><th>textures</th><td>{result.textures} KTX2 {result.lightmap ? '+ lightmap' : '(no lightmap)'}</td></tr>
              <tr><th>colliders</th><td>{result.colliders} static shapes · {result.dynamic} dynamic objects</td></tr>
              <tr><th>verify</th><td className={result.verify?.ok ? 'score-good' : 'score-bad'}>{result.verify?.ok ? 'passed' : `${result.verify?.failures?.length ?? '?'} failure(s)`}{result.verify?.warnings?.length ? ` · ${result.verify.warnings.length} warning(s)` : ''}</td></tr>
            </tbody>
          </table>
          {result.verify?.failures?.map((f, i) => <div key={i} className="score-bad small">✗ {f}</div>)}
          {result.verify?.warnings?.map((w, i) => <div key={i} className="score-mid small">⚠ {w}</div>)}
        </div>
      )}
      {!result && build?.exists && (
        <p className="muted small">Last export: {new Date(build.generatedAt).toLocaleString()} · {(build.bytes / 1048576).toFixed(1)} MB · <a href={`/levels/${levelId}/build/level.glb`}>download</a></p>
      )}
    </Modal>
  );
}
