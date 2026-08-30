import { create } from 'zustand';

import { pushHistory } from './history.js';
import { DEFAULT_SETTINGS } from './defaults.js';
import { expandIds, isGroupId, joinInto, pruneGroups, selectionRoots, unjoin } from './groups.js';

/**
 * The editor's one store. The doc is the level as it will be saved -- plain
 * data, no Object3Ds -- and every edit goes through `commit`, which is what
 * makes undo a matter of keeping the previous doc. Everything else here is UI
 * state that is never saved.
 */
export const useLevel = create((set, get) => ({
  levelId: null,
  doc: null,
  dirty: false,
  loading: false,
  saving: false,
  error: null,
  status: null,
  past: [],
  future: [],

  selection: [],
  tool: 'translate',
  space: 'world',
  // `fov` is HORIZONTAL degrees, unlike three's camera, which is vertical.
  //
  // The editor's viewport is narrowed by two panels, so a vertical fov gives a
  // horizontal one that depends on how wide those panels happen to be: the
  // hard-coded 50 vertical was only 62.6 degrees across at 1360x1041, against
  // the 100 a panorama viewer like Pannellum shows by default and the ~90 a
  // game does. That is why a sky authored here looked magnified next to the
  // same panorama in a 360 visualiser. Anchoring the horizontal instead means
  // the viewport shows the same slice of the world whatever the panels do.
  view: { grid: true, axes: true, cells: false, colliders: false, helpers: true, wireframe: false, sockets: false, fov: 90 },

  catalogue: { packs: [], items: [], byRef: {} },
  catalogueError: null,
  /** placement id -> the meshes the file carried, for refs no installed pack answers to. */
  orphans: new Map(),
  /** placement id -> why its item failed to build, if it did. */
  buildErrors: {},

  snapHint: null,
  modal: null,
  /**
   * Which groups are expanded in the outliner. UI state, deliberately not part
   * of the doc: opening a folder must not make a saved level dirty.
   */
  openGroups: [],
  /**
   * Play mode: the first-person walkthrough. UI state, never saved and never a
   * commit -- entering it must not make a clean document dirty.
   */
  play: false,
  playView: 'first',
  lastGroundHit: [0, 0, 0],
  dragging: false,
  /** Bumps whenever a prototype resolves, so stats and cells recompute. */
  protoRev: 0,
  /**
   * Bumps on every sky image upload. A slot keeps its filename across a
   * re-upload (`px.jpg` replaced by another `px.jpg`), so without a
   * cache-buster in the URL the browser serves the old face and the upload
   * looks like it silently did nothing.
   */
  skyRev: 0,

  setCatalogue(catalogue) {
    const byRef = {};
    for (const it of catalogue.items) byRef[it.ref] = it;
    set({ catalogue: { ...catalogue, byRef }, catalogueError: null });
  },

  openDoc({ levelId, doc, orphans }) {
    set({
      levelId, doc, dirty: false, past: [], future: [], selection: [], error: null,
      orphans: orphans ?? new Map(), buildErrors: {}, snapHint: null,
    });
  },

  /**
   * One undoable edit. `mutate` receives a deep copy and may change it in place
   * or return a replacement; either way the previous doc goes on the history.
   */
  commit(label, mutate) {
    const state = get();
    if (!state.doc) return;
    const draft = structuredClone(state.doc);
    const next = mutate(draft) ?? draft;
    // A delete can empty a group; a group that names nothing is a folder the
    // outliner would keep forever.
    pruneGroups(next);
    set({ doc: next, dirty: true, ...pushHistory(state, label) });
  },

  /**
   * Drop the last commit as though it never happened -- no redo entry, and the
   * dirty flag put back where it was.
   *
   * This is not undo. A Shift-drag on the gizmo has to make its copies BEFORE
   * the drag starts (a commit mid-drag re-syncs every node from the doc and
   * snaps the dragged one back to where it began), so a Shift-click that turns
   * out not to be a drag has left a duplicate sitting exactly on its original,
   * invisible and one Ctrl+Z away from confusing everybody.
   */
  rollback({ dirty, future }) {
    const { past } = get();
    if (!past.length) return;
    const prev = past[past.length - 1];
    // `future` comes back too: every commit clears the redo stack, and a
    // gesture that is being taken back has no business having cost anyone theirs.
    set({ doc: prev.doc, past: past.slice(0, -1), dirty, future });
    get().pruneSelection();
  },

  undo() {
    const { past, future, doc } = get();
    if (!past.length) return;
    const prev = past[past.length - 1];
    set({ doc: prev.doc, past: past.slice(0, -1), future: [{ doc, label: prev.label }, ...future], dirty: true, status: `undo: ${prev.label}` });
    get().pruneSelection();
  },

  redo() {
    const { past, future, doc } = get();
    if (!future.length) return;
    const next = future[0];
    set({ doc: next.doc, future: future.slice(1), past: [...past, { doc, label: next.label }], dirty: true, status: `redo: ${next.label}` });
    get().pruneSelection();
  },

  /** Drop selected ids that no longer exist after an undo or a delete. */
  pruneSelection() {
    const { doc, selection } = get();
    if (!doc) return set({ selection: [] });
    const ids = new Set([...doc.placements, ...doc.lights, ...doc.spawns].map((e) => e.id));
    for (const g of doc.groups ?? []) ids.add(g.id);
    const kept = selection.filter((id) => ids.has(id.replace(/:target$/, '')));
    if (kept.length !== selection.length) set({ selection: kept });
  },

  toggleGroupOpen(id) {
    set((s) => ({ openGroups: s.openGroups.includes(id) ? s.openGroups.filter((x) => x !== id) : [...s.openGroups, id] }));
  },
  setGroupOpen(id, open) {
    set((s) => ({ openGroups: open ? [...new Set([...s.openGroups, id])] : s.openGroups.filter((x) => x !== id) }));
  },

  /**
   * Join the selection into one named group and select it.
   *
   * Nothing about the objects changes -- a group is a remembered multi-select,
   * so this is undoable, saves with the level and costs the bake nothing.
   */
  joinSelection(name) {
    const s = get();
    if (!s.doc) return null;
    const ids = selectionRoots(s.doc, s.selection.map((id) => id.replace(/:target$/, '')));
    if (ids.length < 2) return null;
    let made = null;
    s.commit(`join ${ids.length} objects`, (d) => { made = joinInto(d, ids, name); });
    if (made) { s.select(made); s.setGroupOpen(made, true); s.setStatus(`joined ${ids.length} objects into “${name || 'group'}”`); }
    return made;
  },

  /** Dissolve every selected group, leaving its members selected where they stood. */
  unjoinSelection() {
    const s = get();
    if (!s.doc) return;
    const ids = s.selection.filter(isGroupId);
    if (!ids.length) return;
    let freed = [];
    s.commit(`unjoin ${ids.length} group${ids.length === 1 ? '' : 's'}`, (d) => {
      freed = ids.flatMap((id) => unjoin(d, id));
    });
    s.select(freed);
    s.setStatus(`ungrouped ${ids.length} group${ids.length === 1 ? '' : 's'}`);
  },

  renameGroup(id, name) {
    get().commit('rename group', (d) => {
      const g = (d.groups ?? []).find((x) => x.id === id);
      if (g) g.name = name;
    });
  },

  /** The selection as the leaves that actually have a transform. */
  selectionLeaves() {
    const s = get();
    return expandIds(s.doc, s.selection.map((id) => id.replace(/:target$/, '')));
  },

  select(ids, { toggle = false, add = false } = {}) {
    const list = Array.isArray(ids) ? ids : [ids];
    set((s) => {
      if (toggle) {
        const next = new Set(s.selection);
        for (const id of list) (next.has(id) ? next.delete(id) : next.add(id));
        return { selection: [...next] };
      }
      if (add) return { selection: [...new Set([...s.selection, ...list])] };
      return { selection: list };
    });
  },
  clearSelection: () => set({ selection: [] }),

  setTool: (tool) => set({ tool }),
  setSpace: (space) => set({ space }),
  toggleView: (key) => set((s) => ({ view: { ...s.view, [key]: !s.view[key] } })),
  setView: (key, value) => set((s) => ({ view: { ...s.view, [key]: value } })),
  setModal: (modal) => set({ modal }),
  /** Entering drops the selection and any open modal; the gizmo has no place in a walkthrough. */
  setPlay: (play) => set(play ? { play: true, selection: [], modal: null, snapHint: null } : { play: false, status: null }),
  togglePlayView: () => set((s) => ({ playView: s.playView === 'first' ? 'third' : 'first' })),
  setStatus: (status) => set({ status }),
  setSnapHint: (snapHint) => set({ snapHint }),
  setDragging: (dragging) => set({ dragging }),
  setGroundHit: (p) => set({ lastGroundHit: p }),
  bumpProto: () => set((s) => ({ protoRev: s.protoRev + 1 })),
  bumpSky: () => set((s) => ({ skyRev: s.skyRev + 1 })),
  setBuildError: (id, error) => set((s) => ({ buildErrors: { ...s.buildErrors, [id]: error } })),

  /** Settings edits are commits too, so cell-size experiments are undoable. */
  setSetting(path, value) {
    get().commit(`set ${path}`, (d) => {
      const keys = path.split('.');
      let o = (d.settings ??= structuredClone(DEFAULT_SETTINGS));
      for (const k of keys.slice(0, -1)) o = o[k] ??= {};
      o[keys[keys.length - 1]] = value;
    });
  },
}));

/** Convenience selectors. */
export const selectSelected = (s) => s.selection;
export const selectDoc = (s) => s.doc;
