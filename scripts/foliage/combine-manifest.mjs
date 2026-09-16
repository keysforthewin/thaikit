/**
 * Rebuilds `exports/unreal/foliage/combined-manifest.json`: the kit's
 * `exports/unreal/manifest.json` with every foliage family's browser-built
 * item replaced by the procedural variants in `exports/unreal/foliage/manifest.json`.
 *
 * `import-unreal-level.mjs --manifest .../combined-manifest.json` places
 * colliders from this file, so it has to be rebuilt after EITHER source
 * changes: a kit re-export (new compounds on the props) or a foliage refit
 * (`sync-physical-colliders.mjs`). `stage-exports.mjs` calls `combineManifests`
 * at the end of a foliage build; run this script on its own after a kit export.
 *
 *   node scripts/foliage/combine-manifest.mjs
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { FOLIAGE } from './catalog.mjs';

export async function combineManifests(root = process.env.THAIKIT_REPO_ROOT ?? process.cwd()) {
  const dest = path.join(root, 'exports/unreal/foliage');
  const foliage = JSON.parse(await fs.readFile(path.join(dest, 'manifest.json'), 'utf8'));
  const full = JSON.parse(await fs.readFile(path.join(root, 'exports/unreal/manifest.json'), 'utf8'));
  const families = new Set(FOLIAGE.map((a) => `@thai-kit/${a.id}`));
  full.items = full.items.filter((i) => !families.has(i.ref));
  full.items.push(...foliage.items.map((i) => ({ ...i, file: i.file.startsWith('foliage/') ? i.file : `foliage/${i.file}` })));
  const bad = full.items.filter((i) => i.colliders != null && !Array.isArray(i.colliders));
  if (bad.length) throw new Error(`colliders must be an array of parts: ${bad.map((i) => i.asset).join(', ')}`);
  await fs.writeFile(path.join(dest, 'combined-manifest.json'), JSON.stringify(full, null, 2));
  return { kit: full.items.length - foliage.items.length, foliage: foliage.items.length, generatedAt: full.generatedAt };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const r = await combineManifests();
  console.log(`combined-manifest.json: ${r.kit} kit items (export ${r.generatedAt}) + ${r.foliage} foliage variants`);
}
