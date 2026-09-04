/**
 * The world box the bake will unwrap.
 *
 * "How big is the level?" has two answers in this editor, and the one the
 * lightmap cares about is neither the grid nor the camera's guess. The bake
 * lightmaps exactly the STATIC set: every placement `isStatic` says yes to,
 * merged into its cell, plus the ground tiles under them. Dynamic placements
 * are exported but lit live, and a billboard is backdrop standing kilometres
 * out -- counting it would make a 25 x 47 m map read as 5.5 km across, which
 * is precisely the mistake `groundExtent` exists to refuse.
 *
 * So this is the union of the static placements' world boxes and the ground
 * extent, and nothing else. The label it feeds reports what fell outside, so a
 * level whose box looks small is not mistaken for one whose props are missing.
 *
 * Pure: the caller supplies the world box of a placement (the editor reads it
 * off the built prototype) so the arithmetic can run under Node.
 *
 * @param doc        the level document
 * @param opts.boxOf  (placement) => { min:[x,y,z], max:[x,y,z] } | null
 * @param opts.isStatic (placement) => boolean
 * @param opts.groundBox { min, max } | null -- the ground extent as one slab, or null with no ground
 * @returns { min, max, size, footprint, counts } or null when nothing is baked
 */
export function bakeBounds(doc, { boxOf, isStatic, groundBox = null }) {
  const min = [Infinity, Infinity, Infinity];
  const max = [-Infinity, -Infinity, -Infinity];
  const counts = { static: 0, ground: 0, dynamic: 0, billboard: 0, unmeasured: 0 };
  const take = (b) => {
    for (let i = 0; i < 3; i += 1) {
      if (!Number.isFinite(b.min[i]) || !Number.isFinite(b.max[i])) return false;
    }
    for (let i = 0; i < 3; i += 1) {
      min[i] = Math.min(min[i], b.min[i]);
      max[i] = Math.max(max[i], b.max[i]);
    }
    return true;
  };

  for (const p of doc?.placements ?? []) {
    if (p.billboard && p.billboard !== 'none') { counts.billboard += 1; continue; }
    if (!isStatic(p)) { counts.dynamic += 1; continue; }
    const b = boxOf(p);
    if (!b || !take(b)) { counts.unmeasured += 1; continue; }
    counts.static += 1;
  }
  if (groundBox && take(groundBox)) counts.ground = groundBox.tiles ?? 1;

  if (!Number.isFinite(min[0])) return null;
  const size = [max[0] - min[0], max[1] - min[1], max[2] - min[2]];
  return { min, max, size, footprint: size[0] * size[2], counts };
}

/** One line for the label, in metres. */
export function describeBakeBounds(b) {
  if (!b) return 'nothing to bake';
  const m = (v) => (v >= 100 ? v.toFixed(0) : v.toFixed(1));
  const parts = [`${m(b.size[0])} × ${m(b.size[1])} × ${m(b.size[2])} m`, `${m(b.footprint)} m² footprint`];
  const what = [`${b.counts.static} static`];
  if (b.counts.ground) what.push(`${b.counts.ground} ground tile${b.counts.ground === 1 ? '' : 's'}`);
  parts.push(what.join(' + '));
  const out = [];
  if (b.counts.dynamic) out.push(`${b.counts.dynamic} dynamic`);
  if (b.counts.billboard) out.push(`${b.counts.billboard} billboard${b.counts.billboard === 1 ? '' : 's'}`);
  if (b.counts.unmeasured) out.push(`${b.counts.unmeasured} loading`);
  if (out.length) parts.push(`${out.join(', ')} outside`);
  return parts.join(' · ');
}
