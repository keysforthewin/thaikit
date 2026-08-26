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

// scratch/mk-restaurants-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createMKRestaurantsBuildingModel: () => createMKRestaurantsBuildingModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "mk-restaurants-building",
  "name": "MK Restaurants Building",
  "exportName": "MKRestaurantsBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 14799026,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 11250351,
      "roughness": 0.92,
      "metalness": 0
    },
    {
      "id": "green",
      "color": 3762496,
      "roughness": 0.55,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 16382713,
      "roughness": 0.35,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7237994,
      "roughness": 0.14,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 3813411,
      "roughness": 0.55,
      "metalness": 0.25
    },
    {
      "id": "galv",
      "color": 10132124,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 3.22,
    "fasciaWall": {
      "cy": 4.075,
      "cz": 3.1,
      "h": 1.05,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "shape": "disc",
      "w": 1.16,
      "h": 1.16,
      "cy": 3.55,
      "cz": 3.42
    },
    "glazing": {
      "w": 6,
      "h": 2.8,
      "cy": 1.55,
      "cz": 3.35
    },
    "frame": [
      [
        -3.03,
        1.55,
        3.41,
        0.09,
        2.92,
        0.18
      ],
      [
        3.03,
        1.55,
        3.41,
        0.09,
        2.92,
        0.18
      ],
      [
        0,
        2.97,
        3.41,
        6.15,
        0.09,
        0.18
      ],
      [
        0,
        0.13,
        3.41,
        6.15,
        0.1,
        0.18
      ],
      [
        1.3,
        1.45,
        3.41,
        0.09,
        2.7,
        0.18
      ],
      [
        2.15,
        1.45,
        3.41,
        0.09,
        2.7,
        0.18
      ],
      [
        0,
        2.62,
        3.41,
        1.6,
        0.14,
        0.18
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 2.84,
      "cy": 1.53,
      "cz": 3.41,
      "x": [
        -1.55,
        0.35,
        2.62
      ]
    },
    "frontFeature": {
      "name": "Green facade band and corner pilasters",
      "material": "green",
      "boxes": [
        [
          0,
          3.575,
          3.33,
          7.88,
          1.35,
          0.18
        ],
        [
          -3.55,
          2.125,
          3.33,
          0.78,
          4.25,
          0.18
        ],
        [
          3.55,
          2.125,
          3.33,
          0.78,
          4.25,
          0.18
        ]
      ]
    },
    "sideFeature": {
      "name": "Service door and louvre vent",
      "material": "galv",
      "boxes": [
        [
          3.96,
          1.1,
          -0.55,
          0.06,
          2.1,
          0.95
        ],
        [
          3.96,
          2.85,
          0.95,
          0.06,
          0.62,
          1.1
        ]
      ]
    },
    "condensers": [
      [
        -1.35,
        -0.75,
        0
      ],
      [
        -0.35,
        -0.75,
        0
      ],
      [
        1.35,
        -0.55,
        1.5707963267948966
      ]
    ]
  },
  "graphic": {
    "square": true,
    "background": "#F9FAF9",
    "ops": [
      {
        "type": "circle",
        "cx": 0.5,
        "cy": 0.5,
        "r": 0.47,
        "fill": "#2E6B3A"
      },
      {
        "type": "circle",
        "cx": 0.5,
        "cy": 0.5,
        "r": 0.43,
        "fill": "#F9FAF9"
      },
      {
        "type": "text",
        "text": "MK",
        "x0": 0.2,
        "x1": 0.8,
        "cy": 0.44,
        "size": 0.42,
        "fill": "#D8232A",
        "style": "italic bold"
      },
      {
        "type": "rect",
        "x": 0.18,
        "y": 0.6,
        "w": 0.64,
        "h": 0.13,
        "r": 0.03,
        "fill": "#2E6B3A"
      },
      {
        "type": "text",
        "text": "RESTAURANTS",
        "x0": 0.21,
        "x1": 0.79,
        "cy": 0.665,
        "size": 0.085,
        "fill": "#FFFFFF"
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
function createMKRestaurantsBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "MK Restaurants Building";
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
  const root = createMKRestaurantsBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTUsgUmVzdGF1cmFudHMgQnVpbGRpbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcgYW5kXG4gKiBpbnN0YW5jaW5nIGFyZSBoYW5kLXJvbGxlZCBiZWxvdyAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXMgYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDguMDAgeCA0LjYwIHggNy4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBzaG9wZnJvbnQgZmFjaW5nICtaLlxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIE9uZSBvZiB0aGFpa2l0J3Mgc2hhcmVkIHJldGFpbC1tb2R1bGUgYnVpbGRpbmdzLiBUaGUgc2hlbGwgZnJvbnQgZmFjZSBzaXRzIGF0IHo9KzIuNTAgcmF0aGVyXG4gKiB0aGFuIHRoZSBlbnZlbG9wZSBlZGdlIHNvIHRoZSBlbnRyYW5jZSBjYW5vcHkgY2FuIGNhbnRpbGV2ZXIgZm9yd2FyZCBhbmQgc3RpbGwgbGFuZCBleGFjdGx5IG9uXG4gKiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEV2ZXJ5IHN1cmZhY2UgcGFpciBvbiB0aGUgZmFjYWRlIGlzIGRlbGliZXJhdGVseSBvZmZzZXQgaW4gZGVwdGg6XG4gKiB0d28gc3VyZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSB0ZWFyIGludG8gaW50ZXJsZWF2ZWQgdHJpYW5nbGVzIGFzIHRoZVxuICogY2FtZXJhIG1vdmVzLCBhbmQgYXV0aG9yaW5nIGNvbXBvbmVudHMgZmx1c2ggYWdhaW5zdCBvbmUgYW5vdGhlciBwcm9kdWNlcyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJtay1yZXN0YXVyYW50cy1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIk1LIFJlc3RhdXJhbnRzIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiTUtSZXN0YXVyYW50c0J1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0Nzk5MDI2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVja1wiLFxuICAgICAgICBcImNvbG9yXCI6IDExMjUwMzUxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ3JlZW5cIixcbiAgICAgICAgXCJjb2xvclwiOiAzNzYyNDk2LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZmFzY2lhXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTYzODI3MTMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMzUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDAuNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogNzIzNzk5NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xNCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTQsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZyYW1lXCIsXG4gICAgICAgIFwiY29sb3JcIjogMzgxMzQxMSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4yNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdhbHZcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDEzMjEyNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjIyLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LjA3NSxcbiAgICAgICAgXCJjelwiOiAzLjEsXG4gICAgICAgIFwiaFwiOiAxLjA1LFxuICAgICAgICBcImRcIjogMC4zNlxuICAgICAgfSxcbiAgICAgIFwiZmFzY2lhV2FsbE1hdGVyaWFsXCI6IFwid2FsbFwiLFxuICAgICAgXCJmcmFtZU1hdGVyaWFsXCI6IFwiZnJhbWVcIixcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJzaGFwZVwiOiBcImRpc2NcIixcbiAgICAgICAgXCJ3XCI6IDEuMTYsXG4gICAgICAgIFwiaFwiOiAxLjE2LFxuICAgICAgICBcImN5XCI6IDMuNTUsXG4gICAgICAgIFwiY3pcIjogMy40MlxuICAgICAgfSxcbiAgICAgIFwiZ2xhemluZ1wiOiB7XG4gICAgICAgIFwid1wiOiA2LFxuICAgICAgICBcImhcIjogMi44LFxuICAgICAgICBcImN5XCI6IDEuNTUsXG4gICAgICAgIFwiY3pcIjogMy4zNVxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTMuMDMsXG4gICAgICAgICAgMS41NSxcbiAgICAgICAgICAzLjQxLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi45MixcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLjAzLFxuICAgICAgICAgIDEuNTUsXG4gICAgICAgICAgMy40MSxcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDIuOTIsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLjk3LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgNi4xNSxcbiAgICAgICAgICAwLjA5LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4xMyxcbiAgICAgICAgICAzLjQxLFxuICAgICAgICAgIDYuMTUsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuMyxcbiAgICAgICAgICAxLjQ1LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjcsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4xNSxcbiAgICAgICAgICAxLjQ1LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjcsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLjYyLFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgMS42LFxuICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA3LFxuICAgICAgICBcImhcIjogMi44NCxcbiAgICAgICAgXCJjeVwiOiAxLjUzLFxuICAgICAgICBcImN6XCI6IDMuNDEsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTEuNTUsXG4gICAgICAgICAgMC4zNSxcbiAgICAgICAgICAyLjYyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZyb250RmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkdyZWVuIGZhY2FkZSBiYW5kIGFuZCBjb3JuZXIgcGlsYXN0ZXJzXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJncmVlblwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMy41NzUsXG4gICAgICAgICAgICAzLjMzLFxuICAgICAgICAgICAgNy44OCxcbiAgICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgICAwLjE4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy41NSxcbiAgICAgICAgICAgIDIuMTI1LFxuICAgICAgICAgICAgMy4zMyxcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICA0LjI1LFxuICAgICAgICAgICAgMC4xOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy41NSxcbiAgICAgICAgICAgIDIuMTI1LFxuICAgICAgICAgICAgMy4zMyxcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICA0LjI1LFxuICAgICAgICAgICAgMC4xOFxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwic2lkZUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIGRvb3IgYW5kIGxvdXZyZSB2ZW50XCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgICAxLjEsXG4gICAgICAgICAgICAtMC41NSxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAyLjEsXG4gICAgICAgICAgICAwLjk1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzLjk2LFxuICAgICAgICAgICAgMi44NSxcbiAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMC42MixcbiAgICAgICAgICAgIDEuMVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2Vyc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMS4zNSxcbiAgICAgICAgICAtMC43NSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4zNSxcbiAgICAgICAgICAtMC43NSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjM1LFxuICAgICAgICAgIC0wLjU1LFxuICAgICAgICAgIDEuNTcwNzk2MzI2Nzk0ODk2NlxuICAgICAgICBdXG4gICAgICBdXG4gICAgfSxcbiAgICBcImdyYXBoaWNcIjoge1xuICAgICAgXCJzcXVhcmVcIjogdHJ1ZSxcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiNGOUZBRjlcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcImNpcmNsZVwiLFxuICAgICAgICAgIFwiY3hcIjogMC41LFxuICAgICAgICAgIFwiY3lcIjogMC41LFxuICAgICAgICAgIFwiclwiOiAwLjQ3LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiMyRTZCM0FcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJ0eXBlXCI6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgXCJjeFwiOiAwLjUsXG4gICAgICAgICAgXCJjeVwiOiAwLjUsXG4gICAgICAgICAgXCJyXCI6IDAuNDMsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0Y5RkFGOVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiTUtcIixcbiAgICAgICAgICBcIngwXCI6IDAuMixcbiAgICAgICAgICBcIngxXCI6IDAuOCxcbiAgICAgICAgICBcImN5XCI6IDAuNDQsXG4gICAgICAgICAgXCJzaXplXCI6IDAuNDIsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0Q4MjMyQVwiLFxuICAgICAgICAgIFwic3R5bGVcIjogXCJpdGFsaWMgYm9sZFwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJyZWN0XCIsXG4gICAgICAgICAgXCJ4XCI6IDAuMTgsXG4gICAgICAgICAgXCJ5XCI6IDAuNixcbiAgICAgICAgICBcIndcIjogMC42NCxcbiAgICAgICAgICBcImhcIjogMC4xMyxcbiAgICAgICAgICBcInJcIjogMC4wMyxcbiAgICAgICAgICBcImZpbGxcIjogXCIjMkU2QjNBXCJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJSRVNUQVVSQU5UU1wiLFxuICAgICAgICAgIFwieDBcIjogMC4yMSxcbiAgICAgICAgICBcIngxXCI6IDAuNzksXG4gICAgICAgICAgXCJjeVwiOiAwLjY2NSxcbiAgICAgICAgICBcInNpemVcIjogMC4wODUsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0ZGRkZGRlwiXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByOiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTUtSZXN0YXVyYW50c0J1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdNSyBSZXN0YXVyYW50cyBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NCksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsIDIuMywgMy41XSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGUuJyxcbiAgfTtcblxuICAvKiBSb29mIGRlY2sgc3BhbnMgeSAzLjUwLi4zLjYyIHNvIGl0cyB1bmRlcnNpZGUgaXMgc3VuayBJTlRPIHRoZSBzaGVsbCByYXRoZXIgdGhhbiByZXN0aW5nIG9uXG4gICAqIGl0LiBBdXRob3JlZCBmbHVzaCwgdGhlIGRlY2sncyBib3R0b20gZmFjZSBhbmQgdGhlIHBhcmFwZXQgcmluZydzIGJvdHRvbSBmYWNlIHdlcmUgYm90aCBhdFxuICAgKiB5PTMuNTUwIGFuZCBib3RoIGZhY2luZyBkb3duIC0tIDQ2IG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlLiAqL1xuICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCAzLjU2LCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MCksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCA4LjAsIEcuZmFzY2lhV2FsbC5oLCBHLmZhc2NpYVdhbGwuZF0sXG4gICAgWy0zLjg4LCAzLjc1LCAoU0YgLSAwLjMwIC0gMy41KSAvIDIsIDAuMjQsIDAuNCwgU0YgKyAzLjIwXSxcbiAgICBbMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzAsIDMuNzUsIC0zLjM4LCA4LjAsIDAuNCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgYiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShmLncsIGYuaCwgMC4xMik7XG4gICAgICBjb25zdCB1diA9IGIuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykge1xuICAgICAgICBpZiAoaSA+PSAxNiAmJiBpIDwgMjApIHV2LnNldFhZKGksIHV2LmdldFgoaSksIDAuMTI1ICsgdXYuZ2V0WShpKSAqIDAuODc1KTtcbiAgICAgICAgZWxzZSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogMC4wMywgdXYuZ2V0WShpKSAqIDAuMDMpO1xuICAgICAgfVxuICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgZyA9IGI7XG4gICAgfVxuICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICBhZGQoJ3Nob3Bmcm9udC1nbGF6aW5nJywgJ1Nob3Bmcm9udCBnbGF6aW5nJywgYm94QXQoMCwgRy5nbGF6aW5nLmN5LCBHLmdsYXppbmcuY3ogPz8gMi41MSwgRy5nbGF6aW5nLncsIEcuZ2xhemluZy5oLCAwLjEwKSwgJ2dsYXNzJyk7XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBlbnRyYW5jZSBjYW5vcHkgc2xhYiwgQVRNIGJhbmssIHVwcGVyLXN0b3JleSBiYW5kIG9yIGZvcmVjb3VydCwgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5mcm9udEZlYXR1cmUpIGFkZCgnZnJvbnQtZmVhdHVyZScsIEcuZnJvbnRGZWF0dXJlLm5hbWUsIGJveGVzKEcuZnJvbnRGZWF0dXJlLmJveGVzKSwgRy5mcm9udEZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIE11bGxpb25zOiB0aGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCBhIHNob3Bmcm9udC4gSW5zdGFuY2VzXG4gICAqIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGFzIGNvbXBvbmVudHMgdGhleSB3b3VsZCBoYXZlIGNvc3Qgb25lIGVhY2ggYW5kIGJsb3duIHRoZVxuICAgKiBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBzaXQgSU5TSURFIHRoZSBmcmFtZSBkZXB0aCBiYW5kIGF0IGJvdGggZW5kcyBzbyB0aGV5IGFyZSBub3RcbiAgICogY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlIGdsYXppbmcgc28gdGhlIGdsYXNzIHJlYWRzIGFzIHJlY2Vzc2VkLiAqL1xuICB7XG4gICAgY29uc3QgbSA9IEcubXVsbGlvbnM7XG4gICAgY29uc3QgbWF0cyA9IChtLnggYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBtLmN5LCBtLmN6ID8/IDIuNTgpKTtcbiAgICBhZGRJbnN0KCdzaG9wZnJvbnQtbXVsbGlvbnMnLCAnU2hvcGZyb250IG11bGxpb25zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KG0udywgbS5oLCAwLjA4KSwgRy5mcmFtZU1hdGVyaWFsLCBtYXRzKTtcbiAgfVxuXG4gIC8qIFJvb2Z0b3AgY29uZGVuc2VyczogY2FzaW5nLCBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAgICogRmVldCBzdGFydCBiZWxvdyB0aGUgZGVjayB0b3Agc28gdGhlIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS4gKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgMC40NiwgMCwgMC45NSwgMC43MiwgMC44NSksXG4gICAgICBjeWxBdCgwLCAwLjg3LCAwLCAwLjMwLCAwLjEwLCAxNiksXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGZ4IG9mIFstMC40LCAwLjRdKSBmb3IgKGNvbnN0IGZ6IG9mIFstMC4zNSwgMC4zNV0pIHBhcnRzLnB1c2goYm94QXQoZngsIDAuMDUsIGZ6LCAwLjA4LCAwLjEwLCAwLjA4KSk7XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgY29uc3QgbWF0cyA9IChHLmNvbmRlbnNlcnMgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeiwgeWF3XSkgPT5cbiAgICAgIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgMy42MCwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXG4gICAgICApKTtcbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgJ2dhbHYnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIE9wdGlvbmFsIGluc3RhbmNlZCBleHRyYTogY2Fub3B5IHBsYXRlcywgcGlsYXN0ZXJzIG9yIGZvcmVjb3VydCBjb2x1bW5zLCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmV4dHJhU3lzdGVtKSB7XG4gICAgY29uc3QgZSA9IEcuZXh0cmFTeXN0ZW07XG4gICAgbGV0IHVuaXQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChlLmtpbmQgPT09ICdwbGF0ZScpIHtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MoW2JveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpLCBjeWxBdCgwLCAtZS5oIC8gMiAtIDAuMDE1LCAwLCAwLjA4NSwgMC4wMywgMTIpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKTtcbiAgICB9XG4gICAgY29uc3QgbWF0cyA9IChlLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIHksIHopKTtcbiAgICBhZGRJbnN0KGUuaWQsIGUubmFtZSwgdW5pdCwgZS5tYXRlcmlhbCwgbWF0cywgZS50b25lcyA/IG1hdHMubWFwKChfLCBpKSA9PiBlLnRvbmVzW2kgJSBlLnRvbmVzLmxlbmd0aF0pIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJyYW5kIGZhc2NpYSBjYW52YXMgKi9cblxuLyoqIERyYXcgdGhlIGJyYW5kIHdvcmRtYXJrIG9udG8gYSBjYW52YXMgYW5kIGFzc2lnbiBpdCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uIFRoaXMgaXMgdGhlXG4gKiAgZG9jdW1lbnRlZCByb3V0ZSBmb3IgYSBwcmludGVkIGJyYW5kIGZhc2NpYSBhbmQgaXMgdW5hZmZlY3RlZCBieSB0aGUgbWF0ZXJpYWwncyBgdGV4dHVyZWxlc3NgXG4gKiAgZGVjbGFyYXRpb24gLS0gd2hhdCB0aGF0IHNraXBzIGlzIHRoZSBmaXZlLWNhbnZhcyBQUk9DRURVUkFMIHNldCwgYSBkaWZmZXJlbnQgdGhpbmcgZW50aXJlbHkuXG4gKlxuICogIFRleHQgaXMgZml0dGVkIHRvIGl0cyBmaWVsZCBieSBNRUFTVVJFTUVOVCByYXRoZXIgdGhhbiBieSBhIGZvbnQtc2l6ZSByYXRpbzogaGVhZGxlc3MgQ2hyb21lJ3NcbiAqICBmb250IGZhbGxiYWNrIGRlY2lkZXMgdGhlIHJlYWwgYWR2YW5jZSB3aWR0aHMsIHNvIHRoZSBvbmx5IHJlbGlhYmxlIHdheSB0byBmaWxsIGEga25vd24gYm94IGlzXG4gKiAgdG8gbWVhc3VyZSB0aGUgc3RyaW5nIGFuZCBzY2FsZSBpdCBob3Jpem9udGFsbHkuICovXG5mdW5jdGlvbiBhcHBseUZhc2NpYUdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/LlsnZmFzY2lhLXBhbmVsJ107XG4gIGlmICghbWVzaCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuXG4gIGNvbnN0IGcgPSBDT05GSUcuZ3JhcGhpYyBhcyBhbnk7XG4gIC8vIEEgcm91bmQgc2lnbiBuZWVkcyBhIFNRVUFSRSBjYW52YXM6IHRoZSBjeWxpbmRlciBjYXAgbWFwcyB0aGUgY2lyY2xlIGludG8gdGhlIHVuaXQgc3F1YXJlLFxuICAvLyBzbyBhIDIwNDh4MzIwIHN0cmlwIHdvdWxkIHNxdWFzaCB0aGUgbWFyayBmbGF0LiBBIHJlY3Rhbmd1bGFyIGZhc2NpYSBrZWVwcyB0aGUgd2lkZSBzdHJpcCxcbiAgLy8gd2hlcmUgdGhlIGJvdHRvbSAxMi41JSBpcyB0aGUgcGxhaW4gY29ybmVyIGV2ZXJ5IG5vbi1mcm9udCBmYWNlIHNhbXBsZXMuXG4gIGNvbnN0IHNxdWFyZSA9ICEhZy5zcXVhcmU7XG4gIGNvbnN0IFcgPSBzcXVhcmUgPyA1MTIgOiAyMDQ4LCBIID0gc3F1YXJlID8gNTEyIDogMzIwO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gVzsgY2FudmFzLmhlaWdodCA9IEg7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBnLmJhY2tncm91bmQ7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcbiAgY29uc3QgYmFuZCA9IHNxdWFyZSA/IEggOiBIICogMC44NzU7XG5cbiAgY29uc3QgZml0ID0gKHRleHQ6IHN0cmluZywgZm9udDogc3RyaW5nLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBjeTogbnVtYmVyLCBmaWxsOiBzdHJpbmcsIHN0cm9rZUNvbD86IHN0cmluZywgc3Ryb2tlVz86IG51bWJlcikgPT4ge1xuICAgIGN0eC5mb250ID0gZm9udDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICBjb25zdCB3ID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIGNvbnN0IHMgPSAoeDEgLSB4MCkgLyB3O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4MCwgMCk7XG4gICAgY3R4LnNjYWxlKHMsIDEpO1xuICAgIGlmIChzdHJva2VDb2wpIHsgY3R4LmxpbmVKb2luID0gJ3JvdW5kJzsgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sOyBjdHgubGluZVdpZHRoID0gKHN0cm9rZVcgPz8gNikgLyBzOyBjdHguc3Ryb2tlVGV4dCh0ZXh0LCAwLCBjeSk7IH1cbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgMCwgY3kpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBvcCBvZiBnLm9wcyBhcyBhbnlbXSkge1xuICAgIGlmIChvcC50eXBlID09PSAncmVjdCcpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY29uc3QgeCA9IG9wLnggKiBXLCB5ID0gb3AueSAqIGJhbmQsIHcgPSBvcC53ICogVywgaCA9IG9wLmggKiBiYW5kLCByID0gKG9wLnIgPz8gMCkgKiBiYW5kO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpOyBjdHgubGluZVRvKHggKyB3IC0gciwgeSk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5LCB4ICsgdywgeSArIHIpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3LCB5ICsgaCAtIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSArIGgsIHggKyB3IC0gciwgeSArIGgpO1xuICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgaCk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoLCB4LCB5ICsgaCAtIHIpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgfSBlbHNlIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhvcC5jeCAqIFcsIG9wLmN5ICogYmFuZCwgb3AuciAqIGJhbmQsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGZpdChvcC50ZXh0LCBgJHtvcC5zdHlsZSA/PyAnYm9sZCd9ICR7TWF0aC5yb3VuZChvcC5zaXplICogYmFuZCl9cHggJHtvcC5mYW1pbHkgPz8gJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnfWAsXG4gICAgICAgIG9wLngwICogVywgb3AueDEgKiBXLCBvcC5jeSAqIGJhbmQsIG9wLmZpbGwsIG9wLnN0cm9rZSwgb3Auc3Ryb2tlVyA/IG9wLnN0cm9rZVcgKiBiYW5kIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICB0ZXguY29sb3JTcGFjZSA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlID8/IHRleC5jb2xvclNwYWNlO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gV2hpdGUgYmFzZSBzbyB0aGUgY2FudmFzIHNob3dzIGFzIGRyYXduIHJhdGhlciB0aGFuIHRpbnRlZCAtLSB0aGUgbWVhc3VyZWQgZmFzY2lhIGNvbG91ciBpc1xuICAvLyBhbHJlYWR5IHBhaW50ZWQgaW50byB0aGUgY2FudmFzIGJhY2tncm91bmQuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZU1LUmVzdGF1cmFudHNCdWlsZGluZ01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgYXBwbHlGYXNjaWFHcmFwaGljKHJvb3QpO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gQSBzdGF0aWMgZXh0ZXJpb3Igc2hlbGwgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBUaGUgZG9vcnMgYW5kIGFueVxuICAgIC8vIHNodXR0ZXIgYXJlIGF1dGhvcmVkIGFzIGZpeGVkIGdlb21ldHJ5LCBzbyB0aGV5IGdldCBubyBheGlzOiBhIG5hbWVkIHBpdm90IGlzIGEgcHJvbWlzZVxuICAgIC8vIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvciBoYXNcbiAgICAvLyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLGNBQWM7QUFBQSxJQUNkLGNBQWM7QUFBQSxNQUNaLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxzQkFBc0I7QUFBQSxJQUN0QixpQkFBaUI7QUFBQSxJQUNqQixVQUFVO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FB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
