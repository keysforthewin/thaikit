#!/usr/bin/env node
/**
 * Delete a prop's BUILT MODEL and put its model stage back to `pending`.
 *
 * The asset record, its reference plate and its authoring fields survive: this
 * is "the model is bad, start it again", not "remove the prop". It is the
 * inverse of promote-model.mjs, and it undoes exactly the four things promote
 * does:
 *
 *   1. the tree   -- createObjectModel.ts, model.ts, object-sculpt-spec.json,
 *                    colliders.json, thumb.webp and maps/ under
 *                    packages/props/src/models/<id>/ (preview.jpg and
 *                    thaikit.json stay);
 *   2. the record -- `model` reset to the schema default and
 *                    `status.model = 'pending'`, through registry-core so the
 *                    directory lock and the watcher are respected;
 *   3. the pack   -- `install-pack.mjs --drop-item @ns/name`, so the level
 *                    editor's catalogue stops offering a bundle that no longer
 *                    has a source;
 *   4. scratch    -- `scratch/<id>` is MOVED to `scratch/_deleted/<name>-<stamp>`,
 *                    not deleted. The img2threejs state file is the authority
 *                    for a build, so leaving it in place would make the next
 *                    build RESUME the model being thrown away; but
 *                    `reference.glb` is a metered Meshy result and the renders
 *                    are evidence, so they are set aside rather than lost.
 *                    `--purge-scratch` deletes instead; `--keep-scratch` leaves
 *                    it untouched.
 *
 * Usage:
 *   node scripts/delete-model.mjs --id <id> [--purge-scratch | --keep-scratch] [--dry-run]
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
import {
  REPO_ROOT, SCRATCH_DIR, modelDir, workDir, toRepoRelative,
  readRegistry, updateAsset, parseId, storeOptionsFor,
} from '@thaikit/registry-core';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

/** What promote-model.mjs writes into the tree. preview.jpg and thaikit.json are NOT here. */
const BUILT_FILES = ['createObjectModel.ts', 'model.ts', 'object-sculpt-spec.json', 'colliders.json', 'thumb.webp', 'maps'];

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

async function main() {
  const args = parseArgs();
  const id = args.id ?? args._[0];
  if (!id) throw new Error('usage: delete-model.mjs --id <id> [--purge-scratch | --keep-scratch] [--dry-run]');
  if (args['purge-scratch'] && args['keep-scratch']) throw new Error('--purge-scratch and --keep-scratch are exclusive');
  const dryRun = Boolean(args['dry-run']);

  const { ns, name } = parseId(id);
  const registry = await readRegistry(storeOptionsFor(id));
  const asset = registry.assets.find((a) => a.id === name);
  if (!asset) throw new Error(`no such asset: ${id}`);

  const dir = modelDir(id);
  const removed = [];
  for (const file of BUILT_FILES) {
    const p = path.join(dir, file);
    if (!(await exists(p))) continue;
    removed.push(toRepoRelative(p));
    if (!dryRun) await fs.rm(p, { recursive: true, force: true });
  }
  log(`tree   : ${removed.length ? removed.join(', ') : 'nothing built'}`);

  const before = asset.status.model;
  if (!dryRun) {
    await updateAsset(id, (a) => {
      a.model = {};
      a.status.model = 'pending';
      a.updatedAt = new Date().toISOString();
      return a;
    });
  }
  log(`record : model ${before} -> pending`);

  const itemRef = `${ns}/${name}`; // always qualified: --drop-item wants @ns/name even for @thai-kit
  let pack = null;
  if (!dryRun) {
    try {
      const line = execFileSync(process.execPath, ['scripts/install-pack.mjs', '--drop-item', itemRef], {
        cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'],
      }).trim().split('\n').pop();
      pack = JSON.parse(line);
    } catch (err) {
      // Not fatal: a prop that was never promoted has no pack item to drop.
      pack = { ok: false, error: err.message.split('\n')[0] };
    }
  }
  log(`pack   : ${dryRun ? `would drop ${itemRef}` : pack?.ok === false ? `no item dropped (${pack.error})` : `dropped ${itemRef}`}`);

  const scratch = workDir(id);
  let scratchResult = { action: 'none', path: null };
  if (await exists(scratch)) {
    if (args['keep-scratch']) {
      scratchResult = { action: 'kept', path: toRepoRelative(scratch) };
    } else if (args['purge-scratch']) {
      if (!dryRun) await fs.rm(scratch, { recursive: true, force: true });
      scratchResult = { action: 'purged', path: toRepoRelative(scratch) };
    } else {
      const stamp = new Date().toISOString().replace(/[:.]/g, '-');
      const dest = path.join(SCRATCH_DIR, '_deleted', `${name}-${stamp}`);
      if (!dryRun) {
        await fs.mkdir(path.dirname(dest), { recursive: true });
        await fs.rename(scratch, dest);
      }
      scratchResult = { action: 'moved', path: toRepoRelative(dest) };
    }
  }
  log(`scratch: ${scratchResult.action}${scratchResult.path ? ` (${scratchResult.path})` : ''}`);

  ok({ id, dryRun, removed, status: { model: dryRun ? before : 'pending' }, pack, scratch: scratchResult });
}

main().catch(fail);
