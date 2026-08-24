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
