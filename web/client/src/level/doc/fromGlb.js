import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { directionFromQuaternion } from './lights.js';
import { DEFAULT_SETTINGS, DEFAULT_SHADOW, defaultMoon } from '../defaults.js';
import { newLightId, newSpawnId } from '../ids.js';
import { disposeScene } from '../../three/dispose.js';

const hex = (c) => `#${c.getHexString()}`;

/**
 * Read a level GLB back into the doc. The file's geometry is the fallback for
 * refs no installed pack answers to; for everything else the editor rebuilds
 * from the factory, which is what makes "refresh assets" mean anything.
 */
export async function parseLevelGlb(arrayBuffer) {
  const loader = new GLTFLoader();
  const gltf = await loader.parseAsync(arrayBuffer, '');
  const scene = gltf.scene;
  const extras = scene.userData?.thaikitLevel;
  if (!extras) throw new Error('this GLB carries no scene.extras.thaikitLevel; it is not a level');

  const doc = {
    id: extras.id, name: extras.name, createdAt: extras.createdAt, updatedAt: extras.updatedAt,
    settings: mergeSettings(extras.settings), packs: extras.packs ?? [],
    // Editor-only grouping. Pruned on the first commit, so a group naming
    // objects an older file no longer has quietly disappears rather than
    // showing an empty folder.
    groups: (extras.groups ?? []).map((g) => ({ id: g.id, name: g.name ?? 'group', children: [...(g.children ?? [])], rotation: g.rotation ?? [0, 0, 0] })),
    placements: [], lights: [], spawns: [],
  };
  const orphans = new Map();

  for (const node of [...scene.children]) {
    const tk = node.userData?.tk;
    if (!tk) continue;
    if (tk.kind === 'placement') {
      const e = new THREE.Euler().setFromQuaternion(node.quaternion, 'XYZ');
      doc.placements.push({
        id: node.name, ref: tk.ref, version: tk.version ?? null, name: tk.label ?? '',
        position: node.position.toArray(), rotation: [e.x, e.y, e.z], scale: node.scale.toArray(),
        static: tk.static ?? null, physics: tk.physics ?? null,
        castShadow: tk.castShadow !== false, receiveShadow: tk.receiveShadow !== false,
        billboard: tk.billboard ?? 'none', tags: tk.tags ?? [],
      });
      // Keep the meshes as a fallback. Detached now; disposed only if unused.
      const fallback = new THREE.Group();
      for (const child of [...node.children]) fallback.add(child);
      fallback.traverse((o) => { o.userData = {}; });
      orphans.set(node.name, fallback);
    } else if (tk.kind === 'light' && node.isLight) {
      const type = node.isDirectionalLight ? 'directional' : node.isSpotLight ? 'spot' : 'point';
      const id = node.name.startsWith('light_') ? node.name.slice(6) : newLightId();
      const l = {
        id, type, role: tk.role ?? null, name: tk.role ?? type, enabled: tk.enabled !== false,
        color: hex(node.color), intensity: node.intensity, position: node.position.toArray(),
        castShadow: Boolean(tk.castShadow), shadow: { ...DEFAULT_SHADOW, ...(tk.shadow ?? {}) },
      };
      if (type !== 'point') l.direction = directionFromQuaternion(node.quaternion);
      if (type !== 'directional') { l.distance = node.distance ?? 0; l.decay = node.decay ?? 2; }
      if (type === 'spot') { l.angle = node.angle; l.penumbra = node.penumbra; }
      doc.lights.push(l);
    } else if (tk.kind === 'spawn') {
      doc.spawns.push({
        id: tk.id ?? newSpawnId(), name: node.name.replace(/^spawn_/, ''), position: node.position.toArray(),
        yawDeg: tk.yawDeg ?? THREE.MathUtils.radToDeg(node.rotation.y), team: tk.team ?? null,
      });
    }
  }

  if (!doc.lights.some((l) => l.role === 'moon')) doc.lights.unshift(defaultMoon());
  // The old moon's id lives in the node name; the loader kept it, so undo/redo
  // and selection carry across a reload.
  disposeScene(scene);
  return { doc, orphans };
}

function mergeSettings(s) {
  const out = structuredClone(DEFAULT_SETTINGS);
  const merge = (dst, src) => {
    for (const [k, v] of Object.entries(src ?? {})) {
      if (v && typeof v === 'object' && !Array.isArray(v)) merge((dst[k] ??= {}), v);
      else dst[k] = v;
    }
  };
  merge(out, s);
  return out;
}
