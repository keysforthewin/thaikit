import { useCallback, useEffect, useRef, useState } from 'react';

import { useLevel } from './store.js';
import { levelsApi } from '../api.js';
import { CUBE_FACES, skyOf, baseSource } from './sky.js';

/**
 * The sky tab.
 *
 * Two kinds of edit live here and they behave differently on purpose. The
 * numbers and colours go through `setSetting`, so they are commits and undo
 * works. The IMAGES are files on the server: uploading one is not undoable, so
 * an upload writes the file, then records the filename with `setSetting` --
 * which means undo takes the sky back to the previous picture without deleting
 * anything that was uploaded.
 */

/** One upload slot: what is there, replace it, clear it. */
function Slot({ levelId, slot, label, file, onUploaded, onCleared }) {
  const input = useRef(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [info, setInfo] = useState(null);

  const pick = async (e) => {
    const chosen = e.target.files?.[0];
    e.target.value = '';
    if (!chosen) return;
    setBusy(true);
    setError(null);
    try {
      const r = await levelsApi.sky.upload(levelId, slot, chosen);
      setInfo(`${r.width}×${r.height} ${r.format}`);
      onUploaded(r);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  const clear = async () => {
    setBusy(true);
    setError(null);
    try {
      await levelsApi.sky.remove(levelId, slot);
      setInfo(null);
      onCleared();
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="field">
      <label>{label}</label>
      <div className="row" style={{ gap: 6, alignItems: 'center' }}>
        <button onClick={() => input.current?.click()} disabled={busy || !levelId} title={file ? 'replace this image' : 'upload an image'}>
          {busy ? '…' : file ? 'replace' : 'upload'}
        </button>
        {file && <button onClick={clear} disabled={busy} title="remove this image">clear</button>}
        <span className="muted small mono" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
          {file ? `${file}${info ? ` · ${info}` : ''}` : 'none'}
        </span>
      </div>
      {error && <div className="small" style={{ color: '#e2686d' }}>{error}</div>}
      <input ref={input} type="file" accept="image/jpeg,image/png,image/webp" style={{ display: 'none' }} onChange={pick} />
    </div>
  );
}

export function SkyPanel({ Num }) {
  const doc = useLevel((s) => s.doc);
  const levelId = useLevel((s) => s.levelId);
  const setSetting = useLevel((s) => s.setSetting);
  const bumpSky = useLevel((s) => s.bumpSky);
  const [onDisk, setOnDisk] = useState({});
  const sky = skyOf(doc);

  // What is actually in levels/<id>/sky/. The setting records filenames, but a
  // level opened in a fresh session has no idea which slots exist until asked --
  // and a file removed outside the editor should show as gone, not as broken.
  const refresh = useCallback(async () => {
    if (!levelId) return;
    try {
      const r = await levelsApi.sky.list(levelId);
      setOnDisk(r.slots ?? {});
    } catch { /* a level with no sky directory is not an error */ }
  }, [levelId]);
  useEffect(() => { refresh(); }, [refresh]);

  const uploaded = (slot) => (r) => {
    setOnDisk((s) => ({ ...s, [slot]: { file: r.file, bytes: r.bytes } }));
    bumpSky();
    if (slot === 'clouds') setSetting('sky.clouds.file', r.file);
    else if (slot === 'equirect') setSetting('sky.base.file', r.file);
    else setSetting('sky.base.faces', { ...(sky.base.faces ?? {}), [slot]: r.file });
  };

  const cleared = (slot) => () => {
    setOnDisk((s) => { const next = { ...s }; delete next[slot]; return next; });
    bumpSky();
    if (slot === 'clouds') setSetting('sky.clouds.file', null);
    else if (slot === 'equirect') setSetting('sky.base.file', null);
    else {
      const faces = { ...(sky.base.faces ?? {}) };
      delete faces[slot];
      setSetting('sky.base.faces', Object.keys(faces).length ? faces : null);
    }
  };

  const mode = sky.base.mode;
  const source = baseSource(sky);
  const missingFaces = mode === 'cube' ? CUBE_FACES.filter((f) => !sky.base.faces?.[f]) : [];

  return (
    <>
      <div className="field">
        <label>sky</label>
        <select
          value={sky.enabled ? 'on' : 'off'}
          onChange={(e) => setSetting('sky.enabled', e.target.value === 'on')}
          title="a base backdrop, a drifting cloud dome and a star field, over the whole level"
        >
          <option value="off">none (flat background colour)</option>
          <option value="on">on</option>
        </select>
      </div>
      {!sky.enabled && <div className="muted small">The level uses the flat background colour on the level tab.</div>}

      {sky.enabled && (
        <>
          <h4>base</h4>
          <div className="row">
            <div className="field">
              <label>source</label>
              <select value={mode} onChange={(e) => setSetting('sky.base.mode', e.target.value)}>
                <option value="none">none</option>
                <option value="equirect">equirectangular</option>
                <option value="cube">cube map (6 faces)</option>
              </select>
            </div>
            <div className="field">
              <label>rotation (°)</label>
              <Num value={sky.base.rotationDeg} step={5} onCommit={(n) => setSetting('sky.base.rotationDeg', n)} />
            </div>
          </div>
          {mode !== 'none' && (
            <div className="field">
              <label>intensity</label>
              <Num value={sky.base.intensity} step={0.05} min={0} onCommit={(n) => setSetting('sky.base.intensity', n)} />
            </div>
          )}
          {mode === 'equirect' && (
            <Slot levelId={levelId} slot="equirect" label="equirectangular image (2:1)" file={onDisk.equirect?.file ?? sky.base.file} onUploaded={uploaded('equirect')} onCleared={cleared('equirect')} />
          )}
          {mode === 'cube' && (
            <>
              {CUBE_FACES.map((f) => (
                <Slot key={f} levelId={levelId} slot={f} label={`${f} face`} file={onDisk[f]?.file ?? sky.base.faces?.[f] ?? null} onUploaded={uploaded(f)} onCleared={cleared(f)} />
              ))}
              {missingFaces.length > 0 && (
                // All six or none: CubeTextureLoader never fires onLoad on a
                // partial set, so a five-face cube is a sky that silently
                // never appears.
                <div className="muted small">Waiting on {missingFaces.join(', ')} — a cube map needs all six faces before it draws.</div>
              )}
              {source && <div className="muted small">The bake resamples these six faces into one equirectangular map.</div>}
            </>
          )}

          <h4>clouds</h4>
          <Slot levelId={levelId} slot="clouds" label="cloud image (tiles across)" file={onDisk.clouds?.file ?? sky.clouds.file} onUploaded={uploaded('clouds')} onCleared={cleared('clouds')} />
          {sky.clouds.file && (
            <>
              <div className="row">
                <div className="field"><label>tint</label><input type="color" value={sky.clouds.color} onChange={(e) => setSetting('sky.clouds.color', e.target.value)} /></div>
                <div className="field"><label>opacity</label><Num value={sky.clouds.opacity} step={0.05} min={0} max={1} onCommit={(n) => setSetting('sky.clouds.opacity', n)} /></div>
              </div>
              <div className="row">
                <div className="field"><label>drift (°/min)</label><Num value={sky.clouds.driftDegPerMin} step={0.5} onCommit={(n) => setSetting('sky.clouds.driftDegPerMin', n)} /></div>
                <div className="field"><label>repeat</label><Num value={sky.clouds.repeat} step={0.5} min={0.25} onCommit={(n) => setSetting('sky.clouds.repeat', n)} /></div>
              </div>
              <div className="field">
                <label>dome flattening</label>
                <Num value={sky.clouds.heightScale} step={0.05} min={0.05} max={2} onCommit={(n) => setSetting('sky.clouds.heightScale', n)} />
              </div>
              <div className="muted small">Clouds are additive, so a dark image adds nothing — light shapes on black read best.</div>
            </>
          )}

          <h4>stars</h4>
          <div className="row">
            <div className="field">
              <label>star field</label>
              <select value={sky.stars.enabled ? 'on' : 'off'} onChange={(e) => setSetting('sky.stars.enabled', e.target.value === 'on')}>
                <option value="off">off</option>
                <option value="on">on</option>
              </select>
            </div>
            <div className="field"><label>colour</label><input type="color" value={sky.stars.color} onChange={(e) => setSetting('sky.stars.color', e.target.value)} /></div>
          </div>
          {sky.stars.enabled && (
            <>
              <div className="row">
                <div className="field"><label>density</label><Num value={sky.stars.density} step={0.1} min={0.05} max={8} onCommit={(n) => setSetting('sky.stars.density', n)} /></div>
                <div className="field"><label>brightness</label><Num value={sky.stars.brightness} step={0.1} min={0} onCommit={(n) => setSetting('sky.stars.brightness', n)} /></div>
              </div>
              <div className="row">
                <div className="field"><label>twinkle speed</label><Num value={sky.stars.twinkleSpeed} step={0.1} min={0} onCommit={(n) => setSetting('sky.stars.twinkleSpeed', n)} /></div>
                <div className="field"><label>horizon fade</label><Num value={sky.stars.horizonFade} step={0.05} min={0} max={1} onCommit={(n) => setSetting('sky.stars.horizonFade', n)} /></div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}
