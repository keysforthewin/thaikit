#!/usr/bin/env node
/**
 * Derive a prop's physics compound from the geometry it actually ships.
 *
 * The output is a handful of boxes and cylinders in root-local metres, written
 * to packages/props/src/models/<id>/colliders.json, that approximate the prop's OUTER SHELL closely
 * enough that a player can walk up to it and stand on its ledges. Cheap by
 * construction: this kit targets low-end PCs, so a compound is 1-8 parts, never
 * a trimesh.
 *
 * ## The input is TRIANGLES, not part bounding boxes
 *
 * This is the decision everything else rests on, and it was measured rather than
 * assumed. `king-power-store-building`'s "Parapet ring and fascia wall" is ONE
 * merged 48-triangle geometry shaped like a ring, and its AABB is the entire
 * roof -- 8.00 x 0.90 x 6.78. Cluster mesh AABBs and the standable surface lands
 * at 4.45 m instead of the roof deck at 3.62 m: an 0.83 m error on the one ledge
 * the whole feature exists for. These props are heavily merged (a median of TWO
 * meshes, 11 at the 90th percentile), so a part's AABB is routinely not a shape.
 *
 * Voxelising is affordable precisely because the triangle counts are small: a
 * median of 864 per prop, 4,694 at the 90th percentile, 29,240 at the worst. And
 * the sampling cost is bounded by SURFACE AREA over voxel size squared, not by
 * triangle count, because the voxel follows the model's own size.
 *
 * ## The algorithm
 *
 * Slab decomposition over surface occupancy, chosen because it produces ledges
 * BY CONSTRUCTION: a layer boundary is exactly where a walkable surface is, so
 * every ledge ends up as a box top at its true height, and a prop with no ledges
 * degrades to one box with no special case. Greedy AABB merging is dead on
 * arrival for the reason above; full 3D box packing has no notion of "this Y is
 * a ledge" and will happily merge a canopy into the thing underneath it.
 *
 * ## Scars, each with the measurement behind it
 *
 *  1. A MESH AABB IS NOT A SHAPE -- the parapet ring above.
 *  2. `InstancedMesh` must be expanded PER INSTANCE. `Box3.setFromObject`
 *     returns the envelope over every instance, and one cluster in this kit
 *     holds 1,185. Same scar `check-coplanar.mjs` already carries.
 *  3. One of the hundred bundles throws under plain Node --
 *     `cafe-amazon-store-building`, `document is not defined`, an unguarded baked
 *     canvas. Catch per asset, keep going under --all, and NEVER emit a collider
 *     from a partially-constructed root.
 *  4. The pivot is not always y=0. Six of a hundred assets have a min-Y that is
 *     not zero, worst `electric-meter-box` at -0.21 m. An assumed ground plane
 *     sinks or floats them, so groundY is MEASURED.
 *  5. Twenty-four of a hundred props are flat: eight road tiles are 8.00 x 0.00
 *     x 8.00, and the skyline imposters reach 314 m across at zero thickness. A
 *     zero-extent box is a NaN and a tunnelling hazard, so extents are inflated
 *     -- and a flat deck at ground level is inflated DOWNWARD, or the player
 *     walks 5 cm above the road.
 *  6. Parity fill on an open shell is UNDEFINED, not merely inaccurate: the oil
 *     drum's bung read 23 of 102 then 97 of 119 vertices as interior depending
 *     on winding. Hence surface-only occupancy, and never an inside test.
 *  7. Hollow geometry makes a raw volume ratio meaningless -- a parapet or a
 *     picket fence is a shell, and dividing by its surface volume reads 20x. The
 *     self-check divides by COLUMN-FILLED truth.
 *  8. A merged layer can silently delete a ledge, and a mean height error of
 *     0.03 m will hide it. Hence the ledge veto and the ledge inventory.
 *  9. Re-deriving clobbers hand edits, so `handTuned: true` refuses without
 *     --force.
 * 10. A yaw nobody consumes is worse than none: the viewer sets only a proxy's
 *     position and never reads a rotation, so a yawed record would be DRAWN
 *     wrong. Default off until the viewer reads it.
 *
 * Usage:
 *   node scripts/derive-colliders.mjs --id <asset-id> [flags]
 *   node scripts/derive-colliders.mjs --all [flags]
 */
import { readFileSync, existsSync } from 'node:fs';
import path from 'node:path';

import {
  readRegistry,
  updateAsset,
  writeFileAtomic,
  collidersFile, shipsAsset,
  toRepoRelative, parseId, storeOptionsFor, qualifiedId } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { resolveBundle } from './lib/bundle-for.mjs';
import {
  RECORD_SCHEMA_VERSION,
  GENERATOR_VERSION,
  PLAYER_RADIUS,
  STEP_HEIGHT,
  deriveOne,
  measureOne,
  suggestMass,
} from './lib/colliders.mjs';

export { RECORD_SCHEMA_VERSION };

async function run(asset, baseOpts) {
  // The geometry measured is the bundle that SHIPS: the pack installer's build
  // under packs/<ns>/, or the scratch bundle with --from scratch. `qid` is the
  // id every path helper takes: bare for thaikit's own, `@ns/name` for an
  // adopted pack's item.
  const qid = qualifiedId(asset.pack ?? '@thai-kit', asset.id);
  const opts = { ...baseOpts, bundle: await resolveBundle(qid, baseOpts.from) };
  const file0 = collidersFile(qid);
  const existing = existsSync(file0) ? JSON.parse(readFileSync(file0, 'utf8')) : null;

  // --measure keeps the parts exactly as they are and only records what the rays
  // say about them, so a hand-tuned compound can carry evidence without losing
  // the hand.
  if (opts.measure) {
    if (!existing?.parts?.length) {
      throw new Error('nothing to measure — this prop has no compound yet; derive one first');
    }
    const measured = measureOne(asset, existing, opts);
    return writeRecord(asset, existing, measured, opts, { measuring: true });
  }

  const { record, meta } = deriveOne(asset, opts);
  if (existing?.handTuned && !opts.force) {
    throw new Error(
      `${toRepoRelative(file0)} is hand-tuned (${existing.parts?.length ?? 0} parts) and would ` +
        'be overwritten. A hand-placed box is a measurement taken with a pair of eyes and this ' +
        'script cannot see what they saw. Pass --measure to record the numbers for the shape ' +
        'that is there, or --force to replace it.',
    );
  }

  return writeRecord(asset, existing, { record, meta }, opts, { measuring: false });
}

async function writeRecord(asset, existing, { record, meta }, opts, { measuring }) {
  const file = collidersFile(asset.id);
  const relative = toRepoRelative(file);

  const doc = measuring
    ? {
        ...existing,
        parts: record.parts,
        selfCheck: record.selfCheck,
        ledgesPreserved: record.ledgesPreserved,
        ledgesLost: record.ledgesLost,
        trueLedges: record.trueLedges,
        measuredAt: new Date().toISOString(),
      }
    : {
    schemaVersion: RECORD_SCHEMA_VERSION,
    assetId: asset.id,
    frame: 'root-local',
    units: 'm',
    groundY: meta.groundY,
    derived: true,
    handTuned: false,
    generatedAt: new Date().toISOString(),
    generator: {
      script: 'scripts/derive-colliders.mjs',
      version: GENERATOR_VERSION,
      bundleSha256: meta.bundleSha256 ?? null,
      params: {
        maxParts: meta.maxParts,
        voxel: meta.voxel,
        minLayer: opts.minLayer,
        playerRadius: PLAYER_RADIUS,
        stepHeight: STEP_HEIGHT,
        cylinders: opts.cylinders,
        yaw: false,
      },
    },
    yaw: 0,
    parts: record.parts,
    selfCheck: record.selfCheck,
    ledgesPreserved: record.ledgesPreserved,
    ledgesLost: record.ledgesLost,
    trueLedges: record.trueLedges,
    suggestedMassKg: suggestMass(asset, record.parts),
    notes: record.notes ?? [],
  };

  const c = record.selfCheck ?? {};
  log(
    `${asset.id}: ${record.parts.length}/${meta.maxParts} part(s) ` +
      `[${[...new Set(record.parts.map((p) => p.type))].join(', ')}] · ` +
      `${meta.triangles} tris, voxel ${meta.voxel ?? 'n/a'} m, ${meta.filtered} filtered · ` +
      `coverage ${c.coverage ?? 'n/a'}, p95 ${c.p95AbsDelta ?? 'n/a'} m, ` +
      `max ${c.maxAbsDelta ?? 'n/a'} m · ledges ${record.ledgesPreserved} · ${meta.elapsedMs} ms`,
  );
  for (const n of doc.notes) log(`  note: ${n}`);
  for (const l of record.ledgesLost ?? []) {
    log(`  LOST ledge at y=${l.y} (${l.area} m²): ${l.reason}`);
  }

  if (opts.dryRun) return { id: asset.id, dryRun: true, parts: doc.parts.length, selfCheck: c, meta, doc };

  await writeFileAtomic(file, `${JSON.stringify(doc, null, 2)}\n`);
  await updateAsset(qid, (current) => ({
    ...current,
    model: {
      ...current.model,
      colliders: {
        file: relative,
        parts: doc.parts.length,
        // Measuring does not un-tune a compound: the shape is still the one
        // somebody placed by hand, and the numbers now describe THAT shape.
        handTuned: measuring ? Boolean(existing?.handTuned) : false,
        derivedAt: doc.generatedAt ?? existing?.generatedAt ?? null,
        coverage: c.coverage ?? null,
        maxLedgeError: c.maxAbsDelta ?? null,
        p95LedgeError: c.p95AbsDelta ?? null,
        overshoot: c.overshoot ?? null,
        measurementSkipped: c.skipped ?? null,
        ledgesPreserved: doc.ledgesPreserved ?? null,
      },
    },
    updatedAt: new Date().toISOString(),
  }));

  return { id: asset.id, file: relative, parts: doc.parts.length, selfCheck: c, meta };
}

async function main() {
  const args = parseArgs();
  const registry = args.all ? await readRegistry() : args.id ? await readRegistry(storeOptionsFor(String(args.id))) : await readRegistry();
  const wanted = args.id ? parseId(String(args.id)) : null;
  for (const a of registry.assets) a.pack = wanted?.ns ?? '@thai-kit';

  const opts = {
    from: args.from ?? 'pack',
    maxParts: args['max-parts'] ? Number(args['max-parts']) : null,
    voxel: args.voxel ?? 'auto',
    maxCells: Number(args['max-cells'] ?? 6e6),
    maxTriangles: Number(args['max-triangles'] ?? 400000),
    minLayer: Number(args['min-layer'] ?? 0.08),
    layerIou: Number(args['layer-iou'] ?? 0.75),
    layerArea: Number(args['layer-area'] ?? 0.25),
    ledgeRatio: Number(args['ledge-ratio'] ?? 1.6),
    maxRectsPerLayer: Number(args['max-rects'] ?? 4),
    decorMaxExtent: Number(args['decor-max-extent'] ?? 0.1),
    decorVolumeFrac: Number(args['decor-volume-frac'] ?? 0.02),
    decorFootprintFrac: Number(args['decor-footprint-frac'] ?? 0.02),
    cylinders: args.cylinders !== 'off',
    dryRun: Boolean(args['dry-run']),
    measure: Boolean(args.measure),
    force: Boolean(args.force),
  };

  const targets = args.all
    ? registry.assets.filter(shipsAsset)
    : registry.assets.filter((a) => a.id === wanted?.name);

  if (!targets.length) {
    return fail(args.all ? 'no assets ship' : `no asset with id "${args.id}"`);
  }

  const results = [];
  const failures = [];
  for (const asset of targets) {
    try {
      results.push(await run(asset, opts));
    } catch (err) {
      // Scar 3: one bundle in the kit throws under Node. Keep going under --all,
      // and never emit a collider from a root that did not finish building.
      failures.push({ id: asset.id, error: err.message });
      log(`FAIL   : ${asset.id} — ${err.message}`);
      if (!args.all) return fail(err.message, { id: asset.id });
    }
  }

  if (args.all) {
    const worst = results
      .filter((r) => r.selfCheck?.maxAbsDelta != null)
      .sort((a, b) => b.selfCheck.maxAbsDelta - a.selfCheck.maxAbsDelta)
      .slice(0, 10);
    log('');
    log(`worst ten by max ledge error, which is the list worth looking at by hand:`);
    for (const r of worst) {
      log(`  ${r.selfCheck.maxAbsDelta.toFixed(3)} m  cov ${r.selfCheck.coverage}  ${r.id}`);
    }
    log(`${results.length} derived, ${failures.length} failed`);
  }

  ok({ derived: results.length, failed: failures.length, results, failures });
}

main().catch((err) => fail(err));
