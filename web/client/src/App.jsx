import { useCallback, useEffect, useState } from 'react';
import { api, mediaUrl } from './api.js';
import { Drawer } from './Drawer.jsx';
import { CreateDialog } from './CreateDialog.jsx';
import { budgetRows, describeClassBriefly, useBudgetClasses } from './budgets.js';

const PRESETS = [
  { key: 'all', label: 'All', params: {} },
  { key: 'needs-images', label: 'Needs images', params: { imageStatus: 'pending' } },
  { key: 'needs-model', label: 'Needs model', params: { modelStatus: 'pending' } },
  { key: 'needs-review', label: 'Needs review (<70)', params: { maxScore: 69 } },
  { key: 'ready', label: 'Ready', params: { modelStatus: 'done' } },
];

function scoreClass(score) {
  if (score == null) return '';
  if (score >= 85) return 'score-good';
  if (score >= 70) return 'score-mid';
  return 'score-bad';
}

function Card({ asset, budgetClasses, onOpen }) {
  const model = asset.model ?? {};
  // The rendered model, then the reference plate it was built from.
  const thumb = mediaUrl(model.thumb) ?? mediaUrl(asset.image?.file);
  // A thumbnail with no built module beside it is a picture of the retired GLB
  // the v2 migration carried over. Say so rather than implying a finished prop.
  const stale = Boolean(model.thumb) && !model.file;
  const score = model.review?.score;
  const modelStatus = model.quarantine ? 'quarantined' : model.status ?? 'pending';
  const overBudget = budgetClasses ? budgetRows(asset, budgetClasses).filter((r) => r.over) : [];
  return (
    <div className="card" onClick={() => onOpen(asset.id)}>
      <div className="thumb">
        {thumb ? (
          <img src={thumb} alt={asset.name} loading="lazy" />
        ) : (
          // The pending state is what a fresh kit is full of, so it gets a real
          // tile rather than a broken image.
          <span>
            awaiting generation
            <br />
            {/* The class name alone said nothing about what it BUYS. */}
            <span className="mono" style={{ fontSize: 11 }}>
              {describeClassBriefly(asset.budgetClass, budgetClasses?.[asset.budgetClass])}
            </span>
          </span>
        )}
      </div>
      <div className="body">
        <div className="name">{asset.name}</div>
        <div className="muted" style={{ fontSize: 12 }}>
          {asset.category} · {asset.scale.declared.h} m
        </div>
        <div className="badges">
          <span className={`badge ${asset.status.image}`}>img {asset.status.image}</span>
          <span className={`badge ${modelStatus}`}>model {modelStatus}</span>
          {stale && (
            <span className="badge" title="a render of the retired GLB; this prop needs rebuilding">
              stale thumb
            </span>
          )}
          {score != null && <span className={`badge ${scoreClass(score)}`}>{score}</span>}
          {model.triangles ? (
            <span className="badge mono">{(model.triangles / 1000).toFixed(1)}k</span>
          ) : null}
          {/*
            Scanning the grid should show which props cost too much, and the
            triangle count alone never did: a prop at a third of its triangle
            budget can still be seven draw calls and three materials.
          */}
          {overBudget.length > 0 && (
            <span
              className="badge score-bad"
              title={overBudget
                .map((a) => `${a.measured} ${a.label} / ${a.limit}`)
                .join('\n')}
            >
              over budget ×{overBudget.length}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [assets, setAssets] = useState([]);
  const [health, setHealth] = useState(null);
  const [preset, setPreset] = useState('all');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(null);
  const [creating, setCreating] = useState(false);
  // Bumped on every registry change. An open Drawer re-reads its asset when it
  // moves, and the viewer keys its module URL off the asset's updatedAt --
  // together that is what makes a new build appear without a reload.
  const [rev, setRev] = useState(0);
  const [error, setError] = useState(null);
  const budgetClasses = useBudgetClasses();

  const load = useCallback(async () => {
    try {
      const params = { ...PRESETS.find((p) => p.key === preset).params, q, sort: 'name' };
      const { items } = await api.list(params);
      setAssets(items);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }, [preset, q]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { api.health().then(setHealth).catch(() => {}); }, []);

  // Live updates: the generation skills write the same registry from the host,
  // so an open tab must reflect their work without a manual refresh.
  useEffect(() => {
    const source = new EventSource('/api/events');
    source.addEventListener('registry', () => {
      load();
      // `rev` is what an open Drawer watches. The list refreshing behind a drawer
      // was never the problem -- the drawer itself going stale was.
      setRev((n) => n + 1);
      api.health().then(setHealth).catch(() => {});
    });
    // Belt and braces, in case SSE dies silently or polling is disabled.
    const poll = setInterval(() => {
      api.health().then((h) => {
        setHealth((prev) => {
          if (prev && h.etag !== prev.etag) {
            load();
            setRev((n) => n + 1);
          }
          return h;
        });
      }).catch(() => {});
    }, 15000);
    return () => { source.close(); clearInterval(poll); };
  }, [load]);

  return (
    <div className="app">
      <div className="topbar">
        <span className="brand">thaikit</span>
        <span className="muted">{health?.assetCount ?? assets.length} assets</span>
        <span className="grow" />
        <input placeholder="search…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 240 }} />
        <button className="primary" onClick={() => setCreating(true)}>+ add asset</button>
      </div>

      {health?.readOnly && (
        <div className="banner">
          <strong>Read-only.</strong> {health.readOnlyReason}
        </div>
      )}
      {error && <div className="banner">{error}</div>}

      <div className="filters">
        {PRESETS.map((p) => (
          <span key={p.key} className={`chip ${preset === p.key ? 'on' : ''}`} onClick={() => setPreset(p.key)}>
            {p.label}
          </span>
        ))}
      </div>

      {assets.length === 0 ? (
        <div className="empty">
          <h2>No assets yet</h2>
          <p>
            Add one by hand, or ask Claude to run the <span className="mono">thaikit-asset-list</span>{' '}
            skill with a theme — <em>“props you’d find on a Thai street”</em>.
          </p>
          <p className="muted">
            Meshes are generated by the host-side skills, not from this page.
            This is where you browse, edit and curate the registry.
          </p>
          <button className="primary" onClick={() => setCreating(true)}>+ add your first asset</button>
        </div>
      ) : (
        <div className="grid">
          {assets.map((a) => (
            <Card key={a.id} asset={a} budgetClasses={budgetClasses} onOpen={setOpen} />
          ))}
        </div>
      )}

      {open && <Drawer id={open} rev={rev} onClose={() => setOpen(null)} onChanged={load} />}
      {creating && (
        <CreateDialog
          onClose={() => setCreating(false)}
          onCreated={(id) => { setCreating(false); load(); setOpen(id); }}
        />
      )}
    </div>
  );
}
