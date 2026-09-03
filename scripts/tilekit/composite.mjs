/**
 * Composite a tile's rigid geometry onto a seamless substrate, in METRES.
 *
 * Six seeds of the concrete apron and one of the lane-marked asphalt established
 * what scripts/tilekit/substrates.mjs already records: a diffusion model cannot
 * be made to put a joint or a lane line in exactly the right place, and a rigid
 * grid that misses the frame by 10 cm breaks at every tile boundary. So the
 * generator supplies the SURFACE, which it wraps well, and the geometry is drawn
 * here at known coordinates -- which makes the pitch divide 8 m and the lines
 * wrap exactly, by construction rather than by luck.
 *
 * Everything is drawn with wrap-around: a stroke crossing an edge is drawn again
 * shifted by the full tile so its other half lands on the opposite edge.
 */
import sharp from 'sharp';
import fs from 'node:fs/promises';

const PX = 1024;
const METRES = 8;
const m2px = (m) => (m / METRES) * PX;

/** A vertical line at x metres, drawn wrapped. `dash` is [on, off] in metres. */
function vline({ x, width, colour, opacity = 1, dash = null, phase = 0 }) {
  const w = m2px(width);
  const cx = m2px(x);
  const out = [];
  // Drawn at cx and again a tile away in both directions, so a stroke straddling
  // an edge appears on both sides.
  for (const off of [-PX, 0, PX]) {
    const left = cx - w / 2 + off;
    if (dash) {
      const [on, gap] = dash.map(m2px);
      for (let y = m2px(phase) - (on + gap); y < PX + on + gap; y += on + gap) {
        out.push(`<rect x="${left}" y="${y}" width="${w}" height="${on}" fill="${colour}" opacity="${opacity}"/>`);
      }
    } else {
      out.push(`<rect x="${left}" y="0" width="${w}" height="${PX}" fill="${colour}" opacity="${opacity}"/>`);
    }
  }
  return out;
}

/** A horizontal line at z metres, drawn wrapped. */
function hline({ z, width, colour, opacity = 1 }) {
  const w = m2px(width);
  const cz = m2px(z);
  return [-PX, 0, PX].map(
    (off) => `<rect x="0" y="${cz - w / 2 + off}" width="${PX}" height="${w}" fill="${colour}" opacity="${opacity}"/>`,
  );
}

const RECIPES = {
  // Saw-cut expansion joints on a 2 m grid. A joint sits AT 0 m, which is the
  // frame edge, so the grid continues into the next tile with no half bay --
  // the failure six generated seeds all had.
  'poured-concrete-apron-tile': () => {
    const parts = [];
    for (let i = 0; i < 4; i++) {
      // A saw cut is a groove: a dark core with a softer shoulder either side.
      parts.push(...vline({ x: i * 2, width: 0.05, colour: '#3b3b3a', opacity: 0.55 }));
      parts.push(...vline({ x: i * 2, width: 0.11, colour: '#4a4a48', opacity: 0.22 }));
      parts.push(...hline({ z: i * 2, width: 0.05, colour: '#3b3b3a', opacity: 0.55 }));
      parts.push(...hline({ z: i * 2, width: 0.11, colour: '#4a4a48', opacity: 0.22 }));
    }
    return parts;
  },
  // Exactly three lines: a dashed centre and two solid edge lines 0.6 m in,
  // giving the 6.8 m two-lane carriageway the asset declares. The 2 m dash cycle
  // divides 8 m four times, so a run shows one unbroken dashed line with even
  // gaps -- the thing the asset notes say to check first.
  'asphalt-road-tile-lane-marked': () => [
    ...vline({ x: 0.6, width: 0.12, colour: '#d8d5cc', opacity: 0.82 }),
    ...vline({ x: 7.4, width: 0.12, colour: '#d8d5cc', opacity: 0.82 }),
    ...vline({ x: 4.0, width: 0.12, colour: '#d8d5cc', opacity: 0.82, dash: [1, 1], phase: 0.5 }),
  ],
};


/* ------------------------------------------------------------------------- *
 * The interlocking ROAD TILE family (2026-09-03). Every tile shares one port
 * profile -- edge lines at 0.6 and 7.4, a dashed centre at 4.0 with 1 m dashes
 * whose tile boundary falls mid-gap -- and these helpers draw it in metres.
 * Coordinates are tile-local: x 0..8 left to right, z 0..8 top to bottom.
 * ------------------------------------------------------------------------- */
const W = 0.12;             // every line in the family
const PAINT = '#d8d5cc';    // the lane-marked tile's chalky white
const OP = 0.82;
const YELLOW = '#d4b23c';   // the one yellow marking: the Bangkok box junction
const U = Math.PI / 3;      // dash unit on every quarter-turn arc: a quarter turn of radius R is 6U*R/4 = 1.5*R units, whole for R = 4, 12, 20

/** Axis-aligned filled rectangle in metres, drawn wrapped on both axes. */
function rect({ x0, z0, x1, z1, colour = PAINT, opacity = OP }) {
  const out = [];
  for (const ox of [-PX, 0, PX]) for (const oz of [-PX, 0, PX]) {
    out.push(`<rect x="${m2px(x0) + ox}" y="${m2px(z0) + oz}" width="${m2px(x1 - x0)}" height="${m2px(z1 - z0)}" fill="${colour}" opacity="${opacity}"/>`);
  }
  return out;
}
/** A vertical line of the family width between two z values. */
const vseg = (x, z0, z1, o = {}) => rect({ x0: x - W / 2, z0, x1: x + W / 2, z1, ...o });
/** A horizontal line of the family width between two x values. */
const hseg = (z, x0, x1, o = {}) => rect({ x0, z0: z - W / 2, x1, z1: z + W / 2, ...o });
/** The straight's four centre dashes, optionally a subset by index. */
const dashes = (x, keep = [0, 1, 2, 3]) => keep.flatMap((i) => vseg(x, 0.5 + 2 * i, 1.5 + 2 * i));
/** Both edge lines of a N-S road over a z range. */
const edges = (z0 = 0, z1 = 8) => [...vseg(0.6, z0, z1), ...vseg(7.4, z0, z1)];

/** A stroked polyline in metres, drawn wrapped. */
function poly(points, { width = W, colour = PAINT, opacity = OP, dash = null, wrap = true } = {}) {
  const d = points.map(([x, z], i) => `${i ? 'L' : 'M'}${m2px(x).toFixed(2)} ${m2px(z).toFixed(2)}`).join(' ');
  const da = dash ? ` stroke-dasharray="${m2px(dash.on)} ${m2px(dash.gap)}" stroke-dashoffset="${m2px(dash.phase)}"` : '';
  const offs = wrap ? [-PX, 0, PX] : [0];
  const out = [];
  for (const ox of offs) for (const oz of offs) {
    out.push(`<path d="${d}" transform="translate(${ox} ${oz})" fill="none" stroke="${colour}" stroke-width="${m2px(width)}" stroke-linecap="butt" opacity="${opacity}"${da}/>`);
  }
  return out;
}
/** A filled polygon in metres, drawn wrapped. */
function polygon(points, { colour = PAINT, opacity = OP } = {}) {
  const pts = points.map(([x, z]) => `${m2px(x).toFixed(2)},${m2px(z).toFixed(2)}`).join(' ');
  const out = [];
  for (const ox of [-PX, 0, PX]) for (const oz of [-PX, 0, PX]) {
    out.push(`<polygon points="${pts}" transform="translate(${ox} ${oz})" fill="${colour}" opacity="${opacity}"/>`);
  }
  return out;
}

/**
 * The part of a circular arc that lies inside this tile, as a polyline, with the
 * arc length `s0` from the arc's start to the first point inside. Angles are in
 * degrees with z DOWN (90 = +z), swept from a0 to a1 in either direction. Arcs
 * are never wrapped: none in the family straddles an edge, and a wrapped copy
 * of an arc's out-of-frame continuation would land inside the frame.
 */
function clipArc(cx, cz, r, a0, a1, stepDeg = 0.1) {
  const inside = ([x, z]) => x >= -1e-9 && x <= 8 + 1e-9 && z >= -1e-9 && z <= 8 + 1e-9;
  const at = (a) => [cx + r * Math.cos((a * Math.PI) / 180), cz + r * Math.sin((a * Math.PI) / 180)];
  const n = Math.ceil(Math.abs(a1 - a0) / stepDeg);
  const pts = []; let s0 = null;
  for (let i = 0; i <= n; i++) {
    const a = a0 + ((a1 - a0) * i) / n;
    const p = at(a);
    if (inside(p)) {
      if (s0 === null) s0 = (Math.abs(a - a0) * Math.PI / 180) * r;
      pts.push(p);
    } else if (pts.length) break;
  }
  if (!pts.length) throw new Error(`arc r=${r} about (${cx},${cz}) never enters the tile`);
  // Snap the two ends exactly onto the tile boundary they touch.
  const snap = ([x, z]) => [Math.abs(x) < 0.02 ? 0 : Math.abs(x - 8) < 0.02 ? 8 : x, Math.abs(z) < 0.02 ? 0 : Math.abs(z - 8) < 0.02 ? 8 : z];
  pts[0] = snap(pts[0]); pts[pts.length - 1] = snap(pts[pts.length - 1]);
  return { pts, s0 };
}
/** A solid family-width arc. */
function arc(cx, cz, r, a0, a1, o = {}) {
  return poly(clipArc(cx, cz, r, a0, a1).pts, { wrap: false, ...o });
}
/**
 * A dashed centre-line arc whose dash pattern is anchored to the ARC START, in
 * the family phase: half a gap, then dash/gap pairs of one unit each, so a
 * whole number of cycles fits a quarter turn of radius 4, 12 or 20
 * and both ports meet their neighbours mid-gap.
 */
function dashedArc(cx, cz, r, a0, a1) {
  const { pts, s0 } = clipArc(cx, cz, r, a0, a1);
  const cycle = 2 * U;
  const phase = (((s0 - 0.5 * U) % cycle) + cycle) % cycle;
  return poly(pts, { wrap: false, dash: { on: U, gap: U, phase } });
}
/** Angle (degrees, z down) of point p about centre c. */
const ang = ([cx, cz], [x, z]) => (Math.atan2(z - cz, x - cx) * 180) / Math.PI;
/** Solid arc between two points known to lie on a circle, the short way round. */
function arcBetween(c, r, p, q, o = {}) {
  let a0 = ang(c, p); let a1 = ang(c, q);
  if (a1 - a0 > 180) a1 -= 360; if (a0 - a1 > 180) a1 += 360;
  return arc(c[0], c[1], r, a0, a1, o);
}
/** The four 0.6 m corner fillets of a junction, by corner name. */
const FILLET = {
  NW: () => arcBetween([0, 0], 0.6, [0, 0.6], [0.6, 0]),
  NE: () => arcBetween([8, 0], 0.6, [7.4, 0], [8, 0.6]),
  SE: () => arcBetween([8, 8], 0.6, [8, 7.4], [7.4, 8]),
  SW: () => arcBetween([0, 8], 0.6, [0, 7.4], [0.6, 8]),
};
/** Straight-ahead arrow: shaft 0.3 wide, head 1.0 x 1.0, 3.0 m long, tip at (x, zTip), pointing dir = -1 (N) or +1 (S). */
function arrow(x, zTip, dir) {
  const zHead = zTip + dir * 1.0; const zTail = zTip + dir * 3.0;
  return [
    ...polygon([[x - 0.15, zHead], [x + 0.15, zHead], [x + 0.15, zTail], [x - 0.15, zTail]]),
    ...polygon([[x - 0.5, zHead], [x + 0.5, zHead], [x, zTip]]),
  ];
}

const ROAD_RECIPES = {
  'road-straight-solid-centre': () => [...edges(), ...vseg(4.0, 0, 8)],
  'road-straight-lane-arrows': () => [...edges(), ...dashes(4.0), ...arrow(2.3, 2.5, +1), ...arrow(5.7, 5.5, -1)],
  'road-straight-zebra-crossing': () => [
    ...edges(), ...dashes(4.0, [0, 3]),
    ...[1, 2, 3, 4, 5, 6, 7].flatMap((c) => rect({ x0: c - 0.225, z0: 2.5, x1: c + 0.225, z1: 5.5 })),
    ...rect({ x0: 0.66, z0: 5.8, x1: 3.94, z1: 6.2 }),
    ...rect({ x0: 4.06, z0: 1.8, x1: 7.34, z1: 2.2 }),
  ],
  'road-straight-junction-approach': () => [
    ...edges(), ...vseg(4.0, 0, 3.5), ...dashes(4.0, [2, 3]),
    ...rect({ x0: 0.66, z0: 0.6, x1: 3.94, z1: 1.0 }),
  ],
  'road-markings-end': () => [...edges(0, 4.0), ...dashes(4.0, [0, 1])],
  'road-dead-end': () => [
    ...edges(0, 6.8), ...dashes(4.0, [0, 1, 2]),
    ...arcBetween([1.2, 6.8], 0.6, [0.6, 6.8], [1.2, 7.4]),
    ...arcBetween([6.8, 6.8], 0.6, [7.4, 6.8], [6.8, 7.4]),
    ...hseg(7.4, 1.2, 6.8),
  ],
  // Ports S and E; every arc centred on the SE corner. The centre arc starts at
  // the S port (angle 180) so its dash phase anchors there.
  'road-corner': () => [
    ...arc(8, 8, 0.6, 180, 270), ...arc(8, 8, 7.4, 180, 270), ...dashedArc(8, 8, 4.0, 180, 270),
  ],
  'road-t-junction': () => [
    ...hseg(0.6, 0, 8),
    ...[0, 1, 2, 3].flatMap((i) => hseg(4.0, 0.5 + 2 * i, 1.5 + 2 * i)),
    ...FILLET.SW(), ...FILLET.SE(),
  ],
  'road-crossroads': () => [...FILLET.NW(), ...FILLET.NE(), ...FILLET.SE(), ...FILLET.SW()],
  'road-crossroads-yellow-box': () => {
    const y = { colour: YELLOW, opacity: 0.78 };
    const parts = [...FILLET.NW(), ...FILLET.NE(), ...FILLET.SE(), ...FILLET.SW()];
    parts.push(...hseg(1.2, 1.14, 6.86, y), ...hseg(6.8, 1.14, 6.86, y), ...vseg(1.2, 1.14, 6.86, y), ...vseg(6.8, 1.14, 6.86, y));
    const lo = 1.2, hi = 6.8, pitch = Math.SQRT2; // 1.0 m perpendicular spacing
    for (let k = -3; k <= 3; k++) {
      const c = k * pitch;                       // x - z = c
      let za = Math.max(lo, lo - c), zb = Math.min(hi, hi - c);
      if (zb > za) parts.push(...poly([[za + c, za], [zb + c, zb]], { width: 0.10, wrap: false, ...y }));
      const c2 = 8 + k * pitch;                  // x + z = c2
      za = Math.max(lo, c2 - hi); zb = Math.min(hi, c2 - lo);
      if (zb > za) parts.push(...poly([[c2 - za, za], [c2 - zb, zb]], { width: 0.10, wrap: false, ...y }));
    }
    return parts;
  },
  // The 2 x 2 wide curve: every arc centred on the block's NE corner, swept from
  // the N port (angle 180 about that corner) to the E port (angle 90). Each
  // quadrant gives that corner in its own tile-local frame; clipArc keeps the
  // part inside and carries the arc length from the N port, so the dash phase is
  // the block's, not the tile's.
  'road-wide-curve-entry': () => [...arc(16, 0, 15.4, 180, 90), ...dashedArc(16, 0, 12, 180, 90), ...arc(16, 0, 8.6, 180, 90)],
  'road-wide-curve-inner': () => [...arc(8, 0, 8.6, 180, 90)],
  'road-wide-curve-outer': () => [...arc(16, -8, 15.4, 180, 90), ...dashedArc(16, -8, 12, 180, 90)],
  'road-wide-curve-exit': () => [...arc(8, -8, 15.4, 180, 90), ...dashedArc(8, -8, 12, 180, 90), ...arc(8, -8, 8.6, 180, 90)],
  // The 3 x 3 cul-de-sac: bulb of radius 5.5 about the block centre.
  'road-cul-de-sac-approach': () => {
    const zm = 12 - Math.sqrt(5.5 ** 2 - 3.4 ** 2); // 7.68
    return [
      ...edges(0, zm), ...dashes(4.0, [0, 1, 2]),
      ...arcBetween([4, 12], 5.5, [0.6, zm], [4 - Math.sqrt(5.5 ** 2 - 16), 8]),
      ...arcBetween([4, 12], 5.5, [7.4, zm], [4 + Math.sqrt(5.5 ** 2 - 16), 8]),
    ];
  },
  'road-cul-de-sac-bulb-edge': () => {
    const dz = Math.sqrt(5.5 ** 2 - 16); // 3.77
    return arcBetween([12, 4], 5.5, [8, 4 - dz], [8, 4 + dz]);
  },
  // Parking: plain on all four edges, bays open to the W edge.
  'road-parallel-parking-strip': () => [...vseg(2.4, 0, 8), ...hseg(0, 0, 2.4)],
  'road-perpendicular-parking-bays': () => [...vseg(5.0, 0, 8), ...[0, 1, 2].flatMap((i) => hseg((8 / 3) * i, 0, 5.0))],
  'road-angled-parking-bays': () => [0, 1, 2].flatMap((i) => poly([[0, (8 / 3) * i], [5.0, (8 / 3) * i + 5.0 / Math.tan(Math.PI / 3)]])),
  'road-motorcycle-parking-bays': () => [...vseg(2.2, 0, 8), ...[0, 1, 2, 3, 4, 5, 6, 7].flatMap((i) => hseg(i, 0, 2.2))],
};
Object.assign(RECIPES, ROAD_RECIPES);

const [id, substrate, out] = process.argv.slice(2);
const recipe = RECIPES[id];
if (!recipe) throw new Error(`no composite recipe for ${id}`);

const base = await sharp(substrate).resize(PX, PX, { fit: 'fill' }).toBuffer();
const svg = `<svg width="${PX}" height="${PX}">${recipe().join('')}</svg>`;
await sharp(base).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 94, mozjpeg: true }).toFile(out);
console.error(`composited ${id} -> ${out}`);
