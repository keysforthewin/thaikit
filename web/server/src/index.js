import http from 'node:http';
import { spawnSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { readRegistry, etagFor, MODELS_DIR, REPO_ROOT } from '@thaikit/registry-core';

import { createApp } from './app.js';
import { startWatcher } from './watcher.js';
import { adoptBakes } from './lib/bake.js';
import { PORT, IS_DEV, WATCH_POLL, READ_ONLY, BASE_PATH } from './paths.js';

const here = path.dirname(fileURLToPath(import.meta.url));

async function main() {
  // Make a fresh clone work: create the models tree, sweep dead temp files, and
  // report a UID mismatch loudly rather than 500-ing on the first write.
  const bootstrap = spawnSync(
    process.execPath,
    [path.resolve(here, '../../../scripts/bootstrap-registry.mjs')],
    { encoding: 'utf8' },
  );
  if (bootstrap.stderr) process.stderr.write(bootstrap.stderr);
  let boot = {};
  try {
    boot = JSON.parse((bootstrap.stdout || '{}').trim().split('\n').pop());
  } catch {
    /* fall through to the checks below */
  }

  const state = {
    clients: new Set(),
    lastEtag: null,
    watching: false,
    writable: boot.writable !== false,
    // A malformed registry starts the server read-only with a banner rather
    // than crash-looping -- that is exactly when you need the UI to look at it.
    readOnly: READ_ONLY || boot.valid === false || boot.writable === false,
    // THAIKIT_READ_ONLY is a deliberate mode, not a fault, so it is named first
    // and separately: the UI hides its save controls on `readOnly` alone, and
    // the reason is what the banner says.
    publicReadOnly: READ_ONLY,
    readOnlyReason: READ_ONLY
      ? 'this is a public, read-only instance: browse and inspect, but nothing can be saved or baked here'
      : boot.valid === false
        ? 'an asset record (packages/props/src/models/*/thaikit.json) does not validate against the schema'
        : boot.writable === false
          ? 'packages/props/src/models is not writable by this process (check THAIKIT_UID)'
          : null,
    httpServer: null,
  };

  const server = http.createServer();
  state.httpServer = server;

  const app = await createApp(state);
  server.on('request', app);

  try {
    state.lastEtag = etagFor(await readRegistry());
  } catch {
    state.lastEtag = null;
  }

  startWatcher(state);
  // Bakes a previous server process (a --watch restart, say) left running.
  adoptBakes(state).catch((e) => console.error(`[bake] adopt failed: ${e.message}`));

  server.listen(PORT, '0.0.0.0', async () => {
    let count = '?';
    try {
      count = (await readRegistry()).assets.length;
    } catch {
      /* read-only mode already reported */
    }
    console.log('');
    console.log(`  thaikit -> http://localhost:${PORT}${BASE_PATH}/`);
    console.log(`  models:   ${MODELS_DIR} (${count} assets)`);
    console.log(`  repo:     ${REPO_ROOT}`);
    console.log(`  mode:     ${IS_DEV ? 'development (Vite middleware, HMR)' : 'production'}`);
    console.log(`  watch:    ${WATCH_POLL ? 'polling (bind-mount safe)' : 'inotify'}`);
    if (BASE_PATH) console.log(`  base:     ${BASE_PATH}`);
    if (state.readOnly) console.log(`  READ-ONLY: ${state.readOnlyReason}`);
    console.log('');
  });

  const shutdown = () => {
    server.close(() => process.exit(0));
    setTimeout(() => process.exit(0), 3000).unref();
  };
  process.on('SIGTERM', shutdown);
  process.on('SIGINT', shutdown);
}

main().catch((err) => {
  console.error('failed to start:', err);
  process.exit(1);
});
