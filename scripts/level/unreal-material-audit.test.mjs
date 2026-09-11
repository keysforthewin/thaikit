import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { assertUnrealMaterials, findMaterialRegressions, readGlbJson } from './unreal/material-audit.mjs';

const material = (name, color, texture) => ({ name, pbrMetallicRoughness: { baseColorFactor: [...color, 1], ...(texture ? { baseColorTexture: { index: 0 } } : {}) } });
const original = material('M_TK_Pier_concrete', [.68, .67, .64], true);
const json = (materials) => ({ materials, meshes: [{ primitives: materials.map((_, material) => ({ material })) }] });
const originals = new Map([[original.name, original], ['M_TK_Pier_concreteCap', material('M_TK_Pier_concreteCap', [0, 0, 0])]]);

test('detects the Substrate black export, including per-actor suffixes', () => {
  const failures = findMaterialRegressions(json([material(original.name + '_pier_00', [0, 0, 0])]), originals);
  assert.equal(failures.length, 1);
  assert.equal(failures[0].source, original.name);
});

test('accepts restored proxies, intentional black, unfamiliar materials and unused slots', () => {
  const input = json([material(original.name + '_TKExport_123_actor', [.68, .67, .64], true),
    material('M_TK_Pier_concreteCap_actor', [0, 0, 0]), material('ArtistBlack', [0, 0, 0])]);
  input.materials.push(material(original.name, [0, 0, 0]));
  assert.deepEqual(findMaterialRegressions(input, originals), []);
});

test('file-backed guard refuses a broken export and accepts the repaired material', async () => {
  const dir = await fs.mkdtemp(path.join(os.tmpdir(), 'tk-material-audit-'));
  try {
    const bytes = Buffer.from(JSON.stringify(json([original])).padEnd(Math.ceil(JSON.stringify(json([original])).length / 4) * 4, ' '));
    const header = Buffer.alloc(20);
    [0x46546c67, 2, bytes.length + 20, bytes.length, 0x4e4f534a].forEach((v, i) => header.writeUInt32LE(v, i * 4));
    await fs.writeFile(path.join(dir, 'pier.glb'), Buffer.concat([header, bytes]));
    const manifest = path.join(dir, 'manifest.json');
    await fs.writeFile(manifest, JSON.stringify({ items: [{ asset: 'SM_TK_Pier', file: 'pier.glb' }] }));
    assert.equal((await readGlbJson(path.join(dir, 'pier.glb'))).materials[0].name, original.name);
    await assert.rejects(assertUnrealMaterials(json([material(original.name, [0, 0, 0])]), manifest), /lost 1 kit material/);
    await assertUnrealMaterials(json([original]), manifest);
    await assert.rejects(assertUnrealMaterials(json([material(original.name, [0, 0, 0])]), path.join(dir, 'missing.json')), /manifest missing/);
  } finally { await fs.rm(dir, { recursive: true, force: true }); }
});
