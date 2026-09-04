import { useCallback, useEffect, useMemo, useRef } from 'react';
import { TransformControls } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { nodeFor, allNodes, geometryOf } from './nodes.js';
import { findEntity, ownerOf, isTargetId, kindOf } from './ids.js';
import { obbFromBox, snapTranslation, dropToSurface, thinLift } from './snap.js';
import { groundOf } from './ground.js';
import { roundVec, norm } from './defaults.js';
import { cloneEntities } from './duplicate.js';
import { mods } from './modifiers.js';
import { expandIds } from './groups.js';
import { setGizmo, getGizmo } from './gizmoRef.js';

const _m = new THREE.Matrix4();
const _delta = new THREE.Matrix4();
const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _scl = new THREE.Vector3();
const _box = new THREE.Box3();
const _axis = new THREE.Vector3();

/**
 * How far a quaternion already turns about `axis` (its swing-twist "twist"),
 * so a world-space snap can quantise the ABSOLUTE angle rather than the drag.
 */
const twistAbout = (q, axis) => {
  const p = q.x * axis.x + q.y * axis.y + q.z * axis.z;
  return 2 * Math.atan2(p, q.w);
};

/**
 * One gizmo at the scene root, driving a pivot that stands in for the selection.
 *
 * Every selected node moves by the pivot's delta since the drag began, so a
 * multi-select scales and turns about a common point. Snapping adds a
 * correction to the FOLLOWERS only -- TransformControls rewrites the pivot's
 * own position every pointer move, so writing to it mid-drag is a fight.
 *
 * With the surface toggle on, a translate drag does two things in order. First
 * the primary object is RESTED on whatever is beneath its footprint -- another
 * placement's real meshes or the ground plane -- so a crate dragged across a
 * rooftop rides the roof and a lamp pushed onto a table climbs onto it; it can
 * step up by `climb` metres and drop any distance. A drag whose handle has a Y
 * component is the user choosing a height, so there the surface is a MAGNET
 * rather than a floor: the base snaps onto a surface within the gap threshold
 * and is otherwise left exactly where the drag put it. Then the bounding-box
 * snap butts faces flush and lines edges up with neighbours.
 *
 * Two modifiers change what a drag means. SHIFT leaves a copy behind: the
 * duplicates are made at MOUSEDOWN, at the selection's current transform, and
 * it is the ORIGINAL nodes that go on being dragged -- indistinguishable from
 * dragging the copy, and the only version that works, because a commit
 * mid-drag hands every PlacementNode a new doc and each one re-syncs its group
 * from it, snapping the dragged node back to where it started. CTRL disables
 * the widget for as long as it is held, so a click reaches the object behind
 * it.
 */
export function SelectionGizmo() {
  const selection = useLevel((s) => s.selection);
  const tool = useLevel((s) => s.tool);
  const space = useLevel((s) => s.space);
  const doc = useLevel((s) => s.doc);
  const pivot = useMemo(() => { const o = new THREE.Object3D(); o.name = '__pivot'; return o; }, []);
  const drag = useRef(null);

  // A group carries no transform of its own: it drags as the multi-select of
  // its leaves, which is the whole of what joining objects does.
  const leaves = useMemo(() => expandIds(doc, selection), [doc, selection]);
  const primary = leaves[leaves.length - 1] ?? null;
  const primaryNode = primary ? nodeFor(primary) : null;

  // Aim the pivot at the primary object whenever the selection or the doc moves it.
  useEffect(() => {
    if (!primaryNode) return;
    primaryNode.updateMatrixWorld(true);
    if (leaves.length === 1) {
      primaryNode.matrixWorld.decompose(pivot.position, pivot.quaternion, pivot.scale);
    } else {
      const c = new THREE.Vector3();
      let n = 0;
      for (const id of leaves) { const o = nodeFor(id); if (o) { c.add(o.getWorldPosition(new THREE.Vector3())); n += 1; } }
      pivot.position.copy(c.divideScalar(Math.max(1, n)));
      pivot.quaternion.identity();
      pivot.scale.set(1, 1, 1);
    }
    pivot.updateMatrix();
  }, [leaves, primaryNode, doc, pivot]);

  const registerGizmo = useCallback((c) => setGizmo(c), []);

  /**
   * Ctrl suspends the widget so a click can reach what is behind it.
   *
   * `enabled` is the only switch that stops three's own pointerdown listener
   * from starting a drag -- ignoring the event downstream is too late, the
   * gizmo has already grabbed. It is never flipped mid-drag: a disabled
   * TransformControls drops the pointerup too, and the drag would end with
   * nothing committed.
   */
  useEffect(() => {
    const apply = () => {
      const c = getGizmo();
      if (!c || c.dragging) return;
      c.enabled = !mods.ctrl;
    };
    const types = ['keydown', 'keyup', 'pointerdown', 'pointermove', 'pointerup', 'blur'];
    for (const t of types) window.addEventListener(t, apply, true);
    return () => {
      for (const t of types) window.removeEventListener(t, apply, true);
      const c = getGizmo();
      if (c) c.enabled = true;
    };
  }, []);

  if (!primaryNode) return null;

  const snapSettings = doc?.settings?.snap ?? {};
  const snap = snapSettings.enabled !== false;
  const kindOfPrimary = kindOf(ownerOf(primary));
  const lightLike = kindOfPrimary !== 'placement';
  const mode = lightLike && tool === 'scale' ? 'translate' : tool;

  const onMouseDown = () => {
    const s = useLevel.getState();
    s.setDragging(true);
    // Shift: copy first, drag second. The state the commit overwrites rides
    // along, so a Shift-click that never became a drag can be taken back
    // whole -- dirty flag and redo stack included.
    let duplicated = null;
    const before = { dirty: s.dirty, future: s.future };
    if (mods.shift && selection.length) {
      // Group ids go in whole: cloneEntities copies the assembly and makes a
      // new group over the copies.
      const ids = [...new Set(selection.map(ownerOf))];
      let made = [];
      s.commit(`duplicate ${ids.length} object${ids.length === 1 ? '' : 's'}`, (d) => { made = cloneEntities(d, ids); });
      if (made.length) duplicated = made;
      else s.rollback(before);
    }
    pivot.updateMatrix();
    const nodes = leaves.map((id) => nodeFor(id)).filter(Boolean);
    for (const o of nodes) o.updateMatrix();
    const candidates = [];
    const surfaces = [];
    if (mode === 'translate' && snapSettings.surface?.enabled !== false && kindOfPrimary === 'placement') {
      const selected = new Set(leaves.map(ownerOf));
      for (const [id, o] of allNodes()) {
        if (selected.has(ownerOf(id)) || kindOf(id) !== 'placement' || !o.userData.bbox) continue;
        o.updateMatrixWorld(true);
        candidates.push(obbFromBox(o.userData.bbox, o.matrixWorld));
        const geo = geometryOf(o);
        if (geo) surfaces.push({ geo, box: o.userData.bbox.clone().applyMatrix4(o.matrixWorld) });
      }
    }
    const ground = groundOf(s.doc);
    drag.current = {
      pivotStart: pivot.matrix.clone(),
      pivotInv: pivot.matrix.clone().invert(),
      starts: nodes.map((o) => ({ o, m: o.matrix.clone() })),
      candidates,
      surfaces,
      groundY: ground.enabled ? ground.y : null,
      duplicated,
      before,
    };
  };

  const onObjectChange = () => {
    const d = drag.current;
    if (!d) return;
    // Snap is done here rather than by three's rotationSnap, because the two
    // spaces mean different things by it. WORLD quantises the ABSOLUTE angle
    // about the world axis (0, 15, 30 ...), so a prop sitting at 7 degrees
    // lands on 15, not 22. LOCAL quantises the DRAG: a relative step from
    // wherever the object already stands. three's own snap is neither -- it
    // rounds the object's Euler to the step at mousedown, then steps the delta.
    const g = getGizmo();
    if (mode === 'rotate' && snap && g?.dragging) {
      const step = THREE.MathUtils.degToRad(snapSettings.rotateDeg ?? 15);
      _axis.copy(g.rotationAxis);
      const handle = g.axis ?? '';
      const localAxis = space === 'local' && (handle === 'X' || handle === 'Y' || handle === 'Z');
      if (localAxis) {
        const delta = Math.round(g.rotationAngle / step) * step;
        pivot.quaternion.copy(g.quaternionStart).multiply(_quat.setFromAxisAngle(_axis, delta)).normalize();
      } else {
        const was = twistAbout(g.quaternionStart, _axis);
        const total = Math.round((was + g.rotationAngle) / step) * step;
        pivot.quaternion.setFromAxisAngle(_axis, total - was).multiply(g.quaternionStart).normalize();
      }
    }
    pivot.updateMatrix();
    _delta.multiplyMatrices(pivot.matrix, d.pivotInv);
    for (const { o, m } of d.starts) {
      _m.multiplyMatrices(_delta, m).decompose(o.position, o.quaternion, o.scale);
      o.updateMatrixWorld(true);
    }
    const surfaceOn = mode === 'translate' && snapSettings.surface?.enabled !== false && kindOfPrimary === 'placement';
    if (surfaceOn && d.starts.length) {
      const opt = snapSettings.surface ?? {};
      const first = d.starts[d.starts.length - 1].o;
      const s = useLevel.getState();
      let surface = null;
      let hit = null;

      // Rest on the surface beneath. `axis` is the handle under the pointer:
      // X, Z and XZ ride the surface (step up by `climb`, drop any distance);
      // Y, XY, YZ and the free XYZ handle set the height themselves, so they
      // only snap when the base comes within the gap threshold of a surface.
      const axis = getGizmo()?.axis ?? '';
      const vertical = axis.includes('Y');
      const reach = vertical ? opt.threshold ?? 0.3 : opt.climb ?? 2;
      if (first.userData.bbox && (d.surfaces.length || d.groundY != null)) {
        _box.copy(first.userData.bbox).applyMatrix4(first.matrixWorld);
        const x = (_box.min.x + _box.max.x) / 2;
        const z = (_box.min.z + _box.max.z) / 2;
        const targets = d.surfaces.filter((t) => t.box.min.x <= x && x <= t.box.max.x && t.box.min.z <= z && z <= t.box.max.z).map((t) => t.geo);
        let drop = dropToSurface({ x, z, bottomY: _box.min.y, climb: reach, targets, groundY: d.groundY });
        if (drop && vertical && drop.dy < -reach) drop = null;
        if (drop) {
          // A quad resting exactly on the ground z-fights it: lift it clear.
          drop.dy += thinLift(_box.max.y - _box.min.y);
          if (Math.abs(drop.dy) > 1e-6) for (const { o } of d.starts) { o.position.y += drop.dy; o.updateMatrixWorld(true); }
          const radius = Math.max(0.15, Math.min(_box.max.x - _box.min.x, _box.max.z - _box.min.z) / 2);
          surface = { point: drop.point, on: drop.on, radius };
        }
      }

      // Then flush faces and aligned edges against the neighbours' boxes.
      if (d.candidates.length) {
        const obb = obbFromBox(first.userData.bbox, first.matrixWorld);
        hit = snapTranslation(obb, d.candidates, opt);
        if (hit) for (const { o } of d.starts) { o.position.add(hit.corr); o.updateMatrixWorld(true); }
      }

      if (hit || surface) {
        const key = (hit ? hit.hits.map((h) => h.face.id).join('|') : '') + (surface ? `~${surface.on}` : '') + first.position.toArray().map((n) => n.toFixed(2)).join(',');
        if (!s.snapHint || s.snapHint.key !== key) s.setSnapHint({ key, hits: hit ? hit.hits : [], surface });
      } else if (s.snapHint) s.setSnapHint(null);
    }
  };

  const onMouseUp = () => {
    const d = drag.current;
    drag.current = null;
    const s = useLevel.getState();
    s.setDragging(false);
    s.setSnapHint(null);
    if (!d) return;
    const moved = d.starts.filter(({ o, m }) => !o.matrix.equals(m));
    if (!moved.length) {
      // A Shift-click on a handle is not a Shift-drag: the copy it made is
      // sitting exactly on its original, where nobody would ever find it.
      if (d.duplicated) s.rollback(d.before);
      return;
    }
    s.commit(`${mode} ${moved.length} object${moved.length === 1 ? '' : 's'}`, (doc) => {
      for (const { o } of moved) {
        const id = o.name;
        const found = findEntity(doc, id);
        if (!found) continue;
        const e = found.entity;
        if (found.kind === 'placement') {
          const eu = new THREE.Euler().setFromQuaternion(o.quaternion, 'XYZ');
          e.position = roundVec(o.position.toArray());
          e.rotation = roundVec([eu.x, eu.y, eu.z]);
          e.scale = roundVec(o.scale.toArray().map((v) => Math.max(0.01, v)));
        } else if (found.kind === 'light') {
          if (isTargetId(id)) {
            const light = nodeFor(e.id);
            const lp = light ? light.getWorldPosition(_pos).toArray() : e.position;
            e.direction = norm([o.position.x - lp[0], o.position.y - lp[1], o.position.z - lp[2]]);
          } else {
            e.position = roundVec(o.position.toArray());
          }
        } else if (found.kind === 'spawn') {
          e.position = roundVec(o.position.toArray());
          e.yawDeg = +THREE.MathUtils.radToDeg(new THREE.Euler().setFromQuaternion(o.quaternion, 'YXZ').y).toFixed(2);
        }
      }
    });
    if (d.duplicated) s.setStatus(`shift-drag: left ${d.duplicated.length} cop${d.duplicated.length === 1 ? 'y' : 'ies'} behind`);
    // Re-aim the pivot at the committed transform.
    primaryNode.updateMatrixWorld(true);
    if (leaves.length === 1) primaryNode.matrixWorld.decompose(pivot.position, pivot.quaternion, pivot.scale);
  };

  return (
    <>
      <primitive object={pivot} />
      <TransformControls
        ref={registerGizmo}
        object={pivot}
        mode={mode}
        space={space}
        translationSnap={snap ? snapSettings.translate ?? null : null}
        rotationSnap={null}
        scaleSnap={snap ? snapSettings.scale ?? null : null}
        onMouseDown={onMouseDown}
        onObjectChange={onObjectChange}
        onMouseUp={onMouseUp}
        showX
        showY
        showZ
      />
    </>
  );
}
