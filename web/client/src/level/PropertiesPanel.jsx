import { useEffect, useState } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { findEntity, ownerOf } from './ids.js';
import { isStatic } from './cells.js';
import { DEFAULT_GROUND } from './ground.js';
import { SkyPanel } from './SkyPanel.jsx';
import { peekPrototype } from '../three/instances.js';

/** A number field that commits on blur / Enter, one undo entry per change. */
function Num({ value, onCommit, step = 0.01, min, max, width = 72 }) {
  const [text, setText] = useState(String(value));
  useEffect(() => { setText(String(+Number(value).toFixed(4))); }, [value]);
  const commit = () => { const n = Number(text); if (Number.isFinite(n) && n !== value) onCommit(n); else setText(String(+Number(value).toFixed(4))); };
  return <input type="number" step={step} min={min} max={max} value={text} style={{ width }} onChange={(e) => setText(e.target.value)} onBlur={commit} onKeyDown={(e) => { if (e.key === 'Enter') e.target.blur(); }} />;
}

function Vec({ label, value, onCommit, step, scale = 1 }) {
  return (
    <div className="field">
      <label>{label}</label>
      <div className="vec">
        {['x', 'y', 'z'].map((axis, i) => (
          <Num key={axis} value={+(value[i] * scale).toFixed(4)} step={step} onCommit={(n) => { const next = [...value]; next[i] = n / scale; onCommit(next); }} />
        ))}
      </div>
    </div>
  );
}

const Tri = ({ label, value, inherit, onChange, hint }) => (
  <div className="field">
    <label>{label}</label>
    <select value={value == null ? 'inherit' : value ? 'on' : 'off'} onChange={(e) => onChange(e.target.value === 'inherit' ? null : e.target.value === 'on')} title={hint}>
      <option value="inherit">auto ({inherit ? 'on' : 'off'})</option>
      <option value="on">on</option>
      <option value="off">off</option>
    </select>
  </div>
);

export function PropertiesPanel() {
  const doc = useLevel((s) => s.doc);
  const selection = useLevel((s) => s.selection);
  const commit = useLevel((s) => s.commit);
  const setSetting = useLevel((s) => s.setSetting);
  const byRef = useLevel((s) => s.catalogue.byRef);
  const [tab, setTab] = useState('object');
  if (!doc) return <aside className="props" />;

  const ids = [...new Set(selection.map(ownerOf))];
  const found = ids.map((id) => findEntity(doc, id)).filter(Boolean);
  const one = found.length === 1 ? found[0] : null;
  const showObject = found.length > 0;

  const edit = (label, fn) => commit(label, (d) => { for (const id of ids) { const f = findEntity(d, id); if (f) fn(f.entity, f.kind, d); } });

  let body = null;
  if (tab === 'sky') {
    body = <SkyPanel Num={Num} />;
  } else if (tab === 'level' || !showObject) {
    const s = doc.settings;
    const ground = { ...DEFAULT_GROUND, ...(s.ground ?? {}) };
    body = (
      <>
        <div className="field"><label>name</label><input value={doc.name} onChange={(e) => commit('rename level', (d) => { d.name = e.target.value; })} /></div>
        <div className="row">
          <div className="field"><label>cell size (m)</label><Num value={s.cellSize} step={1} min={4} onCommit={(n) => setSetting('cellSize', n)} /></div>
          <div className="field"><label>grid (m)</label><Num value={s.gridSize} step={0.5} min={0.1} onCommit={(n) => setSetting('gridSize', n)} /></div>
        </div>
        <h4>ground</h4>
        <div className="row">
          <div className="field">
            <label>ground plane</label>
            <select value={ground.enabled ? 'on' : 'off'} onChange={(e) => setSetting('ground.enabled', e.target.value === 'on')} title="one flat walkable surface under the whole map, baked as one tile per cell">
              <option value="off">none</option>
              <option value="on">on</option>
            </select>
          </div>
          <div className="field"><label>height (m)</label><Num value={ground.y} step={0.25} onCommit={(n) => setSetting('ground.y', n)} /></div>
        </div>
        {ground.enabled && (
          <div className="row">
            <div className="field"><label>colour</label><input type="color" value={ground.color} onChange={(e) => setSetting('ground.color', e.target.value)} /></div>
            <div className="field"><label>margin (m)</label><Num value={ground.margin} step={1} min={0} onCommit={(n) => setSetting('ground.margin', n)} /></div>
          </div>
        )}
        <h4>surface snap</h4>
        <div className="row">
          <div className="field"><label>gap threshold (m)</label><Num value={s.snap.surface.threshold} step={0.05} onCommit={(n) => setSetting('snap.surface.threshold', n)} /></div>
          <div className="field"><label>edge threshold (m)</label><Num value={s.snap.surface.edgeThreshold} step={0.05} onCommit={(n) => setSetting('snap.surface.edgeThreshold', n)} /></div>
        </div>
        <div className="field"><label>angle tolerance (°)</label><Num value={s.snap.surface.angleDeg} step={1} onCommit={(n) => setSetting('snap.surface.angleDeg', n)} /></div>
        <h4>environment</h4>
        <div className="row">
          <div className="field"><label>background</label><input type="color" value={s.environment.background} onChange={(e) => setSetting('environment.background', e.target.value)} /></div>
          <div className="field"><label>ambient intensity</label><Num value={s.environment.hemisphere.intensity} step={0.05} min={0} onCommit={(n) => setSetting('environment.hemisphere.intensity', n)} /></div>
        </div>
        <div className="row">
          <div className="field"><label>sky</label><input type="color" value={s.environment.hemisphere.sky} onChange={(e) => setSetting('environment.hemisphere.sky', e.target.value)} /></div>
          <div className="field"><label>ground</label><input type="color" value={s.environment.hemisphere.ground} onChange={(e) => setSetting('environment.hemisphere.ground', e.target.value)} /></div>
        </div>
        <h4>bake</h4>
        <div className="row">
          <div className="field"><label>lightmap</label><select value={s.lightmap.enabled ? 'on' : 'off'} onChange={(e) => setSetting('lightmap.enabled', e.target.value === 'on')}><option value="on">Blender Cycles</option><option value="off">off</option></select></div>
          <div className="field"><label>atlas size</label><select value={s.lightmap.size} onChange={(e) => setSetting('lightmap.size', Number(e.target.value))}>{[1024, 2048, 4096, 8192].map((v) => <option key={v} value={v}>{v}²</option>)}</select></div>
        </div>
        <div className="row">
          <div className="field"><label>samples</label><Num value={s.lightmap.samples} step={16} min={8} onCommit={(n) => setSetting('lightmap.samples', n)} /></div>
          <div className="field"><label>lightmap intensity</label><Num value={s.lightmap.intensity} step={0.1} min={0} onCommit={(n) => setSetting('lightmap.intensity', n)} /></div>
        </div>
        <div className="row">
          <div className="field"><label>LOD1 distance (m)</label><Num value={s.lod.lod1Distance} step={5} onCommit={(n) => setSetting('lod.lod1Distance', n)} /></div>
          <div className="field"><label>LOD2 distance (m)</label><Num value={s.lod.lod2Distance} step={5} onCommit={(n) => setSetting('lod.lod2Distance', n)} /></div>
        </div>
        <div className="row">
          <div className="field"><label>LOD1 ratio</label><Num value={s.lod.lod1Ratio} step={0.05} min={0.05} max={1} onCommit={(n) => setSetting('lod.lod1Ratio', n)} /></div>
          <div className="field"><label>LOD2 ratio</label><Num value={s.lod.lod2Ratio} step={0.05} min={0.02} max={1} onCommit={(n) => setSetting('lod.lod2Ratio', n)} /></div>
        </div>
        <div className="row">
          <div className="field"><label>colour textures</label><select value={s.textures.colorMode} onChange={(e) => setSetting('textures.colorMode', e.target.value)}><option value="etc1s">ETC1S (small)</option><option value="uastc">UASTC (quality)</option></select></div>
          <div className="field"><label>data textures</label><select value={s.textures.dataMode} onChange={(e) => setSetting('textures.dataMode', e.target.value)}><option value="uastc">UASTC</option><option value="etc1s">ETC1S</option></select></div>
        </div>
      </>
    );
  } else if (one?.kind === 'placement') {
    const p = one.entity;
    const item = byRef[p.ref];
    const proto = item ? peekPrototype(item) : null;
    const autoStatic = isStatic({ ...p, static: null }, item, proto);
    body = (
      <>
        <div className="field"><label>name</label><input value={p.name ?? ''} placeholder={item?.title ?? p.ref} onChange={(e) => edit('rename', (x) => { x.name = e.target.value; })} /></div>
        <div className="muted small mono">{p.ref}{item?.version ? ` @ ${item.version}` : ''}</div>
        {item?.size && <div className="muted small">{item.size.w} × {item.size.h} × {item.size.d} m · {item.stats?.triangles?.toLocaleString?.() ?? '?'} tris · {item.stats?.drawCalls ?? '?'} draw calls</div>}
        <Vec label="position (m)" value={p.position} step={0.05} onCommit={(v) => edit('move', (x) => { x.position = v; })} />
        <Vec label="rotation (°)" value={p.rotation} step={1} scale={180 / Math.PI} onCommit={(v) => edit('rotate', (x) => { x.rotation = v; })} />
        <Vec label="scale" value={p.scale} step={0.05} onCommit={(v) => edit('scale', (x) => { x.scale = v.map((n) => Math.max(0.01, n)); })} />
        <div className="row">
          <Tri label="static (merged in bake)" value={p.static} inherit={autoStatic} onChange={(v) => edit('static', (x) => { x.static = v; })} hint="auto is off for physics props and anything with destruction groups" />
          <Tri label="physics body" value={p.physics} inherit={Boolean(item?.physics?.enabled)} onChange={(v) => edit('physics', (x) => { x.physics = v; })} hint={item?.colliders ? `${item.colliders.parts.length} collider part(s)` : 'no compound'} />
        </div>
        <div className="row">
          <label className="checkline"><input type="checkbox" checked={p.castShadow !== false} onChange={(e) => edit('cast shadow', (x) => { x.castShadow = e.target.checked; })} /> cast shadow</label>
          <label className="checkline"><input type="checkbox" checked={p.receiveShadow !== false} onChange={(e) => edit('receive shadow', (x) => { x.receiveShadow = e.target.checked; })} /> receive shadow</label>
        </div>
        <div className="field"><label>tags</label><input value={(p.tags ?? []).join(', ')} onChange={(e) => edit('tags', (x) => { x.tags = e.target.value.split(',').map((t) => t.trim()).filter(Boolean); })} /></div>
      </>
    );
  } else if (one?.kind === 'light') {
    const l = one.entity;
    body = (
      <>
        <div className="field"><label>name</label><input value={l.name ?? ''} onChange={(e) => edit('rename', (x) => { x.name = e.target.value; })} /></div>
        <div className="muted small">{l.type}{l.role ? ` · ${l.role}` : ''}</div>
        <div className="row">
          <div className="field"><label>colour</label><input type="color" value={l.color} onChange={(e) => edit('light colour', (x) => { x.color = e.target.value; })} /></div>
          <div className="field"><label>intensity</label><Num value={l.intensity} step={0.1} min={0} onCommit={(n) => edit('intensity', (x) => { x.intensity = n; })} /></div>
        </div>
        <Vec label="position (m)" value={l.position} step={0.5} onCommit={(v) => edit('move light', (x) => { x.position = v; })} />
        {l.direction && <Vec label="direction" value={l.direction} step={0.05} onCommit={(v) => edit('aim light', (x) => { const len = Math.hypot(...v) || 1; x.direction = v.map((n) => n / len); })} />}
        {l.type !== 'directional' && (
          <div className="row">
            <div className="field"><label>range (m, 0 = ∞)</label><Num value={l.distance ?? 0} step={0.5} min={0} onCommit={(n) => edit('range', (x) => { x.distance = n; })} /></div>
            <div className="field"><label>decay</label><Num value={l.decay ?? 2} step={0.1} min={0} onCommit={(n) => edit('decay', (x) => { x.decay = n; })} /></div>
          </div>
        )}
        {l.type === 'spot' && (
          <div className="row">
            <div className="field"><label>cone (°)</label><Num value={+THREE.MathUtils.radToDeg(l.angle ?? Math.PI / 6).toFixed(1)} step={1} min={1} max={89} onCommit={(n) => edit('cone', (x) => { x.angle = THREE.MathUtils.degToRad(n); })} /></div>
            <div className="field"><label>penumbra</label><Num value={l.penumbra ?? 0} step={0.05} min={0} max={1} onCommit={(n) => edit('penumbra', (x) => { x.penumbra = n; })} /></div>
          </div>
        )}
        <div className="row">
          <label className="checkline"><input type="checkbox" checked={l.enabled !== false} onChange={(e) => edit('enable light', (x) => { x.enabled = e.target.checked; })} /> enabled</label>
          <label className="checkline"><input type="checkbox" checked={Boolean(l.castShadow)} onChange={(e) => edit('cast shadow', (x) => { x.castShadow = e.target.checked; })} /> cast shadow</label>
        </div>
        {l.castShadow && (
          <div className="row">
            <div className="field"><label>shadow map</label><select value={l.shadow?.mapSize ?? 1024} onChange={(e) => edit('shadow map', (x) => { x.shadow = { ...x.shadow, mapSize: Number(e.target.value) }; })}>{[512, 1024, 2048, 4096].map((v) => <option key={v} value={v}>{v}</option>)}</select></div>
            {l.type === 'directional' && <div className="field"><label>shadow extent (m)</label><Num value={l.shadow?.extent ?? 60} step={5} min={5} onCommit={(n) => edit('shadow extent', (x) => { x.shadow = { ...x.shadow, extent: n }; })} /></div>}
          </div>
        )}
      </>
    );
  } else if (one?.kind === 'spawn') {
    const s = one.entity;
    body = (
      <>
        <div className="field"><label>name</label><input value={s.name} onChange={(e) => edit('rename spawn', (x) => { x.name = e.target.value.replace(/[^a-z0-9_-]/gi, '') || 'spawn'; })} /></div>
        <Vec label="position (m)" value={s.position} step={0.5} onCommit={(v) => edit('move spawn', (x) => { x.position = v; })} />
        <div className="row">
          <div className="field"><label>yaw (°)</label><Num value={s.yawDeg ?? 0} step={15} onCommit={(n) => edit('yaw', (x) => { x.yawDeg = n; })} /></div>
          <div className="field"><label>team</label><input value={s.team ?? ''} onChange={(e) => edit('team', (x) => { x.team = e.target.value || null; })} /></div>
        </div>
      </>
    );
  } else {
    const placements = found.filter((f) => f.kind === 'placement');
    body = (
      <>
        <div className="muted">{found.length} selected</div>
        {placements.length > 0 && (
          <>
            <Tri label="static" value={placements.every((f) => f.entity.static === placements[0].entity.static) ? placements[0].entity.static : null} inherit onChange={(v) => edit('static', (x, k) => { if (k === 'placement') x.static = v; })} />
            <label className="checkline"><input type="checkbox" checked={placements.every((f) => f.entity.castShadow !== false)} onChange={(e) => edit('cast shadow', (x, k) => { if (k === 'placement') x.castShadow = e.target.checked; })} /> cast shadow</label>
          </>
        )}
      </>
    );
  }

  return (
    <aside className="props">
      <div className="tabs sub">
        <span className={`tab ${tab === 'object' && showObject ? 'on' : ''}`} onClick={() => setTab('object')}>object</span>
        <span className={`tab ${(tab === 'level' || !showObject) && tab !== 'sky' ? 'on' : ''}`} onClick={() => setTab('level')}>level</span>
        <span className={`tab ${tab === 'sky' ? 'on' : ''}`} onClick={() => setTab('sky')}>sky</span>
      </div>
      <div className="content">{body}</div>
    </aside>
  );
}
