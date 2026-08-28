#!/usr/bin/env node
/**
 * Migrate the registry from schemaVersion 4 to 5.
 *
 * v5 throws the DECLARED collider away and replaces it with a derived compound.
 *
 * What is being removed is `collider: 'box' | 'cylinder' | 'convex' | 'none'`, a
 * single word chosen at list time. It never became geometry anything could use:
 * build-registry.mjs published only the word, and render/harness.html mapped the
 * model's own collider records down to bare NAMES, discarding type, offset and
 * scale -- which is why the promotion gate could only ever assert that the count
 * was not zero. All 100 assets shipped exactly one collider, and one primitive
 * cannot express a ledge: a box to the 7-Eleven's parapet leaves the canopy at
 * 3 m with nothing to stand on, and a box to the canopy leaves the parapet gone.
 *
 * In its place: `model.colliders`, a pointer to assets/<id>/colliders.json plus
 * the self-check numbers derive-colliders.mjs measures, and `physics`, which is
 * the declaration the old field was pretending to be -- whether the prop is a
 * dynamic body, and what it weighs.
 *
 * `model.runtime.colliders` goes too. It was the name-only array the harness
 * produced, and after this nothing reads it.
 *
 * Every asset migrates to `physics.enabled: false` and an empty compound. That
 * is correct rather than lazy: the 100 props in the kit today are buildings,
 * tiles, signs and vehicles that must not be kickable, and it leaves making one
 * dynamic an explicit act by a person. Nothing needs rebuilding -- the compounds
 * are derived from the bundles that already shipped, by a separate pass.
 *
 * A migration CANNOT use updateRegistry: that re-reads through the CURRENT
 * schema, so it can never open a file written by an older one. migrateRegistry
 * takes raw in and validates on the way out, under the same lock.
 *
 * Usage:
 *   node scripts/migrate-registry-v5.mjs [--dry-run]
 */
import { readRegistryRaw, migrateRegistry, SCHEMA_VERSION } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function main() {
  const args = parseArgs();
  const raw = await readRegistryRaw();

  if (raw.schemaVersion === SCHEMA_VERSION) {
    return fail(
      `registry is already at schemaVersion ${SCHEMA_VERSION}; this migration is a one-shot`,
      { schemaVersion: raw.schemaVersion },
    );
  }
  if (raw.schemaVersion !== 4) {
    return fail(`expected schemaVersion 4, found ${raw.schemaVersion}`);
  }

  /** What the kit declared, kept only to report what is being dropped. */
  const declared = {};

  const migrated = raw.assets.map((a) => {
    declared[a.collider ?? 'box'] = (declared[a.collider ?? 'box'] ?? 0) + 1;

    const { collider: _dropped, ...rest } = a;
    const { colliders: _names, ...runtime } = a.model?.runtime ?? {};

    return {
      ...rest,
      physics: { enabled: false, massKg: null },
      model: {
        ...a.model,
        runtime,
        colliders: {
          file: null,
          parts: 0,
          handTuned: false,
          derivedAt: null,
          coverage: null,
          maxLedgeError: null,
          ledgesPreserved: null,
        },
      },
    };
  });

  log(
    `${migrated.length} assets carried forward. Declared colliders dropped: ` +
      Object.entries(declared)
        .sort((x, y) => y[1] - x[1])
        .map(([k, n]) => `${n} ${k}`)
        .join(', '),
  );
  log(
    'Every asset is now physics.enabled=false with an empty compound. Run ' +
      'derive-colliders.mjs to give them real shells; nothing needs rebuilding.',
  );

  if (args['dry-run']) {
    return ok({ dryRun: true, from: 4, to: SCHEMA_VERSION, assets: migrated.length, declared });
  }

  await migrateRegistry((registry) => {
    registry.schemaVersion = SCHEMA_VERSION;
    registry.assets = migrated;
    return registry;
  });

  ok({ from: 4, to: SCHEMA_VERSION, assets: migrated.length, declared });
}

main().catch((err) => fail(err));
