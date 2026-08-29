import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, Grid, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { setViewport } from './viewportRef.js';
import { groundOf, groundExtent, docFootprints } from './ground.js';
import { skyOf, skyIsActive } from './sky.js';
import { SkyDome } from './SkyDome.jsx';
import { PlacementNode } from './PlacementNode.jsx';
import { LightNode, SpawnNode } from './Lights.jsx';
import { SelectionGizmo } from './SelectionGizmo.jsx';
import { SnapHint } from './SnapHint.jsx';
import { CellOverlay } from './CellOverlay.jsx';

/**
 * The invisible pick plane every "add here" reads. It sits at the ground's
 * height when there is a ground, so a light or a spawn dropped on it lands on
 * the floor rather than under it.
 */
function PickPlane({ y }) {
  const setGroundHit = useLevel((s) => s.setGroundHit);
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, y - 0.001, 0]}
      onPointerMove={(e) => setGroundHit([e.point.x, y, e.point.z])}
      onPointerDown={(e) => { if (e.button === 0) setGroundHit([e.point.x, y, e.point.z]); }}
    >
      <planeGeometry args={[4000, 4000]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
}

/**
 * The ground as it will bake: the same rectangle, at the same height. Drawn as
 * ONE quad here because the editor has no reason to pay for the tiles -- the
 * cut to cells happens in buildExportScene, where it buys merging and LOD.
 * `name` is what the placement raycast looks for.
 */
function GroundPlane({ ground, extent }) {
  return (
    <mesh
      name="__ground"
      rotation={[-Math.PI / 2, 0, 0]}
      position={[(extent.minX + extent.maxX) / 2, ground.y, (extent.minZ + extent.maxZ) / 2]}
      receiveShadow
    >
      <planeGeometry args={[extent.width, extent.depth]} />
      <meshStandardMaterial color={ground.color} roughness={1} metalness={0} />
    </mesh>
  );
}

export function Viewport({ stats }) {
  const doc = useLevel((s) => s.doc);
  const view = useLevel((s) => s.view);
  const levelId = useLevel((s) => s.levelId);
  const skyRev = useLevel((s) => s.skyRev);
  const clearSelection = useLevel((s) => s.clearSelection);
  const env = doc?.settings?.environment;
  const bg = useMemo(() => new THREE.Color(env?.background ?? '#0b0d16'), [env?.background]);
  if (!doc) return <div className="viewport empty-viewport"><span className="muted">open or create a level</span></div>;
  const hemi = env?.hemisphere ?? {};
  const cellSize = doc.settings?.cellSize ?? 24;
  const ground = groundOf(doc);
  const sky = skyOf(doc);
  // The flat colour is the background whenever there is no sky, and it is also
  // what SkyDome restores when one is switched off -- so it goes to the dome
  // rather than being attached here, or the two would fight over the property.
  const hasSky = skyIsActive(sky);

  return (
    <div className="viewport">
      <Canvas
        shadows
        camera={{ fov: 50, near: 0.1, far: 3000, position: [18, 14, 22] }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onPointerMissed={(e) => { if (e.button === 0 && !useLevel.getState().dragging) clearSelection(); }}
        onCreated={(state) => { setViewport(state); state.scene.background = bg; if (import.meta.env.DEV) window.__r3f = state; }}
      >
        {hasSky
          ? <SkyDome sky={sky} levelId={levelId} rev={skyRev} fallbackColor={bg} />
          : <color attach="background" args={[bg]} />}
        <hemisphereLight args={[hemi.sky ?? '#8797c2', hemi.ground ?? '#2a2620', hemi.intensity ?? 0.35]} />
        <PickPlane y={ground.enabled ? ground.y : 0} />
        {ground.enabled && <GroundPlane ground={ground} extent={groundExtent(docFootprints(doc, useLevel.getState().catalogue.byRef), { cellSize, margin: ground.margin })} />}
        {view.grid && (
          <Grid
            args={[cellSize * 8, cellSize * 8]}
            cellSize={doc.settings?.gridSize ?? 1}
            sectionSize={cellSize}
            infiniteGrid
            fadeDistance={400}
            fadeStrength={1.5}
            sectionColor="#3a4152"
            cellColor="#20242f"
            position={[0, 0.001, 0]}
          />
        )}
        {view.axes && <axesHelper args={[5]} />}
        {doc.placements.map((p) => <PlacementNode key={p.id} placement={p} />)}
        {doc.lights.map((l) => <LightNode key={l.id} light={l} />)}
        {doc.spawns.map((s) => <SpawnNode key={s.id} spawn={s} />)}
        {view.cells && stats && <CellOverlay stats={stats} cellSize={cellSize} />}
        <SnapHint />
        <SelectionGizmo />
        <OrbitControls makeDefault maxPolarAngle={Math.PI / 2 - 0.01} />
        <GizmoHelper alignment="bottom-right" margin={[70, 70]}>
          <GizmoViewport axisColors={['#e2686d', '#4ec98a', '#6ea8fe']} labelColor="white" />
        </GizmoHelper>
      </Canvas>
    </div>
  );
}
