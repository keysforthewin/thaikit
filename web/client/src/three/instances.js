import * as THREE from 'three';

import { loadFactory, baseUrlOf } from './modelModule.js';
import { measureScene } from './stats.js';
import { disposeScene } from './dispose.js';
import { useRuntimeMarkersOf } from './runtimeMarkers.jsx';

/**
 * One built prototype per (item, version); every placement is a clone of it.
 *
 * The module is evaluated once and the factory run ONCE -- the synthesised
 * canvas textures are the expensive part and they live on the prototype's
 * materials, which every clone shares by reference. `Object3D.clone()` shares
 * geometry and materials, so N placements cost N sets of matrices and nothing
 * else on the GPU.
 *
 * `userData` is stripped from every node before the first clone. Object3D.copy
 * deep-copies userData through JSON, and a factory root carries
 * `sculptRuntime.byId` -- a Record of Object3Ds, circular -- which throws. The
 * markers and destruction groups are harvested first, then it goes.
 */
const cache = new Map();

export const itemKey = (item) => `${item.ref}@${item.version ?? ''}`;

export function getPrototype(item) {
  const key = itemKey(item);
  if (!cache.has(key)) {
    const p = buildPrototype(item, key).catch((err) => {
      cache.delete(key);
      throw err;
    });
    cache.set(key, p);
  }
  return cache.get(key);
}

export function peekPrototype(item) {
  const p = cache.get(itemKey(item));
  return p && p.resolved ? p.resolved : null;
}

async function buildPrototype(item, key) {
  if (!item.bundleUrl) throw new Error('item has no bundle');
  const url = `${item.bundleUrl}?v=${encodeURIComponent(item.version ?? '')}`;
  const factory = await loadFactory(url, item.exportName);
  const started = performance.now();
  const root = factory({}, { baseUrl: baseUrlOf(url) });
  if (!root?.isObject3D) throw new Error('factory did not return an Object3D');
  const buildMs = performance.now() - started;
  root.updateMatrixWorld(true);

  const markers = useRuntimeMarkersOf(root);
  const rt = root.userData?.sculptRuntime ?? {};
  const groupCount = Array.isArray(rt.destructionGroups)
    ? rt.destructionGroups.length
    : Object.keys(rt.destructionGroups ?? {}).length;

  const bbox = new THREE.Box3().setFromObject(root, true);
  if (bbox.isEmpty()) bbox.set(new THREE.Vector3(-0.5, 0, -0.5), new THREE.Vector3(0.5, 1, 0.5));
  // A map loaded through TextureLoader has no image yet; give it a moment so
  // the stats count it, or a ground tile reads as textureless in the HUD.
  await settleTextures(root, 4000);
  const stats = measureScene(root);

  root.traverse((o) => { o.userData = {}; });

  const proto = {
    key, item, root, bbox, stats, buildMs,
    markers: { pivots: markers.pivots.map(({ name, position }) => ({ name, position: position.clone() })), sockets: markers.sockets.map(({ name, position }) => ({ name, position: position.clone() })) },
    hasDestructionGroups: groupCount > 0,
    instances: 0,
  };
  const promise = cache.get(key);
  if (promise) promise.resolved = proto;
  return proto;
}

async function settleTextures(root, timeoutMs) {
  const pending = new Set();
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m) continue;
      for (const v of Object.values(m)) if (v?.isTexture && !v.image) pending.add(v);
    }
  });
  const deadline = performance.now() + timeoutMs;
  while (pending.size && performance.now() < deadline) {
    for (const t of pending) if (t.image && (t.image.width || t.image.data)) pending.delete(t);
    if (pending.size) await new Promise((r) => setTimeout(r, 100));
  }
}

export function instantiate(proto, { castShadow = true, receiveShadow = true } = {}) {
  const g = proto.root.clone(true);
  g.traverse((o) => {
    if (!o.isMesh) return;
    o.castShadow = castShadow;
    o.receiveShadow = receiveShadow;
  });
  proto.instances += 1;
  return g;
}

export function releaseInstance(proto) {
  proto.instances = Math.max(0, proto.instances - 1);
}

/** Forget a prototype nothing uses any more, freeing its GPU resources. */
export function evictUnused(keep) {
  for (const [key, p] of cache) {
    if (keep.has(key)) continue;
    const proto = p.resolved;
    if (proto && proto.instances > 0) continue;
    cache.delete(key);
    if (proto) disposeScene(proto.root);
  }
}
