import express from 'express';
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT } from '@thaikit/registry-core';

import { unzipSync } from '../../../../scripts/lib/unzip.mjs';

/**
 * The Unreal export, on disk.
 *
 * The browser builds the props and zips them (web/client/src/unreal/); this
 * route only UNPACKS that zip into exports/unreal/ so an Unreal project on the
 * same machine can import from the repo instead of a download folder. The
 * folder is replaced whole on every export -- a prop renamed or deleted since
 * the last one must not linger as a stale .glb Unreal would happily import.
 * It is gitignored, like every other build product.
 */
export const UNREAL_EXPORT_DIR = process.env.THAIKIT_UNREAL_EXPORT_DIR || path.join(REPO_ROOT, 'exports', 'unreal');

const safeEntryName = (name) => {
  const norm = path.posix.normalize(name.replace(/\\/g, '/'));
  if (!norm || norm.startsWith('/') || norm.startsWith('..') || norm.includes('/../')) return null;
  return norm;
};

async function summarise() {
  let manifest = null;
  try {
    manifest = JSON.parse(await fs.readFile(path.join(UNREAL_EXPORT_DIR, 'manifest.json'), 'utf8'));
  } catch {
    return { exists: false, dir: path.relative(REPO_ROOT, UNREAL_EXPORT_DIR) };
  }
  let files = 0;
  let bytes = 0;
  const walk = async (dir) => {
    for (const e of await fs.readdir(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) await walk(p);
      else { files += 1; bytes += (await fs.stat(p)).size; }
    }
  };
  await walk(UNREAL_EXPORT_DIR);
  return {
    exists: true,
    dir: path.relative(REPO_ROOT, UNREAL_EXPORT_DIR),
    generatedAt: manifest.generatedAt ?? null,
    items: manifest.items?.length ?? null,
    packs: manifest.packs ?? [],
    files,
    bytes,
  };
}

export function unrealRouter(state) {
  const router = express.Router();

  const guard = (req, res, next) => {
    if (state.readOnly) {
      return res.status(503).json({ error: 'registry is read-only', reason: state.readOnlyReason });
    }
    next();
  };

  router.get('/exports/unreal', async (req, res, next) => {
    try { res.json(await summarise()); } catch (err) { next(err); }
  });

  router.put(
    '/exports/unreal',
    guard,
    express.raw({ type: ['application/zip', 'application/x-zip-compressed', 'application/octet-stream'], limit: '2gb' }),
    async (req, res, next) => {
      try {
        if (!Buffer.isBuffer(req.body) || !req.body.length) return res.status(400).json({ error: 'expected a zip body' });
        let entries;
        try {
          entries = unzipSync(req.body);
        } catch (err) {
          return res.status(400).json({ error: `could not read the zip: ${err.message}` });
        }
        if (!entries.some((e) => e.name === 'manifest.json')) {
          return res.status(400).json({ error: 'not a thaikit Unreal export: no manifest.json at the root' });
        }

        const fresh = `${UNREAL_EXPORT_DIR}.tmp-${process.pid}-${Date.now()}`;
        await fs.rm(fresh, { recursive: true, force: true });
        await fs.mkdir(fresh, { recursive: true });
        const folders = new Set();
        let bytes = 0;
        for (const entry of entries) {
          const name = safeEntryName(entry.name);
          if (!name) return res.status(400).json({ error: `refusing zip entry "${entry.name}"` });
          const dest = path.join(fresh, name);
          await fs.mkdir(path.dirname(dest), { recursive: true });
          await fs.writeFile(dest, entry.data);
          bytes += entry.data.length;
          if (name.endsWith('.glb') && name.includes('/')) folders.add(name.split('/')[0]);
        }
        // Swap the whole tree so a reader never sees half an export.
        await fs.mkdir(path.dirname(UNREAL_EXPORT_DIR), { recursive: true });
        await fs.rm(UNREAL_EXPORT_DIR, { recursive: true, force: true });
        await fs.rename(fresh, UNREAL_EXPORT_DIR);

        res.json({
          dir: path.relative(REPO_ROOT, UNREAL_EXPORT_DIR),
          files: entries.length,
          bytes,
          folders: [...folders].sort(),
        });
      } catch (err) {
        next(err);
      }
    },
  );

  return router;
}
