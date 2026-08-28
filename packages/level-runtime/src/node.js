/**
 * Headless entry: everything a server needs from a baked level, without three.
 *
 *   const level = await loadLevelHeadless(glbBytes, { physics });
 *   level.spawns.pick('red'); level.colliders.staticShapes; physics.step(1/60)
 */
import { readGlbJson, manifestFromJson } from './manifest.js';
import { buildColliders } from './colliders.js';
import { NullPhysics } from './physics/null.js';
import { pickSpawn } from './spawns.js';

export async function loadLevelHeadless(glb, { physics = new NullPhysics() } = {}) {
  const bytes = typeof glb === 'string' ? await (await import('node:fs/promises')).readFile(glb) : glb;
  const json = readGlbJson(bytes);
  const manifest = manifestFromJson(json);
  // Dynamic node transforms from the glTF node list, so bodies start where the level put them.
  const nodes = new Map();
  for (const n of json.nodes ?? []) {
    if (!n.name?.startsWith('dynamic/')) continue;
    let position = n.translation ?? [0, 0, 0];
    let quaternion = n.rotation ?? [0, 0, 0, 1];
    if (n.matrix) { position = [n.matrix[12], n.matrix[13], n.matrix[14]]; quaternion = quatFromMatrix(n.matrix); }
    nodes.set(n.name, { position: { toArray: () => position }, quaternion: { toArray: () => quaternion } });
  }
  const colliders = buildColliders(manifest, physics, { nodes });
  return {
    manifest,
    colliders,
    spawns: { list: manifest.spawns, pick: (team) => pickSpawn(manifest.spawns, team) },
    cells: manifest.cells,
    physics,
    dispose() { physics.dispose(); },
  };
}

function quatFromMatrix(m) {
  const sx = Math.hypot(m[0], m[1], m[2]) || 1, sy = Math.hypot(m[4], m[5], m[6]) || 1, sz = Math.hypot(m[8], m[9], m[10]) || 1;
  const m00 = m[0] / sx, m01 = m[4] / sy, m02 = m[8] / sz, m10 = m[1] / sx, m11 = m[5] / sy, m12 = m[9] / sz, m20 = m[2] / sx, m21 = m[6] / sy, m22 = m[10] / sz;
  const trace = m00 + m11 + m22;
  let x, y, z, w;
  if (trace > 0) { const s = 0.5 / Math.sqrt(trace + 1); w = 0.25 / s; x = (m21 - m12) * s; y = (m02 - m20) * s; z = (m10 - m01) * s; }
  else if (m00 > m11 && m00 > m22) { const s = 2 * Math.sqrt(1 + m00 - m11 - m22); w = (m21 - m12) / s; x = 0.25 * s; y = (m01 + m10) / s; z = (m02 + m20) / s; }
  else if (m11 > m22) { const s = 2 * Math.sqrt(1 + m11 - m00 - m22); w = (m02 - m20) / s; x = (m01 + m10) / s; y = 0.25 * s; z = (m12 + m21) / s; }
  else { const s = 2 * Math.sqrt(1 + m22 - m00 - m11); w = (m10 - m01) / s; x = (m02 + m20) / s; y = (m12 + m21) / s; z = 0.25 * s; }
  return [x, y, z, w];
}
