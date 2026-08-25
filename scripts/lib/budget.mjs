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
 * `collider: 'none'` is a real declaration too -- a prop nothing collides with --
 * so a model that ships colliders anyway is reported rather than waved through.
 */
export function runtimeVerdict(asset, runtime) {
  const declared = [...(asset.destructionGroups ?? [])].sort();
  const built = [...(runtime?.destructionGroups ?? [])].sort();
  const missing = declared.filter((g) => !built.includes(g));
  const extra = built.filter((g) => !declared.includes(g));

  const wantsCollider = (asset.collider ?? 'box') !== 'none';
  const colliderCount = runtime?.colliders?.length ?? 0;

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
  if (wantsCollider && colliderCount === 0) {
    problems.push(
      `collider is "${asset.collider}" but the model exposes none — nothing can be walked ` +
        'into or shot at until a component carries actionProfile.collider',
    );
  }
  if (!wantsCollider && colliderCount > 0) {
    problems.push(
      `collider is "none" but the model exposes ${colliderCount} — set the asset's collider ` +
        'to the shape it actually uses, or remove them from the spec',
    );
  }

  return { declared, built, missing, extra, colliderCount, problems, ok: problems.length === 0 };
}
