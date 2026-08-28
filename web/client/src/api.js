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
