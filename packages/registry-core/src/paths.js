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

/**
 * Adopted third-party packs: one source tree per namespace, TRACKED in git,
 * laid out exactly like the props tree so every skill and script works on it
 * unchanged -- `adopted/@scifi-kit/models/crate/{createObjectModel.ts,model.ts,
 * thaikit.json,colliders.json,maps/}` plus a `pack.json` naming the upstream.
 * See docs/adopting-packs.md.
 */
export const ADOPTED_DIR =
  process.env.THAIKIT_ADOPTED_DIR || path.join(REPO_ROOT, 'adopted');

/** The namespace of thaikit's own kit, and of every bare (unqualified) id. */
export const OWN_NAMESPACE = '@thai-kit';

const NS_RE = /^@[a-z0-9][a-z0-9-]*$/;
const NAME_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/**
 * A prop id is either a bare slug (`oil-drum`, always `@thai-kit`) or a
 * qualified `@ns/name` (`@scifi-kit/crate`, an adopted item). Returns
 * `{ ns, name, own, ref }` where `ref` is always the two-segment vibe3d
 * address. Refuses anything else, so a path can never be smuggled in as an id.
 */
export function parseId(id) {
  if (typeof id !== 'string') throw new Error(`asset id must be a string, got ${typeof id}`);
  if (id.startsWith('@')) {
    const slash = id.indexOf('/');
    const ns = slash === -1 ? id : id.slice(0, slash);
    const name = slash === -1 ? '' : id.slice(slash + 1);
    if (!NS_RE.test(ns) || !NAME_RE.test(name)) throw new Error(`not a qualified asset id (@ns/name): ${id}`);
    return { ns, name, own: ns === OWN_NAMESPACE, ref: `${ns}/${name}` };
  }
  if (!NAME_RE.test(id)) throw new Error(`not an asset id (kebab-case slug or @ns/name): ${id}`);
  return { ns: OWN_NAMESPACE, name: id, own: true, ref: `${OWN_NAMESPACE}/${id}` };
}

/** The id a script should print or pass on: bare for thaikit's own, `@ns/name` otherwise. */
export function qualifiedId(ns, name) {
  return ns === OWN_NAMESPACE ? name : `${ns}/${name}`;
}

/** The source tree of an adopted pack: adopted/<ns>/. */
export function adoptedPackDir(ns) {
  if (!NS_RE.test(ns) || ns === OWN_NAMESPACE) throw new Error(`not an adoptable namespace: ${ns}`);
  return safeResolve(ADOPTED_DIR, ns);
}

/** The models root that holds a namespace's records. */
export function rootFor(ns) {
  return ns === OWN_NAMESPACE ? MODELS_DIR : path.join(adoptedPackDir(ns), 'models');
}

/** The namespace whose models root is `modelsDir`, or null when it is nobody's. */
export function namespaceOfRoot(modelsDir) {
  const resolved = path.resolve(modelsDir);
  if (resolved === path.resolve(MODELS_DIR)) return OWN_NAMESPACE;
  const rel = path.relative(path.resolve(ADOPTED_DIR), resolved).split(path.sep);
  if (rel.length === 2 && rel[1] === 'models' && NS_RE.test(rel[0])) return rel[0];
  return null;
}

/** `{ modelsDir }` for the store calls that act on one id's root. */
export function storeOptionsFor(id) {
  return { modelsDir: rootFor(parseId(id).ns) };
}

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

/**
 * Where a given asset's files live: packages/props/src/models/<id>/ for a bare
 * id, adopted/<ns>/models/<name>/ for a qualified one.
 */
export function modelDir(id) {
  const { ns, name } = parseId(id);
  return safeResolve(rootFor(ns), name);
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
  const { ns, name, own } = parseId(id);
  return safeResolve(SCRATCH_DIR, own ? name : path.join(ns, name));
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
