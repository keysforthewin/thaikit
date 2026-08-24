import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Bounds, Center, Grid, OrbitControls, Stage } from '@react-three/drei';
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
    const images = new Set();
    let gpuBytes = 0;

    scene.traverse((o) => {
      if (!o.isMesh) return;
      drawCalls++;
      materials.add(o.material.uuid);
      const g = o.geometry;
      vertices += g.attributes.position?.count ?? 0;
      triangles += g.index ? g.index.count / 3 : (g.attributes.position?.count ?? 0) / 3;

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
 * An axes helper at every named pivot and socket.
 *
 * This is the visible payoff of requiring pivots and sockets on anything that
 * moves, and the fastest way to see one is in the wrong place: a lid hinge
 * floating above the lid is obvious here and invisible in a beauty render.
 */
function RuntimeMarkers({ scene, size }) {
  const markers = useMemo(() => {
    if (!scene) return [];
    const rt = scene.userData?.sculptRuntime;
    if (!rt) return [];
    const names = [...(rt.pivots ?? []), ...(rt.sockets ?? [])]
      .map((n) => (typeof n === 'string' ? n : n?.name))
      .filter(Boolean);
    const out = [];
    for (const name of names) {
      const node = scene.getObjectByName(name);
      if (!node) continue;
      const position = new THREE.Vector3();
      node.getWorldPosition(position);
      out.push({ name, position });
    }
    return out;
  }, [scene]);

  // Build the helpers once per marker set and dispose them on the way out --
  // creating them inline would leak a helper per render.
  const helpers = useMemo(
    () =>
      markers.map((m) => {
        const helper = new THREE.AxesHelper(size);
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
    [markers, size],
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

function Model({ scene, wireframe, showMarkers, onStats }) {
  const stats = useMeshStats(scene);

  useEffect(() => { onStats?.(stats); }, [stats, onStats]);

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

  if (!scene) return null;
  return (
    <Center>
      <primitive object={scene} />
      {showMarkers && <RuntimeMarkers scene={scene} size={markerSize} />}
    </Center>
  );
}

export function Viewer({ url, version, exportName }) {
  const [wireframe, setWireframe] = useState(false);
  const [grid, setGrid] = useState(true);
  const [markers, setMarkers] = useState(false);
  const [stats, setStats] = useState(null);

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
              showMarkers={markers}
              onStats={setStats}
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
        <button className={markers ? 'primary' : ''} onClick={() => setMarkers((v) => !v)}>
          pivots
        </button>
      </div>

      {loading && <div className="overlay">running factory…</div>}

      {!loading && stats && (
        <div className="overlay">
          {stats.triangles.toLocaleString()} tris · {stats.drawCalls} draw call
          {stats.drawCalls === 1 ? '' : 's'} · {stats.materials} material
          {stats.materials === 1 ? '' : 's'}
          <br />
          {stats.textures} texture{stats.textures === 1 ? '' : 's'} · {mb(stats.gpuBytes)} VRAM
        </div>
      )}
    </div>
  );
}
