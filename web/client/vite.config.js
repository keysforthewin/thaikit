import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: { outDir: 'dist', emptyOutDir: true },
  server: {
    // WSL2 bind mounts do not deliver inotify events into a container.
    watch: { usePolling: process.env.THAIKIT_WATCH_POLL === '1', interval: 1000 },
  },
});
