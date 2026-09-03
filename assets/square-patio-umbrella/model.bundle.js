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

// ../repo/scratch/square-patio-umbrella/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createSquarePatioUmbrellaModel: () => createSquarePatioUmbrellaModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  canopy: {
    half: 1.985,
    // 4 x 4 m at the eave once the corner tabs' 1.5 cm lean is counted
    eaveY: 2.4,
    // the eave: a STRAIGHT square edge (the plate's valance hangs from a straight hem)
    crownY: 3.2,
    // canopy apex under the cap
    valanceY: 2.1,
    // the clear height a player walks under
    crownR: 0.06,
    // the vent under the cap
    samples: 48,
    // perimeter samples; 12 per side
    ribs: 8,
    // metal ribs: four corners, four mids
    seams: 16,
    // fabric panel seams (dirt lines in the canvas)
    sag: 0.09,
    // how far the canvas dips between ribs
    rings: [0, 0.16, 0.34, 0.52, 0.7, 0.86, 1],
    tab: { w: 0.16, drop: 0.17 }
    // the pointed tab hanging at each corner of the valance
  },
  cap: { half: 0.34, apexY: 3.26, eaveY: 3.15, skirt: 0.04, finialR: 0.045, finialH: 0.04 },
  mast: { r: 0.035, seg: 12, topY: 3.24, spigotR: 0.026, spigotTop: 0.42, runnerY: 1.42, runnerH: 0.14, runnerR: 0.05, hubY: 3.1, hubH: 0.1, hubR: 0.05 },
  base: { r: 0.28, h: 0.07, seg: 20, bossR: 0.1, bossH: 0.05 },
  colors: {
    canvas: 13945528,
    // crops/canopy.png measured #dfd8cb, luma 216.8; the harness lights a top face at ~1.15x, so it is carried at #d4cab8 to render at the plate's value
    valance: 13946044,
    // crops/valance.png measured #cdc4b4 (hanging in the canopy's shade); carried lighter because the harness shades it itself
    capCanvas: 13616562,
    pole: 14210248,
    // the pole is PAINTED cream above the spigot (plate zoom: luma ~205); the old #99978e was the base's tone
    runner: 13617336,
    spigot: 6052954,
    // bare steel between the paint and the base
    base: 8091759,
    // crops/base.png measured #7b786f, luma 120.0
    rib: 13157560,
    finial: 15263456
  },
  materials: {
    canvas: { id: "canvas", roughness: 0.9, metalness: 0 },
    metal: { id: "metal", roughness: 0.6, metalness: 0.25 }
  }
};
var Soup = class {
  pos = [];
  col = [];
  uv = [];
  c = new THREE.Color();
  tri(a, b, cc, hex, ua, ub, uc) {
    this.pos.push(a.x, a.y, a.z, b.x, b.y, b.z, cc.x, cc.y, cc.z);
    this.c.setHex(hex, THREE.SRGBColorSpace);
    for (let i = 0; i < 3; i += 1) this.col.push(this.c.r, this.c.g, this.c.b);
    const U = ua ?? [0, 0], V = ub ?? [0, 0], W = uc ?? [0, 0];
    this.uv.push(U[0], U[1], V[0], V[1], W[0], W[1]);
  }
  quad(a, b, c, d, hex, ua, ub, uc, ud) {
    this.tri(a, b, c, hex, ua, ub, uc);
    this.tri(a, c, d, hex, ua, uc, ud);
  }
  /** A cylinder about +Y, used for the mast, the collars and the base disc. */
  cylY(cy0, cy1, r0, r1, seg, hex, capTop, capBot) {
    for (let i = 0; i < seg; i += 1) {
      const a0 = i / seg * Math.PI * 2, a1 = (i + 1) / seg * Math.PI * 2;
      const p0 = v3(r0 * Math.cos(a0), cy0, r0 * Math.sin(a0));
      const p1 = v3(r0 * Math.cos(a1), cy0, r0 * Math.sin(a1));
      const q0 = v3(r1 * Math.cos(a0), cy1, r1 * Math.sin(a0)), q1 = v3(r1 * Math.cos(a1), cy1, r1 * Math.sin(a1));
      this.quad(p0, q0, q1, p1, hex);
      if (capTop) this.tri(v3(0, cy1, 0), q1, q0, hex);
      if (capBot) this.tri(v3(0, cy0, 0), p0, p1, hex);
    }
  }
  /** A square-section bar from A to B, `w` across, its faces oriented with `up`. */
  bar(A, B, w, h, hex) {
    const d = B.clone().sub(A).normalize();
    let up = new THREE.Vector3(0, 1, 0);
    if (Math.abs(d.dot(up)) > 0.95) up = new THREE.Vector3(1, 0, 0);
    const s = new THREE.Vector3().crossVectors(d, up).normalize().multiplyScalar(w / 2);
    const u = new THREE.Vector3().crossVectors(s, d).normalize().multiplyScalar(h / 2);
    const c = (P, i) => {
      const sx = i === 0 || i === 3 ? -1 : 1, sy = i < 2 ? -1 : 1;
      return P.clone().add(s.clone().multiplyScalar(sx)).add(u.clone().multiplyScalar(sy));
    };
    for (let i = 0; i < 4; i += 1) {
      const j = (i + 1) % 4;
      this.quad(c(A, i), c(B, i), c(B, j), c(A, j), hex);
    }
    this.quad(c(A, 0), c(A, 3), c(A, 2), c(A, 1), hex);
    this.quad(c(B, 0), c(B, 1), c(B, 2), c(B, 3), hex);
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute("color", new THREE.Float32BufferAttribute(this.col, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(this.uv, 2));
    g.computeVertexNormals();
    return g;
  }
};
var v3 = (x, y, z) => new THREE.Vector3(x, y, z);
function squarePerimeter(t, half) {
  const u = (t % 1 + 1) % 1;
  const s = u * 4;
  const side = Math.floor(s);
  const f = s - side;
  const a = -half + f * 2 * half;
  if (side === 0) return { x: a, z: half };
  if (side === 1) return { x: half, z: -a };
  if (side === 2) return { x: -a, z: -half };
  return { x: -half, z: a };
}
function dirtCanvas(size, seams) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  let sd = 4241;
  const rnd = () => (sd = sd * 16807 % 2147483647) / 2147483647;
  const S = size, PH = Math.round(S * 0.875), cx = S / 2, cy = PH / 2;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, S, S);
  ctx.globalCompositeOperation = "multiply";
  for (let k = 0; k < seams; k += 1) {
    if (rnd() > 0.45) continue;
    const a0 = k / seams * Math.PI * 2, a1 = (k + 1) / seams * Math.PI * 2, R = S;
    ctx.fillStyle = `rgba(236,222,192,${0.1 + rnd() * 0.16})`;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.lineTo(cx + Math.cos(a0) * R, cy + Math.sin(a0) * R);
    ctx.lineTo(cx + Math.cos(a1) * R, cy + Math.sin(a1) * R);
    ctx.closePath();
    ctx.fill();
  }
  for (let i = 0; i < 260; i += 1) {
    const a = rnd() * Math.PI * 2, r0 = S * (0.04 + rnd() * 0.25), len = S * (0.08 + rnd() * 0.35), w = 1 + rnd() * 5;
    const g = ctx.createLinearGradient(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0, cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len));
    const al = 0.05 + rnd() * 0.12;
    g.addColorStop(0, `rgba(150,138,112,0)`);
    g.addColorStop(0.4, `rgba(150,138,112,${al})`);
    g.addColorStop(1, `rgba(150,138,112,0)`);
    ctx.strokeStyle = g;
    ctx.lineWidth = w;
    ctx.beginPath();
    ctx.moveTo(cx + Math.cos(a) * r0, cy + Math.sin(a) * r0);
    ctx.lineTo(cx + Math.cos(a) * (r0 + len), cy + Math.sin(a) * (r0 + len));
    ctx.stroke();
  }
  for (let k = 0; k < seams; k += 1) {
    const a = k / seams * Math.PI * 2 + Math.PI / seams;
    const R = S;
    for (const [w, al] of [[34, 0.07], [16, 0.11], [6, 0.18], [2, 0.34]]) {
      const g = ctx.createLinearGradient(cx, cy, cx + Math.cos(a) * R * 0.6, cy + Math.sin(a) * R * 0.6);
      g.addColorStop(0, `rgba(120,106,84,${al * 0.5})`);
      g.addColorStop(1, `rgba(120,106,84,${al})`);
      ctx.strokeStyle = g;
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(a) * R, cy + Math.sin(a) * R);
      ctx.stroke();
    }
    for (let i = 0; i < 9; i += 1) {
      const r = S * (0.08 + rnd() * 0.6), len = S * (0.03 + rnd() * 0.09), w = 4 + rnd() * 10, al = 0.1 + rnd() * 0.18;
      const x0 = cx + Math.cos(a) * r + (rnd() - 0.5) * 8, y0 = cy + Math.sin(a) * r + (rnd() - 0.5) * 8;
      const g = ctx.createLinearGradient(x0, y0, x0 + Math.cos(a) * len, y0 + Math.sin(a) * len);
      g.addColorStop(0, "rgba(110,96,74,0)");
      g.addColorStop(0.5, `rgba(110,96,74,${al})`);
      g.addColorStop(1, "rgba(110,96,74,0)");
      ctx.strokeStyle = g;
      ctx.lineWidth = w;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(x0, y0);
      ctx.lineTo(x0 + Math.cos(a) * len, y0 + Math.sin(a) * len);
      ctx.stroke();
    }
  }
  {
    const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, S * 0.12);
    g.addColorStop(0, "rgba(140,128,106,0.30)");
    g.addColorStop(1, "rgba(140,128,106,0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, S, PH);
  }
  for (let i = 0; i < 60; i += 1) {
    const x = rnd() * S, y = rnd() * PH, rr = S * (0.02 + rnd() * 0.05);
    const g = ctx.createRadialGradient(x, y, 0, x, y, rr);
    g.addColorStop(0, `rgba(160,150,130,${0.06 + rnd() * 0.12})`);
    g.addColorStop(1, "rgba(160,150,130,0)");
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.arc(x, y, rr, 0, Math.PI * 2);
    ctx.fill();
  }
  {
    const y0 = PH, h = S - PH;
    ctx.fillStyle = "rgba(120,106,84,0.35)";
    ctx.fillRect(0, y0 + h * 0.86, S, 2);
    ctx.fillStyle = "rgba(120,106,84,0.22)";
    ctx.fillRect(0, y0 + 2, S, 2);
    const g = ctx.createLinearGradient(0, y0, 0, y0 + h);
    g.addColorStop(0, "rgba(150,140,120,0.16)");
    g.addColorStop(0.5, "rgba(150,140,120,0.04)");
    g.addColorStop(1, "rgba(150,140,120,0.14)");
    ctx.fillStyle = g;
    ctx.fillRect(0, y0, S, h);
    for (let i = 0; i < 90; i += 1) {
      const x = rnd() * S, len = h * (0.2 + rnd() * 0.7), w = 1 + rnd() * 3, al = 0.06 + rnd() * 0.16;
      const gg = ctx.createLinearGradient(0, y0, 0, y0 + len);
      gg.addColorStop(0, `rgba(130,118,96,${al})`);
      gg.addColorStop(1, "rgba(130,118,96,0)");
      ctx.fillStyle = gg;
      ctx.fillRect(x, y0, w, len);
    }
    ctx.fillStyle = "rgba(120,106,84,0.3)";
    ctx.fillRect(0, y0, 2, h);
    ctx.fillRect(S - 2, y0, 2, h);
  }
  ctx.globalCompositeOperation = "source-over";
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.anisotropy = 4;
  tex.needsUpdate = true;
  return tex;
}
function createSquarePatioUmbrellaModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Square Patio Umbrella";
  const canvasMat = new THREE.MeshStandardMaterial({
    color: 16777215,
    roughness: CONFIG.materials.canvas.roughness,
    metalness: CONFIG.materials.canvas.metalness,
    vertexColors: true,
    // Fabric has no meaningful thickness, and a player standing under the canopy must see its
    // inside face. Double-sided halves the canopy's triangle count against building an underside.
    side: THREE.DoubleSide,
    wireframe: options.wireframe ?? false
  });
  canvasMat.name = CONFIG.materials.canvas.id;
  const metalMat = new THREE.MeshStandardMaterial({
    color: 16777215,
    roughness: CONFIG.materials.metal.roughness,
    metalness: CONFIG.materials.metal.metalness,
    vertexColors: true,
    wireframe: options.wireframe ?? false
  });
  metalMat.name = CONFIG.materials.metal.id;
  const K = CONFIG.canopy, C = CONFIG.colors, H = K.half;
  const cs = new Soup();
  const planUV = (p) => [p.x / (2 * H) + 0.5, (1 - (p.z / (2 * H) + 0.5)) * 0.875];
  const skirtUV = (t, y, y0, y1) => [(t * 4 % 1 + 1) % 1, 0.875 + 0.125 * (1 - (y - y0) / (y1 - y0))];
  const sagAt = (t, along) => {
    const phase = t * K.ribs;
    const between = 0.5 - 0.5 * Math.cos(phase * Math.PI * 2);
    return K.sag * between * Math.sin(along * Math.PI);
  };
  const ringPoint = (t, along) => {
    const e = squarePerimeter(t, H);
    const scale = K.crownR / H + (1 - K.crownR / H) * along;
    const y = K.crownY + (K.eaveY - K.crownY) * along - sagAt(t, along);
    return v3(e.x * scale, y, e.z * scale);
  };
  const N = K.samples, rings = K.rings;
  for (let r = 0; r < rings.length - 1; r += 1) {
    for (let i = 0; i < N; i += 1) {
      const t0 = i / N, t1 = (i + 1) / N;
      const A = ringPoint(t0, rings[r]), B = ringPoint(t1, rings[r]);
      const Cc = ringPoint(t1, rings[r + 1]), D = ringPoint(t0, rings[r + 1]);
      cs.quad(A, B, Cc, D, C.canvas, planUV(A), planUV(B), planUV(Cc), planUV(D));
    }
  }
  const cap = CONFIG.cap;
  const capPoint = (t, along) => {
    const e = squarePerimeter(t, cap.half);
    const s = 0.02 / cap.half + (1 - 0.02 / cap.half) * along;
    return v3(e.x * s, cap.apexY + (cap.eaveY - cap.apexY) * along, e.z * s);
  };
  const CN = 16;
  for (let i = 0; i < CN; i += 1) {
    const t0 = i / CN, t1 = (i + 1) / CN;
    const A = capPoint(t0, 0), B = capPoint(t1, 0), Cc = capPoint(t1, 1), D = capPoint(t0, 1);
    cs.quad(A, B, Cc, D, C.capCanvas, planUV(A), planUV(B), planUV(Cc), planUV(D));
    cs.quad(
      D,
      Cc,
      v3(Cc.x, cap.eaveY - cap.skirt, Cc.z),
      v3(D.x, cap.eaveY - cap.skirt, D.z),
      C.valance,
      skirtUV(t0, cap.eaveY, cap.eaveY - cap.skirt, cap.eaveY),
      skirtUV(t1, cap.eaveY, cap.eaveY - cap.skirt, cap.eaveY),
      skirtUV(t1, cap.eaveY - cap.skirt, cap.eaveY - cap.skirt, cap.eaveY),
      skirtUV(t0, cap.eaveY - cap.skirt, cap.eaveY - cap.skirt, cap.eaveY)
    );
  }
  for (let i = 0; i < CN; i += 1) {
    const A = capPoint(i / CN, 0), B = capPoint((i + 1) / CN, 0);
    cs.tri(v3(0, cap.apexY, 0), A, B, C.capCanvas, planUV(v3(0, 0, 0)), planUV(A), planUV(B));
  }
  for (let i = 0; i < N; i += 1) {
    const t0 = i / N, t1 = (i + 1) / N;
    const A = ringPoint(t0, 1), B = ringPoint(t1, 1);
    cs.quad(
      A,
      B,
      v3(B.x, K.valanceY, B.z),
      v3(A.x, K.valanceY, A.z),
      C.valance,
      skirtUV(t0, A.y, K.valanceY, K.eaveY),
      skirtUV(t1, B.y, K.valanceY, K.eaveY),
      skirtUV(t1, K.valanceY, K.valanceY, K.eaveY),
      skirtUV(t0, K.valanceY, K.valanceY, K.eaveY)
    );
  }
  for (let c = 0; c < 4; c += 1) {
    const tc = c / 4;
    const P = squarePerimeter(tc, H), Q = squarePerimeter(tc - K.tab.w / (8 * H), H);
    const out = v3(Math.sign(P.x) * 6e-3, 0, Math.sign(P.z) * 6e-3);
    const A = v3(Q.x, K.valanceY, Q.z).add(out), B = v3(P.x, K.valanceY, P.z).add(out);
    const T = v3((P.x + Q.x) / 2, K.valanceY - K.tab.drop, (P.z + Q.z) / 2).add(out.clone().multiplyScalar(2.5));
    cs.tri(A, B, T, C.valance, skirtUV(tc - 0.01, K.eaveY, K.valanceY, K.eaveY), skirtUV(tc, K.eaveY, K.valanceY, K.eaveY), skirtUV(tc - 5e-3, K.valanceY, K.valanceY, K.eaveY));
  }
  const canopy = new THREE.Mesh(cs.geometry(), canvasMat);
  canopy.name = "Square canopy, cap and valance";
  canopy.castShadow = options.castShadow ?? true;
  canopy.receiveShadow = options.receiveShadow ?? true;
  root.add(canopy);
  const M = CONFIG.mast, Bs = CONFIG.base;
  const ms = new Soup();
  ms.cylY(0, Bs.h, Bs.r, Bs.r - 0.01, Bs.seg, C.base, true, true);
  ms.cylY(Bs.h - 5e-3, Bs.h + Bs.bossH, Bs.bossR, Bs.bossR - 0.015, 12, C.base, true, false);
  ms.cylY(0.03, M.spigotTop, M.spigotR, M.spigotR, M.seg, C.spigot, true, false);
  ms.cylY(M.spigotTop - 0.01, M.topY, M.r, M.r, M.seg, C.pole, true, false);
  ms.cylY(M.runnerY - M.runnerH / 2, M.runnerY + M.runnerH / 2, M.runnerR, M.runnerR, M.seg, C.runner, true, true);
  ms.cylY(M.hubY - M.hubH / 2, M.hubY + M.hubH / 2, M.hubR, M.hubR, M.seg, C.runner, true, true);
  ms.cylY(cap.apexY, cap.apexY + cap.finialH, cap.finialR, cap.finialR - 5e-3, 12, C.finial, true, true);
  for (let k = 0; k < K.ribs; k += 1) {
    const t = k / K.ribs;
    const E = ringPoint(t, 1), top = v3(0, M.hubY + 0.03, 0);
    const dir = v3(E.x, 0, E.z).normalize();
    const A = top.clone().add(dir.clone().multiplyScalar(M.hubR - 5e-3)).add(v3(0, -0.035, 0));
    const B = v3(E.x, E.y - 0.025, E.z).sub(dir.clone().multiplyScalar(0.03));
    ms.bar(A, B, 0.02, 0.028, C.rib);
    const Mid = A.clone().lerp(B, 0.42).add(v3(0, -0.02, 0));
    const R = v3(0, M.runnerY + M.runnerH / 2 - 0.01, 0).add(dir.clone().multiplyScalar(M.runnerR - 0.01));
    ms.bar(R, Mid, 0.016, 0.016, C.rib);
  }
  const mast = new THREE.Mesh(ms.geometry(), metalMat);
  mast.name = "Mast, base, ribs and struts";
  mast.castShadow = options.castShadow ?? true;
  mast.receiveShadow = options.receiveShadow ?? true;
  root.add(mast);
  const dirt = dirtCanvas(1024, K.seams);
  if (dirt) {
    canvasMat.map = dirt;
    canvasMat.needsUpdate = true;
  }
  const nodes = { root, mast, canopy };
  const colliders = {
    mast: {
      shape: "cylinder",
      localCenter: [0, 1.65, 0],
      radius: 0.28,
      height: 3.3,
      axis: [0, 1, 0],
      notes: "Authoring intent only; thaikit derives the shipped compound from the built geometry. The base plate matters: the asset notes call it a trip hazard a player should collide with."
    }
  };
  root.userData.sculptRuntime = {
    nodes,
    meshes: { mast, canopy },
    sockets: {},
    colliders,
    destructionGroups: {}
  };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createSquarePatioUmbrellaModel(options);
  if (spec && typeof spec === "object") root.userData.sculptSpec = spec;
  const rt = root.userData.sculptRuntime;
  if (rt) {
    const nodes = rt.nodes ?? {};
    const rootPivot = new THREE.Object3D();
    rootPivot.name = "root";
    rootPivot.userData.actionProfile = {
      animationRole: "root",
      pivot: { mode: "custom", localPosition: [0, 0, 0], axis: [0, 1, 0], name: "root" }
    };
    root.add(rootPivot);
    const colliders = Object.entries(rt.colliders ?? {}).filter(([, c]) => c && typeof c === "object" && Object.keys(c).length > 0).map(([id, c]) => ({ name: id, ...c }));
    root.userData.sculptRuntime = {
      ...rt,
      nodes: Object.keys(nodes).length,
      pivots: [rootPivot],
      sockets: [],
      colliders,
      destructionGroups: [],
      byId: { nodes, meshes: rt.meshes ?? {}, sockets: {} }
    };
  }
  return root;
}
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3F1YXJlIFBhdGlvIFVtYnJlbGxhIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZTogdGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBpbmplY3RzIGl0cyBvd24gaW5zdGFuY2UuXG4gKlxuICogRW52ZWxvcGUgNC4wIHggMy4zIHggNC4wIG0sIG9yaWdpbiBiYXNlLWNlbnRlciBvbiB0aGUgZ3JvdW5kIGF0IHRoZSBwb2xlIGF4aXMsICtZIHVwLlxuICpcbiAqIFRoaXMgaXMgdGhlIE9ORSBtb2R1bGUgaW4gdGhlIG91dGRvb3Igcm9vZiBzZXQgY2FycmllZCBvbiBhIFNJTkdMRSBDRU5UUkUgUE9MRSByYXRoZXIgdGhhbiBmb3VyXG4gKiBjb3JuZXIgcG9zdHMsIHNvIGl0IHRpbGVzIGRpZmZlcmVudGx5OiBwbGFjZWQgc2lkZSBieSBzaWRlIHRoZSBjYW5vcGllcyBtZWV0IGF0IHRoZWlyIGVkZ2VzIGFuZFxuICogbGVhdmUgdGhlIGNvcm5lcnMgb3BlbiwgYW5kIHRoZSBwb2xlIGxhbmRzIG1pZC1iYXkgcmF0aGVyIHRoYW4gb24gdGhlIGdyaWQgbGluZS4gU3F1YXJlIHJhdGhlclxuICogdGhhbiBvY3RhZ29uYWwgc28gdGhvc2UgZWRnZXMgbWVldCBjbGVhbmx5LlxuICpcbiAqIFJlYnVpbGQgMjAyNi0wOS0wMiBmcm9tIDAuODUuIFRoZSBNZXNoeSBwcm94eSBvZiB0aGUgcGxhdGUgcmVhZHMgdGhlIGNhbm9weSBhcyBhIHB5cmFtaWQgcmlzaW5nXG4gKiAwLjIzIEggb3ZlciBhIDAuNTM1IEggaGFsZi1zcGFuICgyMyBkZWdyZWVzKSB3aXRoIGEgMC4xMSBIIHZhbGFuY2U7IHRoZSBmaXJzdCBidWlsZCB3YXMgYVxuICogMTItZGVncmVlIHNsYWIgd2l0aCBhIHNjYWxsb3BlZCBlYXZlIHRoZSBwbGF0ZSBkb2VzIG5vdCBoYXZlLiBUaGUgZGVjbGFyZWQgaGVpZ2h0IHdlbnQgMi44MCAtPlxuICogMy4zMCAoc2VlIHRoZSByZWdpc3RyeSBub3Rlcyk6IHRoZSB3YWxrLXVuZGVyIHJpbSBzdGF5cyBhdCAyLjEwLCB0aGUgZWF2ZSBpcyBhdCAyLjQwIGFuZCB0aGVcbiAqIHBlYWsgYXQgMy4yMCB1bmRlciBhIGNyb3duIGNhcCB0byAzLjMwLCAyNCBkZWdyZWVzIG9mIHBpdGNoLiBXaGF0IHRoZSBwbGF0ZSB6b29tcyBhZGQ6IFNJWFRFRU5cbiAqIGZhYnJpYyBwYW5lbHMgd2hvc2Ugc2VhbXMgY2FycnkgZGFyayBkaXJ0IGxpbmVzLCBjYW52YXMgc2FnZ2luZyBiZXR3ZWVuIEVJR0hUIHJpYnMgKHZpc2libGVcbiAqIGZyb20gYmVsb3csIHdpdGggdGhlIHN0cnV0cyBmcm9tIGEgcnVubmVyIGh1YiBvbiB0aGUgcG9sZSksIGEgc21hbGwgc3F1YXJlIGNyb3duIGNhcCB3aXRoIGFcbiAqIHJvdW5kIGZpbmlhbCBvdmVyIHRoZSB2ZW50LCBhIHN0cmFpZ2h0IDAuMzAgbSB2YWxhbmNlIHdpdGggYSBoZW0gc2VhbSBhbmQgYSBwb2ludGVkIHRhYiBoYW5naW5nXG4gKiBhdCBlYWNoIGNvcm5lciwgYSBjcmVhbSBwYWludGVkIHBvbGUgd2l0aCBhIHJ1bm5lciBjb2xsYXIsIGEgYmFyZSBzdGVlbCBzcGlnb3QgaW50byBhXG4gKiBnYWx2YW5pc2VkIGNhc3QgYmFzZSB3aXRoIGEgYm9zcy4gVGhlIGNhbnZhcyBkaXJ0IGlzIE9ORSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXM6IHRoZSBjYW5vcHlcbiAqIG1hcHMgdG8gaXQgaW4gcGxhbiAoeCwgeiksIHRoZSB2YWxhbmNlIGFuZCB0YWJzIHRvIGEgc3RyaXAgYWxvbmcgaXRzIGJvdHRvbS5cbiAqXG4gKiBCdWRnZXQgKHRoYWlraXQgbGFyZ2UgY2xhc3MpOiA0IGRyYXcgY2FsbHMsIDMgbWF0ZXJpYWxzLCA2IHVuaXF1ZSBnZW9tZXRyaWVzLCA0MDAwIHRyaWFuZ2xlcy5cbiAqIENhbm9weSwgY2FwLCB2YWxhbmNlIGFuZCB0YWJzIGFyZSBPTkUgZG91YmxlLXNpZGVkIHN1cmZhY2U7IG1hc3QsIGJhc2UsIHJpYnMsIHN0cnV0cyBhbmQgaHViXG4gKiBtZXJnZSBpbnRvIHRoZSBzZWNvbmQgbWVzaC4gVHdvIGRyYXcgY2FsbHMsIHR3byBtYXRlcmlhbHMsIHR3byBnZW9tZXRyaWVzLlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgYmFzZVVybD86IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICBjYW5vcHk6IHtcbiAgICBoYWxmOiAxLjk4NSwgICAgICAgIC8vIDQgeCA0IG0gYXQgdGhlIGVhdmUgb25jZSB0aGUgY29ybmVyIHRhYnMnIDEuNSBjbSBsZWFuIGlzIGNvdW50ZWRcbiAgICBlYXZlWTogMi40MCwgICAgICAgIC8vIHRoZSBlYXZlOiBhIFNUUkFJR0hUIHNxdWFyZSBlZGdlICh0aGUgcGxhdGUncyB2YWxhbmNlIGhhbmdzIGZyb20gYSBzdHJhaWdodCBoZW0pXG4gICAgY3Jvd25ZOiAzLjIwLCAgICAgICAvLyBjYW5vcHkgYXBleCB1bmRlciB0aGUgY2FwXG4gICAgdmFsYW5jZVk6IDIuMTAsICAgICAvLyB0aGUgY2xlYXIgaGVpZ2h0IGEgcGxheWVyIHdhbGtzIHVuZGVyXG4gICAgY3Jvd25SOiAwLjA2LCAgICAgICAvLyB0aGUgdmVudCB1bmRlciB0aGUgY2FwXG4gICAgc2FtcGxlczogNDgsICAgICAgICAvLyBwZXJpbWV0ZXIgc2FtcGxlczsgMTIgcGVyIHNpZGVcbiAgICByaWJzOiA4LCAgICAgICAgICAgIC8vIG1ldGFsIHJpYnM6IGZvdXIgY29ybmVycywgZm91ciBtaWRzXG4gICAgc2VhbXM6IDE2LCAgICAgICAgICAvLyBmYWJyaWMgcGFuZWwgc2VhbXMgKGRpcnQgbGluZXMgaW4gdGhlIGNhbnZhcylcbiAgICBzYWc6IDAuMDksICAgICAgICAgIC8vIGhvdyBmYXIgdGhlIGNhbnZhcyBkaXBzIGJldHdlZW4gcmlic1xuICAgIHJpbmdzOiBbMCwgMC4xNiwgMC4zNCwgMC41MiwgMC43MCwgMC44NiwgMV0sXG4gICAgdGFiOiB7IHc6IDAuMTYsIGRyb3A6IDAuMTcgfSwgICAvLyB0aGUgcG9pbnRlZCB0YWIgaGFuZ2luZyBhdCBlYWNoIGNvcm5lciBvZiB0aGUgdmFsYW5jZVxuICB9LFxuICBjYXA6IHsgaGFsZjogMC4zNCwgYXBleFk6IDMuMjYsIGVhdmVZOiAzLjE1LCBza2lydDogMC4wNCwgZmluaWFsUjogMC4wNDUsIGZpbmlhbEg6IDAuMDQgfSxcbiAgbWFzdDogeyByOiAwLjAzNSwgc2VnOiAxMiwgdG9wWTogMy4yNCwgc3BpZ290UjogMC4wMjYsIHNwaWdvdFRvcDogMC40MiwgcnVubmVyWTogMS40MiwgcnVubmVySDogMC4xNCwgcnVubmVyUjogMC4wNSwgaHViWTogMy4xMCwgaHViSDogMC4xMCwgaHViUjogMC4wNSB9LFxuICBiYXNlOiB7IHI6IDAuMjgsIGg6IDAuMDcsIHNlZzogMjAsIGJvc3NSOiAwLjEwLCBib3NzSDogMC4wNSB9LFxuICBjb2xvcnM6IHtcbiAgICBjYW52YXM6IDB4ZDRjYWI4LCAgIC8vIGNyb3BzL2Nhbm9weS5wbmcgbWVhc3VyZWQgI2RmZDhjYiwgbHVtYSAyMTYuODsgdGhlIGhhcm5lc3MgbGlnaHRzIGEgdG9wIGZhY2UgYXQgfjEuMTV4LCBzbyBpdCBpcyBjYXJyaWVkIGF0ICNkNGNhYjggdG8gcmVuZGVyIGF0IHRoZSBwbGF0ZSdzIHZhbHVlXG4gICAgdmFsYW5jZTogMHhkNGNjYmMsICAvLyBjcm9wcy92YWxhbmNlLnBuZyBtZWFzdXJlZCAjY2RjNGI0IChoYW5naW5nIGluIHRoZSBjYW5vcHkncyBzaGFkZSk7IGNhcnJpZWQgbGlnaHRlciBiZWNhdXNlIHRoZSBoYXJuZXNzIHNoYWRlcyBpdCBpdHNlbGZcbiAgICBjYXBDYW52YXM6IDB4Y2ZjNWIyLFxuICAgIHBvbGU6IDB4ZDhkNGM4LCAgICAgLy8gdGhlIHBvbGUgaXMgUEFJTlRFRCBjcmVhbSBhYm92ZSB0aGUgc3BpZ290IChwbGF0ZSB6b29tOiBsdW1hIH4yMDUpOyB0aGUgb2xkICM5OTk3OGUgd2FzIHRoZSBiYXNlJ3MgdG9uZVxuICAgIHJ1bm5lcjogMHhjZmM4YjgsXG4gICAgc3BpZ290OiAweDVjNWM1YSwgICAvLyBiYXJlIHN0ZWVsIGJldHdlZW4gdGhlIHBhaW50IGFuZCB0aGUgYmFzZVxuICAgIGJhc2U6IDB4N2I3ODZmLCAgICAgLy8gY3JvcHMvYmFzZS5wbmcgbWVhc3VyZWQgIzdiNzg2ZiwgbHVtYSAxMjAuMFxuICAgIHJpYjogMHhjOGM0YjgsXG4gICAgZmluaWFsOiAweGU4ZTZlMCxcbiAgfSxcbiAgbWF0ZXJpYWxzOiB7XG4gICAgY2FudmFzOiB7IGlkOiAnY2FudmFzJywgcm91Z2huZXNzOiAwLjkwLCBtZXRhbG5lc3M6IDAuMCB9LFxuICAgIG1ldGFsOiB7IGlkOiAnbWV0YWwnLCByb3VnaG5lc3M6IDAuNjAsIG1ldGFsbmVzczogMC4yNSB9LFxuICB9LFxufTtcblxuY2xhc3MgU291cCB7XG4gIHBvczogbnVtYmVyW10gPSBbXTtcbiAgY29sOiBudW1iZXJbXSA9IFtdO1xuICB1djogbnVtYmVyW10gPSBbXTtcbiAgcHJpdmF0ZSBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gIHRyaShhOiBUSFJFRS5WZWN0b3IzLCBiOiBUSFJFRS5WZWN0b3IzLCBjYzogVEhSRUUuVmVjdG9yMywgaGV4OiBudW1iZXIsIHVhPzogbnVtYmVyW10sIHViPzogbnVtYmVyW10sIHVjPzogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB0aGlzLnBvcy5wdXNoKGEueCwgYS55LCBhLnosIGIueCwgYi55LCBiLnosIGNjLngsIGNjLnksIGNjLnopO1xuICAgIC8vIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIHNSR0IgbWVhc3VyZW1lbnQgY29udmVydHMgb25jZSwgaGVyZS5cbiAgICB0aGlzLmMuc2V0SGV4KGhleCwgVEhSRUUuU1JHQkNvbG9yU3BhY2UpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSArPSAxKSB0aGlzLmNvbC5wdXNoKHRoaXMuYy5yLCB0aGlzLmMuZywgdGhpcy5jLmIpO1xuICAgIGNvbnN0IFUgPSB1YSA/PyBbMCwgMF0sIFYgPSB1YiA/PyBbMCwgMF0sIFcgPSB1YyA/PyBbMCwgMF07XG4gICAgdGhpcy51di5wdXNoKFVbMF0sIFVbMV0sIFZbMF0sIFZbMV0sIFdbMF0sIFdbMV0pO1xuICB9XG4gIHF1YWQoYTogVEhSRUUuVmVjdG9yMywgYjogVEhSRUUuVmVjdG9yMywgYzogVEhSRUUuVmVjdG9yMywgZDogVEhSRUUuVmVjdG9yMywgaGV4OiBudW1iZXIsIHVhPzogbnVtYmVyW10sIHViPzogbnVtYmVyW10sIHVjPzogbnVtYmVyW10sIHVkPzogbnVtYmVyW10pOiB2b2lkIHtcbiAgICB0aGlzLnRyaShhLCBiLCBjLCBoZXgsIHVhLCB1YiwgdWMpOyB0aGlzLnRyaShhLCBjLCBkLCBoZXgsIHVhLCB1YywgdWQpO1xuICB9XG4gIC8qKiBBIGN5bGluZGVyIGFib3V0ICtZLCB1c2VkIGZvciB0aGUgbWFzdCwgdGhlIGNvbGxhcnMgYW5kIHRoZSBiYXNlIGRpc2MuICovXG4gIGN5bFkoY3kwOiBudW1iZXIsIGN5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCBzZWc6IG51bWJlciwgaGV4OiBudW1iZXIsIGNhcFRvcDogYm9vbGVhbiwgY2FwQm90OiBib29sZWFuKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWc7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYTAgPSAoaSAvIHNlZykgKiBNYXRoLlBJICogMiwgYTEgPSAoKGkgKyAxKSAvIHNlZykgKiBNYXRoLlBJICogMjtcbiAgICAgIGNvbnN0IHAwID0gdjMocjAgKiBNYXRoLmNvcyhhMCksIGN5MCwgcjAgKiBNYXRoLnNpbihhMCkpO1xuICAgICAgY29uc3QgcDEgPSB2MyhyMCAqIE1hdGguY29zKGExKSwgY3kwLCByMCAqIE1hdGguc2luKGExKSk7XG4gICAgICBjb25zdCBxMCA9IHYzKHIxICogTWF0aC5jb3MoYTApLCBjeTEsIHIxICogTWF0aC5zaW4oYTApKSwgcTEgPSB2MyhyMSAqIE1hdGguY29zKGExKSwgY3kxLCByMSAqIE1hdGguc2luKGExKSk7XG4gICAgICB0aGlzLnF1YWQocDAsIHEwLCBxMSwgcDEsIGhleCk7XG4gICAgICAvLyB2MyAob3duZXIgcmV2aWV3LCAyMDI2LTA5LTAzKTogdGhlIGNhcHMgd2VyZSB3b3VuZCBJTlNJREUgT1VUIC0tIHByb2JlZCBvbiB0aGUgc2hpcHBlZCBidW5kbGUsXG4gICAgICAvLyB0aGUgZGlzYydzIHRvcCBjYXAgZmFjZWQgLVkgKGN1bGxlZCwgc28gdGhlIGJvc3MgcmVhZCBhcyBhbiBvcGVuIGNyZXNjZW50KSBhbmQgaXRzIGJvdHRvbSBjYXBcbiAgICAgIC8vIGZhY2VkICtZIGF0IHkgMCwgY29pbmNpZGVudCBhbmQgY28tZmFjaW5nIHdpdGggdGhlIGxldmVsJ3MgZ3JvdW5kIHBsYW5lOiB0aGF0IHdhcyB0aGVcbiAgICAgIC8vIHotZmlnaHRpbmcgaW4gdGhlIGJhc2UuIFRoZSBzaWRlIHF1YWRzIHdlcmUgcmlnaHQ7IG9ubHkgdGhlIHR3byBmYW5zIGFyZSByZXZlcnNlZCBoZXJlLlxuICAgICAgaWYgKGNhcFRvcCkgdGhpcy50cmkodjMoMCwgY3kxLCAwKSwgcTEsIHEwLCBoZXgpO1xuICAgICAgaWYgKGNhcEJvdCkgdGhpcy50cmkodjMoMCwgY3kwLCAwKSwgcDAsIHAxLCBoZXgpO1xuICAgIH1cbiAgfVxuICAvKiogQSBzcXVhcmUtc2VjdGlvbiBiYXIgZnJvbSBBIHRvIEIsIGB3YCBhY3Jvc3MsIGl0cyBmYWNlcyBvcmllbnRlZCB3aXRoIGB1cGAuICovXG4gIGJhcihBOiBUSFJFRS5WZWN0b3IzLCBCOiBUSFJFRS5WZWN0b3IzLCB3OiBudW1iZXIsIGg6IG51bWJlciwgaGV4OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBkID0gQi5jbG9uZSgpLnN1YihBKS5ub3JtYWxpemUoKTtcbiAgICBsZXQgdXAgPSBuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKTtcbiAgICBpZiAoTWF0aC5hYnMoZC5kb3QodXApKSA+IDAuOTUpIHVwID0gbmV3IFRIUkVFLlZlY3RvcjMoMSwgMCwgMCk7XG4gICAgY29uc3QgcyA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKGQsIHVwKS5ub3JtYWxpemUoKS5tdWx0aXBseVNjYWxhcih3IC8gMik7XG4gICAgY29uc3QgdSA9IG5ldyBUSFJFRS5WZWN0b3IzKCkuY3Jvc3NWZWN0b3JzKHMsIGQpLm5vcm1hbGl6ZSgpLm11bHRpcGx5U2NhbGFyKGggLyAyKTtcbiAgICBjb25zdCBjID0gKFA6IFRIUkVFLlZlY3RvcjMsIGk6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3Qgc3ggPSBpID09PSAwIHx8IGkgPT09IDMgPyAtMSA6IDEsIHN5ID0gaSA8IDIgPyAtMSA6IDE7XG4gICAgICByZXR1cm4gUC5jbG9uZSgpLmFkZChzLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoc3gpKS5hZGQodS5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKHN5KSk7XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkgKz0gMSkge1xuICAgICAgY29uc3QgaiA9IChpICsgMSkgJSA0O1xuICAgICAgdGhpcy5xdWFkKGMoQSwgaSksIGMoQiwgaSksIGMoQiwgaiksIGMoQSwgaiksIGhleCk7XG4gICAgfVxuICAgIHRoaXMucXVhZChjKEEsIDApLCBjKEEsIDMpLCBjKEEsIDIpLCBjKEEsIDEpLCBoZXgpO1xuICAgIHRoaXMucXVhZChjKEIsIDApLCBjKEIsIDEpLCBjKEIsIDIpLCBjKEIsIDMpLCBoZXgpO1xuICB9XG4gIGdlb21ldHJ5KCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy5wb3MsIDMpKTtcbiAgICAvLyBXcml0dGVuIGZvciBFVkVSWSB2ZXJ0ZXg6IGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIHJlbmRlcnMgQkxBQ0sgd2hlcmUgaXQgaXMgbWlzc2luZy5cbiAgICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh0aGlzLmNvbCwgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHRoaXMudXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgcmV0dXJuIGc7XG4gIH1cbn1cblxuY29uc3QgdjMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4gbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeik7XG5cbi8qKlxuICogQSBwb2ludCBvbiB0aGUgU1FVQVJFIGVhdmUgb3V0bGluZSBhdCBwYXJhbWV0ZXIgdCBpbiBbMCwxKSwgd2Fsa2luZyB0aGUgcGVyaW1ldGVyLlxuICpcbiAqIEEgc3F1YXJlLCBub3QgYSBjaXJjbGU6IHRoZSBhc3NldCBub3RlcyByZXF1aXJlIGEgc3F1YXJlIGNhbm9weSBzbyB0aGF0IGVkZ2VzIG1lZXQgY2xlYW5seSB3aGVuXG4gKiBzZXZlcmFsIGFyZSBwbGFjZWQgc2lkZSBieSBzaWRlLCBhbmQgYW4gb2N0YWdvbmFsIG9yIHJvdW5kIGNhbm9weSB3b3VsZCBsZWF2ZSBnYXBzLlxuICovXG5mdW5jdGlvbiBzcXVhcmVQZXJpbWV0ZXIodDogbnVtYmVyLCBoYWxmOiBudW1iZXIpOiB7IHg6IG51bWJlcjsgejogbnVtYmVyIH0ge1xuICBjb25zdCB1ID0gKCh0ICUgMSkgKyAxKSAlIDE7XG4gIGNvbnN0IHMgPSB1ICogNDtcbiAgY29uc3Qgc2lkZSA9IE1hdGguZmxvb3Iocyk7XG4gIGNvbnN0IGYgPSBzIC0gc2lkZTsgICAgICAgICAgLy8gMC4uMSBhbG9uZyB0aGlzIHNpZGVcbiAgY29uc3QgYSA9IC1oYWxmICsgZiAqIDIgKiBoYWxmO1xuICBpZiAoc2lkZSA9PT0gMCkgcmV0dXJuIHsgeDogYSwgejogaGFsZiB9O1xuICBpZiAoc2lkZSA9PT0gMSkgcmV0dXJuIHsgeDogaGFsZiwgejogLWEgfTtcbiAgaWYgKHNpZGUgPT09IDIpIHJldHVybiB7IHg6IC1hLCB6OiAtaGFsZiB9O1xuICByZXR1cm4geyB4OiAtaGFsZiwgejogYSB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGRpcnQgY2FudmFzXG4gKiBPTkUgMTAyNCBweCBjYW52YXMuIFJvd3MgMC4uODk2IGFyZSB0aGUgY2Fub3B5IGluIFBMQU4gKHUgPSB4LCB2ID0geiBvdmVyIHRoZSA0IG0gc3F1YXJlLCB0aGVcbiAqIGNyb3duIGF0IHRoZSBjZW50cmUpOiBzaXh0ZWVuIHJhZGlhbCBzZWFtIGxpbmVzIGNhcnJ5aW5nIGRhcmsgZGlydCwgYSB3YXJtIGNhc3Qgb24gYSBmZXcgcGFuZWxzLFxuICogZHVzdCBzdHJlYWtzIHJ1bm5pbmcgZG93bmhpbGwgKHJhZGlhbGx5IG91dHdhcmQpLCBncmltZSBwb29saW5nIGF0IHRoZSBlYXZlLiBSb3dzIDg5Ni4uMTAyNCBhcmVcbiAqIHRoZSB2YWxhbmNlIHN0cmlwLCByZXBlYXRlZCBmb3VyIHRpbWVzIHJvdW5kOiBhIGhlbSBzZWFtLCBkcmlwcyBhbmQgYSBzb2Z0IGRpcnQgYmFuZC4gRXZlcnl0aGluZ1xuICogbXVsdGlwbGllcywgc28gdGhlIHRpbGUgb25seSBldmVyIGRhcmtlbnMgdGhlIHZlcnRleCBjcmVhbS4gR3VhcmRlZDogdGhlIE5vZGUtc2lkZSBnYXRlc1xuICogY29uc3RydWN0IHRoZSBmYWN0b3J5IHdpdGggbm8gYGRvY3VtZW50YC4gKi9cbmZ1bmN0aW9uIGRpcnRDYW52YXMoc2l6ZTogbnVtYmVyLCBzZWFtczogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSBhcyBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQgfCBudWxsO1xuICBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGxldCBzZCA9IDQyNDE7XG4gIGNvbnN0IHJuZCA9ICgpID0+IChzZCA9IChzZCAqIDE2ODA3KSAlIDIxNDc0ODM2NDcpIC8gMjE0NzQ4MzY0NztcbiAgY29uc3QgUyA9IHNpemUsIFBIID0gTWF0aC5yb3VuZChTICogMC44NzUpLCBjeCA9IFMgLyAyLCBjeSA9IFBIIC8gMjtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMpO1xuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgLy8gY2Fub3B5OiBhIHdhcm0gY2FzdCBvbiBzb21lIHBhbmVscyAodGhlIHBsYXRlJ3Mgc3VuLXNpZGUgcGFuZWxzIHJlYWQgeWVsbG93ZXIpXG4gIGZvciAobGV0IGsgPSAwOyBrIDwgc2VhbXM7IGsgKz0gMSkge1xuICAgIGlmIChybmQoKSA+IDAuNDUpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGEwID0gKGsgLyBzZWFtcykgKiBNYXRoLlBJICogMiwgYTEgPSAoKGsgKyAxKSAvIHNlYW1zKSAqIE1hdGguUEkgKiAyLCBSID0gUztcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoMjM2LDIyMiwxOTIsJHswLjEwICsgcm5kKCkgKiAwLjE2fSlgO1xuICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyhjeCwgY3kpO1xuICAgIGN0eC5saW5lVG8oY3ggKyBNYXRoLmNvcyhhMCkgKiBSLCBjeSArIE1hdGguc2luKGEwKSAqIFIpOyBjdHgubGluZVRvKGN4ICsgTWF0aC5jb3MoYTEpICogUiwgY3kgKyBNYXRoLnNpbihhMSkgKiBSKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gIH1cbiAgLy8gZHVzdCBzdHJlYWtzIHJ1bm5pbmcgZG93bmhpbGwgZnJvbSB0aGUgY3Jvd246IHJhZGlhbCwgc29mdCwgbWFueVxuICBmb3IgKGxldCBpID0gMDsgaSA8IDI2MDsgaSArPSAxKSB7XG4gICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIHIwID0gUyAqICgwLjA0ICsgcm5kKCkgKiAwLjI1KSwgbGVuID0gUyAqICgwLjA4ICsgcm5kKCkgKiAwLjM1KSwgdyA9IDEgKyBybmQoKSAqIDU7XG4gICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudChjeCArIE1hdGguY29zKGEpICogcjAsIGN5ICsgTWF0aC5zaW4oYSkgKiByMCwgY3ggKyBNYXRoLmNvcyhhKSAqIChyMCArIGxlbiksIGN5ICsgTWF0aC5zaW4oYSkgKiAocjAgKyBsZW4pKTtcbiAgICBjb25zdCBhbCA9IDAuMDUgKyBybmQoKSAqIDAuMTI7XG4gICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTUwLDEzOCwxMTIsMClgKTsgZy5hZGRDb2xvclN0b3AoMC40LCBgcmdiYSgxNTAsMTM4LDExMiwke2FsfSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMTUwLDEzOCwxMTIsMClgKTtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBnOyBjdHgubGluZVdpZHRoID0gdzsgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5tb3ZlVG8oY3ggKyBNYXRoLmNvcyhhKSAqIHIwLCBjeSArIE1hdGguc2luKGEpICogcjApOyBjdHgubGluZVRvKGN4ICsgTWF0aC5jb3MoYSkgKiAocjAgKyBsZW4pLCBjeSArIE1hdGguc2luKGEpICogKHIwICsgbGVuKSk7IGN0eC5zdHJva2UoKTtcbiAgfVxuICAvLyB0aGUgc2VhbXM6IHNpeHRlZW4gcmFkaWFsIGRpcnQgbGluZXMsIGRhcmtlc3QgYW5kIHdpZGVzdCB0b3dhcmQgdGhlIGVhdmUsIGVhY2ggd2l0aCBhIGhhbG8gb2YgZ3JpbWVcbiAgZm9yIChsZXQgayA9IDA7IGsgPCBzZWFtczsgayArPSAxKSB7XG4gICAgY29uc3QgYSA9IChrIC8gc2VhbXMpICogTWF0aC5QSSAqIDIgKyBNYXRoLlBJIC8gc2VhbXM7XG4gICAgY29uc3QgUiA9IFM7ICAgLy8gcGFzdCB0aGUgc3F1YXJlJ3MgY29ybmVyOyB0aGUgcGxhbiBjcm9wcyBpdFxuICAgIGZvciAoY29uc3QgW3csIGFsXSBvZiBbWzM0LCAwLjA3XSwgWzE2LCAwLjExXSwgWzYsIDAuMThdLCBbMiwgMC4zNF1dIGFzIG51bWJlcltdW10pIHtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoY3gsIGN5LCBjeCArIE1hdGguY29zKGEpICogUiAqIDAuNiwgY3kgKyBNYXRoLnNpbihhKSAqIFIgKiAwLjYpO1xuICAgICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDEwNiw4NCwke2FsICogMC41fSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoMTIwLDEwNiw4NCwke2FsfSlgKTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGc7IGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oY3gsIGN5KTsgY3R4LmxpbmVUbyhjeCArIE1hdGguY29zKGEpICogUiwgY3kgKyBNYXRoLnNpbihhKSAqIFIpOyBjdHguc3Ryb2tlKCk7XG4gICAgfVxuICAgIC8vIGRpcnQgY2xvdHMgYWxvbmcgdGhlIHNlYW1cbiAgICAvLyBkaXJ0IGRyaWZ0cyBhbG9uZyB0aGUgc2VhbTogc29mdCBlbG9uZ2F0ZWQgc21lYXJzLCBub3QgYmVhZHNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDk7IGkgKz0gMSkge1xuICAgICAgY29uc3QgciA9IFMgKiAoMC4wOCArIHJuZCgpICogMC42KSwgbGVuID0gUyAqICgwLjAzICsgcm5kKCkgKiAwLjA5KSwgdyA9IDQgKyBybmQoKSAqIDEwLCBhbCA9IDAuMTAgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB4MCA9IGN4ICsgTWF0aC5jb3MoYSkgKiByICsgKHJuZCgpIC0gMC41KSAqIDgsIHkwID0gY3kgKyBNYXRoLnNpbihhKSAqIHIgKyAocm5kKCkgLSAwLjUpICogODtcbiAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeDAsIHkwLCB4MCArIE1hdGguY29zKGEpICogbGVuLCB5MCArIE1hdGguc2luKGEpICogbGVuKTtcbiAgICAgIGcuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDExMCw5Niw3NCwwKScpOyBnLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKDExMCw5Niw3NCwke2FsfSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTEwLDk2LDc0LDApJyk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSBnOyBjdHgubGluZVdpZHRoID0gdzsgY3R4LmxpbmVDYXAgPSAncm91bmQnOyBjdHguYmVnaW5QYXRoKCk7XG4gICAgICBjdHgubW92ZVRvKHgwLCB5MCk7IGN0eC5saW5lVG8oeDAgKyBNYXRoLmNvcyhhKSAqIGxlbiwgeTAgKyBNYXRoLnNpbihhKSAqIGxlbik7IGN0eC5zdHJva2UoKTtcbiAgICB9XG4gIH1cbiAgLy8gY3Jvd24gZ3JpbWUgYW5kIHRoZSBlYXZlIGJhbmRcbiAge1xuICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoY3gsIGN5LCAwLCBjeCwgY3ksIFMgKiAwLjEyKTtcbiAgICBnLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxNDAsMTI4LDEwNiwwLjMwKScpOyBnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNDAsMTI4LDEwNiwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUEgpO1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIFMsIHkgPSBybmQoKSAqIFBILCByciA9IFMgKiAoMC4wMiArIHJuZCgpICogMC4wNSk7XG4gICAgY29uc3QgZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCBycik7XG4gICAgZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTYwLDE1MCwxMzAsJHswLjA2ICsgcm5kKCkgKiAwLjEyfSlgKTsgZy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTYwLDE1MCwxMzAsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHgsIHksIHJyLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gIH1cbiAgLy8gdGhlIHZhbGFuY2Ugc3RyaXAgKHJvd3MgUEguLlMpOiBhIGhlbSBzZWFtIG5lYXIgdGhlIGJvdHRvbSwgYSB0b3Agc2VhbSwgZHJpcHMsIGEgc29mdCBncmltZSBiYW5kXG4gIHtcbiAgICBjb25zdCB5MCA9IFBILCBoID0gUyAtIFBIO1xuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjAsMTA2LDg0LDAuMzUpJzsgY3R4LmZpbGxSZWN0KDAsIHkwICsgaCAqIDAuODYsIFMsIDIpOyAgIC8vIGhlbSBzZWFtXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDEyMCwxMDYsODQsMC4yMiknOyBjdHguZmlsbFJlY3QoMCwgeTAgKyAyLCBTLCAyKTsgICAgICAgICAgICAvLyB0b3Agc2VhbSB1bmRlciB0aGUgZWF2ZVxuICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwICsgaCk7XG4gICAgZy5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMTUwLDE0MCwxMjAsMC4xNiknKTsgZy5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgxNTAsMTQwLDEyMCwwLjA0KScpOyBnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsMTQwLDEyMCwwLjE0KScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbFJlY3QoMCwgeTAsIFMsIGgpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogUywgbGVuID0gaCAqICgwLjIgKyBybmQoKSAqIDAuNyksIHcgPSAxICsgcm5kKCkgKiAzLCBhbCA9IDAuMDYgKyBybmQoKSAqIDAuMTY7XG4gICAgICBjb25zdCBnZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5MCwgMCwgeTAgKyBsZW4pO1xuICAgICAgZ2cuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEzMCwxMTgsOTYsJHthbH0pYCk7IGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMzAsMTE4LDk2LDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCh4LCB5MCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gdGhlIGZvdXIgdmVydGljYWwgcGFuZWwgc2VhbXMgb2YgdGhlIHZhbGFuY2UgbGFuZCBhdCB1ID0gMCBvZiBlYWNoIHJlcGVhdFxuICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgxMjAsMTA2LDg0LDAuMyknOyBjdHguZmlsbFJlY3QoMCwgeTAsIDIsIGgpOyBjdHguZmlsbFJlY3QoUyAtIDIsIHkwLCAyLCBoKTtcbiAgfVxuICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZzsgdGV4LndyYXBUID0gVEhSRUUuQ2xhbXBUb0VkZ2VXcmFwcGluZztcbiAgdGV4LmFuaXNvdHJvcHkgPSA0O1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3F1YXJlUGF0aW9VbWJyZWxsYU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnU3F1YXJlIFBhdGlvIFVtYnJlbGxhJztcblxuICBjb25zdCBjYW52YXNNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICByb3VnaG5lc3M6IENPTkZJRy5tYXRlcmlhbHMuY2FudmFzLnJvdWdobmVzcyxcbiAgICBtZXRhbG5lc3M6IENPTkZJRy5tYXRlcmlhbHMuY2FudmFzLm1ldGFsbmVzcyxcbiAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXG4gICAgLy8gRmFicmljIGhhcyBubyBtZWFuaW5nZnVsIHRoaWNrbmVzcywgYW5kIGEgcGxheWVyIHN0YW5kaW5nIHVuZGVyIHRoZSBjYW5vcHkgbXVzdCBzZWUgaXRzXG4gICAgLy8gaW5zaWRlIGZhY2UuIERvdWJsZS1zaWRlZCBoYWx2ZXMgdGhlIGNhbm9weSdzIHRyaWFuZ2xlIGNvdW50IGFnYWluc3QgYnVpbGRpbmcgYW4gdW5kZXJzaWRlLlxuICAgIHNpZGU6IFRIUkVFLkRvdWJsZVNpZGUsXG4gICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgfSk7XG4gIGNhbnZhc01hdC5uYW1lID0gQ09ORklHLm1hdGVyaWFscy5jYW52YXMuaWQ7XG5cbiAgY29uc3QgbWV0YWxNYXQgPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgIGNvbG9yOiAweGZmZmZmZixcbiAgICByb3VnaG5lc3M6IENPTkZJRy5tYXRlcmlhbHMubWV0YWwucm91Z2huZXNzLFxuICAgIG1ldGFsbmVzczogQ09ORklHLm1hdGVyaWFscy5tZXRhbC5tZXRhbG5lc3MsXG4gICAgdmVydGV4Q29sb3JzOiB0cnVlLFxuICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gIH0pO1xuICBtZXRhbE1hdC5uYW1lID0gQ09ORklHLm1hdGVyaWFscy5tZXRhbC5pZDtcblxuICBjb25zdCBLID0gQ09ORklHLmNhbm9weSwgQyA9IENPTkZJRy5jb2xvcnMsIEggPSBLLmhhbGY7XG4gIGNvbnN0IGNzID0gbmV3IFNvdXAoKTtcbiAgLy8gcGxhbiBVViBmb3IgdGhlIGNhbm9weTogdGhlIHNxdWFyZSBtYXBzIHRvIHJvd3MgMC4uMC44NzUgb2YgdGhlIGNhbnZhc1xuICBjb25zdCBwbGFuVVYgPSAocDogVEhSRUUuVmVjdG9yMykgPT4gW3AueCAvICgyICogSCkgKyAwLjUsICgxIC0gKHAueiAvICgyICogSCkgKyAwLjUpKSAqIDAuODc1XTtcbiAgY29uc3Qgc2tpcnRVViA9ICh0OiBudW1iZXIsIHk6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcikgPT4gWygodCAqIDQpICUgMSArIDEpICUgMSwgMC44NzUgKyAwLjEyNSAqICgxIC0gKHkgLSB5MCkgLyAoeTEgLSB5MCkpXTtcblxuICAvLyBUaGUgY2FudmFzIFNBR1MgYmV0d2VlbiBlaWdodCByYWRpYWwgcmlicy4gVGhlIHNhZyBpcyB6ZXJvIGF0IGEgcmliIGFuZCBncmVhdGVzdCBtaWR3YXlcbiAgLy8gYmV0d2VlbiB0d28sIGFuZCBpdCBmYWRlcyBvdXQgYXQgdGhlIGNyb3duIGFuZCBhdCB0aGUgZWF2ZSB3aGVyZSB0aGUgZmFicmljIGlzIHB1bGxlZCB0aWdodFxuICAvLyBvdmVyIGhhcmR3YXJlLlxuICBjb25zdCBzYWdBdCA9ICh0OiBudW1iZXIsIGFsb25nOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwaGFzZSA9IHQgKiBLLnJpYnM7XG4gICAgY29uc3QgYmV0d2VlbiA9IDAuNSAtIDAuNSAqIE1hdGguY29zKHBoYXNlICogTWF0aC5QSSAqIDIpO1xuICAgIHJldHVybiBLLnNhZyAqIGJldHdlZW4gKiBNYXRoLnNpbihhbG9uZyAqIE1hdGguUEkpO1xuICB9O1xuICBjb25zdCByaW5nUG9pbnQgPSAodDogbnVtYmVyLCBhbG9uZzogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZSA9IHNxdWFyZVBlcmltZXRlcih0LCBIKTtcbiAgICBjb25zdCBzY2FsZSA9IEsuY3Jvd25SIC8gSCArICgxIC0gSy5jcm93blIgLyBIKSAqIGFsb25nO1xuICAgIGNvbnN0IHkgPSBLLmNyb3duWSArIChLLmVhdmVZIC0gSy5jcm93blkpICogYWxvbmcgLSBzYWdBdCh0LCBhbG9uZyk7XG4gICAgcmV0dXJuIHYzKGUueCAqIHNjYWxlLCB5LCBlLnogKiBzY2FsZSk7XG4gIH07XG4gIGNvbnN0IE4gPSBLLnNhbXBsZXMsIHJpbmdzID0gSy5yaW5ncztcbiAgZm9yIChsZXQgciA9IDA7IHIgPCByaW5ncy5sZW5ndGggLSAxOyByICs9IDEpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IE47IGkgKz0gMSkge1xuICAgICAgY29uc3QgdDAgPSBpIC8gTiwgdDEgPSAoaSArIDEpIC8gTjtcbiAgICAgIGNvbnN0IEEgPSByaW5nUG9pbnQodDAsIHJpbmdzW3JdKSwgQiA9IHJpbmdQb2ludCh0MSwgcmluZ3Nbcl0pO1xuICAgICAgY29uc3QgQ2MgPSByaW5nUG9pbnQodDEsIHJpbmdzW3IgKyAxXSksIEQgPSByaW5nUG9pbnQodDAsIHJpbmdzW3IgKyAxXSk7XG4gICAgICBjcy5xdWFkKEEsIEIsIENjLCBELCBDLmNhbnZhcywgcGxhblVWKEEpLCBwbGFuVVYoQiksIHBsYW5VVihDYyksIHBsYW5VVihEKSk7XG4gICAgfVxuICB9XG4gIC8vIFRoZSBjcm93biBpcyBhIFZFTlQgdW5kZXIgdGhlIGNhcDogdGhlIGNhbm9weSBzdG9wcyBhdCBjcm93blIgYW5kIHRoZSBjYXAgY292ZXJzIGl0LlxuICAvLyBUaGUgY2FwOiBhIHNtYWxsIHNxdWFyZSBweXJhbWlkIG92ZXIgdGhlIHZlbnQgd2l0aCBpdHMgb3duIHNraXJ0LCBhbmQgYSByb3VuZCBmaW5pYWwgZGlzYy5cbiAgY29uc3QgY2FwID0gQ09ORklHLmNhcDtcbiAgY29uc3QgY2FwUG9pbnQgPSAodDogbnVtYmVyLCBhbG9uZzogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZSA9IHNxdWFyZVBlcmltZXRlcih0LCBjYXAuaGFsZik7XG4gICAgY29uc3QgcyA9IDAuMDIgLyBjYXAuaGFsZiArICgxIC0gMC4wMiAvIGNhcC5oYWxmKSAqIGFsb25nO1xuICAgIHJldHVybiB2MyhlLnggKiBzLCBjYXAuYXBleFkgKyAoY2FwLmVhdmVZIC0gY2FwLmFwZXhZKSAqIGFsb25nLCBlLnogKiBzKTtcbiAgfTtcbiAgY29uc3QgQ04gPSAxNjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBDTjsgaSArPSAxKSB7XG4gICAgY29uc3QgdDAgPSBpIC8gQ04sIHQxID0gKGkgKyAxKSAvIENOO1xuICAgIGNvbnN0IEEgPSBjYXBQb2ludCh0MCwgMCksIEIgPSBjYXBQb2ludCh0MSwgMCksIENjID0gY2FwUG9pbnQodDEsIDEpLCBEID0gY2FwUG9pbnQodDAsIDEpO1xuICAgIGNzLnF1YWQoQSwgQiwgQ2MsIEQsIEMuY2FwQ2FudmFzLCBwbGFuVVYoQSksIHBsYW5VVihCKSwgcGxhblVWKENjKSwgcGxhblVWKEQpKTtcbiAgICBjcy5xdWFkKEQsIENjLCB2MyhDYy54LCBjYXAuZWF2ZVkgLSBjYXAuc2tpcnQsIENjLnopLCB2MyhELngsIGNhcC5lYXZlWSAtIGNhcC5za2lydCwgRC56KSwgQy52YWxhbmNlLFxuICAgICAgc2tpcnRVVih0MCwgY2FwLmVhdmVZLCBjYXAuZWF2ZVkgLSBjYXAuc2tpcnQsIGNhcC5lYXZlWSksIHNraXJ0VVYodDEsIGNhcC5lYXZlWSwgY2FwLmVhdmVZIC0gY2FwLnNraXJ0LCBjYXAuZWF2ZVkpLFxuICAgICAgc2tpcnRVVih0MSwgY2FwLmVhdmVZIC0gY2FwLnNraXJ0LCBjYXAuZWF2ZVkgLSBjYXAuc2tpcnQsIGNhcC5lYXZlWSksIHNraXJ0VVYodDAsIGNhcC5lYXZlWSAtIGNhcC5za2lydCwgY2FwLmVhdmVZIC0gY2FwLnNraXJ0LCBjYXAuZWF2ZVkpKTtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IENOOyBpICs9IDEpIHtcbiAgICBjb25zdCBBID0gY2FwUG9pbnQoaSAvIENOLCAwKSwgQiA9IGNhcFBvaW50KChpICsgMSkgLyBDTiwgMCk7XG4gICAgY3MudHJpKHYzKDAsIGNhcC5hcGV4WSwgMCksIEEsIEIsIEMuY2FwQ2FudmFzLCBwbGFuVVYodjMoMCwgMCwgMCkpLCBwbGFuVVYoQSksIHBsYW5VVihCKSk7XG4gIH1cbiAgLy8gVGhlIHZhbGFuY2U6IGEgU1RSQUlHSFQgc2tpcnQgaGFuZ2luZyBmcm9tIHRoZSBlYXZlICh0aGUgcGxhdGUncyBoZW0gaXMgYSBzdHJhaWdodCBsaW5lIHdpdGhcbiAgLy8gYSBzZWFtKSwgbWVhc3VyZWQgMjAgbHVtYSBiZWxvdyB0aGUgY2Fub3B5IGJlY2F1c2UgaXQgaGFuZ3MgaW4gdGhlIGNhbm9weSdzIG93biBzaGFkZS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBOOyBpICs9IDEpIHtcbiAgICBjb25zdCB0MCA9IGkgLyBOLCB0MSA9IChpICsgMSkgLyBOO1xuICAgIGNvbnN0IEEgPSByaW5nUG9pbnQodDAsIDEpLCBCID0gcmluZ1BvaW50KHQxLCAxKTtcbiAgICBjcy5xdWFkKEEsIEIsIHYzKEIueCwgSy52YWxhbmNlWSwgQi56KSwgdjMoQS54LCBLLnZhbGFuY2VZLCBBLnopLCBDLnZhbGFuY2UsXG4gICAgICBza2lydFVWKHQwLCBBLnksIEsudmFsYW5jZVksIEsuZWF2ZVkpLCBza2lydFVWKHQxLCBCLnksIEsudmFsYW5jZVksIEsuZWF2ZVkpLCBza2lydFVWKHQxLCBLLnZhbGFuY2VZLCBLLnZhbGFuY2VZLCBLLmVhdmVZKSwgc2tpcnRVVih0MCwgSy52YWxhbmNlWSwgSy52YWxhbmNlWSwgSy5lYXZlWSkpO1xuICB9XG4gIC8vIEEgcG9pbnRlZCB0YWIgaGFuZ3MgYXQgZWFjaCBjb3JuZXIgd2hlcmUgdGhlIHZhbGFuY2UncyBleGNlc3MgZmFicmljIGZvbGRzOiBhIHRyaWFuZ2xlIG9uIHRoZVxuICAvLyBvdXRlciBmYWNlIG9mIG9uZSBzaWRlLCBsZWFuaW5nIDEgY20gb3V0IHNvIGl0IG5ldmVyIGxpZXMgaW4gdGhlIHZhbGFuY2UncyBwbGFuZS5cbiAgZm9yIChsZXQgYyA9IDA7IGMgPCA0OyBjICs9IDEpIHtcbiAgICBjb25zdCB0YyA9IGMgLyA0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29ybmVyIHBhcmFtZXRlciAoc2lkZSBib3VuZGFyeSlcbiAgICBjb25zdCBQID0gc3F1YXJlUGVyaW1ldGVyKHRjLCBIKSwgUSA9IHNxdWFyZVBlcmltZXRlcih0YyAtIEsudGFiLncgLyAoOCAqIEgpLCBIKTtcbiAgICBjb25zdCBvdXQgPSB2MyhNYXRoLnNpZ24oUC54KSAqIDAuMDA2LCAwLCBNYXRoLnNpZ24oUC56KSAqIDAuMDA2KTtcbiAgICBjb25zdCBBID0gdjMoUS54LCBLLnZhbGFuY2VZLCBRLnopLmFkZChvdXQpLCBCID0gdjMoUC54LCBLLnZhbGFuY2VZLCBQLnopLmFkZChvdXQpO1xuICAgIGNvbnN0IFQgPSB2MygoUC54ICsgUS54KSAvIDIsIEsudmFsYW5jZVkgLSBLLnRhYi5kcm9wLCAoUC56ICsgUS56KSAvIDIpLmFkZChvdXQuY2xvbmUoKS5tdWx0aXBseVNjYWxhcigyLjUpKTtcbiAgICBjcy50cmkoQSwgQiwgVCwgQy52YWxhbmNlLCBza2lydFVWKHRjIC0gMC4wMSwgSy5lYXZlWSwgSy52YWxhbmNlWSwgSy5lYXZlWSksIHNraXJ0VVYodGMsIEsuZWF2ZVksIEsudmFsYW5jZVksIEsuZWF2ZVkpLCBza2lydFVWKHRjIC0gMC4wMDUsIEsudmFsYW5jZVksIEsudmFsYW5jZVksIEsuZWF2ZVkpKTtcbiAgfVxuXG4gIGNvbnN0IGNhbm9weSA9IG5ldyBUSFJFRS5NZXNoKGNzLmdlb21ldHJ5KCksIGNhbnZhc01hdCk7XG4gIGNhbm9weS5uYW1lID0gJ1NxdWFyZSBjYW5vcHksIGNhcCBhbmQgdmFsYW5jZSc7XG4gIGNhbm9weS5jYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNhbm9weS5yZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG4gIHJvb3QuYWRkKGNhbm9weSk7XG5cbiAgLy8gTWFzdCwgYmFzZSwgcmlicywgc3RydXRzIGFuZCBjb2xsYXJzIGFzIG9uZSBtZXJnZWQgZ2VvbWV0cnkuIFRoZSBtYXN0IHJ1bnMgVEhST1VHSCB0aGUgZGlzY1xuICAvLyByYXRoZXIgdGhhbiBidXR0aW5nIG9uIGl0cyB0b3AgZmFjZSwgc28gbm8gdHdvIGNvLWZhY2luZyBzdXJmYWNlcyBhcmUgY29pbmNpZGVudC5cbiAgY29uc3QgTSA9IENPTkZJRy5tYXN0LCBCcyA9IENPTkZJRy5iYXNlO1xuICBjb25zdCBtcyA9IG5ldyBTb3VwKCk7XG4gIG1zLmN5bFkoMCwgQnMuaCwgQnMuciwgQnMuciAtIDAuMDEsIEJzLnNlZywgQy5iYXNlLCB0cnVlLCB0cnVlKTsgICAgICAgICAgICAgICAgIC8vIHRoZSBjYXN0IGRpc2MsIGVkZ2UgZHJhd2luZyBpblxuICBtcy5jeWxZKEJzLmggLSAwLjAwNSwgQnMuaCArIEJzLmJvc3NILCBCcy5ib3NzUiwgQnMuYm9zc1IgLSAwLjAxNSwgMTIsIEMuYmFzZSwgdHJ1ZSwgZmFsc2UpOyAgIC8vIHRoZSBib3NzIHRoZSBzcGlnb3Qgc2l0cyBpblxuICBtcy5jeWxZKDAuMDMsIE0uc3BpZ290VG9wLCBNLnNwaWdvdFIsIE0uc3BpZ290UiwgTS5zZWcsIEMuc3BpZ290LCB0cnVlLCBmYWxzZSk7ICAgLy8gYmFyZSBzdGVlbCBzcGlnb3RcbiAgbXMuY3lsWShNLnNwaWdvdFRvcCAtIDAuMDEsIE0udG9wWSwgTS5yLCBNLnIsIE0uc2VnLCBDLnBvbGUsIHRydWUsIGZhbHNlKTsgICAgICAgICAvLyB0aGUgcGFpbnRlZCBwb2xlXG4gIG1zLmN5bFkoTS5ydW5uZXJZIC0gTS5ydW5uZXJIIC8gMiwgTS5ydW5uZXJZICsgTS5ydW5uZXJIIC8gMiwgTS5ydW5uZXJSLCBNLnJ1bm5lclIsIE0uc2VnLCBDLnJ1bm5lciwgdHJ1ZSwgdHJ1ZSk7ICAgLy8gcnVubmVyIGNvbGxhclxuICBtcy5jeWxZKE0uaHViWSAtIE0uaHViSCAvIDIsIE0uaHViWSArIE0uaHViSCAvIDIsIE0uaHViUiwgTS5odWJSLCBNLnNlZywgQy5ydW5uZXIsIHRydWUsIHRydWUpOyAgICAgICAgICAgICAgICAgICAgIC8vIHRvcCBodWIgdW5kZXIgdGhlIGNyb3duXG4gIG1zLmN5bFkoY2FwLmFwZXhZLCBjYXAuYXBleFkgKyBjYXAuZmluaWFsSCwgY2FwLmZpbmlhbFIsIGNhcC5maW5pYWxSIC0gMC4wMDUsIDEyLCBDLmZpbmlhbCwgdHJ1ZSwgdHJ1ZSk7ICAgICAgICAgIC8vIGZpbmlhbCBkaXNjXG4gIC8vIGVpZ2h0IHJpYnMgZnJvbSB0aGUgaHViIHRvIHRoZSBlYXZlLCB1bmRlciB0aGUgY2FudmFzLCBhbmQgZWlnaHQgc3RydXRzIGZyb20gdGhlIHJ1bm5lclxuICBmb3IgKGxldCBrID0gMDsgayA8IEsucmliczsgayArPSAxKSB7XG4gICAgY29uc3QgdCA9IGsgLyBLLnJpYnM7XG4gICAgY29uc3QgRSA9IHJpbmdQb2ludCh0LCAxKSwgdG9wID0gdjMoMCwgTS5odWJZICsgMC4wMywgMCk7XG4gICAgY29uc3QgZGlyID0gdjMoRS54LCAwLCBFLnopLm5vcm1hbGl6ZSgpO1xuICAgIGNvbnN0IEEgPSB0b3AuY2xvbmUoKS5hZGQoZGlyLmNsb25lKCkubXVsdGlwbHlTY2FsYXIoTS5odWJSIC0gMC4wMDUpKS5hZGQodjMoMCwgLTAuMDM1LCAwKSk7XG4gICAgY29uc3QgQiA9IHYzKEUueCwgRS55IC0gMC4wMjUsIEUueikuc3ViKGRpci5jbG9uZSgpLm11bHRpcGx5U2NhbGFyKDAuMDMpKTtcbiAgICBtcy5iYXIoQSwgQiwgMC4wMiwgMC4wMjgsIEMucmliKTtcbiAgICBjb25zdCBNaWQgPSBBLmNsb25lKCkubGVycChCLCAwLjQyKS5hZGQodjMoMCwgLTAuMDIsIDApKTtcbiAgICBjb25zdCBSID0gdjMoMCwgTS5ydW5uZXJZICsgTS5ydW5uZXJIIC8gMiAtIDAuMDEsIDApLmFkZChkaXIuY2xvbmUoKS5tdWx0aXBseVNjYWxhcihNLnJ1bm5lclIgLSAwLjAxKSk7XG4gICAgbXMuYmFyKFIsIE1pZCwgMC4wMTYsIDAuMDE2LCBDLnJpYik7XG4gIH1cbiAgY29uc3QgbWFzdCA9IG5ldyBUSFJFRS5NZXNoKG1zLmdlb21ldHJ5KCksIG1ldGFsTWF0KTtcbiAgbWFzdC5uYW1lID0gJ01hc3QsIGJhc2UsIHJpYnMgYW5kIHN0cnV0cyc7XG4gIG1hc3QuY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBtYXN0LnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgcm9vdC5hZGQobWFzdCk7XG5cbiAgLy8gdGhlIGRpcnQgY2FudmFzLCBib3VuZCBBRlRFUiBjb25zdHJ1Y3Rpb24gc28gdGhlIG1hdGVyaWFsIGtlZXBzIGl0cyBhdXRob3JlZCBhbGJlZG9cbiAgY29uc3QgZGlydCA9IGRpcnRDYW52YXMoMTAyNCwgSy5zZWFtcyk7XG4gIGlmIChkaXJ0KSB7IGNhbnZhc01hdC5tYXAgPSBkaXJ0OyBjYW52YXNNYXQubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG5cbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHsgcm9vdCwgbWFzdCwgY2Fub3B5IH07XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgbWFzdDogeyBzaGFwZTogJ2N5bGluZGVyJywgbG9jYWxDZW50ZXI6IFswLCAxLjY1LCAwXSwgcmFkaXVzOiAwLjI4LCBoZWlnaHQ6IDMuMywgYXhpczogWzAsIDEsIDBdLFxuICAgICAgbm90ZXM6ICdBdXRob3JpbmcgaW50ZW50IG9ubHk7IHRoYWlraXQgZGVyaXZlcyB0aGUgc2hpcHBlZCBjb21wb3VuZCBmcm9tIHRoZSBidWlsdCBnZW9tZXRyeS4gVGhlIGJhc2UgcGxhdGUgbWF0dGVyczogdGhlIGFzc2V0IG5vdGVzIGNhbGwgaXQgYSB0cmlwIGhhemFyZCBhIHBsYXllciBzaG91bGQgY29sbGlkZSB3aXRoLicgfSxcbiAgfTtcbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgIG5vZGVzLCBtZXNoZXM6IHsgbWFzdCwgY2Fub3B5IH0sIHNvY2tldHM6IHt9LCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzOiB7fSxcbiAgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlU3F1YXJlUGF0aW9VbWJyZWxsYU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAmJiB0eXBlb2Ygc3BlYyA9PT0gJ29iamVjdCcpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIE9ORSByb290IHBpdm90IGFuZCBOTyBzb2NrZXRzLiBBIHJlYWwgdW1icmVsbGEgY3JhbmtzIG9wZW4gYW5kIHRpbHRzLCBidXQgbmVpdGhlciBpc1xuICAgIC8vIG1vZGVsbGVkIGFuZCB0aGUgYXNzZXQgZGVjbGFyZXMgbm8gbWVjaGFuaXNtLCBzbyBvbmUgcm9vdCBwaXZvdCBpcyB0aGUgY29tcGxldGUgaW52ZW50b3J5LlxuICAgIC8vIERlY2xhcmluZyBhIGNyYW5rIGF4aXMgbm90aGluZyB0dXJucyB3b3VsZCBiZSBhIGNvbnRyYWN0IHRoZSBraXQgaGFzIHRvIGtlZXAgZm9yIG5vIG9uZS5cbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90czogW3Jvb3RQaXZvdF0sIHNvY2tldHM6IFtdLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzOiBbXSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKiB2aWJlM2QgZW50cnk6IHRoZSBwYWNrJ3MgYG1vZGVsLnRzYCB3cmFwcyB0aGlzLiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEs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LFFBQVEsSUFBSSxJQUFJLFFBQVEsSUFBSSxPQUFPLElBQUksUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLO0FBQUEsSUFBQztBQUFBLEVBQzlJO0FBQ0EsV0FBUyxJQUFJLEdBQUcsSUFBSSxJQUFJLEtBQUssR0FBRztBQUM5QixVQUFNLElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksVUFBVSxJQUFJLEtBQUssSUFBSSxDQUFDO0FBQzNELE9BQUcsSUFBSSxHQUFHLEdBQUcsSUFBSSxPQUFPLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxXQUFXLE9BQU8sR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUM7QUFBQSxFQUMxRjtBQUdBLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDN0IsVUFBTSxLQUFLLElBQUksR0FBRyxNQUFNLElBQUksS0FBSztBQUNqQyxVQUFNLElBQUksVUFBVSxJQUFJLENBQUMsR0FBRyxJQUFJLFVBQVUsSUFBSSxDQUFDO0FBQy9DLE9BQUc7QUFBQSxNQUFLO0FBQUEsTUFBRztBQUFBLE1BQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUFBLE1BQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQztBQUFBLE1BQUcsRUFBRTtBQUFBLE1BQ2xFLFFBQVEsSUFBSSxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsS0FBSztBQUFBLE1BQUcsUUFBUSxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxLQUFLO0FBQUEsTUFBRyxRQUFRLElBQUksRUFBRSxVQUFVLEVBQUUsVUFBVSxFQUFFLEtBQUs7QUFBQSxNQUFHLFFBQVEsSUFBSSxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsS0FBSztBQUFBLElBQUM7QUFBQSxFQUM1SztBQUdBLFdBQVMsSUFBSSxHQUFHLElBQUksR0FBRyxLQUFLLEdBQUc7QUFDN0IsVUFBTSxLQUFLLElBQUk7QUFDZixVQUFNLElBQUksZ0JBQWdCLElBQUksQ0FBQyxHQUFHLElBQUksZ0JBQWdCLEtBQUssRUFBRSxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUM7QUFDL0UsVUFBTSxNQUFNLEdBQUcsS0FBSyxLQUFLLEVBQUUsQ0FBQyxJQUFJLE1BQU8sR0FBRyxLQUFLLEtBQUssRUFBRSxDQUFDLElBQUksSUFBSztBQUNoRSxVQUFNLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRyxHQUFHLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLElBQUksR0FBRztBQUNqRixVQUFNLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxLQUFLLEdBQUcsRUFBRSxXQUFXLEVBQUUsSUFBSSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxHQUFHLENBQUM7QUFDM0csT0FBRyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsU0FBUyxRQUFRLEtBQUssTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxHQUFHLFFBQVEsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxHQUFHLFFBQVEsS0FBSyxNQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUM7QUFBQSxFQUM5SztBQUVBLFFBQU0sU0FBUyxJQUFVLFdBQUssR0FBRyxTQUFTLEdBQUcsU0FBUztBQUN0RCxTQUFPLE9BQU87QUFDZCxTQUFPLGFBQWEsUUFBUSxjQUFjO0FBQzFDLFNBQU8sZ0JBQWdCLFFBQVEsaUJBQWlCO0FBQ2hELE9BQUssSUFBSSxNQUFNO0FBSWYsUUFBTSxJQUFJLE9BQU8sTUFBTSxLQUFLLE9BQU87QUFDbkMsUUFBTSxLQUFLLElBQUksS0FBSztBQUNwQixLQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsSUFBSSxNQUFNLEdBQUcsS0FBSyxFQUFFLE1BQU0sTUFBTSxJQUFJO0FBQzlELEtBQUcsS0FBSyxHQUFHLElBQUksTUFBTyxHQUFHLElBQUksR0FBRyxPQUFPLEdBQUcsT0FBTyxHQUFHLFFBQVEsT0FBTyxJQUFJLEVBQUUsTUFBTSxNQUFNLEtBQUs7QUFDMUYsS0FBRyxLQUFLLE1BQU0sRUFBRSxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxNQUFNLEtBQUs7QUFDN0UsS0FBRyxLQUFLLEVBQUUsWUFBWSxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxLQUFLO0FBQ3hFLEtBQUcsS0FBSyxFQUFFLFVBQVUsRUFBRSxVQUFVLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxNQUFNLElBQUk7QUFDL0csS0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEdBQUcsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxRQUFRLE1BQU0sSUFBSTtBQUM3RixLQUFHLEtBQUssSUFBSSxPQUFPLElBQUksUUFBUSxJQUFJLFNBQVMsSUFBSSxTQUFTLElBQUksVUFBVSxNQUFPLElBQUksRUFBRSxRQUFRLE1BQU0sSUFBSTtBQUV0RyxXQUFTLElBQUksR0FBRyxJQUFJLEVBQUUsTUFBTSxLQUFLLEdBQUc7QUFDbEMsVUFBTSxJQUFJLElBQUksRUFBRTtBQUNoQixVQUFNLElBQUksVUFBVSxHQUFHLENBQUMsR0FBRyxNQUFNLEdBQUcsR0FBRyxFQUFFLE9BQU8sTUFBTSxDQUFDO0FBQ3ZELFVBQU0sTUFBTSxHQUFHLEVBQUUsR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLFVBQVU7QUFDdEMsVUFBTSxJQUFJLElBQUksTUFBTSxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxFQUFFLE9BQU8sSUFBSyxDQUFDLEVBQUUsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLENBQUM7QUFDMUYsVUFBTSxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxPQUFPLEVBQUUsQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxJQUFJLENBQUM7QUFDeEUsT0FBRyxJQUFJLEdBQUcsR0FBRyxNQUFNLE9BQU8sRUFBRSxHQUFHO0FBQy9CLFVBQU0sTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEdBQUcsSUFBSSxFQUFFLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELFVBQU0sSUFBSSxHQUFHLEdBQUcsRUFBRSxVQUFVLEVBQUUsVUFBVSxJQUFJLE1BQU0sQ0FBQyxFQUFFLElBQUksSUFBSSxNQUFNLEVBQUUsZUFBZSxFQUFFLFVBQVUsSUFBSSxDQUFDO0FBQ3JHLE9BQUcsSUFBSSxHQUFHLEtBQUssT0FBTyxPQUFPLEVBQUUsR0FBRztBQUFBLEVBQ3BDO0FBQ0EsUUFBTSxPQUFPLElBQVUsV0FBSyxHQUFHLFNBQVMsR0FBRyxRQUFRO0FBQ25ELE9BQUssT0FBTztBQUNaLE9BQUssYUFBYSxRQUFRLGNBQWM7QUFDeEMsT0FBSyxnQkFBZ0IsUUFBUSxpQkFBaUI7QUFDOUMsT0FBSyxJQUFJLElBQUk7QUFHYixRQUFNLE9BQU8sV0FBVyxNQUFNLEVBQUUsS0FBSztBQUNyQyxNQUFJLE1BQU07QUFBRSxjQUFVLE1BQU07QUFBTSxjQUFVLGNBQWM7QUFBQSxFQUFNO0FBRWhFLFFBQU0sUUFBd0MsRUFBRSxNQUFNLE1BQU0sT0FBTztBQUNuRSxRQUFNLFlBQXFDO0FBQUEsSUFDekMsTUFBTTtBQUFBLE1BQUUsT0FBTztBQUFBLE1BQVksYUFBYSxDQUFDLEdBQUcsTUFBTSxDQUFDO0FBQUEsTUFBRyxRQUFRO0FBQUEsTUFBTSxRQUFRO0FBQUEsTUFBSyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7QUFBQSxNQUM3RixPQUFPO0FBQUEsSUFBbUw7QUFBQSxFQUM5TDtBQUNBLE9BQUssU0FBUyxnQkFBZ0I7QUFBQSxJQUM1QjtBQUFBLElBQU8sUUFBUSxFQUFFLE1BQU0sT0FBTztBQUFBLElBQUcsU0FBUyxDQUFDO0FBQUEsSUFBRztBQUFBLElBQVcsbUJBQW1CLENBQUM7QUFBQSxFQUMvRTtBQUNBLFNBQU87QUFDVDtBQUlPLFNBQVMsa0JBQWtCLE1BQWdCLFVBQWtDLENBQUMsR0FBZ0I7QUFDbkcsUUFBTSxPQUFPLCtCQUErQixPQUFPO0FBQ25ELE1BQUksUUFBUSxPQUFPLFNBQVMsU0FBVSxNQUFLLFNBQVMsYUFBYTtBQUVqRSxRQUFNLEtBQUssS0FBSyxTQUFTO0FBQ3pCLE1BQUksSUFBSTtBQUNOLFVBQU0sUUFBUyxHQUFHLFNBQVMsQ0FBQztBQUs1QixVQUFNLFlBQVksSUFBVSxlQUFTO0FBQ3JDLGNBQVUsT0FBTztBQUNqQixjQUFVLFNBQVMsZ0JBQWdCO0FBQUEsTUFDakMsZUFBZTtBQUFBLE1BQ2YsT0FBTyxFQUFFLE1BQU0sVUFBVSxlQUFlLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxNQUFNLE9BQU87QUFBQSxJQUNuRjtBQUNBLFNBQUssSUFBSSxTQUFTO0FBRWxCLFVBQU0sWUFBWSxPQUFPLFFBQVMsR0FBRyxhQUFhLENBQUMsQ0FBeUIsRUFDekUsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssQ0FBQyxFQUFFLFNBQVMsQ0FBQyxFQUN6RSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLE1BQU0sSUFBSSxHQUFJLEVBQWEsRUFBRTtBQUVwRCxTQUFLLFNBQVMsZ0JBQWdCO0FBQUEsTUFDNUIsR0FBRztBQUFBLE1BQ0gsT0FBTyxPQUFPLEtBQUssS0FBSyxFQUFFO0FBQUEsTUFDMUIsUUFBUSxDQUFDLFNBQVM7QUFBQSxNQUFHLFNBQVMsQ0FBQztBQUFBLE1BQUc7QUFBQSxNQUFXLG1CQUFtQixDQUFDO0FBQUEsTUFDakUsTUFBTSxFQUFFLE9BQU8sUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxFQUFFO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0EsU0FBTztBQUNUO0FBR08sU0FBUyxZQUFZLFVBQWtDLENBQUMsR0FBZ0I7QUFDN0UsU0FBTyxrQkFBa0IsUUFBVyxPQUFPO0FBQzdDOyIsCiAgIm5hbWVzIjogW10KfQo=
