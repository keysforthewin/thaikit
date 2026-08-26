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

// scratch/lotus-s-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createLotussStoreBuildingModel: () => createLotussStoreBuildingModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "lotus-s-store-building",
  "name": "Lotus's Store Building",
  "exportName": "LotussStoreBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 9080724,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 6250851,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "green",
      "color": 5542e3,
      "roughness": 0.62,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 15265001,
      "roughness": 0.35,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 8422786,
      "roughness": 0.16,
      "metalness": 0,
      "opacity": 0.92,
      "envMapIntensity": 1.1
    },
    {
      "id": "aluminium",
      "color": 11447979,
      "roughness": 0.42,
      "metalness": 0.35
    },
    {
      "id": "galv",
      "color": 10133670,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "fasciaWall": {
      "cy": 3.995,
      "cz": 2.47,
      "h": 0.89,
      "d": 0.54
    },
    "fasciaWallMaterial": "green",
    "parapetExtra": [
      [
        0,
        1.7,
        2.54,
        7.88,
        3.4,
        0.16
      ],
      [
        3.53,
        1.7,
        2.54,
        0.86,
        3.4,
        0.18
      ],
      [
        3.9,
        1.7,
        1.95,
        0.12,
        3.4,
        1.1
      ]
    ],
    "fascia": {
      "w": 3.9,
      "h": 0.86,
      "cy": 3.86,
      "cz": 2.82
    },
    "frameMaterial": "aluminium",
    "glazing": {
      "w": 6.3,
      "h": 2.75,
      "cy": 1.55,
      "cz": 2.63
    },
    "frame": [
      [
        -3.185,
        1.55,
        2.69,
        0.07,
        3,
        0.18
      ],
      [
        3.185,
        1.55,
        2.69,
        0.07,
        3,
        0.18
      ],
      [
        0,
        3.02,
        2.69,
        6.44,
        0.07,
        0.18
      ],
      [
        0,
        0.09,
        2.69,
        6.44,
        0.08,
        0.18
      ],
      [
        0,
        2.36,
        2.69,
        6.3,
        0.07,
        0.18
      ],
      [
        -1.1,
        1.25,
        2.69,
        0.07,
        2.3,
        0.18
      ],
      [
        1.1,
        1.25,
        2.69,
        0.07,
        2.3,
        0.18
      ],
      [
        0,
        2.48,
        2.69,
        2.2,
        0.2,
        0.18
      ]
    ],
    "mullions": {
      "w": 0.06,
      "h": 2.86,
      "cy": 1.53,
      "cz": 2.69,
      "x": [
        -2.72,
        -2.3,
        -1.88,
        -1.46,
        0,
        1.46,
        1.88,
        2.3,
        2.72
      ]
    },
    "frontFeature": {
      "name": "Parapet coping",
      "material": "aluminium",
      "boxes": [
        [
          0,
          4.52,
          2.47,
          7.96,
          0.16,
          0.62
        ],
        [
          -3.88,
          4.03,
          -0.65,
          0.16,
          0.16,
          5.66
        ],
        [
          3.88,
          4.03,
          -0.65,
          0.16,
          0.16,
          5.66
        ],
        [
          0,
          4.03,
          -3.37,
          7.96,
          0.16,
          0.14
        ]
      ]
    },
    "sideFeature": {
      "name": "Roller shutter and head box",
      "material": "galv",
      "boxes": [
        [
          3.945,
          0.20111111111111113,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.32333333333333336,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.4455555555555556,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.5677777777777778,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.6900000000000001,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          0.8122222222222223,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          0.9344444444444445,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.0566666666666666,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.1788888888888889,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.301111111111111,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.4233333333333333,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.5455555555555556,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.6677777777777778,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          1.79,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          1.9122222222222223,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          2.0344444444444445,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.945,
          2.1566666666666667,
          0.35,
          0.09,
          0.11244444444444446,
          1.55
        ],
        [
          3.9375,
          2.2788888888888894,
          0.35,
          0.075,
          0.11244444444444446,
          1.55
        ],
        [
          3.935,
          2.46,
          0.35,
          0.11,
          0.28,
          1.65
        ]
      ]
    },
    "condensers": [
      [
        0.55,
        -0.45,
        0
      ],
      [
        1.95,
        -1.15,
        0
      ]
    ],
    "extraSystem": {
      "id": "canopy-plates",
      "name": "Entrance canopy plates",
      "kind": "plate",
      "material": "aluminium",
      "w": 1.04,
      "h": 0.13,
      "d": 1,
      "at": [
        [
          -2.65,
          3,
          3
        ],
        [
          -1.59,
          3,
          3
        ],
        [
          -0.53,
          3,
          3
        ],
        [
          0.53,
          3,
          3
        ],
        [
          1.59,
          3,
          3
        ],
        [
          2.65,
          3,
          3
        ]
      ]
    }
  },
  "graphic": {
    "background": "#E8ECE9",
    "ops": [
      {
        "type": "text",
        "text": "Lotus",
        "x0": 0.2,
        "x1": 0.62,
        "cy": 0.52,
        "size": 0.62,
        "fill": "#0E7A4F"
      },
      {
        "type": "text",
        "text": "'s",
        "x0": 0.635,
        "x1": 0.78,
        "cy": 0.52,
        "size": 0.62,
        "fill": "#E3A81C"
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
function createLotussStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Lotus's Store Building";
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
  add("building-shell", "Building shell", boxAt(0, 1.775, -0.47, 7.88, 3.55, 5.94), "wall");
  colliders["building-shell"] = {
    shape: "box",
    localCenter: [0, 2.3, 0],
    halfExtents: [4, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  add("roof-deck", "Roof deck", boxAt(0, 3.56, -0.47, 7.8, 0.12, 5.9), "deck");
  add("parapet", "Parapet ring and fascia wall", boxes([
    [0, G.fasciaWall.cy, G.fasciaWall.cz, 8, G.fasciaWall.h, G.fasciaWall.d],
    [-3.88, 3.75, -0.65, 0.24, 0.4, 5.7],
    [3.88, 3.75, -0.65, 0.24, 0.4, 5.7],
    [0, 3.75, -3.38, 8, 0.4, 0.24],
    // Anything else in the SAME material folds in here rather than costing its own draw call --
    // full-height facade cladding, corner pilasters, a plinth. This is the merge lever: two
    // parts that share a material should never be two submissions.
    ...G.parapetExtra ?? []
  ]), G.fasciaWallMaterial);
  {
    const f = G.fascia;
    const g = new THREE.BoxGeometry(f.w, f.h, 0.12);
    const uv = g.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) {
      if (i >= 16 && i < 20) uv.setXY(i, uv.getX(i), 0.125 + uv.getY(i) * 0.875);
      else uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
    }
    uv.needsUpdate = true;
    g.translate(0, f.cy, f.cz);
    add("fascia-panel", "Brand fascia panel", g, "fascia");
  }
  add("shopfront-glazing", "Shopfront glazing", boxAt(0, G.glazing.cy, G.glazing.cz ?? 2.51, G.glazing.w, G.glazing.h, 0.1), "glass");
  add("shopfront-frame", "Shopfront framing and door bay", boxes(G.frame), G.frameMaterial);
  if (G.sideFeature) add("side-feature", G.sideFeature.name, boxes(G.sideFeature.boxes), G.sideFeature.material);
  if (G.frontFeature) add("front-feature", G.frontFeature.name, boxes(G.frontFeature.boxes), G.frontFeature.material);
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
    addInst("plant-condensers", "Rooftop condenser units", unit, "galv", mats);
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
  const W = 2048, H = 320;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  const g = CONFIG.graphic;
  ctx.fillStyle = g.background;
  ctx.fillRect(0, 0, W, H);
  const band = H * 0.875;
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
  const root = createLotussStoreBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTG90dXNcXCdzIFN0b3JlIEJ1aWxkaW5nIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nIGFuZFxuICogaW5zdGFuY2luZyBhcmUgaGFuZC1yb2xsZWQgYmVsb3cgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA4LjAwIHggNC42MCB4IDcuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBPbmUgb2YgdGhhaWtpdCdzIHNoYXJlZCByZXRhaWwtbW9kdWxlIGJ1aWxkaW5ncy4gVGhlIHNoZWxsIGZyb250IGZhY2Ugc2l0cyBhdCB6PSsyLjUwIHJhdGhlclxuICogdGhhbiB0aGUgZW52ZWxvcGUgZWRnZSBzbyB0aGUgZW50cmFuY2UgY2Fub3B5IGNhbiBjYW50aWxldmVyIGZvcndhcmQgYW5kIHN0aWxsIGxhbmQgZXhhY3RseSBvblxuICogdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBFdmVyeSBzdXJmYWNlIHBhaXIgb24gdGhlIGZhY2FkZSBpcyBkZWxpYmVyYXRlbHkgb2Zmc2V0IGluIGRlcHRoOlxuICogdHdvIHN1cmZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgdGVhciBpbnRvIGludGVybGVhdmVkIHRyaWFuZ2xlcyBhcyB0aGVcbiAqIGNhbWVyYSBtb3ZlcywgYW5kIGF1dGhvcmluZyBjb21wb25lbnRzIGZsdXNoIGFnYWluc3Qgb25lIGFub3RoZXIgcHJvZHVjZXMgdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwibG90dXMtcy1zdG9yZS1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIkxvdHVzJ3MgU3RvcmUgQnVpbGRpbmdcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJMb3R1c3NTdG9yZUJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDkwODA3MjQsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogNjI1MDg1MSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdyZWVuXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTU0MjAwMCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZhc2NpYVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE1MjY1MDAxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjM1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDg0MjI3ODYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjkyLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJhbHVtaW5pdW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTQ0Nzk3OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEzMzY3MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiZmFzY2lhV2FsbFwiOiB7XG4gICAgICAgIFwiY3lcIjogMy45OTUsXG4gICAgICAgIFwiY3pcIjogMi40NyxcbiAgICAgICAgXCJoXCI6IDAuODksXG4gICAgICAgIFwiZFwiOiAwLjU0XG4gICAgICB9LFxuICAgICAgXCJmYXNjaWFXYWxsTWF0ZXJpYWxcIjogXCJncmVlblwiLFxuICAgICAgXCJwYXJhcGV0RXh0cmFcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjcsXG4gICAgICAgICAgMi41NCxcbiAgICAgICAgICA3Ljg4LFxuICAgICAgICAgIDMuNCxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjUzLFxuICAgICAgICAgIDEuNyxcbiAgICAgICAgICAyLjU0LFxuICAgICAgICAgIDAuODYsXG4gICAgICAgICAgMy40LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuOSxcbiAgICAgICAgICAxLjcsXG4gICAgICAgICAgMS45NSxcbiAgICAgICAgICAwLjEyLFxuICAgICAgICAgIDMuNCxcbiAgICAgICAgICAxLjFcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJ3XCI6IDMuOSxcbiAgICAgICAgXCJoXCI6IDAuODYsXG4gICAgICAgIFwiY3lcIjogMy44NixcbiAgICAgICAgXCJjelwiOiAyLjgyXG4gICAgICB9LFxuICAgICAgXCJmcmFtZU1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICBcImdsYXppbmdcIjoge1xuICAgICAgICBcIndcIjogNi4zLFxuICAgICAgICBcImhcIjogMi43NSxcbiAgICAgICAgXCJjeVwiOiAxLjU1LFxuICAgICAgICBcImN6XCI6IDIuNjNcbiAgICAgIH0sXG4gICAgICBcImZyYW1lXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjE4NSxcbiAgICAgICAgICAxLjU1LFxuICAgICAgICAgIDIuNjksXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuMTg1LFxuICAgICAgICAgIDEuNTUsXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAzLjAyLFxuICAgICAgICAgIDIuNjksXG4gICAgICAgICAgNi40NCxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDYuNDQsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIuMzYsXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICA2LjMsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMS4xLFxuICAgICAgICAgIDEuMjUsXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDIuMyxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMS4yNSxcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMi4zLFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMi40OCxcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDIuMixcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA2LFxuICAgICAgICBcImhcIjogMi44NixcbiAgICAgICAgXCJjeVwiOiAxLjUzLFxuICAgICAgICBcImN6XCI6IDIuNjksXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTIuNzIsXG4gICAgICAgICAgLTIuMyxcbiAgICAgICAgICAtMS44OCxcbiAgICAgICAgICAtMS40NixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEuNDYsXG4gICAgICAgICAgMS44OCxcbiAgICAgICAgICAyLjMsXG4gICAgICAgICAgMi43MlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQYXJhcGV0IGNvcGluZ1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiYWx1bWluaXVtXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjUyLFxuICAgICAgICAgICAgMi40NyxcbiAgICAgICAgICAgIDcuOTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC42MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuODgsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTAuNjUsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDUuNjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjAzLFxuICAgICAgICAgICAgLTMuMzcsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZGVGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiUm9sbGVyIHNodXR0ZXIgYW5kIGhlYWQgYm94XCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTQ1LFxuICAgICAgICAgICAgMC4yMDExMTExMTExMTExMTExMyxcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDAuMzIzMzMzMzMzMzMzMzMzMzYsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjQ0NTU1NTU1NTU1NTU1NTYsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjU2Nzc3Nzc3Nzc3Nzc3NzgsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjY5MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAwLjgxMjIyMjIyMjIyMjIyMjMsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAwLjkzNDQ0NDQ0NDQ0NDQ0NDUsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjA1NjY2NjY2NjY2NjY2NjYsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjE3ODg4ODg4ODg4ODg4ODksXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAxLjMwMTExMTExMTExMTExMSxcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuNDIzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDEuNTQ1NTU1NTU1NTU1NTU1NixcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk0NSxcbiAgICAgICAgICAgIDEuNjY3Nzc3Nzc3Nzc3Nzc3OCxcbiAgICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4xMTI0NDQ0NDQ0NDQ0NDQ0NixcbiAgICAgICAgICAgIDEuNTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTM3NSxcbiAgICAgICAgICAgIDEuNzksXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAxLjkxMjIyMjIyMjIyMjIyMjMsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAyLjAzNDQ0NDQ0NDQ0NDQ0NDUsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NDUsXG4gICAgICAgICAgICAyLjE1NjY2NjY2NjY2NjY2NjcsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgIDAuMTEyNDQ0NDQ0NDQ0NDQ0NDYsXG4gICAgICAgICAgICAxLjU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjkzNzUsXG4gICAgICAgICAgICAyLjI3ODg4ODg4ODg4ODg4OTQsXG4gICAgICAgICAgICAwLjM1LFxuICAgICAgICAgICAgMC4wNzUsXG4gICAgICAgICAgICAwLjExMjQ0NDQ0NDQ0NDQ0NDQ2LFxuICAgICAgICAgICAgMS41NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45MzUsXG4gICAgICAgICAgICAyLjQ2LFxuICAgICAgICAgICAgMC4zNSxcbiAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgMS42NVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2Vyc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIC0wLjQ1LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuOTUsXG4gICAgICAgICAgLTEuMTUsXG4gICAgICAgICAgMFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJleHRyYVN5c3RlbVwiOiB7XG4gICAgICAgIFwiaWRcIjogXCJjYW5vcHktcGxhdGVzXCIsXG4gICAgICAgIFwibmFtZVwiOiBcIkVudHJhbmNlIGNhbm9weSBwbGF0ZXNcIixcbiAgICAgICAgXCJraW5kXCI6IFwicGxhdGVcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImFsdW1pbml1bVwiLFxuICAgICAgICBcIndcIjogMS4wNCxcbiAgICAgICAgXCJoXCI6IDAuMTMsXG4gICAgICAgIFwiZFwiOiAxLFxuICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi42NSxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMS41OSxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC41MyxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjUzLFxuICAgICAgICAgICAgMyxcbiAgICAgICAgICAgIDNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuNTksXG4gICAgICAgICAgICAzLFxuICAgICAgICAgICAgM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi42NSxcbiAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAzXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcImdyYXBoaWNcIjoge1xuICAgICAgXCJiYWNrZ3JvdW5kXCI6IFwiI0U4RUNFOVwiLFxuICAgICAgXCJvcHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgICAgIFwidGV4dFwiOiBcIkxvdHVzXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjIsXG4gICAgICAgICAgXCJ4MVwiOiAwLjYyLFxuICAgICAgICAgIFwiY3lcIjogMC41MixcbiAgICAgICAgICBcInNpemVcIjogMC42MixcbiAgICAgICAgICBcImZpbGxcIjogXCIjMEU3QTRGXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCInc1wiLFxuICAgICAgICAgIFwieDBcIjogMC42MzUsXG4gICAgICAgICAgXCJ4MVwiOiAwLjc4LFxuICAgICAgICAgIFwiY3lcIjogMC41MixcbiAgICAgICAgICBcInNpemVcIjogMC42MixcbiAgICAgICAgICBcImZpbGxcIjogXCIjRTNBODFDXCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHI6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8gLS0gd2hpY2ggaXNcbiAqIHdoYXQgcmVuZGVycyBhIGJ1aWxkaW5nIG1pZC1ncmV5LlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgbWV0YWxzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZVxuICogbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG8gcmVmbGVjdFxuICogcmVuZGVycyBibGFjay4gVGhlIGFsYmVkbyBzdGF5cyBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqXG4gKiBUaGUgb25lIHByaW50ZWQgZ3JhcGhpYywgdGhlIGJyYW5kIGZhc2NpYSwgaXMgYSBjYW52YXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLlxuICogVGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIGRvZXMgbm90IGFmZmVjdCB0aGF0LCBhbmQgaXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMb3R1c3NTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdMb3R1c1xcJ3MgU3RvcmUgQnVpbGRpbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIFNoZWxsOiBTT0xJRCBib3gsIG5vdCBhIHJpbmcuIFRoZSBwcm9wIGlzIGFuIGV4dGVyaW9yIHNoZWxsIG9ubHkgZXZlciBzZWVuIGZyb20gb3V0c2lkZSwgc29cbiAgICogYW4gaW50ZXJpb3IgY29zdHMgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGFuZCBzb2xpZFxuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlXG4gICAqIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gU2V0IDAuMDYgbSBJTlNJREUgdGhlIHBhcmFwZXQgcmluZyBvbiBldmVyeSBlbGV2YXRpb24gc28gbm8gd2FsbCBmYWNlXG4gICAqIGlzIGV2ZXIgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIGEgcGFyYXBldCBmYWNlLiAqL1xuICBhZGQoJ2J1aWxkaW5nLXNoZWxsJywgJ0J1aWxkaW5nIHNoZWxsJywgYm94QXQoMCwgMS43NzUsIC0wLjQ3LCA3Ljg4LCAzLjU1LCA1Ljk0KSwgJ3dhbGwnKTtcbiAgY29sbGlkZXJzWydidWlsZGluZy1zaGVsbCddID0ge1xuICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAyLjMsIDBdLCBoYWxmRXh0ZW50czogWzQuMCwgMi4zLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIFJvb2YgZGVjayBzcGFucyB5IDMuNTAuLjMuNjIgc28gaXRzIHVuZGVyc2lkZSBpcyBzdW5rIElOVE8gdGhlIHNoZWxsIHJhdGhlciB0aGFuIHJlc3Rpbmcgb25cbiAgICogaXQuIEF1dGhvcmVkIGZsdXNoLCB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tIGZhY2Ugd2VyZSBib3RoIGF0XG4gICAqIHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UuICovXG4gIGFkZCgncm9vZi1kZWNrJywgJ1Jvb2YgZGVjaycsIGJveEF0KDAsIDMuNTYsIC0wLjQ3LCA3LjgsIDAuMTIsIDUuOSksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCA4LjAsIEcuZmFzY2lhV2FsbC5oLCBHLmZhc2NpYVdhbGwuZF0sXG4gICAgWy0zLjg4LCAzLjc1LCAtMC42NSwgMC4yNCwgMC40LCA1LjddLFxuICAgIFszLjg4LCAzLjc1LCAtMC42NSwgMC4yNCwgMC40LCA1LjddLFxuICAgIFswLCAzLjc1LCAtMy4zOCwgOC4wLCAwLjQsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGYudywgZi5oLCAwLjEyKTtcbiAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHtcbiAgICAgIGlmIChpID49IDE2ICYmIGkgPCAyMCkgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSwgMC4xMjUgKyB1di5nZXRZKGkpICogMC44NzUpO1xuICAgICAgZWxzZSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogMC4wMywgdXYuZ2V0WShpKSAqIDAuMDMpO1xuICAgIH1cbiAgICB1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgZy50cmFuc2xhdGUoMCwgZi5jeSwgZi5jeik7XG4gICAgYWRkKCdmYXNjaWEtcGFuZWwnLCAnQnJhbmQgZmFzY2lhIHBhbmVsJywgZywgJ2Zhc2NpYScpO1xuICB9XG5cbiAgLyogT25lIGdsYXppbmcgcGFuZSwgbm90IG9uZSBwZXIgYmF5OiB0aGUgbXVsbGlvbiBncmlkIGluIGZyb250IGRvZXMgdGhlIGRpdmlkaW5nLiBPdmVybGFwcyBJTlRPXG4gICAqIHRoZSBmYWNhZGUgYXQgdGhlIGJhY2sgYW5kIHNpdHMgUkVDRVNTRUQgYmVoaW5kIHRoZSBmcmFtaW5nIGF0IHRoZSBmcm9udC4gTW9zdGx5IG9wYXF1ZSBieVxuICAgKiBkZXNpZ24gLS0gdGhlcmUgaXMgbm8gaW50ZXJpb3IgYmVoaW5kIGl0LCBzbyBhIHRyYW5zcGFyZW50IHBhbmUgd291bGQgcmVhZCBhcyBhIGhvbGUuICovXG4gIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLCBib3hBdCgwLCBHLmdsYXppbmcuY3ksIEcuZ2xhemluZy5jeiA/PyAyLjUxLCBHLmdsYXppbmcudywgRy5nbGF6aW5nLmgsIDAuMTApLCAnZ2xhc3MnKTtcblxuICAvKiBGcmFtaW5nLCB0cmFuc29tLCBraWNrIHJhaWwsIGRvb3IgamFtYnMgYW5kIGhlYWRlciBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBFdmVyeSBwYXJ0IGlzXG4gICAqIHRoZSBzYW1lIG1ldGFsOyBmb2xkaW5nIHRoZW0gdG9nZXRoZXIgaXMgdGhlIGRyYXctY2FsbCBsZXZlciBjaG9zZW4gaW4gdGhlIGJsb2Nrb3V0LCBub3QgYW5cbiAgICogb3B0aW1pc2F0aW9uIGRlZmVycmVkIHRvIHRoZSBlbmQgLS0gYSBwYXJ0IHNwbGl0IGZvciBhdXRob3JpbmcgY29udmVuaWVuY2UgY2Fubm90IGJlIG1lcmdlZFxuICAgKiBhZnRlcndhcmRzIG9uY2UgYSBwaXZvdCBoYW5ncyBvZmYgaXQuIEZyb250IGZhY2Ugc3RhbmRzIHByb3VkIG9mIGdsYXppbmcgYW5kIG11bGxpb25zLiAqL1xuICBhZGQoJ3Nob3Bmcm9udC1mcmFtZScsICdTaG9wZnJvbnQgZnJhbWluZyBhbmQgZG9vciBiYXknLCBib3hlcyhHLmZyYW1lKSwgRy5mcmFtZU1hdGVyaWFsKTtcblxuICAvKiBTaWRlIGZlYXR1cmU6IHNodXR0ZXIsIHNlcnZpY2UgZG9vciBvciBsb3V2cmUsIHBlciBwbGF0ZS4gU3RhbmRzIHByb3VkIG9mIHRoZSB3YWxsIGZhY2UgYnV0XG4gICAqIGRlbGliZXJhdGVseSBOT1Qgb3V0IHRvIHRoZSBwYXJhcGV0IHBsYW5lIGF0ICstNC4wMCAtLSBhIGZhY2UgYXQgZXhhY3RseSArLTQuMDAgd291bGQgYmVcbiAgICogY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyIGZhY2UsIHdoaWNoIHRoZSBib3VuZGluZy1ib3ggY29wbGFuYXJpdHkgY2hlY2tcbiAgICogZmxhZ3MgZXZlbiB0aG91Z2ggdGhlIHR3byBuZXZlciBvdmVybGFwIGluIFkuICovXG4gIGlmIChHLnNpZGVGZWF0dXJlKSBhZGQoJ3NpZGUtZmVhdHVyZScsIEcuc2lkZUZlYXR1cmUubmFtZSwgYm94ZXMoRy5zaWRlRmVhdHVyZS5ib3hlcyksIEcuc2lkZUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEZyb250IGZlYXR1cmU6IGVudHJhbmNlIGNhbm9weSBzbGFiLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgwLCAwLjQ2LCAwLCAwLjk1LCAwLjcyLCAwLjg1KSxcbiAgICAgIGN5bEF0KDAsIDAuODcsIDAsIDAuMzAsIDAuMTAsIDE2KSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMTAsIDAuMDgpKTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBjb25zdCBtYXRzID0gKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCB5YXddKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCAzLjYwLCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgICkpO1xuICAgIGFkZEluc3QoJ3BsYW50LWNvbmRlbnNlcnMnLCAnUm9vZnRvcCBjb25kZW5zZXIgdW5pdHMnLCB1bml0LCAnZ2FsdicsIG1hdHMpO1xuICB9XG5cbiAgLyogT3B0aW9uYWwgaW5zdGFuY2VkIGV4dHJhOiBjYW5vcHkgcGxhdGVzLCBwaWxhc3RlcnMgb3IgZm9yZWNvdXJ0IGNvbHVtbnMsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZXh0cmFTeXN0ZW0pIHtcbiAgICBjb25zdCBlID0gRy5leHRyYVN5c3RlbTtcbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGUua2luZCA9PT0gJ3BsYXRlJykge1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhbYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCksIGN5bEF0KDAsIC1lLmggLyAyIC0gMC4wMTUsIDAsIDAuMDg1LCAwLjAzLCAxMildKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9IGJveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpO1xuICAgIH1cbiAgICBjb25zdCBtYXRzID0gKGUuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeSwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgeSwgeikpO1xuICAgIGFkZEluc3QoZS5pZCwgZS5uYW1lLCB1bml0LCBlLm1hdGVyaWFsLCBtYXRzLCBlLnRvbmVzID8gbWF0cy5tYXAoKF8sIGkpID0+IGUudG9uZXNbaSAlIGUudG9uZXMubGVuZ3RoXSkgOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgVyA9IDIwNDgsIEggPSAzMjA7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gSCAqIDAuODc1OyAvLyByb3dzIDAuLjI4MCBhcmUgdGhlICtaIGZhY2U7IDI4MC4uMzIwIGlzIHRoZSBwbGFpbiBjb3JuZXJcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIHRleC5jb2xvclNwYWNlID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2UgPz8gdGV4LmNvbG9yU3BhY2U7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlTG90dXNzU3RvcmVCdWlsZGluZ01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgYXBwbHlGYXNjaWFHcmFwaGljKHJvb3QpO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gQSBzdGF0aWMgZXh0ZXJpb3Igc2hlbGwgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBUaGUgZG9vcnMgYW5kIGFueVxuICAgIC8vIHNodXR0ZXIgYXJlIGF1dGhvcmVkIGFzIGZpeGVkIGdlb21ldHJ5LCBzbyB0aGV5IGdldCBubyBheGlzOiBhIG5hbWVkIHBpdm90IGlzIGEgcHJvbWlzZVxuICAgIC8vIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvciBoYXNcbiAgICAvLyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsaUJBQWlCO0FBQUEsSUFDakIsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsWUFBWTtBQUFBLE1BQ1YsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLFFBQ0g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsY0FBYztBQUFBLE1BQ1o7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixLQUFLO0FBQUEsTUFDTCxLQUFL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
