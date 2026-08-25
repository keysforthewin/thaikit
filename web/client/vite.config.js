import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true },
  // Vite's dependency pre-bundle defaults to <root>/node_modules/.vite, which
  // in the dev container sits INSIDE the tree `node --watch` is watching. Every
  // optimize writes deps_temp_*/package.json, node restarts the server, the
  // restart kills the optimize mid-write, and the next boot starts another --
  // a restart loop every half second that never serves a page. Point the cache
  // somewhere unwatched (and off the bind mount, which is also faster).
  // Unset outside the container, where the default is correct.
  cacheDir: process.env.THAIKIT_VITE_CACHE || undefined,
  server: {
    // WSL2 bind mounts do not deliver inotify events into a container.
    watch: { usePolling: process.env.THAIKIT_WATCH_POLL === '1', interval: 1000 },
  },
});
