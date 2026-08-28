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

// scratch/low-rise-condominium/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createLowRiseCondominiumModel: () => createLowRiseCondominiumModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "low-rise-condominium",
  "name": "Low-Rise Condominium",
  "exportName": "LowRiseCondominium",
  "envelope": "Envelope 21.80 x 21.00 x 16.55 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "white",
      "color": 15527148,
      "roughness": 0.88,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "fin",
      "color": 4479580,
      "roughness": 0.62,
      "metalness": 0.2
    },
    {
      "id": "glass",
      "color": 5008232,
      "roughness": 0.12,
      "metalness": 0,
      "opacity": 0.92,
      "envMapIntensity": 1
    },
    {
      "id": "balglass",
      "color": 13030608,
      "roughness": 0.25,
      "metalness": 0,
      "opacity": 0.62
    },
    {
      "id": "alu",
      "color": 10133665,
      "roughness": 0.45,
      "metalness": 0.3
    },
    {
      "id": "timber",
      "color": 11770751,
      "roughness": 0.8,
      "metalness": 0
    },
    {
      "id": "steel",
      "color": 9407104,
      "roughness": 0.38,
      "metalness": 0.35
    },
    {
      "id": "deck",
      "color": 11906984,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "plinth",
      "color": 13618629,
      "roughness": 0.9,
      "metalness": 0
    },
    {
      "id": "plant",
      "color": 16777215,
      "roughness": 0.85,
      "metalness": 0
    },
    {
      "id": "sign",
      "color": 16777215,
      "roughness": 0.8,
      "metalness": 0
    }
  ],
  "geometry": {
    "hx": 10.25,
    "hz": 7,
    "t": 0.3,
    "groundTop": 3.05,
    "roofY": 17.75,
    "band": 0.45,
    "holeH": 2.4,
    "recess": 1.5,
    "levels": [
      3.5,
      6.35,
      9.2,
      12.05,
      14.9
    ],
    "bays": [
      [
        -9.8,
        -7.3
      ],
      [
        -7,
        -4.5
      ],
      [
        -2.65,
        -0.15
      ],
      [
        0.15,
        2.65
      ],
      [
        4.5,
        7
      ],
      [
        7.3,
        9.8
      ]
    ],
    "balcony": [
      false,
      true,
      true,
      false,
      true,
      false
    ],
    "fins": {
      "narrow": [
        [
          -7.3,
          -7
        ],
        [
          -0.15,
          0.15
        ],
        [
          7,
          7.3
        ]
      ],
      "corner": [
        [
          -10.2,
          -9.75
        ],
        [
          9.75,
          10.2
        ]
      ],
      "narrowD": 0.3,
      "cornerD": 0.5,
      "y1": 17.4
    },
    "louvre": {
      "front": [
        [
          -4.5,
          -2.65
        ],
        [
          2.65,
          4.5
        ]
      ],
      "d": 0.6,
      "slatW": 0.06,
      "slatD": 0.12,
      "pitch": 0.11,
      "side": [
        [
          -3,
          -1.2
        ],
        [
          0.2,
          2
        ]
      ],
      "sideD": 0.55,
      "y0": 2.9
    },
    "sideGap": {
      "z0": -1.2,
      "z1": 0.2,
      "ledgeD": 0.3,
      "ledgeH": 0.12
    },
    "sideWin": {
      "z0": 2,
      "z1": 2.45,
      "y0": 0.7,
      "y1": 2.3
    },
    "coping": {
      "y0": 17.4,
      "y1": 18.5,
      "out": 0.35
    },
    "deck": {
      "y": 17.85
    },
    "screen": {
      "x0": -8.7,
      "x1": 8.7,
      "z0": -6.5,
      "z1": 2.5,
      "y1": 21,
      "battenW": 0.075,
      "battenD": 0.05,
      "pitch": 0.12,
      "rails": [
        17.95,
        19.45,
        20.92
      ],
      "postPitch": 2.9,
      "partitions": [
        -2.2,
        3.3
      ]
    },
    "roofbox": {
      "x0": -5.9,
      "x1": -2.35,
      "z0": -0.1,
      "z1": 2.3,
      "y1": 20.7
    },
    "portal": {
      "x0": -2.5,
      "x1": 2.5,
      "surround": 0.4,
      "recess": 1,
      "doorZ": 6.05
    },
    "groundGlazing": [
      [
        -9.8,
        -7.3
      ],
      [
        4.5,
        9.8
      ]
    ],
    "groundWin": {
      "y0": 0.45,
      "y1": 2.75
    },
    "canopy": {
      "y0": 2.4,
      "y1": 2.6,
      "out": 2.5,
      "x0": -2.8,
      "x1": 2.8,
      "postX": 2.35,
      "postS": 0.15
    },
    "step": {
      "x0": -3,
      "x1": 3,
      "z1": 9.6,
      "h": 0.15
    },
    "planter": {
      "spans": [
        [
          -10.25,
          -3
        ],
        [
          3,
          10.25
        ]
      ],
      "d": 1.2,
      "h": 0.5
    },
    "sideGround": {
      "z0": 0.6,
      "z1": 5.2,
      "y0": 0.6,
      "y1": 2.7
    },
    "sign": {
      "x0": -6.6,
      "x1": -4.9,
      "y0": 1.65,
      "y1": 2.25,
      "line1": "BAAN JAI",
      "line2": "CONDO",
      "ink": "#3a4440",
      "ground": "#e6e6e4"
    },
    "bushes": [
      [
        -9.75,
        7.48,
        0.58,
        0.3,
        0.52,
        0
      ],
      [
        -9.05,
        7.6,
        0.58,
        0.32999999999999996,
        0.52,
        1
      ],
      [
        -8.35,
        7.72,
        0.58,
        0.36,
        0.52,
        2
      ],
      [
        -7.65,
        7.48,
        0.58,
        0.3,
        0.52,
        3
      ],
      [
        -6.95,
        7.6,
        0.58,
        0.32999999999999996,
        0.52,
        0
      ],
      [
        -6.25,
        7.72,
        0.58,
        0.36,
        0.52,
        1
      ],
      [
        -5.55,
        7.48,
        0.58,
        0.3,
        0.52,
        2
      ],
      [
        -4.85,
        7.6,
        0.58,
        0.32999999999999996,
        0.52,
        3
      ],
      [
        -4.15,
        7.72,
        0.58,
        0.36,
        0.52,
        0
      ],
      [
        -3.45,
        7.48,
        0.58,
        0.3,
        0.52,
        1
      ],
      [
        3.45,
        7.48,
        0.58,
        0.32999999999999996,
        0.52,
        2
      ],
      [
        4.15,
        7.72,
        0.58,
        0.36,
        0.52,
        3
      ],
      [
        4.85,
        7.6,
        0.58,
        0.3,
        0.52,
        0
      ],
      [
        5.55,
        7.48,
        0.58,
        0.32999999999999996,
        0.52,
        1
      ],
      [
        6.25,
        7.72,
        0.58,
        0.36,
        0.52,
        2
      ],
      [
        6.95,
        7.6,
        0.58,
        0.3,
        0.52,
        3
      ],
      [
        7.65,
        7.48,
        0.58,
        0.32999999999999996,
        0.52,
        0
      ],
      [
        8.35,
        7.72,
        0.58,
        0.36,
        0.52,
        1
      ],
      [
        9.05,
        7.6,
        0.58,
        0.3,
        0.52,
        2
      ],
      [
        9.75,
        7.48,
        0.58,
        0.32999999999999996,
        0.52,
        3
      ]
    ],
    "bushTints": [
      6253124,
      7305808,
      8358492,
      5661240
    ],
    "palms": [
      [
        -8.2,
        7.4,
        0.3,
        0
      ],
      [
        -6,
        7.45,
        1.4,
        1
      ],
      [
        -4,
        7.35,
        2.6,
        0
      ],
      [
        4,
        7.4,
        0.9,
        1
      ],
      [
        6.2,
        7.35,
        2,
        0
      ],
      [
        8.4,
        7.45,
        3.3,
        1
      ]
    ],
    "palmTints": [
      9083486,
      8031314
    ]
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
function createLowRiseCondominiumModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Low-Rise Condominium";
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
  const F = G.levels, BX = G.bays, BAL = G.balcony;
  const innerX = G.hx - G.t;
  const zFace = G.hz, zBack = G.hz - G.recess;
  const rectShape = (x0, y0, x1, y1) => {
    const sh = new THREE.Shape();
    sh.moveTo(x0, y0);
    sh.lineTo(x1, y0);
    sh.lineTo(x1, y1);
    sh.lineTo(x0, y1);
    sh.closePath();
    return sh;
  };
  const rectHole = (sh, x0, y0, x1, y1) => {
    const p = new THREE.Path();
    p.moveTo(x0, y0);
    p.lineTo(x1, y0);
    p.lineTo(x1, y1);
    p.lineTo(x0, y1);
    p.closePath();
    sh.holes.push(p);
  };
  const planShape = (pts) => {
    const sh = new THREE.Shape();
    sh.moveTo(pts[0][0], -pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], -pts[i][1]);
    sh.closePath();
    return sh;
  };
  const tintGeo = (g, k) => {
    const n = g.getAttribute("position").count;
    const col = new Float32Array(n * 3).fill(k);
    g.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return g;
  };
  {
    const parts = [];
    const facade = (z0, z1) => {
      const sh = rectShape(-innerX, G.groundTop, innerX, G.roofY);
      for (const yb of F) for (const b of BX) rectHole(sh, b[0], yb, b[1], yb + G.holeH);
      return extrudeAlongZ(sh, z0, z1);
    };
    parts.push(facade(zBack, zFace));
    parts.push(facade(-zFace, -zBack));
    const sideWall = (x0) => {
      const sh = new THREE.Shape();
      const pts = [[-zFace, G.groundTop], [zFace, G.groundTop], [zFace, G.roofY], [-zFace, G.roofY]];
      sh.moveTo(-pts[0][0], pts[0][1]);
      for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
      sh.closePath();
      const SW = G.sideWin, SG = G.sideGap;
      for (const yb of F) {
        const p = new THREE.Path();
        p.moveTo(-SW.z0, yb + SW.y0);
        p.lineTo(-SW.z1, yb + SW.y0);
        p.lineTo(-SW.z1, yb + SW.y1);
        p.lineTo(-SW.z0, yb + SW.y1);
        p.closePath();
        sh.holes.push(p);
        const q = new THREE.Path();
        q.moveTo(-SG.z0, yb);
        q.lineTo(-SG.z1, yb);
        q.lineTo(-SG.z1, yb + G.holeH);
        q.lineTo(-SG.z0, yb + G.holeH);
        q.closePath();
        sh.holes.push(q);
      }
      const g = new THREE.ExtrudeGeometry(sh, { depth: G.t, bevelEnabled: false, curveSegments: 1 });
      g.rotateY(Math.PI / 2);
      g.translate(x0, 0, 0);
      g.computeVertexNormals();
      return g;
    };
    parts.push(sideWall(-G.hx));
    parts.push(sideWall(innerX));
    parts.push(tintGeo(boxAt(0, (G.groundTop + G.roofY) / 2, 0, innerX * 2, G.roofY - G.groundTop, zBack * 2), 0.7));
    {
      const P = G.portal, zFront = zFace - 0.4, zRear = -zFace + 0.3;
      const plan = planShape([
        [-innerX, zRear],
        [innerX, zRear],
        [innerX, zFront],
        [P.x1, zFront],
        [P.x1, zFace - P.recess],
        [P.x0, zFace - P.recess],
        [P.x0, zFront],
        [-innerX, zFront]
      ]);
      parts.push(extrudeSlab(plan, 0, G.groundTop));
      const GW = G.groundWin, GG = G.groundGlazing;
      const left = rectShape(-innerX, 0, P.x0 - P.surround, G.groundTop);
      rectHole(left, GG[0][0], GW.y0, GG[0][1], GW.y1);
      parts.push(extrudeAlongZ(left, zFront, zFace));
      const right = rectShape(P.x1 + P.surround, 0, innerX, G.groundTop);
      rectHole(right, GG[1][0], GW.y0, GG[1][1], GW.y1);
      parts.push(extrudeAlongZ(right, zFront, zFace));
      const hy = G.groundTop - P.surround;
      parts.push(boxAt(P.x0 - P.surround / 2, hy / 2, (zFront + zFace) / 2, P.surround, hy, 0.4));
      parts.push(boxAt(P.x1 + P.surround / 2, hy / 2, (zFront + zFace) / 2, P.surround, hy, 0.4));
      parts.push(boxAt(0, hy + P.surround / 2, (zFront + zFace) / 2, P.x1 - P.x0 + 2 * P.surround, P.surround, 0.4));
      const C = G.canopy;
      parts.push(boxAt((C.x0 + C.x1) / 2, (C.y0 + C.y1) / 2, zFace + C.out / 2, C.x1 - C.x0, C.y1 - C.y0, C.out));
    }
    {
      const CP = G.coping;
      const ring = rectShape(-G.hx - CP.out, -G.hz - CP.out, G.hx + CP.out, G.hz + CP.out);
      rectHole(ring, -innerX, -(G.hz - G.t), innerX, G.hz - G.t);
      parts.push(extrudeSlab(ring, CP.y0, CP.y1));
    }
    {
      const R = G.roofbox;
      parts.push(boxAt((R.x0 + R.x1) / 2, (G.deck.y + R.y1) / 2, (R.z0 + R.z1) / 2, R.x1 - R.x0, R.y1 - G.deck.y, R.z1 - R.z0));
    }
    {
      const SG = G.sideGap;
      for (const yb of F) for (const s of [-1, 1]) {
        const x0 = s * (G.hx - 0.02), x1 = s * (G.hx + SG.ledgeD);
        parts.push(boxAt((x0 + x1) / 2, yb + SG.ledgeH / 2, (SG.z0 + SG.z1) / 2, Math.abs(x1 - x0), SG.ledgeH, SG.z1 - SG.z0));
      }
    }
    add("shell", "White rendered shell", mergeGeos(parts), "white");
    colliders["shell"] = {
      shape: "box",
      localCenter: [0, 10.5, 0.925],
      halfExtents: [10.9, 10.5, 8.275],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope including the canopy and planters.'
    };
  }
  add("deck", "Roof deck", boxAt(0, (G.roofY + G.deck.y) / 2, 0, innerX * 2, G.deck.y - G.roofY, (G.hz - G.t) * 2), "deck");
  {
    const PL = G.planter, S = G.step;
    const parts = [];
    for (const [x0, x1] of PL.spans) parts.push(boxAt((x0 + x1) / 2, PL.h / 2, zFace + PL.d / 2, x1 - x0, PL.h, PL.d));
    const z0 = zFace - G.portal.recess;
    parts.push(boxAt((S.x0 + S.x1) / 2, S.h / 2, (z0 + S.z1) / 2, S.x1 - S.x0, S.h, S.z1 - z0));
    add("planters", "Planters and entrance paving", mergeGeos(parts), "plinth");
  }
  const glassM = [], aluM = [], balM = [];
  const unit = new THREE.BoxGeometry(1, 1, 1);
  const pane = (x0, x1, y0, y1, z0, z1, list) => {
    list.push(new THREE.Matrix4().compose(
      new THREE.Vector3((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2),
      new THREE.Quaternion(),
      new THREE.Vector3(Math.abs(x1 - x0), y1 - y0, Math.abs(z1 - z0))
    ));
  };
  const mullionW = 0.06, mullionD = 0.06;
  {
    const FN = G.fins, LV = G.louvre, pt = 0.05;
    const parts = [];
    const fy = (G.groundTop + FN.y1) / 2, fh = FN.y1 - G.groundTop;
    const finZ = (s, x0, x1, d) => {
      pane(x0, x1, G.groundTop, FN.y1, s * zFace, s * (zFace + d - pt), aluM);
      parts.push(boxAt((x0 + x1) / 2, fy, s * (zFace + d - pt / 2), x1 - x0 + 0.04, fh + 0.04, pt));
    };
    for (const s of [1, -1]) {
      for (const [x0, x1] of FN.narrow) finZ(s, x0, x1, FN.narrowD);
      for (const [x0, x1] of FN.corner) finZ(s, x0, x1, FN.cornerD);
      for (const [x0, x1] of LV.front) finZ(s, x0, x1, LV.d);
      const ly = (LV.y0 + FN.y1) / 2, lh = FN.y1 - LV.y0;
      for (const [z0, z1] of LV.side) {
        pane(s * G.hx, s * (G.hx + LV.sideD - pt), LV.y0, FN.y1, z0, z1, aluM);
        parts.push(boxAt(s * (G.hx + LV.sideD - pt / 2), ly, (z0 + z1) / 2, pt, lh + 0.04, z1 - z0 + 0.04));
      }
    }
    parts.push(boxAt(0, G.step.h + 0.01, zFace - 0.35, 1.2, 0.02, 0.8));
    add("fins", "Fin and louvre face plates", mergeGeos(parts), "fin");
  }
  {
    const LV = G.louvre, FN = G.fins;
    const mats = [];
    const yFront = (G.groundTop + FN.y1) / 2, hFront = FN.y1 - G.groundTop - 0.1;
    const ySide = (LV.y0 + FN.y1) / 2, hSide = FN.y1 - LV.y0 - 0.1;
    const slat = new THREE.BoxGeometry(LV.slatW, 1, LV.slatD);
    const q0 = new THREE.Quaternion(), q90 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    for (const s of [1, -1]) {
      for (const [x0, x1] of LV.front) {
        const n = Math.floor((x1 - x0 - LV.slatW) / LV.pitch);
        for (let i = 0; i <= n; i++) {
          const x = x0 + LV.slatW / 2 + 0.03 + i * LV.pitch;
          mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yFront, s * (zFace + LV.d + LV.slatD / 2)), q0, new THREE.Vector3(1, hFront, 1)));
        }
      }
      for (const [z0, z1] of LV.side) {
        const n = Math.floor((z1 - z0 - LV.slatW) / LV.pitch);
        for (let i = 0; i <= n; i++) {
          const z = z0 + LV.slatW / 2 + 0.03 + i * LV.pitch;
          mats.push(new THREE.Matrix4().compose(new THREE.Vector3(s * (G.hx + LV.sideD + LV.slatD / 2), ySide, z), q90, new THREE.Vector3(1, hSide, 1)));
        }
      }
    }
    addInst("louvre-slats", "Louvre slats", slat, "fin", mats);
  }
  for (const s of [1, -1]) {
    const face = s * zFace, sgn = s;
    for (const yb of F) for (let bi = 0; bi < BX.length; bi++) {
      const [x0, x1] = BX[bi];
      if (!BAL[bi]) {
        const zp = face - sgn * 0.15;
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zp, zp - sgn * 0.02, glassM);
        const zm0 = zp, zm1 = zp + sgn * mullionD;
        for (const f of [1 / 3, 2 / 3]) pane(x0 + (x1 - x0) * f - mullionW / 2, x0 + (x1 - x0) * f + mullionW / 2, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 1 - mullionW / 2, yb + 1 + mullionW / 2, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + 0.08, zm0, zm1, aluM);
      } else {
        const zb = face - sgn * 0.1;
        pane(x0 + 0.05, x1 - 0.05, yb + 0.02, yb + 1.05, zb, zb - sgn * 0.03, balM);
        pane(x0 + 0.03, x1 - 0.03, yb + 1.05, yb + 1.1, zb + sgn * 0.02, zb - sgn * 0.05, aluM);
        const zr = face - sgn * (G.recess - 0.05);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zr, zr + sgn * 0.02, glassM);
        const zm0 = zr + sgn * 0.02, zm1 = zm0 + sgn * mullionD;
        pane((x0 + x1) / 2 - mullionW / 2, (x0 + x1) / 2 + mullionW / 2, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x0 + 0.02 + mullionW, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x1 - 0.02 - mullionW, x1 - 0.02, yb + 0.02, yb + G.holeH - 0.02, zm0, zm1, aluM);
        pane(x0 + 0.02, x1 - 0.02, yb + 0.02, yb + 0.08, zm0, zm1, aluM);
      }
    }
  }
  {
    const SW = G.sideWin, SG = G.sideGap;
    for (const s of [-1, 1]) for (const yb of F) {
      const xw = s * (G.hx - 0.1);
      pane(xw, xw - s * 0.02, yb + SW.y0 + 0.02, yb + SW.y1 - 0.02, SW.z0 + 0.02, SW.z1 - 0.02, glassM);
      pane(xw - s * 0.02, xw - s * 0.02 - s * 0.05, yb + (SW.y0 + SW.y1) / 2 - 0.03, yb + (SW.y0 + SW.y1) / 2 + 0.03, SW.z0 + 0.02, SW.z1 - 0.02, aluM);
      const xg = s * (G.hx - 0.25);
      pane(xg, xg - s * 0.02, yb + G.sideGap.ledgeH + 0.02, yb + G.holeH - 0.02, SG.z0 + 0.02, SG.z1 - 0.02, glassM);
      pane(xg + s * 0.01, xg + s * 0.07, yb + G.sideGap.ledgeH + 0.02, yb + G.holeH - 0.02, (SG.z0 + SG.z1) / 2 - mullionW / 2, (SG.z0 + SG.z1) / 2 + mullionW / 2, aluM);
    }
  }
  {
    const GW = G.groundWin, P = G.portal, SGd = G.sideGround;
    for (const [x0, x1] of G.groundGlazing) {
      const zp = zFace - 0.12;
      pane(x0 + 0.02, x1 - 0.02, GW.y0 + 0.02, GW.y1 - 0.02, zp, zp - 0.02, glassM);
      const n = Math.round((x1 - x0) / 1.25);
      for (let i = 1; i < n; i++) pane(x0 + (x1 - x0) * i / n - mullionW / 2, x0 + (x1 - x0) * i / n + mullionW / 2, GW.y0 + 0.02, GW.y1 - 0.02, zp, zp + mullionD, aluM);
      pane(x0 + 0.02, x1 - 0.02, GW.y0 + 0.02, GW.y0 + 0.08, zp, zp + mullionD, aluM);
    }
    const hy = G.groundTop - P.surround;
    pane(P.x0 + 0.03, P.x1 - 0.03, 0.05, hy - 0.03, P.doorZ, P.doorZ + 0.02, glassM);
    for (const x of [P.x0 + 0.03, -0.9, 0, 0.9, P.x1 - 0.09]) pane(x, x + mullionW, 0.05, hy - 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(P.x0 + 0.03, P.x1 - 0.03, hy - 0.09, hy - 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(P.x0 + 0.03, P.x1 - 0.03, G.canopy.y0 - 0.03, G.canopy.y0 + 0.03, P.doorZ + 0.02, P.doorZ + 0.08, aluM);
    pane(-1, 1, 0.95, 1, P.doorZ + 0.02, P.doorZ + 0.1, aluM);
    for (const s of [-1, 1]) {
      const xw = s * (innerX + 0.01);
      pane(xw, xw + s * 0.03, SGd.y0, SGd.y1, SGd.z0, SGd.z1, glassM);
      for (const z of [SGd.z0, (SGd.z0 + SGd.z1) / 2 - mullionW / 2, SGd.z1 - mullionW]) pane(xw + s * 0.03, xw + s * 0.09, SGd.y0, SGd.y1, z, z + mullionW, aluM);
      pane(xw + s * 0.03, xw + s * 0.09, SGd.y0, SGd.y0 + mullionW, SGd.z0, SGd.z1, aluM);
      pane(xw + s * 0.03, xw + s * 0.09, SGd.y1 - mullionW, SGd.y1, SGd.z0, SGd.z1, aluM);
    }
  }
  {
    const inst = addInst("glass", "Tinted glazing", unit.clone(), "glass", glassM);
    if (typeof document !== "undefined") {
      const c = document.createElement("canvas");
      c.width = 256;
      c.height = 256;
      const ctx = c.getContext("2d");
      ctx.fillStyle = "#4c6b68";
      ctx.fillRect(0, 0, 256, 256);
      for (let x = 0; x < 256; x += 18) {
        ctx.fillStyle = x / 18 % 2 === 0 ? "rgba(176, 188, 184, 0.30)" : "rgba(140, 152, 148, 0.22)";
        ctx.fillRect(x + 2, 8, 14, 248);
      }
      const gr = ctx.createLinearGradient(0, 0, 0, 256);
      gr.addColorStop(0, "rgba(215, 226, 228, 0.42)");
      gr.addColorStop(0.3, "rgba(215, 226, 228, 0.08)");
      gr.addColorStop(1, "rgba(50, 68, 66, 0.30)");
      ctx.fillStyle = gr;
      ctx.fillRect(0, 0, 256, 256);
      ctx.fillStyle = "rgba(40, 52, 50, 0.45)";
      ctx.fillRect(0, 0, 256, 6);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      const gm = inst.material;
      gm.map = tex;
      gm.color.set(16777215);
      gm.needsUpdate = true;
    }
  }
  addInst("mullions", "Aluminium mullions, rails and jambs", unit.clone(), "alu", aluM);
  addInst("balustrades", "Frosted balustrade panes", unit.clone(), "balglass", balM);
  {
    const S = G.screen;
    const h = S.y1 - G.deck.y;
    const batten = new THREE.BoxGeometry(S.battenW, h, S.battenD);
    const mats = [];
    const q0 = new THREE.Quaternion(), q90 = new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), Math.PI / 2);
    const yc = G.deck.y + h / 2;
    const runX = (z) => {
      for (let x = S.x0 + 0.06; x <= S.x1 - 0.06; x += S.pitch) mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yc, z), q0, new THREE.Vector3(1, 1, 1)));
    };
    const runZ = (x) => {
      for (let z = S.z0 + 0.12; z <= S.z1 - 0.12; z += S.pitch) mats.push(new THREE.Matrix4().compose(new THREE.Vector3(x, yc, z), q90, new THREE.Vector3(1, 1, 1)));
    };
    runX(S.z1);
    runX(S.z0);
    runZ(S.x0);
    runZ(S.x1);
    for (const px of S.partitions) runZ(px);
    addInst("battens", "Timber screen battens", batten, "timber", mats);
    const parts = [];
    const rs = 0.05;
    for (const y of S.rails) {
      for (const z of [S.z0, S.z1]) parts.push(boxAt(0, y, z, S.x1 - S.x0 + rs, rs, S.battenD + 0.03));
      for (const x of [S.x0, S.x1, ...S.partitions]) parts.push(boxAt(x, y, (S.z0 + S.z1) / 2, S.battenD + 0.03, rs, S.z1 - S.z0 - S.battenD - 0.03));
    }
    const ps = 0.08, ph = h - 0.02;
    const posts = [];
    for (const z of [S.z0, S.z1]) for (let x = S.x0; x <= S.x1 + 0.01; x += S.postPitch) posts.push([x, z]);
    for (const x of [S.x0, S.x1, ...S.partitions]) posts.push([x, (S.z0 + S.z1) / 2]);
    for (const [x, z] of posts) parts.push(boxAt(x, G.deck.y + ph / 2, z, ps, ph, ps));
    const C = G.canopy;
    for (const x of [-C.postX, C.postX]) parts.push(boxAt(x, (G.step.h - 0.02 + C.y0) / 2, zFace + C.out - 0.25, C.postS, C.y0 - G.step.h + 0.02, C.postS));
    const ty = (C.y0 + C.y1) / 2, th = 0.08;
    parts.push(boxAt((C.x0 + C.x1) / 2, ty, zFace + C.out + 0.02, C.x1 - C.x0 + 0.08, th, 0.04));
    for (const x of [C.x0 - 0.02, C.x1 + 0.02]) parts.push(boxAt(x, ty, zFace + C.out / 2, 0.04, th, C.out));
    add("steel", "Stainless posts, rails and canopy trim", mergeGeos(parts), "steel");
  }
  {
    const bush = new THREE.IcosahedronGeometry(1, 1);
    const mats = G.bushes.map(([x, z, sx, sy, sz]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, G.planter.h + sy * 0.6, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), x * 1.7),
      new THREE.Vector3(sx, sy, sz)
    ));
    const tints = G.bushes.map((b) => G.bushTints[b[5]]);
    addInst("bushes", "Planter shrubs", bush, "plant", mats, tints);
    const blades = [];
    for (let i = 0; i < 11; i++) {
      const a = -1.15 + i * 0.23, b = new THREE.BoxGeometry(0.05, 1.25, 0.14);
      b.translate(0, 0.5, 0);
      b.rotateZ(a);
      b.rotateY(i * 0.7);
      blades.push(b);
    }
    const palm = mergeGeos(blades);
    const pm = G.palms.map(([x, z, r], i) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, G.planter.h - 0.02 + i * 6e-3, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), r),
      new THREE.Vector3(1, 1, 1)
    ));
    const pt = G.palms.map((p) => G.palmTints[p[3]]);
    addInst("palms", "Planter fan palms", palm, "plant", pm, pt);
  }
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, 0.03);
    const uv = g.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.015);
    const mesh = add("sign", "Name board", g, "sign");
    const mat = mesh.material;
    if (typeof document === "undefined") {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 360;
      const ctx = c.getContext("2d");
      ctx.fillStyle = S.ground;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.fillStyle = S.ink;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "bold 150px Arial, Helvetica, sans-serif";
      ctx.fillText(S.line1, 512, 140);
      ctx.font = "600 84px Arial, Helvetica, sans-serif";
      ctx.fillText(S.line2, 512, 268);
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
  const root = createLowRiseCondominiumModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTG93LVJpc2UgQ29uZG9taW5pdW0gLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMjEuODAgeCAyMS4wMCB4IDE2LjU1IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBNT05VTUVOVEFMIGJ1aWxkaW5ncywgYW5kIHVubGlrZSB0aGUgc2hhcmVkIHJldGFpbCBtb2R1bGUgaXRzIGZvcm0gaXNcbiAqIG5vdCBhIGJveDogdGhlIHJlY29nbmlzYWJsZSBmZWF0dXJlIGlzIGEgY3VydmVkIG9yIHRpZXJlZCBwcm9maWxlIHRoYXQgaGFzIHRvIHN1cnZpdmUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20uIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBoZXJlIGlzIHRoZXJlZm9yZSB0aGUgTEFUSEUgLS1cbiAqIGEgcHJvZmlsZSByZXZvbHZlZCBhYm91dCArWSAtLSBhbmQgdGhlIHRpZXJlZC9zdGVwcGVkIG1lcmdlLCBub3QgdGhlIHBhcmFtZXRlcmlzZWQgc2hvcGZyb250LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwibG93LXJpc2UtY29uZG9taW5pdW1cIixcbiAgICBcIm5hbWVcIjogXCJMb3ctUmlzZSBDb25kb21pbml1bVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkxvd1Jpc2VDb25kb21pbml1bVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAyMS44MCB4IDIxLjAwIHggMTYuNTUgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndoaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTU1MjcxNDgsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmaW5cIixcbiAgICAgICAgXCJjb2xvclwiOiA0NDc5NTgwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDUwMDgyMzIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjkyLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiYmFsZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMzAzMDYwOCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4yNSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuNjJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJhbHVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEzMzY2NSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwidGltYmVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE3NzA3NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0ZWVsXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTQwNzEwNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zOCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRlY2tcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTkwNjk4NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInBsaW50aFwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzNjE4NjI5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwbGFudFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic2lnblwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJoeFwiOiAxMC4yNSxcbiAgICAgIFwiaHpcIjogNyxcbiAgICAgIFwidFwiOiAwLjMsXG4gICAgICBcImdyb3VuZFRvcFwiOiAzLjA1LFxuICAgICAgXCJyb29mWVwiOiAxNy43NSxcbiAgICAgIFwiYmFuZFwiOiAwLjQ1LFxuICAgICAgXCJob2xlSFwiOiAyLjQsXG4gICAgICBcInJlY2Vzc1wiOiAxLjUsXG4gICAgICBcImxldmVsc1wiOiBbXG4gICAgICAgIDMuNSxcbiAgICAgICAgNi4zNSxcbiAgICAgICAgOS4yLFxuICAgICAgICAxMi4wNSxcbiAgICAgICAgMTQuOVxuICAgICAgXSxcbiAgICAgIFwiYmF5c1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtOS44LFxuICAgICAgICAgIC03LjNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC03LFxuICAgICAgICAgIC00LjVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjY1LFxuICAgICAgICAgIC0wLjE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjE1LFxuICAgICAgICAgIDIuNjVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQuNSxcbiAgICAgICAgICA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3LjMsXG4gICAgICAgICAgOS44XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImJhbGNvbnlcIjogW1xuICAgICAgICBmYWxzZSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHRydWUsXG4gICAgICAgIGZhbHNlXG4gICAgICBdLFxuICAgICAgXCJmaW5zXCI6IHtcbiAgICAgICAgXCJuYXJyb3dcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC03LjMsXG4gICAgICAgICAgICAtN1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMTUsXG4gICAgICAgICAgICAwLjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA3LFxuICAgICAgICAgICAgNy4zXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImNvcm5lclwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEwLjIsXG4gICAgICAgICAgICAtOS43NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgOS43NSxcbiAgICAgICAgICAgIDEwLjJcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwibmFycm93RFwiOiAwLjMsXG4gICAgICAgIFwiY29ybmVyRFwiOiAwLjUsXG4gICAgICAgIFwieTFcIjogMTcuNFxuICAgICAgfSxcbiAgICAgIFwibG91dnJlXCI6IHtcbiAgICAgICAgXCJmcm9udFwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTQuNSxcbiAgICAgICAgICAgIC0yLjY1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjY1LFxuICAgICAgICAgICAgNC41XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImRcIjogMC42LFxuICAgICAgICBcInNsYXRXXCI6IDAuMDYsXG4gICAgICAgIFwic2xhdERcIjogMC4xMixcbiAgICAgICAgXCJwaXRjaFwiOiAwLjExLFxuICAgICAgICBcInNpZGVcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLFxuICAgICAgICAgICAgLTEuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzaWRlRFwiOiAwLjU1LFxuICAgICAgICBcInkwXCI6IDIuOVxuICAgICAgfSxcbiAgICAgIFwic2lkZUdhcFwiOiB7XG4gICAgICAgIFwiejBcIjogLTEuMixcbiAgICAgICAgXCJ6MVwiOiAwLjIsXG4gICAgICAgIFwibGVkZ2VEXCI6IDAuMyxcbiAgICAgICAgXCJsZWRnZUhcIjogMC4xMlxuICAgICAgfSxcbiAgICAgIFwic2lkZVdpblwiOiB7XG4gICAgICAgIFwiejBcIjogMixcbiAgICAgICAgXCJ6MVwiOiAyLjQ1LFxuICAgICAgICBcInkwXCI6IDAuNyxcbiAgICAgICAgXCJ5MVwiOiAyLjNcbiAgICAgIH0sXG4gICAgICBcImNvcGluZ1wiOiB7XG4gICAgICAgIFwieTBcIjogMTcuNCxcbiAgICAgICAgXCJ5MVwiOiAxOC41LFxuICAgICAgICBcIm91dFwiOiAwLjM1XG4gICAgICB9LFxuICAgICAgXCJkZWNrXCI6IHtcbiAgICAgICAgXCJ5XCI6IDE3Ljg1XG4gICAgICB9LFxuICAgICAgXCJzY3JlZW5cIjoge1xuICAgICAgICBcIngwXCI6IC04LjcsXG4gICAgICAgIFwieDFcIjogOC43LFxuICAgICAgICBcInowXCI6IC02LjUsXG4gICAgICAgIFwiejFcIjogMi41LFxuICAgICAgICBcInkxXCI6IDIxLFxuICAgICAgICBcImJhdHRlbldcIjogMC4wNzUsXG4gICAgICAgIFwiYmF0dGVuRFwiOiAwLjA1LFxuICAgICAgICBcInBpdGNoXCI6IDAuMTIsXG4gICAgICAgIFwicmFpbHNcIjogW1xuICAgICAgICAgIDE3Ljk1LFxuICAgICAgICAgIDE5LjQ1LFxuICAgICAgICAgIDIwLjkyXG4gICAgICAgIF0sXG4gICAgICAgIFwicG9zdFBpdGNoXCI6IDIuOSxcbiAgICAgICAgXCJwYXJ0aXRpb25zXCI6IFtcbiAgICAgICAgICAtMi4yLFxuICAgICAgICAgIDMuM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJyb29mYm94XCI6IHtcbiAgICAgICAgXCJ4MFwiOiAtNS45LFxuICAgICAgICBcIngxXCI6IC0yLjM1LFxuICAgICAgICBcInowXCI6IC0wLjEsXG4gICAgICAgIFwiejFcIjogMi4zLFxuICAgICAgICBcInkxXCI6IDIwLjdcbiAgICAgIH0sXG4gICAgICBcInBvcnRhbFwiOiB7XG4gICAgICAgIFwieDBcIjogLTIuNSxcbiAgICAgICAgXCJ4MVwiOiAyLjUsXG4gICAgICAgIFwic3Vycm91bmRcIjogMC40LFxuICAgICAgICBcInJlY2Vzc1wiOiAxLFxuICAgICAgICBcImRvb3JaXCI6IDYuMDVcbiAgICAgIH0sXG4gICAgICBcImdyb3VuZEdsYXppbmdcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTkuOCxcbiAgICAgICAgICAtNy4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0LjUsXG4gICAgICAgICAgOS44XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImdyb3VuZFdpblwiOiB7XG4gICAgICAgIFwieTBcIjogMC40NSxcbiAgICAgICAgXCJ5MVwiOiAyLjc1XG4gICAgICB9LFxuICAgICAgXCJjYW5vcHlcIjoge1xuICAgICAgICBcInkwXCI6IDIuNCxcbiAgICAgICAgXCJ5MVwiOiAyLjYsXG4gICAgICAgIFwib3V0XCI6IDIuNSxcbiAgICAgICAgXCJ4MFwiOiAtMi44LFxuICAgICAgICBcIngxXCI6IDIuOCxcbiAgICAgICAgXCJwb3N0WFwiOiAyLjM1LFxuICAgICAgICBcInBvc3RTXCI6IDAuMTVcbiAgICAgIH0sXG4gICAgICBcInN0ZXBcIjoge1xuICAgICAgICBcIngwXCI6IC0zLFxuICAgICAgICBcIngxXCI6IDMsXG4gICAgICAgIFwiejFcIjogOS42LFxuICAgICAgICBcImhcIjogMC4xNVxuICAgICAgfSxcbiAgICAgIFwicGxhbnRlclwiOiB7XG4gICAgICAgIFwic3BhbnNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0xMC4yNSxcbiAgICAgICAgICAgIC0zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgMTAuMjVcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwiZFwiOiAxLjIsXG4gICAgICAgIFwiaFwiOiAwLjVcbiAgICAgIH0sXG4gICAgICBcInNpZGVHcm91bmRcIjoge1xuICAgICAgICBcInowXCI6IDAuNixcbiAgICAgICAgXCJ6MVwiOiA1LjIsXG4gICAgICAgIFwieTBcIjogMC42LFxuICAgICAgICBcInkxXCI6IDIuN1xuICAgICAgfSxcbiAgICAgIFwic2lnblwiOiB7XG4gICAgICAgIFwieDBcIjogLTYuNixcbiAgICAgICAgXCJ4MVwiOiAtNC45LFxuICAgICAgICBcInkwXCI6IDEuNjUsXG4gICAgICAgIFwieTFcIjogMi4yNSxcbiAgICAgICAgXCJsaW5lMVwiOiBcIkJBQU4gSkFJXCIsXG4gICAgICAgIFwibGluZTJcIjogXCJDT05ET1wiLFxuICAgICAgICBcImlua1wiOiBcIiMzYTQ0NDBcIixcbiAgICAgICAgXCJncm91bmRcIjogXCIjZTZlNmU0XCJcbiAgICAgIH0sXG4gICAgICBcImJ1c2hlc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtOS43NSxcbiAgICAgICAgICA3LjQ4LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTkuMDUsXG4gICAgICAgICAgNy42LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zMjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC04LjM1LFxuICAgICAgICAgIDcuNzIsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjM2LFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTcuNjUsXG4gICAgICAgICAgNy40OCxcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC02Ljk1LFxuICAgICAgICAgIDcuNixcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMzI5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtNi4yNSxcbiAgICAgICAgICA3LjcyLFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zNixcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC01LjU1LFxuICAgICAgICAgIDcuNDgsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtNC44NSxcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjMyOTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTQuMTUsXG4gICAgICAgICAgNy43MixcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMy40NSxcbiAgICAgICAgICA3LjQ4LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy40NSxcbiAgICAgICAgICA3LjQ4LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zMjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQuMTUsXG4gICAgICAgICAgNy43MixcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAzXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0Ljg1LFxuICAgICAgICAgIDcuNixcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDUuNTUsXG4gICAgICAgICAgNy40OCxcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuMzI5OTk5OTk5OTk5OTk5OTYsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA2LjI1LFxuICAgICAgICAgIDcuNzIsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjM2LFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNi45NSxcbiAgICAgICAgICA3LjYsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAzXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3LjY1LFxuICAgICAgICAgIDcuNDgsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjMyOTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgOC4zNSxcbiAgICAgICAgICA3LjcyLFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zNixcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDkuMDUsXG4gICAgICAgICAgNy42LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgOS43NSxcbiAgICAgICAgICA3LjQ4LFxuICAgICAgICAgIDAuNTgsXG4gICAgICAgICAgMC4zMjk5OTk5OTk5OTk5OTk5NixcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIDNcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiYnVzaFRpbnRzXCI6IFtcbiAgICAgICAgNjI1MzEyNCxcbiAgICAgICAgNzMwNTgwOCxcbiAgICAgICAgODM1ODQ5MixcbiAgICAgICAgNTY2MTI0MFxuICAgICAgXSxcbiAgICAgIFwicGFsbXNcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTguMixcbiAgICAgICAgICA3LjQsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC02LFxuICAgICAgICAgIDcuNDUsXG4gICAgICAgICAgMS40LFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC00LFxuICAgICAgICAgIDcuMzUsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgNy40LFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA2LjIsXG4gICAgICAgICAgNy4zNSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDguNCxcbiAgICAgICAgICA3LjQ1LFxuICAgICAgICAgIDMuMyxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcInBhbG1UaW50c1wiOiBbXG4gICAgICAgIDkwODM0ODYsXG4gICAgICAgIDgwMzEzMTRcbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUxvd1Jpc2VDb25kb21pbml1bU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnTG93LVJpc2UgQ29uZG9taW5pdW0nO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgY29uc3QgRiA9IEcubGV2ZWxzIGFzIG51bWJlcltdLCBCWCA9IEcuYmF5cyBhcyBudW1iZXJbXVtdLCBCQUwgPSBHLmJhbGNvbnkgYXMgYm9vbGVhbltdO1xuICBjb25zdCBpbm5lclggPSBHLmh4IC0gRy50OyAgICAgICAgICAgICAgICAgLy8gOS45NTogaW5uZXIgZmFjZSBvZiB0aGUgc2lkZSB3YWxsc1xuICBjb25zdCB6RmFjZSA9IEcuaHosIHpCYWNrID0gRy5oeiAtIEcucmVjZXNzO1xuICBjb25zdCByZWN0U2hhcGUgPSAoeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDE6IG51bWJlciwgeTE6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHNoID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgc2gubW92ZVRvKHgwLCB5MCk7IHNoLmxpbmVUbyh4MSwgeTApOyBzaC5saW5lVG8oeDEsIHkxKTsgc2gubGluZVRvKHgwLCB5MSk7IHNoLmNsb3NlUGF0aCgpO1xuICAgIHJldHVybiBzaDtcbiAgfTtcbiAgY29uc3QgcmVjdEhvbGUgPSAoc2g6IFRIUkVFLlNoYXBlLCB4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oeDAsIHkwKTsgcC5saW5lVG8oeDEsIHkwKTsgcC5saW5lVG8oeDEsIHkxKTsgcC5saW5lVG8oeDAsIHkxKTsgcC5jbG9zZVBhdGgoKTtcbiAgICBzaC5ob2xlcy5wdXNoKHApO1xuICB9O1xuICAvLyBBIHBsYW4gaW4gW3gsIHpdIHBhaXJzLCBhcyBhIFNoYXBlIHdob3NlIHNlY29uZCBheGlzIGlzIC16IHNvIHRoYXQgZXh0cnVkZVNsYWIncyByb3RhdGVYKC1QSS8yKVxuICAvLyBsYW5kcyBpdCBhdCB0aGUgaW50ZW5kZWQgd29ybGQgei4gVXNlZCBmb3IgZXZlcnkgbm9uLXN5bW1ldHJpYyBwbGFuIGhlcmUuXG4gIGNvbnN0IHBsYW5TaGFwZSA9IChwdHM6IG51bWJlcltdW10pID0+IHtcbiAgICBjb25zdCBzaCA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgIHNoLm1vdmVUbyhwdHNbMF1bMF0sIC1wdHNbMF1bMV0pO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaC5saW5lVG8ocHRzW2ldWzBdLCAtcHRzW2ldWzFdKTtcbiAgICBzaC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gc2g7XG4gIH07XG4gIGNvbnN0IHRpbnRHZW8gPSAoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGs6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKGspO1xuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gICAgcmV0dXJuIGc7XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgc2hlbGxcbiAgICogT05FIHdoaXRlIGNvbXBvbmVudDogdHdvIGZhY2FkZSBleHRydXNpb25zIHdpdGggdGhlIHRoaXJ0eSBiYXkgb3BlbmluZ3MgcGVyIGVsZXZhdGlvbiBhcyByZWFsXG4gICAqIGhvbGVzIDEuNSBtIGRlZXAsIHR3byBzaWRlIHdhbGxzIGV4dHJ1ZGVkIGluIHRoZSBZWiBwbGFuZSB3aXRoIHRoZSB3aW5kb3ctc3RyaXAgYW5kIGdhcCBob2xlcyxcbiAgICogdGhlIGJvZHkgYmV0d2VlbiwgdGhlIGdyb3VuZCBmbG9vciBhcyBhIG5vdGNoZWQgcGxhbiBleHRydXNpb24gd2l0aCBpdHMgb3duIGZyb250IHNsYWIsIHRoZVxuICAgKiBwb3J0YWwgc3Vycm91bmQsIHRoZSBjb3BpbmcgcmluZywgdGhlIHJvb2YgYm94LCB0aGUgc2lkZSBsZWRnZXMgYW5kIHRoZSBjYW5vcHkgc2xhYi4gRXZlcnlcbiAgICogam9pbnQgaXMgYW4gb3Bwb3NlZCBwYWlyLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBmYWNhZGUgPSAoejA6IG51bWJlciwgejE6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgc2ggPSByZWN0U2hhcGUoLWlubmVyWCwgRy5ncm91bmRUb3AsIGlubmVyWCwgRy5yb29mWSk7XG4gICAgICBmb3IgKGNvbnN0IHliIG9mIEYpIGZvciAoY29uc3QgYiBvZiBCWCkgcmVjdEhvbGUoc2gsIGJbMF0sIHliLCBiWzFdLCB5YiArIEcuaG9sZUgpO1xuICAgICAgcmV0dXJuIGV4dHJ1ZGVBbG9uZ1ooc2gsIHowLCB6MSk7XG4gICAgfTtcbiAgICBwYXJ0cy5wdXNoKGZhY2FkZSh6QmFjaywgekZhY2UpKTsgICAgICAgICAgICAvLyArWlxuICAgIHBhcnRzLnB1c2goZmFjYWRlKC16RmFjZSwgLXpCYWNrKSk7ICAgICAgICAgIC8vIC1aOiB0aGUgc2FtZSBncmFtbWFyLCB1bm9ic2VydmVkIChjb25maWRlbmNlIDAuNjApXG4gICAgLy8gc2lkZSB3YWxsczogc2hhcGUgeCBob2xkcyAteiwgcm90YXRlWSgrUEkvMikgbWFwcyBpdCB0byB3b3JsZCB6IHdpdGggdGhpY2tuZXNzIGFsb25nICt4XG4gICAgY29uc3Qgc2lkZVdhbGwgPSAoeDA6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICAgIGNvbnN0IHB0cyA9IFtbLXpGYWNlLCBHLmdyb3VuZFRvcF0sIFt6RmFjZSwgRy5ncm91bmRUb3BdLCBbekZhY2UsIEcucm9vZlldLCBbLXpGYWNlLCBHLnJvb2ZZXV07XG4gICAgICBzaC5tb3ZlVG8oLXB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaC5saW5lVG8oLXB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgICAgIHNoLmNsb3NlUGF0aCgpO1xuICAgICAgY29uc3QgU1cgPSBHLnNpZGVXaW4sIFNHID0gRy5zaWRlR2FwO1xuICAgICAgZm9yIChjb25zdCB5YiBvZiBGKSB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgICAgICBwLm1vdmVUbygtU1cuejAsIHliICsgU1cueTApOyBwLmxpbmVUbygtU1cuejEsIHliICsgU1cueTApOyBwLmxpbmVUbygtU1cuejEsIHliICsgU1cueTEpOyBwLmxpbmVUbygtU1cuejAsIHliICsgU1cueTEpOyBwLmNsb3NlUGF0aCgpO1xuICAgICAgICBzaC5ob2xlcy5wdXNoKHApO1xuICAgICAgICBjb25zdCBxID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICAgICAgcS5tb3ZlVG8oLVNHLnowLCB5Yik7IHEubGluZVRvKC1TRy56MSwgeWIpOyBxLmxpbmVUbygtU0cuejEsIHliICsgRy5ob2xlSCk7IHEubGluZVRvKC1TRy56MCwgeWIgKyBHLmhvbGVIKTsgcS5jbG9zZVBhdGgoKTtcbiAgICAgICAgc2guaG9sZXMucHVzaChxKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoLCB7IGRlcHRoOiBHLnQsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDEgfSk7XG4gICAgICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MCwgMCwgMCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICAgIHJldHVybiBnO1xuICAgIH07XG4gICAgcGFydHMucHVzaChzaWRlV2FsbCgtRy5oeCkpO1xuICAgIHBhcnRzLnB1c2goc2lkZVdhbGwoaW5uZXJYKSk7XG4gICAgLy8gYm9keSBiZXR3ZWVuIHRoZSBmYWNhZGVzIGFuZCBzaWRlIHdhbGxzOiBpdHMgK1ovLVogZmFjZXMgYXJlIHRoZSByZWNlc3MgYmFjayB3YWxscywgdGludGVkXG4gICAgLy8gMC43MCBsaW5lYXIgKHRoZSBwbGF0ZSdzIHJlY2VzcyBnbGF6aW5nIHN1cnJvdW5kIHJlYWRzIH4wLjc4IHNSR0Igb2YgdGhlIGxpdCByZW5kZXIpXG4gICAgcGFydHMucHVzaCh0aW50R2VvKGJveEF0KDAsIChHLmdyb3VuZFRvcCArIEcucm9vZlkpIC8gMiwgMCwgaW5uZXJYICogMiwgRy5yb29mWSAtIEcuZ3JvdW5kVG9wLCB6QmFjayAqIDIpLCAwLjcwKSk7XG4gICAgLy8gZ3JvdW5kIGZsb29yOiBub3RjaGVkIHBsYW4gKHRoZSBwb3J0YWwgcmVjZXNzKSwgaW5zZXQgMC4zMCBvbiAtWCwgK1ggYW5kIC1aLCBmbHVzaCBvbiArWlxuICAgIHtcbiAgICAgIGNvbnN0IFAgPSBHLnBvcnRhbCwgekZyb250ID0gekZhY2UgLSAwLjQsIHpSZWFyID0gLXpGYWNlICsgMC4zO1xuICAgICAgY29uc3QgcGxhbiA9IHBsYW5TaGFwZShbWy1pbm5lclgsIHpSZWFyXSwgW2lubmVyWCwgelJlYXJdLCBbaW5uZXJYLCB6RnJvbnRdLCBbUC54MSwgekZyb250XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtQLngxLCB6RmFjZSAtIFAucmVjZXNzXSwgW1AueDAsIHpGYWNlIC0gUC5yZWNlc3NdLCBbUC54MCwgekZyb250XSwgWy1pbm5lclgsIHpGcm9udF1dKTtcbiAgICAgIHBhcnRzLnB1c2goZXh0cnVkZVNsYWIocGxhbiwgMCwgRy5ncm91bmRUb3ApKTtcbiAgICAgIC8vIGZyb250IHNsYWIgbGVmdCBhbmQgcmlnaHQgb2YgdGhlIHBvcnRhbCBzdXJyb3VuZCwgd2l0aCB0aGUgZ3JvdW5kIGdsYXppbmcgYXMgaG9sZXNcbiAgICAgIGNvbnN0IEdXID0gRy5ncm91bmRXaW4sIEdHID0gRy5ncm91bmRHbGF6aW5nIGFzIG51bWJlcltdW107XG4gICAgICBjb25zdCBsZWZ0ID0gcmVjdFNoYXBlKC1pbm5lclgsIDAsIFAueDAgLSBQLnN1cnJvdW5kLCBHLmdyb3VuZFRvcCk7XG4gICAgICByZWN0SG9sZShsZWZ0LCBHR1swXVswXSwgR1cueTAsIEdHWzBdWzFdLCBHVy55MSk7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVBbG9uZ1oobGVmdCwgekZyb250LCB6RmFjZSkpO1xuICAgICAgY29uc3QgcmlnaHQgPSByZWN0U2hhcGUoUC54MSArIFAuc3Vycm91bmQsIDAsIGlubmVyWCwgRy5ncm91bmRUb3ApO1xuICAgICAgcmVjdEhvbGUocmlnaHQsIEdHWzFdWzBdLCBHVy55MCwgR0dbMV1bMV0sIEdXLnkxKTtcbiAgICAgIHBhcnRzLnB1c2goZXh0cnVkZUFsb25nWihyaWdodCwgekZyb250LCB6RmFjZSkpO1xuICAgICAgLy8gcG9ydGFsIHN1cnJvdW5kOiB0d28gcGllcnMgYW5kIGEgaGVhZCwgMC40IGRlZXAsIGZsdXNoIHdpdGggdGhlIGZyb250IHBsYW5lXG4gICAgICBjb25zdCBoeSA9IEcuZ3JvdW5kVG9wIC0gUC5zdXJyb3VuZDtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoUC54MCAtIFAuc3Vycm91bmQgLyAyLCBoeSAvIDIsICh6RnJvbnQgKyB6RmFjZSkgLyAyLCBQLnN1cnJvdW5kLCBoeSwgMC40KSk7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KFAueDEgKyBQLnN1cnJvdW5kIC8gMiwgaHkgLyAyLCAoekZyb250ICsgekZhY2UpIC8gMiwgUC5zdXJyb3VuZCwgaHksIDAuNCkpO1xuICAgICAgcGFydHMucHVzaChib3hBdCgwLCBoeSArIFAuc3Vycm91bmQgLyAyLCAoekZyb250ICsgekZhY2UpIC8gMiwgUC54MSAtIFAueDAgKyAyICogUC5zdXJyb3VuZCwgUC5zdXJyb3VuZCwgMC40KSk7XG4gICAgICAvLyBjYW5vcHkgc2xhYiB0aHJvdWdoIHRoZSBwb3J0YWwgZ2xhemluZyBsaW5lLCAyLjIgbSBvdXRcbiAgICAgIGNvbnN0IEMgPSBHLmNhbm9weTtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoKEMueDAgKyBDLngxKSAvIDIsIChDLnkwICsgQy55MSkgLyAyLCB6RmFjZSArIEMub3V0IC8gMiwgQy54MSAtIEMueDAsIEMueTEgLSBDLnkwLCBDLm91dCkpO1xuICAgIH1cbiAgICAvLyBjb3BpbmcgcmluZzogMC4zNSBwcm91ZCBhbGwgcm91bmQsIDE3LjYuLjE4LjUsIHRoZSBwYXJhcGV0IGJlaW5nIGl0cyBpbm5lciAwLjMwXG4gICAge1xuICAgICAgY29uc3QgQ1AgPSBHLmNvcGluZztcbiAgICAgIGNvbnN0IHJpbmcgPSByZWN0U2hhcGUoLUcuaHggLSBDUC5vdXQsIC1HLmh6IC0gQ1Aub3V0LCBHLmh4ICsgQ1Aub3V0LCBHLmh6ICsgQ1Aub3V0KTtcbiAgICAgIHJlY3RIb2xlKHJpbmcsIC1pbm5lclgsIC0oRy5oeiAtIEcudCksIGlubmVyWCwgRy5oeiAtIEcudCk7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHJpbmcsIENQLnkwLCBDUC55MSkpO1xuICAgIH1cbiAgICAvLyByb29mIGJveCAobGlmdCBhbmQgc3RhaXIgaGVhZCkgb24gdGhlIGRlY2sgaW5zaWRlIHRoZSBzY3JlZW5cbiAgICB7XG4gICAgICBjb25zdCBSID0gRy5yb29mYm94O1xuICAgICAgcGFydHMucHVzaChib3hBdCgoUi54MCArIFIueDEpIC8gMiwgKEcuZGVjay55ICsgUi55MSkgLyAyLCAoUi56MCArIFIuejEpIC8gMiwgUi54MSAtIFIueDAsIFIueTEgLSBHLmRlY2sueSwgUi56MSAtIFIuejApKTtcbiAgICB9XG4gICAgLy8gc2lkZSBsZWRnZXMgaW4gdGhlIGdsYXplZCBnYXAgYmV0d2VlbiB0aGUgbG91dnJlIGJveGVzLCBvbmUgcGVyIGZsb29yLCBib3RoIGZsYW5rc1xuICAgIHtcbiAgICAgIGNvbnN0IFNHID0gRy5zaWRlR2FwO1xuICAgICAgZm9yIChjb25zdCB5YiBvZiBGKSBmb3IgKGNvbnN0IHMgb2YgWy0xLCAxXSkge1xuICAgICAgICBjb25zdCB4MCA9IHMgKiAoRy5oeCAtIDAuMDIpLCB4MSA9IHMgKiAoRy5oeCArIFNHLmxlZGdlRCk7XG4gICAgICAgIHBhcnRzLnB1c2goYm94QXQoKHgwICsgeDEpIC8gMiwgeWIgKyBTRy5sZWRnZUggLyAyLCAoU0cuejAgKyBTRy56MSkgLyAyLCBNYXRoLmFicyh4MSAtIHgwKSwgU0cubGVkZ2VILCBTRy56MSAtIFNHLnowKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGFkZCgnc2hlbGwnLCAnV2hpdGUgcmVuZGVyZWQgc2hlbGwnLCBtZXJnZUdlb3MocGFydHMpLCAnd2hpdGUnKTtcbiAgICBjb2xsaWRlcnNbJ3NoZWxsJ10gPSB7XG4gICAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMTAuNSwgMC45MjVdLCBoYWxmRXh0ZW50czogWzEwLjksIDEwLjUsIDguMjc1XSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZSBpbmNsdWRpbmcgdGhlIGNhbm9weSBhbmQgcGxhbnRlcnMuJyxcbiAgICB9O1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBkZWNrLCBwbGFudGVycywgc3RlcCAqL1xuICBhZGQoJ2RlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgKEcucm9vZlkgKyBHLmRlY2sueSkgLyAyLCAwLCBpbm5lclggKiAyLCBHLmRlY2sueSAtIEcucm9vZlksIChHLmh6IC0gRy50KSAqIDIpLCAnZGVjaycpO1xuICB7XG4gICAgY29uc3QgUEwgPSBHLnBsYW50ZXIsIFMgPSBHLnN0ZXA7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFt4MCwgeDFdIG9mIFBMLnNwYW5zIGFzIG51bWJlcltdW10pIHBhcnRzLnB1c2goYm94QXQoKHgwICsgeDEpIC8gMiwgUEwuaCAvIDIsIHpGYWNlICsgUEwuZCAvIDIsIHgxIC0geDAsIFBMLmgsIFBMLmQpKTtcbiAgICBjb25zdCB6MCA9IHpGYWNlIC0gRy5wb3J0YWwucmVjZXNzO1xuICAgIHBhcnRzLnB1c2goYm94QXQoKFMueDAgKyBTLngxKSAvIDIsIFMuaCAvIDIsICh6MCArIFMuejEpIC8gMiwgUy54MSAtIFMueDAsIFMuaCwgUy56MSAtIHowKSk7XG4gICAgYWRkKCdwbGFudGVycycsICdQbGFudGVycyBhbmQgZW50cmFuY2UgcGF2aW5nJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3BsaW50aCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnbGF6aW5nOiB1bml0IGJveGVzLCBzY2FsZWQgcGVyIGluc3RhbmNlXG4gICAqIGdsYXNzOiBldmVyeSB0aW50ZWQgcGFuZSAod2luZG93IGJheXMsIGJhbGNvbnkgcmVjZXNzIGdsYXppbmcsIHNpZGUgc3RyaXBzLCBncm91bmQgZmxvb3IsIHBvcnRhbCkuXG4gICAqIGFsdTogZXZlcnkgbXVsbGlvbiwgdHJhbnNvbSwgcmFpbCBhbmQgamFtYi4gYmFsZ2xhc3M6IHRoZSB0aGlydHkgYmFsdXN0cmFkZSBwYW5lcy4gKi9cbiAgY29uc3QgZ2xhc3NNOiBUSFJFRS5NYXRyaXg0W10gPSBbXSwgYWx1TTogVEhSRUUuTWF0cml4NFtdID0gW10sIGJhbE06IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBjb25zdCB1bml0ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICBjb25zdCBwYW5lID0gKHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHowOiBudW1iZXIsIHoxOiBudW1iZXIsIGxpc3Q6IFRIUkVFLk1hdHJpeDRbXSkgPT4ge1xuICAgIGxpc3QucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UobmV3IFRIUkVFLlZlY3RvcjMoKHgwICsgeDEpIC8gMiwgKHkwICsgeTEpIC8gMiwgKHowICsgejEpIC8gMiksIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCksXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLmFicyh4MSAtIHgwKSwgeTEgLSB5MCwgTWF0aC5hYnMoejEgLSB6MCkpKSk7XG4gIH07XG4gIGNvbnN0IG11bGxpb25XID0gMC4wNiwgbXVsbGlvbkQgPSAwLjA2O1xuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGZpbnMgYW5kIGxvdXZyZSBib3hlc1xuICAgKiBUaGUgcGxhdGUncyBmaW5zIGFyZSBkYXJrIG9uIHRoZSBGQUNFIGFuZCBsaWdodCBncmV5IG9uIHRoZSBSRVRVUk5TIChjcm9wcy9maW4ucG5nOiBtZWRpYW5cbiAgICogIzQwNEM0OSB3aXRoIGEgbGl0IHNpZGUgYXQgI0E1QUFBOSksIGFuZCB0aGF0IGNvbnRyYXN0IGlzIHdoYXQgbWFrZXMgdGhlbSByZWFkIGFzIGZpbnMgcmF0aGVyXG4gICAqIHRoYW4gc3RyaXBlcy4gU28gZWFjaCBmaW4gaXMgYSBsaWdodCBhbHVtaW5pdW0gYm9keSAoYW4gaW5zdGFuY2Ugb2YgdGhlIG11bGxpb24gdW5pdCBib3gpIHdpdGggYVxuICAgKiAwLjA1IG0gZGFyayBwbGF0ZSBvbiBpdHMgZmFjZSwgMC4wMiB3aWRlciBlYWNoIHNpZGUgc28gdGhlIHR3byBuZXZlciBzaGFyZSBhIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgRk4gPSBHLmZpbnMsIExWID0gRy5sb3V2cmUsIHB0ID0gMC4wNTtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IGZ5ID0gKEcuZ3JvdW5kVG9wICsgRk4ueTEpIC8gMiwgZmggPSBGTi55MSAtIEcuZ3JvdW5kVG9wO1xuICAgIGNvbnN0IGZpblogPSAoczogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBkOiBudW1iZXIpID0+IHtcbiAgICAgIHBhbmUoeDAsIHgxLCBHLmdyb3VuZFRvcCwgRk4ueTEsIHMgKiB6RmFjZSwgcyAqICh6RmFjZSArIGQgLSBwdCksIGFsdU0pO1xuICAgICAgcGFydHMucHVzaChib3hBdCgoeDAgKyB4MSkgLyAyLCBmeSwgcyAqICh6RmFjZSArIGQgLSBwdCAvIDIpLCB4MSAtIHgwICsgMC4wNCwgZmggKyAwLjA0LCBwdCkpO1xuICAgIH07XG4gICAgZm9yIChjb25zdCBzIG9mIFsxLCAtMV0pIHtcbiAgICAgIGZvciAoY29uc3QgW3gwLCB4MV0gb2YgRk4ubmFycm93IGFzIG51bWJlcltdW10pIGZpbloocywgeDAsIHgxLCBGTi5uYXJyb3dEKTtcbiAgICAgIGZvciAoY29uc3QgW3gwLCB4MV0gb2YgRk4uY29ybmVyIGFzIG51bWJlcltdW10pIGZpbloocywgeDAsIHgxLCBGTi5jb3JuZXJEKTtcbiAgICAgIGZvciAoY29uc3QgW3gwLCB4MV0gb2YgTFYuZnJvbnQgYXMgbnVtYmVyW11bXSkgZmluWihzLCB4MCwgeDEsIExWLmQpO1xuICAgICAgLy8gc2lkZSBsb3V2cmUgYm94ZXMgb24gLVggYW5kICtYXG4gICAgICBjb25zdCBseSA9IChMVi55MCArIEZOLnkxKSAvIDIsIGxoID0gRk4ueTEgLSBMVi55MDtcbiAgICAgIGZvciAoY29uc3QgW3owLCB6MV0gb2YgTFYuc2lkZSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICAgIHBhbmUocyAqIEcuaHgsIHMgKiAoRy5oeCArIExWLnNpZGVEIC0gcHQpLCBMVi55MCwgRk4ueTEsIHowLCB6MSwgYWx1TSk7XG4gICAgICAgIHBhcnRzLnB1c2goYm94QXQocyAqIChHLmh4ICsgTFYuc2lkZUQgLSBwdCAvIDIpLCBseSwgKHowICsgejEpIC8gMiwgcHQsIGxoICsgMC4wNCwgejEgLSB6MCArIDAuMDQpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gZW50cmFuY2UgbWF0IG9uIHRoZSBzdGVwXG4gICAgcGFydHMucHVzaChib3hBdCgwLCBHLnN0ZXAuaCArIDAuMDEsIHpGYWNlIC0gMC4zNSwgMS4yLCAwLjAyLCAwLjgpKTtcbiAgICBhZGQoJ2ZpbnMnLCAnRmluIGFuZCBsb3V2cmUgZmFjZSBwbGF0ZXMnLCBtZXJnZUdlb3MocGFydHMpLCAnZmluJyk7XG4gIH1cbiAgLyogbG91dnJlIHNsYXRzOiBvbmUgZ2VvbWV0cnksIGluc3RhbmNlZCBhY3Jvc3MgdGhlIGZvdXIgZnJvbnQgYm94ZXMgYW5kIGZvdXIgc2lkZSBib3hlcyAqL1xuICB7XG4gICAgY29uc3QgTFYgPSBHLmxvdXZyZSwgRk4gPSBHLmZpbnM7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgY29uc3QgeUZyb250ID0gKEcuZ3JvdW5kVG9wICsgRk4ueTEpIC8gMiwgaEZyb250ID0gRk4ueTEgLSBHLmdyb3VuZFRvcCAtIDAuMTtcbiAgICBjb25zdCB5U2lkZSA9IChMVi55MCArIEZOLnkxKSAvIDIsIGhTaWRlID0gRk4ueTEgLSBMVi55MCAtIDAuMTtcbiAgICBjb25zdCBzbGF0ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KExWLnNsYXRXLCAxLCBMVi5zbGF0RCk7XG4gICAgY29uc3QgcTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLCBxOTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIE1hdGguUEkgLyAyKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgWzEsIC0xXSkge1xuICAgICAgZm9yIChjb25zdCBbeDAsIHgxXSBvZiBMVi5mcm9udCBhcyBudW1iZXJbXVtdKSB7XG4gICAgICAgIGNvbnN0IG4gPSBNYXRoLmZsb29yKCh4MSAtIHgwIC0gTFYuc2xhdFcpIC8gTFYucGl0Y2gpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0geDAgKyBMVi5zbGF0VyAvIDIgKyAwLjAzICsgaSAqIExWLnBpdGNoO1xuICAgICAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UobmV3IFRIUkVFLlZlY3RvcjMoeCwgeUZyb250LCBzICogKHpGYWNlICsgTFYuZCArIExWLnNsYXREIC8gMikpLCBxMCwgbmV3IFRIUkVFLlZlY3RvcjMoMSwgaEZyb250LCAxKSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IFt6MCwgejFdIG9mIExWLnNpZGUgYXMgbnVtYmVyW11bXSkge1xuICAgICAgICBjb25zdCBuID0gTWF0aC5mbG9vcigoejEgLSB6MCAtIExWLnNsYXRXKSAvIExWLnBpdGNoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeiA9IHowICsgTFYuc2xhdFcgLyAyICsgMC4wMyArIGkgKiBMVi5waXRjaDtcbiAgICAgICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKG5ldyBUSFJFRS5WZWN0b3IzKHMgKiAoRy5oeCArIExWLnNpZGVEICsgTFYuc2xhdEQgLyAyKSwgeVNpZGUsIHopLCBxOTAsIG5ldyBUSFJFRS5WZWN0b3IzKDEsIGhTaWRlLCAxKSkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGFkZEluc3QoJ2xvdXZyZS1zbGF0cycsICdMb3V2cmUgc2xhdHMnLCBzbGF0LCAnZmluJywgbWF0cyk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHMgb2YgWzEsIC0xXSkge1xuICAgIGNvbnN0IGZhY2UgPSBzICogekZhY2UsIHNnbiA9IHM7XG4gICAgZm9yIChjb25zdCB5YiBvZiBGKSBmb3IgKGxldCBiaSA9IDA7IGJpIDwgQlgubGVuZ3RoOyBiaSsrKSB7XG4gICAgICBjb25zdCBbeDAsIHgxXSA9IEJYW2JpXTtcbiAgICAgIGlmICghQkFMW2JpXSkge1xuICAgICAgICAvLyBncmlkIHdpbmRvdzogcGFuZSAwLjE1IGluc2lkZSB0aGUgZnJvbnQgcGxhbmUsIHR3byBtdWxsaW9ucyBhbmQgYSB0cmFuc29tIHByb3VkIG9mIGl0XG4gICAgICAgIGNvbnN0IHpwID0gZmFjZSAtIHNnbiAqIDAuMTU7XG4gICAgICAgIHBhbmUoeDAgKyAwLjAyLCB4MSAtIDAuMDIsIHliICsgMC4wMiwgeWIgKyBHLmhvbGVIIC0gMC4wMiwgenAsIHpwIC0gc2duICogMC4wMiwgZ2xhc3NNKTtcbiAgICAgICAgY29uc3Qgem0wID0genAsIHptMSA9IHpwICsgc2duICogbXVsbGlvbkQ7XG4gICAgICAgIGZvciAoY29uc3QgZiBvZiBbMSAvIDMsIDIgLyAzXSkgcGFuZSh4MCArICh4MSAtIHgwKSAqIGYgLSBtdWxsaW9uVyAvIDIsIHgwICsgKHgxIC0geDApICogZiArIG11bGxpb25XIC8gMiwgeWIgKyAwLjAyLCB5YiArIEcuaG9sZUggLSAwLjAyLCB6bTAsIHptMSwgYWx1TSk7XG4gICAgICAgIHBhbmUoeDAgKyAwLjAyLCB4MSAtIDAuMDIsIHliICsgMS4wIC0gbXVsbGlvblcgLyAyLCB5YiArIDEuMCArIG11bGxpb25XIC8gMiwgem0wLCB6bTEsIGFsdU0pO1xuICAgICAgICBwYW5lKHgwICsgMC4wMiwgeDEgLSAwLjAyLCB5YiArIDAuMDIsIHliICsgMC4wOCwgem0wLCB6bTEsIGFsdU0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gYmFsY29ueTogZnJvc3RlZCBiYWx1c3RyYWRlIGF0IHRoZSBmcm9udCBwbGFuZSB3aXRoIGFuIGFsdSB0b3AgcmFpbCwgc2xpZGluZyBnbGF6aW5nIGF0XG4gICAgICAgIC8vIHRoZSByZWNlc3MgYmFjayB3aXRoIGEgY2VudHJlIG11bGxpb24gYW5kIGphbWJzXG4gICAgICAgIGNvbnN0IHpiID0gZmFjZSAtIHNnbiAqIDAuMTA7XG4gICAgICAgIHBhbmUoeDAgKyAwLjA1LCB4MSAtIDAuMDUsIHliICsgMC4wMiwgeWIgKyAxLjA1LCB6YiwgemIgLSBzZ24gKiAwLjAzLCBiYWxNKTtcbiAgICAgICAgcGFuZSh4MCArIDAuMDMsIHgxIC0gMC4wMywgeWIgKyAxLjA1LCB5YiArIDEuMTAsIHpiICsgc2duICogMC4wMiwgemIgLSBzZ24gKiAwLjA1LCBhbHVNKTtcbiAgICAgICAgY29uc3QgenIgPSBmYWNlIC0gc2duICogKEcucmVjZXNzIC0gMC4wNSk7XG4gICAgICAgIHBhbmUoeDAgKyAwLjAyLCB4MSAtIDAuMDIsIHliICsgMC4wMiwgeWIgKyBHLmhvbGVIIC0gMC4wMiwgenIsIHpyICsgc2duICogMC4wMiwgZ2xhc3NNKTtcbiAgICAgICAgY29uc3Qgem0wID0genIgKyBzZ24gKiAwLjAyLCB6bTEgPSB6bTAgKyBzZ24gKiBtdWxsaW9uRDtcbiAgICAgICAgcGFuZSgoeDAgKyB4MSkgLyAyIC0gbXVsbGlvblcgLyAyLCAoeDAgKyB4MSkgLyAyICsgbXVsbGlvblcgLyAyLCB5YiArIDAuMDIsIHliICsgRy5ob2xlSCAtIDAuMDIsIHptMCwgem0xLCBhbHVNKTtcbiAgICAgICAgcGFuZSh4MCArIDAuMDIsIHgwICsgMC4wMiArIG11bGxpb25XLCB5YiArIDAuMDIsIHliICsgRy5ob2xlSCAtIDAuMDIsIHptMCwgem0xLCBhbHVNKTtcbiAgICAgICAgcGFuZSh4MSAtIDAuMDIgLSBtdWxsaW9uVywgeDEgLSAwLjAyLCB5YiArIDAuMDIsIHliICsgRy5ob2xlSCAtIDAuMDIsIHptMCwgem0xLCBhbHVNKTtcbiAgICAgICAgcGFuZSh4MCArIDAuMDIsIHgxIC0gMC4wMiwgeWIgKyAwLjAyLCB5YiArIDAuMDgsIHptMCwgem0xLCBhbHVNKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLy8gc2lkZSBzdHJpcHMgb24gLVggYW5kICtYOiB0aGUgbmFycm93IHdpbmRvdyBwZXIgZmxvb3IgYW5kIHRoZSBnbGF6ZWQgZ2FwIGJldHdlZW4gdGhlIGxvdXZyZXNcbiAge1xuICAgIGNvbnN0IFNXID0gRy5zaWRlV2luLCBTRyA9IEcuc2lkZUdhcDtcbiAgICBmb3IgKGNvbnN0IHMgb2YgWy0xLCAxXSkgZm9yIChjb25zdCB5YiBvZiBGKSB7XG4gICAgICBjb25zdCB4dyA9IHMgKiAoRy5oeCAtIDAuMTApO1xuICAgICAgcGFuZSh4dywgeHcgLSBzICogMC4wMiwgeWIgKyBTVy55MCArIDAuMDIsIHliICsgU1cueTEgLSAwLjAyLCBTVy56MCArIDAuMDIsIFNXLnoxIC0gMC4wMiwgZ2xhc3NNKTtcbiAgICAgIHBhbmUoeHcgLSBzICogMC4wMiwgeHcgLSBzICogMC4wMiAtIHMgKiAwLjA1LCB5YiArIChTVy55MCArIFNXLnkxKSAvIDIgLSAwLjAzLCB5YiArIChTVy55MCArIFNXLnkxKSAvIDIgKyAwLjAzLCBTVy56MCArIDAuMDIsIFNXLnoxIC0gMC4wMiwgYWx1TSk7XG4gICAgICBjb25zdCB4ZyA9IHMgKiAoRy5oeCAtIDAuMjUpO1xuICAgICAgcGFuZSh4ZywgeGcgLSBzICogMC4wMiwgeWIgKyBHLnNpZGVHYXAubGVkZ2VIICsgMC4wMiwgeWIgKyBHLmhvbGVIIC0gMC4wMiwgU0cuejAgKyAwLjAyLCBTRy56MSAtIDAuMDIsIGdsYXNzTSk7XG4gICAgICBwYW5lKHhnICsgcyAqIDAuMDEsIHhnICsgcyAqIDAuMDcsIHliICsgRy5zaWRlR2FwLmxlZGdlSCArIDAuMDIsIHliICsgRy5ob2xlSCAtIDAuMDIsIChTRy56MCArIFNHLnoxKSAvIDIgLSBtdWxsaW9uVyAvIDIsIChTRy56MCArIFNHLnoxKSAvIDIgKyBtdWxsaW9uVyAvIDIsIGFsdU0pO1xuICAgIH1cbiAgfVxuICAvLyBncm91bmQgZmxvb3I6IHRoZSB0d28gZ2xhemluZyBydW5zLCB0aGUgcG9ydGFsIGRvb3JzLCBhbmQgdGhlIHNpZGUgd2luZG93cyBhcyBwcm91ZCBwYW5lbHNcbiAge1xuICAgIGNvbnN0IEdXID0gRy5ncm91bmRXaW4sIFAgPSBHLnBvcnRhbCwgU0dkID0gRy5zaWRlR3JvdW5kO1xuICAgIGZvciAoY29uc3QgW3gwLCB4MV0gb2YgRy5ncm91bmRHbGF6aW5nIGFzIG51bWJlcltdW10pIHtcbiAgICAgIGNvbnN0IHpwID0gekZhY2UgLSAwLjEyO1xuICAgICAgcGFuZSh4MCArIDAuMDIsIHgxIC0gMC4wMiwgR1cueTAgKyAwLjAyLCBHVy55MSAtIDAuMDIsIHpwLCB6cCAtIDAuMDIsIGdsYXNzTSk7XG4gICAgICBjb25zdCBuID0gTWF0aC5yb3VuZCgoeDEgLSB4MCkgLyAxLjI1KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSBwYW5lKHgwICsgKHgxIC0geDApICogaSAvIG4gLSBtdWxsaW9uVyAvIDIsIHgwICsgKHgxIC0geDApICogaSAvIG4gKyBtdWxsaW9uVyAvIDIsIEdXLnkwICsgMC4wMiwgR1cueTEgLSAwLjAyLCB6cCwgenAgKyBtdWxsaW9uRCwgYWx1TSk7XG4gICAgICBwYW5lKHgwICsgMC4wMiwgeDEgLSAwLjAyLCBHVy55MCArIDAuMDIsIEdXLnkwICsgMC4wOCwgenAsIHpwICsgbXVsbGlvbkQsIGFsdU0pO1xuICAgIH1cbiAgICAvLyBwb3J0YWw6IGZ1bGwtaGVpZ2h0IGdsYXppbmcgYXQgdGhlIHJlY2VzcyBiYWNrLCBhIGNlbnRyZSBwYWlyIG9mIGRvb3IgbGVhdmVzIHVuZGVyIHRoZSBjYW5vcHkgbGluZVxuICAgIGNvbnN0IGh5ID0gRy5ncm91bmRUb3AgLSBQLnN1cnJvdW5kO1xuICAgIHBhbmUoUC54MCArIDAuMDMsIFAueDEgLSAwLjAzLCAwLjA1LCBoeSAtIDAuMDMsIFAuZG9vclosIFAuZG9vclogKyAwLjAyLCBnbGFzc00pO1xuICAgIGZvciAoY29uc3QgeCBvZiBbUC54MCArIDAuMDMsIC0wLjksIDAsIDAuOSwgUC54MSAtIDAuMDldKSBwYW5lKHgsIHggKyBtdWxsaW9uVywgMC4wNSwgaHkgLSAwLjAzLCBQLmRvb3JaICsgMC4wMiwgUC5kb29yWiArIDAuMDgsIGFsdU0pO1xuICAgIHBhbmUoUC54MCArIDAuMDMsIFAueDEgLSAwLjAzLCBoeSAtIDAuMDksIGh5IC0gMC4wMywgUC5kb29yWiArIDAuMDIsIFAuZG9vclogKyAwLjA4LCBhbHVNKTtcbiAgICBwYW5lKFAueDAgKyAwLjAzLCBQLngxIC0gMC4wMywgRy5jYW5vcHkueTAgLSAwLjAzLCBHLmNhbm9weS55MCArIDAuMDMsIFAuZG9vclogKyAwLjAyLCBQLmRvb3JaICsgMC4wOCwgYWx1TSk7XG4gICAgcGFuZSgtMS4wLCAxLjAsIDAuOTUsIDEuMCwgUC5kb29yWiArIDAuMDIsIFAuZG9vclogKyAwLjEwLCBhbHVNKTtcbiAgICAvLyBzaWRlIGdyb3VuZC1mbG9vciB3aW5kb3dzLCBwcm91ZCBvZiB0aGUgaW5zZXQgZ3JvdW5kIHdhbGwgYnkgMC4wM1xuICAgIGZvciAoY29uc3QgcyBvZiBbLTEsIDFdKSB7XG4gICAgICBjb25zdCB4dyA9IHMgKiAoaW5uZXJYICsgMC4wMSk7XG4gICAgICBwYW5lKHh3LCB4dyArIHMgKiAwLjAzLCBTR2QueTAsIFNHZC55MSwgU0dkLnowLCBTR2QuejEsIGdsYXNzTSk7XG4gICAgICBmb3IgKGNvbnN0IHogb2YgW1NHZC56MCwgKFNHZC56MCArIFNHZC56MSkgLyAyIC0gbXVsbGlvblcgLyAyLCBTR2QuejEgLSBtdWxsaW9uV10pIHBhbmUoeHcgKyBzICogMC4wMywgeHcgKyBzICogMC4wOSwgU0dkLnkwLCBTR2QueTEsIHosIHogKyBtdWxsaW9uVywgYWx1TSk7XG4gICAgICBwYW5lKHh3ICsgcyAqIDAuMDMsIHh3ICsgcyAqIDAuMDksIFNHZC55MCwgU0dkLnkwICsgbXVsbGlvblcsIFNHZC56MCwgU0dkLnoxLCBhbHVNKTtcbiAgICAgIHBhbmUoeHcgKyBzICogMC4wMywgeHcgKyBzICogMC4wOSwgU0dkLnkxIC0gbXVsbGlvblcsIFNHZC55MSwgU0dkLnowLCBTR2QuejEsIGFsdU0pO1xuICAgIH1cbiAgfVxuICB7XG4gICAgY29uc3QgaW5zdCA9IGFkZEluc3QoJ2dsYXNzJywgJ1RpbnRlZCBnbGF6aW5nJywgdW5pdC5jbG9uZSgpLCAnZ2xhc3MnLCBnbGFzc00pO1xuICAgIC8vIFRoZSBwbGF0ZSdzIHBhbmVzIGFyZSBkYXJrIHRlYWwgd2l0aCBwYWxlIGN1cnRhaW4gZm9sZHMgYW5kIGEgYnJpZ2h0IHJlZmxlY3Rpb24gYmFuZC4gT25lXG4gICAgLy8gMjU2XjIgY2FudmFzIG9uIHRoZSBzaGFyZWQgZ2xhc3MgbWF0ZXJpYWw7IG1lYW4gbHVtYSB+MTA1IGFuZCB0aGUgdGVhbCBncm91bmQgYXQgc2F0dXJhdGlvbiAwLjI5LCBzbyBubyBwYW5lIGlzIHJlYWQgYXMgYmFja2Ryb3AuXG4gICAgLy8gVW5kZXIgTm9kZSB0aGVyZSBpcyBubyBkb2N1bWVudCBhbmQgdGhlIHBhbmUgc2hpcHMgaW4gaXRzIGF1dGhvcmVkIGZsYXQgdG9uZS5cbiAgICBpZiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgYy53aWR0aCA9IDI1NjsgYy5oZWlnaHQgPSAyNTY7XG4gICAgICBjb25zdCBjdHggPSBjLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjNGM2YjY4JzsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgMjU2KTtcbiAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgMjU2OyB4ICs9IDE4KSB7IGN0eC5maWxsU3R5bGUgPSAoeCAvIDE4KSAlIDIgPT09IDAgPyAncmdiYSgxNzYsIDE4OCwgMTg0LCAwLjMwKScgOiAncmdiYSgxNDAsIDE1MiwgMTQ4LCAwLjIyKSc7IGN0eC5maWxsUmVjdCh4ICsgMiwgOCwgMTQsIDI0OCk7IH1cbiAgICAgIGNvbnN0IGdyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDI1Nik7XG4gICAgICBnci5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjE1LCAyMjYsIDIyOCwgMC40MiknKTsgZ3IuYWRkQ29sb3JTdG9wKDAuMzAsICdyZ2JhKDIxNSwgMjI2LCAyMjgsIDAuMDgpJyk7IGdyLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1MCwgNjgsIDY2LCAwLjMwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdyOyBjdHguZmlsbFJlY3QoMCwgMCwgMjU2LCAyNTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLCA1MiwgNTAsIDAuNDUpJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgNik7XG4gICAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICAgIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBjb25zdCBnbSA9IGluc3QubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgICBnbS5tYXAgPSB0ZXg7IGdtLmNvbG9yLnNldCgweGZmZmZmZik7IGdtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgYWRkSW5zdCgnbXVsbGlvbnMnLCAnQWx1bWluaXVtIG11bGxpb25zLCByYWlscyBhbmQgamFtYnMnLCB1bml0LmNsb25lKCksICdhbHUnLCBhbHVNKTtcbiAgYWRkSW5zdCgnYmFsdXN0cmFkZXMnLCAnRnJvc3RlZCBiYWx1c3RyYWRlIHBhbmVzJywgdW5pdC5jbG9uZSgpLCAnYmFsZ2xhc3MnLCBiYWxNKTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2Ygc2NyZWVuOiBiYXR0ZW5zICsgc3RlZWwgcmFpbHMgKi9cbiAge1xuICAgIGNvbnN0IFMgPSBHLnNjcmVlbjtcbiAgICBjb25zdCBoID0gUy55MSAtIEcuZGVjay55O1xuICAgIGNvbnN0IGJhdHRlbiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShTLmJhdHRlblcsIGgsIFMuYmF0dGVuRCk7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgY29uc3QgcTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLCBxOTAgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIE1hdGguUEkgLyAyKTtcbiAgICBjb25zdCB5YyA9IEcuZGVjay55ICsgaCAvIDI7XG4gICAgY29uc3QgcnVuWCA9ICh6OiBudW1iZXIpID0+IHsgZm9yIChsZXQgeCA9IFMueDAgKyAwLjA2OyB4IDw9IFMueDEgLSAwLjA2OyB4ICs9IFMucGl0Y2gpIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UobmV3IFRIUkVFLlZlY3RvcjMoeCwgeWMsIHopLCBxMCwgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTsgfTtcbiAgICBjb25zdCBydW5aID0gKHg6IG51bWJlcikgPT4geyBmb3IgKGxldCB6ID0gUy56MCArIDAuMTI7IHogPD0gUy56MSAtIDAuMTI7IHogKz0gUy5waXRjaCkgbWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyh4LCB5YywgeiksIHE5MCwgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTsgfTtcbiAgICBydW5YKFMuejEpOyBydW5YKFMuejApOyBydW5aKFMueDApOyBydW5aKFMueDEpO1xuICAgIGZvciAoY29uc3QgcHggb2YgUy5wYXJ0aXRpb25zIGFzIG51bWJlcltdKSBydW5aKHB4KTtcbiAgICBhZGRJbnN0KCdiYXR0ZW5zJywgJ1RpbWJlciBzY3JlZW4gYmF0dGVucycsIGJhdHRlbiwgJ3RpbWJlcicsIG1hdHMpO1xuICAgIC8vIHN0ZWVsOiB0aHJlZSByYWlscyBwZXIgcnVuLCBwb3N0cyBhdCB0aGUgY29ybmVycywgcGFydGl0aW9ucyBhbmQgZXZlcnkgMi45IG0sIHRoZSBjYW5vcHlcbiAgICAvLyBwb3N0cyBhbmQgaXRzIGVkZ2UgdHJpbVxuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgcnMgPSAwLjA1O1xuICAgIGZvciAoY29uc3QgeSBvZiBTLnJhaWxzIGFzIG51bWJlcltdKSB7XG4gICAgICBmb3IgKGNvbnN0IHogb2YgW1MuejAsIFMuejFdKSBwYXJ0cy5wdXNoKGJveEF0KDAsIHksIHosIFMueDEgLSBTLngwICsgcnMsIHJzLCBTLmJhdHRlbkQgKyAwLjAzKSk7XG4gICAgICBmb3IgKGNvbnN0IHggb2YgW1MueDAsIFMueDEsIC4uLihTLnBhcnRpdGlvbnMgYXMgbnVtYmVyW10pXSkgcGFydHMucHVzaChib3hBdCh4LCB5LCAoUy56MCArIFMuejEpIC8gMiwgUy5iYXR0ZW5EICsgMC4wMywgcnMsIFMuejEgLSBTLnowIC0gUy5iYXR0ZW5EIC0gMC4wMykpO1xuICAgIH1cbiAgICBjb25zdCBwcyA9IDAuMDgsIHBoID0gaCAtIDAuMDI7XG4gICAgY29uc3QgcG9zdHM6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHogb2YgW1MuejAsIFMuejFdKSBmb3IgKGxldCB4ID0gUy54MDsgeCA8PSBTLngxICsgMC4wMTsgeCArPSBTLnBvc3RQaXRjaCkgcG9zdHMucHVzaChbeCwgel0pO1xuICAgIGZvciAoY29uc3QgeCBvZiBbUy54MCwgUy54MSwgLi4uKFMucGFydGl0aW9ucyBhcyBudW1iZXJbXSldKSBwb3N0cy5wdXNoKFt4LCAoUy56MCArIFMuejEpIC8gMl0pO1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHBvc3RzKSBwYXJ0cy5wdXNoKGJveEF0KHgsIEcuZGVjay55ICsgcGggLyAyLCB6LCBwcywgcGgsIHBzKSk7XG4gICAgY29uc3QgQyA9IEcuY2Fub3B5O1xuICAgIGZvciAoY29uc3QgeCBvZiBbLUMucG9zdFgsIEMucG9zdFhdKSBwYXJ0cy5wdXNoKGJveEF0KHgsIChHLnN0ZXAuaCAtIDAuMDIgKyBDLnkwKSAvIDIsIHpGYWNlICsgQy5vdXQgLSAwLjI1LCBDLnBvc3RTLCBDLnkwIC0gRy5zdGVwLmggKyAwLjAyLCBDLnBvc3RTKSk7ICAvLyBzdW5rIDAuMDIgaW50byB0aGUgc3RlcCBzbyBubyBiYm94IGZhY2Ugc2hhcmVzIHRoZSBtYXQncyBwbGFuZVxuICAgIGNvbnN0IHR5ID0gKEMueTAgKyBDLnkxKSAvIDIsIHRoID0gMC4wODtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KChDLngwICsgQy54MSkgLyAyLCB0eSwgekZhY2UgKyBDLm91dCArIDAuMDIsIEMueDEgLSBDLngwICsgMC4wOCwgdGgsIDAuMDQpKTtcbiAgICBmb3IgKGNvbnN0IHggb2YgW0MueDAgLSAwLjAyLCBDLngxICsgMC4wMl0pIHBhcnRzLnB1c2goYm94QXQoeCwgdHksIHpGYWNlICsgQy5vdXQgLyAyLCAwLjA0LCB0aCwgQy5vdXQpKTtcbiAgICBhZGQoJ3N0ZWVsJywgJ1N0YWlubGVzcyBwb3N0cywgcmFpbHMgYW5kIGNhbm9weSB0cmltJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3N0ZWVsJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHBsYW50aW5nOiBidXNoZXMgYW5kIHBhbG1zICovXG4gIHtcbiAgICBjb25zdCBidXNoID0gbmV3IFRIUkVFLkljb3NhaGVkcm9uR2VvbWV0cnkoMSwgMSk7XG4gICAgY29uc3QgbWF0cyA9IChHLmJ1c2hlcyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCBzeCwgc3ksIHN6XSkgPT5cbiAgICAgIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyh4LCBHLnBsYW50ZXIuaCArIHN5ICogMC42LCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB4ICogMS43KSwgbmV3IFRIUkVFLlZlY3RvcjMoc3gsIHN5LCBzeikpKTtcbiAgICBjb25zdCB0aW50cyA9IChHLmJ1c2hlcyBhcyBudW1iZXJbXVtdKS5tYXAoKGIpID0+IChHLmJ1c2hUaW50cyBhcyBudW1iZXJbXSlbYls1XV0pO1xuICAgIGFkZEluc3QoJ2J1c2hlcycsICdQbGFudGVyIHNocnVicycsIGJ1c2gsICdwbGFudCcsIG1hdHMsIHRpbnRzKTtcbiAgICBjb25zdCBibGFkZXM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDExOyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSAtMS4xNSArIGkgKiAwLjIzLCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDAuMDUsIDEuMjUsIDAuMTQpO1xuICAgICAgYi50cmFuc2xhdGUoMCwgMC41LCAwKTsgYi5yb3RhdGVaKGEpOyBiLnJvdGF0ZVkoaSAqIDAuNyk7XG4gICAgICBibGFkZXMucHVzaChiKTtcbiAgICB9XG4gICAgY29uc3QgcGFsbSA9IG1lcmdlR2VvcyhibGFkZXMpO1xuICAgIGNvbnN0IHBtID0gKEcucGFsbXMgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeiwgcl0sIGkpID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyh4LCBHLnBsYW50ZXIuaCAtIDAuMDIgKyBpICogMC4wMDYsIHopLFxuICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCByKSwgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICBjb25zdCBwdCA9IChHLnBhbG1zIGFzIG51bWJlcltdW10pLm1hcCgocCkgPT4gKEcucGFsbVRpbnRzIGFzIG51bWJlcltdKVtwWzNdXSk7XG4gICAgYWRkSW5zdCgncGFsbXMnLCAnUGxhbnRlciBmYW4gcGFsbXMnLCBwYWxtLCAncGxhbnQnLCBwbSwgcHQpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbmFtZSBib2FyZCAqL1xuICB7XG4gICAgY29uc3QgUyA9IEcuc2lnbjtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KFMueDEgLSBTLngwLCBTLnkxIC0gUy55MCwgMC4wMyk7XG4gICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSBpZiAoaSA8IDE2IHx8IGkgPiAxOSkgdXYuc2V0WFkoaSwgMC4wMSwgMC4wMSk7XG4gICAgZy50cmFuc2xhdGUoKFMueDAgKyBTLngxKSAvIDIsIChTLnkwICsgUy55MSkgLyAyLCB6RmFjZSArIDAuMDE1KTtcbiAgICBjb25zdCBtZXNoID0gYWRkKCdzaWduJywgJ05hbWUgYm9hcmQnLCBnLCAnc2lnbicpO1xuICAgIGNvbnN0IG1hdCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIG1hdC5jb2xvci5zZXQoUy5ncm91bmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICBjLndpZHRoID0gMTAyNDsgYy5oZWlnaHQgPSAzNjA7XG4gICAgICBjb25zdCBjdHggPSBjLmdldENvbnRleHQoJzJkJykhO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFMuZ3JvdW5kOyBjdHguZmlsbFJlY3QoMCwgMCwgYy53aWR0aCwgYy5oZWlnaHQpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IFMuaW5rOyBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7IGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcbiAgICAgIGN0eC5mb250ID0gJ2JvbGQgMTUwcHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XG4gICAgICBjdHguZmlsbFRleHQoUy5saW5lMSwgNTEyLCAxNDApO1xuICAgICAgY3R4LmZvbnQgPSAnNjAwIDg0cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZic7XG4gICAgICBjdHguZmlsbFRleHQoUy5saW5lMiwgNTEyLCAyNjgpO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoYyk7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4OyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUxvd1Jpc2VDb25kb21pbml1bU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sS0FBSztBQUFBLElBQ0wsYUFBYTtBQUFBLElBQ2IsU0FBUztBQUFBLElBQ1QsUUFBUTtBQUFBLElBQ1IsU0FBUztBQUFBLElBQ1QsVUFBVTtBQUFBLElBQ1YsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxJQUNUO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLGNBQWM7QUFBQSxRQUNaO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLGlCQUFpQjtBQUFBLE1BQ2Y7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtB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
