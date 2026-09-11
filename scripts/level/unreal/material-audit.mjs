import fs from 'node:fs/promises';
import path from 'node:path';

/** Read only JSON, without loading hundreds of MB of geometry and images. */
export async function readGlbJson(file) {
  const handle = await fs.open(file, 'r');
  try {
    const header = Buffer.alloc(20);
    await handle.read(header, 0, 20, 0);
    if (header.readUInt32LE(0) !== 0x46546c67 || header.readUInt32LE(4) !== 2 || header.readUInt32LE(16) !== 0x4e4f534a) throw new Error(`Invalid GLB: ${file}`);
    const bytes = Buffer.alloc(header.readUInt32LE(12));
    const { bytesRead } = await handle.read(bytes, 0, bytes.length, 20);
    if (bytesRead !== bytes.length) throw new Error(`Truncated GLB: ${file}`);
    return JSON.parse(bytes.toString('utf8'));
  } finally { await handle.close(); }
}

const black = (m) => (m.pbrMetallicRoughness?.baseColorFactor ?? [1, 1, 1]).slice(0, 3).every((v) => v === 0);

/** Deliberately narrow: authored black is valid; loss of a known nonblack kit
 * material is not. Run BEFORE colour factors are folded into vertex colours.
 * Longest name wins because concrete and concreteCap may coexist. */
export function findMaterialRegressions(json, originals) {
  const names = [...originals.keys()].sort((a, b) => b.length - a.length);
  const used = new Set((json.meshes ?? []).flatMap((m) => m.primitives.map((p) => p.material)));
  return (json.materials ?? []).flatMap((material, index) => {
    if (!used.has(index) || !black(material) || material.pbrMetallicRoughness?.baseColorTexture) return [];
    const name = names.find((n) => material.name === n || material.name?.startsWith(`${n}_`));
    const source = originals.get(name);
    if (!source || black(source)) return [];
    return [{ material: material.name, source: name, reason: 'nonblack kit material exported as untextured black' }];
  });
}

export async function assertUnrealMaterials(json, manifestFile) {
  const suspects = (json.materials ?? []).filter((m) => m.name?.startsWith('M_TK_') && black(m) && !m.pbrMetallicRoughness?.baseColorTexture);
  if (!suspects.length) return { checked: 0 };
  let manifest;
  try { manifest = JSON.parse(await fs.readFile(manifestFile, 'utf8')); }
  catch (error) {
    if (error.code !== 'ENOENT') throw error;
    throw new Error('Cannot validate black Unreal kit materials: kit manifest missing. Export the kit to Unreal first.');
  }
  const originals = new Map();
  for (const item of manifest.items ?? []) {
    const prefix = item.asset?.replace(/^SM_/, 'M_') + '_';
    if (!suspects.some((m) => m.name.startsWith(prefix))) continue;
    const source = await readGlbJson(path.resolve(path.dirname(manifestFile), item.file));
    for (const material of source.materials ?? []) if (material.name) originals.set(material.name, material);
  }
  const failures = findMaterialRegressions(json, originals);
  if (failures.length) throw new Error(`Unreal material export lost ${failures.length} kit material(s):\n${failures.map((f) => `  ${f.material}`).join('\n')}\nRe-export with scripts/level/unreal/export_materials.py before baking. See docs/unreal-level-export.md.`);
  return { checked: suspects.length };
}
