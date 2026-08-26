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

// scratch/reclining-buddha-hall/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createRecliningBuddhaHallModel: () => createRecliningBuddhaHallModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "reclining-buddha-hall",
  "name": "Reclining Buddha Hall",
  "exportName": "RecliningBuddhaHall",
  "envelope": "Envelope 14.00 x 10.00 x 28.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "stone",
      "color": 11839643,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "dark",
      "color": 5984843,
      "roughness": 0.96,
      "metalness": 0
    },
    {
      "id": "tile",
      "color": 11102559,
      "roughness": 0.8,
      "metalness": 0
    },
    {
      "id": "band",
      "color": 13017204,
      "roughness": 0.76,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 11302721,
      "roughness": 0.34,
      "metalness": 0.15,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "pitch": 0.64,
    "platform": [
      [
        0,
        0.5,
        -7,
        7,
        -14,
        14
      ],
      [
        0.5,
        1,
        -6.55,
        6.55,
        -13.55,
        13.55
      ],
      [
        1,
        1.35,
        -6.55,
        6.55,
        -13.55,
        13.55
      ],
      [
        1.35,
        1.75,
        -6.1,
        2.6,
        -13.1,
        13.1
      ]
    ],
    "plinth": {
      "y0": 1.75,
      "y1": 2.62,
      "x0": -5.2,
      "x1": 1.6,
      "hz": 11.6
    },
    "column": {
      "hw": 0.31,
      "y0": 1.75,
      "y1": 6.6,
      "frontX": 2.1,
      "frontCount": 8,
      "frontHalfZ": 12.2,
      "endZ": 12.2,
      "endX": [
        -4.2,
        -1.05
      ]
    },
    "backWall": {
      "x0": -6.1,
      "x1": -5.2,
      "y0": 1.75,
      "y1": 6.6,
      "hz": 13.1
    },
    "tiers": [
      [
        6.6,
        7.6,
        5.15,
        13.8
      ],
      [
        7.6,
        9.78,
        3.4,
        12
      ]
    ],
    "roofCentreX": -1.72,
    "band": 0.34,
    "figure": {
      "x": -1.8,
      "rest": 2.62,
      "seg": 18,
      "prop": 1.1
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
  const anyColor = parts.some((g) => !!g.getAttribute("color"));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    const c = g.getAttribute("color");
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
      if (color && c) {
        color[(v + i) * 3] = c.getX(i);
        color[(v + i) * 3 + 1] = c.getY(i);
        color[(v + i) * 3 + 2] = c.getZ(i);
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
  if (color) out.setAttribute("color", new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function tierProfile(halfBase, y0, y1, pitch) {
  const inset = (y1 - y0) / pitch;
  const halfTop = halfBase - inset;
  const shape = new THREE.Shape();
  shape.moveTo(-halfBase, y0);
  shape.lineTo(halfBase, y0);
  if (halfTop > 0.02) {
    shape.lineTo(halfTop, y1);
    shape.lineTo(-halfTop, y1);
  } else {
    shape.lineTo(0, y0 + halfBase * pitch);
  }
  shape.closePath();
  return shape;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function tubeAlong(stations, seg) {
  const tri = [];
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const [z, cx, cy, rx, ry] = stations[i];
    const th = j % seg * Math.PI * 2 / seg;
    return [cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z];
  };
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i + 1, j), c = at(i + 1, j + 1), d = at(i, j + 1);
      push(a, b, c);
      push(a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  g.computeVertexNormals();
  return g;
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
function createRecliningBuddhaHallModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Reclining Buddha Hall";
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
    const P = G.platform, PL = G.plinth;
    const parts = P.map(([y0, y1, x0, x1, z0, z1]) => boxAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0));
    parts.push(boxAt(
      (PL.x0 + PL.x1) / 2,
      (PL.y0 + PL.y1) / 2,
      0,
      PL.x1 - PL.x0,
      PL.y1 - PL.y0,
      PL.hz * 2
    ));
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 1.75, [0.76, 0.77, 0.75]);
    add("platform", "Stone platform and statue plinth", geo, "stone");
    colliders["platform"] = {
      shape: "box",
      localCenter: [0, 5, 0],
      halfExtents: [7, 5, 14],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the hall, not with the figure inside it.'
    };
  }
  {
    const W = G.backWall;
    add("back-wall", "Back wall", boxAt(
      (W.x0 + W.x1) / 2,
      (W.y0 + W.y1) / 2,
      0,
      W.x1 - W.x0,
      W.y1 - W.y0,
      W.hz * 2
    ), "stone");
  }
  {
    const W = G.backWall, C = G.column;
    add("shade", "Interior shade", mergeGeos([
      // Top at 6.54 rather than 6.60. It was the WALL panel, not the soffit, that shared the
      // column heads' plane -- twelve pairs, one per instance -- and moving the soffit first fixed
      // nothing, because both boxes reached the same height for different reasons.
      boxAt(W.x1 + 0.04, (W.y0 + W.y1) / 2 + 0.14, 0, 0.08, W.y1 - W.y0 - 0.4, W.hz * 2 - 0.6),
      // The soffit's top sits at 6.54, not level with the column heads at 6.60: level, its top
      // face and every column's top face are the same plane facing the same way -- twelve pairs at
      // once, and the columns are an InstancedMesh so each instance is checked separately.
      boxAt((W.x1 + C.frontX) / 2, C.y1 - 0.15, 0, C.frontX - W.x1 - 0.4, 0.1, W.hz * 2 - 0.6)
    ]), "dark");
  }
  {
    const C = G.column;
    const h = C.y1 - C.y0;
    const unit = mergeGeos([
      boxAt(0, 0, 0, C.hw * 2, h, C.hw * 2),
      // A capital block at the head, sunk into the shaft so no two top faces share a plane.
      boxAt(0, h / 2 - 0.15, 0, C.hw * 2.35, 0.3, C.hw * 2.35)
    ]);
    const cy = (C.y0 + C.y1) / 2;
    const mats = [];
    for (let i = 0; i < C.frontCount; i++) {
      const z = -C.frontHalfZ + 2 * C.frontHalfZ * i / (C.frontCount - 1);
      mats.push(new THREE.Matrix4().setPosition(C.frontX, cy, z));
    }
    for (const x of C.endX) {
      mats.push(new THREE.Matrix4().setPosition(x, cy, -C.endZ));
      mats.push(new THREE.Matrix4().setPosition(x, cy, C.endZ));
    }
    addInst("columns", "Colonnade", unit, "stone", mats);
  }
  {
    const T = G.tiers, B = G.band, cx = G.roofCentreX;
    const red = [];
    const gold = [];
    for (const [y0, y1, hx, hz] of T) {
      const ySplit = y0 + B;
      const g1 = extrudeAlongZ(tierProfile(hx, y0, ySplit, G.pitch), -hz, hz);
      g1.translate(cx, 0, 0);
      gold.push(g1);
      const g2 = extrudeAlongZ(tierProfile(hx - B / G.pitch, ySplit, y1, G.pitch), -hz + 0.01, hz - 0.01);
      g2.translate(cx, 0, 0);
      red.push(g2);
    }
    add("roof-tile", "Tile roof fields", mergeGeos(red), "tile");
    add("roof-band", "Gold eaves bands", mergeGeos(gold), "band");
  }
  {
    const T = G.tiers, cx = G.roofCentreX;
    const parts = [];
    for (const [y0, y1, hx, hz] of T) {
      const inset = (y1 - y0) / G.pitch;
      const halfTop = Math.max(hx - inset, 0);
      const run = hx - halfTop, rise = y1 - y0;
      const len = Math.hypot(run, rise) + 0.1;
      const ang = Math.atan2(run, rise);
      for (const zs of [-1, 1]) {
        for (const xs of [-1, 1]) {
          const g = new THREE.BoxGeometry(0.22, len, 0.24);
          g.rotateZ(xs * ang);
          g.translate(cx + xs * (hx + halfTop) / 2, (y0 + y1) / 2, zs * (hz + 0.06));
          parts.push(g);
        }
      }
      for (const xs of [-1, 1]) {
        parts.push(boxAt(cx + xs * (hx + 0.07), y0 + 0.09, 0, 0.14, 0.26, hz * 2 + 0.26));
      }
    }
    const top = T[T.length - 1];
    parts.push(boxAt(cx, top[0] + top[2] * G.pitch + 0.05, 0, 0.3, 0.22, top[3] * 2 + 0.36));
    add("barge-boards", "Bargeboards and ridge", mergeGeos(parts), "stone");
  }
  {
    const F = G.figure, PL = G.plinth;
    const rest = PL.y1;
    const spine = [
      [-11.2, 0.08, 0.08, F.prop],
      [-10.8, 0.64, 0.74, F.prop],
      [-10.1, 0.94, 1.08, F.prop],
      [-9.3, 0.98, 1.12, F.prop],
      [-8.6, 0.76, 0.9, F.prop * 0.8],
      [-8.05, 0.68, 0.8, F.prop * 0.55],
      [-7.3, 1.08, 1.24, F.prop * 0.22],
      [-6.2, 1.24, 1.42, 0.04],
      [-3.6, 1.3, 1.46, 0],
      [-0.8, 1.24, 1.36, 0],
      [2, 1.28, 1.38, 0],
      [4.4, 1.2, 1.28, 0],
      [6.6, 1.04, 1.12, 0],
      [8.6, 0.9, 0.98, 0],
      [10, 0.82, 0.9, 0],
      [10.9, 0.8, 0.88, 0],
      [11.3, 0.78, 0.86, 0],
      [11.36, 0.06, 0.06, 0]
    ];
    const stations = spine.map(([z, rx, ry, lift]) => [z, F.x, rest + ry + lift, rx, ry]);
    const parts = [tubeAlong(stations, F.seg)];
    parts.push(lathe([[0, 0], [0.3, 0.05], [0.33, 0.16], [0.21, 0.3], [0.1, 0.4], [0, 0.5]], 12).translate(F.x, rest + 1.12 + F.prop, -9.6));
    const armY = rest + 0.62;
    parts.push(tubeAlong([
      [-6.3, F.x + 1.1, armY, 0.1, 0.1],
      [-6.1, F.x + 1.14, armY, 0.4, 0.42],
      [-8.4, F.x + 1.26, armY + 0.08, 0.42, 0.44],
      [-9.3, F.x + 1.14, armY + 0.44, 0.44, 0.46],
      [-9.8, F.x + 0.96, armY + 0.76, 0.4, 0.42],
      [-10, F.x + 0.9, armY + 0.92, 0.1, 0.1]
    ], 12));
    parts.push(boxAt(F.x, rest + 0.9, 11.55, 1.62, 1.8, 0.44));
    for (let i = 0; i < 5; i++) {
      parts.push(boxAt(F.x - 0.62 + i * 0.31, rest + 1.62, 11.62, 0.2, 0.14, 0.36));
    }
    add("figure", "Reclining Buddha figure", mergeGeos(parts), "gold");
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createRecliningBuddhaHallModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUmVjbGluaW5nIEJ1ZGRoYSBIYWxsIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTAuMDAgeCAyOC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJyZWNsaW5pbmctYnVkZGhhLWhhbGxcIixcbiAgICBcIm5hbWVcIjogXCJSZWNsaW5pbmcgQnVkZGhhIEhhbGxcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJSZWNsaW5pbmdCdWRkaGFIYWxsXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDE0LjAwIHggMTAuMDAgeCAyOC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0b25lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE4Mzk2NDMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTk4NDg0MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTEwMjU1OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiYmFuZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzMDE3MjA0LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjc2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ29sZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzAyNzIxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjE1LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJwaXRjaFwiOiAwLjY0LFxuICAgICAgXCJwbGF0Zm9ybVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAtNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIC0xNCxcbiAgICAgICAgICAxNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTYuNTUsXG4gICAgICAgICAgNi41NSxcbiAgICAgICAgICAtMTMuNTUsXG4gICAgICAgICAgMTMuNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMS4zNSxcbiAgICAgICAgICAtNi41NSxcbiAgICAgICAgICA2LjU1LFxuICAgICAgICAgIC0xMy41NSxcbiAgICAgICAgICAxMy41NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4zNSxcbiAgICAgICAgICAxLjc1LFxuICAgICAgICAgIC02LjEsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIC0xMy4xLFxuICAgICAgICAgIDEzLjFcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwicGxpbnRoXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjc1LFxuICAgICAgICBcInkxXCI6IDIuNjIsXG4gICAgICAgIFwieDBcIjogLTUuMixcbiAgICAgICAgXCJ4MVwiOiAxLjYsXG4gICAgICAgIFwiaHpcIjogMTEuNlxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJod1wiOiAwLjMxLFxuICAgICAgICBcInkwXCI6IDEuNzUsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImZyb250WFwiOiAyLjEsXG4gICAgICAgIFwiZnJvbnRDb3VudFwiOiA4LFxuICAgICAgICBcImZyb250SGFsZlpcIjogMTIuMixcbiAgICAgICAgXCJlbmRaXCI6IDEyLjIsXG4gICAgICAgIFwiZW5kWFwiOiBbXG4gICAgICAgICAgLTQuMixcbiAgICAgICAgICAtMS4wNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYWNrV2FsbFwiOiB7XG4gICAgICAgIFwieDBcIjogLTYuMSxcbiAgICAgICAgXCJ4MVwiOiAtNS4yLFxuICAgICAgICBcInkwXCI6IDEuNzUsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImh6XCI6IDEzLjFcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDYuNixcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgNS4xNSxcbiAgICAgICAgICAxMy44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgOS43OCxcbiAgICAgICAgICAzLjQsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwicm9vZkNlbnRyZVhcIjogLTEuNzIsXG4gICAgICBcImJhbmRcIjogMC4zNCxcbiAgICAgIFwiZmlndXJlXCI6IHtcbiAgICAgICAgXCJ4XCI6IC0xLjgsXG4gICAgICAgIFwicmVzdFwiOiAyLjYyLFxuICAgICAgICBcInNlZ1wiOiAxOCxcbiAgICAgICAgXCJwcm9wXCI6IDEuMVxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIHJldHVybiBbY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgel07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSArIDEsIGopLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGksIGogKyAxKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVJlY2xpbmluZ0J1ZGRoYUhhbGxNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1JlY2xpbmluZyBCdWRkaGEgSGFsbCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYXRmb3JtIGFuZCBzdGF0dWUgcGxpbnRoXG4gICAqIEZvdXIgc3RlcHBlZCBzbGFicyBhbmQgdGhlIGZpZ3VyZSdzIG93biBsb3cgcGxpbnRoLCBhbGwgdGhlIHNhbWUgcGFsZSBzdG9uZSBhbmQgdGhlcmVmb3JlIE9ORVxuICAgKiBjb21wb25lbnQgYW5kIE9ORSBkcmF3IGNhbGwuIFRoZSB0aGlyZCBhbmQgZm91cnRoIHNsYWJzIGFyZSB0aGUgcGxhdGUncyBmb3J3YXJkIGFwcm9uOiB0aGVcbiAgICogZGVjayBzdGVwcyBkb3duIGFuZCBPVVQgb24gK1gsIHdoaWNoIGV4cHJlc3NlcyB0aGUgcHJvamVjdGluZyB0ZXJyYWNlIHdpdGhvdXQgYSBzZWNvbmRcbiAgICogY29tcG9uZW50IG9yIGEgbm90Y2hlZCBwbGFuLiAqL1xuICB7XG4gICAgY29uc3QgUCA9IEcucGxhdGZvcm0gYXMgbnVtYmVyW11bXSwgUEwgPSBHLnBsaW50aDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFAubWFwKChbeTAsIHkxLCB4MCwgeDEsIHowLCB6MV0pID0+XG4gICAgICBib3hBdCgoeDAgKyB4MSkgLyAyLCAoeTAgKyB5MSkgLyAyLCAoejAgKyB6MSkgLyAyLCB4MSAtIHgwLCB5MSAtIHkwLCB6MSAtIHowKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgoUEwueDAgKyBQTC54MSkgLyAyLCAoUEwueTAgKyBQTC55MSkgLyAyLCAwLFxuICAgICAgUEwueDEgLSBQTC54MCwgUEwueTEgLSBQTC55MCwgUEwuaHogKiAyKSk7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICAvLyBUaGUgcGxhdGUncyBwbGF0Zm9ybSBpcyBzdHJlYWtlZCBibGFjayBhbG9uZyBpdHMgbG93ZXIgY291cnNlcyBhbmQgY2xlYW4gYWJvdmUgLS0gdGhlIHVzdWFsXG4gICAgLy8gZGlyZWN0aW9uIGZvciB0aGlzIGtpdCwgYW5kIHRoZSBvcHBvc2l0ZSBvZiB0aGUgbW9zcXVlJ3MgcmFpbiB3YXNoLlxuICAgIHRpbnRCeUhlaWdodChnZW8sIDAsIDEuNzUsIFswLjc2LCAwLjc3LCAwLjc1XSk7XG4gICAgYWRkKCdwbGF0Zm9ybScsICdTdG9uZSBwbGF0Zm9ybSBhbmQgc3RhdHVlIHBsaW50aCcsIGdlbywgJ3N0b25lJyk7XG4gICAgY29sbGlkZXJzWydwbGF0Zm9ybSddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDUuMCwgMF0sIGhhbGZFeHRlbnRzOiBbNy4wLCA1LjAsIDE0LjBdLFxuICAgICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlOyBhIGxldmVsICdcbiAgICAgICAgICAgKyAnYnVpbGRlciBjb2xsaWRlcyB3aXRoIHRoZSBoYWxsLCBub3Qgd2l0aCB0aGUgZmlndXJlIGluc2lkZSBpdC4nLFxuICAgIH07XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhY2sgd2FsbFxuICAgKiBUaGUgb25lIGNsb3NlZCBlbGV2YXRpb24uIFNvbGlkLCBiZWNhdXNlIHRoZSBoYWxsIGlzIGFuIGV4dGVyaW9yIHNoZWxsIGFuZCBhbiBpbnRlcmlvciB3b3VsZFxuICAgKiBjb3N0IGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcyAtLSBidXQgdGhpcyBwcm9wIGlzIHRoZSBvbmVcbiAgICogY2FzZSBpbiB0aGUgYmF0Y2ggd2hlcmUgdGhlIGluc2lkZSBvZiBhIHdhbGwgSVMgc2Vlbiwgc3RyYWlnaHQgdGhyb3VnaCB0aGUgb3BlbiBjb2xvbm5hZGUsXG4gICAqIHNvIGl0cyBpbm5lciBmYWNlIGdldHMgYSBkYXJrIGNvbXBvbmVudCBvZiBpdHMgb3duIHJhdGhlciB0aGFuIGJlaW5nIGxlZnQgYXMgd2hpdGUgcmVuZGVyLiAqL1xuICB7XG4gICAgY29uc3QgVyA9IEcuYmFja1dhbGw7XG4gICAgYWRkKCdiYWNrLXdhbGwnLCAnQmFjayB3YWxsJywgYm94QXQoKFcueDAgKyBXLngxKSAvIDIsIChXLnkwICsgVy55MSkgLyAyLCAwLFxuICAgICAgVy54MSAtIFcueDAsIFcueTEgLSBXLnkwLCBXLmh6ICogMiksICdzdG9uZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBpbnRlcmlvciBzaGFkZVxuICAgKiBUaGUgZGFyayB0aGUgY29sb25uYWRlIGxvb2tzIGludG86IHRoZSBiYWNrIHdhbGwncyBpbm5lciBmYWNlIGFuZCB0aGUgc29mZml0IGFib3ZlIHRoZSBmaWd1cmUuXG4gICAqIEJvdGggc3RhbmQgUFJPVUQgb2YgdGhlIHN1cmZhY2VzIHRoZXkgc2l0IG9uLCBub3QgcmVjZXNzZWQgaW50byB0aGVtIC0tIHRob3NlIHN1cmZhY2VzIGFyZVxuICAgKiBzb2xpZCBtYXNzZXMsIHNvIGEgcGFuZWwgc3VuayBpbnRvIG9uZSBpcyBpbnNpZGUgdGhlIHNvbGlkIGFuZCBpbnZpc2libGUuICovXG4gIHtcbiAgICBjb25zdCBXID0gRy5iYWNrV2FsbCwgQyA9IEcuY29sdW1uO1xuICAgIGFkZCgnc2hhZGUnLCAnSW50ZXJpb3Igc2hhZGUnLCBtZXJnZUdlb3MoW1xuICAgICAgLy8gVG9wIGF0IDYuNTQgcmF0aGVyIHRoYW4gNi42MC4gSXQgd2FzIHRoZSBXQUxMIHBhbmVsLCBub3QgdGhlIHNvZmZpdCwgdGhhdCBzaGFyZWQgdGhlXG4gICAgICAvLyBjb2x1bW4gaGVhZHMnIHBsYW5lIC0tIHR3ZWx2ZSBwYWlycywgb25lIHBlciBpbnN0YW5jZSAtLSBhbmQgbW92aW5nIHRoZSBzb2ZmaXQgZmlyc3QgZml4ZWRcbiAgICAgIC8vIG5vdGhpbmcsIGJlY2F1c2UgYm90aCBib3hlcyByZWFjaGVkIHRoZSBzYW1lIGhlaWdodCBmb3IgZGlmZmVyZW50IHJlYXNvbnMuXG4gICAgICBib3hBdChXLngxICsgMC4wNCwgKFcueTAgKyBXLnkxKSAvIDIgKyAwLjE0LCAwLCAwLjA4LCBXLnkxIC0gVy55MCAtIDAuNDAsIFcuaHogKiAyIC0gMC42MCksXG4gICAgICAvLyBUaGUgc29mZml0J3MgdG9wIHNpdHMgYXQgNi41NCwgbm90IGxldmVsIHdpdGggdGhlIGNvbHVtbiBoZWFkcyBhdCA2LjYwOiBsZXZlbCwgaXRzIHRvcFxuICAgICAgLy8gZmFjZSBhbmQgZXZlcnkgY29sdW1uJ3MgdG9wIGZhY2UgYXJlIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgLS0gdHdlbHZlIHBhaXJzIGF0XG4gICAgICAvLyBvbmNlLCBhbmQgdGhlIGNvbHVtbnMgYXJlIGFuIEluc3RhbmNlZE1lc2ggc28gZWFjaCBpbnN0YW5jZSBpcyBjaGVja2VkIHNlcGFyYXRlbHkuXG4gICAgICBib3hBdCgoVy54MSArIEMuZnJvbnRYKSAvIDIsIEMueTEgLSAwLjE1LCAwLCBDLmZyb250WCAtIFcueDEgLSAwLjQwLCAwLjEwLCBXLmh6ICogMiAtIDAuNjApLFxuICAgIF0pLCAnZGFyaycpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb2xvbm5hZGVcbiAgICogVHdlbHZlIHNxdWFyZSBjb2x1bW5zIGFzIE9ORSBJbnN0YW5jZWRNZXNoIC0tIGVpZ2h0IGFsb25nIHRoZSBvcGVuIGZyb250IGFuZCB0d28gYXQgZWFjaCBlbmQuXG4gICAqIFRoZSByZWdpc3RyeSBub3RlcyByZXF1aXJlIHRoZSBsb25nIGZyb250IHRvIGJlIGFuIG9wZW4gY29sb25uYWRlIHJhdGhlciB0aGFuIGEgd2FsbCwgYmVjYXVzZVxuICAgKiBhIGNsb3NlZCBsb25nIGxvdyBib3ggaGFzIG5vIHJlY29nbmlzYWJsZSBmZWF0dXJlIGF0IGFsbCBhbmQgcmVhZHMgYXMgYSB3YXJlaG91c2UuICovXG4gIHtcbiAgICBjb25zdCBDID0gRy5jb2x1bW47XG4gICAgY29uc3QgaCA9IEMueTEgLSBDLnkwO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoMCwgMCwgMCwgQy5odyAqIDIsIGgsIEMuaHcgKiAyKSxcbiAgICAgIC8vIEEgY2FwaXRhbCBibG9jayBhdCB0aGUgaGVhZCwgc3VuayBpbnRvIHRoZSBzaGFmdCBzbyBubyB0d28gdG9wIGZhY2VzIHNoYXJlIGEgcGxhbmUuXG4gICAgICBib3hBdCgwLCBoIC8gMiAtIDAuMTUsIDAsIEMuaHcgKiAyLjM1LCAwLjMwLCBDLmh3ICogMi4zNSksXG4gICAgXSk7XG4gICAgY29uc3QgY3kgPSAoQy55MCArIEMueTEpIC8gMjtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEMuZnJvbnRDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB6ID0gLUMuZnJvbnRIYWxmWiArICgyICogQy5mcm9udEhhbGZaICogaSkgLyAoQy5mcm9udENvdW50IC0gMSk7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbihDLmZyb250WCwgY3ksIHopKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCB4IG9mIEMuZW5kWCBhcyBudW1iZXJbXSkge1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgY3ksIC1DLmVuZFopKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIGN5LCBDLmVuZFopKTtcbiAgICB9XG4gICAgYWRkSW5zdCgnY29sdW1ucycsICdDb2xvbm5hZGUnLCB1bml0LCAnc3RvbmUnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcm9vZlxuICAgKiBUd28gc2hhbGxvdyB0aWVycywgZWFjaCBhIHRydW5jYXRlZCBnYWJsZSBjcm9zcy1zZWN0aW9uIGV4dHJ1ZGVkIGFsb25nIHRoZSBoYWxsJ3MgbGVuZ3RoLiBUaGVcbiAgICogcGl0Y2ggaXMgMC42NCAtLSBhYm91dCAzMyBkZWdyZWVzIC0tIHdoaWNoIGlzIGRlbGliZXJhdGVseSBOT1QgdGhlIHVib3NvdCdzIDQ2OiB0aGlzIGlzIGEgbG9uZ1xuICAgKiBsb3cgaGFsbCBhbmQgaXRzIHJvb2YgaXMgc2hhbGxvdywgYW5kIGJ1aWxkaW5nIGl0IHN0ZWVwIHdvdWxkIGhhdmUgbWFkZSBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAgICpcbiAgICogVGhlIHJvb2YgaXMgY2VudHJlZCBhdCB4PS0xLjcyLCBub3QgYXQgdGhlIG9yaWdpbjogdGhlIGhhbGwgc2l0cyBhdCB0aGUgLVggc2lkZSBvZiB0aGVcbiAgICogcGxhdGZvcm0gYW5kIHRoZSBhcHJvbiB0YWtlcyB0aGUgcmVzdCwgc28gYSByb29mIGNlbnRyZWQgb24gdGhlIHByb3Agd291bGQgb3ZlcmhhbmcgdGhlIHdyb25nXG4gICAqIHNpZGUgYW5kIG1pc3MgdGhlIGNvbG9ubmFkZSBlbnRpcmVseS4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzIGFzIG51bWJlcltdW10sIEIgPSBHLmJhbmQsIGN4ID0gRy5yb29mQ2VudHJlWDtcbiAgICBjb25zdCByZWQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBnb2xkOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBbeTAsIHkxLCBoeCwgaHpdIG9mIFQpIHtcbiAgICAgIGNvbnN0IHlTcGxpdCA9IHkwICsgQjtcbiAgICAgIGNvbnN0IGcxID0gZXh0cnVkZUFsb25nWih0aWVyUHJvZmlsZShoeCwgeTAsIHlTcGxpdCwgRy5waXRjaCksIC1oeiwgaHopO1xuICAgICAgZzEudHJhbnNsYXRlKGN4LCAwLCAwKTtcbiAgICAgIGdvbGQucHVzaChnMSk7XG4gICAgICBjb25zdCBnMiA9IGV4dHJ1ZGVBbG9uZ1oodGllclByb2ZpbGUoaHggLSBCIC8gRy5waXRjaCwgeVNwbGl0LCB5MSwgRy5waXRjaCksIC1oeiArIDAuMDEsIGh6IC0gMC4wMSk7XG4gICAgICBnMi50cmFuc2xhdGUoY3gsIDAsIDApO1xuICAgICAgcmVkLnB1c2goZzIpO1xuICAgIH1cbiAgICBhZGQoJ3Jvb2YtdGlsZScsICdUaWxlIHJvb2YgZmllbGRzJywgbWVyZ2VHZW9zKHJlZCksICd0aWxlJyk7XG4gICAgYWRkKCdyb29mLWJhbmQnLCAnR29sZCBlYXZlcyBiYW5kcycsIG1lcmdlR2Vvcyhnb2xkKSwgJ2JhbmQnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFyZ2Vib2FyZHNcbiAgICogV2hpdGUgYm9hcmRzIHVwIGVhY2ggZ2FibGUgcmFrZSwgYW5kIGEgcGxhaW4gZmFzY2lhIGFsb25nIGVhY2ggZWF2ZXMuIEVhY2ggYm9hcmQgaXMgYSBib3hcbiAgICogUk9UQVRFRCB0byB0aGUgcmFrZSBhbmdsZSByYXRoZXIgdGhhbiBhIHN0YWlyIG9mIHNtYWxsIGJveGVzOiBldmVuIGF0IDMzIGRlZ3JlZXMgYSBzdGVwcGVkXG4gICAqIGFwcHJveGltYXRpb24gcmVhZHMgYXMgc2VycmF0aW9uLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudGllcnMgYXMgbnVtYmVyW11bXSwgY3ggPSBHLnJvb2ZDZW50cmVYO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBbeTAsIHkxLCBoeCwgaHpdIG9mIFQpIHtcbiAgICAgIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gRy5waXRjaDtcbiAgICAgIGNvbnN0IGhhbGZUb3AgPSBNYXRoLm1heChoeCAtIGluc2V0LCAwKTtcbiAgICAgIGNvbnN0IHJ1biA9IGh4IC0gaGFsZlRvcCwgcmlzZSA9IHkxIC0geTA7XG4gICAgICBjb25zdCBsZW4gPSBNYXRoLmh5cG90KHJ1biwgcmlzZSkgKyAwLjEwO1xuICAgICAgLy8gVGhlIHJha2UgYW5nbGUgaXMgYXRhbjIoUlVOLCBSSVNFKSwgbm90IGF0YW4ocGl0Y2gpLiByb3RhdGVaIG1hcHMgdGhlIGJveCdzICtZIHRvXG4gICAgICAvLyAoLXNpbiwgY29zKSwgc28gYWltaW5nIGl0IGFsb25nICgtcnVuLCByaXNlKSBuZWVkcyBzaW4gPSBydW4vbGVuIC0tIHdoaWNoIGlzIHRoZVxuICAgICAgLy8gY29tcGxlbWVudCBvZiB0aGUgcGl0Y2ggYW5nbGUsIG5vdCB0aGUgcGl0Y2ggYW5nbGUgaXRzZWxmLiBBdCB0aGUgdWJvc290J3MgNDYgZGVncmVlcyB0aGVcbiAgICAgIC8vIHR3byBhcmUgdGhyZWUgZGVncmVlcyBhcGFydCBhbmQgdGhlIGVycm9yIGlzIGludmlzaWJsZTsgYXQgdGhpcyBoYWxsJ3MgMzMgZGVncmVlcyB0aGV5IGFyZVxuICAgICAgLy8gdHdlbnR5LWZvdXIgZGVncmVlcyBhcGFydCBhbmQgdGhlIGJhcmdlYm9hcmRzIHN0b29kIG9mZiB0aGUgcm9vZiBsaWtlIHNjYWZmb2xkaW5nLlxuICAgICAgY29uc3QgYW5nID0gTWF0aC5hdGFuMihydW4sIHJpc2UpO1xuICAgICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgIGZvciAoY29uc3QgeHMgb2YgWy0xLCAxXSkge1xuICAgICAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC4yMiwgbGVuLCAwLjI0KTtcbiAgICAgICAgICBnLnJvdGF0ZVooeHMgKiBhbmcpO1xuICAgICAgICAgIGcudHJhbnNsYXRlKGN4ICsgeHMgKiAoaHggKyBoYWxmVG9wKSAvIDIsICh5MCArIHkxKSAvIDIsIHpzICogKGh6ICsgMC4wNikpO1xuICAgICAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAoY29uc3QgeHMgb2YgWy0xLCAxXSkge1xuICAgICAgICBwYXJ0cy5wdXNoKGJveEF0KGN4ICsgeHMgKiAoaHggKyAwLjA3KSwgeTAgKyAwLjA5LCAwLCAwLjE0LCAwLjI2LCBoeiAqIDIgKyAwLjI2KSk7XG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHRvcCA9IFRbVC5sZW5ndGggLSAxXTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KGN4LCB0b3BbMF0gKyB0b3BbMl0gKiBHLnBpdGNoICsgMC4wNSwgMCwgMC4zMCwgMC4yMiwgdG9wWzNdICogMiArIDAuMzYpKTtcbiAgICBhZGQoJ2JhcmdlLWJvYXJkcycsICdCYXJnZWJvYXJkcyBhbmQgcmlkZ2UnLCBtZXJnZUdlb3MocGFydHMpLCAnc3RvbmUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIHJlY2xpbmluZyBmaWd1cmVcbiAgICogVGhlIGlkZW50aXR5IG9mIHRoZSB3aG9sZSBhc3NldCwgYW5kIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUga2l0LiBJdCBpcyBvbmUgdGFwZXJpbmcgdHViZVxuICAgKiBvZiBlaWdodGVlbiBzdGF0aW9ucyAtLSBoZWFkLCBuZWNrLCBzaG91bGRlciwgY2hlc3QsIHdhaXN0LCBoaXAsIHRoaWdoLCBjYWxmLCBhbmtsZSAtLSBiZWNhdXNlXG4gICAqIGEgcmVjbGluaW5nIGJvZHkgaXMgYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQsIGFuZCBhIGJveFxuICAgKiBkZWNvbXBvc2l0aW9uIG9mIHRoYXQgaXMgbm90IGEgbG93LXBvbHkgYm9keSBidXQgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gICAqXG4gICAqIEV2ZXJ5IHN0YXRpb24ncyBjZW50cmUgaGVpZ2h0IGlzIGRlcml2ZWQgZnJvbSBpdHMgb3duIHJhZGl1cyBzbyB0aGUgYm9keSBSRVNUUyBvbiB0aGUgcGxpbnRoXG4gICAqIHJhdGhlciB0aGFuIGludGVyc2VjdGluZyBpdCBvciBmbG9hdGluZyBvdmVyIGl0OiBjeSA9IHBsaW50aCB0b3AgKyByeSwgY29tcHV0ZWQgcmF0aGVyIHRoYW5cbiAgICogYXV0aG9yZWQsIHdoaWNoIGlzIHRoZSBvbmx5IHdheSBhIHZhcnlpbmcgc2VjdGlvbiBjYW4gc2l0IG9uIGEgZmxhdCBzdXJmYWNlIGF0IGV2ZXJ5IHBvaW50LiAqL1xuICB7XG4gICAgY29uc3QgRiA9IEcuZmlndXJlLCBQTCA9IEcucGxpbnRoO1xuICAgIGNvbnN0IHJlc3QgPSBQTC55MTtcbiAgICAvLyBbeiwgcmFkaXVzWCwgcmFkaXVzWSwgbGlmdF0gLS0gbGlmdCByYWlzZXMgdGhlIGhlYWQgYW5kIG5lY2ssIHdoaWNoIGFyZSBwcm9wcGVkIG9uIHRoZSBhcm0uXG4gICAgY29uc3Qgc3BpbmU6IG51bWJlcltdW10gPSBbXG4gICAgICBbLTExLjIwLCAwLjA4LCAwLjA4LCBGLnByb3BdLFxuICAgICAgWy0xMC44MCwgMC42NCwgMC43NCwgRi5wcm9wXSxcbiAgICAgIFstMTAuMTAsIDAuOTQsIDEuMDgsIEYucHJvcF0sXG4gICAgICBbLTkuMzAsIDAuOTgsIDEuMTIsIEYucHJvcF0sXG4gICAgICBbLTguNjAsIDAuNzYsIDAuOTAsIEYucHJvcCAqIDAuODBdLFxuICAgICAgWy04LjA1LCAwLjY4LCAwLjgwLCBGLnByb3AgKiAwLjU1XSxcbiAgICAgIFstNy4zMCwgMS4wOCwgMS4yNCwgRi5wcm9wICogMC4yMl0sXG4gICAgICBbLTYuMjAsIDEuMjQsIDEuNDIsIDAuMDRdLFxuICAgICAgWy0zLjYwLCAxLjMwLCAxLjQ2LCAwLjBdLFxuICAgICAgWy0wLjgwLCAxLjI0LCAxLjM2LCAwLjBdLFxuICAgICAgWzIuMDAsIDEuMjgsIDEuMzgsIDAuMF0sXG4gICAgICBbNC40MCwgMS4yMCwgMS4yOCwgMC4wXSxcbiAgICAgIFs2LjYwLCAxLjA0LCAxLjEyLCAwLjBdLFxuICAgICAgWzguNjAsIDAuOTAsIDAuOTgsIDAuMF0sXG4gICAgICBbMTAuMDAsIDAuODIsIDAuOTAsIDAuMF0sXG4gICAgICBbMTAuOTAsIDAuODAsIDAuODgsIDAuMF0sXG4gICAgICBbMTEuMzAsIDAuNzgsIDAuODYsIDAuMF0sXG4gICAgICBbMTEuMzYsIDAuMDYsIDAuMDYsIDAuMF0sXG4gICAgXTtcbiAgICBjb25zdCBzdGF0aW9ucyA9IHNwaW5lLm1hcCgoW3osIHJ4LCByeSwgbGlmdF0pID0+IFt6LCBGLngsIHJlc3QgKyByeSArIGxpZnQsIHJ4LCByeV0pO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW3R1YmVBbG9uZyhzdGF0aW9ucywgRi5zZWcpXTtcblxuICAgIC8vIFRoZSB1c2huaXNoYSAtLSB0aGUgZmxhbWUtdG9wcGVkIGNyYW5pYWwgYnVtcCB0aGF0IGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyBmZWF0dXJlIG9mXG4gICAgLy8gYSBCdWRkaGEgZmlndXJlIGF0IGFueSBkaXN0YW5jZS4gV2l0aG91dCBpdCB0aGUgaGVhZCBpcyBhIGhlYWQuXG4gICAgLy8gU2l6ZWQgYW5kIHNpdGVkIHNvIGl0cyB0aXAgY2xlYXJzIHRoZSBzb2ZmaXQgYXQgNi41MSBtOiB0aGUgaGVhZCdzIG93biBjcm93biBpcyBhbHJlYWR5IGF0XG4gICAgLy8gNS44Niwgc28gdGhlIGJ1bXAgZ2V0cyAwLjUwIG0gYW5kIG5vdCB0aGUgMC43MCBpdCB3YW50cy5cbiAgICBwYXJ0cy5wdXNoKGxhdGhlKFtbMCwgMF0sIFswLjMwLCAwLjA1XSwgWzAuMzMsIDAuMTZdLCBbMC4yMSwgMC4zMF0sIFswLjEwLCAwLjQwXSwgWzAsIDAuNTBdXSwgMTIpXG4gICAgICAudHJhbnNsYXRlKEYueCwgcmVzdCArIDEuMTIgKyBGLnByb3AsIC05LjYwKSk7XG5cbiAgICAvLyBUaGUgc3VwcG9ydGluZyBhcm06IGEgdHViZSBydW5uaW5nIGFsb25nIHRoZSBmcm9udCBvZiB0aGUgYm9keSBmcm9tIHRoZSBzaG91bGRlciB0byB0aGUgaGVhZCxcbiAgICAvLyB3aXRoIHRoZSBoYW5kIHVuZGVyIHRoZSBjaGVlay4gVHdvIHN0YXRpb25zIHNob3J0IG9mIGEgZnVsbCBsaW1iLCB3aGljaCBpcyB3aGF0IHJlYWRzIGF0XG4gICAgLy8gcHJvcCBkaXN0YW5jZSB0aHJvdWdoIGEgY29sb25uYWRlLlxuICAgIGNvbnN0IGFybVkgPSByZXN0ICsgMC42MjtcbiAgICBwYXJ0cy5wdXNoKHR1YmVBbG9uZyhbXG4gICAgICBbLTYuMzAsIEYueCArIDEuMTAsIGFybVksIDAuMTAsIDAuMTBdLFxuICAgICAgWy02LjEwLCBGLnggKyAxLjE0LCBhcm1ZLCAwLjQwLCAwLjQyXSxcbiAgICAgIFstOC40MCwgRi54ICsgMS4yNiwgYXJtWSArIDAuMDgsIDAuNDIsIDAuNDRdLFxuICAgICAgWy05LjMwLCBGLnggKyAxLjE0LCBhcm1ZICsgMC40NCwgMC40NCwgMC40Nl0sXG4gICAgICBbLTkuODAsIEYueCArIDAuOTYsIGFybVkgKyAwLjc2LCAwLjQwLCAwLjQyXSxcbiAgICAgIFstMTAuMDAsIEYueCArIDAuOTAsIGFybVkgKyAwLjkyLCAwLjEwLCAwLjEwXSxcbiAgICBdLCAxMikpO1xuXG4gICAgLy8gVGhlIGZlZXQ6IHN0YWNrZWQgYW5kIHNxdWFyZWQgb2ZmLCB3aXRoIHRoZSBzb2xlcyB0dXJuZWQgdG8gZmFjZSBkb3duIHRoZSBsZW5ndGggb2YgdGhlIGhhbGwuXG4gICAgLy8gT24gYSByZWNsaW5pbmcgQnVkZGhhIHRoZSBzb2xlcyBhcmUgYSBmZWF0dXJlIGluIHRoZWlyIG93biByaWdodCAtLSB0aGV5IGNhcnJ5IHRoZSAxMDhcbiAgICAvLyBhdXNwaWNpb3VzIG1hcmtzIC0tIHNvIHRoZXkgYXJlIGEgZmxhdCBwbGF0ZSByYXRoZXIgdGhhbiBhIHJvdW5kZWQgZW5kLCBhbmQgdGhlIHRvZSBsaW5lIGlzXG4gICAgLy8gcmVhbCBnZW9tZXRyeS5cbiAgICBwYXJ0cy5wdXNoKGJveEF0KEYueCwgcmVzdCArIDAuOTAsIDExLjU1LCAxLjYyLCAxLjgwLCAwLjQ0KSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoRi54IC0gMC42MiArIGkgKiAwLjMxLCByZXN0ICsgMS42MiwgMTEuNjIsIDAuMjAsIDAuMTQsIDAuMzYpKTtcbiAgICB9XG4gICAgYWRkKCdmaWd1cmUnLCAnUmVjbGluaW5nIEJ1ZGRoYSBmaWd1cmUnLCBtZXJnZUdlb3MocGFydHMpLCAnZ29sZCcpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUmVjbGluaW5nQnVkZGhhSGFsbE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJu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
