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

// ../repo/scratch/bamboo-slat-pergola-module/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createBambooSlatPergolaModuleModel: () => createBambooSlatPergolaModuleModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var HALF = 2;
var CONFIG = {
  half: HALF,
  // The post owns the cell edge. 130 mm square, outer faces ON +-2.000.
  post: { s: 0.13, top: 2.34 },
  // The perimeter beam, recessed 10 mm behind the post face so the post head stands proud.
  beam: { out: 1.99, thick: 0.09, bot: 2.34, top: 2.535 },
  // The cap rail, recessed 5 mm, wider inward so it laps the culm tops by 10 mm.
  rail: { out: 1.995, thick: 0.115, bot: 2.535, top: 2.6 },
  // Two purlins running along Z under the culms -- what a player standing under the bay sees.
  purlin: { x: 0.65, w: 0.09, bot: 2.4 },
  // The cleat that ties each post head to the beam, on the two INNER faces of every post.
  cleat: { w: 0.085, h: 0.23, t: 0.045 },
  culm: {
    count: 48,
    seg: 12,
    r: 0.035,
    // 70 mm culms: pitch 79.2 mm leaves a 9.2 mm gap
    y: 2.5185,
    // tops at 2.545, lapped 10 mm by the cap rail
    span: 1.9,
    // ends butt the inner faces of the +-X beams
    tileM: 0.6,
    // culm-uv tile: u around the circumference, v along the length
    // Measured on the plate at #bd9773 (luma 155.1, saturation 0.398) with p10/p90 88/195 -- the
    // spread inside one crop of the deck IS the variation, so it is carried as seven per-culm
    // tones rather than as one colour, two of them the grey the sun-faded culms have gone.
    // Authored as the INVERSE OF THE HARNESS TRANSFER, probed on this prop: the first build
    // measured an authored mean luma of 164 back at 104 on the deck, a factor of 0.634, and the
    // plate's deck reads 155. So the tones are carried at a mean of 208 to land near 132 --
    // pale honey on the canvas, honey in the render. Two of the seven are the grey a sun-faced
    // culm has gone, which is the p10/p90 spread inside one crop of the plate's deck.
    tones: [15254150, 14530172, 15652002, 13609592, 15123080, 13811095, 15453331]
  },
  // Measured on the plate: post #3f342a (luma 53.7, saturation 0.331), beam #836b56 (110.6, 0.344)
  // on the lit side and #6f5b4b (94.4, 0.321) on the shaded side. The first build carried ONE
  // timber tone lifted to luma 115 for fear of the turntable's background test -- which reads
  // `distance > 24 from the backdrop OR (saturation > 0.16 and luma < 0.94)`. It is the CHROMA
  // clause that carries a dark weathered timber, so the value separation the plate actually shows
  // can be shipped: the post is authored dark and only the harness transfer is corrected for.
  // Measured back on the first build of this frame: authored #7d6753 (luma 107) rendered 83 on
  // the lit beam face and 63 on the shaded one, authored #4e4034 (66) rendered 43 on the post.
  // Corrected for that transfer against the plate's own 111 / 94 / 54, and the value SEPARATION
  // the plate shows is kept: the post is the darkest member and the beam the lightest.
  // 1.8 m tile, not 0.75: a 2.34 m post over a 0.75 m tile showed the same bolt stain three
  // times down its face, which reads as a decal rather than as timber.
  timber: { post: 6048570, beam: 9928550, rail: 8876380, tileM: 1.8 },
  materials: {
    timber: { id: "weathered-timber", roughness: 0.9, metalness: 0 },
    bamboo: { id: "bamboo", roughness: 0.84, metalness: 0 }
  }
};
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
var srgbToLinear = (c) => c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
function linearOf(hex) {
  return [
    srgbToLinear((hex >> 16 & 255) / 255),
    srgbToLinear((hex >> 8 & 255) / 255),
    srgbToLinear((hex & 255) / 255)
  ];
}
var Soup = class {
  pos = [];
  uv = [];
  col = [];
  c = [1, 1, 1];
  tint(hex) {
    this.c = linearOf(hex);
  }
  vert(x, y, z, u, v) {
    this.pos.push(x, y, z);
    this.uv.push(u, v);
    this.col.push(this.c[0], this.c[1], this.c[2]);
  }
  /**
   * An axis-aligned box with WORLD-PLANAR uvs in metres: every face is unwrapped by the two world
   * axes it spans, so a 4 m beam and a 0.13 m post sample the timber tile at the same density and
   * nothing stretches. `long` is the member's own length axis, and `u` follows it on every face
   * that contains it -- which is what makes the grain run ALONG the member. Without it a post is
   * unwrapped by (x, y) and (z, y) with u = x and u = z, i.e. the grain runs ACROSS a 130 mm face
   * and the post ships ringed like a barrel. `uo`/`vo` walk each member to its own place in the
   * tile so two members meeting at a corner never show the same crack, and so a member longer than
   * the tile does not put its repeat where the eye is already looking.
   */
  box(x0, y0, z0, x1, y1, z1, tile, long = "x", uo = 0, vo = 0) {
    const s = 1 / tile;
    const q = (ax, ay, az, bx, by, bz, cx, cy, cz, dx, dy, dz, pa, pb, aa, ab, ba, bb, ca, cb, da, db) => {
      const flip = pb === long;
      const put = (X, Y, Z, m, n) => this.vert(X, Y, Z, (flip ? n : m) * s + uo, (flip ? m : n) * s + vo);
      put(ax, ay, az, aa, ab);
      put(bx, by, bz, ba, bb);
      put(cx, cy, cz, ca, cb);
      put(ax, ay, az, aa, ab);
      put(cx, cy, cz, ca, cb);
      put(dx, dy, dz, da, db);
    };
    q(x0, y0, z1, x1, y0, z1, x1, y1, z1, x0, y1, z1, "x", "y", x0, y0, x1, y0, x1, y1, x0, y1);
    q(x1, y0, z0, x0, y0, z0, x0, y1, z0, x1, y1, z0, "x", "y", x1, y0, x0, y0, x0, y1, x1, y1);
    q(x1, y0, z1, x1, y0, z0, x1, y1, z0, x1, y1, z1, "z", "y", z1, y0, z0, y0, z0, y1, z1, y1);
    q(x0, y0, z0, x0, y0, z1, x0, y1, z1, x0, y1, z0, "z", "y", z0, y0, z1, y0, z1, y1, z0, y1);
    q(x0, y1, z1, x1, y1, z1, x1, y1, z0, x0, y1, z0, "x", "z", x0, z1, x1, z1, x1, z0, x0, z0);
    q(x0, y0, z0, x1, y0, z0, x1, y0, z1, x0, y0, z1, "x", "z", x0, z0, x1, z0, x1, z1, x0, z1);
  }
  /**
   * One culm: an open-ended cylinder running along X, with CULM UVS -- u around the circumference
   * in metres and v along the length in metres, both over `tile`, plus a per-culm (uo, vo) phase.
   * That is what puts the node rings at real spacing and at a DIFFERENT place on every culm; a
   * planar unwrap would ring all sixty at the same station and read as a printed stripe.
   *
   * The ends are open because both are buried 100 mm inside the perimeter beam. Caps would be
   * 60 x 20 triangles nobody can see.
   */
  culm(cy, cz, r, halfLen, seg, roll, tile, uo, vo, hexA, hexB) {
    const circ = 2 * Math.PI * r;
    const p = (i, x) => {
      const a = roll + i / seg * Math.PI * 2;
      return [
        x,
        cy + Math.cos(a) * r,
        cz + Math.sin(a) * r,
        i / seg * circ / tile + uo,
        x / tile + vo
      ];
    };
    const put = (q, hex) => {
      this.tint(hex);
      this.vert(q[0], q[1], q[2], q[3], q[4]);
    };
    for (let i = 0; i < seg; i += 1) {
      const a0 = p(i, -halfLen), a1 = p(i + 1, -halfLen);
      const b0 = p(i, halfLen), b1 = p(i + 1, halfLen);
      put(a0, hexA);
      put(b0, hexB);
      put(b1, hexB);
      put(a0, hexA);
      put(b1, hexB);
      put(a1, hexA);
    }
  }
  geometry() {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(this.pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(this.uv, 2));
    g.setAttribute("color", new THREE.Float32BufferAttribute(this.col, 3));
    g.computeVertexNormals();
    return g;
  }
};
function canvas2d(size) {
  if (typeof document === "undefined") return null;
  const c = document.createElement("canvas");
  c.width = c.height = size;
  return c.getContext("2d", { willReadFrequently: true });
}
function textureOf(ctx) {
  if (!ctx) return null;
  const t = new THREE.CanvasTexture(ctx.canvas);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}
function bambooTile(size) {
  const g = canvas2d(size);
  if (!g) return null;
  const rnd = lcg(23063);
  g.fillStyle = "#f2efe9";
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 26; i += 1) {
    const x = rnd() * size, y = rnd() * size, r = size * (0.1 + rnd() * 0.22);
    const grad = g.createRadialGradient(x, y, 0, x, y, r);
    const a = 0.05 + rnd() * 0.09;
    grad.addColorStop(0, `rgba(152,146,138,${a})`);
    grad.addColorStop(1, "rgba(152,146,138,0)");
    g.fillStyle = grad;
    g.fillRect(x - r, y - r, r * 2, r * 2);
  }
  for (let i = 0; i < 340; i += 1) {
    const x = rnd() * size;
    const y0 = rnd() * size, len = size * (0.25 + rnd() * 0.9);
    g.strokeStyle = `rgba(${120 + rnd() * 60 | 0},${104 + rnd() * 52 | 0},${82 + rnd() * 44 | 0},${0.06 + rnd() * 0.12})`;
    g.lineWidth = 0.6 + rnd() * 1.3;
    g.beginPath();
    g.moveTo(x, y0);
    g.lineTo(x + (rnd() - 0.5) * 3, y0 + len);
    g.stroke();
  }
  for (const cy of [size * 0.25, size * 0.75]) {
    const h = size * 0.028;
    const band = g.createLinearGradient(0, cy - h * 2.2, 0, cy + h * 2.2);
    band.addColorStop(0, "rgba(150,126,96,0)");
    band.addColorStop(0.35, "rgba(150,126,96,0.34)");
    band.addColorStop(0.52, "rgba(112,92,66,0.40)");
    band.addColorStop(0.7, "rgba(214,196,166,0.22)");
    band.addColorStop(1, "rgba(150,126,96,0)");
    g.fillStyle = band;
    g.fillRect(0, cy - h * 2.2, size, h * 4.4);
    for (let i = 0; i < 16; i += 1) {
      const x = rnd() * size;
      g.fillStyle = `rgba(96,78,56,${0.07 + rnd() * 0.11})`;
      g.fillRect(x, cy + h * (0.6 + rnd() * 1.4), 1 + rnd() * 2, 1 + rnd() * 2);
    }
  }
  for (let i = 0; i < 30; i += 1) {
    const x = rnd() * size, y = rnd() * size;
    g.strokeStyle = `rgba(88,72,54,${0.14 + rnd() * 0.22})`;
    g.lineWidth = 0.7 + rnd() * 0.8;
    g.beginPath();
    g.moveTo(x, y);
    g.lineTo(x + (rnd() - 0.5) * 4, y + size * (0.03 + rnd() * 0.12));
    g.stroke();
  }
  return textureOf(g);
}
function timberTile(size) {
  const g = canvas2d(size);
  if (!g) return null;
  const rnd = lcg(39985);
  g.fillStyle = "#f4f1ec";
  g.fillRect(0, 0, size, size);
  for (let i = 0; i < 22; i += 1) {
    const x = rnd() * size, w = size * (0.04 + rnd() * 0.16);
    const grad = g.createLinearGradient(x, 0, x + w, 0);
    const a = 0.05 + rnd() * 0.11;
    grad.addColorStop(0, "rgba(138,138,134,0)");
    grad.addColorStop(0.5, `rgba(138,138,134,${a})`);
    grad.addColorStop(1, "rgba(138,138,134,0)");
    g.fillStyle = grad;
    g.fillRect(x, 0, w, size);
  }
  for (let i = 0; i < 200; i += 1) {
    const y = rnd() * size;
    g.strokeStyle = `rgba(${74 + rnd() * 56 | 0},${62 + rnd() * 46 | 0},${48 + rnd() * 38 | 0},${0.07 + rnd() * 0.16})`;
    g.lineWidth = 0.6 + rnd() * 1.8;
    g.beginPath();
    g.moveTo(0, y);
    for (let x = 0; x <= size; x += size / 8) g.lineTo(x, y + Math.sin(x / size * 6.3 + i) * 1.6);
    g.stroke();
  }
  for (let i = 0; i < 16; i += 1) {
    const y = rnd() * size, x0 = rnd() * size, len = size * (0.18 + rnd() * 0.55);
    g.strokeStyle = `rgba(42,34,26,${0.3 + rnd() * 0.34})`;
    g.lineWidth = 0.8 + rnd() * 1.6;
    g.beginPath();
    g.moveTo(x0, y);
    for (let t = 0; t <= 1.001; t += 0.125) g.lineTo(x0 + len * t, y + Math.sin(t * 7 + i) * 1.9);
    g.stroke();
  }
  for (let i = 0; i < 5; i += 1) {
    const x = size * (0.1 + rnd() * 0.8), y = size * (0.1 + rnd() * 0.7);
    const grad = g.createLinearGradient(x, y, x, y + size * 0.22);
    grad.addColorStop(0, "rgba(122,74,40,0.42)");
    grad.addColorStop(1, "rgba(122,74,40,0)");
    g.fillStyle = grad;
    g.fillRect(x - size * 0.02, y, size * 0.04, size * 0.22);
    g.fillStyle = "rgba(58,42,30,0.55)";
    g.beginPath();
    g.arc(x, y, size * 0.012, 0, Math.PI * 2);
    g.fill();
  }
  return textureOf(g);
}
function createBambooSlatPergolaModuleModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Bamboo Slat Pergola Module";
  const wire = options.wireframe ?? false;
  const timberTex = timberTile(512);
  const bambooTex = bambooTile(512);
  const timberMat = new THREE.MeshStandardMaterial({
    color: 16777215,
    vertexColors: true,
    wireframe: wire,
    roughness: CONFIG.materials.timber.roughness,
    metalness: CONFIG.materials.timber.metalness
  });
  timberMat.name = CONFIG.materials.timber.id;
  if (timberTex) timberMat.map = timberTex;
  const bambooMat = new THREE.MeshStandardMaterial({
    color: 16777215,
    vertexColors: true,
    wireframe: wire,
    roughness: CONFIG.materials.bamboo.roughness,
    metalness: CONFIG.materials.bamboo.metalness
  });
  bambooMat.name = CONFIG.materials.bamboo.id;
  if (bambooTex) bambooMat.map = bambooTex;
  const H = CONFIG.half, P = CONFIG.post, B = CONFIG.beam, R = CONFIG.rail;
  const T = CONFIG.timber, K = CONFIG.culm;
  const s = new Soup();
  s.tint(T.post);
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const x0 = sx > 0 ? H - P.s : -H, x1 = sx > 0 ? H : -H + P.s;
    const z0 = sz > 0 ? H - P.s : -H, z1 = sz > 0 ? H : -H + P.s;
    s.box(x0, 0, z0, x1, P.top, z1, T.tileM, "y", (sx + sz * 2 + 3) * 0.31, (sx - sz) * 0.23);
  }
  s.tint(T.beam);
  const bi = B.out - B.thick;
  for (const sz of [-1, 1]) {
    const z0 = sz > 0 ? bi : -B.out, z1 = sz > 0 ? B.out : -bi;
    s.box(-B.out, B.bot, z0, B.out, B.top, z1, T.tileM, "x", sz > 0 ? 0 : 0.47, sz > 0 ? 0.13 : 0.61);
  }
  for (const sx of [-1, 1]) {
    const x0 = sx > 0 ? bi : -B.out, x1 = sx > 0 ? B.out : -bi;
    s.box(x0, B.bot, -bi, x1, B.top, bi, T.tileM, "z", sx > 0 ? 0.19 : 0.71, sx > 0 ? 0.37 : 0.05);
  }
  s.tint(T.rail);
  const ri = R.out - R.thick;
  for (const sz of [-1, 1]) {
    const z0 = sz > 0 ? ri : -R.out, z1 = sz > 0 ? R.out : -ri;
    s.box(-R.out, R.bot, z0, R.out, R.top, z1, T.tileM, "x", sz > 0 ? 0.11 : 0.63, sz > 0 ? 0.29 : 0.77);
  }
  for (const sx of [-1, 1]) {
    const x0 = sx > 0 ? ri : -R.out, x1 = sx > 0 ? R.out : -ri;
    s.box(x0, R.bot, -ri, x1, R.top, ri, T.tileM, "z", sx > 0 ? 0.29 : 0.83, sx > 0 ? 0.55 : 0.19);
  }
  s.tint(T.beam);
  const PU = CONFIG.purlin;
  for (const sx of [-1, 1]) {
    s.box(
      sx * PU.x - PU.w / 2,
      PU.bot,
      -K.span,
      sx * PU.x + PU.w / 2,
      K.y - K.r,
      K.span,
      T.tileM,
      "z",
      sx > 0 ? 0.37 : 0.53,
      sx > 0 ? 0.71 : 0.41
    );
  }
  s.tint(T.rail);
  const CL = CONFIG.cleat;
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) {
    const px = sx * (H - P.s / 2), pz = sz * (H - P.s / 2);
    const inx = px - sx * (P.s / 2 + CL.t / 2), inz = pz - sz * (P.s / 2 + CL.t / 2);
    s.box(
      inx - CL.t / 2,
      P.top - CL.h,
      pz - CL.w / 2,
      inx + CL.t / 2,
      P.top,
      pz + CL.w / 2,
      T.tileM,
      "y",
      0.07 + sx * 0.13,
      0.31 + sz * 0.17
    );
    s.box(
      px - CL.w / 2,
      P.top - CL.h,
      inz - CL.t / 2,
      px + CL.w / 2,
      P.top,
      inz + CL.t / 2,
      T.tileM,
      "y",
      0.41 + sz * 0.11,
      0.67 + sx * 0.21
    );
  }
  const frame = new THREE.Mesh(s.geometry(), timberMat);
  frame.name = "Posts, perimeter beam, cap rail, purlins and cleats";
  frame.castShadow = options.castShadow ?? true;
  frame.receiveShadow = options.receiveShadow ?? true;
  root.add(frame);
  const rc = new Soup();
  const rnd = lcg(7985);
  const pitch = K.span * 2 / K.count;
  for (let i = 0; i < K.count; i += 1) {
    const z = -K.span + pitch * (i + 0.5);
    const r = K.r * (0.94 + rnd() * 0.12);
    const y = K.y + (rnd() - 0.5) * 3e-3;
    const a = K.tones[(i * 3 + i % 7) % K.tones.length];
    const b = K.tones[(i * 5 + 3) % K.tones.length];
    rc.culm(y, z, r, K.span, K.seg, rnd() * Math.PI * 2, K.tileM, rnd(), rnd() * 4, a, b);
  }
  const roof = new THREE.Mesh(rc.geometry(), bambooMat);
  roof.name = "Forty-eight spaced bamboo culms";
  roof.castShadow = options.castShadow ?? true;
  roof.receiveShadow = options.receiveShadow ?? true;
  root.add(roof);
  const nodes = { root, frame, roof };
  const colliders = {
    frame: {
      shape: "box",
      localCenter: [0, 1.3, 0],
      size: [4, 2.6, 4],
      axis: [0, 1, 0],
      notes: "Authoring intent only; thaikit derives the shipped compound from the built geometry. A pergola is walked UNDER, so the derived compound matters more here than on a solid prop."
    }
  };
  root.userData.sculptRuntime = {
    nodes,
    meshes: { frame, roof },
    sockets: {},
    colliders,
    destructionGroups: {}
  };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createBambooSlatPergolaModuleModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQmFtYm9vIFNsYXQgUGVyZ29sYSBNb2R1bGUgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlOiB0aGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IGluamVjdHMgaXRzIG93biBpbnN0YW5jZS5cbiAqXG4gKiBFbnZlbG9wZSA0LjAgeCAyLjYgeCA0LjAgbSwgb3JpZ2luIGJhc2UtY2VudGVyIG9uIHRoZSBncm91bmQgYXQgdGhlIGNlbnRyZSBvZiB0aGUgYmF5LCArWSB1cC5cbiAqIFRoZSBjdWxtcyBydW4gYWxvbmcgWCBhbmQgdGhlIGNvdXJzZSBtYXJjaGVzIGFsb25nIFouXG4gKlxuICogVGhpcyBpcyBPTkUgQkFZIG9mIGEgbW9kdWxhciBvdXRkb29yIHJvb2Yga2l0IG9uIGEgNCBtIGdyaWQsIHNvIE5PVEhJTkcgbWF5IGNyb3NzICstMi4wMCBtIGluIHhcbiAqIG9yIHo6IGEgYmF5IHRoYXQgb3ZlcmhhbmdzIGludGVycGVuZXRyYXRlcyBpdHMgbmVpZ2hib3VyLiBUaGUgUE9TVFMgb3duIHRoZSBjZWxsIGVkZ2Ugd2l0aCB0aGVpclxuICogb3V0ZXIgZmFjZXMgZXhhY3RseSBvbiArLTIuMDAwOyB0aGUgYmVhbSBpcyByZWNlc3NlZCAxMCBtbSBhbmQgdGhlIGNhcCByYWlsIDUgbW0gYmVoaW5kIHRoZW0sIHNvXG4gKiB0aGUgcG9zdCBoZWFkIHJlYWRzIGFzIGEgcmVhbCBqb2ludCBzdGFuZGluZyBwcm91ZCBvZiB0aGUgcmFpbCBpdCBjYXJyaWVzIC0tIGFuZCBubyB0d28gc3VyZmFjZXNcbiAqIGFyZSBmbHVzaCBhbmQgY28tZmFjaW5nLCB3aGljaCBpcyB3aGF0IGNoZWNrLWNvcGxhbmFyIGlzIGxvb2tpbmcgZm9yLlxuICpcbiAqIFRoZSByb29mIGlzIEZPUlRZLUVJR0hUIHJlYWwgcm91bmQgY3VsbXMgYXQgYSA3OSBtbSBwaXRjaCB3aXRoIGEgOSBtbSBnYXA6IHRoZSBwbGF0ZSdzIG93blxuICogZ2FwLXRvLXBpdGNoIHJhdGlvIG9mIDAuMTIsIGkuZS4gc2xhdHMgbmVhcmx5IHRvdWNoaW5nLCBhbmQgbm90IHRoZSB3aWRlbHkgc3BhY2VkIGJhdHRlbiByb29mIGF0XG4gKiB0aHJlZSB0aW1lcyB0aGF0IHBpdGNoIHdoaWNoIHRoZSBmaXJzdCBidWlsZCBzaGlwcGVkLiBUaGV5IGFyZSBPTkUgbWVyZ2VkIGdlb21ldHJ5IHJhdGhlclxuICogdGhhbiBhbiBJbnN0YW5jZWRNZXNoLCBhbmQgdGhhdCBpcyB0aGUgd2hvbGUgcmVhc29uIHRoaXMgYnVpbGQgbG9va3MgbGlrZSBiYW1ib286IGEgbWVyZ2UgY2FuXG4gKiBjYXJyeSBQRVItQ1VMTSB1diBvZmZzZXRzLCBzbyB0aGUgbm9kZSByaW5ncyBmYWxsIGF0IGEgZGlmZmVyZW50IHBoYXNlIG9uIGV2ZXJ5IGN1bG0sIGFuZFxuICogcGVyLWN1bG0gdG9uZSwgcmFkaXVzLCByb2xsIGFuZCBoZWlnaHQgaml0dGVyLiBUaGlydHktc2l4IGlkZW50aWNhbCBpbnN0YW5jZXMgb2Ygb25lIGN5bGluZGVyXG4gKiByZWFkIGFzIGEgcHJpbnRlZCBzdHJpcGUgaG93ZXZlciBtYW55IHRvbmVzIHJpZGUgb24gdGhlIGluc3RhbmNlIGNvbG91ciBhdHRyaWJ1dGUuXG4gKlxuICogQnVkZ2V0ICh0aGFpa2l0IGxhcmdlIGNsYXNzKTogNCBkcmF3IGNhbGxzLCAzIG1hdGVyaWFscywgNiB1bmlxdWUgZ2VvbWV0cmllcywgNDAwMCB0cmlhbmdsZXMuXG4gKiBGcmFtZSBtZXJnZWQgaW50byBPTkUgZ2VvbWV0cnksIHJvb2YgbWVyZ2VkIGludG8gT05FIGdlb21ldHJ5OiAyIGRyYXcgY2FsbHMuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICBiYXNlVXJsPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBIQUxGID0gMi4wO1xuXG5jb25zdCBDT05GSUcgPSB7XG4gIGhhbGY6IEhBTEYsXG4gIC8vIFRoZSBwb3N0IG93bnMgdGhlIGNlbGwgZWRnZS4gMTMwIG1tIHNxdWFyZSwgb3V0ZXIgZmFjZXMgT04gKy0yLjAwMC5cbiAgcG9zdDogeyBzOiAwLjEzLCB0b3A6IDIuMzQwIH0sXG4gIC8vIFRoZSBwZXJpbWV0ZXIgYmVhbSwgcmVjZXNzZWQgMTAgbW0gYmVoaW5kIHRoZSBwb3N0IGZhY2Ugc28gdGhlIHBvc3QgaGVhZCBzdGFuZHMgcHJvdWQuXG4gIGJlYW06IHsgb3V0OiAxLjk5MCwgdGhpY2s6IDAuMDkwLCBib3Q6IDIuMzQwLCB0b3A6IDIuNTM1IH0sXG4gIC8vIFRoZSBjYXAgcmFpbCwgcmVjZXNzZWQgNSBtbSwgd2lkZXIgaW53YXJkIHNvIGl0IGxhcHMgdGhlIGN1bG0gdG9wcyBieSAxMCBtbS5cbiAgcmFpbDogeyBvdXQ6IDEuOTk1LCB0aGljazogMC4xMTUsIGJvdDogMi41MzUsIHRvcDogMi42MDAgfSxcbiAgLy8gVHdvIHB1cmxpbnMgcnVubmluZyBhbG9uZyBaIHVuZGVyIHRoZSBjdWxtcyAtLSB3aGF0IGEgcGxheWVyIHN0YW5kaW5nIHVuZGVyIHRoZSBiYXkgc2Vlcy5cbiAgcHVybGluOiB7IHg6IDAuNjUsIHc6IDAuMDkwLCBib3Q6IDIuNDAwIH0sXG4gIC8vIFRoZSBjbGVhdCB0aGF0IHRpZXMgZWFjaCBwb3N0IGhlYWQgdG8gdGhlIGJlYW0sIG9uIHRoZSB0d28gSU5ORVIgZmFjZXMgb2YgZXZlcnkgcG9zdC5cbiAgY2xlYXQ6IHsgdzogMC4wODUsIGg6IDAuMjMwLCB0OiAwLjA0NSB9LFxuICBjdWxtOiB7XG4gICAgY291bnQ6IDQ4LCBzZWc6IDEyLFxuICAgIHI6IDAuMDM1MCwgICAgICAgICAgICAgICAgICAgICAvLyA3MCBtbSBjdWxtczogcGl0Y2ggNzkuMiBtbSBsZWF2ZXMgYSA5LjIgbW0gZ2FwXG4gICAgeTogMi41MTg1LCAgICAgICAgICAgICAgICAgICAgIC8vIHRvcHMgYXQgMi41NDUsIGxhcHBlZCAxMCBtbSBieSB0aGUgY2FwIHJhaWxcbiAgICBzcGFuOiAxLjkwMCwgICAgICAgICAgICAgICAgICAgLy8gZW5kcyBidXR0IHRoZSBpbm5lciBmYWNlcyBvZiB0aGUgKy1YIGJlYW1zXG4gICAgdGlsZU06IDAuNjAsICAgICAgICAgICAgICAgICAgIC8vIGN1bG0tdXYgdGlsZTogdSBhcm91bmQgdGhlIGNpcmN1bWZlcmVuY2UsIHYgYWxvbmcgdGhlIGxlbmd0aFxuICAgIC8vIE1lYXN1cmVkIG9uIHRoZSBwbGF0ZSBhdCAjYmQ5NzczIChsdW1hIDE1NS4xLCBzYXR1cmF0aW9uIDAuMzk4KSB3aXRoIHAxMC9wOTAgODgvMTk1IC0tIHRoZVxuICAgIC8vIHNwcmVhZCBpbnNpZGUgb25lIGNyb3Agb2YgdGhlIGRlY2sgSVMgdGhlIHZhcmlhdGlvbiwgc28gaXQgaXMgY2FycmllZCBhcyBzZXZlbiBwZXItY3VsbVxuICAgIC8vIHRvbmVzIHJhdGhlciB0aGFuIGFzIG9uZSBjb2xvdXIsIHR3byBvZiB0aGVtIHRoZSBncmV5IHRoZSBzdW4tZmFkZWQgY3VsbXMgaGF2ZSBnb25lLlxuICAgIC8vIEF1dGhvcmVkIGFzIHRoZSBJTlZFUlNFIE9GIFRIRSBIQVJORVNTIFRSQU5TRkVSLCBwcm9iZWQgb24gdGhpcyBwcm9wOiB0aGUgZmlyc3QgYnVpbGRcbiAgICAvLyBtZWFzdXJlZCBhbiBhdXRob3JlZCBtZWFuIGx1bWEgb2YgMTY0IGJhY2sgYXQgMTA0IG9uIHRoZSBkZWNrLCBhIGZhY3RvciBvZiAwLjYzNCwgYW5kIHRoZVxuICAgIC8vIHBsYXRlJ3MgZGVjayByZWFkcyAxNTUuIFNvIHRoZSB0b25lcyBhcmUgY2FycmllZCBhdCBhIG1lYW4gb2YgMjA4IHRvIGxhbmQgbmVhciAxMzIgLS1cbiAgICAvLyBwYWxlIGhvbmV5IG9uIHRoZSBjYW52YXMsIGhvbmV5IGluIHRoZSByZW5kZXIuIFR3byBvZiB0aGUgc2V2ZW4gYXJlIHRoZSBncmV5IGEgc3VuLWZhY2VkXG4gICAgLy8gY3VsbSBoYXMgZ29uZSwgd2hpY2ggaXMgdGhlIHAxMC9wOTAgc3ByZWFkIGluc2lkZSBvbmUgY3JvcCBvZiB0aGUgcGxhdGUncyBkZWNrLlxuICAgIHRvbmVzOiBbMHhlOGMyODYsIDB4ZGRiNjdjLCAweGVlZDRhMiwgMHhjZmFhNzgsIDB4ZTZjMjg4LCAweGQyYmQ5NywgMHhlYmNjOTNdLFxuICB9LFxuICAvLyBNZWFzdXJlZCBvbiB0aGUgcGxhdGU6IHBvc3QgIzNmMzQyYSAobHVtYSA1My43LCBzYXR1cmF0aW9uIDAuMzMxKSwgYmVhbSAjODM2YjU2ICgxMTAuNiwgMC4zNDQpXG4gIC8vIG9uIHRoZSBsaXQgc2lkZSBhbmQgIzZmNWI0YiAoOTQuNCwgMC4zMjEpIG9uIHRoZSBzaGFkZWQgc2lkZS4gVGhlIGZpcnN0IGJ1aWxkIGNhcnJpZWQgT05FXG4gIC8vIHRpbWJlciB0b25lIGxpZnRlZCB0byBsdW1hIDExNSBmb3IgZmVhciBvZiB0aGUgdHVybnRhYmxlJ3MgYmFja2dyb3VuZCB0ZXN0IC0tIHdoaWNoIHJlYWRzXG4gIC8vIGBkaXN0YW5jZSA+IDI0IGZyb20gdGhlIGJhY2tkcm9wIE9SIChzYXR1cmF0aW9uID4gMC4xNiBhbmQgbHVtYSA8IDAuOTQpYC4gSXQgaXMgdGhlIENIUk9NQVxuICAvLyBjbGF1c2UgdGhhdCBjYXJyaWVzIGEgZGFyayB3ZWF0aGVyZWQgdGltYmVyLCBzbyB0aGUgdmFsdWUgc2VwYXJhdGlvbiB0aGUgcGxhdGUgYWN0dWFsbHkgc2hvd3NcbiAgLy8gY2FuIGJlIHNoaXBwZWQ6IHRoZSBwb3N0IGlzIGF1dGhvcmVkIGRhcmsgYW5kIG9ubHkgdGhlIGhhcm5lc3MgdHJhbnNmZXIgaXMgY29ycmVjdGVkIGZvci5cbiAgLy8gTWVhc3VyZWQgYmFjayBvbiB0aGUgZmlyc3QgYnVpbGQgb2YgdGhpcyBmcmFtZTogYXV0aG9yZWQgIzdkNjc1MyAobHVtYSAxMDcpIHJlbmRlcmVkIDgzIG9uXG4gIC8vIHRoZSBsaXQgYmVhbSBmYWNlIGFuZCA2MyBvbiB0aGUgc2hhZGVkIG9uZSwgYXV0aG9yZWQgIzRlNDAzNCAoNjYpIHJlbmRlcmVkIDQzIG9uIHRoZSBwb3N0LlxuICAvLyBDb3JyZWN0ZWQgZm9yIHRoYXQgdHJhbnNmZXIgYWdhaW5zdCB0aGUgcGxhdGUncyBvd24gMTExIC8gOTQgLyA1NCwgYW5kIHRoZSB2YWx1ZSBTRVBBUkFUSU9OXG4gIC8vIHRoZSBwbGF0ZSBzaG93cyBpcyBrZXB0OiB0aGUgcG9zdCBpcyB0aGUgZGFya2VzdCBtZW1iZXIgYW5kIHRoZSBiZWFtIHRoZSBsaWdodGVzdC5cbiAgLy8gMS44IG0gdGlsZSwgbm90IDAuNzU6IGEgMi4zNCBtIHBvc3Qgb3ZlciBhIDAuNzUgbSB0aWxlIHNob3dlZCB0aGUgc2FtZSBib2x0IHN0YWluIHRocmVlXG4gIC8vIHRpbWVzIGRvd24gaXRzIGZhY2UsIHdoaWNoIHJlYWRzIGFzIGEgZGVjYWwgcmF0aGVyIHRoYW4gYXMgdGltYmVyLlxuICB0aW1iZXI6IHsgcG9zdDogMHg1YzRiM2EsIGJlYW06IDB4OTc3ZjY2LCByYWlsOiAweDg3NzE1YywgdGlsZU06IDEuODAgfSxcbiAgbWF0ZXJpYWxzOiB7XG4gICAgdGltYmVyOiB7IGlkOiAnd2VhdGhlcmVkLXRpbWJlcicsIHJvdWdobmVzczogMC45MCwgbWV0YWxuZXNzOiAwLjAgfSxcbiAgICBiYW1ib286IHsgaWQ6ICdiYW1ib28nLCByb3VnaG5lc3M6IDAuODQsIG1ldGFsbmVzczogMC4wIH0sXG4gIH0sXG59O1xuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tOiBhIHJlLXJ1biBvZiB0aGUgZmFjdG9yeSBpcyBieXRlLWlkZW50aWNhbC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgc291cCAqL1xuXG50eXBlIFJHQiA9IFtudW1iZXIsIG51bWJlciwgbnVtYmVyXTtcblxuY29uc3Qgc3JnYlRvTGluZWFyID0gKGM6IG51bWJlcikgPT4gKGMgPD0gMC4wNDA0NSA/IGMgLyAxMi45MiA6IE1hdGgucG93KChjICsgMC4wNTUpIC8gMS4wNTUsIDIuNCkpO1xuZnVuY3Rpb24gbGluZWFyT2YoaGV4OiBudW1iZXIpOiBSR0Ige1xuICByZXR1cm4gW3NyZ2JUb0xpbmVhcigoKGhleCA+PiAxNikgJiAyNTUpIC8gMjU1KSxcbiAgICAgICAgICBzcmdiVG9MaW5lYXIoKChoZXggPj4gOCkgJiAyNTUpIC8gMjU1KSxcbiAgICAgICAgICBzcmdiVG9MaW5lYXIoKGhleCAmIDI1NSkgLyAyNTUpXTtcbn1cblxuLyoqXG4gKiBBIHBvc2l0aW9uL3V2L2NvbG91ciBzb3VwLiBFdmVyeSBnZW9tZXRyeSBpbiB0aGlzIGZhY3RvcnkgY2FycmllcyBhbGwgdGhyZWU6IHRoZSBtYXRlcmlhbHMgYXJlXG4gKiBXSElURSB3aXRoIGB2ZXJ0ZXhDb2xvcnNgLCBzbyBhIHZlcnRleCB3aXRoIG5vIGNvbG91ciByZW5kZXJzIEJMQUNLIC0tIGZpbGwgaXQsIGV2ZXJ5IHRpbWUuXG4gKi9cbmNsYXNzIFNvdXAge1xuICBwb3M6IG51bWJlcltdID0gW107XG4gIHV2OiBudW1iZXJbXSA9IFtdO1xuICBjb2w6IG51bWJlcltdID0gW107XG4gIHByaXZhdGUgYzogUkdCID0gWzEsIDEsIDFdO1xuXG4gIHRpbnQoaGV4OiBudW1iZXIpOiB2b2lkIHsgdGhpcy5jID0gbGluZWFyT2YoaGV4KTsgfVxuXG4gIHZlcnQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlciwgdTogbnVtYmVyLCB2OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLnBvcy5wdXNoKHgsIHksIHopO1xuICAgIHRoaXMudXYucHVzaCh1LCB2KTtcbiAgICB0aGlzLmNvbC5wdXNoKHRoaXMuY1swXSwgdGhpcy5jWzFdLCB0aGlzLmNbMl0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGF4aXMtYWxpZ25lZCBib3ggd2l0aCBXT1JMRC1QTEFOQVIgdXZzIGluIG1ldHJlczogZXZlcnkgZmFjZSBpcyB1bndyYXBwZWQgYnkgdGhlIHR3byB3b3JsZFxuICAgKiBheGVzIGl0IHNwYW5zLCBzbyBhIDQgbSBiZWFtIGFuZCBhIDAuMTMgbSBwb3N0IHNhbXBsZSB0aGUgdGltYmVyIHRpbGUgYXQgdGhlIHNhbWUgZGVuc2l0eSBhbmRcbiAgICogbm90aGluZyBzdHJldGNoZXMuIGBsb25nYCBpcyB0aGUgbWVtYmVyJ3Mgb3duIGxlbmd0aCBheGlzLCBhbmQgYHVgIGZvbGxvd3MgaXQgb24gZXZlcnkgZmFjZVxuICAgKiB0aGF0IGNvbnRhaW5zIGl0IC0tIHdoaWNoIGlzIHdoYXQgbWFrZXMgdGhlIGdyYWluIHJ1biBBTE9ORyB0aGUgbWVtYmVyLiBXaXRob3V0IGl0IGEgcG9zdCBpc1xuICAgKiB1bndyYXBwZWQgYnkgKHgsIHkpIGFuZCAoeiwgeSkgd2l0aCB1ID0geCBhbmQgdSA9IHosIGkuZS4gdGhlIGdyYWluIHJ1bnMgQUNST1NTIGEgMTMwIG1tIGZhY2VcbiAgICogYW5kIHRoZSBwb3N0IHNoaXBzIHJpbmdlZCBsaWtlIGEgYmFycmVsLiBgdW9gL2B2b2Agd2FsayBlYWNoIG1lbWJlciB0byBpdHMgb3duIHBsYWNlIGluIHRoZVxuICAgKiB0aWxlIHNvIHR3byBtZW1iZXJzIG1lZXRpbmcgYXQgYSBjb3JuZXIgbmV2ZXIgc2hvdyB0aGUgc2FtZSBjcmFjaywgYW5kIHNvIGEgbWVtYmVyIGxvbmdlciB0aGFuXG4gICAqIHRoZSB0aWxlIGRvZXMgbm90IHB1dCBpdHMgcmVwZWF0IHdoZXJlIHRoZSBleWUgaXMgYWxyZWFkeSBsb29raW5nLlxuICAgKi9cbiAgYm94KHgwOiBudW1iZXIsIHkwOiBudW1iZXIsIHowOiBudW1iZXIsIHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHoxOiBudW1iZXIsXG4gICAgICB0aWxlOiBudW1iZXIsIGxvbmc6ICd4JyB8ICd5JyB8ICd6JyA9ICd4JywgdW8gPSAwLCB2byA9IDApOiB2b2lkIHtcbiAgICBjb25zdCBzID0gMSAvIHRpbGU7XG4gICAgY29uc3QgcSA9IChcbiAgICAgIGF4OiBudW1iZXIsIGF5OiBudW1iZXIsIGF6OiBudW1iZXIsIGJ4OiBudW1iZXIsIGJ5OiBudW1iZXIsIGJ6OiBudW1iZXIsXG4gICAgICBjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCBkejogbnVtYmVyLFxuICAgICAgcGE6ICd4JyB8ICd5JyB8ICd6JywgcGI6ICd4JyB8ICd5JyB8ICd6JyxcbiAgICAgIGFhOiBudW1iZXIsIGFiOiBudW1iZXIsIGJhOiBudW1iZXIsIGJiOiBudW1iZXIsIGNhOiBudW1iZXIsIGNiOiBudW1iZXIsIGRhOiBudW1iZXIsIGRiOiBudW1iZXIsXG4gICAgKSA9PiB7XG4gICAgICBjb25zdCBmbGlwID0gcGIgPT09IGxvbmc7ICAgICAgICAgICAgICAgICAvLyB1IG11c3QgZm9sbG93IHRoZSBtZW1iZXIncyBsZW5ndGhcbiAgICAgIGNvbnN0IHB1dCA9IChYOiBudW1iZXIsIFk6IG51bWJlciwgWjogbnVtYmVyLCBtOiBudW1iZXIsIG46IG51bWJlcikgPT5cbiAgICAgICAgdGhpcy52ZXJ0KFgsIFksIFosIChmbGlwID8gbiA6IG0pICogcyArIHVvLCAoZmxpcCA/IG0gOiBuKSAqIHMgKyB2byk7XG4gICAgICBwdXQoYXgsIGF5LCBheiwgYWEsIGFiKTsgcHV0KGJ4LCBieSwgYnosIGJhLCBiYik7IHB1dChjeCwgY3ksIGN6LCBjYSwgY2IpO1xuICAgICAgcHV0KGF4LCBheSwgYXosIGFhLCBhYik7IHB1dChjeCwgY3ksIGN6LCBjYSwgY2IpOyBwdXQoZHgsIGR5LCBkeiwgZGEsIGRiKTtcbiAgICB9O1xuICAgIC8vICtaIGFuZCAtWiBmYWNlcyAoc3Bhbm5lZCBieSB4LHkpLCArWCBhbmQgLVggKGJ5IHoseSksICtZIGFuZCAtWSAoYnkgeCx6KVxuICAgIHEoeDAsIHkwLCB6MSwgeDEsIHkwLCB6MSwgeDEsIHkxLCB6MSwgeDAsIHkxLCB6MSwgJ3gnLCAneScsIHgwLCB5MCwgeDEsIHkwLCB4MSwgeTEsIHgwLCB5MSk7XG4gICAgcSh4MSwgeTAsIHowLCB4MCwgeTAsIHowLCB4MCwgeTEsIHowLCB4MSwgeTEsIHowLCAneCcsICd5JywgeDEsIHkwLCB4MCwgeTAsIHgwLCB5MSwgeDEsIHkxKTtcbiAgICBxKHgxLCB5MCwgejEsIHgxLCB5MCwgejAsIHgxLCB5MSwgejAsIHgxLCB5MSwgejEsICd6JywgJ3knLCB6MSwgeTAsIHowLCB5MCwgejAsIHkxLCB6MSwgeTEpO1xuICAgIHEoeDAsIHkwLCB6MCwgeDAsIHkwLCB6MSwgeDAsIHkxLCB6MSwgeDAsIHkxLCB6MCwgJ3onLCAneScsIHowLCB5MCwgejEsIHkwLCB6MSwgeTEsIHowLCB5MSk7XG4gICAgcSh4MCwgeTEsIHoxLCB4MSwgeTEsIHoxLCB4MSwgeTEsIHowLCB4MCwgeTEsIHowLCAneCcsICd6JywgeDAsIHoxLCB4MSwgejEsIHgxLCB6MCwgeDAsIHowKTtcbiAgICBxKHgwLCB5MCwgejAsIHgxLCB5MCwgejAsIHgxLCB5MCwgejEsIHgwLCB5MCwgejEsICd4JywgJ3onLCB4MCwgejAsIHgxLCB6MCwgeDEsIHoxLCB4MCwgejEpO1xuICB9XG5cbiAgLyoqXG4gICAqIE9uZSBjdWxtOiBhbiBvcGVuLWVuZGVkIGN5bGluZGVyIHJ1bm5pbmcgYWxvbmcgWCwgd2l0aCBDVUxNIFVWUyAtLSB1IGFyb3VuZCB0aGUgY2lyY3VtZmVyZW5jZVxuICAgKiBpbiBtZXRyZXMgYW5kIHYgYWxvbmcgdGhlIGxlbmd0aCBpbiBtZXRyZXMsIGJvdGggb3ZlciBgdGlsZWAsIHBsdXMgYSBwZXItY3VsbSAodW8sIHZvKSBwaGFzZS5cbiAgICogVGhhdCBpcyB3aGF0IHB1dHMgdGhlIG5vZGUgcmluZ3MgYXQgcmVhbCBzcGFjaW5nIGFuZCBhdCBhIERJRkZFUkVOVCBwbGFjZSBvbiBldmVyeSBjdWxtOyBhXG4gICAqIHBsYW5hciB1bndyYXAgd291bGQgcmluZyBhbGwgc2l4dHkgYXQgdGhlIHNhbWUgc3RhdGlvbiBhbmQgcmVhZCBhcyBhIHByaW50ZWQgc3RyaXBlLlxuICAgKlxuICAgKiBUaGUgZW5kcyBhcmUgb3BlbiBiZWNhdXNlIGJvdGggYXJlIGJ1cmllZCAxMDAgbW0gaW5zaWRlIHRoZSBwZXJpbWV0ZXIgYmVhbS4gQ2FwcyB3b3VsZCBiZVxuICAgKiA2MCB4IDIwIHRyaWFuZ2xlcyBub2JvZHkgY2FuIHNlZS5cbiAgICovXG4gIGN1bG0oY3k6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCBoYWxmTGVuOiBudW1iZXIsIHNlZzogbnVtYmVyLCByb2xsOiBudW1iZXIsXG4gICAgICAgdGlsZTogbnVtYmVyLCB1bzogbnVtYmVyLCB2bzogbnVtYmVyLCBoZXhBOiBudW1iZXIsIGhleEI6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IGNpcmMgPSAyICogTWF0aC5QSSAqIHI7XG4gICAgY29uc3QgcCA9IChpOiBudW1iZXIsIHg6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgYSA9IHJvbGwgKyAoaSAvIHNlZykgKiBNYXRoLlBJICogMjtcbiAgICAgIHJldHVybiBbeCwgY3kgKyBNYXRoLmNvcyhhKSAqIHIsIGN6ICsgTWF0aC5zaW4oYSkgKiByLFxuICAgICAgICAgICAgICAoaSAvIHNlZykgKiBjaXJjIC8gdGlsZSArIHVvLCB4IC8gdGlsZSArIHZvXSBhcyBjb25zdDtcbiAgICB9O1xuICAgIC8vIFR3byB0b25lcywgb25lIGF0IGVhY2ggZW5kLCBpbnRlcnBvbGF0ZWQgYnkgdGhlIHZlcnRleCBjb2xvdXJzIGFjcm9zcyB0aGUgY3VsbSdzIGxlbmd0aC5cbiAgICAvLyBBIHJlYWwgY3VsbSBpcyBub3Qgb25lIGNvbG91ciBlbmQgdG8gZW5kIC0tIGl0IGlzIHNwbGljZWQsIGFuZCB0aGUgc3VuIHJlYWNoZXMgb25lIGVuZCBvZiBhXG4gICAgLy8gNCBtIHJ1biBtb3JlIHRoYW4gdGhlIG90aGVyLiBJdCBjb3N0cyBubyB0cmlhbmdsZXMgYW5kIGl0IGlzIHdoYXQgc3RvcHMgZm9ydHktZWlnaHQgdGludGVkXG4gICAgLy8gY3lsaW5kZXJzIHJlYWRpbmcgYXMgZm9ydHktZWlnaHQgdGludGVkIGN5bGluZGVycy5cbiAgICBjb25zdCBwdXQgPSAocTogcmVhZG9ubHkgW251bWJlciwgbnVtYmVyLCBudW1iZXIsIG51bWJlciwgbnVtYmVyXSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICAgIHRoaXMudGludChoZXgpO1xuICAgICAgdGhpcy52ZXJ0KHFbMF0sIHFbMV0sIHFbMl0sIHFbM10sIHFbNF0pO1xuICAgIH07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWc7IGkgKz0gMSkge1xuICAgICAgY29uc3QgYTAgPSBwKGksIC1oYWxmTGVuKSwgYTEgPSBwKGkgKyAxLCAtaGFsZkxlbik7XG4gICAgICBjb25zdCBiMCA9IHAoaSwgaGFsZkxlbiksIGIxID0gcChpICsgMSwgaGFsZkxlbik7XG4gICAgICBwdXQoYTAsIGhleEEpOyBwdXQoYjAsIGhleEIpOyBwdXQoYjEsIGhleEIpO1xuICAgICAgcHV0KGEwLCBoZXhBKTsgcHV0KGIxLCBoZXhCKTsgcHV0KGExLCBoZXhBKTtcbiAgICB9XG4gIH1cblxuICBnZW9tZXRyeSgpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHRoaXMucG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodGhpcy51diwgMikpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHRoaXMuY29sLCAzKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICAgIHJldHVybiBnO1xuICB9XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBzdXJmYWNlIGNhbnZhc2VzICovXG5cbi8qKlxuICogQm90aCB0aWxlcyBhcmUgd3JpdHRlbiBpbiBNVUxUSVBMSUVSIFNQQUNFOiB0aGUgYmFzZSBpcyBuZWFyIHdoaXRlIGFuZCBldmVyeXRoaW5nIGRyYXduIG9uIHRoZW1cbiAqIG9ubHkgREFSS0VOUywgc28gdGhlIG1lYXN1cmVkIGFsYmVkbyBsaXZlcyBvbiB0aGUgdmVydGV4IGNvbG91cnMgYW5kIHRoZSBjYW52YXMgY2FycmllcyBub3RoaW5nXG4gKiBidXQgdGhlIHN1cmZhY2UuIEEgdGlsZSB3aG9zZSBtZWFuIGlzIDAuNSB3b3VsZCBoYWx2ZSBldmVyeSB0b25lIHRoZSBwbGF0ZSB3YXMgbWVhc3VyZWQgZm9yLlxuICpcbiAqIGB3aWxsUmVhZEZyZXF1ZW50bHlgIG1hdHRlcnM6IGEgR1BVLWJhY2tlZCBjYW52YXMgY29zdHMgc2Vjb25kcyBwZXIgdGhvdXNhbmQgcGF0aCBmaWxscywgYW5kXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIHJ1bnMgYmVmb3JlIHRoZSBkcmF3ZXIgY2FuIHNob3cgYW55dGhpbmcuXG4gKi9cbmZ1bmN0aW9uIGNhbnZhczJkKHNpemU6IG51bWJlcik6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7ICAgLy8gdGhlIE5vZGUtc2lkZSBnYXRlcyBldmFsdWF0ZSB0aGlzIG1vZHVsZVxuICBjb25zdCBjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gIGMud2lkdGggPSBjLmhlaWdodCA9IHNpemU7XG4gIHJldHVybiBjLmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcbn1cblxuZnVuY3Rpb24gdGV4dHVyZU9mKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbCk6IFRIUkVFLlRleHR1cmUgfCBudWxsIHtcbiAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBjb25zdCB0ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3R4LmNhbnZhcyk7XG4gIHQud3JhcFMgPSB0LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHQuY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0LmFuaXNvdHJvcHkgPSA0O1xuICByZXR1cm4gdDtcbn1cblxuLyoqXG4gKiBUaGUgYmFtYm9vIHRpbGUsIDAuNjAgbSBzcXVhcmUgaW4gY3VsbSB1dnM6IGB1YCBydW5zIEFST1VORCB0aGUgY3VsbSAoc28gdGhlIHRpbGUncyB4IGF4aXMgaXNcbiAqIHRoZSBjaXJjdW1mZXJlbmNlKSBhbmQgYHZgIHJ1bnMgQUxPTkcgaXQuIFRoZXJlZm9yZSB0aGUgZmlicmUgZ3JhaW4gaXMgVkVSVElDQUwgaW4gdGhlIHRpbGUgYW5kXG4gKiB0aGUgbm9kZSByaW5ncyBhcmUgSE9SSVpPTlRBTCBiYW5kcyAtLSB0d28gb2YgdGhlbSBwZXIgdGlsZSwgaS5lLiBvbmUgZXZlcnkgMzAwIG1tLCB3aGljaCBpcyBhXG4gKiByZWFsIGludGVybm9kZSBmb3IgYSA1MyBtbSBjdWxtLlxuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlcik6IFRIUkVFLlRleHR1cmUgfCBudWxsIHtcbiAgY29uc3QgZyA9IGNhbnZhczJkKHNpemUpO1xuICBpZiAoIWcpIHJldHVybiBudWxsO1xuICBjb25zdCBybmQgPSBsY2coMHg1YTE3KTtcbiAgZy5maWxsU3R5bGUgPSAnI2YyZWZlOSc7XG4gIGcuZmlsbFJlY3QoMCwgMCwgc2l6ZSwgc2l6ZSk7XG5cbiAgLy8gVGhlIHN1bi1mYWRlZCBncmV5IGRyaWZ0OiBicm9hZCBzb2Z0IHdhc2hlcywgbm90IGJsb3RjaGVzLiBBIGhhcmQtZWRnZWQgcGF0Y2ggcmVhZHMgYXNcbiAgLy8gY2Ftb3VmbGFnZTsgd2VhdGhlcmluZyBvbiBiYW1ib28gaXMgYSBzbG93IGdyYWRpZW50IGRvd24gdGhlIGN1bG0uXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjY7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIHNpemUsIHkgPSBybmQoKSAqIHNpemUsIHIgPSBzaXplICogKDAuMTAgKyBybmQoKSAqIDAuMjIpO1xuICAgIGNvbnN0IGdyYWQgPSBnLmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgIGNvbnN0IGEgPSAwLjA1ICsgcm5kKCkgKiAwLjA5O1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MiwxNDYsMTM4LCR7YX0pYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUyLDE0NiwxMzgsMCknKTtcbiAgICBnLmZpbGxTdHlsZSA9IGdyYWQ7XG4gICAgZy5maWxsUmVjdCh4IC0gciwgeSAtIHIsIHIgKiAyLCByICogMik7XG4gIH1cblxuICAvLyBMb25naXR1ZGluYWwgZmlicmUgZ3JhaW46IG1hbnkgZmluZSBsaW5lcyBhbG9uZyB2LCB2YXJ5aW5nIGluIGxlbmd0aCwgd2VpZ2h0IGFuZCB2YWx1ZS4gVGhleVxuICAvLyB3cmFwIGluIHUsIHNvIGV2ZXJ5IGxpbmUgaXMgZHJhd24gdHdpY2Ugd2hlcmUgaXQgY3Jvc3NlcyB0aGUgc2VhbS5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAzNDA7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIHNpemU7XG4gICAgY29uc3QgeTAgPSBybmQoKSAqIHNpemUsIGxlbiA9IHNpemUgKiAoMC4yNSArIHJuZCgpICogMC45KTtcbiAgICBnLnN0cm9rZVN0eWxlID0gYHJnYmEoJHsxMjAgKyBybmQoKSAqIDYwIHwgMH0sJHsxMDQgKyBybmQoKSAqIDUyIHwgMH0sJHs4MiArIHJuZCgpICogNDQgfCAwfSwkezAuMDYgKyBybmQoKSAqIDAuMTJ9KWA7XG4gICAgZy5saW5lV2lkdGggPSAwLjYgKyBybmQoKSAqIDEuMztcbiAgICBnLmJlZ2luUGF0aCgpO1xuICAgIGcubW92ZVRvKHgsIHkwKTtcbiAgICBnLmxpbmVUbyh4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkwICsgbGVuKTtcbiAgICBnLnN0cm9rZSgpO1xuICB9XG5cbiAgLy8gVHdvIG5vZGUgcmluZ3MgcGVyIHRpbGUuIEEgbm9kZSBpcyBhIHJhaXNlZCBjb2xsYXI6IGEgZGFya2VyIGJhbmQgd2l0aCBhIGxpZ2h0IHNoZWVuIGp1c3RcbiAgLy8gYWJvdmUgaXQsIGFuZCBhIGZyaW5nZSBvZiBzaG9ydCByb290IHNjYXJzIGJlbG93LlxuICBmb3IgKGNvbnN0IGN5IG9mIFtzaXplICogMC4yNSwgc2l6ZSAqIDAuNzVdKSB7XG4gICAgY29uc3QgaCA9IHNpemUgKiAwLjAyODtcbiAgICBjb25zdCBiYW5kID0gZy5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBjeSAtIGggKiAyLjIsIDAsIGN5ICsgaCAqIDIuMik7XG4gICAgYmFuZC5hZGRDb2xvclN0b3AoMC4wMCwgJ3JnYmEoMTUwLDEyNiw5NiwwKScpO1xuICAgIGJhbmQuYWRkQ29sb3JTdG9wKDAuMzUsICdyZ2JhKDE1MCwxMjYsOTYsMC4zNCknKTtcbiAgICBiYW5kLmFkZENvbG9yU3RvcCgwLjUyLCAncmdiYSgxMTIsOTIsNjYsMC40MCknKTtcbiAgICBiYW5kLmFkZENvbG9yU3RvcCgwLjcwLCAncmdiYSgyMTQsMTk2LDE2NiwwLjIyKScpO1xuICAgIGJhbmQuYWRkQ29sb3JTdG9wKDEuMDAsICdyZ2JhKDE1MCwxMjYsOTYsMCknKTtcbiAgICBnLmZpbGxTdHlsZSA9IGJhbmQ7XG4gICAgZy5maWxsUmVjdCgwLCBjeSAtIGggKiAyLjIsIHNpemUsIGggKiA0LjQpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogc2l6ZTtcbiAgICAgIGcuZmlsbFN0eWxlID0gYHJnYmEoOTYsNzgsNTYsJHswLjA3ICsgcm5kKCkgKiAwLjExfSlgO1xuICAgICAgZy5maWxsUmVjdCh4LCBjeSArIGggKiAoMC42ICsgcm5kKCkgKiAxLjQpLCAxICsgcm5kKCkgKiAyLCAxICsgcm5kKCkgKiAyKTtcbiAgICB9XG4gIH1cblxuICAvLyBTcGFyc2UgYmxlbWlzaGVzOiBzcGxpdCBoYWlybGluZXMgYW5kIHNtYWxsIGRhcmsga25vY2tzIHRoZSBwbGF0ZSBzaG93cyBvbiBldmVyeSB0aGlyZCBjdWxtLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gcm5kKCkgKiBzaXplLCB5ID0gcm5kKCkgKiBzaXplO1xuICAgIGcuc3Ryb2tlU3R5bGUgPSBgcmdiYSg4OCw3Miw1NCwkezAuMTQgKyBybmQoKSAqIDAuMjJ9KWA7XG4gICAgZy5saW5lV2lkdGggPSAwLjcgKyBybmQoKSAqIDAuODtcbiAgICBnLmJlZ2luUGF0aCgpO1xuICAgIGcubW92ZVRvKHgsIHkpO1xuICAgIGcubGluZVRvKHggKyAocm5kKCkgLSAwLjUpICogNCwgeSArIHNpemUgKiAoMC4wMyArIHJuZCgpICogMC4xMikpO1xuICAgIGcuc3Ryb2tlKCk7XG4gIH1cbiAgcmV0dXJuIHRleHR1cmVPZihnKTtcbn1cblxuLyoqXG4gKiBUaGUgdGltYmVyIHRpbGUsIDAuNzUgbSBzcXVhcmUgaW4gd29ybGQtcGxhbmFyIHV2cy4gVGhlIHBsYXRlJ3MgZnJhbWUgaXMgbm90IFwiYnJvd25cIjogaXQgaXNcbiAqIHdlYXRoZXJlZCBzYXduIGhhcmR3b29kIC0tIGdyZXkgd2hlcmUgdGhlIHJhaW4gcnVucywgY29hcnNlIGdyYWluIGFsb25nIHRoZSBtZW1iZXIsIGRlZXBcbiAqIENIRUNLSU5HIFNQTElUUyBkb3duIHRoZSBmYWNlLCBhbmQgcnVzdCBibGVlZGluZyBmcm9tIG9sZCBib2x0cy4gQWxsIGZvdXIgYXJlIGlkZW50aXR5LCBhbmQgYWxsXG4gKiBmb3VyIGFyZSBzdXJmYWNlIHJhdGhlciB0aGFuIGZvcm0sIHdoaWNoIGlzIHdoeSB0aGUgZnJhbWUgc3RheXMgZWlnaHRlZW4gYm94ZXMuXG4gKi9cbmZ1bmN0aW9uIHRpbWJlclRpbGUoc2l6ZTogbnVtYmVyKTogVEhSRUUuVGV4dHVyZSB8IG51bGwge1xuICBjb25zdCBnID0gY2FudmFzMmQoc2l6ZSk7XG4gIGlmICghZykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IHJuZCA9IGxjZygweDljMzEpO1xuICBnLmZpbGxTdHlsZSA9ICcjZjRmMWVjJztcbiAgZy5maWxsUmVjdCgwLCAwLCBzaXplLCBzaXplKTtcblxuICAvLyBXZWF0aGVyZWQgZ3JleSB3YXNoOiB0aGUgZGlyZWN0aW9uIHRoZSB3YXRlciByYW4sIHNvIGl0IGlzIHN0cmVha2VkIHJhdGhlciB0aGFuIG1vdHRsZWQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkgKz0gMSkge1xuICAgIGNvbnN0IHggPSBybmQoKSAqIHNpemUsIHcgPSBzaXplICogKDAuMDQgKyBybmQoKSAqIDAuMTYpO1xuICAgIGNvbnN0IGdyYWQgPSBnLmNyZWF0ZUxpbmVhckdyYWRpZW50KHgsIDAsIHggKyB3LCAwKTtcbiAgICBjb25zdCBhID0gMC4wNSArIHJuZCgpICogMC4xMTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxMzgsMTM4LDEzNCwwKScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoMTM4LDEzOCwxMzQsJHthfSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMzgsMTM4LDEzNCwwKScpO1xuICAgIGcuZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBnLmZpbGxSZWN0KHgsIDAsIHcsIHNpemUpO1xuICB9XG5cbiAgLy8gQ29hcnNlIGdyYWluLCBydW5uaW5nIGFsb25nIHRoZSBtZW1iZXIgKHRoZSB0aWxlJ3MgeCBheGlzIGlzIHRoZSBtZW1iZXIncyBsZW5ndGggb24gZXZlcnlcbiAgLy8gZmFjZSB0aGUgYm94IHVud3JhcCBwcm9kdWNlcyBmb3IgYSBsb25nIG1lbWJlcikuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMjAwOyBpICs9IDEpIHtcbiAgICBjb25zdCB5ID0gcm5kKCkgKiBzaXplO1xuICAgIGcuc3Ryb2tlU3R5bGUgPSBgcmdiYSgkezc0ICsgcm5kKCkgKiA1NiB8IDB9LCR7NjIgKyBybmQoKSAqIDQ2IHwgMH0sJHs0OCArIHJuZCgpICogMzggfCAwfSwkezAuMDcgKyBybmQoKSAqIDAuMTZ9KWA7XG4gICAgZy5saW5lV2lkdGggPSAwLjYgKyBybmQoKSAqIDEuODtcbiAgICBnLmJlZ2luUGF0aCgpO1xuICAgIGcubW92ZVRvKDAsIHkpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDw9IHNpemU7IHggKz0gc2l6ZSAvIDgpIGcubGluZVRvKHgsIHkgKyBNYXRoLnNpbigoeCAvIHNpemUpICogNi4zICsgaSkgKiAxLjYpO1xuICAgIGcuc3Ryb2tlKCk7XG4gIH1cblxuICAvLyBDaGVja2luZyBzcGxpdHM6IGxvbmcsIHRoaW4sIHZlcnkgZGFyaywgYWx3YXlzIGFsb25nIHRoZSBncmFpbiBhbmQgbmV2ZXIgY3Jvc3NpbmcgaXQuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTY7IGkgKz0gMSkge1xuICAgIGNvbnN0IHkgPSBybmQoKSAqIHNpemUsIHgwID0gcm5kKCkgKiBzaXplLCBsZW4gPSBzaXplICogKDAuMTggKyBybmQoKSAqIDAuNTUpO1xuICAgIGcuc3Ryb2tlU3R5bGUgPSBgcmdiYSg0MiwzNCwyNiwkezAuMzAgKyBybmQoKSAqIDAuMzR9KWA7XG4gICAgZy5saW5lV2lkdGggPSAwLjggKyBybmQoKSAqIDEuNjtcbiAgICBnLmJlZ2luUGF0aCgpO1xuICAgIGcubW92ZVRvKHgwLCB5KTtcbiAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSAxLjAwMTsgdCArPSAwLjEyNSkgZy5saW5lVG8oeDAgKyBsZW4gKiB0LCB5ICsgTWF0aC5zaW4odCAqIDcgKyBpKSAqIDEuOSk7XG4gICAgZy5zdHJva2UoKTtcbiAgfVxuXG4gIC8vIE9sZCBib2x0IHN0YWlucyBibGVlZGluZyBydXN0OiBhIGRhcmsgY2VudHJlIHdpdGggYSB3YXJtIHN0cmVhayBydW5uaW5nIGRvd24gRlJPTSBpdC5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpICs9IDEpIHtcbiAgICBjb25zdCB4ID0gc2l6ZSAqICgwLjEgKyBybmQoKSAqIDAuOCksIHkgPSBzaXplICogKDAuMSArIHJuZCgpICogMC43KTtcbiAgICBjb25zdCBncmFkID0gZy5jcmVhdGVMaW5lYXJHcmFkaWVudCh4LCB5LCB4LCB5ICsgc2l6ZSAqIDAuMjIpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDEyMiw3NCw0MCwwLjQyKScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMiw3NCw0MCwwKScpO1xuICAgIGcuZmlsbFN0eWxlID0gZ3JhZDtcbiAgICBnLmZpbGxSZWN0KHggLSBzaXplICogMC4wMiwgeSwgc2l6ZSAqIDAuMDQsIHNpemUgKiAwLjIyKTtcbiAgICBnLmZpbGxTdHlsZSA9ICdyZ2JhKDU4LDQyLDMwLDAuNTUpJztcbiAgICBnLmJlZ2luUGF0aCgpO1xuICAgIGcuYXJjKHgsIHksIHNpemUgKiAwLjAxMiwgMCwgTWF0aC5QSSAqIDIpO1xuICAgIGcuZmlsbCgpO1xuICB9XG4gIHJldHVybiB0ZXh0dXJlT2YoZyk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJhbWJvb1NsYXRQZXJnb2xhTW9kdWxlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdCYW1ib28gU2xhdCBQZXJnb2xhIE1vZHVsZSc7XG5cbiAgY29uc3Qgd2lyZSA9IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlO1xuICBjb25zdCB0aW1iZXJUZXggPSB0aW1iZXJUaWxlKDUxMik7XG4gIGNvbnN0IGJhbWJvb1RleCA9IGJhbWJvb1RpbGUoNTEyKTtcblxuICAvLyBXSElURSBiYXNlIHdpdGggdmVydGV4Q29sb3JzIG9uIEJPVEggbWF0ZXJpYWxzOiB0aGUgdG9uZXMgYXJlIHBlciBtZW1iZXIgYW5kIHBlciBjdWxtLCBhbmQgYVxuICAvLyB0aW50ZWQgYmFzZSB3b3VsZCBzaGlwIGV2ZXJ5IG9uZSBvZiB0aGVtIG11bHRpcGxpZWQgYnkgaXQuXG4gIGNvbnN0IHRpbWJlck1hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmZmZmZmLCB2ZXJ0ZXhDb2xvcnM6IHRydWUsIHdpcmVmcmFtZTogd2lyZSxcbiAgICByb3VnaG5lc3M6IENPTkZJRy5tYXRlcmlhbHMudGltYmVyLnJvdWdobmVzcywgbWV0YWxuZXNzOiBDT05GSUcubWF0ZXJpYWxzLnRpbWJlci5tZXRhbG5lc3MsXG4gIH0pO1xuICB0aW1iZXJNYXQubmFtZSA9IENPTkZJRy5tYXRlcmlhbHMudGltYmVyLmlkO1xuICBpZiAodGltYmVyVGV4KSB0aW1iZXJNYXQubWFwID0gdGltYmVyVGV4O1xuXG4gIGNvbnN0IGJhbWJvb01hdCA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgY29sb3I6IDB4ZmZmZmZmLCB2ZXJ0ZXhDb2xvcnM6IHRydWUsIHdpcmVmcmFtZTogd2lyZSxcbiAgICByb3VnaG5lc3M6IENPTkZJRy5tYXRlcmlhbHMuYmFtYm9vLnJvdWdobmVzcywgbWV0YWxuZXNzOiBDT05GSUcubWF0ZXJpYWxzLmJhbWJvby5tZXRhbG5lc3MsXG4gIH0pO1xuICBiYW1ib29NYXQubmFtZSA9IENPTkZJRy5tYXRlcmlhbHMuYmFtYm9vLmlkO1xuICBpZiAoYmFtYm9vVGV4KSBiYW1ib29NYXQubWFwID0gYmFtYm9vVGV4O1xuXG4gIGNvbnN0IEggPSBDT05GSUcuaGFsZiwgUCA9IENPTkZJRy5wb3N0LCBCID0gQ09ORklHLmJlYW0sIFIgPSBDT05GSUcucmFpbDtcbiAgY29uc3QgVCA9IENPTkZJRy50aW1iZXIsIEsgPSBDT05GSUcuY3VsbTtcbiAgY29uc3QgcyA9IG5ldyBTb3VwKCk7XG5cbiAgLy8gRm91ciBjb3JuZXIgcG9zdHMuIFRoZWlyIG91dGVyIGZhY2VzIGFyZSBPTiArLTIuMDAwIC0tIHRoZSBjZWxsIGVkZ2UgaXMgdGhlIFBPU1QncywgYW5kIHRoZVxuICAvLyBiZWFtIGFuZCByYWlsIHN0ZXAgYmFjayBiZWhpbmQgaXQsIHNvIHR3byBidXR0ZWQgYmF5cyBwYWlyIHBvc3QgdG8gcG9zdC5cbiAgcy50aW50KFQucG9zdCk7XG4gIGZvciAoY29uc3Qgc3ggb2YgWy0xLCAxXSkgZm9yIChjb25zdCBzeiBvZiBbLTEsIDFdKSB7XG4gICAgY29uc3QgeDAgPSBzeCA+IDAgPyBIIC0gUC5zIDogLUgsIHgxID0gc3ggPiAwID8gSCA6IC1IICsgUC5zO1xuICAgIGNvbnN0IHowID0gc3ogPiAwID8gSCAtIFAucyA6IC1ILCB6MSA9IHN6ID4gMCA/IEggOiAtSCArIFAucztcbiAgICBzLmJveCh4MCwgMCwgejAsIHgxLCBQLnRvcCwgejEsIFQudGlsZU0sICd5JywgKHN4ICsgc3ogKiAyICsgMykgKiAwLjMxLCAoc3ggLSBzeikgKiAwLjIzKTtcbiAgfVxuXG4gIC8vIFRoZSBwZXJpbWV0ZXIgYmVhbTogZm91ciBtZW1iZXJzLCBvdXRlciBmYWNlcyBhdCArLTEuOTkwLCBtaXRyZWQgYXQgdGhlIGNvcm5lcnMgYnkgcnVubmluZyB0aGVcbiAgLy8gKy1aIHBhaXIgdGhlIGZ1bGwgd2lkdGggYW5kIGJ1dHRpbmcgdGhlICstWCBwYWlyIGFnYWluc3QgdGhlbS4gQnV0dCBqb2ludHMgb2YgT1BQT1NFRCBmYWNlc1xuICAvLyBhcmUgaG93IHNvbGlkcyBhcmUgbWVhbnQgdG8gbWVldDsgbm90aGluZyBoZXJlIGlzIGZsdXNoIGFuZCBjby1mYWNpbmcuXG4gIHMudGludChULmJlYW0pO1xuICBjb25zdCBiaSA9IEIub3V0IC0gQi50aGljaztcbiAgZm9yIChjb25zdCBzeiBvZiBbLTEsIDFdKSB7XG4gICAgY29uc3QgejAgPSBzeiA+IDAgPyBiaSA6IC1CLm91dCwgejEgPSBzeiA+IDAgPyBCLm91dCA6IC1iaTtcbiAgICBzLmJveCgtQi5vdXQsIEIuYm90LCB6MCwgQi5vdXQsIEIudG9wLCB6MSwgVC50aWxlTSwgJ3gnLCBzeiA+IDAgPyAwLjAwIDogMC40Nywgc3ogPiAwID8gMC4xMyA6IDAuNjEpO1xuICB9XG4gIGZvciAoY29uc3Qgc3ggb2YgWy0xLCAxXSkge1xuICAgIGNvbnN0IHgwID0gc3ggPiAwID8gYmkgOiAtQi5vdXQsIHgxID0gc3ggPiAwID8gQi5vdXQgOiAtYmk7XG4gICAgcy5ib3goeDAsIEIuYm90LCAtYmksIHgxLCBCLnRvcCwgYmksIFQudGlsZU0sICd6Jywgc3ggPiAwID8gMC4xOSA6IDAuNzEsIHN4ID4gMCA/IDAuMzcgOiAwLjA1KTtcbiAgfVxuXG4gIC8vIFRoZSBjYXAgcmFpbCwgNSBtbSBiZWhpbmQgdGhlIHBvc3QgZmFjZSBhbmQgNSBtbSBwcm91ZCBvZiB0aGUgYmVhbSwgcmVhY2hpbmcgNjUgbW0gaW5ib2FyZCBvZlxuICAvLyBpdCBzbyBpdCBMQVBTIHRoZSBjdWxtIHRvcHMgYnkgMTAgbW0uIFRoZSBsYXAgaXMgd2hhdCBjbG9zZXMgdGhlIHNsb3QgdGhlIGZpcnN0IGJ1aWxkIGxlZnRcbiAgLy8gb3BlbiBhbG9uZyB0aGUgd2hvbGUgYmF5IGFib3ZlIHRoZSBvdXRlcm1vc3QgY3VsbS5cbiAgcy50aW50KFQucmFpbCk7XG4gIGNvbnN0IHJpID0gUi5vdXQgLSBSLnRoaWNrO1xuICBmb3IgKGNvbnN0IHN6IG9mIFstMSwgMV0pIHtcbiAgICBjb25zdCB6MCA9IHN6ID4gMCA/IHJpIDogLVIub3V0LCB6MSA9IHN6ID4gMCA/IFIub3V0IDogLXJpO1xuICAgIHMuYm94KC1SLm91dCwgUi5ib3QsIHowLCBSLm91dCwgUi50b3AsIHoxLCBULnRpbGVNLCAneCcsIHN6ID4gMCA/IDAuMTEgOiAwLjYzLCBzeiA+IDAgPyAwLjI5IDogMC43Nyk7XG4gIH1cbiAgZm9yIChjb25zdCBzeCBvZiBbLTEsIDFdKSB7XG4gICAgY29uc3QgeDAgPSBzeCA+IDAgPyByaSA6IC1SLm91dCwgeDEgPSBzeCA+IDAgPyBSLm91dCA6IC1yaTtcbiAgICBzLmJveCh4MCwgUi5ib3QsIC1yaSwgeDEsIFIudG9wLCByaSwgVC50aWxlTSwgJ3onLCBzeCA+IDAgPyAwLjI5IDogMC44Mywgc3ggPiAwID8gMC41NSA6IDAuMTkpO1xuICB9XG5cbiAgLy8gVHdvIHB1cmxpbnMgYWxvbmcgWiB1bmRlciB0aGUgY3VsbXMuIEEgcGVyZ29sYSBpcyB3YWxrZWQgVU5ERVIsIHNvIHdoYXQgY2FycmllcyB0aGUgZGVjayBpc1xuICAvLyBzZWVuIGZyb20gYmVsb3cgYXQgZXZlcnkgYXppbXV0aCBhbmQgZnJvbSBldmVyeSBzZWF0IGluIHRoZSBzaGFkZSBiZW5lYXRoIGl0LlxuICBzLnRpbnQoVC5iZWFtKTtcbiAgY29uc3QgUFUgPSBDT05GSUcucHVybGluO1xuICBmb3IgKGNvbnN0IHN4IG9mIFstMSwgMV0pIHtcbiAgICBzLmJveChzeCAqIFBVLnggLSBQVS53IC8gMiwgUFUuYm90LCAtSy5zcGFuLCBzeCAqIFBVLnggKyBQVS53IC8gMiwgSy55IC0gSy5yLCBLLnNwYW4sIFQudGlsZU0sXG4gICAgICAgICAgJ3onLCBzeCA+IDAgPyAwLjM3IDogMC41Mywgc3ggPiAwID8gMC43MSA6IDAuNDEpO1xuICB9XG5cbiAgLy8gQSBjbGVhdCBvbiB0aGUgdHdvIElOTkVSIGZhY2VzIG9mIGV2ZXJ5IHBvc3QgaGVhZDogdGhlIGJyYWNrZXQgdGhhdCB0aWVzIHRoZSBwb3N0IHRvIHRoZSBiZWFtLlxuICAvLyBJbm5lciwgYmVjYXVzZSBub3RoaW5nIG1heSBjcm9zcyB0aGUgY2VsbCBlZGdlIGFuZCBhIGJyYWNrZXQgb24gdGhlIG91dHNpZGUgd291bGQuXG4gIHMudGludChULnJhaWwpO1xuICBjb25zdCBDTCA9IENPTkZJRy5jbGVhdDtcbiAgZm9yIChjb25zdCBzeCBvZiBbLTEsIDFdKSBmb3IgKGNvbnN0IHN6IG9mIFstMSwgMV0pIHtcbiAgICBjb25zdCBweCA9IHN4ICogKEggLSBQLnMgLyAyKSwgcHogPSBzeiAqIChIIC0gUC5zIC8gMik7XG4gICAgY29uc3QgaW54ID0gcHggLSBzeCAqIChQLnMgLyAyICsgQ0wudCAvIDIpLCBpbnogPSBweiAtIHN6ICogKFAucyAvIDIgKyBDTC50IC8gMik7XG4gICAgcy5ib3goaW54IC0gQ0wudCAvIDIsIFAudG9wIC0gQ0wuaCwgcHogLSBDTC53IC8gMiwgaW54ICsgQ0wudCAvIDIsIFAudG9wLCBweiArIENMLncgLyAyLCBULnRpbGVNLFxuICAgICAgICAgICd5JywgMC4wNyArIHN4ICogMC4xMywgMC4zMSArIHN6ICogMC4xNyk7XG4gICAgcy5ib3gocHggLSBDTC53IC8gMiwgUC50b3AgLSBDTC5oLCBpbnogLSBDTC50IC8gMiwgcHggKyBDTC53IC8gMiwgUC50b3AsIGlueiArIENMLnQgLyAyLCBULnRpbGVNLFxuICAgICAgICAgICd5JywgMC40MSArIHN6ICogMC4xMSwgMC42NyArIHN4ICogMC4yMSk7XG4gIH1cblxuICBjb25zdCBmcmFtZSA9IG5ldyBUSFJFRS5NZXNoKHMuZ2VvbWV0cnkoKSwgdGltYmVyTWF0KTtcbiAgZnJhbWUubmFtZSA9ICdQb3N0cywgcGVyaW1ldGVyIGJlYW0sIGNhcCByYWlsLCBwdXJsaW5zIGFuZCBjbGVhdHMnO1xuICBmcmFtZS5jYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGZyYW1lLnJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcbiAgcm9vdC5hZGQoZnJhbWUpO1xuXG4gIC8vIFRoZSByb29mOiBzaXh0eSBjdWxtcyBNRVJHRUQgaW50byBvbmUgZ2VvbWV0cnksIHNvIGVhY2ggb25lIGNhcnJpZXMgaXRzIG93biB1diBwaGFzZSwgdG9uZSxcbiAgLy8gcmFkaXVzLCByb2xsIGFuZCBoZWlnaHQuIE9uZSBkcmF3IGNhbGwgYW5kIG9uZSB1bmlxdWUgZ2VvbWV0cnksIHNhbWUgYXMgYW4gSW5zdGFuY2VkTWVzaCwgYW5kXG4gIC8vIG5vbmUgb2YgdGhlIGluc3RhbmNlZCB2ZXJzaW9uJ3MgaWRlbnRpY2FsLWN5bGluZGVyIHN0cmlwZS5cbiAgY29uc3QgcmMgPSBuZXcgU291cCgpO1xuICBjb25zdCBybmQgPSBsY2coMHgxZjMxKTtcbiAgY29uc3QgcGl0Y2ggPSAoSy5zcGFuICogMikgLyBLLmNvdW50O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEsuY291bnQ7IGkgKz0gMSkge1xuICAgIGNvbnN0IHogPSAtSy5zcGFuICsgcGl0Y2ggKiAoaSArIDAuNSk7XG4gICAgY29uc3QgciA9IEsuciAqICgwLjk0ICsgcm5kKCkgKiAwLjEyKTtcbiAgICBjb25zdCB5ID0gSy55ICsgKHJuZCgpIC0gMC41KSAqIDAuMDAzO1xuICAgIGNvbnN0IGEgPSBLLnRvbmVzWyhpICogMyArIChpICUgNykpICUgSy50b25lcy5sZW5ndGhdO1xuICAgIGNvbnN0IGIgPSBLLnRvbmVzWyhpICogNSArIDMpICUgSy50b25lcy5sZW5ndGhdO1xuICAgIHJjLmN1bG0oeSwgeiwgciwgSy5zcGFuLCBLLnNlZywgcm5kKCkgKiBNYXRoLlBJICogMiwgSy50aWxlTSwgcm5kKCksIHJuZCgpICogNCwgYSwgYik7XG4gIH1cbiAgY29uc3Qgcm9vZiA9IG5ldyBUSFJFRS5NZXNoKHJjLmdlb21ldHJ5KCksIGJhbWJvb01hdCk7XG4gIHJvb2YubmFtZSA9ICdGb3J0eS1laWdodCBzcGFjZWQgYmFtYm9vIGN1bG1zJztcbiAgcm9vZi5jYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIHJvb2YucmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuICByb290LmFkZChyb29mKTtcblxuICAvLyBUaGUga2V5cyBBUkUgdGhlIHNwZWMncyBjb21wb25lbnQgaWRzIC0tIGNoZWNrX3BhcnRfY292ZXJhZ2UgbWF0Y2hlcyBvbiB0aGVtLCBhbmQgYSBydW50aW1lXG4gIC8vIG5vZGUgY2FsbGVkIGBjdWxtc2AgYWdhaW5zdCBhIGNvbXBvbmVudCBjYWxsZWQgYHJvb2ZgIGlzIGEgcGFydCB0aGUgc3BlYyBjYW5ub3QgYWNjb3VudCBmb3IuXG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7IHJvb3QsIGZyYW1lLCByb29mIH07XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7XG4gICAgZnJhbWU6IHsgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDEuMywgMF0sIHNpemU6IFs0LjAsIDIuNiwgNC4wXSwgYXhpczogWzAsIDEsIDBdLFxuICAgICAgbm90ZXM6ICdBdXRob3JpbmcgaW50ZW50IG9ubHk7IHRoYWlraXQgZGVyaXZlcyB0aGUgc2hpcHBlZCBjb21wb3VuZCBmcm9tIHRoZSBidWlsdCBnZW9tZXRyeS4gQSBwZXJnb2xhIGlzIHdhbGtlZCBVTkRFUiwgc28gdGhlIGRlcml2ZWQgY29tcG91bmQgbWF0dGVycyBtb3JlIGhlcmUgdGhhbiBvbiBhIHNvbGlkIHByb3AuJyB9LFxuICB9O1xuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgbm9kZXMsIG1lc2hlczogeyBmcmFtZSwgcm9vZiB9LCBzb2NrZXRzOiB7fSwgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3Vwczoge30sXG4gIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZUJhbWJvb1NsYXRQZXJnb2xhTW9kdWxlTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICYmIHR5cGVvZiBzcGVjID09PSAnb2JqZWN0Jykgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gT05FIHJvb3QgcGl2b3QgYW5kIE5PIHNvY2tldHMuIEEgcGVyZ29sYSBoYXMgbm8gbW92aW5nIHBhcnRzIGF0IGFsbCwgc28gdGhpcyBpcyB0aGVcbiAgICAvLyBjb21wbGV0ZSBtZWNoYW5pc20gaW52ZW50b3J5IC0tIHRoZSBjb3JyZWN0IGFuc3dlciwgbm90IGEgZ2FwLlxuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzOiBbcm9vdFBpdm90XSwgc29ja2V0czogW10sIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHM6IFtdLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUE0Q3ZCLElBQU0sT0FBTztBQUViLElBQU0sU0FBUztBQUFBLEVBQ2IsTUFBTTtBQUFBO0FBQUEsRUFFTixNQUFNLEVBQUUsR0FBRyxNQUFNLEtBQUssS0FBTTtBQUFBO0FBQUEsRUFFNUIsTUFBTSxFQUFFLEtBQUssTUFBTyxPQUFPLE1BQU8sS0FBSyxNQUFPLEtBQUssTUFBTTtBQUFBO0FBQUEsRUFFekQsTUFBTSxFQUFFLEtBQUssT0FBTyxPQUFPLE9BQU8sS0FBSyxPQUFPLEtBQUssSUFBTTtBQUFBO0FBQUEsRUFFekQsUUFBUSxFQUFFLEdBQUcsTUFBTSxHQUFHLE1BQU8sS0FBSyxJQUFNO0FBQUE7QUFBQSxFQUV4QyxPQUFPLEVBQUUsR0FBRyxPQUFPLEdBQUcsTUFBTyxHQUFHLE1BQU07QUFBQSxFQUN0QyxNQUFNO0FBQUEsSUFDSixPQUFPO0FBQUEsSUFBSSxLQUFLO0FBQUEsSUFDaEIsR0FBRztBQUFBO0FBQUEsSUFDSCxHQUFHO0FBQUE7QUFBQSxJQUNILE1BQU07QUFBQTtBQUFBLElBQ04sT0FBTztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBU1AsT0FBTyxDQUFDLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFFBQVE7QUFBQSxFQUM5RTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBYUEsUUFBUSxFQUFFLE1BQU0sU0FBVSxNQUFNLFNBQVUsTUFBTSxTQUFVLE9B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
