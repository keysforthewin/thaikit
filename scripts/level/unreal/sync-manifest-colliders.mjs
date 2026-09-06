#!/usr/bin/env node
/**
 * Copies each kit prop's CURRENT compound into `exports/unreal/manifest.json`.
 *
 * The Unreal manifest is what `import-unreal-level.mjs` places colliders from,
 * and it is written by the browser's "export to Unreal" -- so a compound
 * re-derived in the tree (`derive-colliders.mjs --force` on a hand-tuned prop,
 * a rebuild) reaches no Unreal level until somebody re-exports the whole kit.
 * The mesh Unreal holds does not change when only the compound does, so this
 * carries the compound across on its own. Prints every item whose parts
 * changed; `--dry-run` only prints.
 *
 *   node scripts/level/unreal/sync-manifest-colliders.mjs [--manifest exports/unreal/manifest.json] [--dry-run]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, modelDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, parseArgs } from '../../lib/out.mjs';

const log = (msg) => process.stderr.write(`${msg}\n`);

const part = (c) => ({ name: c.name, type: c.type, offset: c.offset, scale: c.scale, isTrigger: Boolean(c.isTrigger) });
const same = (a, b) => JSON.stringify((a ?? []).map(part)) === JSON.stringify((b ?? []).map(part));

async function main() {
  const args = parseArgs();
  const file = path.resolve(REPO_ROOT, String(args.manifest ?? path.join('exports', 'unreal', 'manifest.json')));
  const manifest = JSON.parse(await fs.readFile(file, 'utf8'));
  const changed = [];
  let missing = 0;
  for (const item of manifest.items ?? []) {
    let parts;
    try {
      parts = JSON.parse(await fs.readFile(path.join(modelDir(item.ref), 'colliders.json'), 'utf8')).parts;
    } catch (err) {
      if (err.code !== 'ENOENT') throw err;
      missing += 1; continue;
    }
    if (same(parts, item.colliders)) continue;
    const before = (item.colliders ?? []).length;
    item.colliders = parts.map(part);
    changed.push({ ref: item.ref, parts: `${before} -> ${parts.length}` });
    log(`${item.ref}: ${before} part(s) -> ${parts.length}`);
  }
  if (changed.length && !args['dry-run']) {
    const tmp = `${file}.tmp-${process.pid}`;
    await fs.writeFile(tmp, JSON.stringify(manifest, null, 2));
    await fs.rename(tmp, file);
  }
  return ok({ manifest: toRepoRelative(file), items: (manifest.items ?? []).length, changed, missingInTree: missing, dryRun: Boolean(args['dry-run']) });
}

main().catch((err) => fail(err));
