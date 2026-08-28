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
  "envelope": "Envelope 8.70 x 9.20 x 12.00 m, origin base-center, +Y up, long axis on Z, open front +X.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "pale",
      "color": 9208696,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "red",
      "color": 6169116,
      "roughness": 0.74,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "gold",
      "color": 10121288,
      "roughness": 0.38,
      "metalness": 0.35,
      "envMapIntensity": 1.2
    },
    {
      "id": "green",
      "color": 5204822,
      "roughness": 0.55,
      "metalness": 0
    },
    {
      "id": "eave",
      "color": 5204822,
      "roughness": 0.58,
      "metalness": 0
    },
    {
      "id": "dark",
      "color": 4531488,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "coil",
      "color": 7629410,
      "roughness": 0.93,
      "metalness": 0
    }
  ],
  "geometry": {
    "H": 9.2,
    "plinth": {
      "top": 0.55,
      "xF": 3.68,
      "xB": -2.88,
      "hz": 5.06,
      "step": 0.32
    },
    "wall": {
      "y1": 4.85,
      "xF": 3.52,
      "xB": -2.76,
      "hz": 5.01,
      "thick": 0.37,
      "doorWallX": -0.3
    },
    "beam": {
      "y0": 4.78,
      "y1": 5.45,
      "thick": 0.45,
      "proud": 0.25
    },
    "column": {
      "r": 0.28,
      "y0": 0.85,
      "y1": 4.8,
      "baseR": 0.42,
      "baseH": 0.3,
      "z": [
        -4.3,
        -2.48,
        2.48,
        4.3
      ],
      "xFront": 3.2,
      "xInner": 0.35
    },
    "dragon": {
      "z": [
        -2.48,
        2.48
      ],
      "x": 3.2,
      "R": 0.41,
      "r": 0.1,
      "turns": 2.4,
      "y0": 1.15,
      "y1": 4.25,
      "stations": 64
    },
    "doors": {
      "central": [
        -1.2,
        1.2,
        3.6
      ],
      "side": [
        [
          -3.95,
          -2.8,
          3.4
        ],
        [
          2.8,
          3.95,
          3.4
        ]
      ],
      "recess": 0.26
    },
    "roof": {
      "yE": 5.66,
      "yR": 7.73,
      "hPed": 0.69,
      "dX0": 4.14,
      "dZ0": 5.93,
      "dZPed": 4.09,
      "hipExp": 1.3,
      "lift": 0.7,
      "liftT": 0.3,
      "push": 0.06,
      "fascia": 0.23,
      "perSide": 8,
      "profile": [
        [
          0,
          1
        ],
        [
          0.058,
          0.913
        ],
        [
          0.116,
          0.831
        ],
        [
          0.169,
          0.74
        ],
        [
          0.227,
          0.653
        ],
        [
          0.284,
          0.587
        ],
        [
          0.342,
          0.531
        ],
        [
          0.4,
          0.476
        ],
        [
          0.453,
          0.424
        ],
        [
          0.511,
          0.384
        ],
        [
          0.569,
          0.333
        ],
        [
          0.627,
          0.284
        ],
        [
          0.684,
          0.242
        ],
        [
          0.738,
          0.189
        ],
        [
          0.796,
          0.149
        ],
        [
          0.853,
          0.087
        ],
        [
          0.911,
          0.055
        ],
        [
          0.969,
          0.025
        ],
        [
          1,
          0
        ]
      ],
      "t": [
        0,
        0.058,
        0.116,
        0.169,
        0.227,
        0.284,
        0.333,
        0.4,
        0.453,
        0.511,
        0.569,
        0.627,
        0.684,
        0.738,
        0.796,
        0.853,
        0.911,
        0.969,
        1
      ]
    },
    "ridge": {
      "halfZ": 3.96,
      "w": 0.4,
      "y0": 7.65,
      "y1": 8.19
    },
    "coils": {
      "count": 10,
      "rTop": 0.07,
      "rBot": 0.42,
      "h": 0.75,
      "x": 2.2,
      "z0": -3.95,
      "z1": 3.95
    },
    "censer": {
      "x": 1.7,
      "z": 0
    },
    "wear": {
      "size": 512,
      "roof": {
        "tile": 2,
        "pitch": 0.25,
        "course": 0.34,
        "valley": 0.64,
        "crest": 1.12,
        "bump": 0.07,
        "moss": [
          0.8,
          0.86,
          0.78
        ],
        "grime": [
          0.72,
          0.72,
          0.7
        ]
      },
      "eave": {
        "pitch": 0.25,
        "capR": 0.095,
        "field": 0.92,
        "capRim": 0.55,
        "capFace": 1.08,
        "capCore": 0.78,
        "drip": 0.8,
        "bump": 0.05
      },
      "red": {
        "tile": 2,
        "bump": 0.03,
        "soot": [
          0.42,
          0.36,
          0.34
        ],
        "wash": [
          0.62,
          0.55,
          0.52
        ],
        "grain": [
          0.55,
          0.45,
          0.42
        ]
      },
      "stone": {
        "tile": 2,
        "bump": 0.03,
        "mottle": [
          0.84,
          0.84,
          0.86
        ],
        "stain": [
          0.78,
          0.66,
          0.5
        ],
        "grime": [
          0.6,
          0.58,
          0.55
        ],
        "grain": [
          0.7,
          0.7,
          0.72
        ]
      },
      "coil": {
        "groove": 0.66,
        "grooves": 12,
        "bump": 0.08
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
        v = p.getY(i);
      }
      out[i * 2] = u / tile;
      out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  const W = G.wear;
  function profileAt(t) {
    const P = G.roof.profile;
    if (t <= 0) return 1;
    if (t >= 1) return 0;
    for (let i = 1; i < P.length; i++) if (t <= P[i][0]) {
      const f = (t - P[i - 1][0]) / (P[i][0] - P[i - 1][0]);
      return P[i - 1][1] + (P[i][1] - P[i - 1][1]) * f;
    }
    return 0;
  }
  function spiralHorn(len, phi0, phi1, w0, w1, across, n) {
    const segs = [];
    let x = 0, y = 0;
    const L = len / n;
    for (let j = 0; j < n; j++) {
      const phi = phi0 + (phi1 - phi0) * (j + 0.5) / n;
      const w = w0 + (w1 - w0) * (j + 0.5) / n;
      const g = new THREE.BoxGeometry(w, L + w * 0.35, across);
      g.rotateZ(phi - Math.PI / 2);
      g.translate(x + Math.cos(phi) * L / 2, y + Math.sin(phi) * L / 2, 0);
      segs.push(g);
      x += Math.cos(phi) * L;
      y += Math.sin(phi) * L;
    }
    return mergeGeos(segs);
  }
  {
    const P = G.plinth, C = G.censer, Wl = G.wall;
    const parts = [
      boxAt((P.xF + P.xB) / 2, P.step / 2, 0, P.xF - P.xB + 0.12, P.step, (P.hz + 0.06) * 2),
      boxAt((P.xF + P.xB) / 2, (P.step + P.top) / 2, 0, P.xF - P.xB, P.top - P.step, P.hz * 2)
    ];
    for (const x of [Wl.xF - 0.21 + 0.025, Wl.xB + 0.21 - 0.025]) for (const zs of [-1, 1]) {
      parts.push(boxAt(x, P.top + 0.48, zs * (Wl.hz - 0.21 + 0.025), 0.42, 0.96, 0.42));
    }
    const bowl = lathe([
      [0.2, 0.36],
      [0.48, 0.48],
      [0.6, 0.86],
      [0.55, 1.12],
      [0.62, 1.22],
      [0.62, 1.34],
      [0.52, 1.34],
      [0.52, 1.26],
      [0, 1.26]
    ], 18, P.top);
    bowl.translate(C.x, 0, C.z);
    parts.push(bowl);
    for (const zs of [-1, 1]) parts.push(boxAt(C.x, P.top + 1.42, C.z + zs * 0.53, 0.12, 0.26, 0.14));
    for (let i = 0; i < 3; i++) {
      const a = i / 3 * Math.PI * 2 + 0.5;
      parts.push(boxAt(C.x + Math.sin(a) * 0.36, P.top + 0.2, C.z + Math.cos(a) * 0.36, 0.12, 0.4, 0.12));
    }
    for (let i = 0; i < 7; i++) {
      const a = i * 1.3;
      parts.push(cylAt(C.x + Math.sin(a) * 0.15, P.top + 1.55, C.z + Math.cos(a) * 0.15, 0.012, 0.012, 0.6, 5));
    }
    const geo = mergeGeos(parts);
    projUv(geo, W.stone.tile);
    tintByHeight(geo, 0, P.top, [0.84, 0.82, 0.78]);
    add("plinth", "Stone plinth, quoins and censer", geo, "pale");
    colliders["plinth"] = {
      shape: "box",
      localCenter: [0, 4.6, 0],
      halfExtents: [4.35, 4.6, 6],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the shrine, not with its individual columns.'
    };
  }
  {
    const Wl = G.wall, P = G.plinth, D = G.doors, R = G.roof;
    const y0 = P.top - 0.02, y1 = Wl.y1, hh = y1 - y0;
    const dwx = Wl.doorWallX;
    const parts = [
      boxAt((Wl.xB + dwx) / 2, y0 + hh / 2, 0, dwx - Wl.xB, hh, Wl.hz * 2)
      // hall block
    ];
    for (const zs of [-1, 1]) parts.push(boxAt(Wl.xF / 2, y0 + hh / 2, zs * (Wl.hz - Wl.thick / 2), Wl.xF, hh, Wl.thick));
    const openings = [[D.side[0][0], D.side[0][1], D.side[0][2]], [D.central[0], D.central[1], D.central[2]], [D.side[1][0], D.side[1][1], D.side[1][2]]];
    let zc = -Wl.hz;
    for (const [za, zb, top] of openings) {
      parts.push(boxAt(dwx / 2, y0 + hh / 2, (zc + za) / 2, -dwx, hh, za - zc));
      parts.push(boxAt(dwx / 2, (y0 + top + y1) / 2, (za + zb) / 2, -dwx, y1 - (y0 + top), zb - za));
      zc = zb;
    }
    parts.push(boxAt(dwx / 2, y0 + hh / 2, (zc + Wl.hz) / 2, -dwx, hh, Wl.hz - zc));
    const leafX = dwx + 0.03 + 0.04;
    for (const zs of [-1, 1]) {
      const zi = zs * 0.02, zo = zs * (D.central[1] - 0.03);
      const ly0 = P.top + 0.01, lh = D.central[2] - 0.14;
      parts.push(boxAt(leafX, ly0 + lh / 2, (zi + zo) / 2, 0.06, lh, Math.abs(zo - zi)));
      parts.push(boxAt(leafX + 0.045, ly0 + 2.05, (zi + zo) / 2, 0.03, 2.4, Math.abs(zo - zi) - 0.3));
    }
    const dXPed = profileAt(R.hPed / (R.yR - R.yE)) * R.dX0;
    for (const zs of [-1, 1]) {
      const sh = new THREE.Shape();
      sh.moveTo(-dXPed + 0.02, R.yE + R.hPed - 0.04);
      sh.lineTo(dXPed - 0.02, R.yE + R.hPed - 0.04);
      sh.lineTo(0, R.yR - 0.02);
      sh.closePath();
      const g = extrudeAlongZ(sh, zs > 0 ? R.dZPed - 0.12 : -R.dZPed + 0.02, zs > 0 ? R.dZPed - 0.02 : -R.dZPed + 0.12);
      parts.push(g);
    }
    const geo = mergeGeos(parts);
    projUv(geo, W.red.tile);
    {
      const p = geo.getAttribute("position");
      const col = new Float32Array(p.count * 3);
      for (let i = 0; i < p.count; i++) {
        const t = Math.min(1, Math.max(0, (p.getY(i) - 2) / (y1 - 2)));
        const m = 1 - 0.38 * t * t;
        col[i * 3] = m;
        col[i * 3 + 1] = m * 0.97;
        col[i * 3 + 2] = m * 0.97;
      }
      geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    }
    add("body", "Shrine body and pediments", geo, "red");
  }
  {
    const Wl = G.wall, B = G.beam, P = G.plinth, D = G.doors, C = G.column, R = G.roof;
    const ox = Wl.xF + B.proud, bx0 = Wl.xB - B.proud, oz = Wl.hz + B.proud;
    const parts = [
      boxAt(ox - B.thick / 2, (B.y0 + B.y1) / 2, 0, B.thick, B.y1 - B.y0, oz * 2),
      // front beam
      boxAt(bx0 + 0.15, (B.y0 + B.y1) / 2, 0, 0.3, B.y1 - B.y0, oz * 2)
      // back beam
    ];
    for (const zs of [-1, 1]) parts.push(boxAt((ox - B.thick + bx0 + 0.3) / 2, (B.y0 + B.y1) / 2, zs * (oz - B.thick / 2), ox - B.thick - bx0 - 0.3, B.y1 - B.y0, B.thick));
    for (const z of C.z) {
      parts.push(boxAt(ox + 0.11, B.y0 + 0.22, z, 0.22, 0.26, 0.62));
      parts.push(boxAt(ox + 0.16, B.y0 + 0.5, z, 0.32, 0.22, 0.9));
    }
    const bx = Wl.doorWallX;
    for (const [za, zb, top] of [D.side[0], D.central, D.side[1]]) {
      parts.push(boxAt(bx + 0.01, P.top + 0.015 + (top - 0.015) / 2, (za + zb) / 2, 0.02, top - 0.015, zb - za));
    }
    const soffitY = R.yE - R.fascia - 0.03;
    parts.push(boxAt(Wl.xF / 2 - 0.05, soffitY - 0.025, 0, Wl.xF - 0.1, 0.03, (Wl.hz - Wl.thick) * 2 - 0.1));
    add("shade", "Sooted beam, brackets, recesses and ceiling", mergeGeos(parts), "dark");
  }
  {
    const C = G.column, P = G.plinth;
    const h = C.y1 - C.y0;
    const shaft = cylAt(0, 0, 0, C.r, C.r * 1.06, h, 16);
    const at = [];
    for (const z of C.z) {
      at.push([C.xFront, z]);
      at.push([C.xInner, z]);
    }
    addInst(
      "columns",
      "Round columns",
      shaft,
      "red",
      at.map(([x, z]) => new THREE.Matrix4().setPosition(x, C.y0 + h / 2, z))
    );
    const base = mergeGeos([
      cylAt(0, 0, 0, C.baseR * 0.94, C.baseR, C.baseH * 0.7, 16),
      cylAt(0, C.baseH * 0.35 + C.baseH * 0.15, 0, C.r * 1.25, C.baseR * 0.9, C.baseH * 0.3, 16)
    ]);
    projUv(base, W.stone.tile);
    addInst(
      "bases",
      "Column drum bases",
      base,
      "pale",
      at.map(([x, z]) => new THREE.Matrix4().setPosition(x, P.top - 5e-3 + C.baseH * 0.35, z))
    );
  }
  {
    const D = G.dragon, B = G.beam, Wl = G.wall;
    const parts = [];
    const helix = (cz, s) => {
      const a = s * D.turns * Math.PI * 2;
      return [D.x + Math.sin(a) * D.R, D.y0 + (D.y1 - D.y0) * s, cz + Math.cos(a) * D.R];
    };
    for (const cz of D.z) {
      const pos = [], idx = [], seg = 8, n = D.stations;
      for (let i = 0; i <= n; i++) {
        const s = i / n, p2 = helix(cz, s), q = helix(cz, Math.min(1, s + 2e-3));
        const tx = q[0] - p2[0], ty = q[1] - p2[1], tz = q[2] - p2[2], tl = Math.hypot(tx, ty, tz) || 1;
        const T = [tx / tl, ty / tl, tz / tl];
        const N = [(p2[0] - D.x) / D.R, 0, (p2[2] - cz) / D.R];
        const Bn = [T[1] * N[2] - T[2] * N[1], T[2] * N[0] - T[0] * N[2], T[0] * N[1] - T[1] * N[0]];
        const rr = D.r * (0.45 + 0.55 * Math.pow(s, 0.6));
        for (let j = 0; j < seg; j++) {
          const th = j * Math.PI * 2 / seg, c = Math.cos(th) * rr, sn = Math.sin(th) * rr;
          pos.push(p2[0] + N[0] * c + Bn[0] * sn, p2[1] + N[1] * c + Bn[1] * sn, p2[2] + N[2] * c + Bn[2] * sn);
        }
      }
      for (let i = 0; i < n; i++) for (let j = 0; j < seg; j++) {
        const a2 = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
        idx.push(a2, b, c, a2, c, d);
      }
      const tube = new THREE.BufferGeometry();
      tube.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
      tube.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
      tube.setIndex(idx);
      tube.computeVertexNormals();
      parts.push(tube);
      for (let k = 2; k < 22; k++) {
        const s = k / 24, p2 = helix(cz, s);
        const a2 = s * D.turns * Math.PI * 2;
        const g = new THREE.BoxGeometry(0.05, 0.16, 0.13);
        g.rotateY(-a2);
        g.translate(p2[0] + Math.sin(a2) * (D.r * 0.9), p2[1] + 0.02, p2[2] + Math.cos(a2) * (D.r * 0.9));
        parts.push(g);
      }
      const p = helix(cz, 1), a = D.turns * Math.PI * 2;
      const head = mergeGeos([
        boxAt(0, 0, 0.22, 0.3, 0.24, 0.46),
        boxAt(0, 0.15, 0.08, 0.26, 0.1, 0.22),
        boxAt(-0.1, 0.26, -0.02, 0.05, 0.16, 0.05),
        boxAt(0.1, 0.26, -0.02, 0.05, 0.16, 0.05)
      ]);
      head.rotateX(-0.35);
      head.rotateY(a + Math.PI / 2);
      head.translate(p[0] + Math.sin(a) * 0.05, p[1] + 0.02, p[2] + Math.cos(a) * 0.05);
      parts.push(head);
    }
    const ox = Wl.xF + B.proud;
    for (const z of [-3.4, -1.25, 0, 1.25, 3.4]) {
      parts.push(boxAt(ox + 0.035, B.y0 + 0.36, z, 0.07, 0.42, 0.9));
      parts.push(boxAt(ox + 0.085, B.y0 + 0.36, z, 0.03, 0.26, 0.66));
    }
    add("gilt", "Gilt dragons and beam panels", mergeGeos(parts), "gold");
  }
  {
    const R = G.roof, RG = G.ridge;
    const rise = R.yR - R.yE, tPed = R.hPed / rise, M = R.perSide;
    const dX = (t) => profileAt(t) * R.dX0;
    const dZ = (t) => t >= tPed ? R.dZPed : R.dZPed + (R.dZ0 - R.dZPed) * Math.pow(1 - t / tPed, R.hipExp);
    const ts = R.t;
    const sX = [0], sZ = [0];
    for (let i = 1; i < ts.length; i++) {
      sX.push(sX[i - 1] + Math.hypot(dX(ts[i - 1]) - dX(ts[i]), (ts[i] - ts[i - 1]) * rise));
      sZ.push(sZ[i - 1] + Math.hypot(dZ(ts[i - 1]) - dZ(ts[i]), (ts[i] - ts[i - 1]) * rise));
    }
    const ramp = (a) => Math.pow(Math.max(0, (Math.abs(a) - 0.4) / 0.6), 2.5);
    const side = (i, s) => {
      const t = ts[i], y = R.yE + t * rise;
      const fade = Math.pow(Math.max(0, 1 - t / R.liftT), 2);
      const ax = dX(t), az = dZ(t);
      const out = [];
      for (let k = 0; k <= M; k++) {
        const q = k / M, lat = 2 * q - 1;
        let px, pz;
        if (s === 0) {
          px = -lat;
          pz = -1;
        } else if (s === 1) {
          px = -1;
          pz = lat;
        } else if (s === 2) {
          px = lat;
          pz = 1;
        } else {
          px = 1;
          pz = -lat;
        }
        const c = ramp(px) * ramp(pz);
        const lift = R.lift * c * fade, push = 1 + R.push * c * fade;
        const x = px * ax * push, z = pz * az * push;
        const longSide = s === 1 || s === 3;
        out.push({ p: [x, y + lift, z], u: longSide ? z : x, v: longSide ? sX[i] : sZ[i] });
      }
      return out;
    };
    const pos = [], uvs = [], idx = [];
    const nPed = ts.filter((t) => t <= tPed + 1e-6).length;
    for (let s = 0; s < 4; s++) {
      const nR = s === 0 || s === 2 ? nPed : ts.length;
      const base = pos.length / 3;
      for (let i = 0; i < nR; i++) for (const q of side(i, s)) {
        pos.push(...q.p);
        uvs.push(q.u, q.v);
      }
      for (let i = 0; i < nR - 1; i++) for (let k = 0; k < M; k++) {
        const a = base + i * (M + 1) + k, b = a + 1, c = base + (i + 1) * (M + 1) + k + 1, d = c - 1;
        idx.push(a, b, c, a, c, d);
      }
    }
    const eave = [];
    for (let s = 0; s < 4; s++) {
      const pts = side(0, s);
      for (let k = 0; k < M; k++) eave.push(pts[k]);
    }
    const low = eave.map((e) => ({ p: [e.p[0], e.p[1] - R.fascia, e.p[2]], u: e.p[0], v: e.p[2] }));
    const Bm = G.beam, Wl = G.wall;
    const innerY = R.yE - R.fascia - 0.03;
    const inX0 = Wl.xB - Bm.proud, inX1 = Wl.xF + Bm.proud, inZ = Wl.hz + Bm.proud;
    const inner = eave.map((e, k) => {
      const s = Math.floor(k / M), q = k % M / M, lat = 2 * q - 1;
      let px, pz;
      if (s === 0) {
        px = -lat;
        pz = -1;
      } else if (s === 1) {
        px = -1;
        pz = lat;
      } else if (s === 2) {
        px = lat;
        pz = 1;
      } else {
        px = 1;
        pz = -lat;
      }
      const x = (inX0 + inX1) / 2 + px * (inX1 - inX0) / 2;
      return { p: [x, innerY, pz * inZ], u: x, v: pz * inZ };
    });
    const baseL = pos.length / 3, baseI = baseL + low.length;
    for (const q of low) {
      pos.push(...q.p);
      uvs.push(q.u, q.v);
    }
    for (const q of inner) {
      pos.push(...q.p);
      uvs.push(q.u, q.v);
    }
    for (let k = 0; k < low.length; k++) {
      const k1 = (k + 1) % low.length;
      idx.push(baseL + k, baseI + k, baseI + k1, baseL + k, baseI + k1, baseL + k1);
    }
    const slope = new THREE.BufferGeometry();
    slope.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
    slope.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(uvs), 2));
    slope.setIndex(idx);
    slope.computeVertexNormals();
    const parts = [slope];
    const trim = [];
    trim.push(boxAt(0, (RG.y0 + RG.y1) / 2, 0, RG.w, RG.y1 - RG.y0, RG.halfZ * 2));
    trim.push(boxAt(0, RG.y1 + 0.03, 0, RG.w * 0.55, 0.06, RG.halfZ * 2 - 0.3));
    trim.push(boxAt(0, (RG.y0 + RG.y1) / 2, 0, RG.w + 0.08, 0.1, RG.halfZ * 2 - 0.4));
    for (const zs of [-1, 1]) {
      const g = spiralHorn(1.38, 0.6, 2.35, 0.44, 0.12, 0.16, 8);
      g.rotateY(zs > 0 ? 0 : Math.PI);
      g.rotateY(Math.PI / 2);
      g.translate(0, RG.y0 + 0.25, zs * (RG.halfZ - 0.12));
      trim.push(g);
      const g2 = spiralHorn(0.8, 0.75, 2.5, 0.22, 0.08, 0.12, 6);
      g2.rotateY(zs > 0 ? 0 : Math.PI);
      g2.rotateY(Math.PI / 2);
      g2.translate(0, RG.y1 - 0.05, zs * (RG.halfZ - 0.55));
      trim.push(g2);
    }
    for (const zs of [-1, 1]) for (const xs of [-1, 1]) {
      const c = side(0, zs < 0 ? 0 : 2).find((p) => Math.sign(p.p[0]) === xs);
      const g = spiralHorn(0.62, 0.55, 2, 0.28, 0.1, 0.2, 6);
      g.rotateY(Math.atan2(-zs, xs));
      g.translate(c.p[0] - xs * 0.16, c.p[1] - 0.1, c.p[2] - zs * 0.16);
      trim.push(g);
    }
    const dXPed = dX(tPed), yPed = R.yE + R.hPed;
    const rakeLen = Math.hypot(dXPed, R.yR - yPed), rakeAng = Math.atan2(R.yR - yPed, dXPed);
    for (const zs of [-1, 1]) {
      for (const xs of [-1, 1]) {
        const vb = new THREE.BoxGeometry(rakeLen + 0.1, 0.22, 0.12);
        vb.rotateZ(-xs * rakeAng);
        vb.translate(xs * dXPed / 2, (yPed + R.yR) / 2 + 0.07, zs * (R.dZPed + 0.02));
        trim.push(vb);
        const g = spiralHorn(0.5, 0.4, 1.95, 0.24, 0.08, 0.14, 5);
        g.rotateY(xs > 0 ? 0 : Math.PI);
        g.translate(xs * (dXPed - 0.06), yPed - 0.08, zs * (R.dZPed - 0.02));
        trim.push(g);
      }
    }
    for (const zs of [-1, 1]) {
      const z = zs * 0.36, top = RG.y1 + 0.03;
      const body = [
        boxAt(0, top + 0.32, z, 0.24, 0.28, 0.52),
        boxAt(0, top + 0.56, z - zs * 0.3, 0.22, 0.24, 0.24),
        // head, inner end
        boxAt(0, top + 0.46, z - zs * 0.44, 0.1, 0.1, 0.1),
        // muzzle
        boxAt(0, top + 0.42, z + zs * 0.3, 0.06, 0.28, 0.1)
        // tail up
      ];
      for (const xs of [-1, 1]) for (const zz of [-0.18, 0.18]) body.push(boxAt(xs * 0.08, top + 0.1, z + zz, 0.07, 0.2, 0.08));
      trim.push(...body);
    }
    const trimGeo = mergeGeos(trim);
    projUv(trimGeo, W.roof.tile);
    parts.push(trimGeo);
    add("roof", "Glazed tile roof", mergeGeos(parts), "green");
    {
      const ft = [], fu = [];
      let along = 0;
      const n = eave.length;
      for (let k = 0; k < n; k++) {
        const a = eave[k], b = eave[(k + 1) % n];
        const len = Math.hypot(b.p[0] - a.p[0], b.p[2] - a.p[2]);
        const u0 = along, u1 = along + len;
        const A = a.p, B2 = b.p;
        const Al = [A[0], A[1] - R.fascia, A[2]], Bl = [B2[0], B2[1] - R.fascia, B2[2]];
        ft.push(...Al, ...B2, ...A, ...Al, ...Bl, ...B2);
        fu.push(u0, 0, u1, 1, u0, 1, u0, 0, u1, 0, u1, 1);
        along = u1;
      }
      const fg = new THREE.BufferGeometry();
      fg.setAttribute("position", new THREE.BufferAttribute(new Float32Array(ft), 3));
      fg.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(fu), 2));
      fg.computeVertexNormals();
      add("eave", "Eaves fascia and cap tiles", fg, "eave");
    }
  }
  {
    const K = G.coils, B = G.beam;
    const unit = mergeGeos([
      cylAt(0, 0, 0, K.rTop, K.rBot, K.h, 14),
      cylAt(0, K.h / 2 + 0.25, 0, 0.015, 0.015, 0.5, 5)
    ]);
    const mats = [];
    for (let i = 0; i < K.count; i++) {
      const z = K.z0 + (K.z1 - K.z0) * i / (K.count - 1);
      const top = B.y0 - 0.02 - i % 2 * 0.38;
      mats.push(new THREE.Matrix4().setPosition(K.x, top - 0.5 - K.h / 2, z));
    }
    addInst("coils", "Hanging incense coils", unit, "coil", mats);
  }
  {
    let makeTile = function(seed, w, h, draw) {
      if (!hasDom) return null;
      const cv = document.createElement("canvas");
      cv.width = w;
      cv.height = h;
      const ctx = cv.getContext("2d", { willReadFrequently: true });
      if (!ctx) return null;
      const wrapped = (fn) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save();
          ctx.translate(ox * w, oy * h);
          fn();
          ctx.restore();
        }
      };
      draw(ctx, rng(seed), w, wrapped);
      return cv;
    };
    const hasDom = typeof document !== "undefined" && typeof document.createElement === "function";
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t, a) => "rgba(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + "," + a + ")";
    const grey = (t, a = 1) => css([t, t, t], a);
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
    const bind = (mat, cv, bump, clampV = false) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = clampV ? THREE.ClampToEdgeWrapping : THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = bump;
      mat.needsUpdate = true;
    };
    const rebase = (m, avg) => {
      if (!hasDom) return;
      const k = Math.pow(avg, 2.2);
      m.color.setRGB(m.color.r / k, m.color.g / k, m.color.b / k);
    };
    {
      const P = W.roof;
      bind(materials.green, makeTile(11052011, size, size, (ctx, r, S, wrapped) => {
        const n = Math.round(P.tile / P.pitch), cw = S / n;
        for (let i = 0; i < n; i++) {
          const g = ctx.createLinearGradient(i * cw, 0, (i + 1) * cw, 0);
          g.addColorStop(0, grey(P.valley));
          g.addColorStop(0.18, grey(P.crest * 0.94));
          g.addColorStop(0.45, grey(P.crest));
          g.addColorStop(0.72, grey(P.crest * 0.9));
          g.addColorStop(1, grey(P.valley));
          ctx.fillStyle = g;
          ctx.fillRect(i * cw, 0, cw + 1, S);
        }
        const rows = Math.round(P.tile / P.course), rh = S / rows;
        ctx.fillStyle = grey(0.82, 0.55);
        for (let j = 0; j < rows; j++) ctx.fillRect(0, j * rh, S, 2);
        cloud(ctx, r, S, wrapped, P.moss, 4, 0.1, 0.22, 12);
        cloud(ctx, r, S, wrapped, P.grime, 3, 0.14, 0.2, 16);
        grain(ctx, r, S, wrapped, [0.6, 0.6, 0.6], 2500, 0.07);
      }), P.bump);
    }
    {
      const P = W.eave, ph = Math.round(size * G.roof.fascia);
      bind(materials.eave, makeTile(3, size, ph, (ctx, r, S) => {
        ctx.fillStyle = grey(P.field);
        ctx.fillRect(0, 0, S, ph);
        const n = Math.round(1 / P.pitch), cw = S / n, cr = P.capR * S;
        for (let i = 0; i < n; i++) {
          const cx = (i + 0.5) * cw, cy = ph * 0.55;
          ctx.fillStyle = grey(P.drip);
          ctx.beginPath();
          ctx.moveTo(cx + cw * 0.5 - cw * 0.34, ph * 0.05);
          ctx.lineTo(cx + cw * 0.5 + cw * 0.34, ph * 0.05);
          ctx.lineTo(cx + cw * 0.5, ph * 0.92);
          ctx.closePath();
          ctx.fill();
          ctx.fillStyle = grey(P.capRim);
          ctx.beginPath();
          ctx.arc(cx, cy, cr, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = grey(P.capFace);
          ctx.beginPath();
          ctx.arc(cx, cy, cr * 0.8, 0, Math.PI * 2);
          ctx.fill();
          ctx.fillStyle = grey(P.capCore);
          ctx.beginPath();
          ctx.arc(cx, cy, cr * 0.42, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.fillStyle = grey(0.6, 0.5);
        ctx.fillRect(0, 0, S, 2);
      }), P.bump, true);
    }
    {
      const P = W.red;
      bind(materials.red, makeTile(8261403, size, size, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        washes(ctx, r, S, wrapped, P.wash, 5, 0.18, 14, 60, 140);
        washes(ctx, r, S, wrapped, P.soot, 16, 0.22, 3, 3, 14);
        washes(ctx, r, S, wrapped, P.soot, 6, 0.16, 6, 20, 50);
        grain(ctx, r, S, wrapped, P.grain, 3e3, 0.08);
      }), P.bump);
    }
    {
      const P = W.stone;
      bind(materials.pale, makeTile(20260828, size, size, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        cloud(ctx, r, S, wrapped, P.mottle, 8, 0.18, 0.35, 16);
        cloud(ctx, r, S, wrapped, P.stain, 3, 0.14, 0.3, 14);
        washes(ctx, r, S, wrapped, P.grime, 4, 0.28, 8, 20, 90);
        grain(ctx, r, S, wrapped, P.grain, 5e3, 0.07);
      }), P.bump);
    }
    {
      const P = W.coil;
      materials.coil.emissive = new THREE.Color(2762018);
      bind(materials.coil, makeTile(5, 128, 128, (ctx, r, S, wrapped) => {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, S, S);
        const rh = S / P.grooves;
        for (let j = 0; j < P.grooves; j++) {
          const g = ctx.createLinearGradient(0, j * rh, 0, (j + 1) * rh);
          g.addColorStop(0, grey(P.groove));
          g.addColorStop(0.25, grey(1));
          g.addColorStop(0.8, grey(0.94));
          g.addColorStop(1, grey(P.groove));
          ctx.fillStyle = g;
          ctx.fillRect(0, j * rh, S, rh + 1);
        }
        grain(ctx, r, S, wrapped, [0.5, 0.45, 0.42], 800, 0.1);
      }), P.bump);
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ2hpbmVzZSBTaHJpbmUgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC43MCB4IDkuMjAgeCAxMi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBsb25nIGF4aXMgb24gWiwgb3BlbiBmcm9udCArWC5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImNoaW5lc2Utc2hyaW5lXCIsXG4gICAgXCJuYW1lXCI6IFwiQ2hpbmVzZSBTaHJpbmVcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJDaGluZXNlU2hyaW5lXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDguNzAgeCA5LjIwIHggMTIuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgbG9uZyBheGlzIG9uIFosIG9wZW4gZnJvbnQgK1guXFxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInBhbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiA5MjA4Njk2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicmVkXCIsXG4gICAgICAgIFwiY29sb3JcIjogNjE2OTExNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC43NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEyMTI4OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNSxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgXCJjb2xvclwiOiA1MjA0ODIyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZWF2ZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDUyMDQ4MjIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkYXJrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNDUzMTQ4OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvaWxcIixcbiAgICAgICAgXCJjb2xvclwiOiA3NjI5NDEwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkzLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiSFwiOiA5LjIsXG4gICAgICBcInBsaW50aFwiOiB7XG4gICAgICAgIFwidG9wXCI6IDAuNTUsXG4gICAgICAgIFwieEZcIjogMy42OCxcbiAgICAgICAgXCJ4QlwiOiAtMi44OCxcbiAgICAgICAgXCJoelwiOiA1LjA2LFxuICAgICAgICBcInN0ZXBcIjogMC4zMlxuICAgICAgfSxcbiAgICAgIFwid2FsbFwiOiB7XG4gICAgICAgIFwieTFcIjogNC44NSxcbiAgICAgICAgXCJ4RlwiOiAzLjUyLFxuICAgICAgICBcInhCXCI6IC0yLjc2LFxuICAgICAgICBcImh6XCI6IDUuMDEsXG4gICAgICAgIFwidGhpY2tcIjogMC4zNyxcbiAgICAgICAgXCJkb29yV2FsbFhcIjogLTAuM1xuICAgICAgfSxcbiAgICAgIFwiYmVhbVwiOiB7XG4gICAgICAgIFwieTBcIjogNC43OCxcbiAgICAgICAgXCJ5MVwiOiA1LjQ1LFxuICAgICAgICBcInRoaWNrXCI6IDAuNDUsXG4gICAgICAgIFwicHJvdWRcIjogMC4yNVxuICAgICAgfSxcbiAgICAgIFwiY29sdW1uXCI6IHtcbiAgICAgICAgXCJyXCI6IDAuMjgsXG4gICAgICAgIFwieTBcIjogMC44NSxcbiAgICAgICAgXCJ5MVwiOiA0LjgsXG4gICAgICAgIFwiYmFzZVJcIjogMC40MixcbiAgICAgICAgXCJiYXNlSFwiOiAwLjMsXG4gICAgICAgIFwielwiOiBbXG4gICAgICAgICAgLTQuMyxcbiAgICAgICAgICAtMi40OCxcbiAgICAgICAgICAyLjQ4LFxuICAgICAgICAgIDQuM1xuICAgICAgICBdLFxuICAgICAgICBcInhGcm9udFwiOiAzLjIsXG4gICAgICAgIFwieElubmVyXCI6IDAuMzVcbiAgICAgIH0sXG4gICAgICBcImRyYWdvblwiOiB7XG4gICAgICAgIFwielwiOiBbXG4gICAgICAgICAgLTIuNDgsXG4gICAgICAgICAgMi40OFxuICAgICAgICBdLFxuICAgICAgICBcInhcIjogMy4yLFxuICAgICAgICBcIlJcIjogMC40MSxcbiAgICAgICAgXCJyXCI6IDAuMSxcbiAgICAgICAgXCJ0dXJuc1wiOiAyLjQsXG4gICAgICAgIFwieTBcIjogMS4xNSxcbiAgICAgICAgXCJ5MVwiOiA0LjI1LFxuICAgICAgICBcInN0YXRpb25zXCI6IDY0XG4gICAgICB9LFxuICAgICAgXCJkb29yc1wiOiB7XG4gICAgICAgIFwiY2VudHJhbFwiOiBbXG4gICAgICAgICAgLTEuMixcbiAgICAgICAgICAxLjIsXG4gICAgICAgICAgMy42XG4gICAgICAgIF0sXG4gICAgICAgIFwic2lkZVwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuOTUsXG4gICAgICAgICAgICAtMi44LFxuICAgICAgICAgICAgMy40XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjgsXG4gICAgICAgICAgICAzLjk1LFxuICAgICAgICAgICAgMy40XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInJlY2Vzc1wiOiAwLjI2XG4gICAgICB9LFxuICAgICAgXCJyb29mXCI6IHtcbiAgICAgICAgXCJ5RVwiOiA1LjY2LFxuICAgICAgICBcInlSXCI6IDcuNzMsXG4gICAgICAgIFwiaFBlZFwiOiAwLjY5LFxuICAgICAgICBcImRYMFwiOiA0LjE0LFxuICAgICAgICBcImRaMFwiOiA1LjkzLFxuICAgICAgICBcImRaUGVkXCI6IDQuMDksXG4gICAgICAgIFwiaGlwRXhwXCI6IDEuMyxcbiAgICAgICAgXCJsaWZ0XCI6IDAuNyxcbiAgICAgICAgXCJsaWZ0VFwiOiAwLjMsXG4gICAgICAgIFwicHVzaFwiOiAwLjA2LFxuICAgICAgICBcImZhc2NpYVwiOiAwLjIzLFxuICAgICAgICBcInBlclNpZGVcIjogOCxcbiAgICAgICAgXCJwcm9maWxlXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4wNTgsXG4gICAgICAgICAgICAwLjkxM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4xMTYsXG4gICAgICAgICAgICAwLjgzMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4xNjksXG4gICAgICAgICAgICAwLjc0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjIyNyxcbiAgICAgICAgICAgIDAuNjUzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjI4NCxcbiAgICAgICAgICAgIDAuNTg3XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjM0MixcbiAgICAgICAgICAgIDAuNTMxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAwLjQ3NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC40NTMsXG4gICAgICAgICAgICAwLjQyNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC41MTEsXG4gICAgICAgICAgICAwLjM4NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC41NjksXG4gICAgICAgICAgICAwLjMzM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC42MjcsXG4gICAgICAgICAgICAwLjI4NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC42ODQsXG4gICAgICAgICAgICAwLjI0MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43MzgsXG4gICAgICAgICAgICAwLjE4OVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43OTYsXG4gICAgICAgICAgICAwLjE0OVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC44NTMsXG4gICAgICAgICAgICAwLjA4N1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC45MTEsXG4gICAgICAgICAgICAwLjA1NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC45NjksXG4gICAgICAgICAgICAwLjAyNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwidFwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjA1OCxcbiAgICAgICAgICAwLjExNixcbiAgICAgICAgICAwLjE2OSxcbiAgICAgICAgICAwLjIyNyxcbiAgICAgICAgICAwLjI4NCxcbiAgICAgICAgICAwLjMzMyxcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC40NTMsXG4gICAgICAgICAgMC41MTEsXG4gICAgICAgICAgMC41NjksXG4gICAgICAgICAgMC42MjcsXG4gICAgICAgICAgMC42ODQsXG4gICAgICAgICAgMC43MzgsXG4gICAgICAgICAgMC43OTYsXG4gICAgICAgICAgMC44NTMsXG4gICAgICAgICAgMC45MTEsXG4gICAgICAgICAgMC45NjksXG4gICAgICAgICAgMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJyaWRnZVwiOiB7XG4gICAgICAgIFwiaGFsZlpcIjogMy45NixcbiAgICAgICAgXCJ3XCI6IDAuNCxcbiAgICAgICAgXCJ5MFwiOiA3LjY1LFxuICAgICAgICBcInkxXCI6IDguMTlcbiAgICAgIH0sXG4gICAgICBcImNvaWxzXCI6IHtcbiAgICAgICAgXCJjb3VudFwiOiAxMCxcbiAgICAgICAgXCJyVG9wXCI6IDAuMDcsXG4gICAgICAgIFwickJvdFwiOiAwLjQyLFxuICAgICAgICBcImhcIjogMC43NSxcbiAgICAgICAgXCJ4XCI6IDIuMixcbiAgICAgICAgXCJ6MFwiOiAtMy45NSxcbiAgICAgICAgXCJ6MVwiOiAzLjk1XG4gICAgICB9LFxuICAgICAgXCJjZW5zZXJcIjoge1xuICAgICAgICBcInhcIjogMS43LFxuICAgICAgICBcInpcIjogMFxuICAgICAgfSxcbiAgICAgIFwid2VhclwiOiB7XG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwicm9vZlwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDIsXG4gICAgICAgICAgXCJwaXRjaFwiOiAwLjI1LFxuICAgICAgICAgIFwiY291cnNlXCI6IDAuMzQsXG4gICAgICAgICAgXCJ2YWxsZXlcIjogMC42NCxcbiAgICAgICAgICBcImNyZXN0XCI6IDEuMTIsXG4gICAgICAgICAgXCJidW1wXCI6IDAuMDcsXG4gICAgICAgICAgXCJtb3NzXCI6IFtcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDAuODYsXG4gICAgICAgICAgICAwLjc4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImdyaW1lXCI6IFtcbiAgICAgICAgICAgIDAuNzIsXG4gICAgICAgICAgICAwLjcyLFxuICAgICAgICAgICAgMC43XG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImVhdmVcIjoge1xuICAgICAgICAgIFwicGl0Y2hcIjogMC4yNSxcbiAgICAgICAgICBcImNhcFJcIjogMC4wOTUsXG4gICAgICAgICAgXCJmaWVsZFwiOiAwLjkyLFxuICAgICAgICAgIFwiY2FwUmltXCI6IDAuNTUsXG4gICAgICAgICAgXCJjYXBGYWNlXCI6IDEuMDgsXG4gICAgICAgICAgXCJjYXBDb3JlXCI6IDAuNzgsXG4gICAgICAgICAgXCJkcmlwXCI6IDAuOCxcbiAgICAgICAgICBcImJ1bXBcIjogMC4wNVxuICAgICAgICB9LFxuICAgICAgICBcInJlZFwiOiB7XG4gICAgICAgICAgXCJ0aWxlXCI6IDIsXG4gICAgICAgICAgXCJidW1wXCI6IDAuMDMsXG4gICAgICAgICAgXCJzb290XCI6IFtcbiAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAwLjM2LFxuICAgICAgICAgICAgMC4zNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ3YXNoXCI6IFtcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgMC41MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmFpblwiOiBbXG4gICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgMC40NSxcbiAgICAgICAgICAgIDAuNDJcbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwic3RvbmVcIjoge1xuICAgICAgICAgIFwidGlsZVwiOiAyLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjAzLFxuICAgICAgICAgIFwibW90dGxlXCI6IFtcbiAgICAgICAgICAgIDAuODQsXG4gICAgICAgICAgICAwLjg0LFxuICAgICAgICAgICAgMC44NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdGFpblwiOiBbXG4gICAgICAgICAgICAwLjc4LFxuICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgIDAuNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmltZVwiOiBbXG4gICAgICAgICAgICAwLjYsXG4gICAgICAgICAgICAwLjU4LFxuICAgICAgICAgICAgMC41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJncmFpblwiOiBbXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjcsXG4gICAgICAgICAgICAwLjcyXG4gICAgICAgICAgXVxuICAgICAgICB9LFxuICAgICAgICBcImNvaWxcIjoge1xuICAgICAgICAgIFwiZ3Jvb3ZlXCI6IDAuNjYsXG4gICAgICAgICAgXCJncm9vdmVzXCI6IDEyLFxuICAgICAgICAgIFwiYnVtcFwiOiAwLjA4XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNoaW5lc2VTaHJpbmVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ0NoaW5lc2UgU2hyaW5lJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qKiBNZXRyZS1zY2FsZWQgcGxhbmFyIFVWcyBieSBkb21pbmFudCBub3JtYWwsIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gdGlsZSByZWFkcyBhdCB0aGUgc2FtZVxuICAgKiAgc2NhbGUgb24gZXZlcnkgZmFjZSBvZiBhIG1lcmdlZCBjb21wb25lbnQuIFdvcmtzIG9uIGluZGV4ZWQgYW5kIG5vbi1pbmRleGVkIGdlb21ldHJ5LiAqL1xuICBmdW5jdGlvbiBwcm9qVXYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgbnggPSBuLmdldFgoaSksIG55ID0gbi5nZXRZKGkpLCBueiA9IG4uZ2V0WihpKTtcbiAgICAgIGNvbnN0IGhvcml6ID0gTWF0aC5zcXJ0KG54ICogbnggKyBueiAqIG56KTtcbiAgICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICAgIGlmIChob3JpeiA8IDAuMikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgICBlbHNlIHsgdSA9IE1hdGguYWJzKG54KSA+PSBNYXRoLmFicyhueikgPyBwLmdldFooaSkgOiBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICAgIG91dFtpICogMl0gPSB1IC8gdGlsZTsgb3V0W2kgKiAyICsgMV0gPSB2IC8gdGlsZTtcbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMikpO1xuICB9XG4gIGNvbnN0IFcgPSBHLndlYXI7XG4gIC8qKiBUaGUgbG9uZy1zbG9wZSBwcm9maWxlOiBob3Jpem9udGFsIGRpc3RhbmNlIGZyb20gdGhlIHJpZGdlIGFzIGEgZnJhY3Rpb24gb2YgdGhlIGVhdmVcbiAgICogIGRpc3RhbmNlLCBhdCBmcmFjdGlvbiB0IG9mIHRoZSByaXNlLCBsaW5lYXJseSBpbnRlcnBvbGF0ZWQgZnJvbSB0aGUgcHJveHkgc2NhbiB0YWJsZS4gKi9cbiAgZnVuY3Rpb24gcHJvZmlsZUF0KHQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgUCA9IEcucm9vZi5wcm9maWxlIGFzIG51bWJlcltdW107XG4gICAgaWYgKHQgPD0gMCkgcmV0dXJuIDE7IGlmICh0ID49IDEpIHJldHVybiAwO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgUC5sZW5ndGg7IGkrKykgaWYgKHQgPD0gUFtpXVswXSkge1xuICAgICAgY29uc3QgZiA9ICh0IC0gUFtpIC0gMV1bMF0pIC8gKFBbaV1bMF0gLSBQW2kgLSAxXVswXSk7XG4gICAgICByZXR1cm4gUFtpIC0gMV1bMV0gKyAoUFtpXVsxXSAtIFBbaSAtIDFdWzFdKSAqIGY7XG4gICAgfVxuICAgIHJldHVybiAwO1xuICB9XG4gIC8qKiBBIGN1cmxpbmcgaG9ybjogbiBib3ggc2VnbWVudHMgYWxvbmcgYSBwYXRoIHdob3NlIGhlYWRpbmcgdHVybnMgbGluZWFybHkgZnJvbSBwaGkwIHRvIHBoaTFcbiAgICogIChyYWRpYW5zIGZyb20gK3gsIGluIHRoZSB4LXkgcGxhbmUsIHN0YXJ0aW5nIGF0IHRoZSBvcmlnaW4pLCB0YXBlcmluZyBmcm9tIHcwIHRvIHcxIGluIHRoZVxuICAgKiAgcGxhbmUgYW5kIEFDUk9TUyB0aGljayBvdXQgb2YgaXQuIFRoZSBwcmVhbWJsZSdzIGN1cmxlZEhvcm4gc2FtcGxlcyBhIHNpbmUgYW5kIGNvbWVzIG91dCBhXG4gICAqICBuZWFyLXN0cmFpZ2h0IHNwaWtlOyBhIHJpZGdlIGVuZCB0aGF0IHN3ZWVwcyB1cCBhbmQgY3VybHMgYmFjayBvdmVyIG5lZWRzIHRoZSBoZWFkaW5nIHRvIHBhc3NcbiAgICogIDkwIGRlZ3JlZXMsIHdoaWNoIHRoaXMgZG9lcy4gKi9cbiAgZnVuY3Rpb24gc3BpcmFsSG9ybihsZW46IG51bWJlciwgcGhpMDogbnVtYmVyLCBwaGkxOiBudW1iZXIsIHcwOiBudW1iZXIsIHcxOiBudW1iZXIsIGFjcm9zczogbnVtYmVyLCBuOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gICAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGxldCB4ID0gMCwgeSA9IDA7XG4gICAgY29uc3QgTCA9IGxlbiAvIG47XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICAgIGNvbnN0IHBoaSA9IHBoaTAgKyAocGhpMSAtIHBoaTApICogKGogKyAwLjUpIC8gbjtcbiAgICAgIGNvbnN0IHcgPSB3MCArICh3MSAtIHcwKSAqIChqICsgMC41KSAvIG47XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIEwgKyB3ICogMC4zNSwgYWNyb3NzKTtcbiAgICAgIGcucm90YXRlWihwaGkgLSBNYXRoLlBJIC8gMik7XG4gICAgICBnLnRyYW5zbGF0ZSh4ICsgTWF0aC5jb3MocGhpKSAqIEwgLyAyLCB5ICsgTWF0aC5zaW4ocGhpKSAqIEwgLyAyLCAwKTtcbiAgICAgIHNlZ3MucHVzaChnKTtcbiAgICAgIHggKz0gTWF0aC5jb3MocGhpKSAqIEw7IHkgKz0gTWF0aC5zaW4ocGhpKSAqIEw7XG4gICAgfVxuICAgIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0b25lIHBsaW50aCwgcXVvaW5zLCBjZW5zZXJcbiAgICogT25lIHBhbGUgc3RvbmU6IHRoZSB0d28tc3RlcCBzbGFiLCB0aGUgZm91ciB3YWxsLWNvcm5lciBxdW9pbnMgdGhlIHBsYXRlIHNob3dzIGF0IGV2ZXJ5IGNvcm5lcixcbiAgICogYW5kIHRoZSB0cmlwb2QgY2Vuc2VyIHN0YW5kaW5nIG9uIHRoZSBwb3JjaCBmbG9vci4gT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IFAgPSBHLnBsaW50aCwgQyA9IEcuY2Vuc2VyLCBXbCA9IEcud2FsbDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KChQLnhGICsgUC54QikgLyAyLCBQLnN0ZXAgLyAyLCAwLCBQLnhGIC0gUC54QiArIDAuMTIsIFAuc3RlcCwgKFAuaHogKyAwLjA2KSAqIDIpLFxuICAgICAgYm94QXQoKFAueEYgKyBQLnhCKSAvIDIsIChQLnN0ZXAgKyBQLnRvcCkgLyAyLCAwLCBQLnhGIC0gUC54QiwgUC50b3AgLSBQLnN0ZXAsIFAuaHogKiAyKSxcbiAgICBdO1xuICAgIC8vIFF1b2luczogc3RvbmUgYmxvY2tzIG9uIHRoZSBmb3VyIHdhbGwgY29ybmVycywgMjUgbW0gcHJvdWQgb2YgYm90aCB3YWxsIGZhY2VzLlxuICAgIGZvciAoY29uc3QgeCBvZiBbV2wueEYgLSAwLjIxICsgMC4wMjUsIFdsLnhCICsgMC4yMSAtIDAuMDI1XSkgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KHgsIFAudG9wICsgMC40OCwgenMgKiAoV2wuaHogLSAwLjIxICsgMC4wMjUpLCAwLjQyLCAwLjk2LCAwLjQyKSk7XG4gICAgfVxuICAgIC8vIFRyaXBvZCBjZW5zZXI6IGJvd2wgcHJvZmlsZSwgdHdvIGVhcnMsIHRocmVlIGxlZ3MsIGEgZmlzdGZ1bCBvZiBpbmNlbnNlIHN0aWNrcy5cbiAgICBjb25zdCBib3dsID0gbGF0aGUoW1swLjIwLCAwLjM2XSwgWzAuNDgsIDAuNDhdLCBbMC42MCwgMC44Nl0sIFswLjU1LCAxLjEyXSwgWzAuNjIsIDEuMjJdLCBbMC42MiwgMS4zNF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbMC41MiwgMS4zNF0sIFswLjUyLCAxLjI2XSwgWzAuMCwgMS4yNl1dLCAxOCwgUC50b3ApO1xuICAgIGJvd2wudHJhbnNsYXRlKEMueCwgMCwgQy56KTtcbiAgICBwYXJ0cy5wdXNoKGJvd2wpO1xuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkgcGFydHMucHVzaChib3hBdChDLngsIFAudG9wICsgMS40MiwgQy56ICsgenMgKiAwLjUzLCAwLjEyLCAwLjI2LCAwLjE0KSk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSAoaSAvIDMpICogTWF0aC5QSSAqIDIgKyAwLjU7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KEMueCArIE1hdGguc2luKGEpICogMC4zNiwgUC50b3AgKyAwLjIwLCBDLnogKyBNYXRoLmNvcyhhKSAqIDAuMzYsIDAuMTIsIDAuNDAsIDAuMTIpKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogMS4zO1xuICAgICAgcGFydHMucHVzaChjeWxBdChDLnggKyBNYXRoLnNpbihhKSAqIDAuMTUsIFAudG9wICsgMS41NSwgQy56ICsgTWF0aC5jb3MoYSkgKiAwLjE1LCAwLjAxMiwgMC4wMTIsIDAuNjAsIDUpKTtcbiAgICB9XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBwcm9qVXYoZ2VvLCBXLnN0b25lLnRpbGUpO1xuICAgIHRpbnRCeUhlaWdodChnZW8sIDAsIFAudG9wLCBbMC44NCwgMC44MiwgMC43OF0pO1xuICAgIGFkZCgncGxpbnRoJywgJ1N0b25lIHBsaW50aCwgcXVvaW5zIGFuZCBjZW5zZXInLCBnZW8sICdwYWxlJyk7XG4gICAgY29sbGlkZXJzWydwbGludGgnXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCA0LjYsIDBdLCBoYWxmRXh0ZW50czogWzQuMzUsIDQuNiwgNi4wXSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZTsgYSBsZXZlbCAnXG4gICAgICAgICAgICsgJ2J1aWxkZXIgY29sbGlkZXMgd2l0aCB0aGUgc2hyaW5lLCBub3Qgd2l0aCBpdHMgaW5kaXZpZHVhbCBjb2x1bW5zLicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVkIGxhY3F1ZXIgYm9keVxuICAgKiBIYWxsIGJsb2NrLCBkb29yIHdhbGwgd2l0aCBpdHMgb3BlbmluZ3MsIHRoZSB0d28gc2lkZSB3YWxscyBydW5uaW5nIHRvIHRoZSBGUk9OVCwgdGhlIGNsb3NlZFxuICAgKiBjZW50cmFsIGRvb3IgcGFpciwgYW5kIHRoZSB0d28gdmVydGljYWwgcGVkaW1lbnRzIG9mIHRoZSB1cHBlciBnYWJsZS4gQWxsIHJlZCBsYWNxdWVyLCBvbmVcbiAgICogbWVyZ2UsIG9uZSBkcmF3IGNhbGwuIFRoZSBzaHJpbmUgaXMgYW4gZXh0ZXJpb3Igc2hlbGw6IHRoZSBoYWxsIGJsb2NrIGlzIHNvbGlkIGFuZCB0aGUgcG9yY2hcbiAgICogaXMgdGhlIG9ubHkgXCJpbnRlcmlvclwiIC0tIGEgMy4xIG0gZGVlcCBjb2xvbm5hZGUgaW4gZnJvbnQgb2YgdGhlIGRvb3Igd2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IFdsID0gRy53YWxsLCBQID0gRy5wbGludGgsIEQgPSBHLmRvb3JzLCBSID0gRy5yb29mO1xuICAgIC8vIFdhbGxzIHN0YXJ0IDIwIG1tIElOU0lERSB0aGUgcGxpbnRoIHNsYWIsIHNvIHRoZWlyIGJvdHRvbSBmYWNlcyBhcmUgYnVyaWVkIHJhdGhlciB0aGFuXG4gICAgLy8gbHlpbmcgaW4gdGhlIHBsaW50aC10b3AgcGxhbmUgd2l0aCB0aGUgZHJ1bSBiYXNlcyBhbmQgdGhlIHJlY2VzcyBwYW5lbHMgKGNoZWNrLWNvcGxhbmFyXG4gICAgLy8gY29tcGFyZXMgYm91bmRpbmctYm94IGZhY2VzLCBhbmQgdGhyZWUgZmFtaWxpZXMgb2YgYm90dG9tcyBhdCB5PTAuNTUgd2VyZSAxNyBwYWlycykuXG4gICAgY29uc3QgeTAgPSBQLnRvcCAtIDAuMDIsIHkxID0gV2wueTEsIGhoID0geTEgLSB5MDtcbiAgICBjb25zdCBkd3ggPSBXbC5kb29yV2FsbFg7ICAgICAgICAgICAgICAgICAgICAgLy8gZG9vciB3YWxsIHNwYW5zIGR3eC4uMFxuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoKFdsLnhCICsgZHd4KSAvIDIsIHkwICsgaGggLyAyLCAwLCBkd3ggLSBXbC54QiwgaGgsIFdsLmh6ICogMiksICAgICAgICAgICAvLyBoYWxsIGJsb2NrXG4gICAgXTtcbiAgICAvLyBTaWRlIHdhbGxzIHggMC4ueEYsIHx6fCBoei10aGljay4uaHo6IHRoZSBjb2xvbm5hZGUgc2l0cyBJTlNJREUgdGhlIHdhbGwgZW52ZWxvcGUuXG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSBwYXJ0cy5wdXNoKGJveEF0KFdsLnhGIC8gMiwgeTAgKyBoaCAvIDIsIHpzICogKFdsLmh6IC0gV2wudGhpY2sgLyAyKSwgV2wueEYsIGhoLCBXbC50aGljaykpO1xuICAgIC8vIERvb3Igd2FsbDogc29saWQgcGllcnMgYmV0d2VlbiB0aGUgb3BlbmluZ3MsIGxpbnRlbCBiYW5kIG92ZXIgdGhlbS5cbiAgICBjb25zdCBvcGVuaW5ncyA9IFtbRC5zaWRlWzBdWzBdLCBELnNpZGVbMF1bMV0sIEQuc2lkZVswXVsyXV0sIFtELmNlbnRyYWxbMF0sIEQuY2VudHJhbFsxXSwgRC5jZW50cmFsWzJdXSwgW0Quc2lkZVsxXVswXSwgRC5zaWRlWzFdWzFdLCBELnNpZGVbMV1bMl1dXTtcbiAgICBsZXQgemMgPSAtV2wuaHo7XG4gICAgZm9yIChjb25zdCBbemEsIHpiLCB0b3BdIG9mIG9wZW5pbmdzKSB7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KGR3eCAvIDIsIHkwICsgaGggLyAyLCAoemMgKyB6YSkgLyAyLCAtZHd4LCBoaCwgemEgLSB6YykpOyAgICAgICAvLyBwaWVyXG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KGR3eCAvIDIsICh5MCArIHRvcCArIHkxKSAvIDIsICh6YSArIHpiKSAvIDIsIC1kd3gsIHkxIC0gKHkwICsgdG9wKSwgemIgLSB6YSkpOyAvLyBsaW50ZWwgYmFuZFxuICAgICAgemMgPSB6YjtcbiAgICB9XG4gICAgcGFydHMucHVzaChib3hBdChkd3ggLyAyLCB5MCArIGhoIC8gMiwgKHpjICsgV2wuaHopIC8gMiwgLWR3eCwgaGgsIFdsLmh6IC0gemMpKTtcbiAgICAvLyBDZW50cmFsIGRvb3IgbGVhdmVzLCByZWNlc3NlZCBpbnRvIHRoZSBvcGVuaW5nLCAxMCBtbSBpbiBmcm9udCBvZiB0aGUgZGFyayBiYWNraW5nIHBhbmVsLlxuICAgIGNvbnN0IGxlYWZYID0gZHd4ICsgMC4wMyArIDAuMDQ7XG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCB6aSA9IHpzICogMC4wMiwgem8gPSB6cyAqIChELmNlbnRyYWxbMV0gLSAwLjAzKTtcbiAgICAgIGNvbnN0IGx5MCA9IFAudG9wICsgMC4wMSwgbGggPSBELmNlbnRyYWxbMl0gLSAwLjE0OyAgICAgIC8vIGxlYXZlcyAxMCBtbSBjbGVhciBvZiB0aGUgZmxvb3JcbiAgICAgIHBhcnRzLnB1c2goYm94QXQobGVhZlgsIGx5MCArIGxoIC8gMiwgKHppICsgem8pIC8gMiwgMC4wNiwgbGgsIE1hdGguYWJzKHpvIC0gemkpKSk7XG4gICAgICAvLyBSYWlzZWQgcGFuZWwgb24gZWFjaCBsZWFmLlxuICAgICAgcGFydHMucHVzaChib3hBdChsZWFmWCArIDAuMDQ1LCBseTAgKyAyLjA1LCAoemkgKyB6bykgLyAyLCAwLjAzLCAyLjQsIE1hdGguYWJzKHpvIC0gemkpIC0gMC4zMCkpO1xuICAgIH1cbiAgICAvLyBQZWRpbWVudHM6IHRoZSB2ZXJ0aWNhbCBnYWJsZSB0cmlhbmdsZXMgYXQgeiA9ICstKGRaUGVkIC0gMC4xMC4uMC4wKSwgYmV0d2VlbiB0aGUgdHdvIGxvbmdcbiAgICAvLyBzbG9wZXMgYWJvdmUgdGhlIGhpcCBza2lydC4gMTAwIG1tIHRoaWNrIHByaXNtLCBpdHMgb3V0ZXIgZmFjZSAyMCBtbSBpbnNpZGUgdGhlIHNsb3BlJ3MgZW5kXG4gICAgLy8gZWRnZSBzbyBubyBiYm94IHBsYW5lIG9mIHRoZSByb29mIGNvaW5jaWRlcyB3aXRoIGl0LlxuICAgIGNvbnN0IGRYUGVkID0gcHJvZmlsZUF0KFIuaFBlZCAvIChSLnlSIC0gUi55RSkpICogUi5kWDA7XG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCBzaCA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2gubW92ZVRvKC1kWFBlZCArIDAuMDIsIFIueUUgKyBSLmhQZWQgLSAwLjA0KTsgc2gubGluZVRvKGRYUGVkIC0gMC4wMiwgUi55RSArIFIuaFBlZCAtIDAuMDQpOyBzaC5saW5lVG8oMCwgUi55UiAtIDAuMDIpOyBzaC5jbG9zZVBhdGgoKTtcbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoLCB6cyA+IDAgPyBSLmRaUGVkIC0gMC4xMiA6IC1SLmRaUGVkICsgMC4wMiwgenMgPiAwID8gUi5kWlBlZCAtIDAuMDIgOiAtUi5kWlBlZCArIDAuMTIpO1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICB9XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBwcm9qVXYoZ2VvLCBXLnJlZC50aWxlKTtcbiAgICAvLyBTb290OiB0aGUgcGxhdGUncyBsYWNxdWVyIGlzIGRhcmtlc3QgdW5kZXIgdGhlIGVhdmVzIGJlYW0gYW5kIGNsZWFuIGF0IHRoZSBwbGludGggLS0gcGVyXG4gICAgLy8gdmVydGV4IG11bHRpcGxpZXIgMC43MCBhdCB0aGUgd2FsbCBoZWFkIGZhZGluZyB0byAxLjAgYnkgMi4yIG0uIFBlZGltZW50cyBjYXJyeSBpdCB0b28uXG4gICAge1xuICAgICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0gMi4wKSAvICh5MSAtIDIuMCkpKTtcbiAgICAgICAgY29uc3QgbSA9IDEgLSAwLjM4ICogdCAqIHQ7XG4gICAgICAgIGNvbFtpICogM10gPSBtOyBjb2xbaSAqIDMgKyAxXSA9IG0gKiAwLjk3OyBjb2xbaSAqIDMgKyAyXSA9IG0gKiAwLjk3O1xuICAgICAgfVxuICAgICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgIH1cbiAgICBhZGQoJ2JvZHknLCAnU2hyaW5lIGJvZHkgYW5kIHBlZGltZW50cycsIGdlbywgJ3JlZCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgZGFyazogYmVhbSBiYW5kLCBicmFja2V0cywgcmVjZXNzZXMsIGNlaWxpbmdcbiAgICogRXZlcnl0aGluZyB0aGUgcGxhdGUgc2hvd3MgbmVhci1ibGFjazogdGhlIHNvb3RlZCBlYXZlcyBiZWFtIHJ1bm5pbmcgcm91bmQgYWxsIGZvdXIgd2FsbHMsXG4gICAqIHRoZSBicmFja2V0IGJsb2NrcyBvdmVyIHRoZSBmcm9udCBjb2x1bW5zLCB0aGUgYmFja2luZyBvZiB0aGUgdGhyZWUgZG9vci13YWxsIG9wZW5pbmdzLCBhbmRcbiAgICogdGhlIHBvcmNoIGNlaWxpbmcuIE9uZSB3YXJtIGRhcmsgbWF0ZXJpYWwsIG9uZSBtZXJnZSwgb25lIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IFdsID0gRy53YWxsLCBCID0gRy5iZWFtLCBQID0gRy5wbGludGgsIEQgPSBHLmRvb3JzLCBDID0gRy5jb2x1bW4sIFIgPSBHLnJvb2Y7XG4gICAgY29uc3Qgb3ggPSBXbC54RiArIEIucHJvdWQsIGJ4MCA9IFdsLnhCIC0gQi5wcm91ZCwgb3ogPSBXbC5oeiArIEIucHJvdWQ7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdChveCAtIEIudGhpY2sgLyAyLCAoQi55MCArIEIueTEpIC8gMiwgMCwgQi50aGljaywgQi55MSAtIEIueTAsIG96ICogMiksICAgICAgICAgIC8vIGZyb250IGJlYW1cbiAgICAgIGJveEF0KGJ4MCArIDAuMTUsIChCLnkwICsgQi55MSkgLyAyLCAwLCAwLjMwLCBCLnkxIC0gQi55MCwgb3ogKiAyKSwgICAgICAgICAgICAgICAgICAgLy8gYmFjayBiZWFtXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IHpzIG9mIFstMSwgMV0pIHBhcnRzLnB1c2goYm94QXQoKG94IC0gQi50aGljayArIGJ4MCArIDAuMzApIC8gMiwgKEIueTAgKyBCLnkxKSAvIDIsIHpzICogKG96IC0gQi50aGljayAvIDIpLCBveCAtIEIudGhpY2sgLSBieDAgLSAwLjMwLCBCLnkxIC0gQi55MCwgQi50aGljaykpO1xuICAgIC8vIEJyYWNrZXQgKGRvdWdvbmcpIGJsb2NrcyBvbiB0aGUgZnJvbnQgYmVhbSBmYWNlIG92ZXIgZWFjaCBmcm9udCBjb2x1bW46IHR3byB0aWVycy5cbiAgICBmb3IgKGNvbnN0IHogb2YgQy56IGFzIG51bWJlcltdKSB7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KG94ICsgMC4xMSwgQi55MCArIDAuMjIsIHosIDAuMjIsIDAuMjYsIDAuNjIpKTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQob3ggKyAwLjE2LCBCLnkwICsgMC41MCwgeiwgMC4zMiwgMC4yMiwgMC45MCkpO1xuICAgIH1cbiAgICAvLyBCYWNraW5nIHBhbmVscyBvZiB0aGUgZG9vci13YWxsIG9wZW5pbmdzOiAyMCBtbSBwcm91ZCBvZiB0aGUgaGFsbCBibG9jayBmYWNlLlxuICAgIGNvbnN0IGJ4ID0gV2wuZG9vcldhbGxYO1xuICAgIGZvciAoY29uc3QgW3phLCB6YiwgdG9wXSBvZiBbRC5zaWRlWzBdLCBELmNlbnRyYWwsIEQuc2lkZVsxXV0gYXMgbnVtYmVyW11bXSkge1xuICAgICAgcGFydHMucHVzaChib3hBdChieCArIDAuMDEsIFAudG9wICsgMC4wMTUgKyAodG9wIC0gMC4wMTUpIC8gMiwgKHphICsgemIpIC8gMiwgMC4wMiwgdG9wIC0gMC4wMTUsIHpiIC0gemEpKTsgICAvLyAxNSBtbSBjbGVhciBvZiB0aGUgZmxvb3JcbiAgICB9XG4gICAgLy8gUG9yY2ggY2VpbGluZzogYSBkYXJrIHBhbmVsIDEwIG1tIHVuZGVyIHRoZSByb29mIHNvZmZpdCBvdmVyIHRoZSBjb2xvbm5hZGUuXG4gICAgY29uc3Qgc29mZml0WSA9IFIueUUgLSBSLmZhc2NpYSAtIDAuMDM7XG4gICAgcGFydHMucHVzaChib3hBdChXbC54RiAvIDIgLSAwLjA1LCBzb2ZmaXRZIC0gMC4wMjUsIDAsIFdsLnhGIC0gMC4xMCwgMC4wMywgKFdsLmh6IC0gV2wudGhpY2spICogMiAtIDAuMTApKTtcbiAgICBhZGQoJ3NoYWRlJywgJ1Nvb3RlZCBiZWFtLCBicmFja2V0cywgcmVjZXNzZXMgYW5kIGNlaWxpbmcnLCBtZXJnZUdlb3MocGFydHMpLCAnZGFyaycpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb2x1bW5zIGFuZCB0aGVpciBiYXNlc1xuICAgKiBFaWdodCByb3VuZCBjb2x1bW5zIC0tIGZvdXIgb24gdGhlIGZyb250IGxpbmUsIGZvdXIgb24gdGhlIGRvb3Igd2FsbCAtLSBhbmQgZWlnaHQgc3RvbmUgZHJ1bXMsXG4gICAqIGFzIFRXTyBJbnN0YW5jZWRNZXNoIHN5c3RlbXMgb24gb25lIHBsYWNlbWVudCBzY2hlZHVsZS4gKi9cbiAge1xuICAgIGNvbnN0IEMgPSBHLmNvbHVtbiwgUCA9IEcucGxpbnRoO1xuICAgIGNvbnN0IGggPSBDLnkxIC0gQy55MDtcbiAgICBjb25zdCBzaGFmdCA9IGN5bEF0KDAsIDAsIDAsIEMuciwgQy5yICogMS4wNiwgaCwgMTYpO1xuICAgIGNvbnN0IGF0OiBudW1iZXJbXVtdID0gW107XG4gICAgZm9yIChjb25zdCB6IG9mIEMueiBhcyBudW1iZXJbXSkgeyBhdC5wdXNoKFtDLnhGcm9udCwgel0pOyBhdC5wdXNoKFtDLnhJbm5lciwgel0pOyB9XG4gICAgYWRkSW5zdCgnY29sdW1ucycsICdSb3VuZCBjb2x1bW5zJywgc2hhZnQsICdyZWQnLFxuICAgICAgYXQubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgQy55MCArIGggLyAyLCB6KSkpO1xuICAgIGNvbnN0IGJhc2UgPSBtZXJnZUdlb3MoW1xuICAgICAgY3lsQXQoMCwgMCwgMCwgQy5iYXNlUiAqIDAuOTQsIEMuYmFzZVIsIEMuYmFzZUggKiAwLjcsIDE2KSxcbiAgICAgIGN5bEF0KDAsIEMuYmFzZUggKiAwLjM1ICsgQy5iYXNlSCAqIDAuMTUsIDAsIEMuciAqIDEuMjUsIEMuYmFzZVIgKiAwLjkwLCBDLmJhc2VIICogMC4zMCwgMTYpLFxuICAgIF0pO1xuICAgIHByb2pVdihiYXNlLCBXLnN0b25lLnRpbGUpO1xuICAgIGFkZEluc3QoJ2Jhc2VzJywgJ0NvbHVtbiBkcnVtIGJhc2VzJywgYmFzZSwgJ3BhbGUnLFxuICAgICAgYXQubWFwKChbeCwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgUC50b3AgLSAwLjAwNSArIEMuYmFzZUggKiAwLjM1LCB6KSkpOyAgIC8vIGRydW1zIDUgbW0gaW50byB0aGUgc2xhYlxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnaWx0OiBkcmFnb25zIGFuZCBiZWFtIHBhbmVsc1xuICAgKiBUaGUgZHJhZ29uLXdyYXBwZWQgY29sdW1ucyBhcmUgb25lIG9mIHRoZSB0d28gZmVhdHVyZXMgdGhlIHJlZ2lzdHJ5IG5vdGVzIG5hbWUgZm9yXG4gICAqIHJlY29nbml0aW9uLCBzbyB0aGUgZHJhZ29uIGlzIEdFT01FVFJZOiBhIHNtb290aCBoZWxpY2FsIHR1YmUgKEZyZW5ldCBmcmFtZSwgaW5kZXhlZCwgc2hhcmVkXG4gICAqIHJpbmcgdmVydGljZXMpIG9mIDIuNCB0dXJucywgdGFwZXJpbmcgZnJvbSB0aGUgaGVhZCwgd2l0aCBhIGRvcnNhbCBmaW4gcm93IGFuZCBhIGJsb2NrZWQgaGVhZC5cbiAgICogVGhlIGZpdmUgZ2lsdCByZWxpZWYgcGFuZWxzIG9uIHRoZSBmcm9udCBiZWFtIHJpZGUgdGhlIHNhbWUgbWF0ZXJpYWwgYW5kIG1lcmdlLiAqL1xuICB7XG4gICAgY29uc3QgRCA9IEcuZHJhZ29uLCBCID0gRy5iZWFtLCBXbCA9IEcud2FsbDtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IGhlbGl4ID0gKGN6OiBudW1iZXIsIHM6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgYSA9IHMgKiBELnR1cm5zICogTWF0aC5QSSAqIDI7XG4gICAgICByZXR1cm4gW0QueCArIE1hdGguc2luKGEpICogRC5SLCBELnkwICsgKEQueTEgLSBELnkwKSAqIHMsIGN6ICsgTWF0aC5jb3MoYSkgKiBELlJdO1xuICAgIH07XG4gICAgZm9yIChjb25zdCBjeiBvZiBELnogYXMgbnVtYmVyW10pIHtcbiAgICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdLCBzZWcgPSA4LCBuID0gRC5zdGF0aW9ucztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgICAgICBjb25zdCBzID0gaSAvIG4sIHAgPSBoZWxpeChjeiwgcyksIHEgPSBoZWxpeChjeiwgTWF0aC5taW4oMSwgcyArIDAuMDAyKSk7XG4gICAgICAgIGNvbnN0IHR4ID0gcVswXSAtIHBbMF0sIHR5ID0gcVsxXSAtIHBbMV0sIHR6ID0gcVsyXSAtIHBbMl0sIHRsID0gTWF0aC5oeXBvdCh0eCwgdHksIHR6KSB8fCAxO1xuICAgICAgICBjb25zdCBUID0gW3R4IC8gdGwsIHR5IC8gdGwsIHR6IC8gdGxdO1xuICAgICAgICBjb25zdCBOID0gWyhwWzBdIC0gRC54KSAvIEQuUiwgMCwgKHBbMl0gLSBjeikgLyBELlJdOyAgICAgICAgICAgICAgICAvLyByYWRpYWwsIG91dHdhcmRcbiAgICAgICAgY29uc3QgQm4gPSBbVFsxXSAqIE5bMl0gLSBUWzJdICogTlsxXSwgVFsyXSAqIE5bMF0gLSBUWzBdICogTlsyXSwgVFswXSAqIE5bMV0gLSBUWzFdICogTlswXV07XG4gICAgICAgIGNvbnN0IHJyID0gRC5yICogKDAuNDUgKyAwLjU1ICogTWF0aC5wb3cocywgMC42KSk7ICAgICAgICAgICAgICAgICAgIC8vIHRhaWwgdGhpbiwgaGVhZCB0aGlja1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWcsIGMgPSBNYXRoLmNvcyh0aCkgKiByciwgc24gPSBNYXRoLnNpbih0aCkgKiBycjtcbiAgICAgICAgICBwb3MucHVzaChwWzBdICsgTlswXSAqIGMgKyBCblswXSAqIHNuLCBwWzFdICsgTlsxXSAqIGMgKyBCblsxXSAqIHNuLCBwWzJdICsgTlsyXSAqIGMgKyBCblsyXSAqIHNuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHR1YmUgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICAgIHR1YmUuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gICAgICB0dWJlLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gICAgICB0dWJlLnNldEluZGV4KGlkeCk7IHR1YmUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgIHBhcnRzLnB1c2godHViZSk7XG4gICAgICAvLyBEb3JzYWwgZmluczogZmxhdCBwbGF0ZXMgc3RhbmRpbmcgb2ZmIHRoZSBvdXRlciBzaWRlIG9mIHRoZSBib2R5LlxuICAgICAgZm9yIChsZXQgayA9IDI7IGsgPCAyMjsgaysrKSB7XG4gICAgICAgIGNvbnN0IHMgPSBrIC8gMjQsIHAgPSBoZWxpeChjeiwgcyk7XG4gICAgICAgIGNvbnN0IGEgPSBzICogRC50dXJucyAqIE1hdGguUEkgKiAyO1xuICAgICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMDUsIDAuMTYsIDAuMTMpO1xuICAgICAgICBnLnJvdGF0ZVkoLWEpO1xuICAgICAgICBnLnRyYW5zbGF0ZShwWzBdICsgTWF0aC5zaW4oYSkgKiAoRC5yICogMC45KSwgcFsxXSArIDAuMDIsIHBbMl0gKyBNYXRoLmNvcyhhKSAqIChELnIgKiAwLjkpKTtcbiAgICAgICAgcGFydHMucHVzaChnKTtcbiAgICAgIH1cbiAgICAgIC8vIEhlYWQgYXQgdGhlIHRvcCBvZiB0aGUgY29pbDogYmxvY2tlZCBqYXcsIGJyb3cgYW5kIHR3byBob3JucywgYWltZWQgYWxvbmcgdGhlIHRhbmdlbnQuXG4gICAgICBjb25zdCBwID0gaGVsaXgoY3osIDEpLCBhID0gRC50dXJucyAqIE1hdGguUEkgKiAyO1xuICAgICAgY29uc3QgaGVhZCA9IG1lcmdlR2VvcyhbXG4gICAgICAgIGJveEF0KDAsIDAsIDAuMjIsIDAuMzAsIDAuMjQsIDAuNDYpLFxuICAgICAgICBib3hBdCgwLCAwLjE1LCAwLjA4LCAwLjI2LCAwLjEwLCAwLjIyKSxcbiAgICAgICAgYm94QXQoLTAuMTAsIDAuMjYsIC0wLjAyLCAwLjA1LCAwLjE2LCAwLjA1KSxcbiAgICAgICAgYm94QXQoMC4xMCwgMC4yNiwgLTAuMDIsIDAuMDUsIDAuMTYsIDAuMDUpLFxuICAgICAgXSk7XG4gICAgICBoZWFkLnJvdGF0ZVgoLTAuMzUpO1xuICAgICAgaGVhZC5yb3RhdGVZKGEgKyBNYXRoLlBJIC8gMik7XG4gICAgICBoZWFkLnRyYW5zbGF0ZShwWzBdICsgTWF0aC5zaW4oYSkgKiAwLjA1LCBwWzFdICsgMC4wMiwgcFsyXSArIE1hdGguY29zKGEpICogMC4wNSk7XG4gICAgICBwYXJ0cy5wdXNoKGhlYWQpO1xuICAgIH1cbiAgICAvLyBHaWx0IHJlbGllZiBwYW5lbHMgb24gdGhlIGZyb250IGJlYW0sIGJldHdlZW4gdGhlIGJyYWNrZXRzLlxuICAgIGNvbnN0IG94ID0gV2wueEYgKyBCLnByb3VkO1xuICAgIGZvciAoY29uc3QgeiBvZiBbLTMuNDAsIC0xLjI1LCAwLCAxLjI1LCAzLjQwXSkge1xuICAgICAgcGFydHMucHVzaChib3hBdChveCArIDAuMDM1LCBCLnkwICsgMC4zNiwgeiwgMC4wNywgMC40MiwgMC45MCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdChveCArIDAuMDg1LCBCLnkwICsgMC4zNiwgeiwgMC4wMywgMC4yNiwgMC42NikpO1xuICAgIH1cbiAgICBhZGQoJ2dpbHQnLCAnR2lsdCBkcmFnb25zIGFuZCBiZWFtIHBhbmVscycsIG1lcmdlR2VvcyhwYXJ0cyksICdnb2xkJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2Y6IHhpZXNoYW4gaGlwLWFuZC1nYWJsZVxuICAgKiBUaGUgd2hvbGUgaWRlbnRpdHkgb2YgdGhlIHByb3AsIGFuZCBldmVyeXRoaW5nIGdsYXplZCBncmVlbiByaWRlcyBPTkUgY29tcG9uZW50IGFuZCBPTkUgZHJhd1xuICAgKiBjYWxsOiB0aGUgdHdvIGxvbmcgc2xvcGVzLCB0aGUgdHdvIGhpcCBlbmRzLCB0aGUgc29mZml0LCB0aGUgcmlkZ2UgYmFyLCB0d28gcmlkZ2UgaG9ybnMsIGZvdXJcbiAgICogZWF2ZXMtY29ybmVyIGhvcm5zLCB0d28gcGVkaW1lbnQtZm9vdCBob3JucywgdGhlIHZlcmdlIGJvYXJkcyBhbmQgdGhlIHR3byBndWFyZGlhbiBiZWFzdHMuXG4gICAqXG4gICAqIFJpbmdzIGNsaW1iIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZTsgZWFjaCBzaWRlIGlzIHN1YmRpdmlkZWQgc28gdGhlIGVhdmVzIGxpbmUgY2FuIFNXRUVQXG4gICAqIHVwIGludG8gdGhlIGNvcm5lcnMgKHRoZSBmbHlpbmcgZWF2ZXMpIGluc3RlYWQgb2YgYmVuZGluZyBhdCBvbmUgbWlkcG9pbnQuIEJlbG93IHRoZSBwZWRpbWVudFxuICAgKiBiYXNlICh0ID0gaFBlZC9yaXNlKSBhbGwgZm91ciBzaWRlcyBhcmUgc3VyZmFjZWQ7IGFib3ZlIGl0IG9ubHkgdGhlIHR3byBsb25nIHNpZGVzIGFyZSwgd2l0aFxuICAgKiB0aGVpciB6IGV4dGVudCBoZWxkIGF0ICstZFpQZWQsIGFuZCB0aGUgcmVkIHBlZGltZW50IHByaXNtcyBmaWxsIHRoZSBlbmRzLiBUaGUgbG9uZy1zbG9wZVxuICAgKiBwcm9maWxlIGlzIHRoZSBwcm94eSdzIG93biBjZW50cmUtY29sdW1uIGRlcHRoIHNjYW4gKGNvbmNhdmUsIDE4IC0+IDMzIGRlZ3JlZXMpOyB0aGUgaGlwIGVuZHNcbiAgICogYXJlIHRoZSBzaGFsbG93IDIxLWRlZ3JlZSBza2lydCB0aGUgZW5kIG1hcCByZWFkcy4gVVZzIGFyZSBtZXRyZXMgYWxvbmcgdGhlIGVhdmVzIGJ5IHNsb3BlXG4gICAqIGRpc3RhbmNlLCBzbyB0aGUgdGlsZS1jb3Vyc2UgY2FudmFzIGxheXMgcmVhbCBjb3Vyc2VzLiAqL1xuICB7XG4gICAgY29uc3QgUiA9IEcucm9vZiwgUkcgPSBHLnJpZGdlO1xuICAgIGNvbnN0IHJpc2UgPSBSLnlSIC0gUi55RSwgdFBlZCA9IFIuaFBlZCAvIHJpc2UsIE0gPSBSLnBlclNpZGUgYXMgbnVtYmVyO1xuICAgIGNvbnN0IGRYID0gKHQ6IG51bWJlcikgPT4gcHJvZmlsZUF0KHQpICogUi5kWDA7XG4gICAgY29uc3QgZFogPSAodDogbnVtYmVyKSA9PiB0ID49IHRQZWQgPyBSLmRaUGVkIDogUi5kWlBlZCArIChSLmRaMCAtIFIuZFpQZWQpICogTWF0aC5wb3coMSAtIHQgLyB0UGVkLCBSLmhpcEV4cCk7XG4gICAgY29uc3QgdHMgPSBSLnQgYXMgbnVtYmVyW107XG4gICAgdHlwZSBQdCA9IHsgcDogbnVtYmVyW107IHU6IG51bWJlcjsgdjogbnVtYmVyIH07XG4gICAgY29uc3Qgc1g6IG51bWJlcltdID0gWzBdLCBzWjogbnVtYmVyW10gPSBbMF07XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0cy5sZW5ndGg7IGkrKykge1xuICAgICAgc1gucHVzaChzWFtpIC0gMV0gKyBNYXRoLmh5cG90KGRYKHRzW2kgLSAxXSkgLSBkWCh0c1tpXSksICh0c1tpXSAtIHRzW2kgLSAxXSkgKiByaXNlKSk7XG4gICAgICBzWi5wdXNoKHNaW2kgLSAxXSArIE1hdGguaHlwb3QoZFoodHNbaSAtIDFdKSAtIGRaKHRzW2ldKSwgKHRzW2ldIC0gdHNbaSAtIDFdKSAqIHJpc2UpKTtcbiAgICB9XG4gICAgLy8gQ29ybmVybmVzcyBvZiBhIHBvaW50IGF0IG5vcm1hbGlzZWQgKHB4LCBweikgb24gdGhlIHJpbmcgcmVjdGFuZ2xlOiB0aGUgcHJvZHVjdCBvZiB0d28gcmFtcHMsXG4gICAgLy8gc28gYSBjb3JuZXIgaXMgMSBmcm9tIGJvdGggb2YgaXRzIHNpZGVzIGFuZCB0aGUgbWlkZGxlIG9mIGEgc2lkZSBpcyAwLlxuICAgIGNvbnN0IHJhbXAgPSAoYTogbnVtYmVyKSA9PiBNYXRoLnBvdyhNYXRoLm1heCgwLCAoTWF0aC5hYnMoYSkgLSAwLjQwKSAvIDAuNjApLCAyLjUpO1xuICAgIC8vIFNpZGUgcyBhdCByaW5nIGksIE0rMSBwb2ludHMsIGZpcnN0IGNvcm5lciB0byBsYXN0OiAwID0gLXogZW5kLCAxID0gLXggc2xvcGUsIDIgPSAreiBlbmQsIDMgPSAreCBzbG9wZS5cbiAgICBjb25zdCBzaWRlID0gKGk6IG51bWJlciwgczogbnVtYmVyKTogUHRbXSA9PiB7XG4gICAgICBjb25zdCB0ID0gdHNbaV0sIHkgPSBSLnlFICsgdCAqIHJpc2U7XG4gICAgICBjb25zdCBmYWRlID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyBSLmxpZnRUKSwgMik7XG4gICAgICBjb25zdCBheCA9IGRYKHQpLCBheiA9IGRaKHQpO1xuICAgICAgY29uc3Qgb3V0OiBQdFtdID0gW107XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBNOyBrKyspIHtcbiAgICAgICAgY29uc3QgcSA9IGsgLyBNLCBsYXQgPSAyICogcSAtIDE7XG4gICAgICAgIGxldCBweDogbnVtYmVyLCBwejogbnVtYmVyO1xuICAgICAgICBpZiAocyA9PT0gMCkgeyBweCA9IC1sYXQ7IHB6ID0gLTE7IH0gZWxzZSBpZiAocyA9PT0gMSkgeyBweCA9IC0xOyBweiA9IGxhdDsgfVxuICAgICAgICBlbHNlIGlmIChzID09PSAyKSB7IHB4ID0gbGF0OyBweiA9IDE7IH0gZWxzZSB7IHB4ID0gMTsgcHogPSAtbGF0OyB9XG4gICAgICAgIGNvbnN0IGMgPSByYW1wKHB4KSAqIHJhbXAocHopO1xuICAgICAgICBjb25zdCBsaWZ0ID0gUi5saWZ0ICogYyAqIGZhZGUsIHB1c2ggPSAxICsgUi5wdXNoICogYyAqIGZhZGU7XG4gICAgICAgIGNvbnN0IHggPSBweCAqIGF4ICogcHVzaCwgeiA9IHB6ICogYXogKiBwdXNoO1xuICAgICAgICBjb25zdCBsb25nU2lkZSA9IHMgPT09IDEgfHwgcyA9PT0gMztcbiAgICAgICAgb3V0LnB1c2goeyBwOiBbeCwgeSArIGxpZnQsIHpdLCB1OiBsb25nU2lkZSA/IHogOiB4LCB2OiBsb25nU2lkZSA/IHNYW2ldIDogc1pbaV0gfSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH07XG4gICAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgdmVydGljZXMgd2l0aGluIGVhY2ggc2lkZSwgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzXG4gICAgLy8gdGhlIHF1YWRzIGFuZCB0aGUgc3dlcHQgY29ybmVycyBzaGFkZSBzbW9vdGg7IGJ1aWx0IGxvb3NlLCB0aGUgbGlmdGVkIGNvcm5lciByZWdpb24gc2hvd2VkXG4gICAgLy8gZXZlcnkgcXVhZCBhcyBhIGZhY2V0LiBTaWRlcyBkbyBub3Qgc2hhcmUgdmVydGljZXMgd2l0aCBlYWNoIG90aGVyICh0aGVpciB1IGRpZmZlcnMpLlxuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXZzOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgY29uc3QgblBlZCA9IHRzLmZpbHRlcigodCkgPT4gdCA8PSB0UGVkICsgMWUtNikubGVuZ3RoO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgNDsgcysrKSB7XG4gICAgICBjb25zdCBuUiA9IChzID09PSAwIHx8IHMgPT09IDIpID8gblBlZCA6IHRzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGJhc2UgPSBwb3MubGVuZ3RoIC8gMztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblI7IGkrKykgZm9yIChjb25zdCBxIG9mIHNpZGUoaSwgcykpIHsgcG9zLnB1c2goLi4ucS5wKTsgdXZzLnB1c2gocS51LCBxLnYpOyB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5SIC0gMTsgaSsrKSBmb3IgKGxldCBrID0gMDsgayA8IE07IGsrKykge1xuICAgICAgICBjb25zdCBhID0gYmFzZSArIGkgKiAoTSArIDEpICsgaywgYiA9IGEgKyAxLCBjID0gYmFzZSArIChpICsgMSkgKiAoTSArIDEpICsgayArIDEsIGQgPSBjIC0gMTtcbiAgICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEVhdmVzIHJpbmcsIGNvcm5lciB0byBjb3JuZXIgcm91bmQgYWxsIGZvdXIgc2lkZXMgKDRNIHBvaW50cyksIGZvciB0aGUgc29mZml0IGFuZCBmYXNjaWEuXG4gICAgY29uc3QgZWF2ZTogUHRbXSA9IFtdO1xuICAgIGZvciAobGV0IHMgPSAwOyBzIDwgNDsgcysrKSB7IGNvbnN0IHB0cyA9IHNpZGUoMCwgcyk7IGZvciAobGV0IGsgPSAwOyBrIDwgTTsgaysrKSBlYXZlLnB1c2gocHRzW2tdKTsgfVxuICAgIGNvbnN0IGxvdyA9IGVhdmUubWFwKChlKSA9PiAoeyBwOiBbZS5wWzBdLCBlLnBbMV0gLSBSLmZhc2NpYSwgZS5wWzJdXSwgdTogZS5wWzBdLCB2OiBlLnBbMl0gfSkpO1xuICAgIC8vIFNvZmZpdDogYSBTVFJJUCBmcm9tIHRoZSBsb3dlcmVkIGVhdmVzIHJpbmcgaW4gdG8gdGhlIGJlYW0gYmFuZCdzIG91dGVyIGZhY2VzLCBzbyB0aGVcbiAgICAvLyB1bmRlcnNpZGUgZm9sbG93cyB0aGUgc3dlcHQgY29ybmVycy4gVGhlIGZpcnN0IGJ1aWxkIGNsb3NlZCBpdCB3aXRoIG9uZSBmbGF0IGZhbiwgd2hpY2ggZnJvbVxuICAgIC8vIHRoZSBncm91bmQgY3V0IGFjcm9zcyB0aGUgbGlmdGVkIGNvcm5lcnMgYXMgYSBibGFjayBzbGFiLiBEb3dud2FyZC1mYWNpbmcgKENXIGZyb20gYWJvdmUpLlxuICAgIGNvbnN0IEJtID0gRy5iZWFtLCBXbCA9IEcud2FsbDtcbiAgICBjb25zdCBpbm5lclkgPSBSLnlFIC0gUi5mYXNjaWEgLSAwLjAzO1xuICAgIGNvbnN0IGluWDAgPSBXbC54QiAtIEJtLnByb3VkLCBpblgxID0gV2wueEYgKyBCbS5wcm91ZCwgaW5aID0gV2wuaHogKyBCbS5wcm91ZDtcbiAgICBjb25zdCBpbm5lciA9IGVhdmUubWFwKChlLCBrKSA9PiB7XG4gICAgICBjb25zdCBzID0gTWF0aC5mbG9vcihrIC8gTSksIHEgPSAoayAlIE0pIC8gTSwgbGF0ID0gMiAqIHEgLSAxO1xuICAgICAgbGV0IHB4OiBudW1iZXIsIHB6OiBudW1iZXI7XG4gICAgICBpZiAocyA9PT0gMCkgeyBweCA9IC1sYXQ7IHB6ID0gLTE7IH0gZWxzZSBpZiAocyA9PT0gMSkgeyBweCA9IC0xOyBweiA9IGxhdDsgfVxuICAgICAgZWxzZSBpZiAocyA9PT0gMikgeyBweCA9IGxhdDsgcHogPSAxOyB9IGVsc2UgeyBweCA9IDE7IHB6ID0gLWxhdDsgfVxuICAgICAgY29uc3QgeCA9IChpblgwICsgaW5YMSkgLyAyICsgcHggKiAoaW5YMSAtIGluWDApIC8gMjtcbiAgICAgIHJldHVybiB7IHA6IFt4LCBpbm5lclksIHB6ICogaW5aXSwgdTogeCwgdjogcHogKiBpblogfTtcbiAgICB9KTtcbiAgICBjb25zdCBiYXNlTCA9IHBvcy5sZW5ndGggLyAzLCBiYXNlSSA9IGJhc2VMICsgbG93Lmxlbmd0aDtcbiAgICBmb3IgKGNvbnN0IHEgb2YgbG93KSB7IHBvcy5wdXNoKC4uLnEucCk7IHV2cy5wdXNoKHEudSwgcS52KTsgfVxuICAgIGZvciAoY29uc3QgcSBvZiBpbm5lcikgeyBwb3MucHVzaCguLi5xLnApOyB1dnMucHVzaChxLnUsIHEudik7IH1cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IGxvdy5sZW5ndGg7IGsrKykge1xuICAgICAgY29uc3QgazEgPSAoayArIDEpICUgbG93Lmxlbmd0aDtcbiAgICAgIGlkeC5wdXNoKGJhc2VMICsgaywgYmFzZUkgKyBrLCBiYXNlSSArIGsxLCBiYXNlTCArIGssIGJhc2VJICsgazEsIGJhc2VMICsgazEpO1xuICAgIH1cbiAgICBjb25zdCBzbG9wZSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIHNsb3BlLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICAgIHNsb3BlLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodXZzKSwgMikpO1xuICAgIHNsb3BlLnNldEluZGV4KGlkeCk7XG4gICAgc2xvcGUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcblxuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW3Nsb3BlXTtcbiAgICBjb25zdCB0cmltOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgLy8gUmlkZ2UgYmFyOiBhIHRhbGwgYmFuZCBvdmVyIHRoZSBhcGV4LCBzaG9ydGVyIHRoYW4gdGhlIGdhYmxlIHNvIHRoZSBob3JucyBvdmVyaGFuZyBpdC5cbiAgICB0cmltLnB1c2goYm94QXQoMCwgKFJHLnkwICsgUkcueTEpIC8gMiwgMCwgUkcudywgUkcueTEgLSBSRy55MCwgUkcuaGFsZlogKiAyKSk7XG4gICAgdHJpbS5wdXNoKGJveEF0KDAsIFJHLnkxICsgMC4wMywgMCwgUkcudyAqIDAuNTUsIDAuMDYsIFJHLmhhbGZaICogMiAtIDAuMzApKTtcbiAgICB0cmltLnB1c2goYm94QXQoMCwgKFJHLnkwICsgUkcueTEpIC8gMiwgMCwgUkcudyArIDAuMDgsIDAuMTAsIFJHLmhhbGZaICogMiAtIDAuNDApKTsgICAvLyBtb3VsZGluZyBiYW5kXG4gICAgLy8gUmlkZ2UtZW5kIGhvcm5zOiB0aGUgc3dhbGxvdy10YWlsIGVuZHMsIHN3ZWVwaW5nIG91dCBhbmQgdXAgZnJvbSB0aGUgYmFyIGVuZCBhbmQgY3VybGluZ1xuICAgIC8vIGJhY2sgb3ZlciBhdCB0aGUgdGlwIChoZWFkaW5nIDM1IC0+IDEzNSBkZWdyZWVzKSwgZmxhdCBhY3Jvc3MgdGhlIHJpZGdlLCB0aXAgYXQgMS4wIEggYW5kXG4gICAgLy8gMC4yMyBtIHBhc3QgdGhlIGdhYmxlIGZhY2UuIEJ1aWx0IGluIHgteSwgdHVybmVkIHRvIHJ1biBhbG9uZyArLXouXG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCBnID0gc3BpcmFsSG9ybigxLjM4LCAwLjYwLCAyLjM1LCAwLjQ0LCAwLjEyLCAwLjE2LCA4KTtcbiAgICAgIGcucm90YXRlWSh6cyA+IDAgPyAwIDogTWF0aC5QSSk7XG4gICAgICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDIpO1xuICAgICAgZy50cmFuc2xhdGUoMCwgUkcueTAgKyAwLjI1LCB6cyAqIChSRy5oYWxmWiAtIDAuMTIpKTtcbiAgICAgIHRyaW0ucHVzaChnKTtcbiAgICAgIGNvbnN0IGcyID0gc3BpcmFsSG9ybigwLjgwLCAwLjc1LCAyLjUsIDAuMjIsIDAuMDgsIDAuMTIsIDYpOyAgIC8vIHRoZSB0YWlsJ3Mgc2Vjb25kIHByb25nXG4gICAgICBnMi5yb3RhdGVZKHpzID4gMCA/IDAgOiBNYXRoLlBJKTtcbiAgICAgIGcyLnJvdGF0ZVkoTWF0aC5QSSAvIDIpO1xuICAgICAgZzIudHJhbnNsYXRlKDAsIFJHLnkxIC0gMC4wNSwgenMgKiAoUkcuaGFsZlogLSAwLjU1KSk7XG4gICAgICB0cmltLnB1c2goZzIpO1xuICAgIH1cbiAgICAvLyBGb3VyIGVhdmVzLWNvcm5lciBob3JuczogdGhlIHN3ZXB0IGVhdmVzIGxpbmUgZW5kcyBpbiBhIHNob3J0IHVwdHVybmVkIGN1cmwsIGFpbWVkXG4gICAgLy8gZGlhZ29uYWxseSBvdXR3YXJkIGZyb20gZWFjaCBsaWZ0ZWQgY29ybmVyLlxuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCBjID0gc2lkZSgwLCB6cyA8IDAgPyAwIDogMikuZmluZCgocCkgPT4gTWF0aC5zaWduKHAucFswXSkgPT09IHhzKSE7ICAgLy8gdGhhdCBzaWRlJ3MgY29ybmVyIHBvaW50XG4gICAgICBjb25zdCBnID0gc3BpcmFsSG9ybigwLjYyLCAwLjU1LCAyLjAsIDAuMjgsIDAuMTAsIDAuMjAsIDYpO1xuICAgICAgZy5yb3RhdGVZKE1hdGguYXRhbjIoLXpzLCB4cykpO1xuICAgICAgZy50cmFuc2xhdGUoYy5wWzBdIC0geHMgKiAwLjE2LCBjLnBbMV0gLSAwLjEwLCBjLnBbMl0gLSB6cyAqIDAuMTYpO1xuICAgICAgdHJpbS5wdXNoKGcpO1xuICAgIH1cbiAgICAvLyBWZXJnZSBib2FyZHMgYWxvbmcgdGhlIHR3byByYWtlcyBvZiBlYWNoIGdhYmxlLCBhbmQgYSBob3JuIGF0IGVhY2ggcGVkaW1lbnQgZm9vdC5cbiAgICBjb25zdCBkWFBlZCA9IGRYKHRQZWQpLCB5UGVkID0gUi55RSArIFIuaFBlZDtcbiAgICBjb25zdCByYWtlTGVuID0gTWF0aC5oeXBvdChkWFBlZCwgUi55UiAtIHlQZWQpLCByYWtlQW5nID0gTWF0aC5hdGFuMihSLnlSIC0geVBlZCwgZFhQZWQpO1xuICAgIGZvciAoY29uc3QgenMgb2YgWy0xLCAxXSkge1xuICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSB7XG4gICAgICAgIGNvbnN0IHZiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHJha2VMZW4gKyAwLjEwLCAwLjIyLCAwLjEyKTtcbiAgICAgICAgdmIucm90YXRlWigteHMgKiByYWtlQW5nKTsgICAgICAgICAgICAgICAgICAgICAgICAvLyAreCBib2FyZCBydW5zIERPV04gZnJvbSB0aGUgYXBleFxuICAgICAgICB2Yi50cmFuc2xhdGUoeHMgKiBkWFBlZCAvIDIsICh5UGVkICsgUi55UikgLyAyICsgMC4wNywgenMgKiAoUi5kWlBlZCArIDAuMDIpKTtcbiAgICAgICAgdHJpbS5wdXNoKHZiKTtcbiAgICAgICAgY29uc3QgZyA9IHNwaXJhbEhvcm4oMC41MCwgMC40MCwgMS45NSwgMC4yNCwgMC4wOCwgMC4xNCwgNSk7XG4gICAgICAgIGcucm90YXRlWSh4cyA+IDAgPyAwIDogTWF0aC5QSSk7XG4gICAgICAgIGcudHJhbnNsYXRlKHhzICogKGRYUGVkIC0gMC4wNiksIHlQZWQgLSAwLjA4LCB6cyAqIChSLmRaUGVkIC0gMC4wMikpO1xuICAgICAgICB0cmltLnB1c2goZyk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIEd1YXJkaWFuIGJlYXN0czogdHdvIGJsb2NrZWQgc2lsaG91ZXR0ZXMgZmFjaW5nIGVhY2ggb3RoZXIgYWNyb3NzIHRoZSByaWRnZSBjZW50cmUuXG4gICAgZm9yIChjb25zdCB6cyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCB6ID0genMgKiAwLjM2LCB0b3AgPSBSRy55MSArIDAuMDM7XG4gICAgICBjb25zdCBib2R5ID0gW1xuICAgICAgICBib3hBdCgwLCB0b3AgKyAwLjMyLCB6LCAwLjI0LCAwLjI4LCAwLjUyKSxcbiAgICAgICAgYm94QXQoMCwgdG9wICsgMC41NiwgeiAtIHpzICogMC4zMCwgMC4yMiwgMC4yNCwgMC4yNCksICAgLy8gaGVhZCwgaW5uZXIgZW5kXG4gICAgICAgIGJveEF0KDAsIHRvcCArIDAuNDYsIHogLSB6cyAqIDAuNDQsIDAuMTAsIDAuMTAsIDAuMTApLCAgIC8vIG11enpsZVxuICAgICAgICBib3hBdCgwLCB0b3AgKyAwLjQyLCB6ICsgenMgKiAwLjMwLCAwLjA2LCAwLjI4LCAwLjEwKSwgICAvLyB0YWlsIHVwXG4gICAgICBdO1xuICAgICAgZm9yIChjb25zdCB4cyBvZiBbLTEsIDFdKSBmb3IgKGNvbnN0IHp6IG9mIFstMC4xOCwgMC4xOF0pIGJvZHkucHVzaChib3hBdCh4cyAqIDAuMDgsIHRvcCArIDAuMTAsIHogKyB6eiwgMC4wNywgMC4yMCwgMC4wOCkpO1xuICAgICAgdHJpbS5wdXNoKC4uLmJvZHkpO1xuICAgIH1cbiAgICBjb25zdCB0cmltR2VvID0gbWVyZ2VHZW9zKHRyaW0pO1xuICAgIHByb2pVdih0cmltR2VvLCBXLnJvb2YudGlsZSk7XG4gICAgcGFydHMucHVzaCh0cmltR2VvKTtcbiAgICBhZGQoJ3Jvb2YnLCAnR2xhemVkIHRpbGUgcm9vZicsIG1lcmdlR2VvcyhwYXJ0cyksICdncmVlbicpO1xuXG4gICAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGVhdmVzIGZhc2NpYSB3aXRoIGNhcCB0aWxlc1xuICAgICAqIFRoZSBiYW5kIGJldHdlZW4gdGhlIGVhdmVzIHJpbmcgYW5kIHRoZSBzb2ZmaXQsIG9uIGl0cyBvd24gbWF0ZXJpYWwgc28gdGhlIGNhcC10aWxlIGNhbnZhc1xuICAgICAqIChyb3VuZCBlbmQgY2FwcyBhdCBldmVyeSBjb3Vyc2UsIGRyaXAgdGlsZXMgYmV0d2VlbikgY2FuIGJlIGNsYW1wZWQgdG8gaXQuICovXG4gICAge1xuICAgICAgY29uc3QgZnQ6IG51bWJlcltdID0gW10sIGZ1OiBudW1iZXJbXSA9IFtdO1xuICAgICAgbGV0IGFsb25nID0gMDtcbiAgICAgIGNvbnN0IG4gPSBlYXZlLmxlbmd0aDtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgIGNvbnN0IGEgPSBlYXZlW2tdLCBiID0gZWF2ZVsoayArIDEpICUgbl07XG4gICAgICAgIGNvbnN0IGxlbiA9IE1hdGguaHlwb3QoYi5wWzBdIC0gYS5wWzBdLCBiLnBbMl0gLSBhLnBbMl0pO1xuICAgICAgICBjb25zdCB1MCA9IGFsb25nLCB1MSA9IGFsb25nICsgbGVuO1xuICAgICAgICBjb25zdCBBID0gYS5wLCBCMiA9IGIucDtcbiAgICAgICAgY29uc3QgQWwgPSBbQVswXSwgQVsxXSAtIFIuZmFzY2lhLCBBWzJdXSwgQmwgPSBbQjJbMF0sIEIyWzFdIC0gUi5mYXNjaWEsIEIyWzJdXTtcbiAgICAgICAgLy8gKEFsLCBCMiwgQSkgLyAoQWwsIEJsLCBCMik6IE9VVFdBUkQgZm9yIGEgcmluZyB3b3VuZCBDQ1cgZnJvbSBhYm92ZS4gV291bmQgdGhlIG90aGVyIHdheVxuICAgICAgICAvLyB0aGUgYmFuZCdzIGZyb250IGZhY2VzIHBvaW50IGludG8gdGhlIHJvb2YsIHRoZSBvdXRzaWRlIGlzIGN1bGxlZCwgYW5kIGZyb20gdGhlIGdyb3VuZFxuICAgICAgICAvLyB5b3Ugc2VlIHRoZSBmYXIgc2lkZSdzIGlubmVyIGZhY2UgYXMgYSBibGFjayByaW5nLlxuICAgICAgICBmdC5wdXNoKC4uLkFsLCAuLi5CMiwgLi4uQSwgLi4uQWwsIC4uLkJsLCAuLi5CMik7XG4gICAgICAgIGZ1LnB1c2godTAsIDAsIHUxLCAxLCB1MCwgMSwgdTAsIDAsIHUxLCAwLCB1MSwgMSk7XG4gICAgICAgIGFsb25nID0gdTE7XG4gICAgICB9XG4gICAgICBjb25zdCBmZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgICAgZmcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShmdCksIDMpKTtcbiAgICAgIGZnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoZnUpLCAyKSk7XG4gICAgICBmZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgICAgYWRkKCdlYXZlJywgJ0VhdmVzIGZhc2NpYSBhbmQgY2FwIHRpbGVzJywgZmcsICdlYXZlJyk7XG4gICAgfVxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoYW5naW5nIGluY2Vuc2UgY29pbHNcbiAgICogVGhlIG90aGVyIGZlYXR1cmUgdGhlIG5vdGVzIGNhbGwgb3V0LiBUZW4gY29uaWNhbCBjb2lscyBodW5nIGZyb20gdGhlIGZyb250IGJlYW0gYXQgdHdvXG4gICAqIGFsdGVybmF0aW5nIGhlaWdodHMganVzdCBpbnNpZGUgdGhlIGNvbG9ubmFkZSwgYXMgT05FIEluc3RhbmNlZE1lc2guIFBsYXRlOiB+MC44NSBtIGFjcm9zc1xuICAgKiB0aGUgYm90dG9tLCB+MC43NSBtIHRhbGwsIGkuZS4gYmlnIC0tIHYxIGhhZCB0aGVtIGF0IDAuNjAgeCAwLjUyLiAqL1xuICB7XG4gICAgY29uc3QgSyA9IEcuY29pbHMsIEIgPSBHLmJlYW07XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhbXG4gICAgICBjeWxBdCgwLCAwLCAwLCBLLnJUb3AsIEsuckJvdCwgSy5oLCAxNCksXG4gICAgICBjeWxBdCgwLCBLLmggLyAyICsgMC4yNSwgMCwgMC4wMTUsIDAuMDE1LCAwLjUwLCA1KSxcbiAgICBdKTtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IEsuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeiA9IEsuejAgKyAoKEsuejEgLSBLLnowKSAqIGkpIC8gKEsuY291bnQgLSAxKTtcbiAgICAgIGNvbnN0IHRvcCA9IEIueTAgLSAwLjAyIC0gKGkgJSAyKSAqIDAuMzg7ICAgICAgICAgICAgICAvLyB3aXJlIHRvcCBhdCB0aGUgYmVhbSB1bmRlcnNpZGVcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKEsueCwgdG9wIC0gMC41MCAtIEsuaCAvIDIsIHopKTtcbiAgICB9XG4gICAgYWRkSW5zdCgnY29pbHMnLCAnSGFuZ2luZyBpbmNlbnNlIGNvaWxzJywgdW5pdCwgJ2NvaWwnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gc3VyZmFjZSBjYW52YXNlc1xuICAgKiBGaXZlIENhbnZhcyAyRCB0aWxlcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIGV2ZXJ5IHNjdWxwdCBtYXRlcmlhbCBzdGF5c1xuICAgKiBkZWNsYXJlZCB0ZXh0dXJlbGVzcyBhbmQga2VlcHMgaXRzIG1lYXN1cmVkIGFsYmVkbyBhcyB0aGUgbXVsdGlwbGljYW5kOyBlYWNoIHRpbGUgaXMgYSBmZXdcbiAgICogaHVuZHJlZCBmaWxscyBhdCA1MTIgcHggb24gdGhlIENQVSBjYW52YXMgcGF0aCAod2lsbFJlYWRGcmVxdWVudGx5KSwgc2luZ2xlLWRpZ2l0IG1zLiBVbmRlclxuICAgKiBOb2RlIC0tIGJhbmRzLm1qcyBhbmQgY2hlY2stY29wbGFuYXIgcnVuIHRoaXMgZmFjdG9yeSB3aXRoIG5vIERPTSAtLSB0aGVyZSBpcyBubyBjYW52YXMgYW5kXG4gICAqIGV2ZXJ5IG1hdGVyaWFsIGtlZXBzIGl0cyBmbGF0IG1lYXN1cmVkIGNvbG91ci4gKi9cbiAge1xuICAgIGNvbnN0IGhhc0RvbSA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIChkb2N1bWVudCBhcyBhbnkpLmNyZWF0ZUVsZW1lbnQgPT09ICdmdW5jdGlvbic7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGgubWluKFcuc2l6ZSwgb3B0aW9ucy50ZXh0dXJlU2l6ZSA/PyBXLnNpemUpO1xuICAgIGNvbnN0IGNzcyA9ICh0OiBudW1iZXJbXSwgYTogbnVtYmVyKSA9PlxuICAgICAgJ3JnYmEoJyArIE1hdGgucm91bmQodFswXSAqIDI1NSkgKyAnLCcgKyBNYXRoLnJvdW5kKHRbMV0gKiAyNTUpICsgJywnICsgTWF0aC5yb3VuZCh0WzJdICogMjU1KSArICcsJyArIGEgKyAnKSc7XG4gICAgY29uc3QgZ3JleSA9ICh0OiBudW1iZXIsIGEgPSAxKSA9PiBjc3MoW3QsIHQsIHRdLCBhKTtcbiAgICBjb25zdCBybmcgPSAoc2VlZDogbnVtYmVyKSA9PiAoKSA9PiB7IHNlZWQgPSAoc2VlZCAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHNlZWQgLyA0Mjk0OTY3Mjk2OyB9O1xuICAgIHR5cGUgRHJhdyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCkgPT4gdm9pZDtcbiAgICBmdW5jdGlvbiBtYWtlVGlsZShzZWVkOiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkcmF3OiBEcmF3KTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgICAgIGlmICghaGFzRG9tKSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjdi53aWR0aCA9IHc7IGN2LmhlaWdodCA9IGg7XG4gICAgICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pO1xuICAgICAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICAgICAgY29uc3Qgd3JhcHBlZCA9IChmbjogKCkgPT4gdm9pZCkgPT4ge1xuICAgICAgICBmb3IgKGxldCBveCA9IC0xOyBveCA8PSAxOyBveCsrKSBmb3IgKGxldCBveSA9IC0xOyBveSA8PSAxOyBveSsrKSB7XG4gICAgICAgICAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShveCAqIHcsIG95ICogaCk7IGZuKCk7IGN0eC5yZXN0b3JlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICBkcmF3KGN0eCwgcm5nKHNlZWQpLCB3LCB3cmFwcGVkKTtcbiAgICAgIHJldHVybiBjdjtcbiAgICB9XG4gICAgY29uc3QgY2xvdWQgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHI6ICgpID0+IG51bWJlciwgUzogbnVtYmVyLCB3cmFwcGVkOiAoZm46ICgpID0+IHZvaWQpID0+IHZvaWQsXG4gICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIHJhZDogbnVtYmVyLCBhbHBoYTogbnVtYmVyLCBibHVyUHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWFya3M6IG51bWJlcltdW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgbWFya3MucHVzaChbcigpICogUywgcigpICogUywgcmFkICogUyAqICgwLjUgKyByKCkpLCBhbHBoYSAqICgwLjUgKyAwLjUgKiByKCkpXSk7XG4gICAgICB3cmFwcGVkKCgpID0+IHtcbiAgICAgICAgY3R4LmZpbHRlciA9ICdibHVyKCcgKyBibHVyUHggKyAncHgpJztcbiAgICAgICAgZm9yIChjb25zdCBbeCwgeSwgcnIsIGFdIG9mIG1hcmtzKSB7IGN0eC5maWxsU3R5bGUgPSBjc3ModG9uZSwgYSk7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IHdhc2hlcyA9IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgcjogKCkgPT4gbnVtYmVyLCBTOiBudW1iZXIsIHdyYXBwZWQ6IChmbjogKCkgPT4gdm9pZCkgPT4gdm9pZCxcbiAgICAgICAgICAgICAgICAgICAgdG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIGFscGhhOiBudW1iZXIsIGJsdXJQeDogbnVtYmVyLCB3TWluOiBudW1iZXIsIHdNYXg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgbWFya3M6IG51bWJlcltdW10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgbWFya3MucHVzaChbcigpICogUywgcigpICogUywgUyAqICgwLjE1ICsgMC41ICogcigpKSwgd01pbiArICh3TWF4IC0gd01pbikgKiByKCksIGFscGhhICogKDAuNSArIDAuNSAqIHIoKSldKTtcbiAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICBjdHguZmlsdGVyID0gJ2JsdXIoJyArIGJsdXJQeCArICdweCknO1xuICAgICAgICBmb3IgKGNvbnN0IFt4LCB5MCwgbGVuLCB3LCBhXSBvZiBtYXJrcykge1xuICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgbGVuKTtcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBjc3ModG9uZSwgYSkpOyBnLmFkZENvbG9yU3RvcCgwLjQsIGNzcyh0b25lLCBhICogMC42KSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyh0b25lLCAwKSk7XG4gICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGc7IGN0eC5maWxsUmVjdCh4IC0gdyAvIDIsIHkwLCB3LCBsZW4pO1xuICAgICAgICB9XG4gICAgICAgIGN0eC5maWx0ZXIgPSAnbm9uZSc7XG4gICAgICB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGdyYWluID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCByOiAoKSA9PiBudW1iZXIsIFM6IG51bWJlciwgd3JhcHBlZDogKGZuOiAoKSA9PiB2b2lkKSA9PiB2b2lkLFxuICAgICAgICAgICAgICAgICAgIHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7IGNvbnN0IHggPSByKCkgKiBTLCB5ID0gcigpICogUywgZCA9IDAuNiArIHIoKSAqIDEuNDsgcC5yZWN0KHgsIHksIGQsIGQpOyB9XG4gICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbHBoYSk7IGN0eC5maWxsKHApOyB9KTtcbiAgICB9O1xuICAgIGNvbnN0IGJpbmQgPSAobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgY3Y6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCwgYnVtcDogbnVtYmVyLCBjbGFtcFYgPSBmYWxzZSkgPT4ge1xuICAgICAgaWYgKCFjdikgcmV0dXJuO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICAgICAgdGV4LndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICB0ZXgud3JhcFQgPSBjbGFtcFYgPyBUSFJFRS5DbGFtcFRvRWRnZVdyYXBwaW5nIDogVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4OyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfTtcbiAgICBjb25zdCByZWJhc2UgPSAobTogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIGF2ZzogbnVtYmVyKSA9PiB7XG4gICAgICBpZiAoIWhhc0RvbSkgcmV0dXJuO1xuICAgICAgY29uc3QgayA9IE1hdGgucG93KGF2ZywgMi4yKTtcbiAgICAgIG0uY29sb3Iuc2V0UkdCKG0uY29sb3IuciAvIGssIG0uY29sb3IuZyAvIGssIG0uY29sb3IuYiAvIGspO1xuICAgIH07XG5cbiAgICAvLyBSb29mOiBsYWlkIGhhbGYtcm91bmQgdGlsZSBjb3Vyc2VzLiBWZXJ0aWNhbCByaWRnZXMgYXQgdGhlIHBsYXRlJ3MgfjAuMjUgbSBwaXRjaCwgZWFjaCBhXG4gICAgLy8gdmFsbGV5LWNyZXN0LXZhbGxleSBncmFkaWVudCwgYSBmYWludCBjb3Vyc2Ugam9pbnQgZXZlcnkgMC4zNCBtLCB0aGVuIG1vc3MgYW5kIGdyaW1lIGNsb3Vkcy5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5yb29mO1xuICAgICAgYmluZChtYXRlcmlhbHMuZ3JlZW4sIG1ha2VUaWxlKDExMDUyMDExLCBzaXplLCBzaXplLCAoY3R4LCByLCBTLCB3cmFwcGVkKSA9PiB7XG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLnJvdW5kKFAudGlsZSAvIFAucGl0Y2gpLCBjdyA9IFMgLyBuO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoaSAqIGN3LCAwLCAoaSArIDEpICogY3csIDApO1xuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGdyZXkoUC52YWxsZXkpKTsgZy5hZGRDb2xvclN0b3AoMC4xOCwgZ3JleShQLmNyZXN0ICogMC45NCkpOyBnLmFkZENvbG9yU3RvcCgwLjQ1LCBncmV5KFAuY3Jlc3QpKTtcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLjcyLCBncmV5KFAuY3Jlc3QgKiAwLjkwKSk7IGcuYWRkQ29sb3JTdG9wKDEsIGdyZXkoUC52YWxsZXkpKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KGkgKiBjdywgMCwgY3cgKyAxLCBTKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3dzID0gTWF0aC5yb3VuZChQLnRpbGUgLyBQLmNvdXJzZSksIHJoID0gUyAvIHJvd3M7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmV5KDAuODIsIDAuNTUpO1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHJvd3M7IGorKykgY3R4LmZpbGxSZWN0KDAsIGogKiByaCwgUywgMik7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5tb3NzLCA0LCAwLjEwLCAwLjIyLCAxMik7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5ncmltZSwgMywgMC4xNCwgMC4yMCwgMTYpO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFswLjYsIDAuNiwgMC42XSwgMjUwMCwgMC4wNyk7XG4gICAgICB9KSwgUC5idW1wKTtcbiAgICB9XG4gICAgLy8gRWF2ZXM6IHJvdW5kIGNhcCB0aWxlcyBhdCBldmVyeSBjb3Vyc2Ugb3ZlciBhIGZpZWxkIG9mIHBvaW50ZWQgZHJpcCB0aWxlcy4gQ2xhbXBlZCBpbiB2IHRvXG4gICAgLy8gdGhlIGZhc2NpYSBiYW5kLCByZXBlYXRpbmcgYWxvbmcgaXQgaW4gbWV0cmVzLlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBXLmVhdmUsIHBoID0gTWF0aC5yb3VuZChzaXplICogRy5yb29mLmZhc2NpYSk7XG4gICAgICBiaW5kKG1hdGVyaWFscy5lYXZlLCBtYWtlVGlsZSgzLCBzaXplLCBwaCwgKGN0eCwgciwgUykgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JleShQLmZpZWxkKTsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIHBoKTtcbiAgICAgICAgY29uc3QgbiA9IE1hdGgucm91bmQoMSAvIFAucGl0Y2gpLCBjdyA9IFMgLyBuLCBjciA9IFAuY2FwUiAqIFM7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgY3ggPSAoaSArIDAuNSkgKiBjdywgY3kgPSBwaCAqIDAuNTU7XG4gICAgICAgICAgLy8gZHJpcCB0aWxlIGJldHdlZW4gY2FwczogYSBwb2ludGVkIHRvbmd1ZSBoYW5naW5nIGJlbG93IHRoZSByb3dcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JleShQLmRyaXApO1xuICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyhjeCArIGN3ICogMC41IC0gY3cgKiAwLjM0LCBwaCAqIDAuMDUpOyBjdHgubGluZVRvKGN4ICsgY3cgKiAwLjUgKyBjdyAqIDAuMzQsIHBoICogMC4wNSk7XG4gICAgICAgICAgY3R4LmxpbmVUbyhjeCArIGN3ICogMC41LCBwaCAqIDAuOTIpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICAgICAgLy8gY2FwOiBkYXJrIHJpbSwgbGlnaHRlciBmYWNlLCBkYXJrZXIgZW1ib3NzZWQgY29yZVxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBncmV5KFAuY2FwUmltKTsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKGN4LCBjeSwgY3IsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JleShQLmNhcEZhY2UpOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoY3gsIGN5LCBjciAqIDAuODAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JleShQLmNhcENvcmUpOyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoY3gsIGN5LCBjciAqIDAuNDIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ3JleSgwLjYsIDAuNSk7IGN0eC5maWxsUmVjdCgwLCAwLCBTLCAyKTtcbiAgICAgIH0pLCBQLmJ1bXAsIHRydWUpO1xuICAgIH1cbiAgICAvLyBSZWQgbGFjcXVlcjogc29vdCB3YXNoZXMgcnVubmluZyBkb3duIGZyb20gdGhlIHRvcCwgZ3JpbWUsIGdyYWluLlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBXLnJlZDtcbiAgICAgIGJpbmQobWF0ZXJpYWxzLnJlZCwgbWFrZVRpbGUoODI2MTQwMywgc2l6ZSwgc2l6ZSwgKGN0eCwgciwgUywgd3JhcHBlZCkgPT4ge1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICAgIC8vIENvbnRpbnVvdXMgdmVydGljYWwgc3RyZWFraW5nLCBuZXZlciByb3VuZCBibG90Y2hlczogc29vdCBydW5zIERPV04gYSBsYWNxdWVyZWQgd2FsbC5cbiAgICAgICAgd2FzaGVzKGN0eCwgciwgUywgd3JhcHBlZCwgUC53YXNoLCA1LCAwLjE4LCAxNCwgNjAsIDE0MCk7XG4gICAgICAgIHdhc2hlcyhjdHgsIHIsIFMsIHdyYXBwZWQsIFAuc29vdCwgMTYsIDAuMjIsIDMsIDMsIDE0KTtcbiAgICAgICAgd2FzaGVzKGN0eCwgciwgUywgd3JhcHBlZCwgUC5zb290LCA2LCAwLjE2LCA2LCAyMCwgNTApO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFAuZ3JhaW4sIDMwMDAsIDAuMDgpO1xuICAgICAgfSksIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIFN0b25lOiBjbG91ZHkgbW90dGxlLCB3YXJtIHJ1c3QtYnJvd24gc3RhaW5pbmcsIGRhcmsgZ3JpbWUsIGdyYWluLlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBXLnN0b25lO1xuICAgICAgYmluZChtYXRlcmlhbHMucGFsZSwgbWFrZVRpbGUoMjAyNjA4MjgsIHNpemUsIHNpemUsIChjdHgsIHIsIFMsIHdyYXBwZWQpID0+IHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMpO1xuICAgICAgICBjbG91ZChjdHgsIHIsIFMsIHdyYXBwZWQsIFAubW90dGxlLCA4LCAwLjE4LCAwLjM1LCAxNik7XG4gICAgICAgIGNsb3VkKGN0eCwgciwgUywgd3JhcHBlZCwgUC5zdGFpbiwgMywgMC4xNCwgMC4zMCwgMTQpO1xuICAgICAgICB3YXNoZXMoY3R4LCByLCBTLCB3cmFwcGVkLCBQLmdyaW1lLCA0LCAwLjI4LCA4LCAyMCwgOTApO1xuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFAuZ3JhaW4sIDUwMDAsIDAuMDcpO1xuICAgICAgfSksIFAuYnVtcCk7XG4gICAgfVxuICAgIC8vIENvaWxzOiB0aGUgc3BpcmFsIHJlYWQgYXMgaG9yaXpvbnRhbCBncm9vdmVzIHJvdW5kIHRoZSBjb25lLCBvbmUgdGlsZSBwZXIgY29pbCBoZWlnaHQuIFRoZXlcbiAgICAvLyBoYW5nIGluIHRoZSBwb3JjaCwgd2hpY2ggdGhlIGhhcm5lc3MncyBzaGFkb3ctY2FzdGluZyBkaXJlY3Rpb25hbHMgbGVhdmUgaW4gc2hhZG93LCB3aGlsZVxuICAgIC8vIHRoZSBwbGF0ZSBzaG93cyB0aGVtIGFzIHRoZSBicmlnaHRlc3QgdGhpbmcgdW5kZXIgdGhlIGVhdmVzIChsaXQgYnkgb3BlbiBza3kgdGhlIGhhcm5lc3NcbiAgICAvLyBoYXMgbm8gZW52aXJvbm1lbnQgZm9yKTogYSBzbWFsbCBlbWlzc2l2ZSB0ZXJtIHN0YW5kcyBpbiBmb3IgdGhhdCBza3lsaWdodC5cbiAgICB7XG4gICAgICBjb25zdCBQID0gVy5jb2lsO1xuICAgICAgbWF0ZXJpYWxzLmNvaWwuZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3IoMHgyYTI1MjIpO1xuICAgICAgYmluZChtYXRlcmlhbHMuY29pbCwgbWFrZVRpbGUoNSwgMTI4LCAxMjgsIChjdHgsIHIsIFMsIHdyYXBwZWQpID0+IHtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMpO1xuICAgICAgICBjb25zdCByaCA9IFMgLyBQLmdyb292ZXM7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgUC5ncm9vdmVzOyBqKyspIHtcbiAgICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGogKiByaCwgMCwgKGogKyAxKSAqIHJoKTtcbiAgICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCBncmV5KFAuZ3Jvb3ZlKSk7IGcuYWRkQ29sb3JTdG9wKDAuMjUsIGdyZXkoMS4wKSk7IGcuYWRkQ29sb3JTdG9wKDAuOCwgZ3JleSgwLjk0KSk7IGcuYWRkQ29sb3JTdG9wKDEsIGdyZXkoUC5ncm9vdmUpKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KDAsIGogKiByaCwgUywgcmggKyAxKTtcbiAgICAgICAgfVxuICAgICAgICBncmFpbihjdHgsIHIsIFMsIHdyYXBwZWQsIFswLjUsIDAuNDUsIDAuNDJdLCA4MDAsIDAuMTApO1xuICAgICAgfSksIFAuYnVtcCk7XG4gICAgfVxuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlQ2hpbmVzZVNocmluZU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLEtBQUs7QUFBQSxJQUNMLFVBQVU7QUFBQSxNQUNSLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFlBQVk7QUFBQSxJQUNkO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxXQUFXO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLE1BQ1AsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLFFBQ1Q7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsVUFDTjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFVBQ1A7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsUUFDVCxVQUFVO0FBQUEsUUFDVixXQUFXO0FBQUEsUUFDWCxXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFVBQ047QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFFBQVE7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLFFBQVE7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
