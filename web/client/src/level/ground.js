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

import { isBillboard } from '@thai-kit/level-runtime/billboard';

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
 * The rectangle the ground covers, and the tiles that make it up.
 *
 * The rectangle is the walkable bounds grown by `margin` ON EVERY SIDE. It is
 * NOT snapped to the cell grid: it used to be, and a 1 m margin then moved an
 * edge only where bounds + margin happened to cross a cell line -- two sides of
 * the floor jumped out by a whole 24 m cell and the other two did not move at
 * all. The cells still decide how the floor is CUT (one tile per cell, so it
 * merges, lightmaps and LODs like the props standing on it), but a tile is
 * the intersection of its cell with the rectangle, so the edge tiles are
 * narrower than a cell and the floor ends exactly `margin` past the last prop.
 *
 * BILLBOARDS ARE NOT GROUND. A yaw-billboarded quad is backdrop -- a skyline
 * imposter standing kilometres away to fill the horizon -- and nobody walks to
 * it, so extending the floor out under it buys nothing and costs a great deal.
 * `thepurge` is the case that proved it: 14 of its 20 placements are imposters
 * up to 3.1 km out, which stretched the ground to 5.5 x 5.5 km. That is
 * ~52,000 cells, so the MAX_TILES cap silently clipped it to a lopsided 64x64
 * rectangle that did not even cover the walkable map -- and every one of those
 * 4096 tiles was a separate Cycles bake target, an atlas island and a share of
 * the lightmap's texels. The bake was 4142 objects for a level with 6 static
 * props, and ran for three hours at the CHEAPEST settings.
 *
 * The test is the billboard flag rather than a distance cutoff, because that is
 * what actually distinguishes backdrop from level. All three callers -- the
 * editor's preview quad, play mode's collider and the bake's tiles -- go
 * through here, so they cannot disagree about where the floor is.
 *
 * @param boxes  [{ min:[x,y,z], max:[x,y,z], billboard? }] -- every placement's footprint.
 * @returns { ix0, iz0, ix1, iz1, minX, minZ, maxX, maxZ, width, depth, tiles, truncated, excluded }
 *   where each tile is { ix, iz, cx, cz, width, depth, minX, minZ, maxX, maxZ }.
 */
export function groundExtent(boxes, { cellSize = 24, margin = 8 } = {}) {
  let minX = Infinity;
  let minZ = Infinity;
  let maxX = -Infinity;
  let maxZ = -Infinity;
  let excluded = 0;
  for (const b of boxes) {
    if (isBillboard(b.billboard)) { excluded += 1; continue; }
    if (!Number.isFinite(b.min[0]) || !Number.isFinite(b.max[0])) continue;
    minX = Math.min(minX, b.min[0]); maxX = Math.max(maxX, b.max[0]);
    minZ = Math.min(minZ, b.min[2]); maxZ = Math.max(maxZ, b.max[2]);
  }
  // An empty level still gets a floor to stand on -- one cell at the origin.
  if (!Number.isFinite(minX)) { minX = -cellSize / 2; maxX = cellSize / 2; minZ = -cellSize / 2; maxZ = cellSize / 2; }

  const m = Math.max(0, Number.isFinite(margin) ? margin : 0);
  minX -= m; maxX += m; minZ -= m; maxZ += m;

  // The cells the rectangle touches. The upper index is `ceil - 1` rather than
  // `floor`, so an edge sitting exactly on a cell line does not claim a
  // zero-width tile in the next cell over.
  const ix0 = Math.floor(minX / cellSize);
  const ix1 = Math.max(ix0, Math.ceil(maxX / cellSize) - 1);
  const iz0 = Math.floor(minZ / cellSize);
  const iz1 = Math.max(iz0, Math.ceil(maxZ / cellSize) - 1);

  const tiles = [];
  const count = (ix1 - ix0 + 1) * (iz1 - iz0 + 1);
  for (let ix = ix0; ix <= ix1 && tiles.length < MAX_TILES; ix += 1) {
    for (let iz = iz0; iz <= iz1 && tiles.length < MAX_TILES; iz += 1) {
      // The cell, clipped to the rectangle: interior tiles are whole cells,
      // edge tiles stop where the margin does.
      const tMinX = Math.max(minX, ix * cellSize);
      const tMaxX = Math.min(maxX, (ix + 1) * cellSize);
      const tMinZ = Math.max(minZ, iz * cellSize);
      const tMaxZ = Math.min(maxZ, (iz + 1) * cellSize);
      tiles.push({
        ix, iz,
        cx: (tMinX + tMaxX) / 2, cz: (tMinZ + tMaxZ) / 2,
        width: tMaxX - tMinX, depth: tMaxZ - tMinZ,
        minX: tMinX, minZ: tMinZ, maxX: tMaxX, maxZ: tMaxZ,
      });
    }
  }
  return {
    ix0, iz0, ix1, iz1,
    minX, minZ, maxX, maxZ,
    width: maxX - minX,
    depth: maxZ - minZ,
    tiles,
    truncated: count > MAX_TILES,
    wanted: count,
    excluded,
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
      // Carried so `groundExtent` can drop backdrop imposters; see there.
      billboard: p.billboard,
    };
  });
}
