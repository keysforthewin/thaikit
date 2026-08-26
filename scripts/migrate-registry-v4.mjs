#!/usr/bin/env node
/**
 * Migrate the registry from schemaVersion 3 to 4.
 *
 * v4 adds `model.maps`: the authored PBR map files a prop ships beside its
 * module. Nothing had any before this, so the migration is purely additive and
 * no prop needs rebuilding -- which is exactly why it looks so thin next to the
 * v2 -> v3 one, whose whole job was to throw the GLB pipeline away.
 *
 * It ships anyway, and it has to ship in the same commit as the bump. The field
 * defaults to [], so zod alone could fill it -- but `schemaVersion` is a
 * z.literal, so the moment SCHEMA_VERSION becomes 4 every readRegistry rejects
 * the 3 on disk and every script in the repo stops, the web server included.
 * And a consumer of dist/registry.json keys off schemaVersion to know whether
 * `maps` exists at all, so staying at 3 would be lying about the shape.
 *
 * A migration CANNOT use updateRegistry: that re-reads through the CURRENT
 * schema, so it can never open a file written by an older one. migrateRegistry
 * takes raw in and validates on the way out, under the same lock.
 *
 * Usage:
 *   node scripts/migrate-registry-v4.mjs [--dry-run]
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
  if (raw.schemaVersion !== 3) {
    return fail(`expected schemaVersion 3, found ${raw.schemaVersion}`);
  }

  const migrated = raw.assets.map((a) => ({
    ...a,
    model: { ...a.model, maps: a.model?.maps ?? [] },
  }));

  log(`${migrated.length} assets carried forward; none had authored maps, so none needs a rebuild.`);

  if (args['dry-run']) {
    return ok({ dryRun: true, from: 3, to: SCHEMA_VERSION, assets: migrated.length });
  }

  await migrateRegistry((registry) => {
    registry.schemaVersion = SCHEMA_VERSION;
    registry.assets = migrated;
    return registry;
  });

  ok({ from: 3, to: SCHEMA_VERSION, assets: migrated.length });
}

main().catch((err) => fail(err));
