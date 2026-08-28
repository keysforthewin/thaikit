/**
 * The one esbuild call every module in this repo is built with.
 *
 * CommonJS with `three` left EXTERNAL is the whole contract -- see the header on
 * scripts/build-model-module.mjs for why an ESM build cannot work here. The
 * options exist for the pack manager: a third-party vibe3d item may import
 * `three/webgpu` (mapped to the host's three at require time) and may spell its
 * own files through an alias such as `@/models`.
 */
import fs from 'node:fs/promises';
import { createRequire } from 'node:module';

import * as esbuild from 'esbuild';

const nodeRequire = createRequire(import.meta.url);

/**
 * esbuild treats an external package as external for every subpath too, so
 * `external: ['three']` would also leave `three/addons/...` as a bare require
 * the host cannot answer. Addons are ordinary modules that themselves import
 * `three`, so they are bundled in and their own `three` import stays external.
 */
const bundleThreeAddons = {
  name: 'bundle-three-addons',
  setup(build) {
    build.onResolve({ filter: /^three\/(addons|examples\/jsm)\// }, (args) => {
      try {
        return { path: nodeRequire.resolve(args.path) };
      } catch (err) {
        return { errors: [{ text: `cannot resolve ${args.path}: ${err.message}` }] };
      }
    });
  },
};

export const DEFAULT_EXTERNAL = ['three'];

export async function buildModule({
  entry,
  outFile,
  external = DEFAULT_EXTERNAL,
  alias = {},
  sourcemap = 'inline',
}) {
  const result = await esbuild.build({
    entryPoints: [entry],
    outfile: outFile,
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: 'es2022',
    // Left in: this is a dev tool, the bundles are small, and a stack trace that
    // points at the authored TypeScript is worth more than the bytes.
    sourcemap,
    external,
    alias,
    logLevel: 'silent',
    metafile: true,
    plugins: [bundleThreeAddons],
  });

  const bytes = (await fs.stat(outFile)).size;
  const inputs = Object.keys(result.metafile.inputs).filter((f) => !f.includes('node_modules'));
  return { bytes, inputs, warnings: result.warnings.map((w) => w.text) };
}
