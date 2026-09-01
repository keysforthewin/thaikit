#!/usr/bin/env node
/**
 * Makes a fresh clone work. Run on server boot and by `npm run bootstrap`.
 *
 * Deliberately does NOT crash on a malformed record -- it reports the problem
 * and lets the server start read-only, because a malformed record is exactly
 * when you most need the UI to look at it.
 *
 * The registry is the models tree, packages/props/src/models/<id>/thaikit.json.
 * An empty (or absent) tree is the empty registry; nothing needs creating.
 */
import fs from 'node:fs/promises';

import {
  MODELS_DIR,
  SCRATCH_DIR,
  AssetFileSchema,
  sweepTempFiles,
  readRegistryRaw,
} from '@thaikit/registry-core';

import { ok, fail, log } from './lib/out.mjs';

async function main() {
  await fs.mkdir(MODELS_DIR, { recursive: true });
  await fs.mkdir(SCRATCH_DIR, { recursive: true });

  const swept = await sweepTempFiles(MODELS_DIR);
  if (swept.length) log(`swept ${swept.length} orphaned temp file(s) from a killed writer`);

  // Writability is the number one thing that breaks clone-and-run for other
  // people, because the container runs as uid 1000 and their host may not.
  let writable = true;
  try {
    await fs.access(MODELS_DIR, fs.constants.W_OK);
  } catch {
    writable = false;
    log('');
    log('  packages/props/src/models is NOT writable by this process.');
    log('  Inside Docker this almost always means a UID mismatch.');
    log(`  Fix: echo "THAIKIT_UID=$(id -u)" >> .env && echo "THAIKIT_GID=$(id -g)" >> .env`);
    log('  then: docker compose up --force-recreate');
    log('');
  }

  const records = (await readRegistryRaw({ modelsDir: MODELS_DIR })) ?? [];
  let issues = 0;
  for (const { dir, file, raw } of records) {
    const parsed = AssetFileSchema.safeParse(raw);
    if (parsed.success && parsed.data.id === dir) continue;
    issues += 1;
    if (issues <= 10) {
      if (!parsed.success) {
        const first = parsed.error.issues[0];
        log(`${file}: ${first.path.join('.') || '<root>'}: ${first.message}`);
      } else {
        log(`${file}: id "${parsed.data.id}" does not match its directory "${dir}"`);
      }
    }
  }
  if (issues) {
    log(`${issues} record(s) do not validate; the server will start read-only`);
    return ok({ created: false, writable, valid: false, assetCount: null, issues, modelsDir: MODELS_DIR });
  }

  return ok({ created: false, writable, valid: true, assetCount: records.length, modelsDir: MODELS_DIR });
}

main().catch(fail);
