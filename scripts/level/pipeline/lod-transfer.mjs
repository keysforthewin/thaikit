/** Reduced LODs with their own UVs, carrying lighting projected from LOD0.
 * Run after buildLodTiers: unsafe candidates keep the existing conservative LOD.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { Document, Logger } from '@gltf-transform/core';
import { compactPrimitive, weldPrimitive } from '@gltf-transform/functions';
import { MeshoptSimplifier } from 'meshoptimizer';
import { blenderExe } from '../../lib/blender.mjs';
import { pruneUnusedGeometry } from './geometry-usage.mjs';
import { packLodAtlases } from './pack-lod-atlases.mjs';
import { shareLodGeometry } from './share-lod-geometry.mjs';

const SCRIPT = fileURLToPath(new URL('../bakers/transfer_lod_lightmap.py', import.meta.url));

function copyAccessor(doc, accessor, index = false) {
  const array = index ? Uint32Array.from(accessor.getArray()) : new Float32Array(accessor.getCount()*accessor.getElementSize());
  if (!index) for (let i = 0; i < accessor.getCount(); i++) array.set(accessor.getElement(i, []), i*accessor.getElementSize());
  return doc.createAccessor().setType(accessor.getType()).setArray(array).setBuffer(doc.getRoot().listBuffers()[0]);
}

export function copyGeometry(doc, source, semantics = source.listSemantics()) {
  if (source.listTargets().length || source.getMode() !== 4) throw new Error('LOD transfer requires static triangle geometry');
  const result = doc.createPrimitive();
  for (const semantic of semantics) {
    const accessor = source.getAttribute(semantic);
    if (accessor) result.setAttribute(semantic, copyAccessor(doc, accessor));
  }
  if (source.getIndices()) result.setIndices(copyAccessor(doc, source.getIndices(), true));
  return result;
}

/** Attribute-aware reduction, measured in world metres, after removing UV1. */
export function simplifyForTransfer(doc, primitive, matrix, ratio, error) {
  if (primitive.getAttribute('TEXCOORD_1')) throw new Error('Remove/rebuild lightmap UVs before transfer simplification');
  const count = primitive.getAttribute('POSITION').getCount();
  const positions = new Float32Array(count*3);
  for (let i = 0; i < count; i++) {
    const [x, y, z] = primitive.getAttribute('POSITION').getElement(i, []);
    positions.set([matrix[0]*x+matrix[4]*y+matrix[8]*z+matrix[12], matrix[1]*x+matrix[5]*y+matrix[9]*z+matrix[13], matrix[2]*x+matrix[6]*y+matrix[10]*z+matrix[14]], i*3);
  }
  const attributes = ['NORMAL', 'TEXCOORD_0', 'COLOR_0'].filter(s => primitive.getAttribute(s));
  const weights = attributes.flatMap(s => Array(primitive.getAttribute(s).getElementSize()).fill(s === 'TEXCOORD_0' ? 2 : 1));
  const values = new Float32Array(count*weights.length);
  for (let i = 0; i < count; i++) {
    let offset = i*weights.length;
    for (const semantic of attributes) {
      const element = primitive.getAttribute(semantic).getElement(i, []);
      values.set(element, offset); offset += element.length;
    }
  }
  const indices = primitive.getIndices() ? Uint32Array.from(primitive.getIndices().getArray()) : Uint32Array.from({ length: count }, (_, i) => i);
  const [result] = MeshoptSimplifier.simplifyWithAttributes(indices, positions, 3, values, weights.length, weights, null,
    Math.max(3, Math.floor(indices.length/3*ratio)*3), error, ['Permissive', 'ErrorAbsolute']);
  const copy = primitive.clone();
  copy.setIndices(doc.createAccessor().setType('SCALAR').setArray(result.length ? result : indices).setBuffer(doc.getRoot().listBuffers()[0]));
  compactPrimitive(copy);
  return copy;
}

export function lodStatistics(doc) {
  const stats = [];
  for (const cell of doc.getRoot().listNodes()) {
    if (!/^(cell|unbaked)_/.test(cell.getName())) continue;
    const triangles = [0, 0, 0], drawCalls = [0, 0, 0], vertices = [0, 0, 0];
    for (let tier = 0; tier < 3; tier++) {
      cell.listChildren().find(n => n.getName() === `lod${tier}`)?.traverse(n => {
        for (const p of n.getMesh()?.listPrimitives() ?? []) {
          triangles[tier] += (p.getIndices()?.getCount() ?? p.getAttribute('POSITION').getCount())/3;
          vertices[tier] += p.getAttribute('POSITION').getCount();
          drawCalls[tier]++;
        }
      });
    }
    stats.push({ cell: cell.getName(), triangles, drawCalls, vertices });
  }
  return stats;
}

export async function transferLodLightmaps({ io, doc, lightmapStats, lightmapDir, outDir,
  ratios = [.4, .15], density = [3, 1.5], maxDistance = [.1, .25], size = 2048,
  cells = null, onProgress = () => {}, signal }) {
  await MeshoptSimplifier.ready;
  await fs.mkdir(outDir, { recursive: true });
  const work = new Document().setLogger(new Logger(Logger.Verbosity.SILENT));
  work.createBuffer();
  const scene = work.createScene();
  const targets = [], originals = new Map();
  let sourceIndex = 0;
  for (const cell of doc.getRoot().listNodes()) {
    if (!cell.getName().startsWith('cell_') || (cells && !cells.includes(cell.getName()))) continue;
    const lod0 = cell.listChildren().find(n => n.getName() === 'lod0');
    if (!lod0) continue;
    for (const node of lod0.listChildren()) {
      const primitives = node.getMesh()?.listPrimitives() ?? [];
      // Sharing replaces a whole fallback node. Keep multi-material meshes on
      // the conservative path until replacement can address each primitive.
      if (primitives.length !== 1) continue;
      for (let pi = 0; pi < primitives.length; pi++) {
        const prim = primitives[pi], atlas = prim.getMaterial()?.getExtras()?.tk?.lightmapAtlas;
        if (!Number.isInteger(atlas) || !prim.getAttribute('TEXCOORD_1') || prim.getMaterial()?.getAlphaMode() === 'MASK') continue;
        const count = (prim.getIndices()?.getCount() ?? prim.getAttribute('POSITION').getCount())/3;
        if (count < 20) continue;
        const sourceName = `ls${sourceIndex++}`;
        const source = copyGeometry(work, prim, ['POSITION', 'TEXCOORD_0', 'TEXCOORD_1']);
        scene.addChild(work.createNode(sourceName).setMatrix(node.getWorldMatrix()).setMesh(work.createMesh().addPrimitive(source)));
        for (let tier = 1; tier <= 2; tier++) {
          const targetName = `lt${tier}_${sourceIndex-1}`;
          // Remove only bake-generated seams; retain authored normal, UV0 and
          // color discontinuities. Indexed input needs overwrite=true to weld.
          const unwound = copyGeometry(work, prim, prim.listSemantics().filter(s => s !== 'TEXCOORD_1' && !s.startsWith('_')));
          weldPrimitive(unwound, { overwrite: true });
          const reduced = simplifyForTransfer(work, unwound, node.getWorldMatrix(), ratios[tier-1], maxDistance[tier-1]*.6);
          unwound.dispose();
          if (reduced.getIndices().getCount()/3 >= count*.8) { reduced.dispose(); continue; }
          scene.addChild(work.createNode(targetName).setMatrix(node.getWorldMatrix()).setMesh(work.createMesh().addPrimitive(reduced)));
          targets.push({ source: sourceName, target: targetName, tier, atlas, maxDistance: maxDistance[tier-1],
            cell: cell.getName(), node: node.getName(), triangles: [count, reduced.getIndices().getCount()/3] });
          const tierNode = cell.listChildren().find(n => n.getName() === `lod${tier}`);
          const previous = tierNode?.listChildren().find(n => n.getName() === node.getName());
          if (!previous) throw new Error(`Missing conservative lod${tier} for ${node.getName()}`);
          originals.set(targetName, { prim, node, tierNode, previous, previousPrimitive: previous.getMesh().listPrimitives()[pi] });
        }
      }
    }
  }
  if (!targets.length) return { groups: [], accepted: [], rejected: [] };
  await work.transform(pruneUnusedGeometry());
  const input = path.join(outDir, 'in.glb');
  await io.write(input, work);
  const config = { input, out: outDir, targets, density, size, maxAtlases: 32,
    atlases: lightmapStats.atlases.map(p => ({ ...p, file: path.resolve(lightmapDir, p.file) })) };
  const configFile = path.join(outDir, 'config.json');
  await fs.writeFile(configFile, JSON.stringify(config));
  onProgress(`${targets.length} reduced candidates; transferring existing RGB and moon visibility on CPU`);
  const executable = await blenderExe();
  if (!executable) throw new Error('LOD lightmap transfer requires local Blender');
  await new Promise((resolve, reject) => {
    const child = spawn(executable, ['-b', '-t', '8', '--python-exit-code', '1', '--python', SCRIPT, '--', '--config', configFile], { stdio: ['ignore', 'pipe', 'pipe'], signal });
    let pending = '', tail = '';
    const feed = data => {
      tail = (tail+data).slice(-8000); pending += data;
      const lines = pending.split('\n'); pending = lines.pop();
      for (const line of lines) if (line.includes('[lod-transfer]')) onProgress(line);
    };
    child.stdout.on('data', feed); child.stderr.on('data', feed);
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve() : reject(new Error(`LOD transfer exited ${code}: ${tail}`)));
  });
  const report = JSON.parse(await fs.readFile(path.join(outDir, 'transfer.json'), 'utf8'));
  if (!report.accepted.length) return report;
  const output = await io.read(path.join(outDir, 'out.glb'));
  const meshes = new Map(output.getRoot().listNodes().filter(n => n.getMesh()).map(n => [n.getName(), n.getMesh()]));
  let offset = lightmapStats.atlases.length;
  const materials = new Map(), replaced = new Set();
  for (const group of report.groups) {
    group.atlasOffset = offset;
    for (const [name, assignment] of Object.entries(group.mapping)) {
      const original = originals.get(assignment.source), mesh = meshes.get(name);
      if (!original || mesh?.listPrimitives().length !== 1) throw new Error(`Invalid transferred mesh ${name}`);
      const source = mesh.listPrimitives()[0];
      if (!source.getAttribute('TEXCOORD_1')) throw new Error(`${name} lost lightmap UVs`);
      const primitive = copyGeometry(doc, source);
      const material = original.prim.getMaterial(), atlas = offset+assignment.atlas;
      let pages = materials.get(material);
      if (!pages) materials.set(material, pages = new Map());
      if (!pages.has(atlas)) pages.set(atlas, material.clone().setExtras({ ...material.getExtras(), tk: { ...material.getExtras()?.tk, lightmapAtlas: atlas } }));
      primitive.setMaterial(pages.get(atlas));
      original.tierNode.addChild(doc.createNode(name).setMatrix(original.node.getMatrix()).setMesh(doc.createMesh(name).addPrimitive(primitive)));
      replaced.add(original);
    }
    offset += group.atlases.length;
  }
  for (const original of replaced) original.previous.getMesh().removePrimitive(original.previousPrimitive);
  for (const previous of new Set([...replaced].map(original => original.previous))) {
    if (!previous.getMesh().listPrimitives().length) previous.dispose();
  }
  await doc.transform(pruneUnusedGeometry());
  const packed = await packLodAtlases({ doc, report, outDir, signal, onProgress });
  return shareLodGeometry({ doc, report: packed, outDir, signal, onProgress });
}
