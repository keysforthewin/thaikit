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

// scratch/flash-express-parcel-shop-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createFlashExpressParcelShopBuildingModel: () => createFlashExpressParcelShopBuildingModel,
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
    "glazing": {
      "cx": -1.05,
      "w": 4.4,
      "h": 2.55,
      "cy": 1.52,
      "cz": 3.26
    },
    "frame": [
      [
        0,
        4.36,
        3.4,
        6.46,
        0.1,
        0.14
      ],
      [
        0,
        3.36,
        3.4,
        6.46,
        0.1,
        0.14
      ],
      [
        -3.18,
        3.86,
        3.4,
        0.1,
        1.1,
        0.14
      ],
      [
        3.18,
        3.86,
        3.4,
        0.1,
        1.1,
        0.14
      ],
      [
        -3.25,
        1.52,
        3.32,
        0.08,
        2.66,
        0.16
      ],
      [
        1.15,
        1.52,
        3.32,
        0.08,
        2.66,
        0.16
      ],
      [
        -1.05,
        2.83,
        3.32,
        4.48,
        0.08,
        0.16
      ],
      [
        -1.05,
        0.22,
        3.32,
        4.48,
        0.08,
        0.16
      ]
    ],
    "mullions": {
      "w": 0.06,
      "h": 2.58,
      "cy": 1.52,
      "cz": 3.32,
      "x": [
        -2.3,
        -1.35,
        -0.4,
        0.45
      ]
    },
    "frontFeature": {
      "name": "Yellow shopfront surround and lintel",
      "material": "yellow",
      "boxes": [
        [
          -3.38,
          1.55,
          3.24,
          0.22,
          2.9,
          0.2
        ],
        [
          1.28,
          1.55,
          3.24,
          0.22,
          2.9,
          0.2
        ],
        [
          -1.05,
          3.1,
          3.3,
          4.9,
          0.36,
          0.4
        ]
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
        "fill": "#1A1A1A",
        "points": [
          [
            0.52,
            0.14
          ],
          [
            0.56,
            0.14
          ],
          [
            0.534,
            0.4
          ],
          [
            0.566,
            0.4
          ],
          [
            0.505,
            0.78
          ],
          [
            0.522,
            0.47
          ],
          [
            0.492,
            0.47
          ]
        ]
      },
      {
        "type": "text",
        "text": "H",
        "x0": 0.575,
        "x1": 0.7,
        "cy": 0.44,
        "size": 0.5,
        "fill": "#1A1A1A",
        "style": "italic bold"
      },
      {
        "type": "text",
        "text": "EXPRESS",
        "x0": 0.47,
        "x1": 0.72,
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
    } else {
      const b = new THREE.BoxGeometry(f.w, f.h, 0.12);
      const uv = b.getAttribute("uv");
      for (let i = 0; i < uv.count; i++) {
        if (i >= 16 && i < 20) uv.setXY(i, uv.getX(i), 0.125 + uv.getY(i) * 0.875);
        else uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
      }
      uv.needsUpdate = true;
      g = b;
    }
    g.translate(0, f.cy, f.cz);
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  add(
    "shopfront-glazing",
    "Shopfront glazing",
    boxAt(G.glazing.cx ?? 0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, 0.1),
    "glass"
  );
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
  const root = createFlashExpressParcelShopBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogRmxhc2ggRXhwcmVzcyBQYXJjZWwgU2hvcCBCdWlsZGluZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyBhbmRcbiAqIGluc3RhbmNpbmcgYXJlIGhhbmQtcm9sbGVkIGJlbG93IC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDQuNjAgeCA3LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHNob3Bmcm9udCBmYWNpbmcgK1ouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogT25lIG9mIHRoYWlraXQncyBzaGFyZWQgcmV0YWlsLW1vZHVsZSBidWlsZGluZ3MuIFRoZSBzaGVsbCBmcm9udCBmYWNlIHNpdHMgYXQgej0rMi41MCByYXRoZXJcbiAqIHRoYW4gdGhlIGVudmVsb3BlIGVkZ2Ugc28gdGhlIGVudHJhbmNlIGNhbm9weSBjYW4gY2FudGlsZXZlciBmb3J3YXJkIGFuZCBzdGlsbCBsYW5kIGV4YWN0bHkgb25cbiAqIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gRXZlcnkgc3VyZmFjZSBwYWlyIG9uIHRoZSBmYWNhZGUgaXMgZGVsaWJlcmF0ZWx5IG9mZnNldCBpbiBkZXB0aDpcbiAqIHR3byBzdXJmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IHRlYXIgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlXG4gKiBjYW1lcmEgbW92ZXMsIGFuZCBhdXRob3JpbmcgY29tcG9uZW50cyBmbHVzaCBhZ2FpbnN0IG9uZSBhbm90aGVyIHByb2R1Y2VzIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImZsYXNoLWV4cHJlc3MtcGFyY2VsLXNob3AtYnVpbGRpbmdcIixcbiAgICBcIm5hbWVcIjogXCJGbGFzaCBFeHByZXNzIFBhcmNlbCBTaG9wIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiRmxhc2hFeHByZXNzUGFyY2VsU2hvcEJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExMzE2OTEwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTk4ODcxMixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MyxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInllbGxvd1wiLFxuICAgICAgICBcImNvbG9yXCI6IDE1MTk1OTgwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNTE5NTk4MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4zNixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMC42XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA4MjI1MTQ4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjEzLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45NCxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZnJhbWVcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MDQwODc2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjI1XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDEwMTMzOTI3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvcGluZ1wiLFxuICAgICAgICBcImNvbG9yXCI6IDEwMzk2MzI2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjE0LFxuICAgICAgXCJwbGFudE1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiAzLjk5NSxcbiAgICAgICAgXCJjelwiOiAzLjAyLFxuICAgICAgICBcImhcIjogMC44OSxcbiAgICAgICAgXCJkXCI6IDAuMzZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICBcImZhc2NpYVwiOiB7XG4gICAgICAgIFwid1wiOiA2LjMsXG4gICAgICAgIFwiaFwiOiAwLjk0LFxuICAgICAgICBcImN5XCI6IDMuODYsXG4gICAgICAgIFwiY3pcIjogMy40MlxuICAgICAgfSxcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3hcIjogLTEuMDUsXG4gICAgICAgIFwid1wiOiA0LjQsXG4gICAgICAgIFwiaFwiOiAyLjU1LFxuICAgICAgICBcImN5XCI6IDEuNTIsXG4gICAgICAgIFwiY3pcIjogMy4yNlxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICA0LjM2LFxuICAgICAgICAgIDMuNCxcbiAgICAgICAgICA2LjQ2LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMuMzYsXG4gICAgICAgICAgMy40LFxuICAgICAgICAgIDYuNDYsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjE4LFxuICAgICAgICAgIDMuODYsXG4gICAgICAgICAgMy40LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy4xOCxcbiAgICAgICAgICAzLjg2LFxuICAgICAgICAgIDMuNCxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjI1LFxuICAgICAgICAgIDEuNTIsXG4gICAgICAgICAgMy4zMixcbiAgICAgICAgICAwLjA4LFxuICAgICAgICAgIDIuNjYsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4xNSxcbiAgICAgICAgICAxLjUyLFxuICAgICAgICAgIDMuMzIsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAyLjY2LFxuICAgICAgICAgIDAuMTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0xLjA1LFxuICAgICAgICAgIDIuODMsXG4gICAgICAgICAgMy4zMixcbiAgICAgICAgICA0LjQ4LFxuICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTEuMDUsXG4gICAgICAgICAgMC4yMixcbiAgICAgICAgICAzLjMyLFxuICAgICAgICAgIDQuNDgsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm11bGxpb25zXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMDYsXG4gICAgICAgIFwiaFwiOiAyLjU4LFxuICAgICAgICBcImN5XCI6IDEuNTIsXG4gICAgICAgIFwiY3pcIjogMy4zMixcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi4zLFxuICAgICAgICAgIC0xLjM1LFxuICAgICAgICAgIC0wLjQsXG4gICAgICAgICAgMC40NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJZZWxsb3cgc2hvcGZyb250IHN1cnJvdW5kIGFuZCBsaW50ZWxcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInllbGxvd1wiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy4zOCxcbiAgICAgICAgICAgIDEuNTUsXG4gICAgICAgICAgICAzLjI0LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4yOCxcbiAgICAgICAgICAgIDEuNTUsXG4gICAgICAgICAgICAzLjI0LFxuICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTEuMDUsXG4gICAgICAgICAgICAzLjEsXG4gICAgICAgICAgICAzLjMsXG4gICAgICAgICAgICA0LjksXG4gICAgICAgICAgICAwLjM2LFxuICAgICAgICAgICAgMC40XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJzaWRlRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlJvbGxlciBzaHV0dGVyIGFuZCBsaW50ZWxcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjE3NTY4MTgxODE4MTgxODIsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDAuMjg3MDQ1NDU0NTQ1NDU0NTUsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuMzk4NDA5MDkwOTA5MDkwOTMsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDAuNTA5NzcyNzI3MjcyNzI3MyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC42MjExMzYzNjM2MzYzNjM3LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjczMjUsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDAuODQzODYzNjM2MzYzNjM2NCxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMC45NTUyMjcyNzI3MjcyNzI4LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjA2NjU5MDkwOTA5MDkwOTEsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDEuMTc3OTU0NTQ1NDU0NTQ1NyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS4yODkzMTgxODE4MTgxODIsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDEuNDAwNjgxODE4MTgxODE4NCxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS41MTIwNDU0NTQ1NDU0NTQ3LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjYyMzQwOTA5MDkwOTA5MSxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTAyNDU0NTQ1NDU0NTQ1NDYsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMS43MzQ3NzI3MjcyNzI3Mjc0LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjg0NjEzNjM2MzYzNjM2MzcsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuOTU3NSxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMi4wNjg4NjM2MzYzNjM2MzYzLFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAyLjE4MDIyNzI3MjcyNzI3MyxcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMi4yOTE1OTA5MDkwOTA5MDk1LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAyLjQwMjk1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMDI0NTQ1NDU0NTQ1NDU0NixcbiAgICAgICAgICAgIDMuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45Mzc1LFxuICAgICAgICAgICAgMi41MTQzMTgxODE4MTgxODIsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjEwMjQ1NDU0NTQ1NDU0NTQ2LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJleHRyYUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQYXJhcGV0IGNvcGluZyBhbmQgc2h1dHRlciBsaW50ZWxcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImNvcGluZ1wiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgNC41MixcbiAgICAgICAgICAgIDMuMDIsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuNDRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjg4LFxuICAgICAgICAgICAgNC4wMyxcbiAgICAgICAgICAgIC0wLjMxLFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICA2LjNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuMzEsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDYuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDQuMDMsXG4gICAgICAgICAgICAtMy4zNyxcbiAgICAgICAgICAgIDcuOTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45MixcbiAgICAgICAgICAgIDIuNzIsXG4gICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgICAzLjNcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTEuMyxcbiAgICAgICAgICAtMC4zNSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjA1LFxuICAgICAgICAgIC0wLjM1LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJncmFwaGljXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNFN0RGNENcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJGTEFcIixcbiAgICAgICAgICBcIngwXCI6IDAuMjg1LFxuICAgICAgICAgIFwieDFcIjogMC40NzUsXG4gICAgICAgICAgXCJjeVwiOiAwLjQ0LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjUsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzFBMUExQVwiLFxuICAgICAgICAgIFwic3R5bGVcIjogXCJpdGFsaWMgYm9sZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJwb2x5XCIsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiIzFBMUExQVwiLFxuICAgICAgICAgIFwicG9pbnRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41MixcbiAgICAgICAgICAgICAgMC4xNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgICAgMC4xNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41MzQsXG4gICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41NjYsXG4gICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41MDUsXG4gICAgICAgICAgICAgIDAuNzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNTIyLFxuICAgICAgICAgICAgICAwLjQ3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjQ5MixcbiAgICAgICAgICAgICAgMC40N1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJIXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjU3NSxcbiAgICAgICAgICBcIngxXCI6IDAuNyxcbiAgICAgICAgICBcImN5XCI6IDAuNDQsXG4gICAgICAgICAgXCJzaXplXCI6IDAuNSxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMUExQTFBXCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiBcIml0YWxpYyBib2xkXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJFWFBSRVNTXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjQ3LFxuICAgICAgICAgIFwieDFcIjogMC43MixcbiAgICAgICAgICBcImN5XCI6IDAuOCxcbiAgICAgICAgICBcInNpemVcIjogMC4yMixcbiAgICAgICAgICBcImZpbGxcIjogXCIjMUExQTFBXCIsXG4gICAgICAgICAgXCJzdHlsZVwiOiBcImJvbGRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkbyAtLSB3aGljaCBpc1xuICogd2hhdCByZW5kZXJzIGEgYnVpbGRpbmcgbWlkLWdyZXkuXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciBtZXRhbHMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYSBoZW1pc3BoZXJlXG4gKiBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0byByZWZsZWN0XG4gKiByZW5kZXJzIGJsYWNrLiBUaGUgYWxiZWRvIHN0YXlzIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICpcbiAqIFRoZSBvbmUgcHJpbnRlZCBncmFwaGljLCB0aGUgYnJhbmQgZmFzY2lhLCBpcyBhIGNhbnZhcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uXG4gKiBUaGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gZG9lcyBub3QgYWZmZWN0IHRoYXQsIGFuZCBpdCBpcyB0aGUgZG9jdW1lbnRlZCByb3V0ZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUZsYXNoRXhwcmVzc1BhcmNlbFNob3BCdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnRmxhc2ggRXhwcmVzcyBQYXJjZWwgU2hvcCBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NCksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsIDIuMywgMy41XSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGUuJyxcbiAgfTtcblxuICAvKiBSb29mIGRlY2sgc3BhbnMgeSAzLjUwLi4zLjYyIHNvIGl0cyB1bmRlcnNpZGUgaXMgc3VuayBJTlRPIHRoZSBzaGVsbCByYXRoZXIgdGhhbiByZXN0aW5nIG9uXG4gICAqIGl0LiBBdXRob3JlZCBmbHVzaCwgdGhlIGRlY2sncyBib3R0b20gZmFjZSBhbmQgdGhlIHBhcmFwZXQgcmluZydzIGJvdHRvbSBmYWNlIHdlcmUgYm90aCBhdFxuICAgKiB5PTMuNTUwIGFuZCBib3RoIGZhY2luZyBkb3duIC0tIDQ2IG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlLiAqL1xuICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCAzLjU2LCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MCksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCA4LjAsIEcuZmFzY2lhV2FsbC5oLCBHLmZhc2NpYVdhbGwuZF0sXG4gICAgWy0zLjg4LCAzLjc1LCAoU0YgLSAwLjMwIC0gMy41KSAvIDIsIDAuMjQsIDAuNCwgU0YgKyAzLjIwXSxcbiAgICBbMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzAsIDMuNzUsIC0zLjM4LCA4LjAsIDAuNCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShmLncsIGYuaCwgMC4xMik7XG4gICAgICBjb25zdCB1diA9IGIuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykge1xuICAgICAgICBpZiAoaSA+PSAxNiAmJiBpIDwgMjApIHV2LnNldFhZKGksIHV2LmdldFgoaSksIDAuMTI1ICsgdXYuZ2V0WShpKSAqIDAuODc1KTtcbiAgICAgICAgZWxzZSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogMC4wMywgdXYuZ2V0WShpKSAqIDAuMDMpO1xuICAgICAgfVxuICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgZyA9IGI7XG4gICAgfVxuICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICAvLyBUaGUgcGFuZSBpcyBub3QgYWx3YXlzIGNlbnRyZWQ6IGEgYnJhbmNoIHBsYW4gY2FuIHB1dCBpdHMgZ2xhemluZyB0byBvbmUgc2lkZSBvZiB0aGUgZW50cmFuY2UuXG4gIC8vIEF1dGhvcmVkIGNlbnRyZWQgd2hpbGUgaXRzIGZyYW1pbmcgc2F0IG9mZiB0byB0aGUgbGVmdCwgdGhlIHR3byByZWFkIGFzIHVucmVsYXRlZCBwYXJ0cy5cbiAgYWRkKCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsXG4gICAgICBib3hBdChHLmdsYXppbmcuY3ggPz8gMCwgRy5nbGF6aW5nLmN5LCBHLmdsYXppbmcuY3ogPz8gMi41MSwgRy5nbGF6aW5nLncsIEcuZ2xhemluZy5oLCAwLjEwKSwgJ2dsYXNzJyk7XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBjbGFkZGluZyBiYW5kLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogQSB0aGlyZCBtZXJnZWQgc2xvdCwgZm9yIHdoYXRldmVyIHRoZSBwbGF0ZSBoYXMgdGhhdCB0aGUgdHdvIGFib3ZlIGRvIG5vdCBjb3ZlciAtLSBhIHBhcmFwZXRcbiAgICogY29waW5nLCBhIGtlcmIsIGEgZm9yZWNvdXJ0IGNvbHVtbiBiYXNlLiBTYW1lIHJ1bGUgYXMgdGhlIG90aGVyczogZXZlcnl0aGluZyBpbiBpdCBzaGFyZXMgb25lXG4gICAqIG1hdGVyaWFsIGFuZCBpcyBzdWJtaXR0ZWQgb25jZS4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlKSBhZGQoJ2V4dHJhLWZlYXR1cmUnLCBHLmV4dHJhRmVhdHVyZS5uYW1lLCBib3hlcyhHLmV4dHJhRmVhdHVyZS5ib3hlcyksIEcuZXh0cmFGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBNdWxsaW9uczogdGhlIGZpbmUgdmVydGljYWwgZ3JpZCBpcyB0aGUgbW9zdCByZWNvZ25pc2FibGUgdGhpbmcgYWJvdXQgYSBzaG9wZnJvbnQuIEluc3RhbmNlc1xuICAgKiBvbiBvbmUgZ2VvbWV0cnkgY29zdCBvbmUgZHJhdyBjYWxsOyBhcyBjb21wb25lbnRzIHRoZXkgd291bGQgaGF2ZSBjb3N0IG9uZSBlYWNoIGFuZCBibG93biB0aGVcbiAgICogY2VpbGluZyBvbiB0aGVpciBvd24uIFRoZXkgc2l0IElOU0lERSB0aGUgZnJhbWUgZGVwdGggYmFuZCBhdCBib3RoIGVuZHMgc28gdGhleSBhcmUgbm90XG4gICAqIGNvcGxhbmFyIHdpdGggaXQsIHdoaWxlIHN0aWxsIHN0YW5kaW5nIHByb3VkIG9mIHRoZSBnbGF6aW5nIHNvIHRoZSBnbGFzcyByZWFkcyBhcyByZWNlc3NlZC4gKi9cbiAge1xuICAgIGNvbnN0IG0gPSBHLm11bGxpb25zO1xuICAgIGNvbnN0IG1hdHMgPSAobS54IGFzIG51bWJlcltdKS5tYXAoKHgpID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgbS5jeSwgbS5jeiA/PyAyLjU4KSk7XG4gICAgYWRkSW5zdCgnc2hvcGZyb250LW11bGxpb25zJywgJ1Nob3Bmcm9udCBtdWxsaW9ucycsIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShtLncsIG0uaCwgMC4wOCksIEcuZnJhbWVNYXRlcmlhbCwgbWF0cyk7XG4gIH1cblxuICAvKiBSb29mdG9wIGNvbmRlbnNlcnM6IGNhc2luZywgZmFuIGNvd2wgYW5kIGZvdXIgZmVldCBNRVJHRUQgaW50byBhIHNpbmdsZSBpbnN0YW5jZWQgZ2VvbWV0cnkuXG4gICAqIEZlZXQgc3RhcnQgYmVsb3cgdGhlIGRlY2sgdG9wIHNvIHRoZSB0d28gb3ZlcmxhcCByYXRoZXIgdGhhbiBzaGFyaW5nIGEgcGxhbmUuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KDAsIDAuNDYsIDAsIDAuOTUsIDAuNzIsIDAuODUpLFxuICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zMCwgMC4xMCwgMTYpLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBmeCBvZiBbLTAuNCwgMC40XSkgZm9yIChjb25zdCBmeiBvZiBbLTAuMzUsIDAuMzVdKSBwYXJ0cy5wdXNoKGJveEF0KGZ4LCAwLjA1LCBmeiwgMC4wOCwgMC4xMCwgMC4wOCkpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGNvbnN0IG1hdHMgPSAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHosIHlhd10pID0+XG4gICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIDMuNjAsIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHlhdyksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxuICAgICAgKSk7XG4gICAgLy8gVGhlIHBsYW50IG1hdGVyaWFsIGlzIENPTkZJR1VSQUJMRSwgbm90IGhhcmQtY29kZWQuIFJlZmVyZW5jaW5nIGEgJ2dhbHYnIGlkIHRoYXQgYSBjb25maWdcbiAgICAvLyBkb2VzIG5vdCBkZWZpbmUgc2lsZW50bHkgaGFuZHMgSW5zdGFuY2VkTWVzaCBhbiB1bmRlZmluZWQgbWF0ZXJpYWwsIHRocmVlLmpzIHN1YnN0aXR1dGVzIGFcbiAgICAvLyBkZWZhdWx0LCBhbmQgdGhlIHByb3Agc2hpcHMgb25lIG1hdGVyaWFsIG92ZXIgaXRzIGNlaWxpbmcgd2l0aCBub3RoaW5nIGluIHRoZSBjb25maWcgdG9cbiAgICAvLyBleHBsYWluIHRoZSBleHRyYS5cbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgRy5wbGFudE1hdGVyaWFsID8/ICdnYWx2JywgbWF0cyk7XG4gIH1cblxuICAvKiBPcHRpb25hbCBpbnN0YW5jZWQgZXh0cmE6IGNhbm9weSBwbGF0ZXMsIHBpbGFzdGVycyBvciBmb3JlY291cnQgY29sdW1ucywgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5leHRyYVN5c3RlbSkge1xuICAgIGNvbnN0IGUgPSBHLmV4dHJhU3lzdGVtO1xuICAgIGxldCB1bml0OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZS5raW5kID09PSAncGxhdGUnKSB7XG4gICAgICB1bml0ID0gbWVyZ2VHZW9zKFtib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKSwgY3lsQXQoMCwgLWUuaCAvIDIgLSAwLjAxNSwgMCwgMC4wODUsIDAuMDMsIDEyKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdHMgPSAoZS5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB5LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCB5LCB6KSk7XG4gICAgYWRkSW5zdChlLmlkLCBlLm5hbWUsIHVuaXQsIGUubWF0ZXJpYWwsIG1hdHMsIGUudG9uZXMgPyBtYXRzLm1hcCgoXywgaSkgPT4gZS50b25lc1tpICUgZS50b25lcy5sZW5ndGhdKSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBicmFuZCBmYXNjaWEgY2FudmFzICovXG5cbi8qKiBEcmF3IHRoZSBicmFuZCB3b3JkbWFyayBvbnRvIGEgY2FudmFzIGFuZCBhc3NpZ24gaXQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLiBUaGlzIGlzIHRoZVxuICogIGRvY3VtZW50ZWQgcm91dGUgZm9yIGEgcHJpbnRlZCBicmFuZCBmYXNjaWEgYW5kIGlzIHVuYWZmZWN0ZWQgYnkgdGhlIG1hdGVyaWFsJ3MgYHRleHR1cmVsZXNzYFxuICogIGRlY2xhcmF0aW9uIC0tIHdoYXQgdGhhdCBza2lwcyBpcyB0aGUgZml2ZS1jYW52YXMgUFJPQ0VEVVJBTCBzZXQsIGEgZGlmZmVyZW50IHRoaW5nIGVudGlyZWx5LlxuICpcbiAqICBUZXh0IGlzIGZpdHRlZCB0byBpdHMgZmllbGQgYnkgTUVBU1VSRU1FTlQgcmF0aGVyIHRoYW4gYnkgYSBmb250LXNpemUgcmF0aW86IGhlYWRsZXNzIENocm9tZSdzXG4gKiAgZm9udCBmYWxsYmFjayBkZWNpZGVzIHRoZSByZWFsIGFkdmFuY2Ugd2lkdGhzLCBzbyB0aGUgb25seSByZWxpYWJsZSB3YXkgdG8gZmlsbCBhIGtub3duIGJveCBpc1xuICogIHRvIG1lYXN1cmUgdGhlIHN0cmluZyBhbmQgc2NhbGUgaXQgaG9yaXpvbnRhbGx5LiAqL1xuZnVuY3Rpb24gYXBwbHlGYXNjaWFHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lc2ggPSBydD8ubWVzaGVzPy5bJ2Zhc2NpYS1wYW5lbCddO1xuICBpZiAoIW1lc2ggfHwgdHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuO1xuICBjb25zdCBtYXRlcmlhbCA9IG1lc2gubWF0ZXJpYWwgYXMgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw7XG4gIGlmICghbWF0ZXJpYWwpIHJldHVybjtcblxuICBjb25zdCBnID0gQ09ORklHLmdyYXBoaWMgYXMgYW55O1xuICAvLyBBIHJvdW5kIHNpZ24gbmVlZHMgYSBTUVVBUkUgY2FudmFzOiB0aGUgY3lsaW5kZXIgY2FwIG1hcHMgdGhlIGNpcmNsZSBpbnRvIHRoZSB1bml0IHNxdWFyZSxcbiAgLy8gc28gYSAyMDQ4eDMyMCBzdHJpcCB3b3VsZCBzcXVhc2ggdGhlIG1hcmsgZmxhdC4gQSByZWN0YW5ndWxhciBmYXNjaWEga2VlcHMgdGhlIHdpZGUgc3RyaXAsXG4gIC8vIHdoZXJlIHRoZSBib3R0b20gMTIuNSUgaXMgdGhlIHBsYWluIGNvcm5lciBldmVyeSBub24tZnJvbnQgZmFjZSBzYW1wbGVzLlxuICBjb25zdCBzcXVhcmUgPSAhIWcuc3F1YXJlO1xuICBjb25zdCBXID0gc3F1YXJlID8gNTEyIDogMjA0OCwgSCA9IHNxdWFyZSA/IDUxMiA6IDMyMDtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IFc7IGNhbnZhcy5oZWlnaHQgPSBIO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICBjdHguZmlsbFN0eWxlID0gZy5iYWNrZ3JvdW5kO1xuICBjdHguZmlsbFJlY3QoMCwgMCwgVywgSCk7XG4gIGNvbnN0IGJhbmQgPSBzcXVhcmUgPyBIIDogSCAqIDAuODc1O1xuXG4gIGNvbnN0IGZpdCA9ICh0ZXh0OiBzdHJpbmcsIGZvbnQ6IHN0cmluZywgeDA6IG51bWJlciwgeDE6IG51bWJlciwgY3k6IG51bWJlciwgZmlsbDogc3RyaW5nLCBzdHJva2VDb2w/OiBzdHJpbmcsIHN0cm9rZVc/OiBudW1iZXIpID0+IHtcbiAgICBjdHguZm9udCA9IGZvbnQ7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG4gICAgY29uc3QgdyA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcbiAgICBjb25zdCBzID0gKHgxIC0geDApIC8gdztcbiAgICBjdHguc2F2ZSgpO1xuICAgIGN0eC50cmFuc2xhdGUoeDAsIDApO1xuICAgIGN0eC5zY2FsZShzLCAxKTtcbiAgICBpZiAoc3Ryb2tlQ29sKSB7IGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7IGN0eC5zdHJva2VTdHlsZSA9IHN0cm9rZUNvbDsgY3R4LmxpbmVXaWR0aCA9IChzdHJva2VXID8/IDYpIC8gczsgY3R4LnN0cm9rZVRleHQodGV4dCwgMCwgY3kpOyB9XG4gICAgY3R4LmZpbGxTdHlsZSA9IGZpbGw7XG4gICAgY3R4LmZpbGxUZXh0KHRleHQsIDAsIGN5KTtcbiAgICBjdHgucmVzdG9yZSgpO1xuICB9O1xuXG4gIGZvciAoY29uc3Qgb3Agb2YgZy5vcHMgYXMgYW55W10pIHtcbiAgICBpZiAob3AudHlwZSA9PT0gJ3JlY3QnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGNvbnN0IHggPSBvcC54ICogVywgeSA9IG9wLnkgKiBiYW5kLCB3ID0gb3AudyAqIFcsIGggPSBvcC5oICogYmFuZCwgciA9IChvcC5yID8/IDApICogYmFuZDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGlmIChyID4gMCkge1xuICAgICAgICBjdHgubW92ZVRvKHggKyByLCB5KTsgY3R4LmxpbmVUbyh4ICsgdyAtIHIsIHkpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSwgeCArIHcsIHkgKyByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgdywgeSArIGggLSByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHkgKyBoLCB4ICsgdyAtIHIsIHkgKyBoKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4ICsgciwgeSArIGgpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5ICsgaCwgeCwgeSArIGggLSByKTtcbiAgICAgICAgY3R4LmxpbmVUbyh4LCB5ICsgcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByLCB5KTtcbiAgICAgIH0gZWxzZSBjdHgucmVjdCh4LCB5LCB3LCBoKTtcbiAgICAgIGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdjaXJjbGUnKSB7XG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGN0eC5hcmMob3AuY3ggKiBXLCBvcC5jeSAqIGJhbmQsIG9wLnIgKiBiYW5kLCAwLCBNYXRoLlBJICogMik7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3BvbHknKSB7XG4gICAgICAvLyBBbiBhcmJpdHJhcnkgcG9seWdvbiBpbiBub3JtYWxpc2VkIGNhbnZhcyBjb29yZHMsIGZvciBhIG1hcmsgYSBmb250IGNhbm5vdCBzZXQgLS0gYVxuICAgICAgLy8gbGlnaHRuaW5nIGJvbHQsIGEgY2hldnJvbiwgYSBsZWFmLiBQb2ludHMgYXJlIFt4LCB5XSB3aXRoIHggYSBmcmFjdGlvbiBvZiB0aGUgY2FudmFzIHdpZHRoXG4gICAgICAvLyBhbmQgeSBhIGZyYWN0aW9uIG9mIHRoZSBiYW5kIGhlaWdodC5cbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY29uc3QgcHRzID0gb3AucG9pbnRzIGFzIG51bWJlcltdW107XG4gICAgICBjdHgubW92ZVRvKHB0c1swXVswXSAqIFcsIHB0c1swXVsxXSAqIGJhbmQpO1xuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIGN0eC5saW5lVG8ocHRzW2ldWzBdICogVywgcHRzW2ldWzFdICogYmFuZCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgICBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBmaXQob3AudGV4dCwgYCR7b3Auc3R5bGUgPz8gJ2JvbGQnfSAke01hdGgucm91bmQob3Auc2l6ZSAqIGJhbmQpfXB4ICR7b3AuZmFtaWx5ID8/ICdBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmJ31gLFxuICAgICAgICBvcC54MCAqIFcsIG9wLngxICogVywgb3AuY3kgKiBiYW5kLCBvcC5maWxsLCBvcC5zdHJva2UsIG9wLnN0cm9rZVcgPyBvcC5zdHJva2VXICogYmFuZCA6IHVuZGVmaW5lZCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY2FudmFzKTtcbiAgdGV4LmNvbG9yU3BhY2UgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZSA/PyB0ZXguY29sb3JTcGFjZTtcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBtYXRlcmlhbC5tYXAgPSB0ZXg7XG4gIC8vIFdoaXRlIGJhc2Ugc28gdGhlIGNhbnZhcyBzaG93cyBhcyBkcmF3biByYXRoZXIgdGhhbiB0aW50ZWQgLS0gdGhlIG1lYXN1cmVkIGZhc2NpYSBjb2xvdXIgaXNcbiAgLy8gYWxyZWFkeSBwYWludGVkIGludG8gdGhlIGNhbnZhcyBiYWNrZ3JvdW5kLlxuICBtYXRlcmlhbC5jb2xvci5zZXRIZXgoMHhmZmZmZmYpO1xuICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVGbGFzaEV4cHJlc3NQYXJjZWxTaG9wQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIEEgc3RhdGljIGV4dGVyaW9yIHNoZWxsIC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gVGhlIGRvb3JzIGFuZCBhbnlcbiAgICAvLyBzaHV0dGVyIGFyZSBhdXRob3JlZCBhcyBmaXhlZCBnZW9tZXRyeSwgc28gdGhleSBnZXQgbm8gYXhpczogYSBuYW1lZCBwaXZvdCBpcyBhIHByb21pc2VcbiAgICAvLyB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3IgaGFzXG4gICAgLy8gZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXFDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGlCQUFpQjtBQUFBLElBQ2pCLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxJQUNqQixVQUFVO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFdBQVc7QUFBQSxJQUNULGNBQWM7QUFBQSxJQUNkLE9BQU87QUFBQSxNQUNMO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxVQUNSO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFB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
