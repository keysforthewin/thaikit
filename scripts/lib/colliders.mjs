/**
 * The collider derivation, as a library.
 *
 * Lifted verbatim out of scripts/derive-colliders.mjs so the level editor's pack
 * manager can give a third-party module a compound without a registry entry.
 * The CLI still owns the record format, the registry write and the flags; this
 * file owns the algorithm. The long header on the CLI explains the design and
 * the scars behind it -- read that before touching anything here.
 */
import { createRequire } from 'node:module';
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';

import { toRepoRelative } from '@thaikit/registry-core';

import { colliderPartCeiling } from './budget.mjs';

const require = createRequire(import.meta.url);
const THREE = require('three');

export const RECORD_SCHEMA_VERSION = 1;
export const GENERATOR_VERSION = '1.0.0';

/** A player capsule. Every width threshold below is one of these two numbers. */
export const PLAYER_RADIUS = 0.35;
export const STEP_HEIGHT = 0.3;

/** Rough densities by category, for the mass SUGGESTION the script never writes. */
export const DENSITY = {
  'building-part': 900,
  vehicle: 400,
  container: 300,
  signage: 700,
  'street-furniture': 800,
  utility: 1200,
  lighting: 500,
  vendor: 400,
  religious: 1800,
  animal: 900,
};

// ---------------------------------------------------------------------------
// Loading
// ---------------------------------------------------------------------------

/**
 * Evaluate a built bundle under plain Node and collect its world geometry.
 *
 * The require shim provides three and nothing else, exactly as the browser
 * harness does -- a bundle that reaches for anything else is a bundle the host
 * page could not run either. Baked canvas graphics return null here behind their
 * `typeof document === 'undefined'` guard; geometry is unaffected.
 */
export function loadParts(file, maxTriangles, shim = null) {
  const mod = { exports: {} };
  new Function('module', 'exports', 'require', readFileSync(file, 'utf8'))(
    mod,
    mod.exports,
    shim ??
      ((name) => {
        if (name === 'three') return THREE;
        throw new Error(`the bundle must import three and nothing else; it asked for ${name}`);
      }),
  );
  const factory = mod.exports.createObjectModel ?? mod.exports.default;
  if (typeof factory !== 'function') throw new Error('no createObjectModel export');

  const root = factory(null, {});
  if (!root?.isObject3D) throw new Error('the factory did not return an Object3D');
  return partsFromRoot(root, maxTriangles);
}

/** The world-space triangles of an already-built root, in root-local metres. */
export function partsFromRoot(root, maxTriangles) {
  root.updateMatrixWorld(true);

  // Anything the factory did to its own root has to come out of the vertices, or
  // the record would be in the root's frame rather than root-LOCAL.
  const toLocal = new THREE.Matrix4().copy(root.matrixWorld).invert();

  const parts = [];
  let triangles = 0;
  const scratch = new THREE.Matrix4();

  root.traverse((o) => {
    if (!o.isMesh || !o.geometry?.attributes?.position) return;
    const matrices = [];
    if (o.isInstancedMesh) {
      // Per instance. The envelope over all of them is the scar in the header.
      for (let i = 0; i < o.count; i += 1) {
        const m = new THREE.Matrix4();
        o.getMatrixAt(i, m);
        matrices.push(m.premultiply(o.matrixWorld));
      }
    } else {
      matrices.push(o.matrixWorld);
    }

    const pos = o.geometry.attributes.position;
    const index = o.geometry.index;
    const count = index ? index.count : pos.count;

    for (const m of matrices) {
      scratch.multiplyMatrices(toLocal, m);
      const tris = new Float64Array(count * 3);
      const box = new THREE.Box3();
      const v = new THREE.Vector3();
      for (let i = 0; i < count; i += 1) {
        const vi = index ? index.getX(i) : i;
        v.fromBufferAttribute(pos, vi).applyMatrix4(scratch);
        tris[i * 3] = v.x;
        tris[i * 3 + 1] = v.y;
        tris[i * 3 + 2] = v.z;
        box.expandByPoint(v);
      }
      triangles += count / 3;
      if (triangles > maxTriangles) {
        throw new Error(
          `over ${maxTriangles} triangles — raise --max-triangles if you mean it, but a ` +
            'compound this expensive to derive is a compound worth authoring by hand',
        );
      }
      parts.push({ name: o.name || o.userData?.sculptComponent?.id || 'mesh', tris, box });
    }
  });

  return { parts, triangles };
}

// ---------------------------------------------------------------------------
// Decoration filter
// ---------------------------------------------------------------------------

/**
 * Drop the parts nothing can stand on, walk along or meaningfully bump into.
 *
 * All three tests must agree, and two of them are RATIOS, which is what makes
 * the rule scale-free: the same filter deletes a 13 mm pole from a shophouse and
 * KEEPS a thin wall-mounted sign that is its own prop, because there the part is
 * the largest one and the ratio is 1.0.
 *
 * The revert guard matters more than the filter. A collider smaller than the
 * mesh is the worst thing this script can ship -- the player clips into visible
 * geometry -- so a filter that eats the prop announces itself instead.
 */
export function filterDecoration(parts, bounds, opts) {
  const size = bounds.getSize(new THREE.Vector3());
  const propFootprint = Math.max(1e-6, size.x * size.z);
  const vol = (b) => {
    const s = b.getSize(new THREE.Vector3());
    return s.x * s.y * s.z;
  };
  const largest = Math.max(...parts.map((p) => vol(p.box)), 1e-9);
  const totalVolume = parts.reduce((t, p) => t + vol(p.box), 0);

  const kept = parts.filter((p) => {
    const s = p.box.getSize(new THREE.Vector3());
    const thin = Math.min(s.x, s.z) < opts.decorMaxExtent;
    const small = vol(p.box) < opts.decorVolumeFrac * largest;
    const slight = s.x * s.z < opts.decorFootprintFrac * propFootprint;
    return !(thin && small && slight);
  });

  const keptVolume = kept.reduce((t, p) => t + vol(p.box), 0);
  if (!kept.length || keptVolume < 0.4 * totalVolume) {
    return { parts, filtered: 0, reverted: true };
  }
  return { parts: kept, filtered: parts.length - kept.length, reverted: false };
}

// ---------------------------------------------------------------------------
// Voxelisation
// ---------------------------------------------------------------------------

/**
 * Surface occupancy, plus a top-surface heightmap for the self-check.
 *
 * Point sampling rather than a separating-axis test: the error is half a voxel,
 * which stage 7's exact refit removes anyway, and it needs no BVH. Nothing is
 * ever filled -- see scar 6.
 */
export function voxelise(parts, bounds, voxel, maxCells) {
  let v = voxel;
  let nx;
  let ny;
  let nz;
  const size = bounds.getSize(new THREE.Vector3());
  for (;;) {
    nx = Math.max(1, Math.ceil(size.x / v) + 1);
    ny = Math.max(1, Math.ceil(size.y / v) + 1);
    nz = Math.max(1, Math.ceil(size.z / v) + 1);
    if (nx * ny * nz <= maxCells) break;
    v *= 1.25;
  }

  const origin = bounds.min.clone();
  const occ = new Uint8Array(nx * ny * nz);
  // Highest surface point per XZ column, in metres. NaN where nothing was hit.
  const top = new Float64Array(nx * nz).fill(Number.NaN);

  const mark = (x, y, z) => {
    const ix = Math.min(nx - 1, Math.max(0, Math.floor((x - origin.x) / v)));
    const iy = Math.min(ny - 1, Math.max(0, Math.floor((y - origin.y) / v)));
    const iz = Math.min(nz - 1, Math.max(0, Math.floor((z - origin.z) / v)));
    occ[(iy * nz + iz) * nx + ix] = 1;
    const t = top[iz * nx + ix];
    if (Number.isNaN(t) || y > t) top[iz * nx + ix] = y;
  };

  const step = v / 2;
  for (const p of parts) {
    const t = p.tris;
    for (let i = 0; i < t.length; i += 9) {
      const ax = t[i];
      const ay = t[i + 1];
      const az = t[i + 2];
      const bx = t[i + 3];
      const by = t[i + 4];
      const bz = t[i + 5];
      const cx = t[i + 6];
      const cy = t[i + 7];
      const cz = t[i + 8];
      const e1 = Math.hypot(bx - ax, by - ay, bz - az);
      const e2 = Math.hypot(cx - ax, cy - ay, cz - az);
      const n = Math.max(1, Math.ceil(Math.max(e1, e2) / step));
      for (let a = 0; a <= n; a += 1) {
        for (let b = 0; b <= n - a; b += 1) {
          const u = a / n;
          const w = b / n;
          mark(
            ax + (bx - ax) * u + (cx - ax) * w,
            ay + (by - ay) * u + (cy - ay) * w,
            az + (bz - az) * u + (cz - az) * w,
          );
        }
      }
    }
  }

  return { occ, top, nx, ny, nz, v, origin };
}

// ---------------------------------------------------------------------------
// 2D mask helpers
// ---------------------------------------------------------------------------

export function maskBBox(mask, nx, nz) {
  let x0 = nx;
  let x1 = -1;
  let z0 = nz;
  let z1 = -1;
  for (let z = 0; z < nz; z += 1) {
    for (let x = 0; x < nx; x += 1) {
      if (!mask[z * nx + x]) continue;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (z < z0) z0 = z;
      if (z > z1) z1 = z;
    }
  }
  return x1 < 0 ? null : { x0, x1, z0, z1, area: (x1 - x0 + 1) * (z1 - z0 + 1) };
}

const sliceMask = (g, iy) => g.occ.subarray(iy * g.nz * g.nx, (iy + 1) * g.nz * g.nx);

function orInto(dst, src) {
  for (let i = 0; i < dst.length; i += 1) if (src[i]) dst[i] = 1;
  return dst;
}

const area = (m) => {
  let n = 0;
  for (let i = 0; i < m.length; i += 1) if (m[i]) n += 1;
  return n;
};

function iou(a, b) {
  let inter = 0;
  let union = 0;
  for (let i = 0; i < a.length; i += 1) {
    if (a[i] || b[i]) union += 1;
    if (a[i] && b[i]) inter += 1;
  }
  return union ? inter / union : 1;
}

/**
 * Fill a slice's INTERIOR: empty cells inside the outline with something over them.
 *
 * Enclosure is tested with four rays rather than a flood, and that is the whole
 * point. A shophouse's wall ring is BROKEN by its shopfront, so a flood from the
 * outside walks straight in through the opening, the interior never reads as
 * enclosed, and the 7-Eleven builds as four thin wall slabs -- measured at
 * volumeRatio 0.521 with the body hollow. A cell with occupancy to its left,
 * right, front and back is inside the outline whether or not the outline has a
 * door in it, so the doorway seals along with everything behind it.
 *
 * Sealing is correct here, not a compromise: buildings in this kit are exterior
 * shells with no interior geometry, so a player who walks in through an unsealed
 * shopfront is standing in an empty box looking at the backs of the walls.
 *
 * The `coveredAbove` half is what keeps a courtyard, a parapet void and the space
 * under a canopy open -- all three are inside an outline, and none of them has a
 * roof. That is also what leaves the roof deck, not the parapet crown, as the
 * surface you stand on.
 */
function fillInterior(mask, nx, nz, coveredAbove) {
  const out = Uint8Array.from(mask);

  // Only ever inside this slice's OWN outline. Without the bound, a small ring
  // high up on a cone fills a cross all the way to the edges of the grid --
  // three of the traffic cone's six layers came out 0.40 m wide, wider than its
  // 0.38 m skirt, at volumeRatio 3.15. The slice's bbox is the outline the fill
  // is allowed to work within, and for the cone that bbox IS the little ring.
  const bb = maskBBox(mask, nx, nz);
  if (!bb) return out;

  // Occupancy runs per row and per column, so the four rays are four lookups.
  const leftOf = new Uint8Array(nx * nz);
  const rightOf = new Uint8Array(nx * nz);
  for (let z = 0; z < nz; z += 1) {
    let seen = 0;
    for (let x = 0; x < nx; x += 1) {
      leftOf[z * nx + x] = seen;
      if (mask[z * nx + x]) seen = 1;
    }
    seen = 0;
    for (let x = nx - 1; x >= 0; x -= 1) {
      rightOf[z * nx + x] = seen;
      if (mask[z * nx + x]) seen = 1;
    }
  }
  const frontOf = new Uint8Array(nx * nz);
  const backOf = new Uint8Array(nx * nz);
  for (let x = 0; x < nx; x += 1) {
    let seen = 0;
    for (let z = 0; z < nz; z += 1) {
      frontOf[z * nx + x] = seen;
      if (mask[z * nx + x]) seen = 1;
    }
    seen = 0;
    for (let z = nz - 1; z >= 0; z -= 1) {
      backOf[z * nx + x] = seen;
      if (mask[z * nx + x]) seen = 1;
    }
  }

  for (let i = 0; i < out.length; i += 1) {
    if (out[i]) continue;
    const x = i % nx;
    const z = (i - x) / nx;
    if (x < bb.x0 || x > bb.x1 || z < bb.z0 || z > bb.z1) continue;
    if (coveredAbove && !coveredAbove[i]) continue;
    // THREE of four, not four. A shophouse's shopfront is a genuine 6 m opening
    // -- the glazing that fills it is 0.02 m thick and drops out as decoration --
    // so a cell in the middle of the floor has walls left, right and behind it
    // and open air in front. Demanding all four leaves the body hollow at
    // volumeRatio 0.52. Three still refuses the space under a canopy, where a
    // cell between two poles has occupancy on two sides at most.
    const rays = leftOf[i] + rightOf[i] + frontOf[i] + backOf[i];
    if (rays >= 3) out[i] = 1;
  }
  return out;
}

/**
 * Close the holes in one slice that are not holes.
 *
 * Two quite different things get closed here, and the second is the one that
 * makes a building work.
 *
 * A hole NARROWER THAN A PLAYER is a gap between mullions or the slot under a
 * door leaf -- closing it lets a wall with a window in it cover as one rectangle
 * instead of four.
 *
 * A hole COVERED FROM ABOVE is an interior. Buildings in this kit are exterior
 * shells by rule, so the surface occupancy of a shophouse at waist height is a
 * ring of wall with nothing inside it, and leaving that open builds a compound
 * of four thin wall slabs whose volume is a fifth of the prop -- measured on the
 * 7-Eleven at volumeRatio 0.182 with 72% of samples overshooting. Filling it
 * gives one solid box.
 *
 * "Covered from above" rather than "enclosed" is what keeps the parapet honest.
 * A parapet ring has nothing above it, so it stays open and the roof deck below
 * remains the surface you stand on -- which is the entire feature. A courtyard
 * is open to the sky too, and stays open for the same reason. A drum's interior
 * is capped by its head plate, and fills.
 */
function fillSmallHoles(mask, nx, nz, minCells, coveredAbove) {
  const out = Uint8Array.from(mask);
  const seen = new Uint8Array(nx * nz);
  for (let z0 = 0; z0 < nz; z0 += 1) {
    for (let x0 = 0; x0 < nx; x0 += 1) {
      const s = z0 * nx + x0;
      if (out[s] || seen[s]) continue;
      // Flood the empty region; a region touching the border is outside air.
      const stack = [s];
      const cells = [];
      seen[s] = 1;
      let touchesBorder = false;
      let minX = nx;
      let maxX = -1;
      let minZ = nz;
      let maxZ = -1;
      while (stack.length) {
        const c = stack.pop();
        const x = c % nx;
        const z = (c - x) / nx;
        cells.push(c);
        if (x === 0 || z === 0 || x === nx - 1 || z === nz - 1) touchesBorder = true;
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (z < minZ) minZ = z;
        if (z > maxZ) maxZ = z;
        if (x > 0 && !out[c - 1] && !seen[c - 1]) (seen[c - 1] = 1), stack.push(c - 1);
        if (x < nx - 1 && !out[c + 1] && !seen[c + 1]) (seen[c + 1] = 1), stack.push(c + 1);
        if (z > 0 && !out[c - nx] && !seen[c - nx]) (seen[c - nx] = 1), stack.push(c - nx);
        if (z < nz - 1 && !out[c + nx] && !seen[c + nx]) (seen[c + nx] = 1), stack.push(c + nx);
      }
      if (touchesBorder) continue;
      const w = Math.min(maxX - minX + 1, maxZ - minZ + 1);
      let roofed = 0;
      if (coveredAbove) for (const c of cells) if (coveredAbove[c]) roofed += 1;
      if (w < minCells || roofed / cells.length >= 0.6) for (const c of cells) out[c] = 1;
    }
  }
  return out;
}

/**
 * The largest all-occupied axis-aligned rectangle, by largest-rectangle-in-histogram.
 *
 * This is the step that rescues a merged parapet RING: the ring's mask covers no
 * useful single rectangle, so the cover emits its four walls and leaves the roof
 * void open. No other approach here produces that at any part count.
 */
export function largestRect(mask, nx, nz) {
  const heights = new Int32Array(nx);
  let best = null;
  for (let z = 0; z < nz; z += 1) {
    for (let x = 0; x < nx; x += 1) heights[x] = mask[z * nx + x] ? heights[x] + 1 : 0;
    const stack = [];
    for (let x = 0; x <= nx; x += 1) {
      const h = x === nx ? 0 : heights[x];
      let start = x;
      while (stack.length && stack[stack.length - 1].h >= h) {
        const top = stack.pop();
        const a = top.h * (x - top.x);
        if (!best || a > best.area) {
          best = { area: a, x0: top.x, x1: x - 1, z0: z - top.h + 1, z1: z };
        }
        start = top.x;
      }
      stack.push({ x: start, h });
    }
  }
  return best;
}

/** How empty a fallback bounding box has to be before it is split into its components. At 0.35 the
 *  canopy bay's post layer (four 0.10 m posts filling 0.5% of a 16 m2 box) splits and the soi dog's
 *  leg layer (0.21 m2, filled 0.4) does not. Both numbers are measured, not chosen. */
const FALLBACK_SPLIT_FILL = 0.35;

/** Bounding boxes of the mask's 4-connected components, largest first, capped at `max`. The
 *  fallback for a layer no rectangle is big enough to cover: four thin legs are four boxes, and a
 *  single blob is the one box `maskBBox` would have given. Components past the cap are folded into
 *  the nearest kept box so nothing is dropped -- an uncovered leg is a player falling through. */
function componentBoxes(mask, nx, nz, max) {
  const seen = new Uint8Array(nx * nz);
  const found = [];
  for (let z0 = 0; z0 < nz; z0 += 1) {
    for (let x0 = 0; x0 < nx; x0 += 1) {
      const s = z0 * nx + x0;
      if (!mask[s] || seen[s]) continue;
      seen[s] = 1;
      const stack = [s];
      let ax0 = x0, ax1 = x0, az0 = z0, az1 = z0, n = 0;
      while (stack.length) {
        const i = stack.pop();
        const x = i % nx, z = (i - x) / nx;
        n += 1;
        if (x < ax0) ax0 = x; if (x > ax1) ax1 = x;
        if (z < az0) az0 = z; if (z > az1) az1 = z;
        const nb = [x > 0 ? i - 1 : -1, x < nx - 1 ? i + 1 : -1, z > 0 ? i - nx : -1, z < nz - 1 ? i + nx : -1];
        for (const j of nb) if (j >= 0 && mask[j] && !seen[j]) { seen[j] = 1; stack.push(j); }
      }
      found.push({ x0: ax0, x1: ax1, z0: az0, z1: az1, area: n });
    }
  }
  if (found.length < 2) return found;
  found.sort((a, b) => b.area - a.area);
  const kept = found.slice(0, Math.max(1, max));
  for (const r of found.slice(Math.max(1, max))) {
    // nearest by centre, then grown to swallow it: a dropped component is a hole in the floor
    let best = kept[0], bd = Infinity;
    for (const k of kept) {
      const d = Math.hypot((k.x0 + k.x1) / 2 - (r.x0 + r.x1) / 2, (k.z0 + k.z1) / 2 - (r.z0 + r.z1) / 2);
      if (d < bd) { bd = d; best = k; }
    }
    best.x0 = Math.min(best.x0, r.x0); best.x1 = Math.max(best.x1, r.x1);
    best.z0 = Math.min(best.z0, r.z0); best.z1 = Math.max(best.z1, r.z1);
  }
  return kept;
}

export function coverWithRects(mask, nx, nz, maxRects, minCells, splitMinCells = Infinity) {
  const work = Uint8Array.from(mask);
  const total = area(work);
  const rects = [];
  let covered = 0;
  while (rects.length < maxRects && covered < 0.9 * total) {
    const r = largestRect(work, nx, nz);
    if (!r || r.area <= 0) break;
    const w = r.x1 - r.x0 + 1;
    const d = r.z1 - r.z0 + 1;
    if (w < minCells && d < minCells) break;
    rects.push(r);
    for (let z = r.z0; z <= r.z1; z += 1) for (let x = r.x0; x <= r.x1; x += 1) work[z * nx + x] = 0;
    covered += r.area;
  }
  if (rects.length) return rects;

  // The fallback is the MASK's own bounding box, never the whole grid. Returning
  // the grid made every layer too narrow to hold a 0.15 m rectangle come out at
  // the full width of the model: three of the traffic cone's layers shipped at
  // 0.40 m, wider than its own 0.38 m base, at volumeRatio 3.15 and 81% of
  // samples overshooting. A tip is small, and the honest answer is a small box.
  //
  // But ONE bounding box is only honest when the layer is one thing. A canopy
  // bay standing on four 0.10 m bamboo posts has a layer of four separated
  // dots, none of them the 0.15 m a rectangle has to be, so the greedy cover
  // takes none of them -- and the bbox of four corner posts is the WHOLE BAY.
  // That shipped a solid 4 x 4 x 1.84 m block under the roof of the bamboo
  // module: 20% of its footprint standing more than the 0.30 m step height
  // above the real surface, which is a player walking onto thin air at waist
  // height in a shelter whose entire purpose is to be walked under. So the
  // fallback is per CONNECTED COMPONENT: one box each for the four posts, and
  // for a single blob -- the cone tip the paragraph above is about -- exactly
  // the bbox it already returned.
  const bb = maskBBox(mask, nx, nz);
  if (!bb) return [{ x0: 0, x1: nx - 1, z0: 0, z1: nz - 1, area: total }];

  // ...but ONLY when that bbox is actually dishonest, which is two things at
  // once and neither alone. Measured across the whole kit by re-deriving all 122
  // compounds: splitting unconditionally DROPPED coverage on nine props -- the
  // soi dog from 0.973 to 0.718, the futsal mast from 0.974 to 0.889 -- because
  // for four legs under a solid body the bbox IS the body, and boxing the legs
  // separately leaves the space between them uncovered when there is something
  // over it to stand on. The canopy is the opposite case: four posts inside a
  // 16 m2 bay that is meant to be walked THROUGH.
  //
  // So: the components must fill little of the bbox (the bbox is mostly air) AND
  // the bbox must be big enough that a player can walk into that air. A dog's
  // leg layer is 0.21 m2 -- there is nowhere to walk -- and stays one box.
  const bbCells = (bb.x1 - bb.x0 + 1) * (bb.z1 - bb.z0 + 1);
  if (total / bbCells < FALLBACK_SPLIT_FILL && bbCells >= splitMinCells) {
    const comps = componentBoxes(mask, nx, nz, maxRects);
    if (comps.length > 1) return comps;
  }
  return [bb];
}

// ---------------------------------------------------------------------------
// Layering
// ---------------------------------------------------------------------------

/**
 * Cut the prop into horizontal layers at the heights where its footprint changes.
 *
 * An EMPTY slice closes the layer and opens a gap, and no box is emitted for a
 * gap -- which is what keeps the space under a canopy walkable, with no special
 * case for canopies. The thin-layer merge has one exception, and it is the whole
 * point: a layer that is thin but PROUD of the one below it is a coping, a
 * canopy, a bench seat or a plinth cap, and it has to survive as its own box.
 */
export function layerise(grid, opts) {
  const cells = grid.nx * grid.nz;

  // What sits above each slice, accumulated top-down. This is what tells an
  // interior (roofed) apart from a courtyard or a parapet void (open sky).
  const coveredAbove = [];
  const acc = new Uint8Array(cells);
  for (let iy = grid.ny - 1; iy >= 0; iy -= 1) {
    coveredAbove[iy] = Uint8Array.from(acc);
    orInto(acc, sliceMask(grid, iy));
  }

  // Fill BEFORE layering, not after. On raw shell masks the shopfront, the
  // glazing and the door open and close cells at a dozen heights, the IoU test
  // cuts a layer at each of them, and the 7-Eleven came out as twelve layers
  // against a budget of eight -- so the prune then merged parts across the
  // building rather than merging redundant ones.
  const holeCells = Math.max(2, Math.ceil((2 * PLAYER_RADIUS) / grid.v));
  const slices = [];
  for (let iy = 0; iy < grid.ny; iy += 1) {
    const raw = sliceMask(grid, iy);
    let m = raw;
    if (area(raw)) {
      m = fillInterior(raw, grid.nx, grid.nz, coveredAbove[iy]);
      m = fillSmallHoles(m, grid.nx, grid.nz, holeCells, coveredAbove[iy]);
    }
    slices.push({ iy, mask: m, area: area(m) });
  }

  const layers = [];
  let current = null;
  for (const s of slices) {
    if (!s.area) {
      current = null;
      continue;
    }
    if (!current) {
      current = { iy0: s.iy, iy1: s.iy, mask: Uint8Array.from(s.mask), area: s.area };
      layers.push(current);
      continue;
    }
    const overlap = iou(current.mask, s.mask);
    const change = Math.abs(s.area - current.area) / Math.max(s.area, current.area);
    if (overlap >= opts.layerIou && change <= opts.layerArea) {
      current.iy1 = s.iy;
      orInto(current.mask, s.mask);
      current.area = area(current.mask);
    } else {
      current = { iy0: s.iy, iy1: s.iy, mask: Uint8Array.from(s.mask), area: s.area };
      layers.push(current);
    }
  }

  // Merge layers too thin to matter -- unless they are proud of the one below,
  // which is exactly what a ledge looks like from here.
  const minCells = Math.max(2, Math.ceil(opts.minLayer / grid.v));
  for (let i = layers.length - 1; i >= 0; i -= 1) {
    const l = layers[i];
    const thickness = l.iy1 - l.iy0 + 1;
    if (thickness >= minCells) continue;
    // Proud of what is under it: a coping, a canopy, a bench seat, a plinth cap.
    // The bottom layer counts as proud by definition -- there is nothing below a
    // ground slab but the ground.
    if (!layers[i - 1] || l.area >= opts.ledgeRatio * layers[i - 1].area) continue;
    const below = layers[i - 1];
    const above = layers[i + 1];
    const target =
      below && above
        ? iou(below.mask, l.mask) >= iou(above.mask, l.mask)
          ? below
          : above
        : below ?? above;
    if (!target) continue;
    // Never merge a WIDE layer into a NARROW one: the union takes the wide
    // footprint and the tall height, and invents volume that is not there. The
    // soi entrance tile is a flat 8 x 8 deck with a 0.06 m sign post standing on
    // it; merging the deck up into the post built one solid 8.06 x 1.81 x 8.06
    // block over the whole tile -- volumeRatio 28.2, and 99.9% of the footprint
    // standing 1.8 m above the road.
    if (l.area > target.area) continue;
    target.iy0 = Math.min(target.iy0, l.iy0);
    target.iy1 = Math.max(target.iy1, l.iy1);
    orInto(target.mask, l.mask);
    target.area = area(target.mask);
    layers.splice(i, 1);
  }

  void cells;
  return layers;
}

// ---------------------------------------------------------------------------
// Parts
// ---------------------------------------------------------------------------

const partVolume = (p) => 8 * p.scale[0] * p.scale[1] * p.scale[2];

export function boxFromRect(grid, rect, y0, y1, name) {
  const x0 = grid.origin.x + rect.x0 * grid.v;
  const x1 = grid.origin.x + (rect.x1 + 1) * grid.v;
  const z0 = grid.origin.z + rect.z0 * grid.v;
  const z1 = grid.origin.z + (rect.z1 + 1) * grid.v;
  return {
    name,
    type: 'box',
    offset: [(x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2],
    scale: [(x1 - x0) / 2, (y1 - y0) / 2, (z1 - z0) / 2],
    isTrigger: false,
    _cells: rect,
  };
}

/*
 * There is deliberately NO extent refit here.
 *
 * A refit to the tight bounds of the vertices inside a part looks like free
 * precision and is a trap: vertices are a bad proxy for coverage, because a
 * large triangle can span a rectangle with every one of its vertices OUTSIDE it.
 * On the 7-Eleven that collapsed the front parapet band from 0.58 m deep to
 * 0.18 m sitting 0.38 m clear of where the parapet actually is, moving the prop
 * from p95 0.084 m / coverage 0.997 to p95 0.419 m / coverage 0.989. Clamping
 * the shrink to one voxel only halved the damage.
 *
 * The voxel bounds are already tight to within one cell, and that cell errs
 * OUTWARD -- the collider is up to `voxel` too generous, so a player stops a few
 * centimetres short of a wall rather than clipping into it. That is the right
 * direction to be wrong in, and `voxel` follows the model's own size.
 */

/**
 * Round parts, decided from the geometry rather than from a declaration.
 *
 * Four tests, and the fourth is the one that keeps a cone honest: a cone's
 * radius is not stable top to bottom, so it fails, splits into a skirt layer and
 * a body layer, and each is tested on its own. The oil drum passes all four and
 * derives [0.29, 0.405, 0.29] against the [0.287, 0.405, 0.287] a human declared
 * for it -- 3 mm apart, which is a useful regression check in itself.
 */
export function isRadial(grid, mask, r) {
  const hx = (r.x1 - r.x0 + 1) * grid.v;
  const hz = (r.z1 - r.z0 + 1) * grid.v;
  if (Math.abs(hx - hz) / Math.max(hx, hz) > 0.15) return false;
  const w = r.x1 - r.x0 + 1;
  const d = r.z1 - r.z0 + 1;
  let occupied = 0;
  for (let z = r.z0; z <= r.z1; z += 1) {
    for (let x = r.x0; x <= r.x1; x += 1) if (mask[z * grid.nx + x]) occupied += 1;
  }
  const fill = occupied / (w * d);
  // pi/4 = 0.785 for an inscribed disc; 1.00 for a square.
  if (fill < 0.7 || fill > 0.86) return false;

  const cx = (r.x0 + r.x1 + 1) / 2;
  const cz = (r.z0 + r.z1 + 1) / 2;
  const radii = [];
  for (let a = 0; a < 64; a += 1) {
    const th = (a / 64) * Math.PI * 2;
    const dx = Math.cos(th);
    const dz = Math.sin(th);
    let best = 0;
    for (let t = 0; t <= Math.max(w, d); t += 0.5) {
      const x = Math.floor(cx + dx * t);
      const z = Math.floor(cz + dz * t);
      if (x < r.x0 || x > r.x1 || z < r.z0 || z > r.z1) break;
      if (mask[z * grid.nx + x]) best = t;
    }
    radii.push(best);
  }
  const mean = radii.reduce((a, b) => a + b, 0) / radii.length;
  if (mean <= 0) return false;
  const sd = Math.sqrt(radii.reduce((t, x) => t + (x - mean) ** 2, 0) / radii.length);
  if (sd / mean > 0.1) return false;
  if ((Math.max(...radii) - Math.min(...radii)) / mean > 0.25) return false;
  return true;
}

/**
 * Prune to the part ceiling, merging the cheapest pair by added volume.
 *
 * The ledge veto is what stops the prune from quietly undoing the whole point:
 * two stacked parts may not merge when the lower one's top is genuinely
 * standable, because merging them raises the floor to the upper part's top and
 * the ledge simply stops existing. A ledge too narrow to stand on is free.
 */
export function prune(parts, maxParts, notes) {
  const standable = (lower, upper) => {
    const topY = lower.offset[1] + lower.scale[1];
    if (upper.offset[1] - upper.scale[1] < topY - 1e-6) return false;
    const exposedX = Math.max(0, lower.scale[0] - upper.scale[0]) * 2;
    const exposedZ = Math.max(0, lower.scale[2] - upper.scale[2]) * 2;
    const exposed = 4 * lower.scale[0] * lower.scale[2] - 4 * upper.scale[0] * upper.scale[2];
    return exposed >= 0.25 && Math.max(exposedX, exposedZ) >= PLAYER_RADIUS;
  };

  const union = (a, b) => {
    const lo = [0, 1, 2].map((i) => Math.min(a.offset[i] - a.scale[i], b.offset[i] - b.scale[i]));
    const hi = [0, 1, 2].map((i) => Math.max(a.offset[i] + a.scale[i], b.offset[i] + b.scale[i]));
    return {
      name: `${a.name}+${b.name}`,
      type: 'box',
      offset: [0, 1, 2].map((i) => (lo[i] + hi[i]) / 2),
      scale: [0, 1, 2].map((i) => (hi[i] - lo[i]) / 2),
      isTrigger: false,
      _cells: a._cells,
    };
  };

  let list = [...parts];
  while (list.length > maxParts) {
    let best = null;
    for (let i = 0; i < list.length; i += 1) {
      for (let j = i + 1; j < list.length; j += 1) {
        const [lo, hi] = list[i].offset[1] <= list[j].offset[1] ? [i, j] : [j, i];
        const vetoed = standable(list[lo], list[hi]);
        const u = union(list[i], list[j]);
        const cost = partVolume(u) - partVolume(list[i]) - partVolume(list[j]);
        if (!best || (vetoed === best.vetoed ? cost < best.cost : !vetoed)) {
          best = { i, j, u, cost, vetoed, lo };
        }
      }
    }
    if (!best) break;
    if (best.vetoed) {
      const lost = list[best.lo];
      notes.push(
        `part budget forced a merge over a standable ledge at y=${(
          lost.offset[1] + lost.scale[1]
        ).toFixed(2)} m — raise --max-parts to keep it`,
      );
    }
    list = list.filter((_, k) => k !== best.i && k !== best.j).concat(best.u);
  }
  return list;
}

// ---------------------------------------------------------------------------
// Self-check
// ---------------------------------------------------------------------------

/**
 * Cast rays down onto the real geometry and onto the compound, and disagree loudly.
 *
 * This is the whole difference between this system and the one it replaced. A
 * declared collider asserted that a prop had a physics proxy. These numbers say
 * how wrong the floor is under the player's feet, and where there is no floor at
 * all -- which is the failure that reads, in a game, as falling through a model.
 */
export function selfCheck(grid, parts, geometryParts) {
  const { nx, nz, v, origin, top } = grid;
  const deltas = [];
  let trueHits = 0;
  let bothHits = 0;
  let overshoot = 0;
  let undershoot = 0;
  let compoundOnly = 0;
  let compoundCells = 0;

  const heightAt = (x, z) => {
    let h = Number.NaN;
    for (const p of parts) {
      if (Math.abs(x - p.offset[0]) > p.scale[0]) continue;
      if (Math.abs(z - p.offset[2]) > p.scale[2]) continue;
      const t = p.offset[1] + p.scale[1];
      if (Number.isNaN(h) || t > h) h = t;
    }
    return h;
  };

  for (let iz = 0; iz < nz; iz += 1) {
    for (let ix = 0; ix < nx; ix += 1) {
      const x = origin.x + (ix + 0.5) * v;
      const z = origin.z + (iz + 0.5) * v;
      const tru = top[iz * nx + ix];
      const box = heightAt(x, z);
      if (!Number.isNaN(box)) compoundCells += 1;
      if (Number.isNaN(tru)) {
        if (!Number.isNaN(box)) compoundOnly += 1;
        continue;
      }
      trueHits += 1;
      if (Number.isNaN(box)) continue;
      bothHits += 1;
      const d = box - tru;
      deltas.push(Math.abs(d));
      if (d > STEP_HEIGHT) overshoot += 1;
      if (-d > 0.1) undershoot += 1;
    }
  }

  deltas.sort((a, b) => a - b);
  const pct = (q) => (deltas.length ? deltas[Math.min(deltas.length - 1, Math.floor(q * deltas.length))] : 0);

  // Column-filled truth, or a shell divides into a meaningless ratio (scar 7).
  let trueSolid = 0;
  for (let iz = 0; iz < nz; iz += 1) {
    for (let ix = 0; ix < nx; ix += 1) {
      let lo = -1;
      let hi = -1;
      for (let iy = 0; iy < grid.ny; iy += 1) {
        if (grid.occ[(iy * nz + iz) * nx + ix]) {
          if (lo < 0) lo = iy;
          hi = iy;
        }
      }
      if (lo >= 0) trueSolid += hi - lo + 1;
    }
  }
  const cell = v * v * v;
  const compoundVolume = parts.reduce((t, p) => t + partVolume(p), 0);

  void geometryParts;
  return {
    samples: trueHits,
    coverage: trueHits ? +(bothHits / trueHits).toFixed(4) : 0,
    meanAbsDelta: +(deltas.reduce((a, b) => a + b, 0) / Math.max(1, deltas.length)).toFixed(4),
    p95AbsDelta: +pct(0.95).toFixed(4),
    maxAbsDelta: +(deltas[deltas.length - 1] ?? 0).toFixed(4),
    overshoot: bothHits ? +(overshoot / bothHits).toFixed(4) : 0,
    undershoot: bothHits ? +(undershoot / bothHits).toFixed(4) : 0,
    footprintOvershoot: compoundCells ? +(compoundOnly / compoundCells).toFixed(4) : 0,
    volumeRatio: trueSolid ? +(compoundVolume / (trueSolid * cell)).toFixed(3) : null,
  };
}

/**
 * The ledges the prop really has, and the ones that survived into the compound.
 *
 * A mean height error of 0.03 m will hide a deleted roof deck, so the ledges are
 * counted rather than inferred from the error.
 */
export function ledgeInventory(grid, parts) {
  const { nx, nz, v, top } = grid;
  const cellArea = v * v;
  const bins = new Map();
  for (let i = 0; i < top.length; i += 1) {
    const h = top[i];
    if (Number.isNaN(h)) continue;
    const key = Math.round(h / 0.05);
    bins.set(key, (bins.get(key) ?? 0) + 1);
  }
  const truth = [...bins.entries()]
    .filter(([, n]) => n * cellArea >= 0.25)
    .map(([k, n]) => ({ y: +(k * 0.05).toFixed(2), area: +(n * cellArea).toFixed(2) }))
    .sort((a, b) => b.area - a.area)
    .slice(0, 8);

  const tops = parts.map((p) => p.offset[1] + p.scale[1]);
  const lost = [];
  let kept = 0;
  for (const l of truth) {
    if (tops.some((t) => Math.abs(t - l.y) <= 0.1)) kept += 1;
    else lost.push({ y: l.y, area: l.area, reason: 'no compound top within 0.10 m' });
  }
  void nx;
  void nz;
  return { ledgesPreserved: `${kept}/${truth.length}`, ledgesLost: lost, trueLedges: truth };
}

// ---------------------------------------------------------------------------
// The pass
// ---------------------------------------------------------------------------

/**
 * `opts.bundle` is the absolute path of the CommonJS bundle to evaluate. The
 * caller resolves it (scripts/lib/bundle-for.mjs): a promoted prop's only bundle
 * is the pack installer's, under packs/@thai-kit/<tag>/<id>/, and the source
 * tree never carries one. `generator.bundleSha256` in the record hashes THAT
 * file, so a re-derivation can tell whether the geometry it measured is the
 * geometry that ships.
 */
export function deriveOne(asset, opts) {
  const started = Date.now();
  const bundle = opts.bundle;
  if (!bundle) throw new Error(`${asset.id}: no bundle resolved (opts.bundle)`);
  if (!existsSync(bundle)) throw new Error(`no bundle at ${toRepoRelative(bundle)}`);

  const source = readFileSync(bundle);
  const bundleSha256 = crypto.createHash('sha256').update(source).digest('hex');

  const { parts: rawParts, triangles } = loadParts(bundle, opts.maxTriangles);
  if (!rawParts.length) throw new Error('the factory built no meshes');

  return deriveFromParts(rawParts, triangles, {
    ...opts,
    maxParts: opts.maxParts ?? colliderPartCeiling(asset),
    bundleSha256,
    started,
  });
}

/**
 * The derivation proper, from world-space triangles already collected.
 *
 * Split from deriveOne so a module that is not a thaikit asset -- a third-party
 * vibe3d pack item, say -- can be given a compound without a registry entry:
 * the caller supplies the part ceiling instead of an asset to look it up on.
 */
export function deriveFromParts(rawParts, triangles, opts) {
  const started = opts.started ?? Date.now();
  const bundleSha256 = opts.bundleSha256 ?? null;

  const bounds = new THREE.Box3();
  for (const p of rawParts) bounds.union(p.box);
  const size = bounds.getSize(new THREE.Vector3());
  const groundY = bounds.min.y;
  const maxParts = opts.maxParts;
  const notes = [];

  // --- billboard exit -----------------------------------------------------
  const maxDim = Math.max(size.x, size.y, size.z);
  const minDim = Math.min(size.x, size.y, size.z);
  if (maxDim > 40 && minDim < 0.05) {
    const c = bounds.getCenter(new THREE.Vector3());
    const half = [Math.max(size.x / 2, 0.025), Math.max(size.y / 2, 0.025), Math.max(size.z / 2, 0.025)];
    return {
      record: {
        parts: [
          {
            name: 'billboard',
            type: 'box',
            offset: [c.x, c.y, c.z],
            scale: half,
            isTrigger: false,
            notes: 'skyline imposter: the plane IS the prop, inflated to 0.05 m so it is not a NaN',
          },
        ],
        selfCheck: { skipped: 'imposter billboard; a down-ray check on a zero-thickness plane says nothing' },
        ledgesPreserved: '0/0',
        ledgesLost: [],
      },
      meta: { triangles, groundY, voxel: null, filtered: 0, maxParts, elapsedMs: Date.now() - started },
    };
  }

  // --- decoration ---------------------------------------------------------
  const decor = filterDecoration(rawParts, bounds, opts);
  if (decor.reverted) {
    notes.push('decoration filter reverted: it would have removed most of the prop');
  }
  const keptBounds = new THREE.Box3();
  for (const p of decor.parts) keptBounds.union(p.box);

  // --- voxelise -----------------------------------------------------------
  const voxel =
    opts.voxel === 'auto' ? Math.min(0.25, Math.max(0.02, maxDim / 128)) : Number(opts.voxel);
  const grid = voxelise(decor.parts, keptBounds, voxel, opts.maxCells);

  // --- layers -> rectangles ----------------------------------------------
  const minRectCells = Math.max(1, Math.ceil(0.15 / grid.v));
  // A fallback bbox is only split into components when it is at least this big: below a square
  // metre there is nowhere for a player to walk into the air it is claiming, and the single box
  // is the better proxy. See FALLBACK_SPLIT_FILL.
  const splitMinCells = Math.ceil(1.0 / (grid.v * grid.v));
  const layers = layerise(grid, opts);

  let parts = [];
  for (const [n, layer] of layers.entries()) {
    const filled = layer.mask;
    const y0 = grid.origin.y + layer.iy0 * grid.v;
    const y1 = grid.origin.y + (layer.iy1 + 1) * grid.v;

    // Roundness is a property of the LAYER, not of a rectangle inside it. Tested
    // per-part instead, a drum never becomes a cylinder: the greedy cover has
    // already chopped its disc into rectangles by then, and the rounded corners
    // it leaves behind are 14% of the footprint with no collider over them --
    // coverage 0.86 on a sealed steel barrel.
    const bbox = maskBBox(filled, grid.nx, grid.nz);
    if (opts.cylinders && bbox && isRadial(grid, filled, bbox)) {
      const part = boxFromRect(grid, bbox, y0, y1, `layer${n}`);
      part.type = 'cylinder';
      const radius = Math.max(part.scale[0], part.scale[2]);
      part.scale = [radius, part.scale[1], radius];
      parts.push(part);
      continue;
    }

    const rects = coverWithRects(filled, grid.nx, grid.nz, opts.maxRectsPerLayer, minRectCells, splitMinCells);
    for (const [k, r] of rects.entries()) {
      parts.push(boxFromRect(grid, r, y0, y1, rects.length > 1 ? `layer${n}-${k}` : `layer${n}`));
    }
  }

  // --- budget, extents, cylinders, inflation ------------------------------
  parts = prune(parts, maxParts, notes);


  for (const p of parts) {
    for (const i of [0, 1, 2]) {
      if (p.scale[i] >= 0.025) continue;
      if (i === 1 && Math.abs(p.offset[1] - groundY) < 0.02 + p.scale[1]) {
        // Flat and on the ground: grow DOWNWARD, or the player walks above the road.
        const top = p.offset[1] + p.scale[1];
        p.scale[1] = 0.05;
        p.offset[1] = top - 0.05;
      } else {
        p.scale[i] = 0.025;
      }
    }
  }

  const check = selfCheck(grid, parts, decor.parts);
  const ledges = ledgeInventory(grid, parts);

  for (const p of parts) {
    delete p._cells;
    p.offset = p.offset.map((n) => +n.toFixed(4));
    p.scale = p.scale.map((n) => +n.toFixed(4));
  }

  return {
    record: { parts, selfCheck: check, ...ledges, notes },
    meta: {
      triangles,
      groundY: +groundY.toFixed(4),
      voxel: +grid.v.toFixed(4),
      filtered: decor.filtered,
      decorFilterReverted: decor.reverted,
      maxParts,
      bundleSha256,
      elapsedMs: Date.now() - started,
    },
  };
}

// ---------------------------------------------------------------------------

export function suggestMass(asset, parts) {
  const volume = parts.reduce((t, p) => t + 8 * p.scale[0] * p.scale[1] * p.scale[2], 0);
  const density = DENSITY[asset.category] ?? 700;
  return +(volume * density).toFixed(1);
}

/**
 * Measure a compound that already exists, without deriving a new one.
 *
 * Hand-tuning is a legitimate FINAL state, not a draft: someone looked at the
 * prop and moved a box because the derivation could not see what they saw. But a
 * hand edit clears the self-check -- correctly, since a moved box has not been
 * measured -- and the promotion gate then refuses it. Without this, the only way
 * to get the numbers back was to re-derive, which throws the hand edits away:
 * the gate would have been forcing you to undo the work it was complaining
 * about. This runs the same rays against the parts already in the file.
 */
export function measureOne(asset, doc, opts) {
  const started = Date.now();
  const bundle = opts.bundle;
  if (!bundle) throw new Error(`${asset.id}: no bundle resolved (opts.bundle)`);
  if (!existsSync(bundle)) throw new Error(`no bundle at ${toRepoRelative(bundle)}`);

  const { parts: rawParts, triangles } = loadParts(bundle, opts.maxTriangles);
  const bounds = new THREE.Box3();
  for (const p of rawParts) bounds.union(p.box);
  const decor = filterDecoration(rawParts, bounds, opts);
  const keptBounds = new THREE.Box3();
  for (const p of decor.parts) keptBounds.union(p.box);

  const size = keptBounds.getSize(new THREE.Vector3());
  const maxDim = Math.max(size.x, size.y, size.z);
  const voxel =
    opts.voxel === 'auto' ? Math.min(0.25, Math.max(0.02, maxDim / 128)) : Number(opts.voxel);
  const grid = voxelise(decor.parts, keptBounds, voxel, opts.maxCells);

  const parts = doc.parts.map((p) => ({ ...p }));
  return {
    record: { parts, selfCheck: selfCheck(grid, parts, decor.parts), ...ledgeInventory(grid, parts), notes: doc.notes ?? [] },
    meta: {
      triangles,
      groundY: doc.groundY ?? +keptBounds.min.y.toFixed(4),
      voxel: +grid.v.toFixed(4),
      filtered: decor.filtered,
      maxParts: opts.maxParts ?? colliderPartCeiling(asset),
      elapsedMs: Date.now() - started,
    },
  };
}
