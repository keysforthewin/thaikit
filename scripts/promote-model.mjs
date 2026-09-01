#!/usr/bin/env node
/**
 * Move a finished build out of scratch/ and into the kit.
 *
 * scratch/ is gitignored, so until this runs the only copy of a shipped prop
 * lives in a directory nobody backs up. What moves into
 * packages/props/src/models/<id>/ is SOURCE: the TypeScript factory, the sculpt
 * spec behind it, the authored maps and the thumbnail -- plus `model.ts`, the
 * vibe3d entry emitted beside the factory. The spec matters most -- it is what
 * a later refinement edits, and generated code must never be the only copy of a
 * reconstruction decision.
 *
 * The BUNDLE does not move. It is a build product: once the source is in the
 * tree this spawns the pack installer's per-item refresh, which bundles, probes
 * and photographs the prop into packs/@thai-kit/<tag>/<id>/ -- the one bundle
 * every Node-side gate and both editors read. The scratch bundle is still
 * constructed under Node first, so a factory that will not build headlessly is
 * refused before anything is copied.
 *
 * The browse thumbnail is the hero render resized, so the tile in the grid is
 * literally the frame the review looked at.
 *
 * A prop over its scene budget does not ship. render-model.mjs measures the
 * four axes and only warns -- its renders are also what img2threejs's review
 * gates read, so failing there would withhold the evidence. This is the gate,
 * because this is the step that puts a prop in the kit. `--allow-over-budget`
 * is the deliberate override, and it says so in the log.
 *
 * Usage:
 *   node scripts/promote-model.mjs --id <id> [--from <scratchdir>] [--thumb-size 512]
 *                                  [--allow-over-budget] [--allow-contract-drift] [--allow-no-colliders]
 *                                  [--no-pack-refresh]
 */
import fs from 'node:fs/promises';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import { execFileSync } from 'node:child_process';

import sharp from 'sharp';
import {
  modelDir, workDir, toRepoRelative, readRegistry, updateAsset, REPO_ROOT,
} from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { entrySource } from './lib/vibe3d-entry.mjs';
import { THAIKIT_PACK } from './lib/bundle-for.mjs';
import { judgeAsset, formatAxis, overBudgetMessage, runtimeVerdict, colliderVerdict } from './lib/budget.mjs';
import { readSkillReview } from './lib/review.mjs';

const nodeRequire = createRequire(import.meta.url);

/**
 * Construct the module under plain Node, and refuse it if it will not.
 *
 * Half this repo's gates evaluate the bundle outside a browser -- check-coplanar,
 * derive-colliders, the tilekit probes -- and a factory that reaches for the DOM
 * unguarded passes every render and then fails all of them with a stack trace
 * that reads as a broken module. The Cafe Amazon shopfront shipped exactly that
 * way: one unguarded THREE.TextureLoader on its baked fascia graphic, invisible
 * in the browser, and it was the only prop of a hundred with no physics compound
 * because it was the only one that would not construct.
 *
 * The three the harness hands the factory is the page's own, so this shim gives
 * it the repo's -- the same contract, and the same refusal of anything else.
 */
function constructsUnderNode(bundlePath) {
  try {
    const THREE = nodeRequire('three');
    const mod = { exports: {} };
    new Function('module', 'exports', 'require', readFileSync(bundlePath, 'utf8'))(
      mod,
      mod.exports,
      (name) => {
        if (name === 'three') return THREE;
        throw new Error(`the bundle must import three and nothing else; it asked for ${name}`);
      },
    );
    const factory = mod.exports.createObjectModel ?? mod.exports.default;
    if (typeof factory !== 'function') return { ok: false, error: 'no createObjectModel export' };
    // No baseUrl, exactly as the Node-side gates call it: that is what makes a
    // map load behind `if (options.baseUrl)` safe and an unguarded one fatal.
    const root = factory(null, {});
    if (!root?.isObject3D) return { ok: false, error: 'the factory did not return an Object3D' };
    return { ok: true };
  } catch (err) {
    return { ok: false, error: err.message };
  }
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

/** Copy if present; report what actually moved rather than assuming. */
async function copyIfPresent(from, to) {
  if (!(await exists(from))) return null;
  await fs.mkdir(path.dirname(to), { recursive: true });
  await fs.copyFile(from, to);
  return to;
}

const MAP_ROLES = ['albedo', 'roughness', 'height', 'normal', 'ao', 'metalness', 'emissive', 'alpha'];

/**
 * The PBR maps the spec SAYS this prop needs, read off every material's
 * referencePbr block.
 *
 * Driven off the spec rather than off a directory listing on purpose: a spec
 * that names a map nobody authored then fails here, at promotion, instead of
 * 404-ing silently in a browser and rendering as a flat grey surface. It is also
 * what makes the factory's all-five-or-nothing rule checkable before shipping --
 * makeReferenceTextureSet returns null for the whole set if one map is missing,
 * so a prop can lose its entire surface to a single typo.
 */
async function declaredMaps(specPath) {
  if (!(await exists(specPath))) return [];
  let spec;
  try {
    spec = JSON.parse(await fs.readFile(specPath, 'utf8'));
  } catch (err) {
    throw new Error(`could not parse ${toRepoRelative(specPath)}: ${err.message}`);
  }
  const out = [];
  for (const material of spec.materials ?? []) {
    const maps = material?.referencePbr?.maps;
    if (!maps || typeof maps !== 'object') continue;
    for (const role of MAP_ROLES) {
      const entry = maps[role];
      if (!entry || typeof entry !== 'object') continue;
      const raw = typeof entry.url === 'string' && entry.url.trim() ? entry.url : entry.path;
      if (typeof raw !== 'string' || !raw.trim()) continue;
      // An absolute URL is somebody else's to serve; only a local file ships.
      if (/^(https?:|data:|blob:)/.test(raw)) continue;
      out.push({
        material: material.id ?? material.materialId ?? '',
        role,
        filename: path.basename(raw),
      });
    }
  }
  return out;
}

async function main() {
  const args = parseArgs();
  const id = args.id;
  if (!id) return fail('need --id');

  const registry = await readRegistry();
  const asset = registry.assets.find((a) => a.id === id);
  if (!asset) return fail(`no asset with id ${id}`);

  // Judged BEFORE anything is copied. A prop that fails here should leave the kit
  // exactly as it found it, not half-populated with a bundle whose spec never moved.
  const budget = await judgeAsset(asset, asset.model);
  log(`budget : ${asset.budgetClass} — ${budget.axes.map(formatAxis).join(', ')}`);
  if (!budget.ok) {
    const detail = overBudgetMessage(budget);
    if (!args['allow-over-budget']) {
      return fail(
        `${asset.name} is over its ${asset.budgetClass} scene budget and will not ship:\n  ` +
          `${detail}\n` +
          'Fix it in the sculpt spec and rebuild, raise the per-asset ceiling on the asset ' +
          '(maxDrawCalls / maxMaterials / maxUniqueGeometries / targetTriangles), or pass ' +
          '--allow-over-budget if this prop is genuinely worth the frame time.',
      );
    }
    log(`WARN   : shipping over budget on --allow-over-budget\n  ${detail}`);
  }

  // The runtime contract, checked the same way and at the same point. Unlike the
  // budget this is an EQUALITY check: a group declared and not built means the
  // prop does not come apart as promised, and a group built and not declared is
  // contract nobody asked for. Both are defects, and both are silent otherwise.
  const runtime = runtimeVerdict(asset, asset.model.runtime);
  log(
    `runtime: ${runtime.built.length} destruction group(s) ` +
      `[${runtime.built.join(', ') || 'none'}] against declared ` +
      `[${runtime.declared.join(', ') || 'none'}]`,
  );
  if (!runtime.ok) {
    const detail = runtime.problems.join('\n  ');
    if (!args['allow-contract-drift']) {
      return fail(
        `${asset.name}'s runtime does not match what its entry declares:\n  ${detail}\n` +
          'Fix the sculpt spec and rebuild, correct destructionGroups on the asset, ' +
          'or pass --allow-contract-drift.',
      );
    }
    log(`WARN   : shipping with contract drift on --allow-contract-drift\n  ${detail}`);
  }

  // The physics compound, judged here for the same reason as the rest: before
  // anything is copied. A prop that ships without one cannot be walked into or
  // stood on, which used to be invisible because the old gate only counted
  // colliders and every prop had exactly one.
  const collider = colliderVerdict(asset);
  log(
    `colliders: ${collider.parts}/${collider.ceiling} part(s)` +
      (collider.coverage != null ? `, coverage ${collider.coverage}` : ', unmeasured'),
  );
  if (!collider.ok) {
    const detail = collider.problems.join('\n  ');
    if (!args['allow-no-colliders']) {
      return fail(
        `${asset.name}'s physics compound is not fit to ship:\n  ${detail}\n` +
          `Run node scripts/derive-colliders.mjs --id ${id}, correct it by hand in the ` +
          'viewer, or pass --allow-no-colliders.',
      );
    }
    log(`WARN   : shipping without a usable compound on --allow-no-colliders\n  ${detail}`);
  }

  const from = args.from ? path.resolve(args.from) : workDir(id);
  const to = modelDir(id);
  await fs.mkdir(to, { recursive: true });

  const bundleFrom = path.join(from, 'model.bundle.js');
  if (!(await exists(bundleFrom))) {
    return fail(
      `no built module at ${toRepoRelative(bundleFrom)}. ` +
        'Run build-model-module.mjs, then render-model.mjs, then this.',
    );
  }

  const node = constructsUnderNode(bundleFrom);
  if (!node.ok) {
    return fail(
      `${asset.name}'s module does not construct under plain Node: ${node.error}\n` +
        'Every Node-side gate evaluates this bundle, so it would ship unable to be ' +
        'measured. A baked graphic needs a `typeof document === \'undefined\'` guard, ' +
        'or the load has to sit behind `if (options.baseUrl)`.',
    );
  }
  log('node   : module constructs headlessly');

  const moved = {};
  // Flattened: the tree is vibe3d-shaped, one directory per prop with the
  // factory and its entry side by side. No bundle is copied -- see the header.
  moved.source = await copyIfPresent(
    path.join(from, 'src/createObjectModel.ts'),
    path.join(to, 'createObjectModel.ts'),
  );
  moved.spec = await copyIfPresent(
    path.join(from, 'object-sculpt-spec.json'),
    path.join(to, 'object-sculpt-spec.json'),
  );

  // Authored PBR maps. A procedural prop declares none and this is a no-op; a
  // flat ground tile has nothing BUT these -- its geometry is two triangles and
  // every marking on it is a pixel.
  const mapEntries = [];
  for (const { material, role, filename } of await declaredMaps(path.join(to, 'object-sculpt-spec.json'))) {
    const src = path.join(from, 'maps', filename);
    const dest = path.join(to, 'maps', filename);
    if (!(await copyIfPresent(src, dest))) {
      return fail(
        `the spec declares a ${role} map for material "${material}" (${filename}) but ` +
          `${toRepoRelative(src)} does not exist. The prop would render untextured.`,
      );
    }
    const meta = await sharp(dest).metadata();
    mapEntries.push({
      material,
      role,
      file: toRepoRelative(dest),
      bytes: (await fs.stat(dest)).size,
      width: meta.width ?? null,
      height: meta.height ?? null,
    });
  }
  if (mapEntries.length) {
    log(`maps   : ${mapEntries.length} shipped (${mapEntries.map((m) => m.role).join(', ')})`);
    // The render is what produced the thumbnail and the four measured axes. If it
    // saw fewer texture images than the prop ships maps, it ran before they
    // existed -- so the picture in the kit is of an untextured prop.
    const distinct = new Set(mapEntries.map((m) => m.file)).size;
    if ((asset.model.textures ?? 0) < distinct) {
      return fail(
        `${distinct} map(s) ship but the render measured only ${asset.model.textures ?? 0} texture(s). ` +
          'The render predates them; re-run render-model.mjs before promoting.',
      );
    }
  }

  if (!moved.source) {
    log('warn   : no createObjectModel.ts beside the bundle; the TypeScript is not being shipped');
  }
  if (!moved.spec) {
    log('warn   : no object-sculpt-spec.json; a later refinement will have to re-derive it');
  }

  // The hero the review looked at, falling back to the front turntable frame.
  const heroCandidates = ['renders/beauty-hero.png', 'renders/beauty-000.png'];
  let thumb = null;
  for (const rel of heroCandidates) {
    const src = path.join(from, rel);
    if (!(await exists(src))) continue;
    const dest = path.join(to, 'thumb.webp');
    await sharp(src)
      .resize(Number(args['thumb-size'] ?? 512), Number(args['thumb-size'] ?? 512), { fit: 'inside' })
      .webp({ quality: 82 })
      .toFile(dest);
    thumb = dest;
    log(`thumb  : ${toRepoRelative(src)} -> ${toRepoRelative(dest)}`);
    break;
  }
  if (!thumb) log('warn   : no render to make a thumbnail from; the grid will fall back to the plate');

  // The vibe3d entry beside the factory: what a consumer's `vibe3d add` imports
  // and what the pack installer bundles. Regenerated on every promotion so it
  // always matches the look-dev helpers the factory currently exports; the
  // exporter refuses a stale one rather than silently shipping it.
  let entryFile = null;
  if (moved.source) {
    const source = await fs.readFile(moved.source, 'utf8');
    entryFile = path.join(to, 'model.ts');
    await fs.writeFile(entryFile, entrySource(asset, source, mapEntries.length > 0), 'utf8');
    log(`entry  : ${toRepoRelative(entryFile)}`);
  }

  // The skill's own verdict, carried across at the moment the prop enters the
  // kit. thaikit does not judge models -- it reads the judgement img2threejs
  // already made and recorded, from the spec's reviewHistory and the state
  // file's loop counts. Doing it here rather than as a separate step is what
  // stops it being forgotten: promotion is the one command that cannot be
  // skipped, and a quality tab filled in by hand is worse than an empty one.
  const review = await readSkillReview({
    specPath: moved.spec ?? path.join(from, 'object-sculpt-spec.json'),
    statePath: path.join(from, '.img2threejs/state.json'),
  });
  if (review) {
    log(
      `review : fidelity ${review.fidelity ?? '\u2014'} against ${review.threshold / 100} ` +
        `(${review.passed ? 'pass' : 'below bar'}), ${review.passesComplete.length}/8 passes, ` +
        `${review.corrections.total}/${review.corrections.maxTotal} corrections`,
    );
  } else {
    log('warn   : no img2threejs review found; the quality tab will stay empty rather than guess');
  }

  await updateAsset(id, (a) => {
    a.model.source = moved.source ? toRepoRelative(moved.source) : a.model.source;
    a.model.spec = moved.spec ? toRepoRelative(moved.spec) : a.model.spec;
    a.model.thumb = thumb ? toRepoRelative(thumb) : a.model.thumb;
    a.model.maps = mapEntries;
    // img2threejs's state file stays in scratch/: it is a resume index, not a
    // shipped artefact, and pointing at it keeps a rebuild resumable.
    a.model.state = toRepoRelative(path.join(from, '.img2threejs/state.json'));
    if (review) a.model.review = { ...a.model.review, ...review };
    a.model.status = 'done';
    a.status.model = 'done';
    return a;
  });

  // The bundle that ships. The pack installer builds it from the tree, probes
  // it under Node (the second headless construct, on the file the gates read),
  // photographs it, and records the item in packs/index.json. `--add` because a
  // first promotion has no item to replace. Its JSON line carries the bytes.
  let pack = null;
  if (args['no-pack-refresh']) {
    log(`pack   : skipped on --no-pack-refresh; run node scripts/install-pack.mjs --refresh-item ${THAIKIT_PACK}/${id} --add`);
  } else {
    log(`pack   : refreshing ${THAIKIT_PACK}/${id}`);
    let line;
    try {
      line = execFileSync(
        process.execPath,
        ['scripts/install-pack.mjs', '--refresh-item', `${THAIKIT_PACK}/${id}`, '--add'],
        { cwd: REPO_ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'inherit'] },
      );
    } catch (err) {
      return fail(`pack refresh failed for ${THAIKIT_PACK}/${id}: ${err.stdout?.trim() || err.message}`);
    }
    let result;
    try {
      result = JSON.parse(line.trim().split('\n').pop());
    } catch {
      return fail(`pack refresh printed no JSON result line:\n${line}`);
    }
    if (!result.ok || !result.item?.supported) {
      return fail(
        `${asset.name} does not construct in the pack build: ${result.item?.error ?? result.error ?? 'unknown'}. ` +
          'The source is in the tree but no bundle ships until this is fixed.',
      );
    }
    pack = result.item;
    if (pack.bytes != null) {
      await updateAsset(id, (a) => {
        a.model.fileBytes = pack.bytes;
        return a;
      });
    }
    log(`pack   : ${pack.bundle ?? '(bundle)'} (${pack.bytes != null ? `${(pack.bytes / 1024).toFixed(1)} KB` : 'size unknown'}, version ${pack.version ?? '?'})`);
  }

  return ok({
    id,
    source: moved.source ? toRepoRelative(moved.source) : null,
    entry: entryFile ? toRepoRelative(entryFile) : null,
    spec: moved.spec ? toRepoRelative(moved.spec) : null,
    thumb: thumb ? toRepoRelative(thumb) : null,
    pack,
  });
}

main().catch(fail);
