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

// scratch/ubosot/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createUbosotModel: () => createUbosotModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "ubosot",
  "name": "Ubosot",
  "exportName": "Ubosot",
  "envelope": "Envelope 12.00 x 12.00 x 24.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "stone",
      "color": 12428954,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "red",
      "color": 7418666,
      "roughness": 0.8,
      "metalness": 0
    },
    {
      "id": "tile",
      "color": 12814946,
      "roughness": 0.78,
      "metalness": 0
    },
    {
      "id": "green",
      "color": 7236168,
      "roughness": 0.76,
      "metalness": 0
    },
    {
      "id": "gilt",
      "color": 9071698,
      "roughness": 0.36,
      "metalness": 0.3,
      "envMapIntensity": 1.2
    },
    {
      "id": "dark",
      "color": 5522747,
      "roughness": 0.96,
      "metalness": 0
    }
  ],
  "geometry": {
    "pitch": 1.056,
    "platform": [
      [
        0,
        0.55,
        6,
        12
      ],
      [
        0.55,
        1.1,
        5.72,
        11.72
      ],
      [
        1.1,
        1.75,
        5.46,
        11.46
      ]
    ],
    "notch": {
      "halfX": 1.9,
      "zInner": 9.6
    },
    "stair": {
      "steps": 5,
      "z0": 9.6,
      "z1": 12,
      "top": 1.75,
      "treadHalfX": 1.6
    },
    "column": {
      "hw": 0.26,
      "y0": 1.75,
      "y1": 6.1,
      "insetX": 4.86,
      "insetZ": 10.4,
      "longCount": 9,
      "shortCount": 3
    },
    "wall": {
      "y0": 1.75,
      "y1": 6.3,
      "hx": 3.6,
      "hz": 9.6
    },
    "door": {
      "w": 2.2,
      "h": 3.6,
      "y": 1.75,
      "z": 9.6
    },
    "tiers": [
      [
        6.1,
        7.45,
        5.45,
        11.55
      ],
      [
        7.45,
        8.65,
        3.95,
        9
      ],
      [
        8.65,
        11.4,
        2.7,
        6.6
      ]
    ],
    "band": 0.42,
    "sema": {
      "count": 8,
      "h": 1.05
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
function extrudeSlab(shape, y0, y1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}
function notchedRect(hx, hz, nx, zInner) {
  const pts = [[hx, -hz], [hx, hz], [nx, hz], [nx, zInner], [-nx, zInner], [-nx, hz], [-hx, hz], [-hx, -hz]];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
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
function createUbosotModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Ubosot";
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
    const N = G.notch, ST = G.stair;
    const parts = G.platform.map(
      ([y0, y1, hx, hz]) => extrudeSlab(notchedRect(hx, hz, N.halfX, N.zInner), y0, y1)
    );
    const run = (ST.z1 - ST.z0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const z1 = ST.z1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(0, h / 2, z1 - run / 2, ST.treadHalfX * 2, h, run));
    }
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 1.75, [0.8, 0.81, 0.79]);
    add("platform", "Stone platform and stair", geo, "stone");
    colliders["platform"] = {
      shape: "box",
      localCenter: [0, 6, 0],
      halfExtents: [6, 6, 12],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the hall, not with its individual columns.'
    };
  }
  {
    const W = G.wall;
    add(
      "wall",
      "Hall wall body",
      boxAt(0, (W.y0 + W.y1) / 2, 0, W.hx * 2, W.y1 - W.y0, W.hz * 2),
      "stone"
    );
  }
  {
    const D = G.door;
    add("doorway", "Doorway", boxAt(0, D.y + D.h / 2, D.z + 0.03, D.w, D.h, 0.06), "dark");
  }
  {
    const C = G.column;
    const unit = mergeGeos([
      boxAt(0, 0, 0, C.hw * 2, C.y1 - C.y0, C.hw * 2),
      // A slightly wider capital block at the head, where the plate shows the column meeting the
      // eaves beam. Sunk 0.02 m into the shaft so no two top faces share a plane.
      boxAt(0, (C.y1 - C.y0) / 2 - 0.13, 0, C.hw * 2.4, 0.26, C.hw * 2.4)
    ]);
    const cy = (C.y0 + C.y1) / 2;
    const mats = [];
    for (let i = 0; i < C.longCount; i++) {
      const z = -C.insetZ + 2 * C.insetZ * i / (C.longCount - 1);
      mats.push(new THREE.Matrix4().setPosition(-C.insetX, cy, z));
      mats.push(new THREE.Matrix4().setPosition(C.insetX, cy, z));
    }
    for (let i = 1; i <= C.shortCount; i++) {
      const x = -C.insetX + 2 * C.insetX * i / (C.shortCount + 1);
      mats.push(new THREE.Matrix4().setPosition(x, cy, -C.insetZ));
      mats.push(new THREE.Matrix4().setPosition(x, cy, C.insetZ));
    }
    addInst("columns", "Peristyle columns", unit, "red", mats);
  }
  {
    const T = G.tiers, B = G.band;
    const orange = [];
    const green = [];
    for (const [y0, y1, hx, hz] of T) {
      const ySplit = y0 + B;
      green.push(extrudeAlongZ(tierProfile(hx, y0, ySplit, G.pitch), -hz, hz));
      orange.push(extrudeAlongZ(tierProfile(hx - B / G.pitch, ySplit, y1, G.pitch), -hz + 0.01, hz - 0.01));
    }
    add("roof-tile", "Tile roof fields", mergeGeos(orange), "tile");
    add("roof-band", "Green eaves bands", mergeGeos(green), "green");
  }
  {
    const T = G.tiers;
    const white = [];
    const red = [];
    for (const [y0, y1, hx, hz] of T) {
      const inset = (y1 - y0) / G.pitch;
      const halfTop = Math.max(hx - inset, 0);
      const run = hx - halfTop, rise = y1 - y0;
      const len = Math.hypot(run, rise) + 0.1;
      const ang = Math.atan2(run, rise);
      for (const zs of [-1, 1]) {
        for (const xs of [-1, 1]) {
          const g = new THREE.BoxGeometry(0.2, len, 0.3);
          g.rotateZ(xs * ang);
          g.translate(xs * (hx + halfTop) / 2, (y0 + y1) / 2, zs * (hz + 0.14));
          white.push(g);
        }
        for (const xs of [-1, 1]) {
          const g = new THREE.BoxGeometry(0.12, len, 0.14);
          g.rotateZ(xs * ang);
          g.translate(xs * (hx + halfTop) / 2, (y0 + y1) / 2, zs * (hz + 0.34));
          red.push(g);
        }
      }
      for (const xs of [-1, 1]) {
        red.push(boxAt(xs * (hx + 0.08), y0 + 0.1, 0, 0.16, 0.3, hz * 2 + 0.3));
      }
    }
    const top = T[T.length - 1];
    red.push(boxAt(0, top[0] + top[2] * G.pitch + 0.06, 0, 0.34, 0.24, top[3] * 2 + 0.4));
    add("barge-boards", "Bargeboards", mergeGeos(white), "stone");
    add("roof-trim", "Ridge and eaves trim", mergeGeos(red), "red");
  }
  {
    const T = G.tiers;
    const [y0, , hx, hz] = T[T.length - 1];
    const apex = y0 + hx * G.pitch;
    const tri = new THREE.Shape();
    tri.moveTo(-hx + 0.34, y0 + 0.2);
    tri.lineTo(hx - 0.34, y0 + 0.2);
    tri.lineTo(0, apex - 0.3);
    tri.closePath();
    const parts = [];
    for (const zs of [-1, 1]) {
      const g = new THREE.ExtrudeGeometry(tri, { depth: 0.22, bevelEnabled: false, curveSegments: 2 });
      g.translate(0, 0, zs > 0 ? hz - 0.06 : -hz - 0.16);
      g.computeVertexNormals();
      parts.push(g);
    }
    add("pediment", "Gable pediments", mergeGeos(parts), "gilt");
  }
  {
    const T = G.tiers;
    const segs = [];
    const n = 6;
    const at = (u) => [0.08 + 0.36 * Math.sin(u * Math.PI * 0.46), 0.04 + 0.9 * u];
    for (let j = 0; j < n; j++) {
      const a = at(j / n), b = at((j + 1) / n);
      const dx = b[0] - a[0], dy = b[1] - a[1];
      const w = 0.19 * (1 - j / n) + 0.05;
      const g = new THREE.BoxGeometry(w, Math.hypot(dx, dy) + 0.04, w);
      g.rotateZ(Math.atan2(-dx, dy));
      g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
      segs.push(g);
    }
    const unit = mergeGeos(segs);
    const mats = [];
    const place = (x, y, z, yaw, mirror) => mats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(mirror, 1, 1)
    ));
    const top = T[T.length - 1];
    const apex = top[0] + top[2] * G.pitch;
    place(0, apex - 0.5, top[3] + 0.1, 0, 1);
    place(0, apex - 0.5, -top[3] - 0.1, Math.PI, 1);
    for (const [y0, , hx, hz] of T) {
      for (const zs of [-1, 1]) {
        for (const xs of [-1, 1]) {
          place(xs * (hx + 0.06), y0 + 0.16, zs * (hz + 0.16), zs > 0 ? 0 : Math.PI, xs);
        }
      }
    }
    addInst("chofa", "Chofa horn finials", unit, "gilt", mats);
  }
  {
    const S = G.sema;
    const leaf = new THREE.Shape();
    leaf.moveTo(-0.2, 0);
    leaf.lineTo(0.2, 0);
    leaf.lineTo(0.2, S.h * 0.52);
    leaf.quadraticCurveTo(0.2, S.h * 0.92, 0, S.h);
    leaf.quadraticCurveTo(-0.2, S.h * 0.92, -0.2, S.h * 0.52);
    leaf.closePath();
    const blade = new THREE.ExtrudeGeometry(leaf, { depth: 0.13, bevelEnabled: false, curveSegments: 5 });
    blade.translate(0, 0.46, -0.065);
    blade.computeVertexNormals();
    const unit = mergeGeos([
      boxAt(0, 0.1, 0, 0.72, 0.2, 0.72),
      boxAt(0, 0.32, 0, 0.58, 0.26, 0.58),
      blade
    ]);
    const spots = [
      [-5.55, -11.55],
      [5.55, -11.55],
      [-5.55, 11.55],
      [5.55, 11.55],
      [-5.55, 0],
      [5.55, 0],
      [0, -11.55],
      [0, 11.55]
    ];
    addInst(
      "sema",
      "Bai sema boundary stones",
      unit,
      "stone",
      spots.map(([x, z]) => new THREE.Matrix4().setPosition(x, 0.55, z))
    );
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createUbosotModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVWJvc290IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEyLjAwIHggMTIuMDAgeCAyNC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJ1Ym9zb3RcIixcbiAgICBcIm5hbWVcIjogXCJVYm9zb3RcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJVYm9zb3RcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMTIuMDAgeCAxMi4wMCB4IDI0LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIGxvbmcgYXhpcyBvbiBaLlxcbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RvbmVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMjQyODk1NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJlZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDc0MTg2NjYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMjgxNDk0NixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC43OCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdyZWVuXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzIzNjE2OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC43NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdpbHRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5MDcxNjk4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRhcmtcIixcbiAgICAgICAgXCJjb2xvclwiOiA1NTIyNzQ3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwicGl0Y2hcIjogMS4wNTYsXG4gICAgICBcInBsYXRmb3JtXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC41NSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDEyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICA1LjcyLFxuICAgICAgICAgIDExLjcyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMS43NSxcbiAgICAgICAgICA1LjQ2LFxuICAgICAgICAgIDExLjQ2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm5vdGNoXCI6IHtcbiAgICAgICAgXCJoYWxmWFwiOiAxLjksXG4gICAgICAgIFwieklubmVyXCI6IDkuNlxuICAgICAgfSxcbiAgICAgIFwic3RhaXJcIjoge1xuICAgICAgICBcInN0ZXBzXCI6IDUsXG4gICAgICAgIFwiejBcIjogOS42LFxuICAgICAgICBcInoxXCI6IDEyLFxuICAgICAgICBcInRvcFwiOiAxLjc1LFxuICAgICAgICBcInRyZWFkSGFsZlhcIjogMS42XG4gICAgICB9LFxuICAgICAgXCJjb2x1bW5cIjoge1xuICAgICAgICBcImh3XCI6IDAuMjYsXG4gICAgICAgIFwieTBcIjogMS43NSxcbiAgICAgICAgXCJ5MVwiOiA2LjEsXG4gICAgICAgIFwiaW5zZXRYXCI6IDQuODYsXG4gICAgICAgIFwiaW5zZXRaXCI6IDEwLjQsXG4gICAgICAgIFwibG9uZ0NvdW50XCI6IDksXG4gICAgICAgIFwic2hvcnRDb3VudFwiOiAzXG4gICAgICB9LFxuICAgICAgXCJ3YWxsXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjc1LFxuICAgICAgICBcInkxXCI6IDYuMyxcbiAgICAgICAgXCJoeFwiOiAzLjYsXG4gICAgICAgIFwiaHpcIjogOS42XG4gICAgICB9LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ3XCI6IDIuMixcbiAgICAgICAgXCJoXCI6IDMuNixcbiAgICAgICAgXCJ5XCI6IDEuNzUsXG4gICAgICAgIFwielwiOiA5LjZcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDYuMSxcbiAgICAgICAgICA3LjQ1LFxuICAgICAgICAgIDUuNDUsXG4gICAgICAgICAgMTEuNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDcuNDUsXG4gICAgICAgICAgOC42NSxcbiAgICAgICAgICAzLjk1LFxuICAgICAgICAgIDlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDguNjUsXG4gICAgICAgICAgMTEuNCxcbiAgICAgICAgICAyLjcsXG4gICAgICAgICAgNi42XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImJhbmRcIjogMC40MixcbiAgICAgIFwic2VtYVwiOiB7XG4gICAgICAgIFwiY291bnRcIjogOCxcbiAgICAgICAgXCJoXCI6IDEuMDVcbiAgICAgIH1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICByZXR1cm4gW2N4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHpdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGkgKyAxLCBqKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpLCBqICsgMSk7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVYm9zb3RNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1Vib3NvdCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0b25lIHBsYXRmb3JtXG4gICAqIFRocmVlIHN0ZXBwZWQgc2xhYnMgYW5kIGEgZml2ZS10cmVhZCBzdGFpciwgYWxsIHRoZSBzYW1lIHdoaXRlIHN0b25lIGFuZCB0aGVyZWZvcmUgT05FXG4gICAqIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC4gVGhlIHN0YWlyIGlzIGN1dCBpbnRvIHRoZSBwbGFuIGFzIGEgbm90Y2ggb24gdGhlICtaIHNob3J0IGVuZDpcbiAgICogaHVuZyBvZmYgdGhlIG91dHNpZGUsIGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDI0LjAwIG0gcGxhdGZvcm0gd291bGQgcHVzaCB0aGUgYm91bmRpbmcgYm94XG4gICAqIG9mZi1jZW50cmUgYW5kIG92ZXIgdGhlIGRlY2xhcmVkIGxlbmd0aCBhdCBvbmUgZW5kLiAqL1xuICB7XG4gICAgY29uc3QgTiA9IEcubm90Y2gsIFNUID0gRy5zdGFpcjtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IChHLnBsYXRmb3JtIGFzIG51bWJlcltdW10pLm1hcChcbiAgICAgIChbeTAsIHkxLCBoeCwgaHpdKSA9PiBleHRydWRlU2xhYihub3RjaGVkUmVjdChoeCwgaHosIE4uaGFsZlgsIE4ueklubmVyKSwgeTAsIHkxKSk7XG5cbiAgICAvLyBGaXZlIHRyZWFkcywgZWFjaCBvY2N1cHlpbmcgb25seSBpdHMgb3duIGdvaW5nLiBTdGFja2VkIHdlZGdlcyBhbGwgcmVhY2hpbmcgej0xMi4wMCB3b3VsZCBwdXRcbiAgICAvLyBmaXZlIG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICBjb25zdCBydW4gPSAoU1QuejEgLSBTVC56MCkgLyBTVC5zdGVwcywgcmlzZSA9IFNULnRvcCAvIFNULnN0ZXBzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgejEgPSBTVC56MSAtIGkgKiBydW4sIGggPSAoaSArIDEpICogcmlzZTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoMCwgaCAvIDIsIHoxIC0gcnVuIC8gMiwgU1QudHJlYWRIYWxmWCAqIDIsIGgsIHJ1bikpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gR3JvdW5kIGRpcnQgYW5kIHRoZSBibGFjayB3ZWF0aGVyaW5nIHN0cmVha3MgdGhlIHBsYXRlIHNob3dzIG9uIHRoZSBwbGludGgsIGFzIGEgcGVyLXZlcnRleFxuICAgIC8vIHRpbnQgcmF0aGVyIHRoYW4gYSBzZWNvbmQgbWF0ZXJpYWw6IHRoZSBwbGF0ZSdzIGJvdHRvbSBjb3Vyc2VzIG1lYXN1cmUgZGlzdGluY3RseSBkYXJrZXJcbiAgICAvLyB0aGFuIHRoZSBkZWNrIGFib3ZlIHRoZW0uXG4gICAgdGludEJ5SGVpZ2h0KGdlbywgMCwgMS43NSwgWzAuODAsIDAuODEsIDAuNzldKTtcbiAgICBhZGQoJ3BsYXRmb3JtJywgJ1N0b25lIHBsYXRmb3JtIGFuZCBzdGFpcicsIGdlbywgJ3N0b25lJyk7XG4gICAgY29sbGlkZXJzWydwbGF0Zm9ybSddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDYuMCwgMF0sIGhhbGZFeHRlbnRzOiBbNi4wLCA2LjAsIDEyLjBdLFxuICAgICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlOyBhIGxldmVsICdcbiAgICAgICAgICAgKyAnYnVpbGRlciBjb2xsaWRlcyB3aXRoIHRoZSBoYWxsLCBub3Qgd2l0aCBpdHMgaW5kaXZpZHVhbCBjb2x1bW5zLicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2FsbCBib2R5XG4gICAqIEEgU09MSUQgYm94IGluc2lkZSB0aGUgY29sb25uYWRlLiBUaGUgaGFsbCBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsXG4gICAqIHNvIHRoZXJlIGlzIG5vIGludGVyaW9yOiBhbiBpbnRlcmlvciB3b3VsZCBjb3N0IGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZ1xuICAgKiBub2JvZHkgc2VlcywgYW5kIGEgc29saWQgYm9keSBhbHNvIG1lYW5zIHRoZSBkb29yd2F5IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzXG4gICAqIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLndhbGw7XG4gICAgYWRkKCd3YWxsJywgJ0hhbGwgd2FsbCBib2R5JywgYm94QXQoMCwgKFcueTAgKyBXLnkxKSAvIDIsIDAsIFcuaHggKiAyLCBXLnkxIC0gVy55MCwgVy5oeiAqIDIpLFxuICAgICAgJ3N0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRvb3J3YXlcbiAgICogVGhlIG9uZSBvcGVuaW5nLCBvbiB0aGUgK1ogc2hvcnQgZW5kIGF0IHRoZSBoZWFkIG9mIHRoZSBzdGFpci4gSXQgc3RhbmRzIDAuMDMgbSBQUk9VRCBvZiB0aGVcbiAgICogd2FsbCBmYWNlIHJhdGhlciB0aGFuIHJlY2Vzc2VkIGludG8gaXQ6IHRoZSB3YWxsIGlzIGEgc29saWQgbWFzcywgc28gYSBwYW5lbCBzdW5rIGludG8gaXQgaXNcbiAgICogaW5zaWRlIHRoZSBzb2xpZCBhbmQgaW52aXNpYmxlLiBXaGF0IG1ha2VzIGl0IHJlYWQgYXMgYSBkb29yd2F5IGlzIHRoZSBzdXJyb3VuZCBzdGFuZGluZyBpblxuICAgKiBmcm9udCBvZiBpdCwgbm90IHRoZSBwYW5lbCBiZWluZyBzdW5rLiAqL1xuICB7XG4gICAgY29uc3QgRCA9IEcuZG9vcjtcbiAgICBhZGQoJ2Rvb3J3YXknLCAnRG9vcndheScsIGJveEF0KDAsIEQueSArIEQuaCAvIDIsIEQueiArIDAuMDMsIEQudywgRC5oLCAwLjA2KSwgJ2RhcmsnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGVyaXN0eWxlIGNvbHVtbnNcbiAgICogVHdlbnR5LWZvdXIgc3F1YXJlIHJlZCBjb2x1bW5zIGFzIE9ORSBJbnN0YW5jZWRNZXNoOiBvbmUgZ2VvbWV0cnksIG9uZSBzdWJtaXNzaW9uLiBBcyBzZXBhcmF0ZVxuICAgKiBtZXNoZXMgdGhleSB3b3VsZCBiZSB0d2VudHktZm91ciBkcmF3IGNhbGxzIG9mIHRoZSB0d2VudHktZm91ciBhdmFpbGFibGUsIGZvciB0d2VudHktZm91clxuICAgKiBjb3BpZXMgb2Ygb25lIGJveC4gKi9cbiAge1xuICAgIGNvbnN0IEMgPSBHLmNvbHVtbjtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KDAsIDAsIDAsIEMuaHcgKiAyLCBDLnkxIC0gQy55MCwgQy5odyAqIDIpLFxuICAgICAgLy8gQSBzbGlnaHRseSB3aWRlciBjYXBpdGFsIGJsb2NrIGF0IHRoZSBoZWFkLCB3aGVyZSB0aGUgcGxhdGUgc2hvd3MgdGhlIGNvbHVtbiBtZWV0aW5nIHRoZVxuICAgICAgLy8gZWF2ZXMgYmVhbS4gU3VuayAwLjAyIG0gaW50byB0aGUgc2hhZnQgc28gbm8gdHdvIHRvcCBmYWNlcyBzaGFyZSBhIHBsYW5lLlxuICAgICAgYm94QXQoMCwgKEMueTEgLSBDLnkwKSAvIDIgLSAwLjEzLCAwLCBDLmh3ICogMi40LCAwLjI2LCBDLmh3ICogMi40KSxcbiAgICBdKTtcbiAgICBjb25zdCBjeSA9IChDLnkwICsgQy55MSkgLyAyO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQy5sb25nQ291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeiA9IC1DLmluc2V0WiArICgyICogQy5pbnNldFogKiBpKSAvIChDLmxvbmdDb3VudCAtIDEpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oLUMuaW5zZXRYLCBjeSwgeikpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oQy5pbnNldFgsIGN5LCB6KSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IEMuc2hvcnRDb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gLUMuaW5zZXRYICsgKDIgKiBDLmluc2V0WCAqIGkpIC8gKEMuc2hvcnRDb3VudCArIDEpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgY3ksIC1DLmluc2V0WikpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgY3ksIEMuaW5zZXRaKSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ2NvbHVtbnMnLCAnUGVyaXN0eWxlIGNvbHVtbnMnLCB1bml0LCAncmVkJywgbWF0cyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2Y6IHRpbGUgZmllbGRzXG4gICAqIFRocmVlIG5lc3RlZCBUUlVOQ0FURUQgZ2FibGUgcHJpc21zLCBtZXJnZWQgaW50byBvbmUgY29tcG9uZW50LiBFYWNoIGlzIHRoZSBjcm9zcy1zZWN0aW9uXG4gICAqIHRyYXBlem9pZCBvZiBvbmUgdGllciBleHRydWRlZCBhbG9uZyB0aGUgaGFsbCdzIGxlbmd0aCAtLSB0aGUgcm9vZiBpcyBhIHByaXNtLCBzbyBhIHByaXNtIGlzXG4gICAqIHdoYXQgaXQgc2hvdWxkIGJlIGJ1aWx0IGFzLCBhbmQgYSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIDQ2LWRlZ3JlZSBwaXRjaCBpcyBub3QgYSBsb3ctcG9seVxuICAgKiByb29mIGJ1dCBhIHN0YWlyY2FzZS4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzIGFzIG51bWJlcltdW10sIEIgPSBHLmJhbmQ7XG4gICAgY29uc3Qgb3JhbmdlOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgZ3JlZW46IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFt5MCwgeTEsIGh4LCBoel0gb2YgVCkge1xuICAgICAgLy8gVGhlIGdyZWVuIGVhdmVzIHN0cmlwIGlzIHRoZSBib3R0b20gQiBtZXRyZXMgb2YgdGhlIHNsb3BlLCBhcyBpdHMgb3duIHNob3J0IHRyYXBlem9pZCwgYW5kXG4gICAgICAvLyB0aGUgb3JhbmdlIGZpZWxkIGlzIGV2ZXJ5dGhpbmcgYWJvdmUgaXQuIFRoZXkgbWVldCBhdCBvbmUgaGVpZ2h0IGFzIE9QUE9TRUQgZmFjZXMgLS0gdGhlXG4gICAgICAvLyBncmVlbidzIHRvcCBhbmQgdGhlIG9yYW5nZSdzIGJvdHRvbSAtLSB3aGljaCBpcyBob3cgc29saWRzIGFyZSBtZWFudCB0byBtZWV0LlxuICAgICAgY29uc3QgeVNwbGl0ID0geTAgKyBCO1xuICAgICAgZ3JlZW4ucHVzaChleHRydWRlQWxvbmdaKHRpZXJQcm9maWxlKGh4LCB5MCwgeVNwbGl0LCBHLnBpdGNoKSwgLWh6LCBoeikpO1xuICAgICAgb3JhbmdlLnB1c2goZXh0cnVkZUFsb25nWih0aWVyUHJvZmlsZShoeCAtIEIgLyBHLnBpdGNoLCB5U3BsaXQsIHkxLCBHLnBpdGNoKSwgLWh6ICsgMC4wMSwgaHogLSAwLjAxKSk7XG4gICAgfVxuICAgIGFkZCgncm9vZi10aWxlJywgJ1RpbGUgcm9vZiBmaWVsZHMnLCBtZXJnZUdlb3Mob3JhbmdlKSwgJ3RpbGUnKTtcbiAgICBhZGQoJ3Jvb2YtYmFuZCcsICdHcmVlbiBlYXZlcyBiYW5kcycsIG1lcmdlR2VvcyhncmVlbiksICdncmVlbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb29mOiBiYXJnZSBib2FyZHMgYW5kIHJpZGdlXG4gICAqIFRoZSB3aGl0ZSBiYXJnZWJvYXJkcyB0aGF0IHJ1biB1cCBlYWNoIGdhYmxlIHJha2UsIGFuZCB0aGUgcmVkIHJpZGdlIGFuZCBlYXZlcyB0cmltLiBUd29cbiAgICogY29tcG9uZW50cyBiZWNhdXNlIHRoZXkgYXJlIHR3byBtYXRlcmlhbHM7IGVhY2ggaXMgb25lIG1lcmdlZCBnZW9tZXRyeS5cbiAgICpcbiAgICogQSBib2FyZCBpcyBhIGJveCBST1RBVEVEIHRvIHRoZSByYWtlIGFuZ2xlIHJhdGhlciB0aGFuIGEgc3RhaXIgb2Ygc21hbGwgYm94ZXM6IGF0IDQ2IGRlZ3JlZXMgYVxuICAgKiBzdGVwcGVkIGFwcHJveGltYXRpb24gcmVhZHMgYXMgc2VycmF0aW9uIGZyb20gYW55IGRpc3RhbmNlIGF0IGFsbC4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzIGFzIG51bWJlcltdW107XG4gICAgY29uc3Qgd2hpdGU6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCByZWQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFt5MCwgeTEsIGh4LCBoel0gb2YgVCkge1xuICAgICAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBHLnBpdGNoO1xuICAgICAgY29uc3QgaGFsZlRvcCA9IE1hdGgubWF4KGh4IC0gaW5zZXQsIDApO1xuICAgICAgY29uc3QgcnVuID0gaHggLSBoYWxmVG9wLCByaXNlID0geTEgLSB5MDtcbiAgICAgIGNvbnN0IGxlbiA9IE1hdGguaHlwb3QocnVuLCByaXNlKSArIDAuMTA7XG4gICAgICAvLyBhdGFuMihSVU4sIFJJU0UpLCBub3QgYXRhbihwaXRjaCkuIHJvdGF0ZVogbWFwcyB0aGUgYm94J3MgK1kgdG8gKC1zaW4sIGNvcyksIHNvIGFpbWluZyBpdFxuICAgICAgLy8gYWxvbmcgdGhlIHJha2UgKC1ydW4sIHJpc2UpIG5lZWRzIHNpbiA9IHJ1bi9sZW4gLS0gdGhlIENPTVBMRU1FTlQgb2YgdGhlIHBpdGNoIGFuZ2xlLiBBdFxuICAgICAgLy8gdGhpcyByb29mJ3MgNDYgZGVncmVlcyB0aGUgdHdvIGFyZSBvbmx5IHRocmVlIGRlZ3JlZXMgYXBhcnQsIHdoaWNoIGlzIHdoeSB0aGUgbWlzdGFrZVxuICAgICAgLy8gc3Vydml2ZWQgaGVyZSBhbmQgd2FzIG9ubHkgY2F1Z2h0IG9uIHRoZSAzMy1kZWdyZWUgaGFsbCwgd2hlcmUgaXQgc3Rvb2QgdGhlIGJvYXJkcyBvZmZcbiAgICAgIC8vIHRoZSByb29mIGxpa2Ugc2NhZmZvbGRpbmcuXG4gICAgICBjb25zdCBhbmcgPSBNYXRoLmF0YW4yKHJ1biwgcmlzZSk7XG4gICAgICBmb3IgKGNvbnN0IHpzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgICAgLy8gQmFyZ2Vib2FyZCBhbG9uZyBvbmUgcmFrZSBvZiBvbmUgZ2FibGUgZW5kLlxuICAgICAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC4yMCwgbGVuLCAwLjMwKTtcbiAgICAgICAgICBnLnJvdGF0ZVooeHMgKiBhbmcpO1xuICAgICAgICAgIGcudHJhbnNsYXRlKHhzICogKGh4ICsgaGFsZlRvcCkgLyAyLCAoeTAgKyB5MSkgLyAyLCB6cyAqIChoeiArIDAuMTQpKTtcbiAgICAgICAgICB3aGl0ZS5wdXNoKGcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlZCBmYXNjaWEgYWxvbmcgdGhlIHNhbWUgcmFrZSwgc2l0dGluZyBqdXN0IG91dHNpZGUgdGhlIHdoaXRlIGJvYXJkLlxuICAgICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMTIsIGxlbiwgMC4xNCk7XG4gICAgICAgICAgZy5yb3RhdGVaKHhzICogYW5nKTtcbiAgICAgICAgICBnLnRyYW5zbGF0ZSh4cyAqIChoeCArIGhhbGZUb3ApIC8gMiwgKHkwICsgeTEpIC8gMiwgenMgKiAoaHogKyAwLjM0KSk7XG4gICAgICAgICAgcmVkLnB1c2goZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIFJlZCBlYXZlcyBmYXNjaWEgYWxvbmcgYm90aCBsb25nIHNpZGVzLCBodW5nIG9uIHRoZSBvdXRzaWRlIG9mIHRoZSB0aWxlIGVkZ2UuXG4gICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgcmVkLnB1c2goYm94QXQoeHMgKiAoaHggKyAwLjA4KSwgeTAgKyAwLjEwLCAwLCAwLjE2LCAwLjMwLCBoeiAqIDIgKyAwLjMwKSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIFRoZSByaWRnZSBjYXAgb24gdGhlIHRvcG1vc3QgdGllci5cbiAgICBjb25zdCB0b3AgPSBUW1QubGVuZ3RoIC0gMV07XG4gICAgcmVkLnB1c2goYm94QXQoMCwgdG9wWzBdICsgdG9wWzJdICogRy5waXRjaCArIDAuMDYsIDAsIDAuMzQsIDAuMjQsIHRvcFszXSAqIDIgKyAwLjQwKSk7XG4gICAgYWRkKCdiYXJnZS1ib2FyZHMnLCAnQmFyZ2Vib2FyZHMnLCBtZXJnZUdlb3Mod2hpdGUpLCAnc3RvbmUnKTtcbiAgICBhZGQoJ3Jvb2YtdHJpbScsICdSaWRnZSBhbmQgZWF2ZXMgdHJpbScsIG1lcmdlR2VvcyhyZWQpLCAncmVkJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdhYmxlIHBlZGltZW50c1xuICAgKiBUaGUgY2FydmVkIGdpbHQgZmllbGQgaW4gZWFjaCBnYWJsZSBvZiB0aGUgdG9wbW9zdCB0aWVyLiBUd28gb2YgdGhlbSwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlXG4gICAqIHRpZXIncyBlbmQgZmFjZSBzbyB0aGV5IG92ZXJsYXAgaXQgcmF0aGVyIHRoYW4gbWVldGluZyBpdCBpbiBpdHMgb3duIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudGllcnMgYXMgbnVtYmVyW11bXTtcbiAgICBjb25zdCBbeTAsICwgaHgsIGh6XSA9IFRbVC5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBhcGV4ID0geTAgKyBoeCAqIEcucGl0Y2g7XG4gICAgY29uc3QgdHJpID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgdHJpLm1vdmVUbygtaHggKyAwLjM0LCB5MCArIDAuMjApO1xuICAgIHRyaS5saW5lVG8oaHggLSAwLjM0LCB5MCArIDAuMjApO1xuICAgIHRyaS5saW5lVG8oMCwgYXBleCAtIDAuMzApO1xuICAgIHRyaS5jbG9zZVBhdGgoKTtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkge1xuICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkodHJpLCB7IGRlcHRoOiAwLjIyLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAyIH0pO1xuICAgICAgZy50cmFuc2xhdGUoMCwgMCwgenMgPiAwID8gaHogLSAwLjA2IDogLWh6IC0gMC4xNik7XG4gICAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgICBwYXJ0cy5wdXNoKGcpO1xuICAgIH1cbiAgICBhZGQoJ3BlZGltZW50JywgJ0dhYmxlIHBlZGltZW50cycsIG1lcmdlR2VvcyhwYXJ0cyksICdnaWx0Jyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNob2ZhIGhvcm4gZmluaWFsc1xuICAgKiBUaGUgY3VydmVkIGhvcm5zIGF0IGV2ZXJ5IGdhYmxlIGFwZXggYW5kIGV2ZXJ5IHJha2UgZm9vdC4gVGhlIHJlZ2lzdHJ5IG5vdGVzIGNhbGwgdGhlbSB0aGVcbiAgICogZmVhdHVyZSB0aGF0IHNlcGFyYXRlcyBhbiB1Ym9zb3QgZnJvbSBhbnkgb3RoZXIgcmVjdGFuZ3VsYXIgaGFsbCwgc28gdGhleSBhcmUgYXV0aG9yZWQgYXMgcmVhbFxuICAgKiBDVVJWRVMgLS0gc2l4IHRhcGVyaW5nIHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYW4gYXJjIC0tIGFuZCBub3QgYXMgc3Bpa2VzOiBhIHN0cmFpZ2h0IHNwaWtlIGF0XG4gICAqIGEgcmlkZ2UgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZC5cbiAgICpcbiAgICogRm91cnRlZW4gb2YgdGhlbSwgYXMgT05FIEluc3RhbmNlZE1lc2gsIGVhY2ggaW5zdGFuY2UgY2FycnlpbmcgaXRzIG93biB5YXcgYW5kIGl0cyBvd24gbWlycm9yXG4gICAqIHRocm91Z2ggYSBuZWdhdGl2ZSBzY2FsZS4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzIGFzIG51bWJlcltdW107XG4gICAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IG4gPSA2O1xuICAgIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gWzAuMDggKyAwLjM2ICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgMC4wNCArIDAuOTAgKiB1XTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgICBjb25zdCB3ID0gMC4xOSAqICgxIC0gaiAvIG4pICsgMC4wNTtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgMC4wNCwgdyk7XG4gICAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgICAgc2Vncy5wdXNoKGcpO1xuICAgIH1cbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHNlZ3MpO1xuXG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgY29uc3QgcGxhY2UgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgeWF3OiBudW1iZXIsIG1pcnJvcjogbnVtYmVyKSA9PlxuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMobWlycm9yLCAxLCAxKSkpO1xuXG4gICAgLy8gVHdvIGF0IHRoZSBhcGV4IG9mIHRoZSB0b3Btb3N0IGdhYmxlLCBvbmUgZmFjaW5nIGVhY2ggd2F5IGFsb25nIHRoZSByaWRnZSAtLSB0aGUgcGFpciB0aGF0XG4gICAgLy8gbWFrZXMgdGhlIHJvb2ZsaW5lIHJlYWQuXG4gICAgY29uc3QgdG9wID0gVFtULmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGFwZXggPSB0b3BbMF0gKyB0b3BbMl0gKiBHLnBpdGNoO1xuICAgIHBsYWNlKDAsIGFwZXggLSAwLjUwLCB0b3BbM10gKyAwLjEwLCAwLCAxKTtcbiAgICBwbGFjZSgwLCBhcGV4IC0gMC41MCwgLXRvcFszXSAtIDAuMTAsIE1hdGguUEksIDEpO1xuICAgIC8vIE9uZSBhdCBlYWNoIHJha2UgZm9vdCBvZiBldmVyeSB0aWVyOiBmb3VyIGNvcm5lcnMgcGVyIHRpZXIsIG1pcnJvcmVkIHNvIGVhY2ggY3VybHMgb3V0d2FyZC5cbiAgICBmb3IgKGNvbnN0IFt5MCwgLCBoeCwgaHpdIG9mIFQpIHtcbiAgICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkge1xuICAgICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICBwbGFjZSh4cyAqIChoeCArIDAuMDYpLCB5MCArIDAuMTYsIHpzICogKGh6ICsgMC4xNiksIHpzID4gMCA/IDAgOiBNYXRoLlBJLCB4cyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgYWRkSW5zdCgnY2hvZmEnLCAnQ2hvZmEgaG9ybiBmaW5pYWxzJywgdW5pdCwgJ2dpbHQnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFpIHNlbWEgYm91bmRhcnkgc3RvbmVzXG4gICAqIEVpZ2h0IHBvaW50ZWQgc3RvbmVzIG9uIHRoZWlyIG93biBwZWRlc3RhbHMgYXJvdW5kIHRoZSBwbGF0Zm9ybS4gVGhlIHJlZ2lzdHJ5IG5vdGVzIGFyZVxuICAgKiBleHBsaWNpdCB0aGF0IHRoZXNlIGFyZSB3aGF0IG1ha2UgdGhlIGJ1aWxkaW5nIGFuIE9SRElOQVRJT04gaGFsbCByYXRoZXIgdGhhbiBhIGdlbmVyYWxcbiAgICogYXNzZW1ibHkgaGFsbCwgc28gdGhleSBiZWxvbmcgdG8gdGhpcyBhc3NldCBhbmQgYXJlIG5vdCBvcHRpb25hbCBkcmVzc2luZy4gT25lIGluc3RhbmNlZFxuICAgKiBnZW9tZXRyeSwgZWlnaHQgcGxhY2VtZW50czogZm91ciBhdCB0aGUgY29ybmVycyBhbmQgZm91ciBhdCB0aGUgbWlkLXBvaW50cyBvZiB0aGUgc2lkZXMuICovXG4gIHtcbiAgICBjb25zdCBTID0gRy5zZW1hO1xuICAgIGNvbnN0IGxlYWYgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBsZWFmLm1vdmVUbygtMC4yMCwgMCk7XG4gICAgbGVhZi5saW5lVG8oMC4yMCwgMCk7XG4gICAgbGVhZi5saW5lVG8oMC4yMCwgUy5oICogMC41Mik7XG4gICAgbGVhZi5xdWFkcmF0aWNDdXJ2ZVRvKDAuMjAsIFMuaCAqIDAuOTIsIDAsIFMuaCk7XG4gICAgbGVhZi5xdWFkcmF0aWNDdXJ2ZVRvKC0wLjIwLCBTLmggKiAwLjkyLCAtMC4yMCwgUy5oICogMC41Mik7XG4gICAgbGVhZi5jbG9zZVBhdGgoKTtcbiAgICBjb25zdCBibGFkZSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkobGVhZiwgeyBkZXB0aDogMC4xMywgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNSB9KTtcbiAgICBibGFkZS50cmFuc2xhdGUoMCwgMC40NiwgLTAuMDY1KTtcbiAgICBibGFkZS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoMCwgMC4xMCwgMCwgMC43MiwgMC4yMCwgMC43MiksXG4gICAgICBib3hBdCgwLCAwLjMyLCAwLCAwLjU4LCAwLjI2LCAwLjU4KSxcbiAgICAgIGJsYWRlLFxuICAgIF0pO1xuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW1xuICAgICAgWy01LjU1LCAtMTEuNTVdLCBbNS41NSwgLTExLjU1XSwgWy01LjU1LCAxMS41NV0sIFs1LjU1LCAxMS41NV0sXG4gICAgICBbLTUuNTUsIDBdLCBbNS41NSwgMF0sIFswLCAtMTEuNTVdLCBbMCwgMTEuNTVdLFxuICAgIF07XG4gICAgYWRkSW5zdCgnc2VtYScsICdCYWkgc2VtYSBib3VuZGFyeSBzdG9uZXMnLCB1bml0LCAnc3RvbmUnLFxuICAgICAgc3BvdHMubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgMC41NSwgeikpKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVVib3NvdE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxZQUFZO0FBQUEsTUFDVjtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixN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
