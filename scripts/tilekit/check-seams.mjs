#!/usr/bin/env node
/**
 * Verify that every tile edge in the set mates with every other.
 *
 * Fit is the one hard requirement these tiles have. A level builder drops them on
 * an 8 m grid in any rotation, so a carriageway that stops 10 cm short on one
 * tile shows as a step in the kerb line on every join that tile is part of.
 *
 * The test is geometric, against the region polygons, NOT against the rendered
 * albedo. An early version thresholded the albedo's luma along each edge and
 * reported eighty crossings on a clean tile: asphalt grain and slab joints cross
 * any threshold you pick. Grain was never the contract -- two tiles have never
 * shared grain across a seam and were never meant to. Where the carriageway
 * stops IS the contract, and the polygon is where that is decided.
 *
 * Usage:
 *   node scripts/tilekit/check-seams.mjs [--id <one tile>]
 */
import { ok, fail, log, parseArgs } from '../lib/out.mjs';
import { TILES } from './regions.mjs';

/** Even-odd point-in-polygon. */
function inside(poly, x, z) {
  let hit = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const [xi, zi] = poly[i];
    const [xj, zj] = poly[j];
    if (zi > z !== zj > z && x < ((xj - xi) * (z - zi)) / (zj - zi) + xi) hit = !hit;
  }
  return hit;
}

/** Spans of carriageway along one edge, in metres from that edge's start. */
function spans(poly, sample, lengthM, steps = 4000) {
  const out = [];
  let start = null;
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * lengthM;
    const on = inside(poly, ...sample(t));
    if (on && start === null) start = t;
    if (!on && start !== null) { out.push([start, t]); start = null; }
  }
  if (start !== null) out.push([start, lengthM]);
  // Merge spans split by a vertex landing exactly on the sample line.
  const merged = [];
  for (const s of out) {
    const last = merged[merged.length - 1];
    if (last && s[0] - last[1] < 0.01) last[1] = s[1];
    else merged.push([...s]);
  }
  return merged.map(([a, b]) => [Number(a.toFixed(2)), Number(b.toFixed(2))]);
}

/** What a MATING edge must present, in metres from the edge's start. */
const ROAD_EDGE = [[1.25, 6.75]];
const ALLEY_EDGE = [[0.5, 3.5]];

/**
 * Edges that are deliberately something other than the standard profile.
 *
 * Both entries are contract, not tolerance, so they are named here rather than
 * waved through by a looser comparison -- an edge that is allowed to differ has
 * to say what it is instead.
 */
const EXCEPTIONS = {
  // The crossing band cuts the sidewalk to road level so a player can step
  // across it. Only the z edges mate; the x edges face buildings and are not
  // placed against another tile. A crosswalk sits in a run ALONG the road, never
  // side by side across it.
  'road-crosswalk-tile': {
    west: { spans: [[2.4, 5.6]], why: 'crossing band, non-mating edge (faces buildings)' },
    east: { spans: [[2.4, 5.6]], why: 'crossing band, non-mating edge (faces buildings)' },
  },
  // The kit's adapter. Its south edge carries an ALLEY profile, offset into the
  // eastern half-module: a soi is a gap between buildings, not a designed
  // junction, so the mouth is off-centre. 4.5..7.5 on this 8 m edge is exactly
  // 0.5..3.5 within the 4 m alley tile that mates against it.
  'soi-entrance-tile': {
    south: { spans: [[4.5, 7.5]], why: 'alley mouth on the eastern half-module (0.5..3.5 local)' },
  },
};

const eq = (got, want, tol = 0.02) =>
  got.length === want.length &&
  got.every((s, i) => Math.abs(s[0] - want[i][0]) <= tol && Math.abs(s[1] - want[i][1]) <= tol);

async function main() {
  const args = parseArgs();
  const ids = args.id ? [args.id] : Object.keys(TILES);

  const rows = [];
  let bad = 0;
  for (const id of ids) {
    const tile = TILES[id];
    if (!tile) return fail(`${id} is not a ground tile`);
    const poly = tile.region();
    const [wM, dM] = tile.footprint;
    const hx = wM / 2, hz = dM / 2;
    const eps = 0.004;

    const edges = {
      north: spans(poly, (t) => [t - hx, -hz + eps], wM),
      south: spans(poly, (t) => [t - hx, hz - eps], wM),
      west: spans(poly, (t) => [-hx + eps, t - hz], dM),
      east: spans(poly, (t) => [hx - eps, t - hz], dM),
    };

    const alley = id.startsWith('soi-alley');
    for (const [side, got] of Object.entries(edges)) {
      // A closed edge -- the far side of a dead end, the sidewalk run behind a T --
      // presents no carriageway at all. That is a correct answer, not a fault.
      const closed = got.length === 0;
      // The soi entrance is the kit's adapter and the only piece carrying two
      // profiles: three road edges and one alley mouth.
      const want = alley ? ALLEY_EDGE : ROAD_EDGE;
      const exception = EXCEPTIONS[id]?.[side];
      const good = closed || eq(got, want) || (exception && eq(got, exception.spans));
      if (!good) bad++;
      rows.push({ id, side, spans: got, closed, ok: good, why: exception?.why });
    }
  }

  for (const r of rows) {
    const verdict = r.ok ? (r.why ? 'except' : r.closed ? 'closed' : 'mates ') : 'WRONG ';
    const shown = r.spans.map(([a, b]) => `${a}..${b}`).join(', ') || '-';
    log(`${verdict} ${r.id.padEnd(30)} ${r.side.padEnd(6)} [${shown}]${r.why ? `  -- ${r.why}` : ''}`);
  }

  if (bad) return fail(`${bad} edge(s) do not present the kit profile`, { rows });
  ok({ tiles: ids.length, edges: rows.length, mating: rows.filter((r) => !r.closed).length });
}

main().catch((err) => fail(err));
