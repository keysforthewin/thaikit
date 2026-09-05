import { url } from './base.js';

/**
 * Thin API client. Captures ETags so PATCH can be optimistic and conflict-safe.
 *
 * ETags are stored per key, not one global one: an asset's ETag now covers just
 * that asset, so a generation skill writing a different prop no longer wedges an
 * open editor.
 */
const etags = new Map();

async function request(path, options = {}, etagKey = 'registry') {
  const res = await fetch(url(path), {
    ...options,
    headers: { 'content-type': 'application/json', ...(options.headers ?? {}) },
  });
  const etag = res.headers.get('ETag');
  if (etag && res.ok && etagKey) etags.set(etagKey, etag);

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.error || `${res.status} ${res.statusText}`);
    err.status = res.status;
    err.issues = body.issues;
    err.current = body.current;
    throw err;
  }
  return res.status === 204 ? null : res.json();
}

export const api = {
  health: () => request('/api/health'),
  meta: () => request('/api/meta'),
  /** The catalogue: every installed pack's items, records and overrides merged in. */
  list: (params = {}) => {
    const q = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v != null),
    );
    return request(`/api/items?${q}`, {}, 'items');
  },
  get: (id) => request(`/api/assets/${encodeURIComponent(id)}`, {}, `asset:${id}`),
  create: (body) => request('/api/assets', { method: 'POST', body: JSON.stringify(body) }),
  update: (id, patch) =>
    request(
      `/api/assets/${encodeURIComponent(id)}`,
      {
        method: 'PATCH',
        // If-Match turns a concurrent write to THIS asset from a silent clobber
        // into a 409. Writes to other assets no longer collide.
        headers: etags.has(`asset:${id}`) ? { 'If-Match': etags.get(`asset:${id}`) } : {},
        body: JSON.stringify(patch),
      },
      `asset:${id}`,
    ),
  remove: (id, purgeFiles = false) =>
    request(`/api/assets/${encodeURIComponent(id)}?purgeFiles=${purgeFiles}`, { method: 'DELETE' }),
  bulk: (assets, mode = 'merge') =>
    request('/api/assets/bulk', { method: 'POST', body: JSON.stringify({ mode, assets }) }),

  /** Thai-kit aliases of the ref-addressed collider routes below. */
  colliders: (id) => itemsApi.colliders(`@thai-kit/${id}`),
  saveColliders: (id, doc) => itemsApi.saveColliders(`@thai-kit/${id}`, doc),
};

const refPath = (ref) => ref.split('/').map(encodeURIComponent).join('/');

/**
 * Items by ref -- `@thai-kit/oil-drum`, `@scifi-kit/crate` -- which is how both
 * editors see a prop. A foreign item's editable half is its local override; the
 * physics compound lives beside the source (thai-kit) or in that override, and
 * either way gets its own ETag key. A prop nobody derived answers 404, which is
 * a state the drawer shows rather than an error.
 */
export const itemsApi = {
  get: (ref) => request(`/api/items/${refPath(ref)}`, {}, `item:${ref}`),
  override: (ref) => request(`/api/items/${refPath(ref)}/override`, {}, `override:${ref}`),
  saveOverride: (ref, doc) =>
    request(
      `/api/items/${refPath(ref)}/override`,
      {
        method: 'PUT',
        headers: etags.has(`override:${ref}`) ? { 'If-Match': etags.get(`override:${ref}`) } : {},
        body: JSON.stringify(doc),
      },
      `override:${ref}`,
    ),
  clearOverride: (ref) => {
    etags.delete(`override:${ref}`);
    return request(`/api/items/${refPath(ref)}/override`, { method: 'DELETE' }, null);
  },
  colliders: (ref) => request(`/api/items/${refPath(ref)}/colliders`, {}, `colliders:${ref}`),
  saveColliders: (ref, doc) =>
    request(
      `/api/items/${refPath(ref)}/colliders`,
      {
        method: 'PUT',
        headers: etags.has(`colliders:${ref}`) ? { 'If-Match': etags.get(`colliders:${ref}`) } : {},
        body: JSON.stringify(doc),
      },
      `colliders:${ref}`,
    ),
  refresh: (ref) => request(`/api/items/${refPath(ref)}/refresh`, { method: 'POST' }, null),
  /** Move an adopted item into another namespace (default @thai-kit); see docs/adopting-packs.md. */
  fork: (ref, { to = '@thai-kit' } = {}) => request(`/api/items/${refPath(ref)}/fork`, { method: 'POST', body: JSON.stringify({ to }) }, null),
};

/**
 * Repo-relative record paths map onto the server's static mounts: the source
 * tree under packages/props/src/models/ is served at /media, in-flight attempt
 * artefacts under scratch/ at /scratch, and an installed pack's files under
 * packs/ at /packs. An absolute URL passes through untouched.
 */
export function mediaUrl(repoPath) {
  if (!repoPath) return null;
  if (String(repoPath).startsWith('/')) return repoPath;
  const p = String(repoPath).replace(/^\.?\//, '');
  if (p.startsWith('scratch/')) return url('/scratch/' + p.slice('scratch/'.length));
  if (p.startsWith('packs/')) return url('/' + p);
  if (p.startsWith('adopted/')) return url('/' + p);
  return url('/media/' + p.replace(/^packages\/props\/src\/models\//, '').replace(/^assets\//, ''));
}

/**
 * Levels are GLBs, so their calls speak bytes rather than JSON. The ETag is the
 * same optimistic lock the colliders use: a save that has not seen the current
 * bytes is refused with a 409, never merged.
 */
async function bytesRequest(path, options = {}, etagKey) {
  const res = await fetch(url(path), options);
  const etag = res.headers.get('ETag');
  if (etag && res.ok && etagKey) etags.set(etagKey, etag);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.error || `${res.status} ${res.statusText}`);
    err.status = res.status;
    err.etag = body.etag;
    err.issues = body.issues;
    // The whole payload, for the callers that show more than the headline --
    // the cube-map zip import names the faces it could not find or read.
    err.body = body;
    throw err;
  }
  return res;
}

export const levelsApi = {
  list: () => request('/api/levels', {}, null),
  create: (name) => request('/api/levels', { method: 'POST', body: JSON.stringify({ name }) }, null),
  remove: (id) => request(`/api/levels/${id}`, { method: 'DELETE' }, null),
  /** The GLB bytes; the ETag is remembered for the next save. */
  load: async (id) => {
    const res = await bytesRequest(`/api/levels/${id}`, { cache: 'no-store' }, `level:${id}`);
    return res.arrayBuffer();
  },
  save: async (id, glbBytes) => {
    const res = await bytesRequest(
      `/api/levels/${id}`,
      {
        method: 'PUT',
        headers: {
          'content-type': 'model/gltf-binary',
          ...(etags.has(`level:${id}`) ? { 'If-Match': etags.get(`level:${id}`) } : {}),
        },
        body: glbBytes,
      },
      `level:${id}`,
    );
    return res.json();
  },
  etag: (id) => etags.get(`level:${id}`) ?? null,
  forgetEtag: (id) => etags.delete(`level:${id}`),
};

export const packsApi = {
  list: () => request('/api/packs', {}, null),
  items: (params = {}) => {
    const q = new URLSearchParams(Object.entries(params).filter(([, v]) => v !== '' && v != null));
    return request(`/api/packs/items?${q}`, {}, null);
  },
  add: (source, { adopt = true } = {}) => request('/api/packs', { method: 'POST', body: JSON.stringify({ source, adopt }) }, null),
  /** Re-download an adopted pack's upstream over its tree; `force` overwrites edited files. */
  upgrade: (id, { force = false } = {}) => request(`/api/packs/${encodeURIComponent(id)}/upgrade${force ? '?force=1' : ''}`, { method: 'POST' }, null),
  refresh: (id) => request(`/api/packs/${encodeURIComponent(id)}/refresh`, { method: 'POST' }, null),
  previews: (id) => request(`/api/packs/${encodeURIComponent(id)}/previews`, { method: 'POST' }, null),
  remove: (id, { keepSource = false } = {}) => request(`/api/packs/${encodeURIComponent(id)}${keepSource ? '?keepSource=1' : ''}`, { method: 'DELETE' }, null),
  job: (id) => request(`/api/packs/jobs/${id}`, {}, null),
};

/** `cell` (`<ix>_<iz>`) is the quick export: one cell baked as a level of its own. */
levelsApi.bake = async (id, glbBytes, { baker = 'blender', cpu = false, cell = null, signal } = {}) => {
  const res = await bytesRequest(`/api/levels/${id}/bake?baker=${encodeURIComponent(baker)}&cpu=${cpu ? 1 : 0}${cell ? `&cell=${encodeURIComponent(cell)}` : ''}`, {
    method: 'POST',
    headers: { 'content-type': 'model/gltf-binary' },
    body: glbBytes,
    signal,
  }, null);
  return res.json();
};
/** The running or last bake of a level with its log; null when none has run. */
levelsApi.bakeJob = (id) => request(`/api/levels/${id}/bake`, {}, null).catch((e) => { if (e.status === 404) return null; throw e; });
levelsApi.cancelBake = (id) => request(`/api/levels/${id}/bake`, { method: 'DELETE' }, null);
levelsApi.bakeAgent = () => request('/api/levels/bake-agent', {}, null);
levelsApi.build = (id) => request(`/api/levels/${id}/build`, {}, null);

/**
 * The sky's sidecar images. They are files, not part of the level document, so
 * they upload immediately rather than waiting for a save -- the setting only
 * ever records the filename the server chose.
 */
levelsApi.sky = {
  list: (id) => request(`/api/levels/${encodeURIComponent(id)}/sky`, {}, null),
  upload: async (id, slot, file) => {
    const res = await bytesRequest(
      `/api/levels/${encodeURIComponent(id)}/sky/${encodeURIComponent(slot)}`,
      { method: 'POST', headers: { 'content-type': file.type || 'application/octet-stream' }, body: file },
      null,
    );
    return res.json();
  },
  remove: (id, slot) => request(`/api/levels/${encodeURIComponent(id)}/sky/${encodeURIComponent(slot)}`, { method: 'DELETE' }, null),
  /** A zip of six `_right`/`_left`/`_up`/`_down`/`_front`/`_back` images: all six slots at once. */
  uploadCubeZip: async (id, file) => {
    const res = await bytesRequest(
      `/api/levels/${encodeURIComponent(id)}/sky/cube-zip`,
      { method: 'POST', headers: { 'content-type': 'application/zip' }, body: file },
      null,
    );
    return res.json();
  },
};

/**
 * The Unreal export. The zip is built in the browser; the server only unpacks
 * it into exports/unreal/ and reports what is there.
 */
export const unrealApi = {
  status: () => request('/api/exports/unreal', {}, null),
  upload: async (zipBlob) => {
    const res = await bytesRequest('/api/exports/unreal', {
      method: 'PUT',
      headers: { 'content-type': 'application/zip' },
      body: zipBlob,
    }, null);
    return res.json();
  },
};
