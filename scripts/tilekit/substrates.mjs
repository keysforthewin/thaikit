#!/usr/bin/env node
/**
 * Fetch and cache the seamless PBR substrates the ground tiles are composed from.
 *
 * Three materials carry the whole set -- asphalt, sidewalk concrete and alley
 * concrete -- and they are generated ONCE rather than per tile. That is not only
 * a cost decision: two tiles that meet at a seam have to agree about the surface
 * on both sides of it, and the cheapest way to guarantee that is for both to be
 * filled from the same pixels.
 *
 * The generator is fal-ai/patina/material, which returns genuinely tiling maps.
 * It gives basecolor, normal, roughness, height and metalness; it does NOT give
 * ambient occlusion, so the compositor derives that from height. The prompts
 * deliberately exclude markings, kerbs and objects -- everything that makes a
 * tile that particular tile is composited afterwards, in metres, because a
 * diffusion model cannot be made to put a lane line in exactly the right place
 * on two tiles at once.
 *
 * The maps are the model's OWN request ids, cached under scratch/_substrates/,
 * so a re-run costs nothing and a rebuild is reproducible.
 *
 * Usage:
 *   node scripts/tilekit/substrates.mjs --manifest scratch/_substrates/manifest.json
 */
import fs from 'node:fs/promises';
import path from 'node:path';

import { REPO_ROOT, toRepoRelative } from '@thaikit/registry-core';

import { ok, fail, log, parseArgs } from '../lib/out.mjs';

export const SUBSTRATE_DIR = path.join(REPO_ROOT, 'scratch/_substrates');

/** Roles the compositor needs. patina supplies four; ao is derived from height. */
export const ROLES = ['basecolor', 'normal', 'roughness', 'height'];

export const SUBSTRATES = {
  asphalt: { seed: 70001 },
  sidewalk: { seed: 70002 },
  alley: { seed: 70003 },
};

/** Where a substrate's map lives once downloaded. */
export function substratePath(name, role) {
  return path.join(SUBSTRATE_DIR, name, `${role}.png`);
}

async function exists(p) {
  try { await fs.access(p); return true; } catch { return false; }
}

/**
 * Download a map, skipping one already on disk. Every substrate is content that
 * a later tile composite depends on byte for byte, so re-fetching a cached one
 * would quietly change every tile built after it.
 */
export async function fetchMap(url, dest) {
  if (await exists(dest)) return { dest, cached: true };
  const res = await fetch(url);
  if (!res.ok) throw new Error(`fetch ${url}: ${res.status} ${res.statusText}`);
  await fs.mkdir(path.dirname(dest), { recursive: true });
  await fs.writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return { dest, cached: false };
}

/**
 * Record the URLs a fal run returned. The fal call itself is made by the skill,
 * not scripted here -- thaikit has no scripted generation path, deliberately --
 * so this takes the manifest the caller wrote and materialises it.
 */
async function main() {
  const args = parseArgs();
  const manifestPath = args.manifest ?? path.join(SUBSTRATE_DIR, 'manifest.json');
  if (!(await exists(manifestPath))) {
    return fail(
      `no manifest at ${manifestPath}. It maps substrate -> role -> URL, ` +
        'and is written from the fal responses.',
    );
  }
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));

  const got = [];
  for (const [name, roles] of Object.entries(manifest)) {
    for (const role of ROLES) {
      const url = roles[role];
      if (!url) return fail(`${name} has no ${role} map in the manifest`);
      const { dest, cached } = await fetchMap(url, substratePath(name, role));
      got.push({ name, role, file: toRepoRelative(dest), cached });
      log(`${cached ? 'cached' : 'pulled'}: ${name}/${role}`);
    }
  }
  ok({ substrates: Object.keys(manifest), maps: got.length, got });
}

if (import.meta.url === `file://${process.argv[1]}`) main().catch((err) => fail(err));
