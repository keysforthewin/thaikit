#!/usr/bin/env node
/**
 * Export, version and publish `@thai-kit/props` -- the vibe3d pack.
 *
 * One command, because this is run every time the prop kit grows. It is the
 * only thing that should ever write `packages/props/dist/`: that directory is
 * gitignored and derived, and the source tree packages/props/src/models/ stays
 * the source of truth (see scripts/build-vibe3d-registry.mjs, which does the
 * actual export).
 *
 * Ordered so nothing is half-done: the tree is checked, the pack is built and
 * VERIFIED, and only then is a version written or a tarball pushed. A failed
 * verification leaves package.json untouched, so re-running is safe.
 *
 * Run it through scripts/release-props.sh, which supplies the container and the
 * npm credentials. Running this file on a host Node is the thing the image
 * exists to prevent.
 *
 * It does NOT touch git: there is no git in the image, and the commit identity
 * and signing config live on the host. The wrapper checks the tree before this
 * runs and commits the version bump after it, reading the version off the JSON
 * line this prints.
 *
 * Usage (via the wrapper):
 *   node scripts/release-props.mjs                 # patch bump, publish
 *   node scripts/release-props.mjs minor
 *   node scripts/release-props.mjs 1.0.0
 *   node scripts/release-props.mjs --dry-run       # build + verify + npm pack, no push
 *   node scripts/release-props.mjs patch --tag next
 */
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import semver from 'semver';

import { AssetFileSchema } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

const REPO_ROOT = path.resolve(import.meta.dirname, '..');
const PKG_DIR = path.join(REPO_ROOT, 'packages', 'props');
const PKG_JSON = path.join(PKG_DIR, 'package.json');
const REGISTRY_OUT = 'packages/props/dist/registry.json';
const RELEASES = new Set(['patch', 'minor', 'major', 'prepatch', 'preminor', 'premajor', 'prerelease']);

/** Inherit stderr so the export's own progress lines reach the human live. */
function run(command, args, options = {}) {
  return execFileSync(command, args, {
    cwd: REPO_ROOT,
    encoding: 'utf8',
    stdio: ['ignore', 'pipe', 'inherit'],
    ...options,
  });
}

/** Has this exact version already gone out? npm's own 403 is far less legible. */
async function assertUnpublished(name, version) {
  const res = await fetch(`https://registry.npmjs.org/${name.replace('/', '%2F')}`, {
    headers: { accept: 'application/json' },
  });
  if (res.status === 404) return { published: [], first: true };
  if (!res.ok) throw new Error(`npm registry answered ${res.status} for ${name}`);
  const packument = await res.json();
  const published = Object.keys(packument.versions ?? {});
  if (published.includes(version)) {
    throw new Error(`${name}@${version} is already published; npm versions are immutable`);
  }
  return { published, first: false };
}

/**
 * Check the built pack the way a consumer's installer would, before it can
 * reach one. `build-vibe3d-registry.mjs` validates its own schema output; what
 * is added here is everything that is only true ON DISK -- that the previews
 * the registry promises actually exist, that the file inlined for each item
 * hashes to what its entry claims, that every item carries the four files
 * thaikit's own installer reads back (factory, entry, record, compound), that
 * the record parses and names the item, and that every map the record declares
 * ships as an artifact.
 */
async function verifyPack(absolute) {
  const { createHash } = await import('node:crypto');
  const registry = JSON.parse(fs.readFileSync(absolute, 'utf8'));
  const dir = path.dirname(absolute);
  const problems = [];

  if (registry.schemaVersion !== 2) problems.push(`schemaVersion is ${registry.schemaVersion}, expected 2`);
  if (registry.license !== 'MIT') problems.push(`license is ${registry.license}, expected MIT`);
  if (!registry.namespace?.startsWith('@')) problems.push(`bad namespace: ${registry.namespace}`);

  const models = registry.items.filter((item) => item.type === 'vibe3d:model');
  if (!models.length) problems.push('no model items');

  const names = new Set(registry.items.map((item) => item.name));
  if (!names.has(registry.defaultItem)) problems.push(`defaultItem missing: ${registry.defaultItem}`);

  let previews = 0;
  let artifacts = 0;
  let artifactBytes = 0;
  for (const item of models) {
    const preview = item.meta?.preview;
    if (preview) {
      if (fs.existsSync(path.join(dir, preview))) previews++;
      else problems.push(`${item.name}: preview file missing on disk: ${preview}`);
    }
    for (const file of item.files ?? []) {
      const actual = createHash('sha256').update(file.content).digest('hex');
      if (actual !== file.hash) problems.push(`${item.name}: ${file.target} hash does not match its content`);
    }
    const targets = new Set((item.files ?? []).map((f) => f.target));
    // createObjectModel.ts is thaikit's own shape; a prop forked from an adopted
    // pack and not yet rebuilt ships upstream's model.ts alone (see buildForeignShapedItem).
    for (const required of ['model.ts', 'thaikit.json']) {
      if (!targets.has(`{models}/${item.name}/${required}`)) problems.push(`${item.name}: missing file ${required}`);
    }
    if (!targets.has(`{models}/${item.name}/colliders.json`)) log(`  ! ${item.name}: ships without colliders.json`);
    const recordFile = (item.files ?? []).find((f) => f.target === `{models}/${item.name}/thaikit.json`);
    if (recordFile) {
      let record = null;
      try {
        record = AssetFileSchema.safeParse(JSON.parse(recordFile.content));
      } catch {
        problems.push(`${item.name}: thaikit.json is not JSON`);
      }
      if (record && !record.success) problems.push(`${item.name}: thaikit.json does not validate (${record.error.issues[0]?.path.join('.')})`);
      if (record?.success && record.data.id !== item.name) problems.push(`${item.name}: thaikit.json names ${record.data.id}`);
      const artifactTargets = new Set((item.artifacts ?? []).map((a) => a.target));
      for (const map of record?.success ? record.data.model.maps ?? [] : []) {
        const want = `{models}/${item.name}/maps/${path.basename(map.file)}`;
        if (!artifactTargets.has(want)) problems.push(`${item.name}: declared map ${map.file} has no artifact`);
      }
    }
    // Decode every artifact exactly as their installer will, and check what it
    // checks. It throws on a stale hash rather than writing a bad image, so a
    // mismatch here is a failed install for every consumer.
    for (const artifact of item.artifacts ?? []) {
      const bytes = Buffer.from(artifact.content, 'base64');
      if (bytes.byteLength !== artifact.byteLength) {
        problems.push(`${item.name}: artifact ${artifact.path} decodes to ${bytes.byteLength} bytes, declares ${artifact.byteLength}`);
      }
      if (createHash('sha256').update(bytes).digest('hex') !== artifact.hash) {
        problems.push(`${item.name}: artifact ${artifact.path} has a stale hash`);
      }
      artifacts++;
      artifactBytes += artifact.byteLength;
    }
  }

  // A v2 registry requires every item to be a v2 item, so the array must be
  // present even where it is empty.
  for (const item of registry.items) {
    if (!Array.isArray(item.artifacts)) problems.push(`${item.name}: no artifacts array (required by registryV2Schema)`);
  }

  // The kit item's registryDependencies are what `vibe3d add @thai-kit` walks.
  const kit = registry.items.find((item) => item.type === 'vibe3d:kit');
  if (kit) {
    for (const dependency of kit.registryDependencies ?? []) {
      const bare = dependency.split('/').pop();
      if (!names.has(bare)) problems.push(`kit depends on a missing item: ${dependency}`);
    }
  }

  if (problems.length) {
    for (const problem of problems.slice(0, 20)) log(`  ! ${problem}`);
    throw new Error(`${problems.length} problem(s) in the built pack; nothing versioned or published`);
  }
  return {
    models: models.length,
    items: registry.items.length,
    previews,
    artifacts,
    artifactBytes,
    schemaVersion: registry.schemaVersion,
    namespace: registry.namespace,
  };
}

/**
 * `files` in package.json is an allowlist, but npm still applies ignore rules
 * found INSIDE the package folder -- so confirm the generated pack really is in
 * the tarball rather than trusting that it is. An empty publish is silent.
 */
function verifyTarball(expectPreviews) {
  const raw = run('npm', ['pack', '--dry-run', '--json'], { cwd: PKG_DIR });
  const [result] = JSON.parse(raw);
  const entries = result.files.map((file) => file.path);
  const missing = ['dist/registry.json', 'README.md'].filter((f) => !entries.includes(f));
  if (missing.length) throw new Error(`tarball would omit: ${missing.join(', ')}`);
  const previews = entries.filter((f) => f.startsWith('dist/previews/')).length;
  if (previews !== expectPreviews) {
    throw new Error(`tarball carries ${previews} previews, the registry references ${expectPreviews}`);
  }
  return { files: entries.length, unpackedBytes: result.unpackedSize, tarballBytes: result.size };
}

async function main() {
  const args = parseArgs();
  const dryRun = Boolean(args['dry-run']);
  const distTag = typeof args.tag === 'string' ? args.tag : 'latest';
  const bump = args._[0] ?? 'patch';

  const pkg = JSON.parse(fs.readFileSync(PKG_JSON, 'utf8'));
  const previous = pkg.version;

  const next = RELEASES.has(bump) ? semver.inc(pkg.version, bump) : semver.valid(bump);
  if (!next) throw new Error(`not a release type or a version: ${bump}`);

  log(`releasing ${pkg.name}: ${previous} -> ${next}${dryRun ? ' (dry run)' : ''}`);

  const { first } = await assertUnpublished(pkg.name, next);
  if (first) log(`  ${pkg.name} has never been published; this is the first release`);

  log('exporting...');
  run(process.execPath, ['scripts/build-vibe3d-registry.mjs', '--out', REGISTRY_OUT]);

  const pack = await verifyPack(path.join(REPO_ROOT, REGISTRY_OUT));
  log(
    `  verified ${pack.models} models, ${pack.previews} previews, ` +
      `${pack.artifacts} artifacts (${(pack.artifactBytes / 1048576).toFixed(1)} MB decoded), ` +
      `schemaVersion ${pack.schemaVersion}, namespace ${pack.namespace}`,
  );

  // Written before packing: npm reads the version off disk, not from a flag.
  pkg.version = next;
  fs.writeFileSync(PKG_JSON, `${JSON.stringify(pkg, null, 2)}\n`, 'utf8');

  let tarball;
  try {
    tarball = verifyTarball(pack.previews);
    log(`  tarball: ${tarball.files} files, ${(tarball.tarballBytes / 1024 / 1024).toFixed(1)} MB packed`);

    if (!dryRun) {
      log(`publishing to npm (tag ${distTag})...`);
      run('npm', ['publish', '--tag', distTag], { cwd: PKG_DIR, stdio: ['ignore', 'inherit', 'inherit'] });
    }
  } catch (error) {
    // Nothing went out, so the bump must not stand -- otherwise the next run
    // skips a version and a later tag names a release that does not exist.
    fs.writeFileSync(PKG_JSON, `${JSON.stringify({ ...pkg, version: previous }, null, 2)}\n`, 'utf8');
    log(`  rolled package.json back to ${previous}`);
    throw error;
  }

  if (dryRun) {
    fs.writeFileSync(PKG_JSON, `${JSON.stringify({ ...pkg, version: previous }, null, 2)}\n`, 'utf8');
    log(`  dry run: package.json left at ${previous}`);
  }

  ok({
    name: pkg.name,
    version: next,
    previous,
    dryRun,
    distTag,
    models: pack.models,
    items: pack.items,
    previews: pack.previews,
    artifacts: pack.artifacts,
    tarballBytes: tarball.tarballBytes,
  });
}

main().catch(fail);
