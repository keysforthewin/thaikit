import { useCallback, useEffect, useMemo, useState } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { levelsApi, packsApi } from '../api.js';
import { Viewport } from './Viewport.jsx';
import { Toolbar } from './Toolbar.jsx';
import { Outliner } from './Outliner.jsx';
import { PropertiesPanel } from './PropertiesPanel.jsx';
import { StatsHud } from './StatsHud.jsx';
import { TexturesPanel } from './TexturesPanel.jsx';
import { Modal } from './Modal.jsx';
import { LevelsModal } from './LevelsModal.jsx';
import { PickerModal } from './PickerModal.jsx';
import { JoinModal } from './JoinModal.jsx';
import { PackManagerModal } from './PackManagerModal.jsx';
import { ExportModal } from './ExportModal.jsx';
import { useHotkeys } from './useHotkeys.js';
import { parseLevelGlb } from './doc/fromGlb.js';
import { buildProjectScene, exportGlb } from './doc/toGlb.js';
import { levelStats } from './cells.js';
import { ownerOf, newPlacementId, newSpawnId } from './ids.js';
import { expandIds, selectionRoots } from './groups.js';
import { cloneEntities } from './duplicate.js';
import { defaultMoon, defaultPointLight, defaultSpotLight, round4 } from './defaults.js';
import { nodeFor } from './nodes.js';
import { placementPoint } from './placement.js';
import { evictUnused, itemKey } from '../three/instances.js';
import { PlayHud } from './play/PlayHud.jsx';

const snapTo = (v, step) => (step > 0 ? Math.round(v / step) * step : v);

export default function LevelEditor({ initialId }) {
  const s = useLevel();
  const { doc, levelId, dirty, modal, setModal, catalogue, selection } = s;
  const [texturesOpen, setTexturesOpen] = useState(false);
  const [error, setError] = useState(null);

  // Catalogue: every installed pack's items. Refetched when a pack job finishes.
  const loadCatalogue = useCallback(async () => {
    try {
      const r = await packsApi.items();
      s.setCatalogue({ packs: r.packs, items: r.items });
    } catch (e) {
      useLevel.setState({ catalogueError: e.message });
    }
  }, []);
  useEffect(() => { loadCatalogue(); }, [loadCatalogue]);

  const openLevel = useCallback(async (id) => {
    useLevel.setState({ loading: true, error: null });
    try {
      const bytes = await levelsApi.load(id);
      const { doc: next, orphans } = await parseLevelGlb(bytes);
      s.openDoc({ levelId: id, doc: next, orphans });
      window.history.replaceState(null, '', `/level/${id}`);
      document.title = `${next.name} — thaikit level`;
    } catch (e) {
      setError(`could not open ${id}: ${e.message}`);
    } finally {
      useLevel.setState({ loading: false });
    }
  }, []);

  useEffect(() => { if (initialId) openLevel(initialId); else setModal('levels'); }, [initialId]);

  const save = useCallback(async () => {
    const st = useLevel.getState();
    if (!st.doc || !st.levelId || st.saving) return;
    useLevel.setState({ saving: true, status: 'building scene…' });
    let scene = null;
    try {
      scene = await buildProjectScene(st.doc, st.catalogue, st.orphans, { onProgress: (i, n) => useLevel.setState({ status: `building scene ${i}/${n}` }) });
      useLevel.setState({ status: 'exporting GLB…' });
      const glb = await exportGlb(st.doc.settings?.textures?.maxSize ? scene : scene, { maxTextureSize: st.doc.settings?.textures?.maxSize ?? 2048 });
      const summary = await levelsApi.save(st.levelId, glb);
      useLevel.setState({ dirty: false, status: `saved ${(summary.bytes / 1048576).toFixed(1)} MB` });
      setTimeout(() => useLevel.setState((x) => (x.status?.startsWith('saved') ? { status: null } : {})), 3000);
    } catch (e) {
      if (e.status === 409) setError('Someone else saved this level since you opened it. Reload it (Levels → open) before saving again.');
      else setError(`save failed: ${e.message}`);
      useLevel.setState({ status: null });
    } finally {
      // The export scene held clones only; the prototypes stay cached.
      if (scene) scene.traverse((o) => { if (o.userData?.tk?.kind === 'placement') o.clear(); });
      useLevel.setState({ saving: false });
    }
  }, []);

  useEffect(() => {
    const onUnload = (e) => { if (useLevel.getState().dirty) { e.preventDefault(); e.returnValue = ''; } };
    window.addEventListener('beforeunload', onUnload);
    return () => window.removeEventListener('beforeunload', onUnload);
  }, []);

  // Stats recompute when the doc, the catalogue, or a prototype changes.
  const stats = useMemo(() => (doc ? levelStats(doc, catalogue) : null), [doc, catalogue, s.protoRev]);
  const shippingNotKtx2 = useMemo(() => {
    if (!doc) return 0;
    const refs = new Set(doc.placements.map((p) => p.ref));
    return [...refs].filter((r) => catalogue.byRef[r]?.maps?.some((m) => !m.ktx2)).length;
  }, [doc, catalogue]);

  useEffect(() => {
    if (!doc) return;
    const keep = new Set(doc.placements.map((p) => catalogue.byRef[p.ref]).filter(Boolean).map(itemKey));
    evictUnused(keep);
  }, [doc, catalogue]);

  const addItem = useCallback((item) => {
    const st = useLevel.getState();
    const step = st.doc.settings?.snap?.enabled !== false ? st.doc.settings.snap.translate : 0;
    const { position, on } = placementPoint(st.doc, item, { fallback: st.lastGroundHit });
    // The grid step is a PLAN snap. Snapping the height too would lift a crate
    // off the roof it was just dropped on, or bury it -- the surface it landed
    // on is the answer for y, whatever the grid says.
    const at = [round4(snapTo(position[0], step)), round4(position[1]), round4(snapTo(position[2], step))];
    const id = newPlacementId();
    st.commit(`add ${item.title}`, (d) => {
      d.placements.push({ id, ref: item.ref, version: item.version ?? null, name: '', position: at, rotation: [0, 0, 0], scale: [1, 1, 1], static: null, physics: null, castShadow: true, receiveShadow: true, tags: [] });
    });
    st.select(id);
    st.setStatus(on === 'object' ? 'placed on the surface under the crosshair' : on === 'ground' ? 'placed on the ground' : 'placed in front of the camera');
    setModal(null);
  }, []);

  const addLight = useCallback((type) => {
    const st = useLevel.getState();
    const at = st.lastGroundHit;
    const light = type === 'directional' ? defaultMoon() : type === 'point' ? defaultPointLight([at[0], 3, at[2]]) : defaultSpotLight([at[0], 5, at[2]]);
    st.commit(`add ${light.name}`, (d) => { d.lights.push(light); });
    st.select(light.id);
  }, []);

  const addSpawn = useCallback(() => {
    const st = useLevel.getState();
    const at = st.lastGroundHit;
    const id = newSpawnId();
    st.commit('add spawn', (d) => { d.spawns.push({ id, name: `spawn${d.spawns.length + 1}`, position: [round4(at[0]), 0, round4(at[2])], yawDeg: 0, team: null }); });
    st.select(id);
  }, []);

  const removeSelected = useCallback(() => {
    const st = useLevel.getState();
    // A selected group means everything under it: deleting an assembly deletes
    // its pieces, and `commit` drops the group itself once it names nothing.
    const ids = new Set(expandIds(st.doc, st.selection.map(ownerOf)));
    if (!ids.size) return;
    st.commit(`delete ${ids.size} object${ids.size === 1 ? '' : 's'}`, (d) => {
      d.placements = d.placements.filter((p) => !ids.has(p.id));
      // The moon stays; disable it instead of deleting it.
      d.lights = d.lights.filter((l) => !ids.has(l.id) || l.role === 'moon');
      for (const l of d.lights) if (ids.has(l.id) && l.role === 'moon') l.enabled = false;
      d.spawns = d.spawns.filter((x) => !ids.has(x.id));
    });
    st.clearSelection();
  }, []);

  const duplicateSelected = useCallback(() => {
    const st = useLevel.getState();
    // Group ids go in whole -- cloneEntities copies the assembly and rebuilds
    // the group over the copies.
    const ids = [...new Set(st.selection.map(ownerOf))];
    let copies = [];
    st.commit(`duplicate ${ids.length}`, (d) => {
      const step = d.settings?.snap?.translate ?? 0.5;
      copies = cloneEntities(d, ids, [step, 0, 0]);
    });
    if (copies.length) st.select(copies);
  }, []);

  const frame = useCallback((id) => {
    const node = nodeFor(id ?? useLevel.getState().selection[0]);
    if (!node) return;
    const box = new THREE.Box3().setFromObject(node);
    window.dispatchEvent(new CustomEvent('thaikit:frame', { detail: box }));
  }, []);

  const hotkeys = useMemo(() => ({
    undo: () => useLevel.getState().undo(),
    redo: () => useLevel.getState().redo(),
    save,
    duplicate: duplicateSelected,
    remove: removeSelected,
    tool: (t) => useLevel.getState().setTool(t),
    space: () => { const st = useLevel.getState(); st.setSpace(st.space === 'world' ? 'local' : 'world'); },
    toggle: (k) => useLevel.getState().toggleView(k),
    add: () => setModal('picker'),
    surfaceSnap: () => { const st = useLevel.getState(); st.setSetting('snap.surface.enabled', st.doc?.settings?.snap?.surface?.enabled === false); },
    frame: () => frame(),
    escape: () => { const st = useLevel.getState(); if (st.modal) st.setModal(null); else st.clearSelection(); },
    selectAll: () => { const st = useLevel.getState(); if (st.doc) st.select(st.doc.placements.map((p) => p.id)); },
    join: () => { const st = useLevel.getState(); if (st.doc && selectionRoots(st.doc, st.selection).length >= 2) setModal('join'); },
    unjoin: () => useLevel.getState().unjoinSelection(),
  }), [save, duplicateSelected, removeSelected, frame]);
  useHotkeys(hotkeys, s.play);

  useEffect(() => { window.__level = useLevel; }, []);

  const onPackChanged = useCallback(async () => { await loadCatalogue(); }, [loadCatalogue]);

  return (
    <div className="level">
      <div className="topbar">
        <a className="brand" href="/" title="back to the registry">thaikit</a>
        <span className="muted">level editor</span>
        <button onClick={() => setModal('levels')}>levels</button>
        {doc && (
          <>
            <input value={doc.name} onChange={(e) => s.commit('rename level', (d) => { d.name = e.target.value; })} />
            <span className="mono muted small">{levelId}{dirty ? ' •' : ''}</span>
            <button className={dirty ? 'primary' : ''} onClick={save} disabled={s.saving || !dirty} title="save the level GLB — Ctrl+S">{s.saving ? 'saving…' : 'save'}</button>
            <button onClick={() => useLevel.getState().undo()} disabled={!s.past.length} title="undo — Ctrl+Z">undo</button>
            <button onClick={() => useLevel.getState().redo()} disabled={!s.future.length} title="redo — Ctrl+Shift+Z">redo</button>
            <button
              className={s.play ? 'primary' : ''}
              onClick={() => s.setPlay(!s.play)}
              title="walk the level in first person — WASD, mouse look, C for third person, Esc to come back"
            >
              {s.play ? '■ stop' : '▶ play'}
            </button>
          </>
        )}
        <span className="grow" />
        <button onClick={() => setModal('packs')}>packs ({catalogue.packs.length})</button>
        <button disabled={!doc} title="bake and export a self-contained GLB (cells, LOD, KTX2, lightmap)" onClick={() => setModal('export')}>export…</button>
      </div>
      {doc ? <Toolbar onAdd={() => setModal('picker')} onAddLight={addLight} onAddSpawn={addSpawn} onJoin={() => setModal('join')} /> : <div className="toolbar" />}
      {(error || s.catalogueError) && (
        <div className="banner">{error ?? s.catalogueError} <button onClick={() => { setError(null); useLevel.setState({ catalogueError: null }); }}>dismiss</button></div>
      )}
      <div className="workspace">
        <Outliner onFrame={frame} />
        <div className="viewport-wrap" style={{ position: 'relative', minWidth: 0 }}>
          <Viewport stats={stats} />
          {doc && <StatsHud stats={stats} shippingNotKtx2={shippingNotKtx2} onOpenTextures={() => setTexturesOpen(true)} />}
          {s.play && <PlayHud />}
          {s.status && <div className="status">{s.status}</div>}
          {s.loading && <div className="status">loading level…</div>}
        </div>
        <PropertiesPanel />
      </div>

      {modal === 'levels' && (
        <LevelsModal
          onClose={() => setModal(null)}
          current={levelId}
          dirty={dirty}
          onOpen={async (id) => { setModal(null); await openLevel(id); }}
          onCreate={(name) => levelsApi.create(name)}
          onDelete={async (id) => { await levelsApi.remove(id); if (id === useLevel.getState().levelId) { useLevel.setState({ doc: null, levelId: null, dirty: false }); window.history.replaceState(null, '', '/level'); } }}
        />
      )}
      {modal === 'picker' && <PickerModal onClose={() => setModal(null)} onPick={addItem} />}
      {modal === 'join' && doc && (
        <JoinModal
          count={selectionRoots(doc, selection).length}
          onClose={() => setModal(null)}
          onJoin={(name) => { useLevel.getState().joinSelection(name); setModal(null); }}
        />
      )}
      {modal === 'packs' && <PackManagerModal onClose={() => setModal(null)} onChanged={onPackChanged} />}
      {modal === 'export' && <ExportModal onClose={() => setModal(null)} />}
      {texturesOpen && stats && (
        <Modal title="Textures in this level" onClose={() => setTexturesOpen(false)} width="min(900px, 94vw)">
          <TexturesPanel stats={stats} onCompressed={loadCatalogue} />
        </Modal>
      )}
    </div>
  );
}

