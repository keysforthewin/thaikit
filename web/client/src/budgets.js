/**
 * The budget classes, fetched once and shared.
 *
 * A select that offers "small / medium / large / hero" and nothing else asks you
 * to remember four numbers per class that live in a file you are not looking at,
 * and every place a class name appeared in this UI was exactly that: a label
 * with no content. So the numbers travel with the name, everywhere it is shown.
 *
 * One in-flight request for the whole app rather than a fetch per component:
 * this is static configuration, and three components mounting at once should not
 * ask three times.
 */
import { useEffect, useState } from 'react';
import { api } from './api.js';

/** The four axes, in the order everything reports them. Mirrors scripts/lib/config.mjs. */
export const BUDGET_AXES = [
  { key: 'targetTriangles', measured: 'triangles', label: 'triangles', short: 'tris' },
  { key: 'maxDrawCalls', measured: 'drawCalls', label: 'draw calls', short: 'draws' },
  { key: 'maxMaterials', measured: 'materials', label: 'materials', short: 'mats' },
  { key: 'maxUniqueGeometries', measured: 'uniqueGeometries', label: 'geometries', short: 'geos' },
];

let pending = null;
let cached = null;

function fetchBudgets() {
  if (cached) return Promise.resolve(cached);
  pending ??= api
    .meta()
    .then((meta) => {
      cached = meta.budgetClasses ?? {};
      return cached;
    })
    .catch(() => ({}));
  return pending;
}

export function useBudgetClasses() {
  const [classes, setClasses] = useState(cached ?? null);
  useEffect(() => {
    let live = true;
    fetchBudgets().then((c) => { if (live) setClasses(c); });
    return () => { live = false; };
  }, []);
  return classes;
}

const compact = (n) => (n >= 1000 ? `${(n / 1000).toFixed(n % 1000 ? 1 : 0)}k` : String(n));

/** `medium — 2k tris · 2 draws · 2 mats · 2 geos`. The full label, for a select. */
export function describeClass(name, budget) {
  if (!budget) return name;
  const parts = BUDGET_AXES.filter(({ key }) => budget[key] != null).map(
    ({ key, short }) => `${compact(budget[key])} ${short}`,
  );
  return parts.length ? `${name} — ${parts.join(' · ')}` : name;
}

/** `2k tris`. Just the headline number, for a grid tile with no room. */
export function describeClassBriefly(name, budget) {
  if (!budget?.targetTriangles) return name;
  return `${name} · ${compact(budget.targetTriangles)} tris`;
}

/**
 * Measured cost against the resolved ceiling, one row per axis.
 *
 * `over` is what colours a row red; a null ceiling is reported as unbudgeted
 * rather than passed, because absence means "not budgeted", never "budget zero".
 */
export function budgetRows(asset, classes) {
  const base = classes?.[asset.budgetClass] ?? {};
  // Either shape: an asset record (`asset.targetTriangles`, `asset.model.triangles`)
  // or a catalogue item (`asset.budget.targetTriangles`, `asset.stats.triangles`).
  const model = asset.model ?? asset.stats ?? {};
  return BUDGET_AXES.map(({ key, measured, label }) => {
    const own = asset[key] ?? asset.budget?.[key] ?? null;
    const limit = own ?? base[key] ?? null;
    const value = model[measured] ?? null;
    return {
      key,
      label,
      limit,
      measured: value,
      /** True only when the asset overrides its class -- worth showing as such. */
      overridden: own != null,
      over: limit != null && value != null && value > limit,
    };
  });
}
