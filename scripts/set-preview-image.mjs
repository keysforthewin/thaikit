#!/usr/bin/env node
/**
 * Record a prepared preview image against an asset. The delegate target of the
 * thaikit-preview-image skill.
 *
 * The skill makes the fal call itself -- there is deliberately no scripted
 * generation path -- but the registry write goes through here, because
 * registry-core holds the lock the web UI also respects and a direct write to
 * registry.json is silently lost.
 *
 * A new reference image stales anything already reconstructed from the old one.
 * That is reported as a warning, and --requeue turns it into a re-run.
 *
 * Usage:
 *   node scripts/set-preview-image.mjs --id oil-drum --file packages/props/src/models/oil-drum/preview.jpg \
 *     --model fal-ai/flux/schnell --seed 12345 --prompt-file scratch/oil-drum/preview/prompt.txt \
 *     [--uploaded-url https://...] [--requeue]
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import sharp from 'sharp';

import { updateAsset, toRepoRelative, modelDir } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';

async function main() {
  const args = parseArgs();
  if (!args.id) throw new Error('pass --id <asset-id>');
  if (!args.file) throw new Error('pass --file <path to the prepared png>');

  // Accept either a repo-relative path or one relative to the cwd; the registry
  // only ever stores the repo-relative, POSIX-separated form.
  const abs = path.resolve(args.file);
  await fs.access(abs).catch(() => {
    throw new Error(`no image at ${args.file}`);
  });
  const rel = toRepoRelative(abs);
  if (rel.startsWith('..')) throw new Error(`image lives outside the repo: ${args.file}`);
  // The plate lives in the prop's own directory: the pack export and the web
  // both assume `preview.<ext>` beside the factory, and nothing else is shipped.
  const expectedDir = toRepoRelative(modelDir(args.id));
  if (path.posix.dirname(rel) !== expectedDir || !/^preview\.(jpe?g|png)$/i.test(path.posix.basename(rel))) {
    throw new Error(`the plate must be ${expectedDir}/preview.jpg (or .png), not ${rel}`);
  }

  const meta = await sharp(abs).metadata();
  if (meta.format !== 'png' && meta.format !== 'jpeg') {
    // Meshy's image-to-3d rejects WebP outright with image_load_error, and this
    // is the file that goes to it.
    throw new Error(`preview image must be PNG or JPEG, not ${meta.format}`);
  }

  const prompt = args['prompt-file']
    ? await fs.readFile(args['prompt-file'], 'utf8')
    : (args.prompt ?? '');

  const warnings = [];
  const requeued = [];

  const { asset } = await updateAsset(args.id, (a) => {
    const replacing = a.image?.file ?? null;

    a.image = {
      file: rel,
      w: meta.width,
      h: meta.height,
      model: args.model ?? '',
      seed: args.seed == null ? null : Number(args.seed),
      prompt: prompt.trim(),
      uploadedUrl: args['uploaded-url'] ?? null,
      createdAt: new Date().toISOString(),
    };
    a.status.image = 'done';

    // Only a REPLACEMENT stales downstream work; the first image for a pending
    // asset stales nothing, because nothing was built from anything. The model
    // is generated from this plate and reviewed against it, so a new plate
    // invalidates the whole build, not part of it.
    if (replacing && replacing !== rel) {
      const m = a.model;
      if (m.status !== 'pending' && m.status !== 'running') {
        if (args.requeue) {
          m.status = 'pending';
          a.status.model = 'pending';
          requeued.push('model');
          if (m.quarantine) {
            m.quarantine = null;
            requeued.push('model quarantine cleared');
            a.hidden = false;
          }
        } else {
          warnings.push(
            `the model is "${m.status}" but the reference image changed -- ` +
              'what was generated no longer matches; re-run generation or pass --requeue',
          );
        }
      }
    }

    a.updatedAt = new Date().toISOString();
    return a;
  });

  for (const w of warnings) log(`warning: ${w}`);
  log(
    `${asset.id}: image ${rel} (${meta.width}x${meta.height})` +
      (requeued.length ? ` -- requeued ${requeued.join(', ')}` : ''),
  );
  return ok({ id: asset.id, image: asset.image, status: asset.status, requeued, warnings });
}

main().catch(fail);
