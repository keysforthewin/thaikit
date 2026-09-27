import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import vm from 'node:vm';
import sharp from 'sharp';

// Exercise the production SVG recipes through their rasterizer. The expected
// circles and dash intervals below are measured in the assembled 16 m block.
const source = await fs.readFile(new URL('./composite.mjs', import.meta.url), 'utf8');
const pure = source.slice(source.indexOf('const PX = 1024;'), source.indexOf('const [id, substrate, out] = process.argv.slice(2);'));
const definitions = [
  { role: 'entry', offset: [0, 0], seams: ['E', 'S'] },
  { role: 'inner', offset: [8, 0], seams: ['W', 'S'] },
  { role: 'outer', offset: [0, 8], seams: ['N', 'E'] },
  { role: 'exit', offset: [8, 8], seams: ['N', 'W'] },
];
const tiles = await Promise.all(definitions.map(async definition => {
  const parts = vm.runInNewContext(pure + '\nRECIPES[id]();', { id: 'road-wide-curve-' + definition.role }, { timeout: 1000 });
  const pixels = await sharp(Buffer.from(`<svg width="1024" height="1024">${parts.join('')}</svg>`)).ensureAlpha().raw().toBuffer();
  return { ...definition, alpha: (x, z) => pixels[(z * 1024 + x) * 4 + 3] };
}));

test('wide-curve solid paint keeps its full width through every internal seam', () => {
  for (const tile of tiles) for (const seam of tile.seams) {
    let expectedPaint = 0;
    for (let i = 0; i < 1024; i++) {
      const x = seam === 'W' ? 0 : seam === 'E' ? 1023 : i;
      const z = seam === 'N' ? 0 : seam === 'S' ? 1023 : i;
      const radius = Math.hypot(16 - tile.offset[0] - (x + 0.5) / 128, tile.offset[1] + (z + 0.5) / 128);
      // Stay inside the .12 m stroke, clear of the antialiased outline.
      if ([8.6, 15.4].some(r => Math.abs(radius - r) < 0.04)) {
        expectedPaint++;
        assert.ok(tile.alpha(x, z) >= 195, `${tile.role} ${seam} has a paint gap at pixel ${i}`);
      }
    }
    assert.ok(expectedPaint > 0, `${tile.role} ${seam} must cross an edge line`);
  }
});

test('all nine curved centre dashes retain their global phase across quadrants', () => {
  const unit = Math.PI / 3;
  for (let s = 0.04; s < 6 * Math.PI - 0.04; s += 0.02) {
    const x = 16 - 12 * Math.cos(s / 12), z = 12 * Math.sin(s / 12);
    const tile = tiles.find(t => x >= t.offset[0] && x < t.offset[0] + 8 && z >= t.offset[1] && z < t.offset[1] + 8);
    assert.ok(tile);
    const phase = ((s - unit / 2) % (2 * unit) + 2 * unit) % (2 * unit);
    if (Math.min(phase, Math.abs(phase - unit), 2 * unit - phase) < 0.025) continue;
    const alpha = tile.alpha(Math.floor((x - tile.offset[0]) * 128), Math.floor((z - tile.offset[1]) * 128));
    assert.ok(phase < unit ? alpha >= 195 : alpha === 0, `Incorrect centre dash phase at ${s.toFixed(3)} m in ${tile.role}`);
  }
});

const angledParts = vm.runInNewContext(pure + '\nRECIPES["road-angled-parking-bays"]();', {}, { timeout: 1000 });
const angledPixels = await sharp(Buffer.from(`<svg width="1024" height="1024">${angledParts.join('')}</svg>`)).ensureAlpha().raw().toBuffer();
const angledAlpha = (x, z) => angledPixels[(z * 1024 + x) * 4 + 3];

test('angled parking has no paint copied onto its bare east field', () => {
  for (let z = 0; z < 1024; z++) for (let x = Math.ceil(5.04 * 128); x < 1024; x++) {
    assert.equal(angledAlpha(x, z), 0, `Unexpected paint beyond bay ends at ${x},${z}`);
  }
});

test('angled parking preserves all three divider phases across the north-south wrap', () => {
  for (const xm of [0.5, 2, 4.8]) for (let bay = 0; bay < 3; bay++) {
    const zm = (bay * 8 / 3 + xm / Math.sqrt(3)) % 8;
    assert.ok(angledAlpha(Math.floor(xm * 128), Math.floor(zm * 128)) >= 195, `Missing divider ${bay} at x=${xm}`);
    const gap = (zm + 4 / 3) % 8;
    assert.equal(angledAlpha(Math.floor(xm * 128), Math.floor(gap * 128)), 0, 'Bay interior must stay unpainted');
  }
  // The last divider in the previous period crosses N near x=4.62 m.
  for (const z of [0, 1023]) {
    const crossings = [];
    for (let x = 550; x < 660; x++) if (angledAlpha(x, z) >= 195) crossings.push(x);
    assert.ok(crossings.length >= 25 && crossings.length <= 35, 'Wrapped diagonal retains its projected stroke width');
  }
});
