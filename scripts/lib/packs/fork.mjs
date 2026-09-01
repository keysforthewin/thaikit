/**
 * Fork an adopted pack's item into another namespace -- usually thaikit's own.
 *
 * An untouched adopted item keeps its upstream address (`@scifi-kit/crate`),
 * so a later `--upgrade` can replace it. The moment it is EDITED it should
 * stop being upstream's: forking moves `adopted/@scifi-kit/models/crate/` to
 * the target root (`packages/props/src/models/crate/` for `@thai-kit`), moves
 * its record with `forkedFrom` filled in, rewrites every level placement that
 * referenced it, and leaves the source pack one item shorter. Forking into
 * `@thai-kit` is what puts an item into the npm release; forking into any
 * other adopted namespace keeps it out.
 *
 * Pack items import SHARED source (`../core/index.ts`, `@vibe3d/scifi-kit/
 * generator`), which the target root does not have. So the fork VENDORS
 * whatever the item reaches that lies outside its own directory: each such
 * file is copied to `<item>/_vendor/<path relative to the adopted root>` --
 * the mirrored layout keeps relative imports between vendored files valid --
 * and only the specifiers that cross into `_vendor` are rewritten. The three
 * `@vibe3d/*` runtime templates are left alone: every pack build gets them.
 * See docs/adopting-packs.md.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';

import {
  LEVELS_DIR,
  OWN_NAMESPACE,
  REPO_ROOT,
  adoptedPackDir,
  modelDir,
  parseId,
  qualifiedId,
  readRegistry,
  rootFor,
  toRepoRelative,
  updateRegistry,
  writeFileAtomic,
} from '@thaikit/registry-core';

import { parseGlb, buildGlb } from '../glb.mjs';
import { readManifest } from './adopt.mjs';

const TEMPLATES = new Set(['model.ts', 'ownership.ts', 'materials.ts']);
const SOURCE_EXT = ['.ts', '.tsx', '.js', '.mjs'];
const IMPORT_RE = /((?:^|[^\w$])(?:import|export)\s*(?:[\s\S]*?)\s*from\s*|(?:^|[^\w$])import\s*\(\s*|(?:^|[^\w$])import\s+)(['"])([^'"\n]+)\2/g;

const sha256 = (bytes) => createHash('sha256').update(bytes).digest('hex');

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

/** Resolve a relative/alias specifier to a file on disk, trying the usual extensions. */
async function resolveFile(base) {
  const candidates = [base, ...SOURCE_EXT.map((e) => base + e), ...SOURCE_EXT.map((e) => path.join(base, `index${e}`))];
  for (const c of candidates) {
    try {
      if ((await fs.stat(c)).isFile()) return c;
    } catch { /* next */ }
  }
  return null;
}

async function walkSource(dir, rel = '') {
  const out = [];
  let entries = [];
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return out;
    throw err;
  }
  for (const e of entries) {
    const r = rel ? `${rel}/${e.name}` : e.name;
    if (e.isDirectory()) out.push(...(await walkSource(path.join(dir, e.name), r)));
    else if (SOURCE_EXT.includes(path.extname(e.name))) out.push(r);
  }
  return out;
}

const posix = (p) => p.split(path.sep).join('/');
const relSpec = (fromFile, toFile) => {
  let r = posix(path.relative(path.dirname(fromFile), toFile));
  if (!r.startsWith('.')) r = `./${r}`;
  return r;
};

/**
 * Copy everything `itemDir` imports from outside itself (within `srcRoot`)
 * into `itemDir/_vendor/`, rewriting the crossing specifiers. The item has
 * usually ALREADY been copied to its new home, so its relative imports are
 * resolved against `origItemDir`, where they still point at something.
 * Returns the vendored files as repo-relative paths.
 */
export async function vendorImports(itemDir, srcRoot, { origItemDir = itemDir } = {}) {
  const vendorDir = path.join(itemDir, '_vendor');
  const vendored = new Map(); // abs source (under srcRoot) -> abs destination (under _vendor)
  const queue = [];
  const inside = (dir, file) => {
    const r = path.relative(dir, file);
    return r !== '' && !r.startsWith('..') && !path.isAbsolute(r);
  };
  const destFor = (absSource) => (inside(srcRoot, absSource) ? path.join(vendorDir, path.relative(srcRoot, absSource)) : null);
  const ensure = (target) => {
    const d = destFor(target);
    if (d && !vendored.has(target)) {
      vendored.set(target, d);
      queue.push(target);
    }
    return d;
  };

  // What a specifier in `srcFile` (whose patched copy will live at `destFile`)
  // should become; null when it needs no rewrite.
  const rewrite = async (srcFile, destFile, spec, isItemFile) => {
    let target = null;
    if (spec.startsWith('./') || spec.startsWith('../')) {
      target = await resolveFile(path.resolve(path.dirname(srcFile), spec));
      if (!target) return null;
      if (isItemFile) {
        if (inside(origItemDir, target)) return null; // item -> item: moves with it
      } else {
        ensure(target); // vendored -> vendored: the mirrored layout keeps the specifier valid
        return null;
      }
    } else if (spec.startsWith('@vibe3d/')) {
      const rest = spec.slice('@vibe3d/'.length);
      if (TEMPLATES.has(rest) || TEMPLATES.has(`${rest}.ts`)) return null;
      target = await resolveFile(path.join(srcRoot, 'vibe3d', rest));
      if (!target) return null;
    } else {
      return null;
    }
    const d = ensure(target);
    return d ? relSpec(destFile, d) : null;
  };

  const patch = async (srcFile, destFile, text, isItemFile) => {
    let out = '';
    let last = 0;
    for (const m of text.matchAll(IMPORT_RE)) {
      const spec = m[3];
      const replacement = await rewrite(srcFile, destFile, spec, isItemFile);
      if (!replacement) continue;
      const specStart = m.index + m[0].length - spec.length - 1;
      out += text.slice(last, specStart) + replacement;
      last = specStart + spec.length;
    }
    return out + text.slice(last);
  };

  // The item's own files first.
  for (const rel of await walkSource(itemDir)) {
    if (rel.startsWith('_vendor/')) continue;
    const file = path.join(itemDir, rel);
    const text = await fs.readFile(file, 'utf8');
    const patched = await patch(path.join(origItemDir, rel), file, text, true);
    if (patched !== text) await fs.writeFile(file, patched, 'utf8');
  }
  // Then whatever they reached, transitively.
  while (queue.length) {
    const source = queue.shift();
    const dest = vendored.get(source);
    const text = await fs.readFile(source, 'utf8');
    const patched = await patch(source, dest, text, false);
    await fs.mkdir(path.dirname(dest), { recursive: true });
    await fs.writeFile(dest, patched, 'utf8');
  }
  return [...vendored.values()].map(toRepoRelative);
}

/** Rewrite `from` -> `to` in every level's placements. Returns `[{ level, rewritten }]`. */
export async function rewriteLevelRefs(from, to, { version = null, dryRun = false } = {}) {
  const out = [];
  let dirs = [];
  try {
    dirs = (await fs.readdir(LEVELS_DIR, { withFileTypes: true })).filter((e) => e.isDirectory()).map((e) => e.name);
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }
  for (const id of dirs) {
    const file = path.join(LEVELS_DIR, id, 'level.glb');
    if (!(await exists(file))) continue;
    const { json, bin } = parseGlb(await fs.readFile(file));
    let rewritten = 0;
    for (const node of json.nodes ?? []) {
      const tk = node.extras?.tk;
      if (tk?.kind !== 'placement' || tk.ref !== from) continue;
      tk.ref = to;
      if (version) tk.version = version;
      rewritten += 1;
    }
    if (!rewritten) continue;
    const extras = json.scenes?.[json.scene ?? 0]?.extras?.thaikitLevel;
    const toNs = to.split('/')[0];
    if (extras && !(extras.packs ?? []).some((p) => p.id === toNs)) {
      extras.packs = [...(extras.packs ?? []), { id: toNs, version: null, source: null }];
    }
    if (extras) extras.updatedAt = new Date().toISOString();
    if (!dryRun) await writeFileAtomic(file, buildGlb(json, bin));
    out.push({ level: id, rewritten });
  }
  return out;
}

/**
 * Move `@ns/name` to `to` (a qualified id or a namespace; default `@thai-kit`).
 *
 * Returns what moved. Does NOT touch packs/index.json -- the caller drops the
 * old item and refreshes the new one, which needs the installer.
 */
export async function forkItem(fromId, { to = OWN_NAMESPACE, dryRun = false } = {}) {
  const from = parseId(fromId);
  if (from.own) throw new Error(`${from.ref} is thaikit's own; only an adopted pack's item can be forked`);
  const target = to.includes('/') ? parseId(to) : parseId(qualifiedId(to, from.name));
  if (target.ns === from.ns) throw new Error(`${from.ref} is already in ${from.ns}`);
  if (!target.own && !(await readManifest(adoptedPackDir(target.ns)))) throw new Error(`${target.ns} is not an adopted pack; fork into @thai-kit or adopt it first`);

  const srcRoot = adoptedPackDir(from.ns);
  const srcDir = modelDir(from.ref);
  const dstDir = modelDir(qualifiedId(target.ns, target.name));
  if (!(await exists(srcDir))) throw new Error(`${from.ref} has no source at ${toRepoRelative(srcDir)}`);
  if (await exists(dstDir)) throw new Error(`${toRepoRelative(dstDir)} already exists; pick another name with --as`);

  const fromRegistry = await readRegistry({ modelsDir: rootFor(from.ns) });
  const record = fromRegistry.assets.find((a) => a.id === from.name) ?? null;
  if (!record) throw new Error(`${from.ref} has no thaikit.json; refresh the pack so the installer writes one`);
  const manifest = await readManifest(srcRoot);
  const entryAbs = record.model?.source ? path.join(REPO_ROOT, record.model.source) : null;
  const hash = entryAbs && (await exists(entryAbs)) ? sha256(await fs.readFile(entryAbs)) : '';

  const rebase = (p) => (typeof p === 'string' && p.startsWith(toRepoRelative(srcDir) + '/') ? `${toRepoRelative(dstDir)}/${p.slice(toRepoRelative(srcDir).length + 1)}` : p);
  const moved = {
    ...record,
    id: target.name,
    forkedFrom: { ref: from.ref, version: manifest?.upstream?.version ?? '', hash },
    image: record.image ? { ...record.image, file: rebase(record.image.file) } : null,
    model: {
      ...record.model,
      source: rebase(record.model?.source ?? null),
      spec: rebase(record.model?.spec ?? null),
      state: rebase(record.model?.state ?? null),
      thumb: rebase(record.model?.thumb ?? null),
      maps: (record.model?.maps ?? []).map((m) => ({ ...m, file: rebase(m.file) })),
    },
    notes: `${record.notes ? `${record.notes}\n` : ''}Forked from ${from.ref}@${manifest?.upstream?.version ?? '?'} on ${new Date().toISOString().slice(0, 10)}.`,
    updatedAt: new Date().toISOString(),
  };

  if (dryRun) return { from: from.ref, to: target.ref, dir: toRepoRelative(dstDir), vendored: [], levels: await rewriteLevelRefs(from.ref, target.ref, { dryRun: true }), dryRun: true };

  await fs.mkdir(path.dirname(dstDir), { recursive: true });
  await fs.cp(srcDir, dstDir, { recursive: true });
  // The copied record would be read by the target root as an existing asset;
  // the store writes the moved one below.
  await fs.rm(path.join(dstDir, 'thaikit.json'), { force: true });
  let vendored = [];
  try {
    vendored = await vendorImports(dstDir, srcRoot, { origItemDir: srcDir });
    // The record goes into the target root FIRST, so at no point is the item
    // recorded nowhere; then it leaves the source root.
    await updateRegistry((registry) => {
      if (registry.assets.some((a) => a.id === target.name)) throw new Error(`${target.ref} already has a record`);
      registry.assets.push(moved);
      return registry;
    }, { modelsDir: rootFor(target.ns) });
  } catch (err) {
    await fs.rm(dstDir, { recursive: true, force: true });
    throw err;
  }
  await fs.rm(srcDir, { recursive: true, force: true });
  await updateRegistry((registry) => ({ ...registry, assets: registry.assets.filter((a) => a.id !== from.name) }), { modelsDir: rootFor(from.ns) });
  const levels = await rewriteLevelRefs(from.ref, target.ref);
  return { from: from.ref, to: target.ref, dir: toRepoRelative(dstDir), vendored, levels, dryRun: false };
}
