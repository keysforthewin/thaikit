/**
 * Asset packs: the built-in thaikit catalogue plus every vibe3d pack installed
 * under packs/. Installing and refreshing spawn scripts/install-pack.mjs, so a
 * pack whose factory hangs or throws cannot take the server down with it.
 */
import express from 'express';
import { z } from 'zod';

import { catalogue, filterItems, readPacksIndex } from '../lib/catalogue.js';
import { runPackJob, jobStatus } from '../lib/packs.js';

const AddInput = z.object({ source: z.string().min(1) });

export function packsRouter(state) {
  const router = express.Router();

  const guard = (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({ error: 'registry is read-only', reason: state.readOnlyReason });
    }
    next();
  };

  router.get('/packs', async (req, res, next) => {
    try {
      const { packs } = await catalogue();
      res.json({ items: packs });
    } catch (err) {
      next(err);
    }
  });

  router.get('/packs/items', async (req, res, next) => {
    try {
      const { packs, items } = await catalogue();
      const filtered = filterItems(items, req.query);
      res.json({ packs, items: filtered, total: items.length });
    } catch (err) {
      next(err);
    }
  });

  router.post('/packs', guard, express.json(), async (req, res, next) => {
    try {
      const { source } = AddInput.parse(req.body ?? {});
      const job = runPackJob(state, { source });
      res.status(202).json({ jobId: job.id });
    } catch (err) {
      if (err instanceof z.ZodError) return res.status(400).json({ error: 'invalid input', issues: err.issues });
      next(err);
    }
  });

  router.post('/packs/:id/refresh', guard, async (req, res, next) => {
    try {
      const index = await readPacksIndex();
      const pack = (index.packs ?? []).find((p) => p.id === req.params.id);
      if (!pack) return res.status(404).json({ error: `no installed pack "${req.params.id}"` });
      const job = runPackJob(state, { source: pack.source, refresh: true, pack: pack.id });
      res.status(202).json({ jobId: job.id });
    } catch (err) {
      next(err);
    }
  });

  // Backfill for a pack installed before previews existed, and the redo after a
  // browser or harness fix. It reuses the bundles already on disk -- nothing is
  // downloaded and nothing is rebuilt.
  router.post('/packs/:id/previews', guard, async (req, res, next) => {
    try {
      const index = await readPacksIndex();
      const pack = (index.packs ?? []).find((p) => p.id === req.params.id);
      if (!pack) return res.status(404).json({ error: `no installed pack "${req.params.id}"` });
      const job = runPackJob(state, { previews: true, pack: pack.id });
      res.status(202).json({ jobId: job.id });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/packs/:id', guard, async (req, res, next) => {
    try {
      const job = runPackJob(state, { remove: true, pack: req.params.id });
      res.status(202).json({ jobId: job.id });
    } catch (err) {
      next(err);
    }
  });

  router.get('/packs/jobs/:id', (req, res) => {
    const job = jobStatus(req.params.id);
    if (!job) return res.status(404).json({ error: 'no such job' });
    res.json(job);
  });

  return router;
}
