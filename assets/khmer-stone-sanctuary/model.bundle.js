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

// assets/khmer-stone-sanctuary/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createKhmerStoneSanctuaryModel: () => createKhmerStoneSanctuaryModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "khmer-stone-sanctuary",
  "name": "Khmer Stone Sanctuary",
  "exportName": "KhmerStoneSanctuary",
  "envelope": "Envelope 12.00 x 9.00 x 12.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=16 draw calls, <=16 materials, <=16 unique geometries.",
  "materials": [
    {
      "id": "laterite",
      "color": 7754816,
      "roughness": 0.96,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "sandstone",
      "color": 9139290,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "pale",
      "color": 16777215,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "void",
      "color": 5130048,
      "roughness": 0.98,
      "metalness": 0
    }
  ],
  "geometry": {
    "platform": [
      [
        0,
        0.55,
        6
      ],
      [
        0.55,
        1.2,
        5.75
      ]
    ],
    "notch": {
      "halfZ": 1.55,
      "xInner": 4.25
    },
    "stair": {
      "steps": 6,
      "x0": 4.25,
      "x1": 6,
      "top": 1.2,
      "treadHalfZ": 1.4
    },
    "parapet": {
      "y0": 1.2,
      "y1": 2.05,
      "outer": 5.4,
      "thick": 0.6
    },
    "base": {
      "y0": 1.2,
      "y1": 1.55,
      "a": 2.95,
      "r": 0.48
    },
    "tower": {
      "y0": 1.55,
      "y1": 4.85,
      "a": 2.75,
      "r": 0.46
    },
    "cornice": [
      [
        4.85,
        5.25,
        3.05
      ],
      [
        5.25,
        5.75,
        3.3
      ],
      [
        5.75,
        6.3,
        3.5
      ]
    ],
    "tier1": {
      "y0": 6.3,
      "y1": 7.3,
      "a": 2.95,
      "aed": {
        "w": 1.5,
        "y0": 6.45,
        "y1": 7.15,
        "proud": 0.22
      }
    },
    "tier1cap": {
      "y0": 7.3,
      "y1": 7.55,
      "a": 3.05,
      "corner": 0.45
    },
    "tier2": {
      "y0": 7.55,
      "y1": 8.3,
      "a": 2.45,
      "aed": {
        "w": 1.2,
        "y0": 7.68,
        "y1": 8.22,
        "proud": 0.18
      }
    },
    "brokenTier": {
      "y0": 8.3,
      "y1": 8.7,
      "a": 2.4,
      "t": 0.65
    },
    "door": {
      "w": 1.9,
      "head": 3.52,
      "jamb": 0.34,
      "lintel": 0.4,
      "col": {
        "r": 0.15,
        "ring": 0.19,
        "x": 1.24
      },
      "sinkFrame": 1.02,
      "sinkBlind": 1.09,
      "sinkVoid": 1.15
    },
    "blocks": {
      "unit": [
        1,
        0.4,
        0.6
      ],
      "list": [
        [
          -2.075,
          8.85,
          0.6,
          1.62,
          0,
          0,
          1.3,
          0.75,
          0.9,
          1
        ],
        [
          -2.075,
          8.84,
          -1.2,
          1.51,
          0,
          0,
          1.2,
          0.7,
          0.9,
          2
        ],
        [
          0.4,
          8.83,
          2.075,
          0.04,
          0,
          0,
          1.4,
          0.65,
          0.9,
          0
        ],
        [
          -1,
          8.82,
          2.075,
          -0.05,
          0,
          0,
          1.1,
          0.6,
          0.9,
          1
        ],
        [
          2.075,
          8.72,
          1.2,
          1.6,
          0,
          0,
          1,
          0.65,
          0.85,
          2
        ],
        [
          -0.8,
          8.77,
          -2.075,
          0.03,
          0,
          0,
          1.2,
          0.6,
          0.9,
          3
        ],
        [
          0.2,
          8.46,
          0.1,
          0.5,
          0,
          0,
          1.3,
          0.8,
          1.2,
          2
        ],
        [
          -0.7,
          8.44,
          -0.6,
          1.2,
          0,
          0,
          1,
          0.7,
          0.9,
          1
        ],
        [
          0.9,
          8.43,
          0.9,
          -0.7,
          0,
          0,
          0.9,
          0.65,
          0.8,
          0
        ],
        [
          0.3,
          8.76,
          0.1,
          0.9,
          0,
          0,
          0.9,
          0.65,
          0.8,
          0
        ],
        [
          2.75,
          7.71,
          -1.5,
          1.67,
          0,
          0,
          1.1,
          0.8,
          0.9,
          2
        ],
        [
          1.4,
          7.69,
          -2.75,
          0.05,
          0,
          0,
          1,
          0.7,
          0.9,
          1
        ],
        [
          4.1,
          1.34,
          -3.5,
          0.35,
          0,
          0,
          1,
          0.6,
          0.9,
          0
        ],
        [
          3.4,
          1.36,
          3.4,
          0.4,
          0,
          0,
          1.2,
          0.8,
          1,
          0
        ],
        [
          4.2,
          1.34,
          -2.3,
          1,
          0,
          0,
          1.1,
          0.7,
          0.9,
          1
        ],
        [
          -3.8,
          1.36,
          2.8,
          -0.5,
          0,
          0,
          1.3,
          0.8,
          1,
          0
        ],
        [
          -4.3,
          1.33,
          -3.4,
          0.9,
          0,
          0,
          1,
          0.65,
          0.9,
          2
        ],
        [
          3,
          1.35,
          -4.3,
          0.2,
          0,
          0,
          1.2,
          0.75,
          1,
          3
        ],
        [
          -2.6,
          1.34,
          -4.4,
          2,
          0,
          0,
          1,
          0.7,
          0.9,
          1
        ],
        [
          -0.3,
          1.33,
          4.3,
          0.7,
          0,
          0,
          1,
          0.65,
          0.9,
          2
        ],
        [
          -4.2,
          1.35,
          4.2,
          1.4,
          0,
          0,
          1.1,
          0.75,
          1,
          0
        ],
        [
          4.4,
          1.34,
          4,
          -0.8,
          0,
          0,
          1,
          0.7,
          1,
          1
        ],
        [
          -2,
          1.36,
          -3.2,
          0.3,
          0,
          0,
          0.9,
          0.8,
          0.8,
          0
        ],
        [
          -3.6,
          1.63,
          2.7,
          0.1,
          0,
          0,
          0.9,
          0.7,
          0.8,
          2
        ],
        [
          4.35,
          1.6,
          1.5,
          0,
          0,
          0.55,
          1,
          0.9,
          0.8,
          0
        ],
        [
          -4.4,
          1.34,
          -0.5,
          1.6,
          0,
          0,
          1,
          0.7,
          0.9,
          1
        ],
        [
          4.3,
          1.33,
          -4.4,
          0.5,
          0,
          0,
          0.9,
          0.65,
          0.8,
          2
        ],
        [
          1.8,
          1.35,
          -4.2,
          -0.4,
          0,
          0,
          1.1,
          0.75,
          1,
          3
        ],
        [
          -5.1,
          2.19,
          2.6,
          1.62,
          0,
          0,
          1,
          0.7,
          0.9,
          2
        ],
        [
          2.6,
          2.19,
          -5.1,
          0.05,
          0,
          0,
          1.1,
          0.7,
          0.9,
          1
        ]
      ],
      "tones": [
        13605752,
        12102551,
        9139290,
        6969928
      ]
    },
    "wear": {
      "size": 512,
      "laterite": {
        "tile": 3.2,
        "course": 0.32,
        "block": 0.8,
        "joint": 8,
        "bump": 0.05,
        "jointTone": [
          0.55,
          0.54,
          0.54
        ],
        "pit": [
          0.52,
          0.52,
          0.55
        ],
        "blockLo": 0.8,
        "blockHi": 1,
        "mottle": [
          0.9,
          0.9,
          0.92
        ]
      },
      "sandstone": {
        "tile": 3.2,
        "course": 0.4,
        "block": 0.8,
        "joint": 2,
        "bump": 0.04,
        "clean": [
          0.79,
          0.95,
          1
        ],
        "side": [
          1,
          1,
          1
        ],
        "crust": [
          0.95,
          0.9,
          0.82
        ],
        "lichen": [
          1,
          1,
          0.7
        ],
        "black": [
          0.42,
          0.5,
          0.53
        ],
        "jointTone": [
          0.66,
          0.66,
          0.66
        ],
        "pit": [
          0.54,
          0.65,
          0.68
        ],
        "blockLo": 0.86,
        "blockHi": 1,
        "mottle": [
          0.86,
          0.86,
          0.87
        ],
        "light": [
          1,
          1,
          1
        ]
      },
      "rubble": {
        "tile": 1.2,
        "bump": 0.03,
        "pit": [
          0.62,
          0.62,
          0.62
        ],
        "mottle": [
          0.88,
          0.88,
          0.88
        ],
        "dark": [
          0.7,
          0.7,
          0.7
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
function createKhmerStoneSanctuaryModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Khmer Stone Sanctuary";
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
  function quadMerge(geo) {
    return [0, 1, 2, 3].map((k) => {
      const g = geo.clone();
      g.rotateY(k * Math.PI / 2);
      return g;
    });
  }
  function tintByFacing(geo, side, top) {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const col = new Float32Array(p.count * 3);
    const lin = (t) => t.map((v) => Math.pow(v, 2.2));
    const S = lin(side), T = lin(top);
    for (let i = 0; i < p.count; i++) {
      const up = n.getY(i) > 0.7 ? T : S;
      col[i * 3] = up[0];
      col[i * 3 + 1] = up[1];
      col[i * 3 + 2] = up[2];
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  }
  const SAND = G.wear.sandstone;
  {
    const N = G.notch, ST = G.stair, P = G.parapet;
    const parts = G.platform.map(
      ([y0, y1, a]) => extrudeSlab(notchedSquare(a, N.halfZ, N.xInner), y0, y1)
    );
    const bi = P.outer - P.thick, bc = P.outer - P.thick / 2, bh = P.y1 - P.y0, by = (P.y0 + P.y1) / 2;
    parts.push(boxAt(-bc, by, 0, P.thick, bh, P.outer * 2));
    parts.push(boxAt(0, by, bc, bi * 2, bh, P.thick));
    parts.push(boxAt(0, by, -bc, bi * 2, bh, P.thick));
    const segLen = P.outer - N.halfZ;
    parts.push(boxAt(bc, by, (N.halfZ + P.outer) / 2, P.thick, bh, segLen));
    parts.push(boxAt(bc, by, -(N.halfZ + P.outer) / 2, P.thick, bh, segLen));
    const run = (ST.x1 - ST.x0) / ST.steps, rise = ST.top / ST.steps;
    for (let i = 0; i < ST.steps; i++) {
      const x1 = ST.x1 - i * run, h = (i + 1) * rise;
      parts.push(boxAt(x1 - run / 2, h / 2, 0, run, h, ST.treadHalfZ * 2));
    }
    const geo = mergeGeos(parts);
    geo.rotateY(-Math.PI / 2);
    tintByHeight(geo, 0, 1.2, [0.78, 0.79, 0.8]);
    boxUv(geo, G.wear.laterite.tile);
    add("platform", "Laterite platform, enclosure and stair", geo, "laterite");
    colliders["platform"] = {
      shape: "box",
      localCenter: [0, 4.5, 0],
      halfExtents: [6, 4.5, 6],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the sanctuary, not with its fallen blocks.'
    };
  }
  {
    const T = G.tower, B = G.base, T1 = G.tier1, C1 = G.tier1cap, T2 = G.tier2;
    const parts = [];
    parts.push(extrudeSlab(redentedShape(B.a, B.r), B.y0, B.y1));
    parts.push(extrudeSlab(redentedShape(T.a, T.r), T.y0, T.y1));
    for (const [y0, y1, a] of G.cornice) {
      parts.push(extrudeSlab(redentedShape(a, a * 0.12), y0, y1));
    }
    parts.push(extrudeSlab(redentedShape(T1.a, T1.a * 0.16), T1.y0, T1.y1));
    parts.push(extrudeSlab(redentedShape(C1.a, C1.a * 0.16), C1.y0, C1.y1));
    parts.push(extrudeSlab(redentedShape(T2.a, T2.a * 0.16), T2.y0, T2.y1));
    for (const [tier, a] of [[T1, T1.a], [T2, T2.a]]) {
      const d = tier.aed;
      const panel = boxAt(0, (d.y0 + d.y1) / 2, a + d.proud / 2, d.w, d.y1 - d.y0, d.proud);
      parts.push(...quadMerge(panel));
    }
    {
      const c = C1.corner, o = C1.a - C1.a * 0.16 - c / 2 - 0.02;
      for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1]]) {
        parts.push(boxAt(sx * o, C1.y1 + c / 2, sz * o, c, c, c));
      }
    }
    const geo = mergeGeos(parts);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    add("tower", "Sanctuary tower and roof tiers", geo, "sandstone");
  }
  {
    const R = G.brokenTier;
    const h = R.y1 - R.y0, t = R.t, a = R.a, ai = a - t;
    const geo = mergeGeos([
      boxAt(-(a - t / 2), R.y0 + h / 2, 0, t, h, a * 2),
      // -X, full
      boxAt(0, R.y0 + h / 2, a - t / 2, ai * 2, h, t),
      // +Z, between
      boxAt(a - t / 2, R.y0 + h * 0.36, (a - 0.5) / 2, t, h * 0.72, a + 0.5),
      // +X, stops at z=-0.5
      boxAt((-ai + 0.9) / 2, R.y0 + h * 0.43, -(a - t / 2), ai + 0.9, h * 0.86, t)
      // -Z, stops at x=+0.9
    ]);
    boxUv(geo, SAND.tile);
    tintByFacing(geo, SAND.side, SAND.crust);
    add("broken-tier", "Collapsed top tier", geo, "sandstone");
  }
  {
    const T = G.tower, D = G.door;
    const face = T.a;
    const hw = D.w / 2 + D.jamb;
    const hF = D.head - D.sinkFrame;
    const parts = [
      // Jamb fronts at face+0.25, PROUD of the base moulding's face at face+0.20: level with it,
      // the two planes coincide over the plinth's height and tear.
      boxAt(-(D.w / 2 + D.jamb / 2), D.sinkFrame + hF / 2, face + 0.1, D.jamb, hF, 0.3),
      boxAt(D.w / 2 + D.jamb / 2, D.sinkFrame + hF / 2, face + 0.1, D.jamb, hF, 0.3),
      boxAt(0, D.head + D.lintel / 2, face + 0.1, hw * 2 + 0.28, D.lintel, 0.44),
      // threshold step, running back INTO the base moulding so there is no slot between them
      boxAt(0, 1.2 + 0.11, face + 0.55, D.w + 0.7, 0.22, 0.8)
    ];
    for (const s of [-1, 1]) {
      const x = s * D.col.x, z = face + 0.2;
      parts.push(cylAt(x, D.sinkFrame + hF / 2, z, D.col.r, D.col.r, hF, 10));
      for (const y of [1.55, 2.25, 2.95]) parts.push(cylAt(x, y, z, D.col.ring, D.col.ring, 0.1, 10));
    }
    {
      const y0 = D.head + D.lintel, w = hw + 0.14;
      const sh = new THREE.Shape();
      sh.moveTo(-w, y0);
      sh.lineTo(w, y0);
      sh.lineTo(w, y0 + 0.4);
      sh.lineTo(w * 0.7, y0 + 0.58);
      sh.lineTo(w * 0.36, y0 + 0.78);
      sh.lineTo(0, y0 + 0.88);
      sh.lineTo(-w * 0.36, y0 + 0.78);
      sh.lineTo(-w * 0.7, y0 + 0.58);
      sh.lineTo(-w, y0 + 0.4);
      sh.closePath();
      parts.push(extrudeAlongZ(sh, face - 0.05, face + 0.28));
    }
    const unit = mergeGeos(parts);
    boxUv(unit, SAND.tile);
    tintByFacing(unit, SAND.side, SAND.crust);
    addInst("door-frames", "Door aedicules", unit, "sandstone", quad(0, 0));
    const hB = D.head - D.sinkBlind;
    const blind = mergeGeos([
      boxAt(0, D.sinkBlind + hB / 2, face + 0.05, D.w, hB, 0.1),
      boxAt(0, D.sinkBlind + hB / 2 + 0.05, face + 0.09, 0.32, hB - 0.3, 0.14)
    ]);
    boxUv(blind, SAND.tile);
    tintByFacing(blind, SAND.side, SAND.side);
    addInst("blind-doors", "Blind door panels", blind, "sandstone", quad(0, 0).slice(1));
    const hV = D.head - D.sinkVoid;
    add("doorway", "Open doorway", boxAt(0, D.sinkVoid + hV / 2, face + 0.045, D.w, hV, 0.05), "void");
  }
  {
    const U = G.blocks.unit;
    const unit = boxAt(0, 0, 0, U[0], U[1], U[2]);
    boxUv(unit, G.wear.rubble.tile);
    const list = G.blocks.list;
    const mats = list.map(([x, y, z, yaw, tx, tz, sx, sy, sz], i) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y - 4e-3 * (1 + i % 9), z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(tx, yaw, tz)),
      new THREE.Vector3(sx, sy, sz)
    ));
    const tones = G.blocks.tones;
    addInst("fallen-blocks", "Fallen blocks", unit, "pale", mats, list.map((b) => tones[b[9]]));
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
    const blotch = (ctx, r, S, wrapped, tone, count, rad, alpha, vertical = 0) => {
      for (let i = 0; i < count; i++) {
        const halo = new Path2D(), core = new Path2D();
        let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
        const R = rad * S * (0.5 + r()), n = 8 + Math.floor(r() * 16);
        for (let k = 0; k < n; k++) {
          a += (r() - 0.5) * 2.2;
          cx += Math.cos(a) * R * 0.4 * (1 - vertical);
          cy += Math.abs(Math.sin(a)) * R * 0.4 * (1 + vertical);
          const rr = R * (0.35 + 0.5 * r());
          halo.moveTo(cx + rr, cy);
          halo.arc(cx, cy, rr, 0, Math.PI * 2);
          core.moveTo(cx + rr * 0.6, cy);
          core.arc(cx, cy, rr * 0.6, 0, Math.PI * 2);
        }
        const al = alpha * (0.6 + 0.4 * r());
        wrapped(() => {
          ctx.fillStyle = css(tone, al * 0.55);
          ctx.fill(halo);
          ctx.fillStyle = css(tone, al * 0.45);
          ctx.fill(core);
        });
      }
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
    const streaks = (ctx, r, S, wrapped, tone, count, alpha) => {
      for (let i = 0; i < count; i++) {
        const x = r() * S, y0 = r() * S, len = S * (0.15 + 0.45 * r()), w = 12 + 44 * r();
        const a = alpha * (0.5 + 0.5 * r());
        wrapped(() => {
          const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
          g.addColorStop(0, css(tone, a));
          g.addColorStop(0.35, css(tone, a * 0.7));
          g.addColorStop(1, css(tone, 0));
          ctx.fillStyle = g;
          ctx.fillRect(x - w / 2, y0, w, len);
        });
      }
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
      const P = W.laterite;
      bind(materials.laterite, makeTile(20260826, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 12, 0.14, 0.6, 12);
        pits(ctx, r, S, wrapped, P.pit, 1100, 4.5, 0.8);
        grain(ctx, r, S, wrapped, P.pit, 1800, 0.1);
      }), P.bump);
    }
    {
      const P = W.sandstone;
      const m = materials.sandstone;
      if (hasDom) {
        const c = m.color.clone();
        m.color.setRGB(c.r / Math.pow(P.clean[0], 2.2), c.g / Math.pow(P.clean[1], 2.2), c.b / Math.pow(P.clean[2], 2.2));
      }
      bind(m, makeTile(8261403, (ctx, r, S, wrapped) => {
        coursing(ctx, r, S, wrapped, P);
        cloud(ctx, r, S, wrapped, P.mottle, 10, 0.16, 0.5, 14);
        cloud(ctx, r, S, wrapped, P.light, 8, 0.14, 0.4, 14);
        grain(ctx, r, S, wrapped, P.jointTone, 5e3, 0.07);
        grain(ctx, r, S, wrapped, P.light, 2500, 0.07);
        ctx.globalCompositeOperation = "multiply";
        ctx.fillStyle = css(P.clean, 1);
        ctx.fillRect(0, 0, S, S);
        ctx.globalCompositeOperation = "source-over";
        washes(ctx, r, S, wrapped, P.black, 18, 0.55, 5);
        cloud(ctx, r, S, wrapped, P.black, 6, 0.09, 0.35, 16);
        pits(ctx, r, S, wrapped, P.pit, 420, 2.2, 0.5);
        crust(ctx, r, S, wrapped, P.lichen, 26, 34, 0.035, 0.55);
      }), P.bump);
    }
    {
      const P = W.rubble;
      bind(materials.pale, makeTile(11052011, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        blotch(ctx, r, S, wrapped, P.mottle, 16, 0.12, 0.7);
        blotch(ctx, r, S, wrapped, P.dark, 6, 0.06, 0.6);
        pits(ctx, r, S, wrapped, P.pit, 260, 2.5, 0.6);
        grain(ctx, r, S, wrapped, P.dark, 1200, 0.1);
      }), P.bump);
    }
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createKhmerStoneSanctuaryModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogS2htZXIgU3RvbmUgU2FuY3R1YXJ5IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEyLjAwIHggOS4wMCB4IDEyLjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTE2IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBNT05VTUVOVEFMIGJ1aWxkaW5ncywgYW5kIHVubGlrZSB0aGUgc2hhcmVkIHJldGFpbCBtb2R1bGUgaXRzIGZvcm0gaXNcbiAqIG5vdCBhIGJveDogdGhlIHJlY29nbmlzYWJsZSBmZWF0dXJlIGlzIGEgY3VydmVkIG9yIHRpZXJlZCBwcm9maWxlIHRoYXQgaGFzIHRvIHN1cnZpdmUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20uIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBoZXJlIGlzIHRoZXJlZm9yZSB0aGUgTEFUSEUgLS1cbiAqIGEgcHJvZmlsZSByZXZvbHZlZCBhYm91dCArWSAtLSBhbmQgdGhlIHRpZXJlZC9zdGVwcGVkIG1lcmdlLCBub3QgdGhlIHBhcmFtZXRlcmlzZWQgc2hvcGZyb250LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwia2htZXItc3RvbmUtc2FuY3R1YXJ5XCIsXG4gICAgXCJuYW1lXCI6IFwiS2htZXIgU3RvbmUgU2FuY3R1YXJ5XCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiS2htZXJTdG9uZVNhbmN0dWFyeVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxMi4wMCB4IDkuMDAgeCAxMi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxcbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTYgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwibGF0ZXJpdGVcIixcbiAgICAgICAgXCJjb2xvclwiOiA3NzU0ODE2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic2FuZHN0b25lXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTEzOTI5MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInBhbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInZvaWRcIixcbiAgICAgICAgXCJjb2xvclwiOiA1MTMwMDQ4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwicGxhdGZvcm1cIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIDZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgMS4yLFxuICAgICAgICAgIDUuNzVcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwibm90Y2hcIjoge1xuICAgICAgICBcImhhbGZaXCI6IDEuNTUsXG4gICAgICAgIFwieElubmVyXCI6IDQuMjVcbiAgICAgIH0sXG4gICAgICBcInN0YWlyXCI6IHtcbiAgICAgICAgXCJzdGVwc1wiOiA2LFxuICAgICAgICBcIngwXCI6IDQuMjUsXG4gICAgICAgIFwieDFcIjogNixcbiAgICAgICAgXCJ0b3BcIjogMS4yLFxuICAgICAgICBcInRyZWFkSGFsZlpcIjogMS40XG4gICAgICB9LFxuICAgICAgXCJwYXJhcGV0XCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjIsXG4gICAgICAgIFwieTFcIjogMi4wNSxcbiAgICAgICAgXCJvdXRlclwiOiA1LjQsXG4gICAgICAgIFwidGhpY2tcIjogMC42XG4gICAgICB9LFxuICAgICAgXCJiYXNlXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAxLjIsXG4gICAgICAgIFwieTFcIjogMS41NSxcbiAgICAgICAgXCJhXCI6IDIuOTUsXG4gICAgICAgIFwiclwiOiAwLjQ4XG4gICAgICB9LFxuICAgICAgXCJ0b3dlclwiOiB7XG4gICAgICAgIFwieTBcIjogMS41NSxcbiAgICAgICAgXCJ5MVwiOiA0Ljg1LFxuICAgICAgICBcImFcIjogMi43NSxcbiAgICAgICAgXCJyXCI6IDAuNDZcbiAgICAgIH0sXG4gICAgICBcImNvcm5pY2VcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgNC44NSxcbiAgICAgICAgICA1LjI1LFxuICAgICAgICAgIDMuMDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDUuMjUsXG4gICAgICAgICAgNS43NSxcbiAgICAgICAgICAzLjNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDUuNzUsXG4gICAgICAgICAgNi4zLFxuICAgICAgICAgIDMuNVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJ0aWVyMVwiOiB7XG4gICAgICAgIFwieTBcIjogNi4zLFxuICAgICAgICBcInkxXCI6IDcuMyxcbiAgICAgICAgXCJhXCI6IDIuOTUsXG4gICAgICAgIFwiYWVkXCI6IHtcbiAgICAgICAgICBcIndcIjogMS41LFxuICAgICAgICAgIFwieTBcIjogNi40NSxcbiAgICAgICAgICBcInkxXCI6IDcuMTUsXG4gICAgICAgICAgXCJwcm91ZFwiOiAwLjIyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInRpZXIxY2FwXCI6IHtcbiAgICAgICAgXCJ5MFwiOiA3LjMsXG4gICAgICAgIFwieTFcIjogNy41NSxcbiAgICAgICAgXCJhXCI6IDMuMDUsXG4gICAgICAgIFwiY29ybmVyXCI6IDAuNDVcbiAgICAgIH0sXG4gICAgICBcInRpZXIyXCI6IHtcbiAgICAgICAgXCJ5MFwiOiA3LjU1LFxuICAgICAgICBcInkxXCI6IDguMyxcbiAgICAgICAgXCJhXCI6IDIuNDUsXG4gICAgICAgIFwiYWVkXCI6IHtcbiAgICAgICAgICBcIndcIjogMS4yLFxuICAgICAgICAgIFwieTBcIjogNy42OCxcbiAgICAgICAgICBcInkxXCI6IDguMjIsXG4gICAgICAgICAgXCJwcm91ZFwiOiAwLjE4XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcImJyb2tlblRpZXJcIjoge1xuICAgICAgICBcInkwXCI6IDguMyxcbiAgICAgICAgXCJ5MVwiOiA4LjcsXG4gICAgICAgIFwiYVwiOiAyLjQsXG4gICAgICAgIFwidFwiOiAwLjY1XG4gICAgICB9LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEuOSxcbiAgICAgICAgXCJoZWFkXCI6IDMuNTIsXG4gICAgICAgIFwiamFtYlwiOiAwLjM0LFxuICAgICAgICBcImxpbnRlbFwiOiAwLjQsXG4gICAgICAgIFwiY29sXCI6IHtcbiAgICAgICAgICBcInJcIjogMC4xNSxcbiAgICAgICAgICBcInJpbmdcIjogMC4xOSxcbiAgICAgICAgICBcInhcIjogMS4yNFxuICAgICAgICB9LFxuICAgICAgICBcInNpbmtGcmFtZVwiOiAxLjAyLFxuICAgICAgICBcInNpbmtCbGluZFwiOiAxLjA5LFxuICAgICAgICBcInNpbmtWb2lkXCI6IDEuMTVcbiAgICAgIH0sXG4gICAgICBcImJsb2Nrc1wiOiB7XG4gICAgICAgIFwidW5pdFwiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC42XG4gICAgICAgIF0sXG4gICAgICAgIFwibGlzdFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuMDc1LFxuICAgICAgICAgICAgOC44NSxcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDEuNjIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgIDAuNzUsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi4wNzUsXG4gICAgICAgICAgICA4Ljg0LFxuICAgICAgICAgICAgLTEuMixcbiAgICAgICAgICAgIDEuNTEsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgIDguODMsXG4gICAgICAgICAgICAyLjA3NSxcbiAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuNCxcbiAgICAgICAgICAgIDAuNjUsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMSxcbiAgICAgICAgICAgIDguODIsXG4gICAgICAgICAgICAyLjA3NSxcbiAgICAgICAgICAgIC0wLjA1LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLjEsXG4gICAgICAgICAgICAwLjYsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjA3NSxcbiAgICAgICAgICAgIDguNzIsXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAxLjYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwLjY1LFxuICAgICAgICAgICAgMC44NSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgICA4Ljc3LFxuICAgICAgICAgICAgLTIuMDc1LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgOC40NixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4zLFxuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNyxcbiAgICAgICAgICAgIDguNDQsXG4gICAgICAgICAgICAtMC42LFxuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgOC40MyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIC0wLjcsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDAuNjUsXG4gICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICA4Ljc2LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjY1LFxuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43NSxcbiAgICAgICAgICAgIDcuNzEsXG4gICAgICAgICAgICAtMS41LFxuICAgICAgICAgICAgMS42NyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4xLFxuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS40LFxuICAgICAgICAgICAgNy42OSxcbiAgICAgICAgICAgIC0yLjc1LFxuICAgICAgICAgICAgMC4wNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQuMSxcbiAgICAgICAgICAgIDEuMzQsXG4gICAgICAgICAgICAtMy41LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuNCxcbiAgICAgICAgICAgIDEuMzYsXG4gICAgICAgICAgICAzLjQsXG4gICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0LjIsXG4gICAgICAgICAgICAxLjM0LFxuICAgICAgICAgICAgLTIuMyxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMSxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjgsXG4gICAgICAgICAgICAxLjM2LFxuICAgICAgICAgICAgMi44LFxuICAgICAgICAgICAgLTAuNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4zLFxuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC00LjMsXG4gICAgICAgICAgICAxLjMzLFxuICAgICAgICAgICAgLTMuNCxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuNjUsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgMS4zNSxcbiAgICAgICAgICAgIC00LjMsXG4gICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDAuNzUsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuNixcbiAgICAgICAgICAgIDEuMzQsXG4gICAgICAgICAgICAtNC40LFxuICAgICAgICAgICAgMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAxLjMzLFxuICAgICAgICAgICAgNC4zLFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMC42NSxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC00LjIsXG4gICAgICAgICAgICAxLjM1LFxuICAgICAgICAgICAgNC4yLFxuICAgICAgICAgICAgMS40LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLjEsXG4gICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQuNCxcbiAgICAgICAgICAgIDEuMzQsXG4gICAgICAgICAgICA0LFxuICAgICAgICAgICAgLTAuOCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMixcbiAgICAgICAgICAgIDEuMzYsXG4gICAgICAgICAgICAtMy4yLFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy42LFxuICAgICAgICAgICAgMS42MyxcbiAgICAgICAgICAgIDIuNyxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNC4zNSxcbiAgICAgICAgICAgIDEuNixcbiAgICAgICAgICAgIDEuNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC41NSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAwXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtNC40LFxuICAgICAgICAgICAgMS4zNCxcbiAgICAgICAgICAgIC0wLjUsXG4gICAgICAgICAgICAxLjYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0LjMsXG4gICAgICAgICAgICAxLjMzLFxuICAgICAgICAgICAgLTQuNCxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgMC42NSxcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOCxcbiAgICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgICAtNC4yLFxuICAgICAgICAgICAgLTAuNCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4xLFxuICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtNS4xLFxuICAgICAgICAgICAgMi4xOSxcbiAgICAgICAgICAgIDIuNixcbiAgICAgICAgICAgIDEuNjIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjYsXG4gICAgICAgICAgICAyLjE5LFxuICAgICAgICAgICAgLTUuMSxcbiAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuMSxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidG9uZXNcIjogW1xuICAgICAgICAgIDEzNjA1NzUyLFxuICAgICAgICAgIDEyMTAyNTUxLFxuICAgICAgICAgIDkxMzkyOTAsXG4gICAgICAgICAgNjk2OTkyOFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJ3ZWFyXCI6IHtcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJsYXRlcml0ZVwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDMuMixcbiAgICAgICAgICBcImNvdXJzZVwiOiAwLjMyLFxuICAgICAgICAgIFwiYmxvY2tcIjogMC44LFxuICAgICAgICAgIFwiam9pbnRcIjogOCxcbiAgICAgICAgICBcImJ1bXBcIjogMC4wNSxcbiAgICAgICAgICBcImpvaW50VG9uZVwiOiBbXG4gICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgMC41NCxcbiAgICAgICAgICAgIDAuNTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicGl0XCI6IFtcbiAgICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgICAwLjUyLFxuICAgICAgICAgICAgMC41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJibG9ja0xvXCI6IDAuOCxcbiAgICAgICAgICBcImJsb2NrSGlcIjogMSxcbiAgICAgICAgICBcIm1vdHRsZVwiOiBbXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjkyXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcInNhbmRzdG9uZVwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDMuMixcbiAgICAgICAgICBcImNvdXJzZVwiOiAwLjQsXG4gICAgICAgICAgXCJibG9ja1wiOiAwLjgsXG4gICAgICAgICAgXCJqb2ludFwiOiAyLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjA0LFxuICAgICAgICAgIFwiY2xlYW5cIjogW1xuICAgICAgICAgICAgMC43OSxcbiAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInNpZGVcIjogW1xuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImNydXN0XCI6IFtcbiAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAwLjgyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImxpY2hlblwiOiBbXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuN1xuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJibGFja1wiOiBbXG4gICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMC41M1xuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJqb2ludFRvbmVcIjogW1xuICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAwLjY2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInBpdFwiOiBbXG4gICAgICAgICAgICAwLjU0LFxuICAgICAgICAgICAgMC42NSxcbiAgICAgICAgICAgIDAuNjhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiYmxvY2tMb1wiOiAwLjg2LFxuICAgICAgICAgIFwiYmxvY2tIaVwiOiAxLFxuICAgICAgICAgIFwibW90dGxlXCI6IFtcbiAgICAgICAgICAgIDAuODYsXG4gICAgICAgICAgICAwLjg2LFxuICAgICAgICAgICAgMC44N1xuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJsaWdodFwiOiBbXG4gICAgICAgICAgICAxLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwicnViYmxlXCI6IHtcbiAgICAgICAgICBcInRpbGVcIjogMS4yLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjAzLFxuICAgICAgICAgIFwicGl0XCI6IFtcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgMC42MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJtb3R0bGVcIjogW1xuICAgICAgICAgICAgMC44OCxcbiAgICAgICAgICAgIDAuODgsXG4gICAgICAgICAgICAwLjg4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImRhcmtcIjogW1xuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC43XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgcmV0dXJuIFtjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6XTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpICsgMSwgaiksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSwgaiArIDEpO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlS2htZXJTdG9uZVNhbmN0dWFyeU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnS2htZXIgU3RvbmUgU2FuY3R1YXJ5JztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qKiBCb3gtcHJvamVjdCBVVnMgYnkgZWFjaCB2ZXJ0ZXgncyBkb21pbmFudCBub3JtYWwgYXhpcywgaW4gbWV0cmVzIG92ZXIgdGhlIHRpbGUgc2l6ZSwgc28gdGhlXG4gICAqICBjb3Vyc2luZyB0aWxlIGxhbmRzIGF0IHRydWUgYmxvY2sgc2NhbGUgYW5kIGxpbmVzIHVwIGFjcm9zcyBldmVyeSBtZXJnZWQgcGFydC4gRXZlcnkgZ2VvbWV0cnlcbiAgICogIHRoaXMgaXMgdXNlZCBvbiBpcyBub24taW5kZXhlZCB3aXRoIHBlci1mYWNlIG5vcm1hbHMsIHNvIGEgZmFjZSBuZXZlciBzdHJhZGRsZXMgdHdvXG4gICAqICBwcm9qZWN0aW9ucy4gKi9cbiAgZnVuY3Rpb24gYm94VXYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgYXggPSBNYXRoLmFicyhuLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG4uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobi5nZXRaKGkpKTtcbiAgICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICAgIGlmIChheSA+PSBheCAmJiBheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgICBlbHNlIGlmIChheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgICAgb3V0W2kgKiAyXSA9IHUgLyB0aWxlOyBvdXRbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAyKSk7XG4gIH1cbiAgLyoqIEZvdXIgY29waWVzIG9mIGEgZ2VvbWV0cnkgYXV0aG9yZWQgb24gdGhlICtaIGZhY2UsIHlhd2VkIGEgcXVhcnRlciB0dXJuIGVhY2ggLS0gZm9yIHBhcnRzXG4gICAqICB0aGF0IGJlbG9uZyBJTlNJREUgYSBtZXJnZWQgY29tcG9uZW50IHJhdGhlciB0aGFuIGluIGFuIGluc3RhbmNlZCBzZXQuICovXG4gIGZ1bmN0aW9uIHF1YWRNZXJnZShnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGspID0+IHsgY29uc3QgZyA9IGdlby5jbG9uZSgpOyBnLnJvdGF0ZVkoayAqIE1hdGguUEkgLyAyKTsgcmV0dXJuIGc7IH0pO1xuICB9XG4gIC8qKiBQZXItdmVydGV4IHRpbnQgYnkgRkFDSU5HOiBvbmUgZGlzcGxheS1zcGFjZSByYXRpbyBmb3IgdXB3YXJkIGZhY2VzLCBhbm90aGVyIGZvciB0aGUgcmVzdCxcbiAgICogIHJhaXNlZCB0byAyLjIgYmVjYXVzZSB2ZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBsaW5lYXIgc3BhY2UuIFRoaXMgaXMgaG93IHRoZSBzYW5kc3RvbmUnc1xuICAgKiAgbGVkZ2UtdG9wIGxpY2hlbiBjcnVzdCBpcyBkZWxpdmVyZWQgb24gb25lIG1hdGVyaWFsOiBhIHJlcGVhdGluZyB0aWxlIGNhbm5vdCB0ZWxsIGEgdG9wXG4gICAqICBmcm9tIGEgc2lkZSwgYnV0IGEgbm9ybWFsIGNhbi4gKi9cbiAgZnVuY3Rpb24gdGludEJ5RmFjaW5nKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNpZGU6IG51bWJlcltdLCB0b3A6IG51bWJlcltdKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgICBjb25zdCBsaW4gPSAodDogbnVtYmVyW10pID0+IHQubWFwKCh2KSA9PiBNYXRoLnBvdyh2LCAyLjIpKTtcbiAgICBjb25zdCBTID0gbGluKHNpZGUpLCBUID0gbGluKHRvcCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHVwID0gbi5nZXRZKGkpID4gMC43ID8gVCA6IFM7XG4gICAgICBjb2xbaSAqIDNdID0gdXBbMF07IGNvbFtpICogMyArIDFdID0gdXBbMV07IGNvbFtpICogMyArIDJdID0gdXBbMl07XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgfVxuICBjb25zdCBTQU5EID0gRy53ZWFyLnNhbmRzdG9uZTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxhdGVyaXRlIHBsYXRmb3JtXG4gICAqIFR3byBzbGFicywgYSBwYXJhcGV0IGVuY2xvc3VyZSBhbmQgYSBzaXgtdHJlYWQgc3RhaXIsIGFsbCB0aGUgc2FtZSByZWQgbGF0ZXJpdGUgYW5kIHRoZXJlZm9yZVxuICAgKiBPTkUgY29tcG9uZW50IGFuZCBPTkUgZHJhdyBjYWxsLlxuICAgKlxuICAgKiBUaGUgc3RhaXIgaXMgY3V0IG91dCBvZiB0aGUgcGxhdGZvcm0gUExBTiBhcyBhIG5vdGNoLiBFdmVyeXRoaW5nIGhlcmUgaXMgYnVpbHQgd2l0aCB0aGF0IG5vdGNoXG4gICAqIG9uICtYIGFuZCB0aGUgd2hvbGUgbWVyZ2VkIGdlb21ldHJ5IGlzIHRoZW4gcm90YXRlZCBhIHF1YXJ0ZXIgdHVybiBvbnRvICtaLCBzbyB0aGUgc3RhaXIgYW5kXG4gICAqIHRoZSBzYW5jdHVhcnkncyBvbmUgcmVhbCBkb29yd2F5IGVuZCB1cCBvbiB0aGUgc2FtZSBlbGV2YXRpb24gLS0gd2hpY2ggaXMgd2hhdCB0aGUgcGxhdGUgc2hvd3NcbiAgICogYW5kIGlzIHRoZSBvbmx5IHJlYXNvbiBlaXRoZXIgb2YgdGhlbSBpcyB3aGVyZSBpdCBpcy4gKi9cbiAge1xuICAgIGNvbnN0IE4gPSBHLm5vdGNoLCBTVCA9IEcuc3RhaXIsIFAgPSBHLnBhcmFwZXQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSAoRy5wbGF0Zm9ybSBhcyBudW1iZXJbXVtdKS5tYXAoXG4gICAgICAoW3kwLCB5MSwgYV0pID0+IGV4dHJ1ZGVTbGFiKG5vdGNoZWRTcXVhcmUoYSwgTi5oYWxmWiwgTi54SW5uZXIpLCB5MCwgeTEpKTtcblxuICAgIC8vIFBhcmFwZXQgZW5jbG9zdXJlLCBzdGFuZGluZyBpbnNpZGUgdGhlIHBsYXRmb3JtIGVkZ2Ugb24gYSBsZWRnZS4gU2lkZSBydW5zIGNhcnJ5IHRoZSBmdWxsXG4gICAgLy8gZGVwdGgsIGZyb250IGFuZCBiYWNrIHJ1bnMgc3RvcCBiZXR3ZWVuIHRoZW06IHJ1biB0byBmdWxsIHdpZHRoLCBldmVyeSBjb3JuZXIgd291bGQgcHV0XG4gICAgLy8gdHdvIG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICBjb25zdCBiaSA9IFAub3V0ZXIgLSBQLnRoaWNrLCBiYyA9IFAub3V0ZXIgLSBQLnRoaWNrIC8gMiwgYmggPSBQLnkxIC0gUC55MCwgYnkgPSAoUC55MCArIFAueTEpIC8gMjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC1iYywgYnksIDAsIFAudGhpY2ssIGJoLCBQLm91dGVyICogMikpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgYnksIGJjLCBiaSAqIDIsIGJoLCBQLnRoaWNrKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBieSwgLWJjLCBiaSAqIDIsIGJoLCBQLnRoaWNrKSk7XG4gICAgY29uc3Qgc2VnTGVuID0gUC5vdXRlciAtIE4uaGFsZlo7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIChOLmhhbGZaICsgUC5vdXRlcikgLyAyLCBQLnRoaWNrLCBiaCwgc2VnTGVuKSk7XG4gICAgcGFydHMucHVzaChib3hBdChiYywgYnksIC0oTi5oYWxmWiArIFAub3V0ZXIpIC8gMiwgUC50aGljaywgYmgsIHNlZ0xlbikpO1xuXG4gICAgLy8gU2l4IHNoYWxsb3cgdHJlYWRzLCBlYWNoIG9jY3VweWluZyBvbmx5IGl0cyBvd24gZ29pbmcuIFN0YWNrZWQgd2VkZ2VzIGFsbCByZWFjaGluZyB4PTYuMDBcbiAgICAvLyB3b3VsZCBwdXQgc2l4IG91dGVyIGZhY2VzIGluIG9uZSBwbGFuZSBmYWNpbmcgb25lIHdheS5cbiAgICBjb25zdCBydW4gPSAoU1QueDEgLSBTVC54MCkgLyBTVC5zdGVwcywgcmlzZSA9IFNULnRvcCAvIFNULnN0ZXBzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykge1xuICAgICAgY29uc3QgeDEgPSBTVC54MSAtIGkgKiBydW4sIGggPSAoaSArIDEpICogcmlzZTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoeDEgLSBydW4gLyAyLCBoIC8gMiwgMCwgcnVuLCBoLCBTVC50cmVhZEhhbGZaICogMikpO1xuICAgIH1cblxuICAgIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgZ2VvLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAvLyArWCBub3RjaCAtPiArWiwgam9pbmluZyB0aGUgc3RhaXIgdG8gdGhlIGRvb3J3YXkgZWxldmF0aW9uXG4gICAgLy8gR3JvdW5kIGRpcnQgYW5kIHRoZSBkYXJrZXIgd2VhdGhlcmluZyBvZiB0aGUgbG93ZXIgY291cnNlcywgYXMgYSBwZXItdmVydGV4IHRpbnQgcmF0aGVyIHRoYW5cbiAgICAvLyBhIHNlY29uZCBtYXRlcmlhbDogdGhlIHBsYXRlJ3MgYm90dG9tIGNvdXJzZXMgbWVhc3VyZSBkaXN0aW5jdGx5IGRhcmtlciB0aGFuIHRoZSBlbmNsb3N1cmUuXG4gICAgdGludEJ5SGVpZ2h0KGdlbywgMCwgMS4yMCwgWzAuNzgsIDAuNzksIDAuODBdKTtcbiAgICBib3hVdihnZW8sIEcud2Vhci5sYXRlcml0ZS50aWxlKTtcbiAgICBhZGQoJ3BsYXRmb3JtJywgJ0xhdGVyaXRlIHBsYXRmb3JtLCBlbmNsb3N1cmUgYW5kIHN0YWlyJywgZ2VvLCAnbGF0ZXJpdGUnKTtcbiAgICBjb2xsaWRlcnNbJ3BsYXRmb3JtJ10gPSB7XG4gICAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgNC41LCAwXSwgaGFsZkV4dGVudHM6IFs2LjAsIDQuNSwgNi4wXSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZTsgYSBsZXZlbCAnXG4gICAgICAgICAgICsgJ2J1aWxkZXIgY29sbGlkZXMgd2l0aCB0aGUgc2FuY3R1YXJ5LCBub3Qgd2l0aCBpdHMgZmFsbGVuIGJsb2Nrcy4nLFxuICAgIH07XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHNhbmN0dWFyeSB0b3dlclxuICAgKiBCYXNlIG1vdWxkaW5nLCBib2R5LCB0aGUgdGhyZWUtYmFuZCBlbnRhYmxhdHVyZSwgdHdvIHRpZXJzIHdpdGggdGhlaXIgbWluaWF0dXJlIGFlZGljdWxlcyBhbmRcbiAgICogY29ybmVyIGJsb2NrcywgYWxsIHNhbmRzdG9uZSBhbmQgYWxsIE9ORSBjb21wb25lbnQuIFRoZSBwbGFuIGlzIHJlZGVudGVkLCBhcyBhIEtobWVyIHRvd2VyJ3NcbiAgICogaXMsIGFuZCBlYWNoIHNsYWIgaXMgb25lIGNsb3NlZCB0d2VudHktcG9pbnQgcG9seWdvbiByYXRoZXIgdGhhbiBjcm9zc2VkIGJveGVzIC0tIGNvcnJlY3RcbiAgICogc2hhcGUsIGFuZCBubyBpbnRlcmlvciBjb2luY2lkZW5jZS4gQ29uc2VjdXRpdmUgc2xhYnMgbWVldCB0b3AtdG8tYm90dG9tIGFzIG9wcG9zZWQgZmFjZXMuICovXG4gIHtcbiAgICBjb25zdCBUID0gRy50b3dlciwgQiA9IEcuYmFzZSwgVDEgPSBHLnRpZXIxLCBDMSA9IEcudGllcjFjYXAsIFQyID0gRy50aWVyMjtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIHBhcnRzLnB1c2goZXh0cnVkZVNsYWIocmVkZW50ZWRTaGFwZShCLmEsIEIuciksIEIueTAsIEIueTEpKTtcbiAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUoVC5hLCBULnIpLCBULnkwLCBULnkxKSk7XG4gICAgZm9yIChjb25zdCBbeTAsIHkxLCBhXSBvZiBHLmNvcm5pY2UgYXMgbnVtYmVyW11bXSkge1xuICAgICAgcGFydHMucHVzaChleHRydWRlU2xhYihyZWRlbnRlZFNoYXBlKGEsIGEgKiAwLjEyKSwgeTAsIHkxKSk7XG4gICAgfVxuICAgIHBhcnRzLnB1c2goZXh0cnVkZVNsYWIocmVkZW50ZWRTaGFwZShUMS5hLCBUMS5hICogMC4xNiksIFQxLnkwLCBUMS55MSkpO1xuICAgIHBhcnRzLnB1c2goZXh0cnVkZVNsYWIocmVkZW50ZWRTaGFwZShDMS5hLCBDMS5hICogMC4xNiksIEMxLnkwLCBDMS55MSkpO1xuICAgIHBhcnRzLnB1c2goZXh0cnVkZVNsYWIocmVkZW50ZWRTaGFwZShUMi5hLCBUMi5hICogMC4xNiksIFQyLnkwLCBUMi55MSkpO1xuICAgIC8vIEVhY2ggdGllciByZXBlYXRzIHRoZSBib2R5J3MgZmFsc2UgZG9vciBpbiBtaW5pYXR1cmUsIG9uZSBwcm91ZCBwYW5lbCBwZXIgZmFjZS4gT24gdGhlXG4gICAgLy8gcGxhdGUgdGhlc2Ugc21hbGwgYWVkaWN1bGVzIGFyZSB3aGF0IG1ha2UgdGhlIHJvb2YgcmVhZCBhcyBhIHN0YWNrIG9mIHNocmluZXMgcmF0aGVyIHRoYW5cbiAgICAvLyBhcyBhIHN0ZXBwZWQgYm94LlxuICAgIGZvciAoY29uc3QgW3RpZXIsIGFdIG9mIFtbVDEsIFQxLmFdLCBbVDIsIFQyLmFdXSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZCA9IHRpZXIuYWVkO1xuICAgICAgY29uc3QgcGFuZWwgPSBib3hBdCgwLCAoZC55MCArIGQueTEpIC8gMiwgYSArIGQucHJvdWQgLyAyLCBkLncsIGQueTEgLSBkLnkwLCBkLnByb3VkKTtcbiAgICAgIHBhcnRzLnB1c2goLi4ucXVhZE1lcmdlKHBhbmVsKSk7XG4gICAgfVxuICAgIC8vIENvcm5lciBibG9ja3Mgb24gdGhlIGZpcnN0IHRpZXIncyBjYXAgbGVkZ2UgLS0gYWNyb3RlcmlhIC0tIG9uIFRIUkVFIGNvcm5lcnMuIFRoZSBmb3VydGgsXG4gICAgLy8gKCtYLCAtWiksIGlzIHRoZSBvbmUgdGhhdCBoYXMgZmFsbGVuOyBpdHMgYmxvY2tzIGxpZSBvbiB0aGUgbGVkZ2UgYW5kIHRoZSBjb3JuaWNlIGJlbG93LlxuICAgIHtcbiAgICAgIC8vIE9uIHRoZSBsZWRnZSB0aGF0IEVYSVNUUzogdGhlIGNhcCBwbGFuIGlzIHJlZGVudGVkLCBzbyBpdHMgZ2VvbWV0cmljIGNvcm5lciBpcyBjdXQgYmFjayBhbmRcbiAgICAgIC8vIGEgYmxvY2sgcHV0IGF0IChhLCBhKSBoYW5ncyBvdmVyIG5vdGhpbmcgLS0gd2hpY2ggaXMgZXhhY3RseSB3aGF0IHRoZSBzZWNvbmQgYnVpbGQgc2hpcHBlZCxcbiAgICAgIC8vIGFuZCBpdCByZWFkIGFzIGZsb2F0aW5nIGRlYnJpcy4gVGhlIGxlZGdlIGF0IHRoZSBjb3JuZXIgaXMgdGhlIHNxdWFyZSBiZXR3ZWVuIHRoZSBzZWNvbmRcbiAgICAgIC8vIHRpZXIncyBjdXQtYmFjayBhbmQgdGhlIGNhcCdzLCB4IGFuZCB6IGJvdGggaW4gW2EtMnIsIGEtcl0uXG4gICAgICBjb25zdCBjID0gQzEuY29ybmVyLCBvID0gQzEuYSAtIEMxLmEgKiAwLjE2IC0gYyAvIDIgLSAwLjAyO1xuICAgICAgZm9yIChjb25zdCBbc3gsIHN6XSBvZiBbWzEsIDFdLCBbLTEsIDFdLCBbLTEsIC0xXV0pIHtcbiAgICAgICAgcGFydHMucHVzaChib3hBdChzeCAqIG8sIEMxLnkxICsgYyAvIDIsIHN6ICogbywgYywgYywgYykpO1xuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGJveFV2KGdlbywgU0FORC50aWxlKTtcbiAgICB0aW50QnlGYWNpbmcoZ2VvLCBTQU5ELnNpZGUsIFNBTkQuY3J1c3QpO1xuICAgIGFkZCgndG93ZXInLCAnU2FuY3R1YXJ5IHRvd2VyIGFuZCByb29mIHRpZXJzJywgZ2VvLCAnc2FuZHN0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbGxhcHNlZCB0b3AgdGllclxuICAgKiBUaGUgdG9wIHRpZXIgaXMgYXV0aG9yZWQgYXMgYSBQQVJUSUFMIHJpbmcgd2l0aCB0aGUgKCtYLCAtWikgY29ybmVyIGdvbmUgLS0gdGhlIHNhbWUgY29ybmVyXG4gICAqIHdob3NlIGFjcm90ZXJpb24gaXMgbWlzc2luZyBiZWxvdyBpdCBhbmQgd2hvc2UgYmxvY2tzIGxpZSBvbiB0aGUgbGVkZ2VzIGFuZCB0aGUgcGxhdGZvcm0uIFRoYXRcbiAgICogaXMgdGhlIHdob2xlIGRpZmZlcmVuY2UgYmV0d2VlbiB0aGlzIGFzc2V0IGFuZCBhbiBpbnRhY3QgdG93ZXIsIGFuZCB0aGUgcmVnaXN0cnkgbm90ZXMgYXNrXG4gICAqIGZvciBpdCBleHBsaWNpdGx5LiBGb3VyIHJ1bnMsIHR3byBvZiB0aGVtIHN0b3BwaW5nIHNob3J0IG9mIHRoZSBmYWxsZW4gY29ybmVyLCBhdCB0d28gaGVpZ2h0c1xuICAgKiBzbyB0aGUgYnJlYWsgcmVhZHMgYXMgbWFzb25yeSBnaXZpbmcgd2F5IHJhdGhlciB0aGFuIGEgd2FsbCB0aGF0IHdhcyBkcmF3biBzaG9ydGVyLiAqL1xuICB7XG4gICAgY29uc3QgUiA9IEcuYnJva2VuVGllcjtcbiAgICBjb25zdCBoID0gUi55MSAtIFIueTAsIHQgPSBSLnQsIGEgPSBSLmEsIGFpID0gYSAtIHQ7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKFtcbiAgICAgIGJveEF0KC0oYSAtIHQgLyAyKSwgUi55MCArIGggLyAyLCAwLCB0LCBoLCBhICogMiksICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAtWCwgZnVsbFxuICAgICAgYm94QXQoMCwgUi55MCArIGggLyAyLCBhIC0gdCAvIDIsIGFpICogMiwgaCwgdCksICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICtaLCBiZXR3ZWVuXG4gICAgICBib3hBdChhIC0gdCAvIDIsIFIueTAgKyBoICogMC4zNiwgKGEgLSAwLjUpIC8gMiwgdCwgaCAqIDAuNzIsIGEgKyAwLjUpLCAgICAgICAgICAgIC8vICtYLCBzdG9wcyBhdCB6PS0wLjVcbiAgICAgIGJveEF0KCgtYWkgKyAwLjkpIC8gMiwgUi55MCArIGggKiAwLjQzLCAtKGEgLSB0IC8gMiksIGFpICsgMC45LCBoICogMC44NiwgdCksICAgICAgLy8gLVosIHN0b3BzIGF0IHg9KzAuOVxuICAgIF0pO1xuICAgIGJveFV2KGdlbywgU0FORC50aWxlKTtcbiAgICB0aW50QnlGYWNpbmcoZ2VvLCBTQU5ELnNpZGUsIFNBTkQuY3J1c3QpO1xuICAgIGFkZCgnYnJva2VuLXRpZXInLCAnQ29sbGFwc2VkIHRvcCB0aWVyJywgZ2VvLCAnc2FuZHN0b25lJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRvb3IgYWVkaWN1bGVzXG4gICAqIEZvdXIgZmFjZXMsIGVhY2ggd2l0aCB0aGUgS2htZXIgZG9vciBzdXJyb3VuZCB0aGUgcGxhdGUgc2hvd3M6IHR3byBSSU5HRUQgQ09MT05ORVRURVMgc3RhbmRpbmdcbiAgICogaW4gZnJvbnQgb2YgcGxhaW4gamFtYnMsIGEgZGVlcCBsaW50ZWwgb3ZlciB0aGVtLCBhIHRhbGwgcG9pbnRlZCBwZWRpbWVudCBhYm92ZSB0aGF0LCBhbmQgYVxuICAgKiB0aHJlc2hvbGQgc3RlcCBhdCB0aGUgZm9vdC4gVGhlIGZpcnN0IGJ1aWxkIGNhcnJpZWQgamFtYnMgYW5kIGEgbGludGVsIG9ubHksIGFuZCB0aGUgcmVuZGVyXG4gICAqIHJlYWQgYXMgYSBnYXJhZ2UuIE9uZSBpbnN0YW5jZWQgdW5pdCwgZm91ciByb3RhdGlvbnMsIG9uZSBnZW9tZXRyeS4gKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRvd2VyLCBEID0gRy5kb29yO1xuICAgIGNvbnN0IGZhY2UgPSBULmE7XG4gICAgY29uc3QgaHcgPSBELncgLyAyICsgRC5qYW1iO1xuICAgIGNvbnN0IGhGID0gRC5oZWFkIC0gRC5zaW5rRnJhbWU7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICAvLyBKYW1iIGZyb250cyBhdCBmYWNlKzAuMjUsIFBST1VEIG9mIHRoZSBiYXNlIG1vdWxkaW5nJ3MgZmFjZSBhdCBmYWNlKzAuMjA6IGxldmVsIHdpdGggaXQsXG4gICAgICAvLyB0aGUgdHdvIHBsYW5lcyBjb2luY2lkZSBvdmVyIHRoZSBwbGludGgncyBoZWlnaHQgYW5kIHRlYXIuXG4gICAgICBib3hBdCgtKEQudyAvIDIgKyBELmphbWIgLyAyKSwgRC5zaW5rRnJhbWUgKyBoRiAvIDIsIGZhY2UgKyAwLjEwLCBELmphbWIsIGhGLCAwLjMwKSxcbiAgICAgIGJveEF0KEQudyAvIDIgKyBELmphbWIgLyAyLCBELnNpbmtGcmFtZSArIGhGIC8gMiwgZmFjZSArIDAuMTAsIEQuamFtYiwgaEYsIDAuMzApLFxuICAgICAgYm94QXQoMCwgRC5oZWFkICsgRC5saW50ZWwgLyAyLCBmYWNlICsgMC4xMCwgaHcgKiAyICsgMC4yOCwgRC5saW50ZWwsIDAuNDQpLFxuICAgICAgLy8gdGhyZXNob2xkIHN0ZXAsIHJ1bm5pbmcgYmFjayBJTlRPIHRoZSBiYXNlIG1vdWxkaW5nIHNvIHRoZXJlIGlzIG5vIHNsb3QgYmV0d2VlbiB0aGVtXG4gICAgICBib3hBdCgwLCAxLjIwICsgMC4xMSwgZmFjZSArIDAuNTUsIEQudyArIDAuNzAsIDAuMjIsIDAuODApLFxuICAgIF07XG4gICAgLy8gQ29sb25uZXR0ZXM6IGFuIGVuZ2FnZWQgY29sdW1uIGVhY2ggc2lkZSB3aXRoIHRocmVlIHJpbmcgY29sbGFycywgdGhlIHBsYXRlJ3MgbW9zdFxuICAgIC8vIHJlY29nbmlzYWJsZSBkb29yIGZlYXR1cmUuIFRlbiBzZWdtZW50cyAtLSB0aGV5IGFyZSAwLjMwIG0gYWNyb3NzIG9uIGEgMTIgbSBwcm9wLlxuICAgIGZvciAoY29uc3QgcyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCB4ID0gcyAqIEQuY29sLngsIHogPSBmYWNlICsgMC4yMDtcbiAgICAgIHBhcnRzLnB1c2goY3lsQXQoeCwgRC5zaW5rRnJhbWUgKyBoRiAvIDIsIHosIEQuY29sLnIsIEQuY29sLnIsIGhGLCAxMCkpO1xuICAgICAgZm9yIChjb25zdCB5IG9mIFsxLjU1LCAyLjI1LCAyLjk1XSkgcGFydHMucHVzaChjeWxBdCh4LCB5LCB6LCBELmNvbC5yaW5nLCBELmNvbC5yaW5nLCAwLjEwLCAxMCkpO1xuICAgIH1cbiAgICAvLyBUaGUgcGVkaW1lbnQ6IGEgdGFsbCBwYW5lbCB3aXRoIGEgcG9pbnRlZCBoZWFkLCBzdGFuZGluZyBvbiB0aGUgbGludGVsIGFuZCBzdG9wcGluZyBqdXN0XG4gICAgLy8gdW5kZXIgdGhlIGZpcnN0IGNvcm5pY2UgYmFuZC4gSW4gdGhlIHBsYXRlIGl0IGlzIHRoZSBjYXJ2ZWQgbmFnYS1mcmFtZSBvdmVyIHRoZSBkb29yLlxuICAgIHtcbiAgICAgIGNvbnN0IHkwID0gRC5oZWFkICsgRC5saW50ZWwsIHcgPSBodyArIDAuMTQ7XG4gICAgICBjb25zdCBzaCA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2gubW92ZVRvKC13LCB5MCk7IHNoLmxpbmVUbyh3LCB5MCk7IHNoLmxpbmVUbyh3LCB5MCArIDAuNDApO1xuICAgICAgc2gubGluZVRvKHcgKiAwLjcwLCB5MCArIDAuNTgpOyBzaC5saW5lVG8odyAqIDAuMzYsIHkwICsgMC43OCk7IHNoLmxpbmVUbygwLCB5MCArIDAuODgpO1xuICAgICAgc2gubGluZVRvKC13ICogMC4zNiwgeTAgKyAwLjc4KTsgc2gubGluZVRvKC13ICogMC43MCwgeTAgKyAwLjU4KTsgc2gubGluZVRvKC13LCB5MCArIDAuNDApO1xuICAgICAgc2guY2xvc2VQYXRoKCk7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVBbG9uZ1ooc2gsIGZhY2UgLSAwLjA1LCBmYWNlICsgMC4yOCkpOyAgIC8vIGJhY2sgYnVyaWVkIGluIHRoZSB3YWxsLCBub3QgZmxvYXRpbmcgb2ZmIGl0XG4gICAgfVxuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGJveFV2KHVuaXQsIFNBTkQudGlsZSk7XG4gICAgdGludEJ5RmFjaW5nKHVuaXQsIFNBTkQuc2lkZSwgU0FORC5jcnVzdCk7XG4gICAgYWRkSW5zdCgnZG9vci1mcmFtZXMnLCAnRG9vciBhZWRpY3VsZXMnLCB1bml0LCAnc2FuZHN0b25lJywgcXVhZCgwLCAwKSk7XG5cbiAgICAvLyBUSFJFRSBibGluZCBkb29ycyBhbmQgT05FIHJlYWwgb3BlbmluZy4gQSBLaG1lciBzYW5jdHVhcnkgaGFzIGEgc2luZ2xlIGNlbGwgYW5kIGZhbHNlIGRvb3JzXG4gICAgLy8gb24gdGhlIG90aGVyIHRocmVlIGZhY2VzLCBzbyB0aGUgc2V0IGlzIGRlbGliZXJhdGVseSBub3QgZm91ciBpZGVudGljYWwgdGhpbmdzOiBxdWFkKCknc1xuICAgIC8vIGZpcnN0IHJvdGF0aW9uIGlzIHRoZSBpZGVudGl0eSwgd2hpY2ggcHV0cyBpbmRleCAwIG9uICtaLCBhbmQgdGhhdCBpcyB0aGUgZmFjZSBsZWZ0IG9wZW4uXG4gICAgLy8gVGhlIGJsaW5kIHBhbmVscyBzdGFuZCAwLjEwIG0gUFJPVUQgb2YgdGhlIHdhbGwgYmV0d2VlbiB0aGUgamFtYnMgd2l0aCBhIGNlbnRyYWwgcmliIGFcbiAgICAvLyBmdXJ0aGVyIDAuMDYgcHJvdWQgLS0gdGhlIGNsb3NlZCBsZWF2ZXMgb2YgYSBLaG1lciBmYWxzZSBkb29yLiBGbHVzaCBhbmQgdGhlIHNhbWUgc3RvbmUgYXNcbiAgICAvLyB0aGUgd2FsbCwgdGhleSB3ZXJlIGludmlzaWJsZTogd2l0aCBubyBjb2xvdXIgdG8gc3BlbmQsIGRlcHRoIGlzIHdoYXQgc2F5cyAnZG9vcicuXG4gICAgY29uc3QgaEIgPSBELmhlYWQgLSBELnNpbmtCbGluZDtcbiAgICBjb25zdCBibGluZCA9IG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgwLCBELnNpbmtCbGluZCArIGhCIC8gMiwgZmFjZSArIDAuMDUsIEQudywgaEIsIDAuMTApLFxuICAgICAgYm94QXQoMCwgRC5zaW5rQmxpbmQgKyBoQiAvIDIgKyAwLjA1LCBmYWNlICsgMC4wOSwgMC4zMiwgaEIgLSAwLjMwLCAwLjE0KSxcbiAgICBdKTtcbiAgICBib3hVdihibGluZCwgU0FORC50aWxlKTtcbiAgICB0aW50QnlGYWNpbmcoYmxpbmQsIFNBTkQuc2lkZSwgU0FORC5zaWRlKTtcbiAgICBhZGRJbnN0KCdibGluZC1kb29ycycsICdCbGluZCBkb29yIHBhbmVscycsIGJsaW5kLCAnc2FuZHN0b25lJywgcXVhZCgwLCAwKS5zbGljZSgxKSk7XG5cbiAgICAvLyBUaGUgb25lIHJlYWwgZG9vcndheS4gSXQgc2l0cyAwLjAyIG0gUFJPVUQgb2YgdGhlIHdhbGwgZmFjZSwgbm90IGJlaGluZCBpdDogdGhlIHRvd2VyIGlzIGFcbiAgICAvLyBTT0xJRCBtYXNzLCBzbyBhIHBhbmVsIHJlY2Vzc2VkIGludG8gaXQgaXMgaW5zaWRlIHRoZSBzb2xpZCBhbmQgaW52aXNpYmxlLiBUaGUgb3BlbmluZ1xuICAgIC8vIHJlYWRzIGFzIGFuIG9wZW5pbmcgYmVjYXVzZSB0aGUgY29sb25uZXR0ZXMsIGphbWJzIGFuZCBsaW50ZWwgc3RhbmQgaW4gZnJvbnQgb2YgaXQuXG4gICAgY29uc3QgaFYgPSBELmhlYWQgLSBELnNpbmtWb2lkO1xuICAgIGFkZCgnZG9vcndheScsICdPcGVuIGRvb3J3YXknLCBib3hBdCgwLCBELnNpbmtWb2lkICsgaFYgLyAyLCBmYWNlICsgMC4wNDUsIEQudywgaFYsIDAuMDUpLCAndm9pZCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmYWxsZW4gYmxvY2tzXG4gICAqIFRoaXJ0eSBibG9ja3MgYXMgT05FIEluc3RhbmNlZE1lc2g6IGEgaGVhcCBvbiB0aGUgdHJ1bmNhdGVkIHRvcCwgdGhlIHNsaWRlIG9mIHRoZSBmYWxsZW5cbiAgICogY29ybmVyIGRvd24gdGhlIGxlZGdlcywgYW5kIHRoZSBzY2F0dGVyIGFjcm9zcyB0aGUgcGxhdGZvcm0uIEV2ZXJ5IHBsYWNlbWVudCBpcyBBVVRIT1JFRCAtLVxuICAgKiBwb3NpdGlvbiwgeWF3LCB0aWx0LCBub24tdW5pZm9ybSBzY2FsZSBhbmQgdG9uZSAtLSBub3QgaGFzaGVkLCBzbyB0aGUgdG9wIG9mIHRoZSBkZWNsYXJlZFxuICAgKiA5LjAwIG0gaXMgYSBibG9jayBwdXQgdGhlcmUgb24gcHVycG9zZS4gVGhpcyBpcyB0aGUgY29tcG9uZW50IHRoYXQgbWFrZXMgdGhlIHByb3AgYSBydWluXG4gICAqIHJhdGhlciB0aGFuIGEgYnVpbGRpbmcuICovXG4gIHtcbiAgICBjb25zdCBVID0gRy5ibG9ja3MudW5pdCBhcyBudW1iZXJbXTtcbiAgICBjb25zdCB1bml0ID0gYm94QXQoMCwgMCwgMCwgVVswXSwgVVsxXSwgVVsyXSk7XG4gICAgYm94VXYodW5pdCwgRy53ZWFyLnJ1YmJsZS50aWxlKTtcbiAgICBjb25zdCBsaXN0ID0gRy5ibG9ja3MubGlzdCBhcyBudW1iZXJbXVtdO1xuICAgIC8vIEVhY2ggYmxvY2sgaXMgc3VuayBhIGZldyBESVNUSU5DVCBtaWxsaW1ldHJlcyBpbnRvIHdoYXRldmVyIGl0IGxpZXMgb24uIExldmVsIHdpdGggaXQsIGl0c1xuICAgIC8vIHVuZGVyc2lkZSBzaXRzIGluIHRoZSBzYW1lIHBsYW5lIGFzIHRoZSB0b3dlcidzIG93biBiYXNlIGFuZCBpdHMgbmVpZ2hib3VycycgdW5kZXJzaWRlcyxcbiAgICAvLyBhbGwgZmFjaW5nIGRvd24gLS0gZWxldmVuIGNvcGxhbmFyIGNvLWZhY2luZyBwYWlycyBpbiB0aGUgZmlyc3QgcmVuZGVyIG9mIHRoaXMgYnVpbGQuXG4gICAgY29uc3QgbWF0cyA9IGxpc3QubWFwKChbeCwgeSwgeiwgeWF3LCB0eCwgdHosIHN4LCBzeSwgc3pdLCBpKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5IC0gMC4wMDQgKiAoMSArIChpICUgOSkpLCB6KSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUV1bGVyKG5ldyBUSFJFRS5FdWxlcih0eCwgeWF3LCB0eikpLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoc3gsIHN5LCBzeikpKTtcbiAgICAvLyBQZXItaW5zdGFuY2UgdG9uZXMsIGFsbCBtZWFzdXJlZCBvZmYgYmxvY2tzIGluIHRoZSBwbGF0ZTogdGhlIHBlYWNoIG9mIGEgZnJlc2hseSBicm9rZW5cbiAgICAvLyBmYWNlICgyMTksMTY1LDEyOCksIGEgY3JlYW0gd2VhdGhlcmVkIGZhY2UsIHRoZSB0b3dlcidzIG93biBzdG9uZSwgYW5kIGEgZGFyayBvbmUuIE9uZVxuICAgIC8vIG1hdGVyaWFsLCBvbmUgZ2VvbWV0cnksIGZvdXIgc3RvbmVzIC0tIGFuZCB0aGUgbWF0ZXJpYWwgaXMgd2hpdGUgYmVjYXVzZSBzZXRDb2xvckF0XG4gICAgLy8gbXVsdGlwbGllcyByYXRoZXIgdGhhbiByZXBsYWNlcy5cbiAgICBjb25zdCB0b25lcyA9IEcuYmxvY2tzLnRvbmVzIGFzIG51bWJlcltdO1xuICAgIGFkZEluc3QoJ2ZhbGxlbi1ibG9ja3MnLCAnRmFsbGVuIGJsb2NrcycsIHVuaXQsICdwYWxlJywgbWF0cywgbGlzdC5tYXAoKGIpID0+IHRvbmVzW2JbOV1dKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHdlYXRoZXJpbmdcbiAgICogVGhlIHBsYXRlJ3MgdHdvIHN0b25lcyBhcmUgbm90IGZsYXQuIFRoZSBsYXRlcml0ZSBpcyBsYWlkIGluIHZpc2libGUgY291cnNlcyB3aXRoIHdpZGUgZGFya1xuICAgKiBqb2ludHMgYW5kIGl0cyBmYWNlIGlzIHBlcHBlcmVkIHdpdGggdmVzaWN1bGFyIHBpdHM7IHRoZSBzYW5kc3RvbmUgaXMgdGlnaHQgYXNobGFyIHN0cmVha2VkXG4gICAqIEJMQUNLIGRvd24gdGhlIHBpbGFzdGVycyBhbmQgY3J1c3RlZCBPUkFOR0Ugd2l0aCBsaWNoZW4gb24gZXZlcnkgbGVkZ2UuIFRoZSBmaXJzdCBidWlsZCBsZWZ0XG4gICAqIGFsbCBvZiBpdCBvdXQgYW5kIHJlYWQgYXMgYSBjbGF5IG1vZGVsLlxuICAgKlxuICAgKiBJdCBpcyBkZWxpdmVyZWQgYXMgdGhyZWUgQ2FudmFzIDJEIHRpbGVzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgdGhlIGNoZWRpJ3NcbiAgICogcm91dGU6IHRoZSBzY3VscHQgbWF0ZXJpYWxzIHN0YXkgZGVjbGFyZWQgdGV4dHVyZWxlc3MgKG5vIGZpdmUtY2FudmFzIHByb2NlZHVyYWwgc2V0LCBub1xuICAgKiBwZXItcGl4ZWwgSmF2YVNjcmlwdCwgYW5kIHRoZSBtZWFzdXJlZCBhbGJlZG8gaXMgTk9UIHRocm93biBhd2F5KSwgYW5kIGVhY2ggdGlsZSBpcyBhIGZld1xuICAgKiBodW5kcmVkIFBhdGgyRCBmaWxscyBhdCA1MTIgcHggLS0gc2luZ2xlLWRpZ2l0IG1pbGxpc2Vjb25kcy4gRWFjaCBpcyBhIE1VTFRJUExJRVIgb24gdGhlXG4gICAqIG1hdGVyaWFsIGNvbG91ciwgYm91bmQgYXMgYm90aCBtYXAgYW5kIGJ1bXBNYXAgc28gYSBqb2ludCByZWFkcyBhcyBhIGdyb292ZSBhbmQgYSBsaWNoZW4gY3J1c3RcbiAgICogYXMgYSByYWlzZWQgcGF0Y2ggcmF0aGVyIHRoYW4gYXMgcGFpbnQuXG4gICAqXG4gICAqIFRoZSBzYW5kc3RvbmUncyBsaWNoZW4gaXMgQlJJR0hURVIgdGhhbiB0aGUgY2xlYW4gc3RvbmUgaW4gcmVkLCBhbmQgYSBtdWx0aXBsaWVyIGNhbm5vdFxuICAgKiBicmlnaHRlbi4gU28gdGhlIG1hdGVyaWFsIGlzIHJlLWJhc2VkIGhlcmUgdG8gdGhlIGxpY2hlbiBFTlZFTE9QRSAtLSBwZXItY2hhbm5lbCBtYXggb2YgdGhlXG4gICAqIGNsZWFuIHN0b25lIGFuZCB0aGUgbGljaGVuIC0tIGFuZCB0aGUgY2xlYW4gc3RvbmUgaXMgcGFpbnRlZCBhcyAoMC43OSwgMC45NSwgMS4wKSBvZiBpdC4gVGhlXG4gICAqIGRpdmlzaW9uIGlzIGRvbmUgb24gTElORUFSIGNvbXBvbmVudHMgd2l0aCB0aGUgcmF0aW8gcmFpc2VkIHRvIDIuMiwgYmVjYXVzZSB0aGUgdGlsZSBpc1xuICAgKiBzUkdCIGFuZCB0aGUgc2hhZGVyIGRlY29kZXMgaXQgYmVmb3JlIG11bHRpcGx5aW5nLiBVbmRlciBOb2RlIC0tIGJhbmRzLm1qcyBhbmQgY2hlY2stY29wbGFuYXJcbiAgICogYm90aCBydW4gdGhpcyBmYWN0b3J5IHdpdGhvdXQgYSBET00gLS0gdGhlcmUgaXMgbm8gY2FudmFzLCBubyByZS1iYXNpbmcsIGFuZCB0aGUgbWF0ZXJpYWxcbiAgICogc2ltcGx5IGtlZXBzIGl0cyBmbGF0IG1lYXN1cmVkIGNvbG91ci4gKi9cbiAge1xuICAgIGNvbnN0IFcgPSBHLndlYXI7XG4gICAgY29uc3QgaGFzRG9tID0gdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgKGRvY3VtZW50IGFzIGFueSkuY3JlYXRlRWxlbWVudCA9PT0gJ2Z1bmN0aW9uJztcbiAgICBjb25zdCBzaXplID0gTWF0aC5taW4oVy5zaXplLCBvcHRpb25zLnRleHR1cmVTaXplID8/IFcuc2l6ZSk7XG4gICAgY29uc3QgY3NzID0gKHQ6IG51bWJlcltdLCBhOiBudW1iZXIpID0+XG4gICAgICAncmdiYSgnICsgTWF0aC5yb3VuZCh0WzBdICogMjU1KSArICcsJyArIE1hdGgucm91bmQodFsxXSAqIDI1NSkgKyAnLCcgKyBNYXRoLnJvdW5kKHRbMl0gKiAyNTUpICsgJywnICsgYSArICcpJztcbiAgICBjb25zdCBybmcgPSAoc2VlZDogbnVtYmVyKSA9PiAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuXG4gICAgZnVuY3Rpb24gbWFrZVRpbGUoc2VlZDogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHI6ICgpID0+IG51bWJlciwgUzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCkgPT4gdm9pZCk6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gICAgICBpZiAoIWhhc0RvbSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY3Yud2lkdGggPSBjdi5oZWlnaHQgPSBzaXplO1xuICAgICAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IFMgPSBzaXplO1xuICAgICAgLy8gRXZlcnkgbWFyayBpcyBidWlsdCBvbmNlIGFuZCBkcmF3biBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cywgc28gdGhlIHRpbGUgaXMgc2VhbWxlc3MgdW5kZXJcbiAgICAgIC8vIFJlcGVhdFdyYXBwaW5nOyB0aGUgc2hhcGVzIGFyZSBwcmVjb21wdXRlZCBiZWZvcmUgdGhlIG5pbmUgZmlsbHMgb3IgdGhlIGNvcGllcyBkaWZmZXIuXG4gICAgICBjb25zdCB3cmFwcGVkID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG94ID0gLTE7IG94IDw9IDE7IG94KyspIGZvciAobGV0IG95ID0gLTE7IG95IDw9IDE7IG95KyspIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKG94ICogUywgb3kgKiBTKTsgZm4oKTsgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGRyYXcoY3R4LCBybmcoc2VlZCksIFMsIHdyYXBwZWQpO1xuICAgICAgcmV0dXJuIGN2O1xuICAgIH1cblxuICAgIC8qKiBBc2hsYXIgY291cnNpbmc6IHRoZSB0aWxlIGlzIGFuIGV4YWN0IHdob2xlIG51bWJlciBvZiBjb3Vyc2VzIGFuZCBibG9ja3MsIGxhaWQgaW4gcnVubmluZ1xuICAgICAqICBib25kLCBkcmF3biBhcyBqaXR0ZXJlZCBxdWFkcmlsYXRlcmFscyBvdmVyIGEgam9pbnQtY29sb3VyZWQgZ3JvdW5kIHNvIHRoZSBqb2ludHMgY29tZSBvdXRcbiAgICAgKiAgaXJyZWd1bGFyIGZvciBmcmVlLiBFYWNoIGJsb2NrIGNhcnJpZXMgaXRzIG93biB0b25lIGZyb20gdGhlIG1lYXN1cmVkIHNwcmVhZC4gKi9cbiAgICBjb25zdCBjb3Vyc2luZyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgICBQOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJvd3MgPSBNYXRoLnJvdW5kKFAudGlsZSAvIFAuY291cnNlKSwgY29scyA9IE1hdGgucm91bmQoUC50aWxlIC8gUC5ibG9jayk7XG4gICAgICBjb25zdCBjaCA9IFMgLyByb3dzLCBidyA9IFMgLyBjb2xzLCBqID0gUC5qb2ludCAvIDI7XG4gICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuam9pbnRUb25lLCAxKTsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMpO1xuICAgICAgY29uc3QgYmxvY2tzOiB7IHA6IFBhdGgyRCwgdG9uZTogbnVtYmVyW10gfVtdID0gW107XG4gICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICBjb25zdCBvZmYgPSAocm93ICUgMikgKiBidyAvIDI7XG4gICAgICAgIGZvciAobGV0IGNvbCA9IDA7IGNvbCA8IGNvbHM7IGNvbCsrKSB7XG4gICAgICAgICAgY29uc3QgeDAgPSBjb2wgKiBidyArIG9mZiArIGosIHgxID0geDAgKyBidyAtIDIgKiBqLCB5MCA9IHJvdyAqIGNoICsgaiwgeTEgPSB5MCArIGNoIC0gMiAqIGo7XG4gICAgICAgICAgY29uc3QgcSA9ICgpID0+IChyKCkgLSAwLjUpICogUC5qb2ludCAqIDAuOTtcbiAgICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAgIHAubW92ZVRvKHgwICsgcSgpLCB5MCArIHEoKSk7IHAubGluZVRvKHgxICsgcSgpLCB5MCArIHEoKSk7XG4gICAgICAgICAgcC5saW5lVG8oeDEgKyBxKCksIHkxICsgcSgpKTsgcC5saW5lVG8oeDAgKyBxKCksIHkxICsgcSgpKTsgcC5jbG9zZVBhdGgoKTtcbiAgICAgICAgICBjb25zdCB0ID0gUC5ibG9ja0xvICsgKFAuYmxvY2tIaSAtIFAuYmxvY2tMbykgKiByKCk7XG4gICAgICAgICAgYmxvY2tzLnB1c2goeyBwLCB0b25lOiBbdCwgdCAqICgwLjk3ICsgMC4wMyAqIHIoKSksIHQgKiAoMC45NSArIDAuMDUgKiByKCkpXSB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgd3JhcHBlZCgoKSA9PiB7IGZvciAoY29uc3QgYiBvZiBibG9ja3MpIHsgY3R4LmZpbGxTdHlsZSA9IGNzcyhiLnRvbmUsIDEpOyBjdHguZmlsbChiLnApOyB9IH0pO1xuICAgIH07XG4gICAgLyoqIEFuIGlycmVndWxhciBwYXRjaDogYSByYW5kb20gV0FMSyBvZiBvdmVybGFwcGluZyBkaXNjcywgZmlsbGVkIG9uY2UgYXMgYSB1bmlvbi4gRGlzY3NcbiAgICAgKiAgc2NhdHRlcmVkIGFib3V0IGEgY2VudHJlIHJlbmRlciBhcyBwb2xrYSBkb3RzOyBhIHN0YWluIGlzIGEgd29ybSwgbm90IGEgc3BvdC4gKi9cbiAgICBjb25zdCBibG90Y2ggPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHI6ICgpID0+IG51bWJlciwgUzogbnVtYmVyLCB3cmFwcGVkOiAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCByYWQ6IG51bWJlciwgYWxwaGE6IG51bWJlciwgdmVydGljYWwgPSAwKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgaGFsbyA9IG5ldyBQYXRoMkQoKSwgY29yZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgbGV0IGN4ID0gcigpICogUywgY3kgPSByKCkgKiBTLCBhID0gcigpICogTWF0aC5QSSAqIDI7XG4gICAgICAgIGNvbnN0IFIgPSByYWQgKiBTICogKDAuNSArIHIoKSksIG4gPSA4ICsgTWF0aC5mbG9vcihyKCkgKiAxNik7XG4gICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgYSArPSAocigpIC0gMC41KSAqIDIuMjtcbiAgICAgICAgICAvLyBhIHZlcnRpY2FsIGJpYXMgdHVybnMgdGhlIHdhbGsgaW50byBhIHN0cmVhayBydW5uaW5nIGRvd24gdGhlIGZhY2VcbiAgICAgICAgICBjeCArPSBNYXRoLmNvcyhhKSAqIFIgKiAwLjQgKiAoMSAtIHZlcnRpY2FsKTsgY3kgKz0gTWF0aC5hYnMoTWF0aC5zaW4oYSkpICogUiAqIDAuNCAqICgxICsgdmVydGljYWwpIDtcbiAgICAgICAgICBjb25zdCByciA9IFIgKiAoMC4zNSArIDAuNSAqIHIoKSk7XG4gICAgICAgICAgaGFsby5tb3ZlVG8oY3ggKyByciwgY3kpOyBoYWxvLmFyYyhjeCwgY3ksIHJyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgY29yZS5tb3ZlVG8oY3ggKyByciAqIDAuNiwgY3kpOyBjb3JlLmFyYyhjeCwgY3ksIHJyICogMC42LCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWwgPSBhbHBoYSAqICgwLjYgKyAwLjQgKiByKCkpO1xuICAgICAgICB3cmFwcGVkKCgpID0+IHtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGFsICogMC41NSk7IGN0eC5maWxsKGhhbG8pO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYWwgKiAwLjQ1KTsgY3R4LmZpbGwoY29yZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgLyoqIFBpdHM6IHNtYWxsIGRhcmsgZWxsaXBzZXMsIHRoZSB2ZXNpY2xlcyBvZiBsYXRlcml0ZSBhbmQgdGhlIHBvY2tpbmcgb2Ygb2xkIHNhbmRzdG9uZS4gKi9cbiAgICBjb25zdCBwaXRzID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIG1heFB4OiBudW1iZXIsIGFscGhhOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBuZXcgUGF0aDJEKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHIoKSAqIFMsIHkgPSByKCkgKiBTLCByeCA9IDEgKyByKCkgKiBtYXhQeCwgcnkgPSByeCAqICgwLjYgKyAwLjYgKiByKCkpO1xuICAgICAgICBwLm1vdmVUbyh4ICsgcngsIHkpOyBwLmVsbGlwc2UoeCwgeSwgcngsIHJ5LCByKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7XG4gICAgICB9XG4gICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbHBoYSk7IGN0eC5maWxsKHApOyB9KTtcbiAgICB9O1xuICAgIC8qKiBGaW5lIGdyYWluOiBhIHNjYXR0ZXIgb2YgbmVhci10cmFuc3BhcmVudCBzcGVja3MsIHNvIGEgZmxhdCBhcmVhIGlzIG5vdCBmbGF0LiAqL1xuICAgIGNvbnN0IGdyYWluID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7IGNvbnN0IHggPSByKCkgKiBTLCB5ID0gcigpICogUywgZCA9IDAuNiArIHIoKSAqIDEuNDsgcC5yZWN0KHgsIHksIGQsIGQpOyB9XG4gICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbHBoYSk7IGN0eC5maWxsKHApOyB9KTtcbiAgICB9O1xuXG4gICAgLyoqIEJsYWNrIHdlYXRoZXJpbmcgc3RyZWFrczogdmVydGljYWwgYmFuZHMgc3RhcnRpbmcgaGFyZCB1bmRlciBhIGxlZGdlIGFuZCBmYWRpbmcgRE9XTiB0aGVcbiAgICAgKiAgZmFjZS4gdiBpcyB3b3JsZCBoZWlnaHQgb24gZXZlcnkgbWFwcGluZyBoZXJlIGFuZCB0aGUgY2FudmFzIGlzIGZsaXBwZWQgaW50byBVViBzcGFjZSwgc29cbiAgICAgKiAgZG93biB0aGUgY2FudmFzIGlzIGRvd24gdGhlIHByb3AuICovXG4gICAgY29uc3Qgc3RyZWFrcyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHIoKSAqIFMsIHkwID0gcigpICogUywgbGVuID0gUyAqICgwLjE1ICsgMC40NSAqIHIoKSksIHcgPSAxMiArIDQ0ICogcigpO1xuICAgICAgICBjb25zdCBhID0gYWxwaGEgKiAoMC41ICsgMC41ICogcigpKTtcbiAgICAgICAgd3JhcHBlZCgoKSA9PiB7XG4gICAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGNzcyh0b25lLCBhKSk7IGcuYWRkQ29sb3JTdG9wKDAuMzUsIGNzcyh0b25lLCBhICogMC43KSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyh0b25lLCAwKSk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCh4IC0gdyAvIDIsIHkwLCB3LCBsZW4pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqIFNvZnQgbG93LWZyZXF1ZW5jeSBtb3R0bGU6IGEgZmV3IGxhcmdlIGRpc2NzIGRyYXduIHRocm91Z2ggYSBjYW52YXMgYmx1ciwgc28gdGhlIHN0b25lJ3NcbiAgICAgKiAgdG9uZSBkcmlmdHMgY2xvdWQtbGlrZSBvdmVyIGhhbGYgYSBtZXRyZSBpbnN0ZWFkIG9mIHN0b3BwaW5nIGF0IGEgaGFyZCBlZGdlLiBIYXJkLWVkZ2VkXG4gICAgICogIHJhbmRvbS13YWxrIGJsb3RjaGVzIG9uIHRoaXMgcHJvcCByZWFkIGFzIENBTU9VRkxBR0UgUEFJTlQsIHdoaWNoIGlzIHRoZSBub3RlIHRoYXQgc2VudFxuICAgICAqICB0aGUgc2Vjb25kIGJ1aWxkIGJhY2suICovXG4gICAgY29uc3QgY2xvdWQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHI6ICgpID0+IG51bWJlciwgUzogbnVtYmVyLCB3cmFwcGVkOiAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIHJhZDogbnVtYmVyLCBhbHBoYTogbnVtYmVyLCBibHVyUHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWFya3M6IG51bWJlcltdW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgbWFya3MucHVzaChbcigpICogUywgcigpICogUywgcmFkICogUyAqICgwLjUgKyByKCkpLCBhbHBoYSAqICgwLjUgKyAwLjUgKiByKCkpXSk7XG4gICAgICB3cmFwcGVkKCgpID0+IHtcbiAgICAgICAgY3R4LmZpbHRlciA9ICdibHVyKCcgKyBibHVyUHggKyAncHgpJztcbiAgICAgICAgZm9yIChjb25zdCBbeCwgeSwgcnIsIGFdIG9mIG1hcmtzKSB7IGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYSk7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKiBTb2Z0IHdlYXRoZXJpbmcgd2FzaGVzOiB2ZXJ0aWNhbCBncmFkaWVudCBzdHJlYWtzIGZhZGluZyBET1dOIHRoZSBmYWNlLCBibHVycmVkIHNvIHRoZXlcbiAgICAgKiAgcmVhZCBhcyB3YXRlci1ib3JuZSBzdGFpbmluZyByYXRoZXIgdGhhbiBhcyBzdHJpcGVzLiAqL1xuICAgIGNvbnN0IHdhc2hlcyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIGFscGhhOiBudW1iZXIsIGJsdXJQeDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBtYXJrczogbnVtYmVyW11bXSA9IFtdO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSBtYXJrcy5wdXNoKFtyKCkgKiBTLCByKCkgKiBTLCBTICogKDAuMTUgKyAwLjQ1ICogcigpKSwgMTggKyA2MCAqIHIoKSwgYWxwaGEgKiAoMC41ICsgMC41ICogcigpKV0pO1xuICAgICAgd3JhcHBlZCgoKSA9PiB7XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnYmx1cignICsgYmx1clB4ICsgJ3B4KSc7XG4gICAgICAgIGZvciAoY29uc3QgW3gsIHkwLCBsZW4sIHcsIGFdIG9mIG1hcmtzKSB7XG4gICAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGNzcyh0b25lLCBhKSk7IGcuYWRkQ29sb3JTdG9wKDAuNCwgY3NzKHRvbmUsIGEgKiAwLjYpKTsgZy5hZGRDb2xvclN0b3AoMSwgY3NzKHRvbmUsIDApKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KHggLSB3IC8gMiwgeTAsIHcsIGxlbik7XG4gICAgICAgIH1cbiAgICAgICAgY3R4LmZpbHRlciA9ICdub25lJztcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqIExpY2hlbiBhcyBDUlVTVDogY2x1c3RlcnMgb2YgdGlueSBzcGVja3MsIHRoZSB3YXkgaXQgZ3Jvd3MsIG5vdCBhIHBhaW50ZWQgcGF0Y2guIEF0IDYgbW1cbiAgICAgKiAgYSBwaXhlbCB0aGUgc3BlY2tzIGFyZSAxLTIgY20gYW5kIGJsZW5kIHRvIGFuIG9yYW5nZSB0aW5nZSBhdCBwcm9wIGRpc3RhbmNlLiAqL1xuICAgIGNvbnN0IGNydXN0ID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjbHVzdGVyczogbnVtYmVyLCBwZXJDbHVzdGVyOiBudW1iZXIsIHJhZDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjbHVzdGVyczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGN4ID0gcigpICogUywgY3kgPSByKCkgKiBTLCBSID0gcmFkICogUyAqICgwLjQgKyByKCkpO1xuICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBlckNsdXN0ZXI7IGsrKykge1xuICAgICAgICAgIGNvbnN0IGEgPSByKCkgKiBNYXRoLlBJICogMiwgZCA9IFIgKiBNYXRoLnNxcnQocigpKTtcbiAgICAgICAgICBjb25zdCB4ID0gY3ggKyBNYXRoLmNvcyhhKSAqIGQsIHkgPSBjeSArIE1hdGguc2luKGEpICogZCAqIDAuNywgcnIgPSAxICsgMS42ICogcigpO1xuICAgICAgICAgIHAubW92ZVRvKHggKyByciwgeSk7IHAuYXJjKHgsIHksIHJyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHdyYXBwZWQoKCkgPT4geyBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGFscGhhKTsgY3R4LmZpbGwocCk7IH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBiaW5kID0gKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIGN2OiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwsIGJ1bXA6IG51bWJlcikgPT4ge1xuICAgICAgaWYgKCFjdikgcmV0dXJuO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICAgICAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlOyAgIC8vIHRoZSB0aWxlIGhvbGRzIGRpc3BsYXktc3BhY2UgcmF0aW9zXG4gICAgICB0ZXguYW5pc290cm9weSA9IG9wdGlvbnMudGV4dHVyZUFuaXNvdHJvcHkgPz8gNDtcbiAgICAgIG1hdC5tYXAgPSB0ZXg7XG4gICAgICBtYXQuYnVtcE1hcCA9IHRleDtcbiAgICAgIG1hdC5idW1wU2NhbGUgPSBidW1wO1xuICAgICAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9O1xuXG4gICAgLy8gTGF0ZXJpdGU6IGNvdXJzaW5nIHdpdGggd2lkZSBqb2ludHMsIHRoZW4gdGhlIHBpdHRpbmcgdGhhdCBpcyB0aGUgc3RvbmUncyB3aG9sZSBjaGFyYWN0ZXIuXG4gICAge1xuICAgICAgY29uc3QgUCA9IFcubGF0ZXJpdGU7XG4gICAgICBiaW5kKG1hdGVyaWFscy5sYXRlcml0ZSwgbWFrZVRpbGUoMjAyNjA4MjYsIChjdHgsIHIsIFMsIHdyYXBwZWQpID0+IHtcbiAgICAgICAgY291cnNpbmcoY3R4LCByLCBTLCB3cmFwcGVkLCBQKTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLm1vdHRsZSwgMTIsIDAuMTQsIDAuNiwgMTIpO1xuICAgICAgICBwaXRzKGN0eCwgciwgUywgd3JhcHBlZCwgUC5waXQsIDExMDAsIDQuNSwgMC44KTtcbiAgICAgICAgZ3JhaW4oY3R4LCByLCBTLCB3cmFwcGVkLCBQLnBpdCwgMTgwMCwgMC4xMCk7XG4gICAgICB9KSwgUC5idW1wKTtcbiAgICB9XG4gICAgLy8gU2FuZHN0b25lOiB0aWdodCBhc2hsYXIsIGJsYWNrIHN0cmVha3MgcnVubmluZyBkb3duLCBsaWNoZW4gY3J1c3QsIGxpZ2h0IHBvY2tpbmcuXG4gICAge1xuICAgICAgY29uc3QgUCA9IFcuc2FuZHN0b25lO1xuICAgICAgY29uc3QgbSA9IG1hdGVyaWFscy5zYW5kc3RvbmU7XG4gICAgICBpZiAoaGFzRG9tKSB7XG4gICAgICAgIGNvbnN0IGMgPSBtLmNvbG9yLmNsb25lKCk7XG4gICAgICAgIG0uY29sb3Iuc2V0UkdCKGMuciAvIE1hdGgucG93KFAuY2xlYW5bMF0sIDIuMiksIGMuZyAvIE1hdGgucG93KFAuY2xlYW5bMV0sIDIuMiksIGMuYiAvIE1hdGgucG93KFAuY2xlYW5bMl0sIDIuMikpO1xuICAgICAgfVxuICAgICAgLy8gQ291cnNpbmcgYW5kIG1vdHRsZSBhcmUgcGFpbnRlZCBpbiBDTEVBTi1zdG9uZSB0ZXJtcywgdGhlbiB0aGUgd2hvbGUgZ3JvdW5kIGlzIHNjYWxlZCB0b1xuICAgICAgLy8gdGhlIGNsZWFuIHJhdGlvIG9mIHRoZSBlbnZlbG9wZSB3aXRoIG9uZSBtdWx0aXBseSBmaWxsOyBldmVyeXRoaW5nIGFmdGVyIHRoYXQgLS0gdGhlXG4gICAgICAvLyBibGFjaywgdGhlIGxpY2hlbiwgdGhlIHBpdHMgLS0gaXMgYSByYXRpbyBvZiBFLCB3aGljaCBpcyBob3cgdGhlIGxpY2hlbiByZWFjaGVzIGFuIG9yYW5nZVxuICAgICAgLy8gQlJJR0hURVIgaW4gcmVkIHRoYW4gdGhlIHN0b25lIGl0IHNpdHMgb24uXG4gICAgICBiaW5kKG0sIG1ha2VUaWxlKDgyNjE0MDMsIChjdHgsIHIsIFMsIHdyYXBwZWQpID0+IHtcbiAgICAgICAgY291cnNpbmcoY3R4LCByLCBTLCB3cmFwcGVkLCBQKTtcbiAgICAgICAgLy8gU3RvbmUgZmlyc3Q6IGNsb3VkeSB0b25hbCBkcmlmdCwgbGlnaHQgYW5kIGRhcmssIHRoZW4gZ3JhaW4gc28gbm8gYmxvY2sgaXMgYSBmbGF0IGZpbGwuXG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5tb3R0bGUsIDEwLCAwLjE2LCAwLjUsIDE0KTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLmxpZ2h0LCA4LCAwLjE0LCAwLjQsIDE0KTtcbiAgICAgICAgZ3JhaW4oY3R4LCByLCBTLCB3cmFwcGVkLCBQLmpvaW50VG9uZSwgNTAwMCwgMC4wNyk7XG4gICAgICAgIGdyYWluKGN0eCwgciwgUywgd3JhcHBlZCwgUC5saWdodCwgMjUwMCwgMC4wNyk7XG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKFAuY2xlYW4sIDEpOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgICAgICAvLyBXZWF0aGVyaW5nOiBzb2Z0IHdhc2hlcyBydW5uaW5nIGRvd24sIGEgZmV3IGJyb2FkIGRhcmsgY2xvdWRzIHVuZGVyIHRoZW0sIHRoZW4gcG9ja2luZ1xuICAgICAgICAvLyBhbmQgdGhlIGxpY2hlbiBhcyBzcGVjayBjbHVzdGVycy4gTm90aGluZyBoZXJlIGhhcyBhIGhhcmQgZWRnZSBleGNlcHQgdGhlIHBpdHMuXG4gICAgICAgIHdhc2hlcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFAuYmxhY2ssIDE4LCAwLjU1LCA1KTtcbiAgICAgICAgY2xvdWQoY3R4LCByLCBTLCB3cmFwcGVkLCBQLmJsYWNrLCA2LCAwLjA5LCAwLjM1LCAxNik7XG4gICAgICAgIHBpdHMoY3R4LCByLCBTLCB3cmFwcGVkLCBQLnBpdCwgNDIwLCAyLjIsIDAuNSk7XG4gICAgICAgIGNydXN0KGN0eCwgciwgUywgd3JhcHBlZCwgUC5saWNoZW4sIDI2LCAzNCwgMC4wMzUsIDAuNTUpO1xuICAgICAgfSksIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIFJ1YmJsZTogbm8gY291cnNpbmcgLS0gZWFjaCBpbnN0YW5jZSBpcyBvbmUgYmxvY2sgLS0ganVzdCBtb3R0bGUsIHBvY2tpbmcgYW5kIGEgZGFyayBzaWRlLlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBXLnJ1YmJsZTtcbiAgICAgIGJpbmQobWF0ZXJpYWxzLnBhbGUsIG1ha2VUaWxlKDExMDUyMDExLCAoY3R4LCByLCBTLCB3cmFwcGVkKSA9PiB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBTLCBTKTtcbiAgICAgICAgYmxvdGNoKGN0eCwgciwgUywgd3JhcHBlZCwgUC5tb3R0bGUsIDE2LCAwLjEyLCAwLjcpO1xuICAgICAgICBibG90Y2goY3R4LCByLCBTLCB3cmFwcGVkLCBQLmRhcmssIDYsIDAuMDYsIDAuNik7XG4gICAgICAgIHBpdHMoY3R4LCByLCBTLCB3cmFwcGVkLCBQLnBpdCwgMjYwLCAyLjUsIDAuNik7XG4gICAgICAgIGdyYWluKGN0eCwgciwgUywgd3JhcHBlZCwgUC5kYXJrLCAxMjAwLCAwLjEwKTtcbiAgICAgIH0pLCBQLmJ1bXApO1xuICAgIH1cbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUtobWVyU3RvbmVTYW5jdHVhcnlNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gU3RhdGljIGxhbmRtYXJrIGdlb21ldHJ5IC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gQSBuYW1lZCBwaXZvdCBpcyBhXG4gICAgLy8gcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3JcbiAgICAvLyBoYXMgZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFlBQVk7QUFBQSxNQUNWO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGNBQWM7QUFBQSxJQUNoQjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLE9BQU87QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsSUFDZDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixhQUFhO0FBQUEsVUFDWDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTztBQUFBLFVBQ0w7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLFVBQVU7QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLFFBQ1gsUUFBUTtBQUFBLFFBQ1IsVUFBVTtBQUFBLFFBQ1YsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOO0FBQUEs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
