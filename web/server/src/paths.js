import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

export const PORT = Number(process.env.PORT || 3733);
export const CLIENT_DIST =
  process.env.THAIKIT_CLIENT_DIST || path.resolve(here, '../../client/dist');
export const CLIENT_ROOT = path.resolve(here, '../../client');
export const IS_DEV = process.env.NODE_ENV !== 'production';
/** WSL2 bind mounts do not propagate inotify into the container. */
export const WATCH_POLL = process.env.THAIKIT_WATCH_POLL === '1';
export const WATCH_INTERVAL = Number(process.env.THAIKIT_WATCH_INTERVAL || 1000);

/**
 * THAIKIT_READ_ONLY=1 puts the whole deployment in read-only mode: every
 * mutating /api call is refused, the bake is unreachable, and the client hides
 * its save controls. This is the switch a PUBLIC instance runs with -- the API
 * has no auth, and a bake is minutes of GPU time anybody could start. Distinct
 * from the read-only the server falls into on its own when the registry is
 * malformed or unwritable (see index.js); that one is a fault, this one is a
 * decision.
 */
export const READ_ONLY = /^(1|true|yes|on)$/i.test(process.env.THAIKIT_READ_ONLY ?? '');
/**
 * THAIKIT_BASE_PATH=/thaikit serves the app under a URL prefix, for a reverse
 * proxy that mounts it beside other sites (outdoordevs.com/thaikit). Normalised
 * to a leading slash and no trailing one; empty means the root. The client
 * learns it through Vite's `base` (web/client/vite.config.js reads the same
 * variable) and the server prefixes every URL it hands out.
 */
export const BASE_PATH = (() => {
  const raw = (process.env.THAIKIT_BASE_PATH ?? '').trim();
  if (!raw || raw === '/') return '';
  return '/' + raw.replace(/^\/+|\/+$/g, '');
})();
