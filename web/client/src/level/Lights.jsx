import { useEffect, useLayoutEffect, useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { rootOf, selectedSet } from './groups.js';
import { registerNode } from './nodes.js';
import { targetIdOf } from './ids.js';
import { gizmoOwnsPointer } from './gizmoRef.js';

const HANDLE = 0xffd36b;
const SELECTED = 0x7ee787;

/**
 * A light as the editor shows it: the real three light, a selectable handle at
 * its position, and for anything with a direction a second handle it aims at.
 * Both handles are level-root children with the light's id (and `:target`), so
 * the gizmo moves them like any other node and the commit re-derives direction.
 */
export function LightNode({ light }) {
  const selected = useLevel((s) => selectedSet(s).has(light.id) || s.selection.includes(targetIdOf(light.id)));
  const showHelpers = useLevel((s) => s.view.helpers);
  const select = useLevel((s) => s.select);
  const handleRef = useRef(null);
  const targetRef = useRef(null);
  const helperRef = useRef(null);

  const obj = useMemo(() => {
    let l;
    if (light.type === 'directional') l = new THREE.DirectionalLight();
    else if (light.type === 'spot') l = new THREE.SpotLight();
    else l = new THREE.PointLight();
    l.name = `live_${light.id}`;
    return l;
  }, [light.type, light.id]);

  useEffect(() => {
    obj.color.set(light.color);
    obj.intensity = light.enabled === false ? 0 : light.intensity;
    obj.castShadow = Boolean(light.castShadow);
    if (light.type !== 'directional') { obj.distance = light.distance ?? 0; obj.decay = light.decay ?? 2; }
    if (light.type === 'spot') { obj.angle = light.angle ?? Math.PI / 6; obj.penumbra = light.penumbra ?? 0; }
    const sh = light.shadow ?? {};
    obj.shadow.mapSize.set(sh.mapSize ?? 1024, sh.mapSize ?? 1024);
    obj.shadow.bias = sh.bias ?? -0.0005;
    obj.shadow.normalBias = sh.normalBias ?? 0.02;
    if (light.type === 'directional') {
      const ext = sh.extent ?? 60;
      const c = obj.shadow.camera;
      c.left = -ext; c.right = ext; c.top = ext; c.bottom = -ext; c.near = 0.5; c.far = ext * 4;
      c.updateProjectionMatrix();
    }
    if (obj.shadow.map) { obj.shadow.map.dispose(); obj.shadow.map = null; }
  }, [obj, light]);

  const targetDistance = light.type === 'directional' ? 20 : Math.max(2, (light.distance || 10) * 0.6);
  const targetPos = useMemo(() => {
    if (!light.direction) return null;
    return new THREE.Vector3().fromArray(light.position).addScaledVector(new THREE.Vector3().fromArray(light.direction), targetDistance);
  }, [light.position, light.direction, targetDistance]);

  useLayoutEffect(() => {
    registerNode(light.id, handleRef.current);
    if (targetRef.current) registerNode(targetIdOf(light.id), targetRef.current);
    return () => { registerNode(light.id, null); registerNode(targetIdOf(light.id), null); };
  }, [light.id]);

  useLayoutEffect(() => {
    handleRef.current?.position.fromArray(light.position);
    if (targetRef.current && targetPos) targetRef.current.position.copy(targetPos);
  }, [light.position, targetPos]);

  // The live light follows the handles every frame, so a drag lights the scene as it goes.
  useFrame(() => {
    const h = handleRef.current;
    if (!h) return;
    obj.position.copy(h.position);
    if (targetRef.current) {
      obj.target.position.copy(targetRef.current.position);
      obj.target.updateMatrixWorld(true);
    }
    helperRef.current?.update?.();
  });

  const helper = useMemo(() => {
    if (light.type === 'directional') return new THREE.DirectionalLightHelper(obj, 2, HANDLE);
    if (light.type === 'spot') return new THREE.SpotLightHelper(obj, HANDLE);
    return new THREE.PointLightHelper(obj, 0.4, HANDLE);
  }, [obj, light.type]);
  useEffect(() => { helperRef.current = helper; return () => helper.dispose(); }, [helper]);

  // The gizmo has first claim on a click; Ctrl reaches past it. A light handle
  // is drawn with depthTest off, so without this it is ALWAYS in front of the
  // widget attached to it.
  const onPick = (id) => (e) => {
    if (e.button !== 0) return;
    if (!e.ctrlKey && !e.metaKey && gizmoOwnsPointer(e)) return;
    e.stopPropagation();
    // A joined light picks up its group, like any other member. The aim handle
    // is always its own: dragging a group by a light's target makes no sense.
    const st = useLevel.getState();
    select(e.altKey || id !== light.id ? id : rootOf(st.doc, id), { toggle: e.shiftKey });
  };
  const color = selected ? SELECTED : HANDLE;

  return (
    <group>
      <primitive object={obj} />
      {light.direction && <primitive object={obj.target} />}
      {showHelpers && <primitive object={helper} />}
      <group ref={handleRef} name={light.id}>
        <mesh onPointerDown={onPick(light.id)} renderOrder={996}>
          {light.type === 'directional' ? <sphereGeometry args={[0.6, 16, 12]} /> : <sphereGeometry args={[0.25, 16, 12]} />}
          <meshBasicMaterial color={color} wireframe={!selected} transparent opacity={0.9} depthTest={false} />
        </mesh>
      </group>
      {targetPos && (
        <group ref={targetRef} name={targetIdOf(light.id)}>
          <mesh onPointerDown={onPick(targetIdOf(light.id))} renderOrder={996}>
            <torusGeometry args={[0.35, 0.05, 8, 24]} />
            <meshBasicMaterial color={color} depthTest={false} transparent opacity={0.9} />
          </mesh>
        </group>
      )}
    </group>
  );
}

export function SpawnNode({ spawn }) {
  const selected = useLevel((s) => selectedSet(s).has(spawn.id));
  const select = useLevel((s) => s.select);
  const ref = useRef(null);
  useLayoutEffect(() => { registerNode(spawn.id, ref.current); return () => registerNode(spawn.id, null); }, [spawn.id]);
  useLayoutEffect(() => {
    if (!ref.current) return;
    ref.current.position.fromArray(spawn.position);
    ref.current.rotation.set(0, THREE.MathUtils.degToRad(spawn.yawDeg ?? 0), 0);
  }, [spawn.position, spawn.yawDeg]);
  return (
    <group ref={ref} name={spawn.id}>
      <mesh
        position={[0, 0.9, 0]}
        onPointerDown={(e) => {
          if (!e.ctrlKey && !e.metaKey && gizmoOwnsPointer(e)) return;
          e.stopPropagation();
          const st = useLevel.getState();
          select(e.altKey ? spawn.id : rootOf(st.doc, spawn.id), { toggle: e.shiftKey });
        }}
      >
        <capsuleGeometry args={[0.3, 1.2, 4, 8]} />
        <meshBasicMaterial color={selected ? SELECTED : 0x4ec98a} wireframe transparent opacity={0.8} />
      </mesh>
      <mesh position={[0, 0.9, -0.6]} rotation={[-Math.PI / 2, 0, 0]}>
        <coneGeometry args={[0.15, 0.4, 8]} />
        <meshBasicMaterial color={selected ? SELECTED : 0x4ec98a} />
      </mesh>
    </group>
  );
}
