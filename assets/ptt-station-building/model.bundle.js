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
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "frame",
    "fascia": {
      "boards": [
        {
          "w": 7.96,
          "h": 0.52,
          "d": 0.16,
          "at": [
            0,
            3.38,
            3.42
          ],
          "face": "+Z"
        },
        {
          "w": 0.16,
          "h": 0.52,
          "d": 3.08,
          "at": [
            -3.9,
            3.38,
            1.76
          ],
          "plain": true
        },
        {
          "w": 0.16,
          "h": 0.52,
          "d": 3.08,
          "at": [
            3.9,
            3.38,
            1.76
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
          -2.85,
          1.65,
          3.05,
          0.34,
          3.3,
          0.34
        ],
        [
          0.55,
          1.65,
          3.05,
          0.34,
          3.3,
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
          7.94,
          0.14,
          0.14
        ],
        [
          -3.91,
          3.06,
          1.75,
          0.14,
          0.14,
          3.1
        ],
        [
          3.91,
          3.06,
          1.75,
          0.14,
          0.14,
          3.1
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
    "background": "#343852",
    "ops": [
      {
        "type": "text",
        "text": "\u25D7",
        "x0": 0.415,
        "x1": 0.455,
        "cy": 0.5,
        "size": 0.44,
        "fill": "#FFFFFF"
      },
      {
        "type": "text",
        "text": "ptt",
        "x0": 0.47,
        "x1": 0.6,
        "cy": 0.56,
        "size": 0.6,
        "fill": "#FFFFFF",
        "style": "italic bold"
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogUFRUIFN0YXRpb24gQnVpbGRpbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcgYW5kXG4gKiBpbnN0YW5jaW5nIGFyZSBoYW5kLXJvbGxlZCBiZWxvdyAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXMgYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDguMDAgeCA0LjYwIHggNy4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCBzaG9wZnJvbnQgZmFjaW5nICtaLlxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTE2IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIE9uZSBvZiB0aGFpa2l0J3Mgc2hhcmVkIHJldGFpbC1tb2R1bGUgYnVpbGRpbmdzLiBUaGUgc2hlbGwgZnJvbnQgZmFjZSBzaXRzIGF0IHo9KzIuNTAgcmF0aGVyXG4gKiB0aGFuIHRoZSBlbnZlbG9wZSBlZGdlIHNvIHRoZSBlbnRyYW5jZSBjYW5vcHkgY2FuIGNhbnRpbGV2ZXIgZm9yd2FyZCBhbmQgc3RpbGwgbGFuZCBleGFjdGx5IG9uXG4gKiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEV2ZXJ5IHN1cmZhY2UgcGFpciBvbiB0aGUgZmFjYWRlIGlzIGRlbGliZXJhdGVseSBvZmZzZXQgaW4gZGVwdGg6XG4gKiB0d28gc3VyZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSB0ZWFyIGludG8gaW50ZXJsZWF2ZWQgdHJpYW5nbGVzIGFzIHRoZVxuICogY2FtZXJhIG1vdmVzLCBhbmQgYXV0aG9yaW5nIGNvbXBvbmVudHMgZmx1c2ggYWdhaW5zdCBvbmUgYW5vdGhlciBwcm9kdWNlcyB0aGF0IGJ5IGRlZmF1bHQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJwdHQtc3RhdGlvbi1idWlsZGluZ1wiLFxuICAgIFwibmFtZVwiOiBcIlBUVCBTdGF0aW9uIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiUFRUU3RhdGlvbkJ1aWxkaW5nXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid2FsbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MTQ1NDkyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZGVja1wiLFxuICAgICAgICBcImNvbG9yXCI6IDgxNjA2NTYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAzNDIyMjkwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAwLjZcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnbGFzc1wiLFxuICAgICAgICBcImNvbG9yXCI6IDczMDQzMTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwib3BhY2l0eVwiOiAwLjk0LFxuICAgICAgICBcImVudk1hcEludGVuc2l0eVwiOiAxLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmcmFtZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDg4ODI4MjgsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMjVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyZWRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMTU0NDg3NSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2FsdlwiLFxuICAgICAgICBcImNvbG9yXCI6IDkxNDY1MTgsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuM1xuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcInNoZWxsRnJvbnRcIjogMC4zLFxuICAgICAgXCJwbGFudE1hdGVyaWFsXCI6IFwiZ2FsdlwiLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LjA3NSxcbiAgICAgICAgXCJjelwiOiAwLjE2LFxuICAgICAgICBcImhcIjogMS4wNSxcbiAgICAgICAgXCJkXCI6IDAuMzZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICBcImZhc2NpYVwiOiB7XG4gICAgICAgIFwiYm9hcmRzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIndcIjogNy45NixcbiAgICAgICAgICAgIFwiaFwiOiAwLjUyLFxuICAgICAgICAgICAgXCJkXCI6IDAuMTYsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMy4zOCxcbiAgICAgICAgICAgICAgMy40MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiZmFjZVwiOiBcIitaXCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwid1wiOiAwLjE2LFxuICAgICAgICAgICAgXCJoXCI6IDAuNTIsXG4gICAgICAgICAgICBcImRcIjogMy4wOCxcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMy45LFxuICAgICAgICAgICAgICAzLjM4LFxuICAgICAgICAgICAgICAxLjc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJwbGFpblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcIndcIjogMC4xNixcbiAgICAgICAgICAgIFwiaFwiOiAwLjUyLFxuICAgICAgICAgICAgXCJkXCI6IDMuMDgsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMy45LFxuICAgICAgICAgICAgICAzLjM4LFxuICAgICAgICAgICAgICAxLjc2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJwbGFpblwiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nXCI6IHtcbiAgICAgICAgXCJjeFwiOiAtMC4zLFxuICAgICAgICBcIndcIjogNS4yLFxuICAgICAgICBcImhcIjogMi43LFxuICAgICAgICBcImN5XCI6IDEuNTgsXG4gICAgICAgIFwiY3pcIjogMC4zNlxuICAgICAgfSxcbiAgICAgIFwiZnJhbWVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTIuOTgsXG4gICAgICAgICAgMS41OCxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzgsXG4gICAgICAgICAgMS41OCxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi44LFxuICAgICAgICAgIDAuMTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgMi45NyxcbiAgICAgICAgICAwLjQyLFxuICAgICAgICAgIDUuNDYsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAwLjE2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC4zLFxuICAgICAgICAgIDAuMTksXG4gICAgICAgICAgMC40MixcbiAgICAgICAgICA1LjQ2LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4xNlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA3LFxuICAgICAgICBcImhcIjogMi43NCxcbiAgICAgICAgXCJjeVwiOiAxLjU4LFxuICAgICAgICBcImN6XCI6IDAuNDIsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTEuOSxcbiAgICAgICAgICAtMC44NSxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMS4yNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJDYW5vcHkgc2xhYiBhbmQgc2VydmljZSBkb29yXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJ3YWxsXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAzLjQ1LFxuICAgICAgICAgICAgMS44LFxuICAgICAgICAgICAgNy45MixcbiAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgIDMuMzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTYsXG4gICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAtMS42LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDIuMixcbiAgICAgICAgICAgIDFcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInNpZGVGZWF0dXJlXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiQ2Fub3B5IGNvbHVtbnNcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcImZyYW1lXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjg1LFxuICAgICAgICAgICAgMS42NSxcbiAgICAgICAgICAgIDMuMDUsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMy4zLFxuICAgICAgICAgICAgMC4zNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC41NSxcbiAgICAgICAgICAgIDEuNjUsXG4gICAgICAgICAgICAzLjA1LFxuICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgIDMuMyxcbiAgICAgICAgICAgIDAuMzRcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImV4dHJhRmVhdHVyZVwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIkNhbm9weSByZWQgc3RyaXBlXCIsXG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJyZWRcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDMuMDYsXG4gICAgICAgICAgICAzLjQzLFxuICAgICAgICAgICAgNy45NCxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy45MSxcbiAgICAgICAgICAgIDMuMDYsXG4gICAgICAgICAgICAxLjc1LFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAzLjFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOTEsXG4gICAgICAgICAgICAzLjA2LFxuICAgICAgICAgICAgMS43NSxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgMy4xXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJjb25kZW5zZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAuMzUsXG4gICAgICAgICAgLTEuMzUsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS42NSxcbiAgICAgICAgICAtMS45NSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjY1LFxuICAgICAgICAgIC0xLjk1LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJncmFwaGljXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiMzNDM4NTJcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJcdTI1RDdcIixcbiAgICAgICAgICBcIngwXCI6IDAuNDE1LFxuICAgICAgICAgIFwieDFcIjogMC40NTUsXG4gICAgICAgICAgXCJjeVwiOiAwLjUsXG4gICAgICAgICAgXCJzaXplXCI6IDAuNDQsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0ZGRkZGRlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwicHR0XCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjQ3LFxuICAgICAgICAgIFwieDFcIjogMC42LFxuICAgICAgICAgIFwiY3lcIjogMC41NixcbiAgICAgICAgICBcInNpemVcIjogMC42LFxuICAgICAgICAgIFwiZmlsbFwiOiBcIiNGRkZGRkZcIixcbiAgICAgICAgICBcInN0eWxlXCI6IFwiaXRhbGljIGJvbGRcIlxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkbyAtLSB3aGljaCBpc1xuICogd2hhdCByZW5kZXJzIGEgYnVpbGRpbmcgbWlkLWdyZXkuXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciBtZXRhbHMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYSBoZW1pc3BoZXJlXG4gKiBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0byByZWZsZWN0XG4gKiByZW5kZXJzIGJsYWNrLiBUaGUgYWxiZWRvIHN0YXlzIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICpcbiAqIFRoZSBvbmUgcHJpbnRlZCBncmFwaGljLCB0aGUgYnJhbmQgZmFzY2lhLCBpcyBhIGNhbnZhcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uXG4gKiBUaGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gZG9lcyBub3QgYWZmZWN0IHRoYXQsIGFuZCBpdCBpcyB0aGUgZG9jdW1lbnRlZCByb3V0ZS5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBUVFN0YXRpb25CdWlsZGluZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnUFRUIFN0YXRpb24gQnVpbGRpbmcnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIFNoZWxsOiBTT0xJRCBib3gsIG5vdCBhIHJpbmcuIFRoZSBwcm9wIGlzIGFuIGV4dGVyaW9yIHNoZWxsIG9ubHkgZXZlciBzZWVuIGZyb20gb3V0c2lkZSwgc29cbiAgICogYW4gaW50ZXJpb3IgY29zdHMgZHJhdyBjYWxscywgZ2VvbWV0cmllcyBhbmQgVlJBTSBmb3Igc29tZXRoaW5nIG5vYm9keSBzZWVzIC0tIGFuZCBzb2xpZFxuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGluIGl0LCB3aGljaCByZW1vdmVzIGFsbCBmb3VyIHJldmVhbCBmYWNlcyBhbmQgdGhlXG4gICAqIHotZmlnaHRpbmcgdGhleSBjYXVzZS4gU2V0IDAuMDYgbSBJTlNJREUgdGhlIHBhcmFwZXQgcmluZyBvbiBldmVyeSBlbGV2YXRpb24gc28gbm8gd2FsbCBmYWNlXG4gICAqIGlzIGV2ZXIgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIGEgcGFyYXBldCBmYWNlLiAqL1xuICAvLyBIb3cgZmFyIGZvcndhcmQgdGhlIHNoZWxsIGZhY2Ugc2l0cy4gVGhlIERFRkFVTFQgMi41MCBsZWF2ZXMgMS4wMCBtIGZvciBhbiBlbnRyYW5jZSBjYW5vcHkgdG9cbiAgLy8gY2FudGlsZXZlciBpbnRvLCBzbyB0aGUgY2Fub3B5IG5vc2UgbGFuZHMgZXhhY3RseSBvbiB0aGUgZGVjbGFyZWQgNy4wIG0gZGVwdGguIEEgYnVpbGRpbmcgd2l0aFxuICAvLyBOTyBmb3J3YXJkIGNhbnRpbGV2ZXIgbXVzdCBwdXNoIHRoaXMgb3V0IGluc3RlYWQsIG9yIHRoZSBwcm9wIGlzIGJ1aWx0IHNob3J0IG9mIGl0cyBkZWNsYXJlZFxuICAvLyBlbnZlbG9wZSAtLSBNSyBmaXJzdCBjYW1lIG91dCA2LjMgbSBkZWVwIGFnYWluc3QgYSBkZWNsYXJlZCA3LjAgZm9yIGV4YWN0bHkgdGhhdCByZWFzb24uXG4gIGNvbnN0IFNGID0gKEcuc2hlbGxGcm9udCA/PyAyLjUwKSBhcyBudW1iZXI7XG4gIGFkZCgnYnVpbGRpbmctc2hlbGwnLCAnQnVpbGRpbmcgc2hlbGwnLCBib3hBdCgwLCAxLjc3NSwgKFNGIC0gMy40NCkgLyAyLCA3Ljg4LCAzLjU1LCBTRiArIDMuNDQpLCAnd2FsbCcpO1xuICBjb2xsaWRlcnNbJ2J1aWxkaW5nLXNoZWxsJ10gPSB7XG4gICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDIuMywgMF0sIGhhbGZFeHRlbnRzOiBbNC4wLCAyLjMsIDMuNV0sXG4gICAgbm90ZXM6ICdBc3NldCBkZWNsYXJlcyBjb2xsaWRlciBcImJveFwiLiBPbmUgY29udmV4IHByb3h5IG92ZXIgdGhlIHdob2xlIGVudmVsb3BlLicsXG4gIH07XG5cbiAgLyogUm9vZiBkZWNrIHNwYW5zIHkgMy41MC4uMy42MiBzbyBpdHMgdW5kZXJzaWRlIGlzIHN1bmsgSU5UTyB0aGUgc2hlbGwgcmF0aGVyIHRoYW4gcmVzdGluZyBvblxuICAgKiBpdC4gQXV0aG9yZWQgZmx1c2gsIHRoZSBkZWNrJ3MgYm90dG9tIGZhY2UgYW5kIHRoZSBwYXJhcGV0IHJpbmcncyBib3R0b20gZmFjZSB3ZXJlIGJvdGggYXRcbiAgICogeT0zLjU1MCBhbmQgYm90aCBmYWNpbmcgZG93biAtLSA0NiBtMiBvZiBjb3BsYW5hciBjby1mYWNpbmcgc3VyZmFjZS4gKi9cbiAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgMy41NiwgKFNGIC0gMC4wMiAtIDMuNDIpIC8gMiwgNy44LCAwLjEyLCBTRiArIDMuNDApLCAnZGVjaycpO1xuXG4gIC8qIFBhcmFwZXQ6IGZyb250IGZhc2NpYSB3YWxsIHBsdXMgdGhyZWUgdXBzdGFuZHMsIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQgYW5kIG9uZSBkcmF3IGNhbGwuXG4gICAqIFRoZSBmcm9udCBpcyB0YWxsZXIgdGhhbiB0aGUgc2lkZXMsIHdoaWNoIGEgcGxhbiBleHRydXNpb24gY2Fubm90IGV4cHJlc3MuIE91dGVyIGZhY2VzIHN0YW5kXG4gICAqIDAuMDYgbSBwcm91ZCBvZiB0aGUgd2FsbHMgLS0gYSBjb3BpbmcgZHJpcCBlZGdlLCBhbmQgd2hhdCBrZWVwcyB0aGVtIG9mZiB0aGUgd2FsbCBwbGFuZXMuICovXG4gIGFkZCgncGFyYXBldCcsICdQYXJhcGV0IHJpbmcgYW5kIGZhc2NpYSB3YWxsJywgYm94ZXMoW1xuICAgIFswLCBHLmZhc2NpYVdhbGwuY3ksIEcuZmFzY2lhV2FsbC5jeiwgOC4wLCBHLmZhc2NpYVdhbGwuaCwgRy5mYXNjaWFXYWxsLmRdLFxuICAgIFstMy44OCwgMy43NSwgKFNGIC0gMC4zMCAtIDMuNSkgLyAyLCAwLjI0LCAwLjQsIFNGICsgMy4yMF0sXG4gICAgWzMuODgsIDMuNzUsIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgMC4yNCwgMC40LCBTRiArIDMuMjBdLFxuICAgIFswLCAzLjc1LCAtMy4zOCwgOC4wLCAwLjQsIDAuMjRdLFxuICAgIC8vIEFueXRoaW5nIGVsc2UgaW4gdGhlIFNBTUUgbWF0ZXJpYWwgZm9sZHMgaW4gaGVyZSByYXRoZXIgdGhhbiBjb3N0aW5nIGl0cyBvd24gZHJhdyBjYWxsIC0tXG4gICAgLy8gZnVsbC1oZWlnaHQgZmFjYWRlIGNsYWRkaW5nLCBjb3JuZXIgcGlsYXN0ZXJzLCBhIHBsaW50aC4gVGhpcyBpcyB0aGUgbWVyZ2UgbGV2ZXI6IHR3b1xuICAgIC8vIHBhcnRzIHRoYXQgc2hhcmUgYSBtYXRlcmlhbCBzaG91bGQgbmV2ZXIgYmUgdHdvIHN1Ym1pc3Npb25zLlxuICAgIC4uLigoRy5wYXJhcGV0RXh0cmEgPz8gW10pIGFzIG51bWJlcltdW10pLFxuICBdKSwgRy5mYXNjaWFXYWxsTWF0ZXJpYWwpO1xuXG4gIC8qIEJyYW5kIGZhc2NpYSBwYW5lbC4gU3VuayBJTlRPIHRoZSBmYXNjaWEgd2FsbCBhdCB0aGUgYmFjayBhbmQgc3RhbmRpbmcgcHJvdWQgYXQgdGhlIGZyb250LCBzb1xuICAgKiBpdCBvdmVybGFwcyBpdHMgc3Vycm91bmQgaW5zdGVhZCBvZiBtZWV0aW5nIGl0LiBVVnMgYXJlIEFVVEhPUkVEOiB0aGUgK1ogZmFjZSBzYW1wbGVzIHRoZVxuICAgKiB3b3JkbWFyayBiYW5kIG9mIHRoZSBjYW52YXMgYW5kIHRoZSBvdGhlciBmaXZlIGZhY2VzIHNhbXBsZSBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZVxuICAgKiBjYW52YXMsIHdoaWNoIGtlZXBzIHRoZSBicmFuZCBncmFwaGljIGF0IE9ORSBtYXRlcmlhbCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZhc2NpYTtcbiAgICBsZXQgZzogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGYuc2hhcGUgPT09ICdkaXNjJykge1xuICAgICAgLy8gQSByb3VuZCBzaWduIGRpc2MsIGJ1aWx0IGFzIGEgQ2lyY2xlR2VvbWV0cnkgZmFjZSBwbHVzIGEgc2hhbGxvdyBjeWxpbmRlciBib2R5LlxuICAgICAgLy9cbiAgICAgIC8vIFRoZSBvYnZpb3VzIGNvbnN0cnVjdGlvbiAtLSBvbmUgY3lsaW5kZXIgcm90YXRlZCB0byBmYWNlICtaIC0tIHB1dHMgdGhlIHdvcmRtYXJrIG9uIGl0c1xuICAgICAgLy8gc2lkZSwgYmVjYXVzZSBDeWxpbmRlckdlb21ldHJ5IGxheXMgaXRzIGNhcCBVVnMgb3V0IGluIHRoZSBjeWxpbmRlcidzIG93biBYWiBwbGFuZSBhbmRcbiAgICAgIC8vIHJvdGF0aW5nIHRoZSBnZW9tZXRyeSBkb2VzIG5vdCByb3RhdGUgdGhlbSB3aXRoIGl0LiBDaXJjbGVHZW9tZXRyeSdzIFVWcyBhcmUgYWxyZWFkeVxuICAgICAgLy8gKHgsIHkpIGluIHRoZSBwbGFuZSBpdCBmYWNlcywgc28gdGhlIHNxdWFyZSBjYW52YXMgbGFuZHMgdGhlIHJpZ2h0IHdheSB1cCB3aXRoIG5vXG4gICAgICAvLyBjb3JyZWN0aW9uLiBUaGUgYm9keSdzIFVWcyBhcmUgY29sbGFwc2VkIG9udG8gYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzIHNvIHRoZVxuICAgICAgLy8gZGlzYydzIGVkZ2UgZG9lcyBub3Qgc21lYXIgdGhlIHdvcmRtYXJrIGFyb3VuZCBpdHMgcmltLlxuICAgICAgY29uc3QgciA9IGYudyAvIDI7XG4gICAgICBjb25zdCBmYWNlID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KHIsIDMyKTtcbiAgICAgIGZhY2UudHJhbnNsYXRlKDAsIDAsIDAuMDYxKTtcbiAgICAgIGNvbnN0IGJvZHkgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCAwLjEyLCAzMik7XG4gICAgICBib2R5LnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgICAgIGNvbnN0IGJ1diA9IGJvZHkuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnV2LmNvdW50OyBpKyspIGJ1di5zZXRYWShpLCAwLjAyLCAwLjAyKTtcbiAgICAgIGJ1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gbWVyZ2VHZW9zKFtmYWNlLCBib2R5XSk7XG4gICAgICBnLnRyYW5zbGF0ZSgwLCBmLmN5LCBmLmN6KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQm94R2VvbWV0cnkgdmVydGV4IG9yZGVyIGlzIHB4LCBueCwgcHksIG55LCBweiwgbnogLS0gZm91ciB2ZXJ0aWNlcyBwZXIgZmFjZSAtLSBzbyB0aGVcbiAgICAgIC8vIG91dHdhcmQgZmFjZSBvZiBhIGJvYXJkIGlzIGEga25vd24gc2xpY2Ugb2YgdGhlIHV2IGF0dHJpYnV0ZS4gQSBidWlsZGluZyBjYW4gY2FycnkgdGhlXG4gICAgICAvLyBzYW1lIG1hcmsgb24gbW9yZSB0aGFuIG9uZSBlbGV2YXRpb24gKHRoaXMga2l0J3MgaG9zcGl0YWwgc2lnbnMgaXRzIGZyb250IEFORCBpdHMgc2lkZSksXG4gICAgICAvLyBzbyBgYm9hcmRzYCBsZXRzIGVhY2ggYm9hcmQgbmFtZSB0aGUgZmFjZSB0aGF0IHNhbXBsZXMgdGhlIGdyYXBoaWMgd2hpbGUgZXZlcnkgb3RoZXIgZmFjZVxuICAgICAgLy8gc2FtcGxlcyBhIHBsYWluIGNvcm5lciBvZiB0aGUgc2FtZSBjYW52YXMuIE9uZSBtYXRlcmlhbCwgb25lIGRyYXcgY2FsbCwgYW55IG51bWJlciBvZlxuICAgICAgLy8gYm9hcmRzIGZhY2luZyBhbnkgd2F5LlxuICAgICAgY29uc3QgRkFDRV9TTElDRTogUmVjb3JkPHN0cmluZywgbnVtYmVyPiA9IHsgJytYJzogMCwgJy1YJzogNCwgJytZJzogOCwgJy1ZJzogMTIsICcrWic6IDE2LCAnLVonOiAyMCB9O1xuICAgICAgY29uc3QgYm9hcmRzID0gKGYuYm9hcmRzIGFzIGFueVtdKSA/PyBbeyB3OiBmLncsIGg6IGYuaCwgZDogMC4xMiwgYXQ6IFswLCBmLmN5LCBmLmN6XSwgZmFjZTogJytaJyB9XTtcbiAgICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgICBmb3IgKGNvbnN0IGJkIG9mIGJvYXJkcykge1xuICAgICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJkLncsIGJkLmgsIGJkLmQgPz8gMC4xMik7XG4gICAgICAgIGNvbnN0IHV2ID0gYi5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgICAvLyBgcGxhaW5gIGJvYXJkcyBjYXJyeSBubyBncmFwaGljIGF0IGFsbDogYSBiYW5kIHRoYXQgd3JhcHMgdGhyZWUgc2lkZXMgb2YgYSBjYW5vcHkgc2hvdWxkXG4gICAgICAgIC8vIHJlcGVhdCBpdHMgbWFyayBvbiBub25lIG9mIHRoZSByZXR1cm5zLCBvbmx5IG9uIHRoZSBmYWNlIHRoYXQgZnJvbnRzIHRoZSBzdHJlZXQuXG4gICAgICAgIC8vIFRoZSB0ZXN0IGlzIGFuIGV4cGxpY2l0IGJvb2xlYW4sIE5PVCBhIHNlbnRpbmVsIGluZGV4IC0tIHNldHRpbmcgdGhlIHNsaWNlIHN0YXJ0IHRvIC0xXG4gICAgICAgIC8vIHN0aWxsIHNhdGlzZmllZCBgaSA+PSBzdGFydCAmJiBpIDwgc3RhcnQgKyA0YCBmb3IgdmVydGljZXMgMCwgMSBhbmQgMiwgc28gdGhyZWUgY29ybmVyc1xuICAgICAgICAvLyBvZiB0aGUgK1ggZmFjZSBrZXB0IHNhbXBsaW5nIHRoZSB3b3JkbWFyayBiYW5kIGFuZCBzbWVhcmVkIGEgc3RyZXRjaGVkIGdob3N0IG9mIHRoZSBtYXJrXG4gICAgICAgIC8vIGFsb25nIGV2ZXJ5IHJldHVybi5cbiAgICAgICAgY29uc3QgcGxhaW4gPSBiZC5wbGFpbiA9PT0gdHJ1ZTtcbiAgICAgICAgY29uc3Qgc3RhcnRBdCA9IEZBQ0VfU0xJQ0VbYmQuZmFjZSA/PyAnK1onXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB7XG4gICAgICAgICAgaWYgKCFwbGFpbiAmJiBpID49IHN0YXJ0QXQgJiYgaSA8IHN0YXJ0QXQgKyA0KSB1di5zZXRYWShpLCB1di5nZXRYKGkpLCAwLjEyNSArIHV2LmdldFkoaSkgKiAwLjg3NSk7XG4gICAgICAgICAgZWxzZSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogMC4wMywgdXYuZ2V0WShpKSAqIDAuMDMpO1xuICAgICAgICB9XG4gICAgICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgYi50cmFuc2xhdGUoYmQuYXRbMF0sIGJkLmF0WzFdLCBiZC5hdFsyXSk7XG4gICAgICAgIHBhcnRzLnB1c2goYik7XG4gICAgICB9XG4gICAgICBnID0gcGFydHMubGVuZ3RoID09PSAxID8gcGFydHNbMF0gOiBtZXJnZUdlb3MocGFydHMpO1xuICAgIH1cbiAgICBhZGQoJ2Zhc2NpYS1wYW5lbCcsICdCcmFuZCBmYXNjaWEgcGFuZWwnLCBnLCAnZmFzY2lhJyk7XG4gIH1cblxuICAvKiBPbmUgZ2xhemluZyBwYW5lLCBub3Qgb25lIHBlciBiYXk6IHRoZSBtdWxsaW9uIGdyaWQgaW4gZnJvbnQgZG9lcyB0aGUgZGl2aWRpbmcuIE92ZXJsYXBzIElOVE9cbiAgICogdGhlIGZhY2FkZSBhdCB0aGUgYmFjayBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXQgdGhlIGZyb250LiBNb3N0bHkgb3BhcXVlIGJ5XG4gICAqIGRlc2lnbiAtLSB0aGVyZSBpcyBubyBpbnRlcmlvciBiZWhpbmQgaXQsIHNvIGEgdHJhbnNwYXJlbnQgcGFuZSB3b3VsZCByZWFkIGFzIGEgaG9sZS4gKi9cbiAgLy8gVGhlIHBhbmUgaXMgbm90IGFsd2F5cyBjZW50cmVkOiBhIGJyYW5jaCBwbGFuIGNhbiBwdXQgaXRzIGdsYXppbmcgdG8gb25lIHNpZGUgb2YgdGhlIGVudHJhbmNlLlxuICAvLyBBdXRob3JlZCBjZW50cmVkIHdoaWxlIGl0cyBmcmFtaW5nIHNhdCBvZmYgdG8gdGhlIGxlZnQsIHRoZSB0d28gcmVhZCBhcyB1bnJlbGF0ZWQgcGFydHMuXG4gIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLFxuICAgICAgYm94QXQoRy5nbGF6aW5nLmN4ID8/IDAsIEcuZ2xhemluZy5jeSwgRy5nbGF6aW5nLmN6ID8/IDIuNTEsIEcuZ2xhemluZy53LCBHLmdsYXppbmcuaCwgMC4xMCksICdnbGFzcycpO1xuXG4gIC8qIEZyYW1pbmcsIHRyYW5zb20sIGtpY2sgcmFpbCwgZG9vciBqYW1icyBhbmQgaGVhZGVyIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQuIEV2ZXJ5IHBhcnQgaXNcbiAgICogdGhlIHNhbWUgbWV0YWw7IGZvbGRpbmcgdGhlbSB0b2dldGhlciBpcyB0aGUgZHJhdy1jYWxsIGxldmVyIGNob3NlbiBpbiB0aGUgYmxvY2tvdXQsIG5vdCBhblxuICAgKiBvcHRpbWlzYXRpb24gZGVmZXJyZWQgdG8gdGhlIGVuZCAtLSBhIHBhcnQgc3BsaXQgZm9yIGF1dGhvcmluZyBjb252ZW5pZW5jZSBjYW5ub3QgYmUgbWVyZ2VkXG4gICAqIGFmdGVyd2FyZHMgb25jZSBhIHBpdm90IGhhbmdzIG9mZiBpdC4gRnJvbnQgZmFjZSBzdGFuZHMgcHJvdWQgb2YgZ2xhemluZyBhbmQgbXVsbGlvbnMuICovXG4gIGFkZCgnc2hvcGZyb250LWZyYW1lJywgJ1Nob3Bmcm9udCBmcmFtaW5nIGFuZCBkb29yIGJheScsIGJveGVzKEcuZnJhbWUpLCBHLmZyYW1lTWF0ZXJpYWwpO1xuXG4gIC8qIFNpZGUgZmVhdHVyZTogc2h1dHRlciwgc2VydmljZSBkb29yIG9yIGxvdXZyZSwgcGVyIHBsYXRlLiBTdGFuZHMgcHJvdWQgb2YgdGhlIHdhbGwgZmFjZSBidXRcbiAgICogZGVsaWJlcmF0ZWx5IE5PVCBvdXQgdG8gdGhlIHBhcmFwZXQgcGxhbmUgYXQgKy00LjAwIC0tIGEgZmFjZSBhdCBleGFjdGx5ICstNC4wMCB3b3VsZCBiZVxuICAgKiBjb3BsYW5hciBhbmQgY28tZmFjaW5nIHdpdGggdGhlIHBhcmFwZXQgb3V0ZXIgZmFjZSwgd2hpY2ggdGhlIGJvdW5kaW5nLWJveCBjb3BsYW5hcml0eSBjaGVja1xuICAgKiBmbGFncyBldmVuIHRob3VnaCB0aGUgdHdvIG5ldmVyIG92ZXJsYXAgaW4gWS4gKi9cbiAgaWYgKEcuc2lkZUZlYXR1cmUpIGFkZCgnc2lkZS1mZWF0dXJlJywgRy5zaWRlRmVhdHVyZS5uYW1lLCBib3hlcyhHLnNpZGVGZWF0dXJlLmJveGVzKSwgRy5zaWRlRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogRnJvbnQgZmVhdHVyZTogY2xhZGRpbmcgYmFuZCwgQVRNIGJhbmssIHVwcGVyLXN0b3JleSBiYW5kIG9yIGZvcmVjb3VydCwgcGVyIHBsYXRlLiAqL1xuICBpZiAoRy5mcm9udEZlYXR1cmUpIGFkZCgnZnJvbnQtZmVhdHVyZScsIEcuZnJvbnRGZWF0dXJlLm5hbWUsIGJveGVzKEcuZnJvbnRGZWF0dXJlLmJveGVzKSwgRy5mcm9udEZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEEgdGhpcmQgbWVyZ2VkIHNsb3QsIGZvciB3aGF0ZXZlciB0aGUgcGxhdGUgaGFzIHRoYXQgdGhlIHR3byBhYm92ZSBkbyBub3QgY292ZXIgLS0gYSBwYXJhcGV0XG4gICAqIGNvcGluZywgYSBrZXJiLCBhIGZvcmVjb3VydCBjb2x1bW4gYmFzZS4gU2FtZSBydWxlIGFzIHRoZSBvdGhlcnM6IGV2ZXJ5dGhpbmcgaW4gaXQgc2hhcmVzIG9uZVxuICAgKiBtYXRlcmlhbCBhbmQgaXMgc3VibWl0dGVkIG9uY2UuICovXG4gIGlmIChHLmV4dHJhRmVhdHVyZSkgYWRkKCdleHRyYS1mZWF0dXJlJywgRy5leHRyYUZlYXR1cmUubmFtZSwgYm94ZXMoRy5leHRyYUZlYXR1cmUuYm94ZXMpLCBHLmV4dHJhRmVhdHVyZS5tYXRlcmlhbCk7XG5cbiAgLyogTXVsbGlvbnM6IHRoZSBmaW5lIHZlcnRpY2FsIGdyaWQgaXMgdGhlIG1vc3QgcmVjb2duaXNhYmxlIHRoaW5nIGFib3V0IGEgc2hvcGZyb250LiBJbnN0YW5jZXNcbiAgICogb24gb25lIGdlb21ldHJ5IGNvc3Qgb25lIGRyYXcgY2FsbDsgYXMgY29tcG9uZW50cyB0aGV5IHdvdWxkIGhhdmUgY29zdCBvbmUgZWFjaCBhbmQgYmxvd24gdGhlXG4gICAqIGNlaWxpbmcgb24gdGhlaXIgb3duLiBUaGV5IHNpdCBJTlNJREUgdGhlIGZyYW1lIGRlcHRoIGJhbmQgYXQgYm90aCBlbmRzIHNvIHRoZXkgYXJlIG5vdFxuICAgKiBjb3BsYW5hciB3aXRoIGl0LCB3aGlsZSBzdGlsbCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgZ2xhemluZyBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtID0gRy5tdWxsaW9ucztcbiAgICBjb25zdCBtYXRzID0gKG0ueCBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIG0uY3ksIG0uY3ogPz8gMi41OCkpO1xuICAgIGFkZEluc3QoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkobS53LCBtLmgsIDAuMDgpLCBHLmZyYW1lTWF0ZXJpYWwsIG1hdHMpO1xuICB9XG5cbiAgLyogUm9vZnRvcCBjb25kZW5zZXJzOiBjYXNpbmcsIGZhbiBjb3dsIGFuZCBmb3VyIGZlZXQgTUVSR0VEIGludG8gYSBzaW5nbGUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICAgKiBGZWV0IHN0YXJ0IGJlbG93IHRoZSBkZWNrIHRvcCBzbyB0aGUgdHdvIG92ZXJsYXAgcmF0aGVyIHRoYW4gc2hhcmluZyBhIHBsYW5lLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXG4gICAgICBib3hBdCgwLCAwLjQ2LCAwLCAwLjk1LCAwLjcyLCAwLjg1KSxcbiAgICAgIGN5bEF0KDAsIDAuODcsIDAsIDAuMzAsIDAuMTAsIDE2KSxcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMTAsIDAuMDgpKTtcbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBjb25zdCBtYXRzID0gKEcuY29uZGVuc2VycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6LCB5YXddKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCAzLjYwLCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgICkpO1xuICAgIC8vIFRoZSBwbGFudCBtYXRlcmlhbCBpcyBDT05GSUdVUkFCTEUsIG5vdCBoYXJkLWNvZGVkLiBSZWZlcmVuY2luZyBhICdnYWx2JyBpZCB0aGF0IGEgY29uZmlnXG4gICAgLy8gZG9lcyBub3QgZGVmaW5lIHNpbGVudGx5IGhhbmRzIEluc3RhbmNlZE1lc2ggYW4gdW5kZWZpbmVkIG1hdGVyaWFsLCB0aHJlZS5qcyBzdWJzdGl0dXRlcyBhXG4gICAgLy8gZGVmYXVsdCwgYW5kIHRoZSBwcm9wIHNoaXBzIG9uZSBtYXRlcmlhbCBvdmVyIGl0cyBjZWlsaW5nIHdpdGggbm90aGluZyBpbiB0aGUgY29uZmlnIHRvXG4gICAgLy8gZXhwbGFpbiB0aGUgZXh0cmEuXG4gICAgYWRkSW5zdCgncGxhbnQtY29uZGVuc2VycycsICdSb29mdG9wIGNvbmRlbnNlciB1bml0cycsIHVuaXQsIEcucGxhbnRNYXRlcmlhbCA/PyAnZ2FsdicsIG1hdHMpO1xuICB9XG5cbiAgLyogT3B0aW9uYWwgaW5zdGFuY2VkIGV4dHJhOiBjYW5vcHkgcGxhdGVzLCBwaWxhc3RlcnMgb3IgZm9yZWNvdXJ0IGNvbHVtbnMsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZXh0cmFTeXN0ZW0pIHtcbiAgICBjb25zdCBlID0gRy5leHRyYVN5c3RlbTtcbiAgICBsZXQgdW5pdDogVEhSRUUuQnVmZmVyR2VvbWV0cnk7XG4gICAgaWYgKGUua2luZCA9PT0gJ3BsYXRlJykge1xuICAgICAgdW5pdCA9IG1lcmdlR2VvcyhbYm94QXQoMCwgMCwgMCwgZS53LCBlLmgsIGUuZCksIGN5bEF0KDAsIC1lLmggLyAyIC0gMC4wMTUsIDAsIDAuMDg1LCAwLjAzLCAxMildKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdW5pdCA9IGJveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpO1xuICAgIH1cbiAgICBjb25zdCBtYXRzID0gKGUuYXQgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeSwgel0pID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuc2V0UG9zaXRpb24oeCwgeSwgeikpO1xuICAgIGFkZEluc3QoZS5pZCwgZS5uYW1lLCB1bml0LCBlLm1hdGVyaWFsLCBtYXRzLCBlLnRvbmVzID8gbWF0cy5tYXAoKF8sIGkpID0+IGUudG9uZXNbaSAlIGUudG9uZXMubGVuZ3RoXSkgOiB1bmRlZmluZWQpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKiogRHJhdyB0aGUgYnJhbmQgd29yZG1hcmsgb250byBhIGNhbnZhcyBhbmQgYXNzaWduIGl0IEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbi4gVGhpcyBpcyB0aGVcbiAqICBkb2N1bWVudGVkIHJvdXRlIGZvciBhIHByaW50ZWQgYnJhbmQgZmFzY2lhIGFuZCBpcyB1bmFmZmVjdGVkIGJ5IHRoZSBtYXRlcmlhbCdzIGB0ZXh0dXJlbGVzc2BcbiAqICBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUwgc2V0LCBhIGRpZmZlcmVudCB0aGluZyBlbnRpcmVseS5cbiAqXG4gKiAgVGV4dCBpcyBmaXR0ZWQgdG8gaXRzIGZpZWxkIGJ5IE1FQVNVUkVNRU5UIHJhdGhlciB0aGFuIGJ5IGEgZm9udC1zaXplIHJhdGlvOiBoZWFkbGVzcyBDaHJvbWUnc1xuICogIGZvbnQgZmFsbGJhY2sgZGVjaWRlcyB0aGUgcmVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXNcbiAqICB0byBtZWFzdXJlIHRoZSBzdHJpbmcgYW5kIHNjYWxlIGl0IGhvcml6b250YWxseS4gKi9cbmZ1bmN0aW9uIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290OiBUSFJFRS5Hcm91cCk6IHZvaWQge1xuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lIHwgdW5kZWZpbmVkO1xuICBjb25zdCBtZXNoID0gcnQ/Lm1lc2hlcz8uWydmYXNjaWEtcGFuZWwnXTtcbiAgaWYgKCFtZXNoIHx8IHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybjtcbiAgY29uc3QgbWF0ZXJpYWwgPSBtZXNoLm1hdGVyaWFsIGFzIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsO1xuICBpZiAoIW1hdGVyaWFsKSByZXR1cm47XG5cbiAgY29uc3QgZyA9IENPTkZJRy5ncmFwaGljIGFzIGFueTtcbiAgLy8gQSByb3VuZCBzaWduIG5lZWRzIGEgU1FVQVJFIGNhbnZhczogdGhlIGN5bGluZGVyIGNhcCBtYXBzIHRoZSBjaXJjbGUgaW50byB0aGUgdW5pdCBzcXVhcmUsXG4gIC8vIHNvIGEgMjA0OHgzMjAgc3RyaXAgd291bGQgc3F1YXNoIHRoZSBtYXJrIGZsYXQuIEEgcmVjdGFuZ3VsYXIgZmFzY2lhIGtlZXBzIHRoZSB3aWRlIHN0cmlwLFxuICAvLyB3aGVyZSB0aGUgYm90dG9tIDEyLjUlIGlzIHRoZSBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugc2FtcGxlcy5cbiAgY29uc3Qgc3F1YXJlID0gISFnLnNxdWFyZTtcbiAgY29uc3QgVyA9IHNxdWFyZSA/IDUxMiA6IDIwNDgsIEggPSBzcXVhcmUgPyA1MTIgOiAzMjA7XG4gIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICBjYW52YXMud2lkdGggPSBXOyBjYW52YXMuaGVpZ2h0ID0gSDtcbiAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gIGlmICghY3R4KSByZXR1cm47XG5cbiAgY3R4LmZpbGxTdHlsZSA9IGcuYmFja2dyb3VuZDtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIFcsIEgpO1xuICBjb25zdCBiYW5kID0gc3F1YXJlID8gSCA6IEggKiAwLjg3NTtcblxuICBjb25zdCBmaXQgPSAodGV4dDogc3RyaW5nLCBmb250OiBzdHJpbmcsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGN5OiBudW1iZXIsIGZpbGw6IHN0cmluZywgc3Ryb2tlQ29sPzogc3RyaW5nLCBzdHJva2VXPzogbnVtYmVyKSA9PiB7XG4gICAgY3R4LmZvbnQgPSBmb250O1xuICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcbiAgICBjdHgudGV4dEFsaWduID0gJ2xlZnQnO1xuICAgIGNvbnN0IHcgPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XG4gICAgY29uc3QgcyA9ICh4MSAtIHgwKSAvIHc7XG4gICAgY3R4LnNhdmUoKTtcbiAgICBjdHgudHJhbnNsYXRlKHgwLCAwKTtcbiAgICBjdHguc2NhbGUocywgMSk7XG4gICAgaWYgKHN0cm9rZUNvbCkgeyBjdHgubGluZUpvaW4gPSAncm91bmQnOyBjdHguc3Ryb2tlU3R5bGUgPSBzdHJva2VDb2w7IGN0eC5saW5lV2lkdGggPSAoc3Ryb2tlVyA/PyA2KSAvIHM7IGN0eC5zdHJva2VUZXh0KHRleHQsIDAsIGN5KTsgfVxuICAgIGN0eC5maWxsU3R5bGUgPSBmaWxsO1xuICAgIGN0eC5maWxsVGV4dCh0ZXh0LCAwLCBjeSk7XG4gICAgY3R4LnJlc3RvcmUoKTtcbiAgfTtcblxuICBmb3IgKGNvbnN0IG9wIG9mIGcub3BzIGFzIGFueVtdKSB7XG4gICAgaWYgKG9wLnR5cGUgPT09ICdyZWN0Jykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjb25zdCB4ID0gb3AueCAqIFcsIHkgPSBvcC55ICogYmFuZCwgdyA9IG9wLncgKiBXLCBoID0gb3AuaCAqIGJhbmQsIHIgPSAob3AuciA/PyAwKSAqIGJhbmQ7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBpZiAociA+IDApIHtcbiAgICAgICAgY3R4Lm1vdmVUbyh4ICsgciwgeSk7IGN0eC5saW5lVG8oeCArIHcgLSByLCB5KTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHcsIHksIHggKyB3LCB5ICsgcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHcsIHkgKyBoIC0gcik7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5ICsgaCwgeCArIHcgLSByLCB5ICsgaCk7XG4gICAgICAgIGN0eC5saW5lVG8oeCArIHIsIHkgKyBoKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGgsIHgsIHkgKyBoIC0gcik7XG4gICAgICAgIGN0eC5saW5lVG8oeCwgeSArIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4LCB5LCB4ICsgciwgeSk7XG4gICAgICB9IGVsc2UgY3R4LnJlY3QoeCwgeSwgdywgaCk7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAnY2lyY2xlJykge1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG9wLmZpbGw7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHguYXJjKG9wLmN4ICogVywgb3AuY3kgKiBiYW5kLCBvcC5yICogYmFuZCwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICdwb2x5Jykge1xuICAgICAgLy8gQW4gYXJiaXRyYXJ5IHBvbHlnb24gaW4gbm9ybWFsaXNlZCBjYW52YXMgY29vcmRzLCBmb3IgYSBtYXJrIGEgZm9udCBjYW5ub3Qgc2V0IC0tIGFcbiAgICAgIC8vIGxpZ2h0bmluZyBib2x0LCBhIGNoZXZyb24sIGEgbGVhZi4gUG9pbnRzIGFyZSBbeCwgeV0gd2l0aCB4IGEgZnJhY3Rpb24gb2YgdGhlIGNhbnZhcyB3aWR0aFxuICAgICAgLy8gYW5kIHkgYSBmcmFjdGlvbiBvZiB0aGUgYmFuZCBoZWlnaHQuXG4gICAgICBjdHguZmlsbFN0eWxlID0gb3AuZmlsbDtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnN0IHB0cyA9IG9wLnBvaW50cyBhcyBudW1iZXJbXVtdO1xuICAgICAgY3R4Lm1vdmVUbyhwdHNbMF1bMF0gKiBXLCBwdHNbMF1bMV0gKiBiYW5kKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBjdHgubGluZVRvKHB0c1tpXVswXSAqIFcsIHB0c1tpXVsxXSAqIGJhbmQpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgICAgY3R4LmZpbGwoKTtcbiAgICB9IGVsc2UgaWYgKG9wLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgICAgZml0KG9wLnRleHQsIGAke29wLnN0eWxlID8/ICdib2xkJ30gJHtNYXRoLnJvdW5kKG9wLnNpemUgKiBiYW5kKX1weCAke29wLmZhbWlseSA/PyAnQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZid9YCxcbiAgICAgICAgb3AueDAgKiBXLCBvcC54MSAqIFcsIG9wLmN5ICogYmFuZCwgb3AuZmlsbCwgb3Auc3Ryb2tlLCBvcC5zdHJva2VXID8gb3Auc3Ryb2tlVyAqIGJhbmQgOiB1bmRlZmluZWQpO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGNhbnZhcyk7XG4gIHRleC5jb2xvclNwYWNlID0gKFRIUkVFIGFzIGFueSkuU1JHQkNvbG9yU3BhY2UgPz8gdGV4LmNvbG9yU3BhY2U7XG4gIHRleC5hbmlzb3Ryb3B5ID0gNDtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gdGludGVkIC0tIHRoZSBtZWFzdXJlZCBmYXNjaWEgY29sb3VyIGlzXG4gIC8vIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlUFRUU3RhdGlvbkJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBBIHN0YXRpYyBleHRlcmlvciBzaGVsbCAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIFRoZSBkb29ycyBhbmQgYW55XG4gICAgLy8gc2h1dHRlciBhcmUgYXV0aG9yZWQgYXMgZml4ZWQgZ2VvbWV0cnksIHNvIHRoZXkgZ2V0IG5vIGF4aXM6IGEgbmFtZWQgcGl2b3QgaXMgYSBwcm9taXNlXG4gICAgLy8gdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yIGhhc1xuICAgIC8vIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFxQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxNQUNYLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsY0FBYztBQUFBLElBQ2QsaUJBQWlCO0FBQUEsSUFDakIsY0FBYztBQUFBLE1BQ1osTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLHNCQUFzQjtBQUFBLElBQ3RCLGlCQUFpQjtBQUFBLElBQ2pCLFVBQVU7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNSO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFlBQVk7QUFBQSxNQUNWLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLEtBQUs7QUFBQSxRQUNIO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsZ0JBQWdCO0FBQUEsTUFDZCxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGNBQWM7QUFBQSxNQUNaO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtB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
