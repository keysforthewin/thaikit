import { useState } from 'react';
import { api } from './api.js';
import { describeClass, useBudgetClasses } from './budgets.js';

const CATEGORIES = [
  'street-furniture', 'vendor', 'food', 'signage', 'vehicle', 'utility',
  'lighting', 'container', 'vegetation', 'religious', 'building-part',
];

export function CreateDialog({ onClose, onCreated }) {
  const budgetClasses = useBudgetClasses();
  const [form, setForm] = useState({
    name: '', category: 'street-furniture', description: '',
    texture: '', w: 0.4, h: 0.5, d: 0.4, budgetClass: 'medium', subject: 'prop',
  });
  const [error, setError] = useState(null);
  const [busy, setBusy] = useState(false);

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    try {
      const created = await api.create({
        name: form.name,
        category: form.category,
        description: form.description,
        budgetClass: form.budgetClass,
        subject: form.subject,
        prompts: { image: form.description || form.name, texture: form.texture },
        scale: { declared: { w: +form.w, h: +form.h, d: +form.d } },
      });
      onCreated(created.id);
    } catch (err) {
      setError(err.issues?.map((i) => `${i.path}: ${i.message}`).join('; ') ?? err.message);
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="drawer" style={{ width: 'min(560px, 100%)' }}>
      <header>
        <button type="button" onClick={onClose}>cancel</button>
        <strong>New asset</strong>
      </header>
      <form className="content" onSubmit={submit}>
        {error && <div className="banner">{error}</div>}
        <div className="field">
          <label>Name</label>
          <input required value={form.name} onChange={set('name')} placeholder="Som Tam Cart" />
        </div>
        <div className="field">
          <label>Category</label>
          <select value={form.category} onChange={set('category')}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="field">
          <label>Description — this becomes the reference image prompt. Describe the object only.</label>
          <textarea value={form.description} onChange={set('description')}
            placeholder="Glass-fronted papaya salad cart on bicycle wheels, blue tarp roof" />
        </div>
        <div className="field">
          <label>Materials and wear</label>
          <textarea value={form.texture} onChange={set('texture')}
            placeholder="weathered stainless steel, sun-bleached blue tarp" />
        </div>
        <div className="field">
          <label>Declared real-world size in metres (w / h / d)</label>
          <div className="row" style={{ gridTemplateColumns: '1fr 1fr 1fr' }}>
            {['w', 'h', 'd'].map((k) => (
              <input key={k} type="number" step="0.01" required value={form[k]} onChange={set(k)} />
            ))}
          </div>
        </div>
        <div className="row">
          <div className="field">
            <label>Budget class</label>
            {/* The ceilings ride in the label. Choosing a class blind is choosing
                four numbers you cannot see. */}
            <select value={form.budgetClass} onChange={set('budgetClass')}>
              {Object.keys(budgetClasses ?? {}).map((c) => (
                <option key={c} value={c}>{describeClass(c, budgetClasses?.[c])}</option>
              ))}
            </select>
          </div>
          <div className="field">
            {/* Selects the reconstruction profile, so it is worth getting right up front. */}
            <label>Subject</label>
            <select value={form.subject} onChange={set('subject')}>
              {['prop', 'animal', 'character'].map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
        </div>
        <button className="primary" type="submit" disabled={busy}>
          {busy ? 'creating…' : 'create asset'}
        </button>
      </form>
    </div>
  );
}
