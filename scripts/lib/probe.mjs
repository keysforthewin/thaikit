/**
 * Evaluate a built module under plain Node and construct it once.
 *
 * This is the same `require` shim the browser harness, derive-colliders and
 * promote-model all carry, in one place. `three/webgpu` maps to the same three
 * as `three`: three's own module graph re-exports the scene graph from a shared
 * three.core.js, so `Mesh` from either specifier is the same class. Anything
 * else -- `three/tsl` in particular, whose node materials have no meaning to a
 * WebGL host -- is refused with a message the pack manager can show.
 */
import { createRequire } from 'node:module';
import { readFileSync } from 'node:fs';

import { makeTslStub } from './tslStub.mjs';

const nodeRequire = createRequire(import.meta.url);
const THREE = nodeRequire('three');

export function requireShim(name) {
  if (name === 'three' || name === 'three/webgpu') return THREE;
  if (name === 'three/tsl') {
    throw new Error('three/tsl (node materials) is not supported: this host renders with WebGL');
  }
  throw new Error(`the bundle must import three and nothing else; it asked for ${name}`);
}

/**
 * The shim for third-party packs: the same three, plus a TSL stub that records
 * whether the module reached for it. `used` is a Set the caller reads after
 * construction.
 */
export function makePackShim(used = new Set()) {
  let stub = null;
  const shim = (name) => {
    if (name === 'three' || name === 'three/webgpu') return THREE;
    if (name === 'three/tsl') {
      stub ??= makeTslStub((prop) => used.add(prop));
      return stub;
    }
    throw new Error(`the bundle asked for "${name}", which the host cannot provide`);
  };
  shim.used = used;
  return shim;
}

/** Evaluate the module text and return its exports. Throws if it will not load. */
export function evaluateBundle(file, { exportName = 'createObjectModel', shim = requireShim } = {}) {
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', readFileSync(file, 'utf8'))(mod, mod.exports, shim);
  const factory = mod.exports[exportName] ?? mod.exports.default;
  if (typeof factory !== 'function') {
    throw new Error(
      `no factory export; expected "${exportName}" or a default, got: ` +
        `${Object.keys(mod.exports).join(', ') || '(nothing)'}`,
    );
  }
  return { factory, exports: mod.exports };
}

/** The four budget axes plus vertices, read off a built root the way the harness does. */
export function measureRoot(root) {
  let triangles = 0;
  let vertices = 0;
  let drawCalls = 0;
  const materials = new Set();
  const geometries = new Set();
  root.traverse((o) => {
    if (!o.isMesh) return;
    drawCalls += 1;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) if (m) materials.add(m.uuid);
    const g = o.geometry;
    geometries.add(g.uuid);
    const copies = o.isInstancedMesh ? o.count ?? 0 : 1;
    const n = g.attributes?.position?.count ?? 0;
    vertices += n * copies;
    triangles += (g.index ? g.index.count / 3 : n / 3) * copies;
  });
  return {
    triangles: Math.round(triangles),
    vertices,
    drawCalls,
    materials: materials.size,
    uniqueGeometries: geometries.size,
  };
}

/** Names on sculptRuntime, accepting both the Record and the array shape. */
const names = (value) => {
  if (Array.isArray(value)) return value.map((v) => (typeof v === 'string' ? v : v?.name)).filter(Boolean);
  if (value && typeof value === 'object') return Object.keys(value);
  return [];
};

/**
 * Construct once, with no baseUrl, exactly as the Node-side gates do.
 *
 * Never throws: an item that will not build is a fact the caller records, not
 * an exception that stops a whole pack from installing.
 */
export function constructOnce(file, { exportName, timeoutMs = 30_000, shim } = {}) {
  const started = Date.now();
  try {
    const { factory } = evaluateBundle(file, { exportName, shim });
    const root = factory(null, {});
    if (!root?.isObject3D) return { ok: false, error: 'the factory did not return an Object3D' };
    root.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(root, true);
    const size = box.getSize(new THREE.Vector3());
    const rt = root.userData?.sculptRuntime ?? {};
    const elapsedMs = Date.now() - started;
    if (elapsedMs > timeoutMs) {
      return { ok: false, error: `constructing took ${elapsedMs} ms, over the ${timeoutMs} ms budget` };
    }
    return {
      ok: true,
      root,
      bbox: { min: [box.min.x, box.min.y, box.min.z], max: [box.max.x, box.max.y, box.max.z] },
      size: { w: +size.x.toFixed(4), h: +size.y.toFixed(4), d: +size.z.toFixed(4) },
      stats: measureRoot(root),
      sockets: names(rt.sockets),
      pivots: names(rt.pivots),
      destructionGroups: names(rt.destructionGroups),
      vibe3d: root.userData?.vibe3dInstance
        ? { parts: root.userData.vibe3dInstance.parts ?? [], sockets: root.userData.vibe3dInstance.sockets ?? [], animated: Boolean(root.userData.vibe3dInstance.update) }
        : null,
      tslUsed: shim?.used ? [...shim.used] : [],
      elapsedMs,
    };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

export { THREE };
