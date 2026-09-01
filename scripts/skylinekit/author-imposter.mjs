#!/usr/bin/env node
/**
 * Author a skyline imposter: key its plate to alpha, and write the sculpt spec
 * and the Three.js factory for the one upright quad that carries it.
 *
 * A skyline imposter is NOT a building model, and this is the second deliberate
 * exception to the img2threejs route after the road tiles. The deliverable is
 * one quad -- 2 triangles, 1 draw call, 1 material, 1 geometry -- textured with
 * the asset's straight-on telephoto elevation plate, with the flat grey backdrop
 * keyed to alpha, placed 150-300 m out beyond the playable area and yawed each
 * frame to face the camera. Nothing is reconstructed, so there is no Meshy
 * reference mesh and no review loop; the plate IS the model.
 *
 * Keying is a FLOOD FILL from the border, not a global colour key. A global key
 * would punch every mid-grey window and concrete panel out of the facade; the
 * flood only reaches backdrop that is connected to the outside of the frame,
 * which is exactly the sky, the ground and any opening that is open to the sky
 * (the elephant's legs, the slot between the twin towers). The backdrop colour
 * is MEASURED from the border ring, never assumed: these plates come back
 * anywhere from 128 to 165 grey.
 *
 * Width follows the plate. The declared height is the real building's and is
 * kept; the quad's width is height x the keyed silhouette's aspect, because a
 * quad at the declared width would stretch the texture. When that departs from
 * the declared width by more than the asset's tolerance the declaration is
 * corrected through edit-assets.mjs with the arithmetic in notes, and
 * budgetClass is re-pinned to small because edit-assets reclassifies on resize.
 *
 * Usage:
 *   node scripts/skylinekit/author-imposter.mjs --id <id> [--max-edge 2048]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';

import sharp from 'sharp';
import { readRegistry, modelDir, workDir, toRepoRelative, REPO_ROOT } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';

/** Colour distance (max channel delta) at which a pixel is still pure backdrop. */
const KEY_SOLID = 10;
/** ...and beyond which it is fully building. Between the two is the anti-aliased edge. */
const KEY_EDGE = 34;
/** An enclosed backdrop pocket must cover this fraction of the frame... */
const POCKET_MIN = 0.0025;
/** ...and sit this close to the backdrop on average, or it is content (a blank screen). */
const POCKET_FLAT = 3;
/** Rings of soft rim dilated out from the keyed region. */
const RIM_PX = 2;
/** Border ring sampled for the backdrop colour. */
const RING = 8;

async function keyPlate(src, dest, maxEdge) {
  const { data, info } = await sharp(src).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const W = info.width, H = info.height, C = 4;

  // Backdrop colour from the border ring.
  const sum = [0, 0, 0]; let n = 0;
  for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
    if (x >= RING && y >= RING && x < W - RING && y < H - RING) continue;
    const i = (y * W + x) * C;
    sum[0] += data[i]; sum[1] += data[i + 1]; sum[2] += data[i + 2]; n++;
  }
  const bg = sum.map((v) => v / n);

  const dist = new Float32Array(W * H);
  for (let p = 0; p < W * H; p++) {
    const i = p * C;
    dist[p] = Math.max(Math.abs(data[i] - bg[0]), Math.abs(data[i + 1] - bg[1]), Math.abs(data[i + 2] - bg[2]));
  }

  // Flood from every border pixel through SOLID backdrop only. The flood must
  // not walk through the soft band: a light-grey podium that touches the ground
  // line sits within the edge threshold of the backdrop and the first version,
  // which traversed anything softer than KEY_EDGE, keyed the twin towers' whole
  // podium into a speckle. The anti-aliased rim is added afterwards as a
  // two-pixel dilation of what the flood reached, which is as far as an edge
  // blend ever extends.
  const reach = new Uint8Array(W * H);
  const stack = [];
  const push = (p) => { if (!reach[p] && dist[p] < KEY_SOLID) { reach[p] = 1; stack.push(p); } };
  const drain = () => {
    while (stack.length) {
      const p = stack.pop();
      const x = p % W, y = (p - x) / W;
      if (x > 0) push(p - 1);
      if (x < W - 1) push(p + 1);
      if (y > 0) push(p - W);
      if (y < H - 1) push(p + W);
    }
  };
  for (let x = 0; x < W; x++) { push(x); push((H - 1) * W + x); }
  for (let y = 0; y < H; y++) { push(y * W); push(y * W + W - 1); }
  drain();

  // Enclosed pockets. The elephant's belly opening is sky in the real building,
  // but the plate draws a base band beneath it, so the border flood never gets
  // in and it would ship as a grey matte. A pocket is a component of unreached
  // solid-backdrop pixels that is both large (>= POCKET_MIN of the frame) and
  // FLAT (mean distance < POCKET_FLAT): the elephant's measures 1.0, and the
  // mall's blank LED screen -- which must stay -- measures 63.
  const seen = new Uint8Array(W * H);
  let pockets = 0;
  for (let start = 0; start < W * H; start++) {
    if (reach[start] || seen[start] || dist[start] >= KEY_SOLID) continue;
    const comp = []; const todo = [start]; seen[start] = 1; let dsum = 0;
    while (todo.length) {
      const p = todo.pop(); comp.push(p); dsum += dist[p];
      const x = p % W, y = (p - x) / W;
      for (const q of [x > 0 ? p - 1 : -1, x < W - 1 ? p + 1 : -1, y > 0 ? p - W : -1, y < H - 1 ? p + W : -1]) {
        if (q >= 0 && !seen[q] && !reach[q] && dist[q] < KEY_SOLID) { seen[q] = 1; todo.push(q); }
      }
    }
    if (comp.length >= POCKET_MIN * W * H && dsum / comp.length < POCKET_FLAT) {
      pockets++;
      for (const p of comp) reach[p] = 1;
    }
  }

  // The soft rim: RIM_PX rings of dilation, alpha from colour distance.
  const soft = new Float32Array(W * H).fill(-1);
  let frontier = [];
  for (let p = 0; p < W * H; p++) if (reach[p]) frontier.push(p);
  for (let ring = 0; ring < RIM_PX; ring++) {
    const next = [];
    for (const p of frontier) {
      const x = p % W, y = (p - x) / W;
      for (const q of [x > 0 ? p - 1 : -1, x < W - 1 ? p + 1 : -1, y > 0 ? p - W : -1, y < H - 1 ? p + W : -1]) {
        if (q < 0 || reach[q] || soft[q] >= 0) continue;
        soft[q] = Math.min(1, Math.max(0, (dist[q] - KEY_SOLID) / (KEY_EDGE - KEY_SOLID)));
        next.push(q);
      }
    }
    frontier = next;
  }

  // Alpha and de-matte. An edge pixel is a blend of building and backdrop; with
  // its coverage known, the building colour underneath is recoverable and the
  // grey fringe that would otherwise halo the silhouette is not shipped.
  let x0 = W, x1 = -1, y0 = H, y1 = -1, keyed = 0;
  for (let p = 0; p < W * H; p++) {
    const i = p * C;
    let a = 1;
    if (reach[p]) { a = 0; keyed++; }
    else if (soft[p] >= 0) {
      a = soft[p];
      if (a > 0 && a < 1) {
        for (let c = 0; c < 3; c++) {
          data[i + c] = Math.max(0, Math.min(255, Math.round((data[i + c] - bg[c] * (1 - a)) / a)));
        }
      }
    }
    data[i + 3] = Math.round(a * 255);
    // Bounds from HALF coverage, not any coverage: a plate's backdrop carries
    // scattered single-pixel noise up to ~9 levels off, and one speck at the
    // frame edge would otherwise widen the quad by a third.
    if (a >= 0.5) {
      const x = p % W, y = (p - x) / W;
      if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
    }
  }
  if (x1 < 0) throw new Error('nothing survived the key: the whole plate reads as backdrop');

  const pad = 2;
  x0 = Math.max(0, x0 - pad); y0 = Math.max(0, y0 - pad);
  x1 = Math.min(W - 1, x1 + pad); y1 = Math.min(H - 1, y1 + pad);
  const cw = x1 - x0 + 1, ch = y1 - y0 + 1;
  const scale = Math.min(1, maxEdge / Math.max(cw, ch));

  await fs.mkdir(path.dirname(dest), { recursive: true });
  const out = await sharp(data, { raw: { width: W, height: H, channels: 4 } })
    .extract({ left: x0, top: y0, width: cw, height: ch })
    .resize({ width: Math.round(cw * scale), height: Math.round(ch * scale), fit: 'fill', kernel: 'lanczos3' })
    .webp({ quality: 88, alphaQuality: 90, effort: 5 })
    .toFile(dest);

  return {
    backdrop: bg.map((v) => Math.round(v)),
    pockets,
    keyedFraction: keyed / (W * H),
    bbox: { x0, y0, x1, y1 },
    aspect: cw / ch,
    texture: { width: out.width, height: out.height, bytes: out.size },
  };
}

function spec(asset, quad, key, mapFile) {
  return {
    schemaVersion: 3,
    objectId: asset.id,
    objectName: asset.name,
    subject: 'prop',
    coordinateFrame: {
      up: '+Y',
      origin: 'base-center',
      units: 'metres',
      note: 'The quad stands upright on y=0, centred on x, in the XY plane facing +Z; the mesh yaws each frame to face the camera.',
    },
    scale: { width: quad.w, height: quad.h, depth: 0.1 },
    performanceBudget: {
      targetTriangles: 2,
      maxDrawCalls: 1,
      maxMaterials: 1,
      maxUniqueGeometries: 1,
    },
    materials: [
      {
        id: 'plate',
        name: 'Elevation plate',
        // NOT textureless, and the documented exception: the texture is the whole
        // prop. Nothing is synthesised at runtime; one authored RGBA map ships.
        textureless: { declared: false },
        color: '#ffffff',
        roughness: 1,
        metalness: 0,
        unlit: true,
        referencePbr: {
          usable: true,
          confidence: 0.95,
          estimatedFidelity: 0.95,
          verdict: 'pass',
          source: `${toRepoRelative(path.join(modelDir(asset.id), 'imposter.png'))} keyed to alpha by flood fill from the border against measured backdrop rgb(${key.backdrop.join(',')})`,
          maps: {
            albedo: { url: mapFile, channel: 'albedo', source: 'skylinekit-key' },
          },
        },
        textureProjection: { repeat: [1, 1], anisotropy: 8 },
      },
    ],
    componentTree: [
      {
        id: 'card',
        name: 'Imposter card',
        primitive: 'plane-card',
        material: 'plate',
        transform: { position: [0, quad.h / 2, 0], rotation: [0, 0, 0], scale: [quad.w, quad.h, 1] },
        actionProfile: {},
      },
    ],
    runtimeContract: {
      pivots: ['root'],
      sockets: [],
      destructionGroups: [],
      note: 'A skyline imposter is scenery beyond reach. It has no moving parts and nothing attaches to it, so one root pivot is the whole contract; collider none, because nothing in play can reach it.',
    },
    imposter: {
      billboard: 'yaw',
      plate: toRepoRelative(path.join(modelDir(asset.id), 'imposter.png')),
      key: { backdrop: key.backdrop, solidBelow: KEY_SOLID, edgeAbove: KEY_EDGE, keyedFraction: Number(key.keyedFraction.toFixed(4)), enclosedPockets: key.pockets },
      silhouette: { bbox: key.bbox, aspect: Number(key.aspect.toFixed(4)) },
      texture: key.texture,
    },
  };
}

function factory(asset, quad, mapFile) {
  const w = quad.w.toFixed(3), h = quad.h.toFixed(3);
  return `import * as THREE from 'three';

/**
 * ${asset.name} — a skyline imposter.
 *
 * One upright quad carrying the asset's straight-on elevation plate, keyed to
 * alpha. Two triangles, one geometry, one material. It stands ${h} m tall and
 * ${w} m wide (height is the real building's; width follows the plate's keyed
 * silhouette so the texture is never stretched), and it yaws every frame to
 * face the camera so it reads the same from any direction on the horizon.
 *
 * Unlit on purpose: the plate was shot as flat overcast albedo, and a lit quad
 * facing the camera would brighten and darken with the sun's azimuth in a way
 * a photograph of a building never does. It still takes scene fog, which is
 * what sells distance.
 */
export type ProceduralModelOptions = {
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The map is recorded as a bare filename because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Both hosts derive this from the module URL. With no
   * base (the Node-side probes) the quad ships untextured rather than throwing.
   */
  baseUrl?: string;
  textureAnisotropy?: number;
  /** Yaw the card to face the camera each frame. Default true. */
  billboard?: boolean;
};

const WIDTH = ${w};
const HEIGHT = ${h};

export function createObjectModel(
  _spec?: unknown,
  options: ProceduralModelOptions = {},
): THREE.Group {
  const root = new THREE.Group();
  root.name = '${asset.id}';

  const geometry = new THREE.PlaneGeometry(WIDTH, HEIGHT, 1, 1);
  geometry.translate(0, HEIGHT / 2, 0);

  const material = new THREE.MeshBasicMaterial({
    color: 0xffffff,
    // Alpha test, not blending: a cut-out needs no sorting against the rest of
    // the skyline and writes depth like the solid it stands in for.
    alphaTest: 0.5,
    side: THREE.DoubleSide,
    fog: true,
  });

  const base = options.baseUrl;
  if (base) {
    const texture = new THREE.TextureLoader().load(new URL(${JSON.stringify(mapFile)}, base).href);
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.wrapS = THREE.ClampToEdgeWrapping;
    texture.wrapT = THREE.ClampToEdgeWrapping;
    texture.anisotropy = Math.max(1, Math.round(options.textureAnisotropy ?? 8));
    material.map = texture;
    material.needsUpdate = true;
  }

  const card = new THREE.Mesh(geometry, material);
  card.name = 'card';
  card.castShadow = false;
  card.receiveShadow = false;
  root.add(card);

  if (options.billboard ?? true) {
    const camPos = new THREE.Vector3();
    const selfPos = new THREE.Vector3();
    const parentQuat = new THREE.Quaternion();
    const yawQuat = new THREE.Quaternion();
    const Y = new THREE.Vector3(0, 1, 0);
    card.onBeforeRender = (_renderer, _scene, camera) => {
      camera.getWorldPosition(camPos);
      card.getWorldPosition(selfPos);
      const yaw = Math.atan2(camPos.x - selfPos.x, camPos.z - selfPos.z);
      yawQuat.setFromAxisAngle(Y, yaw);
      if (card.parent) {
        card.parent.getWorldQuaternion(parentQuat).invert();
        yawQuat.premultiply(parentQuat);
      }
      card.quaternion.copy(yawQuat);
      // onBeforeRender fires after the frame's matrix pass, so the new yaw has
      // to be pushed into matrixWorld by hand to be drawn this frame.
      card.updateMatrixWorld(true);
    };
  }

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

async function main() {
  const args = parseArgs();
  const id = args.id;
  if (!id) return fail('need --id');
  const maxEdge = Number(args['max-edge'] ?? 2048);

  const registry = await readRegistry();
  let asset = registry.assets.find((a) => a.id === id);
  if (!asset) return fail(`no asset with id ${id}`);
  if (!asset.tags.includes('imposter')) return fail(`${id} is not tagged imposter; this route is for skyline imposters only`);

  const plate = path.join(modelDir(id), 'imposter.png');
  try { await fs.access(plate); } catch { return fail(`${toRepoRelative(plate)} is missing: the raw plate is the texture and must be kept beside the asset`); }

  const work = workDir(id);
  const mapFile = 'maps/albedo.webp';
  const key = await keyPlate(plate, path.join(work, mapFile), maxEdge);
  log(`key    : backdrop rgb(${key.backdrop.join(',')}), ${(key.keyedFraction * 100).toFixed(1)}% keyed, ${key.pockets} enclosed pocket(s), silhouette ${key.bbox.x1 - key.bbox.x0 + 1}x${key.bbox.y1 - key.bbox.y0 + 1} px, aspect ${key.aspect.toFixed(3)}`);
  log(`map    : ${toRepoRelative(path.join(work, mapFile))} ${key.texture.width}x${key.texture.height} (${(key.texture.bytes / 1024).toFixed(0)} KB)`);

  // Width follows the plate; height is declared.
  const h = asset.scale.declared.h;
  const w = Math.round(h * key.aspect * 10) / 10;
  const declaredW = asset.scale.declared.w;
  const drift = Math.abs(w - declaredW) / declaredW;
  let corrected = null;
  if (drift > asset.scale.tolerance) {
    const note = `Width corrected from the plate on ${new Date().toISOString().slice(0, 10)}: keyed silhouette aspect ${key.aspect.toFixed(3)} x declared height ${h} m = ${w} m against the listed ${declaredW} m (${(drift * 100).toFixed(0)}% off); the quad carries the plate at true height so its width must follow the plate or the texture stretches.`;
    const notes = `${asset.notes.replace(/\s*Width corrected from the plate on [^]*?texture stretches\./g, '')} ${note}`;
    const editAssets = (edits) => execFileSync('node', [path.join(REPO_ROOT, 'scripts/edit-assets.mjs'), '--json', JSON.stringify(edits)], { stdio: ['ignore', 'pipe', 'inherit'] });
    editAssets([{ id, 'scale.declared.w': w, notes }]);
    // edit-assets reclassifies by size on any resize and only honours budgetClass
    // when it CHANGES in the same edit, so the pin is a second edit. The quad's
    // budget is small's exactly; the 100 m size-derived hero8x asks for nothing.
    editAssets([{ id, budgetClass: 'small' }]);
    corrected = { from: declaredW, to: w, drift };
    log(`scale  : declared width ${declaredW} -> ${w} m (${(drift * 100).toFixed(0)}% off; tolerance ${asset.scale.tolerance * 100}%)`);
    asset = (await readRegistry()).assets.find((a) => a.id === id);
  } else {
    log(`scale  : plate width ${w} m within tolerance of declared ${declaredW} m; declaration kept`);
  }
  const quad = { w: asset.scale.declared.w, h };

  await fs.mkdir(path.join(work, 'src'), { recursive: true });
  const specPath = path.join(work, 'object-sculpt-spec.json');
  const tsPath = path.join(work, 'src/createObjectModel.ts');
  await fs.writeFile(specPath, JSON.stringify(spec(asset, quad, key, mapFile), null, 2) + '\n');
  await fs.writeFile(tsPath, factory(asset, quad, mapFile));
  log(`spec   : ${toRepoRelative(specPath)}`);
  log(`factory: ${toRepoRelative(tsPath)}`);

  return ok({ id, quad, key, corrected, spec: toRepoRelative(specPath), factory: toRepoRelative(tsPath) });
}

main().catch(fail);
