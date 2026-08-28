#!/usr/bin/env node
/**
 * Append assets to the registry. The delegate target of the asset-list skill.
 *
 * Enforces what a language model reliably gets wrong on its own: unique slugs,
 * near-duplicate names, scale sanity against category priors, and a budgetClass
 * that actually matches the declared dimensions.
 *
 * Usage:
 *   node scripts/new-assets.mjs --json '[{...}]'
 *   node scripts/new-assets.mjs --file drafts.json [--dry-run]
 */
import fs from 'node:fs/promises';

import {
  updateRegistry,
  readRegistry,
  AssetSchema,
} from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from './lib/out.mjs';
import { BUDGET_AXES, categories, classifyBySize } from './lib/config.mjs';

function slugify(name) {
  return name
    .toLowerCase()
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

/** Cheap token-overlap similarity, to catch "plastic stool" vs "stool plastic". */
function similarity(a, b) {
  const tokens = (s) => new Set(s.toLowerCase().split(/[^a-z0-9]+/).filter(Boolean));
  const [x, y] = [tokens(a), tokens(b)];
  if (!x.size || !y.size) return 0;
  const shared = [...x].filter((t) => y.has(t)).length;
  return shared / Math.min(x.size, y.size);
}

function longestDim(d) {
  return Math.max(d.w, d.h, d.d);
}

async function normalize(draft, taken, catalogue) {
  const warnings = [];
  const name = String(draft.name ?? '').trim();
  if (!name) throw new Error('every asset needs a name');

  let id = draft.id ? slugify(draft.id) : slugify(name);
  if (!id) throw new Error(`could not derive a slug from name: ${name}`);
  let suffix = 2;
  while (taken.has(id)) id = `${slugify(draft.id || name)}-${suffix++}`;

  const category = draft.category ?? 'street-furniture';
  const catSpec = catalogue[category];
  if (!catSpec) {
    throw new Error(
      `unknown category "${category}"; expected one of ${Object.keys(catalogue).join(', ')}`,
    );
  }

  const declared = draft.scale?.declared ?? draft.scale ?? null;
  if (!declared || !declared.w || !declared.h || !declared.d) {
    throw new Error(`${name}: scale.declared needs w, h and d in metres`);
  }

  // An LLM guessing dimensions unaided will confidently make a stool 2m tall.
  const longest = longestDim(declared);
  const [priorMin, priorMax] = catSpec.typicalLongestDimMeters;
  if (longest < priorMin * 0.4 || longest > priorMax * 2.5) {
    warnings.push(
      `${name}: longest dimension ${longest}m is far outside the typical ` +
        `${priorMin}-${priorMax}m for category "${category}" -- check the estimate`,
    );
  }

  const budgetClass = draft.budgetClass ?? (await classifyBySize(longest));
  const derived = await classifyBySize(longest);
  if (draft.budgetClass && draft.budgetClass !== derived) {
    warnings.push(
      `${name}: budgetClass "${draft.budgetClass}" does not match its ${longest}m ` +
        `size (would be "${derived}") -- keeping the explicit value`,
    );
  }

  const now = new Date().toISOString();
  const imagePrompt = String(draft.prompts?.image ?? draft.description ?? name).trim();

  const asset = AssetSchema.parse({
    id,
    name,
    nameTh: draft.nameTh ?? '',
    description: draft.description ?? '',
    category,
    tags: draft.tags ?? [],
    prompts: {
      image: imagePrompt,
      imageBase: imagePrompt,
      texture: draft.prompts?.texture ?? draft.texture ?? '',
      styleProfileId: draft.prompts?.styleProfileId ?? 'thai-street-photoreal-v1',
    },
    budgetClass,
    // Per-asset ceilings pass through when a draft names them, and stay null
    // otherwise so the class stays the single place the numbers live. An
    // override is only ever a prop that has earned a different ceiling than its
    // size implies -- a bare mesh sphere, or a stall roof that has to be four.
    ...Object.fromEntries(
      BUDGET_AXES.map(({ key }) => [key, draft[key] ?? null]),
    ),
    scale: {
      declared,
      measured: null,
      primaryAxis: draft.scale?.primaryAxis ?? 'h',
      tolerance: draft.scale?.tolerance ?? 0.1,
    },
    // Prop unless the author says otherwise. It selects the reconstruction
    // profile, so an animal or a person left at the default is built with every
    // anatomy gate silently skipped.
    subject: draft.subject ?? 'prop',
    pivot: draft.pivot ?? 'base-center',
    placement: draft.placement ?? catSpec.defaultPlacement ?? ['floor'],
    physics: {
      enabled: draft.physics?.enabled ?? catSpec.defaultPhysics ?? false,
      massKg: draft.physics?.massKg ?? null,
    },
    destructionGroups: draft.destructionGroups ?? [],
    status: { image: 'pending', model: 'pending' },
    image: null,
    model: {},
    license: {
      spdx: 'MIT',
      generatedBy: [],
      notice: 'Fully synthetic. No third-party scanned or scraped geometry.',
    },
    hidden: false,
    notes: draft.notes ?? '',
    createdAt: now,
    updatedAt: now,
  });

  return { asset, warnings };
}

async function main() {
  const args = parseArgs();
  const source = args.json
    ? args.json
    : args.file
      ? await fs.readFile(args.file, 'utf8')
      : null;
  if (!source) throw new Error('pass --json <array> or --file <path>');

  const drafts = JSON.parse(source);
  if (!Array.isArray(drafts)) throw new Error('expected a JSON array of assets');

  const catalogue = (await categories()).categories;
  const existing = await readRegistry();
  const taken = new Set(existing.assets.map((a) => a.id));

  const accepted = [];
  const skipped = [];
  const warnings = [];

  for (const draft of drafts) {
    const name = String(draft.name ?? '').trim();

    // Semantic dedupe against the registry AND against this same batch.
    const pool = [...existing.assets, ...accepted];
    const clash = pool.find((a) => similarity(a.name, name) >= 0.8);
    if (clash) {
      skipped.push({ name, reason: `near-duplicate of existing asset "${clash.name}" (${clash.id})` });
      continue;
    }

    try {
      const { asset, warnings: w } = await normalize(draft, taken, catalogue);
      taken.add(asset.id);
      accepted.push(asset);
      warnings.push(...w);
    } catch (err) {
      skipped.push({ name: name || '<unnamed>', reason: err.message });
    }
  }

  for (const w of warnings) log(`warning: ${w}`);
  for (const s of skipped) log(`skipped ${s.name}: ${s.reason}`);

  if (args['dry-run']) {
    return ok({
      dryRun: true,
      created: accepted.map((a) => a.id),
      skipped,
      warnings,
    });
  }

  if (accepted.length) {
    await updateRegistry((registry) => {
      registry.assets.push(...accepted);
      return registry;
    });
  }

  log(`added ${accepted.length} asset(s), skipped ${skipped.length}`);
  return ok({
    created: accepted.map((a) => a.id),
    skipped,
    warnings,
    total: existing.assets.length + accepted.length,
  });
}

main().catch(fail);
