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

// assets/concrete-walk-up-flat-block/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createConcreteWalkUpFlatBlockModel: () => createConcreteWalkUpFlatBlockModel,
  createModel: () => createModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "concrete-walk-up-flat-block",
  "name": "Concrete Walk-Up Flat Block",
  "exportName": "ConcreteWalkUpFlatBlock",
  "envelope": "Envelope 26.50 x 17.50 x 10.50 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "concrete",
      "color": 10788759,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "ochre",
      "color": 11572840,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "roof",
      "color": 10262673,
      "roughness": 0.85,
      "metalness": 0.05
    },
    {
      "id": "door",
      "color": 7232068,
      "roughness": 0.75,
      "metalness": 0
    },
    {
      "id": "louvre",
      "color": 11117976,
      "roughness": 0.5,
      "metalness": 0.1
    },
    {
      "id": "breeze",
      "color": 10328723,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "stair",
      "color": 14077888,
      "roughness": 0.9,
      "metalness": 0
    },
    {
      "id": "foliage",
      "color": 5795904,
      "roughness": 0.8,
      "metalness": 0,
      "vertexColors": true,
      "doubleSided": true
    },
    {
      "id": "cloth",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true,
      "doubleSided": true
    }
  ],
  "geometry": {
    "hx": 13.25,
    "hz": 5.25,
    "innerX": 9.95,
    "towerTop": 16,
    "plinthY": 0.2,
    "pitch": 2.6333,
    "floors": [
      0.2,
      2.8333,
      5.4666,
      8.0999,
      10.7332,
      13.3665
    ],
    "bays": [
      -8.5287,
      -5.6858,
      -2.8429,
      0,
      2.8429,
      5.6858,
      8.5287
    ],
    "backZ": 0.95,
    "wallT": 0.15,
    "spandrelZ": 2.45,
    "spandrelT": 0.15,
    "spandrelH": 0.98,
    "copingT": 0.06,
    "copingD": 0.19,
    "slabT": 0.15,
    "backTint": 0.4,
    "reliefT": 0.05,
    "slot": {
      "z0": 2.6,
      "z1": 4.8,
      "y0": 0.5,
      "y1": 15.4,
      "xInner": 10.85
    },
    "stair": {
      "w": 1.08,
      "t": 0.6,
      "inset": 0.12,
      "margin": 0.05,
      "floors": 5
    },
    "landing": {
      "d": 0.9,
      "y0": -0.2,
      "y1": 0.45
    },
    "roof": {
      "xEnd": 12.95,
      "deckTop": 16.15,
      "parapetTop": 16.7,
      "parapetT": 0.35,
      "ridgeZ": -1.4,
      "gableTop": 17.5,
      "eaveY": 16.35,
      "ridgeY": 17.3,
      "sheetT": 0.1,
      "gutter": 0.35,
      "tileM": 3.2
    },
    "tileM": 5.2666,
    "door": {
      "w": 0.9,
      "h": 2.05,
      "dx": -0.75
    },
    "win": {
      "w": 1,
      "h": 0.6,
      "dx": 0.65,
      "y": 1.55
    },
    "rearWin": {
      "w": 1,
      "h": 0.6,
      "dx": [
        -0.8,
        0.8
      ],
      "y": 1.6
    },
    "breeze": {
      "w": 2.5,
      "h": 1.75,
      "t": 0.04,
      "x": 11.6,
      "y": 1.175
    },
    "plants": [
      [
        4,
        0
      ],
      [
        5,
        1
      ],
      [
        3,
        2
      ],
      [
        5,
        3
      ]
    ],
    "laundry": [
      [
        2,
        3
      ],
      [
        4,
        1
      ]
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
  const anyColor = parts.some((g) => !!g.getAttribute("color"));
  const color = anyColor ? new Float32Array(total * 3).fill(1) : null;
  let v = 0;
  for (const g of parts) {
    const p = g.getAttribute("position"), n = g.getAttribute("normal"), t = g.getAttribute("uv");
    const c = g.getAttribute("color");
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
      if (color && c) {
        color[(v + i) * 3] = c.getX(i);
        color[(v + i) * 3 + 1] = c.getY(i);
        color[(v + i) * 3 + 2] = c.getZ(i);
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
  if (color) out.setAttribute("color", new THREE.BufferAttribute(color, 3));
  out.computeBoundingBox();
  out.computeBoundingSphere();
  return out;
}
function boxAt(cx, cy, cz, w, h, d) {
  const g = new THREE.BoxGeometry(w, h, d);
  g.translate(cx, cy, cz);
  return g;
}
function buildMaterials(options) {
  const map = {};
  for (const s of CONFIG.materials) {
    const m = new THREE.MeshStandardMaterial({
      color: new THREE.Color(s.color),
      roughness: s.roughness,
      metalness: s.metalness,
      wireframe: options.wireframe ?? false,
      side: s.doubleSided ? THREE.DoubleSide : THREE.FrontSide,
      vertexColors: s.vertexColors === true
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
function createConcreteWalkUpFlatBlockModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Concrete Walk-Up Flat Block";
  const materials = buildMaterials(options);
  const nodes = {};
  const meshes = {};
  const sockets = {};
  const colliders = {};
  const destructionGroups = {};
  const castShadow = options.castShadow ?? true;
  const receiveShadow = options.receiveShadow ?? true;
  function guardVertexColors(geo, mat) {
    if (!mat || !mat.vertexColors || geo.getAttribute("color")) return;
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(1), 3));
  }
  function add(id, name, geo, matId) {
    const node = new THREE.Group();
    node.name = name + "__node";
    guardVertexColors(geo, materials[matId]);
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
    guardVertexColors(geo, materials[matId]);
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
  function quad(radius, y, phase = 0) {
    return [0, 1, 2, 3].map((i) => {
      const a = phase + i * Math.PI / 2;
      return new THREE.Matrix4().compose(
        new THREE.Vector3(Math.sin(a) * radius, y, Math.cos(a) * radius),
        new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), a),
        new THREE.Vector3(1, 1, 1)
      );
    });
  }
  const G = CONFIG.geometry;
  const F = G.floors, BX = G.bays;
  const hx = G.hx, hz = G.hz, ix = G.innerX;
  const yT = G.towerTop, zS = G.spandrelZ, zB = G.backZ;
  const S = G.slot, R = G.roof;
  const inBrowser = typeof document !== "undefined";
  const span = (x0, x1, y0, y1, z0, z1) => boxAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0);
  const planarUV = (geo, tile) => {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u, v;
      if (ay >= ax && ay >= az) {
        u = p.getX(i);
        v = p.getZ(i);
      } else if (ax >= az) {
        u = p.getZ(i);
        v = p.getY(i);
      } else {
        u = p.getX(i);
        v = p.getY(i);
      }
      uv[i * 2] = u / tile;
      uv[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  };
  const tintGeo = (geo, t) => {
    const c = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(c * 3).fill(t), 3));
    return geo;
  };
  const yzExtrude = (pts, x0, t) => {
    const sh = new THREE.Shape();
    sh.moveTo(-pts[0][0], pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(-pts[i][0], pts[i][1]);
    sh.closePath();
    const g = new THREE.ExtrudeGeometry(sh, { depth: t, bevelEnabled: false, curveSegments: 1 });
    g.rotateY(Math.PI / 2);
    g.translate(x0, 0, 0);
    g.computeVertexNormals();
    return g;
  };
  const facedBox = (w, h, d) => {
    const g = new THREE.BoxGeometry(w, h, d);
    const uv = g.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.02, 0.02);
    return g;
  };
  const at = (x, y, z, yaw = 0) => new THREE.Matrix4().compose(
    new THREE.Vector3(x, y, z),
    new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), yaw),
    new THREE.Vector3(1, 1, 1)
  );
  let seed = 90210;
  const rnd = () => {
    seed = seed * 1664525 + 1013904223 >>> 0;
    return seed / 4294967296;
  };
  const canvas = (w, h) => {
    const c = document.createElement("canvas");
    c.width = w;
    c.height = h;
    return [c, c.getContext("2d", { willReadFrequently: true })];
  };
  const bind = (matId, c, bump = 0) => {
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.anisotropy = options.textureAnisotropy ?? 4;
    const m = materials[matId];
    m.map = tex;
    if (bump > 0) {
      m.bumpMap = tex;
      m.bumpScale = bump;
    }
    m.needsUpdate = true;
  };
  {
    const parts = [];
    parts.push(span(-hx - 0.1, hx + 0.1, 0, G.plinthY, -hz - 0.1, hz + 0.1));
    parts.push(span(-ix, ix, G.plinthY, yT, -hz, zB - G.wallT));
    for (const s of [-1, 1]) {
      const X = (a, b) => [Math.min(a, b), Math.max(a, b)];
      const xo = s * hx, xi = s * ix, xc = s * S.xInner;
      let r = X(xi, xo);
      parts.push(span(r[0], r[1], G.plinthY, yT, S.z1, hz));
      parts.push(span(r[0], r[1], G.plinthY, yT, -hz, S.z0));
      r = X(xi, xc);
      parts.push(span(r[0], r[1], G.plinthY, yT, S.z0, S.z1));
      r = X(xc, xo);
      parts.push(span(r[0], r[1], S.y1, yT, S.z0, S.z1));
      parts.push(span(r[0], r[1], G.plinthY, S.y0, S.z0, S.z1));
    }
    for (let k = 1; k < F.length; k++) parts.push(span(-ix, ix, F[k] - G.slabT, F[k], zB, zS));
    for (const yk of F) parts.push(span(-ix, ix, yk + G.spandrelH, yk + G.spandrelH + G.copingT, zS - G.copingD, zS + 0.03));
    parts.push(span(-R.xEnd, R.xEnd, yT, R.deckTop, -hz, zS));
    parts.push(span(-R.xEnd, R.xEnd, R.deckTop, R.parapetTop, zS - R.parapetT, zS));
    parts.push(span(-R.xEnd, R.xEnd, R.deckTop, R.parapetTop, -hz, -hz + R.parapetT));
    const gable = [[-hz, yT], [zS, yT], [zS, R.parapetTop], [R.ridgeZ, R.gableTop], [-hz, R.parapetTop]];
    parts.push(yzExtrude(gable, R.xEnd, hx - R.xEnd));
    parts.push(yzExtrude(gable, -hx, hx - R.xEnd));
    const shell = mergeGeos(parts);
    planarUV(shell, G.tileM);
    add("shell", "Concrete shell", shell, "concrete");
    colliders["shell"] = {
      shape: "box",
      localCenter: [0, 8.75, 0],
      halfExtents: [13.35, 8.75, 5.35],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope.'
    };
    if (inBrowser) {
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 120; i++) {
        const x = rnd() * 512, y = rnd() * 512, r = 40 + rnd() * 90;
        const g = ctx.createRadialGradient(x, y, 0, x, y, r);
        g.addColorStop(0, "rgba(40, 40, 36, " + (0.02 + rnd() * 0.04).toFixed(3) + ")");
        g.addColorStop(1, "rgba(40, 40, 36, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      const rows = [236, 493];
      for (const y0 of rows) for (let i = 0; i < 40; i++) {
        const x = rnd() * 512, w = 2 + rnd() * 10, len = 60 + rnd() * 230, a = 0.04 + rnd() * 0.1;
        const g = ctx.createLinearGradient(0, y0, 0, y0 + len);
        g.addColorStop(0, "rgba(30, 30, 28, " + a.toFixed(3) + ")");
        g.addColorStop(1, "rgba(30, 30, 28, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(x, y0, w, len);
        if (x + w > 512) ctx.fillRect(x - 512, y0, w, len);
      }
      ctx.fillStyle = "rgba(25, 25, 22, 0.38)";
      for (const y0 of rows) ctx.fillRect(0, y0 - 1, 512, 3);
      ctx.fillRect(0, 0, 3, 512);
      ctx.fillStyle = "rgba(80, 90, 60, 0.10)";
      for (let i = 0; i < 40; i++) {
        const x = rnd() * 512, y = rnd() * 512;
        ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 4);
      }
      bind("concrete", c);
    }
  }
  {
    const parts = [];
    parts.push(tintGeo(span(-ix, ix, G.plinthY, yT, zB - G.wallT, zB), G.backTint));
    for (const yk of F) parts.push(tintGeo(span(-ix, ix, yk, yk + G.spandrelH, zS - G.spandrelT, zS), 1));
    const g = mergeGeos(parts);
    const p = g.getAttribute("position");
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      const u0 = (x + ix) / (2 * ix);
      if (z < zB + 1e-3) {
        uv[i * 2] = u0;
        uv[i * 2 + 1] = 0.02 + 0.44 * (y - G.plinthY) / (yT - G.plinthY);
      } else {
        let k = 0;
        for (let j = 0; j < F.length; j++) if (y >= F[j] - 0.01) k = j;
        uv[i * 2] = u0 + k * 0.137;
        uv[i * 2 + 1] = 0.52 + 0.46 * Math.min(1, Math.max(0, (y - F[k]) / G.spandrelH));
      }
    }
    g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    add("corridor", "Corridor spandrels and back wall", g, "ochre");
    if (inBrowser) {
      const [c, ctx] = canvas(1024, 256);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1024, 256);
      const gt = ctx.createLinearGradient(0, 0, 0, 40);
      gt.addColorStop(0, "rgba(35, 32, 22, 0.30)");
      gt.addColorStop(1, "rgba(35, 32, 22, 0)");
      ctx.fillStyle = gt;
      ctx.fillRect(0, 0, 1024, 40);
      for (let i = 0; i < 34; i++) {
        const x = rnd() * 1024, y = rnd() < 0.6 ? rnd() * 30 : 84 + rnd() * 44, rx = 30 + rnd() * 90, ry = 10 + rnd() * 26;
        const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
        gg.addColorStop(0, "rgba(35, 32, 22, " + (0.1 + rnd() * 0.22).toFixed(3) + ")");
        gg.addColorStop(1, "rgba(35, 32, 22, 0)");
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(rx, ry);
        ctx.fillStyle = gg;
        ctx.fillRect(-1, -1, 2, 2);
        ctx.restore();
      }
      for (let i = 0; i < 22; i++) {
        const x = rnd() * 1024, w = 3 + rnd() * 7, len = 30 + rnd() * 90, a = 0.25 + rnd() * 0.45;
        const gg = ctx.createLinearGradient(0, 6, 0, 6 + len);
        gg.addColorStop(0, "rgba(150, 62, 18, " + a.toFixed(3) + ")");
        gg.addColorStop(1, "rgba(150, 62, 18, 0)");
        ctx.fillStyle = gg;
        ctx.fillRect(x, 6, w, len);
      }
      for (let i = 0; i < 60; i++) {
        const x = rnd() * 1024, y = rnd() * 128, r = 6 + rnd() * 22;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, "rgba(60, 55, 40, " + (0.05 + rnd() * 0.12).toFixed(3) + ")");
        gg.addColorStop(1, "rgba(60, 55, 40, 0)");
        ctx.fillStyle = gg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      const gs = ctx.createLinearGradient(0, 128, 0, 256);
      gs.addColorStop(0, "rgba(20, 18, 12, 0.0)");
      gs.addColorStop(1, "rgba(20, 18, 12, 0.10)");
      ctx.fillStyle = gs;
      ctx.fillRect(0, 128, 1024, 128);
      for (let i = 0; i < 120; i++) {
        const x = rnd() * 1024, y = 128 + rnd() * 128, r = 6 + rnd() * 24;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, "rgba(40, 36, 26, " + (0.04 + rnd() * 0.1).toFixed(3) + ")");
        gg.addColorStop(1, "rgba(40, 36, 26, 0)");
        ctx.fillStyle = gg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      bind("ochre", c);
    }
  }
  {
    const prof = [
      [-hz + R.gutter, R.eaveY],
      [R.ridgeZ, R.ridgeY],
      [zS - R.gutter, R.eaveY],
      [zS - R.gutter, R.eaveY - R.sheetT],
      [R.ridgeZ, R.ridgeY - R.sheetT],
      [-hz + R.gutter, R.eaveY - R.sheetT]
    ];
    const g = yzExtrude(prof, -R.xEnd, 2 * R.xEnd);
    planarUV(g, R.tileM);
    add("roof", "Corrugated roof sheet", g, "roof");
    if (inBrowser) {
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 512, 512);
      for (let i = 0; i < 32; i++) {
        const x = i * 16;
        const gg = ctx.createLinearGradient(x, 0, x + 16, 0);
        gg.addColorStop(0, "rgba(30, 30, 28, 0.62)");
        gg.addColorStop(0.3, "rgba(30, 30, 28, 0.0)");
        gg.addColorStop(0.6, "rgba(30, 30, 28, 0.10)");
        gg.addColorStop(1, "rgba(30, 30, 28, 0.62)");
        ctx.fillStyle = gg;
        ctx.fillRect(x, 0, 16, 512);
      }
      for (let i = 0; i < 3; i++) {
        const x = rnd() * 512, y = rnd() * 512, rx = 30 + rnd() * 60, ry = 60 + rnd() * 160;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, 1);
        gg.addColorStop(0, "rgba(150, 70, 30, 0.75)");
        gg.addColorStop(0.6, "rgba(150, 70, 30, 0.45)");
        gg.addColorStop(1, "rgba(150, 70, 30, 0)");
        ctx.save();
        ctx.translate(x, y);
        ctx.scale(rx, ry);
        ctx.fillStyle = gg;
        ctx.fillRect(-1, -1, 2, 2);
        ctx.restore();
      }
      for (let i = 0; i < 400; i++) {
        const x = rnd() * 512, y = rnd() * 512;
        ctx.fillStyle = rnd() < 0.7 ? "rgba(40, 40, 36, " + (0.08 + rnd() * 0.2).toFixed(2) + ")" : "rgba(90, 105, 55, " + (0.15 + rnd() * 0.25).toFixed(2) + ")";
        ctx.fillRect(x, y, 2 + rnd() * 5, 2 + rnd() * 10);
      }
      bind("roof", c, 0.02);
    }
  }
  const doorMats = [], winMats = [];
  for (const yk of F) for (const bx of BX) {
    doorMats.push(at(bx + G.door.dx, yk + 0.02 + G.door.h / 2, zB + G.reliefT / 2));
    winMats.push(at(bx + G.win.dx, yk + G.win.y, zB + G.reliefT / 2));
    for (const dx of G.rearWin.dx) winMats.push(at(bx + dx, yk + G.rearWin.y, -hz - G.reliefT / 2, Math.PI));
  }
  addInst("doors", "Unit doors", new THREE.BoxGeometry(G.door.w, G.door.h, G.reliefT), "door", doorMats);
  addInst("windows", "Louvre windows", facedBox(G.win.w, G.win.h, G.reliefT), "louvre", winMats);
  if (inBrowser) {
    const [c, ctx] = canvas(64, 64);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, 64, 64);
    for (let i = 0; i < 6; i++) {
      const y = 8 + i * 9;
      ctx.fillStyle = "rgba(30, 32, 30, 0.50)";
      ctx.fillRect(6, y + 5, 52, 3);
    }
    ctx.strokeStyle = "rgba(20, 20, 20, 0.35)";
    ctx.lineWidth = 3;
    ctx.strokeRect(4.5, 4.5, 55, 55);
    bind("louvre", c);
  }
  {
    const B = G.breeze;
    const mats = [];
    for (const yk of F) for (const s of [-1, 1]) mats.push(at(s * B.x, yk + B.y, hz + B.t / 2));
    addInst("breeze", "Breeze-block screens", facedBox(B.w, B.h, B.t), "breeze", mats);
    if (inBrowser) {
      const [c, ctx] = canvas(256, 256);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 256, 256);
      for (let r = 0; r < 9; r++) for (let q = 0; q < 12; q++) {
        const x = 10 + q * 20, y = 14 + r * 26;
        ctx.fillStyle = "rgba(0, 0, 0, 0.40)";
        ctx.fillRect(x, y, 14, 10);
        ctx.fillStyle = "rgba(0, 0, 0, 0.18)";
        ctx.fillRect(x, y + 10, 14, 3);
        ctx.fillStyle = "rgba(255, 255, 255, 0.0)";
      }
      for (let i = 0; i < 40; i++) {
        const x = rnd() * 256, y = rnd() * 256, r = 8 + rnd() * 24;
        const gg = ctx.createRadialGradient(x, y, 0, x, y, r);
        gg.addColorStop(0, "rgba(30, 30, 26, " + (0.04 + rnd() * 0.1).toFixed(3) + ")");
        gg.addColorStop(1, "rgba(30, 30, 26, 0)");
        ctx.fillStyle = gg;
        ctx.fillRect(x - r, y - r, r * 2, r * 2);
      }
      bind("breeze", c);
    }
  }
  {
    const ST = G.stair;
    const rise = G.pitch / 2, run = S.z1 - S.z0 - 2 * ST.margin;
    const L = Math.hypot(run, rise), a = Math.atan2(rise, run), zc = (S.z0 + S.z1) / 2;
    const geo = new THREE.BoxGeometry(ST.w, ST.t, L);
    const mats = [], tints = [];
    const rot = (x, y, z, ang) => new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1, 0, 0), ang),
      new THREE.Vector3(1, 1, 1)
    );
    for (const s of [-1, 1]) for (const yk of F.slice(0, ST.floors)) {
      mats.push(rot(s * (hx - ST.inset - ST.w / 2), yk + rise / 2 + ST.t / 2, zc, -a));
      tints.push(16053488);
      mats.push(rot(s * (S.xInner + ST.inset + ST.w / 2), yk + rise * 1.5 + ST.t / 2, zc, a));
      tints.push(13816525);
    }
    addInst("flights", "Stair flights", geo, "stair", mats, tints);
    const LD = G.landing;
    const lm = [];
    for (const s of [-1, 1]) for (const yk of F.slice(0, ST.floors))
      lm.push(at(s * (S.xInner + hx) / 2, yk + rise + (LD.y1 - LD.y0) / 2 + LD.y0, S.z1 - LD.d / 2 - ST.margin));
    addInst("landings", "Stair landings", new THREE.BoxGeometry(hx - S.xInner - 2 * ST.margin, LD.y1 - LD.y0, LD.d), "stair", lm);
  }
  {
    const leaf = (x, y, z, w, h, d, tone) => {
      const g = boxAt(x, y, z, w, h, d);
      const c = new Float32Array(g.getAttribute("position").count * 3);
      for (let i = 0; i < c.length; i += 3) {
        c[i] = tone[0];
        c[i + 1] = tone[1];
        c[i + 2] = tone[2];
      }
      g.setAttribute("color", new THREE.BufferAttribute(c, 3));
      return g;
    };
    const plant = mergeGeos([
      leaf(-0.32, 0.24, 0, 0.5, 0.48, 0.42, [1, 1, 1]),
      leaf(0.14, 0.32, 0.06, 0.42, 0.64, 0.36, [0.78, 0.9, 0.7]),
      leaf(0.52, 0.19, -0.05, 0.36, 0.38, 0.32, [0.9, 0.82, 0.55]),
      leaf(0.1, 0.56, -0.1, 0.22, 0.3, 0.2, [0.85, 1, 0.8])
    ]);
    const yTop = (k) => F[k] + G.spandrelH + G.copingT;
    addInst(
      "plants",
      "Potted plants",
      plant,
      "foliage",
      G.plants.map(([b, k]) => at(BX[b] + 0.3, yTop(k), zS - 0.22))
    );
    const garment = (x, w, h, dz, tone) => {
      const g = boxAt(x, 1.95 - h / 2, dz, w, h, 0.02);
      const c = new Float32Array(g.getAttribute("position").count * 3);
      for (let i = 0; i < c.length; i += 3) {
        c[i] = tone[0];
        c[i + 1] = tone[1];
        c[i + 2] = tone[2];
      }
      g.setAttribute("color", new THREE.BufferAttribute(c, 3));
      return g;
    };
    const wash = mergeGeos([
      garment(-0.45, 0.36, 0.52, 0, [0.92, 0.92, 0.9]),
      garment(0, 0.28, 0.62, 0.03, [0.55, 0.62, 0.75]),
      garment(0.42, 0.4, 0.44, -0.02, [0.7, 0.68, 0.66]),
      garment(0.85, 0.3, 0.5, 0.02, [0.86, 0.8, 0.7])
    ]);
    addInst(
      "laundry",
      "Hanging laundry",
      wash,
      "cloth",
      G.laundry.map(([b, k]) => at(BX[b] - 0.2, F[k], zB + 0.45)),
      [16777215, 15263456]
    );
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createConcreteWalkUpFlatBlockModel(options);
  if (spec !== void 0 && spec !== null) root.userData.sculptSpec = spec;
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ29uY3JldGUgV2Fsay1VcCBGbGF0IEJsb2NrIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDI2LjUwIHggMTcuNTAgeCAxMC41MCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICAvKipcbiAgICogV2hlcmUgdGhpcyBwcm9wJ3Mgc2hpcHBlZCBmaWxlcyBsaXZlLCB3aXRoIGEgdHJhaWxpbmcgc2xhc2guXG4gICAqXG4gICAqIFRoZSBtYXBzIGFyZSByZWNvcmRlZCBhcyBiYXJlIGZpbGVuYW1lcyBiZWNhdXNlIHRoZSBidW5kbGUgaXMgRVZBTFVBVEVEXG4gICAqIHJhdGhlciB0aGFuIGltcG9ydGVkOiBpdCBoYXMgbm8gaW1wb3J0Lm1ldGEgYW5kIG5vIGN1cnJlbnRTY3JpcHQsIHNvIGl0XG4gICAqIGNhbm5vdCBzZWUgaXRzIG93biBVUkwuIEV2ZXJ5IGhvc3QgZGVyaXZlcyB0aGlzIGZyb20gdGhlIG1vZHVsZSBVUkwuXG4gICAqL1xuICBiYXNlVXJsPzogc3RyaW5nO1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcImNvbmNyZXRlLXdhbGstdXAtZmxhdC1ibG9ja1wiLFxuICAgIFwibmFtZVwiOiBcIkNvbmNyZXRlIFdhbGstVXAgRmxhdCBCbG9ja1wiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkNvbmNyZXRlV2Fsa1VwRmxhdEJsb2NrXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDI2LjUwIHggMTcuNTAgeCAxMC41MCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxcbiAqIEJ1ZGdldCAoaGVybzR4KTogPD0zMjAwMCB0cmlhbmdsZXMsIDw9MjQgZHJhdyBjYWxscywgPD0xNiBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiY29uY3JldGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDc4ODc1OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIm9jaHJlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE1NzI4NDAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInJvb2ZcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDI2MjY3MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4wNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRvb3JcIixcbiAgICAgICAgXCJjb2xvclwiOiA3MjMyMDY4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjc1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwibG91dnJlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTExMTc5NzYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiYnJlZXplXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTAzMjg3MjMsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGFpclwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MDc3ODg4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJmb2xpYWdlXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTc5NTkwNCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlLFxuICAgICAgICBcImRvdWJsZVNpZGVkXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJjbG90aFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWUsXG4gICAgICAgIFwiZG91YmxlU2lkZWRcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcImh4XCI6IDEzLjI1LFxuICAgICAgXCJoelwiOiA1LjI1LFxuICAgICAgXCJpbm5lclhcIjogOS45NSxcbiAgICAgIFwidG93ZXJUb3BcIjogMTYsXG4gICAgICBcInBsaW50aFlcIjogMC4yLFxuICAgICAgXCJwaXRjaFwiOiAyLjYzMzMsXG4gICAgICBcImZsb29yc1wiOiBbXG4gICAgICAgIDAuMixcbiAgICAgICAgMi44MzMzLFxuICAgICAgICA1LjQ2NjYsXG4gICAgICAgIDguMDk5OSxcbiAgICAgICAgMTAuNzMzMixcbiAgICAgICAgMTMuMzY2NVxuICAgICAgXSxcbiAgICAgIFwiYmF5c1wiOiBbXG4gICAgICAgIC04LjUyODcsXG4gICAgICAgIC01LjY4NTgsXG4gICAgICAgIC0yLjg0MjksXG4gICAgICAgIDAsXG4gICAgICAgIDIuODQyOSxcbiAgICAgICAgNS42ODU4LFxuICAgICAgICA4LjUyODdcbiAgICAgIF0sXG4gICAgICBcImJhY2taXCI6IDAuOTUsXG4gICAgICBcIndhbGxUXCI6IDAuMTUsXG4gICAgICBcInNwYW5kcmVsWlwiOiAyLjQ1LFxuICAgICAgXCJzcGFuZHJlbFRcIjogMC4xNSxcbiAgICAgIFwic3BhbmRyZWxIXCI6IDAuOTgsXG4gICAgICBcImNvcGluZ1RcIjogMC4wNixcbiAgICAgIFwiY29waW5nRFwiOiAwLjE5LFxuICAgICAgXCJzbGFiVFwiOiAwLjE1LFxuICAgICAgXCJiYWNrVGludFwiOiAwLjQsXG4gICAgICBcInJlbGllZlRcIjogMC4wNSxcbiAgICAgIFwic2xvdFwiOiB7XG4gICAgICAgIFwiejBcIjogMi42LFxuICAgICAgICBcInoxXCI6IDQuOCxcbiAgICAgICAgXCJ5MFwiOiAwLjUsXG4gICAgICAgIFwieTFcIjogMTUuNCxcbiAgICAgICAgXCJ4SW5uZXJcIjogMTAuODVcbiAgICAgIH0sXG4gICAgICBcInN0YWlyXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEuMDgsXG4gICAgICAgIFwidFwiOiAwLjYsXG4gICAgICAgIFwiaW5zZXRcIjogMC4xMixcbiAgICAgICAgXCJtYXJnaW5cIjogMC4wNSxcbiAgICAgICAgXCJmbG9vcnNcIjogNVxuICAgICAgfSxcbiAgICAgIFwibGFuZGluZ1wiOiB7XG4gICAgICAgIFwiZFwiOiAwLjksXG4gICAgICAgIFwieTBcIjogLTAuMixcbiAgICAgICAgXCJ5MVwiOiAwLjQ1XG4gICAgICB9LFxuICAgICAgXCJyb29mXCI6IHtcbiAgICAgICAgXCJ4RW5kXCI6IDEyLjk1LFxuICAgICAgICBcImRlY2tUb3BcIjogMTYuMTUsXG4gICAgICAgIFwicGFyYXBldFRvcFwiOiAxNi43LFxuICAgICAgICBcInBhcmFwZXRUXCI6IDAuMzUsXG4gICAgICAgIFwicmlkZ2VaXCI6IC0xLjQsXG4gICAgICAgIFwiZ2FibGVUb3BcIjogMTcuNSxcbiAgICAgICAgXCJlYXZlWVwiOiAxNi4zNSxcbiAgICAgICAgXCJyaWRnZVlcIjogMTcuMyxcbiAgICAgICAgXCJzaGVldFRcIjogMC4xLFxuICAgICAgICBcImd1dHRlclwiOiAwLjM1LFxuICAgICAgICBcInRpbGVNXCI6IDMuMlxuICAgICAgfSxcbiAgICAgIFwidGlsZU1cIjogNS4yNjY2LFxuICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgXCJ3XCI6IDAuOSxcbiAgICAgICAgXCJoXCI6IDIuMDUsXG4gICAgICAgIFwiZHhcIjogLTAuNzVcbiAgICAgIH0sXG4gICAgICBcIndpblwiOiB7XG4gICAgICAgIFwid1wiOiAxLFxuICAgICAgICBcImhcIjogMC42LFxuICAgICAgICBcImR4XCI6IDAuNjUsXG4gICAgICAgIFwieVwiOiAxLjU1XG4gICAgICB9LFxuICAgICAgXCJyZWFyV2luXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEsXG4gICAgICAgIFwiaFwiOiAwLjYsXG4gICAgICAgIFwiZHhcIjogW1xuICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgMC44XG4gICAgICAgIF0sXG4gICAgICAgIFwieVwiOiAxLjZcbiAgICAgIH0sXG4gICAgICBcImJyZWV6ZVwiOiB7XG4gICAgICAgIFwid1wiOiAyLjUsXG4gICAgICAgIFwiaFwiOiAxLjc1LFxuICAgICAgICBcInRcIjogMC4wNCxcbiAgICAgICAgXCJ4XCI6IDExLjYsXG4gICAgICAgIFwieVwiOiAxLjE3NVxuICAgICAgfSxcbiAgICAgIFwicGxhbnRzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDQsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzLFxuICAgICAgICAgIDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgM1xuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJsYXVuZHJ5XCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDIsXG4gICAgICAgICAgM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWF0ZXJpYWxzICovXG5cbi8qKlxuICogRXZlcnkgbWF0ZXJpYWwgaXMgZGVjbGFyZWQgYHRleHR1cmVsZXNzYCBpbiB0aGUgc2N1bHB0IHNwZWMsIHNvIG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXNcbiAqIHN5bnRoZXNpc2VkLiBUaGF0IG1hdHRlcnMgdHdpY2UuIFNwZWVkOiBtYWtlUHJvY2VkdXJhbFRleHR1cmVTZXQgd3JpdGVzIEZJVkUgY2FudmFzZXMgcGVyXG4gKiBtYXRlcmlhbCBwaXhlbCBieSBwaXhlbCBpbiBKYXZhU2NyaXB0LCBhdCBhIGNvc3QgdGhhdCBpcyB0aGUgU1FVQVJFIG9mIHRoZSByZXNvbHV0aW9uLlxuICogQ29ycmVjdG5lc3M6IHdoZW5ldmVyIGEgdGV4dHVyZSBzZXQgZXhpc3RzIHRoZSBnZW5lcmF0b3IgZm9yY2VzIGNvbG9yIHRvIHdoaXRlIGFuZCByb3VnaG5lc3NcbiAqIHRvIDEgYW5kIHJlYWRzIGJvdGggYmFjayBmcm9tIHRoZSBnZW5lcmF0ZWQgbWFwcywgZGlzY2FyZGluZyB0aGUgbWVhc3VyZWQgYWxiZWRvLlxuICpcbiAqIE1ldGFsbmVzcyBpcyBjYXBwZWQgd2VsbCBiZWxvdyBwaHlzaWNhbCBmb3IgdGhlIGdpbGRlZCBzdXJmYWNlcy4gVGhlIHRoYWlraXQgaGFybmVzcyBzdXBwbGllcyBhXG4gKiBoZW1pc3BoZXJlIGxpZ2h0IGFuZCB0aHJlZSBkaXJlY3Rpb25hbHMgYW5kIE5PIGVudmlyb25tZW50IG1hcCwgYW5kIGEgbWV0YWwgd2l0aCBub3RoaW5nIHRvXG4gKiByZWZsZWN0IHJlbmRlcnMgYmxhY2sgLS0gd2hpY2ggb24gYSBnb2xkIGZpbmlhbCBpcyB0aGUgd2hvbGUgZmVhdHVyZSBsb3N0LiBUaGUgYWxiZWRvIHN0YXlzXG4gKiBtZWFzdXJlZDsgdGhlIG1ldGFsbmVzcyBpcyB3aGF0IGlzIHdyb25nIGZvciB0aGlzIHJpZy5cbiAqL1xuZnVuY3Rpb24gYnVpbGRNYXRlcmlhbHMob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyk6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiB7XG4gIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+ID0ge307XG4gIGZvciAoY29uc3QgcyBvZiBDT05GSUcubWF0ZXJpYWxzIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbSA9IG5ldyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCh7XG4gICAgICBjb2xvcjogbmV3IFRIUkVFLkNvbG9yKHMuY29sb3IpLFxuICAgICAgcm91Z2huZXNzOiBzLnJvdWdobmVzcyxcbiAgICAgIG1ldGFsbmVzczogcy5tZXRhbG5lc3MsXG4gICAgICB3aXJlZnJhbWU6IG9wdGlvbnMud2lyZWZyYW1lID8/IGZhbHNlLFxuICAgICAgc2lkZTogcy5kb3VibGVTaWRlZCA/IFRIUkVFLkRvdWJsZVNpZGUgOiBUSFJFRS5Gcm9udFNpZGUsXG4gICAgICB2ZXJ0ZXhDb2xvcnM6IHMudmVydGV4Q29sb3JzID09PSB0cnVlLFxuICAgIH0pO1xuICAgIGlmIChzLmVudk1hcEludGVuc2l0eSAhPT0gdW5kZWZpbmVkKSBtLmVudk1hcEludGVuc2l0eSA9IHMuZW52TWFwSW50ZW5zaXR5O1xuICAgIGlmIChzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkgeyBtLnRyYW5zcGFyZW50ID0gdHJ1ZTsgbS5vcGFjaXR5ID0gcy5vcGFjaXR5OyBtLmRlcHRoV3JpdGUgPSB0cnVlOyB9XG4gICAgbS5uYW1lID0gcy5pZDtcbiAgICBtYXBbcy5pZF0gPSBtO1xuICB9XG4gIHJldHVybiBtYXA7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbW9kZWwgKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUNvbmNyZXRlV2Fsa1VwRmxhdEJsb2NrTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdDb25jcmV0ZSBXYWxrLVVwIEZsYXQgQmxvY2snO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG5cbiAgY29uc3QgRiA9IEcuZmxvb3JzIGFzIG51bWJlcltdLCBCWCA9IEcuYmF5cyBhcyBudW1iZXJbXTtcbiAgY29uc3QgaHggPSBHLmh4IGFzIG51bWJlciwgaHogPSBHLmh6IGFzIG51bWJlciwgaXggPSBHLmlubmVyWCBhcyBudW1iZXI7XG4gIGNvbnN0IHlUID0gRy50b3dlclRvcCBhcyBudW1iZXIsIHpTID0gRy5zcGFuZHJlbFogYXMgbnVtYmVyLCB6QiA9IEcuYmFja1ogYXMgbnVtYmVyO1xuICBjb25zdCBTID0gRy5zbG90LCBSID0gRy5yb29mO1xuICBjb25zdCBpbkJyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGVscGVycyAqL1xuICBjb25zdCBzcGFuID0gKHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpID0+XG4gICAgYm94QXQoKHgwICsgeDEpIC8gMiwgKHkwICsgeTEpIC8gMiwgKHowICsgejEpIC8gMiwgeDEgLSB4MCwgeTEgLSB5MCwgejEgLSB6MCk7XG4gIC8vIHdvcmxkLXBsYW5hciBVVnMgYnkgZG9taW5hbnQgbm9ybWFsLCBpbiBtZXRyZXMgb3ZlciBvbmUgdGlsZTogdGhlIHdheSBhIGNhbnZhcyB0aWxlIGxhbmRzIG9uIGFcbiAgLy8gbWVyZ2VkIHNoZWxsIHdpdGhvdXQgYSBzZWFtIHBlciBib3hcbiAgY29uc3QgcGxhbmFyVVYgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKG4uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobi5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhuLmdldFooaSkpO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGF5ID49IGF4ICYmIGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICAgIGVsc2UgaWYgKGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgICB1dltpICogMl0gPSB1IC8gdGlsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgfTtcbiAgY29uc3QgdGludEdlbyA9IChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjICogMykuZmlsbCh0KSwgMykpO1xuICAgIHJldHVybiBnZW87XG4gIH07XG4gIC8vIGV4dHJ1c2lvbiBpbiB0aGUgWVogcGxhbmU6IHB0cyBhcmUgW3osIHldOyB0aGlja25lc3MgdCBhbG9uZyAreCBmcm9tIHgwLiBTaGFwZSB4IGhvbGRzIC16LCBzb1xuICAvLyByb3RhdGVZKCtQSS8yKSAoeCcgPSB6LCB6JyA9IC14KSBsYW5kcyB0aGUgcHJvZmlsZSBhdCB0aGUgaW50ZW5kZWQgeiB3aXRoIGl0cyBkZXB0aCBhbG9uZyAreC5cbiAgY29uc3QgeXpFeHRydWRlID0gKHB0czogbnVtYmVyW11bXSwgeDA6IG51bWJlciwgdDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBzaC5tb3ZlVG8oLXB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2gubGluZVRvKC1wdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gICAgc2guY2xvc2VQYXRoKCk7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2gsIHsgZGVwdGg6IHQsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDEgfSk7XG4gICAgZy5yb3RhdGVZKE1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDAsIDAsIDApOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgcmV0dXJuIGc7XG4gIH07XG4gIC8vIGEgYm94IHdob3NlICtaIGZhY2UgY2FycmllcyBhIGNhbnZhcyBhbmQgd2hvc2Ugb3RoZXIgZml2ZSBmYWNlcyBzYW1wbGUgYSBwbGFpbiBjb3JuZXIgb2YgaXRcbiAgY29uc3QgZmFjZWRCb3ggPSAodzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7XG4gICAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSBpZiAoaSA8IDE2IHx8IGkgPiAxOSkgdXYuc2V0WFkoaSwgMC4wMiwgMC4wMik7XG4gICAgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IGF0ID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHlhdyA9IDApID0+IG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSwgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCB5YXcpLFxuICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgLy8gc2VlZGVkIExDRyBzbyBldmVyeSBjYW52YXMgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGRcbiAgbGV0IHNlZWQgPSA5MDIxMDtcbiAgY29uc3Qgcm5kID0gKCkgPT4geyBzZWVkID0gKHNlZWQgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzZWVkIC8gNDI5NDk2NzI5NjsgfTtcbiAgY29uc3QgY2FudmFzID0gKHc6IG51bWJlciwgaDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjLndpZHRoID0gdzsgYy5oZWlnaHQgPSBoO1xuICAgIHJldHVybiBbYywgYy5nZXRDb250ZXh0KCcyZCcsIHsgd2lsbFJlYWRGcmVxdWVudGx5OiB0cnVlIH0pIV0gYXMgY29uc3Q7XG4gIH07XG4gIGNvbnN0IGJpbmQgPSAobWF0SWQ6IHN0cmluZywgYzogSFRNTENhbnZhc0VsZW1lbnQsIGJ1bXAgPSAwKSA9PiB7XG4gICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoYyk7XG4gICAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgICB0ZXgud3JhcFMgPSBUSFJFRS5SZXBlYXRXcmFwcGluZzsgdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgY29uc3QgbSA9IG1hdGVyaWFsc1ttYXRJZF07XG4gICAgbS5tYXAgPSB0ZXg7XG4gICAgaWYgKGJ1bXAgPiAwKSB7IG0uYnVtcE1hcCA9IHRleDsgbS5idW1wU2NhbGUgPSBidW1wOyB9XG4gICAgbS5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIH07XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgY29uY3JldGUgc2hlbGxcbiAgICogT05FIGNvbXBvbmVudDogcGxpbnRoLCB0aGUgYm9keSBiZWhpbmQgdGhlIGNvcnJpZG9yLCB0aGUgdHdvIHRvd2VycyBhcyBmaXZlIGJveGVzIGVhY2ggc28gdGhlXG4gICAqIHN0YWlyIHNsb3QgaXMgYSByZWFsIGNhdml0eSwgdGhlIGNvcnJpZG9yIHNsYWJzIGFuZCBjb3BpbmdzLCB0aGUgcm9vZiBkZWNrLCB0aGUgcGFyYXBldHMgYW5kIHRoZVxuICAgKiB0d28gZ2FibGUgZW5kcy4gRXZlcnkgam9pbnQgaXMgYW4gb3Bwb3NlZCBidXR0OyBjby1mYWNpbmcgZmFjZXMgb24gb25lIHBsYW5lIG9ubHkgZXZlciBtZWV0IGF0IGFuXG4gICAqIGVkZ2UgKHRvd2VyIGZyb250IHN0cmlwIC8gaGVhZCAvIHNpbGwgb24gdGhlIGVuZCB3YWxsIHBsYW5lKSwgbmV2ZXIgb3ZlciBhbiBhcmVhLiAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oLWh4IC0gMC4xLCBoeCArIDAuMSwgMCwgRy5wbGludGhZLCAtaHogLSAwLjEsIGh6ICsgMC4xKSk7XG4gICAgcGFydHMucHVzaChzcGFuKC1peCwgaXgsIEcucGxpbnRoWSwgeVQsIC1oeiwgekIgLSBHLndhbGxUKSk7XG4gICAgZm9yIChjb25zdCBzIG9mIFstMSwgMV0pIHtcbiAgICAgIGNvbnN0IFggPSAoYTogbnVtYmVyLCBiOiBudW1iZXIpID0+IFtNYXRoLm1pbihhLCBiKSwgTWF0aC5tYXgoYSwgYildO1xuICAgICAgY29uc3QgeG8gPSBzICogaHgsIHhpID0gcyAqIGl4LCB4YyA9IHMgKiBTLnhJbm5lcjtcbiAgICAgIGxldCByID0gWCh4aSwgeG8pO1xuICAgICAgcGFydHMucHVzaChzcGFuKHJbMF0sIHJbMV0sIEcucGxpbnRoWSwgeVQsIFMuejEsIGh6KSk7ICAgICAgLy8gZnJvbnQgc3RyaXAsIGJyZWV6ZSBzY3JlZW4gZmFjZVxuICAgICAgcGFydHMucHVzaChzcGFuKHJbMF0sIHJbMV0sIEcucGxpbnRoWSwgeVQsIC1oeiwgUy56MCkpOyAgICAgLy8gcmVhciBibG9jayB1bmRlciB0aGUgZ2FibGVcbiAgICAgIHIgPSBYKHhpLCB4Yyk7XG4gICAgICBwYXJ0cy5wdXNoKHNwYW4oclswXSwgclsxXSwgRy5wbGludGhZLCB5VCwgUy56MCwgUy56MSkpOyAgICAvLyBpbm5lciBibG9jazogdGhlIGNhdml0eSdzIGJhY2sgd2FsbFxuICAgICAgciA9IFgoeGMsIHhvKTtcbiAgICAgIHBhcnRzLnB1c2goc3BhbihyWzBdLCByWzFdLCBTLnkxLCB5VCwgUy56MCwgUy56MSkpOyAgICAgICAgIC8vIGhlYWQgb3ZlciB0aGUgc2xvdFxuICAgICAgcGFydHMucHVzaChzcGFuKHJbMF0sIHJbMV0sIEcucGxpbnRoWSwgUy55MCwgUy56MCwgUy56MSkpOyAgLy8gc2lsbCB1bmRlciB0aGUgc2xvdFxuICAgIH1cbiAgICBmb3IgKGxldCBrID0gMTsgayA8IEYubGVuZ3RoOyBrKyspIHBhcnRzLnB1c2goc3BhbigtaXgsIGl4LCBGW2tdIC0gRy5zbGFiVCwgRltrXSwgekIsIHpTKSk7XG4gICAgZm9yIChjb25zdCB5ayBvZiBGKSBwYXJ0cy5wdXNoKHNwYW4oLWl4LCBpeCwgeWsgKyBHLnNwYW5kcmVsSCwgeWsgKyBHLnNwYW5kcmVsSCArIEcuY29waW5nVCwgelMgLSBHLmNvcGluZ0QsIHpTICsgMC4wMykpO1xuICAgIHBhcnRzLnB1c2goc3BhbigtUi54RW5kLCBSLnhFbmQsIHlULCBSLmRlY2tUb3AsIC1oeiwgelMpKTtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oLVIueEVuZCwgUi54RW5kLCBSLmRlY2tUb3AsIFIucGFyYXBldFRvcCwgelMgLSBSLnBhcmFwZXRULCB6UykpO1xuICAgIHBhcnRzLnB1c2goc3BhbigtUi54RW5kLCBSLnhFbmQsIFIuZGVja1RvcCwgUi5wYXJhcGV0VG9wLCAtaHosIC1oeiArIFIucGFyYXBldFQpKTtcbiAgICBjb25zdCBnYWJsZSA9IFtbLWh6LCB5VF0sIFt6UywgeVRdLCBbelMsIFIucGFyYXBldFRvcF0sIFtSLnJpZGdlWiwgUi5nYWJsZVRvcF0sIFstaHosIFIucGFyYXBldFRvcF1dO1xuICAgIHBhcnRzLnB1c2goeXpFeHRydWRlKGdhYmxlLCBSLnhFbmQsIGh4IC0gUi54RW5kKSk7XG4gICAgcGFydHMucHVzaCh5ekV4dHJ1ZGUoZ2FibGUsIC1oeCwgaHggLSBSLnhFbmQpKTtcbiAgICBjb25zdCBzaGVsbCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgcGxhbmFyVVYoc2hlbGwsIEcudGlsZU0pO1xuICAgIGFkZCgnc2hlbGwnLCAnQ29uY3JldGUgc2hlbGwnLCBzaGVsbCwgJ2NvbmNyZXRlJyk7XG4gICAgY29sbGlkZXJzWydzaGVsbCddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDguNzUsIDBdLCBoYWxmRXh0ZW50czogWzEzLjM1LCA4Ljc1LCA1LjM1XSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZS4nLFxuICAgIH07XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gNTEyIHB4ID0gb25lIDUuMjcgbSB0aWxlICh0d28gZmxvb3IgcGl0Y2hlcyk6IHBhbmVsIGdyb292ZXMgYXQgZmxvb3IgbGV2ZWwgYW5kIG9uZSB2ZXJ0aWNhbFxuICAgICAgLy8gcGVyIHRpbGUsIHJhaW4gc3RyZWFrcyBoYW5naW5nIGZyb20gdGhlIGdyb292ZXMsIHNvZnQgbW90dGxpbmcuIE11bHRpcGxpZXIgc3BhY2Ugb3ZlciB3aGl0ZS5cbiAgICAgIGNvbnN0IFtjLCBjdHhdID0gY2FudmFzKDUxMiwgNTEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCA1MTIsIDUxMik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIDUxMiwgeSA9IHJuZCgpICogNTEyLCByID0gNDAgKyBybmQoKSAqIDkwO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgwLCAncmdiYSg0MCwgNDAsIDM2LCAnICsgKDAuMDIgKyBybmQoKSAqIDAuMDQpLnRvRml4ZWQoMykgKyAnKScpO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgxLCAncmdiYSg0MCwgNDAsIDM2LCAwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KHggLSByLCB5IC0gciwgciAqIDIsIHIgKiAyKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJvd3MgPSBbMjM2LCA0OTNdO1xuICAgICAgZm9yIChjb25zdCB5MCBvZiByb3dzKSBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogNTEyLCB3ID0gMiArIHJuZCgpICogMTAsIGxlbiA9IDYwICsgcm5kKCkgKiAyMzAsIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHkwLCAwLCB5MCArIGxlbik7XG4gICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDMwLCAzMCwgMjgsICcgKyBhLnRvRml4ZWQoMykgKyAnKScpO1xuICAgICAgICBnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgzMCwgMzAsIDI4LCAwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KHgsIHkwLCB3LCBsZW4pO1xuICAgICAgICBpZiAoeCArIHcgPiA1MTIpIGN0eC5maWxsUmVjdCh4IC0gNTEyLCB5MCwgdywgbGVuKTtcbiAgICAgIH1cbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSgyNSwgMjUsIDIyLCAwLjM4KSc7XG4gICAgICBmb3IgKGNvbnN0IHkwIG9mIHJvd3MpIGN0eC5maWxsUmVjdCgwLCB5MCAtIDEsIDUxMiwgMyk7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgMywgNTEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg4MCwgOTAsIDYwLCAwLjEwKSc7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogNTEyLCB5ID0gcm5kKCkgKiA1MTI7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiA0KTsgfVxuICAgICAgYmluZCgnY29uY3JldGUnLCBjKTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBvY2hyZSBjb3JyaWRvcjogYmFjayB3YWxsIGFuZCBzaXggc3BhbmRyZWxzICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIHBhcnRzLnB1c2godGludEdlbyhzcGFuKC1peCwgaXgsIEcucGxpbnRoWSwgeVQsIHpCIC0gRy53YWxsVCwgekIpLCBHLmJhY2tUaW50KSk7XG4gICAgZm9yIChjb25zdCB5ayBvZiBGKSBwYXJ0cy5wdXNoKHRpbnRHZW8oc3BhbigtaXgsIGl4LCB5aywgeWsgKyBHLnNwYW5kcmVsSCwgelMgLSBHLnNwYW5kcmVsVCwgelMpLCAxKSk7XG4gICAgY29uc3QgZyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgLy8gb25lIDEwMjQgeCAyNTYgY2FudmFzOiB0aGUgc3BhbmRyZWwgc3RyaXAgaW4gdGhlIHRvcCBoYWxmLCB0aGUgYmFjayB3YWxsIGluIHRoZSBib3R0b20gaGFsZjtcbiAgICAvLyB1IHJ1bnMgdGhlIGZhY2FkZSB3aWR0aCBhbmQgc2hpZnRzIDAuMTM3IHBlciBmbG9vciBzbyBubyB0d28gc3BhbmRyZWxzIGNhcnJ5IHRoZSBzYW1lIHN0cmVha3NcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHAuZ2V0WChpKSwgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICAgIGNvbnN0IHUwID0gKHggKyBpeCkgLyAoMiAqIGl4KTtcbiAgICAgIGlmICh6IDwgekIgKyAwLjAwMSkgeyB1dltpICogMl0gPSB1MDsgdXZbaSAqIDIgKyAxXSA9IDAuMDIgKyAwLjQ0ICogKHkgLSBHLnBsaW50aFkpIC8gKHlUIC0gRy5wbGludGhZKTsgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGxldCBrID0gMDsgZm9yIChsZXQgaiA9IDA7IGogPCBGLmxlbmd0aDsgaisrKSBpZiAoeSA+PSBGW2pdIC0gMC4wMSkgayA9IGo7XG4gICAgICAgIHV2W2kgKiAyXSA9IHUwICsgayAqIDAuMTM3O1xuICAgICAgICB1dltpICogMiArIDFdID0gMC41MiArIDAuNDYgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAoeSAtIEZba10pIC8gRy5zcGFuZHJlbEgpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGFkZCgnY29ycmlkb3InLCAnQ29ycmlkb3Igc3BhbmRyZWxzIGFuZCBiYWNrIHdhbGwnLCBnLCAnb2NocmUnKTtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICBjb25zdCBbYywgY3R4XSA9IGNhbnZhcygxMDI0LCAyNTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDEwMjQsIDI1Nik7XG4gICAgICAvLyBzcGFuZHJlbCBzdHJpcCAocm93cyAwLi4xMjgpOiBibGFjay1tb3VsZCBncmltZSBhbG9uZyB0aGUgY29waW5nIGxpbmUgYW5kIHRoZSBmb290LCBydXN0XG4gICAgICAvLyBibGVlZGluZyBmcm9tIHRoZSBmaXhpbmdzLCBhIGZldyBwYWxlLWdyaW1lIGNsb3VkczsgYWxsIGRhcmtlciB0aGFuIHRoZSBwYWludFxuICAgICAgLy8gYmxhY2stbW91bGQgYmFuZCBhbG9uZyB0aGUgY29waW5nIGxpbmUsIGNsb3VkeSBhbmQgY29udGludW91cyByYXRoZXIgdGhhbiBzcG90dGVkXG4gICAgICBjb25zdCBndCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCAwLCAwLCA0MCk7XG4gICAgICBndC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMzUsIDMyLCAyMiwgMC4zMCknKTsgZ3QuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDM1LCAzMiwgMjIsIDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3Q7IGN0eC5maWxsUmVjdCgwLCAwLCAxMDI0LCA0MCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM0OyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogMTAyNCwgeSA9IHJuZCgpIDwgMC42ID8gcm5kKCkgKiAzMCA6IDg0ICsgcm5kKCkgKiA0NCwgcnggPSAzMCArIHJuZCgpICogOTAsIHJ5ID0gMTAgKyBybmQoKSAqIDI2O1xuICAgICAgICBjb25zdCBnZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCgwLCAwLCAwLCAwLCAwLCAxKTtcbiAgICAgICAgZ2cuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDM1LCAzMiwgMjIsICcgKyAoMC4xMCArIHJuZCgpICogMC4yMikudG9GaXhlZCgzKSArICcpJyk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgzNSwgMzIsIDIyLCAwKScpO1xuICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKHgsIHkpOyBjdHguc2NhbGUocngsIHJ5KTsgY3R4LmZpbGxTdHlsZSA9IGdnOyBjdHguZmlsbFJlY3QoLTEsIC0xLCAyLCAyKTsgY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjI7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiAxMDI0LCB3ID0gMyArIHJuZCgpICogNywgbGVuID0gMzAgKyBybmQoKSAqIDkwLCBhID0gMC4yNSArIHJuZCgpICogMC40NTtcbiAgICAgICAgY29uc3QgZ2cgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgNiwgMCwgNiArIGxlbik7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLCAncmdiYSgxNTAsIDYyLCAxOCwgJyArIGEudG9GaXhlZCgzKSArICcpJyk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNTAsIDYyLCAxOCwgMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdnOyBjdHguZmlsbFJlY3QoeCwgNiwgdywgbGVuKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiAxMDI0LCB5ID0gcm5kKCkgKiAxMjgsIHIgPSA2ICsgcm5kKCkgKiAyMjtcbiAgICAgICAgY29uc3QgZ2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCwgNTUsIDQwLCAnICsgKDAuMDUgKyBybmQoKSAqIDAuMTIpLnRvRml4ZWQoMykgKyAnKScpO1xuICAgICAgICBnZy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsIDU1LCA0MCwgMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdnOyBjdHguZmlsbFJlY3QoeCAtIHIsIHkgLSByLCByICogMiwgciAqIDIpO1xuICAgICAgfVxuICAgICAgLy8gYmFjayB3YWxsIChyb3dzIDEyOC4uMjU2KTogYSBzb2Z0IHNoYWRvdyBiYW5kIHVuZGVyIGVhY2ggZmxvb3IncyBzbGFiIGFuZCBsaWdodCBncmltZVxuICAgICAgY29uc3QgZ3MgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMTI4LCAwLCAyNTYpO1xuICAgICAgZ3MuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDIwLCAxOCwgMTIsIDAuMCknKTsgZ3MuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDIwLCAxOCwgMTIsIDAuMTApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZ3M7IGN0eC5maWxsUmVjdCgwLCAxMjgsIDEwMjQsIDEyOCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIDEwMjQsIHkgPSAxMjggKyBybmQoKSAqIDEyOCwgciA9IDYgKyBybmQoKSAqIDI0O1xuICAgICAgICBjb25zdCBnZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgICAgZ2cuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDQwLCAzNiwgMjYsICcgKyAoMC4wNCArIHJuZCgpICogMC4xMCkudG9GaXhlZCgzKSArICcpJyk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSg0MCwgMzYsIDI2LCAwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCh4IC0gciwgeSAtIHIsIHIgKiAyLCByICogMik7XG4gICAgICB9XG4gICAgICBiaW5kKCdvY2hyZScsIGMpO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGNvcnJ1Z2F0ZWQgcm9vZiBzaGVldCAqL1xuICB7XG4gICAgY29uc3QgcHJvZiA9IFtbLWh6ICsgUi5ndXR0ZXIsIFIuZWF2ZVldLCBbUi5yaWRnZVosIFIucmlkZ2VZXSwgW3pTIC0gUi5ndXR0ZXIsIFIuZWF2ZVldLFxuICAgICAgICAgICAgICAgICAgW3pTIC0gUi5ndXR0ZXIsIFIuZWF2ZVkgLSBSLnNoZWV0VF0sIFtSLnJpZGdlWiwgUi5yaWRnZVkgLSBSLnNoZWV0VF0sIFstaHogKyBSLmd1dHRlciwgUi5lYXZlWSAtIFIuc2hlZXRUXV07XG4gICAgY29uc3QgZyA9IHl6RXh0cnVkZShwcm9mLCAtUi54RW5kLCAyICogUi54RW5kKTtcbiAgICBwbGFuYXJVVihnLCBSLnRpbGVNKTtcbiAgICBhZGQoJ3Jvb2YnLCAnQ29ycnVnYXRlZCByb29mIHNoZWV0JywgZywgJ3Jvb2YnKTtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyA1MTIgcHggPSAzLjIgbTogMzIgY29ycnVnYXRpb25zIGF0IGEgMC4xMCBtIHBpdGNoIHJ1bm5pbmcgZG93biB0aGUgc2xvcGUsIGxpY2hlbiBmcmVja2xlc1xuICAgICAgLy8gYW5kIHRocmVlIHJ1c3QgYmxvb21zIHBlciB0aWxlXG4gICAgICBjb25zdCBbYywgY3R4XSA9IGNhbnZhcyg1MTIsIDUxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgNTEyLCA1MTIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBpICogMTY7XG4gICAgICAgIGNvbnN0IGdnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHgsIDAsIHggKyAxNiwgMCk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLCAncmdiYSgzMCwgMzAsIDI4LCAwLjYyKScpOyBnZy5hZGRDb2xvclN0b3AoMC4zLCAncmdiYSgzMCwgMzAsIDI4LCAwLjApJyk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLjYsICdyZ2JhKDMwLCAzMCwgMjgsIDAuMTApJyk7IGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgzMCwgMzAsIDI4LCAwLjYyKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCh4LCAwLCAxNiwgNTEyKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIDUxMiwgeSA9IHJuZCgpICogNTEyLCByeCA9IDMwICsgcm5kKCkgKiA2MCwgcnkgPSA2MCArIHJuZCgpICogMTYwO1xuICAgICAgICBjb25zdCBnZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCAxKTtcbiAgICAgICAgZ2cuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDE1MCwgNzAsIDMwLCAwLjc1KScpOyBnZy5hZGRDb2xvclN0b3AoMC42LCAncmdiYSgxNTAsIDcwLCAzMCwgMC40NSknKTsgZ2cuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDE1MCwgNzAsIDMwLCAwKScpO1xuICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKHgsIHkpOyBjdHguc2NhbGUocngsIHJ5KTsgY3R4LmZpbGxTdHlsZSA9IGdnOyBjdHguZmlsbFJlY3QoLTEsIC0xLCAyLCAyKTsgY3R4LnJlc3RvcmUoKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDAwOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogNTEyLCB5ID0gcm5kKCkgKiA1MTI7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBybmQoKSA8IDAuNyA/ICdyZ2JhKDQwLCA0MCwgMzYsICcgKyAoMC4wOCArIHJuZCgpICogMC4yKS50b0ZpeGVkKDIpICsgJyknIDogJ3JnYmEoOTAsIDEwNSwgNTUsICcgKyAoMC4xNSArIHJuZCgpICogMC4yNSkudG9GaXhlZCgyKSArICcpJztcbiAgICAgICAgY3R4LmZpbGxSZWN0KHgsIHksIDIgKyBybmQoKSAqIDUsIDIgKyBybmQoKSAqIDEwKTtcbiAgICAgIH1cbiAgICAgIGJpbmQoJ3Jvb2YnLCBjLCAwLjAyKTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGRvb3JzIGFuZCBsb3V2cmUgd2luZG93cyAqL1xuICBjb25zdCBkb29yTWF0czogVEhSRUUuTWF0cml4NFtdID0gW10sIHdpbk1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHlrIG9mIEYpIGZvciAoY29uc3QgYnggb2YgQlgpIHtcbiAgICBkb29yTWF0cy5wdXNoKGF0KGJ4ICsgRy5kb29yLmR4LCB5ayArIDAuMDIgKyBHLmRvb3IuaCAvIDIsIHpCICsgRy5yZWxpZWZUIC8gMikpO1xuICAgIHdpbk1hdHMucHVzaChhdChieCArIEcud2luLmR4LCB5ayArIEcud2luLnksIHpCICsgRy5yZWxpZWZUIC8gMikpO1xuICAgIGZvciAoY29uc3QgZHggb2YgRy5yZWFyV2luLmR4IGFzIG51bWJlcltdKSB3aW5NYXRzLnB1c2goYXQoYnggKyBkeCwgeWsgKyBHLnJlYXJXaW4ueSwgLWh6IC0gRy5yZWxpZWZUIC8gMiwgTWF0aC5QSSkpO1xuICB9XG4gIGFkZEluc3QoJ2Rvb3JzJywgJ1VuaXQgZG9vcnMnLCBuZXcgVEhSRUUuQm94R2VvbWV0cnkoRy5kb29yLncsIEcuZG9vci5oLCBHLnJlbGllZlQpLCAnZG9vcicsIGRvb3JNYXRzKTtcbiAgYWRkSW5zdCgnd2luZG93cycsICdMb3V2cmUgd2luZG93cycsIGZhY2VkQm94KEcud2luLncsIEcud2luLmgsIEcucmVsaWVmVCksICdsb3V2cmUnLCB3aW5NYXRzKTtcbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIGNvbnN0IFtjLCBjdHhdID0gY2FudmFzKDY0LCA2NCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDY0LCA2NCk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHsgY29uc3QgeSA9IDggKyBpICogOTsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDMwLCAzMiwgMzAsIDAuNTApJzsgY3R4LmZpbGxSZWN0KDYsIHkgKyA1LCA1MiwgMyk7IH1cbiAgICBjdHguc3Ryb2tlU3R5bGUgPSAncmdiYSgyMCwgMjAsIDIwLCAwLjM1KSc7IGN0eC5saW5lV2lkdGggPSAzOyBjdHguc3Ryb2tlUmVjdCg0LjUsIDQuNSwgNTUsIDU1KTtcbiAgICBiaW5kKCdsb3V2cmUnLCBjKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYnJlZXplLWJsb2NrIHNjcmVlbnMgb24gdGhlIHRvd2VyIGZyb250cyAqL1xuICB7XG4gICAgY29uc3QgQiA9IEcuYnJlZXplO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgeWsgb2YgRikgZm9yIChjb25zdCBzIG9mIFstMSwgMV0pIG1hdHMucHVzaChhdChzICogQi54LCB5ayArIEIueSwgaHogKyBCLnQgLyAyKSk7XG4gICAgYWRkSW5zdCgnYnJlZXplJywgJ0JyZWV6ZS1ibG9jayBzY3JlZW5zJywgZmFjZWRCb3goQi53LCBCLmgsIEIudCksICdicmVlemUnLCBtYXRzKTtcbiAgICBpZiAoaW5Ccm93c2VyKSB7XG4gICAgICAvLyAxMiB4IDkgc2xvdHMgcGVyIHBhbmVsLCB0aGUgc2xvdCBmbG9vcnMgbGlmdGVkIHRvIGEgMC42IG11bHRpcGxpZXIgc28gdGhlIGdhdGUgbmV2ZXIgcmVhZHNcbiAgICAgIC8vIGEgc2NyZWVuIGFzIGEgZmllbGQgb2YgaG9sZXNcbiAgICAgIGNvbnN0IFtjLCBjdHhdID0gY2FudmFzKDI1NiwgMjU2KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCAyNTYsIDI1Nik7XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDk7IHIrKykgZm9yIChsZXQgcSA9IDA7IHEgPCAxMjsgcSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSAxMCArIHEgKiAyMCwgeSA9IDE0ICsgciAqIDI2O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMCwgMCwgMCwgMC40MCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMTQsIDEwKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDAsIDAsIDAsIDAuMTgpJzsgY3R4LmZpbGxSZWN0KHgsIHkgKyAxMCwgMTQsIDMpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC4wKSc7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogMjU2LCB5ID0gcm5kKCkgKiAyNTYsIHIgPSA4ICsgcm5kKCkgKiAyNDtcbiAgICAgICAgY29uc3QgZ2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLCAncmdiYSgzMCwgMzAsIDI2LCAnICsgKDAuMDQgKyBybmQoKSAqIDAuMTApLnRvRml4ZWQoMykgKyAnKScpOyBnZy5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMzAsIDMwLCAyNiwgMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGdnOyBjdHguZmlsbFJlY3QoeCAtIHIsIHkgLSByLCByICogMiwgciAqIDIpOyB9XG4gICAgICBiaW5kKCdicmVlemUnLCBjKTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBkb2ctbGVnIHN0YWlycywgeDI0XG4gICAqIFR3byBmbGlnaHRzIHBlciBmbG9vciBpbiBlYWNoIHRvd2VyJ3MgY2F2aXR5OiB0aGUgb3V0ZXIgb25lIGFnYWluc3QgdGhlIHNsb3QgcmlzZXMgdG93YXJkICtaLFxuICAgKiB0aGUgaW5uZXIgb25lIGJlaGluZCBpdCBiYWNrIHRvd2FyZCAtWiwgc28gdGhlIHNsb3Qgc2hvd3MgdGhlIHppZ3phZyB0aGUgcGxhdGUgc2hvd3MuIEluc3RhbmNlZFxuICAgKiBvbiB0aGUgY29uY3JldGUgbWF0ZXJpYWwgd2l0aCB0aGUgaW5uZXIgZmxpZ2h0IHRpbnRlZCBpbnRvIHRoZSBjYXZpdHkncyBzaGFkZS4gKi9cbiAge1xuICAgIGNvbnN0IFNUID0gRy5zdGFpcjtcbiAgICBjb25zdCByaXNlID0gRy5waXRjaCAvIDIsIHJ1biA9IFMuejEgLSBTLnowIC0gMiAqIFNULm1hcmdpbjtcbiAgICBjb25zdCBMID0gTWF0aC5oeXBvdChydW4sIHJpc2UpLCBhID0gTWF0aC5hdGFuMihyaXNlLCBydW4pLCB6YyA9IChTLnowICsgUy56MSkgLyAyO1xuICAgIGNvbnN0IGdlbyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShTVC53LCBTVC50LCBMKTtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXSwgdGludHM6IG51bWJlcltdID0gW107XG4gICAgY29uc3Qgcm90ID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIGFuZzogbnVtYmVyKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICBuZXcgVEhSRUUuVmVjdG9yMyh4LCB5LCB6KSwgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDEsIDAsIDApLCBhbmcpLFxuICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIGZvciAoY29uc3QgcyBvZiBbLTEsIDFdKSBmb3IgKGNvbnN0IHlrIG9mIEYuc2xpY2UoMCwgU1QuZmxvb3JzKSkge1xuICAgICAgbWF0cy5wdXNoKHJvdChzICogKGh4IC0gU1QuaW5zZXQgLSBTVC53IC8gMiksIHlrICsgcmlzZSAvIDIgKyBTVC50IC8gMiwgemMsIC1hKSk7IHRpbnRzLnB1c2goMHhmNGY0ZjApO1xuICAgICAgbWF0cy5wdXNoKHJvdChzICogKFMueElubmVyICsgU1QuaW5zZXQgKyBTVC53IC8gMiksIHlrICsgcmlzZSAqIDEuNSArIFNULnQgLyAyLCB6YywgYSkpOyB0aW50cy5wdXNoKDB4ZDJkMmNkKTtcbiAgICB9XG4gICAgYWRkSW5zdCgnZmxpZ2h0cycsICdTdGFpciBmbGlnaHRzJywgZ2VvLCAnc3RhaXInLCBtYXRzLCB0aW50cyk7XG4gICAgLy8gdGhlIGhhbGYgbGFuZGluZyBhdCB0aGUgZnJvbnQgZW5kIG9mIHRoZSBjYXZpdHkgd2hlcmUgdGhlIGZsaWdodHMgdHVybiwgb25lIHBlciBmbG9vclxuICAgIGNvbnN0IExEID0gRy5sYW5kaW5nO1xuICAgIGNvbnN0IGxtOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgWy0xLCAxXSkgZm9yIChjb25zdCB5ayBvZiBGLnNsaWNlKDAsIFNULmZsb29ycykpXG4gICAgICBsbS5wdXNoKGF0KHMgKiAoUy54SW5uZXIgKyBoeCkgLyAyLCB5ayArIHJpc2UgKyAoTEQueTEgLSBMRC55MCkgLyAyICsgTEQueTAsIFMuejEgLSBMRC5kIC8gMiAtIFNULm1hcmdpbikpO1xuICAgIGFkZEluc3QoJ2xhbmRpbmdzJywgJ1N0YWlyIGxhbmRpbmdzJywgbmV3IFRIUkVFLkJveEdlb21ldHJ5KGh4IC0gUy54SW5uZXIgLSAyICogU1QubWFyZ2luLCBMRC55MSAtIExELnkwLCBMRC5kKSwgJ3N0YWlyJywgbG0pO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBwbGFudHMgb24gZm91ciBjb3BpbmdzLCBsYXVuZHJ5IG9uIHR3byBiYXlzICovXG4gIHtcbiAgICBjb25zdCBsZWFmID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCB6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIsIHRvbmU6IG51bWJlcltdKSA9PiB7XG4gICAgICBjb25zdCBnID0gYm94QXQoeCwgeSwgeiwgdywgaCwgZCk7XG4gICAgICBjb25zdCBjID0gbmV3IEZsb2F0MzJBcnJheShnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSArPSAzKSB7IGNbaV0gPSB0b25lWzBdOyBjW2kgKyAxXSA9IHRvbmVbMV07IGNbaSArIDJdID0gdG9uZVsyXTsgfVxuICAgICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjLCAzKSk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuICAgIGNvbnN0IHBsYW50ID0gbWVyZ2VHZW9zKFtcbiAgICAgIGxlYWYoLTAuMzIsIDAuMjQsIDAuMCwgMC41LCAwLjQ4LCAwLjQyLCBbMSwgMSwgMV0pLCBsZWFmKDAuMTQsIDAuMzIsIDAuMDYsIDAuNDIsIDAuNjQsIDAuMzYsIFswLjc4LCAwLjksIDAuN10pLFxuICAgICAgbGVhZigwLjUyLCAwLjE5LCAtMC4wNSwgMC4zNiwgMC4zOCwgMC4zMiwgWzAuOSwgMC44MiwgMC41NV0pLCBsZWFmKDAuMSwgMC41NiwgLTAuMSwgMC4yMiwgMC4zLCAwLjIsIFswLjg1LCAxLCAwLjhdKSxcbiAgICBdKTtcbiAgICBjb25zdCB5VG9wID0gKGs6IG51bWJlcikgPT4gRltrXSArIEcuc3BhbmRyZWxIICsgRy5jb3BpbmdUO1xuICAgIGFkZEluc3QoJ3BsYW50cycsICdQb3R0ZWQgcGxhbnRzJywgcGxhbnQsICdmb2xpYWdlJyxcbiAgICAgIChHLnBsYW50cyBhcyBudW1iZXJbXVtdKS5tYXAoKFtiLCBrXSkgPT4gYXQoQlhbYl0gKyAwLjMsIHlUb3AoayksIHpTIC0gMC4yMikpKTtcbiAgICBjb25zdCBnYXJtZW50ID0gKHg6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGR6OiBudW1iZXIsIHRvbmU6IG51bWJlcltdKSA9PiB7XG4gICAgICBjb25zdCBnID0gYm94QXQoeCwgMS45NSAtIGggLyAyLCBkeiwgdywgaCwgMC4wMik7XG4gICAgICBjb25zdCBjID0gbmV3IEZsb2F0MzJBcnJheShnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCAqIDMpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSArPSAzKSB7IGNbaV0gPSB0b25lWzBdOyBjW2kgKyAxXSA9IHRvbmVbMV07IGNbaSArIDJdID0gdG9uZVsyXTsgfVxuICAgICAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjLCAzKSk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuICAgIGNvbnN0IHdhc2ggPSBtZXJnZUdlb3MoW1xuICAgICAgZ2FybWVudCgtMC40NSwgMC4zNiwgMC41MiwgMC4wLCBbMC45MiwgMC45MiwgMC45XSksIGdhcm1lbnQoMC4wLCAwLjI4LCAwLjYyLCAwLjAzLCBbMC41NSwgMC42MiwgMC43NV0pLFxuICAgICAgZ2FybWVudCgwLjQyLCAwLjQsIDAuNDQsIC0wLjAyLCBbMC43LCAwLjY4LCAwLjY2XSksIGdhcm1lbnQoMC44NSwgMC4zLCAwLjUsIDAuMDIsIFswLjg2LCAwLjgsIDAuN10pLFxuICAgIF0pO1xuICAgIGFkZEluc3QoJ2xhdW5kcnknLCAnSGFuZ2luZyBsYXVuZHJ5Jywgd2FzaCwgJ2Nsb3RoJyxcbiAgICAgIChHLmxhdW5kcnkgYXMgbnVtYmVyW11bXSkubWFwKChbYiwga10pID0+IGF0KEJYW2JdIC0gMC4yLCBGW2tdLCB6QiArIDAuNDUpKSwgWzB4ZmZmZmZmLCAweGU4ZTZlMF0pO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlQ29uY3JldGVXYWxrVXBGbGF0QmxvY2tNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IE9ORS4gU3RhdGljIGxhbmRtYXJrIGdlb21ldHJ5IC0tIG5vdGhpbmcgb3BlbnMsIHR1cm5zIG9yIHN3aW5ncy4gQSBuYW1lZCBwaXZvdCBpcyBhXG4gICAgLy8gcHJvbWlzZSB0aGF0IGEgcGFydCB0dXJucyBvbiBpdCwgYW5kIGEgcHJvcCB0aGF0IGRlY2xhcmVzIHBpdm90cyBpdCBoYXMgbm8gbWVjaGFuaXNtcyBmb3JcbiAgICAvLyBoYXMgZGVzY3JpYmVkIGEgbWFjaGluZSB0aGF0IGRvZXMgbm90IGV4aXN0LlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuXG4gICAgLy8gU29ja2V0czogTk9ORS4gTm90aGluZyBhdHRhY2hlcyB0byB0aGlzIHByb3AgYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBNkN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxJQUNqQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLE1BQ2hCLGVBQWU7QUFBQSxJQUNqQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLE1BQU07QUFBQSxJQUNOLE1BQU07QUFBQSxJQUNOLFVBQVU7QUFBQSxJQUNWLFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULFVBQVU7QUFBQSxNQUNSO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxJQUNULGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFdBQVc7QUFBQSxJQUNYLFNBQVM7QUFBQSxJQUNULFlBQVk7QUFBQSxJQUNaLFdBQVc7QUFBQSxJQUNYLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxNQUNYLGNBQWM7QUFBQSxNQUNkLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxNQUFNO0FBQUEsSUFDUjtBQUFBLElBQ0EsT0FBTztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxN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
