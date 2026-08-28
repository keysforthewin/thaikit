import * as THREE from 'three';

export const CASTER_LAYER = 7;

const _box = new THREE.Box3();
const _v = new THREE.Vector3();

/**
 * The cells and their tiers, switched by distance from the camera to the
 * cell's BOX (not its centre, so a long building does not pop at one end).
 * Never THREE.LOD: its per-object test would fight the merged nodes.
 *
 * lod2 doubles as the shadow caster: it is always visible but on the caster
 * layer only, so the shadow camera sees it and the main camera does not.
 */
export class CellSet {
  constructor(manifest, root) {
    this.manifest = manifest;
    this.cells = [];
    this.distances = manifest.lod.distances;
    this.hysteresis = manifest.lod.hysteresis ?? 0;
    this.frame = 0;
    this.every = 3;
    for (const c of manifest.cells.list) {
      const node = root.getObjectByName(`cell_${c.ix}_${c.iz}`);
      if (!node) continue;
      const tiers = ['lod0', 'lod1', 'lod2'].map((n) => node.getObjectByName(n) ?? null);
      const bounds = new THREE.Box3(new THREE.Vector3().fromArray(c.bounds.min), new THREE.Vector3().fromArray(c.bounds.max));
      const cell = { key: c.key, node, tiers, bounds, tier: 0, info: c };
      this.cells.push(cell);
      this.#apply(cell);
    }
  }

  #apply(cell) {
    cell.tiers.forEach((t, i) => {
      if (!t) return;
      if (i === 2) {
        // Caster tier: always rendered into shadow maps, drawn by the camera only when it is the active tier.
        t.visible = true;
        t.traverse((o) => {
          if (!o.isMesh) return;
          o.layers.set(cell.tier === 2 ? 0 : CASTER_LAYER);
          if (cell.tier === 2) o.layers.enable(CASTER_LAYER);
          o.castShadow = true;
          o.receiveShadow = cell.tier === 2;
        });
      } else {
        t.visible = cell.tier === i;
      }
    });
  }

  /** Force a tier on every cell (-1 restores distance switching). */
  forceTier(tier) {
    this.forced = tier;
    for (const c of this.cells) { c.tier = tier < 0 ? c.tier : tier; this.#apply(c); }
  }

  update(cameraPosition) {
    if ((this.frame++ % this.every) !== 0 || this.forced >= 0) return;
    const [d1, d2] = this.distances;
    const h = this.hysteresis;
    for (const c of this.cells) {
      const d = Math.sqrt(_box.copy(c.bounds).distanceToPoint(cameraPosition) ** 2);
      let tier = c.tier;
      if (tier === 0 && d > d1 + h) tier = 1;
      else if (tier === 1 && d < d1 - h) tier = 0;
      else if (tier === 1 && d > d2 + h) tier = 2;
      else if (tier === 2 && d < d2 - h) tier = 1;
      if (tier !== c.tier) { c.tier = tier; this.#apply(c); }
    }
    void _v;
  }
}
