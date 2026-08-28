/**
 * Compare what a built model actually costs against what its class allows.
 *
 * The four axes are separate costs and none of them substitutes for another:
 * triangles are rasterisation, draw calls are CPU submissions per frame,
 * materials are shader and render-state switches, and unique geometries are
 * VRAM plus upload. A prop can sit at a third of its triangle budget and still
 * be the thing that costs a low-end GPU its frame, which is what an oil drum
 * built as seven meshes was.
 *
 * The numbers arrive here from two directions that must agree: img2threejs
 * counts them off the SPEC before any code exists, and render-model.mjs
 * measures them off the CONSTRUCTED SCENE. This module only ever reads the
 * measured side -- a spec that promised two draw calls and a factory that emits
 * seven is exactly the disagreement worth catching.
 */
import { BUDGET_AXES, resolveBudget } from './config.mjs';

export { BUDGET_AXES, resolveBudget };

/**
 * One row per axis: the ceiling, what was measured, and whether it fits.
 *
 * An axis with no ceiling is `over: false` and reported as unbudgeted rather
 * than silently passed -- absence means "not budgeted", never "budget zero".
 */
export function budgetVerdict(budget, stats) {
  const axes = BUDGET_AXES.map(({ key, measured, label }) => {
    const limit = budget?.[key] ?? null;
    const value = stats?.[measured] ?? null;
    return {
      key,
      label,
      limit,
      measured: value,
      over: limit != null && value != null && value > limit,
      /** How much of the ceiling this axis uses. Null when either side is missing. */
      ratio: limit != null && value != null && limit > 0 ? value / limit : null,
    };
  });
  return { axes, over: axes.filter((a) => a.over), ok: !axes.some((a) => a.over) };
}

/** `4 draw calls / 2` — one axis, in the form both the log and the error use. */
export function formatAxis(axis) {
  if (axis.measured == null) return `${axis.label} unmeasured`;
  if (axis.limit == null) return `${axis.measured} ${axis.label} (unbudgeted)`;
  return `${axis.measured} ${axis.label} / ${axis.limit}`;
}

/**
 * The sentence a human reads when a prop is over budget.
 *
 * Names the lever rather than the number: "3 materials / 2" tells you nothing
 * you can act on, and the two things that actually move these axes -- folding
 * components that share a material, and instancing a repeated part -- are not
 * obvious from a factory you did not write.
 */
const REMEDY = {
  targetTriangles:
    'lower the tessellation tier, or decimate the components that carry the excess',
  maxDrawCalls:
    'fold components that share a material into one, or move a repeated part into ' +
    'repetitionSystems so it draws as a single InstancedMesh',
  maxMaterials:
    'a colour difference is not a material difference -- two parts that differ only ' +
    'in albedo want one material and a vertex-colour or texture-region split',
  maxUniqueGeometries:
    'reuse one geometry across repeated parts through repetitionSystems rather than ' +
    'building a separate primitive for each',
};

export function overBudgetMessage(verdict) {
  return verdict.over
    .map((axis) => `${formatAxis(axis)} — ${REMEDY[axis.key] ?? 'reduce it'}`)
    .join('\n  ');
}

/** Resolve, measure and judge in one call. */
export async function judgeAsset(asset, stats) {
  const budget = await resolveBudget(asset);
  return { budget, ...budgetVerdict(budget, stats) };
}

/**
 * The runtime contract: what the asset SAID it exposes against what it built.
 *
 * Separate from the scene budget on purpose. A budget is a ceiling and being
 * under it is always fine; this is an equality check, and both directions are a
 * defect. A crate that declares `lid, body` and ships one group did not come
 * apart; a drum that declares nothing and ships three has invented a mechanism
 * nobody asked for, and every one of those groups is contract a consumer may now
 * rely on.
 *
 * Colliders used to be checked here too, against a declared `collider` word on
 * the asset. They are not any more: the compound lives in assets/<id>/colliders.json
 * and is judged by colliderVerdict() below, on measurements rather than on a count.
 */
export function runtimeVerdict(asset, runtime) {
  const declared = [...(asset.destructionGroups ?? [])].sort();
  const built = [...(runtime?.destructionGroups ?? [])].sort();
  const missing = declared.filter((g) => !built.includes(g));
  const extra = built.filter((g) => !declared.includes(g));

  const problems = [];
  if (missing.length) {
    problems.push(
      `destruction groups declared but not built: ${missing.join(', ')} — the prop does ` +
        'not come apart the way its entry says it does',
    );
  }
  if (extra.length) {
    problems.push(
      `destruction groups built but not declared: ${extra.join(', ')} — either add them to ` +
        'the asset, or drop them from the spec; an undeclared group is contract nobody asked for',
    );
  }
  return { declared, built, missing, extra, problems, ok: problems.length === 0 };
}

/**
 * How many collider parts a prop of this class may carry.
 *
 * A compound is only cheap while it is small. Every part is a shape the broad
 * phase tests and the narrow phase may have to resolve, and a dynamic body pays
 * for all of them every frame -- which is why a kickable prop gets half the
 * ceiling of a static one it would otherwise share a class with.
 */
export function colliderPartCeiling(asset) {
  const byClass = { small: 2, medium: 4, large: 8, hero: 8, hero2x: 8, hero4x: 8, hero8x: 8 };
  const base = byClass[asset.budgetClass] ?? 4;
  return asset.physics?.enabled ? Math.max(1, Math.floor(base / 2)) : base;
}

/**
 * Whether the derived compound is fit to ship.
 *
 * The system this replaced could only count colliders, so "this prop has a
 * physics proxy" and "you can stand on this prop's roof" were the same
 * assertion. They are not. `coverage` is the fraction of down-rays that hit the
 * real geometry and also hit the compound -- anything missing is the player
 * falling through the model -- and `maxLedgeError` is how wrong the floor is
 * underfoot in metres. Both are measured by derive-colliders.mjs, and a summary
 * with neither of them present has not been measured at all.
 */
export function colliderVerdict(asset) {
  const c = asset.model?.colliders ?? {};
  const ceiling = colliderPartCeiling(asset);
  const problems = [];

  if (!c.file || !c.parts) {
    problems.push(
      'no derived compound — run scripts/derive-colliders.mjs, or pass --allow-no-colliders ' +
        'for a prop nothing should ever collide with',
    );
    return { parts: 0, ceiling, problems, ok: false };
  }
  if (c.parts > ceiling) {
    problems.push(
      `${c.parts} collider parts against a ceiling of ${ceiling} for a ${asset.budgetClass} ` +
        `prop${asset.physics?.enabled ? ' that is a dynamic body' : ''} — lower --max-parts, ` +
        'or merge the layers that are not carrying a ledge',
    );
  }
  if (c.measurementSkipped) {
    // A zero-thickness skyline billboard has nothing to cast a ray at. Stating
    // the reason is the point: this is a decision on the record, not a gate
    // somebody stepped over with a flag.
    return { parts: c.parts, ceiling, coverage: null, skipped: c.measurementSkipped, problems, ok: problems.length === 0 };
  }
  if (c.coverage === null || c.overshoot === null) {
    problems.push(
      'the compound carries no self-check — a proxy nobody measured is the shape of the ' +
        'system this replaced; run derive-colliders.mjs --measure to record coverage and ' +
        'overshoot for the shape that is there',
    );
  } else {
    // 0.95, not the 0.99 a hole in the middle would demand. Measured across the
    // kit, 27 of 99 props sit under 0.99 and they are the ROUNDED ones -- the soi
    // dog at 0.745, the fighting cock at 0.850, four vehicles in the 0.92s. An
    // axis-aligned box cover of a curved silhouette leaves a thin RIM uncovered
    // at the outline: a player stopping a few centimetres early, not a player
    // falling through. A real hole shows up far below this.
    if (c.coverage < 0.95) {
      problems.push(
        `coverage ${c.coverage.toFixed(3)} is under 0.95 — that fraction of the prop's ` +
          'footprint has no collider over it. On a rounded prop that is the rim of the ' +
          'silhouette and a sphere or capsule part fixes it; anywhere else it is a hole ' +
          'a player falls through',
      );
    }
    // Overshoot, not maxLedgeError. Gating on the max failed 69 of 100 props on
    // artefacts two samples wide -- the same mistake as reporting a max alone.
    // This is the fraction of the footprint where a player would stand more than
    // a step height above the visible surface, and its median across the kit is
    // 0.009. The tail is the monumental props, where a tapering spire in eight
    // boxes overshoots nearly everywhere and the answer is a hand edit.
    if (c.overshoot > 0.15) {
      problems.push(
        `${(c.overshoot * 100).toFixed(0)}% of the footprint stands more than the 0.30 m step ` +
          'height above the real surface — the player floats there. Raise --max-parts so the ' +
          'taper gets more layers, or place the parts by hand',
      );
    }
  }

  return {
    parts: c.parts,
    ceiling,
    coverage: c.coverage,
    overshoot: c.overshoot,
    problems,
    ok: problems.length === 0,
  };
}
