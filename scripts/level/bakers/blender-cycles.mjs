/**
 * The Blender Cycles lightmap baker.
 *
 * Batch Blender (`blender -b --python`), not the live-session addon: no
 * timers, no socket, a process that ends. It runs in one of two places:
 *
 *   - `host: false` -- the container's own Linux Blender, spawned right here
 *     with absolute paths (CUDA under WSL2; OptiX is unreachable there).
 *   - `host: true`  -- the Windows Blender on the host, through the bake agent
 *     (`scripts/level/bake-host-agent.mjs`), which respells the same spec over
 *     \\wsl.localhost and streams Blender's progress back. OptiX lives there.
 *
 * Either way the argv comes from blender-args.mjs, so the two cannot drift.
 * See bake_lightmap.py for what happens inside; this side prepares the input
 * so node names round-trip, runs it, and swaps the unwrapped vertex data back
 * into the level document.
 */
import { spawn } from 'node:child_process';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { toBlenderPath, blenderExe, toRepoRelative } from '../../lib/blender.mjs';
import { cubeToEquirect } from '../pipeline/sky.mjs';
import { blenderBakeSpec, buildBlenderArgs, blenderLineSink } from './blender-args.mjs';
import { runBlenderOnHost, agentUrl } from './host-agent-client.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const SCRIPT = path.join(here, 'bake_lightmap.py');
export const HOST_SCRIPT = 'scripts/level/bakers/bake_lightmap.py';

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

function runBlender(exe, args, onLine, { signal } = {}) {
  return new Promise((resolve, reject) => {
    const child = spawn(exe, args, { stdio: ['ignore', 'pipe', 'pipe'] });
    const sink = blenderLineSink(onLine);
    child.stdout.on('data', (d) => sink.feed(d.toString()));
    child.stderr.on('data', (d) => sink.feed(d.toString()));
    const onAbort = () => child.kill('SIGTERM');
    signal?.addEventListener('abort', onAbort, { once: true });
    child.on('error', reject);
    child.on('close', (code, sig) => {
      signal?.removeEventListener('abort', onAbort);
      if (signal?.aborted) return reject(new Error('cancelled'));
      code === 0 ? resolve() : reject(new Error(`blender exited ${code ?? sig}:\n${sink.tail()}`));
    });
  });
}

export async function bakeWithBlender({ io, doc, bake, skyImages = null, outDir, onProgress, host = false, cpu = false, signal }) {
  const exe = host ? null : await blenderExe();
  if (!host && !exe) throw new Error('no Blender executable found (set THAIKIT_BLENDER_EXE); export with --baker none to skip the lightmap');
  await fs.mkdir(outDir, { recursive: true });

  const map = splitForBlender(doc);
  if (!map.size) throw new Error('no static geometry to bake');
  const inFile = path.join(outDir, 'in.glb');
  await io.write(inFile, doc);
  onProgress?.(`${map.size} static meshes to unwrap and bake`);

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
  let envFile = null;
  if (faces) {
    envFile = path.join(outDir, 'env.png');
    // 1024 is plenty: diffuse GI is a low-pass filter, and the world dome is
    // only ever integrated over hemispheres. Paying for 2048 buys nothing.
    const equirect = await cubeToEquirect(faces, { width: 1024 });
    await fs.writeFile(envFile, equirect);
  }
  // `sky.base.intensity` ALONE. It used to be multiplied by
  // `environment.hemisphere.intensity`, which made the ambient dial on the
  // level tab a hidden second gain on the bake's world -- invisible in the
  // editor (where the hemisphere light is retired the moment IBL is on and
  // the probe prefilters the sky instead), so the one dial labelled "ambient
  // intensity" changed nothing you could see and silently rescaled every
  // future lightmap. The hemisphere settings are the NO-SKY fallback ramp
  // now, nothing else, and they still reach Blender that way through
  // `--sky` / `--ground`.
  //
  // The env ROTATION is NEGATED on purpose. The runtime turns the DOME by
  // +rotationDeg, which moves the image with it; Blender's Mapping node (type
  // POINT) rotates the LOOKUP VECTOR instead, and rotating the lookup by +phi
  // makes the content appear to turn by -phi. glTF's +Y and Blender's +Z agree
  // in handedness under the (x, y, z) -> (x, -z, y) swizzle used for the moon,
  // so the only correction needed is the sign. `thepurge` bakes at rotationDeg
  // 0, so this is derived rather than measured -- check it against a picture
  // the first time a level actually turns its sky.
  const spec = blenderBakeSpec({ bake, cpu, hasEnv: Boolean(envFile) });
  if (spec.env) onProgress?.(`world lit by the level's own sky (1024x512 equirect, strength ${spec.env.strength.toFixed(3)})`);
  else onProgress?.('no sky image; the world is the hemisphere ramp');

  const paths = { script: SCRIPT, glb: inFile, out: outDir, env: envFile };
  const where = `up to ${spec.size}², ${spec.texelsPerMeter} texels/m, ${spec.samples} samples, cpu ${cpu ? 'on' : 'off'}`;
  if (host) {
    // Repo-relative for the wire. The script is named by its FIXED repo path
    // rather than through toRepoRelative(): in the container this module lives
    // under /app while REPO_ROOT is /repo, so the relative form would be
    // `../app/...` -- and the agent only runs the one script anyway.
    const rel = { script: HOST_SCRIPT, glb: toRepoRelative(paths.glb), out: toRepoRelative(paths.out), env: paths.env ? toRepoRelative(paths.env) : null };
    onProgress?.(`running blender.exe on the host via ${agentUrl() ?? 'THAIKIT_BAKE_AGENT_URL (unset)'} (${where})`);
    await runBlenderOnHost({ spec, paths: rel, level: bake.id }, (line) => onProgress?.(line), { signal });
  } else {
    onProgress?.(`running ${path.basename(exe)} in the container (${where})`);
    await runBlender(exe, buildBlenderArgs(spec, paths, toBlenderPath), (line) => onProgress?.(line), { signal });
  }

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
