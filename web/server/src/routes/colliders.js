/**
 * Read and write a prop's physics compound.
 *
 * For thaikit's own props the compound is packages/props/src/models/<id>/colliders.json,
 * beside the source and shipped in the pack; for a foreign pack item it is the
 * `colliders` block of the item's local override (see lib/overrides.js), and
 * until one exists GET answers with the installer's derived compound so an edit
 * starts from something real. Both targets share one pair of handlers.
 *
 * Concurrency is handled the way the registry is, for the same reason. The
 * generation skills write these files from the host while a drawer is open, so
 * a save that has not seen the current version has to be refused rather than
 * silently win: GET hands out a strong ETag, PUT requires it back on If-Match,
 * and a mismatch answers 409 with the document the client should merge onto.
 *
 * A PUT also stamps `handTuned: true` with the self-check numbers CLEARED. That
 * is not bookkeeping: a hand-moved box has not been measured, and leaving the
 * derivation's coverage next to it would let a number nobody generated stand as
 * evidence for a shape somebody moved.
 */
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

import { updateAsset, readRegistry, writeFileAtomic, collidersFile, toRepoRelative, etagForText, parseId, storeOptionsFor } from '@thaikit/registry-core';

import { Part, invalidateSidecars } from '../../../../scripts/lib/packs/sidecar.mjs';
import { readOverride, writeOverride } from '../lib/overrides.js';
import { catalogue } from '../lib/catalogue.js';
import { afterTreeEdit } from '../lib/refresh.js';

const CollidersFile = z
  .object({
    schemaVersion: z.number().int().positive().default(1),
    assetId: z.string(),
    frame: z.literal('root-local').default('root-local'),
    units: z.literal('m').default('m'),
    groundY: z.number().default(0),
    derived: z.boolean().default(false),
    handTuned: z.boolean().default(false),
    generatedAt: z.string().nullable().default(null),
    generator: z.record(z.any()).default({}),
    yaw: z.number().default(0),
    parts: z.array(Part).max(64),
    selfCheck: z.record(z.any()).nullable().default(null),
    ledgesPreserved: z.string().nullable().default(null),
    ledgesLost: z.array(z.any()).default([]),
    trueLedges: z.array(z.any()).default([]),
    suggestedMassKg: z.number().nullable().default(null),
    notes: z.array(z.string()).default([]),
  })
  .passthrough();

const readIfPresent = (file) =>
  fs.readFile(file, 'utf8').catch((err) => {
    if (err.code === 'ENOENT') return null;
    throw err;
  });

/** A foreign item's compound as a colliders document: its override block, else the installer's derivation. */
async function foreignDoc(ns, name) {
  const override = await readOverride(ns, name);
  if (override?.doc.colliders) {
    return { ...override.doc.colliders, schemaVersion: 1, assetId: name, frame: 'root-local', units: 'm', source: 'override' };
  }
  const { items } = await catalogue();
  const item = items.find((it) => it.ref === `${ns}/${name}`);
  if (!item) return undefined;
  if (!item.colliders) return null;
  return {
    schemaVersion: 1,
    assetId: name,
    frame: 'root-local',
    units: 'm',
    groundY: item.colliders.groundY ?? 0,
    derived: true,
    handTuned: false,
    parts: item.colliders.parts,
    selfCheck: item.colliders.coverage != null ? { coverage: item.colliders.coverage } : null,
    source: 'installer',
  };
}

const textOf = (doc) => `${JSON.stringify(doc, null, 2)}\n`;

/** Handlers shared by `/assets/:id/colliders` (tree only) and `/items/:ns/:name/colliders`. */
export function collidersHandlers(state) {
  const guard = (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({ error: 'registry is read-only', reason: state.readOnlyReason });
    }
    next();
  };

  /** `target` is `{ kind: 'tree', id }` or `{ kind: 'override', ns, name }`. */
  const get = (target) => async (req, res, next) => {
    try {
      if (target.kind === 'tree') {
        const text = await readIfPresent(collidersFile(target.id));
        if (text === null) {
          return res.status(404).json({
            error: 'no compound derived for this prop',
            hint: `node scripts/derive-colliders.mjs --id ${target.id}`,
          });
        }
        return res.set('ETag', etagForText(text)).type('application/json').send(text);
      }
      const doc = await foreignDoc(target.ns, target.name);
      if (doc === undefined) return res.status(404).json({ error: `no such item: ${target.ns}/${target.name}` });
      if (doc === null) return res.status(404).json({ error: 'the installer derived no compound for this item' });
      const text = textOf(doc);
      res.set('ETag', etagForText(text)).type('application/json').send(text);
    } catch (err) {
      next(err);
    }
  };

  const put = (target) => async (req, res, next) => {
    try {
      const ifMatch = req.get('If-Match');
      if (target.kind === 'tree') {
        const { id } = target;
        const registry = await readRegistry(storeOptionsFor(id));
        const asset = registry.assets.find((a) => a.id === parseId(id).name);
        if (!asset) return res.status(404).json({ error: `no asset with id "${id}"` });

        const file = collidersFile(id);
        const current = await readIfPresent(file);
        if (ifMatch && current !== null && ifMatch !== etagForText(current)) {
          // Hand back what is on disk rather than only saying no: the client has to
          // merge onto it, and a 409 with nothing in it forces a second round trip.
          return res.status(409).json({ error: 'the compound changed underneath this edit', current: JSON.parse(current), etag: etagForText(current) });
        }

        const parsed = CollidersFile.parse({ ...req.body, assetId: id });
        const doc = {
          ...parsed,
          derived: false,
          handTuned: true,
          selfCheck: null,
          ledgesPreserved: null,
          ledgesLost: [],
          editedAt: new Date().toISOString(),
        };
        const text = textOf(doc);
        await fs.mkdir(path.dirname(file), { recursive: true });
        await writeFileAtomic(file, text);
        invalidateSidecars(path.dirname(file));

        const updated = await updateAsset(id, (a) => ({
          ...a,
          model: {
            ...a.model,
            colliders: {
              file: toRepoRelative(file),
              parts: doc.parts.length,
              handTuned: true,
              derivedAt: a.model?.colliders?.derivedAt ?? null,
              coverage: null,
              maxLedgeError: null,
              p95LedgeError: null,
              overshoot: null,
              measurementSkipped: null,
              ledgesPreserved: null,
            },
          },
        }));
        afterTreeEdit(state, { id, kind: 'colliders', path: file }).catch(() => {});
        return res.set('ETag', etagForText(text)).json({ doc, asset: updated.asset });
      }

      const { ns, name } = target;
      const current = await foreignDoc(ns, name);
      if (current === undefined) return res.status(404).json({ error: `no such item: ${ns}/${name}` });
      if (ifMatch && current && ifMatch !== etagForText(textOf(current))) {
        return res.status(409).json({ error: 'the compound changed underneath this edit', current, etag: etagForText(textOf(current)) });
      }
      const parsed = CollidersFile.parse({ ...req.body, assetId: name });
      const block = {
        parts: parsed.parts,
        groundY: parsed.groundY ?? 0,
        handTuned: true,
        derived: false,
        selfCheck: null,
        editedAt: new Date().toISOString(),
      };
      const existing = (await readOverride(ns, name))?.doc ?? {};
      const { schemaVersion: _v, ref: _r, updatedAt: _u, ...rest } = existing;
      const written = await writeOverride(ns, name, { ...rest, colliders: block });
      const doc = { ...block, schemaVersion: 1, assetId: name, frame: 'root-local', units: 'm', source: 'override' };
      afterTreeEdit(state, { ref: `${ns}/${name}`, kind: 'override', path: null }).catch(() => {});
      res.set('ETag', etagForText(textOf(doc))).json({ doc, override: written.doc });
    } catch (err) {
      if (err instanceof z.ZodError) return res.status(400).json({ error: 'invalid compound', issues: err.issues });
      next(err);
    }
  };

  return { guard, get, put };
}

/** The thai-kit alias: `/assets/:id/colliders` reads and writes the tree. */
export function collidersRouter(state) {
  const router = express.Router();
  const { guard, get, put } = collidersHandlers(state);
  router.get('/assets/:id/colliders', (req, res, next) => get({ kind: 'tree', id: req.params.id })(req, res, next));
  router.put('/assets/:id/colliders', guard, (req, res, next) => put({ kind: 'tree', id: req.params.id })(req, res, next));
  return router;
}
