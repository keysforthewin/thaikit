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

// scratch/chedi/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createChediModel: () => createChediModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "chedi",
  "name": "Chedi",
  "exportName": "Chedi",
  "envelope": "Envelope 8.00 x 14.00 x 8.00 m, origin base-center, +Y up.\n * Budget (hero2x): <=16000 triangles, <=12 draw calls, <=8 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "stone",
      "color": 10394513,
      "roughness": 0.94,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "stucco",
      "color": 10987425,
      "roughness": 0.88,
      "metalness": 0
    },
    {
      "id": "shadow",
      "color": 8156779,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 9732191,
      "roughness": 0.4,
      "metalness": 0.3,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "terrace": [
      [
        0,
        0.5,
        4,
        0.55
      ],
      [
        0.5,
        0.95,
        3.68,
        0.5
      ],
      [
        0.95,
        1.35,
        3.36,
        0.45
      ],
      [
        1.35,
        3.05,
        3,
        0.4
      ],
      [
        3.05,
        3.5,
        3.18,
        0.42
      ],
      [
        3.5,
        3.85,
        2.86,
        0.36
      ]
    ],
    "niche": {
      "radius": 3,
      "y": 1.5,
      "frameW": 1.45,
      "frameH": 1.45,
      "depth": 0.4,
      "archR": 0.45,
      "spring": 0.85
    },
    "bell": {
      "y0": 3.7,
      "seg": 32,
      "body": [
        [
          2.36,
          4.52
        ],
        [
          2.38,
          4.8
        ],
        [
          2.24,
          5.3
        ],
        [
          2.1,
          5.9
        ],
        [
          1.98,
          6.45
        ]
      ],
      "shoulder": {
        "r": 1.98,
        "y": 6.45,
        "rEdge": 1.3,
        "yTop": 7.72,
        "steps": 12
      },
      "neck": {
        "r": 0.75,
        "yTop": 7.9
      }
    },
    "harmika": [
      [
        0,
        8.05,
        0,
        2.1,
        1,
        2.1
      ],
      [
        0,
        8.8,
        0,
        1.52,
        0.5,
        1.52
      ]
    ],
    "spire": {
      "y0": 8.99,
      "y1": 12.3,
      "r0": 0.66,
      "r1": 0.22,
      "rings": 16,
      "bulge": 0.07,
      "seg": 24
    },
    "wear": {
      "size": 512,
      "tile": 3,
      "bump": 0.035,
      "peelLight": [
        0.754,
        0.738,
        0.703
      ],
      "peelDark": [
        0.62,
        0.62,
        0.6
      ],
      "drip": [
        0.703,
        0.709,
        0.705
      ],
      "crack": [
        0.55,
        0.55,
        0.53
      ],
      "mottle": [
        0.9,
        0.9,
        0.88
      ],
      "crust": [
        0.98,
        0.99,
        0.86
      ],
      "moss": [
        0.86,
        0.85,
        0.72
      ]
    },
    "finial": {
      "y0": 12.28,
      "y1": 14,
      "seg": 20
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
function boxes(list) {
  return mergeGeos(list.map((b) => boxAt(b[0], b[1], b[2], b[3], b[4], b[5])));
}
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function ringedTaper(y0, y1, r0, r1, rings, bulge) {
  const pts = [];
  for (let i = 0; i <= rings; i++) {
    const t = i / rings;
    const y = y0 + (y1 - y0) * t;
    const r = r0 + (r1 - r0) * t;
    const step = (y1 - y0) / rings;
    pts.push([r + bulge, y]);
    pts.push([r + bulge, y + step * 0.45]);
    pts.push([r, y + step * 0.55]);
  }
  pts.push([r1, y1]);
  return pts;
}
function redentedShape(a, r) {
  const quad = [[a, a - 2 * r], [a - r, a - 2 * r], [a - r, a - r], [a - 2 * r, a - r], [a - 2 * r, a]];
  const pts = [];
  for (let k = 0; k < 4; k++) {
    for (const [x, z] of quad) {
      let px = x, pz = z;
      for (let i = 0; i < k; i++) {
        const t = px;
        px = -pz;
        pz = t;
      }
      pts.push([px, pz]);
    }
  }
  const shape = new THREE.Shape();
  shape.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) shape.lineTo(pts[i][0], pts[i][1]);
  shape.closePath();
  return shape;
}
function extrudeSlab(shape, y0, y1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: y1 - y0, bevelEnabled: false, curveSegments: 4 });
  g.rotateX(-Math.PI / 2);
  g.translate(0, y0, 0);
  g.computeVertexNormals();
  return g;
}
function tintByHeight(geo, y0, y1, rgb0) {
  const p = geo.getAttribute("position");
  const col = new Float32Array(p.count * 3);
  for (let i = 0; i < p.count; i++) {
    const t = Math.min(1, Math.max(0, (p.getY(i) - y0) / (y1 - y0)));
    for (let c = 0; c < 3; c++) col[i * 3 + c] = rgb0[c] + (1 - rgb0[c]) * t;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
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
function createChediModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Chedi";
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
  function latheUv(geo, tile, rRef) {
    const p = geo.getAttribute("position"), uv = geo.getAttribute("uv");
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      out[i * 2] = uv.getX(i) * rep;
      out[i * 2 + 1] = p.getY(i) / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  function boxUv(geo, tile) {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const out = new Float32Array(p.count * 2);
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
      out[i * 2] = u / tile;
      out[i * 2 + 1] = v / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
  }
  {
    const geo = mergeGeos(
      G.terrace.map(([y0, y1, a, r]) => extrudeSlab(redentedShape(a, r), y0, y1))
    );
    tintByHeight(geo, 0, 1.6, [0.804, 0.819, 0.834]);
    boxUv(geo, G.wear.tile);
    add("terrace", "Stepped terrace", geo, "stone");
  }
  colliders["terrace"] = {
    shape: "cylinder",
    localCenter: [0, 7, 0],
    radius: 4,
    height: 14,
    axis: [0, 1, 0],
    notes: 'Asset declares collider "cylinder" rather than the building-part default box, because the bell and spire are round in plan and a box proxy would leave a player colliding with empty air at the corners.'
  };
  {
    const n = G.niche;
    const outline = new THREE.Shape();
    outline.moveTo(-n.frameW / 2, 0);
    outline.lineTo(n.frameW / 2, 0);
    outline.lineTo(n.frameW / 2, n.frameH);
    outline.lineTo(-n.frameW / 2, n.frameH);
    outline.closePath();
    const hole = new THREE.Path();
    hole.moveTo(n.archR, 0.18);
    hole.lineTo(n.archR, n.spring);
    hole.absarc(0, n.spring, n.archR, 0, Math.PI, false);
    hole.lineTo(-n.archR, 0.18);
    hole.closePath();
    outline.holes.push(hole);
    const frame = new THREE.ExtrudeGeometry(outline, { depth: n.depth, bevelEnabled: false, curveSegments: 8 });
    frame.translate(0, 0, -0.1);
    frame.computeVertexNormals();
    boxUv(frame, G.wear.tile);
    addInst("niche-frames", "Arched niche frames", frame, "stone", quad(n.radius, n.y));
    const panel = boxAt(0, n.frameH / 2 - 0.06, 0.03, n.frameW - 0.42, n.frameH - 0.3, 0.06);
    addInst("niche-panels", "Niche back panels", panel, "shadow", quad(n.radius + 0.02, n.y));
  }
  {
    const b = G.bell;
    const pts = [
      [2.7, b.y0],
      [2.7, 4.02],
      [2.54, 4.04],
      [2.54, 4.24],
      [2.7, 4.26],
      [2.7, 4.46],
      ...b.body
    ];
    const s = b.shoulder;
    for (let i = 1; i <= s.steps; i++) {
      const t = i / s.steps;
      pts.push([s.rEdge + (s.r - s.rEdge) * Math.cos(t * Math.PI / 2), s.y + (s.yTop - s.y) * Math.sin(t * Math.PI / 2)]);
    }
    pts.push([b.neck.r, s.yTop]);
    pts.push([b.neck.r, b.neck.yTop]);
    const geo = lathe(pts, b.seg);
    latheUv(geo, G.wear.tile, 2.2);
    add("bell-dome", "Bell dome", geo, "stucco");
  }
  {
    const geo = boxes(G.harmika);
    boxUv(geo, G.wear.tile);
    add("harmika", "Harmika block", geo, "stucco");
  }
  {
    const s = G.spire;
    const pts = ringedTaper(s.y0, s.y1, s.r0, s.r1, s.rings, s.bulge);
    pts.push([0, s.y1]);
    const geo = lathe(pts, s.seg);
    latheUv(geo, G.wear.tile, 0.5);
    add("spire", "Ringed spire", geo, "stucco");
  }
  {
    const f = G.finial;
    add("finial", "Gilded finial", lathe([
      [0, f.y0],
      [0.26, f.y0 + 0.05],
      [0.26, f.y0 + 0.28],
      [0.2, f.y0 + 0.66],
      [0.13, f.y0 + 1.08],
      [0.055, f.y0 + 1.42],
      // The bud. The plate's finial is a teardrop with a small bulb at its tip, not a plain cone,
      // and at 1.7 m of a 14 m prop it is the only thing above the bell with a profile event.
      [0.085, f.y0 + 1.5],
      [0.06, f.y0 + 1.6],
      [0, f.y1]
    ], f.seg), "gold");
  }
  {
    let wearTile = function(kind, seed) {
      if (!hasDom) return null;
      const cv = document.createElement("canvas");
      cv.width = cv.height = size;
      const ctx = cv.getContext("2d");
      if (!ctx) return null;
      const r = rng(seed);
      const S = size;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, S, S);
      const wrapped = (fn) => {
        for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
          ctx.save();
          ctx.translate(ox * S, oy * S);
          fn();
          ctx.restore();
        }
      };
      const blotch = (tone, count, rad, alpha) => {
        for (let i = 0; i < count; i++) {
          const halo = new Path2D(), core = new Path2D();
          let cx = r() * S, cy = r() * S, a = r() * Math.PI * 2;
          const R = rad * S * (0.5 + r()), n = 8 + Math.floor(r() * 16);
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 2.2;
            cx += Math.cos(a) * R * 0.4;
            cy += Math.sin(a) * R * 0.4;
            const rr = R * (0.35 + 0.5 * r());
            halo.moveTo(cx + rr, cy);
            halo.arc(cx, cy, rr, 0, Math.PI * 2);
            core.moveTo(cx + rr * 0.6, cy);
            core.arc(cx, cy, rr * 0.6, 0, Math.PI * 2);
          }
          const al = alpha * (0.6 + 0.4 * r());
          wrapped(() => {
            ctx.fillStyle = css(tone, al * 0.55);
            ctx.fill(halo);
            ctx.fillStyle = css(tone, al * 0.45);
            ctx.fill(core);
          });
        }
      };
      const crazing = (tone, count, alpha) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) {
          let x = r() * S, y = r() * S;
          p.moveTo(x, y);
          const n = 4 + Math.floor(r() * 9), step = S * 0.016;
          let a = r() * Math.PI * 2;
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 1.6;
            x += Math.cos(a) * step * (0.5 + r());
            y += Math.sin(a) * step * (0.5 + r());
            p.lineTo(x, y);
          }
        }
        wrapped(() => {
          ctx.strokeStyle = css(tone, alpha);
          ctx.lineWidth = 1.25;
          ctx.stroke(p);
        });
      };
      const drips = (tone, count, alpha) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y0 = r() * S, len = S * (0.05 + 0.22 * r()), w = 1.5 + 2.5 * r();
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            const g = ctx.createLinearGradient(0, y0, 0, y0 - len);
            g.addColorStop(0, css(tone, a));
            g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g;
            ctx.fillRect(x - w / 2, y0 - len, w, len);
          });
        }
      };
      const grain = (tone, count, alpha) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = r() * S, d = 0.6 + r() * 1.4;
          p.rect(x, y, d, d);
        }
        wrapped(() => {
          ctx.fillStyle = css(tone, alpha);
          ctx.fill(p);
        });
      };
      if (kind === "stucco") {
        blotch(W.mottle, 14, 0.13, 0.7);
        blotch(W.peelLight, 9, 0.085, 0.8);
        blotch(W.peelDark, 5, 0.03, 0.85);
        crazing(W.crack, 640, 0.62);
        drips(W.drip, 48, 0.6);
        grain(W.crack, 1600, 0.1);
      } else {
        blotch(W.mottle, 12, 0.12, 0.6);
        blotch(W.crust, 16, 0.07, 0.9);
        blotch(W.moss, 9, 0.03, 0.8);
        crazing(W.crack, 260, 0.38);
        grain(W.moss, 1400, 0.12);
      }
      return cv;
    };
    const W = G.wear;
    const hasDom = typeof document !== "undefined" && typeof document.createElement === "function";
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t, a) => "rgba(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + "," + a + ")";
    const rng = (seed) => () => {
      seed = seed * 1664525 + 1013904223 >>> 0;
      return seed / 4294967296;
    };
    const bind = (mat, cv) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = W.bump;
      mat.needsUpdate = true;
    };
    bind(materials.stucco, wearTile("stucco", 20260826));
    bind(materials.stone, wearTile("stone", 8261403));
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createChediModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogQ2hlZGkgLS0gcHJvY2VkdXJhbCBUaHJlZS5qcyBmYWN0b3J5LlxuICpcbiAqIGB0aHJlZWAgaXMgaW1wb3J0ZWQgYXMgYSBiYXJlIHNwZWNpZmllciBhbmQgTk9USElORyBlbHNlLiBUaGUgYnVuZGxlIGlzIENvbW1vbkpTIHdpdGggYSBiYXJlXG4gKiByZXF1aXJlKFwidGhyZWVcIikgYW5kIHRoZSBob3N0IHBhZ2UgaW5qZWN0cyBpdHMgT1dOIHRocmVlIGluc3RhbmNlOyBhIHNlY29uZCBjb3B5IG1lYW5zIHRoaXNcbiAqIGZpbGUncyBNZXNoIGlzIG5vdCB0aGUgcmVuZGVyZXIncyBNZXNoIGFuZCBub3RoaW5nIGRyYXdzLiBUaGF0IGlzIGFsc28gd2h5IGdlb21ldHJ5IG1lcmdpbmcsXG4gKiBpbnN0YW5jaW5nIGFuZCB0aGUgbGF0aGUgaGVscGVycyBiZWxvdyBhcmUgaGFuZC1yb2xsZWQgLS0gYW55dGhpbmcgdW5kZXIgdGhyZWUvZXhhbXBsZXMvanNtIGlzXG4gKiBhIHNlY29uZCBpbXBvcnQuXG4gKlxuICogRW52ZWxvcGUgOC4wMCB4IDE0LjAwIHggOC4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvMngpOiA8PTE2MDAwIHRyaWFuZ2xlcywgPD0xMiBkcmF3IGNhbGxzLCA8PTggbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBNT05VTUVOVEFMIGJ1aWxkaW5ncywgYW5kIHVubGlrZSB0aGUgc2hhcmVkIHJldGFpbCBtb2R1bGUgaXRzIGZvcm0gaXNcbiAqIG5vdCBhIGJveDogdGhlIHJlY29nbmlzYWJsZSBmZWF0dXJlIGlzIGEgY3VydmVkIG9yIHRpZXJlZCBwcm9maWxlIHRoYXQgaGFzIHRvIHN1cnZpdmUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20uIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBoZXJlIGlzIHRoZXJlZm9yZSB0aGUgTEFUSEUgLS1cbiAqIGEgcHJvZmlsZSByZXZvbHZlZCBhYm91dCArWSAtLSBhbmQgdGhlIHRpZXJlZC9zdGVwcGVkIG1lcmdlLCBub3QgdGhlIHBhcmFtZXRlcmlzZWQgc2hvcGZyb250LlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwiY2hlZGlcIixcbiAgICBcIm5hbWVcIjogXCJDaGVkaVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIkNoZWRpXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDguMDAgeCAxNC4wMCB4IDguMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm8yeCk6IDw9MTYwMDAgdHJpYW5nbGVzLCA8PTEyIGRyYXcgY2FsbHMsIDw9OCBtYXRlcmlhbHMsIDw9MzIgdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic3RvbmVcIixcbiAgICAgICAgXCJjb2xvclwiOiAxMDM5NDUxMyxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NCxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInN0dWNjb1wiLFxuICAgICAgICBcImNvbG9yXCI6IDEwOTg3NDI1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjg4LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwic2hhZG93XCIsXG4gICAgICAgIFwiY29sb3JcIjogODE1Njc3OSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImdvbGRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5NzMyMTkxLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMyxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwidGVycmFjZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDAuNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuNSxcbiAgICAgICAgICAwLjk1LFxuICAgICAgICAgIDMuNjgsXG4gICAgICAgICAgMC41XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjk1LFxuICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgMy4zNixcbiAgICAgICAgICAwLjQ1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjM1LFxuICAgICAgICAgIDMuMDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAwLjRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDMuMDUsXG4gICAgICAgICAgMy41LFxuICAgICAgICAgIDMuMTgsXG4gICAgICAgICAgMC40MlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMy41LFxuICAgICAgICAgIDMuODUsXG4gICAgICAgICAgMi44NixcbiAgICAgICAgICAwLjM2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIm5pY2hlXCI6IHtcbiAgICAgICAgXCJyYWRpdXNcIjogMyxcbiAgICAgICAgXCJ5XCI6IDEuNSxcbiAgICAgICAgXCJmcmFtZVdcIjogMS40NSxcbiAgICAgICAgXCJmcmFtZUhcIjogMS40NSxcbiAgICAgICAgXCJkZXB0aFwiOiAwLjQsXG4gICAgICAgIFwiYXJjaFJcIjogMC40NSxcbiAgICAgICAgXCJzcHJpbmdcIjogMC44NVxuICAgICAgfSxcbiAgICAgIFwiYmVsbFwiOiB7XG4gICAgICAgIFwieTBcIjogMy43LFxuICAgICAgICBcInNlZ1wiOiAzMixcbiAgICAgICAgXCJib2R5XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjM2LFxuICAgICAgICAgICAgNC41MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi4zOCxcbiAgICAgICAgICAgIDQuOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi4yNCxcbiAgICAgICAgICAgIDUuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi4xLFxuICAgICAgICAgICAgNS45XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjk4LFxuICAgICAgICAgICAgNi40NVxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzaG91bGRlclwiOiB7XG4gICAgICAgICAgXCJyXCI6IDEuOTgsXG4gICAgICAgICAgXCJ5XCI6IDYuNDUsXG4gICAgICAgICAgXCJyRWRnZVwiOiAxLjMsXG4gICAgICAgICAgXCJ5VG9wXCI6IDcuNzIsXG4gICAgICAgICAgXCJzdGVwc1wiOiAxMlxuICAgICAgICB9LFxuICAgICAgICBcIm5lY2tcIjoge1xuICAgICAgICAgIFwiclwiOiAwLjc1LFxuICAgICAgICAgIFwieVRvcFwiOiA3LjlcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiaGFybWlrYVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDguMDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyLjEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyLjFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOC44LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMS41MixcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMS41MlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJzcGlyZVwiOiB7XG4gICAgICAgIFwieTBcIjogOC45OSxcbiAgICAgICAgXCJ5MVwiOiAxMi4zLFxuICAgICAgICBcInIwXCI6IDAuNjYsXG4gICAgICAgIFwicjFcIjogMC4yMixcbiAgICAgICAgXCJyaW5nc1wiOiAxNixcbiAgICAgICAgXCJidWxnZVwiOiAwLjA3LFxuICAgICAgICBcInNlZ1wiOiAyNFxuICAgICAgfSxcbiAgICAgIFwid2VhclwiOiB7XG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwidGlsZVwiOiAzLFxuICAgICAgICBcImJ1bXBcIjogMC4wMzUsXG4gICAgICAgIFwicGVlbExpZ2h0XCI6IFtcbiAgICAgICAgICAwLjc1NCxcbiAgICAgICAgICAwLjczOCxcbiAgICAgICAgICAwLjcwM1xuICAgICAgICBdLFxuICAgICAgICBcInBlZWxEYXJrXCI6IFtcbiAgICAgICAgICAwLjYyLFxuICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgMC42XG4gICAgICAgIF0sXG4gICAgICAgIFwiZHJpcFwiOiBbXG4gICAgICAgICAgMC43MDMsXG4gICAgICAgICAgMC43MDksXG4gICAgICAgICAgMC43MDVcbiAgICAgICAgXSxcbiAgICAgICAgXCJjcmFja1wiOiBbXG4gICAgICAgICAgMC41NSxcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIDAuNTNcbiAgICAgICAgXSxcbiAgICAgICAgXCJtb3R0bGVcIjogW1xuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgMC44OFxuICAgICAgICBdLFxuICAgICAgICBcImNydXN0XCI6IFtcbiAgICAgICAgICAwLjk4LFxuICAgICAgICAgIDAuOTksXG4gICAgICAgICAgMC44NlxuICAgICAgICBdLFxuICAgICAgICBcIm1vc3NcIjogW1xuICAgICAgICAgIDAuODYsXG4gICAgICAgICAgMC44NSxcbiAgICAgICAgICAwLjcyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcImZpbmlhbFwiOiB7XG4gICAgICAgIFwieTBcIjogMTIuMjgsXG4gICAgICAgIFwieTFcIjogMTQsXG4gICAgICAgIFwic2VnXCI6IDIwXG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgcmV0dXJuIFtjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6XTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpICsgMSwgaiksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSwgaiArIDEpO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQ2hlZGlNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ0NoZWRpJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuXG4gIC8qKiBSZS1tYXAgYSBsYXRoZSdzIFVWcyB0byBhIG1ldHJlLXNjYWxlZCB0aWxlOiB1IGtlZXBzIExhdGhlR2VvbWV0cnkncyBvd24gc2VhbWxlc3MgMC4uMVxuICAgKiAgc3dlZXAgKHNjYWxlZCB0byBhIHdob2xlIG51bWJlciBvZiByZXBlYXRzIGF0IHRoZSByZWZlcmVuY2UgcmFkaXVzLCBzbyB0aGUgc2VhbSBjb2x1bW4gbGFuZHNcbiAgICogIG9uIGEgdGlsZSBlZGdlKSwgdiBpcyB3b3JsZCBoZWlnaHQgb3ZlciB0aGUgdGlsZSBzaXplLiBhdGFuMiBvZiBwb3NpdGlvbiB3b3VsZCBwdXQgdGhlXG4gICAqICBkdXBsaWNhdGVkIHNlYW0gY29sdW1uIGJhY2sgYXQgdT0wIGFuZCBzcXVlZXplIGEgd2hvbGUgdGlsZSBpbnRvIHRoZSBsYXN0IHNlZ21lbnQuICovXG4gIGZ1bmN0aW9uIGxhdGhlVXYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdGlsZTogbnVtYmVyLCByUmVmOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgdXYgPSBnZW8uZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByUmVmIC8gdGlsZSkpO1xuICAgIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7IG91dFtpICogMl0gPSB1di5nZXRYKGkpICogcmVwOyBvdXRbaSAqIDIgKyAxXSA9IHAuZ2V0WShpKSAvIHRpbGU7IH1cbiAgICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAyKSk7XG4gIH1cbiAgLyoqIEJveC1wcm9qZWN0IFVWcyBieSBlYWNoIHZlcnRleCdzIGRvbWluYW50IG5vcm1hbCBheGlzLCBpbiBtZXRyZXMgb3ZlciB0aGUgdGlsZSBzaXplLiBFdmVyeVxuICAgKiAgZ2VvbWV0cnkgdGhpcyBpcyB1c2VkIG9uIGlzIG5vbi1pbmRleGVkIHdpdGggcGVyLWZhY2Ugbm9ybWFscywgc28gYSBmYWNlIG5ldmVyIHN0cmFkZGxlc1xuICAgKiAgdHdvIHByb2plY3Rpb25zLiAqL1xuICBmdW5jdGlvbiBib3hVdihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB0aWxlOiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICAgIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKG4uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobi5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhuLmdldFooaSkpO1xuICAgICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgICAgaWYgKGF5ID49IGF4ICYmIGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICAgIGVsc2UgaWYgKGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgICBvdXRbaSAqIDJdID0gdSAvIHRpbGU7IG91dFtpICogMiArIDFdID0gdiAvIHRpbGU7XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShvdXQsIDIpKTtcbiAgfVxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHN0ZXBwZWQgdGVycmFjZVxuICAgKiBTaXggcmVkZW50ZWQgc2xhYnMsIE1FUkdFRCBpbnRvIG9uZSBjb21wb25lbnQgYW5kIG9uZSBkcmF3IGNhbGwuIEVhY2ggaXMgYSBzaW5nbGUgZXh0cnVzaW9uXG4gICAqIG9mIGEgY2xvc2VkIHJlZGVudGVkIHBsYW4gcmF0aGVyIHRoYW4gYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGEgZGVlcCBvbmU6IGNyb3NzZWQgYm94ZXMgcHV0XG4gICAqIHRoZWlyIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlIHdob2xlIGludGVyc2VjdGlvbiwgYW5kIHRoYXRcbiAgICogei1maWdodHMuIENvbnNlY3V0aXZlIHNsYWJzIG1lZXQgYXMgT1BQT1NFRCBmYWNlcyAtLSBvbmUgc2xhYidzIHRvcCBhZ2FpbnN0IHRoZSBuZXh0IHNsYWInc1xuICAgKiBib3R0b20gLS0gd2hpY2ggaXMgaG93IHNvbGlkcyBhcmUgbWVhbnQgdG8gbWVldCBhbmQgZG9lcyBub3QgZmlnaHQuICovXG4gIHtcbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MoXG4gICAgICAoRy50ZXJyYWNlIGFzIG51bWJlcltdW10pLm1hcCgoW3kwLCB5MSwgYSwgcl0pID0+IGV4dHJ1ZGVTbGFiKHJlZGVudGVkU2hhcGUoYSwgciksIHkwLCB5MSkpKTtcbiAgICAvLyBHcm91bmQgZGlydCBvbiB0aGUgbG93ZXIgcGxpbnRoLCBkZWxpdmVyZWQgYXMgYSBwZXItdmVydGV4IHRpbnQgcmF0aGVyIHRoYW4gYSBzZWNvbmRcbiAgICAvLyBtYXRlcmlhbC4gVGhlIHBsYXRlIG1lYXN1cmVzICM3RjdGNzkgZG93biB0aGVyZSBhZ2FpbnN0ICM5RTlCOTEgaGlnaGVyIHVwIC0tIHR3byBjcm9wXG4gICAgLy8gbWVhc3VyZW1lbnRzLCB3aG9zZSByYXRpbyAoMC44MDQsIDAuODE5LCAwLjgzNCkgaXMgdGhlIHRpbnQgYXQgeT0wLCBmYWRpbmcgb3V0IGJ5IHk9MS42MC5cbiAgICAvLyBBIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgZHJhdyBjYWxsIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5IHRoYXQgdGhlIGJvdHRvbSBvZiBhXG4gICAgLy8gd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC5cbiAgICB0aW50QnlIZWlnaHQoZ2VvLCAwLCAxLjYwLCBbMC44MDQsIDAuODE5LCAwLjgzNF0pO1xuICAgIGJveFV2KGdlbywgRy53ZWFyLnRpbGUpO1xuICAgIGFkZCgndGVycmFjZScsICdTdGVwcGVkIHRlcnJhY2UnLCBnZW8sICdzdG9uZScpO1xuICB9XG4gIGNvbGxpZGVyc1sndGVycmFjZSddID0ge1xuICAgIHNoYXBlOiAnY3lsaW5kZXInLCBsb2NhbENlbnRlcjogWzAsIDcuMCwgMF0sIHJhZGl1czogNC4wLCBoZWlnaHQ6IDE0LjAsIGF4aXM6IFswLCAxLCAwXSxcbiAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiY3lsaW5kZXJcIiByYXRoZXIgdGhhbiB0aGUgYnVpbGRpbmctcGFydCBkZWZhdWx0IGJveCwgYmVjYXVzZSAnXG4gICAgICAgICArICd0aGUgYmVsbCBhbmQgc3BpcmUgYXJlIHJvdW5kIGluIHBsYW4gYW5kIGEgYm94IHByb3h5IHdvdWxkIGxlYXZlIGEgcGxheWVyIGNvbGxpZGluZyAnXG4gICAgICAgICArICd3aXRoIGVtcHR5IGFpciBhdCB0aGUgY29ybmVycy4nLFxuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gYXJjaGVkIG5pY2hlc1xuICAgKiBGb3VyLCBvbmUgcGVyIGZhY2UsIGFzIGFuIEluc3RhbmNlZE1lc2g6IG9uZSBnZW9tZXRyeSBhbmQgb25lIHN1Ym1pc3Npb24gZm9yIHRoZSBzZXQuXG4gICAqXG4gICAqIFRoZSBmcmFtZSBpcyBhIHBsYXRlIHdpdGggYSBSRUFMIGFyY2hlZCBhcGVydHVyZSAtLSBhIFNoYXBlIGNhcnJ5aW5nIGEgaG9sZSAtLSBleHRydWRlZCAwLjQwIG1cbiAgICogYW5kIHN0YW5kaW5nIDAuMzAgbSBwcm91ZCBvZiB0aGUgdGVycmFjZSBmYWNlLCBhbmQgdGhlIGRhcmsgYmFjayBwYW5lbCBzaXRzIDAuMjMgbSBiZWhpbmQgdGhlXG4gICAqIGZyYW1lJ3MgZnJvbnQgcGxhbmUuIFRoYXQgZGVwdGggaXMgdGhlIHBvaW50OiBhIG5pY2hlIGlzIGEgY29uY2F2aXR5LCBhbmQgYSBmbGF0IGRhcmsgcmVjdGFuZ2xlXG4gICAqIHBhaW50ZWQgb24gYSB3YWxsIGlzIG5vdCBvbmUuIFRoZSBwYW5lbCBzdGFuZHMgMC4wNSBtIHByb3VkIG9mIHRoZSB3YWxsIGl0IGlzIHNldCBhZ2FpbnN0XG4gICAqIHJhdGhlciB0aGFuIGZsdXNoIHdpdGggaXQsIHNvIG5vIHR3byBzdXJmYWNlcyBoZXJlIGFyZSBjb3BsYW5hciBhbmQgY28tZmFjaW5nLiAqL1xuICB7XG4gICAgY29uc3QgbiA9IEcubmljaGU7XG4gICAgY29uc3Qgb3V0bGluZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgIG91dGxpbmUubW92ZVRvKC1uLmZyYW1lVyAvIDIsIDApO1xuICAgIG91dGxpbmUubGluZVRvKG4uZnJhbWVXIC8gMiwgMCk7XG4gICAgb3V0bGluZS5saW5lVG8obi5mcmFtZVcgLyAyLCBuLmZyYW1lSCk7XG4gICAgb3V0bGluZS5saW5lVG8oLW4uZnJhbWVXIC8gMiwgbi5mcmFtZUgpO1xuICAgIG91dGxpbmUuY2xvc2VQYXRoKCk7XG4gICAgLy8gV2FsayB0aGUgYXBlcnR1cmUgZnJvbSB0aGUgYm90dG9tIG9mIHRoZSBSSUdIVCBqYW1iLCB1cCBpdCwgb3ZlciB0aGUgaGVhZCBmcm9tIGFuZ2xlIDAgdG9cbiAgICAvLyBQSSwgdGhlbiBkb3duIHRoZSBsZWZ0IGphbWIuIFdyaXR0ZW4gdGhlIG90aGVyIHdheSAtLSBhbiBhcmMgZnJvbSBQSSB0byAwIC0tIHRoZSBzd2VlcCByYW5cbiAgICAvLyB0aHJvdWdoIHRoZSBib3R0b20gb2YgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgdGhlIHRvcCwgYW5kIHRoZSBhcmNoIGhlYWQgd2FzIGxlZnQgZmlsbGVkXG4gICAgLy8gc29saWQgd2l0aCB0aGUgYXJjJ3Mgb3duIHNlYW0gei1maWdodGluZyBhY3Jvc3MgaXQ6IGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3blxuICAgIC8vIG9uIGl0LiBUaGUgZGlyZWN0aW9uIG9mIGEgaGFsZi1jaXJjbGUgaXMgbm90IGEgZGV0YWlsIGhlcmU7IGl0IGlzIHRoZSBmZWF0dXJlLlxuICAgIGNvbnN0IGhvbGUgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGhvbGUubW92ZVRvKG4uYXJjaFIsIDAuMTgpO1xuICAgIGhvbGUubGluZVRvKG4uYXJjaFIsIG4uc3ByaW5nKTtcbiAgICBob2xlLmFic2FyYygwLCBuLnNwcmluZywgbi5hcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIGhvbGUubGluZVRvKC1uLmFyY2hSLCAwLjE4KTtcbiAgICBob2xlLmNsb3NlUGF0aCgpO1xuICAgIG91dGxpbmUuaG9sZXMucHVzaChob2xlKTtcblxuICAgIGNvbnN0IGZyYW1lID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShvdXRsaW5lLCB7IGRlcHRoOiBuLmRlcHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA4IH0pO1xuICAgIGZyYW1lLnRyYW5zbGF0ZSgwLCAwLCAtMC4xMCk7XG4gICAgZnJhbWUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBib3hVdihmcmFtZSwgRy53ZWFyLnRpbGUpO1xuICAgIGFkZEluc3QoJ25pY2hlLWZyYW1lcycsICdBcmNoZWQgbmljaGUgZnJhbWVzJywgZnJhbWUsICdzdG9uZScsIHF1YWQobi5yYWRpdXMsIG4ueSkpO1xuXG4gICAgY29uc3QgcGFuZWwgPSBib3hBdCgwLCBuLmZyYW1lSCAvIDIgLSAwLjA2LCAwLjAzLCBuLmZyYW1lVyAtIDAuNDIsIG4uZnJhbWVIIC0gMC4zMCwgMC4wNik7XG4gICAgYWRkSW5zdCgnbmljaGUtcGFuZWxzJywgJ05pY2hlIGJhY2sgcGFuZWxzJywgcGFuZWwsICdzaGFkb3cnLCBxdWFkKG4ucmFkaXVzICsgMC4wMiwgbi55KSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGJlbGwgZG9tZVxuICAgKiBPbmUgbGF0aGUgY2FycnlpbmcgdGhlIG1vdWxkZWQgcmluZ3MgYXQgaXRzIGZvb3QsIHRoZSBiZWxsLCBhbmQgdGhlIGRydW0gTkVDSyB0aGUgaGFybWlrYVxuICAgKiBzdGFuZHMgb24sIGJlY2F1c2UgYSByaW5nIGlzIGEgcHJvZmlsZSBzdGVwIGFuZCBub3QgYSBzZXBhcmF0ZSBtZXNoLiBJdHMgYmFzZSBpcyBzdW5rIHRvXG4gICAqIHk9My43MCwgaW5zaWRlIHRoZSB0ZXJyYWNlJ3MgdG9wIHNsYWIsIGFuZCBpdHMgdG9wIHJ1bnMgMC4xNSBtIHVwIElOVE8gdGhlIGhhcm1pa2EncyBsb3dlclxuICAgKiBzbGFiOiBMYXRoZUdlb21ldHJ5IGlzIG9wZW4gYXQgYm90aCBlbmRzLCBhbmQgYW4gb3BlbiByaW0gbWVldGluZyBhIHN1cmZhY2UgLS0gb3IsIGFzIHRoZVxuICAgKiBmaXJzdCBidWlsZCBoYWQgaXQsIHN0b3BwaW5nIDAuMjUgbSBzaG9ydCBvZiBvbmUgLS0gaXMgYSBzZWFtIG9yIGEgZ2FwIHRoZSB0dXJudGFibGUgcmVhZHMuXG4gICAqXG4gICAqIFRoZSBwcm9maWxlIGlzIHRoZSBwcm94eSdzLCBub3QgYSBndWVzczogcmFkaXVzLWJ5LWhlaWdodCBvZmYgdGhlIE1lc2h5IHJlZmVyZW5jZSBzY2FsZWQgdG9cbiAgICogMTQgbSByZWFkcyAyLjM2IGF0IDQuMSwgMi4wMyBhdCA1LjEsIDEuOTAgYXQgNi40LCB0aGVuIHJvdW5kcyBvdmVyIDEuMyBtIHRvIGEgMC43MiBuZWNrIGF0XG4gICAqIDcuOS4gVGhhdCBpcyBhIEJFTEwgLS0gbmVhci12ZXJ0aWNhbCBmbGFua3MgYW5kIGEgZG9tZWQgc2hvdWxkZXIgLS0gYW5kIHRoZSBmaXJzdCBidWlsZCdzXG4gICAqIHF1YXJ0ZXItY29zaW5lIGZyb20gdGhlIGZvb3Qgd2FzIGFuIG9naXZlLCBmdWxsIG9ubHkgYXQgdGhlIGhhdW5jaCBhbmQgcG9pbnRlZCBhdCB0aGUgdG9wLiAqL1xuICB7XG4gICAgY29uc3QgYiA9IEcuYmVsbDtcbiAgICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgICBbMi43MCwgYi55MF0sIFsyLjcwLCA0LjAyXSwgWzIuNTQsIDQuMDRdLCBbMi41NCwgNC4yNF0sIFsyLjcwLCA0LjI2XSwgWzIuNzAsIDQuNDZdLFxuICAgICAgLi4uKGIuYm9keSBhcyBudW1iZXJbXVtdKSxcbiAgICBdO1xuICAgIC8vIFRoZSBzaG91bGRlcjogYSBxdWFydGVyLWVsbGlwc2UgZnJvbSB0aGUgdG9wIG9mIHRoZSBib2R5IHRvIHRoZSBjcm93biBlZGdlLCBlbmRpbmcgd2l0aCBhXG4gICAgLy8gaG9yaXpvbnRhbCB0YW5nZW50OyB0aGVuIHRoZSBmbGF0IGNyb3duIGlud2FyZCB0byB0aGUgbmVjaywgd2hpY2ggcnVucyB1cCBpbnRvIHRoZSBibG9jay5cbiAgICBjb25zdCBzID0gYi5zaG91bGRlcjtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSBzLnN0ZXBzOyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBpIC8gcy5zdGVwcztcbiAgICAgIHB0cy5wdXNoKFtzLnJFZGdlICsgKHMuciAtIHMuckVkZ2UpICogTWF0aC5jb3ModCAqIE1hdGguUEkgLyAyKSwgcy55ICsgKHMueVRvcCAtIHMueSkgKiBNYXRoLnNpbih0ICogTWF0aC5QSSAvIDIpXSk7XG4gICAgfVxuICAgIHB0cy5wdXNoKFtiLm5lY2suciwgcy55VG9wXSk7XG4gICAgcHRzLnB1c2goW2IubmVjay5yLCBiLm5lY2sueVRvcF0pO1xuICAgIGNvbnN0IGdlbyA9IGxhdGhlKHB0cywgYi5zZWcpO1xuICAgIGxhdGhlVXYoZ2VvLCBHLndlYXIudGlsZSwgMi4yKTtcbiAgICBhZGQoJ2JlbGwtZG9tZScsICdCZWxsIGRvbWUnLCBnZW8sICdzdHVjY28nKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gaGFybWlrYVxuICAgKiBUaGUgc3F1YXJlIGJsb2NrIGJldHdlZW4gdGhlIGJlbGwgYW5kIHRoZSBzcGlyZSwgYW5kIHRoZSBvbmx5IG9ydGhvZ29uYWwgdGhpbmcgYWJvdmUgdGhlXG4gICAqIHRlcnJhY2UuIFR3byBtZXJnZWQgYm94ZXMgc3RhbmRpbmcgb24gdGhlIGJlbGwncyBuZWNrLCB3aGljaCBydW5zIHVwIGluc2lkZSB0aGUgbG93ZXIgc2xhYjtcbiAgICogdGhlIHVwcGVyIGJsb2NrJ3MgMS41MiBtIHRvcCBpcyB3aGF0IGNhcHMgdGhlIHNwaXJlIGxhdGhlJ3Mgb3BlbiBiYXNlLiAqL1xuICB7XG4gICAgY29uc3QgZ2VvID0gYm94ZXMoRy5oYXJtaWthIGFzIG51bWJlcltdW10pO1xuICAgIGJveFV2KGdlbywgRy53ZWFyLnRpbGUpO1xuICAgIGFkZCgnaGFybWlrYScsICdIYXJtaWthIGJsb2NrJywgZ2VvLCAnc3R1Y2NvJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJpbmdlZCBzcGlyZVxuICAgKiBTaXh0ZWVuIHJpbmdzIGFzIE9ORSBsYXRoZSBwcm9maWxlLCBub3Qgc2l4dGVlbiBtZXNoZXMuIEF0IDI0IHJhZGlhbCBzZWdtZW50cyB0aGF0IGlzIDIsMzAwXG4gICAqIHRyaWFuZ2xlcyBpbiBhIHNpbmdsZSBnZW9tZXRyeSBhbmQgYSBzaW5nbGUgZHJhdyBjYWxsOyB0aGUgc2FtZSByaW5ncyBhcyBzZXBhcmF0ZSBjeWxpbmRlcnNcbiAgICogd291bGQgYmUgc2l4dGVlbiBnZW9tZXRyaWVzIGFnYWluc3QgYSBjZWlsaW5nIG9mIHRoaXJ0eS10d28sIGZvciBhbiBpZGVudGljYWwgcGljdHVyZS4gKi9cbiAge1xuICAgIGNvbnN0IHMgPSBHLnNwaXJlO1xuICAgIGNvbnN0IHB0cyA9IHJpbmdlZFRhcGVyKHMueTAsIHMueTEsIHMucjAsIHMucjEsIHMucmluZ3MsIHMuYnVsZ2UpO1xuICAgIHB0cy5wdXNoKFswLCBzLnkxXSk7ICAgLy8gY2xvc2UgdGhlIHRvcCBvbiB0aGUgYXhpczsgYW4gb3BlbiByaW0gcmVhZHMgYXMgYSBob2xlIGluIHNpbGhvdWV0dGVcbiAgICBjb25zdCBnZW8gPSBsYXRoZShwdHMsIHMuc2VnKTtcbiAgICBsYXRoZVV2KGdlbywgRy53ZWFyLnRpbGUsIDAuNSk7XG4gICAgYWRkKCdzcGlyZScsICdSaW5nZWQgc3BpcmUnLCBnZW8sICdzdHVjY28nKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2lsZGVkIGZpbmlhbFxuICAgKiBDbG9zZWQgb24gdGhlIGF4aXMgYXQgQk9USCBlbmRzLiBUaGUgb25lIGdvbGQgc3VyZmFjZSBvbiB0aGUgcHJvcCwgYW5kIHRoZSB0b3AgMS41NSBtIG9mIHRoZVxuICAgKiBkZWNsYXJlZCAxNCBtIGhlaWdodC4gKi9cbiAge1xuICAgIGNvbnN0IGYgPSBHLmZpbmlhbDtcbiAgICBhZGQoJ2ZpbmlhbCcsICdHaWxkZWQgZmluaWFsJywgbGF0aGUoW1xuICAgICAgWzAsIGYueTBdLCBbMC4yNiwgZi55MCArIDAuMDVdLCBbMC4yNiwgZi55MCArIDAuMjhdLCBbMC4yMCwgZi55MCArIDAuNjZdLFxuICAgICAgWzAuMTMsIGYueTAgKyAxLjA4XSwgWzAuMDU1LCBmLnkwICsgMS40Ml0sXG4gICAgICAvLyBUaGUgYnVkLiBUaGUgcGxhdGUncyBmaW5pYWwgaXMgYSB0ZWFyZHJvcCB3aXRoIGEgc21hbGwgYnVsYiBhdCBpdHMgdGlwLCBub3QgYSBwbGFpbiBjb25lLFxuICAgICAgLy8gYW5kIGF0IDEuNyBtIG9mIGEgMTQgbSBwcm9wIGl0IGlzIHRoZSBvbmx5IHRoaW5nIGFib3ZlIHRoZSBiZWxsIHdpdGggYSBwcm9maWxlIGV2ZW50LlxuICAgICAgWzAuMDg1LCBmLnkwICsgMS41MF0sIFswLjA2LCBmLnkwICsgMS42MF0sIFswLCBmLnkxXSxcbiAgICBdLCBmLnNlZyksICdnb2xkJyk7XG4gIH1cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB3ZWF0aGVyaW5nXG4gICAqIFRoZSBwbGF0ZSdzIHdoaXRld2FzaCBpcyBQRUVMSU5HIC0tIGNyYXplZCwgd2l0aCBwYXRjaGVzIG9mIGdyZXkgcmVuZGVyIHNob3dpbmcgdGhyb3VnaCBhbmRcbiAgICogZGlydCBzdHJlYWtzIHJ1bm5pbmcgZG93biB0aGUgYmVsbCAtLSBhbmQgdGhlIHRlcnJhY2UgY2FycmllcyBsaWNoZW4uIFRoZSBmaXJzdCBidWlsZCBsZWZ0XG4gICAqIGFsbCBvZiBpdCBvdXQgYXMgXCJ3ZWFyIGJlbG93IHRoZSByZXNvbHZhYmxlIGJhbmRcIiwgYW5kIGl0IHJlYWQgYXMgYSBjbGVhbiBwbGFzdGVyIG1vZGVsLlxuICAgKlxuICAgKiBJdCBpcyBkZWxpdmVyZWQgYXMgdHdvIENhbnZhcyAyRCB0aWxlcyBhc3NpZ25lZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHRoZSByb3V0ZSB0aGVcbiAgICogcmV0YWlsIHNldCB1c2VzIGZvciBpdHMgYnJhbmQgZmFzY2lhczogdGhlIHNjdWxwdCBtYXRlcmlhbHMgc3RheSBkZWNsYXJlZCB0ZXh0dXJlbGVzcyAobm9cbiAgICogZml2ZS1jYW52YXMgcHJvY2VkdXJhbCBzZXQsIG5vIHBlci1waXhlbCBKYXZhU2NyaXB0LCBhbmQgdGhlIG1lYXN1cmVkIGFsYmVkbyBpcyBOT1QgdGhyb3duXG4gICAqIGF3YXkpLCBhbmQgdGhlIHdob2xlIG9mIGl0IGlzIGEgZmV3IGh1bmRyZWQgcGF0aCBmaWxscyBhdCA1MTIgcHggLS0gc2luZ2xlLWRpZ2l0IG1pbGxpc2Vjb25kcy5cbiAgICogVGhlIGNhbnZhcyBpcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ciwgc28gZXZlcnkgbWFyayBvbiBpdCBpcyBhIHJhdGlvIG1lYXN1cmVkIG9uXG4gICAqIHRoZSBwbGF0ZSBhZ2FpbnN0IHRoZSBjbGVhbiBzdXJmYWNlIGJlc2lkZSBpdDsgaXQgaXMgYm91bmQgYXMgYm90aCBtYXAgYW5kIGJ1bXBNYXAsIHdoaWNoXG4gICAqIGlzIHdoYXQgbWFrZXMgYSBwZWVsIHBhdGNoIHJlYWQgYXMgYSBzdGVwIGluIHRoZSBzdXJmYWNlIHJhdGhlciB0aGFuIGEgc3RhaW4uXG4gICAqXG4gICAqIFRoZSBtZWFzdXJlZCBkYXJrLXJlbmRlciBwYXRjaCBpcyAwLjQ4MyBvZiB0aGUgY2xlYW4gd2hpdGV3YXNoIGFuZCBzaGlwcyBhdCAwLjYyOiB0aGVcbiAgICogc2lsaG91ZXR0ZSBnYXRlIGNsYXNzZXMgYW55IHN1cmZhY2UgYXQgdGhlIGJhY2tkcm9wJ3MgbHVtYSBvZiA1OCBhcyBhIEhPTEUsIGFuZCB0aGUgYmVsbCdzXG4gICAqIHNoYWRlZCBzaWRlIGFscmVhZHkgcmVuZGVycyBuZWFyIDEyMCwgd2hlcmUgYSAwLjQ4IHBhdGNoIHdvdWxkIGxhbmQgYXQgNTguIFRoZSBsaWNoZW4gdG9uZXNcbiAgICogYXJlIHJlbGF0aXZlIHRvbywgYW5kIGEgbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW4sIHNvIHRoZSBjcnVzdCdzIG1lYXN1cmVkIHllbGxvdyBTSElGVCBpc1xuICAgKiBjYXJyaWVkIHdpdGggaXRzIGJsdWUgY2hhbm5lbCBhdCAwLjg2IGFuZCB0aGUgcGFsZSBjaGFubmVscyBoZWxkIG5lYXIgMS4wIHJhdGhlciB0aGFuIHJhaXNlZC5cbiAgICpcbiAgICogVW5kZXIgTm9kZSAtLSB0aGUgYmFuZCBjb21wYXJpc29uIGFuZCBjaGVjay1jb3BsYW5hciBib3RoIHJ1biB0aGlzIGZhY3Rvcnkgd2l0aG91dCBhIERPTSAtLVxuICAgKiB0aGVyZSBpcyBubyBjYW52YXMsIGFuZCB0aGUgbWF0ZXJpYWxzIHNpbXBseSBrZWVwIHRoZWlyIGZsYXQgbWVhc3VyZWQgY29sb3VyLiAqL1xuICB7XG4gICAgY29uc3QgVyA9IEcud2VhcjtcbiAgICBjb25zdCBoYXNEb20gPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAoZG9jdW1lbnQgYXMgYW55KS5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihXLnNpemUsIG9wdGlvbnMudGV4dHVyZVNpemUgPz8gVy5zaXplKTtcbiAgICBjb25zdCBjc3MgPSAodDogbnVtYmVyW10sIGE6IG51bWJlcikgPT5cbiAgICAgICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHRbMF0gKiAyNTUpICsgJywnICsgTWF0aC5yb3VuZCh0WzFdICogMjU1KSArICcsJyArIE1hdGgucm91bmQodFsyXSAqIDI1NSkgKyAnLCcgKyBhICsgJyknO1xuICAgIGNvbnN0IHJuZyA9IChzZWVkOiBudW1iZXIpID0+ICgpID0+IHsgc2VlZCA9IChzZWVkICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gc2VlZCAvIDQyOTQ5NjcyOTY7IH07XG5cbiAgICAvKiogRHJhdyBvbmUgdGlsZS4ga2luZCBzZWxlY3RzIHRoZSBzdHVjY28gcmVjaXBlIChwZWVsLCBjcmF6aW5nLCBkcmlwcykgb3IgdGhlIHN0b25lIG9uZVxuICAgICAqICAobGljaGVuIGNydXN0IGFuZCBtb3NzLCBsaWdodGVyIGNyYXppbmcpLiBFdmVyeSBtYXJrIGlzIGJ1aWx0IE9OQ0UgYXMgYSBQYXRoMkQgYW5kIHRoZW5cbiAgICAgKiAgZmlsbGVkIGF0IG5pbmUgd3JhcHBlZCBvZmZzZXRzLCBzbyB0aGUgdGlsZSBpcyBzZWFtbGVzcyB1bmRlciBSZXBlYXRXcmFwcGluZy4gKi9cbiAgICBmdW5jdGlvbiB3ZWFyVGlsZShraW5kOiAnc3R1Y2NvJyB8ICdzdG9uZScsIHNlZWQ6IG51bWJlcik6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCB7XG4gICAgICBpZiAoIWhhc0RvbSkgcmV0dXJuIG51bGw7XG4gICAgICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgY3Yud2lkdGggPSBjdi5oZWlnaHQgPSBzaXplO1xuICAgICAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgIGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgICAgIGNvbnN0IHIgPSBybmcoc2VlZCk7XG4gICAgICBjb25zdCBTID0gc2l6ZTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7XG4gICAgICBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICBjb25zdCB3cmFwcGVkID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG94ID0gLTE7IG94IDw9IDE7IG94KyspIGZvciAobGV0IG95ID0gLTE7IG95IDw9IDE7IG95KyspIHtcbiAgICAgICAgICBjdHguc2F2ZSgpOyBjdHgudHJhbnNsYXRlKG94ICogUywgb3kgKiBTKTsgZm4oKTsgY3R4LnJlc3RvcmUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8vIEFuIGlycmVndWxhciBwYXRjaDogYSByYW5kb20gV0FMSyBvZiBvdmVybGFwcGluZyBkaXNjcywgZmlsbGVkIG9uY2UgYXMgYSB1bmlvbiAoc28gdGhlXG4gICAgICAvLyBvdXRsaW5lIGlzIHJhZ2dlZCBidXQgdGhlIHRvbmUgaW5zaWRlIGlzIGZsYXQsIGxpa2UgYSBmbGFrZSB0aGF0IGhhcyBjb21lIGF3YXkgaW4gb25lXG4gICAgICAvLyBwaWVjZSkgYW5kIG9uY2UgbW9yZSBhdCBhIHNtYWxsZXIgcmFkaXVzIGZvciBhIGRhcmtlciBjb3JlLiBEaXNjcyBzY2F0dGVyZWQgYWJvdXQgYVxuICAgICAgLy8gY2VudHJlIHdlcmUgdHJpZWQgZmlyc3QgYW5kIHJlbmRlcmVkIGFzIHBvbGthIGRvdHM7IGEgZmxha2UgaXMgYSB3b3JtLCBub3QgYSBzcG90LiBFdmVyeVxuICAgICAgLy8gbnVtYmVyIGlzIGRyYXduIGZyb20gdGhlIHNlZWRlZCBzdHJlYW0gc28gdGhlIG5pbmUgd3JhcHBlZCBjb3BpZXMgYXJlIGlkZW50aWNhbC5cbiAgICAgIGNvbnN0IGJsb3RjaCA9ICh0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgcmFkOiBudW1iZXIsIGFscGhhOiBudW1iZXIpID0+IHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaGFsbyA9IG5ldyBQYXRoMkQoKSwgY29yZSA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgICBsZXQgY3ggPSByKCkgKiBTLCBjeSA9IHIoKSAqIFMsIGEgPSByKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICBjb25zdCBSID0gcmFkICogUyAqICgwLjUgKyByKCkpLCBuID0gOCArIE1hdGguZmxvb3IocigpICogMTYpO1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBhICs9IChyKCkgLSAwLjUpICogMi4yO1xuICAgICAgICAgICAgY3ggKz0gTWF0aC5jb3MoYSkgKiBSICogMC40OyBjeSArPSBNYXRoLnNpbihhKSAqIFIgKiAwLjQ7XG4gICAgICAgICAgICBjb25zdCByciA9IFIgKiAoMC4zNSArIDAuNSAqIHIoKSk7XG4gICAgICAgICAgICBoYWxvLm1vdmVUbyhjeCArIHJyLCBjeSk7IGhhbG8uYXJjKGN4LCBjeSwgcnIsIDAsIE1hdGguUEkgKiAyKTtcbiAgICAgICAgICAgIGNvcmUubW92ZVRvKGN4ICsgcnIgKiAwLjYsIGN5KTsgY29yZS5hcmMoY3gsIGN5LCByciAqIDAuNiwgMCwgTWF0aC5QSSAqIDIpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zdCBhbCA9IGFscGhhICogKDAuNiArIDAuNCAqIHIoKSk7XG4gICAgICAgICAgd3JhcHBlZCgoKSA9PiB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGFsICogMC41NSk7IGN0eC5maWxsKGhhbG8pO1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbCAqIDAuNDUpOyBjdHguZmlsbChjb3JlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8vIENyYXppbmc6IHNob3J0IHJhbmRvbSB3YWxrcywgc3Ryb2tlZCB0aGluLiBUaGUgcGxhdGUncyBjcmFja3MgYXJlIGEgbmV0d29yayBvZiBjZWxscyBhXG4gICAgICAvLyBmZXcgY2VudGltZXRyZXMgYWNyb3NzOyBhdCA1MTIgcHggb3ZlciBhIDMgbSB0aWxlIG9uZSBwaXhlbCBpcyA2IG1tLlxuICAgICAgY29uc3QgY3JhemluZyA9ICh0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgYWxwaGE6IG51bWJlcikgPT4ge1xuICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICBsZXQgeCA9IHIoKSAqIFMsIHkgPSByKCkgKiBTO1xuICAgICAgICAgIHAubW92ZVRvKHgsIHkpO1xuICAgICAgICAgIGNvbnN0IG4gPSA0ICsgTWF0aC5mbG9vcihyKCkgKiA5KSwgc3RlcCA9IFMgKiAwLjAxNjtcbiAgICAgICAgICBsZXQgYSA9IHIoKSAqIE1hdGguUEkgKiAyO1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBhICs9IChyKCkgLSAwLjUpICogMS42O1xuICAgICAgICAgICAgeCArPSBNYXRoLmNvcyhhKSAqIHN0ZXAgKiAoMC41ICsgcigpKTsgeSArPSBNYXRoLnNpbihhKSAqIHN0ZXAgKiAoMC41ICsgcigpKTtcbiAgICAgICAgICAgIHAubGluZVRvKHgsIHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LnN0cm9rZVN0eWxlID0gY3NzKHRvbmUsIGFscGhhKTsgY3R4LmxpbmVXaWR0aCA9IDEuMjU7IGN0eC5zdHJva2UocCk7IH0pO1xuICAgICAgfTtcbiAgICAgIC8vIERyaXBzOiB2ZXJ0aWNhbCBzdHJlYWtzIGZhZGluZyBkb3dud2FyZC4gdiBpcyB3b3JsZCBoZWlnaHQgb24gZXZlcnkgbWFwcGluZyB1c2VkIGhlcmUsXG4gICAgICAvLyBzbyBcImRvd24gdGhlIGNhbnZhc1wiIGlzIGRvd24gdGhlIHByb3AuXG4gICAgICBjb25zdCBkcmlwcyA9ICh0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgYWxwaGE6IG51bWJlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gcigpICogUywgeTAgPSByKCkgKiBTLCBsZW4gPSBTICogKDAuMDUgKyAwLjIyICogcigpKSwgdyA9IDEuNSArIDIuNSAqIHIoKTtcbiAgICAgICAgICBjb25zdCBhID0gYWxwaGEgKiAoMC41ICsgMC41ICogcigpKTtcbiAgICAgICAgICB3cmFwcGVkKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeTAsIDAsIHkwIC0gbGVuKTtcbiAgICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGNzcyh0b25lLCBhKSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyh0b25lLCAwKSk7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KHggLSB3IC8gMiwgeTAgLSBsZW4sIHcsIGxlbik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBGaW5lIGdyYWluOiBhIHNjYXR0ZXIgb2YgbmVhci10cmFuc3BhcmVudCBzcGVja3MsIHNvIGEgZmxhdCBhcmVhIGlzIG5vdCBmbGF0LlxuICAgICAgY29uc3QgZ3JhaW4gPSAodG9uZTogbnVtYmVyW10sIGNvdW50OiBudW1iZXIsIGFscGhhOiBudW1iZXIpID0+IHtcbiAgICAgICAgY29uc3QgcCA9IG5ldyBQYXRoMkQoKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7IGNvbnN0IHggPSByKCkgKiBTLCB5ID0gcigpICogUywgZCA9IDAuNiArIHIoKSAqIDEuNDsgcC5yZWN0KHgsIHksIGQsIGQpOyB9XG4gICAgICAgIHdyYXBwZWQoKCkgPT4geyBjdHguZmlsbFN0eWxlID0gY3NzKHRvbmUsIGFscGhhKTsgY3R4LmZpbGwocCk7IH0pO1xuICAgICAgfTtcblxuICAgICAgaWYgKGtpbmQgPT09ICdzdHVjY28nKSB7XG4gICAgICAgIC8vIE9yZGVyIG1hdHRlcnM6IHRoZSBzb2Z0IG1vdHRsZSBmaXJzdCwgc28gdGhlIGhhcmRlciBmbGFrZXMgYW5kIHRoZSBjcmFjayBuZXR3b3JrIHNpdCBvblxuICAgICAgICAvLyB0b3Agb2YgaXQsIGFuZCB0aGUgZGFyayByZW5kZXIgY29yZXMgbGFzdC5cbiAgICAgICAgYmxvdGNoKFcubW90dGxlLCAxNCwgMC4xMywgMC43KTtcbiAgICAgICAgYmxvdGNoKFcucGVlbExpZ2h0LCA5LCAwLjA4NSwgMC44KTtcbiAgICAgICAgYmxvdGNoKFcucGVlbERhcmssIDUsIDAuMDMsIDAuODUpO1xuICAgICAgICBjcmF6aW5nKFcuY3JhY2ssIDY0MCwgMC42Mik7XG4gICAgICAgIGRyaXBzKFcuZHJpcCwgNDgsIDAuNik7XG4gICAgICAgIGdyYWluKFcuY3JhY2ssIDE2MDAsIDAuMTApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYmxvdGNoKFcubW90dGxlLCAxMiwgMC4xMiwgMC42KTtcbiAgICAgICAgYmxvdGNoKFcuY3J1c3QsIDE2LCAwLjA3LCAwLjkpO1xuICAgICAgICBibG90Y2goVy5tb3NzLCA5LCAwLjAzLCAwLjgpO1xuICAgICAgICBjcmF6aW5nKFcuY3JhY2ssIDI2MCwgMC4zOCk7XG4gICAgICAgIGdyYWluKFcubW9zcywgMTQwMCwgMC4xMik7XG4gICAgICB9XG4gICAgICByZXR1cm4gY3Y7XG4gICAgfVxuXG4gICAgY29uc3QgYmluZCA9IChtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCBjdjogSFRNTENhbnZhc0VsZW1lbnQgfCBudWxsKSA9PiB7XG4gICAgICBpZiAoIWN2KSByZXR1cm47XG4gICAgICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gICAgICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgICAgIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7ICAgLy8gdGhlIHRpbGUgaG9sZHMgZGlzcGxheS1zcGFjZSByYXRpb3NcbiAgICAgIHRleC5hbmlzb3Ryb3B5ID0gb3B0aW9ucy50ZXh0dXJlQW5pc290cm9weSA/PyA0O1xuICAgICAgbWF0Lm1hcCA9IHRleDtcbiAgICAgIG1hdC5idW1wTWFwID0gdGV4O1xuICAgICAgbWF0LmJ1bXBTY2FsZSA9IFcuYnVtcDtcbiAgICAgIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfTtcbiAgICBiaW5kKG1hdGVyaWFscy5zdHVjY28sIHdlYXJUaWxlKCdzdHVjY28nLCAyMDI2MDgyNikpO1xuICAgIGJpbmQobWF0ZXJpYWxzLnN0b25lLCB3ZWFyVGlsZSgnc3RvbmUnLCA4MjYxNDAzKSk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVDaGVkaU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogT05FLiBTdGF0aWMgbGFuZG1hcmsgZ2VvbWV0cnkgLS0gbm90aGluZyBvcGVucywgdHVybnMgb3Igc3dpbmdzLiBBIG5hbWVkIHBpdm90IGlzIGFcbiAgICAvLyBwcm9taXNlIHRoYXQgYSBwYXJ0IHR1cm5zIG9uIGl0LCBhbmQgYSBwcm9wIHRoYXQgZGVjbGFyZXMgcGl2b3RzIGl0IGhhcyBubyBtZWNoYW5pc21zIGZvclxuICAgIC8vIGhhcyBkZXNjcmliZWQgYSBtYWNoaW5lIHRoYXQgZG9lcyBub3QgZXhpc3QuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FLiBOb3RoaW5nIGF0dGFjaGVzIHRvIHRoaXMgcHJvcCBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBcUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixtQkFBbUI7QUFBQSxJQUNyQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixLQUFLO0FBQUEsTUFDTCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsWUFBWTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxNQUNWO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsSUFDVDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFD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
