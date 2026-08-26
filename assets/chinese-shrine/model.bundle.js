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

// scratch/chinese-shrine/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createChineseShrineModel: () => createChineseShrineModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "chinese-shrine",
  "name": "Chinese Shrine",
  "exportName": "ChineseShrine",
  "envelope": "Envelope 10.00 x 8.00 x 12.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "pale",
      "color": 8815230,
      "roughness": 0.93,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "red",
      "color": 8269865,
      "roughness": 0.78,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 9002305,
      "roughness": 0.4,
      "metalness": 0.3,
      "envMapIntensity": 1.2
    },
    {
      "id": "green",
      "color": 5664091,
      "roughness": 0.68,
      "metalness": 0
    },
    {
      "id": "dark",
      "color": 5195582,
      "roughness": 0.96,
      "metalness": 0
    },
    {
      "id": "coil",
      "color": 7234653,
      "roughness": 0.94,
      "metalness": 0
    }
  ],
  "geometry": {
    "plinth": [
      [
        0,
        0.55,
        5,
        6
      ],
      [
        0.55,
        0.75,
        4.72,
        5.72
      ]
    ],
    "body": {
      "y0": 0.75,
      "y1": 4.5,
      "hz": 4.4,
      "xBack": -3.6,
      "xFront": 0.2
    },
    "column": {
      "r": 0.2,
      "y0": 0.75,
      "y1": 4.5,
      "baseR": 0.32,
      "baseH": 0.22,
      "at": [
        [
          1.9,
          -3.6
        ],
        [
          1.9,
          -1.8
        ],
        [
          1.9,
          0
        ],
        [
          1.9,
          1.8
        ],
        [
          1.9,
          3.6
        ],
        [
          0.85,
          -3.6
        ],
        [
          0.85,
          3.6
        ]
      ]
    },
    "dragon": {
      "at": [
        [
          1.9,
          -1.8
        ],
        [
          1.9,
          1.8
        ]
      ],
      "turns": 3.2,
      "r": 0.24,
      "seg": 26
    },
    "roof": {
      "hx": 4.55,
      "hz": 5.55,
      "ridgeHalfZ": 3.6,
      "y0": 4.5,
      "y1": 6.996,
      "curve": 1.75,
      "steps": 9,
      "drop": 0.34,
      "lift": 0.5
    },
    "ridge": {
      "y": 6.996,
      "halfZ": 3.6,
      "h": 0.34,
      "w": 0.46,
      "curlReach": 0.62,
      "curlRise": 0.86
    },
    "coils": {
      "count": 11,
      "rTop": 0.06,
      "rBot": 0.3,
      "h": 0.52,
      "x": 1.2
    },
    "censer": {
      "x": 1.3,
      "z": 0
    }
  }
};
function mergeGeos(geos) {
  const parts = [];
  const temp = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temp.push(true);
    } else {
      parts.push(g);
      temp.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute("position").count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    for (let i = 0; i < p.count; i++) {
      position[(v + i) * 3] = p.getX(i);
      position[(v + i) * 3 + 1] = p.getY(i);
      position[(v + i) * 3 + 2] = p.getZ(i);
      if (n) {
        normal[(v + i) * 3] = n.getX(i);
        normal[(v + i) * 3 + 1] = n.getY(i);
        normal[(v + i) * 3 + 2] = n.getZ(i);
      }
      if (t) {
        uv[(v + i) * 2] = t.getX(i);
        uv[(v + i) * 2 + 1] = t.getY(i);
      }
    }
    v += p.count;
  }
  for (let i = 0; i < parts.length; i++) {
    if (temp[i]) parts[i].dispose();
    geos[i].dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute("position", new THREE.BufferAttribute(position, 3));
  out.setAttribute("normal", new THREE.BufferAttribute(normal, 3));
  out.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function cylAt(cx, cy, cz, rTop, rBot, h, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
  g.translate(cx, cy, cz);
  return g;
}
function hipRoof(hx, hz, ridgeHalfZ, y0, y1, curveExp, steps, drop, cornerLift) {
  const ring = (t) => {
    const f = Math.pow(1 - t, curveExp);
    const g2 = Math.pow(Math.max(0, 1 - t / 0.34), 2);
    const lift = cornerLift * g2, out = 1 + 0.045 * g2;
    const ax = hx * f * out, az = (ridgeHalfZ + (hz - ridgeHalfZ) * f) * out;
    const y = y0 + (y1 - y0) * t;
    const c = (x, z) => [x, y + lift, z];
    const m = (x, z) => [x, y, z];
    return [
      c(ax, -az),
      m(0, -az),
      c(-ax, -az),
      m(-ax, 0),
      c(-ax, az),
      m(0, az),
      c(ax, az),
      m(ax, 0)
    ];
  };
  const tri = [];
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  let prev = ring(0);
  for (let i = 1; i <= steps; i++) {
    const cur = ring(i / steps);
    for (let k = 0; k < 8; k++) {
      const k2 = (k + 1) % 8;
      push(prev[k], prev[k2], cur[k2]);
      push(prev[k], cur[k2], cur[k]);
    }
    prev = cur;
  }
  const e = ring(0);
  const low = e.map((p) => [p[0], p[1] - drop, p[2]]);
  for (let k = 0; k < 8; k++) {
    const k2 = (k + 1) % 8;
    push(low[k], e[k], e[k2]);
    push(low[k], e[k2], low[k2]);
  }
  for (let k = 1; k < 7; k++) push(low[0], low[k + 1], low[k]);
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  g.computeVertexNormals();
  return g;
}
function curledHorn(reach, rise, thick, n = 6) {
  const segs = [];
  const at = (u) => [reach * Math.sin(u * Math.PI * 0.46), rise * u];
  for (let j = 0; j < n; j++) {
    const a = at(j / n), b = at((j + 1) / n);
    const dx = b[0] - a[0], dy = b[1] - a[1];
    const w = thick * (1 - j / n) + thick * 0.28;
    const g = new THREE.BoxGeometry(w, Math.hypot(dx, dy) + thick * 0.2, w);
    g.rotateZ(Math.atan2(-dx, dy));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
    segs.push(g);
  }
  return mergeGeos(segs);
}
function tintByHeight(geo, y0, y1, rgb0) {
  const p = geo.getAttribute("position");
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.min(1, Math.max(0, (p.getY(i) - y0) / (y1 - y0)));
    for (let c = 0; c < 3; c++) col[i * 3 + c] = rgb0[c] + (1 - rgb0[c]) * t;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true
    });
    if (s.envMapIntensity !== void 0) m.envMapIntensity = s.envMapIntensity;
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createChineseShrineModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Chinese Shrine";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function guardVertexColors(geo, mat) {
    if (!mat || !mat.vertexColors || geo.getAttribute("color")) return;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const mesh = new THREE.Mesh(geo, materials[matId]);
    mesh.name = name;
    mesh.castShadow = castShadow;
    mesh.receiveShadow = receiveShadow;
    node.add(mesh);
    root.add(node);
    nodes[id] = node;
    meshes[id] = mesh;
    colliders[id] = null;
    return mesh;
  }
  function addInst(id, name, geo, matId, mats, cols) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
    const inst = new THREE.InstancedMesh(geo, materials[matId], mats.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < mats.length; i++) inst.setMatrixAt(i, mats[i]);
    if (cols) {
      const c = new THREE.Color();
      for (let i = 0; i < cols.length; i++) inst.setColorAt(i, c.setHex(cols[i]));
      if (inst.instanceColor) inst.instanceColor.needsUpdate = true;
    }
    inst.instanceMatrix.needsUpdate = true;
    node.add(inst);
    root.add(node);
    nodes[id] = node;
    meshes[id] = inst;
    colliders[id] = null;
    return inst;
  }
  function quad(radius, y, phase = 0) {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1)
      );
    });
  }
  const G = CONFIG.geometry;
  {
    const P = G.plinth, C = G.censer;
    const parts = P.map(([y0, y1, hx, hz]) => boxAt(0, (y0 + y1) / 2, 0, hx * 2, y1 - y0, hz * 2));
    parts.push(cylAt(C.x, 1.16, C.z, 0.4, 0.3, 0.42, 14));
    parts.push(cylAt(C.x, 1.4, C.z, 0.42, 0.4, 0.08, 14));
    for (let i = 0; i < 3; i++) {
      const a = i / 3 * Math.PI * 2 + 0.5;
      parts.push(boxAt(C.x + Math.sin(a) * 0.27, 0.85, C.z + Math.cos(a) * 0.27, 0.08, 0.24, 0.08));
    }
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 0.75, [0.86, 0.86, 0.84]);
    add("plinth", "Stone plinth and censer", geo, "pale");
    colliders["plinth"] = {
      shape: "box",
      localCenter: [0, 4, 0],
      halfExtents: [5, 4, 6],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the shrine, not with its individual columns.'
    };
  }
  {
    const B = G.body;
    add("body", "Shrine body", boxAt(
      (B.xBack + B.xFront) / 2,
      (B.y0 + B.y1) / 2,
      0,
      B.xFront - B.xBack,
      B.y1 - B.y0,
      B.hz * 2
    ), "red");
  }
  {
    const B = G.body;
    add("shade", "Porch shade face", boxAt(
      B.xFront + 0.04,
      (B.y0 + B.y1) / 2 - 0.1,
      0,
      0.08,
      B.y1 - B.y0 - 0.55,
      B.hz * 2 - 0.7
    ), "dark");
  }
  {
    const C = G.column;
    const h = C.y1 - C.y0 - C.baseH;
    const shaft = mergeGeos([
      cylAt(0, 0, 0, C.r, C.r * 1.06, h, 14),
      // A capital block where the column meets the eaves beam, sunk into the shaft so no two top
      // faces share a plane.
      boxAt(0, h / 2 - 0.16, 0, C.r * 2.5, 0.32, C.r * 2.5)
    ]);
    const cy = C.y0 + C.baseH + h / 2;
    addInst(
      "columns",
      "Round columns",
      shaft,
      "red",
      C.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, cy, z))
    );
    const base = mergeGeos([
      cylAt(0, 0, 0, C.baseR, C.baseR * 1.12, C.baseH, 14),
      cylAt(0, C.baseH / 2 + 0.03, 0, C.r * 1.3, C.baseR * 0.92, 0.08, 14)
    ]);
    addInst(
      "column-bases",
      "Column drum bases",
      base,
      "pale",
      C.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, C.y0 + C.baseH / 2, z))
    );
  }
  {
    const C = G.column, D = G.dragon;
    const parts = [];
    const y0 = C.y0 + C.baseH, y1 = C.y1 - 0.4;
    for (const [cx, cz] of D.at) {
      for (let i = 0; i < D.seg; i++) {
        const t0 = i / D.seg, t1 = (i + 1) / D.seg;
        const p = (t) => {
          const a2 = t * D.turns * Math.PI * 2;
          return [cx + Math.sin(a2) * D.r, y0 + (y1 - y0) * t, cz + Math.cos(a2) * D.r];
        };
        const a = p(t0), b = p(t1);
        const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
        const len = Math.sqrt(dx * dx + dy * dy + dz * dz);
        const g = new THREE.BoxGeometry(0.11, len + 0.03, 0.11);
        g.rotateX(Math.atan2(Math.hypot(dx, dz), dy));
        g.rotateY(Math.atan2(dx, dz));
        g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
        parts.push(g);
      }
    }
    add("dragons", "Gilt dragon spirals", mergeGeos(parts), "gold");
  }
  {
    const R = G.roof, RG = G.ridge;
    const parts = [
      hipRoof(R.hx, R.hz, R.ridgeHalfZ, R.y0, R.y1, R.curve, R.steps, R.drop, R.lift),
      boxAt(0, RG.y + RG.h / 2, 0, RG.w, RG.h, RG.halfZ * 2)
    ];
    for (const zs of [-1, 1]) {
      const g = curledHorn(RG.curlReach, RG.curlRise, 0.3, 6);
      g.rotateY(zs > 0 ? 0 : Math.PI);
      g.rotateY(Math.PI / 2);
      g.translate(0, RG.y + 0.1, zs * RG.halfZ);
      parts.push(g);
    }
    for (const zs of [-1, 1]) {
      for (const xs of [-1, 1]) {
        const g = curledHorn(0.44, 0.78, 0.24, 5);
        g.scale(xs, 1, 1);
        g.rotateY(zs > 0 ? Math.PI / 4 : -Math.PI / 4);
        g.translate(xs * (R.hx * 1.045 - 0.34), R.y0 + R.lift - 0.3, zs * (R.hz * 1.045 - 0.34));
        parts.push(g);
      }
    }
    for (const xs of [-1, 1]) {
      parts.push(boxAt(xs * 0.3, RG.y + RG.h + 0.22, 0, 0.2, 0.44, 0.44));
      parts.push(boxAt(xs * 0.3, RG.y + RG.h + 0.5, 0.1, 0.16, 0.22, 0.16));
    }
    add("roof", "Glazed tile roof", mergeGeos(parts), "green");
  }
  {
    const K = G.coils, B = G.body;
    const unit = mergeGeos([
      cylAt(0, 0, 0, K.rTop, K.rBot, K.h, 12),
      cylAt(0, K.h / 2 + 0.16, 0, 0.02, 0.02, 0.32, 6)
      // the wire it hangs from
    ]);
    const mats = [];
    for (let i = 0; i < K.count; i++) {
      const z = -3.46 + 6.92 * i / (K.count - 1);
      const y = 3.32 - i % 3 * 0.3;
      mats.push(new THREE.Matrix4().setPosition(K.x - i % 2 * 0.55, y, z));
    }
    addInst("coils", "Hanging incense coils", unit, "coil", mats);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createChineseShrineModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [];
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.position.set(0, 0, 0);
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    pivots.push(rootPivot);
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    const grouped = /* @__PURE__ */ new Map();
    for (const [name, members] of Object.entries(rt.destructionGroups ?? {})) {
      grouped.set(name, [...members]);
    }
    for (const node of Object.values(nodes)) {
      const group = node?.userData?.actionProfile?.destruction?.fractureGroup;
      if (typeof group !== "string" || !group) continue;
      if (!grouped.has(group)) grouped.set(group, []);
      grouped.get(group).push(node);
    }
    root.userData.sculptRuntime = {
      ...rt,
      // A COUNT, not the Record. thaikit's harness returns this field straight across the
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular and
      // fails to serialise, which surfaces as the whole stats object arriving undefined. The
      // Record stays reachable under byId.
      nodes: Object.keys(nodes).length,
      pivots,
      sockets: Object.values(rt.sockets ?? {}),
      colliders,
      destructionGroups: [...grouped.entries()].map(([name, members]) => ({ name, members })),
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: rt.sockets ?? {} }
    };
  }
  return root;
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ2hpbmVzZSBTaHJpbmUgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMTAuMDAgeCA4LjAwIHggMTIuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgbG9uZyBheGlzIG9uIFouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJjaGluZXNlLXNocmluZVwiLFxuICAgIFwibmFtZVwiOiBcIkNoaW5lc2UgU2hyaW5lXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiQ2hpbmVzZVNocmluZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxMC4wMCB4IDguMDAgeCAxMi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFsZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDg4MTUyMzAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyZWRcIixcbiAgICAgICAgXCJjb2xvclwiOiA4MjY5ODY1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjc4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ29sZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDkwMDIzMDUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJncmVlblwiLFxuICAgICAgICBcImNvbG9yXCI6IDU2NjQwOTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNjgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTE5NTU4MixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvaWxcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MjM0NjUzLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwicGxpbnRoXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC41NSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgMC43NSxcbiAgICAgICAgICA0LjcyLFxuICAgICAgICAgIDUuNzJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgIFwieTBcIjogMC43NSxcbiAgICAgICAgXCJ5MVwiOiA0LjUsXG4gICAgICAgIFwiaHpcIjogNC40LFxuICAgICAgICBcInhCYWNrXCI6IC0zLjYsXG4gICAgICAgIFwieEZyb250XCI6IDAuMlxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJyXCI6IDAuMixcbiAgICAgICAgXCJ5MFwiOiAwLjc1LFxuICAgICAgICBcInkxXCI6IDQuNSxcbiAgICAgICAgXCJiYXNlUlwiOiAwLjMyLFxuICAgICAgICBcImJhc2VIXCI6IDAuMjIsXG4gICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIC0zLjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIC0xLjhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIDEuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS45LFxuICAgICAgICAgICAgMy42XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjg1LFxuICAgICAgICAgICAgLTMuNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC44NSxcbiAgICAgICAgICAgIDMuNlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZHJhZ29uXCI6IHtcbiAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS45LFxuICAgICAgICAgICAgLTEuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS45LFxuICAgICAgICAgICAgMS44XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInR1cm5zXCI6IDMuMixcbiAgICAgICAgXCJyXCI6IDAuMjQsXG4gICAgICAgIFwic2VnXCI6IDI2XG4gICAgICB9LFxuICAgICAgXCJyb29mXCI6IHtcbiAgICAgICAgXCJoeFwiOiA0LjU1LFxuICAgICAgICBcImh6XCI6IDUuNTUsXG4gICAgICAgIFwicmlkZ2VIYWxmWlwiOiAzLjYsXG4gICAgICAgIFwieTBcIjogNC41LFxuICAgICAgICBcInkxXCI6IDYuOTk2LFxuICAgICAgICBcImN1cnZlXCI6IDEuNzUsXG4gICAgICAgIFwic3RlcHNcIjogOSxcbiAgICAgICAgXCJkcm9wXCI6IDAuMzQsXG4gICAgICAgIFwibGlmdFwiOiAwLjVcbiAgICAgIH0sXG4gICAgICBcInJpZGdlXCI6IHtcbiAgICAgICAgXCJ5XCI6IDYuOTk2LFxuICAgICAgICBcImhhbGZaXCI6IDMuNixcbiAgICAgICAgXCJoXCI6IDAuMzQsXG4gICAgICAgIFwid1wiOiAwLjQ2LFxuICAgICAgICBcImN1cmxSZWFjaFwiOiAwLjYyLFxuICAgICAgICBcImN1cmxSaXNlXCI6IDAuODZcbiAgICAgIH0sXG4gICAgICBcImNvaWxzXCI6IHtcbiAgICAgICAgXCJjb3VudFwiOiAxMSxcbiAgICAgICAgXCJyVG9wXCI6IDAuMDYsXG4gICAgICAgIFwickJvdFwiOiAwLjMsXG4gICAgICAgIFwiaFwiOiAwLjUyLFxuICAgICAgICBcInhcIjogMS4yXG4gICAgICB9LFxuICAgICAgXCJjZW5zZXJcIjoge1xuICAgICAgICBcInhcIjogMS4zLFxuICAgICAgICBcInpcIjogMFxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hpbmVzZVNocmluZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnQ2hpbmVzZSBTaHJpbmUnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdG9uZSBwbGludGggYW5kIGNlbnNlclxuICAgKiBUd28gc3RlcHBlZCBzbGFicyBhbmQgdGhlIHRyaXBvZCBjZW5zZXIgc3RhbmRpbmcgb24gdGhlbSwgYWxsIHRoZSBzYW1lIHBhbGUgc3RvbmUgYW5kXG4gICAqIHRoZXJlZm9yZSBPTkUgY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLiBUaGUgY2Vuc2VyIGlzIGZyZWVzdGFuZGluZyBpbiB0aGUgcGxhdGUgYW5kIGNvdWxkXG4gICAqIGhhdmUgYmVlbiBpdHMgb3duIGNvbXBvbmVudDsgaXQgaXMgbm90LCBiZWNhdXNlIGdyb3VwaW5nIGJ5IE1BVEVSSUFMIHJhdGhlciB0aGFuIGJ5IG9iamVjdCBpc1xuICAgKiB3aGF0IGhvbGRzIHRoZSBkcmF3LWNhbGwgY291bnQgZG93bi4gKi9cbiAge1xuICAgIGNvbnN0IFAgPSBHLnBsaW50aCBhcyBudW1iZXJbXVtdLCBDID0gRy5jZW5zZXI7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBQLm1hcCgoW3kwLCB5MSwgaHgsIGh6XSkgPT5cbiAgICAgIGJveEF0KDAsICh5MCArIHkxKSAvIDIsIDAsIGh4ICogMiwgeTEgLSB5MCwgaHogKiAyKSk7XG4gICAgLy8gVHJpcG9kIGNlbnNlcjogYm93bCwgcmltLCB0aHJlZSBsZWdzIGFuZCB0aGUgc3R1YiBvZiBpbmNlbnNlIHN0aWNrcy5cbiAgICBwYXJ0cy5wdXNoKGN5bEF0KEMueCwgMS4xNiwgQy56LCAwLjQwLCAwLjMwLCAwLjQyLCAxNCkpO1xuICAgIHBhcnRzLnB1c2goY3lsQXQoQy54LCAxLjQwLCBDLnosIDAuNDIsIDAuNDAsIDAuMDgsIDE0KSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSAoaSAvIDMpICogTWF0aC5QSSAqIDIgKyAwLjU7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KEMueCArIE1hdGguc2luKGEpICogMC4yNywgMC44NSwgQy56ICsgTWF0aC5jb3MoYSkgKiAwLjI3LCAwLjA4LCAwLjI0LCAwLjA4KSk7XG4gICAgfVxuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gVGhlIHBsYXRlJ3MgcGxpbnRoIGlzIHN0YWluZWQgYnJvd24gYWxvbmcgaXRzIHRvcCBlZGdlIGFuZCBjbGVhbiBiZWxvdzsgdGhlIHZlcnRpY2FsIGdyYWRpZW50XG4gICAgLy8gaXMgZGVsaXZlcmVkIGFzIGEgcGVyLXZlcnRleCB0aW50IHJhdGhlciB0aGFuIGFzIGEgc2Vjb25kIG1hdGVyaWFsLlxuICAgIHRpbnRCeUhlaWdodChnZW8sIDAsIDAuNzUsIFswLjg2LCAwLjg2LCAwLjg0XSk7XG4gICAgYWRkKCdwbGludGgnLCAnU3RvbmUgcGxpbnRoIGFuZCBjZW5zZXInLCBnZW8sICdwYWxlJyk7XG4gICAgY29sbGlkZXJzWydwbGludGgnXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCA0LjAsIDBdLCBoYWxmRXh0ZW50czogWzUuMCwgNC4wLCA2LjBdLFxuICAgICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlOyBhIGxldmVsICdcbiAgICAgICAgICAgKyAnYnVpbGRlciBjb2xsaWRlcyB3aXRoIHRoZSBzaHJpbmUsIG5vdCB3aXRoIGl0cyBpbmRpdmlkdWFsIGNvbHVtbnMuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByZWQgYm9keVxuICAgKiBBIFNPTElEIHJlZCBtYXNzIGZpbGxpbmcgdGhlIGJhY2sgb2YgdGhlIHBsYW4sIHdpdGggdGhlIHBvcmNoIGxlZnQgb3BlbiBpbiBmcm9udCBvZiBpdC4gVGhlXG4gICAqIHNocmluZSBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvIHRoZXJlIGlzIG5vIGludGVyaW9yOiBpdCB3b3VsZFxuICAgKiBjb3N0IGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcywgYW5kIGEgc29saWQgYm9keSBhbHNvIG1lYW5zXG4gICAqIHRoZSBwb3JjaCBuZWVkcyBubyBvcGVuaW5nIGN1dCBpbiBpdC4gKi9cbiAge1xuICAgIGNvbnN0IEIgPSBHLmJvZHk7XG4gICAgYWRkKCdib2R5JywgJ1NocmluZSBib2R5JywgYm94QXQoKEIueEJhY2sgKyBCLnhGcm9udCkgLyAyLCAoQi55MCArIEIueTEpIC8gMiwgMCxcbiAgICAgIEIueEZyb250IC0gQi54QmFjaywgQi55MSAtIEIueTAsIEIuaHogKiAyKSwgJ3JlZCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwb3JjaCBzaGFkZVxuICAgKiBUaGUgZGFyayBmYWNlIHRoZSBwb3JjaCBsb29rcyBpbnRvLCBzdGFuZGluZyAwLjA0IG0gcHJvdWQgb2YgdGhlIHJlZCBib2R5IHJhdGhlciB0aGFuIHJlY2Vzc2VkXG4gICAqIGludG8gaXQ6IHRoZSBib2R5IGlzIGEgc29saWQgbWFzcywgc28gYSBwYW5lbCBzdW5rIGludG8gaXQgaXMgaW5zaWRlIHRoZSBzb2xpZCBhbmQgaW52aXNpYmxlLlxuICAgKiBUb2dldGhlciB3aXRoIHRoZSBjb2x1bW5zIGFuZCB0aGUgaGFuZ2luZyBjb2lscyBpbiBmcm9udCBvZiBpdCwgdGhpcyBpcyB3aGF0IGdpdmVzIHRoZSBvcGVuXG4gICAqIGZyb250IGl0cyBkZXB0aCB3aXRob3V0IG1vZGVsbGluZyBhbiBpbnRlcmlvci4gKi9cbiAge1xuICAgIGNvbnN0IEIgPSBHLmJvZHk7XG4gICAgYWRkKCdzaGFkZScsICdQb3JjaCBzaGFkZSBmYWNlJywgYm94QXQoQi54RnJvbnQgKyAwLjA0LCAoQi55MCArIEIueTEpIC8gMiAtIDAuMTAsIDAsXG4gICAgICAwLjA4LCBCLnkxIC0gQi55MCAtIDAuNTUsIEIuaHogKiAyIC0gMC43MCksICdkYXJrJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbHVtbnMgYW5kIHRoZWlyIGJhc2VzXG4gICAqIFNpeCByb3VuZCByZWQgY29sdW1ucyBhbmQgc2l4IHBhbGUgc3RvbmUgZHJ1bSBiYXNlcywgYXMgVFdPIEluc3RhbmNlZE1lc2ggc3lzdGVtcyBvbiBvbmVcbiAgICogcGxhY2VtZW50IHNjaGVkdWxlLiBUd28gc3lzdGVtcyByYXRoZXIgdGhhbiBvbmUgYmVjYXVzZSBJbnN0YW5jZWRNZXNoIHRha2VzIGEgc2luZ2xlIG1hdGVyaWFsXG4gICAqIGFuZCBhIHN0b25lIGJhc2UgaXMgbm90IGEgbGFjcXVlcmVkIGNvbHVtbiAtLSBhbmQgb25lIHN5c3RlbSB3aXRoIGEgcGVyLWluc3RhbmNlIGNvbG91ciB3b3VsZFxuICAgKiBiZSB3cm9uZyBoZXJlLCBzaW5jZSB0aGUgYmFzZSBpcyBhIGRpZmZlcmVudCBTSEFQRSBhcyB3ZWxsIGFzIGEgZGlmZmVyZW50IHN0b25lLiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY29sdW1uO1xuICAgIGNvbnN0IGggPSBDLnkxIC0gQy55MCAtIEMuYmFzZUg7XG4gICAgY29uc3Qgc2hhZnQgPSBtZXJnZUdlb3MoW1xuICAgICAgY3lsQXQoMCwgMCwgMCwgQy5yLCBDLnIgKiAxLjA2LCBoLCAxNCksXG4gICAgICAvLyBBIGNhcGl0YWwgYmxvY2sgd2hlcmUgdGhlIGNvbHVtbiBtZWV0cyB0aGUgZWF2ZXMgYmVhbSwgc3VuayBpbnRvIHRoZSBzaGFmdCBzbyBubyB0d28gdG9wXG4gICAgICAvLyBmYWNlcyBzaGFyZSBhIHBsYW5lLlxuICAgICAgYm94QXQoMCwgaCAvIDIgLSAwLjE2LCAwLCBDLnIgKiAyLjUsIDAuMzIsIEMuciAqIDIuNSksXG4gICAgXSk7XG4gICAgY29uc3QgY3kgPSBDLnkwICsgQy5iYXNlSCArIGggLyAyO1xuICAgIGFkZEluc3QoJ2NvbHVtbnMnLCAnUm91bmQgY29sdW1ucycsIHNoYWZ0LCAncmVkJyxcbiAgICAgIChDLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIGN5LCB6KSkpO1xuXG4gICAgY29uc3QgYmFzZSA9IG1lcmdlR2VvcyhbXG4gICAgICBjeWxBdCgwLCAwLCAwLCBDLmJhc2VSLCBDLmJhc2VSICogMS4xMiwgQy5iYXNlSCwgMTQpLFxuICAgICAgY3lsQXQoMCwgQy5iYXNlSCAvIDIgKyAwLjAzLCAwLCBDLnIgKiAxLjMwLCBDLmJhc2VSICogMC45MiwgMC4wOCwgMTQpLFxuICAgIF0pO1xuICAgIGFkZEluc3QoJ2NvbHVtbi1iYXNlcycsICdDb2x1bW4gZHJ1bSBiYXNlcycsIGJhc2UsICdwYWxlJyxcbiAgICAgIChDLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIEMueTAgKyBDLmJhc2VIIC8gMiwgeikpKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZHJhZ29uIHNwaXJhbHNcbiAgICogVGhlIHJlZ2lzdHJ5IG5vdGVzIG5hbWUgdGhlIGRyYWdvbi13cmFwcGVkIGNvbHVtbnMgYXMgb25lIG9mIHRoZSB0d28gZmVhdHVyZXMgdGhhdCBjYXJyeVxuICAgKiByZWNvZ25pdGlvbiBmcm9tIG91dHNpZGUsIHNvIHRoZSBkcmFnb24gaXMgR0VPTUVUUlkgLS0gYSBnaWx0IHNwaXJhbCBjb2lsaW5nIHVwIHRoZSB0d28gY2VudHJlXG4gICAqIGZyb250IGNvbHVtbnMgLS0gYW5kIG5vdCBhIHRleHR1cmUuIEEgcGFpbnRlZC1vbiBkcmFnb24gd291bGQgbmVlZCB0aGUgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCxcbiAgICogd2hpY2ggZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCBkaXNjYXJkcyBldmVyeSBtZWFzdXJlZCBhbGJlZG8gb24gdGhlIHByb3AuXG4gICAqXG4gICAqIFR3ZW50eS1zaXggc2hvcnQgc2VnbWVudHMgcGVyIGNvbHVtbiwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudCwgbWVyZ2VkIGludG8gb25lXG4gICAqIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IEMgPSBHLmNvbHVtbiwgRCA9IEcuZHJhZ29uO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgeTAgPSBDLnkwICsgQy5iYXNlSCwgeTEgPSBDLnkxIC0gMC40MDtcbiAgICBmb3IgKGNvbnN0IFtjeCwgY3pdIG9mIEQuYXQgYXMgbnVtYmVyW11bXSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBELnNlZzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHQwID0gaSAvIEQuc2VnLCB0MSA9IChpICsgMSkgLyBELnNlZztcbiAgICAgICAgY29uc3QgcCA9ICh0OiBudW1iZXIpID0+IHtcbiAgICAgICAgICBjb25zdCBhID0gdCAqIEQudHVybnMgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICByZXR1cm4gW2N4ICsgTWF0aC5zaW4oYSkgKiBELnIsIHkwICsgKHkxIC0geTApICogdCwgY3ogKyBNYXRoLmNvcyhhKSAqIEQucl07XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGEgPSBwKHQwKSwgYiA9IHAodDEpO1xuICAgICAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdLCBkeiA9IGJbMl0gLSBhWzJdO1xuICAgICAgICBjb25zdCBsZW4gPSBNYXRoLnNxcnQoZHggKiBkeCArIGR5ICogZHkgKyBkeiAqIGR6KTtcbiAgICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjExLCBsZW4gKyAwLjAzLCAwLjExKTtcbiAgICAgICAgLy8gQWltIHRoZSBzZWdtZW50IGFsb25nIGl0cyBvd24gdGFuZ2VudDogeWF3IGFib3V0IFkgdG8gZmFjZSB0aGUgY2hvcmQgaW4gcGxhbiwgdGhlbiB0aWx0XG4gICAgICAgIC8vIGFib3V0IFggc28gaXQgY2xpbWJzLiBXcml0dGVuIGFzIGEgcXVhdGVybmlvbiBmcm9tIGEgZGlyZWN0aW9uIHZlY3RvciB0aGlzIHdvdWxkIG5lZWQgYVxuICAgICAgICAvLyBiYXNpczsgdHdvIEV1bGVyIHR1cm5zIGFyZSBleGFjdCBmb3IgYSBoZWxpeCBhbmQgY29zdCBub3RoaW5nLlxuICAgICAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihNYXRoLmh5cG90KGR4LCBkeiksIGR5KSk7XG4gICAgICAgIGcucm90YXRlWShNYXRoLmF0YW4yKGR4LCBkeikpO1xuICAgICAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIChhWzJdICsgYlsyXSkgLyAyKTtcbiAgICAgICAgcGFydHMucHVzaChnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgYWRkKCdkcmFnb25zJywgJ0dpbHQgZHJhZ29uIHNwaXJhbHMnLCBtZXJnZUdlb3MocGFydHMpLCAnZ29sZCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb29mXG4gICAqIFRoZSB3aG9sZSBpZGVudGl0eSBvZiB0aGUgcHJvcCwgYW5kIGV2ZXJ5dGhpbmcgZ3JlZW4gcmlkZXMgT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbDpcbiAgICogdGhlIGhpcCBzdXJmYWNlLCB0aGUgcmlkZ2UgYmFyLCBpdHMgdHdvIHVwc3dlcHQgY3VybGVkIGVuZHMgYW5kIHRoZSBmb3VyIGZseWluZyBlYXZlcyBjb3JuZXJzLlxuICAgKlxuICAgKiBJdCBpcyBhIEhJUCAtLSBzbG9waW5nIG9uIGFsbCBmb3VyIHNpZGVzIC0tIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tXG4gICAqIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UsIG5vdCBhbiBleHRydWRlZCBnYWJsZSBwcm9maWxlLCB3aGljaCB3b3VsZCBnaXZlIHZlcnRpY2FsIGVuZHMgYW5kIGFcbiAgICogZGlmZmVyZW50IGJ1aWxkaW5nLiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyAoMS10KV4wLjYyLCBhbiBleHBvbmVudCBCRUxPVyBvbmUsIGFuZCB0aGF0XG4gICAqIGlzIHdoYXQgbWFrZXMgdGhlIHNlY3Rpb24gQ09OQ0FWRTogc3RlZXAgYXQgdGhlIHJpZGdlLCBmbGF0dGVuaW5nIHRvd2FyZHMgdGhlIGVhdmVzLiBBIGxpbmVhclxuICAgKiBzaHJpbmsgZ2l2ZXMgdGhlIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZCwgYW5kIHRoaXMgcm9vZidzXG4gICAqIHdob2xlIHBvaW50IGlzIHRoYXQgaXQgaXMgbm90IHRoYXQuICovXG4gIHtcbiAgICBjb25zdCBSID0gRy5yb29mLCBSRyA9IEcucmlkZ2U7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBoaXBSb29mKFIuaHgsIFIuaHosIFIucmlkZ2VIYWxmWiwgUi55MCwgUi55MSwgUi5jdXJ2ZSwgUi5zdGVwcywgUi5kcm9wLCBSLmxpZnQpLFxuICAgICAgYm94QXQoMCwgUkcueSArIFJHLmggLyAyLCAwLCBSRy53LCBSRy5oLCBSRy5oYWxmWiAqIDIpLFxuICAgIF07XG4gICAgLy8gVGhlIHR3byByaWRnZS1lbmQgY3VybHMuIFRoZXNlIGFyZSB3aGF0IHRoZSByZWdpc3RyeSBub3RlcyBtZWFuIGJ5IFwic3Ryb25nbHkgdXBzd2VwdCBjdXJsZWRcbiAgICAvLyByaWRnZSBlbmRzXCIsIGFuZCB0aGV5IGFyZSB0aGUgZmVhdHVyZSB0aGF0IG1vc3Qgc2VwYXJhdGVzIHRoaXMgcm9vZiBmcm9tIGEgVGhhaSBvbmUuXG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCBnID0gY3VybGVkSG9ybihSRy5jdXJsUmVhY2gsIFJHLmN1cmxSaXNlLCAwLjMwLCA2KTtcbiAgICAgIGcucm90YXRlWSh6cyA+IDAgPyAwIDogTWF0aC5QSSk7XG4gICAgICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDIpOyAgICAgICAgICAgIC8vIHRoZSBjdXJsIHJ1bnMgYWxvbmcgWiwgdGhlIHJpZGdlIGF4aXNcbiAgICAgIGcudHJhbnNsYXRlKDAsIFJHLnkgKyAwLjEwLCB6cyAqIFJHLmhhbGZaKTtcbiAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgfVxuICAgIC8vIEZvdXIgZmx5aW5nIGVhdmVzIGNvcm5lcnMsIGN1cmxpbmcgdXAgZnJvbSB0aGUgZWF2ZXMgbGluZS4gaGlwUm9vZiBhbHJlYWR5IGxpZnRzIGFuZCBwdXNoZXNcbiAgICAvLyB0aGUgY29ybmVyczsgdGhlc2UgY2FycnkgdGhlIGN1cmwgYmV5b25kIHdoZXJlIGEgc3dlcHQgc3VyZmFjZSBjYW4gZ28uXG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgY29uc3QgZyA9IGN1cmxlZEhvcm4oMC40NCwgMC43OCwgMC4yNCwgNSk7XG4gICAgICAgIGcuc2NhbGUoeHMsIDEsIDEpO1xuICAgICAgICBnLnJvdGF0ZVkoenMgPiAwID8gTWF0aC5QSSAvIDQgOiAtTWF0aC5QSSAvIDQpO1xuICAgICAgICBnLnRyYW5zbGF0ZSh4cyAqIChSLmh4ICogMS4wNDUgLSAwLjM0KSwgUi55MCArIFIubGlmdCAtIDAuMzAsIHpzICogKFIuaHogKiAxLjA0NSAtIDAuMzQpKTtcbiAgICAgICAgcGFydHMucHVzaChnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIHBhaXIgb2YgZ3VhcmRpYW4gYmVhc3RzIG9uIHRoZSByaWRnZSwgYmxvY2tlZCBpbiByYXRoZXIgdGhhbiBzY3VscHRlZDogYXQgdGhlIGRpc3RhbmNlIGFcbiAgICAvLyBzaHJpbmUgcm9vZiBpcyByZWFkIGZyb20gdGhleSBhcmUgdHdvIHNpbGhvdWV0dGVzLCBhbmQgdHdvIHNpbGhvdWV0dGVzIGFyZSB3aGF0IHRoZXkgZ2V0LlxuICAgIGZvciAoY29uc3QgeHMgb2YgWy0xLCAxXSkge1xuICAgICAgcGFydHMucHVzaChib3hBdCh4cyAqIDAuMzAsIFJHLnkgKyBSRy5oICsgMC4yMiwgMCwgMC4yMCwgMC40NCwgMC40NCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdCh4cyAqIDAuMzAsIFJHLnkgKyBSRy5oICsgMC41MCwgMC4xMCwgMC4xNiwgMC4yMiwgMC4xNikpO1xuICAgIH1cbiAgICBhZGQoJ3Jvb2YnLCAnR2xhemVkIHRpbGUgcm9vZicsIG1lcmdlR2VvcyhwYXJ0cyksICdncmVlbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoYW5naW5nIGluY2Vuc2UgY29pbHNcbiAgICogVGhlIG90aGVyIGZlYXR1cmUgdGhlIHJlZ2lzdHJ5IG5vdGVzIGNhbGwgb3V0LiBFbGV2ZW4gY29uaWNhbCBjb2lscyBodW5nIGFjcm9zcyB0aGUgb3BlblxuICAgKiBmcm9udCBhdCB0aHJlZSBzdGFnZ2VyZWQgaGVpZ2h0cywgYXMgT05FIEluc3RhbmNlZE1lc2ggLS0gb25lIGdlb21ldHJ5LCBvbmUgc3VibWlzc2lvbi4gQXNcbiAgICogc2VwYXJhdGUgbWVzaGVzIHRoZXkgd291bGQgYmUgZWxldmVuIG9mIHRoZSB0d2VsdmUgZHJhdyBjYWxscyBhdmFpbGFibGUuICovXG4gIHtcbiAgICBjb25zdCBLID0gRy5jb2lscywgQiA9IEcuYm9keTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGN5bEF0KDAsIDAsIDAsIEsuclRvcCwgSy5yQm90LCBLLmgsIDEyKSxcbiAgICAgIGN5bEF0KDAsIEsuaCAvIDIgKyAwLjE2LCAwLCAwLjAyLCAwLjAyLCAwLjMyLCA2KSwgICAvLyB0aGUgd2lyZSBpdCBoYW5ncyBmcm9tXG4gICAgXSk7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBLLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHogPSAtMy40NiArICg2LjkyICogaSkgLyAoSy5jb3VudCAtIDEpO1xuICAgICAgY29uc3QgeSA9IDMuMzIgLSAoaSAlIDMpICogMC4zMDtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKEsueCAtIChpICUgMikgKiAwLjU1LCB5LCB6KSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ2NvaWxzJywgJ0hhbmdpbmcgaW5jZW5zZSBjb2lscycsIHVuaXQsICdjb2lsJywgbWF0cyk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVDaGluZXNlU2hyaW5lTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIFN0YXRpYyBsYW5kbWFyayBnZW9tZXRyeSAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIEEgbmFtZWQgcGl2b3QgaXMgYVxuICAgIC8vIHByb21pc2UgdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yXG4gICAgLy8gaGFzIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFxQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFT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
