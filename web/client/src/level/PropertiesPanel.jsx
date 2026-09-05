import { useEffect, useState } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { findEntity, ownerOf } from './ids.js';
import { expandIds, groupMap, isGroupId, selectionRoots } from './groups.js';
import { centroidOf, groupRotationOf, setGroupRotation, translateLeaves } from './groupTransform.js';
import { isStatic } from './cells.js';
import { isBillboard } from '@thai-kit/level-runtime/billboard';
import { DEFAULT_GROUND } from './ground.js';
import { skyOf, skyIsActive } from './sky.js';
import { DEFAULT_SETTINGS } from './defaults.js';
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
          <Num key={axis} value={+(value[i] * scale).toFixed(scale === 1 ? 4 : 2)} step={step} onCommit={(n) => { const next = [...value]; next[i] = n / scale; onCommit(next); }} />
        ))}
      </div>
    </div>
  );
}

const Tri = ({ label, value, inherit, onChange, hint, disabled = false }) => (
  <div className="field">
    <label>{label}</label>
    <select
      value={value == null ? 'inherit' : value ? 'on' : 'off'}
      onChange={(e) => onChange(e.target.value === 'inherit' ? null : e.target.value === 'on')}
      title={hint}
      disabled={disabled}
    >
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

  // A selected group stands for its members: the fields below edit the whole
  // assembly, and the group itself contributes only its name.
  const roots = selectionRoots(doc, selection.map(ownerOf));
  const selectedGroups = roots.filter(isGroupId).map((id) => groupMap(doc).get(id)).filter(Boolean);
  const ids = expandIds(doc, roots);
  const found = ids.map((id) => findEntity(doc, id)).filter(Boolean);
  const one = found.length === 1 && !selectedGroups.length ? found[0] : null;
  const showObject = found.length > 0 || selectedGroups.length > 0;

  const edit = (label, fn) => commit(label, (d) => { for (const id of ids) { const f = findEntity(d, id); if (f) fn(f.entity, f.kind, d); } });

  let body = null;
  if (tab === 'sky') {
    body = <SkyPanel Num={Num} />;
  } else if (tab === 'level' || !showObject) {
    const s = doc.settings;
    const ground = { ...DEFAULT_GROUND, ...(s.ground ?? {}) };
    // A project saved before image lighting existed has no `environment.ibl`.
    const ibl = { ...DEFAULT_SETTINGS.environment.ibl, ...(s.environment?.ibl ?? {}) };
    /*
      The hemisphere ramp is the FALLBACK, so it is only shown when it is what
      the level is actually lit by.

      With a sky picture up and image lighting on, nothing reads these: the
      viewport retires the HemisphereLight, `buildEnvironment` prefilters the
      sky dome and never reaches the `else if (hemisphere)` branch, and the
      bake is lit by the same faces. Leaving three live-looking dials in front
      of a level they cannot change is worse than not offering them -- the
      brightness dial that DOES work in this configuration is the sky's own
      intensity, on the sky tab, with IBL intensity as the trim below.
    */
    const litByHemisphere = !ibl.enabled || !skyIsActive(skyOf(doc));
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
        <div className="row">
          <div className="field"><label>angle tolerance (°)</label><Num value={s.snap.surface.angleDeg} step={1} onCommit={(n) => setSetting('snap.surface.angleDeg', n)} /></div>
          <div className="field"><label>climb (m)</label><Num value={s.snap.surface.climb ?? 2} step={0.25} min={0} onCommit={(n) => setSetting('snap.surface.climb', n)} title="while moving, an object rests on whatever is beneath it and may step up onto anything this much higher; it drops any distance" /></div>
        </div>
        <h4>environment</h4>
        <div className="row">
          <div className="field"><label>background</label><input type="color" value={s.environment.background} onChange={(e) => setSetting('environment.background', e.target.value)} /></div>
        </div>
        {litByHemisphere ? (
          <>
            <div className="row">
              <div className="field"><label>ambient intensity</label><Num value={s.environment.hemisphere.intensity} step={0.05} min={0} onCommit={(n) => setSetting('environment.hemisphere.intensity', n)} /></div>
              <div className="field muted" style={{ alignSelf: 'end', fontSize: 11 }}>
                {ibl.enabled ? 'the fallback ramp — this level has no sky picture' : 'image lighting is off, so this ramp is the ambient'}
              </div>
            </div>
            <div className="row">
              <div className="field"><label>sky</label><input type="color" value={s.environment.hemisphere.sky} onChange={(e) => setSetting('environment.hemisphere.sky', e.target.value)} /></div>
              <div className="field"><label>ground</label><input type="color" value={s.environment.hemisphere.ground} onChange={(e) => setSetting('environment.hemisphere.ground', e.target.value)} /></div>
            </div>
          </>
        ) : (
          <div className="muted small">ambient comes from the sky &mdash; its brightness is <b>intensity</b> on the sky tab, trimmed by IBL intensity below</div>
        )}
        <div className="row">
          <div className="field">
            <label>image lighting</label>
            <select value={ibl.enabled ? 'on' : 'off'} onChange={(e) => setSetting('environment.ibl.enabled', e.target.value === 'on')}>
              <option value="on">from the sky</option>
              <option value="off">off — hemisphere only</option>
            </select>
          </div>
          <div className="field"><label>IBL intensity</label><Num value={ibl.intensity} step={0.05} min={0} onCommit={(n) => setSetting('environment.ibl.intensity', n)} /></div>
        </div>
        <div className="row">
          <div className="field">
            <label>probe size</label>
            <select value={ibl.size} onChange={(e) => setSetting('environment.ibl.size', Number(e.target.value))}>
              {[64, 128, 256, 512].map((v) => <option key={v} value={v}>{v}² — {(3 * Math.max(v, 112) * 4 * v * 8 / 1048576).toFixed(1)} MB</option>)}
            </select>
          </div>
          <div className="field muted" style={{ alignSelf: 'end', fontSize: 11 }}>
            reflections and ambient specular, prefiltered from this level&rsquo;s sky
          </div>
        </div>
        <h4>bake</h4>
        <div className="row">
          <div className="field"><label>lightmap</label><select value={s.lightmap.enabled ? 'on' : 'off'} onChange={(e) => setSetting('lightmap.enabled', e.target.value === 'on')}><option value="on">Blender Cycles</option><option value="off">off</option></select></div>
          <div className="field"><label>atlas max</label><select value={s.lightmap.size} onChange={(e) => setSetting('lightmap.size', Number(e.target.value))}>{[1024, 2048, 4096, 8192].map((v) => <option key={v} value={v}>{v}²</option>)}</select></div>
        </div>
        <div className="row">
          {/*
            The atlas size is DERIVED from this: the bake measures the UV area
            each metre of surface actually got and picks the smallest power of
            two that delivers it, capped by "atlas max". So this is the dial
            that decides lightmap sharpness, and the select above only bounds
            what it may spend.
          */}
          <div className="field"><label>texels / metre</label><Num value={s.lightmap.texelsPerMeter ?? 8} step={1} min={1} onCommit={(n) => setSetting('lightmap.texelsPerMeter', n)} /></div>
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
          <Tri
            label={isBillboard(p.billboard) ? 'static (forced off)' : 'static (merged in bake)'}
            value={p.static}
            inherit={autoStatic}
            disabled={isBillboard(p.billboard)}
            onChange={(v) => edit('static', (x) => { x.static = v; })}
            hint={isBillboard(p.billboard)
              ? 'a billboard turns every frame, so it can never be merged into a cell'
              : 'auto is off for physics props and anything with destruction groups'}
          />
          <Tri label="physics body" value={p.physics} inherit={Boolean(item?.physics?.enabled)} onChange={(v) => edit('physics', (x) => { x.physics = v; })} hint={item?.colliders ? `${item.colliders.parts.length} collider part(s)` : 'no compound'} />
        </div>
        <div className="row">
          <label className="checkline"><input type="checkbox" checked={p.castShadow !== false} onChange={(e) => edit('cast shadow', (x) => { x.castShadow = e.target.checked; })} /> cast shadow</label>
          <label className="checkline"><input type="checkbox" checked={p.receiveShadow !== false} onChange={(e) => edit('receive shadow', (x) => { x.receiveShadow = e.target.checked; })} /> receive shadow</label>
        </div>
        <div className="row">
          <label className="checkline" title="turn to face the camera every frame">
            <input
              type="checkbox"
              checked={isBillboard(p.billboard)}
              onChange={(e) => edit('billboard', (x) => { x.billboard = e.target.checked ? 'yaw' : 'none'; })}
            /> billboard
          </label>
          {isBillboard(p.billboard) && (
            <div className="field">
              <label>facing</label>
              <select
                value={p.billboard}
                onChange={(e) => edit('billboard axis', (x) => { x.billboard = e.target.value; })}
                title="yaw keeps the object upright and planted; full aligns it to the screen like a sprite"
              >
                <option value="yaw">upright (Y axis)</option>
                <option value="full">screen-aligned</option>
              </select>
            </div>
          )}
        </div>
        {isBillboard(p.billboard) && (
          <div className="muted small">
            The camera drives the facing, so the rotation above no longer aims it. A billboard is
            never merged into a cell — it bakes as a dynamic object.
          </div>
        )}
        <div className="row">
          <label className="checkline" title="a climbable surface in play mode -- walk into it and hold W, or tap Space to climb faster">
            <input
              type="checkbox"
              checked={(p.tags ?? []).includes('ladder')}
              onChange={(e) => edit('ladder', (x) => {
                // The tag IS the flag, so the free-text field below stays the
                // one source of truth and the two can never disagree.
                const tags = new Set(x.tags ?? []);
                if (e.target.checked) tags.add('ladder'); else tags.delete('ladder');
                x.tags = [...tags];
              })}
            /> ladder
          </label>
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
        {l.type !== 'directional' && (
          <div className="muted small">baked into the lightmap on static geometry (direct light, shadows and bounce); live only on dynamic objects, which is the only place range and decay apply</div>
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
            {l.role === 'moon' && <div className="field"><label title="the moon's angular diameter, which is how wide the BAKED shadow edge is on static geometry (Cycles' sun angle). The real moon is 0.5°; 3-6° reads as soft moonlight. Not previewed live: the editor's shadow map cannot show it, and a smaller map only fakes it">soft edge (°, baked)</label><Num value={l.shadow?.softDeg ?? 1.5} step={0.5} min={0} max={45} onCommit={(n) => edit('shadow softness', (x) => { x.shadow = { ...x.shadow, softDeg: n }; })} /></div>}
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
    // A group or a multi-select has no transform node, so its position is the
    // centroid of its members -- the point the gizmo turns them about -- and
    // editing it moves them all by the difference. The rotation field is a
    // single group's remembered turn; see groupTransform.js.
    const centroid = centroidOf(doc, ids);
    const group = selectedGroups.length === 1 ? selectedGroups[0] : null;
    const what = group ? `group “${group.name}”` : `${found.length} objects`;
    body = (
      <>
        <div className="muted">{found.length} selected</div>
        {centroid && (
          <Vec
            label="position (m)"
            value={centroid}
            step={0.05}
            onCommit={(v) => commit(`move ${what}`, (d) => translateLeaves(d, ids, v.map((n, i) => n - centroid[i])))}
          />
        )}
        {group && (
          <Vec
            label="rotation (°)"
            value={groupRotationOf(group)}
            step={1}
            scale={180 / Math.PI}
            onCommit={(v) => commit(`rotate ${what}`, (d) => setGroupRotation(d, group, ids, v))}
          />
        )}
        {centroid && (
          <div className="muted small">
            position is the centre of the members; {group ? 'rotation turns them about it and remembers every turn given to the group' : 'editing it moves them together'}
          </div>
        )}
        {placements.length > 0 && (
          <>
            <Tri label="static" value={placements.every((f) => f.entity.static === placements[0].entity.static) ? placements[0].entity.static : null} inherit onChange={(v) => edit('static', (x, k) => { if (k === 'placement') x.static = v; })} />
            <label className="checkline"><input type="checkbox" checked={placements.every((f) => f.entity.castShadow !== false)} onChange={(e) => edit('cast shadow', (x, k) => { if (k === 'placement') x.castShadow = e.target.checked; })} /> cast shadow</label>
          </>
        )}
      </>
    );
  }

  // The group's own row: a name, what it holds, and the way out of it. Shown
  // above whatever the members' fields turn out to be.
  const groupHeader = tab === 'object' && showObject && selectedGroups.length > 0 && (
    <>
      <h4>{selectedGroups.length === 1 ? 'group' : `${selectedGroups.length} groups`}</h4>
      {selectedGroups.length === 1 && (
        <div className="field">
          <label>name</label>
          <input
            value={selectedGroups[0].name}
            onChange={(e) => commit('rename group', (d) => { const g = (d.groups ?? []).find((x) => x.id === selectedGroups[0].id); if (g) g.name = e.target.value; })}
          />
        </div>
      )}
      <div className="muted small">
        {selectedGroups.reduce((n, g) => n + g.children.length, 0)} direct member
        {selectedGroups.reduce((n, g) => n + g.children.length, 0) === 1 ? '' : 's'}, {ids.length} object
        {ids.length === 1 ? '' : 's'} in all. Joined only in the editor — nothing is merged.
      </div>
      <button onClick={() => useLevel.getState().unjoinSelection()} title="dissolve the group — Ctrl+Shift+G">unjoin</button>
    </>
  );

  return (
    <aside className="props">
      <div className="tabs sub">
        <span className={`tab ${tab === 'object' && showObject ? 'on' : ''}`} onClick={() => setTab('object')}>object</span>
        <span className={`tab ${(tab === 'level' || !showObject) && tab !== 'sky' ? 'on' : ''}`} onClick={() => setTab('level')}>level</span>
        <span className={`tab ${tab === 'sky' ? 'on' : ''}`} onClick={() => setTab('sky')}>sky</span>
      </div>
      <div className="content">{groupHeader}{body}</div>
    </aside>
  );
}
