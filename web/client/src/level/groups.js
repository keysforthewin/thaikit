/**
 * Editor-only grouping: a named set of things that move, turn and scale as one.
 *
 * A group is NOT a transform node and NOT a merge. Nothing about the geometry,
 * the bake, the colliders or the cells changes when objects are joined --
 * every placement keeps its own world transform, and dragging a group is
 * exactly the multi-select drag the gizmo already does, with the membership
 * remembered and named. That is why the doc can carry `groups` as a flat list
 * beside `placements` and nothing downstream needs to know they exist.
 *
 * `doc.groups` is `[{ id, name, children: [id, ...] }]`. A child is any entity
 * id (placement, light, spawn) or another group's id, which is what makes the
 * hierarchy arbitrarily deep. Every id belongs to at most ONE group's children;
 * anything no group claims is top level.
 */
const rand = () => crypto.randomUUID().slice(0, 8);
export const newGroupId = () => `g-${rand()}`;
export const isGroupId = (id) => typeof id === 'string' && id.startsWith('g-');

const EMPTY = [];
const groupsOf = (doc) => doc?.groups ?? EMPTY;

/** id -> group, for the groups this doc holds. */
export function groupMap(doc) {
  const m = new Map();
  for (const g of groupsOf(doc)) m.set(g.id, g);
  return m;
}

/** child id -> the group that claims it. */
export function parentMap(doc) {
  const m = new Map();
  for (const g of groupsOf(doc)) for (const c of g.children) m.set(c, g.id);
  return m;
}

/** The groups nothing else claims -- the roots of the outliner's tree. */
export function topLevelGroups(doc) {
  const parents = parentMap(doc);
  return groupsOf(doc).filter((g) => !parents.has(g.id));
}

/** Every id any group claims, at any depth. Used to keep grouped props out of the flat lists. */
export function claimedIds(doc) {
  const s = new Set();
  for (const g of groupsOf(doc)) for (const c of g.children) s.add(c);
  return s;
}

/**
 * The topmost group containing `id`, or `id` itself when nothing does.
 *
 * This is what a click in the viewport resolves to: joining objects means
 * clicking one of them picks up the whole assembly, the way it would in any
 * other editor. Alt-click is the way back down to the individual piece.
 */
export function rootOf(doc, id) {
  const parents = parentMap(doc);
  let cur = id;
  const seen = new Set();
  while (parents.has(cur) && !seen.has(cur)) { seen.add(cur); cur = parents.get(cur); }
  return cur;
}

/** Every id under `id`, groups included, `id` itself excluded. */
export function descendantsOf(doc, id, groups = groupMap(doc)) {
  const out = [];
  const walk = (gid) => {
    const g = groups.get(gid);
    if (!g) return;
    for (const c of g.children) { out.push(c); if (isGroupId(c)) walk(c); }
  };
  walk(id);
  return out;
}

/**
 * The selection as the things that actually have a transform: group ids
 * replaced by their leaves, in order, deduplicated.
 */
export function expandIds(doc, ids) {
  const groups = groupMap(doc);
  const out = [];
  const seen = new Set();
  const push = (id) => {
    if (isGroupId(id)) { for (const c of groups.get(id)?.children ?? []) push(c); return; }
    if (!seen.has(id)) { seen.add(id); out.push(id); }
  };
  for (const id of ids) push(id);
  return out;
}

/**
 * The selection with anything already covered by a selected ancestor dropped.
 *
 * Joining a group and one of its own members would otherwise put the member in
 * two places at once, and deleting both would visit it twice.
 */
export function selectionRoots(doc, ids) {
  const set = new Set(ids);
  const parents = parentMap(doc);
  const covered = (id) => {
    let cur = parents.get(id);
    const seen = new Set();
    while (cur && !seen.has(cur)) { if (set.has(cur)) return true; seen.add(cur); cur = parents.get(cur); }
    return false;
  };
  const out = [];
  for (const id of ids) if (!covered(id) && !out.includes(id)) out.push(id);
  return out;
}

/**
 * The leaf ids the current selection covers, as a Set, memoised on the doc's
 * `groups` array and the selection array.
 *
 * Every placement in the level asks this on every store change to know whether
 * it is highlighted; expanding the tree once per change rather than once per
 * placement is what keeps that from being quadratic.
 */
let cache = { groups: null, selection: null, set: new Set() };
export function selectedSet(state) {
  const groups = state.doc?.groups ?? null;
  if (cache.groups === groups && cache.selection === state.selection) return cache.set;
  cache = { groups, selection: state.selection, set: new Set(expandIds(state.doc, state.selection)) };
  return cache.set;
}

/** Detach `id` from whatever group claims it, in a draft doc. Returns [groupId, index] or null. */
export function detach(draft, id) {
  for (const g of draft.groups ?? []) {
    const i = g.children.indexOf(id);
    if (i >= 0) { g.children.splice(i, 1); return [g.id, i]; }
  }
  return null;
}

/**
 * Join `ids` into one new group inside a draft doc.
 *
 * When every member came out of the same parent group the new group takes
 * their place there, so joining two pieces of an assembly deepens the tree
 * rather than pulling them out of it.
 *
 * @returns the new group's id, or null when there was nothing to join.
 */
export function joinInto(draft, ids, name) {
  const roots = selectionRoots(draft, ids);
  if (roots.length < 2) return null;
  const parents = parentMap(draft);
  const shared = parents.get(roots[0]) ?? null;
  const sameParent = roots.every((id) => (parents.get(id) ?? null) === shared);
  let at = Infinity;
  for (const id of roots) {
    const d = detach(draft, id);
    if (d && d[0] === shared) at = Math.min(at, d[1]);
  }
  const group = { id: newGroupId(), name: name || 'group', children: roots };
  (draft.groups ??= []).push(group);
  if (sameParent && shared) {
    const parent = draft.groups.find((g) => g.id === shared);
    if (parent) parent.children.splice(Math.min(at, parent.children.length), 0, group.id);
  }
  return group.id;
}

/**
 * Dissolve a group in a draft doc, putting its children back where it stood.
 *
 * @returns the children that were freed.
 */
export function unjoin(draft, id) {
  const g = (draft.groups ?? []).find((x) => x.id === id);
  if (!g) return [];
  const children = [...g.children];
  const at = detach(draft, id);
  draft.groups = draft.groups.filter((x) => x.id !== id);
  if (at) {
    const parent = draft.groups.find((x) => x.id === at[0]);
    if (parent) parent.children.splice(at[1], 0, ...children);
  }
  return children;
}

/**
 * Drop ids no entity answers to any more, and any group left empty by that.
 *
 * A delete removes placements; a group whose every member has gone is a name
 * attached to nothing, and leaving it behind would make the outliner grow a
 * midden of empty folders.
 */
export function pruneGroups(draft) {
  const live = new Set([...(draft.placements ?? []), ...(draft.lights ?? []), ...(draft.spawns ?? [])].map((e) => e.id));
  let groups = draft.groups ?? [];
  for (let pass = 0; pass < 32; pass += 1) {
    const ids = new Set(groups.map((g) => g.id));
    for (const g of groups) g.children = g.children.filter((c) => (isGroupId(c) ? ids.has(c) : live.has(c)));
    const kept = groups.filter((g) => g.children.length > 0);
    if (kept.length === groups.length) break;
    groups = kept;
  }
  draft.groups = groups;
}
