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
function splitForBlender(doc) {
  const map = new Map(); // name -> { node, prim }
  for (const cell of doc.getRoot().listNodes()) {
    if (!cell.getName().startsWith('cell_')) continue;
    const lod0 = cell.listChildren().find((n) => n.getName() === 'lod0');
    if (!lod0) continue;
    let i = 0;
    for (const source of [...lod0.listChildren()]) {
      const mesh = source.getMesh();
      if (!mesh) continue;
      const prims = mesh.listPrimitives();
      if (prims.length === 1) {
        source.setName(`lm_${cell.getName().slice(5)}.${i++}`);
        map.set(source.getName(), { node: source, prim: prims[0] });
        continue;
      }
      for (const prim of prims) {
        const m = doc.createMesh().addPrimitive(prim);
        const n = doc.createNode(`lm_${cell.getName().slice(5)}.${i++}`).setMesh(m).setMatrix(source.getMatrix());
        lod0.addChild(n);
        map.set(n.getName(), { node: n, prim });
      }
      lod0.removeChild(source);
      source.dispose();
      mesh.dispose();
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

export async function bakeWithBlender({ io, doc, bake, outDir, onProgress }) {
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
    '--size', String(lm.size ?? 4096), '--samples', String(lm.samples ?? 128),
    // '=' form: a value starting with '-' (a downward moon) reads as an option otherwise.
    `--moon=${[...moonDir, ...moonRgb, moon?.intensity ?? 0.6].map((n) => n.toFixed(4)).join(',')}`,
    `--sky=${[...skyRgb, hemi.intensity ?? 0.35].map((n) => n.toFixed(4)).join(',')}`,
    '--exposure', String(lm.exposure ?? 1),
  ];
  onProgress?.(`running ${path.basename(exe)} (${lm.size ?? 4096}², ${lm.samples ?? 128} samples)`);
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
  return { doc, lightmapPng, swapped, missing };
}
