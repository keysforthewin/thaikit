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

const [id, substrate, out] = process.argv.slice(2);
const recipe = RECIPES[id];
if (!recipe) throw new Error(`no composite recipe for ${id}`);

const base = await sharp(substrate).resize(PX, PX, { fit: 'fill' }).toBuffer();
const svg = `<svg width="${PX}" height="${PX}">${recipe().join('')}</svg>`;
await sharp(base).composite([{ input: Buffer.from(svg) }]).jpeg({ quality: 94, mozjpeg: true }).toFile(out);
console.error(`composited ${id} -> ${out}`);
