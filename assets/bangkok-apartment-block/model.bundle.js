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

// assets/bangkok-apartment-block/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createBangkokApartmentBlockModel: () => createBangkokApartmentBlockModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "bangkok-apartment-block",
  "name": "Bangkok Apartment Block",
  "exportName": "BangkokApartmentBlock",
  "envelope": "Envelope 15.00 x 19.00 x 12.30 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "wall",
      "color": 13946301,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "concrete",
      "color": 10263704,
      "roughness": 0.94,
      "metalness": 0
    },
    {
      "id": "green",
      "color": 10930352,
      "roughness": 0.55,
      "metalness": 0.1
    },
    {
      "id": "glass",
      "color": 7765102,
      "roughness": 0.15,
      "metalness": 0,
      "opacity": 0.93,
      "envMapIntensity": 1
    },
    {
      "id": "alu",
      "color": 11843250,
      "roughness": 0.45,
      "metalness": 0.3
    },
    {
      "id": "cond",
      "color": 11315360,
      "roughness": 0.6,
      "metalness": 0.15,
      "vertexColors": true
    },
    {
      "id": "tank",
      "color": 7178406,
      "roughness": 0.62,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 11906716,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "frosted",
      "color": 13224127,
      "roughness": 0.5,
      "metalness": 0,
      "opacity": 0.97
    },
    {
      "id": "sign",
      "color": 16777215,
      "roughness": 0.85,
      "metalness": 0
    },
    {
      "id": "streak",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "opacity": 0.85
    },
    {
      "id": "cloth",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true,
      "doubleSided": true
    }
  ],
  "geometry": {
    "wx": 7.46,
    "wz": 6.12,
    "t": 0.3,
    "groove": 0.03,
    "plinth": {
      "y1": 0.25
    },
    "beam": {
      "y0": 3.6,
      "y1": 4.15
    },
    "floors": [
      4.15,
      6.73,
      9.31,
      11.89,
      14.47
    ],
    "pitch": 2.58,
    "deckY": 17.05,
    "deckT": 0.07,
    "parapetY": 18.5,
    "bays": [
      -5.55,
      -1.85,
      1.85,
      5.55
    ],
    "opening": 3.1,
    "recess": 1.1,
    "hole": {
      "y0": 0.5,
      "y1": 2.48
    },
    "core": {
      "x1": 4.9,
      "z1": 0.25
    },
    "lobby": {
      "x0": -5.9,
      "x1": -2.6,
      "z0": 0.25,
      "z1": 3
    },
    "columns": {
      "s": 0.45,
      "front": [
        [
          -6.9,
          5.15
        ],
        [
          -3.75,
          5.15
        ],
        [
          0,
          5.15
        ],
        [
          3.75,
          5.15
        ],
        [
          6.9,
          5.15
        ],
        [
          6.9,
          1.5
        ],
        [
          6.9,
          -2.2
        ],
        [
          6.9,
          -4.8
        ],
        [
          -3.75,
          2.6
        ],
        [
          0,
          2.6
        ],
        [
          3.75,
          2.6
        ]
      ]
    },
    "railing": {
      "y0": 0.55,
      "y1": 1.42,
      "half": 1.5,
      "z": -0.12,
      "balusters": 13
    },
    "door": {
      "x0": -1.45,
      "x1": 0.25,
      "y0": 0.5,
      "y1": 2.4,
      "z": -1.09
    },
    "condenser": {
      "x0": 0.65,
      "x1": 1.35,
      "y0": 1.55,
      "y1": 2.1,
      "d": 0.29,
      "fanR": 0.2,
      "fanTint": 0.34
    },
    "rack": {
      "y": 2.05,
      "x0": -0.4,
      "x1": 1.2,
      "z": -0.45
    },
    "clothes": {
      "items": [
        [
          -0.25,
          0.42,
          0.5,
          0,
          -0.01
        ],
        [
          0.22,
          0.24,
          0.72,
          2,
          0.015
        ],
        [
          0.62,
          0.36,
          0.56,
          1,
          -0.02
        ],
        [
          1.02,
          0.3,
          0.4,
          3,
          0.01
        ]
      ],
      "colors": [
        3820138,
        14605524,
        7237748,
        8360880,
        8141370,
        10787448
      ],
      "on": [
        0,
        2,
        5,
        6,
        9,
        11,
        12,
        15,
        16,
        18,
        21,
        22,
        25,
        27,
        28,
        31,
        32,
        34,
        37,
        39
      ]
    },
    "strip": {
      "z0": -1.7,
      "z1": -0.05,
      "win": {
        "w": 1.4,
        "h": 1.9
      },
      "groundY": 1.85,
      "floorDy": 1.35
    },
    "lobbyDoor": {
      "z0": 0.8,
      "z1": 2.7,
      "y0": 0.3,
      "y1": 2.5
    },
    "tanks": {
      "r": 0.62,
      "h": 1.88,
      "at": [
        [
          -2.5,
          -1.95
        ],
        [
          -1.2,
          -1.95
        ],
        [
          0.1,
          -1.95
        ],
        [
          -1.85,
          -0.65
        ],
        [
          -0.55,
          -0.65
        ],
        [
          0.75,
          -0.65
        ]
      ]
    },
    "sign": {
      "x0": -0.5,
      "x1": 3.5,
      "y0": 3.65,
      "y1": 4.1,
      "text": "APARTMENT",
      "ink": "#5a5852",
      "ground": "#d4cdbd"
    },
    "grooveW": 0.08,
    "sideCols": {
      "back": [
        -5.85,
        -2.1
      ],
      "front": [
        0.2,
        5.85
      ],
      "mid": [
        -1.9,
        1.9
      ],
      "plusX": [
        [
          -5.85,
          -2.2
        ],
        [
          -1.9,
          1.9
        ],
        [
          2.2,
          5.85
        ]
      ]
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
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
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
function createBangkokApartmentBlockModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Bangkok Apartment Block";
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
  const F = G.floors, BX = G.bays;
  const half = G.opening / 2;
  const innerX = G.wx - G.t;
  const zFace = G.wz, zBack = G.wz - G.recess;
  {
    const parts = [];
    const facade = (yLow, z0, z1, rows2) => {
      const sh = new THREE.Shape();
      sh.moveTo(-innerX, yLow);
      sh.lineTo(innerX, yLow);
      sh.lineTo(innerX, G.deckY);
      sh.lineTo(-innerX, G.deckY);
      sh.closePath();
      for (const yb of rows2) for (const bx of BX) {
        const p = new THREE.Path();
        p.moveTo(bx - half, yb + G.hole.y0);
        p.lineTo(bx + half, yb + G.hole.y0);
        p.lineTo(bx + half, yb + G.hole.y1);
        p.lineTo(bx - half, yb + G.hole.y1);
        p.closePath();
        sh.holes.push(p);
      }
      return extrudeAlongZ(sh, z0, z1);
    };
    parts.push(facade(G.beam.y0, zBack, zFace, F));
    parts.push(facade(G.plinth.y1, -zFace, -zBack, F));
    const sideWall = (pts, x0) => {
      const sh = new THREE.Shape();
      sh.moveTo(-pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
      sh.closePath();
      const g = new THREE.ExtrudeGeometry(sh, { depth: G.t, bevelEnabled: false, curveSegments: 1 });
      g.rotateY(Math.PI / 2);
      g.translate(x0, 0, 0);
      g.computeVertexNormals();
      return g;
    };
    parts.push(sideWall([
      [-zFace, G.plinth.y1],
      [G.core.z1, G.plinth.y1],
      [G.core.z1, G.beam.y0],
      [zFace, G.beam.y0],
      [zFace, G.parapetY],
      [-zFace, G.parapetY]
    ], -G.wx));
    parts.push(sideWall([[-zFace, G.beam.y0], [zFace, G.beam.y0], [zFace, G.parapetY], [-zFace, G.parapetY]], innerX));
    {
      const body = boxAt(0, (G.beam.y0 + G.deckY) / 2, 0, innerX * 2, G.deckY - G.beam.y0, zBack * 2);
      const n = body.getAttribute("position").count;
      const col = new Float32Array(n * 3);
      for (let i = 0; i < n; i++) {
        col[i * 3] = 0.64;
        col[i * 3 + 1] = 0.64;
        col[i * 3 + 2] = 0.63;
      }
      body.setAttribute("color", new THREE.BufferAttribute(col, 3));
      parts.push(body);
    }
    const ph = G.parapetY - G.deckY;
    parts.push(boxAt(0, G.deckY + ph / 2, zFace - G.t / 2, innerX * 2, ph, G.t));
    parts.push(boxAt(0, G.deckY + ph / 2, -zFace + G.t / 2, innerX * 2, ph, G.t));
    const C = G.core, L = G.lobby, gy = (G.plinth.y1 + G.beam.y0) / 2, gh = G.beam.y0 - G.plinth.y1;
    parts.push(boxAt((-innerX + C.x1) / 2, gy, (-zBack + C.z1) / 2, C.x1 + innerX, gh, C.z1 + zBack));
    parts.push(boxAt((L.x0 + L.x1) / 2, gy, (L.z0 + L.z1) / 2, L.x1 - L.x0, gh, L.z1 - L.z0));
    const gw = G.grooveW, gp = G.groove;
    const sidePanel = (x, sgn, z0, z1, y0, y1) => {
      const cx = x + sgn * gp / 2;
      parts.push(boxAt(cx, (y0 + y1) / 2, z0 + gw / 2, gp, y1 - y0, gw));
      parts.push(boxAt(cx, (y0 + y1) / 2, z1 - gw / 2, gp, y1 - y0, gw));
      parts.push(boxAt(cx, y0 + gw / 2, (z0 + z1) / 2, gp, gw, z1 - z0 - 2 * gw));
      parts.push(boxAt(cx, y1 - gw / 2, (z0 + z1) / 2, gp, gw, z1 - z0 - 2 * gw));
    };
    const frontPanel = (z, sgn, x0, x1, y0, y1) => {
      const cz = z + sgn * gp / 2;
      parts.push(boxAt(x0 + gw / 2, (y0 + y1) / 2, cz, gw, y1 - y0, gp));
      parts.push(boxAt(x1 - gw / 2, (y0 + y1) / 2, cz, gw, y1 - y0, gp));
      parts.push(boxAt((x0 + x1) / 2, y0 + gw / 2, cz, x1 - x0 - 2 * gw, gw, gp));
      parts.push(boxAt((x0 + x1) / 2, y1 - gw / 2, cz, x1 - x0 - 2 * gw, gw, gp));
    };
    const rows = F.map((yb) => [yb + 0.25, yb + G.pitch - 0.25]);
    const top = [G.deckY + 0.25, G.parapetY - 0.25];
    const ground = [G.plinth.y1 + 0.25, G.beam.y0 - 0.25];
    const SC = G.sideCols;
    for (const r of [...rows, top]) {
      sidePanel(-G.wx, -1, SC.back[0], SC.back[1], r[0], r[1]);
      sidePanel(-G.wx, -1, SC.front[0], SC.front[1], r[0], r[1]);
    }
    sidePanel(-G.wx, -1, SC.back[0], SC.back[1], ground[0], ground[1]);
    for (const r of [...rows, top]) for (const c of SC.plusX) sidePanel(G.wx, 1, c[0], c[1], r[0], r[1]);
    for (const bx of BX) {
      frontPanel(zFace, 1, bx - half, bx + half, top[0], top[1]);
      frontPanel(-zFace, -1, bx - half, bx + half, top[0], top[1]);
      frontPanel(-zFace, -1, bx - half, bx + half, ground[0], ground[1]);
    }
    add("shell", "Rendered shell", mergeGeos(parts), "wall");
    colliders["shell"] = {
      shape: "box",
      localCenter: [0, 9.5, 0],
      halfExtents: [7.5, 9.5, 6.15],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
    };
  }
  add("plinth", "Plinth and parking slab", boxAt(0, G.plinth.y1 / 2, 0, G.wx * 2 + 2 * G.groove, G.plinth.y1, G.wz * 2 + 2 * G.groove), "concrete");
  add("deck", "Roof deck", boxAt(0, G.deckY + G.deckT / 2, 0, innerX * 2, G.deckT, (zFace - G.t) * 2), "deck");
  {
    const CL = G.columns, ch = G.beam.y0 - G.plinth.y1 + 0.01;
    addInst(
      "columns",
      "Ground-floor columns",
      new THREE.BoxGeometry(CL.s, ch, CL.s),
      "concrete",
      CL.front.map(([x, z]) => new THREE.Matrix4().setPosition(x, G.plinth.y1 - 0.01 + ch / 2, z))
    );
  }
  const placements = [];
  const flags = [];
  {
    const on = new Set(G.clothes.on);
    let k = 0;
    for (let fi = 0; fi < F.length; fi++) for (const elev of [0, 1]) for (let bi = 0; bi < BX.length; bi++) {
      const yb = F[fi];
      const m = new THREE.Matrix4().compose(
        new THREE.Vector3(BX[bi], yb, elev === 0 ? zFace : -zFace),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), elev === 0 ? 0 : Math.PI),
        new THREE.Vector3(1, 1, 1)
      );
      placements.push(m);
      flags.push(on.has(k));
      k++;
    }
  }
  {
    const R = G.railing;
    const parts = [];
    const rh = R.y1 - R.y0;
    parts.push(boxAt(0, R.y1, R.z, R.half * 2, 0.05, 0.05));
    parts.push(boxAt(0, R.y0, R.z, R.half * 2 - 0.1, 0.04, 0.04));
    for (const s of [-1, 1]) parts.push(boxAt(s * (R.half - 0.025), R.y0 + rh / 2, R.z, 0.05, rh + 0.05, 0.05));
    for (let i = 1; i <= R.balusters; i++) {
      const x = -R.half + R.half * 2 * i / (R.balusters + 1);
      parts.push(boxAt(x, R.y0 + rh / 2, R.z, 0.025, rh - 0.04, 0.025));
    }
    addInst("railings", "Balcony railings", mergeGeos(parts), "green", placements);
  }
  {
    const D = G.door, CD = G.condenser, RK = G.rack;
    const parts = [];
    const fz = D.z + 0.025, fd = 0.05;
    parts.push(boxAt(D.x0 + 0.03, (D.y0 + D.y1) / 2, fz, 0.06, D.y1 - D.y0, fd));
    parts.push(boxAt(D.x1 - 0.03, (D.y0 + D.y1) / 2, fz, 0.06, D.y1 - D.y0, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, D.y1 - 0.03, fz, D.x1 - D.x0 - 0.12, 0.06, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, D.y0 + 0.04, fz, D.x1 - D.x0 - 0.12, 0.08, fd));
    parts.push(boxAt((D.x0 + D.x1) / 2, (D.y0 + D.y1) / 2, fz, 0.05, D.y1 - D.y0 - 0.14, fd - 0.01));
    parts.push(cylAt(CD.x1 - 0.06, (D.y0 + CD.y0) / 2, D.z + 0.03, 0.03, 0.03, CD.y0 - D.y0, 8));
    parts.push(boxAt((RK.x0 + RK.x1) / 2, RK.y, RK.z, RK.x1 - RK.x0, 0.03, 0.03));
    for (const x of [RK.x0 + 0.05, RK.x1 - 0.05]) parts.push(boxAt(x, RK.y + 0.06, (RK.z + D.z) / 2, 0.03, 0.03, D.z - RK.z > 0 ? D.z - RK.z : RK.z - D.z));
    addInst("door-frames", "Sliding-door frames, pipes and laundry rails", mergeGeos(parts), "alu", placements);
    addInst(
      "door-panes",
      "Sliding-door panes",
      boxAt((D.x0 + D.x1) / 2, (D.y0 + D.y1) / 2, D.z + 0.015, D.x1 - D.x0 - 0.1, D.y1 - D.y0 - 0.12, 0.02),
      "glass",
      placements
    );
    if (typeof document !== "undefined") {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#5f665c";
      ctx.fillRect(0, 0, 256, 256);
      for (let x = 0; x < 168; x += 14) {
        ctx.fillStyle = x / 14 % 2 === 0 ? "rgba(200, 199, 185, 0.78)" : "rgba(168, 168, 156, 0.70)";
        ctx.fillRect(x, 6, 14, 250);
      }
      ctx.fillStyle = "rgba(120, 128, 118, 0.55)";
      ctx.fillRect(168, 0, 88, 256);
      ctx.fillStyle = "rgba(30, 34, 30, 0.35)";
      ctx.fillRect(0, 0, 256, 6);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      const gm = materials["glass"];
      gm.map = tex;
      gm.color.set(16777215);
      gm.needsUpdate = true;
    }
  }
  {
    const CD = G.condenser;
    const body = boxAt((CD.x0 + CD.x1) / 2, (CD.y0 + CD.y1) / 2, G.door.z + 0.01 + CD.d / 2, CD.x1 - CD.x0, CD.y1 - CD.y0, CD.d);
    const fan = new THREE.CylinderGeometry(CD.fanR, CD.fanR, 0.02, 20);
    fan.rotateX(Math.PI / 2);
    fan.translate((CD.x0 + CD.x1) / 2 - 0.05, (CD.y0 + CD.y1) / 2, G.door.z + CD.d + 0.01);
    const fc = new Float32Array(fan.getAttribute("position").count * 3).fill(CD.fanTint);
    fan.setAttribute("color", new THREE.BufferAttribute(fc, 3));
    const bc = new Float32Array(body.getAttribute("position").count * 3).fill(1);
    body.setAttribute("color", new THREE.BufferAttribute(bc, 3));
    addInst("condensers", "Air-conditioning condensers", mergeGeos([body, fan]), "cond", placements);
  }
  {
    const CL = G.clothes, RK = G.rack;
    const parts = [];
    const cols = CL.colors;
    CL.items.forEach(([x, w, h, ci, dz]) => {
      const g = boxAt(x, RK.y - 0.02 - h / 2, RK.z + dz, w, h, 0.03);
      const c = new THREE.Color(cols[ci % cols.length]);
      const arr = new Float32Array(g.getAttribute("position").count * 3);
      for (let v = 0; v < arr.length; v += 3) {
        arr[v] = c.r;
        arr[v + 1] = c.g;
        arr[v + 2] = c.b;
      }
      g.setAttribute("color", new THREE.BufferAttribute(arr, 3));
      parts.push(g);
    });
    const mats = placements.filter((_, i) => flags[i]);
    const tints = mats.map((_, i) => [16777215, 14212328, 15259856, 13686992, 13158616][i % 5]);
    addInst("laundry", "Hanging laundry", mergeGeos(parts), "cloth", mats, tints);
  }
  {
    const q = new THREE.PlaneGeometry(G.opening - 0.06, 0.62);
    q.translate(0, 0.19, 6e-3);
    const tints = placements.map((_, i) => [16777215, 12434877, 14737632, 10461087, 13684944][i * 7 % 5]);
    const inst = addInst("streaks", "Rain-wash streaks", q, "streak", placements, tints);
    const sm = inst.material;
    sm.depthWrite = false;
    sm.polygonOffset = true;
    sm.polygonOffsetFactor = -1;
    if (typeof document === "undefined") {
      sm.opacity = 0;
    } else {
      const c = document.createElement("canvas");
      c.width = 512;
      c.height = 96;
      const ctx = c.getContext("2d");
      ctx.clearRect(0, 0, c.width, c.height);
      let seed = 4242;
      const rnd = () => {
        seed = seed * 1664525 + 1013904223 >>> 0;
        return seed / 4294967296;
      };
      const anchors = [18, 40, 470, 494, 120 + rnd() * 80, 220 + rnd() * 80, 330 + rnd() * 80];
      for (let i = 0; i < anchors.length; i++) {
        const x = anchors[i] + (rnd() - 0.5) * 10, w = 3 + rnd() * 6, a = 0.1 + rnd() * 0.2, len = 30 + rnd() * 60;
        const grad = ctx.createLinearGradient(0, 0, 0, len);
        grad.addColorStop(0, "rgba(90, 90, 85, " + a.toFixed(2) + ")");
        grad.addColorStop(1, "rgba(90, 90, 85, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(x, 0, w, len);
      }
      const g2 = ctx.createLinearGradient(0, 0, 0, 10);
      g2.addColorStop(0, "rgba(90, 90, 85, 0.16)");
      g2.addColorStop(1, "rgba(90, 90, 85, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, c.width, 18);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      sm.map = tex;
      sm.needsUpdate = true;
    }
  }
  {
    const S = G.strip, W = S.win;
    const zc = (S.z0 + S.z1) / 2;
    const ys = [S.groundY, ...F.map((yb) => yb + S.floorDy)];
    const x = -G.wx;
    const frame = [];
    const fd = 0.06, fx = x - 0.01;
    frame.push(boxAt(fx, 0, -W.w / 2 + 0.03, fd, W.h, 0.06));
    frame.push(boxAt(fx, 0, W.w / 2 - 0.03, fd, W.h, 0.06));
    frame.push(boxAt(fx, W.h / 2 - 0.03, 0, fd, 0.06, W.w - 0.12));
    frame.push(boxAt(fx, -W.h / 2 + 0.03, 0, fd, 0.06, W.w - 0.12));
    frame.push(boxAt(fx, 0, 0, fd - 0.01, W.h - 0.12, 0.05));
    for (const f of [-1 / 6, 1 / 6]) frame.push(boxAt(fx, f * W.h, 0, fd - 0.01, 0.05, W.w - 0.12));
    const at = ys.map((y) => new THREE.Matrix4().setPosition(0, y, zc));
    addInst("stair-frames", "Stairwell window frames", mergeGeos(frame), "alu", at);
    addInst("stair-panes", "Stairwell frosted panes", boxAt(x + 5e-3, 0, 0, 0.05, W.h - 0.1, W.w - 0.1), "frosted", at);
  }
  {
    const L = G.lobby, D = G.lobbyDoor;
    const x = L.x0, zc = (D.z0 + D.z1) / 2, yc = (D.y0 + D.y1) / 2, w = D.z1 - D.z0, h = D.y1 - D.y0;
    const fx = x - 0.025, fd = 0.05;
    add("lobby-frame", "Lobby door frame", mergeGeos([
      boxAt(fx, yc, D.z0 + 0.03, fd, h, 0.06),
      boxAt(fx, yc, D.z1 - 0.03, fd, h, 0.06),
      boxAt(fx, D.y1 - 0.03, zc, fd, 0.06, w - 0.12),
      boxAt(fx, yc, zc, fd - 0.01, h - 0.06, 0.05)
    ]), "alu");
    add("lobby-pane", "Lobby door glass", boxAt(x - 0.015, yc - 0.02, zc, 0.02, h - 0.1, w - 0.1), "glass");
  }
  {
    const T = G.tanks, r = T.r;
    const prof = [[0, 0], [r * 0.82, 0], [r, 0.1]];
    for (let i = 0; i < 4; i++) {
      const y = 0.3 + i * 0.36;
      prof.push([r, y], [r * 0.95, y + 0.06], [r * 0.95, y + 0.14], [r, y + 0.2]);
    }
    prof.push([r, 1.5], [r * 0.9, 1.66], [r * 0.62, 1.78], [r * 0.3, 1.83], [r * 0.3, T.h], [0, T.h]);
    const g = lathe(prof, 20);
    addInst(
      "tanks",
      "Rooftop water tanks",
      g,
      "tank",
      T.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, G.deckY + G.deckT, z))
    );
  }
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, 0.02);
    const uv = g.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.01);
    const mesh = add("sign", "Name board", g, "sign");
    const mat = mesh.material;
    if (typeof document === "undefined") {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 116;
      const ctx = c.getContext("2d");
      ctx.fillStyle = S.ground;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = S.ink;
      ctx.font = "bold 84px Arial, Helvetica, sans-serif";
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.fillText(S.text, c.width * 0.5, c.height * 0.54);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.needsUpdate = true;
    }
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createBangkokApartmentBlockModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFuZ2tvayBBcGFydG1lbnQgQmxvY2sgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMTUuMDAgeCAxOS4wMCB4IDEyLjMwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBNT05VTUVOVEFMIGJ1aWxkaW5ncywgYW5kIHVubGlrZSB0aGUgc2hhcmVkIHJldGFpbCBtb2R1bGUgaXRzIGZvcm0gaXNcbiAqIG5vdCBhIGJveDogdGhlIHJlY29nbmlzYWJsZSBmZWF0dXJlIGlzIGEgY3VydmVkIG9yIHRpZXJlZCBwcm9maWxlIHRoYXQgaGFzIHRvIHN1cnZpdmUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20uIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBoZXJlIGlzIHRoZXJlZm9yZSB0aGUgTEFUSEUgLS1cbiAqIGEgcHJvZmlsZSByZXZvbHZlZCBhYm91dCArWSAtLSBhbmQgdGhlIHRpZXJlZC9zdGVwcGVkIG1lcmdlLCBub3QgdGhlIHBhcmFtZXRlcmlzZWQgc2hvcGZyb250LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwiYmFuZ2tvay1hcGFydG1lbnQtYmxvY2tcIixcbiAgICBcIm5hbWVcIjogXCJCYW5na29rIEFwYXJ0bWVudCBCbG9ja1wiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkJhbmdrb2tBcGFydG1lbnRCbG9ja1wiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxNS4wMCB4IDE5LjAwIHggMTIuMzAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndhbGxcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMzk0NjMwMSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDI2MzcwNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdyZWVuXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTA5MzAzNTIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzc2NTEwMixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xNSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJhbHVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTg0MzI1MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY29uZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzE1MzYwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMTUsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ0YW5rXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzE3ODQwNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRlY2tcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTkwNjcxNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZyb3N0ZWRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMzIyNDEyNyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45N1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInNpZ25cIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0cmVha1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjg1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY2xvdGhcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlLFxuICAgICAgICBcImRvdWJsZVNpZGVkXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJ3eFwiOiA3LjQ2LFxuICAgICAgXCJ3elwiOiA2LjEyLFxuICAgICAgXCJ0XCI6IDAuMyxcbiAgICAgIFwiZ3Jvb3ZlXCI6IDAuMDMsXG4gICAgICBcInBsaW50aFwiOiB7XG4gICAgICAgIFwieTFcIjogMC4yNVxuICAgICAgfSxcbiAgICAgIFwiYmVhbVwiOiB7XG4gICAgICAgIFwieTBcIjogMy42LFxuICAgICAgICBcInkxXCI6IDQuMTVcbiAgICAgIH0sXG4gICAgICBcImZsb29yc1wiOiBbXG4gICAgICAgIDQuMTUsXG4gICAgICAgIDYuNzMsXG4gICAgICAgIDkuMzEsXG4gICAgICAgIDExLjg5LFxuICAgICAgICAxNC40N1xuICAgICAgXSxcbiAgICAgIFwicGl0Y2hcIjogMi41OCxcbiAgICAgIFwiZGVja1lcIjogMTcuMDUsXG4gICAgICBcImRlY2tUXCI6IDAuMDcsXG4gICAgICBcInBhcmFwZXRZXCI6IDE4LjUsXG4gICAgICBcImJheXNcIjogW1xuICAgICAgICAtNS41NSxcbiAgICAgICAgLTEuODUsXG4gICAgICAgIDEuODUsXG4gICAgICAgIDUuNTVcbiAgICAgIF0sXG4gICAgICBcIm9wZW5pbmdcIjogMy4xLFxuICAgICAgXCJyZWNlc3NcIjogMS4xLFxuICAgICAgXCJob2xlXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAwLjUsXG4gICAgICAgIFwieTFcIjogMi40OFxuICAgICAgfSxcbiAgICAgIFwiY29yZVwiOiB7XG4gICAgICAgIFwieDFcIjogNC45LFxuICAgICAgICBcInoxXCI6IDAuMjVcbiAgICAgIH0sXG4gICAgICBcImxvYmJ5XCI6IHtcbiAgICAgICAgXCJ4MFwiOiAtNS45LFxuICAgICAgICBcIngxXCI6IC0yLjYsXG4gICAgICAgIFwiejBcIjogMC4yNSxcbiAgICAgICAgXCJ6MVwiOiAzXG4gICAgICB9LFxuICAgICAgXCJjb2x1bW5zXCI6IHtcbiAgICAgICAgXCJzXCI6IDAuNDUsXG4gICAgICAgIFwiZnJvbnRcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC02LjksXG4gICAgICAgICAgICA1LjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDUuMTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA1LjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjc1LFxuICAgICAgICAgICAgNS4xNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNi45LFxuICAgICAgICAgICAgNS4xNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNi45LFxuICAgICAgICAgICAgMS41XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA2LjksXG4gICAgICAgICAgICAtMi4yXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA2LjksXG4gICAgICAgICAgICAtNC44XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy43NSxcbiAgICAgICAgICAgIDIuNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIuNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy43NSxcbiAgICAgICAgICAgIDIuNlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicmFpbGluZ1wiOiB7XG4gICAgICAgIFwieTBcIjogMC41NSxcbiAgICAgICAgXCJ5MVwiOiAxLjQyLFxuICAgICAgICBcImhhbGZcIjogMS41LFxuICAgICAgICBcInpcIjogLTAuMTIsXG4gICAgICAgIFwiYmFsdXN0ZXJzXCI6IDEzXG4gICAgICB9LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ4MFwiOiAtMS40NSxcbiAgICAgICAgXCJ4MVwiOiAwLjI1LFxuICAgICAgICBcInkwXCI6IDAuNSxcbiAgICAgICAgXCJ5MVwiOiAyLjQsXG4gICAgICAgIFwielwiOiAtMS4wOVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2VyXCI6IHtcbiAgICAgICAgXCJ4MFwiOiAwLjY1LFxuICAgICAgICBcIngxXCI6IDEuMzUsXG4gICAgICAgIFwieTBcIjogMS41NSxcbiAgICAgICAgXCJ5MVwiOiAyLjEsXG4gICAgICAgIFwiZFwiOiAwLjI5LFxuICAgICAgICBcImZhblJcIjogMC4yLFxuICAgICAgICBcImZhblRpbnRcIjogMC4zNFxuICAgICAgfSxcbiAgICAgIFwicmFja1wiOiB7XG4gICAgICAgIFwieVwiOiAyLjA1LFxuICAgICAgICBcIngwXCI6IC0wLjQsXG4gICAgICAgIFwieDFcIjogMS4yLFxuICAgICAgICBcInpcIjogLTAuNDVcbiAgICAgIH0sXG4gICAgICBcImNsb3RoZXNcIjoge1xuICAgICAgICBcIml0ZW1zXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC4yNSxcbiAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgLTAuMDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgMC43MixcbiAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAwLjAxNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC42MixcbiAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAwLjU2LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIC0wLjAyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIDAuMDFcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29sb3JzXCI6IFtcbiAgICAgICAgICAzODIwMTM4LFxuICAgICAgICAgIDE0NjA1NTI0LFxuICAgICAgICAgIDcyMzc3NDgsXG4gICAgICAgICAgODM2MDg4MCxcbiAgICAgICAgICA4MTQxMzcwLFxuICAgICAgICAgIDEwNzg3NDQ4XG4gICAgICAgIF0sXG4gICAgICAgIFwib25cIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAzOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJzdHJpcFwiOiB7XG4gICAgICAgIFwiejBcIjogLTEuNyxcbiAgICAgICAgXCJ6MVwiOiAtMC4wNSxcbiAgICAgICAgXCJ3aW5cIjoge1xuICAgICAgICAgIFwid1wiOiAxLjQsXG4gICAgICAgICAgXCJoXCI6IDEuOVxuICAgICAgICB9LFxuICAgICAgICBcImdyb3VuZFlcIjogMS44NSxcbiAgICAgICAgXCJmbG9vckR5XCI6IDEuMzVcbiAgICAgIH0sXG4gICAgICBcImxvYmJ5RG9vclwiOiB7XG4gICAgICAgIFwiejBcIjogMC44LFxuICAgICAgICBcInoxXCI6IDIuNyxcbiAgICAgICAgXCJ5MFwiOiAwLjMsXG4gICAgICAgIFwieTFcIjogMi41XG4gICAgICB9LFxuICAgICAgXCJ0YW5rc1wiOiB7XG4gICAgICAgIFwiclwiOiAwLjYyLFxuICAgICAgICBcImhcIjogMS44OCxcbiAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuNSxcbiAgICAgICAgICAgIC0xLjk1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS4yLFxuICAgICAgICAgICAgLTEuOTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIC0xLjk1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS44NSxcbiAgICAgICAgICAgIC0wLjY1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAgIC0wLjY1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgLTAuNjVcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZ25cIjoge1xuICAgICAgICBcIngwXCI6IC0wLjUsXG4gICAgICAgIFwieDFcIjogMy41LFxuICAgICAgICBcInkwXCI6IDMuNjUsXG4gICAgICAgIFwieTFcIjogNC4xLFxuICAgICAgICBcInRleHRcIjogXCJBUEFSVE1FTlRcIixcbiAgICAgICAgXCJpbmtcIjogXCIjNWE1ODUyXCIsXG4gICAgICAgIFwiZ3JvdW5kXCI6IFwiI2Q0Y2RiZFwiXG4gICAgICB9LFxuICAgICAgXCJncm9vdmVXXCI6IDAuMDgsXG4gICAgICBcInNpZGVDb2xzXCI6IHtcbiAgICAgICAgXCJiYWNrXCI6IFtcbiAgICAgICAgICAtNS44NSxcbiAgICAgICAgICAtMi4xXG4gICAgICAgIF0sXG4gICAgICAgIFwiZnJvbnRcIjogW1xuICAgICAgICAgIDAuMixcbiAgICAgICAgICA1Ljg1XG4gICAgICAgIF0sXG4gICAgICAgIFwibWlkXCI6IFtcbiAgICAgICAgICAtMS45LFxuICAgICAgICAgIDEuOVxuICAgICAgICBdLFxuICAgICAgICBcInBsdXNYXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtNS44NSxcbiAgICAgICAgICAgIC0yLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xLjksXG4gICAgICAgICAgICAxLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuMixcbiAgICAgICAgICAgIDUuODVcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhbmdrb2tBcGFydG1lbnRCbG9ja01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnQmFuZ2tvayBBcGFydG1lbnQgQmxvY2snO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgY29uc3QgRiA9IEcuZmxvb3JzIGFzIG51bWJlcltdLCBCWCA9IEcuYmF5cyBhcyBudW1iZXJbXTtcbiAgY29uc3QgaGFsZiA9IEcub3BlbmluZyAvIDI7XG4gIGNvbnN0IGlubmVyWCA9IEcud3ggLSBHLnQ7ICAgICAgICAgICAvLyA3LjE3OiBpbm5lciBmYWNlIG9mIHRoZSBzaWRlIHdhbGxzXG4gIGNvbnN0IHpGYWNlID0gRy53eiwgekJhY2sgPSBHLnd6IC0gRy5yZWNlc3M7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgc2hlbGxcbiAgICogT05FIGNyZWFtIGNvbXBvbmVudDogdHdvIGZhY2FkZSBleHRydXNpb25zIHdpdGggdGhlIGJhbGNvbnkgcmVjZXNzZXMgYXMgcmVhbCBob2xlcywgYW5cbiAgICogTC1zaGFwZWQgLVggd2FsbCwgdGhlICtYIHdhbGwsIHRoZSBib2R5IGJldHdlZW4sIHRoZSBwYXJhcGV0IHJ1bnMsIHRoZSBncm91bmQtZmxvb3IgY29yZSBhbmRcbiAgICogbG9iYnksIGFuZCBldmVyeSBwYW5lbCBncm9vdmUuIE5vdGhpbmcgaGVyZSBzaGFyZXMgYSBwbGFuZSB3aXRoIGFueXRoaW5nIGVsc2UgZmFjaW5nIHRoZVxuICAgKiBzYW1lIHdheTogZmFjYWRlcyBidXR0IHRoZSBzaWRlIHdhbGxzJyBpbm5lciBmYWNlcywgdGhlIGJvZHkgYnV0dHMgdGhlIGZhY2FkZXMnIGJhY2tzLCB0aGVcbiAgICogY29yZSBidXR0cyB0aGUgYm9keSdzIHVuZGVyc2lkZSwgYW5kIHRoZSBncm9vdmVzIGJ1dHQgZWFjaCBvdGhlci4gKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgLy8gZmFjYWRlIHdpdGggaG9sZXM6IHggYWNyb3NzIHRoZSBpbm5lciB3aWR0aCwgeSBmcm9tIHlMb3cgdG8gdGhlIGRlY2tcbiAgICBjb25zdCBmYWNhZGUgPSAoeUxvdzogbnVtYmVyLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyLCByb3dzOiBudW1iZXJbXSkgPT4ge1xuICAgICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoLm1vdmVUbygtaW5uZXJYLCB5TG93KTsgc2gubGluZVRvKGlubmVyWCwgeUxvdyk7IHNoLmxpbmVUbyhpbm5lclgsIEcuZGVja1kpOyBzaC5saW5lVG8oLWlubmVyWCwgRy5kZWNrWSk7IHNoLmNsb3NlUGF0aCgpO1xuICAgICAgZm9yIChjb25zdCB5YiBvZiByb3dzKSBmb3IgKGNvbnN0IGJ4IG9mIEJYKSB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgICAgICBwLm1vdmVUbyhieCAtIGhhbGYsIHliICsgRy5ob2xlLnkwKTsgcC5saW5lVG8oYnggKyBoYWxmLCB5YiArIEcuaG9sZS55MCk7XG4gICAgICAgIHAubGluZVRvKGJ4ICsgaGFsZiwgeWIgKyBHLmhvbGUueTEpOyBwLmxpbmVUbyhieCAtIGhhbGYsIHliICsgRy5ob2xlLnkxKTsgcC5jbG9zZVBhdGgoKTtcbiAgICAgICAgc2guaG9sZXMucHVzaChwKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBleHRydWRlQWxvbmdaKHNoLCB6MCwgejEpO1xuICAgIH07XG4gICAgcGFydHMucHVzaChmYWNhZGUoRy5iZWFtLnkwLCB6QmFjaywgekZhY2UsIEYpKTsgICAgICAgICAgIC8vICtaOiBiZWFtIGFuZCBmaXZlIGJhbGNvbnkgcm93c1xuICAgIHBhcnRzLnB1c2goZmFjYWRlKEcucGxpbnRoLnkxLCAtekZhY2UsIC16QmFjaywgRikpOyAgICAgICAvLyAtWjogc29saWQgZ3JvdW5kIGZsb29yLCBmaXZlIHJvd3NcbiAgICAvLyBzaWRlIHdhbGxzLCBleHRydWRlZCBpbiB0aGUgWVogcGxhbmUuIFNoYXBlIHggaG9sZHMgLXosIHNvIHJvdGF0ZVkoK1BJLzIpICh4JyA9IHosIHonID0gLXgpXG4gICAgLy8gbGFuZHMgdGhlIHdhbGwgYXQgd29ybGQgeiA9IGludGVuZGVkIHogd2l0aCBpdHMgdGhpY2tuZXNzIGFsb25nICt4LlxuICAgIGNvbnN0IHNpZGVXYWxsID0gKHB0czogbnVtYmVyW11bXSwgeDA6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIHNoLm1vdmVUbygtcHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoLmxpbmVUbygtcHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICAgICAgc2guY2xvc2VQYXRoKCk7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaCwgeyBkZXB0aDogRy50LCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiAxIH0pO1xuICAgICAgZy5yb3RhdGVZKE1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDAsIDAsIDApOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuICAgIC8vIC1YOiBzb2xpZCB0byB0aGUgcGxpbnRoIGZvciB0aGUgcmVhciA2LjQgbSwgb3BlbiAodGhlIGxvYmJ5IGNvbG9ubmFkZSkgZm9yd2FyZCBvZiB6PTAuMjVcbiAgICBwYXJ0cy5wdXNoKHNpZGVXYWxsKFtbLXpGYWNlLCBHLnBsaW50aC55MV0sIFtHLmNvcmUuejEsIEcucGxpbnRoLnkxXSwgW0cuY29yZS56MSwgRy5iZWFtLnkwXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbekZhY2UsIEcuYmVhbS55MF0sIFt6RmFjZSwgRy5wYXJhcGV0WV0sIFstekZhY2UsIEcucGFyYXBldFldXSwgLUcud3gpKTtcbiAgICAvLyArWDogYmVhbSBsZXZlbCB1cDsgdGhlIGdyb3VuZCBmbG9vciBiZW5lYXRoIGlzIHRoZSBvcGVuIGNvbG9ubmFkZVxuICAgIHBhcnRzLnB1c2goc2lkZVdhbGwoW1stekZhY2UsIEcuYmVhbS55MF0sIFt6RmFjZSwgRy5iZWFtLnkwXSwgW3pGYWNlLCBHLnBhcmFwZXRZXSwgWy16RmFjZSwgRy5wYXJhcGV0WV1dLCBpbm5lclgpKTtcbiAgICAvLyBib2R5IGJldHdlZW4gdGhlIGZhY2FkZXMsIGJlYW0gbGV2ZWwgdG8gZGVjayBsZXZlbFxuICAgIHtcbiAgICAgIGNvbnN0IGJvZHkgPSBib3hBdCgwLCAoRy5iZWFtLnkwICsgRy5kZWNrWSkgLyAyLCAwLCBpbm5lclggKiAyLCBHLmRlY2tZIC0gRy5iZWFtLnkwLCB6QmFjayAqIDIpO1xuICAgICAgY29uc3QgbiA9IGJvZHkuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gMC42NDsgY29sW2kgKiAzICsgMV0gPSAwLjY0OyBjb2xbaSAqIDMgKyAyXSA9IDAuNjM7IH1cbiAgICAgIGJvZHkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgICBwYXJ0cy5wdXNoKGJvZHkpO1xuICAgIH1cbiAgICAvLyBwYXJhcGV0IHJ1bnMgb3ZlciB0aGUgZmFjYWRlcywgYmV0d2VlbiB0aGUgc2lkZSB3YWxscywgMC4zMCB0aGlja1xuICAgIGNvbnN0IHBoID0gRy5wYXJhcGV0WSAtIEcuZGVja1k7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCBHLmRlY2tZICsgcGggLyAyLCB6RmFjZSAtIEcudCAvIDIsIGlubmVyWCAqIDIsIHBoLCBHLnQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIEcuZGVja1kgKyBwaCAvIDIsIC16RmFjZSArIEcudCAvIDIsIGlubmVyWCAqIDIsIHBoLCBHLnQpKTtcbiAgICAvLyBncm91bmQtZmxvb3IgY29yZSAodGhlIHBsYWluIGJhY2sgd2FsbCBvZiB0aGUgcGFya2luZykgYW5kIHRoZSByZWNlc3NlZCBsb2JieVxuICAgIGNvbnN0IEMgPSBHLmNvcmUsIEwgPSBHLmxvYmJ5LCBneSA9IChHLnBsaW50aC55MSArIEcuYmVhbS55MCkgLyAyLCBnaCA9IEcuYmVhbS55MCAtIEcucGxpbnRoLnkxO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKC1pbm5lclggKyBDLngxKSAvIDIsIGd5LCAoLXpCYWNrICsgQy56MSkgLyAyLCBDLngxICsgaW5uZXJYLCBnaCwgQy56MSArIHpCYWNrKSk7XG4gICAgcGFydHMucHVzaChib3hBdCgoTC54MCArIEwueDEpIC8gMiwgZ3ksIChMLnowICsgTC56MSkgLyAyLCBMLngxIC0gTC54MCwgZ2gsIEwuejEgLSBMLnowKSk7XG5cbiAgICAvLyBwYW5lbCBncm9vdmVzOiBhbiBvdXRsaW5lIG9mIGZvdXIgc3RyaXBzIHBlciBwYW5lbCwgdmVydGljYWxzIGZ1bGwgaGVpZ2h0IGFuZCBob3Jpem9udGFsc1xuICAgIC8vIGJ1dHRlZCBiZXR3ZWVuIHRoZW0sIGFsbCBzdGFuZGluZyBHLmdyb292ZSBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlXG4gICAgY29uc3QgZ3cgPSBHLmdyb292ZVcsIGdwID0gRy5ncm9vdmU7XG4gICAgY29uc3Qgc2lkZVBhbmVsID0gKHg6IG51bWJlciwgc2duOiBudW1iZXIsIHowOiBudW1iZXIsIHoxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IGN4ID0geCArIHNnbiAqIGdwIC8gMjtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsICh5MCArIHkxKSAvIDIsIHowICsgZ3cgLyAyLCBncCwgeTEgLSB5MCwgZ3cpKTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsICh5MCArIHkxKSAvIDIsIHoxIC0gZ3cgLyAyLCBncCwgeTEgLSB5MCwgZ3cpKTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsIHkwICsgZ3cgLyAyLCAoejAgKyB6MSkgLyAyLCBncCwgZ3csIHoxIC0gejAgLSAyICogZ3cpKTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsIHkxIC0gZ3cgLyAyLCAoejAgKyB6MSkgLyAyLCBncCwgZ3csIHoxIC0gejAgLSAyICogZ3cpKTtcbiAgICB9O1xuICAgIGNvbnN0IGZyb250UGFuZWwgPSAoejogbnVtYmVyLCBzZ246IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgY3ogPSB6ICsgc2duICogZ3AgLyAyO1xuICAgICAgcGFydHMucHVzaChib3hBdCh4MCArIGd3IC8gMiwgKHkwICsgeTEpIC8gMiwgY3osIGd3LCB5MSAtIHkwLCBncCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdCh4MSAtIGd3IC8gMiwgKHkwICsgeTEpIC8gMiwgY3osIGd3LCB5MSAtIHkwLCBncCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdCgoeDAgKyB4MSkgLyAyLCB5MCArIGd3IC8gMiwgY3osIHgxIC0geDAgLSAyICogZ3csIGd3LCBncCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdCgoeDAgKyB4MSkgLyAyLCB5MSAtIGd3IC8gMiwgY3osIHgxIC0geDAgLSAyICogZ3csIGd3LCBncCkpO1xuICAgIH07XG4gICAgY29uc3Qgcm93czogbnVtYmVyW11bXSA9IEYubWFwKCh5YikgPT4gW3liICsgMC4yNSwgeWIgKyBHLnBpdGNoIC0gMC4yNV0pO1xuICAgIGNvbnN0IHRvcDogbnVtYmVyW10gPSBbRy5kZWNrWSArIDAuMjUsIEcucGFyYXBldFkgLSAwLjI1XTtcbiAgICBjb25zdCBncm91bmQ6IG51bWJlcltdID0gW0cucGxpbnRoLnkxICsgMC4yNSwgRy5iZWFtLnkwIC0gMC4yNV07XG4gICAgY29uc3QgU0MgPSBHLnNpZGVDb2xzO1xuICAgIGZvciAoY29uc3QgciBvZiBbLi4ucm93cywgdG9wXSkgeyBzaWRlUGFuZWwoLUcud3gsIC0xLCBTQy5iYWNrWzBdLCBTQy5iYWNrWzFdLCByWzBdLCByWzFdKTsgc2lkZVBhbmVsKC1HLnd4LCAtMSwgU0MuZnJvbnRbMF0sIFNDLmZyb250WzFdLCByWzBdLCByWzFdKTsgfVxuICAgIHNpZGVQYW5lbCgtRy53eCwgLTEsIFNDLmJhY2tbMF0sIFNDLmJhY2tbMV0sIGdyb3VuZFswXSwgZ3JvdW5kWzFdKTtcbiAgICBmb3IgKGNvbnN0IHIgb2YgWy4uLnJvd3MsIHRvcF0pIGZvciAoY29uc3QgYyBvZiBTQy5wbHVzWCBhcyBudW1iZXJbXVtdKSBzaWRlUGFuZWwoRy53eCwgMSwgY1swXSwgY1sxXSwgclswXSwgclsxXSk7XG4gICAgZm9yIChjb25zdCBieCBvZiBCWCkge1xuICAgICAgZnJvbnRQYW5lbCh6RmFjZSwgMSwgYnggLSBoYWxmLCBieCArIGhhbGYsIHRvcFswXSwgdG9wWzFdKTtcbiAgICAgIGZyb250UGFuZWwoLXpGYWNlLCAtMSwgYnggLSBoYWxmLCBieCArIGhhbGYsIHRvcFswXSwgdG9wWzFdKTtcbiAgICAgIGZyb250UGFuZWwoLXpGYWNlLCAtMSwgYnggLSBoYWxmLCBieCArIGhhbGYsIGdyb3VuZFswXSwgZ3JvdW5kWzFdKTtcbiAgICB9XG4gICAgYWRkKCdzaGVsbCcsICdSZW5kZXJlZCBzaGVsbCcsIG1lcmdlR2VvcyhwYXJ0cyksICd3YWxsJyk7XG4gICAgY29sbGlkZXJzWydzaGVsbCddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDkuNSwgMF0sIGhhbGZFeHRlbnRzOiBbNy41LCA5LjUsIDYuMTVdLFxuICAgICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlLicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGxpbnRoIGFuZCByb29mIGRlY2sgKi9cbiAgYWRkKCdwbGludGgnLCAnUGxpbnRoIGFuZCBwYXJraW5nIHNsYWInLCBib3hBdCgwLCBHLnBsaW50aC55MSAvIDIsIDAsIEcud3ggKiAyICsgMiAqIEcuZ3Jvb3ZlLCBHLnBsaW50aC55MSwgRy53eiAqIDIgKyAyICogRy5ncm9vdmUpLCAnY29uY3JldGUnKTtcbiAgYWRkKCdkZWNrJywgJ1Jvb2YgZGVjaycsIGJveEF0KDAsIEcuZGVja1kgKyBHLmRlY2tUIC8gMiwgMCwgaW5uZXJYICogMiwgRy5kZWNrVCwgKHpGYWNlIC0gRy50KSAqIDIpLCAnZGVjaycpO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY29sdW1uczogb25lIGdlb21ldHJ5LCAxMSBpbnN0YW5jZXMgKi9cbiAge1xuICAgIGNvbnN0IENMID0gRy5jb2x1bW5zLCBjaCA9IEcuYmVhbS55MCAtIEcucGxpbnRoLnkxICsgMC4wMTtcbiAgICBhZGRJbnN0KCdjb2x1bW5zJywgJ0dyb3VuZC1mbG9vciBjb2x1bW5zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KENMLnMsIGNoLCBDTC5zKSwgJ2NvbmNyZXRlJyxcbiAgICAgIChDTC5mcm9udCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBHLnBsaW50aC55MSAtIDAuMDEgKyBjaCAvIDIsIHopKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBiYWxjb255IG1vZHVsZSwgeDQwXG4gICAqIExvY2FsIGZyYW1lOiBvcmlnaW4gYXQgdGhlIGJheSBjZW50cmUgb24gdGhlIGZhY2FkZSBwbGFuZSBhdCB0aGUgZmxvb3IncyBzbGFiIGxldmVsLCArWiBvdXRcbiAgICogb2YgdGhlIHJlY2Vzcy4gUmVhciBpbnN0YW5jZXMgYXJlIHRoZSBzYW1lIG1vZHVsZSB5YXdlZCBhIGhhbGYgdHVybi4gKi9cbiAgY29uc3QgcGxhY2VtZW50czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gIGNvbnN0IGZsYWdzOiBib29sZWFuW10gPSBbXTtcbiAge1xuICAgIGNvbnN0IG9uID0gbmV3IFNldChHLmNsb3RoZXMub24gYXMgbnVtYmVyW10pO1xuICAgIGxldCBrID0gMDtcbiAgICBmb3IgKGxldCBmaSA9IDA7IGZpIDwgRi5sZW5ndGg7IGZpKyspIGZvciAoY29uc3QgZWxldiBvZiBbMCwgMV0pIGZvciAobGV0IGJpID0gMDsgYmkgPCBCWC5sZW5ndGg7IGJpKyspIHtcbiAgICAgIGNvbnN0IHliID0gRltmaV07XG4gICAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhCWFtiaV0sIHliLCBlbGV2ID09PSAwID8gekZhY2UgOiAtekZhY2UpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGVsZXYgPT09IDAgPyAwIDogTWF0aC5QSSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICAgIHBsYWNlbWVudHMucHVzaChtKTsgZmxhZ3MucHVzaChvbi5oYXMoaykpOyBrKys7XG4gICAgfVxuICB9XG4gIHtcbiAgICBjb25zdCBSID0gRy5yYWlsaW5nO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgcmggPSBSLnkxIC0gUi55MDtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIFIueTEsIFIueiwgUi5oYWxmICogMiwgMC4wNSwgMC4wNSkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgUi55MCwgUi56LCBSLmhhbGYgKiAyIC0gMC4xMCwgMC4wNCwgMC4wNCkpO1xuICAgIGZvciAoY29uc3QgcyBvZiBbLTEsIDFdKSBwYXJ0cy5wdXNoKGJveEF0KHMgKiAoUi5oYWxmIC0gMC4wMjUpLCBSLnkwICsgcmggLyAyLCBSLnosIDAuMDUsIHJoICsgMC4wNSwgMC4wNSkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IFIuYmFsdXN0ZXJzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSAtUi5oYWxmICsgKFIuaGFsZiAqIDIpICogaSAvIChSLmJhbHVzdGVycyArIDEpO1xuICAgICAgcGFydHMucHVzaChib3hBdCh4LCBSLnkwICsgcmggLyAyLCBSLnosIDAuMDI1LCByaCAtIDAuMDQsIDAuMDI1KSk7XG4gICAgfVxuICAgIGFkZEluc3QoJ3JhaWxpbmdzJywgJ0JhbGNvbnkgcmFpbGluZ3MnLCBtZXJnZUdlb3MocGFydHMpLCAnZ3JlZW4nLCBwbGFjZW1lbnRzKTtcbiAgfVxuICB7XG4gICAgY29uc3QgRCA9IEcuZG9vciwgQ0QgPSBHLmNvbmRlbnNlciwgUksgPSBHLnJhY2s7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBmeiA9IEQueiArIDAuMDI1LCBmZCA9IDAuMDU7XG4gICAgcGFydHMucHVzaChib3hBdChELngwICsgMC4wMywgKEQueTAgKyBELnkxKSAvIDIsIGZ6LCAwLjA2LCBELnkxIC0gRC55MCwgZmQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KEQueDEgLSAwLjAzLCAoRC55MCArIEQueTEpIC8gMiwgZnosIDAuMDYsIEQueTEgLSBELnkwLCBmZCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKEQueDAgKyBELngxKSAvIDIsIEQueTEgLSAwLjAzLCBmeiwgRC54MSAtIEQueDAgLSAwLjEyLCAwLjA2LCBmZCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKEQueDAgKyBELngxKSAvIDIsIEQueTAgKyAwLjA0LCBmeiwgRC54MSAtIEQueDAgLSAwLjEyLCAwLjA4LCBmZCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKEQueDAgKyBELngxKSAvIDIsIChELnkwICsgRC55MSkgLyAyLCBmeiwgMC4wNSwgRC55MSAtIEQueTAgLSAwLjE0LCBmZCAtIDAuMDEpKTtcbiAgICAvLyBjb25kZW5zZXIgcmVmcmlnZXJhbnQgcGlwZSBkb3duIHRoZSB3YWxsLCBhbmQgdGhlIGxhdW5kcnkgcmFpbCB3aXRoIGl0cyB0d28gd2FsbCBicmFja2V0c1xuICAgIHBhcnRzLnB1c2goY3lsQXQoQ0QueDEgLSAwLjA2LCAoRC55MCArIENELnkwKSAvIDIsIEQueiArIDAuMDMsIDAuMDMsIDAuMDMsIENELnkwIC0gRC55MCwgOCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKFJLLngwICsgUksueDEpIC8gMiwgUksueSwgUksueiwgUksueDEgLSBSSy54MCwgMC4wMywgMC4wMykpO1xuICAgIGZvciAoY29uc3QgeCBvZiBbUksueDAgKyAwLjA1LCBSSy54MSAtIDAuMDVdKSBwYXJ0cy5wdXNoKGJveEF0KHgsIFJLLnkgKyAwLjA2LCAoUksueiArIEQueikgLyAyLCAwLjAzLCAwLjAzLCBELnogLSBSSy56ID4gMCA/IEQueiAtIFJLLnogOiBSSy56IC0gRC56KSk7XG4gICAgYWRkSW5zdCgnZG9vci1mcmFtZXMnLCAnU2xpZGluZy1kb29yIGZyYW1lcywgcGlwZXMgYW5kIGxhdW5kcnkgcmFpbHMnLCBtZXJnZUdlb3MocGFydHMpLCAnYWx1JywgcGxhY2VtZW50cyk7XG4gICAgYWRkSW5zdCgnZG9vci1wYW5lcycsICdTbGlkaW5nLWRvb3IgcGFuZXMnLFxuICAgICAgYm94QXQoKEQueDAgKyBELngxKSAvIDIsIChELnkwICsgRC55MSkgLyAyLCBELnogKyAwLjAxNSwgRC54MSAtIEQueDAgLSAwLjEwLCBELnkxIC0gRC55MCAtIDAuMTIsIDAuMDIpLCAnZ2xhc3MnLCBwbGFjZW1lbnRzKTtcbiAgICAvLyBUaGUgcGxhdGUncyBwYW5lcyBhcmUgZGFyayBnbGFzcyB3aXRoIHBhbGUgY3VydGFpbiBmb2xkcyBiZWhpbmQgdGhlIGxlZnQgdHdvLXRoaXJkcy4gT25lXG4gICAgLy8gMjU2XjIgY2FudmFzIG9uIHRoZSBzaGFyZWQgZ2xhc3MgbWF0ZXJpYWwgKHRoZSBsb2JieSBkb29yIHRha2VzIGl0IHRvbyk6IGRhcmsgIzVGNjY1QyBncm91bmQsXG4gICAgLy8gYWx0ZXJuYXRpbmcgcGFsZSBjdXJ0YWluIHN0cmlwZXMuIE1lYW4gbHVtYSB+MTUwLCBzbyA0MCByZWNlc3NlZCBwYW5lcyBuZXZlciByZWFkIGFzIGhvbGVzLlxuICAgIC8vIFVuZGVyIE5vZGUgdGhlcmUgaXMgbm8gZG9jdW1lbnQgYW5kIHRoZSBwYW5lIHNoaXBzIGluIGl0cyBtZWFzdXJlZCBmbGF0IHRvbmUuXG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGMud2lkdGggPSAyNTY7IGMuaGVpZ2h0ID0gMjU2O1xuICAgICAgY29uc3QgY3R4ID0gYy5nZXRDb250ZXh0KCcyZCcpITtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnIzVmNjY1Yyc7IGN0eC5maWxsUmVjdCgwLCAwLCAyNTYsIDI1Nik7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IDE2ODsgeCArPSAxNCkgeyBjdHguZmlsbFN0eWxlID0gKHggLyAxNCkgJSAyID09PSAwID8gJ3JnYmEoMjAwLCAxOTksIDE4NSwgMC43OCknIDogJ3JnYmEoMTY4LCAxNjgsIDE1NiwgMC43MCknOyBjdHguZmlsbFJlY3QoeCwgNiwgMTQsIDI1MCk7IH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjAsIDEyOCwgMTE4LCAwLjU1KSc7IGN0eC5maWxsUmVjdCgxNjgsIDAsIDg4LCAyNTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLCAzNCwgMzAsIDAuMzUpJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgNik7XG4gICAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICAgIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBjb25zdCBnbSA9IG1hdGVyaWFsc1snZ2xhc3MnXTtcbiAgICAgIGdtLm1hcCA9IHRleDsgZ20uY29sb3Iuc2V0KDB4ZmZmZmZmKTsgZ20ubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuICB7XG4gICAgY29uc3QgQ0QgPSBHLmNvbmRlbnNlcjtcbiAgICBjb25zdCBib2R5ID0gYm94QXQoKENELngwICsgQ0QueDEpIC8gMiwgKENELnkwICsgQ0QueTEpIC8gMiwgRy5kb29yLnogKyAwLjAxICsgQ0QuZCAvIDIsIENELngxIC0gQ0QueDAsIENELnkxIC0gQ0QueTAsIENELmQpO1xuICAgIGNvbnN0IGZhbiA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KENELmZhblIsIENELmZhblIsIDAuMDIsIDIwKTtcbiAgICBmYW4ucm90YXRlWChNYXRoLlBJIC8gMik7XG4gICAgZmFuLnRyYW5zbGF0ZSgoQ0QueDAgKyBDRC54MSkgLyAyIC0gMC4wNSwgKENELnkwICsgQ0QueTEpIC8gMiwgRy5kb29yLnogKyBDRC5kICsgMC4wMSk7XG4gICAgLy8gdGhlIGdyaWxsZTogYSBwZXItdmVydGV4IG11bHRpcGxpZXIgaW4gTElORUFSIHNwYWNlLCAwLjM0IH4gYSAwLjYxIHNSR0IgcmF0aW8sIHNvIGl0IHJlbmRlcnNcbiAgICAvLyBuZWFyIGx1bWEgODAgc2lkZS1saXQgcmF0aGVyIHRoYW4gdGhlIG1lYXN1cmVkICMzQTM4MzAgdGhhdCB0aGUgaG9sZSBnYXRlIHdvdWxkIGZsYWdcbiAgICBjb25zdCBmYyA9IG5ldyBGbG9hdDMyQXJyYXkoZmFuLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpLmZpbGwoQ0QuZmFuVGludCk7XG4gICAgZmFuLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGZjLCAzKSk7XG4gICAgY29uc3QgYmMgPSBuZXcgRmxvYXQzMkFycmF5KGJvZHkuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50ICogMykuZmlsbCgxKTtcbiAgICBib2R5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGJjLCAzKSk7XG4gICAgYWRkSW5zdCgnY29uZGVuc2VycycsICdBaXItY29uZGl0aW9uaW5nIGNvbmRlbnNlcnMnLCBtZXJnZUdlb3MoW2JvZHksIGZhbl0pLCAnY29uZCcsIHBsYWNlbWVudHMpO1xuICB9XG4gIHtcbiAgICBjb25zdCBDTCA9IEcuY2xvdGhlcywgUksgPSBHLnJhY2s7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBjb2xzID0gQ0wuY29sb3JzIGFzIG51bWJlcltdO1xuICAgIChDTC5pdGVtcyBhcyBudW1iZXJbXVtdKS5mb3JFYWNoKChbeCwgdywgaCwgY2ksIGR6XSkgPT4ge1xuICAgICAgY29uc3QgZyA9IGJveEF0KHgsIFJLLnkgLSAwLjAyIC0gaCAvIDIsIFJLLnogKyBkeiwgdywgaCwgMC4wMyk7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGNvbHNbY2kgJSBjb2xzLmxlbmd0aF0pO1xuICAgICAgY29uc3QgYXJyID0gbmV3IEZsb2F0MzJBcnJheShnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpO1xuICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCBhcnIubGVuZ3RoOyB2ICs9IDMpIHsgYXJyW3ZdID0gYy5yOyBhcnJbdiArIDFdID0gYy5nOyBhcnJbdiArIDJdID0gYy5iOyB9XG4gICAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGFyciwgMykpO1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICB9KTtcbiAgICBjb25zdCBtYXRzID0gcGxhY2VtZW50cy5maWx0ZXIoKF8sIGkpID0+IGZsYWdzW2ldKTtcbiAgICAvLyBwZXItaW5zdGFuY2UgdGludCByb3RhdGVzIHRoZSBwYWxldHRlIGJ5IGluZGV4IHNvIG5vIHR3byByYWNrcyByZWFkIGlkZW50aWNhbFxuICAgIGNvbnN0IHRpbnRzID0gbWF0cy5tYXAoKF8sIGkpID0+IFsweGZmZmZmZiwgMHhkOGRjZTgsIDB4ZThkOGQwLCAweGQwZDhkMCwgMHhjOGM4ZDhdW2kgJSA1XSk7XG4gICAgYWRkSW5zdCgnbGF1bmRyeScsICdIYW5naW5nIGxhdW5kcnknLCBtZXJnZUdlb3MocGFydHMpLCAnY2xvdGgnLCBtYXRzLCB0aW50cyk7XG4gIH1cblxuICB7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5QbGFuZUdlb21ldHJ5KEcub3BlbmluZyAtIDAuMDYsIDAuNjIpO1xuICAgIHEudHJhbnNsYXRlKDAsIDAuMTksIDAuMDA2KTtcbiAgICBjb25zdCB0aW50cyA9IHBsYWNlbWVudHMubWFwKChfLCBpKSA9PiBbMHhmZmZmZmYsIDB4YmRiZGJkLCAweGUwZTBlMCwgMHg5ZjlmOWYsIDB4ZDBkMGQwXVsoaSAqIDcpICUgNV0pO1xuICAgIGNvbnN0IGluc3QgPSBhZGRJbnN0KCdzdHJlYWtzJywgJ1JhaW4td2FzaCBzdHJlYWtzJywgcSwgJ3N0cmVhaycsIHBsYWNlbWVudHMsIHRpbnRzKTtcbiAgICBjb25zdCBzbSA9IGluc3QubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgc20uZGVwdGhXcml0ZSA9IGZhbHNlOyBzbS5wb2x5Z29uT2Zmc2V0ID0gdHJ1ZTsgc20ucG9seWdvbk9mZnNldEZhY3RvciA9IC0xO1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBzbS5vcGFjaXR5ID0gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgYy53aWR0aCA9IDUxMjsgYy5oZWlnaHQgPSA5NjtcbiAgICAgIGNvbnN0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGMud2lkdGgsIGMuaGVpZ2h0KTtcbiAgICAgIC8vIHNlZWRlZCBMQ0cgc28gdGhlIHN0cmVhayBsYXlvdXQgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGRcbiAgICAgIGxldCBzZWVkID0gNDI0MjsgY29uc3Qgcm5kID0gKCkgPT4geyBzZWVkID0gKHNlZWQgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzZWVkIC8gNDI5NDk2NzI5NjsgfTtcbiAgICAgIC8vIHRoZSBwbGF0ZSdzIHN0cmVha3MgaGFuZyBmcm9tIHRoZSByYWlsaW5nIHBvc3QgYmFzZXMgYW5kIHRoZSBzbGFiIGVuZHMgLS0gYSBmZXcgcGVyIGJheSxcbiAgICAgIC8vIGZhaW50LCBub3QgYSBmcmluZ2U6IHR3byBjbHVzdGVycyBhdCB0aGUgZW5kcyBwbHVzIHRocmVlIGxvb3NlIG9uZXNcbiAgICAgIGNvbnN0IGFuY2hvcnMgPSBbMTgsIDQwLCA0NzAsIDQ5NCwgMTIwICsgcm5kKCkgKiA4MCwgMjIwICsgcm5kKCkgKiA4MCwgMzMwICsgcm5kKCkgKiA4MF07XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFuY2hvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGFuY2hvcnNbaV0gKyAocm5kKCkgLSAwLjUpICogMTAsIHcgPSAzICsgcm5kKCkgKiA2LCBhID0gMC4xMCArIHJuZCgpICogMC4yMCwgbGVuID0gMzAgKyBybmQoKSAqIDYwO1xuICAgICAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDkwLCA5MCwgODUsICcgKyBhLnRvRml4ZWQoMikgKyAnKScpO1xuICAgICAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSg5MCwgOTAsIDg1LCAwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7XG4gICAgICB9XG4gICAgICAvLyBhIHRoaW4gd2FzaCByaWdodCB1bmRlciB0aGUgcmFpbGluZyBsaW5lXG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCAxMCk7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoOTAsIDkwLCA4NSwgMC4xNiknKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDkwLCA5MCwgODUsIDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGN0eC5maWxsUmVjdCgwLCAwLCBjLndpZHRoLCAxOCk7XG4gICAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICAgIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBzbS5tYXAgPSB0ZXg7IHNtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0YWlyd2VsbCB3aW5kb3dzLCB4NiAqL1xuICB7XG4gICAgY29uc3QgUyA9IEcuc3RyaXAsIFcgPSBTLndpbjtcbiAgICBjb25zdCB6YyA9IChTLnowICsgUy56MSkgLyAyO1xuICAgIGNvbnN0IHlzOiBudW1iZXJbXSA9IFtTLmdyb3VuZFksIC4uLkYubWFwKCh5YikgPT4geWIgKyBTLmZsb29yRHkpXTtcbiAgICBjb25zdCB4ID0gLUcud3g7XG4gICAgY29uc3QgZnJhbWU6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBmZCA9IDAuMDYsIGZ4ID0geCAtIDAuMDE7XG4gICAgZnJhbWUucHVzaChib3hBdChmeCwgMCwgLVcudyAvIDIgKyAwLjAzLCBmZCwgVy5oLCAwLjA2KSk7XG4gICAgZnJhbWUucHVzaChib3hBdChmeCwgMCwgVy53IC8gMiAtIDAuMDMsIGZkLCBXLmgsIDAuMDYpKTtcbiAgICBmcmFtZS5wdXNoKGJveEF0KGZ4LCBXLmggLyAyIC0gMC4wMywgMCwgZmQsIDAuMDYsIFcudyAtIDAuMTIpKTtcbiAgICBmcmFtZS5wdXNoKGJveEF0KGZ4LCAtVy5oIC8gMiArIDAuMDMsIDAsIGZkLCAwLjA2LCBXLncgLSAwLjEyKSk7XG4gICAgZnJhbWUucHVzaChib3hBdChmeCwgMCwgMCwgZmQgLSAwLjAxLCBXLmggLSAwLjEyLCAwLjA1KSk7XG4gICAgZm9yIChjb25zdCBmIG9mIFstMSAvIDYsIDEgLyA2XSkgZnJhbWUucHVzaChib3hBdChmeCwgZiAqIFcuaCwgMCwgZmQgLSAwLjAxLCAwLjA1LCBXLncgLSAwLjEyKSk7XG4gICAgY29uc3QgYXQgPSB5cy5tYXAoKHkpID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oMCwgeSwgemMpKTtcbiAgICBhZGRJbnN0KCdzdGFpci1mcmFtZXMnLCAnU3RhaXJ3ZWxsIHdpbmRvdyBmcmFtZXMnLCBtZXJnZUdlb3MoZnJhbWUpLCAnYWx1JywgYXQpO1xuICAgIGFkZEluc3QoJ3N0YWlyLXBhbmVzJywgJ1N0YWlyd2VsbCBmcm9zdGVkIHBhbmVzJywgYm94QXQoeCArIDAuMDA1LCAwLCAwLCAwLjA1LCBXLmggLSAwLjEwLCBXLncgLSAwLjEwKSwgJ2Zyb3N0ZWQnLCBhdCk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxvYmJ5IGRvb3Igb24gdGhlIC1YIGZhY2Ugb2YgdGhlIGxvYmJ5ICovXG4gIHtcbiAgICBjb25zdCBMID0gRy5sb2JieSwgRCA9IEcubG9iYnlEb29yO1xuICAgIGNvbnN0IHggPSBMLngwLCB6YyA9IChELnowICsgRC56MSkgLyAyLCB5YyA9IChELnkwICsgRC55MSkgLyAyLCB3ID0gRC56MSAtIEQuejAsIGggPSBELnkxIC0gRC55MDtcbiAgICBjb25zdCBmeCA9IHggLSAwLjAyNSwgZmQgPSAwLjA1O1xuICAgIGFkZCgnbG9iYnktZnJhbWUnLCAnTG9iYnkgZG9vciBmcmFtZScsIG1lcmdlR2VvcyhbXG4gICAgICBib3hBdChmeCwgeWMsIEQuejAgKyAwLjAzLCBmZCwgaCwgMC4wNiksIGJveEF0KGZ4LCB5YywgRC56MSAtIDAuMDMsIGZkLCBoLCAwLjA2KSxcbiAgICAgIGJveEF0KGZ4LCBELnkxIC0gMC4wMywgemMsIGZkLCAwLjA2LCB3IC0gMC4xMiksIGJveEF0KGZ4LCB5YywgemMsIGZkIC0gMC4wMSwgaCAtIDAuMDYsIDAuMDUpLFxuICAgIF0pLCAnYWx1Jyk7XG4gICAgYWRkKCdsb2JieS1wYW5lJywgJ0xvYmJ5IGRvb3IgZ2xhc3MnLCBib3hBdCh4IC0gMC4wMTUsIHljIC0gMC4wMiwgemMsIDAuMDIsIGggLSAwLjEwLCB3IC0gMC4xMCksICdnbGFzcycpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3YXRlciB0YW5rcywgeDYgKi9cbiAge1xuICAgIGNvbnN0IFQgPSBHLnRhbmtzLCByID0gVC5yO1xuICAgIGNvbnN0IHByb2Y6IG51bWJlcltdW10gPSBbWzAsIDBdLCBbciAqIDAuODIsIDBdLCBbciwgMC4xMF1dO1xuICAgIC8vIGZvdXIgbW91bGRlZCBob29wcyB1cCB0aGUgYm9keSwgdGhlbiBhIHNob3VsZGVyZWQgZG9tZSBhbmQgYSBzY3JldyBjYXBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgeyBjb25zdCB5ID0gMC4zMCArIGkgKiAwLjM2OyBwcm9mLnB1c2goW3IsIHldLCBbciAqIDAuOTUsIHkgKyAwLjA2XSwgW3IgKiAwLjk1LCB5ICsgMC4xNF0sIFtyLCB5ICsgMC4yMF0pOyB9XG4gICAgcHJvZi5wdXNoKFtyLCAxLjUwXSwgW3IgKiAwLjkwLCAxLjY2XSwgW3IgKiAwLjYyLCAxLjc4XSwgW3IgKiAwLjMwLCAxLjgzXSwgW3IgKiAwLjMwLCBULmhdLCBbMCwgVC5oXSk7XG4gICAgY29uc3QgZyA9IGxhdGhlKHByb2YsIDIwKTtcbiAgICBhZGRJbnN0KCd0YW5rcycsICdSb29mdG9wIHdhdGVyIHRhbmtzJywgZywgJ3RhbmsnLFxuICAgICAgKFQuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgRy5kZWNrWSArIEcuZGVja1QsIHopKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBuYW1lIGJvYXJkXG4gICAqIEEgdGhpbiBib2FyZCBwcm91ZCBvZiB0aGUgYmVhbSwgaXRzICtaIGZhY2UgY2FycnlpbmcgYSBjYW52YXM7IGV2ZXJ5IG90aGVyIGZhY2Ugc2FtcGxlcyBhXG4gICAqIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMuIFVuZGVyIE5vZGUgdGhlcmUgaXMgbm8gZG9jdW1lbnQsIHNvIHRoZSBib2FyZCBzaGlwcyBpbiB0aGVcbiAgICogYmVhbSdzIG93biBjcmVhbSBhbmQgdGhlIHJ1bnRpbWUgcHJvYmVzIHNlZSBhIHBsYWluIGJveC4gKi9cbiAge1xuICAgIGNvbnN0IFMgPSBHLnNpZ247XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShTLngxIC0gUy54MCwgUy55MSAtIFMueTAsIDAuMDIpO1xuICAgIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgaWYgKGkgPCAxNiB8fCBpID4gMTkpIHV2LnNldFhZKGksIDAuMDEsIDAuMDEpO1xuICAgIGcudHJhbnNsYXRlKChTLngwICsgUy54MSkgLyAyLCAoUy55MCArIFMueTEpIC8gMiwgekZhY2UgKyAwLjAxKTtcbiAgICBjb25zdCBtZXNoID0gYWRkKCdzaWduJywgJ05hbWUgYm9hcmQnLCBnLCAnc2lnbicpO1xuICAgIGNvbnN0IG1hdCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hdC5jb2xvci5zZXQoUy5ncm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjLndpZHRoID0gMTAyNDsgYy5oZWlnaHQgPSAxMTY7XG4gICAgICBjb25zdCBjdHggPSBjLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFMuZ3JvdW5kOyBjdHguZmlsbFJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFMuaW5rO1xuICAgICAgY3R4LmZvbnQgPSAnYm9sZCA4NHB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xuICAgICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnOyBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjdHguZmlsbFRleHQoUy50ZXh0LCBjLndpZHRoICogMC41LCBjLmhlaWdodCAqIDAuNTQpO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoYyk7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4OyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUJhbmdrb2tBcGFydG1lbnRCbG9ja01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUE2Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVB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O0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxNQUFNO0FBQUEsUUFDSjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLFFBQ0o7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNB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
