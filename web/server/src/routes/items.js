/**
 * The catalogue, addressed by item ref: `/api/items/@thai-kit/oil-drum`.
 *
 * `/api/assets/:id` stays for thaikit's own props -- that is the authoring
 * record, edited through registry-core -- and these routes are the view both
 * editors browse: every installed pack, with the record and any local override
 * merged in. A foreign item's editable half is its override, and lives here.
 */
import express from 'express';
import { z } from 'zod';

import { etagForText } from '@thaikit/registry-core';

import { catalogue, filterItems, facets } from '../lib/catalogue.js';
import { readOverride, writeOverride, deleteOverride, OverrideInput } from '../lib/overrides.js';
import { runPackJob } from '../lib/packs.js';
import { afterTreeEdit } from '../lib/refresh.js';
import { collidersHandlers } from './colliders.js';

/** A cheap listing ETag: what the browse page compares, never a lock. */
const listingEtag = (items) =>
  etagForText(JSON.stringify(items.map((it) => [it.ref, it.version, it.thaikit?.updatedAt ?? null, it.override?.updatedAt ?? null, it.collidersSource])));

const itemEtag = (it) => etagForText(JSON.stringify(it));

export function itemsRouter(state) {
  const router = express.Router();
  const { guard, get: getColliders, put: putColliders } = collidersHandlers(state);

  const refOf = (req) => `${req.params.ns}/${req.params.name}`;

  async function findItem(req) {
    const { items } = await catalogue();
    return items.find((it) => it.ref === refOf(req)) ?? null;
  }

  router.get('/items', async (req, res, next) => {
    try {
      const { packs, items } = await catalogue();
      const { sort, order, page, limit } = req.query;
      let filtered = filterItems(items, req.query);
      const key = sort || 'title';
      const dir = order === 'desc' ? -1 : 1;
      const value = (it) =>
        key === 'score' ? (it.review?.score ?? -1) : key === 'triangles' ? (it.stats?.triangles ?? -1) : key === 'name' ? it.name : (it[key] ?? '');
      filtered = [...filtered].sort((a, b) => {
        const av = value(a);
        const bv = value(b);
        return av < bv ? -dir : av > bv ? dir : 0;
      });
      const total = filtered.length;
      const size = limit ? Number(limit) : total;
      const offset = page ? (Number(page) - 1) * size : 0;
      const etag = listingEtag(items);
      res.set('ETag', etag);
      res.json({ packs, items: filtered.slice(offset, offset + size), total, all: items.length, etag });
    } catch (err) {
      next(err);
    }
  });

  router.get('/items/facets', async (req, res, next) => {
    try {
      const { packs, items } = await catalogue();
      res.json({ packs, ...facets(items), total: items.length });
    } catch (err) {
      next(err);
    }
  });

  router.get('/items/:ns/:name', async (req, res, next) => {
    try {
      const item = await findItem(req);
      if (!item) return res.status(404).json({ error: `no such item: ${refOf(req)}` });
      res.set('ETag', itemEtag(item)).json(item);
    } catch (err) {
      next(err);
    }
  });

  router.get('/items/:ns/:name/override', async (req, res, next) => {
    try {
      const item = await findItem(req);
      if (!item) return res.status(404).json({ error: `no such item: ${refOf(req)}` });
      if (item.editable) return res.status(400).json({ error: 'this item is editable in place; there is no override', hint: `PATCH /api/assets/${item.name}` });
      const current = await readOverride(req.params.ns, req.params.name);
      if (!current) return res.status(404).json({ error: 'no override for this item' });
      res.set('ETag', current.etag).json(current.doc);
    } catch (err) {
      next(err);
    }
  });

  router.put('/items/:ns/:name/override', guard, async (req, res, next) => {
    try {
      const item = await findItem(req);
      if (!item) return res.status(404).json({ error: `no such item: ${refOf(req)}` });
      if (item.editable) return res.status(400).json({ error: 'this item is editable in place; edit the tree entry instead', hint: `PATCH /api/assets/${item.name}` });
      const current = await readOverride(req.params.ns, req.params.name);
      const ifMatch = req.get('If-Match');
      if (ifMatch && current && ifMatch !== current.etag) {
        return res.status(409).json({ error: 'the override changed underneath this edit', current: current.doc, etag: current.etag });
      }
      // The collider block is owned by the colliders route; a details save must
      // not drop a hand-placed compound because the form did not carry it.
      const input = OverrideInput.parse(req.body ?? {});
      const merged = { ...input, ...(current?.doc.colliders && !input.colliders ? { colliders: current.doc.colliders } : {}) };
      const written = await writeOverride(req.params.ns, req.params.name, merged);
      afterTreeEdit(state, { ref: refOf(req), kind: 'override' }).catch(() => {});
      res.set('ETag', written.etag).json(written.doc);
    } catch (err) {
      if (err instanceof z.ZodError) return res.status(400).json({ error: 'invalid override', issues: err.issues });
      next(err);
    }
  });

  router.delete('/items/:ns/:name/override', guard, async (req, res, next) => {
    try {
      const removed = await deleteOverride(req.params.ns, req.params.name);
      afterTreeEdit(state, { ref: refOf(req), kind: 'override' }).catch(() => {});
      res.json({ removed });
    } catch (err) {
      next(err);
    }
  });

  router.get('/items/:ns/:name/colliders', async (req, res, next) => {
    try {
      const item = await findItem(req);
      if (!item) return res.status(404).json({ error: `no such item: ${refOf(req)}` });
      const target = item.editable ? { kind: 'tree', id: item.name } : { kind: 'override', ns: req.params.ns, name: req.params.name };
      return getColliders(target)(req, res, next);
    } catch (err) {
      next(err);
    }
  });

  router.put('/items/:ns/:name/colliders', guard, async (req, res, next) => {
    try {
      const item = await findItem(req);
      if (!item) return res.status(404).json({ error: `no such item: ${refOf(req)}` });
      const target = item.editable ? { kind: 'tree', id: item.name } : { kind: 'override', ns: req.params.ns, name: req.params.name };
      return putColliders(target)(req, res, next);
    } catch (err) {
      next(err);
    }
  });

  /** Rebuild one editable item's bundle, probe and thumbnail from the tree. */
  router.post('/items/:ns/:name/refresh', guard, async (req, res, next) => {
    try {
      const { packs } = await catalogue();
      const pack = packs.find((p) => p.id === req.params.ns);
      if (!pack) return res.status(404).json({ error: `no installed pack "${req.params.ns}"` });
      if (!pack.editable) return res.status(400).json({ error: 'only a pack installed from a source tree can refresh one item; refresh the whole pack instead' });
      const item = await findItem(req);
      const job = runPackJob(state, { refreshItem: refOf(req), add: !item });
      res.status(202).json({ jobId: job.id });
    } catch (err) {
      next(err);
    }
  });

  return router;
}
