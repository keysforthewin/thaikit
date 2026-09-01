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

// assets/ubosot/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createUbosotModel: () => createUbosotModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "ubosot",
  "name": "Ubosot",
  "exportName": "Ubosot",
  "envelope": "Envelope 14.00 x 17.00 x 24.00 m, origin base-center, +Y up, long axis on Z.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
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
    },
    {
      "id": "carved",
      "color": 16777215,
      "roughness": 0.45,
      "metalness": 0.2,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "floor": 1.3,
    "platform": {
      "slab1": [
        0,
        0.45,
        6.85,
        12
      ],
      "slab2": [
        0.45,
        1.08,
        6.35,
        11.3
      ],
      "cap": [
        1.08,
        1.3,
        6.45,
        11.4
      ]
    },
    "notch": {
      "halfX": 1.9,
      "zInner": 9.6
    },
    "stair": {
      "steps": 4,
      "z0": 9.6,
      "z1": 11.3,
      "yBase": 0.45,
      "top": 1.3,
      "treadHalfX": 1.6
    },
    "parapet": {
      "outer": 6.12,
      "thick": 0.32,
      "y0": 1.3,
      "y1": 1.85,
      "gapHalfX": 1.9
    },
    "column": {
      "hw": 0.275,
      "y0": 1.3,
      "y1": 6.6,
      "insetX": 5.95,
      "insetZ": 10.2,
      "longCount": 11,
      "shortCount": 4
    },
    "beam": {
      "y0": 6.25,
      "y1": 6.85,
      "thick": 0.65
    },
    "wall": {
      "y0": 1.3,
      "y1": 6.9,
      "hx": 5.5,
      "hz": 8.4
    },
    "door": {
      "w": 2,
      "h": 3.6,
      "frame": 0.3,
      "proud": 0.1
    },
    "window": {
      "w": 1.1,
      "h": 2.2,
      "sill": 2.6,
      "frame": 0.16,
      "bays": [
        1.02,
        3.06,
        5.1,
        7.14
      ]
    },
    "skirt": {
      "hx": 6.8,
      "hz": 10.9,
      "y0": 6.9,
      "hxI": 4.7,
      "hzI": 8.8,
      "y1": 8.5,
      "soffit": 6.5,
      "band": 0.45
    },
    "mid": {
      "hx": 5,
      "y0": 9,
      "drop": 8.05,
      "hxT": 3.15,
      "y1": 10.85,
      "hz": 8.95,
      "band": 0.45
    },
    "top": {
      "hx": 3.1,
      "y0": 10.9,
      "drop": 10.3,
      "band": 0.45,
      "hz": 8.95,
      "sections": [
        [
          -6.03,
          6.03,
          14.8
        ],
        [
          6,
          8.95,
          14
        ],
        [
          -8.95,
          -6,
          14
        ]
      ]
    },
    "gable": {
      "slab": 0.15,
      "boardW": 0.42,
      "boardT": 0.3
    },
    "horn": {
      "apexRise": 2.35,
      "footRise": 1.3,
      "cornerRise": 1.4
    },
    "sema": {
      "h": 1.05,
      "ped": 0.6
    },
    "wear": {
      "size": 512,
      "stone": {
        "tile": 3,
        "bump": 0.035,
        "mottle": [
          0.86,
          0.86,
          0.87
        ],
        "wash": [
          0.55,
          0.56,
          0.58
        ],
        "streak": [
          0.62,
          0.63,
          0.64
        ],
        "grain": [
          0.7,
          0.7,
          0.72
        ]
      },
      "red": {
        "tile": 2,
        "bump": 0.05,
        "clean": [
          0.565,
          0.31,
          0.3
        ],
        "flake": [
          0.96,
          0.96,
          0.95
        ],
        "rim": [
          0.3,
          0.16,
          0.14
        ],
        "grime": [
          0.34,
          0.2,
          0.18
        ],
        "grain": [
          0.45,
          0.25,
          0.23
        ]
      },
      "roof": {
        "tile": 2.4,
        "cols": 11,
        "rows": 7,
        "bump": 0.045,
        "avg": 0.9,
        "joint": [
          0.6,
          0.58,
          0.55
        ],
        "loTone": 0.84,
        "hiTone": 1,
        "moss": [
          0.62,
          0.66,
          0.52
        ],
        "grime": [
          0.7,
          0.7,
          0.7
        ]
      },
      "pediment": {
        "ground": "#74402e",
        "gold": "#a8865a",
        "goldHi": "#c9a774",
        "goldLo": "#7a5a3a"
      }
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
  function projUv(geo, tile) {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const nx = n.getX(i), ny = n.getY(i), nz = n.getZ(i);
      const horiz = Math.sqrt(nx * nx + nz * nz);
      let u, v;
      if (horiz < 0.2) {
        u = p.getX(i);
        v = p.getZ(i);
      } else {
        u = Math.abs(nx) >= Math.abs(nz) ? p.getZ(i) : p.getX(i);
        v = p.getY(i) / horiz;
      }
      out[i * 2] = u / tile;
      out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  function ring(r0, r1, hint) {
    const corner = (r, i) => [[r[0], r[2], -r[1]], [r[0], r[2], r[1]], [-r[0], r[2], r[1]], [-r[0], r[2], -r[1]]][i];
    const dirs = [[1, 0], [0, 1], [-1, 0], [0, -1]];
    const pos = [];
    for (let s = 0; s < 4; s++) {
      const a = corner(r0, s), b = corner(r0, (s + 1) % 4), c = corner(r1, (s + 1) % 4), d = corner(r1, s);
      const h = hint(dirs[s][0], dirs[s][1]);
      const tri = (p, q, r) => {
        const ux = q[0] - p[0], uy = q[1] - p[1], uz = q[2] - p[2], vx = r[0] - p[0], vy = r[1] - p[1], vz = r[2] - p[2];
        const nx = uy * vz - uz * vy, ny = uz * vx - ux * vz, nz = ux * vy - uy * vx;
        if (nx * h[0] + ny * h[1] + nz * h[2] < 0) pos.push(...p, ...r, ...q);
        else pos.push(...p, ...q, ...r);
      };
      tri(a, b, c);
      tri(a, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
    g.computeVertexNormals();
    return g;
  }
  const outUp = (sx, sz) => [sx, 1, sz];
  const outward = (sx, sz) => [sx, 0, sz];
  const inward = (sx, sz) => [-sx, 0, -sz];
  const down = () => [0, -1, 0];
  function notchedRect2(hx, hz, nx, zInner) {
    const pts = [
      [hx, -hz],
      [hx, hz],
      [nx, hz],
      [nx, zInner],
      [-nx, zInner],
      [-nx, hz],
      [-hx, hz],
      [-hx, -hz],
      [-nx, -hz],
      [-nx, -zInner],
      [nx, -zInner],
      [nx, -hz]
    ];
    const shape = new THREE.Shape();
    shape.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
    shape.closePath();
    return shape;
  }
  function bandProfile(hb, y0, pitch, band) {
    const hi = hb - band / pitch;
    const s = new THREE.Shape();
    s.moveTo(-hb, y0);
    s.lineTo(hb, y0);
    s.lineTo(hi, y0 + band);
    s.lineTo(-hi, y0 + band);
    s.closePath();
    return s;
  }
  const FLOOR = G.floor;
  {
    const P = G.platform, N = G.notch, ST = G.stair, PA = G.parapet, C = G.column;
    const parts = [];
    const [a0, a1, ahx, ahz] = P.slab1;
    parts.push(boxAt(0, (a0 + a1) / 2, 0, ahx * 2, a1 - a0, ahz * 2));
    for (const [y0, y1, hx, hz] of [P.slab2, P.cap]) {
      parts.push(extrudeSlab(notchedRect2(hx, hz, N.halfX, N.zInner), y0, y1));
    }
    const run = (ST.z1 - ST.z0) / ST.steps, rise = (ST.top - ST.yBase) / ST.steps;
    for (const zs of [-1, 1]) {
      for (let i = 0; i < ST.steps; i++) {
        const zOut = ST.z1 - i * run, top = ST.yBase + (i + 1) * rise, bot = ST.yBase - 0.01;
        parts.push(boxAt(0, (top + bot) / 2, zs * (zOut - run / 2), ST.treadHalfX * 2, top - bot, run));
      }
    }
    const ph = PA.y1 - PA.y0, py = (PA.y0 + PA.y1) / 2, inner = PA.outer - PA.thick;
    const zEnd = C.insetZ + PA.thick / 2;
    for (const xs of [-1, 1]) parts.push(boxAt(xs * (PA.outer - PA.thick / 2), py, 0, PA.thick, ph, zEnd * 2));
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      const x0 = PA.gapHalfX, x1 = inner;
      parts.push(boxAt(xs * (x0 + x1) / 2, py - 0.01, zs * C.insetZ, x1 - x0, ph, PA.thick));
    }
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, FLOOR, [0.8, 0.81, 0.79]);
    projUv(geo, G.wear.stone.tile);
    add("platform", "Stone platform, stairs and parapet", geo, "stone");
    colliders["platform"] = {
      shape: "box",
      localCenter: [0, 8.5, 0],
      halfExtents: [7, 8.5, 12],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the hall, not with its thirty individual columns.'
    };
  }
  {
    const W = G.wall, D = G.door;
    const parts = [boxAt(0, (W.y0 + W.y1) / 2, 0, W.hx * 2, W.y1 - W.y0, W.hz * 2)];
    const fw = D.w + 2 * D.frame, fh = D.h + D.frame, fy0 = FLOOR - 0.1;
    for (const zs of [-1, 1]) parts.push(boxAt(0, (fy0 + FLOOR + fh) / 2, zs * (W.hz + D.proud / 2), fw, FLOOR + fh - fy0, D.proud));
    const geo = mergeGeos(parts);
    projUv(geo, G.wear.stone.tile);
    add("wall", "Hall wall body and door surrounds", geo, "stone");
  }
  {
    const W = G.wall, D = G.door, WI = G.window;
    const leaves = [];
    for (const zs of [-1, 1]) leaves.push(boxAt(0, FLOOR + D.h / 2, zs * (W.hz + D.proud + 0.03), D.w, D.h, 0.06));
    add("doorway", "Doorways", mergeGeos(leaves), "dark");
    const frame = new THREE.BoxGeometry(0.1, WI.h + 2 * WI.frame, WI.w + 2 * WI.frame);
    projUv(frame, G.wear.stone.tile);
    const leaf = new THREE.BoxGeometry(0.06, WI.h, WI.w);
    const fm = [], lm = [];
    const cy = FLOOR + WI.sill + WI.h / 2;
    for (const xs of [-1, 1]) for (const bz of WI.bays) for (const zs of [-1, 1]) {
      fm.push(new THREE.Matrix4().setPosition(xs * (W.hx + 0.05), cy, zs * bz));
      lm.push(new THREE.Matrix4().setPosition(xs * (W.hx + 0.1 + 0.03), cy, zs * bz));
    }
    addInst("window-frames", "Window surrounds", frame, "stone", fm);
    addInst("window-leaves", "Window leaves", leaf, "dark", lm);
  }
  {
    const C = G.column;
    const unit = new THREE.BoxGeometry(C.hw * 2, C.y1 - C.y0, C.hw * 2);
    projUv(unit, G.wear.red.tile);
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
  const SK = G.skirt, MD = G.mid, TP = G.top;
  const skPitch = (SK.y1 - SK.y0) / (SK.hx - SK.hxI);
  const mdPitch = (MD.y1 - MD.y0) / (MD.hx - MD.hxT);
  {
    const tile = [], band = [], riser = [];
    const bi = SK.band / skPitch;
    const outer = [SK.hx + 3e-3, SK.hz + 3e-3, SK.y0], midR = [SK.hx - bi, SK.hz - bi, SK.y0 + SK.band], innerR = [SK.hxI, SK.hzI, SK.y1];
    band.push(ring(outer, midR, outUp));
    tile.push(ring(midR, innerR, outUp));
    tile.push(ring([SK.hx - 5e-3, SK.hz - 5e-3, SK.soffit], [SK.hxI, SK.hzI, SK.soffit], down));
    tile.push(ring([SK.hxI, SK.hzI, SK.soffit], [SK.hxI, SK.hzI, SK.y1], inward));
    riser.push(ring([SK.hx, SK.hz, SK.soffit - 5e-3], [SK.hx, SK.hz, SK.y0], outward));
    riser.push(boxAt(0, (MD.drop + MD.y0) / 2, 0, MD.hx * 2, MD.y0 - MD.drop, MD.hz * 2));
    band.push(extrudeAlongZ(bandProfile(MD.hx, MD.y0, mdPitch, MD.band), -MD.hz, MD.hz));
    tile.push(extrudeAlongZ(tierProfile(MD.hx - MD.band / mdPitch, MD.y0 + MD.band, MD.y1, mdPitch), -MD.hz + 0.01, MD.hz - 0.01));
    riser.push(boxAt(0, (TP.drop + TP.y0) / 2, 0, TP.hx * 2, TP.y0 - TP.drop, TP.hz * 2));
    for (const [z0, z1, ridge] of TP.sections) {
      const pitch = (ridge - TP.y0) / TP.hx;
      band.push(extrudeAlongZ(bandProfile(TP.hx, TP.y0, pitch, TP.band), z0, z1));
      tile.push(extrudeAlongZ(tierProfile(TP.hx - TP.band / pitch, TP.y0 + TP.band, ridge, pitch), z0 + 0.01, z1 - 0.01));
    }
    const tg = mergeGeos(tile), bg = mergeGeos(band), rg = mergeGeos(riser);
    projUv(tg, G.wear.roof.tile);
    projUv(bg, G.wear.roof.tile);
    projUv(rg, G.wear.stone.tile);
    add("roof-tile", "Tile roof fields", tg, "tile");
    add("roof-band", "Glazed eaves bands", bg, "green");
    add("roof-risers", "Roof fascia bands", rg, "stone");
  }
  const GB = G.gable;
  const gables = [];
  for (const [z0, z1, ridge] of TP.sections) {
    const zo = Math.abs(z0) > Math.abs(z1) ? z0 : z1;
    if (Math.abs(zo) > 8.9) gables.push({ z: Math.sign(zo) * 9, ridge, full: true });
    else {
      gables.push({ z: 6, ridge, full: false });
      gables.push({ z: -6, ridge, full: false });
    }
  }
  {
    const slabs = [], boards = [], reds = [];
    const peds = [];
    const rakeOf = (g) => g.full ? [MD.hx + 0.05, MD.y0, MD.drop + 0.1] : [TP.hx + 0.05, TP.y0 + 0.02, TP.drop + 0.1];
    for (const g of gables) {
      const zs = Math.sign(g.z);
      const [hb, yb, yBot] = rakeOf(g);
      const s = new THREE.Shape();
      s.moveTo(-hb, yBot);
      s.lineTo(hb, yBot);
      s.lineTo(hb, yb);
      s.lineTo(0, g.ridge + 0.01);
      s.lineTo(-hb, yb);
      s.closePath();
      const zIn = Math.abs(g.z) - 0.07, zOut = Math.abs(g.z) + GB.slab - 0.07;
      slabs.push(extrudeAlongZ(s, zs > 0 ? zIn : -zOut, zs > 0 ? zOut : -zIn));
      {
        const ht = 0, yt = g.ridge;
        const run = hb - ht, rise = yt - yb, len = Math.hypot(run, rise) + 0.12;
        const ang = Math.atan2(run, rise);
        const px = rise / len, py = run / len;
        for (const xs of [-1, 1]) {
          const cx = xs * (hb + ht) / 2, cy = (yb + yt) / 2;
          const b = new THREE.BoxGeometry(GB.boardW, len, GB.boardT);
          b.rotateZ(xs * ang);
          b.translate(cx + xs * px * GB.boardW / 2, cy + py * GB.boardW / 2, zs * (zOut + GB.boardT / 2));
          boards.push(b);
          const r = new THREE.BoxGeometry(0.12, len, 0.16);
          r.rotateZ(xs * ang);
          r.translate(cx + xs * px * (GB.boardW + 0.06), cy + py * (GB.boardW + 0.06), zs * (zOut + 0.1));
          reds.push(r);
        }
      }
      const inset = 0.5, base = yb + 0.3;
      const hw = hb - inset - 0.3 * hb / (g.ridge - yb), apex = g.ridge - inset * (g.ridge - yb) / hb - 0.15;
      const t = new THREE.Shape();
      t.moveTo(-hw, base);
      t.lineTo(hw, base);
      t.lineTo(0, apex);
      t.closePath();
      const pg = extrudeAlongZ(t, zs > 0 ? zOut : -zOut - 0.18, zs > 0 ? zOut + 0.18 : -zOut);
      const pp = pg.getAttribute("position"), uv = new Float32Array(pp.count * 2);
      for (let i = 0; i < pp.count; i++) {
        uv[i * 2] = (pp.getX(i) * zs + hw) / (2 * hw);
        uv[i * 2 + 1] = (pp.getY(i) - base) / (apex - base);
      }
      pg.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
      peds.push(pg);
    }
    const sg = mergeGeos(slabs);
    projUv(sg, G.wear.stone.tile);
    add("gable-walls", "Gable walls", sg, "stone");
    const bg = mergeGeos(boards);
    projUv(bg, G.wear.stone.tile);
    add("barge-boards", "Bargeboards", bg, "stone");
    add("pediment", "Carved gable pediments", mergeGeos(peds), "carved");
    const fasciaRing = (hx, hz, y, h, t) => {
      for (const xs of [-1, 1]) reds.push(boxAt(xs * (hx + t / 2), y, 0, t, h, hz * 2 + t * 2));
      for (const zs of [-1, 1]) reds.push(boxAt(0, y - 0.01, zs * (hz + t / 2), hx * 2, h, t));
    };
    fasciaRing(SK.hx, SK.hz, SK.y0 - 0.2, 0.36, 0.14);
    for (const xs of [-1, 1]) {
      reds.push(boxAt(xs * (MD.hx + 0.07), MD.y0 - 0.2, 0, 0.14, 0.36, MD.hz * 2 + 0.1));
      reds.push(boxAt(xs * (TP.hx + 0.07), TP.y0 - 0.2, 0, 0.14, 0.36, TP.hz * 2 + 0.1));
    }
    const C = G.column, B = G.beam;
    const by = (B.y0 + B.y1) / 2, bh = B.y1 - B.y0;
    for (const xs of [-1, 1]) reds.push(boxAt(xs * C.insetX, by, 0, B.thick, bh, C.insetZ * 2 + B.thick));
    for (const zs of [-1, 1]) reds.push(boxAt(0, by - 0.01, zs * C.insetZ, C.insetX * 2 - B.thick, bh, B.thick));
    for (const [z0, z1, ridge] of TP.sections) {
      reds.push(boxAt(0, ridge + 0.06, (z0 + z1) / 2, 0.36, 0.24, z1 - z0 + 0.24));
    }
    const rg = mergeGeos(reds);
    projUv(rg, G.wear.red.tile);
    add("roof-trim", "Eaves beam, fascias and ridge caps", rg, "red");
  }
  {
    const H = G.horn;
    const unit = curledHorn(0.46, 1, 0.2, 9);
    const mats = [];
    const place = (x, y, z, yaw, rise, mirror = 1) => {
      const sxz = 0.55 + 0.32 * rise;
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(sxz * mirror, rise, sxz)
      ));
    };
    for (const g of gables) {
      const zs = Math.sign(g.z), zf = Math.abs(g.z) + GB.slab + 0.16;
      place(0, g.ridge - 0.3, zs * zf, zs > 0 ? -Math.PI / 2 : Math.PI / 2, g.full ? H.apexRise * (g.ridge > 14.5 ? 1 : 0.92) : H.apexRise);
      const [fhb, fyb] = g.full ? [MD.hx, MD.y0] : [TP.hx, TP.y0];
      for (const xs of [-1, 1]) {
        place(xs * (fhb + 0.14), fyb + 0.02, zs * (zf - 0.02), xs > 0 ? 0 : Math.PI, H.footRise);
      }
    }
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      place(xs * (SK.hx - 0.28), SK.y0 + 0.02, zs * (SK.hz - 0.18), Math.atan2(-zs, xs), H.cornerRise);
    }
    addInst("chofa", "Chofa and rake-foot horns", unit, "gilt", mats);
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
      boxAt(0, 0.1, 0, S.ped, 0.2, S.ped),
      boxAt(0, 0.32, 0, S.ped * 0.8, 0.26, S.ped * 0.8),
      blade
    ]);
    projUv(unit, G.wear.stone.tile);
    const spots = [
      [-6.56, -11.6],
      [6.56, -11.6],
      [-6.56, 11.6],
      [6.56, 11.6],
      [-6.56, 0],
      [6.56, 0],
      [0, -11.65],
      [0, 11.65]
    ];
    addInst(
      "sema",
      "Bai sema boundary stones",
      unit,
      "stone",
      spots.map(([x, z]) => new THREE.Matrix4().setPosition(x, G.platform.slab1[1], z))
    );
  }
  {
    let makeTile = function(seed, draw) {
      if (!hasDom) return null;
      const cv = document.createElement("canvas");
      cv.width = cv.height = size;
      const ctx = cv.getContext("2d");
      if (!ctx) return null;
      const S = size;
      const wrapped = (fn) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save();
          ctx.translate(ox * S, oy * S);
          fn();
          ctx.restore();
        }
      };
      draw(ctx, rng(seed), S, wrapped);
      return cv;
    };
    const W = G.wear;
    const hasDom = typeof document !== "undefined" && typeof document.createElement === "function";
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t, a) => "rgba(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + "," + a + ")";
    const rng = (seed) => () => {
      seed = seed * 1664525 + 1013904223 >>> 0;
      return seed / 4294967296;
    };
    const cloud = (ctx, r, S, wrapped, tone, count, rad, alpha, blurPx) => {
      const marks = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, rad * S * (0.5 + r()), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = "blur(" + blurPx + "px)";
        for (const [x, y, rr, a] of marks) {
          ctx.fillStyle = css(tone, a);
          ctx.beginPath();
          ctx.arc(x, y, rr, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.filter = "none";
      });
    };
    const washes = (ctx, r, S, wrapped, tone, count, alpha, blurPx, wMin, wMax) => {
      const marks = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.5 * r()), wMin + (wMax - wMin) * r(), alpha * (0.5 + 0.5 * r())]);
      wrapped(() => {
        ctx.filter = "blur(" + blurPx + "px)";
        for (const [x, y0, len, w, a] of marks) {
          const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
          g.addColorStop(0, css(tone, a));
          g.addColorStop(0.4, css(tone, a * 0.6));
          g.addColorStop(1, css(tone, 0));
          ctx.fillStyle = g;
          ctx.fillRect(x - w / 2, y0, w, len);
        }
        ctx.filter = "none";
      });
    };
    const grain = (ctx, r, S, wrapped, tone, count, alpha) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) {
        const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4;
        p.rect(x, y, d, d);
      }
      wrapped(() => {
        ctx.fillStyle = css(tone, alpha);
        ctx.fill(p);
      });
    };
    const flakes = (ctx, r, S, wrapped, tone, rim, count, rad) => {
      for (let i = 0; i < count; i++) {
        const p = new Path2D();
        let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
        const R = rad * S * (0.4 + r()), n = 6 + Math.floor(r() * 12);
        for (let k = 0; k < n; k++) {
          a += (r() - 0.5) * 2;
          cx += Math.cos(a) * R * 0.45;
          cy += Math.sin(a) * R * 0.45 * 1.4;
          const rr = R * (0.35 + 0.5 * r());
          p.moveTo(cx + rr, cy);
          p.arc(cx, cy, rr, 0, Math.PI * 2);
        }
        wrapped(() => {
          ctx.lineWidth = 3;
          ctx.strokeStyle = css(rim, 0.7);
          ctx.stroke(p);
          ctx.fillStyle = css(tone, 0.92);
          ctx.fill(p);
        });
      }
    };
    const bind = (mat, cv, bump, repeatUv = true) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = repeatUv ? THREE.RepeatWrapping : THREE.ClampToEdgeWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };
    const rebase = (m, ratio) => {
      if (!hasDom) return;
      const c = m.color.clone();
      m.color.setRGB(c.r / Math.pow(ratio[0], 2.2), c.g / Math.pow(ratio[1], 2.2), c.b / Math.pow(ratio[2], 2.2));
    };
    {
      const P = W.stone;
      bind(materials.stone, makeTile(20260826, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.18, 0.4, 16);
        grain(ctx, r, S, wrapped, P.grain, 6e3, 0.07);
        washes(ctx, r, S, wrapped, P.wash, 9, 0.42, 9, 30, 110);
        washes(ctx, r, S, wrapped, P.streak, 7, 0.45, 3, 5, 16);
        cloud(ctx, r, S, wrapped, P.wash, 4, 0.1, 0.28, 20);
      }), P.bump);
    }
    {
      const P = W.red;
      rebase(materials.red, P.clean);
      bind(materials.red, makeTile(8261403, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.clean, 1);
        ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, [P.clean[0] * 0.8, P.clean[1] * 0.8, P.clean[2] * 0.8], 10, 0.14, 0.5, 12);
        washes(ctx, r, S, wrapped, P.grime, 18, 0.5, 6, 16, 70);
        flakes(ctx, r, S, wrapped, P.flake, P.rim, 6, 0.028);
        grain(ctx, r, S, wrapped, P.grain, 3e3, 0.1);
      }), P.bump);
    }
    {
      const P = W.roof;
      const avg = [P.avg, P.avg, P.avg];
      rebase(materials.tile, avg);
      rebase(materials.green, avg);
      const cv = makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.joint, 1);
        ctx.fillRect(0, 0, S, S);
        const cw = S / P.cols, rh = S / P.rows;
        const tiles = [];
        for (let row = 0; row < P.rows; row++) {
          const off = row % 2 * cw / 2;
          for (let col = 0; col < P.cols; col++) {
            const x0 = col * cw + off + 1.5, x1 = x0 + cw - 3, y0 = row * rh + 1, y1 = y0 + rh - 2;
            const p = new Path2D();
            p.moveTo(x0, y0);
            p.lineTo(x1, y0);
            p.lineTo(x1, y1 - cw * 0.25);
            p.quadraticCurveTo((x0 + x1) / 2, y1 + cw * 0.12, x0, y1 - cw * 0.25);
            p.closePath();
            tiles.push({ p, t: P.loTone + (P.hiTone - P.loTone) * r() });
          }
        }
        wrapped(() => {
          for (const t of tiles) {
            ctx.fillStyle = css([t.t, t.t * (0.97 + 0.03 * r()), t.t * 0.96], 1);
            ctx.fill(t.p);
          }
        });
        cloud(ctx, r, S, wrapped, P.moss, 9, 0.12, 0.45, 10);
        cloud(ctx, r, S, wrapped, P.grime, 6, 0.16, 0.35, 16);
        grain(ctx, r, S, wrapped, P.joint, 2500, 0.08);
      });
      bind(materials.tile, cv, P.bump);
      bind(materials.green, cv, P.bump);
    }
    {
      const P = W.pediment;
      bind(materials.carved, makeTile(7, (ctx, r, S) => {
        ctx.fillStyle = P.ground;
        ctx.fillRect(0, 0, S, S);
        const mid = S / 2;
        const scroll = (x, y, w, h, dir, lw, col) => {
          ctx.strokeStyle = col;
          ctx.lineWidth = lw;
          ctx.lineCap = "round";
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.bezierCurveTo(x + dir * w * 0.2, y - h * 0.6, x + dir * w * 0.9, y - h * 0.9, x + dir * w * 0.6, y - h * 0.35);
          ctx.bezierCurveTo(x + dir * w * 0.45, y - h * 0.1, x + dir * w * 0.25, y - h * 0.2, x + dir * w * 0.35, y - h * 0.45);
          ctx.stroke();
        };
        for (let row = 0; row < 9; row++) {
          const y = S * (0.97 - row * 0.095), half = mid * (0.94 - row * 0.1);
          const n = 7 - Math.floor(row / 2);
          for (let i = 0; i < n; i++) {
            const x = half * (i + 0.5) / n, w = half / n * 1.1, h = S * 0.11;
            for (const dir of [-1, 1]) {
              scroll(mid + dir * x, y, w, h, dir, 6, P.gold);
              scroll(mid + dir * x, y, w * 0.8, h * 0.8, dir, 2, P.goldHi);
              scroll(mid + dir * (x + w * 0.5), y - h * 0.15, w * 0.5, h * 0.5, -dir, 2.5, P.goldLo);
            }
          }
        }
        for (let k = 0; k < 5; k++) {
          const y0 = S * (0.98 - k * 0.19), h = S * 0.22, w = S * (0.11 - k * 0.012);
          ctx.fillStyle = k % 2 ? P.goldHi : P.gold;
          ctx.beginPath();
          ctx.moveTo(mid, y0);
          ctx.quadraticCurveTo(mid + w, y0 - h * 0.45, mid, y0 - h);
          ctx.quadraticCurveTo(mid - w, y0 - h * 0.45, mid, y0);
          ctx.fill();
          ctx.fillStyle = P.ground;
          ctx.beginPath();
          ctx.moveTo(mid, y0 - h * 0.12);
          ctx.quadraticCurveTo(mid + w * 0.4, y0 - h * 0.45, mid, y0 - h * 0.82);
          ctx.quadraticCurveTo(mid - w * 0.4, y0 - h * 0.45, mid, y0 - h * 0.12);
          ctx.fill();
        }
        ctx.fillStyle = P.goldHi;
        const teeth = 26;
        for (let i = 0; i < teeth; i++) {
          const t0 = i / teeth, t1 = (i + 0.5) / teeth, t2 = (i + 1) / teeth;
          for (const dir of [-1, 1]) {
            const px = (t) => mid + dir * mid * 0.97 * (1 - t), py = (t) => S * (0.03 + 0.95 * (1 - t));
            ctx.beginPath();
            ctx.moveTo(px(t0), py(t0));
            ctx.lineTo(px(t1) + dir * 9, py(t1) - 9);
            ctx.lineTo(px(t2), py(t2));
            ctx.fill();
          }
          ctx.beginPath();
          ctx.moveTo(t0 * S, S * 0.985);
          ctx.lineTo(t1 * S, S * 0.955);
          ctx.lineTo(t2 * S, S * 0.985);
          ctx.fill();
        }
        ctx.fillStyle = P.goldHi;
        for (let i = 0; i < 60; i++) {
          const t = r(), y = S * (0.15 + 0.8 * t), x = mid + (r() - 0.5) * mid * 1.7 * (0.15 + 0.85 * t);
          ctx.beginPath();
          ctx.arc(x, y, 2 + 2 * r(), 0, Math.PI * 2);
          ctx.fill();
        }
      }), 0.02, false);
    }
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVWJvc290IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTcuMDAgeCAyNC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWi5cbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIE1PTlVNRU5UQUwgYnVpbGRpbmdzLCBhbmQgdW5saWtlIHRoZSBzaGFyZWQgcmV0YWlsIG1vZHVsZSBpdHMgZm9ybSBpc1xuICogbm90IGEgYm94OiB0aGUgcmVjb2duaXNhYmxlIGZlYXR1cmUgaXMgYSBjdXJ2ZWQgb3IgdGllcmVkIHByb2ZpbGUgdGhhdCBoYXMgdG8gc3Vydml2ZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbS4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGhlcmUgaXMgdGhlcmVmb3JlIHRoZSBMQVRIRSAtLVxuICogYSBwcm9maWxlIHJldm9sdmVkIGFib3V0ICtZIC0tIGFuZCB0aGUgdGllcmVkL3N0ZXBwZWQgbWVyZ2UsIG5vdCB0aGUgcGFyYW1ldGVyaXNlZCBzaG9wZnJvbnQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwcyBhcmUgcmVjb3JkZWQgYXMgYmFyZSBmaWxlbmFtZXMgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLiBFdmVyeSBob3N0IGRlcml2ZXMgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJ1Ym9zb3RcIixcbiAgICBcIm5hbWVcIjogXCJVYm9zb3RcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJVYm9zb3RcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMTQuMDAgeCAxNy4wMCB4IDI0LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIGxvbmcgYXhpcyBvbiBaLlxcbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RvbmVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMjQyODk1NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJlZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDc0MTg2NjYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMjgxNDk0NixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC43OCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdyZWVuXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzIzNjE2OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC43NixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdpbHRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5MDcxNjk4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRhcmtcIixcbiAgICAgICAgXCJjb2xvclwiOiA1NTIyNzQ3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY2FydmVkXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNDUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMixcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiZmxvb3JcIjogMS4zLFxuICAgICAgXCJwbGF0Zm9ybVwiOiB7XG4gICAgICAgIFwic2xhYjFcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICA2Ljg1LFxuICAgICAgICAgIDEyXG4gICAgICAgIF0sXG4gICAgICAgIFwic2xhYjJcIjogW1xuICAgICAgICAgIDAuNDUsXG4gICAgICAgICAgMS4wOCxcbiAgICAgICAgICA2LjM1LFxuICAgICAgICAgIDExLjNcbiAgICAgICAgXSxcbiAgICAgICAgXCJjYXBcIjogW1xuICAgICAgICAgIDEuMDgsXG4gICAgICAgICAgMS4zLFxuICAgICAgICAgIDYuNDUsXG4gICAgICAgICAgMTEuNFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJub3RjaFwiOiB7XG4gICAgICAgIFwiaGFsZlhcIjogMS45LFxuICAgICAgICBcInpJbm5lclwiOiA5LjZcbiAgICAgIH0sXG4gICAgICBcInN0YWlyXCI6IHtcbiAgICAgICAgXCJzdGVwc1wiOiA0LFxuICAgICAgICBcInowXCI6IDkuNixcbiAgICAgICAgXCJ6MVwiOiAxMS4zLFxuICAgICAgICBcInlCYXNlXCI6IDAuNDUsXG4gICAgICAgIFwidG9wXCI6IDEuMyxcbiAgICAgICAgXCJ0cmVhZEhhbGZYXCI6IDEuNlxuICAgICAgfSxcbiAgICAgIFwicGFyYXBldFwiOiB7XG4gICAgICAgIFwib3V0ZXJcIjogNi4xMixcbiAgICAgICAgXCJ0aGlja1wiOiAwLjMyLFxuICAgICAgICBcInkwXCI6IDEuMyxcbiAgICAgICAgXCJ5MVwiOiAxLjg1LFxuICAgICAgICBcImdhcEhhbGZYXCI6IDEuOVxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJod1wiOiAwLjI3NSxcbiAgICAgICAgXCJ5MFwiOiAxLjMsXG4gICAgICAgIFwieTFcIjogNi42LFxuICAgICAgICBcImluc2V0WFwiOiA1Ljk1LFxuICAgICAgICBcImluc2V0WlwiOiAxMC4yLFxuICAgICAgICBcImxvbmdDb3VudFwiOiAxMSxcbiAgICAgICAgXCJzaG9ydENvdW50XCI6IDRcbiAgICAgIH0sXG4gICAgICBcImJlYW1cIjoge1xuICAgICAgICBcInkwXCI6IDYuMjUsXG4gICAgICAgIFwieTFcIjogNi44NSxcbiAgICAgICAgXCJ0aGlja1wiOiAwLjY1XG4gICAgICB9LFxuICAgICAgXCJ3YWxsXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjMsXG4gICAgICAgIFwieTFcIjogNi45LFxuICAgICAgICBcImh4XCI6IDUuNSxcbiAgICAgICAgXCJoelwiOiA4LjRcbiAgICAgIH0sXG4gICAgICBcImRvb3JcIjoge1xuICAgICAgICBcIndcIjogMixcbiAgICAgICAgXCJoXCI6IDMuNixcbiAgICAgICAgXCJmcmFtZVwiOiAwLjMsXG4gICAgICAgIFwicHJvdWRcIjogMC4xXG4gICAgICB9LFxuICAgICAgXCJ3aW5kb3dcIjoge1xuICAgICAgICBcIndcIjogMS4xLFxuICAgICAgICBcImhcIjogMi4yLFxuICAgICAgICBcInNpbGxcIjogMi42LFxuICAgICAgICBcImZyYW1lXCI6IDAuMTYsXG4gICAgICAgIFwiYmF5c1wiOiBbXG4gICAgICAgICAgMS4wMixcbiAgICAgICAgICAzLjA2LFxuICAgICAgICAgIDUuMSxcbiAgICAgICAgICA3LjE0XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNraXJ0XCI6IHtcbiAgICAgICAgXCJoeFwiOiA2LjgsXG4gICAgICAgIFwiaHpcIjogMTAuOSxcbiAgICAgICAgXCJ5MFwiOiA2LjksXG4gICAgICAgIFwiaHhJXCI6IDQuNyxcbiAgICAgICAgXCJoeklcIjogOC44LFxuICAgICAgICBcInkxXCI6IDguNSxcbiAgICAgICAgXCJzb2ZmaXRcIjogNi41LFxuICAgICAgICBcImJhbmRcIjogMC40NVxuICAgICAgfSxcbiAgICAgIFwibWlkXCI6IHtcbiAgICAgICAgXCJoeFwiOiA1LFxuICAgICAgICBcInkwXCI6IDksXG4gICAgICAgIFwiZHJvcFwiOiA4LjA1LFxuICAgICAgICBcImh4VFwiOiAzLjE1LFxuICAgICAgICBcInkxXCI6IDEwLjg1LFxuICAgICAgICBcImh6XCI6IDguOTUsXG4gICAgICAgIFwiYmFuZFwiOiAwLjQ1XG4gICAgICB9LFxuICAgICAgXCJ0b3BcIjoge1xuICAgICAgICBcImh4XCI6IDMuMSxcbiAgICAgICAgXCJ5MFwiOiAxMC45LFxuICAgICAgICBcImRyb3BcIjogMTAuMyxcbiAgICAgICAgXCJiYW5kXCI6IDAuNDUsXG4gICAgICAgIFwiaHpcIjogOC45NSxcbiAgICAgICAgXCJzZWN0aW9uc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTYuMDMsXG4gICAgICAgICAgICA2LjAzLFxuICAgICAgICAgICAgMTQuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNixcbiAgICAgICAgICAgIDguOTUsXG4gICAgICAgICAgICAxNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTguOTUsXG4gICAgICAgICAgICAtNixcbiAgICAgICAgICAgIDE0XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJnYWJsZVwiOiB7XG4gICAgICAgIFwic2xhYlwiOiAwLjE1LFxuICAgICAgICBcImJvYXJkV1wiOiAwLjQyLFxuICAgICAgICBcImJvYXJkVFwiOiAwLjNcbiAgICAgIH0sXG4gICAgICBcImhvcm5cIjoge1xuICAgICAgICBcImFwZXhSaXNlXCI6IDIuMzUsXG4gICAgICAgIFwiZm9vdFJpc2VcIjogMS4zLFxuICAgICAgICBcImNvcm5lclJpc2VcIjogMS40XG4gICAgICB9LFxuICAgICAgXCJzZW1hXCI6IHtcbiAgICAgICAgXCJoXCI6IDEuMDUsXG4gICAgICAgIFwicGVkXCI6IDAuNlxuICAgICAgfSxcbiAgICAgIFwid2VhclwiOiB7XG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwic3RvbmVcIjoge1xuICAgICAgICAgIFwidGlsZVwiOiAzLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjAzNSxcbiAgICAgICAgICBcIm1vdHRsZVwiOiBbXG4gICAgICAgICAgICAwLjg2LFxuICAgICAgICAgICAgMC44NixcbiAgICAgICAgICAgIDAuODdcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwid2FzaFwiOiBbXG4gICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgIDAuNThcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3RyZWFrXCI6IFtcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAwLjYzLFxuICAgICAgICAgICAgMC42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmFpblwiOiBbXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjcyXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInJlZFwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDIsXG4gICAgICAgICAgXCJidW1wXCI6IDAuMDUsXG4gICAgICAgICAgXCJjbGVhblwiOiBbXG4gICAgICAgICAgICAwLjU2NSxcbiAgICAgICAgICAgIDAuMzEsXG4gICAgICAgICAgICAwLjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZmxha2VcIjogW1xuICAgICAgICAgICAgMC45NixcbiAgICAgICAgICAgIDAuOTYsXG4gICAgICAgICAgICAwLjk1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJpbVwiOiBbXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmltZVwiOiBbXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgMC4xOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmFpblwiOiBbXG4gICAgICAgICAgICAwLjQ1LFxuICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgIDAuMjNcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicm9vZlwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDIuNCxcbiAgICAgICAgICBcImNvbHNcIjogMTEsXG4gICAgICAgICAgXCJyb3dzXCI6IDcsXG4gICAgICAgICAgXCJidW1wXCI6IDAuMDQ1LFxuICAgICAgICAgIFwiYXZnXCI6IDAuOSxcbiAgICAgICAgICBcImpvaW50XCI6IFtcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgICAwLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImxvVG9uZVwiOiAwLjg0LFxuICAgICAgICAgIFwiaGlUb25lXCI6IDEsXG4gICAgICAgICAgXCJtb3NzXCI6IFtcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgMC41MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmltZVwiOiBbXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjdcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicGVkaW1lbnRcIjoge1xuICAgICAgICAgIFwiZ3JvdW5kXCI6IFwiIzc0NDAyZVwiLFxuICAgICAgICAgIFwiZ29sZFwiOiBcIiNhODg2NWFcIixcbiAgICAgICAgICBcImdvbGRIaVwiOiBcIiNjOWE3NzRcIixcbiAgICAgICAgICBcImdvbGRMb1wiOiBcIiM3YTVhM2FcIlxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVVYm9zb3RNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1Vib3NvdCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiogUHJvamVjdCBVVnMgaW4gTUVUUkVTIG92ZXIgYSB0aWxlIHNpemUsIGJ5IGVhY2ggdmVydGV4J3Mgbm9ybWFsOiB2ZXJ0aWNhbCBmYWNlcyBnZXQgKGFsb25nLFxuICAgKiAgaGVpZ2h0KSwgaG9yaXpvbnRhbHMgZ2V0IHBsYW4sIGFuZCBhIHJvb2Ygc2xvcGUgZ2V0cyAoYWxvbmcsIGRpc3RhbmNlLXVwLXRoZS1zbG9wZSkgc28gYSB0aWxlXG4gICAqICBjb3Vyc2UgaXMgbm90IGZvcmVzaG9ydGVuZWQgb24gYSA1Mi1kZWdyZWUgcGl0Y2guIEV2ZXJ5IGdlb21ldHJ5IGhlcmUgaXMgbm9uLWluZGV4ZWQgd2l0aFxuICAgKiAgcGVyLWZhY2Ugbm9ybWFscywgc28gYSBmYWNlIG5ldmVyIHN0cmFkZGxlcyB0d28gcHJvamVjdGlvbnMuICovXG4gIGZ1bmN0aW9uIHByb2pVdihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB0aWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBueCA9IG4uZ2V0WChpKSwgbnkgPSBuLmdldFkoaSksIG56ID0gbi5nZXRaKGkpO1xuICAgICAgY29uc3QgaG9yaXogPSBNYXRoLnNxcnQobnggKiBueCArIG56ICogbnopO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGhvcml6IDwgMC4yKSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB1ID0gTWF0aC5hYnMobngpID49IE1hdGguYWJzKG56KSA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICAgICAgdiA9IHAuZ2V0WShpKSAvIGhvcml6O1xuICAgICAgfVxuICAgICAgb3V0W2kgKiAyXSA9IHUgLyB0aWxlOyBvdXRbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAyKSk7XG4gIH1cblxuICAvKiogQSBxdWFkIHN0cmlwIGJldHdlZW4gdHdvIGhvcml6b250YWwgcmVjdGFuZ2xlcyBbaHgsIGh6LCB5XSAtLSBmb3VyIHRyYXBlem9pZHMgc2hhcmluZyB0aGVpclxuICAgKiAgaGlwIGVkZ2VzLiBUaGUgd2luZGluZyBpcyBmaXhlZCBwZXIgZmFjZSBhZ2FpbnN0IGEgaGludCBkaXJlY3Rpb24sIHNvIHRoZSBzYW1lIGJ1aWxkZXIgbWFrZXNcbiAgICogIGFuIG91dHdhcmQtZmFjaW5nIHNsb3BlLCBhIGRvd253YXJkIHNvZmZpdCBhbmQgYW4gaW53YXJkIGNsb3Npbmcgd2FsbC4gKi9cbiAgZnVuY3Rpb24gcmluZyhyMDogbnVtYmVyW10sIHIxOiBudW1iZXJbXSwgaGludDogKHN4OiBudW1iZXIsIHN6OiBudW1iZXIpID0+IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAgIGNvbnN0IGNvcm5lciA9IChyOiBudW1iZXJbXSwgaTogbnVtYmVyKSA9PiBbW3JbMF0sIHJbMl0sIC1yWzFdXSwgW3JbMF0sIHJbMl0sIHJbMV1dLCBbLXJbMF0sIHJbMl0sIHJbMV1dLCBbLXJbMF0sIHJbMl0sIC1yWzFdXV1baV07XG4gICAgY29uc3QgZGlycyA9IFtbMSwgMF0sIFswLCAxXSwgWy0xLCAwXSwgWzAsIC0xXV07XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgNDsgcysrKSB7XG4gICAgICBjb25zdCBhID0gY29ybmVyKHIwLCBzKSwgYiA9IGNvcm5lcihyMCwgKHMgKyAxKSAlIDQpLCBjID0gY29ybmVyKHIxLCAocyArIDEpICUgNCksIGQgPSBjb3JuZXIocjEsIHMpO1xuICAgICAgY29uc3QgaCA9IGhpbnQoZGlyc1tzXVswXSwgZGlyc1tzXVsxXSk7XG4gICAgICBjb25zdCB0cmkgPSAocDogbnVtYmVyW10sIHE6IG51bWJlcltdLCByOiBudW1iZXJbXSkgPT4ge1xuICAgICAgICBjb25zdCB1eCA9IHFbMF0gLSBwWzBdLCB1eSA9IHFbMV0gLSBwWzFdLCB1eiA9IHFbMl0gLSBwWzJdLCB2eCA9IHJbMF0gLSBwWzBdLCB2eSA9IHJbMV0gLSBwWzFdLCB2eiA9IHJbMl0gLSBwWzJdO1xuICAgICAgICBjb25zdCBueCA9IHV5ICogdnogLSB1eiAqIHZ5LCBueSA9IHV6ICogdnggLSB1eCAqIHZ6LCBueiA9IHV4ICogdnkgLSB1eSAqIHZ4O1xuICAgICAgICBpZiAobnggKiBoWzBdICsgbnkgKiBoWzFdICsgbnogKiBoWzJdIDwgMCkgcG9zLnB1c2goLi4ucCwgLi4uciwgLi4ucSk7IGVsc2UgcG9zLnB1c2goLi4ucCwgLi4ucSwgLi4ucik7XG4gICAgICB9O1xuICAgICAgdHJpKGEsIGIsIGMpOyB0cmkoYSwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICByZXR1cm4gZztcbiAgfVxuICBjb25zdCBvdXRVcCA9IChzeDogbnVtYmVyLCBzejogbnVtYmVyKSA9PiBbc3gsIDEsIHN6XTtcbiAgY29uc3Qgb3V0d2FyZCA9IChzeDogbnVtYmVyLCBzejogbnVtYmVyKSA9PiBbc3gsIDAsIHN6XTtcbiAgY29uc3QgaW53YXJkID0gKHN4OiBudW1iZXIsIHN6OiBudW1iZXIpID0+IFstc3gsIDAsIC1zel07XG4gIGNvbnN0IGRvd24gPSAoKSA9PiBbMCwgLTEsIDBdO1xuXG4gIC8qKiBBIHJvb2YgbGF5ZXIncyBnbGF6ZSBiYW5kIGFzIGEgY2xvc2VkIHByaXNtOiB0aGUgYm90dG9tICdiYW5kJyBtZXRyZXMgb2YgcmlzZSBvZiB0aGUgc2xvcGUgb25cbiAgICogIGJvdGggc2lkZXMsIGV4dHJ1ZGVkIGFsb25nIFouICovXG4gIC8qKiBBIHJlY3Rhbmd1bGFyIHBsYW4gd2l0aCBhIHN0YWlyIG5vdGNoIGN1dCBpbnRvIEJPVEggc2hvcnQgZW5kcy4gKi9cbiAgZnVuY3Rpb24gbm90Y2hlZFJlY3QyKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICAgIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSxcbiAgICAgICAgICAgICAgICAgWy1oeCwgLWh6XSwgWy1ueCwgLWh6XSwgWy1ueCwgLXpJbm5lcl0sIFtueCwgLXpJbm5lcl0sIFtueCwgLWh6XV07XG4gICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICAgIHNoYXBlLmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBzaGFwZTtcbiAgfVxuICBmdW5jdGlvbiBiYW5kUHJvZmlsZShoYjogbnVtYmVyLCB5MDogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBiYW5kOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gICAgY29uc3QgaGkgPSBoYiAtIGJhbmQgLyBwaXRjaDtcbiAgICBjb25zdCBzID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgcy5tb3ZlVG8oLWhiLCB5MCk7IHMubGluZVRvKGhiLCB5MCk7IHMubGluZVRvKGhpLCB5MCArIGJhbmQpOyBzLmxpbmVUbygtaGksIHkwICsgYmFuZCk7IHMuY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHM7XG4gIH1cbiAgY29uc3QgRkxPT1IgPSBHLmZsb29yIGFzIG51bWJlcjtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0b25lIHBsYXRmb3JtXG4gICAqIEJvdHRvbSB0ZXJyYWNlLCBwbGludGgsIHByb3VkIGNhcCBjb3Vyc2UsIGEgZm91ci10cmVhZCBzdGFpciBhdCBFQUNIIGVuZCBjdXQgaW50byB0aGUgcGxpbnRoXG4gICAqIHBsYW4gYXMgYSBub3RjaCwgYW5kIHRoZSBsb3cgcGFyYXBldCBiZXR3ZWVuIHRoZSBjb2x1bW4gYmFzZXM6IGFsbCBvbmUgd2hpdGV3YXNoZWQgc3RvbmUgYW5kXG4gICAqIHRoZXJlZm9yZSBPTkUgY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgUCA9IEcucGxhdGZvcm0sIE4gPSBHLm5vdGNoLCBTVCA9IEcuc3RhaXIsIFBBID0gRy5wYXJhcGV0LCBDID0gRy5jb2x1bW47XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBbYTAsIGExLCBhaHgsIGFoel0gPSBQLnNsYWIxO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgKGEwICsgYTEpIC8gMiwgMCwgYWh4ICogMiwgYTEgLSBhMCwgYWh6ICogMikpO1xuICAgIGZvciAoY29uc3QgW3kwLCB5MSwgaHgsIGh6XSBvZiBbUC5zbGFiMiwgUC5jYXBdKSB7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKG5vdGNoZWRSZWN0MihoeCwgaHosIE4uaGFsZlgsIE4ueklubmVyKSwgeTAsIHkxKSk7XG4gICAgfVxuICAgIC8vIFRyZWFkcyBvY2N1cHkgb25seSB0aGVpciBvd24gZ29pbmcgYW5kIHN0YXJ0IGp1c3QgaW5zaWRlIHRoZSB0ZXJyYWNlIHNsYWIsIHNvIG5vIHR3b1xuICAgIC8vIHVuZGVyc2lkZXMgc2hhcmUgdGhlIGdyb3VuZCBwbGFuZS5cbiAgICBjb25zdCBydW4gPSAoU1QuejEgLSBTVC56MCkgLyBTVC5zdGVwcywgcmlzZSA9IChTVC50b3AgLSBTVC55QmFzZSkgLyBTVC5zdGVwcztcbiAgICBmb3IgKGNvbnN0IHpzIG9mIFstMSwgMV0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykge1xuICAgICAgICBjb25zdCB6T3V0ID0gU1QuejEgLSBpICogcnVuLCB0b3AgPSBTVC55QmFzZSArIChpICsgMSkgKiByaXNlLCBib3QgPSBTVC55QmFzZSAtIDAuMDE7XG4gICAgICAgIHBhcnRzLnB1c2goYm94QXQoMCwgKHRvcCArIGJvdCkgLyAyLCB6cyAqICh6T3V0IC0gcnVuIC8gMiksIFNULnRyZWFkSGFsZlggKiAyLCB0b3AgLSBib3QsIHJ1bikpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBQYXJhcGV0OiBzaWRlIHJ1bnMgdGhlIGZ1bGwgY29sb25uYWRlIGxlbmd0aCwgZW5kIHJ1bnMgc3RvcHBpbmcgYXQgdGhlIHNpZGUgcnVucycgaW5uZXJcbiAgICAvLyBmYWNlcyBhbmQgYXQgdGhlIHN0YWlyIG9wZW5pbmcuXG4gICAgY29uc3QgcGggPSBQQS55MSAtIFBBLnkwLCBweSA9IChQQS55MCArIFBBLnkxKSAvIDIsIGlubmVyID0gUEEub3V0ZXIgLSBQQS50aGljaztcbiAgICBjb25zdCB6RW5kID0gQy5pbnNldFogKyBQQS50aGljayAvIDI7XG4gICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSBwYXJ0cy5wdXNoKGJveEF0KHhzICogKFBBLm91dGVyIC0gUEEudGhpY2sgLyAyKSwgcHksIDAsIFBBLnRoaWNrLCBwaCwgekVuZCAqIDIpKTtcbiAgICBmb3IgKGNvbnN0IHpzIG9mIFstMSwgMV0pIGZvciAoY29uc3QgeHMgb2YgWy0xLCAxXSkge1xuICAgICAgY29uc3QgeDAgPSBQQS5nYXBIYWxmWCwgeDEgPSBpbm5lcjtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoeHMgKiAoeDAgKyB4MSkgLyAyLCBweSAtIDAuMDEsIHpzICogQy5pbnNldFosIHgxIC0geDAsIHBoLCBQQS50aGljaykpO1xuICAgIH1cbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIC8vIEdyb3VuZCBkaXJ0IGFuZCB0aGUgYmxhY2sgd2VhdGhlcmluZyB0aGUgcGxhdGUgc2hvd3Mgb24gdGhlIHBsaW50aCwgYXMgYSBwZXItdmVydGV4IHRpbnQgb25cbiAgICAvLyB0b3Agb2YgdGhlIHN0b25lIHRpbGU6IHRoZSBwbGF0ZSdzIGJvdHRvbSBjb3Vyc2VzIG1lYXN1cmUgZGlzdGluY3RseSBkYXJrZXIgdGhhbiB0aGUgZGVjay5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCAwLCBGTE9PUiwgWzAuODAsIDAuODEsIDAuNzldKTtcbiAgICBwcm9qVXYoZ2VvLCBHLndlYXIuc3RvbmUudGlsZSk7XG4gICAgYWRkKCdwbGF0Zm9ybScsICdTdG9uZSBwbGF0Zm9ybSwgc3RhaXJzIGFuZCBwYXJhcGV0JywgZ2VvLCAnc3RvbmUnKTtcbiAgICBjb2xsaWRlcnNbJ3BsYXRmb3JtJ10gPSB7XG4gICAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgOC41LCAwXSwgaGFsZkV4dGVudHM6IFs3LjAsIDguNSwgMTIuMF0sXG4gICAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGU7IGEgbGV2ZWwgJ1xuICAgICAgICAgICArICdidWlsZGVyIGNvbGxpZGVzIHdpdGggdGhlIGhhbGwsIG5vdCB3aXRoIGl0cyB0aGlydHkgaW5kaXZpZHVhbCBjb2x1bW5zLicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGFsbCBib2R5IGFuZCBkb29yIHN1cnJvdW5kc1xuICAgKiBBIFNPTElEIGJveCBpbnNpZGUgdGhlIGNvbG9ubmFkZSAtLSBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvIHRoZXJlIGlzXG4gICAqIG5vIGludGVyaW9yLCBhbmQgdGhlIGRvb3J3YXlzIG5lZWQgbm8gb3BlbmluZyBjdXQuIFR3byBzdG9uZSBkb29yIHN1cnJvdW5kcyBzdGFuZCBwcm91ZCBvZlxuICAgKiB0aGUgZW5kIGZhY2VzOyB0aGVpciBmZWV0IGFyZSBzdW5rIGludG8gdGhlIGNhcCBjb3Vyc2Ugc28gbm8gdW5kZXJzaWRlIHNoYXJlcyBpdHMgcGxhbmUuICovXG4gIHtcbiAgICBjb25zdCBXID0gRy53YWxsLCBEID0gRy5kb29yO1xuICAgIGNvbnN0IHBhcnRzID0gW2JveEF0KDAsIChXLnkwICsgVy55MSkgLyAyLCAwLCBXLmh4ICogMiwgVy55MSAtIFcueTAsIFcuaHogKiAyKV07XG4gICAgY29uc3QgZncgPSBELncgKyAyICogRC5mcmFtZSwgZmggPSBELmggKyBELmZyYW1lLCBmeTAgPSBGTE9PUiAtIDAuMTA7XG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSBwYXJ0cy5wdXNoKGJveEF0KDAsIChmeTAgKyBGTE9PUiArIGZoKSAvIDIsIHpzICogKFcuaHogKyBELnByb3VkIC8gMiksIGZ3LCBGTE9PUiArIGZoIC0gZnkwLCBELnByb3VkKSk7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBwcm9qVXYoZ2VvLCBHLndlYXIuc3RvbmUudGlsZSk7XG4gICAgYWRkKCd3YWxsJywgJ0hhbGwgd2FsbCBib2R5IGFuZCBkb29yIHN1cnJvdW5kcycsIGdlbywgJ3N0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRvb3IgYW5kIHdpbmRvdyBsZWF2ZXNcbiAgICogVGhlIHBsYXRlJ3Mgb3BlbmluZ3MgYXJlIGRhcmsgdGltYmVyIGxlYXZlcyBpbiB3aGl0ZSBzdXJyb3VuZHMuIExlYXZlcyBhcmUgcHJvdWQgcGFuZWxzOiB0aGVcbiAgICogYm9keSBpcyBzb2xpZCwgc28gYSBzdW5rIHBhbmVsIHdvdWxkIGJlIGluc2lkZSBpdCBhbmQgaW52aXNpYmxlLiBEb29ycyBhcmUgdHdvIHBhbmVscyBtZXJnZWQ7XG4gICAqIHRoZSBzaXh0ZWVuIHdpbmRvdyBsZWF2ZXMgYXJlIG9uZSBJbnN0YW5jZWRNZXNoLCB0aGVpciBzdXJyb3VuZHMgYW5vdGhlci4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLndhbGwsIEQgPSBHLmRvb3IsIFdJID0gRy53aW5kb3c7XG4gICAgY29uc3QgbGVhdmVzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSBsZWF2ZXMucHVzaChib3hBdCgwLCBGTE9PUiArIEQuaCAvIDIsIHpzICogKFcuaHogKyBELnByb3VkICsgMC4wMyksIEQudywgRC5oLCAwLjA2KSk7XG4gICAgYWRkKCdkb29yd2F5JywgJ0Rvb3J3YXlzJywgbWVyZ2VHZW9zKGxlYXZlcyksICdkYXJrJyk7XG5cbiAgICBjb25zdCBmcmFtZSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjEwLCBXSS5oICsgMiAqIFdJLmZyYW1lLCBXSS53ICsgMiAqIFdJLmZyYW1lKTtcbiAgICBwcm9qVXYoZnJhbWUsIEcud2Vhci5zdG9uZS50aWxlKTtcbiAgICBjb25zdCBsZWFmID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMDYsIFdJLmgsIFdJLncpO1xuICAgIGNvbnN0IGZtOiBUSFJFRS5NYXRyaXg0W10gPSBbXSwgbG06IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGNvbnN0IGN5ID0gRkxPT1IgKyBXSS5zaWxsICsgV0kuaCAvIDI7XG4gICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSBmb3IgKGNvbnN0IGJ6IG9mIFdJLmJheXMgYXMgbnVtYmVyW10pIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkge1xuICAgICAgZm0ucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHhzICogKFcuaHggKyAwLjA1KSwgY3ksIHpzICogYnopKTtcbiAgICAgIGxtLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4cyAqIChXLmh4ICsgMC4xMCArIDAuMDMpLCBjeSwgenMgKiBieikpO1xuICAgIH1cbiAgICBhZGRJbnN0KCd3aW5kb3ctZnJhbWVzJywgJ1dpbmRvdyBzdXJyb3VuZHMnLCBmcmFtZSwgJ3N0b25lJywgZm0pO1xuICAgIGFkZEluc3QoJ3dpbmRvdy1sZWF2ZXMnLCAnV2luZG93IGxlYXZlcycsIGxlYWYsICdkYXJrJywgbG0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwZXJpc3R5bGUgY29sdW1uc1xuICAgKiBUaGlydHkgc3F1YXJlIHJlZCBjb2x1bW5zIGFzIE9ORSBJbnN0YW5jZWRNZXNoOiBlbGV2ZW4gYSBzaWRlIGFuZCBmb3VyIGJldHdlZW4gdGhlIGNvcm5lcnNcbiAgICogb24gZWFjaCBlbmQsIGNvdW50ZWQgb2ZmIHRoZSBwbGF0ZSdzIHJpZ2h0LWhhbmQgZWxldmF0aW9uLiBUaGVpciBoZWFkcyBhcmUgYnVyaWVkIGluIHRoZVxuICAgKiBlYXZlcyBiZWFtLCB3aGljaCBpcyB3aGF0IGNhcnJpZXMgdGhlIHNraXJ0LiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY29sdW1uO1xuICAgIGNvbnN0IHVuaXQgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoQy5odyAqIDIsIEMueTEgLSBDLnkwLCBDLmh3ICogMik7XG4gICAgcHJvalV2KHVuaXQsIEcud2Vhci5yZWQudGlsZSk7XG4gICAgY29uc3QgY3kgPSAoQy55MCArIEMueTEpIC8gMjtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEMubG9uZ0NvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHogPSAtQy5pbnNldFogKyAoMiAqIEMuaW5zZXRaICogaSkgLyAoQy5sb25nQ291bnQgLSAxKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKC1DLmluc2V0WCwgY3ksIHopKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKEMuaW5zZXRYLCBjeSwgeikpO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBDLnNob3J0Q291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeCA9IC1DLmluc2V0WCArICgyICogQy5pbnNldFggKiBpKSAvIChDLnNob3J0Q291bnQgKyAxKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIGN5LCAtQy5pbnNldFopKTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIGN5LCBDLmluc2V0WikpO1xuICAgIH1cbiAgICBhZGRJbnN0KCdjb2x1bW5zJywgJ1BlcmlzdHlsZSBjb2x1bW5zJywgdW5pdCwgJ3JlZCcsIG1hdHMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb29mXG4gICAqIEZvdXIgcmVnaXN0ZXJzLCByZWFkIG9mZiB0aGUgcHJveHkgZWxldmF0aW9uczpcbiAgICogICBza2lydCAgLS0gYSBoaXBwZWQgcG9ydGljbyByaW5nIG92ZXIgdGhlIGNvbG9ubmFkZSwgMzcgZGVncmVlcywgZWF2ZXMgaHcgNi44IGF0IDYuNCBtO1xuICAgKiAgIG1pZCAgICAtLSBvbmUgNDUtZGVncmVlIGxheWVyIHRoZSBmdWxsIDE4IG0sIGVhdmVzIGh3IDUuMCBhdCA5LjAgbTtcbiAgICogICB0b3AgICAgLS0gdGhlIGdhYmxlLCB0ZWxlc2NvcGVkOiBjZW50cmUgcmlkZ2UgMTQuOCBvdmVyIDEyIG0sIGVuZCByaWRnZXMgMTQuMCBvdmVyIDMgbSBlYWNoLFxuICAgKiAgICAgICAgICAgICBvbmUgc2hhcmVkIGVhdmVzIGxpbmUgYXQgaHcgMy4xIC8gMTAuOSBtLlxuICAgKiBFYWNoIGxheWVyIGlzIHRocmVlIHNvbGlkczogYSBXSElURSBSSVNFUiAodGhlIHZlcnRpY2FsIGZhc2NpYSBiYW5kIHVuZGVyIHRoZSBlYXZlcywgZHJvcHBlZFxuICAgKiBiZWxvdyB0aGUgbGF5ZXIgYmVuZWF0aCBzbyBpdCByZWFkcyBhcyB0aGUgd2FsbCBiZXR3ZWVuIHJvb2ZzKSwgYSBHTEFaRSBCQU5EIHByaXNtICh0aGUgZmlyc3RcbiAgICogMC40NSBtIG9mIHJpc2UpLCBhbmQgdGhlIFRJTEUgZmllbGQgYWJvdmUgaXQuIENvbnNlY3V0aXZlIHNvbGlkcyBtZWV0IGFzIG9wcG9zZWQgZmFjZXMuIFRoZVxuICAgKiBza2lydCBpcyBidWlsdCBhcyBxdWFkIHJpbmdzIGluc3RlYWQgb2YgcHJpc21zIGJlY2F1c2UgaXQgaGlwcyByb3VuZCB0aGUgZW5kcy4gKi9cbiAgY29uc3QgU0sgPSBHLnNraXJ0LCBNRCA9IEcubWlkLCBUUCA9IEcudG9wO1xuICBjb25zdCBza1BpdGNoID0gKFNLLnkxIC0gU0sueTApIC8gKFNLLmh4IC0gU0suaHhJKTtcbiAgY29uc3QgbWRQaXRjaCA9IChNRC55MSAtIE1ELnkwKSAvIChNRC5oeCAtIE1ELmh4VCk7XG4gIHtcbiAgICBjb25zdCB0aWxlOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW10sIGJhbmQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXSwgcmlzZXI6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAvLyBza2lydFxuICAgIGNvbnN0IGJpID0gU0suYmFuZCAvIHNrUGl0Y2g7XG4gICAgLy8gVGhlIGJhbmQncyBvdXRlciBlZGdlLCB0aGUgZmFzY2lhIHN0cmlwJ3MgZmFjZSBhbmQgdGhlIHNvZmZpdCdzIG91dGVyIGVkZ2UgYXJlIHB1bGxlZFxuICAgIC8vIGFwYXJ0IGJ5IGEgZmV3IG1pbGxpbWV0cmVzOiBhbiBFREdFIGx5aW5nIGluIGEgZmFjZSdzIHBsYW5lIGlzIG5vdCBhIHotZmlnaHQsIGJ1dCB0aGVcbiAgICAvLyBjb3BsYW5hciBjaGVjayBjb21wYXJlcyBib3VuZGluZyBib3hlcyBhbmQgY2Fubm90IHRlbGwgdGhlIHR3byBhcGFydC5cbiAgICBjb25zdCBvdXRlciA9IFtTSy5oeCArIDAuMDAzLCBTSy5oeiArIDAuMDAzLCBTSy55MF0sIG1pZFIgPSBbU0suaHggLSBiaSwgU0suaHogLSBiaSwgU0sueTAgKyBTSy5iYW5kXSwgaW5uZXJSID0gW1NLLmh4SSwgU0suaHpJLCBTSy55MV07XG4gICAgYmFuZC5wdXNoKHJpbmcob3V0ZXIsIG1pZFIsIG91dFVwKSk7XG4gICAgdGlsZS5wdXNoKHJpbmcobWlkUiwgaW5uZXJSLCBvdXRVcCkpO1xuICAgIHRpbGUucHVzaChyaW5nKFtTSy5oeCAtIDAuMDA1LCBTSy5oeiAtIDAuMDA1LCBTSy5zb2ZmaXRdLCBbU0suaHhJLCBTSy5oekksIFNLLnNvZmZpdF0sIGRvd24pKTtcbiAgICB0aWxlLnB1c2gocmluZyhbU0suaHhJLCBTSy5oekksIFNLLnNvZmZpdF0sIFtTSy5oeEksIFNLLmh6SSwgU0sueTFdLCBpbndhcmQpKTtcbiAgICByaXNlci5wdXNoKHJpbmcoW1NLLmh4LCBTSy5oeiwgU0suc29mZml0IC0gMC4wMDVdLCBbU0suaHgsIFNLLmh6LCBTSy55MF0sIG91dHdhcmQpKTtcbiAgICAvLyBtaWRkbGUgbGF5ZXJcbiAgICByaXNlci5wdXNoKGJveEF0KDAsIChNRC5kcm9wICsgTUQueTApIC8gMiwgMCwgTUQuaHggKiAyLCBNRC55MCAtIE1ELmRyb3AsIE1ELmh6ICogMikpO1xuICAgIGJhbmQucHVzaChleHRydWRlQWxvbmdaKGJhbmRQcm9maWxlKE1ELmh4LCBNRC55MCwgbWRQaXRjaCwgTUQuYmFuZCksIC1NRC5oeiwgTUQuaHopKTtcbiAgICB0aWxlLnB1c2goZXh0cnVkZUFsb25nWih0aWVyUHJvZmlsZShNRC5oeCAtIE1ELmJhbmQgLyBtZFBpdGNoLCBNRC55MCArIE1ELmJhbmQsIE1ELnkxLCBtZFBpdGNoKSwgLU1ELmh6ICsgMC4wMSwgTUQuaHogLSAwLjAxKSk7XG4gICAgLy8gdG9wIGdhYmxlLCB0aHJlZSBzZWN0aW9uc1xuICAgIHJpc2VyLnB1c2goYm94QXQoMCwgKFRQLmRyb3AgKyBUUC55MCkgLyAyLCAwLCBUUC5oeCAqIDIsIFRQLnkwIC0gVFAuZHJvcCwgVFAuaHogKiAyKSk7XG4gICAgZm9yIChjb25zdCBbejAsIHoxLCByaWRnZV0gb2YgVFAuc2VjdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgICAgY29uc3QgcGl0Y2ggPSAocmlkZ2UgLSBUUC55MCkgLyBUUC5oeDtcbiAgICAgIGJhbmQucHVzaChleHRydWRlQWxvbmdaKGJhbmRQcm9maWxlKFRQLmh4LCBUUC55MCwgcGl0Y2gsIFRQLmJhbmQpLCB6MCwgejEpKTtcbiAgICAgIHRpbGUucHVzaChleHRydWRlQWxvbmdaKHRpZXJQcm9maWxlKFRQLmh4IC0gVFAuYmFuZCAvIHBpdGNoLCBUUC55MCArIFRQLmJhbmQsIHJpZGdlLCBwaXRjaCksIHowICsgMC4wMSwgejEgLSAwLjAxKSk7XG4gICAgfVxuICAgIGNvbnN0IHRnID0gbWVyZ2VHZW9zKHRpbGUpLCBiZyA9IG1lcmdlR2VvcyhiYW5kKSwgcmcgPSBtZXJnZUdlb3MocmlzZXIpO1xuICAgIHByb2pVdih0ZywgRy53ZWFyLnJvb2YudGlsZSk7IHByb2pVdihiZywgRy53ZWFyLnJvb2YudGlsZSk7IHByb2pVdihyZywgRy53ZWFyLnN0b25lLnRpbGUpO1xuICAgIGFkZCgncm9vZi10aWxlJywgJ1RpbGUgcm9vZiBmaWVsZHMnLCB0ZywgJ3RpbGUnKTtcbiAgICBhZGQoJ3Jvb2YtYmFuZCcsICdHbGF6ZWQgZWF2ZXMgYmFuZHMnLCBiZywgJ2dyZWVuJyk7XG4gICAgYWRkKCdyb29mLXJpc2VycycsICdSb29mIGZhc2NpYSBiYW5kcycsIHJnLCAnc3RvbmUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2FibGUgd2FsbHMsIGJhcmdlYm9hcmRzLCBwZWRpbWVudHNcbiAgICogRWFjaCBnYWJsZSBlbmQgaXMgYSB3aGl0ZSBzbGFiIHN0YW5kaW5nIDAuMDUgbSBwcm91ZCBvZiB0aGUgcmlzZXJzIGJlaGluZCBpdCwgZm9sbG93aW5nIHRoZVxuICAgKiBzdGFja2VkIG91dGxpbmUgb2YgdGhlIGxheWVycyBpdCBjbG9zZXM7IGEgYmFyZ2Vib2FyZCB1cCBldmVyeSByYWtlLCBvZmZzZXQgb3V0d2FyZCBzbyBpdHNcbiAgICogbG93ZXIgZWRnZSBzaXRzIG9uIHRoZSByb29mIGVkZ2U7IGFuZCB0aGUgY2FydmVkIGdpbHQgcGVkaW1lbnQgaW5zaWRlIHRoZSB0b3AgZ2FibGUuIFRoZVxuICAgKiBjZW50cmUgc2VjdGlvbidzIGdhYmxlcyBhdCB6ID0gKy02IGFyZSB0aGUgc2FtZSwgYW5kIG9ubHkgdGhlaXIgdXBwZXIgMC44IG0gc2hvd3MgYWJvdmUgdGhlXG4gICAqIGVuZCBzZWN0aW9ucycgcmlkZ2VzIC0tIHdoaWNoIGlzIGV4YWN0bHkgdGhlIHRlbGVzY29wZWQgc3RlcCB0aGUgcGxhdGUgc2hvd3MuICovXG4gIGNvbnN0IEdCID0gRy5nYWJsZTtcbiAgY29uc3QgZ2FibGVzOiB7IHo6IG51bWJlciwgcmlkZ2U6IG51bWJlciwgZnVsbDogYm9vbGVhbiB9W10gPSBbXTtcbiAgZm9yIChjb25zdCBbejAsIHoxLCByaWRnZV0gb2YgVFAuc2VjdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgIGNvbnN0IHpvID0gTWF0aC5hYnMoejApID4gTWF0aC5hYnMoejEpID8gejAgOiB6MTtcbiAgICBpZiAoTWF0aC5hYnMoem8pID4gOC45KSBnYWJsZXMucHVzaCh7IHo6IE1hdGguc2lnbih6bykgKiA5LjAsIHJpZGdlLCBmdWxsOiB0cnVlIH0pO1xuICAgIGVsc2UgeyBnYWJsZXMucHVzaCh7IHo6IDYuMCwgcmlkZ2UsIGZ1bGw6IGZhbHNlIH0pOyBnYWJsZXMucHVzaCh7IHo6IC02LjAsIHJpZGdlLCBmdWxsOiBmYWxzZSB9KTsgfVxuICB9XG4gIHtcbiAgICBjb25zdCBzbGFiczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdLCBib2FyZHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXSwgcmVkczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IHBlZHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAvLyBUaGUgRU5EIGdhYmxlcyBjYXJyeSBPTkUgcmFrZSBmcm9tIHRoZSBtaWRkbGUgbGF5ZXIncyBlYXZlcyB0byB0aGUgcmlkZ2U6IHRoZSBwbGF0ZSdzIGdpbHRcbiAgICAvLyBwZWRpbWVudCBzcGFucyB0aGUgd2hvbGUgZ2FibGUsIGFuZCB0aGUgdG9wIGxheWVyJ3Mgc3RlcCBzaG93cyBvbmx5IG9uIHRoZSBzaWRlIHNsb3BlcyAodGhlXG4gICAgLy8gZW5kIHNlY3Rpb25zJyB0b3AgcGl0Y2ggb2YgMS4wIGlzIHRoZSBtaWRkbGUgbGF5ZXIncyA0NSBkZWdyZWVzIGNvbnRpbnVlZCkuIFRoZSBjZW50cmVcbiAgICAvLyBzZWN0aW9uJ3MgZ2FibGVzIGF0IHogPSArLTYgc3RhcnQgYXQgdGhlIHRvcCBsYXllcidzIG93biBlYXZlcy5cbiAgICBjb25zdCByYWtlT2YgPSAoZzogeyB6OiBudW1iZXIsIHJpZGdlOiBudW1iZXIsIGZ1bGw6IGJvb2xlYW4gfSkgPT5cbiAgICAgIGcuZnVsbCA/IFtNRC5oeCArIDAuMDUsIE1ELnkwLCBNRC5kcm9wICsgMC4xMF0gOiBbVFAuaHggKyAwLjA1LCBUUC55MCArIDAuMDIsIFRQLmRyb3AgKyAwLjEwXTsgICAvLyBbaGIsIHliLCB5Qm90dG9tXVxuICAgIGZvciAoY29uc3QgZyBvZiBnYWJsZXMpIHtcbiAgICAgIGNvbnN0IHpzID0gTWF0aC5zaWduKGcueik7XG4gICAgICBjb25zdCBbaGIsIHliLCB5Qm90XSA9IHJha2VPZihnKTtcbiAgICAgIGNvbnN0IHMgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHMubW92ZVRvKC1oYiwgeUJvdCk7IHMubGluZVRvKGhiLCB5Qm90KTsgcy5saW5lVG8oaGIsIHliKTsgcy5saW5lVG8oMCwgZy5yaWRnZSArIDAuMDEpOyBzLmxpbmVUbygtaGIsIHliKTtcbiAgICAgIHMuY2xvc2VQYXRoKCk7XG4gICAgICBjb25zdCB6SW4gPSBNYXRoLmFicyhnLnopIC0gMC4wNywgek91dCA9IE1hdGguYWJzKGcueikgKyBHQi5zbGFiIC0gMC4wNztcbiAgICAgIHNsYWJzLnB1c2goZXh0cnVkZUFsb25nWihzLCB6cyA+IDAgPyB6SW4gOiAtek91dCwgenMgPiAwID8gek91dCA6IC16SW4pKTtcbiAgICAgIC8vIGJhcmdlYm9hcmRzIGFuZCB0aGVpciByZWQgb3V0ZXIgc3RyaXBzLCB1cCBlYWNoIHJha2VcbiAgICAgIHtcbiAgICAgICAgY29uc3QgaHQgPSAwLCB5dCA9IGcucmlkZ2U7XG4gICAgICAgIGNvbnN0IHJ1biA9IGhiIC0gaHQsIHJpc2UgPSB5dCAtIHliLCBsZW4gPSBNYXRoLmh5cG90KHJ1biwgcmlzZSkgKyAwLjEyO1xuICAgICAgICAvLyBhdGFuMihSVU4sIFJJU0UpOiByb3RhdGVaIG1hcHMgYSBib3gncyArWSB0byAoLXNpbiwgY29zKSwgc28gYWltaW5nIGl0IGFsb25nIHRoZSByYWtlXG4gICAgICAgIC8vIG5lZWRzIHRoZSBDT01QTEVNRU5UIG9mIHRoZSBwaXRjaCBhbmdsZSAtLSB0aHJlZSBkZWdyZWVzIG9mZiBhdCA0NiBkZWdyZWVzLCB0d2VudHktZm91clxuICAgICAgICAvLyBhdCAzMywgd2hpY2ggaXMgaG93IGl0IHN1cnZpdmVkIGEgd2hvbGUgcHJvcCBiZWZvcmUgdGhlIHJlY2xpbmluZyBoYWxsIGNhdWdodCBpdC5cbiAgICAgICAgY29uc3QgYW5nID0gTWF0aC5hdGFuMihydW4sIHJpc2UpO1xuICAgICAgICBjb25zdCBweCA9IHJpc2UgLyBsZW4sIHB5ID0gcnVuIC8gbGVuOyAgIC8vIHVuaXQgcGVycGVuZGljdWxhciwgb3V0d2FyZC1hbmQtdXBcbiAgICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgICAgY29uc3QgY3ggPSB4cyAqIChoYiArIGh0KSAvIDIsIGN5ID0gKHliICsgeXQpIC8gMjtcbiAgICAgICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KEdCLmJvYXJkVywgbGVuLCBHQi5ib2FyZFQpO1xuICAgICAgICAgIGIucm90YXRlWih4cyAqIGFuZyk7XG4gICAgICAgICAgYi50cmFuc2xhdGUoY3ggKyB4cyAqIHB4ICogR0IuYm9hcmRXIC8gMiwgY3kgKyBweSAqIEdCLmJvYXJkVyAvIDIsIHpzICogKHpPdXQgKyBHQi5ib2FyZFQgLyAyKSk7XG4gICAgICAgICAgYm9hcmRzLnB1c2goYik7XG4gICAgICAgICAgY29uc3QgciA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjEyLCBsZW4sIDAuMTYpO1xuICAgICAgICAgIHIucm90YXRlWih4cyAqIGFuZyk7XG4gICAgICAgICAgci50cmFuc2xhdGUoY3ggKyB4cyAqIHB4ICogKEdCLmJvYXJkVyArIDAuMDYpLCBjeSArIHB5ICogKEdCLmJvYXJkVyArIDAuMDYpLCB6cyAqICh6T3V0ICsgMC4xMCkpO1xuICAgICAgICAgIHJlZHMucHVzaChyKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gcGVkaW1lbnQ6IHRoZSBjYXJ2ZWQgZmllbGQsIGluc2V0IGZyb20gdGhlIHJha2VzLCBwcm91ZCBvZiB0aGUgc2xhYlxuICAgICAgY29uc3QgaW5zZXQgPSAwLjUwLCBiYXNlID0geWIgKyAwLjMwO1xuICAgICAgY29uc3QgaHcgPSBoYiAtIGluc2V0IC0gMC4zMCAqIGhiIC8gKGcucmlkZ2UgLSB5YiksIGFwZXggPSBnLnJpZGdlIC0gaW5zZXQgKiAoZy5yaWRnZSAtIHliKSAvIGhiIC0gMC4xNTtcbiAgICAgIGNvbnN0IHQgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHQubW92ZVRvKC1odywgYmFzZSk7IHQubGluZVRvKGh3LCBiYXNlKTsgdC5saW5lVG8oMCwgYXBleCk7IHQuY2xvc2VQYXRoKCk7XG4gICAgICBjb25zdCBwZyA9IGV4dHJ1ZGVBbG9uZ1oodCwgenMgPiAwID8gek91dCA6IC16T3V0IC0gMC4xOCwgenMgPiAwID8gek91dCArIDAuMTggOiAtek91dCk7XG4gICAgICAvLyBjYW52YXMgVVZzIG92ZXIgdGhlIHRyaWFuZ2xlJ3Mgb3duIGJveCwgYXBleCBhdCB2ID0gMVxuICAgICAgY29uc3QgcHAgPSBwZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIHV2ID0gbmV3IEZsb2F0MzJBcnJheShwcC5jb3VudCAqIDIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIHV2W2kgKiAyXSA9IChwcC5nZXRYKGkpICogenMgKyBodykgLyAoMiAqIGh3KTtcbiAgICAgICAgdXZbaSAqIDIgKyAxXSA9IChwcC5nZXRZKGkpIC0gYmFzZSkgLyAoYXBleCAtIGJhc2UpO1xuICAgICAgfVxuICAgICAgcGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICAgIHBlZHMucHVzaChwZyk7XG4gICAgfVxuICAgIGNvbnN0IHNnID0gbWVyZ2VHZW9zKHNsYWJzKTsgcHJvalV2KHNnLCBHLndlYXIuc3RvbmUudGlsZSk7XG4gICAgYWRkKCdnYWJsZS13YWxscycsICdHYWJsZSB3YWxscycsIHNnLCAnc3RvbmUnKTtcbiAgICBjb25zdCBiZyA9IG1lcmdlR2Vvcyhib2FyZHMpOyBwcm9qVXYoYmcsIEcud2Vhci5zdG9uZS50aWxlKTtcbiAgICBhZGQoJ2JhcmdlLWJvYXJkcycsICdCYXJnZWJvYXJkcycsIGJnLCAnc3RvbmUnKTtcbiAgICBhZGQoJ3BlZGltZW50JywgJ0NhcnZlZCBnYWJsZSBwZWRpbWVudHMnLCBtZXJnZUdlb3MocGVkcyksICdjYXJ2ZWQnKTtcblxuICAgIC8qIHJlZCB0cmltOiBlYXZlcyBmYXNjaWFzIG9uIGV2ZXJ5IGxheWVyLCB0aGUgZWF2ZXMgYmVhbSBvbiB0aGUgY29sdW1ucywgcmlkZ2UgY2FwcywgYW5kIHRoZVxuICAgICAqIHJha2Ugc3RyaXBzIGFscmVhZHkgY29sbGVjdGVkLiBFbmQgcnVucyBidXR0IGFnYWluc3QgdGhlIHNpZGUgcnVucycgaW5uZXIgZmFjZXMsIG5ldmVyXG4gICAgICogb3ZlcmxhcHBpbmcgdGhlbSwgc28gbm8gdHdvIHRvcCBmYWNlcyBzaGFyZSBhIHBsYW5lLiAqL1xuICAgIGNvbnN0IGZhc2NpYVJpbmcgPSAoaHg6IG51bWJlciwgaHo6IG51bWJlciwgeTogbnVtYmVyLCBoOiBudW1iZXIsIHQ6IG51bWJlcikgPT4ge1xuICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSByZWRzLnB1c2goYm94QXQoeHMgKiAoaHggKyB0IC8gMiksIHksIDAsIHQsIGgsIGh6ICogMiArIHQgKiAyKSk7XG4gICAgICBmb3IgKGNvbnN0IHpzIG9mIFstMSwgMV0pIHJlZHMucHVzaChib3hBdCgwLCB5IC0gMC4wMSwgenMgKiAoaHogKyB0IC8gMiksIGh4ICogMiwgaCwgdCkpO1xuICAgIH07XG4gICAgZmFzY2lhUmluZyhTSy5oeCwgU0suaHosIFNLLnkwIC0gMC4yMCwgMC4zNiwgMC4xNCk7XG4gICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICByZWRzLnB1c2goYm94QXQoeHMgKiAoTUQuaHggKyAwLjA3KSwgTUQueTAgLSAwLjIwLCAwLCAwLjE0LCAwLjM2LCBNRC5oeiAqIDIgKyAwLjEwKSk7XG4gICAgICByZWRzLnB1c2goYm94QXQoeHMgKiAoVFAuaHggKyAwLjA3KSwgVFAueTAgLSAwLjIwLCAwLCAwLjE0LCAwLjM2LCBUUC5oeiAqIDIgKyAwLjEwKSk7XG4gICAgfVxuICAgIGNvbnN0IEMgPSBHLmNvbHVtbiwgQiA9IEcuYmVhbTtcbiAgICBjb25zdCBieSA9IChCLnkwICsgQi55MSkgLyAyLCBiaCA9IEIueTEgLSBCLnkwO1xuICAgIGZvciAoY29uc3QgeHMgb2YgWy0xLCAxXSkgcmVkcy5wdXNoKGJveEF0KHhzICogQy5pbnNldFgsIGJ5LCAwLCBCLnRoaWNrLCBiaCwgQy5pbnNldFogKiAyICsgQi50aGljaykpO1xuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkgcmVkcy5wdXNoKGJveEF0KDAsIGJ5IC0gMC4wMSwgenMgKiBDLmluc2V0WiwgQy5pbnNldFggKiAyIC0gQi50aGljaywgYmgsIEIudGhpY2spKTtcbiAgICBmb3IgKGNvbnN0IFt6MCwgejEsIHJpZGdlXSBvZiBUUC5zZWN0aW9ucyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICByZWRzLnB1c2goYm94QXQoMCwgcmlkZ2UgKyAwLjA2LCAoejAgKyB6MSkgLyAyLCAwLjM2LCAwLjI0LCB6MSAtIHowICsgMC4yNCkpO1xuICAgIH1cbiAgICBjb25zdCByZyA9IG1lcmdlR2VvcyhyZWRzKTsgcHJvalV2KHJnLCBHLndlYXIucmVkLnRpbGUpO1xuICAgIGFkZCgncm9vZi10cmltJywgJ0VhdmVzIGJlYW0sIGZhc2NpYXMgYW5kIHJpZGdlIGNhcHMnLCByZywgJ3JlZCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjaG9mYSBhbmQgcmFrZS1mb290IGhvcm5zXG4gICAqIFRoZSBjdXJ2ZWQgZmluaWFscyAtLSB0aGUgZmVhdHVyZSB0aGUgcmVnaXN0cnkgbm90ZXMgc2F5IHNlcGFyYXRlcyBhbiB1Ym9zb3QgZnJvbSBhbnkgb3RoZXJcbiAgICogcmVjdGFuZ3VsYXIgaGFsbC4gT25lIGN1cmxlZC1ob3JuIGdlb21ldHJ5LCBzaXh0ZWVuIGluc3RhbmNlczogYW4gYXBleCBjaG9mYSBvbiBldmVyeSBnYWJsZVxuICAgKiAoMi4zNSBtIG9uIHRoZSBjZW50cmUgcmlkZ2UsIHNvIGl0cyB0aXAgc2V0cyB0aGUgZGVjbGFyZWQgMTcuMCBtKSwgYSBob3JuIGF0IGV2ZXJ5IHJha2UgZm9vdFxuICAgKiBvZiBldmVyeSBsYXllciwgYW5kIG9uZSBhdCBlYWNoIGhpcCBjb3JuZXIgb2YgdGhlIHNraXJ0LiBFYWNoIGluc3RhbmNlIGNhcnJpZXMgaXRzIG93biB5YXcsXG4gICAqIHJpc2UgYW5kIGhhbmQ7IGEgTkVHQVRJVkUgWCBzY2FsZSBtaXJyb3JzIHRoZSBjdXJsLiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaG9ybjtcbiAgICBjb25zdCB1bml0ID0gY3VybGVkSG9ybigwLjQ2LCAxLjAsIDAuMjAsIDkpO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGNvbnN0IHBsYWNlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHlhdzogbnVtYmVyLCByaXNlOiBudW1iZXIsIG1pcnJvciA9IDEpID0+IHtcbiAgICAgIGNvbnN0IHN4eiA9IDAuNTUgKyAwLjMyICogcmlzZTtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHlhdyksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHN4eiAqIG1pcnJvciwgcmlzZSwgc3h6KSkpO1xuICAgIH07XG4gICAgZm9yIChjb25zdCBnIG9mIGdhYmxlcykge1xuICAgICAgY29uc3QgenMgPSBNYXRoLnNpZ24oZy56KSwgemYgPSBNYXRoLmFicyhnLnopICsgR0Iuc2xhYiArIDAuMTY7XG4gICAgICAvLyBhcGV4LCBjdXJsaW5nIG91dHdhcmQgYWxvbmcgdGhlIHJpZGdlXG4gICAgICBwbGFjZSgwLCBnLnJpZGdlIC0gMC4zMCwgenMgKiB6ZiwgenMgPiAwID8gLU1hdGguUEkgLyAyIDogTWF0aC5QSSAvIDIsIGcuZnVsbCA/IEguYXBleFJpc2UgKiAoZy5yaWRnZSA+IDE0LjUgPyAxIDogMC45MikgOiBILmFwZXhSaXNlKTtcbiAgICAgIC8vIHJha2UgZmVldCwgY3VybGluZyBvdXR3YXJkIGFjcm9zcyB0aGUgYnVpbGRpbmdcbiAgICAgIGNvbnN0IFtmaGIsIGZ5Yl0gPSBnLmZ1bGwgPyBbTUQuaHgsIE1ELnkwXSA6IFtUUC5oeCwgVFAueTBdO1xuICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgIHBsYWNlKHhzICogKGZoYiArIDAuMTQpLCBmeWIgKyAwLjAyLCB6cyAqICh6ZiAtIDAuMDIpLCB4cyA+IDAgPyAwIDogTWF0aC5QSSwgSC5mb290UmlzZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICBwbGFjZSh4cyAqIChTSy5oeCAtIDAuMjgpLCBTSy55MCArIDAuMDIsIHpzICogKFNLLmh6IC0gMC4xOCksIE1hdGguYXRhbjIoLXpzLCB4cyksIEguY29ybmVyUmlzZSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ2Nob2ZhJywgJ0Nob2ZhIGFuZCByYWtlLWZvb3QgaG9ybnMnLCB1bml0LCAnZ2lsdCcsIG1hdHMpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBiYWkgc2VtYSBib3VuZGFyeSBzdG9uZXNcbiAgICogRWlnaHQgcG9pbnRlZCBzdG9uZXMgb24gcGVkZXN0YWxzLCBvbiB0aGUgYm90dG9tIHRlcnJhY2Ugb3V0c2lkZSB0aGUgcGxpbnRoOiBmb3VyIGF0IHRoZVxuICAgKiBjb3JuZXJzLCB0d28gYXQgdGhlIG1pZC1zaWRlcywgYW5kIG9uZSBjZW50cmVkIGJlZm9yZSBlYWNoIHN0YWlyLiBUaGUgcmVnaXN0cnkgbm90ZXMgYXJlXG4gICAqIGV4cGxpY2l0IHRoYXQgdGhlc2UgYXJlIHdoYXQgbWFrZSB0aGUgYnVpbGRpbmcgYW4gT1JESU5BVElPTiBoYWxsLiAqL1xuICB7XG4gICAgY29uc3QgUyA9IEcuc2VtYTtcbiAgICBjb25zdCBsZWFmID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgbGVhZi5tb3ZlVG8oLTAuMjAsIDApOyBsZWFmLmxpbmVUbygwLjIwLCAwKTsgbGVhZi5saW5lVG8oMC4yMCwgUy5oICogMC41Mik7XG4gICAgbGVhZi5xdWFkcmF0aWNDdXJ2ZVRvKDAuMjAsIFMuaCAqIDAuOTIsIDAsIFMuaCk7XG4gICAgbGVhZi5xdWFkcmF0aWNDdXJ2ZVRvKC0wLjIwLCBTLmggKiAwLjkyLCAtMC4yMCwgUy5oICogMC41Mik7XG4gICAgbGVhZi5jbG9zZVBhdGgoKTtcbiAgICBjb25zdCBibGFkZSA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkobGVhZiwgeyBkZXB0aDogMC4xMywgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNSB9KTtcbiAgICBibGFkZS50cmFuc2xhdGUoMCwgMC40NiwgLTAuMDY1KTtcbiAgICBibGFkZS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoMCwgMC4xMCwgMCwgUy5wZWQsIDAuMjAsIFMucGVkKSxcbiAgICAgIGJveEF0KDAsIDAuMzIsIDAsIFMucGVkICogMC44LCAwLjI2LCBTLnBlZCAqIDAuOCksXG4gICAgICBibGFkZSxcbiAgICBdKTtcbiAgICBwcm9qVXYodW5pdCwgRy53ZWFyLnN0b25lLnRpbGUpO1xuICAgIGNvbnN0IHNwb3RzOiBudW1iZXJbXVtdID0gW1xuICAgICAgWy02LjU2LCAtMTEuNjBdLCBbNi41NiwgLTExLjYwXSwgWy02LjU2LCAxMS42MF0sIFs2LjU2LCAxMS42MF0sXG4gICAgICBbLTYuNTYsIDBdLCBbNi41NiwgMF0sIFswLCAtMTEuNjVdLCBbMCwgMTEuNjVdLFxuICAgIF07XG4gICAgYWRkSW5zdCgnc2VtYScsICdCYWkgc2VtYSBib3VuZGFyeSBzdG9uZXMnLCB1bml0LCAnc3RvbmUnLFxuICAgICAgc3BvdHMubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgRy5wbGF0Zm9ybS5zbGFiMVsxXSwgeikpKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2VhdGhlcmluZ1xuICAgKiBUaGUgcGxhdGUgaXMgbm90IGEgY2xlYW4gbW9kZWw6IGl0cyB3aGl0ZXdhc2ggaXMgc3RyZWFrZWQgZ3JleS1ibGFjayBkb3duIGV2ZXJ5IGZhY2UgYW5kXG4gICAqIGdyaW1lZCBhdCB0aGUgcGxpbnRoLCB0aGUgcmVkIGxhY3F1ZXIgb24gdGhlIGNvbHVtbnMgaXMgUEVFTElORyB0byBwYWxlIHBsYXN0ZXIgaW4gaGFuZC1zaXplZFxuICAgKiBmbGFrZXMsIHRoZSByb29mIGlzIGxhaWQgaW4gdmlzaWJsZSB0aWxlIGNvdXJzZXMgd2l0aCBncmV5LWdyZWVuIGdyb3d0aCBpbiB0aGUgZmllbGQsIGFuZCB0aGVcbiAgICogcGVkaW1lbnQgaXMgZGVuc2UgZ2lsdCBjYXJ2aW5nIG9uIHJlZC4gVGhlIGZpcnN0IGJ1aWxkIHNoaXBwZWQgZmxhdCBwYWludCBhbmQgd2FzIHJldHVybmVkLlxuICAgKlxuICAgKiBEZWxpdmVyZWQgYXMgZm91ciBDYW52YXMgMkQgdGlsZXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uOiB0aGUgc2N1bHB0IG1hdGVyaWFsc1xuICAgKiBzdGF5IGRlY2xhcmVkIHRleHR1cmVsZXNzIChubyBmaXZlLWNhbnZhcyBwcm9jZWR1cmFsIHNldCwgbm8gcGVyLXBpeGVsIEphdmFTY3JpcHQsIGFuZCB0aGVcbiAgICogbWVhc3VyZWQgYWxiZWRvIGlzIE5PVCB0aHJvd24gYXdheSksIGFuZCBlYWNoIHRpbGUgaXMgYSBmZXcgaHVuZHJlZCBQYXRoMkQgZmlsbHMgYXQgNTEyIHB4IC0tXG4gICAqIHNpbmdsZS1kaWdpdCBtaWxsaXNlY29uZHMuIEVhY2ggaXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIsIGJvdW5kIGFzIGJvdGggbWFwXG4gICAqIGFuZCBidW1wTWFwIHNvIGEgZmxha2UgcmVhZHMgYXMgbGlmdGVkIHBhaW50IGFuZCBhIHRpbGUgam9pbnQgYXMgYSBncm9vdmUuXG4gICAqXG4gICAqIFRoZSBsYWNxdWVyJ3MgZmxha2VzIGFyZSBCUklHSFRFUiB0aGFuIHRoZSByZWQsIGFuZCBhIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiB0aGUgcmVkXG4gICAqIG1hdGVyaWFsIGlzIHJlLWJhc2VkIHRvIHRoZSBmbGFrZSBFTlZFTE9QRSBhbmQgdGhlIGNsZWFuIHJlZCBwYWludGVkIGJhY2sgYXMgYSByYXRpbywgb25cbiAgICogTElORUFSIGNvbXBvbmVudHMgd2l0aCB0aGUgcmF0aW8gcmFpc2VkIHRvIDIuMiBiZWNhdXNlIHRoZSBzUkdCIHRpbGUgaXMgZGVjb2RlZCBiZWZvcmUgdGhlXG4gICAqIG11bHRpcGx5LiBVbmRlciBOb2RlIC0tIGJhbmRzLm1qcyBhbmQgY2hlY2stY29wbGFuYXIgcnVuIHRoaXMgZmFjdG9yeSB3aXRoIG5vIERPTSAtLSB0aGVyZSBpc1xuICAgKiBubyBjYW52YXMgYW5kIGV2ZXJ5IG1hdGVyaWFsIGtlZXBzIGl0cyBmbGF0IG1lYXN1cmVkIGNvbG91ci4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLndlYXI7XG4gICAgY29uc3QgaGFzRG9tID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgKGRvY3VtZW50IGFzIGFueSkuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBzaXplID0gTWF0aC5taW4oVy5zaXplLCBvcHRpb25zLnRleHR1cmVTaXplID8/IFcuc2l6ZSk7XG4gICAgY29uc3QgY3NzID0gKHQ6IG51bWJlcltdLCBhOiBudW1iZXIpID0+XG4gICAgICAncmdiYSgnICsgTWF0aC5yb3VuZCh0WzBdICogMjU1KSArICcsJyArIE1hdGgucm91bmQodFsxXSAqIDI1NSkgKyAnLCcgKyBNYXRoLnJvdW5kKHRbMl0gKiAyNTUpICsgJywnICsgYSArICcpJztcbiAgICBjb25zdCBybmcgPSAoc2VlZDogbnVtYmVyKSA9PiAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuICAgIHR5cGUgRHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAgIGZ1bmN0aW9uIG1ha2VUaWxlKHNlZWQ6IG51bWJlciwgZHJhdzogRHJhdyk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gICAgICBpZiAoIWhhc0RvbSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY3Yud2lkdGggPSBjdi5oZWlnaHQgPSBzaXplO1xuICAgICAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IFMgPSBzaXplO1xuICAgICAgLy8gRXZlcnkgbWFyayBpcyBidWlsdCBvbmNlIGFuZCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cywgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MgdW5kZXJcbiAgICAgIC8vIFJlcGVhdFdyYXBwaW5nOyBzaGFwZXMgYXJlIHByZWNvbXB1dGVkIGJlZm9yZSB0aGUgbmluZSBmaWxscyBvciB0aGUgY29waWVzIGRpZmZlci5cbiAgICAgIGNvbnN0IHdyYXBwZWQgPSAoZm46ICgpID0+IHZvaWQpID0+IHtcbiAgICAgICAgZm9yIChsZXQgb3ggPSAtMTsgb3ggPD0gMTsgb3grKykgZm9yIChsZXQgb3kgPSAtMTsgb3kgPD0gMTsgb3krKykge1xuICAgICAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUob3ggKiBTLCBveSAqIFMpOyBmbigpOyBjdHgucmVzdG9yZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgZHJhdyhjdHgsIHJuZyhzZWVkKSwgUywgd3JhcHBlZCk7XG4gICAgICByZXR1cm4gY3Y7XG4gICAgfVxuICAgIC8qKiBTb2Z0IGxvdy1mcmVxdWVuY3kgbW90dGxlIHRocm91Z2ggYSBjYW52YXMgYmx1ciwgc28gdG9uZSBkcmlmdHMgY2xvdWQtbGlrZSBpbnN0ZWFkIG9mXG4gICAgICogIHN0b3BwaW5nIGF0IGEgaGFyZCBlZGdlIC0tIGhhcmQgYmxvdGNoZXMgb24gc3RvbmUgcmVhZCBhcyBjYW1vdWZsYWdlIHBhaW50LiAqL1xuICAgIGNvbnN0IGNsb3VkID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCByYWQ6IG51bWJlciwgYWxwaGE6IG51bWJlciwgYmx1clB4OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IG1hcmtzOiBudW1iZXJbXVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIG1hcmtzLnB1c2goW3IoKSAqIFMsIHIoKSAqIFMsIHJhZCAqIFMgKiAoMC41ICsgcigpKSwgYWxwaGEgKiAoMC41ICsgMC41ICogcigpKV0pO1xuICAgICAgd3JhcHBlZCgoKSA9PiB7XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnYmx1cignICsgYmx1clB4ICsgJ3B4KSc7XG4gICAgICAgIGZvciAoY29uc3QgW3gsIHksIHJyLCBhXSBvZiBtYXJrcykgeyBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGEpOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgcnIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICBjdHguZmlsdGVyID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKiogV2F0ZXItYm9ybmUgd2FzaGVzOiB2ZXJ0aWNhbCBncmFkaWVudCBzdHJlYWtzIGZhZGluZyBET1dOIHRoZSBmYWNlIChjYW52YXMgK3kgaXMgd29ybGQgLXlcbiAgICAgKiAgdW5kZXIgZmxpcFkpLCBibHVycmVkIHNvIHRoZXkgcmVhZCBhcyBzdGFpbmluZyByYXRoZXIgdGhhbiBzdHJpcGVzLiAqL1xuICAgIGNvbnN0IHdhc2hlcyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIGFscGhhOiBudW1iZXIsIGJsdXJQeDogbnVtYmVyLCB3TWluOiBudW1iZXIsIHdNYXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWFya3M6IG51bWJlcltdW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgbWFya3MucHVzaChbcigpICogUywgcigpICogUywgUyAqICgwLjE1ICsgMC41ICogcigpKSwgd01pbiArICh3TWF4IC0gd01pbikgKiByKCksIGFscGhhICogKDAuNSArIDAuNSAqIHIoKSldKTtcbiAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICBjdHguZmlsdGVyID0gJ2JsdXIoJyArIGJsdXJQeCArICdweCknO1xuICAgICAgICBmb3IgKGNvbnN0IFt4LCB5MCwgbGVuLCB3LCBhXSBvZiBtYXJrcykge1xuICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBjc3ModG9uZSwgYSkpOyBnLmFkZENvbG9yU3RvcCgwLjQsIGNzcyh0b25lLCBhICogMC42KSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyh0b25lLCAwKSk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCh4IC0gdyAvIDIsIHkwLCB3LCBsZW4pO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBGaW5lIGdyYWluOiBuZWFyLXRyYW5zcGFyZW50IHNwZWNrcywgc28gbm8gYXJlYSBpcyBhIGZsYXQgZmlsbC4gKi9cbiAgICBjb25zdCBncmFpbiA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICB0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgYWxwaGE6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgcCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgeyBjb25zdCB4ID0gcigpICogUywgeSA9IHIoKSAqIFMsIGQgPSAwLjYgKyByKCkgKiAxLjQ7IHAucmVjdCh4LCB5LCBkLCBkKTsgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYWxwaGEpOyBjdHguZmlsbChwKTsgfSk7XG4gICAgfTtcbiAgICAvKiogUGVlbGluZyBwYWludDogYSByYW5kb20gV0FMSyBvZiBvdmVybGFwcGluZyBkaXNjcyBmaWxsZWQgb25jZSBhcyBhIHVuaW9uIChzY2F0dGVyZWQgZGlzY3NcbiAgICAgKiAgYXJlIHBvbGthIGRvdHM7IGEgZmxha2UgaXMgYSB3b3JtKSwgd2l0aCBhIHRoaW4gZGFyayByaW0gd2hlcmUgdGhlIGxpZnRlZCBlZGdlIHNoYWRvd3MuICovXG4gICAgY29uc3QgZmxha2VzID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgICB0b25lOiBudW1iZXJbXSwgcmltOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgcmFkOiBudW1iZXIpID0+IHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBsZXQgY3ggPSByKCkgKiBTLCBjeSA9IHIoKSAqIFMsIGEgPSByKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgY29uc3QgUiA9IHJhZCAqIFMgKiAoMC40ICsgcigpKSwgbiA9IDYgKyBNYXRoLmZsb29yKHIoKSAqIDEyKTtcbiAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBuOyBrKyspIHtcbiAgICAgICAgICBhICs9IChyKCkgLSAwLjUpICogMi4wO1xuICAgICAgICAgIGN4ICs9IE1hdGguY29zKGEpICogUiAqIDAuNDU7IGN5ICs9IE1hdGguc2luKGEpICogUiAqIDAuNDUgKiAxLjQ7XG4gICAgICAgICAgY29uc3QgcnIgPSBSICogKDAuMzUgKyAwLjUgKiByKCkpO1xuICAgICAgICAgIHAubW92ZVRvKGN4ICsgcnIsIGN5KTsgcC5hcmMoY3gsIGN5LCByciwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICB9XG4gICAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICAgIGN0eC5saW5lV2lkdGggPSAzOyBjdHguc3Ryb2tlU3R5bGUgPSBjc3MocmltLCAwLjcpOyBjdHguc3Ryb2tlKHApO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgMC45Mik7IGN0eC5maWxsKHApO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IGJpbmQgPSAobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgY3Y6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCwgYnVtcDogbnVtYmVyLCByZXBlYXRVdiA9IHRydWUpID0+IHtcbiAgICAgIGlmICghY3YpIHJldHVybjtcbiAgICAgIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgICAgIHRleC53cmFwUyA9IHRleC53cmFwVCA9IHJlcGVhdFV2ID8gVEhSRUUuUmVwZWF0V3JhcHBpbmcgOiBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nO1xuICAgICAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTsgICAvLyB0aGUgdGlsZSBob2xkcyBkaXNwbGF5LXNwYWNlIHJhdGlvc1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4O1xuICAgICAgbWF0LmJ1bXBNYXAgPSB0ZXg7XG4gICAgICBtYXQuYnVtcFNjYWxlID0gYnVtcDtcbiAgICAgIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfTtcbiAgICBjb25zdCByZWJhc2UgPSAobTogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHJhdGlvOiBudW1iZXJbXSkgPT4ge1xuICAgICAgaWYgKCFoYXNEb20pIHJldHVybjtcbiAgICAgIGNvbnN0IGMgPSBtLmNvbG9yLmNsb25lKCk7XG4gICAgICBtLmNvbG9yLnNldFJHQihjLnIgLyBNYXRoLnBvdyhyYXRpb1swXSwgMi4yKSwgYy5nIC8gTWF0aC5wb3cocmF0aW9bMV0sIDIuMiksIGMuYiAvIE1hdGgucG93KHJhdGlvWzJdLCAyLjIpKTtcbiAgICB9O1xuXG4gICAgLy8gV2hpdGV3YXNoZWQgc3RvbmU6IGNsb3VkeSBncmV5IGRyaWZ0LCBncmFpbiwgdGhlbiB0aGUgd2FzaGVzIGFuZCBzdHJlYWtzIHJ1bm5pbmcgZG93bi5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5zdG9uZTtcbiAgICAgIGJpbmQobWF0ZXJpYWxzLnN0b25lLCBtYWtlVGlsZSgyMDI2MDgyNiwgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5tb3R0bGUsIDEwLCAwLjE4LCAwLjQwLCAxNik7XG4gICAgICAgIGdyYWluKGN0eCwgciwgUywgd3JhcHBlZCwgUC5ncmFpbiwgNjAwMCwgMC4wNyk7XG4gICAgICAgIHdhc2hlcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFAud2FzaCwgOSwgMC40MiwgOSwgMzAsIDExMCk7XG4gICAgICAgIHdhc2hlcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFAuc3RyZWFrLCA3LCAwLjQ1LCAzLCA1LCAxNik7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC53YXNoLCA0LCAwLjEwLCAwLjI4LCAyMCk7XG4gICAgICB9KSwgUC5idW1wKTtcbiAgICB9XG4gICAgLy8gUmVkIGxhY3F1ZXI6IHJlLWJhc2VkIHRvIHRoZSBwbGFzdGVyIGVudmVsb3BlLCB0aGUgY2xlYW4gcmVkIHBhaW50ZWQgYXMgaXRzIHJhdGlvLCB0aGVuIHRoZVxuICAgIC8vIGZsYWtlcywgdGhlaXIgcmltcywgZGFyayBncmltZSB3YXNoZXMgYW5kIGdyYWluLlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBXLnJlZDtcbiAgICAgIHJlYmFzZShtYXRlcmlhbHMucmVkLCBQLmNsZWFuKTtcbiAgICAgIGJpbmQobWF0ZXJpYWxzLnJlZCwgbWFrZVRpbGUoODI2MTQwMywgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuY2xlYW4sIDEpOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgW1AuY2xlYW5bMF0gKiAwLjgsIFAuY2xlYW5bMV0gKiAwLjgsIFAuY2xlYW5bMl0gKiAwLjhdLCAxMCwgMC4xNCwgMC41LCAxMik7XG4gICAgICAgIHdhc2hlcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFAuZ3JpbWUsIDE4LCAwLjUwLCA2LCAxNiwgNzApO1xuICAgICAgICBmbGFrZXMoY3R4LCByLCBTLCB3cmFwcGVkLCBQLmZsYWtlLCBQLnJpbSwgNiwgMC4wMjgpO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFAuZ3JhaW4sIDMwMDAsIDAuMTApO1xuICAgICAgfSksIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIFJvb2Y6IGxhaWQgdGlsZSBjb3Vyc2VzIC0tIHRoZSB0aWxlIGlzIGFuIGV4YWN0IHdob2xlIG51bWJlciBvZiBjb3Vyc2VzIGFuZCBjb2x1bW5zIGluXG4gICAgLy8gcnVubmluZyBib25kLCBlYWNoIHRpbGUgYSBzY2FsbG9wZWQgcmVjdGFuZ2xlIGluIGl0cyBvd24gdG9uZSBvdmVyIGEgam9pbnQgZ3JvdW5kIC0tIHRoZW5cbiAgICAvLyBncmV5LWdyZWVuIGdyb3d0aCBhbmQgZ3JpbWUuIE9uZSBjYW52YXMgc2VydmVzIGJvdGggdGhlIHRlcnJhY290dGEgZmllbGQgYW5kIHRoZSBnbGF6ZVxuICAgIC8vIGJhbmQsIHNpbmNlIGl0IGlzIGEgbXVsdGlwbGllciBhbmQgZWFjaCBrZWVwcyBpdHMgb3duIG1lYXN1cmVkIGNvbG91ci5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5yb29mO1xuICAgICAgY29uc3QgYXZnID0gW1AuYXZnLCBQLmF2ZywgUC5hdmddO1xuICAgICAgcmViYXNlKG1hdGVyaWFscy50aWxlLCBhdmcpOyByZWJhc2UobWF0ZXJpYWxzLmdyZWVuLCBhdmcpO1xuICAgICAgY29uc3QgY3YgPSBtYWtlVGlsZSgxMTA1MjAxMSwgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuam9pbnQsIDEpOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGNvbnN0IGN3ID0gUyAvIFAuY29scywgcmggPSBTIC8gUC5yb3dzO1xuICAgICAgICBjb25zdCB0aWxlczogeyBwOiBQYXRoMkQsIHQ6IG51bWJlciB9W10gPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgUC5yb3dzOyByb3crKykge1xuICAgICAgICAgIGNvbnN0IG9mZiA9IChyb3cgJSAyKSAqIGN3IC8gMjtcbiAgICAgICAgICBmb3IgKGxldCBjb2wgPSAwOyBjb2wgPCBQLmNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgICBjb25zdCB4MCA9IGNvbCAqIGN3ICsgb2ZmICsgMS41LCB4MSA9IHgwICsgY3cgLSAzLCB5MCA9IHJvdyAqIHJoICsgMSwgeTEgPSB5MCArIHJoIC0gMjtcbiAgICAgICAgICAgIGNvbnN0IHAgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgICAgICBwLm1vdmVUbyh4MCwgeTApOyBwLmxpbmVUbyh4MSwgeTApOyBwLmxpbmVUbyh4MSwgeTEgLSBjdyAqIDAuMjUpO1xuICAgICAgICAgICAgcC5xdWFkcmF0aWNDdXJ2ZVRvKCh4MCArIHgxKSAvIDIsIHkxICsgY3cgKiAwLjEyLCB4MCwgeTEgLSBjdyAqIDAuMjUpOyBwLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgdGlsZXMucHVzaCh7IHAsIHQ6IFAubG9Ub25lICsgKFAuaGlUb25lIC0gUC5sb1RvbmUpICogcigpIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVkKCgpID0+IHsgZm9yIChjb25zdCB0IG9mIHRpbGVzKSB7IGN0eC5maWxsU3R5bGUgPSBjc3MoW3QudCwgdC50ICogKDAuOTcgKyAwLjAzICogcigpKSwgdC50ICogMC45Nl0sIDEpOyBjdHguZmlsbCh0LnApOyB9IH0pO1xuICAgICAgICBjbG91ZChjdHgsIHIsIFMsIHdyYXBwZWQsIFAubW9zcywgOSwgMC4xMiwgMC40NSwgMTApO1xuICAgICAgICBjbG91ZChjdHgsIHIsIFMsIHdyYXBwZWQsIFAuZ3JpbWUsIDYsIDAuMTYsIDAuMzUsIDE2KTtcbiAgICAgICAgZ3JhaW4oY3R4LCByLCBTLCB3cmFwcGVkLCBQLmpvaW50LCAyNTAwLCAwLjA4KTtcbiAgICAgIH0pO1xuICAgICAgYmluZChtYXRlcmlhbHMudGlsZSwgY3YsIFAuYnVtcCk7XG4gICAgICBiaW5kKG1hdGVyaWFscy5ncmVlbiwgY3YsIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIFBlZGltZW50OiB0aGUgY2FydmVkIGdpbHQgZmllbGQgLS0gYSBjZW50cmFsIGZsYW1lIHdpdGggdGllcnMgb2YgbWlycm9yZWQga3Jhbm9rIHNjcm9sbHNcbiAgICAvLyBvdmVyIHJlZCBsYWNxdWVyLCBkcmF3biBhcyBzdHJva2VkIGN1cnZlcywgcGx1cyB0aGUgc2F3dG9vdGggYm9yZGVyIGFsb25nIGJvdGggcmFrZXMuIFRoZVxuICAgIC8vIGNhbnZhcyBpcyBhYnNvbHV0ZSwgY2xhbXBlZCwgYW5kIG1hcHBlZCBvdmVyIGVhY2ggcGVkaW1lbnQncyBvd24gdHJpYW5nbGUsIGFwZXggYXQgdGhlIHRvcC5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5wZWRpbWVudDtcbiAgICAgIGJpbmQobWF0ZXJpYWxzLmNhcnZlZCwgbWFrZVRpbGUoNywgKGN0eCwgciwgUykgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gUC5ncm91bmQ7IGN0eC5maWxsUmVjdCgwLCAwLCBTLCBTKTtcbiAgICAgICAgY29uc3QgbWlkID0gUyAvIDI7XG4gICAgICAgIGNvbnN0IHNjcm9sbCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGRpcjogbnVtYmVyLCBsdzogbnVtYmVyLCBjb2w6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGNvbDsgY3R4LmxpbmVXaWR0aCA9IGx3OyBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgICAgIGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICAgICAgY3R4LmJlemllckN1cnZlVG8oeCArIGRpciAqIHcgKiAwLjIsIHkgLSBoICogMC42LCB4ICsgZGlyICogdyAqIDAuOSwgeSAtIGggKiAwLjksIHggKyBkaXIgKiB3ICogMC42LCB5IC0gaCAqIDAuMzUpO1xuICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyBkaXIgKiB3ICogMC40NSwgeSAtIGggKiAwLjEsIHggKyBkaXIgKiB3ICogMC4yNSwgeSAtIGggKiAwLjIsIHggKyBkaXIgKiB3ICogMC4zNSwgeSAtIGggKiAwLjQ1KTtcbiAgICAgICAgICBjdHguc3Ryb2tlKCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHRpZXJzIG9mIHNjcm9sbHMgY2xpbWJpbmcgdGhlIHRyaWFuZ2xlLCBlYWNoIHJvdyBuYXJyb3dlciB0aGFuIHRoZSBvbmUgYmVsb3dcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgOTsgcm93KyspIHtcbiAgICAgICAgICBjb25zdCB5ID0gUyAqICgwLjk3IC0gcm93ICogMC4wOTUpLCBoYWxmID0gbWlkICogKDAuOTQgLSByb3cgKiAwLjEwKTtcbiAgICAgICAgICBjb25zdCBuID0gNyAtIE1hdGguZmxvb3Iocm93IC8gMik7XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSBoYWxmICogKGkgKyAwLjUpIC8gbiwgdyA9IGhhbGYgLyBuICogMS4xLCBoID0gUyAqIDAuMTE7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRpciBvZiBbLTEsIDFdKSB7XG4gICAgICAgICAgICAgIHNjcm9sbChtaWQgKyBkaXIgKiB4LCB5LCB3LCBoLCBkaXIsIDYsIFAuZ29sZCk7XG4gICAgICAgICAgICAgIHNjcm9sbChtaWQgKyBkaXIgKiB4LCB5LCB3ICogMC44LCBoICogMC44LCBkaXIsIDIsIFAuZ29sZEhpKTtcbiAgICAgICAgICAgICAgc2Nyb2xsKG1pZCArIGRpciAqICh4ICsgdyAqIDAuNSksIHkgLSBoICogMC4xNSwgdyAqIDAuNSwgaCAqIDAuNSwgLWRpciwgMi41LCBQLmdvbGRMbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNlbnRyYWwgZmxhbWU6IG5lc3RlZCBwb2ludGVkIGxlYXZlcyB1cCB0aGUgYXhpc1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IDU7IGsrKykge1xuICAgICAgICAgIGNvbnN0IHkwID0gUyAqICgwLjk4IC0gayAqIDAuMTkpLCBoID0gUyAqIDAuMjIsIHcgPSBTICogKDAuMTEgLSBrICogMC4wMTIpO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBrICUgMiA/IFAuZ29sZEhpIDogUC5nb2xkO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyhtaWQsIHkwKTtcbiAgICAgICAgICBjdHgucXVhZHJhdGljQ3VydmVUbyhtaWQgKyB3LCB5MCAtIGggKiAwLjQ1LCBtaWQsIHkwIC0gaCk7XG4gICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8obWlkIC0gdywgeTAgLSBoICogMC40NSwgbWlkLCB5MCk7IGN0eC5maWxsKCk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFAuZ3JvdW5kO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyhtaWQsIHkwIC0gaCAqIDAuMTIpO1xuICAgICAgICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKG1pZCArIHcgKiAwLjQsIHkwIC0gaCAqIDAuNDUsIG1pZCwgeTAgLSBoICogMC44Mik7XG4gICAgICAgICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8obWlkIC0gdyAqIDAuNCwgeTAgLSBoICogMC40NSwgbWlkLCB5MCAtIGggKiAwLjEyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzYXd0b290aCBib3JkZXJzIGFsb25nIGJvdGggcmFrZXMgYW5kIHRoZSBiYXNlXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBQLmdvbGRIaTtcbiAgICAgICAgY29uc3QgdGVldGggPSAyNjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZWV0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdDAgPSBpIC8gdGVldGgsIHQxID0gKGkgKyAwLjUpIC8gdGVldGgsIHQyID0gKGkgKyAxKSAvIHRlZXRoO1xuICAgICAgICAgIGZvciAoY29uc3QgZGlyIG9mIFstMSwgMV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHB4ID0gKHQ6IG51bWJlcikgPT4gbWlkICsgZGlyICogbWlkICogMC45NyAqICgxIC0gdCksIHB5ID0gKHQ6IG51bWJlcikgPT4gUyAqICgwLjAzICsgMC45NSAqICgxIC0gdCkpO1xuICAgICAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHB4KHQwKSwgcHkodDApKTsgY3R4LmxpbmVUbyhweCh0MSkgKyBkaXIgKiA5LCBweSh0MSkgLSA5KTsgY3R4LmxpbmVUbyhweCh0MiksIHB5KHQyKSk7IGN0eC5maWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh0MCAqIFMsIFMgKiAwLjk4NSk7IGN0eC5saW5lVG8odDEgKiBTLCBTICogMC45NTUpOyBjdHgubGluZVRvKHQyICogUywgUyAqIDAuOTg1KTsgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzcGFya2xlOiBzbWFsbCBicmlnaHQgZGlzY3MgYXQgdGhlIHNjcm9sbCBleWVzXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBQLmdvbGRIaTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgdCA9IHIoKSwgeSA9IFMgKiAoMC4xNSArIDAuOCAqIHQpLCB4ID0gbWlkICsgKHIoKSAtIDAuNSkgKiBtaWQgKiAxLjcgKiAoMC4xNSArIDAuODUgKiB0KTtcbiAgICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCwgeSwgMiArIDIgKiByKCksIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgfSksIDAuMDIsIGZhbHNlKTtcbiAgICB9XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVVYm9zb3RNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gU3RhdGljIGxhbmRtYXJrIGdlb21ldHJ5IC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gQSBuYW1lZCBwaXZvdCBpcyBhXG4gICAgLy8gcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3JcbiAgICAvLyBoYXMgZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxNQUNWLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLE1BQ1AsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsYUFBYTtBQUFBLE1BQ2IsY0FBYztBQUFBLElBQ2hCO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLE9BQU87QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxRQUNWO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxNQUNaLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7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
