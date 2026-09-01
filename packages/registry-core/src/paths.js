/**
 * Path resolution and traversal guards.
 *
 * Every path stored in an asset record is repo-relative with POSIX separators, so
 * the same registry works on the host and inside the container (where the repo
 * is bind-mounted at a different absolute path).
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/** Repo root. Overridable so the container can point at its bind mount. */
export const REPO_ROOT =
  process.env.THAIKIT_REPO_ROOT || path.resolve(here, '../../..');

/**
 * The published prop kit, `@thai-kit/props`, and the source tree inside it.
 *
 * One directory per prop under `src/models/<id>/`, laid out the way vibe3d's
 * own kits are: the factory (`createObjectModel.ts`), its vibe3d entry
 * (`model.ts`), the images beside them, and `thaikit.json` -- the asset record
 * that used to be one row of `registry.json`. The tree IS the registry; the
 * vibe3d `dist/registry.json` is built from it and never read back.
 */
export const PROPS_PKG_DIR = path.join(REPO_ROOT, 'packages', 'props');

export const MODELS_DIR =
  process.env.THAIKIT_MODELS_DIR || path.join(PROPS_PKG_DIR, 'src', 'models');

export const SCRATCH_DIR =
  process.env.THAIKIT_SCRATCH_DIR || path.join(REPO_ROOT, 'scratch');

export const PROMPTS_DIR = path.join(REPO_ROOT, 'prompts');

/** Store paths repo-relative and POSIX-separated, whatever the host OS. */
export function toRepoRelative(absPath) {
  return path.relative(REPO_ROOT, absPath).split(path.sep).join('/');
}

export function fromRepoRelative(relPath) {
  return path.join(REPO_ROOT, relPath);
}

/**
 * Resolve `candidate` inside `root`, refusing anything that escapes it.
 * Used by the media route -- an unguarded static mount would serve /etc/passwd.
 */
export function safeResolve(root, candidate) {
  const resolvedRoot = path.resolve(root);
  const resolved = path.resolve(resolvedRoot, candidate);
  if (
    resolved !== resolvedRoot &&
    !resolved.startsWith(resolvedRoot + path.sep)
  ) {
    throw new Error(`path escapes root: ${candidate}`);
  }
  return resolved;
}

/** Where a given asset's files live: packages/props/src/models/<id>/. */
export function modelDir(id) {
  return safeResolve(MODELS_DIR, id);
}

/** The asset record itself. Never hand-edit: go through `updateAsset`. */
export function assetFile(id) {
  return path.join(modelDir(id), 'thaikit.json');
}

/** The derived (or hand-tuned) physics compound beside it. */
export function collidersFile(id) {
  return path.join(modelDir(id), 'colliders.json');
}

/**
 * Where a prop's in-flight artefacts live. Gitignored.
 *
 * This is also the working directory handed to img2threejs, which writes its
 * own `.img2threejs/state.json`, sculpt spec, renders and generated factory
 * here. That state file -- not the conversation -- is what a resumed build
 * reads, so it has to sit somewhere stable and per-prop.
 */
export function workDir(id) {
  return safeResolve(SCRATCH_DIR, id);
}

/** Level projects, one GLB per directory. Tracked in git. */
export const LEVELS_DIR = process.env.THAIKIT_LEVELS_DIR || path.join(REPO_ROOT, 'levels');

/** Downloaded asset packs and their bundles. Gitignored: a pack is re-downloadable. */
export const PACKS_DIR = process.env.THAIKIT_PACKS_DIR || path.join(REPO_ROOT, 'packs');

export function levelDir(id) {
  return safeResolve(LEVELS_DIR, id);
}

export function packDir(namespace, version) {
  // '@scifi-kit' is a directory name that starts with '@', which is fine on
  // every filesystem this runs on and keeps the on-disk layout readable.
  return safeResolve(PACKS_DIR, path.join(namespace, version));
}
