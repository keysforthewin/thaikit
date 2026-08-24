/**
 * Path resolution and traversal guards.
 *
 * Every path stored in the registry is repo-relative with POSIX separators, so
 * the same registry works on the host and inside the container (where the repo
 * is bind-mounted at a different absolute path).
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));

/** Repo root. Overridable so the container can point at its bind mount. */
export const REPO_ROOT =
  process.env.THAIKIT_REPO_ROOT || path.resolve(here, '../../..');

export const REGISTRY_PATH =
  process.env.THAIKIT_REGISTRY_PATH || path.join(REPO_ROOT, 'registry.json');

export const ASSETS_DIR =
  process.env.THAIKIT_ASSETS_DIR || path.join(REPO_ROOT, 'assets');

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

/** Where a given asset's files live. */
export function assetDir(id) {
  return safeResolve(ASSETS_DIR, id);
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
