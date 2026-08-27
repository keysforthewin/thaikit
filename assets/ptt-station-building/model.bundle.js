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

// scratch/ptt-station-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createPTTStationBuildingModel: () => createPTTStationBuildingModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "ptt-station-building",
  "name": "PTT Station Building",
  "exportName": "PTTStationBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 14145492,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 8160656,
      "roughness": 0.93,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 3422290,
      "roughness": 0.42,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 7304311,
      "roughness": 0.13,
      "metalness": 0,
      "opacity": 0.94,
      "envMapIntensity": 1.1
    },
    {
      "id": "frame",
      "color": 8882828,
      "roughness": 0.55,
      "metalness": 0.25
    },
    {
      "id": "red",
      "color": 11544875,
      "roughness": 0.5,
      "metalness": 0
    },
    {
      "id": "galv",
      "color": 9146518,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 0.3,
    "plantMaterial": "galv",
    "fasciaWall": {
      "cy": 4.075,
      "cz": 0.16,
      "h": 1.05,
      "d": 0.36,
      "w": 7.96
    },
    "parapetExtra": [
      [0, 3.86, 3.42, 7.98, 0.1, 0.16],
      [-3.91, 3.86, -0.075, 0.16, 0.1, 6.81],
      [3.91, 3.86, -0.075, 0.16, 0.1, 6.81]
    ],
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "boards": [
        {
          "w": 8,
          "h": 0.68,
          "d": 0.16,
          "at": [
            0,
            3.47,
            3.41
          ],
          "face": "+Z"
        },
        {
          "w": 0.16,
          "h": 0.68,
          "d": 6.84,
          "at": [
            -3.92,
            3.47,
            -0.08
          ],
          "plain": true
        },
        {
          "w": 0.16,
          "h": 0.68,
          "d": 6.84,
          "at": [
            3.92,
            3.47,
            -0.08
          ],
          "plain": true
        }
      ]
    },
    "glazing": {
      "cx": -0.3,
      "w": 5.2,
      "h": 2.7,
      "cy": 1.58,
      "cz": 0.36
    },
    "frame": [
      [
        -2.98,
        1.58,
        0.42,
        0.09,
        2.8,
        0.16
      ],
      [
        2.38,
        1.58,
        0.42,
        0.09,
        2.8,
        0.16
      ],
      [
        -0.3,
        2.97,
        0.42,
        5.46,
        0.09,
        0.16
      ],
      [
        -0.3,
        0.19,
        0.42,
        5.46,
        0.09,
        0.16
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 2.74,
      "cy": 1.58,
      "cz": 0.42,
      "x": [
        -1.9,
        -0.85,
        0.2,
        1.25
      ]
    },
    "frontFeature": {
      "name": "Canopy slab and service door",
      "material": "wall",
      "boxes": [
        [
          0,
          3.45,
          1.8,
          7.92,
          0.3,
          3.36
        ],
        [
          3.96,
          1.2,
          -1.6,
          0.06,
          2.2,
          1
        ]
      ]
    },
    "sideFeature": {
      "name": "Canopy columns",
      "material": "frame",
      "boxes": [
        [
          -2.6,
          1.7,
          3.05,
          0.34,
          3.4,
          0.34
        ],
        [
          2.6,
          1.7,
          3.05,
          0.34,
          3.4,
          0.34
        ]
      ]
    },
    "extraFeature": {
      "name": "Canopy red stripe",
      "material": "red",
      "boxes": [
        [
          0,
          3.06,
          3.43,
          7.96,
          0.14,
          0.14
        ],
        [
          -3.925,
          3.06,
          -0.075,
          0.14,
          0.14,
          6.85
        ],
        [
          3.925,
          3.06,
          -0.075,
          0.14,
          0.14,
          6.85
        ]
      ]
    },
    "condensers": [
      [
        0.35,
        -1.35,
        0
      ],
      [
        1.65,
        -1.95,
        0
      ],
      [
        2.65,
        -1.95,
        0
      ]
    ]
  },
  "graphic": {
    "background": "#343852"
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
function createPTTStationBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "PTT Station Building";
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
    [0, G.fasciaWall.cy, G.fasciaWall.cz, G.fasciaWall.w ?? 8, G.fasciaWall.h, G.fasciaWall.d],
    // Upstands sit INBOARD of the navy band plane (+-4.00) and the coping plane (+-3.99): at
    // +-4.00 their outer faces were coplanar and co-facing with the band's side runs.
    // Rear ends at -3.48, not -3.50: at -3.50 they shared the band's rear-end plane.
    [-3.86, 3.72, (SF - 0.3 - 3.48) / 2, 0.24, 0.34, SF + 3.18],
    [3.86, 3.72, (SF - 0.3 - 3.48) / 2, 0.24, 0.34, SF + 3.18],
    [0, 3.72, -3.36, 7.96, 0.34, 0.24],
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
var SIGN_IMAGE_DATA_URL = "data:image/webp;base64,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";
function drawFallbackSign() {
  if (typeof document === "undefined") return null;
  const W = 2048, H = 512, BAND = 448;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return null;
  ctx.fillStyle = CONFIG.graphic.background;
  ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = "#FFFFFF";
  const fh = BAND * 0.8, fw = fh * 0.56, fx = W * 0.52, fy = (BAND - fh) / 2;
  const drop = (cx, top, w, h) => {
    ctx.moveTo(cx, top);
    ctx.bezierCurveTo(cx + w * 0.05, top + h * 0.35, cx + w * 0.5, top + h * 0.5, cx + w * 0.5, top + h * 0.75);
    ctx.bezierCurveTo(cx + w * 0.5, top + h * 1.08, cx - w * 0.5, top + h * 1.08, cx - w * 0.5, top + h * 0.75);
    ctx.bezierCurveTo(cx - w * 0.5, top + h * 0.5, cx - w * 0.05, top + h * 0.35, cx, top);
  };
  ctx.beginPath();
  drop(fx + fw / 2, fy, fw, fh * 0.92);
  drop(fx + fw / 2, fy + fh * 0.36, fw * 0.5, fh * 0.5);
  ctx.fill("evenodd");
  const lh = fh * 0.62, x0 = fx + fw + fh * 0.1, base = fy + fh * 0.8, sw = lh * 0.19, sl = 0.18;
  ctx.lineWidth = sw;
  ctx.lineCap = "butt";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#FFFFFF";
  ctx.save();
  ctx.transform(1, 0, -sl, 1, sl * base, 0);
  const xh = lh * 0.62;
  ctx.beginPath();
  ctx.moveTo(x0 + sw / 2, base - xh);
  ctx.lineTo(x0 + sw / 2, base + lh * 0.3);
  ctx.stroke();
  ctx.beginPath();
  ctx.ellipse(x0 + sw / 2 + xh * 0.42, base - xh / 2, xh * 0.42, xh / 2 - sw / 2, 0, -Math.PI / 2, Math.PI / 2);
  ctx.stroke();
  let tx = x0 + sw + xh * 0.95 + sw * 0.6;
  for (let i = 0; i < 2; i++) {
    ctx.beginPath();
    ctx.moveTo(tx + sw / 2, base - lh * 0.85);
    ctx.lineTo(tx + sw / 2, base - sw / 2);
    ctx.lineTo(tx + sw * 1.5, base - sw / 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tx - sw * 0.4, base - xh);
    ctx.lineTo(tx + sw * 1.7, base - xh);
    ctx.stroke();
    tx += sw * 2.4;
  }
  ctx.restore();
  return canvas;
}
function applyFasciaGraphic(root) {
  const rt = root.userData.sculptRuntime;
  const mesh = rt?.meshes?.["fascia-panel"];
  if (!mesh || typeof document === "undefined") return;
  const material = mesh.material;
  if (!material) return;
  const srgb = THREE.SRGBColorSpace;
  const baked = new THREE.TextureLoader().load(SIGN_IMAGE_DATA_URL, void 0, void 0, () => {
    const canvas = drawFallbackSign();
    if (!canvas) return;
    const tex = new THREE.CanvasTexture(canvas);
    if (srgb) tex.colorSpace = srgb;
    tex.anisotropy = 4;
    material.map = tex;
    material.needsUpdate = true;
  });
  if (srgb) baked.colorSpace = srgb;
  baked.anisotropy = 4;
  baked.needsUpdate = true;
  material.map = baked;
  material.color.setHex(16777215);
  material.needsUpdate = true;
}
function createObjectModel(spec, options = {}) {
  const root = createPTTStationBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUFRUIFN0YXRpb24gQnVpbGRpbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcgYW5kXG4gKiBpbnN0YW5jaW5nIGFyZSBoYW5kLXJvbGxlZCBiZWxvdyAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXMgYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDguMDAgeCA0LjYwIHggNy4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBzaG9wZnJvbnQgZmFjaW5nICtaLlxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIE9uZSBvZiB0aGFpa2l0J3Mgc2hhcmVkIHJldGFpbC1tb2R1bGUgYnVpbGRpbmdzLiBUaGUgc2hlbGwgZnJvbnQgZmFjZSBzaXRzIGF0IHo9KzIuNTAgcmF0aGVyXG4gKiB0aGFuIHRoZSBlbnZlbG9wZSBlZGdlIHNvIHRoZSBlbnRyYW5jZSBjYW5vcHkgY2FuIGNhbnRpbGV2ZXIgZm9yd2FyZCBhbmQgc3RpbGwgbGFuZCBleGFjdGx5IG9uXG4gKiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEV2ZXJ5IHN1cmZhY2UgcGFpciBvbiB0aGUgZmFjYWRlIGlzIGRlbGliZXJhdGVseSBvZmZzZXQgaW4gZGVwdGg6XG4gKiB0d28gc3VyZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSB0ZWFyIGludG8gaW50ZXJsZWF2ZWQgdHJpYW5nbGVzIGFzIHRoZVxuICogY2FtZXJhIG1vdmVzLCBhbmQgYXV0aG9yaW5nIGNvbXBvbmVudHMgZmx1c2ggYWdhaW5zdCBvbmUgYW5vdGhlciBwcm9kdWNlcyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJwdHQtc3RhdGlvbi1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIlBUVCBTdGF0aW9uIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiUFRUU3RhdGlvbkJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MTQ1NDkyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVja1wiLFxuICAgICAgICBcImNvbG9yXCI6IDgxNjA2NTYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAzNDIyMjkwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDczMDQzMTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjk0LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmcmFtZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDg4ODI4MjgsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMjVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyZWRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTU0NDg3NSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDkxNDY1MTgsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuM1xuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcInNoZWxsRnJvbnRcIjogMC4zLFxuICAgICAgXCJwbGFudE1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LjA3NSxcbiAgICAgICAgXCJjelwiOiAwLjE2LFxuICAgICAgICBcImhcIjogMS4wNSxcbiAgICAgICAgXCJkXCI6IDAuMzYsXG4gICAgICAgIFwid1wiOiA3Ljk2XG4gICAgICB9LFxuICAgICAgXCJwYXJhcGV0RXh0cmFcIjogW1xuICAgICAgICBbMCwgMy44NiwgMy40MiwgNy45OCwgMC4xLCAwLjE2XSxcbiAgICAgICAgWy0zLjkxLCAzLjg2LCAtMC4wNzUsIDAuMTYsIDAuMSwgNi44MV0sXG4gICAgICAgIFszLjkxLCAzLjg2LCAtMC4wNzUsIDAuMTYsIDAuMSwgNi44MV1cbiAgICAgIF0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICBcImZhc2NpYVwiOiB7XG4gICAgICAgIFwiYm9hcmRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIndcIjogOC4wLFxuICAgICAgICAgICAgXCJoXCI6IDAuNjgsXG4gICAgICAgICAgICBcImRcIjogMC4xNixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAzLjQ3LFxuICAgICAgICAgICAgICAzLjQxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJmYWNlXCI6IFwiK1pcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ3XCI6IDAuMTYsXG4gICAgICAgICAgICBcImhcIjogMC42OCxcbiAgICAgICAgICAgIFwiZFwiOiA2Ljg0LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0zLjkyLFxuICAgICAgICAgICAgICAzLjQ3LFxuICAgICAgICAgICAgICAtMC4wOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicGxhaW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ3XCI6IDAuMTYsXG4gICAgICAgICAgICBcImhcIjogMC42OCxcbiAgICAgICAgICAgIFwiZFwiOiA2Ljg0LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDMuOTIsXG4gICAgICAgICAgICAgIDMuNDcsXG4gICAgICAgICAgICAgIC0wLjA4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJwbGFpblwiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nXCI6IHtcbiAgICAgICAgXCJjeFwiOiAtMC4zLFxuICAgICAgICBcIndcIjogNS4yLFxuICAgICAgICBcImhcIjogMi43LFxuICAgICAgICBcImN5XCI6IDEuNTgsXG4gICAgICAgIFwiY3pcIjogMC4zNlxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTIuOTgsXG4gICAgICAgICAgMS41OCxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzgsXG4gICAgICAgICAgMS41OCxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgMi45NyxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDUuNDYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4zLFxuICAgICAgICAgIDAuMTksXG4gICAgICAgICAgMC40MixcbiAgICAgICAgICA1LjQ2LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA3LFxuICAgICAgICBcImhcIjogMi43NCxcbiAgICAgICAgXCJjeVwiOiAxLjU4LFxuICAgICAgICBcImN6XCI6IDAuNDIsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTEuOSxcbiAgICAgICAgICAtMC44NSxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMS4yNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJDYW5vcHkgc2xhYiBhbmQgc2VydmljZSBkb29yXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAzLjQ1LFxuICAgICAgICAgICAgMS44LFxuICAgICAgICAgICAgNy45MixcbiAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgIDMuMzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAtMS42LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDIuMixcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZGVGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2Fub3B5IGNvbHVtbnNcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjYsXG4gICAgICAgICAgICAxLjcsXG4gICAgICAgICAgICAzLjA1LFxuICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgIDMuNCxcbiAgICAgICAgICAgIDAuMzRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNixcbiAgICAgICAgICAgIDEuNyxcbiAgICAgICAgICAgIDMuMDUsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMy40LFxuICAgICAgICAgICAgMC4zNFxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZXh0cmFGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2Fub3B5IHJlZCBzdHJpcGVcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInJlZFwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMy4wNixcbiAgICAgICAgICAgIDMuNDMsXG4gICAgICAgICAgICA3Ljk2LFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMTRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjkyNSxcbiAgICAgICAgICAgIDMuMDYsXG4gICAgICAgICAgICAtMC4wNzUsXG4gICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDYuODVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTI1LFxuICAgICAgICAgICAgMy4wNixcbiAgICAgICAgICAgIC0wLjA3NSxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgNi44NVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiY29uZGVuc2Vyc1wiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLjM1LFxuICAgICAgICAgIC0xLjM1LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuNjUsXG4gICAgICAgICAgLTEuOTUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42NSxcbiAgICAgICAgICAtMS45NSxcbiAgICAgICAgICAwXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9LFxuICAgIFwiZ3JhcGhpY1wiOiB7XG4gICAgICBcImJhY2tncm91bmRcIjogXCIjMzQzODUyXCJcbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByOiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvIC0tIHdoaWNoIGlzXG4gKiB3aGF0IHJlbmRlcnMgYSBidWlsZGluZyBtaWQtZ3JleS5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIG1ldGFscy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhIGhlbWlzcGhlcmVcbiAqIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvIHJlZmxlY3RcbiAqIHJlbmRlcnMgYmxhY2suIFRoZSBhbGJlZG8gc3RheXMgbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMsIHRoZSBicmFuZCBmYXNjaWEsIGlzIGEgY2FudmFzIGFzc2lnbmVkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi5cbiAqIFRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBkb2VzIG5vdCBhZmZlY3QgdGhhdCwgYW5kIGl0IGlzIHRoZSBkb2N1bWVudGVkIHJvdXRlLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUFRUU3RhdGlvbkJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdQVFQgU3RhdGlvbiBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogU2hlbGw6IFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgb25seSBldmVyIHNlZW4gZnJvbSBvdXRzaWRlLCBzb1xuICAgKiBhbiBpbnRlcmlvciBjb3N0cyBkcmF3IGNhbGxzLCBnZW9tZXRyaWVzIGFuZCBWUkFNIGZvciBzb21ldGhpbmcgbm9ib2R5IHNlZXMgLS0gYW5kIHNvbGlkXG4gICAqIG1lYW5zIHRoZSBzaG9wZnJvbnQgbmVlZHMgbm8gb3BlbmluZyBjdXQgaW4gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZCB0aGVcbiAgICogei1maWdodGluZyB0aGV5IGNhdXNlLiBTZXQgMC4wNiBtIElOU0lERSB0aGUgcGFyYXBldCByaW5nIG9uIGV2ZXJ5IGVsZXZhdGlvbiBzbyBubyB3YWxsIGZhY2VcbiAgICogaXMgZXZlciBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggYSBwYXJhcGV0IGZhY2UuICovXG4gIC8vIEhvdyBmYXIgZm9yd2FyZCB0aGUgc2hlbGwgZmFjZSBzaXRzLiBUaGUgREVGQVVMVCAyLjUwIGxlYXZlcyAxLjAwIG0gZm9yIGFuIGVudHJhbmNlIGNhbm9weSB0b1xuICAvLyBjYW50aWxldmVyIGludG8sIHNvIHRoZSBjYW5vcHkgbm9zZSBsYW5kcyBleGFjdGx5IG9uIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gQSBidWlsZGluZyB3aXRoXG4gIC8vIE5PIGZvcndhcmQgY2FudGlsZXZlciBtdXN0IHB1c2ggdGhpcyBvdXQgaW5zdGVhZCwgb3IgdGhlIHByb3AgaXMgYnVpbHQgc2hvcnQgb2YgaXRzIGRlY2xhcmVkXG4gIC8vIGVudmVsb3BlIC0tIE1LIGZpcnN0IGNhbWUgb3V0IDYuMyBtIGRlZXAgYWdhaW5zdCBhIGRlY2xhcmVkIDcuMCBmb3IgZXhhY3RseSB0aGF0IHJlYXNvbi5cbiAgY29uc3QgU0YgPSAoRy5zaGVsbEZyb250ID8/IDIuNTApIGFzIG51bWJlcjtcbiAgYWRkKCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAoU0YgLSAzLjQ0KSAvIDIsIDcuODgsIDMuNTUsIFNGICsgMy40NCksICd3YWxsJyk7XG4gIGNvbGxpZGVyc1snYnVpbGRpbmctc2hlbGwnXSA9IHtcbiAgICBzaGFwZTogJ2JveCcsIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSwgaGFsZkV4dGVudHM6IFs0LjAsIDIuMywgMy41XSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGUuJyxcbiAgfTtcblxuICAvKiBSb29mIGRlY2sgc3BhbnMgeSAzLjUwLi4zLjYyIHNvIGl0cyB1bmRlcnNpZGUgaXMgc3VuayBJTlRPIHRoZSBzaGVsbCByYXRoZXIgdGhhbiByZXN0aW5nIG9uXG4gICAqIGl0LiBBdXRob3JlZCBmbHVzaCwgdGhlIGRlY2sncyBib3R0b20gZmFjZSBhbmQgdGhlIHBhcmFwZXQgcmluZydzIGJvdHRvbSBmYWNlIHdlcmUgYm90aCBhdFxuICAgKiB5PTMuNTUwIGFuZCBib3RoIGZhY2luZyBkb3duIC0tIDQ2IG0yIG9mIGNvcGxhbmFyIGNvLWZhY2luZyBzdXJmYWNlLiAqL1xuICBhZGQoJ3Jvb2YtZGVjaycsICdSb29mIGRlY2snLCBib3hBdCgwLCAzLjU2LCAoU0YgLSAwLjAyIC0gMy40MikgLyAyLCA3LjgsIDAuMTIsIFNGICsgMy40MCksICdkZWNrJyk7XG5cbiAgLyogUGFyYXBldDogZnJvbnQgZmFzY2lhIHdhbGwgcGx1cyB0aHJlZSB1cHN0YW5kcywgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC5cbiAgICogVGhlIGZyb250IGlzIHRhbGxlciB0aGFuIHRoZSBzaWRlcywgd2hpY2ggYSBwbGFuIGV4dHJ1c2lvbiBjYW5ub3QgZXhwcmVzcy4gT3V0ZXIgZmFjZXMgc3RhbmRcbiAgICogMC4wNiBtIHByb3VkIG9mIHRoZSB3YWxscyAtLSBhIGNvcGluZyBkcmlwIGVkZ2UsIGFuZCB3aGF0IGtlZXBzIHRoZW0gb2ZmIHRoZSB3YWxsIHBsYW5lcy4gKi9cbiAgYWRkKCdwYXJhcGV0JywgJ1BhcmFwZXQgcmluZyBhbmQgZmFzY2lhIHdhbGwnLCBib3hlcyhbXG4gICAgWzAsIEcuZmFzY2lhV2FsbC5jeSwgRy5mYXNjaWFXYWxsLmN6LCBHLmZhc2NpYVdhbGwudyA/PyA4LjAsIEcuZmFzY2lhV2FsbC5oLCBHLmZhc2NpYVdhbGwuZF0sXG4gICAgLy8gVXBzdGFuZHMgc2l0IElOQk9BUkQgb2YgdGhlIG5hdnkgYmFuZCBwbGFuZSAoKy00LjAwKSBhbmQgdGhlIGNvcGluZyBwbGFuZSAoKy0zLjk5KTogYXRcbiAgICAvLyArLTQuMDAgdGhlaXIgb3V0ZXIgZmFjZXMgd2VyZSBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggdGhlIGJhbmQncyBzaWRlIHJ1bnMuXG4gICAgLy8gUmVhciBlbmRzIGF0IC0zLjQ4LCBub3QgLTMuNTA6IGF0IC0zLjUwIHRoZXkgc2hhcmVkIHRoZSBiYW5kJ3MgcmVhci1lbmQgcGxhbmUuXG4gICAgWy0zLjg2LCAzLjcyLCAoU0YgLSAwLjMwIC0gMy40OCkgLyAyLCAwLjI0LCAwLjM0LCBTRiArIDMuMThdLFxuICAgIFszLjg2LCAzLjcyLCAoU0YgLSAwLjMwIC0gMy40OCkgLyAyLCAwLjI0LCAwLjM0LCBTRiArIDMuMThdLFxuICAgIFswLCAzLjcyLCAtMy4zNiwgNy45NiwgMC4zNCwgMC4yNF0sXG4gICAgLy8gQW55dGhpbmcgZWxzZSBpbiB0aGUgU0FNRSBtYXRlcmlhbCBmb2xkcyBpbiBoZXJlIHJhdGhlciB0aGFuIGNvc3RpbmcgaXRzIG93biBkcmF3IGNhbGwgLS1cbiAgICAvLyBmdWxsLWhlaWdodCBmYWNhZGUgY2xhZGRpbmcsIGNvcm5lciBwaWxhc3RlcnMsIGEgcGxpbnRoLiBUaGlzIGlzIHRoZSBtZXJnZSBsZXZlcjogdHdvXG4gICAgLy8gcGFydHMgdGhhdCBzaGFyZSBhIG1hdGVyaWFsIHNob3VsZCBuZXZlciBiZSB0d28gc3VibWlzc2lvbnMuXG4gICAgLi4uKChHLnBhcmFwZXRFeHRyYSA/PyBbXSkgYXMgbnVtYmVyW11bXSksXG4gIF0pLCBHLmZhc2NpYVdhbGxNYXRlcmlhbCk7XG5cbiAgLyogQnJhbmQgZmFzY2lhIHBhbmVsLiBTdW5rIElOVE8gdGhlIGZhc2NpYSB3YWxsIGF0IHRoZSBiYWNrIGFuZCBzdGFuZGluZyBwcm91ZCBhdCB0aGUgZnJvbnQsIHNvXG4gICAqIGl0IG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQ6IHRoZSArWiBmYWNlIHNhbXBsZXMgdGhlXG4gICAqIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lXG4gICAqIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgT05FIG1hdGVyaWFsIGFuZCBPTkUgZHJhdyBjYWxsLiAqL1xuICB7XG4gICAgY29uc3QgZiA9IEcuZmFzY2lhO1xuICAgIGxldCBnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZi5zaGFwZSA9PT0gJ2Rpc2MnKSB7XG4gICAgICAvLyBBIHJvdW5kIHNpZ24gZGlzYywgYnVpbHQgYXMgYSBDaXJjbGVHZW9tZXRyeSBmYWNlIHBsdXMgYSBzaGFsbG93IGN5bGluZGVyIGJvZHkuXG4gICAgICAvL1xuICAgICAgLy8gVGhlIG9idmlvdXMgY29uc3RydWN0aW9uIC0tIG9uZSBjeWxpbmRlciByb3RhdGVkIHRvIGZhY2UgK1ogLS0gcHV0cyB0aGUgd29yZG1hcmsgb24gaXRzXG4gICAgICAvLyBzaWRlLCBiZWNhdXNlIEN5bGluZGVyR2VvbWV0cnkgbGF5cyBpdHMgY2FwIFVWcyBvdXQgaW4gdGhlIGN5bGluZGVyJ3Mgb3duIFhaIHBsYW5lIGFuZFxuICAgICAgLy8gcm90YXRpbmcgdGhlIGdlb21ldHJ5IGRvZXMgbm90IHJvdGF0ZSB0aGVtIHdpdGggaXQuIENpcmNsZUdlb21ldHJ5J3MgVVZzIGFyZSBhbHJlYWR5XG4gICAgICAvLyAoeCwgeSkgaW4gdGhlIHBsYW5lIGl0IGZhY2VzLCBzbyB0aGUgc3F1YXJlIGNhbnZhcyBsYW5kcyB0aGUgcmlnaHQgd2F5IHVwIHdpdGggbm9cbiAgICAgIC8vIGNvcnJlY3Rpb24uIFRoZSBib2R5J3MgVVZzIGFyZSBjb2xsYXBzZWQgb250byBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMgc28gdGhlXG4gICAgICAvLyBkaXNjJ3MgZWRnZSBkb2VzIG5vdCBzbWVhciB0aGUgd29yZG1hcmsgYXJvdW5kIGl0cyByaW0uXG4gICAgICBjb25zdCByID0gZi53IC8gMjtcbiAgICAgIGNvbnN0IGZhY2UgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkociwgMzIpO1xuICAgICAgZmFjZS50cmFuc2xhdGUoMCwgMCwgMC4wNjEpO1xuICAgICAgY29uc3QgYm9keSA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIDAuMTIsIDMyKTtcbiAgICAgIGJvZHkucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICAgICAgY29uc3QgYnV2ID0gYm9keS5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidXYuY291bnQ7IGkrKykgYnV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgICAgYnV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgIGcgPSBtZXJnZUdlb3MoW2ZhY2UsIGJvZHldKTtcbiAgICAgIGcudHJhbnNsYXRlKDAsIGYuY3ksIGYuY3opO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCb3hHZW9tZXRyeSB2ZXJ0ZXggb3JkZXIgaXMgcHgsIG54LCBweSwgbnksIHB6LCBueiAtLSBmb3VyIHZlcnRpY2VzIHBlciBmYWNlIC0tIHNvIHRoZVxuICAgICAgLy8gb3V0d2FyZCBmYWNlIG9mIGEgYm9hcmQgaXMgYSBrbm93biBzbGljZSBvZiB0aGUgdXYgYXR0cmlidXRlLiBBIGJ1aWxkaW5nIGNhbiBjYXJyeSB0aGVcbiAgICAgIC8vIHNhbWUgbWFyayBvbiBtb3JlIHRoYW4gb25lIGVsZXZhdGlvbiAodGhpcyBraXQncyBob3NwaXRhbCBzaWducyBpdHMgZnJvbnQgQU5EIGl0cyBzaWRlKSxcbiAgICAgIC8vIHNvIGBib2FyZHNgIGxldHMgZWFjaCBib2FyZCBuYW1lIHRoZSBmYWNlIHRoYXQgc2FtcGxlcyB0aGUgZ3JhcGhpYyB3aGlsZSBldmVyeSBvdGhlciBmYWNlXG4gICAgICAvLyBzYW1wbGVzIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcy4gT25lIG1hdGVyaWFsLCBvbmUgZHJhdyBjYWxsLCBhbnkgbnVtYmVyIG9mXG4gICAgICAvLyBib2FyZHMgZmFjaW5nIGFueSB3YXkuXG4gICAgICBjb25zdCBGQUNFX1NMSUNFOiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0geyAnK1gnOiAwLCAnLVgnOiA0LCAnK1knOiA4LCAnLVknOiAxMiwgJytaJzogMTYsICctWic6IDIwIH07XG4gICAgICBjb25zdCBib2FyZHMgPSAoZi5ib2FyZHMgYXMgYW55W10pID8/IFt7IHc6IGYudywgaDogZi5oLCBkOiAwLjEyLCBhdDogWzAsIGYuY3ksIGYuY3pdLCBmYWNlOiAnK1onIH1dO1xuICAgICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAgIGZvciAoY29uc3QgYmQgb2YgYm9hcmRzKSB7XG4gICAgICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYmQudywgYmQuaCwgYmQuZCA/PyAwLjEyKTtcbiAgICAgICAgY29uc3QgdXYgPSBiLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICAgIC8vIGBwbGFpbmAgYm9hcmRzIGNhcnJ5IG5vIGdyYXBoaWMgYXQgYWxsOiBhIGJhbmQgdGhhdCB3cmFwcyB0aHJlZSBzaWRlcyBvZiBhIGNhbm9weSBzaG91bGRcbiAgICAgICAgLy8gcmVwZWF0IGl0cyBtYXJrIG9uIG5vbmUgb2YgdGhlIHJldHVybnMsIG9ubHkgb24gdGhlIGZhY2UgdGhhdCBmcm9udHMgdGhlIHN0cmVldC5cbiAgICAgICAgLy8gVGhlIHRlc3QgaXMgYW4gZXhwbGljaXQgYm9vbGVhbiwgTk9UIGEgc2VudGluZWwgaW5kZXggLS0gc2V0dGluZyB0aGUgc2xpY2Ugc3RhcnQgdG8gLTFcbiAgICAgICAgLy8gc3RpbGwgc2F0aXNmaWVkIGBpID49IHN0YXJ0ICYmIGkgPCBzdGFydCArIDRgIGZvciB2ZXJ0aWNlcyAwLCAxIGFuZCAyLCBzbyB0aHJlZSBjb3JuZXJzXG4gICAgICAgIC8vIG9mIHRoZSArWCBmYWNlIGtlcHQgc2FtcGxpbmcgdGhlIHdvcmRtYXJrIGJhbmQgYW5kIHNtZWFyZWQgYSBzdHJldGNoZWQgZ2hvc3Qgb2YgdGhlIG1hcmtcbiAgICAgICAgLy8gYWxvbmcgZXZlcnkgcmV0dXJuLlxuICAgICAgICBjb25zdCBwbGFpbiA9IGJkLnBsYWluID09PSB0cnVlO1xuICAgICAgICBjb25zdCBzdGFydEF0ID0gRkFDRV9TTElDRVtiZC5mYWNlID8/ICcrWiddO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHtcbiAgICAgICAgICBpZiAoIXBsYWluICYmIGkgPj0gc3RhcnRBdCAmJiBpIDwgc3RhcnRBdCArIDQpIHV2LnNldFhZKGksIHV2LmdldFgoaSksIDAuMTI1ICsgdXYuZ2V0WShpKSAqIDAuODc1KTtcbiAgICAgICAgICBlbHNlIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAwLjAzLCB1di5nZXRZKGkpICogMC4wMyk7XG4gICAgICAgIH1cbiAgICAgICAgdXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgICBiLnRyYW5zbGF0ZShiZC5hdFswXSwgYmQuYXRbMV0sIGJkLmF0WzJdKTtcbiAgICAgICAgcGFydHMucHVzaChiKTtcbiAgICAgIH1cbiAgICAgIGcgPSBwYXJ0cy5sZW5ndGggPT09IDEgPyBwYXJ0c1swXSA6IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgfVxuICAgIGFkZCgnZmFzY2lhLXBhbmVsJywgJ0JyYW5kIGZhc2NpYSBwYW5lbCcsIGcsICdmYXNjaWEnKTtcbiAgfVxuXG4gIC8qIE9uZSBnbGF6aW5nIHBhbmUsIG5vdCBvbmUgcGVyIGJheTogdGhlIG11bGxpb24gZ3JpZCBpbiBmcm9udCBkb2VzIHRoZSBkaXZpZGluZy4gT3ZlcmxhcHMgSU5UT1xuICAgKiB0aGUgZmFjYWRlIGF0IHRoZSBiYWNrIGFuZCBzaXRzIFJFQ0VTU0VEIGJlaGluZCB0aGUgZnJhbWluZyBhdCB0aGUgZnJvbnQuIE1vc3RseSBvcGFxdWUgYnlcbiAgICogZGVzaWduIC0tIHRoZXJlIGlzIG5vIGludGVyaW9yIGJlaGluZCBpdCwgc28gYSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlLiAqL1xuICAvLyBUaGUgcGFuZSBpcyBub3QgYWx3YXlzIGNlbnRyZWQ6IGEgYnJhbmNoIHBsYW4gY2FuIHB1dCBpdHMgZ2xhemluZyB0byBvbmUgc2lkZSBvZiB0aGUgZW50cmFuY2UuXG4gIC8vIEF1dGhvcmVkIGNlbnRyZWQgd2hpbGUgaXRzIGZyYW1pbmcgc2F0IG9mZiB0byB0aGUgbGVmdCwgdGhlIHR3byByZWFkIGFzIHVucmVsYXRlZCBwYXJ0cy5cbiAgYWRkKCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsXG4gICAgICBib3hBdChHLmdsYXppbmcuY3ggPz8gMCwgRy5nbGF6aW5nLmN5LCBHLmdsYXppbmcuY3ogPz8gMi41MSwgRy5nbGF6aW5nLncsIEcuZ2xhemluZy5oLCAwLjEwKSwgJ2dsYXNzJyk7XG5cbiAgLyogRnJhbWluZywgdHJhbnNvbSwga2ljayByYWlsLCBkb29yIGphbWJzIGFuZCBoZWFkZXIgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpc1xuICAgKiB0aGUgc2FtZSBtZXRhbDsgZm9sZGluZyB0aGVtIHRvZ2V0aGVyIGlzIHRoZSBkcmF3LWNhbGwgbGV2ZXIgY2hvc2VuIGluIHRoZSBibG9ja291dCwgbm90IGFuXG4gICAqIG9wdGltaXNhdGlvbiBkZWZlcnJlZCB0byB0aGUgZW5kIC0tIGEgcGFydCBzcGxpdCBmb3IgYXV0aG9yaW5nIGNvbnZlbmllbmNlIGNhbm5vdCBiZSBtZXJnZWRcbiAgICogYWZ0ZXJ3YXJkcyBvbmNlIGEgcGl2b3QgaGFuZ3Mgb2ZmIGl0LiBGcm9udCBmYWNlIHN0YW5kcyBwcm91ZCBvZiBnbGF6aW5nIGFuZCBtdWxsaW9ucy4gKi9cbiAgYWRkKCdzaG9wZnJvbnQtZnJhbWUnLCAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JywgYm94ZXMoRy5mcmFtZSksIEcuZnJhbWVNYXRlcmlhbCk7XG5cbiAgLyogU2lkZSBmZWF0dXJlOiBzaHV0dGVyLCBzZXJ2aWNlIGRvb3Igb3IgbG91dnJlLCBwZXIgcGxhdGUuIFN0YW5kcyBwcm91ZCBvZiB0aGUgd2FsbCBmYWNlIGJ1dFxuICAgKiBkZWxpYmVyYXRlbHkgTk9UIG91dCB0byB0aGUgcGFyYXBldCBwbGFuZSBhdCArLTQuMDAgLS0gYSBmYWNlIGF0IGV4YWN0bHkgKy00LjAwIHdvdWxkIGJlXG4gICAqIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCB0aGUgcGFyYXBldCBvdXRlciBmYWNlLCB3aGljaCB0aGUgYm91bmRpbmctYm94IGNvcGxhbmFyaXR5IGNoZWNrXG4gICAqIGZsYWdzIGV2ZW4gdGhvdWdoIHRoZSB0d28gbmV2ZXIgb3ZlcmxhcCBpbiBZLiAqL1xuICBpZiAoRy5zaWRlRmVhdHVyZSkgYWRkKCdzaWRlLWZlYXR1cmUnLCBHLnNpZGVGZWF0dXJlLm5hbWUsIGJveGVzKEcuc2lkZUZlYXR1cmUuYm94ZXMpLCBHLnNpZGVGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBGcm9udCBmZWF0dXJlOiBjbGFkZGluZyBiYW5kLCBBVE0gYmFuaywgdXBwZXItc3RvcmV5IGJhbmQgb3IgZm9yZWNvdXJ0LCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmZyb250RmVhdHVyZSkgYWRkKCdmcm9udC1mZWF0dXJlJywgRy5mcm9udEZlYXR1cmUubmFtZSwgYm94ZXMoRy5mcm9udEZlYXR1cmUuYm94ZXMpLCBHLmZyb250RmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogQSB0aGlyZCBtZXJnZWQgc2xvdCwgZm9yIHdoYXRldmVyIHRoZSBwbGF0ZSBoYXMgdGhhdCB0aGUgdHdvIGFib3ZlIGRvIG5vdCBjb3ZlciAtLSBhIHBhcmFwZXRcbiAgICogY29waW5nLCBhIGtlcmIsIGEgZm9yZWNvdXJ0IGNvbHVtbiBiYXNlLiBTYW1lIHJ1bGUgYXMgdGhlIG90aGVyczogZXZlcnl0aGluZyBpbiBpdCBzaGFyZXMgb25lXG4gICAqIG1hdGVyaWFsIGFuZCBpcyBzdWJtaXR0ZWQgb25jZS4gKi9cbiAgaWYgKEcuZXh0cmFGZWF0dXJlKSBhZGQoJ2V4dHJhLWZlYXR1cmUnLCBHLmV4dHJhRmVhdHVyZS5uYW1lLCBib3hlcyhHLmV4dHJhRmVhdHVyZS5ib3hlcyksIEcuZXh0cmFGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBNdWxsaW9uczogdGhlIGZpbmUgdmVydGljYWwgZ3JpZCBpcyB0aGUgbW9zdCByZWNvZ25pc2FibGUgdGhpbmcgYWJvdXQgYSBzaG9wZnJvbnQuIEluc3RhbmNlc1xuICAgKiBvbiBvbmUgZ2VvbWV0cnkgY29zdCBvbmUgZHJhdyBjYWxsOyBhcyBjb21wb25lbnRzIHRoZXkgd291bGQgaGF2ZSBjb3N0IG9uZSBlYWNoIGFuZCBibG93biB0aGVcbiAgICogY2VpbGluZyBvbiB0aGVpciBvd24uIFRoZXkgc2l0IElOU0lERSB0aGUgZnJhbWUgZGVwdGggYmFuZCBhdCBib3RoIGVuZHMgc28gdGhleSBhcmUgbm90XG4gICAqIGNvcGxhbmFyIHdpdGggaXQsIHdoaWxlIHN0aWxsIHN0YW5kaW5nIHByb3VkIG9mIHRoZSBnbGF6aW5nIHNvIHRoZSBnbGFzcyByZWFkcyBhcyByZWNlc3NlZC4gKi9cbiAge1xuICAgIGNvbnN0IG0gPSBHLm11bGxpb25zO1xuICAgIGNvbnN0IG1hdHMgPSAobS54IGFzIG51bWJlcltdKS5tYXAoKHgpID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgbS5jeSwgbS5jeiA/PyAyLjU4KSk7XG4gICAgYWRkSW5zdCgnc2hvcGZyb250LW11bGxpb25zJywgJ1Nob3Bmcm9udCBtdWxsaW9ucycsIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShtLncsIG0uaCwgMC4wOCksIEcuZnJhbWVNYXRlcmlhbCwgbWF0cyk7XG4gIH1cblxuICAvKiBSb29mdG9wIGNvbmRlbnNlcnM6IGNhc2luZywgZmFuIGNvd2wgYW5kIGZvdXIgZmVldCBNRVJHRUQgaW50byBhIHNpbmdsZSBpbnN0YW5jZWQgZ2VvbWV0cnkuXG4gICAqIEZlZXQgc3RhcnQgYmVsb3cgdGhlIGRlY2sgdG9wIHNvIHRoZSB0d28gb3ZlcmxhcCByYXRoZXIgdGhhbiBzaGFyaW5nIGEgcGxhbmUuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtcbiAgICAgIGJveEF0KDAsIDAuNDYsIDAsIDAuOTUsIDAuNzIsIDAuODUpLFxuICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zMCwgMC4xMCwgMTYpLFxuICAgIF07XG4gICAgZm9yIChjb25zdCBmeCBvZiBbLTAuNCwgMC40XSkgZm9yIChjb25zdCBmeiBvZiBbLTAuMzUsIDAuMzVdKSBwYXJ0cy5wdXNoKGJveEF0KGZ4LCAwLjA1LCBmeiwgMC4wOCwgMC4xMCwgMC4wOCkpO1xuICAgIGNvbnN0IHVuaXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIGNvbnN0IG1hdHMgPSAoRy5jb25kZW5zZXJzIGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHosIHlhd10pID0+XG4gICAgICBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIDMuNjAsIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHlhdyksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpLFxuICAgICAgKSk7XG4gICAgLy8gVGhlIHBsYW50IG1hdGVyaWFsIGlzIENPTkZJR1VSQUJMRSwgbm90IGhhcmQtY29kZWQuIFJlZmVyZW5jaW5nIGEgJ2dhbHYnIGlkIHRoYXQgYSBjb25maWdcbiAgICAvLyBkb2VzIG5vdCBkZWZpbmUgc2lsZW50bHkgaGFuZHMgSW5zdGFuY2VkTWVzaCBhbiB1bmRlZmluZWQgbWF0ZXJpYWwsIHRocmVlLmpzIHN1YnN0aXR1dGVzIGFcbiAgICAvLyBkZWZhdWx0LCBhbmQgdGhlIHByb3Agc2hpcHMgb25lIG1hdGVyaWFsIG92ZXIgaXRzIGNlaWxpbmcgd2l0aCBub3RoaW5nIGluIHRoZSBjb25maWcgdG9cbiAgICAvLyBleHBsYWluIHRoZSBleHRyYS5cbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgRy5wbGFudE1hdGVyaWFsID8/ICdnYWx2JywgbWF0cyk7XG4gIH1cblxuICAvKiBPcHRpb25hbCBpbnN0YW5jZWQgZXh0cmE6IGNhbm9weSBwbGF0ZXMsIHBpbGFzdGVycyBvciBmb3JlY291cnQgY29sdW1ucywgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5leHRyYVN5c3RlbSkge1xuICAgIGNvbnN0IGUgPSBHLmV4dHJhU3lzdGVtO1xuICAgIGxldCB1bml0OiBUSFJFRS5CdWZmZXJHZW9tZXRyeTtcbiAgICBpZiAoZS5raW5kID09PSAncGxhdGUnKSB7XG4gICAgICB1bml0ID0gbWVyZ2VHZW9zKFtib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKSwgY3lsQXQoMCwgLWUuaCAvIDIgLSAwLjAxNSwgMCwgMC4wODUsIDAuMDMsIDEyKV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCk7XG4gICAgfVxuICAgIGNvbnN0IG1hdHMgPSAoZS5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB5LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCB5LCB6KSk7XG4gICAgYWRkSW5zdChlLmlkLCBlLm5hbWUsIHVuaXQsIGUubWF0ZXJpYWwsIG1hdHMsIGUudG9uZXMgPyBtYXRzLm1hcCgoXywgaSkgPT4gZS50b25lc1tpICUgZS50b25lcy5sZW5ndGhdKSA6IHVuZGVmaW5lZCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBicmFuZCBmYXNjaWEgY2FudmFzICovXG5cbi8qKlxuICogVGhlIGZhc2NpYSBmYWNlLCBCQUtFRDogYSAyMDQ4IHggNTEyIFdlYlAgKH4xMCBLQikgY29tcG9zZWQgb25jZSBpbiBQaWxsb3cgZnJvbVxuICogc2NyYXRjaC9wdHQtc3RhdGlvbi1idWlsZGluZy9zaWduL2NvbXBvc2UucHkgYW5kIGVtYmVkZGVkIGhlcmUgYXMgYSBkYXRhIFVSSS4gVGhlIHRvcCA0NDggcm93c1xuICogYXJlIHRoZSA4LjAwIHggMC42OCBtIGJhbmQgdGhlICtaIHJ1biBzYW1wbGVzICh2IDAuMTI1Li4xKTsgdGhlIGJvdHRvbSA2NCByb3dzIGFyZSBwbGFpbiBuYXZ5LFxuICogd2hpY2ggaXMgdGhlIGNvcm5lciBldmVyeSBvdGhlciBmYWNlIHNhbXBsZXMuIEVtYmxlbTogYSBmYWwtYWkvZmx1eC9kZXYgZHJvcGxldC1mbGFtZSAoc2VlZCAyMSxcbiAqIH4kMC4wMykgdGhyZXNob2xkZWQgdG8gYSB3aGl0ZSBtYXNrIC0tIGEgc3R5bGlzZWQgYXBwcm94aW1hdGlvbiBvZiB0aGUgdHJhZGVtYXJrLCByZWNvcmRlZCBhc1xuICogc3VjaC4gV29yZG1hcms6ICdwdHQnIGluIE5pbWJ1cyBTYW5zIEJvbGQgSXRhbGljLiBCYWtlZCByYXRoZXIgdGhhbiBkcmF3biBhdCBydW50aW1lIGJlY2F1c2VcbiAqIGZpbGxUZXh0IGRlcGVuZHMgb24gd2hhdGV2ZXIgZm9udHMgdGhlIGhvc3QgaGFzOiB0aGUgZmlyc3Qgc2hpcCdzIGZsYW1lIGdseXBoIGZlbGwgYmFjayB0byBhXG4gKiBzdHJheSBkb3QgYW5kIGl0cyB3b3JkbWFyayBjaGFuZ2VkIHNoYXBlIHBlciBtYWNoaW5lLiBkcmF3RmFsbGJhY2tTaWduKCkgKHN0cm9rZWQgdmVjdG9yIHBhdGhzKVxuICogcmVtYWlucyBhcyB0aGUgZGVjb2RlLWZhaWx1cmUgZmFsbGJhY2sgb25seS5cbiAqL1xuY29uc3QgU0lHTl9JTUFHRV9EQVRBX1VSTCA9XG4gICdkYXRhOmltYWdlL3dlYnA7YmFzZTY0LFVrbEdSdFltQUFCWFJVSlFWbEE0SU1vbUFBQlFXQUdkQVNvQUNBQUNQajBlaWtVaUlZaUVaQkFCNGxwYnZ3dEQrbWZIZy8yQVY4VTl2Mkd0Sy9ONXo1Ly9qRlU4OWkyYy8wOGYyejFCZjhENmVmUi8vMHZRUDVyZW5OLzFEMVM3S0g4US8zUCt3ZUl6OHEvbS85cy9aVCtyZTgvNGQ3SWZydnkydk0vQW4rSGZXWDduL2IvM0YvdGY3b2ZIMzZuZU9mckQvVDczQXZ4YitMZjd6K2gvMGYvZS9sYjh5anpkd0Yzci82Zmd5ZnVQb2YrZS8zei9NZmJkOWdIOGkvbUgrSiszYjVrL3pmZ04vYmY4MSt5UHdBZnlUK2xmOEwrOC81cjl3dnByL2VmK1ovai84UjZWdnlyL0JmOTMvTi82TDVFZjVoL1ZmKzUvZ3Y4cjcwSC8vOTEvN1EreDMrcGYvL0JVK21tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VsQ0EveVVVd3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk44d3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk44d3ErODFROU5OOHdVRjZ2elB2ZTZIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwanF2VjBrK1lBMGExaytSZDVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoU0dzY0xzL0dtbE95dW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK0JKazI3a3BkZFVNS3JPWnlTaW1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtV05OVEJrSG5PbWJueE9GZDh3cSs4MVE5Tk44d3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk44d3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk4wQ1BZMENVUXZvR1h5NkE1R2VEMFBUVGZNS3Z2TlVQVFRmTUt2dk5VUFRUZk1LdnZOVVBUVGZNS3Z2TlVQVFRmTUt2dk5VUFRUZk1LdnZOVVBUVGZNS3ZnZ2tUM1BrSWFFUmoxclVrd2kzVXFyT1p5U2ltRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlh3S0t1ckJkY1R2SEdXeGd6NWlnVHdlaDZhYjVoVm9kbnpWUlpGQm55YmR1REpvbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUc1ZzRvT2FNOURuSWtaU0Q5cXliY1Y5N3B2bUZYM21xRzNCM0ErSlNpK2ZoM1B0clVsUXMwRGorVEVqM1dDb3FzNW5KS0tZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZVpZVmRhNmp4U255ajIwc2dwOHFvaUcxbFJTaWxuU25TK3lZaFJLTVJqOWJ1S2N4WlJ5a1NLOUhRNDZWazhMaytHS1FkRW9oN1laeUx2TlVQVFRmTUt2dk5VUFRUZk1LdnZOVVBUVGZNS3Z2TlVQVFRmTUt2dk5VUFRUZk1LdmdUT240QmFzOEdZV2dxcUVaeURBSUdMTGZzQlMyNU9rb05RNlNWU2N1VndYQ3BMZHRrOEdyc2FRNW9OdWFGcU5nbThCdFpwL00rdUR4WGdLWEkzZnNMQ0k2ekpNQW05U0NnZVlXeDhJUFFYdzlOTjh3cSs4MVE5Tk44d3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk44d3ErODFROUtLRmFZVUtpU3paT0w2L3dCWkp6eE15NEFmTkIzWW0xNDhHZHBrT1p2MkY3RExIcTl2eitJUGYvNjBYdU85aG1XYWx1RGVRdXBGWXNqendNRG9pS1EvaEtoUlJoY21kUndVUG9Gc0lyYmpzMmZJdTgxUTlOTjh3cSs4MVE5Tk44d3ErODFROU5OOHdxKzgxUTlOTjh3cSs4MVE5Tk44c2lvVUNPY0RQd3dGU1dUNC9kSks2aGp1NEdZV2I0QWNRRlpHU1Y4Rjh2ZkQwWHZtbHQxY0dvdSs1TWxYYStKRXZURkh6NEt6SitkdjdRc0lFb1pHd0R1UGFhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNlVOcUhLVTY3RG9RQnlEamF1UGNPVDVMOVhMdW85YkZKcXo2VVdCMUlpcVpZVWh4TlVqMFVmblhsc0dWSGdNU2Fsd0xGS3BiUnpjTTYzRWxRQ29xczVuSktLWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVNdWg5eHF0aEcvNllIWVF5ME9FQVVSSVRGY2dGdW1JdGVrSVNuUldqdWp0TTdjd05sTzZPWVNCS2c4MXQ3MWhCWUpSMVFIczBhK04rbW0wcnVOOWhGM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlh3U1J4bWt1bXlBN1U1cUtDZzBsellzMVdWVFpEaVdlVmR0TDd6ZlNhQ2haeWpibmlNanR0QklBdFYxREk1S3lBWEhNc29zcERuVFRmTUt2dk5VUFRUZk1LdnZOVVBUVGZNS3Z2TlVQVFRmTUt2dk5VUFRUZk1LdnZOVVBUVEc1T0RoWHAzTWc5RWJuTWZnaXVtRU5VMnpObmlmUWgwTnA5V1RBdy9Kc3BzcTd3MitseTN4ZHpnQ1FRQzB3bU1LUSsyOE1rb1MvT0haT3BOVmlWYm8zVnl0cEQwbEZNS3Z2TlVQVFRmTUt2dk5VUFRUZk1LdnZOVVBUVGZNS3Z2TlVQVFRmTUt2dk5VUFRUZEd4bjhLTXZCR1BIVll0Sm5BTXVCdWswNXpKRzhuSXFxWjJYU3grazF2REJnZ2xGZ2llemJXY3prYmlaQlA2VE5DSHhiamUweU03RUNuTzVYcUZtSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIbnpmZVN3bU5yaEE0dFJLbWZHeW5SSlM1ZDBZZGYrVXhCYllkeGxaNlVnczBadFNsMWgvVUdSdHF3ZHVDcG82WGhVNjMyOTJUSWJVQVZKMGdxMEVjVmR3ME8vMHFhanBiK2gzaUNLSXI2dUl1Q0dZcmUwMDN6Q3I3elZEMDAzekNyN3pWRDAwM3pDcjd6VkQwMDN6Q3I3elZEMDAzekNyN3pWRDAweHJWcVVSVDllQnhVS2c3aWU2UGZIb05JMzR5U1VaMi9MRGpiSTZ6M2xab01zMGRPWkZyUGxCMnllSDRJb3ZaSEhlVDVGM21xSHBwdm1GWDNtcUhwcHZtRlgzbXFIcHB2bUZYM21xSHBwdm1GWDNtcUhwcHZtRkk5SFh3MmxXd1R5YkFwVTNmanR4eFpiSXRVWVNvZzdkczFoa0JwY3lrT2pHV3FKRElDNDNlcTZtbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rQkRNbFRiT29oL1ZCT2xtOUpoQWxocDY1WlIzNWo5YVkzTitha29iN0RhVnJ0eDlxS1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmVhb2VtbStZVmZlYW9lbW0rWVZmZWFvZW1tK1lWZmNBUzRLZU53YVFuNzdCOGdmK0hOZm83SGxrem1ja29waFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWg2YWI1aFY5NXFoNmFiNWhWOTVxaDZhYjVoVjk1cWZnQUEvdjAzMS9TK0R0YjkxU0IzQUFBQUFBQUFBQUFBQUFBQUJpME4xY0ZlcDZoWWpZcjczSkw4ZEkyaUdhd2dBQUFBQk90QjIzazdIbHA5YlIrZllrbU9RbW5KbVU0Z3lBQWpsRnBDeEprbkJ0eVpORjA5Q0NjMGR2VlpTbmdWeElaWU8vZk5leDV3d0NKSmw4T2hVR2JZVlp4ZDVacWpHWnNZQUFBQUFDQkZVL3BjaDVML0lwM1JKckZDRHZnTm12SE9DeDVOaWtHcVkxL2liRjFzY0pKVFlLZjNqMzQrRUVCZVlaSE5VTWVLRGFRZmZmN3A0RER6NHFmYzdlak1OUFk4VjZTV0s4ZG5XY21YaUplWUNvang2Nm8wQUFBQUFGMFc5dStWL0JZRTdESVFNNUVXSmFkVkFyWjl4NkgzY240RWhpbUpXRC9saGxGcFhrVkJ5ekRkSjlObGlWbkQzaDNvb05oZUo0RS9WTFFkcXRmUkJMbkhzQ0RSVitrSDRKM2h0MTdWVWJmTjRaRnd5TE5QUUFBQUFBQWE0YUlJQUFUaUZqSVlvNm5FTjNKTkl0eG03dE5FWUo0b09OT0tiRkZRMTJxeUtnT0FZbzNMcUFWREFuVi9WUGllMVJuL1FibG12OStqNFpWR3NpVUdXcGhJMkhUamNZaTRmZW83ekt6aCtKZjhBMzdaSngvaGVxWUFBQUFBQXd0RXB4UHVxNVJ6VUpoVXl5V1RhZ2dpbVNnNGFUNzFtY1JWQzJPY1Z5eXdPNEtFcUVwQTVMSWdVZHVQSkxvQVQ0MzRaMThlZlllREIyc212R1owRFRXeHFYUitkOEtDMFp0c3ZpMHh6eDRKSHpyaElJRGZNeExBeUFBQUFBTU5Bdkk0dUVyMmlmaDB3UGN1RUpTTVZ6QVRLaUh6eXVwbFdtaUtHeTU5cyt6dkQzOGZLWkV5SGFIRzE0T2QyWVAwRHdPOFJ0NlhOVEtHVjliSkNHOSs4VkhpMGluM1dycUZsNHBCVmZ2MjQ0QitnVmd3VThlT0xnQUFBQUFqL0dseVNHcHgrQzNHVlp1YjJoTFlDSUpwdHcvUTBVbE5yL1JHR0dvYTErYzFZQ08rM1RXbkswdk85MDZaUmhGVzNpVE14UUJRYUNSVmN2ZEhWV3E1QXhDYXVhKzRMMDB1TWhNTzZNTndzdVJneVRUdGFLdXFvYWJHUmVXczJzL0htWWxaaUFBQUFBRnBOU1VNNy9FZFpHWm16MXZVaDJucTFLWG85cUROL3pMcENTMFNzZ2Q4Z1kzVlBxSWZrbnNwMGpveklKTE9ZRFprTHpWY0RjZE9VUmVQaUlwdWc2aTNjU0NiRytnK2tJNWh4YWMvNWh1dzYwWXhTMm5XR1ArU3dTc08zdzFWRnIwWkNoa1Z4NVdBLyt6Z0dHYUtycGs0UlcvdjlEcmh2cU5rTjJUakVFdUowOTArWWo0WFBoUHUxZWw0WGgyOFhjeDBXM3Y4RWVBT2RQYkc2NEdKQ09vMmY2ZHFUb3NnQUFBSlFkWkxUVVhoeWpTV2VybE04U3RJUGM0T2oyLytYQng2VjhzYXViWjdBTEFjUFAweWJweEVKS0tjNHV6L3hyL25leHB0YWVYeXB3QUZ3TmcvdUhjSzNjT2g0SzZqZUVBYWwrTG1URTFQNXRKYUJSUkliSUYzNkxOdmZkSFQ0VXZNdHpsNXRJaFNOSjhSN3k5M0tZc2xseFpkQVBCM1pQL0FSRGVoVndFeEwyVXJYckJzSGxkbWR2Um1ReGpkY0NJRnowbGtKN01XbytETnBmL0NzejdJakxDci90MmhNb2lEWnU4K2w4S3pyWDd2MGk4bDYrZ0RaMjJRQXU5dk1JMXMwSW5YVWMvYzMvOHozMCtSZTh3OTNTeHF1LzBSTVJBYlNmZG44UEs4SHdTWlp6amx6VmxWUTdXcGJ0ZnlqeTdYR241VUU0QUFBQ1pTQW04OFlyb09CdjlQVURYQ09HYUhuK1pqL2J0TGpDczJVS2xXRTlzMUtycXJoWCtMNW56M3NWNCtNZGFkQXAwTUNQakdGblhWczJWRGNsK1NiajN6YStDNWpQeURRYk9jRTV1RGZhMzdrcFlBZjdGMVdobVhVWEEzT1RXMWFmdVJOd2pzTUEyRytoS1dZOWJtTFRHOE83SVljUTNoQXc5Rm1EakNxb3pNRzJZS1ZYM2NiU0RhQ3lUL3dvQnpQMkhrYzBrazk0ZlRPUlZQWmRTZ29xMUU5R044RDZlQm8xaXJQSWFSK3FaKzM2OHBwdUJ3TEthYXJCMURjZjdZVy9DcWxCVko0TVIyZGE5cDV5U0hlSzkyKy83UGo1SDFBMzM1OVpicjJyQm54cmhlOHdaUTdxQU96eG14SGVnWjEzY0ZOSG1OR2hNdWMrQ0RhRlc4Z25BVDE5dDUzUmlUcEExNVQ5ZlIyVVZDdEl0Q0VVRHpLbUhGRGt5SU5zOUtML0QyOVV4TVkvL2tGbkFiZFFQSWRSaHhveXoreDNrV3Z3Tis5YnM0ZnVjM0VpVjJJdEFyK3BlZW9sOXRibWtKSFBsMUhUdDR4eHNmbW1XeFlYYU1WMHU2ZG00NkprY09CZzlCd0FBQUZQUVB0c1QxM0ZHWVRTaldRQzMvUFJSNzR5c2pFT0xralVTNVAxclF4UTh4WThJNUovZGkzZStSajJyTHdHUnVaNjJZTVAzUFZOQjg4a0dxUVNKbk1MQlR0WTBCdFdtV0RMZERZMWd1eEpFWUczdndraFluUUw1N1l6UUd4TXpzcHFhYmxHS2R0bm5IQ1dWUmJpZkJnZzZ3cTBTcTdoWGZiaGFoUkt5SGViYmg1SzlETk9NUjZ3TlJDRjNYQ0VsZ3d5VS9wWmJrYUNkY1IvQm9jd054dTd5T3BkRG9hV2l0alY1N2drcjVER0Y3ZEkrZWl3ZEY2ZFJSKzNCR1Y3TzhlRTdlUDJVVWRoYVViMytoRXhzZUs1eEZxd0VVMGZtOVcxeGM5aWVjZ3BRckhVKzRQSEg1OEFpU3Z2M0RXOE5Ha3c1VHZOc3orQm56ZlExa3NmTm5DNUtBb1ljUGhwZVhVYzR5VnRUbWRVREM5blc1SXV4ZERKdllXeWpZMmZtQy81QU41VzJlUnBLd3JXWXhmNkI4Ym51UytuUXJTazByWDFGK1FiSmZYT3BXL29ZcXZlSHIwcEhyVkdiZjFPdXpDVUx2VW5WK2UxcGZLekI1ZkUzaFZmOEsxQ0tPOHUrU1JCOXdzajNFWmZDZHIvVDdocVFYU3JiS2cxekxGM1ppVlgySlhjWEx2dDZhS0JsTFZiVzl6OW1qTjlGL25vd0NyaEp4NnVlT2hJazB4eE5Xa0xnZi8yMiszcGpJdzIxN3ROZDdHd25CT0ZvU0Z2Y3BtQUhwa3lYYjd6M1NHd2F6dUNBWlJiTnVwU3ZsV3FRT3RRT1ltaDY2S0RUSDA4U2IvOVgvNFBhWDlqUG9PeGM2SVpaRFZjaytUVnoyOGxkS2xkR3dCaFlSckc3NjYrZTcrYmE3dFZSRE1pa2h2M2lkcnZVWGJFVndUTTJ4ajE2MWVaRUVlaDhFK1pWWURnV2pOdTFtSis3bkcwRzJqNnJ3Um5LTlkvMTBrcEkvR05oKzRRV2Q3Q1R6SlNNMHlQYWwvVXFlUjN1Q2c3VGJWNFU2NFlDb3JMNFpPQ2k4QVpqd3BieXNVMVpaYm8ydC9DS2hyMmNRUkxWelBqYjV2b0FBQUFvdTZGRTJnRVZoSjNHTEhMb0dwNWpaMlhYQVlRd3FmcFhUMWxlU2k3TURiWEpndTBqbG9rWGtKeURScmh3RjZpZGppdlQ1ZkVJZWloakYzZnd0Sk9OTS9hTlk2VWhlM0lFazB2TzJWem9wYlUwSkVpRkI4SThHWTNySU13ZXNoUFdjMExGbGRtTHF6US9hemJFem8yUW9wak1SZ2RDaVltcHExMGNhRm1ZakJnWDhtMVFhY3JSWU80NlhMOUxLYkR6ZWkydnpRTEJJamZUMUFobE1UUzhmazhpVXRvVS9Td1g4c3AzR1B4S0NDWXlDdWhpWnZMQ3E2R2xNblU4eWdGSzNMbk1hR3RJOHlOMWpRUDlsdmN0bXFuWFpmMHU5S0NBMUEyT2ZFNXRmVEw0OHp4RldCWi8xS3E3MFJFNjhGWWk1WGFadWp3ay83RUhZOE1VTDNIUEZIdU9sNjZ2SmZpOEZvaWxUNEc2NHpmK0xOQS9zNG41MHpSUXBvVzJBYnp5K3VybU9FektjYkxRaUo4aWVDdnNzRGpVV2VFZURFOTNIdkJOSktWbTloYVUxZ1djRnRzb01aWWdGWUpZemdRSnVlZVNiTzJPems1eVlnZlp1ZzJ1bktRQVQ4d0NMbmVscEJZa1dMYmJtVjd4UWxkZGp3LzluaVlYRFhja2FSd1lkWCtiTnlhTVdBUnBsVzR6MUYxUGpjdTNqcVhMY2ZGNTd5Z0VDME9jTmE5d0J6MEpCMUc5eUY2TnBDZEp5MmE0YTk4U21ZcHlsUHhuRzJvblZ1ZnhvUWZMSkpiM0lXNHhPaGpLcFhhV3lHSGtpdWhOeXZYWWVMZjQ3MHhUU2l2bnlzTHpMLy91MldPajZwenZ3UVJVbDBDbmN1aEcydFhVUlkxQ3daK0tEdGRZWTJrRnVRZHo4MmM3dHpJa2ozNzJOMzJzYi9VR0hpYURITjlmVjVpSTNaUlRVdGtITnNUSVB1eFBzalF0bk8xNGZ0WHBHV1dKWkF0MG5ZQzlnZ3FkWTJuS1VVQ21nQUFBUEJqblhuNThTeE8vQ1lyTmJSVU5oSXNmbnBEUmNhK0xuWmNFOExBcjZmOCtmWEh4TTBLb3BpbkNidVBQTWpRZmRmdHNaWU5aWkY2dmpHNkFFT1QxRGNTUmJaZWI2bGVjUWw1Wnl2NGo5ZldpbllFYmpSTmpuYlZ2ZDloNjdnUVp1U1Y4Mm5PbW5sT0dkV3JYVnFOWkZyTktWWkdQTGNsYVlKUDVVYjIyYnhVMUtycVBkYlBsVDJhVnFZb2YxRGJsNU5XSEp4WkdpSUdzNk42bVBuVzQwM3U5NnpXcVdaRDdiVjRoME96S1ladmNFbW5SY0wwbkNRL3EwME9YOHdmNHY5ZUszVkpNMmpBMzNGdFlXVktuZ1NwZjUzaUlGczN1RFJlYzdjWWhnMWgxREtsWTRyTW4zV1ZVdTNhKzNRWWVMbERKUDYrR1phZFgwYTMrOWJlUmFZVmRzYnhEUUJPZjNrTkRudUxYYW0xdFAxcUtBbFJaZkFnbWtPRGg3eFZSK0IyTTJhMWhBY2tNVDRlWS9HRkJ2anJKbzAxeDdpTHpoVVM2eUhRVTNncEpTR3ZTTm9zMzJqYWlZY3dhanM4TnJlNC9qYTBYeXBDMkZRaXNpR3RFZ0lOSDFzNmN3Qm0wQVRjMGlBbUZWdHhFQTRadG5sbTNBL2NXL203RmFFeWE0WGM3TlVObWdXc3hkbkd5OWl6Tyt1Qk1zcmdXMGJYQnlPdXRuSERRcE9kVTBvVi9uS0JxY0kwamhmNzdnclhtSzF1OTdxRGttNjk0c1NZTC91OGpXclY0cmMxams0c3NaalViRFBzQmR2TlJoYTFyRFRlMVNKbTNsTVRnRXd6dXdrYk5DNS9iVmdVNElOWUtwOEF1b0FBQUFNbXNUSHdzRFI2R1M0Yzh4Wm16cGtzVk40Zm9xWVQ1eUEzWjdOUThTWU9JRzBMSXdNTkdERXNDbWJJN0YwTnVJUml2eTBmTTB1ZDJZN1lKWkpFU2hiR3o1cGZteXFJSkphTDdhejc4c01qSVNvNjR4dVNCNXR5Smg1dWVvNkdJVWRmcktJMFNkV3FlYWRSbEJEdzBGazJqdXNYbnJmSHZveXE1OVE3VXBkKzJPWGhyU25GbXp1R2RyRGZ0ckVRRXhtaVVOYmwzMWVvVDlXQ2d4YzI2N0MyUHkycnhEb21sc0R3ZnFDZnI2TWV3eE5XV3F4UnBuSlBRVjNLVWtweVUyTU4zc0tpMnhhTG5mN2FXYkRQMml3bXJ5N0UrcFhWdzhyVmU1K29LUTBqbUdPSjhBMTJXdFpFYlZOTEhFZFZ5ZHR4bFcvT29ucnNmUXgvejF6dHpTdU5UeVJCbkJ5K0s4dmJxM3A1ZFJZUnkwbENGUVBwVWZVSVlPUUM3U1lOcWM0RFZmOVU3NnRLdml0ME5tOE5oOUZDYldLUmdkL3c5OHArU3VIQnlidkdkeEkvZGNwdDhRbmpFcFp4dzJxY2h2ZTBsZ1FNSnZ0YXpGS1grSG8xZ0ppUWd0WktyNlRYeVJKOUMyUDU1cjBLenRLSHlrRDM2blZxZ1V2c2JjVDJjMktGMHNqWElxY3pWUmZpb3l6dWRCYi9jWkkvSW9TaU1uM1dWZWtzNUhBK3FLYUp2T0cyV0I3TWZackRXdURlUElZOFA2dGNtVU1sS0Fza3dBQUFJZ1hobENaNUJ4UHg4MHVBZWdqWFlLTTNmSjBWWEFGSkNZRUhCWjBCbzN6NUpHZU0yUlNwTGVORWdiY0dOZ0pWcTBCT09KWFlYb0IrVmRRYlZ3dTRVa2RLRWh3NElCSVJSQi92TXZydkF6KzNhNDlkRHIzc2hWVXVwM3hPeWw1eW04MUtUSDB1bklLU1JMeDA1eXlCaXR3SXcxTnRaaHk3dDdTK1FMWHJhdk56NTQyQTRzQ0tjZ0puTUl2SFVHelFjQkxSVVR2RTk1aXdHT1RQRDVaVkN6ZWEzSjRuMUZVcnRzajY0a2lDSzh5Nml0MDB0dk5FK1NUYjlKamtpTEZ6VytwWGVtVE5aTko1cUJzcWtIa0orTFQ3a1JuMURTOE5OMy9yL0VOcFBQRWJseG52eThEcFFsejJOYkpSV0FzY1gwSFJuRXBha0JLL2RDakFQR0pYT3Vxc3dsd3pmSXE0anJuNHFnK0FyZUJQVUZZMC9QOUtxUkl6bWgyUGtBMTJ4ZDJCUVpVTVk2cjFrNWhPdElxcFZRNGNtb3I4NTEzN3V2emsrUDdyWnMwNmdmRjQvNTZLalJLWXU4b2Q4c0VqaXRnd0ZyTWRTZllwUmoyZ2lyeWF6eGNwd0VSUG1mMGk5aDVPN0xONmVDdEVjWGliNW0wUm8zcWpJbFcyMEpuVXJLcHUyWmN6QVBud3BMNXl1eDNHdHZJdituWDQ2bE1xZDZJNXBCU3MxYXNBQUFGUFJGRDlaQnFWc3FmclZ5R2VSNzBEak12cXhkUmQ5U1UxcmlnNmtESVVWMVNMN2xtQ0RoZ2JpWTB4ejRDdkxWcmtVaXdnQ0Q4TW1ES2RtU0VpZHBmM1oxSFZwYjFYRC9PbVR5ZStVS1dRWC9pdDJVZEdpS2p6N2VOUGlmWG5mQ0FQSWZVTFRhSjA4MnM3elFLTVNVVk4zeHVPNmhodG1iaU1xUXJYQ0Zsam5DWld4eHo4NitCVUJ4b1A2Wm95SXBtQXJXQ0lodVZTOWNEUXAyRVNWUGJCRFVydU1xQ3l1M0c1aEEyUDBNYVEzOGxLelNTa1NhQ3VpWXI2bmNKRnVxTHhXdm93dXJwelU5QzkwSnNCRmkxenJXK1JQdkMyclozWE5YMjBvb0lQajR4ckxBL1Z3SkhiZmtaNHkrOTMvb1YrQ2hKMnNCRm9rUCtFWjBzMUhYQnAwellxVU9MdlRYNzRQSGZyMUNtbUhESWdSVGtCNFFTKzJEVGtPYng1K2paUHU0SnA3OXF3N2xienpCMFZma20wbUJ0OUNtakw3cVdrM1VSRmxZSHJmNG10YVBTeEZMeHcxM1h0MnQ5S0x4c1ZWeHZkMjloSVM4Z05yYVRpWnBuQ2NaMEJEbDFkd1Z6ekwrYklUTFJMV2UwSHRXMnVvU1lNYU43ZGlVTW9GRnJVRnI2YWZSbzFxUHU3aDkwTERTRlpSOTVVbzdvR1NWNEFBQUZpNS9ndnIzbXJHajVrOVJLY2tkWjZYWjRhQWVzWnloU2FrSUNHZzNPVWhSN2pIeTNCUHB6c1BtanI1Z3NkWkRaTXgzV2oybjlpUnpGY1k3ZXFLVTZWa0ZUQlljMTlFZVNTOUc5MWJHNnJoWDhHVmhCTEhBUWJ3R0lVWlF2SnFSZDR5NFJDcDlDaHRUZnZMbnpiSDhncUhkUTVTZEplc1d6SVk2dk9SMVZNaGx0Mm9jcTR4ZSt0MDM2aFBEdURuT2Y1cU93WHRINlduNUppbnVLRnE2TmdPYW1yS0lwMGZ0RUczRGN6YnpRVDYvMCtSMmNLa0gxQ2lpNDFvalB5ZmM4V0o0SEpWNTJPblorS3Z2ckxCRnE4MkxBWnVEdmFBeCtFK3c4TGdiTzdlRS9wWUFlQ1QzMGNkdUI5R05BbVlUMm5kN21xV0ZpTi9hZWthZ3Rla040c1lrLzVaQTZ4SDF3bk5iVHlkVUIvaXgyYmx6NFlWM2czUDNSYlZtdkt1UWVMNVlndG8zQ0M5TWVWM0x5cUVVNDVXOUNxRlQrNDgvZHRrbFBTZ3FZb1AwWCtsUEthUEtwbTM5K0l4UGpaVFZaL1VyOFBOUGRNc1FCM0dVTlVSU2NGU3NQemZaNzA3KzdPbGZsQ1VEbVVwNlVWbzB5SENrcm5hVUJkL0NXMnJhNnd3a2JCWXZTcmdPL3ltWi9YM3dsbG1KeU8zZkk1eldlOExRcm9vN2tFNFp0cTA5N2RyOEo1clI4VDZsSmdLNEsrVG1qVlRvYlZ0UjVxRjhNY25OQklJUzZiT2drNDIxbGpWdzV2eldJVmdGRWg5NHo2ZEFBQUFJeVNzS3c5KzMxWEpVd1EvczgvejhuTzJsazh3QWZ2NHUxQlduUWppQ25JWlZTb3RoTGpobjRCUzBoVDBCUjFiZng0UUVtaFloM0ZqUzRvMnhhT1F2MU9iN2ZDS0VPck5hOS9xY2o4UFora2VPa0NZdExiWmJvSjFLY0x2eDRwektEWVBEdHVxK1V5WlFtczFFeXBIbDNkQXkzaGIveDVkeXdCOEo3UUtiVVB5eEgvSEYrVlQxandEcnAzR1FrTnMyYUtqZG5iRHM1Tkw3UkIwbW8zLzRMRjlrVm52MldKUHJvd1YyemYzbTQ4Q3VCSFJqQXRuZGdJLzRWN2VQT0JQcEg1aGh3elZNRGxZNUY0T2lOY1M5RFgxMWJOWGVHdmkwdnY1dW1iM2k3NENzQnN5MzJ5LzJpU1NmNVN5N08zRmttbU1ERW54KytYUk91OGMwZnZ3cS93eHQwM1pBYXhGYmtOeUFKMGswUlFObmxmK3lBbkk0bG0vSm5vNTVxL3hTdTk4dTNuTmw4N1BkRzQvYTJmNFBCQjQrbThvai82RXptSVRqVkdzcVJPc3NFQmZJU2hKMEV6ekxTQnFaZExLdDhEdi83SEg5WldBT3V6ZmNhbVE5bEQyd1BpMzNCZC9aUFVSN21JTjU0WmFLQmpxMkZoQno5U3RGRnJjLy9ZOWNpZFJyNXFZeHdiS2ZZWkFDc3lGUVZsNkRGemxGM2N4RjN6ZVhxUjdnc094bXU2MWFDUHl3NStHTVRHUUF4OG9KRDJaekREZEpURHl5UGNjamppaDZjWGg4R3ZhRlA4NlNsRG15dEdaMDQvM0x4NGZSOGY2Wmt4WEhDcUN3QUFBQVJlSUFvT1FTRDJYWnFwODZDSWEyMVFMK1RwQVp0ZHRGWnFodHFDQjYwWFhHSlFtVENCMG1CTnVyVWs2WFRZNnRoNUwvQXBOZVNmUlMwSWx2OCtGREU2OGxSdDRtbWpVNkFxSWk5NGViWG8vR3lRNmxuWHB4akRXZEQ1QzJRaTB3OWx4M21SMGJQRVpabkZhYzRQYVFabThFLzRpeHdDbWdKd0E5ZDhaQzZNWkVhQ2hLbmMvalVYTnF0a1N0R3pxUi9yNDk5WGNWV1J3UjlzWjZ1MmZ6aXJ1T1AxOExkM1BUUm9qUkJXSjdEYktwemFxRlpvUW5lNVpQdk9QQzZ1RjE1SWVoQkhPYXozaklxcjhEaDlydXlibjVOeldSOEVFdnkvZ3FXb2pIL3pSMmFYc2c3QXlqbFRUYXVkWFVYL3lUaGZEeGRHenIyNXVsV0hqY3FGTzlJNzcwWUlGZlhzUDNCTlA5bHFwQlhwbk5pOEpzRVZob1lJcWdTdEdYMGdzWldLcVVnUTNXSDkvRFVoNG1aTnhtcGduTzhQMy9OdmwvL084VjdVblQvLzRQQksxQWJGaVEvZWVoWEFQTVBzUjVoZU5Od0haSlFBbTZCY3RqQkg3aDdEbTYxZUk0MVhqYXF4MG9iTFVZcnFFVzdUWERtNytOd29weWJWdzhCNDltSVJES2FRTnNxSW11L3NHanRnaEZvOEJwKzlPUkdYVjIwZ0dEL0dVdzk3ZFlnWUtqblE0TERFYk8xRlJmaVpneTM5QW50VHJ4ZlBYMUM3RDcwZjVRMW1YY1NYZTlWRVMwUitvR1BWWlJUR3hQNm96Z2ZDdEJseThtaTJpLzE5V0dRV3NXWkNtazRzUmV1OHlmTllsMXRzSytpblVpMWtMV2VzVUoxZ1JHRlF0dm1nL09CM2ovaHdqcTk3bFk2aUc4QUhaOVQ5UFVHTmNweFA3d3kwMzVJaTNUZFBQSUNQa3dvUlpvaFNhNTRDNDl3NnorZVc2b08xL0V5UTIxY2tzT3hjM3locURuV1dCeTJ3cGtBcUxVRmlzcVRNRG5hWEljMThBNVd1aUVGckxSeFpNV2Y5MU9BRWhiQW1nSUVjVnZrdU04TlJrS254Yjhra1JFeTNMRGMyWmVNUTRVQUFBQU1TZEpXTWVJRHFIRFp0citmejc1TWxKa0hnbkV6cTNvTUNRNk0yRS90cXpyMVl3c25JSm5JeHFDWEdObGRHSGdpcldUNGZwTEErSHZPRDgyc1F6czVrcUlvbXlRL3k1U0EwZ1lEdzdHR3hGVEZjMG0vbkhOZEhIM3JtQlVhM1dydmhjZmR0OGYvaU54eWNTK1diU1NjU3JsS1ZVbCtBVTg3SFBtWVZpUkJDUnJLeVJTclpyMks0b2U2bE9FMC95R3M0ZDRhTGp4aS9icmNUUGZqeG9Ueno3dGVwUVcrVnlaWk1GRUdoSEdFZFJoZVl5ajFwaytMc2YrLzhlNTB0bzJaemU3WXFlY0NLa1g5bXg2dERDUnBDZXMzL0lCU1pldUxEdGNha3VRbyt2azR6MUNnK3BlcDJJb2hnenlVbWlLRTdYbjZ2a1E2UVFSOTUyTXJkVGQ0UkhyVDVZNEpySzROdHNXRXhxZEhoNllJOXppcmhJYnZpbDBrK2JsMVVRcExtYmFFVTVBMDQ3SU5raEJIYnpUMjJLMXc2UlZMNHRaT3pxQUFBQUFBQUR2QStheWMySUU5eVZGeFRnT3ZzRHhjcjNEbXNYb3JUSzFBQnc3TUxRRnpmNm5saVNHV0ZyOVVRbUxqV3E4YUwxZmZQWW1LUHV2NGN4VHhvR1dORmFDMzBQNnMyenFaTDNiYlFMTjdWWTZqeCtxV0wwaTBZNFBKR2ZraS8va1gvT3licDhkTjB1WCswUGV3UU92MFR5N1Z3TEU4WEdQcEdpb2I5RTgrTi9UOFU0VXhiZVRNR01tS1dySlRKbkswL3oxK3NIRTVJN2ppT0R0R2VXSzRSamxIa3hKRUdQUUhhUmlqeHRuM3RHRTR4VUptbWZudlg2MDlIbzFjOHJIemcxSWgydW9VWjBuc2tWOUI4UXBVU2ZTSXVhVGpaSTFaTzE0cHJUZkppNVFHOXgzSG9HaGkxcFE4dlZNMFhjaDJKZldSVXpHV0hMQUdsSnp3anJ2TS8yVzAwYU5Vd2tITkFRdzBWK1R3VTBhQ3lra3ZtdFcycU1HWWdtRkpmVllKSnplRm9aMmJTVHdhdkxFUys3N3BUYjQwVzl1N3k1NlJiOVdjUyt2RU5ueGZaaEdHcTc4QUFBQUFMa29aZWcvR3NZQkpIdzVUaFA2N2d3MlNOSGV4N3pQbm9LMUxsUzArK1ZnUlkzTXpEZ3dZYkpHMEI3eFBFR1JXNVRBRXh4TWMxQ2dkcU4yNWk3WVNQMFl3WnZEeTdxcHFoZTBaRERkNndMNE5oMnhxb0VhY1pYVzA5L1RFUHNWa1hEVUZMWWxINGtabnV4OUJudmhOeFVjNXRlY3VjT2Y5WmZCbC9CL3VCdER4Wm5EdzQxemo4TnhSalI5NHBLVFJaWGxwcW1hZi8vbzdDVHVHaXczWVVmdUZ4TC9OcHFXcmRyOEM0OHFuTStCcXJKSjVOSmRRQWhraGtUblR6bjdLNnRteW9idExjZGxiTmpZMmlFV0IyNG8rdW1UdThkUXN3K09BOCtKaXhYem5HbWRBTkZiV2ZsZ1BjNVlNdEhUVmhiYXBxMUJiQW5pWnVYQ3U3bGFOaXV4Y0JwbGtsRGQ5ZGZQZC9NRG1mZHdzbWVIUmdVOTN2TXRPS1BKbm1abUZEa0xBRDZ6ZWVCRm9uN0wzRnZMUk04ZEpxcnN2KzN3QUFBQUFZRmxDRmw3S1ZncUpzak83SmwyYnU1TVQxMnlGbk0vTUtPUStPRGNkK0VJYkxvQVN3dWZoRkxlcVpXVkp3dUoySWNiK2NvNEFYbW1EaUJMbGtNYlJjd3p3QmdRYTdIeFFoTVZMdFpoVVFYTUNYODhFRU5vT3Z2cVBwYzBzZFFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUE9JztcblxuLyoqIERlY29kZS1mYWlsdXJlIGZhbGxiYWNrOiB0aGUgbWFyayBhcyB2ZWN0b3IgcGF0aHMsIHNvIGl0IGlzIGF0IGxlYXN0IHRoZSBzYW1lIHNoYXBlIG9uIGV2ZXJ5XG4gKiAgaG9zdC4gQSB0ZWFyZHJvcCBmbGFtZSB3aXRoIGFuIGlubmVyIGRyb3AsIGFuZCAncHR0JyBzZXQgYXMgdGhyZWUgc3Ryb2tlZCBnbHlwaCBwYXRocy4gKi9cbmZ1bmN0aW9uIGRyYXdGYWxsYmFja1NpZ24oKTogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBXID0gMjA0OCwgSCA9IDUxMiwgQkFORCA9IDQ0ODtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IFc7IGNhbnZhcy5oZWlnaHQgPSBIO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBjdHguZmlsbFN0eWxlID0gQ09ORklHLmdyYXBoaWMuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjdHguZmlsbFN0eWxlID0gJyNGRkZGRkYnO1xuICAvLyBGbGFtZTogb3V0ZXIgdGVhcmRyb3AgbWludXMgaW5uZXIgZHJvcCAoZXZlbi1vZGQpLCBoZWlnaHQgODAgcGVyY2VudCBvZiB0aGUgYmFuZC5cbiAgY29uc3QgZmggPSBCQU5EICogMC44LCBmdyA9IGZoICogMC41NiwgZnggPSBXICogMC41MiwgZnkgPSAoQkFORCAtIGZoKSAvIDI7XG4gIGNvbnN0IGRyb3AgPSAoY3g6IG51bWJlciwgdG9wOiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKSA9PiB7XG4gICAgY3R4Lm1vdmVUbyhjeCwgdG9wKTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCArIHcgKiAwLjA1LCB0b3AgKyBoICogMC4zNSwgY3ggKyB3ICogMC41LCB0b3AgKyBoICogMC41LCBjeCArIHcgKiAwLjUsIHRvcCArIGggKiAwLjc1KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCArIHcgKiAwLjUsIHRvcCArIGggKiAxLjA4LCBjeCAtIHcgKiAwLjUsIHRvcCArIGggKiAxLjA4LCBjeCAtIHcgKiAwLjUsIHRvcCArIGggKiAwLjc1KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyhjeCAtIHcgKiAwLjUsIHRvcCArIGggKiAwLjUsIGN4IC0gdyAqIDAuMDUsIHRvcCArIGggKiAwLjM1LCBjeCwgdG9wKTtcbiAgfTtcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBkcm9wKGZ4ICsgZncgLyAyLCBmeSwgZncsIGZoICogMC45Mik7XG4gIGRyb3AoZnggKyBmdyAvIDIsIGZ5ICsgZmggKiAwLjM2LCBmdyAqIDAuNSwgZmggKiAwLjUpO1xuICBjdHguZmlsbCgnZXZlbm9kZCcpO1xuICAvLyBXb3JkbWFyazogc3Ryb2tlZCBib2xkLWl0YWxpYyBzdHJva2VzIGZvciBwLCB0LCB0IGF0IH42MiBwZXJjZW50IG9mIHRoZSBmbGFtZSBoZWlnaHQuXG4gIGNvbnN0IGxoID0gZmggKiAwLjYyLCB4MCA9IGZ4ICsgZncgKyBmaCAqIDAuMSwgYmFzZSA9IGZ5ICsgZmggKiAwLjgsIHN3ID0gbGggKiAwLjE5LCBzbCA9IDAuMTg7XG4gIGN0eC5saW5lV2lkdGggPSBzdzsgY3R4LmxpbmVDYXAgPSAnYnV0dCc7IGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7IGN0eC5zdHJva2VTdHlsZSA9ICcjRkZGRkZGJztcbiAgY3R4LnNhdmUoKTsgY3R4LnRyYW5zZm9ybSgxLCAwLCAtc2wsIDEsIHNsICogYmFzZSwgMCk7XG4gIGNvbnN0IHhoID0gbGggKiAwLjYyO1xuICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeDAgKyBzdyAvIDIsIGJhc2UgLSB4aCk7IGN0eC5saW5lVG8oeDAgKyBzdyAvIDIsIGJhc2UgKyBsaCAqIDAuMyk7IGN0eC5zdHJva2UoKTtcbiAgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4MCArIHN3IC8gMiArIHhoICogMC40MiwgYmFzZSAtIHhoIC8gMiwgeGggKiAwLjQyLCB4aCAvIDIgLSBzdyAvIDIsIDAsIC1NYXRoLlBJIC8gMiwgTWF0aC5QSSAvIDIpOyBjdHguc3Ryb2tlKCk7XG4gIGxldCB0eCA9IHgwICsgc3cgKyB4aCAqIDAuOTUgKyBzdyAqIDAuNjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8odHggKyBzdyAvIDIsIGJhc2UgLSBsaCAqIDAuODUpOyBjdHgubGluZVRvKHR4ICsgc3cgLyAyLCBiYXNlIC0gc3cgLyAyKTtcbiAgICBjdHgubGluZVRvKHR4ICsgc3cgKiAxLjUsIGJhc2UgLSBzdyAvIDIpOyBjdHguc3Ryb2tlKCk7XG4gICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHR4IC0gc3cgKiAwLjQsIGJhc2UgLSB4aCk7IGN0eC5saW5lVG8odHggKyBzdyAqIDEuNywgYmFzZSAtIHhoKTsgY3R4LnN0cm9rZSgpO1xuICAgIHR4ICs9IHN3ICogMi40O1xuICB9XG4gIGN0eC5yZXN0b3JlKCk7XG4gIHJldHVybiBjYW52YXM7XG59XG5cbi8qKiBBc3NpZ24gdGhlIGJha2VkIGZhc2NpYSBpbWFnZSB0byB0aGUgZmFzY2lhIG1hdGVyaWFsIEFGVEVSIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGUgZG9jdW1lbnRlZFxuICogIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2AgZGVjbGFyYXRpb25cbiAqICAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS4gVGhlIHRleHR1cmVcbiAqICBpcyBhc3NpZ25lZCBzeW5jaHJvbm91c2x5IHNvIHRoZSBoYXJuZXNzIHdhaXRzIG9uIGl0cyBkZWNvZGUuICovXG5mdW5jdGlvbiBhcHBseUZhc2NpYUdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/LlsnZmFzY2lhLXBhbmVsJ107XG4gIGlmICghbWVzaCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuXG4gIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgY29uc3QgYmFrZWQgPSBuZXcgVEhSRUUuVGV4dHVyZUxvYWRlcigpLmxvYWQoU0lHTl9JTUFHRV9EQVRBX1VSTCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsICgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBkcmF3RmFsbGJhY2tTaWduKCk7XG4gICAgaWYgKCFjYW52YXMpIHJldHVybjtcbiAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICAgIGlmIChzcmdiKSB0ZXguY29sb3JTcGFjZSA9IHNyZ2I7XG4gICAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICAgIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgICBtYXRlcmlhbC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH0pO1xuICBpZiAoc3JnYikgYmFrZWQuY29sb3JTcGFjZSA9IHNyZ2I7XG4gIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICBiYWtlZC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgbWF0ZXJpYWwubWFwID0gYmFrZWQ7XG4gIC8vIEEgYG1hcGAgTVVMVElQTElFUyBgY29sb3JgOiB0aGUgbWVhc3VyZWQgbmF2eSBpcyBhbHJlYWR5IHBhaW50ZWQgaW50byB0aGUgaW1hZ2UsIHNvIHRoZVxuICAvLyBjb2xvdXIgc2xvdCBtdXN0IGJlIHdoaXRlIG9yIHRoZSBhbGJlZG8gaXMgYXBwbGllZCB0d2ljZS5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUFRUU3RhdGlvbkJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBBIHN0YXRpYyBleHRlcmlvciBzaGVsbCAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIFRoZSBkb29ycyBhbmQgYW55XG4gICAgLy8gc2h1dHRlciBhcmUgYXV0aG9yZWQgYXMgZml4ZWQgZ2VvbWV0cnksIHNvIHRoZXkgZ2V0IG5vIGF4aXM6IGEgbmFtZWQgcGl2b3QgaXMgYSBwcm9taXNlXG4gICAgLy8gdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yIGhhc1xuICAgIC8vIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9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Q0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEs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
