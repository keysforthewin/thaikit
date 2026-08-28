import { useMemo } from 'react';
import { Canvas } from '@react-three/fiber';
import { GizmoHelper, GizmoViewport, Grid, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

import { useLevel } from './store.js';
import { PlacementNode } from './PlacementNode.jsx';
import { LightNode, SpawnNode } from './Lights.jsx';
import { SelectionGizmo } from './SelectionGizmo.jsx';
import { SnapHint } from './SnapHint.jsx';
import { CellOverlay } from './CellOverlay.jsx';

function Ground() {
  const setGroundHit = useLevel((s) => s.setGroundHit);
  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -0.001, 0]}
      onPointerMove={(e) => setGroundHit([e.point.x, 0, e.point.z])}
      onPointerDown={(e) => { if (e.button === 0) setGroundHit([e.point.x, 0, e.point.z]); }}
    >
      <planeGeometry args={[4000, 4000]} />
      <meshBasicMaterial visible={false} />
    </mesh>
  );
}

export function Viewport({ stats }) {
  const doc = useLevel((s) => s.doc);
  const view = useLevel((s) => s.view);
  const clearSelection = useLevel((s) => s.clearSelection);
  const env = doc?.settings?.environment;
  const bg = useMemo(() => new THREE.Color(env?.background ?? '#0b0d16'), [env?.background]);
  if (!doc) return <div className="viewport empty-viewport"><span className="muted">open or create a level</span></div>;
  const hemi = env?.hemisphere ?? {};
  const cellSize = doc.settings?.cellSize ?? 24;

  return (
    <div className="viewport">
      <Canvas
        shadows
        camera={{ fov: 50, near: 0.1, far: 3000, position: [18, 14, 22] }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onPointerMissed={(e) => { if (e.button === 0 && !useLevel.getState().dragging) clearSelection(); }}
        onCreated={(state) => { state.scene.background = bg; if (import.meta.env.DEV) window.__r3f = state; }}
      >
        <color attach="background" args={[bg]} />
        <hemisphereLight args={[hemi.sky ?? '#8797c2', hemi.ground ?? '#2a2620', hemi.intensity ?? 0.35]} />
        <Ground />
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
