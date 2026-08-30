/**
 * The Blender Cycles lightmap baker.
 *
 * Batch Blender (`blender -b --python`), not the live-session addon: no
 * timers, no socket, a process that ends. On WSL the Windows Blender runs
 * straight from here and reads the repo over \\wsl.localhost, so every path
 * crosses through toBlenderPath(). See bake_lightmap.py for what happens
 * inside; this side prepares the input so node names round-trip, runs it, and
 * swaps the unwrapped vertex data back into the level document.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { toBlenderPath, blenderExe } from '../../lib/blender.mjs';
import { cubeToEquirect } from '../pipeline/sky.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.join(here, 'bake_lightmap.py');

const hexToLinear = (hex) => {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((c) => { const v = c / 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; });
};

/**
 * One node per primitive, uniquely named, so Blender's importer makes one
 * object per material and the exporter hands each back under the same name.
 */
/**
 * One node, one primitive, nothing shared.
 *
 * A lightmap UV set is a position in ONE atlas, so it belongs to a surface at a
 * place in the world -- never to a mesh that several nodes reuse. Stage 1's
 * `dedup({ MESH })` is right for shipping (twelve identical ground tiles have no
 * business being twelve copies of a quad) but it leaves twelve nodes pointing at
 * one primitive, and this map is keyed by NODE. Without the clone below, the
 * swap-back writes twelve different UV sets into the same buffer and the last
 * one wins, so eleven tiles get another tile's lighting. In Blender the same
 * sharing appears as twelve objects on one mesh datablock, which is why
 * `bake_lightmap.py` un-shares them too -- the two halves have to agree.
 *
 * The cost is a handful of duplicated quads in the shipped GLB, which is what
 * correct per-tile lighting is worth.
 */
function splitForBlender(doc) {
  const map = new Map(); // name -> { node, prim }
  const claimed = new Set();
  for (const cell of doc.getRoot().listNodes()) {
    if (!cell.getName().startsWith('cell_')) continue;
    const lod0 = cell.listChildren().find((n) => n.getName() === 'lod0');
    if (!lod0) continue;
    let i = 0;
    for (const source of [...lod0.listChildren()]) {
      const mesh = source.getMesh();
      if (!mesh) continue;
      const prims = mesh.listPrimitives();
      if (prims.length === 1 && !claimed.has(prims[0])) {
        claimed.add(prims[0]);
        source.setName(`lm_${cell.getName().slice(5)}.${i++}`);
        map.set(source.getName(), { node: source, prim: prims[0] });
        continue;
      }
      if (prims.length === 1) {
        // Already spoken for by another node: this one needs its own copy.
        const own = prims[0].clone();
        claimed.add(own);
        const m = doc.createMesh().addPrimitive(own);
        source.setMesh(m);
        source.setName(`lm_${cell.getName().slice(5)}.${i++}`);
        map.set(source.getName(), { node: source, prim: own });
        continue;
      }
      for (const prim of prims) {
        const own = claimed.has(prim) ? prim.clone() : prim;
        claimed.add(own);
        const m = doc.createMesh().addPrimitive(own);
        const n = doc.createNode(`lm_${cell.getName().slice(5)}.${i++}`).setMesh(m).setMatrix(source.getMatrix());
        lod0.addChild(n);
        map.set(n.getName(), { node: n, prim: own });
      }
      lod0.removeChild(source);
      source.dispose();
      // Only if nothing else still points at it -- a deduped mesh can be shared
      // with a node in another cell, and disposing it there would empty that one.
      if (mesh.listParents().every((p) => p.propertyType !== 'Node')) mesh.dispose();
    }
  }
  return map;
}

function runBlender(exe, args, onLine) {
  return new Promise((resolve, reject) => {
    const child = spawn(exe, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    let buf = '';
    let tail = [];
    const feed = (chunk) => {
      buf += chunk;
      let nl;
      while ((nl = buf.indexOf('\n')) >= 0) {
        const line = buf.slice(0, nl).replace(/\r$/, '');
        buf = buf.slice(nl + 1);
        tail.push(line);
        if (tail.length > 40) tail.shift();
        if (line.startsWith('[thaikit]')) onLine(line.slice(10).trim());
      }
    };
    child.stdout.on('data', (d) => feed(d.toString()));
    child.stderr.on('data', (d) => feed(d.toString()));
    child.on('error', reject);
    child.on('close', (code) => (code === 0 ? resolve() : reject(new Error(`blender exited ${code}:\n${tail.join('\n')}`))));
  });
}

export async function bakeWithBlender({ io, doc, bake, skyImages = null, outDir, onProgress }) {
  const exe = await blenderExe();
  if (!exe) throw new Error('no Blender executable found (set THAIKIT_BLENDER_EXE); export with --baker none to skip the lightmap');
  await fs.mkdir(outDir, { recursive: true });

  const map = splitForBlender(doc);
  if (!map.size) throw new Error('no static geometry to bake');
  const inFile = path.join(outDir, 'in.glb');
  await io.write(inFile, doc);
  onProgress?.(`${map.size} static meshes to unwrap and bake`);

  const lm = bake.settings?.lightmap ?? {};
  const moon = bake.lights.find((l) => l.role === 'moon') ?? null;
  const moonDir = moon?.direction ?? [-0.4, -1, -0.3];
  const moonRgb = hexToLinear(moon?.color ?? '#b8c7f2');
  const hemi = bake.settings?.environment?.hemisphere ?? {};
  const skyRgb = hexToLinear(hemi.sky ?? '#8797c2');
  const args = [
    '-b', '--python', toBlenderPath(SCRIPT), '--',
    '--glb', toBlenderPath(inFile), '--out', toBlenderPath(outDir),
    // `--size` is the CEILING now; the atlas is derived from the density below.
    '--size', String(lm.size ?? 4096), '--samples', String(lm.samples ?? 128),
    `--texels-per-meter=${lm.texelsPerMeter ?? 8}`,
    // '=' form: a value starting with '-' (a downward moon) reads as an option otherwise.
    `--moon=${[...moonDir, ...moonRgb, moon?.intensity ?? 0.6].map((n) => n.toFixed(4)).join(',')}`,
    `--sky=${[...skyRgb, hemi.intensity ?? 0.35].map((n) => n.toFixed(4)).join(',')}`,
    `--ground=${hexToLinear(hemi.ground ?? '#2a2620').map((n) => n.toFixed(4)).join(',')}`,
    '--exposure', String(lm.exposure ?? 1),
  ];

  // THE SKY LIGHTS THE BAKE.
  //
  // Until now Cycles saw a flat `Background` colour, so a level with a rich
  // panoramic backdrop baked as though lit by one average tone -- the whole
  // point of an authored sky was absent from the lighting it should dominate.
  //
  // Both picture modes converge on the SAME six faces `prepareSkyImages` has
  // already produced: `panoramic` is resampled there (which is where
  // `base.elevation` and `resolveNadirFade`'s cut are applied) and `cube` ships
  // its authored faces. Folding them back to the equirect Blender's world wants
  // therefore introduces no second interpretation of the source -- the bake is
  // lit by exactly the pixels the player will see behind the geometry.
  const faces = skyImages?.baseFaces ?? null;
  if (faces) {
    const envFile = path.join(outDir, 'env.png');
    // 1024 is plenty: diffuse GI is a low-pass filter, and the world dome is
    // only ever integrated over hemispheres. Paying for 2048 buys nothing.
    const equirect = await cubeToEquirect(faces, { width: 1024 });
    await fs.writeFile(envFile, equirect);
    const skyIntensity = (hemi.intensity ?? 0.35) * (bake.settings?.sky?.base?.intensity ?? 1);
    args.push(`--env=${toBlenderPath(envFile)}`);
    args.push(`--env-strength=${skyIntensity.toFixed(4)}`);
    // NEGATED on purpose. The runtime turns the DOME by +rotationDeg, which
    // moves the image with it; Blender's Mapping node (type POINT) rotates the
    // LOOKUP VECTOR instead, and rotating the lookup by +phi makes the content
    // appear to turn by -phi. glTF's +Y and Blender's +Z agree in handedness
    // under the (x, y, z) -> (x, -z, y) swizzle used for the moon, so the only
    // correction needed is the sign. `thepurge` bakes at rotationDeg 0, so this
    // is derived rather than measured -- check it against a picture the first
    // time a level actually turns its sky.
    args.push(`--env-rotation=${(-(bake.settings?.sky?.base?.rotationDeg ?? 0)).toFixed(3)}`);
    onProgress?.(`world lit by the level's own sky (1024x512 equirect, strength ${skyIntensity.toFixed(3)})`);
  } else {
    onProgress?.('no sky image; the world is the hemisphere ramp');
  }
  onProgress?.(`running ${path.basename(exe)} (up to ${lm.size ?? 4096}², ${lm.texelsPerMeter ?? 8} texels/m, ${lm.samples ?? 128} samples)`);
  await runBlender(exe, args, (line) => onProgress?.(line));

  const outFile = path.join(outDir, 'out.glb');
  const baked = await io.read(outFile);
  baked.setLogger(doc.getLogger());
  const byName = new Map();
  for (const node of baked.getRoot().listNodes()) {
    const mesh = node.getMesh();
    if (mesh) byName.set(node.getName(), mesh);
  }
  const buffer = doc.getRoot().listBuffers()[0];
  const copyAccessor = (acc) => doc.createAccessor().setType(acc.getType()).setArray(acc.getArray().slice()).setNormalized(acc.getNormalized()).setBuffer(buffer);
  let swapped = 0;
  let missing = 0;
  for (const [name, { prim }] of map) {
    const mesh = byName.get(name);
    const src = mesh?.listPrimitives()[0];
    if (!src || !src.getAttribute('TEXCOORD_1')) { missing += 1; continue; }
    prim.setIndices(src.getIndices() ? copyAccessor(src.getIndices()) : null);
    for (const semantic of ['POSITION', 'NORMAL', 'TEXCOORD_0', 'TEXCOORD_1']) {
      const a = src.getAttribute(semantic);
      if (a) prim.setAttribute(semantic, copyAccessor(a));
    }
    const col = src.getAttribute('COLOR_0');
    if (col) {
      // Blender hands colours back as normalized ushort VEC4; the pipeline wants float VEC3.
      const n = col.getCount();
      const out = new Float32Array(n * 3);
      const el = [0, 0, 0, 0];
      for (let i = 0; i < n; i += 1) { col.getElement(i, el); out[i * 3] = el[0]; out[i * 3 + 1] = el[1]; out[i * 3 + 2] = el[2]; }
      prim.setAttribute('COLOR_0', doc.createAccessor().setType('VEC3').setArray(out).setBuffer(buffer));
    } else {
      const n = src.getAttribute('POSITION').getCount();
      prim.setAttribute('COLOR_0', doc.createAccessor().setType('VEC3').setArray(new Float32Array(n * 3).fill(1)).setBuffer(buffer));
    }
    swapped += 1;
  }
  onProgress?.(`${swapped} meshes carry lightmap UVs${missing ? `, ${missing} came back without them` : ''}`);
  if (!swapped) throw new Error('Blender returned no lightmap UVs');
  const lightmapPng = await fs.readFile(path.join(outDir, 'lightmap.png'));
  // The atlas is LDR, so anything brighter than 1 was divided by `range` before
  // it was written and has to be multiplied back at runtime. Absent (an older
  // bake) means 1, which is exactly what it used to be.
  let stats = null;
  try { stats = JSON.parse(await fs.readFile(path.join(outDir, 'lightmap.json'), 'utf8')); } catch { stats = null; }
  if (stats) onProgress?.(`lightmap range ${stats.range}, ${(stats.clipRate * 100).toFixed(2)}% of covered texels still clipped`);
  return { doc, lightmapPng, lightmapStats: stats, swapped, missing };
}
