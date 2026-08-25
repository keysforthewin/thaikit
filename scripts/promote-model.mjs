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
 * A prop over its scene budget does not ship. render-model.mjs measures the
 * four axes and only warns -- its renders are also what img2threejs's review
 * gates read, so failing there would withhold the evidence. This is the gate,
 * because this is the step that puts a prop in the kit. `--allow-over-budget`
 * is the deliberate override, and it says so in the log.
 *
 * Usage:
 *   node scripts/promote-model.mjs --id <id> [--from <scratchdir>] [--thumb-size 512]
 *                                  [--allow-over-budget] [--allow-contract-drift]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';
import {
  assetDir, workDir, toRepoRelative, readRegistry, updateAsset,
} from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { judgeAsset, formatAxis, overBudgetMessage, runtimeVerdict } from './lib/budget.mjs';
import { readSkillReview } from './lib/review.mjs';

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

  // Judged BEFORE anything is copied. A prop that fails here should leave the kit
  // exactly as it found it, not half-populated with a bundle whose spec never moved.
  const budget = await judgeAsset(asset, asset.model);
  log(`budget : ${asset.budgetClass} — ${budget.axes.map(formatAxis).join(', ')}`);
  if (!budget.ok) {
    const detail = overBudgetMessage(budget);
    if (!args['allow-over-budget']) {
      return fail(
        `${asset.name} is over its ${asset.budgetClass} scene budget and will not ship:\n  ` +
          `${detail}\n` +
          'Fix it in the sculpt spec and rebuild, raise the per-asset ceiling on the asset ' +
          '(maxDrawCalls / maxMaterials / maxUniqueGeometries / targetTriangles), or pass ' +
          '--allow-over-budget if this prop is genuinely worth the frame time.',
      );
    }
    log(`WARN   : shipping over budget on --allow-over-budget\n  ${detail}`);
  }

  // The runtime contract, checked the same way and at the same point. Unlike the
  // budget this is an EQUALITY check: a group declared and not built means the
  // prop does not come apart as promised, and a group built and not declared is
  // contract nobody asked for. Both are defects, and both are silent otherwise.
  const runtime = runtimeVerdict(asset, asset.model.runtime);
  log(
    `runtime: ${runtime.built.length} destruction group(s) ` +
      `[${runtime.built.join(', ') || 'none'}] against declared ` +
      `[${runtime.declared.join(', ') || 'none'}], ${runtime.colliderCount} collider(s) ` +
      `for collider "${asset.collider}"`,
  );
  if (!runtime.ok) {
    const detail = runtime.problems.join('\n  ');
    if (!args['allow-contract-drift']) {
      return fail(
        `${asset.name}'s runtime does not match what its entry declares:\n  ${detail}\n` +
          'Fix the sculpt spec and rebuild, correct the declaration on the asset ' +
          '(collider / destructionGroups), or pass --allow-contract-drift.',
      );
    }
    log(`WARN   : shipping with contract drift on --allow-contract-drift\n  ${detail}`);
  }

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

  // The skill's own verdict, carried across at the moment the prop enters the
  // kit. thaikit does not judge models -- it reads the judgement img2threejs
  // already made and recorded, from the spec's reviewHistory and the state
  // file's loop counts. Doing it here rather than as a separate step is what
  // stops it being forgotten: promotion is the one command that cannot be
  // skipped, and a quality tab filled in by hand is worse than an empty one.
  const review = await readSkillReview({
    specPath: moved.spec ?? path.join(from, 'object-sculpt-spec.json'),
    statePath: path.join(from, '.img2threejs/state.json'),
  });
  if (review) {
    log(
      `review : fidelity ${review.fidelity ?? '\u2014'} against ${review.threshold / 100} ` +
        `(${review.passed ? 'pass' : 'below bar'}), ${review.passesComplete.length}/8 passes, ` +
        `${review.corrections.total}/${review.corrections.maxTotal} corrections`,
    );
  } else {
    log('warn   : no img2threejs review found; the quality tab will stay empty rather than guess');
  }

  await updateAsset(id, (a) => {
    a.model.file = toRepoRelative(moved.file);
    a.model.source = moved.source ? toRepoRelative(moved.source) : a.model.source;
    a.model.spec = moved.spec ? toRepoRelative(moved.spec) : a.model.spec;
    a.model.thumb = thumb ? toRepoRelative(thumb) : a.model.thumb;
    a.model.fileBytes = bytes;
    // img2threejs's state file stays in scratch/: it is a resume index, not a
    // shipped artefact, and pointing at it keeps a rebuild resumable.
    a.model.state = toRepoRelative(path.join(from, '.img2threejs/state.json'));
    if (review) a.model.review = { ...a.model.review, ...review };
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
