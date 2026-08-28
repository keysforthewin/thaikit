import { useEffect, useMemo, useRef } from 'react';
import { TransformControls } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { nodeFor, allNodes } from './nodes.js';
import { findEntity, ownerOf, isTargetId, kindOf } from './ids.js';
import { obbFromBox, snapTranslation } from './snap.js';
import { roundVec, norm } from './defaults.js';

const _m = new THREE.Matrix4();
const _delta = new THREE.Matrix4();
const _pos = new THREE.Vector3();
const _quat = new THREE.Quaternion();
const _scl = new THREE.Vector3();

/**
 * One gizmo at the scene root, driving a pivot that stands in for the selection.
 *
 * Every selected node moves by the pivot's delta since the drag began, so a
 * multi-select scales and turns about a common point. Snapping adds a
 * correction to the FOLLOWERS only -- TransformControls rewrites the pivot's
 * own position every pointer move, so writing to it mid-drag is a fight.
 */
export function SelectionGizmo() {
  const selection = useLevel((s) => s.selection);
  const tool = useLevel((s) => s.tool);
  const space = useLevel((s) => s.space);
  const doc = useLevel((s) => s.doc);
  const pivot = useMemo(() => { const o = new THREE.Object3D(); o.name = '__pivot'; return o; }, []);
  const drag = useRef(null);

  const primary = selection[selection.length - 1] ?? null;
  const primaryNode = primary ? nodeFor(primary) : null;

  // Aim the pivot at the primary object whenever the selection or the doc moves it.
  useEffect(() => {
    if (!primaryNode) return;
    primaryNode.updateMatrixWorld(true);
    if (selection.length === 1) {
      primaryNode.matrixWorld.decompose(pivot.position, pivot.quaternion, pivot.scale);
    } else {
      const c = new THREE.Vector3();
      let n = 0;
      for (const id of selection) { const o = nodeFor(id); if (o) { c.add(o.getWorldPosition(new THREE.Vector3())); n += 1; } }
      pivot.position.copy(c.divideScalar(Math.max(1, n)));
      pivot.quaternion.identity();
      pivot.scale.set(1, 1, 1);
    }
    pivot.updateMatrix();
  }, [selection, primaryNode, doc, pivot]);

  if (!primaryNode) return null;

  const snapSettings = doc?.settings?.snap ?? {};
  const kindOfPrimary = kindOf(ownerOf(primary));
  const lightLike = kindOfPrimary !== 'placement';
  const mode = lightLike && tool === 'scale' ? 'translate' : tool;

  const onMouseDown = () => {
    const s = useLevel.getState();
    s.setDragging(true);
    pivot.updateMatrix();
    const nodes = selection.map((id) => nodeFor(id)).filter(Boolean);
    for (const o of nodes) o.updateMatrix();
    const candidates = [];
    if (mode === 'translate' && snapSettings.surface?.enabled !== false && kindOfPrimary === 'placement') {
      const selected = new Set(selection.map(ownerOf));
      for (const [id, o] of allNodes()) {
        if (selected.has(ownerOf(id)) || kindOf(id) !== 'placement' || !o.userData.bbox) continue;
        o.updateMatrixWorld(true);
        candidates.push(obbFromBox(o.userData.bbox, o.matrixWorld));
      }
    }
    drag.current = {
      pivotStart: pivot.matrix.clone(),
      pivotInv: pivot.matrix.clone().invert(),
      starts: nodes.map((o) => ({ o, m: o.matrix.clone() })),
      candidates,
    };
  };

  const onObjectChange = () => {
    const d = drag.current;
    if (!d) return;
    pivot.updateMatrix();
    _delta.multiplyMatrices(pivot.matrix, d.pivotInv);
    for (const { o, m } of d.starts) {
      _m.multiplyMatrices(_delta, m).decompose(o.position, o.quaternion, o.scale);
      o.updateMatrixWorld(true);
    }
    if (mode === 'translate' && d.candidates.length) {
      const first = d.starts[d.starts.length - 1].o;
      const obb = obbFromBox(first.userData.bbox, first.matrixWorld);
      const hit = snapTranslation(obb, d.candidates, snapSettings.surface ?? {});
      const s = useLevel.getState();
      if (hit) {
        for (const { o } of d.starts) { o.position.add(hit.corr); o.updateMatrixWorld(true); }
        if (!s.snapHint || s.snapHint.key !== hit.hits.map((h) => h.face.id).join('|') + first.position.toArray().map((n) => n.toFixed(2)).join(',')) {
          s.setSnapHint({ key: hit.hits.map((h) => h.face.id).join('|') + first.position.toArray().map((n) => n.toFixed(2)).join(','), hits: hit.hits });
        }
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
    if (!moved.length) return;
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
    // Re-aim the pivot at the committed transform.
    primaryNode.updateMatrixWorld(true);
    if (selection.length === 1) primaryNode.matrixWorld.decompose(pivot.position, pivot.quaternion, pivot.scale);
  };

  const snap = snapSettings.enabled !== false;
  return (
    <>
      <primitive object={pivot} />
      <TransformControls
        object={pivot}
        mode={mode}
        space={space}
        translationSnap={snap ? snapSettings.translate ?? null : null}
        rotationSnap={snap ? THREE.MathUtils.degToRad(snapSettings.rotateDeg ?? 15) : null}
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
