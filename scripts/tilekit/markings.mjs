/**
 * Painted road markings, per tile, in METRES in the tile's own centred frame.
 *
 * Paint is a printed graphic: it has no thickness worth modelling and it belongs
 * in the surface, not on a second quad hovering over it. Everything here is
 * therefore a shape the compositor stamps into the albedo, with a small matching
 * delta into roughness and normal -- road paint is smoother than the asphalt
 * around it and stands a millimetre or so proud of it, and leaving that out is
 * what makes painted markings read as a sticker.
 *
 * Coordinates are the same ones regions.mjs uses, so a marking and the
 * carriageway edge it is measured from cannot drift apart.
 */
import { CW_HALF, HALF, SOI_W_HALF } from './regions.mjs';

/** Thai road paint: chalky white, and a warmer yellow for centre lines. */
export const WHITE = { r: 226, g: 226, b: 219 };
export const YELLOW = { r: 214, g: 176, b: 74 };

const dashedCentre = (from = -HALF, to = HALF, dash = 2.0, gap = 2.0) => {
  const out = [];
  for (let z = from; z < to; z += dash + gap) {
    out.push({ shape: 'rect', x: -0.075, z, w: 0.15, d: Math.min(dash, to - z), color: WHITE, wear: 0.45 });
  }
  return out;
};

/** Solid edge lines just inside the carriageway, both sides. */
const edgeLines = (from = -HALF, to = HALF) => [
  { shape: 'rect', x: CW_HALF - 0.35, z: from, w: 0.12, d: to - from, color: WHITE, wear: 0.34 },
  { shape: 'rect', x: -CW_HALF + 0.23, z: from, w: 0.12, d: to - from, color: WHITE, wear: 0.34 },
];

/** Zebra bars across the carriageway, thinnest where the wheel tracks cross. */
const zebra = (zCentre = 0, depth = 1.6) => {
  const out = [];
  const barW = 0.45, gap = 0.35;
  for (let x = -CW_HALF + 0.3; x + barW <= CW_HALF - 0.3; x += barW + gap) {
    out.push({ shape: 'rect', x, z: zCentre - depth / 2, w: barW, d: depth, color: WHITE, wear: 0.62 });
  }
  return out;
};

/**
 * The marking set for each tile.
 *
 * The junctions carry no centre line through the open middle: real junctions
 * wear them away, and it also keeps the centre from having to agree with
 * whatever meets it on each approach.
 */
export const MARKINGS = {
  'road-straight-tile': [...edgeLines(), ...dashedCentre()],
  'road-crosswalk-tile': [
    ...edgeLines(),
    ...dashedCentre(-HALF, -1.6),
    ...dashedCentre(1.6, HALF),
    ...zebra(0, 1.6),
    // Stop bars either side of the crossing.
    { shape: 'rect', x: -CW_HALF + 0.2, z: -1.95, w: CW_HALF - 0.3, d: 0.3, color: WHITE, wear: 0.34 },
    { shape: 'rect', x: 0.1, z: 1.65, w: CW_HALF - 0.3, d: 0.3, color: WHITE, wear: 0.34 },
  ],
  'road-drain-and-utility-tile': [...edgeLines(), ...dashedCentre()],
  // Junctions: approach markings only, nothing across the open centre.
  'road-crossroads-tile': [],
  'road-t-junction-tile': [...dashedCentre(2.9, HALF)],
  'road-curve-tile': [],
  'road-dead-end-tile': [...dashedCentre(-HALF, -1.0)],
  'soi-entrance-tile': [...dashedCentre(-HALF, HALF)],
  // A soi carries no lane markings at all -- it is a shared surface.
  'soi-alley-straight-tile': [],
  'soi-alley-corner-tile': [],
};

/**
 * Flush drain lids and utility covers, in metres. These are decals, not holes:
 * the tile is a flat quad, so a drain reads as a channel because of its albedo,
 * normal and AO, never because there is a recess there. Nothing on a road tile
 * may catch a player's feet.
 */
export const DECALS = {
  'road-straight-tile': [
    { shape: 'rect', x: CW_HALF - 0.55, z: 1.2, w: 0.5, d: 0.9, kind: 'grate' },
  ],
  'road-drain-and-utility-tile': [
    { shape: 'rect', x: CW_HALF - 0.6, z: -2.4, w: 0.55, d: 1.0, kind: 'grate' },
    { shape: 'rect', x: -CW_HALF + 0.1, z: 1.6, w: 0.55, d: 1.0, kind: 'grate' },
    { shape: 'circle', x: -0.9, z: -0.6, w: 0.72, d: 0.72, kind: 'manhole' },
    { shape: 'circle', x: 1.3, z: 2.2, w: 0.62, d: 0.62, kind: 'manhole' },
    { shape: 'rect', x: HALF - 0.85, z: -0.45, w: 0.5, d: 0.5, kind: 'pad' },
    { shape: 'rect', x: -HALF + 0.35, z: 2.6, w: 0.5, d: 0.5, kind: 'pad' },
  ],
  'road-crosswalk-tile': [
    { shape: 'circle', x: -1.1, z: -2.8, w: 0.66, d: 0.66, kind: 'manhole' },
  ],
  'road-crossroads-tile': [
    { shape: 'circle', x: -1.6, z: -1.6, w: 0.7, d: 0.7, kind: 'manhole' },
  ],
  'road-t-junction-tile': [
    { shape: 'circle', x: 1.5, z: -1.2, w: 0.68, d: 0.68, kind: 'manhole' },
  ],
  'road-curve-tile': [],
  'road-dead-end-tile': [
    { shape: 'rect', x: CW_HALF - 0.55, z: -1.4, w: 0.5, d: 0.9, kind: 'grate' },
  ],
  'soi-entrance-tile': [
    { shape: 'rect', x: CW_HALF - 0.55, z: -2.0, w: 0.5, d: 0.9, kind: 'grate' },
  ],
  // The alley's drains run as a continuous lidded channel down each edge.
  'soi-alley-straight-tile': [
    { shape: 'rect', x: -SOI_W_HALF - 0.42, z: -HALF, w: 0.4, d: 2 * HALF, kind: 'lid-run' },
    { shape: 'rect', x: SOI_W_HALF + 0.02, z: -HALF, w: 0.4, d: 2 * HALF, kind: 'lid-run' },
  ],
  'soi-alley-corner-tile': [],
};
