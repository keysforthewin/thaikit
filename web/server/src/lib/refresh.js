/**
 * What a change on disk means for the catalogue.
 *
 * One rule, stated once. A change to the RECORD beside a prop (thaikit.json,
 * colliders.json, its images, its spec), to an override, or to packs/index.json
 * changes what the catalogue answers and nothing else: both editors are told
 * (`catalogue`, plus the legacy `registry` event the browse page listens to)
 * and re-read, and the client's prototype cache is untouched because the item's
 * `version` did not move. A change to the SOURCE -- the factory, its entry, a
 * map -- means the bundle is stale, so an editable pack gets a one-item refresh
 * job, debounced so a save that writes three files rebuilds once.
 */
import path from 'node:path';

import { MODELS_DIR, PACKS_DIR, ADOPTED_DIR, OWN_NAMESPACE, qualifiedId, namespaceOfRoot } from '@thaikit/registry-core';

import { OVERRIDES_DIR } from './overrides.js';
import { readPacksIndex } from './catalogue.js';
import { runPackJob } from './packs.js';

export const INDEX_FILE = path.join(PACKS_DIR, 'index.json');

const RECORD_FILES = new Set(['thaikit.json', 'colliders.json', 'preview.jpg', 'thumb.webp', 'object-sculpt-spec.json', 'imposter.png']);
const DEBOUNCE_MS = 1500;

/**
 * The models root a changed path sits in -- thaikit's own, or an adopted
 * pack's `adopted/<ns>/models` -- as `{ ns, modelsRoot }`, or null.
 */
function rootOfPath(p) {
  const own = path.resolve(MODELS_DIR);
  if (p.startsWith(own + path.sep)) return { ns: OWN_NAMESPACE, modelsRoot: own };
  const adoptedRoot = path.resolve(ADOPTED_DIR);
  if (!p.startsWith(adoptedRoot + path.sep)) return null;
  const [ns, models] = path.relative(adoptedRoot, p).split(path.sep);
  if (!ns?.startsWith('@') || models !== 'models') return null;
  const modelsRoot = path.join(adoptedRoot, ns, 'models');
  return namespaceOfRoot(modelsRoot) === ns ? { ns, modelsRoot } : null;
}

/**
 * `{ scope, id?, ref?, kind }` for a changed path, or null when it is nothing
 * the catalogue reads. `id` is QUALIFIED (`@scifi-kit/crate`) for an adopted
 * item and bare for thaikit's own, which is what every script accepts.
 */
export function classifyChange(changedPath) {
  if (typeof changedPath !== 'string') return null;
  const p = path.resolve(changedPath);
  if (p === path.resolve(INDEX_FILE)) return { scope: 'index', kind: 'index' };
  const root = rootOfPath(p);
  if (root) {
    const rel = path.relative(root.modelsRoot, p).split(path.sep);
    const [name, ...rest] = rel;
    if (!name || name.startsWith('.') || rest.length === 0) return null;
    const id = qualifiedId(root.ns, name);
    const file = rest.join('/');
    if (file === 'thaikit.json') return { scope: 'tree', id, kind: 'meta' };
    if (file === 'colliders.json') return { scope: 'tree', id, kind: 'colliders' };
    if (RECORD_FILES.has(file)) return { scope: 'tree', id, kind: 'image' };
    // An adopted pack's items import shared source (`../core/index.ts`), so any
    // text file under the item counts; thaikit's own only ever have .ts and maps.
    if (/\.(ts|tsx|js|mjs|json|glsl|frag|vert|wgsl)$/.test(file) || file.startsWith('maps/')) return { scope: 'tree', id, kind: 'source' };
    return null;
  }
  const overridesRoot = path.resolve(OVERRIDES_DIR);
  if (p.startsWith(overridesRoot + path.sep) && p.endsWith('.json')) {
    const rel = path.relative(overridesRoot, p).split(path.sep);
    if (rel.length === 2) return { scope: 'override', ref: `${rel[0]}/${rel[1].replace(/\.json$/, '')}`, kind: 'override' };
  }
  return null;
}

const pending = new Map();

/**
 * The editable pack whose tree holds `id` (bare for thaikit's own, `@ns/name`
 * for an adopted item), if one is installed: `{ pack, name, installed }`.
 */
async function editablePackFor(id) {
  const slash = id.startsWith('@') ? id.indexOf('/') : -1;
  const ns = slash === -1 ? OWN_NAMESPACE : id.slice(0, slash);
  const name = slash === -1 ? id : id.slice(slash + 1);
  const index = await readPacksIndex();
  for (const p of index.packs ?? []) {
    if (!p.tree || p.id !== ns) continue;
    const item = (p.items ?? []).find((it) => it.name === name && it.role !== 'support');
    return { pack: p, name, installed: Boolean(item) };
  }
  return null;
}

/**
 * React to an edit. `kind` is one of meta | colliders | image | override |
 * index | source; `id` is the tree item (tree scope) and `ref` the item ref
 * where known.
 */
export async function afterTreeEdit(state, { id = null, ref = null, kind, path: changedPath = null }) {
  const broadcast = (event, data) => {
    for (const send of state.clients) send(event, data);
  };

  if (kind === 'source') {
    if (!id) return;
    clearTimeout(pending.get(id));
    pending.set(
      id,
      setTimeout(async () => {
        pending.delete(id);
        try {
          const found = await editablePackFor(id);
          if (!found) return;
          runPackJob(state, { refreshItem: `${found.pack.id}/${found.name}`, add: !found.installed });
        } catch (err) {
          broadcast('error', { message: err.message });
        }
      }, DEBOUNCE_MS),
    );
    return;
  }

  let itemRef = ref;
  if (!itemRef && id) {
    const found = await editablePackFor(id).catch(() => null);
    if (found) itemRef = `${found.pack.id}/${found.name}`;
  }
  broadcast('catalogue', { ref: itemRef, kind, path: changedPath });
  broadcast('registry', { etag: state.lastEtag, event: kind, path: changedPath, ref: itemRef });
}
