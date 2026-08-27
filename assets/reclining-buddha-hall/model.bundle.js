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
      "head": 1.12,
      "headLift": 2.3,
      "headTilt": 0.45,
      "headZ": 9.5
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUmVjbGluaW5nIEJ1ZGRoYSBIYWxsIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTAuMDAgeCAyOC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJyZWNsaW5pbmctYnVkZGhhLWhhbGxcIixcbiAgICBcIm5hbWVcIjogXCJSZWNsaW5pbmcgQnVkZGhhIEhhbGxcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJSZWNsaW5pbmdCdWRkaGFIYWxsXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDE0LjAwIHggMTAuMDAgeCAyOC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0b25lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE4Mzk2NDMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTk4NDg0MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTEwMjU1OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiYmFuZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzMDE3MjA0LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjc2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ29sZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzAyNzIxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjE1LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJwaXRjaFwiOiAwLjY0LFxuICAgICAgXCJwbGF0Zm9ybVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAtNyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIC0xNCxcbiAgICAgICAgICAxNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTYuNTUsXG4gICAgICAgICAgNi41NSxcbiAgICAgICAgICAtMTMuNTUsXG4gICAgICAgICAgMTMuNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMS4zNSxcbiAgICAgICAgICAtNi41NSxcbiAgICAgICAgICA2LjU1LFxuICAgICAgICAgIC0xMy41NSxcbiAgICAgICAgICAxMy41NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4zNSxcbiAgICAgICAgICAxLjc1LFxuICAgICAgICAgIC02LjEsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIC0xMy4xLFxuICAgICAgICAgIDEzLjFcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwicGxpbnRoXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjc1LFxuICAgICAgICBcInkxXCI6IDIuNjIsXG4gICAgICAgIFwieDBcIjogLTUuMixcbiAgICAgICAgXCJ4MVwiOiAxLjYsXG4gICAgICAgIFwiaHpcIjogMTEuNlxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJod1wiOiAwLjMxLFxuICAgICAgICBcInkwXCI6IDEuNzUsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImZyb250WFwiOiAyLjEsXG4gICAgICAgIFwiZnJvbnRDb3VudFwiOiA4LFxuICAgICAgICBcImZyb250SGFsZlpcIjogMTIuMixcbiAgICAgICAgXCJlbmRaXCI6IDEyLjIsXG4gICAgICAgIFwiZW5kWFwiOiBbXG4gICAgICAgICAgLTQuMixcbiAgICAgICAgICAtMS4wNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYWNrV2FsbFwiOiB7XG4gICAgICAgIFwieDBcIjogLTYuMSxcbiAgICAgICAgXCJ4MVwiOiAtNS4yLFxuICAgICAgICBcInkwXCI6IDEuNzUsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImh6XCI6IDEzLjFcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDYuNixcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgNS4xNSxcbiAgICAgICAgICAxMy44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgOS43OCxcbiAgICAgICAgICAzLjQsXG4gICAgICAgICAgMTJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwicm9vZkNlbnRyZVhcIjogLTEuNzIsXG4gICAgICBcImJhbmRcIjogMC4zNCxcbiAgICAgIFwiZmlndXJlXCI6IHtcbiAgICAgICAgXCJ4XCI6IC0xLjgsXG4gICAgICAgIFwicmVzdFwiOiAyLjYyLFxuICAgICAgICBcInNlZ1wiOiAxOCxcbiAgICAgICAgXCJoZWFkXCI6IDEuMTIsXG4gICAgICAgIFwiaGVhZExpZnRcIjogMi4zLFxuICAgICAgICBcImhlYWRUaWx0XCI6IDAuNDUsXG4gICAgICAgIFwiaGVhZFpcIjogOS41XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZWNsaW5pbmdCdWRkaGFIYWxsTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdSZWNsaW5pbmcgQnVkZGhhIEhhbGwnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGF0Zm9ybSBhbmQgc3RhdHVlIHBsaW50aFxuICAgKiBGb3VyIHN0ZXBwZWQgc2xhYnMgYW5kIHRoZSBmaWd1cmUncyBvd24gbG93IHBsaW50aCwgYWxsIHRoZSBzYW1lIHBhbGUgc3RvbmUgYW5kIHRoZXJlZm9yZSBPTkVcbiAgICogY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLiBUaGUgdGhpcmQgYW5kIGZvdXJ0aCBzbGFicyBhcmUgdGhlIHBsYXRlJ3MgZm9yd2FyZCBhcHJvbjogdGhlXG4gICAqIGRlY2sgc3RlcHMgZG93biBhbmQgT1VUIG9uICtYLCB3aGljaCBleHByZXNzZXMgdGhlIHByb2plY3RpbmcgdGVycmFjZSB3aXRob3V0IGEgc2Vjb25kXG4gICAqIGNvbXBvbmVudCBvciBhIG5vdGNoZWQgcGxhbi4gKi9cbiAge1xuICAgIGNvbnN0IFAgPSBHLnBsYXRmb3JtIGFzIG51bWJlcltdW10sIFBMID0gRy5wbGludGg7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBQLm1hcCgoW3kwLCB5MSwgeDAsIHgxLCB6MCwgejFdKSA9PlxuICAgICAgYm94QXQoKHgwICsgeDEpIC8gMiwgKHkwICsgeTEpIC8gMiwgKHowICsgejEpIC8gMiwgeDEgLSB4MCwgeTEgLSB5MCwgejEgLSB6MCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKFBMLngwICsgUEwueDEpIC8gMiwgKFBMLnkwICsgUEwueTEpIC8gMiwgMCxcbiAgICAgIFBMLngxIC0gUEwueDAsIFBMLnkxIC0gUEwueTAsIFBMLmh6ICogMikpO1xuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gVGhlIHBsYXRlJ3MgcGxhdGZvcm0gaXMgc3RyZWFrZWQgYmxhY2sgYWxvbmcgaXRzIGxvd2VyIGNvdXJzZXMgYW5kIGNsZWFuIGFib3ZlIC0tIHRoZSB1c3VhbFxuICAgIC8vIGRpcmVjdGlvbiBmb3IgdGhpcyBraXQsIGFuZCB0aGUgb3Bwb3NpdGUgb2YgdGhlIG1vc3F1ZSdzIHJhaW4gd2FzaC5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCAwLCAxLjc1LCBbMC43NiwgMC43NywgMC43NV0pO1xuICAgIGFkZCgncGxhdGZvcm0nLCAnU3RvbmUgcGxhdGZvcm0gYW5kIHN0YXR1ZSBwbGludGgnLCBnZW8sICdzdG9uZScpO1xuICAgIGNvbGxpZGVyc1sncGxhdGZvcm0nXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCA1LjAsIDBdLCBoYWxmRXh0ZW50czogWzcuMCwgNS4wLCAxNC4wXSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZTsgYSBsZXZlbCAnXG4gICAgICAgICAgICsgJ2J1aWxkZXIgY29sbGlkZXMgd2l0aCB0aGUgaGFsbCwgbm90IHdpdGggdGhlIGZpZ3VyZSBpbnNpZGUgaXQuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBiYWNrIHdhbGxcbiAgICogVGhlIG9uZSBjbG9zZWQgZWxldmF0aW9uLiBTb2xpZCwgYmVjYXVzZSB0aGUgaGFsbCBpcyBhbiBleHRlcmlvciBzaGVsbCBhbmQgYW4gaW50ZXJpb3Igd291bGRcbiAgICogY29zdCBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYnV0IHRoaXMgcHJvcCBpcyB0aGUgb25lXG4gICAqIGNhc2UgaW4gdGhlIGJhdGNoIHdoZXJlIHRoZSBpbnNpZGUgb2YgYSB3YWxsIElTIHNlZW4sIHN0cmFpZ2h0IHRocm91Z2ggdGhlIG9wZW4gY29sb25uYWRlLFxuICAgKiBzbyBpdHMgaW5uZXIgZmFjZSBnZXRzIGEgZGFyayBjb21wb25lbnQgb2YgaXRzIG93biByYXRoZXIgdGhhbiBiZWluZyBsZWZ0IGFzIHdoaXRlIHJlbmRlci4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLmJhY2tXYWxsO1xuICAgIGFkZCgnYmFjay13YWxsJywgJ0JhY2sgd2FsbCcsIGJveEF0KChXLngwICsgVy54MSkgLyAyLCAoVy55MCArIFcueTEpIC8gMiwgMCxcbiAgICAgIFcueDEgLSBXLngwLCBXLnkxIC0gVy55MCwgVy5oeiAqIDIpLCAnc3RvbmUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaW50ZXJpb3Igc2hhZGVcbiAgICogVGhlIGRhcmsgdGhlIGNvbG9ubmFkZSBsb29rcyBpbnRvOiB0aGUgYmFjayB3YWxsJ3MgaW5uZXIgZmFjZSBhbmQgdGhlIHNvZmZpdCBhYm92ZSB0aGUgZmlndXJlLlxuICAgKiBCb3RoIHN0YW5kIFBST1VEIG9mIHRoZSBzdXJmYWNlcyB0aGV5IHNpdCBvbiwgbm90IHJlY2Vzc2VkIGludG8gdGhlbSAtLSB0aG9zZSBzdXJmYWNlcyBhcmVcbiAgICogc29saWQgbWFzc2VzLCBzbyBhIHBhbmVsIHN1bmsgaW50byBvbmUgaXMgaW5zaWRlIHRoZSBzb2xpZCBhbmQgaW52aXNpYmxlLiAqL1xuICB7XG4gICAgY29uc3QgVyA9IEcuYmFja1dhbGwsIEMgPSBHLmNvbHVtbjtcbiAgICBhZGQoJ3NoYWRlJywgJ0ludGVyaW9yIHNoYWRlJywgbWVyZ2VHZW9zKFtcbiAgICAgIC8vIFRvcCBhdCA2LjU0IHJhdGhlciB0aGFuIDYuNjAuIEl0IHdhcyB0aGUgV0FMTCBwYW5lbCwgbm90IHRoZSBzb2ZmaXQsIHRoYXQgc2hhcmVkIHRoZVxuICAgICAgLy8gY29sdW1uIGhlYWRzJyBwbGFuZSAtLSB0d2VsdmUgcGFpcnMsIG9uZSBwZXIgaW5zdGFuY2UgLS0gYW5kIG1vdmluZyB0aGUgc29mZml0IGZpcnN0IGZpeGVkXG4gICAgICAvLyBub3RoaW5nLCBiZWNhdXNlIGJvdGggYm94ZXMgcmVhY2hlZCB0aGUgc2FtZSBoZWlnaHQgZm9yIGRpZmZlcmVudCByZWFzb25zLlxuICAgICAgYm94QXQoVy54MSArIDAuMDQsIChXLnkwICsgVy55MSkgLyAyICsgMC4xNCwgMCwgMC4wOCwgVy55MSAtIFcueTAgLSAwLjQwLCBXLmh6ICogMiAtIDAuNjApLFxuICAgICAgLy8gVGhlIHNvZmZpdCdzIHRvcCBzaXRzIGF0IDYuNTQsIG5vdCBsZXZlbCB3aXRoIHRoZSBjb2x1bW4gaGVhZHMgYXQgNi42MDogbGV2ZWwsIGl0cyB0b3BcbiAgICAgIC8vIGZhY2UgYW5kIGV2ZXJ5IGNvbHVtbidzIHRvcCBmYWNlIGFyZSB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IC0tIHR3ZWx2ZSBwYWlycyBhdFxuICAgICAgLy8gb25jZSwgYW5kIHRoZSBjb2x1bW5zIGFyZSBhbiBJbnN0YW5jZWRNZXNoIHNvIGVhY2ggaW5zdGFuY2UgaXMgY2hlY2tlZCBzZXBhcmF0ZWx5LlxuICAgICAgYm94QXQoKFcueDEgKyBDLmZyb250WCkgLyAyLCBDLnkxIC0gMC4xNSwgMCwgQy5mcm9udFggLSBXLngxIC0gMC40MCwgMC4xMCwgVy5oeiAqIDIgLSAwLjYwKSxcbiAgICBdKSwgJ2RhcmsnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29sb25uYWRlXG4gICAqIFR3ZWx2ZSBzcXVhcmUgY29sdW1ucyBhcyBPTkUgSW5zdGFuY2VkTWVzaCAtLSBlaWdodCBhbG9uZyB0aGUgb3BlbiBmcm9udCBhbmQgdHdvIGF0IGVhY2ggZW5kLlxuICAgKiBUaGUgcmVnaXN0cnkgbm90ZXMgcmVxdWlyZSB0aGUgbG9uZyBmcm9udCB0byBiZSBhbiBvcGVuIGNvbG9ubmFkZSByYXRoZXIgdGhhbiBhIHdhbGwsIGJlY2F1c2VcbiAgICogYSBjbG9zZWQgbG9uZyBsb3cgYm94IGhhcyBubyByZWNvZ25pc2FibGUgZmVhdHVyZSBhdCBhbGwgYW5kIHJlYWRzIGFzIGEgd2FyZWhvdXNlLiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY29sdW1uO1xuICAgIGNvbnN0IGggPSBDLnkxIC0gQy55MDtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KDAsIDAsIDAsIEMuaHcgKiAyLCBoLCBDLmh3ICogMiksXG4gICAgICAvLyBBIGNhcGl0YWwgYmxvY2sgYXQgdGhlIGhlYWQsIHN1bmsgaW50byB0aGUgc2hhZnQgc28gbm8gdHdvIHRvcCBmYWNlcyBzaGFyZSBhIHBsYW5lLlxuICAgICAgYm94QXQoMCwgaCAvIDIgLSAwLjE1LCAwLCBDLmh3ICogMi4zNSwgMC4zMCwgQy5odyAqIDIuMzUpLFxuICAgIF0pO1xuICAgIGNvbnN0IGN5ID0gKEMueTAgKyBDLnkxKSAvIDI7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBDLmZyb250Q291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeiA9IC1DLmZyb250SGFsZlogKyAoMiAqIEMuZnJvbnRIYWxmWiAqIGkpIC8gKEMuZnJvbnRDb3VudCAtIDEpO1xuICAgICAgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oQy5mcm9udFgsIGN5LCB6KSk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgeCBvZiBDLmVuZFggYXMgbnVtYmVyW10pIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIGN5LCAtQy5lbmRaKSk7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBjeSwgQy5lbmRaKSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ2NvbHVtbnMnLCAnQ29sb25uYWRlJywgdW5pdCwgJ3N0b25lJywgbWF0cyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2ZcbiAgICogVHdvIHNoYWxsb3cgdGllcnMsIGVhY2ggYSB0cnVuY2F0ZWQgZ2FibGUgY3Jvc3Mtc2VjdGlvbiBleHRydWRlZCBhbG9uZyB0aGUgaGFsbCdzIGxlbmd0aC4gVGhlXG4gICAqIHBpdGNoIGlzIDAuNjQgLS0gYWJvdXQgMzMgZGVncmVlcyAtLSB3aGljaCBpcyBkZWxpYmVyYXRlbHkgTk9UIHRoZSB1Ym9zb3QncyA0NjogdGhpcyBpcyBhIGxvbmdcbiAgICogbG93IGhhbGwgYW5kIGl0cyByb29mIGlzIHNoYWxsb3csIGFuZCBidWlsZGluZyBpdCBzdGVlcCB3b3VsZCBoYXZlIG1hZGUgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gICAqXG4gICAqIFRoZSByb29mIGlzIGNlbnRyZWQgYXQgeD0tMS43Miwgbm90IGF0IHRoZSBvcmlnaW46IHRoZSBoYWxsIHNpdHMgYXQgdGhlIC1YIHNpZGUgb2YgdGhlXG4gICAqIHBsYXRmb3JtIGFuZCB0aGUgYXByb24gdGFrZXMgdGhlIHJlc3QsIHNvIGEgcm9vZiBjZW50cmVkIG9uIHRoZSBwcm9wIHdvdWxkIG92ZXJoYW5nIHRoZSB3cm9uZ1xuICAgKiBzaWRlIGFuZCBtaXNzIHRoZSBjb2xvbm5hZGUgZW50aXJlbHkuICovXG4gIHtcbiAgICBjb25zdCBUID0gRy50aWVycyBhcyBudW1iZXJbXVtdLCBCID0gRy5iYW5kLCBjeCA9IEcucm9vZkNlbnRyZVg7XG4gICAgY29uc3QgcmVkOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgZ29sZDogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MSwgaHgsIGh6XSBvZiBUKSB7XG4gICAgICBjb25zdCB5U3BsaXQgPSB5MCArIEI7XG4gICAgICBjb25zdCBnMSA9IGV4dHJ1ZGVBbG9uZ1oodGllclByb2ZpbGUoaHgsIHkwLCB5U3BsaXQsIEcucGl0Y2gpLCAtaHosIGh6KTtcbiAgICAgIGcxLnRyYW5zbGF0ZShjeCwgMCwgMCk7XG4gICAgICBnb2xkLnB1c2goZzEpO1xuICAgICAgY29uc3QgZzIgPSBleHRydWRlQWxvbmdaKHRpZXJQcm9maWxlKGh4IC0gQiAvIEcucGl0Y2gsIHlTcGxpdCwgeTEsIEcucGl0Y2gpLCAtaHogKyAwLjAxLCBoeiAtIDAuMDEpO1xuICAgICAgZzIudHJhbnNsYXRlKGN4LCAwLCAwKTtcbiAgICAgIHJlZC5wdXNoKGcyKTtcbiAgICB9XG4gICAgYWRkKCdyb29mLXRpbGUnLCAnVGlsZSByb29mIGZpZWxkcycsIG1lcmdlR2VvcyhyZWQpLCAndGlsZScpO1xuICAgIGFkZCgncm9vZi1iYW5kJywgJ0dvbGQgZWF2ZXMgYmFuZHMnLCBtZXJnZUdlb3MoZ29sZCksICdiYW5kJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJhcmdlYm9hcmRzXG4gICAqIFdoaXRlIGJvYXJkcyB1cCBlYWNoIGdhYmxlIHJha2UsIGFuZCBhIHBsYWluIGZhc2NpYSBhbG9uZyBlYWNoIGVhdmVzLiBFYWNoIGJvYXJkIGlzIGEgYm94XG4gICAqIFJPVEFURUQgdG8gdGhlIHJha2UgYW5nbGUgcmF0aGVyIHRoYW4gYSBzdGFpciBvZiBzbWFsbCBib3hlczogZXZlbiBhdCAzMyBkZWdyZWVzIGEgc3RlcHBlZFxuICAgKiBhcHByb3hpbWF0aW9uIHJlYWRzIGFzIHNlcnJhdGlvbi4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzIGFzIG51bWJlcltdW10sIGN4ID0gRy5yb29mQ2VudHJlWDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MSwgaHgsIGh6XSBvZiBUKSB7XG4gICAgICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIEcucGl0Y2g7XG4gICAgICBjb25zdCBoYWxmVG9wID0gTWF0aC5tYXgoaHggLSBpbnNldCwgMCk7XG4gICAgICBjb25zdCBydW4gPSBoeCAtIGhhbGZUb3AsIHJpc2UgPSB5MSAtIHkwO1xuICAgICAgY29uc3QgbGVuID0gTWF0aC5oeXBvdChydW4sIHJpc2UpICsgMC4xMDtcbiAgICAgIC8vIFRoZSByYWtlIGFuZ2xlIGlzIGF0YW4yKFJVTiwgUklTRSksIG5vdCBhdGFuKHBpdGNoKS4gcm90YXRlWiBtYXBzIHRoZSBib3gncyArWSB0b1xuICAgICAgLy8gKC1zaW4sIGNvcyksIHNvIGFpbWluZyBpdCBhbG9uZyAoLXJ1biwgcmlzZSkgbmVlZHMgc2luID0gcnVuL2xlbiAtLSB3aGljaCBpcyB0aGVcbiAgICAgIC8vIGNvbXBsZW1lbnQgb2YgdGhlIHBpdGNoIGFuZ2xlLCBub3QgdGhlIHBpdGNoIGFuZ2xlIGl0c2VsZi4gQXQgdGhlIHVib3NvdCdzIDQ2IGRlZ3JlZXMgdGhlXG4gICAgICAvLyB0d28gYXJlIHRocmVlIGRlZ3JlZXMgYXBhcnQgYW5kIHRoZSBlcnJvciBpcyBpbnZpc2libGU7IGF0IHRoaXMgaGFsbCdzIDMzIGRlZ3JlZXMgdGhleSBhcmVcbiAgICAgIC8vIHR3ZW50eS1mb3VyIGRlZ3JlZXMgYXBhcnQgYW5kIHRoZSBiYXJnZWJvYXJkcyBzdG9vZCBvZmYgdGhlIHJvb2YgbGlrZSBzY2FmZm9sZGluZy5cbiAgICAgIGNvbnN0IGFuZyA9IE1hdGguYXRhbjIocnVuLCByaXNlKTtcbiAgICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkge1xuICAgICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMjIsIGxlbiwgMC4yNCk7XG4gICAgICAgICAgZy5yb3RhdGVaKHhzICogYW5nKTtcbiAgICAgICAgICBnLnRyYW5zbGF0ZShjeCArIHhzICogKGh4ICsgaGFsZlRvcCkgLyAyLCAoeTAgKyB5MSkgLyAyLCB6cyAqIChoeiArIDAuMDYpKTtcbiAgICAgICAgICBwYXJ0cy5wdXNoKGcpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IHhzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgcGFydHMucHVzaChib3hBdChjeCArIHhzICogKGh4ICsgMC4wNyksIHkwICsgMC4wOSwgMCwgMC4xNCwgMC4yNiwgaHogKiAyICsgMC4yNikpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCB0b3AgPSBUW1QubGVuZ3RoIC0gMV07XG4gICAgcGFydHMucHVzaChib3hBdChjeCwgdG9wWzBdICsgdG9wWzJdICogRy5waXRjaCArIDAuMDUsIDAsIDAuMzAsIDAuMjIsIHRvcFszXSAqIDIgKyAwLjM2KSk7XG4gICAgYWRkKCdiYXJnZS1ib2FyZHMnLCAnQmFyZ2Vib2FyZHMgYW5kIHJpZGdlJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3N0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSByZWNsaW5pbmcgZmlndXJlXG4gICAqIFRoZSBpZGVudGl0eSBvZiB0aGUgd2hvbGUgYXNzZXQsIGFuZCB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIGtpdC4gVGhlIHBsYXRlIHNob3dzIHRoZVxuICAgKiBjYW5vbmljYWwgcGFyaW5pcnZhbmEgcG9zZTogdGhlIGZpZ3VyZSBsaWVzIG9uIGl0cyBSSUdIVCBzaWRlIGZhY2luZyB0aGUgb3BlbiBjb2xvbm5hZGUgKCtYKSxcbiAgICogdGhlIGhlYWQgcHJvcHBlZCBvbiB0aGUgcmlnaHQgaGFuZCB3aXRoIHRoZSBlbGJvdyBkb3duIG9uIGEgY3VzaGlvbiwgdGhlIGxlZnQgYXJtIGRyYXBlZCBkb3duXG4gICAqIHRoZSBmcm9udCBvZiB0aGUgYm9keSB0byByZXN0IG9uIHRoZSB0aGlnaCwgdGhlIGxlZ3Mgc3RhY2tlZCBvbmUgb24gdGhlIG90aGVyLCBhbmQgdGhlIHR3b1xuICAgKiBmZWV0IHNxdWFyZWQgb2ZmIHdpdGggdGhlaXIgc29sZXMgZmFjaW5nIGRvd24gdGhlIGhhbGwuXG4gICAqXG4gICAqIEx5aW5nIG9uIHRoZSByaWdodCBzaWRlIGFuZCBmYWNpbmcgK1ggcHV0cyB0aGUgaGVhZCBhdCArWjogYm9keSB1cCA9IHJpZ2h0IHggZm9yd2FyZCA9XG4gICAqICgtWSkgeCAoK1gpID0gK1ouIEZyb20gdGhlIGZyb250IHRoZSBoZWFkIGlzIHRoZXJlZm9yZSBhdCB0aGUgdmlld2VyJ3MgTEVGVCwgd2hpY2ggaXMgd2hlcmVcbiAgICogdGhlIHBsYXRlIGhhcyBpdC4gVGhlIGZpcnN0IGJ1aWxkIHB1dCB0aGUgaGVhZCBhdCAtWiwgd2hpY2ggZm9yIGEgcmlnaHQtc2lkZSBmaWd1cmUgaXMgYVxuICAgKiBmaWd1cmUgZmFjaW5nIHRoZSBiYWNrIHdhbGwuXG4gICAqXG4gICAqIFRoZSBmaXJzdCBidWlsZCB3YXMgYWxzbyBvbmUgc3ltbWV0cmljIHR1YmUgZnJvbSBoZWFkIHRvIGZlZXQsIGFuZCBhIHN5bW1ldHJpYyB0dWJlIGhhcyBub1xuICAgKiBzaWRlOiBpdCByZWFkIGFzIGEgZmlndXJlIGx5aW5nIG9uIGl0cyBiYWNrLiBXaGF0IHNheXMgXCJvbiBpdHMgc2lkZVwiIGF0IHByb3AgZGlzdGFuY2UgaXNcbiAgICogYXN5bW1ldHJ5IC0tIHR3byBzdGFja2VkIGxlZ3Mgd2l0aCBhIGdyb292ZSBiZXR3ZWVuIHRoZW0sIGEgYmVudCBhcm0gc3RhbmRpbmcgb24gaXRzIGVsYm93LFxuICAgKiBhbiB1cHJpZ2h0IGhlYWQsIGFuZCBhIHRvcnNvIHRhbGxlciB0aGFuIGl0IGlzIGRlZXAgYmVjYXVzZSB0aGUgc2hvdWxkZXJzIGFyZSBub3cgdGhlXG4gICAqIHZlcnRpY2FsIGF4aXMuIEV2ZXJ5IHJlc3RpbmcgcGFydCBzdGlsbCBkZXJpdmVzIGl0cyBoZWlnaHQgZnJvbSBpdHMgb3duIHJhZGl1c1xuICAgKiAoY3kgPSBwbGludGggdG9wICsgciksIHNvIGl0IHNpdHMgT04gdGhlIHBsaW50aCByYXRoZXIgdGhhbiBpbiBpdCBvciBvdmVyIGl0LiAqL1xuICB7XG4gICAgY29uc3QgRiA9IEcuZmlndXJlLCBQTCA9IEcucGxpbnRoO1xuICAgIGNvbnN0IHJlc3QgPSBQTC55MTtcbiAgICBjb25zdCBYID0gRi54O1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG5cbiAgICAvLyBBIGxpbWIgc2VnbWVudCBiZXR3ZWVuIHR3byBwb2ludHM6IGEgdGFwZXJlZCBjeWxpbmRlciBhaW1lZCBmcm9tIGEgdG8gYi4gVXNlZCB3aGVyZSBhIGxpbWJcbiAgICAvLyBydW5zIG1vc3RseSBVUCByYXRoZXIgdGhhbiBhbG9uZyB0aGUgaGFsbCwgd2hpY2ggdHViZUFsb25nIChyaW5ncyBzdGFja2VkIGFsb25nIFopIGNhbm5vdCBkby5cbiAgICBjb25zdCBsaW1iID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgc2VnID0gMTApID0+IHtcbiAgICAgIGNvbnN0IGQgPSBuZXcgVEhSRUUuVmVjdG9yMyhiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV0sIGJbMl0gLSBhWzJdKTtcbiAgICAgIGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkocjEsIHIwLCBsZW4sIHNlZyk7XG4gICAgICBnLmFwcGx5UXVhdGVybmlvbihuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSkpO1xuICAgICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAoYVsyXSArIGJbMl0pIC8gMik7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuXG4gICAgLyogQm9keTogT05FIGNvbnRpbnVvdXMgdHViZSBmcm9tIHRoZSBuZWNrIHRvIHRoZSBhbmtsZXMsIHNvIHRoZXJlIGlzIG5vIGhpcC10by10aGlnaCBqdW5jdGlvblxuICAgICAqIHRvIHNob3cgYSBzdGVwIG9yIGEgY3JlYXNlLiBbeiwgcngsIHJ5LCBsZWFuLCBjeV0gLS0gcnkgPiByeCB0aHJvdWdob3V0IGJlY2F1c2UgYSBib2R5IG9uXG4gICAgICogaXRzIHNpZGUgc3RhbmRzIG9uIGl0cyBzaG91bGRlciB3aWR0aCwgYW5kIHRoZSBsZWdzIGFyZSBhIHRhbGwgZWxsaXBzZSAodHdvIGxlZ3Mgc3RhY2tlZClcbiAgICAgKiByYXRoZXIgdGhhbiBhIHBhaXIgb2YgcGlwZXM6IHRoZSBwbGF0ZSBzaG93cyB0aGVtIGFzIG9uZSBzb2Z0IG1hc3Mgd2l0aCBhIHNoYWxsb3cgY3JlYXNlLlxuICAgICAqIGxlYW4gcm9sbHMgdGhlIGNoZXN0IGEgbGl0dGxlIHRvd2FyZCB0aGUgY29sb25uYWRlLiBUaGUgbmVjayBzdGF0aW9ucyBjYXJyeSB0aGVpciBvd25cbiAgICAgKiBjZW50cmUgaGVpZ2h0IGFuZCBlbmQgSU5TSURFIHRoZSBoZWFkLiAqL1xuICAgIGNvbnN0IHRvcnNvOiBudW1iZXJbXVtdID0gW1xuICAgICAgWzkuMzAsIDAuMzYsIDAuNDAsIDAuMDAsIDEuOTVdLCAvLyBjbG9zZXMgaW5zaWRlIHRoZSBoZWFkXG4gICAgICBbOC42MCwgMC42MCwgMC42NiwgMC4wMCwgMS43NV0sIC8vIG5lY2tcbiAgICAgIFs3LjkwLCAwLjkyLCAxLjE2LCAwLjA1LCAwXSxcbiAgICAgIFs2LjkwLCAxLjA4LCAxLjM4LCAwLjEwLCAwXSwgLy8gc2hvdWxkZXJcbiAgICAgIFs1LjYwLCAxLjEyLCAxLjM0LCAwLjE0LCAwXSwgLy8gY2hlc3RcbiAgICAgIFszLjYwLCAxLjAwLCAxLjE4LCAwLjEwLCAwXSwgLy8gd2Fpc3RcbiAgICAgIFsxLjYwLCAxLjEwLCAxLjMyLCAwLjA2LCAwXSxcbiAgICAgIFswLjAwLCAxLjE2LCAxLjQwLCAwLjA0LCAwXSwgLy8gaGlwXG4gICAgICBbLTEuNjAsIDEuMDIsIDEuMzQsIDAuMDIsIDBdLFxuICAgICAgWy0zLjQwLCAwLjkwLCAxLjI2LCAwLjAyLCAwXSwgLy8gdGhpZ2hcbiAgICAgIFstNS42MCwgMC43NiwgMS4wNiwgMC4wNCwgMF0sIC8vIGtuZWVcbiAgICAgIFstNy42MCwgMC43MCwgMC45OCwgMC4wMiwgMF0sIC8vIGNhbGZcbiAgICAgIFstOS42MCwgMC41NiwgMC44MiwgMC4wMCwgMF0sXG4gICAgICBbLTEwLjYwLCAwLjU0LCAwLjgwLCAwLjAwLCAwXSwgLy8gYW5rbGUsIGluc2lkZSB0aGUgZmVldFxuICAgIF07XG4gICAgY29uc3QgdG9yc29TdCA9IHRvcnNvLm1hcCgoW3osIHJ4LCByeSwgbGVhbiwgY3ldKSA9PiBbeiwgWCArIGxlYW4sIHJlc3QgKyAoY3kgfHwgcnkpLCByeCwgcnldKTtcbiAgICBwYXJ0cy5wdXNoKHR1YmVBbG9uZyh0b3Jzb1N0LCBGLnNlZykpO1xuXG4gICAgLyogQSBwb2ludCBqdXN0IHByb3VkIG9mIHRoZSBib2R5IHN1cmZhY2UgYXQgc3RhdGlvbiB6LCBhdCBhbiBhbmdsZSBwaGkgZnJvbSB0aGUgY3Jvd24gb2YgdGhlXG4gICAgICogYm9keSB0b3dhcmQgdGhlIGNvbG9ubmFkZS4gRXZlcnl0aGluZyB0aGF0IGxpZXMgT04gdGhlIGJvZHkgLS0gdGhlIHVwcGVyIGxlZydzIHJpZGdlLCB0aGVcbiAgICAgKiBsZWZ0IGFybSwgdGhlIGhhbmQgb24gdGhlIHRoaWdoIC0tIGlzIHBsYWNlZCB3aXRoIHRoaXMsIHNvIGl0IGZvbGxvd3MgdGhlIHNlY3Rpb24gd2hlcmV2ZXJcbiAgICAgKiB0aGUgc2VjdGlvbiBjaGFuZ2VzLiAqL1xuICAgIGNvbnN0IG9uQm9keSA9ICh6OiBudW1iZXIsIHBoaTogbnVtYmVyLCByOiBudW1iZXIsIHByb3VkID0gMC4zMCk6IG51bWJlcltdID0+IHtcbiAgICAgIGNvbnN0IGkgPSB0b3Jzby5maW5kSW5kZXgoKHMpID0+IHNbMF0gPD0geik7XG4gICAgICBjb25zdCBhID0gdG9yc29bTWF0aC5tYXgoaSAtIDEsIDApXSwgYiA9IHRvcnNvW01hdGgubWF4KGksIDApXTtcbiAgICAgIGNvbnN0IHQgPSBhWzBdID09PSBiWzBdID8gMCA6IChhWzBdIC0geikgLyAoYVswXSAtIGJbMF0pO1xuICAgICAgY29uc3QgbHIgPSAoazogbnVtYmVyKSA9PiBhW2tdICsgKGJba10gLSBhW2tdKSAqIHQ7XG4gICAgICBjb25zdCByeCA9IGxyKDEpLCByeSA9IGxyKDIpLCBjeCA9IFggKyBscigzKSwgY3kgPSByZXN0ICsgcnk7XG4gICAgICBjb25zdCBzID0gTWF0aC5zaW4ocGhpKSwgYyA9IE1hdGguY29zKHBoaSk7XG4gICAgICByZXR1cm4gW3osIGN4ICsgKHJ4ICsgciAqIHByb3VkKSAqIHMsIGN5ICsgKHJ5ICsgciAqIHByb3VkKSAqIGMsIHIsIHJdO1xuICAgIH07XG5cbiAgICAvKiBUaGUgdXBwZXIgKGxlZnQpIGxlZzogYSByaWRnZSByaWRpbmcgdGhlIGZyb250LXRvcCBvZiB0aGUgbGVnIG1hc3MgZnJvbSB0aGUgaGlwIHRvIHRoZVxuICAgICAqIGFua2xlLCBtb3N0bHkgYnVyaWVkLCBzbyB0aGUgcGFpciByZWFkcyBhcyB0d28gbGVncyBzdGFja2VkIHdpdGggYSBzb2Z0IGNyZWFzZSBiZXR3ZWVuIGFuZFxuICAgICAqIHRoZSBrbmVlIG9mIHRoZSB0b3AgbGVnIGJyZWFrcyB0aGUgb3V0bGluZSBhIGxpdHRsZSBhaGVhZCBvZiB0aGUgbG93ZXIuICovXG4gICAgcGFydHMucHVzaCh0dWJlQWxvbmcoW1xuICAgICAgb25Cb2R5KC0xLjAwLCAwLjk1LCAwLjEwLCAtMy4wKSxcbiAgICAgIG9uQm9keSgtMS44MCwgMC45NSwgMC41MiwgLTAuMzApLFxuICAgICAgb25Cb2R5KC0zLjYwLCAwLjk4LCAwLjU0LCAtMC4yMCksXG4gICAgICBvbkJvZHkoLTUuNjAsIDEuMDIsIDAuNDgsIC0wLjEwKSwgLy8ga25lZVxuICAgICAgb25Cb2R5KC03LjYwLCAxLjAwLCAwLjQ0LCAtMC4yMCksXG4gICAgICBvbkJvZHkoLTkuNjAsIDAuOTgsIDAuMzYsIC0wLjMwKSxcbiAgICAgIG9uQm9keSgtMTAuNDAsIDAuOTgsIDAuMzQsIC0wLjQwKSxcbiAgICBdLCAxMikpO1xuXG4gICAgLyogRmVldDogc3RhY2tlZCBkaXJlY3RseSBvbmUgb24gdGhlIG90aGVyIGFzIHRoZSBwbGF0ZSBoYXMgdGhlbSwgdG9lcyB0b3dhcmQgdGhlIGNvbG9ubmFkZSxcbiAgICAgKiBzb2xlcyBhcyBmbGF0IHBsYXRlcyBmYWNpbmcgLVouIFRoZSBzb2xlcyBhcmUgYSBmZWF0dXJlIGluIHRoZWlyIG93biByaWdodCBvbiBhIHJlY2xpbmluZ1xuICAgICAqIEJ1ZGRoYSAtLSB0aGV5IGNhcnJ5IHRoZSAxMDggYXVzcGljaW91cyBtYXJrcyAtLSBzbyB0aGV5IHN0YXkgYSBwbGF0ZSBhbmQgdGhlIHRvZSBjb21iIGlzXG4gICAgICogcmVhbCBnZW9tZXRyeSBzdGFuZGluZyBwcm91ZCBvZiB0aGUgaW5zdGVwLiBUaGUgdG9lcyBhcmUgaW5zZXQgaW4gWiBzbyB0aGVpciBmYWNlcyBuZXZlclxuICAgICAqIHNoYXJlIHRoZSBzb2xlJ3MgcGxhbmUsIGFuZCB0aGUgdXBwZXIgZm9vdCBzaW5rcyBhIGhhaXIgaW50byB0aGUgbG93ZXIgc28gbm8gZmFjZSBpcyBzaGFyZWQuICovXG4gICAgZm9yIChjb25zdCBbZngsIGZ5XSBvZiBbW1ggKyAwLjQ1LCByZXN0ICsgMC40MV0sIFtYICsgMC40NSwgcmVzdCArIDAuNDEgKyAwLjgwXV0pIHtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoZngsIGZ5LCAtMTAuOTUsIDIuMTAsIDAuODIsIDAuOTApKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSBwYXJ0cy5wdXNoKGJveEF0KGZ4ICsgMS4yMCwgZnkgLSAwLjMwICsgaSAqIDAuMTUsIC0xMC45NiwgMC4zNiwgMC4xMiwgMC44MikpO1xuICAgIH1cblxuICAgIC8qIEhlYWQ6IGFuIGVsbGlwc29pZCBidWlsdCB1cHJpZ2h0IGluIGl0cyBvd24gZnJhbWUgLS0gdXNobmlzaGEgb24gdGhlIGNyb3duLCBsb25nIGVhciBsb2Jlc1xuICAgICAqIG9uIHRoZSBzaWRlcywgYSBub3NlIG9uIHRoZSBmYWNlIC0tIHRoZW4gdGlsdGVkIHNvIHRoZSBjcm93biBsZWFucyBiYWNrIHRvd2FyZCB0aGUgaGVhZCBlbmRcbiAgICAgKiBvZiB0aGUgaGFsbCwgdGhlIHdheSBhIHByb3BwZWQgaGVhZCBkb2VzLiBUaGUgZmFjZSBzdGF5cyB0b3dhcmQgK1guIFRoZSB1c2huaXNoYSBpcyB0aGVcbiAgICAgKiBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyBmZWF0dXJlIG9mIGEgQnVkZGhhIGZpZ3VyZSBhdCBhbnkgZGlzdGFuY2U7IHdpdGhvdXQgaXQgdGhlIGhlYWQgaXNcbiAgICAgKiBhIGhlYWQuIEl0cyB0aXAgbGFuZHMgYXQgNi4zMiBtLCB1bmRlciB0aGUgc29mZml0IGF0IDYuNDQgLS0gdGhlIGhlYWQgaXMgc2l6ZWQgdG8gdGhlIHBsYXRlLFxuICAgICAqIHdoZXJlIGl0IHN0YW5kcyBuZWFybHkgYXMgdGFsbCBhcyB0aGUgc2hvdWxkZXIsIGFuZCBpdHMgbGlmdCBpcyB3aGF0IHRoZSBzb2ZmaXQgc2V0cy4gKi9cbiAgICB7XG4gICAgICBjb25zdCBSID0gRi5oZWFkO1xuICAgICAgY29uc3QgaGVhZCA9IG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgxLCAxNiwgMTIpO1xuICAgICAgaGVhZC5zY2FsZShSICogMC45MiwgUiAqIDEuMDIsIFIgKiAwLjk1KTtcbiAgICAgIGNvbnN0IGhwOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW2hlYWRdO1xuICAgICAgaHAucHVzaChsYXRoZShbWzAsIDBdLCBbMC4zMCwgMC4wNV0sIFswLjMzLCAwLjE2XSwgWzAuMjEsIDAuMzBdLCBbMC4xMCwgMC40MF0sIFswLCAwLjQ4XV0sIDEyKVxuICAgICAgICAudHJhbnNsYXRlKDAsIFIgKiAwLjk2LCAwKSk7XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgWy0xLCAxXSkgaHAucHVzaChib3hBdCgwLjA0LCAtMC4xMCwgcyAqIFIgKiAwLjkzLCAwLjI4LCAwLjcwLCAwLjE2KSk7XG4gICAgICBocC5wdXNoKGJveEF0KFIgKiAwLjkwLCAtMC4wNCwgMCwgMC4zMCwgMC40MCwgMC4yNCkpO1xuICAgICAgY29uc3QgZyA9IG1lcmdlR2VvcyhocCk7XG4gICAgICBnLnJvdGF0ZVgoRi5oZWFkVGlsdCk7XG4gICAgICBnLnRyYW5zbGF0ZShYICsgMC4yNSwgcmVzdCArIEYuaGVhZExpZnQsIEYuaGVhZFopO1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICB9XG5cbiAgICAvKiBSaWdodCBhcm0sIGFzIHRoZSBwbGF0ZSBoYXMgaXQ6IHRoZSBib2R5IGxpZXMgb24gdGhpcyBzaG91bGRlciwgc28gYSBTSE9SVCB1cHBlciBhcm0gcnVuc1xuICAgICAqIGFsb25nIHRoZSBwbGludGggZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBzaG91bGRlciB0byBhbiBlbGJvdyByZXN0aW5nIG9uIHRoZSBwbGludGggaW4gZnJvbnRcbiAgICAgKiBvZiB0aGUgbmVjaywgYW5kIHRoZSBmb3JlYXJtIHJpc2VzIGFsbW9zdCBWRVJUSUNBTExZIGZyb20gdGhlcmUgdG8gYSBoYW5kIGN1cHBlZCBhZ2FpbnN0IHRoZVxuICAgICAqIGphdywgZmluZ2VycyB1cC4gVGhhdCB1cHJpZ2h0IGZvcmVhcm0gdW5kZXIgdGhlIGhlYWQgaXMgdGhlIHN0cm9uZ2VzdCBzaW5nbGUgY3VlIG9mIHRoZVxuICAgICAqIHBvc2UgZnJvbSB0aGUgY29sb25uYWRlIHNpZGUsIHNvIGl0IGlzIGEgdGFwZXJlZCBjeWxpbmRlciBhaW1lZCBwb2ludCB0byBwb2ludCByYXRoZXIgdGhhbiBhXG4gICAgICogWi1zdGFja2VkIHR1YmUsIHdoaWNoIGNhbm5vdCBzdGFuZCB1cC4gTm8gY3VzaGlvbjogdGhlIHBsYXRlJ3MgZWxib3cgaXMgb24gdGhlIHN0b25lLiAqL1xuICAgIGNvbnN0IGVsYm93ID0gW1ggKyAxLjQwLCByZXN0ICsgMC4zNiwgOS4yNV07XG4gICAgY29uc3Qgd3Jpc3QgPSBbWCArIDEuMDIsIHJlc3QgKyBGLmhlYWRMaWZ0IC0gRi5oZWFkICogMC41MCwgRi5oZWFkWiArIDAuMTBdO1xuICAgIHBhcnRzLnB1c2gobGltYihbWCArIDAuMzAsIHJlc3QgKyAwLjM0LCA4LjM1XSwgZWxib3csIDAuMzYsIDAuMzQpKTtcbiAgICBwYXJ0cy5wdXNoKG5ldyBUSFJFRS5TcGhlcmVHZW9tZXRyeSgwLjM4LCAxMCwgOCkudHJhbnNsYXRlKGVsYm93WzBdLCBlbGJvd1sxXSwgZWxib3dbMl0pKTtcbiAgICBwYXJ0cy5wdXNoKGxpbWIoZWxib3csIHdyaXN0LCAwLjM0LCAwLjI3KSk7XG4gICAge1xuICAgICAgLy8gVGhlIGhhbmQ6IGEgdGFsbCBzbGFiIGFnYWluc3QgdGhlIGxvd2VyIHNpZGUgb2YgdGhlIGhlYWQsIHRodW1iIHNpZGUgZm9yd2FyZCwgc3VuayBpbnRvIHRoZVxuICAgICAgLy8gZWxsaXBzb2lkIHNvIGl0IHJlYWRzIGFzIGN1cHBpbmcgdGhlIGNoZWVrIHJhdGhlciB0aGFuIGhvdmVyaW5nIGJlc2lkZSBpdC5cbiAgICAgIGNvbnN0IGhhbmQgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC41MCwgMC45NSwgMC43Mik7XG4gICAgICBoYW5kLnJvdGF0ZVgoRi5oZWFkVGlsdCAqIDAuNik7XG4gICAgICBoYW5kLnRyYW5zbGF0ZSh3cmlzdFswXSArIDAuMTAsIHdyaXN0WzFdICsgMC4zMiwgd3Jpc3RbMl0gKyAwLjAyKTtcbiAgICAgIHBhcnRzLnB1c2goaGFuZCk7XG4gICAgfVxuXG4gICAgLyogTGVmdCBhcm06IGxpZXMgYWxvbmcgdGhlIFRPUCBvZiB0aGUgYm9keSAtLSB0aGUgdXBwZXIgZmxhbmsgLS0gZnJvbSB0aGUgc2hvdWxkZXIgdG8gdGhlIGhpcCxcbiAgICAgKiB3aXRoIHRoZSBoYW5kIHJlc3Rpbmcgb24gdGhlIHRvcCBvZiB0aGUgdGhpZ2gsIHdoaWNoIGlzIHdoZXJlIHRoZSBwbGF0ZSBzaG93cyBhIHNvZnQgcm9sbFxuICAgICAqIHJpZGluZyB0aGUgY3Jlc3Qgb2YgdGhlIGhpcC4gRWFjaCBzdGF0aW9uIHNpdHMgcHJvdWQgb2YgdGhlIHRvcnNvIHN1cmZhY2UgYXQgYW4gYW5nbGUgcGhpXG4gICAgICogZnJvbSB0aGUgY3Jvd24gb2YgdGhlIGJvZHkgdG93YXJkIHRoZSBjb2xvbm5hZGUsIHNvIHRoZSBhcm0gbGllcyBPTiB0aGUgYm9keSByYXRoZXIgdGhhblxuICAgICAqIHRocm91Z2ggaXQuICovXG4gICAgcGFydHMucHVzaCh0dWJlQWxvbmcoW1xuICAgICAgb25Cb2R5KDcuMzAsIDAuMzAsIDAuMTAsIC0zLjUpLCAvLyBzdGFydHMgYnVyaWVkIGluIHRoZSBzaG91bGRlciwgc28gbm8gY29uZSBzaG93c1xuICAgICAgb25Cb2R5KDYuOTAsIDAuMzYsIDAuNDAsIC0wLjIpLFxuICAgICAgb25Cb2R5KDUuNDAsIDAuNDgsIDAuMzgpLFxuICAgICAgb25Cb2R5KDMuNjAsIDAuNTYsIDAuMzYpLFxuICAgICAgb25Cb2R5KDEuNjAsIDAuNjAsIDAuMzQpLFxuICAgICAgb25Cb2R5KDAuMDAsIDAuNjIsIDAuMzMpLFxuICAgICAgb25Cb2R5KC0xLjQwLCAwLjY2LCAwLjMxKSxcbiAgICAgIG9uQm9keSgtMi42MCwgMC43MCwgMC4yOCksXG4gICAgICBvbkJvZHkoLTMuNDAsIDAuNzIsIDAuMjIpLFxuICAgICAgb25Cb2R5KC0zLjkwLCAwLjcyLCAwLjA4KSxcbiAgICBdLCAxMikpO1xuICAgIHtcbiAgICAgIC8vIFRoZSBoYW5kIGxpZXMgZmxhdCBvbiB0aGUgY3Jlc3Qgb2YgdGhlIHRoaWdoLCByb3RhdGVkIHRvIGl0cyB0YW5nZW50IHRoZXJlLlxuICAgICAgY29uc3QgaGFuZCA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjUwLCAwLjIwLCAxLjAwKTtcbiAgICAgIGhhbmQucm90YXRlWigtMC42Mik7XG4gICAgICBjb25zdCBhdCA9IG9uQm9keSgtMy42MCwgMC43MiwgMC4xMCwgLTEuMik7XG4gICAgICBoYW5kLnRyYW5zbGF0ZShhdFsxXSwgYXRbMl0sIGF0WzBdKTtcbiAgICAgIHBhcnRzLnB1c2goaGFuZCk7XG4gICAgfVxuXG4gICAgYWRkKCdmaWd1cmUnLCAnUmVjbGluaW5nIEJ1ZGRoYSBmaWd1cmUnLCBtZXJnZUdlb3MocGFydHMpLCAnZ29sZCcpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUmVjbGluaW5nQnVkZGhhSGFsbE1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLElBQ1QsWUFBWTtBQUFBLE1BQ1Y7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxNQUNWLGNBQWM7QUFBQSxNQUNkLGNBQWM7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEs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QWdCO0FBQUEsTUFDakMsZUFBZTtBQUFBLE1BQ2YsT0FBTyxFQUFFLE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLE9BQU87QUFBQSxJQUNuRjtBQUNBLFNBQUssSUFBSSxTQUFTO0FBQ2xCLFdBQU8sS0FBSyxTQUFTO0FBT3JCLFVBQU0sWUFBWSxPQUFPLFFBQVMsR0FBRyxhQUFhLENBQUMsQ0FBeUIsRUFDekUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUN6RSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFJLEVBQWEsRUFBRTtBQUtwRCxVQUFNLFVBQVUsb0JBQUksSUFBOEI7QUFDbEQsZUFBVyxDQUFDLE1BQU0sT0FBTyxLQUFLLE9BQU8sUUFBUyxHQUFHLHFCQUFxQixDQUFDLENBQXNDLEdBQUc7QUFDOUcsY0FBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUFBLElBQ2hDO0FBQ0EsZUFBVyxRQUFRLE9BQU8sT0FBTyxLQUFLLEdBQUc7QUFDdkMsWUFBTSxRQUFTLE1BQWMsVUFBVSxlQUFlLGFBQWE7QUFDbkUsVUFBSSxPQUFPLFVBQVUsWUFBWSxDQUFDLE1BQU87QUFDekMsVUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUcsU0FBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLGNBQVEsSUFBSSxLQUFLLEVBQUcsS0FBSyxJQUFJO0FBQUEsSUFDL0I7QUFFQSxTQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDNUIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLSCxPQUFPLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsU0FBUyxPQUFPLE9BQVEsR0FBRyxXQUFXLENBQUMsQ0FBb0M7QUFBQSxNQUMzRTtBQUFBLE1BQ0EsbUJBQW1CLENBQUMsR0FBRyxRQUFRLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sT0FBTyxPQUFPLEVBQUUsTUFBTSxRQUFRLEVBQUU7QUFBQSxNQUN0RixNQUFNLEVBQUUsT0FBTyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOyIsCiAgIm5hbWVzIjogWyJzIl0KfQo=
