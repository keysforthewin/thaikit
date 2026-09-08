#!/usr/bin/env node
/**
 * Where is the level DARK? One JSON line on stdout, a readable map on stderr.
 *
 * `probe-lightmap.mjs` measures the atlas as a population of texels -- it says
 * how much light there is, never WHERE. That is the right instrument for
 * accepting a bake and the wrong one for judging coverage, because an atlas can
 * hold a perfectly healthy histogram while an entire courtyard sits at zero.
 * This tool bins light into WORLD space instead, on an XZ grid at ankle height,
 * and prints the cells that are dark and their coordinates.
 *
 * Two modes, one output format, so a fast estimate and the truth are directly
 * comparable:
 *
 *   --mode rig     Integrates the authored lamps out of `build/bake.json`
 *                  analytically: E = sum I*f*cos(theta)/d^2, with the spot cone
 *                  smoothstepped between its inner and outer angle. Milliseconds,
 *                  no bake, so it is what you run after every lighting edit.
 *                  Occlusion is a span-column heightfield built from the static
 *                  placements' own bounds (see `buildOccluders`), which is
 *                  coarse -- it knows a wall is in the way, not that it has a
 *                  doorway.
 *
 *   --mode atlas   Reads the baked lightmap back through the geometry it was
 *                  baked onto (`build/lightmap_<tier>/{out.glb,lightmap.png}`),
 *                  keeps the UP-facing triangles inside the walkable band, and
 *                  bins their texels by world position. This is the judge.
 *
 * Why both: the rig map ignores what Cycles adds (sky, bounce, emissive signage)
 * and Cycles ignores what the rig map honours (`distance`/attenuation radius has
 * no equivalent in Blender, so a lamp reaches FURTHER in the bake than in the
 * Unreal preview). Neither is a substitute for the other, and the Unreal
 * light-coverage viewmode is a third answer again -- it is the only one of the
 * three that is not what ships.
 *
 * Usage:
 *   node scripts/level/light-coverage.mjs --level bangkoksoi --mode rig
 *   node scripts/level/light-coverage.mjs --level bangkoksoi --mode atlas --quality high
 *   node scripts/level/light-coverage.mjs --level bangkoksoi --mode rig --compare before.json
 *   node scripts/level/light-coverage.mjs --level bangkoksoi --mode rig --lights live.json
 *
 * `--lights` is what makes rig mode a LOOP rather than a post-mortem. Without
 * it the lamps come from `build/bake.json`, which only changes after an export
 * and a convert -- so measuring an edit you just made in Unreal would mean
 * running the whole chain first. Dump the live rig out of the editor instead
 * (same records: type, position, direction, intensity, angle, penumbra,
 * distance, already multiplied by the level's `--light-scale` so the numbers
 * stay comparable to a bake.json baseline) and point this at it.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { NodeIO, Logger } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

import { levelDir } from '@thaikit/registry-core';

import { readAtlas } from './probe-lightmap.mjs';
import { assertQuality, withQuality } from './pipeline/quality.mjs';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';

const DEFAULT_CELL = 2;
const DEFAULT_THRESHOLD = 1.5;
const DEFAULT_BAND = [-1, 3];
const DEFAULT_SAMPLE_Y = 0.05;
/** A triangle is "walkable" when its normal is within ~45 degrees of straight up. */
const UP_DOT = 0.7;
/** Texel samples per triangle, capped so a 24 m ground tile does not dominate the run. */
const MAX_TEXEL_SAMPLES = 48;
// R2, the 2D low-discrepancy sequence (Roberts 2018): plane-filling without the
// clumping a random pair gives at these small sample counts.
const R2_A = 0.7548776662466927;
const R2_B = 0.5698402909980532;

const srgbToLinear = (c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4);
const r2 = (x) => Number(x.toFixed(2));
const r3 = (x) => Number(x.toFixed(3));

// --- grid --------------------------------------------------------------------

/**
 * A fixed XZ lattice. Both modes accumulate into the same shape so a rig map and
 * an atlas map of the same level line up cell for cell.
 */
function makeGrid(bounds, cell) {
  const [x0, z0, x1, z1] = bounds;
  const nx = Math.max(1, Math.ceil((x1 - x0) / cell));
  const nz = Math.max(1, Math.ceil((z1 - z0) / cell));
  return { x0, z0, x1: x0 + nx * cell, z1: z0 + nz * cell, cell, nx, nz, sum: new Float64Array(nx * nz), weight: new Float64Array(nx * nz) };
}

const cellIndex = (grid, x, z) => {
  const i = Math.floor((x - grid.x0) / grid.cell);
  const j = Math.floor((z - grid.z0) / grid.cell);
  if (i < 0 || j < 0 || i >= grid.nx || j >= grid.nz) return -1;
  return j * grid.nx + i;
};

const cellCentre = (grid, k) => [
  grid.x0 + (k % grid.nx + 0.5) * grid.cell,
  grid.z0 + (Math.floor(k / grid.nx) + 0.5) * grid.cell,
];

const addSample = (grid, x, z, value, weight = 1) => {
  const k = cellIndex(grid, x, z);
  if (k < 0) return false;
  grid.sum[k] += value * weight;
  grid.weight[k] += weight;
  return true;
};

/** Rectangles a coverage target deliberately excludes -- the alleys that are meant to be dark. */
const inAnyRect = (rects, x, z) => rects.some((r) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1);

// --- reporting ---------------------------------------------------------------

const quantile = (sorted, q) => (sorted.length ? sorted[Math.min(sorted.length - 1, Math.max(0, Math.round(q * (sorted.length - 1))))] : 0);

function summarise(grid, { threshold, exclude = [], darkLimit = 40 }) {
  const values = [];
  const dark = [];
  let excluded = 0;
  let empty = 0;
  for (let k = 0; k < grid.sum.length; k++) {
    if (grid.weight[k] <= 0) { empty++; continue; }
    const [x, z] = cellCentre(grid, k);
    if (inAnyRect(exclude, x, z)) { excluded++; continue; }
    const v = grid.sum[k] / grid.weight[k];
    values.push(v);
    if (v < threshold) dark.push({ x: r2(x), z: r2(z), value: r3(v) });
  }
  const sorted = Float64Array.from(values).sort();
  const p50 = quantile(sorted, 0.5);
  const p10 = quantile(sorted, 0.1);
  const max = sorted.length ? sorted[sorted.length - 1] : 0;
  dark.sort((a, b) => a.value - b.value);
  return {
    cells: values.length,
    emptyCells: empty,
    excludedCells: excluded,
    threshold,
    p10: r3(p10),
    p25: r3(quantile(sorted, 0.25)),
    p50: r3(p50),
    p75: r3(quantile(sorted, 0.75)),
    p90: r3(quantile(sorted, 0.9)),
    max: r3(max),
    // The two numbers the plan gates on: how deep the floor sits under the
    // median, and how far the peak stands over it.
    uniformity: r3(p50 > 0 ? p10 / p50 : 0),
    peakRatio: r3(p50 > 0 ? max / p50 : 0),
    under: dark.length,
    underFraction: r3(values.length ? dark.length / values.length : 0),
    dark: dark.slice(0, darkLimit),
  };
}

const RAMP = ' .:-=+*#%@';

/**
 * A log-scaled ASCII map. It is deliberately coarse: the point is to see the
 * SHAPE of a void, which a table of coordinates does not give you.
 */
function renderMap(grid, { lo, hi, exclude = [], maxCols = 110 }) {
  const step = Math.max(1, Math.ceil(grid.nx / maxCols));
  const span = Math.log10(hi / lo);
  const lines = [];
  const header = [];
  for (let i = 0; i < grid.nx; i += step) {
    // The tens digit of |x|, so a wide map still carries a readable ruler.
    const x = Math.abs(Math.round(grid.x0 + (i + 0.5) * grid.cell));
    header.push(String(Math.floor(x / 10) % 10));
  }
  lines.push('      ' + header.join(''));
  for (let j = grid.nz - 1; j >= 0; j -= step) {
    let row = '';
    for (let i = 0; i < grid.nx; i += step) {
      // Each printed character is the MAX over the block it stands for, so a
      // downsampled map never hides a lit cell -- only a dark one.
      let best = -1;
      let any = false;
      for (let jj = j; jj > j - step && jj >= 0; jj--) {
        for (let ii = i; ii < i + step && ii < grid.nx; ii++) {
          const k = jj * grid.nx + ii;
          if (grid.weight[k] <= 0) continue;
          const [cx, cz] = cellCentre(grid, k);
          if (inAnyRect(exclude, cx, cz)) continue;
          any = true;
          best = Math.max(best, grid.sum[k] / grid.weight[k]);
        }
      }
      if (!any) { row += ' '; continue; }
      if (best < lo) { row += '.'; continue; }
      const t = Math.log10(best / lo) / span;
      row += RAMP[Math.max(1, Math.min(RAMP.length - 1, Math.floor(t * (RAMP.length - 1)) + 1))];
    }
    lines.push(String(Math.round(grid.z0 + (j + 0.5) * grid.cell)).padStart(5) + ' ' + row);
  }
  return lines.join('\n');
}

// --- rig mode ----------------------------------------------------------------

/**
 * What actually casts a coverage shadow.
 *
 * Two mistakes were made here and both produced a map that was confidently
 * wrong. Rasterising every static placement's AABB blacked out the level --
 * p50 fell to zero and 73% of cells read dark -- because the set is dominated
 * by 176 `border_trees` and 51 `border_block` whose bounding boxes are mostly
 * air. And rasterising at the REPORT grid's resolution let a 0.3 m pole fill a
 * 5 m cell to its full height.
 *
 * So: occluders are solid volumes only (a footprint of at least `minArea` and
 * at least `minHeight` tall), foliage and soft canopies are skipped by name,
 * and they go into their own metre-scale lattice independent of the reporting
 * grid. The bias is deliberately toward letting light through -- a coverage
 * tool that invents darkness is worse than one that misses some.
 */
const SOFT = /^veg_|tree|palm|banana|ficus|umbrella|tarp|clutter|awning|foliage/i;

/**
 * Vertical SPANS per column, not a heightfield: a heightfield would say the
 * expressway deck occupies 0..12.9 m and black out the one stretch of this
 * level that is lit from directly overhead.
 */
function buildOccluders(placements, bounds, { cell = 1, minArea = 6, minHeight = 2, overheadY = 2.5 } = {}) {
  const [x0, z0, x1, z1] = bounds;
  const nx = Math.max(1, Math.ceil((x1 - x0) / cell));
  const nz = Math.max(1, Math.ceil((z1 - z0) / cell));
  const columns = new Map();
  let used = 0;
  for (const p of placements) {
    if (!p.static || !p.bounds) continue;
    if (p.billboard && p.billboard !== 'none') continue;
    if (p.ref === '@thaikit/ground') continue;
    const name = p.source?.actor ?? p.ref ?? '';
    if (SOFT.test(name)) continue;
    const { min, max } = p.bounds;
    const w = max[0] - min[0];
    const d = max[2] - min[2];
    const h = max[1] - min[1];
    if (w * d < minArea) continue;
    // The height gate is there to reject kerbs, road tiles and low clutter, so
    // it must not reject a SLAB: the expressway deck is 1.1 m thick and is the
    // most important occluder in this level. A thin volume that floats above
    // head height is a deck or a canopy; the same volume on the ground is a
    // kerb.
    if (h < minHeight && min[1] < overheadY) continue;
    if (max[1] <= 0.2) continue;
    used++;
    const i0 = Math.max(0, Math.floor((min[0] - x0) / cell));
    const i1 = Math.min(nx - 1, Math.floor((max[0] - x0) / cell));
    const j0 = Math.max(0, Math.floor((min[2] - z0) / cell));
    const j1 = Math.min(nz - 1, Math.floor((max[2] - z0) / cell));
    for (let j = j0; j <= j1; j++) {
      for (let i = i0; i <= i1; i++) {
        const k = j * nx + i;
        let spans = columns.get(k);
        if (!spans) columns.set(k, (spans = []));
        spans.push(min[1], max[1]);
      }
    }
  }
  return { columns, used, x0, z0, cell, nx, nz };
}

/**
 * March the light-to-point segment across the occluder lattice and ask, at each
 * cell it crosses, whether the segment's height falls inside an occupied span.
 */
function occluded(occ, lx, ly, lz, px, py, pz) {
  const dx = px - lx;
  const dz = pz - lz;
  const dy = py - ly;
  const len = Math.hypot(dx, dz);
  if (len < 1e-6) return false;
  const steps = Math.ceil(len / (occ.cell * 0.5));
  // Skip the endpoints: the lamp sits inside its own housing's bounds and the
  // sample point sits on the surface it is measuring.
  for (let s = 1; s < steps; s++) {
    const t = s / steps;
    const i = Math.floor((lx + dx * t - occ.x0) / occ.cell);
    const j = Math.floor((lz + dz * t - occ.z0) / occ.cell);
    if (i < 0 || j < 0 || i >= occ.nx || j >= occ.nz) continue;
    const spans = occ.columns.get(j * occ.nx + i);
    if (!spans) continue;
    const y = ly + dy * t;
    for (let m = 0; m < spans.length; m += 2) {
      if (y > spans[m] && y < spans[m + 1]) return true;
    }
  }
  return false;
}

/**
 * Cells a player cannot stand in: the inside of a building, a tree, a canopy,
 * a parked truck.
 *
 * Without this the rig map counts building interiors as dark floor and the
 * "under threshold" count is inflated by ground nobody will ever walk on --
 * and a set-cover proposer fed that map spends lamps trying to light the inside
 * of the mosque. Atlas mode has no such problem: it only ever sees surfaces
 * that exist, so marking these EMPTY (not dark) is also what makes the two
 * modes' numbers comparable.
 */
function markIndoor(placements, grid, margin = 0.5) {
  let n = 0;
  for (const p of placements) {
    if (!p.static || !p.bounds) continue;
    if (p.billboard && p.billboard !== 'none') continue;
    if (p.ref === '@thaikit/ground') continue;
    const { min, max } = p.bounds;
    // Anything you can step over is floor, not an obstruction; anything that
    // starts above head height is a canopy you can walk under.
    if (max[1] - min[1] < 0.5 || max[1] < 0.5 || min[1] > 2.5) continue;
    if ((max[0] - min[0]) * (max[2] - min[2]) < 4) continue;
    for (let j = 0; j < grid.nz; j++) {
      for (let i = 0; i < grid.nx; i++) {
        const x = grid.x0 + (i + 0.5) * grid.cell;
        const z = grid.z0 + (j + 0.5) * grid.cell;
        if (x < min[0] + margin || x > max[0] - margin || z < min[2] + margin || z > max[2] - margin) continue;
        const k = j * grid.nx + i;
        if (grid.weight[k] !== -1) n++;
        grid.weight[k] = -1;
      }
    }
  }
  return n;
}

function rigMode(bake, grid, opts) {
  const lamps = bake.lights.filter((l) => l.type === 'point' || l.type === 'spot');
  const occ = opts.occlusion
    ? buildOccluders(bake.placements, [grid.x0, grid.z0, grid.x1, grid.z1], opts.occluder)
    : { columns: new Map(), used: 0 };
  const y = opts.sampleY;
  const indoor = opts.indoor === false ? 0 : markIndoor(bake.placements, grid);

  for (let k = 0; k < grid.sum.length; k++) {
    if (grid.weight[k] === -1) { grid.weight[k] = 0; continue; }
    const [px, pz] = cellCentre(grid, k);
    let E = 0;
    for (const l of lamps) {
      const [lx, ly, lz] = l.position;
      const vx = px - lx;
      const vy = y - ly;
      const vz = pz - lz;
      const d2 = vx * vx + vy * vy + vz * vz;
      const d = Math.sqrt(d2);
      if (d < 0.2) continue;
      // `distance` is three's hard range cutoff. Cycles has no equivalent and
      // ignores it, so honouring it here makes the rig map the CONSERVATIVE of
      // the two -- which is the direction an early-warning tool should err in.
      if (l.distance && d > l.distance) continue;
      const cosInc = -vy / d;
      if (cosInc <= 0) continue; // lit from below: an uplight puts nothing on the floor
      let f = 1;
      if (l.type === 'spot') {
        const dir = l.direction || [0, -1, 0];
        const cosA = Math.min(1, Math.max(-1, (vx * dir[0] + vy * dir[1] + vz * dir[2]) / d));
        const ang = Math.acos(cosA);
        const outer = l.angle ?? Math.PI / 6;
        // three's penumbra is the FRACTION of the cone that is feathered, and
        // it is exactly what the bake receives as Blender's `spot_blend`.
        const inner = outer * (1 - (l.penumbra ?? 0));
        if (ang >= outer) continue;
        if (ang > inner && outer > inner) {
          const t = (outer - ang) / (outer - inner);
          f = t * t * (3 - 2 * t);
        }
      }
      const contribution = l.intensity * f * cosInc / d2;
      if (contribution < 1e-3) continue; // not worth a ray
      if (opts.occlusion && occluded(occ, lx, ly, lz, px, y, pz)) continue;
      E += contribution;
    }
    grid.sum[k] = E;
    grid.weight[k] = 1;
  }
  return { lamps: lamps.length, occluders: occ.used, indoorCells: indoor, sampleY: y, occlusion: opts.occlusion };
}

// --- atlas mode --------------------------------------------------------------

async function atlasMode(dir, grid, opts) {
  const io = new NodeIO().setLogger(new Logger(Logger.Verbosity.SILENT)).registerExtensions(ALL_EXTENSIONS);
  const doc = await io.read(path.join(dir, 'out.glb'));
  const atlas = await readAtlas(path.join(dir, 'lightmap.png'));
  const { px: tex, width: W, height: H } = atlas;
  const [bandLo, bandHi] = opts.band;

  let triangles = 0;
  let kept = 0;
  let samples = 0;
  let zeroSamples = 0;
  let alphaSum = 0;
  let areaSum = 0;
  for (const node of doc.getRoot().listNodes()) {
    const mesh = node.getMesh();
    if (!mesh) continue;
    const m = node.getWorldMatrix();
    // A baked out.glb carries translations and uniform scales only, so one
    // scale factor converts every local area to world area.
    const scaleSq = m[0] * m[0] + m[1] * m[1] + m[2] * m[2];
    for (const prim of mesh.listPrimitives()) {
      const uv = prim.getAttribute('TEXCOORD_1');
      const pos = prim.getAttribute('POSITION');
      const nrm = prim.getAttribute('NORMAL');
      if (!uv || !pos || !nrm) continue;
      const idx = prim.getIndices();
      const count = idx ? idx.getCount() : pos.getCount();
      const P = pos.getArray();
      const N = nrm.getArray();
      const U = uv.getArray();
      const I = idx ? idx.getArray() : null;
      for (let t = 0; t + 2 < count; t += 3) {
        triangles++;
        const a = I ? I[t] : t;
        const b = I ? I[t + 1] : t + 1;
        const c = I ? I[t + 2] : t + 2;
        // Average the three normals before testing: a per-vertex transform of
        // three normals is three times the work for the same answer, and the
        // node matrix carries no rotation to correct for.
        const ny = (N[a * 3 + 1] + N[b * 3 + 1] + N[c * 3 + 1]) / 3;
        if (ny < UP_DOT) continue;

        const ax = P[a * 3], ay = P[a * 3 + 1], az = P[a * 3 + 2];
        const bx = P[b * 3], by = P[b * 3 + 1], bz = P[b * 3 + 2];
        const cx3 = P[c * 3], cy3 = P[c * 3 + 1], cz3 = P[c * 3 + 2];

        // World area, so a 24 m ground tile does not weigh the same as a kerb
        // stone. Uniform scales are all a bake produces, so the matrix's scale
        // factor is enough.
        const e1x = bx - ax, e1y = by - ay, e1z = bz - az;
        const e2x = cx3 - ax, e2y = cy3 - ay, e2z = cz3 - az;
        const nx3 = e1y * e2z - e1z * e2y, ny3 = e1z * e2x - e1x * e2z, nz3 = e1x * e2y - e1y * e2x;
        const area = 0.5 * Math.hypot(nx3, ny3, nz3) * scaleSq;
        if (!(area > 0)) continue;

        // One texel at the UV centroid is NOISE, not a measurement: at 7
        // texels/metre a 24 m ground tile's triangle covers thousands of
        // texels, and picking the middle one reads a single shadow, specular
        // hit or gutter pixel as the brightness of the whole surface. Worse,
        // binning that one reading at the triangle's CENTROID drops a tile
        // spanning twenty grid cells into one and leaves the rest empty --
        // which is how the first version reported 287 empty cells and a map
        // that looked like static.
        //
        // So: sample over the triangle's own UV footprint, and bin every
        // sample at its OWN world position.
        const u0 = U[a * 2], v0 = U[a * 2 + 1];
        const u1 = U[b * 2], v1 = U[b * 2 + 1];
        const u2 = U[c * 2], v2 = U[c * 2 + 1];
        const uvArea = Math.abs((u1 - u0) * (v2 - v0) - (u2 - u0) * (v1 - v0)) * 0.5 * W * H;
        // Enough samples to resolve the texels AND the grid cells the triangle
        // straddles, whichever asks for more.
        const n = Math.max(1, Math.min(MAX_TEXEL_SAMPLES, Math.ceil(Math.max(uvArea / 2, area / (grid.cell * grid.cell) * 4))));
        const w = area / n;
        for (let q = 0; q < n; q++) {
          // A stratified barycentric point from the R2 low-discrepancy
          // sequence, folded into the triangle so the samples spread rather
          // than clump the way a random pair does at these counts.
          let bu = ((q + 0.5) * R2_A) % 1;
          let bv = ((q + 0.5) * R2_B) % 1;
          if (bu + bv > 1) { bu = 1 - bu; bv = 1 - bv; }
          const bw = 1 - bu - bv;

          const ly2 = ay * bw + by * bu + cy3 * bv;
          const lx2 = ax * bw + bx * bu + cx3 * bv;
          const lz2 = az * bw + bz * bu + cz3 * bv;
          const wy = m[1] * lx2 + m[5] * ly2 + m[9] * lz2 + m[13];
          if (wy < bandLo || wy > bandHi) continue;
          const wx = m[0] * lx2 + m[4] * ly2 + m[8] * lz2 + m[12];
          const wz = m[2] * lx2 + m[6] * ly2 + m[10] * lz2 + m[14];

          const su = u0 * bw + u1 * bu + u2 * bv;
          const sv = v0 * bw + v1 * bu + v2 * bv;
          // NO v flip. glTF's UV origin is top-left with v increasing
          // downward, which is already the image's row order -- and
          // `bake_lightmap.py` writes the atlas `u16[::-1]` precisely so that
          // the exporter's own `v' = 1 - v` lands the two in agreement.
          //
          // Settled by measurement, not convention: `--dump-grid` for both
          // orders, correlated against the rig map, which is independent
          // evidence because it comes from the authored lamps and never
          // touches the atlas. On bangkoksoi's high bake, log-space Pearson r
          // against the rig map is 0.727 unflipped and -0.037 flipped -- the
          // flipped order is uncorrelated noise. Re-run that check on any
          // level whose coverage map looks subtly wrong.
          const ti = Math.min(W - 1, Math.max(0, Math.floor(su * W)));
          const tj = Math.min(H - 1, Math.max(0, Math.floor(sv * H)));
          const o = (tj * W + ti) * 4;
          // The atlas is sRGB-encoded (Blender's `Standard` view transform)
          // with the bake's peak `range` divided out; multiply it back so the
          // numbers are relative irradiance and comparable to the rig map.
          const lum = 0.2126 * srgbToLinear(tex[o]) + 0.7152 * srgbToLinear(tex[o + 1]) + 0.0722 * srgbToLinear(tex[o + 2]);
          if (!addSample(grid, wx, wz, lum * opts.range, w)) continue;
          // Only count what actually landed IN the reporting grid. Measured
          // over every sample instead, this rate is dominated by the 900 m
          // `far_ground` plane and the outer lots -- genuinely black, nowhere
          // near the play block, and enough to hide the signal.
          //
          // A texel with no colour at all is either a truly black surface or a
          // sample that missed its island and read the gutter. The two are
          // indistinguishable one at a time, so count them: a HIGH rate means
          // the UV mapping is wrong, not that the level is dark. On this
          // level it runs high either way -- the walkable set includes a lot
          // of outer ground that really does bake to nothing -- so it is
          // reported rather than gated on, and the v flip below was settled by
          // correlation against the rig map instead.
          if (tex[o] === 0 && tex[o + 1] === 0 && tex[o + 2] === 0) zeroSamples++;
          alphaSum += tex[o + 3] * w;
          areaSum += w;
          samples++;
        }
        kept++;
      }
    }
  }
  return {
    triangles,
    walkableTriangles: kept,
    samples,
    zeroSampleRate: r3(samples ? zeroSamples / samples : 0),
    meanMoonVisibility: r3(areaSum ? alphaSum / areaSum : 0),
    walkableAreaM2: Math.round(areaSum),
    atlas: `${W}x${H}`,
    range: opts.range,
    band: opts.band,
  };
}

// --- main --------------------------------------------------------------------

function parseRects(value) {
  if (!value) return [];
  const list = Array.isArray(value) ? value : [value];
  return list.flatMap((entry) => String(entry).split(';').filter(Boolean).map((spec) => {
    const [name, box] = spec.includes('=') ? spec.split('=') : [spec, spec];
    const [x0, z0, x1, z1] = box.split(',').map(Number);
    if ([x0, z0, x1, z1].some((n) => !Number.isFinite(n))) throw new Error(`--exclude wants name=x0,z0,x1,z1, got ${JSON.stringify(spec)}`);
    return { name, x0: Math.min(x0, x1), z0: Math.min(z0, z1), x1: Math.max(x0, x1), z1: Math.max(z0, z1) };
  }));
}

/** The play block: everything a spawn can reach, padded, rather than the imposter ring. */
function defaultBounds(bake, pad = 60) {
  const xs = [];
  const zs = [];
  for (const s of bake.spawns ?? []) { xs.push(s.position[0]); zs.push(s.position[2]); }
  for (const l of bake.lights ?? []) {
    if (l.type === 'directional') continue;
    xs.push(l.position[0]); zs.push(l.position[2]);
  }
  if (!xs.length) throw new Error('no spawns or lamps to derive bounds from; pass --bounds x0,z0,x1,z1');
  return [Math.min(...xs) - pad, Math.min(...zs) - pad, Math.max(...xs) + pad, Math.max(...zs) + pad];
}

/**
 * A live rig, either as bake.json's own light records or as the compact CSV the
 * Unreal dump emits:
 *
 *   kind,x,y,z,dx,dy,dz,intensity,angle,penumbra,distance
 *
 * -- glTF axes, radians, and intensity already through the level's
 * `--light-scale`, so a live reading and a bake.json baseline are the same
 * units. CSV because this crosses an MCP tool boundary one line at a time and
 * the records are 90% punctuation.
 */
function readLights(file) {
  const text = fs.readFileSync(file, 'utf8').trim();
  if (text.startsWith('{') || text.startsWith('[')) {
    const live = JSON.parse(text);
    return Array.isArray(live) ? live : live.lights;
  }
  return text.split('\n').filter((l) => l.trim() && !l.startsWith('#')).map((line, i) => {
    const [kind, x, y, z, dx, dy, dz, intensity, angle, penumbra, distance] = line.split(',');
    const spot = kind.trim().toLowerCase().startsWith('s');
    return {
      id: `live-${i}`,
      type: spot ? 'spot' : 'point',
      position: [Number(x), Number(y), Number(z)],
      direction: spot ? [Number(dx), Number(dy), Number(dz)] : null,
      intensity: Number(intensity),
      angle: spot ? Number(angle) : null,
      penumbra: spot ? Number(penumbra) : null,
      distance: Number(distance) || null,
    };
  });
}

async function main() {
  const args = parseArgs();
  const id = args.level ? String(args.level) : null;
  if (!id) return fail('need --level <id>');
  const mode = String(args.mode ?? 'rig');
  if (mode !== 'rig' && mode !== 'atlas') return fail(`--mode must be rig or atlas, got ${JSON.stringify(mode)}`);

  const dir = path.join(levelDir(id), 'build');
  const bake = JSON.parse(fs.readFileSync(path.join(dir, 'bake.json'), 'utf8'));
  // The occluders, spawns and bounds still come from the last convert; only the
  // lamps are replaced, because geometry does not move during a lighting pass.
  if (args.lights) {
    bake.lights = readLights(String(args.lights));
  }

  const cell = Number(args.cell ?? DEFAULT_CELL);
  const threshold = Number(args.threshold ?? DEFAULT_THRESHOLD);
  const exclude = parseRects(args.exclude);
  const bounds = args.bounds
    ? String(args.bounds).split(',').map(Number)
    : defaultBounds(bake, Number(args.pad ?? 60));
  if (bounds.length !== 4 || bounds.some((n) => !Number.isFinite(n))) return fail('--bounds wants x0,z0,x1,z1');

  const grid = makeGrid(bounds, cell);
  let detail;
  if (mode === 'rig') {
    detail = rigMode(bake, grid, {
      occlusion: args.occlusion !== 'false' && args['no-occlusion'] !== true,
      sampleY: Number(args['sample-y'] ?? DEFAULT_SAMPLE_Y),
      occluder: {
        cell: Number(args['occluder-cell'] ?? 1),
        minArea: Number(args['occluder-min-area'] ?? 6),
        minHeight: Number(args['occluder-min-height'] ?? 2),
        overheadY: Number(args['occluder-overhead-y'] ?? 2.5),
      },
      indoor: args.indoor !== 'false',
    });
  } else {
    const quality = assertQuality(args.quality ?? null);
    const lmDir = path.join(dir, withQuality('lightmap', quality));
    const meta = JSON.parse(fs.readFileSync(path.join(lmDir, 'lightmap.json'), 'utf8'));
    detail = await atlasMode(lmDir, grid, {
      band: args.band ? String(args.band).split(',').map(Number) : DEFAULT_BAND,
      // The atlas is LDR with the bake's peak divided out; without `range` the
      // numbers are a fraction of full scale rather than relative irradiance.
      range: Number(args.range ?? meta.range ?? 1),
    });
    detail.lightmap = lmDir;
  }

  if (args['dump-grid']) {
    // Per-cell values, so two runs can be correlated against each other. This
    // is how the atlas sampler's v order was settled against the rig map.
    const cells = [];
    for (let k = 0; k < grid.sum.length; k++) {
      const [x, z] = cellCentre(grid, k);
      cells.push([x, z, grid.weight[k] > 0 ? grid.sum[k] / grid.weight[k] : null]);
    }
    fs.writeFileSync(String(args['dump-grid']), JSON.stringify({ mode, nx: grid.nx, nz: grid.nz, cells }));
  }

  const stats = summarise(grid, { threshold, exclude, darkLimit: Number(args['dark-limit'] ?? 40) });
  const report = {
    level: id,
    mode,
    grid: { x0: grid.x0, z0: grid.z0, x1: grid.x1, z1: grid.z1, cell: grid.cell, nx: grid.nx, nz: grid.nz },
    exclude,
    ...detail,
    ...stats,
  };

  const lo = mode === 'rig' ? 0.05 : Math.max(1e-4, stats.p10 || 1e-4);
  const hi = Math.max(lo * 10, stats.max || 1);
  log(`${id} ${mode}${detail.lightmap ? ` (${path.basename(detail.lightmap)})` : ''}`);
  log(renderMap(grid, { lo, hi, exclude }));
  log(`  ramp "${RAMP}" = ${r3(lo)}..${r3(hi)} log; blank = no surface`);
  log(`  cells ${stats.cells} (${stats.emptyCells} empty, ${stats.excludedCells} excluded)`);
  log(`  p10 ${stats.p10}  p25 ${stats.p25}  p50 ${stats.p50}  p75 ${stats.p75}  p90 ${stats.p90}  max ${stats.max}`);
  log(`  uniformity p10/p50 ${stats.uniformity}   peak max/p50 ${stats.peakRatio}`);
  log(`  under ${threshold}: ${stats.under} cells (${r3(stats.underFraction * 100)}%)`);
  for (const d of stats.dark.slice(0, 12)) log(`    ${String(d.value).padStart(8)}  at ${d.x}, ${d.z}`);

  if (args.compare) {
    const before = JSON.parse(fs.readFileSync(String(args.compare), 'utf8'));
    report.compare = {
      file: String(args.compare),
      p10: [before.p10, stats.p10],
      p50: [before.p50, stats.p50],
      max: [before.max, stats.max],
      uniformity: [before.uniformity, stats.uniformity],
      under: [before.under, stats.under],
    };
    log(`  vs ${report.compare.file}`);
    for (const [k, [a, b]] of Object.entries(report.compare)) {
      if (k === 'file') continue;
      log(`    ${k.padEnd(11)} ${a} -> ${b}`);
    }
  }

  ok(report);
}

export { makeGrid, readLights, cellIndex, cellCentre, summarise, buildOccluders, occluded, rigMode, parseRects, defaultBounds };

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch((err) => fail(err));
}
