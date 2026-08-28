/**
 * Level projects: one GLB per level under levels/<id>/level.glb.
 *
 * A level is a glTF file and nothing else, so this router hands the bytes back
 * and forth and only ever OPENS the JSON chunk -- to list levels by name, to
 * validate the extras on save, and to stamp `updatedAt`. Geometry is never
 * parsed here; that is the editor's job.
 *
 * Concurrency is the colliders router's arrangement: GET carries a strong ETag
 * over the bytes, PUT wants it back on If-Match, and a mismatch is a 409 with
 * the current ETag so the client can reload rather than clobber. Two editors on
 * the same level is a real case -- the level and the drawer share a server.
 */
import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';
import { z } from 'zod';

import { LEVELS_DIR, levelDir, writeFileAtomic, etagForText } from '@thaikit/registry-core';
import { LevelExtras, emptyLevelGltf } from '@thaikit/level-schema';

import { parseGlb, buildGlb, rewriteGlbJson, levelExtrasOf } from '../../../../scripts/lib/glb.mjs';
import { runBake, bakeStatus } from '../lib/bake.js';

const CreateInput = z.object({ name: z.string().min(1), id: z.string().optional() });

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

const fileFor = (id) => path.join(levelDir(id), 'level.glb');

async function readLevel(id) {
  try {
    return await fs.readFile(fileFor(id));
  } catch (err) {
    if (err.code === 'ENOENT') return null;
    throw err;
  }
}

/** The summary a list needs, from the JSON chunk alone. */
function summarise(id, buffer) {
  const { json } = parseGlb(buffer);
  const extras = levelExtrasOf(json);
  let placements = 0;
  let lights = 0;
  for (const node of json.nodes ?? []) {
    const kind = node.extras?.tk?.kind;
    if (kind === 'placement') placements += 1;
    else if (kind === 'light') lights += 1;
  }
  return {
    id,
    name: extras?.name ?? id,
    updatedAt: extras?.updatedAt ?? null,
    createdAt: extras?.createdAt ?? null,
    placements,
    lights,
    bytes: buffer.length,
    valid: Boolean(extras),
  };
}

export function levelsRouter(state) {
  const router = express.Router();

  const guard = (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({ error: 'registry is read-only', reason: state.readOnlyReason });
    }
    next();
  };

  router.get('/levels', async (req, res, next) => {
    try {
      await fs.mkdir(LEVELS_DIR, { recursive: true });
      const entries = await fs.readdir(LEVELS_DIR, { withFileTypes: true });
      const items = [];
      for (const e of entries) {
        if (!e.isDirectory()) continue;
        const buf = await readLevel(e.name);
        if (!buf) continue;
        try {
          items.push(summarise(e.name, buf));
        } catch (err) {
          items.push({ id: e.name, name: e.name, valid: false, error: err.message });
        }
      }
      items.sort((a, b) => (b.updatedAt ?? '').localeCompare(a.updatedAt ?? ''));
      res.json({ items });
    } catch (err) {
      next(err);
    }
  });

  router.post('/levels', guard, express.json(), async (req, res, next) => {
    try {
      const input = CreateInput.parse(req.body ?? {});
      let id = slugify(input.id || input.name);
      if (!id) return res.status(400).json({ error: 'could not derive a slug from name' });
      const base = id;
      let n = 2;
      while (await readLevel(id)) id = `${base}-${n++}`;

      const gltf = emptyLevelGltf({ id, name: input.name });
      const bytes = buildGlb(gltf);
      await fs.mkdir(levelDir(id), { recursive: true });
      await writeFileAtomic(fileFor(id), bytes);
      res.status(201).set('ETag', etagForText(bytes)).json(summarise(id, bytes));
    } catch (err) {
      if (err instanceof z.ZodError) return res.status(400).json({ error: 'invalid input', issues: err.issues });
      next(err);
    }
  });

  router.get('/levels/:id', async (req, res, next) => {
    try {
      const buf = await readLevel(req.params.id);
      if (!buf) return res.status(404).json({ error: `no level "${req.params.id}"` });
      res
        .set('ETag', etagForText(buf))
        .set('Cache-Control', 'no-cache')
        .type('model/gltf-binary')
        .send(buf);
    } catch (err) {
      next(err);
    }
  });

  router.put(
    '/levels/:id',
    guard,
    express.raw({ type: ['model/gltf-binary', 'application/octet-stream'], limit: '512mb' }),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        if (!Buffer.isBuffer(req.body) || !req.body.length) {
          return res.status(400).json({ error: 'expected a GLB body (model/gltf-binary)' });
        }
        const current = await readLevel(id);
        if (!current) return res.status(404).json({ error: `no level "${id}"; create it first` });

        const ifMatch = req.get('If-Match');
        if (ifMatch && ifMatch !== etagForText(current)) {
          return res.status(409).json({
            error: 'the level changed underneath this edit; reload before saving',
            etag: etagForText(current),
          });
        }

        // Validate the extras and stamp the timestamp in one rewrite of the JSON
        // chunk; the BIN chunk (all the geometry) passes through untouched.
        let extras;
        const bytes = rewriteGlbJson(req.body, (json) => {
          const scene = json.scenes?.[json.scene ?? 0];
          const raw = scene?.extras?.thaikitLevel;
          if (!raw) throw Object.assign(new Error('GLB carries no scene.extras.thaikitLevel'), { status: 400 });
          extras = LevelExtras.parse({ ...raw, id, updatedAt: new Date().toISOString() });
          scene.extras.thaikitLevel = extras;
          return json;
        });

        await writeFileAtomic(fileFor(id), bytes);
        res.set('ETag', etagForText(bytes)).json(summarise(id, bytes));
      } catch (err) {
        if (err instanceof z.ZodError) return res.status(400).json({ error: 'invalid level extras', issues: err.issues });
        next(err);
      }
    },
  );

  /**
   * The bake. The editor is the only place the procedural textures exist, so it
   * sends the raw scene as a GLB and the Node pipeline takes it from there.
   */
  router.post(
    '/levels/:id/bake',
    guard,
    express.raw({ type: ['model/gltf-binary', 'application/octet-stream'], limit: '2gb' }),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        if (!Buffer.isBuffer(req.body) || !req.body.length) return res.status(400).json({ error: 'expected a GLB body' });
        if (!(await readLevel(id))) return res.status(404).json({ error: `no level "${id}"` });
        const running = bakeStatus(id);
        if (running?.status === 'running') return res.status(409).json({ error: 'a bake is already running for this level', job: running });
        const buildDir = path.join(levelDir(id), 'build');
        await fs.mkdir(buildDir, { recursive: true });
        await writeFileAtomic(path.join(buildDir, 'raw.glb'), req.body);
        const baker = typeof req.query.baker === 'string' ? req.query.baker : 'blender';
        const job = runBake(state, { id, baker });
        res.status(202).json({ jobId: job.id, level: id, rawBytes: req.body.length });
      } catch (err) {
        next(err);
      }
    },
  );

  router.get('/levels/:id/build', async (req, res, next) => {
    try {
      const { id } = req.params;
      const file = path.join(levelDir(id), 'build', 'level.glb');
      let stat = null;
      try { stat = await fs.stat(file); } catch { /* no build yet */ }
      let verify = null;
      try { verify = JSON.parse(await fs.readFile(path.join(levelDir(id), 'build', 'verify.json'), 'utf8')); } catch { /* none */ }
      res.json({ exists: Boolean(stat), bytes: stat?.size ?? 0, generatedAt: stat?.mtime ?? null, verify, job: bakeStatus(id) });
    } catch (err) {
      next(err);
    }
  });

  router.delete('/levels/:id', guard, async (req, res, next) => {
    try {
      const dir = levelDir(req.params.id);
      const buf = await readLevel(req.params.id);
      if (!buf) return res.status(404).json({ error: `no level "${req.params.id}"` });
      await fs.rm(dir, { recursive: true, force: true });
      res.json({ deleted: req.params.id });
    } catch (err) {
      next(err);
    }
  });

  return router;
}
