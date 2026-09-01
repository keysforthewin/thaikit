#!/usr/bin/env node
/**
 * Author a ground DECAL prop: one flat quad wearing its top face, rectified out
 * of the plate.
 *
 * The third of the flat-quad routes. author-tile.mjs composites the road and soi
 * pieces from regions.mjs; author-flat-tile.mjs ships a seamless top-down ground
 * swatch that was ALREADY an albedo. This one handles the small flush props --
 * a manhole cover, a gully grate -- whose plates are three-quarter hero shots on
 * a studio backdrop under `thai-street-photoreal-v1`. Their plate is NOT an
 * albedo, so it is rectified to top-down first, and that rectification is the
 * whole of the work here.
 *
 * Rectifying rather than keying is what makes the silhouette ANALYTIC. A keyed
 * plate carries whatever the flood fill happened to reach; a rectified one has
 * its outline by construction -- the inscribed circle for a disc, the whole
 * rectangle for a slab -- so there is no rim speckle to dilate away and no
 * enclosed pocket to argue about.
 *
 * What a single three-quarter plate cannot give, it does not invent: see the
 * per-prop notes below, each of which records what was measured and what was
 * reconstructed from the prop's own rotational symmetry.
 *
 * Usage:
 *   node scripts/tilekit/author-decal-prop.mjs --id cast-iron-manhole-cover
 *   node scripts/tilekit/author-decal-prop.mjs --all
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import { readRegistry, workDir, modelDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';

const SIZE = 512;
const WEBP_QUALITY = 92;

/**
 * The measured geometry of each prop's top face in its own plate, in pixels.
 *
 * These are readings, not settings. The disc ellipses come from the segmented
 * silhouette (`cx`, `a` exactly, from the horizontal extremes) plus the top-face
 * far edge; the slab corners were read off a 64 px grid overlay. Nothing here
 * may be nudged to make a picture look better -- a number that stops matching
 * the plate is how a rectification comes to disagree with the prop it rectifies.
 */
const PLATES = {
  'cast-iron-manhole-cover': {
    kind: 'disc',
    // The cover's own top face. It rectifies to a true circle: the concentric
    // rings close, and the two square lifting recesses come out square and level.
    cover: { cx: 513, cy: 430, a: 365, b: 262 },
    // The seating ring's outer top face. Pulled just inside the silhouette's
    // widest circle (a 466.5, top edge y 163): sampling AT the outline lets
    // bilinear reach past the flange, and the backdrop bleeding into the outer
    // bin is what turned a rusted iron collar into a pale grey band.
    ring: { cx: 511, cy: 497, a: 462, b: 330 },
    // So the cover is 0.78 of the assembly, and the declared 0.65 m outer
    // diameter makes it a 0.51 m cover -- an ordinary municipal size.
    //
    // The ring's top face is only partly readable, and the annulus is swept from
    // the arc where it IS -- the NEAR side, sin(theta) > 0, below the centre in
    // image rows.
    //
    // Which side that is, is the one thing here that is easy to get backwards,
    // and getting it backwards costs a flat taupe band that looks like a
    // rendering fault. A part standing PROUD projects upward in the image, so
    // the cover hides the ring's FAR annulus behind itself and uncovers the NEAR
    // one. The plate says so in numbers: the ring's far edge lands at row 167
    // and the cover's at 168, so a single pixel of ring survives at the top --
    // while at the bottom the cover ends at row 692 and the ring's top face runs
    // on to 827, which is 135 rows of real, face-on flange.
    //
    // The two EXTREMES at 3 and 9 o'clock are excluded as well: there the top
    // face is edge-on and a texel straddles the flange and the backdrop, which
    // shows up as two pale wedges biting into the rim.
    //
    // The radial profile of what is left is swept, imposing only the rotational
    // symmetry a turned ring already has. Anything with genuine azimuthal detail
    // out there -- lettering, a keyway -- would need a top-down plate, and this
    // would smear it into a band.
    annulusArc: [(25 * Math.PI) / 180, (155 * Math.PI) / 180],
  },
  'kerbside-storm-drain-grate': {
    kind: 'slab',
    // Corners of the concrete surround's top face, read off the grid overlay.
    // Order is (0,0) (1,0) (1,1) (0,1): u runs along the SHORT side, v the long.
    corners: [[70, 432], [468, 180], [958, 470], [556, 762]],
  },
};

/** Solve a linear system by Gauss-Jordan with partial pivoting. */
function solveLinear(A, b) {
  const n = b.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let c = 0; c < n; c++) {
    let p = c;
    for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[p][c])) p = r;
    [M[c], M[p]] = [M[p], M[c]];
    for (let r = 0; r < n; r++) {
      if (r === c) continue;
      const f = M[r][c] / M[c][c];
      for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k];
    }
  }
  return M.map((row, i) => row[n] / row[i]);
}

/** Homography taking the unit square to four image points. */
export function homography(pts) {
  const src = [[0, 0], [1, 0], [1, 1], [0, 1]];
  const A = [], b = [];
  for (let i = 0; i < 4; i++) {
    const [u, v] = src[i], [x, y] = pts[i];
    A.push([u, v, 1, 0, 0, 0, -u * x, -v * x]); b.push(x);
    A.push([0, 0, 0, u, v, 1, -u * y, -v * y]); b.push(y);
  }
  const h = solveLinear(A, b);
  return [[h[0], h[1], h[2]], [h[3], h[4], h[5]], [h[6], h[7], 1]];
}

/**
 * The rectangle's true side ratio, recovered from the plate.
 *
 * With the principal point at the image centre and one unknown focal length, the
 * two edge directions being perpendicular fixes f, and the metric constraints
 * then give the ratio. Raw pixel edge lengths cannot do this: the two axes are
 * foreshortened by different amounts, which is exactly how a declared footprint
 * comes to be believed when the plate has been contradicting it all along.
 *
 * It is WEAK evidence when the plate is near-orthographic -- a parallelogram is
 * consistent with any aspect at some tilt -- so callers must treat the number as
 * a band and say so, never as a measurement to three decimal places.
 */
export function aspectFromQuad(pts, W, H) {
  const M = homography(pts);
  const cx = W / 2, cy = H / 2;
  const col = (j) => [M[0][j], M[1][j], M[2][j]];
  const [h1, h2] = [col(0), col(1)];
  const a = [h1[0] - cx * h1[2], h1[1] - cy * h1[2], h1[2]];
  const c = [h2[0] - cx * h2[2], h2[1] - cy * h2[2], h2[2]];
  const f2 = -(a[0] * c[0] + a[1] * c[1]) / (a[2] * c[2]);
  if (!(f2 > 0)) return { aspect: null, focalPx: null };
  const n1 = (a[0] * a[0] + a[1] * a[1]) / f2 + a[2] * a[2];
  const n2 = (c[0] * c[0] + c[1] * c[1]) / f2 + c[2] * c[2];
  return { aspect: Math.sqrt(n1 / n2), focalPx: Math.sqrt(f2) };
}

function bilinear(px, W, H, C, x, y) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const fx = x - x0, fy = y - y0;
  const at = (xx, yy) => ((Math.min(H - 1, Math.max(0, yy)) * W + Math.min(W - 1, Math.max(0, xx))) * C);
  const out = [0, 0, 0];
  for (let ch = 0; ch < 3; ch++) {
    const v00 = px[at(x0, y0) + ch], v10 = px[at(x0 + 1, y0) + ch];
    const v01 = px[at(x0, y0 + 1) + ch], v11 = px[at(x0 + 1, y0 + 1) + ch];
    out[ch] = (v00 * (1 - fx) + v10 * fx) * (1 - fy) + (v01 * (1 - fx) + v11 * fx) * fy;
  }
  return out;
}

/** Inverse-warp a plate quad into an RGBA buffer, fully opaque. */
async function rectifySlab(src, corners, outW, outH) {
  const img = sharp(src);
  const { width: W, height: H, channels: C } = await img.metadata().then(async (m) => ({ ...m, channels: 3 }));
  const px = await img.removeAlpha().raw().toBuffer();
  const M = homography(corners);
  const out = Buffer.alloc(outW * outH * 4, 255);
  for (let j = 0; j < outH; j++) {
    for (let i = 0; i < outW; i++) {
      const u = (i + 0.5) / outW, v = (j + 0.5) / outH;
      const w = M[2][0] * u + M[2][1] * v + M[2][2];
      const x = (M[0][0] * u + M[0][1] * v + M[0][2]) / w;
      const y = (M[1][0] * u + M[1][1] * v + M[1][2]) / w;
      const [r, g, b] = bilinear(px, W, H, C, x, y);
      const o = (j * outW + i) * 4;
      out[o] = r; out[o + 1] = g; out[o + 2] = b;
    }
  }
  return out;
}

/**
 * Sample an ellipse in the plate as a top-down disc of radius `rNorm` within the
 * output square. Resizing an ellipse's bounding box to a square is what
 * rectifies a circle seen at an elevation.
 */
function sampleEllipse(px, W, H, C, e, x, y, rNorm, size) {
  // (x, y) are output pixels; map to normalised disc coords, then to the ellipse.
  const nx = ((x + 0.5) / size * 2 - 1) / rNorm;
  const ny = ((y + 0.5) / size * 2 - 1) / rNorm;
  if (nx * nx + ny * ny > 1) return null;
  return bilinear(px, W, H, C, e.cx + nx * e.a, e.cy + ny * e.b);
}

async function rectifyDisc(src, plate) {
  const img = sharp(src);
  const { width: W, height: H } = await img.metadata();
  const px = await img.removeAlpha().raw().toBuffer();
  const C = 3;
  const S = SIZE;
  const out = Buffer.alloc(S * S * 4);
  const coverR = plate.cover.a / plate.ring.a;

  // The ring annulus, as the radial profile of the far arc, swept. Binned by
  // radius so the flange's own banding survives the sweep; a median across the
  // arc rather than a mean so one tar streak cannot set the tone of a whole ring.
  const BINS = 96;
  const [t0, t1] = plate.annulusArc;
  const median = (arr) => { const a = [...arr].sort((p, q) => p - q); return a[a.length >> 1]; };
  const ring = [];
  for (let bi = 0; bi < BINS; bi++) {
    // Held just inside the flange for the same reason the semi-axes are: the
    // outermost bin must not be allowed to reach the backdrop.
    const r = coverR + ((bi + 0.5) / BINS) * (0.985 - coverR);
    const ch = [[], [], []];
    for (let k = 0; k < 256; k++) {
      const th = t0 + ((k + 0.5) / 256) * (t1 - t0);
      const sm = bilinear(px, W, H, C,
        plate.ring.cx + r * Math.cos(th) * plate.ring.a,
        plate.ring.cy + r * Math.sin(th) * plate.ring.b);
      for (let c = 0; c < 3; c++) ch[c].push(sm[c]);
    }
    ring.push(ch.map(median));
  }

  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const o = (y * S + x) * 4;
      const dx = (x + 0.5) / S * 2 - 1, dy = (y + 0.5) / S * 2 - 1;
      const r = Math.hypot(dx, dy);
      if (r > 1) { out[o + 3] = 0; continue; }
      let rgb;
      if (r <= coverR) {
        // The cover, from its OWN ellipse -- which is what removes the parallax
        // of a part standing proud of the ring. Sampling both off one ellipse
        // puts the cover a tenth of a radius off centre.
        rgb = sampleEllipse(px, W, H, C, plate.cover, x, y, coverR, S);
      } else {
        const bi = Math.min(BINS - 1, Math.floor(((r - coverR) / (1 - coverR)) * BINS));
        rgb = ring[bi];
      }
      out[o] = rgb[0]; out[o + 1] = rgb[1]; out[o + 2] = rgb[2]; out[o + 3] = 255;
    }
  }
  return { buf: out, size: S, coverR };
}

function spec(asset, { w, d }, kind, provenance) {
  return {
    schemaVersion: 3,
    objectId: asset.id,
    objectName: asset.name,
    subject: 'prop',
    coordinateFrame: {
      up: '+Y',
      origin: 'base-center',
      units: 'metres',
      note: 'The quad lies just above the ground plane; the origin is its centre so it drops onto a road tile.',
    },
    scale: { width: w, height: asset.scale.declared.h, depth: d },
    performanceBudget: {
      targetTriangles: asset.targetTriangles,
      maxDrawCalls: asset.maxDrawCalls,
      maxMaterials: asset.maxMaterials,
      maxUniqueGeometries: asset.maxUniqueGeometries,
    },
    materials: [
      {
        id: 'surface',
        name: 'Top face',
        textureless: { declared: false },
        color: '#ffffff',
        roughness: 1,
        metalness: 0,
        referencePbr: {
          usable: true,
          confidence: 0.85,
          estimatedFidelity: 0.85,
          verdict: 'pass',
          source: provenance,
          maps: { albedo: { url: 'maps/albedo.webp', channel: 'albedo', source: 'plate-rectified' } },
        },
        textureProjection: { repeat: [1, 1], anisotropy: 8 },
      },
    ],
    componentTree: [
      {
        id: 'deck',
        name: 'Decal face',
        primitive: 'plane-card',
        material: 'surface',
        transform: { position: [0, 0, 0], rotation: [-90, 0, 0], scale: [w, d, 1] },
      },
    ],
    runtimeContract: {
      pivots: ['root'],
      sockets: [],
      destructionGroups: [],
      note:
        'A flush ground fitting. It has no moving parts, so one root pivot is the whole of its ' +
        'contract -- and nothing attaches to it, so it has no sockets.',
    },
  };
}

function factory(asset, { w, d }, kind) {
  // A decal sitting exactly at y=0 z-fights the road tile under it, which is the
  // same defect as two coincident co-facing surfaces inside one prop. 5 mm is
  // under the 0.30 m step height a character controller cares about and well
  // clear of depth-buffer precision at this range.
  const LIFT = 0.005;
  const alpha = kind === 'disc'
    ? `
  // The cover is round and its quad is square, so the corners are cut by the
  // albedo's own alpha. alphaTest rather than transparent: a cutout needs no
  // depth sort, and a transparent decal over a lightmapped road is exactly the
  // sort that goes wrong.
  material.alphaTest = 0.5;
  material.transparent = false;
`
    : '';
  return `import * as THREE from 'three';

/**
 * ${asset.name} — a flat ground decal.
 *
 * Two triangles, one geometry, one material. The top face is rectified out of
 * the reference plate and painted; nothing is built. It sits ${LIFT * 1000} mm proud of
 * the ground so it does not z-fight the road tile it is dropped onto.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The map is recorded as a bare filename because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL, and a relative path would resolve against whatever
   * document is hosting it instead. Both hosts derive this from the module URL.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  receiveShadow?: boolean;
};

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = '${asset.id}';

  const geometry = new THREE.PlaneGeometry(${w}, ${d}, 1, 1);
  geometry.rotateX(-Math.PI / 2);

  const material = new THREE.MeshStandardMaterial({
    roughness: 1,
    metalness: 0,
    // Left white on purpose: the albedo map carries the colour, and tinting it
    // would fight the tone measured off the plate.
    color: 0xffffff,
  });
${alpha}
  // Behind the baseUrl guard so the Node-side gates -- promote's headless
  // construction, derive-colliders, check-coplanar -- can build this factory in a
  // runtime with no DOM, where ImageLoader throws.
  const base = options.baseUrl;
  if (base) {
    const albedo = new THREE.TextureLoader().load(new URL('maps/albedo.webp', base).href);
    albedo.colorSpace = THREE.SRGBColorSpace;
    // Clamped, not repeated: this is one fitting at a fixed size, and a decal
    // that tiles when a level builder scales it would repeat the cover.
    albedo.wrapS = THREE.ClampToEdgeWrapping;
    albedo.wrapT = THREE.ClampToEdgeWrapping;
    albedo.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = albedo;
    material.needsUpdate = true;
  }

  const deck = new THREE.Mesh(geometry, material);
  deck.name = 'deck';
  deck.position.y = ${LIFT};
  deck.receiveShadow = options.receiveShadow ?? true;
  // A flush ground fitting casting a shadow onto the road it lies in is pure cost.
  deck.castShadow = false;
  root.add(deck);

  root.userData.sculptRuntime = {
    nodes: 2,
    pivots: [{ name: 'root', object: 'root' }],
    sockets: [],
    colliders: [],
    destructionGroups: [],
  };

  return root;
}

/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * \`createObjectModel\` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * \`spec\` has never been passed by any caller, so this is the honest signature,
 * and it is what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}

export default createObjectModel;
`;
}

async function authorOne(asset) {
  const plate = PLATES[asset.id];
  const dir = workDir(asset.id);
  await fs.mkdir(path.join(dir, 'src'), { recursive: true });
  await fs.mkdir(path.join(dir, 'maps'), { recursive: true });
  const src = path.join(modelDir(asset.id), 'preview.jpg');
  const { width: PW, height: PH } = await sharp(src).metadata();

  let buf, outW, outH, footprint, provenance, measured = {};

  if (plate.kind === 'disc') {
    const r = await rectifyDisc(src, plate);
    buf = r.buf; outW = r.size; outH = r.size;
    footprint = { w: asset.scale.declared.w, d: asset.scale.declared.w };
    measured = { coverFraction: Number(r.coverR.toFixed(3)), coverDiameterM: Number((asset.scale.declared.w * r.coverR).toFixed(3)) };
    provenance =
      "the asset's own plate, rectified to top-down: the cover from its own top-face ellipse, " +
      'the seating ring annulus as the radial profile of the near arc where its top face is ' +
      'face-on and unoccluded, swept about the ring axis';
  } else {
    const { aspect, focalPx } = aspectFromQuad(plate.corners, PW, PH);
    // The solve gives a RATIO, so the absolute size still comes from the
    // declaration; the width is the one of the two the plate does not contradict.
    // Two decimals, because that is the precision the estimate supports -- the
    // ratio moves by a tenth under a few pixels of corner-read error, and
    // printing a third decimal would dress that up as a measurement.
    const w = asset.scale.declared.w;
    const d = Number((w / aspect).toFixed(2));
    // Rectify to the SHIPPED aspect, not the solved one, so the quad and its
    // texture can never disagree about the shape of the thing they describe.
    outW = SIZE; outH = Math.round((SIZE * d) / w);
    buf = await rectifySlab(src, plate.corners, outW, outH);
    footprint = { w, d };
    measured = { aspectFromPlate: Number(aspect.toFixed(3)), longOverShort: Number((1 / aspect).toFixed(3)), focalPx: Math.round(focalPx) };
    provenance = "the asset's own plate, rectified to top-down by a four-corner homography on the surround's top face";
  }

  const albedoPath = path.join(dir, 'maps/albedo.webp');
  await sharp(buf, { raw: { width: outW, height: outH, channels: 4 } })
    .webp({ quality: WEBP_QUALITY, alphaQuality: 100 }).toFile(albedoPath);

  const specPath = path.join(dir, 'object-sculpt-spec.json');
  await fs.writeFile(specPath, `${JSON.stringify(spec(asset, footprint, plate.kind, provenance), null, 2)}\n`);
  const tsPath = path.join(dir, 'src/createObjectModel.ts');
  await fs.writeFile(tsPath, factory(asset, footprint, plate.kind));

  return { id: asset.id, kind: plate.kind, map: `${outW}x${outH}`, footprint, measured, albedo: toRepoRelative(albedoPath) };
}

async function main() {
  const args = parseArgs();
  const registry = await readRegistry();
  const ids = args.all ? Object.keys(PLATES) : args.id ? [args.id] : null;
  if (!ids) return fail('need --id <asset> or --all');

  const results = [];
  for (const id of ids) {
    if (!PLATES[id]) return fail(`${id} has no measured plate geometry in author-decal-prop.mjs`);
    const asset = registry.assets.find((a) => a.id === id);
    if (!asset) return fail(`no asset with id ${id}`);
    if (asset.status.image !== 'done') return fail(`${id} has no reference plate`);
    const r = await authorOne(asset);
    log(`${r.id}: ${r.kind}, map ${r.map}, footprint ${r.footprint.w} x ${r.footprint.d} m, ${JSON.stringify(r.measured)}`);
    results.push(r);
  }
  ok({ count: results.length, props: results });
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((err) => fail(err));
