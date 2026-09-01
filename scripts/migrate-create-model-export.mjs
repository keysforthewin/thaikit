#!/usr/bin/env node
/**
 * Give every shipped prop the signature the rest of the ecosystem uses.
 *
 * thaikit's contract is `createObjectModel(spec, options)`. vibe3d's -- and
 * img2threejs's, which is where these factories are actually generated -- is
 * `createModel(options)`. The second argument is thaikit's own invention:
 * scripts/tilekit/postgen.mjs appends a two-argument wrapper around the
 * generator's one-argument output, with a comment saying "the arities differ".
 *
 * And `spec` was never real. No caller in this repo has ever passed one: the
 * Node-side gates pass `null`, the browser callers pass `{}`, the vibe3d
 * wrapper passes `undefined`. Where a body reads it at all it is only
 * `root.userData.sculptSpec = spec`, which stores an empty object or nothing.
 *
 * So this ADDS `createModel(options)` beside the existing export rather than
 * replacing it. Additive is the whole point: every existing caller -- the render
 * harness, the level editor, the collider derivation, promote-model, the pack
 * probe -- keeps working untouched, and the risky part of a rename is avoided
 * entirely. postgen.mjs:244 records what that risk actually is: re-exporting
 * across the arity change makes a caller's `spec` land in `options`, and
 * `createObjectModel(null, {})` then dies reading `options.wireframe` of null.
 *
 * It also closes a typing hole found on the way: only 37 of 134 sources declare
 * `baseUrl?: string` on `ProceduralModelOptions`, yet all three browser callers
 * pass it. The other 97 have been receiving an undeclared field, which a
 * consumer calling the new `createModel({ baseUrl })` in TypeScript would hit
 * immediately.
 *
 * The bundle is rebuilt from the SHIPPED source with the repo's one esbuild
 * call, and then constructed under Node -- both exports -- before anything is
 * recorded. `fileBytes` on the asset is updated because the bytes changed.
 *
 * Usage:
 *   node scripts/migrate-create-model-export.mjs --dry-run
 *   node scripts/migrate-create-model-export.mjs
 *   node scripts/migrate-create-model-export.mjs --id oil-drum
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { readRegistry, updateAsset, REPO_ROOT } from '@thaikit/registry-core';

import { buildModule } from './lib/bundle.mjs';
import { evaluateBundle, measureRoot } from './lib/probe.mjs';
import { ok, fail, log, parseArgs } from './lib/out.mjs';

const OPTIONS_DECL = 'export type ProceduralModelOptions = {';

/** The doc comment the 37 sources that already declare it use, near enough. */
const BASE_URL_MEMBER = `
  /**
   * Where this prop's shipped files live, with a trailing slash.
   *
   * The maps are recorded as bare filenames because the bundle is EVALUATED
   * rather than imported: it has no import.meta and no currentScript, so it
   * cannot see its own URL. Every host derives this from the module URL.
   */
  baseUrl?: string;`;

const ENTRY_POINT = `
/**
 * The one-argument entry point: vibe3d's contract, and img2threejs's own.
 *
 * \`createObjectModel\` above keeps thaikit's historical (spec, options) shape so
 * the harness, the level editor and the Node-side gates carry on unchanged.
 * \`spec\` has never been passed by any caller -- it is inspection data that is
 * already baked into this module -- so this is the honest signature, and it is
 * what a vibe3d consumer installs and calls.
 */
export function createModel(options: ProceduralModelOptions = {}): THREE.Group {
  return createObjectModel(undefined, options);
}
`;

function patchSource(source, id) {
  if (/export\s+(?:function|const)\s+createModel\b/.test(source)) return null;

  const declAt = source.indexOf(OPTIONS_DECL);
  if (declAt === -1) throw new Error(`${id}: no \`${OPTIONS_DECL}\` to extend`);
  if (!/export function createObjectModel\(/.test(source)) {
    throw new Error(`${id}: no createObjectModel export to wrap`);
  }

  let out = source;
  if (!/\bbaseUrl\?: string/.test(out)) {
    const insertAt = declAt + OPTIONS_DECL.length;
    out = out.slice(0, insertAt) + BASE_URL_MEMBER + out.slice(insertAt);
  }
  return `${out.replace(/\s*$/, '\n')}${ENTRY_POINT}`;
}

async function main() {
  const args = parseArgs();
  const dryRun = Boolean(args['dry-run']);

  const registry = await readRegistry();
  const ships = (a) =>
    !a.hidden && a.model.status === 'done' && Boolean(a.model.file) && !a.model.quarantine;

  let assets = registry.assets.filter(ships);
  if (typeof args.id === 'string') {
    assets = assets.filter((a) => a.id === args.id);
    if (!assets.length) throw new Error(`no shipped asset with id "${args.id}"`);
  }
  assets.sort((a, b) => a.id.localeCompare(b.id));

  log(`${dryRun ? 'checking' : 'migrating'} ${assets.length} prop(s)`);

  const changed = [];
  const skipped = [];
  const problems = [];

  for (const asset of assets) {
    const sourceRel = asset.model.source;
    const sourceAbs = path.join(REPO_ROOT, sourceRel);
    const bundleAbs = path.join(REPO_ROOT, asset.model.file);

    try {
      const before = await fs.readFile(sourceAbs, 'utf8');
      const after = patchSource(before, asset.id);
      const alreadyPatched = after === null;

      if (dryRun) {
        if (alreadyPatched) skipped.push(asset.id);
        else changed.push({ id: asset.id });
        log(`  ${asset.id} (${alreadyPatched ? 'already patched' : 'would patch'})`);
        continue;
      }

      // Idempotent on purpose: an already-patched source is still rebuilt,
      // re-verified and its fileBytes re-synced. A run that patched the source
      // and then failed before recording would otherwise leave the registry
      // describing a bundle that no longer exists at that size, and a second
      // run would skip straight past it.
      if (!alreadyPatched) await fs.writeFile(sourceAbs, after, 'utf8');

      // Rebuild from the SHIPPED source. build-model-module.mjs deliberately
      // builds from scratch/<id>/src, which for a promoted prop is long gone,
      // so this calls the shared esbuild directly with the same options.
      let built;
      try {
        built = await buildModule({ entry: sourceAbs, outFile: bundleAbs });
      } catch (error) {
        if (!alreadyPatched) await fs.writeFile(sourceAbs, before, 'utf8');
        throw new Error(`bundle failed${alreadyPatched ? '' : ', source reverted'}: ${error.message}`);
      }

      // Construct BOTH exports under plain Node before recording anything. This
      // is the same gate promote-model.mjs applies, and it is what makes a
      // rebuild of 134 shipped bundles safe to do in one pass.
      const { factory, exports } = evaluateBundle(bundleAbs);
      if (typeof exports.createModel !== 'function') {
        throw new Error('rebuilt bundle does not export createModel');
      }
      const legacy = measureRoot(factory(null, {}));
      const modern = measureRoot(exports.createModel({}));
      if (!modern.triangles) throw new Error('createModel produced zero triangles');
      if (modern.triangles !== legacy.triangles || modern.drawCalls !== legacy.drawCalls) {
        throw new Error(
          `the two entry points disagree: createObjectModel ${legacy.triangles}t/${legacy.drawCalls}dc, ` +
            `createModel ${modern.triangles}t/${modern.drawCalls}dc`,
        );
      }

      // updateAsset assigns the mutator's RETURN VALUE back into the registry
      // (store.js:161-162), so mutating in place and returning nothing writes
      // `undefined` over the asset and the whole file then fails validation.
      await updateAsset(asset.id, (a) => ({ ...a, model: { ...a.model, fileBytes: built.bytes } }));

      if (alreadyPatched) skipped.push(asset.id);
      else changed.push({ id: asset.id, bytes: built.bytes, triangles: modern.triangles });
      log(`  ${asset.id} (${modern.triangles} tris, ${(built.bytes / 1024).toFixed(0)} KB${alreadyPatched ? ', source already patched' : ''})`);
    } catch (error) {
      // The registry's ValidationError carries the zod issues; the message
      // alone says only that something was refused.
      const detail = error.issues
        ? `${error.message}: ${JSON.stringify(error.issues).slice(0, 400)}`
        : error.message;
      problems.push(`${asset.id}: ${detail}`);
      log(`  ! ${asset.id}: ${detail}`);
    }
  }

  if (problems.length) {
    throw new Error(`${problems.length} prop(s) failed; see the log above`);
  }

  ok({ dryRun, changed: changed.length, skipped: skipped.length, total: assets.length });
}

main().catch(fail);
