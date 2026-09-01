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

// assets/student-dormitory-block/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createStudentDormitoryBlockModel: () => createStudentDormitoryBlockModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "student-dormitory-block",
  "name": "Student Dormitory Block",
  "exportName": "StudentDormitoryBlock",
  "envelope": "Envelope 14.90 x 24.00 x 13.30 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "tile",
      "color": 14469544,
      "roughness": 0.85,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "band",
      "color": 6707012,
      "roughness": 0.8,
      "metalness": 0.05
    },
    {
      "id": "paint",
      "color": 14340800,
      "roughness": 0.9,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 11183e3,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "grille",
      "color": 5794140,
      "roughness": 0.45,
      "metalness": 0.1
    },
    {
      "id": "recess",
      "color": 6574138,
      "roughness": 0.9,
      "metalness": 0
    },
    {
      "id": "cond",
      "color": 12170666,
      "roughness": 0.6,
      "metalness": 0.15,
      "vertexColors": true
    },
    {
      "id": "cloth",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true,
      "doubleSided": true
    },
    {
      "id": "streak",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "opacity": 0.85
    },
    {
      "id": "shutter",
      "color": 9868943,
      "roughness": 0.55,
      "metalness": 0.25
    },
    {
      "id": "glass",
      "color": 5204578,
      "roughness": 0.12,
      "metalness": 0,
      "opacity": 0.92,
      "envMapIntensity": 1
    },
    {
      "id": "sign",
      "color": 16777215,
      "roughness": 0.75,
      "metalness": 0
    },
    {
      "id": "steel",
      "color": 6834232,
      "roughness": 0.75,
      "metalness": 0.3
    },
    {
      "id": "tank",
      "color": 9077882,
      "roughness": 0.65,
      "metalness": 0.35
    }
  ],
  "geometry": {
    "hx": 7.18,
    "hz": 6.4,
    "t": 0.3,
    "innerX": 6.88,
    "innerZ": 6.1,
    "facadeT": 0.3,
    "top": 20,
    "deckY": 18.6,
    "deckT": 0.2,
    "floors": [
      3.42,
      6.42,
      9.42,
      12.42,
      15.42
    ],
    "bays": [
      -5.4,
      -2.77,
      2.77,
      5.4
    ],
    "pitch": 3,
    "win": {
      "w": 1.7,
      "y0": 1.15,
      "y1": 2.55,
      "inset": 0.15,
      "t": 0.1
    },
    "band": {
      "h": 0.3,
      "proud": 0.03
    },
    "balcony": {
      "half": 0.95,
      "boxHalf": 1.075,
      "parapet": 1.15,
      "open0": 1.13,
      "open1": 2.71,
      "proud": 0.45,
      "liner": 0.3,
      "back": 5.2
    },
    "fascia": {
      "y0": 3.3,
      "y1": 3.78,
      "proud": 0.45
    },
    "ground": {
      "top": 3.3,
      "holeY0": 0.1,
      "holeY1": 3.1,
      "entrance": {
        "half": 0.95,
        "y1": 3.2,
        "depth": 2
      },
      "shutters": [
        [
          -6.5,
          -3.9
        ],
        [
          -3.6,
          -1.3
        ],
        [
          1.3,
          3.9
        ]
      ],
      "glass": [
        4.2,
        6.5
      ],
      "inset": 0.15
    },
    "stair": {
      "steps": 6,
      "rise": 0.16,
      "tread": 0.26,
      "z0": 6
    },
    "sign": {
      "x0": -2.7,
      "x1": 2.8,
      "y0": 18.25,
      "y1": 19.5,
      "t": 0.15,
      "text": "DORMITORY",
      "ink": "#9a3538",
      "ground": "#ebe9e6"
    },
    "cond": {
      "w": 0.62,
      "h": 0.5,
      "d": 0.27,
      "fanR": 0.19,
      "fanTint": 0.5,
      "sideZ": [
        -0.95,
        -0.2
      ],
      "sideDy": 2.1,
      "balconyX": -0.5,
      "balconyDy": 2.4
    },
    "laundry": {
      "shirtFloors": [
        1,
        2
      ],
      "towelFloor": 3,
      "railY": 2.42
    },
    "tower": {
      "cx": 4.6,
      "cz": -3.6,
      "baseHalf": 1.5,
      "topHalf": 1.05,
      "y0": 18.8,
      "y1": 22,
      "tiers": 3,
      "leg": 0.14,
      "brace": 0.08,
      "platform": 2.5,
      "platformT": 0.08,
      "railH": 1,
      "ladderZ": -2.05,
      "rung": 0.3
    },
    "tank": {
      "r": 0.88,
      "h": 1.92
    },
    "grooves": {
      "u": [
        0.273,
        0.617,
        0.93
      ],
      "y": [
        3.55,
        6.27,
        9.27,
        12.27,
        15.27,
        18.27
      ]
    }
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
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function extrudeSlab(shape, y0, y1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
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
function createStudentDormitoryBlockModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Student Dormitory Block";
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
  const hx = G.hx, hz = G.hz, ix = G.innerX, iz = G.innerZ;
  const zFace = hz, zBack = hz - G.facadeT;
  const B = G.balcony, W = G.win, GR = G.ground, TW = G.tower;
  const inBrowser = typeof document !== "undefined";
  const span = (x0, x1, y0, y1, z0, z1) => boxAt((x0 + x1) / 2, (y0 + y1) / 2, (z0 + z1) / 2, x1 - x0, y1 - y0, z1 - z0);
  const rectShape = (x0, y0, x1, y1) => {
    const sh = new THREE.Shape();
    sh.moveTo(x0, y0);
    sh.lineTo(x1, y0);
    sh.lineTo(x1, y1);
    sh.lineTo(x0, y1);
    sh.closePath();
    return sh;
  };
  const rectHole = (sh, x0, y0, x1, y1) => {
    const p = new THREE.Path();
    p.moveTo(x0, y0);
    p.lineTo(x1, y0);
    p.lineTo(x1, y1);
    p.lineTo(x0, y1);
    p.closePath();
    sh.holes.push(p);
  };
  const planShape = (pts) => {
    const sh = new THREE.Shape();
    sh.moveTo(pts[0][0], -pts[0][1]);
    for (let i = 1; i < pts.length; i++) sh.lineTo(pts[i][0], -pts[i][1]);
    sh.closePath();
    return sh;
  };
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
  const tintWhere = (geo, rules) => {
    const p = geo.getAttribute("position");
    const col = new Float32Array(p.count * 3).fill(1);
    for (let i = 0; i < p.count; i++) {
      const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
      for (const [pred, k] of rules) if (pred(x, y, z)) {
        col[i * 3] = k;
        col[i * 3 + 1] = k;
        col[i * 3 + 2] = k;
      }
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return geo;
  };
  const tintAll = (geo, k) => {
    const n = geo.getAttribute("position").count;
    geo.setAttribute("color", new THREE.BufferAttribute(new Float32Array(n * 3).fill(k), 3));
    return geo;
  };
  const colourAll = (geo, hex) => {
    const c = new THREE.Color(hex), n = geo.getAttribute("position").count;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    geo.setAttribute("color", new THREE.BufferAttribute(arr, 3));
    return geo;
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
  const strut = (a, b, s) => {
    const dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2];
    const L = Math.hypot(dx, dy, dz);
    const g = new THREE.BoxGeometry(s, L, s);
    g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), new THREE.Vector3(dx, dy, dz).normalize()));
    g.translate((a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2);
    return g;
  };
  let seed = 31337;
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
  const bind = (matId, c, opts = {}) => {
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    if (opts.repeat !== false) {
      tex.wrapS = THREE.RepeatWrapping;
      tex.wrapT = THREE.RepeatWrapping;
    }
    tex.anisotropy = options.textureAnisotropy ?? 4;
    const m = materials[matId];
    m.map = tex;
    if (opts.white) m.color.set(16777215);
    if (opts.bump) {
      m.bumpMap = tex;
      m.bumpScale = opts.bump;
    }
    m.needsUpdate = true;
  };
  const softBlob = (ctx, x, y, rx, ry, rgb, a) => {
    const gg = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
    gg.addColorStop(0, "rgba(" + rgb + ", " + a.toFixed(3) + ")");
    gg.addColorStop(1, "rgba(" + rgb + ", 0)");
    ctx.save();
    ctx.translate(x, y);
    ctx.scale(rx, ry);
    ctx.fillStyle = gg;
    ctx.fillRect(-1, -1, 2, 2);
    ctx.restore();
  };
  const streakDown = (ctx, x, y, w, len, rgb, a) => {
    const gg = ctx.createLinearGradient(0, y, 0, y + len);
    gg.addColorStop(0, "rgba(" + rgb + ", " + a.toFixed(3) + ")");
    gg.addColorStop(1, "rgba(" + rgb + ", 0)");
    ctx.fillStyle = gg;
    ctx.fillRect(x, y, w, len);
  };
  {
    const parts = [];
    const sh = rectShape(-ix, 0, ix, G.top);
    for (const S of F) {
      for (const bx of BX) rectHole(sh, bx - W.w / 2, S + W.y0, bx + W.w / 2, S + W.y1);
      rectHole(sh, -B.half, S + B.open0, B.half, S + B.open1);
    }
    for (const [x0, x1] of GR.shutters) rectHole(sh, x0, GR.holeY0, x1, GR.holeY1);
    rectHole(sh, GR.glass[0], GR.holeY0, GR.glass[1], GR.holeY1);
    rectHole(sh, -GR.entrance.half, 0.02, GR.entrance.half, GR.entrance.y1);
    parts.push(extrudeAlongZ(sh, zBack, zFace));
    for (const S of F) {
      for (const s of [-1, 1]) {
        const x0 = s * (B.half - 0.01), x1 = s * (B.half + B.liner);
        parts.push(span(Math.min(x0, x1), Math.max(x0, x1), S + B.open0 - 0.02, S + B.open1 + 0.25, B.back, zBack + 0.02));
      }
      parts.push(span(-B.half - B.liner, B.half + B.liner, S + B.open1 - 0.01, S + B.open1 + 0.25, B.back, zBack + 0.02));
      parts.push(span(-B.half - 0.02, B.half + 0.02, S + B.open0 - 0.08, S + B.parapet, B.back, zBack + 0.02));
    }
    F.forEach((S, k) => parts.push(span(-B.boxHalf, B.boxHalf, k === 0 ? G.fascia.y1 + 0.01 : S, S + B.parapet, zFace - 0.02, zFace + B.proud)));
    parts.push(span(-hx - 0.02, hx + 0.02, G.fascia.y0, G.fascia.y1, zFace - 0.02, zFace + G.fascia.proud));
    {
      const E2 = GR.entrance, zN = zFace - E2.depth;
      const plan = planShape([[-ix, -iz], [ix, -iz], [ix, zBack], [E2.half, zBack], [E2.half, zN], [-E2.half, zN], [-E2.half, zBack], [-ix, zBack]]);
      parts.push(extrudeSlab(plan, 0, GR.top));
    }
    const shell = mergeGeos(parts);
    planarUV(shell, 2);
    const E = GR.entrance;
    tintWhere(shell, [
      [(x, y, z) => Math.abs(x) <= B.boxHalf + 0.2 && z <= zBack + 0.03 && F.some((S) => y >= S + B.open0 - 0.1 && y <= S + B.open1 + 0.3), 0.8],
      [(x, y, z) => Math.abs(x) <= E.half + 0.02 && y <= GR.top + 0.01 && z <= zFace - 5e-3 && z >= zFace - E.depth - 0.02, 0.55]
    ]);
    add("shell", "Tiled shell", shell, "tile");
    colliders["shell"] = {
      shape: "box",
      localCenter: [0, 12, 0.23],
      halfExtents: [7.45, 12, 6.63],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope including the tank tower, balcony boxes and flank condensers.'
    };
    if (inBrowser) {
      const [c, ctx] = canvas(512, 512);
      ctx.fillStyle = "#b8b8b8";
      ctx.fillRect(0, 0, 512, 512);
      const tp = 512 / 40;
      for (let r = 0; r < 40; r++) for (let q = 0; q < 40; q++) {
        const v = 245 + Math.round((rnd() - 0.5) * 26);
        ctx.fillStyle = "rgb(" + v + "," + (v - 1) + "," + (v - 4) + ")";
        ctx.fillRect(q * tp + 0.8, r * tp + 0.8, tp - 1.6, tp - 1.6);
      }
      for (let i = 0; i < 60; i++) softBlob(ctx, rnd() * 512, rnd() * 512, 30 + rnd() * 70, 30 + rnd() * 70, "60, 55, 45", 0.03 + rnd() * 0.05);
      bind("tile", c, { bump: 4e-3 });
    }
  }
  {
    const parts = [];
    const bp = G.band.proud;
    F.forEach((S, k) => {
      const y02 = S + G.pitch - G.band.h + 0.01, y12 = S + G.pitch;
      if (k < F.length - 1) {
        parts.push(span(-hx - 0.01, -B.boxHalf, y02, y12, zFace - 0.01, zFace + bp));
        parts.push(span(B.boxHalf, hx + 0.01, y02, y12, zFace - 0.01, zFace + bp));
        parts.push(span(-B.boxHalf, B.boxHalf, y02, y12, zFace - 0.02, zFace + B.proud - 0.01));
      } else {
        parts.push(span(-hx - 0.01, hx + 0.01, y02, y12, zFace - 0.01, zFace + bp));
      }
    });
    const [gx0, gx1] = GR.glass, zf0 = zFace - GR.inset + 0.02, zf1 = zf0 + 0.06;
    const y0 = GR.holeY0, y1 = GR.holeY1, doorX = gx0 + 1;
    parts.push(span(gx0 + 0.02, gx0 + 0.1, y0, y1, zf0, zf1));
    parts.push(span(gx1 - 0.1, gx1 - 0.02, y0, y1, zf0, zf1));
    parts.push(span(gx0 + 0.1, gx1 - 0.1, y1 - 0.08, y1, zf0, zf1));
    parts.push(span(gx0 + 0.1, gx1 - 0.1, y0, y0 + 0.1, zf0, zf1));
    parts.push(span(doorX - 0.04, doorX + 0.04, y0 + 0.1, y1 - 0.08, zf0, zf1));
    parts.push(span(gx0 + 0.1, doorX - 0.04, 1, 1.06, zf0, zf1));
    parts.push(span(gx0 + 0.1, doorX - 0.04, y0 + 0.1, 1, zf0 - 0.01, zf0 + 0.02));
    parts.push(span(doorX + 0.04, gx1 - 0.1, 0.85, 0.91, zf0, zf1));
    add("bands", "Spandrel bands and shopfront frame", mergeGeos(parts), "band");
  }
  {
    const parts = [];
    const wallUV = (g, kind) => {
      const p = g.getAttribute("position");
      const uv = new Float32Array(p.count * 2);
      for (let i = 0; i < p.count; i++) {
        const x = p.getX(i), y = p.getY(i), z = p.getZ(i);
        let u;
        if (kind === "px") u = (z + hz) / (2 * hz);
        else if (kind === "nx") u = (z + hz) / (2 * hz);
        else u = 0.12 + 0.06 * (x + hx) / (2 * hx);
        uv[i * 2] = u;
        uv[i * 2 + 1] = y / G.top;
      }
      g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
      return g;
    };
    parts.push(wallUV(span(ix, hx, 0, G.top - 0.02, -hz, zFace - 0.01), "px"));
    parts.push(wallUV(span(-hx, -ix, 0, G.top - 0.02, -hz, zFace - 0.01), "nx"));
    parts.push(wallUV(span(-ix, ix, 0, G.top - 0.02, -hz, -iz), "rear"));
    {
      const ST = G.stair, E = GR.entrance;
      const st = [];
      for (let i = 0; i < ST.steps; i++) st.push(span(-E.half + 0.02, E.half - 0.02, 0, ST.rise * (i + 1), ST.z0 - ST.tread * (i + 1), ST.z0 - ST.tread * i));
      st.push(span(-E.half + 0.02, E.half - 0.02, 0, ST.rise * ST.steps, zFace - E.depth + 5e-3, ST.z0 - ST.tread * ST.steps));
      st.push(span(-E.half - 0.3, E.half + 0.3, 0, 0.03, zFace + 5e-3, zFace + B.proud - 0.02));
      const g = mergeGeos(st);
      const n = g.getAttribute("position").count;
      const uv = new Float32Array(n * 2);
      for (let i = 0; i < n; i++) {
        uv[i * 2] = 0.15;
        uv[i * 2 + 1] = 0.5;
      }
      g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
      parts.push(g);
    }
    add("flanks", "Painted flanks, rear and entrance stair", mergeGeos(parts), "paint");
    if (inBrowser) {
      const [c, ctx] = canvas(1024, 1024);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 1024, 1024);
      const row = (y) => (1 - y / G.top) * 1024;
      const GV = G.grooves;
      ctx.fillStyle = "rgba(40, 36, 30, 0.38)";
      for (const u of GV.u) ctx.fillRect(u * 1024 - 2, row(19.4), 4, row(3.4) - row(19.4));
      for (const y of GV.y) ctx.fillRect(GV.u[0] * 1024 - 2, row(y) - 2, (0.985 - GV.u[0]) * 1024, 4);
      ctx.fillRect(0.985 * 1024 - 2, row(19.4), 4, row(3.4) - row(19.4));
      ctx.fillStyle = "rgba(40, 36, 30, 0.10)";
      for (const y of GV.y) ctx.fillRect(GV.u[0] * 1024, row(y) + 2, (0.985 - GV.u[0]) * 1024, 5);
      for (const S of F) for (const z of G.cond.sideZ) {
        const u = (z + hz) / (2 * hz) * 1024, y = row(S + G.cond.sideDy - G.cond.h / 2);
        for (let i = 0; i < 4; i++) streakDown(ctx, u - 14 + rnd() * 28, y, 4 + rnd() * 8, 60 + rnd() * 90, "55, 48, 38", 0.14 + rnd() * 0.2);
        softBlob(ctx, u, y + 30, 26, 40, "55, 48, 38", 0.16);
      }
      for (let i = 0; i < 26; i++) streakDown(ctx, rnd() * 1e3, row(19.4) + rnd() * 20, 3 + rnd() * 9, 60 + rnd() * 220, "60, 55, 45", 0.05 + rnd() * 0.12);
      for (let i = 0; i < 18; i++) streakDown(ctx, rnd() * 1e3, row(GV.y[0]) + 2, 3 + rnd() * 8, 60 + rnd() * 160, "60, 55, 45", 0.04 + rnd() * 0.1);
      const gb = ctx.createLinearGradient(0, row(2.2), 0, 1024);
      gb.addColorStop(0, "rgba(50, 45, 36, 0)");
      gb.addColorStop(1, "rgba(50, 45, 36, 0.22)");
      ctx.fillStyle = gb;
      ctx.fillRect(0, row(2.2), 1024, 1024 - row(2.2));
      for (let i = 0; i < 90; i++) softBlob(ctx, rnd() * 1024, rnd() * 1024, 30 + rnd() * 90, 40 + rnd() * 120, "55, 50, 40", 0.02 + rnd() * 0.05);
      for (let i = 0; i < 12; i++) softBlob(ctx, 20 + rnd() * 60, row(19.6) + rnd() * 120, 30 + rnd() * 40, 60 + rnd() * 120, "55, 50, 40", 0.1 + rnd() * 0.12);
      bind("paint", c, { repeat: false });
    }
  }
  {
    const parts = [];
    parts.push(span(-ix, ix, GR.top, G.deckY, -iz + 0.01, B.back));
    const E = GR.entrance, zN = zFace - E.depth;
    parts.push(span(-E.half + 0.01, E.half - 0.01, G.stair.steps * G.stair.rise, E.y1 - 0.02, zN + 5e-3, zN + 0.04));
    add("core", "Body core and entrance door", mergeGeos(parts), "recess");
  }
  {
    const parts = [];
    parts.push(span(-ix + 0.01, ix - 0.01, G.deckY, G.deckY + G.deckT, -iz + 0.02, zBack));
    add("deck", "Roof deck", mergeGeos(parts), "deck");
  }
  {
    const mats = [];
    for (const S of F) for (const bx of BX) mats.push(at(bx, S + (W.y0 + W.y1) / 2, zFace - W.inset - W.t / 2));
    addInst("grilles", "Barred windows", facedBox(W.w + 0.04, W.y1 - W.y0 + 0.04, W.t), "grille", mats);
    if (inBrowser) {
      const [c, ctx] = canvas(256, 208);
      ctx.fillStyle = "#274d3e";
      ctx.fillRect(0, 0, 256, 208);
      const gv = ctx.createLinearGradient(0, 0, 0, 208);
      gv.addColorStop(0, "rgba(20, 30, 24, 0.45)");
      gv.addColorStop(0.35, "rgba(20, 30, 24, 0)");
      gv.addColorStop(1, "rgba(160, 175, 165, 0.18)");
      ctx.fillStyle = gv;
      ctx.fillRect(0, 0, 256, 208);
      ctx.fillStyle = "#a8a49a";
      for (let x = 20; x < 246; x += 21) ctx.fillRect(x, 8, 5, 192);
      for (let y = 40; y < 190; y += 52) ctx.fillRect(8, y, 240, 5);
      ctx.fillStyle = "#244a3c";
      ctx.fillRect(8, 8, 240, 10);
      ctx.strokeStyle = "#3e5a48";
      ctx.lineWidth = 10;
      ctx.strokeRect(5, 5, 246, 198);
      ctx.strokeStyle = "#c9c4b8";
      ctx.lineWidth = 3;
      ctx.strokeRect(11, 11, 234, 186);
      bind("grille", c, { white: true, repeat: false });
    }
  }
  {
    const CD = G.cond;
    const body = boxAt(0, 0, 0, CD.w, CD.h, CD.d);
    const fan = new THREE.CylinderGeometry(CD.fanR, CD.fanR, 0.02, 20);
    fan.rotateX(Math.PI / 2);
    fan.translate(-0.06, 0, CD.d / 2 + 5e-3);
    fan.setAttribute("color", new THREE.BufferAttribute(new Float32Array(fan.getAttribute("position").count * 3).fill(CD.fanTint), 3));
    body.setAttribute("color", new THREE.BufferAttribute(new Float32Array(body.getAttribute("position").count * 3).fill(1), 3));
    const mats = [];
    for (const S of F) {
      for (const z of CD.sideZ) {
        mats.push(at(hx + CD.d / 2, S + CD.sideDy, z, Math.PI / 2));
        mats.push(at(-hx - CD.d / 2, S + CD.sideDy, z, -Math.PI / 2));
      }
      mats.push(at(CD.balconyX, S + CD.balconyDy, B.back + CD.d / 2 + 0.01));
    }
    addInst("condensers", "Air-conditioning condensers", mergeGeos([body, fan]), "cond", mats);
  }
  {
    const LD = G.laundry;
    const garment = (x, y, z, w, h, d, hex) => colourAll(boxAt(x, y, z, w, h, d), hex);
    const shirt = (x, hex, dz) => [
      garment(x, LD.railY - 0.32, dz, 0.4, 0.56, 0.03, hex),
      garment(x - 0.27, LD.railY - 0.14, dz + 0.01, 0.16, 0.22, 0.03, hex),
      garment(x + 0.27, LD.railY - 0.14, dz - 0.01, 0.16, 0.22, 0.03, hex)
    ];
    const rack = mergeGeos([
      ...shirt(-0.05, 14605524, 0),
      ...shirt(0.42, 3820138, -0.03),
      ...shirt(0.8, 7238758, 0.02),
      colourAll(boxAt(0.4, LD.railY, 0, 1.6, 0.03, 0.03), 10132116)
    ]);
    const rz = B.back + 0.55;
    addInst(
      "laundry",
      "Hanging shirts",
      rack,
      "cloth",
      LD.shirtFloors.map((k) => at(0, F[k], rz)),
      [16777215, 15262424]
    );
    const S = F[LD.towelFloor], yT = S + B.parapet;
    const towel = (x, w, hex) => [
      garment(x, yT + 0.02, zFace + 0.15, w, 0.04, 0.34, hex),
      garment(x, yT - 0.24, zFace + B.proud + 0.02, w, 0.52, 0.03, hex)
    ];
    add("towels", "Towels over the parapet", mergeGeos([...towel(-0.42, 0.62, 8030814), ...towel(0.3, 0.5, 7178920)]), "cloth");
  }
  {
    const q = new THREE.PlaneGeometry(W.w - 0.1, 0.95);
    q.translate(0, 0, 6e-3);
    const mats = [];
    const tints = [];
    let k = 0;
    for (const S of F) for (const bx of BX) {
      mats.push(at(bx, S + W.y0 - 0.5, zFace));
      tints.push([16777215, 13158600, 15132390, 11579568, 14211288][k * 7 % 5]);
      k++;
    }
    const inst = addInst("streaks", "Sill grime streaks", q, "streak", mats, tints);
    const sm = inst.material;
    sm.depthWrite = false;
    sm.polygonOffset = true;
    sm.polygonOffsetFactor = -1;
    if (!inBrowser) {
      sm.opacity = 0;
    } else {
      const [c, ctx] = canvas(256, 128);
      ctx.clearRect(0, 0, 256, 128);
      const g2 = ctx.createLinearGradient(0, 0, 0, 14);
      g2.addColorStop(0, "rgba(60, 52, 40, 0.45)");
      g2.addColorStop(1, "rgba(60, 52, 40, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, 256, 14);
      const anchors = [14, 30, 226, 242, 60 + rnd() * 50, 120 + rnd() * 40, 170 + rnd() * 40];
      for (const a0 of anchors) streakDown(ctx, a0 + (rnd() - 0.5) * 8, 0, 4 + rnd() * 9, 60 + rnd() * 68, "60, 52, 40", 0.3 + rnd() * 0.35);
      for (let i = 0; i < 6; i++) streakDown(ctx, rnd() * 250, 0, 2 + rnd() * 4, 30 + rnd() * 60, "60, 52, 40", 0.15 + rnd() * 0.2);
      bind("streak", c, { repeat: false });
    }
  }
  {
    const mats = GR.shutters.map(([x02, x12]) => at((x02 + x12) / 2, (GR.holeY0 + GR.holeY1) / 2, zFace - GR.inset - 0.04));
    const [x0, x1] = GR.shutters[0];
    addInst("shutters", "Roller shutters", facedBox(x1 - x0 + 0.04, GR.holeY1 - GR.holeY0 + 0.04, 0.08), "shutter", mats);
    if (inBrowser) {
      const [c, ctx] = canvas(256, 256);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 256, 256);
      const sp = 256 / 13;
      for (let i = 0; i < 13; i++) {
        const y = i * sp;
        const gg = ctx.createLinearGradient(0, y, 0, y + sp);
        gg.addColorStop(0, "rgba(30, 30, 28, 0.30)");
        gg.addColorStop(0.25, "rgba(30, 30, 28, 0.0)");
        gg.addColorStop(0.7, "rgba(30, 30, 28, 0.08)");
        gg.addColorStop(1, "rgba(30, 30, 28, 0.30)");
        ctx.fillStyle = gg;
        ctx.fillRect(0, y, 256, sp);
      }
      for (let i = 0; i < 30; i++) softBlob(ctx, rnd() * 256, rnd() * 256, 10 + rnd() * 30, 6 + rnd() * 14, "40, 38, 34", 0.04 + rnd() * 0.08);
      bind("shutter", c, { repeat: false });
    }
    const [gx0, gx1] = GR.glass;
    add("shopglass", "Shopfront pane", span(gx0 + 0.04, gx1 - 0.04, GR.holeY0 + 0.04, GR.holeY1 - 0.04, zFace - GR.inset - 0.02, zFace - GR.inset + 0.02), "glass");
  }
  {
    const S = G.sign;
    const g = new THREE.BoxGeometry(S.x1 - S.x0, S.y1 - S.y0, S.t);
    const uv = g.getAttribute("uv");
    for (let i = 0; i < uv.count; i++) if (i < 16 || i > 19) uv.setXY(i, 0.01, 0.01);
    g.translate((S.x0 + S.x1) / 2, (S.y0 + S.y1) / 2, zFace + 0.01 + S.t / 2);
    const mesh = add("sign", "Name board", g, "sign");
    const mat = mesh.material;
    if (!inBrowser) {
      mat.color.set(S.ground);
    } else {
      const c = document.createElement("canvas");
      c.width = 1024;
      c.height = 232;
      const ctx = c.getContext("2d");
      ctx.fillStyle = S.ground;
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.strokeStyle = "#b9b6b0";
      ctx.lineWidth = 8;
      ctx.strokeRect(4, 4, c.width - 8, c.height - 8);
      ctx.fillStyle = S.ink;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "bold 160px Arial, Helvetica, sans-serif";
      ctx.fillText(S.text, 512, 124);
      const tex = new THREE.CanvasTexture(c);
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.needsUpdate = true;
    }
  }
  {
    const parts = [];
    const cx = TW.cx, cz = TW.cz;
    const corner = (i, t) => {
      const f = t / TW.tiers, half = TW.baseHalf + (TW.topHalf - TW.baseHalf) * f;
      const sx = [1, -1, -1, 1][i], sz = [1, 1, -1, -1][i];
      return [cx + sx * half, TW.y0 + (TW.y1 - TW.y0) * f, cz + sz * half];
    };
    for (let i = 0; i < 4; i++) parts.push(strut(corner(i, 0), corner(i, TW.tiers), TW.leg));
    for (let t = 0; t <= TW.tiers; t++) for (let i = 0; i < 4; i++) {
      const a = corner(i, t), b = corner((i + 1) % 4, t);
      if (t > 0) parts.push(strut(a, b, TW.brace));
      if (t < TW.tiers) {
        parts.push(strut(a, corner((i + 1) % 4, t + 1), TW.brace));
        parts.push(strut(b, corner(i, t + 1), TW.brace));
      }
    }
    parts.push(boxAt(cx, TW.y1 + TW.platformT / 2, cz, TW.platform, TW.platformT, TW.platform));
    const ph = TW.platform / 2 - 0.05, ry = TW.y1 + TW.platformT;
    for (const [sx, sz] of [[1, 1], [-1, 1], [-1, -1], [1, -1]]) parts.push(boxAt(cx + sx * ph, ry + TW.railH / 2, cz + sz * ph, 0.05, TW.railH, 0.05));
    for (const yy of [ry + TW.railH, ry + TW.railH * 0.55]) {
      parts.push(boxAt(cx, yy, cz + ph, ph * 2 + 0.05, 0.04, 0.04));
      parts.push(boxAt(cx, yy, cz - ph, ph * 2 + 0.05, 0.04, 0.04));
      parts.push(boxAt(cx + ph, yy, cz, 0.04, 0.04, ph * 2 - 0.04));
      parts.push(boxAt(cx - ph, yy, cz, 0.04, 0.04, ph * 2 - 0.04));
    }
    const lz = TW.ladderZ, ly1 = ry + TW.railH;
    for (const sx of [-1, 1]) parts.push(boxAt(cx + sx * 0.22, (TW.y0 + ly1) / 2, lz, 0.05, ly1 - TW.y0, 0.05));
    for (let y = TW.y0 + 0.25; y < ly1 - 0.1; y += TW.rung) parts.push(boxAt(cx, y, lz, 0.44, 0.03, 0.03));
    add("tower", "Water-tank tower, railing and ladder", mergeGeos(parts), "steel");
  }
  {
    const TK = G.tank, r = TK.r;
    const prof = [
      [0, 0],
      [r * 0.96, 0],
      [r * 0.96, 0.05],
      [r, 0.08],
      [r, 0.55],
      [r * 0.96, 0.58],
      [r * 0.96, 0.63],
      [r, 0.66],
      [r, 1.12],
      [r * 0.96, 1.15],
      [r * 0.96, 1.2],
      [r, 1.23],
      [r, 1.62],
      [r * 0.94, 1.68],
      [r * 0.7, 1.8],
      [r * 0.35, 1.88],
      [0, TK.h]
    ];
    const g = lathe(prof, 24, TW.y1 + TW.platformT);
    g.translate(TW.cx, 0, TW.cz);
    add("tank", "Water tank", g, "tank");
    if (inBrowser) {
      const [c, ctx] = canvas(512, 256);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, 512, 256);
      for (let i = 0; i < 40; i++) streakDown(ctx, rnd() * 512, rnd() * 200, 3 + rnd() * 10, 40 + rnd() * 120, "120, 60, 25", 0.15 + rnd() * 0.35);
      for (let i = 0; i < 24; i++) softBlob(ctx, rnd() * 512, rnd() * 256, 10 + rnd() * 30, 8 + rnd() * 24, "110, 55, 22", 0.15 + rnd() * 0.3);
      for (const y of [8, 78, 150]) {
        ctx.fillStyle = "rgba(90, 45, 20, 0.35)";
        ctx.fillRect(0, y, 512, 4);
      }
      for (let i = 0; i < 300; i++) {
        ctx.fillStyle = "rgba(60, 60, 58, " + (0.05 + rnd() * 0.15).toFixed(2) + ")";
        ctx.fillRect(rnd() * 512, rnd() * 256, 2 + rnd() * 4, 1 + rnd() * 3);
      }
      bind("tank", c, { bump: 0.01 });
    }
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createStudentDormitoryBlockModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU3R1ZGVudCBEb3JtaXRvcnkgQmxvY2sgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgMTQuOTAgeCAyNC4wMCB4IDEzLjMwIG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAuXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBNT05VTUVOVEFMIGJ1aWxkaW5ncywgYW5kIHVubGlrZSB0aGUgc2hhcmVkIHJldGFpbCBtb2R1bGUgaXRzIGZvcm0gaXNcbiAqIG5vdCBhIGJveDogdGhlIHJlY29nbmlzYWJsZSBmZWF0dXJlIGlzIGEgY3VydmVkIG9yIHRpZXJlZCBwcm9maWxlIHRoYXQgaGFzIHRvIHN1cnZpdmUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20uIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBoZXJlIGlzIHRoZXJlZm9yZSB0aGUgTEFUSEUgLS1cbiAqIGEgcHJvZmlsZSByZXZvbHZlZCBhYm91dCArWSAtLSBhbmQgdGhlIHRpZXJlZC9zdGVwcGVkIG1lcmdlLCBub3QgdGhlIHBhcmFtZXRlcmlzZWQgc2hvcGZyb250LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIC8qKlxuICAgKiBXaGVyZSB0aGlzIHByb3AncyBzaGlwcGVkIGZpbGVzIGxpdmUsIHdpdGggYSB0cmFpbGluZyBzbGFzaC5cbiAgICpcbiAgICogVGhlIG1hcHMgYXJlIHJlY29yZGVkIGFzIGJhcmUgZmlsZW5hbWVzIGJlY2F1c2UgdGhlIGJ1bmRsZSBpcyBFVkFMVUFURURcbiAgICogcmF0aGVyIHRoYW4gaW1wb3J0ZWQ6IGl0IGhhcyBubyBpbXBvcnQubWV0YSBhbmQgbm8gY3VycmVudFNjcmlwdCwgc28gaXRcbiAgICogY2Fubm90IHNlZSBpdHMgb3duIFVSTC4gRXZlcnkgaG9zdCBkZXJpdmVzIHRoaXMgZnJvbSB0aGUgbW9kdWxlIFVSTC5cbiAgICovXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwic3R1ZGVudC1kb3JtaXRvcnktYmxvY2tcIixcbiAgICBcIm5hbWVcIjogXCJTdHVkZW50IERvcm1pdG9yeSBCbG9ja1wiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlN0dWRlbnREb3JtaXRvcnlCbG9ja1wiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxNC45MCB4IDI0LjAwIHggMTMuMzAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRpbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDQ2OTU0NCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC44NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImJhbmRcIixcbiAgICAgICAgXCJjb2xvclwiOiA2NzA3MDEyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMDVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwYWludFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE0MzQwODAwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTExODMwMDAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJncmlsbGVcIixcbiAgICAgICAgXCJjb2xvclwiOiA1Nzk0MTQwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJyZWNlc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA2NTc0MTM4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJjb25kXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTIxNzA2NjYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4xNSxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImNsb3RoXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZSxcbiAgICAgICAgXCJkb3VibGVTaWRlZFwiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RyZWFrXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuODVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzaHV0dGVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTg2ODk0MyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC41NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMC4yNVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdsYXNzXCIsXG4gICAgICAgIFwiY29sb3JcIjogNTIwNDU3OCxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC4xMixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJvcGFjaXR5XCI6IDAuOTIsXG4gICAgICAgIFwiZW52TWFwSW50ZW5zaXR5XCI6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzaWduXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJzdGVlbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDY4MzQyMzIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRhbmtcIixcbiAgICAgICAgXCJjb2xvclwiOiA5MDc3ODgyLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjY1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjM1XG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiaHhcIjogNy4xOCxcbiAgICAgIFwiaHpcIjogNi40LFxuICAgICAgXCJ0XCI6IDAuMyxcbiAgICAgIFwiaW5uZXJYXCI6IDYuODgsXG4gICAgICBcImlubmVyWlwiOiA2LjEsXG4gICAgICBcImZhY2FkZVRcIjogMC4zLFxuICAgICAgXCJ0b3BcIjogMjAsXG4gICAgICBcImRlY2tZXCI6IDE4LjYsXG4gICAgICBcImRlY2tUXCI6IDAuMixcbiAgICAgIFwiZmxvb3JzXCI6IFtcbiAgICAgICAgMy40MixcbiAgICAgICAgNi40MixcbiAgICAgICAgOS40MixcbiAgICAgICAgMTIuNDIsXG4gICAgICAgIDE1LjQyXG4gICAgICBdLFxuICAgICAgXCJiYXlzXCI6IFtcbiAgICAgICAgLTUuNCxcbiAgICAgICAgLTIuNzcsXG4gICAgICAgIDIuNzcsXG4gICAgICAgIDUuNFxuICAgICAgXSxcbiAgICAgIFwicGl0Y2hcIjogMyxcbiAgICAgIFwid2luXCI6IHtcbiAgICAgICAgXCJ3XCI6IDEuNyxcbiAgICAgICAgXCJ5MFwiOiAxLjE1LFxuICAgICAgICBcInkxXCI6IDIuNTUsXG4gICAgICAgIFwiaW5zZXRcIjogMC4xNSxcbiAgICAgICAgXCJ0XCI6IDAuMVxuICAgICAgfSxcbiAgICAgIFwiYmFuZFwiOiB7XG4gICAgICAgIFwiaFwiOiAwLjMsXG4gICAgICAgIFwicHJvdWRcIjogMC4wM1xuICAgICAgfSxcbiAgICAgIFwiYmFsY29ueVwiOiB7XG4gICAgICAgIFwiaGFsZlwiOiAwLjk1LFxuICAgICAgICBcImJveEhhbGZcIjogMS4wNzUsXG4gICAgICAgIFwicGFyYXBldFwiOiAxLjE1LFxuICAgICAgICBcIm9wZW4wXCI6IDEuMTMsXG4gICAgICAgIFwib3BlbjFcIjogMi43MSxcbiAgICAgICAgXCJwcm91ZFwiOiAwLjQ1LFxuICAgICAgICBcImxpbmVyXCI6IDAuMyxcbiAgICAgICAgXCJiYWNrXCI6IDUuMlxuICAgICAgfSxcbiAgICAgIFwiZmFzY2lhXCI6IHtcbiAgICAgICAgXCJ5MFwiOiAzLjMsXG4gICAgICAgIFwieTFcIjogMy43OCxcbiAgICAgICAgXCJwcm91ZFwiOiAwLjQ1XG4gICAgICB9LFxuICAgICAgXCJncm91bmRcIjoge1xuICAgICAgICBcInRvcFwiOiAzLjMsXG4gICAgICAgIFwiaG9sZVkwXCI6IDAuMSxcbiAgICAgICAgXCJob2xlWTFcIjogMy4xLFxuICAgICAgICBcImVudHJhbmNlXCI6IHtcbiAgICAgICAgICBcImhhbGZcIjogMC45NSxcbiAgICAgICAgICBcInkxXCI6IDMuMixcbiAgICAgICAgICBcImRlcHRoXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJzaHV0dGVyc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTYuNSxcbiAgICAgICAgICAgIC0zLjlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0zLjYsXG4gICAgICAgICAgICAtMS4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjMsXG4gICAgICAgICAgICAzLjlcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwiZ2xhc3NcIjogW1xuICAgICAgICAgIDQuMixcbiAgICAgICAgICA2LjVcbiAgICAgICAgXSxcbiAgICAgICAgXCJpbnNldFwiOiAwLjE1XG4gICAgICB9LFxuICAgICAgXCJzdGFpclwiOiB7XG4gICAgICAgIFwic3RlcHNcIjogNixcbiAgICAgICAgXCJyaXNlXCI6IDAuMTYsXG4gICAgICAgIFwidHJlYWRcIjogMC4yNixcbiAgICAgICAgXCJ6MFwiOiA2XG4gICAgICB9LFxuICAgICAgXCJzaWduXCI6IHtcbiAgICAgICAgXCJ4MFwiOiAtMi43LFxuICAgICAgICBcIngxXCI6IDIuOCxcbiAgICAgICAgXCJ5MFwiOiAxOC4yNSxcbiAgICAgICAgXCJ5MVwiOiAxOS41LFxuICAgICAgICBcInRcIjogMC4xNSxcbiAgICAgICAgXCJ0ZXh0XCI6IFwiRE9STUlUT1JZXCIsXG4gICAgICAgIFwiaW5rXCI6IFwiIzlhMzUzOFwiLFxuICAgICAgICBcImdyb3VuZFwiOiBcIiNlYmU5ZTZcIlxuICAgICAgfSxcbiAgICAgIFwiY29uZFwiOiB7XG4gICAgICAgIFwid1wiOiAwLjYyLFxuICAgICAgICBcImhcIjogMC41LFxuICAgICAgICBcImRcIjogMC4yNyxcbiAgICAgICAgXCJmYW5SXCI6IDAuMTksXG4gICAgICAgIFwiZmFuVGludFwiOiAwLjUsXG4gICAgICAgIFwic2lkZVpcIjogW1xuICAgICAgICAgIC0wLjk1LFxuICAgICAgICAgIC0wLjJcbiAgICAgICAgXSxcbiAgICAgICAgXCJzaWRlRHlcIjogMi4xLFxuICAgICAgICBcImJhbGNvbnlYXCI6IC0wLjUsXG4gICAgICAgIFwiYmFsY29ueUR5XCI6IDIuNFxuICAgICAgfSxcbiAgICAgIFwibGF1bmRyeVwiOiB7XG4gICAgICAgIFwic2hpcnRGbG9vcnNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMlxuICAgICAgICBdLFxuICAgICAgICBcInRvd2VsRmxvb3JcIjogMyxcbiAgICAgICAgXCJyYWlsWVwiOiAyLjQyXG4gICAgICB9LFxuICAgICAgXCJ0b3dlclwiOiB7XG4gICAgICAgIFwiY3hcIjogNC42LFxuICAgICAgICBcImN6XCI6IC0zLjYsXG4gICAgICAgIFwiYmFzZUhhbGZcIjogMS41LFxuICAgICAgICBcInRvcEhhbGZcIjogMS4wNSxcbiAgICAgICAgXCJ5MFwiOiAxOC44LFxuICAgICAgICBcInkxXCI6IDIyLFxuICAgICAgICBcInRpZXJzXCI6IDMsXG4gICAgICAgIFwibGVnXCI6IDAuMTQsXG4gICAgICAgIFwiYnJhY2VcIjogMC4wOCxcbiAgICAgICAgXCJwbGF0Zm9ybVwiOiAyLjUsXG4gICAgICAgIFwicGxhdGZvcm1UXCI6IDAuMDgsXG4gICAgICAgIFwicmFpbEhcIjogMSxcbiAgICAgICAgXCJsYWRkZXJaXCI6IC0yLjA1LFxuICAgICAgICBcInJ1bmdcIjogMC4zXG4gICAgICB9LFxuICAgICAgXCJ0YW5rXCI6IHtcbiAgICAgICAgXCJyXCI6IDAuODgsXG4gICAgICAgIFwiaFwiOiAxLjkyXG4gICAgICB9LFxuICAgICAgXCJncm9vdmVzXCI6IHtcbiAgICAgICAgXCJ1XCI6IFtcbiAgICAgICAgICAwLjI3MyxcbiAgICAgICAgICAwLjYxNyxcbiAgICAgICAgICAwLjkzXG4gICAgICAgIF0sXG4gICAgICAgIFwieVwiOiBbXG4gICAgICAgICAgMy41NSxcbiAgICAgICAgICA2LjI3LFxuICAgICAgICAgIDkuMjcsXG4gICAgICAgICAgMTIuMjcsXG4gICAgICAgICAgMTUuMjcsXG4gICAgICAgICAgMTguMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU3R1ZGVudERvcm1pdG9yeUJsb2NrTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdTdHVkZW50IERvcm1pdG9yeSBCbG9jayc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICBjb25zdCBGID0gRy5mbG9vcnMgYXMgbnVtYmVyW10sIEJYID0gRy5iYXlzIGFzIG51bWJlcltdO1xuICBjb25zdCBoeCA9IEcuaHggYXMgbnVtYmVyLCBoeiA9IEcuaHogYXMgbnVtYmVyLCBpeCA9IEcuaW5uZXJYIGFzIG51bWJlciwgaXogPSBHLmlubmVyWiBhcyBudW1iZXI7XG4gIGNvbnN0IHpGYWNlID0gaHosIHpCYWNrID0gaHogLSBHLmZhY2FkZVQ7ICAgICAgICAgIC8vIDYuNDAgLyA2LjEwOiB0aGUgZmFjYWRlIHNsYWJcbiAgY29uc3QgQiA9IEcuYmFsY29ueSwgVyA9IEcud2luLCBHUiA9IEcuZ3JvdW5kLCBUVyA9IEcudG93ZXI7XG4gIGNvbnN0IGluQnJvd3NlciA9IHR5cGVvZiBkb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBoZWxwZXJzICovXG4gIGNvbnN0IHNwYW4gPSAoeDA6IG51bWJlciwgeDE6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgejA6IG51bWJlciwgejE6IG51bWJlcikgPT5cbiAgICBib3hBdCgoeDAgKyB4MSkgLyAyLCAoeTAgKyB5MSkgLyAyLCAoejAgKyB6MSkgLyAyLCB4MSAtIHgwLCB5MSAtIHkwLCB6MSAtIHowKTtcbiAgY29uc3QgcmVjdFNoYXBlID0gKHgwOiBudW1iZXIsIHkwOiBudW1iZXIsIHgxOiBudW1iZXIsIHkxOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBzaCA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgIHNoLm1vdmVUbyh4MCwgeTApOyBzaC5saW5lVG8oeDEsIHkwKTsgc2gubGluZVRvKHgxLCB5MSk7IHNoLmxpbmVUbyh4MCwgeTEpOyBzaC5jbG9zZVBhdGgoKTtcbiAgICByZXR1cm4gc2g7XG4gIH07XG4gIGNvbnN0IHJlY3RIb2xlID0gKHNoOiBUSFJFRS5TaGFwZSwgeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDE6IG51bWJlciwgeTE6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKHgwLCB5MCk7IHAubGluZVRvKHgxLCB5MCk7IHAubGluZVRvKHgxLCB5MSk7IHAubGluZVRvKHgwLCB5MSk7IHAuY2xvc2VQYXRoKCk7XG4gICAgc2guaG9sZXMucHVzaChwKTtcbiAgfTtcbiAgLy8gQSBwbGFuIGluIFt4LCB6XSBwYWlycyBhcyBhIFNoYXBlIHdob3NlIHNlY29uZCBheGlzIGlzIC16LCBzbyBleHRydWRlU2xhYidzIHJvdGF0ZVgoLVBJLzIpXG4gIC8vIGxhbmRzIGl0IGF0IHRoZSBpbnRlbmRlZCB3b3JsZCB6LlxuICBjb25zdCBwbGFuU2hhcGUgPSAocHRzOiBudW1iZXJbXVtdKSA9PiB7XG4gICAgY29uc3Qgc2ggPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBzaC5tb3ZlVG8ocHRzWzBdWzBdLCAtcHRzWzBdWzFdKTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2gubGluZVRvKHB0c1tpXVswXSwgLXB0c1tpXVsxXSk7XG4gICAgc2guY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHNoO1xuICB9O1xuICAvLyB3b3JsZC1wbGFuYXIgVVZzIGJ5IGRvbWluYW50IG5vcm1hbCwgaW4gbWV0cmVzIG92ZXIgb25lIHRpbGVcbiAgY29uc3QgcGxhbmFyVVYgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKG4uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobi5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhuLmdldFooaSkpO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGF5ID49IGF4ICYmIGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICAgIGVsc2UgaWYgKGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgICB1dltpICogMl0gPSB1IC8gdGlsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyB0aWxlO1xuICAgIH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgfTtcbiAgLy8gYSBwZXItdmVydGV4IGxpbmVhciBtdWx0aXBsaWVyIHdoZXJldmVyIGEgcHJlZGljYXRlIG9uICh4LCB5LCB6KSBob2xkc1xuICBjb25zdCB0aW50V2hlcmUgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcnVsZXM6IFsoeDogbnVtYmVyLCB5OiBudW1iZXIsIHo6IG51bWJlcikgPT4gYm9vbGVhbiwgbnVtYmVyXVtdKSA9PiB7XG4gICAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gICAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMykuZmlsbCgxKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHAuZ2V0WChpKSwgeSA9IHAuZ2V0WShpKSwgeiA9IHAuZ2V0WihpKTtcbiAgICAgIGZvciAoY29uc3QgW3ByZWQsIGtdIG9mIHJ1bGVzKSBpZiAocHJlZCh4LCB5LCB6KSkgeyBjb2xbaSAqIDNdID0gazsgY29sW2kgKiAzICsgMV0gPSBrOyBjb2xbaSAqIDMgKyAyXSA9IGs7IH1cbiAgICB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgIHJldHVybiBnZW87XG4gIH07XG4gIGNvbnN0IHRpbnRBbGwgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgazogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoayksIDMpKTtcbiAgICByZXR1cm4gZ2VvO1xuICB9O1xuICBjb25zdCBjb2xvdXJBbGwgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCksIG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGNvbnN0IGFyciA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGFycltpICogM10gPSBjLnI7IGFycltpICogMyArIDFdID0gYy5nOyBhcnJbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShhcnIsIDMpKTtcbiAgICByZXR1cm4gZ2VvO1xuICB9O1xuICAvLyBhIGJveCB3aG9zZSArWiBmYWNlIGNhcnJpZXMgYSBjYW52YXMgYW5kIHdob3NlIG90aGVyIGZpdmUgZmFjZXMgc2FtcGxlIGEgcGxhaW4gY29ybmVyIG9mIGl0XG4gIGNvbnN0IGZhY2VkQm94ID0gKHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpO1xuICAgIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2JykgYXMgVEhSRUUuQnVmZmVyQXR0cmlidXRlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgaWYgKGkgPCAxNiB8fCBpID4gMTkpIHV2LnNldFhZKGksIDAuMDIsIDAuMDIpO1xuICAgIHJldHVybiBnO1xuICB9O1xuICBjb25zdCBhdCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB5YXcgPSAwKSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgbmV3IFRIUkVFLlZlY3RvcjMoeCwgeSwgeiksIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgeWF3KSxcbiAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gIC8vIGEgc3F1YXJlLXNlY3Rpb24gc3RydXQgZnJvbSBhIHRvIGJcbiAgY29uc3Qgc3RydXQgPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBzOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdLCBkeiA9IGJbMl0gLSBhWzJdO1xuICAgIGNvbnN0IEwgPSBNYXRoLmh5cG90KGR4LCBkeSwgZHopO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkocywgTCwgcyk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24obmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIG5ldyBUSFJFRS5WZWN0b3IzKGR4LCBkeSwgZHopLm5vcm1hbGl6ZSgpKSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAoYVsyXSArIGJbMl0pIC8gMik7XG4gICAgcmV0dXJuIGc7XG4gIH07XG4gIC8vIHNlZWRlZCBMQ0cgc28gZXZlcnkgY2FudmFzIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkXG4gIGxldCBzZWVkID0gMzEzMzc7XG4gIGNvbnN0IHJuZCA9ICgpID0+IHsgc2VlZCA9IChzZWVkICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gc2VlZCAvIDQyOTQ5NjcyOTY7IH07XG4gIGNvbnN0IGNhbnZhcyA9ICh3OiBudW1iZXIsIGg6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgYy53aWR0aCA9IHc7IGMuaGVpZ2h0ID0gaDtcbiAgICByZXR1cm4gW2MsIGMuZ2V0Q29udGV4dCgnMmQnLCB7IHdpbGxSZWFkRnJlcXVlbnRseTogdHJ1ZSB9KSFdIGFzIGNvbnN0O1xuICB9O1xuICBjb25zdCBiaW5kID0gKG1hdElkOiBzdHJpbmcsIGM6IEhUTUxDYW52YXNFbGVtZW50LCBvcHRzOiB7IGJ1bXA/OiBudW1iZXIsIHdoaXRlPzogYm9vbGVhbiwgcmVwZWF0PzogYm9vbGVhbiB9ID0ge30pID0+IHtcbiAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjKTtcbiAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgIGlmIChvcHRzLnJlcGVhdCAhPT0gZmFsc2UpIHsgdGV4LndyYXBTID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nOyB9XG4gICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgY29uc3QgbSA9IG1hdGVyaWFsc1ttYXRJZF07XG4gICAgbS5tYXAgPSB0ZXg7XG4gICAgaWYgKG9wdHMud2hpdGUpIG0uY29sb3Iuc2V0KDB4ZmZmZmZmKTtcbiAgICBpZiAob3B0cy5idW1wKSB7IG0uYnVtcE1hcCA9IHRleDsgbS5idW1wU2NhbGUgPSBvcHRzLmJ1bXA7IH1cbiAgICBtLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgfTtcbiAgY29uc3Qgc29mdEJsb2IgPSAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHg6IG51bWJlciwgeTogbnVtYmVyLCByeDogbnVtYmVyLCByeTogbnVtYmVyLCByZ2I6IHN0cmluZywgYTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZ2cgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoMCwgMCwgMCwgMCwgMCwgMSk7XG4gICAgZ2cuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKCcgKyByZ2IgKyAnLCAnICsgYS50b0ZpeGVkKDMpICsgJyknKTsgZ2cuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKCcgKyByZ2IgKyAnLCAwKScpO1xuICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoeCwgeSk7IGN0eC5zY2FsZShyeCwgcnkpOyBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCgtMSwgLTEsIDIsIDIpOyBjdHgucmVzdG9yZSgpO1xuICB9O1xuICBjb25zdCBzdHJlYWtEb3duID0gKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCB4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBsZW46IG51bWJlciwgcmdiOiBzdHJpbmcsIGE6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGdnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHksIDAsIHkgKyBsZW4pO1xuICAgIGdnLmFkZENvbG9yU3RvcCgwLCAncmdiYSgnICsgcmdiICsgJywgJyArIGEudG9GaXhlZCgzKSArICcpJyk7IGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgnICsgcmdiICsgJywgMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCh4LCB5LCB3LCBsZW4pO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIHRpbGVkIHNoZWxsXG4gICAqIE9ORSBjb21wb25lbnQ6IHRoZSAwLjMwIG0gZmFjYWRlIHNsYWIgMC4uMjAgd2l0aCBldmVyeSB3aW5kb3csIGJhbGNvbnkgYW5kIHNob3Agb3BlbmluZyBhcyBhXG4gICAqIHJlYWwgaG9sZTsgdGhlIGJhbGNvbnkgcmVjZXNzIGxpbmVycyBhbmQgZmxvb3IgcGx1Z3M7IHRoZSBmaXZlIHRpbGVkIHBhcmFwZXQgYm94ZXMgc3RhbmRpbmdcbiAgICogMC40NSBwcm91ZDsgdGhlIGZhc2NpYSBjYW5vcHkgb3ZlciB0aGUgc2hvcHM7IHRoZSBncm91bmQtZmxvb3IgYm9keSBhcyBhIHBsYW4gZXh0cnVzaW9uIHdpdGhcbiAgICogdGhlIGVudHJhbmNlIHR1bm5lbCBub3RjaGVkIG91dCBvZiBpdC4gRXZlcnkgam9pbnQgaXMgYW4gb3Bwb3NlZCBwYWlyIG9yIGFuIG92ZXJsYXAuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IHNoID0gcmVjdFNoYXBlKC1peCwgMCwgaXgsIEcudG9wKTtcbiAgICBmb3IgKGNvbnN0IFMgb2YgRikge1xuICAgICAgZm9yIChjb25zdCBieCBvZiBCWCkgcmVjdEhvbGUoc2gsIGJ4IC0gVy53IC8gMiwgUyArIFcueTAsIGJ4ICsgVy53IC8gMiwgUyArIFcueTEpO1xuICAgICAgcmVjdEhvbGUoc2gsIC1CLmhhbGYsIFMgKyBCLm9wZW4wLCBCLmhhbGYsIFMgKyBCLm9wZW4xKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBbeDAsIHgxXSBvZiBHUi5zaHV0dGVycyBhcyBudW1iZXJbXVtdKSByZWN0SG9sZShzaCwgeDAsIEdSLmhvbGVZMCwgeDEsIEdSLmhvbGVZMSk7XG4gICAgcmVjdEhvbGUoc2gsIEdSLmdsYXNzWzBdLCBHUi5ob2xlWTAsIEdSLmdsYXNzWzFdLCBHUi5ob2xlWTEpO1xuICAgIHJlY3RIb2xlKHNoLCAtR1IuZW50cmFuY2UuaGFsZiwgMC4wMiwgR1IuZW50cmFuY2UuaGFsZiwgR1IuZW50cmFuY2UueTEpO1xuICAgIHBhcnRzLnB1c2goZXh0cnVkZUFsb25nWihzaCwgekJhY2ssIHpGYWNlKSk7XG4gICAgLy8gYmFsY29ueSBsaW5lcnM6IHNpZGUgY2hlZWtzIGFuZCBjZWlsaW5nIGNvbnRpbnVpbmcgdGhlIHJldmVhbCAxIGNtIGluYm9hcmQsIGFuZCB0aGUgZmxvb3JcbiAgICAvLyBwbHVnIHRoYXQgaGlkZXMgdGhlIGhvbGUncyBib3R0b20gcmV2ZWFsIGluc2lkZSBpdHNlbGZcbiAgICBmb3IgKGNvbnN0IFMgb2YgRikge1xuICAgICAgZm9yIChjb25zdCBzIG9mIFstMSwgMV0pIHtcbiAgICAgICAgY29uc3QgeDAgPSBzICogKEIuaGFsZiAtIDAuMDEpLCB4MSA9IHMgKiAoQi5oYWxmICsgQi5saW5lcik7XG4gICAgICAgIHBhcnRzLnB1c2goc3BhbihNYXRoLm1pbih4MCwgeDEpLCBNYXRoLm1heCh4MCwgeDEpLCBTICsgQi5vcGVuMCAtIDAuMDIsIFMgKyBCLm9wZW4xICsgMC4yNSwgQi5iYWNrLCB6QmFjayArIDAuMDIpKTtcbiAgICAgIH1cbiAgICAgIHBhcnRzLnB1c2goc3BhbigtQi5oYWxmIC0gQi5saW5lciwgQi5oYWxmICsgQi5saW5lciwgUyArIEIub3BlbjEgLSAwLjAxLCBTICsgQi5vcGVuMSArIDAuMjUsIEIuYmFjaywgekJhY2sgKyAwLjAyKSk7XG4gICAgICBwYXJ0cy5wdXNoKHNwYW4oLUIuaGFsZiAtIDAuMDIsIEIuaGFsZiArIDAuMDIsIFMgKyBCLm9wZW4wIC0gMC4wOCwgUyArIEIucGFyYXBldCwgQi5iYWNrLCB6QmFjayArIDAuMDIpKTtcbiAgICB9XG4gICAgLy8gcGFyYXBldCBib3hlczogdGhlIGxvd2VzdCBzaXRzIG9uIHRoZSBmYXNjaWEsIHdoaWNoIGlzIGl0cyBiYW5kXG4gICAgRi5mb3JFYWNoKChTLCBrKSA9PiBwYXJ0cy5wdXNoKHNwYW4oLUIuYm94SGFsZiwgQi5ib3hIYWxmLCBrID09PSAwID8gRy5mYXNjaWEueTEgKyAwLjAxIDogUywgUyArIEIucGFyYXBldCwgekZhY2UgLSAwLjAyLCB6RmFjZSArIEIucHJvdWQpKSk7XG4gICAgLy8gZmFzY2lhIGNhbm9weSBvdmVyIHRoZSBzaG9wcywgZnVsbCB3aWR0aFxuICAgIHBhcnRzLnB1c2goc3BhbigtaHggLSAwLjAyLCBoeCArIDAuMDIsIEcuZmFzY2lhLnkwLCBHLmZhc2NpYS55MSwgekZhY2UgLSAwLjAyLCB6RmFjZSArIEcuZmFzY2lhLnByb3VkKSk7ICAgLy8gMiBjbSBwYXN0IHRoZSBmbGFuayBwbGFuZSBzbyBubyBiYm94IGZhY2UgaXMgc2hhcmVkXG4gICAgLy8gZ3JvdW5kLWZsb29yIGJvZHkgd2l0aCB0aGUgZW50cmFuY2UgdHVubmVsIG5vdGNoZWQgb3V0IG9mIGl0cyBmcm9udFxuICAgIHtcbiAgICAgIGNvbnN0IEUgPSBHUi5lbnRyYW5jZSwgek4gPSB6RmFjZSAtIEUuZGVwdGg7XG4gICAgICBjb25zdCBwbGFuID0gcGxhblNoYXBlKFtbLWl4LCAtaXpdLCBbaXgsIC1pel0sIFtpeCwgekJhY2tdLCBbRS5oYWxmLCB6QmFja10sIFtFLmhhbGYsIHpOXSwgWy1FLmhhbGYsIHpOXSwgWy1FLmhhbGYsIHpCYWNrXSwgWy1peCwgekJhY2tdXSk7XG4gICAgICBwYXJ0cy5wdXNoKGV4dHJ1ZGVTbGFiKHBsYW4sIDAsIEdSLnRvcCkpO1xuICAgIH1cbiAgICBjb25zdCBzaGVsbCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gICAgcGxhbmFyVVYoc2hlbGwsIDIuMCk7XG4gICAgY29uc3QgRSA9IEdSLmVudHJhbmNlO1xuICAgIHRpbnRXaGVyZShzaGVsbCwgW1xuICAgICAgWyh4LCB5LCB6KSA9PiBNYXRoLmFicyh4KSA8PSBCLmJveEhhbGYgKyAwLjIgJiYgeiA8PSB6QmFjayArIDAuMDMgJiYgRi5zb21lKChTKSA9PiB5ID49IFMgKyBCLm9wZW4wIC0gMC4xICYmIHkgPD0gUyArIEIub3BlbjEgKyAwLjMpLCAwLjgwXSxcbiAgICAgIFsoeCwgeSwgeikgPT4gTWF0aC5hYnMoeCkgPD0gRS5oYWxmICsgMC4wMiAmJiB5IDw9IEdSLnRvcCArIDAuMDEgJiYgeiA8PSB6RmFjZSAtIDAuMDA1ICYmIHogPj0gekZhY2UgLSBFLmRlcHRoIC0gMC4wMiwgMC41NV0sXG4gICAgXSk7XG4gICAgYWRkKCdzaGVsbCcsICdUaWxlZCBzaGVsbCcsIHNoZWxsLCAndGlsZScpO1xuICAgIGNvbGxpZGVyc1snc2hlbGwnXSA9IHtcbiAgICAgIHNoYXBlOiAnYm94JywgbG9jYWxDZW50ZXI6IFswLCAxMi4wLCAwLjIzXSwgaGFsZkV4dGVudHM6IFs3LjQ1LCAxMi4wLCA2LjYzXSxcbiAgICAgIG5vdGVzOiAnQXNzZXQgZGVjbGFyZXMgY29sbGlkZXIgXCJib3hcIi4gT25lIGNvbnZleCBwcm94eSBvdmVyIHRoZSB3aG9sZSBlbnZlbG9wZSBpbmNsdWRpbmcgdGhlIHRhbmsgdG93ZXIsIGJhbGNvbnkgYm94ZXMgYW5kIGZsYW5rIGNvbmRlbnNlcnMuJyxcbiAgICB9O1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIDUxMiBweCA9IDIuMCBtIG9mIG1vc2FpYzogNDAgeCA0MCB0aWxlcyBvZiA1MCBtbSB3aXRoIDEuNSBweCBncm91dCBhdCAwLjcyLCBwZXItdGlsZSB0b25lXG4gICAgICAvLyBqaXR0ZXIgb2YgKy01IHBlcmNlbnQgYW5kIGEgZmFpbnQgY2xvdWR5IG1vdHRsZS4gTXVsdGlwbGllciBzcGFjZSBvdmVyIHdoaXRlLlxuICAgICAgY29uc3QgW2MsIGN0eF0gPSBjYW52YXMoNTEyLCA1MTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjYjhiOGI4JzsgY3R4LmZpbGxSZWN0KDAsIDAsIDUxMiwgNTEyKTtcbiAgICAgIGNvbnN0IHRwID0gNTEyIC8gNDA7XG4gICAgICBmb3IgKGxldCByID0gMDsgciA8IDQwOyByKyspIGZvciAobGV0IHEgPSAwOyBxIDwgNDA7IHErKykge1xuICAgICAgICBjb25zdCB2ID0gMjQ1ICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjYpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYignICsgdiArICcsJyArICh2IC0gMSkgKyAnLCcgKyAodiAtIDQpICsgJyknO1xuICAgICAgICBjdHguZmlsbFJlY3QocSAqIHRwICsgMC44LCByICogdHAgKyAwLjgsIHRwIC0gMS42LCB0cCAtIDEuNik7XG4gICAgICB9XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHNvZnRCbG9iKGN0eCwgcm5kKCkgKiA1MTIsIHJuZCgpICogNTEyLCAzMCArIHJuZCgpICogNzAsIDMwICsgcm5kKCkgKiA3MCwgJzYwLCA1NSwgNDUnLCAwLjAzICsgcm5kKCkgKiAwLjA1KTtcbiAgICAgIGJpbmQoJ3RpbGUnLCBjLCB7IGJ1bXA6IDAuMDA0IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGRhcmsgYmFuZHMgYW5kIHRoZSBzaG9wZnJvbnQgZnJhbWUgKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgY29uc3QgYnAgPSBHLmJhbmQucHJvdWQ7XG4gICAgRi5mb3JFYWNoKChTLCBrKSA9PiB7XG4gICAgICBjb25zdCB5MCA9IFMgKyBHLnBpdGNoIC0gRy5iYW5kLmggKyAwLjAxLCB5MSA9IFMgKyBHLnBpdGNoO1xuICAgICAgaWYgKGsgPCBGLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgcGFydHMucHVzaChzcGFuKC1oeCAtIDAuMDEsIC1CLmJveEhhbGYsIHkwLCB5MSwgekZhY2UgLSAwLjAxLCB6RmFjZSArIGJwKSk7XG4gICAgICAgIHBhcnRzLnB1c2goc3BhbihCLmJveEhhbGYsIGh4ICsgMC4wMSwgeTAsIHkxLCB6RmFjZSAtIDAuMDEsIHpGYWNlICsgYnApKTtcbiAgICAgICAgcGFydHMucHVzaChzcGFuKC1CLmJveEhhbGYsIEIuYm94SGFsZiwgeTAsIHkxLCB6RmFjZSAtIDAuMDIsIHpGYWNlICsgQi5wcm91ZCAtIDAuMDEpKTsgICAvLyB1bmRlciB0aGUgcGFyYXBldCBib3ggYWJvdmUsIDEgY20gYmVoaW5kIGl0cyBmcm9udFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFydHMucHVzaChzcGFuKC1oeCAtIDAuMDEsIGh4ICsgMC4wMSwgeTAsIHkxLCB6RmFjZSAtIDAuMDEsIHpGYWNlICsgYnApKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBzaG9wZnJvbnQgZnJhbWU6IGphbWJzLCBoZWFkLCBzaWxsLCBkb29yIG11bGxpb24sIG1pZC1yYWlsIGFuZCBraWNrIHBhbmVsLCBwcm91ZCBvZiB0aGUgcGFuZVxuICAgIGNvbnN0IFtneDAsIGd4MV0gPSBHUi5nbGFzcyBhcyBudW1iZXJbXSwgemYwID0gekZhY2UgLSBHUi5pbnNldCArIDAuMDIsIHpmMSA9IHpmMCArIDAuMDY7XG4gICAgY29uc3QgeTAgPSBHUi5ob2xlWTAsIHkxID0gR1IuaG9sZVkxLCBkb29yWCA9IGd4MCArIDEuMDtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oZ3gwICsgMC4wMiwgZ3gwICsgMC4xMCwgeTAsIHkxLCB6ZjAsIHpmMSkpO1xuICAgIHBhcnRzLnB1c2goc3BhbihneDEgLSAwLjEwLCBneDEgLSAwLjAyLCB5MCwgeTEsIHpmMCwgemYxKSk7XG4gICAgcGFydHMucHVzaChzcGFuKGd4MCArIDAuMTAsIGd4MSAtIDAuMTAsIHkxIC0gMC4wOCwgeTEsIHpmMCwgemYxKSk7XG4gICAgcGFydHMucHVzaChzcGFuKGd4MCArIDAuMTAsIGd4MSAtIDAuMTAsIHkwLCB5MCArIDAuMTAsIHpmMCwgemYxKSk7XG4gICAgcGFydHMucHVzaChzcGFuKGRvb3JYIC0gMC4wNCwgZG9vclggKyAwLjA0LCB5MCArIDAuMTAsIHkxIC0gMC4wOCwgemYwLCB6ZjEpKTtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oZ3gwICsgMC4xMCwgZG9vclggLSAwLjA0LCAxLjAsIDEuMDYsIHpmMCwgemYxKSk7XG4gICAgcGFydHMucHVzaChzcGFuKGd4MCArIDAuMTAsIGRvb3JYIC0gMC4wNCwgeTAgKyAwLjEwLCAxLjAsIHpmMCAtIDAuMDEsIHpmMCArIDAuMDIpKTtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oZG9vclggKyAwLjA0LCBneDEgLSAwLjEwLCAwLjg1LCAwLjkxLCB6ZjAsIHpmMSkpO1xuICAgIGFkZCgnYmFuZHMnLCAnU3BhbmRyZWwgYmFuZHMgYW5kIHNob3Bmcm9udCBmcmFtZScsIG1lcmdlR2VvcyhwYXJ0cyksICdiYW5kJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBwYWludGVkIGZsYW5rcyBhbmQgcmVhclxuICAgKiBUd28gc2lkZSB3YWxscyBhbmQgdGhlIHJlYXIgd2FsbCwgb25lIGNyZWFtIGNvbXBvbmVudC4gVGhlICtYIGZsYW5rIGlzIHRoZSBvYnNlcnZlZCBvbmU7IHRoZVxuICAgKiAtWCBmbGFuayBtaXJyb3JzIGl0IGFuZCB0aGUgcmVhciBpcyBwbGFpbi4gVVZzOiB1IHJ1bnMgcmVhciAoMCkgdG8gZnJvbnQgKDEpIGFsb25nIGVhY2ggZmxhbmtcbiAgICogYW5kIHYgaXMgaGVpZ2h0IG92ZXIgMjAgbSwgc28gb25lIGNhbnZhcyBjYXJyaWVzIHRoZSBwYW5lbCBncm9vdmVzIGFuZCB0aGUgY29uZGVuc2VyIGRyaXBzIGF0XG4gICAqIHRoZWlyIG1lYXN1cmVkIHBvc2l0aW9uczsgdGhlIHJlYXIgc2FtcGxlcyBhIHBsYWluIGNvbHVtbiBvZiB0aGUgc2FtZSBjYW52YXMuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IHdhbGxVViA9IChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwga2luZDogJ3B4JyB8ICdueCcgfCAncmVhcicpID0+IHtcbiAgICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgICAgICBsZXQgdTogbnVtYmVyO1xuICAgICAgICBpZiAoa2luZCA9PT0gJ3B4JykgdSA9ICh6ICsgaHopIC8gKDIgKiBoeik7XG4gICAgICAgIGVsc2UgaWYgKGtpbmQgPT09ICdueCcpIHUgPSAoeiArIGh6KSAvICgyICogaHopO1xuICAgICAgICBlbHNlIHUgPSAwLjEyICsgMC4wNiAqICh4ICsgaHgpIC8gKDIgKiBoeCk7XG4gICAgICAgIHV2W2kgKiAyXSA9IHU7IHV2W2kgKiAyICsgMV0gPSB5IC8gRy50b3A7XG4gICAgICB9XG4gICAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgICByZXR1cm4gZztcbiAgICB9O1xuICAgIC8vIGZsYW5rIGFuZCByZWFyIHRvcHMgMiBjbSB1bmRlciB0aGUgdGlsZWQgcGFyYXBldCB0b3Agc28gbm8gYmJveCBmYWNlIGlzIHNoYXJlZCB3aXRoIHRoZSBzaGVsbFxuICAgIHBhcnRzLnB1c2god2FsbFVWKHNwYW4oaXgsIGh4LCAwLCBHLnRvcCAtIDAuMDIsIC1oeiwgekZhY2UgLSAwLjAxKSwgJ3B4JykpO1xuICAgIHBhcnRzLnB1c2god2FsbFVWKHNwYW4oLWh4LCAtaXgsIDAsIEcudG9wIC0gMC4wMiwgLWh6LCB6RmFjZSAtIDAuMDEpLCAnbngnKSk7XG4gICAgcGFydHMucHVzaCh3YWxsVVYoc3BhbigtaXgsIGl4LCAwLCBHLnRvcCAtIDAuMDIsIC1oeiwgLWl6KSwgJ3JlYXInKSk7XG4gICAgLy8gdGhlIHdoaXRlLXRpbGVkIGVudHJhbmNlIHN0YWlyIGFuZCBpdHMgcGF2aW5nLCBpbiB0aGUgc2FtZSBjcmVhbSwgc2FtcGxpbmcgYSBwbGFpbiBwYXRjaFxuICAgIHtcbiAgICAgIGNvbnN0IFNUID0gRy5zdGFpciwgRSA9IEdSLmVudHJhbmNlO1xuICAgICAgY29uc3Qgc3Q6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgU1Quc3RlcHM7IGkrKykgc3QucHVzaChzcGFuKC1FLmhhbGYgKyAwLjAyLCBFLmhhbGYgLSAwLjAyLCAwLCBTVC5yaXNlICogKGkgKyAxKSwgU1QuejAgLSBTVC50cmVhZCAqIChpICsgMSksIFNULnowIC0gU1QudHJlYWQgKiBpKSk7XG4gICAgICBzdC5wdXNoKHNwYW4oLUUuaGFsZiArIDAuMDIsIEUuaGFsZiAtIDAuMDIsIDAsIFNULnJpc2UgKiBTVC5zdGVwcywgekZhY2UgLSBFLmRlcHRoICsgMC4wMDUsIFNULnowIC0gU1QudHJlYWQgKiBTVC5zdGVwcykpO1xuICAgICAgc3QucHVzaChzcGFuKC1FLmhhbGYgLSAwLjMsIEUuaGFsZiArIDAuMywgMCwgMC4wMywgekZhY2UgKyAwLjAwNSwgekZhY2UgKyBCLnByb3VkIC0gMC4wMikpO1xuICAgICAgY29uc3QgZyA9IG1lcmdlR2VvcyhzdCk7XG4gICAgICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgdXZbaSAqIDJdID0gMC4xNTsgdXZbaSAqIDIgKyAxXSA9IDAuNTsgfVxuICAgICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICB9XG4gICAgYWRkKCdmbGFua3MnLCAnUGFpbnRlZCBmbGFua3MsIHJlYXIgYW5kIGVudHJhbmNlIHN0YWlyJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ3BhaW50Jyk7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gMTAyNCBweCA9IHRoZSAxMi44IG0gZmxhbmsgYWNyb3NzLCAyMCBtIHVwIChyb3dzIHJ1biB0b3AgdG8gYm90dG9tKS4gTXVsdGlwbGllciBvdmVyIHdoaXRlOlxuICAgICAgLy8gcmVjZXNzZWQgcGFuZWwgZ3Jvb3ZlcyA0IHB4IGF0IDAuNjIsIGEgc29mdCBzaGFkb3cgbGluZSB1bmRlciBlYWNoLCBjb25kZW5zZXIgZHJpcHMgZnJvbSB0aGVcbiAgICAgIC8vIHRlbiBzaWRlIHVuaXRzLCByYWluIHN0cmVha3Mgb2ZmIHRoZSBwYXJhcGV0LCBncmltZSBhdCB0aGUgYmFzZSBhbmQgdGhlIGNvcm5lcnMuXG4gICAgICBjb25zdCBbYywgY3R4XSA9IGNhbnZhcygxMDI0LCAxMDI0KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCAxMDI0LCAxMDI0KTtcbiAgICAgIGNvbnN0IHJvdyA9ICh5OiBudW1iZXIpID0+ICgxIC0geSAvIEcudG9wKSAqIDEwMjQ7XG4gICAgICBjb25zdCBHViA9IEcuZ3Jvb3ZlcztcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwgMzYsIDMwLCAwLjM4KSc7XG4gICAgICBmb3IgKGNvbnN0IHUgb2YgR1YudSBhcyBudW1iZXJbXSkgY3R4LmZpbGxSZWN0KHUgKiAxMDI0IC0gMiwgcm93KDE5LjQpLCA0LCByb3coMy40KSAtIHJvdygxOS40KSk7XG4gICAgICBmb3IgKGNvbnN0IHkgb2YgR1YueSBhcyBudW1iZXJbXSkgY3R4LmZpbGxSZWN0KEdWLnVbMF0gKiAxMDI0IC0gMiwgcm93KHkpIC0gMiwgKDAuOTg1IC0gR1YudVswXSkgKiAxMDI0LCA0KTtcbiAgICAgIGN0eC5maWxsUmVjdCgwLjk4NSAqIDEwMjQgLSAyLCByb3coMTkuNCksIDQsIHJvdygzLjQpIC0gcm93KDE5LjQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwgMzYsIDMwLCAwLjEwKSc7XG4gICAgICBmb3IgKGNvbnN0IHkgb2YgR1YueSBhcyBudW1iZXJbXSkgY3R4LmZpbGxSZWN0KEdWLnVbMF0gKiAxMDI0LCByb3coeSkgKyAyLCAoMC45ODUgLSBHVi51WzBdKSAqIDEwMjQsIDUpO1xuICAgICAgLy8gY29uZGVuc2VyIGRyaXBzOiB0d28gcGVyIGZsb29yIGF0IHRoZSB1bml0IHBvc2l0aW9ucywgZnJvbSB0aGUgdW5pdCBiYXNlIGRvd253YXJkXG4gICAgICBmb3IgKGNvbnN0IFMgb2YgRikgZm9yIChjb25zdCB6IG9mIEcuY29uZC5zaWRlWiBhcyBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCB1ID0gKHogKyBoeikgLyAoMiAqIGh6KSAqIDEwMjQsIHkgPSByb3coUyArIEcuY29uZC5zaWRlRHkgLSBHLmNvbmQuaCAvIDIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgc3RyZWFrRG93bihjdHgsIHUgLSAxNCArIHJuZCgpICogMjgsIHksIDQgKyBybmQoKSAqIDgsIDYwICsgcm5kKCkgKiA5MCwgJzU1LCA0OCwgMzgnLCAwLjE0ICsgcm5kKCkgKiAwLjIwKTtcbiAgICAgICAgc29mdEJsb2IoY3R4LCB1LCB5ICsgMzAsIDI2LCA0MCwgJzU1LCA0OCwgMzgnLCAwLjE2KTtcbiAgICAgIH1cbiAgICAgIC8vIHJhaW4gc3RyZWFrcyBoYW5naW5nIG9mZiB0aGUgcGFyYXBldCBsaW5lIGFuZCB0aGUgdG9wIGdyb292ZVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNjsgaSsrKSBzdHJlYWtEb3duKGN0eCwgcm5kKCkgKiAxMDAwLCByb3coMTkuNCkgKyBybmQoKSAqIDIwLCAzICsgcm5kKCkgKiA5LCA2MCArIHJuZCgpICogMjIwLCAnNjAsIDU1LCA0NScsIDAuMDUgKyBybmQoKSAqIDAuMTIpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxODsgaSsrKSBzdHJlYWtEb3duKGN0eCwgcm5kKCkgKiAxMDAwLCByb3coR1YueVswXSkgKyAyLCAzICsgcm5kKCkgKiA4LCA2MCArIHJuZCgpICogMTYwLCAnNjAsIDU1LCA0NScsIDAuMDQgKyBybmQoKSAqIDAuMTApO1xuICAgICAgLy8gZ3JpbWUgYXQgdGhlIGJhc2UgYW5kIHNvZnQgbW90dGxpbmcgZXZlcnl3aGVyZVxuICAgICAgY29uc3QgZ2IgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcm93KDIuMiksIDAsIDEwMjQpO1xuICAgICAgZ2IuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDUwLCA0NSwgMzYsIDApJyk7IGdiLmFkZENvbG9yU3RvcCgxLCAncmdiYSg1MCwgNDUsIDM2LCAwLjIyKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGdiOyBjdHguZmlsbFJlY3QoMCwgcm93KDIuMiksIDEwMjQsIDEwMjQgLSByb3coMi4yKSk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHNvZnRCbG9iKGN0eCwgcm5kKCkgKiAxMDI0LCBybmQoKSAqIDEwMjQsIDMwICsgcm5kKCkgKiA5MCwgNDAgKyBybmQoKSAqIDEyMCwgJzU1LCA1MCwgNDAnLCAwLjAyICsgcm5kKCkgKiAwLjA1KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTI7IGkrKykgc29mdEJsb2IoY3R4LCAyMCArIHJuZCgpICogNjAsIHJvdygxOS42KSArIHJuZCgpICogMTIwLCAzMCArIHJuZCgpICogNDAsIDYwICsgcm5kKCkgKiAxMjAsICc1NSwgNTAsIDQwJywgMC4xMCArIHJuZCgpICogMC4xMik7XG4gICAgICBiaW5kKCdwYWludCcsIGMsIHsgcmVwZWF0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBjb3JlOiBib2R5IGJveCwgcmVjZXNzIGJhY2sgd2FsbHMsIGRvb3IgKi9cbiAge1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgcGFydHMucHVzaChzcGFuKC1peCwgaXgsIEdSLnRvcCwgRy5kZWNrWSwgLWl6ICsgMC4wMSwgQi5iYWNrKSk7ICAgLy8gMSBjbSBvZmYgdGhlIHJlYXIgd2FsbDogdGhlIGdyb3VuZCBib2R5IGFuZCBkZWNrIGJ1dHQgdGhlIHNhbWUgd2FsbFxuICAgIGNvbnN0IEUgPSBHUi5lbnRyYW5jZSwgek4gPSB6RmFjZSAtIEUuZGVwdGg7XG4gICAgcGFydHMucHVzaChzcGFuKC1FLmhhbGYgKyAwLjAxLCBFLmhhbGYgLSAwLjAxLCBHLnN0YWlyLnN0ZXBzICogRy5zdGFpci5yaXNlLCBFLnkxIC0gMC4wMiwgek4gKyAwLjAwNSwgek4gKyAwLjA0KSk7XG4gICAgYWRkKCdjb3JlJywgJ0JvZHkgY29yZSBhbmQgZW50cmFuY2UgZG9vcicsIG1lcmdlR2VvcyhwYXJ0cyksICdyZWNlc3MnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZGVjaywgc3RhaXIsIHBhdmluZyAqL1xuICB7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBwYXJ0cy5wdXNoKHNwYW4oLWl4ICsgMC4wMSwgaXggLSAwLjAxLCBHLmRlY2tZLCBHLmRlY2tZICsgRy5kZWNrVCwgLWl6ICsgMC4wMiwgekJhY2spKTtcbiAgICBhZGQoJ2RlY2snLCAnUm9vZiBkZWNrJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2RlY2snKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYmFycmVkIHdpbmRvd3MsIHgyMCAqL1xuICB7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBTIG9mIEYpIGZvciAoY29uc3QgYnggb2YgQlgpIG1hdHMucHVzaChhdChieCwgUyArIChXLnkwICsgVy55MSkgLyAyLCB6RmFjZSAtIFcuaW5zZXQgLSBXLnQgLyAyKSk7XG4gICAgYWRkSW5zdCgnZ3JpbGxlcycsICdCYXJyZWQgd2luZG93cycsIGZhY2VkQm94KFcudyArIDAuMDQsIFcueTEgLSBXLnkwICsgMC4wNCwgVy50KSwgJ2dyaWxsZScsIG1hdHMpO1xuICAgIGlmIChpbkJyb3dzZXIpIHtcbiAgICAgIC8vIGRhcmsgZ3JlZW4gZ2xhc3MsIGEgMC4wNiBtIGdyaWxsZSBhdCBhIDAuMTIgbSBwaXRjaCBib3RoIHdheXMsIGEgZGFyayBmcmFtZSBhbmQgYSBzaWxsXG4gICAgICAvLyBzaGFkb3cuIFRoZSBncmlsbGUgY2FudmFzIGlzIG5vdCBhIG11bHRpcGxpZXIsIHNvIHRoZSBtYXRlcmlhbCBnb2VzIHdoaXRlIHVuZGVyIGl0LlxuICAgICAgY29uc3QgW2MsIGN0eF0gPSBjYW52YXMoMjU2LCAyMDgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMjc0ZDNlJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgMjA4KTtcbiAgICAgIGNvbnN0IGd2ID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDIwOCk7XG4gICAgICBndi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjAsIDMwLCAyNCwgMC40NSknKTsgZ3YuYWRkQ29sb3JTdG9wKDAuMzUsICdyZ2JhKDIwLCAzMCwgMjQsIDApJyk7IGd2LmFkZENvbG9yU3RvcCgxLCAncmdiYSgxNjAsIDE3NSwgMTY1LCAwLjE4KScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGd2OyBjdHguZmlsbFJlY3QoMCwgMCwgMjU2LCAyMDgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjYThhNDlhJztcbiAgICAgIGZvciAobGV0IHggPSAyMDsgeCA8IDI0NjsgeCArPSAyMSkgY3R4LmZpbGxSZWN0KHgsIDgsIDUsIDE5Mik7XG4gICAgICBmb3IgKGxldCB5ID0gNDA7IHkgPCAxOTA7IHkgKz0gNTIpIGN0eC5maWxsUmVjdCg4LCB5LCAyNDAsIDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMjQ0YTNjJzsgY3R4LmZpbGxSZWN0KDgsIDgsIDI0MCwgMTApO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gJyMzZTVhNDgnOyBjdHgubGluZVdpZHRoID0gMTA7IGN0eC5zdHJva2VSZWN0KDUsIDUsIDI0NiwgMTk4KTtcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9ICcjYzljNGI4JzsgY3R4LmxpbmVXaWR0aCA9IDM7IGN0eC5zdHJva2VSZWN0KDExLCAxMSwgMjM0LCAxODYpO1xuICAgICAgYmluZCgnZ3JpbGxlJywgYywgeyB3aGl0ZTogdHJ1ZSwgcmVwZWF0OiBmYWxzZSB9KTtcbiAgICB9XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbmRlbnNlcnM6IHRlbiBwZXIgZmxhbmssIG9uZSBwZXIgYmFsY29ueSAqL1xuICB7XG4gICAgY29uc3QgQ0QgPSBHLmNvbmQ7XG4gICAgY29uc3QgYm9keSA9IGJveEF0KDAsIDAsIDAsIENELncsIENELmgsIENELmQpO1xuICAgIGNvbnN0IGZhbiA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KENELmZhblIsIENELmZhblIsIDAuMDIsIDIwKTtcbiAgICBmYW4ucm90YXRlWChNYXRoLlBJIC8gMik7IGZhbi50cmFuc2xhdGUoLTAuMDYsIDAsIENELmQgLyAyICsgMC4wMDUpO1xuICAgIGZhbi5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGZhbi5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQgKiAzKS5maWxsKENELmZhblRpbnQpLCAzKSk7XG4gICAgYm9keS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGJvZHkuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50ICogMykuZmlsbCgxKSwgMykpO1xuICAgIGNvbnN0IG1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgUyBvZiBGKSB7XG4gICAgICBmb3IgKGNvbnN0IHogb2YgQ0Quc2lkZVogYXMgbnVtYmVyW10pIHtcbiAgICAgICAgbWF0cy5wdXNoKGF0KGh4ICsgQ0QuZCAvIDIsIFMgKyBDRC5zaWRlRHksIHosIE1hdGguUEkgLyAyKSk7XG4gICAgICAgIG1hdHMucHVzaChhdCgtaHggLSBDRC5kIC8gMiwgUyArIENELnNpZGVEeSwgeiwgLU1hdGguUEkgLyAyKSk7XG4gICAgICB9XG4gICAgICBtYXRzLnB1c2goYXQoQ0QuYmFsY29ueVgsIFMgKyBDRC5iYWxjb255RHksIEIuYmFjayArIENELmQgLyAyICsgMC4wMSkpO1xuICAgIH1cbiAgICBhZGRJbnN0KCdjb25kZW5zZXJzJywgJ0Fpci1jb25kaXRpb25pbmcgY29uZGVuc2VycycsIG1lcmdlR2VvcyhbYm9keSwgZmFuXSksICdjb25kJywgbWF0cyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGxhdW5kcnk6IHNoaXJ0cyBvbiB0d28gYmFsY29uaWVzLCB0b3dlbHMgb3ZlciBvbmUgcGFyYXBldCAqL1xuICB7XG4gICAgY29uc3QgTEQgPSBHLmxhdW5kcnk7XG4gICAgY29uc3QgZ2FybWVudCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyLCBoZXg6IG51bWJlcikgPT4gY29sb3VyQWxsKGJveEF0KHgsIHksIHosIHcsIGgsIGQpLCBoZXgpO1xuICAgIGNvbnN0IHNoaXJ0ID0gKHg6IG51bWJlciwgaGV4OiBudW1iZXIsIGR6OiBudW1iZXIpID0+IFtcbiAgICAgIGdhcm1lbnQoeCwgTEQucmFpbFkgLSAwLjMyLCBkeiwgMC40MCwgMC41NiwgMC4wMywgaGV4KSxcbiAgICAgIGdhcm1lbnQoeCAtIDAuMjcsIExELnJhaWxZIC0gMC4xNCwgZHogKyAwLjAxLCAwLjE2LCAwLjIyLCAwLjAzLCBoZXgpLFxuICAgICAgZ2FybWVudCh4ICsgMC4yNywgTEQucmFpbFkgLSAwLjE0LCBkeiAtIDAuMDEsIDAuMTYsIDAuMjIsIDAuMDMsIGhleCksXG4gICAgXTtcbiAgICBjb25zdCByYWNrID0gbWVyZ2VHZW9zKFtcbiAgICAgIC4uLnNoaXJ0KC0wLjA1LCAweGRlZGNkNCwgMCksIC4uLnNoaXJ0KDAuNDIsIDB4M2E0YTZhLCAtMC4wMyksIC4uLnNoaXJ0KDAuODAsIDB4NmU3NDY2LCAwLjAyKSxcbiAgICAgIGNvbG91ckFsbChib3hBdCgwLjQwLCBMRC5yYWlsWSwgMCwgMS42LCAwLjAzLCAwLjAzKSwgMHg5YTlhOTQpLFxuICAgIF0pO1xuICAgIGNvbnN0IHJ6ID0gQi5iYWNrICsgMC41NTtcbiAgICBhZGRJbnN0KCdsYXVuZHJ5JywgJ0hhbmdpbmcgc2hpcnRzJywgcmFjaywgJ2Nsb3RoJyxcbiAgICAgIChMRC5zaGlydEZsb29ycyBhcyBudW1iZXJbXSkubWFwKChrKSA9PiBhdCgwLCBGW2tdLCByeikpLCBbMHhmZmZmZmYsIDB4ZThlMmQ4XSk7XG4gICAgLy8gdHdvIHRvd2VscyBkcmFwZWQgb3ZlciB0aGUgcGFyYXBldCB0b3A6IGEgZm9sZCBvbiB0aGUgdG9wIGZhY2UgYW5kIGEgZHJvcCBkb3duIHRoZSBmcm9udFxuICAgIGNvbnN0IFMgPSBGW0xELnRvd2VsRmxvb3JdLCB5VCA9IFMgKyBCLnBhcmFwZXQ7XG4gICAgY29uc3QgdG93ZWwgPSAoeDogbnVtYmVyLCB3OiBudW1iZXIsIGhleDogbnVtYmVyKSA9PiBbXG4gICAgICBnYXJtZW50KHgsIHlUICsgMC4wMiwgekZhY2UgKyAwLjE1LCB3LCAwLjA0LCAwLjM0LCBoZXgpLFxuICAgICAgZ2FybWVudCh4LCB5VCAtIDAuMjQsIHpGYWNlICsgQi5wcm91ZCArIDAuMDIsIHcsIDAuNTIsIDAuMDMsIGhleCksXG4gICAgXTtcbiAgICBhZGQoJ3Rvd2VscycsICdUb3dlbHMgb3ZlciB0aGUgcGFyYXBldCcsIG1lcmdlR2VvcyhbLi4udG93ZWwoLTAuNDIsIDAuNjIsIDB4N2E4YTVlKSwgLi4udG93ZWwoMC4zMCwgMC41MCwgMHg2ZDhhYTgpXSksICdjbG90aCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBncmltZSBzdHJlYWtzIHVuZGVyIGV2ZXJ5IHNpbGwgKi9cbiAge1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUGxhbmVHZW9tZXRyeShXLncgLSAwLjEsIDAuOTUpO1xuICAgIHEudHJhbnNsYXRlKDAsIDAsIDAuMDA2KTtcbiAgICBjb25zdCBtYXRzOiBUSFJFRS5NYXRyaXg0W10gPSBbXTtcbiAgICBjb25zdCB0aW50czogbnVtYmVyW10gPSBbXTtcbiAgICBsZXQgayA9IDA7XG4gICAgZm9yIChjb25zdCBTIG9mIEYpIGZvciAoY29uc3QgYnggb2YgQlgpIHsgbWF0cy5wdXNoKGF0KGJ4LCBTICsgVy55MCAtIDAuNSwgekZhY2UpKTsgdGludHMucHVzaChbMHhmZmZmZmYsIDB4YzhjOGM4LCAweGU2ZTZlNiwgMHhiMGIwYjAsIDB4ZDhkOGQ4XVsoayAqIDcpICUgNV0pOyBrKys7IH1cbiAgICBjb25zdCBpbnN0ID0gYWRkSW5zdCgnc3RyZWFrcycsICdTaWxsIGdyaW1lIHN0cmVha3MnLCBxLCAnc3RyZWFrJywgbWF0cywgdGludHMpO1xuICAgIGNvbnN0IHNtID0gaW5zdC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICBzbS5kZXB0aFdyaXRlID0gZmFsc2U7IHNtLnBvbHlnb25PZmZzZXQgPSB0cnVlOyBzbS5wb2x5Z29uT2Zmc2V0RmFjdG9yID0gLTE7XG4gICAgaWYgKCFpbkJyb3dzZXIpIHtcbiAgICAgIHNtLm9wYWNpdHkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBbYywgY3R4XSA9IGNhbnZhcygyNTYsIDEyOCk7XG4gICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDI1NiwgMTI4KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDE0KTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSg2MCwgNTIsIDQwLCAwLjQ1KScpOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoNjAsIDUyLCA0MCwgMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgMTQpO1xuICAgICAgY29uc3QgYW5jaG9ycyA9IFsxNCwgMzAsIDIyNiwgMjQyLCA2MCArIHJuZCgpICogNTAsIDEyMCArIHJuZCgpICogNDAsIDE3MCArIHJuZCgpICogNDBdO1xuICAgICAgZm9yIChjb25zdCBhMCBvZiBhbmNob3JzKSBzdHJlYWtEb3duKGN0eCwgYTAgKyAocm5kKCkgLSAwLjUpICogOCwgMCwgNCArIHJuZCgpICogOSwgNjAgKyBybmQoKSAqIDY4LCAnNjAsIDUyLCA0MCcsIDAuMzAgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHN0cmVha0Rvd24oY3R4LCBybmQoKSAqIDI1MCwgMCwgMiArIHJuZCgpICogNCwgMzAgKyBybmQoKSAqIDYwLCAnNjAsIDUyLCA0MCcsIDAuMTUgKyBybmQoKSAqIDAuMik7XG4gICAgICBiaW5kKCdzdHJlYWsnLCBjLCB7IHJlcGVhdDogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSByb2xsZXIgc2h1dHRlcnMsIHgzLCBhbmQgdGhlIHNob3AgZ2xhemluZyAqL1xuICB7XG4gICAgY29uc3QgbWF0cyA9IChHUi5zaHV0dGVycyBhcyBudW1iZXJbXVtdKS5tYXAoKFt4MCwgeDFdKSA9PiBhdCgoeDAgKyB4MSkgLyAyLCAoR1IuaG9sZVkwICsgR1IuaG9sZVkxKSAvIDIsIHpGYWNlIC0gR1IuaW5zZXQgLSAwLjA0KSk7XG4gICAgY29uc3QgW3gwLCB4MV0gPSBHUi5zaHV0dGVyc1swXSBhcyBudW1iZXJbXTtcbiAgICBhZGRJbnN0KCdzaHV0dGVycycsICdSb2xsZXIgc2h1dHRlcnMnLCBmYWNlZEJveCh4MSAtIHgwICsgMC4wNCwgR1IuaG9sZVkxIC0gR1IuaG9sZVkwICsgMC4wNCwgMC4wOCksICdzaHV0dGVyJywgbWF0cyk7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gMjU2IHB4ID0gMSBtOiAxMyBzbGF0cyBhdCBhIDc1IG1tIHBpdGNoLCBlYWNoIGEgbGl0IGNyZXN0IG92ZXIgYSBzaGFkb3dlZCB2YWxsZXksIHdpdGggYVxuICAgICAgLy8gZmFpbnQgcnVzdCB3YXNoIG5lYXIgdGhlIGJvdHRvbS4gTXVsdGlwbGllciBvdmVyIHdoaXRlLlxuICAgICAgY29uc3QgW2MsIGN0eF0gPSBjYW52YXMoMjU2LCAyNTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDI1NiwgMjU2KTtcbiAgICAgIGNvbnN0IHNwID0gMjU2IC8gMTM7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyBpKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGkgKiBzcDtcbiAgICAgICAgY29uc3QgZ2cgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeSwgMCwgeSArIHNwKTtcbiAgICAgICAgZ2cuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDMwLCAzMCwgMjgsIDAuMzApJyk7IGdnLmFkZENvbG9yU3RvcCgwLjI1LCAncmdiYSgzMCwgMzAsIDI4LCAwLjApJyk7XG4gICAgICAgIGdnLmFkZENvbG9yU3RvcCgwLjcsICdyZ2JhKDMwLCAzMCwgMjgsIDAuMDgpJyk7IGdnLmFkZENvbG9yU3RvcCgxLCAncmdiYSgzMCwgMzAsIDI4LCAwLjMwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZ2c7IGN0eC5maWxsUmVjdCgwLCB5LCAyNTYsIHNwKTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykgc29mdEJsb2IoY3R4LCBybmQoKSAqIDI1Niwgcm5kKCkgKiAyNTYsIDEwICsgcm5kKCkgKiAzMCwgNiArIHJuZCgpICogMTQsICc0MCwgMzgsIDM0JywgMC4wNCArIHJuZCgpICogMC4wOCk7XG4gICAgICBiaW5kKCdzaHV0dGVyJywgYywgeyByZXBlYXQ6IGZhbHNlIH0pO1xuICAgIH1cbiAgICBjb25zdCBbZ3gwLCBneDFdID0gR1IuZ2xhc3MgYXMgbnVtYmVyW107XG4gICAgYWRkKCdzaG9wZ2xhc3MnLCAnU2hvcGZyb250IHBhbmUnLCBzcGFuKGd4MCArIDAuMDQsIGd4MSAtIDAuMDQsIEdSLmhvbGVZMCArIDAuMDQsIEdSLmhvbGVZMSAtIDAuMDQsIHpGYWNlIC0gR1IuaW5zZXQgLSAwLjAyLCB6RmFjZSAtIEdSLmluc2V0ICsgMC4wMiksICdnbGFzcycpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGUgbmFtZSBib2FyZCAqL1xuICB7XG4gICAgY29uc3QgUyA9IEcuc2lnbjtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KFMueDEgLSBTLngwLCBTLnkxIC0gUy55MCwgUy50KTtcbiAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpIGFzIFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIGlmIChpIDwgMTYgfHwgaSA+IDE5KSB1di5zZXRYWShpLCAwLjAxLCAwLjAxKTtcbiAgICBnLnRyYW5zbGF0ZSgoUy54MCArIFMueDEpIC8gMiwgKFMueTAgKyBTLnkxKSAvIDIsIHpGYWNlICsgMC4wMSArIFMudCAvIDIpO1xuICAgIGNvbnN0IG1lc2ggPSBhZGQoJ3NpZ24nLCAnTmFtZSBib2FyZCcsIGcsICdzaWduJyk7XG4gICAgY29uc3QgbWF0ID0gbWVzaC5tYXRlcmlhbCBhcyBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbDtcbiAgICBpZiAoIWluQnJvd3Nlcikge1xuICAgICAgbWF0LmNvbG9yLnNldChTLmdyb3VuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGMud2lkdGggPSAxMDI0OyBjLmhlaWdodCA9IDIzMjtcbiAgICAgIGNvbnN0IGN0eCA9IGMuZ2V0Q29udGV4dCgnMmQnKSE7XG4gICAgICBjdHguZmlsbFN0eWxlID0gUy5ncm91bmQ7IGN0eC5maWxsUmVjdCgwLCAwLCBjLndpZHRoLCBjLmhlaWdodCk7XG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSAnI2I5YjZiMCc7IGN0eC5saW5lV2lkdGggPSA4OyBjdHguc3Ryb2tlUmVjdCg0LCA0LCBjLndpZHRoIC0gOCwgYy5oZWlnaHQgLSA4KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBTLmluazsgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnOyBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XG4gICAgICBjdHguZm9udCA9ICdib2xkIDE2MHB4IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWYnO1xuICAgICAgY3R4LmZpbGxUZXh0KFMudGV4dCwgNTEyLCAxMjQpO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoYyk7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4OyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIHdhdGVyLXRhbmsgdG93ZXJcbiAgICogRm91ciB0YXBlcmluZyBsZWdzIHdpdGggYSByaW5nIGFuZCBhbiBYIGJyYWNlIG9uIGV2ZXJ5IGZhY2UgcGVyIHRpZXIsIGEgcGxhdGZvcm0gd2l0aCBhXG4gICAqIHJhaWxpbmcgYW5kIGEgbGFkZGVyIHVwIHRoZSArWiBmYWNlLiBBbGwgcnVzdC1zdGVlbCwgb25lIG1lcmdlZCBjb21wb25lbnQuICovXG4gIHtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IGN4ID0gVFcuY3gsIGN6ID0gVFcuY3o7XG4gICAgY29uc3QgY29ybmVyID0gKGk6IG51bWJlciwgdDogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBmID0gdCAvIFRXLnRpZXJzLCBoYWxmID0gVFcuYmFzZUhhbGYgKyAoVFcudG9wSGFsZiAtIFRXLmJhc2VIYWxmKSAqIGY7XG4gICAgICBjb25zdCBzeCA9IFsxLCAtMSwgLTEsIDFdW2ldLCBzeiA9IFsxLCAxLCAtMSwgLTFdW2ldO1xuICAgICAgcmV0dXJuIFtjeCArIHN4ICogaGFsZiwgVFcueTAgKyAoVFcueTEgLSBUVy55MCkgKiBmLCBjeiArIHN6ICogaGFsZl07XG4gICAgfTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykgcGFydHMucHVzaChzdHJ1dChjb3JuZXIoaSwgMCksIGNvcm5lcihpLCBUVy50aWVycyksIFRXLmxlZykpO1xuICAgIGZvciAobGV0IHQgPSAwOyB0IDw9IFRXLnRpZXJzOyB0KyspIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gY29ybmVyKGksIHQpLCBiID0gY29ybmVyKChpICsgMSkgJSA0LCB0KTtcbiAgICAgIGlmICh0ID4gMCkgcGFydHMucHVzaChzdHJ1dChhLCBiLCBUVy5icmFjZSkpO1xuICAgICAgaWYgKHQgPCBUVy50aWVycykge1xuICAgICAgICBwYXJ0cy5wdXNoKHN0cnV0KGEsIGNvcm5lcigoaSArIDEpICUgNCwgdCArIDEpLCBUVy5icmFjZSkpO1xuICAgICAgICBwYXJ0cy5wdXNoKHN0cnV0KGIsIGNvcm5lcihpLCB0ICsgMSksIFRXLmJyYWNlKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHBhcnRzLnB1c2goYm94QXQoY3gsIFRXLnkxICsgVFcucGxhdGZvcm1UIC8gMiwgY3osIFRXLnBsYXRmb3JtLCBUVy5wbGF0Zm9ybVQsIFRXLnBsYXRmb3JtKSk7XG4gICAgY29uc3QgcGggPSBUVy5wbGF0Zm9ybSAvIDIgLSAwLjA1LCByeSA9IFRXLnkxICsgVFcucGxhdGZvcm1UO1xuICAgIGZvciAoY29uc3QgW3N4LCBzel0gb2YgW1sxLCAxXSwgWy0xLCAxXSwgWy0xLCAtMV0sIFsxLCAtMV1dKSBwYXJ0cy5wdXNoKGJveEF0KGN4ICsgc3ggKiBwaCwgcnkgKyBUVy5yYWlsSCAvIDIsIGN6ICsgc3ogKiBwaCwgMC4wNSwgVFcucmFpbEgsIDAuMDUpKTtcbiAgICBmb3IgKGNvbnN0IHl5IG9mIFtyeSArIFRXLnJhaWxILCByeSArIFRXLnJhaWxIICogMC41NV0pIHtcbiAgICAgIHBhcnRzLnB1c2goYm94QXQoY3gsIHl5LCBjeiArIHBoLCBwaCAqIDIgKyAwLjA1LCAwLjA0LCAwLjA0KSk7IHBhcnRzLnB1c2goYm94QXQoY3gsIHl5LCBjeiAtIHBoLCBwaCAqIDIgKyAwLjA1LCAwLjA0LCAwLjA0KSk7XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KGN4ICsgcGgsIHl5LCBjeiwgMC4wNCwgMC4wNCwgcGggKiAyIC0gMC4wNCkpOyBwYXJ0cy5wdXNoKGJveEF0KGN4IC0gcGgsIHl5LCBjeiwgMC4wNCwgMC4wNCwgcGggKiAyIC0gMC4wNCkpO1xuICAgIH1cbiAgICAvLyBsYWRkZXIgdXAgdGhlICtaIGZhY2UsIGZyb20gdGhlIGRlY2sgdG8gdGhlIHJhaWwgdG9wXG4gICAgY29uc3QgbHogPSBUVy5sYWRkZXJaLCBseTEgPSByeSArIFRXLnJhaWxIO1xuICAgIGZvciAoY29uc3Qgc3ggb2YgWy0xLCAxXSkgcGFydHMucHVzaChib3hBdChjeCArIHN4ICogMC4yMiwgKFRXLnkwICsgbHkxKSAvIDIsIGx6LCAwLjA1LCBseTEgLSBUVy55MCwgMC4wNSkpO1xuICAgIGZvciAobGV0IHkgPSBUVy55MCArIDAuMjU7IHkgPCBseTEgLSAwLjE7IHkgKz0gVFcucnVuZykgcGFydHMucHVzaChib3hBdChjeCwgeSwgbHosIDAuNDQsIDAuMDMsIDAuMDMpKTtcbiAgICBhZGQoJ3Rvd2VyJywgJ1dhdGVyLXRhbmsgdG93ZXIsIHJhaWxpbmcgYW5kIGxhZGRlcicsIG1lcmdlR2VvcyhwYXJ0cyksICdzdGVlbCcpO1xuICB9XG4gIHtcbiAgICBjb25zdCBUSyA9IEcudGFuaywgciA9IFRLLnI7XG4gICAgY29uc3QgcHJvZiA9IFtbMCwgMF0sIFtyICogMC45NiwgMF0sIFtyICogMC45NiwgMC4wNV0sIFtyLCAwLjA4XSwgW3IsIDAuNTVdLCBbciAqIDAuOTYsIDAuNThdLCBbciAqIDAuOTYsIDAuNjNdLCBbciwgMC42Nl0sXG4gICAgICAgICAgICAgICAgICBbciwgMS4xMl0sIFtyICogMC45NiwgMS4xNV0sIFtyICogMC45NiwgMS4yMF0sIFtyLCAxLjIzXSwgW3IsIDEuNjJdLCBbciAqIDAuOTQsIDEuNjhdLCBbciAqIDAuNywgMS44MF0sIFtyICogMC4zNSwgMS44OF0sIFswLCBUSy5oXV07XG4gICAgY29uc3QgZyA9IGxhdGhlKHByb2YsIDI0LCBUVy55MSArIFRXLnBsYXRmb3JtVCk7XG4gICAgZy50cmFuc2xhdGUoVFcuY3gsIDAsIFRXLmN6KTtcbiAgICBhZGQoJ3RhbmsnLCAnV2F0ZXIgdGFuaycsIGcsICd0YW5rJyk7XG4gICAgaWYgKGluQnJvd3Nlcikge1xuICAgICAgLy8gcnVzdCBibGVlZGluZyBkb3duIGZyb20gdGhlIHNlYW1zIGFuZCB0aGUgdG9wIHJpbSwgb3ZlciBnYWx2YW5pc2VkIGdyZXk6IGEgbXVsdGlwbGllciB0aWxlXG4gICAgICAvLyB3cmFwcGluZyBvbmNlIGFyb3VuZCB0aGUgZHJ1bVxuICAgICAgY29uc3QgW2MsIGN0eF0gPSBjYW52YXMoNTEyLCAyNTYpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIDUxMiwgMjU2KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykgc3RyZWFrRG93bihjdHgsIHJuZCgpICogNTEyLCBybmQoKSAqIDIwMCwgMyArIHJuZCgpICogMTAsIDQwICsgcm5kKCkgKiAxMjAsICcxMjAsIDYwLCAyNScsIDAuMTUgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSBzb2Z0QmxvYihjdHgsIHJuZCgpICogNTEyLCBybmQoKSAqIDI1NiwgMTAgKyBybmQoKSAqIDMwLCA4ICsgcm5kKCkgKiAyNCwgJzExMCwgNTUsIDIyJywgMC4xNSArIHJuZCgpICogMC4zKTtcbiAgICAgIGZvciAoY29uc3QgeSBvZiBbOCwgNzgsIDE1MF0pIHsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDkwLCA0NSwgMjAsIDAuMzUpJzsgY3R4LmZpbGxSZWN0KDAsIHksIDUxMiwgNCk7IH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzAwOyBpKyspIHsgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDYwLCA2MCwgNTgsICcgKyAoMC4wNSArIHJuZCgpICogMC4xNSkudG9GaXhlZCgyKSArICcpJzsgY3R4LmZpbGxSZWN0KHJuZCgpICogNTEyLCBybmQoKSAqIDI1NiwgMiArIHJuZCgpICogNCwgMSArIHJuZCgpICogMyk7IH1cbiAgICAgIGJpbmQoJ3RhbmsnLCBjLCB7IGJ1bXA6IDAuMDEgfSk7XG4gICAgfVxuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlU3R1ZGVudERvcm1pdG9yeUJsb2NrTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIFN0YXRpYyBsYW5kbWFyayBnZW9tZXRyeSAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIEEgbmFtZWQgcGl2b3QgaXMgYVxuICAgIC8vIHByb21pc2UgdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yXG4gICAgLy8gaGFzIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiBUaGUgb25lLWFyZ3VtZW50IGVudHJ5IHBvaW50OiB2aWJlM2QncyBjb250cmFjdCwgYW5kIGltZzJ0aHJlZWpzJ3Mgb3duLlxuICpcbiAqIGBjcmVhdGVPYmplY3RNb2RlbGAgYWJvdmUga2VlcHMgdGhhaWtpdCdzIGhpc3RvcmljYWwgKHNwZWMsIG9wdGlvbnMpIHNoYXBlIHNvXG4gKiB0aGUgaGFybmVzcywgdGhlIGxldmVsIGVkaXRvciBhbmQgdGhlIE5vZGUtc2lkZSBnYXRlcyBjYXJyeSBvbiB1bmNoYW5nZWQuXG4gKiBgc3BlY2AgaGFzIG5ldmVyIGJlZW4gcGFzc2VkIGJ5IGFueSBjYWxsZXIgLS0gaXQgaXMgaW5zcGVjdGlvbiBkYXRhIHRoYXQgaXNcbiAqIGFscmVhZHkgYmFrZWQgaW50byB0aGlzIG1vZHVsZSAtLSBzbyB0aGlzIGlzIHRoZSBob25lc3Qgc2lnbmF0dXJlLCBhbmQgaXQgaXNcbiAqIHdoYXQgYSB2aWJlM2QgY29uc3VtZXIgaW5zdGFsbHMgYW5kIGNhbGxzLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICByZXR1cm4gY3JlYXRlT2JqZWN0TW9kZWwodW5kZWZpbmVkLCBvcHRpb25zKTtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUF1QjtBQTZDdkIsSUFBTSxTQUFTO0FBQUEsRUFDWCxNQUFNO0FBQUEsRUFDTixRQUFRO0FBQUEsRUFDUixjQUFjO0FBQUEsRUFDZCxZQUFZO0FBQUEsRUFDWixhQUFhO0FBQUEsSUFDWDtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxNQUNoQixlQUFlO0FBQUEsSUFDakI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsSUFDYjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsbUJBQW1CO0FBQUEsSUFDckI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixLQUFLO0FBQUEsSUFDTCxVQUFVO0FBQUEsSUFDVixVQUFVO0FBQUEsSUFDVixXQUFXO0FBQUEsSUFDWCxPQUFPO0FBQUEsSUFDUCxTQUFTO0FBQUEsSUFDVCxTQUFTO0FBQUEsSUFDVCxVQUFVO0FBQUEsTUFDUjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLE1BQ0E7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLE1BQ0E7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1QsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsUUFDVixRQUFRO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxRQUFRO0FBQUEsTUFD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QUFLLElBQUksTUFBTSxNQUFNLElBQUksQ0FBQztBQUFHLFlBQU0sS0FBSyxNQUFNLElBQUksSUFBSSxLQUFLLElBQUksS0FBSyxJQUFJLE1BQU0sTUFBTSxJQUFJLENBQUM7QUFDM0gsWUFBTSxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksSUFBSSxNQUFNLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQztBQUFHLFlBQU0sS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLElBQUksTUFBTSxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUM7QUFBQSxJQUM3SDtBQUVBLFVBQU0sS0FBSyxHQUFHLFNBQVMsTUFBTSxLQUFLLEdBQUc7QUFDckMsZUFBVyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUcsT0FBTSxLQUFLLE1BQU0sS0FBSyxLQUFLLE9BQU8sR0FBRyxLQUFLLE9BQU8sR0FBRyxJQUFJLE1BQU0sTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDO0FBQzFHLGFBQVMsSUFBSSxHQUFHLEtBQUssTUFBTSxJQUFJLE1BQU0sS0FBSyxLQUFLLEdBQUcsS0FBTSxPQUFNLEtBQUssTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLE1BQU0sSUFBSSxDQUFDO0FBQ3JHLFFBQUksU0FBUyx3Q0FBd0MsVUFBVSxLQUFLLEdBQUcsT0FBTztBQUFBLEVBQ2hGO0FBQ0E7QUFDRSxVQUFNLEtBQUssRUFBRSxNQUFNLElBQUksR0FBRztBQUMxQixVQUFNLE9BQU87QUFBQSxNQUFDLENBQUMsR0FBRyxDQUFDO0FBQUEsTUFBRyxDQUFDLElBQUksTUFBTSxDQUFDO0FBQUEsTUFBRyxDQUFDLElBQUksTUFBTSxJQUFJO0FBQUEsTUFBRyxDQUFDLEdBQUcsSUFBSTtBQUFBLE1BQUcsQ0FBQyxHQUFHLElBQUk7QUFBQSxNQUFHLENBQUMsSUFBSSxNQUFNLElBQUk7QUFBQSxNQUFHLENBQUMsSUFBSSxNQUFNLElBQUk7QUFBQSxNQUFHLENBQUMsR0FBRyxJQUFJO0FBQUEsTUFDM0csQ0FBQyxHQUFHLElBQUk7QUFBQSxNQUFHLENBQUMsSUFBSSxN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
