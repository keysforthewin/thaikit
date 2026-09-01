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

// ../repo/scratch/four-wheel-plastic-refuse-bin/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createFourWheelPlasticRefuseBinModel: () => createFourWheelPlasticRefuseBinModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  colors: {
    // crops/body.png measured #46624c at luma 90.4, saturation 0.281. LIFTED to luma 118: a
    // side-lit face renders at ~0.56 of its painted luma, so the measurement would land at 51,
    // below the harness backdrop's 58, and the gate reads that as a hole. Saturation is kept
    // above 0.26 so the prop clears on chroma as well as value.
    green: 6061410,
    tyre: 3881787,
    fork: 9277330
  },
  material: { id: "moulded-plastic", roughness: 0.62, metalness: 0 },
  /* WIDTH CORRECTED 2026-08-31, from 1.37 m to 0.94 m. The declared 1.37 was a list-time estimate
   * and it made this bin half again as wide as it should be relative to its own depth. Two
   * independent readings agree and neither is the declaration:
   *
   *   - The Meshy proxy's band table read width/height 0.65-0.76 across bands 2-9 against this
   *     build's 0.94-1.09 -- eight of ten bands over the 0.12 flag, mean |delta width| 0.34 -- and
   *     it read DEPTH at 0.50-0.62 against the build's 0.55-0.64, which is already right. So the
   *     error is in ONE axis, which is what makes it a declaration error rather than a scale one.
   *   - The plate, read as a 3/4 view at roughly 30 degrees yaw: the front face spans ~620 px and
   *     the side ~300, so the true width/depth is (620/cos30)/(300/sin30) = 1.19. The proxy says
   *     1.23. The build said 1.76.
   *
   * Depth and height are untouched at 0.78 and 1.22; width follows the agreed width/depth of 1.20.
   * Everything below is scaled on X by 0.678 and nothing else moves. */
  body: {
    footY: 0.15,
    rimY: 1,
    lipY: 1.05,
    footHW: 0.39,
    footHD: 0.3,
    // base 0.78 x 0.60
    rimHW: 0.452,
    rimHD: 0.372,
    // wall head; the proud lip above it reaches the declared 0.94 x 0.78
    corner: 0.06,
    seg: 4,
    // 4 quadrants x 5 points = 20 points per ring
    lipProud: 0.018,
    floorY: 0.3
    // interior floor, seen only when the lid is open
  },
  /* The ribs were 12 mm proud and 75 mm wide and read as scratches rather than as the deep moulded
   * channels the plate shows running the full height of the wall. Doubled in relief and widened;
   * the spread tightens with the narrower body so five still fit across the front without
   * touching. They stay PROUD pilasters rather than cut channels -- at prop distance the two read
   * the same, and cutting them would mean booleaning the tapered loft for no visible gain. */
  // y1 stops at 0.88, below the rim, so the two front lugs sit clear above the channels
  // instead of growing out of the top of whichever rib they land in front of.
  ribs: { count: 5, w: 0.07, proud: 0.026, y0: 0.22, y1: 0.88, spread: 0.09 },
  castor: { r: 0.085, tyreW: 0.05, seg: 8, forkH: 0.075, insetX: 0.13, insetZ: 0.1 },
  /* The lid was a plain slab with one thin proud strip. The plate has a stepped lid that
   * OVERHANGS the body all round, a large recessed centre panel inside a raised border, and
   * diagonal grip ribbing at the corners -- which is most of what anyone recognises about a bin
   * lid seen from above, and this prop is nearly always seen from above. */
  lid: {
    y0: 1.05,
    y1: 1.204,
    hw: 0.487,
    hd: 0.408,
    recess: 0.02,
    overhang: 0.035,
    grip: { n: 5, w: 0.026, len: 0.1, gap: 0.02, h: 0.012 }
  }
};
function roundedRectRing(hw, hd, r, seg) {
  const rad = Math.min(r, Math.min(hw, hd) * 0.98);
  const cx = hw - rad, cz = hd - rad;
  const centres = [{ x: +cx, z: +cz }, { x: -cx, z: +cz }, { x: -cx, z: -cz }, { x: +cx, z: -cz }];
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
  quad(a, b, c, d, hex) {
    this.tri(a, b, c, hex);
    this.tri(a, c, d, hex);
  }
  box(cx, cy, cz, w, h, d, hex) {
    const x0 = cx - w / 2, x1 = cx + w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = cz - d / 2, z1 = cz + d / 2;
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
    this.quad(p[4], p[5], p[6], p[7], hex);
    this.quad(p[1], p[0], p[3], p[2], hex);
    this.quad(p[5], p[1], p[2], p[6], hex);
    this.quad(p[0], p[4], p[7], p[3], hex);
    this.quad(p[3], p[7], p[6], p[2], hex);
    this.quad(p[0], p[1], p[5], p[4], hex);
  }
  /* A rib lying on a LEANING wall: a bar of constant width and thickness whose two ends sit at
   * different depths, so its outer face stays parallel to the wall it is applied to. The wall of
   * this bin leans outward as it rises, and a rib is a moulding ON that wall, not a box near it.
   *
   * This exists because the two obvious alternatives both fail visibly. One straight box set at
   * the wall depth of its own midpoint is buried over half its length and floating over the other
   * half. A STACK of short straight boxes -- which was tried -- steps by the full taper over each
   * segment: 18 mm a step at four segments here, which renders as an unmistakable staircase, and
   * more segments only makes the staircase finer rather than removing it.
   */
  wallRib(cx, w, yA, zA, yB, zB, thick, sz, hex) {
    const x0 = cx - w / 2, x1 = cx + w / 2;
    const a0 = sz * zA, a1 = sz * (zA + thick), b0 = sz * zB, b1 = sz * (zB + thick);
    const p = [
      v3(x0, yA, a0),
      v3(x1, yA, a0),
      v3(x1, yB, b0),
      v3(x0, yB, b0),
      v3(x0, yA, a1),
      v3(x1, yA, a1),
      v3(x1, yB, b1),
      v3(x0, yB, b1)
    ];
    if (sz > 0) {
      this.quad(p[4], p[5], p[6], p[7], hex);
      this.quad(p[1], p[0], p[3], p[2], hex);
      this.quad(p[5], p[1], p[2], p[6], hex);
      this.quad(p[0], p[4], p[7], p[3], hex);
      this.quad(p[3], p[7], p[6], p[2], hex);
      this.quad(p[0], p[1], p[5], p[4], hex);
    } else {
      this.quad(p[7], p[6], p[5], p[4], hex);
      this.quad(p[2], p[3], p[0], p[1], hex);
      this.quad(p[6], p[2], p[1], p[5], hex);
      this.quad(p[3], p[7], p[4], p[0], hex);
      this.quad(p[2], p[6], p[7], p[3], hex);
      this.quad(p[4], p[5], p[1], p[0], hex);
    }
  }
  /* A box turned about Y, for the lid's diagonal grip ribbing. Built at the origin and rotated
   * before translating, so the rotation is about the bar's OWN centre rather than about the lid's
   * -- rotating after translating swings the bar away from the corner it belongs to. */
  boxRotY(cx, cy, cz, w, h, d, ang, hex) {
    const co = Math.cos(ang), si = Math.sin(ang);
    const x0 = -w / 2, x1 = w / 2, y0 = cy - h / 2, y1 = cy + h / 2, z0 = -d / 2, z1 = d / 2;
    const m = (x, y, z) => v3(cx + x * co + z * si, y, cz - x * si + z * co);
    const p = [
      m(x0, y0, z0),
      m(x1, y0, z0),
      m(x1, y1, z0),
      m(x0, y1, z0),
      m(x0, y0, z1),
      m(x1, y0, z1),
      m(x1, y1, z1),
      m(x0, y1, z1)
    ];
    this.quad(p[4], p[5], p[6], p[7], hex);
    this.quad(p[1], p[0], p[3], p[2], hex);
    this.quad(p[5], p[1], p[2], p[6], hex);
    this.quad(p[0], p[4], p[7], p[3], hex);
    this.quad(p[3], p[7], p[6], p[2], hex);
    this.quad(p[0], p[1], p[5], p[4], hex);
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
function loft(s, lo, ly, up, uy, hex, outward) {
  const n = lo.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const L0 = at(lo[i], ly), L1 = at(lo[j], ly), U0 = at(up[i], uy), U1 = at(up[j], uy);
    if (outward) s.quad(L0, U0, U1, L1, hex);
    else s.quad(L0, L1, U1, U0, hex);
  }
}
function annulus(s, outer, inner, y, hex, up) {
  const n = outer.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n;
    const O0 = at(outer[i], y), O1 = at(outer[j], y), I0 = at(inner[i], y), I1 = at(inner[j], y);
    if (up) s.quad(O0, I0, I1, O1, hex);
    else s.quad(O0, O1, I1, I0, hex);
  }
}
function cap(s, ring, y, hex, up) {
  const c = v3(0, y, 0), n = ring.length;
  for (let i = 0; i < n; i += 1) {
    const j = (i + 1) % n, A = at(ring[i], y), B = at(ring[j], y);
    if (up) s.tri(c, B, A, hex);
    else s.tri(c, A, B, hex);
  }
}
function castor(s, cx, cz, C) {
  const { r, tyreW, seg, forkH } = C.castor;
  const cy = r;
  for (let i = 0; i < seg; i += 1) {
    const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2;
    const p0 = v3(cx + r * Math.cos(a0), cy + r * Math.sin(a0), cz - tyreW / 2);
    const p1 = v3(cx + r * Math.cos(a1), cy + r * Math.sin(a1), cz - tyreW / 2);
    const q0 = v3(p0.x, p0.y, cz + tyreW / 2), q1 = v3(p1.x, p1.y, cz + tyreW / 2);
    s.quad(p0, p1, q1, q0, C.colors.tyre);
    s.tri(v3(cx, cy, cz + tyreW / 2), q0, q1, C.colors.tyre);
    s.tri(v3(cx, cy, cz - tyreW / 2), p1, p0, C.colors.tyre);
  }
  s.box(cx, cy + r + forkH / 2, cz, 0.055, forkH, tyreW + 0.03, C.colors.fork);
}
function createFourWheelPlasticRefuseBinModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Four-Wheel Plastic Refuse Bin";
  const mat = new THREE.MeshStandardMaterial({
    color: 16777215,
    roughness: CONFIG.material.roughness,
    metalness: CONFIG.material.metalness,
    vertexColors: true,
    wireframe: options.wireframe ?? false
  });
  mat.name = CONFIG.material.id;
  const B = CONFIG.body, C = CONFIG.colors;
  const foot = roundedRectRing(B.footHW, B.footHD, B.corner, B.seg);
  const rim = roundedRectRing(B.rimHW, B.rimHD, B.corner, B.seg);
  const lipOut = roundedRectRing(B.rimHW + B.lipProud, B.rimHD + B.lipProud, B.corner, B.seg);
  const inner = roundedRectRing(B.rimHW - 0.03, B.rimHD - 0.03, B.corner, B.seg);
  const innerFoot = roundedRectRing(B.footHW - 0.03, B.footHD - 0.03, B.corner, B.seg);
  const s = new Soup();
  loft(s, foot, B.footY, rim, B.rimY, C.green, true);
  cap(s, foot, B.footY, C.green, false);
  loft(s, rim, B.rimY, lipOut, B.lipY, C.green, true);
  annulus(s, lipOut, inner, B.lipY, C.green, true);
  loft(s, innerFoot, B.floorY, inner, B.lipY, C.green, false);
  cap(s, innerFoot, B.floorY, C.green, true);
  const R = CONFIG.ribs;
  const depthAt = (y) => B.footHD + (B.rimHD - B.footHD) * ((y - B.footY) / (B.rimY - B.footY));
  for (let i = 0; i < R.count; i += 1) {
    const t = (i + 0.5) / R.count;
    const x = (t - 0.5) * 2 * (B.rimHW - R.spread);
    for (const sz of [-1, 1]) {
      s.wallRib(x, R.w, R.y0, depthAt(R.y0), R.y1, depthAt(R.y1), R.proud, sz, C.green);
    }
  }
  for (const sx of [-1, 1]) {
    s.box(sx * B.rimHW * 0.45, B.rimY - 0.075, B.rimHD + 0.015, 0.075, 0.105, 0.03, C.green);
  }
  const K = CONFIG.castor;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    castor(s, sx * (B.footHW - K.insetX), sz * (B.footHD - K.insetZ), CONFIG);
  }
  const bodyMesh = new THREE.Mesh(s.geometry(), mat);
  bodyMesh.name = "Tub, rib pilasters, rim lip and castors";
  bodyMesh.castShadow = options.castShadow ?? true;
  bodyMesh.receiveShadow = options.receiveShadow ?? true;
  root.add(bodyMesh);
  const L = CONFIG.lid;
  const hinge = new THREE.Group();
  hinge.name = "lid-hinge";
  hinge.position.set(0, L.y0, -L.hd);
  root.add(hinge);
  const ls = new Soup();
  const skirt = L.y1 - L.y0;
  const oh = L.overhang;
  ls.box(0, skirt * 0.3, L.hd, (L.hw + oh) * 2, skirt * 0.6, (L.hd + oh) * 2, C.green);
  ls.box(0, skirt * 0.8, L.hd, L.hw * 2, skirt * 0.4, L.hd * 2, C.green);
  ls.box(0, skirt + 0.01, L.hd, L.hw * 1.2, 0.02, L.hd * 1.15, C.green);
  const GR = L.grip;
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      for (let i = 0; i < GR.n; i += 1) {
        const off = (i - (GR.n - 1) / 2) * GR.gap;
        ls.boxRotY(
          sx * (L.hw - GR.len * 0.6) + sx * off,
          skirt + 0.02 - GR.h / 2 + 4e-3,
          L.hd + sz * (L.hd - GR.len * 0.55) - sz * off,
          GR.len,
          GR.h,
          GR.w,
          -sx * sz * Math.PI / 4,
          C.green
        );
      }
    }
  }
  const lidMesh = new THREE.Mesh(ls.geometry(), mat);
  lidMesh.name = "Hinged lid";
  lidMesh.castShadow = options.castShadow ?? true;
  lidMesh.receiveShadow = options.receiveShadow ?? true;
  hinge.add(lidMesh);
  const nodes = { root, body: bodyMesh, "lid-hinge": hinge, lid: lidMesh };
  const colliders = {
    body: {
      shape: "box",
      localCenter: [0, 0.61, 0],
      size: [0.94, 1.22, 0.78],
      axis: [0, 1, 0],
      notes: "Authoring intent only; thaikit derives the shipped compound from the built geometry."
    }
  };
  root.userData.sculptRuntime = {
    nodes,
    meshes: { body: bodyMesh, lid: lidMesh },
    sockets: {},
    colliders,
    destructionGroups: {}
  };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createFourWheelPlasticRefuseBinModel(options);
  if (spec && typeof spec === "object") root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    const lidHinge = nodes["lid-hinge"];
    if (lidHinge) {
      lidHinge.userData.actionProfile = {
        animationRole: "child",
        pivot: {
          mode: "custom",
          localPosition: [lidHinge.position.x, lidHinge.position.y, lidHinge.position.z],
          axis: [1, 0, 0],
          name: "lid-hinge",
          component: "lid",
          notes: "The rear top edge. Rotating this node on +X opens the lid."
        }
      };
    }
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record: a Record of Object3D is circular across the puppeteer bridge.
      nodes: Object.keys(nodes).length,
      pivots: lidHinge ? [rootPivot, lidHinge] : [rootPivot],
      sockets: [],
      colliders,
      destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} }
    };
  }
  return root;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRm91ci1XaGVlbCBQbGFzdGljIFJlZnVzZSBCaW4gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLlxuICpcbiAqIEVudmVsb3BlIDAuOTQgeCAxLjIyIHggMC43OCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIgKHRoZSBjYXN0b3JzJyBjb250YWN0IHBvaW50IGlzIHk9MCksICtZIHVwLFxuICogK1ogdGhlIGZyb250IHdhbGwuXG4gKlxuICogVGhlIGJvZHkgaXMgUkVDVEFOR1VMQVIgYW5kIEZMQVQtU0lERUQgYW5kIHRhcGVycyBJTldBUkQgdG93YXJkIHRoZSBiYXNlIC0tIHRoZSBvcHBvc2l0ZSBvZiB0aGVcbiAqIG9wZW4tdG9wIHNraXAgYmluIGluIHRoaXMga2l0LCBhbmQgdGhlIHRoaW5nIHRoYXQgbW9zdCBzZXBhcmF0ZXMgdGhlIHR3byBzaWxob3VldHRlcy4gVGhlIHBsYXRlXG4gKiB3YXMgcmVnZW5lcmF0ZWQgc3BlY2lmaWNhbGx5IHRvIGtpbGwgYSByb3VuZCBkb21lZCByZWFkaW5nLCBzbyBhIGN5bGluZHJpY2FsIGJvZHkgaXMgdGhlIG9uZVxuICogZmFpbHVyZSB0aGlzIHByb3AgbXVzdCBub3QgaGF2ZS5cbiAqXG4gKiBCdWRnZXQgKHRoYWlraXQgbWVkaXVtIGNsYXNzKTogMiBkcmF3IGNhbGxzLCAyIG1hdGVyaWFscywgNCB1bmlxdWUgZ2VvbWV0cmllcywgMjAwMCB0cmlhbmdsZXMuXG4gKiBUaGUgdHViLCByaWIgcGlsYXN0ZXJzLCByaW0gbGlwIGFuZCBhbGwgZm91ciBjYXN0b3JzIG1lcmdlIGludG8gT05FIGdlb21ldHJ5LiBUaGUgbGlkIGlzIHRoZVxuICogc2Vjb25kIGRyYXcgY2FsbCBhbmQgaXMgc2VwYXJhdGUgT05MWSBiZWNhdXNlIGl0IGhpbmdlcyBhbmQgc28gbmVlZHMgaXRzIG93biBub2RlLlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgYmFzZVVybD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICBjb2xvcnM6IHtcbiAgICAvLyBjcm9wcy9ib2R5LnBuZyBtZWFzdXJlZCAjNDY2MjRjIGF0IGx1bWEgOTAuNCwgc2F0dXJhdGlvbiAwLjI4MS4gTElGVEVEIHRvIGx1bWEgMTE4OiBhXG4gICAgLy8gc2lkZS1saXQgZmFjZSByZW5kZXJzIGF0IH4wLjU2IG9mIGl0cyBwYWludGVkIGx1bWEsIHNvIHRoZSBtZWFzdXJlbWVudCB3b3VsZCBsYW5kIGF0IDUxLFxuICAgIC8vIGJlbG93IHRoZSBoYXJuZXNzIGJhY2tkcm9wJ3MgNTgsIGFuZCB0aGUgZ2F0ZSByZWFkcyB0aGF0IGFzIGEgaG9sZS4gU2F0dXJhdGlvbiBpcyBrZXB0XG4gICAgLy8gYWJvdmUgMC4yNiBzbyB0aGUgcHJvcCBjbGVhcnMgb24gY2hyb21hIGFzIHdlbGwgYXMgdmFsdWUuXG4gICAgZ3JlZW46IDB4NWM3ZDYyLFxuICAgIHR5cmU6IDB4M2IzYjNiLFxuICAgIGZvcms6IDB4OGQ4ZjkyLFxuICB9LFxuICBtYXRlcmlhbDogeyBpZDogJ21vdWxkZWQtcGxhc3RpYycsIHJvdWdobmVzczogMC42MiwgbWV0YWxuZXNzOiAwLjAgfSxcbiAgLyogV0lEVEggQ09SUkVDVEVEIDIwMjYtMDgtMzEsIGZyb20gMS4zNyBtIHRvIDAuOTQgbS4gVGhlIGRlY2xhcmVkIDEuMzcgd2FzIGEgbGlzdC10aW1lIGVzdGltYXRlXG4gICAqIGFuZCBpdCBtYWRlIHRoaXMgYmluIGhhbGYgYWdhaW4gYXMgd2lkZSBhcyBpdCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gaXRzIG93biBkZXB0aC4gVHdvXG4gICAqIGluZGVwZW5kZW50IHJlYWRpbmdzIGFncmVlIGFuZCBuZWl0aGVyIGlzIHRoZSBkZWNsYXJhdGlvbjpcbiAgICpcbiAgICogICAtIFRoZSBNZXNoeSBwcm94eSdzIGJhbmQgdGFibGUgcmVhZCB3aWR0aC9oZWlnaHQgMC42NS0wLjc2IGFjcm9zcyBiYW5kcyAyLTkgYWdhaW5zdCB0aGlzXG4gICAqICAgICBidWlsZCdzIDAuOTQtMS4wOSAtLSBlaWdodCBvZiB0ZW4gYmFuZHMgb3ZlciB0aGUgMC4xMiBmbGFnLCBtZWFuIHxkZWx0YSB3aWR0aHwgMC4zNCAtLSBhbmRcbiAgICogICAgIGl0IHJlYWQgREVQVEggYXQgMC41MC0wLjYyIGFnYWluc3QgdGhlIGJ1aWxkJ3MgMC41NS0wLjY0LCB3aGljaCBpcyBhbHJlYWR5IHJpZ2h0LiBTbyB0aGVcbiAgICogICAgIGVycm9yIGlzIGluIE9ORSBheGlzLCB3aGljaCBpcyB3aGF0IG1ha2VzIGl0IGEgZGVjbGFyYXRpb24gZXJyb3IgcmF0aGVyIHRoYW4gYSBzY2FsZSBvbmUuXG4gICAqICAgLSBUaGUgcGxhdGUsIHJlYWQgYXMgYSAzLzQgdmlldyBhdCByb3VnaGx5IDMwIGRlZ3JlZXMgeWF3OiB0aGUgZnJvbnQgZmFjZSBzcGFucyB+NjIwIHB4IGFuZFxuICAgKiAgICAgdGhlIHNpZGUgfjMwMCwgc28gdGhlIHRydWUgd2lkdGgvZGVwdGggaXMgKDYyMC9jb3MzMCkvKDMwMC9zaW4zMCkgPSAxLjE5LiBUaGUgcHJveHkgc2F5c1xuICAgKiAgICAgMS4yMy4gVGhlIGJ1aWxkIHNhaWQgMS43Ni5cbiAgICpcbiAgICogRGVwdGggYW5kIGhlaWdodCBhcmUgdW50b3VjaGVkIGF0IDAuNzggYW5kIDEuMjI7IHdpZHRoIGZvbGxvd3MgdGhlIGFncmVlZCB3aWR0aC9kZXB0aCBvZiAxLjIwLlxuICAgKiBFdmVyeXRoaW5nIGJlbG93IGlzIHNjYWxlZCBvbiBYIGJ5IDAuNjc4IGFuZCBub3RoaW5nIGVsc2UgbW92ZXMuICovXG4gIGJvZHk6IHtcbiAgICBmb290WTogMC4xNSwgcmltWTogMS4wMCwgbGlwWTogMS4wNSxcbiAgICBmb290SFc6IDAuMzkwLCBmb290SEQ6IDAuMzAwLCAgIC8vIGJhc2UgMC43OCB4IDAuNjBcbiAgICByaW1IVzogMC40NTIsIHJpbUhEOiAwLjM3MiwgICAgIC8vIHdhbGwgaGVhZDsgdGhlIHByb3VkIGxpcCBhYm92ZSBpdCByZWFjaGVzIHRoZSBkZWNsYXJlZCAwLjk0IHggMC43OFxuICAgIGNvcm5lcjogMC4wNiwgc2VnOiA0LCAgICAgICAgICAgLy8gNCBxdWFkcmFudHMgeCA1IHBvaW50cyA9IDIwIHBvaW50cyBwZXIgcmluZ1xuICAgIGxpcFByb3VkOiAwLjAxOCxcbiAgICBmbG9vclk6IDAuMzAsICAgICAgICAgICAgICAgICAgIC8vIGludGVyaW9yIGZsb29yLCBzZWVuIG9ubHkgd2hlbiB0aGUgbGlkIGlzIG9wZW5cbiAgfSxcbiAgLyogVGhlIHJpYnMgd2VyZSAxMiBtbSBwcm91ZCBhbmQgNzUgbW0gd2lkZSBhbmQgcmVhZCBhcyBzY3JhdGNoZXMgcmF0aGVyIHRoYW4gYXMgdGhlIGRlZXAgbW91bGRlZFxuICAgKiBjaGFubmVscyB0aGUgcGxhdGUgc2hvd3MgcnVubmluZyB0aGUgZnVsbCBoZWlnaHQgb2YgdGhlIHdhbGwuIERvdWJsZWQgaW4gcmVsaWVmIGFuZCB3aWRlbmVkO1xuICAgKiB0aGUgc3ByZWFkIHRpZ2h0ZW5zIHdpdGggdGhlIG5hcnJvd2VyIGJvZHkgc28gZml2ZSBzdGlsbCBmaXQgYWNyb3NzIHRoZSBmcm9udCB3aXRob3V0XG4gICAqIHRvdWNoaW5nLiBUaGV5IHN0YXkgUFJPVUQgcGlsYXN0ZXJzIHJhdGhlciB0aGFuIGN1dCBjaGFubmVscyAtLSBhdCBwcm9wIGRpc3RhbmNlIHRoZSB0d28gcmVhZFxuICAgKiB0aGUgc2FtZSwgYW5kIGN1dHRpbmcgdGhlbSB3b3VsZCBtZWFuIGJvb2xlYW5pbmcgdGhlIHRhcGVyZWQgbG9mdCBmb3Igbm8gdmlzaWJsZSBnYWluLiAqL1xuICAvLyB5MSBzdG9wcyBhdCAwLjg4LCBiZWxvdyB0aGUgcmltLCBzbyB0aGUgdHdvIGZyb250IGx1Z3Mgc2l0IGNsZWFyIGFib3ZlIHRoZSBjaGFubmVsc1xuICAvLyBpbnN0ZWFkIG9mIGdyb3dpbmcgb3V0IG9mIHRoZSB0b3Agb2Ygd2hpY2hldmVyIHJpYiB0aGV5IGxhbmQgaW4gZnJvbnQgb2YuXG4gIHJpYnM6IHsgY291bnQ6IDUsIHc6IDAuMDcwLCBwcm91ZDogMC4wMjYsIHkwOiAwLjIyLCB5MTogMC44OCwgc3ByZWFkOiAwLjA5IH0sXG4gIGNhc3RvcjogeyByOiAwLjA4NSwgdHlyZVc6IDAuMDUsIHNlZzogOCwgZm9ya0g6IDAuMDc1LCBpbnNldFg6IDAuMTMsIGluc2V0WjogMC4xMCB9LFxuICAvKiBUaGUgbGlkIHdhcyBhIHBsYWluIHNsYWIgd2l0aCBvbmUgdGhpbiBwcm91ZCBzdHJpcC4gVGhlIHBsYXRlIGhhcyBhIHN0ZXBwZWQgbGlkIHRoYXRcbiAgICogT1ZFUkhBTkdTIHRoZSBib2R5IGFsbCByb3VuZCwgYSBsYXJnZSByZWNlc3NlZCBjZW50cmUgcGFuZWwgaW5zaWRlIGEgcmFpc2VkIGJvcmRlciwgYW5kXG4gICAqIGRpYWdvbmFsIGdyaXAgcmliYmluZyBhdCB0aGUgY29ybmVycyAtLSB3aGljaCBpcyBtb3N0IG9mIHdoYXQgYW55b25lIHJlY29nbmlzZXMgYWJvdXQgYSBiaW5cbiAgICogbGlkIHNlZW4gZnJvbSBhYm92ZSwgYW5kIHRoaXMgcHJvcCBpcyBuZWFybHkgYWx3YXlzIHNlZW4gZnJvbSBhYm92ZS4gKi9cbiAgbGlkOiB7IHkwOiAxLjA1LCB5MTogMS4yMDQsIGh3OiAwLjQ4NywgaGQ6IDAuNDA4LCByZWNlc3M6IDAuMDIsXG4gICAgICAgICBvdmVyaGFuZzogMC4wMzUsIGdyaXA6IHsgbjogNSwgdzogMC4wMjYsIGxlbjogMC4xMDAsIGdhcDogMC4wMjAsIGg6IDAuMDEyIH0gfSxcbn07XG5cbnR5cGUgUHQgPSB7IHg6IG51bWJlcjsgejogbnVtYmVyIH07XG5cbmZ1bmN0aW9uIHJvdW5kZWRSZWN0UmluZyhodzogbnVtYmVyLCBoZDogbnVtYmVyLCByOiBudW1iZXIsIHNlZzogbnVtYmVyKTogUHRbXSB7XG4gIGNvbnN0IHJhZCA9IE1hdGgubWluKHIsIE1hdGgubWluKGh3LCBoZCkgKiAwLjk4KTtcbiAgY29uc3QgY3ggPSBodyAtIHJhZCwgY3ogPSBoZCAtIHJhZDtcbiAgY29uc3QgY2VudHJlcyA9IFt7IHg6ICtjeCwgejogK2N6IH0sIHsgeDogLWN4LCB6OiArY3ogfSwgeyB4OiAtY3gsIHo6IC1jeiB9LCB7IHg6ICtjeCwgejogLWN6IH1dO1xuICBjb25zdCBwdHM6IFB0W10gPSBbXTtcbiAgZm9yIChsZXQgcSA9IDA7IHEgPCA0OyBxICs9IDEpIHtcbiAgICBjb25zdCBjID0gY2VudHJlc1txXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzZWc7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYSA9ICgocSAqIDkwICsgKGkgKiA5MCkgLyBzZWcpICogTWF0aC5QSSkgLyAxODA7XG4gICAgICBwdHMucHVzaCh7IHg6IGMueCArIHJhZCAqIE1hdGguY29zKGEpLCB6OiBjLnogKyByYWQgKiBNYXRoLnNpbihhKSB9KTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuY2xhc3MgU291cCB7XG4gIHBvczogbnVtYmVyW10gPSBbXTtcbiAgY29sOiBudW1iZXJbXSA9IFtdO1xuICBwcml2YXRlIGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgdHJpKGE6IFRIUkVFLlZlY3RvcjMsIGI6IFRIUkVFLlZlY3RvcjMsIGNjOiBUSFJFRS5WZWN0b3IzLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMucG9zLnB1c2goYS54LCBhLnksIGEueiwgYi54LCBiLnksIGIueiwgY2MueCwgY2MueSwgY2Mueik7XG4gICAgLy8gVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgc1JHQiBtZWFzdXJlbWVudCBpcyBjb252ZXJ0ZWQgb25jZSBoZXJlLlxuICAgIHRoaXMuYy5zZXRIZXgoaGV4LCBUSFJFRS5TUkdCQ29sb3JTcGFjZSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpICs9IDEpIHRoaXMuY29sLnB1c2godGhpcy5jLnIsIHRoaXMuYy5nLCB0aGlzLmMuYik7XG4gIH1cbiAgcXVhZChhOiBUSFJFRS5WZWN0b3IzLCBiOiBUSFJFRS5WZWN0b3IzLCBjOiBUSFJFRS5WZWN0b3IzLCBkOiBUSFJFRS5WZWN0b3IzLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMudHJpKGEsIGIsIGMsIGhleCk7IHRoaXMudHJpKGEsIGMsIGQsIGhleCk7XG4gIH1cbiAgYm94KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIsIGhleDogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgeDAgPSBjeCAtIHcgLyAyLCB4MSA9IGN4ICsgdyAvIDIsIHkwID0gY3kgLSBoIC8gMiwgeTEgPSBjeSArIGggLyAyLCB6MCA9IGN6IC0gZCAvIDIsIHoxID0gY3ogKyBkIC8gMjtcbiAgICBjb25zdCBwID0gW3YzKHgwLCB5MCwgejApLCB2Myh4MSwgeTAsIHowKSwgdjMoeDEsIHkxLCB6MCksIHYzKHgwLCB5MSwgejApLFxuICAgICAgICAgICAgICAgdjMoeDAsIHkwLCB6MSksIHYzKHgxLCB5MCwgejEpLCB2Myh4MSwgeTEsIHoxKSwgdjMoeDAsIHkxLCB6MSldO1xuICAgIHRoaXMucXVhZChwWzRdLCBwWzVdLCBwWzZdLCBwWzddLCBoZXgpOyB0aGlzLnF1YWQocFsxXSwgcFswXSwgcFszXSwgcFsyXSwgaGV4KTtcbiAgICB0aGlzLnF1YWQocFs1XSwgcFsxXSwgcFsyXSwgcFs2XSwgaGV4KTsgdGhpcy5xdWFkKHBbMF0sIHBbNF0sIHBbN10sIHBbM10sIGhleCk7XG4gICAgdGhpcy5xdWFkKHBbM10sIHBbN10sIHBbNl0sIHBbMl0sIGhleCk7IHRoaXMucXVhZChwWzBdLCBwWzFdLCBwWzVdLCBwWzRdLCBoZXgpO1xuICB9XG4gIC8qIEEgcmliIGx5aW5nIG9uIGEgTEVBTklORyB3YWxsOiBhIGJhciBvZiBjb25zdGFudCB3aWR0aCBhbmQgdGhpY2tuZXNzIHdob3NlIHR3byBlbmRzIHNpdCBhdFxuICAgKiBkaWZmZXJlbnQgZGVwdGhzLCBzbyBpdHMgb3V0ZXIgZmFjZSBzdGF5cyBwYXJhbGxlbCB0byB0aGUgd2FsbCBpdCBpcyBhcHBsaWVkIHRvLiBUaGUgd2FsbCBvZlxuICAgKiB0aGlzIGJpbiBsZWFucyBvdXR3YXJkIGFzIGl0IHJpc2VzLCBhbmQgYSByaWIgaXMgYSBtb3VsZGluZyBPTiB0aGF0IHdhbGwsIG5vdCBhIGJveCBuZWFyIGl0LlxuICAgKlxuICAgKiBUaGlzIGV4aXN0cyBiZWNhdXNlIHRoZSB0d28gb2J2aW91cyBhbHRlcm5hdGl2ZXMgYm90aCBmYWlsIHZpc2libHkuIE9uZSBzdHJhaWdodCBib3ggc2V0IGF0XG4gICAqIHRoZSB3YWxsIGRlcHRoIG9mIGl0cyBvd24gbWlkcG9pbnQgaXMgYnVyaWVkIG92ZXIgaGFsZiBpdHMgbGVuZ3RoIGFuZCBmbG9hdGluZyBvdmVyIHRoZSBvdGhlclxuICAgKiBoYWxmLiBBIFNUQUNLIG9mIHNob3J0IHN0cmFpZ2h0IGJveGVzIC0tIHdoaWNoIHdhcyB0cmllZCAtLSBzdGVwcyBieSB0aGUgZnVsbCB0YXBlciBvdmVyIGVhY2hcbiAgICogc2VnbWVudDogMTggbW0gYSBzdGVwIGF0IGZvdXIgc2VnbWVudHMgaGVyZSwgd2hpY2ggcmVuZGVycyBhcyBhbiB1bm1pc3Rha2FibGUgc3RhaXJjYXNlLCBhbmRcbiAgICogbW9yZSBzZWdtZW50cyBvbmx5IG1ha2VzIHRoZSBzdGFpcmNhc2UgZmluZXIgcmF0aGVyIHRoYW4gcmVtb3ZpbmcgaXQuXG4gICAqL1xuICB3YWxsUmliKGN4OiBudW1iZXIsIHc6IG51bWJlciwgeUE6IG51bWJlciwgekE6IG51bWJlciwgeUI6IG51bWJlciwgekI6IG51bWJlcixcbiAgICAgICAgICB0aGljazogbnVtYmVyLCBzejogbnVtYmVyLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHgwID0gY3ggLSB3IC8gMiwgeDEgPSBjeCArIHcgLyAyO1xuICAgIGNvbnN0IGEwID0gc3ogKiB6QSwgYTEgPSBzeiAqICh6QSArIHRoaWNrKSwgYjAgPSBzeiAqIHpCLCBiMSA9IHN6ICogKHpCICsgdGhpY2spO1xuICAgIGNvbnN0IHAgPSBbdjMoeDAsIHlBLCBhMCksIHYzKHgxLCB5QSwgYTApLCB2Myh4MSwgeUIsIGIwKSwgdjMoeDAsIHlCLCBiMCksXG4gICAgICAgICAgICAgICB2Myh4MCwgeUEsIGExKSwgdjMoeDEsIHlBLCBhMSksIHYzKHgxLCB5QiwgYjEpLCB2Myh4MCwgeUIsIGIxKV07XG4gICAgLy8gV291bmQgc28gdGhlIE9VVEVSIGZhY2UgKHRoZSA0LTUtNi03IHJpbmcpIGZhY2VzIGF3YXkgZnJvbSB0aGUgd2FsbCBvbiBlaXRoZXIgc2lkZS5cbiAgICBpZiAoc3ogPiAwKSB7XG4gICAgICB0aGlzLnF1YWQocFs0XSwgcFs1XSwgcFs2XSwgcFs3XSwgaGV4KTsgdGhpcy5xdWFkKHBbMV0sIHBbMF0sIHBbM10sIHBbMl0sIGhleCk7XG4gICAgICB0aGlzLnF1YWQocFs1XSwgcFsxXSwgcFsyXSwgcFs2XSwgaGV4KTsgdGhpcy5xdWFkKHBbMF0sIHBbNF0sIHBbN10sIHBbM10sIGhleCk7XG4gICAgICB0aGlzLnF1YWQocFszXSwgcFs3XSwgcFs2XSwgcFsyXSwgaGV4KTsgdGhpcy5xdWFkKHBbMF0sIHBbMV0sIHBbNV0sIHBbNF0sIGhleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVhZChwWzddLCBwWzZdLCBwWzVdLCBwWzRdLCBoZXgpOyB0aGlzLnF1YWQocFsyXSwgcFszXSwgcFswXSwgcFsxXSwgaGV4KTtcbiAgICAgIHRoaXMucXVhZChwWzZdLCBwWzJdLCBwWzFdLCBwWzVdLCBoZXgpOyB0aGlzLnF1YWQocFszXSwgcFs3XSwgcFs0XSwgcFswXSwgaGV4KTtcbiAgICAgIHRoaXMucXVhZChwWzJdLCBwWzZdLCBwWzddLCBwWzNdLCBoZXgpOyB0aGlzLnF1YWQocFs0XSwgcFs1XSwgcFsxXSwgcFswXSwgaGV4KTtcbiAgICB9XG4gIH1cbiAgLyogQSBib3ggdHVybmVkIGFib3V0IFksIGZvciB0aGUgbGlkJ3MgZGlhZ29uYWwgZ3JpcCByaWJiaW5nLiBCdWlsdCBhdCB0aGUgb3JpZ2luIGFuZCByb3RhdGVkXG4gICAqIGJlZm9yZSB0cmFuc2xhdGluZywgc28gdGhlIHJvdGF0aW9uIGlzIGFib3V0IHRoZSBiYXIncyBPV04gY2VudHJlIHJhdGhlciB0aGFuIGFib3V0IHRoZSBsaWQnc1xuICAgKiAtLSByb3RhdGluZyBhZnRlciB0cmFuc2xhdGluZyBzd2luZ3MgdGhlIGJhciBhd2F5IGZyb20gdGhlIGNvcm5lciBpdCBiZWxvbmdzIHRvLiAqL1xuICBib3hSb3RZKGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIsIGFuZzogbnVtYmVyLCBoZXg6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNvID0gTWF0aC5jb3MoYW5nKSwgc2kgPSBNYXRoLnNpbihhbmcpO1xuICAgIGNvbnN0IHgwID0gLXcgLyAyLCB4MSA9IHcgLyAyLCB5MCA9IGN5IC0gaCAvIDIsIHkxID0gY3kgKyBoIC8gMiwgejAgPSAtZCAvIDIsIHoxID0gZCAvIDI7XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKSA9PiB2MyhjeCArIHggKiBjbyArIHogKiBzaSwgeSwgY3ogLSB4ICogc2kgKyB6ICogY28pO1xuICAgIGNvbnN0IHAgPSBbbSh4MCwgeTAsIHowKSwgbSh4MSwgeTAsIHowKSwgbSh4MSwgeTEsIHowKSwgbSh4MCwgeTEsIHowKSxcbiAgICAgICAgICAgICAgIG0oeDAsIHkwLCB6MSksIG0oeDEsIHkwLCB6MSksIG0oeDEsIHkxLCB6MSksIG0oeDAsIHkxLCB6MSldO1xuICAgIHRoaXMucXVhZChwWzRdLCBwWzVdLCBwWzZdLCBwWzddLCBoZXgpOyB0aGlzLnF1YWQocFsxXSwgcFswXSwgcFszXSwgcFsyXSwgaGV4KTtcbiAgICB0aGlzLnF1YWQocFs1XSwgcFsxXSwgcFsyXSwgcFs2XSwgaGV4KTsgdGhpcy5xdWFkKHBbMF0sIHBbNF0sIHBbN10sIHBbM10sIGhleCk7XG4gICAgdGhpcy5xdWFkKHBbM10sIHBbN10sIHBbNl0sIHBbMl0sIGhleCk7IHRoaXMucXVhZChwWzBdLCBwWzFdLCBwWzVdLCBwWzRdLCBoZXgpO1xuICB9XG4gIGdlb21ldHJ5KCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy5wb3MsIDMpKTtcbiAgICAvLyBXcml0dGVuIGZvciBFVkVSWSB2ZXJ0ZXg6IGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIHJlbmRlcnMgQkxBQ0sgd2hlcmUgdGhlIGF0dHJpYnV0ZSBpcyBhYnNlbnQuXG4gICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy5jb2wsIDMpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgcmV0dXJuIGc7XG4gIH1cbn1cblxuY29uc3QgdjMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4gbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeik7XG5jb25zdCBhdCA9IChwOiBQdCwgeTogbnVtYmVyKSA9PiB2MyhwLngsIHksIHAueik7XG5cbmZ1bmN0aW9uIGxvZnQoczogU291cCwgbG86IFB0W10sIGx5OiBudW1iZXIsIHVwOiBQdFtdLCB1eTogbnVtYmVyLCBoZXg6IG51bWJlciwgb3V0d2FyZDogYm9vbGVhbik6IHZvaWQge1xuICBjb25zdCBuID0gbG8ubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkgKz0gMSkge1xuICAgIGNvbnN0IGogPSAoaSArIDEpICUgbjtcbiAgICBjb25zdCBMMCA9IGF0KGxvW2ldLCBseSksIEwxID0gYXQobG9bal0sIGx5KSwgVTAgPSBhdCh1cFtpXSwgdXkpLCBVMSA9IGF0KHVwW2pdLCB1eSk7XG4gICAgaWYgKG91dHdhcmQpIHMucXVhZChMMCwgVTAsIFUxLCBMMSwgaGV4KTsgZWxzZSBzLnF1YWQoTDAsIEwxLCBVMSwgVTAsIGhleCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYW5udWx1cyhzOiBTb3VwLCBvdXRlcjogUHRbXSwgaW5uZXI6IFB0W10sIHk6IG51bWJlciwgaGV4OiBudW1iZXIsIHVwOiBib29sZWFuKTogdm9pZCB7XG4gIGNvbnN0IG4gPSBvdXRlci5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29uc3QgaiA9IChpICsgMSkgJSBuO1xuICAgIGNvbnN0IE8wID0gYXQob3V0ZXJbaV0sIHkpLCBPMSA9IGF0KG91dGVyW2pdLCB5KSwgSTAgPSBhdChpbm5lcltpXSwgeSksIEkxID0gYXQoaW5uZXJbal0sIHkpO1xuICAgIGlmICh1cCkgcy5xdWFkKE8wLCBJMCwgSTEsIE8xLCBoZXgpOyBlbHNlIHMucXVhZChPMCwgTzEsIEkxLCBJMCwgaGV4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYXAoczogU291cCwgcmluZzogUHRbXSwgeTogbnVtYmVyLCBoZXg6IG51bWJlciwgdXA6IGJvb2xlYW4pOiB2b2lkIHtcbiAgY29uc3QgYyA9IHYzKDAsIHksIDApLCBuID0gcmluZy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSArPSAxKSB7XG4gICAgY29uc3QgaiA9IChpICsgMSkgJSBuLCBBID0gYXQocmluZ1tpXSwgeSksIEIgPSBhdChyaW5nW2pdLCB5KTtcbiAgICBpZiAodXApIHMudHJpKGMsIEIsIEEsIGhleCk7IGVsc2Ugcy50cmkoYywgQSwgQiwgaGV4KTtcbiAgfVxufVxuXG4vKiogQSBjYXN0b3I6IGEgdHlyZSBkaXNjIG9uIGEgc3dpdmVsIGZvcmssIGJvdGggbWVyZ2VkIGludG8gdGhlIGJvZHkgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBjYXN0b3IoczogU291cCwgY3g6IG51bWJlciwgY3o6IG51bWJlciwgQzogdHlwZW9mIENPTkZJRyk6IHZvaWQge1xuICBjb25zdCB7IHIsIHR5cmVXLCBzZWcsIGZvcmtIIH0gPSBDLmNhc3RvcjtcbiAgY29uc3QgY3kgPSByO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNlZzsgaSArPSAxKSB7XG4gICAgY29uc3QgYTAgPSAoaSAvIHNlZykgKiBNYXRoLlBJICogMiwgYTEgPSAoKGkgKyAxKSAvIHNlZykgKiBNYXRoLlBJICogMjtcbiAgICBjb25zdCBwMCA9IHYzKGN4ICsgciAqIE1hdGguY29zKGEwKSwgY3kgKyByICogTWF0aC5zaW4oYTApLCBjeiAtIHR5cmVXIC8gMik7XG4gICAgY29uc3QgcDEgPSB2MyhjeCArIHIgKiBNYXRoLmNvcyhhMSksIGN5ICsgciAqIE1hdGguc2luKGExKSwgY3ogLSB0eXJlVyAvIDIpO1xuICAgIGNvbnN0IHEwID0gdjMocDAueCwgcDAueSwgY3ogKyB0eXJlVyAvIDIpLCBxMSA9IHYzKHAxLngsIHAxLnksIGN6ICsgdHlyZVcgLyAyKTtcbiAgICBzLnF1YWQocDAsIHAxLCBxMSwgcTAsIEMuY29sb3JzLnR5cmUpOyAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYWRcbiAgICBzLnRyaSh2MyhjeCwgY3ksIGN6ICsgdHlyZVcgLyAyKSwgcTAsIHExLCBDLmNvbG9ycy50eXJlKTsgICAgLy8gK1ogY2hlZWtcbiAgICBzLnRyaSh2MyhjeCwgY3ksIGN6IC0gdHlyZVcgLyAyKSwgcDEsIHAwLCBDLmNvbG9ycy50eXJlKTsgICAgLy8gLVogY2hlZWtcbiAgfVxuICBzLmJveChjeCwgY3kgKyByICsgZm9ya0ggLyAyLCBjeiwgMC4wNTUsIGZvcmtILCB0eXJlVyArIDAuMDMsIEMuY29sb3JzLmZvcmspO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlRm91cldoZWVsUGxhc3RpY1JlZnVzZUJpbk1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRm91ci1XaGVlbCBQbGFzdGljIFJlZnVzZSBCaW4nO1xuXG4gIGNvbnN0IG1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmZmZmZmLFxuICAgIHJvdWdobmVzczogQ09ORklHLm1hdGVyaWFsLnJvdWdobmVzcyxcbiAgICBtZXRhbG5lc3M6IENPTkZJRy5tYXRlcmlhbC5tZXRhbG5lc3MsXG4gICAgdmVydGV4Q29sb3JzOiB0cnVlLFxuICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gIH0pO1xuICBtYXQubmFtZSA9IENPTkZJRy5tYXRlcmlhbC5pZDtcblxuICBjb25zdCBCID0gQ09ORklHLmJvZHksIEMgPSBDT05GSUcuY29sb3JzO1xuICBjb25zdCBmb290ID0gcm91bmRlZFJlY3RSaW5nKEIuZm9vdEhXLCBCLmZvb3RIRCwgQi5jb3JuZXIsIEIuc2VnKTtcbiAgY29uc3QgcmltID0gcm91bmRlZFJlY3RSaW5nKEIucmltSFcsIEIucmltSEQsIEIuY29ybmVyLCBCLnNlZyk7XG4gIGNvbnN0IGxpcE91dCA9IHJvdW5kZWRSZWN0UmluZyhCLnJpbUhXICsgQi5saXBQcm91ZCwgQi5yaW1IRCArIEIubGlwUHJvdWQsIEIuY29ybmVyLCBCLnNlZyk7XG4gIGNvbnN0IGlubmVyID0gcm91bmRlZFJlY3RSaW5nKEIucmltSFcgLSAwLjAzLCBCLnJpbUhEIC0gMC4wMywgQi5jb3JuZXIsIEIuc2VnKTtcbiAgY29uc3QgaW5uZXJGb290ID0gcm91bmRlZFJlY3RSaW5nKEIuZm9vdEhXIC0gMC4wMywgQi5mb290SEQgLSAwLjAzLCBCLmNvcm5lciwgQi5zZWcpO1xuXG4gIGNvbnN0IHMgPSBuZXcgU291cCgpO1xuICAvLyBUdWI6IGJhc2UgcmluZyB1cCB0byB0aGUgcmltLCB0YXBlcmluZyBPVVRXQVJEIGFzIGl0IHJpc2VzIChzbyB0aGUgYmFzZSBpcyBuYXJyb3dlc3QpLlxuICBsb2Z0KHMsIGZvb3QsIEIuZm9vdFksIHJpbSwgQi5yaW1ZLCBDLmdyZWVuLCB0cnVlKTtcbiAgY2FwKHMsIGZvb3QsIEIuZm9vdFksIEMuZ3JlZW4sIGZhbHNlKTsgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVuZGVyc2lkZVxuICAvLyBSaW0gbGlwIHN0YW5kaW5nIHByb3VkIG9mIHRoZSB3YWxsIGhlYWQsIHRoZW4gdGhlIGZsYXQgdG9wIHRoZSBsaWQgc2VhdHMgb24uXG4gIGxvZnQocywgcmltLCBCLnJpbVksIGxpcE91dCwgQi5saXBZLCBDLmdyZWVuLCB0cnVlKTtcbiAgYW5udWx1cyhzLCBsaXBPdXQsIGlubmVyLCBCLmxpcFksIEMuZ3JlZW4sIHRydWUpO1xuICAvLyBBIHNoYWxsb3cgaW50ZXJpb3IsIHNlZW4gb25seSB3aGVuIHRoZSBsaWQgaXMgb3Blbi5cbiAgbG9mdChzLCBpbm5lckZvb3QsIEIuZmxvb3JZLCBpbm5lciwgQi5saXBZLCBDLmdyZWVuLCBmYWxzZSk7XG4gIGNhcChzLCBpbm5lckZvb3QsIEIuZmxvb3JZLCBDLmdyZWVuLCB0cnVlKTtcblxuICAvKiBSaWIgcGlsYXN0ZXJzIHVwIGJvdGggbG9uZyB3YWxscy5cbiAgICpcbiAgICogVEhFIFdBTEwgVEFQRVJTLCBTTyBBIFNUUkFJR0hUIEJPWCBDQU5OT1QgU0lUIE9OIElULiBUaGUgcHJldmlvdXMgYnVpbGQgcGxhY2VkIG9uZSBib3ggcGVyIHJpYlxuICAgKiBhdCB0aGUgd2FsbCBkZXB0aCBjb21wdXRlZCBmb3IgdGhlIHJpYidzIE1JRFBPSU5ULCB3aGljaCBpcyBjb3JyZWN0IGF0IGV4YWN0bHkgb25lIGhlaWdodCBhbmRcbiAgICogd3JvbmcgZXZlcnl3aGVyZSBlbHNlOiB0aGUgd2FsbCBsZWFucyBvdXR3YXJkIGFzIGl0IHJpc2VzLCBzbyB0aGUgcmliIHdhcyBidXJpZWQgaW4gdGhlIHdhbGxcbiAgICogb3ZlciBpdHMgdG9wIGhhbGYgYW5kIHN0YW5kaW5nIG9mZiBpdCBvdmVyIHRoZSBib3R0b20gaGFsZi4gSXQgcmVuZGVyZWQgYXMgYSBmaW4gd2l0aCBhIHN0ZXBcbiAgICogaW4gaXQgdGhhdCBzdG9wcGVkIHNob3J0IG9mIGJvdGggZW5kcyAtLSB3aGljaCBpcyB3aGF0IFwidGhlIHJpYnMgbG9vayBsaWtlIHNjcmF0Y2hlc1wiIGFjdHVhbGx5XG4gICAqIHdhcywgYW5kIG5vIGFtb3VudCBvZiBleHRyYSByZWxpZWYgd291bGQgaGF2ZSBmaXhlZCBpdC5cbiAgICpcbiAgICogU28gZWFjaCByaWIgaXMgYSBTVEFDSyBvZiBzaG9ydCBib3hlcywgZWFjaCBzZXQgYXQgdGhlIHdhbGwgZGVwdGggZm9yIGl0cyBvd24gc2VnbWVudC4gRm91clxuICAgKiBzZWdtZW50cyBpcyBlbm91Z2ggdGhhdCB0aGUgc3RhaXJjYXNlIGlzIHVuZGVyIGEgbWlsbGltZXRyZSBwZXIgc3RlcCBhdCB0aGlzIHRhcGVyIGFuZCByZWFkc1xuICAgKiBhcyBhIGNvbnRpbnVvdXMgbW91bGRpbmcuICovXG4gIGNvbnN0IFIgPSBDT05GSUcucmlicztcbiAgY29uc3QgZGVwdGhBdCA9ICh5OiBudW1iZXIpID0+XG4gICAgQi5mb290SEQgKyAoQi5yaW1IRCAtIEIuZm9vdEhEKSAqICgoeSAtIEIuZm9vdFkpIC8gKEIucmltWSAtIEIuZm9vdFkpKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBSLmNvdW50OyBpICs9IDEpIHtcbiAgICBjb25zdCB0ID0gKGkgKyAwLjUpIC8gUi5jb3VudDtcbiAgICBjb25zdCB4ID0gKHQgLSAwLjUpICogMiAqIChCLnJpbUhXIC0gUi5zcHJlYWQpO1xuICAgIGZvciAoY29uc3Qgc3ogb2YgWy0xLCAxXSkge1xuICAgICAgcy53YWxsUmliKHgsIFIudywgUi55MCwgZGVwdGhBdChSLnkwKSwgUi55MSwgZGVwdGhBdChSLnkxKSwgUi5wcm91ZCwgc3osIEMuZ3JlZW4pO1xuICAgIH1cbiAgfVxuXG4gIC8qIFRoZSB0d28gbW91bGRlZCBsdWdzIG9uIHRoZSBmcm9udCB3YWxsIGp1c3QgdW5kZXIgdGhlIHJpbS4gVGhleSBhcmUgc21hbGwsIGFuZCB0aGV5IGFyZSB0aGVcbiAgICogb25seSB0aGluZyB0aGF0IHRlbGxzIHRoZSBmcm9udCBvZiB0aGlzIGJpbiBmcm9tIGl0cyBiYWNrIGF0IGFueSBkaXN0YW5jZSAtLSB0aGUgcGxhdGUgaGFzXG4gICAqIHRoZW0gYW5kIHRoZSBwcmV2aW91cyBidWlsZCBoYWQgYSBiaW4gd2l0aCBubyBmcm9udC4gKi9cbiAgZm9yIChjb25zdCBzeCBvZiBbLTEsIDFdKSB7XG4gICAgcy5ib3goc3ggKiBCLnJpbUhXICogMC40NSwgQi5yaW1ZIC0gMC4wNzUsIEIucmltSEQgKyAwLjAxNSwgMC4wNzUsIDAuMTA1LCAwLjAzMCwgQy5ncmVlbik7XG4gIH1cblxuICAvLyBGb3VyIGNhc3RvcnMsIG9uZSBwZXIgY29ybmVyLCBjYXJyeWluZyB0aGUgdHViIGNsZWFyIG9mIHRoZSBncm91bmQuXG4gIGNvbnN0IEsgPSBDT05GSUcuY2FzdG9yO1xuICBmb3IgKGNvbnN0IHN4IG9mIFstMSwgMV0pIGZvciAoY29uc3Qgc3ogb2YgWy0xLCAxXSkge1xuICAgIGNhc3RvcihzLCBzeCAqIChCLmZvb3RIVyAtIEsuaW5zZXRYKSwgc3ogKiAoQi5mb290SEQgLSBLLmluc2V0WiksIENPTkZJRyk7XG4gIH1cblxuICBjb25zdCBib2R5TWVzaCA9IG5ldyBUSFJFRS5NZXNoKHMuZ2VvbWV0cnkoKSwgbWF0KTtcbiAgYm9keU1lc2gubmFtZSA9ICdUdWIsIHJpYiBwaWxhc3RlcnMsIHJpbSBsaXAgYW5kIGNhc3RvcnMnO1xuICBib2R5TWVzaC5jYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGJvZHlNZXNoLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgcm9vdC5hZGQoYm9keU1lc2gpO1xuXG4gIC8vIFRoZSBMSUQgZ2V0cyBpdHMgb3duIG5vZGUgYmVjYXVzZSBpdCBnZW51aW5lbHkgaGluZ2VzLCBhbG9uZyB0aGUgcmVhciB0b3AgZWRnZS4gVGhlIGhpbmdlXG4gIC8vIGdyb3VwIHNpdHMgQVQgdGhlIGhpbmdlIGxpbmUgc28gYSBnYW1lIGNhbiByb3RhdGUgaXQgZGlyZWN0bHkgb24gK1guXG4gIGNvbnN0IEwgPSBDT05GSUcubGlkO1xuICBjb25zdCBoaW5nZSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICBoaW5nZS5uYW1lID0gJ2xpZC1oaW5nZSc7XG4gIGhpbmdlLnBvc2l0aW9uLnNldCgwLCBMLnkwLCAtTC5oZCk7XG4gIHJvb3QuYWRkKGhpbmdlKTtcblxuICBjb25zdCBscyA9IG5ldyBTb3VwKCk7XG4gIGNvbnN0IHNraXJ0ID0gTC55MSAtIEwueTA7XG4gIC8qIFRoZSBsaWQgaXMgVFdPIHN0ZXBzLCBub3QgYSBzbGFiLiBUaGUgbG93ZXIgc3RlcCBpcyBhIHRoaW4gYXByb24gdGhhdCBPVkVSSEFOR1MgdGhlIGJvZHkgYWxsXG4gICAqIHJvdW5kIC0tIHRoZSBwbGF0ZSBzaG93cyBhIGNsZWFyIHNoYWRvdyBnYXAgdW5kZXIgdGhlIGxpZCBlZGdlIG9uIGV2ZXJ5IHNpZGUsIGFuZCBhIGxpZCBmbHVzaFxuICAgKiB3aXRoIHRoZSB3YWxsIGJlbG93IGl0IHJlYWRzIGFzIGEgY2xvc2VkIGJveCByYXRoZXIgdGhhbiBhcyBhIGxpZC4gVGhlIHVwcGVyIHN0ZXAgaXMgaW5zZXRcbiAgICogZnJvbSBpdCwgd2hpY2ggaXMgdGhlIG1vdWxkZWQgc2hvdWxkZXIgdGhhdCBydW5zIHJvdW5kIGEgcmVhbCBiaW4gbGlkLlxuICAgKlxuICAgKiBBdXRob3JlZCBpbiB0aGUgaGluZ2UncyBmcmFtZTogK1ogcnVucyBmb3J3YXJkIGZyb20gdGhlIGhpbmdlIGxpbmUsIHNvIHRoZSBsaWQncyBjZW50cmUgaXMgYXRcbiAgICogeiA9IEwuaGQgYW5kIGl0cyBmYXIgZWRnZSBhdCAyICogTC5oZC4gKi9cbiAgY29uc3Qgb2ggPSBMLm92ZXJoYW5nO1xuICBscy5ib3goMCwgc2tpcnQgKiAwLjMsIEwuaGQsIChMLmh3ICsgb2gpICogMiwgc2tpcnQgKiAwLjYsIChMLmhkICsgb2gpICogMiwgQy5ncmVlbik7XG4gIGxzLmJveCgwLCBza2lydCAqIDAuOCwgTC5oZCwgTC5odyAqIDIsIHNraXJ0ICogMC40LCBMLmhkICogMiwgQy5ncmVlbik7XG4gIC8qIFRoZSBtb3VsZGVkIGNlbnRyZSBwYW5lbCBzdGFuZHMgUFJPVUQgb2YgdGhlIGxpZCdzIHRvcCByYXRoZXIgdGhhbiBiZWluZyBzdW5rIGludG8gaXQuIFRoYXQgaXNcbiAgICogdGhlIHotZmlnaHRpbmcgcnVsZSwgbm90IGEgc3R5bGlzdGljIGNob2ljZTogc3VuaywgaXRzIHRvcCBmYWNlIHdvdWxkIHNpdCBpbiB0aGUgc2FtZSBwbGFuZSBhc1xuICAgKiB0aGUgbGlkIHRvcCBmYWNpbmcgdGhlIHNhbWUgd2F5LCBhbmQgdGhlIHBhaXIgdGVhcnMgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlIGNhbWVyYVxuICAgKiBtb3Zlcy4gUHJvdWQsIGl0IGFsc28gcmVhZHMgY29ycmVjdGx5IC0tIHRoZSBwbGF0ZSdzIHBhbmVsIGlzIGJvcmRlcmVkIGJ5IGEgcmFpc2VkIHJpbS4gKi9cbiAgbHMuYm94KDAsIHNraXJ0ICsgMC4wMTAsIEwuaGQsIEwuaHcgKiAxLjIwLCAwLjAyMCwgTC5oZCAqIDEuMTUsIEMuZ3JlZW4pO1xuXG4gIC8qIERpYWdvbmFsIGdyaXAgcmliYmluZyBhdCB0aGUgdHdvIGZyb250IGNvcm5lcnMsIGFzIHRoZSBwbGF0ZSBoYXMgaXQuIFRocmVlIGJhcnMgcGVyIGNvcm5lcixcbiAgICogZWFjaCByb3RhdGVkIDQ1IGRlZ3JlZXMgYWJvdXQgWSBzbyB0aGV5IHJ1biBjb3JuZXItdG8tY29ybmVyLCBhbmQgZWFjaCBzdGFuZGluZyBwcm91ZCBvZiB0aGVcbiAgICogbGlkIHRvcCBieSB0aGUgc2FtZSAyMCBtbSBhcyB0aGUgY2VudHJlIHBhbmVsIHNvIG5vIGZhY2UgaXMgZXZlciBjb2luY2lkZW50IHdpdGggaXQuIFRoaXMgaXNcbiAgICogdGhlIGRldGFpbCB0aGF0IG1vc3Qgc2F5cyBcImJpbiBsaWRcIiBmcm9tIGRpcmVjdGx5IGFib3ZlLCB3aGljaCBpcyB0aGUgYW5nbGUgdGhpcyBwcm9wIGlzXG4gICAqIG5lYXJseSBhbHdheXMgc2VlbiBmcm9tIGluIGEgbGV2ZWwuICovXG4gIGNvbnN0IEdSID0gTC5ncmlwO1xuICBmb3IgKGNvbnN0IHN4IG9mIFstMSwgMV0pIHtcbiAgICBmb3IgKGNvbnN0IHN6IG9mIFstMSwgMV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgR1IubjsgaSArPSAxKSB7XG4gICAgICAgIGNvbnN0IG9mZiA9IChpIC0gKEdSLm4gLSAxKSAvIDIpICogR1IuZ2FwO1xuICAgICAgICBscy5ib3hSb3RZKFxuICAgICAgICAgIHN4ICogKEwuaHcgLSBHUi5sZW4gKiAwLjYwKSArIHN4ICogb2ZmLFxuICAgICAgICAgIHNraXJ0ICsgMC4wMjAgLSBHUi5oIC8gMiArIDAuMDA0LFxuICAgICAgICAgIEwuaGQgKyBzeiAqIChMLmhkIC0gR1IubGVuICogMC41NSkgLSBzeiAqIG9mZixcbiAgICAgICAgICBHUi5sZW4sIEdSLmgsIEdSLncsIC1zeCAqIHN6ICogTWF0aC5QSSAvIDQsIEMuZ3JlZW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBsaWRNZXNoID0gbmV3IFRIUkVFLk1lc2gobHMuZ2VvbWV0cnkoKSwgbWF0KTtcbiAgbGlkTWVzaC5uYW1lID0gJ0hpbmdlZCBsaWQnO1xuICBsaWRNZXNoLmNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgbGlkTWVzaC5yZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG4gIGhpbmdlLmFkZChsaWRNZXNoKTtcblxuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0geyByb290LCBib2R5OiBib2R5TWVzaCwgJ2xpZC1oaW5nZSc6IGhpbmdlLCBsaWQ6IGxpZE1lc2ggfTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHtcbiAgICBib2R5OiB7IHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAwLjYxLCAwXSwgc2l6ZTogWzAuOTQsIDEuMjIsIDAuNzhdLCBheGlzOiBbMCwgMSwgMF0sXG4gICAgICBub3RlczogJ0F1dGhvcmluZyBpbnRlbnQgb25seTsgdGhhaWtpdCBkZXJpdmVzIHRoZSBzaGlwcGVkIGNvbXBvdW5kIGZyb20gdGhlIGJ1aWx0IGdlb21ldHJ5LicgfSxcbiAgfTtcbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzLCBtZXNoZXM6IHsgYm9keTogYm9keU1lc2gsIGxpZDogbGlkTWVzaCB9LCBzb2NrZXRzOiB7fSwgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3Vwczoge30sXG4gIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUZvdXJXaGVlbFBsYXN0aWNSZWZ1c2VCaW5Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgJiYgdHlwZW9mIHNwZWMgPT09ICdvYmplY3QnKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBUV08gcGl2b3RzIGFuZCBubyBzb2NrZXRzLiBUaGUgcm9vdCwgcGx1cyBgbGlkLWhpbmdlYCAtLSBhIHByb21pc2Uga2VwdCwgYmVjYXVzZSB0aGUgbGlkXG4gICAgLy8gcmVhbGx5IGRvZXMgb3BlbiBvbiB0aGF0IGF4aXMgYW5kIHRoZSBoaW5nZSBub2RlIHNpdHMgb24gdGhlIHJlYWwgaGluZ2UgbGluZSBhdCB0aGUgcmVhclxuICAgIC8vIHRvcCBlZGdlLiBUaGUgY2FzdG9ycyBzd2l2ZWwgaW4gbGlmZSBidXQgYXJlIE5PVCBnaXZlbiBwaXZvdHM6IHRoZSBraXQgcGxhY2VzIHRoZXNlIGFzXG4gICAgLy8gc3RhdGljIHNjZW5lcnksIGFuZCBhIHBpdm90IG5vdGhpbmcgd2lsbCBldmVyIHR1cm4gaXMgYSBjb250cmFjdCB0aGUga2l0IGhhcyB0byBrZWVwIGZvclxuICAgIC8vIG5vIG9uZS5cbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuXG4gICAgY29uc3QgbGlkSGluZ2UgPSBub2Rlc1snbGlkLWhpbmdlJ107XG4gICAgaWYgKGxpZEhpbmdlKSB7XG4gICAgICBsaWRIaW5nZS51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDoge1xuICAgICAgICAgIG1vZGU6ICdjdXN0b20nLFxuICAgICAgICAgIGxvY2FsUG9zaXRpb246IFtsaWRIaW5nZS5wb3NpdGlvbi54LCBsaWRIaW5nZS5wb3NpdGlvbi55LCBsaWRIaW5nZS5wb3NpdGlvbi56XSxcbiAgICAgICAgICBheGlzOiBbMSwgMCwgMF0sIG5hbWU6ICdsaWQtaGluZ2UnLCBjb21wb25lbnQ6ICdsaWQnLFxuICAgICAgICAgIG5vdGVzOiAnVGhlIHJlYXIgdG9wIGVkZ2UuIFJvdGF0aW5nIHRoaXMgbm9kZSBvbiArWCBvcGVucyB0aGUgbGlkLicsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQ6IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFjcm9zcyB0aGUgcHVwcGV0ZWVyIGJyaWRnZS5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzOiBsaWRIaW5nZSA/IFtyb290UGl2b3QsIGxpZEhpbmdlXSA6IFtyb290UGl2b3RdLFxuICAgICAgc29ja2V0czogW10sXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogW10sXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czoge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXFDdkIsSUFBTSxTQUFTO0FBQUEsRUFDYixRQUFRO0FBQUE7QUFBQTtBQUFB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RyxLQUFLLEVBQUUsQ0FBQztBQUFBLEVBQzNFO0FBQUEsRUFDQSxLQUFLLEdBQWtCLEdBQWtCLEdBQWtCLEdBQWtCLEtBQW1CO0FBQzlGLFNBQUssSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHO0FBQUcsU0FBSyxJQUFJLEdBQUcsR0FBRyxHQUFHLEdBQUc7QUFBQSxFQUMvQztBQUFBLEVBQ0EsSUFBSSxJQUFZLElBQVksSUFBWSxHQUFXLEdBQVcsR0FBVyxLQUFtQjtBQUMxRixVQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSTtBQUN6RyxVQUFNLElBQUk7QUFBQSxNQUFDLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUM3RCxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxHQUFHLElBQUksSUFBSSxFQUFFO0FBQUEsSUFBQztBQUN6RSxTQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFHLFNBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQzdFLFNBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQUcsU0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFDN0UsU0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBRyxTQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFBLEVBQy9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQVdBLFFBQVEsSUFBWSxHQUFXLElBQVksSUFBWSxJQUFZLElBQzNELE9BQWUsSUFBWSxLQUFtQjtBQUNwRCxVQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLElBQUk7QUFDckMsVUFBTSxLQUFLLEtBQUssSUFBSSxLQUFLLE1BQU0sS0FBSyxRQUFRLEtBQUssS0FBSyxJQUFJLEtBQUssTUFBTSxLQUFLO0FBQzFFLFVBQU0sSUFBSTtBQUFBLE1BQUMsR0FBRyxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsR0FBRyxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsR0FBRyxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsR0FBRyxJQUFJLElBQUksRUFBRTtBQUFBLE1BQzdELEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxNQUFHLEdBQUcsSUFBSSxJQUFJLEVBQUU7QUFBQSxJQUFDO0FBRXpFLFFBQUksS0FBSyxHQUFHO0FBQ1YsV0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBRyxXQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUM3RSxXQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFHLFdBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQzdFLFdBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQUcsV0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUMvRSxPQUFPO0FBQ0wsV0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBRyxXQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUM3RSxXQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFHLFdBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQzdFLFdBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQUcsV0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBQSxJQUMvRTtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUlBLFFBQVEsSUFBWSxJQUFZLElBQVksR0FBVyxHQUFXLEdBQVcsS0FBYSxLQUFtQjtBQUMzRyxVQUFNLEtBQUssS0FBSyxJQUFJLEdBQUcsR0FBRyxLQUFLLEtBQUssSUFBSSxHQUFHO0FBQzNDLFVBQU0sS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUksR0FBRyxLQUFLLEtBQUssSUFBSSxHQUFHLEtBQUssS0FBSyxJQUFJLEdBQUcsS0FBSyxDQUFDLElBQUksR0FBRyxLQUFLLElBQUk7QUFDdkYsVUFBTSxJQUFJLENBQUMsR0FBVyxHQUFXLE1BQWMsR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLElBQUksR0FBRyxLQUFLLElBQUksS0FBSyxJQUFJLEVBQUU7QUFDL0YsVUFBTSxJQUFJO0FBQUEsTUFBQyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQUEsTUFBRyxFQUFFLElBQUksSUFBSSxFQUFFO0FBQUEsTUFDekQsRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLE1BQUcsRUFBRSxJQUFJLElBQUksRUFBRTtBQUFBLElBQUM7QUFDckUsU0FBSyxLQUFLLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEdBQUc7QUFBRyxTQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUM3RSxTQUFLLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsR0FBRztBQUFHLFNBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxHQUFHO0FBQzdFLFNBQUssS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMs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
