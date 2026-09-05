import { useCallback, useEffect, useState } from 'react';
import { api } from './api.js';
import { Drawer } from './Drawer.jsx';
import { CreateDialog } from './CreateDialog.jsx';
import { PackManagerModal } from './level/PackManagerModal.jsx';
import { packsApi } from './api.js';
import { FacetDialog } from './FacetDialog.jsx';
import { budgetRows, useBudgetClasses } from './budgets.js';
import { url } from './base.js';

/**
 * The status presets only mean something for props that HAVE a pipeline state
 * -- thaikit's own, whose record is beside their source. A foreign pack item
 * has no image stage and no review, so those chips narrow to editable items.
 */
const PRESETS = [
  { key: 'all', label: 'All', params: {} },
  { key: 'needs-images', label: 'Needs images', params: { imageStatus: 'pending', editable: '1' } },
  { key: 'needs-model', label: 'Needs model', params: { modelStatus: 'pending', editable: '1' } },
  // The threshold is typed into the chip itself (`reviewBelow`), so one chip covers both
  // "what FAILED" (<70, the pass mark) and "what passed without being finished" (<90):
  // a 0.85 made of a strong silhouette and a weak material surface still has work in it.
  { key: 'needs-review', label: 'Needs review', params: { editable: '1' } },
  { key: 'ready', label: 'Ready', params: { supported: '1' } },
];
const DEFAULT_REVIEW_BELOW = 90;

function scoreClass(score) {
  if (score == null) return '';
  if (score >= 85) return 'score-good';
  if (score >= 70) return 'score-mid';
  return 'score-bad';
}

function Card({ item, budgetClasses, onOpen }) {
  // The installer's render of what actually builds, then the reference plate.
  const thumb = item.thumb ?? item.image;
  const score = item.review?.score;
  const status = item.status;
  const overBudget = budgetClasses && item.budgetClass ? budgetRows(item, budgetClasses).filter((r) => r.over) : [];
  return (
    <div className={`card ${item.supported ? '' : 'unsupported'}`} onClick={() => onOpen(item.ref)}>
      <div className="thumb">
        {thumb ? (
          <img src={thumb} alt={item.title} loading="lazy" />
        ) : (
          // The pending state is what a fresh kit is full of, so it gets a real
          // tile rather than a broken image.
          <span>
            awaiting generation
            <br />
            <span className="mono" style={{ fontSize: 11 }}>{item.budgetClass ?? ''}</span>
          </span>
        )}
      </div>
      <div className="body">
        <div className="name">{item.title}</div>
        <div className="muted" style={{ fontSize: 12 }}>
          {item.pack} · {item.category}
          {item.size?.h != null ? ` · ${Number(item.size.h).toFixed(2)} m` : ''}
        </div>
        <div className="badges">
          {status && <span className={`badge ${status.image}`}>img {status.image}</span>}
          {status && <span className={`badge ${status.model}`}>model {status.model}</span>}
          {score != null && <span className={`badge ${scoreClass(score)}`}>{score}</span>}
          {item.stats?.triangles ? (
            <span className="badge mono">{(item.stats.triangles / 1000).toFixed(1)}k</span>
          ) : null}
          {item.physics?.enabled && <span className="badge">physics</span>}
          {item.collidersSource === 'hand-tuned' && <span className="badge" title="collider compound placed by hand">hand-tuned</span>}
          {item.override && <span className="badge" title="a local override changes what this pack says">override</span>}
          {item.unbuilt ? (
            <span className="badge" title={item.error ?? 'no model built yet'}>no model</span>
          ) : (
            !item.supported && <span className="badge score-bad" title={item.error ?? 'did not build'}>unsupported</span>
          )}
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
  const [items, setItems] = useState([]);
  const [health, setHealth] = useState(null);
  const [preset, setPreset] = useState('all');
  // The number in the "Needs review (<N)" chip, kept as typed so a half-edited
  // field does not snap back; an empty or non-numeric value simply filters nothing.
  const [reviewBelow, setReviewBelow] = useState(String(DEFAULT_REVIEW_BELOW));
  const [pack, setPack] = useState('');
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(null);
  const [creating, setCreating] = useState(false);
  // The facet selection. Categories and tags are OR'ed with each other on the
  // server; `q` is AND'ed on top, so text narrows whatever the facets gathered.
  const [pickedCategories, setPickedCategories] = useState([]);
  const [pickedTags, setPickedTags] = useState([]);
  const [facet, setFacet] = useState(null);
  // What /api/meta knows: every pack, category and tag in the catalogue, with counts.
  const [meta, setMeta] = useState(null);
  // The size of the CURRENT result, which is not `items.length` once paging
  // exists and is not `meta.total` ever -- that is the whole catalogue.
  const [total, setTotal] = useState(0);
  // Bumped on every catalogue change. An open Drawer re-reads its item when it
  // moves, and the viewer keys its module URL off the item's version --
  // together that is what makes a new build appear without a reload.
  const [rev, setRev] = useState(0);
  // The pack manager wants every pack and item, not the filtered page.
  const [packsOpen, setPacksOpen] = useState(false);
  const [packData, setPackData] = useState(null);
  useEffect(() => {
    if (!packsOpen) return;
    packsApi.items().then((r) => setPackData({ packs: r.packs, items: r.items })).catch(() => setPackData({ packs: [], items: [] }));
  }, [packsOpen, rev]);
  const [error, setError] = useState(null);
  const budgetClasses = useBudgetClasses();

  const load = useCallback(async () => {
    try {
      const params = {
        ...PRESETS.find((p) => p.key === preset).params,
        // "<N" is the server's inclusive maxScore at N-1.
        ...(preset === 'needs-review' && Number.isFinite(Number.parseInt(reviewBelow, 10))
          ? { maxScore: Number.parseInt(reviewBelow, 10) - 1 }
          : {}),
        q,
        pack,
        categories: pickedCategories.join(','),
        tags: pickedTags.join(','),
        sort: 'title',
      };
      const { items: list, total: n } = await api.list(params);
      setItems(list);
      setTotal(n ?? list.length);
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  }, [preset, reviewBelow, pack, q, pickedCategories, pickedTags]);

  useEffect(() => { load(); }, [load]);
  useEffect(() => { api.health().then(setHealth).catch(() => {}); }, []);
  // The facet lists follow the catalogue, so they are re-read on every change
  // the SSE stream reports -- a prop given a new tag must be pickable by it at once.
  useEffect(() => { api.meta().then(setMeta).catch(() => {}); }, [rev]);

  // Live updates: the generation skills write the tree from the host and the
  // installer rewrites the pack index, so an open tab must reflect their work
  // without a manual refresh.
  useEffect(() => {
    const source = new EventSource(url('/api/events'));
    const bump = () => {
      load();
      // `rev` is what an open Drawer watches. The list refreshing behind a drawer
      // was never the problem -- the drawer itself going stale was.
      setRev((n) => n + 1);
      api.health().then(setHealth).catch(() => {});
    };
    source.addEventListener('registry', bump);
    source.addEventListener('catalogue', bump);
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

  const packChips = Object.entries(meta?.packs ?? {}).sort(([a], [b]) => a.localeCompare(b));

  return (
    <div className="app">
      <div className="topbar">
        <span className="brand">thaikit</span>
        <span className="muted">{meta?.total ?? items.length} items · {health?.assetCount ?? '?'} thai-kit props</span>
        <span className="grow" />
        <input placeholder="search…" value={q} onChange={(e) => setQ(e.target.value)} style={{ width: 240 }} />
        <a href={url('/level')}><button title="build a level from these props">level editor</button></a>
        <a className="repo-link" href="https://github.com/keysforthewin/thaikit" target="_blank" rel="noopener noreferrer" title="thaikit on GitHub">GitHub ↗</a>
        <button onClick={() => setPacksOpen(true)} title="install, refresh or remove vibe3d asset packs">
          packs{meta?.packs ? ` (${Object.keys(meta.packs).length})` : ''}
        </button>
        {!health?.readOnly && <button className="primary" onClick={() => setCreating(true)}>+ add asset</button>}
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
            {p.key === 'needs-review' && (
              <>
                {' (<'}
                <input
                  className="chip-input"
                  type="number"
                  min="0"
                  max="100"
                  value={reviewBelow}
                  title="props whose review score is below this; type a new number to move the bar"
                  onClick={(e) => { e.stopPropagation(); setPreset('needs-review'); }}
                  onFocus={() => setPreset('needs-review')}
                  onChange={(e) => setReviewBelow(e.target.value)}
                  onBlur={() => { if (!Number.isFinite(Number.parseInt(reviewBelow, 10))) setReviewBelow(String(DEFAULT_REVIEW_BELOW)); }}
                />
                {')'}
              </>
            )}
          </span>
        ))}
        {/* One chip per installed pack, but only once there is a choice to make:
            with thaikit's own kit alone the row would be one chip that filters nothing. */}
        {packChips.length > 1 && (
          <>
            <span className="sep" />
            <span className={`chip ${!pack ? 'on' : ''}`} onClick={() => setPack('')}>all packs</span>
            {packChips.map(([id, n]) => (
              <span key={id} className={`chip ${pack === id ? 'on' : ''}`} onClick={() => setPack(pack === id ? '' : id)}>
                {id} <span className="muted">{n}</span>
              </span>
            ))}
          </>
        )}
        <span className="sep" />
        <button
          className={pickedCategories.length ? 'on' : ''}
          onClick={() => setFacet('categories')}
          title="pick any number of categories; they are OR'ed with the tags"
        >
          categories{pickedCategories.length ? ` (${pickedCategories.length})` : ''}
        </button>
        <button
          className={pickedTags.length ? 'on' : ''}
          onClick={() => setFacet('tags')}
          title="pick any number of tags; they are OR'ed with the categories"
        >
          tags{pickedTags.length ? ` (${pickedTags.length})` : ''}
        </button>
        {(pickedCategories.length > 0 || pickedTags.length > 0) && (
          <button
            onClick={() => { setPickedCategories([]); setPickedTags([]); }}
            title="drop every category and tag"
          >
            clear filters
          </button>
        )}
        <span className="grow" />
        {/* Always on, so a filter that matched nothing says so before you go
            looking for the grid that did not render. */}
        <span className="muted match-count">
          {total} {total === 1 ? 'match' : 'matches'}
        </span>
      </div>

      {/* The picked facets, spelled out. The buttons carry a count; only the
          chips say WHICH, and each one is its own undo. */}
      {(pickedCategories.length > 0 || pickedTags.length > 0) && (
        <div className="filters picked">
          {pickedCategories.map((c) => (
            <span
              key={`c:${c}`}
              className="chip on"
              onClick={() => setPickedCategories(pickedCategories.filter((x) => x !== c))}
              title="remove"
            >
              {c} ×
            </span>
          ))}
          {pickedTags.map((t) => (
            <span
              key={`t:${t}`}
              className="chip on"
              onClick={() => setPickedTags(pickedTags.filter((x) => x !== t))}
              title="remove"
            >
              #{t} ×
            </span>
          ))}
        </div>
      )}

      {/* The drawer is a flex SIBLING of the grid, not an overlay: opening it
          narrows the grid, which reflows to fewer columns, so every item stays
          reachable while a prop's properties are up. */}
      <div className="browse">
      {items.length === 0 && (q || pack || pickedCategories.length || pickedTags.length || preset !== 'all') ? (
        // A filter that matches nothing is not an empty kit, and telling someone
        // to run the asset-list skill when they have simply over-narrowed reads
        // as the page having lost their props.
        <div className="empty">
          <h2>No matches</h2>
          <p className="muted">
            Nothing here carries {pickedCategories.length + pickedTags.length > 0
              ? 'any of the selected categories or tags'
              : 'that text'}
            {q && (pickedCategories.length || pickedTags.length) ? ' and matches the search text' : ''}.
          </p>
          <button onClick={() => { setPickedCategories([]); setPickedTags([]); setQ(''); setPack(''); setPreset('all'); }}>
            clear the filters
          </button>
        </div>
      ) : items.length === 0 ? (
        <div className="empty">
          <h2>No items yet</h2>
          <p>
            Add a prop by hand, or ask Claude to run the <span className="mono">thaikit-asset-list</span>{' '}
            skill with a theme — <em>“props you’d find on a Thai street”</em>. Or install a vibe3d pack
            with the <strong>packs</strong> button above.
          </p>
          <p className="muted">
            Models are generated by the host-side skills, not from this page.
            This is where you browse, edit and curate the kit.
          </p>
          <button className="primary" onClick={() => setCreating(true)}>+ add your first asset</button>
        </div>
      ) : (
        <div className="grid">
          {items.map((it) => (
            <Card key={it.ref} item={it} budgetClasses={budgetClasses} onOpen={setOpen} />
          ))}
        </div>
      )}

      {open && <Drawer itemRef={open} rev={rev} onClose={() => setOpen(null)} onChanged={load} />}
      </div>
      {facet === 'categories' && (
        <FacetDialog
          title="Categories"
          counts={meta?.categories}
          selected={pickedCategories}
          onChange={setPickedCategories}
          onClose={() => setFacet(null)}
        />
      )}
      {facet === 'tags' && (
        <FacetDialog
          title="Tags"
          counts={meta?.tags}
          selected={pickedTags}
          onChange={setPickedTags}
          onClose={() => setFacet(null)}
        />
      )}
      {packsOpen && (
        <PackManagerModal
          packs={packData?.packs ?? []}
          items={packData?.items ?? []}
          onClose={() => setPacksOpen(false)}
          onChanged={() => { load(); setRev((n) => n + 1); }}
        />
      )}
      {creating && (
        <CreateDialog
          onClose={() => setCreating(false)}
          onCreated={(id) => { setCreating(false); load(); setOpen(`@thai-kit/${id}`); }}
        />
      )}
    </div>
  );
}
