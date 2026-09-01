var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// ../repo/scratch/open-top-steel-skip-bin/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createOpenTopSteelSkipBinModel: () => createOpenTopSteelSkipBinModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  // Measured tones. The interior is LIFTED from its measurement and the reason is arithmetic, not
  // taste: the plate's interior reads luma 98.9, and a face enclosed by the prop's own silhouette
  // renders at ~0.56 of its painted luma at the worst turntable azimuth -- 98.9 would land at 55,
  // below the harness backdrop's 58, and the gate would read the whole open mouth as a hole
  // punched through the model.
  colors: {
    exterior: 13208152,
    // crops/exterior.png measured #d58d53, luma 152.2, sat 0.610
    interior: 11843758,
    // LIFTED from the measured #60645c (luma 98.9) to luma 182
    rim: 14208956,
    // crops/rim.png measured #897662 on a shadowed length; lit rim reads 162-170
    recess: 10130314
    // hand-hole backing, luma 147 -> ~82 side-lit, clear of the backdrop
  },
  materials: [
    { id: "weathered-steel", color: 16777215, roughness: 0.82, metalness: 0.15, vertexColors: true },
    { id: "bracket-steel", color: 11048328, roughness: 0.75, metalness: 0.25, vertexColors: false }
  ],
  // Rounded-rectangle sections. hw/hd are half-extents; r is the vertical corner radius.
  /* PLAN CORRECTED 2026-08-31, from 1.50 x 1.00 m to 0.80 x 0.78 m. Height is unchanged at 1.05.
   *
   * The declared 1.50 x 1.05 x 1.00 made this a long low skip. It is not one: the plate is a
   * chest-height square steel hopper photographed steeply from above -- a tapering square tub on
   * four corner feet with lifting eyes and hinge lugs -- and a top-down view FORESHORTENS height,
   * so it is at least as tall as it looks. Two independent single-view reconstructions agree with
   * the plate and not with the declaration:
   *
   *     width/height   depth/height
   *     Meshy proxy       0.66          0.64
   *     trellis           0.84          0.80
   *     mean              0.75          0.72
   *     BUILT             1.43          0.95
   *
   * They are 27% apart on width -- looser than one would like -- but they agree in DIRECTION and
   * both read the tub as square in plan, which the build did not (it was 1.5:1). At the unchanged
   * 1.05 m height the mean gives 0.79 x 0.76; shipped at 0.80 x 0.78. hw scales by 0.533 and hd by
   * 0.780, so the wall's inward taper toward the base (0.82 of the head) is preserved exactly. */
  rings: {
    wallFoot: { hw: 0.328, hd: 0.32, r: 0.065, y: 0.13 },
    wallHead: { hw: 0.4, hd: 0.39, r: 0.065, y: 0.985 },
    rimOuter: { hw: 0.4, hd: 0.39, r: 0.065, y: 1.05 },
    rimInner: { hw: 0.384, hd: 0.367, r: 0.059, y: 1.05 },
    innerFoot: { hw: 0.315, hd: 0.3, r: 0.059, y: 0.17 },
    plinthTop: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.13 },
    plinthBot: { hw: 0.333, hd: 0.328, r: 0.065, y: 0.09 }
  },
  cornerSegments: 5,
  // 4 quadrants x 6 points = 24 points per ring
  feet: { w: 0.13, h: 0.09, d: 0.1, inset: 0.09 },
  handHole: { y: 0.86, a: 0.078, b: 0.058, bezel: 0.018, proud: 8e-3, recess: 0.012, segments: 16 },
  lug: { w: 0.12, h: 0.08, t: 0.038, y: 1.012 }
};
function roundedRectRing(hw, hd, r, seg) {
  const rad = Math.min(r, Math.min(hw, hd) * 0.98);
  const cx = hw - rad;
  const cz = hd - rad;
  const centres = [
    { x: +cx, z: +cz },
    { x: -cx, z: +cz },
    { x: -cx, z: -cz },
    { x: +cx, z: -cz }
  ];
  const pts = [];
  for (let q = 0; q < 4; q += 1) {
    const c = centres[q];
    for (let i = 0; i <= seg; i += 1) {
      const a = (q * 90 + i * 90 / seg) * Math.PI / 180;
      pts.push({ x: c.x + rad * Math.cos(a), z: c.z + rad * Math.sin(a) });
    }
  }
  return pts;
}
var Soup = class {
  pos = [];
  col = [];
  c = new THREE.Color();
  tri(a, b, cc, hex) {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
  }
  /** Two triangles over a quad given in order; the caller decides the winding. */
  quad(a, b, c, d, hex) {
    this.tri(a, b, c, hex);
    this.tri(a, c, d, hex);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    return g;
  }
};
var v3 = (x, y, z) => new THREE.Vector3(x, y, z);
var at = (p, y) => v3(p.x, y, p.z);
function loft(s, lower, ly, upper, uy, hex, outward) {
  const n = lower.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const L0 = at(lower[i], ly);
    const L1 = at(lower[j], ly);
    const U0 = at(upper[i], uy);
    const U1 = at(upper[j], uy);
    if (outward) s.quad(L0, U0, U1, L1, hex);
    else s.quad(L0, L1, U1, U0, hex);
  }
}
function annulus(s, outer, inner, y, hex, up) {
  const n = outer.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const O0 = at(outer[i], y);
    const O1 = at(outer[j], y);
    const I0 = at(inner[i], y);
    const I1 = at(inner[j], y);
    if (up) s.quad(O0, I0, I1, O1, hex);
    else s.quad(O0, O1, I1, I0, hex);
  }
}
function cap(s, ring, y, hex, up) {
  const c = v3(0, y, 0);
  const n = ring.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const A = at(ring[i], y);
    const B = at(ring[j], y);
    if (up) s.tri(c, B, A, hex);
    else s.tri(c, A, B, hex);
  }
}
function box(s, cx, cy, cz, w, h, d, hex) {
  const x0 = cx - w / 2, x1 = cx + w / 2;
  const y0 = cy - h / 2, y1 = cy + h / 2;
  const z0 = cz - d / 2, z1 = cz + d / 2;
  const p = [
    v3(x0, y0, z0),
    v3(x1, y0, z0),
    v3(x1, y1, z0),
    v3(x0, y1, z0),
    v3(x0, y0, z1),
    v3(x1, y0, z1),
    v3(x1, y1, z1),
    v3(x0, y1, z1)
  ];
  s.quad(p[4], p[5], p[6], p[7], hex);
  s.quad(p[1], p[0], p[3], p[2], hex);
  s.quad(p[5], p[1], p[2], p[6], hex);
  s.quad(p[0], p[4], p[7], p[3], hex);
  s.quad(p[3], p[7], p[6], p[2], hex);
  s.quad(p[0], p[1], p[5], p[4], hex);
}
function handHole(s, centre, normal, colors) {
  const { a, b, bezel, proud, recess, segments } = CONFIG.handHole;
  const nz = normal.clone().normalize();
  const up = Math.abs(nz.y) > 0.99 ? v3(1, 0, 0) : v3(0, 1, 0);
  const nx = new THREE.Vector3().crossVectors(up, nz).normalize();
  const ny = new THREE.Vector3().crossVectors(nz, nx).normalize();
  const on = (u, v, off) => centre.clone().addScaledVector(nx, u).addScaledVector(ny, v).addScaledVector(nz, off);
  for (let i = 0; i < segments; i += 1) {
    const t0 = i / segments * Math.PI * 2;
    const t1 = (i + 1) / segments * Math.PI * 2;
    const c0 = Math.cos(t0), s0 = Math.sin(t0), c1 = Math.cos(t1), s1 = Math.sin(t1);
    s.quad(
      on(a * c0, b * s0, proud + recess),
      on((a + bezel) * c0, (b + bezel) * s0, proud),
      on((a + bezel) * c1, (b + bezel) * s1, proud),
      on(a * c1, b * s1, proud + recess),
      colors.exterior
    );
    s.tri(on(0, 0, proud), on(a * c0, b * s0, proud + recess), on(a * c1, b * s1, proud + recess), colors.recess);
  }
}
function createOpenTopSteelSkipBinModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Open-Top Steel Skip Bin";
  const materials = {};
  for (const m of CONFIG.materials) {
    materials[m.id] = new THREE.MeshStandardMaterial({
      color: new THREE.Color(m.color),
      roughness: m.roughness,
      metalness: m.metalness,
      vertexColors: m.vertexColors,
      wireframe: options.wireframe ?? false
    });
    materials[m.id].name = m.id;
  }
  const seg = CONFIG.cornerSegments;
  const R = CONFIG.rings;
  const C = CONFIG.colors;
  const ring = (k) => roundedRectRing(R[k].hw, R[k].hd, R[k].r, seg);
  const wallFoot = ring("wallFoot");
  const wallHead = ring("wallHead");
  const rimOuter = ring("rimOuter");
  const rimInner = ring("rimInner");
  const innerFoot = ring("innerFoot");
  const plinthTop = ring("plinthTop");
  const plinthBot = ring("plinthBot");
  const s = new Soup();
  loft(s, wallFoot, R.wallFoot.y, wallHead, R.wallHead.y, C.exterior, true);
  loft(s, wallHead, R.wallHead.y, rimOuter, R.rimOuter.y, C.rim, true);
  annulus(s, rimOuter, rimInner, R.rimOuter.y, C.rim, true);
  loft(s, innerFoot, R.innerFoot.y, rimInner, R.rimInner.y, C.interior, false);
  cap(s, innerFoot, R.innerFoot.y, C.interior, true);
  loft(s, plinthBot, R.plinthBot.y, plinthTop, R.plinthTop.y, C.exterior, true);
  annulus(s, plinthTop, wallFoot, R.plinthTop.y, C.exterior, true);
  cap(s, plinthBot, R.plinthBot.y, C.exterior, false);
  const f = CONFIG.feet;
  const fx = R.plinthBot.hw - f.inset - f.w / 2;
  const fz = R.plinthBot.hd - f.inset - f.d / 2;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      box(s, sx * fx, f.h / 2, sz * fz, f.w, f.h, f.d, C.exterior);
    }
  }
  const hy = CONFIG.handHole.y;
  const t = (hy - R.wallFoot.y) / (R.wallHead.y - R.wallFoot.y);
  const hwAt = R.wallFoot.hw + (R.wallHead.hw - R.wallFoot.hw) * t;
  const hdAt = R.wallFoot.hd + (R.wallHead.hd - R.wallFoot.hd) * t;
  const leanW = Math.atan2(R.wallHead.hw - R.wallFoot.hw, R.wallHead.y - R.wallFoot.y);
  const leanD = Math.atan2(R.wallHead.hd - R.wallFoot.hd, R.wallHead.y - R.wallFoot.y);
  for (const sz of [-1, 1]) {
    handHole(s, v3(0, hy, sz * hdAt), v3(0, -Math.sin(leanD), sz * Math.cos(leanD)), C);
  }
  for (const sx of [-1, 1]) {
    handHole(s, v3(sx * hwAt, hy, 0), v3(sx * Math.cos(leanW), -Math.sin(leanW), 0), C);
  }
  const shellGeo = s.geometry();
  const shell = new THREE.Mesh(shellGeo, materials["weathered-steel"]);
  shell.name = "Tapered shell with rolled rim, plinth and feet";
  shell.castShadow = options.castShadow ?? true;
  shell.receiveShadow = options.receiveShadow ?? true;
  root.add(shell);
  const L = CONFIG.lug;
  const lugGeo = new THREE.BoxGeometry(L.w, L.h, L.t);
  const lugs = new THREE.InstancedMesh(lugGeo, materials["bracket-steel"], 4);
  lugs.name = "Corner lifting lugs";
  lugs.castShadow = options.castShadow ?? true;
  lugs.receiveShadow = options.receiveShadow ?? true;
  const m4 = new THREE.Matrix4();
  const q = new THREE.Quaternion();
  const corners = [[1, 1], [-1, 1], [-1, -1], [1, -1]];
  corners.forEach(([sx, sz], i) => {
    const arcX = sx * (R.rimOuter.hw - R.rimOuter.r);
    const arcZ = sz * (R.rimOuter.hd - R.rimOuter.r);
    const half = (L.w + L.t) / 2 * Math.SQRT1_2;
    const diag = R.rimOuter.r - half;
    const yaw = Math.atan2(sx, sz);
    q.setFromAxisAngle(v3(0, 1, 0), yaw);
    m4.compose(v3(arcX + sx * diag, L.y, arcZ + sz * diag), q, v3(1, 1, 1));
    lugs.setMatrixAt(i, m4);
  });
  lugs.instanceMatrix.needsUpdate = true;
  root.add(lugs);
  const nodes = { root, tub: shell, "corner-lugs": lugs };
  const meshes = { tub: shell, "corner-lugs": lugs };
  const colliders = {
    tub: {
      shape: "box",
      localCenter: [0, 0.525, 0],
      size: [1.5, 1.05, 1],
      axis: [0, 1, 0],
      notes: "Authoring intent only. thaikit derives the shipped compound from the built geometry with scripts/derive-colliders.mjs; this is not that file."
    }
  };
  root.userData.sculptRuntime = {
    nodes,
    meshes,
    sockets: {},
    colliders,
    destructionGroups: {}
  };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createOpenTopSteelSkipBinModel(options);
  if (spec && typeof spec === "object") root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record: the harness returns this field straight across the puppeteer
      // bridge and a Record of Object3D is circular, which surfaces as the whole stats object
      // arriving undefined.
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: [],
      colliders,
      destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} }
    };
  }
  return root;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogT3Blbi1Ub3AgU3RlZWwgU2tpcCBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IHRoZSByaW5nIGxvZnQsIHRoZVxuICogbWVyZ2UgYW5kIHRoZSBvdmFsIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhXG4gKiBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuNSB4IDEuMDUgeCAxLjAgbSBtZWFzdXJlZCBBQ1JPU1MgVEhFIFRPUCBSSU0gKHRoZSB3aWRlc3Qgc2VjdGlvbiksIG9yaWdpblxuICogYmFzZS1jZW50ZXIsICtZIHVwLCArWiB0aGUgZnJvbnQgd2FsbC5cbiAqXG4gKiBUaGUgcHJvcCBpcyBhbiBPUEVOIFZFU1NFTCwgbm90IGEgYm94OiBvbmUgbG9mdGVkIHNoZWV0LW1ldGFsIHN1cmZhY2UgcnVucyB1cCB0aGUgb3V0c2lkZSwgb3ZlclxuICogdGhlIHJvbGxlZCByaW0gYW5kIGJhY2sgZG93biB0aGUgaW5zaWRlIHRvIGEgcmVhbCBpbnRlcmlvciBmbG9vci4gVGhlIHdhbGxzIGxlYW4gT1VUV0FSRCwgc28gdGhlXG4gKiBtb3V0aCBpcyB0aGUgd2lkZXN0IHNlY3Rpb24gLS0gbG9zZSB0aGF0IGFuZCBpdCBzdG9wcyBiZWluZyB0aGlzIGJpbi5cbiAqXG4gKiBCdWRnZXQgKHRoYWlraXQgbWVkaXVtIGNsYXNzKTogMiBkcmF3IGNhbGxzLCAyIG1hdGVyaWFscywgNCB1bmlxdWUgZ2VvbWV0cmllcywgMjAwMCB0cmlhbmdsZXMuXG4gKiBFdmVyeXRoaW5nIHdlbGRlZCB0byB0aGUgc2hlbGwgLS0gcmltLCBwbGludGgsIGZlZXQsIGhhbmQtaG9sZSBiZXplbHMgLS0gaXMgbWVyZ2VkIGludG8gT05FXG4gKiBnZW9tZXRyeSwgYmVjYXVzZSBhIGNvbXBvbmVudCBpcyBhIGRyYXcgY2FsbCBhbmQgYSBwYXJ0IGh1bmcgb2ZmIGl0cyBvd24gcGl2b3QgY2FuIG5ldmVyIGJlXG4gKiBtZXJnZWQgYWZ0ZXJ3YXJkcy4gVGhlIGZvdXIgbGlmdGluZyBsdWdzIGFyZSB0aGUgc2Vjb25kIGRyYXcgY2FsbCwgYXMgb25lIEluc3RhbmNlZE1lc2guXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICBiYXNlVXJsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29uZmlndXJhdGlvbiAqL1xuXG5jb25zdCBDT05GSUcgPSB7XG4gIC8vIE1lYXN1cmVkIHRvbmVzLiBUaGUgaW50ZXJpb3IgaXMgTElGVEVEIGZyb20gaXRzIG1lYXN1cmVtZW50IGFuZCB0aGUgcmVhc29uIGlzIGFyaXRobWV0aWMsIG5vdFxuICAvLyB0YXN0ZTogdGhlIHBsYXRlJ3MgaW50ZXJpb3IgcmVhZHMgbHVtYSA5OC45LCBhbmQgYSBmYWNlIGVuY2xvc2VkIGJ5IHRoZSBwcm9wJ3Mgb3duIHNpbGhvdWV0dGVcbiAgLy8gcmVuZGVycyBhdCB+MC41NiBvZiBpdHMgcGFpbnRlZCBsdW1hIGF0IHRoZSB3b3JzdCB0dXJudGFibGUgYXppbXV0aCAtLSA5OC45IHdvdWxkIGxhbmQgYXQgNTUsXG4gIC8vIGJlbG93IHRoZSBoYXJuZXNzIGJhY2tkcm9wJ3MgNTgsIGFuZCB0aGUgZ2F0ZSB3b3VsZCByZWFkIHRoZSB3aG9sZSBvcGVuIG1vdXRoIGFzIGEgaG9sZVxuICAvLyBwdW5jaGVkIHRocm91Z2ggdGhlIG1vZGVsLlxuICBjb2xvcnM6IHtcbiAgICBleHRlcmlvcjogMHhjOThhNTgsIC8vIGNyb3BzL2V4dGVyaW9yLnBuZyBtZWFzdXJlZCAjZDU4ZDUzLCBsdW1hIDE1Mi4yLCBzYXQgMC42MTBcbiAgICBpbnRlcmlvcjogMHhiNGI4YWUsIC8vIExJRlRFRCBmcm9tIHRoZSBtZWFzdXJlZCAjNjA2NDVjIChsdW1hIDk4LjkpIHRvIGx1bWEgMTgyXG4gICAgcmltOiAweGQ4Y2ZiYywgICAgICAvLyBjcm9wcy9yaW0ucG5nIG1lYXN1cmVkICM4OTc2NjIgb24gYSBzaGFkb3dlZCBsZW5ndGg7IGxpdCByaW0gcmVhZHMgMTYyLTE3MFxuICAgIHJlY2VzczogMHg5YTkzOGEsICAgLy8gaGFuZC1ob2xlIGJhY2tpbmcsIGx1bWEgMTQ3IC0+IH44MiBzaWRlLWxpdCwgY2xlYXIgb2YgdGhlIGJhY2tkcm9wXG4gIH0sXG4gIG1hdGVyaWFsczogW1xuICAgIHsgaWQ6ICd3ZWF0aGVyZWQtc3RlZWwnLCBjb2xvcjogMHhmZmZmZmYsIHJvdWdobmVzczogMC44MiwgbWV0YWxuZXNzOiAwLjE1LCB2ZXJ0ZXhDb2xvcnM6IHRydWUgfSxcbiAgICB7IGlkOiAnYnJhY2tldC1zdGVlbCcsIGNvbG9yOiAweGE4OTU4OCwgcm91Z2huZXNzOiAwLjc1LCBtZXRhbG5lc3M6IDAuMjUsIHZlcnRleENvbG9yczogZmFsc2UgfSxcbiAgXSxcbiAgLy8gUm91bmRlZC1yZWN0YW5nbGUgc2VjdGlvbnMuIGh3L2hkIGFyZSBoYWxmLWV4dGVudHM7IHIgaXMgdGhlIHZlcnRpY2FsIGNvcm5lciByYWRpdXMuXG4gIC8qIFBMQU4gQ09SUkVDVEVEIDIwMjYtMDgtMzEsIGZyb20gMS41MCB4IDEuMDAgbSB0byAwLjgwIHggMC43OCBtLiBIZWlnaHQgaXMgdW5jaGFuZ2VkIGF0IDEuMDUuXG4gICAqXG4gICAqIFRoZSBkZWNsYXJlZCAxLjUwIHggMS4wNSB4IDEuMDAgbWFkZSB0aGlzIGEgbG9uZyBsb3cgc2tpcC4gSXQgaXMgbm90IG9uZTogdGhlIHBsYXRlIGlzIGFcbiAgICogY2hlc3QtaGVpZ2h0IHNxdWFyZSBzdGVlbCBob3BwZXIgcGhvdG9ncmFwaGVkIHN0ZWVwbHkgZnJvbSBhYm92ZSAtLSBhIHRhcGVyaW5nIHNxdWFyZSB0dWIgb25cbiAgICogZm91ciBjb3JuZXIgZmVldCB3aXRoIGxpZnRpbmcgZXllcyBhbmQgaGluZ2UgbHVncyAtLSBhbmQgYSB0b3AtZG93biB2aWV3IEZPUkVTSE9SVEVOUyBoZWlnaHQsXG4gICAqIHNvIGl0IGlzIGF0IGxlYXN0IGFzIHRhbGwgYXMgaXQgbG9va3MuIFR3byBpbmRlcGVuZGVudCBzaW5nbGUtdmlldyByZWNvbnN0cnVjdGlvbnMgYWdyZWUgd2l0aFxuICAgKiB0aGUgcGxhdGUgYW5kIG5vdCB3aXRoIHRoZSBkZWNsYXJhdGlvbjpcbiAgICpcbiAgICogICAgIHdpZHRoL2hlaWdodCAgIGRlcHRoL2hlaWdodFxuICAgKiAgICAgTWVzaHkgcHJveHkgICAgICAgMC42NiAgICAgICAgICAwLjY0XG4gICAqICAgICB0cmVsbGlzICAgICAgICAgICAwLjg0ICAgICAgICAgIDAuODBcbiAgICogICAgIG1lYW4gICAgICAgICAgICAgIDAuNzUgICAgICAgICAgMC43MlxuICAgKiAgICAgQlVJTFQgICAgICAgICAgICAgMS40MyAgICAgICAgICAwLjk1XG4gICAqXG4gICAqIFRoZXkgYXJlIDI3JSBhcGFydCBvbiB3aWR0aCAtLSBsb29zZXIgdGhhbiBvbmUgd291bGQgbGlrZSAtLSBidXQgdGhleSBhZ3JlZSBpbiBESVJFQ1RJT04gYW5kXG4gICAqIGJvdGggcmVhZCB0aGUgdHViIGFzIHNxdWFyZSBpbiBwbGFuLCB3aGljaCB0aGUgYnVpbGQgZGlkIG5vdCAoaXQgd2FzIDEuNToxKS4gQXQgdGhlIHVuY2hhbmdlZFxuICAgKiAxLjA1IG0gaGVpZ2h0IHRoZSBtZWFuIGdpdmVzIDAuNzkgeCAwLjc2OyBzaGlwcGVkIGF0IDAuODAgeCAwLjc4LiBodyBzY2FsZXMgYnkgMC41MzMgYW5kIGhkIGJ5XG4gICAqIDAuNzgwLCBzbyB0aGUgd2FsbCdzIGlud2FyZCB0YXBlciB0b3dhcmQgdGhlIGJhc2UgKDAuODIgb2YgdGhlIGhlYWQpIGlzIHByZXNlcnZlZCBleGFjdGx5LiAqL1xuICByaW5nczoge1xuICAgIHdhbGxGb290OiAgeyBodzogMC4zMjgsIGhkOiAwLjMyMCwgcjogMC4wNjUsIHk6IDAuMTMwIH0sXG4gICAgd2FsbEhlYWQ6ICB7IGh3OiAwLjQwMCwgaGQ6IDAuMzkwLCByOiAwLjA2NSwgeTogMC45ODUgfSxcbiAgICByaW1PdXRlcjogIHsgaHc6IDAuNDAwLCBoZDogMC4zOTAsIHI6IDAuMDY1LCB5OiAxLjA1MCB9LFxuICAgIHJpbUlubmVyOiAgeyBodzogMC4zODQsIGhkOiAwLjM2NywgcjogMC4wNTksIHk6IDEuMDUwIH0sXG4gICAgaW5uZXJGb290OiB7IGh3OiAwLjMxNSwgaGQ6IDAuMzAwLCByOiAwLjA1OSwgeTogMC4xNzAgfSxcbiAgICBwbGludGhUb3A6IHsgaHc6IDAuMzMzLCBoZDogMC4zMjgsIHI6IDAuMDY1LCB5OiAwLjEzMCB9LFxuICAgIHBsaW50aEJvdDogeyBodzogMC4zMzMsIGhkOiAwLjMyOCwgcjogMC4wNjUsIHk6IDAuMDkwIH0sXG4gIH0sXG4gIGNvcm5lclNlZ21lbnRzOiA1LCAvLyA0IHF1YWRyYW50cyB4IDYgcG9pbnRzID0gMjQgcG9pbnRzIHBlciByaW5nXG4gIGZlZXQ6IHsgdzogMC4xMywgaDogMC4wOSwgZDogMC4xMCwgaW5zZXQ6IDAuMDkgfSxcbiAgaGFuZEhvbGU6IHsgeTogMC44NiwgYTogMC4wNzgsIGI6IDAuMDU4LCBiZXplbDogMC4wMTgsIHByb3VkOiAwLjAwOCwgcmVjZXNzOiAwLjAxMiwgc2VnbWVudHM6IDE2IH0sXG4gIGx1ZzogeyB3OiAwLjEyLCBoOiAwLjA4LCB0OiAwLjAzOCwgeTogMS4wMTIgfSxcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc21hbGwgdXRpbGl0aWVzICovXG5cbnR5cGUgUHQgPSB7IHg6IG51bWJlcjsgejogbnVtYmVyIH07XG5cbi8qKlxuICogQSByb3VuZGVkIHJlY3RhbmdsZSBhcyBhIGNsb3NlZCBDQ1cgcmluZyB2aWV3ZWQgZnJvbSArWSwgZm91ciBxdWFkcmFudCBhcmNzIGpvaW5lZCBieSB0aGVcbiAqIHN0cmFpZ2h0IHJ1bnMgYmV0d2VlbiB0aGVtLiBSZXR1cm5zIDQgKiAoY29ybmVyU2VnbWVudHMgKyAxKSBwb2ludHMuXG4gKi9cbmZ1bmN0aW9uIHJvdW5kZWRSZWN0UmluZyhodzogbnVtYmVyLCBoZDogbnVtYmVyLCByOiBudW1iZXIsIHNlZzogbnVtYmVyKTogUHRbXSB7XG4gIGNvbnN0IHJhZCA9IE1hdGgubWluKHIsIE1hdGgubWluKGh3LCBoZCkgKiAwLjk4KTtcbiAgY29uc3QgY3ggPSBodyAtIHJhZDtcbiAgY29uc3QgY3ogPSBoZCAtIHJhZDtcbiAgY29uc3QgY2VudHJlcyA9IFtcbiAgICB7IHg6ICtjeCwgejogK2N6IH0sXG4gICAgeyB4OiAtY3gsIHo6ICtjeiB9LFxuICAgIHsgeDogLWN4LCB6OiAtY3ogfSxcbiAgICB7IHg6ICtjeCwgejogLWN6IH0sXG4gIF07XG4gIGNvbnN0IHB0czogUHRbXSA9IFtdO1xuICBmb3IgKGxldCBxID0gMDsgcSA8IDQ7IHEgKz0gMSkge1xuICAgIGNvbnN0IGMgPSBjZW50cmVzW3FdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IHNlZzsgaSArPSAxKSB7XG4gICAgICBjb25zdCBhID0gKChxICogOTAgKyAoaSAqIDkwKSAvIHNlZykgKiBNYXRoLlBJKSAvIDE4MDtcbiAgICAgIHB0cy5wdXNoKHsgeDogYy54ICsgcmFkICogTWF0aC5jb3MoYSksIHo6IGMueiArIHJhZCAqIE1hdGguc2luKGEpIH0pO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKiogQSBncm93YWJsZSBub24taW5kZXhlZCB0cmlhbmdsZSBzb3VwIGNhcnJ5aW5nIHBvc2l0aW9uIGFuZCBjb2xvdXIuICovXG5jbGFzcyBTb3VwIHtcbiAgcG9zOiBudW1iZXJbXSA9IFtdO1xuICBjb2w6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuXG4gIHRyaShhOiBUSFJFRS5WZWN0b3IzLCBiOiBUSFJFRS5WZWN0b3IzLCBjYzogVEhSRUUuVmVjdG9yMywgaGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBvcy5wdXNoKGEueCwgYS55LCBhLnosIGIueCwgYi55LCBiLnosIGNjLngsIGNjLnksIGNjLnopO1xuICAgIC8vIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGNvbG91ciBtdXN0IGJlIGNvbnZlcnRlZCBvdXQgb2Ygc1JHQiBvciB0aGVcbiAgICAvLyB3aG9sZSBwcm9wIHNoaXBzIHdhc2hlZCBvdXQgYWdhaW5zdCBpdHMgbWVhc3VyZWQgYWxiZWRvLlxuICAgIHRoaXMuYy5zZXRIZXgoaGV4LCBUSFJFRS5TUkdCQ29sb3JTcGFjZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHRoaXMuY29sLnB1c2godGhpcy5jLnIsIHRoaXMuYy5nLCB0aGlzLmMuYik7XG4gIH1cblxuICAvKiogVHdvIHRyaWFuZ2xlcyBvdmVyIGEgcXVhZCBnaXZlbiBpbiBvcmRlcjsgdGhlIGNhbGxlciBkZWNpZGVzIHRoZSB3aW5kaW5nLiAqL1xuICBxdWFkKGE6IFRIUkVFLlZlY3RvcjMsIGI6IFRIUkVFLlZlY3RvcjMsIGM6IFRIUkVFLlZlY3RvcjMsIGQ6IFRIUkVFLlZlY3RvcjMsIGhleDogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy50cmkoYSwgYiwgYywgaGV4KTtcbiAgICB0aGlzLnRyaShhLCBjLCBkLCBoZXgpO1xuICB9XG5cbiAgZ2VvbWV0cnkoKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh0aGlzLnBvcywgMykpO1xuICAgIC8vIEV2ZXJ5IHZlcnRleCBvZiBldmVyeSBtZXJnZWQgcGllY2UgY2FycmllcyBhIGNvbG91ci4gQSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgcmVhZHMgdGhlXG4gICAgLy8gYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCBhbmQgcmVuZGVycyBCTEFDSyB3aGVyZSBpdCBpcyBtaXNzaW5nLlxuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHRoaXMuY29sLCAzKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIHJldHVybiBnO1xuICB9XG59XG5cbmNvbnN0IHYzID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIpID0+IG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopO1xuY29uc3QgYXQgPSAocDogUHQsIHk6IG51bWJlcikgPT4gdjMocC54LCB5LCBwLnopO1xuXG4vKiogTG9mdCBiZXR3ZWVuIHR3byByaW5ncy4gYG91dHdhcmRgIHBpY2tzIHRoZSB3aW5kaW5nIHRoYXQgc2VuZHMgbm9ybWFscyBhd2F5IGZyb20gdGhlIGF4aXMuICovXG5mdW5jdGlvbiBsb2Z0KHM6IFNvdXAsIGxvd2VyOiBQdFtdLCBseTogbnVtYmVyLCB1cHBlcjogUHRbXSwgdXk6IG51bWJlciwgaGV4OiBudW1iZXIsIG91dHdhcmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgY29uc3QgbiA9IGxvd2VyLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpICs9IDEpIHtcbiAgICBjb25zdCBqID0gKGkgKyAxKSAlIG47XG4gICAgY29uc3QgTDAgPSBhdChsb3dlcltpXSwgbHkpO1xuICAgIGNvbnN0IEwxID0gYXQobG93ZXJbal0sIGx5KTtcbiAgICBjb25zdCBVMCA9IGF0KHVwcGVyW2ldLCB1eSk7XG4gICAgY29uc3QgVTEgPSBhdCh1cHBlcltqXSwgdXkpO1xuICAgIGlmIChvdXR3YXJkKSBzLnF1YWQoTDAsIFUwLCBVMSwgTDEsIGhleCk7XG4gICAgZWxzZSBzLnF1YWQoTDAsIEwxLCBVMSwgVTAsIGhleCk7XG4gIH1cbn1cblxuLyoqIEEgZmxhdCBhbm51bHVzIGJldHdlZW4gdHdvIHJpbmdzIGF0IHRoZSBzYW1lIGhlaWdodC4gYHVwYCBmYWNlcyArWSwgb3RoZXJ3aXNlIC1ZLiAqL1xuZnVuY3Rpb24gYW5udWx1cyhzOiBTb3VwLCBvdXRlcjogUHRbXSwgaW5uZXI6IFB0W10sIHk6IG51bWJlciwgaGV4OiBudW1iZXIsIHVwOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IG4gPSBvdXRlci5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29uc3QgaiA9IChpICsgMSkgJSBuO1xuICAgIGNvbnN0IE8wID0gYXQob3V0ZXJbaV0sIHkpO1xuICAgIGNvbnN0IE8xID0gYXQob3V0ZXJbal0sIHkpO1xuICAgIGNvbnN0IEkwID0gYXQoaW5uZXJbaV0sIHkpO1xuICAgIGNvbnN0IEkxID0gYXQoaW5uZXJbal0sIHkpO1xuICAgIGlmICh1cCkgcy5xdWFkKE8wLCBJMCwgSTEsIE8xLCBoZXgpO1xuICAgIGVsc2Ugcy5xdWFkKE8wLCBPMSwgSTEsIEkwLCBoZXgpO1xuICB9XG59XG5cbi8qKiBBIHRyaWFuZ2xlIGZhbiBjbG9zaW5nIGEgcmluZyBhdCBoZWlnaHQgeS4gYHVwYCBmYWNlcyArWSwgb3RoZXJ3aXNlIC1ZLiAqL1xuZnVuY3Rpb24gY2FwKHM6IFNvdXAsIHJpbmc6IFB0W10sIHk6IG51bWJlciwgaGV4OiBudW1iZXIsIHVwOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IGMgPSB2MygwLCB5LCAwKTtcbiAgY29uc3QgbiA9IHJpbmcubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvbnN0IGogPSAoaSArIDEpICUgbjtcbiAgICBjb25zdCBBID0gYXQocmluZ1tpXSwgeSk7XG4gICAgY29uc3QgQiA9IGF0KHJpbmdbal0sIHkpO1xuICAgIGlmICh1cCkgcy50cmkoYywgQiwgQSwgaGV4KTtcbiAgICBlbHNlIHMudHJpKGMsIEEsIEIsIGhleCk7XG4gIH1cbn1cblxuLyoqIEFuIGF4aXMtYWxpZ25lZCBib3ggYXMgMTIgdHJpYW5nbGVzLCBjZW50cmVkIGF0IChjeCwgY3ksIGN6KS4gKi9cbmZ1bmN0aW9uIGJveChzOiBTb3VwLCBjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICBjb25zdCB4MCA9IGN4IC0gdyAvIDIsIHgxID0gY3ggKyB3IC8gMjtcbiAgY29uc3QgeTAgPSBjeSAtIGggLyAyLCB5MSA9IGN5ICsgaCAvIDI7XG4gIGNvbnN0IHowID0gY3ogLSBkIC8gMiwgejEgPSBjeiArIGQgLyAyO1xuICBjb25zdCBwID0gW1xuICAgIHYzKHgwLCB5MCwgejApLCB2Myh4MSwgeTAsIHowKSwgdjMoeDEsIHkxLCB6MCksIHYzKHgwLCB5MSwgejApLFxuICAgIHYzKHgwLCB5MCwgejEpLCB2Myh4MSwgeTAsIHoxKSwgdjMoeDEsIHkxLCB6MSksIHYzKHgwLCB5MSwgejEpLFxuICBdO1xuICBzLnF1YWQocFs0XSwgcFs1XSwgcFs2XSwgcFs3XSwgaGV4KTsgLy8gK1pcbiAgcy5xdWFkKHBbMV0sIHBbMF0sIHBbM10sIHBbMl0sIGhleCk7IC8vIC1aXG4gIHMucXVhZChwWzVdLCBwWzFdLCBwWzJdLCBwWzZdLCBoZXgpOyAvLyArWFxuICBzLnF1YWQocFswXSwgcFs0XSwgcFs3XSwgcFszXSwgaGV4KTsgLy8gLVhcbiAgcy5xdWFkKHBbM10sIHBbN10sIHBbNl0sIHBbMl0sIGhleCk7IC8vICtZXG4gIHMucXVhZChwWzBdLCBwWzFdLCBwWzVdLCBwWzRdLCBoZXgpOyAvLyAtWVxufVxuXG4vKipcbiAqIEEgaGFuZC1ob2xlIG9uIGEgTEVBTklORyB3YWxsOiBhIHJlY2Vzc2VkIG92YWwgYmFja2luZyBiZWhpbmQgYSBwcm91ZCBvdmFsIGJlemVsIHJpbmcuXG4gKlxuICogRGVsaWJlcmF0ZWx5IE5PVCBhIGJvb2xlYW4gaG9sZSBjdXQgdGhyb3VnaCB0aGUgbG9mdGVkIHNoZWxsIC0tIHRoZSBzYW1lIGNhbGwgdGhlIGNvbmNyZXRlXG4gKiBzdHJlZXQgYmluJ3Mgb3BlbmluZyByZWNvcmRzLiBBIHJlYWwgYXBlcnR1cmUgY29zdHMgYSBib29sZWFuIHRoaXMgYnVkZ2V0IGhhcyBubyByb29tIGZvciwgYW5kXG4gKiBhdCBwcm9wIGRpc3RhbmNlIGEgcmVjZXNzIGJlaGluZCBhIGJlemVsIHJlYWRzIGFzIGEgaG9sZS4gUmVjb3JkZWQgYXMgYW4gYXBwcm94aW1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gaGFuZEhvbGUoczogU291cCwgY2VudHJlOiBUSFJFRS5WZWN0b3IzLCBub3JtYWw6IFRIUkVFLlZlY3RvcjMsIGNvbG9yczogdHlwZW9mIENPTkZJRy5jb2xvcnMpOiB2b2lkIHtcbiAgY29uc3QgeyBhLCBiLCBiZXplbCwgcHJvdWQsIHJlY2Vzcywgc2VnbWVudHMgfSA9IENPTkZJRy5oYW5kSG9sZTtcbiAgY29uc3QgbnogPSBub3JtYWwuY2xvbmUoKS5ub3JtYWxpemUoKTtcbiAgY29uc3QgdXAgPSBNYXRoLmFicyhuei55KSA+IDAuOTkgPyB2MygxLCAwLCAwKSA6IHYzKDAsIDEsIDApO1xuICBjb25zdCBueCA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHVwLCBueikubm9ybWFsaXplKCk7XG4gIGNvbnN0IG55ID0gbmV3IFRIUkVFLlZlY3RvcjMoKS5jcm9zc1ZlY3RvcnMobnosIG54KS5ub3JtYWxpemUoKTtcbiAgY29uc3Qgb24gPSAodTogbnVtYmVyLCB2OiBudW1iZXIsIG9mZjogbnVtYmVyKSA9PlxuICAgIGNlbnRyZS5jbG9uZSgpLmFkZFNjYWxlZFZlY3RvcihueCwgdSkuYWRkU2NhbGVkVmVjdG9yKG55LCB2KS5hZGRTY2FsZWRWZWN0b3IobnosIG9mZik7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWdtZW50czsgaSArPSAxKSB7XG4gICAgY29uc3QgdDAgPSAoaSAvIHNlZ21lbnRzKSAqIE1hdGguUEkgKiAyO1xuICAgIGNvbnN0IHQxID0gKChpICsgMSkgLyBzZWdtZW50cykgKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCBjMCA9IE1hdGguY29zKHQwKSwgczAgPSBNYXRoLnNpbih0MCksIGMxID0gTWF0aC5jb3ModDEpLCBzMSA9IE1hdGguc2luKHQxKTtcbiAgICAvLyBCZXplbDogYSByYWlzZWQgcmluZyBhcm91bmQgdGhlIGFwZXJ0dXJlLCBzdGFuZGluZyBwcm91ZGVzdCBvZiB0aGUgdGhyZWUgc3VyZmFjZXMuXG4gICAgcy5xdWFkKFxuICAgICAgb24oYSAqIGMwLCBiICogczAsIHByb3VkICsgcmVjZXNzKSwgb24oKGEgKyBiZXplbCkgKiBjMCwgKGIgKyBiZXplbCkgKiBzMCwgcHJvdWQpLFxuICAgICAgb24oKGEgKyBiZXplbCkgKiBjMSwgKGIgKyBiZXplbCkgKiBzMSwgcHJvdWQpLCBvbihhICogYzEsIGIgKiBzMSwgcHJvdWQgKyByZWNlc3MpLFxuICAgICAgY29sb3JzLmV4dGVyaW9yLFxuICAgICk7XG4gICAgLy8gVGhlIGFwZXJ0dXJlIGJhY2tpbmcuIEl0IHNpdHMgUFJPVUQgb2YgdGhlIHdhbGwsIG5vdCByZWNlc3NlZCBpbnRvIGl0OiB3aXRoIG5vIGJvb2xlYW4gY3V0XG4gICAgLy8gdGhlcmUgaXMgbm8gaG9sZSB0byBzZWUgdGhyb3VnaCwgc28gYSBiYWNraW5nIHNldCBiZWhpbmQgdGhlIHdhbGwgcGxhbmUgaXMgb2NjbHVkZWQgYnkgdGhlXG4gICAgLy8gd2FsbCBhbmQgcmVuZGVycyBhcyBub3RoaW5nIGF0IGFsbC4gU3RhbmRpbmcgaXQgNCBtbSBvZmYgdGhlIHdhbGwgaW5zaWRlIHRoZSBiZXplbCdzIHRocm9hdFxuICAgIC8vIGlzIHRoZSBzYW1lIGNhbGwgdGhlIGNvbmNyZXRlIHN0cmVldCBiaW4ncyBvcGVuaW5nIHBhdGNoIHJlY29yZHMsIGFuZCBpdCByZWFkcyBhcyBhIGhvbGUgYXRcbiAgICAvLyBwcm9wIGRpc3RhbmNlIHdoaWxlIHN0YXlpbmcgYSBzZXBhcmF0ZSBwbGFuZSB0aGF0IGNhbm5vdCB6LWZpZ2h0LlxuICAgIHMudHJpKG9uKDAsIDAsIHByb3VkKSwgb24oYSAqIGMwLCBiICogczAsIHByb3VkICsgcmVjZXNzKSwgb24oYSAqIGMxLCBiICogczEsIHByb3VkICsgcmVjZXNzKSwgY29sb3JzLnJlY2Vzcyk7XG4gIH1cbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgYnVpbGQgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9wZW5Ub3BTdGVlbFNraXBCaW5Nb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ09wZW4tVG9wIFN0ZWVsIFNraXAgQmluJztcblxuICBjb25zdCBtYXRlcmlhbHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IG0gb2YgQ09ORklHLm1hdGVyaWFscykge1xuICAgIG1hdGVyaWFsc1ttLmlkXSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKG0uY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBtLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogbS5tZXRhbG5lc3MsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IG0udmVydGV4Q29sb3JzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBtYXRlcmlhbHNbbS5pZF0ubmFtZSA9IG0uaWQ7XG4gIH1cblxuICBjb25zdCBzZWcgPSBDT05GSUcuY29ybmVyU2VnbWVudHM7XG4gIGNvbnN0IFIgPSBDT05GSUcucmluZ3M7XG4gIGNvbnN0IEMgPSBDT05GSUcuY29sb3JzO1xuICBjb25zdCByaW5nID0gKGs6IGtleW9mIHR5cGVvZiBSKSA9PiByb3VuZGVkUmVjdFJpbmcoUltrXS5odywgUltrXS5oZCwgUltrXS5yLCBzZWcpO1xuXG4gIGNvbnN0IHdhbGxGb290ID0gcmluZygnd2FsbEZvb3QnKTtcbiAgY29uc3Qgd2FsbEhlYWQgPSByaW5nKCd3YWxsSGVhZCcpO1xuICBjb25zdCByaW1PdXRlciA9IHJpbmcoJ3JpbU91dGVyJyk7XG4gIGNvbnN0IHJpbUlubmVyID0gcmluZygncmltSW5uZXInKTtcbiAgY29uc3QgaW5uZXJGb290ID0gcmluZygnaW5uZXJGb290Jyk7XG4gIGNvbnN0IHBsaW50aFRvcCA9IHJpbmcoJ3BsaW50aFRvcCcpO1xuICBjb25zdCBwbGludGhCb3QgPSByaW5nKCdwbGludGhCb3QnKTtcblxuICBjb25zdCBzID0gbmV3IFNvdXAoKTtcblxuICAvLyBUaGUgdmVzc2VsLCBpbiBvbmUgY29udGludW91cyBydW46IHVwIHRoZSBvdXRzaWRlLCBvdmVyIHRoZSByaW0sIGJhY2sgZG93biB0aGUgaW5zaWRlLlxuICBsb2Z0KHMsIHdhbGxGb290LCBSLndhbGxGb290LnksIHdhbGxIZWFkLCBSLndhbGxIZWFkLnksIEMuZXh0ZXJpb3IsIHRydWUpO1xuICBsb2Z0KHMsIHdhbGxIZWFkLCBSLndhbGxIZWFkLnksIHJpbU91dGVyLCBSLnJpbU91dGVyLnksIEMucmltLCB0cnVlKTtcbiAgYW5udWx1cyhzLCByaW1PdXRlciwgcmltSW5uZXIsIFIucmltT3V0ZXIueSwgQy5yaW0sIHRydWUpO1xuICBsb2Z0KHMsIGlubmVyRm9vdCwgUi5pbm5lckZvb3QueSwgcmltSW5uZXIsIFIucmltSW5uZXIueSwgQy5pbnRlcmlvciwgZmFsc2UpO1xuICBjYXAocywgaW5uZXJGb290LCBSLmlubmVyRm9vdC55LCBDLmludGVyaW9yLCB0cnVlKTtcblxuICAvLyBQbGludGggcmFpbCwgc3RhbmRpbmcgMTAgbW0gcHJvdWQgb2YgdGhlIHdhbGwgZm9vdCwgY2xvc2VkIHVuZGVybmVhdGguIFRoZSBzdGVwIGJldHdlZW4gdGhlXG4gIC8vIHBsaW50aCdzIG91dGVyIHJpbmcgYW5kIHRoZSB3YWxsIGZvb3QgaW5zaWRlIGl0IGlzIGEgcmVhbCBob3Jpem9udGFsIGxlZGdlIGFuZCBoYXMgdG8gYmVcbiAgLy8gc3VyZmFjZWQ6IGxlZnQgb3BlbiBpdCBpcyBhIGdhcCBpbiB0aGUgc2hlbGwsIGFuZCBpdCByZW5kZXJlZCBhcyBhIGRhcmsgc2VhbSByb3VuZCB0aGUgYmFzZS5cbiAgbG9mdChzLCBwbGludGhCb3QsIFIucGxpbnRoQm90LnksIHBsaW50aFRvcCwgUi5wbGludGhUb3AueSwgQy5leHRlcmlvciwgdHJ1ZSk7XG4gIGFubnVsdXMocywgcGxpbnRoVG9wLCB3YWxsRm9vdCwgUi5wbGludGhUb3AueSwgQy5leHRlcmlvciwgdHJ1ZSk7XG4gIGNhcChzLCBwbGludGhCb3QsIFIucGxpbnRoQm90LnksIEMuZXh0ZXJpb3IsIGZhbHNlKTtcblxuICAvLyBGb3VyIGZlZXQsIGluc2V0IGZyb20gdGhlIHBsaW50aCBjb3JuZXJzIHNvIHRoZSB0dWIgc3RhbmRzIGNsZWFyIG9mIHRoZSBncm91bmQuXG4gIGNvbnN0IGYgPSBDT05GSUcuZmVldDtcbiAgY29uc3QgZnggPSBSLnBsaW50aEJvdC5odyAtIGYuaW5zZXQgLSBmLncgLyAyO1xuICBjb25zdCBmeiA9IFIucGxpbnRoQm90LmhkIC0gZi5pbnNldCAtIGYuZCAvIDI7XG4gIGZvciAoY29uc3Qgc3ggb2YgWy0xLCAxXSkge1xuICAgIGZvciAoY29uc3Qgc3ogb2YgWy0xLCAxXSkge1xuICAgICAgYm94KHMsIHN4ICogZngsIGYuaCAvIDIsIHN6ICogZnosIGYudywgZi5oLCBmLmQsIEMuZXh0ZXJpb3IpO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9uZSBoYW5kLWhvbGUgcGVyIHdhbGwuIFRoZSB3YWxscyBMRUFOLCBzbyBlYWNoIHNpdHMgb24gaXRzIG93biB0aWx0ZWQgcGxhbmUgYW5kIGl0cyBub3JtYWxcbiAgLy8gdGlsdHMgZG93biBieSB0aGUgd2FsbCdzIG93biBsZWFuIC0tIDguOTcgZGVncmVlcyBvbiB0aGUgbG9uZyB3YWxscywgNi4wMSBvbiB0aGUgc2hvcnQuXG4gIGNvbnN0IGh5ID0gQ09ORklHLmhhbmRIb2xlLnk7XG4gIGNvbnN0IHQgPSAoaHkgLSBSLndhbGxGb290LnkpIC8gKFIud2FsbEhlYWQueSAtIFIud2FsbEZvb3QueSk7XG4gIGNvbnN0IGh3QXQgPSBSLndhbGxGb290Lmh3ICsgKFIud2FsbEhlYWQuaHcgLSBSLndhbGxGb290Lmh3KSAqIHQ7XG4gIGNvbnN0IGhkQXQgPSBSLndhbGxGb290LmhkICsgKFIud2FsbEhlYWQuaGQgLSBSLndhbGxGb290LmhkKSAqIHQ7XG4gIGNvbnN0IGxlYW5XID0gTWF0aC5hdGFuMihSLndhbGxIZWFkLmh3IC0gUi53YWxsRm9vdC5odywgUi53YWxsSGVhZC55IC0gUi53YWxsRm9vdC55KTtcbiAgY29uc3QgbGVhbkQgPSBNYXRoLmF0YW4yKFIud2FsbEhlYWQuaGQgLSBSLndhbGxGb290LmhkLCBSLndhbGxIZWFkLnkgLSBSLndhbGxGb290LnkpO1xuICBmb3IgKGNvbnN0IHN6IG9mIFstMSwgMV0pIHtcbiAgICBoYW5kSG9sZShzLCB2MygwLCBoeSwgc3ogKiBoZEF0KSwgdjMoMCwgLU1hdGguc2luKGxlYW5EKSwgc3ogKiBNYXRoLmNvcyhsZWFuRCkpLCBDKTtcbiAgfVxuICBmb3IgKGNvbnN0IHN4IG9mIFstMSwgMV0pIHtcbiAgICBoYW5kSG9sZShzLCB2MyhzeCAqIGh3QXQsIGh5LCAwKSwgdjMoc3ggKiBNYXRoLmNvcyhsZWFuVyksIC1NYXRoLnNpbihsZWFuVyksIDApLCBDKTtcbiAgfVxuXG4gIGNvbnN0IHNoZWxsR2VvID0gcy5nZW9tZXRyeSgpO1xuICBjb25zdCBzaGVsbCA9IG5ldyBUSFJFRS5NZXNoKHNoZWxsR2VvLCBtYXRlcmlhbHNbJ3dlYXRoZXJlZC1zdGVlbCddKTtcbiAgc2hlbGwubmFtZSA9ICdUYXBlcmVkIHNoZWxsIHdpdGggcm9sbGVkIHJpbSwgcGxpbnRoIGFuZCBmZWV0JztcbiAgc2hlbGwuY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBzaGVsbC5yZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG4gIHJvb3QuYWRkKHNoZWxsKTtcblxuICAvLyBUaGUgZm91ciBsaWZ0aW5nIGx1Z3M6IE9ORSBJbnN0YW5jZWRNZXNoLCBzbyBvbmUgZHJhdyBjYWxsIGFuZCBvbmUgdW5pcXVlIGdlb21ldHJ5IGZvciB0aGVcbiAgLy8gc2V0LiBUaHJlZSBhcmUgdmlzaWJsZSBpbiB0aGUgcGxhdGU7IHRoZSBmb3VydGggZm9sbG93cyBmcm9tIDQtZm9sZCBzeW1tZXRyeSwgYmVjYXVzZSBhIGNyYW5lXG4gIC8vIGxpZnQgbmVlZHMgc3ltbWV0cmljIHBpY2sgcG9pbnRzLlxuICBjb25zdCBMID0gQ09ORklHLmx1ZztcbiAgY29uc3QgbHVnR2VvID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KEwudywgTC5oLCBMLnQpO1xuICBjb25zdCBsdWdzID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2gobHVnR2VvLCBtYXRlcmlhbHNbJ2JyYWNrZXQtc3RlZWwnXSwgNCk7XG4gIGx1Z3MubmFtZSA9ICdDb3JuZXIgbGlmdGluZyBsdWdzJztcbiAgbHVncy5jYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGx1Z3MucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCBtNCA9IG5ldyBUSFJFRS5NYXRyaXg0KCk7XG4gIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpO1xuICBjb25zdCBjb3JuZXJzOiBBcnJheTxbbnVtYmVyLCBudW1iZXJdPiA9IFtbMSwgMV0sIFstMSwgMV0sIFstMSwgLTFdLCBbMSwgLTFdXTtcbiAgY29ybmVycy5mb3JFYWNoKChbc3gsIHN6XSwgaSkgPT4ge1xuICAgIC8vIEVhY2ggbHVnIHNpdHMgT04gdGhlIHJpbSdzIHJvdW5kZWQgY29ybmVyLCBsYXBwZWQgb3ZlciBpdHMgb3V0ZXIgZmFjZSBhbmQgeWF3ZWQgdG8gZmFjZVxuICAgIC8vIG91dHdhcmQgYWxvbmcgdGhlIGNvcm5lciBkaWFnb25hbC4gUGxhY2VkIGluYm9hcmQgb2YgdGhhdCBpdCByZWFkcyBhcyBhIHRhYiBzdGFuZGluZyB1cFxuICAgIC8vIGluc2lkZSB0aGUgbW91dGgsIHdoaWNoIGlzIG5vdCB3aGF0IGEgY3JhbmUgaG9va3MuXG4gICAgY29uc3QgYXJjWCA9IHN4ICogKFIucmltT3V0ZXIuaHcgLSBSLnJpbU91dGVyLnIpO1xuICAgIGNvbnN0IGFyY1ogPSBzeiAqIChSLnJpbU91dGVyLmhkIC0gUi5yaW1PdXRlci5yKTtcbiAgICAvLyBTZWF0ZWQgc28gdGhlIGx1ZydzIG91dGVyIGNvcm5lciBsYW5kcyBleGFjdGx5IG9uIHRoZSByaW0ncyB3aWRlc3QgcGxhbmUuIFB1c2hlZCBmdXJ0aGVyXG4gICAgLy8gb3V0IGl0IHN0aWxsIHN0cmFkZGxlcyBjb3JyZWN0bHkgYnV0IGNhcnJpZXMgdGhlIHdob2xlIHByb3AncyBib3VuZGluZyBib3ggcGFzdCB0aGVcbiAgICAvLyBkZWNsYXJlZCAxLjUgeCAxLjAgbSBlbnZlbG9wZSAtLSBtZWFzdXJlZCBhdCAxLjU5MiBtIHdpZGUsIDYlIG92ZXIgLS0gYW5kIHRoZSBkZWNsYXJlZFxuICAgIC8vIGVudmVsb3BlIGlzIHRoZSBjb250cmFjdCBhIGxldmVsIGJ1aWxkZXIgcGxhY2VzIGFnYWluc3QuXG4gICAgY29uc3QgaGFsZiA9ICgoTC53ICsgTC50KSAvIDIpICogTWF0aC5TUVJUMV8yO1xuICAgIGNvbnN0IGRpYWcgPSBSLnJpbU91dGVyLnIgLSBoYWxmO1xuICAgIGNvbnN0IHlhdyA9IE1hdGguYXRhbjIoc3gsIHN6KTtcbiAgICBxLnNldEZyb21BeGlzQW5nbGUodjMoMCwgMSwgMCksIHlhdyk7XG4gICAgbTQuY29tcG9zZSh2MyhhcmNYICsgc3ggKiBkaWFnLCBMLnksIGFyY1ogKyBzeiAqIGRpYWcpLCBxLCB2MygxLCAxLCAxKSk7XG4gICAgbHVncy5zZXRNYXRyaXhBdChpLCBtNCk7XG4gIH0pO1xuICBsdWdzLmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcm9vdC5hZGQobHVncyk7XG5cbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHsgcm9vdCwgdHViOiBzaGVsbCwgJ2Nvcm5lci1sdWdzJzogbHVncyB9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0geyB0dWI6IHNoZWxsLCAnY29ybmVyLWx1Z3MnOiBsdWdzIGFzIHVua25vd24gYXMgVEhSRUUuTWVzaCB9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge1xuICAgIHR1Yjoge1xuICAgICAgc2hhcGU6ICdib3gnLFxuICAgICAgbG9jYWxDZW50ZXI6IFswLCAwLjUyNSwgMF0sXG4gICAgICBzaXplOiBbMS41LCAxLjA1LCAxLjBdLFxuICAgICAgYXhpczogWzAsIDEsIDBdLFxuICAgICAgbm90ZXM6XG4gICAgICAgICdBdXRob3JpbmcgaW50ZW50IG9ubHkuIHRoYWlraXQgZGVyaXZlcyB0aGUgc2hpcHBlZCBjb21wb3VuZCBmcm9tIHRoZSBidWlsdCBnZW9tZXRyeSB3aXRoICcgK1xuICAgICAgICAnc2NyaXB0cy9kZXJpdmUtY29sbGlkZXJzLm1qczsgdGhpcyBpcyBub3QgdGhhdCBmaWxlLicsXG4gICAgfSxcbiAgfTtcblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXMsXG4gICAgbWVzaGVzLFxuICAgIHNvY2tldHM6IHt9LFxuICAgIGNvbGxpZGVycyxcbiAgICBkZXN0cnVjdGlvbkdyb3Vwczoge30sXG4gIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlT3BlblRvcFN0ZWVsU2tpcEJpbk1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAmJiB0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIE9ORSByb290IHBpdm90IGFuZCBOTyBzb2NrZXRzLiBUaGlzIHZhcmlhbnQgaGFzIG5vIGxpZHMsIG5vIGNhc3RvcnMgYW5kIG5vIGhpbmdlZCBwYXJ0IG9mXG4gICAgLy8gYW55IGtpbmQ6IGl0IGlzIGEgd2VsZGVkIHN0ZWVsIHR1YiB0aGF0IHRha2VzIGEgY3JhbmUgdG8gbW92ZS4gQSBwaXZvdCBpcyBhIHByb21pc2UgdGhhdCBhXG4gICAgLy8gcGFydCB0dXJucyBvbiB0aGF0IGF4aXMgYW5kIGEgc29ja2V0IGEgcHJvbWlzZSB0aGF0IHNvbWV0aGluZyBhdHRhY2hlcyB0aGVyZSwgc28gZGVjbGFyaW5nXG4gICAgLy8gZWl0aGVyIGhlcmUgd291bGQgZGVzY3JpYmUgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZDogdGhlIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGUgcHVwcGV0ZWVyXG4gICAgICAvLyBicmlkZ2UgYW5kIGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0XG4gICAgICAvLyBhcnJpdmluZyB1bmRlZmluZWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90czogW3Jvb3RQaXZvdF0sXG4gICAgICBzb2NrZXRzOiBbXSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbXSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBeUN2QixJQUFNLFNBQVM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFNYixRQUFRO0FBQUEsSUFDTixVQUFVO0FBQUE7QUFBQSxJQUNWLFVBQVU7QUFBQTtBQUFBLElBQ1YsS0FBSztBQUFBO0FBQUEsSUFDTCxRQUFRO0FBQUE7QUFBQSxFQUNWO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxFQUFFLElBQUksbUJBQW1CLE9BQU8sVUFBVSxXQUFXLE1BQU0sV0FBVyxNQUFNLGNBQWMsS0FBSztBQUFBLElBQy9GLEVBQUUsSUFBSSxpQkFBaUIsT0FBTyxVQUFVLFdBQVcsTUFBTSxXQUFXLE1BQU0sY0FBYyxNQUFNO0FBQUEsRUFDaEc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBb0JBLE9BQU87QUFBQSxJQUNMLFVBQVcsRUFBRSxJQUFJLE9BQU8sSUFBSSxNQUFPLEdBQUcsT0FBTyxHQUFHLEtBQU07QUFBQSxJQUN0RCxVQUFXLEVBQUUsSUFBSSxLQUFPLElBQUksTUFBTyxHQUFHLE9BQU8sR0FBRyxNQUFNO0FBQUEs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RyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsSUFBRyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsSUFBRyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsRUFDL0Q7QUFDQSxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsQyxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsQyxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsQyxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsQyxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNsQyxJQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUNwQztBQVNBLFNBQVMsU0FBUyxHQUFTLFFBQXVCLFFBQXVCLFFBQW9DO0FBQzNHLFFBQU0sRUFBRSxHQUFHLEdBQUcsT0FBTyxPQUFPLFFBQVEsU0FBUyxJQUFJLE9BQU87QUFDeEQsUUFBTSxLQUFLLE9BQU8sTUFBTSxFQUFFLFVBQVU7QUFDcEMsUUFBTSxLQUFLLEtBQUssSUFBSSxHQUFHLENBQUMsSUFBSSxPQUFPLEdBQUcsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzNELFFBQU0sS0FBSyxJQUFVLGNBQVEsRUFBRSxhQUFhLElBQUksRUFBRSxFQUFFLFVBQVU7QUFDOUQsUUFBTSxLQUFLLElBQVUsY0FBUSxFQUFFLGFBQWEsSUFB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
