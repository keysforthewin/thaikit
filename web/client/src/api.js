/**
 * Thin API client. Captures ETags so PATCH can be optimistic and conflict-safe.
 *
 * ETags are stored per key, not one global one: an asset's ETag now covers just
 * that asset, so a generation skill writing a different prop no longer wedges an
 * open editor.
 */
const etags = new Map();

async function request(path, options = {}, etagKey = 'registry') {
  const res = await fetch(path, {
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
  list: (params = {}) => {
    const q = new URLSearchParams(
      Object.entries(params).filter(([, v]) => v !== '' && v != null),
    );
    return request(`/api/assets?${q}`);
  },
  get: (id) => request(`/api/assets/${id}`, {}, `asset:${id}`),
  create: (body) => request('/api/assets', { method: 'POST', body: JSON.stringify(body) }),
  update: (id, patch) =>
    request(
      `/api/assets/${id}`,
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
    request(`/api/assets/${id}?purgeFiles=${purgeFiles}`, { method: 'DELETE' }),
  bulk: (assets, mode = 'merge') =>
    request('/api/assets/bulk', { method: 'POST', body: JSON.stringify({ mode, assets }) }),

  /**
   * The physics compound, which lives in a file beside the module rather than in
   * the registry -- so it gets its own ETag key. A prop that was never derived
   * answers 404, which is a state the drawer shows rather than an error.
   */
  colliders: (id) => request(`/api/assets/${id}/colliders`, {}, `colliders:${id}`),
  saveColliders: (id, doc) =>
    request(
      `/api/assets/${id}/colliders`,
      {
        method: 'PUT',
        headers: etags.has(`colliders:${id}`)
          ? { 'If-Match': etags.get(`colliders:${id}`) }
          : {},
        body: JSON.stringify(doc),
      },
      `colliders:${id}`,
    ),
};

/**
 * Repo-relative registry paths map onto the server's static mounts: shipped
 * files under assets/ are served at /media, in-flight attempt artefacts under
 * scratch/ at /scratch. Anything else keeps the original assets-relative
 * behaviour.
 */
export function mediaUrl(repoPath) {
  if (!repoPath) return null;
  const p = String(repoPath).replace(/^\.?\//, '');
  if (p.startsWith('scratch/')) return '/scratch/' + p.slice('scratch/'.length);
  return '/media/' + p.replace(/^assets\//, '');
}

/**
 * Levels are GLBs, so their calls speak bytes rather than JSON. The ETag is the
 * same optimistic lock the colliders use: a save that has not seen the current
 * bytes is refused with a 409, never merged.
 */
async function bytesRequest(path, options = {}, etagKey) {
  const res = await fetch(path, options);
  const etag = res.headers.get('ETag');
  if (etag && res.ok && etagKey) etags.set(etagKey, etag);
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.error || `${res.status} ${res.statusText}`);
    err.status = res.status;
    err.etag = body.etag;
    err.issues = body.issues;
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
  add: (source) => request('/api/packs', { method: 'POST', body: JSON.stringify({ source }) }, null),
  refresh: (id) => request(`/api/packs/${encodeURIComponent(id)}/refresh`, { method: 'POST' }, null),
  previews: (id) => request(`/api/packs/${encodeURIComponent(id)}/previews`, { method: 'POST' }, null),
  remove: (id) => request(`/api/packs/${encodeURIComponent(id)}`, { method: 'DELETE' }, null),
  job: (id) => request(`/api/packs/jobs/${id}`, {}, null),
};

levelsApi.bake = async (id, glbBytes, { baker = 'blender' } = {}) => {
  const res = await bytesRequest(`/api/levels/${id}/bake?baker=${encodeURIComponent(baker)}`, {
    method: 'POST',
    headers: { 'content-type': 'model/gltf-binary' },
    body: glbBytes,
  }, null);
  return res.json();
};
levelsApi.build = (id) => request(`/api/levels/${id}/build`, {}, null);

export const ktx2Api = {
  status: (id) => request(`/api/assets/${id}/ktx2-status`, {}, null),
  compress: (id) => request(`/api/assets/${id}/compress-maps`, { method: 'POST' }, null),
};
