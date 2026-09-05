import { useEffect, useState } from 'react';
import { api, itemsApi, mediaUrl } from './api.js';
import { useReadOnly } from './readOnly.js';
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
const PIVOTS = ['base-center', 'center', 'back-center', 'top-center'];
const PLACEMENTS = ['floor', 'wall', 'ceiling', 'surface', 'vehicle-mounted'];
const BUDGET_KEYS = [
  ['targetTriangles', 'triangles', 50],
  ['maxDrawCalls', 'draw calls', 1],
  ['maxMaterials', 'materials', 1],
  ['maxUniqueGeometries', 'geometries', 1],
];

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
 * thaikit-preview-image and read straight off the record -- there is no
 * separate fetch, because there is nothing on disk the record does not name.
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

/**
 * What the compound is, and what measuring it said.
 *
 * The numbers are the point of the whole system. A prop used to declare the word
 * "box" and that was the end of it; `coverage` is the fraction of the footprint
 * with a collider over it, and anything missing is a player falling through the
 * model. Once a part has been moved by hand they are cleared rather than carried
 * forward -- a hand-placed box has not been measured, and showing the
 * derivation's numbers beside it would present them as evidence for a shape
 * nobody checked.
 */
function ColliderBar({ doc, parts, dirty, saving, onSave, item, readOnly }) {
  if (parts === null) return null;
  const check = doc?.selfCheck ?? null;
  const shapes = [...new Set((parts ?? []).map((p) => p.type))].join(', ');

  return (
    <div>
      <div className="ref-head">
        <span className="muted">
          Physics compound — {parts.length} part{parts.length === 1 ? '' : 's'}
          {shapes ? ` (${shapes})` : ''}
          {doc?.handTuned && ' · hand-tuned'}
          {doc?.source === 'installer' && ' · derived by the pack installer'}
        </span>
        {!readOnly && (
          <button className={dirty ? 'primary' : ''} disabled={!dirty || saving} onClick={onSave}>
            {saving ? 'saving…' : dirty ? 'save colliders' : 'saved'}
          </button>
        )}
      </div>
      {!parts.length && (
        <p className="collider-note">
          No compound yet — nothing can be walked into or stood on.
          {item.editable ? (
            <> Derive one with <code>node scripts/derive-colliders.mjs --id {item.assetId ?? item.name}</code>, or add parts by hand with the button in the viewer.</>
          ) : (
            <> Add parts by hand with the button in the viewer; they are kept as a local override.</>
          )}
        </p>
      )}
      {check?.meanAbsDelta != null && (
        <p className="collider-note">
          coverage {check.coverage} · mean {check.meanAbsDelta} m · p95 {check.p95AbsDelta} m · max{' '}
          {check.maxAbsDelta} m · volume ×{check.volumeRatio} · ledges {doc.ledgesPreserved}
        </p>
      )}
      {check && check.meanAbsDelta == null && check.coverage != null && (
        <p className="collider-note">coverage {check.coverage}, measured by the installer's derivation</p>
      )}
      {doc?.handTuned && !check && (
        <p className="collider-note">
          Hand-tuned, so there are no measurements beside it.
          {item.editable && <> Re-derive with <code>--force</code> to measure it again — that replaces the hand edits.</>}
        </p>
      )}
      {dirty && (
        <p className="collider-note dirty">
          Unsaved changes. Saving marks the compound hand-tuned
          {item.editable ? ', which makes the derivation refuse to overwrite it without ' : ' in this item\'s local override'}
          {item.editable && <code>--force</code>}.
        </p>
      )}
      {(doc?.ledgesLost ?? []).map((l) => (
        <p key={l.y} className="collider-note dirty">
          ledge at y={l.y} m ({l.area} m²) has no collider top within 0.10 m — {l.reason}
        </p>
      ))}
    </div>
  );
}

/** The override form's draft, from the probe values (placeholders) and the override (values). */
function overrideDraft(item, override) {
  const o = override ?? {};
  return {
    pivot: o.pivot ?? '',
    placement: (o.placement ?? []).join(', '),
    physicsEnabled: o.physics?.enabled ?? null,
    massKg: o.physics?.massKg ?? '',
    destructionGroups: o.destructionGroups ? o.destructionGroups.join(', ') : '',
    budgetClass: o.budgetClass ?? '',
    targetTriangles: o.targetTriangles ?? '',
    maxDrawCalls: o.maxDrawCalls ?? '',
    maxMaterials: o.maxMaterials ?? '',
    maxUniqueGeometries: o.maxUniqueGeometries ?? '',
    tags: o.tags ? o.tags.join(', ') : '',
    category: o.category ?? '',
    notes: o.notes ?? '',
  };
}

const splitList = (s) => String(s ?? '').split(',').map((t) => t.trim()).filter(Boolean);

/**
 * One drawer, two modes.
 *
 * An EDITABLE item (thaikit's own, installed from the source tree) edits its
 * record through `/api/assets/:id` exactly as before; a FOREIGN item edits a
 * local override -- the same declarations, kept in overrides/<ns>/<name>.json.
 * The preview, the compound and the runtime tab are the same for both: the
 * installer probed every item the same way.
 */
export function Drawer({ itemRef, rev, onClose, onChanged }) {
  const [item, setItem] = useState(null);
  const [asset, setAsset] = useState(null);
  const [override, setOverride] = useState(null);
  const [tab, setTab] = useState('details');
  const [draft, setDraft] = useState({});
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);
  const [rebuilding, setRebuilding] = useState(false);
  const budgetClasses = useBudgetClasses();
  const { readOnly, reason: readOnlyReason } = useReadOnly();

  /**
   * The physics compound, which lives beside the source (or in the override)
   * rather than in the record, so it is fetched and saved on its own. `null`
   * means "not asked yet", an empty array means "asked, and this prop has none"
   * -- and the second is a state worth showing rather than an error.
   */
  const [colliders, setColliders] = useState(null);
  const [colliderDoc, setColliderDoc] = useState(null);
  const [colliderDirty, setColliderDirty] = useState(false);

  const loadColliders = () => {
    setColliderDirty(false);
    return itemsApi.colliders(itemRef)
      .then((doc) => { setColliderDoc(doc); setColliders(doc.parts ?? []); })
      .catch((e) => {
        // 404 is the ordinary state of a prop nobody has derived yet, not a
        // failure worth putting in the error bar.
        if (e.status !== 404) setError(e.message);
        setColliderDoc(null);
        setColliders([]);
      });
  };

  useEffect(() => {
    setError(null);
    setAsset(null);
    setOverride(null);
    itemsApi.get(itemRef).then(async (it) => {
      setItem(it);
      // Open on preview once there is a model to look at. A generated prop is
      // nearly always opened to SEE it, and burying the viewer one click behind
      // the details form means it goes unnoticed. A prop with no model yet is
      // opened to write its prompts, so that case keeps `details`.
      setTab(it.bundleUrl && it.supported ? 'preview' : 'details');
      if (it.editable) {
        const a = await api.get(it.assetId ?? it.name);
        setAsset(a);
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
          physicsEnabled: a.physics?.enabled ?? false,
          massKg: a.physics?.massKg ?? '',
          destructionGroups: (a.destructionGroups ?? []).join(', '),
          w: a.scale.declared.w, h: a.scale.declared.h, d: a.scale.declared.d,
        });
      } else {
        const o = await itemsApi.override(itemRef).catch((e) => { if (e.status !== 404) throw e; return null; });
        setOverride(o);
        setDraft(overrideDraft(it, o));
      }
    }).catch((e) => setError(e.message));
    loadColliders();
  }, [itemRef]);

  /**
   * Re-read this item when the catalogue changes underneath us.
   *
   * The generation skills write the tree from the host while the drawer is
   * open, so without this an open prop kept showing the score, status and
   * bundle it had when you opened it -- the list behind it refreshed, this did
   * not, and the only way out was to close and reopen.
   *
   * Deliberately NOT the same effect as the one above: this one must not touch
   * `draft` or `tab`. Resetting the draft here would throw away whatever you
   * were typing every time a skill finished a step, and resetting the tab would
   * yank you out of the panel you were reading.
   */
  useEffect(() => {
    if (!rev) return;
    itemsApi.get(itemRef).then((it) => {
      setItem(it);
      if (it.editable) api.get(it.assetId ?? it.name).then(setAsset).catch(() => {});
      if (rebuilding && it.version !== item?.version) setRebuilding(false);
    }).catch(() => {});
  }, [itemRef, rev]);

  if (!item || (item.editable && !asset)) {
    return (
      <div className="drawer">
        <header>
          <button onClick={onClose}>close</button>
          <span className="muted">{error ?? 'loading…'}</span>
        </header>
      </div>
    );
  }

  /**
   * Persist a hand-edited compound.
   *
   * Separate from save() because it writes a different file through a different
   * route, and because the two conflict independently: a skill rebuilding this
   * prop's model touches the record, and a second tab moving a box touches the
   * compound. Sharing one save button would make either conflict look like the
   * other.
   */
  async function saveColliders() {
    setSaving(true);
    setError(null);
    try {
      const base = colliderDoc ?? {
        schemaVersion: 1,
        assetId: item.name,
        frame: 'root-local',
        units: 'm',
        groundY: 0,
      };
      const { doc } = await itemsApi.saveColliders(itemRef, { ...base, parts: colliders ?? [] });
      setColliderDoc(doc);
      setColliders(doc.parts ?? []);
      setColliderDirty(false);
      onChanged?.();
    } catch (e) {
      if (e.status === 409 && e.current) {
        // Show what is on disk rather than only refusing. The parts you moved are
        // still in `colliders`, so pressing save again writes them over the
        // version you have now been shown.
        setColliderDoc(e.current);
        setError(
          'the compound changed on disk — your edits are still here; press save again to write them over it',
        );
      } else {
        setError(e.message);
      }
    } finally {
      setSaving(false);
    }
  }

  const nullableNumber = (v) => (v === '' || v == null ? null : Number(v));

  async function save() {
    setSaving(true);
    setError(null);
    try {
      if (item.editable) {
        await api.update(item.assetId ?? item.name, {
          name: draft.name,
          nameTh: draft.nameTh,
          description: draft.description,
          category: draft.category,
          tags: splitList(draft.tags),
          notes: draft.notes,
          budgetClass: draft.budgetClass,
          // Blank means "use the class budget", which the schema stores as null.
          // The same rule on all four axes, so an override is always a deliberate
          // number and never a copy of the class it came from.
          ...Object.fromEntries(BUDGET_KEYS.map(([k]) => [k, nullableNumber(draft[k])])),
          subject: draft.subject,
          pivot: draft.pivot,
          physics: {
            enabled: Boolean(draft.physicsEnabled),
            massKg: nullableNumber(draft.massKg),
          },
          // Blank means "not breakable", which is a decision and not an omission --
          // the model must then expose no groups either.
          destructionGroups: splitList(draft.destructionGroups),
          prompts: { image: draft.image, texture: draft.texture },
          scale: { declared: { w: +draft.w, h: +draft.h, d: +draft.d } },
        });
        setAsset(await api.get(item.assetId ?? item.name));
      } else {
        // Only what was SET goes into the override; a blank field means "what
        // the pack says", never a copy of it.
        const body = {};
        if (draft.pivot) body.pivot = draft.pivot;
        if (splitList(draft.placement).length) body.placement = splitList(draft.placement);
        if (draft.physicsEnabled !== null) body.physics = { enabled: Boolean(draft.physicsEnabled), massKg: nullableNumber(draft.massKg) };
        if (draft.destructionGroups !== '') body.destructionGroups = splitList(draft.destructionGroups);
        if (draft.budgetClass) body.budgetClass = draft.budgetClass;
        for (const [k] of BUDGET_KEYS) if (draft[k] !== '') body[k] = nullableNumber(draft[k]);
        if (draft.tags) body.tags = splitList(draft.tags);
        if (draft.category) body.category = draft.category;
        if (draft.notes) body.notes = draft.notes;
        const o = await itemsApi.saveOverride(itemRef, body);
        setOverride(o);
      }
      setItem(await itemsApi.get(itemRef));
      onChanged?.();
    } catch (e) {
      if (e.status === 409) {
        // Re-fetch so the client holds a current ETag; without this the editor
        // stays wedged and every retry fails the same way. Your edits are kept
        // in `draft`, so pressing save again now goes through.
        if (item.editable) await api.get(item.assetId ?? item.name).then(setAsset).catch(() => {});
        else await itemsApi.override(itemRef).then(setOverride).catch(() => {});
        setError(
          'This item was changed on disk while you were editing it. Your edits are still here — press save again to apply them over the new version, or close and reopen to discard them.',
        );
      } else {
        setError(e.issues?.map((i) => `${i.path}: ${i.message}`).join('; ') ?? e.message);
      }
    } finally {
      setSaving(false);
    }
  }

  async function clearOverride() {
    if (!confirm(`Drop the local override for ${itemRef}? The pack's own values come back.`)) return;
    setSaving(true);
    try {
      await itemsApi.clearOverride(itemRef);
      setOverride(null);
      const it = await itemsApi.get(itemRef);
      setItem(it);
      setDraft(overrideDraft(it, null));
      await loadColliders();
      onChanged?.();
    } catch (e) {
      setError(e.message);
    } finally {
      setSaving(false);
    }
  }

  async function remove() {
    const purge = confirm(
      `Delete "${item.title}" from the kit?\n\nOK also deletes its files in ${item.sourceDir ?? `packages/props/src/models/${item.name}`}/.\nCancel keeps the files and removes only the record.`,
    );
    if (!confirm(`Really delete "${item.title}"?`)) return;
    await api.remove(item.assetId ?? item.name, purge);
    onChanged?.();
    onClose();
  }

  async function rebuild() {
    setError(null);
    try {
      await itemsApi.refresh(itemRef);
      setRebuilding(true);
    } catch (e) {
      setError(e.message);
    }
  }

  /**
   * An adopted item keeps its upstream address until it is forked; forking
   * moves it into thaikit's own kit (docs/adopting-packs.md), after which the
   * skills can rebuild it without diverging from upstream under upstream's name.
   */
  async function fork() {
    if (!window.confirm(`Fork ${item.ref} into @thai-kit?\n\nIts source moves to packages/props/src/models/${item.name}/, every level placement is re-pointed, and it leaves ${item.pack}.`)) return;
    setError(null);
    try {
      const result = await itemsApi.fork(itemRef);
      onChanged?.();
      onClose();
      window.alert(`Forked as ${result.to}${result.levels?.length ? `; re-pointed ${result.levels.map((l) => `${l.rewritten} in ${l.level}`).join(', ')}` : ''}. The pack is rebuilding.`);
    } catch (e) {
      setError(e.message);
    }
  }

  const review = asset?.model?.review ?? null;
  const m = asset?.model ?? {};

  return (
    <div className="drawer">
      <header>
        <button onClick={onClose}>close</button>
        <strong>{item.title}</strong>
        <span className="muted mono">{item.ref}</span>
        {!item.editable && <span className="badge" title="a third-party pack item; edits go to a local override">{override ? 'override' : 'pack item'}</span>}
        <span className="grow" />
        {readOnly && <span className="badge" title={readOnlyReason ?? 'this instance is read-only'}>read-only</span>}
        {!readOnly && item.editable && item.supported && (
          <button onClick={rebuild} disabled={rebuilding} title="rebuild this prop's bundle, probe and thumbnail from its source">
            {rebuilding ? 'rebuilding…' : 'rebuild'}
          </button>
        )}
        {!readOnly && item.editable && item.assetId?.startsWith('@') && (
          <button onClick={fork} title={`move this item from ${item.pack} into thaikit's own kit, with forkedFrom recorded`}>fork into @thai-kit</button>
        )}
        {!readOnly && item.editable && <button className="danger" onClick={remove}>delete</button>}
        {!readOnly && !item.editable && override && <button className="danger" onClick={clearOverride} disabled={saving}>clear override</button>}
        {!readOnly && (
          <button className="primary" onClick={save} disabled={saving}>
            {saving ? 'saving…' : 'save'}
          </button>
        )}
      </header>

      <div className="tabs">
        {['details', 'preview', ...(item.editable ? ['quality'] : []), 'runtime'].map((t) => (
          <div key={t} className={`tab ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>
            {t}
          </div>
        ))}
      </div>

      {error && <div className="banner">{error}</div>}

      <div className="content">
        {tab === 'details' && item.editable && (
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
                  {PIVOTS.map((c) => <option key={c}>{c}</option>)}
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
                {BUDGET_KEYS.map(([key, label, step]) => (
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
              Two declarations, both decisions about what the prop is FOR rather
              than descriptions of what got built. Physics says whether it is a
              body a player can kick around; the destruction groups are the
              assemblies it is meant to come apart into.
            */}
            <div className="row">
              <Field label="Physics — a body that can be kicked around, and what it weighs">
                <label className="checkline">
                  <input
                    type="checkbox"
                    checked={Boolean(draft.physicsEnabled)}
                    onChange={(e) => setDraft({ ...draft, physicsEnabled: e.target.checked })}
                  />
                  dynamic body
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder={draft.physicsEnabled ? 'mass in kg' : 'static — no mass needed'}
                  value={draft.massKg}
                  // A mass on a static prop is a number nobody will ever read, so
                  // the field only takes one once the prop is a body.
                  disabled={!draft.physicsEnabled}
                  onChange={(e) => setDraft({ ...draft, massKg: e.target.value })}
                />
                {draft.physicsEnabled && colliderDoc?.suggestedMassKg != null && (
                  <span className="collider-note">
                    derivation suggests {colliderDoc.suggestedMassKg} kg from the compound's volume —
                    a check, not an answer
                  </span>
                )}
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

        {tab === 'details' && !item.editable && (
          <>
            <p className="muted" style={{ marginTop: 0 }}>
              <strong>{item.pack}</strong> ships this prop; its own record is not editable here. What
              you set below is a LOCAL OVERRIDE (<span className="mono">overrides/{item.pack}/{item.name}.json</span>)
              merged over what the pack and the installer's probe say. Blank means "what the pack says".
            </p>
            <div className="row">
              <Field label="Pivot">
                <select value={draft.pivot} onChange={(e) => setDraft({ ...draft, pivot: e.target.value })}>
                  <option value="">pack: {item.pivot}</option>
                  {PIVOTS.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </Field>
              <Field label={`Placement (comma separated: ${PLACEMENTS.join(', ')})`}>
                <input placeholder={`pack: ${item.placement.join(', ')}`} value={draft.placement} onChange={(e) => setDraft({ ...draft, placement: e.target.value })} />
              </Field>
            </div>
            <div className="row">
              <Field label="Physics — a body that can be kicked around, and what it weighs">
                <label className="checkline">
                  <input
                    type="checkbox"
                    checked={Boolean(draft.physicsEnabled)}
                    onChange={(e) => setDraft({ ...draft, physicsEnabled: e.target.checked })}
                  />
                  dynamic body {draft.physicsEnabled === null && <span className="muted">(pack: {item.physics?.enabled ? 'dynamic' : 'static'})</span>}
                </label>
                <input
                  type="number"
                  min="0"
                  step="0.1"
                  placeholder={draft.physicsEnabled ? 'mass in kg' : 'static — no mass needed'}
                  value={draft.massKg}
                  disabled={!draft.physicsEnabled}
                  onChange={(e) => setDraft({ ...draft, massKg: e.target.value })}
                />
              </Field>
              <Field label="Destruction groups — what it breaks into">
                <input
                  placeholder={item.destructionGroups.length ? `pack: ${item.destructionGroups.join(', ')}` : 'pack: not breakable'}
                  value={draft.destructionGroups}
                  onChange={(e) => setDraft({ ...draft, destructionGroups: e.target.value })}
                />
              </Field>
            </div>
            <div className="row">
              <Field label="Budget class">
                <select value={draft.budgetClass} onChange={(e) => setDraft({ ...draft, budgetClass: e.target.value })}>
                  <option value="">pack: {item.budgetClass ?? 'none'}</option>
                  {Object.keys(budgetClasses ?? {}).map((c) => (
                    <option key={c} value={c}>{describeClass(c, budgetClasses?.[c])}</option>
                  ))}
                </select>
              </Field>
              <Field label="Category">
                <input placeholder={`pack: ${item.category}`} value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} />
              </Field>
            </div>
            <Field label="Scene budget overrides — blank uses the class">
              <div className="row" style={{ gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
                {BUDGET_KEYS.map(([key, label, step]) => (
                  <label key={key} className="muted" style={{ fontSize: 11 }}>
                    {label}
                    <input
                      type="number"
                      min="1"
                      step={step}
                      placeholder={String(item.budget?.[key] ?? budgetClasses?.[draft.budgetClass || item.budgetClass]?.[key] ?? 'class')}
                      value={draft[key]}
                      onChange={(e) => setDraft({ ...draft, [key]: e.target.value })}
                    />
                  </label>
                ))}
              </div>
            </Field>
            <Field label="Tags (comma separated)">
              <input placeholder={`pack: ${item.tags.join(', ')}`} value={draft.tags} onChange={(e) => setDraft({ ...draft, tags: e.target.value })} />
            </Field>
            <Field label="Notes">
              <textarea value={draft.notes} onChange={(e) => setDraft({ ...draft, notes: e.target.value })} />
            </Field>
            {item.description && (
              <Field label="The pack's description">
                <div className="muted">{item.description}</div>
              </Field>
            )}
          </>
        )}

        {tab === 'preview' && (
          <>
            <div className="track-head">
              {item.status && (
                <span className={`badge ${item.status.model ?? 'pending'}`}>
                  model {item.status.model ?? 'pending'}
                </span>
              )}
              {item.unbuilt ? <span className="badge" title={item.error ?? ""}>no model</span> : !item.supported && <span className="badge score-bad" title={item.error ?? ""}>unsupported</span>}
              {item.review?.score != null && (
                <span className={`badge ${scoreClass(item.review.score)}`}>
                  {item.review.score}
                </span>
              )}
              <span className="muted mono">{asset?.subject ?? item.pack}</span>
            </div>
            <Viewer
              url={item.supported ? item.bundleUrl : null}
              exportName={item.exportName}
              // Both halves are needed. `version` moves when the installer records
              // a new build; `rev` moves when the watcher sees ANY change, which is
              // the only signal for a bundle rewritten in place.
              version={`${item.version}|${rev ?? 0}`}
              colliders={colliders ?? []}
              onCollidersChange={(parts) => { setColliders(parts); setColliderDirty(true); }}
            />
            <ColliderBar
              doc={colliderDoc}
              parts={colliders}
              dirty={colliderDirty}
              saving={saving}
              onSave={saveColliders}
              item={item}
              readOnly={readOnly}
            />
            {!item.supported && item.error && (
              <p className="muted track-blurb unpromoted">This item did not build: {item.error}</p>
            )}
            {m.quarantine && (
              <p className="muted">quarantined: {m.quarantine.reason}</p>
            )}
            {item.editable && <PreviewImage image={asset.image} />}
          </>
        )}

        {tab === 'quality' && item.editable && (
          (() => {
            const r = review ?? {};
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
                      (fidelity {r.fidelity?.toFixed(2) ?? '—'}, pass mark {r.threshold})
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
                              {value?.toFixed(2) ?? '—'}
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
                            {done.has(name) ? 'done' : '—'}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </Field>

                <Field label="Corrections">
                  <div className="muted mono">
                    {r.corrections?.total ?? 0} / {r.corrections?.maxTotal ?? 10} used
                    {r.decision ? ` · last decision: ${r.decision}` : ''}
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
                            <td className="mono">{value == null ? '—' : value.toFixed(2)}</td>
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
            const ref = m.reference ?? {};
            const rows = [
              ['pivots', item.pivots],
              ['sockets', item.sockets],
              ['parts', item.parts],
              // Colliders are deliberately not here. They are not names on
              // sculptRuntime; they are a compound of shapes with extents,
              // listed below with the numbers that were measured off it.
              ['destruction groups', item.destructionGroups],
            ];
            const stat = (v) => (v == null ? '—' : v.toLocaleString());
            return (
              <>
                <Field label="Physics compound">
                  {!(colliders ?? []).length ? (
                    <p className="muted">
                      No compound. Nothing can be walked into or stood on until one is derived.
                    </p>
                  ) : (
                    <table>
                      <thead>
                        <tr><th>part</th><th>shape</th><th>centre (m)</th><th>size (m)</th></tr>
                      </thead>
                      <tbody>
                        {colliders.map((p, i) => (
                          <tr key={`${p.name}-${i}`}>
                            <td className="mono">{p.name}</td>
                            <td>{p.type}{p.isTrigger ? ' · trigger' : ''}</td>
                            <td className="mono">{p.offset.map((n) => n.toFixed(2)).join(', ')}</td>
                            <td className="mono">
                              {p.scale.map((n) => (n * 2).toFixed(2)).join(' × ')}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                  <p className="collider-note">
                    source: {item.collidersSource ?? 'none'}
                    {colliderDoc?.selfCheck?.samples != null && (
                      <> · measured over {colliderDoc.selfCheck.samples} down-rays · coverage{' '}
                      {colliderDoc.selfCheck.coverage} · p95 {colliderDoc.selfCheck.p95AbsDelta} m ·
                      max {colliderDoc.selfCheck.maxAbsDelta} m · ledges {colliderDoc.ledgesPreserved}</>
                    )}
                  </p>
                </Field>

                <Field label="Runtime hierarchy — what the installer's probe found on the built root">
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
                            <td className="mono muted">{v?.length ? v.join(', ') : '—'}</td>
                          </tr>
                        ))}
                        <tr><td>animated</td><td className="mono muted">{item.animated ? 'yes' : 'no'}</td></tr>
                        {item.tslUsed?.length > 0 && (
                          <tr><td>three/tsl <span className="muted mono">(stubbed)</span></td><td className="mono muted">{item.tslUsed.join(', ')}</td></tr>
                        )}
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
                      {item.budgetClass ? budgetRows(item, budgetClasses).map((row) => (
                        <tr key={row.key}>
                          <td>
                            {row.label}
                            {row.overridden && (
                              <span className="muted" title="this item overrides its class"> ·  set</span>
                            )}
                          </td>
                          <td className={`mono ${row.over ? 'score-bad' : ''}`}>
                            {stat(row.measured)}
                            <span className="muted">
                              {' / '}
                              {row.limit?.toLocaleString() ?? 'unbudgeted'}
                            </span>
                          </td>
                        </tr>
                      )) : (
                        <>
                          <tr><td>triangles</td><td className="mono">{stat(item.stats?.triangles)} <span className="muted">/ no budget class set</span></td></tr>
                          <tr><td>draw calls</td><td className="mono">{stat(item.stats?.drawCalls)}</td></tr>
                          <tr><td>materials</td><td className="mono">{stat(item.stats?.materials)}</td></tr>
                          <tr><td>geometries</td><td className="mono">{stat(item.stats?.uniqueGeometries)}</td></tr>
                        </>
                      )}
                      <tr><td>vertices</td><td className="mono">{stat(item.stats?.vertices)}</td></tr>
                      {m.textures != null && <tr><td>textures</td><td className="mono">{m.textures}</td></tr>}
                      <tr>
                        <td>bundle size</td>
                        <td className="mono">
                          {item.bytes ? `${(item.bytes / 1024).toFixed(1)} KB` : '—'}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </Field>

                {item.editable && (
                  <Field label="Reference mesh (never ships)">
                    {ref.glb ? (
                      <table>
                        <tbody>
                          <tr><td>provider</td><td className="mono">{ref.provider}</td></tr>
                          <tr><td>request</td><td className="mono">{ref.requestId ?? '—'}</td></tr>
                          <tr><td>seed</td><td className="mono">{ref.seed ?? '—'}</td></tr>
                          <tr><td>file</td><td className="mono">{ref.glb}</td></tr>
                          <tr><td>compressed</td><td className="mono">{ref.compressed ? 'yes' : 'no'}</td></tr>
                        </tbody>
                      </table>
                    ) : (
                      <p className="muted">No reference mesh recorded.</p>
                    )}
                  </Field>
                )}

                <Field label="Sources">
                  <table>
                    <tbody>
                      <tr><td>pack</td><td className="mono">{item.pack} <span className="muted">@ {item.version}</span></td></tr>
                      <tr><td>bundle</td><td className="mono">{item.bundleUrl ?? '—'}</td></tr>
                      <tr><td>source dir</td><td className="mono">{item.sourceDir ?? '—'}</td></tr>
                      {item.entryStrategy && <tr><td>entry</td><td className="mono">{item.entryStrategy}</td></tr>}
                      {item.editable && <tr><td>factory</td><td className="mono">{m.source ?? '—'}</td></tr>}
                      {item.editable && <tr><td>sculpt spec</td><td className="mono">{m.spec ?? '—'}</td></tr>}
                      {item.editable && <tr><td>state</td><td className="mono">{m.state ?? '—'}</td></tr>}
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
