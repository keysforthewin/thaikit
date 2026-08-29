/**
 * Is this cubemap assembled right? Measured, not argued.
 *
 *   node scripts/level/check-cubemap.mjs levels/<id>/sky
 *
 * Adjacent cube faces share an edge, so at a shared edge the pixel just inside
 * face A and the pixel just inside face B look along ~the same direction and
 * must match. Summing |dA - dB| over all 12 edges is a SEAM SCORE: the correct
 * assignment is the one that minimises it. That is the same thing the eye is
 * complaining about, stated as a number.
 */
import sharp from 'sharp';
import path from 'node:path';

const SLOTS = ['px', 'nx', 'py', 'ny', 'pz', 'nz'];
/** Which zip entry the importer writes into each slot -- see CUBE_FACE_ALIASES. */
const FROM = { px: '_right', nx: '_left', py: '_up', ny: '_down', pz: '_back', nz: '_front' };
const N = 96;           // face resolution we compare at
const SAMPLES = 64;     // points along each edge

const dir = process.argv[2];
if (!dir) {
  console.error('usage: node scripts/level/check-cubemap.mjs <dir containing px|nx|py|ny|pz|nz.webp>');
  process.exit(2);
}
const imgs = {};
for (const s of SLOTS) {
  const { data } = await sharp(path.join(dir, `${s}.webp`))
    .resize(N, N, { fit: 'fill' }).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  imgs[s] = data;
}
const px = (buf, s, t) => {
  const x = Math.min(N - 1, Math.max(0, Math.round(s * N - 0.5)));
  const y = Math.min(N - 1, Math.max(0, Math.round(t * N - 0.5)));
  const i = (y * N + x) * 3;
  return [buf[i], buf[i + 1], buf[i + 2]];
};

/** The OpenGL cube-map table, with the major axis FORCED so an edge direction
 *  can be read as either of the two faces that meet there. */
function faceUV(d, axis) {
  const [x, y, z] = d;
  let sc, tc, ma, face;
  if (axis === 0) { ma = Math.abs(x); if (x > 0) { face = 'px'; sc = -z; tc = -y; } else { face = 'nx'; sc = z; tc = -y; } }
  else if (axis === 1) { ma = Math.abs(y); if (y > 0) { face = 'py'; sc = x; tc = z; } else { face = 'ny'; sc = x; tc = -z; } }
  else { ma = Math.abs(z); if (z > 0) { face = 'pz'; sc = x; tc = -y; } else { face = 'nz'; sc = -x; tc = -y; } }
  return { face, s: 0.5 * (sc / ma + 1), t: 0.5 * (tc / ma + 1) };
}

// The 12 edges: two axes pinned to +-1, the third sweeping.
const inset = 0.75 / N; // land on the pixel just inside the border, not on it
const pairs = [];
for (let free = 0; free < 3; free++) {
  const [a, b] = [0, 1, 2].filter((i) => i !== free);
  for (const sa of [-1, 1]) for (const sb of [-1, 1]) {
    for (let k = 0; k < SAMPLES; k++) {
      const u = -1 + 2 * (k + 0.5) / SAMPLES;
      const d = [0, 0, 0];
      d[a] = sa; d[b] = sb; d[free] = u;
      const A = faceUV(d, a), B = faceUV(d, b);
      // nudge each sample off the shared border into its own face
      const pull = (p) => ({ face: p.face, s: Math.min(1 - inset, Math.max(inset, p.s)), t: Math.min(1 - inset, Math.max(inset, p.t)) });
      pairs.push([pull(A), pull(B)]);
    }
  }
}

/** assignment: slot -> which source slot's image sits there */
function score(assign) {
  let sum = 0;
  for (const [A, B] of pairs) {
    const a = px(imgs[assign[A.face]], A.s, A.t);
    const b = px(imgs[assign[B.face]], B.s, B.t);
    sum += Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2]);
  }
  return sum / (pairs.length * 3);
}

const perms = [];
(function permute(rest, acc) {
  if (!rest.length) return perms.push(acc.slice());
  for (let i = 0; i < rest.length; i++) permute([...rest.slice(0, i), ...rest.slice(i + 1)], [...acc, rest[i]]);
})(SLOTS, []);

const ranked = perms.map((p) => {
  const assign = Object.fromEntries(SLOTS.map((s, i) => [s, p[i]]));
  return { assign, score: score(assign) };
}).sort((a, b) => a.score - b.score);

const identity = Object.fromEntries(SLOTS.map((s) => [s, s]));
console.log(`as arranged on disk: ${score(identity).toFixed(2)}\n`);
console.log('best assignments by mean |edge difference| per channel (0-255):');
for (const r of ranked.slice(0, 5)) {
  const desc = SLOTS.map((s) => `${FROM[r.assign[s]].padEnd(6)}->${s}`).join('  ');
  console.log(`  ${r.score.toFixed(2)}  ${desc}`);
}

// The floor: adjacent columns WITHIN a face. A seam score near this is not a
// seam at all, it is compression noise.
let f = 0, n = 0;
for (const s of SLOTS) {
  const b = imgs[s];
  for (let y = 0; y < N; y++) for (let x = 0; x < N - 1; x++) {
    const i = (y * N + x) * 3, j = i + 3;
    f += Math.abs(b[i] - b[j]) + Math.abs(b[i+1] - b[j+1]) + Math.abs(b[i+2] - b[j+2]);
    n += 3;
  }
}
console.log(`\nadjacent-column floor within a face: ${(f / n).toFixed(2)}`);
