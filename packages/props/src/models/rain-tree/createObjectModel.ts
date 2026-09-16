/*! EZ-Tree (MIT), pinned source.
MIT License

Copyright (c) 2024 Daniel Greenheck

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

*/
// scripts/foliage/factory.ts
import * as THREE4 from "three";
import { mergeGeometries } from "three/examples/jsm/utils/BufferGeometryUtils.js";

// scripts/foliage/vendor/ez-tree/tree.js
import * as THREE3 from "three";

// scripts/foliage/vendor/ez-tree/rng.js
var RNG = class {
  m_w = 123456789;
  m_z = 987654321;
  mask = 4294967295;
  constructor(seed) {
    this.m_w = 123456789 + seed & this.mask;
    this.m_z = 987654321 - seed & this.mask;
  }
  /**
   * Returns a random number between min and max
   */
  random(max = 1, min = 0) {
    this.m_z = 36969 * (this.m_z & 65535) + (this.m_z >> 16) & this.mask;
    this.m_w = 18e3 * (this.m_w & 65535) + (this.m_w >> 16) & this.mask;
    let result = (this.m_z << 16) + (this.m_w & 65535) >>> 0;
    result /= 4294967296;
    return (max - min) * result + min;
  }
};

// scripts/foliage/vendor/ez-tree/branch.js
import * as THREE from "three";
var Branch = class {
  /**
   * Generates a new branch
   * @param {THREE.Vector3} origin The starting point of the branch
   * @param {THREE.Euler} orientation The starting orientation of the branch
   * @param {number} length The length of the branch
   * @param {number} radius The radius of the branch at its starting point
   */
  constructor(origin = new THREE.Vector3(), orientation = new THREE.Euler(), length = 0, radius = 0, level = 0, sectionCount = 0, segmentCount = 0) {
    this.origin = origin.clone();
    this.orientation = orientation.clone();
    this.length = length;
    this.radius = radius;
    this.level = level;
    this.sectionCount = sectionCount;
    this.segmentCount = segmentCount;
  }
};

// scripts/foliage/vendor/ez-tree/enums.js
var Billboard = {
  Single: "single",
  Double: "double"
};
var TreeType = {
  Deciduous: "deciduous",
  Evergreen: "evergreen"
};

// scripts/foliage/vendor/ez-tree/options.js
var TreeOptions = class {
  constructor() {
    this.seed = 0;
    this.type = TreeType.Deciduous;
    this.bark = {
      // Informational identifier carried through presets. The library does not
      // consume this field; the host app uses it to resolve which texture set
      // to assign to `maps` below.
      type: "Bark001",
      // Texture maps supplied by the caller. Each entry is a THREE.Texture or
      // null. When `textured` is true, non-null maps are applied to the
      // material; null maps fall back to the tint color for that channel.
      maps: {
        color: null,
        ao: null,
        normal: null,
        roughness: null
      },
      // Tint of the tree trunk
      tint: 16777215,
      // Use face normals for shading instead of vertex normals
      flatShading: false,
      // Apply texture to bark
      textured: true,
      // Scale for the texture
      textureScale: { x: 1, y: 1 }
    };
    this.branch = {
      // Number of branch recursion levels. 0 = trunk only
      levels: 3,
      // Angle of the child branches relative to the parent branch (degrees)
      angle: {
        1: 70,
        2: 60,
        3: 60
      },
      // Number of children per branch level
      children: {
        0: 7,
        1: 7,
        2: 5
      },
      // External force encouraging tree growth in a particular direction
      force: {
        direction: { x: 0, y: 1, z: 0 },
        strength: 0.01
      },
      // Amount of curling/twisting at each branch level
      gnarliness: {
        0: 0.15,
        1: 0.2,
        2: 0.3,
        3: 0.02
      },
      // Length of each branch level
      length: {
        0: 20,
        1: 20,
        2: 10,
        3: 1
      },
      // Radius of each branch level
      radius: {
        0: 1.5,
        1: 0.7,
        2: 0.7,
        3: 0.7
      },
      // Number of sections per branch level
      sections: {
        0: 12,
        1: 10,
        2: 8,
        3: 6
      },
      // Number of radial segments per branch level
      segments: {
        0: 8,
        1: 6,
        2: 4,
        3: 3
      },
      // Defines where child branches start forming on the parent branch
      start: {
        1: 0.4,
        2: 0.3,
        3: 0.3
      },
      // Taper at each branch level
      taper: {
        0: 0.7,
        1: 0.7,
        2: 0.7,
        3: 0.7
      },
      // Amount of twist at each branch level
      twist: {
        0: 0,
        1: 0,
        2: 0,
        3: 0
      }
    };
    this.leaves = {
      // Informational identifier (e.g. 'oak', 'ash'). Library does not consume
      // it; the host app uses it to resolve which texture to assign to `map`.
      type: "oak",
      // Color map supplied by the caller. THREE.Texture or null.
      // When null, leaves render as a flat tinted quad.
      map: null,
      // Whether to use single or double/perpendicular billboards
      billboard: Billboard.Double,
      // Angle of leaves relative to parent branch (degrees)
      angle: 10,
      // Number of leaves
      count: 1,
      // Where leaves start to grow on the length of the branch (0 to 1)
      start: 0,
      // Size of the leaves
      size: 2.5,
      // Variance in leaf size between each instance
      sizeVariance: 0.7,
      // Tint color for the leaves
      tint: 16777215,
      // Controls transparency of leaf texture
      alphaTest: 0.5,
      // Calculates custom normals to imply a rounded canopy shape
      roundedNormals: true
    };
    this.trellis = {
      // Whether trellis is enabled
      enabled: false,
      // Position of trellis (z is distance from tree)
      position: { x: 0, y: 0, z: -2 },
      // Width of trellis grid (X direction)
      width: 10,
      // Height of trellis grid (Y direction)
      height: 20,
      // Distance between grid lines
      spacing: 2,
      // Force parameters
      force: {
        // How strongly branches bend toward trellis
        strength: 0.02,
        // Maximum distance at which trellis affects branches
        maxDistance: 3,
        // Distance falloff exponent (1 = linear, 2 = quadratic)
        falloff: 1
      },
      // Radius of trellis cylinders
      cylinderRadius: 0.05,
      // Whether to show trellis geometry
      visible: true,
      // Color of trellis
      color: 9127187
    };
  }
  /**
   * Copies the values from source into this object
   * @param {TreeOptions} source
   */
  copy(source, target = this) {
    for (let key in source) {
      if (source.hasOwnProperty(key) && target.hasOwnProperty(key)) {
        const value = source[key];
        if (value !== null && typeof value === "object" && value.constructor === Object) {
          this.copy(value, target[key]);
        } else {
          target[key] = value;
        }
      }
    }
  }
};

// scripts/foliage/vendor/ez-tree/trellis.js
import * as THREE2 from "three";
var Trellis = class extends THREE2.Group {
  /**
   * @param {Object} options Trellis configuration
   */
  constructor(options) {
    super();
    this.name = "Trellis";
    this.options = options;
    this.material = null;
    this.hCylinderGeo = null;
    this.vCylinderGeo = null;
  }
  /**
   * Generate the trellis geometry
   */
  generate() {
    const t = this.options;
    this.dispose();
    this.material = new THREE2.MeshStandardMaterial({
      color: t.color,
      roughness: 0.8
    });
    this.hCylinderGeo = new THREE2.CylinderGeometry(
      t.cylinderRadius,
      t.cylinderRadius,
      t.width,
      8
    );
    this.hCylinderGeo.rotateZ(Math.PI / 2);
    this.vCylinderGeo = new THREE2.CylinderGeometry(
      t.cylinderRadius,
      t.cylinderRadius,
      t.height,
      8
    );
    const hLineCount = Math.floor(t.height / t.spacing) + 1;
    for (let i = 0; i < hLineCount; i++) {
      const y = i * t.spacing;
      const mesh = new THREE2.Mesh(this.hCylinderGeo, this.material);
      mesh.position.set(t.position.x, t.position.y + y, t.position.z);
      this.add(mesh);
    }
    const vLineCount = Math.floor(t.width / t.spacing) + 1;
    for (let i = 0; i < vLineCount; i++) {
      const x = -t.width / 2 + i * t.spacing;
      const mesh = new THREE2.Mesh(this.vCylinderGeo, this.material);
      mesh.position.set(t.position.x + x, t.position.y + t.height / 2, t.position.z);
      this.add(mesh);
    }
  }
  /**
   * Find the nearest point on the trellis grid to a given position
   * @param {THREE.Vector3} position
   * @returns {THREE.Vector3}
   */
  getNearestPoint(position) {
    const t = this.options;
    const trellisX = t.position.x;
    const trellisY = t.position.y;
    const trellisZ = t.position.z;
    const minX = trellisX - t.width / 2;
    const maxX = trellisX + t.width / 2;
    const minY = trellisY;
    const maxY = trellisY + t.height;
    const clampedX = Math.max(minX, Math.min(maxX, position.x));
    const clampedY = Math.max(minY, Math.min(maxY, position.y));
    const nearestHLineY = Math.round((clampedY - minY) / t.spacing) * t.spacing + minY;
    const finalHLineY = Math.max(minY, Math.min(maxY, nearestHLineY));
    const nearestVLineX = Math.round((clampedX - minX) / t.spacing) * t.spacing + minX;
    const finalVLineX = Math.max(minX, Math.min(maxX, nearestVLineX));
    const pointOnHLine = new THREE2.Vector3(clampedX, finalHLineY, trellisZ);
    const pointOnVLine = new THREE2.Vector3(finalVLineX, clampedY, trellisZ);
    const distH = position.distanceTo(pointOnHLine);
    const distV = position.distanceTo(pointOnVLine);
    return distH < distV ? pointOnHLine : pointOnVLine;
  }
  /**
   * Clean up geometry and materials
   */
  dispose() {
    this.children.forEach((child) => {
      if (child.geometry) {
        child.geometry = null;
      }
    });
    this.clear();
    if (this.hCylinderGeo) {
      this.hCylinderGeo.dispose();
      this.hCylinderGeo = null;
    }
    if (this.vCylinderGeo) {
      this.vCylinderGeo.dispose();
      this.vCylinderGeo = null;
    }
    if (this.material) {
      this.material.dispose();
      this.material = null;
    }
  }
};

// scripts/foliage/vendor/ez-tree/tree.js
var loadPreset = () => {
  throw new Error("Use the checked-in ThaiKit species recipe");
};
var Tree = class _Tree extends THREE3.Group {
  /**
   * @type {RNG}
   */
  rng;
  /**
   * @type {TreeOptions}
   */
  options;
  /**
   * @type {Branch[]}
   */
  branchQueue = [];
  /**
   * @param {TreeOptions} params
   */
  constructor(options = new TreeOptions()) {
    super();
    this.name = "Tree";
    this.branchesMesh = new THREE3.Mesh();
    this.leavesMesh = new THREE3.Mesh();
    this.trellisMesh = null;
    this.lod = null;
    this.skeleton = null;
    this.add(this.branchesMesh);
    this.add(this.leavesMesh);
    this.options = options;
  }
  update(elapsedTime) {
    const leafShader = this.leavesMesh.material.userData.shader;
    if (leafShader) {
      leafShader.uniforms.uTime.value = elapsedTime;
    }
  }
  /**
   * Loads a preset tree from JSON
   * @param {string} preset
   */
  loadPreset(name) {
    const json = loadPreset(name);
    this.loadFromJson(json);
  }
  /**
   * Loads a tree from JSON
   * @param {TreeOptions} json
   */
  loadFromJson(json) {
    this.options.copy(json);
    this.generate();
  }
  /**
   * @typedef {Object} LODDetail
   * @property {number} [sectionStride=1] Sample every Nth section ring; the
   *   first and last rings are always kept so branch endpoints stay put
   * @property {number} [segmentFactor=1] Radial segment multiplier;
   *   segments = max(3, round(segmentCount * segmentFactor))
   * @property {number} [leafStride=1] Keep every Nth leaf
   * @property {number} [leafScale=1] Size multiplier for the kept leaves,
   *   typically 1/sqrt(kept fraction) to preserve canopy coverage
   * @property {string} [billboard] Billboard mode override for this level
   *   ('single' or 'double'); defaults to options.leaves.billboard
   */
  /**
   * @typedef {Object} LODLevel
   * @property {number} distance Camera distance at which this level activates
   * @property {number} [hysteresis] Switch hysteresis as a fraction of distance
   * @property {LODDetail} [detail] Meshing detail for this level
   */
  /**
   * Default levels for generateLODs(). LOD1 is roughly 40% of the full
   * triangle count, LOD2 roughly 20%.
   * @type {LODLevel[]}
   */
  static defaultLODLevels = [
    { distance: 0, detail: {} },
    {
      distance: 100,
      hysteresis: 0.05,
      detail: {
        sectionStride: 3,
        segmentFactor: 0.75,
        leafStride: 2,
        // Slightly under the area-preserving sqrt(2): individual leaves are
        // still resolvable at this distance, so a full compensation reads as
        // "bigger leaves" rather than "same canopy".
        leafScale: 1.25
      }
    },
    {
      distance: 250,
      hysteresis: 0.05,
      detail: {
        sectionStride: 6,
        segmentFactor: 0.4,
        leafStride: 2,
        // Deliberately under-compensated: full coverage compensation for the
        // thinning + single billboard would need 2x scale, which reads as
        // balloon leaves. A slightly sparser canopy with natural-size leaves
        // looks better at this distance (fogged, 250+ units in the demo).
        leafScale: 1.3,
        billboard: Billboard.Single
      }
    }
  ];
  /**
   * Generate a new tree
   */
  generate() {
    this.#clearLOD();
    this.#generateSkeleton();
    const buffers = this.#meshSkeleton();
    this.branches = buffers.branches;
    this.leaves = buffers.leaves;
    this.createBranchesGeometry();
    this.createLeavesGeometry();
    this.createTrellis();
  }
  /**
   * Generates the tree as a set of levels of detail hosted in a THREE.LOD
   * object inside this group. The renderer switches levels automatically
   * based on camera distance. All levels share one bark and one leaf
   * material, so update() animates wind at every level.
   * @param {LODLevel[]} levels Level descriptors, in any order
   */
  generateLODs(levels = _Tree.defaultLODLevels) {
    this.#clearLOD();
    this.#generateSkeleton();
    const barkMaterial = this.#createBarkMaterial();
    const leafMaterial = this.#createLeafMaterial();
    this.lod = new THREE3.LOD();
    this.lod.name = "TreeLOD";
    const ordered = [...levels].sort(
      (a, b) => (a.distance ?? 0) - (b.distance ?? 0)
    );
    ordered.forEach((level, index) => {
      const buffers = this.#meshSkeleton(level.detail ?? {});
      let branchesMesh, leavesMesh;
      if (index === 0) {
        this.branches = buffers.branches;
        this.leaves = buffers.leaves;
        branchesMesh = this.branchesMesh;
        leavesMesh = this.leavesMesh;
        branchesMesh.geometry.dispose();
        branchesMesh.material.dispose();
        leavesMesh.geometry.dispose();
        leavesMesh.material.dispose();
      } else {
        branchesMesh = new THREE3.Mesh();
        leavesMesh = new THREE3.Mesh();
      }
      branchesMesh.geometry = this.#buildBufferGeometry(buffers.branches);
      branchesMesh.material = barkMaterial;
      leavesMesh.geometry = this.#buildBufferGeometry(buffers.leaves);
      leavesMesh.material = leafMaterial;
      for (const mesh of [branchesMesh, leavesMesh]) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
      const group = new THREE3.Group();
      group.add(branchesMesh, leavesMesh);
      this.lod.addLevel(group, level.distance ?? 0, level.hysteresis ?? 0);
    });
    this.add(this.lod);
    this.createTrellis();
  }
  /**
   * Builds branch and leaf geometry at the given detail level without
   * modifying the tree's own meshes. Useful for external instancing or
   * custom LOD systems. Reuses the current skeleton, generating one first
   * if none exists.
   * @param {LODDetail} detail
   * @returns {{ branches: THREE.BufferGeometry, leaves: THREE.BufferGeometry }}
   */
  createGeometry(detail = {}) {
    if (!this.skeleton) {
      this.#generateSkeleton();
    }
    const buffers = this.#meshSkeleton(detail);
    return {
      branches: this.#buildBufferGeometry(buffers.branches),
      leaves: this.#buildBufferGeometry(buffers.leaves)
    };
  }
  /**
   * Tears down any LOD state and restores the flat branches/leaves meshes
   * as direct children, so generate() behaves as if LODs never existed.
   */
  #clearLOD() {
    if (!this.lod) return;
    this.lod.levels.forEach((level) => {
      for (const mesh of level.object.children) {
        if (mesh === this.branchesMesh || mesh === this.leavesMesh) continue;
        mesh.geometry.dispose();
      }
    });
    this.remove(this.lod);
    this.lod = null;
    this.add(this.branchesMesh, this.leavesMesh);
  }
  /**
   * Grows the tree skeleton: the section frames of every branch and the
   * placement of every leaf. All RNG consumption happens here, so any
   * number of meshing passes can run against one skeleton without changing
   * the tree's shape.
   */
  #generateSkeleton() {
    this.skeleton = {
      branches: [],
      leaves: []
    };
    this.rng = new RNG(this.options.seed);
    this.branchQueue.push(
      new Branch(
        new THREE3.Vector3(),
        new THREE3.Euler(),
        this.options.branch.length[0],
        this.options.branch.radius[0],
        0,
        this.options.branch.sections[0],
        this.options.branch.segments[0]
      )
    );
    while (this.branchQueue.length > 0) {
      const branch = this.branchQueue.shift();
      this.#growBranch(branch);
    }
  }
  /**
   * Meshes the current skeleton into geometry buffers at the given detail.
   * Consumes no RNG, so it can run repeatedly with different detail specs.
   * @param {LODDetail} detail
   */
  #meshSkeleton(detail = {}) {
    const sectionStride = Math.max(1, Math.floor(detail.sectionStride ?? 1));
    const segmentFactor = detail.segmentFactor ?? 1;
    const leafStride = Math.max(1, Math.floor(detail.leafStride ?? 1));
    const leafScale = detail.leafScale ?? 1;
    const billboard = detail.billboard ?? this.options.leaves.billboard;
    const branches = {
      verts: [],
      normals: [],
      indices: [],
      uvs: [],
      windFactor: []
    };
    const leaves = {
      verts: [],
      normals: [],
      indices: [],
      uvs: []
    };
    for (const skeletonBranch of this.skeleton.branches) {
      this.#meshBranch(branches, skeletonBranch, sectionStride, segmentFactor);
    }
    for (let i = 0; i < this.skeleton.leaves.length; i += leafStride) {
      this.#meshLeaf(leaves, this.skeleton.leaves[i], leafScale, billboard);
    }
    return { branches, leaves };
  }
  /**
   * Grows a branch's skeleton, queueing child branches and recording leaf
   * placements. Consumes RNG in the exact order of the original interleaved
   * generator so seeds keep producing identical trees.
   * @param {Branch} branch
   * @returns
   */
  #growBranch(branch) {
    let sectionOrientation = branch.orientation.clone();
    let sectionOrigin = branch.origin.clone();
    let sectionLength = branch.length / branch.sectionCount / (this.options.type === "Deciduous" ? this.options.branch.levels - 1 : 1);
    let sections = [];
    for (let i = 0; i <= branch.sectionCount; i++) {
      let sectionRadius = branch.radius;
      if (i === branch.sectionCount && branch.level === this.options.branch.levels) {
        sectionRadius = 1e-3;
      } else if (this.options.type === TreeType.Deciduous) {
        sectionRadius *= 1 - this.options.branch.taper[branch.level] * (i / branch.sectionCount);
      } else if (this.options.type === TreeType.Evergreen) {
        sectionRadius *= 1 - i / branch.sectionCount;
      }
      sections.push({
        origin: sectionOrigin.clone(),
        orientation: sectionOrientation.clone(),
        radius: sectionRadius
      });
      sectionOrigin.add(
        new THREE3.Vector3(0, sectionLength, 0).applyEuler(sectionOrientation)
      );
      const gnarliness = Math.max(1, 1 / Math.sqrt(sectionRadius)) * this.options.branch.gnarliness[branch.level];
      sectionOrientation.x += this.rng.random(gnarliness, -gnarliness);
      sectionOrientation.z += this.rng.random(gnarliness, -gnarliness);
      const qSection = new THREE3.Quaternion().setFromEuler(sectionOrientation);
      const qTwist = new THREE3.Quaternion().setFromAxisAngle(
        new THREE3.Vector3(0, 1, 0),
        this.options.branch.twist[branch.level]
      );
      qSection.multiply(qTwist);
      const sectionUp = new THREE3.Vector3(0, 1, 0).applyQuaternion(qSection);
      const target = new THREE3.Vector3().copy(this.options.branch.force.direction).normalize();
      const axis = new THREE3.Vector3().crossVectors(sectionUp, target);
      const sinFull = axis.length();
      if (sinFull > 1e-6) {
        axis.divideScalar(sinFull);
        const fullAngle = Math.atan2(sinFull, sectionUp.dot(target));
        const step = this.options.branch.force.strength / sectionRadius;
        const clamped = Math.max(-fullAngle, Math.min(fullAngle, step));
        qSection.premultiply(
          new THREE3.Quaternion().setFromAxisAngle(axis, clamped)
        );
      }
      if (this.options.trellis.enabled) {
        const trellisResult = this.calculateTrellisForce(sectionOrigin, sectionRadius);
        if (trellisResult) {
          const qTrellis = new THREE3.Quaternion().setFromUnitVectors(
            new THREE3.Vector3(0, 1, 0),
            trellisResult.direction
          );
          qSection.rotateTowards(qTrellis, trellisResult.strength);
        }
      }
      sectionOrientation.setFromQuaternion(qSection);
    }
    this.skeleton.branches.push({
      sections,
      segmentCount: branch.segmentCount,
      baseRadius: branch.radius
    });
    if (this.options.type === "deciduous") {
      const lastSection = sections[sections.length - 1];
      if (branch.level < this.options.branch.levels) {
        this.branchQueue.push(
          new Branch(
            lastSection.origin,
            lastSection.orientation,
            this.options.branch.length[branch.level + 1],
            lastSection.radius,
            branch.level + 1,
            // Section count and segment count must be same as parent branch
            // since the child branch is growing from the end of the parent branch
            branch.sectionCount,
            branch.segmentCount
          )
        );
      } else {
        this.#recordLeaf(lastSection.origin, lastSection.orientation);
      }
    }
    if (branch.level === this.options.branch.levels) {
      this.generateLeaves(sections);
    } else if (branch.level < this.options.branch.levels) {
      this.generateChildBranches(
        this.options.branch.children[branch.level],
        branch.level + 1,
        sections
      );
    }
  }
  /**
   * Generate branches from a parent branch
   * @param {number} count The number of child branches to generate
   * @param {number} level The level of the child branches
   * @param {{
   *  origin: THREE.Vector3,
   *  orientation: THREE.Euler,
   *  radius: number
   * }[]} sections The parent branch's sections
   * @returns
   */
  generateChildBranches(count, level, sections) {
    const radialOffset = this.rng.random();
    const startMin = this.options.branch.start[level];
    const heightStep = (1 - startMin) / count;
    const angleSlots = this.shuffledIndices(count);
    for (let i = 0; i < count; i++) {
      let childBranchStart = startMin + (i + this.rng.random()) * heightStep;
      const sectionIndex = Math.floor(childBranchStart * (sections.length - 1));
      let sectionA, sectionB;
      sectionA = sections[sectionIndex];
      if (sectionIndex === sections.length - 1) {
        sectionB = sectionA;
      } else {
        sectionB = sections[sectionIndex + 1];
      }
      const alpha = (childBranchStart - sectionIndex / (sections.length - 1)) / (1 / (sections.length - 1));
      const childBranchOrigin = new THREE3.Vector3().lerpVectors(
        sectionA.origin,
        sectionB.origin,
        alpha
      );
      const childBranchRadius = this.options.branch.radius[level] * ((1 - alpha) * sectionA.radius + alpha * sectionB.radius);
      const qA = new THREE3.Quaternion().setFromEuler(sectionA.orientation);
      const qB = new THREE3.Quaternion().setFromEuler(sectionB.orientation);
      const parentOrientation = new THREE3.Euler().setFromQuaternion(
        qB.slerp(qA, alpha)
      );
      const radialJitter = this.rng.random(0.5, -0.5);
      const radialAngle = 2 * Math.PI * (radialOffset + (angleSlots[i] + radialJitter) / count);
      const q1 = new THREE3.Quaternion().setFromAxisAngle(
        new THREE3.Vector3(1, 0, 0),
        this.options.branch.angle[level] / (180 / Math.PI)
      );
      const q2 = new THREE3.Quaternion().setFromAxisAngle(
        new THREE3.Vector3(0, 1, 0),
        radialAngle
      );
      const q3 = new THREE3.Quaternion().setFromEuler(parentOrientation);
      const childBranchOrientation = new THREE3.Euler().setFromQuaternion(
        q3.multiply(q2.multiply(q1))
      );
      let childBranchLength = this.options.branch.length[level] * (this.options.type === TreeType.Evergreen ? 1 - childBranchStart : 1);
      this.branchQueue.push(
        new Branch(
          childBranchOrigin,
          childBranchOrientation,
          childBranchLength,
          childBranchRadius,
          level,
          this.options.branch.sections[level],
          this.options.branch.segments[level]
        )
      );
    }
  }
  /**
   * Logic for spawning child branches from a parent branch's section
   * @param {{
  *  origin: THREE.Vector3,
  *  orientation: THREE.Euler,
  *  radius: number
  * }[]} sections The parent branch's sections
  * @returns
  */
  generateLeaves(sections) {
    const radialOffset = this.rng.random();
    const count = this.options.leaves.count;
    const startMin = this.options.leaves.start;
    const heightStep = (1 - startMin) / count;
    const angleSlots = this.shuffledIndices(count);
    for (let i = 0; i < count; i++) {
      let leafStart = startMin + (i + this.rng.random()) * heightStep;
      const sectionIndex = Math.floor(leafStart * (sections.length - 1));
      let sectionA, sectionB;
      sectionA = sections[sectionIndex];
      if (sectionIndex === sections.length - 1) {
        sectionB = sectionA;
      } else {
        sectionB = sections[sectionIndex + 1];
      }
      const alpha = (leafStart - sectionIndex / (sections.length - 1)) / (1 / (sections.length - 1));
      const leafOrigin = new THREE3.Vector3().lerpVectors(
        sectionA.origin,
        sectionB.origin,
        alpha
      );
      const qA = new THREE3.Quaternion().setFromEuler(sectionA.orientation);
      const qB = new THREE3.Quaternion().setFromEuler(sectionB.orientation);
      const parentOrientation = new THREE3.Euler().setFromQuaternion(
        qB.slerp(qA, alpha)
      );
      const radialJitter = this.rng.random(0.5, -0.5);
      const radialAngle = 2 * Math.PI * (radialOffset + (angleSlots[i] + radialJitter) / count);
      const q1 = new THREE3.Quaternion().setFromAxisAngle(
        new THREE3.Vector3(1, 0, 0),
        this.options.leaves.angle / (180 / Math.PI)
      );
      const q2 = new THREE3.Quaternion().setFromAxisAngle(
        new THREE3.Vector3(0, 1, 0),
        radialAngle
      );
      const q3 = new THREE3.Quaternion().setFromEuler(parentOrientation);
      const leafOrientation = new THREE3.Euler().setFromQuaternion(
        q3.multiply(q2.multiply(q1))
      );
      this.#recordLeaf(leafOrigin, leafOrientation);
    }
  }
  /**
  * Records a leaf placement in the skeleton. The size variance is sampled
  * here so the meshing passes stay RNG-free.
  * @param {THREE.Vector3} origin The starting point of the leaf
  * @param {THREE.Euler} orientation The orientation of the leaf
  */
  #recordLeaf(origin, orientation) {
    const size = this.options.leaves.size * (1 + this.rng.random(
      this.options.leaves.sizeVariance,
      -this.options.leaves.sizeVariance
    ));
    this.skeleton.leaves.push({
      origin: origin.clone(),
      orientation: orientation.clone(),
      size
    });
  }
  /**
  * Emits the quad geometry for one skeleton leaf into the buffers
  * @param {{verts: number[], normals: number[], indices: number[], uvs: number[]}} buffers
  * @param {{origin: THREE.Vector3, orientation: THREE.Euler, size: number}} leaf
  * @param {number} scale Size multiplier for this detail level
  * @param {string} billboard Billboard mode for this detail level
  */
  #meshLeaf(buffers, leaf, scale, billboard) {
    let i = buffers.verts.length / 3;
    const { origin, orientation } = leaf;
    const leafSize = leaf.size * scale;
    const W = leafSize;
    const L = leafSize;
    const createLeaf = (rotation) => {
      const v = [
        new THREE3.Vector3(-W / 2, L, 0),
        new THREE3.Vector3(-W / 2, 0, 0),
        new THREE3.Vector3(W / 2, 0, 0),
        new THREE3.Vector3(W / 2, L, 0)
      ].map(
        (v2) => v2.applyEuler(new THREE3.Euler(0, rotation, 0)).applyEuler(orientation).add(origin)
      );
      buffers.verts.push(
        v[0].x,
        v[0].y,
        v[0].z,
        v[1].x,
        v[1].y,
        v[1].z,
        v[2].x,
        v[2].y,
        v[2].z,
        v[3].x,
        v[3].y,
        v[3].z
      );
      const n = new THREE3.Vector3(0, 0, 1).applyEuler(orientation);
      const roundedNormals = this.options.leaves.roundedNormals;
      let n1 = roundedNormals ? new THREE3.Vector3().copy(n).add(v[0]).sub(origin).normalize() : n;
      let n2 = roundedNormals ? new THREE3.Vector3().copy(n).add(v[1]).sub(origin).normalize() : n;
      let n3 = roundedNormals ? new THREE3.Vector3().copy(n).add(v[2]).sub(origin).normalize() : n;
      let n4 = roundedNormals ? new THREE3.Vector3().copy(n).add(v[3]).sub(origin).normalize() : n;
      buffers.normals.push(
        n1.x,
        n1.y,
        n1.z,
        n2.x,
        n2.y,
        n2.z,
        n3.x,
        n3.y,
        n3.z,
        n4.x,
        n4.y,
        n4.z
      );
      buffers.uvs.push(0, 1, 0, 0, 1, 0, 1, 1);
      buffers.indices.push(i, i + 1, i + 2, i, i + 2, i + 3);
      i += 4;
    };
    createLeaf(0);
    if (billboard === Billboard.Double) {
      createLeaf(Math.PI / 2);
    }
  }
  /**
   * Fisher-Yates shuffle of [0..count-1] using the tree's RNG so results stay
   * seed-reproducible.
   * @param {number} count
   * @returns {number[]}
   */
  shuffledIndices(count) {
    const arr = Array.from({ length: count }, (_, k) => k);
    for (let k = count - 1; k > 0; k--) {
      const r = Math.floor(this.rng.random() * (k + 1));
      [arr[k], arr[r]] = [arr[r], arr[k]];
    }
    return arr;
  }
  /**
   * Emits the ring geometry and indices for one skeleton branch
   * @param {{verts: number[], normals: number[], indices: number[], uvs: number[]}} buffers
   * @param {{sections: {origin: THREE.Vector3, orientation: THREE.Euler, radius: number}[], segmentCount: number, baseRadius: number}} skeletonBranch
   * @param {number} sectionStride Sample every Nth section ring
   * @param {number} segmentFactor Radial segment multiplier
   */
  #meshBranch(buffers, skeletonBranch, sectionStride, segmentFactor) {
    const { sections, segmentCount, baseRadius } = skeletonBranch;
    const segments = Math.max(3, Math.round(segmentCount * segmentFactor));
    const wrapsX = Math.max(
      1,
      Math.round(baseRadius * this.options.bark.textureScale.x)
    );
    const sampled = [];
    for (let i = 0; i < sections.length; i += sectionStride) {
      sampled.push(sections[i]);
    }
    if ((sections.length - 1) % sectionStride !== 0) {
      sampled.push(sections[sections.length - 1]);
    }
    const indexOffset = buffers.verts.length / 3;
    for (let k = 0; k < sampled.length; k++) {
      const section = sampled[k];
      let first;
      for (let j = 0; j < segments; j++) {
        let angle = 2 * Math.PI * j / segments;
        const vertex = new THREE3.Vector3(Math.cos(angle), 0, Math.sin(angle)).multiplyScalar(section.radius).applyEuler(section.orientation).add(section.origin);
        const normal = new THREE3.Vector3(Math.cos(angle), 0, Math.sin(angle)).applyEuler(section.orientation).normalize();
        const uv = new THREE3.Vector2(
          j / segments * wrapsX,
          k % 2 === 0 ? 0 : 1
        );
        buffers.verts.push(...Object.values(vertex));
        buffers.normals.push(...Object.values(normal));
        buffers.uvs.push(...Object.values(uv));
        if (j === 0) {
          first = { vertex, normal, uv };
        }
      }
      buffers.verts.push(...Object.values(first.vertex));
      buffers.normals.push(...Object.values(first.normal));
      buffers.uvs.push(wrapsX, first.uv.y);
    }
    let v1, v2, v3, v4;
    const N = segments + 1;
    for (let i = 0; i < sampled.length - 1; i++) {
      for (let j = 0; j < segments; j++) {
        v1 = indexOffset + i * N + j;
        v2 = indexOffset + i * N + (j + 1);
        v3 = v1 + N;
        v4 = v2 + N;
        buffers.indices.push(v1, v3, v2, v2, v3, v4);
      }
    }
  }
  /**
   * Builds a BufferGeometry from raw attribute buffers
   * @param {{verts: number[], normals: number[], indices: number[], uvs: number[]}} buffers
   * @returns {THREE.BufferGeometry}
   */
  #buildBufferGeometry(buffers) {
    const g = new THREE3.BufferGeometry();
    g.setAttribute(
      "position",
      new THREE3.BufferAttribute(new Float32Array(buffers.verts), 3)
    );
    g.setAttribute(
      "normal",
      new THREE3.BufferAttribute(new Float32Array(buffers.normals), 3)
    );
    g.setAttribute(
      "uv",
      new THREE3.BufferAttribute(new Float32Array(buffers.uvs), 2)
    );
    g.setIndex(
      new THREE3.BufferAttribute(new Uint16Array(buffers.indices), 1)
    );
    g.computeBoundingSphere();
    return g;
  }
  /**
   * Creates the bark material from the current options
   * @returns {THREE.MeshStandardMaterial}
   */
  #createBarkMaterial() {
    const mat = new THREE3.MeshStandardMaterial({
      name: "branches",
      flatShading: this.options.bark.flatShading,
      color: new THREE3.Color(this.options.bark.tint),
      metalness: 0,
      roughness: 1
    });
    if (this.options.bark.textured) {
      const scale = this.options.bark.textureScale;
      const maps = this.options.bark.maps;
      const apply = (texture2) => {
        if (!texture2) return null;
        texture2.wrapS = THREE3.RepeatWrapping;
        texture2.wrapT = THREE3.RepeatWrapping;
        texture2.repeat.x = 1;
        texture2.repeat.y = 1 / scale.y;
        return texture2;
      };
      if (maps.color) mat.map = apply(maps.color);
      if (maps.ao) mat.aoMap = apply(maps.ao);
      if (maps.normal) mat.normalMap = apply(maps.normal);
      if (maps.roughness) {
        mat.roughnessMap = apply(maps.roughness);
        mat.metalnessMap = mat.roughnessMap;
      }
    }
    return mat;
  }
  /**
   * Generates the geometry for the branches
   */
  createBranchesGeometry() {
    this.branchesMesh.geometry.dispose();
    this.branchesMesh.geometry = this.#buildBufferGeometry(this.branches);
    this.branchesMesh.material.dispose();
    this.branchesMesh.material = this.#createBarkMaterial();
    this.branchesMesh.castShadow = true;
    this.branchesMesh.receiveShadow = true;
  }
  /**
   * Creates the leaf material, including the wind sway vertex shader, from
   * the current options
   * @returns {THREE.MeshStandardMaterial}
   */
  #createLeafMaterial() {
    const mat = new THREE3.MeshStandardMaterial({
      name: "leaves",
      map: this.options.leaves.map ?? null,
      color: new THREE3.Color(this.options.leaves.tint),
      side: THREE3.DoubleSide,
      alphaTest: this.options.leaves.alphaTest,
      metalness: 0,
      roughness: 1,
      dithering: true
    });
    mat.onBeforeCompile = (shader) => {
      shader.uniforms.uTime = { value: 0 };
      shader.uniforms.uWindStrength = { value: new THREE3.Vector3(0.5, 0, 0.5) };
      shader.uniforms.uWindFrequency = { value: 0.5 };
      shader.uniforms.uWindScale = { value: 70 };
      shader.uniforms.uCustomNormals = { value: this.options.leaves.roundedNormals };
      shader.vertexShader = `
        uniform float uTime;
        uniform vec3 uWindStrength;
        uniform float uWindFrequency;
        uniform float uWindScale;
        ` + shader.vertexShader;
      shader.vertexShader = shader.vertexShader.replace(
        `void main() {`,
        `
        // GLSL Simplex Noise 3D
        // Source: https://github.com/ashima/webgl-noise

        vec3 mod289(vec3 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 mod289(vec4 x) {
            return x - floor(x * (1.0 / 289.0)) * 289.0;
        }

        vec4 permute(vec4 x) {
            return mod289(((x*34.0)+1.0)*x);
        }

        vec4 taylorInvSqrt(vec4 r) {
            return 1.79284291400159 - 0.85373472095314 * r;
        }

        vec3 fade(vec3 t) {
            return t*t*t*(t*(t*6.0-15.0)+10.0);
        }

        // Classic Simplex Noise 3D
        float simplex3(vec3 v) {
            const vec2  C = vec2(1.0/6.0, 1.0/3.0);
            const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

            // First corner
            vec3 i  = floor(v + dot(v, C.yyy) );
            vec3 x0 = v - i + dot(i, C.xxx);

            // Other corners
            vec3 g = step(x0.yzx, x0.xyz);
            vec3 l = 1.0 - g;
            vec3 i1 = min( g.xyz, l.zxy );
            vec3 i2 = max( g.xyz, l.zxy );

            //  x0 = x0 - 0. + 0.0 * C
            vec3 x1 = x0 - i1 + C.xxx;
            vec3 x2 = x0 - i2 + C.yyy; // 2.0 * C.x = 1/3 = C.y
            vec3 x3 = x0 - D.yyy;      // -1.0 + 3.0 * C.x = -0.5

            // Permutations
            i = mod289(i);
            vec4 p = permute( permute( permute(
                        i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
                      + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
                      + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

            // Gradients: 7x7 points over a square, mapped onto an octahedron.
            // The ring size 17*17 = 289 is close to the mapping's singularity.
            float n_ = 0.142857142857; // 1.0/7.0
            vec3  ns = n_ * D.wyz - D.xzx;

            vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

            vec4 x_ = floor(j * ns.z);
            vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

            vec4 x = x_ *ns.x + ns.yyyy;
            vec4 y = y_ *ns.x + ns.yyyy;
            vec4 h = 1.0 - abs(x) - abs(y);

            vec4 b0 = vec4( x.xy, y.xy );
            vec4 b1 = vec4( x.zw, y.zw );

            vec4 s0 = floor(b0)*2.0 + 1.0;
            vec4 s1 = floor(b1)*2.0 + 1.0;
            vec4 sh = -step(h, vec4(0.0));

            vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
            vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

            vec3 g0 = vec3(a0.xy,h.x);
            vec3 g1 = vec3(a0.zw,h.y);
            vec3 g2 = vec3(a1.xy,h.z);
            vec3 g3 = vec3(a1.zw,h.w);

            // Normalise gradients
            vec4 norm = taylorInvSqrt(vec4(dot(g0,g0), dot(g1,g1), dot(g2,g2), dot(g3,g3)));
            g0 *= norm.x;
            g1 *= norm.y;
            g2 *= norm.z;
            g3 *= norm.w;

            // Mix contributions from the four corners
            vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
            m = m * m;
            return 42.0 * dot( m*m, vec4( dot(g0,x0), dot(g1,x1),
                                          dot(g2,x2), dot(g3,x3) ) );
        }

        void main() {`
      );
      shader.vertexShader = shader.vertexShader.replace(
        `#include <project_vertex>`,
        `
        vec4 mvPosition = vec4(transformed, 1.0);

        float windOffset = 2.0 * 3.14 * simplex3(mvPosition.xyz / uWindScale);
        vec3 windSway = uv.y * uWindStrength * (
          0.5 * sin(uTime * uWindFrequency + windOffset) +
          0.3 * sin(2.0 * uTime * uWindFrequency + 1.3 * windOffset) +
          0.2 * sin(5.0 * uTime * uWindFrequency + 1.5 * windOffset)
        );
        mvPosition.xyz += windSway;

        mvPosition = modelViewMatrix * mvPosition;
        gl_Position = projectionMatrix * mvPosition;
        `
      );
      shader.fragmentShader = `uniform bool uCustomNormals;
` + shader.fragmentShader.replace(
        "#include <normal_fragment_begin>",
        THREE3.ShaderChunk.normal_fragment_begin.replace(
          "normal *= faceDirection;",
          "if (!uCustomNormals) { normal *= faceDirection; }"
        )
      );
      Object.defineProperty(mat.userData, "shader", {
        value: shader,
        configurable: true,
        enumerable: false
      });
    };
    return mat;
  }
  /**
   * Generates the geometry for the leaves
   */
  createLeavesGeometry() {
    this.leavesMesh.geometry.dispose();
    this.leavesMesh.geometry = this.#buildBufferGeometry(this.leaves);
    this.leavesMesh.material.dispose();
    this.leavesMesh.material = this.#createLeafMaterial();
    this.leavesMesh.castShadow = true;
    this.leavesMesh.receiveShadow = true;
  }
  /**
   * Create or update the trellis geometry
   */
  createTrellis() {
    if (this.trellisMesh) {
      this.remove(this.trellisMesh);
      this.trellisMesh.dispose();
      this.trellisMesh = null;
    }
    if (this.options.trellis.enabled && this.options.trellis.visible) {
      this.trellisMesh = new Trellis(this.options.trellis);
      this.trellisMesh.generate();
      this.add(this.trellisMesh);
    }
  }
  /**
   * Find the nearest point on the trellis grid to a given position
   * @param {THREE.Vector3} position
   * @returns {THREE.Vector3}
   */
  getNearestTrellisPoint(position) {
    const t = this.options.trellis;
    const trellisX = t.position.x;
    const trellisY = t.position.y;
    const trellisZ = t.position.z;
    const minX = trellisX - t.width / 2;
    const maxX = trellisX + t.width / 2;
    const minY = trellisY;
    const maxY = trellisY + t.height;
    const clampedX = Math.max(minX, Math.min(maxX, position.x));
    const clampedY = Math.max(minY, Math.min(maxY, position.y));
    const nearestHLineY = Math.round((clampedY - minY) / t.spacing) * t.spacing + minY;
    const finalHLineY = Math.max(minY, Math.min(maxY, nearestHLineY));
    const nearestVLineX = Math.round((clampedX - minX) / t.spacing) * t.spacing + minX;
    const finalVLineX = Math.max(minX, Math.min(maxX, nearestVLineX));
    const pointOnHLine = new THREE3.Vector3(clampedX, finalHLineY, trellisZ);
    const pointOnVLine = new THREE3.Vector3(finalVLineX, clampedY, trellisZ);
    const distH = position.distanceTo(pointOnHLine);
    const distV = position.distanceTo(pointOnVLine);
    return distH < distV ? pointOnHLine : pointOnVLine;
  }
  /**
   * Calculate the force vector toward the nearest trellis point
   * @param {THREE.Vector3} position Current section position
   * @param {number} radius Current section radius
   * @returns {{ direction: THREE.Vector3, strength: number } | null}
   */
  calculateTrellisForce(position, radius) {
    const trellis = this.options.trellis;
    const nearestPoint = this.getNearestTrellisPoint(position);
    const distance = position.distanceTo(nearestPoint);
    if (distance > trellis.force.maxDistance) return null;
    if (distance < 1e-3) return null;
    const direction = new THREE3.Vector3().subVectors(nearestPoint, position).normalize();
    const distanceFactor = 1 - Math.pow(
      distance / trellis.force.maxDistance,
      trellis.force.falloff
    );
    const strength = trellis.force.strength * distanceFactor / radius;
    return { direction, strength };
  }
  get vertexCount() {
    return (this.branches.verts.length + this.leaves.verts.length) / 3;
  }
  get triangleCount() {
    return (this.branches.indices.length + this.leaves.indices.length) / 3;
  }
};

// scripts/foliage/factory.ts
var V = THREE4.Vector3;
var clamp = (n, a, b) => Math.max(a, Math.min(b, n));
function rng(seed) {
  let x = seed >>> 0;
  return () => {
    x = Math.imul(x, 1664525) + 1013904223 >>> 0;
    return x / 4294967296;
  };
}
function merge(parts) {
  if (!parts.length) return new THREE4.BufferGeometry();
  const copies = parts.map((g) => {
    const c = g.index ? g.toNonIndexed() : g.clone();
    for (const key of Object.keys(c.attributes)) if (!["position", "normal", "uv"].includes(key)) c.deleteAttribute(key);
    return c;
  });
  const result = mergeGeometries(copies);
  for (const g of [...copies, ...parts]) g.dispose();
  return result;
}
function tube(points, radius, segments = 12, sides = 6) {
  return new THREE4.TubeGeometry(new THREE4.CatmullRomCurve3(points), segments, radius, sides, false);
}
function blade(length, width, angle, origin, yaw, segments, curve = 0.6) {
  const positions = [], uv = [], idx = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const bend = angle + curve * t;
    const x = Math.sin(bend) * length * t, y = Math.cos(bend) * length * t;
    for (const s of [-1, 1]) {
      positions.push(x, y, s * width * 0.5);
      uv.push((s + 1) / 2, t);
    }
  }
  for (let i = 0; i < segments; i++) {
    const n = i * 2;
    idx.push(n, n + 2, n + 1, n + 1, n + 2, n + 3);
  }
  const g = new THREE4.BufferGeometry();
  g.setAttribute("position", new THREE4.Float32BufferAttribute(positions, 3));
  g.setAttribute("uv", new THREE4.Float32BufferAttribute(uv, 2));
  g.setIndex(idx);
  g.computeVertexNormals();
  g.rotateY(yaw);
  g.translate(origin.x, origin.y, origin.z);
  return g;
}
function botanics(a, detail, random) {
  const wood = [], leaves = [];
  const sections = [8, 4, 2][detail];
  const isPalm = a.kind === "palm" || a.kind === "palm-clump";
  const stems = a.kind === "palm-clump" ? 5 : a.kind === "banana" ? 4 : 1;
  if (isPalm || a.kind === "banana") for (let s = 0; s < stems; s++) {
    const theta = s * 2.399;
    const scale = s === 0 ? 1 : 0.65 + random() * 0.3;
    const trunkHeight = (a.kind === "banana" ? 0.38 : a.kind === "palm-clump" ? 0.45 : 0.78) * a.height * scale;
    const ox = stems > 1 ? Math.cos(theta) * a.width * 0.14 : 0, oz = stems > 1 ? Math.sin(theta) * a.width * 0.14 : 0;
    const bend = a.id === "coconut-palm" ? a.width * 0.12 : 0.06 * a.width;
    const top = new V(ox + bend, trunkHeight, oz);
    const trunk = new THREE4.CylinderGeometry(a.height * 9e-3 * scale, a.height * 0.014 * scale, trunkHeight, detail === 0 ? 10 : 6, 5);
    const p = trunk.getAttribute("position");
    for (let i = 0; i < p.count; i++) {
      const t = (p.getY(i) + trunkHeight / 2) / trunkHeight;
      p.setXYZ(i, p.getX(i) + ox + bend * t * t, p.getY(i) + trunkHeight / 2, p.getZ(i) + oz);
    }
    trunk.computeVertexNormals();
    wood.push(trunk);
    const count = a.kind === "banana" ? 7 : a.kind === "palm-clump" ? 14 : a.id === "foxtail-palm" ? 24 : 18;
    for (let i = 0; i < count; i++) {
      if (detail === 2 && i % 2) continue;
      const yaw = i * 2.399 + theta;
      const len = a.width * (a.kind === "banana" ? 0.52 : 0.52) * scale * (0.85 + random() * 0.25);
      leaves.push(blade(len, len * (isPalm ? 0.34 : 0.38), 0.3 + i / count * 1.1, top, yaw, sections, isPalm ? 0.8 : 0.4));
    }
  }
  else {
    const n = a.kind === "upright" ? 16 : a.id === "birds-nest-fern" ? 28 : a.id === "pandan" ? 34 : a.kind === "broadleaf" ? 12 : 20;
    for (let i = 0; i < n; i++) {
      if (detail === 2 && i % 2) continue;
      const yaw = i * 2.399 + random() * 0.2;
      const mature = i / n;
      const l = a.height * (0.6 + random() * 0.4);
      const reach = a.kind === "upright" ? 0.35 : a.kind === "broadleaf" ? 1 : 1.5;
      const origin = new V(Math.cos(yaw) * a.width * 0.07, 0, Math.sin(yaw) * a.width * 0.07);
      let leafBase = origin;
      if (a.kind === "broadleaf") {
        leafBase = origin.clone().add(new V(Math.cos(yaw) * a.width * 0.18, l * 0.45, Math.sin(yaw) * a.width * 0.18));
        wood.push(tube([origin, leafBase.clone().multiplyScalar(0.5), leafBase], a.height * 6e-3, sections, 4));
      }
      leaves.push(blade(l * (a.kind === "broadleaf" ? 0.9 : 1), a.id === "snake-plant" ? l * 0.14 : a.id === "pandan" ? l * 0.14 : a.kind === "broadleaf" ? l * 0.7 : l * 0.4, reach * mature, leafBase, yaw, sections, a.kind === "upright" ? 0.08 : 0.5));
    }
  }
  return { branches: merge(wood), leaves: merge(leaves) };
}
function branching(a, detail) {
  const o = new TreeOptions();
  o.seed = a.seed;
  o.bark.textured = false;
  o.branch.levels = 3;
  const small = !a.tree, narrow = a.id === "indian-mast-tree", umbrella = a.id === "rain-tree", tiers = a.id === "tropical-almond";
  o.branch.length = { 0: small ? 2.2 : umbrella ? 7 : 14, 1: small ? 1.5 : narrow ? 2.2 : umbrella ? 11 : tiers ? 9 : 8, 2: small ? 0.7 : narrow ? 1.3 : umbrella ? 5 : 4, 3: small ? 1.2 : 2 };
  o.branch.radius = { 0: small ? 0.13 : 0.65, 1: 0.48, 2: 0.5, 3: 0.4 };
  o.branch.levels = small ? 2 : 3;
  o.branch.children = { 0: small ? 5 : 8, 1: small ? 3 : 5, 2: 3 };
  o.branch.sections = { 0: 10, 1: 7, 2: 5, 3: 3 };
  o.branch.segments = { 0: 8, 1: 6, 2: 4, 3: 3 };
  o.branch.start = { 1: small ? 0.18 : umbrella ? 0.3 : 0.42, 2: 0.22, 3: 0.12 };
  o.branch.angle = { 1: narrow ? 25 : umbrella ? 77 : tiers ? 83 : 55, 2: 52, 3: 50 };
  o.branch.gnarliness = { 0: umbrella ? 0.035 : 0.012, 1: 0.035, 2: 0.06, 3: 0.03 };
  o.branch.force = { direction: { x: 0, y: 1, z: 0 }, strength: narrow ? 0.05 : umbrella ? 0.015 : 0.025 };
  o.leaves.count = small ? 4 : 5;
  o.leaves.start = 0.1;
  o.leaves.size = small ? 1.25 : narrow ? 1.7 : umbrella ? 4 : 2.4;
  o.leaves.sizeVariance = 0.28;
  o.leaves.billboard = "double";
  const tree = new Tree(o);
  const g = tree.createGeometry([{ sectionStride: 2, segmentFactor: 0.85 }, { sectionStride: 3, segmentFactor: 0.6, leafStride: 2, leafScale: 1.12 }, { sectionStride: 5, segmentFactor: 0.4, leafStride: 5, leafScale: 1.35, billboard: "single" }][detail]);
  tree.branchesMesh.geometry.dispose();
  tree.leavesMesh.geometry.dispose();
  tree.branchesMesh.material.dispose();
  tree.leavesMesh.material.dispose();
  return g;
}
function normalisePair(g, a, potHeight) {
  const box = new THREE4.Box3();
  for (const geo of Object.values(g)) if (geo.getAttribute("position")?.count) {
    geo.computeBoundingBox();
    box.union(geo.boundingBox);
  }
  const size = box.getSize(new V()), center = box.getCenter(new V());
  const sx = a.width / Math.max(size.x, size.z), sy = (a.height - potHeight) / size.y;
  for (const geo of Object.values(g)) {
    geo.translate(-center.x, -box.min.y, -center.z);
    geo.scale(sx, sy, sx);
    geo.translate(0, potHeight, 0);
  }
}
function tintGeometry(g, a, leaf, unlit) {
  const p = g.getAttribute("position");
  if (!p) return;
  const colors = [];
  const normals = g.getAttribute("normal");
  for (let i = 0; i < p.count; i++) {
    const y = p.getY(i) / a.height;
    const variation = 0.93 + 0.07 * Math.sin(p.getX(i) * 13 + p.getZ(i) * 11);
    const shade = (unlit ? 0.28 + 0.25 * clamp(y, 0, 1) : 0.7 + 0.3 * clamp(y, 0, 1)) * variation;
    colors.push(shade, shade, shade);
    if (leaf) {
      const n = new V(p.getX(i) / a.width, 0.65 + Math.max(0, y - 0.35), p.getZ(i) / a.width).normalize();
      normals.setXYZ(i, n.x, n.y, n.z);
    }
  }
  g.setAttribute("color", new THREE4.Float32BufferAttribute(colors, 3));
}
function texture(base, name, repeat = false) {
  if (!base || typeof document === "undefined") return null;
  const map = new THREE4.TextureLoader().load(new URL(`maps/${name}`, base).href);
  map.colorSpace = THREE4.SRGBColorSpace;
  map.wrapS = map.wrapT = repeat ? THREE4.RepeatWrapping : THREE4.ClampToEdgeWrapping;
  if (repeat) map.repeat.set(2, 5);
  return map;
}
function faceCamera(card) {
  const pos = new V(), own = new V(), q = new THREE4.Quaternion(), parent = new THREE4.Quaternion();
  card.onBeforeRender = (_r, _s, camera) => {
    camera.getWorldPosition(pos);
    card.getWorldPosition(own);
    q.setFromAxisAngle(new V(0, 1, 0), Math.atan2(pos.x - own.x, pos.z - own.z));
    if (card.parent) {
      card.parent.getWorldQuaternion(parent).invert();
      q.premultiply(parent);
    }
    card.quaternion.copy(q);
    card.updateMatrixWorld(true);
  };
}
function makeFoliage(a, options = {}) {
  const root = new THREE4.Group();
  root.name = a.id;
  const detail = clamp(Math.floor(options.detail ?? 0), 0, 2);
  const representation = options.representation ?? "mesh", unlit = options.lighting === "unlit";
  root.userData.foliage = { asset: a.id, representation, detail, bakeLighting: false };
  root.userData.sculptRuntime = { nodes: 0, pivots: [{ name: "root", object: "root" }], sockets: [], colliders: [], destructionGroups: [] };
  if (representation !== "mesh") {
    const material = new THREE4.MeshBasicMaterial({ name: "foliage-billboard", map: texture(options.baseUrl, "billboard.webp"), color: unlit ? 5923935 : 16777215, alphaTest: 0.45, side: THREE4.DoubleSide, fog: true });
    const count = representation === "cluster" ? 6 : 1;
    for (let i = 0; i < count; i++) {
      const g = new THREE4.PlaneGeometry(a.width, a.height);
      g.translate(0, a.height / 2, 0);
      const card = new THREE4.Mesh(g, material);
      card.name = `${representation}-${i}`;
      if (count > 1) {
        card.position.set((i % 3 - 1) * a.width * 0.65, 0, Math.floor(i / 3) * a.width * 0.3);
        card.rotation.y = i % 2 * Math.PI / 2;
      } else if (options.billboard !== false) faceCamera(card);
      root.add(card);
    }
  } else {
    const potted = options.potted ?? a.potted, potHeight = potted ? Math.min(0.45, a.height * 0.27) : 0;
    const geometry = a.kind === "tree" || a.kind === "shrub" ? branching({ ...a, seed: options.seed ?? a.seed }, detail) : botanics(a, detail, rng(options.seed ?? a.seed));
    normalisePair(geometry, a, potHeight);
    const Material = unlit ? THREE4.MeshBasicMaterial : THREE4.MeshStandardMaterial;
    const bark = new Material({ name: "bark", color: 13157300, map: texture(options.baseUrl, "bark.webp", true), vertexColors: true, ...!unlit ? { roughness: 0.96, metalness: 0 } : {} });
    const leaf = new Material({ name: "leaves", color: 16777215, map: texture(options.baseUrl, "leaf.webp"), alphaTest: 0.45, side: THREE4.DoubleSide, vertexColors: true, ...!unlit ? { roughness: 0.9, metalness: 0 } : {} });
    for (const [name, g, m] of [["trunk", geometry.branches, bark], ["canopy", geometry.leaves, leaf]]) {
      if (!g.getAttribute("position")?.count) {
        g.dispose();
        continue;
      }
      tintGeometry(g, a, name === "canopy", unlit);
      const mesh = new THREE4.Mesh(g, m);
      mesh.name = name;
      mesh.castShadow = false;
      mesh.receiveShadow = !unlit;
      root.add(mesh);
    }
    if (potted) {
      const radius = Math.min(a.width * 0.29, potHeight * 0.85);
      const points = [[0, 0], [radius * 0.73, 0], [radius, 0.94 * potHeight], [radius, potHeight], [radius * 0.88, potHeight], [radius * 0.8, 0.88 * potHeight], [0, 0.88 * potHeight]].map(([x, y]) => new THREE4.Vector2(x, y));
      const g = new THREE4.LatheGeometry(points, detail === 0 ? 16 : 10);
      const material = new Material({ name: "planter", color: a.id === "croton" ? 8946812 : 9592902, ...!unlit ? { roughness: 1 } : {} });
      const mesh = new THREE4.Mesh(g, material);
      mesh.name = "planter";
      root.add(mesh);
    }
  }
  root.userData.sculptRuntime.nodes = 1 + root.children.length;
  root.updateMatrixWorld(true);
  return root;
}

// scripts/foliage/rain-tree.ts
var recipe = { "id": "rain-tree", "name": "Rain Tree", "species": "Samanea saman", "kind": "tree", "width": 23, "height": 16, "form": "wide umbrella crown, spreading low branches, substantial textured trunk and dense fine compound foliage", "leaf": "a delicate rain-tree twig bearing several bipinnate green leaves with numerous tiny oval leaflets", "potted": false, "tree": true, "seed": 2101 };
function createModel(options = {}) {
  return makeFoliage(recipe, options);
}
function createObjectModel(spec = {}, options = {}) {
  return makeFoliage(recipe, options);
}
export {
  createModel,
  createObjectModel
};

export type ProceduralModelOptions = { baseUrl?: string; textureAnisotropy?: number; representation?: 'mesh'|'billboard'|'cluster'; detail?: 0|1|2; potted?: boolean; lighting?: 'live'|'unlit'; billboard?: boolean; seed?: number };
