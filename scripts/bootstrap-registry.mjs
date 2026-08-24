#!/usr/bin/env node
/**
 * Makes a fresh clone work. Run on server boot and by `npm run bootstrap`.
 *
 * Deliberately does NOT crash on a malformed registry -- it reports the problem
 * and lets the server start read-only, because a malformed registry is exactly
 * when you most need the UI to look at it.
 */
import fs from 'node:fs/promises';

import {
  REGISTRY_PATH,
  ASSETS_DIR,
  SCRATCH_DIR,
  emptyRegistry,
  RegistrySchema,
  serializeRegistry,
  writeFileAtomic,
  sweepTempFiles,
  readRegistryRaw,
} from '@thaikit/registry-core';

import { ok, fail, log } from './lib/out.mjs';

async function main() {
  await fs.mkdir(ASSETS_DIR, { recursive: true });
  await fs.mkdir(SCRATCH_DIR, { recursive: true });

  const swept = await sweepTempFiles(REGISTRY_PATH);
  if (swept.length) log(`swept ${swept.length} orphaned temp file(s) from a killed writer`);

  let created = false;
  const raw = await readRegistryRaw(REGISTRY_PATH);
  if (raw === null) {
    await writeFileAtomic(REGISTRY_PATH, serializeRegistry(emptyRegistry()));
    created = true;
    log(`created empty registry at ${REGISTRY_PATH}`);
  }

  // Writability is the number one thing that breaks clone-and-run for other
  // people, because the container runs as uid 1000 and their host may not.
  let writable = true;
  try {
    await fs.access(REGISTRY_PATH, fs.constants.W_OK);
  } catch {
    writable = false;
    log('');
    log('  registry.json is NOT writable by this process.');
    log('  Inside Docker this almost always means a UID mismatch.');
    log(`  Fix: echo "THAIKIT_UID=$(id -u)" >> .env && echo "THAIKIT_GID=$(id -g)" >> .env`);
    log('  then: docker compose up --force-recreate');
    log('');
  }

  const parsed = RegistrySchema.safeParse(await readRegistryRaw(REGISTRY_PATH));
  if (!parsed.success) {
    log('registry.json is present but does not validate:');
    for (const issue of parsed.error.issues.slice(0, 10)) {
      log(`  ${issue.path.join('.') || '<root>'}: ${issue.message}`);
    }
    return ok({
      created,
      writable,
      valid: false,
      assetCount: null,
      issues: parsed.error.issues.length,
      registryPath: REGISTRY_PATH,
    });
  }

  return ok({
    created,
    writable,
    valid: true,
    assetCount: parsed.data.assets.length,
    registryPath: REGISTRY_PATH,
  });
}

main().catch(fail);
