#!/usr/bin/env node
/**
 * Rewrite a level's placement refs from one pack namespace to another.
 *
 * thaikit's own props used to be the built-in `@thaikit` catalogue; they are the
 * installed `@thai-kit` pack now, and the item names are the same, so a level
 * authored against the old namespace needs only its prefix rewritten -- plus a
 * fresh `version` per placement (the installed item's build) and the pack entry
 * on `scene.extras.thaikitLevel.packs`. The BIN chunk, and every embedded
 * fallback mesh in it, passes through untouched.
 *
 *   node scripts/level/migrate-refs.mjs --level thepurge [--from @thaikit --to @thai-kit] [--dry-run]
 *   node scripts/level/migrate-refs.mjs --all
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { LEVELS_DIR, levelDir, writeFileAtomic, toRepoRelative } from '@thaikit/registry-core';
import { LevelExtras, PlacementExtras } from '@thai-kit/level-schema';

import { parseGlb, buildGlb } from '../lib/glb.mjs';
import { readIndex } from '../lib/packs/index.mjs';
import { ok, fail, log, parseArgs } from '../lib/out.mjs';

async function migrateLevel(id, { from, to, dryRun, pack }) {
  const file = path.join(levelDir(id), 'level.glb');
  const before = await fs.readFile(file);
  const { json, bin } = parseGlb(before);
  const scene = json.scenes?.[json.scene ?? 0];
  const extras = scene?.extras?.thaikitLevel;
  if (!extras) throw new Error(`${id}: not a level GLB (no scene.extras.thaikitLevel)`);

  const items = new Map((pack?.items ?? []).filter((it) => it.role !== 'support').map((it) => [it.name, it]));
  let rewritten = 0;
  let mediaRefs = 0;
  const unresolved = [];
  for (const node of json.nodes ?? []) {
    const tk = node.extras?.tk;
    if (tk?.kind !== 'placement') continue;
    if (typeof tk.ref !== 'string' || !tk.ref.startsWith(`${from}/`)) continue;
    const name = tk.ref.slice(from.length + 1);
    const item = items.get(name);
    tk.ref = `${to}/${name}`;
    if (item) tk.version = item.version ?? pack.version ?? tk.version ?? null;
    else unresolved.push(name);
    PlacementExtras.parse(tk);
    rewritten += 1;
  }
  mediaRefs = (JSON.stringify(json).match(/\/media\//g) ?? []).length;

  extras.packs = (extras.packs ?? []).filter((p) => p.id !== from && p.id !== to);
  if (pack) extras.packs.push({ id: to, version: pack.version ?? null, source: pack.source ?? null });
  extras.updatedAt = new Date().toISOString();
  LevelExtras.parse(extras);

  const after = buildGlb(json, bin);
  if (!dryRun && rewritten) await writeFileAtomic(file, after);
  return { level: id, file: toRepoRelative(file), rewritten, unresolved, mediaRefs, bytesBefore: before.length, bytesAfter: after.length, packVersion: pack?.version ?? null };
}

async function main() {
  const args = parseArgs();
  const from = typeof args.from === 'string' ? args.from : '@thaikit';
  const to = typeof args.to === 'string' ? args.to : '@thai-kit';
  const dryRun = Boolean(args['dry-run']);

  const index = await readIndex();
  const pack = (index.packs ?? []).find((p) => p.id === to) ?? null;
  if (!pack) log(`! ${to} is not installed; refs will be rewritten but versions left as they are`);

  let ids;
  if (args.all) {
    const entries = await fs.readdir(LEVELS_DIR, { withFileTypes: true });
    ids = entries.filter((e) => e.isDirectory()).map((e) => e.name);
  } else if (typeof args.level === 'string') ids = [args.level];
  else throw new Error('usage: --level <id> | --all');

  const results = [];
  for (const id of ids) {
    const r = await migrateLevel(id, { from, to, dryRun, pack });
    log(`${dryRun ? 'would rewrite' : 'rewrote'} ${r.rewritten} placement(s) in ${r.file}${r.unresolved.length ? `; unresolved: ${r.unresolved.join(', ')}` : ''}`);
    results.push(r);
  }
  ok({ dryRun, from, to, levels: results });
}

main().catch(fail);
