import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { joinPrimitives, weldPrimitive } from '@gltf-transform/functions';
import { blenderExe } from '../../lib/blender.mjs';
import { pruneUnusedGeometry } from './geometry-usage.mjs';

/** Relocate UV1 exactly to a quadrant; glTF V is top-to-bottom. */
export function packedUv([u, v], page) {
  const slot = page%4;
  return [u*.5+(slot%2)*.5, v*.5+(1-Math.floor(slot/2))*.5];
}

/** Consolidate transfer pages and rejoin fragments of the same source mesh.
 * Input is the uncompressed stage-3 document: page fragments must share TRS.
 */
export async function packLodAtlases({ doc, report, outDir, signal, onProgress = () => {} }) {
  if (!report.groups.length) return report;
  const input = path.join(outDir, 'unpacked-transfer.json');
  await fs.writeFile(input, JSON.stringify(report));
  onProgress('consolidating transfer pages into 4096 atlases without resampling');
  const executable = await blenderExe();
  if (!executable) throw new Error('LOD atlas packing requires local Blender');
  await new Promise((resolve, reject) => {
    const child = spawn(executable, ['-b', '-t', '4', '--python-exit-code', '1', '--python',
      fileURLToPath(new URL('../bakers/pack_lod_atlases.py', import.meta.url)), '--', '--report', input, '--out', outDir],
    { stdio: ['ignore', 'pipe', 'pipe'], signal });
    let tail = '';
    const feed = chunk => { tail = (tail+chunk).slice(-6000); };
    child.stdout.on('data', feed); child.stderr.on('data', feed);
    child.on('error', reject);
    child.on('close', code => code === 0 ? resolve() : reject(new Error(`LOD atlas packing failed: ${tail}`)));
  });
  const packed = JSON.parse(await fs.readFile(path.join(outDir, 'packed-transfer.json'), 'utf8'));
  const nodes = new Map(doc.getRoot().listNodes().map(n => [n.getName(), n]));
  for (const group of packed.groups) {
    const combined = new Map();
    for (const [oldName, entry] of Object.entries(group.nodeRemap)) {
      const node = nodes.get(oldName);
      if (!node || node.getMesh()?.listPrimitives().length !== 1) throw new Error(`Missing transfer fragment ${oldName}`);
      const list = combined.get(entry.name) ?? [];
      list.push({ node, entry }); combined.set(entry.name, list);
    }
    for (const [name, list] of combined) {
      const first = list[0].node, parent = first.getParentNode();
      const matrix = first.getMatrix();
      const material = first.getMesh().listPrimitives()[0].getMaterial().clone();
      material.setExtras({ ...material.getExtras(), tk: { ...material.getExtras()?.tk, lightmapAtlas: group.atlasOffset+list[0].entry.atlas } });
      const primitives = [];
      for (const { node, entry } of list) {
        if (node.getParentNode() !== parent || node.getMatrix().some((v, i) => Math.abs(v-matrix[i]) > 1e-10)) throw new Error('Pack transfer atlases before geometry quantization');
        const prim = node.getMesh().listPrimitives()[0];
        const uv = prim.getAttribute('TEXCOORD_1');
        const values = new Float32Array(uv.getCount()*2);
        for (let i=0;i<uv.getCount();i++) values.set(packedUv(uv.getElement(i, []), entry.oldAtlas), i*2);
        prim.setAttribute('TEXCOORD_1', uv.clone().setArray(values));
        prim.setMaterial(material);
        primitives.push(prim);
      }
      const joined = joinPrimitives(primitives);
      weldPrimitive(joined, { overwrite: true });
      parent.addChild(doc.createNode(name).setMatrix(matrix).setMesh(doc.createMesh(name).addPrimitive(joined)));
      for (const { node } of list) node.dispose();
    }
  }
  await doc.transform(pruneUnusedGeometry());
  return packed;
}
