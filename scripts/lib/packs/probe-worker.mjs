#!/usr/bin/env node
/**
 * Build one pack item under Node and report on it. Run as a child process so a
 * factory that hangs, throws at the top level, or floods stdout cannot take the
 * installer with it, and so the installer can run several at once.
 *
 *   node probe-worker.mjs <bundle.js>   -> one JSON line on stdout
 */
import { createRequire } from 'node:module';

import { makePackShim, evaluateBundle, measureRoot } from '../probe.mjs';
import { partsFromRoot, deriveFromParts } from '../colliders.mjs';

const nodeRequire = createRequire(import.meta.url);
const THREE = nodeRequire('three');

const MAX_PARTS = 8;
const MAX_TRIANGLES = 200_000;

const names = (value) => {
  if (Array.isArray(value)) return value.map((v) => (typeof v === 'string' ? v : v?.name)).filter(Boolean);
  if (value && typeof value === 'object') return Object.keys(value);
  return [];
};

function main() {
  const file = process.argv[2];
  const out = process.stdout;
  // A model that console.logs its geometry must not corrupt the result line.
  for (const k of ['log', 'info', 'debug', 'warn', 'error', 'table', 'dir']) console[k] = () => {};
  const emit = (obj) => out.write(`${JSON.stringify(obj)}\n`);

  const shim = makePackShim();
  const started = Date.now();
  let root;
  try {
    const { factory } = evaluateBundle(file, { shim });
    root = factory(null, {});
    if (!root?.isObject3D) return emit({ supported: false, error: 'the factory did not return an Object3D' });
  } catch (err) {
    return emit({ supported: false, error: err.message, tslUsed: [...shim.used] });
  }
  const buildMs = Date.now() - started;
  root.updateMatrixWorld(true);
  const box = new THREE.Box3().setFromObject(root, true);
  const size = box.getSize(new THREE.Vector3());
  const rt = root.userData?.sculptRuntime ?? {};
  const inst = root.userData?.vibe3dInstance ?? null;
  const bbox = { min: [box.min.x, box.min.y, box.min.z], max: [box.max.x, box.max.y, box.max.z] };

  let colliders = null;
  let note = null;
  try {
    const { parts, triangles } = partsFromRoot(root, MAX_TRIANGLES);
    if (parts.length) {
      const { record } = deriveFromParts(parts, triangles, {
        maxParts: MAX_PARTS, voxel: 'auto', maxCells: 2e6, minLayer: 0.08, layerIou: 0.75, layerArea: 0.25,
        ledgeRatio: 1.6, maxRectsPerLayer: 4, decorMaxExtent: 0.1, decorVolumeFrac: 0.02, decorFootprintFrac: 0.02, cylinders: true,
      });
      colliders = { parts: record.parts, groundY: bbox.min[1], coverage: record.selfCheck?.coverage ?? null, handTuned: false };
    }
  } catch (err) {
    note = err.message;
  }
  if (!colliders) {
    const [mn, mx] = [bbox.min, bbox.max];
    colliders = {
      parts: [{ name: 'bbox', type: 'box', offset: [0, 1, 2].map((i) => +((mn[i] + mx[i]) / 2).toFixed(4)), scale: [0, 1, 2].map((i) => +Math.max(0.025, (mx[i] - mn[i]) / 2).toFixed(4)) }],
      groundY: mn[1], coverage: null, handTuned: false, note: note ? `bbox fallback: ${note}` : 'bbox fallback',
    };
  }

  emit({
    supported: true, error: null,
    size: { w: +size.x.toFixed(4), h: +size.y.toFixed(4), d: +size.z.toFixed(4) }, bbox,
    stats: measureRoot(root),
    sockets: inst?.sockets?.length ? inst.sockets : names(rt.sockets),
    pivots: names(rt.pivots), parts: inst?.parts ?? [], animated: Boolean(inst?.update),
    tslUsed: [...shim.used], buildMs, probeMs: Date.now() - started, colliders,
  });
}

main();
