#!/usr/bin/env node
/**
 * Write a KTX2 sibling beside every shipped texture map of an asset.
 *
 * A WebP decodes to raw RGBA8 on the GPU; a KTX2/Basis texture stays
 * compressed there (BC7 / ASTC / ETC2), four to eight times smaller in VRAM
 * for the same pixels. Only the 25 map-bearing assets (skyline imposters and
 * ground tiles) have anything to compress; procedural props synthesise their
 * textures at runtime and are compressed when a level is exported. The webp
 * stays the source of truth and the file a factory loads today; this records
 * the KTX2 on the registry so a consumer -- and the level editor's warning --
 * can see which assets carry one and whether it is current.
 *
 *   node scripts/compress-maps.mjs --id <asset> | --all [--mode uastc|etc1s] [--force]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

import { readRegistry, updateAsset, REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { encodeKtx2, findKtx, KTX_INSTALL_HINT } from './level/pipeline/ktx2.mjs';

const COLOUR = new Set(['albedo', 'emissive']);

export function ktx2Status(map) {
  return { role: map.role, file: map.file, ktx2: map.ktx2 ? 'unknown' : null };
}

async function compressAsset(asset, { mode, force }) {
  const results = [];
  for (const map of asset.model.maps ?? []) {
    const src = path.join(REPO_ROOT, map.file);
    const bytes = await fs.readFile(src);
    const sha = createHash('sha256').update(bytes).digest('hex');
    if (!force && map.ktx2?.sourceSha256 === sha) {
      results.push({ role: map.role, skipped: 'current' });
      continue;
    }
    const colour = COLOUR.has(map.role);
    const chosen = mode ?? (colour ? 'etc1s' : 'uastc');
    const out = await encodeKtx2(bytes, { mode: chosen, srgb: colour, mipmaps: true, maxSize: 4096 });
    const outFile = src.replace(/\.[a-z0-9]+$/i, '.ktx2');
    await fs.writeFile(outFile, out.bytes);
    map.ktx2 = { file: toRepoRelative(outFile), mode: chosen, bytes: out.bytes.byteLength, sourceSha256: sha, generatedAt: new Date().toISOString() };
    results.push({ role: map.role, file: map.ktx2.file, mode: chosen, bytes: out.bytes.byteLength, from: bytes.length });
    log(`  ${asset.id} ${map.role}: ${(bytes.length / 1024).toFixed(0)} KB webp -> ${(out.bytes.byteLength / 1024).toFixed(0)} KB ktx2 (${chosen})`);
  }
  if (results.some((r) => !r.skipped)) {
    await updateAsset(asset.id, (a) => ({ ...a, model: { ...a.model, maps: asset.model.maps }, updatedAt: new Date().toISOString() }));
  }
  return results;
}

async function main() {
  const args = parseArgs();
  if (!(await findKtx())) return fail(KTX_INSTALL_HINT);
  const registry = await readRegistry();
  const targets = args.all ? registry.assets.filter((a) => a.model?.maps?.length) : registry.assets.filter((a) => a.id === args.id);
  if (!targets.length) return fail(args.all ? 'no asset ships texture maps' : `no asset "${args.id}" (or it ships no maps)`);
  const mode = typeof args.mode === 'string' ? args.mode : null;
  const out = [];
  for (const asset of targets) {
    try {
      out.push({ id: asset.id, maps: await compressAsset(asset, { mode, force: Boolean(args.force) }) });
    } catch (err) {
      out.push({ id: asset.id, error: err.message });
      log(`FAIL ${asset.id}: ${err.message}`);
      if (!args.all) return fail(err.message, { id: asset.id });
    }
  }
  return ok({ assets: out.length, results: out });
}

main().catch(fail);
