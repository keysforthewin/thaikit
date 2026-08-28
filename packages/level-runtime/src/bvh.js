import * as THREE from 'three';
import { MeshBVH, acceleratedRaycast, computeBoundsTree, disposeBoundsTree } from 'three-mesh-bvh';

THREE.BufferGeometry.prototype.computeBoundsTree = computeBoundsTree;
THREE.BufferGeometry.prototype.disposeBoundsTree = disposeBoundsTree;
THREE.Mesh.prototype.raycast = acceleratedRaycast;

/**
 * One BVH per lod0 mesh, built lazily the first time a cell is raycast, with
 * a cell-bounds prefilter so a hitscan across the map tests a handful of
 * cells rather than every triangle.
 */
export class LevelRaycaster {
  constructor(cells) {
    this.cells = cells;
    this.raycaster = new THREE.Raycaster();
    this.raycaster.firstHitOnly = true;
  }

  #prepare(cell) {
    if (cell.bvhReady) return;
    cell.tiers[0]?.traverse((o) => {
      if (o.isMesh && !o.geometry.boundsTree) o.geometry.boundsTree = new MeshBVH(o.geometry);
    });
    cell.bvhReady = true;
  }

  /** Nearest hit along a ray against static lod0 geometry, or null. */
  raycast(ray, { far = Infinity } = {}) {
    this.raycaster.ray.copy(ray);
    this.raycaster.far = far;
    let best = null;
    for (const cell of this.cells.cells) {
      if (!ray.intersectsBox(cell.bounds)) continue;
      this.#prepare(cell);
      const tier = cell.tiers[0];
      if (!tier) continue;
      const hits = this.raycaster.intersectObject(tier, true);
      const hit = hits.find((h) => h.object.isMesh);
      if (hit && (!best || hit.distance < best.distance)) best = hit;
    }
    return best;
  }
}
