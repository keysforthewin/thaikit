import { useCallback, useEffect, useRef, useState } from 'react';

import { useLevel } from './store.js';
import { levelsApi } from '../api.js';
import { CUBE_FACES, skyOf, baseSource, measurePanorama } from './sky.js';

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

/**
 * Six faces at once, out of a zip.
 *
 * Nothing anybody downloads or generates is called `px.png` -- a skybox ships
 * as six files named `_right`, `_left`, `_up`, `_down`, `_front`, `_back`, and
 * picking them one by one through six file dialogs is six chances to put the
 * left face on the right. The server does the mapping, re-encodes each face to
 * webp and answers with the filenames, which land on the setting here exactly
 * the way a single-face upload does -- so undo still walks back through the
 * previous faces, and the files stay where they were written.
 */
function CubeZip({ levelId, onImported }) {
  const input = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [detail, setDetail] = useState(null);
  const [info, setInfo] = useState(null);

  const send = async (chosen) => {
    if (!chosen) return;
    setBusy(true);
    setError(null);
    setDetail(null);
    try {
      const r = await levelsApi.sky.uploadCubeZip(levelId, chosen);
      const bytes = Object.values(r.slots).reduce((n, s) => n + s.bytes, 0);
      const size = bytes >= 1e6 ? `${(bytes / 1e6).toFixed(1)} MB` : `${Math.round(bytes / 1e3)} kB`;
      setInfo(`6 faces · ${r.size}² · ${size} webp`);
      onImported(r);
    } catch (err) {
      setError(err.message);
      const b = err.body ?? {};
      setDetail(b.faces ?? (b.missing ? [`found ${(b.found ?? []).join(', ') || 'nothing'}; the zip holds ${(b.entries ?? []).join(', ')}`] : null));
    } finally {
      setBusy(false);
    }
  };

  const pick = async (e) => {
    const chosen = e.target.files?.[0];
    e.target.value = '';
    await send(chosen);
  };

  const drop = async (e) => {
    e.preventDefault();
    setDragging(false);
    if (busy || !levelId) return;
    await send(e.dataTransfer?.files?.[0]);
  };

  return (
    <div className="field">
      <label>all six from a zip</label>
      <div
        className="row"
        style={{ gap: 6, alignItems: 'center', outline: dragging ? '1px dashed var(--accent)' : 'none', outlineOffset: 3 }}
        onDragOver={(e) => { e.preventDefault(); if (!busy && levelId) setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={drop}
      >
        <button
          onClick={() => input.current?.click()}
          disabled={busy || !levelId}
          title="a .zip of six images named _right, _left, _up, _down, _front, _back — or drop one here"
        >
          {busy ? 'importing…' : 'import zip…'}
        </button>
        <span className="muted small mono" style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{dragging ? 'drop it' : (info ?? 'PNG/JPEG/WebP → webp')}</span>
      </div>
      <div className="muted small">
        Files ending <code>_right _left _up _down _front _back</code> (any prefix, and <code>_top</code>/<code>_bottom</code>
        for the poles). They are re-encoded to WebP — six 2048² PNGs are ~50 MB the editor re-fetches on every load.
        <code>_front</code> is −Z, three's own convention. If a pack turns out to have meant the other one the sky is a
        half turn out with a seam down each vertical join, which <em>rotation</em> above fixes.
      </div>
      {error && <div className="small" style={{ color: '#e2686d' }}>{error}</div>}
      {detail?.map((d) => <div key={d} className="small mono" style={{ color: '#e2686d' }}>{d}</div>)}
      <input ref={input} type="file" accept=".zip" style={{ display: 'none' }} onChange={pick} />
    </div>
  );
}

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
      // The file itself, not just the server's answer: a panorama is measured
      // in the browser at upload time and the numbers recorded on the setting.
      await onUploaded(r, chosen);
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

  const uploaded = (slot) => async (r, blob) => {
    setOnDisk((s) => ({ ...s, [slot]: { file: r.file, bytes: r.bytes } }));
    bumpSky();
    if (slot === 'clouds') setSetting('sky.clouds.file', r.file);
    else if (slot === 'panorama') {
      setSetting('sky.base.panorama', r.file);
      // Coverage and horizon colour, measured once and stored. If the browser
      // cannot decode it the bake measures instead -- a worse answer only
      // because the preview then cannot show the same one.
      try {
        const m = await measurePanorama(blob, { startDeg: sky.base.nadir?.startDeg ?? 0 });
        setSetting('sky.base.elevation', m.elevation);
        setSetting('sky.base.nadir', { ...sky.base.nadir, color: m.nadirColor });
      } catch { /* the bake falls back to measuring it itself */ }
    } else setSetting('sky.base.faces', { ...(sky.base.faces ?? {}), [slot]: r.file });
  };

  /** Six slots written at once: mirror them into onDisk and onto the setting. */
  const importedZip = (r) => {
    setOnDisk((s) => {
      const next = { ...s };
      for (const [slot, v] of Object.entries(r.slots)) next[slot] = { file: v.file, bytes: v.bytes };
      return next;
    });
    bumpSky();
    setSetting(
      'sky.base.faces',
      Object.fromEntries(Object.entries(r.slots).map(([slot, v]) => [slot, v.file])),
    );
  };

  const cleared = (slot) => () => {
    setOnDisk((s) => { const next = { ...s }; delete next[slot]; return next; });
    bumpSky();
    if (slot === 'clouds') setSetting('sky.clouds.file', null);
    else if (slot === 'panorama') {
      setSetting('sky.base.panorama', null);
      setSetting('sky.base.nadir', { ...sky.base.nadir, color: null });
    } else {
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
                <option value="panoramic">panoramic (ships as a cubemap)</option>
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
          {mode === 'panoramic' && (
            <>
              <Slot
                levelId={levelId}
                slot="panorama"
                label="panorama (2:1 sphere, or 4:1 sky only)"
                file={onDisk.panorama?.file ?? sky.base.panorama}
                onUploaded={uploaded('panorama')}
                onCleared={cleared('panorama')}
              />
              <div className="muted small">
                A ground-level 360° panorama. The rows are read as{' '}
                {sky.base.elevation?.minDeg ?? -90}°..{sky.base.elevation?.maxDeg ?? 90}° of elevation.{' '}
                {sky.base.nadir?.mode === 'cut' ? (
                  <>
                    The cube ships with <strong>no floor</strong>: everything below the horizon is the ground colour
                    outright, so the panorama rings the level instead of drawing a second city underneath it.
                  </>
                ) : (
                  <>
                    The ground the panorama does not have is faded in below the horizon
                    {sky.base.nadir?.color ? (
                      <>
                        {' '}at <code>{sky.base.nadir.color}</code>, measured off its own horizon
                      </>
                    ) : ' at a colour the bake measures'}.
                  </>
                )}
                {' '}Resampled into a cubemap here the moment it loads — the editor never samples the panorama
                itself, which is what an unmipped 8192-wide plate across a full-screen dome costs. It ships as a
                single KTX2 cubemap with a full mip chain and no equirect pole to collapse, and the preview is built at
                the same 2048 ceiling the bake uses — what you see here is what ships. Face size is the panorama's
                width ÷ 4, so only a plate 8192 or wider resolves the full 22.8 px/deg.
              </div>
              <div className="muted small">
                <strong>spans</strong> is what de-stretches a backdrop. It says which elevations the panorama's FIRST
                and LAST rows sit at, and the dome maps the image between them — so a 2:1 plate read as −90..90 has its
                rows spread over the whole sphere, and every building is twice as tall as the same plate read as 0..90.
                A ring of city around a level wants the top half of the dome (<code>0..90</code>) with the ground cut;
                a plate that genuinely looks down wants the sphere. This is independent of the ground control: the
                ground decides what is BELOW the horizon, spans decides how tall what is above it looks.
              </div>
              <div className="row">
                <div className="field">
                  <label>spans from (°)</label>
                  <Num
                    value={sky.base.elevation?.minDeg ?? -90}
                    step={5}
                    min={-90}
                    max={90}
                    onCommit={(n) => setSetting('sky.base.elevation', { ...sky.base.elevation, minDeg: n })}
                    title="elevation of the panorama's LAST row. 0 wraps it around the top half of the dome only"
                  />
                </div>
                <div className="field">
                  <label>to (°)</label>
                  <Num
                    value={sky.base.elevation?.maxDeg ?? 90}
                    step={5}
                    min={-90}
                    max={90}
                    onCommit={(n) => setSetting('sky.base.elevation', { ...sky.base.elevation, maxDeg: n })}
                    title="elevation of the panorama's FIRST row; 90 is the zenith"
                  />
                </div>
                <div className="field">
                  <label />
                  <button
                    type="button"
                    onClick={() => {
                      setSetting('sky.base.elevation', { minDeg: 0, maxDeg: 90 });
                      setSetting('sky.base.nadir', { ...sky.base.nadir, mode: 'cut' });
                    }}
                    title="wrap the panorama around the upper hemisphere alone and cut the floor"
                  >
                    top half only
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="field">
                  <label>ground colour</label>
                  <input
                    type="color"
                    value={sky.base.nadir?.color ?? '#192027'}
                    onChange={(e) => setSetting('sky.base.nadir', { ...sky.base.nadir, color: e.target.value })}
                    title="measured off the panorama's horizon at upload; override it here"
                  />
                </div>
                <div className="field">
                  <label>ground</label>
                  <select
                    value={sky.base.nadir?.mode ?? 'fade'}
                    onChange={(e) => setSetting('sky.base.nadir', { ...sky.base.nadir, mode: e.target.value })}
                    title="cut ends the panorama at the horizon: no floor in the cubemap at all"
                  >
                    <option value="fade">fade below</option>
                    <option value="cut">cut at horizon</option>
                  </select>
                </div>
                {(sky.base.nadir?.mode ?? 'fade') === 'fade' ? (
                  <div className="field">
                    <label>fade from (°)</label>
                    <Num
                      value={sky.base.nadir?.startDeg ?? 0}
                      step={1}
                      min={0}
                      max={90}
                      onCommit={(n) => setSetting('sky.base.nadir', { ...sky.base.nadir, startDeg: n })}
                    />
                  </div>
                ) : null}
                <div className="field">
                  <label>sharpness</label>
                  <Num
                    value={sky.base.lodBias ?? -0.5}
                    step={0.25}
                    min={-4}
                    max={4}
                    onCommit={(n) => setSetting('sky.base.lodBias', n)}
                    title="mip bias in levels; negative is sharper. -0.5 measured best against a supersampled reference"
                  />
                </div>
                <div className="field">
                  <label>fade to (°)</label>
                  <Num
                    value={sky.base.nadir?.endDeg ?? 8}
                    step={1}
                    min={0}
                    max={90}
                    onCommit={(n) => setSetting('sky.base.nadir', { ...sky.base.nadir, endDeg: n })}
                  />
                </div>
              </div>
              <div className="muted small">
                Degrees BELOW the horizon. 0 is the default and means the image fills the top half of the dome and
                nothing else — raise it only to let a panorama that really does have ground show some of it.
              </div>
            </>
          )}
          {mode === 'cube' && (
            <>
              <CubeZip levelId={levelId} onImported={importedZip} />
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
