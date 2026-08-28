import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Center, Grid, OrbitControls, Stage, TransformControls, useBounds } from '@react-three/drei';
import * as THREE from 'three';

import { loadFactory, baseUrlOf } from './three/modelModule.js';
import { disposeScene } from './three/dispose.js';
import { useMeshStats } from './three/stats.js';
import { useRuntimeMarkers, MarkerGizmos, unplaced } from './three/runtimeMarkers.jsx';
import { unitGeometry } from './three/colliderGeometry.js';

/**
 * Build a fresh scene from a module. The module itself is cached by URL in
 * three/modelModule.js; the built scene is per mount, because a factory's
 * output is mutable (wireframe toggles, destruction poses) and is disposed on
 * unmount.
 */
function useModelFactory(url, exportName) {
  const [state, setState] = useState({ scene: null, error: null, loading: Boolean(url) });
  const current = useRef(null);

  useEffect(() => {
    if (!url) {
      setState({ scene: null, error: null, loading: false });
      return undefined;
    }
    let cancelled = false;
    setState({ scene: null, error: null, loading: true });

    (async () => {
      try {
        const factory = await loadFactory(url, exportName);
        const scene = factory({}, { baseUrl: baseUrlOf(url) });
        if (!scene?.isObject3D) throw new Error('factory did not return an Object3D');
        if (cancelled) { disposeScene(scene); return; }

        disposeScene(current.current);
        current.current = scene;
        setState({ scene, error: null, loading: false });
      } catch (err) {
        if (!cancelled) setState({ scene: null, error: err.message, loading: false });
      }
    })();

    return () => { cancelled = true; };
  }, [url, exportName]);

  useEffect(() => () => { disposeScene(current.current); current.current = null; }, []);

  return state;
}

const AMBER = 0xf0a63a;
const TRIGGER = 0xc06cf0;
const SELECTED = 0x7ee787;

/**
 * The compound, selectable and draggable.
 *
 * Parented to the SCENE ROOT rather than to a component node, because the record
 * these parts come from is in root-local metres. The system this replaced kept
 * each proxy under the component that owned it, which it had to: those offsets
 * were in the component's own frame and detached the moment anything animated.
 * One frame for the whole compound is what lets a consumer build a compound body
 * from the file without walking the scene graph at all.
 */
function ColliderEditor({ parts, selected, onSelect, onTarget, editable }) {
  const refs = useRef([]);
  const geoms = useMemo(() => parts.map((p) => unitGeometry(p.type)), [parts]);
  useEffect(() => () => { for (const g of geoms) g.dispose(); }, [geoms]);

  // Hand the selected proxy UP rather than driving a gizmo from here. The gizmo
  // itself is mounted at the scene root, outside this subtree, for two reasons
  // it cannot be inside for -- see the comment on <ColliderGizmo>.
  useEffect(() => {
    onTarget(selected === null ? null : refs.current[selected] ?? null);
    return () => onTarget(null);
  }, [onTarget, selected, parts]);

  return (
    <group>
      {parts.map((p, i) => (
        <mesh
          key={`${p.name}-${i}`}
          ref={(o) => { refs.current[i] = o; }}
          geometry={geoms[i]}
          position={p.offset}
          rotation={[0, p.yaw ?? 0, 0]}
          scale={[p.scale[0] * 2, p.scale[1] * 2, p.scale[2] * 2]}
          renderOrder={998}
          onPointerDown={(e) => {
            if (!editable) return;
            e.stopPropagation();
            onSelect(i);
          }}
        >
          <meshBasicMaterial
            color={i === selected ? SELECTED : p.isTrigger ? TRIGGER : AMBER}
            wireframe
            // Draw through the prop: a collider is almost always INSIDE the
            // geometry it stands in for, so a depth-tested proxy is invisible
            // exactly when you most need to see it.
            depthTest={false}
            depthWrite={false}
            transparent
            opacity={i === selected ? 1 : 0.85}
          />
        </mesh>
      ))}
    </group>
  );
}

/**
 * The drag gizmo, mounted at the SCENE ROOT and never inside the framing groups.
 *
 * TransformControls is an Object3D carrying a 100,000-unit picker plane and
 * axis lines a million units long, and it sits wherever it is rendered. Both
 * facts bite if it is mounted next to the proxies it drags:
 *
 * - `<Bounds observe>` refits by measuring the bounding box of everything under
 *   it. With the gizmo inside, that box is a million metres wide, so the next
 *   refit -- a window resize, the drawer opening -- flies the camera off and
 *   sets near/far to match. The prop, the grid and the proxies all vanish and
 *   the gizmo, which is scaled to a fixed size on screen, is the only thing
 *   left. That is the bug this arrangement exists to prevent.
 * - `<Center>` translates its children to put the model on the origin. The
 *   gizmo copies its target's WORLD position into its own LOCAL one, so under
 *   Center it lands offset by however far the model was moved -- for the oil
 *   drum, half a metre below the part it is supposed to be holding.
 *
 * The target is a mesh deep inside both groups, which is fine: the controls read
 * `object.matrixWorld` and write back through the parent's inverse, so a gizmo
 * at the root drives a nested object correctly.
 */
function ColliderGizmo({ target, mode, onCommit }) {
  // Yaw only: a walkable proxy has no use for pitch or roll, and constraining it
  // keeps the record cheap for a consumer -- and honest, since nothing
  // downstream reads two more angles.
  const commit = () => {
    if (!target) return;
    onCommit({
      offset: [target.position.x, target.position.y, target.position.z].map((n) => +n.toFixed(4)),
      scale: [target.scale.x / 2, target.scale.y / 2, target.scale.z / 2].map((n) =>
        +Math.max(0.005, n).toFixed(4),
      ),
      yaw: +target.rotation.y.toFixed(4),
    });
  };

  if (!target) return null;
  return (
    <TransformControls
      object={target}
      mode={mode}
      // OrbitControls is makeDefault, so the gizmo suspends orbiting for the
      // length of a drag on its own. Without that, dragging a face spins the
      // camera at the same time and neither gesture does what you meant.
      onMouseUp={commit}
      showX
      showY
      showZ
    />
  );
}

/**
 * Pull the destruction groups apart, so the grouping is something you can see.
 *
 * A list of group names says a prop is breakable; it does not say WHICH parts
 * break away together, which is the only thing that matters when a lid and its
 * hinge end up in different groups. Parts that move together are one group, and
 * anything that stays put belongs to no group at all -- also worth seeing.
 *
 * The rest pose and the fully-separated pose are both computed ONCE, at rest, and
 * every frame just interpolates between them. Recomputing an outward direction
 * each frame while the parents are themselves moving feeds back on itself and the
 * model drifts apart forever.
 */
function useDestruction(scene, groups, active) {
  const poses = useMemo(() => {
    if (!scene || !groups.length) return [];
    const bounds = new THREE.Box3().setFromObject(scene);
    const centre = bounds.getCenter(new THREE.Vector3());
    const spread = bounds.getSize(new THREE.Vector3()).length() * 0.25;

    const out = [];
    for (const group of groups) {
      const groupBounds = new THREE.Box3();
      for (const member of group.members) groupBounds.expandByObject(member);
      const direction = groupBounds.isEmpty()
        ? new THREE.Vector3()
        : groupBounds.getCenter(new THREE.Vector3()).sub(centre);
      // A group centred on the model has no outward direction of its own -- the
      // drum's body shell is exactly this -- and it STAYS PUT, as the core the
      // others break away from. Giving it an arbitrary lift instead pushes every
      // group sitting above it out of frame, and reads as the whole prop floating
      // rather than as one assembly detaching.
      if (direction.lengthSq() < 1e-8) continue;
      direction.normalize().multiplyScalar(spread);

      // Only the OUTERMOST node of each group is moved. The rest of the group are
      // its descendants and already travel with it, so offsetting them too applies
      // the group's delta once per level of nesting -- which is why the drum's bung
      // caps, three levels down, shot three times as far as the head they sit on.
      // A node whose ancestor is in a DIFFERENT group is left alone here on purpose:
      // that assembly should fly off the part it was bolted to.
      const owned = new Set(group.members);
      const outermost = group.members.filter((node) => {
        for (let p = node.parent; p; p = p.parent) if (owned.has(p)) return false;
        return true;
      });

      for (const node of outermost) {
        if (!node.parent) continue;
        const home = node.position.clone();
        const toParent = new THREE.Matrix4().copy(node.parent.matrixWorld).invert();
        const away = node
          .getWorldPosition(new THREE.Vector3())
          .add(direction)
          .applyMatrix4(toParent);
        out.push({ node, home, away });
      }
    }
    return out;
  }, [scene, groups]);

  const progress = useRef(0);

  useFrame((_, delta) => {
    if (!poses.length) return;
    const target = active ? 1 : 0;
    if (progress.current === target) return;
    // Eased rather than snapped: the point is to watch which parts leave together.
    const step = Math.min(1, delta * 2.5);
    progress.current += (target - progress.current) * step;
    if (Math.abs(target - progress.current) < 0.001) progress.current = target;
    for (const { node, home, away } of poses) node.position.lerpVectors(home, away, progress.current);
  });

  // Always put the model back. Leaving a prop exploded would make the next
  // screenshot, and the next reader, believe that is its rest pose.
  useEffect(
    () => () => { for (const { node, home } of poses) node.position.copy(home); },
    [poses],
  );
}

function Model({
  scene, wireframe, showPivots, showSockets, showColliders, breaking, onStats, onRuntime, collider,
}) {
  const stats = useMeshStats(scene);
  const runtime = useRuntimeMarkers(scene);

  useEffect(() => { onStats?.(stats); }, [stats, onStats]);
  useEffect(() => { onRuntime?.(runtime); }, [runtime, onRuntime]);

  useEffect(() => {
    scene?.traverse((o) => {
      if (o.isMesh) o.material.wireframe = wireframe;
    });
  }, [scene, wireframe]);

  const markerSize = useMemo(() => {
    if (!scene) return 0.1;
    const box = new THREE.Box3().setFromObject(scene);
    return Math.max(0.02, box.getSize(new THREE.Vector3()).length() * 0.12);
  }, [scene]);

  // Above the early return deliberately: hooks may not be conditional, and this
  // one drives an animation that has to keep running to settle the model back.
  useDestruction(scene, runtime.groups, breaking);

  // Refit once the pieces have stopped moving. An exploded prop is larger than
  // the one that was framed, and without this the assembly that broke away flies
  // straight out of the viewport -- the demo shows you everything except the part
  // you turned it on to see. Deliberately NOT per frame: refitting while the
  // animation runs fights the camera the whole way out.
  const bounds = useBounds();
  useEffect(() => {
    const settle = setTimeout(() => bounds.refresh().clip().fit(), 500);
    return () => clearTimeout(settle);
  }, [bounds, breaking, showColliders, scene]);

  if (!scene) return null;
  return (
    <Center>
      <primitive object={scene} />
      {showPivots && <MarkerGizmos markers={runtime.pivots} size={markerSize} kind="pivot" />}
      {showSockets && <MarkerGizmos markers={runtime.sockets} size={markerSize} kind="socket" />}
      {showColliders && collider.parts.length > 0 && (
        <ColliderEditor
          parts={collider.parts}
          selected={collider.selected}
          onSelect={collider.onSelect}
          onTarget={collider.onTarget}
          editable={collider.editable}
        />
      )}
    </Center>
  );
}

export function Viewer({ url, version, exportName, colliders: parts, onCollidersChange }) {
  const [wireframe, setWireframe] = useState(false);
  const [grid, setGrid] = useState(true);
  const [pivots, setPivots] = useState(false);
  const [sockets, setSockets] = useState(false);
  const [colliders, setColliders] = useState(false);
  const [breaking, setBreaking] = useState(false);
  const [stats, setStats] = useState(null);
  const [runtime, setRuntime] = useState(null);
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState('translate');
  // The Object3D the gizmo drags, reported up from the proxies so the gizmo can
  // live at the scene root instead of beside them.
  const [target, setTarget] = useState(null);

  const editable = typeof onCollidersChange === 'function';
  const list = parts ?? [];

  /**
   * Deselect whenever the overlay is hidden or the prop changes.
   *
   * A selection index that outlives the list it indexes points at a different
   * part, or at nothing -- and a gizmo attached to nothing throws.
   */
  useEffect(() => { setSelected(null); }, [url, colliders]);
  useEffect(() => {
    if (selected !== null && selected >= list.length) setSelected(null);
  }, [selected, list.length]);

  const commitPart = (index, patch) => {
    if (!editable) return;
    onCollidersChange(list.map((p, i) => (i === index ? { ...p, ...patch } : p)));
  };

  const removePart = (index) => {
    if (!editable || index === null) return;
    onCollidersChange(list.filter((_, i) => i !== index));
    setSelected(null);
  };

  /**
   * A new box at the middle of the prop, a fifth of its size, selected at once.
   *
   * Dropped where you can see it rather than at the origin: a part added at
   * [0,0,0] on a base-center prop is half buried in the floor, and the first
   * thing you would do is drag it out.
   */
  const addPart = () => {
    if (!editable) return;
    const box = scene ? new THREE.Box3().setFromObject(scene) : null;
    const centre = box ? box.getCenter(new THREE.Vector3()) : new THREE.Vector3();
    const size = box ? box.getSize(new THREE.Vector3()) : new THREE.Vector3(1, 1, 1);
    const half = [size.x, size.y, size.z].map((n) => Math.max(0.05, n / 10));
    const names = new Set(list.map((p) => p.name));
    let n = list.length;
    let name = `part${n}`;
    while (names.has(name)) name = `part${(n += 1)}`;
    onCollidersChange([
      ...list,
      {
        name,
        type: 'box',
        offset: [+centre.x.toFixed(4), +centre.y.toFixed(4), +centre.z.toFixed(4)],
        scale: half.map((v) => +v.toFixed(4)),
        isTrigger: false,
      },
    ]);
    setSelected(list.length);
  };

  /**
   * Keyboard, guarded against a focused field.
   *
   * Delete is the whole reason for the guard: without it, backspacing a typo out
   * of the notes box in the details tab silently deletes a collider behind it.
   */
  useEffect(() => {
    if (!editable || !colliders) return undefined;
    const onKey = (e) => {
      const el = document.activeElement;
      const tag = el?.tagName;
      if (el?.isContentEditable || tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removePart(selected); }
      else if (e.key === 'w' || e.key === 'W') setMode('translate');
      else if (e.key === 'e' || e.key === 'E') setMode('rotate');
      else if (e.key === 'r' || e.key === 'R') setMode('scale');
      else if (e.key === 'Escape') setSelected(null);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  /**
   * A rebuilt prop always lands at the SAME path (`assets/<id>/model.bundle.js`),
   * so without a version in the URL the browser serves the old bytes from its
   * own cache and the new build appears only after a full reload. `no-cache` on
   * the static mount does not help with a cache that sits in front of fetch.
   */
  const src = useMemo(() => {
    if (!url) return null;
    if (!version) return url;
    return `${url}${url.includes('?') ? '&' : '?'}v=${encodeURIComponent(version)}`;
  }, [url, version]);

  const { scene, error, loading } = useModelFactory(src, exportName);

  if (!src) {
    return (
      <div className="viewer" style={{ display: 'grid', placeItems: 'center' }}>
        <span className="muted">no model generated yet</span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="viewer" style={{ display: 'grid', placeItems: 'center', padding: 16 }}>
        <span className="muted" style={{ textAlign: 'center' }}>
          this model failed to run
          <br />
          <span className="mono" style={{ fontSize: 11 }}>{error}</span>
        </span>
      </div>
    );
  }

  const mb = (n) => (n / 1048576).toFixed(2) + ' MB';

  return (
    <div className="viewer">
      <Canvas camera={{ fov: 35, position: [1.6, 1.2, 1.9] }} dpr={[1, 2]}>
        <Stage intensity={0.5} environment="city" adjustCamera={false}>
          <Bounds fit clip observe margin={1.1}>
            <Model
              scene={scene}
              wireframe={wireframe}
              showPivots={pivots}
              showSockets={sockets}
              showColliders={colliders}
              breaking={breaking}
              onStats={setStats}
              onRuntime={setRuntime}
              collider={{
                parts: list,
                selected,
                onSelect: setSelected,
                onTarget: setTarget,
                editable,
              }}
            />
          </Bounds>
        </Stage>
        {colliders && editable && (
          <ColliderGizmo
            target={target}
            mode={mode}
            onCommit={(patch) => commitPart(selected, patch)}
          />
        )}
        {grid && (
          <Grid
            args={[10, 10]}
            cellSize={0.1}
            sectionSize={1}
            infiniteGrid
            fadeDistance={12}
            sectionColor="#3a4152"
            cellColor="#252a36"
          />
        )}
        <OrbitControls makeDefault />
      </Canvas>

      <div className="controls">
        <button className={wireframe ? 'primary' : ''} onClick={() => setWireframe((v) => !v)}>
          wireframe
        </button>
        <button className={grid ? 'primary' : ''} onClick={() => setGrid((v) => !v)}>
          grid
        </button>
        <button
          className={pivots ? 'primary' : ''}
          onClick={() => setPivots((v) => !v)}
          title="axes helper at every named pivot — the axis a moving part turns on"
        >
          pivots{runtime ? ` (${runtime.pivots.length})` : ''}
        </button>
        <button
          className={sockets ? 'primary' : ''}
          onClick={() => setSockets((v) => !v)}
          title="cage at every named socket — the points something attaches to"
        >
          sockets{runtime ? ` (${runtime.sockets.length})` : ''}
        </button>
        <button
          className={colliders ? 'primary' : ''}
          onClick={() => setColliders((v) => !v)}
          disabled={!list.length && !editable}
          title="the physics compound an engine tests against — amber, purple for a trigger, green for the selected part"
        >
          colliders ({list.length})
        </button>
        <button
          className={breaking ? 'primary' : ''}
          onClick={() => setBreaking((v) => !v)}
          disabled={runtime ? runtime.groups.length === 0 : false}
          title="pull the destruction groups apart — parts that move together break away together"
        >
          break{runtime ? ` (${runtime.groups.length})` : ''}
        </button>
      </div>

      {/*
        The edit bar, opposite the view toggles. It appears only while the
        colliders are actually being drawn: a gizmo mode row and a delete key
        that act on something invisible are how you lose a part without noticing.
      */}
      {colliders && editable && (
        <div className="edit-controls">
          {selected !== null && (
            <>
              <span className="mono readout">
                {list[selected]?.name} · {(list[selected]?.scale[0] * 2).toFixed(2)} ×{' '}
                {(list[selected]?.scale[1] * 2).toFixed(2)} × {(list[selected]?.scale[2] * 2).toFixed(2)} m
              </span>
              <div className="gizmo">
                {['translate', 'rotate', 'scale'].map((m, i) => (
                  <button
                    key={m}
                    className={mode === m ? 'primary' : ''}
                    onClick={() => setMode(m)}
                    title={`${m} — ${'WER'[i]}`}
                  >
                    {m}
                  </button>
                ))}
                <button onClick={() => removePart(selected)} title="remove this part — Delete">
                  delete
                </button>
              </div>
            </>
          )}
          <div className="gizmo">
            <button className="primary" onClick={addPart} title="add a box at the centre of the prop">
              + collider
            </button>
          </div>
        </div>
      )}

      {loading && <div className="overlay">running factory…</div>}

      {!loading && stats && (
        <div className="overlay">
          {stats.triangles.toLocaleString()} tris · {stats.drawCalls} draw call
          {stats.drawCalls === 1 ? '' : 's'} · {stats.materials} material
          {stats.materials === 1 ? '' : 's'} · {stats.uniqueGeometries} geometr
          {stats.uniqueGeometries === 1 ? 'y' : 'ies'}
          <br />
          {stats.textures} texture{stats.textures === 1 ? '' : 's'} · {mb(stats.gpuBytes)} VRAM
          {runtime && (
            <>
              <br />
              {runtime.pivots.length} pivot{runtime.pivots.length === 1 ? '' : 's'} ·{' '}
              {runtime.sockets.length} socket{runtime.sockets.length === 1 ? '' : 's'} ·{' '}
              {list.length} collider{list.length === 1 ? '' : 's'} ·{' '}
              {runtime.groups.length} group{runtime.groups.length === 1 ? '' : 's'}
              {/* A name on sculptRuntime with no object behind it draws nothing.
                  Counting it with the rest would make a broken contract look kept. */}
              {unplaced(runtime) > 0 && (
                <span title="named on sculptRuntime but no object in the scene answers to that name">
                  {' '}· {unplaced(runtime)} unplaced
                </span>
              )}
              {/* While the prop is apart, say which group is which -- the shapes
                  flying outward are unlabelled otherwise. */}
              {breaking && runtime.groups.length > 0 && (
                <>
                  <br />
                  <span className="muted">
                    breaking into {runtime.groups.map((g) => g.name).join(', ')}
                  </span>
                </>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}
