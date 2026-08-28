import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { registerNode } from './nodes.js';
import { getPrototype, instantiate, releaseInstance } from '../three/instances.js';
import { unitGeometry, COLLIDER_COLORS } from '../three/colliderGeometry.js';

const MISSING = 0xe2686d;
const SELECTED = 0x7ee787;

/**
 * One placed object: the cached clone, an invisible box that is the only thing
 * the raycaster tests, and the overlays. The group's transform is written
 * imperatively by the gizmo during a drag and re-synced from the doc after a
 * commit, undo, or a typed value.
 */
export function PlacementNode({ placement }) {
  const item = useLevel((s) => s.catalogue.byRef[placement.ref]);
  const selected = useLevel((s) => s.selection.includes(placement.id));
  const showColliders = useLevel((s) => s.view.colliders);
  const showSockets = useLevel((s) => s.view.sockets);
  const wireframe = useLevel((s) => s.view.wireframe);
  const orphan = useLevel((s) => s.orphans.get(placement.id));
  const select = useLevel((s) => s.select);
  const bumpProto = useLevel((s) => s.bumpProto);
  const setBuildError = useLevel((s) => s.setBuildError);
  const groupRef = useRef(null);
  const [proto, setProto] = useState(null);

  const itemKey = item ? `${item.ref}@${item.version}` : null;
  useEffect(() => {
    if (!item || !item.supported) { setProto(null); return undefined; }
    let live = true;
    getPrototype(item)
      .then((p) => { if (live) { setProto(p); bumpProto(); } })
      .catch((err) => { if (live) setBuildError(placement.id, err.message); });
    return () => { live = false; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemKey]);

  const instance = useMemo(() => (proto ? instantiate(proto, placement) : null), [proto]);
  useEffect(() => () => { if (proto) releaseInstance(proto); }, [proto]);
  useEffect(() => {
    if (!instance) return;
    instance.traverse((o) => {
      if (!o.isMesh) return;
      o.castShadow = placement.castShadow !== false;
      o.receiveShadow = placement.receiveShadow !== false;
      for (const m of Array.isArray(o.material) ? o.material : [o.material]) if (m) m.wireframe = wireframe;
    });
  }, [instance, placement.castShadow, placement.receiveShadow, wireframe]);

  const fallback = useMemo(() => (!instance && orphan ? orphan.clone(true) : null), [instance, orphan]);

  useLayoutEffect(() => {
    registerNode(placement.id, groupRef.current);
    return () => registerNode(placement.id, null);
  }, [placement.id]);

  useLayoutEffect(() => {
    const g = groupRef.current;
    if (!g) return;
    g.position.fromArray(placement.position);
    g.rotation.set(placement.rotation[0], placement.rotation[1], placement.rotation[2], 'XYZ');
    g.scale.fromArray(placement.scale);
    g.updateMatrixWorld(true);
  }, [placement.position, placement.rotation, placement.scale]);

  const bbox = useMemo(() => {
    if (proto) return proto.bbox;
    if (fallback) {
      const b = new THREE.Box3().setFromObject(fallback, true);
      if (!b.isEmpty()) return b;
    }
    const s = item?.size ?? { w: 1, h: 1, d: 1 };
    return new THREE.Box3(new THREE.Vector3(-s.w / 2, 0, -s.d / 2), new THREE.Vector3(s.w / 2, s.h, s.d / 2));
  }, [proto, fallback, item]);
  const center = useMemo(() => bbox.getCenter(new THREE.Vector3()), [bbox]);
  const size = useMemo(() => bbox.getSize(new THREE.Vector3()).max(new THREE.Vector3(0.05, 0.05, 0.05)), [bbox]);

  useLayoutEffect(() => {
    if (groupRef.current) groupRef.current.userData.bbox = bbox;
  }, [bbox]);

  const missing = !item || !item.supported;
  const colliderGeoms = useMemo(
    () => (showColliders && item?.colliders ? item.colliders.parts.map((p) => unitGeometry(p.type)) : []),
    [showColliders, item],
  );
  useEffect(() => () => { for (const g of colliderGeoms) g.dispose(); }, [colliderGeoms]);

  return (
    <group ref={groupRef} name={placement.id}>
      {instance && <primitive object={instance} />}
      {fallback && <primitive object={fallback} />}
      <mesh
        position={center}
        scale={size}
        onPointerDown={(e) => {
          if (e.button !== 0) return;
          e.stopPropagation();
          select(placement.id, { toggle: e.shiftKey });
        }}
      >
        <boxGeometry />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} colorWrite={false} />
      </mesh>
      {(selected || missing) && (
        <lineSegments position={center} scale={size} renderOrder={997}>
          <edgesGeometry args={[new THREE.BoxGeometry(1, 1, 1)]} />
          <lineBasicMaterial color={missing ? MISSING : SELECTED} depthTest={!selected} transparent opacity={selected ? 1 : 0.8} />
        </lineSegments>
      )}
      {showSockets && proto?.markers.sockets.map((s) => (
        <mesh key={s.name} position={s.position} renderOrder={999}>
          <octahedronGeometry args={[Math.max(0.03, size.length() * 0.03)]} />
          <meshBasicMaterial color={0x35d6d6} wireframe depthTest={false} transparent />
        </mesh>
      ))}
      {showColliders && item?.colliders?.parts.map((p, i) => (
        <mesh
          key={`${p.name}-${i}`}
          geometry={colliderGeoms[i]}
          position={p.offset}
          scale={[p.scale[0] * 2, p.scale[1] * 2, p.scale[2] * 2]}
          renderOrder={998}
        >
          <meshBasicMaterial color={p.isTrigger ? COLLIDER_COLORS.trigger : COLLIDER_COLORS.part} wireframe depthTest={false} depthWrite={false} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
  );
}
