#!/usr/bin/env node
/**
 * Emit the slim consumer view of the registry -- what a game actually fetches on
 * boot. Prompts, review history and critiques are omitted; only shipped,
 * non-hidden assets are included.
 *
 * A prop is a JavaScript module, not a GLB: `module` is a browser bundle that
 * exports `createObjectModel(spec, options) -> THREE.Group`, built with `three`
 * left external. The consumer supplies its own three instance -- that is what
 * keeps the factory's Mesh the same class as the renderer's.
 *
 * The reference mesh is deliberately absent. It never ships: it was a scoring
 * baseline, and it is not what the prop is.
 *
 * Usage: node scripts/build-registry.mjs [--out dist/registry.json] [--report]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { readRegistry, writeFileAtomic, REPO_ROOT } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function main() {
  const args = parseArgs();
  const registry = await readRegistry();

  const ships = (a) =>
    !a.hidden && a.model.status === 'done' && Boolean(a.model.file) && !a.model.quarantine;

  const shipped = registry.assets.filter(ships);
  const quarantined = registry.assets.filter((a) => a.model.quarantine);

  if (args.report) {
    log('');
    log('quarantined assets needing a human:');
    if (!quarantined.length) log('  (none)');
    for (const a of quarantined) {
      log(`  ${a.id.padEnd(28)} ${a.model.quarantine.reason}`);
    }
    log('');
  }

  const out = {
    schemaVersion: registry.schemaVersion,
    generatedAt: new Date().toISOString(),
    license: registry.license,
    counts: {
      total: registry.assets.length,
      ready: shipped.length,
      pending: registry.assets.filter((a) => a.model.status === 'pending').length,
      quarantined: quarantined.length,
    },
    assets: shipped.map((a) => ({
      id: a.id,
      name: a.name,
      nameTh: a.nameTh || undefined,
      category: a.category,
      subject: a.subject,
      tags: a.tags,
      placement: a.placement,
      collider: a.collider,
      pivot: a.pivot,
      module: a.model.file,
      /** The named export to call. Not always the default. */
      export: a.model.export,
      /**
       * Authored PBR maps, repo-relative exactly like `module`, so a consumer
       * that fetches the module from <base>/assets/... fetches these from the
       * same base. Left undefined rather than [] for the procedural props, which
       * is most of the kit, so their entries stay byte-identical.
       */
      maps: a.model.maps?.length
        ? a.model.maps.map((m) => ({ material: m.material, role: m.role, file: m.file }))
        : undefined,
      /**
       * What a game can drive without reading the geometry: the named pivots for
       * parts that move and the sockets things attach to.
       */
      sockets: a.model.runtime.sockets,
      pivots: a.model.runtime.pivots,
      size: [a.scale.declared.w, a.scale.declared.h, a.scale.declared.d],
      triangles: a.model.triangles,
      drawCalls: a.model.drawCalls,
      fileBytes: a.model.fileBytes,
      gpuBytesEstimate: a.model.gpuBytesEstimate,
      score: a.model.review.score,
    })),
  };

  const outPath = args.out ? path.resolve(args.out) : path.join(REPO_ROOT, 'dist', 'registry.json');
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await writeFileAtomic(outPath, JSON.stringify(out, null, 2) + '\n');

  log(`built ${outPath}: ${shipped.length} shipped, ${quarantined.length} quarantined`);
  return ok({ out: outPath, ...out.counts });
}

main().catch(fail);
