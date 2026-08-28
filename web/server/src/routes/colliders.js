/**
 * Read and write a prop's physics compound.
 *
 * The compound lives in assets/<id>/colliders.json rather than in registry.json,
 * because the shapes are the bulky half of the record and only a consumer needs
 * them -- what the registry carries is the summary the gates and the browse grid
 * read. That split is why this router exists at all: the asset routes cannot
 * reach a file under assets/, and /media serves it read-only.
 *
 * Concurrency is handled the same way the registry is, for the same reason. The
 * generation skills write these files from the host while a drawer is open, so a
 * save that has not seen the current version has to be refused rather than
 * silently win: GET hands out a strong ETag, PUT requires it back on If-Match,
 * and a mismatch answers 409 with the document the client should merge onto.
 * There is no lockfile here because a collider document is written whole by one
 * process at a time -- writeFileAtomic is what makes a half-written file
 * impossible, and the ETag is what makes a lost update visible.
 *
 * A PUT also stamps `model.colliders` on the asset, with `handTuned: true` and
 * the self-check numbers CLEARED. That is not bookkeeping: a hand-moved box has
 * not been measured, and leaving the derivation's coverage next to it would let
 * a number nobody generated stand as evidence for a shape somebody moved.
 */
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';
import { z } from 'zod';

import { updateAsset, readRegistry, writeFileAtomic, assetDir, toRepoRelative } from '@thaikit/registry-core';

/**
 * What a part may be, kept to what a physics engine and the viewer both read.
 *
 * `scale` is HALF-EXTENTS -- [radius, halfHeight, radius] for the round types --
 * which is the convention the viewer's colliderGeometry() already speaks and the
 * one Rapier's cuboid() takes directly.
 */
const Part = z.object({
  name: z.string().min(1),
  type: z.enum(['box', 'cylinder', 'capsule', 'sphere']).default('box'),
  offset: z.tuple([z.number(), z.number(), z.number()]),
  scale: z.tuple([z.number().positive(), z.number().positive(), z.number().positive()]),
  isTrigger: z.boolean().default(false),
  notes: z.string().optional(),
});

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

const fileFor = (id) => path.join(assetDir(id), 'colliders.json');

/** Strong ETag over the canonical bytes, matching how the registry hashes. */
const etagFor = (text) => `"${crypto.createHash('sha256').update(text).digest('hex').slice(0, 32)}"`;

export function collidersRouter(state) {
  const router = express.Router();

  const guard = (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({ error: 'registry is read-only', reason: state.readOnlyReason });
    }
    next();
  };

  router.get('/assets/:id/colliders', async (req, res, next) => {
    try {
      const text = await fs.readFile(fileFor(req.params.id), 'utf8').catch((err) => {
        if (err.code === 'ENOENT') return null;
        throw err;
      });
      if (text === null) {
        return res.status(404).json({
          error: 'no compound derived for this prop',
          hint: `node scripts/derive-colliders.mjs --id ${req.params.id}`,
        });
      }
      res.set('ETag', etagFor(text)).type('application/json').send(text);
    } catch (err) {
      next(err);
    }
  });

  router.put('/assets/:id/colliders', guard, async (req, res, next) => {
    try {
      const { id } = req.params;
      const registry = await readRegistry();
      const asset = registry.assets.find((a) => a.id === id);
      if (!asset) return res.status(404).json({ error: `no asset with id "${id}"` });

      const file = fileFor(id);
      const current = await fs.readFile(file, 'utf8').catch((err) => {
        if (err.code === 'ENOENT') return null;
        throw err;
      });

      const ifMatch = req.get('If-Match');
      if (ifMatch && current !== null && ifMatch !== etagFor(current)) {
        // Hand back what is on disk rather than only saying no: the client has to
        // merge onto it, and a 409 with nothing in it forces a second round trip.
        return res.status(409).json({
          error: 'the compound changed underneath this edit',
          current: JSON.parse(current),
          etag: etagFor(current),
        });
      }

      const parsed = CollidersFile.parse({ ...req.body, assetId: id });
      const doc = {
        ...parsed,
        derived: false,
        handTuned: true,
        // A hand-moved box has not been measured. Carrying the derivation's
        // numbers forward would present them as evidence for a shape nobody
        // checked, which is the mistake this whole system exists to undo.
        selfCheck: null,
        ledgesPreserved: null,
        ledgesLost: [],
        editedAt: new Date().toISOString(),
      };
      const text = `${JSON.stringify(doc, null, 2)}\n`;

      await fs.mkdir(path.dirname(file), { recursive: true });
      await writeFileAtomic(file, text);

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
        updatedAt: new Date().toISOString(),
      }));

      res.set('ETag', etagFor(text)).json({ doc, asset: updated.asset });
    } catch (err) {
      if (err instanceof z.ZodError) {
        return res.status(400).json({ error: 'invalid compound', issues: err.issues });
      }
      next(err);
    }
  });

  return router;
}
