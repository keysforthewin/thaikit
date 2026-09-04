import { useMemo } from 'react';
import { Html } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { placementWorldBox, isStatic } from './cells.js';
import { peekPrototype } from '../three/instances.js';
import { groundOf, groundExtent, docFootprints, GROUND_THICKNESS } from './ground.js';
import { bakeBounds, describeBakeBounds } from './bakeBounds.js';

/**
 * The world box the bake unwraps, drawn as a wireframe with its footprint on
 * the ground and one label reading its size. It is the static set plus the
 * ground tiles -- what the lightmap covers -- so a dynamic prop or a skyline
 * imposter stands outside it on purpose; the label says how many did.
 *
 * A placement whose prototype has not built yet is measured off its declared
 * size so the box does not jump when the last factory resolves; `protoRev`
 * still re-runs the union so the measured box replaces the guess.
 */
export function BakeBoundsOverlay({ cellSize }) {
  const doc = useLevel((s) => s.doc);
  const byRef = useLevel((s) => s.catalogue.byRef);
  const protoRev = useLevel((s) => s.protoRev);

  const bounds = useMemo(() => {
    const ground = groundOf(doc);
    let groundBox = null;
    if (ground.enabled) {
      const e = groundExtent(docFootprints(doc, byRef), { cellSize, margin: ground.margin });
      groundBox = { min: [e.minX, ground.y - GROUND_THICKNESS, e.minZ], max: [e.maxX, ground.y, e.maxZ], tiles: e.tiles.length };
    }
    const boxOf = (p) => {
      const item = byRef[p.ref];
      const b = placementWorldBox(p, item);
      if (b) return { min: b.min.toArray(), max: b.max.toArray() };
      const size = item?.size;
      if (!size) return null;
      const hw = (size.w * Math.abs(p.scale?.[0] ?? 1)) / 2;
      const hd = (size.d * Math.abs(p.scale?.[2] ?? 1)) / 2;
      const h = size.h * Math.abs(p.scale?.[1] ?? 1);
      return { min: [p.position[0] - hw, p.position[1], p.position[2] - hd], max: [p.position[0] + hw, p.position[1] + h, p.position[2] + hd] };
    };
    const b = bakeBounds(doc, {
      boxOf,
      isStatic: (p) => { const item = byRef[p.ref]; return isStatic(p, item, item ? peekPrototype(item) : null); },
      groundBox,
    });
    // The footprint is painted on the WALKABLE surface, not the box's floor:
    // the ground slab hangs a quarter-metre below its top and would hide it.
    return b && { ...b, floorY: groundBox ? ground.y : b.min[1] };
  }, [doc, byRef, cellSize, protoRev]); // eslint-disable-line react-hooks/exhaustive-deps

  const unitBox = useMemo(() => new THREE.EdgesGeometry(new THREE.BoxGeometry(1, 1, 1)), []);
  const unitSquare = useMemo(() => {
    const h = 0.5;
    return new THREE.BufferGeometry().setFromPoints([
      new THREE.Vector3(-h, 0, -h), new THREE.Vector3(h, 0, -h),
      new THREE.Vector3(h, 0, -h), new THREE.Vector3(h, 0, h),
      new THREE.Vector3(h, 0, h), new THREE.Vector3(-h, 0, h),
      new THREE.Vector3(-h, 0, h), new THREE.Vector3(-h, 0, -h),
    ]);
  }, []);

  if (!bounds) return null;
  const { min, max, size, floorY } = bounds;
  const centre = [(min[0] + max[0]) / 2, (min[1] + max[1]) / 2, (min[2] + max[2]) / 2];
  const label = describeBakeBounds(bounds);
  // One label per level, so it stays a fixed screen size rather than scaling
  // with distance the way the per-cell labels do: the box is read from far
  // enough away that a distance-scaled label is a speck.

  return (
    <group>
      <lineSegments geometry={unitBox} position={centre} scale={size}>
        <lineBasicMaterial color={0xf2c14e} transparent opacity={0.85} depthTest={false} />
      </lineSegments>
      {/* The footprint, painted on the floor with a translucent fill so the
          extent reads from above even where the box's verticals are hidden. */}
      <mesh position={[centre[0], floorY + 0.03, centre[2]]} rotation={[-Math.PI / 2, 0, 0]} scale={[size[0], size[2], 1]}>
        <planeGeometry args={[1, 1]} />
        <meshBasicMaterial color={0xf2c14e} transparent opacity={0.08} depthWrite={false} side={THREE.DoubleSide} />
      </mesh>
      <lineSegments geometry={unitSquare} position={[centre[0], floorY + 0.03, centre[2]]} scale={[size[0], 1, size[2]]}>
        <lineBasicMaterial color={0xf2c14e} transparent opacity={0.5} />
      </lineSegments>
      <group position={[centre[0], max[1] + 1, centre[2]]}>
        <Html center zIndexRange={[5, 0]} style={{ pointerEvents: 'none' }}>
          <div className="cell-label bounds">{label}</div>
        </Html>
      </group>
    </group>
  );
}
