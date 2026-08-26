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

// scratch/scb-bank-branch-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createSCBBankBranchBuildingModel: () => createSCBBankBranchBuildingModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "scb-bank-branch-building",
  "name": "SCB Bank Branch Building",
  "exportName": "SCBBankBranchBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 14207406,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 8949651,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "purple",
      "color": 3678050,
      "roughness": 0.45,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 3678050,
      "roughness": 0.4,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7172976,
      "roughness": 0.13,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 3289395,
      "roughness": 0.52,
      "metalness": 0.25
    },
    {
      "id": "metal",
      "color": 9407634,
      "roughness": 0.45,
      "metalness": 0.35
    },
    {
      "id": "stone",
      "color": 10985878,
      "roughness": 0.6,
      "metalness": 0
    }
  ],
  "geometry": {
    "shellFront": 3.1,
    "plantMaterial": "metal",
    "fasciaWall": {
      "cy": 4.06,
      "cz": 2.98,
      "h": 1.08,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "w": 7.7,
      "h": 0.86,
      "cy": 3.6,
      "cz": 3.32
    },
    "glazing": {
      "cx": -1.34,
      "w": 3.68,
      "h": 2.55,
      "cy": 1.62,
      "cz": 3.23
    },
    "frame": [
      [
        -3.18,
        1.62,
        3.29,
        0.08,
        2.66,
        0.18
      ],
      [
        -1.3,
        1.62,
        3.29,
        0.08,
        2.66,
        0.18
      ],
      [
        -2.24,
        2.93,
        3.29,
        1.96,
        0.08,
        0.18
      ],
      [
        -2.24,
        0.32,
        3.29,
        1.96,
        0.08,
        0.18
      ]
    ],
    "mullions": {
      "w": 0.06,
      "h": 2.58,
      "cy": 1.62,
      "cz": 3.29,
      "x": [
        -2.55,
        -1.9
      ]
    },
    "frontFeature": {
      "name": "Purple fascia band, entrance surround and ATM surround",
      "material": "purple",
      "boxes": [
        [
          0,
          3.6,
          3.2,
          7.92,
          0.94,
          0.18
        ],
        [
          -0.98,
          1.7,
          3.22,
          0.24,
          2.9,
          0.2
        ],
        [
          0.62,
          1.7,
          3.22,
          0.24,
          2.9,
          0.2
        ],
        [
          -0.18,
          3.05,
          3.22,
          1.84,
          0.2,
          0.2
        ],
        [
          2.53,
          1.62,
          3.16,
          2.86,
          2.74,
          0.12
        ]
      ]
    },
    "sideFeature": {
      "name": "Metal fittings: service door, window grilles and ATMs",
      "material": "metal",
      "boxes": [
        [
          3.96,
          1.15,
          -0.3,
          0.06,
          2.2,
          1.3
        ],
        [
          3.96,
          2.9,
          1.3,
          0.06,
          0.44,
          0.52
        ],
        [
          3.96,
          2.9,
          2.05,
          0.06,
          0.44,
          0.52
        ],
        [
          1.85,
          1.02,
          3.3,
          0.52,
          1.9,
          0.3
        ],
        [
          2.72,
          1.02,
          3.3,
          0.52,
          1.9,
          0.3
        ]
      ]
    },
    "extraFeature": {
      "name": "Stone plinth",
      "material": "stone",
      "boxes": [
        [
          0,
          0.09,
          3.05,
          7.92,
          0.18,
          0.9
        ],
        [
          0,
          0.04,
          3.3,
          7.6,
          0.08,
          0.4
        ]
      ]
    },
    "condensers": [
      [
        -0.55,
        -0.95,
        0
      ],
      [
        0.45,
        -0.95,
        0
      ],
      [
        1.45,
        -0.95,
        0
      ],
      [
        2.35,
        -1.55,
        1.5707963267948966
      ]
    ]
  },
  "graphic": {
    "background": "#381F62",
    "ops": [
      {
        "type": "text",
        "text": "SCB",
        "x0": 0.395,
        "x1": 0.575,
        "cy": 0.55,
        "size": 0.64,
        "fill": "#F2F2F2"
      },
      {
        "type": "text",
        "text": "\u25C6",
        "x0": 0.592,
        "x1": 0.648,
        "cy": 0.55,
        "size": 0.5,
        "fill": "#E8A020"
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
function createSCBBankBranchBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "SCB Bank Branch Building";
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
  const root = createSCBBankBranchBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU0NCIEJhbmsgQnJhbmNoIEJ1aWxkaW5nIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nIGFuZFxuICogaW5zdGFuY2luZyBhcmUgaGFuZC1yb2xsZWQgYmVsb3cgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSA4LjAwIHggNC42MCB4IDcuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBPbmUgb2YgdGhhaWtpdCdzIHNoYXJlZCByZXRhaWwtbW9kdWxlIGJ1aWxkaW5ncy4gVGhlIHNoZWxsIGZyb250IGZhY2Ugc2l0cyBhdCB6PSsyLjUwIHJhdGhlclxuICogdGhhbiB0aGUgZW52ZWxvcGUgZWRnZSBzbyB0aGUgZW50cmFuY2UgY2Fub3B5IGNhbiBjYW50aWxldmVyIGZvcndhcmQgYW5kIHN0aWxsIGxhbmQgZXhhY3RseSBvblxuICogdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBFdmVyeSBzdXJmYWNlIHBhaXIgb24gdGhlIGZhY2FkZSBpcyBkZWxpYmVyYXRlbHkgb2Zmc2V0IGluIGRlcHRoOlxuICogdHdvIHN1cmZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgdGVhciBpbnRvIGludGVybGVhdmVkIHRyaWFuZ2xlcyBhcyB0aGVcbiAqIGNhbWVyYSBtb3ZlcywgYW5kIGF1dGhvcmluZyBjb21wb25lbnRzIGZsdXNoIGFnYWluc3Qgb25lIGFub3RoZXIgcHJvZHVjZXMgdGhhdCBieSBkZWZhdWx0LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwic2NiLWJhbmstYnJhbmNoLWJ1aWxkaW5nXCIsXG4gICAgXCJuYW1lXCI6IFwiU0NCIEJhbmsgQnJhbmNoIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiU0NCQmFua0JyYW5jaEJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MjA3NDA2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVja1wiLFxuICAgICAgICBcImNvbG9yXCI6IDg5NDk2NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwdXJwbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAzNjc4MDUwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZmFzY2lhXCIsXG4gICAgICAgIFwiY29sb3JcIjogMzY3ODA1MCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDcxNzI5NzYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjk0LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmcmFtZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDMyODkzOTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMjVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJtZXRhbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDk0MDc2MzQsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNDUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMzVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdG9uZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDEwOTg1ODc4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjYsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJzaGVsbEZyb250XCI6IDMuMSxcbiAgICAgIFwicGxhbnRNYXRlcmlhbFwiOiBcIm1ldGFsXCIsXG4gICAgICBcImZhc2NpYVdhbGxcIjoge1xuICAgICAgICBcImN5XCI6IDQuMDYsXG4gICAgICAgIFwiY3pcIjogMi45OCxcbiAgICAgICAgXCJoXCI6IDEuMDgsXG4gICAgICAgIFwiZFwiOiAwLjM2XG4gICAgICB9LFxuICAgICAgXCJmYXNjaWFXYWxsTWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICBcImZyYW1lTWF0ZXJpYWxcIjogXCJmcmFtZVwiLFxuICAgICAgXCJmYXNjaWFcIjoge1xuICAgICAgICBcIndcIjogNy43LFxuICAgICAgICBcImhcIjogMC44NixcbiAgICAgICAgXCJjeVwiOiAzLjYsXG4gICAgICAgIFwiY3pcIjogMy4zMlxuICAgICAgfSxcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwiY3hcIjogLTEuMzQsXG4gICAgICAgIFwid1wiOiAzLjY4LFxuICAgICAgICBcImhcIjogMi41NSxcbiAgICAgICAgXCJjeVwiOiAxLjYyLFxuICAgICAgICBcImN6XCI6IDMuMjNcbiAgICAgIH0sXG4gICAgICBcImZyYW1lXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0zLjE4LFxuICAgICAgICAgIDEuNjIsXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICAwLjA4LFxuICAgICAgICAgIDIuNjYsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTEuMyxcbiAgICAgICAgICAxLjYyLFxuICAgICAgICAgIDMuMjksXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAyLjY2LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjI0LFxuICAgICAgICAgIDIuOTMsXG4gICAgICAgICAgMy4yOSxcbiAgICAgICAgICAxLjk2LFxuICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuMjQsXG4gICAgICAgICAgMC4zMixcbiAgICAgICAgICAzLjI5LFxuICAgICAgICAgIDEuOTYsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm11bGxpb25zXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuMDYsXG4gICAgICAgIFwiaFwiOiAyLjU4LFxuICAgICAgICBcImN5XCI6IDEuNjIsXG4gICAgICAgIFwiY3pcIjogMy4yOSxcbiAgICAgICAgXCJ4XCI6IFtcbiAgICAgICAgICAtMi41NSxcbiAgICAgICAgICAtMS45XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZyb250RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIlB1cnBsZSBmYXNjaWEgYmFuZCwgZW50cmFuY2Ugc3Vycm91bmQgYW5kIEFUTSBzdXJyb3VuZFwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicHVycGxlXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAzLjYsXG4gICAgICAgICAgICAzLjIsXG4gICAgICAgICAgICA3LjkyLFxuICAgICAgICAgICAgMC45NCxcbiAgICAgICAgICAgIDAuMThcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjk4LFxuICAgICAgICAgICAgMS43LFxuICAgICAgICAgICAgMy4yMixcbiAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAyLjksXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAxLjcsXG4gICAgICAgICAgICAzLjIyLFxuICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDAuMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuMTgsXG4gICAgICAgICAgICAzLjA1LFxuICAgICAgICAgICAgMy4yMixcbiAgICAgICAgICAgIDEuODQsXG4gICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAwLjJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNTMsXG4gICAgICAgICAgICAxLjYyLFxuICAgICAgICAgICAgMy4xNixcbiAgICAgICAgICAgIDIuODYsXG4gICAgICAgICAgICAyLjc0LFxuICAgICAgICAgICAgMC4xMlxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwic2lkZUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJNZXRhbCBmaXR0aW5nczogc2VydmljZSBkb29yLCB3aW5kb3cgZ3JpbGxlcyBhbmQgQVRNc1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwibWV0YWxcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDIuMixcbiAgICAgICAgICAgIDEuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAwLjQ0LFxuICAgICAgICAgICAgMC41MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDIuOSxcbiAgICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMC40NCxcbiAgICAgICAgICAgIDAuNTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuODUsXG4gICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgMy4zLFxuICAgICAgICAgICAgMC41MixcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIDAuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi43MixcbiAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAzLjMsXG4gICAgICAgICAgICAwLjUyLFxuICAgICAgICAgICAgMS45LFxuICAgICAgICAgICAgMC4zXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJleHRyYUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJTdG9uZSBwbGludGhcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInN0b25lXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMy4wNSxcbiAgICAgICAgICAgIDcuOTIsXG4gICAgICAgICAgICAwLjE4LFxuICAgICAgICAgICAgMC45XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgIDMuMyxcbiAgICAgICAgICAgIDcuNixcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjRcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImNvbmRlbnNlcnNcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTAuNTUsXG4gICAgICAgICAgLTAuOTUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC40NSxcbiAgICAgICAgICAtMC45NSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjQ1LFxuICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzUsXG4gICAgICAgICAgLTEuNTUsXG4gICAgICAgICAgMS41NzA3OTYzMjY3OTQ4OTY2XG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogXCIjMzgxRjYyXCIsXG4gICAgICBcIm9wc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiU0NCXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjM5NSxcbiAgICAgICAgICBcIngxXCI6IDAuNTc1LFxuICAgICAgICAgIFwiY3lcIjogMC41NSxcbiAgICAgICAgICBcInNpemVcIjogMC42NCxcbiAgICAgICAgICBcImZpbGxcIjogXCIjRjJGMkYyXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJcdTI1QzZcIixcbiAgICAgICAgICBcIngwXCI6IDAuNTkyLFxuICAgICAgICAgIFwieDFcIjogMC42NDgsXG4gICAgICAgICAgXCJjeVwiOiAwLjU1LFxuICAgICAgICAgIFwic2l6ZVwiOiAwLjUsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0U4QTAyMFwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByOiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU0NCQmFua0JyYW5jaEJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdTQ0IgQmFuayBCcmFuY2ggQnVpbGRpbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIFNoZWxsOiBTT0xJRCBib3gsIG5vdCBhIHJpbmcuIFRoZSBwcm9wIGlzIGFuIGV4dGVyaW9yIHNoZWxsIG9ubHkgZXZlciBzZWVuIGZyb20gb3V0c2lkZSwgc29cbiAgICogYW4gaW50ZXJpb3IgY29zdHMgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGFuZCBzb2xpZFxuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlXG4gICAqIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gU2V0IDAuMDYgbSBJTlNJREUgdGhlIHBhcmFwZXQgcmluZyBvbiBldmVyeSBlbGV2YXRpb24gc28gbm8gd2FsbCBmYWNlXG4gICAqIGlzIGV2ZXIgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIGEgcGFyYXBldCBmYWNlLiAqL1xuICAvLyBIb3cgZmFyIGZvcndhcmQgdGhlIHNoZWxsIGZhY2Ugc2l0cy4gVGhlIERFRkFVTFQgMi41MCBsZWF2ZXMgMS4wMCBtIGZvciBhbiBlbnRyYW5jZSBjYW5vcHkgdG9cbiAgLy8gY2FudGlsZXZlciBpbnRvLCBzbyB0aGUgY2Fub3B5IG5vc2UgbGFuZHMgZXhhY3RseSBvbiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEEgYnVpbGRpbmcgd2l0aFxuICAvLyBOTyBmb3J3YXJkIGNhbnRpbGV2ZXIgbXVzdCBwdXNoIHRoaXMgb3V0IGluc3RlYWQsIG9yIHRoZSBwcm9wIGlzIGJ1aWx0IHNob3J0IG9mIGl0cyBkZWNsYXJlZFxuICAvLyBlbnZlbG9wZSAtLSBNSyBmaXJzdCBjYW1lIG91dCA2LjMgbSBkZWVwIGFnYWluc3QgYSBkZWNsYXJlZCA3LjAgZm9yIGV4YWN0bHkgdGhhdCByZWFzb24uXG4gIGNvbnN0IFNGID0gKEcuc2hlbGxGcm9udCA/PyAyLjUwKSBhcyBudW1iZXI7XG4gIGFkZCgnYnVpbGRpbmctc2hlbGwnLCAnQnVpbGRpbmcgc2hlbGwnLCBib3hBdCgwLCAxLjc3NSwgKFNGIC0gMy40NCkgLyAyLCA3Ljg4LCAzLjU1LCBTRiArIDMuNDQpLCAnd2FsbCcpO1xuICBjb2xsaWRlcnNbJ2J1aWxkaW5nLXNoZWxsJ10gPSB7XG4gICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDIuMywgMF0sIGhhbGZFeHRlbnRzOiBbNC4wLCAyLjMsIDMuNV0sXG4gICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlLicsXG4gIH07XG5cbiAgLyogUm9vZiBkZWNrIHNwYW5zIHkgMy41MC4uMy42MiBzbyBpdHMgdW5kZXJzaWRlIGlzIHN1bmsgSU5UTyB0aGUgc2hlbGwgcmF0aGVyIHRoYW4gcmVzdGluZyBvblxuICAgKiBpdC4gQXV0aG9yZWQgZmx1c2gsIHRoZSBkZWNrJ3MgYm90dG9tIGZhY2UgYW5kIHRoZSBwYXJhcGV0IHJpbmcncyBib3R0b20gZmFjZSB3ZXJlIGJvdGggYXRcbiAgICogeT0zLjU1MCBhbmQgYm90aCBmYWNpbmcgZG93biAtLSA0NiBtMiBvZiBjb3BsYW5hciBjby1mYWNpbmcgc3VyZmFjZS4gKi9cbiAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgMy41NiwgKFNGIC0gMC4wMiAtIDMuNDIpIC8gMiwgNy44LCAwLjEyLCBTRiArIDMuNDApLCAnZGVjaycpO1xuXG4gIC8qIFBhcmFwZXQ6IGZyb250IGZhc2NpYSB3YWxsIHBsdXMgdGhyZWUgdXBzdGFuZHMsIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQgYW5kIG9uZSBkcmF3IGNhbGwuXG4gICAqIFRoZSBmcm9udCBpcyB0YWxsZXIgdGhhbiB0aGUgc2lkZXMsIHdoaWNoIGEgcGxhbiBleHRydXNpb24gY2Fubm90IGV4cHJlc3MuIE91dGVyIGZhY2VzIHN0YW5kXG4gICAqIDAuMDYgbSBwcm91ZCBvZiB0aGUgd2FsbHMgLS0gYSBjb3BpbmcgZHJpcCBlZGdlLCBhbmQgd2hhdCBrZWVwcyB0aGVtIG9mZiB0aGUgd2FsbCBwbGFuZXMuICovXG4gIGFkZCgncGFyYXBldCcsICdQYXJhcGV0IHJpbmcgYW5kIGZhc2NpYSB3YWxsJywgYm94ZXMoW1xuICAgIFswLCBHLmZhc2NpYVdhbGwuY3ksIEcuZmFzY2lhV2FsbC5jeiwgOC4wLCBHLmZhc2NpYVdhbGwuaCwgRy5mYXNjaWFXYWxsLmRdLFxuICAgIFstMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzMuODgsIDMuNzUsIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgMC4yNCwgMC40LCBTRiArIDMuMjBdLFxuICAgIFswLCAzLjc1LCAtMy4zOCwgOC4wLCAwLjQsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBsZXQgZzogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGYuc2hhcGUgPT09ICdkaXNjJykge1xuICAgICAgLy8gQSByb3VuZCBzaWduIGRpc2MsIGJ1aWx0IGFzIGEgQ2lyY2xlR2VvbWV0cnkgZmFjZSBwbHVzIGEgc2hhbGxvdyBjeWxpbmRlciBib2R5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvYnZpb3VzIGNvbnN0cnVjdGlvbiAtLSBvbmUgY3lsaW5kZXIgcm90YXRlZCB0byBmYWNlICtaIC0tIHB1dHMgdGhlIHdvcmRtYXJrIG9uIGl0c1xuICAgICAgLy8gc2lkZSwgYmVjYXVzZSBDeWxpbmRlckdlb21ldHJ5IGxheXMgaXRzIGNhcCBVVnMgb3V0IGluIHRoZSBjeWxpbmRlcidzIG93biBYWiBwbGFuZSBhbmRcbiAgICAgIC8vIHJvdGF0aW5nIHRoZSBnZW9tZXRyeSBkb2VzIG5vdCByb3RhdGUgdGhlbSB3aXRoIGl0LiBDaXJjbGVHZW9tZXRyeSdzIFVWcyBhcmUgYWxyZWFkeVxuICAgICAgLy8gKHgsIHkpIGluIHRoZSBwbGFuZSBpdCBmYWNlcywgc28gdGhlIHNxdWFyZSBjYW52YXMgbGFuZHMgdGhlIHJpZ2h0IHdheSB1cCB3aXRoIG5vXG4gICAgICAvLyBjb3JyZWN0aW9uLiBUaGUgYm9keSdzIFVWcyBhcmUgY29sbGFwc2VkIG9udG8gYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzIHNvIHRoZVxuICAgICAgLy8gZGlzYydzIGVkZ2UgZG9lcyBub3Qgc21lYXIgdGhlIHdvcmRtYXJrIGFyb3VuZCBpdHMgcmltLlxuICAgICAgY29uc3QgciA9IGYudyAvIDI7XG4gICAgICBjb25zdCBmYWNlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KHIsIDMyKTtcbiAgICAgIGZhY2UudHJhbnNsYXRlKDAsIDAsIDAuMDYxKTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCAwLjEyLCAzMik7XG4gICAgICBib2R5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgIGNvbnN0IGJ1diA9IGJvZHkuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV2LmNvdW50OyBpKyspIGJ1di5zZXRYWShpLCAwLjAyLCAwLjAyKTtcbiAgICAgIGJ1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gbWVyZ2VHZW9zKFtmYWNlLCBib2R5XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoZi53LCBmLmgsIDAuMTIpO1xuICAgICAgY29uc3QgdXYgPSBiLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHtcbiAgICAgICAgaWYgKGkgPj0gMTYgJiYgaSA8IDIwKSB1di5zZXRYWShpLCB1di5nZXRYKGkpLCAwLjEyNSArIHV2LmdldFkoaSkgKiAwLjg3NSk7XG4gICAgICAgIGVsc2UgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSAqIDAuMDMsIHV2LmdldFkoaSkgKiAwLjAzKTtcbiAgICAgIH1cbiAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBiO1xuICAgIH1cbiAgICBnLnRyYW5zbGF0ZSgwLCBmLmN5LCBmLmN6KTtcbiAgICBhZGQoJ2Zhc2NpYS1wYW5lbCcsICdCcmFuZCBmYXNjaWEgcGFuZWwnLCBnLCAnZmFzY2lhJyk7XG4gIH1cblxuICAvKiBPbmUgZ2xhemluZyBwYW5lLCBub3Qgb25lIHBlciBiYXk6IHRoZSBtdWxsaW9uIGdyaWQgaW4gZnJvbnQgZG9lcyB0aGUgZGl2aWRpbmcuIE92ZXJsYXBzIElOVE9cbiAgICogdGhlIGZhY2FkZSBhdCB0aGUgYmFjayBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXQgdGhlIGZyb250LiBNb3N0bHkgb3BhcXVlIGJ5XG4gICAqIGRlc2lnbiAtLSB0aGVyZSBpcyBubyBpbnRlcmlvciBiZWhpbmQgaXQsIHNvIGEgdHJhbnNwYXJlbnQgcGFuZSB3b3VsZCByZWFkIGFzIGEgaG9sZS4gKi9cbiAgLy8gVGhlIHBhbmUgaXMgbm90IGFsd2F5cyBjZW50cmVkOiBhIGJyYW5jaCBwbGFuIGNhbiBwdXQgaXRzIGdsYXppbmcgdG8gb25lIHNpZGUgb2YgdGhlIGVudHJhbmNlLlxuICAvLyBBdXRob3JlZCBjZW50cmVkIHdoaWxlIGl0cyBmcmFtaW5nIHNhdCBvZmYgdG8gdGhlIGxlZnQsIHRoZSB0d28gcmVhZCBhcyB1bnJlbGF0ZWQgcGFydHMuXG4gIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLFxuICAgICAgYm94QXQoRy5nbGF6aW5nLmN4ID8/IDAsIEcuZ2xhemluZy5jeSwgRy5nbGF6aW5nLmN6ID8/IDIuNTEsIEcuZ2xhemluZy53LCBHLmdsYXppbmcuaCwgMC4xMCksICdnbGFzcycpO1xuXG4gIC8qIEZyYW1pbmcsIHRyYW5zb20sIGtpY2sgcmFpbCwgZG9vciBqYW1icyBhbmQgaGVhZGVyIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQuIEV2ZXJ5IHBhcnQgaXNcbiAgICogdGhlIHNhbWUgbWV0YWw7IGZvbGRpbmcgdGhlbSB0b2dldGhlciBpcyB0aGUgZHJhdy1jYWxsIGxldmVyIGNob3NlbiBpbiB0aGUgYmxvY2tvdXQsIG5vdCBhblxuICAgKiBvcHRpbWlzYXRpb24gZGVmZXJyZWQgdG8gdGhlIGVuZCAtLSBhIHBhcnQgc3BsaXQgZm9yIGF1dGhvcmluZyBjb252ZW5pZW5jZSBjYW5ub3QgYmUgbWVyZ2VkXG4gICAqIGFmdGVyd2FyZHMgb25jZSBhIHBpdm90IGhhbmdzIG9mZiBpdC4gRnJvbnQgZmFjZSBzdGFuZHMgcHJvdWQgb2YgZ2xhemluZyBhbmQgbXVsbGlvbnMuICovXG4gIGFkZCgnc2hvcGZyb250LWZyYW1lJywgJ1Nob3Bmcm9udCBmcmFtaW5nIGFuZCBkb29yIGJheScsIGJveGVzKEcuZnJhbWUpLCBHLmZyYW1lTWF0ZXJpYWwpO1xuXG4gIC8qIFNpZGUgZmVhdHVyZTogc2h1dHRlciwgc2VydmljZSBkb29yIG9yIGxvdXZyZSwgcGVyIHBsYXRlLiBTdGFuZHMgcHJvdWQgb2YgdGhlIHdhbGwgZmFjZSBidXRcbiAgICogZGVsaWJlcmF0ZWx5IE5PVCBvdXQgdG8gdGhlIHBhcmFwZXQgcGxhbmUgYXQgKy00LjAwIC0tIGEgZmFjZSBhdCBleGFjdGx5ICstNC4wMCB3b3VsZCBiZVxuICAgKiBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggdGhlIHBhcmFwZXQgb3V0ZXIgZmFjZSwgd2hpY2ggdGhlIGJvdW5kaW5nLWJveCBjb3BsYW5hcml0eSBjaGVja1xuICAgKiBmbGFncyBldmVuIHRob3VnaCB0aGUgdHdvIG5ldmVyIG92ZXJsYXAgaW4gWS4gKi9cbiAgaWYgKEcuc2lkZUZlYXR1cmUpIGFkZCgnc2lkZS1mZWF0dXJlJywgRy5zaWRlRmVhdHVyZS5uYW1lLCBib3hlcyhHLnNpZGVGZWF0dXJlLmJveGVzKSwgRy5zaWRlRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogRnJvbnQgZmVhdHVyZTogY2xhZGRpbmcgYmFuZCwgQVRNIGJhbmssIHVwcGVyLXN0b3JleSBiYW5kIG9yIGZvcmVjb3VydCwgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5mcm9udEZlYXR1cmUpIGFkZCgnZnJvbnQtZmVhdHVyZScsIEcuZnJvbnRGZWF0dXJlLm5hbWUsIGJveGVzKEcuZnJvbnRGZWF0dXJlLmJveGVzKSwgRy5mcm9udEZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEEgdGhpcmQgbWVyZ2VkIHNsb3QsIGZvciB3aGF0ZXZlciB0aGUgcGxhdGUgaGFzIHRoYXQgdGhlIHR3byBhYm92ZSBkbyBub3QgY292ZXIgLS0gYSBwYXJhcGV0XG4gICAqIGNvcGluZywgYSBrZXJiLCBhIGZvcmVjb3VydCBjb2x1bW4gYmFzZS4gU2FtZSBydWxlIGFzIHRoZSBvdGhlcnM6IGV2ZXJ5dGhpbmcgaW4gaXQgc2hhcmVzIG9uZVxuICAgKiBtYXRlcmlhbCBhbmQgaXMgc3VibWl0dGVkIG9uY2UuICovXG4gIGlmIChHLmV4dHJhRmVhdHVyZSkgYWRkKCdleHRyYS1mZWF0dXJlJywgRy5leHRyYUZlYXR1cmUubmFtZSwgYm94ZXMoRy5leHRyYUZlYXR1cmUuYm94ZXMpLCBHLmV4dHJhRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgwLCAwLjQ2LCAwLCAwLjk1LCAwLjcyLCAwLjg1KSxcbiAgICAgIGN5bEF0KDAsIDAuODcsIDAsIDAuMzAsIDAuMTAsIDE2KSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMTAsIDAuMDgpKTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBjb25zdCBtYXRzID0gKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCB5YXddKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCAzLjYwLCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgICkpO1xuICAgIC8vIFRoZSBwbGFudCBtYXRlcmlhbCBpcyBDT05GSUdVUkFCTEUsIG5vdCBoYXJkLWNvZGVkLiBSZWZlcmVuY2luZyBhICdnYWx2JyBpZCB0aGF0IGEgY29uZmlnXG4gICAgLy8gZG9lcyBub3QgZGVmaW5lIHNpbGVudGx5IGhhbmRzIEluc3RhbmNlZE1lc2ggYW4gdW5kZWZpbmVkIG1hdGVyaWFsLCB0aHJlZS5qcyBzdWJzdGl0dXRlcyBhXG4gICAgLy8gZGVmYXVsdCwgYW5kIHRoZSBwcm9wIHNoaXBzIG9uZSBtYXRlcmlhbCBvdmVyIGl0cyBjZWlsaW5nIHdpdGggbm90aGluZyBpbiB0aGUgY29uZmlnIHRvXG4gICAgLy8gZXhwbGFpbiB0aGUgZXh0cmEuXG4gICAgYWRkSW5zdCgncGxhbnQtY29uZGVuc2VycycsICdSb29mdG9wIGNvbmRlbnNlciB1bml0cycsIHVuaXQsIEcucGxhbnRNYXRlcmlhbCA/PyAnZ2FsdicsIG1hdHMpO1xuICB9XG5cbiAgLyogT3B0aW9uYWwgaW5zdGFuY2VkIGV4dHJhOiBjYW5vcHkgcGxhdGVzLCBwaWxhc3RlcnMgb3IgZm9yZWNvdXJ0IGNvbHVtbnMsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZXh0cmFTeXN0ZW0pIHtcbiAgICBjb25zdCBlID0gRy5leHRyYVN5c3RlbTtcbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGUua2luZCA9PT0gJ3BsYXRlJykge1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhbYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCksIGN5bEF0KDAsIC1lLmggLyAyIC0gMC4wMTUsIDAsIDAuMDg1LCAwLjAzLCAxMildKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9IGJveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpO1xuICAgIH1cbiAgICBjb25zdCBtYXRzID0gKGUuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeSwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgeSwgeikpO1xuICAgIGFkZEluc3QoZS5pZCwgZS5uYW1lLCB1bml0LCBlLm1hdGVyaWFsLCBtYXRzLCBlLnRvbmVzID8gbWF0cy5tYXAoKF8sIGkpID0+IGUudG9uZXNbaSAlIGUudG9uZXMubGVuZ3RoXSkgOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgLy8gQSByb3VuZCBzaWduIG5lZWRzIGEgU1FVQVJFIGNhbnZhczogdGhlIGN5bGluZGVyIGNhcCBtYXBzIHRoZSBjaXJjbGUgaW50byB0aGUgdW5pdCBzcXVhcmUsXG4gIC8vIHNvIGEgMjA0OHgzMjAgc3RyaXAgd291bGQgc3F1YXNoIHRoZSBtYXJrIGZsYXQuIEEgcmVjdGFuZ3VsYXIgZmFzY2lhIGtlZXBzIHRoZSB3aWRlIHN0cmlwLFxuICAvLyB3aGVyZSB0aGUgYm90dG9tIDEyLjUlIGlzIHRoZSBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugc2FtcGxlcy5cbiAgY29uc3Qgc3F1YXJlID0gISFnLnNxdWFyZTtcbiAgY29uc3QgVyA9IHNxdWFyZSA/IDUxMiA6IDIwNDgsIEggPSBzcXVhcmUgPyA1MTIgOiAzMjA7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gc3F1YXJlID8gSCA6IEggKiAwLjg3NTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIHRleC5jb2xvclNwYWNlID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2UgPz8gdGV4LmNvbG9yU3BhY2U7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlU0NCQmFua0JyYW5jaEJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBBIHN0YXRpYyBleHRlcmlvciBzaGVsbCAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIFRoZSBkb29ycyBhbmQgYW55XG4gICAgLy8gc2h1dHRlciBhcmUgYXV0aG9yZWQgYXMgZml4ZWQgZ2VvbWV0cnksIHNvIHRoZXkgZ2V0IG5vIGF4aXM6IGEgbmFtZWQgcGl2b3QgaXMgYSBwcm9taXNlXG4gICAgLy8gdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yIGhhc1xuICAgIC8vIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFxQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxpQkFBaUI7QUFBQSxJQUNqQixjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0Esc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsSUFDakIsVUFBVTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFPRixTQUFTLFVBQVUsTUFBb0Q7QUFDckUsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFFBQU0sT0FBa0IsQ0FBQztBQUN6QixhQUFXLEtBQUssTUFBTTtBQUNwQixRQUFJLEVBQUUsT0FBTztBQUFFLFlBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQztBQUFHLFdBQUssS0FBSyxJQUFJO0FBQUEsSUFBRyxPQUN6RDtBQUFFLFlBQU0sS0FBSyxDQUFDO0FBQUcsV0FBSyxLQUFLLEtBQUs7QUFBQSxJQUFHO0FBQUEsRUFDMUM7QUFDQSxNQUFJLFFBQVE7QUFDWixhQUFXLEtBQUssTUFBTyxVQUFTLEVBQUUsYUFBYSxVQUFVLEVBQUU7QUFDM0QsUUFBTSxXQUFXLElBQUksYUFBYSxRQUFRLENBQUM7QUFDM0MsUUFBTSxTQUFTLElBQUksYUFBYSxRQUFRLENBQUM7QUFDekMsUUFBTSxLQUFLLElBQUksYUFBYSxRQUFRLENBQUM7QUFDckMsTUFBSSxJQUFJO0FBQ1IsYUFBVyxLQUFLLE9BQU87QUFDckIsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEdBQUcsSUFBSSxFQUFFLGFBQWEsUUFBUSxHQUFHLElBQUksRUFBRSxhQUFhLElBQUk7QUFDM0YsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxnQkFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQzlHLFVBQUksR0FBRztBQUFFLGdCQUFRLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQ3BILFVBQUksR0FBRztBQUFFLFlBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFlBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ3pFO0FBQ0EsU0FBSyxFQUFFO0FBQUEsRUFDVDtBQUNBLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFBRSxRQUFJLEtBQUssQ0FBQyxFQUFHLE9BQU0sQ0FBQyxFQUFFLFFBQVE7QUFBRyxTQUFLLENBQUMsRUFBRSxRQUFRO0FBQUEsRUFBRztBQUM3RixRQUFNLE1BQU0sSUFBVSxxQkFBZTtBQUNyQyxNQUFJLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixVQUFVLENBQUMsQ0FBQztBQUNuRSxNQUFJLGFBQWEsVUFBVSxJQUFVLHNCQUFnQixRQUFRLENBQUMsQ0FBQztBQUMvRCxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFJLG1CQUFtQjtBQUFHLE1BQUksc0JBQXNCO0FBQ3BELFNBQU87QUFDVDtBQUVBLFNBQVMsTUFBTSxJQUFZLElBQVksSUFBWSxHQUFXLEdBQVcsR0FBVztBQUNsRixRQUFNLElBQUksSUFBVSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztBQUFHLElBQUUsVUFBVSxJQUFJLElBQUksRUFBRTtBQUFHLFNBQU87QUFDNUU7QUFDQSxTQUFTLE1BQU0sSUFBWSxJQUFZLElBQVksR0FBVyxHQUFXLE1BQU0sSUFBSTtBQUNqRixRQUFNLElBQUksSUFBVSx1QkFBaUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFHLElBQUUsVUFBVSxJQUFJLElBQUksRUFBRTtBQUFHLFNBQU87QUFDdEY7QUFDQSxTQUFTLE1BQU0sTUFBa0I7QUFBRSxTQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFHO0FBbUJqSCxTQUFTLGVBQWUsU0FBNkU7QUFDbkcsUUFBTSxNQUFrRCxDQUFDO0FBQ3pELGFBQVcsS0FBSyxPQUFPLFdBQW9CO0FBQ3pDLFVBQU0sSUFBSSxJQUFVLDJCQUFxQjtBQUFBLE1BQ3ZDLE9BQU8sSUFBVSxZQUFNLEVBQUUsS0FBSztBQUFBLE1BQzlCLFdBQVcsRUFBRTtBQUFBLE1BQ2IsV0FBVyxFQUFFO0FBQUEsTUFDYixXQUFXLFFBQVEsYUFBYTtBQUFBLElBQ2xDLENBQUM7QUFDRCxRQUFJLEVBQUUsb0JBQW9CLE9BQVcsR0FBRSxrQkFBa0IsRUFBRTtBQUMzRCxRQUFJLEVBQUUsWUFBWSxRQUFXO0FBQUUsUUFBRSxjQUFjO0FBQU0sUUFBRSxVQUFVLEVBQUU7QUFBUyxRQUFFLGFBQWE7QUFBQSxJQUFNO0FBQ2pHLE1BQUUsT0FBTyxFQUFFO0FBQ1gsUUFBSSxFQUFFLEVBQUUsSUFBSTtBQUFBLEVBQ2Q7QUFDQSxTQUFPO0FBQ1Q7QUFJTyxTQUFTLGlDQUFpQyxVQUFrQyxDQUFDLEdBQWdCO0FBQ2xHLFFBQU0sT0FBTyxJQUFVLFlBQU07QUFDN0IsT0FBSyxPQUFPO0FBRVosUUFBTSxZQUFZLGVBQWUsT0FBTztBQUN4QyxRQUFNLFFBQXdDLENBQUM7QUFDL0MsUUFBTSxTQUFxQyxDQUFDO0FBQzVDLFFBQU0sVUFBMEMsQ0FBQztBQUNqRCxRQUFNLFlBQXFDLENBQUM7QUFDNUMsUUFBTSxvQkFBc0QsQ0FBQztBQUM3RCxRQUFNLGFBQWEsUUFBUSxjQUFjO0FBQ3pDLFFBQU0sZ0JBQWdCLFFBQVEsaUJBQWlCO0FBRS9DLFdBQVMsSUFBSSxJQUFZLE1BQWMsS0FBMkIsT0FBZTtBQUMvRSxVQUFNLE9BQU8sSUFBVSxZQUFNO0FBQUcsU0FBSyxPQUFPLE9BQU87QUFDbkQsVUFBTSxPQUFPLElBQVUsV0FBSyxLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQ2pELFNBQUssT0FBTztBQUFNLFNBQUssYUFBYTtBQUFZLFNBQUssZ0JBQWdCO0FBQ3JFLFNBQUssSUFBSSxJQUFJO0FBQUcsU0FBSyxJQUFJLElBQUk7QUFDN0IsVUFBTSxFQUFFLElBQUk7QUFBTSxXQUFPLEVBQUUsSUFBSTtBQUFNLGNBQVUsRUFBRSxJQUFJO0FBQ3JELFdBQU87QUFBQSxFQUNUO0FBQ0EsV0FBUyxRQUFRLElBQVksTUFBYyxLQUEyQixPQUFlLE1BQXVCLE1BQWlCO0FBQzNILFVBQU0sT0FBTyxJQUFVLFlBQU07QUFBRyxTQUFLLE9BQU8sT0FBTztBQUNuRCxVQUFNLE9BQU8sSUFBVSxvQkFBYyxLQUFLLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUN2RSxTQUFLLE9BQU87QUFBTSxTQUFLLGFBQWE7QUFBWSxTQUFLLGdCQUFnQjtBQUNyRSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFLLE1BQUssWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFFBQUksTUFBTTtBQUNSLFlBQU0sSUFBSSxJQUFVLFlBQU07QUFDMUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSyxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFJLEtBQUssY0FBZSxNQUFLLGNBQWMsY0FBYztBQUFBLElBQzNEO0FBQ0EsU0FBSyxlQUFlLGNBQWM7QUFDbEMsU0FBSyxJQUFJLElBQUk7QUFBRyxTQUFLLElBQUksSUFBSTtBQUM3QixVQUFNLEVBQUUsSUFBSTtBQUFNLFdBQU8sRUFBRSxJQUFJO0FBQStCLGNBQVUsRUFBRSxJQUFJO0FBQzlFLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxJQUFJLE9BQU87QUFXakIsUUFBTSxLQUFNLEVBQUUsY0FBYztBQUM1QixNQUFJLGtCQUFrQixrQkFBa0IsTUFBTSxHQUFHLFFBQVEsS0FBSyxRQUFRLEdBQUcsTUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLE1BQU07QUFDdkcsWUFBVSxnQkFBZ0IsSUFBSTtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUFPLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLElBQUcsYUFBYSxDQUFDLEdBQUssS0FBSyxHQUFHO0FBQUEsSUFDbkUsT0FBTztBQUFBLEVBQ1Q7QUFLQSxNQUFJLGFBQWEsYUFBYSxNQUFNLEdBQUcsT0FBTyxLQUFLLE9BQU8sUUFBUSxHQUFHLEtBQUssTUFBTSxLQUFLLEdBQUksR0FBRyxNQUFNO0FBS2xHLE1BQUksV0FBVyxnQ0FBZ0MsTUFBTTtBQUFBLElBQ25ELENBQUMsR0FBRyxFQUFFLFdBQVcsSUFBSSxFQUFFLFdBQVcsSUFBSSxHQUFLLEVBQUUsV0FBVyxHQUFHLEVBQUUsV0FBVyxDQUFDO0FBQUEsSUFDekUsQ0FBQyxPQUFPLE9BQU8sS0FBSyxNQUFPLE9BQU8sR0FBRyxNQUFNLEtBQUssS0FBSyxHQUFJO0FBQUEsSUFDekQsQ0FBQyxNQUFNLE9BQU8sS0FBSyxNQUFPLE9BQU8sR0FBRyxNQUFNLEtBQUssS0FBSyxHQUFJO0FBQUEsSUFDeEQsQ0FBQyxHQUFHLE1BQU0sT0FBTyxHQUFLLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSS9CLEdBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUFBLEVBQzFCLENBQUMsR0FBRyxFQUFFLGtCQUFrQjtBQU14QjtBQUNFLFVBQU0sSUFBSSxFQUFFO0FBQ1osUUFBSTtBQUNKLFFBQUksRUFBRSxVQUFVLFFBQVE7QUFTdEIsWUFBTSxJQUFJLEVBQUUsSUFBSTtBQUNoQixZQUFNLE9BQU8sSUFBVSxxQkFBZSxHQUFHLEVBQUU7QUFDM0MsV0FBSyxVQUFVLEdBQUcsR0FBRyxLQUFLO0FBQzFCLFlBQU0sT0FBTyxJQUFVLHVCQUFpQixHQUFHLEdBQUcsTUFBTSxFQUFFO0FBQ3RELFdBQUssUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ3pCLFlBQU0sTUFBTSxLQUFLLGFBQWEsSUFBSTtBQUNsQyxlQUFTLElBQUksR0FBRyxJQUFJLElBQUksT0FBTyxJQUFLLEtBQUksTUFBTSxHQUFHLE1BQU0sSUFBSTtBQUMzRCxVQUFJLGNBQWM7QUFDbEIsVUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7QUFBQSxJQUM1QixPQUFPO0FBQ0wsWUFBTSxJQUFJLElBQVUsa0JBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQzlDLFlBQU0sS0FBSyxFQUFFLGFBQWEsSUFBSTtBQUM5QixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxLQUFLO0FBQ2pDLFlBQUksS0FBSyxNQUFNLElBQUksR0FBSSxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLO0FBQUEsWUFDcEUsSUFBRyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSTtBQUFBLE1BQ3ZEO0FBQ0EsU0FBRyxjQUFjO0FBQ2pCLFVBQUk7QUFBQSxJQUNOO0FBQ0EsTUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN6QixRQUFJLGdCQUFnQixzQkFBc0IsR0FBRyxRQUFRO0FBQUEsRUFDdkQ7QUFPQTtBQUFBLElBQUk7QUFBQSxJQUFxQjtBQUFBLElBQ3JCLE1BQU0sRUFBRSxRQUFRLE1BQU0sR0FBRyxFQUFFLFFBQVEsSUFBSSxFQUFFLFFBQVEsTUFBTSxNQUFNLEVBQUUsUUFBUSxHQUFHLEVBQUUsUUFBUSxHQUFHLEdBQUk7QUFBQSxJQUFHO0FBQUEsRUFBTztBQU16RyxNQUFJLG1CQUFtQixrQ0FBa0MsTUFBTSxFQUFFLEtBQUssR0FBRyxFQUFFLGFBQWE7QUFNeEYsTUFBSSxFQUFFLFlBQWEsS0FBSSxnQkFBZ0IsRUFBRSxZQUFZLE1BQU0sTUFBTSxFQUFFLFlBQVksS0FBSyxHQUFHLEVBQUUsWUFBWSxRQUFRO0FBRzdHLE1BQUksRUFBRSxhQUFjLEtBQUksaUJBQWlCLEVBQUUsYUFBYSxNQUFNLE1BQU0sRUFBRSxhQUFhLEtBQUssR0FBRyxFQUFFLGFBQWEsUUFBUTtBQUtsSCxNQUFJLEVBQUUsYUFBYyxLQUFJLGlCQUFpQixFQUFFLGFBQWEsTUFBTSxNQUFNLEVBQUUsYUFBYSxLQUFLLEdBQUcsRUFBRSxhQUFhLFFBQVE7QUFNbEg7QUFDRSxVQUFNLElBQUksRUFBRTtBQUNaLFVBQU0sT0FBUSxFQUFFLEVBQWUsSUFBSSxDQUFDLE1BQU0sSUFBVSxjQUFRLEVBQUUsWUFBWSxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sSUFBSSxDQUFDO0FBQ2hHLFlBQVEsc0JBQXNCLHNCQUFzQixJQUFVLGtCQUFZLEVBQUUsR0FBRyxFQUFFLEdBQUcsSUFBSSxHQUFHLEVBQUUsZUFBZSxJQUFJO0FBQUEsRUFDbEg7QUFJQTtBQUNFLFVBQU0sUUFBZ0M7QUFBQSxNQUNwQyxNQUFNLEdBQUcsTUFBTSxHQUFHLE1BQU0sTUFBTSxJQUFJO0FBQUEsTUFDbEMsTUFBTSxHQUFHLE1BQU0sR0FBRyxLQUFNLEtBQU0sRUFBRTtBQUFBLElBQ2xDO0FBQ0EsZUFBVyxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUcsWUFBVyxNQUFNLENBQUMsT0FBTyxJQUFJLEVBQUcsT0FBTSxLQUFLLE1BQU0sSUFBSSxNQUFNLElBQUksTUFBTSxLQUFNLElBQUksQ0FBQztBQUM5RyxVQUFNLE9BQU8sVUFBVSxLQUFLO0FBQzVCLFVBQU0sT0FBUSxFQUFFLFdBQTBCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLE1BQ3ZELElBQVUsY0FBUSxFQUFFO0FBQUEsTUFDbEIsSUFBVSxjQUFRLEdBQUcsS0FBTSxDQUFDO0FBQUEsTUFDNUIsSUFBVSxpQkFBVyxFQUFFLGlCQUFpQixJQUFVLGNBQVEsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHO0FBQUEsTUFDdkUsSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDO0FBQUEsSUFDM0IsQ0FBQztBQUtILFlBQVEsb0JBQW9CLDJCQUEyQixNQUFNLEVBQUUsaUJBQWlCLFFBQVEsSUFBSTtBQUFBLEVBQzlGO0FBR0EsTUFBSSxFQUFFLGFBQWE7QUFDakIsVUFBTSxJQUFJLEVBQUU7QUFDWixRQUFJO0FBQ0osUUFBSSxFQUFFLFNBQVMsU0FBUztBQUN0QixhQUFPLFVBQVUsQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxHQUFHLENBQUMsRUFBRSxJQUFJLElBQUksT0FBTyxHQUFHLE9BQU8sTUFBTSxFQUFFLENBQUMsQ0FBQztBQUFBLElBQ2xHLE9BQU87QUFDTCxhQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUM7QUFBQSxJQUNyQztBQUNBLFVBQU0sT0FBUSxFQUFFLEdBQWtCLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sSUFBVSxjQUFRLEVBQUUsWUFBWSxHQUFHLEdBQUcsQ0FBQyxDQUFDO0FBQzdGLFlBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxNQUFNLEVBQUUsVUFBVSxNQUFNLEVBQUUsUUFBUSxLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxNQUFNLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQyxJQUFJLE1BQVM7QUFBQSxFQUNySDtBQUVBLE9BQUssU0FBUyxnQkFBZ0IsRUFBRSxPQUFPLFFBQVEsU0FBUyxXQUFXLGtCQUFrQjtBQUNyRixTQUFPO0FBQ1Q7QUFXQSxTQUFTLG1CQUFtQixNQUF5QjtBQUNuRCxRQUFNLEtBQUssS0FBSyxTQUFTO0FBQ3pCLFFBQU0sT0FBTyxJQUFJLFNBQVMsY0FBYztBQUN4QyxNQUFJLENBQUMsUUFBUSxPQUFPLGFBQWEsWUFBYTtBQUM5QyxRQUFNLFdBQVcsS0FBSztBQUN0QixNQUFJLENBQUMsU0FBVTtBQUVmLFFBQU0sSUFBSSxPQUFPO0FBSWpCLFFBQU0sU0FBUyxDQUFDLENBQUMsRUFBRTtBQUNuQixRQUFNLElBQUksU0FBUyxNQUFNLE1BQU0sSUFBSSxTQUFTLE1BQU07QUFDbEQsUUFBTSxTQUFTLFNBQVMsY0FBYyxRQUFRO0FBQzlDLFNBQU8sUUFBUTtBQUFHLFNBQU8sU0FBUztBQUNsQyxRQUFNLE1BQU0sT0FBTyxXQUFXLElBQUk7QUFDbEMsTUFBSSxDQUFDLElBQUs7QUFFVixNQUFJLFlBQVksRUFBRTtBQUNsQixNQUFJLFNBQVMsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2QixRQUFNLE9BQU8sU0FBUyxJQUFJLElBQUk7QUFFOUIsUUFBTSxNQUFNLENBQUMsTUFBYyxNQUFjLElBQVksSUFBWSxJQUFZLE1BQWMsV0FBb0IsWUFBcUI7QUFDbEksUUFBSSxPQUFPO0FBQ1gsUUFBSSxlQUFlO0FBQ25CLFFBQUksWUFBWTtBQUNoQixVQUFNLElBQUksSUFBSSxZQUFZLElBQUksRUFBRTtBQUNoQyxVQUFNLEtBQUssS0FBSyxNQUFNO0FBQ3RCLFFBQUksS0FBSztBQUNULFFBQUksVUFBVSxJQUFJLENBQUM7QUFDbkIsUUFBSSxNQUFNLEdBQUcsQ0FBQztBQUNkLFFBQUksV0FBVztBQUFFLFVBQUksV0FBVztBQUFTLFVBQUksY0FBYztBQUFXLFVBQUksYUFBYSxXQUFXLEtBQUs7QUFBRyxVQUFJLFdBQVcsTUFBTSxHQUFHLEVBQUU7QUFBQSxJQUFHO0FBQ3ZJLFFBQUksWUFBWTtBQUNoQixRQUFJLFNBQVMsTUFBTSxHQUFHLEVBQUU7QUFDeEIsUUFBSSxRQUFRO0FBQUEsRUFDZDtBQUVBLGFBQVcsTUFBTSxFQUFFLEtBQWM7QUFDL0IsUUFBSSxHQUFHLFNBQVMsUUFBUTtBQUN0QixVQUFJLFlBQVksR0FBRztBQUNuQixZQUFNLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksTUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLE1BQU0sS0FBSyxHQUFHLEtBQUssS0FBSztBQUN0RixVQUFJLFVBQVU7QUFDZCxVQUFJLElBQUksR0FBRztBQUNULFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxpQkFBaUIsSUFBSSxHQUFHLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztBQUMzRixZQUFJLE9BQU8sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQUcsWUFBSSxpQkFBaUIsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7QUFDakYsWUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLENBQUM7QUFBRyxZQUFJLGlCQUFpQixHQUFHLElBQUksR0FBRyxHQUFHLElBQUksSUFBSSxDQUFDO0FBQ3JFLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUFHLFlBQUksaUJBQWlCLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztBQUFBLE1BQzNELE1BQU8sS0FBSSxLQUFLLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDMUIsVUFBSSxVQUFVO0FBQUcsVUFBSSxLQUFLO0FBQUEsSUFDNUIsV0FBVyxHQUFHLFNBQVMsVUFBVTtBQUMvQixVQUFJLFlBQVksR0FBRztBQUNuQixVQUFJLFVBQVU7QUFDZCxVQUFJLElBQUksR0FBRyxLQUFLLEdBQUcsR0FBRyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sR0FBRyxLQUFLLEtBQUssQ0FBQztBQUM1RCxVQUFJLEtBQUs7QUFBQSxJQUNYLFdBQVcsR0FBRyxTQUFTLFFBQVE7QUFDN0I7QUFBQSxRQUFJLEdBQUc7QUFBQSxRQUFNLEdBQUcsR0FBRyxTQUFTLE1BQU0sSUFBSSxLQUFLLE1BQU0sR0FBRyxPQUFPLElBQUksQ0FBQyxNQUFNLEdBQUcsVUFBVSw4QkFBOEI7QUFBQSxRQUMvRyxHQUFHLEtBQUs7QUFBQSxRQUFHLEdBQUcsS0FBSztBQUFBLFFBQUcsR0FBRyxLQUFLO0FBQUEsUUFBTSxHQUFHO0FBQUEsUUFBTSxHQUFHO0FBQUEsUUFBUSxHQUFHLFVBQVUsR0FBRyxVQUFVLE9BQU87QUFBQSxNQUFTO0FBQUEsSUFDdEc7QUFBQSxFQUNGO0FBRUEsUUFBTSxNQUFNLElBQVUsb0JBQWMsTUFBTTtBQUMxQyxNQUFJLGFBQTRCLHdCQUFrQixJQUFJO0FBQ3RELE1BQUksYUFBYTtBQUNqQixNQUFJLGNBQWM7QUFDbEIsV0FBUyxNQUFNO0FBR2YsV0FBUyxNQUFNLE9BQU8sUUFBUTtBQUM5QixXQUFTLGNBQWM7QUFDekI7QUFTTyxTQUFTLGtCQUFrQixNQUFnQixVQUFrQyxDQUFDLEdBQWdCO0FBQ25HLFFBQU0sT0FBTyxpQ0FBaUMsT0FBTztBQUNyRCxNQUFJLFNBQVMsVUFBYSxTQUFTLEtBQU0sTUFBSyxTQUFTLGFBQWE7QUFFcEUscUJBQW1CLElBQUk7QUFFdkIsUUFBTSxLQUFLLEtBQUssU0FBUztBQUN6QixNQUFJLElBQUk7QUFDTixVQUFNLFFBQVMsR0FBRyxTQUFTLENBQUM7QUFNNUIsVUFBTSxTQUEyQixDQUFDO0FBQ2xDLFVBQU0sWUFBWSxJQUFVLGVBQVM7QUFDckMsY0FBVSxPQUFPO0FBQ2pCLGNBQVUsU0FBUyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQzlCLGNBQVUsU0FBUyxnQkFBZ0I7QUFBQSxNQUNqQyxlQUFlO0FBQUEsTUFDZixPQUFPLEVBQUUsTUFBTSxVQUFVLGVBQWUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLE1BQU0sT0FBTztBQUFBLElBQ25GO0FBQ0EsU0FBSyxJQUFJLFNBQVM7QUFDbEIsV0FBTyxLQUFLLFNBQVM7QUFPckIsVUFBTSxZQUFZLE9BQU8sUUFBUyxHQUFHLGFBQWEsQ0FBQyxDQUF5QixFQUN6RSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxDQUFDLEVBQUUsU0FBUyxDQUFDLEVBQ3pFLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsTUFBTSxJQUFJLEdBQUksRUFBYSxFQUFFO0FBS3BELFVBQU0sVUFBVSxvQkFBSSxJQUE4QjtBQUNsRCxlQUFXLENBQUMsTUFBTSxPQUFPLEtBQUssT0FBTyxRQUFTLEdBQUcscUJBQXFCLENBQUMsQ0FBc0MsR0FBRztBQUM5RyxjQUFRLElBQUksTUFBTSxDQUFDLEdBQUcsT0FBTyxDQUFDO0FBQUEsSUFDaEM7QUFDQSxlQUFXLFFBQVEsT0FBTyxPQUFPLEtBQUssR0FBRztBQUN2QyxZQUFNLFFBQVMsTUFBYyxVQUFVLGVBQWUsYUFBYTtBQUNuRSxVQUFJLE9BQU8sVUFBVSxZQUFZLENBQUMsTUFBTztBQUN6QyxVQUFJLENBQUMsUUFBUSxJQUFJLEtBQUssRUFBRyxTQUFRLElBQUksT0FBTyxDQUFDLENBQUM7QUFDOUMsY0FBUSxJQUFJLEtBQUssRUFBRyxLQUFLLElBQUk7QUFBQSxJQUMvQjtBQUVBLFNBQUssU0FBUyxnQkFBZ0I7QUFBQSxNQUM1QixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUtILE9BQU8sT0FBTyxLQUFLLEtBQUssRUFBRTtBQUFBLE1BQzFCO0FBQUEsTUFDQSxTQUFTLE9BQU8sT0FBUSxHQUFHLFdBQVcsQ0FBQyxDQUFvQztBQUFBLE1BQzNFO0FBQUEsTUFDQSxtQkFBbUIsQ0FBQyxHQUFHLFFBQVEsUUFBUSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsTUFBTSxPQUFPLE9BQU8sRUFBRSxNQUFNLFFBQVEsRUFBRTtBQUFBLE1BQ3RGLE1BQU0sRUFBRSxPQUFPLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxTQUFTLEdBQUcsV0FBVyxDQUFDLEVBQUU7QUFBQSxJQUNwRTtBQUFBLEVBQ0Y7QUFDQSxTQUFPO0FBQ1Q7IiwKICAibmFtZXMiOiBbXQp9Cg==
