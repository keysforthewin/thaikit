import { nodeFor } from './nodes.js';
import { rootOf } from './groups.js';
import { gizmoOwnsPointer } from './gizmoRef.js';
import { getViewport } from './viewportRef.js';

/**
 * What a click in the viewport selects, and how repeated clicks reach deeper.
 *
 * Every pickable thing -- a placement's pick box, a light's handle, a spot's aim
 * ring, a spawn capsule -- registers its own pointerdown, and react-three-fiber
 * delivers the event to the CLOSEST first. With each handler taking the click,
 * the nearest surface always won, and a light handle standing inside a
 * building (drawn depthTest-off, so plainly visible) could never be clicked:
 * the building's pick box was always in front of it.
 *
 * So the handlers now all defer to `pickUnderPointer`, which reads the event's
 * whole depth-sorted hit list, resolves each hit to the entity that owns it,
 * and CYCLES: the first click at a spot takes the closest thing, the next
 * click at the same spot takes the one behind it, and so on round. Moving the
 * pointer far enough that the click is elsewhere starts again from the front.
 */

/** How far the pointer may drift, in CSS pixels, and still be "the same spot". */
export const SAME_SPOT_PX = 6;

/**
 * The entity id owning a picked object: the nearest ancestor (or the object
 * itself) that is a registered node. Plain scene objects -- the pick plane,
 * the ground, a helper -- own nothing and are skipped.
 */
export function ownerIdOf(obj) {
  for (let o = obj; o; o = o.parent) {
    if (o.name && nodeFor(o.name) === o) return o.name;
  }
  return null;
}

/**
 * The ids under the pointer, nearest first, each once. `resolve` maps a hit's
 * owner to what a click on it should select (the group root, say); ids are
 * de-duplicated AFTER resolving, so two pieces of one assembly count as one
 * stop in the cycle rather than two clicks that select the same thing.
 */
export function orderedPicks(intersections, resolve = (id) => id) {
  const out = [];
  const seen = new Set();
  for (const h of intersections) {
    if (h.object && h.object.visible === false) continue;
    const owner = ownerIdOf(h.object);
    if (!owner) continue;
    const id = resolve(owner);
    if (id && !seen.has(id)) { seen.add(id); out.push(id); }
  }
  return out;
}

/**
 * The pure cycle. `prev` is the last pick's record (or null); returns the id to
 * select and the record to keep for the next click. Restarts from the front
 * when the pointer has moved, or when what is under it has changed -- a
 * different list means a different place, whatever the pixel distance says.
 */
export function cyclePick(ids, at, prev, samePx = SAME_SPOT_PX) {
  if (!ids.length) return { id: null, record: null };
  const same = prev
    && Math.hypot(at[0] - prev.at[0], at[1] - prev.at[1]) <= samePx
    && prev.ids.length === ids.length && prev.ids.every((v, i) => v === ids[i]);
  const index = same ? (prev.index + 1) % ids.length : 0;
  return { id: ids[index], record: { at, ids, index } };
}

let last = null;

const _ndc = { x: 0, y: 0 };

/**
 * Whether a pointerdown at this spot is the NEXT click of a cycle with
 * somewhere deeper to go -- the case where the transform gizmo must NOT take
 * the click. The first click selects the thing in front and its gizmo lands
 * on top of everything behind it; with the widget keeping first claim, the
 * second click would start a drag instead of reaching the ring or handle
 * inside, and the cycle could never get past stop one. So `SelectionGizmo`
 * asks this in its capture-phase switch, before three's own listener runs,
 * and disables the widget for that click. A repeat click over ONE thing only
 * -- the object just selected -- leaves the gizmo its claim, so click-then-
 * drag from the same pixel still drags.
 *
 * Reads the same hit list the click will get, off the live r3f state, because
 * the answer is needed before r3f has raycast.
 */
export function gizmoShouldYield(event) {
  if (!last || event.button !== 0) return false;
  if (Math.hypot(event.clientX - last.at[0], event.clientY - last.at[1]) > SAME_SPOT_PX) return false;
  const view = getViewport();
  const canvas = view?.gl?.domElement;
  if (!view?.camera || !canvas || !view.internal?.interaction) return false;
  const r = canvas.getBoundingClientRect();
  if (!r.width || !r.height) return false;
  _ndc.x = ((event.clientX - r.left) / r.width) * 2 - 1;
  _ndc.y = -((event.clientY - r.top) / r.height) * 2 + 1;
  const rc = view.raycaster;
  rc.setFromCamera(_ndc, view.camera);
  return orderedPicks(rc.intersectObjects(view.internal.interaction, true)).length > 1;
}

/** Forget the cycle; a new level or a cleared selection starts from the front. */
export const resetPickCycle = () => { last = null; };

/**
 * Handle a pointerdown from any pickable mesh. Returns true when it took the
 * click (and selected something), false when the caller should let it pass.
 *
 * The transform gizmo has first claim on a click -- a handle sits inside the
 * thing it moves as often as not -- and Ctrl reaches past it. Alt picks the
 * piece itself rather than the group it is joined into, except a light's aim
 * ring, which is always its own: dragging a group by a spot's target makes no
 * sense. Shift toggles, as before.
 */
export function pickUnderPointer(e, { doc, select }) {
  if (e.button !== 0) return false;
  if (!e.ctrlKey && !e.metaKey && gizmoOwnsPointer(e)) return false;
  const resolve = (id) => (e.altKey || id.endsWith(':target') ? id : rootOf(doc, id));
  const ids = orderedPicks(e.intersections ?? [], resolve);
  if (!ids.length) return false;
  e.stopPropagation();
  const ne = e.nativeEvent ?? e;
  const { id, record } = cyclePick(ids, [ne.clientX ?? 0, ne.clientY ?? 0], last);
  last = record;
  select(id, { toggle: e.shiftKey });
  return true;
}
