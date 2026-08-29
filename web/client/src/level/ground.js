/**
 * The level's ground plane: one flat, walkable surface under the whole map.
 *
 * It is a SETTING, not a placement -- there is exactly one, it cannot be
 * rotated or scaled, and the only thing you move is its height. That is what
 * lets it be derived rather than authored: its extent is the map's own extent,
 * so adding a prop at the far edge extends the ground under it without anyone
 * dragging a corner.
 *
 * The bake wants it as TILES, one per cell, and that is not an implementation
 * detail to work around -- it is what makes the ground behave like everything
 * else downstream. A single 400 m quad would land in one cell (so a player
 * standing anywhere would load it), take one lightmap island for the whole
 * level, and simplify to nothing sensible at LOD2. Cut to the cell grid it
 * merges, lightmaps, LODs and culls exactly like the props standing on it.
 */

/** Skirt below the surface, so the collider is a solid rather than a knife edge. */
export const GROUND_THICKNESS = 0.25;
/** Beyond this the extent is almost certainly one stray placement, not a map. */
const MAX_TILES = 4096;

// Light enough to READ under the editor's night rig (a 0.35 hemisphere and a
// 0.6 moon). The first try, #4a4f5c, rendered so close to the background that
// turning the ground on looked like nothing had happened.
export const DEFAULT_GROUND = { enabled: false, y: 0, color: '#8b909b', margin: 8 };

export const groundOf = (doc) => ({ ...DEFAULT_GROUND, ...(doc?.settings?.ground ?? {}) });

/**
 * The cell rectangle the ground covers.
 *
 * @param boxes  [{ min:[x,y,z], max:[x,y,z] }] -- every placement's footprint.
 * @returns { ix0, iz0, ix1, iz1, minX, minZ, maxX, maxZ, width, depth, tiles }
 */
export function groundExtent(boxes, { cellSize = 24, margin = 8 } = {}) {
  let minX = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxZ = -Infinity;
  for (const b of boxes) {
    if (!Number.isFinite(b.min[0]) || !Number.isFinite(b.max[0])) continue;
    minX = Math.min(minX, b.min[0]); maxX = Math.max(maxX, b.max[0]);
    minZ = Math.min(minZ, b.min[2]); maxZ = Math.max(maxZ, b.max[2]);
  }
  // An empty level still gets a floor to stand on -- one cell at the origin.
  if (!Number.isFinite(minX)) { minX = -cellSize / 2; maxX = cellSize / 2; minZ = -cellSize / 2; maxZ = cellSize / 2; }

  const ix0 = Math.floor((minX - margin) / cellSize);
  const ix1 = Math.floor((maxX + margin) / cellSize);
  const iz0 = Math.floor((minZ - margin) / cellSize);
  const iz1 = Math.floor((maxZ + margin) / cellSize);

  const tiles = [];
  const count = (ix1 - ix0 + 1) * (iz1 - iz0 + 1);
  for (let ix = ix0; ix <= ix1 && tiles.length < MAX_TILES; ix += 1) {
    for (let iz = iz0; iz <= iz1 && tiles.length < MAX_TILES; iz += 1) {
      tiles.push({ ix, iz, cx: (ix + 0.5) * cellSize, cz: (iz + 0.5) * cellSize });
    }
  }
  return {
    ix0, iz0, ix1, iz1,
    minX: ix0 * cellSize, minZ: iz0 * cellSize,
    maxX: (ix1 + 1) * cellSize, maxZ: (iz1 + 1) * cellSize,
    width: (ix1 - ix0 + 1) * cellSize,
    depth: (iz1 - iz0 + 1) * cellSize,
    tiles,
    truncated: count > MAX_TILES,
  };
}

/**
 * Footprints from the doc alone, for the editor -- position and the item's
 * declared size, with no prototype needed. Rotation is ignored on purpose: the
 * margin is far larger than the error a yaw can introduce.
 */
export function docFootprints(doc, byRef) {
  return doc.placements.map((p) => {
    const size = byRef?.[p.ref]?.size;
    const hw = ((size?.w ?? 1) * Math.abs(p.scale?.[0] ?? 1)) / 2;
    const hd = ((size?.d ?? 1) * Math.abs(p.scale?.[2] ?? 1)) / 2;
    return {
      min: [p.position[0] - hw, 0, p.position[2] - hd],
      max: [p.position[0] + hw, 0, p.position[2] + hd],
    };
  });
}
