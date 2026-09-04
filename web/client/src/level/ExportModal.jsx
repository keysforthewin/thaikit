import { useEffect, useRef, useState } from 'react';

import { Modal } from './Modal.jsx';
import { useLevel } from './store.js';
import { levelsApi } from '../api.js';
import { buildExportScene, exportGlb } from './export/buildExportScene.js';

const PREFS_KEY = 'thaikit.level.bake';
const BAKERS = ['blender', 'blender-host', 'none'];

function loadPrefs() {
  try {
    const p = JSON.parse(localStorage.getItem(PREFS_KEY) || '{}');
    return { baker: BAKERS.includes(p.baker) ? p.baker : 'blender', cpu: Boolean(p.cpu) };
  } catch { return { baker: 'blender', cpu: false }; }
}
function savePrefs(p) { try { localStorage.setItem(PREFS_KEY, JSON.stringify(p)); } catch { /* private window */ } }

/**
 * Bake and export: the editor materialises every factory (the only place the
 * procedural textures exist), ships the raw GLB to the server, and watches the
 * Node pipeline's stages arrive over SSE.
 *
 * The lightmap can be baked by the container's Blender (CUDA) or by the
 * Blender on the host through the bake agent (OptiX, `npm run
 * level:bake-agent`); "also use CPU" is Cycles' hybrid mode, off by default
 * because on a fast card the CPU tiles hold the frame up. Cancel aborts
 * whichever stage is running: the in-browser build, the upload, or the
 * server-side pipeline and its Blender.
 */
export function ExportModal({ onClose }) {
  const doc = useLevel((s) => s.doc);
  const levelId = useLevel((s) => s.levelId);
  const dirty = useLevel((s) => s.dirty);
  const [phase, setPhase] = useState('idle');
  const [log, setLog] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [prefs] = useState(loadPrefs);
  const [baker, setBakerState] = useState(doc?.settings?.lightmap?.enabled === false ? 'none' : prefs.baker);
  const [cpu, setCpuState] = useState(prefs.cpu);
  const [agent, setAgent] = useState(null);
  const [build, setBuild] = useState(null);
  const logRef = useRef(null);
  const abortRef = useRef(null);

  const setBaker = (v) => { setBakerState(v); savePrefs({ baker: v, cpu }); };
  const setCpu = (v) => { setCpuState(v); savePrefs({ baker, cpu: v }); };

  useEffect(() => { levelsApi.build(levelId).then(setBuild).catch(() => setBuild(null)); }, [levelId, result]);
  useEffect(() => { levelsApi.bakeAgent().then(setAgent).catch(() => setAgent({ reachable: false })); }, [phase === 'idle']);

  useEffect(() => {
    const es = new EventSource('/api/events');
    es.addEventListener('level:bake', (e) => {
      const evt = JSON.parse(e.data);
      if (evt.level !== levelId) return;
      setLog((l) => [...l.slice(-400), evt]);
      if (evt.phase === 'done') { setPhase('done'); setResult(evt.result); }
      if (evt.phase === 'failed') { setPhase('failed'); setError(evt.message); }
      if (evt.phase === 'cancelled' && evt.result) setPhase('cancelled');
    });
    return () => es.close();
  }, [levelId]);
  useEffect(() => { logRef.current?.scrollTo(0, logRef.current.scrollHeight); }, [log]);

  const start = async () => {
    setError(null); setResult(null); setLog([]); setPhase('building');
    const st = useLevel.getState();
    const ac = new AbortController();
    abortRef.current = ac;
    let scene = null;
    try {
      const built = await buildExportScene(st.doc, st.catalogue, st.orphans, {
        signal: ac.signal,
        onProgress: (i, n) => setLog((l) => [...l.slice(-1), { phase: 'editor', message: `built ${i}/${n} placements` }]),
      });
      scene = built.scene;
      if (built.missing.length) setLog((l) => [...l, { phase: 'editor', message: `${built.missing.length} placement(s) have no geometry and were skipped: ${built.missing.join(', ')}` }]);
      setLog((l) => [...l, { phase: 'editor', message: 'exporting raw GLB…' }]);
      const glb = await exportGlb(scene, { maxTextureSize: st.doc.settings?.textures?.maxSize ?? 2048 });
      if (ac.signal.aborted) throw new DOMException('export cancelled', 'AbortError');
      setLog((l) => [...l, { phase: 'editor', message: `uploading ${(glb.byteLength / 1048576).toFixed(1)} MB` }]);
      setPhase('baking');
      await levelsApi.bake(levelId, glb, { baker, cpu: baker !== 'none' && cpu, signal: ac.signal });
    } catch (e) {
      if (e.name === 'AbortError') {
        setPhase('cancelled');
        setLog((l) => [...l, { phase: 'cancelled', message: 'cancelled' }]);
      } else {
        setPhase('failed');
        setError(e.message);
      }
    } finally {
      abortRef.current = null;
      if (scene) scene.traverse((o) => { if (o.userData?.tk?.kind === 'placement') o.clear(); });
    }
  };

  const cancel = async () => {
    if (phase === 'building') { abortRef.current?.abort(); return; }
    if (phase === 'baking') {
      // The upload may still be in flight; abort it too. Once the server has the
      // GLB the job exists and DELETE is what stops it.
      abortRef.current?.abort();
      setLog((l) => [...l, { phase: 'editor', message: 'cancelling…' }]);
      try { await levelsApi.cancelBake(levelId); } catch (e) { if (e.status !== 404) setError(e.message); }
    }
  };

  const busy = phase === 'building' || phase === 'baking';
  const hostHint = baker === 'blender-host' && agent && (agent.reachable
    ? <span className="score-good small">host agent: reachable · {agent.exe?.split(/[\\/]/).pop()}{agent.busy ? ` · busy with ${agent.busy.level}` : ''}</span>
    : <span className="score-bad small">host agent not running — on the host run <span className="mono">npm run level:bake-agent</span></span>);
  return (
    <Modal title="Export level" onClose={busy ? undefined : onClose} width="min(820px, 94vw)">
      <p className="muted" style={{ marginTop: 0 }}>
        Delivers <span className="mono">{levelId}.glb</span> to the game's GLB folder (a copy stays at <span className="mono">levels/{levelId}/build/level.glb</span>): one self-contained glTF with geometry merged per {doc?.settings?.cellSize ?? 24} m cell and material,
        three LOD tiers per cell, every texture as KTX2, colliders and lights in the scene extras, and the lightmap if baked. It needs nothing from thaikit to load.
      </p>
      {dirty && <div className="banner">Unsaved changes are exported as they are on screen, but save first if you want the file and the level to match.</div>}
      <div className="row" style={{ alignItems: 'end' }}>
        <div className="field">
          <label>lightmap</label>
          <select value={baker} onChange={(e) => setBaker(e.target.value)} disabled={busy}>
            <option value="blender">Blender Cycles — container (CUDA)</option>
            <option value="blender-host">Blender Cycles — host Blender (Windows, OptiX)</option>
            <option value="none">none — real-time moon only</option>
          </select>
        </div>
        <div className="field">
          <label title="Cycles hybrid mode: every CPU core renders tiles beside the GPU. Usually SLOWER on a fast card, because the frame waits for the CPU's tiles.">
            <input type="checkbox" checked={cpu} onChange={(e) => setCpu(e.target.checked)} disabled={busy || baker === 'none'} /> also use CPU
          </label>
        </div>
        <div>
          <button className="primary" onClick={start} disabled={busy || !doc?.placements.length}>{busy ? 'working…' : 'bake & export'}</button>
          {busy && <button onClick={cancel} style={{ marginLeft: 8 }}>cancel</button>}
        </div>
      </div>
      {hostHint && <div style={{ marginTop: 4 }}>{hostHint}</div>}
      {baker !== 'none' && <p className="muted small" style={{ margin: '4px 0 0' }}>hybrid CPU+GPU is usually slower on a fast card; leave "also use CPU" off unless the GPU is small.</p>}
      {error && <div className="banner">{error}</div>}
      {(log.length > 0) && (
        <div className="joblog" ref={logRef}>
          {log.map((l, i) => (
            <div key={i} className={l.phase === 'failed' ? 'score-bad' : l.phase === 'done' ? 'score-good' : l.phase === 'cancelled' ? 'muted' : ''}>
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
              {result.exported
                ? <tr><th>delivered to</th><td className="mono score-good">{result.exported.path} · {(result.exported.bytes / 1048576).toFixed(1)} MB</td></tr>
                : <tr><th>delivered to</th><td className="score-mid small">not copied — set THAIKIT_EXPORT_DIR (see the export log)</td></tr>}
              <tr><th>build copy</th><td className="mono"><a href={`/levels/${levelId}/build/level.glb`} target="_blank" rel="noreferrer">levels/{levelId}/build/level.glb</a> · {(result.bytes / 1048576).toFixed(1)} MB</td></tr>
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
