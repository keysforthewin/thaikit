#!/usr/bin/env node
/**
 * registry.json v2 -> v3: two GLB tracks become one Three.js model.
 *
 * v2 built every prop twice -- `meshes.simple` (Blender primitives) and
 * `meshes.complex` (Meshy reconstruction) -- scored both against a local rubric,
 * and shipped whichever `preferredTrack` named. v3 has one artefact and it is
 * not a GLB: a procedural Three.js factory, generated and quality-gated by the
 * img2threejs skill.
 *
 * The two tracks therefore CANNOT be carried forward. A GLB is not a Three.js
 * module, so every asset's model stage goes back to `pending` and has to be
 * rebuilt. What does carry forward is the evidence that survives the format
 * change: the winning track's thumbnail, so the browse grid is not blank
 * overnight, and its score, so "which props were already good" is still legible.
 * Both are marked stale by `model.status = 'pending'` -- a thumbnail with no
 * `model.file` beside it is a picture of the old GLB, and the UI says so.
 *
 * Usage: node scripts/migrate-registry.mjs [--dry-run]
 *
 * A one-shot. Uses migrateRegistry rather than updateRegistry deliberately: the
 * latter re-reads through the CURRENT schema, so it can never open a file
 * written by an older one.
 */
import { readRegistryRaw, migrateRegistry, SCHEMA_VERSION } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

/** The track whose evidence is worth carrying: the one that was going to ship. */
function winningTrack(asset) {
  const meshes = asset.meshes ?? {};
  if (asset.preferredTrack && meshes[asset.preferredTrack]) {
    return meshes[asset.preferredTrack];
  }
  const tracks = ['simple', 'complex'].map((t) => meshes[t]).filter(Boolean);
  // Highest score wins, but a shipped-but-unscored track still beats nothing:
  // bottle-crate had a promoted GLB and no judge run, and dropping its thumbnail
  // for want of a number would blank a prop that was visibly finished.
  const scored = tracks
    .filter((t) => t.quality?.score != null)
    .sort((a, b) => b.quality.score - a.quality.score);
  return scored[0] ?? tracks.find((t) => t.file) ?? null;
}

function migrateAsset(asset) {
  const won = winningTrack(asset);
  const score = won?.quality?.score ?? null;

  const out = {
    ...asset,
    // Nothing in a v2 entry says whether a prop is a person or a dog: v2 only
    // ever built props. Anything else has to be retagged by hand, which is
    // honest -- guessing it from a name would be worse than leaving it wrong in
    // a way nobody can see.
    subject: 'prop',
    status: {
      image: asset.status?.image ?? 'pending',
      model: 'pending',
    },
    model: {
      status: 'pending',
      file: null,
      source: null,
      spec: null,
      state: null,
      export: 'createObjectModel',
      // Stale by construction: a render of the retired GLB, kept only so the
      // grid has something to show until the prop is rebuilt.
      thumb: won?.thumb ?? null,
      triangles: null,
      vertices: null,
      meshes: null,
      materials: null,
      textures: null,
      drawCalls: null,
      gpuBytesEstimate: null,
      fileBytes: null,
      runtime: {},
      reference: {},
      review: {
        fidelity: score == null ? null : score / 100,
        score,
        threshold: won?.quality?.threshold ?? 85,
        passed: false,
        passesComplete: [],
        featureReviews: [],
        corrections: {},
        decision: '',
        critique: won?.quality?.critique ?? '',
        comparisonImage: null,
        judgedAt: won?.quality?.judgedAt ?? null,
      },
      quarantine: null,
    },
  };

  delete out.meshes;
  delete out.preferredTrack;
  delete out.maxAttempts;
  delete out.simplify;

  return out;
}

async function main() {
  const args = parseArgs();
  const raw = await readRegistryRaw();

  if (raw.schemaVersion === SCHEMA_VERSION) {
    return fail(
      `registry is already at schemaVersion ${SCHEMA_VERSION}; this migration is a one-shot`,
      { schemaVersion: raw.schemaVersion },
    );
  }
  if (raw.schemaVersion !== 2) {
    return fail(`expected schemaVersion 2, found ${raw.schemaVersion}`);
  }

  const migrated = raw.assets.map(migrateAsset);
  const summary = migrated.map((a, i) => ({
    id: a.id,
    carriedThumb: Boolean(a.model.thumb),
    carriedScore: a.model.review.score,
    hadTracks: ['simple', 'complex'].filter((t) => raw.assets[i].meshes?.[t]?.file),
  }));

  for (const row of summary) {
    log(
      `${row.id}: rebuilt from scratch` +
        ` (was ${row.hadTracks.length ? row.hadTracks.join('+') : 'unbuilt'};` +
        ` kept score=${row.carriedScore ?? '-'} thumb=${row.carriedThumb ? 'yes' : 'no'})`,
    );
  }

  const rebuild = summary.filter((r) => r.hadTracks.length).length;
  log('');
  log(`${rebuild} of ${summary.length} assets had a shipped GLB. All ${summary.length} now need`);
  log('a Three.js rebuild: run thaikit-model. The old GLBs are left on disk untouched.');

  if (args['dry-run']) {
    return ok({ dryRun: true, from: 2, to: SCHEMA_VERSION, assets: summary.length, summary });
  }

  await migrateRegistry((registry) => {
    registry.schemaVersion = SCHEMA_VERSION;
    registry.assets = migrated;
    return registry;
  });

  ok({ from: 2, to: SCHEMA_VERSION, assets: summary.length, rebuild, summary });
}

main().catch((err) => fail(err));
