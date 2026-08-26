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

// scratch/big-c-store-building/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createBigCStoreBuildingModel: () => createBigCStoreBuildingModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
function mergeGeos(geos) {
  const parts = [];
  const temporary = [];
  for (const g of geos) {
    if (g.index) {
      parts.push(g.toNonIndexed());
      temporary.push(true);
    } else {
      parts.push(g);
      temporary.push(false);
    }
  }
  let total = 0;
  for (const g of parts) total += g.getAttribute("position").count;
  const position = new Float32Array(total * 3);
  const normal = new Float32Array(total * 3);
  const uv = new Float32Array(total * 2);
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position");
    const n = g.getAttribute("normal");
    const t = g.getAttribute("uv");
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
    if (temporary[i]) parts[i].dispose();
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
var MATERIAL_SPECS = [
  { id: "render-wall", color: 10261643, roughness: 0.88, metalness: 0 },
  { id: "roof-deck", color: 12763843, roughness: 0.85, metalness: 0 },
  // WHITE, deliberately. This material is only ever used by an InstancedMesh that sets a
  // per-instance colour, and InstancedMesh.setColorAt MULTIPLIES with material.color. Authored
  // at the measured #B0ADA8 the measured block tones were being multiplied down by it and the
  // cap course rendered brown. The measured colours now live in CAP_BLOCK_TONES, unmodulated.
  { id: "parapet-block", color: 16777215, roughness: 0.8, metalness: 0 },
  { id: "sign-face", color: 14277080, roughness: 0.35, metalness: 0, envMapIntensity: 0.6 },
  // Metalness is capped well below the physical value for aluminium and galvanised steel. The
  // thaikit harness supplies a hemisphere light and three directionals and NO environment map,
  // and a metal with nothing to reflect renders black -- at the physical 0.85 the canopy plates,
  // mullions and condensers all came out near-black against a plate that shows them pale grey.
  // The albedo stays at the measured value; it is the metalness that is wrong for this lighting
  // rig, so that is what moves. The shipped 7-Eleven sibling caps the same two at 0.35 and 0.30.
  { id: "aluminium", color: 12434617, roughness: 0.42, metalness: 0.35 },
  { id: "glass-tinted", color: 7040878, roughness: 0.18, metalness: 0, opacity: 0.92, envMapIntensity: 1.1 },
  { id: "galv-plant", color: 9475738, roughness: 0.52, metalness: 0.3 }
];
function buildMaterials(options) {
  const map = {};
  for (const s of MATERIAL_SPECS) {
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
var CAP_BLOCK_TONES = [10328466, 12829634, 12171188, 11118241];
function createBigCStoreBuildingModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Big C Store Building";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function addComponent(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = `${name}__node`;
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
  function addInstanced(id, name, geo, matId, matrices, colors) {
    const node = new THREE.Group();
    node.name = `${name}__node`;
    const inst = new THREE.InstancedMesh(geo, materials[matId], matrices.length);
    inst.name = name;
    inst.castShadow = castShadow;
    inst.receiveShadow = receiveShadow;
    for (let i = 0; i < matrices.length; i++) inst.setMatrixAt(i, matrices[i]);
    if (colors) {
      const c = new THREE.Color();
      for (let i = 0; i < colors.length; i++) inst.setColorAt(i, c.setHex(colors[i]));
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
  addComponent("building-shell", "Building shell", boxAt(0, 1.775, -0.47, 7.88, 3.55, 5.94), "render-wall");
  colliders["building-shell"] = {
    shape: "box",
    localCenter: [0, 2.3, 0],
    halfExtents: [4, 2.3, 3.5],
    notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
  };
  addComponent("roof-deck", "Roof deck", boxAt(0, 3.56, -0.47, 7.8, 0.12, 5.9), "roof-deck");
  addComponent(
    "parapet",
    "Parapet ring and sign wall",
    mergeGeos([
      boxAt(0, 3.935, 2.47, 8, 0.77, 0.54),
      // front sign wall, 0.24 m proud of the facade
      boxAt(-3.88, 3.75, -0.65, 0.24, 0.4, 5.7),
      // left upstand
      boxAt(3.88, 3.75, -0.65, 0.24, 0.4, 5.7),
      // right upstand
      boxAt(0, 3.75, -3.38, 8, 0.4, 0.24)
      // rear upstand
    ]),
    "render-wall"
  );
  const signGeo = new THREE.BoxGeometry(6.6, 0.58, 0.12);
  {
    const uv = signGeo.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) {
      if (i >= 16 && i < 20) {
        const u = uv.getX(i);
        const vv = uv.getY(i);
        uv.setXY(i, u, 0.125 + vv * 0.875);
      } else {
        uv.setXY(i, uv.getX(i) * 0.03, uv.getY(i) * 0.03);
      }
    }
    uv.needsUpdate = true;
    signGeo.translate(0, 3.97, 2.76);
  }
  addComponent("sign-lightbox", "Big C fascia lightbox", signGeo, "sign-face");
  addComponent("shopfront-glazing", "Shopfront glazing", boxAt(0, 1.665, 2.51, 6.5, 2.97, 0.1), "glass-tinted");
  addComponent(
    "shopfront-frame",
    "Shopfront framing and door bay",
    mergeGeos([
      boxAt(-3.285, 1.66, 2.58, 0.07, 3.12, 0.12),
      // left stile
      boxAt(3.285, 1.66, 2.58, 0.07, 3.12, 0.12),
      // right stile
      boxAt(0, 3.185, 2.58, 6.64, 0.07, 0.12),
      // head
      boxAt(0, 0.14, 2.58, 6.64, 0.08, 0.12),
      // sill / kick rail
      boxAt(0, 2.46, 2.58, 6.5, 0.08, 0.12),
      // transom
      boxAt(-1.185, 1.3, 2.58, 0.07, 2.4, 0.12),
      // door jamb L
      boxAt(1.185, 1.3, 2.58, 0.07, 2.4, 0.12),
      // door jamb R
      boxAt(0, 2.61, 2.58, 2.3, 0.22, 0.12)
      // door header box
    ]),
    "aluminium"
  );
  {
    const slats = [];
    const SLAT_COUNT = 20;
    const SLAT_H = 2.25 / SLAT_COUNT;
    for (let i = 0; i < SLAT_COUNT; i++) {
      const y = 0.1 + SLAT_H * (i + 0.5);
      const thickness = i % 2 === 0 ? 0.09 : 0.075;
      slats.push(boxAt(-3.9 - thickness / 2, y, 1.35, thickness, SLAT_H * 0.92, 1.5));
    }
    slats.push(boxAt(-3.935, 2.485, 1.35, 0.11, 0.27, 1.6));
    addComponent("roller-shutter", "Roller shutter and head box", mergeGeos(slats), "galv-plant");
  }
  {
    const mats = [];
    const cols = [];
    const push = (x, y, z, w, h, d) => {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion(),
        new THREE.Vector3(w, h, d)
      ));
      cols.push(CAP_BLOCK_TONES[mats.length % CAP_BLOCK_TONES.length]);
    };
    const N = 12;
    const SPAN = 7.96;
    const W = SPAN / N;
    for (let i = 0; i < N; i++) push(-3.98 + W * (i + 0.5), 4.46, 2.55, W - 0.02, 0.28, 0.5);
    for (const sx of [-3.74, 3.74]) {
      for (let i = 0; i < 3; i++) push(sx, 3.55 + 0.2567 * (i + 0.5), 2.55, 0.48, 0.2567 - 0.02, 0.5);
    }
    addInstanced("parapet-cap-blocks", "Parapet cap blocks and quoins", new THREE.BoxGeometry(1, 1, 1), "parapet-block", mats, cols);
  }
  {
    const plate = mergeGeos([
      boxAt(0, 0, 0, 1.08, 0.14, 1.1),
      cylAt(0, -0.085, 0, 0.085, 0.03, 12)
    ]);
    const mats = [];
    for (let i = 0; i < 6; i++) {
      mats.push(new THREE.Matrix4().setPosition(-3.3 + 1.1 * (i + 0.5), 3.37, 2.95));
    }
    addInstanced("canopy-plates", "Entrance canopy plates", plate, "aluminium", mats);
  }
  {
    const mats = [];
    const xs = [0];
    for (let k = 1; k <= 5; k++) {
      xs.push(-3.25 + 0.3383 * k, 3.25 - 0.3383 * k);
    }
    for (const x of xs.sort((a, b) => a - b)) {
      mats.push(new THREE.Matrix4().setPosition(x, 1.645, 2.58));
    }
    addInstanced("shopfront-mullions", "Shopfront mullions", new THREE.BoxGeometry(0.07, 3.05, 0.08), "aluminium", mats);
  }
  {
    const parts = [
      boxAt(0, 0.46, 0, 0.95, 0.72, 0.85),
      // casing
      cylAt(0, 0.87, 0, 0.3, 0.1, 16)
      // fan cowl
    ];
    for (const fx of [-0.4, 0.4]) {
      for (const fz of [-0.35, 0.35]) parts.push(boxAt(fx, 0.05, fz, 0.08, 0.1, 0.08));
    }
    const unit = mergeGeos(parts);
    const placements = [
      [-2.5, 3.6, -0.6, 0],
      [-1.6, 3.6, -1.3, Math.PI / 2],
      [0.9, 3.6, -0.5, 0],
      [1.8, 3.6, -1.2, Math.PI / 2]
    ];
    const mats = placements.map(
      ([x, y, z, yaw]) => new THREE.Matrix4().compose(
        new THREE.Vector3(x, y, z),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
        new THREE.Vector3(1, 1, 1)
      )
    );
    addInstanced("plant-condensers", "Rooftop condenser units", unit, "galv-plant", mats);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function applyFasciaGraphic(root) {
  const rt = root.userData.sculptRuntime;
  const mesh = rt?.meshes?.["sign-lightbox"];
  if (!mesh) return;
  const material = mesh.material;
  if (!material || typeof document === "undefined") return;
  const W = 2048;
  const H = 320;
  const canvas = document.createElement("canvas");
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;
  ctx.fillStyle = "#D9D9D8";
  ctx.fillRect(0, 0, W, H);
  const bandH = H * 0.875;
  const gx0 = W * 0.365;
  const gx1 = W * 0.73;
  const gy0 = bandH * 0.1;
  const gy1 = bandH * 0.9;
  const panelW = gx1 - gx0;
  const panelH = gy1 - gy0;
  const r = panelH * 0.12;
  ctx.fillStyle = "#8CC63F";
  ctx.beginPath();
  ctx.moveTo(gx0 + r, gy0);
  ctx.lineTo(gx1 - r, gy0);
  ctx.quadraticCurveTo(gx1, gy0, gx1, gy0 + r);
  ctx.lineTo(gx1, gy1 - r);
  ctx.quadraticCurveTo(gx1, gy1, gx1 - r, gy1);
  ctx.lineTo(gx0 + r, gy1);
  ctx.quadraticCurveTo(gx0, gy1, gx0, gy1 - r);
  ctx.lineTo(gx0, gy0 + r);
  ctx.quadraticCurveTo(gx0, gy0, gx0 + r, gy0);
  ctx.closePath();
  ctx.fill();
  const cy = gy0 + panelH * 0.56;
  ctx.textBaseline = "middle";
  ctx.textAlign = "left";
  const fontBig = `italic bold ${Math.round(panelH * 0.58)}px Arial, Helvetica, sans-serif`;
  const fontC = `bold ${Math.round(panelH * 1.02)}px Arial, Helvetica, sans-serif`;
  ctx.font = fontBig;
  const wBig = ctx.measureText("Big").width;
  ctx.font = fontC;
  const wC = ctx.measureText("C").width;
  const gap = panelH * 0.06;
  const scaleX = panelW * 0.86 / (wBig + gap + wC);
  ctx.save();
  ctx.translate(gx0 + panelW * 0.07, 0);
  ctx.scale(scaleX, 1);
  const stroke = (text, x, y, width) => {
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#FFF6E0";
    ctx.lineWidth = width;
    ctx.strokeText(text, x, y);
    ctx.fillText(text, x, y);
  };
  ctx.fillStyle = "#E30613";
  ctx.font = fontBig;
  stroke("Big", 0, cy + panelH * 0.05, panelH * 0.07);
  ctx.font = fontC;
  stroke("C", wBig + gap, cy - panelH * 0.04, panelH * 0.07);
  ctx.fillStyle = "#FFD400";
  ctx.font = `italic bold ${Math.round(panelH * 0.28)}px Arial, Helvetica, sans-serif`;
  stroke("Big", wBig + gap + wC * 0.02, gy0 + panelH * 0.13, panelH * 0.045);
  ctx.restore();
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace ?? tex.colorSpace;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  material.map = tex;
  material.color.setHex(16777215);
  material.needsUpdate = true;
}
function createObjectModel(spec, options = {}) {
  const root = createBigCStoreBuildingModel(options);
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
      // puppeteer bridge and its registry field is a number; a Record of Object3D is circular
      // and fails to serialise, which surfaces as the whole stats object arriving undefined.
      // The Record stays reachable under byId.
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmlnIEMgU3RvcmUgQnVpbGRpbmcgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlIGlzIGltcG9ydGVkLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTXG4gKiB3aXRoIGEgYmFyZSByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5XG4gKiBtZWFucyB0aGlzIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IHRoZVxuICogZ2VvbWV0cnkgbWVyZ2luZyBhbmQgaW5zdGFuY2luZyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgaW5zdGVhZCBvZiB1c2luZyBCdWZmZXJHZW9tZXRyeVV0aWxzIC0tXG4gKiBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXMgYSBzZWNvbmQgaW1wb3J0IGFuZCB3b3VsZCBmYWlsIGF0IHJ1bnRpbWUuXG4gKlxuICogRW52ZWxvcGU6IDguMDAgeCA0LjYwIHggNy4wMCBtLCBvcmlnaW4gYXQgYmFzZS1jZW50ZXIsICtZIHVwLCBnbGF6ZWQgc2hvcGZyb250IGZhY2luZyArWi5cbiAqIEJ1ZGdldCAoaGVybzJ4KTogPD0xNjAwMCB0cmlhbmdsZXMsIDw9MTIgZHJhdyBjYWxscywgPD04IG1hdGVyaWFscywgPD0xNiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqIEJ1aWx0OiAxMSBkcmF3IGNhbGxzLCA3IG1hdGVyaWFscywgMTEgdW5pcXVlIGdlb21ldHJpZXMuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqXG4gKiBDb25jYXRlbmF0ZSBnZW9tZXRyaWVzIGludG8gb25lIEJ1ZmZlckdlb21ldHJ5IC0tIHRoZSBsb2NhbCBzdGFuZC1pbiBmb3JcbiAqIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBsaXZlcyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gYW5kIHRoZXJlZm9yZVxuICogY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIGZpcnN0IHNvIHRoZSBhdHRyaWJ1dGVcbiAqIGFycmF5cyBjYW4gc2ltcGx5IGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCxcbiAqIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgYWN0dWFsbHkgbWVhc3VyZXMuXG4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBUcmFjayB3aGljaCBwYXJ0cyBhcmUgdGhyb3dhd2F5IGNvbnZlcnNpb25zIHNvIG9ubHkgdGhvc2UgZ2V0IGRpc3Bvc2VkLiBEaXNwb3NpbmcgYVxuICAvLyBjYWxsZXItb3duZWQgZ2VvbWV0cnkgaGVyZSB3b3VsZCBmcmVlIGEgYnVmZmVyIHRoYXQgaXMgc3RpbGwgcmVmZXJlbmNlZCBlbHNld2hlcmUuXG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXBvcmFyeTogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHtcbiAgICAgIHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7XG4gICAgICB0ZW1wb3JhcnkucHVzaCh0cnVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICAgIHRlbXBvcmFyeS5wdXNoKGZhbHNlKTtcbiAgICB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcblxuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcblxuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpO1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikge1xuICAgICAgICBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpO1xuICAgICAgICBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTtcbiAgICAgICAgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7XG4gICAgICB9XG4gICAgICBpZiAodCkge1xuICAgICAgICB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7XG4gICAgICAgIHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7XG4gICAgICB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHRlbXBvcmFyeVtpXSkgcGFydHNbaV0uZGlzcG9zZSgpO1xuICAgIGdlb3NbaV0uZGlzcG9zZSgpO1xuICB9XG5cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIGJveCBpbiBXT1JMRCBtZXRyZXMsIGdpdmVuIGFzIGNlbnRyZSArIHNpemUuICovXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpO1xuICBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIFktYXhpcyBjeWxpbmRlciBpbiBXT1JMRCBtZXRyZXMuICovXG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByOiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBoLCBzZWcpO1xuICBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxudHlwZSBNYXRTcGVjID0ge1xuICBpZDogc3RyaW5nO1xuICBjb2xvcjogbnVtYmVyO1xuICByb3VnaG5lc3M6IG51bWJlcjtcbiAgbWV0YWxuZXNzOiBudW1iZXI7XG4gIG9wYWNpdHk/OiBudW1iZXI7XG4gIGVudk1hcEludGVuc2l0eT86IG51bWJlcjtcbn07XG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaGVyZSBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gdGhpcyBmdW5jdGlvbiBkb2VzIE5PVFxuICogc3ludGhlc2lzZSBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuIFRoYXQgbWF0dGVycyB0d2ljZSBvdmVyLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0XG4gKiB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXIgbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRVxuICogb2YgdGhlIHJlc29sdXRpb24gLS0gc2V2ZW4gbWF0ZXJpYWxzIGF0IDEwMjQgd291bGQgY29zdCBzZWNvbmRzIGluc2lkZSB0aGlzIGNhbGwsIGJlZm9yZSB0aGVcbiAqIGRyYXdlciBjYW4gc2hvdyBhbnl0aGluZy4gQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzXG4gKiBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBvdXQgb2YgdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nXG4gKiB0aGUgbWVhc3VyZWQgYWxiZWRvIGJlbG93IC0tIHdoaWNoIGlzIGV4YWN0bHkgd2hhdCByZW5kZXJzIGEgYnVpbGRpbmcgbWlkLWdyZXkuXG4gKlxuICogVGhlIG9uZSBwcmludGVkIGdyYXBoaWMgb24gdGhpcyBwcm9wLCB0aGUgQmlnIEMgZmFzY2lhLCBpcyBhIGNhbnZhcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbFxuICogY29uc3RydWN0aW9uIGluIGFwcGx5RmFzY2lhR3JhcGhpYygpLiBUaGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gZG9lcyBub3QgYWZmZWN0IGl0LCBhbmRcbiAqIHRoYXQgaXMgdGhlIGRvY3VtZW50ZWQgcm91dGUgZm9yIGEgYnJhbmQgZmFzY2lhLlxuICovXG5jb25zdCBNQVRFUklBTF9TUEVDUzogTWF0U3BlY1tdID0gW1xuICB7IGlkOiAncmVuZGVyLXdhbGwnLCBjb2xvcjogMHg5Yzk0OGIsIHJvdWdobmVzczogMC44OCwgbWV0YWxuZXNzOiAwLjAgfSxcbiAgeyBpZDogJ3Jvb2YtZGVjaycsIGNvbG9yOiAweGMyYzJjMywgcm91Z2huZXNzOiAwLjg1LCBtZXRhbG5lc3M6IDAuMCB9LFxuICAvLyBXSElURSwgZGVsaWJlcmF0ZWx5LiBUaGlzIG1hdGVyaWFsIGlzIG9ubHkgZXZlciB1c2VkIGJ5IGFuIEluc3RhbmNlZE1lc2ggdGhhdCBzZXRzIGFcbiAgLy8gcGVyLWluc3RhbmNlIGNvbG91ciwgYW5kIEluc3RhbmNlZE1lc2guc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IuIEF1dGhvcmVkXG4gIC8vIGF0IHRoZSBtZWFzdXJlZCAjQjBBREE4IHRoZSBtZWFzdXJlZCBibG9jayB0b25lcyB3ZXJlIGJlaW5nIG11bHRpcGxpZWQgZG93biBieSBpdCBhbmQgdGhlXG4gIC8vIGNhcCBjb3Vyc2UgcmVuZGVyZWQgYnJvd24uIFRoZSBtZWFzdXJlZCBjb2xvdXJzIG5vdyBsaXZlIGluIENBUF9CTE9DS19UT05FUywgdW5tb2R1bGF0ZWQuXG4gIHsgaWQ6ICdwYXJhcGV0LWJsb2NrJywgY29sb3I6IDB4ZmZmZmZmLCByb3VnaG5lc3M6IDAuOCwgbWV0YWxuZXNzOiAwLjAgfSxcbiAgeyBpZDogJ3NpZ24tZmFjZScsIGNvbG9yOiAweGQ5ZDlkOCwgcm91Z2huZXNzOiAwLjM1LCBtZXRhbG5lc3M6IDAuMCwgZW52TWFwSW50ZW5zaXR5OiAwLjYgfSxcbiAgLy8gTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHRoZSBwaHlzaWNhbCB2YWx1ZSBmb3IgYWx1bWluaXVtIGFuZCBnYWx2YW5pc2VkIHN0ZWVsLiBUaGVcbiAgLy8gdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGEgaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsXG4gIC8vIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0byByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gYXQgdGhlIHBoeXNpY2FsIDAuODUgdGhlIGNhbm9weSBwbGF0ZXMsXG4gIC8vIG11bGxpb25zIGFuZCBjb25kZW5zZXJzIGFsbCBjYW1lIG91dCBuZWFyLWJsYWNrIGFnYWluc3QgYSBwbGF0ZSB0aGF0IHNob3dzIHRoZW0gcGFsZSBncmV5LlxuICAvLyBUaGUgYWxiZWRvIHN0YXlzIGF0IHRoZSBtZWFzdXJlZCB2YWx1ZTsgaXQgaXMgdGhlIG1ldGFsbmVzcyB0aGF0IGlzIHdyb25nIGZvciB0aGlzIGxpZ2h0aW5nXG4gIC8vIHJpZywgc28gdGhhdCBpcyB3aGF0IG1vdmVzLiBUaGUgc2hpcHBlZCA3LUVsZXZlbiBzaWJsaW5nIGNhcHMgdGhlIHNhbWUgdHdvIGF0IDAuMzUgYW5kIDAuMzAuXG4gIHsgaWQ6ICdhbHVtaW5pdW0nLCBjb2xvcjogMHhiZGJjYjksIHJvdWdobmVzczogMC40MiwgbWV0YWxuZXNzOiAwLjM1IH0sXG4gIHsgaWQ6ICdnbGFzcy10aW50ZWQnLCBjb2xvcjogMHg2YjZmNmUsIHJvdWdobmVzczogMC4xOCwgbWV0YWxuZXNzOiAwLjAsIG9wYWNpdHk6IDAuOTIsIGVudk1hcEludGVuc2l0eTogMS4xIH0sXG4gIHsgaWQ6ICdnYWx2LXBsYW50JywgY29sb3I6IDB4OTA5NjlhLCByb3VnaG5lc3M6IDAuNTIsIG1ldGFsbmVzczogMC4zIH0sXG5dO1xuXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIE1BVEVSSUFMX1NQRUNTKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gTW9zdGx5IG9wYXF1ZSBPTiBQVVJQT1NFLiBUaGUgYnVpbGRpbmcgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgd2l0aCBubyBpbnRlcmlvciBnZW9tZXRyeVxuICAgICAgLy8gYmVoaW5kIHRoZSBnbGFzcywgc28gYSBmdWxseSB0cmFuc3BhcmVudCBwYW5lIHdvdWxkIHJlYWQgYXMgYSBob2xlIHB1bmNoZWQgdGhyb3VnaCB0aGVcbiAgICAgIC8vIHdhbGwgcmF0aGVyIHRoYW4gYXMgZ2xhemluZy5cbiAgICAgIG0udHJhbnNwYXJlbnQgPSB0cnVlO1xuICAgICAgbS5vcGFjaXR5ID0gcy5vcGFjaXR5O1xuICAgICAgbS5kZXB0aFdyaXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuY29uc3QgQ0FQX0JMT0NLX1RPTkVTID0gWzB4OWQ5OTkyLCAweGMzYzNjMiwgMHhiOWI3YjQsIDB4YTlhNmExXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJpZ0NTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdCaWcgQyBTdG9yZSBCdWlsZGluZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcblxuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICBmdW5jdGlvbiBhZGRDb21wb25lbnQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKTogVEhSRUUuTWVzaCB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICAgIG5vZGUubmFtZSA9IGAke25hbWV9X19ub2RlYDtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lO1xuICAgIG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7XG4gICAgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTtcbiAgICByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlO1xuICAgIG1lc2hlc1tpZF0gPSBtZXNoO1xuICAgIGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkSW5zdGFuY2VkKFxuICAgIGlkOiBzdHJpbmcsXG4gICAgbmFtZTogc3RyaW5nLFxuICAgIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgbWF0SWQ6IHN0cmluZyxcbiAgICBtYXRyaWNlczogVEhSRUUuTWF0cml4NFtdLFxuICAgIGNvbG9ycz86IG51bWJlcltdLFxuICApOiBUSFJFRS5JbnN0YW5jZWRNZXNoIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gICAgbm9kZS5uYW1lID0gYCR7bmFtZX1fX25vZGVgO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHJpY2VzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTtcbiAgICBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93O1xuICAgIGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRyaWNlcy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRyaWNlc1tpXSk7XG4gICAgaWYgKGNvbG9ycykge1xuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xvcnMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xvcnNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpO1xuICAgIHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7XG4gICAgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoO1xuICAgIGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG5cbiAgLyogLS0gMS4gYnVpbGRpbmcgc2hlbGwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFNPTElEIGJveCwgbm90IGEgcmluZy4gVGhlIHByb3AgaXMgYW4gZXh0ZXJpb3Igc2hlbGwgdGhhdCBpcyBvbmx5IGV2ZXIgc2VlbiBmcm9tIG91dHNpZGUsXG4gICAqIHNvIGFuIGludGVyaW9yIGNvc3RzIGRyYXcgY2FsbHMsIGdlb21ldHJpZXMgYW5kIFZSQU0gZm9yIHNvbWV0aGluZyBub2JvZHkgc2Vlcy4gU29saWQgYWxzb1xuICAgKiBtZWFucyB0aGUgc2hvcGZyb250IG5lZWRzIG5vIG9wZW5pbmcgY3V0IGludG8gaXQsIHdoaWNoIHJlbW92ZXMgYWxsIGZvdXIgcmV2ZWFsIGZhY2VzIGFuZFxuICAgKiB0aGUgei1maWdodGluZyB0aGV5IGNhdXNlLlxuICAgKiBTZXQgSU5TSURFIHRoZSBwYXJhcGV0IHJpbmcgYnkgMC4wNiBtIG9uIGV2ZXJ5IGVsZXZhdGlvbiAod2FsbHMgKy0zLjk0IC8gLTMuNDQ7IHBhcmFwZXRcbiAgICogKy00LjAwIC8gLTMuNTApIHNvIG5vIHdhbGwgZmFjZSBpcyBldmVyIGNvcGxhbmFyIGFuZCBjby1mYWNpbmcgd2l0aCBhIHBhcmFwZXQgZmFjZS4gKi9cbiAgYWRkQ29tcG9uZW50KCdidWlsZGluZy1zaGVsbCcsICdCdWlsZGluZyBzaGVsbCcsIGJveEF0KDAsIDEuNzc1LCAtMC40NywgNy44OCwgMy41NSwgNS45NCksICdyZW5kZXItd2FsbCcpO1xuICBjb2xsaWRlcnNbJ2J1aWxkaW5nLXNoZWxsJ10gPSB7XG4gICAgc2hhcGU6ICdib3gnLFxuICAgIGxvY2FsQ2VudGVyOiBbMCwgMi4zLCAwXSxcbiAgICBoYWxmRXh0ZW50czogWzQuMCwgMi4zLCAzLjVdLFxuICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICB9O1xuXG4gIC8qIC0tIDIuIHJvb2YgZGVjayAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogU3BhbnMgeSAzLjUwLi4zLjYyLCBzbyBpdHMgdW5kZXJzaWRlIGlzIHN1bmsgMC4wNSBtIElOVE8gdGhlIHNoZWxsICh0b3AgMy41NSkgcmF0aGVyIHRoYW5cbiAgICogcmVzdGluZyBvbiBpdC4gQXV0aG9yZWQgMy41NS4uMy42MiB0aGUgZGVjaydzIGJvdHRvbSBmYWNlIGFuZCB0aGUgcGFyYXBldCByaW5nJ3MgYm90dG9tXG4gICAqIGZhY2Ugd2VyZSBib3RoIGF0IHk9My41NTAgYW5kIGJvdGggZmFjaW5nIGRvd24gLS0gNDYgbTIgb2YgY29wbGFuYXIgY28tZmFjaW5nIHN1cmZhY2UsIGFuZFxuICAgKiB0aGUgb25lIHBhaXIgY2hlY2stY29wbGFuYXIgY2F1Z2h0IG9uIHRoaXMgcHJvcC4gU2lua2luZyBpdCBtYWtlcyB0aGUganVuY3Rpb24gYW4gb3ZlcmxhcFxuICAgKiBvZiBzb2xpZHMsIHdoaWNoIGNhbm5vdCBmaWdodC4gKi9cbiAgYWRkQ29tcG9uZW50KCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgYm94QXQoMCwgMy41NiwgLTAuNDcsIDcuOCwgMC4xMiwgNS45KSwgJ3Jvb2YtZGVjaycpO1xuXG4gIC8qIC0tIDMuIHBhcmFwZXQgcmluZyArIGZyb250IHNpZ24gd2FsbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBGT1VSIGJveGVzIG1lcmdlZCBpbnRvIE9ORSBjb21wb25lbnQgYW5kIE9ORSBkcmF3IGNhbGwuIFRoZSBmcm9udCBpcyB0YWxsZXIgdGhhbiB0aGVcbiAgICogc2lkZXMsIHdoaWNoIGEgcGxhbiBleHRydXNpb24gY2Fubm90IGV4cHJlc3MsIHNvIG1lcmdlZCBib3hlcyBhcmUgdGhlIHJpZ2h0IHByaW1pdGl2ZS5cbiAgICogVGhlIGZyb250IGJveCBPVkVSTEFQUyBpbnRvIHRoZSBzaGVsbCB0b3AgcmF0aGVyIHRoYW4gYnV0dGluZyBpdC4gKi9cbiAgYWRkQ29tcG9uZW50KFxuICAgICdwYXJhcGV0JyxcbiAgICAnUGFyYXBldCByaW5nIGFuZCBzaWduIHdhbGwnLFxuICAgIG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgwLCAzLjkzNSwgMi40NywgOC4wLCAwLjc3LCAwLjU0KSwgLy8gZnJvbnQgc2lnbiB3YWxsLCAwLjI0IG0gcHJvdWQgb2YgdGhlIGZhY2FkZVxuICAgICAgYm94QXQoLTMuODgsIDMuNzUsIC0wLjY1LCAwLjI0LCAwLjQsIDUuNyksIC8vIGxlZnQgdXBzdGFuZFxuICAgICAgYm94QXQoMy44OCwgMy43NSwgLTAuNjUsIDAuMjQsIDAuNCwgNS43KSwgLy8gcmlnaHQgdXBzdGFuZFxuICAgICAgYm94QXQoMCwgMy43NSwgLTMuMzgsIDguMCwgMC40LCAwLjI0KSwgLy8gcmVhciB1cHN0YW5kXG4gICAgXSksXG4gICAgJ3JlbmRlci13YWxsJyxcbiAgKTtcblxuICAvKiAtLSA0LiBCaWcgQyBmYXNjaWEgbGlnaHRib3ggLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIFN1bmsgMC4wNCBtIElOVE8gdGhlIHBhcmFwZXQgZnJvbnQgZmFjZSAoMi43NCkgYW5kIHN0YW5kaW5nIDAuMDggbSBwcm91ZCBvZiBpdCwgc28gdGhlXG4gICAqIHBhbmVsIG92ZXJsYXBzIGl0cyBzdXJyb3VuZCBpbnN0ZWFkIG9mIG1lZXRpbmcgaXQuIFVWcyBhcmUgQVVUSE9SRUQsIG5vdCBnZW5lcmF0ZWQ6IHRoZVxuICAgKiArWiBmYWNlIHNhbXBsZXMgdGhlIHdvcmRtYXJrIGJhbmQgb2YgdGhlIGNhbnZhcyBhbmQgdGhlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW5cbiAgICogd2hpdGUgY29ybmVyIG9mIHRoZSBzYW1lIGNhbnZhcywgd2hpY2gga2VlcHMgdGhlIGJyYW5kIGdyYXBoaWMgYXQgb25lIG1hdGVyaWFsIGFuZCBvbmVcbiAgICogZHJhdyBjYWxsIGluc3RlYWQgb2YgYWRkaW5nIGEgc2VwYXJhdGUgZ3JhcGhpYyBwbGFuZS4gKi9cbiAgY29uc3Qgc2lnbkdlbyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSg2LjYsIDAuNTgsIDAuMTIpO1xuICB7XG4gICAgLy8gQm94R2VvbWV0cnkgdmVydGV4IG9yZGVyIGlzIHB4LCBueCwgcHksIG55LCBweiwgbnogLS0gZm91ciB2ZXJ0aWNlcyBwZXIgZmFjZS5cbiAgICAvLyBGYWNlIDQgKCtaKSBpcyB2ZXJ0aWNlcyAxNi4uMTkuXG4gICAgY29uc3QgdXYgPSBzaWduR2VvLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB7XG4gICAgICBpZiAoaSA+PSAxNiAmJiBpIDwgMjApIHtcbiAgICAgICAgLy8gK1ogLT4gdGhlIHdvcmRtYXJrIGJhbmQsIGNhbnZhcyB2IDAuMTI1Li4xLjBcbiAgICAgICAgY29uc3QgdSA9IHV2LmdldFgoaSk7XG4gICAgICAgIGNvbnN0IHZ2ID0gdXYuZ2V0WShpKTtcbiAgICAgICAgdXYuc2V0WFkoaSwgdSwgMC4xMjUgKyB2diAqIDAuODc1KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGV2ZXJ5IG90aGVyIGZhY2UgLT4gYSAzJSB3aGl0ZSBjb3JuZXIgb2YgdGhlIHNhbWUgY2FudmFzXG4gICAgICAgIHV2LnNldFhZKGksIHV2LmdldFgoaSkgKiAwLjAzLCB1di5nZXRZKGkpICogMC4wMyk7XG4gICAgICB9XG4gICAgfVxuICAgIHV2Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBzaWduR2VvLnRyYW5zbGF0ZSgwLCAzLjk3LCAyLjc2KTtcbiAgfVxuICBhZGRDb21wb25lbnQoJ3NpZ24tbGlnaHRib3gnLCAnQmlnIEMgZmFzY2lhIGxpZ2h0Ym94Jywgc2lnbkdlbywgJ3NpZ24tZmFjZScpO1xuXG4gIC8qIC0tIDUuIHNob3Bmcm9udCBnbGF6aW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBPbmUgcGFuZSwgbm90IG9uZSBwZXIgYmF5OiB0aGUgbXVsbGlvbiBncmlkIGluIGZyb250IGRvZXMgdGhlIGRpdmlkaW5nLiBPdmVybGFwcyBJTlRPIHRoZVxuICAgKiBmYWNhZGUgYXQgdGhlIGJhY2sgKDIuNDYgdnMgdGhlIHdhbGwgZmFjZSBhdCAyLjUwKSBhbmQgc2l0cyBSRUNFU1NFRCBiZWhpbmQgdGhlIGZyYW1pbmcgYXRcbiAgICogdGhlIGZyb250ICgyLjU2IHZzIDIuNjQpLCB3aGljaCBpcyB3aGF0IG1ha2VzIGl0IHJlYWQgYXMgZ2xhc3Mgc2V0IGludG8gYSBmcmFtZS4gKi9cbiAgYWRkQ29tcG9uZW50KCdzaG9wZnJvbnQtZ2xhemluZycsICdTaG9wZnJvbnQgZ2xhemluZycsIGJveEF0KDAsIDEuNjY1LCAyLjUxLCA2LjUsIDIuOTcsIDAuMSksICdnbGFzcy10aW50ZWQnKTtcblxuICAvKiAtLSA2LiBzaG9wZnJvbnQgZnJhbWluZyArIGRvb3IgYmF5IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogRWlnaHQgYm94ZXMgbWVyZ2VkIGludG8gb25lIGNvbXBvbmVudC4gRXZlcnkgcGFydCBpcyB0aGUgc2FtZSBhbm9kaXNlZCBhbHVtaW5pdW07IGZvbGRpbmdcbiAgICogdGhlbSB0b2dldGhlciBpcyB0aGUgZHJhdy1jYWxsIGxldmVyIGNob3NlbiBpbiB0aGUgYmxvY2tvdXQsIG5vdCBhbiBvcHRpbWlzYXRpb24gZGVmZXJyZWRcbiAgICogdG8gdGhlIGVuZCAtLSBhIHBhcnQgc3BsaXQgZm9yIGF1dGhvcmluZyBjb252ZW5pZW5jZSBjYW5ub3QgYmUgbWVyZ2VkIGFmdGVyd2FyZHMgb25jZSBhXG4gICAqIHBpdm90IGhhbmdzIG9mZiBpdC4gRnJvbnQgZmFjZSAyLjY0IHN0YW5kcyBwcm91ZCBvZiBib3RoIHRoZSBnbGF6aW5nIGFuZCB0aGUgbXVsbGlvbnMuICovXG4gIGFkZENvbXBvbmVudChcbiAgICAnc2hvcGZyb250LWZyYW1lJyxcbiAgICAnU2hvcGZyb250IGZyYW1pbmcgYW5kIGRvb3IgYmF5JyxcbiAgICBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoLTMuMjg1LCAxLjY2LCAyLjU4LCAwLjA3LCAzLjEyLCAwLjEyKSwgLy8gbGVmdCBzdGlsZVxuICAgICAgYm94QXQoMy4yODUsIDEuNjYsIDIuNTgsIDAuMDcsIDMuMTIsIDAuMTIpLCAvLyByaWdodCBzdGlsZVxuICAgICAgYm94QXQoMCwgMy4xODUsIDIuNTgsIDYuNjQsIDAuMDcsIDAuMTIpLCAvLyBoZWFkXG4gICAgICBib3hBdCgwLCAwLjE0LCAyLjU4LCA2LjY0LCAwLjA4LCAwLjEyKSwgLy8gc2lsbCAvIGtpY2sgcmFpbFxuICAgICAgYm94QXQoMCwgMi40NiwgMi41OCwgNi41LCAwLjA4LCAwLjEyKSwgLy8gdHJhbnNvbVxuICAgICAgYm94QXQoLTEuMTg1LCAxLjMsIDIuNTgsIDAuMDcsIDIuNCwgMC4xMiksIC8vIGRvb3IgamFtYiBMXG4gICAgICBib3hBdCgxLjE4NSwgMS4zLCAyLjU4LCAwLjA3LCAyLjQsIDAuMTIpLCAvLyBkb29yIGphbWIgUlxuICAgICAgYm94QXQoMCwgMi42MSwgMi41OCwgMi4zLCAwLjIyLCAwLjEyKSwgLy8gZG9vciBoZWFkZXIgYm94XG4gICAgXSksXG4gICAgJ2FsdW1pbml1bScsXG4gICk7XG5cbiAgLyogLS0gNy4gcm9sbGVyIHNodXR0ZXIgKC1YIHdhbGwgb25seSkgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIE5PVCBtaXJyb3JlZCBvbnRvIHRoZSArWCB3YWxsOiBvbmx5IG9uZSBzaHV0dGVyIGlzIGV2aWRlbmNlZCBpbiB0aGUgc2luZ2xlIHBsYXRlLCBhbmQgdGhlXG4gICAqICtYIGVsZXZhdGlvbiBpcyB1bm9ic2VydmVkIGF0IDAuMjUgY29uZmlkZW5jZS4gVGhlIGNvcnJ1Z2F0aW9uIGlzIDIwIHJpYmJlZCBzbGF0cyBpblxuICAgKiBHRU9NRVRSWSwgd2hpY2ggdGhlIHNpbGhvdWV0dGUgc2hvd3MgYXQgYSBncmF6aW5nIGFuZ2xlLCByYXRoZXIgdGhhbiBhIG5vcm1hbCBtYXAuXG4gICAqIFRoZSBvdXRlciBmYWNlIHNpdHMgYXQgLTMuOTk6IHByb3VkIG9mIHRoZSB3YWxsICgtMy45NCkgYnV0IGRlbGliZXJhdGVseSBOT1QgYXQgLTQuMDAsXG4gICAqIGJlY2F1c2UgYSBmYWNlIGF0IGV4YWN0bHkgLTQuMDAgd291bGQgYmUgY29wbGFuYXIgYW5kIGNvLWZhY2luZyB3aXRoIHRoZSBwYXJhcGV0IG91dGVyXG4gICAqIGZhY2UgLS0gd2hpY2ggdGhlIGJvdW5kaW5nLWJveCBjb3BsYW5hcml0eSBjaGVjayBmbGFncyBldmVuIHRob3VnaCB0aGUgdHdvIG5ldmVyIG92ZXJsYXBcbiAgICogaW4gWS4gKi9cbiAge1xuICAgIGNvbnN0IHNsYXRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgU0xBVF9DT1VOVCA9IDIwO1xuICAgIGNvbnN0IFNMQVRfSCA9IDIuMjUgLyBTTEFUX0NPVU5UO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU0xBVF9DT1VOVDsgaSsrKSB7XG4gICAgICBjb25zdCB5ID0gMC4xICsgU0xBVF9IICogKGkgKyAwLjUpO1xuICAgICAgLy8gVGhlIGNvcnJ1Z2F0aW9uIGFsdGVybmF0ZXMgYnkgbWFraW5nIGV2ZXJ5IG90aGVyIHNsYXQgVEhJTk5FUiwgbmV2ZXIgYnkgcHVzaGluZyBvbmVcbiAgICAgIC8vIGZ1cnRoZXIgb3V0LiBHcm93aW5nIHRoZSBwcm91ZCBzbGF0cyBvdXR3YXJkIGluc3RlYWQgcHV0IHRoZWlyIGZhY2VzIGF0IHg9LTQuMDA1IC0tXG4gICAgICAvLyBwYXN0IHRoZSBkZWNsYXJlZCA4LjAwIG0gZW52ZWxvcGUgQU5EIG9udG8gdGhlIHBhcmFwZXQncyBvd24gLTQuMDAgcGxhbmUsIHdoaWNoIGlzIHRoZVxuICAgICAgLy8gY29wbGFuYXIgY28tZmFjaW5nIHBhaXIgdGhpcyB3aG9sZSBsYXlvdXQgaXMgYXJyYW5nZWQgdG8gYXZvaWQuIEJvdGggc2xhdCBkZXB0aHMgc2hhcmVcbiAgICAgIC8vIHRoZSBpbm5lciBmYWNlIGF0IC0zLjkwOyBvbmx5IHRoZSBvdXRlciBmYWNlIG1vdmVzLCBiZXR3ZWVuIC0zLjk5IGFuZCAtMy45NzUuXG4gICAgICBjb25zdCB0aGlja25lc3MgPSBpICUgMiA9PT0gMCA/IDAuMDkgOiAwLjA3NTtcbiAgICAgIHNsYXRzLnB1c2goYm94QXQoLTMuOSAtIHRoaWNrbmVzcyAvIDIsIHksIDEuMzUsIHRoaWNrbmVzcywgU0xBVF9IICogMC45MiwgMS41KSk7XG4gICAgfVxuICAgIHNsYXRzLnB1c2goYm94QXQoLTMuOTM1LCAyLjQ4NSwgMS4zNSwgMC4xMSwgMC4yNywgMS42KSk7IC8vIGhlYWQgYm94XG4gICAgYWRkQ29tcG9uZW50KCdyb2xsZXItc2h1dHRlcicsICdSb2xsZXIgc2h1dHRlciBhbmQgaGVhZCBib3gnLCBtZXJnZUdlb3Moc2xhdHMpLCAnZ2Fsdi1wbGFudCcpO1xuICB9XG5cbiAgLyogLS0gUjEuIHBhcmFwZXQgY2FwIGNvdXJzZSArIGNvcm5lciBxdW9pbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAqIENhcCBjb3Vyc2UgYW5kIHF1b2lucyBhcmUgdGhlIFNBTUUgYmxvY2sgYXQgZGlmZmVyZW50IHRyYW5zZm9ybXMsIHNvIGJvdGggc2V0cyByaWRlIG9uZVxuICAgKiBJbnN0YW5jZWRNZXNoIGFuZCBvbmUgZ2VvbWV0cnk6IDE4IHBhcnRzIGZvciAxIGRyYXcgY2FsbCBpbnN0ZWFkIG9mIDE4LiBUaGUgYmxvY2stdG8tYmxvY2tcbiAgICogdG9uYWwgdmFyaWF0aW9uIG1lYXN1cmVkIGF0IHN0YW5kYXJkIGRldmlhdGlvbiAyNSBpcyBjYXJyaWVkIGJ5IGluc3RhbmNlQ29sb3IsIHdoaWNoIGNvc3RzXG4gICAqIG5vdGhpbmcsIHJhdGhlciB0aGFuIGJ5IGEgdGV4dHVyZSBzZXQgLS0gYSBjb2xvdXIgZGlmZmVyZW5jZSBpcyBub3QgYSBtYXRlcmlhbCBkaWZmZXJlbmNlLlxuICAgKiBCbG9ja3Mgc3RvcCAwLjAyIG0gc2hvcnQgb2YgdGhlIHBhcmFwZXQgb3V0ZXIgZmFjZSBzbyB0aGUgdHdvIGFyZSBuZXZlciBjb3BsYW5hciwgYW5kXG4gICAqIG92ZXJoYW5nIHRoZSBwYXJhcGV0IGZyb250IHRvIHo9Mi44MCwgd2hpY2ggaXMgd2hhdCBhIGNvcGluZyBkb2VzLiAqL1xuICB7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgY29uc3QgY29sczogbnVtYmVyW10gPSBbXTtcbiAgICBjb25zdCBwdXNoID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpID0+IHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKHgsIHksIHopLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh3LCBoLCBkKSxcbiAgICAgICkpO1xuICAgICAgY29scy5wdXNoKENBUF9CTE9DS19UT05FU1ttYXRzLmxlbmd0aCAlIENBUF9CTE9DS19UT05FUy5sZW5ndGhdKTtcbiAgICB9O1xuICAgIGNvbnN0IE4gPSAxMjtcbiAgICBjb25zdCBTUEFOID0gNy45NjtcbiAgICBjb25zdCBXID0gU1BBTiAvIE47XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpKyspIHB1c2goLTMuOTggKyBXICogKGkgKyAwLjUpLCA0LjQ2LCAyLjU1LCBXIC0gMC4wMiwgMC4yOCwgMC41KTtcbiAgICBmb3IgKGNvbnN0IHN4IG9mIFstMy43NCwgMy43NF0pIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSBwdXNoKHN4LCAzLjU1ICsgMC4yNTY3ICogKGkgKyAwLjUpLCAyLjU1LCAwLjQ4LCAwLjI1NjcgLSAwLjAyLCAwLjUpO1xuICAgIH1cbiAgICBhZGRJbnN0YW5jZWQoJ3BhcmFwZXQtY2FwLWJsb2NrcycsICdQYXJhcGV0IGNhcCBibG9ja3MgYW5kIHF1b2lucycsIG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSgxLCAxLCAxKSwgJ3BhcmFwZXQtYmxvY2snLCBtYXRzLCBjb2xzKTtcbiAgfVxuXG4gIC8qIC0tIFIyLiBlbnRyYW5jZSBjYW5vcHkgcGxhdGVzLCB3aXRoIHRoZSBkb3dubGlnaHQgbWVyZ2VkIGluIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBPTkUgZG93bmxpZ2h0IGlzIG1lcmdlZCBpbnRvIHRoZSBwbGF0ZSBnZW9tZXRyeSBpdHNlbGYsIHNvIHNpeCBwbGF0ZXMgZ2l2ZSBzaXggZG93bmxpZ2h0c1xuICAgKiBmb3IgWkVSTyBleHRyYSBkcmF3IGNhbGxzOyBhcyBpdHMgb3duIHJlcGV0aXRpb24gc3lzdGVtIGl0IHdvdWxkIGhhdmUgY29zdCBvbmUuIENvdW50IGFuZFxuICAgKiBzcGFjaW5nIGFyZSBJTkZFUlJFRCBhdCAwLjUwIGNvbmZpZGVuY2UgLS0gdGhlIHNvZmZpdCBpcyBzZWVuIG9ubHkgYXQgYSBncmF6aW5nIGFuZ2xlLlxuICAgKiBUaGUgY2Fub3B5IG5vc2UgYXQgej0zLjUwIElTIHRoZSBkZWNsYXJlZCBmcm9udCBvZiB0aGUgZW52ZWxvcGU6IHRoZSBzaGVsbCBmcm9udCBmYWNlIHdhc1xuICAgKiBzZXQgYmFjayB0byB6PTIuNTAgcHJlY2lzZWx5IHNvIHRoaXMgMS4wMCBtIGNhbnRpbGV2ZXIgbGFuZHMgb24gdGhlIGRlY2xhcmVkIDcuMCBtIGRlcHRoXG4gICAqIGluc3RlYWQgb2Ygb3ZlcnJ1bm5pbmcgaXQuICovXG4gIHtcbiAgICBjb25zdCBwbGF0ZSA9IG1lcmdlR2VvcyhbXG4gICAgICBib3hBdCgwLCAwLCAwLCAxLjA4LCAwLjE0LCAxLjEpLFxuICAgICAgY3lsQXQoMCwgLTAuMDg1LCAwLjAsIDAuMDg1LCAwLjAzLCAxMiksXG4gICAgXSk7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgIG1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKC0zLjMgKyAxLjEgKiAoaSArIDAuNSksIDMuMzcsIDIuOTUpKTtcbiAgICB9XG4gICAgYWRkSW5zdGFuY2VkKCdjYW5vcHktcGxhdGVzJywgJ0VudHJhbmNlIGNhbm9weSBwbGF0ZXMnLCBwbGF0ZSwgJ2FsdW1pbml1bScsIG1hdHMpO1xuICB9XG5cbiAgLyogLS0gUjMuIHNob3Bmcm9udCBtdWxsaW9ucyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgKiBUaGUgZmluZSB2ZXJ0aWNhbCBncmlkIGlzIHRoZSBtb3N0IHJlY29nbmlzYWJsZSB0aGluZyBhYm91dCB0aGUgc2hvcGZyb250LiBFbGV2ZW5cbiAgICogaW5zdGFuY2VzIG9uIG9uZSBnZW9tZXRyeSBjb3N0IG9uZSBkcmF3IGNhbGw7IGVsZXZlbiBjb21wb25lbnRzIHdvdWxkIGhhdmUgY29zdCBlbGV2ZW4gYW5kXG4gICAqIGJsb3duIHRoZSBjZWlsaW5nIG9uIHRoZWlyIG93bi4gVGhleSBvY2N1cHkgeiAyLjU0Li4yLjYyIC0tIElOU0lERSB0aGUgZnJhbWUgYmFuZFxuICAgKiAoMi41Mi4uMi42NCkgYXQgYm90aCBlbmRzLCBzbyB0aGV5IGFyZSBub3QgY29wbGFuYXIgd2l0aCBpdCwgd2hpbGUgc3RpbGwgc3RhbmRpbmcgcHJvdWQgb2ZcbiAgICogdGhlIGdsYXppbmcgYXQgMi41NiBzbyB0aGUgZ2xhc3MgcmVhZHMgYXMgcmVjZXNzZWQuICovXG4gIHtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBjb25zdCB4czogbnVtYmVyW10gPSBbMF07XG4gICAgZm9yIChsZXQgayA9IDE7IGsgPD0gNTsgaysrKSB7XG4gICAgICB4cy5wdXNoKC0zLjI1ICsgMC4zMzgzICogaywgMy4yNSAtIDAuMzM4MyAqIGspO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHggb2YgeHMuc29ydCgoYSwgYikgPT4gYSAtIGIpKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCAxLjY0NSwgMi41OCkpO1xuICAgIH1cbiAgICBhZGRJbnN0YW5jZWQoJ3Nob3Bmcm9udC1tdWxsaW9ucycsICdTaG9wZnJvbnQgbXVsbGlvbnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoMC4wNywgMy4wNSwgMC4wOCksICdhbHVtaW5pdW0nLCBtYXRzKTtcbiAgfVxuXG4gIC8qIC0tIFI0LiByb29mdG9wIGNvbmRlbnNlciB1bml0cyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICogQ2FzaW5nLCBjaXJjdWxhciBmYW4gY293bCBhbmQgZm91ciBmZWV0IE1FUkdFRCBpbnRvIGEgc2luZ2xlIGluc3RhbmNlZCBnZW9tZXRyeTogZm91clxuICAgKiB1bml0cywgb25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLiBUaGUgcGxhdGUgc2hvd3MgdHdvIHZpc3VhbGx5IHNpbWlsYXIgdW5pdCB0eXBlcztcbiAgICogY29sbGFwc2luZyB0aGVtIHRvIG9uZSBjb3N0cyBhIGxpdHRsZSBmaWRlbGl0eSBhbmQgc2F2ZXMgYSB3aG9sZSBkcmF3IGNhbGwsIGFuZCBpc1xuICAgKiByZXBvcnRlZCBhcyBhIGRlbGliZXJhdGUgc2ltcGxpZmljYXRpb24uIEFsdGVybmF0aW5nIHlhdyBnaXZlcyB0aGUgY2x1c3RlciB2YXJpZXR5IHdpdGhvdXRcbiAgICogYSBzZWNvbmQgZ2VvbWV0cnkuIEZlZXQgc3RhcnQgYXQgeT0zLjYwLCBzdW5rIDAuMDIgbSBJTlRPIHRoZSByb29mIGRlY2sgKHRvcCAzLjYyKSwgc28gdGhlXG4gICAqIHR3byBvdmVybGFwIHJhdGhlciB0aGFuIHNoYXJpbmcgYSBwbGFuZS4gKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoMCwgMC40NiwgMCwgMC45NSwgMC43MiwgMC44NSksIC8vIGNhc2luZ1xuICAgICAgY3lsQXQoMCwgMC44NywgMCwgMC4zLCAwLjEsIDE2KSwgLy8gZmFuIGNvd2xcbiAgICBdO1xuICAgIGZvciAoY29uc3QgZnggb2YgWy0wLjQsIDAuNF0pIHtcbiAgICAgIGZvciAoY29uc3QgZnogb2YgWy0wLjM1LCAwLjM1XSkgcGFydHMucHVzaChib3hBdChmeCwgMC4wNSwgZnosIDAuMDgsIDAuMSwgMC4wOCkpO1xuICAgIH1cbiAgICBjb25zdCB1bml0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICBjb25zdCBwbGFjZW1lbnRzOiBbbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXVtdID0gW1xuICAgICAgWy0yLjUsIDMuNiwgLTAuNiwgMF0sXG4gICAgICBbLTEuNiwgMy42LCAtMS4zLCBNYXRoLlBJIC8gMl0sXG4gICAgICBbMC45LCAzLjYsIC0wLjUsIDBdLFxuICAgICAgWzEuOCwgMy42LCAtMS4yLCBNYXRoLlBJIC8gMl0sXG4gICAgXTtcbiAgICBjb25zdCBtYXRzID0gcGxhY2VtZW50cy5tYXAoKFt4LCB5LCB6LCB5YXddKSA9PlxuICAgICAgbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSxcbiAgICAgICksXG4gICAgKTtcbiAgICBhZGRJbnN0YW5jZWQoJ3BsYW50LWNvbmRlbnNlcnMnLCAnUm9vZnRvcCBjb25kZW5zZXIgdW5pdHMnLCB1bml0LCAnZ2Fsdi1wbGFudCcsIG1hdHMpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJhbmQgZmFzY2lhIGNhbnZhcyAqL1xuXG4vKipcbiAqIFRoZSBCaWcgQyB3b3JkbWFyaywgZHJhd24gb250byBhIGNhbnZhcyBhbmQgYXNzaWduZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLiBUaGlzIGlzXG4gKiB0aGUgZG9jdW1lbnRlZCByb3V0ZSBmb3IgYSBwcmludGVkIGJyYW5kIGZhc2NpYSBhbmQgaXMgdW5hZmZlY3RlZCBieSB0aGUgbWF0ZXJpYWwnc1xuICogYHRleHR1cmVsZXNzYCBkZWNsYXJhdGlvbiAtLSB3aGF0IHRoYXQgZGVjbGFyYXRpb24gc2tpcHMgaXMgdGhlIGZpdmUtY2FudmFzIFBST0NFRFVSQUxcbiAqIHRleHR1cmUgc2V0LCB3aGljaCBpcyBhIGRpZmZlcmVudCB0aGluZyBmcm9tIGEgc2luZ2xlIGF1dGhvcmVkIGdyYXBoaWMuXG4gKlxuICogTGF5b3V0IGlzIG1lYXN1cmVkIG9mZiB0aGUgcGxhdGU6IHRoZSB3aGl0ZSBsaWdodGJveCBzcGFucyB4IDM4NS4uOTA1IHB4IGFuZCB0aGUgZ3JlZW4gZmllbGRcbiAqIHNwYW5zIDU3NS4uNzU1IHB4LCBzbyB0aGUgZ3JlZW4gc2l0cyBmcm9tIDM2LjUlIHRvIDczJSBvZiB0aGUgc2lnbiB3aWR0aC5cbiAqL1xuZnVuY3Rpb24gYXBwbHlGYXNjaWFHcmFwaGljKHJvb3Q6IFRIUkVFLkdyb3VwKTogdm9pZCB7XG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgfCB1bmRlZmluZWQ7XG4gIGNvbnN0IG1lc2ggPSBydD8ubWVzaGVzPy5bJ3NpZ24tbGlnaHRib3gnXTtcbiAgaWYgKCFtZXNoKSByZXR1cm47XG4gIGNvbnN0IG1hdGVyaWFsID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgaWYgKCFtYXRlcmlhbCB8fCB0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm47XG5cbiAgLy8gMjA0OCB4IDMyMDogdGhlIGZhc2NpYSBpcyA2LjYgbSB3aWRlLCBzbyB0aGUgd29yZG1hcmsgbmVlZHMgcmVhbCBob3Jpem9udGFsIHJlc29sdXRpb24gdG9cbiAgLy8gc3RheSBjcmlzcCB3aGVuIGEgcGxheWVyIHdhbGtzIHVwIHRvIHRoZSBkb29yLlxuICBjb25zdCBXID0gMjA0ODtcbiAgY29uc3QgSCA9IDMyMDtcbiAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGNhbnZhcy53aWR0aCA9IFc7XG4gIGNhbnZhcy5oZWlnaHQgPSBIO1xuICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgaWYgKCFjdHgpIHJldHVybjtcblxuICAvLyBUaGUgd2hvbGUgY2FudmFzIHN0YXJ0cyBhcyB0aGUgbWVhc3VyZWQgbGlnaHRib3ggd2hpdGUgKCNEOUQ5RDgpLiBUaGUgYm90dG9tIDEyLjUlIGlzIHRoZVxuICAvLyBwbGFpbiBjb3JuZXIgZXZlcnkgbm9uLWZyb250IGZhY2Ugb2YgdGhlIGJveCBzYW1wbGVzLCBzbyBpdCBtdXN0IHN0YXkgY2xlYW4uXG4gIGN0eC5maWxsU3R5bGUgPSAnI0Q5RDlEOCc7XG4gIGN0eC5maWxsUmVjdCgwLCAwLCBXLCBIKTtcblxuICBjb25zdCBiYW5kSCA9IEggKiAwLjg3NTsgLy8gY2FudmFzIHJvd3MgMC4uMjgwIGFyZSB0aGUgK1ogZmFjZTsgMjgwLi4zMjAgaXMgdGhlIHdoaXRlIGNvcm5lclxuICBjb25zdCBneDAgPSBXICogMC4zNjU7XG4gIGNvbnN0IGd4MSA9IFcgKiAwLjczO1xuICBjb25zdCBneTAgPSBiYW5kSCAqIDAuMTtcbiAgY29uc3QgZ3kxID0gYmFuZEggKiAwLjk7XG4gIGNvbnN0IHBhbmVsVyA9IGd4MSAtIGd4MDtcbiAgY29uc3QgcGFuZWxIID0gZ3kxIC0gZ3kwO1xuXG4gIC8vIGdyZWVuIHJvdW5kZWQtcmVjdCBmaWVsZFxuICBjb25zdCByID0gcGFuZWxIICogMC4xMjtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjOENDNjNGJztcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKGd4MCArIHIsIGd5MCk7XG4gIGN0eC5saW5lVG8oZ3gxIC0gciwgZ3kwKTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZ3gxLCBneTAsIGd4MSwgZ3kwICsgcik7XG4gIGN0eC5saW5lVG8oZ3gxLCBneTEgLSByKTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZ3gxLCBneTEsIGd4MSAtIHIsIGd5MSk7XG4gIGN0eC5saW5lVG8oZ3gwICsgciwgZ3kxKTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZ3gwLCBneTEsIGd4MCwgZ3kxIC0gcik7XG4gIGN0eC5saW5lVG8oZ3gwLCBneTAgKyByKTtcbiAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oZ3gwLCBneTAsIGd4MCArIHIsIGd5MCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcblxuICAvLyBUaGUgd29yZG1hcmsgaXMgZml0dGVkIHRvIHRoZSBwYW5lbCBieSBNRUFTVVJFTUVOVCwgbm90IGJ5IGEgZ3Vlc3NlZCBmb250IHNpemUuIFNpemVkIGJ5XG4gIC8vIHJhdGlvIGFsb25lIHRoZSBnbHlwaHMgZmlsbGVkIGFib3V0IDQwJSBvZiB0aGUgZ3JlZW4gZmllbGQgYWdhaW5zdCB0aGUgcGxhdGUncyB+ODYlLCBhbmQgdGhlXG4gIC8vIHNob3J0ZmFsbCBpcyBub3Qgc29tZXRoaW5nIGEgZml4ZWQgbXVsdGlwbGllciBjYW4gZml4OiBoZWFkbGVzcyBDaHJvbWUncyBmb250IGZhbGxiYWNrXG4gIC8vIGRlY2lkZXMgdGhlIGFjdHVhbCBhZHZhbmNlIHdpZHRocywgc28gdGhlIG9ubHkgcmVsaWFibGUgd2F5IHRvIGZpbGwgYSBrbm93biBib3ggaXMgdG9cbiAgLy8gbWVhc3VyZSB0aGUgdGV4dCBhbmQgc2NhbGUgaXQgaG9yaXpvbnRhbGx5IHRvIGZpdC5cbiAgY29uc3QgY3kgPSBneTAgKyBwYW5lbEggKiAwLjU2O1xuICBjdHgudGV4dEJhc2VsaW5lID0gJ21pZGRsZSc7XG4gIGN0eC50ZXh0QWxpZ24gPSAnbGVmdCc7XG5cbiAgY29uc3QgZm9udEJpZyA9IGBpdGFsaWMgYm9sZCAke01hdGgucm91bmQocGFuZWxIICogMC41OCl9cHggQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZmA7XG4gIGNvbnN0IGZvbnRDID0gYGJvbGQgJHtNYXRoLnJvdW5kKHBhbmVsSCAqIDEuMDIpfXB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZgO1xuXG4gIGN0eC5mb250ID0gZm9udEJpZztcbiAgY29uc3Qgd0JpZyA9IGN0eC5tZWFzdXJlVGV4dCgnQmlnJykud2lkdGg7XG4gIGN0eC5mb250ID0gZm9udEM7XG4gIGNvbnN0IHdDID0gY3R4Lm1lYXN1cmVUZXh0KCdDJykud2lkdGg7XG4gIGNvbnN0IGdhcCA9IHBhbmVsSCAqIDAuMDY7XG4gIGNvbnN0IHNjYWxlWCA9IChwYW5lbFcgKiAwLjg2KSAvICh3QmlnICsgZ2FwICsgd0MpO1xuXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC50cmFuc2xhdGUoZ3gwICsgcGFuZWxXICogMC4wNywgMCk7XG4gIGN0eC5zY2FsZShzY2FsZVgsIDEpO1xuXG4gIC8vIENyZWFtIGtleWxpbmUgYXJvdW5kIGV2ZXJ5IGdseXBoLiBJdCBpcyBub3QgZGVjb3JhdGlvbjogaW4gdGhlIHBsYXRlIHRoZSBvdXRsaW5lIGlzIHdoYXRcbiAgLy8gc2VwYXJhdGVzIHRoZSByZWQgbGV0dGVyZm9ybXMgZnJvbSB0aGUgZ3JlZW4gZmllbGQsIGFuZCB3aXRob3V0IGl0IHRoZSB3b3JkbWFyayByZWFkcyBhcyBhXG4gIC8vIG11ZGR5IHJlZCBzbWVhciBhdCB0aGUgZGlzdGFuY2UgYSBwbGF5ZXIgYWN0dWFsbHkgc2VlcyB0aGlzIGZhc2NpYSBmcm9tLlxuICBjb25zdCBzdHJva2UgPSAodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlcikgPT4ge1xuICAgIGN0eC5saW5lSm9pbiA9ICdyb3VuZCc7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gJyNGRkY2RTAnO1xuICAgIGN0eC5saW5lV2lkdGggPSB3aWR0aDtcbiAgICBjdHguc3Ryb2tlVGV4dCh0ZXh0LCB4LCB5KTtcbiAgICBjdHguZmlsbFRleHQodGV4dCwgeCwgeSk7XG4gIH07XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICcjRTMwNjEzJztcbiAgY3R4LmZvbnQgPSBmb250QmlnO1xuICBzdHJva2UoJ0JpZycsIDAsIGN5ICsgcGFuZWxIICogMC4wNSwgcGFuZWxIICogMC4wNyk7XG4gIGN0eC5mb250ID0gZm9udEM7XG4gIHN0cm9rZSgnQycsIHdCaWcgKyBnYXAsIGN5IC0gcGFuZWxIICogMC4wNCwgcGFuZWxIICogMC4wNyk7XG5cbiAgLy8gc21hbGwgeWVsbG93IFwiQmlnXCIgb24gdGhlIEMncyB1cHBlci1sZWZ0IHNob3VsZGVyLCBjbGVhciBvZiB0aGUgZ2x5cGhcbiAgY3R4LmZpbGxTdHlsZSA9ICcjRkZENDAwJztcbiAgY3R4LmZvbnQgPSBgaXRhbGljIGJvbGQgJHtNYXRoLnJvdW5kKHBhbmVsSCAqIDAuMjgpfXB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWZgO1xuICBzdHJva2UoJ0JpZycsIHdCaWcgKyBnYXAgKyB3QyAqIDAuMDIsIGd5MCArIHBhbmVsSCAqIDAuMTMsIHBhbmVsSCAqIDAuMDQ1KTtcbiAgY3R4LnJlc3RvcmUoKTtcblxuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjYW52YXMpO1xuICB0ZXguY29sb3JTcGFjZSA9IChUSFJFRSBhcyBhbnkpLlNSR0JDb2xvclNwYWNlID8/IHRleC5jb2xvclNwYWNlO1xuICB0ZXguYW5pc290cm9weSA9IDQ7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG5cbiAgbWF0ZXJpYWwubWFwID0gdGV4O1xuICAvLyBXaGl0ZSBiYXNlIHNvIHRoZSBjYW52YXMgc2hvd3MgYXMgZHJhd24gcmF0aGVyIHRoYW4gYmVpbmcgdGludGVkIGJ5IHRoZSBtZWFzdXJlZCBhbGJlZG8gLS1cbiAgLy8gdGhlIG1lYXN1cmVkIHZhbHVlIGlzIGFscmVhZHkgcGFpbnRlZCBpbnRvIHRoZSBjYW52YXMgYmFja2dyb3VuZC5cbiAgbWF0ZXJpYWwuY29sb3Iuc2V0SGV4KDB4ZmZmZmZmKTtcbiAgbWF0ZXJpYWwubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGVcbiAqIHJlY29uc3RydWN0aW9uIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2VcbiAqIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUJpZ0NTdG9yZUJ1aWxkaW5nTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBhcHBseUZhc2NpYUdyYXBoaWMocm9vdCk7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBUaGlzIGJ1aWxkaW5nIGlzIGEgc3RhdGljIGV4dGVyaW9yIHNoZWxsIC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy5cbiAgICAvLyBUaGUgc2xpZGluZyBkb29ycyBhbmQgdGhlIHJvbGxlciBzaHV0dGVyIGFyZSBhdXRob3JlZCBhcyBmaXhlZCBnZW9tZXRyeSwgc28gdGhleSBnZXQgbm9cbiAgICAvLyBheGlzOiBhIG5hbWVkIHBpdm90IGlzIGEgcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIGVpZ2h0XG4gICAgLy8gcGl2b3RzIHdoZW4gaXQgaGFzIG5vIG1lY2hhbmlzbXMgaGFzIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC4gQSBtYXJrZXJcbiAgICAvLyBuYW1lZCBmb3IgYSBwbGFjZSBvbiB0aGUgc3VyZmFjZSBpcyBhIGxvY2F0aW9uLCBub3QgYSBtZWNoYW5pc20uXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaFxuICAgIC8vIHRoZSBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMsIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW5cbiAgICAvLyB0aGUgcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWRcbiAgICAvLyBhcyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnRcbiAgICAvLyB0aGF0IHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZC5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXJcbiAgICAgIC8vIGFuZCBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLlxuICAgICAgLy8gVGhlIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUEwQ3ZCLFNBQVMsVUFBVSxNQUFvRDtBQUdyRSxRQUFNLFFBQWdDLENBQUM7QUFDdkMsUUFBTSxZQUF1QixDQUFDO0FBQzlCLGFBQVcsS0FBSyxNQUFNO0FBQ3BCLFFBQUksRUFBRSxPQUFPO0FBQ1gsWUFBTSxLQUFLLEVBQUUsYUFBYSxDQUFDO0FBQzNCLGdCQUFVLEtBQUssSUFBSTtBQUFBLElBQ3JCLE9BQU87QUFDTCxZQUFNLEtBQUssQ0FBQztBQUNaLGdCQUFVLEtBQUssS0FBSztBQUFBLElBQ3RCO0FBQUEsRUFDRjtBQUNBLE1BQUksUUFBUTtBQUNaLGFBQVcsS0FBSyxNQUFPLFVBQVMsRUFBRSxhQUFhLFVBQVUsRUFBRTtBQUUzRCxRQUFNLFdBQVcsSUFBSSxhQUFhLFFBQVEsQ0FBQztBQUMzQyxRQUFNLFNBQVMsSUFBSSxhQUFhLFFBQVEsQ0FBQztBQUN6QyxRQUFNLEtBQUssSUFBSSxhQUFhLFFBQVEsQ0FBQztBQUVyQyxNQUFJLElBQUk7QUFDUixhQUFXLEtBQUssT0FBTztBQUNyQixVQUFNLElBQUksRUFBRSxhQUFhLFVBQVU7QUFDbkMsVUFBTSxJQUFJLEVBQUUsYUFBYSxRQUFRO0FBQ2pDLFVBQU0sSUFBSSxFQUFFLGFBQWEsSUFBSTtBQUM3QixhQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsT0FBTyxLQUFLO0FBQ2hDLGdCQUFVLElBQUksS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUM7QUFDaEMsZ0JBQVUsSUFBSSxLQUFLLElBQUksQ0FBQyxJQUFJLEVB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
