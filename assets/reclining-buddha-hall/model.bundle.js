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

// ../repo/scratch/reclining-buddha-hall/src/createObjectModel.ts
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
  "envelope": "Envelope 12.38 x 10.00 x 19.24 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
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
        -6.181,
        6.181,
        -9.618,
        9.618
      ],
      [
        0.5,
        1,
        -5.784,
        5.784,
        -9.309,
        9.309
      ],
      [
        1,
        1.35,
        -5.784,
        5.784,
        -9.309,
        9.309
      ],
      [
        1.35,
        1.75,
        -5.386,
        2.296,
        -9,
        9
      ]
    ],
    "plinth": {
      "y0": 1.75,
      "y1": 2.62,
      "x0": -4.592,
      "x1": 1.413,
      "hz": 7.969
    },
    "column": {
      "hw": 0.274,
      "y0": 1.75,
      "y1": 6.6,
      "frontX": 1.854,
      "frontCount": 8,
      "frontHalfZ": 8.381,
      "endZ": 8.381,
      "endX": [
        -3.709,
        -0.927
      ]
    },
    "backWall": {
      "x0": -5.386,
      "x1": -4.592,
      "y0": 1.75,
      "y1": 6.6,
      "hz": 9
    },
    "tiers": [
      {
        "y0": 6.6,
        "hx": 4.547,
        "hz": 9.481,
        "drop": 0.26
      },
      {
        "y0": 7.75,
        "hx": 3.002,
        "hz": 8.244,
        "drop": 0.22
      }
    ],
    "roofCentreX": -1.519,
    "band": 0.34,
    "figure": {
      "x": -1.589,
      "rest": 2.62,
      "seg": 18,
      "head": 1.12,
      "headLift": 2.3,
      "headTilt": 0.45,
      "headZ": 9.5,
      "fz": 0.687,
      "fr": 1.1
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
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      pos.push(cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
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
      halfExtents: [6.19, 5, 9.62],
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
    const T = G.tiers;
    const B = G.band, cx = G.roofCentreX, P = G.pitch;
    const red = [];
    const gold = [];
    for (const t of T) {
      const g1 = hipRoof(t.hx, t.hz, t.hz - t.hx, t.y0, t.y0 + P * t.hx, 1, 3, t.drop, 0);
      g1.translate(cx, 0, 0);
      gold.push(g1);
      const hx = t.hx - B / P + 0.04, hz = t.hz - B / P + 0.04;
      const g2 = hipRoof(hx, hz, hz - hx, t.y0 + B, t.y0 + B + P * hx, 1, 3, t.drop * 0.5, 0);
      g2.translate(cx, 0, 0);
      red.push(g2);
    }
    add("roof-tile", "Tile roof fields", mergeGeos(red), "tile");
    add("roof-band", "Gold eaves bands", mergeGeos(gold), "band");
  }
  {
    const T = G.tiers;
    const cx = G.roofCentreX, P = G.pitch;
    const parts = [];
    const aim = (a, b, w, h) => {
      const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const len = d.length();
      const g = new THREE.BoxGeometry(w, len, h);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(
        new THREE.Vector3(0, 1, 0),
        d.clone().normalize()
      ));
      g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
      return g;
    };
    for (const t of T) {
      const apex = t.y0 + P * t.hx, rz = t.hz - t.hx;
      const corner = (u, xs, zs) => {
        const f = 1 - u;
        const g = Math.pow(Math.max(0, 1 - u / 0.34), 2);
        const out = 1 + 0.045 * g;
        return [
          cx + xs * t.hx * f * out,
          t.y0 + (apex - t.y0) * u + 0.06,
          zs * (rz + (t.hz - rz) * f) * out
        ];
      };
      const US = [0, 0.1, 0.2, 0.34, 0.62, 1];
      for (const xs of [-1, 1]) {
        for (const zs of [-1, 1]) {
          for (let k = 0; k < US.length - 1; k++) {
            parts.push(aim(corner(US[k], xs, zs), corner(US[k + 1], xs, zs), 0.26, 0.2));
          }
        }
      }
      parts.push(boxAt(cx, apex + 0.09, 0, 0.3, 0.2, rz * 2 + 0.3));
    }
    add("hip-ribs", "Hip ribs and ridge caps", mergeGeos(parts), "stone");
  }
  {
    const F = G.figure, PL = G.plinth;
    const rest = PL.y1;
    const X = F.x;
    const parts = [];
    const limb = (a, b, r0, r1, seg = 10) => {
      const d = new THREE.Vector3(b[0] - a[0], b[1] - a[1], b[2] - a[2]);
      const len = d.length();
      const g = new THREE.CylinderGeometry(r1, r0, len, seg);
      g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize()));
      g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
      return g;
    };
    const torso = [
      [9.3, 0.36, 0.4, 0, 1.95],
      // closes inside the head
      [8.6, 0.6, 0.66, 0, 1.75],
      // neck
      [7.9, 0.92, 1.16, 0.05, 0],
      [6.9, 1.08, 1.38, 0.1, 0],
      // shoulder
      [5.6, 1.12, 1.34, 0.14, 0],
      // chest
      [3.6, 1, 1.18, 0.1, 0],
      // waist
      [1.6, 1.1, 1.32, 0.06, 0],
      [0, 1.16, 1.4, 0.04, 0],
      // hip
      [-1.6, 1.02, 1.34, 0.02, 0],
      [-3.4, 0.9, 1.26, 0.02, 0],
      // thigh
      [-5.6, 0.76, 1.06, 0.04, 0],
      // knee
      [-7.6, 0.7, 0.98, 0.02, 0],
      // calf
      [-9.6, 0.56, 0.82, 0, 0],
      [-10.6, 0.54, 0.8, 0, 0]
      // ankle, inside the feet
    ];
    const torsoSt = torso.map(([z, rx, ry, lean, cy]) => [z, X + lean, rest + (cy || ry), rx, ry]);
    parts.push(tubeAlong(torsoSt, F.seg));
    const onBody = (z, phi, r, proud = 0.3) => {
      const i = torso.findIndex((s2) => s2[0] <= z);
      const a = torso[Math.max(i - 1, 0)], b = torso[Math.max(i, 0)];
      const t = a[0] === b[0] ? 0 : (a[0] - z) / (a[0] - b[0]);
      const lr = (k) => a[k] + (b[k] - a[k]) * t;
      const rx = lr(1), ry = lr(2), cx = X + lr(3), cy = rest + ry;
      const s = Math.sin(phi), c = Math.cos(phi);
      return [z, cx + (rx + r * proud) * s, cy + (ry + r * proud) * c, r, r];
    };
    parts.push(tubeAlong([
      onBody(-1, 0.95, 0.1, -3),
      onBody(-1.8, 0.95, 0.52, -0.3),
      onBody(-3.6, 0.98, 0.54, -0.2),
      onBody(-5.6, 1.02, 0.48, -0.1),
      // knee
      onBody(-7.6, 1, 0.44, -0.2),
      onBody(-9.6, 0.98, 0.36, -0.3),
      onBody(-10.4, 0.98, 0.34, -0.4)
    ], 12));
    for (const [fx, fy] of [[X + 0.45, rest + 0.41], [X + 0.45, rest + 0.41 + 0.8]]) {
      parts.push(boxAt(fx, fy, -10.95, 2.1, 0.82, 0.9));
      for (let i = 0; i < 5; i++) parts.push(boxAt(fx + 1.2, fy - 0.3 + i * 0.15, -10.96, 0.36, 0.12, 0.82));
    }
    {
      const R = F.head;
      const head = new THREE.SphereGeometry(1, 16, 12);
      head.scale(R * 0.92, R * 1.02, R * 0.95);
      const hp = [head];
      hp.push(lathe([[0, 0], [0.3, 0.05], [0.33, 0.16], [0.21, 0.3], [0.1, 0.4], [0, 0.48]], 12).translate(0, R * 0.96, 0));
      for (const s of [-1, 1]) hp.push(boxAt(0.04, -0.1, s * R * 0.93, 0.28, 0.7, 0.16));
      hp.push(boxAt(R * 0.9, -0.04, 0, 0.3, 0.4, 0.24));
      const g = mergeGeos(hp);
      g.rotateX(F.headTilt);
      g.translate(X + 0.25, rest + F.headLift, F.headZ);
      parts.push(g);
    }
    const elbow = [X + 1.4, rest + 0.36, 9.25];
    const wrist = [X + 1.02, rest + F.headLift - F.head * 0.5, F.headZ + 0.1];
    parts.push(limb([X + 0.3, rest + 0.34, 8.35], elbow, 0.36, 0.34));
    parts.push(new THREE.SphereGeometry(0.38, 10, 8).translate(elbow[0], elbow[1], elbow[2]));
    parts.push(limb(elbow, wrist, 0.34, 0.27));
    {
      const hand = new THREE.BoxGeometry(0.5, 0.95, 0.72);
      hand.rotateX(F.headTilt * 0.6);
      hand.translate(wrist[0] + 0.1, wrist[1] + 0.32, wrist[2] + 0.02);
      parts.push(hand);
    }
    parts.push(tubeAlong([
      onBody(7.3, 0.3, 0.1, -3.5),
      // starts buried in the shoulder, so no cone shows
      onBody(6.9, 0.36, 0.4, -0.2),
      onBody(5.4, 0.48, 0.38),
      onBody(3.6, 0.56, 0.36),
      onBody(1.6, 0.6, 0.34),
      onBody(0, 0.62, 0.33),
      onBody(-1.4, 0.66, 0.31),
      onBody(-2.6, 0.7, 0.28),
      onBody(-3.4, 0.72, 0.22),
      onBody(-3.9, 0.72, 0.08)
    ], 12));
    {
      const hand = new THREE.BoxGeometry(0.5, 0.2, 1);
      hand.rotateZ(-0.62);
      const at = onBody(-3.6, 0.72, 0.1, -1.2);
      hand.translate(at[1], at[2], at[0]);
      parts.push(hand);
    }
    const fg = mergeGeos(parts);
    fg.translate(-X, -rest, 0);
    fg.scale(F.fr, F.fr, F.fz);
    fg.translate(X, rest, 0);
    fg.computeVertexNormals();
    add("figure", "Reclining Buddha figure", fg, "gold");
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUmVjbGluaW5nIEJ1ZGRoYSBIYWxsIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEyLjM4IHggMTAuMDAgeCAxOS4yNCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJyZWNsaW5pbmctYnVkZGhhLWhhbGxcIixcbiAgICBcIm5hbWVcIjogXCJSZWNsaW5pbmcgQnVkZGhhIEhhbGxcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJSZWNsaW5pbmdCdWRkaGFIYWxsXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEyLjM4IHggMTAuMDAgeCAxOS4yNCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0b25lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE4Mzk2NDMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTk4NDg0MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTEwMjU1OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiYmFuZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzMDE3MjA0LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjc2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ29sZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzAyNzIxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjE1LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJwaXRjaFwiOiAwLjY0LFxuICAgICAgXCJwbGF0Zm9ybVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAtNi4xODEsXG4gICAgICAgICAgNi4xODEsXG4gICAgICAgICAgLTkuNjE4LFxuICAgICAgICAgIDkuNjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtNS43ODQsXG4gICAgICAgICAgNS43ODQsXG4gICAgICAgICAgLTkuMzA5LFxuICAgICAgICAgIDkuMzA5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgLTUuNzg0LFxuICAgICAgICAgIDUuNzg0LFxuICAgICAgICAgIC05LjMwOSxcbiAgICAgICAgICA5LjMwOVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4zNSxcbiAgICAgICAgICAxLjc1LFxuICAgICAgICAgIC01LjM4NixcbiAgICAgICAgICAyLjI5NixcbiAgICAgICAgICAtOSxcbiAgICAgICAgICA5XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcInBsaW50aFwiOiB7XG4gICAgICAgIFwieTBcIjogMS43NSxcbiAgICAgICAgXCJ5MVwiOiAyLjYyLFxuICAgICAgICBcIngwXCI6IC00LjU5MixcbiAgICAgICAgXCJ4MVwiOiAxLjQxMyxcbiAgICAgICAgXCJoelwiOiA3Ljk2OVxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJod1wiOiAwLjI3NCxcbiAgICAgICAgXCJ5MFwiOiAxLjc1LFxuICAgICAgICBcInkxXCI6IDYuNixcbiAgICAgICAgXCJmcm9udFhcIjogMS44NTQsXG4gICAgICAgIFwiZnJvbnRDb3VudFwiOiA4LFxuICAgICAgICBcImZyb250SGFsZlpcIjogOC4zODEsXG4gICAgICAgIFwiZW5kWlwiOiA4LjM4MSxcbiAgICAgICAgXCJlbmRYXCI6IFtcbiAgICAgICAgICAtMy43MDksXG4gICAgICAgICAgLTAuOTI3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImJhY2tXYWxsXCI6IHtcbiAgICAgICAgXCJ4MFwiOiAtNS4zODYsXG4gICAgICAgIFwieDFcIjogLTQuNTkyLFxuICAgICAgICBcInkwXCI6IDEuNzUsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImh6XCI6IDlcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwieTBcIjogNi42LFxuICAgICAgICAgIFwiaHhcIjogNC41NDcsXG4gICAgICAgICAgXCJoelwiOiA5LjQ4MSxcbiAgICAgICAgICBcImRyb3BcIjogMC4yNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ5MFwiOiA3Ljc1LFxuICAgICAgICAgIFwiaHhcIjogMy4wMDIsXG4gICAgICAgICAgXCJoelwiOiA4LjI0NCxcbiAgICAgICAgICBcImRyb3BcIjogMC4yMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJyb29mQ2VudHJlWFwiOiAtMS41MTksXG4gICAgICBcImJhbmRcIjogMC4zNCxcbiAgICAgIFwiZmlndXJlXCI6IHtcbiAgICAgICAgXCJ4XCI6IC0xLjU4OSxcbiAgICAgICAgXCJyZXN0XCI6IDIuNjIsXG4gICAgICAgIFwic2VnXCI6IDE4LFxuICAgICAgICBcImhlYWRcIjogMS4xMixcbiAgICAgICAgXCJoZWFkTGlmdFwiOiAyLjMsXG4gICAgICAgIFwiaGVhZFRpbHRcIjogMC40NSxcbiAgICAgICAgXCJoZWFkWlwiOiA5LjUsXG4gICAgICAgIFwiZnpcIjogMC42ODcsXG4gICAgICAgIFwiZnJcIjogMS4xXG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWNsaW5pbmdCdWRkaGFIYWxsTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdSZWNsaW5pbmcgQnVkZGhhIEhhbGwnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGF0Zm9ybSBhbmQgc3RhdHVlIHBsaW50aFxuICAgKiBGb3VyIHN0ZXBwZWQgc2xhYnMgYW5kIHRoZSBmaWd1cmUncyBvd24gbG93IHBsaW50aCwgYWxsIHRoZSBzYW1lIHBhbGUgc3RvbmUgYW5kIHRoZXJlZm9yZSBPTkVcbiAgICogY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBzbGFicyBhcmUgdGhlIHBsYXRlJ3MgZm9yd2FyZCBhcHJvbjogdGhlXG4gICAqIGRlY2sgc3RlcHMgZG93biBhbmQgT1VUIG9uICtYLCB3aGljaCBleHByZXNzZXMgdGhlIHByb2plY3RpbmcgdGVycmFjZSB3aXRob3V0IGEgc2Vjb25kXG4gICAqIGNvbXBvbmVudCBvciBhIG5vdGNoZWQgcGxhbi4gKi9cbiAge1xuICAgIGNvbnN0IFAgPSBHLnBsYXRmb3JtIGFzIG51bWJlcltdW10sIFBMID0gRy5wbGludGg7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBQLm1hcCgoW3kwLCB5MSwgeDAsIHgxLCB6MCwgejFdKSA9PlxuICAgICAgYm94QXQoKHgwICsgeDEpIC8gMiwgKHkwICsgeTEpIC8gMiwgKHowICsgejEpIC8gMiwgeDEgLSB4MCwgeTEgLSB5MCwgejEgLSB6MCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKFBMLngwICsgUEwueDEpIC8gMiwgKFBMLnkwICsgUEwueTEpIC8gMiwgMCxcbiAgICAgIFBMLngxIC0gUEwueDAsIFBMLnkxIC0gUEwueTAsIFBMLmh6ICogMikpO1xuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gVGhlIHBsYXRlJ3MgcGxhdGZvcm0gaXMgc3RyZWFrZWQgYmxhY2sgYWxvbmcgaXRzIGxvd2VyIGNvdXJzZXMgYW5kIGNsZWFuIGFib3ZlIC0tIHRoZSB1c3VhbFxuICAgIC8vIGRpcmVjdGlvbiBmb3IgdGhpcyBraXQsIGFuZCB0aGUgb3Bwb3NpdGUgb2YgdGhlIG1vc3F1ZSdzIHJhaW4gd2FzaC5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCAwLCAxLjc1LCBbMC43NiwgMC43NywgMC43NV0pO1xuICAgIGFkZCgncGxhdGZvcm0nLCAnU3RvbmUgcGxhdGZvcm0gYW5kIHN0YXR1ZSBwbGludGgnLCBnZW8sICdzdG9uZScpO1xuICAgIGNvbGxpZGVyc1sncGxhdGZvcm0nXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCA1LjAsIDBdLCBoYWxmRXh0ZW50czogWzYuMTksIDUuMCwgOS42Ml0sXG4gICAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGU7IGEgbGV2ZWwgJ1xuICAgICAgICAgICArICdidWlsZGVyIGNvbGxpZGVzIHdpdGggdGhlIGhhbGwsIG5vdCB3aXRoIHRoZSBmaWd1cmUgaW5zaWRlIGl0LicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFjayB3YWxsXG4gICAqIFRoZSBvbmUgY2xvc2VkIGVsZXZhdGlvbi4gU29saWQsIGJlY2F1c2UgdGhlIGhhbGwgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgYW5kIGFuIGludGVyaW9yIHdvdWxkXG4gICAqIGNvc3QgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGJ1dCB0aGlzIHByb3AgaXMgdGhlIG9uZVxuICAgKiBjYXNlIGluIHRoZSBiYXRjaCB3aGVyZSB0aGUgaW5zaWRlIG9mIGEgd2FsbCBJUyBzZWVuLCBzdHJhaWdodCB0aHJvdWdoIHRoZSBvcGVuIGNvbG9ubmFkZSxcbiAgICogc28gaXRzIGlubmVyIGZhY2UgZ2V0cyBhIGRhcmsgY29tcG9uZW50IG9mIGl0cyBvd24gcmF0aGVyIHRoYW4gYmVpbmcgbGVmdCBhcyB3aGl0ZSByZW5kZXIuICovXG4gIHtcbiAgICBjb25zdCBXID0gRy5iYWNrV2FsbDtcbiAgICBhZGQoJ2JhY2std2FsbCcsICdCYWNrIHdhbGwnLCBib3hBdCgoVy54MCArIFcueDEpIC8gMiwgKFcueTAgKyBXLnkxKSAvIDIsIDAsXG4gICAgICBXLngxIC0gVy54MCwgVy55MSAtIFcueTAsIFcuaHogKiAyKSwgJ3N0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGludGVyaW9yIHNoYWRlXG4gICAqIFRoZSBkYXJrIHRoZSBjb2xvbm5hZGUgbG9va3MgaW50bzogdGhlIGJhY2sgd2FsbCdzIGlubmVyIGZhY2UgYW5kIHRoZSBzb2ZmaXQgYWJvdmUgdGhlIGZpZ3VyZS5cbiAgICogQm90aCBzdGFuZCBQUk9VRCBvZiB0aGUgc3VyZmFjZXMgdGhleSBzaXQgb24sIG5vdCByZWNlc3NlZCBpbnRvIHRoZW0gLS0gdGhvc2Ugc3VyZmFjZXMgYXJlXG4gICAqIHNvbGlkIG1hc3Nlcywgc28gYSBwYW5lbCBzdW5rIGludG8gb25lIGlzIGluc2lkZSB0aGUgc29saWQgYW5kIGludmlzaWJsZS4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLmJhY2tXYWxsLCBDID0gRy5jb2x1bW47XG4gICAgYWRkKCdzaGFkZScsICdJbnRlcmlvciBzaGFkZScsIG1lcmdlR2VvcyhbXG4gICAgICAvLyBUb3AgYXQgNi41NCByYXRoZXIgdGhhbiA2LjYwLiBJdCB3YXMgdGhlIFdBTEwgcGFuZWwsIG5vdCB0aGUgc29mZml0LCB0aGF0IHNoYXJlZCB0aGVcbiAgICAgIC8vIGNvbHVtbiBoZWFkcycgcGxhbmUgLS0gdHdlbHZlIHBhaXJzLCBvbmUgcGVyIGluc3RhbmNlIC0tIGFuZCBtb3ZpbmcgdGhlIHNvZmZpdCBmaXJzdCBmaXhlZFxuICAgICAgLy8gbm90aGluZywgYmVjYXVzZSBib3RoIGJveGVzIHJlYWNoZWQgdGhlIHNhbWUgaGVpZ2h0IGZvciBkaWZmZXJlbnQgcmVhc29ucy5cbiAgICAgIGJveEF0KFcueDEgKyAwLjA0LCAoVy55MCArIFcueTEpIC8gMiArIDAuMTQsIDAsIDAuMDgsIFcueTEgLSBXLnkwIC0gMC40MCwgVy5oeiAqIDIgLSAwLjYwKSxcbiAgICAgIC8vIFRoZSBzb2ZmaXQncyB0b3Agc2l0cyBhdCA2LjU0LCBub3QgbGV2ZWwgd2l0aCB0aGUgY29sdW1uIGhlYWRzIGF0IDYuNjA6IGxldmVsLCBpdHMgdG9wXG4gICAgICAvLyBmYWNlIGFuZCBldmVyeSBjb2x1bW4ncyB0b3AgZmFjZSBhcmUgdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSAtLSB0d2VsdmUgcGFpcnMgYXRcbiAgICAgIC8vIG9uY2UsIGFuZCB0aGUgY29sdW1ucyBhcmUgYW4gSW5zdGFuY2VkTWVzaCBzbyBlYWNoIGluc3RhbmNlIGlzIGNoZWNrZWQgc2VwYXJhdGVseS5cbiAgICAgIGJveEF0KChXLngxICsgQy5mcm9udFgpIC8gMiwgQy55MSAtIDAuMTUsIDAsIEMuZnJvbnRYIC0gVy54MSAtIDAuNDAsIDAuMTAsIFcuaHogKiAyIC0gMC42MCksXG4gICAgXSksICdkYXJrJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbG9ubmFkZVxuICAgKiBUd2VsdmUgc3F1YXJlIGNvbHVtbnMgYXMgT05FIEluc3RhbmNlZE1lc2ggLS0gZWlnaHQgYWxvbmcgdGhlIG9wZW4gZnJvbnQgYW5kIHR3byBhdCBlYWNoIGVuZC5cbiAgICogVGhlIHJlZ2lzdHJ5IG5vdGVzIHJlcXVpcmUgdGhlIGxvbmcgZnJvbnQgdG8gYmUgYW4gb3BlbiBjb2xvbm5hZGUgcmF0aGVyIHRoYW4gYSB3YWxsLCBiZWNhdXNlXG4gICAqIGEgY2xvc2VkIGxvbmcgbG93IGJveCBoYXMgbm8gcmVjb2duaXNhYmxlIGZlYXR1cmUgYXQgYWxsIGFuZCByZWFkcyBhcyBhIHdhcmVob3VzZS4gKi9cbiAge1xuICAgIGNvbnN0IEMgPSBHLmNvbHVtbjtcbiAgICBjb25zdCBoID0gQy55MSAtIEMueTA7XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgwLCAwLCAwLCBDLmh3ICogMiwgaCwgQy5odyAqIDIpLFxuICAgICAgLy8gQSBjYXBpdGFsIGJsb2NrIGF0IHRoZSBoZWFkLCBzdW5rIGludG8gdGhlIHNoYWZ0IHNvIG5vIHR3byB0b3AgZmFjZXMgc2hhcmUgYSBwbGFuZS5cbiAgICAgIGJveEF0KDAsIGggLyAyIC0gMC4xNSwgMCwgQy5odyAqIDIuMzUsIDAuMzAsIEMuaHcgKiAyLjM1KSxcbiAgICBdKTtcbiAgICBjb25zdCBjeSA9IChDLnkwICsgQy55MSkgLyAyO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgQy5mcm9udENvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHogPSAtQy5mcm9udEhhbGZaICsgKDIgKiBDLmZyb250SGFsZlogKiBpKSAvIChDLmZyb250Q291bnQgLSAxKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKEMuZnJvbnRYLCBjeSwgeikpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHggb2YgQy5lbmRYIGFzIG51bWJlcltdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBjeSwgLUMuZW5kWikpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgY3ksIEMuZW5kWikpO1xuICAgIH1cbiAgICBhZGRJbnN0KCdjb2x1bW5zJywgJ0NvbG9ubmFkZScsIHVuaXQsICdzdG9uZScsIG1hdHMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb29mXG4gICAqIFR3byBISVBQRUQgdGllcnMuIFNlZSB0aGUgbm90ZSBvbiAndGllcnMnIGluIHRoZSBjb25maWcgZm9yIHdoeSB0aGlzIGlzIGEgaGlwIGFuZCBub3QgdGhlXG4gICAqIGdhYmxlIGl0IHVzZWQgdG8gYmUsIGFuZCBmb3IgaG93IHRoZSB0d28gdGllcnMgc3RhY2suXG4gICAqXG4gICAqIEVhY2ggdGllciBpcyBUV08gY29uZXMsIG5vdCBvbmUsIGJlY2F1c2UgdGhlIHBsYXRlJ3MgdGlsZSBmaWVsZCBpcyBiYW5kZWQ6IGEgZ29sZC9vY2hyZSBjb3Vyc2VcbiAgICogcnVucyBwYXJhbGxlbCB0byB0aGUgZWF2ZXMgd2l0aCB0aGUgcmVkIGZpZWxkIGFib3ZlIGl0LiBUaGUgZ29sZCBjb25lIGlzIHRoZSB3aG9sZSB0aWVyOyB0aGVcbiAgICogcmVkIGNvbmUgc3RhcnRzIG9uZSBiYW5kLWhlaWdodCB1cCBhbmQgaXMgZGVsaWJlcmF0ZWx5IGJ1aWx0IDQwIG1tIFBST1VEIG9mIHRoZSBnb2xkIHN1cmZhY2VcbiAgICogaXQgY292ZXJzLCBzbyB0aGUgdHdvIG5ldmVyIHNoYXJlIGEgcGxhbmUuIEJ1aWx0IGZsdXNoIHRoZXkgd291bGQgYmUgY29pbmNpZGVudCBjby1mYWNpbmdcbiAgICogc3VyZmFjZXMgb3ZlciB0aGUgZW50aXJlIHJvb2YgLS0gdGhlIGxhcmdlc3Qgei1maWdodCBpdCBpcyBwb3NzaWJsZSB0byBhdXRob3Igb24gdGhpcyBwcm9wIC0tXG4gICAqIGFuZCBidWlsdCBpbnNldCB0aGUgcmVkIHdvdWxkIHNpdCBpbnNpZGUgdGhlIGdvbGQgYW5kIG5ldmVyIGJlIHNlZW4gYXQgYWxsLiBTdGFuZGluZyBpdCBwcm91ZFxuICAgKiBhbHNvIHJlYWRzIGNvcnJlY3RseTogYSB0aWxlIGNvdXJzZSBsYXBzIHRoZSBvbmUgYmVsb3cgaXQuICovXG4gIHtcbiAgICBjb25zdCBUID0gRy50aWVycyBhcyB7IHkwOiBudW1iZXI7IGh4OiBudW1iZXI7IGh6OiBudW1iZXI7IGRyb3A6IG51bWJlciB9W107XG4gICAgY29uc3QgQiA9IEcuYmFuZCwgY3ggPSBHLnJvb2ZDZW50cmVYLCBQID0gRy5waXRjaDtcbiAgICBjb25zdCByZWQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBnb2xkOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCB0IG9mIFQpIHtcbiAgICAgIC8vIFRoZSBnb2xkIGJhbmQ6IHRoZSB0aWVyJ3MgZnVsbCBmb290cHJpbnQsIGZyb20gaXRzIGVhdmVzIHRvIGl0cyBvd24gYXBleC5cbiAgICAgIGNvbnN0IGcxID0gaGlwUm9vZih0Lmh4LCB0Lmh6LCB0Lmh6IC0gdC5oeCwgdC55MCwgdC55MCArIFAgKiB0Lmh4LCAxLCAzLCB0LmRyb3AsIDApO1xuICAgICAgZzEudHJhbnNsYXRlKGN4LCAwLCAwKTtcbiAgICAgIGdvbGQucHVzaChnMSk7XG4gICAgICAvLyBUaGUgcmVkIGZpZWxkOiBpbnNldCBieSBvbmUgYmFuZCBvZiBSSVNFIChiYW5kIC8gcGl0Y2ggb2YgcnVuKSwgdGhlbiBwdXNoZWQgNDAgbW0gYmFjayBvdXRcbiAgICAgIC8vIHNvIGl0IGxhcHMgdGhlIGdvbGQgcmF0aGVyIHRoYW4gbWVldGluZyBpdC5cbiAgICAgIGNvbnN0IGh4ID0gdC5oeCAtIEIgLyBQICsgMC4wNCwgaHogPSB0Lmh6IC0gQiAvIFAgKyAwLjA0O1xuICAgICAgY29uc3QgZzIgPSBoaXBSb29mKGh4LCBoeiwgaHogLSBoeCwgdC55MCArIEIsIHQueTAgKyBCICsgUCAqIGh4LCAxLCAzLCB0LmRyb3AgKiAwLjUsIDApO1xuICAgICAgZzIudHJhbnNsYXRlKGN4LCAwLCAwKTtcbiAgICAgIHJlZC5wdXNoKGcyKTtcbiAgICB9XG4gICAgYWRkKCdyb29mLXRpbGUnLCAnVGlsZSByb29mIGZpZWxkcycsIG1lcmdlR2VvcyhyZWQpLCAndGlsZScpO1xuICAgIGFkZCgncm9vZi1iYW5kJywgJ0dvbGQgZWF2ZXMgYmFuZHMnLCBtZXJnZUdlb3MoZ29sZCksICdiYW5kJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGhpcCByaWJzIGFuZCByaWRnZVxuICAgKiBBIGhpcCByb29mJ3MgY29ybmVycyBjYXJyeSBhIGNhcHBlZCByaWIsIGFuZCBpdHMgcmlkZ2UgYSBjYXBwZWQgbGluZSAtLSBib3RoIHdoaXRlLWdyZXkgc3RvbmVcbiAgICogaW4gdGhlIHBsYXRlLCBzdGFuZGluZyB3ZWxsIHByb3VkIG9mIHRoZSB0aWxlLiBUaGV5IGFyZSB3aGF0IG1ha2UgdGhlIGZvcm0gcmVhZCBhcyBhIGhpcCBmcm9tXG4gICAqIGFueSBhbmdsZSByYXRoZXIgdGhhbiBhcyBhIHNtb290aCBweXJhbWlkLCBhbmQgb24gYSBsb3ctcG9seSByb29mIHRoZXkgYXJlIG1vc3Qgb2YgdGhlXG4gICAqIHNpbGhvdWV0dGUncyBpbmZvcm1hdGlvbi4gVGhleSByZXBsYWNlIHRoZSBiYXJnZWJvYXJkcywgd2hpY2ggd2VyZSByYWtlIGJvYXJkcyBmb3IgYSBnYWJsZVxuICAgKiB0aGF0IG5vIGxvbmdlciBleGlzdHMuXG4gICAqXG4gICAqIEVhY2ggcmliIGlzIGFpbWVkIHBvaW50IHRvIHBvaW50IHdpdGggYSBxdWF0ZXJuaW9uIHJhdGhlciB0aGFuIGNvbXBvc2VkIGZyb20gYSBwaXRjaCBhbmdsZS5cbiAgICogVGhhdCBpcyBkZWxpYmVyYXRlOiB0aGUgcHJldmlvdXMgYnVpbGQgY2FycmllZCBhIHJlYWwgYnVnIHdoZXJlIGEgcmFrZSBib2FyZCB3YXMgcm90YXRlZCBieVxuICAgKiBhdGFuKHBpdGNoKSBpbnN0ZWFkIG9mIGF0YW4yKHJ1biwgcmlzZSkgLS0gdGhyZWUgZGVncmVlcyBvdXQgYXQgNDYgZGVncmVlcyBhbmQgdHdlbnR5LWZvdXIgb3V0XG4gICAqIGF0IHRoaXMgaGFsbCdzIDMzIC0tIGFuZCBhaW1pbmcgYSBib3ggYXQgdHdvIGVuZHBvaW50cyBjYW5ub3QgZXhwcmVzcyB0aGF0IG1pc3Rha2UgYXQgYWxsLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudGllcnMgYXMgeyB5MDogbnVtYmVyOyBoeDogbnVtYmVyOyBoejogbnVtYmVyOyBkcm9wOiBudW1iZXIgfVtdO1xuICAgIGNvbnN0IGN4ID0gRy5yb29mQ2VudHJlWCwgUCA9IEcucGl0Y2g7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBhaW0gPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCB3OiBudW1iZXIsIGg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5WZWN0b3IzKGJbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXSwgYlsyXSAtIGFbMl0pO1xuICAgICAgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgbGVuLCBoKTtcbiAgICAgIGcuYXBwbHlRdWF0ZXJuaW9uKG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5jbG9uZSgpLm5vcm1hbGl6ZSgpKSk7XG4gICAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIChhWzJdICsgYlsyXSkgLyAyKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH07XG4gICAgZm9yIChjb25zdCB0IG9mIFQpIHtcbiAgICAgIGNvbnN0IGFwZXggPSB0LnkwICsgUCAqIHQuaHgsIHJ6ID0gdC5oeiAtIHQuaHg7XG4gICAgICAvLyBGb3VyIGhpcHMsIHJpZGdlIGVuZCB0byBlYXZlIGNvcm5lci4gTGlmdGVkIDYwIG1tIGFsb25nIHRoZSBzdXJmYWNlIG5vcm1hbCdzIHZlcnRpY2FsXG4gICAgICAvLyBjb21wb25lbnQgc28gdGhlIHJpYiBzaXRzIE9OIHRoZSB0aWxlIHJhdGhlciB0aGFuIGhhbGYgaW5zaWRlIGl0LlxuICAgICAgLyogVEhFIEhJUCBJUyBOT1QgQSBTVFJBSUdIVCBMSU5FLCB3aGljaCBpcyB3aHkgdGhlIGZpcnN0IHR3byBhdHRlbXB0cyBsZWZ0IHRoZSByaWJzXG4gICAgICAgKiBoYW5naW5nIG9mZiB0aGUgcm9vZi4gaGlwUm9vZiBzaGFwZXMgaXRzIHJpbmdzIHdpdGggJ291dCcgPSAxICsgMC4wNDUgKiBnLCB3aGVyZSBnIGZhbGxzXG4gICAgICAgKiBmcm9tIDEgYXQgdGhlIGVhdmVzIHRvIDAgYnkgdCA9IDAuMzQgLS0gaXQgaXMgdGhlIGNvcm5lci1saWZ0IHNoYXBpbmcgYW5kIGl0IGlzIGFwcGxpZWRcbiAgICAgICAqIHdoZXRoZXIgb3Igbm90IGNvcm5lckxpZnQgaXMgemVyby4gU28gdGhlIGNvcm5lciBwYXRoIGJvd3MgT1VUV0FSRCBvdmVyIGl0cyBsb3dlciB0aGlyZFxuICAgICAgICogYW5kIGlzIHN0cmFpZ2h0IGFib3ZlIGl0LCBhbmQgYSBzaW5nbGUgYm94IGZyb20gcmlkZ2UgdG8gZWF2ZSBjb3JuZXIgY3V0cyB0aGUgY2hvcmQgb2ZcbiAgICAgICAqIHRoYXQgYm93OiBpdCBsZWF2ZXMgdGhlIHN1cmZhY2UganVzdCB3aGVyZSBpdCBpcyBtb3N0IHZpc2libGUsIGF0IHRoZSBlYXZlcy5cbiAgICAgICAqXG4gICAgICAgKiBTbyB3YWxrIHRoZSBTQU1FIHBhcmFtZXRyaXNhdGlvbiB0aGUgc3VyZmFjZSB1c2VzIGFuZCBjaGFpbiBzaG9ydCBib3hlcyBhbG9uZyBpdC4gVGhlXG4gICAgICAgKiBsZXNzb24gZ2VuZXJhbGlzZXMgLS0gd2hlbiBhIGhlbHBlciBzaGFwZXMgYSBzdXJmYWNlLCByZWFkIGl0cyBzaGFwaW5nIGZ1bmN0aW9uIHJhdGhlclxuICAgICAgICogdGhhbiBpdHMgYXJndW1lbnRzLCBiZWNhdXNlIHRoZSBhcmd1bWVudHMgYXJlIG5vdCB3aGVyZSB0aGUgc2hhcGUgaXMuICovXG4gICAgICBjb25zdCBjb3JuZXIgPSAodTogbnVtYmVyLCB4czogbnVtYmVyLCB6czogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IGYgPSAxIC0gdTtcbiAgICAgICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB1IC8gMC4zNCksIDIpO1xuICAgICAgICBjb25zdCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgICAgICByZXR1cm4gW2N4ICsgeHMgKiB0Lmh4ICogZiAqIG91dCxcbiAgICAgICAgICAgICAgICB0LnkwICsgKGFwZXggLSB0LnkwKSAqIHUgKyAwLjA2LFxuICAgICAgICAgICAgICAgIHpzICogKHJ6ICsgKHQuaHogLSByeikgKiBmKSAqIG91dF07XG4gICAgICB9O1xuICAgICAgY29uc3QgVVMgPSBbMCwgMC4xMCwgMC4yMCwgMC4zNCwgMC42MiwgMV07XG4gICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBVUy5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgICAgIHBhcnRzLnB1c2goYWltKGNvcm5lcihVU1trXSwgeHMsIHpzKSwgY29ybmVyKFVTW2sgKyAxXSwgeHMsIHpzKSwgMC4yNiwgMC4yMCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gVGhlIHJpZGdlIGNhcC5cbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsIGFwZXggKyAwLjA5LCAwLCAwLjMwLCAwLjIwLCByeiAqIDIgKyAwLjMwKSk7XG4gICAgfVxuICAgIGFkZCgnaGlwLXJpYnMnLCAnSGlwIHJpYnMgYW5kIHJpZGdlIGNhcHMnLCBtZXJnZUdlb3MocGFydHMpLCAnc3RvbmUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIHJlY2xpbmluZyBmaWd1cmVcbiAgICogVGhlIGlkZW50aXR5IG9mIHRoZSB3aG9sZSBhc3NldCwgYW5kIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUga2l0LiBUaGUgcGxhdGUgc2hvd3MgdGhlXG4gICAqIGNhbm9uaWNhbCBwYXJpbmlydmFuYSBwb3NlOiB0aGUgZmlndXJlIGxpZXMgb24gaXRzIFJJR0hUIHNpZGUgZmFjaW5nIHRoZSBvcGVuIGNvbG9ubmFkZSAoK1gpLFxuICAgKiB0aGUgaGVhZCBwcm9wcGVkIG9uIHRoZSByaWdodCBoYW5kIHdpdGggdGhlIGVsYm93IGRvd24gb24gYSBjdXNoaW9uLCB0aGUgbGVmdCBhcm0gZHJhcGVkIGRvd25cbiAgICogdGhlIGZyb250IG9mIHRoZSBib2R5IHRvIHJlc3Qgb24gdGhlIHRoaWdoLCB0aGUgbGVncyBzdGFja2VkIG9uZSBvbiB0aGUgb3RoZXIsIGFuZCB0aGUgdHdvXG4gICAqIGZlZXQgc3F1YXJlZCBvZmYgd2l0aCB0aGVpciBzb2xlcyBmYWNpbmcgZG93biB0aGUgaGFsbC5cbiAgICpcbiAgICogTHlpbmcgb24gdGhlIHJpZ2h0IHNpZGUgYW5kIGZhY2luZyArWCBwdXRzIHRoZSBoZWFkIGF0ICtaOiBib2R5IHVwID0gcmlnaHQgeCBmb3J3YXJkID1cbiAgICogKC1ZKSB4ICgrWCkgPSArWi4gRnJvbSB0aGUgZnJvbnQgdGhlIGhlYWQgaXMgdGhlcmVmb3JlIGF0IHRoZSB2aWV3ZXIncyBMRUZULCB3aGljaCBpcyB3aGVyZVxuICAgKiB0aGUgcGxhdGUgaGFzIGl0LiBUaGUgZmlyc3QgYnVpbGQgcHV0IHRoZSBoZWFkIGF0IC1aLCB3aGljaCBmb3IgYSByaWdodC1zaWRlIGZpZ3VyZSBpcyBhXG4gICAqIGZpZ3VyZSBmYWNpbmcgdGhlIGJhY2sgd2FsbC5cbiAgICpcbiAgICogVGhlIGZpcnN0IGJ1aWxkIHdhcyBhbHNvIG9uZSBzeW1tZXRyaWMgdHViZSBmcm9tIGhlYWQgdG8gZmVldCwgYW5kIGEgc3ltbWV0cmljIHR1YmUgaGFzIG5vXG4gICAqIHNpZGU6IGl0IHJlYWQgYXMgYSBmaWd1cmUgbHlpbmcgb24gaXRzIGJhY2suIFdoYXQgc2F5cyBcIm9uIGl0cyBzaWRlXCIgYXQgcHJvcCBkaXN0YW5jZSBpc1xuICAgKiBhc3ltbWV0cnkgLS0gdHdvIHN0YWNrZWQgbGVncyB3aXRoIGEgZ3Jvb3ZlIGJldHdlZW4gdGhlbSwgYSBiZW50IGFybSBzdGFuZGluZyBvbiBpdHMgZWxib3csXG4gICAqIGFuIHVwcmlnaHQgaGVhZCwgYW5kIGEgdG9yc28gdGFsbGVyIHRoYW4gaXQgaXMgZGVlcCBiZWNhdXNlIHRoZSBzaG91bGRlcnMgYXJlIG5vdyB0aGVcbiAgICogdmVydGljYWwgYXhpcy4gRXZlcnkgcmVzdGluZyBwYXJ0IHN0aWxsIGRlcml2ZXMgaXRzIGhlaWdodCBmcm9tIGl0cyBvd24gcmFkaXVzXG4gICAqIChjeSA9IHBsaW50aCB0b3AgKyByKSwgc28gaXQgc2l0cyBPTiB0aGUgcGxpbnRoIHJhdGhlciB0aGFuIGluIGl0IG9yIG92ZXIgaXQuICovXG4gIHtcbiAgICBjb25zdCBGID0gRy5maWd1cmUsIFBMID0gRy5wbGludGg7XG4gICAgY29uc3QgcmVzdCA9IFBMLnkxO1xuICAgIGNvbnN0IFggPSBGLng7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcblxuICAgIC8vIEEgbGltYiBzZWdtZW50IGJldHdlZW4gdHdvIHBvaW50czogYSB0YXBlcmVkIGN5bGluZGVyIGFpbWVkIGZyb20gYSB0byBiLiBVc2VkIHdoZXJlIGEgbGltYlxuICAgIC8vIHJ1bnMgbW9zdGx5IFVQIHJhdGhlciB0aGFuIGFsb25nIHRoZSBoYWxsLCB3aGljaCB0dWJlQWxvbmcgKHJpbmdzIHN0YWNrZWQgYWxvbmcgWikgY2Fubm90IGRvLlxuICAgIGNvbnN0IGxpbWIgPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCBzZWcgPSAxMCkgPT4ge1xuICAgICAgY29uc3QgZCA9IG5ldyBUSFJFRS5WZWN0b3IzKGJbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXSwgYlsyXSAtIGFbMl0pO1xuICAgICAgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyMSwgcjAsIGxlbiwgc2VnKTtcbiAgICAgIGcuYXBwbHlRdWF0ZXJuaW9uKG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKSk7XG4gICAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIChhWzJdICsgYlsyXSkgLyAyKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH07XG5cbiAgICAvKiBCb2R5OiBPTkUgY29udGludW91cyB0dWJlIGZyb20gdGhlIG5lY2sgdG8gdGhlIGFua2xlcywgc28gdGhlcmUgaXMgbm8gaGlwLXRvLXRoaWdoIGp1bmN0aW9uXG4gICAgICogdG8gc2hvdyBhIHN0ZXAgb3IgYSBjcmVhc2UuIFt6LCByeCwgcnksIGxlYW4sIGN5XSAtLSByeSA+IHJ4IHRocm91Z2hvdXQgYmVjYXVzZSBhIGJvZHkgb25cbiAgICAgKiBpdHMgc2lkZSBzdGFuZHMgb24gaXRzIHNob3VsZGVyIHdpZHRoLCBhbmQgdGhlIGxlZ3MgYXJlIGEgdGFsbCBlbGxpcHNlICh0d28gbGVncyBzdGFja2VkKVxuICAgICAqIHJhdGhlciB0aGFuIGEgcGFpciBvZiBwaXBlczogdGhlIHBsYXRlIHNob3dzIHRoZW0gYXMgb25lIHNvZnQgbWFzcyB3aXRoIGEgc2hhbGxvdyBjcmVhc2UuXG4gICAgICogbGVhbiByb2xscyB0aGUgY2hlc3QgYSBsaXR0bGUgdG93YXJkIHRoZSBjb2xvbm5hZGUuIFRoZSBuZWNrIHN0YXRpb25zIGNhcnJ5IHRoZWlyIG93blxuICAgICAqIGNlbnRyZSBoZWlnaHQgYW5kIGVuZCBJTlNJREUgdGhlIGhlYWQuICovXG4gICAgY29uc3QgdG9yc286IG51bWJlcltdW10gPSBbXG4gICAgICBbOS4zMCwgMC4zNiwgMC40MCwgMC4wMCwgMS45NV0sIC8vIGNsb3NlcyBpbnNpZGUgdGhlIGhlYWRcbiAgICAgIFs4LjYwLCAwLjYwLCAwLjY2LCAwLjAwLCAxLjc1XSwgLy8gbmVja1xuICAgICAgWzcuOTAsIDAuOTIsIDEuMTYsIDAuMDUsIDBdLFxuICAgICAgWzYuOTAsIDEuMDgsIDEuMzgsIDAuMTAsIDBdLCAvLyBzaG91bGRlclxuICAgICAgWzUuNjAsIDEuMTIsIDEuMzQsIDAuMTQsIDBdLCAvLyBjaGVzdFxuICAgICAgWzMuNjAsIDEuMDAsIDEuMTgsIDAuMTAsIDBdLCAvLyB3YWlzdFxuICAgICAgWzEuNjAsIDEuMTAsIDEuMzIsIDAuMDYsIDBdLFxuICAgICAgWzAuMDAsIDEuMTYsIDEuNDAsIDAuMDQsIDBdLCAvLyBoaXBcbiAgICAgIFstMS42MCwgMS4wMiwgMS4zNCwgMC4wMiwgMF0sXG4gICAgICBbLTMuNDAsIDAuOTAsIDEuMjYsIDAuMDIsIDBdLCAvLyB0aGlnaFxuICAgICAgWy01LjYwLCAwLjc2LCAxLjA2LCAwLjA0LCAwXSwgLy8ga25lZVxuICAgICAgWy03LjYwLCAwLjcwLCAwLjk4LCAwLjAyLCAwXSwgLy8gY2FsZlxuICAgICAgWy05LjYwLCAwLjU2LCAwLjgyLCAwLjAwLCAwXSxcbiAgICAgIFstMTAuNjAsIDAuNTQsIDAuODAsIDAuMDAsIDBdLCAvLyBhbmtsZSwgaW5zaWRlIHRoZSBmZWV0XG4gICAgXTtcbiAgICBjb25zdCB0b3Jzb1N0ID0gdG9yc28ubWFwKChbeiwgcngsIHJ5LCBsZWFuLCBjeV0pID0+IFt6LCBYICsgbGVhbiwgcmVzdCArIChjeSB8fCByeSksIHJ4LCByeV0pO1xuICAgIHBhcnRzLnB1c2godHViZUFsb25nKHRvcnNvU3QsIEYuc2VnKSk7XG5cbiAgICAvKiBBIHBvaW50IGp1c3QgcHJvdWQgb2YgdGhlIGJvZHkgc3VyZmFjZSBhdCBzdGF0aW9uIHosIGF0IGFuIGFuZ2xlIHBoaSBmcm9tIHRoZSBjcm93biBvZiB0aGVcbiAgICAgKiBib2R5IHRvd2FyZCB0aGUgY29sb25uYWRlLiBFdmVyeXRoaW5nIHRoYXQgbGllcyBPTiB0aGUgYm9keSAtLSB0aGUgdXBwZXIgbGVnJ3MgcmlkZ2UsIHRoZVxuICAgICAqIGxlZnQgYXJtLCB0aGUgaGFuZCBvbiB0aGUgdGhpZ2ggLS0gaXMgcGxhY2VkIHdpdGggdGhpcywgc28gaXQgZm9sbG93cyB0aGUgc2VjdGlvbiB3aGVyZXZlclxuICAgICAqIHRoZSBzZWN0aW9uIGNoYW5nZXMuICovXG4gICAgY29uc3Qgb25Cb2R5ID0gKHo6IG51bWJlciwgcGhpOiBudW1iZXIsIHI6IG51bWJlciwgcHJvdWQgPSAwLjMwKTogbnVtYmVyW10gPT4ge1xuICAgICAgY29uc3QgaSA9IHRvcnNvLmZpbmRJbmRleCgocykgPT4gc1swXSA8PSB6KTtcbiAgICAgIGNvbnN0IGEgPSB0b3Jzb1tNYXRoLm1heChpIC0gMSwgMCldLCBiID0gdG9yc29bTWF0aC5tYXgoaSwgMCldO1xuICAgICAgY29uc3QgdCA9IGFbMF0gPT09IGJbMF0gPyAwIDogKGFbMF0gLSB6KSAvIChhWzBdIC0gYlswXSk7XG4gICAgICBjb25zdCBsciA9IChrOiBudW1iZXIpID0+IGFba10gKyAoYltrXSAtIGFba10pICogdDtcbiAgICAgIGNvbnN0IHJ4ID0gbHIoMSksIHJ5ID0gbHIoMiksIGN4ID0gWCArIGxyKDMpLCBjeSA9IHJlc3QgKyByeTtcbiAgICAgIGNvbnN0IHMgPSBNYXRoLnNpbihwaGkpLCBjID0gTWF0aC5jb3MocGhpKTtcbiAgICAgIHJldHVybiBbeiwgY3ggKyAocnggKyByICogcHJvdWQpICogcywgY3kgKyAocnkgKyByICogcHJvdWQpICogYywgciwgcl07XG4gICAgfTtcblxuICAgIC8qIFRoZSB1cHBlciAobGVmdCkgbGVnOiBhIHJpZGdlIHJpZGluZyB0aGUgZnJvbnQtdG9wIG9mIHRoZSBsZWcgbWFzcyBmcm9tIHRoZSBoaXAgdG8gdGhlXG4gICAgICogYW5rbGUsIG1vc3RseSBidXJpZWQsIHNvIHRoZSBwYWlyIHJlYWRzIGFzIHR3byBsZWdzIHN0YWNrZWQgd2l0aCBhIHNvZnQgY3JlYXNlIGJldHdlZW4gYW5kXG4gICAgICogdGhlIGtuZWUgb2YgdGhlIHRvcCBsZWcgYnJlYWtzIHRoZSBvdXRsaW5lIGEgbGl0dGxlIGFoZWFkIG9mIHRoZSBsb3dlci4gKi9cbiAgICBwYXJ0cy5wdXNoKHR1YmVBbG9uZyhbXG4gICAgICBvbkJvZHkoLTEuMDAsIDAuOTUsIDAuMTAsIC0zLjApLFxuICAgICAgb25Cb2R5KC0xLjgwLCAwLjk1LCAwLjUyLCAtMC4zMCksXG4gICAgICBvbkJvZHkoLTMuNjAsIDAuOTgsIDAuNTQsIC0wLjIwKSxcbiAgICAgIG9uQm9keSgtNS42MCwgMS4wMiwgMC40OCwgLTAuMTApLCAvLyBrbmVlXG4gICAgICBvbkJvZHkoLTcuNjAsIDEuMDAsIDAuNDQsIC0wLjIwKSxcbiAgICAgIG9uQm9keSgtOS42MCwgMC45OCwgMC4zNiwgLTAuMzApLFxuICAgICAgb25Cb2R5KC0xMC40MCwgMC45OCwgMC4zNCwgLTAuNDApLFxuICAgIF0sIDEyKSk7XG5cbiAgICAvKiBGZWV0OiBzdGFja2VkIGRpcmVjdGx5IG9uZSBvbiB0aGUgb3RoZXIgYXMgdGhlIHBsYXRlIGhhcyB0aGVtLCB0b2VzIHRvd2FyZCB0aGUgY29sb25uYWRlLFxuICAgICAqIHNvbGVzIGFzIGZsYXQgcGxhdGVzIGZhY2luZyAtWi4gVGhlIHNvbGVzIGFyZSBhIGZlYXR1cmUgaW4gdGhlaXIgb3duIHJpZ2h0IG9uIGEgcmVjbGluaW5nXG4gICAgICogQnVkZGhhIC0tIHRoZXkgY2FycnkgdGhlIDEwOCBhdXNwaWNpb3VzIG1hcmtzIC0tIHNvIHRoZXkgc3RheSBhIHBsYXRlIGFuZCB0aGUgdG9lIGNvbWIgaXNcbiAgICAgKiByZWFsIGdlb21ldHJ5IHN0YW5kaW5nIHByb3VkIG9mIHRoZSBpbnN0ZXAuIFRoZSB0b2VzIGFyZSBpbnNldCBpbiBaIHNvIHRoZWlyIGZhY2VzIG5ldmVyXG4gICAgICogc2hhcmUgdGhlIHNvbGUncyBwbGFuZSwgYW5kIHRoZSB1cHBlciBmb290IHNpbmtzIGEgaGFpciBpbnRvIHRoZSBsb3dlciBzbyBubyBmYWNlIGlzIHNoYXJlZC4gKi9cbiAgICBmb3IgKGNvbnN0IFtmeCwgZnldIG9mIFtbWCArIDAuNDUsIHJlc3QgKyAwLjQxXSwgW1ggKyAwLjQ1LCByZXN0ICsgMC40MSArIDAuODBdXSkge1xuICAgICAgcGFydHMucHVzaChib3hBdChmeCwgZnksIC0xMC45NSwgMi4xMCwgMC44MiwgMC45MCkpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHBhcnRzLnB1c2goYm94QXQoZnggKyAxLjIwLCBmeSAtIDAuMzAgKyBpICogMC4xNSwgLTEwLjk2LCAwLjM2LCAwLjEyLCAwLjgyKSk7XG4gICAgfVxuXG4gICAgLyogSGVhZDogYW4gZWxsaXBzb2lkIGJ1aWx0IHVwcmlnaHQgaW4gaXRzIG93biBmcmFtZSAtLSB1c2huaXNoYSBvbiB0aGUgY3Jvd24sIGxvbmcgZWFyIGxvYmVzXG4gICAgICogb24gdGhlIHNpZGVzLCBhIG5vc2Ugb24gdGhlIGZhY2UgLS0gdGhlbiB0aWx0ZWQgc28gdGhlIGNyb3duIGxlYW5zIGJhY2sgdG93YXJkIHRoZSBoZWFkIGVuZFxuICAgICAqIG9mIHRoZSBoYWxsLCB0aGUgd2F5IGEgcHJvcHBlZCBoZWFkIGRvZXMuIFRoZSBmYWNlIHN0YXlzIHRvd2FyZCArWC4gVGhlIHVzaG5pc2hhIGlzIHRoZVxuICAgICAqIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIGZlYXR1cmUgb2YgYSBCdWRkaGEgZmlndXJlIGF0IGFueSBkaXN0YW5jZTsgd2l0aG91dCBpdCB0aGUgaGVhZCBpc1xuICAgICAqIGEgaGVhZC4gSXRzIHRpcCBsYW5kcyBhdCA2LjMyIG0sIHVuZGVyIHRoZSBzb2ZmaXQgYXQgNi40NCAtLSB0aGUgaGVhZCBpcyBzaXplZCB0byB0aGUgcGxhdGUsXG4gICAgICogd2hlcmUgaXQgc3RhbmRzIG5lYXJseSBhcyB0YWxsIGFzIHRoZSBzaG91bGRlciwgYW5kIGl0cyBsaWZ0IGlzIHdoYXQgdGhlIHNvZmZpdCBzZXRzLiAqL1xuICAgIHtcbiAgICAgIGNvbnN0IFIgPSBGLmhlYWQ7XG4gICAgICBjb25zdCBoZWFkID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIDE2LCAxMik7XG4gICAgICBoZWFkLnNjYWxlKFIgKiAwLjkyLCBSICogMS4wMiwgUiAqIDAuOTUpO1xuICAgICAgY29uc3QgaHA6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbaGVhZF07XG4gICAgICBocC5wdXNoKGxhdGhlKFtbMCwgMF0sIFswLjMwLCAwLjA1XSwgWzAuMzMsIDAuMTZdLCBbMC4yMSwgMC4zMF0sIFswLjEwLCAwLjQwXSwgWzAsIDAuNDhdXSwgMTIpXG4gICAgICAgIC50cmFuc2xhdGUoMCwgUiAqIDAuOTYsIDApKTtcbiAgICAgIGZvciAoY29uc3QgcyBvZiBbLTEsIDFdKSBocC5wdXNoKGJveEF0KDAuMDQsIC0wLjEwLCBzICogUiAqIDAuOTMsIDAuMjgsIDAuNzAsIDAuMTYpKTtcbiAgICAgIGhwLnB1c2goYm94QXQoUiAqIDAuOTAsIC0wLjA0LCAwLCAwLjMwLCAwLjQwLCAwLjI0KSk7XG4gICAgICBjb25zdCBnID0gbWVyZ2VHZW9zKGhwKTtcbiAgICAgIGcucm90YXRlWChGLmhlYWRUaWx0KTtcbiAgICAgIGcudHJhbnNsYXRlKFggKyAwLjI1LCByZXN0ICsgRi5oZWFkTGlmdCwgRi5oZWFkWik7XG4gICAgICBwYXJ0cy5wdXNoKGcpO1xuICAgIH1cblxuICAgIC8qIFJpZ2h0IGFybSwgYXMgdGhlIHBsYXRlIGhhcyBpdDogdGhlIGJvZHkgbGllcyBvbiB0aGlzIHNob3VsZGVyLCBzbyBhIFNIT1JUIHVwcGVyIGFybSBydW5zXG4gICAgICogYWxvbmcgdGhlIHBsaW50aCBmcm9tIHRoZSBib3R0b20gb2YgdGhlIHNob3VsZGVyIHRvIGFuIGVsYm93IHJlc3Rpbmcgb24gdGhlIHBsaW50aCBpbiBmcm9udFxuICAgICAqIG9mIHRoZSBuZWNrLCBhbmQgdGhlIGZvcmVhcm0gcmlzZXMgYWxtb3N0IFZFUlRJQ0FMTFkgZnJvbSB0aGVyZSB0byBhIGhhbmQgY3VwcGVkIGFnYWluc3QgdGhlXG4gICAgICogamF3LCBmaW5nZXJzIHVwLiBUaGF0IHVwcmlnaHQgZm9yZWFybSB1bmRlciB0aGUgaGVhZCBpcyB0aGUgc3Ryb25nZXN0IHNpbmdsZSBjdWUgb2YgdGhlXG4gICAgICogcG9zZSBmcm9tIHRoZSBjb2xvbm5hZGUgc2lkZSwgc28gaXQgaXMgYSB0YXBlcmVkIGN5bGluZGVyIGFpbWVkIHBvaW50IHRvIHBvaW50IHJhdGhlciB0aGFuIGFcbiAgICAgKiBaLXN0YWNrZWQgdHViZSwgd2hpY2ggY2Fubm90IHN0YW5kIHVwLiBObyBjdXNoaW9uOiB0aGUgcGxhdGUncyBlbGJvdyBpcyBvbiB0aGUgc3RvbmUuICovXG4gICAgY29uc3QgZWxib3cgPSBbWCArIDEuNDAsIHJlc3QgKyAwLjM2LCA5LjI1XTtcbiAgICBjb25zdCB3cmlzdCA9IFtYICsgMS4wMiwgcmVzdCArIEYuaGVhZExpZnQgLSBGLmhlYWQgKiAwLjUwLCBGLmhlYWRaICsgMC4xMF07XG4gICAgcGFydHMucHVzaChsaW1iKFtYICsgMC4zMCwgcmVzdCArIDAuMzQsIDguMzVdLCBlbGJvdywgMC4zNiwgMC4zNCkpO1xuICAgIHBhcnRzLnB1c2gobmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMzgsIDEwLCA4KS50cmFuc2xhdGUoZWxib3dbMF0sIGVsYm93WzFdLCBlbGJvd1syXSkpO1xuICAgIHBhcnRzLnB1c2gobGltYihlbGJvdywgd3Jpc3QsIDAuMzQsIDAuMjcpKTtcbiAgICB7XG4gICAgICAvLyBUaGUgaGFuZDogYSB0YWxsIHNsYWIgYWdhaW5zdCB0aGUgbG93ZXIgc2lkZSBvZiB0aGUgaGVhZCwgdGh1bWIgc2lkZSBmb3J3YXJkLCBzdW5rIGludG8gdGhlXG4gICAgICAvLyBlbGxpcHNvaWQgc28gaXQgcmVhZHMgYXMgY3VwcGluZyB0aGUgY2hlZWsgcmF0aGVyIHRoYW4gaG92ZXJpbmcgYmVzaWRlIGl0LlxuICAgICAgY29uc3QgaGFuZCA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjUwLCAwLjk1LCAwLjcyKTtcbiAgICAgIGhhbmQucm90YXRlWChGLmhlYWRUaWx0ICogMC42KTtcbiAgICAgIGhhbmQudHJhbnNsYXRlKHdyaXN0WzBdICsgMC4xMCwgd3Jpc3RbMV0gKyAwLjMyLCB3cmlzdFsyXSArIDAuMDIpO1xuICAgICAgcGFydHMucHVzaChoYW5kKTtcbiAgICB9XG5cbiAgICAvKiBMZWZ0IGFybTogbGllcyBhbG9uZyB0aGUgVE9QIG9mIHRoZSBib2R5IC0tIHRoZSB1cHBlciBmbGFuayAtLSBmcm9tIHRoZSBzaG91bGRlciB0byB0aGUgaGlwLFxuICAgICAqIHdpdGggdGhlIGhhbmQgcmVzdGluZyBvbiB0aGUgdG9wIG9mIHRoZSB0aGlnaCwgd2hpY2ggaXMgd2hlcmUgdGhlIHBsYXRlIHNob3dzIGEgc29mdCByb2xsXG4gICAgICogcmlkaW5nIHRoZSBjcmVzdCBvZiB0aGUgaGlwLiBFYWNoIHN0YXRpb24gc2l0cyBwcm91ZCBvZiB0aGUgdG9yc28gc3VyZmFjZSBhdCBhbiBhbmdsZSBwaGlcbiAgICAgKiBmcm9tIHRoZSBjcm93biBvZiB0aGUgYm9keSB0b3dhcmQgdGhlIGNvbG9ubmFkZSwgc28gdGhlIGFybSBsaWVzIE9OIHRoZSBib2R5IHJhdGhlciB0aGFuXG4gICAgICogdGhyb3VnaCBpdC4gKi9cbiAgICBwYXJ0cy5wdXNoKHR1YmVBbG9uZyhbXG4gICAgICBvbkJvZHkoNy4zMCwgMC4zMCwgMC4xMCwgLTMuNSksIC8vIHN0YXJ0cyBidXJpZWQgaW4gdGhlIHNob3VsZGVyLCBzbyBubyBjb25lIHNob3dzXG4gICAgICBvbkJvZHkoNi45MCwgMC4zNiwgMC40MCwgLTAuMiksXG4gICAgICBvbkJvZHkoNS40MCwgMC40OCwgMC4zOCksXG4gICAgICBvbkJvZHkoMy42MCwgMC41NiwgMC4zNiksXG4gICAgICBvbkJvZHkoMS42MCwgMC42MCwgMC4zNCksXG4gICAgICBvbkJvZHkoMC4wMCwgMC42MiwgMC4zMyksXG4gICAgICBvbkJvZHkoLTEuNDAsIDAuNjYsIDAuMzEpLFxuICAgICAgb25Cb2R5KC0yLjYwLCAwLjcwLCAwLjI4KSxcbiAgICAgIG9uQm9keSgtMy40MCwgMC43MiwgMC4yMiksXG4gICAgICBvbkJvZHkoLTMuOTAsIDAuNzIsIDAuMDgpLFxuICAgIF0sIDEyKSk7XG4gICAge1xuICAgICAgLy8gVGhlIGhhbmQgbGllcyBmbGF0IG9uIHRoZSBjcmVzdCBvZiB0aGUgdGhpZ2gsIHJvdGF0ZWQgdG8gaXRzIHRhbmdlbnQgdGhlcmUuXG4gICAgICBjb25zdCBoYW5kID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuNTAsIDAuMjAsIDEuMDApO1xuICAgICAgaGFuZC5yb3RhdGVaKC0wLjYyKTtcbiAgICAgIGNvbnN0IGF0ID0gb25Cb2R5KC0zLjYwLCAwLjcyLCAwLjEwLCAtMS4yKTtcbiAgICAgIGhhbmQudHJhbnNsYXRlKGF0WzFdLCBhdFsyXSwgYXRbMF0pO1xuICAgICAgcGFydHMucHVzaChoYW5kKTtcbiAgICB9XG5cbiAgICAvKiBUaGUgZmlndXJlIGlzIGF1dGhvcmVkIGF0IGl0cyBPUklHSU5BTCBkaW1lbnNpb25zIGFib3ZlIGFuZCByZXByb3BvcnRpb25lZCBoZXJlLCBpbiBvbmVcbiAgICAgKiBwbGFjZSwgcmF0aGVyIHRoYW4gYnkgc2NhbGluZyBzaXh0eSBsaXRlcmFscyB0aHJvdWdoIHRoZSBwb3NlLiBTY2FsaW5nIGFib3V0IChYLCByZXN0LCAwKVxuICAgICAqIGlzIHdoYXQga2VlcHMgaXQgc2l0dGluZyBPTiB0aGUgcGxpbnRoOiByZXN0IGlzIHRoZSBwbGludGggdG9wLCBzbyB0aGF0IHBsYW5lIGlzIHRoZSBmaXhlZFxuICAgICAqIHBvaW50IG9mIHRoZSB0cmFuc2Zvcm0gYW5kIGV2ZXJ5IHN0YXRpb24ncyAnY3kgPSByZXN0ICsgcnknIHN0YXlzIHRydWUgYWZ0ZXJ3YXJkcy5cbiAgICAgKlxuICAgICAqIGZ6IHNob3J0ZW5zIGFuZCBmciB0aGlja2VucyAtLSBzZWUgdGhlIG5vdGUgb24gRlovRlIgYXQgdGhlIHRvcC4gRG9pbmcgaXQgaGVyZSBhbHNvIG1lYW5zXG4gICAgICogdGhlIHBvc2UgcmVhc29uaW5nIGFib3ZlIGlzIHN0aWxsIHN0YXRlZCBpbiB0aGUgcHJvcG9ydGlvbnMgaXQgd2FzIHJlYXNvbmVkIGluLiAqL1xuICAgIGNvbnN0IGZnID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBmZy50cmFuc2xhdGUoLVgsIC1yZXN0LCAwKTtcbiAgICBmZy5zY2FsZShGLmZyLCBGLmZyLCBGLmZ6KTtcbiAgICBmZy50cmFuc2xhdGUoWCwgcmVzdCwgMCk7XG4gICAgZmcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBhZGQoJ2ZpZ3VyZScsICdSZWNsaW5pbmcgQnVkZGhhIGZpZ3VyZScsIGZnLCAnZ29sZCcpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUmVjbGluaW5nQnVkZGhhSGFsbE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFB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
