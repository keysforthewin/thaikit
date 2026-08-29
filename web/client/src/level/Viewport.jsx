import { useEffect, useMemo } from 'react';
import { Canvas, useThree } from '@react-three/fiber';
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
import { PlayMode } from './play/PlayMode.jsx';

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

/**
 * Hold the camera to the stored HORIZONTAL field of view.
 *
 * three's `PerspectiveCamera.fov` is vertical, so the horizontal angle it
 * actually shows falls out of the viewport's aspect -- and this viewport's
 * aspect is whatever the two side panels leave behind. A hard-coded 50 vertical
 * was 62.6 degrees across at 1360x1041, which is why a panorama authored here
 * read as magnified beside the same file in a 360 viewer (Pannellum defaults to
 * 100 across; a game is usually 90). Anchoring the horizontal makes the amount
 * of world on screen a property of the setting rather than of the layout.
 *
 *   tan(vfov / 2) = tan(hfov / 2) / aspect
 */
function CameraFov({ fov }) {
  const camera = useThree((s) => s.camera);
  const size = useThree((s) => s.size);
  useEffect(() => {
    const aspect = size.width / Math.max(1, size.height);
    const v = 2 * Math.atan(Math.tan((fov * Math.PI) / 360) / aspect) * (180 / Math.PI);
    camera.fov = v;
    camera.updateProjectionMatrix();
  }, [camera, fov, size.width, size.height]);
  return null;
}

export function Viewport({ stats }) {
  const doc = useLevel((s) => s.doc);
  const view = useLevel((s) => s.view);
  const levelId = useLevel((s) => s.levelId);
  const skyRev = useLevel((s) => s.skyRev);
  const play = useLevel((s) => s.play);
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
        // Up to the display's OWN pixel ratio, capped at 2.
        //
        // This was [1, 1.5], which on an ordinary HiDPI laptop (devicePixelRatio
        // 2) rendered a 1360x1041 viewport into a 2040x1561 buffer and let the
        // browser scale it up to 2720x2082 -- every pixel in the editor, sky
        // included, arriving through a 1.33x upscale that the shipped game does
        // not apply. It is the one place the viewport knowingly showed something
        // softer than what ships, and it made a source-limited sky impossible to
        // tell from a pipeline defect. 2 rather than uncapped because a 3x phone
        // display would otherwise ask for 2.25x the fragments again for detail
        // nobody can see.
        dpr={[1, 2]}
        gl={{ antialias: true, powerPreference: 'high-performance' }}
        onPointerMissed={(e) => {
          const st = useLevel.getState();
          if (e.button === 0 && !st.dragging && !st.play) clearSelection();
        }}
        onCreated={(state) => { setViewport(state); state.scene.background = bg; if (import.meta.env.DEV) window.__r3f = state; }}
      >
        <CameraFov fov={view.fov ?? 90} />
        {hasSky
          ? <SkyDome sky={sky} levelId={levelId} rev={skyRev} fallbackColor={bg} />
          : <color attach="background" args={[bg]} />}
        <hemisphereLight args={[hemi.sky ?? '#8797c2', hemi.ground ?? '#2a2620', hemi.intensity ?? 0.35]} />
        {!play && <PickPlane y={ground.enabled ? ground.y : 0} />}
        {ground.enabled && <GroundPlane ground={ground} extent={groundExtent(docFootprints(doc, useLevel.getState().catalogue.byRef), { cellSize, margin: ground.margin })} />}
        {view.grid && !play && (
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
        {view.axes && !play && <axesHelper args={[5]} />}
        {doc.placements.map((p) => <PlacementNode key={p.id} placement={p} />)}
        {doc.lights.map((l) => <LightNode key={l.id} light={l} />)}
        {doc.spawns.map((s) => <SpawnNode key={s.id} spawn={s} />)}
        {view.cells && stats && !play && <CellOverlay stats={stats} cellSize={cellSize} />}
        {!play && <SnapHint />}
        {!play && <SelectionGizmo />}
        {play && <PlayMode />}
        {/* OrbitControls is `makeDefault`, so anything still calling update()
            would fight the character for the camera. It has to be disabled, not
            merely ignored. */}
        <OrbitControls makeDefault enabled={!play} maxPolarAngle={Math.PI / 2 - 0.01} />
        {!play && (
          <GizmoHelper alignment="bottom-right" margin={[70, 70]}>
            <GizmoViewport axisColors={['#e2686d', '#4ec98a', '#6ea8fe']} labelColor="white" />
          </GizmoHelper>
        )}
      </Canvas>
    </div>
  );
}
