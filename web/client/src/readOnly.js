import { useEffect, useState } from 'react';
import { api } from './api.js';

/**
 * Whether this instance accepts writes. The server decides (THAIKIT_READ_ONLY,
 * or a registry it cannot write) and /api/health carries the answer; every
 * component that renders a save, delete, upload or bake control asks here and
 * hides it. Fetched once per page, shared by every caller -- the answer does not
 * change while a tab is open.
 */
let cached = null;
let inflight = null;

export function fetchReadOnly() {
  if (cached) return Promise.resolve(cached);
  if (!inflight) {
    inflight = api
      .health()
      .then((h) => (cached = { readOnly: Boolean(h.readOnly), reason: h.readOnlyReason ?? null, known: true }))
      .catch(() => (cached = { readOnly: false, reason: null, known: true }));
  }
  return inflight;
}

export function useReadOnly() {
  const [state, setState] = useState(cached ?? { readOnly: false, reason: null, known: false });
  useEffect(() => {
    let live = true;
    fetchReadOnly().then((v) => { if (live) setState(v); });
    return () => { live = false; };
  }, []);
  return state;
}
