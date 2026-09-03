import { useMemo } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';

/** The face the mover snapped to, drawn as a translucent quad through everything, and a ring where it rests on the surface beneath. */
export function SnapHint() {
  const hint = useLevel((s) => s.snapHint);
  const quads = useMemo(() => {
    if (!hint) return [];
    return hint.hits.map((h) => {
      const f = h.face;
      const m = new THREE.Matrix4().makeBasis(f.u, f.v, f.normal).setPosition(f.center.clone().addScaledVector(f.normal, 0.003));
      return { id: f.id + f.center.toArray().join(','), matrix: m, w: f.hu * 2, h: f.hv * 2 };
    });
  }, [hint]);
  const rest = hint?.surface ?? null;
  if (!quads.length && !rest) return null;
  return (
    <group>
      {rest && (
        <mesh position={[rest.point.x, rest.point.y + 0.003, rest.point.z]} rotation={[-Math.PI / 2, 0, 0]} renderOrder={1000}>
          <ringGeometry args={[rest.radius * 0.85, rest.radius, 32]} />
          <meshBasicMaterial color={rest.on === 'ground' ? 0x7ee787 : 0x6ea8fe} transparent opacity={0.6} depthTest={false} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      )}
      {quads.map((q) => (
        <mesh key={q.id} matrixAutoUpdate={false} matrix={q.matrix} renderOrder={1000}>
          <planeGeometry args={[q.w, q.h]} />
          <meshBasicMaterial color={0x6ea8fe} transparent opacity={0.28} depthTest={false} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
