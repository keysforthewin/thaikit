import { useMemo } from 'react';
import * as THREE from 'three';

import { useLevel } from './store.js';

/** The face the mover snapped to, drawn as a translucent quad through everything. */
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
  if (!quads.length) return null;
  return (
    <group>
      {quads.map((q) => (
        <mesh key={q.id} matrixAutoUpdate={false} matrix={q.matrix} renderOrder={1000}>
          <planeGeometry args={[q.w, q.h]} />
          <meshBasicMaterial color={0x6ea8fe} transparent opacity={0.28} depthTest={false} depthWrite={false} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}
