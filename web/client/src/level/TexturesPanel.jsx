import { useState } from 'react';

import { useLevel } from './store.js';
import { ktx2Api } from '../api.js';
import { TexturesModalBody } from './StatsHud.jsx';

const kb = (n) => `${Math.round(n / 1024)} KB`;

/**
 * Every texture the level holds on the GPU, plus the assets in it that SHIP
 * images which are not yet KTX2 -- with the button that fixes that.
 */
export function TexturesPanel({ stats, onCompressed }) {
  const doc = useLevel((s) => s.doc);
  const byRef = useLevel((s) => s.catalogue.byRef);
  const [busy, setBusy] = useState(null);
  const [error, setError] = useState(null);

  const used = new Map();
  for (const p of doc?.placements ?? []) {
    const item = byRef[p.ref];
    if (item?.maps?.length) used.set(item.ref, item);
  }
  const shipping = [...used.values()].map((item) => ({
    item,
    missing: item.maps.filter((m) => !m.ktx2),
    bytes: item.maps.reduce((t, m) => t + (m.bytes ?? 0), 0),
  }));
  const notCompressed = shipping.filter((s) => s.missing.length);

  const compress = async (item) => {
    setBusy(item.ref);
    setError(null);
    try {
      const r = await ktx2Api.compress(item.name);
      if (!r.ok) throw new Error(r.error);
      await onCompressed?.();
    } catch (e) {
      setError(e.message);
    } finally {
      setBusy(null);
    }
  };

  return (
    <>
      <p className="muted" style={{ marginTop: 0 }}>
        Procedural props synthesise their textures at runtime and become KTX2 when the level is exported. Assets that SHIP image files (ground tiles, skyline imposters) warn below until a KTX2 sibling has been written next to each webp.
      </p>
      {error && <div className="banner">{error}</div>}
      {notCompressed.length > 0 ? (
        <table style={{ marginBottom: 14 }}>
          <thead><tr><th>asset shipping images</th><th>maps</th><th>not KTX2</th><th /></tr></thead>
          <tbody>
            {notCompressed.map(({ item, missing, bytes }) => (
              <tr key={item.ref}>
                <td>{item.title} <span className="mono muted small">{item.ref}</span></td>
                <td>{item.maps.length} · {kb(bytes)}</td>
                <td className="score-mid">{missing.map((m) => m.role).join(', ')}</td>
                <td><button disabled={busy != null} onClick={() => compress(item)}>{busy === item.ref ? 'compressing…' : 'compress to KTX2'}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : shipping.length > 0 ? (
        <p className="score-good">Every asset in this level that ships images has a current KTX2 sibling.</p>
      ) : null}
      <TexturesModalBody stats={stats} />
    </>
  );
}
