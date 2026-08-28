import { useMemo } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

/** The bake's cells, drawn as squares on the ground with what each will cost. */
export function CellOverlay({ stats, cellSize, warnAt = 40 }) {
  const cells = useMemo(() => [...stats.cells.values()], [stats]);
  const square = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const h = 0.5;
    g.setFromPoints([
      new THREE.Vector3(-h, 0, -h), new THREE.Vector3(h, 0, -h),
      new THREE.Vector3(h, 0, -h), new THREE.Vector3(h, 0, h),
      new THREE.Vector3(h, 0, h), new THREE.Vector3(-h, 0, h),
      new THREE.Vector3(-h, 0, h), new THREE.Vector3(-h, 0, -h),
    ]);
    return g;
  }, []);
  return (
    <group>
      {cells.map((c) => {
        const x = (c.ix + 0.5) * cellSize;
        const z = (c.iz + 0.5) * cellSize;
        const hot = c.mergedDrawCalls > warnAt;
        return (
          <group key={c.key} position={[x, 0.02, z]}>
            <lineSegments geometry={square} scale={[cellSize, 1, cellSize]}>
              <lineBasicMaterial color={hot ? 0xe2686d : 0x6ea8fe} transparent opacity={0.7} />
            </lineSegments>
            <Html center distanceFactor={cellSize * 2.2} zIndexRange={[5, 0]} style={{ pointerEvents: 'none' }}>
              <div className={`cell-label ${hot ? 'hot' : ''}`}>
                {c.key} · {c.objects} obj · {c.mergedDrawCalls} dc · {(c.triangles / 1000).toFixed(0)}k tri
              </div>
            </Html>
          </group>
        );
      })}
    </group>
  );
}
