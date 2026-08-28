import * as THREE from 'three';

import { makeTslStub } from './tslStub.js';

/**
 * Load and run a generated Three.js factory.
 *
 * The prop is code, not a file format, so there is no loader: the module is
 * fetched as text and evaluated with THIS page's THREE injected as its only
 * `require`. That is the whole reason build-model-module.mjs emits CommonJS with
 * `three` external -- an ESM build would need an import map, and an import map
 * either resolves to a second copy of three (whose Mesh is not r3f's Mesh, so
 * nothing renders) or forces a fixed-name three chunk out of Rollup.
 *
 * `three/webgpu` maps to the same THREE: three's module graph re-exports the
 * scene graph from a shared three.core.js, so a vibe3d pack item that imports
 * from it gets the same Mesh as everything else. `three/tsl` is refused with a
 * message the pack manager can show -- node materials mean nothing to WebGL.
 */
let tslStub = null;
export function requireShim(name) {
  if (name === 'three' || name === 'three/webgpu') return THREE;
  // See scripts/lib/tslStub.mjs: a pack that imports TSL in a shared file
  // should not lose every model to the one that builds a node material.
  if (name === 'three/tsl') return (tslStub ??= makeTslStub());
  throw new Error(`model module required "${name}"; only "three" is provided`);
}

export function evaluateModule(code, exportName = 'createObjectModel') {
  const mod = { exports: {} };
  // eslint-disable-next-line no-new-func
  new Function('module', 'exports', 'require', code)(mod, mod.exports, requireShim);
  const factory = mod.exports[exportName || 'createObjectModel'] ?? mod.exports.default;
  if (typeof factory !== 'function') {
    throw new Error(
      `no factory export; expected "${exportName || 'createObjectModel'}" or a default, ` +
        `got: ${Object.keys(mod.exports).join(', ') || '(nothing)'}`,
    );
  }
  return factory;
}

const factories = new Map();

/**
 * Fetch and evaluate once per URL. The URL carries its own cache-buster (?v=),
 * so a rebuilt prop is a new key and the old factory is simply forgotten.
 */
export function loadFactory(url, exportName) {
  const key = `${url}#${exportName || 'createObjectModel'}`;
  if (!factories.has(key)) {
    const p = (async () => {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
      return evaluateModule(await res.text(), exportName);
    })().catch((err) => {
      factories.delete(key);
      throw err;
    });
    factories.set(key, p);
  }
  return factories.get(key);
}

/**
 * The module is eval'd rather than imported, so it has no import.meta and no
 * currentScript to resolve its own shipped maps against, and a bare relative
 * path would resolve against the SPA route instead. new URL('.') drops the
 * query cleanly.
 */
export function baseUrlOf(url) {
  return new URL('.', new URL(url, window.location.href)).href;
}
