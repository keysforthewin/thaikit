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

import sharp from 'sharp';

import { LEVELS_DIR, levelDir, writeFileAtomic, etagForText } from '@thaikit/registry-core';
import { LevelExtras, emptyLevelGltf, CUBE_FACES, faceFromFilename } from '@thai-kit/level-schema';

import { parseGlb, buildGlb, rewriteGlbJson, levelExtrasOf } from '../../../../scripts/lib/glb.mjs';
import { unzipSync } from '../../../../scripts/lib/unzip.mjs';
import { runBake, bakeStatus, cancelBake, BAKERS } from '../lib/bake.js';
import { probeAgent } from '../../../../scripts/level/bakers/host-agent-client.mjs';
import { buildDirOf, CELL_KEY_RE } from '../../../../scripts/level/pipeline/build-dir.mjs';

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

/**
 * The sky's sidecar images: `levels/<id>/sky/<slot>.<ext>`.
 *
 * A sky needs pictures and the level GLB is rebuilt and re-uploaded whole on
 * every save, so several megabytes of panorama cannot ride inside it. They go
 * beside it instead, and `/levels` already serves the directory statically --
 * so this router only has to WRITE them. The level's own DELETE removes the
 * whole directory, which takes the sky with it.
 *
 * One file per slot, whatever its extension: re-uploading a face replaces it
 * rather than accumulating, so a level cannot end up with both `px.jpg` and
 * `px.png` and no way to say which one is live.
 */
const SKY_SLOTS = new Set(['panorama', ...CUBE_FACES, 'clouds']);
const SKY_EXT = { jpeg: 'jpg', jpg: 'jpg', png: 'png', webp: 'webp' };

const skyDir = (id) => path.join(levelDir(id), 'sky');

async function listSky(id) {
  let entries = [];
  try {
    entries = await fs.readdir(skyDir(id), { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return {};
    throw err;
  }
  const out = {};
  for (const e of entries) {
    if (!e.isFile()) continue;
    const slot = e.name.replace(/\.[^.]+$/, '');
    if (!SKY_SLOTS.has(slot)) continue;
    const stat = await fs.stat(path.join(skyDir(id), e.name));
    out[slot] = { file: e.name, bytes: stat.size, updatedAt: stat.mtime.toISOString() };
  }
  return out;
}

/** Remove every file for a slot, whatever extension it was uploaded under. */
async function clearSlot(id, slot) {
  const dir = skyDir(id);
  let entries = [];
  try {
    entries = await fs.readdir(dir);
  } catch (err) {
    if (err.code === 'ENOENT') return 0;
    throw err;
  }
  let n = 0;
  for (const name of entries) {
    if (name.replace(/\.[^.]+$/, '') !== slot) continue;
    await fs.rm(path.join(dir, name), { force: true });
    n += 1;
  }
  return n;
}


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

  /** Is the host bake agent up? What the export dialog shows beside "host Blender". */
  router.get('/levels/bake-agent', async (req, res) => {
    // `startCommand` is what a person pastes into a HOST terminal; the repo path
    // is the host's spelling (compose passes $PWD), never the container's /app.
    const repoHost = process.env.THAIKIT_REPO_HOST || null;
    const startCommand = `cd ${repoHost ?? '<thaikit checkout>'} && npm run level:bake-agent`;
    res.json({ ...(await probeAgent()), repoHost, startCommand });
  });

  // Registered BEFORE /levels/:id, or that pattern eats it.
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
        // The quick export: one cell, built in its own directory so it never
        // overwrites the full build's raw, stages or level.glb.
        const cell = typeof req.query.cell === 'string' && req.query.cell ? req.query.cell : null;
        if (cell && !CELL_KEY_RE.test(cell)) return res.status(400).json({ error: 'cell must be <ix>_<iz>' });
        const buildDir = buildDirOf(id, cell);
        await fs.mkdir(buildDir, { recursive: true });
        await writeFileAtomic(path.join(buildDir, 'raw.glb'), req.body);
        const baker = typeof req.query.baker === 'string' ? req.query.baker : 'blender';
        // Unvalidated, a typo here used to mean "no lightmap" with no error.
        if (!BAKERS.includes(baker)) return res.status(400).json({ error: `baker must be one of ${BAKERS.join(', ')}` });
        const cpu = req.query.cpu === '1' || req.query.cpu === 'true';
        const job = runBake(state, { id, baker, cpu, cell });
        res.status(202).json({ jobId: job.id, level: id, cell, rawBytes: req.body.length });
      } catch (err) {
        next(err);
      }
    },
  );

  /**
   * The bake of this level, running or last settled, WITH its log -- what a
   * reopened export dialog reads to pick up where it left off. Every entry
   * carries `seq`; SSE events arriving after this answer carry the same
   * numbering, so the client drops the overlap and misses nothing.
   */
  router.get('/levels/:id/bake', (req, res) => {
    const job = bakeStatus(req.params.id);
    if (!job) return res.status(404).json({ error: 'no bake has run for this level since the server started' });
    res.json(job);
  });

  /** Cancel the running bake: SIGTERM to its process group, `cancelled` over SSE when it closes. */
  router.delete('/levels/:id/bake', guard, (req, res) => {
    const job = cancelBake(req.params.id);
    if (!job) return res.status(404).json({ error: 'no bake is running for this level' });
    res.status(202).json({ jobId: job.id, level: req.params.id, status: job.status });
  });

  router.get('/levels/:id/build', async (req, res, next) => {
    try {
      const { id } = req.params;
      const file = path.join(levelDir(id), 'build', 'level.glb');
      let stat = null;
      try { stat = await fs.stat(file); } catch { /* no build yet */ }
      let verify = null;
      try { verify = JSON.parse(await fs.readFile(path.join(levelDir(id), 'build', 'verify.json'), 'utf8')); } catch { /* none */ }
      const job = bakeStatus(id);
      if (job) delete job.log; // GET /levels/:id/bake carries the log; this is the summary
      res.json({ exists: Boolean(stat), bytes: stat?.size ?? 0, generatedAt: stat?.mtime ?? null, verify, job });
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


  // ---- the sky's sidecar images -------------------------------------------

  router.get('/levels/:id/sky', async (req, res, next) => {
    try {
      if (!(await readLevel(req.params.id))) return res.status(404).json({ error: `no level "${req.params.id}"` });
      res.json({ slots: await listSky(req.params.id) });
    } catch (err) {
      next(err);
    }
  });

  /**
   * Six faces at once, out of a zip.
   *
   * A skybox arrives from a generator or an asset pack as an archive of six
   * images named `_right`/`_left`/`_up`/`_down`/`_front`/`_back`, never as
   * thaikit's own `px`..`nz`, so this maps the names and writes the slots. It
   * is all six or none: `CubeTextureLoader` never fires `onLoad` on a partial
   * set, so a zip missing a face would leave the editor with a sky that
   * silently never draws and nothing on screen to say why.
   *
   * Each face is re-encoded to WEBP rather than stored as it arrived. Six 2048²
   * PNG faces are ~50 MB the editor fetches on every load; the same faces at
   * webp q92 are a few megabytes, and the bake resamples them either way. This
   * is also why the route replaces whatever was in the slot first -- a `px.png`
   * left behind by an earlier single-face upload would still be the live file.
   *
   * Registered BEFORE `/sky/:slot`, or `cube-zip` reads as a slot name.
   */
  router.post(
    '/levels/:id/sky/cube-zip',
    guard,
    express.raw({ type: ['application/zip', 'application/x-zip-compressed', 'application/octet-stream'], limit: '256mb' }),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        if (!(await readLevel(id))) return res.status(404).json({ error: `no level "${id}"` });
        if (!Buffer.isBuffer(req.body) || !req.body.length) return res.status(400).json({ error: 'expected a zip body' });

        let entries;
        try {
          entries = unzipSync(req.body);
        } catch (err) {
          return res.status(400).json({ error: `could not read the zip: ${err.message}` });
        }

        // Name -> face first, so a duplicate is reported as the ambiguity it is
        // rather than resolved by whichever entry the archive happens to list
        // last.
        const picked = new Map();
        for (const entry of entries) {
          const face = faceFromFilename(entry.name);
          if (!face) continue;
          if (picked.has(face)) {
            return res.status(400).json({
              error: `two entries name the ${face} face: "${picked.get(face).name}" and "${entry.name}"`,
            });
          }
          picked.set(face, entry);
        }
        const missing = CUBE_FACES.filter((f) => !picked.has(f));
        if (missing.length) {
          return res.status(400).json({
            error: `the zip is missing ${missing.length} of the six faces`,
            missing,
            found: [...picked.keys()],
            expected: 'one image per face, named _right, _left, _up, _down, _front, _back',
            entries: entries.map((e) => e.name).slice(0, 24),
          });
        }

        // Decode every face BEFORE writing any of them: half a cube on disk is
        // worse than none, because the settings would name files that do not
        // all exist.
        const encoded = [];
        for (const face of CUBE_FACES) {
          const entry = picked.get(face);
          let meta;
          try {
            meta = await sharp(entry.data).metadata();
          } catch (err) {
            return res.status(400).json({ error: `"${entry.name}" (${face}) is not a readable image: ${err.message}` });
          }
          if (!SKY_EXT[meta.format]) {
            return res.status(400).json({ error: `"${entry.name}" (${face}) is ${meta.format}; use JPEG, PNG or WebP` });
          }
          encoded.push({ face, name: entry.name, width: meta.width, height: meta.height, source: meta.format });
        }
        // A cube face is a square, and all six are the same square: three builds
        // the cubemap from face 0's size and a mismatch samples garbage.
        const odd = encoded.filter((e) => e.width !== e.height);
        if (odd.length) {
          return res.status(400).json({
            error: 'cube faces must be square',
            faces: odd.map((e) => `${e.face} (${e.name}) is ${e.width}×${e.height}`),
          });
        }
        const size = encoded[0].width;
        const mismatched = encoded.filter((e) => e.width !== size);
        if (mismatched.length) {
          return res.status(400).json({
            error: `all six faces must be the same size; ${encoded[0].face} is ${size}px`,
            faces: mismatched.map((e) => `${e.face} (${e.name}) is ${e.width}px`),
          });
        }

        await fs.mkdir(skyDir(id), { recursive: true });
        const slots = {};
        for (const e of encoded) {
          const webp = await sharp(picked.get(e.face).data).webp({ quality: 92 }).toBuffer();
          await clearSlot(id, e.face);
          const file = `${e.face}.webp`;
          await writeFileAtomic(path.join(skyDir(id), file), webp);
          slots[e.face] = { slot: e.face, file, bytes: webp.length, from: e.name, source: e.source };
        }
        res.status(201).json({ slots, size, format: 'webp' });
      } catch (err) {
        next(err);
      }
    },
  );

  router.post(
    '/levels/:id/sky/:slot',
    guard,
    express.raw({ type: ['image/*', 'application/octet-stream'], limit: '32mb' }),
    async (req, res, next) => {
      try {
        const { id, slot } = req.params;
        if (!SKY_SLOTS.has(slot)) return res.status(400).json({ error: `unknown sky slot "${slot}"`, slots: [...SKY_SLOTS] });
        if (!(await readLevel(id))) return res.status(404).json({ error: `no level "${id}"` });
        if (!Buffer.isBuffer(req.body) || !req.body.length) return res.status(400).json({ error: 'expected an image body' });

        // Decode rather than trust the Content-Type: the bake has to be able to
        // read this back with sharp months later, so a file sharp cannot open
        // is rejected here where the author can still see why.
        let meta;
        try {
          meta = await sharp(req.body).metadata();
        } catch (err) {
          return res.status(400).json({ error: `not a readable image: ${err.message}` });
        }
        const ext = SKY_EXT[meta.format];
        if (!ext) return res.status(400).json({ error: `unsupported image format "${meta.format}"; use JPEG, PNG or WebP` });

        await fs.mkdir(skyDir(id), { recursive: true });
        await clearSlot(id, slot);
        const file = `${slot}.${ext}`;
        await writeFileAtomic(path.join(skyDir(id), file), req.body);
        res.status(201).json({ slot, file, bytes: req.body.length, width: meta.width, height: meta.height, format: meta.format });
      } catch (err) {
        next(err);
      }
    },
  );

  router.delete('/levels/:id/sky/:slot', guard, async (req, res, next) => {
    try {
      const { id, slot } = req.params;
      if (!SKY_SLOTS.has(slot)) return res.status(400).json({ error: `unknown sky slot "${slot}"` });
      if (!(await readLevel(id))) return res.status(404).json({ error: `no level "${id}"` });
      const removed = await clearSlot(id, slot);
      res.json({ slot, removed });
    } catch (err) {
      next(err);
    }
  });

  return router;
}
