import chokidar from 'chokidar';

import { readRegistry, etagFor, MODELS_DIR, ADOPTED_DIR } from '@thaikit/registry-core';
import { WATCH_POLL, WATCH_INTERVAL } from './paths.js';
import { OVERRIDES_DIR } from './lib/overrides.js';
import { INDEX_FILE, classifyChange, afterTreeEdit } from './lib/refresh.js';

/**
 * Watch the source tree, the overrides and the pack index for changes made
 * outside the server -- the generation skills write the tree from the host
 * while a tab is open, and the installer rewrites packs/index.json.
 *
 * What a change MEANS is decided in lib/refresh.js: a record or image change is
 * announced and re-read, a source change queues a one-item pack refresh. The
 * registry ETag is still tracked so the browse page's health poll can tell a
 * real change from an echo of the server's own write.
 *
 * usePolling is mandatory inside Docker on WSL2: inotify events from host writes
 * do not reliably cross a bind mount, so without it the UI never notices the
 * generation skills' work at all.
 */
export function startWatcher(state) {
  // ADOPTED_DIR is one level deeper (adopted/<ns>/models/<name>/maps/x), hence depth 4.
  const watcher = chokidar.watch([MODELS_DIR, ADOPTED_DIR, INDEX_FILE, OVERRIDES_DIR], {
    ignoreInitial: true,
    ignored: (p) => /node_modules|\.git|\.tmp-|\.lock|model\.bundle\.js|\.img2threejs/.test(p),
    // A file is written progressively; reading it half-formed yields garbage.
    awaitWriteFinish: { stabilityThreshold: 300, pollInterval: 100 },
    usePolling: WATCH_POLL,
    interval: WATCH_INTERVAL,
    binaryInterval: WATCH_INTERVAL * 2,
    depth: 4,
  });

  const timers = new Map();
  const onChange = (event, changedPath) => {
    const change = classifyChange(changedPath);
    if (!change) return;
    // Coalesce per file: a save is a temp file plus a rename, two events.
    const key = changedPath;
    clearTimeout(timers.get(key));
    timers.set(
      key,
      setTimeout(async () => {
        timers.delete(key);
        try {
          if (change.kind === 'meta') {
            // Our own writes come back through the watcher too. Comparing the
            // hash is what stops the server echoing them at every client.
            const etag = etagFor(await readRegistry());
            if (etag === state.lastEtag) return;
            state.lastEtag = etag;
          }
          await afterTreeEdit(state, { ...change, path: changedPath });
        } catch (err) {
          for (const send of state.clients) send('error', { message: err.message });
        }
      }, 250),
    );
  };

  watcher.on('all', onChange);
  watcher.on('ready', () => {
    state.watching = true;
  });
  watcher.on('error', (err) => console.error('watcher error:', err.message));

  return watcher;
}
