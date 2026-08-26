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

// scratch/king-power-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createKingPowerStoreBuildingModel: () => createKingPowerStoreBuildingModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "king-power-store-building",
  "name": "King Power Store Building",
  "exportName": "KingPowerStoreBuilding",
  "materials": [
    {
      "id": "wall",
      "color": 14535854,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 5002335,
      "roughness": 0.94,
      "metalness": 0
    },
    {
      "id": "navy",
      "color": 1909815,
      "roughness": 0.48,
      "metalness": 0
    },
    {
      "id": "fascia",
      "color": 1909815,
      "roughness": 0.4,
      "metalness": 0,
      "envMapIntensity": 0.6
    },
    {
      "id": "glass",
      "color": 9145736,
      "roughness": 0.12,
      "metalness": 0,
      "opacity": 0.93,
      "envMapIntensity": 1.1
    },
    {
      "id": "coping",
      "color": 6974316,
      "roughness": 0.82,
      "metalness": 0
    },
    {
      "id": "galv",
      "color": 9278618,
      "roughness": 0.52,
      "metalness": 0.3
    }
  ],
  "geometry": {
    "shellFront": 3.22,
    "fasciaWall": {
      "cy": 4,
      "cz": 3.1,
      "h": 0.9,
      "d": 0.36
    },
    "fasciaWallMaterial": "wall",
    "frameMaterial": "navy",
    "fascia": {
      "w": 5.2,
      "h": 0.92,
      "cy": 3.62,
      "cz": 3.44
    },
    "glazing": {
      "w": 5.3,
      "h": 2.85,
      "cy": 1.58,
      "cz": 3.35
    },
    "frame": [
      [
        -2.68,
        1.58,
        3.41,
        0.09,
        2.97,
        0.18
      ],
      [
        2.68,
        1.58,
        3.41,
        0.09,
        2.97,
        0.18
      ],
      [
        0,
        3.02,
        3.41,
        5.45,
        0.09,
        0.18
      ],
      [
        0,
        0.14,
        3.41,
        5.45,
        0.1,
        0.18
      ],
      [
        -0.62,
        1.5,
        3.41,
        0.08,
        2.8,
        0.18
      ],
      [
        0.62,
        1.5,
        3.41,
        0.08,
        2.8,
        0.18
      ],
      [
        0,
        2.66,
        3.41,
        1.32,
        0.12,
        0.18
      ]
    ],
    "mullions": {
      "w": 0.07,
      "h": 2.89,
      "cy": 1.56,
      "cz": 3.41,
      "x": [
        -1.9,
        -1.28,
        1.28,
        1.9
      ]
    },
    "frontFeature": {
      "name": "Navy fascia band and corner wrap",
      "material": "navy",
      "boxes": [
        [
          0,
          3.62,
          3.33,
          7.92,
          1.56,
          0.18
        ],
        [
          3.9,
          3.395,
          2.35,
          0.12,
          1.11,
          1.8
        ]
      ]
    },
    "extraFeature": {
      "name": "Parapet coping",
      "material": "coping",
      "boxes": [
        [
          0,
          4.52,
          3.1,
          7.96,
          0.16,
          0.44
        ],
        [
          -3.88,
          4.03,
          -0.29,
          0.16,
          0.16,
          6.38
        ],
        [
          3.88,
          4.03,
          -0.29,
          0.16,
          0.16,
          6.38
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
      "name": "Service door",
      "material": "wall",
      "boxes": [
        [
          3.96,
          1.15,
          -1.35,
          0.06,
          2.2,
          1
        ]
      ]
    },
    "condensers": [
      [
        2.05,
        -2.1,
        0
      ],
      [
        2.95,
        -2.75,
        0
      ]
    ]
  },
  "graphic": {
    "background": "#1D2437",
    "ops": [
      {
        "type": "text",
        "text": "KING POWER",
        "x0": 0.17,
        "x1": 0.83,
        "cy": 0.62,
        "size": 0.34,
        "fill": "#F4F1EA"
      },
      {
        "type": "text",
        "text": "\u265B",
        "x0": 0.455,
        "x1": 0.545,
        "cy": 0.24,
        "size": 0.26,
        "fill": "#C9A227"
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
function createKingPowerStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "King Power Store Building";
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
  const root = createKingPowerStoreBuildingModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogS2luZyBQb3dlciBTdG9yZSBCdWlsZGluZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyBhbmRcbiAqIGluc3RhbmNpbmcgYXJlIGhhbmQtcm9sbGVkIGJlbG93IC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpcyBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDQuNjAgeCA3LjAwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsIHNob3Bmcm9udCBmYWNpbmcgK1ouXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MTYgdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogT25lIG9mIHRoYWlraXQncyBzaGFyZWQgcmV0YWlsLW1vZHVsZSBidWlsZGluZ3MuIFRoZSBzaGVsbCBmcm9udCBmYWNlIHNpdHMgYXQgej0rMi41MCByYXRoZXJcbiAqIHRoYW4gdGhlIGVudmVsb3BlIGVkZ2Ugc28gdGhlIGVudHJhbmNlIGNhbm9weSBjYW4gY2FudGlsZXZlciBmb3J3YXJkIGFuZCBzdGlsbCBsYW5kIGV4YWN0bHkgb25cbiAqIHRoZSBkZWNsYXJlZCA3LjAgbSBkZXB0aC4gRXZlcnkgc3VyZmFjZSBwYWlyIG9uIHRoZSBmYWNhZGUgaXMgZGVsaWJlcmF0ZWx5IG9mZnNldCBpbiBkZXB0aDpcbiAqIHR3byBzdXJmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IHRlYXIgaW50byBpbnRlcmxlYXZlZCB0cmlhbmdsZXMgYXMgdGhlXG4gKiBjYW1lcmEgbW92ZXMsIGFuZCBhdXRob3JpbmcgY29tcG9uZW50cyBmbHVzaCBhZ2FpbnN0IG9uZSBhbm90aGVyIHByb2R1Y2VzIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImtpbmctcG93ZXItc3RvcmUtYnVpbGRpbmdcIixcbiAgICBcIm5hbWVcIjogXCJLaW5nIFBvd2VyIFN0b3JlIEJ1aWxkaW5nXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiS2luZ1Bvd2VyU3RvcmVCdWlsZGluZ1wiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndhbGxcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDUzNTg1NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44OCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRlY2tcIixcbiAgICAgICAgXCJjb2xvclwiOiA1MDAyMzM1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk0LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwibmF2eVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE5MDk4MTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNDgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmYXNjaWFcIixcbiAgICAgICAgXCJjb2xvclwiOiAxOTA5ODE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDAuNlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTE0NTczNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xMixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTMsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDEuMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNvcGluZ1wiLFxuICAgICAgICBcImNvbG9yXCI6IDY5NzQzMTYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJnYWx2XCIsXG4gICAgICAgIFwiY29sb3JcIjogOTI3ODYxOCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4zXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwic2hlbGxGcm9udFwiOiAzLjIyLFxuICAgICAgXCJmYXNjaWFXYWxsXCI6IHtcbiAgICAgICAgXCJjeVwiOiA0LFxuICAgICAgICBcImN6XCI6IDMuMSxcbiAgICAgICAgXCJoXCI6IDAuOSxcbiAgICAgICAgXCJkXCI6IDAuMzZcbiAgICAgIH0sXG4gICAgICBcImZhc2NpYVdhbGxNYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgIFwiZnJhbWVNYXRlcmlhbFwiOiBcIm5hdnlcIixcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJ3XCI6IDUuMixcbiAgICAgICAgXCJoXCI6IDAuOTIsXG4gICAgICAgIFwiY3lcIjogMy42MixcbiAgICAgICAgXCJjelwiOiAzLjQ0XG4gICAgICB9LFxuICAgICAgXCJnbGF6aW5nXCI6IHtcbiAgICAgICAgXCJ3XCI6IDUuMyxcbiAgICAgICAgXCJoXCI6IDIuODUsXG4gICAgICAgIFwiY3lcIjogMS41OCxcbiAgICAgICAgXCJjelwiOiAzLjM1XG4gICAgICB9LFxuICAgICAgXCJmcmFtZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42OCxcbiAgICAgICAgICAxLjU4LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgMC4wOSxcbiAgICAgICAgICAyLjk3LFxuICAgICAgICAgIDAuMThcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNjgsXG4gICAgICAgICAgMS41OCxcbiAgICAgICAgICAzLjQxLFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMi45NyxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDMuMDIsXG4gICAgICAgICAgMy40MSxcbiAgICAgICAgICA1LjQ1LFxuICAgICAgICAgIDAuMDksXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgNS40NSxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTAuNjIsXG4gICAgICAgICAgMS41LFxuICAgICAgICAgIDMuNDEsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAyLjgsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC42MixcbiAgICAgICAgICAxLjUsXG4gICAgICAgICAgMy40MSxcbiAgICAgICAgICAwLjA4LFxuICAgICAgICAgIDIuOCxcbiAgICAgICAgICAwLjE4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIuNjYsXG4gICAgICAgICAgMy40MSxcbiAgICAgICAgICAxLjMyLFxuICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgMC4xOFxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJtdWxsaW9uc1wiOiB7XG4gICAgICAgIFwid1wiOiAwLjA3LFxuICAgICAgICBcImhcIjogMi44OSxcbiAgICAgICAgXCJjeVwiOiAxLjU2LFxuICAgICAgICBcImN6XCI6IDMuNDEsXG4gICAgICAgIFwieFwiOiBbXG4gICAgICAgICAgLTEuOSxcbiAgICAgICAgICAtMS4yOCxcbiAgICAgICAgICAxLjI4LFxuICAgICAgICAgIDEuOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJmcm9udEZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJOYXZ5IGZhc2NpYSBiYW5kIGFuZCBjb3JuZXIgd3JhcFwiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwibmF2eVwiLFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMy42MixcbiAgICAgICAgICAgIDMuMzMsXG4gICAgICAgICAgICA3LjkyLFxuICAgICAgICAgICAgMS41NixcbiAgICAgICAgICAgIDAuMThcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMuOSxcbiAgICAgICAgICAgIDMuMzk1LFxuICAgICAgICAgICAgMi4zNSxcbiAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAxLjExLFxuICAgICAgICAgICAgMS44XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJleHRyYUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJQYXJhcGV0IGNvcGluZ1wiLFxuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiY29waW5nXCIsXG4gICAgICAgIFwiYm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICA0LjUyLFxuICAgICAgICAgICAgMy4xLFxuICAgICAgICAgICAgNy45NixcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjQ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMy44OCxcbiAgICAgICAgICAgIDQuMDMsXG4gICAgICAgICAgICAtMC4yOSxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgNi4zOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy44OCxcbiAgICAgICAgICAgIDQuMDMsXG4gICAgICAgICAgICAtMC4yOSxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgNi4zOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDQuMDMsXG4gICAgICAgICAgICAtMy4zNyxcbiAgICAgICAgICAgIDcuOTYsXG4gICAgICAgICAgICAwLjE2LFxuICAgICAgICAgICAgMC4xNFxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwic2lkZUZlYXR1cmVcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCJTZXJ2aWNlIGRvb3JcIixcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcIndhbGxcIixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMy45NixcbiAgICAgICAgICAgIDEuMTUsXG4gICAgICAgICAgICAtMS4zNSxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAyLjIsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJjb25kZW5zZXJzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgLTIuMSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjk1LFxuICAgICAgICAgIC0yLjc1LFxuICAgICAgICAgIDBcbiAgICAgICAgXVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJncmFwaGljXCI6IHtcbiAgICAgIFwiYmFja2dyb3VuZFwiOiBcIiMxRDI0MzdcIixcbiAgICAgIFwib3BzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICBcInRleHRcIjogXCJLSU5HIFBPV0VSXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjE3LFxuICAgICAgICAgIFwieDFcIjogMC44MyxcbiAgICAgICAgICBcImN5XCI6IDAuNjIsXG4gICAgICAgICAgXCJzaXplXCI6IDAuMzQsXG4gICAgICAgICAgXCJmaWxsXCI6IFwiI0Y0RjFFQVwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJ0ZXh0XCIsXG4gICAgICAgICAgXCJ0ZXh0XCI6IFwiXHUyNjVCXCIsXG4gICAgICAgICAgXCJ4MFwiOiAwLjQ1NSxcbiAgICAgICAgICBcIngxXCI6IDAuNTQ1LFxuICAgICAgICAgIFwiY3lcIjogMC4yNCxcbiAgICAgICAgICBcInNpemVcIjogMC4yNixcbiAgICAgICAgICBcImZpbGxcIjogXCIjQzlBMjI3XCJcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHI6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8gLS0gd2hpY2ggaXNcbiAqIHdoYXQgcmVuZGVycyBhIGJ1aWxkaW5nIG1pZC1ncmV5LlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgbWV0YWxzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZVxuICogbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG8gcmVmbGVjdFxuICogcmVuZGVycyBibGFjay4gVGhlIGFsYmVkbyBzdGF5cyBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqXG4gKiBUaGUgb25lIHByaW50ZWQgZ3JhcGhpYywgdGhlIGJyYW5kIGZhc2NpYSwgaXMgYSBjYW52YXMgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLlxuICogVGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIGRvZXMgbm90IGFmZmVjdCB0aGF0LCBhbmQgaXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVLaW5nUG93ZXJTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdLaW5nIFBvd2VyIFN0b3JlIEJ1aWxkaW5nJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuICAvKiBTaGVsbDogU09MSUQgYm94LCBub3QgYSByaW5nLiBUaGUgcHJvcCBpcyBhbiBleHRlcmlvciBzaGVsbCBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsIHNvXG4gICAqIGFuIGludGVyaW9yIGNvc3RzIGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2VlcyAtLSBhbmQgc29saWRcbiAgICogbWVhbnMgdGhlIHNob3Bmcm9udCBuZWVkcyBubyBvcGVuaW5nIGN1dCBpbiBpdCwgd2hpY2ggcmVtb3ZlcyBhbGwgZm91ciByZXZlYWwgZmFjZXMgYW5kIHRoZVxuICAgKiB6LWZpZ2h0aW5nIHRoZXkgY2F1c2UuIFNldCAwLjA2IG0gSU5TSURFIHRoZSBwYXJhcGV0IHJpbmcgb24gZXZlcnkgZWxldmF0aW9uIHNvIG5vIHdhbGwgZmFjZVxuICAgKiBpcyBldmVyIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCBhIHBhcmFwZXQgZmFjZS4gKi9cbiAgLy8gSG93IGZhciBmb3J3YXJkIHRoZSBzaGVsbCBmYWNlIHNpdHMuIFRoZSBERUZBVUxUIDIuNTAgbGVhdmVzIDEuMDAgbSBmb3IgYW4gZW50cmFuY2UgY2Fub3B5IHRvXG4gIC8vIGNhbnRpbGV2ZXIgaW50bywgc28gdGhlIGNhbm9weSBub3NlIGxhbmRzIGV4YWN0bHkgb24gdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoLiBBIGJ1aWxkaW5nIHdpdGhcbiAgLy8gTk8gZm9yd2FyZCBjYW50aWxldmVyIG11c3QgcHVzaCB0aGlzIG91dCBpbnN0ZWFkLCBvciB0aGUgcHJvcCBpcyBidWlsdCBzaG9ydCBvZiBpdHMgZGVjbGFyZWRcbiAgLy8gZW52ZWxvcGUgLS0gTUsgZmlyc3QgY2FtZSBvdXQgNi4zIG0gZGVlcCBhZ2FpbnN0IGEgZGVjbGFyZWQgNy4wIGZvciBleGFjdGx5IHRoYXQgcmVhc29uLlxuICBjb25zdCBTRiA9IChHLnNoZWxsRnJvbnQgPz8gMi41MCkgYXMgbnVtYmVyO1xuICBhZGQoJ2J1aWxkaW5nLXNoZWxsJywgJ0J1aWxkaW5nIHNoZWxsJywgYm94QXQoMCwgMS43NzUsIChTRiAtIDMuNDQpIC8gMiwgNy44OCwgMy41NSwgU0YgKyAzLjQ0KSwgJ3dhbGwnKTtcbiAgY29sbGlkZXJzWydidWlsZGluZy1zaGVsbCddID0ge1xuICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAyLjMsIDBdLCBoYWxmRXh0ZW50czogWzQuMCwgMi4zLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIFJvb2YgZGVjayBzcGFucyB5IDMuNTAuLjMuNjIgc28gaXRzIHVuZGVyc2lkZSBpcyBzdW5rIElOVE8gdGhlIHNoZWxsIHJhdGhlciB0aGFuIHJlc3Rpbmcgb25cbiAgICogaXQuIEF1dGhvcmVkIGZsdXNoLCB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tIGZhY2Ugd2VyZSBib3RoIGF0XG4gICAqIHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UuICovXG4gIGFkZCgncm9vZi1kZWNrJywgJ1Jvb2YgZGVjaycsIGJveEF0KDAsIDMuNTYsIChTRiAtIDAuMDIgLSAzLjQyKSAvIDIsIDcuOCwgMC4xMiwgU0YgKyAzLjQwKSwgJ2RlY2snKTtcblxuICAvKiBQYXJhcGV0OiBmcm9udCBmYXNjaWEgd2FsbCBwbHVzIHRocmVlIHVwc3RhbmRzLCBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50IGFuZCBvbmUgZHJhdyBjYWxsLlxuICAgKiBUaGUgZnJvbnQgaXMgdGFsbGVyIHRoYW4gdGhlIHNpZGVzLCB3aGljaCBhIHBsYW4gZXh0cnVzaW9uIGNhbm5vdCBleHByZXNzLiBPdXRlciBmYWNlcyBzdGFuZFxuICAgKiAwLjA2IG0gcHJvdWQgb2YgdGhlIHdhbGxzIC0tIGEgY29waW5nIGRyaXAgZWRnZSwgYW5kIHdoYXQga2VlcHMgdGhlbSBvZmYgdGhlIHdhbGwgcGxhbmVzLiAqL1xuICBhZGQoJ3BhcmFwZXQnLCAnUGFyYXBldCByaW5nIGFuZCBmYXNjaWEgd2FsbCcsIGJveGVzKFtcbiAgICBbMCwgRy5mYXNjaWFXYWxsLmN5LCBHLmZhc2NpYVdhbGwuY3osIDguMCwgRy5mYXNjaWFXYWxsLmgsIEcuZmFzY2lhV2FsbC5kXSxcbiAgICBbLTMuODgsIDMuNzUsIChTRiAtIDAuMzAgLSAzLjUpIC8gMiwgMC4yNCwgMC40LCBTRiArIDMuMjBdLFxuICAgIFszLjg4LCAzLjc1LCAoU0YgLSAwLjMwIC0gMy41KSAvIDIsIDAuMjQsIDAuNCwgU0YgKyAzLjIwXSxcbiAgICBbMCwgMy43NSwgLTMuMzgsIDguMCwgMC40LCAwLjI0XSxcbiAgICAvLyBBbnl0aGluZyBlbHNlIGluIHRoZSBTQU1FIG1hdGVyaWFsIGZvbGRzIGluIGhlcmUgcmF0aGVyIHRoYW4gY29zdGluZyBpdHMgb3duIGRyYXcgY2FsbCAtLVxuICAgIC8vIGZ1bGwtaGVpZ2h0IGZhY2FkZSBjbGFkZGluZywgY29ybmVyIHBpbGFzdGVycywgYSBwbGludGguIFRoaXMgaXMgdGhlIG1lcmdlIGxldmVyOiB0d29cbiAgICAvLyBwYXJ0cyB0aGF0IHNoYXJlIGEgbWF0ZXJpYWwgc2hvdWxkIG5ldmVyIGJlIHR3byBzdWJtaXNzaW9ucy5cbiAgICAuLi4oKEcucGFyYXBldEV4dHJhID8/IFtdKSBhcyBudW1iZXJbXVtdKSxcbiAgXSksIEcuZmFzY2lhV2FsbE1hdGVyaWFsKTtcblxuICAvKiBCcmFuZCBmYXNjaWEgcGFuZWwuIFN1bmsgSU5UTyB0aGUgZmFzY2lhIHdhbGwgYXQgdGhlIGJhY2sgYW5kIHN0YW5kaW5nIHByb3VkIGF0IHRoZSBmcm9udCwgc29cbiAgICogaXQgb3ZlcmxhcHMgaXRzIHN1cnJvdW5kIGluc3RlYWQgb2YgbWVldGluZyBpdC4gVVZzIGFyZSBBVVRIT1JFRDogdGhlICtaIGZhY2Ugc2FtcGxlcyB0aGVcbiAgICogd29yZG1hcmsgYmFuZCBvZiB0aGUgY2FudmFzIGFuZCB0aGUgb3RoZXIgZml2ZSBmYWNlcyBzYW1wbGUgYSBwbGFpbiBjb3JuZXIgb2YgdGhlIHNhbWVcbiAgICogY2FudmFzLCB3aGljaCBrZWVwcyB0aGUgYnJhbmQgZ3JhcGhpYyBhdCBPTkUgbWF0ZXJpYWwgYW5kIE9ORSBkcmF3IGNhbGwuICovXG4gIHtcbiAgICBjb25zdCBmID0gRy5mYXNjaWE7XG4gICAgbGV0IGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChmLnNoYXBlID09PSAnZGlzYycpIHtcbiAgICAgIC8vIEEgcm91bmQgc2lnbiBkaXNjLCBidWlsdCBhcyBhIENpcmNsZUdlb21ldHJ5IGZhY2UgcGx1cyBhIHNoYWxsb3cgY3lsaW5kZXIgYm9keS5cbiAgICAgIC8vXG4gICAgICAvLyBUaGUgb2J2aW91cyBjb25zdHJ1Y3Rpb24gLS0gb25lIGN5bGluZGVyIHJvdGF0ZWQgdG8gZmFjZSArWiAtLSBwdXRzIHRoZSB3b3JkbWFyayBvbiBpdHNcbiAgICAgIC8vIHNpZGUsIGJlY2F1c2UgQ3lsaW5kZXJHZW9tZXRyeSBsYXlzIGl0cyBjYXAgVVZzIG91dCBpbiB0aGUgY3lsaW5kZXIncyBvd24gWFogcGxhbmUgYW5kXG4gICAgICAvLyByb3RhdGluZyB0aGUgZ2VvbWV0cnkgZG9lcyBub3Qgcm90YXRlIHRoZW0gd2l0aCBpdC4gQ2lyY2xlR2VvbWV0cnkncyBVVnMgYXJlIGFscmVhZHlcbiAgICAgIC8vICh4LCB5KSBpbiB0aGUgcGxhbmUgaXQgZmFjZXMsIHNvIHRoZSBzcXVhcmUgY2FudmFzIGxhbmRzIHRoZSByaWdodCB3YXkgdXAgd2l0aCBub1xuICAgICAgLy8gY29ycmVjdGlvbi4gVGhlIGJvZHkncyBVVnMgYXJlIGNvbGxhcHNlZCBvbnRvIGEgcGxhaW4gY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcyBzbyB0aGVcbiAgICAgIC8vIGRpc2MncyBlZGdlIGRvZXMgbm90IHNtZWFyIHRoZSB3b3JkbWFyayBhcm91bmQgaXRzIHJpbS5cbiAgICAgIGNvbnN0IHIgPSBmLncgLyAyO1xuICAgICAgY29uc3QgZmFjZSA9IG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShyLCAzMik7XG4gICAgICBmYWNlLnRyYW5zbGF0ZSgwLCAwLCAwLjA2MSk7XG4gICAgICBjb25zdCBib2R5ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgMC4xMiwgMzIpO1xuICAgICAgYm9keS5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gICAgICBjb25zdCBidXYgPSBib2R5LmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1di5jb3VudDsgaSsrKSBidXYuc2V0WFkoaSwgMC4wMiwgMC4wMik7XG4gICAgICBidXYubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgZyA9IG1lcmdlR2VvcyhbZmFjZSwgYm9keV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGYudywgZi5oLCAwLjEyKTtcbiAgICAgIGNvbnN0IHV2ID0gYi5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB7XG4gICAgICAgIGlmIChpID49IDE2ICYmIGkgPCAyMCkgdXYuc2V0WFkoaSwgdXYuZ2V0WChpKSwgMC4xMjUgKyB1di5nZXRZKGkpICogMC44NzUpO1xuICAgICAgICBlbHNlIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAwLjAzLCB1di5nZXRZKGkpICogMC4wMyk7XG4gICAgICB9XG4gICAgICB1di5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgICBnID0gYjtcbiAgICB9XG4gICAgZy50cmFuc2xhdGUoMCwgZi5jeSwgZi5jeik7XG4gICAgYWRkKCdmYXNjaWEtcGFuZWwnLCAnQnJhbmQgZmFzY2lhIHBhbmVsJywgZywgJ2Zhc2NpYScpO1xuICB9XG5cbiAgLyogT25lIGdsYXppbmcgcGFuZSwgbm90IG9uZSBwZXIgYmF5OiB0aGUgbXVsbGlvbiBncmlkIGluIGZyb250IGRvZXMgdGhlIGRpdmlkaW5nLiBPdmVybGFwcyBJTlRPXG4gICAqIHRoZSBmYWNhZGUgYXQgdGhlIGJhY2sgYW5kIHNpdHMgUkVDRVNTRUQgYmVoaW5kIHRoZSBmcmFtaW5nIGF0IHRoZSBmcm9udC4gTW9zdGx5IG9wYXF1ZSBieVxuICAgKiBkZXNpZ24gLS0gdGhlcmUgaXMgbm8gaW50ZXJpb3IgYmVoaW5kIGl0LCBzbyBhIHRyYW5zcGFyZW50IHBhbmUgd291bGQgcmVhZCBhcyBhIGhvbGUuICovXG4gIGFkZCgnc2hvcGZyb250LWdsYXppbmcnLCAnU2hvcGZyb250IGdsYXppbmcnLCBib3hBdCgwLCBHLmdsYXppbmcuY3ksIEcuZ2xhemluZy5jeiA/PyAyLjUxLCBHLmdsYXppbmcudywgRy5nbGF6aW5nLmgsIDAuMTApLCAnZ2xhc3MnKTtcblxuICAvKiBGcmFtaW5nLCB0cmFuc29tLCBraWNrIHJhaWwsIGRvb3IgamFtYnMgYW5kIGhlYWRlciBNRVJHRUQgaW50byBvbmUgY29tcG9uZW50LiBFdmVyeSBwYXJ0IGlzXG4gICAqIHRoZSBzYW1lIG1ldGFsOyBmb2xkaW5nIHRoZW0gdG9nZXRoZXIgaXMgdGhlIGRyYXctY2FsbCBsZXZlciBjaG9zZW4gaW4gdGhlIGJsb2Nrb3V0LCBub3QgYW5cbiAgICogb3B0aW1pc2F0aW9uIGRlZmVycmVkIHRvIHRoZSBlbmQgLS0gYSBwYXJ0IHNwbGl0IGZvciBhdXRob3JpbmcgY29udmVuaWVuY2UgY2Fubm90IGJlIG1lcmdlZFxuICAgKiBhZnRlcndhcmRzIG9uY2UgYSBwaXZvdCBoYW5ncyBvZmYgaXQuIEZyb250IGZhY2Ugc3RhbmRzIHByb3VkIG9mIGdsYXppbmcgYW5kIG11bGxpb25zLiAqL1xuICBhZGQoJ3Nob3Bmcm9udC1mcmFtZScsICdTaG9wZnJvbnQgZnJhbWluZyBhbmQgZG9vciBiYXknLCBib3hlcyhHLmZyYW1lKSwgRy5mcmFtZU1hdGVyaWFsKTtcblxuICAvKiBTaWRlIGZlYXR1cmU6IHNodXR0ZXIsIHNlcnZpY2UgZG9vciBvciBsb3V2cmUsIHBlciBwbGF0ZS4gU3RhbmRzIHByb3VkIG9mIHRoZSB3YWxsIGZhY2UgYnV0XG4gICAqIGRlbGliZXJhdGVseSBOT1Qgb3V0IHRvIHRoZSBwYXJhcGV0IHBsYW5lIGF0ICstNC4wMCAtLSBhIGZhY2UgYXQgZXhhY3RseSArLTQuMDAgd291bGQgYmVcbiAgICogY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyIGZhY2UsIHdoaWNoIHRoZSBib3VuZGluZy1ib3ggY29wbGFuYXJpdHkgY2hlY2tcbiAgICogZmxhZ3MgZXZlbiB0aG91Z2ggdGhlIHR3byBuZXZlciBvdmVybGFwIGluIFkuICovXG4gIGlmIChHLnNpZGVGZWF0dXJlKSBhZGQoJ3NpZGUtZmVhdHVyZScsIEcuc2lkZUZlYXR1cmUubmFtZSwgYm94ZXMoRy5zaWRlRmVhdHVyZS5ib3hlcyksIEcuc2lkZUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIEZyb250IGZlYXR1cmU6IGNsYWRkaW5nIGJhbmQsIEFUTSBiYW5rLCB1cHBlci1zdG9yZXkgYmFuZCBvciBmb3JlY291cnQsIHBlciBwbGF0ZS4gKi9cbiAgaWYgKEcuZnJvbnRGZWF0dXJlKSBhZGQoJ2Zyb250LWZlYXR1cmUnLCBHLmZyb250RmVhdHVyZS5uYW1lLCBib3hlcyhHLmZyb250RmVhdHVyZS5ib3hlcyksIEcuZnJvbnRGZWF0dXJlLm1hdGVyaWFsKTtcblxuICAvKiBBIHRoaXJkIG1lcmdlZCBzbG90LCBmb3Igd2hhdGV2ZXIgdGhlIHBsYXRlIGhhcyB0aGF0IHRoZSB0d28gYWJvdmUgZG8gbm90IGNvdmVyIC0tIGEgcGFyYXBldFxuICAgKiBjb3BpbmcsIGEga2VyYiwgYSBmb3JlY291cnQgY29sdW1uIGJhc2UuIFNhbWUgcnVsZSBhcyB0aGUgb3RoZXJzOiBldmVyeXRoaW5nIGluIGl0IHNoYXJlcyBvbmVcbiAgICogbWF0ZXJpYWwgYW5kIGlzIHN1Ym1pdHRlZCBvbmNlLiAqL1xuICBpZiAoRy5leHRyYUZlYXR1cmUpIGFkZCgnZXh0cmEtZmVhdHVyZScsIEcuZXh0cmFGZWF0dXJlLm5hbWUsIGJveGVzKEcuZXh0cmFGZWF0dXJlLmJveGVzKSwgRy5leHRyYUZlYXR1cmUubWF0ZXJpYWwpO1xuXG4gIC8qIE11bGxpb25zOiB0aGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCBhIHNob3Bmcm9udC4gSW5zdGFuY2VzXG4gICAqIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGFzIGNvbXBvbmVudHMgdGhleSB3b3VsZCBoYXZlIGNvc3Qgb25lIGVhY2ggYW5kIGJsb3duIHRoZVxuICAgKiBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBzaXQgSU5TSURFIHRoZSBmcmFtZSBkZXB0aCBiYW5kIGF0IGJvdGggZW5kcyBzbyB0aGV5IGFyZSBub3RcbiAgICogY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2YgdGhlIGdsYXppbmcgc28gdGhlIGdsYXNzIHJlYWRzIGFzIHJlY2Vzc2VkLiAqL1xuICB7XG4gICAgY29uc3QgbSA9IEcubXVsbGlvbnM7XG4gICAgY29uc3QgbWF0cyA9IChtLnggYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBtLmN5LCBtLmN6ID8/IDIuNTgpKTtcbiAgICBhZGRJbnN0KCdzaG9wZnJvbnQtbXVsbGlvbnMnLCAnU2hvcGZyb250IG11bGxpb25zJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KG0udywgbS5oLCAwLjA4KSwgRy5mcmFtZU1hdGVyaWFsLCBtYXRzKTtcbiAgfVxuXG4gIC8qIFJvb2Z0b3AgY29uZGVuc2VyczogY2FzaW5nLCBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAgICogRmVldCBzdGFydCBiZWxvdyB0aGUgZGVjayB0b3Agc28gdGhlIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS4gKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgMC40NiwgMCwgMC45NSwgMC43MiwgMC44NSksXG4gICAgICBjeWxBdCgwLCAwLjg3LCAwLCAwLjMwLCAwLjEwLCAxNiksXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IGZ4IG9mIFstMC40LCAwLjRdKSBmb3IgKGNvbnN0IGZ6IG9mIFstMC4zNSwgMC4zNV0pIHBhcnRzLnB1c2goYm94QXQoZngsIDAuMDUsIGZ6LCAwLjA4LCAwLjEwLCAwLjA4KSk7XG4gICAgY29uc3QgdW5pdCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgY29uc3QgbWF0cyA9IChHLmNvbmRlbnNlcnMgYXMgbnVtYmVyW11bXSkubWFwKChbeCwgeiwgeWF3XSkgPT5cbiAgICAgIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgMy42MCwgeiksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSksXG4gICAgICApKTtcbiAgICBhZGRJbnN0KCdwbGFudC1jb25kZW5zZXJzJywgJ1Jvb2Z0b3AgY29uZGVuc2VyIHVuaXRzJywgdW5pdCwgJ2dhbHYnLCBtYXRzKTtcbiAgfVxuXG4gIC8qIE9wdGlvbmFsIGluc3RhbmNlZCBleHRyYTogY2Fub3B5IHBsYXRlcywgcGlsYXN0ZXJzIG9yIGZvcmVjb3VydCBjb2x1bW5zLCBwZXIgcGxhdGUuICovXG4gIGlmIChHLmV4dHJhU3lzdGVtKSB7XG4gICAgY29uc3QgZSA9IEcuZXh0cmFTeXN0ZW07XG4gICAgbGV0IHVuaXQ6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5O1xuICAgIGlmIChlLmtpbmQgPT09ICdwbGF0ZScpIHtcbiAgICAgIHVuaXQgPSBtZXJnZUdlb3MoW2JveEF0KDAsIDAsIDAsIGUudywgZS5oLCBlLmQpLCBjeWxBdCgwLCAtZS5oIC8gMiAtIDAuMDE1LCAwLCAwLjA4NSwgMC4wMywgMTIpXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVuaXQgPSBib3hBdCgwLCAwLCAwLCBlLncsIGUuaCwgZS5kKTtcbiAgICB9XG4gICAgY29uc3QgbWF0cyA9IChlLmF0IGFzIG51bWJlcltdW10pLm1hcCgoW3gsIHksIHpdKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIHksIHopKTtcbiAgICBhZGRJbnN0KGUuaWQsIGUubmFtZSwgdW5pdCwgZS5tYXRlcmlhbCwgbWF0cywgZS50b25lcyA/IG1hdHMubWFwKChfLCBpKSA9PiBlLnRvbmVzW2kgJSBlLnRvbmVzLmxlbmd0aF0pIDogdW5kZWZpbmVkKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJyYW5kIGZhc2NpYSBjYW52YXMgKi9cblxuLyoqIERyYXcgdGhlIGJyYW5kIHdvcmRtYXJrIG9udG8gYSBjYW52YXMgYW5kIGFzc2lnbiBpdCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24uIFRoaXMgaXMgdGhlXG4gKiAgZG9jdW1lbnRlZCByb3V0ZSBmb3IgYSBwcmludGVkIGJyYW5kIGZhc2NpYSBhbmQgaXMgdW5hZmZlY3RlZCBieSB0aGUgbWF0ZXJpYWwncyBgdGV4dHVyZWxlc3NgXG4gKiAgZGVjbGFyYXRpb24gLS0gd2hhdCB0aGF0IHNraXBzIGlzIHRoZSBmaXZlLWNhbnZhcyBQUk9DRURVUkFMIHNldCwgYSBkaWZmZXJlbnQgdGhpbmcgZW50aXJlbHkuXG4gKlxuICogIFRleHQgaXMgZml0dGVkIHRvIGl0cyBmaWVsZCBieSBNRUFTVVJFTUVOVCByYXRoZXIgdGhhbiBieSBhIGZvbnQtc2l6ZSByYXRpbzogaGVhZGxlc3MgQ2hyb21lJ3NcbiAqICBmb250IGZhbGxiYWNrIGRlY2lkZXMgdGhlIHJlYWwgYWR2YW5jZSB3aWR0aHMsIHNvIHRoZSBvbmx5IHJlbGlhYmxlIHdheSB0byBmaWxsIGEga25vd24gYm94IGlzXG4gKiAgdG8gbWVhc3VyZSB0aGUgc3RyaW5nIGFuZCBzY2FsZSBpdCBob3Jpem9udGFsbHkuICovXG5mdW5jdGlvbiBhcHBseUZhc2NpYUdyYXBoaWMocm9vdDogVEhSRUUuR3JvdXApOiB2b2lkIHtcbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZSB8IHVuZGVmaW5lZDtcbiAgY29uc3QgbWVzaCA9IHJ0Py5tZXNoZXM/LlsnZmFzY2lhLXBhbmVsJ107XG4gIGlmICghbWVzaCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCkgcmV0dXJuO1xuXG4gIGNvbnN0IGcgPSBDT05GSUcuZ3JhcGhpYyBhcyBhbnk7XG4gIC8vIEEgcm91bmQgc2lnbiBuZWVkcyBhIFNRVUFSRSBjYW52YXM6IHRoZSBjeWxpbmRlciBjYXAgbWFwcyB0aGUgY2lyY2xlIGludG8gdGhlIHVuaXQgc3F1YXJlLFxuICAvLyBzbyBhIDIwNDh4MzIwIHN0cmlwIHdvdWxkIHNxdWFzaCB0aGUgbWFyayBmbGF0LiBBIHJlY3Rhbmd1bGFyIGZhc2NpYSBrZWVwcyB0aGUgd2lkZSBzdHJpcCxcbiAgLy8gd2hlcmUgdGhlIGJvdHRvbSAxMi41JSBpcyB0aGUgcGxhaW4gY29ybmVyIGV2ZXJ5IG5vbi1mcm9udCBmYWNlIHNhbXBsZXMuXG4gIGNvbnN0IHNxdWFyZSA9ICEhZy5zcXVhcmU7XG4gIGNvbnN0IFcgPSBzcXVhcmUgPyA1MTIgOiAyMDQ4LCBIID0gc3F1YXJlID8gNTEyIDogMzIwO1xuICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgY2FudmFzLndpZHRoID0gVzsgY2FudmFzLmhlaWdodCA9IEg7XG4gIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICBpZiAoIWN0eCkgcmV0dXJuO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBnLmJhY2tncm91bmQ7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcbiAgY29uc3QgYmFuZCA9IHNxdWFyZSA/IEggOiBIICogMC44NzU7XG5cbiAgY29uc3QgZml0ID0gKHRleHQ6IHN0cmluZywgZm9udDogc3RyaW5nLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBjeTogbnVtYmVyLCBmaWxsOiBzdHJpbmcsIHN0cm9rZUNvbD86IHN0cmluZywgc3Ryb2tlVz86IG51bWJlcikgPT4ge1xuICAgIGN0eC5mb250ID0gZm9udDtcbiAgICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gICAgY3R4LnRleHRBbGlnbiA9ICdsZWZ0JztcbiAgICBjb25zdCB3ID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xuICAgIGNvbnN0IHMgPSAoeDEgLSB4MCkgLyB3O1xuICAgIGN0eC5zYXZlKCk7XG4gICAgY3R4LnRyYW5zbGF0ZSh4MCwgMCk7XG4gICAgY3R4LnNjYWxlKHMsIDEpO1xuICAgIGlmIChzdHJva2VDb2wpIHsgY3R4LmxpbmVKb2luID0gJ3JvdW5kJzsgY3R4LnN0cm9rZVN0eWxlID0gc3Ryb2tlQ29sOyBjdHgubGluZVdpZHRoID0gKHN0cm9rZVcgPz8gNikgLyBzOyBjdHguc3Ryb2tlVGV4dCh0ZXh0LCAwLCBjeSk7IH1cbiAgICBjdHguZmlsbFN0eWxlID0gZmlsbDtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgMCwgY3kpO1xuICAgIGN0eC5yZXN0b3JlKCk7XG4gIH07XG5cbiAgZm9yIChjb25zdCBvcCBvZiBnLm9wcyBhcyBhbnlbXSkge1xuICAgIGlmIChvcC50eXBlID09PSAncmVjdCcpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY29uc3QgeCA9IG9wLnggKiBXLCB5ID0gb3AueSAqIGJhbmQsIHcgPSBvcC53ICogVywgaCA9IG9wLmggKiBiYW5kLCByID0gKG9wLnIgPz8gMCkgKiBiYW5kO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgaWYgKHIgPiAwKSB7XG4gICAgICAgIGN0eC5tb3ZlVG8oeCArIHIsIHkpOyBjdHgubGluZVRvKHggKyB3IC0gciwgeSk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHggKyB3LCB5LCB4ICsgdywgeSArIHIpO1xuICAgICAgICBjdHgubGluZVRvKHggKyB3LCB5ICsgaCAtIHIpOyBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgdywgeSArIGgsIHggKyB3IC0gciwgeSArIGgpO1xuICAgICAgICBjdHgubGluZVRvKHggKyByLCB5ICsgaCk7IGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoLCB4LCB5ICsgaCAtIHIpO1xuICAgICAgICBjdHgubGluZVRvKHgsIHkgKyByKTsgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHIsIHkpO1xuICAgICAgfSBlbHNlIGN0eC5yZWN0KHgsIHksIHcsIGgpO1xuICAgICAgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgIH0gZWxzZSBpZiAob3AudHlwZSA9PT0gJ2NpcmNsZScpIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBvcC5maWxsO1xuICAgICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgICAgY3R4LmFyYyhvcC5jeCAqIFcsIG9wLmN5ICogYmFuZCwgb3AuciAqIGJhbmQsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgIGN0eC5maWxsKCk7XG4gICAgfSBlbHNlIGlmIChvcC50eXBlID09PSAndGV4dCcpIHtcbiAgICAgIGZpdChvcC50ZXh0LCBgJHtvcC5zdHlsZSA/PyAnYm9sZCd9ICR7TWF0aC5yb3VuZChvcC5zaXplICogYmFuZCl9cHggJHtvcC5mYW1pbHkgPz8gJ0FyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnfWAsXG4gICAgICAgIG9wLngwICogVywgb3AueDEgKiBXLCBvcC5jeSAqIGJhbmQsIG9wLmZpbGwsIG9wLnN0cm9rZSwgb3Auc3Ryb2tlVyA/IG9wLnN0cm9rZVcgKiBiYW5kIDogdW5kZWZpbmVkKTtcbiAgICB9XG4gIH1cblxuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICB0ZXguY29sb3JTcGFjZSA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlID8/IHRleC5jb2xvclNwYWNlO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIG1hdGVyaWFsLm1hcCA9IHRleDtcbiAgLy8gV2hpdGUgYmFzZSBzbyB0aGUgY2FudmFzIHNob3dzIGFzIGRyYXduIHJhdGhlciB0aGFuIHRpbnRlZCAtLSB0aGUgbWVhc3VyZWQgZmFzY2lhIGNvbG91ciBpc1xuICAvLyBhbHJlYWR5IHBhaW50ZWQgaW50byB0aGUgY2FudmFzIGJhY2tncm91bmQuXG4gIG1hdGVyaWFsLmNvbG9yLnNldEhleCgweGZmZmZmZik7XG4gIG1hdGVyaWFsLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUtpbmdQb3dlclN0b3JlQnVpbGRpbmdNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGFwcGx5RmFzY2lhR3JhcGhpYyhyb290KTtcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIEEgc3RhdGljIGV4dGVyaW9yIHNoZWxsIC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gVGhlIGRvb3JzIGFuZCBhbnlcbiAgICAvLyBzaHV0dGVyIGFyZSBhdXRob3JlZCBhcyBmaXhlZCBnZW9tZXRyeSwgc28gdGhleSBnZXQgbm8gYXhpczogYSBuYW1lZCBwaXZvdCBpcyBhIHByb21pc2VcbiAgICAvLyB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3IgaGFzXG4gICAgLy8gZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQXFDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsSUFDZCxjQUFjO0FBQUEsTUFDWixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0Esc0JBQXNCO0FBQUEsSUFDdEIsaUJBQWlCO0FBQUEsSUFDakIsVUFBVTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxZQUFZO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsUUFDSDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2QsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQUEsSUFDVCxjQUFjO0FBQUEsSUFDZCxPQUFPO0FBQUEsTUFDTDtBQUFBLFFBQ0UsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7QUFPRixTQUFTLFVBQVUsTUFBb0Q7QUFDckUsUUFBTSxRQUFnQyxDQUFDO0FBQ3ZDLFFBQU0sT0FBa0IsQ0FBQztBQUN6QixhQUFXLEtBQUssTUFBTTtBQUNwQixRQUFJLEVBQUUsT0FBTztBQUFFLFlBQU0sS0FBSyxFQUFFLGFBQWEsQ0FBQztBQUFHLFdBQUssS0FBSyxJQUFJO0FBQUEsSUFBRyxPQUN6RDtBQUFFLFlBQU0sS0FBSyxDQUFDO0FBQUcsV0FBSyxLQUFLLEtBQUs7QUFBQSxJQUFHO0FBQUEsRUFDMUM7QUFDQSxNQUFJLFFBQVE7QUFDWixhQUFXLEtBQUssTUFBTyxVQUFTLEVBQUUsYUFBYSxVQUFVLEVBQUU7QUFDM0QsUUFBTSxXQUFXLElBQUksYUFBYSxRQUFRLENBQUM7QUFDM0MsUUFBTSxTQUFTLElBQUksYUFBYSxRQUFRLENBQUM7QUFDekMsUUFBTSxLQUFLLElBQUksYUFBYSxRQUFRLENBQUM7QUFDckMsTUFBSSxJQUFJO0FBQ1IsYUFBVyxLQUFLLE9BQU87QUFDckIsVUFBTSxJQUFJLEVBQUUsYUFBYSxVQUFVLEdBQUcsSUFBSSxFQUFFLGFBQWEsUUFBUSxHQUFHLElBQUksRUFBRSxhQUFhLElBQUk7QUFDM0YsYUFBUyxJQUFJLEdBQUcsSUFBSSxFQUFFLE9BQU8sS0FBSztBQUNoQyxnQkFBVSxJQUFJLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUcsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQzlHLFVBQUksR0FBRztBQUFFLGdCQUFRLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBRyxnQkFBUSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFBQSxNQUFHO0FBQ3BILFVBQUksR0FBRztBQUFFLFlBQUksSUFBSSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQztBQUFHLFlBQUksSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDO0FBQUEsTUFBRztBQUFBLElBQ3pFO0FBQ0EsU0FBSyxFQUFFO0FBQUEsRUFDVDtBQUNBLFdBQVMsSUFBSSxHQUFHLElBQUksTUFBTSxRQUFRLEtBQUs7QUFBRSxRQUFJLEtBQUssQ0FBQyxFQUFHLE9BQU0sQ0FBQyxFQUFFLFFBQVE7QUFBRyxTQUFLLENBQUMsRUFBRSxRQUFRO0FBQUEsRUFBRztBQUM3RixRQUFNLE1BQU0sSUFBVSxxQkFBZTtBQUNyQyxNQUFJLGFBQWEsWUFBWSxJQUFVLHNCQUFnQixVQUFVLENBQUMsQ0FBQztBQUNuRSxNQUFJLGFBQWEsVUFBVSxJQUFVLHNCQUFnQixRQUFRLENBQUMsQ0FBQztBQUMvRCxNQUFJLGFBQWEsTUFBTSxJQUFVLHNCQUFnQixJQUFJLENBQUMsQ0FBQztBQUN2RCxNQUFJLG1CQUFtQjtBQUFHLE1BQUksc0JBQXNCO0FBQ3BELFNBQU87QUFDVDtBQUVBLFNBQVMsTUFBTSxJQUFZLElBQVksSUFBWSxHQUFXLEdBQVcsR0FBVztBQUNsRixRQUFNLElBQUksSUFBVSxrQkFBWSxHQUFHLEdBQUcsQ0FBQztBQUFHLElBQUUsVUFBVSxJQUFJLElBQUksRUFBRTtBQUFHLFNBQU87QUFDNUU7QUFDQSxTQUFTLE1BQU0sSUFBWSxJQUFZLElBQVksR0FBVyxHQUFXLE1BQU0sSUFBSTtBQUNqRixRQUFNLElBQUksSUFBVSx1QkFBaUIsR0FBRyxHQUFHLEdBQUcsR0FBRztBQUFHLElBQUUsVUFBVSxJQUFJLElBQUksRUFBRTtBQUFHLFNBQU87QUFDdEY7QUFDQSxTQUFTLE1BQU0sTUFBa0I7QUFBRSxTQUFPLFVBQVUsS0FBSyxJQUFJLENBQUMsTUFBTSxNQUFNLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUFHO0FBbUJqSCxTQUFTLGVBQWUsU0FBNkU7QUFDbkcsUUFBTSxNQUFrRCxDQUFDO0FBQ3pELGFBQVcsS0FBSyxPQUFPLFdBQW9CO0FBQ3pDLFVBQU0sSUFBSSxJQUFVLDJCQUFxQjtBQUFBLE1BQ3ZDLE9BQU8sSUFBVSxZQUFNLEVBQUUsS0FBSztBQUFBLE1BQzlCLFdBQVcsRUFBRTtBQUFBLE1BQ2IsV0FBVyxFQUFFO0FBQUEsTUFDYixXQUFXLFFBQVEsYUFBYTtBQUFBLElBQ2xDLENBQUM7QUFDRCxRQUFJLEVBQUUsb0JBQW9CLE9BQVcsR0FBRSxrQkFBa0IsRUFBRTtBQUMzRCxRQUFJLEVBQUUsWUFBWSxRQUFXO0FBQUUsUUFBRSxjQUFjO0FBQU0sUUFBRSxVQUFVLEVBQUU7QUFBUyxRQUFFLGFBQWE7QUFBQSxJQUFNO0FBQ2pHLE1BQUUsT0FBTyxFQUFFO0FBQ1gsUUFBSSxFQUFFLEVBQUUsSUFBSTtBQUFBLEVBQ2Q7QUFDQSxTQUFPO0FBQ1Q7QUFJTyxTQUFTLGtDQUFrQyxVQUFrQyxDQUFDLEdBQWdCO0FBQ25HLFFBQU0sT0FBTyxJQUFVLFlBQU07QUFDN0IsT0FBSyxPQUFPO0FBRVosUUFBTSxZQUFZLGVBQWUsT0FBTztBQUN4QyxRQUFNLFFBQXdDLENBQUM7QUFDL0MsUUFBTSxTQUFxQyxDQUFDO0FBQzVDLFFBQU0sVUFBMEMsQ0FBQztBQUNqRCxRQUFNLFlBQXFDLENBQUM7QUFDNUMsUUFBTSxvQkFBc0QsQ0FBQztBQUM3RCxRQUFNLGFBQWEsUUFBUSxjQUFjO0FBQ3pDLFFBQU0sZ0JBQWdCLFFBQVEsaUJBQWlCO0FBRS9DLFdBQVMsSUFBSSxJQUFZLE1BQWMsS0FBMkIsT0FBZTtBQUMvRSxVQUFNLE9BQU8sSUFBVSxZQUFNO0FBQUcsU0FBSyxPQUFPLE9BQU87QUFDbkQsVUFBTSxPQUFPLElBQVUsV0FBSyxLQUFLLFVBQVUsS0FBSyxDQUFDO0FBQ2pELFNBQUssT0FBTztBQUFNLFNBQUssYUFBYTtBQUFZLFNBQUssZ0JBQWdCO0FBQ3JFLFNBQUssSUFBSSxJQUFJO0FBQUcsU0FBSyxJQUFJLElBQUk7QUFDN0IsVUFBTSxFQUFFLElBQUk7QUFBTSxXQUFPLEVBQUUsSUFBSTtBQUFNLGNBQVUsRUFBRSxJQUFJO0FBQ3JELFdBQU87QUFBQSxFQUNUO0FBQ0EsV0FBUyxRQUFRLElBQVksTUFBYyxLQUEyQixPQUFlLE1BQXVCLE1BQWlCO0FBQzNILFVBQU0sT0FBTyxJQUFVLFlBQU07QUFBRyxTQUFLLE9BQU8sT0FBTztBQUNuRCxVQUFNLE9BQU8sSUFBVSxvQkFBYyxLQUFLLFVBQVUsS0FBSyxHQUFHLEtBQUssTUFBTTtBQUN2RSxTQUFLLE9BQU87QUFBTSxTQUFLLGFBQWE7QUFBWSxTQUFLLGdCQUFnQjtBQUNyRSxhQUFTLElBQUksR0FBRyxJQUFJLEtBQUssUUFBUSxJQUFLLE1BQUssWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDO0FBQ2pFLFFBQUksTUFBTTtBQUNSLFlBQU0sSUFBSSxJQUFVLFlBQU07QUFDMUIsZUFBUyxJQUFJLEdBQUcsSUFBSSxLQUFLLFFBQVEsSUFBSyxNQUFLLFdBQVcsR0FBRyxFQUFFLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQztBQUMxRSxVQUFJLEtBQUssY0FBZSxNQUFLLGNBQWMsY0FBYztBQUFBLElBQzNEO0FBQ0EsU0FBSyxlQUFlLGNBQWM7QUFDbEMsU0FBSyxJQUFJLElBQUk7QUFBRyxTQUFLLElBQUksSUFBSTtBQUM3QixVQUFNLEVBQUUsSUFBSTtBQUFNLFdBQU8sRUFBRSxJQUFJO0FBQStCLGNBQVUsRUFBRSxJQUFJO0FBQzlFLFdBQU87QUFBQSxFQUNUO0FBRUEsUUFBTSxJQUFJLE9BQU87QUFXakIsUUFBTSxLQUFNLEVBQUUsY0FBYztBQUM1QixNQUFJLGtCQUFrQixrQkFBa0IsTUFBTSxHQUFHLFFBQVEsS0FBSyxRQUFRLEdBQUcsTUFBTSxNQUFNLEtBQUssSUFBSSxHQUFHLE1BQU07QUFDdkcsWUFBVSxnQkFBZ0IsSUFBSTtBQUFBLElBQzVCLE9BQU87QUFBQSxJQUFPLGFBQWEsQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUFBLElBQUcsYUFBYSxDQUFDLEdBQUssS0FBSyxHQUFHO0FBQUEsSUFDbkUsT0FBTztBQUFBLEVBQ1Q7QUFLQSxNQUFJLGFBQWEsYUFBYSxNQUFNLEdBQUcsT0FBTyxLQUFLLE9BQU8sUUFBUSxHQUFHLEtBQUssTUFBTSxLQUFLLEdBQUksR0FBRyxNQUFNO0FBS2xHLE1BQUksV0FBVyxnQ0FBZ0MsTUFBTTtBQUFBLElBQ25ELENBQUMsR0FBRyxFQUFFLFdBQVcsSUFBSSxFQUFFLFdBQVcsSUFBSSxHQUFLLEVBQUUsV0FBVyxHQUFHLEVBQUUsV0FBVyxDQUFDO0FBQUEsSUFDekUsQ0FBQyxPQUFPLE9BQU8sS0FBSyxNQUFPLE9BQU8sR0FBRyxNQUFNLEtBQUssS0FBSyxHQUFJO0FBQUEsSUFDekQsQ0FBQyxNQUFNLE9BQU8sS0FBSyxNQUFPLE9BQU8sR0FBRyxNQUFNLEtBQUssS0FBSyxHQUFJO0FBQUEsSUFDeEQsQ0FBQyxHQUFHLE1BQU0sT0FBTyxHQUFLLEtBQUssSUFBSTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSS9CLEdBQUssRUFBRSxnQkFBZ0IsQ0FBQztBQUFBLEVBQzFCLENBQUMsR0FBRyxFQUFFLGtCQUFrQjtBQU14QjtBQUNFLFVBQU0sSUFBSSxFQUFFO0FBQ1osUUFBSTtBQUNKLFFBQUksRUFBRSxVQUFVLFFBQVE7QUFTdEIsWUFBTSxJQUFJLEVBQUUsSUFBSTtBQUNoQixZQUFNLE9BQU8sSUFBVSxxQkFBZSxHQUFHLEVBQUU7QUFDM0MsV0FBSyxVQUFVLEdBQUcsR0FBRyxLQUFLO0FBQzFCLFlBQU0sT0FBTyxJQUFVLHVCQUFpQixHQUFHLEdBQUcsTUFBTSxFQUFFO0FBQ3RELFdBQUssUUFBUSxDQUFDLEtBQUssS0FBSyxDQUFDO0FBQ3pCLFlBQU0sTUFBTSxLQUFLLGFBQWEsSUFBSTtBQUNsQyxlQUFTLElBQUksR0FBRyxJQUFJLElBQUksT0FBTyxJQUFLLEtBQUksTUFBTSxHQUFHLE1BQU0sSUFBSTtBQUMzRCxVQUFJLGNBQWM7QUFDbEIsVUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUM7QUFBQSxJQUM1QixPQUFPO0FBQ0wsWUFBTSxJQUFJLElBQVUsa0JBQVksRUFBRSxHQUFHLEVBQUUsR0FBRyxJQUFJO0FBQzlDLFlBQU0sS0FBSyxFQUFFLGFBQWEsSUFBSTtBQUM5QixlQUFTLElBQUksR0FBRyxJQUFJLEdBQUcsT0FBTyxLQUFLO0FBQ2pDLFlBQUksS0FBSyxNQUFNLElBQUksR0FBSSxJQUFHLE1BQU0sR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLFFBQVEsR0FBRyxLQUFLLENBQUMsSUFBSSxLQUFLO0FBQUEsWUFDcEUsSUFBRyxNQUFNLEdBQUcsR0FBRyxLQUFLLENBQUMsSUFBSSxNQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSTtBQUFBLE1BQ3ZEO0FBQ0EsU0FBRyxjQUFjO0FBQ2pCLFVBQUk7QUFBQSxJQUNOO0FBQ0EsTUFBRSxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRTtBQUN6QixRQUFJLGdCQUFnQixzQkFBc0IsR0FBRyxRQUFRO0FBQUEsRUFDdkQ7QUFLQSxNQUFJLHFCQUFxQixxQkFBcUIsTUFBTSxHQUFHLEVBQUUsUUFBUSxJQUFJLEVBQUUsUUFBUSxNQUFNLE1BQU0sRUFBRSxRQUFRLEdBQUcsRUFBRSxRQUFRLEdBQUcsR0FBSSxHQUFHLE9BQU87QUFNbkksTUFBSSxtQkFBbUIsa0NBQWtDLE1BQU0sRUFBRSxLQUFLLEdBQUcsRUFBRSxhQUFhO0FBTXhGLE1BQUksRUFBRSxZQUFhLEtBQUksZ0JBQWdCLEVBQUUsWUFBWSxNQUFNLE1BQU0sRUFBRSxZQUFZLEtBQUssR0FBRyxFQUFFLFlBQVksUUFBUTtBQUc3RyxNQUFJLEVBQUUsYUFBYyxLQUFJLGlCQUFpQixFQUFFLGFBQWEsTUFBTSxNQUFNLEVBQUUsYUFBYSxLQUFLLEdBQUcsRUFBRSxhQUFhLFFBQVE7QUFLbEgsTUFBSSxFQUFFLGFBQWMsS0FBSSxpQkFBaUIsRUFBRSxhQUFhLE1BQU0sTUFBTSxFQUFFLGFBQWEsS0FBSyxHQUFHLEVBQUUsYUFBYSxRQUFRO0FBTWxIO0FBQ0UsVUFBTSxJQUFJLEVBQUU7QUFDWixVQUFNLE9BQVEsRUFBRSxFQUFlLElBQUksQ0FBQyxNQUFNLElBQVUsY0FBUSxFQUFFLFlBQVksR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLElBQUksQ0FBQztBQUNoRyxZQUFRLHNCQUFzQixzQkFBc0IsSUFBVSxrQkFBWSxFQUFFLEdBQUcsRUFBRSxHQUFHLElBQUksR0FBRyxFQUFFLGVBQWUsSUFBSTtBQUFBLEVBQ2xIO0FBSUE7QUFDRSxVQUFNLFFBQWdDO0FBQUEsTUFDcEMsTUFBTSxHQUFHLE1BQU0sR0FBRyxNQUFNLE1BQU0sSUFBSTtBQUFBLE1BQ2xDLE1BQU0sR0FBRyxNQUFNLEdBQUcsS0FBTSxLQUFNLEVBQUU7QUFBQSxJQUNsQztBQUNBLGVBQVcsTUFBTSxDQUFDLE1BQU0sR0FBRyxFQUFHLFlBQVcsTUFBTSxDQUFDLE9BQU8sSUFBSSxFQUFHLE9BQU0sS0FBSyxNQUFNLElBQUksTUFBTSxJQUFJLE1BQU0sS0FBTSxJQUFJLENBQUM7QUFDOUcsVUFBTSxPQUFPLFVBQVUsS0FBSztBQUM1QixVQUFNLE9BQVEsRUFBRSxXQUEwQixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxNQUN2RCxJQUFVLGNBQVEsRUFBRTtBQUFBLE1BQ2xCLElBQVUsY0FBUSxHQUFHLEtBQU0sQ0FBQztBQUFBLE1BQzVCLElBQVUsaUJBQVcsRUFBRSxpQkFBaUIsSUFBVSxjQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRztBQUFBLE1BQ3ZFLElBQVUsY0FBUSxHQUFHLEdBQUcsQ0FBQztBQUFBLElBQzNCLENBQUM7QUFDSCxZQUFRLG9CQUFvQiwyQkFBMkIsTUFBTSxRQUFRLElBQUk7QUFBQSxFQUMzRTtBQUdBLE1BQUksRUFBRSxhQUFhO0FBQ2pCLFVBQU0sSUFBSSxFQUFFO0FBQ1osUUFBSTtBQUNKLFFBQUksRUFBRSxTQUFTLFNBQVM7QUFDdEIsYUFBTyxVQUFVLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLE9BQU8sR0FBRyxPQUFPLE1BQU0sRUFBRSxDQUFDLENBQUM7QUFBQSxJQUNsRyxPQUFPO0FBQ0wsYUFBTyxNQUFNLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDO0FBQUEsSUFDckM7QUFDQSxVQUFNLE9BQVEsRUFBRSxHQUFrQixJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLElBQVUsY0FBUSxFQUFFLFlBQVksR0FBRyxHQUFHLENBQUMsQ0FBQztBQUM3RixZQUFRLEVBQUUsSUFBSSxFQUFFLE1BQU0sTUFBTSxFQUFFLFVBQVUsTUFBTSxFQUFFLFFBQVEsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsTUFBTSxJQUFJLEVBQUUsTUFBTSxNQUFNLENBQUMsSUFBSSxNQUFTO0FBQUEsRUFDckg7QUFFQSxPQUFLLFNBQVMsZ0JBQWdCLEVBQUUsT0FBTyxRQUFRLFNBQVMsV0FBVyxrQkFBa0I7QUFDckYsU0FBTztBQUNUO0FBV0EsU0FBUyxtQkFBbUIsTUFBeUI7QUFDbkQsUUFBTSxLQUFLLEtBQUssU0FBUztBQUN6QixRQUFNLE9BQU8sSUFBSSxTQUFTLGNBQWM7QUFDeEMsTUFBSSxDQUFDLFFBQVEsT0FBTyxhQUFhLFlBQWE7QUFDOUMsUUFBTSxXQUFXLEtBQUs7QUFDdEIsTUFBSSxDQUFDLFNBQVU7QUFFZixRQUFNLElBQUksT0FBTztBQUlqQixRQUFNLFNBQVMsQ0FBQyxDQUFDLEVBQUU7QUFDbkIsUUFBTSxJQUFJLFNBQVMsTUFBTSxNQUFNLElBQUksU0FBUyxNQUFNO0FBQ2xELFFBQU0sU0FBUyxTQUFTLGNBQWMsUUFBUTtBQUM5QyxTQUFPLFFBQVE7QUFBRyxTQUFPLFNBQVM7QUFDbEMsUUFBTSxNQUFNLE9BQU8sV0FBVyxJQUFJO0FBQ2xDLE1BQUksQ0FBQyxJQUFLO0FBRVYsTUFBSSxZQUFZLEVBQUU7QUFDbEIsTUFBSSxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUM7QUFDdkIsUUFBTSxPQUFPLFNBQVMsSUFBSSxJQUFJO0FBRTlCLFFBQU0sTUFBTSxDQUFDLE1BQWMsTUFBYyxJQUFZLElBQVksSUFBWSxNQUFjLFdBQW9CLFlBQXFCO0FBQ2xJLFFBQUksT0FBTztBQUNYLFFBQUksZUFBZTtBQUNuQixRQUFJLFlBQVk7QUFDaEIsVUFBTSxJQUFJLElBQUksWUFBWSxJQUFJLEVBQUU7QUFDaEMsVUFBTSxLQUFLLEtBQUssTUFBTTtBQUN0QixRQUFJLEtBQUs7QUFDVCxRQUFJLFVBQVUsSUFBSSxDQUFDO0FBQ25CLFFBQUksTUFBTSxHQUFHLENBQUM7QUFDZCxRQUFJLFdBQVc7QUFBRSxVQUFJLFdBQVc7QUFBUyxVQUFJLGNBQWM7QUFBVyxVQUFJLGFBQWEsV0FBVyxLQUFLO0FBQUcsVUFBSSxXQUFXLE1BQU0sR0FBRyxFQUFFO0FBQUEsSUFBRztBQUN2SSxRQUFJLFlBQVk7QUFDaEIsUUFBSSxTQUFTLE1BQU0sR0FBRyxFQUFFO0FBQ3hCLFFBQUksUUFBUTtBQUFBLEVBQ2Q7QUFFQSxhQUFXLE1BQU0sRUFBRSxLQUFjO0FBQy9CLFFBQUksR0FBRyxTQUFTLFFBQVE7QUFDdEIsVUFBSSxZQUFZLEdBQUc7QUFDbkIsWUFBTSxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLE1BQU0sSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxNQUFNLEtBQUssR0FBRyxLQUFLLEtBQUs7QUFDdEYsVUFBSSxVQUFVO0FBQ2QsVUFBSSxJQUFJLEdBQUc7QUFDVCxZQUFJLE9BQU8sSUFBSSxHQUFHLENBQUM7QUFBRyxZQUFJLE9BQU8sSUFBSSxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksaUJBQWlCLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFDM0YsWUFBSSxPQUFPLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztBQUFHLFlBQUksaUJBQWlCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pGLFlBQUksT0FBTyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxpQkFBaUIsR0FBRyxJQUFJLEdBQUcsR0FBRyxJQUFJLElBQUksQ0FBQztBQUNyRSxZQUFJLE9BQU8sR0FBRyxJQUFJLENBQUM7QUFBRyxZQUFJLGlCQUFpQixHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7QUFBQSxNQUMzRCxNQUFPLEtBQUksS0FBSyxHQUFHLEdBQUcsR0FBRyxDQUFDO0FBQzFCLFVBQUksVUFBVTtBQUFHLFVBQUksS0FBSztBQUFBLElBQzVCLFdBQVcsR0FBRyxTQUFTLFVBQVU7QUFDL0IsVUFBSSxZQUFZLEdBQUc7QUFDbkIsVUFBSSxVQUFVO0FBQ2QsVUFBSSxJQUFJLEdBQUcsS0FBSyxHQUFHLEdBQUcsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFDNUQsVUFBSSxLQUFLO0FBQUEsSUFDWCxXQUFXLEdBQUcsU0FBUyxRQUFRO0FBQzdCO0FBQUEsUUFBSSxHQUFHO0FBQUEsUUFBTSxHQUFHLEdBQUcsU0FBUyxNQUFNLElBQUksS0FBSyxNQUFNLEdBQUcsT0FBTyxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsOEJBQThCO0FBQUEsUUFDL0csR0FBRyxLQUFLO0FBQUEsUUFBRyxHQUFHLEtBQUs7QUFBQSxRQUFHLEdBQUcsS0FBSztBQUFBLFFBQU0sR0FBRztBQUFBLFFBQU0sR0FBRztBQUFBLFFBQVEsR0FBRyxVQUFVLEdBQUcsVUFBVSxPQUFPO0FBQUEsTUFBUztBQUFBLElBQ3RHO0FBQUEsRUFDRjtBQUVBLFFBQU0sTUFBTSxJQUFVLG9CQUFjLE1BQU07QUFDMUMsTUFBSSxhQUE0Qix3QkFBa0IsSUFBSTtBQUN0RCxNQUFJLGFBQWE7QUFDakIsTUFBSSxjQUFjO0FBQ2xCLFdBQVMsTUFBTTtBQUdmLFdBQVMsTUFBTSxPQUFPLFFBQVE7QUFDOUIsV0FBUyxjQUFjO0FBQ3pCO0FBU08sU0FBUyxrQkFBa0IsTUFBZ0IsVUFBa0MsQ0FBQyxHQUFnQjtBQUNuRyxRQUFNLE9BQU8sa0NBQWtDLE9BQU87QUFDdEQsTUFBSSxTQUFTLFVBQWEsU0FBUyxLQUFNLE1BQUssU0FBUyxhQUFhO0FBRXBFLHFCQUFtQixJQUFJO0FBRXZCLFFBQU0sS0FBSyxLQUFLLFNBQVM7QUFDekIsTUFBSSxJQUFJO0FBQ04sVUFBTSxRQUFTLEdBQUcsU0FBUyxDQUFDO0FBTTVCLFVBQU0sU0FBMkIsQ0FBQztBQUNsQyxVQUFNLFlBQVksSUFBVSxlQUFTO0FBQ3JDLGNBQVUsT0FBTztBQUNqQixjQUFVLFNBQVMsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUM5QixjQUFVLFNBQVMsZ0JBQWdCO0FBQUEsTUFDakMsZUFBZTtBQUFBLE1BQ2YsT0FBTyxFQUFFLE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLE9BQU87QUFBQSxJQUNuRjtBQUNBLFNBQUssSUFBSSxTQUFTO0FBQ2xCLFdBQU8sS0FBSyxTQUFTO0FBT3JCLFVBQU0sWUFBWSxPQUFPLFFBQVMsR0FBRyxhQUFhLENBQUMsQ0FBeUIsRUFDekUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUN6RSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFJLEVBQWEsRUFBRTtBQUtwRCxVQUFNLFVBQVUsb0JBQUksSUFBOEI7QUFDbEQsZUFBVyxDQUFDLE1BQU0sT0FBTyxLQUFLLE9BQU8sUUFBUyxHQUFHLHFCQUFxQixDQUFDLENBQXNDLEdBQUc7QUFDOUcsY0FBUSxJQUFJLE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQztBQUFBLElBQ2hDO0FBQ0EsZUFBVyxRQUFRLE9BQU8sT0FBTyxLQUFLLEdBQUc7QUFDdkMsWUFBTSxRQUFTLE1BQWMsVUFBVSxlQUFlLGFBQWE7QUFDbkUsVUFBSSxPQUFPLFVBQVUsWUFBWSxDQUFDLE1BQU87QUFDekMsVUFBSSxDQUFDLFFBQVEsSUFBSSxLQUFLLEVBQUcsU0FBUSxJQUFJLE9BQU8sQ0FBQyxDQUFDO0FBQzlDLGNBQVEsSUFBSSxLQUFLLEVBQUcsS0FBSyxJQUFJO0FBQUEsSUFDL0I7QUFFQSxTQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDNUIsR0FBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFLSCxPQUFPLE9BQU8sS0FBSyxLQUFLLEVBQUU7QUFBQSxNQUMxQjtBQUFBLE1BQ0EsU0FBUyxPQUFPLE9BQVEsR0FBRyxXQUFXLENBQUMsQ0FBb0M7QUFBQSxNQUMzRTtBQUFBLE1BQ0EsbUJBQW1CLENBQUMsR0FBRyxRQUFRLFFBQVEsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLE1BQU0sT0FBTyxPQUFPLEVBQUUsTUFBTSxRQUFRLEVBQUU7QUFBQSxNQUN0RixNQUFNLEVBQUUsT0FBTyxRQUFRLEdBQUcsVUFBVSxDQUFDLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxFQUFFO0FBQUEsSUFDcEU7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUOyIsCiAgIm5hbWVzIjogW10KfQo=
