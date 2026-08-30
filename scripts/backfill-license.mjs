#!/usr/bin/env node
/**
 * One-pass backfill of the two licence fields a public release needs.
 *
 * `license.notice` and `license.generatedBy` are the only asset fields that
 * speak to anyone OUTSIDE this repo, and both shipped holding their schema
 * defaults on all 100 assets -- so a consumer reading the licence field
 * programmatically was told a 7-Eleven store is "fully synthetic" with no
 * third-party involvement, which is true of its geometry and misleading about
 * its mark.
 *
 * Goes through `updateRegistry`, so it takes the same lock the web UI respects.
 * Never write registry.json directly.
 *
 *   node scripts/backfill-license.mjs --dry-run
 *   node scripts/backfill-license.mjs
 */
import fs from 'node:fs';
import path from 'node:path';

import { updateRegistry, REPO_ROOT } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

/** The sentence every branded asset carries, so the wording cannot drift apart. */
const CLEARANCE =
  "The repo's MIT licence covers this asset's code, not the mark; anyone shipping it needs their own trademark clearance.";

/**
 * The trademark sentences already written into `notes` on the store buildings,
 * which this script MOVES into `license.notice`. Matched rather than hard-coded
 * so the owner names stay whatever the author wrote.
 */
const NOTES_TRADEMARK = /^(Real trademark:.*?trademark clearance\.)\s*/;

/**
 * Assets whose trademark is in the NAME and which carry no caveat anywhere.
 *
 * These are a larger exposure than the store buildings, not a smaller one: the
 * mark is in the id, the display name and the filename, so a consumer never
 * has to read a note to ship it.
 */
const UNMARKED = {
  'honda-wave': 'Honda / Honda Motor',
  'isuzu-d-max': 'Isuzu D-Max / Isuzu Motors',
  'toyota-commuter-van': 'Toyota Commuter / Toyota Motor',
  'toyota-fortuner': 'Toyota Fortuner / Toyota Motor',
  'toyota-hilux': 'Toyota Hilux / Toyota Motor',
};

/** The default the schema hands out, and the only value this script overwrites. */
const DEFAULT_NOTICE = 'Fully synthetic. No third-party scanned or scraped geometry.';

function generatedBy(asset) {
  const entries = [];
  if (asset.image?.model) {
    entries.push({ role: 'reference-image', model: asset.image.model, vendor: 'fal.ai' });
  }
  // Only where a run was actually RECORDED. The pipeline uses Meshy as a
  // structural baseline on the img2threejs route, but `model.reference` is
  // filled on exactly one asset -- and a provenance record is worth nothing if
  // it is inferred rather than evidenced.
  if (asset.model?.reference?.at && asset.model.reference.provider) {
    entries.push({
      role: 'reference-mesh',
      model: asset.model.reference.provider.replace(/^fal:/, ''),
      vendor: 'fal.ai',
    });
  }
  // Every prop in the kit, imposters included. The skyline imposters reach
  // `author-imposter.mjs` for the alpha key and the quad, but the model itself
  // was built through img2threejs the same way the rest were -- confirmed by
  // the author. Their sculpt specs carry no `reviewHistory` and their scratch
  // state has been cleaned, so the registry does not evidence this either way;
  // do not "correct" it back from the absence of those files.
  entries.push({ role: 'model', model: 'img2threejs', vendor: 'img2threejs' });
  return entries;
}

async function main() {
  const args = parseArgs();
  const dryRun = Boolean(args['dry-run']);
  const changes = { movedNotice: [], addedNotice: [], provenance: 0, skippedNotice: [] };

  const mutate = (registry) => {
    for (const asset of registry.assets) {
      asset.license ??= {};
      asset.license.spdx ??= 'MIT';

      // 1. Provenance, on every asset.
      asset.license.generatedBy = generatedBy(asset);
      changes.provenance += 1;

      // 2. The trademark caveat. Only ever replaces the schema default -- a
      //    notice somebody has already written by hand is left alone.
      const custom = asset.license.notice && asset.license.notice !== DEFAULT_NOTICE;
      const match = (asset.notes ?? '').match(NOTES_TRADEMARK);
      if (match && !custom) {
        asset.license.notice = match[1];
        asset.notes = asset.notes.replace(NOTES_TRADEMARK, '');
        changes.movedNotice.push(asset.id);
      } else if (match && custom) {
        changes.skippedNotice.push(asset.id);
      } else if (UNMARKED[asset.id] && !custom) {
        asset.license.notice = `Real trademark: ${UNMARKED[asset.id]}. ${CLEARANCE}`;
        changes.addedNotice.push(asset.id);
      }
    }
    return registry;
  };

  if (dryRun) {
    const registry = JSON.parse(fs.readFileSync(path.join(REPO_ROOT, 'registry.json'), 'utf8'));
    mutate(registry);
  } else {
    await updateRegistry(mutate);
  }

  log(`provenance written on ${changes.provenance} assets`);
  log(`trademark notice MOVED from notes on ${changes.movedNotice.length}: ${changes.movedNotice.join(', ')}`);
  log(`trademark notice ADDED on ${changes.addedNotice.length}: ${changes.addedNotice.join(', ')}`);
  if (changes.skippedNotice.length) log(`left alone (hand-written notice): ${changes.skippedNotice.join(', ')}`);
  return ok({ dryRun, ...changes });
}

main().catch(fail);
