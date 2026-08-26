/**
 * Carriageway regions for the road and soi ground tiles, in metres, tile-centred.
 *
 * Ported from tilespec.py, which authored the same polygons for the retired
 * three-component extruded version of these tiles. The polygons outlived that
 * design because they are the kit's contract, not an artefact of how it was
 * built: they say where the road surface stops and the sidewalk begins, and the
 * flat-quad tiles paint exactly the same boundary instead of extruding it.
 *
 * The band profile every mating edge carries -- 1.25 m sidewalk, 5.5 m
 * carriageway, 1.25 m sidewalk -- is what lets any tile edge meet any other, so
 * these numbers are shared by every tile rather than restated per tile. That is
 * also why the compositor derives its pixel boundaries from here: two tiles that
 * compute the same edge from the same constant cannot disagree about it.
 */

export const HALF = 4.0;       // 8 m module: tiles snap on 8 m centres
export const SW = 1.25;        // sidewalk band each side
export const CW_HALF = 2.75;   // carriageway half-width -> 5.5 m, two lanes
export const CORNER_R = 0.75;
export const SOI_HALF = 2.0;   // alley module is a half-module wide
export const SOI_W_HALF = 1.5; // 3 m shared surface
export const SOI_EDGE = 0.5;   // painted edge band, not a raised kerb

const rad = (d) => (d * Math.PI) / 180;

/**
 * Points along an arc. Corner returns are radiused rather than square because a
 * vehicle turning into a branch has to clear them, and because a square return
 * reads as a kerb someone forgot to finish.
 */
export function arc(cx, cz, r, a0, a1, steps = 6) {
  const out = [];
  for (let i = 0; i <= steps; i++) {
    const a = a0 + ((a1 - a0) * i) / steps;
    out.push([cx + r * Math.cos(a), cz + r * Math.sin(a)]);
  }
  return out;
}

const fillet = (cx, cz, r, a0, a1, steps = 8) => arc(cx, cz, r, rad(a0), rad(a1), steps);

/** Footprint rectangle. `h` is a half-extent, or a [half_x, half_z] pair. */
export function square(h = HALF) {
  const [hx, hz] = Array.isArray(h) ? h : [h, h];
  return [[-hx, -hz], [hx, -hz], [hx, hz], [-hx, hz]];
}

export function regionStraight(w = CW_HALF, h = HALF) {
  return [[-w, -h], [w, -h], [w, h], [-w, h]];
}

/**
 * A plus, with all four concave returns filleted. Rotationally symmetric on all
 * four edges, which is what lets this piece close a street grid at any of four
 * orientations -- and makes that symmetry a constraint on the texture too.
 */
export function regionCrossroads(w = CW_HALF, h = HALF, r = CORNER_R) {
  return [
    [-w, -h], [w, -h],
    ...fillet(w + r, -w - r, r, 180, 90),
    [h, -w], [h, w],
    ...fillet(w + r, w + r, r, 270, 180),
    [w, h], [-w, h],
    ...fillet(-w - r, w + r, r, 0, -90),
    [-h, w], [-h, -w],
    ...fillet(-w - r, -w - r, r, 90, 0),
  ];
}

/**
 * Three live edges, the fourth a continuous sidewalk run. Fixed orientation:
 * unlike the straight and the crossroads this piece cannot be rotated freely.
 */
export function regionTJunction(w = CW_HALF, h = HALF, r = CORNER_R) {
  return [
    [-w, -h], [w, -h],
    ...fillet(w + r, -w - r, r, 180, 90),
    [h, -w], [h, w], [-h, w], [-h, -w],
    ...fillet(-w - r, -w - r, r, 90, 0),
  ];
}

/**
 * Quarter turn inside one module. The centreline is tangent to +z at the south
 * edge and to +x at the east edge, putting its centre at the (h, -h) corner with
 * radius h. The inner return is therefore TIGHT (h - w) and the outer one WIDE
 * (h + w) -- that asymmetry IS the piece. Evening it out would stop the
 * carriageway being a constant 5.5 m through the turn, at which point the tile
 * no longer mates at both edges.
 */
export function regionCurve(w = CW_HALF, h = HALF) {
  const cx = h, cz = -h;
  return [
    [-w, -h],
    ...arc(cx, cz, h + w, Math.PI, Math.PI / 2, 24),
    ...arc(cx, cz, h - w, Math.PI / 2, Math.PI, 12),
  ];
}

/**
 * One live edge; the other three closed. The carriageway ends in a rounded
 * turning head so the sidewalk wraps continuously across the closed end -- a
 * player walking the pavement is never dropped into the road.
 */
export function regionDeadEnd(w = CW_HALF, h = HALF) {
  const head = 1.0;
  return [[-w, -h], [w, -h], ...arc(0, head, w, 0, Math.PI, 20)];
}

/**
 * Straight carriageway plus a full-depth crossing band. The band cuts the
 * sidewalk down to road level rather than ramping to it. Both MATING edges
 * (z = +-h) keep the full profile; only the x edges, which face buildings, are
 * interrupted.
 */
export function regionCrosswalk(w = CW_HALF, h = HALF) {
  const band = 1.6;
  return [
    [-w, -h], [w, -h], [w, -band], [h, -band], [h, band], [w, band],
    [w, h], [-w, h], [-w, band], [-h, band], [-h, -band], [-w, -band],
  ];
}

/**
 * A T of full road edges with a soi mouth opening off the fourth. The alley
 * occupies the EASTERN half-module of that edge (x 0.5..3.5 paved), which is
 * both off-centre -- a soi is a gap between buildings, not a designed junction --
 * and exactly on the half-module grid the alley pieces snap to.
 */
export function regionSoiEntrance(w = CW_HALF, h = HALF, r = CORNER_R) {
  return [
    [-w, -h], [w, -h],
    ...fillet(w + r, -w - r, r, 180, 90),
    [h, -w], [h, w], [3.5, w], [3.5, h], [0.5, h], [0.5, w], [-h, w], [-h, -w],
    ...fillet(-w - r, -w - r, r, 90, 0),
  ];
}

export function regionSoiStraight(w = SOI_W_HALF, h = HALF) {
  return [[-w, -h], [w, -h], [w, h], [-w, h]];
}

export function regionSoiCorner(w = SOI_W_HALF, h = SOI_HALF) {
  const cx = h, cz = -h;
  return [
    [-w, -h],
    ...arc(cx, cz, h + w, Math.PI, Math.PI / 2, 20),
    ...arc(cx, cz, h - w, Math.PI / 2, Math.PI, 10),
  ];
}

/**
 * Every tile, by id.
 *
 * `footprint` is [width, depth] in metres; `substrate` is the material the
 * carriageway region is filled with and `surround` what lies outside it.
 * road-straight-tile is here for the first time -- tilespec.py's own table never
 * had it, because it was built by hand before that module was factored out.
 */
export const TILES = {
  'road-straight-tile':          { footprint: [8, 8], region: regionStraight,    substrate: 'asphalt', surround: 'sidewalk' },
  'road-curve-tile':             { footprint: [8, 8], region: regionCurve,       substrate: 'asphalt', surround: 'sidewalk' },
  'road-crossroads-tile':        { footprint: [8, 8], region: regionCrossroads,  substrate: 'asphalt', surround: 'sidewalk' },
  'road-t-junction-tile':        { footprint: [8, 8], region: regionTJunction,   substrate: 'asphalt', surround: 'sidewalk' },
  'road-dead-end-tile':          { footprint: [8, 8], region: regionDeadEnd,     substrate: 'asphalt', surround: 'sidewalk' },
  'road-crosswalk-tile':         { footprint: [8, 8], region: regionCrosswalk,   substrate: 'asphalt', surround: 'sidewalk' },
  'road-drain-and-utility-tile': { footprint: [8, 8], region: regionStraight,    substrate: 'asphalt', surround: 'sidewalk' },
  'soi-entrance-tile':           { footprint: [8, 8], region: regionSoiEntrance, substrate: 'asphalt', surround: 'sidewalk' },
  'soi-alley-straight-tile':     { footprint: [4, 8], region: regionSoiStraight, substrate: 'alley',   surround: 'alley-edge' },
  'soi-alley-corner-tile':       { footprint: [4, 4], region: regionSoiCorner,   substrate: 'alley',   surround: 'alley-edge' },
};
