import fs from 'node:fs/promises';
import path from 'node:path';
import { PROMPTS_DIR } from '@thaikit/registry-core';

const cache = new Map();

async function load(name) {
  if (!cache.has(name)) {
    const raw = await fs.readFile(path.join(PROMPTS_DIR, name), 'utf8');
    cache.set(name, JSON.parse(raw));
  }
  return cache.get(name);
}

export const budgets = () => load('budgets.json');
export const categories = () => load('categories.json');
export const styleProfiles = () => load('style-profiles.json');

/** Resolve the budget block for an asset's size class. */
export async function budgetFor(budgetClass) {
  const { classes } = await budgets();
  const budget = classes[budgetClass];
  if (!budget) {
    throw new Error(
      `unknown budgetClass "${budgetClass}"; expected one of ${Object.keys(classes).join(', ')}`,
    );
  }
  return budget;
}

/**
 * The four budget axes, in the order everything reports them.
 *
 * Each is a distinct cost: triangles are rasterisation, draw calls are CPU
 * submissions per frame, materials are shader and render-state switches, and
 * unique geometries are VRAM plus upload. `measured` names the field the built
 * scene reports the same quantity under, so a budget and its verdict never
 * drift apart in two hand-written lists.
 */
export const BUDGET_AXES = [
  { key: 'targetTriangles', measured: 'triangles', label: 'triangles' },
  { key: 'maxDrawCalls', measured: 'drawCalls', label: 'draw calls' },
  { key: 'maxMaterials', measured: 'materials', label: 'materials' },
  { key: 'maxUniqueGeometries', measured: 'uniqueGeometries', label: 'unique geometries' },
];

/**
 * An asset's effective budget: its own overrides over its class's numbers.
 *
 * One function rather than four `asset.x ?? classBudget.x` expressions scattered
 * across the skills, the server and the render pass -- that pattern is how
 * `targetTriangles` ended up honoured in two places and quietly ignored in a
 * third.
 */
export async function resolveBudget(asset) {
  const base = await budgetFor(asset.budgetClass);
  const resolved = {};
  for (const { key } of BUDGET_AXES) {
    resolved[key] = asset[key] ?? base[key] ?? null;
  }
  return resolved;
}

/** Pick the size class from the prop's longest declared dimension. */
export async function classifyBySize(longestDimMeters) {
  const { classes } = await budgets();
  for (const [name, spec] of Object.entries(classes)) {
    // `classes` carries a $comment alongside the real classes; it has no range,
    // and destructuring one off a string throws. Only reachable once a size
    // falls past every class, which the new hero8x ceiling makes possible.
    if (name.startsWith('$')) continue;
    const [min, max] = spec.longestDimMeters;
    if (longestDimMeters >= min && longestDimMeters < max) return name;
  }
  // Past every range. hero8x is the top class, so it is what a prop bigger than
  // the largest band gets -- not hero, which is now a mid band.
  return 'hero8x';
}

/**
 * Compose the full image prompt from the profile scaffold plus the asset's
 * object description. Skills author the description only -- never the scaffold.
 */
export async function composeImagePrompt(asset) {
  const { profiles } = await styleProfiles();
  const profile = profiles[asset.prompts.styleProfileId];
  if (!profile) throw new Error(`unknown style profile: ${asset.prompts.styleProfileId}`);

  const materialNotes = asset.prompts.texture
    ? `Materials: ${asset.prompts.texture}.`
    : '';

  return profile.image
    .replaceAll('{{description}}', asset.prompts.image)
    .replaceAll('{{materialNotes}}', materialNotes);
}

/** Meshy texture_prompt: the asset's material notes plus the profile's suffix. */
export async function composeTexturePrompt(asset) {
  const { profiles } = await styleProfiles();
  const profile = profiles[asset.prompts.styleProfileId];
  return [asset.prompts.texture, profile?.textureSuffix].filter(Boolean).join(' ');
}
