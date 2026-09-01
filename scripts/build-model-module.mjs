#!/usr/bin/env node
/**
 * Bundle the generated TypeScript factory into something a browser can run.
 *
 * img2threejs emits `createObjectModel.ts`: TypeScript, importing `three` as a
 * bare specifier. Neither of those survives a `<script>` tag, so this compiles
 * it with esbuild.
 *
 * The output format is CommonJS with `three` left EXTERNAL, which looks odd for
 * a browser target and is the whole point. The page that runs this module
 * already has a three instance -- react-three-fiber's in the web UI, the
 * vendored one in the render harness -- and a second copy would mean the
 * factory's `Mesh` is not the renderer's `Mesh`. So the module keeps its bare
 * `require("three")` and the host answers it:
 *
 *     new Function('module', 'exports', 'require', code)(
 *       mod, mod.exports, (n) => (n === 'three' ? THREE : throw));
 *
 * An ESM build cannot do this. A bare specifier in a dynamic import needs an
 * import map, and an import map either resolves to a second copy of three or
 * forces a fixed-name three chunk out of Rollup -- neither of which survives
 * the difference between Vite's dev server and a production build.
 *
 * Usage:
 *   node scripts/build-model-module.mjs --id <id> [--src <entry.ts>] [--out <file>]
 *   node scripts/build-model-module.mjs --src <entry.ts> --out <file>
 *
 * Writes nothing to the asset record: the bundle is a build product. The
 * scratch bundle is what render-model.mjs and the img2threejs gates read during
 * authoring; the one that ships is the pack installer's, made at promotion.
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { workDir, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { buildModule } from './lib/bundle.mjs';

/** Where the skill is told to leave its factory, and where a rebuild looks first. */
const DEFAULT_ENTRIES = ['src/createObjectModel.ts', 'src/createObjectModel.tsx', 'createObjectModel.ts'];

async function firstExisting(dir, candidates) {
  for (const rel of candidates) {
    const abs = path.join(dir, rel);
    try {
      await fs.access(abs);
      return abs;
    } catch { /* keep looking */ }
  }
  return null;
}

export { buildModule };

async function main() {
  const args = parseArgs();
  const id = args.id;

  let entry = args.src ? path.resolve(args.src) : null;
  let outFile = args.out ? path.resolve(args.out) : null;

  if (!entry) {
    if (!id) return fail('need --id (to find the generated factory) or --src');
    entry = await firstExisting(workDir(id), DEFAULT_ENTRIES);
    if (!entry) {
      return fail(
        `no factory found under ${toRepoRelative(workDir(id))}. Expected one of: ` +
          DEFAULT_ENTRIES.join(', ') +
          '. Has img2threejs run generate_threejs_factory.py yet?',
      );
    }
  }
  if (!outFile) {
    if (!id) return fail('need --id (to place the bundle) or --out');
    outFile = path.join(workDir(id), 'model.bundle.js');
  }

  await fs.mkdir(path.dirname(outFile), { recursive: true });
  log(`entry  : ${toRepoRelative(entry)}`);

  let built;
  try {
    built = await buildModule({ entry, outFile });
  } catch (err) {
    // esbuild's own message names file and line; passing it through beats a
    // wrapper that hides where the TypeScript actually broke.
    return fail(err.message ?? err);
  }

  for (const w of built.warnings) log(`warn   : ${w}`);
  log(`out    : ${toRepoRelative(outFile)} (${(built.bytes / 1024).toFixed(1)} KB)`);
  log(`sources: ${built.inputs.length}`);

  return ok({
    id: id ?? null,
    entry: toRepoRelative(entry),
    file: toRepoRelative(outFile),
    bytes: built.bytes,
    sources: built.inputs,
    warnings: built.warnings,
  });
}

main().catch(fail);
