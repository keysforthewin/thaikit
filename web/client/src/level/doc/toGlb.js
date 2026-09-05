import * as THREE from 'three';
import { GLTFExporter } from 'three/examples/jsm/exporters/GLTFExporter.js';

import { getPrototype, instantiate } from '../../three/instances.js';
import { buildLight } from './lights.js';
import { LEVEL_SCHEMA_VERSION } from '@thai-kit/level-schema';

/**
 * Let the browser paint. An `await` on an already-resolved promise only yields to
 * the microtask queue, so a loop over cached prototypes never gives React's render
 * a frame -- rAF then a macrotask is the shortest wait that guarantees one paint.
 */
export function nextPaint() {
  return new Promise((resolve) => requestAnimationFrame(() => setTimeout(resolve, 0)));
}

/** Wait for every TextureLoader-sourced image so the exporter does not draw a 0x0 image. */
async function settleImages(root) {
  const pending = [];
  root.traverse((o) => {
    if (!o.isMesh) return;
    for (const m of Array.isArray(o.material) ? o.material : [o.material]) {
      if (!m) continue;
      for (const v of Object.values(m)) {
        const img = v?.isTexture ? v.image : null;
        if (img instanceof HTMLImageElement && !img.complete) pending.push(img.decode().catch(() => {}));
      }
    }
  });
  await Promise.all(pending);
}

/**
 * The doc as a scene the exporter can walk: one group per placement with a
 * clone of its prototype inside, real light objects, spawn empties, and the
 * level extras on the scene. Orphans -- placements whose pack is not installed
 * -- carry the meshes the file already had, so a save never loses them.
 */
export async function buildProjectScene(doc, catalogue, orphans, { onProgress } = {}) {
  const scene = new THREE.Scene();
  scene.name = doc.name;
  const now = new Date().toISOString();
  const packsInUse = new Map();
  let sliceStart = performance.now();

  for (const [i, p] of doc.placements.entries()) {
    const item = catalogue.byRef[p.ref];
    const g = new THREE.Group();
    g.name = p.id;
    g.position.fromArray(p.position);
    g.rotation.set(p.rotation[0], p.rotation[1], p.rotation[2], 'XYZ');
    g.scale.fromArray(p.scale);
    g.userData.tk = {
      kind: 'placement', ref: p.ref, version: item?.version ?? p.version ?? null,
      static: p.static ?? null, physics: p.physics ?? null,
      castShadow: p.castShadow !== false, receiveShadow: p.receiveShadow !== false,
      billboard: p.billboard ?? 'none', tags: p.tags ?? [],
      ...(p.name ? { label: p.name } : {}),
    };
    if (item?.supported) {
      const proto = await getPrototype(item);
      g.add(instantiate(proto, { castShadow: p.castShadow !== false, receiveShadow: p.receiveShadow !== false }));
      const pk = catalogue.packs.find((k) => k.id === item.pack);
      if (pk) packsInUse.set(pk.id, { id: pk.id, version: pk.version ?? null, source: pk.source ?? null });
    } else if (orphans.get(p.id)) {
      g.add(orphans.get(p.id).clone(true));
    }
    scene.add(g);
    onProgress?.(i + 1, doc.placements.length);
    // Cached prototypes make this loop pure microtasks; hand the frame back every
    // ~40 ms so the progress status actually reaches the screen.
    if (performance.now() - sliceStart > 40) { await nextPaint(); sliceStart = performance.now(); }
  }

  for (const l of doc.lights) scene.add(buildLight(l));

  for (const s of doc.spawns) {
    const o = new THREE.Object3D();
    o.name = `spawn_${s.name}`;
    o.position.fromArray(s.position);
    o.rotation.y = THREE.MathUtils.degToRad(s.yawDeg ?? 0);
    o.userData.tk = { kind: 'spawn', team: s.team ?? null, yawDeg: s.yawDeg ?? 0, id: s.id };
    scene.add(o);
  }

  scene.userData.thaikitLevel = {
    schemaVersion: LEVEL_SCHEMA_VERSION,
    id: doc.id,
    name: doc.name,
    createdAt: doc.createdAt ?? now,
    updatedAt: now,
    settings: doc.settings,
    packs: [...packsInUse.values()],
    groups: (doc.groups ?? []).map((g) => ({ id: g.id, name: g.name, children: g.children, rotation: g.rotation ?? [0, 0, 0] })),
    spawns: doc.spawns.map((s) => ({ name: s.name, position: s.position, yawDeg: s.yawDeg ?? 0, team: s.team ?? null })),
  };
  await settleImages(scene);
  return scene;
}

export async function exportGlb(scene, { maxTextureSize = 2048 } = {}) {
  const exporter = new GLTFExporter();
  const out = await exporter.parseAsync(scene, { binary: true, onlyVisible: false, maxTextureSize, includeCustomExtensions: false });
  return out;
}
