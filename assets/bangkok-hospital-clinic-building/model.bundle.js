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

// scratch/bangkok-hospital-clinic-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createBangkokHospitalClinicBuildingModel: () => createBangkokHospitalClinicBuildingModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "bangkok-hospital-clinic-building",
  "name": "Bangkok Hospital Clinic Building",
  "exportName": "BangkokHospitalClinicBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 15654852,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 9606553,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "white",
      "color": 12896462,
      "roughness": 0.62,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 3898328,
      "roughness": 0.42,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 9082520,
      "roughness": 0.12,
      "metalness": 0,
      "opacity": 0.93,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 11647167,
      "roughness": 0.44,
      "metalness": 0.3
    },
    {
      "id": "galv",
      "color": 9146518,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 2.25,
    "plantMaterial": "galv",
    "fasciaWall": {
      "cy": 3.85,
      "cz": 2.055,
      "h": 0.6,
      "d": 0.23
    },
    "fasciaWallMaterial": "wall",
    "parapetExtra": [
      [
        -3.88,
        4.05,
        -0.775,
        0.24,
        0.2,
        5.45
      ],
      [
        3.88,
        4.05,
        -0.775,
        0.24,
        0.2,
        5.45
      ],
      [
        0,
        4.05,
        -3.38,
        8,
        0.2,
        0.24
      ]
    ],
    "frameMaterial": "frame",
    "fascia": {
      "boards": [
        {
          "w": 4.5,
          "h": 0.72,
          "d": 0.14,
          "at": [
            1.6,
            3.32,
            2.99
          ],
          "face": "+Z",
          "u": [
            0,
            0.5
          ]
        },
        {
          "w": 3,
          "h": 0.6,
          "d": 0.06,
          "at": [
            -2.35,
            3.35,
            2.95
          ],
          "face": "+Z",
          "u": [
            0.5,
            1
          ],
          "plainUV": [
            0.985,
            0.015
          ]
        }
      ]
    },
    "glazing": {
      "cx": 0,
      "w": 7.8,
      "h": 2.87,
      "cy": 1.485,
      "cz": 2.76
    },
    "glazingExtra": [
      [
        3.9425,
        2.925,
        1.5,
        0.045,
        0.99,
        1.14
      ],
      [
        3.9425,
        1.175,
        1.5,
        0.045,
        1.19,
        1.14
      ]
    ],
    "frame": [
      [
        0,
        0.06,
        2.8,
        7.8,
        0.1,
        0.16
      ],
      [
        0,
        2.105,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        -3.875,
        1.1,
        2.8,
        0.09,
        2.2,
        0.16
      ],
      [
        3.875,
        1.1,
        2.8,
        0.09,
        2.2,
        0.16
      ],
      [
        -2,
        1.085,
        2.81,
        0.1,
        1.95,
        0.14
      ],
      [
        -0.8,
        1.085,
        2.81,
        0.1,
        1.95,
        0.14
      ],
      [
        -1.4,
        1.05,
        2.81,
        1.2,
        0.06,
        0.14
      ],
      [
        0,
        2.395,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        0,
        2.905,
        2.8,
        7.8,
        0.09,
        0.16
      ],
      [
        -3.875,
        2.65,
        2.8,
        0.09,
        0.6,
        0.16
      ],
      [
        3.875,
        2.65,
        2.8,
        0.09,
        0.6,
        0.16
      ],
      [
        -2.95,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        -1.4,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        0.15,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        1.1,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        2.05,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        3,
        2.65,
        2.8,
        0.06,
        0.6,
        0.12
      ],
      [
        -2.86,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        -1.72,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        -0.58,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        0.56,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        1.7,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        2.84,
        4.135,
        2.93,
        0.03,
        0.83,
        0.02
      ],
      [
        3.96,
        2.925,
        0.935,
        0.06,
        1.05,
        0.07
      ],
      [
        3.96,
        2.925,
        2.065,
        0.06,
        1.05,
        0.07
      ],
      [
        3.96,
        3.415,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        2.435,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        2.925,
        1.5,
        0.06,
        1.05,
        0.05
      ],
      [
        3.96,
        2.925,
        1.5,
        0.06,
        0.05,
        1.2
      ],
      [
        3.96,
        1.175,
        0.935,
        0.06,
        1.25,
        0.07
      ],
      [
        3.96,
        1.175,
        2.065,
        0.06,
        1.25,
        0.07
      ],
      [
        3.96,
        1.765,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        0.585,
        1.5,
        0.06,
        0.07,
        1.2
      ],
      [
        3.96,
        1.175,
        1.5,
        0.06,
        1.25,
        0.05
      ],
      [
        3.96,
        1.175,
        1.5,
        0.06,
        0.05,
        1.2
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 1.95,
      "cy": 1.085,
      "cz": 2.81,
      "x": [
        -2.95,
        -1.4,
        0.15,
        1.1,
        2.05,
        3
      ]
    },
    "frontFeature": {
      "name": "White cladding block",
      "material": "white",
      "boxes": [
        [
          0,
          3.775,
          2.545,
          8,
          1.65,
          0.75
        ],
        [
          -3.95,
          1.475,
          2.545,
          0.1,
          2.95,
          0.75
        ],
        [
          3.95,
          1.475,
          2.545,
          0.1,
          2.95,
          0.75
        ]
      ]
    },
    "sideFeature": {
      "name": "Service door",
      "material": "wall",
      "boxes": [
        [
          3.955,
          1.05,
          -1.05,
          0.05,
          2.1,
          0.9
        ]
      ]
    },
    "extraFeature": {
      "name": "Entrance canopy",
      "material": "white",
      "boxes": [
        [
          0,
          2.25,
          3.21,
          8,
          0.2,
          0.58
        ]
      ]
    },
    "condensers": [
      [
        -0.35,
        -1.35,
        0
      ],
      [
        0.95,
        -1.35,
        0
      ]
    ]
  },
  "graphic": {
    "background": "#3B7BD8",
    "ops": [
      {
        "type": "rect",
        "x": 0.5,
        "y": 0,
        "w": 0.5,
        "h": 1.2,
        "fill": "#C4C8CE"
      },
      {
        "type": "text",
        "text": "Bangkok Hospital",
        "x0": 0.045,
        "x1": 0.36,
        "cy": 0.58,
        "size": 0.5,
        "fill": "#FFFFFF"
      },
      {
        "type": "text",
        "text": "\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E",
        "x0": 0.375,
        "x1": 0.475,
        "cy": 0.34,
        "size": 0.22,
        "fill": "#FFFFFF"
      },
      {
        "type": "text",
        "text": "Bangkok Hospital",
        "x0": 0.535,
        "x1": 0.865,
        "cy": 0.58,
        "size": 0.5,
        "fill": "#1C498B"
      },
      {
        "type": "text",
        "text": "\u0E42\u0E23\u0E07\u0E1E\u0E22\u0E32\u0E1A\u0E32\u0E25\u0E01\u0E23\u0E38\u0E07\u0E40\u0E17\u0E1E",
        "x0": 0.88,
        "x1": 0.975,
        "cy": 0.34,
        "size": 0.22,
        "fill": "#1C498B"
      }
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
  return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5])));
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
function createBangkokHospitalClinicBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Bangkok Hospital Clinic Building";
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
  add("building-shell", "Building shell", boxAt(0, 1.775, (SF - 3.44) / 2, 7.88, 3.55, SF + 3.44), "wall");
  colliders["building-shell"] = {
    shape: "box",
    localCenter: [0, 2.3, 0],
    halfExtents: [4, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  add("roof-deck", "Roof deck", boxAt(0, 3.56, (SF - 0.02 - 3.42) / 2, 7.8, 0.12, SF + 3.4), "deck");
  add("parapet", "Parapet ring and fascia wall", boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, 8, G.fasciaWall.h, G.fasciaWall.d],
    [-3.88, 3.75, (SF - 0.3 - 3.5) / 2, 0.24, 0.4, SF + 3.2],
    [3.88, 3.75, (SF - 0.3 - 3.5) / 2, 0.24, 0.4, SF + 3.2],
    [0, 3.75, -3.38, 8, 0.4, 0.24],
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
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, u0 + uv.getX(i) * (u1 - u0), 0.125 + uv.getY(i) * 0.875);
          else uv.setXY(i, pu, pv);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  {
    const pane = boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, G.glazing.d ?? 0.1);
    const extra = G.glazingExtra ?? [];
    add(
      "shopfront-glazing",
      "Shopfront glazing",
      extra.length ? mergeGeos([pane, ...extra.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5]))]) : pane,
      "glass"
    );
  }
  add("shopfront-frame", "Shopfront framing and door bay", boxes(G.frame), G.frameMaterial);
  if (G.sideFeature) add("side-feature", G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);
  if (G.frontFeature) add("front-feature", G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);
  if (G.extraFeature) add("extra-feature", G.extraFeature.name, boxes(G.extraFeature.boxes), G.extraFeature.material);
  {
    const m = G.mullions;
    const mats = m.x.map((x) => new THREE.Matrix4().setPosition(x, m.cy, m.cz ?? 2.58));
    addInst("shopfront-mullions", "Shopfront mullions", new THREE.BoxGeometry(m.w, m.h, 0.08), G.frameMaterial, mats);
  }
  {
    const parts = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      cylAt(0, 0.87, 0, 0.3, 0.1, 16)
    ];
    for (const fx of [-0.4, 0.4]) for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
    const unit = mergeGeos(parts);
    const mats = G.condensers.map(([x, z, yaw]) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, 3.6, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
      new THREE.Vector3(1, 1, 1)
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
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function applyFasciaGraphic(root) {
  const rt = root.userData.sculptRuntime;
  const mesh = rt?.meshes?.["fascia-panel"];
  if (!mesh || typeof document === "undefined") return;
  const material = mesh.material;
  if (!material) return;
  const g = CONFIG.graphic;
  const square = !!g.square;
  const W = square ? 512 : 2048, H = square ? 512 : 320;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = square ? H : H * 0.875;
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
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace ?? tex.colorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  material.needsUpdate = true;
}
function createObjectModel(spec, options = {}) {
  const root = createBangkokHospitalClinicBuildingModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  applyFasciaGraphic(root);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFuZ2tvayBIb3NwaXRhbCBDbGluaWMgQnVpbGRpbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcgYW5kXG4gKiBpbnN0YW5jaW5nIGFyZSBoYW5kLXJvbGxlZCBiZWxvdyAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXMgYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDguMDAgeCA0LjYwIHggNy4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBzaG9wZnJvbnQgZmFjaW5nICtaLlxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIE9uZSBvZiB0aGFpa2l0J3Mgc2hhcmVkIHJldGFpbC1tb2R1bGUgYnVpbGRpbmdzLiBUaGUgc2hlbGwgZnJvbnQgZmFjZSBzaXRzIGF0IHo9KzIuNTAgcmF0aGVyXG4gKiB0aGFuIHRoZSBlbnZlbG9wZSBlZGdlIHNvIHRoZSBlbnRyYW5jZSBjYW5vcHkgY2FuIGNhbnRpbGV2ZXIgZm9yd2FyZCBhbmQgc3RpbGwgbGFuZCBleGFjdGx5IG9uXG4gKiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEV2ZXJ5IHN1cmZhY2UgcGFpciBvbiB0aGUgZmFjYWRlIGlzIGRlbGliZXJhdGVseSBvZmZzZXQgaW4gZGVwdGg6XG4gKiB0d28gc3VyZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSB0ZWFyIGludG8gaW50ZXJsZWF2ZWQgdHJpYW5nbGVzIGFzIHRoZVxuICogY2FtZXJhIG1vdmVzLCBhbmQgYXV0aG9yaW5nIGNvbXBvbmVudHMgZmx1c2ggYWdhaW5zdCBvbmUgYW5vdGhlciBwcm9kdWNlcyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJiYW5na29rLWhvc3BpdGFsLWNsaW5pYy1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIkJhbmdrb2sgSG9zcGl0YWwgQ2xpbmljIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiQmFuZ2tva0hvc3BpdGFsQ2xpbmljQnVpbGRpbmdcIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ3YWxsXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTU2NTQ4NTIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTYwNjU1MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndoaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTI4OTY0NjIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNjIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAzODk4MzI4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDkwODI1MjAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjkzLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmcmFtZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDExNjQ3MTY3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjNcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiY29sb3JcIjogOTE0NjUxOCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAyLjI1LFxuICAgICAgXCJwbGFudE1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiAzLjg1LFxuICAgICAgICBcImN6XCI6IDIuMDU1LFxuICAgICAgICBcImhcIjogMC42LFxuICAgICAgICBcImRcIjogMC4yM1xuICAgICAgfSxcbiAgICAgIFwiZmFzY2lhV2FsbE1hdGVyaWFsXCI6IFwid2FsbFwiLFxuICAgICAgXCJwYXJhcGV0RXh0cmFcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTMuODgsXG4gICAgICAgICAgNC4wNSxcbiAgICAgICAgICAtMC43NzUsXG4gICAgICAgICAgMC4yNCxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgNS40NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy44OCxcbiAgICAgICAgICA0LjA1LFxuICAgICAgICAgIC0wLjc3NSxcbiAgICAgICAgICAwLjI0LFxuICAgICAgICAgIDAuMixcbiAgICAgICAgICA1LjQ1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDQuMDUsXG4gICAgICAgICAgLTMuMzgsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMC4yNFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJmcmFtZU1hdGVyaWFsXCI6IFwiZnJhbWVcIixcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJib2FyZHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwid1wiOiA0LjUsXG4gICAgICAgICAgICBcImhcIjogMC43MixcbiAgICAgICAgICAgIFwiZFwiOiAwLjE0LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDEuNixcbiAgICAgICAgICAgICAgMy4zMixcbiAgICAgICAgICAgICAgMi45OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFjZVwiOiBcIitaXCIsXG4gICAgICAgICAgICBcInVcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgIF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwid1wiOiAzLFxuICAgICAgICAgICAgXCJoXCI6IDAuNixcbiAgICAgICAgICAgIFwiZFwiOiAwLjA2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0yLjM1LFxuICAgICAgICAgICAgICAzLjM1LFxuICAgICAgICAgICAgICAyLjk1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmYWNlXCI6IFwiK1pcIixcbiAgICAgICAgICAgIFwidVwiOiBbXG4gICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicGxhaW5VVlwiOiBbXG4gICAgICAgICAgICAgIDAuOTg1LFxuICAgICAgICAgICAgICAwLjAxNVxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3hcIjogMCxcbiAgICAgICAgXCJ3XCI6IDcuOCxcbiAgICAgICAgXCJoXCI6IDIuODcsXG4gICAgICAgIFwiY3lcIjogMS40ODUsXG4gICAgICAgIFwiY3pcIjogMi43NlxuICAgICAgfSxcbiAgICAgIFwiZ2xhemluZ0V4dHJhXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTQyNSxcbiAgICAgICAgICAyLjkyNSxcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMC4wNDUsXG4gICAgICAgICAgMC45OSxcbiAgICAgICAgICAxLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk0MjUsXG4gICAgICAgICAgMS4xNzUsXG4gICAgICAgICAgMS41LFxuICAgICAgICAgIDAuMDQ1LFxuICAgICAgICAgIDEuMTksXG4gICAgICAgICAgMS4xNFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJmcmFtZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDcuOCxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLjEwNSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgNy44LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTMuODc1LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjIsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy44NzUsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDIuMixcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMixcbiAgICAgICAgICAxLjA4NSxcbiAgICAgICAgICAyLjgxLFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAxLjk1LFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgMS4wODUsXG4gICAgICAgICAgMi44MSxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMS45NSxcbiAgICAgICAgICAwLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMS40LFxuICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgMi44MSxcbiAgICAgICAgICAxLjIsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIuMzk1LFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICA3LjgsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIuOTA1LFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICA3LjgsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMy44NzUsXG4gICAgICAgICAgMi42NSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjYsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy44NzUsXG4gICAgICAgICAgMi42NSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjYsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuOTUsXG4gICAgICAgICAgMi42NSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjYsXG4gICAgICAgICAgMC4xMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTEuNCxcbiAgICAgICAgICAyLjY1LFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuNixcbiAgICAgICAgICAwLjEyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjE1LFxuICAgICAgICAgIDIuNjUsXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC42LFxuICAgICAgICAgIDAuMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAyLjY1LFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuNixcbiAgICAgICAgICAwLjEyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjA1LFxuICAgICAgICAgIDIuNjUsXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC42LFxuICAgICAgICAgIDAuMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMsXG4gICAgICAgICAgMi42NSxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjYsXG4gICAgICAgICAgMC4xMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuODYsXG4gICAgICAgICAgNC4xMzUsXG4gICAgICAgICAgMi45MyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuODMsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTEuNzIsXG4gICAgICAgICAgNC4xMzUsXG4gICAgICAgICAgMi45MyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuODMsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTAuNTgsXG4gICAgICAgICAgNC4xMzUsXG4gICAgICAgICAgMi45MyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuODMsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC41NixcbiAgICAgICAgICA0LjEzNSxcbiAgICAgICAgICAyLjkzLFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC44MyxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjcsXG4gICAgICAgICAgNC4xMzUsXG4gICAgICAgICAgMi45MyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuODMsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi44NCxcbiAgICAgICAgICA0LjEzNSxcbiAgICAgICAgICAyLjkzLFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC44MyxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2LFxuICAgICAgICAgIDIuOTI1LFxuICAgICAgICAgIDAuOTM1LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMS4wNSxcbiAgICAgICAgICAwLjA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2LFxuICAgICAgICAgIDIuOTI1LFxuICAgICAgICAgIDIuMDY1LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMS4wNSxcbiAgICAgICAgICAwLjA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2LFxuICAgICAgICAgIDMuNDE1LFxuICAgICAgICAgIDEuNSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMS4yXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2LFxuICAgICAgICAgIDIuNDM1LFxuICAgICAgICAgIDEuNSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMS4yXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjk2LFxuICAgICAgICAgIDIuOTI1LFxuICAgICAgICAgIDEuNSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgMC4wNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAyLjkyNSxcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjA1LFxuICAgICAgICAgIDEuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAxLjE3NSxcbiAgICAgICAgICAwLjkzNSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDEuMjUsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAxLjE3NSxcbiAgICAgICAgICAyLjA2NSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDEuMjUsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAxLjc2NSxcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDEuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAwLjU4NSxcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDEuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy45NixcbiAgICAgICAgICAxLjE3NSxcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAxLjI1LFxuICAgICAgICAgIDAuMDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgMS4xNzUsXG4gICAgICAgICAgMS41LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4wNSxcbiAgICAgICAgICAxLjJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwibXVsbGlvbnNcIjoge1xuICAgICAgICBcIndcIjogMC4wNyxcbiAgICAgICAgXCJoXCI6IDEuOTUsXG4gICAgICAgIFwiY3lcIjogMS4wODUsXG4gICAgICAgIFwiY3pcIjogMi44MSxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi45NSxcbiAgICAgICAgICAtMS40LFxuICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJXaGl0ZSBjbGFkZGluZyBibG9ja1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwid2hpdGVcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDMuNzc1LFxuICAgICAgICAgICAgMi41NDUsXG4gICAgICAgICAgICA4LFxuICAgICAgICAgICAgMS42NSxcbiAgICAgICAgICAgIDAuNzVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjk1LFxuICAgICAgICAgICAgMS40NzUsXG4gICAgICAgICAgICAyLjU0NSxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDIuOTUsXG4gICAgICAgICAgICAwLjc1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk1LFxuICAgICAgICAgICAgMS40NzUsXG4gICAgICAgICAgICAyLjU0NSxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDIuOTUsXG4gICAgICAgICAgICAwLjc1XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJzaWRlRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlNlcnZpY2UgZG9vclwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwid2FsbFwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk1NSxcbiAgICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgICAtMS4wNSxcbiAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAyLjEsXG4gICAgICAgICAgICAwLjlcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImV4dHJhRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkVudHJhbmNlIGNhbm9weVwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwid2hpdGVcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDIuMjUsXG4gICAgICAgICAgICAzLjIxLFxuICAgICAgICAgICAgOCxcbiAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgIDAuNThcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTAuMzUsXG4gICAgICAgICAgLTEuMzUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC45NSxcbiAgICAgICAgICAtMS4zNSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogXCIjM0I3QkQ4XCIsXG4gICAgICBcIm9wc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWN0XCIsXG4gICAgICAgICAgXCJ4XCI6IDAuNSxcbiAgICAgICAgICBcInlcIjogMCxcbiAgICAgICAgICBcIndcIjogMC41LFxuICAgICAgICAgIFwiaFwiOiAxLjIsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0M0QzhDRVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQmFuZ2tvayBIb3NwaXRhbFwiLFxuICAgICAgICAgIFwieDBcIjogMC4wNDUsXG4gICAgICAgICAgXCJ4MVwiOiAwLjM2LFxuICAgICAgICAgIFwiY3lcIjogMC41OCxcbiAgICAgICAgICBcInNpemVcIjogMC41LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiNGRkZGRkZcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIlx1MEU0Mlx1MEUyM1x1MEUwN1x1MEUxRVx1MEUyMlx1MEUzMlx1MEUxQVx1MEUzMlx1MEUyNVx1MEUwMVx1MEUyM1x1MEUzOFx1MEUwN1x1MEU0MFx1MEUxN1x1MEUxRVwiLFxuICAgICAgICAgIFwieDBcIjogMC4zNzUsXG4gICAgICAgICAgXCJ4MVwiOiAwLjQ3NSxcbiAgICAgICAgICBcImN5XCI6IDAuMzQsXG4gICAgICAgICAgXCJzaXplXCI6IDAuMjIsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0ZGRkZGRlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiQmFuZ2tvayBIb3NwaXRhbFwiLFxuICAgICAgICAgIFwieDBcIjogMC41MzUsXG4gICAgICAgICAgXCJ4MVwiOiAwLjg2NSxcbiAgICAgICAgICBcImN5XCI6IDAuNTgsXG4gICAgICAgICAgXCJzaXplXCI6IDAuNSxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMUM0OThCXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJcdTBFNDJcdTBFMjNcdTBFMDdcdTBFMUVcdTBFMjJcdTBFMzJcdTBFMUFcdTBFMzJcdTBFMjVcdTBFMDFcdTBFMjNcdTBFMzhcdTBFMDdcdTBFNDBcdTBFMTdcdTBFMUVcIixcbiAgICAgICAgICBcIngwXCI6IDAuODgsXG4gICAgICAgICAgXCJ4MVwiOiAwLjk3NSxcbiAgICAgICAgICBcImN5XCI6IDAuMzQsXG4gICAgICAgICAgXCJzaXplXCI6IDAuMjIsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzFDNDk4QlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByOiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQmFuZ2tva0hvc3BpdGFsQ2xpbmljQnVpbGRpbmdNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ0Jhbmdrb2sgSG9zcGl0YWwgQ2xpbmljIEJ1aWxkaW5nJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuICAvKiBTaGVsbDogU09MSUQgYm94LCBub3QgYSByaW5nLiBUaGUgcHJvcCBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvXG4gICAqIGFuIGludGVyaW9yIGNvc3RzIGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcyAtLSBhbmQgc29saWRcbiAgICogbWVhbnMgdGhlIHNob3Bmcm9udCBuZWVkcyBubyBvcGVuaW5nIGN1dCBpbiBpdCwgd2hpY2ggcmVtb3ZlcyBhbGwgZm91ciByZXZlYWwgZmFjZXMgYW5kIHRoZVxuICAgKiB6LWZpZ2h0aW5nIHRoZXkgY2F1c2UuIFNldCAwLjA2IG0gSU5TSURFIHRoZSBwYXJhcGV0IHJpbmcgb24gZXZlcnkgZWxldmF0aW9uIHNvIG5vIHdhbGwgZmFjZVxuICAgKiBpcyBldmVyIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCBhIHBhcmFwZXQgZmFjZS4gKi9cbiAgLy8gSG93IGZhciBmb3J3YXJkIHRoZSBzaGVsbCBmYWNlIHNpdHMuIFRoZSBERUZBVUxUIDIuNTAgbGVhdmVzIDEuMDAgbSBmb3IgYW4gZW50cmFuY2UgY2Fub3B5IHRvXG4gIC8vIGNhbnRpbGV2ZXIgaW50bywgc28gdGhlIGNhbm9weSBub3NlIGxhbmRzIGV4YWN0bHkgb24gdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBBIGJ1aWxkaW5nIHdpdGhcbiAgLy8gTk8gZm9yd2FyZCBjYW50aWxldmVyIG11c3QgcHVzaCB0aGlzIG91dCBpbnN0ZWFkLCBvciB0aGUgcHJvcCBpcyBidWlsdCBzaG9ydCBvZiBpdHMgZGVjbGFyZWRcbiAgLy8gZW52ZWxvcGUgLS0gTUsgZmlyc3QgY2FtZSBvdXQgNi4zIG0gZGVlcCBhZ2FpbnN0IGEgZGVjbGFyZWQgNy4wIGZvciBleGFjdGx5IHRoYXQgcmVhc29uLlxuICBjb25zdCBTRiA9IChHLnNoZWxsRnJvbnQgPz8gMi41MCkgYXMgbnVtYmVyO1xuICBhZGQoJ2J1aWxkaW5nLXNoZWxsJywgJ0J1aWxkaW5nIHNoZWxsJywgYm94QXQoMCwgMS43NzUsIChTRiAtIDMuNDQpIC8gMiwgNy44OCwgMy41NSwgU0YgKyAzLjQ0KSwgJ3dhbGwnKTtcbiAgY29sbGlkZXJzWydidWlsZGluZy1zaGVsbCddID0ge1xuICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAyLjMsIDBdLCBoYWxmRXh0ZW50czogWzQuMCwgMi4zLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIFJvb2YgZGVjayBzcGFucyB5IDMuNTAuLjMuNjIgc28gaXRzIHVuZGVyc2lkZSBpcyBzdW5rIElOVE8gdGhlIHNoZWxsIHJhdGhlciB0aGFuIHJlc3Rpbmcgb25cbiAgICogaXQuIEF1dGhvcmVkIGZsdXNoLCB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tIGZhY2Ugd2VyZSBib3RoIGF0XG4gICAqIHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UuICovXG4gIGFkZCgncm9vZi1kZWNrJywgJ1Jvb2YgZGVjaycsIGJveEF0KDAsIDMuNTYsIChTRiAtIDAuMDIgLSAzLjQyKSAvIDIsIDcuOCwgMC4xMiwgU0YgKyAzLjQwKSwgJ2RlY2snKTtcblxuICAvKiBQYXJhcGV0OiBmcm9udCBmYXNjaWEgd2FsbCBwbHVzIHRocmVlIHVwc3RhbmRzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50IGFuZCBvbmUgZHJhdyBjYWxsLlxuICAgKiBUaGUgZnJvbnQgaXMgdGFsbGVyIHRoYW4gdGhlIHNpZGVzLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNhbm5vdCBleHByZXNzLiBPdXRlciBmYWNlcyBzdGFuZFxuICAgKiAwLjA2IG0gcHJvdWQgb2YgdGhlIHdhbGxzIC0tIGEgY29waW5nIGRyaXAgZWRnZSwgYW5kIHdoYXQga2VlcHMgdGhlbSBvZmYgdGhlIHdhbGwgcGxhbmVzLiAqL1xuICBhZGQoJ3BhcmFwZXQnLCAnUGFyYXBldCByaW5nIGFuZCBmYXNjaWEgd2FsbCcsIGJveGVzKFtcbiAgICBbMCwgRy5mYXNjaWFXYWxsLmN5LCBHLmZhc2NpYVdhbGwuY3osIDguMCwgRy5mYXNjaWFXYWxsLmgsIEcuZmFzY2lhV2FsbC5kXSxcbiAgICBbLTMuODgsIDMuNzUsIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgMC4yNCwgMC40LCBTRiArIDMuMjBdLFxuICAgIFszLjg4LCAzLjc1LCAoU0YgLSAwLjMwIC0gMy41KSAvIDIsIDAuMjQsIDAuNCwgU0YgKyAzLjIwXSxcbiAgICBbMCwgMy43NSwgLTMuMzgsIDguMCwgMC40LCAwLjI0XSxcbiAgICAvLyBBbnl0aGluZyBlbHNlIGluIHRoZSBTQU1FIG1hdGVyaWFsIGZvbGRzIGluIGhlcmUgcmF0aGVyIHRoYW4gY29zdGluZyBpdHMgb3duIGRyYXcgY2FsbCAtLVxuICAgIC8vIGZ1bGwtaGVpZ2h0IGZhY2FkZSBjbGFkZGluZywgY29ybmVyIHBpbGFzdGVycywgYSBwbGludGguIFRoaXMgaXMgdGhlIG1lcmdlIGxldmVyOiB0d29cbiAgICAvLyBwYXJ0cyB0aGF0IHNoYXJlIGEgbWF0ZXJpYWwgc2hvdWxkIG5ldmVyIGJlIHR3byBzdWJtaXNzaW9ucy5cbiAgICAuLi4oKEcucGFyYXBldEV4dHJhID8/IFtdKSBhcyBudW1iZXJbXVtdKSxcbiAgXSksIEcuZmFzY2lhV2FsbE1hdGVyaWFsKTtcblxuICAvKiBCcmFuZCBmYXNjaWEgcGFuZWwuIFN1bmsgSU5UTyB0aGUgZmFzY2lhIHdhbGwgYXQgdGhlIGJhY2sgYW5kIHN0YW5kaW5nIHByb3VkIGF0IHRoZSBmcm9udCwgc29cbiAgICogaXQgb3ZlcmxhcHMgaXRzIHN1cnJvdW5kIGluc3RlYWQgb2YgbWVldGluZyBpdC4gVVZzIGFyZSBBVVRIT1JFRDogdGhlICtaIGZhY2Ugc2FtcGxlcyB0aGVcbiAgICogd29yZG1hcmsgYmFuZCBvZiB0aGUgY2FudmFzIGFuZCB0aGUgb3RoZXIgZml2ZSBmYWNlcyBzYW1wbGUgYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWVcbiAgICogY2FudmFzLCB3aGljaCBrZWVwcyB0aGUgYnJhbmQgZ3JhcGhpYyBhdCBPTkUgbWF0ZXJpYWwgYW5kIE9ORSBkcmF3IGNhbGwuICovXG4gIHtcbiAgICBjb25zdCBmID0gRy5mYXNjaWE7XG4gICAgbGV0IGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChmLnNoYXBlID09PSAnZGlzYycpIHtcbiAgICAgIC8vIEEgcm91bmQgc2lnbiBkaXNjLCBidWlsdCBhcyBhIENpcmNsZUdlb21ldHJ5IGZhY2UgcGx1cyBhIHNoYWxsb3cgY3lsaW5kZXIgYm9keS5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgb2J2aW91cyBjb25zdHJ1Y3Rpb24gLS0gb25lIGN5bGluZGVyIHJvdGF0ZWQgdG8gZmFjZSArWiAtLSBwdXRzIHRoZSB3b3JkbWFyayBvbiBpdHNcbiAgICAgIC8vIHNpZGUsIGJlY2F1c2UgQ3lsaW5kZXJHZW9tZXRyeSBsYXlzIGl0cyBjYXAgVVZzIG91dCBpbiB0aGUgY3lsaW5kZXIncyBvd24gWFogcGxhbmUgYW5kXG4gICAgICAvLyByb3RhdGluZyB0aGUgZ2VvbWV0cnkgZG9lcyBub3Qgcm90YXRlIHRoZW0gd2l0aCBpdC4gQ2lyY2xlR2VvbWV0cnkncyBVVnMgYXJlIGFscmVhZHlcbiAgICAgIC8vICh4LCB5KSBpbiB0aGUgcGxhbmUgaXQgZmFjZXMsIHNvIHRoZSBzcXVhcmUgY2FudmFzIGxhbmRzIHRoZSByaWdodCB3YXkgdXAgd2l0aCBub1xuICAgICAgLy8gY29ycmVjdGlvbi4gVGhlIGJvZHkncyBVVnMgYXJlIGNvbGxhcHNlZCBvbnRvIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcyBzbyB0aGVcbiAgICAgIC8vIGRpc2MncyBlZGdlIGRvZXMgbm90IHNtZWFyIHRoZSB3b3JkbWFyayBhcm91bmQgaXRzIHJpbS5cbiAgICAgIGNvbnN0IHIgPSBmLncgLyAyO1xuICAgICAgY29uc3QgZmFjZSA9IG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShyLCAzMik7XG4gICAgICBmYWNlLnRyYW5zbGF0ZSgwLCAwLCAwLjA2MSk7XG4gICAgICBjb25zdCBib2R5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgMC4xMiwgMzIpO1xuICAgICAgYm9keS5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gICAgICBjb25zdCBidXYgPSBib2R5LmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1di5jb3VudDsgaSsrKSBidXYuc2V0WFkoaSwgMC4wMiwgMC4wMik7XG4gICAgICBidXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgZyA9IG1lcmdlR2VvcyhbZmFjZSwgYm9keV0pO1xuICAgICAgZy50cmFuc2xhdGUoMCwgZi5jeSwgZi5jeik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJveEdlb21ldHJ5IHZlcnRleCBvcmRlciBpcyBweCwgbngsIHB5LCBueSwgcHosIG56IC0tIGZvdXIgdmVydGljZXMgcGVyIGZhY2UgLS0gc28gdGhlXG4gICAgICAvLyBvdXR3YXJkIGZhY2Ugb2YgYSBib2FyZCBpcyBhIGtub3duIHNsaWNlIG9mIHRoZSB1diBhdHRyaWJ1dGUuIEEgYnVpbGRpbmcgY2FuIGNhcnJ5IHRoZVxuICAgICAgLy8gc2FtZSBtYXJrIG9uIG1vcmUgdGhhbiBvbmUgZWxldmF0aW9uICh0aGlzIGtpdCdzIGhvc3BpdGFsIHNpZ25zIGl0cyBmcm9udCBBTkQgaXRzIHNpZGUpLFxuICAgICAgLy8gc28gYGJvYXJkc2AgbGV0cyBlYWNoIGJvYXJkIG5hbWUgdGhlIGZhY2UgdGhhdCBzYW1wbGVzIHRoZSBncmFwaGljIHdoaWxlIGV2ZXJ5IG90aGVyIGZhY2VcbiAgICAgIC8vIHNhbXBsZXMgYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzLiBPbmUgbWF0ZXJpYWwsIG9uZSBkcmF3IGNhbGwsIGFueSBudW1iZXIgb2ZcbiAgICAgIC8vIGJvYXJkcyBmYWNpbmcgYW55IHdheS5cbiAgICAgIGNvbnN0IEZBQ0VfU0xJQ0U6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7ICcrWCc6IDAsICctWCc6IDQsICcrWSc6IDgsICctWSc6IDEyLCAnK1onOiAxNiwgJy1aJzogMjAgfTtcbiAgICAgIGNvbnN0IGJvYXJkcyA9IChmLmJvYXJkcyBhcyBhbnlbXSkgPz8gW3sgdzogZi53LCBoOiBmLmgsIGQ6IDAuMTIsIGF0OiBbMCwgZi5jeSwgZi5jel0sIGZhY2U6ICcrWicgfV07XG4gICAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgICAgZm9yIChjb25zdCBiZCBvZiBib2FyZHMpIHtcbiAgICAgICAgY29uc3QgYiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiZC53LCBiZC5oLCBiZC5kID8/IDAuMTIpO1xuICAgICAgICBjb25zdCB1diA9IGIuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgICAgLy8gYHBsYWluYCBib2FyZHMgY2Fycnkgbm8gZ3JhcGhpYyBhdCBhbGw6IGEgYmFuZCB0aGF0IHdyYXBzIHRocmVlIHNpZGVzIG9mIGEgY2Fub3B5IHNob3VsZFxuICAgICAgICAvLyByZXBlYXQgaXRzIG1hcmsgb24gbm9uZSBvZiB0aGUgcmV0dXJucywgb25seSBvbiB0aGUgZmFjZSB0aGF0IGZyb250cyB0aGUgc3RyZWV0LlxuICAgICAgICAvLyBUaGUgdGVzdCBpcyBhbiBleHBsaWNpdCBib29sZWFuLCBOT1QgYSBzZW50aW5lbCBpbmRleCAtLSBzZXR0aW5nIHRoZSBzbGljZSBzdGFydCB0byAtMVxuICAgICAgICAvLyBzdGlsbCBzYXRpc2ZpZWQgYGkgPj0gc3RhcnQgJiYgaSA8IHN0YXJ0ICsgNGAgZm9yIHZlcnRpY2VzIDAsIDEgYW5kIDIsIHNvIHRocmVlIGNvcm5lcnNcbiAgICAgICAgLy8gb2YgdGhlICtYIGZhY2Uga2VwdCBzYW1wbGluZyB0aGUgd29yZG1hcmsgYmFuZCBhbmQgc21lYXJlZCBhIHN0cmV0Y2hlZCBnaG9zdCBvZiB0aGUgbWFya1xuICAgICAgICAvLyBhbG9uZyBldmVyeSByZXR1cm4uXG4gICAgICAgIGNvbnN0IHBsYWluID0gYmQucGxhaW4gPT09IHRydWU7XG4gICAgICAgIGNvbnN0IHN0YXJ0QXQgPSBGQUNFX1NMSUNFW2JkLmZhY2UgPz8gJytaJ107XG4gICAgICAgIC8vIGB1OiBbdTAsIHUxXWAgbGV0cyBhIGJvYXJkIHNhbXBsZSBhIGhvcml6b250YWwgU0xJQ0Ugb2YgdGhlIGNhbnZhcyBiYW5kIGluc3RlYWQgb2YgYWxsIG9mXG4gICAgICAgIC8vIGl0LCBzbyB0d28gYm9hcmRzIHdpdGggdHdvIGRpZmZlcmVudCBncmFwaGljcyAoYSBibHVlIGJvYXJkIHdpdGggd2hpdGUgdGV4dCwgYSB3aGl0ZSBib2FyZFxuICAgICAgICAvLyB3aXRoIGJsdWUgdGV4dCkgc3RpbGwgc2hhcmUgb25lIGNhbnZhcywgb25lIG1hdGVyaWFsIGFuZCBvbmUgZHJhdyBjYWxsLiBgcGxhaW5VVmAgaXMgdGhlXG4gICAgICAgIC8vIGNhbnZhcyBwb2ludCB0aGUgYm9hcmQncyBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZTsgaXQgZGVmYXVsdHMgdG8gdGhlIGJvdHRvbS1sZWZ0IGNvcm5lclxuICAgICAgICAvLyBhbmQgYSBib2FyZCB3aG9zZSBncm91bmQgaXMgbm90IHRoZSBjYW52YXMgYmFja2dyb3VuZCBuYW1lcyBpdHMgb3duLlxuICAgICAgICBjb25zdCB1MCA9IGJkLnUgPyBiZC51WzBdIDogMCwgdTEgPSBiZC51ID8gYmQudVsxXSA6IDE7XG4gICAgICAgIGNvbnN0IHB1ID0gYmQucGxhaW5VViA/IGJkLnBsYWluVVZbMF0gOiAwLjAxNSwgcHYgPSBiZC5wbGFpblVWID8gYmQucGxhaW5VVlsxXSA6IDAuMDE1O1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIHUwICsgdXYuZ2V0WChpKSAqICh1MSAtIHUwKSwgMC4xMjUgKyB1di5nZXRZKGkpICogMC44NzUpO1xuICAgICAgICAgIGVsc2UgdXYuc2V0WFkoaSwgcHUsIHB2KTtcbiAgICAgICAgfVxuICAgICAgICB1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICAgIGIudHJhbnNsYXRlKGJkLmF0WzBdLCBiZC5hdFsxXSwgYmQuYXRbMl0pO1xuICAgICAgICBwYXJ0cy5wdXNoKGIpO1xuICAgICAgfVxuICAgICAgZyA9IHBhcnRzLmxlbmd0aCA9PT0gMSA/IHBhcnRzWzBdIDogbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICB9XG4gICAgYWRkKCdmYXNjaWEtcGFuZWwnLCAnQnJhbmQgZmFzY2lhIHBhbmVsJywgZywgJ2Zhc2NpYScpO1xuICB9XG5cbiAgLyogT25lIGdsYXppbmcgcGFuZSwgbm90IG9uZSBwZXIgYmF5OiB0aGUgbXVsbGlvbiBncmlkIGluIGZyb250IGRvZXMgdGhlIGRpdmlkaW5nLiBPdmVybGFwcyBJTlRPXG4gICAqIHRoZSBmYWNhZGUgYXQgdGhlIGJhY2sgYW5kIHNpdHMgUkVDRVNTRUQgYmVoaW5kIHRoZSBmcmFtaW5nIGF0IHRoZSBmcm9udC4gTW9zdGx5IG9wYXF1ZSBieVxuICAgKiBkZXNpZ24gLS0gdGhlcmUgaXMgbm8gaW50ZXJpb3IgYmVoaW5kIGl0LCBzbyBhIHRyYW5zcGFyZW50IHBhbmUgd291bGQgcmVhZCBhcyBhIGhvbGUuICovXG4gIC8vIFRoZSBwYW5lIGlzIG5vdCBhbHdheXMgY2VudHJlZDogYSBicmFuY2ggcGxhbiBjYW4gcHV0IGl0cyBnbGF6aW5nIHRvIG9uZSBzaWRlIG9mIHRoZSBlbnRyYW5jZS5cbiAgLy8gQXV0aG9yZWQgY2VudHJlZCB3aGlsZSBpdHMgZnJhbWluZyBzYXQgb2ZmIHRvIHRoZSBsZWZ0LCB0aGUgdHdvIHJlYWQgYXMgdW5yZWxhdGVkIHBhcnRzLlxuICAvLyBgZ2xhemluZ0V4dHJhYCBmb2xkcyBmdXJ0aGVyIHBhbmVzIC0tIGEgc2lkZSB3aW5kb3csIGEgY2xlcmVzdG9yeSAtLSBpbnRvIHRoZSBTQU1FIGNvbXBvbmVudDpcbiAgLy8gb25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBob3dldmVyIG1hbnkgb3BlbmluZ3MgdGhlIHBsYXRlIHNob3dzLlxuICB7XG4gICAgY29uc3QgcGFuZSA9IGJveEF0KEcuZ2xhemluZy5jeCA/PyAwLCBHLmdsYXppbmcuY3ksIEcuZ2xhemluZy5jeiA/PyAyLjUxLCBHLmdsYXppbmcudywgRy5nbGF6aW5nLmgsIEcuZ2xhemluZy5kID8/IDAuMTApO1xuICAgIGNvbnN0IGV4dHJhID0gKEcuZ2xhemluZ0V4dHJhID8/IFtdKSBhcyBudW1iZXJbXVtdO1xuICAgIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLFxuICAgICAgICBleHRyYS5sZW5ndGggPyBtZXJnZUdlb3MoW3BhbmUsIC4uLmV4dHJhLm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpXSkgOiBwYW5lLCAnZ2xhc3MnKTtcbiAgfVxuXG4gIC8qIEZyYW1pbmcsIHRyYW5zb20sIGtpY2sgcmFpbCwgZG9vciBqYW1icyBhbmQgaGVhZGVyIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQuIEV2ZXJ5IHBhcnQgaXNcbiAgICogdGhlIHNhbWUgbWV0YWw7IGZvbGRpbmcgdGhlbSB0b2dldGhlciBpcyB0aGUgZHJhdy1jYWxsIGxldmVyIGNob3NlbiBpbiB0aGUgYmxvY2tvdXQsIG5vdCBhblxuICAgKiBvcHRpbWlzYXRpb24gZGVmZXJyZWQgdG8gdGhlIGVuZCAtLSBhIHBhcnQgc3BsaXQgZm9yIGF1dGhvcmluZyBjb252ZW5pZW5jZSBjYW5ub3QgYmUgbWVyZ2VkXG4gICAqIGFmdGVyd2FyZHMgb25jZSBhIHBpdm90IGhhbmdzIG9mZiBpdC4gRnJvbnQgZmFjZSBzdGFuZHMgcHJvdWQgb2YgZ2xhemluZyBhbmQgbXVsbGlvbnMuICovXG4gIGFkZCgnc2hvcGZyb250LWZyYW1lJywgJ1Nob3Bmcm9udCBmcmFtaW5nIGFuZCBkb29yIGJheScsIGJveGVzKEcuZnJhbWUpLCBHLmZyYW1lTWF0ZXJpYWwpO1xuXG4gIC8qIFNpZGUgZmVhdHVyZTogc2h1dHRlciwgc2VydmljZSBkb29yIG9yIGxvdXZyZSwgcGVyIHBsYXRlLiBTdGFuZHMgcHJvdWQgb2YgdGhlIHdhbGwgZmFjZSBidXRcbiAgICogZGVsaWJlcmF0ZWx5IE5PVCBvdXQgdG8gdGhlIHBhcmFwZXQgcGxhbmUgYXQgKy00LjAwIC0tIGEgZmFjZSBhdCBleGFjdGx5ICstNC4wMCB3b3VsZCBiZVxuICAgKiBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggdGhlIHBhcmFwZXQgb3V0ZXIgZmFjZSwgd2hpY2ggdGhlIGJvdW5kaW5nLWJveCBjb3BsYW5hcml0eSBjaGVja1xuICAgKiBmbGFncyBldmVuIHRob3VnaCB0aGUgdHdvIG5ldmVyIG92ZXJsYXAgaW4gWS4gKi9cbiAgaWYgKEcuc2lkZUZlYXR1cmUpIGFkZCgnc2lkZS1mZWF0dXJlJywgRy5zaWRlRmVhdHVyZS5uYW1lLCBib3hlcyhHLnNpZGVGZWF0dXJlLmJveGVzKSwgRy5zaWRlRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogRnJvbnQgZmVhdHVyZTogY2xhZGRpbmcgYmFuZCwgQVRNIGJhbmssIHVwcGVyLXN0b3JleSBiYW5kIG9yIGZvcmVjb3VydCwgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5mcm9udEZlYXR1cmUpIGFkZCgnZnJvbnQtZmVhdHVyZScsIEcuZnJvbnRGZWF0dXJlLm5hbWUsIGJveGVzKEcuZnJvbnRGZWF0dXJlLmJveGVzKSwgRy5mcm9udEZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEEgdGhpcmQgbWVyZ2VkIHNsb3QsIGZvciB3aGF0ZXZlciB0aGUgcGxhdGUgaGFzIHRoYXQgdGhlIHR3byBhYm92ZSBkbyBub3QgY292ZXIgLS0gYSBwYXJhcGV0XG4gICAqIGNvcGluZywgYSBrZXJiLCBhIGZvcmVjb3VydCBjb2x1bW4gYmFzZS4gU2FtZSBydWxlIGFzIHRoZSBvdGhlcnM6IGV2ZXJ5dGhpbmcgaW4gaXQgc2hhcmVzIG9uZVxuICAgKiBtYXRlcmlhbCBhbmQgaXMgc3VibWl0dGVkIG9uY2UuICovXG4gIGlmIChHLmV4dHJhRmVhdHVyZSkgYWRkKCdleHRyYS1mZWF0dXJlJywgRy5leHRyYUZlYXR1cmUubmFtZSwgYm94ZXMoRy5leHRyYUZlYXR1cmUuYm94ZXMpLCBHLmV4dHJhRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgwLCAwLjQ2LCAwLCAwLjk1LCAwLjcyLCAwLjg1KSxcbiAgICAgIGN5bEF0KDAsIDAuODcsIDAsIDAuMzAsIDAuMTAsIDE2KSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMTAsIDAuMDgpKTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBjb25zdCBtYXRzID0gKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCB5YXddKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCAzLjYwLCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgICkpO1xuICAgIC8vIFRoZSBwbGFudCBtYXRlcmlhbCBpcyBDT05GSUdVUkFCTEUsIG5vdCBoYXJkLWNvZGVkLiBSZWZlcmVuY2luZyBhICdnYWx2JyBpZCB0aGF0IGEgY29uZmlnXG4gICAgLy8gZG9lcyBub3QgZGVmaW5lIHNpbGVudGx5IGhhbmRzIEluc3RhbmNlZE1lc2ggYW4gdW5kZWZpbmVkIG1hdGVyaWFsLCB0aHJlZS5qcyBzdWJzdGl0dXRlcyBhXG4gICAgLy8gZGVmYXVsdCwgYW5kIHRoZSBwcm9wIHNoaXBzIG9uZSBtYXRlcmlhbCBvdmVyIGl0cyBjZWlsaW5nIHdpdGggbm90aGluZyBpbiB0aGUgY29uZmlnIHRvXG4gICAgLy8gZXhwbGFpbiB0aGUgZXh0cmEuXG4gICAgYWRkSW5zdCgncGxhbnQtY29uZGVuc2VycycsICdSb29mdG9wIGNvbmRlbnNlciB1bml0cycsIHVuaXQsIEcucGxhbnRNYXRlcmlhbCA/PyAnZ2FsdicsIG1hdHMpO1xuICB9XG5cbiAgLyogT3B0aW9uYWwgaW5zdGFuY2VkIGV4dHJhOiBjYW5vcHkgcGxhdGVzLCBwaWxhc3RlcnMgb3IgZm9yZWNvdXJ0IGNvbHVtbnMsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZXh0cmFTeXN0ZW0pIHtcbiAgICBjb25zdCBlID0gRy5leHRyYVN5c3RlbTtcbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGUua2luZCA9PT0gJ3BsYXRlJykge1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhbYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCksIGN5bEF0KDAsIC1lLmggLyAyIC0gMC4wMTUsIDAsIDAuMDg1LCAwLjAzLCAxMildKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9IGJveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpO1xuICAgIH1cbiAgICBjb25zdCBtYXRzID0gKGUuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeSwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgeSwgeikpO1xuICAgIGFkZEluc3QoZS5pZCwgZS5uYW1lLCB1bml0LCBlLm1hdGVyaWFsLCBtYXRzLCBlLnRvbmVzID8gbWF0cy5tYXAoKF8sIGkpID0+IGUudG9uZXNbaSAlIGUudG9uZXMubGVuZ3RoXSkgOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgLy8gQSByb3VuZCBzaWduIG5lZWRzIGEgU1FVQVJFIGNhbnZhczogdGhlIGN5bGluZGVyIGNhcCBtYXBzIHRoZSBjaXJjbGUgaW50byB0aGUgdW5pdCBzcXVhcmUsXG4gIC8vIHNvIGEgMjA0OHgzMjAgc3RyaXAgd291bGQgc3F1YXNoIHRoZSBtYXJrIGZsYXQuIEEgcmVjdGFuZ3VsYXIgZmFzY2lhIGtlZXBzIHRoZSB3aWRlIHN0cmlwLFxuICAvLyB3aGVyZSB0aGUgYm90dG9tIDEyLjUlIGlzIHRoZSBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugc2FtcGxlcy5cbiAgY29uc3Qgc3F1YXJlID0gISFnLnNxdWFyZTtcbiAgY29uc3QgVyA9IHNxdWFyZSA/IDUxMiA6IDIwNDgsIEggPSBzcXVhcmUgPyA1MTIgOiAzMjA7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gc3F1YXJlID8gSCA6IEggKiAwLjg3NTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwb2x5Jykge1xuICAgICAgLy8gQW4gYXJiaXRyYXJ5IHBvbHlnb24gaW4gbm9ybWFsaXNlZCBjYW52YXMgY29vcmRzLCBmb3IgYSBtYXJrIGEgZm9udCBjYW5ub3Qgc2V0IC0tIGFcbiAgICAgIC8vIGxpZ2h0bmluZyBib2x0LCBhIGNoZXZyb24sIGEgbGVhZi4gUG9pbnRzIGFyZSBbeCwgeV0gd2l0aCB4IGEgZnJhY3Rpb24gb2YgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgLy8gYW5kIHkgYSBmcmFjdGlvbiBvZiB0aGUgYmFuZCBoZWlnaHQuXG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnN0IHB0cyA9IG9wLnBvaW50cyBhcyBudW1iZXJbXVtdO1xuICAgICAgY3R4Lm1vdmVUbyhwdHNbMF1bMF0gKiBXLCBwdHNbMF1bMV0gKiBiYW5kKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBjdHgubGluZVRvKHB0c1tpXVswXSAqIFcsIHB0c1tpXVsxXSAqIGJhbmQpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIHRleC5jb2xvclNwYWNlID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2UgPz8gdGV4LmNvbG9yU3BhY2U7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlQmFuZ2tva0hvc3BpdGFsQ2xpbmljQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIEEgc3RhdGljIGV4dGVyaW9yIHNoZWxsIC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gVGhlIGRvb3JzIGFuZCBhbnlcbiAgICAvLyBzaHV0dGVyIGFyZSBhdXRob3JlZCBhcyBmaXhlZCBnZW9tZXRyeSwgc28gdGhleSBnZXQgbm8gYXhpczogYSBuYW1lZCBwaXZvdCBpcyBhIHByb21pc2VcbiAgICAvLyB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3IgaGFzXG4gICAgLy8gZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXFDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxJQUNqQixjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0Esc0JBQXNCO0FBQUEsSUFDdEIsZ0JBQWdCO0FBQUEsTUFDZDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsSUFDakIsVUFBVTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsWUFDSDtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxRQUFRO0FBQUEsVUFDUixLQUFLO0FBQUEsWUFDSDtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxXQUFXO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFB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
