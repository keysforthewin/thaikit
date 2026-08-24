import chokidar from 'chokidar';

import { readRegistry, etagFor, REGISTRY_PATH, ASSETS_DIR } from '@thaikit/registry-core';
import { WATCH_POLL, WATCH_INTERVAL } from './paths.js';

/**
 * Watch the registry and generated assets for changes made outside the server.
 *
 * usePolling is mandatory inside Docker on WSL2: inotify events from host writes
 * do not reliably cross a bind mount, so without it the UI never notices the
 * generation skills' work at all.
 */
export function startWatcher(state) {
  const watcher = chokidar.watch([REGISTRY_PATH, ASSETS_DIR], {
    ignoreInitial: true,
    ignored: (p) => /node_modules|\.git|\.tmp-|\.lock/.test(p),
    // A GLB is written progressively; reading it half-formed yields garbage.
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
    usePolling: WATCH_POLL,
    interval: WATCH_INTERVAL,
    binaryInterval: WATCH_INTERVAL * 2,
    depth: 3,
  });

  let timer = null;
  const onChange = (event, changedPath) => {
    clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        const registry = await readRegistry();
        const etag = etagFor(registry);

        // Our own writes come back through the watcher too. Comparing the hash
        // is what stops the server echoing them at every connected client.
        //
        // But the hash covers the REGISTRY ONLY, so on its own it also swallows
        // a generated file changing under assets/ while the JSON stays byte
        // identical -- re-running the module build or promote over an existing build
        // rewrites the GLB without necessarily moving anything the registry
        // records. That is exactly the "my new mesh will not show up" case, so
        // asset-file changes are always forwarded.
        const registryChanged = etag !== state.lastEtag;
        const underAssets = typeof changedPath === 'string' && changedPath.startsWith(ASSETS_DIR);
        if (!registryChanged && !underAssets) return;
        if (registryChanged) state.lastEtag = etag;
        for (const send of state.clients) {
          send('registry', { etag, assetCount: registry.assets.length, event, path: changedPath });
        }
      } catch (err) {
        for (const send of state.clients) send('error', { message: err.message });
      }
    }, 250);
  };

  watcher.on('all', onChange);
  watcher.on('ready', () => {
    state.watching = true;
  });
  watcher.on('error', (err) => console.error('watcher error:', err.message));

  return watcher;
}
