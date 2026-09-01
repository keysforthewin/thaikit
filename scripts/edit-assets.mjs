#!/usr/bin/env node
/**
 * Edit existing registry entries. The other delegate target of the asset-list
 * skill, next to new-assets.mjs.
 *
 * Only the *authoring* fields are editable here -- the fields a human or the
 * asset-list skill decides. Generation state (status, image, and everything
 * under model) belongs to the image and model pipelines, and prompts.imageBase
 * is the frozen original prompt drift is measured against, so none of them can
 * be written through this script.
 *
 * Editing what generation consumed makes what generation produced stale. That is
 * reported as a warning, and --requeue turns it into a re-run by pushing the
 * affected stages back to pending.
 *
 * Usage:
 *   node scripts/edit-assets.mjs --json '[{"id":"plastic-stool","prompts":{"image":"..."}}]'
 *   node scripts/edit-assets.mjs --file edits.json [--dry-run] [--requeue]
 */
import fs from 'node:fs/promises';

import { updateRegistry, readRegistry, AssetSchema, parseId, storeOptionsFor } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { BUDGET_AXES, categories, classifyBySize } from './lib/config.mjs';

/**
 * Dotted paths a caller may write. Anything else is refused rather than merged,
 * so a stray `status` or `attempts` key is a loud error, not a silent stomp on
 * the generation pipeline's own bookkeeping.
 */
const EDITABLE = new Set([
  'name',
  'nameTh',
  'description',
  'category',
  'tags',
  'notes',
  'hidden',
  'subject',
  'budgetClass',
  'targetTriangles',
  'maxDrawCalls',
  'maxMaterials',
  'maxUniqueGeometries',
  'pivot',
  'placement',
  'physics.enabled',
  'physics.massKg',
  'destructionGroups',
  'prompts.image',
  'prompts.texture',
  'prompts.styleProfileId',
  'scale.declared.w',
  'scale.declared.h',
  'scale.declared.d',
  'scale.primaryAxis',
  'scale.tolerance',
]);

/** Read a stage's state. Both live on `status`, but by different routes. */
function stageState(asset, stage) {
  return stage === 'image' ? asset.status.image : asset.model.status;
}

function setStageState(asset, stage, value) {
  if (stage === 'image') asset.status.image = value;
  else {
    // Kept in step deliberately: `status.model` is what the filters read and
    // `model.status` is what the pipeline reads, and a prop whose two disagree
    // is one the UI and the skill describe differently.
    asset.model.status = value;
    asset.status.model = value;
  }
}

/**
 * Which stages a change invalidates. An image prompt change invalidates
 * everything downstream of it; a budget or scale change only invalidates the
 * model, because the reference image is still the right object.
 */
const IMPACT = [
  { stages: ['image', 'model'], match: (p) => p === 'prompts.image' || p === 'prompts.styleProfileId' },
  {
    stages: ['model'],
    match: (p) =>
      p === 'prompts.texture' ||
      p === 'subject' ||
      p === 'budgetClass' ||
      // All four budget axes, not just triangles: each one is written into the
      // sculpt spec's performanceBudget, so a tighter ceiling on any of them is
      // a different build, not the same build re-measured.
      BUDGET_AXES.some(({ key }) => p === key) ||
      p === 'pivot' ||
      // The runtime contract is an input to the build, not a description of it:
      // asking for a lid that detaches changes what gets sculpted. Physics is
      // deliberately NOT here: the geometry does not change because a crate got
      // heavier, and staling on it would requeue a hundred props for a number
      // the sculptor never sees.
      p === 'destructionGroups' ||
      p.startsWith('scale.declared'),
  },
  // The name and description are what fidelity is reviewed against, so a rewrite
  // invalidates the review even though the geometry itself is untouched.
  { stages: ['model'], match: (p) => p === 'name' || p === 'description' || p === 'scale.tolerance' },
];

const isPlainObject = (v) => v !== null && typeof v === 'object' && !Array.isArray(v);

/** Flatten a patch to [dottedPath, value] leaves. Arrays are leaves, not paths. */
function leaves(patch, prefix = '') {
  const out = [];
  for (const [key, value] of Object.entries(patch)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (isPlainObject(value)) out.push(...leaves(value, path));
    else out.push([path, value]);
  }
  return out;
}

function getPath(object, path) {
  return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), object);
}

function setPath(object, path, value) {
  const keys = path.split('.');
  const last = keys.pop();
  let node = object;
  for (const key of keys) {
    if (!isPlainObject(node[key])) node[key] = {};
    node = node[key];
  }
  node[last] = value;
}

const same = (a, b) => JSON.stringify(a ?? null) === JSON.stringify(b ?? null);

/** Accept an id, or a name that resolves to exactly one asset. */
function locate(assets, selector) {
  const byId = assets.find((a) => a.id === selector);
  if (byId) return byId;

  const needle = String(selector).toLowerCase();
  const byName = assets.filter((a) => a.name.toLowerCase() === needle);
  if (byName.length === 1) return byName[0];
  if (byName.length > 1) {
    throw new Error(`"${selector}" matches ${byName.length} assets (${byName.map((a) => a.id).join(', ')}); use an id`);
  }
  throw new Error(`no such asset: ${selector}`);
}

function longestDim(d) {
  return Math.max(d.w, d.h, d.d);
}

async function applyOne(asset, draft, { assets, catalogue, requeue }) {
  const warnings = [];
  const { id, _id, select, ...rest } = draft;
  const patch = rest;

  if (patch.prompts && 'imageBase' in patch.prompts) {
    throw new Error(
      'prompts.imageBase is the frozen original the critic diffs against; edit prompts.image instead',
    );
  }

  const entries = leaves(patch);
  if (!entries.length) throw new Error('no fields to change');

  const refused = entries.map(([path]) => path).filter((path) => !EDITABLE.has(path));
  if (refused.length) {
    throw new Error(
      `not editable here: ${refused.join(', ')} -- ` +
        'generation state is owned by the generate and critique skills, and ids are immutable',
    );
  }

  const next = structuredClone(asset);
  const changed = [];
  for (const [path, value] of entries) {
    if (same(getPath(asset, path), value)) continue;
    setPath(next, path, value);
    changed.push(path);
  }
  if (!changed.length) return { asset, changed: [], requeued: [], warnings };

  const catSpec = catalogue[next.category];
  if (!catSpec) {
    throw new Error(
      `unknown category "${next.category}"; expected one of ${Object.keys(catalogue).join(', ')}`,
    );
  }

  if (changed.includes('name')) {
    const clash = assets.find((a) => a.id !== asset.id && a.name.toLowerCase() === next.name.toLowerCase());
    if (clash) throw new Error(`renaming to "${next.name}" collides with ${clash.id}`);
  }

  // Same scale sanity check new-assets.mjs runs: a metre estimate that fights
  // the category prior is usually the estimate that is wrong.
  const longest = longestDim(next.scale.declared);
  const [priorMin, priorMax] = catSpec.typicalLongestDimMeters;
  if (longest < priorMin * 0.4 || longest > priorMax * 2.5) {
    warnings.push(
      `${next.name}: longest dimension ${longest}m is far outside the typical ` +
        `${priorMin}-${priorMax}m for category "${next.category}" -- check the estimate`,
    );
  }

  const derived = await classifyBySize(longest);
  if (changed.some((p) => p.startsWith('scale.declared')) && !changed.includes('budgetClass')) {
    // Size drives the budget, so a resize that leaves the old class behind would
    // silently hand the mesh the wrong triangle and texture budget.
    if (next.budgetClass !== derived) {
      next.budgetClass = derived;
      changed.push('budgetClass');
      warnings.push(
        `${next.name}: reclassified ${asset.budgetClass} -> ${derived} to match the new ${longest}m size`,
      );
    }
  } else if (changed.includes('budgetClass') && next.budgetClass !== derived) {
    warnings.push(
      `${next.name}: budgetClass "${next.budgetClass}" does not match its ${longest}m size ` +
        `(would be "${derived}") -- keeping the explicit value`,
    );
  }

  // Name the fields that actually invalidated each stage, not every field in the
  // edit -- a tags tweak alongside a prompt rewrite did not stale anything.
  const stale = new Map();
  for (const rule of IMPACT) {
    const triggers = changed.filter((path) => rule.match(path));
    if (!triggers.length) continue;
    for (const stage of rule.stages) {
      stale.set(stage, [...new Set([...(stale.get(stage) ?? []), ...triggers])]);
    }
  }

  const requeued = [];
  for (const [stage, triggers] of stale) {
    const state = stageState(next, stage);
    if (state === 'pending' || state === 'running') continue;
    if (requeue) {
      setStageState(next, stage, 'pending');
      requeued.push(stage);
    } else {
      warnings.push(
        `${next.name}: ${triggers.join(', ')} changed but the ${stage} stage is "${state}" -- ` +
          'the generated output no longer matches; re-run generation or pass --requeue',
      );
    }
  }
  // A requeued model gets its quarantine lifted: the reason it was parked was
  // the old inputs, and those just changed.
  if (requeued.includes('model') && next.model.quarantine) {
    next.model.quarantine = null;
    requeued.push('model quarantine cleared');
    next.hidden = false;
  }

  next.updatedAt = new Date().toISOString();
  return { asset: AssetSchema.parse(next), changed, requeued, warnings };
}

/**
 * Pure over the registry it is handed, so the same pass can run once outside the
 * lock for --dry-run and again on the fresh in-lock copy for the real write.
 */
async function applyAll(registry, drafts, options) {
  const updated = [];
  const skipped = [];
  const unchanged = [];
  const warnings = [];

  for (const draft of drafts) {
    const selector = draft.id ?? draft._id ?? draft.select;
    if (!selector) {
      skipped.push({ id: '<unspecified>', reason: 'every edit needs an "id" (an asset id, or an exact name)' });
      continue;
    }
    try {
      const asset = locate(registry.assets, selector);
      const result = await applyOne(asset, draft, { ...options, assets: registry.assets });
      warnings.push(...result.warnings);
      if (!result.changed.length) {
        unchanged.push({ id: asset.id, reason: 'every field already holds that value' });
        continue;
      }
      const index = registry.assets.findIndex((a) => a.id === asset.id);
      registry.assets[index] = result.asset;
      updated.push({ id: asset.id, name: result.asset.name, changed: result.changed, requeued: result.requeued });
    } catch (err) {
      skipped.push({ id: String(selector), reason: err.message });
    }
  }

  return { updated, unchanged, skipped, warnings };
}

async function main() {
  const args = parseArgs();
  const source = args.json ? args.json : args.file ? await fs.readFile(args.file, 'utf8') : null;
  if (!source) throw new Error('pass --json <array> or --file <path>');

  const drafts = JSON.parse(source);
  if (!Array.isArray(drafts)) throw new Error('expected a JSON array of edits');

  const catalogue = (await categories()).categories;
  const options = { catalogue, requeue: Boolean(args.requeue) };

  const report = (result) => {
    for (const w of result.warnings) log(`warning: ${w}`);
    for (const u of result.unchanged) log(`unchanged ${u.id}: ${u.reason}`);
    for (const s of result.skipped) log(`skipped ${s.id}: ${s.reason}`);
    for (const u of result.updated) {
      log(`${u.id}: ${u.changed.join(', ')}${u.requeued.length ? ` (requeued ${u.requeued.join(', ')})` : ''}`);
    }
  };

  // Every draft must address ONE root: bare ids edit thaikit's own tree, and
  // `@ns/name` selectors edit that adopted pack's. The store option is derived
  // from the first selector and the rest must agree.
  const selectorOf = (d) => String(d.id ?? d._id ?? d.select ?? '');
  const roots = new Set(drafts.map((d) => (selectorOf(d).startsWith('@') ? parseId(selectorOf(d)).ns : '@thai-kit')));
  if (roots.size > 1) return fail(`one edit-assets run edits one pack; got ${[...roots].join(', ')}`);
  const storeOptions = [...roots][0] === '@thai-kit' ? {} : storeOptionsFor(drafts.map(selectorOf).find((x) => x.startsWith('@')));
  for (const d of drafts) for (const k of ['id', '_id', 'select']) if (typeof d[k] === 'string' && d[k].startsWith('@')) d[k] = parseId(d[k]).name;

  if (args['dry-run']) {
    const result = await applyAll(await readRegistry(storeOptions), drafts, options);
    report(result);
    return ok({ dryRun: true, ...result });
  }

  let result;
  await updateRegistry(async (registry) => {
    result = await applyAll(registry, drafts, options);
    return registry;
  }, storeOptions);

  report(result);
  log(`updated ${result.updated.length} asset(s), skipped ${result.skipped.length}`);
  return ok(result);
}

main().catch(fail);
