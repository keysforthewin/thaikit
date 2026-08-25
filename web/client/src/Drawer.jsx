import { useEffect, useState } from 'react';
import { api, mediaUrl } from './api.js';
import { budgetRows, describeClass, useBudgetClasses } from './budgets.js';
import { Viewer } from './Viewer.jsx';

/**
 * img2threejs's locked pass order. A pass unlocks only once the one before it
 * was reviewed `continue`, so this doubles as a progress bar: how far down the
 * list a prop got is exactly how finished it is.
 */
const PASSES = [
  'blockout', 'structural-pass', 'form-refinement', 'material-pass',
  'lighting-pass', 'interaction-pass', 'optimization-pass',
];

const SUBJECTS = ['prop', 'animal', 'character'];

const scoreClass = (n) => (n >= 85 ? 'score-good' : n >= 70 ? 'score-mid' : 'score-bad');

function Field({ label, children }) {
  return (
    <div className="field">
      <label>{label}</label>
      {children}
    </div>
  );
}

/**
 * The one reference image the mesh was reconstructed from. Written by
 * thaikit-preview-image and read straight off the asset -- there is no separate
 * fetch any more, because there is nothing on disk the registry does not name.
 */
function PreviewImage({ image }) {
  if (!image) {
    return <p className="muted">No reference image yet. Run the preview-image skill.</p>;
  }
  return (
    <div>
      <div className="ref-head">
        <span className="muted">Reference image</span>
      </div>
      <figure className="ref">
        <img src={mediaUrl(image.file)} alt="reference" title={image.file} />
      </figure>
      <div className="muted ref-meta">
        {image.model && <span>{image.model}</span>}
        {image.seed != null && <span>seed {image.seed}</span>}
        <span>{image.w}x{image.h}</span>
        {image.uploadedUrl && (
          <a href={image.uploadedUrl} target="_blank" rel="noreferrer"
            title="the exact upload sent to the mesh generator">
            uploaded copy
          </a>
        )}
      </div>
    </div>
  );
}

export function Drawer({ id, rev, onClose, onChanged }) {
  const [asset, setAsset] = useState(null);
  const [tab, setTab] = useState('details');
  const [draft, setDraft] = useState({});
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const budgetClasses = useBudgetClasses();

  useEffect(() => {
    setError(null);
    api.get(id).then((a) => {
      setAsset(a);
      // Open on preview once there is a model to look at. A generated prop is
      // nearly always opened to SEE it, and burying the viewer one click behind
      // the details form means it goes unnoticed. A prop with no model yet is
      // opened to write its prompts, so that case keeps `details`.
      setTab(a.model?.file ? 'preview' : 'details');
      setDraft({
        name: a.name,
        nameTh: a.nameTh,
        description: a.description,
        category: a.category,
        tags: a.tags.join(', '),
        notes: a.notes,
        image: a.prompts.image,
        texture: a.prompts.texture,
        budgetClass: a.budgetClass,
        targetTriangles: a.targetTriangles ?? '',
        maxDrawCalls: a.maxDrawCalls ?? '',
        maxMaterials: a.maxMaterials ?? '',
        maxUniqueGeometries: a.maxUniqueGeometries ?? '',
        subject: a.subject ?? 'prop',
        pivot: a.pivot,
        collider: a.collider,
        destructionGroups: (a.destructionGroups ?? []).join(', '),
        w: a.scale.declared.w, h: a.scale.declared.h, d: a.scale.declared.d,
      });
    }).catch((e) => setError(e.message));
  }, [id]);

  /**
   * Re-read this asset when the registry changes underneath us.
   *
   * The generation skills write the registry from the host while the drawer is
   * open, so without this an open prop kept showing the score, status and mesh
   * path it had when you opened it -- the list behind it refreshed, this did
   * not, and the only way out was to close and reopen (or restart the tab).
   *
   * Deliberately NOT the same effect as the one above: this one must not touch
   * `draft` or `tab`. Resetting the draft here would throw away whatever you
   * were typing every time a skill finished a step, and resetting the tab would
   * yank you out of the panel you were reading.
   */
  useEffect(() => {
    if (!rev) return;
    api.get(id).then(setAsset).catch(() => {});
  }, [id, rev]);

  if (!asset) {
    return (
      <div className="drawer">
        <header>
          <button onClick={onClose}>close</button>
          <span className="muted">{error ?? 'loading…'}</span>
        </header>
      </div>
    );
  }

  async function save() {
    setSaving(true);
    setError(null);
    try {
      await api.update(id, {
        name: draft.name,
        nameTh: draft.nameTh,
        description: draft.description,
        category: draft.category,
        tags: draft.tags.split(',').map((t) => t.trim()).filter(Boolean),
        notes: draft.notes,
        budgetClass: draft.budgetClass,
        // Blank means "use the class budget", which the schema stores as null.
        // The same rule on all four axes, so an override is always a deliberate
        // number and never a copy of the class it came from.
        ...Object.fromEntries(
          ['targetTriangles', 'maxDrawCalls', 'maxMaterials', 'maxUniqueGeometries'].map((k) => [
            k,
            draft[k] === '' ? null : Number(draft[k]),
          ]),
        ),
        subject: draft.subject,
        pivot: draft.pivot,
        collider: draft.collider,
        // Blank means "not breakable", which is a decision and not an omission --
        // the model must then expose no groups either.
        destructionGroups: draft.destructionGroups
          .split(',')
          .map((g) => g.trim())
          .filter(Boolean),
        prompts: { image: draft.image, texture: draft.texture },
        scale: { declared: { w: +draft.w, h: +draft.h, d: +draft.d } },
      });
      const fresh = await api.get(id);
      setAsset(fresh);
      onChanged?.();
    } catch (e) {
      if (e.status === 409) {
        // Re-fetch so the client holds a current ETag; without this the editor
        // stays wedged and every retry fails the same way. Your edits are kept
        // in `draft`, so pressing save again now goes through.
        await api.get(id).then(setAsset).catch(() => {});
        setError(
          'This asset was changed on disk while you were editing it. Your edits are still here — press save again to apply them over the new version, or close and reopen to discard them.',
        );
      } else {
        setError(e.message);
      }
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    const purge = confirm(
      `Delete "${asset.name}" from the registry?\n\nOK also deletes generated files in assets/${asset.id}/.\nCancel keeps the files and removes only the entry.`,
    );
    if (!confirm(`Really delete "${asset.name}"?`)) return;
    await api.remove(id, purge);
    onChanged?.();
    onClose();
  }

  return (
    <div className="drawer">
      <header>
        <button onClick={onClose}>close</button>
        <strong>{asset.name}</strong>
        <span className="muted mono">{asset.id}</span>
        <span className="grow" />
        <button className="danger" onClick={remove}>delete</button>
        <button className="primary" onClick={save} disabled={saving}>
          {saving ? 'saving…' : 'save'}
        </button>
      </header>

      <div className="tabs">
        {['details', 'preview', 'quality', 'runtime'].map((t) => (
          <div key={t} className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>
            {t}
          </div>
        ))}
      </div>

      {error && <div className="banner">{error}</div>}

      <div className="content">
        {tab === 'details' && (
          <>
            <div className="row">
              <Field label="Name">
                <input value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} />
              </Field>
              <Field label="Thai name">
                <input value={draft.nameTh} onChange={(e) => setDraft({ ...draft, nameTh: e.target.value })} />
              </Field>
            </div>
            <Field label="Description">
              <input value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} />
            </Field>
            <div className="row">
              <Field label="Category">
                <input value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
              </Field>
              <Field label="Tags (comma separated)">
                <input value={draft.tags} onChange={(e) => setDraft({ ...draft, tags: e.target.value })} />
              </Field>
            </div>

            <Field label="Reference image prompt — object description only. The plate scaffold is injected at generation time.">
              <textarea value={draft.image} onChange={(e) => setDraft({ ...draft, image: e.target.value })} />
            </Field>
            <Field label="Texture prompt — materials and wear only">
              <textarea value={draft.texture} onChange={(e) => setDraft({ ...draft, texture: e.target.value })} />
            </Field>

            <div className="row">
              {/*
                The class carries its numbers in the label. "small / medium /
                large / hero" on its own asked you to remember four ceilings per
                class out of a file you are not looking at, which is how a drum
                came to be built as seven meshes inside a one-mesh class.
              */}
              <Field label="Budget class — the ceilings a prop of this size gets">
                <select
                  value={draft.budgetClass}
                  onChange={(e) => setDraft({ ...draft, budgetClass: e.target.value })}
                >
                  {Object.keys(budgetClasses ?? {}).map((c) => (
                    <option key={c} value={c}>{describeClass(c, budgetClasses?.[c])}</option>
                  ))}
                </select>
              </Field>
              <Field label="Pivot">
                <select value={draft.pivot} onChange={(e) => setDraft({ ...draft, pivot: e.target.value })}>
                  {['base-center', 'center', 'back-center', 'top-center'].map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
            </div>

            {/*
              Four axes, not one number in four costumes. A prop can sit at a
              third of its triangle budget and still be what costs a low-end GPU
              its frame: draw calls are CPU submissions, materials are shader
              switches, and unique geometries are VRAM. Blank on any of them
              means "use the class".
            */}
            <Field label="Scene budget overrides — blank uses the class">
              <div className="row" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {[
                  ['targetTriangles', 'triangles', 50],
                  ['maxDrawCalls', 'draw calls', 1],
                  ['maxMaterials', 'materials', 1],
                  ['maxUniqueGeometries', 'geometries', 1],
                ].map(([key, label, step]) => (
                  <label key={key} className="muted" style={{ fontSize: 11 }}>
                    {label}
                    <input
                      type="number"
                      min="1"
                      step={step}
                      placeholder={String(budgetClasses?.[draft.budgetClass]?.[key] ?? 'class')}
                      value={draft[key]}
                      onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                    />
                  </label>
                ))}
              </div>
            </Field>

            {/*
              The runtime contract, declared before the build rather than read off
              it afterwards. A collider is the cheap convex proxy a physics engine
              tests against instead of the mesh; the destruction groups are the
              assemblies the prop is meant to come apart into. Both are checked at
              promotion, so a crate whose lid was supposed to detach and did not is
              a failure rather than something you find out by orbiting the model.
            */}
            <div className="row">
              <Field label="Collider — the physics proxy, not the mesh">
                <select
                  value={draft.collider}
                  onChange={(e) => setDraft({ ...draft, collider: e.target.value })}
                >
                  {['box', 'cylinder', 'convex', 'none'].map((c) => <option key={c}>{c}</option>)}
                </select>
              </Field>
              <Field label="Destruction groups — what it breaks into. Blank = not breakable.">
                <input
                  placeholder="lid, body, base"
                  value={draft.destructionGroups}
                  onChange={(e) => setDraft({ ...draft, destructionGroups: e.target.value })}
                />
              </Field>
            </div>

            <div className="row">
              <Field label="Subject — selects the reconstruction profile and its gates">
                <select
                  value={draft.subject}
                  onChange={(e) => setDraft({ ...draft, subject: e.target.value })}
                >
                  {SUBJECTS.map((sub) => <option key={sub} value={sub}>{sub}</option>)}
                </select>
              </Field>
            </div>

            <Field label="Declared real-world size (metres)">
              <div className="row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
                {['w', 'h', 'd'].map((k) => (
                  <input key={k} type="number" step="0.01" value={draft[k]}
                    onChange={(e) => setDraft({ ...draft, [k]: e.target.value })} />
                ))}
              </div>
            </Field>

            <Field label="Notes">
              <textarea value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} />
            </Field>
          </>
        )}

        {tab === 'preview' && (
          <>
            <div className="track-head">
              <span className={`badge ${asset.model?.status ?? 'pending'}`}>
                model {asset.model?.status ?? 'pending'}
              </span>
              {asset.model?.review?.score != null && (
                <span className={`badge ${scoreClass(asset.model.review.score)}`}>
                  {asset.model.review.score}
                </span>
              )}
              <span className="muted mono">{asset.subject ?? 'prop'}</span>
            </div>
            <Viewer
              url={mediaUrl(asset.model?.file)}
              exportName={asset.model?.export}
              // Both halves are needed. `updatedAt` moves when the registry
              // records a new build; `rev` moves when the watcher sees ANY
              // change, which is the only signal for a module rewritten in
              // place while the JSON stays identical -- rebuilding over an
              // existing prop does exactly that, and updatedAt does not budge.
              version={`${asset.updatedAt}|${rev ?? 0}`}
            />
            {asset.model?.thumb && !asset.model?.file && (
              <p className="muted track-blurb unpromoted">
                This prop still carries a thumbnail from the retired GLB pipeline. It has no
                Three.js model yet — run thaikit-model to rebuild it.
              </p>
            )}
            {asset.model?.quarantine && (
              <p className="muted">quarantined: {asset.model.quarantine.reason}</p>
            )}
            <PreviewImage image={asset.image} />
          </>
        )}

        {tab === 'quality' && (
          (() => {
            const r = asset.model?.review ?? {};
            if (r.score == null && !r.passesComplete?.length) {
              return (
                <p className="muted">
                  No review recorded. Every number on this tab is img2threejs's own — read off
                  the sculpt spec's reviewHistory and the skill's loop counts by promote-model.mjs.
                  thaikit does not score models, so nothing appears here until a build is promoted.
                </p>
              );
            }
            const layers = Object.entries(r.layerScores ?? {});
            const done = new Set(r.passesComplete ?? []);
            return (
              <>
                {r.score != null && (
                  <h3 style={{ margin: 0 }}>
                    {r.score} / 100{' '}
                    <span className="muted" style={{ fontWeight: 400, fontSize: 14 }}>
                      (fidelity {r.fidelity?.toFixed(2) ?? '\u2014'}, pass mark {r.threshold})
                    </span>
                  </h3>
                )}

                {/*
                  The five layers, kept beside the single number because the
                  average hides which one is carrying the model: 0.90 made of a
                  0.95 silhouette and a 0.35 material surface is a prop whose
                  shape is right and whose surface has not been done yet.
                */}
                {layers.length > 0 && (
                  <Field label="Layer scores — img2threejs's own, at the last reviewed pass">
                    <table>
                      <tbody>
                        {layers.map(([layer, value]) => (
                          <tr key={layer}>
                            <td>{layer.replace(/([A-Z])/g, ' $1').toLowerCase()}</td>
                            <td style={{ width: 150 }}>
                              <div className="bar">
                                <div style={{ width: `${Math.round((value ?? 0) * 100)}%` }} />
                              </div>
                            </td>
                            <td
                              className={`mono ${
                                value < (r.threshold ?? 85) / 100 ? 'score-bad' : ''
                              }`}
                              style={{ width: 70 }}
                            >
                              {value?.toFixed(2) ?? '\u2014'}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Field>
                )}

                {/*
                  The pass ladder IS the progress bar: a pass unlocks only once
                  the one before it was reviewed `continue`, so how far down this
                  list a prop got is exactly how finished it is.
                */}
                <Field label="Passes">
                  <table>
                    <tbody>
                      {PASSES.map((name) => (
                        <tr key={name}>
                          <td>{name}</td>
                          <td className="mono muted" style={{ width: 90 }}>
                            {done.has(name) ? 'done' : '\u2014'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Field>

                <Field label="Corrections">
                  <div className="muted mono">
                    {r.corrections?.total ?? 0} / {r.corrections?.maxTotal ?? 10} used
                    {r.decision ? ` \u00b7 last decision: ${r.decision}` : ''}
                  </div>
                </Field>

                {Boolean(r.featureReviews?.length) && (
                  <table>
                    <thead>
                      <tr><th>Feature</th><th style={{ width: 150 }} /><th style={{ width: 70 }}>Score</th></tr>
                    </thead>
                    <tbody>
                      {r.featureReviews.map((f, i) => {
                        // The shape is img2threejs's, not ours, so read it
                        // defensively rather than pinning a contract we do not own.
                        const name = f.feature ?? f.id ?? f.name ?? `feature ${i + 1}`;
                        const value = f.score ?? f.fidelity ?? null;
                        return (
                          <tr key={name}>
                            <td>{name}{f.critical ? ' *' : ''}</td>
                            <td>
                              <div className="bar">
                                <div style={{ width: `${Math.round((value ?? 0) * 100)}%` }} />
                              </div>
                            </td>
                            <td className="mono">{value == null ? '\u2014' : value.toFixed(2)}</td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                )}

                {r.critique && (
                  <Field label="Review summary — the skill's own, at the last reviewed pass">
                    <div className="muted" style={{ whiteSpace: 'pre-wrap' }}>{r.critique}</div>
                  </Field>
                )}

                {r.comparisonImage && (
                  <Field label="Comparison sheet">
                    <img src={mediaUrl(r.comparisonImage)} alt="reference vs render" style={{ width: '100%' }} />
                  </Field>
                )}
              </>
            );
          })()
        )}

        {tab === 'runtime' && (
          (() => {
            const m = asset.model ?? {};
            const rt = m.runtime ?? {};
            const ref = m.reference ?? {};
            const rows = [
              ['pivots', rt.pivots],
              ['sockets', rt.sockets],
              ['colliders', rt.colliders],
              ['destruction groups', rt.destructionGroups],
            ];
            return (
              <>
                {/*
                  Pivots and sockets are a requirement of the build, not a nice
                  to have: anything that should move needs its own pivot at the
                  real hinge axis. Listing them here is how you notice a prop
                  that shipped with none.
                */}
                <Field label="Runtime hierarchy">
                  {rows.every(([, v]) => !v?.length) ? (
                    <p className="muted">
                      Nothing exposed on sculptRuntime. If any part of this prop should move or
                      attach, it is missing its pivots and sockets.
                    </p>
                  ) : (
                    <table>
                      <tbody>
                        {rows.map(([label, v]) => (
                          <tr key={label}>
                            {/* Counted as well as listed: "8 pivots" on a prop with
                                no moving parts is the fault, and a comma-separated
                                run of names does not show it. */}
                            <td>{label} <span className="muted mono">({v?.length ?? 0})</span></td>
                            <td className="mono muted">{v?.length ? v.join(', ') : '\u2014'}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </Field>

                {/*
                  Measured against the ceiling, not reported bare. A row of four
                  numbers with nothing to compare them to is why an oil drum
                  could ship at seven draw calls inside a one-draw-call class and
                  read as a finished prop.
                */}
                <Field label="Cost against budget">
                  <table>
                    <tbody>
                      {budgetRows(asset, budgetClasses).map((row) => (
                        <tr key={row.key}>
                          <td>
                            {row.label}
                            {row.overridden && (
                              <span className="muted" title="this asset overrides its class"> ·  set</span>
                            )}
                          </td>
                          <td className={`mono ${row.over ? 'score-bad' : ''}`}>
                            {row.measured?.toLocaleString() ?? '\u2014'}
                            <span className="muted">
                              {' / '}
                              {row.limit?.toLocaleString() ?? 'unbudgeted'}
                            </span>
                          </td>
                        </tr>
                      ))}
                      <tr><td>textures</td><td className="mono">{m.textures ?? '\u2014'}</td></tr>
                      <tr>
                        <td>module size</td>
                        <td className="mono">
                          {m.fileBytes ? `${(m.fileBytes / 1024).toFixed(1)} KB` : '\u2014'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Field>

                <Field label="Reference mesh (never ships)">
                  {ref.glb ? (
                    <table>
                      <tbody>
                        <tr><td>provider</td><td className="mono">{ref.provider}</td></tr>
                        <tr><td>request</td><td className="mono">{ref.requestId ?? '\u2014'}</td></tr>
                        <tr><td>seed</td><td className="mono">{ref.seed ?? '\u2014'}</td></tr>
                        <tr><td>file</td><td className="mono">{ref.glb}</td></tr>
                        <tr><td>compressed</td><td className="mono">{ref.compressed ? 'yes' : 'no'}</td></tr>
                      </tbody>
                    </table>
                  ) : (
                    <p className="muted">No reference mesh recorded.</p>
                  )}
                </Field>

                <Field label="Sources">
                  <table>
                    <tbody>
                      <tr><td>module</td><td className="mono">{m.file ?? '\u2014'}</td></tr>
                      <tr><td>factory</td><td className="mono">{m.source ?? '\u2014'}</td></tr>
                      <tr><td>sculpt spec</td><td className="mono">{m.spec ?? '\u2014'}</td></tr>
                      <tr><td>state</td><td className="mono">{m.state ?? '\u2014'}</td></tr>
                    </tbody>
                  </table>
                </Field>
              </>
            );
          })()
        )}
      </div>
    </div>
  );
}
