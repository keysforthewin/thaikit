/**
 * Quick export: which cell, which lamps, and where the player stands.
 *
 * A full bake of a real level is hours, and every lightmap experiment paid
 * that whole price. The quick export bakes ONE cell through the same pipeline
 * -- same merge, same Cycles pass, same KTX2 and manifest -- as a playable
 * level of its own, so a settings change can be judged in minutes. Everything
 * here is pure arithmetic over the document so it runs under Node's test
 * runner; `buildExportScene` is what applies it.
 *
 * What is kept: the placements whose bbox centre falls in the cell (imposters
 * standing kilometres out fall away by themselves), the moon ALWAYS (it is the
 * sun of the bake and the one live light of the level), the point and spot
 * lamps that reach the cell, the level's own spawns inside it, and one spawn
 * of ours so the file is playable whether or not the author put one there.
 */

export const cellRect = (ix, iz, cellSize) => ({
  minX: ix * cellSize, minZ: iz * cellSize, maxX: (ix + 1) * cellSize, maxZ: (iz + 1) * cellSize,
});

export const inRect = (x, z, r) => x >= r.minX && x < r.maxX && z >= r.minZ && z < r.maxZ;

/** Distance from a point to the rectangle's edge in the x/z plane; 0 inside. */
export function distanceToRect(x, z, r) {
  const dx = Math.max(r.minX - x, 0, x - r.maxX);
  const dz = Math.max(r.minZ - z, 0, z - r.maxZ);
  return Math.hypot(dx, dz);
}

/**
 * Does this lamp light the cell? The moon always; a non-moon directional
 * never (it stays live and unbaked anyway, and there is no "near" for it);
 * a point or spot when it stands inside the cell or within its `distance` of
 * the edge. A `distance` of 0 or null is INFINITE in three, so on that alone
 * every lamp in the level would qualify -- which is exactly the bake being
 * tested away from -- so those count only when inside the cell.
 */
export function lightReachesCell(light, rect) {
  if (light.role === 'moon') return true;
  if (light.type === 'directional') return false;
  const [x, , z] = light.position;
  if (inRect(x, z, rect)) return true;
  const reach = Number(light.distance) || 0;
  return reach > 0 && distanceToRect(x, z, rect) <= reach;
}

/**
 * The cells as the picker lists them: `levelStats(doc, catalogue).cells` (which
 * already carries objects, draw calls and triangles per cell) with the lamps
 * and spawns standing in each. Cells whose prototypes are still loading are
 * absent from the stats and so from this list.
 */
export function describeCells(doc, cellsMap, cellSize = doc?.settings?.cellSize ?? 24) {
  const list = [...cellsMap.values()].map((c) => {
    const rect = cellRect(c.ix, c.iz, cellSize);
    const lights = (doc?.lights ?? []).filter((l) => l.enabled !== false && l.role !== 'moon' && l.type !== 'directional');
    const spots = lights.filter((l) => l.type === 'spot' && inRect(l.position[0], l.position[2], rect)).length;
    const points = lights.filter((l) => l.type === 'point' && inRect(l.position[0], l.position[2], rect)).length;
    const spawns = (doc?.spawns ?? []).filter((s) => inRect(s.position[0], s.position[2], rect)).length;
    return { key: c.key, ix: c.ix, iz: c.iz, objects: c.objects, drawCalls: c.mergedDrawCalls, triangles: c.triangles, spots, points, spawns };
  });
  return list.sort((a, b) => a.ix - b.ix || a.iz - b.iz);
}

export const describeCell = (c) => `${c.key} · ${c.objects} obj · ${c.spots} spot · ${c.points} point · ${c.drawCalls} dc`;

/**
 * `auto`: the selection's cell when something is selected there, else a cell
 * with a spot light at random (a spot is what a lightmap test wants to see),
 * else one with any lamp, else the busiest cell. `random` is injectable so the
 * preference order can be tested.
 */
export function pickCell(list, { selectionCell = null, random = Math.random } = {}) {
  if (!list.length) return null;
  const chosen = (cands) => cands[Math.min(cands.length - 1, Math.floor(random() * cands.length))];
  if (selectionCell) {
    const hit = list.find((c) => c.key === selectionCell && c.objects > 0);
    if (hit) return { cell: hit, reason: 'the cell of the selection' };
  }
  const lit = list.filter((c) => c.objects > 0 && c.spots > 0);
  if (lit.length) return { cell: chosen(lit), reason: 'a cell with a spot light, at random' };
  const any = list.filter((c) => c.objects > 0 && c.points > 0);
  if (any.length) return { cell: chosen(any), reason: 'a cell with a point light, at random (no cell has a spot)' };
  const busiest = [...list].sort((a, b) => b.objects - a.objects)[0];
  return { cell: busiest, reason: 'the busiest cell (no cell has a lamp)' };
}

/**
 * Somewhere in the cell to stand: a grid point (1 m) whose x/z lies outside
 * every kept placement's footprint padded by half a metre, nearest the lamps
 * (their mean position, or the cell centre with none), facing the nearest
 * spot. The floor is `groundY`; with no ground the level's spawns already
 * stand on whatever the author put there and this one takes y = 0.
 */
export function placeSpawn(rect, placements, lights, groundY = 0, { step = 1, pad = 0.5 } = {}) {
  const lamps = lights.filter((l) => l.role !== 'moon' && l.type !== 'directional');
  const cx = (rect.minX + rect.maxX) / 2;
  const cz = (rect.minZ + rect.maxZ) / 2;
  const target = lamps.length
    ? { x: lamps.reduce((s, l) => s + l.position[0], 0) / lamps.length, z: lamps.reduce((s, l) => s + l.position[2], 0) / lamps.length }
    : { x: cx, z: cz };
  const blocked = (x, z) => placements.some((p) => {
    const b = p.bounds;
    return x >= b.min[0] - pad && x <= b.max[0] + pad && z >= b.min[2] - pad && z <= b.max[2] + pad;
  });
  let best = null;
  for (let x = rect.minX + step / 2; x < rect.maxX; x += step) {
    for (let z = rect.minZ + step / 2; z < rect.maxZ; z += step) {
      if (blocked(x, z)) continue;
      const d = Math.hypot(x - target.x, z - target.z);
      if (!best || d < best.d) best = { x, z, d };
    }
  }
  const at = best ?? { x: cx, z: cz };
  const spots = lamps.filter((l) => l.type === 'spot');
  const face = (spots.length ? spots : lamps).sort((a, b) => Math.hypot(a.position[0] - at.x, a.position[2] - at.z) - Math.hypot(b.position[0] - at.x, b.position[2] - at.z))[0];
  // Yaw as the editor's spawns carry it: the player looks down -Z at 0, and
  // `rotation.y = yaw` turns that direction by yaw about +Y, so facing (dx, dz)
  // is atan2(-dx, -dz).
  const yawDeg = face ? Math.round((Math.atan2(-(face.position[0] - at.x), -(face.position[2] - at.z)) * 180) / Math.PI) : 0;
  return { name: 'quick', position: [+at.x.toFixed(3), +Number(groundY).toFixed(3), +at.z.toFixed(3)], yawDeg, team: null, free: Boolean(best) };
}
