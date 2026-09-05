import { useMemo } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { groundOf } from './ground.js';

const TINT = 0xf2c14e;

/**
 * The cell the export dialog is about to quick-export, painted on the floor:
 * a tinted translucent square the size of the cell, its outline, four corner
 * posts so it reads from a low camera too, and one label. Drawn whenever the
 * dialog has a cell chosen -- behind the dialog while it is open (the
 * backdrop only dims it) and after it closes -- so "what am I exporting?" is
 * answered by looking, not by reading a key.
 */
export function QuickCellOverlay({ cellSize }) {
  const key = useLevel((s) => s.quickCell);
  const doc = useLevel((s) => s.doc);
  const y = groundOf(doc).enabled ? groundOf(doc).y : 0;
  const cell = useMemo(() => {
    const m = /^(-?\d+)_(-?\d+)$/.exec(key ?? '');
    return m ? { ix: Number(m[1]), iz: Number(m[2]) } : null;
  }, [key]);
  const square = useMemo(() => {
    const h = 0.5;
    return new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-h, 0, -h), new THREE.Vector3(h, 0, -h),
      new THREE.Vector3(h, 0, -h), new THREE.Vector3(h, 0, h),
      new THREE.Vector3(h, 0, h), new THREE.Vector3(-h, 0, h),
      new THREE.Vector3(-h, 0, h), new THREE.Vector3(-h, 0, -h),
    ]);
  }, []);
  if (!cell) return null;
  const x = (cell.ix + 0.5) * cellSize;
  const z = (cell.iz + 0.5) * cellSize;
  const h = cellSize / 2;
  const postH = Math.max(3, cellSize / 4);
  return (
    <group position={[x, y, z]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]} raycast={() => {}}>
        <planeGeometry args={[cellSize, cellSize]} />
        <meshBasicMaterial color={TINT} transparent opacity={0.12} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments geometry={square} scale={[cellSize, 1, cellSize]} position={[0, 0.04, 0]}>
        <lineBasicMaterial color={TINT} transparent opacity={0.95} />
      </lineSegments>
      {[[-h, -h], [h, -h], [h, h], [-h, h]].map(([px, pz]) => (
        <mesh key={`${px}_${pz}`} position={[px, postH / 2, pz]} raycast={() => {}}>
          <boxGeometry args={[0.15, postH, 0.15]} />
          <meshBasicMaterial color={TINT} transparent opacity={0.7} />
        </mesh>
      ))}
      <Html center position={[0, 0.5, 0]} distanceFactor={cellSize * 2.2} zIndexRange={[6, 0]} style={{ pointerEvents: 'none' }}>
        <div className="cell-label bounds">quick export · cell {key}</div>
      </Html>
    </group>
  );
}
