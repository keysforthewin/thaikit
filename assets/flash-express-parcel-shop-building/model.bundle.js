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

// assets/flash-express-parcel-shop-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createFlashExpressParcelShopBuildingModel: () => createFlashExpressParcelShopBuildingModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "flash-express-parcel-shop-building",
  "name": "Flash Express Parcel Shop Building",
  "exportName": "FlashExpressParcelShopBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 11316910,
      "roughness": 0.9,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 5988712,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "yellow",
      "color": 15195980,
      "roughness": 0.5,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 15195980,
      "roughness": 0.36,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 8225148,
      "roughness": 0.13,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 7040876,
      "roughness": 0.52,
      "metalness": 0.25
    },
    {
      "id": "galv",
      "color": 10133927,
      "roughness": 0.5,
      "metalness": 0.3
    },
    {
      "id": "coping",
      "color": 10396326,
      "roughness": 0.86,
      "metalness": 0
    }
  ],
  "geometry": {
    "shellFront": 3.14,
    "plantMaterial": "galv",
    "fasciaWall": {
      "cy": 3.995,
      "cz": 3.02,
      "h": 0.89,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "w": 6.3,
      "h": 0.94,
      "cy": 3.86,
      "cz": 3.42
    },
    // Shopfront CENTRED on the facade (x -2.79..2.79 across the 8.0 m front). The pane is one
    // merged component: a fixed run on the left, a transom over the door bay on the right, and a
    // gap cut where the delivery hatch opens. The door leaf itself is a separate hinged part.
    "glazing": {
      "cy": 1.52,
      "cz": 3.26,
      "boxes": [
        [-1.975, 1.52, 3.26, 1.15, 2.55, 0.1],
        [0.575, 1.52, 3.26, 1.55, 2.55, 0.1],
        [-0.8, 2.2275, 3.26, 1.2, 1.135, 0.1],
        [-0.8, 0.6525, 3.26, 1.2, 0.815, 0.1],
        [1.95, 2.6175, 3.26, 1.2, 0.355, 0.1]
      ]
    },
    "frame": [
      [0, 4.36, 3.4, 6.46, 0.1, 0.14],
      [0, 3.36, 3.4, 6.46, 0.1, 0.14],
      [-3.18, 3.86, 3.4, 0.1, 1.1, 0.14],
      [3.18, 3.86, 3.4, 0.1, 1.1, 0.14],
      [-2.55, 1.52, 3.32, 0.08, 2.66, 0.16],
      [2.55, 1.52, 3.32, 0.08, 2.66, 0.16],
      [0, 2.83, 3.32, 5.18, 0.08, 0.16],
      [-0.6, 0.22, 3.32, 3.98, 0.08, 0.16],
      [1.35, 1.52, 3.32, 0.08, 2.66, 0.16],
      [1.95, 2.42, 3.32, 1.28, 0.08, 0.16],
      [-1.4, 1.52, 3.32, 0.08, 2.66, 0.16],
      [-0.2, 1.52, 3.32, 0.08, 2.66, 0.16],
      [-0.8, 1.06, 3.32, 1.28, 0.08, 0.16],
      [-0.8, 1.7, 3.32, 1.28, 0.08, 0.16],
      [-0.8, 1.36, 3.05, 1.2, 0.6, 0.3]
    ],
    "mullions": {
      "w": 0.06,
      "h": 2.58,
      "cy": 1.52,
      "cz": 3.32,
      "x": [
        -1.975,
        0.575
      ]
    },
    "door": {
      "hinge": [1.4, 0, 3.32],
      "w": 1.1,
      "h": 2.26,
      "y0": 0.1
    },
    "frontFeature": {
      "name": "Yellow shopfront surround, lintel and delivery counter",
      "material": "yellow",
      "boxes": [
        [-2.68, 1.55, 3.24, 0.22, 2.9, 0.2],
        [2.68, 1.55, 3.24, 0.22, 2.9, 0.2],
        [0, 3.1, 3.3, 5.58, 0.36, 0.4],
        [-0.8, 0.99, 3.26, 1.7, 0.14, 0.4],
        [-0.8, 0.585, 3.37, 1.5, 0.67, 0.1]
      ]
    },
    "sideFeature": {
      "name": "Roller shutter and lintel",
      "material": "galv",
      "boxes": [
        [
          3.945,
          0.1756818181818182,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          0.28704545454545455,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          0.39840909090909093,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          0.5097727272727273,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          0.6211363636363637,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          0.7325,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          0.8438636363636364,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          0.9552272727272728,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          1.0665909090909091,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          1.1779545454545457,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          1.289318181818182,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          1.4006818181818184,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          1.5120454545454547,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          1.623409090909091,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          1.7347727272727274,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          1.8461363636363637,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          1.9575,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          2.0688636363636363,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          2.180227272727273,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          2.2915909090909095,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ],
        [
          3.945,
          2.402954545454546,
          0.15,
          0.09,
          0.10245454545454546,
          3.1
        ],
        [
          3.9375,
          2.514318181818182,
          0.15,
          0.075,
          0.10245454545454546,
          3.1
        ]
      ]
    },
    "extraFeature": {
      "name": "Parapet coping and shutter lintel",
      "material": "coping",
      "boxes": [
        [
          0,
          4.52,
          3.02,
          7.96,
          0.16,
          0.44
        ],
        [
          -3.88,
          4.03,
          -0.31,
          0.16,
          0.16,
          6.3
        ],
        [
          3.88,
          4.03,
          -0.31,
          0.16,
          0.16,
          6.3
        ],
        [
          0,
          4.03,
          -3.37,
          7.96,
          0.16,
          0.14
        ],
        [
          3.92,
          2.72,
          0.15,
          0.14,
          0.34,
          3.3
        ]
      ]
    },
    "condensers": [
      [
        -1.3,
        -0.35,
        0
      ],
      [
        1.05,
        -0.35,
        0
      ]
    ]
  },
  "graphic": {
    "background": "#E7DF4C",
    "ops": [
      {
        "type": "text",
        "text": "FLA",
        "x0": 0.285,
        "x1": 0.475,
        "cy": 0.44,
        "size": 0.5,
        "fill": "#1A1A1A",
        "style": "italic bold"
      },
      {
        "type": "poly",
        "fill": "#FFFFFF",
        "stroke": "#1A1A1A",
        "strokeW": 0.05,
        "points": [[0.513, 0.1], [0.568, 0.1], [0.538, 0.4], [0.578, 0.4], [0.5, 0.76], [0.522, 0.5], [0.486, 0.5]]
      },
      {
        "type": "text",
        "text": "H",
        "x0": 0.595,
        "x1": 0.72,
        "cy": 0.44,
        "size": 0.5,
        "fill": "#1A1A1A",
        "style": "italic bold"
      },
      {
        "type": "text",
        "text": "EXPRESS",
        "x0": 0.535,
        "x1": 0.745,
        "cy": 0.8,
        "size": 0.22,
        "fill": "#1A1A1A",
        "style": "bold"
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
function createFlashExpressParcelShopBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Flash Express Parcel Shop Building";
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
        for (let i = 0; i < uv.count; i++) {
          if (!plain && i >= startAt && i < startAt + 4) uv.setXY(i, uv.getX(i), 0.125 + uv.getY(i) * 0.875);
          else uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
        }
        uv.needsUpdate = true;
        b.translate(bd.at[0], bd.at[1], bd.at[2]);
        parts.push(b);
      }
      g = parts.length === 1 ? parts[0] : mergeGeos(parts);
    }
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  add(
    "shopfront-glazing",
    "Shopfront glazing",
    G.glazing.boxes ? boxes(G.glazing.boxes) : boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, 0.1),
    "glass"
  );
  add("shopfront-frame", "Shopfront framing, door bay and delivery hatch", boxes(G.frame), G.frameMaterial);
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
    const st = 0.08, D = 0.12;
    const leafFrame = boxes([
      [st / 2, ym, 0, st, h, D],
      [w - st / 2, ym, 0, st, h, D],
      [w / 2, y1 - 0.04, 0, w, 0.08, D],
      [w / 2, y0 + 0.16, 0, w, 0.32, D],
      [w / 2, 1.05, 0, w, 0.07, D]
    ]);
    const leafPane = boxAt(w / 2, (y0 + 0.32 + y1 - 0.08) / 2, 0, w - 2 * st, y1 - 0.08 - (y0 + 0.32), 0.04);
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
      ctx.beginPath();
      const pts = op.points;
      ctx.moveTo(pts[0][0] * W, pts[0][1] * band);
      for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i][0] * W, pts[i][1] * band);
      ctx.closePath();
      if (op.stroke) {
        ctx.lineJoin = "miter";
        ctx.miterLimit = 6;
        ctx.strokeStyle = op.stroke;
        ctx.lineWidth = 2 * (op.strokeW ?? 0.04) * band;
        ctx.stroke();
      }
      ctx.fillStyle = op.fill;
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
  const root = createFlashExpressParcelShopBuildingModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
  applyFasciaGraphic(root);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRmxhc2ggRXhwcmVzcyBQYXJjZWwgU2hvcCBCdWlsZGluZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyBhbmRcbiAqIGluc3RhbmNpbmcgYXJlIGhhbmQtcm9sbGVkIGJlbG93IC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDQuNjAgeCA3LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHNob3Bmcm9udCBmYWNpbmcgK1ouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTE2IGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogT25lIG9mIHRoYWlraXQncyBzaGFyZWQgcmV0YWlsLW1vZHVsZSBidWlsZGluZ3MuIFRoZSBzaGVsbCBmcm9udCBmYWNlIHNpdHMgYXQgej0rMi41MCByYXRoZXJcbiAqIHRoYW4gdGhlIGVudmVsb3BlIGVkZ2Ugc28gdGhlIGVudHJhbmNlIGNhbm9weSBjYW4gY2FudGlsZXZlciBmb3J3YXJkIGFuZCBzdGlsbCBsYW5kIGV4YWN0bHkgb25cbiAqIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gRXZlcnkgc3VyZmFjZSBwYWlyIG9uIHRoZSBmYWNhZGUgaXMgZGVsaWJlcmF0ZWx5IG9mZnNldCBpbiBkZXB0aDpcbiAqIHR3byBzdXJmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IHRlYXIgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlXG4gKiBjYW1lcmEgbW92ZXMsIGFuZCBhdXRob3JpbmcgY29tcG9uZW50cyBmbHVzaCBhZ2FpbnN0IG9uZSBhbm90aGVyIHByb2R1Y2VzIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImZsYXNoLWV4cHJlc3MtcGFyY2VsLXNob3AtYnVpbGRpbmdcIixcbiAgICBcIm5hbWVcIjogXCJGbGFzaCBFeHByZXNzIFBhcmNlbCBTaG9wIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiRmxhc2hFeHByZXNzUGFyY2VsU2hvcEJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzE2OTEwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTk4ODcxMixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInllbGxvd1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE1MTk1OTgwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNTE5NTk4MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zNixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMC42XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA4MjI1MTQ4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjEzLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45NCxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZnJhbWVcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MDQwODc2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjI1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDEwMTMzOTI3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvcGluZ1wiLFxuICAgICAgICBcImNvbG9yXCI6IDEwMzk2MzI2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjE0LFxuICAgICAgXCJwbGFudE1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiAzLjk5NSxcbiAgICAgICAgXCJjelwiOiAzLjAyLFxuICAgICAgICBcImhcIjogMC44OSxcbiAgICAgICAgXCJkXCI6IDAuMzZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICBcImZhc2NpYVwiOiB7XG4gICAgICAgIFwid1wiOiA2LjMsXG4gICAgICAgIFwiaFwiOiAwLjk0LFxuICAgICAgICBcImN5XCI6IDMuODYsXG4gICAgICAgIFwiY3pcIjogMy40MlxuICAgICAgfSxcbiAgICAgIC8vIFNob3Bmcm9udCBDRU5UUkVEIG9uIHRoZSBmYWNhZGUgKHggLTIuNzkuLjIuNzkgYWNyb3NzIHRoZSA4LjAgbSBmcm9udCkuIFRoZSBwYW5lIGlzIG9uZVxuICAgICAgLy8gbWVyZ2VkIGNvbXBvbmVudDogYSBmaXhlZCBydW4gb24gdGhlIGxlZnQsIGEgdHJhbnNvbSBvdmVyIHRoZSBkb29yIGJheSBvbiB0aGUgcmlnaHQsIGFuZCBhXG4gICAgICAvLyBnYXAgY3V0IHdoZXJlIHRoZSBkZWxpdmVyeSBoYXRjaCBvcGVucy4gVGhlIGRvb3IgbGVhZiBpdHNlbGYgaXMgYSBzZXBhcmF0ZSBoaW5nZWQgcGFydC5cbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3lcIjogMS41MixcbiAgICAgICAgXCJjelwiOiAzLjI2LFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbLTEuOTc1LCAxLjUyLCAzLjI2LCAxLjE1LCAyLjU1LCAwLjEwXSxcbiAgICAgICAgICBbMC41NzUsIDEuNTIsIDMuMjYsIDEuNTUsIDIuNTUsIDAuMTBdLFxuICAgICAgICAgIFstMC44LCAyLjIyNzUsIDMuMjYsIDEuMiwgMS4xMzUsIDAuMTBdLFxuICAgICAgICAgIFstMC44LCAwLjY1MjUsIDMuMjYsIDEuMiwgMC44MTUsIDAuMTBdLFxuICAgICAgICAgIFsxLjk1LCAyLjYxNzUsIDMuMjYsIDEuMiwgMC4zNTUsIDAuMTBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZyYW1lXCI6IFtcbiAgICAgICAgWzAsIDQuMzYsIDMuNCwgNi40NiwgMC4xLCAwLjE0XSxcbiAgICAgICAgWzAsIDMuMzYsIDMuNCwgNi40NiwgMC4xLCAwLjE0XSxcbiAgICAgICAgWy0zLjE4LCAzLjg2LCAzLjQsIDAuMSwgMS4xLCAwLjE0XSxcbiAgICAgICAgWzMuMTgsIDMuODYsIDMuNCwgMC4xLCAxLjEsIDAuMTRdLFxuICAgICAgICBbLTIuNTUsIDEuNTIsIDMuMzIsIDAuMDgsIDIuNjYsIDAuMTZdLFxuICAgICAgICBbMi41NSwgMS41MiwgMy4zMiwgMC4wOCwgMi42NiwgMC4xNl0sXG4gICAgICAgIFswLCAyLjgzLCAzLjMyLCA1LjE4LCAwLjA4LCAwLjE2XSxcbiAgICAgICAgWy0wLjYsIDAuMjIsIDMuMzIsIDMuOTgsIDAuMDgsIDAuMTZdLFxuICAgICAgICBbMS4zNSwgMS41MiwgMy4zMiwgMC4wOCwgMi42NiwgMC4xNl0sXG4gICAgICAgIFsxLjk1LCAyLjQyLCAzLjMyLCAxLjI4LCAwLjA4LCAwLjE2XSxcbiAgICAgICAgWy0xLjQsIDEuNTIsIDMuMzIsIDAuMDgsIDIuNjYsIDAuMTZdLFxuICAgICAgICBbLTAuMiwgMS41MiwgMy4zMiwgMC4wOCwgMi42NiwgMC4xNl0sXG4gICAgICAgIFstMC44LCAxLjA2LCAzLjMyLCAxLjI4LCAwLjA4LCAwLjE2XSxcbiAgICAgICAgWy0wLjgsIDEuNzAsIDMuMzIsIDEuMjgsIDAuMDgsIDAuMTZdLFxuICAgICAgICBbLTAuOCwgMS4zNiwgMy4wNSwgMS4yLCAwLjYsIDAuMzBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA2LFxuICAgICAgICBcImhcIjogMi41OCxcbiAgICAgICAgXCJjeVwiOiAxLjUyLFxuICAgICAgICBcImN6XCI6IDMuMzIsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTEuOTc1LFxuICAgICAgICAgIDAuNTc1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImRvb3JcIjoge1xuICAgICAgICBcImhpbmdlXCI6IFsxLjQwLCAwLCAzLjMyXSxcbiAgICAgICAgXCJ3XCI6IDEuMTAsXG4gICAgICAgIFwiaFwiOiAyLjI2LFxuICAgICAgICBcInkwXCI6IDAuMTBcbiAgICAgIH0sXG4gICAgICBcImZyb250RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlllbGxvdyBzaG9wZnJvbnQgc3Vycm91bmQsIGxpbnRlbCBhbmQgZGVsaXZlcnkgY291bnRlclwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwieWVsbG93XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFstMi42OCwgMS41NSwgMy4yNCwgMC4yMiwgMi45LCAwLjJdLFxuICAgICAgICAgIFsyLjY4LCAxLjU1LCAzLjI0LCAwLjIyLCAyLjksIDAuMl0sXG4gICAgICAgICAgWzAsIDMuMSwgMy4zLCA1LjU4LCAwLjM2LCAwLjRdLFxuICAgICAgICAgIFstMC44LCAwLjk5LCAzLjI2LCAxLjcsIDAuMTQsIDAuNF0sXG4gICAgICAgICAgWy0wLjgsIDAuNTg1LCAzLjM3LCAxLjUsIDAuNjcsIDAuMV1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwic2lkZUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJSb2xsZXIgc2h1dHRlciBhbmQgbGludGVsXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC4xNzU2ODE4MTgxODE4MTgyLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjI4NzA0NTQ1NDU0NTQ1NDU1LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjM5ODQwOTA5MDkwOTA5MDkzLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjUwOTc3MjcyNzI3MjcyNzMsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuNjIxMTM2MzYzNjM2MzYzNyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMC43MzI1LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjg0Mzg2MzYzNjM2MzYzNjQsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDAuOTU1MjI3MjcyNzI3MjcyOCxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS4wNjY1OTA5MDkwOTA5MDkxLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjE3Nzk1NDU0NTQ1NDU0NTcsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuMjg5MzE4MTgxODE4MTgyLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjQwMDY4MTgxODE4MTgxODQsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuNTEyMDQ1NDU0NTQ1NDU0NyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMS42MjM0MDkwOTA5MDkwOTEsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuNzM0NzcyNzI3MjcyNzI3NCxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMS44NDYxMzYzNjM2MzYzNjM3LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjk1NzUsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDIuMDY4ODYzNjM2MzYzNjM2MyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMi4xODAyMjcyNzI3MjcyNzMsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDIuMjkxNTkwOTA5MDkwOTA5NSxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMi40MDI5NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDIuNTE0MzE4MTgxODE4MTgyLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZXh0cmFGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUGFyYXBldCBjb3BpbmcgYW5kIHNodXR0ZXIgbGludGVsXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJjb3BpbmdcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDQuNTIsXG4gICAgICAgICAgICAzLjAyLFxuICAgICAgICAgICAgNy45NixcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjQ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy44OCxcbiAgICAgICAgICAgIDQuMDMsXG4gICAgICAgICAgICAtMC4zMSxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgNi4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjg4LFxuICAgICAgICAgICAgNC4wMyxcbiAgICAgICAgICAgIC0wLjMxLFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICA2LjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTMuMzcsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTIsXG4gICAgICAgICAgICAyLjcyLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMy4zXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJjb25kZW5zZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0xLjMsXG4gICAgICAgICAgLTAuMzUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4wNSxcbiAgICAgICAgICAtMC4zNSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogXCIjRTdERjRDXCIsXG4gICAgICBcIm9wc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRkxBXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjI4NSxcbiAgICAgICAgICBcIngxXCI6IDAuNDc1LFxuICAgICAgICAgIFwiY3lcIjogMC40NCxcbiAgICAgICAgICBcInNpemVcIjogMC41LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiMxQTFBMUFcIixcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaXRhbGljIGJvbGRcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwicG9seVwiLFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICBcInN0cm9rZVwiOiBcIiMxQTFBMUFcIixcbiAgICAgICAgICBcInN0cm9rZVdcIjogMC4wNSxcbiAgICAgICAgICBcInBvaW50c1wiOiBbWzAuNTEzLCAwLjEwXSwgWzAuNTY4LCAwLjEwXSwgWzAuNTM4LCAwLjQwXSwgWzAuNTc4LCAwLjQwXSwgWzAuNTAwLCAwLjc2XSwgWzAuNTIyLCAwLjUwXSwgWzAuNDg2LCAwLjUwXV1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJIXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjU5NSxcbiAgICAgICAgICBcIngxXCI6IDAuNzIsXG4gICAgICAgICAgXCJjeVwiOiAwLjQ0LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjUsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzFBMUExQVwiLFxuICAgICAgICAgIFwic3R5bGVcIjogXCJpdGFsaWMgYm9sZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiRVhQUkVTU1wiLFxuICAgICAgICAgIFwieDBcIjogMC41MzUsXG4gICAgICAgICAgXCJ4MVwiOiAwLjc0NSxcbiAgICAgICAgICBcImN5XCI6IDAuOCxcbiAgICAgICAgICBcInNpemVcIjogMC4yMixcbiAgICAgICAgICBcImZpbGxcIjogXCIjMUExQTFBXCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImJvbGRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkbyAtLSB3aGljaCBpc1xuICogd2hhdCByZW5kZXJzIGEgYnVpbGRpbmcgbWlkLWdyZXkuXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciBtZXRhbHMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYSBoZW1pc3BoZXJlXG4gKiBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0byByZWZsZWN0XG4gKiByZW5kZXJzIGJsYWNrLiBUaGUgYWxiZWRvIHN0YXlzIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICpcbiAqIFRoZSBvbmUgcHJpbnRlZCBncmFwaGljLCB0aGUgYnJhbmQgZmFzY2lhLCBpcyBhIGNhbnZhcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uXG4gKiBUaGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gZG9lcyBub3QgYWZmZWN0IHRoYXQsIGFuZCBpdCBpcyB0aGUgZG9jdW1lbnRlZCByb3V0ZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsYXNoRXhwcmVzc1BhcmNlbFNob3BCdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRmxhc2ggRXhwcmVzcyBQYXJjZWwgU2hvcCBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NCksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsIDIuMywgMy41XSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGUuJyxcbiAgfTtcblxuICAvKiBSb29mIGRlY2sgc3BhbnMgeSAzLjUwLi4zLjYyIHNvIGl0cyB1bmRlcnNpZGUgaXMgc3VuayBJTlRPIHRoZSBzaGVsbCByYXRoZXIgdGhhbiByZXN0aW5nIG9uXG4gICAqIGl0LiBBdXRob3JlZCBmbHVzaCwgdGhlIGRlY2sncyBib3R0b20gZmFjZSBhbmQgdGhlIHBhcmFwZXQgcmluZydzIGJvdHRvbSBmYWNlIHdlcmUgYm90aCBhdFxuICAgKiB5PTMuNTUwIGFuZCBib3RoIGZhY2luZyBkb3duIC0tIDQ2IG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlLiAqL1xuICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCAzLjU2LCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MCksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCA4LjAsIEcuZmFzY2lhV2FsbC5oLCBHLmZhc2NpYVdhbGwuZF0sXG4gICAgWy0zLjg4LCAzLjc1LCAoU0YgLSAwLjMwIC0gMy41KSAvIDIsIDAuMjQsIDAuNCwgU0YgKyAzLjIwXSxcbiAgICBbMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzAsIDMuNzUsIC0zLjM4LCA4LjAsIDAuNCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3hHZW9tZXRyeSB2ZXJ0ZXggb3JkZXIgaXMgcHgsIG54LCBweSwgbnksIHB6LCBueiAtLSBmb3VyIHZlcnRpY2VzIHBlciBmYWNlIC0tIHNvIHRoZVxuICAgICAgLy8gb3V0d2FyZCBmYWNlIG9mIGEgYm9hcmQgaXMgYSBrbm93biBzbGljZSBvZiB0aGUgdXYgYXR0cmlidXRlLiBBIGJ1aWxkaW5nIGNhbiBjYXJyeSB0aGVcbiAgICAgIC8vIHNhbWUgbWFyayBvbiBtb3JlIHRoYW4gb25lIGVsZXZhdGlvbiAodGhpcyBraXQncyBob3NwaXRhbCBzaWducyBpdHMgZnJvbnQgQU5EIGl0cyBzaWRlKSxcbiAgICAgIC8vIHNvIGBib2FyZHNgIGxldHMgZWFjaCBib2FyZCBuYW1lIHRoZSBmYWNlIHRoYXQgc2FtcGxlcyB0aGUgZ3JhcGhpYyB3aGlsZSBldmVyeSBvdGhlciBmYWNlXG4gICAgICAvLyBzYW1wbGVzIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcy4gT25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBhbnkgbnVtYmVyIG9mXG4gICAgICAvLyBib2FyZHMgZmFjaW5nIGFueSB3YXkuXG4gICAgICBjb25zdCBGQUNFX1NMSUNFOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyAnK1gnOiAwLCAnLVgnOiA0LCAnK1knOiA4LCAnLVknOiAxMiwgJytaJzogMTYsICctWic6IDIwIH07XG4gICAgICBjb25zdCBib2FyZHMgPSAoZi5ib2FyZHMgYXMgYW55W10pID8/IFt7IHc6IGYudywgaDogZi5oLCBkOiAwLjEyLCBhdDogWzAsIGYuY3ksIGYuY3pdLCBmYWNlOiAnK1onIH1dO1xuICAgICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYmQgb2YgYm9hcmRzKSB7XG4gICAgICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYmQudywgYmQuaCwgYmQuZCA/PyAwLjEyKTtcbiAgICAgICAgY29uc3QgdXYgPSBiLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIC8vIGBwbGFpbmAgYm9hcmRzIGNhcnJ5IG5vIGdyYXBoaWMgYXQgYWxsOiBhIGJhbmQgdGhhdCB3cmFwcyB0aHJlZSBzaWRlcyBvZiBhIGNhbm9weSBzaG91bGRcbiAgICAgICAgLy8gcmVwZWF0IGl0cyBtYXJrIG9uIG5vbmUgb2YgdGhlIHJldHVybnMsIG9ubHkgb24gdGhlIGZhY2UgdGhhdCBmcm9udHMgdGhlIHN0cmVldC5cbiAgICAgICAgLy8gVGhlIHRlc3QgaXMgYW4gZXhwbGljaXQgYm9vbGVhbiwgTk9UIGEgc2VudGluZWwgaW5kZXggLS0gc2V0dGluZyB0aGUgc2xpY2Ugc3RhcnQgdG8gLTFcbiAgICAgICAgLy8gc3RpbGwgc2F0aXNmaWVkIGBpID49IHN0YXJ0ICYmIGkgPCBzdGFydCArIDRgIGZvciB2ZXJ0aWNlcyAwLCAxIGFuZCAyLCBzbyB0aHJlZSBjb3JuZXJzXG4gICAgICAgIC8vIG9mIHRoZSArWCBmYWNlIGtlcHQgc2FtcGxpbmcgdGhlIHdvcmRtYXJrIGJhbmQgYW5kIHNtZWFyZWQgYSBzdHJldGNoZWQgZ2hvc3Qgb2YgdGhlIG1hcmtcbiAgICAgICAgLy8gYWxvbmcgZXZlcnkgcmV0dXJuLlxuICAgICAgICBjb25zdCBwbGFpbiA9IGJkLnBsYWluID09PSB0cnVlO1xuICAgICAgICBjb25zdCBzdGFydEF0ID0gRkFDRV9TTElDRVtiZC5mYWNlID8/ICcrWiddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIHV2LmdldFgoaSksIDAuMTI1ICsgdXYuZ2V0WShpKSAqIDAuODc1KTtcbiAgICAgICAgICBlbHNlIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAwLjAzLCB1di5nZXRZKGkpICogMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICBiLnRyYW5zbGF0ZShiZC5hdFswXSwgYmQuYXRbMV0sIGJkLmF0WzJdKTtcbiAgICAgICAgcGFydHMucHVzaChiKTtcbiAgICAgIH1cbiAgICAgIGcgPSBwYXJ0cy5sZW5ndGggPT09IDEgPyBwYXJ0c1swXSA6IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgfVxuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICAvLyBUaGUgcGFuZSBpcyBub3QgYWx3YXlzIGNlbnRyZWQ6IGEgYnJhbmNoIHBsYW4gY2FuIHB1dCBpdHMgZ2xhemluZyB0byBvbmUgc2lkZSBvZiB0aGUgZW50cmFuY2UuXG4gIC8vIEF1dGhvcmVkIGNlbnRyZWQgd2hpbGUgaXRzIGZyYW1pbmcgc2F0IG9mZiB0byB0aGUgbGVmdCwgdGhlIHR3byByZWFkIGFzIHVucmVsYXRlZCBwYXJ0cy5cbiAgLy8gYGJveGVzYCBsZXRzIHRoZSBwYW5lIGJlIHNldmVyYWwgcGFuZWxzIGluIE9ORSBjb21wb25lbnQgLS0gYSBmaXhlZCBydW4sIGEgdHJhbnNvbSBvdmVyIGFcbiAgLy8gZG9vciBiYXksIGFuZCBhIGdhcCB3aGVyZSBhIGhhdGNoIG9wZW5zIC0tIHdpdGhvdXQgY29zdGluZyBhIGRyYXcgY2FsbCBwZXIgcGFuZWwuXG4gIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLFxuICAgICAgRy5nbGF6aW5nLmJveGVzID8gYm94ZXMoRy5nbGF6aW5nLmJveGVzKVxuICAgICAgICA6IGJveEF0KEcuZ2xhemluZy5jeCA/PyAwLCBHLmdsYXppbmcuY3ksIEcuZ2xhemluZy5jeiA/PyAyLjUxLCBHLmdsYXppbmcudywgRy5nbGF6aW5nLmgsIDAuMTApLCAnZ2xhc3MnKTtcblxuICAvKiBGcmFtaW5nLCB0cmFuc29tLCBraWNrIHJhaWwsIGRvb3IgamFtYnMgYW5kIGhlYWRlciBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBFdmVyeSBwYXJ0IGlzXG4gICAqIHRoZSBzYW1lIG1ldGFsOyBmb2xkaW5nIHRoZW0gdG9nZXRoZXIgaXMgdGhlIGRyYXctY2FsbCBsZXZlciBjaG9zZW4gaW4gdGhlIGJsb2Nrb3V0LCBub3QgYW5cbiAgICogb3B0aW1pc2F0aW9uIGRlZmVycmVkIHRvIHRoZSBlbmQgLS0gYSBwYXJ0IHNwbGl0IGZvciBhdXRob3JpbmcgY29udmVuaWVuY2UgY2Fubm90IGJlIG1lcmdlZFxuICAgKiBhZnRlcndhcmRzIG9uY2UgYSBwaXZvdCBoYW5ncyBvZmYgaXQuIEZyb250IGZhY2Ugc3RhbmRzIHByb3VkIG9mIGdsYXppbmcgYW5kIG11bGxpb25zLiAqL1xuICBhZGQoJ3Nob3Bmcm9udC1mcmFtZScsICdTaG9wZnJvbnQgZnJhbWluZywgZG9vciBiYXkgYW5kIGRlbGl2ZXJ5IGhhdGNoJywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogRW50cmFuY2UgZG9vcjogYSByZWFsIExFQUYgaHVuZyBvbiBhIHJlYWwgSElOR0UsIG5vdCBhIHJlY3RhbmdsZSBwYWludGVkIGludG8gdGhlIGdsYXppbmcuXG4gICAqIFRoZSBsZWFmIGlzIGJ1aWx0IGluIGhpbmdlLWxvY2FsIGNvb3JkaW5hdGVzICh4IHJ1bnMgZnJvbSB0aGUgaGluZ2Ugc3RpbGUgb3V0d2FyZCkgdW5kZXIgYVxuICAgKiBwaXZvdCBub2RlIGF0IHRoZSBqYW1iLCBzbyByb3RhdGluZyB0aGUgbm9kZSBhYm91dCArWSBzd2luZ3MgdGhlIGRvb3Igb3Blbi4gVHdvIG1lc2hlcywgdHdvXG4gICAqIGRyYXcgY2FsbHMgLS0gc3RpbGVzIGFuZCByYWlscyBpbiB0aGUgZnJhbWUgbWV0YWwsIGEgcGFuZSBpbiB0aGUgZ2xhc3MgLS0gYW5kIHRoaXMgaXMgdGhlXG4gICAqIG9uZSBwYXJ0IG9mIHRoZSBwcm9wIHRoYXQgZWFybnMgYSBuYW1lZCBwaXZvdC4gVGhlIGxlYWYgc2l0cyBpbiBpdHMgb3duIGRlcHRoIGJhbmQgKGZyYW1lXG4gICAqIDMuMjYuLjMuMzgsIHBhbmUgMy4zMC4uMy4zNCkgYmV0d2VlbiB0aGUgZ2xhemluZyAoMy4yMS4uMy4zMSkgYW5kIHRoZSBmaXhlZCBmcmFtZVxuICAgKiAoMy4yNC4uMy40MCkgc28gbm90aGluZyBvbiBpdCBpcyBjb3BsYW5hciB3aXRoIGEgZml4ZWQgZmFjZSBhdCBhbnkgc3dpbmcgYW5nbGUuICovXG4gIGNvbnN0IHBpdm90Tm9kZXM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgaWYgKEcuZG9vcikge1xuICAgIGNvbnN0IGQgPSBHLmRvb3I7XG4gICAgY29uc3QgaGluZ2UgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgICBoaW5nZS5uYW1lID0gJ2Rvb3ItaGluZ2UnO1xuICAgIGhpbmdlLnBvc2l0aW9uLnNldChkLmhpbmdlWzBdLCBkLmhpbmdlWzFdLCBkLmhpbmdlWzJdKTtcbiAgICBoaW5nZS51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ2FydGljdWxhdGVkJyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ2Rvb3ItaGluZ2UnLFxuICAgICAgICAgICAgICAgbm90ZTogJ0VudHJhbmNlIGRvb3Igc3dpbmdzIGFib3V0IHRoZSBqYW1iIHN0aWxlLiBDbG9zZWQgYXQgMCwgb3BlbnMgb3V0d2FyZCB0b3dhcmQgK1ogd2l0aCBuZWdhdGl2ZSB5YXcuJyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQoaGluZ2UpO1xuICAgIHBpdm90Tm9kZXMucHVzaChoaW5nZSk7XG4gICAgY29uc3QgdyA9IGQudyBhcyBudW1iZXIsIGggPSBkLmggYXMgbnVtYmVyLCB5MCA9IGQueTAgYXMgbnVtYmVyLCB5MSA9IHkwICsgaCwgeW0gPSAoeTAgKyB5MSkgLyAyO1xuICAgIGNvbnN0IHN0ID0gMC4wOCwgRCA9IDAuMTI7XG4gICAgY29uc3QgbGVhZkZyYW1lID0gYm94ZXMoW1xuICAgICAgW3N0IC8gMiwgeW0sIDAsIHN0LCBoLCBEXSxcbiAgICAgIFt3IC0gc3QgLyAyLCB5bSwgMCwgc3QsIGgsIERdLFxuICAgICAgW3cgLyAyLCB5MSAtIDAuMDQsIDAsIHcsIDAuMDgsIERdLFxuICAgICAgW3cgLyAyLCB5MCArIDAuMTYsIDAsIHcsIDAuMzIsIERdLFxuICAgICAgW3cgLyAyLCAxLjA1LCAwLCB3LCAwLjA3LCBEXSxcbiAgICBdKTtcbiAgICBjb25zdCBsZWFmUGFuZSA9IGJveEF0KHcgLyAyLCAoeTAgKyAwLjMyICsgeTEgLSAwLjA4KSAvIDIsIDAsIHcgLSAyICogc3QsIHkxIC0gMC4wOCAtICh5MCArIDAuMzIpLCAwLjA0KTtcbiAgICBmb3IgKGNvbnN0IFtpZCwgbmFtZSwgZ2VvLCBtYXRdIG9mIFtcbiAgICAgIFsnZG9vci1sZWFmLWZyYW1lJywgJ0VudHJhbmNlIGRvb3IgbGVhZiBmcmFtZScsIGxlYWZGcmFtZSwgRy5mcmFtZU1hdGVyaWFsXSxcbiAgICAgIFsnZG9vci1sZWFmLWdsYXNzJywgJ0VudHJhbmNlIGRvb3IgbGVhZiBnbGFzcycsIGxlYWZQYW5lLCAnZ2xhc3MnXSxcbiAgICBdIGFzIFtzdHJpbmcsIHN0cmluZywgVEhSRUUuQnVmZmVyR2VvbWV0cnksIHN0cmluZ11bXSkge1xuICAgICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0XSk7XG4gICAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgICAgbm9kZS5hZGQobWVzaCk7IGhpbmdlLmFkZChub2RlKTtcbiAgICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICAvKiBTaWRlIGZlYXR1cmU6IHNodXR0ZXIsIHNlcnZpY2UgZG9vciBvciBsb3V2cmUsIHBlciBwbGF0ZS4gU3RhbmRzIHByb3VkIG9mIHRoZSB3YWxsIGZhY2UgYnV0XG4gICAqIGRlbGliZXJhdGVseSBOT1Qgb3V0IHRvIHRoZSBwYXJhcGV0IHBsYW5lIGF0ICstNC4wMCAtLSBhIGZhY2UgYXQgZXhhY3RseSArLTQuMDAgd291bGQgYmVcbiAgICogY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyIGZhY2UsIHdoaWNoIHRoZSBib3VuZGluZy1ib3ggY29wbGFuYXJpdHkgY2hlY2tcbiAgICogZmxhZ3MgZXZlbiB0aG91Z2ggdGhlIHR3byBuZXZlciBvdmVybGFwIGluIFkuICovXG4gIGlmIChHLnNpZGVGZWF0dXJlKSBhZGQoJ3NpZGUtZmVhdHVyZScsIEcuc2lkZUZlYXR1cmUubmFtZSwgYm94ZXMoRy5zaWRlRmVhdHVyZS5ib3hlcyksIEcuc2lkZUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEZyb250IGZlYXR1cmU6IGNsYWRkaW5nIGJhbmQsIEFUTSBiYW5rLCB1cHBlci1zdG9yZXkgYmFuZCBvciBmb3JlY291cnQsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZnJvbnRGZWF0dXJlKSBhZGQoJ2Zyb250LWZlYXR1cmUnLCBHLmZyb250RmVhdHVyZS5uYW1lLCBib3hlcyhHLmZyb250RmVhdHVyZS5ib3hlcyksIEcuZnJvbnRGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIHRoaXJkIG1lcmdlZCBzbG90LCBmb3Igd2hhdGV2ZXIgdGhlIHBsYXRlIGhhcyB0aGF0IHRoZSB0d28gYWJvdmUgZG8gbm90IGNvdmVyIC0tIGEgcGFyYXBldFxuICAgKiBjb3BpbmcsIGEga2VyYiwgYSBmb3JlY291cnQgY29sdW1uIGJhc2UuIFNhbWUgcnVsZSBhcyB0aGUgb3RoZXJzOiBldmVyeXRoaW5nIGluIGl0IHNoYXJlcyBvbmVcbiAgICogbWF0ZXJpYWwgYW5kIGlzIHN1Ym1pdHRlZCBvbmNlLiAqL1xuICBpZiAoRy5leHRyYUZlYXR1cmUpIGFkZCgnZXh0cmEtZmVhdHVyZScsIEcuZXh0cmFGZWF0dXJlLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlLmJveGVzKSwgRy5leHRyYUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIE11bGxpb25zOiB0aGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCBhIHNob3Bmcm9udC4gSW5zdGFuY2VzXG4gICAqIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGFzIGNvbXBvbmVudHMgdGhleSB3b3VsZCBoYXZlIGNvc3Qgb25lIGVhY2ggYW5kIGJsb3duIHRoZVxuICAgKiBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBzaXQgSU5TSURFIHRoZSBmcmFtZSBkZXB0aCBiYW5kIGF0IGJvdGggZW5kcyBzbyB0aGV5IGFyZSBub3RcbiAgICogY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlIGdsYXppbmcgc28gdGhlIGdsYXNzIHJlYWRzIGFzIHJlY2Vzc2VkLiAqL1xuICB7XG4gICAgY29uc3QgbSA9IEcubXVsbGlvbnM7XG4gICAgY29uc3QgbWF0cyA9IChtLnggYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBtLmN5LCBtLmN6ID8/IDIuNTgpKTtcbiAgICBhZGRJbnN0KCdzaG9wZnJvbnQtbXVsbGlvbnMnLCAnU2hvcGZyb250IG11bGxpb25zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KG0udywgbS5oLCAwLjA4KSwgRy5mcmFtZU1hdGVyaWFsLCBtYXRzKTtcbiAgfVxuXG4gIC8qIFJvb2Z0b3AgY29uZGVuc2VyczogY2FzaW5nLCBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAgICogRmVldCBzdGFydCBiZWxvdyB0aGUgZGVjayB0b3Agc28gdGhlIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS4gKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgMC40NiwgMCwgMC45NSwgMC43MiwgMC44NSksXG4gICAgICBjeWxBdCgwLCAwLjg3LCAwLCAwLjMwLCAwLjEwLCAxNiksXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGZ4IG9mIFstMC40LCAwLjRdKSBmb3IgKGNvbnN0IGZ6IG9mIFstMC4zNSwgMC4zNV0pIHBhcnRzLnB1c2goYm94QXQoZngsIDAuMDUsIGZ6LCAwLjA4LCAwLjEwLCAwLjA4KSk7XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgY29uc3QgbWF0cyA9IChHLmNvbmRlbnNlcnMgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeiwgeWF3XSkgPT5cbiAgICAgIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgMy42MCwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXG4gICAgICApKTtcbiAgICAvLyBUaGUgcGxhbnQgbWF0ZXJpYWwgaXMgQ09ORklHVVJBQkxFLCBub3QgaGFyZC1jb2RlZC4gUmVmZXJlbmNpbmcgYSAnZ2FsdicgaWQgdGhhdCBhIGNvbmZpZ1xuICAgIC8vIGRvZXMgbm90IGRlZmluZSBzaWxlbnRseSBoYW5kcyBJbnN0YW5jZWRNZXNoIGFuIHVuZGVmaW5lZCBtYXRlcmlhbCwgdGhyZWUuanMgc3Vic3RpdHV0ZXMgYVxuICAgIC8vIGRlZmF1bHQsIGFuZCB0aGUgcHJvcCBzaGlwcyBvbmUgbWF0ZXJpYWwgb3ZlciBpdHMgY2VpbGluZyB3aXRoIG5vdGhpbmcgaW4gdGhlIGNvbmZpZyB0b1xuICAgIC8vIGV4cGxhaW4gdGhlIGV4dHJhLlxuICAgIGFkZEluc3QoJ3BsYW50LWNvbmRlbnNlcnMnLCAnUm9vZnRvcCBjb25kZW5zZXIgdW5pdHMnLCB1bml0LCBHLnBsYW50TWF0ZXJpYWwgPz8gJ2dhbHYnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIE9wdGlvbmFsIGluc3RhbmNlZCBleHRyYTogY2Fub3B5IHBsYXRlcywgcGlsYXN0ZXJzIG9yIGZvcmVjb3VydCBjb2x1bW5zLCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmV4dHJhU3lzdGVtKSB7XG4gICAgY29uc3QgZSA9IEcuZXh0cmFTeXN0ZW07XG4gICAgbGV0IHVuaXQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChlLmtpbmQgPT09ICdwbGF0ZScpIHtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MoW2JveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpLCBjeWxBdCgwLCAtZS5oIC8gMiAtIDAuMDE1LCAwLCAwLjA4NSwgMC4wMywgMTIpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKTtcbiAgICB9XG4gICAgY29uc3QgbWF0cyA9IChlLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIHksIHopKTtcbiAgICBhZGRJbnN0KGUuaWQsIGUubmFtZSwgdW5pdCwgZS5tYXRlcmlhbCwgbWF0cywgZS50b25lcyA/IG1hdHMubWFwKChfLCBpKSA9PiBlLnRvbmVzW2kgJSBlLnRvbmVzLmxlbmd0aF0pIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcywgcGl2b3ROb2RlcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lICYgeyBwaXZvdE5vZGVzOiBUSFJFRS5PYmplY3QzRFtdIH07XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgLy8gQSByb3VuZCBzaWduIG5lZWRzIGEgU1FVQVJFIGNhbnZhczogdGhlIGN5bGluZGVyIGNhcCBtYXBzIHRoZSBjaXJjbGUgaW50byB0aGUgdW5pdCBzcXVhcmUsXG4gIC8vIHNvIGEgMjA0OHgzMjAgc3RyaXAgd291bGQgc3F1YXNoIHRoZSBtYXJrIGZsYXQuIEEgcmVjdGFuZ3VsYXIgZmFzY2lhIGtlZXBzIHRoZSB3aWRlIHN0cmlwLFxuICAvLyB3aGVyZSB0aGUgYm90dG9tIDEyLjUlIGlzIHRoZSBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugc2FtcGxlcy5cbiAgY29uc3Qgc3F1YXJlID0gISFnLnNxdWFyZTtcbiAgY29uc3QgVyA9IHNxdWFyZSA/IDUxMiA6IDIwNDgsIEggPSBzcXVhcmUgPyA1MTIgOiAzMjA7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gc3F1YXJlID8gSCA6IEggKiAwLjg3NTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwb2x5Jykge1xuICAgICAgLy8gQW4gYXJiaXRyYXJ5IHBvbHlnb24gaW4gbm9ybWFsaXNlZCBjYW52YXMgY29vcmRzLCBmb3IgYSBtYXJrIGEgZm9udCBjYW5ub3Qgc2V0IC0tIGFcbiAgICAgIC8vIGxpZ2h0bmluZyBib2x0LCBhIGNoZXZyb24sIGEgbGVhZi4gUG9pbnRzIGFyZSBbeCwgeV0gd2l0aCB4IGEgZnJhY3Rpb24gb2YgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgLy8gYW5kIHkgYSBmcmFjdGlvbiBvZiB0aGUgYmFuZCBoZWlnaHQuXG4gICAgICAvLyBBbiBvcHRpb25hbCBvdXRsaW5lOiBzdHJva2VkIGF0IERPVUJMRSB0aGUgd2FudGVkIHdpZHRoIGJlZm9yZSB0aGUgZmlsbCwgc28gdGhlIGZpbGxcbiAgICAgIC8vIGNvdmVycyB0aGUgaW5uZXIgaGFsZiBhbmQgd2hhdCByZW1haW5zIGlzIGEgY2xlYW4gb3V0ZXIgYm9yZGVyIG9mIGV4YWN0bHkgYHN0cm9rZVdgLlxuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3QgcHRzID0gb3AucG9pbnRzIGFzIG51bWJlcltdW107XG4gICAgICBjdHgubW92ZVRvKHB0c1swXVswXSAqIFcsIHB0c1swXVsxXSAqIGJhbmQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIGN0eC5saW5lVG8ocHRzW2ldWzBdICogVywgcHRzW2ldWzFdICogYmFuZCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBpZiAob3Auc3Ryb2tlKSB7XG4gICAgICAgIGN0eC5saW5lSm9pbiA9ICdtaXRlcic7IGN0eC5taXRlckxpbWl0ID0gNjtcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gb3Auc3Ryb2tlOyBjdHgubGluZVdpZHRoID0gMiAqIChvcC5zdHJva2VXID8/IDAuMDQpICogYmFuZDtcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXQob3AudGV4dCwgYCR7b3Auc3R5bGUgPz8gJ2JvbGQnfSAke01hdGgucm91bmQob3Auc2l6ZSAqIGJhbmQpfXB4ICR7b3AuZmFtaWx5ID8/ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ31gLFxuICAgICAgICBvcC54MCAqIFcsIG9wLngxICogVywgb3AuY3kgKiBiYW5kLCBvcC5maWxsLCBvcC5zdHJva2UsIG9wLnN0cm9rZVcgPyBvcC5zdHJva2VXICogYmFuZCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgdGV4LmNvbG9yU3BhY2UgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZSA/PyB0ZXguY29sb3JTcGFjZTtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFdoaXRlIGJhc2Ugc28gdGhlIGNhbnZhcyBzaG93cyBhcyBkcmF3biByYXRoZXIgdGhhbiB0aW50ZWQgLS0gdGhlIG1lYXN1cmVkIGZhc2NpYSBjb2xvdXIgaXNcbiAgLy8gYWxyZWFkeSBwYWludGVkIGludG8gdGhlIGNhbnZhcyBiYWNrZ3JvdW5kLlxuICBtYXRlcmlhbC5jb2xvci5zZXRIZXgoMHhmZmZmZmYpO1xuICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVGbGFzaEV4cHJlc3NQYXJjZWxTaG9wQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBgZG9vci1oaW5nZWAgZm9yIHRoZSBlbnRyYW5jZSBsZWFmIC0tIHRoZSBvbmUgcGFydCBvZiB0aGlzIHNoZWxsXG4gICAgLy8gdGhhdCBhY3R1YWxseSBzd2luZ3MuIFRoZSByb2xsZXIgc2h1dHRlciBzdGF5cyBmaXhlZCBnZW9tZXRyeSBhbmQgZ2V0cyBubyBheGlzOiBhIG5hbWVkXG4gICAgLy8gcGl2b3QgaXMgYSBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBub1xuICAgIC8vIG1lY2hhbmlzbXMgZm9yIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gWy4uLigocnQucGl2b3ROb2RlcyA/PyBbXSkgYXMgVEhSRUUuT2JqZWN0M0RbXSldO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxN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QUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFB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O0FBQ0EsU0FBSyxJQUFJLFNBQVM7QUFDbEIsV0FBTyxLQUFLLFNBQVM7QUFPckIsVUFBTSxZQUFZLE9BQU8sUUFBUyxHQUFHLGFBQWEsQ0FBQyxDQUF5QixFQUN6RSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ3pFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEdBQUksRUFBYSxFQUFFO0FBS3BELFVBQU0sVUFBVSxvQkFBSSxJQUE4QjtBQUNsRCxlQUFXLENBQUMsTUFBTSxPQUFPLEtBQUssT0FBTyxRQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBc0MsR0FBRztBQUM5RyxjQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQUEsSUFDaEM7QUFDQSxlQUFXLFFBQVEsT0FBTyxPQUFPLEtBQUssR0FBRztBQUN2QyxZQUFNLFFBQVMsTUFBYyxVQUFVLGVBQWUsYUFBYTtBQUNuRSxVQUFJLE9BQU8sVUFBVSxZQUFZLENBQUMsTUFBTztBQUN6QyxVQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRyxTQUFRLElBQUksT0FBTyxDQUFDLENBQUM7QUFDOUMsY0FBUSxJQUFJLEtBQUssRUFBRyxLQUFLLElBQUk7QUFBQSxJQUMvQjtBQUVBLFNBQUssU0FBUyxnQkFBZ0I7QUFBQSxNQUM1QixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtILE9BQU8sT0FBTyxLQUFLLEtBQUssRUFBRTtBQUFBLE1BQzFCO0FBQUEsTUFDQSxTQUFTLE9BQU8sT0FBUSxHQUFHLFdBQVcsQ0FBQyxDQUFvQztBQUFBLE1BQzNFO0FBQUEsTUFDQSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxPQUFPLE9BQU8sRUFBRSxNQUFNLFFBQVEsRUFBRTtBQUFBLE1BQ3RGLE1BQU0sRUFBRSxPQUFPLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7QUFXTyxTQUFTLFlBQVksVUFBa0MsQ0FBQyxHQUFnQjtBQUM3RSxTQUFPLGtCQUFrQixRQUFXLE9BQU87QUFDN0M7IiwKICAibmFtZXMiOiBbXQp9Cg==
