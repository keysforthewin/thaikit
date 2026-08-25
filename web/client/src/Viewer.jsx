import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Bounds, Center, Grid, OrbitControls, Stage, useBounds } from '@react-three/drei';
import * as THREE from 'three';

/**
 * Live mesh stats, read off the constructed scene.
 *
 * GPU bytes and file bytes are shown separately and deliberately: they differ by
 * an order of magnitude, and it is the GPU number that decides whether a low-end
 * machine can hold the level.
 */
function useMeshStats(scene) {
  return useMemo(() => {
    if (!scene) return null;
    let triangles = 0;
    let vertices = 0;
    let drawCalls = 0;
    const materials = new Set();
    // Distinct geometries, not distinct meshes. The GAP between this and
    // drawCalls is the only visible evidence that a repeated part became one
    // InstancedMesh rather than N copies of the same primitive.
    const geometries = new Set();
    const images = new Set();
    let gpuBytes = 0;

    scene.traverse((o) => {
      if (!o.isMesh) return;
      drawCalls++;
      materials.add(o.material.uuid);
      const g = o.geometry;
      geometries.add(g.uuid);
      // An InstancedMesh is one draw call and one geometry but N copies on
      // screen, every one of which the GPU rasterises.
      const copies = o.isInstancedMesh ? o.count ?? 0 : 1;
      const meshVertices = g.attributes.position?.count ?? 0;
      vertices += meshVertices * copies;
      triangles += (g.index ? g.index.count / 3 : meshVertices / 3) * copies;

      for (const key of ['map', 'normalMap', 'roughnessMap', 'metalnessMap', 'emissiveMap', 'aoMap']) {
        const tex = o.material[key];
        const img = tex?.image;
        if (!img || images.has(img)) continue;
        images.add(img);
        // 4 bytes per texel, plus a third again for the mip chain.
        gpuBytes += Math.round((img.width ?? 0) * (img.height ?? 0) * 4 * (4 / 3));
      }
    });

    return {
      triangles: Math.round(triangles),
      vertices,
      drawCalls,
      materials: materials.size,
      uniqueGeometries: geometries.size,
      textures: images.size,
      gpuBytes,
    };
  }, [scene]);
}

/** Free everything the factory allocated. Nothing caches this for us. */
function disposeScene(root) {
  if (!root) return;
  root.traverse((o) => {
    if (!o.isMesh) return;
    o.geometry?.dispose?.();
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m) continue;
      for (const key of Object.keys(m)) {
        const v = m[key];
        if (v && v.isTexture) v.dispose();
      }
      m.dispose?.();
    }
  });
}

/**
 * Load and run a generated Three.js factory.
 *
 * The prop is code, not a file format, so there is no loader: the module is
 * fetched as text and evaluated with THIS page's THREE injected as its only
 * `require`. That is the whole reason build-model-module.mjs emits CommonJS with
 * `three` external -- an ESM build would need an import map, and an import map
 * either resolves to a second copy of three (whose Mesh is not r3f's Mesh, so
 * nothing renders) or forces a fixed-name three chunk out of Rollup.
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
        const res = await fetch(url);
        if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
        const code = await res.text();

        const mod = { exports: {} };
        // eslint-disable-next-line no-new-func
        new Function('module', 'exports', 'require', code)(mod, mod.exports, (name) => {
          if (name === 'three') return THREE;
          throw new Error(`model module required "${name}"; only "three" is provided`);
        });

        const factory = mod.exports[exportName || 'createObjectModel'] ?? mod.exports.default;
        if (typeof factory !== 'function') {
          throw new Error(
            `no factory export; expected "${exportName || 'createObjectModel'}" or a default, ` +
              `got: ${Object.keys(mod.exports).join(', ') || '(nothing)'}`,
          );
        }

        const scene = factory({}, {});
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

/**
 * `sculptRuntime` arrives in one of two shapes and both are legitimate.
 *
 * img2threejs's generator emits Records keyed by component id; a factory whose
 * wrapper normalises for thaikit emits arrays of named things. Neither side is
 * wrong -- they are two contracts over the same data -- so every reader here
 * accepts both rather than assuming whichever one the prop in front of it used.
 * A prop built without the normalising wrapper otherwise shows an empty runtime,
 * which reads as "this model has no pivots" when it means "I could not parse it".
 */
const entries = (value) => {
  if (Array.isArray(value)) {
    return value.map((item) =>
      typeof item === 'string' ? [item, null] : [item?.name, item],
    ).filter(([name]) => name);
  }
  if (value && typeof value === 'object') return Object.entries(value);
  return [];
};

const names = (list) => entries(list).map(([name]) => name);

/** Names on `sculptRuntime` that no object in the scene answers to. */
const unplaced = (runtime) =>
  ['pivots', 'sockets', 'colliders', 'groups'].reduce(
    (total, key) => total + ((runtime.declared?.[key] ?? 0) - (runtime[key]?.length ?? 0)),
    0,
  );

/**
 * The named pivots and sockets, counted whether or not they are being drawn.
 *
 * Counted separately because they answer different questions and a single
 * "markers" number answers neither. Pivots are moving parts, and a static prop
 * that reports eight of them has been given seven axes nothing will ever turn.
 * Sockets are attachment points, and a prop something clips onto that reports
 * none is missing its contract.
 *
 * `placed` is the count that actually resolved to a node in the scene: a name on
 * `sculptRuntime` with no object behind it draws nothing, and silently counting
 * it would make a broken contract look honoured.
 */
function useRuntimeMarkers(scene) {
  return useMemo(() => {
    const empty = { pivots: [], sockets: [], colliders: [], groups: [] };
    if (!scene) return empty;
    const rt = scene.userData?.sculptRuntime;
    if (!rt) return empty;

    // A runtime entry may carry its own Object3D, or only a name to look up.
    const nodeFor = (name, value) =>
      (value?.isObject3D ? value : null) ?? rt.byId?.nodes?.[name] ?? scene.getObjectByName(name);

    const resolve = (list) => {
      const out = [];
      for (const [name, value] of entries(list)) {
        const node = nodeFor(name, value);
        if (!node) continue;
        const position = new THREE.Vector3();
        node.getWorldPosition(position);
        out.push({ name, node, position });
      }
      return out;
    };

    // A collider's offset and dimensions are in the OWNING COMPONENT's local
    // frame, so the proxy is parented to that node rather than positioned in
    // world space -- otherwise it detaches the moment anything is animated.
    const colliders = [];
    for (const [name, value] of entries(rt.colliders)) {
      const shape = value?.isObject3D ? value.userData?.collider : value;
      const node = rt.byId?.nodes?.[name] ?? scene.getObjectByName(name);
      if (!node || !shape || typeof shape !== 'object') continue;
      colliders.push({ name, node, shape });
    }

    // Members may be the Object3Ds themselves, or component ids to resolve.
    const groups = [];
    for (const [name, value] of entries(rt.destructionGroups)) {
      const raw = Array.isArray(value) ? value : value?.members ?? [];
      const members = raw
        .map((m) => (m?.isObject3D ? m : rt.byId?.nodes?.[m] ?? scene.getObjectByName(String(m))))
        .filter(Boolean);
      if (members.length) groups.push({ name, members });
    }

    return {
      pivots: resolve(rt.pivots),
      sockets: resolve(rt.sockets),
      colliders,
      groups,
      declared: {
        pivots: names(rt.pivots).length,
        sockets: names(rt.sockets).length,
        colliders: names(rt.colliders).length,
        groups: names(rt.destructionGroups).length,
      },
    };
  }, [scene]);
}

/**
 * An axes helper at every marker in one set.
 *
 * This is the visible payoff of requiring pivots and sockets on anything that
 * moves, and the fastest way to see one is in the wrong place: a lid hinge
 * floating above the lid is obvious here and invisible in a beauty render.
 */
function MarkerGizmos({ markers, size, kind }) {
  // Build the helpers once per marker set and dispose them on the way out --
  // creating them inline would leak a helper per render.
  const helpers = useMemo(
    () =>
      markers.map((m) => {
        // Pivots and sockets are shown at once and must be told apart at a
        // glance: a pivot is an AXIS, so it gets the three coloured axes and you
        // can read which way a lid swings off it. A socket is a POINT something
        // clips into, with no orientation to read, so it gets one cyan cage.
        const helper =
          kind === 'pivot'
            ? new THREE.AxesHelper(size)
            : new THREE.Mesh(
                new THREE.OctahedronGeometry(size * 0.28),
                new THREE.MeshBasicMaterial({ color: 0x35d6d6, wireframe: true }),
              );
        // Draw through the prop. A hinge is almost always INSIDE the geometry it
        // hinges -- the lid pivot sits under the lid -- so a depth-tested gizmo
        // is invisible exactly when you most need to see it.
        helper.material.depthTest = false;
        helper.material.depthWrite = false;
        helper.material.transparent = true;
        helper.renderOrder = 999;
        helper.position.copy(m.position);
        return { name: m.name, helper };
      }),
    [markers, size, kind],
  );

  useEffect(
    () => () => { for (const h of helpers) { h.helper.geometry.dispose(); h.helper.material.dispose(); } },
    [helpers],
  );

  if (!helpers.length) return null;
  return (
    <group>
      {helpers.map((h) => <primitive key={h.name} object={h.helper} />)}
    </group>
  );
}

/**
 * The physics proxy for one component, drawn as the shape the engine will use.
 *
 * A collider is not the mesh: it is the cheap convex stand-in a physics engine
 * actually tests against, and the gap between the two is where a prop feels
 * wrong to walk into. Seeing them is the only way to notice a drum whose
 * collider is a box, or a bung cap whose collider swallows the whole lid.
 *
 * Built from the collider record's own fields, in the owning component's local
 * frame. `scale` is the ONLY sizing field the sculpt spec guarantees, and it is
 * HALF-EXTENTS: `[radius, halfHeight, radius]` for the round types, half width /
 * height / depth for a box. The drum declares `[0.287, 0.405, 0.287]` for a
 * 0.58 m wide, 0.81 m tall barrel. `radius`/`height` are read first only because
 * a hand-written record may spell it that way; nothing in the pipeline emits
 * them, so reading ONLY those meant every generated collider fell through to the
 * marker-size fallback and drew a token cylinder a quarter of the real radius --
 * which reads as "this prop's physics proxy is far too small" when it means "the
 * viewer never found the size".
 */
function colliderGeometry(shape, fallbackSize) {
  const type = String(shape.type ?? 'box').toLowerCase();
  const declared = shape.scale ?? shape.size;
  const half = Array.isArray(declared) ? declared.map((n) => Number(n)) : [];
  // Per axis, not all-or-nothing: a record that sizes two axes and leaves the
  // third at zero should keep the two it measured.
  const halfAt = (i) => (Number.isFinite(half[i]) && half[i] > 0 ? half[i] : fallbackSize * 0.5);

  const r = Number(shape.radius) || Math.max(halfAt(0), halfAt(2));
  const h = Number(shape.height) || halfAt(1) * 2;

  if (type === 'sphere') return new THREE.SphereGeometry(r, 16, 12);
  if (type === 'cylinder') return new THREE.CylinderGeometry(r, r, h, 20, 1);
  if (type === 'capsule') return new THREE.CapsuleGeometry(r, Math.max(0.001, h - 2 * r), 6, 12);
  // `convex` and `mesh` have no cheap exact form here. A box on the declared
  // extents is drawn rather than nothing, because "no proxy shown" and "proxy is
  // a hull we cannot draw" must not look identical.
  return new THREE.BoxGeometry(halfAt(0) * 2, halfAt(1) * 2, halfAt(2) * 2);
}

function ColliderProxies({ colliders, fallbackSize }) {
  const proxies = useMemo(
    () =>
      colliders.map(({ name, node, shape }) => {
        const mesh = new THREE.Mesh(
          colliderGeometry(shape, fallbackSize),
          new THREE.MeshBasicMaterial({
            // Amber, and distinct from the pivots' RGB axes and the sockets' cyan:
            // three overlays that look alike are three overlays you cannot read.
            color: shape.isTrigger ? 0xc06cf0 : 0xf0a63a,
            wireframe: true,
            depthTest: false,
            depthWrite: false,
            transparent: true,
            opacity: 0.85,
          }),
        );
        mesh.renderOrder = 998;
        const offset = Array.isArray(shape.offset) ? shape.offset : [0, 0, 0];
        mesh.position.set(Number(offset[0]) || 0, Number(offset[1]) || 0, Number(offset[2]) || 0);
        mesh.name = `collider:${name}`;
        return { name, node, mesh };
      }),
    [colliders, fallbackSize],
  );

  // Parented to the owning node, so a proxy follows its component when the model
  // is exploded or animated instead of hanging in space where the part used to be.
  useEffect(() => {
    for (const p of proxies) p.node.add(p.mesh);
    return () => {
      for (const p of proxies) {
        p.node.remove(p.mesh);
        p.mesh.geometry.dispose();
        p.mesh.material.dispose();
      }
    };
  }, [proxies]);

  return null;
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
  scene, wireframe, showPivots, showSockets, showColliders, breaking, onStats, onRuntime,
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
      {showColliders && (
        <ColliderProxies colliders={runtime.colliders} fallbackSize={markerSize} />
      )}
    </Center>
  );
}

export function Viewer({ url, version, exportName }) {
  const [wireframe, setWireframe] = useState(false);
  const [grid, setGrid] = useState(true);
  const [pivots, setPivots] = useState(false);
  const [sockets, setSockets] = useState(false);
  const [colliders, setColliders] = useState(false);
  const [breaking, setBreaking] = useState(false);
  const [stats, setStats] = useState(null);
  const [runtime, setRuntime] = useState(null);

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
            />
          </Bounds>
        </Stage>
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
          disabled={runtime ? runtime.colliders.length === 0 : false}
          title="the physics proxies an engine tests against — amber, or purple for a trigger"
        >
          colliders{runtime ? ` (${runtime.colliders.length})` : ''}
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
              {runtime.colliders.length} collider{runtime.colliders.length === 1 ? '' : 's'} ·{' '}
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
