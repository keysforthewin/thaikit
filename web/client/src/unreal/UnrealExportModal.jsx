import { useEffect, useRef, useState } from 'react';

import { Modal } from '../level/Modal.jsx';
import { useReadOnly } from '../readOnly.js';
import { unrealApi } from '../api.js';
import { url } from '../base.js';
import { evictUnused } from '../three/instances.js';
import { buildPropGlb, packFolder } from './propGlb.js';
import { zipStore } from './zip.js';
import { unrealReadme } from './readme.js';

const TEXTURE_SIZES = [512, 1024, 2048, 4096];

const fmtMb = (n) => `${(n / 1048576).toFixed(1)} MB`;

/**
 * Export every buildable prop as an Unreal-ready GLB, zipped, with a manifest.
 *
 * Runs in the BROWSER for the same reason the level bake starts there: the
 * props' textures are canvases that exist only in a page. Each prototype is
 * built once through the same cache the level editor uses, flattened into one
 * mesh (see propGlb.js), and the lot is zipped client-side. The zip downloads
 * always; when this instance is writable it is also PUT to the server, which
 * unpacks it into exports/unreal/ so an Unreal project on the same machine can
 * import straight from the repo.
 */
export function UnrealExportModal({ packs, items, onClose, initialRefs = null }) {
  const { readOnly } = useReadOnly();
  const packRows = packs.filter((p) => items.some((it) => it.pack === p.id && it.supported));
  // null means "every pack": the catalogue arrives AFTER the modal mounts, so a
  // Set built at first render would be empty for good.
  const [picked, setPicked] = useState(null);
  const selected = picked ?? new Set(packRows.map((p) => p.id));
  const [maxTextureSize, setMaxTextureSize] = useState(2048);
  const [collision, setCollision] = useState(true);
  const [imposters, setImposters] = useState(true);
  const [saveToServer, setSaveToServer] = useState(true);
  // Which props: `chosen` is a Set of refs, or null for every prop the pack and
  // imposter switches let through. The drawer's button opens this preselected
  // to one ref; the filter box narrows what the list SHOWS, never what it exports.
  const [chosen, setChosen] = useState(() => (initialRefs?.length ? new Set(initialRefs) : null));
  const [filter, setFilter] = useState('');
  const [busy, setBusy] = useState(false);
  const [progress, setProgress] = useState(null);
  const [log, setLog] = useState([]);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [server, setServer] = useState(null);
  const abortRef = useRef(false);
  const logRef = useRef(null);

  useEffect(() => { unrealApi.status().then(setServer).catch(() => setServer(null)); }, []);
  useEffect(() => { logRef.current?.scrollTo(0, logRef.current.scrollHeight); }, [log]);
  useEffect(() => () => { abortRef.current = true; }, []);

  const pool = items.filter((it) =>
    it.supported && selected.has(it.pack) && (imposters || !(it.tags ?? []).includes('imposter')));
  const needle = filter.trim().toLowerCase();
  const matches = (it) => !needle || [it.title, it.name, it.ref, it.category, ...(it.tags ?? [])].some((s) => String(s ?? '').toLowerCase().includes(needle));
  const shown = pool.filter(matches);
  const candidates = pool.filter((it) => !chosen || chosen.has(it.ref));
  // Anything short of every supported prop is MERGED into exports/unreal/ rather
  // than replacing it, so a one-building re-export keeps the other 153 on disk.
  const partial = candidates.length < items.filter((it) => it.supported).length;

  const toggle = (id) => { const n = new Set(selected); if (n.has(id)) n.delete(id); else n.add(id); setPicked(n); };
  const toggleItem = (ref) => {
    const n = new Set(chosen ?? pool.map((it) => it.ref));
    if (n.has(ref)) n.delete(ref); else n.add(ref);
    setChosen(n);
  };
  const chooseShown = (on) => {
    const n = new Set(chosen ?? pool.map((it) => it.ref));
    for (const it of shown) { if (on) n.add(it.ref); else n.delete(it.ref); }
    setChosen(n);
  };

  const run = async () => {
    setBusy(true); setError(null); setResult(null); setLog([]); abortRef.current = false;
    const started = performance.now();
    const generatedAt = new Date().toISOString();
    const entries = [];
    const manifestItems = [];
    const failures = [];
    let bytes = 0;
    try {
      for (const [i, item] of candidates.entries()) {
        if (abortRef.current) throw new Error('cancelled');
        setProgress({ i: i + 1, n: candidates.length, name: item.title ?? item.name });
        const folder = packFolder(item.pack);
        try {
          const built = await buildPropGlb(item, { maxTextureSize, collision });
          const file = `${folder}/${built.asset}.glb`;
          entries.push({ name: file, data: built.glb });
          bytes += built.glb.byteLength;
          const previewUrl = item.thumb ?? item.image;
          if (previewUrl) {
            try {
              const res = await fetch(previewUrl);
              if (res.ok) {
                const ext = (res.headers.get('content-type') ?? '').includes('jpeg') ? 'jpg' : (res.headers.get('content-type') ?? '').includes('png') ? 'png' : 'webp';
                entries.push({ name: `_previews/${folder}/${built.asset}.${ext}`, data: await res.arrayBuffer() });
              }
            } catch { /* a missing thumbnail is not a failed export */ }
          }
          manifestItems.push({
            ref: item.ref, pack: item.pack, name: item.name, asset: built.asset, file, folder,
            title: item.title, nameTh: item.nameTh || null, description: item.description || '',
            category: item.category, tags: item.tags ?? [],
            size: item.size ?? null, bbox: built.bbox,
            placement: item.placement ?? ['floor'], pivot: item.pivot ?? 'base-center',
            physics: item.physics ?? { enabled: false, massKg: null },
            pivots: item.pivots ?? [], sockets: item.sockets ?? [],
            triangles: built.triangles, materialSlots: built.materials, collisionParts: built.collision,
            // Slots that stay translucent (BLEND); Nanite must be OFF for these to render.
            translucentSlots: built.translucentSlots,
            // Emissive surfaces in root-local metres: where the Unreal lights go.
            emitters: built.emitters,
            // The compound as shipped, so a level exported BACK from Unreal can
            // rebuild the same colliders from the mesh name alone.
            colliders: (item.colliders?.parts ?? []).map((c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) })),
            destructionGroups: item.destructionGroups ?? [],
            budgetClass: item.budgetClass ?? null,
          });
          setLog((l) => [...l.slice(-400), { ok: true, text: `${built.asset}  ${built.triangles} tris · ${built.materials} slot(s) · ${built.collision} collider(s)${built.emitters.length ? ` · ${built.emitters.length} emitter(s)` : ''}${built.translucentSlots.length ? ` · ${built.translucentSlots.length} translucent slot(s), Nanite off` : ''} · ${fmtMb(built.glb.byteLength)}` }]);
        } catch (err) {
          failures.push({ ref: item.ref, error: err.message });
          setLog((l) => [...l.slice(-400), { ok: false, text: `${item.ref}: ${err.message}` }]);
        }
        // Keep the GPU honest: a hundred prototypes built back to back is what
        // exhausted the pack previewer around item sixty.
        if (i % 8 === 7) evictUnused(new Set());
      }
      evictUnused(new Set());

      const packIds = [...selected].filter((id) => manifestItems.some((m) => m.pack === id));
      const manifest = {
        schema: 'thaikit-unreal-export/1',
        generatedAt,
        source: window.location.origin + url('/'),
        options: { maxTextureSize, collision, imposters },
        units: { length: 'm (glTF); Unreal imports at 100 uu per metre', up: '+Y in the file, +Z after import' },
        naming: { staticMesh: 'SM_<Pack>_<Prop>', collision: 'UCX_<StaticMesh>_NN', material: 'M_<Pack>_<Prop>_<slot>' },
        emitters: 'per item: every emissive material slot with its root-local centre (m), extent (m), colour, shape panel|bulb -- place a light there',
        packs: packIds.map((id) => { const p = packs.find((k) => k.id === id); return { id, version: p?.version ?? null, folder: packFolder(id) }; }),
        items: manifestItems,
        failures,
      };
      entries.push({ name: 'manifest.json', data: JSON.stringify(manifest, null, 2) });
      entries.push({ name: 'README.md', data: unrealReadme({ generatedAt, packs: packIds, items: manifestItems, options: { maxTextureSize, collision } }) });

      setProgress({ i: candidates.length, n: candidates.length, name: 'zipping' });
      const zip = zipStore(entries);
      const res = { zip, items: manifestItems.length, failures, bytes, zipBytes: zip.size, seconds: (performance.now() - started) / 1000, saved: null };

      if (saveToServer && !readOnly && manifestItems.length) {
        setProgress({ i: candidates.length, n: candidates.length, name: 'uploading to the server' });
        try {
          res.saved = await unrealApi.upload(zip, { merge: partial });
          setServer(await unrealApi.status());
        } catch (err) {
          res.saveError = err.message;
        }
      }
      setResult(res);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false); setProgress(null);
    }
  };

  const download = () => {
    if (!result?.zip) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(result.zip);
    a.download = `thaikit-unreal-${new Date().toISOString().slice(0, 10)}.zip`;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 10_000);
  };

  return (
    <Modal title="Export to Unreal Engine" onClose={busy ? () => { abortRef.current = true; } : onClose} width="min(880px, 94vw)">
      <p className="muted" style={{ marginTop: 0 }}>
        Builds every prop in this page and writes it as <strong>one glTF binary per prop</strong>, flattened to a single mesh
        with a material slot per material and its physics compound as <span className="mono">UCX_</span> collision, in a zip
        with a <span className="mono">manifest.json</span> and import instructions. Unreal 5.1+ imports the folder as
        Static Meshes with no plugin. Full notes in <a href="https://github.com/keysforthewin/thaikit/blob/main/docs/unreal-export.md" target="_blank" rel="noreferrer">docs/unreal-export.md</a>.
      </p>

      <div className="row-inline" style={{ flexWrap: 'wrap', gap: 14 }}>
        <span className="muted">packs:</span>
        {packRows.map((p) => (
          <label key={p.id} title={p.source}>
            <input type="checkbox" checked={selected.has(p.id)} onChange={() => toggle(p.id)} disabled={busy} />{' '}
            {p.name ?? p.id} <span className="muted mono">({items.filter((it) => it.pack === p.id && it.supported).length})</span>
          </label>
        ))}
      </div>
      <div className="row-inline" style={{ flexWrap: 'wrap', gap: 14 }}>
        <label title="canvas textures larger than this are downscaled in the file; the level editor renders them at their authored size">
          textures ≤{' '}
          <select value={maxTextureSize} onChange={(e) => setMaxTextureSize(Number(e.target.value))} disabled={busy}>
            {TEXTURE_SIZES.map((s) => <option key={s} value={s}>{s} px</option>)}
          </select>
        </label>
        <label title="the derived or hand-tuned compound, as UCX_ meshes Unreal turns into simple collision">
          <input type="checkbox" checked={collision} onChange={(e) => setCollision(e.target.checked)} disabled={busy} /> collision
        </label>
        <label title="the 15 yaw-billboarded skyline quads; they need a camera-facing Blueprint to be useful">
          <input type="checkbox" checked={imposters} onChange={(e) => setImposters(e.target.checked)} disabled={busy} /> skyline imposters
        </label>
        {!readOnly && (
          <label title="also unpack the zip into the repo's exports/unreal/ folder, so an Unreal project on this machine imports from disk">
            <input type="checkbox" checked={saveToServer} onChange={(e) => setSaveToServer(e.target.checked)} disabled={busy} /> also write to <span className="mono">exports/unreal/</span>
          </label>
        )}
        <span className="grow" />
        <span className="muted">{candidates.length} of {pool.length} prop(s){partial && saveToServer && !readOnly ? ', merged into the folder' : ''}</span>
        {!busy ? (
          <button className="primary" onClick={run} disabled={!candidates.length}>export</button>
        ) : (
          <button onClick={() => { abortRef.current = true; }}>cancel</button>
        )}
      </div>

      <div className="row-inline" style={{ gap: 10 }}>
        <input
          type="search"
          placeholder="filter by name, category or tag"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          disabled={busy}
          style={{ flex: 1, minWidth: 180 }}
        />
        <button onClick={() => chooseShown(true)} disabled={busy || !shown.length} title="select every prop the filter shows">all shown</button>
        <button onClick={() => chooseShown(false)} disabled={busy || !shown.length} title="deselect every prop the filter shows">none shown</button>
        <button onClick={() => setChosen(null)} disabled={busy || !chosen} title="select every prop">all</button>
      </div>
      <div className="joblog" style={{ maxHeight: 180, overflowY: 'auto', margin: '6px 0' }}>
        {shown.length === 0 && <div className="muted">no prop matches "{filter}"</div>}
        {shown.map((it) => (
          <label key={it.ref} style={{ display: 'block' }} title={it.ref}>
            <input type="checkbox" checked={!chosen || chosen.has(it.ref)} onChange={() => toggleItem(it.ref)} disabled={busy} />{' '}
            {it.title ?? it.name} <span className="muted mono">{it.category ?? ''}{it.tags?.length ? ` · ${it.tags.join(', ')}` : ''}</span>
          </label>
        ))}
      </div>

      {server?.exists && !result && (
        <p className="muted small">
          On disk: <span className="mono">exports/unreal/</span> · {server.files} file(s) · {fmtMb(server.bytes)} · written {new Date(server.generatedAt).toLocaleString()}
          {' '}· <a href={url('/exports/unreal/manifest.json')} target="_blank" rel="noreferrer">manifest</a>
        </p>
      )}

      {progress && (
        <div className="muted" style={{ margin: '8px 0' }}>
          {progress.i}/{progress.n} · {progress.name}
          <div style={{ height: 4, background: 'var(--line)', borderRadius: 2, marginTop: 4 }}>
            <div style={{ height: 4, width: `${(100 * progress.i) / Math.max(1, progress.n)}%`, background: 'var(--accent, #7aa2f7)', borderRadius: 2 }} />
          </div>
        </div>
      )}
      {error && <div className="banner">{error}</div>}

      {result && (
        <div style={{ margin: '10px 0' }}>
          <table>
            <tbody>
              <tr><th>props</th><td>{result.items}{result.failures.length ? <span className="score-bad"> · {result.failures.length} failed</span> : null}</td></tr>
              <tr><th>size</th><td>{fmtMb(result.bytes)} of GLB · {fmtMb(result.zipBytes)} zipped · {result.seconds.toFixed(1)} s</td></tr>
              {result.saved && (
                <tr><th>on disk</th><td>
                  {result.saved.merged
                    ? <><span className="mono">{result.saved.dir}</span>: {result.saved.merged.updated} prop(s) updated in place, {result.saved.merged.total} in the manifest. Right-click the changed <span className="mono">SM_TK_*</span> asset(s) in Unreal and <em>Reimport</em>.</>
                    : <><span className="mono">{result.saved.dir}</span> ({result.saved.files} files). Drag the <span className="mono">{result.saved.folders?.join(', ')}</span> folder(s) into Unreal's Content Browser.</>}
                </td></tr>
              )}
              {result.saveError && <tr><th>on disk</th><td className="score-bad">not written: {result.saveError}</td></tr>}
            </tbody>
          </table>
          <div className="row-inline">
            <button className="primary" onClick={download}>download zip</button>
            {result.saved && <a href={url('/exports/unreal/manifest.json')} target="_blank" rel="noreferrer"><button>open manifest</button></a>}
          </div>
          <details open>
            <summary><strong>Getting these into Unreal Editor</strong></summary>
            <ol className="small">
              <li>Unzip (or open <span className="mono">exports/unreal/</span>). In the Content Browser make a folder such as <span className="mono">Content/ThaiKit</span> and drag the <span className="mono">ThaiKit</span> folder's <span className="mono">.glb</span> files onto it. Leave <span className="mono">_previews</span>, <span className="mono">manifest.json</span> and <span className="mono">README.md</span> out.</li>
              <li>In the Interchange import dialog: <em>Build Nanite</em> <strong>OFF</strong> (it is on by default since UE 5.5; Nanite drops translucent slots to the default material and melts a door's 15 mm of relief into its wall), <em>Combine Static Meshes</em> ON, <em>Import Collision According To Mesh Name</em> ON, <em>Import Materials</em> ON with material instances, scale untouched (glTF metres become Unreal centimetres). Tick "same options for all", Import All.</li>
              <li>Each file becomes one <span className="mono">SM_TK_*</span> Static Mesh with a material slot per material and the compound as simple collision (Show → Simple Collision to check).</li>
              <li>Drag a Static Mesh into the level; <kbd>End</kbd> drops it to the floor. Every pivot is the base centre, so it lands standing. Emissive signs and lamp heads glow but need a Point or Spot Light to cast light; <span className="mono">manifest.json</span> lists the <span className="mono">lighting</span> props, sizes and sockets.</li>
              <li>To update: export again over the same folder and right-click → <em>Reimport</em> in the Content Browser.</li>
            </ol>
            <p className="muted small">Ask Claude to run the <span className="mono">thaikit-unreal-level</span> skill with a live Unreal MCP connection and it will import this folder and lay out a Thai night street from it.</p>
          </details>
        </div>
      )}

      {log.length > 0 && (
        <div className="joblog" ref={logRef}>
          {log.map((l, i) => <div key={i} className={l.ok ? '' : 'score-bad'}>{l.text}</div>)}
        </div>
      )}
    </Modal>
  );
}
