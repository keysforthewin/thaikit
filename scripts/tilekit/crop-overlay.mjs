/** Draw the sample boxes onto the plate so a crop can be SEEN to sit on the surface it claims.
 *  The Makro build lost three materials to crops that sat on a different surface and only the
 *  confidence score gave it away; a picture is cheaper than that. */
import sharp from 'sharp';
const [, , id, out, ...regions] = process.argv;
const src = `assets/${id}/preview.jpg`;
const { width, height } = await sharp(src).metadata();
const COLORS = ['#ff0055', '#00ff88', '#ffcc00', '#00ccff', '#ff8800', '#cc66ff', '#ffffff', '#ff2222'];
const rects = regions.map((spec, i) => {
  const [name, box] = spec.split('=');
  const [x0, y0, x1, y1] = box.split(',').map(Number);
  const c = COLORS[i % COLORS.length];
  return `<rect x="${x0 * width}" y="${y0 * height}" width="${(x1 - x0) * width}" height="${(y1 - y0) * height}"
    fill="none" stroke="${c}" stroke-width="3"/><text x="${x0 * width + 4}" y="${y0 * height - 5}"
    fill="${c}" font-size="20" font-family="monospace">${name}</text>`;
}).join('');
await sharp(src).composite([{ input: Buffer.from(`<svg width="${width}" height="${height}">${rects}</svg>`), top: 0, left: 0 }])
  .png().toFile(out);
console.log('wrote', out);
