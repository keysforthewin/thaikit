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

// ../repo/scratch/familymart-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createFamilyMartStoreBuildingModel: () => createFamilyMartStoreBuildingModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "familymart-store-building",
  "name": "FamilyMart Store Building",
  "exportName": "FamilyMartStoreBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 9672602,
      "roughness": 0.94,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 7238261,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 15066856,
      "roughness": 0.34,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7304049,
      "roughness": 0.14,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "alu",
      "color": 13948629,
      "roughness": 0.38,
      "metalness": 0.18
    },
    {
      "id": "galv",
      "color": 11053997,
      "roughness": 0.55,
      "metalness": 0.28
    },
    {
      "id": "decal",
      "color": 16777215,
      "roughness": 0.3,
      "metalness": 0
    },
    {
      "id": "steel",
      "color": 7633019,
      "roughness": 0.62,
      "metalness": 0.22
    }
  ],
  "geometry": {
    "shellFront": 3.1,
    "fasciaWall": {
      "cy": 4.375,
      "cz": 3.1,
      "h": 1.65,
      "d": 0.6
    },
    "fasciaWallMaterial": "wall",
    "parapetW": 7.95,
    "parapetSides": {
      "cy": 4.375,
      "h": 1.65,
      "thick": 0.24,
      "cx": 3.855
    },
    "parapetExtra": [
      [
        -3.745,
        1.71,
        3.15,
        0.45,
        3.42,
        0.3
      ],
      [
        0,
        0.06,
        -0.01,
        7.91,
        0.12,
        6.9
      ]
    ],
    "frameMaterial": "alu",
    "fascia": {
      "boards": [
        {
          "w": 7.98,
          "h": 1.38,
          "d": 0.12,
          "at": [
            0,
            4.09,
            3.44
          ],
          "face": "+Z"
        },
        {
          "w": 0.12,
          "h": 1.38,
          "d": 2.55,
          "at": [
            3.94,
            4.09,
            2.225
          ],
          "face": "+X",
          "u": [
            0.02,
            0.3
          ]
        }
      ]
    },
    "glazing": {
      "cx": 0.205,
      "cy": 1.7,
      "cz": 3.2,
      "w": 7.17,
      "h": 3.04,
      "d": 0.08
    },
    "glazingExtra": [
      [
        -0.295,
        1.34,
        3.29,
        0.99,
        2.36,
        0.06
      ],
      [
        0.745,
        1.34,
        3.29,
        0.87,
        2.36,
        0.06
      ],
      [
        3.92,
        1.7,
        2.99,
        0.08,
        3.04,
        0.86
      ]
    ],
    "frame": [
      [
        0.205,
        3.29,
        3.29,
        7.45,
        0.14,
        0.14
      ],
      [
        0.205,
        0.15,
        3.29,
        7.45,
        0.2,
        0.14
      ],
      [
        -3.34,
        1.7,
        3.29,
        0.2,
        3.04,
        0.14
      ],
      [
        3.8,
        1.7,
        3.31,
        0.28,
        3.04,
        0.24
      ],
      [
        0.19499999999999984,
        2.665,
        3.325,
        4.5,
        0.21,
        0.17
      ],
      [
        0.255,
        1.35,
        3.36,
        0.125,
        2.5,
        0.1
      ],
      [
        0.16,
        2.665,
        3.415,
        0.36,
        0.09,
        0.04
      ],
      [
        -0.295,
        2.52,
        3.325,
        0.99,
        0.06,
        0.07
      ],
      [
        0.745,
        2.52,
        3.325,
        0.87,
        0.06,
        0.07
      ],
      [
        3.94,
        3.29,
        3.02,
        0.09,
        0.14,
        0.92
      ],
      [
        3.94,
        0.15,
        3.02,
        0.09,
        0.2,
        0.92
      ],
      [
        3.94,
        1.7,
        2.6,
        0.09,
        3.04,
        0.1
      ],
      [
        3.95,
        2.815,
        -2.5,
        0.07,
        0.09,
        0.99
      ],
      [
        3.95,
        2.065,
        -2.5,
        0.07,
        0.09,
        0.99
      ],
      [
        3.95,
        2.44,
        -2.975,
        0.07,
        0.84,
        0.05
      ],
      [
        3.95,
        2.44,
        -2.025,
        0.07,
        0.84,
        0.05
      ],
      [
        3.9625,
        1.225,
        0.815,
        0.045,
        2.45,
        0.08
      ],
      [
        3.9625,
        1.225,
        -0.315,
        0.045,
        2.45,
        0.08
      ],
      [
        3.9625,
        2.415,
        0.25,
        0.045,
        0.07,
        1.21
      ]
    ],
    "mullions": {
      "w": 0.065,
      "h": 3.07,
      "cy": 1.685,
      "cz": 3.33,
      "x": [
        -2.02,
        -0.83,
        1.21,
        2.41
      ]
    },
    "sideFeature": {
      "name": "Service door, louvre and side window",
      "material": "steel",
      "boxes": [
        [
          3.96,
          1.2,
          0.25,
          0.04,
          2.4,
          1.05
        ],
        [
          3.9875,
          0.45,
          0.42,
          0.015,
          0.3,
          0.7
        ],
        [
          3.9875,
          1.15,
          0.7,
          0.015,
          0.05,
          0.16
        ],
        [
          3.965,
          2.44,
          -2.5,
          0.03,
          0.66,
          0.85
        ]
      ]
    },
    "extraFeature": {
      "name": "Rooftop plant deck",
      "material": "galv",
      "boxes": [
        [
          -0.75,
          4.03,
          -1.75,
          2.3,
          0.82,
          0.55
        ],
        [
          -0.75,
          4.465,
          -1.75,
          2.42,
          0.05,
          0.7
        ],
        [
          -1.7,
          3.79,
          -1.75,
          0.06,
          0.34,
          0.6
        ],
        [
          0.2,
          3.79,
          -1.75,
          0.06,
          0.34,
          0.6
        ],
        [
          1.2,
          4.18,
          -1.65,
          1.05,
          1.12,
          0.72
        ],
        [
          1.2,
          3.96,
          -1.275,
          0.66,
          0.56,
          0.04
        ],
        {
          "cyl": [
            1.2,
            3.96,
            -1.245,
            0.21,
            0.03,
            16,
            1.5707963267948966
          ]
        },
        [
          2.05,
          4.275,
          -2.45,
          0.46,
          1.31,
          0.52
        ],
        {
          "cyl": [
            2.05,
            3.86,
            -2.17,
            0.035,
            0.48,
            8
          ]
        },
        [
          2.9,
          4.39,
          -1.95,
          1,
          1.54,
          0.9
        ],
        [
          2.9,
          4.39,
          -1.49,
          0.84,
          1.3,
          0.04
        ],
        [
          2.9,
          5.175,
          -1.95,
          1.06,
          0.03,
          0.96
        ]
      ]
    },
    "tintFeature": {
      "name": "Glazing decal bands",
      "material": "decal",
      "tones": [
        3121482,
        3121482,
        3121482,
        3121482,
        2068676,
        2068676,
        2068676,
        2068676
      ],
      "boxes": [
        [
          -2.105,
          1.25,
          3.245,
          2.51,
          0.03,
          0.012
        ],
        [
          0.185,
          1.25,
          3.325,
          2.03,
          0.03,
          0.012
        ],
        [
          2.495,
          1.25,
          3.245,
          2.59,
          0.03,
          0.012
        ],
        [
          3.965,
          1.25,
          2.99,
          0.012,
          0.03,
          0.82
        ],
        [
          -2.105,
          1.165,
          3.245,
          2.51,
          0.03,
          0.012
        ],
        [
          0.185,
          1.165,
          3.325,
          2.03,
          0.03,
          0.012
        ],
        [
          2.495,
          1.165,
          3.245,
          2.59,
          0.03,
          0.012
        ],
        [
          3.965,
          1.165,
          2.99,
          0.012,
          0.03,
          0.82
        ]
      ]
    },
    "condensers": []
  },
  "graphic": {
    "baked": "data:image/webp;base64,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",
    "size": [
      4096,
      768
    ],
    "background": "#E5E6E8",
    "ops": [
      {
        "type": "rect",
        "x": 0,
        "y": 0.03,
        "w": 1,
        "h": 0.284,
        "fill": "#35A24B"
      },
      {
        "type": "rect",
        "x": 0,
        "y": 0.814,
        "w": 1,
        "h": 0.118,
        "fill": "#2191C5"
      },
      {
        "type": "rect",
        "x": 0.32,
        "y": 0.402,
        "w": 0.072,
        "h": 0.115,
        "fill": "#35A24B"
      },
      {
        "type": "rect",
        "x": 0.32,
        "y": 0.54,
        "w": 0.072,
        "h": 0.115,
        "fill": "#1A90C8"
      },
      {
        "type": "text",
        "text": "FamilyMart",
        "x0": 0.404,
        "x1": 0.664,
        "cy": 0.545,
        "size": 0.24,
        "fill": "#2191C5"
      }
    ],
    "wall": {
      "meshes": [
        "building-shell",
        "parapet"
      ],
      "tile": 2.5,
      "size": 512,
      "seed": 20260828,
      "base": 248,
      "patches": 55,
      "patchAmp": 22,
      "streaks": 260,
      "streakAmp": 52,
      "specks": 3200,
      "speckAmp": 36
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
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
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
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function cylAt(cx, cy, cz, r, h, seg = 16) {
  const g = new THREE.CylinderGeometry(r, r, h, seg);
  g.translate(cx, cy, cz);
  return g;
}
function boxes(list) {
  return mergeGeos(list.map((b) => {
    if (!Array.isArray(b)) {
      const c = b.cyl;
      const g = new THREE.CylinderGeometry(c[3], c[3], c[4], c[5] ?? 12);
      if (c[6]) g.rotateX(c[6]);
      if (c[7]) g.rotateZ(c[7]);
      g.translate(c[0], c[1], c[2]);
      return g;
    }
    if (b[6]) {
      const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
      g.rotateX(b[6]);
      g.translate(b[0], b[1], b[2]);
      return g;
    }
    return boxAt(b[0], b[1], b[2], b[3], b[4], b[5]);
  }));
}
function tonedBoxes(list, tones) {
  const parts = list.map((b) => boxes([b]));
  const geo = mergeGeos(parts.map((g) => g.clone()));
  const col = new Float32Array(geo.getAttribute("position").count * 3);
  const c = new THREE.Color();
  let v = 0;
  for (let i = 0; i < parts.length; i++) {
    const n = parts[i].getAttribute("position").count;
    c.setHex(tones[i] ?? 16777215);
    for (let k = 0; k < n; k++) {
      col[(v + k) * 3] = c.r;
      col[(v + k) * 3 + 1] = c.g;
      col[(v + k) * 3 + 2] = c.b;
    }
    v += n;
    parts[i].dispose();
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function finishVertexColors(materials, meshes, matId) {
  const m = materials[matId];
  if (!m || m.vertexColors) return;
  m.vertexColors = true;
  m.needsUpdate = true;
  for (const mesh of Object.values(meshes)) {
    if (mesh.material !== m) continue;
    const geo = mesh.geometry;
    if (geo.getAttribute("color")) continue;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false
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
function createFamilyMartStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "FamilyMart Store Building";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
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
  const G = CONFIG.geometry;
  const SF = G.shellFront ?? 2.5;
  const SB = G.shellBox ?? [0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44];
  add(
    "building-shell",
    "Building shell",
    G.shellBoxes ? boxes(G.shellBoxes) : boxAt(SB[0], SB[1], SB[2], SB[3], SB[4], SB[5]),
    "wall"
  );
  colliders["building-shell"] = {
    // Half-height follows the parapet coping, so a taller module (FamilyMart's 5.20) is not
    // declared 2.3 m tall; every 4.60 sibling still gets exactly 2.3.
    shape: "box",
    localCenter: [0, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 0],
    halfExtents: [4, ((G.fasciaWall?.cy ?? 4.075) + (G.fasciaWall?.h ?? 1.05) / 2) / 2, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  const DB = G.deckBox ?? [0, G.deckY ?? 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.4];
  const deckGeo = boxAt(DB[0], DB[1], DB[2], DB[3], DB[4], DB[5]);
  const tonedDeck = !!G.deckExtraTones;
  add(
    "roof-deck",
    "Roof deck",
    G.deckExtra ? tonedDeck ? tonedBoxes(
      [DB, ...G.deckExtra],
      [G.deckTone, ...G.deckExtraTones]
    ) : mergeGeos([deckGeo, boxes(G.deckExtra)]) : deckGeo,
    "deck"
  );
  if (tonedDeck) deckGeo.dispose();
  const PS = G.parapetSides ?? { cy: 3.75, h: 0.4, thick: 0.24 };
  const PW = G.parapetW ?? 8;
  const PCX = PS.cx ?? 3.88;
  add("parapet", "Parapet ring and fascia wall", boxes(G.parapetBoxes ? [...G.parapetBoxes, ...G.parapetExtra ?? []] : [
    [0, G.fasciaWall.cy, G.fasciaWall.cz, PW, G.fasciaWall.h, G.fasciaWall.d],
    // Side and rear upstands. `parapetSides` overrides the default 0.40 m upstand for a plate whose
    // parapet is a full-height ring rather than a low kerb; the front is always the taller face and
    // comes in through `fasciaWall`, which a plan extrusion could not express.
    [-PCX, PS.cy, (SF - 0.3 - 3.5) / 2, PS.thick, PS.h, SF + 3.2],
    [PCX, PS.cy, (SF - 0.3 - 3.5) / 2, PS.thick, PS.h, SF + 3.2],
    [0, PS.cy, -3.38, PW, PS.h, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...G.parapetExtra ?? []
  ]), G.fasciaWallMaterial);
  {
    const f = G.fascia;
    let g;
    if (f.shape === "disc") {
      const r = f.w / 2;
      const face = new THREE.CircleGeometry(r, 32);
      face.translate(0, 0, 0.061);
      const body = new THREE.CylinderGeometry(r, r, 0.12, 32);
      body.rotateX(-Math.PI / 2);
      const buv = body.getAttribute("uv");
      for (let i = 0; i < buv.count; i++) buv.setXY(i, 0.02, 0.02);
      buv.needsUpdate = true;
      g = mergeGeos([face, body]);
      g.translate(0, f.cy, f.cz);
    } else {
      const FACE_SLICE = { "+X": 0, "-X": 4, "+Y": 8, "-Y": 12, "+Z": 16, "-Z": 20 };
      const boards = f.boards ?? [{ w: f.w, h: f.h, d: 0.12, at: [0, f.cy, f.cz], face: "+Z" }];
      const parts = [];
      for (const bd of boards) {
        const b = new THREE.BoxGeometry(bd.w, bd.h, bd.d ?? 0.12);
        const uv = b.getAttribute("uv");
        const plain = bd.plain === true;
        const startAt = FACE_SLICE[bd.face ?? "+Z"];
        const u0 = bd.u ? bd.u[0] : 0, u1 = bd.u ? bd.u[1] : 1;
        const pu = bd.plainUV ? bd.plainUV[0] : 0.015, pv = bd.plainUV ? bd.plainUV[1] : 0.015;
        for (let i = 0; i < uv.count; i++) {
          const R = f.uvRect ?? [0, 0.125, 1, 1];
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, R[0] + (u0 + uv.getX(i) * (u1 - u0)) * (R[2] - R[0]), R[1] + uv.getY(i) * (R[3] - R[1]));
          else uv.setXY(i, pu, pv);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    if (f.curved) {
      const cparts = [g];
      for (const c of f.curved) {
        const R = (c.w * c.w / 4 + c.bulge * c.bulge) / (2 * c.bulge);
        const half = Math.asin(c.w / 2 / R);
        const cyl = new THREE.CylinderGeometry(R, R, c.h, c.seg ?? 12, 1, true, -half, 2 * half);
        const cuv = cyl.getAttribute("uv");
        const r = c.uvRect;
        for (let i = 0; i < cuv.count; i++) cuv.setXY(i, r[0] + cuv.getX(i) * (r[2] - r[0]), r[1] + cuv.getY(i) * (r[3] - r[1]));
        cyl.translate(c.x, c.y, c.z - R);
        cparts.push(cyl);
      }
      g = mergeGeos(cparts);
    }
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  {
    const pane = G.glazing.boxes ? boxes(G.glazing.boxes) : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.1);
    const extra = G.glazingExtra ?? [];
    add(
      "shopfront-glazing",
      "Shopfront glazing",
      extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane,
      "glass"
    );
  }
  add("shopfront-frame", "Shopfront framing and door bay", boxes(G.frame), G.frameMaterial);
  const pivotNodes = [];
  if (G.door) {
    const d = G.door;
    const hinge = new THREE.Group();
    hinge.name = "door-hinge";
    hinge.position.set(d.hinge[0], d.hinge[1], d.hinge[2]);
    hinge.userData.actionProfile = {
      animationRole: "articulated",
      pivot: {
        mode: "custom",
        localPosition: [0, 0, 0],
        axis: [0, 1, 0],
        name: "door-hinge",
        note: "Entrance door swings about the jamb stile. Closed at 0, opens outward toward +Z with negative yaw."
      }
    };
    root.add(hinge);
    pivotNodes.push(hinge);
    const w = d.w, h = d.h, y0 = d.y0, y1 = y0 + h, ym = (y0 + y1) / 2;
    const st = d.stile ?? 0.08, D = d.depth ?? 0.12;
    const sx = d.flip ? -1 : 1;
    const hx = w - (d.handle ? d.handle[0] ?? 0.16 : 0);
    const leafFrame = boxes([
      [sx * (st / 2), ym, 0, st, h, D],
      [sx * (w - st / 2), ym, 0, st, h, D],
      [sx * (w / 2), y1 - 0.04, 0, w, 0.08, D],
      [sx * (w / 2), y0 + 0.16, 0, w, 0.32, D],
      [sx * (w / 2), d.railY ?? 1.05, 0, w, 0.07, D],
      // Pull handle: a vertical bar on two stand-offs, on the swinging edge. The plate shows one
      // and it is the detail that reads a glass leaf as a door rather than as another pane.
      ...d.handle ? [
        { cyl: [sx * hx, d.handle[1] ?? 1.05, D / 2 + 0.05, 0.018, d.handle[2] ?? 0.8, 10] },
        [sx * hx, (d.handle[1] ?? 1.05) + (d.handle[2] ?? 0.8) / 2 - 0.03, D / 2 + 0.025, 0.036, 0.036, 0.1],
        [sx * hx, (d.handle[1] ?? 1.05) - (d.handle[2] ?? 0.8) / 2 + 0.03, D / 2 + 0.025, 0.036, 0.036, 0.1]
      ] : []
    ]);
    const leafPane = boxAt(sx * (w / 2), (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
    for (const [id, name, geo, mat] of [
      ["door-leaf-frame", "Entrance door leaf frame", leafFrame, G.frameMaterial],
      ["door-leaf-glass", "Entrance door leaf glass", leafPane, "glass"]
    ]) {
      const node = new THREE.Group();
      node.name = name + "__node";
      const mesh = new THREE.Mesh(geo, materials[mat]);
      mesh.name = name;
      mesh.castShadow = castShadow;
      mesh.receiveShadow = receiveShadow;
      node.add(mesh);
      hinge.add(node);
      nodes[id] = node;
      meshes[id] = mesh;
      colliders[id] = null;
    }
  }
  if (G.sideFeature) add("side-feature", G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);
  if (G.frontFeature) add("front-feature", G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);
  if (G.extraFeature) add("extra-feature", G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);
  if (G.extraFeature2) add("extra-feature-2", G.extraFeature2.name, boxes(G.extraFeature2.boxes), G.extraFeature2.material);
  if (G.tintFeature) {
    const t = G.tintFeature;
    const list = t.boxes;
    const parts = list.map((b) => boxes([b]));
    const geo = mergeGeos(parts.map((g) => g.clone()));
    const col = new Float32Array(geo.getAttribute("position").count * 3);
    const c = new THREE.Color();
    let v = 0;
    for (let i = 0; i < parts.length; i++) {
      const n = parts[i].getAttribute("position").count;
      c.setHex(t.tones[i % t.tones.length]);
      for (let k = 0; k < n; k++) {
        col[(v + k) * 3] = c.r;
        col[(v + k) * 3 + 1] = c.g;
        col[(v + k) * 3 + 2] = c.b;
      }
      v += n;
      parts[i].dispose();
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    const mesh = add("tint-feature", t.name, geo, t.material);
    mesh.material.vertexColors = true;
    mesh.material.needsUpdate = true;
  }
  {
    const m = G.mullions;
    const mats = m.x.map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst("shopfront-mullions", "Shopfront mullions", new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }
  if ((G.condensers ?? []).length) {
    let unit;
    if (G.condenserParts && G.condenserTones) {
      unit = tonedBoxes(G.condenserParts, G.condenserTones);
    } else if (G.condenserParts) {
      unit = boxes(G.condenserParts);
    } else {
      const parts = [
        boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
        cylAt(0, 0.87, 0, 0.3, 0.1, 16)
      ];
      for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
      unit = mergeGeos(parts);
    }
    const mats = G.condensers.map(([x, z, yaw, s]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, G.condenserY ?? 3.6, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(s ?? 1, s ?? 1, s ?? 1)
    ));
    addInst("plant-condensers", "Rooftop condenser units", unit, G.plantMaterial ?? "galv", mats);
  }
  if (G.extraSystem) {
    const e = G.extraSystem;
    let unit;
    if (e.kind === "plate") {
      unit = mergeGeos([boxAt(0, 0, 0, e.w, e.h, e.d), cylAt(0, -e.h / 2 - 0.015, 0, 0.085, 0.03, 12)]);
    } else {
      unit = boxAt(0, 0, 0, e.w, e.h, e.d);
    }
    const mats = e.at.map(([x, y, z]) => new THREE.Matrix4().setPosition(x, y, z));
    addInst(e.id, e.name, unit, e.material, mats, e.tones ? mats.map((_, i) => e.tones[i % e.tones.length]) : void 0);
  }
  if (tonedDeck) finishVertexColors(materials, meshes, "deck");
  if (G.condenserTones && (G.condensers ?? []).length) finishVertexColors(materials, meshes, G.plantMaterial ?? "galv");
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups, pivotNodes };
  return root;
}
function applyFasciaGraphic(root) {
  const rt = root.userData.sculptRuntime;
  const mesh = rt?.meshes?.["fascia-panel"];
  if (!mesh || typeof document === "undefined") return;
  const material = mesh.material;
  if (!material) return;
  const g = CONFIG.graphic;
  const srgb = THREE.SRGBColorSpace;
  if (g.baked) {
    const baked = new THREE.TextureLoader().load(g.baked, void 0, void 0, () => {
      const c = drawFasciaCanvas(g);
      if (!c) return;
      const t = new THREE.CanvasTexture(c);
      if (srgb) t.colorSpace = srgb;
      t.anisotropy = 4;
      material.map = t;
      material.needsUpdate = true;
    });
    if (srgb) baked.colorSpace = srgb;
    baked.anisotropy = 4;
    baked.needsUpdate = true;
    material.map = baked;
    material.color.setHex(16777215);
    material.needsUpdate = true;
    return;
  }
  const canvas = drawFasciaCanvas(g);
  if (!canvas) return;
  const tex = new THREE.CanvasTexture(canvas);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  material.needsUpdate = true;
}
function drawFasciaCanvas(g) {
  const square = !!g.square;
  const W = square ? 512 : g.size?.[0] ?? 2048, H = square ? 512 : g.size?.[1] ?? 320;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * (g.bandFrac ?? 0.875);
  const fit = (text, font, x0, x1, cy, fill, strokeCol, strokeW) => {
    ctx.font = font;
    ctx.textBaseline = "middle";
    ctx.textAlign = "left";
    const w = ctx.measureText(text).width;
    const s = (x1 - x0) / w;
    ctx.save();
    ctx.translate(x0, 0);
    ctx.scale(s, 1);
    if (strokeCol) {
      ctx.lineJoin = "round";
      ctx.strokeStyle = strokeCol;
      ctx.lineWidth = (strokeW ?? 6) / s;
      ctx.strokeText(text, 0, cy);
    }
    ctx.fillStyle = fill;
    ctx.fillText(text, 0, cy);
    ctx.restore();
  };
  for (const op of g.ops) {
    if (op.type === "rect") {
      ctx.fillStyle = op.fill;
      const x = op.x * W, y = op.y * band, w = op.w * W, h = op.h * band, r = (op.r ?? 0) * band;
      ctx.beginPath();
      if (r > 0) {
        ctx.moveTo(x + r, y);
        ctx.lineTo(x + w - r, y);
        ctx.quadraticCurveTo(x + w, y, x + w, y + r);
        ctx.lineTo(x + w, y + h - r);
        ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
        ctx.lineTo(x + r, y + h);
        ctx.quadraticCurveTo(x, y + h, x, y + h - r);
        ctx.lineTo(x, y + r);
        ctx.quadraticCurveTo(x, y, x + r, y);
      } else ctx.rect(x, y, w, h);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === "circle") {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      ctx.arc(op.cx * W, op.cy * band, op.r * band, 0, Math.PI * 2);
      ctx.fill();
    } else if (op.type === "poly") {
      ctx.fillStyle = op.fill;
      ctx.beginPath();
      const pts = op.points;
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      ctx.fill();
    } else if (op.type === "text") {
      fit(
        op.text,
        `${op.style ?? "bold"} ${Math.round(op.size * band)}px ${op.family ?? "Arial, Helvetica, sans-serif"}`,
        op.x0 * W,
        op.x1 * W,
        op.cy * band,
        op.fill,
        op.stroke,
        op.strokeW ? op.strokeW * band : void 0
      );
    }
  }
  return canvas;
}
function applyGlassGraphic(root) {
  const g = CONFIG.graphic?.glass;
  if (!g || typeof document === "undefined") return;
  const rt = root.userData.sculptRuntime;
  const [x0, y0, x1, y1] = g.rect;
  const targets = [{ id: "shopfront-glazing", off: [0, 0, 0] }, ...g.also ?? []];
  let material = null;
  for (const t of targets) {
    const mesh = rt?.meshes?.[t.id];
    if (!mesh) continue;
    const m = mesh.material;
    if (!m) continue;
    material = material ?? m;
    const geo = mesh.geometry;
    const pos = geo.getAttribute("position");
    const off = t.off ?? [0, 0, 0];
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      uv[i * 2] = (pos.getX(i) + off[0] - x0) / (x1 - x0);
      uv[i * 2 + 1] = (pos.getY(i) + off[1] - y0) / (y1 - y0);
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  }
  if (!material) return;
  const srgb = THREE.SRGBColorSpace;
  const tex = new THREE.TextureLoader().load(g.baked);
  if (srgb) tex.colorSpace = srgb;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  if (g.roughness !== void 0) material.roughness = g.roughness;
  material.needsUpdate = true;
}
function applyWallGraphic(root) {
  const gr = CONFIG.graphic;
  if (!gr || typeof document === "undefined") return;
  const entries = [gr.wall, ...gr.walls ?? []].filter(Boolean);
  const rt = root.userData.sculptRuntime;
  if (!rt) return;
  for (const g of entries) applyOneWallGraphic(rt, g);
}
function applyOneWallGraphic(rt, g) {
  const tile = g.tile ?? 2.5;
  const N = g.size ?? 512;
  const clean = g.clean;
  const pin = 6 / N;
  let tex = null;
  for (const id of g.meshes) {
    const mesh = rt.meshes?.[id];
    if (!mesh) continue;
    const geo = mesh.geometry;
    const pos = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
    if (!pos || !nrm) continue;
    const uv = new Float32Array(pos.count * 2);
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      if (clean && x >= clean[0] && x <= clean[2] && y >= clean[1] && y <= clean[3]) {
        uv[i * 2] = pin;
        uv[i * 2 + 1] = pin;
        continue;
      }
      const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
      let u, v;
      if (ax >= ay && ax >= az) {
        u = z;
        v = y;
      } else if (az >= ay) {
        u = x;
        v = y;
      } else {
        u = x;
        v = z;
      }
      uv[i * 2] = u / tile;
      uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    if (!tex) {
      const srgb = THREE.SRGBColorSpace;
      if (g.image) {
        tex = new THREE.TextureLoader().load(g.image);
      } else {
        const canvas = drawWallCanvas(g);
        if (!canvas) return;
        tex = new THREE.CanvasTexture(canvas);
      }
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
      if (srgb) tex.colorSpace = srgb;
      tex.anisotropy = 4;
      tex.needsUpdate = true;
    }
    const material = mesh.material;
    if (material && material.map !== tex) {
      material.map = tex;
      material.needsUpdate = true;
    }
  }
}
function drawWallCanvas(g) {
  const N = g.size ?? 512;
  const canvas = document.createElement("canvas");
  canvas.width = N;
  canvas.height = N;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  let seed = g.seed ?? 20260828;
  const rnd = () => {
    seed = seed * 1664525 + 1013904223 >>> 0;
    return seed / 4294967296;
  };
  const base = g.base ?? 246;
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  ctx.fillRect(0, 0, N, N);
  for (let i = 0; i < (g.patches ?? 90); i++) {
    const x = rnd() * N, y = rnd() * N, r = (0.05 + rnd() * 0.18) * N;
    const v = base - rnd() * (g.patchAmp ?? 26);
    const grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    grad.addColorStop(0, `rgba(${v | 0},${v | 0},${v | 0},0.55)`);
    grad.addColorStop(1, `rgba(${v | 0},${v | 0},${v | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) {
      ctx.save();
      ctx.translate(dx, 0);
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }
  for (let i = 0; i < (g.streaks ?? 130); i++) {
    const x = rnd() * N, w = (2e-3 + rnd() * 0.01) * N;
    const y0 = rnd() * N * 0.5, len = (0.25 + rnd() * 0.75) * N;
    const dark = base - (6 + rnd() * (g.streakAmp ?? 22));
    const grad = ctx.createLinearGradient(0, y0, 0, y0 + len);
    grad.addColorStop(0, `rgba(${dark | 0},${dark | 0},${dark | 0},0.42)`);
    grad.addColorStop(0.35, `rgba(${dark | 0},${dark | 0},${dark | 0},0.26)`);
    grad.addColorStop(1, `rgba(${dark | 0},${dark | 0},${dark | 0},0)`);
    ctx.fillStyle = grad;
    for (const dx of [-N, 0, N]) ctx.fillRect(x + dx - w / 2, y0, w, len);
  }
  if (g.seams) {
    const pitch = (g.seamPitch ?? 0.375) * N;
    const amp = g.seamAmp ?? 9;
    for (let y = pitch * 0.5; y < N + pitch; y += pitch) {
      const yy = y % N;
      const d = base - amp, l = Math.min(255, base + amp * 0.35);
      ctx.fillStyle = `rgba(${d | 0},${d | 0},${d | 0},0.5)`;
      ctx.fillRect(0, yy, N, 1.6);
      ctx.fillStyle = `rgba(${l | 0},${l | 0},${l | 0},0.35)`;
      ctx.fillRect(0, yy + 1.6, N, 1.2);
    }
  }
  for (let i = 0; i < (g.specks ?? 2600); i++) {
    const x = rnd() * N, y = rnd() * N, r = 0.5 + rnd() * 1.6;
    const v = base - rnd() * (g.speckAmp ?? 30);
    ctx.fillStyle = `rgba(${v | 0},${v | 0},${v | 0},0.30)`;
    ctx.beginPath();
    ctx.arc(x, y, r, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.fillStyle = `rgb(${base},${base},${base})`;
  for (const [x, y] of [[0, 0], [N - 12, 0], [0, N - 12], [N - 12, N - 12]]) ctx.fillRect(x, y, 12, 12);
  return canvas;
}
function createObjectModel(spec, options = {}) {
  const root = createFamilyMartStoreBuildingModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  applyFasciaGraphic(root);
  applyGlassGraphic(root);
  applyWallGraphic(root);
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const pivots = [...rt.pivotNodes ?? []];
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRmFtaWx5TWFydCBTdG9yZSBCdWlsZGluZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyBhbmRcbiAqIGluc3RhbmNpbmcgYXJlIGhhbmQtcm9sbGVkIGJlbG93IC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDQuNjAgeCA3LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHNob3Bmcm9udCBmYWNpbmcgK1ouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogT25lIG9mIHRoYWlraXQncyBzaGFyZWQgcmV0YWlsLW1vZHVsZSBidWlsZGluZ3MuIFRoZSBzaGVsbCBmcm9udCBmYWNlIHNpdHMgYXQgej0rMi41MCByYXRoZXJcbiAqIHRoYW4gdGhlIGVudmVsb3BlIGVkZ2Ugc28gdGhlIGVudHJhbmNlIGNhbm9weSBjYW4gY2FudGlsZXZlciBmb3J3YXJkIGFuZCBzdGlsbCBsYW5kIGV4YWN0bHkgb25cbiAqIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gRXZlcnkgc3VyZmFjZSBwYWlyIG9uIHRoZSBmYWNhZGUgaXMgZGVsaWJlcmF0ZWx5IG9mZnNldCBpbiBkZXB0aDpcbiAqIHR3byBzdXJmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IHRlYXIgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlXG4gKiBjYW1lcmEgbW92ZXMsIGFuZCBhdXRob3JpbmcgY29tcG9uZW50cyBmbHVzaCBhZ2FpbnN0IG9uZSBhbm90aGVyIHByb2R1Y2VzIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImZhbWlseW1hcnQtc3RvcmUtYnVpbGRpbmdcIixcbiAgICBcIm5hbWVcIjogXCJGYW1pbHlNYXJ0IFN0b3JlIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiRmFtaWx5TWFydFN0b3JlQnVpbGRpbmdcIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ3YWxsXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTY3MjYwMixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRlY2tcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MjM4MjYxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZmFzY2lhXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTUwNjY4NTYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMzQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDAuNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzMwNDA0OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTQsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImFsdVwiLFxuICAgICAgICBcImNvbG9yXCI6IDEzOTQ4NjI5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjE4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMDUzOTk3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjI4XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVjYWxcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJjb2xvclwiOiA3NjMzMDE5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjIyXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjEsXG4gICAgICBcImZhc2NpYVdhbGxcIjoge1xuICAgICAgICBcImN5XCI6IDQuMzc1LFxuICAgICAgICBcImN6XCI6IDMuMSxcbiAgICAgICAgXCJoXCI6IDEuNjUsXG4gICAgICAgIFwiZFwiOiAwLjZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwicGFyYXBldFdcIjogNy45NSxcbiAgICAgIFwicGFyYXBldFNpZGVzXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LjM3NSxcbiAgICAgICAgXCJoXCI6IDEuNjUsXG4gICAgICAgIFwidGhpY2tcIjogMC4yNCxcbiAgICAgICAgXCJjeFwiOiAzLjg1NVxuICAgICAgfSxcbiAgICAgIFwicGFyYXBldEV4dHJhXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjc0NSxcbiAgICAgICAgICAxLjcxLFxuICAgICAgICAgIDMuMTUsXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICAzLjQyLFxuICAgICAgICAgIDAuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIC0wLjAxLFxuICAgICAgICAgIDcuOTEsXG4gICAgICAgICAgMC4xMixcbiAgICAgICAgICA2LjlcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImFsdVwiLFxuICAgICAgXCJmYXNjaWFcIjoge1xuICAgICAgICBcImJvYXJkc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ3XCI6IDcuOTgsXG4gICAgICAgICAgICBcImhcIjogMS4zOCxcbiAgICAgICAgICAgIFwiZFwiOiAwLjEyLFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDQuMDksXG4gICAgICAgICAgICAgIDMuNDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZhY2VcIjogXCIrWlwiXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIndcIjogMC4xMixcbiAgICAgICAgICAgIFwiaFwiOiAxLjM4LFxuICAgICAgICAgICAgXCJkXCI6IDIuNTUsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMy45NCxcbiAgICAgICAgICAgICAgNC4wOSxcbiAgICAgICAgICAgICAgMi4yMjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImZhY2VcIjogXCIrWFwiLFxuICAgICAgICAgICAgXCJ1XCI6IFtcbiAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgMC4zXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nXCI6IHtcbiAgICAgICAgXCJjeFwiOiAwLjIwNSxcbiAgICAgICAgXCJjeVwiOiAxLjcsXG4gICAgICAgIFwiY3pcIjogMy4yLFxuICAgICAgICBcIndcIjogNy4xNyxcbiAgICAgICAgXCJoXCI6IDMuMDQsXG4gICAgICAgIFwiZFwiOiAwLjA4XG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nRXh0cmFcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTAuMjk1LFxuICAgICAgICAgIDEuMzQsXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICAwLjk5LFxuICAgICAgICAgIDIuMzYsXG4gICAgICAgICAgMC4wNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC43NDUsXG4gICAgICAgICAgMS4zNCxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDAuODcsXG4gICAgICAgICAgMi4zNixcbiAgICAgICAgICAwLjA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjkyLFxuICAgICAgICAgIDEuNyxcbiAgICAgICAgICAyLjk5LFxuICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgMy4wNCxcbiAgICAgICAgICAwLjg2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImZyYW1lXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAuMjA1LFxuICAgICAgICAgIDMuMjksXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICA3LjQ1LFxuICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC4yMDUsXG4gICAgICAgICAgMC4xNSxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDcuNDUsXG4gICAgICAgICAgMC4yLFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjM0LFxuICAgICAgICAgIDEuNyxcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDAuMixcbiAgICAgICAgICAzLjA0LFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOCxcbiAgICAgICAgICAxLjcsXG4gICAgICAgICAgMy4zMSxcbiAgICAgICAgICAwLjI4LFxuICAgICAgICAgIDMuMDQsXG4gICAgICAgICAgMC4yNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC4xOTQ5OTk5OTk5OTk5OTk4NCxcbiAgICAgICAgICAyLjY2NSxcbiAgICAgICAgICAzLjMyNSxcbiAgICAgICAgICA0LjUsXG4gICAgICAgICAgMC4yMSxcbiAgICAgICAgICAwLjE3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjI1NSxcbiAgICAgICAgICAxLjM1LFxuICAgICAgICAgIDMuMzYsXG4gICAgICAgICAgMC4xMjUsXG4gICAgICAgICAgMi41LFxuICAgICAgICAgIDAuMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC4xNixcbiAgICAgICAgICAyLjY2NSxcbiAgICAgICAgICAzLjQxNSxcbiAgICAgICAgICAwLjM2LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4wNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTAuMjk1LFxuICAgICAgICAgIDIuNTIsXG4gICAgICAgICAgMy4zMjUsXG4gICAgICAgICAgMC45OSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDdcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuNzQ1LFxuICAgICAgICAgIDIuNTIsXG4gICAgICAgICAgMy4zMjUsXG4gICAgICAgICAgMC44NyxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDdcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTQsXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICAzLjAyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4xNCxcbiAgICAgICAgICAwLjkyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk0LFxuICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgMy4wMixcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDAuMixcbiAgICAgICAgICAwLjkyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk0LFxuICAgICAgICAgIDEuNyxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAzLjA0LFxuICAgICAgICAgIDAuMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NSxcbiAgICAgICAgICAyLjgxNSxcbiAgICAgICAgICAtMi41LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjk5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk1LFxuICAgICAgICAgIDIuMDY1LFxuICAgICAgICAgIC0yLjUsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDAuOTlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTUsXG4gICAgICAgICAgMi40NCxcbiAgICAgICAgICAtMi45NzUsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjg0LFxuICAgICAgICAgIDAuMDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTUsXG4gICAgICAgICAgMi40NCxcbiAgICAgICAgICAtMi4wMjUsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjg0LFxuICAgICAgICAgIDAuMDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTYyNSxcbiAgICAgICAgICAxLjIyNSxcbiAgICAgICAgICAwLjgxNSxcbiAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAyLjQ1LFxuICAgICAgICAgIDAuMDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTYyNSxcbiAgICAgICAgICAxLjIyNSxcbiAgICAgICAgICAtMC4zMTUsXG4gICAgICAgICAgMC4wNDUsXG4gICAgICAgICAgMi40NSxcbiAgICAgICAgICAwLjA4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2MjUsXG4gICAgICAgICAgMi40MTUsXG4gICAgICAgICAgMC4yNSxcbiAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDEuMjFcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwibXVsbGlvbnNcIjoge1xuICAgICAgICBcIndcIjogMC4wNjUsXG4gICAgICAgIFwiaFwiOiAzLjA3LFxuICAgICAgICBcImN5XCI6IDEuNjg1LFxuICAgICAgICBcImN6XCI6IDMuMzMsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTIuMDIsXG4gICAgICAgICAgLTAuODMsXG4gICAgICAgICAgMS4yMSxcbiAgICAgICAgICAyLjQxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZGVGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiU2VydmljZSBkb29yLCBsb3V2cmUgYW5kIHNpZGUgd2luZG93XCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJzdGVlbFwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk2LFxuICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAyLjQsXG4gICAgICAgICAgICAxLjA1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk4NzUsXG4gICAgICAgICAgICAwLjQ1LFxuICAgICAgICAgICAgMC40MixcbiAgICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgMC43XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk4NzUsXG4gICAgICAgICAgICAxLjE1LFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgMC4xNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NjUsXG4gICAgICAgICAgICAyLjQ0LFxuICAgICAgICAgICAgLTIuNSxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgMC44NVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZXh0cmFGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUm9vZnRvcCBwbGFudCBkZWNrXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjc1LFxuICAgICAgICAgICAgNC4wMyxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMi4zLFxuICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgIDAuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjc1LFxuICAgICAgICAgICAgNC40NjUsXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDIuNDIsXG4gICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgMC43XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS43LFxuICAgICAgICAgICAgMy43OSxcbiAgICAgICAgICAgIC0xLjc1LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgICAwLjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgIDMuNzksXG4gICAgICAgICAgICAtMS43NSxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMC42XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICA0LjE4LFxuICAgICAgICAgICAgLTEuNjUsXG4gICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgMS4xMixcbiAgICAgICAgICAgIDAuNzJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgICAtMS4yNzUsXG4gICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgIDAuMDRcbiAgICAgICAgICBdLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiY3lsXCI6IFtcbiAgICAgICAgICAgICAgMS4yLFxuICAgICAgICAgICAgICAzLjk2LFxuICAgICAgICAgICAgICAtMS4yNDUsXG4gICAgICAgICAgICAgIDAuMjEsXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDE2LFxuICAgICAgICAgICAgICAxLjU3MDc5NjMyNjc5NDg5NjZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgICA0LjI3NSxcbiAgICAgICAgICAgIC0yLjQ1LFxuICAgICAgICAgICAgMC40NixcbiAgICAgICAgICAgIDEuMzEsXG4gICAgICAgICAgICAwLjUyXG4gICAgICAgICAgXSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImN5bFwiOiBbXG4gICAgICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgICAgIDMuODYsXG4gICAgICAgICAgICAgIC0yLjE3LFxuICAgICAgICAgICAgICAwLjAzNSxcbiAgICAgICAgICAgICAgMC40OCxcbiAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi45LFxuICAgICAgICAgICAgNC4zOSxcbiAgICAgICAgICAgIC0xLjk1LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDEuNTQsXG4gICAgICAgICAgICAwLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDQuMzksXG4gICAgICAgICAgICAtMS40OSxcbiAgICAgICAgICAgIDAuODQsXG4gICAgICAgICAgICAxLjMsXG4gICAgICAgICAgICAwLjA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjksXG4gICAgICAgICAgICA1LjE3NSxcbiAgICAgICAgICAgIC0xLjk1LFxuICAgICAgICAgICAgMS4wNixcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjk2XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJ0aW50RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdsYXppbmcgZGVjYWwgYmFuZHNcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImRlY2FsXCIsXG4gICAgICAgIFwidG9uZXNcIjogW1xuICAgICAgICAgIDMxMjE0ODIsXG4gICAgICAgICAgMzEyMTQ4MixcbiAgICAgICAgICAzMTIxNDgyLFxuICAgICAgICAgIDMxMjE0ODIsXG4gICAgICAgICAgMjA2ODY3NixcbiAgICAgICAgICAyMDY4Njc2LFxuICAgICAgICAgIDIwNjg2NzYsXG4gICAgICAgICAgMjA2ODY3NlxuICAgICAgICBdLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi4xMDUsXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjUxLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjE4NSxcbiAgICAgICAgICAgIDEuMjUsXG4gICAgICAgICAgICAzLjMyNSxcbiAgICAgICAgICAgIDIuMDMsXG4gICAgICAgICAgICAwLjAzLFxuICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNDk1LFxuICAgICAgICAgICAgMS4yNSxcbiAgICAgICAgICAgIDMuMjQ1LFxuICAgICAgICAgICAgMi41OSxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjAxMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NjUsXG4gICAgICAgICAgICAxLjI1LFxuICAgICAgICAgICAgMi45OSxcbiAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuODJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjEwNSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjUxLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjE4NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4zMjUsXG4gICAgICAgICAgICAyLjAzLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjQ5NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMy4yNDUsXG4gICAgICAgICAgICAyLjU5LFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk2NSxcbiAgICAgICAgICAgIDEuMTY1LFxuICAgICAgICAgICAgMi45OSxcbiAgICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuODJcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW11cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJha2VkXCI6IFwiZGF0YTppbWFnZS93ZWJwO2Jhc2U2NCxVa2xHUmtSWkFBQlhSVUpRVmxBNElEaFpBQUR3REFTZEFTb0FFQUFEUGowZWlrVWlJWWtzUkJBQjRsbmJ2Znkyb042T3Z2OHJBM1ZxVHJvWFZwOTFyY0Fhd3BqOWNpL2l2OEgrNG43LzhUbHhIOVgvc1ArRy96Mzl1L2IvNi9iTi9NLzZUK1RQNjkreWYzcDZBT1FmTDA4ai9MZjhmL2JQOGwrd256Zy90SCtLL3ovNGcvU1g5Ry83di9EL3YvOUFQOGMva3YrdC90MytlL1pyNDAvVXYrNXYvRS9YTDRBLzFuKzVmK3IvSC92Lzh6bitRLzYzOXI5elA5My95bi9lL3lYL0crUUQrZ2Y0UC81ZnVkNzUzc01mdlA3Qm45RC81My8vOWNiOXN2K2g4cWY5VC8zUDdWZjdQM2xmLy83QUgvLzl0ZitBZi9YcmQrbjMrRy91SHNnK04vclAraC9yL29qMTBQWnZrNHhHdmtIMlkvbC8zMzl6ZmFiL3ArSS9BRi9KLzZIL3JlQUhBQitqLzRqd0Q5WjdJRjc0and2RHN2K0QvOXZQZjlnQlVhNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzBHeDFrOHE5S29zNG1jbWtNVWhzRWZMeWM3Z2FyT1phOVY2Vk1na29Hc0VmTHljN2dhck9aYTlWNlZSWnhNNU5JWXBEWUkrWGs1M0ExV2NxNmhFK0puSnBERkliQkh5OG5PNEdxem1XdlZlbFVXY1RPVFNHS1EyQ1BsNU9kd05Wbk10ZXE5S29zNG1jbWtNVWhzRWZMeWM3Z2FyT1phOVY2VlJaeE01TklZcERZSStYazUzQTFXY3kxNnIwcWl6aVp5YVF4U0d3Ujh2Snp1QnFzNWxyMVhwVkZuRXprMGhpa05najVlVG5jRFZaekxYcXZTcUxPSm5KcERGSWJCSHk4bk80R3F6bVd2VmVsVVdjVE9UU0dLUTJDUGw1T2R3TlZuTXRlcTlLb3M0bWNta01VaHNFZkx5YzdnYXF2czFJYkJIeThuTzRHcXptV3ZWZWxVV2NUT1RTR0tRMkNQbDVPZHdOVlg0TUdPRCtaeE01TklZcERZSStYazUzQTFXY3kxNnIwcWl6aVo0UmVrYncvUlJBbEVDVVFKUkFsQmZZVHNlSHcvUlJBbEVDVVFKUkFsRUNVUUpSQWppdkVQeENyL1pseXJBL1JSQWxFQ1VRSlJBbEVDVVFKUkFsRUNVUUpSQWxFQ1VRSlJBbEVDVVFKUkFsRUNVUUpSQWxFQ1VRSlJBbEVDVVFKUkFsRUNVUUpSQWxFQ1VRSlJBbEVDVVFKUkFsRUNVUUpSQWxFQ1VRSlJBbEVDVVFKUkFsRUNVUUpSQWxEK2pCSmY2VzZVOUNDdk5kS0Z0MHA2RHZldkViaXRQSXVISUUzYjZUbDRGdzVBbTdTc0llcUIwRG9IUU9nWlNodTRLaFZDcUZVS29WUXFnVmJsTk9HY000Wnd6aG5ET0djTTRad3pobkRPR2NNNFp3emhuRE9HY000Wnd6aG5ET0djTTRad3pobkRPR2NNNFp3emhuRE9HY000Wnd6aG5ET0djTTRad3pobkRPR2NNM2RCeDQySEFPQWNBNEJ3RGdHdmhkZDFRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9YQ0JEQU9BY0E0QndEZ0hBTjl6eDdsZjhJZXFCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEF5bEpybGY4SWVxQjBEb0hRT2Z1RHJXQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQWRzZEsvNFE5VURvSFFPZ2RBeWxEZHdWQ3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxRkFSN1U0Wnd6aG5ET0djTTRadTV2UnFYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV0R1E3M0svNFE5VURvSFFPZ2N1RUNHQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRBN1puelljQTRCd0RnSEFPQWI3bXJ5TkE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNSs0dTBlTmh3RGdIQU9BY0E0QTdabnpZY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEE3Wm56WWNBNEJ3RGdIQU9BYjdtcnlOQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE1KzR1MGVOaHdEZ0hBT0FjQTRBN1k2Vi93aDZvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEbHdpVkE2QjBEb0hRT2dkQTZCbEhxTlM0bHhMaVhFdUpjUzRseExpWEV1SmNTNGxveUhlNVgvQ0hxZ2RBNkIwRGx3Z1F3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFIYk0rYkRnSEFPQWNBNEJ3RGZjMWVSb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUDNGMmp4c09BY0E0QndEZ0hBSGJIU3YrRVBWQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nY3VFU29IUU9nZEE2QjBEb0hRTW85UnFYRXVKY1M0bHhMaVA5aU1BRUhrcXZTcUxPSm5KcERGSWJCSHk4bk80R3F6bVd2VmVkTVVGRWoyb1NHS1EyQ1BsNU9kd05Wbk10ZXE5S29zNG1jbWtNVWhzRWZMeWM3R3JFWjB0RHc0YWl6aVp5YVF4U0d3Ujh2Snp1QnFzNWxyMVhwVkZuRXprMGhpa05najVlVG5jRFZaekxYcXZTcUxPSm5KcERGSWJCSHk4bk80R3F6bVd2VmVsVVdjVE9UU0dLUTJDUGw1T2R3TlZuTXRlcTlLb3M0bWNta01VaHNFZkx5YzdnYXJPWmE5VjZWUlp4TTVOSVlwRFlJK1hrNTNBMVdjeTE2cjBxaXppWnlhUXhTR3dSOHZKenVCcXM1bHIxWHBWRm5FemswaGlrTmdqNWVUbmNEVlp6TFhxdlNxTE9KbkpwREZJYkJIeThtUmJDaVJNZDdUcnJ5YzdnYXJPWmE5VjZWUlp4TTVOSVlwRFlJK1hrNTNBMVdjeTFQZzR0UlV2TU1mWTQ0YWl6aVp5YVF4U0d3Ujh2Snp1QnFzNWxyMVhwVkZ5c29PUUJtdndqTHdMaHlCTjIrazVlQklxUExMdkQ5RkVDVVFKUkFsRUNVUUpSQWxFQ21id2kwbVREYXdERVhJK0ora0tIRGtmRS9TRkRoeVBpZnBDaHc1SHhQMGhRNGNqNG42UW9jT1I4VDlJVU9ISStKK2tLSERrZkUvU0ZEaHlQaWZwQ2h3NUh4UDBoUTRjajRuNlFvY09SOFQ1N3BiREl3cS8yWmNxd1AwVVFKUkFsRUNVUUk5emwzM2RtWEtzRDlGRUNVUUpSQWxFQjRuRXVKY1M0bHhMaVhMN2NGUXFoVkNxRlVLb1ZRckRWVURvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRTzVzUzRseExpWEV1SmNTNGx6RUgvQ0hxZ2RBNkIwRG9IUU9nZEE2QjBEb0hRVGpKWWIzSy80UTlVRG9IUU81c1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlwT0NvVlFxaFZDcUZVS29WU0QzRGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSER5bkRPR2NNNFp3emhuRE9Hc2JEZTVYL0NIcVZFajRNTHB2cERwbk80R3F6bVd2VmVsVVdjVE9UU0dLUTJDUGx4NjRKYzJRTEFqTUM5Mjh1bFdsNU4yT21tY21rTVVoc0VmTGN5UUlNRG9IUU9nZEE2QjBEb0dKRU92cE9jcDM1d2haRlFkMW91LzFqS0VaUGpWWHdqd0ZZZTZhY000WlY1NzV5aXlMQkY3ZmM0TWY1LzRsbmF0MWQ0M0c1STB6aXFnOWh2T0djTTRad3pobkRMU2hhdDJyL2hEMVFPZ2RCT01saHZjci9oRDFRT2dkQTdyVGdxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZZYXFnZEE2QjBEb0hRT2dkQk9NbGh2Y3IvaERwajR0aHdEZ0hBT0FjQVo5ZWFRM3VENDd4UXFoUUVhbHhMaVhFdUpjUzRseExQL0wxZlBoU0JGbnlyVW1nR211Rzl5djlzNUFnQlVzQWswWCtieXU0a0pCanFteno1bEJBaGdIQU9BY0E0QnJRTDNxQUsvL2JrWm9ieTFRbm51UFN2K0VQVkE2QjBUY25FdUpjUzRseExpWEV1S29OVi93aDZvSFFPZ2RBNkIwRG9IUU9nZEE2QjNOaVhFdUpjUzRseExpWEV1WDI0S2hWQ3FGVUNyV0FjQTRCd0RnSEFOZklkN2xJNUxqVGluaXE5S29zNGtWanFZbm5xZ2RBNkIwRG9IUU9nWTltOEZELzJUblBDNmtuM1liMEpjam9WUXFoVXBUWjVVSzBBd3E5K1dpUzNBbjZ4aXBBeWxEZHdWQ3FGVUtvVktVcUEyT2xmOEllcUIwRG9tNU9KY1M0bHhMaVhFdUpjVlFhci9oRDFRT2dkQTZCMERvSFFPZ2RBNkIwRHViRXVKY1M0bHhMaVhFdUpjdnR3VkNxRlVLb0ZXNVRUaG5ET0djTTRaWkYyanhiazhYQ1o5c2VHdzVBVDBzTjdsZjhJZXFCMERvSEtqRDZwM3pGSEZudGhtRmROWGpKVmdLbHhMaVdqSnBRRjRGSTg1S0VjWWdXdkNJYlNzRXNiQjJ4MHIvaEQxUU9nYy9jWW92QlRobkRPR2NNNFoxNE43bGY4SWVxQjBEb0hRTzYwNEtoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFdHcW9IUU9nZEE2QjBEb0hRVGpKWWIzSy80UTZZdTBlTmh3RGdIQU9BTzJPbGZ5OGR3cnJ1V0czUVYxTEdENGZKdGZGbE41cEZRNnlLY2c4YUZQWTVDcG00b1l1NTJSRFhQbnV3clAvRndGZE1iWWYvTGgwZVRQR3Q5U21oQzVHODNmcHZFbTZsZUlIeGdWMkg0YjBMenRXajhvNXYrcGgxenpBSDg5aDRyT0pFYWdqbzdhSzBkdDNTUXdFRnQyNlhwWk5LRTlhdnRFdm1SRDYrd1M0YmoxUW9DSzJSTGp5N2xmU08zWlNaQ1pJaTlSOVc5dnptVVVXUnZPQXhIMTVzaUw3b2ZnZmY1Rmc2M1dXd0pYaWlZQUUwUjlIQlVqU0s3YTgzQkFqZ1RXdDJqL0d2ZHdWQ3FGVU1UOEllcUIwRG9IUU9nZEE2S0ZOM0JVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVWYvOEllcUIwRG9IUU9nZEE3bXhMaVhFdUpjU0RabnpZY0E0QndEZ0crNTQ5eXZFUHZKQWYwbHUzSjFpaXppWnhITmtIU2hUVTMycWVUT2hLdEthRXVlZkJZQ1I2eHEyVmRGM29uVkgwYTJ3MFk5MStJaHZ6dzVmVk9xUko1a0IxMXp1ZHNRR1hRdTZkalNhMTg1WG0wUWVxTjRPSkV1NTlFT3NQaXhBSUlGTUU2U01UYUE2ai93QU5OOGNHVXVkRm9IVXhwV1ExdG9ZczFqclRaZnRPTVVMdGxKdUEvUktvQ2h1M3F1dTVZYjNLLzRROThaTERlNVgvQ0hxZ2RBNkIzV25CVUtvVlFxaFZDcUZVS29WUXFoVkNxRlVLdzFWQTZCMERvSFFPZ2RBNkNjWkxEZTVYL0NIVEYyanhzT0FjQTRCd0IyeDByK1hqdkhjZU9CMS9oMEhvRU9YcGpzcGs2TlROZ1FpM29nU1IrSHQ0RndHWHdWekRsZzA5Y0hISzg1dnlUQnljSnBmU0h1clBaNms3V2gwbUtrUVg2MU14YzBIaE1OWGZNdUFYdnhFTEFLaHZEMzBFZ29yL24zaDJhUjFTNnVXTlRvb0lkdzBqeHdWdUFHMmFDakovNkVWMDcybFVvS0tIbWFuTUJEM1puellNaVgwUDlVWVV0RlFOcWFKWi9ZTnA5c2ZWUU9nZEE2QjBUY25FdUpjUzRseExpWEV1S29OVi93aDZvSFFPZ2RBNkIwRG9IUU9nZEE2QjNOaVhFdUpjUzRseExpWEV1WDI0S2hWQ3FGVUJzeXFkRDd0bGlrTmdqNWVUbmNEVlp6TFhxdlNxTE9KbkpwREJVKzVsYXpZYStUeVZmOEpYaldORkdYVnlqOVNJcHNoZVh6b2hzZExNbWlkODlkUjFJM3BNeEVoY0xZZEVVZkRXb2FwSDlsNEhXa3ZidEgvQXc5WUdvT3ZWY01NcGFCVHZLUFlzUnluK080Vm5BNjlVSDRPSjZKSXdaL2hnbmRVRmx4dFExdmp6RjFsa09nQTAyOVdmNTRVQ1FrTm82c1JlR2w2Qm9OTjNRRkNoaVFoQ3dvTUVVMElEUjF3aWdpVER0eFBUNTdoa3NCeS81WEVVWTBNZUlyQzR0cTBQOWVVU2cyTHhXWldwQnFaWnp3TU9HY000Wnd6aWFTdzN1Vi93aDZvSFFPZ2RGQ203Z3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxUC8rRVBWQTZCMERvSFFPZ2R6WWx4TGlYRXVKZnVoS0lFb2dTaUJLSUVvZ1NpQkp5SmNJUGtzdjUyY3JQMmpWWnpMVUJUOXVGNXZDZ2ZCK1F6R1ovMitOVVRnbFdscExnTkFzdkUvTWI2NHpPUnBCNDRLM0E4V3JRRlhuMzlXZzRFMkFXaElqdmRNVEJiMXNYa2hwM00yKzJzaTY4QlhHN3JRUU5BNkQrUEl5YzlTcFA3WUVLTnlEZytELzJjemFWUVBYVmUrTVJnVkFxZXJORUw4Z0JoQktTdkdKKzJPbGY4SWVxQjBEb201T0pjUzRseExpWEV1SmNWUWFyL2hEMVFPZ2RBNkIwRG9IUU9nZEE2QjBEdWJFdUpjUzRseExpWEV1SmN2dHdWQ3FGVUtvQzBFZDdnYXJPWmE5VjZWUlp4TTVOSVlwRFlJK1hrNTNBdDNaM05wd3FDYnN5ZVNyK0xweUxKMnJWR00zL2dUSzFIcnNaWllVQlNZRmRwakZGNFpKc2JZWTlJeHE2UEhjSzFXRWtmU1RmQ3hibnFnVTNhQzRobGZic205RDVBZ0VySnlTR3huRnQvdFFRRldxK0QwVTRqVGlxM1dZY2l6VHlIS0Z1S2crbURyY2NETStFQTdZMncwKzRLaFZDcUZVS3cxVkE2QjBEb0hRT2dkQTZDZU9LRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZVTVQ4SWVxQjBEb0hRT2dkQTZKdVRpWEV1SmNTMFpVUDlKeThDNGNnVGR2cE9YZ1hEai9GVXEvMnprdUpCaEQvTnpoU0xqMSsvSXl0bDdLMmNFWHFJQWFORkNqcmdwVXRnQ0pGS0Y5QSsvVlFEMUtFbXFRV3JxbW1LbHNOWVFlck9LMXdsc3hkcE1sL2JHMkJMR1JmVU1nZEJRS1VsRmJPVFRTajFIcmFGS1IweGRMR1hUb2p4c09BY0E0QndIK1RUaG5ET0djTTRad3poblljZU5od0RnSEFPQWNBNEJ3RGdIQU9BY0E0Qnc4cHd6aG5ET0djTTRad3pockd3M3VWL3doNmx3Z1F3RGdIQU9BY0EzM1BRbmpWejVMZ205UzRPZDRDS21zSVN4SHZKSDQrckRua2xIWTZIVFBZUEhCWUJtUnlVTFJZcStnZmZxb0I2bENUVktpQ1ZsOUpUV0tDMGpTVU5uSDlocDl3VXBTZjJkcnpubnJodzJ5ZFZjK2Y2eStkbEk3SFFqSmlGVFpuelZYY3pRN3JFRlZvZ2ZobTh5bElwY2R1elo4SWVxQjBEb0p4a3NON2xmOEllcUIwRG9IZGFjRlFxaFZDcUZVS29WUXFoVkNxRlVLb1ZRckRWVURvSFFPZ2RBNkIwRG9KeGtzTjdsZjhJZE1ZckNIcWdkQTZCMERsd2lWQTVjSnV6SjVLdjRpRGJqSk9jZFdZV3ZrWWJKOWZzT1YrbHJXTllZb3ZCS0NKRktUQXJ0TVdKRm1GMEJWNStBQzRLdGtHaU9CWVlRZjhpL1RLNTc2Y0FHOXlrY0ZLYkJNejFETUhRakRyaDcra0wzOEpIUnhZdlJUaUZIWEQ3M0FjdnB0ZlVoNC9BVlFxaFZDcUZZYXFnZEE2QjBEb0hRT2dkQlBIRkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUdKK0VQVkE2QjBEb0hRT2dkRTNKeExpWEV1SmFNaDN1Vi93aDZvSFFPWENKVURsd203TW5rcS9qSzh5a2dDQVJOYTlTTWp1ODYvUVlaMVhJNHlFS091Q2xTMkFJa1VwTUN0d1BGcTBCVjUrQURiaG41cDIwMHlZR0VtZWwrWlpHc0VOUHVDbEtUK3pxaGNmQTFjS20xWDVhak0xNEptNEZ2bEpoK0dTYkhTdTdIbGxydkFRZzJZUms4bFgvQ0hxZ2RCT01saHZjci9oRDFRT2dkQTdyVGdxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZZYXFnZEE2QjBEb0hRT2dkQk9NbGh2Y3IvaERwakZZUTlVRG9IUU9nY3VFU29IS21XLzZyOXIyWFlNT0JvRVo5c0wvZzRMWVM1MFgzeVlzbEJGTzZ0VFAvc1BFUE14R0JYTnRIaHJ6ZnJ1WllPUE1BMlhnZ25reGxTTGRsSHNYWVFla3FJMDV3dTJRTW9wU1BLdk5wN0hrcTl0Q0ZJTEtUVmd4Q2VrL0hYSFlKY1V4UHYyZkRPaWJSUXowMFJlQkhLR3M0WHVxcFUrU1BUdDBkZ2xwRks0K0IwREVKK0ROUVN0UjFnMmxDbEdkTUpoUVhIVXg3UEl3NTBDWmY3bHNhNEc4VFlJNGxaSTRNZ2JJNzByS1RtQVY0dUVEbjZIK0l6akdDWDRXYkZtcUFZZUN1ang5Tmh3RGdIQU9BZTBHY000Wnd6aG5ET0djTTRuSm9WUXFoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFyRFZVRG9IUU9nZEE2QjBEb0p4a3NON2xmOElkTVhhUEd3NEJ3RGdIQUhiTStiRGdIQU9BY0E0QnlKaGQ5a0hWVURvSFFPZ2RBNk83TjBJSU9MU2lxR1pDWHFYU3d6aG5ET0djTTRad3pobkRPR2NNNFp3emhuRE9HY000Wnd6aWFTdzN1Vi93aDZvSFFPZ2RGQ203Z3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxUC8rRVBWQTZCMERvSFFPZ2R6WWx4TGlYRXVJK1d0ZE85Q0c5eXYrRVBWQTUrVkZPWUhhWVp3emhuRE9HY000Wnd6aG5ET0djTTRad3pobkRPRlVCMzhxYU5mQ0ZYUWNLYkRlNVgvQ0hxZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMFRjbkV1SmNTNGx4TGlYRXVLb05WL3doNm9IUU9nZEE2QjBEb0hRT2dkQTZCM05pWEV1SmNTNGx4TGlYRXVYMjRLaFZDcUZVQkVkT25uN3UremlaeWFReFNHd1I4dkp6dUJxczVscjFYcFV6VE80WUhhSVgvTVJMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1IrVFd0Nlh5UFRpTjU5SEhBWjdkamVvT3FtOXl2K0VQVkE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9tNU9KY1M0bHhMaVhFdUpjVlFhci9oRDFRT2dkQTZCMERvSFFPZ2RBNkIwRHViRXVKY1M0bHhMaVhFdUpjdnR3VkNxRlVLb1ZhN3cvUlJBbEVDVVFKUkFsRUNUa1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVLSUhpY1M0bHhMaVhFdUpjUzRseExpWEV1SmNTNGx4TGlYRXVKY1M0cVRncUZVS29WUXFoVkNxRlVnOXc0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3OHB3emhuRE9HY000Wnd6aHJHdzN1Vi93aDZvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjNOaVhFdUpjUzRseExpWEV1WWcvNFE5VURvSFFPZ2M5dXhHWVMva0FacjhJeThDNGNnVGR2cE9YYU1Ib3Y3NlRsNEZ3NUFtN2ZTY3ZBdUhJRTNiNlRsNEVlNXg0MkVaZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGh5Qk4yK2s1ZUJjT1FKdTMwbkx3TGdHcEVkQ0tRSnUzMG5Md0xoeUJOMitrNWVCY09RSnUzMGpuZVdhclJMMUJNVGR2cE9YZ1hEa0NidDlKeThDNGNmNDBWNU9kd05Wbk10ZXE5S29zNG1jbWtNVWhzRWZMeWM3RGtWcmZzb3M0bWNta01VaHNFZkx5YzdnYXJPWmE5VjZWUlp4TTVOSVlwRFhnZzA4bHVCcXM1bHIxWHBWRm5FemswaGlrTmdqNWVUbmNEVlp6TFhxdlNxTE9KbkpwREZJYkJIeThuTzRHcXptV3ZWZWxVV2NUT1RTR0tRMkNQbDVPZHdOVm5NdGVxOUtvczRtY21rTVVoc0VmTHljN2dhck9aYTlWNlZSWnhNNU5JWXBEWUkrWGs1M0ExV2N5MTZyMHFpemlaeWFReFNHd1I4dkp6dUJxczVscjFYcFZGbkV6azBoaWtOZ2o1ZVRuY0RWWnpMWHF2U3FMT0puSnBERkliQkh5OG5PNEdxem1XdlZlbFVXY1RPVFFoTHhVWVRHS1EyQ1BsNU9kd05Wbk10ZXE5S29zNG1jbWtNVWhzRWZMeWM3SjNJeHRZTG44elNxTE9KbkpwREZJYkJIeThuTzRHcXptV3ZWZWxVWEhNY1U5RTNGK2NPTkNhQW9lbUJRd0RnSEFPQWNBNEJ3RGZkQUJDdi81Nngwb1czU25vUVY1cnBRdHVsUFFncnpYU2hiZEtlaEJYbXVsQzI2VTlDQ3ZOZEtGdDBwNkVGZWE2VUxicFQwSUs4MTBvVzNTbm9RVjVycFF0dWxQUWdyelhTaGJkS2VoQlhtdWxDMjZVOUNDdk5kS0Z0MEZSN0kwOHZkd1ZDcUZVS29WUXFnVk9vQmp2c2hZSGdDN1ZscTVFc0hRS050M0JVS29WUXFoVkNwU2xEQU9BY0E0QndEZ0hBT0FPMlo4MkhBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BY0E0QndEZ0hBT0FjQTRCd0RnSEFPQWNBNEJ3RGdIQU9BTzJ0RU1BNEJ3RGdIQU9BY0ExOElVTjNSREFPQWNBNEJ3RGZhRFJwVFZlbFVXY1RPVFNHS1EyQ1BsNU9kd05Wbk10ZXE5S21Cek9xclNhVlJaeE01TklZcERZSStYazUzQTFXY3kxNnIwcWl6aVp5YVF4UjczUCtMeE9aTXRlcTlLb3M0bWNta01VaHNFZkx5YzdnYXJPWmE5VjZWUlp4TTVOSVlwRFlJK1hrNTNBMVdjeTE2cjBxaXppWnlhUXhTR3dSOHZKenVCcXM1bHIxWHBWRm5FemswaGlrTmdqNWVUbmNEVlp6TFhxdlNxTE9KbkpwREZJYkJIeThuTzRHcXptV3ZWZWxVV2NUT1RTR0tRMkNQbDVPZHdOVm5NdGVxOUtvczRtY21rTVVoc0VmTHljN2dhck9aYTlWNlZSWnhNNU5JWXBEWUkrWGs1M0ExV2N5MTZyMHFpemlaeWFReFI1SWhSUlptZHNPblNxTE9KbkpwREZJYkJIeThuTzRHcXptV3ZWZWxVV2NUT1RTR0NrZ04zTlg5Y2VTcTlLb3M0bWNta01VaHNFZkx5YzdnYXJPWmE5Vjh5Rnp0b29nU2lCS0lFb2dTaUJJV3NPekw4VnA2R3c1QW03ZlNjdkF1SElFM2I2VGw0RnRwSzI2VTlDQ3ZOZEtGdDBwNkVGZWE2VUxicFQwSUs4MTBvVzNTbm9RVjVycFF0dWxQUWdyelhTaGJkS2VoQlhtdWxDMjZVOUNDdk5kS0Z0MHA2RUZlYTZVTGJwVDBJSzgxMG9XM1Nub1FWNXJwUXR1bFBRZ3J6WFNmcFBZTzdmOFZwNkd3NUFtN2ZTY3ZBdUhJRTNiNXNOdVZZSDZLSUVvZ1NpQktJRW9nUEU0bHhMaVhFdUpjUzVmYmdxRlVLb1ZRcWhWQ3FGWWFxZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCM05pWEV1SmNTNGx4TGlYRXVZZy80UTlVRG9IUU9nZEE2QjBEb0hRT2dkQTZDMnVHY000Wnd6aG5ET0djTThuZTdncUZVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVUtvVlFxaFZDcUZVS29WUXFoVkNxRlVLb1ZRcWhWQ3FGVU5hanhzT0FjQTRCd0RnSEFPTXRMRGU1WC9DSHFnZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNkIwRG9IUU9nZEE2QjBEb0hRT2dkQTZCMERvSFFPZ2RBNStRQUEvdjlpWDZGU2dBQUFBQUFBQUFBQUFBQUFBQUErWDF2eEI2d1JnV2RtUWl1SmtYWWpOekYzRVhKeU1WMFVwR1ZIY01xTzRaVWR3eW83aGxSM0RLaUVzQjUyV2JORFBYTGUvamU4L1NBWjgyU2NIaGJKbnQ4SmZubkVYd3hwMjdobFIzREtqdUdWSGNNcU80WlVkd3lvN2hsUjNERnJNcU1CL3dNUDBNYjUrNTlrdkFzNUtNcnJZaXI1ZkNEZ3FFRDlLVGRlcVk0N2RnUTdXT3dJa1UybHZ0cUhoYWdIY0FBQUFBQUFBQUFBNU5aelpSaTlsZWpzMTVJM1NseFZyWEhNeFNnZm5IYnBZUHhXVS84WFpWQzhqY3lJWDhGR3pVMEZWN3Y4NDNpTlpITUJESVlTRUFVR0JRRitPbWhDTlU3OFBMMEs2SEdsOHlOUGZWV1dWTlVHdGliZE11L09PM1N3ZmdrRVVWdXBWN0cwZ3BsQnRvWURpelNvVUJzMWZjTXFPNFpVZHd5bzdobFIzREtqdUdWQ1c1VTMwZ0FFMFhqV3l0UGY2bnR3M2hTNHRmYm1xVUFBQUkwKzBRVVhSUjg0c0puK3BVWkYrRVRYRWpMSkZJV3BMR0VBQUFBQUFBQUFBTVhEQkgrTHpIMmliWGJNVGxrRUVsUTJUUGZmcTl1dUlXUzhKQUVXRGppdHJIM0xPeGZvQmM1Y0kxRzhRSTkxSVRodk1SM2doY3g2MWNRQUFNQ1h3Sy9MUUFIZGdOTERBQUFBQUFBQUFBQUdhQVBWaXRBUUlBQUgxRWV2TTZTS1NBSEtqNElrb0NjOFRBQUFBQUFBQUFBQUFBQUFKQmh3QUFMN3cyQUFBQUFBQUFBQUFBQUFDK2w4R09ZQmovMzBrQUFBQUFBQUFBQUFBQUFVQ0NnQUFpMWc2SEVBQUFBQUFBQUFBQUFBQU54YVFiaHdIMll2RUFBQUFBQUFBQUFBQUFBRzR0SUFBTWlvakFBQUFBQUFBQUFBQUFBQVN0emdqeWdLTE9ZdGdBQUFBQUFBQUFBQUFBQnNaRGZrTzhXQ3lSMXVtTU51blVidkRPd3M5LzB1eHdZNEliYkpoRnRSTmtJUG1Kb0NEVk9qdjc0MmhiSExLcjJSdU12YVRWRUlMTEVMK2xmUm5JV0M2ZndmT1ljWWhuQURYN2JvZzJHeHFSSjZrN2puWDVYTTkrcUlZZGNvUGVNck9zYUswVE51dy93MnJ4YUlxN1dtSklIMjVORGFXWForbkNramdTM0J0VnE4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncThPZ3E4T2dxOE9ncUdYRVNjYU5nd09NdWJ3dGVxT1QvVit2dHhBVlg1Q1NDYWdYNWFkSTU4NmhTbGtiQVV6M01uSDVHMFVyRUY3SzdpdGZLQ0htZkJUY1pSWkNoOEZYaVp2SWhBSVJJUkRRQUxoazcxc1V0QnBlcmYzeHNPTlFKMHlGc2MrRzdEZHh1VjhlVEFMeVp0Q1IwVkowa0VHUDdpM0FZVTBsM1cwSGFDemVsUW9GUmNtSUdPdngxZjRFLzF4a0hUQ0xhaWgwUW4wVFFIZjIrejdDMFJEOFFCUkpoQkFBRUlmZjh6b0p2WEY2a2YzZUVtTCtZZEhIOTNoSmkvbUhSeC9kNFNZdjVoMGNmM2VFbUwrWWRISDkzaEppL21IUngvZDRTWXY1aDBjZjNlRW1MK1lkSEg5M2hKa3FZVlp1OXpJVmlBQW1tRENJV1pxUVJKd25IaThBQUJSbkJBQUFBQUFBQUFBQUFBQUFBQUFBQUFBS280QUFBQUFBQUFBQUFBQUFBQUFBN0xBQUVqUHlzR2VNV0RNZktwT1NtT0ZIUm02WmlXamU5MWxnTHdUYUFTeGtyNXdhTHlLQ0o4TzZuMktHVTRjdDZEUno1aW1qVjhvRG9rcXRSUVp5aEk4aXMxa0dkeWxwWUhtTGNhR3lzN056cmhJNUN3V3c3b1NSdHNUSTIySmtiYkV5TnRpWlF3YS9hSVN5SGt2cFVtZnV1UnNOUW1OdCtybnpNL0NhLzBNRlpLYUZ3cjlzUHpSeHM3Z1gyQXJRY3dWWVNVWUhUUkZMdGpXN0dFZ1BiWHMreFEwT1J6ZUpaNlRpZmEvempFKzNCZ0lQZWdWM2RjVncwUHVjN3Y4bW9sOWQ3WFRqZ1k4QXhNUm9sU2EwWXo0b0NkNm1EZUNLS0RwZWhlOTZPVjZjQ0h1SlRnMjZJNGpmMi9ZOUdjTi9iOWtFbHVaVUhmZWtjc1hsbFlrQ25rVFBwK1dJVzJKOTdUNjY4QUVIZDc2NTU1azdYeEN5Vnh6M3BCVzVXTE54SzhIVzcxZWdVZ2M4SFl0c2F6WEdVVW82aDVYWWMyL1JRN1BtOE50M3AxVEpSWDAybFJqNEtVOVQ1dStIdWd1ajZ6aUp2TUxMT1dLTVU3WkVBQTd6ZFFtRFB2YW1mUHVQNXdNZTcreUhDQ08zWGtScW9BNVZSM280U1d4cUR6NXdEOTgwRnZ1bkJhWEdyUDBTRlBXTmR6cDNDTTd4eGZtZXdnVzloUEdhTDVxaEFHWW83aDFpYUNsQzVrZFFuazB3VFlLQjNmY3lwVE5DZUtuU1gwM2s5VlBxQmpHcFMyYUF1dkFja0l6eEZxYnhaV2F0Ty9JQ25PVWtYWGdCcGhuWlp2R0tMMmtMRVZUb3BVYlNLNllReHl0bm90Q1pRSVNWbnVyYUNtZzlmT3NPMllTeWZXTXJUa3E2YzNRNXVWaGI1cks1amp2ZXpRK21pZmxYWDd3NE9GS0FKYnBWWGEvYmVlaklRMXppMDdOUHQ4WW9lMkZseVZDYytFN0VpNi84V3FEOGdGLzV6SUllQUh0L1QwZmhleHZyOExmQnZ5bkplcnV4UnA1WUtieVpndmRVM3pVSERmaTc3eVFlSVJOK1pieHZKYkRqaUU3UzV6bFoxSTMvZXJiWjg2VnVyeEJkQmNWS2M5anUxWmsvc2NXZGV4YlZCMFZjNFh4clkweXg3SXgyRkhDTXZnb3Z5U01iUCtBeVpwT1l0cEJ1U0pLeVZjckpiVS9FZG5KaVFjZFBZUmkvbDRhT0oyL0E3RE11ZXY3cDdxK0dkM2c1M1JqSUQ1OXBVNGpJdFA0RzMxWjd4dUN2QlI2ek1YZ0VmTWdBdGlzR3kwT0ljYXFXdW9DbXpjYXE0cG5nd05nTnM3c2FSQkY5WGJRZ0FBQUFBTjJRQUJOVkdaMGZ0SEVqVy8zUVpHQUFMMkt4V1NmK3J3V3I4NTBURDRSRkJWaEs5QmVzQSsyVnVhUEt0NXM0ZW5GNTQ3Q1MvK2EvTnZmQkFRUlQrQTNzN2FUUk5RQVNDSE5BK2RJcjlhYTJVWlR5NjlnSi9kbytnaXV5VFJiUlpJQTk5dVJkUGlia1hlWjRiSzUzZThIaFhOaEdzWWh3QlNDaDBxbEZaSkNJVnlOZjlvUTUwejZyVUdxNk5CU2tkd0ppUlNlRE42L2NiYXRwK3d5M29MMHVUY1NhNDcyL2tqc0tkUTJEbHZzeXBqNUF2Vmo2NHR0K0ZVcExrdG5tdkQ3WkZLMzd6QVlaaENwMmhXV1JmUjNSeXdxV0JpZnpUT2tMbXRYeVhScS9XRWtQZ01lbytCVGNWcEwrZFRINHJsZ1pZT3dtbGdmbWllMVhzeTk5S0gwd0JITEFmcFlESUw2U0pUTXFCZG1uSGdTcFpOMWYreDRJeVlWak1MN0diZXJRYXJUWmE1K3E0ZmZpN3hKZ3ZHa1FEamRhWlZHZm40S0hTUDMvaG01VnhZL0c3R1NQZEFaejEyY0NXd1F5UGlhM3Uwc05XaDArMFM0ZTJYK0g2TTFiZlJIS2xNbnRJaTQyYm0xS0hCeHYrUWp1R1FDME93MFVJRFBKam45REZqQ1dzOWY3anN2S2ROZ2lXRTlQZ0xnakp4a2EySlVBQUFBQUFQVndBQVhzOXdFbWxsOHpjRmErZXowTkRnTEl4T2FOOGx0S0xmdkhMRzE0VHlPZXdhZEcySi9iR0RZWm1NWU5YUmZ1RU04blNCVkFNSnQ5bW1OWmo2RUFLaDdMUmdEd1FUdzl3MFRxcjVkeXZxeXMzNUNjRTd0U1NqRXF0RTN3Tkl5MGo0N3YxakxoOFFaZC9KMnR3S2JuUlZpRVkvWmVvcVNWTWNENDJydkR3NGY5aENTbE0xdS92UlUyNXYzYWRtWUx6SG5ZUDRRT3RhTStjYkRZT1dtaUhieEVKbzIyQ3hVaWxFNld3UjJFOXlZc1FOYUhEc0JUOUlzRGVJTGc1K2xpVTRXYUZleGhWUXAyV3l2UVBHQXAvZmtxYjU0M3hnVlFURkdGdVVQLzZlMVJyOWhKeWk2YWVVUzBId3NLSDVqWGoyeE9XUTB0dlBnSW1zaTB5dmZLZjZDNzl1Q3dtVVdLZDhvMFJIU2x5V2IydnNrSUJwVGlYZXRuUTFPV0svNGNYeDhsZjJIU21QQSt2bEtwZFhEYm1WQTNDSUJ1cnJGVVpGUEFBQUFBQUNxT0FBSVdUUXNEY1VBTWgzRmJhc2YxWTVPdCtkenp0bXhoYnVuZzNTRi9mVlloVTdNbmxsUWVkd0FBSkFoNTZGNHFGVFBVNXlLNkc2b1FEYVJaUXI0VUdVUjJSSDFNb1lubVZhak8zRndVMjhCMXM3Zk05VFRyeUFCbUYwSXY3c0IwWEYydU5qaXh2Tk5sVnBiR0xqYUhCZnFObVpib2k2L05ZQ09EcS9XbjRMU0NCcDVvUmVaSXJwM05iVHhwN2IxdExDY3dJVkpMb0JpRkZHWHRhNHpuU0J0U3JZTm9kRkozUE9LNXhleDhVd2IvS2YwLzllRE9XRGdQY3JTbE15QXUveTFXVWo1NHZ5ZEtHZElYMkNMVjhQVDA4dUNIZ2luNmZTTzhmUUw5ZFdjbkUwOU9BZUhHNENOaWVxRyszT3VtMm9LYlc3Kzh0NmZ2MURQNFM4VjZTRHNkZDJ5T3Z5d0VVQ0ZQYVc2eGUrUUdsRFdVTTJrLzVFeE1BRGVsSGswdkNMUk13MlFBQUFBQUJNaUFBRDI0VFFGR1VBWE0rNVpwVnZzSXlWby84eXI1a2xhcVNUM1ZiNG1aRWZ1SEJVNkJVUDVUSW0zaFNXOEFtTGx3OGI2eFFPU0RZVkNXblZQL3ZxUWU3N2Vackl1N0pTRHYrM2ZwdWdaL2R2L1Jzd3NwdFF4SmdZYlAvUVRJc2hLdTlqOGRTSWdjL1plQTNjU2dIa1BjdmNpTTNpVExrUVRhNE5lUTdockxyUVY2SVcvd3lzNnFkQmhjSDJQci9xandpSTErYjdmY3c1cEtRQ3Z1eGpSVjFCSUpTNGo4Snd2L2NMRTNYRm9saHk0U1ovMmRkMU4xbzRoMHI1cjhJUE92RTFkcndxMmJLSW9uS3lqUmJqeG9ET25DTWUvOFI5d1lWdUxrVk5DQnEyUUxtWHA0LzJyRHFaWVhhZzBCeVRiayt2S0JyaVVPeUdJUytjYnBDT0dHN1N0eFhhdTB5QjI0L3phdjcvS2dWY0QybTVYNlR1YXpCYnZlZnJHaDRGMjRyaHVUYjlPa21KWEJJQXlNYzc5Sk1WWVhMWU9FeG8rL3N2bml3ZHFDcExyVlBOTzNNenRtMFh0cnNxOFd0bDVOTUxOeVUvL0cxZllnSXlEeWQxMStlLzl4Ui9uQWhEeXJmeVlYOFEydW5EODhFc2RsQ3BPL25Jck12L0IvOEQyTklkRk9XeFl1SHBVSU5sakEwRkl2eW04NHZFL2hXcjNIQkJwS0lnQzcxRC9XY3hQZGk0L2x0SVBZcmZXbUVSUjZFWXgxY0wzeTZjZ0wxaEVoZDdIVjhIUUE4TE5wOUZSb1kwbU5aa0dhK3RLQkp3SHQzZkVjU1FmeFFwZTRlZXQ5OHFUNHd1cDNJNUIwTGcwdDFlSXdkNVE3UHR4UDk1bzlKYURGTWFGa3FLSEVXam12QjR5Z0N4dGZyU3hwU2RicGlNWTFXSW9nRnNTYmRvZ1YyTFB6cjR0STVLb0tKMERvYTMwbGtLZll2ay9RQTRqM0YzWkZvR29JS0RIa2I4QUhjdDlOc1FHZW9vZEl1NTdWbCt6NEZEd1Q2L1p5dDJ6b3RERjMzLzh3NlRnVGJkRU1hYjdDN1lYVm04TThSY1h5YXRxRVVDTktRd3BQZ3ZUbWpQdzVRREQreU00dERDT01mamQ3Y1pMcS9yNlI0M0NFckhLTnFOZ2JIN3FLbFZhY3dWdC9SK3JsM2ovQ1dtdzU4UkhqNkFOWFFpa01PTHUwRFBmWnlKK05aLzhFeW5zV1N0ak9ZSmdJVzMxWkt3KzRZTE56d3k5eVhiczJGalNhWHU2Q0dpQmFybDlIeE1CU2NVVHlLRUdtbG9qZ1ZnZTlSYWJaZjRBOXkwbzRFSWFMK0F4WGN4MVp1M3piT2ZHaGNHdG9sU1hUMStjY0dHUUVIcnc1WXI2T2lGN1pzakhIVkx4Sko5NFViTnZvN0toQklYWm5iTUxoVEkzTEM5MkJmSTdOQWcrbllvMHZ6b1J3K0JzMGlRRXROM0tadkl3K3h3SVE0Z3RHQjM0aDlpVkY4RjdMN0luVGtET20xdXI2L1lzOUJrQ09nMVU3MjNaS0NnZURNcXh2U1VDZnl3UWhkUEJacVVldGFkb0Y3ckwyOHEyTWFDYnA2RXY2NVhrOXhIbW9zV25MNE43TWloNFFLZW84bVNDa0ZIZVdpclpPUWErRWNhVzlmSThoL1FkKzg3NWgwN3RWSkV6N3FhMUQ4WnhOTUJuUjkrTFppbXMxUlk4S0ptamdUVGx4d0N1TDI3WkMxYVRRbW9ETzdYcVRKUXF3MndyT2xycWJLT0JJOWlqbXhYbmNoSlNHZTh2SEE1S3J6TVZaWUdTenZMRGV2eFhiOW5RZTVJZkV3UWtXUkUyOEtUQzlBMExRaUp4MEsrcDVjWG0yQ2JBcFZqbVUvd1FsY0JIVjNHMkllWjB0VkU3Q2l2L1JFL291U2lESUc1ZVlHaVArU1g4THRmSHF5Zm5UNTZxVSt1MWFZQkQ4bmRtNlRTU045dnNhU2NBSUxzZGkyMXp0ZWlGdjhNck9xcEpvV1NvMjVmRUF0bTFEa1NVQVU0eFAvVDJ2TXVwcVlRQXlmM2xmU0ZuYVBVKzZNdXZHbTN5TVZzMkVJVmtock53SHJyM3ZzVmszVytvL1BjeFdkaEwvQVFjSy9IcGhEblB0YWxtU3ptME1xRlQwcjVFU0FPaVdRMkgyQkpLaUI3bEdYYlp3OStSanozaTlyWlJYOGdIYWx0SGJ4TzNYdU5LM0YrY3JuYVpLbFNsWC9PeGUveW9ybHNVNm9aZkM5S3NVY0dPRWVRaElFVHhRZGI0SjFaeHhWNmZ2KzJTN0lETHNTT0xNd0FkaUtzUytFZ0FyOTZUSWNjeFhBZGdNZkpEWlRiRHVnUTAzMTQ0UG1oZjNRYjhPVUZ2Q1EzVGxQRklMb2xOVWdsa1Y2aEJIdXVaM1h3a3hKcURRMzdPeGJNbUZieXNDcTdhdHJsNnBOdnU2UHhZVUVGTjVMbzZieXU4MDhyVmg3dzZHTkUwLzh0MjJsejdxdVRsVWFIcnk0SHdiNjdGSDMvYnFJQjZFbkYrWm9mNzlvZ1I5ejgrUEs1ODhVckpoUS9QRkpENCtwS1QwRTVIY0pBTUg3Nk9kQmdXazMxZkZzRUt0YUpxd3VWdXQxVDNWMjNLNFM5UHlJREhuZjRvQ0gvTDlRc3Y0K0xHckFzYktvRk5ZeFZPNHJTc3JwcDBIZi9QZG1GSkhPRFFqLy9iMkNNdVJVVWxDMUhFV3haeE9HM3FudHBzdUk0YkF2V0tWL09EN3RsV2hNd0FBQUFBQWtMQUFCM0t3Qkl1alNWUENWakhZYVZlZDdDcWtiaWpta1pPZnQwMG1ycEJxakhVNVJVRXBGNWxmcFNSa3krRzRDT2MzcDJoOVdrcFJheHZjUkFTZWpiWnBwTnZtQnZhN2h3TVg3cFQxZnFZN0diakdTc3RRZTltS0JNSldzQlBWUk1VVzJITEZFUWlYS3Q5THlNM1F4V2hDalFraGJieVI3eXhMR2FkT3VGRS83bHA0OEN4bWJZcUFmSXd2MXVwdkFSeUt5cTZLMk5FL1R0dFpFRUt4UlIrMkVKcjRRa0xTdnZkN1cySUhycEdHZDZuNmhTanhudGQyUWNPRndGQWRWcWdnMnRxOFV5a0hBbXdzZ1g2YnY1L1p6MWlZbUUwbExORWlzNjJqMW5IY29VYnVmT1ZhTzlyN0wraVRSTXJxS2lvVkNaUVd4NnpFRUwxVnd0WGJLd0dWM0FVRUwxOWhkZSs0c01jdEd1anhURmxXcVcwbDdnS0RtUk83eUhRRWVUeDhyNld5aWl1QTFuUE90Uk9KRmlRVkpPYVhSZEZuS0FFdG5oNFhsYmk2V2ZUMHBUUkU1L1hyQ2JEcTRPUUlhRnhmeG5WM2FzOExoUDR2U0lYR0ovNGsvRVQwbGpKbnR1TWIza0VGR2RZTmVaUWRlK205UC9WZEZIZHhZV2U1YWVZYTR3OXByRjJQQmtDVCtWYzZNV1lqZEpiMU9ublNqajhZTlhwT095VU5ETnEvY0ltYjRXbHVPNk5FN3licnVRditSWjM5RjdLRndzVFZpcUVnQzVxdHU3NDUzQUJaTFg0R2F5WmNKbitST2M0OXBPTkcyakRWZ3VmQkdyM29rWkg2NFlwNWlxQnJvaER5V3BiK1JZTGVQaTlSZEJGd0ZJMDBWbnhoSDBNTXY1WjlmTHZuZE1UdXQ1aGs0aFEwaEVJbDBNMDA5UCtkdWlFOE54UDkyd3hBNXloWnNRWkZSekU4SlVsQVZsT0NQVDc4SitIWFNjMVNob1kwYmFRMG8zZTdTRWRUYnlVbzIweFE5dlVVNEExeHFmTW5zb2tDWTFPZnp5RDczeHkzVkV2YUsvaUZPNkJOK0NxYi9rTHlzV0hLQVV4VkJicTZZYWZMUVQwMWlpTDk2c2RKeGhGd2V1QkRyZGlGN094UEI4K1R1TnlyWE05L241ZWliK1dHNS9mbWloNDBZNDd0emRwLzUwbzZKQlFJVXU5VWllZURKd0Y1NE9lWlBNTlBxNXdrdzJ3NWxNMjZQZ2ZNTGRJcG93WFl3REVWZmpMTytHM3BOMmxnVUZVczdBOTVlZGpsRHc0eE5oZ3VhU0ZhczZyQkZHQ2F5Ymw3ZHZpVkhJL3pISVlxSjRiVjlObm9HWEFJTjJHNWdkNWNTWGJTS2hiTElWVHFmNmRpemdIdXpUNC9PS001NVlEYWFxaXd1L09xNG5qSzdiL2N3VVJlQ1AwK3EwVUhITWZBcS9UY3JWNkVaZEYwMnBOMVhnSFVmaTl0d2tsOXBnakVMZUUvK2xtcWM5dGlRaDZFQUFBQUFBT3l3QUF4QXZkQTlqZ0RkMmZEVGJxdnhrem9FaC9hRjJGcGhvNXRQdGlKaWp0NVNxRzFsejVvYUR0ODBnT0JDRktzTjZLelpyQm1aQm1tdkp0YTBjUXVMUGE0MzZMc2RKZnBCYTNVdTVaNnAzbDNFTFFFelUrN2x6b0JEcjdVV3lkM1NmTktFRXc3Rm9oVTkxZE5hSGdMa05WakJmM1YrUVplbjYxTkQ5OHQwZm1zTmNxOEpULzdRbXNTdUlLTVo1NUFQdjA1MjI1Q0RiQ3F3dXV0L3pXTm90RHhTVTBUa2VLYnNyeHBuYkRXR3BDV0p6YTlTZ2wxUTNLUXhSWFFFU2dDYUgyTEVwK0ltWjRqb0tpZzNMZUJ1QWgxZndnaHNkU3pBSyt0QTFjbmR5Y2NHeDNHQ1RXaUFXa2dyYjgxUEN2UGJhRWN1R29UVklZMVFwWUczK2pObTRkOWowL1hpbG8wMkVPT0txb2ZyOXYxU2tqZHBQK1N1cmRkQlNwM0NuM21EeEI1NjFKYmZlZVZJdHRjbWZyYzlKeHZqZW9JRGl0MXR0aW9FMHQvM01SdWswMTZ2V0NnOUgyd0V5UXFZMjFYREtiQnR6RHBXTmlDMENmYTNrVkJvVm5OZWljbVEzSnY3ZFplR3NEamZXbG9nK0h2UE9nRnp6bE1WTDlSemw2eHpENjNocFF2WlZudjVsbWRvZTVYWnZyMjJpUnRKczRVRTdMWU1PK1c4bTdKMGladGJiK2hRQkRJM0JZMzZoaTg1UUdzWnEvb1ZTUW5UNmxDSk4xK0doZ2dZWTQrYklEQnRuYXF2SnplbjlpK05SN2JPcW4rbCt2b0Nwc2VucFRCUXQvYnJqcFE4bWtDbDJ4QTUwRnhmL25DN2FXQUQzcWhrYlJ3ZVJKbXY3THl2cWhYRnBYcnVPU3h2ZnlGWVhCbC9sZVlXV1MzMW10ZEdUa3p5UHVpZTRyN1hwRmJyeXp2bzk3OW1sUFFmeEl1MXRlb0xQazJvUzhLVHc4azMxSm5BM3pwa2l5ZGFicHJMdS9sUG1SaE5zWFJZSitYZHlnbnVHSHNUOXlrM1VLckkvOVZRYThreUFsYjF4UXgzZys5ZEZtTXlNSFFva1Q0MTIvMmtlM05Pb1VGYUxPZHZKMWRDOFdBOGRuVS9nTVRkUHZkMU5mdnd2WnZvWDVLZkY2SEFjZm9qSkdzYU5ZTXpJTTAxNU5yV3MxT3EwZk9HVTFoQ0ozeVcvcU1RMkZUU3ZFL1R5VHNjZkNLYjY3V0EwamNKUVl5cHRmNXBRZ2xWdWZpS25BNXYwNzBPZk9INnZSdWlrUmx1dUNvV2JHOXEvcWYyZ21QUTJndXlrK1NXbHo3UjJHSnJSZmR5OVlOb01tN2Jzeml6ejJhTmF6TmV4MSsrS20xSnAwMCtZN21ZRUJjakRpTmQ0TG1jUURDK2hReDVoenAzNHg4Q1ZiVllyTGtZNTM5R1Rnc3lUb2p5aW5xdytQV1B0ZHJ3aE9ZL2g3eDI5V1lsaW45ejA2d0lRa0ZpV3lVTVYwaFJJejBTd0REOURlL1VvZ0JFTHFrd0xydEtDalJxZkVyVVNBQUFBQUNRc0FBRTlFcm1ldnBRbUVtSDRUZGw5RC9EN0RJWm1KU1dwTjlzb2RzL2ptRGl6YUhjcGZHZU1lTThZOFo0eDR6eGp4bmE3K1g3OFVHOXdHU3JVUEliaGMyckgyTHJnVzBPaGtzZkJnYTZENzVQcjFwcHB1WW1iV01HL3l4czltWU5SMWN6TWNYYWpHMVZmeFJ2RmM1d1RzZGdrdHhZZXdBS2ZkNThndUk0dnVxbkhtaTZpakdVZlJyQWhCZ0tXN1o1WEVMUmxMeXo3aW1JVElKWUJtVHNyTXhqb21IN3prdDFFSVZWQWtKbUJ0V0xoRENVLzdGZzZHNDUvLzk0Q1FmVkt3U1JHaVFNSHVnTkpIK3VPZlZNWEtmZS8xQVRIU2Zoc2JGdFZwNE9VWW5qTXhicFFOUGdsUkJMd2d0eGI1L01xdnN5YkhqTnJ0ODl1empRUjRpbUpvSEIvb05SOGRTNThyeC8xdGR0aS9scEtOaE5TRHVVc08relZNVEFkMVN0bkI3dWtSWkdKelJ6WXVzamVQSmJQTmVKR3dvZytjUHdHUjNhcWd0ZnNOekVsTVVKeTV2elJRdTZtaUhNMnB2L3NibTFKU2haMXRVR1BsVjRkRUtMOVF2N1ZTeDZkMTFQbm5Tak1xVWI3ZjFrcmMrZHdRQ2NDU0dFRG1heW10UnRKZkM1K05LMk53WFJwRW5zOXhXNlFNazVOTVVEc3M4L05ETzI0OE9tM3MxbHBiOVExbGZpa0JDTXRqKzZtSjIyNGRjak00cGJRZ3RGS0JnNmd3VGhWcHdiRk5sTUVXN2JLV3pGN1VreG51QzNFYzBaUGt0OC9JcmVNZmV5M3I4RWRtQWdmWE81MjFhdEMwN09EZVI5WWtQQ1VIWlFKOTJQMkc3YmpmYkgxc3RVcWZpV3dudm9razRFOTZKKzRSVHp2VXNxTW9pN0M2aUlFa0NVTmhFczdoNHVQcGgvTmllWHJRL2dScmJEQXZTdUZoOStjY1dKMVVnL3M3OVVLRFdWdDhPMytCRXc5SXFiaVVaYkpORzFGK3VQSXE2YTl0bEpkZWVsZkpEL1UwaTVJTEF0dzgxUnpydW43eXJYdWNmZ3FFNG1LMUZPbVBoOXlzNVYyOTcxZmpKQkl1VEM0MHZuSnVBU1ZSNmljR3h2VGVrdmdxNkJINEw1VEJYYlVIYW9kRFJ3YWwvY2Nyd2FoL095eG1qYTBXUlhpdzREMEtQQjRqSDBoQjVST2VSbHdnMVE4UXlQc25nczNRSVJScjB3dENWdnZ3T3BLeVJ4aDhvZUJOdHFTRGt5YnZrQkxKdXdKVFNQU0IwZWlHUnNiSHp5Q3pEcGt0RUtDVTNlcDhEVlc3Uzk5Y1YzNGJ6b29RdmxzMTF2OVZoY1VidElXU3VPbm1XVm1hb2ZrT2lkUDRUeE9LMi9vV2VWd1JmNi90Ymh2bWgyL3F6dFVDQ2hDS3d0d2ZEeEQ3S2phaS8wVVNlS00vVHlGNVNNalJWb3hPbTlMSmJjWU9rRVNnWnBGbzh2bWkvRlVSa0RJR1hobWxCOXg5SG5Md2VVam1KcjJGTjZQZ2sySGIzTEhVYnc5WlRpbWh1aTFwb3U1NnR0TE9oWndheGhFVDlicXVVTEpobzQyZjl3b2thK3dKZVIzMHozWktCaHVGRHZyNXRIWlJ6d1J3MnA0UVoxRWt6TTZjeE9KRVRhS1Y0cmtJaGJWQTZOUW1Yc2tqaXE0YzRWNXZZenRCeURlWkIyTEg0NVVRVitPSGVselFPMHRlTkNmaFZ2OFhNbjJnQjc4Ry9KcGFHdUNFVW8rdFkyR1I2aHkvOVNPVmRjelJXZFpkQjRQT2dZWU1ST2FGY0RWanVYMWpUQ01mRzRpMDdwMThNaHg3V1JpY2Z6V21YTmxmalRUNkVXQTJaeTEvV20wVWZGRVhydnNraGQwNkFJVzI4dGhGTkNiemFVQkhZUnJLa1p1MUtIM0Q3TXVLR0t4cHpGMHRlQXVqMWthSXcrTGE4K1M1SXBZTTdzTEx4Y0VqeGxGOUh6blU4SlhKVjR0K0szTnRFOFNDaThoTFdoSHdYcUpNaXhYZDBmMzFtMjY5VXhQZS9FQ2FtTWxKeU9lOWdqNERWYTRkOGNmTmVCYVVCa2luemVTeUZtaThibVVYZEFvbzVoOXF3dlBKMVdLLzU1aU1TMUJKc1NNb1hmSWNhSDI0V1ltN2pLaXJac3FiT3MraXhCcUxNaVY0bTZzWm94Zy9EU1RQbkk0cUFBQUFBQVRJZ0FBQUFBQUEvUllsUHcvRzVpMTdhY3Z6SDFtSGlEMk54M1ppWUNJSTVYcjEwZ3p3cGFjNThPckRPT0dzcXBIOER2d0ZVcmxaNnc1RzdzaE1EOWJJeDNJeHRQS2x0SlYvdU11ZXpocW5vRXRkakEzQVlaMWlDQ1hMaVRLR2JHSFJKeXJoWVVGRkJrWE1zUXg5TXpQeUErY051aVc0RUtSNHFPcm4xVVM3cXVFa3hoaHExKzQxK21KcjJ3WWY2WVI0WlMzVlhjbVlqMnZWd3NQRWpTSisyb0hYNW0xVUh1bmJmOWU0dzN5Wjc3aDMvZ2tRTTlmc3FJNmxnZ3FVbUc2bjNWeFRoWVZrd3dqRFVhZ2NEZEg5TmgvRU5seExJbm5DakNNUG1nSUU3QVJTVDE1Z0Y0NFZoZzAzem9lSk1peEdlOG5zSWh4YWJ3T2IxTnJFVlU3dVJVRzVwQ1FnWUtXTFhaY0kzYlNoc1dyZk82Y2RDY2ZiOXpxTDQ1QWYrT1JSdEFlMXJzMFRSRWdWK3QxUjA4bkYzSFFaOE9DaWhkdDh5ekQ2emR1Mlo5djVydWhTaDU3VnJzbWRqZUM0bFBtWnE5VGpUSTZwT21HWml4bXJkM3FVY3liUlZueCtDTitoZEZZcXFjVVFoS1Q4N201b3Q3bklOSllBU0tJVTVaeWo1MGFFZFI3SVlxdVhMSnQvRjF2WXlvem9IcGlTOVVnaWhyTVRQTytHVWpzRlZ6QUoyWWM5bS9kWXZMOENIcW55L2NJWXZiYnVEMjhGdTFtV2w4Z1Q3OGV5Y0d3WmNtNXdWcnBxWGhvMHBabmxSMG5JMDFDUUZPZmRxTHRBT0MzTGxhNWF2QzVFdHRRQzExeW1Uc0tuS2hIYzEzNTVXRUphS1hWMFY3bkNXN2lIMytDRUdPYndML1N2MXFycnFWMlZxdzdwRkdYQVlRNjJvRGdBdE15d1BIMEtxcSsvaEpnYThPNEJjWnJmUk1QT3BLOEZ6TEVNZXo4VkFQdE85LzJFSktXeDZNOVlBWmpUMThVdjlmSlFoSEtyc0xJNm40WkI1UFNTSzM4bnp4UHdjM2hrMDl2T2VJUTZVZnFsaG01K2cxQm9jZGU1RDAwemRJQU8vZW9YcFdHNHZFSGVKUU5TRzBwV0MxZUpxYU0wcFR5a0MyRFE2S2JGeU5mZ2pzTlM2bnRvdW1TeEc1ZnBxTUxjWDUrTlZJUE5MQTJublpVdnlsN0pmVGtwenU0cjRkRkFZbGRrQlczNkJ6MGtReW9WS0FBQUFBQXlmQUFCMHFUNDJkK1c5dHRaSjRYTmY1cEVzbmRlckNwOFNsSzdsR0VjVWoybzBLM2N0SnRZUnJzQTRPMWRYZmNMcSs0WFY5d3VyN2hkWDNDMXpWWW5ZMUtoVUhrd3ZYKzUzenlDeC9UbDgzSmt0WXRIZ2tnS1YwRnc0OEhoTnRmODRGQXM4QVZ4dFVibGdWcWwvWWF4UkRZWENjVG5kRjVGQnUxbXNuOUUwOGdUWUxFcG8yOXgyU2JVU1czR1l0VXd5ekhIcVBVcXJvZ3NSMG8zandmQW5LQTVodGJCRUNDSThhc0xPSGxhWForUmtleVNoeVl2U21kN1pLSThIVlVSdVdRZmxhNkVubWxxdzhUUS9vaW00OWxvMCtiOW13RWlIeTd5RnRVaWRMelBzT1hBSkhNN2NZUWlpd01LbFFuYUN5ZFlId0FXb0tzNER1WkJKR2RiWk9CVzFIbHhab1k3aTY1LzNoejdOcFovZnNGNFYwY1RvMy80bkJCNUdQaDgydWt4S1VLdVM1WkdkOTd3cGtRalJWVWN1eWRsZ1ZDQTJzZnNVMmdSTVJaZi9jUXhBSHZrcS80VG9Cd0k0T2haK3Yrb1Q5dEsySDlzU3B3czBIekJhL3IwQzg3eUN0U2xyajlIVWpCTm4xaXVXV3ErV3J3ZjVuRWRDMVR2QzUvbnVCZnh2b0JWQWVyZis0b1MycWZzVE03NVhQbE0rMFpWcTUxUHkyQUE0TVBHY2V1WlNsYjM5OWY5NHlIeDhkOURmcnV3L2hwamNhODFseGhGcmR1S1NJZGFqVGI0MmNIZU9lTU5nQmxWZHVmVXUyTzlIaUhQL1o2RmpXaHlqbkMxalVCWVlaNzNmdlp6MUVQVjFOWjVvbXNlakgyeWRGc1ZTb2ViODB6dGhjVDV1dVRsNG9rL3dlSVJXeTczWXNwa0d4UThaaXIxVFNrRkF3V2tCME5rZUlkZUxHQjVWcTcxWEs3a1B5amwySi9rNEkvZmUyS2E3WmN0Z0IxdFd1ejZwYTJOdlhkdXNreEFkU1IrNUdJVnFZblJCT2QzUFdjSzdCU0RRbXl6L0FYY0FPclU5dkVZR0pMUi9wRC80U1NrQi9Qd1dVQ0tLZTVsSTFBVm9IRjlJQ1E0TEQvd1FPYy9adUQvWVBpM3ZIeDBMMFJpWnFXaHBqd2tKUld0d3R5aEJXaFZzWVlzS2FMTnI0Nm1aczd2L1ZoVWxGZldIRVAzcHk5RVEwYWdIVVE3MkZHUmZKUWpXZzY4MysxQ0hpNk1hTnh0Z0FBQUFBQkNSQUFDWnR0UTFoVW15RmpxQUFqMkhyZUY3bjdjU2xvRGl6OUFOUjFpSDVFQVY0allEK0VNNncweGxMRzVGdGp1cnpJNmwwUU1KMEE2S0c4ZlN5MHFoSUR0Q2wyRWgwZFVFVE8rbllkWXFwbzd4M3J5NnRYZmhUcnlETncxWmp1WWJPZ2FreUVjL0s0VGFCTDZuWkxqRkp3M2ErRDhCVTk4Ty9uRU9NY3c2MjVURiswbGF6Zld0emVzaGZTa1k1WEJ6Z0MyUVJOMVY5UmRtcEozcGQvL0QySHlnSHBIR0YrL0tFeXpwd2lkaGI3MUkzalo1NVZuQ2wxRjNUSlhSTURHcG81L2hmWW1zSVFOL0JpNTVwUjBBTUZRTXRzU1pNTkNlNVdCVGZZYTdPT3JOdk9SdlhqcThPTWkwZG5Ydk1MUHBuMk0xYVo4dmZtQU91RTB2bDFpWUxTbnZoZ3A0WnY0NEdUUkc3T3NEdEtXaTk2cmJ3SkVKOWErTnVrbGlySWt0QlN2b2pVSFBxcTJxR1YrejhERlh5akViVFMvSWJidE5nNEFNV0tkME1VR0VvV0N0NG8rcVFWdHlYT0ZWNk9IbUNNU0xqTFo3SC9McW82UHR5Q09YeGNuVVROWG9sU0xPWUtuc3NmaWR4Rnh5ZXU2TXZUSXlBR2FhU05XZ1F4QUFBQUFBTU9RQUF1eHlxV0JROEJlNE90U2FTMTcyR1BBYlZVT1dwSy9GV2lnU3I3R1pYbFBISW1Ta3RSL0xEWU54Z09iY3p5blRTeXFEcTZoVGxiZGREWndpVHpvWGVhRnlQdUZwOGFrOENCdWZCdGpFY3hnc2VJL3kwaDBPcEU1Nlo3dmtnblZFdVBlbXp1ZjNPeEtYZkdPcDR1SjhlRGplOC9yV3hrakdSMTFJb05Ub2QzdTR4aC8vcWwzNm1WMCtpMnUrK05Nd1RxelVRR2p2VkY2RmpuWTJyZFEyQmVTNE5YQXg1V09xSlRNZUNNVUtRajFJdTdJOVZoQXVtZlVqZFV2dlljZzhOTkh6WW92bEtUczZIOS9wV3JGUkw3b3NoRUJwb2pkekFObkp5TDEreVFrS3FCN3krNGRuTWtraU9yM05pdlZkRXJsaCtKVE90eVVFaXRrNk9URDVKL3BRM1RUNzR0bFNCU0hzWG5qSXkxeFhONk5NU1hjeFlRbXhOeVMvSVdza0t6d0U0UkMzRUJKYUhOMEhoWTdNZGxVOWJqV0daQ2ljN3ZPMHVLQzVQV2M2MHFFbE1Cd3p3eHQ2RktiN0krMmcrQkhMdncyWWdYc2JBREdTdkVwVGNLQjNjL3FMZktjaGdLVms3UDd0enlNV3h0eUM3dlRDaXZ4MnV4eWxsN3llRE1oZldZaXE2M2FhOFhoVWZ3WXRQL01aMjJPZU1SczZUWUpicVh3N2VUMjRidlBqeHZmTE1SN3pOQzRnQVpKVEVNNTduNEo1dWl3c2cwRlNZVHRMUzhBaVNQcWcySWtyaTYwWmltcUh5MDhrdjRoRXZ3N1p0VEN3bUM0MjRITGM2UFdEUkxIa2JlL2kxWEhBRjRKNkhaL0FMVERuNG1JQUFBQUFBUmZRQUJYdjNZaXZXQVJOc00rNlhXN3o4cjJtR21oUjQ3SGpYdmZnamRuMEZGK2hLWUwvZWxFWC81L1V0R2xtc3hQQUFWTDVHYjZSOXJkV1JucUc0UDY1U0hNVitLM2VPMmg2dmtFNTlacTFaM0Roc0g4aFhKZk5yVHZMQWZZNTRGYVFER1N6Yk1oK3UzUFJtZFpMTkRZSHd0K3pPdG5WbzRNdHpDQ2dZaExwZmZIL1FkcVpvMXRRaEdGVDlzMzA5eDdBNFNDQXdvdVZhYzZHRkt6Q2pRSUR0Q0w2WXgwZnl0RWlSOGh0Z0xUMHFvRVJEa0djZkRWVUVmRSt5Q2pxYm4xbE9LMGU2S0Q1WlVBb2ZKd1lvTVJQWWNWOFhJbElGRWFWMFJwbXByNDhEVWZTVXB3dGFxcWVHUkQ3VWVxZWZXSFlob050ajBhVE40dlJ6Z1pxNk9zM2RNUHdkNWlKcWVwVHc3ckIvME1xUUgyditvRitvQlRrVlVpNEVSMWhXUkNWMDBsVlVSR1FJU1psT2JWZFQzUFhIRUpQZmlhdzZPcTFBejlOdWtMVkdKQmFzeThqZlVvZ0ZSZzFGb2kzaW5EZitYelVxbGNLM2hiOW1PTm5WbzRNdDhzdHRlMUFSek84djVSckNWUlBrOTdGdUJuYjBxV1ZlaHJHS0s1WTVlazQxcTJtN1l1eWtmRURqS3k5dExQeVNSRFBTR3J6bkxRYjhsa2lNQmp4YXRYOFNRZmdOZEhRRU9qZkQxQU9xb0JhdW96SzIrUE5jQUFBQUFBQTlYQUFGR3NGTlFKeHdiL2N1Y1RTMnR2bzFmOVA5LzBGRVJqZXhOV2V3VDZQRitNYzNoclN0L2M3OU96WUQ2VFZWM2RWSlZYMjhxRUIzYjRUY0NzaWgwQUgwSGRNQXlGL250c1RzZmQzMm1Mbk05RzhvOEJqdG5MUUovMnk4b29QNnVzRVJiR25MbmR1KzNjU3FXV3dSZW9icmprSWNaeUc0WlZpdzdHeDBRZVN2OTBQSlZDaXpseDAwbGxJb3VpQnJrbFlEWE4rbnJROU9QTVM2ZUs0aUx3RjV0cjRacVN1V0F3S3hQNVFsc0huT1RYZjY5WFlsRnl6Ui9QcEdlVEdMVTJLQWtETGs3VzhCcTlFcTZrSUx0OTFCNlBvbEFOSENUU0NEczBUbGVUb0NETW00czRrRE5IS0RJQUx4SUlLN05KRW94UmhnQjlZSnUwSi9VOHhnd0dQclhvNjBOdWgxZ0cxYzZ4dnJCM1dMU1BBSEJMU0Vpa0VodlRubEdkTkpuODFRWm95dzVYSGlCWEI3VkFQczRpTGNnak9QR0pnelZlemp2eUNlaUVTOHZ4a1VGeWZlTXdmbk93cU94TEVLWmRaMnNqUkpZZ1BSTUZ1WUZGRnd5TUtGcWh1MlgyMGlKemU1cXVNYUk4Z1JaRVJsUFpZbkV1RytVMmI1alA1L0M4QW1TVFRvQzhnNHIwUkhJQXlndVMxQzFVcENoT0lvazVSUU16NXNxZVFWZzY4Mis1a2Y5YVptUC93TmV2WllMemNOWWlWUmwvSHRGS040TWdtblMvWGNVYmtKT2ZqT1hIdGVGeGExMzBlK1VmeU9vb2Y3QTFzVnl6M2QweWNRQS9uM3ZwRFcrdlk5M2dBWjR4a1VlN1R5NnJlU3lJSW1VY2QvSUFBQUFBRTg0QUFZT2hzUmF3TlY5YzZwdmh3NHhBR0ZIYWMxVk5hM2s0NkFHcGtJTHA4bXBvZEQxK1Q0MUlmNVBlYklaWktrRnJHL3JEOWxaL0xqWGpSSjZxYThlSUk5ZHRLR2haVkhHRVdBTHMwS1F4Z2lia1h5VWVPMHlmR2tQdEE5VTBoYWJNZmt2REhXR2RFb2drWnNKY1I3ZEVUU3prVURQNURMQVVuWUFPQ09RQmUzMERoVGlBSXE5ZHNISWc1S21aSCtwUkRQeTgrQ0xHR3dMYUtocnFoNkR5RnV3UmNhUkhRVXB4N05uUFI2SlhTeGhqdEgrWW5MS3JZeEM0S2tpazkvOW9VZ0JwKzFjcFV4RTFqWllCNnJLM3dIUkcwUFRTakVLQmNtbGZ0bEUvTnRXTGxIcmRoM1ZLU1RNb3NLUHd0WE9CWjZ5WHZkY1ZUL2dBR0Nwc0RYdjhFc1RucUQxMGZxWHhoaTRsMUcyVDFucUN1VUFYYWFkbFk0OTZMWitJOU52bENZdFFZNDBKbE85b2wzbHdyY1U4b3dBek42Rk96d2paVG5SRDBncEd0cU12MTlaQjNGRzc2ajF6MVFJRFl0cTZiMUNWbk9VZ1BIeGFDeng4QTFnNzRGTFdQdmFKZDVjR25pVGRNQ3lLR0ZkYnVlYWZRWXN5S25qVWVNRjk2WlhWVWdSaGVRd2Y5dUxESGtKR0x5cjhqYmVvQ2xFMk5wZzkxRG5oTTh2dzNSbGk1bysxNXduSXA0K2pNNmVzSEUzbHhBNmk0MG1Dd24venBWRDBuMWkyWHExdkpzYzcyYzJZMmN2TGtUREg2eWI5VEcrbFlNWTJIWEdGdytZMk5IWGxlOXpLQVNoR0Jmbk1XYTFTRlF4WVBDelhjQytPaXgwbTltcUtlOEZvbDJ1UEJHYUR6enpnYzhOdTdsS2dpOW1zMjE3a1I4RWFnWGw1YlNpY3lIaU5GYXJiaEJaZjdlZFBvbWJ3bEcwYlJpUWZNaXdQNXZ5M0hEa2NqK1l5Z0pLU1R2YWNlV1ZLcWFGcm11QlNaVkJ4WlVrVUZoWTdHOU5tMVRGK1dYTFEwZm15aEV6SWdPcXZHaHJVdmc4UGRvd2EyUG1keW9DNzdkdkI5VjdvYzJpSzdKMWt2RHJqN3VMV2xqZGtsQVBhY0s4eVJjbWNQWWZSUWE3c2lYS1NOWGRTdWJOUVhqTUptZ1EwQnBnZHpCYklTRkhpNkJicXJsLzdvZkpOM3VWWmVDMEUybmNGN2VnNWdwOTlXOUZEMWZCN0d5VFBDeVF0djd6MnRacWIrcFdxenNqM2JPNDRsc1Q4YzZZSWVMUmZ0SEdyT3FRcGg4b3lpUy9leXYxRzFEODFwVnY4WDQ1UzduWks3SFg4TitRYWV3bVZoMEZ1WHczbHhiRmc4bnFNSlIyTUx0M3JSalBHUFpuVU5qY1NEemw1SnRDVkFTOG9qTC9QbDZ0bjZzS09TWitSMjdHWFhTOVJUV1F6bW96OGVBVE5pZlR6djhnVVNGVFI2bHBHaXFmSmhZTkZZUlFMUm80OGlwNUNYUEhkM3ZvcmgzcU9ic1VhQlJnVkd3WlpiSWdmdUVyd0tacDN5Um0rYjMwVzk3S2VCUmpmS2w2ZjF3NHYrODMyUXgrYlRjaWxpL2l2VUx6YUVoM2pRSk04L1AyYzU1UnVSTFU1V0prb1ZPMElBc0dwVHhxVi9wK0JISktCeGkrVXJaSjVkVVNyOWxvL0FVS0htVitCa2JnV3IwK3Vibk1lOU9QbTliWHY4OUthdFhiV1RUb3I2L3F6R0F1TVV0aHV1cVhnL1o5QitrRHE5U3VoY2VIOUxhRGtKSlhUM0NpUDdhTDcrQXAzSk5OZVhEak1VU09wbi83K0sxWWlkTldPRFNsUU9KMmNteFFCWklvNGo4RlJ1aHh1RlpRbFpaR0dqU1B3VEN3NG1rNXNyQjFnaDExUGw4ZFp1RzlNNVlOOEdVNnZ6YU1kd3Z0NGh5Vi9COGtyd25MalFqbFJaeUdZakN5MVN3Ym4rNXpZSFJrT3QraVY2L3gwOHRMNTJDL0NJcGJjcUN6SkhrampMSHMybjV4S2FiZVV6TTFYQW8yS2QwMzFidUZwdFRtNDZ0b2FOalRQTHc5bHk2WGpHMjQxbFZoVGwyeXlOZktmeEZwM1lBQUFBQUJDUkFBRmhVUDNRTFdBQUFBRGRJYzVnZUlHU0FyZTE4dDJTajB6cmRXMXI1WTRibFExTmdBRXVQbURFVGY0V1VPTDJPT0pRUVNQS0JLRnVWZzY0RGlzbVNpMmljeDkwWjVXWkZQYmQ1eWgyVkE1ekFaa2t4UmlQR3E0M0dNdlBqanV6RXdFVXh2OTBBQUFBQUFBQUFBQVR6Z0FBcXVXL2tETktPSDJ3VGtFUmtnOHdGVDhaYXZ0bEdiMVl2WjJzb2M2ZGZrZ0FBRXNxY2xiK2V2U1RReG5JaG9ubUgvWVJsdGQ1REx1V2hWdzZJQ0FUanR2aEhwSXg1QUZhS1V0RjVUaE1LakRhWTdOL0ZRKzY2ZDJFS21zOW9Yd0xLTUpmNGhodWVCK0pZdmt3ZkFMWUI5WnJFcXowSTdzZkxjRlI5ZE1PWlV5TVA3UVl2RmJDbmE4cS9LQUFBQUFBQUFBWG1BQUJYYjVBcGtOWVpOWGNNSmFqSnB6cGxRajdlWU1NNjdCSWJTR2J5MlNoc2dqTkdCVVNsTmZXNlNqaURkaUI4VEIxVkZOZVZzT3luYjk1V0p6UzUvTlVLWEVSVHliNlNiY2x5eS9WQzJETkdjcEpIdWJZTTBaeWtrZTV0Z3pSbktTUjdtMkROR2NwSkh1YllNMFp5a2tlcnkvbzhiT0kwSjBjcnVNMW9pd3pkZzl6Mkl1a25PaXFYckFNRXQyV3VxekhPbFd4WGV2SDJpMGt0eUcxR2dkdHU3REZ4aTBycDI1YThpVHRyVGN5MGV5MnlURjZTM0hZQ1F3Q2FFYTk3cXovTEZnQUFBVWdnQk1qRkwvdEhLeWdqMGdaVW1VYlFHcy9HeC9hQTIzei9nOTN0UG1GNUx2TGNVbzZvRjhFM1lNRnl3a3VUY01FU2MyS0hqZ0U3SHh4R0ZrSjF3N3dXV3VyL1owM0Q0SWhGcHN4aERPRHIwdkdiN2RPc2FGcUJSa3U0Z28veko3eEwrRzVlS0M1RnBDUWkrTU1WejBhcCt4b3VXVzVBQUFBQUFBQUFBQ0FJQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBSmtRQUFBQUFBQUFBQUFBQUFBQUhqVzNsd1l3TEt6Q0hLRElCRmI3ZHo5R3cyd2dBd3dnNUFQWDgrczlHMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFMwdExTMHRMUzB0TFNZTzZPWjdsK0tYZmlWb0Q1aXViaWZqNXJTU1NrRDYrdnI2K3ZyNit2cjYrc3JGbG1XTWJLRlRMalBydERNVXFZWkgxOWZYMTlmWDE5ZmFCOGVuLy81Y2IvNVgwZi8rVnpqc293aXFQYlBGbmN0MWJ1SGFQd0ExZUxxV2ZnQnE4WCsvUnNHV3BUQm1wVEJtcFRCbXBUQm1wUzliMXJPSzFLU3VmOE5mOUVsTzl2QkRTVlJ2V1FOcFVHQjdJZWdPcnNmQzFHb0FtaVFZM2FqdUdWSGNNcU80WlVkd3lvN2hsUjNES2p1R1ZIY01RbGQ5TmFjWEQvL2hyL25jcUhFZHpmb3hIb1R2Y2s1aXZVbDVaQ01Rd0RFSERHTStWUjJkYWdrTncrK1FiaXFOL0ZQRTAyUlduQldMZVFHVm1FWk0vMzA2TUw4RlRrWWQrSk8wMkZMbGhoVmZpVFVDS2RrV1JIcjhTZHBzS1hMRENxL0Vtb0VVN0lzaVBYNGs3VFlVdVdHRlYrSk5RSXAyUlpFZXZ4SjJtd3Bjc01LcjhTYWdSVHNpeUk5ZmlUdE5oUzVZWVZYNGsxQWluWkZrUjYvRW5hYkNseXd3cXZ4SnFCRk95TElqMStKTzAyRkxsaGhWZmlUVUNLZGtXUkhyOFNkcHNLWExEQ3EvRW1vRVU3SXNpUFg0azdUWVV1V0dGVitKTlFJcDJSWkVldnhKMm13cGNzTUtyOFNhZ1JUc2l5STlmaVR0TmhTNVlZVlg0azFBaW5aRmtSNi9FbmFiQ2x5d3dxdnhKcUJGT3lMSWoxK0pPMDJGTGxoaFZmaVRVQ0tka1dSSHI4U2Rwc0tYTERDcS9FbW9FVTdJc2lQWDRrN1RZVXVXR0ZWK0pOUUlwMlJaRWV2eEoybXdwY3NNS3I4U2FnUlRzaXlJOWZpVHROaFM1WVlWWDRrMUFpblpGa1I2L0VuYWJDbHl3d3F2eEpxQkZPeUxJajErSk8wMkZMbGhoVmZpVFVDS2RrV1JIcjhTZHBzS1hMRENxL0Vtb0VVN0lzaVBYNGs3VFlVdVdHRlYrSk5RSXAyUlpFZXZ4SjJtd3Bjc01LcjhTYWdSVHNpeUk5ZmlUdE5oUzVZWVZYNGsxQWluWkZrUjYvRW5hYkNseXd3cXZ4SnFCRk95TElqMStKTzAyRkxsaGhWZmlUVUNLZGtXUkhyOFNkcHNLSEtQSHJQM2h6b05zTVFPVi80ZXYvMkJJNXkvTWdSVTdWVmJSR3BxejcwTmRsSHVmdXlYRDNuSTl3NnVhUitrdHdYVHF4WWdUWW5iR3YyTlE1elIvU1ZqeHdJYXl5T3JReTdTOS9PZTc0NjdzWlBscDl1Z0xJeGlFVHlKY1c3OE1CaXdDYzFjRjc0WS80ZXYvMkJVVVpBQkRBNnhlTEEzZkEzaCtjRkFYN2ZmLytZeStDMlF2MW8vakhUK0wwbjEzbVNEa3Q0MG9jZkxzdGdXQ1lFY1J3aGlFQ3hWMWpZaEFzVlY4R2ZHZkdmR2ZHZ0YxY0FBQUk1WDRiTVRtakdZQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBeUlrVW1QYktIQUxBQUtrNDUvTzhBQUFBQUFBQnFZQUFBQUFBQUFBQUFaNFA2V3N0c3RRQUM4eTJ5My9BQ1AxdVAvd2V4UCtYNXRRSWtMTEZtVkVjVjZUcFRxU3JNV2ltelZ1T1BIcWdzNStBd3dzeElRUTUzUGpQR1BHZU1lTThZOFo0eDR6eGp4TjVIMWEvT2Y4TkZMb0I3bzRVMGJUYWQvdjNQV0t2V0dKaGVQZFBHUEdlTWVNOFk4WjR4NHp4anhuakhqUEdQR2VNZU03YnRBYUFvTXg3bXZCWXcydFJ3bzBXR2hBTHo2N3RPSnNPWmxJVFF3V2tZL2Y5dVRFU0FVN0haSENvT3VubVdzWDFrNUgzSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWXFSZi8zSzdGU0wvKzVYWVdZWTYxL2FYc3NSQzRneE0zL1Z2blEycWdsZWFOK3FTbXdnMTNUbGlVd2k4RVBQUnJDc1NuazJVSVZxUk8rcGJqMXE4SnhhUUhIY0xxKzRYVjl3dXI3aGRYM0M2dnVGMWZjTHErMloxWXVSNzBlZURWWGhVRk11WFYzZVd0MnV0RWJwSzd2SWcvNnQ2YkpCdnNWV1k1NGg3dnNmNkVydUpDeXZoQ0dhTm5uMGZhUGZNcXYzd1V5ZU05MDhaN3A0ejNUeG51bmpQZFBHZTZka0ZWUWRPQUFBQUY4bllBQUFBVFJneUl5czNWRXJRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTJYMzdxUGdMMzlUaUFBQUFDYlhmWXRZKzFZU296M2lIaE9kNkVDQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFcIixcbiAgICAgIFwic2l6ZVwiOiBbXG4gICAgICAgIDQwOTYsXG4gICAgICAgIDc2OFxuICAgICAgXSxcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNFNUU2RThcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMCxcbiAgICAgICAgICBcInlcIjogMC4wMyxcbiAgICAgICAgICBcIndcIjogMSxcbiAgICAgICAgICBcImhcIjogMC4yODQsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzM1QTI0QlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWN0XCIsXG4gICAgICAgICAgXCJ4XCI6IDAsXG4gICAgICAgICAgXCJ5XCI6IDAuODE0LFxuICAgICAgICAgIFwid1wiOiAxLFxuICAgICAgICAgIFwiaFwiOiAwLjExOCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMjE5MUM1XCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMC4zMixcbiAgICAgICAgICBcInlcIjogMC40MDIsXG4gICAgICAgICAgXCJ3XCI6IDAuMDcyLFxuICAgICAgICAgIFwiaFwiOiAwLjExNSxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMzVBMjRCXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInJlY3RcIixcbiAgICAgICAgICBcInhcIjogMC4zMixcbiAgICAgICAgICBcInlcIjogMC41NCxcbiAgICAgICAgICBcIndcIjogMC4wNzIsXG4gICAgICAgICAgXCJoXCI6IDAuMTE1LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiMxQTkwQzhcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkZhbWlseU1hcnRcIixcbiAgICAgICAgICBcIngwXCI6IDAuNDA0LFxuICAgICAgICAgIFwieDFcIjogMC42NjQsXG4gICAgICAgICAgXCJjeVwiOiAwLjU0NSxcbiAgICAgICAgICBcInNpemVcIjogMC4yNCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMjE5MUM1XCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid2FsbFwiOiB7XG4gICAgICAgIFwibWVzaGVzXCI6IFtcbiAgICAgICAgICBcImJ1aWxkaW5nLXNoZWxsXCIsXG4gICAgICAgICAgXCJwYXJhcGV0XCJcbiAgICAgICAgXSxcbiAgICAgICAgXCJ0aWxlXCI6IDIuNSxcbiAgICAgICAgXCJzaXplXCI6IDUxMixcbiAgICAgICAgXCJzZWVkXCI6IDIwMjYwODI4LFxuICAgICAgICBcImJhc2VcIjogMjQ4LFxuICAgICAgICBcInBhdGNoZXNcIjogNTUsXG4gICAgICAgIFwicGF0Y2hBbXBcIjogMjIsXG4gICAgICAgIFwic3RyZWFrc1wiOiAyNjAsXG4gICAgICAgIFwic3RyZWFrQW1wXCI6IDUyLFxuICAgICAgICBcInNwZWNrc1wiOiAzMjAwLFxuICAgICAgICBcInNwZWNrQW1wXCI6IDM2XG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG4vKiogQSBib3ggbGlzdCBpcyB0aGUgbWVyZ2UgbGV2ZXIgZm9yIGV2ZXJ5dGhpbmcgaW4gb25lIG1hdGVyaWFsLiBBbiBlbnRyeSBpc1xuICogIFtjeCwgY3ksIGN6LCB3LCBoLCBkXSB3aXRoIGFuIG9wdGlvbmFsIHNldmVudGggbnVtYmVyLCBhIHJvdGF0aW9uIGFib3V0IFggaW4gcmFkaWFucyBhcHBsaWVkXG4gKiAgYmVmb3JlIHRoZSB0cmFuc2xhdGUgKGEgc2xvcGVkIGtleXBhZCBzaGVsZiksIG9yIGB7IGN5bDogW2N4LCBjeSwgY3osIHIsIGgsIHNlZz8sIHJvdFg/LCByb3RaP10gfWBcbiAqICBmb3IgYSByb3VuZCBwYXJ0IGluIHRoZSBzYW1lIHN1Ym1pc3Npb24gKGEgZG9vciBwdWxsIGJhcikuICovXG5mdW5jdGlvbiBib3hlcyhsaXN0OiAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGIpKSB7XG4gICAgICBjb25zdCBjID0gYi5jeWw7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY1szXSwgY1szXSwgY1s0XSwgY1s1XSA/PyAxMik7XG4gICAgICBpZiAoY1s2XSkgZy5yb3RhdGVYKGNbNl0pO1xuICAgICAgaWYgKGNbN10pIGcucm90YXRlWihjWzddKTtcbiAgICAgIGcudHJhbnNsYXRlKGNbMF0sIGNbMV0sIGNbMl0pO1xuICAgICAgcmV0dXJuIGc7XG4gICAgfVxuICAgIGlmIChiWzZdKSB7IGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7IGcucm90YXRlWChiWzZdKTsgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7IHJldHVybiBnOyB9XG4gICAgcmV0dXJuIGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pO1xuICB9KSk7XG59XG5cbi8qKiBNZXJnZSBhIGJveCBsaXN0IHdpdGggYSBwZXItRU5UUlkgdG9uZSB3cml0dGVuIGludG8gYSB2ZXJ0ZXggY29sb3VyIGF0dHJpYnV0ZS4gVGhlIG1hdGVyaWFsXG4gKiAgdGhhdCBkcmF3cyBpdCBtdXN0IHRoZW4gaGF2ZSBgdmVydGV4Q29sb3JzYCBvbiAtLSBzZWUgYGZpbmlzaFZlcnRleENvbG9yc2AgLS0gYW5kIGV2ZXJ5IG90aGVyXG4gKiAgZ2VvbWV0cnkgb24gdGhhdCBtYXRlcmlhbCBuZWVkcyBhIHdoaXRlIGF0dHJpYnV0ZSwgb3IgaXQgcmVuZGVycyBibGFjay4gVG9uZXMgYXJlIHNSR0IgaGV4ZXMsXG4gKiAgZGVjb2RlZCB0byBsaW5lYXIgYnkgc2V0SGV4LCB3aGljaCBpcyB0aGUgc3BhY2UgdGhlIHNoYWRlciBtdWx0aXBsaWVzIGluLiAqL1xuZnVuY3Rpb24gdG9uZWRCb3hlcyhsaXN0OiAobnVtYmVyW10gfCB7IGN5bDogbnVtYmVyW10gfSlbXSwgdG9uZXM6IChudW1iZXIgfCB1bmRlZmluZWQpW10pIHtcbiAgY29uc3QgcGFydHMgPSBsaXN0Lm1hcCgoYikgPT4gYm94ZXMoW2JdKSk7XG4gIGNvbnN0IGdlbyA9IG1lcmdlR2VvcyhwYXJ0cy5tYXAoKGcpID0+IGcuY2xvbmUoKSkpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgKiAzKTtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuID0gcGFydHNbaV0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGMuc2V0SGV4KHRvbmVzW2ldID8/IDB4ZmZmZmZmKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb2xbKHYgKyBrKSAqIDNdID0gYy5yOyBjb2xbKHYgKyBrKSAqIDMgKyAxXSA9IGMuZzsgY29sWyh2ICsgaykgKiAzICsgMl0gPSBjLmI7IH1cbiAgICB2ICs9IG47XG4gICAgcGFydHNbaV0uZGlzcG9zZSgpO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cbi8qKiBUdXJuIGB2ZXJ0ZXhDb2xvcnNgIG9uIGZvciBhIG1hdGVyaWFsIGFuZCBnaXZlIGV2ZXJ5IGdlb21ldHJ5IHRoYXQgc2hhcmVzIGl0IGEgV0hJVEUgY29sb3VyXG4gKiAgYXR0cmlidXRlIHdoZXJlIG9uZSBpcyBtaXNzaW5nLiBUaGUgc2hhZGVyIHJlYWRzIGFuIGFic2VudCBhdHRyaWJ1dGUgYXMgKDAsMCwwKTogb25lIHRpbnRlZFxuICogIHBhcnQgbWFrZXMgaXRzIHdob2xlIG1hdGVyaWFsIHBvaXNvbm91cyB0byBldmVyeSB1bnRpbnRlZCBtZXNoIG9uIGl0LiAqL1xuZnVuY3Rpb24gZmluaXNoVmVydGV4Q29sb3JzKG1hdGVyaWFsczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+LCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+LCBtYXRJZDogc3RyaW5nKSB7XG4gIGNvbnN0IG0gPSBtYXRlcmlhbHNbbWF0SWRdO1xuICBpZiAoIW0gfHwgbS52ZXJ0ZXhDb2xvcnMpIHJldHVybjtcbiAgbS52ZXJ0ZXhDb2xvcnMgPSB0cnVlOyBtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgZm9yIChjb25zdCBtZXNoIG9mIE9iamVjdC52YWx1ZXMobWVzaGVzKSkge1xuICAgIGlmIChtZXNoLm1hdGVyaWFsICE9PSBtKSBjb250aW51ZTtcbiAgICBjb25zdCBnZW8gPSBtZXNoLmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSBjb250aW51ZTtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8gLS0gd2hpY2ggaXNcbiAqIHdoYXQgcmVuZGVycyBhIGJ1aWxkaW5nIG1pZC1ncmV5LlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgbWV0YWxzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZVxuICogbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG8gcmVmbGVjdFxuICogcmVuZGVycyBibGFjay4gVGhlIGFsYmVkbyBzdGF5cyBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqXG4gKiBUaGUgb25lIHByaW50ZWQgZ3JhcGhpYywgdGhlIGJyYW5kIGZhc2NpYSwgaXMgYSBjYW52YXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLlxuICogVGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIGRvZXMgbm90IGFmZmVjdCB0aGF0LCBhbmQgaXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGYW1pbHlNYXJ0U3RvcmVCdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRmFtaWx5TWFydCBTdG9yZSBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgLy8gYHNoZWxsQm94YCBbY3gsIGN5LCBjeiwgdywgaCwgZF0gcmVwbGFjZXMgdGhlIGZ1bGwtbW9kdWxlIHNoZWxsIGZvciBhIHBsYXRlIHdob3NlIGVuY2xvc2VkIHZvbHVtZVxuICAvLyBkb2VzIG5vdCBmaWxsIHRoZSBzbGFiIC0tIHRoZSBQVFQga2lvc2sgc2l0cyB1bmRlciB0aGUgcmVhci1yaWdodCBvZiBhbiA4IHggNyBjYW5vcHkgc2xhYi5cbiAgY29uc3QgU0IgPSAoRy5zaGVsbEJveCBhcyBudW1iZXJbXSB8IHVuZGVmaW5lZCkgPz8gWzAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NF07XG4gIC8vIGBzaGVsbEJveGVzYCByZXBsYWNlcyB0aGUgc2hlbGwgd2l0aCBTRVZFUkFMIGJveGVzIGluIG9uZSBzdWJtaXNzaW9uLCBmb3IgYSBwbGF0ZSB3aG9zZSB3YWxsIGhhc1xuICAvLyBhIHJlY2VzcyBpbiBpdCAtLSBhIHNlcnZpY2UgZG9vciBzZXQgYmFjayBpbnRvIGEgcmV2ZWFsIChNSykuIFRoZSBwb2NrZXQgaXMgbGVmdCBvcGVuIGJ5IHRoZVxuICAvLyBib3hlcyBhcm91bmQgaXQsIHNvIHRoZSBsZWFmIGluc2lkZSBjYW4gc2l0IEJFSElORCB0aGUgd2FsbCBmYWNlIHdpdGhvdXQgYSBob2xlIGJlaW5nIGN1dC5cbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsXG4gICAgICBHLnNoZWxsQm94ZXMgPyBib3hlcyhHLnNoZWxsQm94ZXMgYXMgbnVtYmVyW11bXSkgOiBib3hBdChTQlswXSwgU0JbMV0sIFNCWzJdLCBTQlszXSwgU0JbNF0sIFNCWzVdKSwgJ3dhbGwnKTtcbiAgY29sbGlkZXJzWydidWlsZGluZy1zaGVsbCddID0ge1xuICAgIC8vIEhhbGYtaGVpZ2h0IGZvbGxvd3MgdGhlIHBhcmFwZXQgY29waW5nLCBzbyBhIHRhbGxlciBtb2R1bGUgKEZhbWlseU1hcnQncyA1LjIwKSBpcyBub3RcbiAgICAvLyBkZWNsYXJlZCAyLjMgbSB0YWxsOyBldmVyeSA0LjYwIHNpYmxpbmcgc3RpbGwgZ2V0cyBleGFjdGx5IDIuMy5cbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgKChHLmZhc2NpYVdhbGw/LmN5ID8/IDQuMDc1KSArIChHLmZhc2NpYVdhbGw/LmggPz8gMS4wNSkgLyAyKSAvIDIsIDBdLCBoYWxmRXh0ZW50czogWzQuMCwgKChHLmZhc2NpYVdhbGw/LmN5ID8/IDQuMDc1KSArIChHLmZhc2NpYVdhbGw/LmggPz8gMS4wNSkgLyAyKSAvIDIsIDMuNV0sXG4gICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlLicsXG4gIH07XG5cbiAgLyogUm9vZiBkZWNrIHNwYW5zIHkgMy41MC4uMy42MiBieSBkZWZhdWx0LCBzbyBpdHMgdW5kZXJzaWRlIGlzIHN1bmsgSU5UTyB0aGUgc2hlbGwgcmF0aGVyIHRoYW5cbiAgICogcmVzdGluZyBvbiBpdC4gQXV0aG9yZWQgZmx1c2gsIHRoZSBkZWNrJ3MgYm90dG9tIGZhY2UgYW5kIHRoZSBwYXJhcGV0IHJpbmcncyBib3R0b20gZmFjZSB3ZXJlXG4gICAqIGJvdGggYXQgeT0zLjU1MCBhbmQgYm90aCBmYWNpbmcgZG93biAtLSA0NiBtMiBvZiBjb3BsYW5hciBjby1mYWNpbmcgc3VyZmFjZS5cbiAgICpcbiAgICogYGRlY2tZYCByYWlzZXMgaXQgaW5zaWRlIHRoZSBwYXJhcGV0IHJpbmcsIHdoaWNoIGlzIHdoYXQgYSBwbGF0ZSBzaG93aW5nIGEgU0hBTExPVyByb29mIHdlbGxcbiAgICogbmVlZHM6IHdpdGggdGhlIGRlY2sgYXQgdGhlIHNoZWxsIHRvcCBhbmQgYSByaW5nIHRoYXQgcnVucyB0byB0aGUgY29waW5nLCB0aGUgcm9vZnRvcCBwbGFudFxuICAgKiBzaXRzIGluIGEgMC44IG0gcGl0IGFuZCBvbmx5IGl0cyBsaWRzIGNsZWFyIHRoZSBwYXJhcGV0LCB3aGVuIHRoZSBwbGF0ZSBzaG93cyBtb3N0IG9mIGVhY2hcbiAgICogdW5pdCBzdGFuZGluZyBhYm92ZSBpdC4gUmFpc2luZyB0aGUgZGVjayBjYW5ub3QgcmFpc2UgdGhlIHBsYW50IHBhc3QgdGhlIGRlY2xhcmVkIDQuNjAgbSAtLVxuICAgKiB0aGF0IGlzIHdoYXQgdGhlIGNvcGluZyBpcyAtLSBidXQgaXQgaXMgd2hhdCBkZWNpZGVzIGhvdyBtdWNoIG9mIGl0IGEgdmlld2VyIHNlZXMuICovXG4gIC8vIGBkZWNrRXh0cmFgIGZvbGRzIG1vcmUgYm94ZXMgaW50byB0aGUgZGVjaydzIHN1Ym1pc3Npb24gLS0gYSBkYXJrIGJhY2tkcm9wIHNsYWIgYmVoaW5kIGEgZ2xhemVkXG4gIC8vIG9wZW5pbmcsIHNvIGEgc2hvcGZyb250IHdpdGggbm8gaW50ZXJpb3IgaW1hZ2Ugc2hvd3MgYSBkYXJrIHJvb20gdGhyb3VnaCBpdHMgZ2xhc3MgYW5kIGl0c1xuICAvLyBkZWxpdmVyeSBoYXRjaCByZWFkcyBhcyBhIEhPTEUgcmF0aGVyIHRoYW4gYXMgYSBwYXRjaCBvZiB0aGUgcmVuZGVyIHdhbGwuXG4gIC8vIGBkZWNrQm94YCBbY3gsIGN5LCBjeiwgdywgaCwgZF0gcmVwbGFjZXMgdGhlIGZ1bGwtbW9kdWxlIGRlY2sgdGhlIHNhbWUgd2F5IGBzaGVsbEJveGAgZG9lcy5cbiAgY29uc3QgREIgPSAoRy5kZWNrQm94IGFzIG51bWJlcltdIHwgdW5kZWZpbmVkKSA/PyBbMCwgKEcuZGVja1kgPz8gMy41NikgYXMgbnVtYmVyLCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MF07XG4gIGNvbnN0IGRlY2tHZW8gPSBib3hBdChEQlswXSwgREJbMV0sIERCWzJdLCBEQlszXSwgREJbNF0sIERCWzVdKTtcbiAgLy8gYGRlY2tFeHRyYVRvbmVzYCAob25lIHBlciBkZWNrRXh0cmEgYm94OyB0aGUgZGVjayBpdHNlbGYgc3RheXMgd2hpdGUpIGlzIGhvdyB0aGUgYmFja2Ryb3AgaXNcbiAgLy8gREFSSyB3aGlsZSB0aGUgZGVjayBrZWVwcyBpdHMgbWVhc3VyZWQgdG9uZTogb25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBhIHZlcnRleCBjb2xvdXIuXG4gIGNvbnN0IHRvbmVkRGVjayA9ICEhRy5kZWNrRXh0cmFUb25lcztcbiAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJyxcbiAgICAgIEcuZGVja0V4dHJhXG4gICAgICAgID8gKHRvbmVkRGVja1xuICAgICAgICAgICAgLy8gYGRlY2tUb25lYCB0aW50cyB0aGUgZGVjayBib3ggaXRzZWxmLCBmb3IgYSBwbGF0ZSB3aG9zZSBwbGFudCByaWRlcyB0aGUgZGVjayBNQVRFUklBTFxuICAgICAgICAgICAgLy8gKGEgZ2FsdmFuaXNlZCB0aWxlIHNoYXJlZCBieSB0aGUgdW5pdHMgYW5kIHRoZSBtZW1icmFuZSkgd2hpbGUgdGhlIG1lbWJyYW5lIGtlZXBzIGl0c1xuICAgICAgICAgICAgLy8gb3duIG1lYXN1cmVkIHRvbmUuIExlZnQgdW5zZXQgdGhlIGRlY2sgaXMgd2hpdGUsIGkuZS4gdGhlIG1hdGVyaWFsJ3MgYXV0aG9yZWQgY29sb3VyLlxuICAgICAgICAgICAgPyB0b25lZEJveGVzKFtEQiwgLi4uKEcuZGVja0V4dHJhIGFzIG51bWJlcltdW10pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBbRy5kZWNrVG9uZSBhcyBudW1iZXIgfCB1bmRlZmluZWQsIC4uLihHLmRlY2tFeHRyYVRvbmVzIGFzIG51bWJlcltdKV0pXG4gICAgICAgICAgICA6IG1lcmdlR2VvcyhbZGVja0dlbywgYm94ZXMoRy5kZWNrRXh0cmEgYXMgbnVtYmVyW11bXSldKSlcbiAgICAgICAgOiBkZWNrR2VvLCAnZGVjaycpO1xuICBpZiAodG9uZWREZWNrKSBkZWNrR2VvLmRpc3Bvc2UoKTtcblxuICAvKiBQYXJhcGV0OiBmcm9udCBmYXNjaWEgd2FsbCBwbHVzIHRocmVlIHVwc3RhbmRzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50IGFuZCBvbmUgZHJhdyBjYWxsLlxuICAgKiBUaGUgZnJvbnQgaXMgdGFsbGVyIHRoYW4gdGhlIHNpZGVzLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNhbm5vdCBleHByZXNzLiBPdXRlciBmYWNlcyBzdGFuZFxuICAgKiAwLjA2IG0gcHJvdWQgb2YgdGhlIHdhbGxzIC0tIGEgY29waW5nIGRyaXAgZWRnZSwgYW5kIHdoYXQga2VlcHMgdGhlbSBvZmYgdGhlIHdhbGwgcGxhbmVzLiAqL1xuICBjb25zdCBQUyA9IChHLnBhcmFwZXRTaWRlcyA/PyB7IGN5OiAzLjc1LCBoOiAwLjQsIHRoaWNrOiAwLjI0IH0pIGFzIGFueTtcbiAgLy8gUGFyYXBldCBwbGFuIHNpemUuIEl0IGRlZmF1bHRzIHRvIHRoZSBmdWxsIDguMDAgbSBlbnZlbG9wZSB3aWR0aCwgYnV0IGEgYnVpbGRpbmcgd2hvc2UgRkFTQ0lBXG4gIC8vIHR1cm5zIHRoZSBjb3JuZXIgaGFzIHRvIHB1bGwgdGhlIHJpbmcgaW46IHRoZSByZXR1cm4gYm9hcmQgaXMgdGhlIG91dGVybW9zdCB0aGluZyBvbiB0aGF0XG4gIC8vIGVsZXZhdGlvbiwgYW5kIGEgcGFyYXBldCBhdCB0aGUgc2FtZSArLTQuMDAgYm90aCBoaWRlcyBpdCBhbmQgcHV0cyB0d28gY28tZmFjaW5nIHBsYW5lcyBhdCB0aGVcbiAgLy8gc2FtZSB4LiBgcGFyYXBldFdgIGFuZCBgUFMuY3hgIGFyZSBob3cgYSBjb25maWcgYnV5cyB0aGF0IGNsZWFyYW5jZSB3aXRob3V0IGV2ZXJ5IHNpYmxpbmdcbiAgLy8gbW92aW5nLlxuICBjb25zdCBQVyA9IChHLnBhcmFwZXRXID8/IDguMCkgYXMgbnVtYmVyO1xuICBjb25zdCBQQ1ggPSAoUFMuY3ggPz8gMy44OCkgYXMgbnVtYmVyO1xuICAvLyBgcGFyYXBldEJveGVzYCByZXBsYWNlcyB0aGUgd2hvbGUgZGVmYXVsdCByaW5nIChmYXNjaWEgd2FsbCArIHRocmVlIHVwc3RhbmRzKSBmb3IgYSBwbGF0ZSB3aG9zZVxuICAvLyByb29mIGVkZ2UgaXMgbm90IHRoZSBzaGFyZWQgbW9kdWxlJ3MgLS0gYSBjYW5vcHkgc2xhYiB3aXRoIGl0cyBvd24gZmFzY2lhIGRlcHRocyBwZXIgc2lkZS5cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhHLnBhcmFwZXRCb3hlcyA/IFsuLi4oRy5wYXJhcGV0Qm94ZXMgYXMgbnVtYmVyW11bXSksIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pXSA6IFtcbiAgICBbMCwgRy5mYXNjaWFXYWxsLmN5LCBHLmZhc2NpYVdhbGwuY3osIFBXLCBHLmZhc2NpYVdhbGwuaCwgRy5mYXNjaWFXYWxsLmRdLFxuICAgIC8vIFNpZGUgYW5kIHJlYXIgdXBzdGFuZHMuIGBwYXJhcGV0U2lkZXNgIG92ZXJyaWRlcyB0aGUgZGVmYXVsdCAwLjQwIG0gdXBzdGFuZCBmb3IgYSBwbGF0ZSB3aG9zZVxuICAgIC8vIHBhcmFwZXQgaXMgYSBmdWxsLWhlaWdodCByaW5nIHJhdGhlciB0aGFuIGEgbG93IGtlcmI7IHRoZSBmcm9udCBpcyBhbHdheXMgdGhlIHRhbGxlciBmYWNlIGFuZFxuICAgIC8vIGNvbWVzIGluIHRocm91Z2ggYGZhc2NpYVdhbGxgLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNvdWxkIG5vdCBleHByZXNzLlxuICAgIFstUENYLCBQUy5jeSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCBQUy50aGljaywgUFMuaCwgU0YgKyAzLjIwXSxcbiAgICBbUENYLCBQUy5jeSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCBQUy50aGljaywgUFMuaCwgU0YgKyAzLjIwXSxcbiAgICBbMCwgUFMuY3ksIC0zLjM4LCBQVywgUFMuaCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3hHZW9tZXRyeSB2ZXJ0ZXggb3JkZXIgaXMgcHgsIG54LCBweSwgbnksIHB6LCBueiAtLSBmb3VyIHZlcnRpY2VzIHBlciBmYWNlIC0tIHNvIHRoZVxuICAgICAgLy8gb3V0d2FyZCBmYWNlIG9mIGEgYm9hcmQgaXMgYSBrbm93biBzbGljZSBvZiB0aGUgdXYgYXR0cmlidXRlLiBBIGJ1aWxkaW5nIGNhbiBjYXJyeSB0aGVcbiAgICAgIC8vIHNhbWUgbWFyayBvbiBtb3JlIHRoYW4gb25lIGVsZXZhdGlvbiAodGhpcyBraXQncyBob3NwaXRhbCBzaWducyBpdHMgZnJvbnQgQU5EIGl0cyBzaWRlKSxcbiAgICAgIC8vIHNvIGBib2FyZHNgIGxldHMgZWFjaCBib2FyZCBuYW1lIHRoZSBmYWNlIHRoYXQgc2FtcGxlcyB0aGUgZ3JhcGhpYyB3aGlsZSBldmVyeSBvdGhlciBmYWNlXG4gICAgICAvLyBzYW1wbGVzIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcy4gT25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBhbnkgbnVtYmVyIG9mXG4gICAgICAvLyBib2FyZHMgZmFjaW5nIGFueSB3YXkuXG4gICAgICBjb25zdCBGQUNFX1NMSUNFOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyAnK1gnOiAwLCAnLVgnOiA0LCAnK1knOiA4LCAnLVknOiAxMiwgJytaJzogMTYsICctWic6IDIwIH07XG4gICAgICBjb25zdCBib2FyZHMgPSAoZi5ib2FyZHMgYXMgYW55W10pID8/IFt7IHc6IGYudywgaDogZi5oLCBkOiAwLjEyLCBhdDogWzAsIGYuY3ksIGYuY3pdLCBmYWNlOiAnK1onIH1dO1xuICAgICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYmQgb2YgYm9hcmRzKSB7XG4gICAgICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYmQudywgYmQuaCwgYmQuZCA/PyAwLjEyKTtcbiAgICAgICAgY29uc3QgdXYgPSBiLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIC8vIGBwbGFpbmAgYm9hcmRzIGNhcnJ5IG5vIGdyYXBoaWMgYXQgYWxsOiBhIGJhbmQgdGhhdCB3cmFwcyB0aHJlZSBzaWRlcyBvZiBhIGNhbm9weSBzaG91bGRcbiAgICAgICAgLy8gcmVwZWF0IGl0cyBtYXJrIG9uIG5vbmUgb2YgdGhlIHJldHVybnMsIG9ubHkgb24gdGhlIGZhY2UgdGhhdCBmcm9udHMgdGhlIHN0cmVldC5cbiAgICAgICAgLy8gVGhlIHRlc3QgaXMgYW4gZXhwbGljaXQgYm9vbGVhbiwgTk9UIGEgc2VudGluZWwgaW5kZXggLS0gc2V0dGluZyB0aGUgc2xpY2Ugc3RhcnQgdG8gLTFcbiAgICAgICAgLy8gc3RpbGwgc2F0aXNmaWVkIGBpID49IHN0YXJ0ICYmIGkgPCBzdGFydCArIDRgIGZvciB2ZXJ0aWNlcyAwLCAxIGFuZCAyLCBzbyB0aHJlZSBjb3JuZXJzXG4gICAgICAgIC8vIG9mIHRoZSArWCBmYWNlIGtlcHQgc2FtcGxpbmcgdGhlIHdvcmRtYXJrIGJhbmQgYW5kIHNtZWFyZWQgYSBzdHJldGNoZWQgZ2hvc3Qgb2YgdGhlIG1hcmtcbiAgICAgICAgLy8gYWxvbmcgZXZlcnkgcmV0dXJuLlxuICAgICAgICBjb25zdCBwbGFpbiA9IGJkLnBsYWluID09PSB0cnVlO1xuICAgICAgICBjb25zdCBzdGFydEF0ID0gRkFDRV9TTElDRVtiZC5mYWNlID8/ICcrWiddO1xuICAgICAgICAvLyBgdTogW3UwLCB1MV1gIGxldHMgYSBib2FyZCBzYW1wbGUgYSBob3Jpem9udGFsIFNMSUNFIG9mIHRoZSBjYW52YXMgYmFuZCBpbnN0ZWFkIG9mIGFsbCBvZlxuICAgICAgICAvLyBpdCwgc28gdHdvIGJvYXJkcyB3aXRoIHR3byBkaWZmZXJlbnQgZ3JhcGhpY3MgKGEgYmx1ZSBib2FyZCB3aXRoIHdoaXRlIHRleHQsIGEgd2hpdGUgYm9hcmRcbiAgICAgICAgLy8gd2l0aCBibHVlIHRleHQpIHN0aWxsIHNoYXJlIG9uZSBjYW52YXMsIG9uZSBtYXRlcmlhbCBhbmQgb25lIGRyYXcgY2FsbC4gYHBsYWluVVZgIGlzIHRoZVxuICAgICAgICAvLyBjYW52YXMgcG9pbnQgdGhlIGJvYXJkJ3Mgb3RoZXIgZml2ZSBmYWNlcyBzYW1wbGU7IGl0IGRlZmF1bHRzIHRvIHRoZSBib3R0b20tbGVmdCBjb3JuZXJcbiAgICAgICAgLy8gYW5kIGEgYm9hcmQgd2hvc2UgZ3JvdW5kIGlzIG5vdCB0aGUgY2FudmFzIGJhY2tncm91bmQgbmFtZXMgaXRzIG93bi5cbiAgICAgICAgY29uc3QgdTAgPSBiZC51ID8gYmQudVswXSA6IDAsIHUxID0gYmQudSA/IGJkLnVbMV0gOiAxO1xuICAgICAgICBjb25zdCBwdSA9IGJkLnBsYWluVVYgPyBiZC5wbGFpblVWWzBdIDogMC4wMTUsIHB2ID0gYmQucGxhaW5VViA/IGJkLnBsYWluVVZbMV0gOiAwLjAxNTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgLy8gYGYudXZSZWN0YCBbdTAsIHYwLCB1MSwgdjFdIG5hbWVzIHRoZSBBVExBUyByZWdpb24gdGhlIGJhbmQgb2NjdXBpZXMgd2hlbiB0aGUgc2lnblxuICAgICAgICAgIC8vIHNoYXJlcyBpdHMgaW1hZ2Ugd2l0aCBvdGhlciB0ZXh0dXJlZCBwYXJ0czsgZGVmYXVsdCBpcyB0aGUgY2FudmFzIGNvbnRyYWN0ICh0b3AgODcuNSAlKS5cbiAgICAgICAgICBjb25zdCBSID0gKGYudXZSZWN0IGFzIG51bWJlcltdKSA/PyBbMCwgMC4xMjUsIDEsIDFdO1xuICAgICAgICAgIGlmICghcGxhaW4gJiYgaSA+PSBzdGFydEF0ICYmIGkgPCBzdGFydEF0ICsgNCkgdXYuc2V0WFkoaSwgUlswXSArICh1MCArIHV2LmdldFgoaSkgKiAodTEgLSB1MCkpICogKFJbMl0gLSBSWzBdKSwgUlsxXSArIHV2LmdldFkoaSkgKiAoUlszXSAtIFJbMV0pKTtcbiAgICAgICAgICBlbHNlIHV2LnNldFhZKGksIHB1LCBwdik7XG4gICAgICAgIH1cbiAgICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICBiLnRyYW5zbGF0ZShiZC5hdFswXSwgYmQuYXRbMV0sIGJkLmF0WzJdKTtcbiAgICAgICAgcGFydHMucHVzaChiKTtcbiAgICAgIH1cbiAgICAgIGcgPSBwYXJ0cy5sZW5ndGggPT09IDEgPyBwYXJ0c1swXSA6IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgfVxuICAgIC8vIGBjdXJ2ZWRgOiB0ZXh0dXJlZCBidWxnZWQgZnJvbnRzIChhbiBBVE0ga2lvc2sgZmFjZSkgdGhhdCByaWRlIHRoZSBTQU1FIG1hdGVyaWFsIGFuZFxuICAgIC8vIHN1Ym1pc3Npb24gYXMgdGhlIHNpZ24sIHNhbXBsaW5nIHRoZWlyIG93biByZWdpb24gb2YgdGhlIGJha2VkIGF0bGFzLiBFYWNoIGlzIGEgcGFydGlhbFxuICAgIC8vIGN5bGluZGVyIGFib3V0IFksIGFwZXggYXQgeiwgZWRnZXMgYXQgeiAtIGJ1bGdlLCBzcGFubmluZyB3IGJ5IGgsIFVWcyByZW1hcHBlZCB0byB1dlJlY3QuXG4gICAgaWYgKGYuY3VydmVkKSB7XG4gICAgICBjb25zdCBjcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbZ107XG4gICAgICBmb3IgKGNvbnN0IGMgb2YgZi5jdXJ2ZWQgYXMgYW55W10pIHtcbiAgICAgICAgY29uc3QgUiA9IChjLncgKiBjLncgLyA0ICsgYy5idWxnZSAqIGMuYnVsZ2UpIC8gKDIgKiBjLmJ1bGdlKTtcbiAgICAgICAgY29uc3QgaGFsZiA9IE1hdGguYXNpbihjLncgLyAyIC8gUik7XG4gICAgICAgIGNvbnN0IGN5bCA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KFIsIFIsIGMuaCwgYy5zZWcgPz8gMTIsIDEsIHRydWUsIC1oYWxmLCAyICogaGFsZik7XG4gICAgICAgIGNvbnN0IGN1diA9IGN5bC5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICBjb25zdCByID0gYy51dlJlY3QgYXMgbnVtYmVyW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3V2LmNvdW50OyBpKyspIGN1di5zZXRYWShpLCByWzBdICsgY3V2LmdldFgoaSkgKiAoclsyXSAtIHJbMF0pLCByWzFdICsgY3V2LmdldFkoaSkgKiAoclszXSAtIHJbMV0pKTtcbiAgICAgICAgY3lsLnRyYW5zbGF0ZShjLngsIGMueSwgYy56IC0gUik7XG4gICAgICAgIGNwYXJ0cy5wdXNoKGN5bCk7XG4gICAgICB9XG4gICAgICBnID0gbWVyZ2VHZW9zKGNwYXJ0cyk7XG4gICAgfVxuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICAvLyBUaGUgcGFuZSBpcyBub3QgYWx3YXlzIGNlbnRyZWQ6IGEgYnJhbmNoIHBsYW4gY2FuIHB1dCBpdHMgZ2xhemluZyB0byBvbmUgc2lkZSBvZiB0aGUgZW50cmFuY2UuXG4gIC8vIEF1dGhvcmVkIGNlbnRyZWQgd2hpbGUgaXRzIGZyYW1pbmcgc2F0IG9mZiB0byB0aGUgbGVmdCwgdGhlIHR3byByZWFkIGFzIHVucmVsYXRlZCBwYXJ0cy5cbiAgLy8gYGdsYXppbmdFeHRyYWAgZm9sZHMgZnVydGhlciBwYW5lcyAtLSBhIHNpZGUgd2luZG93LCBhIGNsZXJlc3RvcnkgLS0gaW50byB0aGUgU0FNRSBjb21wb25lbnQ6XG4gIC8vIG9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgaG93ZXZlciBtYW55IG9wZW5pbmdzIHRoZSBwbGF0ZSBzaG93cy5cbiAge1xuICAgIC8vIGBib3hlc2AgbGV0cyB0aGUgcGFuZSBiZSBzZXZlcmFsIFBBTkVMUyBpbiBvbmUgY29tcG9uZW50IC0tIGEgZml4ZWQgcnVuLCBhIHRyYW5zb20gbGlnaHRcbiAgICAvLyBvdmVyIHRoZSBkb29yIGJheSwgYW5kIGEgZ2FwIHdoZXJlIGEgZGVsaXZlcnkgaGF0Y2ggb3BlbnMgLS0gd2l0aG91dCBjb3N0aW5nIGEgZHJhdyBjYWxsXG4gICAgLy8gcGVyIHBhbmVsLiBgZ2xhemluZ0V4dHJhYCBpcyB0aGUgb2xkZXIgc2luZ2xlLXBhbmUtcGx1cy1leHRyYXMgZm9ybSBhbmQgc3RpbGwgd29ya3MuXG4gICAgY29uc3QgcGFuZSA9IEcuZ2xhemluZy5ib3hlc1xuICAgICAgPyBib3hlcyhHLmdsYXppbmcuYm94ZXMgYXMgbnVtYmVyW11bXSlcbiAgICAgIDogYm94QXQoRy5nbGF6aW5nLmN4ID8/IDAsIEcuZ2xhemluZy5jeSwgRy5nbGF6aW5nLmN6ID8/IDIuNTEsIEcuZ2xhemluZy53LCBHLmdsYXppbmcuaCwgRy5nbGF6aW5nLmQgPz8gMC4xMCk7XG4gICAgY29uc3QgZXh0cmEgPSAoRy5nbGF6aW5nRXh0cmEgPz8gW10pIGFzIG51bWJlcltdW107XG4gICAgYWRkKCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsXG4gICAgICAgIGV4dHJhLmxlbmd0aCA/IG1lcmdlR2VvcyhbcGFuZSwgLi4uZXh0cmEubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSldKSA6IHBhbmUsICdnbGFzcycpO1xuICB9XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogRW50cmFuY2UgZG9vcjogYSByZWFsIExFQUYgb24gYSByZWFsIEhJTkdFLCBub3QgYSByZWN0YW5nbGUgcGFpbnRlZCBpbnRvIHRoZSBnbGF6aW5nLiBUaGVcbiAgICogbGVhZiBpcyBidWlsdCBpbiBoaW5nZS1sb2NhbCBjb29yZGluYXRlcyAoeCBydW5zIGZyb20gdGhlIGhpbmdlIHN0aWxlIG91dHdhcmQpIHVuZGVyIGEgcGl2b3RcbiAgICogbm9kZSBhdCB0aGUgamFtYiwgc28gcm90YXRpbmcgdGhhdCBub2RlIGFib3V0ICtZIHN3aW5ncyB0aGUgZG9vci4gVHdvIG1lc2hlcyAtLSBzdGlsZXMgYW5kXG4gICAqIHJhaWxzIGluIHRoZSBmcmFtZSBtZXRhbCwgYSBwYW5lIGluIHRoZSBnbGFzcyAtLSBhbmQgdGhpcyBpcyB0aGUgb25lIHBhcnQgb2YgYW4gb3RoZXJ3aXNlXG4gICAqIHN0YXRpYyBzaGVsbCB0aGF0IGVhcm5zIGEgbmFtZWQgcGl2b3QuIFRoZSBsZWFmIHNpdHMgaW4gaXRzIG93biBkZXB0aCBiYW5kIGJldHdlZW4gdGhlXG4gICAqIGdsYXppbmcgYW5kIHRoZSBmaXhlZCBmcmFtZSBzbyBub3RoaW5nIG9uIGl0IGlzIGNvcGxhbmFyIHdpdGggYSBmaXhlZCBmYWNlIGF0IGFueSBhbmdsZS4gKi9cbiAgY29uc3QgcGl2b3ROb2RlczogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICBpZiAoRy5kb29yKSB7XG4gICAgY29uc3QgZCA9IEcuZG9vcjtcbiAgICBjb25zdCBoaW5nZSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgIGhpbmdlLm5hbWUgPSAnZG9vci1oaW5nZSc7XG4gICAgaGluZ2UucG9zaXRpb24uc2V0KGQuaGluZ2VbMF0sIGQuaGluZ2VbMV0sIGQuaGluZ2VbMl0pO1xuICAgIGhpbmdlLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAnYXJ0aWN1bGF0ZWQnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAnZG9vci1oaW5nZScsXG4gICAgICAgICAgICAgICBub3RlOiAnRW50cmFuY2UgZG9vciBzd2luZ3MgYWJvdXQgdGhlIGphbWIgc3RpbGUuIENsb3NlZCBhdCAwLCBvcGVucyBvdXR3YXJkIHRvd2FyZCArWiB3aXRoIG5lZ2F0aXZlIHlhdy4nIH0sXG4gICAgfTtcbiAgICByb290LmFkZChoaW5nZSk7XG4gICAgcGl2b3ROb2Rlcy5wdXNoKGhpbmdlKTtcbiAgICBjb25zdCB3ID0gZC53IGFzIG51bWJlciwgaCA9IGQuaCBhcyBudW1iZXIsIHkwID0gZC55MCBhcyBudW1iZXIsIHkxID0geTAgKyBoLCB5bSA9ICh5MCArIHkxKSAvIDI7XG4gICAgY29uc3Qgc3QgPSBkLnN0aWxlID8/IDAuMDgsIEQgPSBkLmRlcHRoID8/IDAuMTI7XG4gICAgLy8gYGZsaXBgIGhhbmdzIHRoZSBsZWFmIG9uIHRoZSBPVEhFUiBqYW1iOiBsb2NhbCAreCBydW5zIHRvd2FyZCAtWCBpbnN0ZWFkIG9mICtYLCBzbyB0aGVcbiAgICAvLyBoYW5kbGUgbGFuZHMgb24gdGhlIGNvcnJlY3QgZWRnZSBmb3IgYSBwbGF0ZSB3aG9zZSBkb29yIHB1bGwgaXMgb24gdGhlIGxlZnQuIEl0IGlzIGEgc2lnblxuICAgIC8vIG9uIHRoZSB4IGNvb3JkaW5hdGVzIHJhdGhlciB0aGFuIGEgbWlycm9yZWQgdHJhbnNmb3JtLCBiZWNhdXNlIGEgbmVnYXRpdmUgc2NhbGUgaW52ZXJ0c1xuICAgIC8vIGV2ZXJ5IG5vcm1hbCBvbiB0aGUgbGVhZiBhbmQgdGhlIGdsYXNzIHRoZW4gcmVuZGVycyBpbnNpZGUtb3V0LlxuICAgIGNvbnN0IHN4ID0gZC5mbGlwID8gLTEgOiAxO1xuICAgIGNvbnN0IGh4ID0gdyAtIChkLmhhbmRsZSA/IChkLmhhbmRsZVswXSA/PyAwLjE2KSA6IDApO1xuICAgIGNvbnN0IGxlYWZGcmFtZSA9IGJveGVzKFtcbiAgICAgIFtzeCAqIChzdCAvIDIpLCB5bSwgMCwgc3QsIGgsIERdLFxuICAgICAgW3N4ICogKHcgLSBzdCAvIDIpLCB5bSwgMCwgc3QsIGgsIERdLFxuICAgICAgW3N4ICogKHcgLyAyKSwgeTEgLSAwLjA0LCAwLCB3LCAwLjA4LCBEXSxcbiAgICAgIFtzeCAqICh3IC8gMiksIHkwICsgMC4xNiwgMCwgdywgMC4zMiwgRF0sXG4gICAgICBbc3ggKiAodyAvIDIpLCBkLnJhaWxZID8/IDEuMDUsIDAsIHcsIDAuMDcsIERdLFxuICAgICAgLy8gUHVsbCBoYW5kbGU6IGEgdmVydGljYWwgYmFyIG9uIHR3byBzdGFuZC1vZmZzLCBvbiB0aGUgc3dpbmdpbmcgZWRnZS4gVGhlIHBsYXRlIHNob3dzIG9uZVxuICAgICAgLy8gYW5kIGl0IGlzIHRoZSBkZXRhaWwgdGhhdCByZWFkcyBhIGdsYXNzIGxlYWYgYXMgYSBkb29yIHJhdGhlciB0aGFuIGFzIGFub3RoZXIgcGFuZS5cbiAgICAgIC4uLihkLmhhbmRsZSA/IFtcbiAgICAgICAgeyBjeWw6IFtzeCAqIGh4LCAoZC5oYW5kbGVbMV0gPz8gMS4wNSksIEQgLyAyICsgMC4wNSwgMC4wMTgsIGQuaGFuZGxlWzJdID8/IDAuODAsIDEwXSB9LFxuICAgICAgICBbc3ggKiBoeCwgKGQuaGFuZGxlWzFdID8/IDEuMDUpICsgKGQuaGFuZGxlWzJdID8/IDAuODApIC8gMiAtIDAuMDMsIEQgLyAyICsgMC4wMjUsIDAuMDM2LCAwLjAzNiwgMC4xMF0sXG4gICAgICAgIFtzeCAqIGh4LCAoZC5oYW5kbGVbMV0gPz8gMS4wNSkgLSAoZC5oYW5kbGVbMl0gPz8gMC44MCkgLyAyICsgMC4wMywgRCAvIDIgKyAwLjAyNSwgMC4wMzYsIDAuMDM2LCAwLjEwXSxcbiAgICAgIF0gOiBbXSksXG4gICAgXSBhcyBhbnkpO1xuICAgIGNvbnN0IGxlYWZQYW5lID0gYm94QXQoc3ggKiAodyAvIDIpLCAoeTAgKyAwLjMyICsgeTEgLSAwLjA4KSAvIDIsIDAsIHcgLSAyICogc3QsIHkxIC0gMC4wOCAtICh5MCArIDAuMzIpLCAwLjA0KTtcbiAgICBmb3IgKGNvbnN0IFtpZCwgbmFtZSwgZ2VvLCBtYXRdIG9mIFtcbiAgICAgIFsnZG9vci1sZWFmLWZyYW1lJywgJ0VudHJhbmNlIGRvb3IgbGVhZiBmcmFtZScsIGxlYWZGcmFtZSwgRy5mcmFtZU1hdGVyaWFsXSxcbiAgICAgIFsnZG9vci1sZWFmLWdsYXNzJywgJ0VudHJhbmNlIGRvb3IgbGVhZiBnbGFzcycsIGxlYWZQYW5lLCAnZ2xhc3MnXSxcbiAgICBdIGFzIFtzdHJpbmcsIHN0cmluZywgVEhSRUUuQnVmZmVyR2VvbWV0cnksIHN0cmluZ11bXSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0XSk7XG4gICAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgICAgbm9kZS5hZGQobWVzaCk7IGhpbmdlLmFkZChub2RlKTtcbiAgICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiBTaWRlIGZlYXR1cmU6IHNodXR0ZXIsIHNlcnZpY2UgZG9vciBvciBsb3V2cmUsIHBlciBwbGF0ZS4gU3RhbmRzIHByb3VkIG9mIHRoZSB3YWxsIGZhY2UgYnV0XG4gICAqIGRlbGliZXJhdGVseSBOT1Qgb3V0IHRvIHRoZSBwYXJhcGV0IHBsYW5lIGF0ICstNC4wMCAtLSBhIGZhY2UgYXQgZXhhY3RseSArLTQuMDAgd291bGQgYmVcbiAgICogY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyIGZhY2UsIHdoaWNoIHRoZSBib3VuZGluZy1ib3ggY29wbGFuYXJpdHkgY2hlY2tcbiAgICogZmxhZ3MgZXZlbiB0aG91Z2ggdGhlIHR3byBuZXZlciBvdmVybGFwIGluIFkuICovXG4gIGlmIChHLnNpZGVGZWF0dXJlKSBhZGQoJ3NpZGUtZmVhdHVyZScsIEcuc2lkZUZlYXR1cmUubmFtZSwgYm94ZXMoRy5zaWRlRmVhdHVyZS5ib3hlcyksIEcuc2lkZUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEZyb250IGZlYXR1cmU6IGNsYWRkaW5nIGJhbmQsIEFUTSBiYW5rLCB1cHBlci1zdG9yZXkgYmFuZCBvciBmb3JlY291cnQsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZnJvbnRGZWF0dXJlKSBhZGQoJ2Zyb250LWZlYXR1cmUnLCBHLmZyb250RmVhdHVyZS5uYW1lLCBib3hlcyhHLmZyb250RmVhdHVyZS5ib3hlcyksIEcuZnJvbnRGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIHRoaXJkIG1lcmdlZCBzbG90LCBmb3Igd2hhdGV2ZXIgdGhlIHBsYXRlIGhhcyB0aGF0IHRoZSB0d28gYWJvdmUgZG8gbm90IGNvdmVyIC0tIGEgcGFyYXBldFxuICAgKiBjb3BpbmcsIGEga2VyYiwgYSBmb3JlY291cnQgY29sdW1uIGJhc2UuIFNhbWUgcnVsZSBhcyB0aGUgb3RoZXJzOiBldmVyeXRoaW5nIGluIGl0IHNoYXJlcyBvbmVcbiAgICogbWF0ZXJpYWwgYW5kIGlzIHN1Ym1pdHRlZCBvbmNlLiAqL1xuICBpZiAoRy5leHRyYUZlYXR1cmUpIGFkZCgnZXh0cmEtZmVhdHVyZScsIEcuZXh0cmFGZWF0dXJlLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlLmJveGVzKSwgRy5leHRyYUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEEgZm91cnRoIG1lcmdlZCBzbG90LiBUd28gZmVhdHVyZXMgaW4gRElGRkVSRU5UIG1hdGVyaWFscyBjYW5ub3Qgc2hhcmUgYSBjb21wb25lbnQsIGFuZCBhXG4gICAqIHBsYXRlIHRoYXQgc2hvd3MgYSBnYWx2YW5pc2VkIHBsYW50IGRlY2sgQU5EIGEgcGFpbnRlZCBzdGVlbCBzZXJ2aWNlIGRvb3IgbmVlZHMgYm90aC4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlMikgYWRkKCdleHRyYS1mZWF0dXJlLTInLCBHLmV4dHJhRmVhdHVyZTIubmFtZSwgYm94ZXMoRy5leHRyYUZlYXR1cmUyLmJveGVzKSwgRy5leHRyYUZlYXR1cmUyLm1hdGVyaWFsKTtcblxuICAvKiBBIFRJTlRFRCBtZXJnZWQgc2xvdDogb25lIGNvbXBvbmVudCwgb25lIG1hdGVyaWFsLCBhbmQgYSBwZXItQk9YIGNvbG91ciB3cml0dGVuIGludG8gYSB2ZXJ0ZXhcbiAgICogY29sb3VyIGF0dHJpYnV0ZS4gVGhpcyBpcyBob3cgYSB0d28tY29sb3VyIGFwcGxpZWQgZ3JhcGhpYyAtLSBhIHZpbnlsIGRlY2FsIGJhbmQgb24gYSBzaG9wZnJvbnQsXG4gICAqIGEgcGFpbnRlZCBzdHJpcGUgb24gYSBrZXJiIC0tIHNoaXBzIHdpdGhvdXQgYSBtYXRlcmlhbCBwZXIgY29sb3VyLCBvbiBhIGtpdCB3aG9zZSBtYXRlcmlhbFxuICAgKiBjZWlsaW5nIGlzIHRoZSBheGlzIHRoZXNlIHByb3BzIGFyZSB0aWdodGVzdCBvbiBhZnRlciBkcmF3IGNhbGxzLlxuICAgKlxuICAgKiBUd28gcnVsZXMgbWFrZSBpdCBzYWZlLiBUaGUgbWF0ZXJpYWwgbXVzdCBiZSBXSElURSwgYmVjYXVzZSBhIHZlcnRleCBjb2xvdXIgTVVMVElQTElFUyB3aXRoXG4gICAqIG1hdGVyaWFsLmNvbG9yIGFuZCBhIHRpbnRlZCBiYXNlIHdvdWxkIGRhcmtlbiBldmVyeSB0b25lLiBBbmQgRVZFUlkgdmVydGV4IGhhcyB0byBiZSB3cml0dGVuLFxuICAgKiBiZWNhdXNlIHRoZSBzaGFkZXIgcmVhZHMgYSBtaXNzaW5nIGNvbG91ciBhdHRyaWJ1dGUgYXMgKDAsMCwwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBibGFjayAtLVxuICAgKiB0aGUgZmFpbHVyZSB0aGF0IHNoaXBwZWQgdGhlIHVib3NvdCdzIHdhbGxzIGFuZCBlaWdodCBib3VuZGFyeSBzdG9uZXMgYXMgc2lsaG91ZXR0ZXMuIEJvdGggYXJlXG4gICAqIHNhdGlzZmllZCBoZXJlIGJ5IGNvbnN0cnVjdGlvbjogdGhlIGF0dHJpYnV0ZSBpcyBmaWxsZWQgYm94IGJ5IGJveCBvdmVyIHRoZSB3aG9sZSBtZXJnZS4gVGhlXG4gICAqIHRvbmVzIGFyZSBMSU5FQVIsIG1hdGNoaW5nIGhvdyB0aHJlZS5qcyBtdWx0aXBsaWVzIHRoZW0uICovXG4gIGlmIChHLnRpbnRGZWF0dXJlKSB7XG4gICAgY29uc3QgdCA9IEcudGludEZlYXR1cmU7XG4gICAgY29uc3QgbGlzdCA9IHQuYm94ZXMgYXMgKG51bWJlcltdIHwgeyBjeWw6IG51bWJlcltdIH0pW107XG4gICAgY29uc3QgcGFydHMgPSBsaXN0Lm1hcCgoYikgPT4gYm94ZXMoW2JdKSk7XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzLm1hcCgoZykgPT4gZy5jbG9uZSgpKSk7XG4gICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50ICogMyk7XG4gICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgIGxldCB2ID0gMDtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjb25zdCBuID0gcGFydHNbaV0uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgICAgYy5zZXRIZXgodC50b25lc1tpICUgdC50b25lcy5sZW5ndGhdKTtcbiAgICAgIC8vIHNldEhleCBvbiBhIENvbG9yIGlzIHNSR0ItZGVjb2RlZCBieSB0aHJlZS5qcyB3aGVuIGNvbG9yTWFuYWdlbWVudCBpcyBvbiwgd2hpY2ggaXMgd2hhdCBhXG4gICAgICAvLyB2ZXJ0ZXggY29sb3VyIHdhbnRzOiB0aGUgbXVsdGlwbHkgaGFwcGVucyBpbiBsaW5lYXIgc3BhY2UuXG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb2xbKHYgKyBrKSAqIDNdID0gYy5yOyBjb2xbKHYgKyBrKSAqIDMgKyAxXSA9IGMuZzsgY29sWyh2ICsgaykgKiAzICsgMl0gPSBjLmI7IH1cbiAgICAgIHYgKz0gbjtcbiAgICAgIHBhcnRzW2ldLmRpc3Bvc2UoKTtcbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgIGNvbnN0IG1lc2ggPSBhZGQoJ3RpbnQtZmVhdHVyZScsIHQubmFtZSwgZ2VvLCB0Lm1hdGVyaWFsKTtcbiAgICAobWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkudmVydGV4Q29sb3JzID0gdHJ1ZTtcbiAgICAobWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkubmVlZHNVcGRhdGUgPSB0cnVlO1xuICB9XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLlxuICAgKlxuICAgKiBBbiBFTVBUWSBsaXN0IGlzIGEgbGVnaXRpbWF0ZSBhbnN3ZXIsIG5vdCBhIG1pc3NpbmcgY29uZmlnLiBJbnN0YW5jaW5nIG9uZSBjYXNpbmcgaXMgdGhlIHJpZ2h0XG4gICAqIGxldmVyIHdoZW4gYSBwbGF0ZSBzaG93cyB0aGUgc2FtZSBib3ggdHdvIG9yIHRocmVlIHRpbWVzOyBpdCBpcyB0aGUgd3Jvbmcgb25lIHdoZW4gdGhlIHBsYXRlXG4gICAqIHNob3dzIGdlbnVpbmVseSBkaWZmZXJlbnQgdW5pdHMgLS0gYSBob29kZWQgZHVjdCBydW4sIGEgd2FsbC10eXBlIGNvbmRlbnNlciB3aXRoIGEgc3F1YXJlIGZhblxuICAgKiBndWFyZCwgYSB0YWxsIGxvdXZyZWQgdG93ZXIgLS0gYW5kIHJlcGVhdGluZyBvbmUgY2FzaW5nIHRocmVlIHRpbWVzIGlzIHRoZW4gYSBzaW1wbGlmaWNhdGlvblxuICAgKiB0aGF0IGNvc3RzIGZpZGVsaXR5IHRvIHNhdmUgbm90aGluZy4gU3VjaCBhIHBsYW50IGRlY2sgY29tZXMgaW4gdGhyb3VnaCBgZXh0cmFGZWF0dXJlYCBhc1xuICAgKiBtZXJnZWQgZ2VvbWV0cnk6IHN0aWxsIE9ORSBkcmF3IGNhbGwsIGFuZCBldmVyeSB1bml0IGl0cyBvd24gc2hhcGUuICovXG4gIGlmICgoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10gPz8gW10pLmxlbmd0aCkge1xuICAgIC8qIGBjb25kZW5zZXJQYXJ0c2AgcmVwbGFjZXMgdGhlIGRlZmF1bHQgY2FzaW5nIHdpdGggYW4gYXV0aG9yZWQgdW5pdCBpbiB0aGUgU0FNRSBib3gvY3lsXG4gICAgICogZ3JhbW1hciwgaW4gdW5pdC1sb2NhbCBjb29yZGluYXRlcyAob3JpZ2luIG9uIHRoZSBkZWNrLCB0aGUgZ3JpbGxlIGZhY2luZyArWiBiZWZvcmUgeWF3KS5cbiAgICAgKiBBIHBhY2thZ2VkIHJvb2Z0b3AgdW5pdCBpcyBub3QgYSBwbGFpbiBib3g6IHRoZSBwbGF0ZSBzaG93cyBhIHJlY2Vzc2VkIGxvdXZyZSBwYW5lbCB3aXRoIGFcbiAgICAgKiBmYW4gZGlzYyBiZWhpbmQgaXQsIGEgbGlkZGVkIHRvcCB3aXRoIGEgcm91bmQgY293bCBvcGVuaW5nLCBhbmQgcGFuZWwgc2VhbXMgZG93biB0aGUgbG9uZ1xuICAgICAqIHNpZGUuIEFsbCBvZiBpdCBtZXJnZXMgaW50byB0aGUgT05FIGluc3RhbmNlZCBnZW9tZXRyeSwgc28gdGhlIGRldGFpbCBpcyBmcmVlIHBlciB1bml0LiAqL1xuICAgIGxldCB1bml0OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoRy5jb25kZW5zZXJQYXJ0cyAmJiBHLmNvbmRlbnNlclRvbmVzKSB7XG4gICAgICAvLyBQZXItcGFydCB0b25lczogYSBkYXJrIGJhY2sgcGxhdGUgYW5kIGZhbiBkaXNjIGJlaGluZCBsaWdodGVyIGJsYWRlcyBpcyB3aGF0IG1ha2VzIGEgbG91dnJlXG4gICAgICAvLyBncmlsbGUgcmVhZCBhcyBhbiBpbnRha2UgcmF0aGVyIHRoYW4gYXMgYSBwYW5lbCBvZiB0aGUgY2FzaW5nLiBUaGUgdGludCByaWRlcyBhIHZlcnRleFxuICAgICAgLy8gY29sb3VyIG9uIHRoZSBwbGFudCBtYXRlcmlhbCwgYW5kIGV2ZXJ5IG90aGVyIG1lc2ggb24gdGhhdCBtYXRlcmlhbCBpcyBmaWxsZWQgd2hpdGUgYmVsb3cuXG4gICAgICB1bml0ID0gdG9uZWRCb3hlcyhHLmNvbmRlbnNlclBhcnRzIGFzIChudW1iZXJbXSB8IHsgY3lsOiBudW1iZXJbXSB9KVtdLCBHLmNvbmRlbnNlclRvbmVzIGFzIG51bWJlcltdKTtcbiAgICB9IGVsc2UgaWYgKEcuY29uZGVuc2VyUGFydHMpIHtcbiAgICAgIHVuaXQgPSBib3hlcyhHLmNvbmRlbnNlclBhcnRzIGFzIChudW1iZXJbXSB8IHsgY3lsOiBudW1iZXJbXSB9KVtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICAgIGJveEF0KDAsIDAuNDYsIDAsIDAuOTUsIDAuNzIsIDAuODUpLFxuICAgICAgICBjeWxBdCgwLCAwLjg3LCAwLCAwLjMwLCAwLjEwLCAxNiksXG4gICAgICBdO1xuICAgICAgZm9yIChjb25zdCBmeCBvZiBbLTAuNCwgMC40XSkgZm9yIChjb25zdCBmeiBvZiBbLTAuMzUsIDAuMzVdKSBwYXJ0cy5wdXNoKGJveEF0KGZ4LCAwLjA1LCBmeiwgMC4wOCwgMC4xMCwgMC4wOCkpO1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgfVxuICAgIC8vIEFuIG9wdGlvbmFsIGZvdXJ0aCBudW1iZXIgaXMgYSBVTklGT1JNIFNDQUxFLCBzbyBvbmUgaW5zdGFuY2VkIHVuaXQgY2FuIHN0YW5kIGluIGZvciBhIHBsYXRlXG4gICAgLy8gdGhhdCBzaG93cyBvbmUgbGFyZ2UgY29uZGVuc2VyIGJlc2lkZSB0d28gc21hbGwgb25lcyB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICAgIGNvbnN0IG1hdHMgPSAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHosIHlhdywgc10pID0+XG4gICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIChHLmNvbmRlbnNlclkgPz8gMy42MCkgYXMgbnVtYmVyLCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhzID8/IDEsIHMgPz8gMSwgcyA/PyAxKSxcbiAgICAgICkpO1xuICAgIC8vIFRoZSBwbGFudCBtYXRlcmlhbCBpcyBDT05GSUdVUkFCTEUsIG5vdCBoYXJkLWNvZGVkLiBSZWZlcmVuY2luZyBhICdnYWx2JyBpZCB0aGF0IGEgY29uZmlnXG4gICAgLy8gZG9lcyBub3QgZGVmaW5lIHNpbGVudGx5IGhhbmRzIEluc3RhbmNlZE1lc2ggYW4gdW5kZWZpbmVkIG1hdGVyaWFsLCB0aHJlZS5qcyBzdWJzdGl0dXRlcyBhXG4gICAgLy8gZGVmYXVsdCwgYW5kIHRoZSBwcm9wIHNoaXBzIG9uZSBtYXRlcmlhbCBvdmVyIGl0cyBjZWlsaW5nIHdpdGggbm90aGluZyBpbiB0aGUgY29uZmlnIHRvXG4gICAgLy8gZXhwbGFpbiB0aGUgZXh0cmEuXG4gICAgYWRkSW5zdCgncGxhbnQtY29uZGVuc2VycycsICdSb29mdG9wIGNvbmRlbnNlciB1bml0cycsIHVuaXQsIEcucGxhbnRNYXRlcmlhbCA/PyAnZ2FsdicsIG1hdHMpO1xuICB9XG5cbiAgLyogT3B0aW9uYWwgaW5zdGFuY2VkIGV4dHJhOiBjYW5vcHkgcGxhdGVzLCBwaWxhc3RlcnMgb3IgZm9yZWNvdXJ0IGNvbHVtbnMsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZXh0cmFTeXN0ZW0pIHtcbiAgICBjb25zdCBlID0gRy5leHRyYVN5c3RlbTtcbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGUua2luZCA9PT0gJ3BsYXRlJykge1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhbYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCksIGN5bEF0KDAsIC1lLmggLyAyIC0gMC4wMTUsIDAsIDAuMDg1LCAwLjAzLCAxMildKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9IGJveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpO1xuICAgIH1cbiAgICBjb25zdCBtYXRzID0gKGUuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeSwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgeSwgeikpO1xuICAgIGFkZEluc3QoZS5pZCwgZS5uYW1lLCB1bml0LCBlLm1hdGVyaWFsLCBtYXRzLCBlLnRvbmVzID8gbWF0cy5tYXAoKF8sIGkpID0+IGUudG9uZXNbaSAlIGUudG9uZXMubGVuZ3RoXSkgOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgLyogVmVydGV4LWNvbG91ciBmaWxsLWluIHJ1bnMgTEFTVCwgb3ZlciBldmVyeSBtZXNoIHRoYXQgZXhpc3RzLiBJdCB1c2VkIHRvIHJ1biByaWdodCBhZnRlciB0aGVcbiAgICogZGVjayBhbmQgdGhlIHBsYW50IHdlcmUgYWRkZWQsIHNvIGFueSBsYXRlciBtZXNoIG9uIHRoZSBzYW1lIG1hdGVyaWFsIC0tIE1ha3JvJ3MgY29uY3JldGVcbiAgICogY2Fub3B5IGFuZCBwbGludGggb24gdGhlIHRvbmVkIGRlY2sgbWF0ZXJpYWwgLS0gaGFkIG5vIGNvbG91ciBhdHRyaWJ1dGUgYW5kIHJlbmRlcmVkIEJMQUNLLiAqL1xuICBpZiAodG9uZWREZWNrKSBmaW5pc2hWZXJ0ZXhDb2xvcnMobWF0ZXJpYWxzLCBtZXNoZXMsICdkZWNrJyk7XG4gIGlmIChHLmNvbmRlbnNlclRvbmVzICYmIChHLmNvbmRlbnNlcnMgYXMgbnVtYmVyW11bXSA/PyBbXSkubGVuZ3RoKSBmaW5pc2hWZXJ0ZXhDb2xvcnMobWF0ZXJpYWxzLCBtZXNoZXMsIEcucGxhbnRNYXRlcmlhbCA/PyAnZ2FsdicpO1xuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcywgcGl2b3ROb2RlcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lICYgeyBwaXZvdE5vZGVzOiBUSFJFRS5PYmplY3QzRFtdIH07XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgY29uc3Qgc3JnYiA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlO1xuXG4gIC8vIEEgQkFLRUQgc2lnbiAtLSB0aGUgZmFjZSBpbWFnZSBjb21wb3NlZCBvbmNlIGZyb20gYSByZWFsIGZvbnQgYW5kIHZlY3RvciBtYXJrcyBhbmQgZW1iZWRkZWRcbiAgLy8gYXMgYSBXZWJQIGRhdGEgVVJJIC0tIGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBvbiBldmVyeSBtYWNoaW5lJ3NcbiAgLy8gZm9udCBmYWxsYmFjay4gTGFpZCBvdXQgdG8gdGhlIHNhbWUgVVYgY29udHJhY3QgYXMgdGhlIGNhbnZhczogdGhlIHRvcCA4Ny41ICUgaXMgdGhlIGJhbmRcbiAgLy8gdGhlICtaIGZhY2Ugc2FtcGxlcyBhbmQgdGhlIGJvdHRvbS1sZWZ0IGNvcm5lciBpcyB0aGUgcGxhaW4gZmllbGQgZXZlcnkgb3RoZXIgZmFjZSBzYW1wbGVzLlxuICAvLyBBc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZSBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGU7IHRoZSBjYW52YXMgb3BzIGJlbG93IGFyZSB0aGVcbiAgLy8gZGVjb2RlIEZBTExCQUNLIG9ubHkuXG4gIGlmIChnLmJha2VkKSB7XG4gICAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoZy5iYWtlZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICgpID0+IHtcbiAgICAgIGNvbnN0IGMgPSBkcmF3RmFzY2lhQ2FudmFzKGcpO1xuICAgICAgaWYgKCFjKSByZXR1cm47XG4gICAgICBjb25zdCB0ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoYyk7XG4gICAgICBpZiAoc3JnYikgdC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIHQuYW5pc290cm9weSA9IDQ7XG4gICAgICBtYXRlcmlhbC5tYXAgPSB0O1xuICAgICAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH0pO1xuICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICBiYWtlZC5hbmlzb3Ryb3B5ID0gNDtcbiAgICBiYWtlZC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbWF0ZXJpYWwubWFwID0gYmFrZWQ7XG4gICAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgY2FudmFzID0gZHJhd0Zhc2NpYUNhbnZhcyhnKTtcbiAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgaWYgKHNyZ2IpIHRleC5jb2xvclNwYWNlID0gc3JnYjtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFdoaXRlIGJhc2Ugc28gdGhlIGNhbnZhcyBzaG93cyBhcyBkcmF3biByYXRoZXIgdGhhbiB0aW50ZWQgLS0gdGhlIG1lYXN1cmVkIGZhc2NpYSBjb2xvdXIgaXNcbiAgLy8gYWxyZWFkeSBwYWludGVkIGludG8gdGhlIGNhbnZhcyBiYWNrZ3JvdW5kLlxuICBtYXRlcmlhbC5jb2xvci5zZXRIZXgoMHhmZmZmZmYpO1xuICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIGRyYXdGYXNjaWFDYW52YXMoZzogYW55KTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgLy8gQSByb3VuZCBzaWduIG5lZWRzIGEgU1FVQVJFIGNhbnZhczogdGhlIGN5bGluZGVyIGNhcCBtYXBzIHRoZSBjaXJjbGUgaW50byB0aGUgdW5pdCBzcXVhcmUsXG4gIC8vIHNvIGEgMjA0OHgzMjAgc3RyaXAgd291bGQgc3F1YXNoIHRoZSBtYXJrIGZsYXQuIEEgcmVjdGFuZ3VsYXIgZmFzY2lhIGtlZXBzIHRoZSB3aWRlIHN0cmlwLFxuICAvLyB3aGVyZSB0aGUgYm90dG9tIDEyLjUlIGlzIHRoZSBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugc2FtcGxlcy5cbiAgY29uc3Qgc3F1YXJlID0gISFnLnNxdWFyZTtcbiAgY29uc3QgVyA9IHNxdWFyZSA/IDUxMiA6IChnLnNpemU/LlswXSA/PyAyMDQ4KSwgSCA9IHNxdWFyZSA/IDUxMiA6IChnLnNpemU/LlsxXSA/PyAzMjApO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gVzsgY2FudmFzLmhlaWdodCA9IEg7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gc3F1YXJlID8gSCA6IEggKiAoZy5iYW5kRnJhYyA/PyAwLjg3NSk7XG5cbiAgY29uc3QgZml0ID0gKHRleHQ6IHN0cmluZywgZm9udDogc3RyaW5nLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBjeTogbnVtYmVyLCBmaWxsOiBzdHJpbmcsIHN0cm9rZUNvbD86IHN0cmluZywgc3Ryb2tlVz86IG51bWJlcikgPT4ge1xuICAgIGN0eC5mb250ID0gZm9udDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICBjb25zdCB3ID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIGNvbnN0IHMgPSAoeDEgLSB4MCkgLyB3O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4MCwgMCk7XG4gICAgY3R4LnNjYWxlKHMsIDEpO1xuICAgIGlmIChzdHJva2VDb2wpIHsgY3R4LmxpbmVKb2luID0gJ3JvdW5kJzsgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sOyBjdHgubGluZVdpZHRoID0gKHN0cm9rZVcgPz8gNikgLyBzOyBjdHguc3Ryb2tlVGV4dCh0ZXh0LCAwLCBjeSk7IH1cbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgMCwgY3kpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBvcCBvZiBnLm9wcyBhcyBhbnlbXSkge1xuICAgIGlmIChvcC50eXBlID09PSAncmVjdCcpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY29uc3QgeCA9IG9wLnggKiBXLCB5ID0gb3AueSAqIGJhbmQsIHcgPSBvcC53ICogVywgaCA9IG9wLmggKiBiYW5kLCByID0gKG9wLnIgPz8gMCkgKiBiYW5kO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpOyBjdHgubGluZVRvKHggKyB3IC0gciwgeSk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5LCB4ICsgdywgeSArIHIpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3LCB5ICsgaCAtIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSArIGgsIHggKyB3IC0gciwgeSArIGgpO1xuICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgaCk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoLCB4LCB5ICsgaCAtIHIpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgfSBlbHNlIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhvcC5jeCAqIFcsIG9wLmN5ICogYmFuZCwgb3AuciAqIGJhbmQsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAncG9seScpIHtcbiAgICAgIC8vIEFuIGFyYml0cmFyeSBwb2x5Z29uIGluIG5vcm1hbGlzZWQgY2FudmFzIGNvb3JkcywgZm9yIGEgbWFyayBhIGZvbnQgY2Fubm90IHNldCAtLSBhXG4gICAgICAvLyBsaWdodG5pbmcgYm9sdCwgYSBjaGV2cm9uLCBhIGxlYWYuIFBvaW50cyBhcmUgW3gsIHldIHdpdGggeCBhIGZyYWN0aW9uIG9mIHRoZSBjYW52YXMgd2lkdGhcbiAgICAgIC8vIGFuZCB5IGEgZnJhY3Rpb24gb2YgdGhlIGJhbmQgaGVpZ2h0LlxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjb25zdCBwdHMgPSBvcC5wb2ludHMgYXMgbnVtYmVyW11bXTtcbiAgICAgIGN0eC5tb3ZlVG8ocHRzWzBdWzBdICogVywgcHRzWzBdWzFdICogYmFuZCk7XG4gICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgY3R4LmxpbmVUbyhwdHNbaV1bMF0gKiBXLCBwdHNbaV1bMV0gKiBiYW5kKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGZpdChvcC50ZXh0LCBgJHtvcC5zdHlsZSA/PyAnYm9sZCd9ICR7TWF0aC5yb3VuZChvcC5zaXplICogYmFuZCl9cHggJHtvcC5mYW1pbHkgPz8gJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnfWAsXG4gICAgICAgIG9wLngwICogVywgb3AueDEgKiBXLCBvcC5jeSAqIGJhbmQsIG9wLmZpbGwsIG9wLnN0cm9rZSwgb3Auc3Ryb2tlVyA/IG9wLnN0cm9rZVcgKiBiYW5kIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2xhemluZyBncmFwaGljICovXG5cbi8qKiBBIGJ1aWxkaW5nIGlzIGFuIGV4dGVyaW9yIHNoZWxsIHdpdGggbm8gaW50ZXJpb3IsIHNvIGEgcGxhaW4gdGludGVkIHBhbmUgcmVhZHMgYXMgYSBibGluZCBzbGFiXG4gKiAgLS0gb3IsIGRhcmsgZW5vdWdoLCBhcyBhIGhvbGUuIGBncmFwaGljLmdsYXNzYCBwYWludHMgYSBkZS1saXQgaW50ZXJpb3IgdmlldyBpbnRvIHRoZSBnbGF6aW5nOlxuICogIG9uZSBiYWtlZCBpbWFnZSBwcm9qZWN0ZWQgYnkgV09STEQgeC95IG92ZXIgYHJlY3RgIFt4MCwgeTAsIHgxLCB5MV0gc28gaXQgbGluZXMgdXAgYWNyb3NzIHRoZVxuICogIHdpbmRvdyBwYW5lLCB0aGUgdHJhbnNvbSBhbmQgdGhlIGRvb3IgbGVhdmVzLCB3aGljaCBhcmUgc2VwYXJhdGUgYm94ZXMgaW4gb25lIG1lcmdlZCBtZXNoLlxuICogIEFzc2lnbmVkIGFmdGVyIG1hdGVyaWFsIGNvbnN0cnVjdGlvbjsgdGhlIG1hdGVyaWFsIHN0YXlzIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNwZWMuICovXG5mdW5jdGlvbiBhcHBseUdsYXNzR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBnID0gKENPTkZJRy5ncmFwaGljIGFzIGFueSk/LmdsYXNzO1xuICAvLyBOb2RlIGhhcyBubyBgZG9jdW1lbnRgLCBhbmQgdGhhaWtpdCdzIGNvcGxhbmFyIGNoZWNrZXIgYW5kIHBhcnQgbWFuaWZlc3QgZXZhbHVhdGUgdGhpc1xuICAvLyBtb2R1bGUgdGhlcmU6IFRleHR1cmVMb2FkZXIgd291bGQgdGhyb3csIHNvIHRoZSBnbGF6aW5nIGtlZXBzIGl0cyBmbGF0IGZhbGxiYWNrIGFsYmVkby5cbiAgaWYgKCFnIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgW3gwLCB5MCwgeDEsIHkxXSA9IGcucmVjdCBhcyBudW1iZXJbXTtcbiAgLy8gYGFsc29gIGV4dGVuZHMgdGhlIHByb2plY3Rpb24gdG8gcGFuZXMgdGhhdCBhcmUgTk9UIGluIHRoZSBnbGF6aW5nIGNvbXBvbmVudCAtLSBhIGhpbmdlZCBkb29yXG4gIC8vIGxlYWYsIHdob3NlIGdlb21ldHJ5IGlzIGF1dGhvcmVkIGluIEhJTkdFLWxvY2FsIGNvb3JkaW5hdGVzLCBzbyBpdCBuYW1lcyB0aGUgb2Zmc2V0IGZyb20gdGhlXG4gIC8vIGhpbmdlIHRvIHRoZSB3b3JsZCBvcmlnaW4gYW5kIHRoZSBzYW1lIHdvcmxkIHJlY3QgdGhlbiBsYW5kcyBvbiBpdC4gV2l0aG91dCB0aGlzIHRoZSBsZWFmIGlzXG4gIC8vIHRoZSBvbmUgcGFuZSBpbiB0aGUgc2hvcGZyb250IHdpdGggbm8gaW50ZXJpb3IgYmVoaW5kIGl0LCB3aGljaCByZWFkcyBhcyBhIGJsaW5kIHBhbmVsIGluXG4gIC8vIHRoZSBtaWRkbGUgb2YgYSB3aW5kb3cuXG4gIGNvbnN0IHRhcmdldHMgPSBbeyBpZDogJ3Nob3Bmcm9udC1nbGF6aW5nJywgb2ZmOiBbMCwgMCwgMF0gfSwgLi4uKChnLmFsc28gPz8gW10pIGFzIGFueVtdKV07XG4gIGxldCBtYXRlcmlhbDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwgfCBudWxsID0gbnVsbDtcbiAgZm9yIChjb25zdCB0IG9mIHRhcmdldHMpIHtcbiAgICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uW3QuaWRdO1xuICAgIGlmICghbWVzaCkgY29udGludWU7XG4gICAgY29uc3QgbSA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gICAgaWYgKCFtKSBjb250aW51ZTtcbiAgICBtYXRlcmlhbCA9IG1hdGVyaWFsID8/IG07XG4gICAgY29uc3QgZ2VvID0gbWVzaC5nZW9tZXRyeSBhcyBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBjb25zdCBwb3MgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgIGNvbnN0IG9mZiA9ICh0Lm9mZiA/PyBbMCwgMCwgMF0pIGFzIG51bWJlcltdO1xuICAgIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwb3MuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7XG4gICAgICB1dltpICogMl0gPSAocG9zLmdldFgoaSkgKyBvZmZbMF0gLSB4MCkgLyAoeDEgLSB4MCk7XG4gICAgICB1dltpICogMiArIDFdID0gKHBvcy5nZXRZKGkpICsgb2ZmWzFdIC0geTApIC8gKHkxIC0geTApO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgfVxuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG4gIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKGcuYmFrZWQpO1xuICBpZiAoc3JnYikgdGV4LmNvbG9yU3BhY2UgPSBzcmdiO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gVGhlIGltYWdlIGNhcnJpZXMgdGhlIHRpbnQ7IGEgY29sb3VyZWQgYmFzZSB3b3VsZCBhcHBseSBpdCB0d2ljZS5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgaWYgKGcucm91Z2huZXNzICE9PSB1bmRlZmluZWQpIG1hdGVyaWFsLnJvdWdobmVzcyA9IGcucm91Z2huZXNzO1xuICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3YWxsIHJlbmRlciBncmFwaGljICovXG5cbi8qKiBBIHJlbmRlcmVkIGNvbmNyZXRlIHdhbGwgaXMgbm90IGEgZmxhdCBjb2xvdXIuIEV2ZXJ5IHBsYXRlIGluIHRoaXMgc2V0IHNob3dzIHRoZSBzYW1lIHRoaW5nIC0tXG4gKiAgdmVydGljYWwgcmFpbiBzdHJlYWtpbmcgb2ZmIHRoZSBjb3BpbmcsIHBhdGNoeSBmbG9hdCBtYXJrcywgYSBkYXJrZXIgYmFuZCB3aGVyZSB0aGUgd2FsbCBtZWV0c1xuICogIHRoZSBncm91bmQgLS0gYW5kIGEgd2FsbCBhdXRob3JlZCBhcyBvbmUgYWxiZWRvIHJlYWRzIGFzIHBhaW50ZWQgY2FyZCBuZXh0IHRvIHRoZSBzaG9wZnJvbnQnc1xuICogIHJlYWwgZGV0YWlsLiBgZ3JhcGhpYy53YWxsYCBwYWludHMgYSBTRUFNTEVTUyB0aWxlIG9uY2UgYW5kIHJlcGVhdHMgaXQgb3ZlciB0aGUgd2FsbCBtZXNoZXMuXG4gKlxuICogIEl0IGlzIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzLCBzbyB0aGUgbWF0ZXJpYWwgc3RheXMgYHRleHR1cmVsZXNzYCBpbiB0aGUgc3BlYzogd2hhdCB0aGF0XG4gKiAgZGVjbGFyYXRpb24gc2tpcHMgaXMgY3JlYXRlU2N1bHB0TWF0ZXJpYWwncyBmaXZlLWNhbnZhcyBwcm9jZWR1cmFsIHNldCwgd2hpY2ggY29zdHMgdGhlIHNxdWFyZVxuICogIG9mIGl0cyByZXNvbHV0aW9uIGFuZCBkaXNjYXJkcyB0aGUgbWVhc3VyZWQgYWxiZWRvLiBPbmUgdGlsZSBkcmF3biBvbmNlIGNvc3RzIG1pbGxpc2Vjb25kcyBhbmRcbiAqICBrZWVwcyB0aGUgYWxiZWRvLCBiZWNhdXNlIHRoZSB0aWxlIGlzIGF1dGhvcmVkIGluIE1VTFRJUExJRVIgc3BhY2UgLS0gbWlkLWdyZXkgMTI4IGlzIFwibGVhdmUgdGhlXG4gKiAgbWVhc3VyZWQgY29sb3VyIGFsb25lXCIgLS0gYW5kIGlzIGFwcGxpZWQgYXMgYG1hcGAgb3ZlciB0aGUgbWF0ZXJpYWwncyBvd24gY29sb3VyLlxuICpcbiAqICBVVnMgYXJlIG1ldHJpYyBhbmQgV09STEQtUExBTkFSLCBjaG9zZW4gcGVyIHZlcnRleCBvZmYgdGhlIGZhY2Ugbm9ybWFsOiBhbiBYLWZhY2luZyBmYWNlIGlzXG4gKiAgcHJvamVjdGVkICh6LCB5KSwgYSBaLWZhY2luZyBmYWNlICh4LCB5KSwgYSBZLWZhY2luZyBmYWNlICh4LCB6KS4gQm94IFVWcyB3b3VsZCBzdHJldGNoIG9uZVxuICogIHRpbGUgb3ZlciBlYWNoIGZhY2UsIHdoaWNoIHB1dHMgYSA3LW1ldHJlLXdpZGUgc3RyZWFrIG9uIHRoZSBzaWRlIHdhbGwgYW5kIGEgMC4yNC1tZXRyZS13aWRlIG9uZVxuICogIG9uIHRoZSBwYXJhcGV0IGNvcGluZy4gKi9cbmZ1bmN0aW9uIGFwcGx5V2FsbEdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgZ3IgPSBDT05GSUcuZ3JhcGhpYyBhcyBhbnk7XG4gIGlmICghZ3IgfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICAvLyBgZ3JhcGhpYy53YWxsYCBpcyB0aGUgb3JpZ2luYWwgc2luZ2xlIGVudHJ5OyBgZ3JhcGhpYy53YWxsc2AgaXMgYSBsaXN0IG9mIGZ1cnRoZXIgZW50cmllcyBpblxuICAvLyB0aGUgc2FtZSBzaGFwZSwgb25lIHBlciBtYXRlcmlhbCB0aGF0IGNhcnJpZXMgaXRzIG93biB0aWxlIC0tIGEgZ3JpbWUgdGlsZSBvbiB0aGUgY29waW5nIGFuZFxuICAvLyB0aGUgc2h1dHRlciBob29kLCBhIGRpcnQgdGlsZSBvbiB0aGUgeWVsbG93IHN1cnJvdW5kLCBhIGdhbHZhbmlzZWQgc3BhbmdsZSBvbiB0aGUgcGxhbnQuXG4gIGNvbnN0IGVudHJpZXMgPSBbZ3Iud2FsbCwgLi4uKChnci53YWxscyA/PyBbXSkgYXMgYW55W10pXS5maWx0ZXIoQm9vbGVhbik7XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGlmICghcnQpIHJldHVybjtcbiAgZm9yIChjb25zdCBnIG9mIGVudHJpZXMpIGFwcGx5T25lV2FsbEdyYXBoaWMocnQsIGcpO1xufVxuXG5mdW5jdGlvbiBhcHBseU9uZVdhbGxHcmFwaGljKHJ0OiBQcm9jZWR1cmFsTW9kZWxSdW50aW1lLCBnOiBhbnkpOiB2b2lkIHtcbiAgY29uc3QgdGlsZSA9IGcudGlsZSA/PyAyLjU7XG4gIGNvbnN0IE4gPSBnLnNpemUgPz8gNTEyO1xuICAvLyBgY2xlYW5gIGlzIGEgd29ybGQtc3BhY2UgWFkgcmVjdGFuZ2xlIHdob3NlIHZlcnRpY2VzIGFyZSBwaW5uZWQgdG8gb25lIHRleGVsIHRoZSB0aWxlIGxlYXZlc1xuICAvLyB1bnRvdWNoZWQgLS0gdGhlIGRlbGl2ZXJ5IGNvdW50ZXIgaGFzIHRvIHN0YXkgc3BvdGxlc3MgeWVsbG93IHdoaWxlIHRoZSBsaW50ZWwgYW5kIGphbWJzIGl0XG4gIC8vIHNoYXJlcyBhIG1hdGVyaWFsIHdpdGggdGFrZSB0aGUgd2VhdGhlci4gVGhlIHBpbiBsYW5kcyBvbiBhIGNvcm5lciB0aGUgY2FudmFzIGZpbGxzIHdpdGggdGhlXG4gIC8vIGJhc2UgdmFsdWUgYWZ0ZXIgZXZlcnkgbWFyayBpcyBkcmF3biAoYWxsIGZvdXIgY29ybmVycywgc2luY2UgdGhlIHRpbGUgd3JhcHMpLlxuICBjb25zdCBjbGVhbiA9IGcuY2xlYW4gYXMgbnVtYmVyW10gfCB1bmRlZmluZWQ7XG4gIGNvbnN0IHBpbiA9IDYgLyBOO1xuICBsZXQgdGV4OiBUSFJFRS5UZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gIGZvciAoY29uc3QgaWQgb2YgKGcubWVzaGVzIGFzIHN0cmluZ1tdKSkge1xuICAgIGNvbnN0IG1lc2ggPSBydC5tZXNoZXM/LltpZF07XG4gICAgaWYgKCFtZXNoKSBjb250aW51ZTtcbiAgICBjb25zdCBnZW8gPSBtZXNoLmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGNvbnN0IHBvcyA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGlmICghcG9zIHx8ICFucm0pIGNvbnRpbnVlO1xuICAgIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwb3MuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvcy5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcG9zLmdldFgoaSksIHkgPSBwb3MuZ2V0WShpKSwgeiA9IHBvcy5nZXRaKGkpO1xuICAgICAgaWYgKGNsZWFuICYmIHggPj0gY2xlYW5bMF0gJiYgeCA8PSBjbGVhblsyXSAmJiB5ID49IGNsZWFuWzFdICYmIHkgPD0gY2xlYW5bM10pIHtcbiAgICAgICAgdXZbaSAqIDJdID0gcGluOyB1dltpICogMiArIDFdID0gcGluO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHo7IHYgPSB5OyB9XG4gICAgICBlbHNlIGlmIChheiA+PSBheSkgeyB1ID0geDsgdiA9IHk7IH1cbiAgICAgIGVsc2UgeyB1ID0geDsgdiA9IHo7IH1cbiAgICAgIHV2W2kgKiAyXSA9IHUgLyB0aWxlOyB1dltpICogMiArIDFdID0gdiAvIHRpbGU7XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGlmICghdGV4KSB7XG4gICAgICBjb25zdCBzcmdiID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2U7XG4gICAgICBpZiAoZy5pbWFnZSkge1xuICAgICAgICAvLyBBIEJBS0VEIHRpbGUgLS0gYSBzZWFtbGVzcywgbXVsdGlwbGllci1ub3JtYWxpc2VkIGltYWdlIGVtYmVkZGVkIGFzIGEgZGF0YSBVUkksIHRoZSB3YXlcbiAgICAgICAgLy8gdGhlIGZhc2NpYSBpcyAtLSBmb3IgYSBzdXJmYWNlIHdob3NlIGZpbmlzaCBhIGRyYXduIGNhbnZhcyBjYW5ub3QgcmVhY2g6IGdhbHZhbmlzZWRcbiAgICAgICAgLy8gc3BhbmdsZS4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGUgaGFybmVzcyB3YWl0cyBvbiB0aGUgZGVjb2RlLlxuICAgICAgICB0ZXggPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoZy5pbWFnZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBjYW52YXMgPSBkcmF3V2FsbENhbnZhcyhnKTtcbiAgICAgICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICAgICAgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgICAgIH1cbiAgICAgIHRleC53cmFwUyA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nOyB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICAgIGlmIChzcmdiKSB0ZXguY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgICB0ZXguYW5pc290cm9weSA9IDQ7IHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICAvLyBPTkUgdGV4dHVyZSBmb3IgaG93ZXZlciBtYW55IG1lc2hlcyBzaGFyZSB0aGUgbWF0ZXJpYWw6IGFzc2lnbmluZyBwZXIgbWVzaCB3b3VsZCB1cGxvYWQgdGhlXG4gICAgLy8gc2FtZSBjYW52YXMgdHdpY2UgYW5kIGNvc3QgVlJBTSBmb3Igbm90aGluZy5cbiAgICBpZiAobWF0ZXJpYWwgJiYgbWF0ZXJpYWwubWFwICE9PSB0ZXgpIHsgbWF0ZXJpYWwubWFwID0gdGV4OyBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgfVxufVxuXG4vKiogU2VhbWxlc3MgcmVuZGVyIHRpbGUgaW4gTVVMVElQTElFUiBzcGFjZSwgYW5kIHRoZSBuZXV0cmFsIHZhbHVlIGlzIFdISVRFLCBub3QgbWlkLWdyZXkuXG4gKiAgYG1hcGAgbXVsdGlwbGllcyB0aGUgbWF0ZXJpYWwgY29sb3VyIGJ5IHRoZSB0ZXh0dXJlJ3MgTElORUFSIHZhbHVlLCBhbmQgdGhlIHRleHR1cmUgaXMgZGVjb2RlZFxuICogIGFzIHNSR0IsIHNvIGEgdGlsZSBkcmF3biBhcm91bmQgMTI4IG11bHRpcGxpZXMgdGhlIG1lYXN1cmVkIGFsYmVkbyBieSAwLjIxNiBhbmQgcmVuZGVycyBhIGxpZ2h0XG4gKiAgZ3JleSByZW5kZXIgd2FsbCBuZWFyIGJsYWNrIC0tIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCB0aGUgZmlyc3QgYnVpbGQgb2YgdGhpcyB0aWxlIGRpZC4gYGJhc2VgXG4gKiAgdGhlcmVmb3JlIHNpdHMganVzdCB1bmRlciB3aGl0ZSBhbmQgZXZlcnkgbWFyayBEQVJLRU5TIGZyb20gaXQ7IHRoZSB3YWxsJ3Mgb3duIGFsYmVkbyBzdGF5cyB0aGVcbiAqICBtYXRlcmlhbCdzLCBhbmQgdGhlIHRpbGUgb25seSBldmVyIHRha2VzIHZhbHVlIGF3YXkuXG4gKlxuICogIEV2ZXJ5dGhpbmcgd3JhcHMgYnkgZHJhd2luZyBlYWNoIG1hcmsgYSBzZWNvbmQgdGltZSBhdCB4LVcgYW5kIHgrVywgd2hpY2ggaXMgd2hhdCBtYWtlcyB0aGVcbiAqICB0aWxlIHNlYW1sZXNzIC0tIGEgbWFyayBjbGlwcGVkIGF0IHRoZSBlZGdlIGlzIHRoZSBzaW5nbGUgbW9zdCB2aXNpYmxlIGFydGVmYWN0IHdoZW4gYSB3YWxsIGlzXG4gKiAgOCB0aWxlcyB3aWRlLiAqL1xuZnVuY3Rpb24gZHJhd1dhbGxDYW52YXMoZzogYW55KTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgY29uc3QgTiA9IGcuc2l6ZSA/PyA1MTI7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBOOyBjYW52YXMuaGVpZ2h0ID0gTjtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgbGV0IHNlZWQgPSBnLnNlZWQgPz8gMjAyNjA4Mjg7XG4gIGNvbnN0IHJuZCA9ICgpID0+IHsgc2VlZCA9IChzZWVkICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gc2VlZCAvIDQyOTQ5NjcyOTY7IH07XG4gIGNvbnN0IGJhc2UgPSBnLmJhc2UgPz8gMjQ2O1xuICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgTiwgTik7XG5cbiAgLy8gQnJvYWQgZmxvYXQtbWFyayBibG90Y2hlczogbG93LWZyZXF1ZW5jeSBwYXRjaGluZXNzIGluIHRoZSByZW5kZXIgY29hdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZy5wYXRjaGVzID8/IDkwKTsgaSsrKSB7XG4gICAgY29uc3QgeCA9IHJuZCgpICogTiwgeSA9IHJuZCgpICogTiwgciA9ICgwLjA1ICsgcm5kKCkgKiAwLjE4KSAqIE47XG4gICAgY29uc3QgdiA9IGJhc2UgLSBybmQoKSAqIChnLnBhdGNoQW1wID8/IDI2KTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7diB8IDB9LCR7diB8IDB9LCR7diB8IDB9LDAuNTUpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2IHwgMH0sJHt2IHwgMH0sJHt2IHwgMH0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBmb3IgKGNvbnN0IGR4IG9mIFstTiwgMCwgTl0pIHsgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShkeCwgMCk7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IGN0eC5yZXN0b3JlKCk7IH1cbiAgfVxuICAvLyBWZXJ0aWNhbCByYWluIHN0cmVha3MuIE5hcnJvdywgc29mdC1lZGdlZCwgdG9wLXdlaWdodGVkIC0tIHdhdGVyIHJ1bnMgRE9XTiBmcm9tIHRoZSBjb3BpbmcgYW5kXG4gIC8vIGZhZGVzIG91dCwgc28gdGhlIGFscGhhIHJhbXBzIHRvIG5vdGhpbmcgYXQgdGhlIGJvdHRvbSBvZiBlYWNoIHN0cmVhayByYXRoZXIgdGhhbiBzdG9wcGluZy5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAoZy5zdHJlYWtzID8/IDEzMCk7IGkrKykge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIE4sIHcgPSAoMC4wMDIgKyBybmQoKSAqIDAuMDEwKSAqIE47XG4gICAgY29uc3QgeTAgPSBybmQoKSAqIE4gKiAwLjUsIGxlbiA9ICgwLjI1ICsgcm5kKCkgKiAwLjc1KSAqIE47XG4gICAgY29uc3QgZGFyayA9IGJhc2UgLSAoNiArIHJuZCgpICogKGcuc3RyZWFrQW1wID8/IDIyKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LCR7ZGFyayB8IDB9LDAuNDIpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC4zNSwgYHJnYmEoJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sJHtkYXJrIHwgMH0sMC4yNilgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwke2RhcmsgfCAwfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkO1xuICAgIGZvciAoY29uc3QgZHggb2YgWy1OLCAwLCBOXSkgY3R4LmZpbGxSZWN0KHggKyBkeCAtIHcgLyAyLCB5MCwgdywgbGVuKTtcbiAgfVxuICAvLyBCb2FyZCBtYXJrczogdGhlIGhvcml6b250YWwgc2VhbXMgYSBzaHV0dGVyZWQgY29uY3JldGUgcG91ciBsZWF2ZXMsIG9uZSBwZXIgYm9hcmQuIEZhaW50IC0tXG4gIC8vIHRoaXMgaXMgYSByZW5kZXJlZCB3YWxsIGFuZCB0aGUgc2VhbSBzaG93cyB0aHJvdWdoIHRoZSBjb2F0IHJhdGhlciB0aGFuIG9uIGl0IC0tIGFuZCBkcmF3biBhc1xuICAvLyBhIHNvZnQgcGFpciAoYSBkYXJrIGxpbmUgdW5kZXIgYSBzbGlnaHRseSBsaWdodGVyIG9uZSkgYmVjYXVzZSB0aGF0IGlzIHdoYXQgYSBsaXBwZWQgc2h1dHRlclxuICAvLyBqb2ludCBkb2VzIHRvIHRoZSBsaWdodC4gYHNlYW1QaXRjaGAgaXMgaW4gVElMRSBmcmFjdGlvbnMsIHNvIGl0IGxhbmRzIG9uIHRoZSBzYW1lIG1ldHJpY1xuICAvLyBzcGFjaW5nIHdoZXJldmVyIHRoZSB0aWxlIHJlcGVhdHMuXG4gIGlmIChnLnNlYW1zKSB7XG4gICAgY29uc3QgcGl0Y2ggPSAoZy5zZWFtUGl0Y2ggPz8gMC4zNzUpICogTjtcbiAgICBjb25zdCBhbXAgPSBnLnNlYW1BbXAgPz8gOTtcbiAgICBmb3IgKGxldCB5ID0gcGl0Y2ggKiAwLjU7IHkgPCBOICsgcGl0Y2g7IHkgKz0gcGl0Y2gpIHtcbiAgICAgIGNvbnN0IHl5ID0geSAlIE47XG4gICAgICBjb25zdCBkID0gYmFzZSAtIGFtcCwgbCA9IE1hdGgubWluKDI1NSwgYmFzZSArIGFtcCAqIDAuMzUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7ZCB8IDB9LCR7ZCB8IDB9LCR7ZCB8IDB9LDAuNSlgO1xuICAgICAgY3R4LmZpbGxSZWN0KDAsIHl5LCBOLCAxLjYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7bCB8IDB9LCR7bCB8IDB9LCR7bCB8IDB9LDAuMzUpYDtcbiAgICAgIGN0eC5maWxsUmVjdCgwLCB5eSArIDEuNiwgTiwgMS4yKTtcbiAgICB9XG4gIH1cbiAgLy8gRmluZSBzcGVja2xlOiB0aGUgYWdncmVnYXRlIGluIHRoZSByZW5kZXIsIGF0IHRoZSBsaW1pdCBvZiB3aGF0IGEgcHJvcC1kaXN0YW5jZSB2aWV3ZXIgcmVzb2x2ZXMuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgKGcuc3BlY2tzID8/IDI2MDApOyBpKyspIHtcbiAgICBjb25zdCB4ID0gcm5kKCkgKiBOLCB5ID0gcm5kKCkgKiBOLCByID0gMC41ICsgcm5kKCkgKiAxLjY7XG4gICAgY29uc3QgdiA9IGJhc2UgLSBybmQoKSAqIChnLnNwZWNrQW1wID8/IDMwKTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2IHwgMH0sJHt2IHwgMH0sJHt2IHwgMH0sMC4zMClgO1xuICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gIH1cbiAgLy8gQSBjbGVhbiB0ZXhlbCBmb3IgYGNsZWFuYC1waW5uZWQgdmVydGljZXM6IGV2ZXJ5IGNvcm5lciwgYmVjYXVzZSB0aGUgdGlsZSB3cmFwcyBhbmQgdGhlIHBpblxuICAvLyBzaXRzIDYgcHggaW4gZnJvbSAoMCwgMCkuXG4gIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7XG4gIGZvciAoY29uc3QgW3gsIHldIG9mIFtbMCwgMF0sIFtOIC0gMTIsIDBdLCBbMCwgTiAtIDEyXSwgW04gLSAxMiwgTiAtIDEyXV0pIGN0eC5maWxsUmVjdCh4LCB5LCAxMiwgMTIpO1xuICByZXR1cm4gY2FudmFzO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlRmFtaWx5TWFydFN0b3JlQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcbiAgYXBwbHlHbGFzc0dyYXBoaWMocm9vdCk7XG4gIGFwcGx5V2FsbEdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgd2hhdGV2ZXIgdGhlIGNvbmZpZyBhY3R1YWxseSBodW5nIGEgbWVjaGFuaXNtIG9uIC0tIGBkb29yLWhpbmdlYFxuICAgIC8vIGZvciBhIHN3aW5naW5nIGVudHJhbmNlIGxlYWYsIGFuZCBub3RoaW5nIGVsc2UuIEEgcm9sbGVyIHNodXR0ZXIgYXV0aG9yZWQgYXMgZml4ZWRcbiAgICAvLyBnZW9tZXRyeSBnZXRzIG5vIGF4aXM6IGEgbmFtZWQgcGl2b3QgaXMgYSBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wXG4gICAgLy8gdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gWy4uLigoKHJ0IGFzIGFueSkucGl2b3ROb2RlcyA/PyBbXSkgYXMgVEhSRUUuT2JqZWN0M0RbXSldO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuIFRoZSBlbWl0dGVkIGBtb2RlbC50c2AgYmVzaWRlIHRoaXNcbiAqIGZpbGUgSU1QT1JUUyBpdCBieSBuYW1lLCBzbyBhIGZhY3Rvcnkgd2l0aG91dCBpdCBmYWlscyB0aGUgcGFjayBidWlsZCB3aXRoXG4gKiBcIk5vIG1hdGNoaW5nIGV4cG9ydCAuLi4gZm9yIGltcG9ydCBjcmVhdGVNb2RlbFwiIC0tIHdoaWNoIGlzIGhvdyBpdCB3YXMgZm91bmQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJl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QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWMsQ0FBQztBQUFBLEVBQ2pCO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1Is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
