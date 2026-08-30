/**
 * The measuring stick, measured.
 *
 * `probe-lightmap.mjs` is what every bake change is judged by, so if it reads
 * the atlas wrong every conclusion drawn from it is wrong too. Two things need
 * pinning: that a 16-BIT RGBA PNG (which is what Blender's `save_render` writes)
 * is decoded at full precision rather than truncated to bytes, and that the
 * statistics mean what the bake steps assume they mean -- coverage excludes the
 * pack gutter, the clip rate finds texels pinned at full scale, and the alpha
 * histogram separates a bimodal moon mask from a contaminated smear.
 *
 * The fixtures are hand-built PNGs rather than sharp-encoded ones on purpose:
 * sharp SILENTLY IGNORES `depth: 'ushort'` on raw INPUT and reads the buffer as
 * bytes, so a fixture round-tripped through sharp cannot prove the 16-bit path
 * works -- it only proves sharp agrees with itself.
 */
import test from 'node:test';
import assert from 'node:assert/strict';
import zlib from 'node:zlib';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { readAtlas, statsOf, diffOf } from './probe-lightmap.mjs';

const CRC = (() => {
  const t = new Int32Array(256);
  for (let n = 0; n < 256; n++) {
    let c = n;
    for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
    t[n] = c;
  }
  return (buf) => {
    let c = -1;
    for (const b of buf) c = t[(c ^ b) & 0xff] ^ (c >>> 8);
    return (c ^ -1) >>> 0;
  };
})();

const chunk = (type, data) => {
  const len = Buffer.alloc(4);
  len.writeUInt32BE(data.length);
  const body = Buffer.concat([Buffer.from(type, 'ascii'), data]);
  const crc = Buffer.alloc(4);
  crc.writeUInt32BE(CRC(body));
  return Buffer.concat([len, body, crc]);
};

/** A real RGBA PNG at 8 or 16 bits per sample. `px` is 0..1 floats, RGBA. */
function encodePng(width, height, px, bits) {
  const max = bits === 16 ? 65535 : 255;
  const bytes = bits === 16 ? 2 : 1;
  const stride = width * 4 * bytes;
  const rows = Buffer.alloc(height * (stride + 1));
  for (let y = 0; y < height; y++) {
    const base = y * (stride + 1);
    rows[base] = 0; // filter: none
    for (let i = 0; i < width * 4; i++) {
      const v = Math.round(Math.min(1, Math.max(0, px[y * width * 4 + i])) * max);
      if (bits === 16) rows.writeUInt16BE(v, base + 1 + i * 2); // PNG is big-endian
      else rows[base + 1 + i] = v;
    }
  }
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr[8] = bits;
  ihdr[9] = 6; // colour type: RGBA
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(rows)),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

const dir = fs.mkdtempSync(path.join(os.tmpdir(), 'probe-'));
const write = (name, w, h, px, bits) => {
  const file = path.join(dir, name);
  fs.writeFileSync(file, encodePng(w, h, px, bits));
  return file;
};

/**
 * A 16x16 atlas with a 2-texel gutter, a fixed mid grey inside it, a bimodal
 * moon mask split down the middle, and one deliberately blown texel.
 */
function atlas({ gain = 1, smear = false, blow = true } = {}) {
  const S = 16;
  const px = new Float32Array(S * S * 4);
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const o = (y * S + x) * 4;
      const covered = x >= 2 && x < S - 2 && y >= 2 && y < S - 2;
      if (!covered) continue;
      const v = 0.5 * gain;
      px[o] = px[o + 1] = px[o + 2] = v;
      px[o + 3] = smear ? x / S : x < S / 2 ? 0.02 : 0.98;
    }
  }
  if (blow) {
    const o = (8 * S + 8) * 4;
    px[o] = px[o + 1] = px[o + 2] = 1;
  }
  return { S, px };
}

test('a 16-bit PNG is read at full precision, not truncated to bytes', async () => {
  const S = 4;
  const px = new Float32Array(S * S * 4);
  // 40000/65535 is not representable in 8 bits; if the reader truncates, this
  // comes back as a very different number.
  const target = 40000 / 65535;
  for (let i = 0; i < S * S; i++) {
    px[i * 4] = px[i * 4 + 1] = px[i * 4 + 2] = target;
    px[i * 4 + 3] = 1;
  }
  const a = await readAtlas(write('deep.png', S, S, px, 16));
  assert.equal(a.depth, 'ushort');
  assert.equal(a.scale, 65535);
  assert.ok(Math.abs(a.px[0] - target) < 1e-4, `got ${a.px[0]}, want ${target}`);
  // The 8-bit truncation this guards against would land on 156/255.
  assert.ok(Math.abs(a.px[0] - 156 / 255) > 1e-3);
});

test('an 8-bit PNG still reads', async () => {
  const { S, px } = atlas();
  const a = await readAtlas(write('flat8.png', S, S, px, 8));
  assert.equal(a.depth, 'uchar');
  assert.equal(a.scale, 255);
});

test('coverage counts the islands, not the gutter', async () => {
  const { S, px } = atlas();
  const s = statsOf(await readAtlas(write('cover.png', S, S, px, 16)));
  assert.equal(s.coveredTexels, 12 * 12); // 16 minus a 2-texel gutter each side
  assert.equal(s.coverage, Number((144 / 256).toFixed(4)));
  assert.equal(s.size, '16x16');
});

test('channel stats are linear light, not the stored sRGB', async () => {
  const { S, px } = atlas();
  const s = statsOf(await readAtlas(write('lin.png', S, S, px, 16)));
  // 0.5 sRGB-encoded is 0.2140 linear. Reporting 0.5 would mean the decode is
  // missing and every brightness ratio drawn from this tool is wrong.
  assert.ok(Math.abs(s.channels.r.p50 - 0.2140) < 0.002, `p50 ${s.channels.r.p50}`);
});

test('clip rate finds texels pinned at full scale', async () => {
  const { S, px } = atlas({ blow: true });
  const s = statsOf(await readAtlas(write('clip.png', S, S, px, 16)));
  assert.equal(s.clipRate, Number((1 / 144).toFixed(4)));

  const clean = atlas({ blow: false });
  const s2 = statsOf(await readAtlas(write('noclip.png', clean.S, clean.S, clean.px, 16)));
  assert.equal(s2.clipRate, 0);
});

test('the alpha histogram separates a moon mask from a contaminated one', async () => {
  const clean = atlas({ smear: false });
  const dirty = atlas({ smear: true });
  const a = statsOf(await readAtlas(write('bimodal.png', clean.S, clean.S, clean.px, 16)));
  const b = statsOf(await readAtlas(write('smear.png', dirty.S, dirty.S, dirty.px, 16)));

  // Bimodal: everything in the first and last bins, nothing in between.
  assert.equal(a.penumbra, 0);
  assert.ok(a.alpha[0] + a.alpha[9] > 0.99, `ends hold ${a.alpha[0] + a.alpha[9]}`);
  // A smear is what another light in the SHADOW pass looks like.
  assert.ok(b.penumbra > 0.4, `penumbra ${b.penumbra}`);
});

test('compare reports direction, so a darkening step is distinguishable', async () => {
  const bright = atlas({ gain: 1 });
  const dark = atlas({ gain: 0.6 });
  const a = await readAtlas(write('bright.png', bright.S, bright.S, bright.px, 16));
  const b = await readAtlas(write('dark.png', dark.S, dark.S, dark.px, 16));

  const darker = diffOf(b, a); // new = dark, old = bright
  assert.ok(darker.perChannel.r.ratio < 1, `ratio ${darker.perChannel.r.ratio}`);
  assert.ok(darker.rgbMeanAbs > 0);

  const brighter = diffOf(a, b);
  assert.ok(brighter.perChannel.r.ratio > 1, `ratio ${brighter.perChannel.r.ratio}`);

  // Same atlas against itself is a clean zero -- the calibration check A4 leans on.
  const same = diffOf(a, a);
  assert.equal(same.rgbMeanAbs, 0);
  assert.equal(same.perChannel.a.max, 0);
});

test('mismatched sizes are refused rather than silently compared', async () => {
  const big = atlas();
  const a = await readAtlas(write('big.png', big.S, big.S, big.px, 16));
  const small = new Float32Array(4 * 4 * 4).fill(0.5);
  const b = await readAtlas(write('small.png', 4, 4, small, 16));
  assert.ok(diffOf(a, b).error);
});
