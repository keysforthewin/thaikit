/**
 * Write a vibe3d registry's inlined sources to disk, the way its CLI would.
 *
 * Both halves of an item: `files` are TEXT (the TypeScript a pack ships) and
 * `artifacts` are BINARY, base64 in the registry, added by schemaVersion 2 and
 * the only way a source-first pack can carry an image. Dropping the artifacts
 * silently is how a pack of imposters installs as cards that draw nothing.
 *
 * `{models}` and `{vibe3d}` are the two roots vibe3d's installer knows; here
 * they land under one source tree so a single alias map covers every import a
 * pack can make. The runtime templates (`@vibe3d/model.ts`, `ownership.ts`,
 * `materials.ts`) are not part of any pack -- `vibe3d init` writes them into
 * the consuming app -- so they are copied from the vibe3d CLI package itself.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

export const ROOTS = { '{models}': 'models', '{vibe3d}': 'vibe3d' };

export function targetToPath(srcDir, target) {
  for (const [token, dir] of Object.entries(ROOTS)) {
    if (target.startsWith(token + '/')) {
      const rel = target.slice(token.length + 1);
      if (rel.split('/').includes('..')) throw new Error(`file target escapes the pack: ${target}`);
      return path.join(srcDir, dir, rel);
    }
  }
  throw new Error(`file target uses an unknown root: ${target}`);
}

export async function materialise(registry, srcDir, { templatesDir, warn }) {
  await fs.rm(srcDir, { recursive: true, force: true });
  let files = 0;
  let artifacts = 0;
  for (const item of registry.items ?? []) {
    for (const f of item.files ?? []) {
      if (typeof f.content !== 'string') continue;
      const abs = targetToPath(srcDir, f.target);
      if (f.hash) {
        const actual = createHash('sha256').update(f.content).digest('hex');
        if (actual !== f.hash) warn?.(`${item.name}: ${f.target} hash mismatch (registry says ${f.hash.slice(0, 12)}…, content is ${actual.slice(0, 12)}…)`);
      }
      await fs.mkdir(path.dirname(abs), { recursive: true });
      await fs.writeFile(abs, f.content, 'utf8');
      files += 1;
    }
    // schemaVersion 2 artifacts. Their installer decodes, then checks the byte
    // length AND the hash before writing, and refuses rather than putting a bad
    // image on disk; do the same, so a corrupt pack fails here instead of
    // rendering as an inexplicably wrong texture later.
    for (const a of item.artifacts ?? []) {
      if (typeof a.content !== 'string') continue;
      const abs = targetToPath(srcDir, a.target);
      const bytes = Buffer.from(a.content, 'base64');
      if (typeof a.byteLength === 'number' && bytes.byteLength !== a.byteLength) {
        throw new Error(`${item.name}: artifact ${a.path} decodes to ${bytes.byteLength} bytes, declares ${a.byteLength}`);
      }
      if (a.hash) {
        const actual = createHash('sha256').update(bytes).digest('hex');
        if (actual !== a.hash) throw new Error(`${item.name}: artifact ${a.path} has a stale hash`);
      }
      await fs.mkdir(path.dirname(abs), { recursive: true });
      await fs.writeFile(abs, bytes);
      artifacts += 1;
    }
  }
  if (templatesDir) {
    const dest = path.join(srcDir, 'vibe3d');
    await fs.mkdir(dest, { recursive: true });
    for (const name of await fs.readdir(templatesDir)) {
      if (!/\.tsx?$/.test(name)) continue;
      const to = path.join(dest, name);
      // A pack may ship its own copy of a template under {vibe3d}; the pack wins.
      try { await fs.access(to); continue; } catch { /* absent */ }
      await fs.copyFile(path.join(templatesDir, name), to);
      files += 1;
    }
  }
  return { files, artifacts };
}
