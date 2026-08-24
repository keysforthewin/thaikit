#!/usr/bin/env node
/**
 * Move a finished build out of scratch/ and into the kit.
 *
 * scratch/ is gitignored, so until this runs the only copy of a shipped prop
 * lives in a directory nobody backs up. Three things move: the built browser
 * module, the TypeScript it was generated from, and the sculpt spec behind
 * that. The spec matters most -- it is what a later refinement edits, and
 * generated code must never be the only copy of a reconstruction decision.
 *
 * The browse thumbnail is the hero render resized, so the tile in the grid is
 * literally the frame the review looked at.
 *
 * Usage:
 *   node scripts/promote-model.mjs --id <id> [--from <scratchdir>] [--thumb-size 512]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import {
  assetDir, workDir, toRepoRelative, readRegistry, updateAsset,
} from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

/** Copy if present; report what actually moved rather than assuming. */
async function copyIfPresent(from, to) {
  if (!(await exists(from))) return null;
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
  return to;
}

async function main() {
  const args = parseArgs();
  const id = args.id;
  if (!id) return fail('need --id');

  const registry = await readRegistry();
  const asset = registry.assets.find((a) => a.id === id);
  if (!asset) return fail(`no asset with id ${id}`);

  const from = args.from ? path.resolve(args.from) : workDir(id);
  const to = assetDir(id);
  await fs.mkdir(to, { recursive: true });

  const bundleFrom = path.join(from, 'model.bundle.js');
  if (!(await exists(bundleFrom))) {
    return fail(
      `no built module at ${toRepoRelative(bundleFrom)}. ` +
        'Run build-model-module.mjs, then render-model.mjs, then this.',
    );
  }

  const moved = {};
  moved.file = await copyIfPresent(bundleFrom, path.join(to, 'model.bundle.js'));
  moved.source = await copyIfPresent(
    path.join(from, 'src/createObjectModel.ts'),
    path.join(to, 'src/createObjectModel.ts'),
  );
  moved.spec = await copyIfPresent(
    path.join(from, 'object-sculpt-spec.json'),
    path.join(to, 'object-sculpt-spec.json'),
  );

  if (!moved.source) {
    log('warn   : no createObjectModel.ts beside the bundle; the TypeScript is not being shipped');
  }
  if (!moved.spec) {
    log('warn   : no object-sculpt-spec.json; a later refinement will have to re-derive it');
  }

  // The hero the review looked at, falling back to the front turntable frame.
  const heroCandidates = ['renders/beauty-hero.png', 'renders/beauty-000.png'];
  let thumb = null;
  for (const rel of heroCandidates) {
    const src = path.join(from, rel);
    if (!(await exists(src))) continue;
    const dest = path.join(to, 'thumb.webp');
    await sharp(src)
      .resize(Number(args['thumb-size'] ?? 512), Number(args['thumb-size'] ?? 512), { fit: 'inside' })
      .webp({ quality: 82 })
      .toFile(dest);
    thumb = dest;
    log(`thumb  : ${toRepoRelative(src)} -> ${toRepoRelative(dest)}`);
    break;
  }
  if (!thumb) log('warn   : no render to make a thumbnail from; the grid will fall back to the plate');

  const bytes = (await fs.stat(moved.file)).size;

  await updateAsset(id, (a) => {
    a.model.file = toRepoRelative(moved.file);
    a.model.source = moved.source ? toRepoRelative(moved.source) : a.model.source;
    a.model.spec = moved.spec ? toRepoRelative(moved.spec) : a.model.spec;
    a.model.thumb = thumb ? toRepoRelative(thumb) : a.model.thumb;
    a.model.fileBytes = bytes;
    // img2threejs's state file stays in scratch/: it is a resume index, not a
    // shipped artefact, and pointing at it keeps a rebuild resumable.
    a.model.state = toRepoRelative(path.join(from, '.img2threejs/state.json'));
    a.model.status = 'done';
    a.status.model = 'done';
    return a;
  });

  return ok({
    id,
    file: toRepoRelative(moved.file),
    source: moved.source ? toRepoRelative(moved.source) : null,
    spec: moved.spec ? toRepoRelative(moved.spec) : null,
    thumb: thumb ? toRepoRelative(thumb) : null,
    bytes,
  });
}

main().catch(fail);
