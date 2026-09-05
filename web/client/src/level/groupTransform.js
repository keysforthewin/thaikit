import * as THREE from 'three';

import { findEntity } from './ids.js';
import { descendantsOf, isGroupId } from './groups.js';
import { norm, roundVec } from './defaults.js';

/**
 * Numeric transforms for a selection that has no transform node of its own.
 *
 * A group is a remembered multi-select, so its "position" is DERIVED: the
 * centroid of its leaves, the same point the gizmo pivots a multi-select
 * about. Editing it translates every leaf by the difference.
 *
 * Its rotation is different. Nothing on the leaves records how far the
 * assembly as a whole has been turned -- turn a group 90 degrees and every
 * member is simply somewhere else -- so a rotation field that read the leaves
 * would show 0 for ever. `group.rotation` is therefore an ACCUMULATOR: the
 * panel edits it as an absolute value and applies the change to the leaves
 * about the centroid, and the gizmo composes every rotate drag into it. It is
 * bookkeeping for the field, not a transform anything downstream reads, which
 * is why it can live on the group beside `name` and cost the bake nothing.
 */

const _q = new THREE.Quaternion();
const _qe = new THREE.Quaternion();
const _v = new THREE.Vector3();
const _e = new THREE.Euler();

const ZERO = [0, 0, 0];

/** The stored rotation of a group, in radians, XYZ order. */
export const groupRotationOf = (group) => group?.rotation ?? ZERO;

export const quatFromEuler = (r, order = 'XYZ') => new THREE.Quaternion().setFromEuler(_e.set(r[0], r[1], r[2], order));
const eulerFromQuat = (q, order = 'XYZ') => { const e = _e.setFromQuaternion(q, order); return roundVec([e.x, e.y, e.z]); };

/** The mean of the leaves' positions, or null when none of them is an entity. */
export function centroidOf(doc, ids) {
  const c = [0, 0, 0];
  let n = 0;
  for (const id of ids) {
    const f = findEntity(doc, id);
    if (!f) continue;
    for (let i = 0; i < 3; i += 1) c[i] += f.entity.position[i];
    n += 1;
  }
  return n ? roundVec(c.map((x) => x / n)) : null;
}

/** Move every leaf by `delta`, in place. */
export function translateLeaves(draft, ids, delta) {
  for (const id of ids) {
    const f = findEntity(draft, id);
    if (!f) continue;
    f.entity.position = roundVec(f.entity.position.map((x, i) => x + delta[i]));
  }
}

/**
 * Turn every leaf about `pivot` by the world-space quaternion `q`, in place.
 *
 * A placement's own rotation is composed with the turn; a light keeps aiming
 * the same way relative to the assembly; a spawn keeps only the yaw a spawn
 * can carry.
 */
export function rotateLeavesAbout(draft, ids, pivot, q) {
  for (const id of ids) {
    const f = findEntity(draft, id);
    if (!f) continue;
    const e = f.entity;
    _v.set(e.position[0] - pivot[0], e.position[1] - pivot[1], e.position[2] - pivot[2]).applyQuaternion(q);
    e.position = roundVec([_v.x + pivot[0], _v.y + pivot[1], _v.z + pivot[2]]);
    if (f.kind === 'placement') {
      _qe.copy(quatFromEuler(e.rotation)).premultiply(q).normalize();
      e.rotation = eulerFromQuat(_qe);
    } else if (f.kind === 'light') {
      if (e.direction) e.direction = norm(_v.fromArray(e.direction).applyQuaternion(q).toArray());
    } else if (f.kind === 'spawn') {
      _qe.copy(quatFromEuler([0, THREE.MathUtils.degToRad(e.yawDeg ?? 0), 0])).premultiply(q).normalize();
      e.yawDeg = +THREE.MathUtils.radToDeg(_e.setFromQuaternion(_qe, 'YXZ').y).toFixed(2);
    }
  }
}

/**
 * Fold a world-space turn into the stored rotation of every group in `ids`
 * and every group nested under them. Called after a gizmo rotate drag and by
 * the rotation field, so the field always reads what the assembly has done.
 */
export function composeGroupRotations(draft, ids, q) {
  const touched = new Set();
  for (const id of ids) {
    if (!isGroupId(id)) continue;
    touched.add(id);
    for (const d of descendantsOf(draft, id)) if (isGroupId(d)) touched.add(d);
  }
  for (const g of draft.groups ?? []) {
    if (!touched.has(g.id)) continue;
    _q.copy(quatFromEuler(groupRotationOf(g))).premultiply(q).normalize();
    g.rotation = eulerFromQuat(_q);
  }
}

/**
 * Set a group's rotation to `next` (radians, XYZ): the leaves turn about the
 * centroid by the difference from what is stored, and the group records
 * `next` exactly so the field reads back what was typed.
 */
export function setGroupRotation(draft, group, leafIds, next) {
  const from = quatFromEuler(groupRotationOf(group));
  const q = quatFromEuler(next).multiply(from.invert());
  const pivot = centroidOf(draft, leafIds);
  if (pivot) rotateLeavesAbout(draft, leafIds, pivot, q);
  // Nested groups turn with the assembly; the group itself takes the typed value.
  composeGroupRotations(draft, descendantsOf(draft, group.id).filter(isGroupId), q);
  const g = (draft.groups ?? []).find((x) => x.id === group.id);
  if (g) g.rotation = roundVec(next);
}
