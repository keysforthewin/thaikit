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

/** Pick the size class from the prop's longest declared dimension. */
export async function classifyBySize(longestDimMeters) {
  const { classes } = await budgets();
  for (const [name, spec] of Object.entries(classes)) {
    const [min, max] = spec.longestDimMeters;
    if (longestDimMeters >= min && longestDimMeters < max) return name;
  }
  return 'hero';
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
