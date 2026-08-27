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

// scratch/prang/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createPrangModel: () => createPrangModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "prang",
  "name": "Prang",
  "exportName": "Prang",
  "envelope": "Envelope 9.00 x 18.00 x 9.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "stone",
      "color": 13350822,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "porcelain",
      "color": 15129803,
      "roughness": 0.7,
      "metalness": 0
    },
    {
      "id": "red",
      "color": 8607821,
      "roughness": 0.82,
      "metalness": 0
    },
    {
      "id": "shadow",
      "color": 13286057,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 11837554,
      "roughness": 0.34,
      "metalness": 0.32,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "terrace": [
      [
        0,
        0.8,
        4.5
      ],
      [
        0.8,
        1.6,
        4.15
      ],
      [
        1.6,
        2.45,
        3.75
      ]
    ],
    "notch": {
      "halfZ": 1.3,
      "xInner": 2.45
    },
    "stair": {
      "steps": 12,
      "x0": 2.45,
      "x1": 4.5,
      "top": 2.45,
      "treadHalfZ": 1,
      "cheek": [
        1,
        1.3
      ]
    },
    "balustrade": {
      "y0": 2.45,
      "y1": 3.15,
      "outer": 3.75,
      "thick": 0.3
    },
    "tower": {
      "y0": 2.45,
      "y1": 10.2,
      "a": 2.2,
      "r": 0.3
    },
    "pilaster": {
      "w": 0.18,
      "proud": 0.07,
      "y0": 2.65,
      "y1": 10
    },
    "door": {
      "w": 1.35,
      "h": 3.4,
      "depth": 0.34,
      "y": 2.75,
      "sill": 0.2
    },
    "pediment": {
      "w": 3,
      "h": 2.2,
      "depth": 0.16,
      "y": 6.45
    },
    "tiers": {
      "y0": 10.2,
      "y1": 16.2,
      "count": 8,
      "a0": 2.05,
      "a1": 0.5,
      "curve": 1.5,
      "redent": 0.13,
      "lip": 0.1
    },
    "cap": {
      "y0": 16,
      "y1": 17.1,
      "r": 0.6,
      "seg": 24
    },
    "finial": {
      "y0": 16.9,
      "y1": 18
    },
    "wear": {
      "size": 512,
      "stone": {
        "tile": 3.2,
        "course": 0.32,
        "block": 0.8,
        "joint": 6,
        "bump": 0.04,
        "clean": [
          0.906,
          0.973,
          1
        ],
        "lichen": [
          0.995,
          0.978,
          0.783
        ],
        "grime": [
          0.7,
          0.72,
          0.75
        ],
        "jointTone": [
          0.6,
          0.6,
          0.63
        ],
        "blockLo": 0.9,
        "blockHi": 1,
        "mottle": [
          0.88,
          0.88,
          0.9
        ],
        "light": [
          1,
          1,
          1
        ],
        "pit": [
          0.62,
          0.64,
          0.68
        ]
      },
      "porcelain": {
        "tile": 3.2,
        "bump": 0.05,
        "mottle": [
          0.91,
          0.91,
          0.9
        ],
        "wash": [
          0.74,
          0.75,
          0.76
        ],
        "chips": [
          {
            "tone": [
              0.99,
              0.99,
              0.99
            ],
            "w": 0.3
          },
          {
            "tone": [
              0.42,
              0.5,
              0.66
            ],
            "w": 0.22
          },
          {
            "tone": [
              0.46,
              0.6,
              0.5
            ],
            "w": 0.18
          },
          {
            "tone": [
              0.88,
              0.76,
              0.4
            ],
            "w": 0.15
          },
          {
            "tone": [
              0.8,
              0.56,
              0.42
            ],
            "w": 0.1
          },
          {
            "tone": [
              0.6,
              0.62,
              0.7
            ],
            "w": 0.05
          }
        ],
        "chipCount": 680,
        "chipRad": [
          3,
          9
        ]
      },
      "red": {
        "tile": 1.6,
        "bump": 0.03,
        "clean": [
          0.555,
          0.386,
          0.363
        ],
        "worn": [
          1,
          1,
          1
        ],
        "grime": [
          0.74,
          0.72,
          0.74
        ]
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
function cylAt(cx, cy, cz, rTop, rBot, h, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
  g.translate(cx, cy, cz);
  return g;
}
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function redentedShape(a, r) {
  const quad = [[a, a - 2 * r], [a - r, a - 2 * r], [a - r, a - r], [a - 2 * r, a - r], [a - 2 * r, a]];
  const pts = [];
  for (let k = 0; k < 4; k++) {
    for (const [x, z] of quad) {
      let px = x, pz = z;
      for (let i = 0; i < k; i++) {
        const t = px;
        px = -pz;
        pz = t;
      }
      pts.push([px, pz]);
    }
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}
function extrudeSlab(shape, y0, y1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}
function notchedSquare(a, notchHalfZ, xInner) {
  const pts = [
    [a, -a],
    [a, -notchHalfZ],
    [xInner, -notchHalfZ],
    [xInner, notchHalfZ],
    [a, notchHalfZ],
    [a, a],
    [-a, a],
    [-a, -a]
  ];
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function archedPlate(w, h, archR, spring, hole) {
  const shape = new THREE.Shape();
  shape.moveTo(-w / 2, 0);
  shape.lineTo(w / 2, 0);
  shape.lineTo(w / 2, spring);
  shape.absarc(0, spring, archR, 0, Math.PI, false);
  shape.lineTo(-w / 2, spring);
  shape.closePath();
  if (hole) {
    const p = new THREE.Path();
    p.moveTo(hole.r, hole.sill);
    p.lineTo(hole.r, hole.spring);
    p.absarc(0, hole.spring, hole.r, 0, Math.PI, false);
    p.lineTo(-hole.r, hole.sill);
    p.closePath();
    shape.holes.push(p);
  }
  return shape;
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
function createPrangModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Prang";
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
  function boxUv(geo, tile) {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u, v;
      if (ay >= ax && ay >= az) {
        u = p.getX(i);
        v = p.getZ(i);
      } else if (ax >= az) {
        u = p.getZ(i);
        v = p.getY(i);
      } else {
        u = p.getX(i);
        v = p.getY(i);
      }
      out[i * 2] = u / tile;
      out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  function latheUv(geo, tile, rRef) {
    const p = geo.getAttribute("position"), uv = geo.getAttribute("uv");
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      out[i * 2] = uv.getX(i) * rep;
      out[i * 2 + 1] = p.getY(i) / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  const W = G.wear;
  {
    const N = G.notch, ST = G.stair, B = G.balustrade;
    const parts = G.terrace.map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1)
    );
    const bi = B.outer - B.thick, bc = B.outer - B.thick / 2, bh = B.y1 - B.y0, by = (B.y0 + B.y1) / 2;
    parts.push(boxAt(-bc, by, 0, B.thick, bh, B.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, B.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, B.thick));
    const segLen = B.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + B.outer) / 2, B.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + B.outer) / 2, B.thick, bh, segLen));
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }
    const cheek = new THREE.Shape();
    cheek.moveTo(ST.x1, 0);
    cheek.lineTo(ST.x0, 0);
    cheek.lineTo(ST.x0, ST.top);
    cheek.closePath();
    parts.push(extrudeAlongZ(cheek, ST.cheek[0], ST.cheek[1]));
    parts.push(extrudeAlongZ(cheek, -ST.cheek[1], -ST.cheek[0]));
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 2.45, [0.82, 0.83, 0.8]);
    boxUv(geo, W.stone.tile);
    add("terrace", "Terrace, balustrade and stair", geo, "stone");
    colliders["terrace"] = {
      shape: "box",
      localCenter: [0, 9, 0],
      halfExtents: [4.5, 9, 4.5],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the tower, not with its stair treads.'
    };
  }
  {
    const T = G.tower;
    const body = extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1);
    boxUv(body, W.porcelain.tile);
    add("tower", "Tower body", body, "porcelain");
  }
  {
    const T = G.tower, P = G.pilaster;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    const xf = T.a - T.r, zf = T.a - T.r, near = T.a - 2 * T.r;
    const unit = mergeGeos([
      boxAt(xf + P.proud / 2, py, (near + zf) / 2, P.proud, ph, P.w),
      boxAt((near + xf) / 2, py, zf + P.proud / 2, P.w, ph, P.proud)
    ]);
    boxUv(unit, W.red.tile);
    addInst("pilasters", "Redent pilaster strips", unit, "red", quad(0, 0));
  }
  {
    const T = G.tower, D = G.door, PD = G.pediment;
    const face = T.a;
    const doorShape = archedPlate(
      D.w,
      D.h,
      D.w / 2,
      D.h - D.w / 2,
      { r: D.w / 2 - 0.22, spring: D.h - D.w / 2, sill: D.sill }
    );
    const doorFrame = new THREE.ExtrudeGeometry(
      doorShape,
      { depth: D.depth, bevelEnabled: false, curveSegments: 10 }
    );
    doorFrame.translate(0, D.y, face - D.depth + 0.16);
    doorFrame.computeVertexNormals();
    const pedShape = archedPlate(PD.w, PD.h, PD.w / 2, PD.h - PD.w / 2);
    const ped = new THREE.ExtrudeGeometry(
      pedShape,
      { depth: PD.depth, bevelEnabled: false, curveSegments: 10 }
    );
    ped.translate(0, PD.y, face - PD.depth + 0.09);
    ped.computeVertexNormals();
    const doorUnit = mergeGeos([doorFrame, ped]);
    boxUv(doorUnit, W.porcelain.tile);
    addInst("door-frames", "False doors and pediments", doorUnit, "porcelain", quad(0, 0));
    const panel = boxAt(0, D.y + D.h / 2 - 0.1, face + 0.015, D.w - 0.48, D.h - 0.46, 0.05);
    boxUv(panel, W.porcelain.tile);
    addInst("door-panels", "Blind door panels", panel, "shadow", quad(0, 0));
  }
  {
    const T = G.tiers;
    const step = (T.y1 - T.y0) / T.count;
    const parts = [];
    for (let i = 0; i < T.count; i++) {
      const t = i / T.count;
      const a = T.a1 + (T.a0 - T.a1) * Math.pow(Math.cos(t * Math.PI / 2), T.curve);
      const y0 = T.y0 + i * step;
      parts.push(extrudeSlab(redentedShape(a, a * T.redent), y0, T.y0 + (i + 1) * step));
      const la = a + T.lip;
      parts.push(extrudeSlab(redentedShape(la, la * T.redent), y0 + 0.02, y0 + 0.16));
    }
    const stack = mergeGeos(parts);
    boxUv(stack, W.porcelain.tile);
    add("tiers", "Corn-cob tiers", stack, "porcelain");
  }
  {
    const C = G.cap;
    const pts = [];
    for (let i = 0; i <= 10; i++) {
      const t = i / 10;
      pts.push([C.r * Math.cos(t * Math.PI / 2), C.y0 + (C.y1 - C.y0) * t]);
    }
    pts.unshift([C.r, C.y0 - 0]);
    const dome = lathe(pts, C.seg);
    latheUv(dome, W.porcelain.tile, C.r);
    add("cap", "Domed cap", dome, "porcelain");
  }
  {
    const F = G.finial;
    const shaft = F.y0;
    const parts = [
      cylAt(0, shaft + 0.1, 0, 0.11, 0.14, 0.2, 12),
      // collar
      cylAt(0, shaft + 0.34, 0, 0.05, 0.07, 0.3, 12),
      // stem
      boxAt(0, shaft + 0.5, 0, 0.4, 0.07, 0.07),
      // cross bar the outer prongs spring from
      cylAt(0, shaft + 0.9, 0, 8e-3, 0.055, 0.82, 10)
      // tapered centre spike
    ];
    for (const sign of [-1, 1]) {
      const n = 5;
      const at = (u) => [sign * (0.17 + 0.15 * Math.sin(u * Math.PI * 0.72)), shaft + 0.52 + 0.6 * u];
      for (let j = 0; j < n; j++) {
        const a = at(j / n), b = at((j + 1) / n);
        const dx = b[0] - a[0], dy = b[1] - a[1];
        const len = Math.hypot(dx, dy);
        const g = new THREE.BoxGeometry(0.05, len + 0.03, 0.05);
        g.rotateZ(Math.atan2(-dx, dy));
        g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, 0);
        parts.push(g);
      }
    }
    add("finial", "Gilt trident finial", mergeGeos(parts), "gold");
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
    const hasDom = typeof document !== "undefined" && typeof document.createElement === "function";
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t, a) => "rgba(" + Math.round(Math.min(1, t[0]) * 255) + "," + Math.round(Math.min(1, t[1]) * 255) + "," + Math.round(Math.min(1, t[2]) * 255) + "," + a + ")";
    const rng = (seed) => () => {
      seed = seed * 1664525 + 1013904223 >>> 0;
      return seed / 4294967296;
    };
    const coursing = (ctx, r, S, wrapped, P) => {
      const rows = Math.round(P.tile / P.course), cols = Math.round(P.tile / P.block);
      const ch = S / rows, bw = S / cols, j = P.joint / 2;
      ctx.fillStyle = css(P.jointTone, 1);
      ctx.fillRect(0, 0, S, S);
      const blocks = [];
      for (let row = 0; row < rows; row++) {
        const off = row % 2 * bw / 2;
        for (let col = 0; col < cols; col++) {
          const x0 = col * bw + off + j, x1 = x0 + bw - 2 * j, y0 = row * ch + j, y1 = y0 + ch - 2 * j;
          const q = () => (r() - 0.5) * P.joint * 0.9;
          const p = new Path2D();
          p.moveTo(x0 + q(), y0 + q());
          p.lineTo(x1 + q(), y0 + q());
          p.lineTo(x1 + q(), y1 + q());
          p.lineTo(x0 + q(), y1 + q());
          p.closePath();
          const t = P.blockLo + (P.blockHi - P.blockLo) * r();
          blocks.push({ p, tone: [t, t * (0.97 + 0.03 * r()), t * (0.95 + 0.05 * r())] });
        }
      }
      wrapped(() => {
        for (const b of blocks) {
          ctx.fillStyle = css(b.tone, 1);
          ctx.fill(b.p);
        }
      });
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
    const washes = (ctx, r, S, wrapped, tone, count, alpha, blurPx) => {
      const marks = [];
      for (let i = 0; i < count; i++) marks.push([r() * S, r() * S, S * (0.15 + 0.45 * r()), 18 + 60 * r(), alpha * (0.5 + 0.5 * r())]);
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
    const crust = (ctx, r, S, wrapped, tone, clusters, perCluster, rad, alpha) => {
      const p = new Path2D();
      for (let i = 0; i < clusters; i++) {
        const cx = r() * S, cy = r() * S, R = rad * S * (0.4 + r());
        for (let k = 0; k < perCluster; k++) {
          const a = r() * Math.PI * 2, d = R * Math.sqrt(r());
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.7, rr = 1 + 1.6 * r();
          p.moveTo(x + rr, y);
          p.arc(x, y, rr, 0, Math.PI * 2);
        }
      }
      wrapped(() => {
        ctx.fillStyle = css(tone, alpha);
        ctx.fill(p);
      });
    };
    const pits = (ctx, r, S, wrapped, tone, count, maxPx, alpha) => {
      const p = new Path2D();
      for (let i = 0; i < count; i++) {
        const x = r() * S, y = r() * S, rx = 1 + r() * maxPx, ry = rx * (0.6 + 0.6 * r());
        p.moveTo(x + rx, y);
        p.ellipse(x, y, rx, ry, r() * Math.PI, 0, Math.PI * 2);
      }
      wrapped(() => {
        ctx.fillStyle = css(tone, alpha);
        ctx.fill(p);
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
    const chips = (ctx, r, S, wrapped, P) => {
      const fams = P.chips;
      const paths = fams.map(() => new Path2D());
      const centres = [];
      for (let i = 0; i < 26; i++) centres.push([r() * S, r() * S, S * (0.04 + 0.09 * r())]);
      for (let i = 0; i < P.chipCount; i++) {
        let cx, cy;
        if (r() < 0.75) {
          const c = centres[Math.floor(r() * centres.length)];
          const a = r() * Math.PI * 2, d = c[2] * Math.sqrt(r());
          cx = c[0] + Math.cos(a) * d;
          cy = c[1] + Math.sin(a) * d;
        } else {
          cx = r() * S;
          cy = r() * S;
        }
        const R = P.chipRad[0] + (P.chipRad[1] - P.chipRad[0]) * r();
        const n = 4 + Math.floor(r() * 4), rot = r() * Math.PI * 2;
        let pick = r(), f = 0;
        for (; f < fams.length - 1; f++) {
          pick -= fams[f].w;
          if (pick <= 0) break;
        }
        const p = paths[f];
        for (let k = 0; k < n; k++) {
          const a = rot + k / n * Math.PI * 2 + (r() - 0.5) * 0.5, rr = R * (0.6 + 0.4 * r());
          const x = cx + Math.cos(a) * rr, y = cy + Math.sin(a) * rr * (0.7 + 0.3 * r());
          if (k === 0) p.moveTo(x, y);
          else p.lineTo(x, y);
        }
        p.closePath();
      }
      wrapped(() => {
        fams.forEach((fm, i) => {
          ctx.fillStyle = css(fm.tone, 0.92);
          ctx.fill(paths[i]);
        });
      });
    };
    const bind = (mat, cv, bump) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };
    {
      const P = W.stone;
      bind(materials.stone, makeTile(20260826, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.16, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.light, 8, 0.14, 0.4, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 5e3, 0.07);
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = css(P.clean, 1);
        ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = "source-over";
        cloud(ctx, r, S, wrapped, P.lichen, 30, 0.16, 0.95, 10);
        crust(ctx, r, S, wrapped, P.lichen, 60, 40, 0.04, 0.8);
        washes(ctx, r, S, wrapped, P.grime, 24, 0.7, 5);
        cloud(ctx, r, S, wrapped, P.grime, 6, 0.09, 0.4, 16);
        pits(ctx, r, S, wrapped, P.pit, 260, 2, 0.5);
      }), P.bump);
    }
    {
      const P = W.porcelain;
      const tile = makeTile(8261403, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 16, 0.15, 0.75, 14);
        grain(ctx, r, S, wrapped, P.wash, 5e3, 0.07);
        washes(ctx, r, S, wrapped, P.wash, 30, 0.8, 5);
        cloud(ctx, r, S, wrapped, P.wash, 8, 0.08, 0.4, 16);
        chips(ctx, r, S, wrapped, P);
      });
      bind(materials.porcelain, tile, P.bump);
      bind(materials.shadow, tile, P.bump);
    }
    {
      const P = W.red;
      const m = materials.red;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      bind(m, makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = css(P.clean, 1);
        ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, [P.clean[0] * 0.9, P.clean[1] * 0.9, P.clean[2] * 0.9], 8, 0.14, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.worn, 9, 0.07, 0.85, 6);
        washes(ctx, r, S, wrapped, [P.clean[0] * P.grime[0], P.clean[1] * P.grime[1], P.clean[2] * P.grime[2]], 10, 0.5, 5);
        grain(ctx, r, S, wrapped, P.worn, 2500, 0.08);
      }), P.bump);
    }
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createPrangModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUHJhbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOS4wMCB4IDE4LjAwIHggOS4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInByYW5nXCIsXG4gICAgXCJuYW1lXCI6IFwiUHJhbmdcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJQcmFuZ1wiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSA5LjAwIHggMTguMDAgeCA5LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXFxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdG9uZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzMzUwODIyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicG9yY2VsYWluXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTUxMjk4MDMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJlZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDg2MDc4MjEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzaGFkb3dcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMzI4NjA1NyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTgzNzU1NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zMixcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwidGVycmFjZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICA0LjVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAxLjYsXG4gICAgICAgICAgNC4xNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS42LFxuICAgICAgICAgIDIuNDUsXG4gICAgICAgICAgMy43NVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJub3RjaFwiOiB7XG4gICAgICAgIFwiaGFsZlpcIjogMS4zLFxuICAgICAgICBcInhJbm5lclwiOiAyLjQ1XG4gICAgICB9LFxuICAgICAgXCJzdGFpclwiOiB7XG4gICAgICAgIFwic3RlcHNcIjogMTIsXG4gICAgICAgIFwieDBcIjogMi40NSxcbiAgICAgICAgXCJ4MVwiOiA0LjUsXG4gICAgICAgIFwidG9wXCI6IDIuNDUsXG4gICAgICAgIFwidHJlYWRIYWxmWlwiOiAxLFxuICAgICAgICBcImNoZWVrXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEuM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJiYWx1c3RyYWRlXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAyLjQ1LFxuICAgICAgICBcInkxXCI6IDMuMTUsXG4gICAgICAgIFwib3V0ZXJcIjogMy43NSxcbiAgICAgICAgXCJ0aGlja1wiOiAwLjNcbiAgICAgIH0sXG4gICAgICBcInRvd2VyXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAyLjQ1LFxuICAgICAgICBcInkxXCI6IDEwLjIsXG4gICAgICAgIFwiYVwiOiAyLjIsXG4gICAgICAgIFwiclwiOiAwLjNcbiAgICAgIH0sXG4gICAgICBcInBpbGFzdGVyXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMTgsXG4gICAgICAgIFwicHJvdWRcIjogMC4wNyxcbiAgICAgICAgXCJ5MFwiOiAyLjY1LFxuICAgICAgICBcInkxXCI6IDEwXG4gICAgICB9LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEuMzUsXG4gICAgICAgIFwiaFwiOiAzLjQsXG4gICAgICAgIFwiZGVwdGhcIjogMC4zNCxcbiAgICAgICAgXCJ5XCI6IDIuNzUsXG4gICAgICAgIFwic2lsbFwiOiAwLjJcbiAgICAgIH0sXG4gICAgICBcInBlZGltZW50XCI6IHtcbiAgICAgICAgXCJ3XCI6IDMsXG4gICAgICAgIFwiaFwiOiAyLjIsXG4gICAgICAgIFwiZGVwdGhcIjogMC4xNixcbiAgICAgICAgXCJ5XCI6IDYuNDVcbiAgICAgIH0sXG4gICAgICBcInRpZXJzXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxMC4yLFxuICAgICAgICBcInkxXCI6IDE2LjIsXG4gICAgICAgIFwiY291bnRcIjogOCxcbiAgICAgICAgXCJhMFwiOiAyLjA1LFxuICAgICAgICBcImExXCI6IDAuNSxcbiAgICAgICAgXCJjdXJ2ZVwiOiAxLjUsXG4gICAgICAgIFwicmVkZW50XCI6IDAuMTMsXG4gICAgICAgIFwibGlwXCI6IDAuMVxuICAgICAgfSxcbiAgICAgIFwiY2FwXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxNixcbiAgICAgICAgXCJ5MVwiOiAxNy4xLFxuICAgICAgICBcInJcIjogMC42LFxuICAgICAgICBcInNlZ1wiOiAyNFxuICAgICAgfSxcbiAgICAgIFwiZmluaWFsXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxNi45LFxuICAgICAgICBcInkxXCI6IDE4XG4gICAgICB9LFxuICAgICAgXCJ3ZWFyXCI6IHtcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzdG9uZVwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDMuMixcbiAgICAgICAgICBcImNvdXJzZVwiOiAwLjMyLFxuICAgICAgICAgIFwiYmxvY2tcIjogMC44LFxuICAgICAgICAgIFwiam9pbnRcIjogNixcbiAgICAgICAgICBcImJ1bXBcIjogMC4wNCxcbiAgICAgICAgICBcImNsZWFuXCI6IFtcbiAgICAgICAgICAgIDAuOTA2LFxuICAgICAgICAgICAgMC45NzMsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImxpY2hlblwiOiBbXG4gICAgICAgICAgICAwLjk5NSxcbiAgICAgICAgICAgIDAuOTc4LFxuICAgICAgICAgICAgMC43ODNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZ3JpbWVcIjogW1xuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC43MixcbiAgICAgICAgICAgIDAuNzVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiam9pbnRUb25lXCI6IFtcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDAuNjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYmxvY2tMb1wiOiAwLjksXG4gICAgICAgICAgXCJibG9ja0hpXCI6IDEsXG4gICAgICAgICAgXCJtb3R0bGVcIjogW1xuICAgICAgICAgICAgMC44OCxcbiAgICAgICAgICAgIDAuODgsXG4gICAgICAgICAgICAwLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwibGlnaHRcIjogW1xuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInBpdFwiOiBbXG4gICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgMC42NCxcbiAgICAgICAgICAgIDAuNjhcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicG9yY2VsYWluXCI6IHtcbiAgICAgICAgICBcInRpbGVcIjogMy4yLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjA1LFxuICAgICAgICAgIFwibW90dGxlXCI6IFtcbiAgICAgICAgICAgIDAuOTEsXG4gICAgICAgICAgICAwLjkxLFxuICAgICAgICAgICAgMC45XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIndhc2hcIjogW1xuICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgIDAuNzUsXG4gICAgICAgICAgICAwLjc2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNoaXBzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJ0b25lXCI6IFtcbiAgICAgICAgICAgICAgICAwLjk5LFxuICAgICAgICAgICAgICAgIDAuOTksXG4gICAgICAgICAgICAgICAgMC45OVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndcIjogMC4zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInRvbmVcIjogW1xuICAgICAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgICAgIDAuNjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3XCI6IDAuMjJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidG9uZVwiOiBbXG4gICAgICAgICAgICAgICAgMC40NixcbiAgICAgICAgICAgICAgICAwLjYsXG4gICAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwid1wiOiAwLjE4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInRvbmVcIjogW1xuICAgICAgICAgICAgICAgIDAuODgsXG4gICAgICAgICAgICAgICAgMC43NixcbiAgICAgICAgICAgICAgICAwLjRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ3XCI6IDAuMTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidG9uZVwiOiBbXG4gICAgICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAgICAgMC40MlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndcIjogMC4xXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInRvbmVcIjogW1xuICAgICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAgIDAuN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcIndcIjogMC4wNVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJjaGlwQ291bnRcIjogNjgwLFxuICAgICAgICAgIFwiY2hpcFJhZFwiOiBbXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgOVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJyZWRcIjoge1xuICAgICAgICAgIFwidGlsZVwiOiAxLjYsXG4gICAgICAgICAgXCJidW1wXCI6IDAuMDMsXG4gICAgICAgICAgXCJjbGVhblwiOiBbXG4gICAgICAgICAgICAwLjU1NSxcbiAgICAgICAgICAgIDAuMzg2LFxuICAgICAgICAgICAgMC4zNjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwid29yblwiOiBbXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZ3JpbWVcIjogW1xuICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgIDAuNzIsXG4gICAgICAgICAgICAwLjc0XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVQcmFuZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnUHJhbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgLyoqIEJveC1wcm9qZWN0IFVWcyBieSBlYWNoIHZlcnRleCdzIGRvbWluYW50IG5vcm1hbCBheGlzLCBpbiBtZXRyZXMgb3ZlciB0aGUgdGlsZSBzaXplLCBzbyB0aGVcbiAgICogIHdlYXRoZXJpbmcgdGlsZXMgbGFuZCBhdCB0cnVlIHNjYWxlIGFuZCBsaW5lIHVwIGFjcm9zcyBldmVyeSBtZXJnZWQgcGFydC4gRXZlcnkgZ2VvbWV0cnlcbiAgICogIHRoaXMgaXMgdXNlZCBvbiBpcyBub24taW5kZXhlZCB3aXRoIHBlci1mYWNlIG5vcm1hbHMsIHNvIGEgZmFjZSBuZXZlciBzdHJhZGRsZXMgdHdvXG4gICAqICBwcm9qZWN0aW9ucy4gKi9cbiAgZnVuY3Rpb24gYm94VXYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgYXggPSBNYXRoLmFicyhuLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG4uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobi5nZXRaKGkpKTtcbiAgICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICAgIGlmIChheSA+PSBheCAmJiBheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgICBlbHNlIGlmIChheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgICAgb3V0W2kgKiAyXSA9IHUgLyB0aWxlOyBvdXRbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAyKSk7XG4gIH1cbiAgLyoqIFJlLW1hcCBhIGxhdGhlJ3MgVVZzIHRvIGEgbWV0cmUtc2NhbGVkIHRpbGU6IHUga2VlcHMgTGF0aGVHZW9tZXRyeSdzIG93biBzZWFtbGVzcyAwLi4xXG4gICAqICBzd2VlcCwgc2NhbGVkIHRvIGEgd2hvbGUgbnVtYmVyIG9mIHJlcGVhdHMgYXQgdGhlIHJlZmVyZW5jZSByYWRpdXMgc28gdGhlIHNlYW0gY29sdW1uIGxhbmRzXG4gICAqICBvbiBhIHRpbGUgZWRnZTsgdiBpcyB3b3JsZCBoZWlnaHQgb3ZlciB0aGUgdGlsZSBzaXplLiAqL1xuICBmdW5jdGlvbiBsYXRoZVV2KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHRpbGU6IG51bWJlciwgclJlZjogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIHV2ID0gZ2VvLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogclJlZiAvIHRpbGUpKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgeyBvdXRbaSAqIDJdID0gdXYuZ2V0WChpKSAqIHJlcDsgb3V0W2kgKiAyICsgMV0gPSBwLmdldFkoaSkgLyB0aWxlOyB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMikpO1xuICB9XG4gIGNvbnN0IFcgPSBHLndlYXI7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0ZXJyYWNlLCBiYWx1c3RyYWRlLCBzdGFpclxuICAgKiBBbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHdlYXRoZXJlZCBzdG9uZSwgc28gYWxsIHRocmVlIHJpZGUgT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC5cbiAgICogR3JvdXBpbmcgYnkgTUFURVJJQUwgcmF0aGVyIHRoYW4gYnkgbG9jYXRpb24gaXMgdGhlIGRyYXctY2FsbCBsZXZlciwgYW5kIGhlcmUgaXQgY29sbGFwc2VzXG4gICAqIHRocmVlIHNsYWJzLCBzaXggYmFsdXN0cmFkZSBydW5zLCB0ZW4gdHJlYWRzIGFuZCB0d28gcmFraW5nIGNoZWVrcyBpbnRvIGEgc2luZ2xlIHN1Ym1pc3Npb24uXG4gICAqXG4gICAqIFRoZSBzdGFpciBpcyBjdXQgb3V0IG9mIHRoZSB0ZXJyYWNlIFBMQU4uIEh1bmcgb2ZmIHRoZSBvdXRzaWRlIGluc3RlYWQsIGEgZmxpZ2h0IHByb2plY3RpbmdcbiAgICogcGFzdCBhIDkuMDAgbSB0ZXJyYWNlIHdvdWxkIHB1c2ggdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWRcbiAgICogd2lkdGggb24gb25lIHNpZGU7IGN1dCBpbnRvIGl0LCB0aGUgYXN5bW1ldHJ5IGNvc3RzIG5vdGhpbmcuICovXG4gIHtcbiAgICBjb25zdCBOID0gRy5ub3RjaCwgU1QgPSBHLnN0YWlyLCBCID0gRy5iYWx1c3RyYWRlO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gKEcudGVycmFjZSBhcyBudW1iZXJbXVtdKS5tYXAoXG4gICAgICAoW3kwLCB5MSwgYV0pID0+IGV4dHJ1ZGVTbGFiKG5vdGNoZWRTcXVhcmUoYSwgTi5oYWxmWiwgTi54SW5uZXIpLCB5MCwgeTEpKTtcblxuICAgIC8vIEJhbHVzdHJhZGU6IHRoZSBzaWRlIHJ1bnMgY2FycnkgdGhlIGZ1bGwgZGVwdGggYW5kIHRoZSBmcm9udCBhbmQgYmFjayBydW5zIHN0b3AgYmV0d2VlblxuICAgIC8vIHRoZW0uIFJ1biB0byBmdWxsIHdpZHRoIGluc3RlYWQsIGVhY2ggY29ybmVyIHdvdWxkIHB1dCB0d28gb3V0ZXIgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmVcbiAgICAvLyBmYWNpbmcgdGhlIHNhbWUgd2F5IC0tIDAuMjAgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UgYXQgZXZlcnkgY29ybmVyIG9mIHRoZSB0ZXJyYWNlLlxuICAgIGNvbnN0IGJpID0gQi5vdXRlciAtIEIudGhpY2ssIGJjID0gQi5vdXRlciAtIEIudGhpY2sgLyAyLCBiaCA9IEIueTEgLSBCLnkwLCBieSA9IChCLnkwICsgQi55MSkgLyAyO1xuICAgIHBhcnRzLnB1c2goYm94QXQoLWJjLCBieSwgMCwgQi50aGljaywgYmgsIEIub3V0ZXIgKiAyKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgYmMsIGJpICogMiwgYmgsIEIudGhpY2spKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGJ5LCAtYmMsIGJpICogMiwgYmgsIEIudGhpY2spKTtcbiAgICAvLyBUaGUgK1ggcnVuIGlzIGJyb2tlbiBieSB0aGUgc3RhaXIgd2VsbCwgc28gaXQgaXMgdHdvIHNlZ21lbnRzIGZsYW5raW5nIHRoZSBub3RjaC5cbiAgICBjb25zdCBzZWdMZW4gPSBCLm91dGVyIC0gTi5oYWxmWjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KGJjLCBieSwgKE4uaGFsZlogKyBCLm91dGVyKSAvIDIsIEIudGhpY2ssIGJoLCBzZWdMZW4pKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KGJjLCBieSwgLShOLmhhbGZaICsgQi5vdXRlcikgLyAyLCBCLnRoaWNrLCBiaCwgc2VnTGVuKSk7XG5cbiAgICAvLyBUZW4gdHJlYWRzLiBFYWNoIG9jY3VwaWVzIG9ubHkgaXRzIE9XTiBnb2luZyByYXRoZXIgdGhhbiBydW5uaW5nIGJhY2sgdG8gdGhlIG91dGVyIGVkZ2U6XG4gICAgLy8gc3RhY2tlZCB3ZWRnZXMgYWxsIHJlYWNoaW5nIHg9NC41MCB3b3VsZCBwdXQgdGVuIG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICAvLyBDdXQgdGhpcyB3YXksIG5laWdoYm91cnMgbWVldCBhcyBvcHBvc2VkIGZhY2VzLCB3aGljaCBpcyBob3cgc29saWRzIGFyZSBtZWFudCB0byBtZWV0LlxuICAgIGNvbnN0IHJ1biA9IChTVC54MSAtIFNULngwKSAvIFNULnN0ZXBzLCByaXNlID0gU1QudG9wIC8gU1Quc3RlcHM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTVC5zdGVwczsgaSsrKSB7XG4gICAgICBjb25zdCB4MSA9IFNULngxIC0gaSAqIHJ1biwgaCA9IChpICsgMSkgKiByaXNlO1xuICAgICAgcGFydHMucHVzaChib3hBdCh4MSAtIHJ1biAvIDIsIGggLyAyLCAwLCBydW4sIGgsIFNULnRyZWFkSGFsZlogKiAyKSk7XG4gICAgfVxuICAgIC8vIFJha2luZyBjaGVla3MsIGFzIGEgdHJpYW5nbGUgZXh0cnVkZWQgYWxvbmcgK1ogLS0gdGhlIG9uZSBwcm9maWxlIG9uIHRoaXMgcHJvcCB0aGF0XG4gICAgLy8gZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZS5cbiAgICBjb25zdCBjaGVlayA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgIGNoZWVrLm1vdmVUbyhTVC54MSwgMCk7IGNoZWVrLmxpbmVUbyhTVC54MCwgMCk7IGNoZWVrLmxpbmVUbyhTVC54MCwgU1QudG9wKTsgY2hlZWsuY2xvc2VQYXRoKCk7XG4gICAgcGFydHMucHVzaChleHRydWRlQWxvbmdaKGNoZWVrLCBTVC5jaGVla1swXSwgU1QuY2hlZWtbMV0pKTtcbiAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVBbG9uZ1ooY2hlZWssIC1TVC5jaGVla1sxXSwgLVNULmNoZWVrWzBdKSk7XG5cbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIC8vIEdyb3VuZCBkaXJ0IGFuZCBsaWNoZW4gb24gdGhlIGxvd2VyIHRlcnJhY2UsIGRlbGl2ZXJlZCBhcyBhIHBlci12ZXJ0ZXggdGludCByYXRoZXIgdGhhbiBhXG4gICAgLy8gc2Vjb25kIG1hdGVyaWFsOiB0aGUgcGxhdGUgbWVhc3VyZXMgdGhlIGJvdHRvbSBwbGludGggZGlzdGluY3RseSBkYXJrZXIgYW5kIGdyZWVuZXIgdGhhbiB0aGVcbiAgICAvLyB1cHBlciBwbGF0Zm9ybSwgYW5kIGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBkcmF3IGNhbGwgdG8gc2F5IHNvLlxuICAgIHRpbnRCeUhlaWdodChnZW8sIDAsIDIuNDUsIFswLjgyLCAwLjgzLCAwLjgwXSk7XG4gICAgYm94VXYoZ2VvLCBXLnN0b25lLnRpbGUpO1xuICAgIGFkZCgndGVycmFjZScsICdUZXJyYWNlLCBiYWx1c3RyYWRlIGFuZCBzdGFpcicsIGdlbywgJ3N0b25lJyk7XG4gICAgY29sbGlkZXJzWyd0ZXJyYWNlJ10gPSB7XG4gICAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgOS4wLCAwXSwgaGFsZkV4dGVudHM6IFs0LjUsIDkuMCwgNC41XSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZTsgYSBsZXZlbCAnXG4gICAgICAgICAgICsgJ2J1aWxkZXIgY29sbGlkZXMgd2l0aCB0aGUgdG93ZXIsIG5vdCB3aXRoIGl0cyBzdGFpciB0cmVhZHMuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0b3dlciBib2R5XG4gICAqIEEgcmVkZW50ZWQgc3F1YXJlLCBleHRydWRlZCBhcyBPTkUgY2xvc2VkIHBsYW4uIFRoZSByZWRlbnRzIGFyZSB3aGF0IGEgcHJhbmcgaGFzIGluc3RlYWQgb2ZcbiAgICogY29ybmVycywgYW5kIHRoZXkgYXJlIHRoZSByZWFzb24gYSBjcm9zc2VkLWJveCBjb25zdHJ1Y3Rpb24gaXMgd3JvbmcgaGVyZSBhcyB3ZWxsIGFzXG4gICAqIHotZmlnaHRpbmc6IHRoZSBwbGFuIGlzIGEgdHdlbnR5LXBvaW50IHBvbHlnb24sIG5vdCB0d28gcmVjdGFuZ2xlcy4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRvd2VyO1xuICAgIGNvbnN0IGJvZHkgPSBleHRydWRlU2xhYihyZWRlbnRlZFNoYXBlKFQuYSwgVC5yKSwgVC55MCwgVC55MSk7XG4gICAgYm94VXYoYm9keSwgVy5wb3JjZWxhaW4udGlsZSk7XG4gICAgYWRkKCd0b3dlcicsICdUb3dlciBib2R5JywgYm9keSwgJ3BvcmNlbGFpbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwaWxhc3RlciBzdHJpcHNcbiAgICogRWlnaHQgcmVkIHN0cmlwcyBzdGFuZGluZyBpbiB0aGUgcmUtZW50cmFudCBmYWNlcyBvZiB0aGUgZm91ciByZWRlbnRlZCBjb3JuZXJzLCBhcyBPTkVcbiAgICogSW5zdGFuY2VkTWVzaCBvZiBmb3VyIHJvdGF0aW9ucy4gVGhlIHVuaXQgZ2VvbWV0cnkgaG9sZHMgQk9USCBzdHJpcHMgb2YgYSBzaW5nbGUgY29ybmVyIGFuZCBpc1xuICAgKiBwbGFjZWQgYXQgcmFkaXVzIHplcm8sIHNvIHF1YWQoKSBzdXBwbGllcyB0aGUgZm91ciA5MC1kZWdyZWUgcm90YXRpb25zIGFuZCB0aGUgY29ybmVyIG9mZnNldHNcbiAgICogYXJlIGJha2VkIGludG8gdGhlIGdlb21ldHJ5IC0tIHdoaWNoIGlzIGhvdyBhbiBlaWdodC1wYXJ0IHN5c3RlbSBjb3N0cyBvbmUgZ2VvbWV0cnkuICovXG4gIHtcbiAgICBjb25zdCBUID0gRy50b3dlciwgUCA9IEcucGlsYXN0ZXI7XG4gICAgY29uc3QgcHkgPSAoUC55MCArIFAueTEpIC8gMiwgcGggPSBQLnkxIC0gUC55MDtcbiAgICAvLyBUaGUgcmUtZW50cmFudCBmYWNlcyBvZiB0aGUgK1grWiBjb3JuZXI6IG9uZSBhdCB4ID0gYS1yIGxvb2tpbmcgK1gsIG9uZSBhdCB6ID0gYS1yIGxvb2tpbmcgK1ouXG4gICAgY29uc3QgeGYgPSBULmEgLSBULnIsIHpmID0gVC5hIC0gVC5yLCBuZWFyID0gVC5hIC0gMiAqIFQucjtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KHhmICsgUC5wcm91ZCAvIDIsIHB5LCAobmVhciArIHpmKSAvIDIsIFAucHJvdWQsIHBoLCBQLncpLFxuICAgICAgYm94QXQoKG5lYXIgKyB4ZikgLyAyLCBweSwgemYgKyBQLnByb3VkIC8gMiwgUC53LCBwaCwgUC5wcm91ZCksXG4gICAgXSk7XG4gICAgYm94VXYodW5pdCwgVy5yZWQudGlsZSk7XG4gICAgYWRkSW5zdCgncGlsYXN0ZXJzJywgJ1JlZGVudCBwaWxhc3RlciBzdHJpcHMnLCB1bml0LCAncmVkJywgcXVhZCgwLCAwKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZhbHNlIGRvb3JzIGFuZCBwZWRpbWVudHNcbiAgICogRm91ciBmYWNlcywgZWFjaCBjYXJyeWluZyBhIGJsaW5kIGFyY2hlZCBkb29yIGxvdyBkb3duIGFuZCBhIHJhaXNlZCBhcmNoZWQgcGVkaW1lbnQgZmllbGRcbiAgICogYWJvdmUgaXQuIEJvdGggYXJlIHRoZSBzYW1lIHBvcmNlbGFpbiBhbmQgYm90aCByZXBlYXQgZm91ci1mb2xkLCBzbyB0aGV5IHJpZGUgT05FIGluc3RhbmNlZFxuICAgKiB1bml0OiB0d28gZmVhdHVyZXMsIGZvdXIgZmFjZXMsIG9uZSBnZW9tZXRyeSBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICpcbiAgICogVGhlIGZhbHNlIGRvb3Igb24gdGhyZWUgb3IgZm91ciBmYWNlcyBpcyBhIGdlbnVpbmUgS2htZXItZGVyaXZlZCBmZWF0dXJlLCBub3QgYW4gb21pc3Npb24gLS1cbiAgICogYSBwcmFuZyBoYXMgb25lIHJlYWwgY2VsbCBhbmQgdGhlIHJlc3QgYXJlIGJsaW5kLiAqL1xuICB7XG4gICAgY29uc3QgVCA9IEcudG93ZXIsIEQgPSBHLmRvb3IsIFBEID0gRy5wZWRpbWVudDtcbiAgICBjb25zdCBmYWNlID0gVC5hO1xuICAgIGNvbnN0IGRvb3JTaGFwZSA9IGFyY2hlZFBsYXRlKEQudywgRC5oLCBELncgLyAyLCBELmggLSBELncgLyAyLFxuICAgICAgeyByOiBELncgLyAyIC0gMC4yMiwgc3ByaW5nOiBELmggLSBELncgLyAyLCBzaWxsOiBELnNpbGwgfSk7XG4gICAgY29uc3QgZG9vckZyYW1lID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShkb29yU2hhcGUsXG4gICAgICB7IGRlcHRoOiBELmRlcHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICBkb29yRnJhbWUudHJhbnNsYXRlKDAsIEQueSwgZmFjZSAtIEQuZGVwdGggKyAwLjE2KTtcbiAgICBkb29yRnJhbWUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcblxuICAgIGNvbnN0IHBlZFNoYXBlID0gYXJjaGVkUGxhdGUoUEQudywgUEQuaCwgUEQudyAvIDIsIFBELmggLSBQRC53IC8gMik7XG4gICAgY29uc3QgcGVkID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShwZWRTaGFwZSxcbiAgICAgIHsgZGVwdGg6IFBELmRlcHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxMCB9KTtcbiAgICBwZWQudHJhbnNsYXRlKDAsIFBELnksIGZhY2UgLSBQRC5kZXB0aCArIDAuMDkpO1xuICAgIHBlZC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuXG4gICAgY29uc3QgZG9vclVuaXQgPSBtZXJnZUdlb3MoW2Rvb3JGcmFtZSwgcGVkXSk7XG4gICAgYm94VXYoZG9vclVuaXQsIFcucG9yY2VsYWluLnRpbGUpO1xuICAgIGFkZEluc3QoJ2Rvb3ItZnJhbWVzJywgJ0ZhbHNlIGRvb3JzIGFuZCBwZWRpbWVudHMnLCBkb29yVW5pdCwgJ3BvcmNlbGFpbicsIHF1YWQoMCwgMCkpO1xuXG4gICAgLy8gVGhlIGJsaW5kIGRvb3IncyBiYWNrIHBhbmVsOiBhIHJlYWwgY29uY2F2aXR5IDAuMTYgbSBiZWhpbmQgdGhlIGZyYW1lJ3MgZnJvbnQgcGxhbmUsIGFuZFxuICAgIC8vIDAuMDMgbSBQUk9VRCBvZiB0aGUgd2FsbCBpdCBzaXRzIGFnYWluc3QgcmF0aGVyIHRoYW4gZmx1c2ggd2l0aCBpdC5cbiAgICBjb25zdCBwYW5lbCA9IGJveEF0KDAsIEQueSArIEQuaCAvIDIgLSAwLjEwLCBmYWNlICsgMC4wMTUsIEQudyAtIDAuNDgsIEQuaCAtIDAuNDYsIDAuMDUpO1xuICAgIGJveFV2KHBhbmVsLCBXLnBvcmNlbGFpbi50aWxlKTtcbiAgICBhZGRJbnN0KCdkb29yLXBhbmVscycsICdCbGluZCBkb29yIHBhbmVscycsIHBhbmVsLCAnc2hhZG93JywgcXVhZCgwLCAwKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvcm4tY29iIHRpZXJzXG4gICAqIFNldmVuIHJlY2VkaW5nIHJlZGVudGVkIHNsYWJzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBUaGUgaGFsZi13aWR0aCBmb2xsb3dzIGEgY29zaW5lXG4gICAqIHJhaXNlZCB0byBhIHBvd2VyIGp1c3QgYWJvdmUgb25lLCB3aGljaCBpcyB3aGF0IG1ha2VzIHRoZSB0YXBlciBDT05WRVggLS0gdGhlIGNvcm4tY29iIGJ1bGdlXG4gICAqIHRoZSByZWdpc3RyeSBub3RlcyBuYW1lIGFzIHRoaXMgcHJvcCdzIGlkZW50aXR5LiBBIGxpbmVhciBpbnRlcnBvbGF0aW9uIGdpdmVzIGEgc3RyYWlnaHQgY29uZSxcbiAgICogYW5kIGEgc3RyYWlnaHQgY29uZSBpcyBhIGRpZmZlcmVudCBidWlsZGluZy4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRpZXJzO1xuICAgIGNvbnN0IHN0ZXAgPSAoVC55MSAtIFQueTApIC8gVC5jb3VudDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgVC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIFQuY291bnQ7XG4gICAgICBjb25zdCBhID0gVC5hMSArIChULmEwIC0gVC5hMSkgKiBNYXRoLnBvdyhNYXRoLmNvcyh0ICogTWF0aC5QSSAvIDIpLCBULmN1cnZlKTtcbiAgICAgIGNvbnN0IHkwID0gVC55MCArIGkgKiBzdGVwO1xuICAgICAgcGFydHMucHVzaChleHRydWRlU2xhYihyZWRlbnRlZFNoYXBlKGEsIGEgKiBULnJlZGVudCksIHkwLCBULnkwICsgKGkgKyAxKSAqIHN0ZXApKTtcbiAgICAgIC8vIEEgcHJvamVjdGluZyBsaXAgYXQgdGhlIGZvb3Qgb2YgZWFjaCB0aWVyIC0tIHRoZSByaW5nIGJhbmQgdGhlIHBsYXRlIHNob3dzIGF0IGV2ZXJ5IHN0ZXAuXG4gICAgICAvLyBJdCBzdGFydHMgMC4wMiBtIEFCT1ZFIHRoZSB0aWVyJ3Mgb3duIGJhc2UgcmF0aGVyIHRoYW4gbGV2ZWwgd2l0aCBpdDogbGV2ZWwsIHRoZSBsaXAnc1xuICAgICAgLy8gdW5kZXJzaWRlIGFuZCB0aGUgdGllcidzIHVuZGVyc2lkZSB3b3VsZCBiZSB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5LlxuICAgICAgY29uc3QgbGEgPSBhICsgVC5saXA7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUobGEsIGxhICogVC5yZWRlbnQpLCB5MCArIDAuMDIsIHkwICsgMC4xNikpO1xuICAgIH1cbiAgICBjb25zdCBzdGFjayA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgYm94VXYoc3RhY2ssIFcucG9yY2VsYWluLnRpbGUpO1xuICAgIGFkZCgndGllcnMnLCAnQ29ybi1jb2IgdGllcnMnLCBzdGFjaywgJ3BvcmNlbGFpbicpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXBcbiAgICogVGhlIHJvdW5kZWQgaGVhZCBhYm92ZSB0aGUgdG9wIHRpZXIsIGFzIGEgY2xvc2VkIGxhdGhlLiBJdHMgYmFzZSBpcyBzdW5rIHRvIDE1LjQwLCBpbnNpZGUgdGhlXG4gICAqIHRvcCB0aWVyLCByYXRoZXIgdGhhbiByZXN0aW5nIG9uIGl0cyAxNS42MCB0b3AgZmFjZTogTGF0aGVHZW9tZXRyeSBpcyBvcGVuIGF0IHRoZSBib3R0b20gYW5kXG4gICAqIGFuIG9wZW4gcmltIHNpdHRpbmcgZXhhY3RseSBvbiBhIHN1cmZhY2UgaXMgYSBzZWFtIHRoZSB0dXJudGFibGUgZ2F0ZSBjYW4gcmVhZCB0aHJvdWdoLiAqL1xuICB7XG4gICAgY29uc3QgQyA9IEcuY2FwO1xuICAgIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IDEwOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gMTA7XG4gICAgICBwdHMucHVzaChbQy5yICogTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKSwgQy55MCArIChDLnkxIC0gQy55MCkgKiB0XSk7XG4gICAgfVxuICAgIHB0cy51bnNoaWZ0KFtDLnIsIEMueTAgLSAwLjBdKTtcbiAgICBjb25zdCBkb21lID0gbGF0aGUocHRzLCBDLnNlZyk7XG4gICAgbGF0aGVVdihkb21lLCBXLnBvcmNlbGFpbi50aWxlLCBDLnIpO1xuICAgIGFkZCgnY2FwJywgJ0RvbWVkIGNhcCcsIGRvbWUsICdwb3JjZWxhaW4nKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdHJpZGVudCBmaW5pYWxcbiAgICogVGhlIHRyaWRlbnQgaXMgd2hhdCBtYXJrcyB0aGlzIGFzIGEgVGhhaSBwcmFuZyByYXRoZXIgdGhhbiBhbnkgb3RoZXIgdG93ZXIsIHNvIGl0IGlzIGF1dGhvcmVkXG4gICAqIGFzIHRocmVlIHJlYWwgcHJvbmdzIG9uIGEgc2hhZnQgYW5kIG5vdCBhcyBhIHNwaWtlLiBNZXJnZWQgYm94ZXMgYW5kIG9uZSBsYXRoZSBjb2xsYXIsIGluIHRoZVxuICAgKiBvbmx5IGdvbGQgbWF0ZXJpYWwgb24gdGhlIHByb3AuICovXG4gIHtcbiAgICBjb25zdCBGID0gRy5maW5pYWw7XG4gICAgY29uc3Qgc2hhZnQgPSBGLnkwO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgY3lsQXQoMCwgc2hhZnQgKyAwLjEwLCAwLCAwLjExLCAwLjE0LCAwLjIwLCAxMiksICAgLy8gY29sbGFyXG4gICAgICBjeWxBdCgwLCBzaGFmdCArIDAuMzQsIDAsIDAuMDUsIDAuMDcsIDAuMzAsIDEyKSwgICAvLyBzdGVtXG4gICAgICBib3hBdCgwLCBzaGFmdCArIDAuNTAsIDAsIDAuNDAsIDAuMDcsIDAuMDcpLCAgICAgICAvLyBjcm9zcyBiYXIgdGhlIG91dGVyIHByb25ncyBzcHJpbmcgZnJvbVxuICAgICAgY3lsQXQoMCwgc2hhZnQgKyAwLjkwLCAwLCAwLjAwOCwgMC4wNTUsIDAuODIsIDEwKSwgLy8gdGFwZXJlZCBjZW50cmUgc3Bpa2VcbiAgICBdO1xuICAgIC8vIFRoZSB0d28gb3V0ZXIgcHJvbmdzIENVUkwuIEluIHRoZSBwbGF0ZSB0aGV5IHNwcmluZyBvdXR3YXJkIGZyb20gdGhlIGJhciBhbmQgaG9vayBiYWNrIGluIGF0XG4gICAgLy8gdGhlIHRpcCwgYW5kIHRoYXQgY3VybCBpcyBtb3N0IG9mIHdoYXQgaWRlbnRpZmllcyB0aGUgbWFyayBhcyBhIHRyaWRlbnQgYXQgYWxsIC0tIHR3b1xuICAgIC8vIHN0cmFpZ2h0IHN0aWNrcyBlaXRoZXIgc2lkZSBvZiBhIHNwaWtlIHJlYWQgYXMgYSBjYW5kZWxhYnJ1bS4gRml2ZSBzaG9ydCBzZWdtZW50cyBlYWNoLFxuICAgIC8vIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBpcyB0aGUgY2hlYXBlc3QgdGhpbmcgdGhhdCBrZWVwcyB0aGUgaG9vay5cbiAgICBmb3IgKGNvbnN0IHNpZ24gb2YgWy0xLCAxXSkge1xuICAgICAgY29uc3QgbiA9IDU7XG4gICAgICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtzaWduICogKDAuMTcgKyAwLjE1ICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjcyKSksIHNoYWZ0ICsgMC41MiArIDAuNjAgKiB1XTtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguaHlwb3QoZHgsIGR5KTtcbiAgICAgICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgwLjA1LCBsZW4gKyAwLjAzLCAwLjA1KTtcbiAgICAgICAgLy8gUm90YXRpb24gYWJvdXQgWiBieSB0aGV0YSBtYXBzIHRoZSBib3gncyBsb2NhbCArWSB0byAoLXNpbiwgY29zKSwgc28gdGhldGEgPSBhdGFuMigtZHgsIGR5KVxuICAgICAgICAvLyBpcyB3aGF0IGFpbXMgdGhlIHNlZ21lbnQgYWxvbmcgdGhlIHNhbXBsZWQgdGFuZ2VudC5cbiAgICAgICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgICAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgICAgICBwYXJ0cy5wdXNoKGcpO1xuICAgICAgfVxuICAgIH1cbiAgICBhZGQoJ2ZpbmlhbCcsICdHaWx0IHRyaWRlbnQgZmluaWFsJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2dvbGQnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2VhdGhlcmluZ1xuICAgKiBUaGUgcGxhdGUgaXMgbm90IHRoZSBmbGF0IGNyZWFtIHRoZSBmaXJzdCBidWlsZCBzaGlwcGVkLiBUaGUgdGVycmFjZSBpcyBjb3Vyc2VkIGxpbWVzdG9uZVxuICAgKiB1bmRlciBhIG5lYXItY29udGludW91cyBvY2hyZSBsaWNoZW4gd2l0aCBncmV5IGdyaW1lIHdhc2hpbmcgZG93biBldmVyeSBmYWNlOyB0aGUgdG93ZXIgaXNcbiAgICogd2hpdGUtd2FzaGVkIHN0dWNjbyBzdHJlYWtlZCBncmV5IGJlbG93IGV2ZXJ5IGxpcCBhbmQgRU5DUlVTVEVEIHdpdGggcG9yY2VsYWluIGNoaXBzIC0tIHdoaXRlLFxuICAgKiBibHVlLCBncmVlbiwgeWVsbG93LCBvY2hyZSAtLSB3aGljaCBpcyB0aGUgc3VyZmFjZSB0aGUgcmVnaXN0cnkgbmFtZXMgYXMgdGhpcyBwcm9wJ3MgaWRlbnRpdHk7XG4gICAqIGFuZCB0aGUgcmVkIHBpbGFzdGVyIHBhaW50IGlzIHdvcm4gdGhyb3VnaCB0byBwYWxlIHN0dWNjbyBpbiBwYXRjaGVzLlxuICAgKlxuICAgKiBBbGwgb2YgaXQgaXMgZGVsaXZlcmVkIGFzIHRocmVlIENhbnZhcyAyRCB0aWxlcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHRoZVxuICAgKiBjaGVkaSdzIGFuZCB0aGUgS2htZXIgc2FuY3R1YXJ5J3Mgcm91dGU6IHRoZSBzY3VscHQgbWF0ZXJpYWxzIHN0YXkgZGVjbGFyZWQgdGV4dHVyZWxlc3MgKG5vXG4gICAqIGZpdmUtY2FudmFzIHByb2NlZHVyYWwgc2V0LCBubyBwZXItcGl4ZWwgSmF2YVNjcmlwdCwgYW5kIHRoZSBtZWFzdXJlZCBhbGJlZG8gaXMgTk9UIHRocm93blxuICAgKiBhd2F5KSwgYW5kIGVhY2ggdGlsZSBpcyBhIGZldyBodW5kcmVkIFBhdGgyRCBmaWxscyBhdCA1MTIgcHggLS0gc2luZ2xlLWRpZ2l0IG1pbGxpc2Vjb25kcy5cbiAgICogRWFjaCBpcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ciwgYm91bmQgYXMgbWFwIGFuZCBidW1wTWFwLCBzbyBhIGpvaW50IHJlYWRzIGFzIGFcbiAgICogZ3Jvb3ZlIGFuZCBhIGNoaXAgYXMgYSByYWlzZWQgcGllY2UgcmF0aGVyIHRoYW4gYXMgcGFpbnQuXG4gICAqXG4gICAqIFR3byBvZiB0aGUgdGhyZWUgc3VyZmFjZXMgY2FycnkgbWFya3MgQlJJR0hURVIgdGhhbiB0aGVpciBjbGVhbiBncm91bmQgKHRoZSBsaWNoZW4gaW4gcmVkIGFuZFxuICAgKiBncmVlbiwgdGhlIHdvcm4tdGhyb3VnaCBzdHVjY28gaW4gZXZlcnkgY2hhbm5lbCksIGFuZCBhIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuLiBUaG9zZSB0d29cbiAgICogbWF0ZXJpYWxzIHRoZXJlZm9yZSBob2xkIHRoZSBFTlZFTE9QRSAtLSBzdG9uZSBkZWNsYXJlcyBpdCBpbiBjZmcsIHJlZCBpcyByZS1iYXNlZCBoZXJlIG9uXG4gICAqIExJTkVBUiBjb21wb25lbnRzIHdpdGggdGhlIHJhdGlvIHJhaXNlZCB0byAyLjIgYmVjYXVzZSB0aGUgdGlsZSBpcyBzUkdCIC0tIGFuZCB0aGUgY2xlYW5cbiAgICogc3VyZmFjZSBpcyBwYWludGVkIGludG8gdGhlIHRpbGUgd2l0aCBvbmUgbXVsdGlwbHkgZmlsbDsgZXZlcnl0aGluZyBhZnRlciB0aGF0IGlzIGEgcmF0aW8gb2ZcbiAgICogdGhlIGVudmVsb3BlLiBOb3RoaW5nIGJ1dCB0aGUgcGl0cyBhbmQgdGhlIGNoaXBzIGhhcyBhIGhhcmQgZWRnZTogaGFyZC1lZGdlZCBibG90Y2hlcyBvbiBzdG9uZVxuICAgKiByZWFkIGFzIGNhbW91ZmxhZ2UgcGFpbnQsIHdoaWNoIGlzIHRoZSBub3RlIHRoYXQgc2VudCB0aGUgc2FuY3R1YXJ5IGJhY2suXG4gICAqXG4gICAqIFVuZGVyIE5vZGUgLS0gYmFuZHMubWpzIGFuZCBjaGVjay1jb3BsYW5hciBydW4gdGhpcyBmYWN0b3J5IHdpdGhvdXQgYSBET00gLS0gdGhlcmUgaXMgbm9cbiAgICogY2FudmFzLCBubyByZS1iYXNpbmcsIGFuZCBldmVyeSBtYXRlcmlhbCBrZWVwcyBpdHMgZmxhdCBkZWNsYXJlZCBjb2xvdXIuICovXG4gIHtcbiAgICBjb25zdCBoYXNEb20gPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAoZG9jdW1lbnQgYXMgYW55KS5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihXLnNpemUsIG9wdGlvbnMudGV4dHVyZVNpemUgPz8gVy5zaXplKTtcbiAgICBjb25zdCBjc3MgPSAodDogbnVtYmVyW10sIGE6IG51bWJlcikgPT5cbiAgICAgICdyZ2JhKCcgKyBNYXRoLnJvdW5kKE1hdGgubWluKDEsIHRbMF0pICogMjU1KSArICcsJyArIE1hdGgucm91bmQoTWF0aC5taW4oMSwgdFsxXSkgKiAyNTUpICsgJywnXG4gICAgICArIE1hdGgucm91bmQoTWF0aC5taW4oMSwgdFsyXSkgKiAyNTUpICsgJywnICsgYSArICcpJztcbiAgICBjb25zdCBybmcgPSAoc2VlZDogbnVtYmVyKSA9PiAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuICAgIHR5cGUgUGFpbnRlciA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCkgPT4gdm9pZDtcblxuICAgIGZ1bmN0aW9uIG1ha2VUaWxlKHNlZWQ6IG51bWJlciwgZHJhdzogUGFpbnRlcik6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gICAgICBpZiAoIWhhc0RvbSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY3Yud2lkdGggPSBjdi5oZWlnaHQgPSBzaXplO1xuICAgICAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IFMgPSBzaXplO1xuICAgICAgLy8gRXZlcnkgbWFyayBpcyBidWlsdCBvbmNlIGFuZCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cywgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MgdW5kZXJcbiAgICAgIC8vIFJlcGVhdFdyYXBwaW5nOyB0aGUgc2hhcGVzIGFyZSBwcmVjb21wdXRlZCBiZWZvcmUgdGhlIG5pbmUgZmlsbHMgb3IgdGhlIGNvcGllcyBkaWZmZXIuXG4gICAgICBjb25zdCB3cmFwcGVkID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG94ID0gLTE7IG94IDw9IDE7IG94KyspIGZvciAobGV0IG95ID0gLTE7IG95IDw9IDE7IG95KyspIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKG94ICogUywgb3kgKiBTKTsgZm4oKTsgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRyYXcoY3R4LCBybmcoc2VlZCksIFMsIHdyYXBwZWQpO1xuICAgICAgcmV0dXJuIGN2O1xuICAgIH1cblxuICAgIC8qKiBBc2hsYXIgY291cnNpbmc6IHRoZSB0aWxlIGlzIGFuIGV4YWN0IHdob2xlIG51bWJlciBvZiBjb3Vyc2VzIGFuZCBibG9ja3MsIGxhaWQgaW4gcnVubmluZ1xuICAgICAqICBib25kLCBkcmF3biBhcyBqaXR0ZXJlZCBxdWFkcmlsYXRlcmFscyBvdmVyIGEgam9pbnQtY29sb3VyZWQgZ3JvdW5kIHNvIHRoZSBqb2ludHMgY29tZSBvdXRcbiAgICAgKiAgaXJyZWd1bGFyIGZvciBmcmVlLiBFYWNoIGJsb2NrIGNhcnJpZXMgaXRzIG93biB0b25lIGZyb20gdGhlIG1lYXN1cmVkIHNwcmVhZC4gKi9cbiAgICBjb25zdCBjb3Vyc2luZyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBQOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLnJvdW5kKFAudGlsZSAvIFAuY291cnNlKSwgY29scyA9IE1hdGgucm91bmQoUC50aWxlIC8gUC5ibG9jayk7XG4gICAgICBjb25zdCBjaCA9IFMgLyByb3dzLCBidyA9IFMgLyBjb2xzLCBqID0gUC5qb2ludCAvIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuam9pbnRUb25lLCAxKTsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMpO1xuICAgICAgY29uc3QgYmxvY2tzOiB7IHA6IFBhdGgyRCwgdG9uZTogbnVtYmVyW10gfVtdID0gW107XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICBjb25zdCBvZmYgPSAocm93ICUgMikgKiBidyAvIDI7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgY29uc3QgeDAgPSBjb2wgKiBidyArIG9mZiArIGosIHgxID0geDAgKyBidyAtIDIgKiBqLCB5MCA9IHJvdyAqIGNoICsgaiwgeTEgPSB5MCArIGNoIC0gMiAqIGo7XG4gICAgICAgICAgY29uc3QgcSA9ICgpID0+IChyKCkgLSAwLjUpICogUC5qb2ludCAqIDAuOTtcbiAgICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAgIHAubW92ZVRvKHgwICsgcSgpLCB5MCArIHEoKSk7IHAubGluZVRvKHgxICsgcSgpLCB5MCArIHEoKSk7XG4gICAgICAgICAgcC5saW5lVG8oeDEgKyBxKCksIHkxICsgcSgpKTsgcC5saW5lVG8oeDAgKyBxKCksIHkxICsgcSgpKTsgcC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICBjb25zdCB0ID0gUC5ibG9ja0xvICsgKFAuYmxvY2tIaSAtIFAuYmxvY2tMbykgKiByKCk7XG4gICAgICAgICAgYmxvY2tzLnB1c2goeyBwLCB0b25lOiBbdCwgdCAqICgwLjk3ICsgMC4wMyAqIHIoKSksIHQgKiAoMC45NSArIDAuMDUgKiByKCkpXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGZvciAoY29uc3QgYiBvZiBibG9ja3MpIHsgY3R4LmZpbGxTdHlsZSA9IGNzcyhiLnRvbmUsIDEpOyBjdHguZmlsbChiLnApOyB9IH0pO1xuICAgIH07XG4gICAgLyoqIFNvZnQgbG93LWZyZXF1ZW5jeSBtb3R0bGU6IGEgZmV3IGxhcmdlIGRpc2NzIGRyYXduIHRocm91Z2ggYSBjYW52YXMgYmx1ciwgc28gdGhlIHRvbmVcbiAgICAgKiAgZHJpZnRzIGNsb3VkLWxpa2Ugb3ZlciBoYWxmIGEgbWV0cmUgaW5zdGVhZCBvZiBzdG9wcGluZyBhdCBhIGhhcmQgZWRnZS4gKi9cbiAgICBjb25zdCBjbG91ZCA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICB0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgcmFkOiBudW1iZXIsIGFscGhhOiBudW1iZXIsIGJsdXJQeDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBtYXJrczogbnVtYmVyW11bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSBtYXJrcy5wdXNoKFtyKCkgKiBTLCByKCkgKiBTLCByYWQgKiBTICogKDAuNSArIHIoKSksIGFscGhhICogKDAuNSArIDAuNSAqIHIoKSldKTtcbiAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICBjdHguZmlsdGVyID0gJ2JsdXIoJyArIGJsdXJQeCArICdweCknO1xuICAgICAgICBmb3IgKGNvbnN0IFt4LCB5LCByciwgYV0gb2YgbWFya3MpIHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhKTsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHJyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgY3R4LmZpbHRlciA9ICdub25lJztcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIFdlYXRoZXJpbmcgd2FzaGVzOiB2ZXJ0aWNhbCBncmFkaWVudCBzdHJlYWtzIGZhZGluZyBET1dOIHRoZSBmYWNlLCBibHVycmVkIHNvIHRoZXkgcmVhZCBhc1xuICAgICAqICB3YXRlci1ib3JuZSBzdGFpbmluZyByYXRoZXIgdGhhbiBhcyBzdHJpcGVzLiB2IGlzIHdvcmxkIGhlaWdodCBvbiBldmVyeSBtYXBwaW5nIGhlcmUgYW5kXG4gICAgICogIHRoZSBjYW52YXMgaXMgZmxpcHBlZCBpbnRvIFVWIHNwYWNlLCBzbyBkb3duIHRoZSBjYW52YXMgaXMgZG93biB0aGUgcHJvcC4gKi9cbiAgICBjb25zdCB3YXNoZXMgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHI6ICgpID0+IG51bWJlciwgUzogbnVtYmVyLCB3cmFwcGVkOiAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyLCBibHVyUHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWFya3M6IG51bWJlcltdW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgbWFya3MucHVzaChbcigpICogUywgcigpICogUywgUyAqICgwLjE1ICsgMC40NSAqIHIoKSksIDE4ICsgNjAgKiByKCksIGFscGhhICogKDAuNSArIDAuNSAqIHIoKSldKTtcbiAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICBjdHguZmlsdGVyID0gJ2JsdXIoJyArIGJsdXJQeCArICdweCknO1xuICAgICAgICBmb3IgKGNvbnN0IFt4LCB5MCwgbGVuLCB3LCBhXSBvZiBtYXJrcykge1xuICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBjc3ModG9uZSwgYSkpOyBnLmFkZENvbG9yU3RvcCgwLjQsIGNzcyh0b25lLCBhICogMC42KSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyh0b25lLCAwKSk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCh4IC0gdyAvIDIsIHkwLCB3LCBsZW4pO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBMaWNoZW4gYXMgQ1JVU1Q6IGNsdXN0ZXJzIG9mIHRpbnkgc3BlY2tzLCB0aGUgd2F5IGl0IGdyb3dzLCBub3QgYSBwYWludGVkIHBhdGNoLiBBdCA2IG1tXG4gICAgICogIGEgcGl4ZWwgdGhlIHNwZWNrcyBhcmUgMS0yIGNtIGFuZCBibGVuZCB0byBhbiBvY2hyZSB0aW5nZSBhdCBwcm9wIGRpc3RhbmNlLiAqL1xuICAgIGNvbnN0IGNydXN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjbHVzdGVyczogbnVtYmVyLCBwZXJDbHVzdGVyOiBudW1iZXIsIHJhZDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbHVzdGVyczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcigpICogUywgY3kgPSByKCkgKiBTLCBSID0gcmFkICogUyAqICgwLjQgKyByKCkpO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBlckNsdXN0ZXI7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSByKCkgKiBNYXRoLlBJICogMiwgZCA9IFIgKiBNYXRoLnNxcnQocigpKTtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNywgcnIgPSAxICsgMS42ICogcigpO1xuICAgICAgICAgIHAubW92ZVRvKHggKyByciwgeSk7IHAuYXJjKHgsIHksIHJyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdyYXBwZWQoKCkgPT4geyBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGFscGhhKTsgY3R4LmZpbGwocCk7IH0pO1xuICAgIH07XG4gICAgLyoqIFBpdHM6IHNtYWxsIGRhcmsgZWxsaXBzZXMsIHRoZSBwb2NraW5nIG9mIG9sZCBsaW1lc3RvbmUuICovXG4gICAgY29uc3QgcGl0cyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBtYXhQeDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSByKCkgKiBTLCB5ID0gcigpICogUywgcnggPSAxICsgcigpICogbWF4UHgsIHJ5ID0gcnggKiAoMC42ICsgMC42ICogcigpKTtcbiAgICAgICAgcC5tb3ZlVG8oeCArIHJ4LCB5KTsgcC5lbGxpcHNlKHgsIHksIHJ4LCByeSwgcigpICogTWF0aC5QSSwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYWxwaGEpOyBjdHguZmlsbChwKTsgfSk7XG4gICAgfTtcbiAgICAvKiogRmluZSBncmFpbjogYSBzY2F0dGVyIG9mIG5lYXItdHJhbnNwYXJlbnQgc3BlY2tzLCBzbyBhIGZsYXQgYXJlYSBpcyBub3QgZmxhdC4gKi9cbiAgICBjb25zdCBncmFpbiA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICB0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgYWxwaGE6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgcCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgeyBjb25zdCB4ID0gcigpICogUywgeSA9IHIoKSAqIFMsIGQgPSAwLjYgKyByKCkgKiAxLjQ7IHAucmVjdCh4LCB5LCBkLCBkKTsgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYWxwaGEpOyBjdHguZmlsbChwKTsgfSk7XG4gICAgfTtcbiAgICAvKiogUG9yY2VsYWluIGNoaXBzOiBicm9rZW4gcGllY2VzLCBzbyBlYWNoIGlzIGFuIGlycmVndWxhciBoYXJkLWVkZ2VkIHBvbHlnb24gb2YgNC03IHNpZGVzLFxuICAgICAqICBuZXZlciBhIGRpc2MuIFRoZXkgYXJlIHNldCBpbiBsb29zZSByb3NldHRlcyByYXRoZXIgdGhhbiBzY2F0dGVyZWQgZXZlbmx5IC0tIHRoZSBwbGF0ZSdzXG4gICAgICogIGNoaXBzIGNsdXN0ZXIgYXJvdW5kIHRoZSBhcmNoIG1vdGlmcyAtLSBzbyB0d28gdGhpcmRzIHNpdCBpbiBjbHVzdGVycyBhbmQgYSB0aGlyZCBhcmVcbiAgICAgKiAgc3RyYXlzLiBPbmUgUGF0aDJEIHBlciBjb2xvdXIgZmFtaWx5LCBlYWNoIGZpbGxlZCBvbmNlIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzLiAqL1xuICAgIGNvbnN0IGNoaXBzID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIFA6IGFueSkgPT4ge1xuICAgICAgY29uc3QgZmFtczogeyB0b25lOiBudW1iZXJbXSwgdzogbnVtYmVyIH1bXSA9IFAuY2hpcHM7XG4gICAgICBjb25zdCBwYXRocyA9IGZhbXMubWFwKCgpID0+IG5ldyBQYXRoMkQoKSk7XG4gICAgICBjb25zdCBjZW50cmVzOiBudW1iZXJbXVtdID0gW107XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI2OyBpKyspIGNlbnRyZXMucHVzaChbcigpICogUywgcigpICogUywgUyAqICgwLjA0ICsgMC4wOSAqIHIoKSldKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgUC5jaGlwQ291bnQ7IGkrKykge1xuICAgICAgICBsZXQgY3g6IG51bWJlciwgY3k6IG51bWJlcjtcbiAgICAgICAgaWYgKHIoKSA8IDAuNzUpIHtcbiAgICAgICAgICBjb25zdCBjID0gY2VudHJlc1tNYXRoLmZsb29yKHIoKSAqIGNlbnRyZXMubGVuZ3RoKV07XG4gICAgICAgICAgY29uc3QgYSA9IHIoKSAqIE1hdGguUEkgKiAyLCBkID0gY1syXSAqIE1hdGguc3FydChyKCkpO1xuICAgICAgICAgIGN4ID0gY1swXSArIE1hdGguY29zKGEpICogZDsgY3kgPSBjWzFdICsgTWF0aC5zaW4oYSkgKiBkO1xuICAgICAgICB9IGVsc2UgeyBjeCA9IHIoKSAqIFM7IGN5ID0gcigpICogUzsgfVxuICAgICAgICBjb25zdCBSID0gUC5jaGlwUmFkWzBdICsgKFAuY2hpcFJhZFsxXSAtIFAuY2hpcFJhZFswXSkgKiByKCk7XG4gICAgICAgIGNvbnN0IG4gPSA0ICsgTWF0aC5mbG9vcihyKCkgKiA0KSwgcm90ID0gcigpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIGxldCBwaWNrID0gcigpLCBmID0gMDtcbiAgICAgICAgZm9yICg7IGYgPCBmYW1zLmxlbmd0aCAtIDE7IGYrKykgeyBwaWNrIC09IGZhbXNbZl0udzsgaWYgKHBpY2sgPD0gMCkgYnJlYWs7IH1cbiAgICAgICAgY29uc3QgcCA9IHBhdGhzW2ZdO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSByb3QgKyAoayAvIG4pICogTWF0aC5QSSAqIDIgKyAocigpIC0gMC41KSAqIDAuNSwgcnIgPSBSICogKDAuNiArIDAuNCAqIHIoKSk7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiByciwgeSA9IGN5ICsgTWF0aC5zaW4oYSkgKiByciAqICgwLjcgKyAwLjMgKiByKCkpO1xuICAgICAgICAgIGlmIChrID09PSAwKSBwLm1vdmVUbyh4LCB5KTsgZWxzZSBwLmxpbmVUbyh4LCB5KTtcbiAgICAgICAgfVxuICAgICAgICBwLmNsb3NlUGF0aCgpO1xuICAgICAgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGZhbXMuZm9yRWFjaCgoZm0sIGkpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyhmbS50b25lLCAwLjkyKTsgY3R4LmZpbGwocGF0aHNbaV0pOyB9KTsgfSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGJpbmQgPSAobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgY3Y6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCwgYnVtcDogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoIWN2KSByZXR1cm47XG4gICAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gICAgICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICAgIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7ICAgLy8gdGhlIHRpbGUgaG9sZHMgZGlzcGxheS1zcGFjZSByYXRpb3NcbiAgICAgIHRleC5hbmlzb3Ryb3B5ID0gb3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA0O1xuICAgICAgbWF0Lm1hcCA9IHRleDtcbiAgICAgIG1hdC5idW1wTWFwID0gdGV4O1xuICAgICAgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7XG4gICAgICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH07XG5cbiAgICAvLyBMaW1lc3RvbmUgdGVycmFjZTogY291cnNpbmcgYW5kIHRvbmFsIGRyaWZ0IGluIENMRUFOLXN0b25lIHRlcm1zLCB0aGUgd2hvbGUgZ3JvdW5kIHNjYWxlZCB0b1xuICAgIC8vIHRoZSBjbGVhbiByYXRpbyBvZiB0aGUgZW52ZWxvcGUgd2l0aCBvbmUgbXVsdGlwbHkgZmlsbCwgdGhlbiB0aGUgbGljaGVuIC0tIGJyb2FkIGJsdXJyZWRcbiAgICAvLyBvY2hyZSBkcmlmdHMgd2l0aCBzcGVjayBjcnVzdCBvdmVyIHRoZW0gLS0gdGhlIGdyZXkgd2FzaGVzIHJ1bm5pbmcgZG93biwgYW5kIGxpZ2h0IHBvY2tpbmcuXG4gICAge1xuICAgICAgY29uc3QgUCA9IFcuc3RvbmU7XG4gICAgICBiaW5kKG1hdGVyaWFscy5zdG9uZSwgbWFrZVRpbGUoMjAyNjA4MjYsIChjdHgsIHIsIFMsIHdyYXBwZWQpID0+IHtcbiAgICAgICAgY291cnNpbmcoY3R4LCByLCBTLCB3cmFwcGVkLCBQKTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLm1vdHRsZSwgMTAsIDAuMTYsIDAuNSwgMTQpO1xuICAgICAgICBjbG91ZChjdHgsIHIsIFMsIHdyYXBwZWQsIFAubGlnaHQsIDgsIDAuMTQsIDAuNCwgMTQpO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFAuam9pbnRUb25lLCA1MDAwLCAwLjA3KTtcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjc3MoUC5jbGVhbiwgMSk7IGN0eC5maWxsUmVjdCgwLCAwLCBTLCBTKTtcbiAgICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5saWNoZW4sIDMwLCAwLjE2LCAwLjk1LCAxMCk7XG4gICAgICAgIGNydXN0KGN0eCwgciwgUywgd3JhcHBlZCwgUC5saWNoZW4sIDYwLCA0MCwgMC4wNCwgMC44KTtcbiAgICAgICAgd2FzaGVzKGN0eCwgciwgUywgd3JhcHBlZCwgUC5ncmltZSwgMjQsIDAuNywgNSk7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5ncmltZSwgNiwgMC4wOSwgMC40LCAxNik7XG4gICAgICAgIHBpdHMoY3R4LCByLCBTLCB3cmFwcGVkLCBQLnBpdCwgMjYwLCAyLjAsIDAuNSk7XG4gICAgICB9KSwgUC5idW1wKTtcbiAgICB9XG4gICAgLy8gU3R1Y2NvIGFuZCBjaGlwczogdGhlIHRvd2VyLCB0aGUgdGllcnMsIHRoZSBjYXAsIHRoZSBkb29yIGZyYW1lcyAtLSBhbmQgdGhlIGRvb3IgcGFuZWxzJ1xuICAgIC8vIG93biBtYXRlcmlhbCwgd2hpY2ggaXMgdGhlIHNhbWUgc3R1Y2NvIGluIHRoZSByZWNlc3MgYW5kIHNoYXJlcyB0aGUgb25lIGNhbnZhcy5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5wb3JjZWxhaW47XG4gICAgICBjb25zdCB0aWxlID0gbWFrZVRpbGUoODI2MTQwMywgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5tb3R0bGUsIDE2LCAwLjE1LCAwLjc1LCAxNCk7XG4gICAgICAgIGdyYWluKGN0eCwgciwgUywgd3JhcHBlZCwgUC53YXNoLCA1MDAwLCAwLjA3KTtcbiAgICAgICAgd2FzaGVzKGN0eCwgciwgUywgd3JhcHBlZCwgUC53YXNoLCAzMCwgMC44LCA1KTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLndhc2gsIDgsIDAuMDgsIDAuNCwgMTYpO1xuICAgICAgICBjaGlwcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFApO1xuICAgICAgfSk7XG4gICAgICBiaW5kKG1hdGVyaWFscy5wb3JjZWxhaW4sIHRpbGUsIFAuYnVtcCk7XG4gICAgICBiaW5kKG1hdGVyaWFscy5zaGFkb3csIHRpbGUsIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIFJlZCBwYWludCwgcmUtYmFzZWQgdG8gaXRzIHdvcm4gZW52ZWxvcGU6IHRoZSB0aWxlJ3MgZ3JvdW5kIGlzIHRoZSByZWQgYXMgYSByYXRpbyBvZiB0aGVcbiAgICAvLyBwYWxlIHN0dWNjbywgYW5kIHRoZSB3b3JuIHBhdGNoZXMgYXJlIHBhaW50ZWQgYmFjayBVUCB0byB0aGUgZW52ZWxvcGUgYXMgYmx1cnJlZCBjbG91ZHMuXG4gICAge1xuICAgICAgY29uc3QgUCA9IFcucmVkO1xuICAgICAgY29uc3QgbSA9IG1hdGVyaWFscy5yZWQ7XG4gICAgICBpZiAoaGFzRG9tKSB7XG4gICAgICAgIGNvbnN0IGMgPSBtLmNvbG9yLmNsb25lKCk7XG4gICAgICAgIG0uY29sb3Iuc2V0UkdCKGMuciAvIE1hdGgucG93KFAuY2xlYW5bMF0sIDIuMiksIGMuZyAvIE1hdGgucG93KFAuY2xlYW5bMV0sIDIuMiksIGMuYiAvIE1hdGgucG93KFAuY2xlYW5bMl0sIDIuMikpO1xuICAgICAgfVxuICAgICAgYmluZChtLCBtYWtlVGlsZSgxMTA1MjAxMSwgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuY2xlYW4sIDEpOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgW1AuY2xlYW5bMF0gKiAwLjksIFAuY2xlYW5bMV0gKiAwLjksIFAuY2xlYW5bMl0gKiAwLjldLCA4LCAwLjE0LCAwLjUsIDE0KTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLndvcm4sIDksIDAuMDcsIDAuODUsIDYpO1xuICAgICAgICB3YXNoZXMoY3R4LCByLCBTLCB3cmFwcGVkLCBbUC5jbGVhblswXSAqIFAuZ3JpbWVbMF0sIFAuY2xlYW5bMV0gKiBQLmdyaW1lWzFdLCBQLmNsZWFuWzJdICogUC5ncmltZVsyXV0sIDEwLCAwLjUsIDUpO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFAud29ybiwgMjUwMCwgMC4wOCk7XG4gICAgICB9KSwgUC5idW1wKTtcbiAgICB9XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVQcmFuZ01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsV0FBVztBQUFBLE1BQ1Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxjQUFjO0FBQUEsTUFDZCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsU0FBUztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsUUFDUCxRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxhQUFhO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsV0FBVztBQUFBLFFBQ1gsV0FBVztBQUFBLFFBQ1gsVUFBVTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxPQUFPO0FBQUEsVUFDTDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxRQUNYLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxRQUFRO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxLQUFLO0FBQUEsVUFDUDtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGFBQWE7QUFBQSxRQUNiLFdBQVc7QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFD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
