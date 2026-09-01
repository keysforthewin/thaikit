import express from 'express';
import fs from 'node:fs/promises';
import { z } from 'zod';

import {
  readRegistry,
  updateRegistry,
  updateAsset,
  AssetSchema,
  etagFor,
  etagForAsset,
  modelDir,
  assetFile, parseId, storeOptionsFor } from '@thaikit/registry-core';

import { afterTreeEdit } from '../lib/refresh.js';

/** What a client may send when creating an asset; the server fills the rest. */
const CreateInput = z.object({
  name: z.string().min(1),
  id: z.string().optional(),
  category: z.string().min(1),
  description: z.string().optional(),
  nameTh: z.string().optional(),
  tags: z.array(z.string()).optional(),
  budgetClass: z
    .enum(['small', 'medium', 'large', 'hero', 'hero2x', 'hero4x', 'hero8x'])
    .default('medium'),
  targetTriangles: z.number().int().positive().nullable().optional(),
  maxDrawCalls: z.number().int().positive().nullable().optional(),
  maxMaterials: z.number().int().positive().nullable().optional(),
  maxUniqueGeometries: z.number().int().positive().nullable().optional(),
  subject: z.enum(['prop', 'animal', 'character']).optional(),
  pivot: z.enum(['base-center', 'center', 'back-center', 'top-center']).optional(),
  physics: z
    .object({ enabled: z.boolean().optional(), massKg: z.number().positive().nullable().optional() })
    .optional(),
  destructionGroups: z.array(z.string()).optional(),
  placement: z.array(z.string()).optional(),
  notes: z.string().optional(),
  prompts: z
    .object({ image: z.string().optional(), texture: z.string().optional() })
    .optional(),
  scale: z
    .object({
      declared: z.object({ w: z.number(), h: z.number(), d: z.number() }),
      primaryAxis: z.enum(['w', 'h', 'd']).optional(),
    })
    .optional(),
});

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function buildAsset(input, taken) {
  let id = slugify(input.id || input.name);
  if (!id) throw Object.assign(new Error('could not derive a slug from name'), { status: 400 });
  let n = 2;
  const base = id;
  while (taken.has(id)) id = `${base}-${n++}`;

  const now = new Date().toISOString();
  const image = input.prompts?.image || input.description || input.name;

  return AssetSchema.parse({
    id,
    name: input.name,
    nameTh: input.nameTh ?? '',
    description: input.description ?? '',
    category: input.category,
    tags: input.tags ?? [],
    prompts: {
      image,
      imageBase: image,
      texture: input.prompts?.texture ?? '',
      styleProfileId: 'thai-street-photoreal-v1',
    },
    subject: input.subject ?? 'prop',
    budgetClass: input.budgetClass,
    targetTriangles: input.targetTriangles ?? null,
    // Null on all four means "use the class". They are stored per-asset only when
    // a prop genuinely earns a different ceiling than its size class implies.
    maxDrawCalls: input.maxDrawCalls ?? null,
    maxMaterials: input.maxMaterials ?? null,
    maxUniqueGeometries: input.maxUniqueGeometries ?? null,
    scale: {
      declared: input.scale?.declared ?? { w: 0.5, h: 0.5, d: 0.5 },
      measured: null,
      primaryAxis: input.scale?.primaryAxis ?? 'h',
      tolerance: 0.1,
    },
    pivot: input.pivot ?? 'base-center',
    placement: input.placement ?? ['floor'],
    physics: { enabled: input.physics?.enabled ?? false, massKg: input.physics?.massKg ?? null },
    destructionGroups: input.destructionGroups ?? [],
    status: { image: 'pending', model: 'pending' },
    image: null,
    model: {},
    license: {},
    hidden: false,
    notes: input.notes ?? '',
    createdAt: now,
    updatedAt: now,
  });
}

/** Deep-merge for nested objects; arrays are replaced wholesale. */
function merge(target, patch) {
  const out = { ...target };
  for (const [key, value] of Object.entries(patch)) {
    if (value && typeof value === 'object' && !Array.isArray(value) && typeof out[key] === 'object' && out[key] !== null && !Array.isArray(out[key])) {
      out[key] = merge(out[key], value);
    } else {
      out[key] = value;
    }
  }
  return out;
}

function guardReadOnly(state) {
  return (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({
        error: 'registry is read-only',
        reason: state.readOnlyReason,
      });
    }
    next();
  };
}

export function assetsRouter(state) {
  const router = express.Router();

  const noWrites = guardReadOnly(state);

  router.get('/assets', async (req, res, next) => {
    try {
      const registry = await readRegistry();
      const { q, imageStatus, modelStatus, subject, category, tag, categories, tags, minScore, maxScore, sort, order, page, limit, includeHidden } =
        req.query;

      // `categories` and `tags` are the browser's multi-select: comma-separated,
      // and OR'ed with EACH OTHER rather than intersected. Picking "vendor" and
      // the tag "night" asks for props that are either, which is how you assemble
      // a scene; an AND of the two is almost always empty. `q` still narrows the
      // result, so text is AND'ed against the facets. The singular `category` /
      // `tag` params keep their old AND behaviour for existing callers.
      const list = (v) =>
        String(v ?? '')
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean);
      const pickedCategories = list(categories);
      const pickedTags = list(tags);

      // One build per prop now, so there is nothing to reconcile: the score, the
      // status and the triangle count each have exactly one place to come from.
      const score = (a) => a.model.review.score;
      const triangles = (a) => a.model.triangles;

      let items = registry.assets;
      if (includeHidden !== '1') items = items.filter((a) => !a.hidden);
      if (imageStatus) items = items.filter((a) => a.status.image === imageStatus);
      if (modelStatus) items = items.filter((a) => a.model.status === modelStatus);
      if (subject) items = items.filter((a) => a.subject === subject);
      if (category) items = items.filter((a) => a.category === category);
      if (tag) items = items.filter((a) => a.tags.includes(tag));
      if (pickedCategories.length || pickedTags.length) {
        items = items.filter(
          (a) =>
            pickedCategories.includes(a.category) ||
            a.tags.some((t) => pickedTags.includes(t)),
        );
      }
      if (minScore) items = items.filter((a) => (score(a) ?? -1) >= Number(minScore));
      if (maxScore) items = items.filter((a) => (score(a) ?? 101) <= Number(maxScore));
      if (q) {
        const needle = String(q).toLowerCase();
        items = items.filter((a) =>
          [a.id, a.name, a.nameTh, a.description, a.category, ...a.tags]
            .join(' ')
            .toLowerCase()
            .includes(needle),
        );
      }

      const key = sort || 'name';
      const dir = order === 'desc' ? -1 : 1;
      items = [...items].sort((a, b) => {
        const av = key === 'score' ? (score(a) ?? -1) : key === 'triangles' ? (triangles(a) ?? -1) : a[key] ?? '';
        const bv = key === 'score' ? (score(b) ?? -1) : key === 'triangles' ? (triangles(b) ?? -1) : b[key] ?? '';
        return av < bv ? -dir : av > bv ? dir : 0;
      });

      const total = items.length;
      const size = limit ? Number(limit) : total;
      const offset = page ? (Number(page) - 1) * size : 0;

      res.set('ETag', etagFor(registry));
      res.json({ items: items.slice(offset, offset + size), total, etag: etagFor(registry) });
    } catch (err) {
      next(err);
    }
  });

  // `:id` is bare for thaikit's own props and `@ns/name` (URL-encoded) for an
  // adopted pack's; the record lives in that pack's own root.
  router.get('/assets/:id', async (req, res, next) => {
    try {
      const registry = await readRegistry(storeOptionsFor(req.params.id));
      const asset = registry.assets.find((a) => a.id === parseId(req.params.id).name);
      if (!asset) return res.status(404).json({ error: `no such asset: ${req.params.id}` });
      // Per-asset, so a generation skill writing a different prop does not
      // invalidate this editor. The list route keeps the registry-wide ETag.
      res.set('ETag', etagForAsset(asset));
      res.json(asset);
    } catch (err) {
      next(err);
    }
  });

  router.post('/assets', noWrites, async (req, res, next) => {
    try {
      const input = CreateInput.parse(req.body);
      let created;
      const { etag } = await updateRegistry((registry) => {
        const taken = new Set(registry.assets.map((a) => a.id));
        created = buildAsset(input, taken);
        registry.assets.push(created);
        return registry;
      });
      afterTreeEdit(state, { id: created.id, kind: 'meta', path: assetFile(created.id) }).catch(() => {});
      res.status(201).set('ETag', etag).location(`/api/assets/${created.id}`).json(created);
    } catch (err) {
      if (err instanceof z.ZodError) err.status = 400;
      next(err);
    }
  });

  const applyUpdate = (replace) => async (req, res, next) => {
    try {
      const ifMatch = req.get('If-Match') || undefined;
      const { asset, etag } = await updateAsset(
        req.params.id,
        (current) => {
          const next = replace
            ? { ...req.body, id: current.id, createdAt: current.createdAt }
            : merge(current, req.body);
          next.updatedAt = new Date().toISOString();
          return AssetSchema.parse(next);
        },
        { ifMatch },
      );
      afterTreeEdit(state, { id: req.params.id, kind: 'meta', path: assetFile(req.params.id) }).catch(() => {});
      res.set('ETag', etag).json(asset);
    } catch (err) {
      if (err instanceof z.ZodError) err.status = 400;
      next(err);
    }
  };

  router.patch('/assets/:id', noWrites, applyUpdate(false));
  router.put('/assets/:id', noWrites, applyUpdate(true));

  router.delete('/assets/:id', noWrites, async (req, res, next) => {
    try {
      let removed = null;
      const bare = parseId(req.params.id).name;
      await updateRegistry((registry) => {
        const i = registry.assets.findIndex((a) => a.id === bare);
        if (i === -1) throw Object.assign(new Error(`no such asset: ${req.params.id}`), { status: 404 });
        removed = registry.assets.splice(i, 1)[0];
        return registry;
      }, storeOptionsFor(req.params.id));

      let purged = false;
      if (req.query.purgeFiles === 'true') {
        // Deleting generated files is destructive and opt-in, never the default.
        await fs.rm(modelDir(req.params.id), { recursive: true, force: true });
        purged = true;
      }
      afterTreeEdit(state, { id: req.params.id, kind: 'meta', path: assetFile(req.params.id) }).catch(() => {});
      res.json({ deleted: removed, purgedFiles: purged });
    } catch (err) {
      next(err);
    }
  });

  router.post('/assets/bulk', noWrites, async (req, res, next) => {
    try {
      const { mode = 'merge', assets = [] } = req.body ?? {};
      const dryRun = req.query.dryRun === '1';
      const inputs = z.array(CreateInput).parse(assets);

      const registry = await readRegistry();
      const taken = new Set(registry.assets.map((a) => a.id));
      const byName = new Map(registry.assets.map((a) => [a.name.toLowerCase(), a]));

      const created = [];
      const updated = [];
      const skipped = [];
      for (const input of inputs) {
        const existing = byName.get(input.name.toLowerCase());
        if (existing && mode === 'merge') {
          skipped.push({ name: input.name, reason: `already exists as ${existing.id}` });
          continue;
        }
        if (existing && mode === 'replace') {
          updated.push(input.name);
          continue;
        }
        const asset = buildAsset(input, taken);
        taken.add(asset.id);
        created.push(asset);
      }

      if (dryRun) {
        return res.json({ dryRun: true, created: created.map((a) => a.id), updated, skipped });
      }

      if (created.length) {
        await updateRegistry((r) => {
          r.assets.push(...created);
          return r;
        });
      }
      res.json({ created: created.map((a) => a.id), updated, skipped });
    } catch (err) {
      if (err instanceof z.ZodError) err.status = 400;
      next(err);
    }
  });

  return router;
}
