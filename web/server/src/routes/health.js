import express from 'express';
import { readRegistry, MODELS_DIR, etagFor } from '@thaikit/registry-core';
import { BASE_PATH } from '../paths.js';

export function healthRouter(state) {
  const router = express.Router();

  router.get('/health', async (req, res, next) => {
    try {
      const registry = await readRegistry();
      res.json({
        ok: true,
        mode: process.env.NODE_ENV ?? 'development',
        modelsDir: MODELS_DIR,
        assetCount: registry.assets.length,
        etag: etagFor(registry),
        writable: state.writable,
        readOnly: state.readOnly,
        publicReadOnly: Boolean(state.publicReadOnly),
        readOnlyReason: state.readOnlyReason,
        basePath: BASE_PATH,
        watching: state.watching,
      });
    } catch (err) {
      // A malformed registry must not take the health endpoint down -- the UI
      // needs it to render the read-only banner explaining the problem.
      res.json({
        ok: false,
        mode: process.env.NODE_ENV ?? 'development',
        modelsDir: MODELS_DIR,
        assetCount: null,
        readOnly: true,
        publicReadOnly: Boolean(state.publicReadOnly),
        readOnlyReason: err.message,
        basePath: BASE_PATH,
        issues: err.issues ?? null,
        writable: state.writable,
      });
    }
  });

  return router;
}
