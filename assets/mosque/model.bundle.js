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

// ../repo/scratch/mosque/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createMosqueModel: () => createMosqueModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "mosque",
  "name": "Mosque",
  "exportName": "Mosque",
  "envelope": "Envelope 14.00 x 12.00 x 16.00 m, origin base-center, +Y up.\n * Budget (hero4x): <=32000 triangles, <=24 draw calls, <=16 materials, <=32 unique geometries.",
  "materials": [
    {
      "id": "white",
      "color": 11842736,
      "roughness": 0.93,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "panel",
      "color": 11779489,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "dome",
      "color": 9673350,
      "roughness": 0.72,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "green",
      "color": 9475451,
      "roughness": 0.72,
      "metalness": 0
    },
    {
      "id": "deck",
      "color": 9407616,
      "roughness": 0.95,
      "metalness": 0
    },
    {
      "id": "dark",
      "color": 5133898,
      "roughness": 0.96,
      "metalness": 0
    },
    {
      "id": "gold",
      "color": 9800822,
      "roughness": 0.38,
      "metalness": 0.3,
      "envMapIntensity": 1.2
    }
  ],
  "geometry": {
    "court": {
      "hx": 7,
      "hz": 8,
      "t": 0.45,
      "h": 1.65,
      "copingH": 0.16,
      "copingProud": 0.05,
      "gate": {
        "w": 2.5,
        "h": 2.95,
        "d": 0.68,
        "door": {
          "w": 1.25,
          "spring": 1.75,
          "rise": 0.92,
          "shoulder": 0.08
        },
        "frame": {
          "inset": 0.14,
          "band": 0.09,
          "proud": 0.03
        }
      }
    },
    "hall": {
      "hx": 5.5,
      "zBack": -5.9,
      "zFront": 4,
      "wallTop": 4.9,
      "plinthH": 0.15,
      "plinthProud": 0.08,
      "loggia": {
        "depth": 1.8,
        "screenT": 0.6,
        "endWall": 0.6,
        "screenProud": 0.04
      },
      "ledge": {
        "y0": 4.88,
        "y1": 5.02,
        "proud": 0.1
      },
      "parapet": {
        "y0": 5.02,
        "y1": 5.32,
        "t": 0.3,
        "proud": 0.04,
        "bandProud": 0.03
      },
      "coping": {
        "y0": 5.32,
        "y1": 5.46,
        "proud": 0.12
      },
      "field": {
        "xHalf": 4.95,
        "y0": 0.15,
        "y1": 4.72,
        "t": 0.03
      }
    },
    "arch": {
      "open": {
        "xs": [
          -2.15,
          0,
          2.15
        ],
        "w": 1.55,
        "spring": 2.65,
        "rise": 1.2,
        "sill": 0.17,
        "shoulder": 0.09
      },
      "blind": {
        "xs": [
          -4.15,
          4.15
        ],
        "w": 1,
        "spring": 2.65,
        "rise": 0.85,
        "sill": 0.6,
        "shoulder": 0.07,
        "inner": {
          "inset": 0.22,
          "rise": 0.75,
          "sill": 0.95
        }
      },
      "frame": {
        "band": 0.14,
        "proud": 0.05,
        "back": 0.4
      }
    },
    "deck": {
      "y0": 5.02,
      "y1": 5.06,
      "inset": 0.3
    },
    "dome": {
      "z": -1.35,
      "podium": {
        "half": 2.65,
        "y0": 5.06,
        "y1": 5.55,
        "lipHalf": 2.74,
        "lipY1": 5.68
      },
      "drum": {
        "r": 2.25,
        "y0": 5.68,
        "y1": 6.98,
        "ringR": 2.34,
        "ringY1": 5.82,
        "seg": 40,
        "windows": {
          "n": 12,
          "w": 0.34,
          "h": 0.72,
          "y0": 6.02,
          "proud": 0.025
        }
      },
      "lip": {
        "r": 2.46,
        "y0": 6.95,
        "y1": 7.22
      },
      "body": {
        "r": 2.4,
        "y0": 7.18,
        "y1": 9.5,
        "bulge": 0.06,
        "ribs": 32,
        "amp": 0.022,
        "seg": 96,
        "steps": 14
      }
    },
    "valley": [
      0.3,
      0.39,
      0.32
    ],
    "crest": 0.35,
    "small": {
      "at": [
        [
          -4.18,
          -4.4
        ],
        [
          4.18,
          -4.4
        ],
        [
          -4.18,
          2.5
        ],
        [
          4.18,
          2.5
        ]
      ],
      "drum": {
        "r": 0.78,
        "y0": 5.06,
        "y1": 6.22,
        "ringR": 0.86,
        "ringY0": 6.06,
        "seg": 24
      },
      "body": {
        "r": 1,
        "y0": 6.18,
        "y1": 7.16,
        "bulge": 0.05,
        "ribs": 20,
        "amp": 0.03,
        "seg": 64,
        "steps": 10
      },
      "spike": {
        "y0": 7.12,
        "s": 0.45
      }
    },
    "minaret": {
      "x": -5.05,
      "z": -2.9,
      "halfBase": 0.66,
      "halfTop": 0.52,
      "shaftTop": 9.1,
      "corbel": {
        "y0": 8.7,
        "r0": 0.58,
        "r1": 0.95
      },
      "slab": {
        "y0": 9.1,
        "y1": 9.36,
        "r": 0.95
      },
      "rail": {
        "y0": 9.36,
        "y1": 9.72,
        "rOut": 0.92,
        "rIn": 0.78
      },
      "lantern": {
        "r": 0.56,
        "y0": 9.36,
        "y1": 10.5,
        "openings": {
          "n": 8,
          "w": 0.3,
          "h": 0.78,
          "y0": 9.6,
          "proud": 0.025
        }
      },
      "cornice": {
        "r": 0.68,
        "y0": 10.48,
        "y1": 10.64
      },
      "body": {
        "r": 0.62,
        "y0": 10.6,
        "y1": 11.48,
        "bulge": 0.06,
        "ribs": 16,
        "amp": 0.035,
        "seg": 48,
        "steps": 10
      }
    },
    "ornaments": [
      [
        0,
        9.47,
        -1.35,
        0.62,
        1.38,
        0.22
      ],
      [
        -5.05,
        11.46,
        -2.9,
        0.24,
        0.54,
        0.1
      ]
    ],
    "wear": {
      "size": 512,
      "tile": 6,
      "bump": 0.03,
      "streak": [
        0.5,
        0.5,
        0.46
      ],
      "band": [
        0.62,
        0.62,
        0.58
      ],
      "mottle": [
        0.88,
        0.88,
        0.85
      ],
      "damp": [
        0.8,
        0.79,
        0.7
      ],
      "grain": [
        0.55,
        0.55,
        0.52
      ],
      "deckStain": [
        0.55,
        0.56,
        0.52
      ],
      "deckMottle": [
        0.86,
        0.85,
        0.8
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
function cylAt(cx, cy, cz, rTop, rBot, h, seg = 16) {
  const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
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
function ribbedDome(profile, ribs, amp, seg, valley, crest = 0.55) {
  const tri = [];
  const col = [];
  const tint = (j) => {
    if (!valley) return [1, 1, 1];
    const f = Math.pow((1 - Math.cos(ribs * (j % seg * Math.PI * 2 / seg))) / 2, crest);
    return [1 + (valley[0] - 1) * f, 1 + (valley[1] - 1) * f, 1 + (valley[2] - 1) * f];
  };
  const push = (a, b, c) => tri.push(...a, ...b, ...c);
  const at = (i, j) => {
    const th = j % seg * Math.PI * 2 / seg;
    const f = 1 + amp * Math.cos(ribs * th);
    const r = profile[i][0] * f;
    return [Math.sin(th) * r, profile[i][1], Math.cos(th) * r];
  };
  for (let i = 0; i < profile.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = at(i, j), b = at(i, j + 1), c = at(i + 1, j + 1), d = at(i + 1, j);
      push(a, b, c);
      push(a, c, d);
      const ta = tint(j), tb = tint(j + 1);
      col.push(...ta, ...tb, ...tb, ...ta, ...tb, ...ta);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(tri), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(tri.length / 3 * 2), 2));
  if (valley) g.setAttribute("color", new THREE.BufferAttribute(new Float32Array(col), 3));
  g.computeVertexNormals();
  return g;
}
function pointedArchShape(w, spring, apexRise, sill, hole) {
  const build = (target, ww, sp, rise, sl) => {
    const hw = ww / 2;
    target.moveTo(hw, sl);
    target.lineTo(hw, sp);
    target.quadraticCurveTo(hw, sp + rise * 0.72, 0, sp + rise);
    target.quadraticCurveTo(-hw, sp + rise * 0.72, -hw, sp);
    target.lineTo(-hw, sl);
    target.closePath();
  };
  const shape = new THREE.Shape();
  build(shape, w, spring, apexRise, sill);
  if (hole) {
    const p = new THREE.Path();
    build(p, hole.w, hole.spring, hole.apexRise, hole.sill);
    shape.holes.push(p);
  }
  return shape;
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
function createMosqueModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Mosque";
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
  const inBrowser = typeof document !== "undefined" && typeof document.createElement === "function";
  const W = G.wear;
  const topUv = (geo, yTop, tile = W.tile, uShift = 0) => {
    const p = geo.getAttribute("position"), n = geo.getAttribute("normal");
    const uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
      let u, v;
      if (ay >= ax && ay >= az) {
        const zz = p.getZ(i) / (0.35 * tile);
        u = p.getX(i) / tile;
        v = 0.55 + 0.35 * (zz - Math.floor(zz));
      } else if (ax >= az) {
        u = p.getZ(i) / tile;
        v = (yTop - p.getY(i)) / tile;
      } else {
        u = p.getX(i) / tile;
        v = (yTop - p.getY(i)) / tile;
      }
      uv[i * 2] = u + uShift;
      uv[i * 2 + 1] = v;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    return geo;
  };
  const latheUv = (geo, yTop, rRef, tile = W.tile) => {
    const p = geo.getAttribute("position"), uv0 = geo.getAttribute("uv");
    const rep = Math.max(1, Math.round(2 * Math.PI * rRef / tile));
    const out = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      out[i * 2] = uv0.getX(i) * rep;
      out[i * 2 + 1] = (yTop - p.getY(i)) / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(out, 2));
    return geo;
  };
  const planarUv = (geo, tile) => {
    const p = geo.getAttribute("position"), uv = new Float32Array(p.count * 2);
    for (let i = 0; i < p.count; i++) {
      uv[i * 2] = p.getX(i) / tile;
      uv[i * 2 + 1] = p.getZ(i) / tile;
    }
    geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    return geo;
  };
  const tintAll = (geo, t) => {
    const c = geo.getAttribute("position").count, col = new Float32Array(c * 3);
    for (let i = 0; i < c; i++) {
      col[i * 3] = t[0];
      col[i * 3 + 1] = t[1];
      col[i * 3 + 2] = t[2];
    }
    geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
    return geo;
  };
  const rectShape = (x0, y0, x1, y1) => {
    const s = new THREE.Shape();
    s.moveTo(x0, y0);
    s.lineTo(x1, y0);
    s.lineTo(x1, y1);
    s.lineTo(x0, y1);
    s.closePath();
    return s;
  };
  const extrudeZ = (shape, z0, z1, seg = 10) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: seg });
    g.translate(0, 0, z0);
    g.computeVertexNormals();
    return g;
  };
  const prism = (cx, y0, cz, r, y1, n, rTop) => {
    const g = new THREE.CylinderGeometry(rTop ?? r, r, y1 - y0, n);
    g.rotateY(Math.PI / n);
    g.translate(cx, (y0 + y1) / 2, cz);
    return g;
  };
  const ring = (cx, cz, rIn, rOut, y0, y1, n) => {
    const g = lathe([[rIn, y0], [rOut, y0], [rOut, y1], [rIn, y1], [rIn, y0]], n);
    g.rotateY(Math.PI / n);
    g.translate(cx, 0, cz);
    return g;
  };
  const moorishArchPath = (target, w, spring, rise, sill, shoulder) => {
    const hw = w / 2, sw = hw + shoulder;
    const a = 0.22 * sw, R = Math.hypot(sw, a), cy = spring + a;
    const th = Math.asin(Math.min(0.985, Math.max(0.5, (0.72 * rise - a) / R)));
    const px = R * Math.cos(th), py = cy + R * Math.sin(th);
    const tx = -Math.sin(th), ty = Math.cos(th);
    const dx = Math.cos(1.2566), dy = -Math.sin(1.2566);
    const ax = 0, ay = spring + rise;
    const det = tx * -dy - -dx * ty;
    let s = ((ax - px) * -dy - -dx * (ay - py)) / det;
    if (!(s > 0) || !isFinite(s)) s = 0.1 * R;
    const cxp = px + s * tx, cyp = py + s * ty;
    const th0 = -Math.asin(a / R);
    const n = 8;
    target.moveTo(hw, sill);
    target.lineTo(hw, spring);
    if (shoulder > 0) target.lineTo(sw, spring);
    for (let i = 1; i <= n; i++) {
      const t = th0 + (th - th0) * (i / n);
      target.lineTo(R * Math.cos(t), cy + R * Math.sin(t));
    }
    target.quadraticCurveTo(cxp, cyp, ax, ay);
    target.quadraticCurveTo(-cxp, cyp, -px, py);
    for (let i = n - 1; i >= 0; i--) {
      const t = th0 + (th - th0) * (i / n);
      target.lineTo(-R * Math.cos(t), cy + R * Math.sin(t));
    }
    target.lineTo(-hw, spring);
    target.lineTo(-hw, sill);
    target.closePath();
  };
  const archPathAt = (target, A, x) => {
    const p = new THREE.Path();
    moorishArchPath(p, A.w, A.spring, A.rise, A.sill, A.shoulder);
    const pts = p.getPoints(6);
    target.moveTo(pts[0].x + x, pts[0].y);
    for (let i = 1; i < pts.length; i++) target.lineTo(pts[i].x + x, pts[i].y);
    target.closePath();
  };
  const archShape = (A, hole) => {
    const shape = new THREE.Shape();
    moorishArchPath(shape, A.w, A.spring, A.rise, A.sill, A.shoulder);
    if (hole) {
      const p = new THREE.Path();
      moorishArchPath(p, hole.w, hole.spring, hole.rise, hole.sill, hole.shoulder);
      shape.holes.push(p);
    }
    return shape;
  };
  const wallWithArches = (x0, y0, x1, y1, arches) => {
    const shape = rectShape(x0, y0, x1, y1);
    for (const { A, x } of arches) {
      const p = new THREE.Path();
      archPathAt(p, A, x);
      shape.holes.push(p);
    }
    return shape;
  };
  const crescentShape = (R, ri, off, n) => {
    const xi = (R * R - ri * ri + off * off) / (2 * off);
    const yi = Math.sqrt(Math.max(0, R * R - xi * xi));
    const a0 = Math.atan2(yi, xi), b0 = Math.atan2(yi, xi - off);
    const sh = new THREE.Shape();
    sh.moveTo(xi, yi);
    for (let i = 1; i <= n; i++) {
      const t = a0 + (2 * Math.PI - 2 * a0) * (i / n);
      sh.lineTo(R * Math.cos(t), R * Math.sin(t));
    }
    for (let i = 1; i < n; i++) {
      const t = -b0 - (2 * Math.PI - 2 * b0) * (i / n);
      sh.lineTo(off + ri * Math.cos(t), ri * Math.sin(t));
    }
    sh.closePath();
    return sh;
  };
  const domeProfile = (r, y0, y1, bulge, steps) => {
    const prof = [];
    for (let i = 0; i <= steps; i++) {
      const t = i / steps;
      prof.push([r * Math.cos(t * Math.PI * 0.5) * (1 + bulge * Math.sin(t * Math.PI)), y0 + (y1 - y0) * Math.sin(t * Math.PI * 0.5)]);
    }
    return prof;
  };
  {
    const C = G.court, GT = C.gate;
    const cc = C.hx - C.t / 2, ci = C.hx - C.t, dd = C.hz - C.t / 2;
    const parts = [
      boxAt(-cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(cc, C.h / 2, 0, C.t, C.h, C.hz * 2),
      boxAt(0, C.h / 2, -dd, ci * 2, C.h, C.t)
    ];
    const segLen = ci - GT.w / 2;
    parts.push(boxAt(-(GT.w / 2 + segLen / 2), C.h / 2, dd, segLen, C.h, C.t));
    parts.push(boxAt(GT.w / 2 + segLen / 2, C.h / 2, dd, segLen, C.h, C.t));
    const cp = C.t + 2 * C.copingProud, cy = C.h - C.copingH / 2 + 0.02, hh = C.copingH;
    parts.push(boxAt(-cc, cy, 0, cp, hh, C.hz * 2 + 2 * C.copingProud));
    parts.push(boxAt(cc, cy, 0, cp, hh, C.hz * 2 + 2 * C.copingProud));
    parts.push(boxAt(0, cy, -dd, (ci - C.copingProud) * 2, hh, cp));
    const cLen = ci - C.copingProud - GT.w / 2 - 0.02;
    parts.push(boxAt(-(GT.w / 2 + 0.02 + cLen / 2), cy, dd, cLen, hh, cp));
    parts.push(boxAt(GT.w / 2 + 0.02 + cLen / 2, cy, dd, cLen, hh, cp));
    {
      const D = GT.door;
      const block = rectShape(-GT.w / 2, 0, GT.w / 2, GT.h);
      const hole = new THREE.Path();
      moorishArchPath(hole, D.w, D.spring, D.rise, 0, D.shoulder);
      block.holes.push(hole);
      parts.push(extrudeZ(block, C.hz - GT.d, C.hz, 8));
      const F = GT.frame;
      for (const s of [-1, 1]) {
        const zf = C.hz - GT.d / 2 + s * (GT.d / 2 + F.proud / 2) - (s > 0 ? F.proud + 0 : 0);
        const xo = GT.w / 2 - F.inset, yTop = GT.h - F.inset, yBot = 0.35;
        parts.push(boxAt(-(xo - F.band / 2), (yTop + yBot) / 2, zf, F.band, yTop - yBot, F.proud));
        parts.push(boxAt(xo - F.band / 2, (yTop + yBot) / 2, zf, F.band, yTop - yBot, F.proud));
        parts.push(boxAt(0, yTop - F.band / 2, zf, xo * 2 - 2 * F.band, F.band, F.proud));
      }
      parts.push(boxAt(0, GT.h + 0.05, C.hz - GT.d / 2 - 0.02, GT.w + 0.1, 0.1, GT.d - 0.04));
    }
    const geo = mergeGeos(parts);
    tintByHeight(geo, 0, 0.9, [0.86, 0.86, 0.8]);
    topUv(geo, C.h);
    add("court-wall", "Courtyard wall and gate", geo, "white");
    colliders["court-wall"] = {
      shape: "box",
      localCenter: [0, 6, 0],
      halfExtents: [7, 6, 8],
      notes: 'Asset declares collider "box". One convex proxy over the whole envelope; a level builder collides with the compound, not with the minaret separately.'
    };
  }
  {
    const H = G.hall, L = H.loggia, A = G.arch, FR = A.frame;
    const parts = [];
    const zInner = H.zFront - L.depth - L.screenT;
    const zScreen0 = H.zFront - L.screenT;
    parts.push(boxAt(
      0,
      H.plinthH / 2,
      (H.zBack + H.zFront) / 2,
      (H.hx + H.plinthProud) * 2,
      H.plinthH,
      H.zFront - H.zBack + 2 * H.plinthProud
    ));
    {
      const u = new THREE.Shape();
      const hx = H.hx, ex = H.hx - L.endWall;
      u.moveTo(-hx, -H.zBack);
      u.lineTo(hx, -H.zBack);
      u.lineTo(hx, -zScreen0);
      u.lineTo(ex, -zScreen0);
      u.lineTo(ex, -zInner);
      u.lineTo(-ex, -zInner);
      u.lineTo(-ex, -zScreen0);
      u.lineTo(-hx, -zScreen0);
      u.closePath();
      parts.push(extrudeSlab(u, H.plinthH, H.wallTop));
    }
    {
      const hx = H.hx + L.screenProud;
      const open = A.open;
      const arches = open.xs.map((x) => ({ A: open, x }));
      parts.push(extrudeZ(wallWithArches(-hx, H.plinthH, hx, H.wallTop, arches), zScreen0, H.zFront, 10));
    }
    const LG = H.ledge, P = H.parapet, CP = H.coping;
    const zc = (H.zBack + H.zFront) / 2, zl = H.zFront - H.zBack;
    parts.push(boxAt(0, (LG.y0 + LG.y1) / 2, zc, (H.hx + LG.proud) * 2, LG.y1 - LG.y0, zl + 2 * LG.proud));
    const px = H.hx + P.proud, pz0 = H.zBack - P.proud, pz1 = H.zFront + P.proud, t = P.t;
    const py = (P.y0 + P.y1) / 2, ph = P.y1 - P.y0;
    parts.push(boxAt(-(px - t / 2), py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(px - t / 2, py, (pz0 + pz1) / 2, t, ph, pz1 - pz0));
    parts.push(boxAt(0, py, pz0 + t / 2, (px - t) * 2, ph, t));
    parts.push(boxAt(0, py, pz1 - t / 2, (px - t) * 2, ph, t));
    const cx = H.hx + CP.proud, cz0 = H.zBack - CP.proud, cz1 = H.zFront + CP.proud, ct = t + CP.proud - P.proud;
    const cyy = (CP.y0 + CP.y1) / 2, ch = CP.y1 - CP.y0;
    parts.push(boxAt(-(cx - ct / 2), cyy, (cz0 + cz1) / 2, ct, ch, cz1 - cz0));
    parts.push(boxAt(cx - ct / 2, cyy, (cz0 + cz1) / 2, ct, ch, cz1 - cz0));
    parts.push(boxAt(0, cyy, cz0 + ct / 2, (cx - ct) * 2, ch, ct));
    parts.push(boxAt(0, cyy, cz1 - ct / 2, (cx - ct) * 2, ch, ct));
    {
      const B = A.blind, I = B.inner;
      const fieldFront = H.zFront + H.field.t;
      for (const x of B.xs) {
        const outer = { w: B.w + 2 * FR.band, spring: B.spring - 0.4 * FR.band, rise: B.rise + 1.25 * FR.band, sill: B.sill - FR.band, shoulder: B.shoulder };
        const fr = extrudeZ(archShape(outer, B), H.zFront - 0.05, fieldFront + FR.proud, 10);
        fr.translate(x, 0, 0);
        parts.push(fr);
        const pw = B.w - 2 * I.inset;
        const pn = { w: pw, spring: B.spring - 0.4 * I.inset, rise: I.rise, sill: I.sill, shoulder: B.shoulder * 0.7 };
        const pg = extrudeZ(archShape(pn), H.zFront + 5e-3, fieldFront + 0.02, 8);
        pg.translate(x, 0, 0);
        parts.push(pg);
      }
    }
    const geo = mergeGeos(parts);
    tintByHeight(geo, 2.6, H.wallTop, [1, 1, 1]);
    {
      const p = geo.getAttribute("position"), c = geo.getAttribute("color");
      for (let i = 0; i < p.count; i++) {
        const y = p.getY(i);
        const tt = Math.min(1, Math.max(0, (y - 2.6) / (H.wallTop - 2.6)));
        const f = 1 - 0.14 * tt;
        c.setXYZ(i, f, f, f * 0.98);
      }
    }
    topUv(geo, H.wallTop);
    add("hall", "Prayer hall", geo, "white");
  }
  {
    const H = G.hall, L = H.loggia, A = G.arch, F = H.field, FR = A.frame;
    const zInner = H.zFront - L.depth - L.screenT;
    const open = A.open;
    const holeA = { w: open.w + 2 * FR.band - 0.04, spring: open.spring - 0.4 * FR.band, rise: open.rise + 1.25 * FR.band - 0.02, sill: F.y0 + 5e-3, shoulder: open.shoulder };
    const arches = open.xs.map((x) => ({ A: holeA, x }));
    const field = extrudeZ(wallWithArches(-F.xHalf, F.y0, F.xHalf, F.y1, arches), H.zFront, H.zFront + F.t, 10);
    const ex = H.hx - L.endWall;
    const inner = boxAt(0, (H.plinthH + H.wallTop) / 2, zInner + F.t / 2, ex * 2 - 0.02, H.wallTop - H.plinthH - 0.02, F.t);
    const geo = mergeGeos([field, inner]);
    tintAll(geo, [1, 1, 1]);
    topUv(geo, F.y1, W.tile, 0.37);
    add("field", "Green facade field and loggia wall", geo, "panel");
  }
  {
    const H = G.hall, A = G.arch, FR = A.frame, open = A.open;
    const outer = { w: open.w + 2 * FR.band, spring: open.spring - 0.4 * FR.band, rise: open.rise + 1.25 * FR.band, sill: open.sill - 0.05, shoulder: open.shoulder };
    const innerA = { w: open.w - 0.02, spring: open.spring, rise: open.rise - 0.01, sill: open.sill - 0.03, shoulder: open.shoulder - 0.01 };
    const frame = extrudeZ(archShape(outer, innerA), H.zFront - FR.back, H.zFront + H.field.t + FR.proud, 10);
    topUv(frame, H.wallTop);
    addInst(
      "arch-frames",
      "Arcade surrounds",
      frame,
      "white",
      open.xs.map((x) => new THREE.Matrix4().setPosition(x, 0, 0))
    );
  }
  {
    const H = G.hall, D = G.deck, P = H.parapet;
    const g = boxAt(
      0,
      (D.y0 + D.y1) / 2 + 5e-3,
      (H.zBack + H.zFront) / 2,
      (H.hx + P.proud - P.t - D.inset) * 2,
      D.y1 - D.y0,
      H.zFront - H.zBack + 2 * P.proud - 2 * P.t - 2 * D.inset
    );
    planarUv(g, 4);
    add("roof-deck", "Roof deck", g, "deck");
  }
  {
    const H = G.hall, P = H.parapet;
    const px = H.hx + P.proud + P.bandProud, pz0 = H.zBack - P.proud - P.bandProud, pz1 = H.zFront + P.proud + P.bandProud, t = 0.06;
    const by = (P.y0 + P.y1) / 2 + 0.01, bh = P.y1 - P.y0 - 0.04;
    add("parapet-band", "Green parapet band", mergeGeos([
      boxAt(-(px - t / 2), by, (pz0 + pz1) / 2, t, bh, pz1 - pz0),
      boxAt(px - t / 2, by, (pz0 + pz1) / 2, t, bh, pz1 - pz0),
      boxAt(0, by, pz0 + t / 2, (px - t) * 2, bh, t),
      boxAt(0, by, pz1 - t / 2, (px - t) * 2, bh, t)
    ]), "green");
  }
  {
    const D = G.dome.body, MN = G.minaret, MB = MN.body, V = G.valley;
    const great = ribbedDome(domeProfile(D.r, D.y0, D.y1, D.bulge, D.steps), D.ribs, D.amp, D.seg, V, G.crest);
    great.translate(0, 0, G.dome.z);
    const md = ribbedDome(domeProfile(MB.r, MB.y0, MB.y1, MB.bulge, MB.steps), MB.ribs, MB.amp, MB.seg, V, G.crest);
    md.translate(MN.x, 0, MN.z);
    add("domes", "Great dome and minaret dome", mergeGeos([great, md]), "dome");
  }
  {
    const DM = G.dome, PD = DM.podium, DR = DM.drum, LP = DM.lip;
    const parts = [
      topUv(boxAt(0, (PD.y0 + PD.y1) / 2, DM.z, PD.half * 2, PD.y1 - PD.y0, PD.half * 2), PD.lipY1),
      topUv(boxAt(0, (PD.y1 + PD.lipY1) / 2, DM.z, PD.lipHalf * 2, PD.lipY1 - PD.y1, PD.lipHalf * 2), PD.lipY1)
    ];
    const ringG = cylAt(0, (DR.y0 + DR.ringY1) / 2, 0, DR.ringR, DR.ringR, DR.ringY1 - DR.y0, DR.seg);
    const drumG = cylAt(0, (DR.ringY1 + DR.y1) / 2, 0, DR.r, DR.r, DR.y1 - DR.ringY1, DR.seg);
    const lipG = lathe([[0, LP.y0], [LP.r - 0.1, LP.y0], [LP.r, LP.y0 + 0.08], [LP.r, LP.y1 - 0.05], [LP.r - 0.06, LP.y1], [0, LP.y1]], DR.seg);
    for (const g of [ringG, drumG, lipG]) {
      latheUv(g, LP.y1, DR.r);
      g.translate(0, 0, DM.z);
      parts.push(g);
    }
    add("drum", "Dome drum", mergeGeos(parts), "white");
  }
  {
    const DM = G.dome, DR = DM.drum, WN = DR.windows, MN = G.minaret, LT = MN.lantern, LO = LT.openings;
    const parts = [];
    const plate = (w, h, y0) => {
      const s = pointedArchShape(w, y0 + h * 0.62, h * 0.38, y0);
      const g = new THREE.ExtrudeGeometry(s, { depth: 0.03, bevelEnabled: false, curveSegments: 6 });
      g.computeVertexNormals();
      return g;
    };
    for (let k = 0; k < WN.n; k++) {
      const a = (k + 0.5) * Math.PI * 2 / WN.n;
      const g = plate(WN.w, WN.h, WN.y0);
      g.rotateY(a);
      g.translate(Math.sin(a) * (DR.r + WN.proud - 0.03), 0, Math.cos(a) * (DR.r + WN.proud - 0.03) + DM.z);
      parts.push(g);
    }
    const inR = LT.r * Math.cos(Math.PI / LO.n);
    for (let k = 0; k < LO.n; k++) {
      const a = k * Math.PI * 2 / LO.n;
      const g = plate(LO.w, LO.h, LO.y0);
      g.rotateY(a);
      g.translate(MN.x + Math.sin(a) * (inR + LO.proud - 0.03), 0, MN.z + Math.cos(a) * (inR + LO.proud - 0.03));
      parts.push(g);
    }
    add("openings", "Drum windows and lantern openings", mergeGeos(parts), "dark");
  }
  {
    const S = G.small, SD = S.drum, SB = S.body;
    const drum = mergeGeos([
      cylAt(0, (SD.y0 + SD.ringY0) / 2 - SD.y0, 0, SD.r, SD.r, SD.ringY0 - SD.y0, SD.seg),
      cylAt(0, (SD.ringY0 + SD.y1) / 2 - SD.y0, 0, SD.ringR, SD.ringR - 0.03, SD.y1 - SD.ringY0, SD.seg)
    ]);
    latheUv(drum, SD.y1 - SD.y0, SD.r, 4);
    addInst(
      "small-drums",
      "Corner dome drums",
      drum,
      "white",
      S.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, SD.y0, z))
    );
    addInst(
      "small-domes",
      "Corner domes",
      ribbedDome(domeProfile(SB.r, 0, SB.y1 - SB.y0, SB.bulge, SB.steps), SB.ribs, SB.amp, SB.seg, G.valley, G.crest),
      "dome",
      S.at.map(([x, z]) => new THREE.Matrix4().setPosition(x, SB.y0, z))
    );
  }
  {
    const MN = G.minaret, CB = MN.corbel, SL = MN.slab, RL = MN.rail, LT = MN.lantern, CN = MN.cornice;
    const parts = [];
    const shaft = new THREE.CylinderGeometry(MN.halfTop * Math.SQRT2, MN.halfBase * Math.SQRT2, MN.shaftTop, 4);
    shaft.rotateY(Math.PI / 4);
    shaft.translate(MN.x, MN.shaftTop / 2, MN.z);
    const sg = shaft.toNonIndexed();
    sg.computeVertexNormals();
    shaft.dispose();
    parts.push(topUv(sg, MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, CB.y0, MN.z, CB.r0, SL.y0 + 0.01, 8, CB.r1), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, SL.y0, MN.z, SL.r, SL.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(ring(MN.x, MN.z, RL.rIn, RL.rOut, RL.y0, RL.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, LT.y0, MN.z, LT.r, LT.y1, 8), MN.shaftTop, W.tile, 0.61));
    parts.push(topUv(prism(MN.x, CN.y0, MN.z, CN.r, CN.y1, 8), MN.shaftTop, W.tile, 0.61));
    const geo = mergeGeos(parts);
    tintAll(geo, [1, 1, 1]);
    add("minaret", "Minaret", geo, "white");
  }
  {
    const S = G.small;
    const parts = [];
    for (const [x, z] of S.at) {
      const g = lathe([[0, 0], [0.16, 0.03], [0.2, 0.16], [0.1, 0.3], [0.13, 0.42], [0.07, 0.58], [0, 0.78]], 14);
      g.scale(S.spike.s, S.spike.s, S.spike.s);
      g.translate(x, S.spike.y0, z);
      parts.push(g);
    }
    for (const [x, y0, z, s, totalH, R] of G.ornaments) {
      const cap = lathe([[0, 0], [0.46, 0], [0.46, 0.05], [0.32, 0.2], [0.13, 0.33], [0.06, 0.38], [0.06, 0.46]], 16);
      cap.scale(s, s, s);
      cap.translate(x, y0, z);
      parts.push(cap);
      const ball = new THREE.SphereGeometry(0.17 * s, 14, 10);
      ball.translate(x, y0 + 0.6 * s, z);
      parts.push(ball);
      parts.push(cylAt(x, y0 + 0.84 * s, z, 0.045 * s, 0.055 * s, 0.22 * s, 10));
      const bulb = lathe([[0, 0], [0.1, 0.03], [0.12, 0.1], [0.085, 0.19], [0.04, 0.27], [0.03, 0.31]], 12);
      bulb.scale(s, s, s);
      bulb.translate(x, y0 + 0.92 * s, z);
      parts.push(bulb);
      const spikeBase = y0 + 1.2 * s, cBottom = y0 + totalH - 2 * R + 0.03;
      if (cBottom > spikeBase + 0.02) parts.push(cylAt(x, (spikeBase + cBottom) / 2, z, 0.025 * s, 0.032 * s, cBottom - spikeBase, 8));
      const t = Math.max(0.035, 0.16 * R);
      const cg = new THREE.ExtrudeGeometry(crescentShape(R, 0.85 * R, 0.28 * R, 14), { depth: t, bevelEnabled: false });
      cg.translate(0, 0, -t / 2);
      cg.rotateZ(Math.PI * 0.28);
      cg.translate(x, y0 + totalH - R, z);
      cg.computeVertexNormals();
      parts.push(cg);
    }
    add("finials", "Gilt finials and crescents", mergeGeos(parts), "gold");
  }
  if (inBrowser) {
    const size = Math.min(W.size, options.textureSize ?? W.size);
    const css = (t, a) => "rgba(" + Math.round(t[0] * 255) + "," + Math.round(t[1] * 255) + "," + Math.round(t[2] * 255) + "," + a + ")";
    const rng = (seed) => () => {
      seed = seed * 1664525 + 1013904223 >>> 0;
      return seed / 4294967296;
    };
    const makeTile = (kind, seed) => {
      const cv = document.createElement("canvas");
      cv.width = cv.height = size;
      const ctx = cv.getContext("2d", { willReadFrequently: true });
      if (!ctx) return null;
      const r = rng(seed), S = size;
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
      const mottle = (tone, count, alpha, rx0, ry0, yMin = 0, yMax = 1) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = (yMin + (yMax - yMin) * r()) * S, rx = S * rx0 * (0.5 + r()), ry = S * ry0 * (0.5 + r());
          const a = alpha * (0.5 + 0.5 * r());
          wrapped(() => {
            const g = ctx.createRadialGradient(0, 0, 0, 0, 0, 1);
            g.addColorStop(0, css(tone, a));
            g.addColorStop(1, css(tone, 0));
            ctx.save();
            ctx.translate(x, y);
            ctx.scale(rx, ry);
            ctx.fillStyle = g;
            ctx.fillRect(-1, -1, 2, 2);
            ctx.restore();
          });
        }
      };
      const blotch = (tone, count, rad, alpha, yMin = 0, yMax = 1) => {
        for (let i = 0; i < count; i++) {
          const p = new Path2D();
          let cx = r() * S, cy = (yMin + (yMax - yMin) * r()) * S, a = r() * Math.PI * 2;
          const R = rad * S * (0.5 + r()), n = 6 + Math.floor(r() * 12);
          for (let k = 0; k < n; k++) {
            a += (r() - 0.5) * 2.2;
            cx += Math.cos(a) * R * 0.4;
            cy += Math.sin(a) * R * 0.4;
            const rr = R * (0.35 + 0.5 * r());
            p.moveTo(cx + rr, cy);
            p.arc(cx, cy, rr, 0, Math.PI * 2);
          }
          const al = alpha * (0.6 + 0.4 * r());
          wrapped(() => {
            ctx.fillStyle = css(tone, al);
            ctx.fill(p);
          });
        }
      };
      const drips = (tone, count, alpha, y0, lenMin, lenMax, wMin, wMax) => {
        for (let i = 0; i < count; i++) {
          const x = r() * S, len = S * (lenMin + (lenMax - lenMin) * r()), w = wMin + (wMax - wMin) * r();
          const a = alpha * (0.4 + 0.6 * r()), yy = y0 * S + r() * S * 0.02;
          const p = new Path2D();
          let px = x;
          p.moveTo(px - w / 2, yy);
          const n = 6;
          for (let k = 1; k <= n; k++) {
            px += (r() - 0.5) * w * 0.8;
            p.lineTo(px - w / 2 * (1 - 0.5 * k / n), yy + len * k / n);
          }
          for (let k = n; k >= 0; k--) {
            p.lineTo(px + w / 2 * (1 - 0.5 * k / n), yy + len * k / n);
            px -= 0;
          }
          p.closePath();
          wrapped(() => {
            const g = ctx.createLinearGradient(0, yy, 0, yy + len);
            g.addColorStop(0, css(tone, a));
            g.addColorStop(0.35, css(tone, a * 0.7));
            g.addColorStop(1, css(tone, 0));
            ctx.fillStyle = g;
            ctx.fill(p);
          });
        }
      };
      const grain = (tone, count, alpha) => {
        const p = new Path2D();
        for (let i = 0; i < count; i++) {
          const x = r() * S, y = r() * S, d = 0.6 + r() * 1.6;
          p.rect(x, y, d, d);
        }
        wrapped(() => {
          ctx.fillStyle = css(tone, alpha);
          ctx.fill(p);
        });
      };
      if (kind === "render" || kind === "panel") {
        const k = kind === "panel" ? 0.75 : 1;
        mottle(W.mottle, 30, 0.3, 0.16, 0.1);
        mottle(W.damp, 16, 0.22 * k, 0.12, 0.07, 0.3, 1);
        wrapped(() => {
          const g = ctx.createLinearGradient(0, 0, 0, S * 0.07);
          g.addColorStop(0, css(W.band, 0.6 * k));
          g.addColorStop(1, css(W.band, 0));
          ctx.fillStyle = g;
          ctx.fillRect(0, 0, S, S * 0.07);
        });
        mottle(W.band, 24, 0.45 * k, 0.05, 0.014, 0, 0.05);
        drips(W.streak, 15, 0.62 * k, 4e-3, 0.14, 0.5, 3, 14);
        drips(W.streak, 16, 0.45 * k, 4e-3, 0.05, 0.2, 2, 7);
        drips(W.streak, 22, 0.35 * k, 4e-3, 0.015, 0.07, 2, 5);
        grain(W.grain, 1800, 0.09);
      } else {
        mottle(W.deckMottle, 40, 0.5, 0.16, 0.11);
        mottle(W.deckStain, 14, 0.3, 0.09, 0.06);
        blotch(W.deckStain, 10, 0.02, 0.22);
        grain(W.grain, 2200, 0.12);
      }
      return cv;
    };
    const bind = (mat, cv) => {
      if (!cv) return;
      const tex = new THREE.CanvasTexture(cv);
      tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
      tex.colorSpace = THREE.SRGBColorSpace;
      tex.flipY = false;
      tex.anisotropy = options.textureAnisotropy ?? 4;
      mat.map = tex;
      mat.bumpMap = tex;
      mat.bumpScale = W.bump;
      mat.needsUpdate = true;
    };
    bind(materials.white, makeTile("render", 20260901));
    bind(materials.panel, makeTile("panel", 9012026));
    bind(materials.deck, makeTile("deck", 1202609));
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createMosqueModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogTW9zcXVlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDE0LjAwIHggMTIuMDAgeCAxNi4wMCBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLlxuICogQnVkZ2V0IChoZXJvNHgpOiA8PTMyMDAwIHRyaWFuZ2xlcywgPD0yNCBkcmF3IGNhbGxzLCA8PTE2IG1hdGVyaWFscywgPD0zMiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgTU9OVU1FTlRBTCBidWlsZGluZ3MsIGFuZCB1bmxpa2UgdGhlIHNoYXJlZCByZXRhaWwgbW9kdWxlIGl0cyBmb3JtIGlzXG4gKiBub3QgYSBib3g6IHRoZSByZWNvZ25pc2FibGUgZmVhdHVyZSBpcyBhIGN1cnZlZCBvciB0aWVyZWQgcHJvZmlsZSB0aGF0IGhhcyB0byBzdXJ2aXZlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaGVyZSBpcyB0aGVyZWZvcmUgdGhlIExBVEhFIC0tXG4gKiBhIHByb2ZpbGUgcmV2b2x2ZWQgYWJvdXQgK1kgLS0gYW5kIHRoZSB0aWVyZWQvc3RlcHBlZCBtZXJnZSwgbm90IHRoZSBwYXJhbWV0ZXJpc2VkIHNob3Bmcm9udC5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcIm1vc3F1ZVwiLFxuICAgIFwibmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIk1vc3F1ZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxNC4wMCB4IDEyLjAwIHggMTYuMDAgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cC5cXG4gKiBCdWRnZXQgKGhlcm80eCk6IDw9MzIwMDAgdHJpYW5nbGVzLCA8PTI0IGRyYXcgY2FsbHMsIDw9MTYgbWF0ZXJpYWxzLCA8PTMyIHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcIndoaXRlXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTE4NDI3MzYsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuOTMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwYW5lbFwiLFxuICAgICAgICBcImNvbG9yXCI6IDExNzc5NDg5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZG9tZVwiLFxuICAgICAgICBcImNvbG9yXCI6IDk2NzMzNTAsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJncmVlblwiLFxuICAgICAgICBcImNvbG9yXCI6IDk0NzU0NTEsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNzIsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDBcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJkZWNrXCIsXG4gICAgICAgIFwiY29sb3JcIjogOTQwNzYxNixcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC45NSxcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImRhcmtcIixcbiAgICAgICAgXCJjb2xvclwiOiA1MTMzODk4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjk2LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ29sZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDk4MDA4MjIsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuMzgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMyxcbiAgICAgICAgXCJlbnZNYXBJbnRlbnNpdHlcIjogMS4yXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwiY291cnRcIjoge1xuICAgICAgICBcImh4XCI6IDcsXG4gICAgICAgIFwiaHpcIjogOCxcbiAgICAgICAgXCJ0XCI6IDAuNDUsXG4gICAgICAgIFwiaFwiOiAxLjY1LFxuICAgICAgICBcImNvcGluZ0hcIjogMC4xNixcbiAgICAgICAgXCJjb3BpbmdQcm91ZFwiOiAwLjA1LFxuICAgICAgICBcImdhdGVcIjoge1xuICAgICAgICAgIFwid1wiOiAyLjUsXG4gICAgICAgICAgXCJoXCI6IDIuOTUsXG4gICAgICAgICAgXCJkXCI6IDAuNjgsXG4gICAgICAgICAgXCJkb29yXCI6IHtcbiAgICAgICAgICAgIFwid1wiOiAxLjI1LFxuICAgICAgICAgICAgXCJzcHJpbmdcIjogMS43NSxcbiAgICAgICAgICAgIFwicmlzZVwiOiAwLjkyLFxuICAgICAgICAgICAgXCJzaG91bGRlclwiOiAwLjA4XG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImZyYW1lXCI6IHtcbiAgICAgICAgICAgIFwiaW5zZXRcIjogMC4xNCxcbiAgICAgICAgICAgIFwiYmFuZFwiOiAwLjA5LFxuICAgICAgICAgICAgXCJwcm91ZFwiOiAwLjAzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgXCJoYWxsXCI6IHtcbiAgICAgICAgXCJoeFwiOiA1LjUsXG4gICAgICAgIFwiekJhY2tcIjogLTUuOSxcbiAgICAgICAgXCJ6RnJvbnRcIjogNCxcbiAgICAgICAgXCJ3YWxsVG9wXCI6IDQuOSxcbiAgICAgICAgXCJwbGludGhIXCI6IDAuMTUsXG4gICAgICAgIFwicGxpbnRoUHJvdWRcIjogMC4wOCxcbiAgICAgICAgXCJsb2dnaWFcIjoge1xuICAgICAgICAgIFwiZGVwdGhcIjogMS44LFxuICAgICAgICAgIFwic2NyZWVuVFwiOiAwLjYsXG4gICAgICAgICAgXCJlbmRXYWxsXCI6IDAuNixcbiAgICAgICAgICBcInNjcmVlblByb3VkXCI6IDAuMDRcbiAgICAgICAgfSxcbiAgICAgICAgXCJsZWRnZVwiOiB7XG4gICAgICAgICAgXCJ5MFwiOiA0Ljg4LFxuICAgICAgICAgIFwieTFcIjogNS4wMixcbiAgICAgICAgICBcInByb3VkXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICBcInBhcmFwZXRcIjoge1xuICAgICAgICAgIFwieTBcIjogNS4wMixcbiAgICAgICAgICBcInkxXCI6IDUuMzIsXG4gICAgICAgICAgXCJ0XCI6IDAuMyxcbiAgICAgICAgICBcInByb3VkXCI6IDAuMDQsXG4gICAgICAgICAgXCJiYW5kUHJvdWRcIjogMC4wM1xuICAgICAgICB9LFxuICAgICAgICBcImNvcGluZ1wiOiB7XG4gICAgICAgICAgXCJ5MFwiOiA1LjMyLFxuICAgICAgICAgIFwieTFcIjogNS40NixcbiAgICAgICAgICBcInByb3VkXCI6IDAuMTJcbiAgICAgICAgfSxcbiAgICAgICAgXCJmaWVsZFwiOiB7XG4gICAgICAgICAgXCJ4SGFsZlwiOiA0Ljk1LFxuICAgICAgICAgIFwieTBcIjogMC4xNSxcbiAgICAgICAgICBcInkxXCI6IDQuNzIsXG4gICAgICAgICAgXCJ0XCI6IDAuMDNcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiYXJjaFwiOiB7XG4gICAgICAgIFwib3BlblwiOiB7XG4gICAgICAgICAgXCJ4c1wiOiBbXG4gICAgICAgICAgICAtMi4xNSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAyLjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIndcIjogMS41NSxcbiAgICAgICAgICBcInNwcmluZ1wiOiAyLjY1LFxuICAgICAgICAgIFwicmlzZVwiOiAxLjIsXG4gICAgICAgICAgXCJzaWxsXCI6IDAuMTcsXG4gICAgICAgICAgXCJzaG91bGRlclwiOiAwLjA5XG4gICAgICAgIH0sXG4gICAgICAgIFwiYmxpbmRcIjoge1xuICAgICAgICAgIFwieHNcIjogW1xuICAgICAgICAgICAgLTQuMTUsXG4gICAgICAgICAgICA0LjE1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIndcIjogMSxcbiAgICAgICAgICBcInNwcmluZ1wiOiAyLjY1LFxuICAgICAgICAgIFwicmlzZVwiOiAwLjg1LFxuICAgICAgICAgIFwic2lsbFwiOiAwLjYsXG4gICAgICAgICAgXCJzaG91bGRlclwiOiAwLjA3LFxuICAgICAgICAgIFwiaW5uZXJcIjoge1xuICAgICAgICAgICAgXCJpbnNldFwiOiAwLjIyLFxuICAgICAgICAgICAgXCJyaXNlXCI6IDAuNzUsXG4gICAgICAgICAgICBcInNpbGxcIjogMC45NVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJmcmFtZVwiOiB7XG4gICAgICAgICAgXCJiYW5kXCI6IDAuMTQsXG4gICAgICAgICAgXCJwcm91ZFwiOiAwLjA1LFxuICAgICAgICAgIFwiYmFja1wiOiAwLjRcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiZGVja1wiOiB7XG4gICAgICAgIFwieTBcIjogNS4wMixcbiAgICAgICAgXCJ5MVwiOiA1LjA2LFxuICAgICAgICBcImluc2V0XCI6IDAuM1xuICAgICAgfSxcbiAgICAgIFwiZG9tZVwiOiB7XG4gICAgICAgIFwielwiOiAtMS4zNSxcbiAgICAgICAgXCJwb2RpdW1cIjoge1xuICAgICAgICAgIFwiaGFsZlwiOiAyLjY1LFxuICAgICAgICAgIFwieTBcIjogNS4wNixcbiAgICAgICAgICBcInkxXCI6IDUuNTUsXG4gICAgICAgICAgXCJsaXBIYWxmXCI6IDIuNzQsXG4gICAgICAgICAgXCJsaXBZMVwiOiA1LjY4XG4gICAgICAgIH0sXG4gICAgICAgIFwiZHJ1bVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDIuMjUsXG4gICAgICAgICAgXCJ5MFwiOiA1LjY4LFxuICAgICAgICAgIFwieTFcIjogNi45OCxcbiAgICAgICAgICBcInJpbmdSXCI6IDIuMzQsXG4gICAgICAgICAgXCJyaW5nWTFcIjogNS44MixcbiAgICAgICAgICBcInNlZ1wiOiA0MCxcbiAgICAgICAgICBcIndpbmRvd3NcIjoge1xuICAgICAgICAgICAgXCJuXCI6IDEyLFxuICAgICAgICAgICAgXCJ3XCI6IDAuMzQsXG4gICAgICAgICAgICBcImhcIjogMC43MixcbiAgICAgICAgICAgIFwieTBcIjogNi4wMixcbiAgICAgICAgICAgIFwicHJvdWRcIjogMC4wMjVcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFwibGlwXCI6IHtcbiAgICAgICAgICBcInJcIjogMi40NixcbiAgICAgICAgICBcInkwXCI6IDYuOTUsXG4gICAgICAgICAgXCJ5MVwiOiA3LjIyXG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDIuNCxcbiAgICAgICAgICBcInkwXCI6IDcuMTgsXG4gICAgICAgICAgXCJ5MVwiOiA5LjUsXG4gICAgICAgICAgXCJidWxnZVwiOiAwLjA2LFxuICAgICAgICAgIFwicmlic1wiOiAzMixcbiAgICAgICAgICBcImFtcFwiOiAwLjAyMixcbiAgICAgICAgICBcInNlZ1wiOiA5NixcbiAgICAgICAgICBcInN0ZXBzXCI6IDE0XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcInZhbGxleVwiOiBbXG4gICAgICAgIDAuMyxcbiAgICAgICAgMC4zOSxcbiAgICAgICAgMC4zMlxuICAgICAgXSxcbiAgICAgIFwiY3Jlc3RcIjogMC4zNSxcbiAgICAgIFwic21hbGxcIjoge1xuICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtNC4xOCxcbiAgICAgICAgICAgIC00LjRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQuMTgsXG4gICAgICAgICAgICAtNC40XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtNC4xOCxcbiAgICAgICAgICAgIDIuNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNC4xOCxcbiAgICAgICAgICAgIDIuNVxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJkcnVtXCI6IHtcbiAgICAgICAgICBcInJcIjogMC43OCxcbiAgICAgICAgICBcInkwXCI6IDUuMDYsXG4gICAgICAgICAgXCJ5MVwiOiA2LjIyLFxuICAgICAgICAgIFwicmluZ1JcIjogMC44NixcbiAgICAgICAgICBcInJpbmdZMFwiOiA2LjA2LFxuICAgICAgICAgIFwic2VnXCI6IDI0XG4gICAgICAgIH0sXG4gICAgICAgIFwiYm9keVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDEsXG4gICAgICAgICAgXCJ5MFwiOiA2LjE4LFxuICAgICAgICAgIFwieTFcIjogNy4xNixcbiAgICAgICAgICBcImJ1bGdlXCI6IDAuMDUsXG4gICAgICAgICAgXCJyaWJzXCI6IDIwLFxuICAgICAgICAgIFwiYW1wXCI6IDAuMDMsXG4gICAgICAgICAgXCJzZWdcIjogNjQsXG4gICAgICAgICAgXCJzdGVwc1wiOiAxMFxuICAgICAgICB9LFxuICAgICAgICBcInNwaWtlXCI6IHtcbiAgICAgICAgICBcInkwXCI6IDcuMTIsXG4gICAgICAgICAgXCJzXCI6IDAuNDVcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwibWluYXJldFwiOiB7XG4gICAgICAgIFwieFwiOiAtNS4wNSxcbiAgICAgICAgXCJ6XCI6IC0yLjksXG4gICAgICAgIFwiaGFsZkJhc2VcIjogMC42NixcbiAgICAgICAgXCJoYWxmVG9wXCI6IDAuNTIsXG4gICAgICAgIFwic2hhZnRUb3BcIjogOS4xLFxuICAgICAgICBcImNvcmJlbFwiOiB7XG4gICAgICAgICAgXCJ5MFwiOiA4LjcsXG4gICAgICAgICAgXCJyMFwiOiAwLjU4LFxuICAgICAgICAgIFwicjFcIjogMC45NVxuICAgICAgICB9LFxuICAgICAgICBcInNsYWJcIjoge1xuICAgICAgICAgIFwieTBcIjogOS4xLFxuICAgICAgICAgIFwieTFcIjogOS4zNixcbiAgICAgICAgICBcInJcIjogMC45NVxuICAgICAgICB9LFxuICAgICAgICBcInJhaWxcIjoge1xuICAgICAgICAgIFwieTBcIjogOS4zNixcbiAgICAgICAgICBcInkxXCI6IDkuNzIsXG4gICAgICAgICAgXCJyT3V0XCI6IDAuOTIsXG4gICAgICAgICAgXCJySW5cIjogMC43OFxuICAgICAgICB9LFxuICAgICAgICBcImxhbnRlcm5cIjoge1xuICAgICAgICAgIFwiclwiOiAwLjU2LFxuICAgICAgICAgIFwieTBcIjogOS4zNixcbiAgICAgICAgICBcInkxXCI6IDEwLjUsXG4gICAgICAgICAgXCJvcGVuaW5nc1wiOiB7XG4gICAgICAgICAgICBcIm5cIjogOCxcbiAgICAgICAgICAgIFwid1wiOiAwLjMsXG4gICAgICAgICAgICBcImhcIjogMC43OCxcbiAgICAgICAgICAgIFwieTBcIjogOS42LFxuICAgICAgICAgICAgXCJwcm91ZFwiOiAwLjAyNVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgXCJjb3JuaWNlXCI6IHtcbiAgICAgICAgICBcInJcIjogMC42OCxcbiAgICAgICAgICBcInkwXCI6IDEwLjQ4LFxuICAgICAgICAgIFwieTFcIjogMTAuNjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJib2R5XCI6IHtcbiAgICAgICAgICBcInJcIjogMC42MixcbiAgICAgICAgICBcInkwXCI6IDEwLjYsXG4gICAgICAgICAgXCJ5MVwiOiAxMS40OCxcbiAgICAgICAgICBcImJ1bGdlXCI6IDAuMDYsXG4gICAgICAgICAgXCJyaWJzXCI6IDE2LFxuICAgICAgICAgIFwiYW1wXCI6IDAuMDM1LFxuICAgICAgICAgIFwic2VnXCI6IDQ4LFxuICAgICAgICAgIFwic3RlcHNcIjogMTBcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwib3JuYW1lbnRzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgOS40NyxcbiAgICAgICAgICAtMS4zNSxcbiAgICAgICAgICAwLjYyLFxuICAgICAgICAgIDEuMzgsXG4gICAgICAgICAgMC4yMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTUuMDUsXG4gICAgICAgICAgMTEuNDYsXG4gICAgICAgICAgLTIuOSxcbiAgICAgICAgICAwLjI0LFxuICAgICAgICAgIDAuNTQsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcIndlYXJcIjoge1xuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcInRpbGVcIjogNixcbiAgICAgICAgXCJidW1wXCI6IDAuMDMsXG4gICAgICAgIFwic3RyZWFrXCI6IFtcbiAgICAgICAgICAwLjUsXG4gICAgICAgICAgMC41LFxuICAgICAgICAgIDAuNDZcbiAgICAgICAgXSxcbiAgICAgICAgXCJiYW5kXCI6IFtcbiAgICAgICAgICAwLjYyLFxuICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgMC41OFxuICAgICAgICBdLFxuICAgICAgICBcIm1vdHRsZVwiOiBbXG4gICAgICAgICAgMC44OCxcbiAgICAgICAgICAwLjg4LFxuICAgICAgICAgIDAuODVcbiAgICAgICAgXSxcbiAgICAgICAgXCJkYW1wXCI6IFtcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMC43OSxcbiAgICAgICAgICAwLjdcbiAgICAgICAgXSxcbiAgICAgICAgXCJncmFpblwiOiBbXG4gICAgICAgICAgMC41NSxcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIDAuNTJcbiAgICAgICAgXSxcbiAgICAgICAgXCJkZWNrU3RhaW5cIjogW1xuICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgMC41NixcbiAgICAgICAgICAwLjUyXG4gICAgICAgIF0sXG4gICAgICAgIFwiZGVja01vdHRsZVwiOiBbXG4gICAgICAgICAgMC44NixcbiAgICAgICAgICAwLjg1LFxuICAgICAgICAgIDAuOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10sIGNyZXN0ID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIC8vIGBjcmVzdGAgYmVsb3cgMC41NSBuYXJyb3dzIHRoZSBwYWxlIGNyZXN0IGZ1cnRoZXI6IHRoZSBtb3NxdWUncyBwbGF0ZSBhdCAzeCBzaG93cyB0aGUgcGFsZVxuICAgIC8vIHJpYiBhcyBhYm91dCBhIHF1YXJ0ZXIgb2YgdGhlIHBpdGNoLCB3aGljaCBpcyAwLjM1LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCBjcmVzdCk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb3NxdWVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ01vc3F1ZSc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICBjb25zdCBpbkJyb3dzZXIgPSB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiAoZG9jdW1lbnQgYXMgYW55KS5jcmVhdGVFbGVtZW50ID09PSAnZnVuY3Rpb24nO1xuICBjb25zdCBXID0gRy53ZWFyO1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gVVYgaGVscGVyc1xuICAgKiBFdmVyeSB3ZWF0aGVyZWQgc3VyZmFjZSBzYW1wbGVzIGEgbWV0cmUtc2NhbGVkIHRpbGUuIHRvcFV2IGtleXMgdiB0byB0aGUgVE9QIG9mIHRoZSBwYXJ0IGl0IGlzXG4gICAqIGNhbGxlZCBmb3IsIHNvIHRoZSB0aWxlJ3Mgb3duIHRvcCByb3cgLS0gd2hlcmUgdGhlIHN0cmVha3MgaGFuZyBmcm9tIC0tIGxhbmRzIG9uIHRoYXQgcGFydCdzXG4gICAqIGNvcGluZy4gVXAtIGFuZCBkb3duLWZhY2luZyBmYWNlcyBzYW1wbGUgYSBjbGVhbiBzdHJpcCBvZiB0aGUgdGlsZSAodiAwLjYyLi4wLjc4KSBzbyBubyBzdHJlYWtcbiAgICogYmFyIGNyb3NzZXMgYSBjb3BpbmcgdG9wLiBMYXRoZXMga2VlcCB0aGVpciBvd24gc2VhbWxlc3MgdSwgc2NhbGVkIHRvIHdob2xlIHJlcGVhdHMuICovXG4gIGNvbnN0IHRvcFV2ID0gKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHlUb3A6IG51bWJlciwgdGlsZSA9IFcudGlsZSwgdVNoaWZ0ID0gMCkgPT4ge1xuICAgIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gICAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgYXggPSBNYXRoLmFicyhuLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG4uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobi5nZXRaKGkpKTtcbiAgICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICAgIGlmIChheSA+PSBheCAmJiBheSA+PSBheikgeyBjb25zdCB6eiA9IHAuZ2V0WihpKSAvICgwLjM1ICogdGlsZSk7IHUgPSBwLmdldFgoaSkgLyB0aWxlOyB2ID0gMC41NSArIDAuMzUgKiAoenogLSBNYXRoLmZsb29yKHp6KSk7IH1cbiAgICAgIGVsc2UgaWYgKGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSkgLyB0aWxlOyB2ID0gKHlUb3AgLSBwLmdldFkoaSkpIC8gdGlsZTsgfVxuICAgICAgZWxzZSB7IHUgPSBwLmdldFgoaSkgLyB0aWxlOyB2ID0gKHlUb3AgLSBwLmdldFkoaSkpIC8gdGlsZTsgfVxuICAgICAgdXZbaSAqIDJdID0gdSArIHVTaGlmdDsgdXZbaSAqIDIgKyAxXSA9IHY7XG4gICAgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIHJldHVybiBnZW87XG4gIH07XG4gIGNvbnN0IGxhdGhlVXYgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeVRvcDogbnVtYmVyLCByUmVmOiBudW1iZXIsIHRpbGUgPSBXLnRpbGUpID0+IHtcbiAgICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgdXYwID0gZ2VvLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogclJlZiAvIHRpbGUpKTtcbiAgICBjb25zdCBvdXQgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgeyBvdXRbaSAqIDJdID0gdXYwLmdldFgoaSkgKiByZXA7IG91dFtpICogMiArIDFdID0gKHlUb3AgLSBwLmdldFkoaSkpIC8gdGlsZTsgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShvdXQsIDIpKTtcbiAgICByZXR1cm4gZ2VvO1xuICB9O1xuICBjb25zdCBwbGFuYXJVdiA9IChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB0aWxlOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgeyB1dltpICogMl0gPSBwLmdldFgoaSkgLyB0aWxlOyB1dltpICogMiArIDFdID0gcC5nZXRaKGkpIC8gdGlsZTsgfVxuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIHJldHVybiBnZW87XG4gIH07XG4gIGNvbnN0IHRpbnRBbGwgPSAoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBjID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudCwgY29sID0gbmV3IEZsb2F0MzJBcnJheShjICogMyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjOyBpKyspIHsgY29sW2kgKiAzXSA9IHRbMF07IGNvbFtpICogMyArIDFdID0gdFsxXTsgY29sW2kgKiAzICsgMl0gPSB0WzJdOyB9XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICAgIHJldHVybiBnZW87XG4gIH07XG4gIGNvbnN0IHJlY3RTaGFwZSA9ICh4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcyA9IG5ldyBUSFJFRS5TaGFwZSgpOyBzLm1vdmVUbyh4MCwgeTApOyBzLmxpbmVUbyh4MSwgeTApOyBzLmxpbmVUbyh4MSwgeTEpOyBzLmxpbmVUbyh4MCwgeTEpOyBzLmNsb3NlUGF0aCgpOyByZXR1cm4gcztcbiAgfTtcbiAgLyoqIEV4dHJ1ZGUgYW4gWFkgc2hhcGUgYmV0d2VlbiB0d28gZGVwdGhzIGFsb25nICtaLiAqL1xuICBjb25zdCBleHRydWRlWiA9IChzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIsIHNlZyA9IDEwKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IHNlZyB9KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIC8qKiBBbiBuLWdvbiBwcmlzbSAob2N0YWdvbiBhdCA4KSBhYm91dCArWSwgZmFjZXMgYWxpZ25lZCBzbyBvbmUgZmFjZSBsb29rcyBhbG9uZyArWC4gKi9cbiAgY29uc3QgcHJpc20gPSAoY3g6IG51bWJlciwgeTA6IG51bWJlciwgY3o6IG51bWJlciwgcjogbnVtYmVyLCB5MTogbnVtYmVyLCBuOiBudW1iZXIsIHJUb3A/OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCA/PyByLCByLCB5MSAtIHkwLCBuKTtcbiAgICBnLnJvdGF0ZVkoTWF0aC5QSSAvIG4pOyBnLnRyYW5zbGF0ZShjeCwgKHkwICsgeTEpIC8gMiwgY3opOyByZXR1cm4gZztcbiAgfTtcbiAgLyoqIEEgaG9sbG93IHJpbmc6IGxhdGhlIG9mIGEgcmVjdGFuZ3VsYXIgc2VjdGlvbiwgbiBzZWdtZW50cy4gKi9cbiAgY29uc3QgcmluZyA9IChjeDogbnVtYmVyLCBjejogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBuOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbGF0aGUoW1tySW4sIHkwXSwgW3JPdXQsIHkwXSwgW3JPdXQsIHkxXSwgW3JJbiwgeTFdLCBbckluLCB5MF1dLCBuKTtcbiAgICBnLnJvdGF0ZVkoTWF0aC5QSSAvIG4pOyBnLnRyYW5zbGF0ZShjeCwgMCwgY3opOyByZXR1cm4gZztcbiAgfTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBNb29yaXNoIGFyY2hcbiAgICogVmVydGljYWwgamFtYnMsIGEgc2hvdWxkZXIgc3RlcHBpbmcgT1VUIGF0IHRoZSBzcHJpbmcsIGEgcm91bmQgbG9iZSwgYW4gb2dlZSBwb2ludC4gKi9cbiAgY29uc3QgbW9vcmlzaEFyY2hQYXRoID0gKHRhcmdldDogVEhSRUUuUGF0aCwgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGRlcjogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3IC8gMiwgc3cgPSBodyArIHNob3VsZGVyO1xuICAgIGNvbnN0IGEgPSAwLjIyICogc3csIFIgPSBNYXRoLmh5cG90KHN3LCBhKSwgY3kgPSBzcHJpbmcgKyBhO1xuICAgIGNvbnN0IHRoID0gTWF0aC5hc2luKE1hdGgubWluKDAuOTg1LCBNYXRoLm1heCgwLjUsICgwLjcyICogcmlzZSAtIGEpIC8gUikpKTtcbiAgICBjb25zdCBweCA9IFIgKiBNYXRoLmNvcyh0aCksIHB5ID0gY3kgKyBSICogTWF0aC5zaW4odGgpO1xuICAgIGNvbnN0IHR4ID0gLU1hdGguc2luKHRoKSwgdHkgPSBNYXRoLmNvcyh0aCk7XG4gICAgY29uc3QgZHggPSBNYXRoLmNvcygxLjI1NjYpLCBkeSA9IC1NYXRoLnNpbigxLjI1NjYpO1xuICAgIGNvbnN0IGF4ID0gMCwgYXkgPSBzcHJpbmcgKyByaXNlO1xuICAgIGNvbnN0IGRldCA9IHR4ICogKC1keSkgLSAoLWR4KSAqIHR5O1xuICAgIGxldCBzID0gKChheCAtIHB4KSAqICgtZHkpIC0gKC1keCkgKiAoYXkgLSBweSkpIC8gZGV0O1xuICAgIGlmICghKHMgPiAwKSB8fCAhaXNGaW5pdGUocykpIHMgPSAwLjEgKiBSO1xuICAgIGNvbnN0IGN4cCA9IHB4ICsgcyAqIHR4LCBjeXAgPSBweSArIHMgKiB0eTtcbiAgICBjb25zdCB0aDAgPSAtTWF0aC5hc2luKGEgLyBSKTtcbiAgICBjb25zdCBuID0gODtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzaWxsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcHJpbmcpO1xuICAgIGlmIChzaG91bGRlciA+IDApIHRhcmdldC5saW5lVG8oc3csIHNwcmluZyk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IHQgPSB0aDAgKyAodGggLSB0aDApICogKGkgLyBuKTsgdGFyZ2V0LmxpbmVUbyhSICogTWF0aC5jb3ModCksIGN5ICsgUiAqIE1hdGguc2luKHQpKTsgfVxuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGN4cCwgY3lwLCBheCwgYXkpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1jeHAsIGN5cCwgLXB4LCBweSk7XG4gICAgZm9yIChsZXQgaSA9IG4gLSAxOyBpID49IDA7IGktLSkgeyBjb25zdCB0ID0gdGgwICsgKHRoIC0gdGgwKSAqIChpIC8gbik7IHRhcmdldC5saW5lVG8oLVIgKiBNYXRoLmNvcyh0KSwgY3kgKyBSICogTWF0aC5zaW4odCkpOyB9XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNwcmluZyk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNpbGwpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgdHlwZSBBcmNoID0geyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciwgc2hvdWxkZXI6IG51bWJlciB9O1xuICBjb25zdCBhcmNoUGF0aEF0ID0gKHRhcmdldDogVEhSRUUuUGF0aCwgQTogQXJjaCwgeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgbW9vcmlzaEFyY2hQYXRoKHAsIEEudywgQS5zcHJpbmcsIEEucmlzZSwgQS5zaWxsLCBBLnNob3VsZGVyKTtcbiAgICBjb25zdCBwdHMgPSBwLmdldFBvaW50cyg2KTtcbiAgICB0YXJnZXQubW92ZVRvKHB0c1swXS54ICsgeCwgcHRzWzBdLnkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSB0YXJnZXQubGluZVRvKHB0c1tpXS54ICsgeCwgcHRzW2ldLnkpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3QgYXJjaFNoYXBlID0gKEE6IEFyY2gsIGhvbGU/OiBBcmNoKSA9PiB7XG4gICAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgICBtb29yaXNoQXJjaFBhdGgoc2hhcGUsIEEudywgQS5zcHJpbmcsIEEucmlzZSwgQS5zaWxsLCBBLnNob3VsZGVyKTtcbiAgICBpZiAoaG9sZSkgeyBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTsgbW9vcmlzaEFyY2hQYXRoKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUucmlzZSwgaG9sZS5zaWxsLCBob2xlLnNob3VsZGVyKTsgc2hhcGUuaG9sZXMucHVzaChwKTsgfVxuICAgIHJldHVybiBzaGFwZTtcbiAgfTtcbiAgLyoqIEEgcmVjdGFuZ3VsYXIgc2hhcGUgd2l0aCBNb29yaXNoLWFyY2ggaG9sZXMgY3V0IHRocm91Z2ggaXQgYXQgdGhlIGdpdmVuIHggcG9zaXRpb25zLiAqL1xuICBjb25zdCB3YWxsV2l0aEFyY2hlcyA9ICh4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4MTogbnVtYmVyLCB5MTogbnVtYmVyLCBhcmNoZXM6IHsgQTogQXJjaCwgeDogbnVtYmVyIH1bXSkgPT4ge1xuICAgIGNvbnN0IHNoYXBlID0gcmVjdFNoYXBlKHgwLCB5MCwgeDEsIHkxKTtcbiAgICBmb3IgKGNvbnN0IHsgQSwgeCB9IG9mIGFyY2hlcykgeyBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTsgYXJjaFBhdGhBdChwLCBBLCB4KTsgc2hhcGUuaG9sZXMucHVzaChwKTsgfVxuICAgIHJldHVybiBzaGFwZTtcbiAgfTtcbiAgY29uc3QgY3Jlc2NlbnRTaGFwZSA9IChSOiBudW1iZXIsIHJpOiBudW1iZXIsIG9mZjogbnVtYmVyLCBuOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB4aSA9IChSICogUiAtIHJpICogcmkgKyBvZmYgKiBvZmYpIC8gKDIgKiBvZmYpO1xuICAgIGNvbnN0IHlpID0gTWF0aC5zcXJ0KE1hdGgubWF4KDAsIFIgKiBSIC0geGkgKiB4aSkpO1xuICAgIGNvbnN0IGEwID0gTWF0aC5hdGFuMih5aSwgeGkpLCBiMCA9IE1hdGguYXRhbjIoeWksIHhpIC0gb2ZmKTtcbiAgICBjb25zdCBzaCA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgIHNoLm1vdmVUbyh4aSwgeWkpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgeyBjb25zdCB0ID0gYTAgKyAoMiAqIE1hdGguUEkgLSAyICogYTApICogKGkgLyBuKTsgc2gubGluZVRvKFIgKiBNYXRoLmNvcyh0KSwgUiAqIE1hdGguc2luKHQpKTsgfVxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbjsgaSsrKSB7IGNvbnN0IHQgPSAtYjAgLSAoMiAqIE1hdGguUEkgLSAyICogYjApICogKGkgLyBuKTsgc2gubGluZVRvKG9mZiArIHJpICogTWF0aC5jb3ModCksIHJpICogTWF0aC5zaW4odCkpOyB9XG4gICAgc2guY2xvc2VQYXRoKCk7XG4gICAgcmV0dXJuIHNoO1xuICB9O1xuICAvKiogQSBkb21lIHByb2ZpbGU6IHJhZGl1cyByIGF0IHkwIHJpc2luZyB0byBhIGNyb3duIGF0IHkxLCBoZW1pc3BoZXJpY2FsIHdpdGggYSBzbGlnaHQgb25pb25cbiAgICogIGJ1bGdlIGJlbG93IHRoZSBlcXVhdG9yIHNvIGl0IG92ZXJoYW5ncyBpdHMgZHJ1bSB0aGUgd2F5IHRoZSBwbGF0ZSdzIGRvZXMuICovXG4gIGNvbnN0IGRvbWVQcm9maWxlID0gKHI6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgYnVsZ2U6IG51bWJlciwgc3RlcHM6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHByb2Y6IG51bWJlcltdW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gaSAvIHN0ZXBzO1xuICAgICAgcHJvZi5wdXNoKFtyICogTWF0aC5jb3ModCAqIE1hdGguUEkgKiAwLjUpICogKDEgKyBidWxnZSAqIE1hdGguc2luKHQgKiBNYXRoLlBJKSksIHkwICsgKHkxIC0geTApICogTWF0aC5zaW4odCAqIE1hdGguUEkgKiAwLjUpXSk7XG4gICAgfVxuICAgIHJldHVybiBwcm9mO1xuICB9O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gY291cnR5YXJkIHdhbGwgYW5kIGdhdGVcbiAgICogRm91ciBydW5zLCBhIHByb3VkIGNvcGluZywgYW5kIG9uZSBnYXRlIGJsb2NrLCBhbGwgb25lIHJlbmRlcjogT05FIGNvbXBvbmVudCwgT05FIGRyYXcgY2FsbC5cbiAgICogVGhlIHNpZGUgcnVucyBjYXJyeSB0aGUgZnVsbCBkZXB0aCBhbmQgdGhlIGZyb250IGFuZCBiYWNrIHJ1bnMgc3RvcCBiZXR3ZWVuIHRoZW0uICovXG4gIHtcbiAgICBjb25zdCBDID0gRy5jb3VydCwgR1QgPSBDLmdhdGU7XG4gICAgY29uc3QgY2MgPSBDLmh4IC0gQy50IC8gMiwgY2kgPSBDLmh4IC0gQy50LCBkZCA9IEMuaHogLSBDLnQgLyAyO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgYm94QXQoLWNjLCBDLmggLyAyLCAwLCBDLnQsIEMuaCwgQy5oeiAqIDIpLFxuICAgICAgYm94QXQoY2MsIEMuaCAvIDIsIDAsIEMudCwgQy5oLCBDLmh6ICogMiksXG4gICAgICBib3hBdCgwLCBDLmggLyAyLCAtZGQsIGNpICogMiwgQy5oLCBDLnQpLFxuICAgIF07XG4gICAgY29uc3Qgc2VnTGVuID0gY2kgLSBHVC53IC8gMjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC0oR1QudyAvIDIgKyBzZWdMZW4gLyAyKSwgQy5oIC8gMiwgZGQsIHNlZ0xlbiwgQy5oLCBDLnQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KEdULncgLyAyICsgc2VnTGVuIC8gMiwgQy5oIC8gMiwgZGQsIHNlZ0xlbiwgQy5oLCBDLnQpKTtcbiAgICAvLyBDb3Bpbmc6IGEgc2xhYiBwcm91ZCBvZiBib3RoIGZhY2VzLCBpbiBmb3VyIHJ1bnMgbWVldGluZyBhdCBvcHBvc2VkIGJ1dHRzOyBzdG9wcyBhdCB0aGUgZ2F0ZS5cbiAgICBjb25zdCBjcCA9IEMudCArIDIgKiBDLmNvcGluZ1Byb3VkLCBjeSA9IEMuaCAtIEMuY29waW5nSCAvIDIgKyAwLjAyLCBoaCA9IEMuY29waW5nSDtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC1jYywgY3ksIDAsIGNwLCBoaCwgQy5oeiAqIDIgKyAyICogQy5jb3BpbmdQcm91ZCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoY2MsIGN5LCAwLCBjcCwgaGgsIEMuaHogKiAyICsgMiAqIEMuY29waW5nUHJvdWQpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGN5LCAtZGQsIChjaSAtIEMuY29waW5nUHJvdWQpICogMiwgaGgsIGNwKSk7XG4gICAgY29uc3QgY0xlbiA9IGNpIC0gQy5jb3BpbmdQcm91ZCAtIEdULncgLyAyIC0gMC4wMjtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC0oR1QudyAvIDIgKyAwLjAyICsgY0xlbiAvIDIpLCBjeSwgZGQsIGNMZW4sIGhoLCBjcCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoR1QudyAvIDIgKyAwLjAyICsgY0xlbiAvIDIsIGN5LCBkZCwgY0xlbiwgaGgsIGNwKSk7XG4gICAgLy8gVGhlIGdhdGUgYmxvY2s6IG9uZSBleHRydXNpb24gd2l0aCB0aGUgZG9vcndheSBhcyBhIGhvbGUsIHByb3VkIG9mIHRoZSB3YWxsIG9uIGJvdGggZmFjZXMsIGFcbiAgICAvLyByYWlzZWQgcmVjdGFuZ3VsYXIgYm9yZGVyIG9uIGVhY2ggZmFjZSBhbmQgYSBzbGFiIGNhcCBvbiB0b3AuXG4gICAge1xuICAgICAgY29uc3QgRCA9IEdULmRvb3I7XG4gICAgICBjb25zdCBibG9jayA9IHJlY3RTaGFwZSgtR1QudyAvIDIsIDAsIEdULncgLyAyLCBHVC5oKTtcbiAgICAgIGNvbnN0IGhvbGUgPSBuZXcgVEhSRUUuUGF0aCgpOyBtb29yaXNoQXJjaFBhdGgoaG9sZSwgRC53LCBELnNwcmluZywgRC5yaXNlLCAwLCBELnNob3VsZGVyKTsgYmxvY2suaG9sZXMucHVzaChob2xlKTtcbiAgICAgIHBhcnRzLnB1c2goZXh0cnVkZVooYmxvY2ssIEMuaHogLSBHVC5kLCBDLmh6LCA4KSk7XG4gICAgICBjb25zdCBGID0gR1QuZnJhbWU7XG4gICAgICBmb3IgKGNvbnN0IHMgb2YgWy0xLCAxXSkge1xuICAgICAgICBjb25zdCB6ZiA9IChDLmh6IC0gR1QuZCAvIDIpICsgcyAqIChHVC5kIC8gMiArIEYucHJvdWQgLyAyKSAtIChzID4gMCA/IEYucHJvdWQgKyAwLjAgOiAwKTtcbiAgICAgICAgY29uc3QgeG8gPSBHVC53IC8gMiAtIEYuaW5zZXQsIHlUb3AgPSBHVC5oIC0gRi5pbnNldCwgeUJvdCA9IDAuMzU7XG4gICAgICAgIHBhcnRzLnB1c2goYm94QXQoLSh4byAtIEYuYmFuZCAvIDIpLCAoeVRvcCArIHlCb3QpIC8gMiwgemYsIEYuYmFuZCwgeVRvcCAtIHlCb3QsIEYucHJvdWQpKTtcbiAgICAgICAgcGFydHMucHVzaChib3hBdCh4byAtIEYuYmFuZCAvIDIsICh5VG9wICsgeUJvdCkgLyAyLCB6ZiwgRi5iYW5kLCB5VG9wIC0geUJvdCwgRi5wcm91ZCkpO1xuICAgICAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIHlUb3AgLSBGLmJhbmQgLyAyLCB6ZiwgeG8gKiAyIC0gMiAqIEYuYmFuZCwgRi5iYW5kLCBGLnByb3VkKSk7XG4gICAgICB9XG4gICAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIEdULmggKyAwLjA1LCBDLmh6IC0gR1QuZCAvIDIgLSAwLjAyLCBHVC53ICsgMC4xMCwgMC4xMCwgR1QuZCAtIDAuMDQpKTtcbiAgICB9XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICAvLyBUaGUgcGxhdGUncyBjb3VydCB3YWxsIGlzIHN0cmVha2VkIGJsYWNrIGZyb20gdGhlIGNvcGluZyBkb3duIGFuZCBkYW1wLWdyZWVuIGF0IHRoZSBmb290OlxuICAgIC8vIHRoZSB0aWxlIGNhcnJpZXMgdGhlIHN0cmVha3MgKHYga2V5ZWQgdG8gdGhlIGNvcGluZykgYW5kIHRoZSByYW1wIGNhcnJpZXMgdGhlIGZvb3QuXG4gICAgdGludEJ5SGVpZ2h0KGdlbywgMCwgMC45LCBbMC44NiwgMC44NiwgMC44MF0pO1xuICAgIHRvcFV2KGdlbywgQy5oKTtcbiAgICBhZGQoJ2NvdXJ0LXdhbGwnLCAnQ291cnR5YXJkIHdhbGwgYW5kIGdhdGUnLCBnZW8sICd3aGl0ZScpO1xuICAgIGNvbGxpZGVyc1snY291cnQtd2FsbCddID0ge1xuICAgICAgc2hhcGU6ICdib3gnLCBsb2NhbENlbnRlcjogWzAsIDYuMCwgMF0sIGhhbGZFeHRlbnRzOiBbNy4wLCA2LjAsIDguMF0sXG4gICAgICBub3RlczogJ0Fzc2V0IGRlY2xhcmVzIGNvbGxpZGVyIFwiYm94XCIuIE9uZSBjb252ZXggcHJveHkgb3ZlciB0aGUgd2hvbGUgZW52ZWxvcGU7IGEgbGV2ZWwgJ1xuICAgICAgICAgICArICdidWlsZGVyIGNvbGxpZGVzIHdpdGggdGhlIGNvbXBvdW5kLCBub3Qgd2l0aCB0aGUgbWluYXJldCBzZXBhcmF0ZWx5LicsXG4gICAgfTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcHJheWVyIGhhbGxcbiAgICogQSBwbGludGgsIGEgVS1zaGFwZWQgYm9keSAodGhlIHNvbGlkIHJlYXIgYmxvY2sgYW5kIHRoZSBsb2dnaWEncyB0d28gZW5kIHdhbGxzKSwgdGhlIGFyY2hlZFxuICAgKiBzY3JlZW4gd2FsbCBjbG9zaW5nIHRoZSBsb2dnaWEsIHRoZSByb29mIHNsYWIgd2l0aCBpdHMgY29ybmljZSBsZWRnZSwgdGhlIHBhcmFwZXQgcmluZyBhbmQgaXRzXG4gICAqIGNvcGluZywgYW5kIHRoZSB0d28gYmxpbmQgbmljaGVzJyBpbm5lciBwYW5lbHMgLS0gb25lIHJlbmRlciwgT05FIGNvbXBvbmVudC4gVGhlIGxvZ2dpYSBpcyBhXG4gICAqIHJlYWwgMS44IG0gcmVjZXNzIGJlaGluZCB0aGUgdGhyZWUgb3BlbiBhcmNoZXMsIHJvb2ZlZCBieSB0aGUgc2FtZSBzbGFiOyB0aGVyZSBpcyBzdGlsbCBub1xuICAgKiBpbnRlcmlvciBiZXlvbmQgaXRzIGlubmVyIHdhbGwuICovXG4gIHtcbiAgICBjb25zdCBIID0gRy5oYWxsLCBMID0gSC5sb2dnaWEsIEEgPSBHLmFyY2gsIEZSID0gQS5mcmFtZTtcbiAgICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGNvbnN0IHpJbm5lciA9IEguekZyb250IC0gTC5kZXB0aCAtIEwuc2NyZWVuVDsgICAgIC8vIHRoZSBsb2dnaWEncyBpbm5lciB3YWxsIHBsYW5lXG4gICAgY29uc3QgelNjcmVlbjAgPSBILnpGcm9udCAtIEwuc2NyZWVuVDsgICAgICAgICAgICAgLy8gdGhlIHNjcmVlbiB3YWxsJ3MgYmFja1xuICAgIC8vIHBsaW50aFxuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgSC5wbGludGhIIC8gMiwgKEguekJhY2sgKyBILnpGcm9udCkgLyAyLCAoSC5oeCArIEgucGxpbnRoUHJvdWQpICogMiwgSC5wbGludGhILFxuICAgICAgICAgICAgICAgICAgICAgSC56RnJvbnQgLSBILnpCYWNrICsgMiAqIEgucGxpbnRoUHJvdWQpKTtcbiAgICAvLyB0aGUgVSBib2R5IGFzIG9uZSBleHRydWRlZCBwbGFuIChYWiksIHNvIG5vIGludGVyaW9yIGZhY2UgaXMgY29pbmNpZGVudCB3aXRoIGFub3RoZXJcbiAgICB7XG4gICAgICBjb25zdCB1ID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gICAgICBjb25zdCBoeCA9IEguaHgsIGV4ID0gSC5oeCAtIEwuZW5kV2FsbDtcbiAgICAgIHUubW92ZVRvKC1oeCwgLUguekJhY2spOyB1LmxpbmVUbyhoeCwgLUguekJhY2spOyB1LmxpbmVUbyhoeCwgLXpTY3JlZW4wKTsgdS5saW5lVG8oZXgsIC16U2NyZWVuMCk7XG4gICAgICB1LmxpbmVUbyhleCwgLXpJbm5lcik7IHUubGluZVRvKC1leCwgLXpJbm5lcik7IHUubGluZVRvKC1leCwgLXpTY3JlZW4wKTsgdS5saW5lVG8oLWh4LCAtelNjcmVlbjApOyB1LmNsb3NlUGF0aCgpO1xuICAgICAgcGFydHMucHVzaChleHRydWRlU2xhYih1LCBILnBsaW50aEgsIEgud2FsbFRvcCkpO1xuICAgIH1cbiAgICAvLyB0aGUgc2NyZWVuIHdhbGw6IGEgcmVjdGFuZ2xlIHdpdGggdGhlIHRocmVlIG9wZW4gYXJjaGVzIGN1dCB0aHJvdWdoIGl0LCAwLjA0IHByb3VkIG9mIHRoZVxuICAgIC8vIHNpZGUgcGxhbmVzIHNvIGl0cyBlbmQgZmFjZXMgYXJlIG9mZiB0aGUgYm9keSdzXG4gICAge1xuICAgICAgY29uc3QgaHggPSBILmh4ICsgTC5zY3JlZW5Qcm91ZDtcbiAgICAgIGNvbnN0IG9wZW4gPSBBLm9wZW4gYXMgYW55O1xuICAgICAgY29uc3QgYXJjaGVzID0gKG9wZW4ueHMgYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gKHsgQTogb3BlbiBhcyBBcmNoLCB4IH0pKTtcbiAgICAgIHBhcnRzLnB1c2goZXh0cnVkZVood2FsbFdpdGhBcmNoZXMoLWh4LCBILnBsaW50aEgsIGh4LCBILndhbGxUb3AsIGFyY2hlcyksIHpTY3JlZW4wLCBILnpGcm9udCwgMTApKTtcbiAgICB9XG4gICAgLy8gcm9vZiBzbGFiICsgY29ybmljZSBsZWRnZSAob25lIGJveCwgcHJvdWQgb2YgZXZlcnkgd2FsbCBwbGFuZSksIHRoZW4gdGhlIHBhcmFwZXQgcmluZ1xuICAgIGNvbnN0IExHID0gSC5sZWRnZSwgUCA9IEgucGFyYXBldCwgQ1AgPSBILmNvcGluZztcbiAgICBjb25zdCB6YyA9IChILnpCYWNrICsgSC56RnJvbnQpIC8gMiwgemwgPSBILnpGcm9udCAtIEguekJhY2s7XG4gICAgcGFydHMucHVzaChib3hBdCgwLCAoTEcueTAgKyBMRy55MSkgLyAyLCB6YywgKEguaHggKyBMRy5wcm91ZCkgKiAyLCBMRy55MSAtIExHLnkwLCB6bCArIDIgKiBMRy5wcm91ZCkpO1xuICAgIGNvbnN0IHB4ID0gSC5oeCArIFAucHJvdWQsIHB6MCA9IEguekJhY2sgLSBQLnByb3VkLCBwejEgPSBILnpGcm9udCArIFAucHJvdWQsIHQgPSBQLnQ7XG4gICAgY29uc3QgcHkgPSAoUC55MCArIFAueTEpIC8gMiwgcGggPSBQLnkxIC0gUC55MDtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC0ocHggLSB0IC8gMiksIHB5LCAocHowICsgcHoxKSAvIDIsIHQsIHBoLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KHB4IC0gdCAvIDIsIHB5LCAocHowICsgcHoxKSAvIDIsIHQsIHBoLCBwejEgLSBwejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIHB5LCBwejAgKyB0IC8gMiwgKHB4IC0gdCkgKiAyLCBwaCwgdCkpO1xuICAgIHBhcnRzLnB1c2goYm94QXQoMCwgcHksIHB6MSAtIHQgLyAyLCAocHggLSB0KSAqIDIsIHBoLCB0KSk7XG4gICAgY29uc3QgY3ggPSBILmh4ICsgQ1AucHJvdWQsIGN6MCA9IEguekJhY2sgLSBDUC5wcm91ZCwgY3oxID0gSC56RnJvbnQgKyBDUC5wcm91ZCwgY3QgPSB0ICsgQ1AucHJvdWQgLSBQLnByb3VkO1xuICAgIGNvbnN0IGN5eSA9IChDUC55MCArIENQLnkxKSAvIDIsIGNoID0gQ1AueTEgLSBDUC55MDtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KC0oY3ggLSBjdCAvIDIpLCBjeXksIChjejAgKyBjejEpIC8gMiwgY3QsIGNoLCBjejEgLSBjejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KGN4IC0gY3QgLyAyLCBjeXksIChjejAgKyBjejEpIC8gMiwgY3QsIGNoLCBjejEgLSBjejApKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGN5eSwgY3owICsgY3QgLyAyLCAoY3ggLSBjdCkgKiAyLCBjaCwgY3QpKTtcbiAgICBwYXJ0cy5wdXNoKGJveEF0KDAsIGN5eSwgY3oxIC0gY3QgLyAyLCAoY3ggLSBjdCkgKiAyLCBjaCwgY3QpKTtcbiAgICAvLyBibGluZCBuaWNoZXM6IGEgd2hpdGUgc3Vycm91bmQgb24gdGhlIGdyZWVuIGZpZWxkLCBhbmQgdGhlIHJhaXNlZCBpbm5lciBhcmNoIHBhbmVsIGluc2lkZSBpdFxuICAgIHtcbiAgICAgIGNvbnN0IEIgPSBBLmJsaW5kIGFzIGFueSwgSSA9IEIuaW5uZXI7XG4gICAgICBjb25zdCBmaWVsZEZyb250ID0gSC56RnJvbnQgKyBILmZpZWxkLnQ7XG4gICAgICBmb3IgKGNvbnN0IHggb2YgQi54cyBhcyBudW1iZXJbXSkge1xuICAgICAgICBjb25zdCBvdXRlcjogQXJjaCA9IHsgdzogQi53ICsgMiAqIEZSLmJhbmQsIHNwcmluZzogQi5zcHJpbmcgLSAwLjQgKiBGUi5iYW5kLCByaXNlOiBCLnJpc2UgKyAxLjI1ICogRlIuYmFuZCwgc2lsbDogQi5zaWxsIC0gRlIuYmFuZCwgc2hvdWxkZXI6IEIuc2hvdWxkZXIgfTtcbiAgICAgICAgY29uc3QgZnIgPSBleHRydWRlWihhcmNoU2hhcGUob3V0ZXIsIEIgYXMgQXJjaCksIEguekZyb250IC0gMC4wNSwgZmllbGRGcm9udCArIEZSLnByb3VkLCAxMCk7XG4gICAgICAgIGZyLnRyYW5zbGF0ZSh4LCAwLCAwKTsgcGFydHMucHVzaChmcik7XG4gICAgICAgIGNvbnN0IHB3ID0gQi53IC0gMiAqIEkuaW5zZXQ7XG4gICAgICAgIGNvbnN0IHBuOiBBcmNoID0geyB3OiBwdywgc3ByaW5nOiBCLnNwcmluZyAtIDAuNCAqIEkuaW5zZXQsIHJpc2U6IEkucmlzZSwgc2lsbDogSS5zaWxsLCBzaG91bGRlcjogQi5zaG91bGRlciAqIDAuNyB9O1xuICAgICAgICBjb25zdCBwZyA9IGV4dHJ1ZGVaKGFyY2hTaGFwZShwbiksIEguekZyb250ICsgMC4wMDUsIGZpZWxkRnJvbnQgKyAwLjAyLCA4KTtcbiAgICAgICAgcGcudHJhbnNsYXRlKHgsIDAsIDApOyBwYXJ0cy5wdXNoKHBnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgZ2VvID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgICAvLyByYWluIHdhc2ggZnJvbSB0aGUgY29ybmljZSBkb3duOiB0aGUgcmFtcCBkYXJrZW5zIFRPV0FSRFMgdGhlIHRvcCwgdGhlIHJldmVyc2Ugb2YgdGhlIGtpdFxuICAgIHRpbnRCeUhlaWdodChnZW8sIDIuNiwgSC53YWxsVG9wLCBbMSwgMSwgMV0pO1xuICAgIHtcbiAgICAgIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBjID0gZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBwLmdldFkoaSk7XG4gICAgICAgIGNvbnN0IHR0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSAyLjYpIC8gKEgud2FsbFRvcCAtIDIuNikpKTtcbiAgICAgICAgY29uc3QgZiA9IDEgLSAwLjE0ICogdHQ7XG4gICAgICAgIGMuc2V0WFlaKGksIGYsIGYsIGYgKiAwLjk4KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdG9wVXYoZ2VvLCBILndhbGxUb3ApO1xuICAgIGFkZCgnaGFsbCcsICdQcmF5ZXIgaGFsbCcsIGdlbywgJ3doaXRlJyk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBwYWxlIGdyZWVuIGZpZWxkXG4gICAqIFRoZSByZWNlc3NlZCBwYW5lbCBvbiB0aGUgc2NyZWVuIHdhbGwsIHdpdGggdGhlIG9wZW4gYXJjaGVzIGN1dCB0aHJvdWdoIGl0LCBhbmQgdGhlIGxvZ2dpYSdzXG4gICAqIGlubmVyIHdhbGwgYmVoaW5kIHRoZW0gLS0gdGhlIHBsYXRlIHBhaW50cyBib3RoIHRoZSBzYW1lIHBhbGUgZ3JlZW4uIE9uZSBjb21wb25lbnQuICovXG4gIHtcbiAgICBjb25zdCBIID0gRy5oYWxsLCBMID0gSC5sb2dnaWEsIEEgPSBHLmFyY2gsIEYgPSBILmZpZWxkLCBGUiA9IEEuZnJhbWU7XG4gICAgY29uc3QgeklubmVyID0gSC56RnJvbnQgLSBMLmRlcHRoIC0gTC5zY3JlZW5UO1xuICAgIGNvbnN0IG9wZW4gPSBBLm9wZW4gYXMgYW55O1xuICAgIC8vIGZpZWxkIGhvbGVzIGFyZSBhIGhhaXIgaW5zaWRlIHRoZSBmcmFtZSdzIE9VVEVSIGVkZ2UsIHNvIHRoZSBmcmFtZSBvdmVybGFwcyB0aGUgZmllbGQncyByZXZlYWxcbiAgICBjb25zdCBob2xlQTogQXJjaCA9IHsgdzogb3Blbi53ICsgMiAqIEZSLmJhbmQgLSAwLjA0LCBzcHJpbmc6IG9wZW4uc3ByaW5nIC0gMC40ICogRlIuYmFuZCwgcmlzZTogb3Blbi5yaXNlICsgMS4yNSAqIEZSLmJhbmQgLSAwLjAyLCBzaWxsOiBGLnkwICsgMC4wMDUsIHNob3VsZGVyOiBvcGVuLnNob3VsZGVyIH07XG4gICAgY29uc3QgYXJjaGVzID0gKG9wZW4ueHMgYXMgbnVtYmVyW10pLm1hcCgoeCkgPT4gKHsgQTogaG9sZUEsIHggfSkpO1xuICAgIGNvbnN0IGZpZWxkID0gZXh0cnVkZVood2FsbFdpdGhBcmNoZXMoLUYueEhhbGYsIEYueTAsIEYueEhhbGYsIEYueTEsIGFyY2hlcyksIEguekZyb250LCBILnpGcm9udCArIEYudCwgMTApO1xuICAgIGNvbnN0IGV4ID0gSC5oeCAtIEwuZW5kV2FsbDtcbiAgICBjb25zdCBpbm5lciA9IGJveEF0KDAsIChILnBsaW50aEggKyBILndhbGxUb3ApIC8gMiwgeklubmVyICsgRi50IC8gMiwgZXggKiAyIC0gMC4wMiwgSC53YWxsVG9wIC0gSC5wbGludGhIIC0gMC4wMiwgRi50KTtcbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MoW2ZpZWxkLCBpbm5lcl0pO1xuICAgIHRpbnRBbGwoZ2VvLCBbMSwgMSwgMV0pO1xuICAgIHRvcFV2KGdlbywgRi55MSwgVy50aWxlLCAwLjM3KTtcbiAgICBhZGQoJ2ZpZWxkJywgJ0dyZWVuIGZhY2FkZSBmaWVsZCBhbmQgbG9nZ2lhIHdhbGwnLCBnZW8sICdwYW5lbCcpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBhcmNhZGUgc3Vycm91bmRzXG4gICAqIFRocmVlIHdoaXRlIE1vb3Jpc2ggc3Vycm91bmRzIG92ZXIgdGhlIG9wZW4gYXJjaGVzLCBvbmUgZ2VvbWV0cnkgYXMgYW4gSW5zdGFuY2VkTWVzaC4gRWFjaCBpc1xuICAgKiBhIHBsYXRlIHdpdGggYSBSRUFMIGFwZXJ0dXJlIGEgaGFpciBzbWFsbGVyIHRoYW4gdGhlIHNjcmVlbidzIG9wZW5pbmcsIGV4dHJ1ZGVkIGZyb20gaW5zaWRlIHRoZVxuICAgKiBzY3JlZW4gdG8gMC4wNSBtIHByb3VkIG9mIHRoZSBncmVlbiBmaWVsZCwgc28gaXQgbGluZXMgdGhlIHJldmVhbCBhbmQgb3ZlcmxhcHMgdGhlIGZpZWxkLiAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgQSA9IEcuYXJjaCwgRlIgPSBBLmZyYW1lLCBvcGVuID0gQS5vcGVuIGFzIGFueTtcbiAgICBjb25zdCBvdXRlcjogQXJjaCA9IHsgdzogb3Blbi53ICsgMiAqIEZSLmJhbmQsIHNwcmluZzogb3Blbi5zcHJpbmcgLSAwLjQgKiBGUi5iYW5kLCByaXNlOiBvcGVuLnJpc2UgKyAxLjI1ICogRlIuYmFuZCwgc2lsbDogb3Blbi5zaWxsIC0gMC4wNSwgc2hvdWxkZXI6IG9wZW4uc2hvdWxkZXIgfTtcbiAgICBjb25zdCBpbm5lckE6IEFyY2ggPSB7IHc6IG9wZW4udyAtIDAuMDIsIHNwcmluZzogb3Blbi5zcHJpbmcsIHJpc2U6IG9wZW4ucmlzZSAtIDAuMDEsIHNpbGw6IG9wZW4uc2lsbCAtIDAuMDMsIHNob3VsZGVyOiBvcGVuLnNob3VsZGVyIC0gMC4wMSB9O1xuICAgIGNvbnN0IGZyYW1lID0gZXh0cnVkZVooYXJjaFNoYXBlKG91dGVyLCBpbm5lckEpLCBILnpGcm9udCAtIEZSLmJhY2ssIEguekZyb250ICsgSC5maWVsZC50ICsgRlIucHJvdWQsIDEwKTtcbiAgICB0b3BVdihmcmFtZSwgSC53YWxsVG9wKTtcbiAgICBhZGRJbnN0KCdhcmNoLWZyYW1lcycsICdBcmNhZGUgc3Vycm91bmRzJywgZnJhbWUsICd3aGl0ZScsXG4gICAgICAob3Blbi54cyBhcyBudW1iZXJbXSkubWFwKCh4KSA9PiBuZXcgVEhSRUUuTWF0cml4NCgpLnNldFBvc2l0aW9uKHgsIDAsIDApKSk7XG4gIH1cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHJvb2YgZGVjayAqL1xuICB7XG4gICAgY29uc3QgSCA9IEcuaGFsbCwgRCA9IEcuZGVjaywgUCA9IEgucGFyYXBldDtcbiAgICBjb25zdCBnID0gYm94QXQoMCwgKEQueTAgKyBELnkxKSAvIDIgKyAwLjAwNSwgKEguekJhY2sgKyBILnpGcm9udCkgLyAyLFxuICAgICAgKEguaHggKyBQLnByb3VkIC0gUC50IC0gRC5pbnNldCkgKiAyLCBELnkxIC0gRC55MCwgSC56RnJvbnQgLSBILnpCYWNrICsgMiAqIFAucHJvdWQgLSAyICogUC50IC0gMiAqIEQuaW5zZXQpO1xuICAgIHBsYW5hclV2KGcsIDQuMCk7XG4gICAgYWRkKCdyb29mLWRlY2snLCAnUm9vZiBkZWNrJywgZywgJ2RlY2snKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcGFyYXBldCBiYW5kXG4gICAqIFRoZSBncmVlbiBzdHJpcGUgb24gdGhlIHBhcmFwZXQncyBvdXRlciBmYWNlLCB1bmRlciB0aGUgY29waW5nLCBzdGFuZGluZyAwLjAzIG0gcHJvdWQuICovXG4gIHtcbiAgICBjb25zdCBIID0gRy5oYWxsLCBQID0gSC5wYXJhcGV0O1xuICAgIGNvbnN0IHB4ID0gSC5oeCArIFAucHJvdWQgKyBQLmJhbmRQcm91ZCwgcHowID0gSC56QmFjayAtIFAucHJvdWQgLSBQLmJhbmRQcm91ZCwgcHoxID0gSC56RnJvbnQgKyBQLnByb3VkICsgUC5iYW5kUHJvdWQsIHQgPSAwLjA2O1xuICAgIGNvbnN0IGJ5ID0gKFAueTAgKyBQLnkxKSAvIDIgKyAwLjAxLCBiaCA9IFAueTEgLSBQLnkwIC0gMC4wNDtcbiAgICBhZGQoJ3BhcmFwZXQtYmFuZCcsICdHcmVlbiBwYXJhcGV0IGJhbmQnLCBtZXJnZUdlb3MoW1xuICAgICAgYm94QXQoLShweCAtIHQgLyAyKSwgYnksIChwejAgKyBwejEpIC8gMiwgdCwgYmgsIHB6MSAtIHB6MCksXG4gICAgICBib3hBdChweCAtIHQgLyAyLCBieSwgKHB6MCArIHB6MSkgLyAyLCB0LCBiaCwgcHoxIC0gcHowKSxcbiAgICAgIGJveEF0KDAsIGJ5LCBwejAgKyB0IC8gMiwgKHB4IC0gdCkgKiAyLCBiaCwgdCksXG4gICAgICBib3hBdCgwLCBieSwgcHoxIC0gdCAvIDIsIChweCAtIHQpICogMiwgYmgsIHQpLFxuICAgIF0pLCAnZ3JlZW4nKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIGdyZWF0IGRvbWUgYW5kIHRoZSBtaW5hcmV0J3NcbiAgICogQm90aCByaWJiZWQgLS0gcmFkaXVzIG1vZHVsYXRlZCBBUk9VTkQgdGhlIGF4aXMsIHdoaWNoIG5vIGxhdGhlIGNhbiBkbyAtLSBib3RoIHN0cmlwZWQgcGVyXG4gICAqIHZlcnRleCwgbWVyZ2VkIGludG8gT05FIGNvbXBvbmVudCBhbmQgT05FIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IEQgPSBHLmRvbWUuYm9keSwgTU4gPSBHLm1pbmFyZXQsIE1CID0gTU4uYm9keSwgViA9IEcudmFsbGV5IGFzIG51bWJlcltdO1xuICAgIGNvbnN0IGdyZWF0ID0gcmliYmVkRG9tZShkb21lUHJvZmlsZShELnIsIEQueTAsIEQueTEsIEQuYnVsZ2UsIEQuc3RlcHMpLCBELnJpYnMsIEQuYW1wLCBELnNlZywgViwgRy5jcmVzdCk7XG4gICAgZ3JlYXQudHJhbnNsYXRlKDAsIDAsIEcuZG9tZS56KTtcbiAgICBjb25zdCBtZCA9IHJpYmJlZERvbWUoZG9tZVByb2ZpbGUoTUIuciwgTUIueTAsIE1CLnkxLCBNQi5idWxnZSwgTUIuc3RlcHMpLCBNQi5yaWJzLCBNQi5hbXAsIE1CLnNlZywgViwgRy5jcmVzdCk7XG4gICAgbWQudHJhbnNsYXRlKE1OLngsIDAsIE1OLnopO1xuICAgIGFkZCgnZG9tZXMnLCAnR3JlYXQgZG9tZSBhbmQgbWluYXJldCBkb21lJywgbWVyZ2VHZW9zKFtncmVhdCwgbWRdKSwgJ2RvbWUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZG9tZSBkcnVtXG4gICAqIFNxdWFyZSBwb2RpdW0gd2l0aCBhIG1vdWxkZWQgbGlwLCBhIHJvdW5kIGRydW0gd2l0aCBhIGJhc2UgcmluZywgYW5kIHRoZSBsaXAgcmluZyB0aGUgZG9tZVxuICAgKiBzcHJpbmdzIGZyb20uIFdoaXRlLCBvbmUgY29tcG9uZW50LiBUaGUgdHdlbHZlIGFyY2hlZCB3aW5kb3dzIGFyZSBpbiB0aGUgb3BlbmluZ3MgY29tcG9uZW50LiAqL1xuICB7XG4gICAgY29uc3QgRE0gPSBHLmRvbWUsIFBEID0gRE0ucG9kaXVtLCBEUiA9IERNLmRydW0sIExQID0gRE0ubGlwO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW1xuICAgICAgdG9wVXYoYm94QXQoMCwgKFBELnkwICsgUEQueTEpIC8gMiwgRE0ueiwgUEQuaGFsZiAqIDIsIFBELnkxIC0gUEQueTAsIFBELmhhbGYgKiAyKSwgUEQubGlwWTEpLFxuICAgICAgdG9wVXYoYm94QXQoMCwgKFBELnkxICsgUEQubGlwWTEpIC8gMiwgRE0ueiwgUEQubGlwSGFsZiAqIDIsIFBELmxpcFkxIC0gUEQueTEsIFBELmxpcEhhbGYgKiAyKSwgUEQubGlwWTEpLFxuICAgIF07XG4gICAgY29uc3QgcmluZ0cgPSBjeWxBdCgwLCAoRFIueTAgKyBEUi5yaW5nWTEpIC8gMiwgMCwgRFIucmluZ1IsIERSLnJpbmdSLCBEUi5yaW5nWTEgLSBEUi55MCwgRFIuc2VnKTtcbiAgICBjb25zdCBkcnVtRyA9IGN5bEF0KDAsIChEUi5yaW5nWTEgKyBEUi55MSkgLyAyLCAwLCBEUi5yLCBEUi5yLCBEUi55MSAtIERSLnJpbmdZMSwgRFIuc2VnKTtcbiAgICBjb25zdCBsaXBHID0gbGF0aGUoW1swLCBMUC55MF0sIFtMUC5yIC0gMC4xMCwgTFAueTBdLCBbTFAuciwgTFAueTAgKyAwLjA4XSwgW0xQLnIsIExQLnkxIC0gMC4wNV0sIFtMUC5yIC0gMC4wNiwgTFAueTFdLCBbMCwgTFAueTFdXSwgRFIuc2VnKTtcbiAgICBmb3IgKGNvbnN0IGcgb2YgW3JpbmdHLCBkcnVtRywgbGlwR10pIHsgbGF0aGVVdihnLCBMUC55MSwgRFIucik7IGcudHJhbnNsYXRlKDAsIDAsIERNLnopOyBwYXJ0cy5wdXNoKGcpOyB9XG4gICAgYWRkKCdkcnVtJywgJ0RvbWUgZHJ1bScsIG1lcmdlR2VvcyhwYXJ0cyksICd3aGl0ZScpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBvcGVuaW5nc1xuICAgKiBUd2VsdmUgcG9pbnRlZCB3aW5kb3dzIGFyb3VuZCB0aGUgZHJ1bSBhbmQgZWlnaHQgYXJvdW5kIHRoZSBtaW5hcmV0IGxhbnRlcm46IHNtYWxsIGRhcmsgcGxhdGVzXG4gICAqIHN0YW5kaW5nIDAuMDI1IG0gcHJvdWQgb2YgdGhlIHN1cmZhY2UgdGhleSBzaXQgb24sIG1lcmdlZCBpbnRvIE9ORSBjb21wb25lbnQuICovXG4gIHtcbiAgICBjb25zdCBETSA9IEcuZG9tZSwgRFIgPSBETS5kcnVtLCBXTiA9IERSLndpbmRvd3MsIE1OID0gRy5taW5hcmV0LCBMVCA9IE1OLmxhbnRlcm4sIExPID0gTFQub3BlbmluZ3M7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBjb25zdCBwbGF0ZSA9ICh3OiBudW1iZXIsIGg6IG51bWJlciwgeTA6IG51bWJlcikgPT4ge1xuICAgICAgY29uc3QgcyA9IHBvaW50ZWRBcmNoU2hhcGUodywgeTAgKyBoICogMC42MiwgaCAqIDAuMzgsIHkwKTtcbiAgICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHMsIHsgZGVwdGg6IDAuMDMsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDYgfSk7XG4gICAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICAgIH07XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBXTi5uOyBrKyspIHtcbiAgICAgIGNvbnN0IGEgPSAoayArIDAuNSkgKiBNYXRoLlBJICogMiAvIFdOLm47XG4gICAgICBjb25zdCBnID0gcGxhdGUoV04udywgV04uaCwgV04ueTApO1xuICAgICAgZy5yb3RhdGVZKGEpOyBnLnRyYW5zbGF0ZShNYXRoLnNpbihhKSAqIChEUi5yICsgV04ucHJvdWQgLSAwLjAzKSwgMCwgTWF0aC5jb3MoYSkgKiAoRFIuciArIFdOLnByb3VkIC0gMC4wMykgKyBETS56KTtcbiAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgfVxuICAgIGNvbnN0IGluUiA9IExULnIgKiBNYXRoLmNvcyhNYXRoLlBJIC8gTE8ubik7ICAgLy8gYXBvdGhlbSBvZiB0aGUgb2N0YWdvbmFsIGxhbnRlcm5cbiAgICBmb3IgKGxldCBrID0gMDsgayA8IExPLm47IGsrKykge1xuICAgICAgY29uc3QgYSA9IGsgKiBNYXRoLlBJICogMiAvIExPLm47XG4gICAgICBjb25zdCBnID0gcGxhdGUoTE8udywgTE8uaCwgTE8ueTApO1xuICAgICAgZy5yb3RhdGVZKGEpOyBnLnRyYW5zbGF0ZShNTi54ICsgTWF0aC5zaW4oYSkgKiAoaW5SICsgTE8ucHJvdWQgLSAwLjAzKSwgMCwgTU4ueiArIE1hdGguY29zKGEpICogKGluUiArIExPLnByb3VkIC0gMC4wMykpO1xuICAgICAgcGFydHMucHVzaChnKTtcbiAgICB9XG4gICAgYWRkKCdvcGVuaW5ncycsICdEcnVtIHdpbmRvd3MgYW5kIGxhbnRlcm4gb3BlbmluZ3MnLCBtZXJnZUdlb3MocGFydHMpLCAnZGFyaycpO1xuICB9XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjb3JuZXIgZG9tZXNcbiAgICogRm91ciwgYXMgVFdPIEluc3RhbmNlZE1lc2ggc3lzdGVtcyAtLSBhIHdoaXRlIGRydW0gd2l0aCBpdHMgcmluZyBhbmQgYSByaWJiZWQgZ3JlZW4gZG9tZS4gKi9cbiAge1xuICAgIGNvbnN0IFMgPSBHLnNtYWxsLCBTRCA9IFMuZHJ1bSwgU0IgPSBTLmJvZHk7XG4gICAgY29uc3QgZHJ1bSA9IG1lcmdlR2VvcyhbXG4gICAgICBjeWxBdCgwLCAoU0QueTAgKyBTRC5yaW5nWTApIC8gMiAtIFNELnkwLCAwLCBTRC5yLCBTRC5yLCBTRC5yaW5nWTAgLSBTRC55MCwgU0Quc2VnKSxcbiAgICAgIGN5bEF0KDAsIChTRC5yaW5nWTAgKyBTRC55MSkgLyAyIC0gU0QueTAsIDAsIFNELnJpbmdSLCBTRC5yaW5nUiAtIDAuMDMsIFNELnkxIC0gU0QucmluZ1kwLCBTRC5zZWcpLFxuICAgIF0pO1xuICAgIGxhdGhlVXYoZHJ1bSwgU0QueTEgLSBTRC55MCwgU0QuciwgNC4wKTtcbiAgICBhZGRJbnN0KCdzbWFsbC1kcnVtcycsICdDb3JuZXIgZG9tZSBkcnVtcycsIGRydW0sICd3aGl0ZScsXG4gICAgICAoUy5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBTRC55MCwgeikpKTtcbiAgICBhZGRJbnN0KCdzbWFsbC1kb21lcycsICdDb3JuZXIgZG9tZXMnLFxuICAgICAgcmliYmVkRG9tZShkb21lUHJvZmlsZShTQi5yLCAwLCBTQi55MSAtIFNCLnkwLCBTQi5idWxnZSwgU0Iuc3RlcHMpLCBTQi5yaWJzLCBTQi5hbXAsIFNCLnNlZywgRy52YWxsZXkgYXMgbnVtYmVyW10sIEcuY3Jlc3QpLCAnZG9tZScsXG4gICAgICAoUy5hdCBhcyBudW1iZXJbXVtdKS5tYXAoKFt4LCB6XSkgPT4gbmV3IFRIUkVFLk1hdHJpeDQoKS5zZXRQb3NpdGlvbih4LCBTQi55MCwgeikpKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbWluYXJldFxuICAgKiBFbmdhZ2VkIHdpdGggdGhlIGhhbGwncyBsZWZ0IHdhbGw6IGEgc3F1YXJlIHNoYWZ0IHRhcGVyaW5nIHRvIHRoZSBiYWxjb255LCBhIGNvcmJlbCwgYW5cbiAgICogb2N0YWdvbmFsIHNsYWIgYW5kIGhvbGxvdyBwYXJhcGV0IHJpbmcsIHRoZSBvY3RhZ29uYWwgbGFudGVybiBjb3JlLCBhbmQgdGhlIGNvcm5pY2UgdGhlIGRvbWVcbiAgICogc3ByaW5ncyBmcm9tLiBXaGl0ZSwgb25lIGNvbXBvbmVudDsgaXRzIGVpZ2h0IG9wZW5pbmdzIGFyZSBpbiB0aGUgb3BlbmluZ3MgY29tcG9uZW50LiAqL1xuICB7XG4gICAgY29uc3QgTU4gPSBHLm1pbmFyZXQsIENCID0gTU4uY29yYmVsLCBTTCA9IE1OLnNsYWIsIFJMID0gTU4ucmFpbCwgTFQgPSBNTi5sYW50ZXJuLCBDTiA9IE1OLmNvcm5pY2U7XG4gICAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICAvLyB0aGUgc2hhZnQ6IGEgNC1zaWRlZCBmcnVzdHVtIHR1cm5lZCBzbyBpdHMgZmFjZXMgbG9vayBhbG9uZyB0aGUgYXhlc1xuICAgIGNvbnN0IHNoYWZ0ID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoTU4uaGFsZlRvcCAqIE1hdGguU1FSVDIsIE1OLmhhbGZCYXNlICogTWF0aC5TUVJUMiwgTU4uc2hhZnRUb3AsIDQpO1xuICAgIHNoYWZ0LnJvdGF0ZVkoTWF0aC5QSSAvIDQpOyBzaGFmdC50cmFuc2xhdGUoTU4ueCwgTU4uc2hhZnRUb3AgLyAyLCBNTi56KTtcbiAgICBjb25zdCBzZyA9IHNoYWZ0LnRvTm9uSW5kZXhlZCgpOyBzZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyBzaGFmdC5kaXNwb3NlKCk7XG4gICAgcGFydHMucHVzaCh0b3BVdihzZywgTU4uc2hhZnRUb3AsIFcudGlsZSwgMC42MSkpO1xuICAgIHBhcnRzLnB1c2godG9wVXYocHJpc20oTU4ueCwgQ0IueTAsIE1OLnosIENCLnIwLCBTTC55MCArIDAuMDEsIDgsIENCLnIxKSwgTU4uc2hhZnRUb3AsIFcudGlsZSwgMC42MSkpO1xuICAgIHBhcnRzLnB1c2godG9wVXYocHJpc20oTU4ueCwgU0wueTAsIE1OLnosIFNMLnIsIFNMLnkxLCA4KSwgTU4uc2hhZnRUb3AsIFcudGlsZSwgMC42MSkpO1xuICAgIHBhcnRzLnB1c2godG9wVXYocmluZyhNTi54LCBNTi56LCBSTC5ySW4sIFJMLnJPdXQsIFJMLnkwLCBSTC55MSwgOCksIE1OLnNoYWZ0VG9wLCBXLnRpbGUsIDAuNjEpKTtcbiAgICBwYXJ0cy5wdXNoKHRvcFV2KHByaXNtKE1OLngsIExULnkwLCBNTi56LCBMVC5yLCBMVC55MSwgOCksIE1OLnNoYWZ0VG9wLCBXLnRpbGUsIDAuNjEpKTtcbiAgICBwYXJ0cy5wdXNoKHRvcFV2KHByaXNtKE1OLngsIENOLnkwLCBNTi56LCBDTi5yLCBDTi55MSwgOCksIE1OLnNoYWZ0VG9wLCBXLnRpbGUsIDAuNjEpKTtcbiAgICBjb25zdCBnZW8gPSBtZXJnZUdlb3MocGFydHMpO1xuICAgIHRpbnRBbGwoZ2VvLCBbMSwgMSwgMV0pO1xuICAgIGFkZCgnbWluYXJldCcsICdNaW5hcmV0JywgZ2VvLCAnd2hpdGUnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZmluaWFscyBhbmQgY3Jlc2NlbnRzXG4gICAqIEZvdXIgZ2lsdCBzcGlrZXMgb24gdGhlIGNvcm5lciBkb21lcywgYW5kIHRoZSBjcmVzY2VudCBzdGFjayBvdmVyIHRoZSBncmVhdCBkb21lIGFuZCB0aGVcbiAgICogbWluYXJldCwgTUVSR0VEIGludG8gb25lIGNvbXBvbmVudCBhbmQgb25lIGRyYXcgY2FsbC4gKi9cbiAge1xuICAgIGNvbnN0IFMgPSBHLnNtYWxsO1xuICAgIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgUy5hdCBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbGF0aGUoW1swLCAwXSwgWzAuMTYsIDAuMDNdLCBbMC4yMCwgMC4xNl0sIFswLjEwLCAwLjMwXSwgWzAuMTMsIDAuNDJdLCBbMC4wNywgMC41OF0sIFswLCAwLjc4XV0sIDE0KTtcbiAgICAgIGcuc2NhbGUoUy5zcGlrZS5zLCBTLnNwaWtlLnMsIFMuc3Bpa2Uucyk7XG4gICAgICBnLnRyYW5zbGF0ZSh4LCBTLnNwaWtlLnkwLCB6KTtcbiAgICAgIHBhcnRzLnB1c2goZyk7XG4gICAgfVxuICAgIGZvciAoY29uc3QgW3gsIHkwLCB6LCBzLCB0b3RhbEgsIFJdIG9mIEcub3JuYW1lbnRzIGFzIG51bWJlcltdW10pIHtcbiAgICAgIGNvbnN0IGNhcCA9IGxhdGhlKFtbMCwgMF0sIFswLjQ2LCAwXSwgWzAuNDYsIDAuMDVdLCBbMC4zMiwgMC4yMF0sIFswLjEzLCAwLjMzXSwgWzAuMDYsIDAuMzhdLCBbMC4wNiwgMC40Nl1dLCAxNik7XG4gICAgICBjYXAuc2NhbGUocywgcywgcyk7IGNhcC50cmFuc2xhdGUoeCwgeTAsIHopOyBwYXJ0cy5wdXNoKGNhcCk7XG4gICAgICBjb25zdCBiYWxsID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDAuMTcgKiBzLCAxNCwgMTApO1xuICAgICAgYmFsbC50cmFuc2xhdGUoeCwgeTAgKyAwLjYwICogcywgeik7IHBhcnRzLnB1c2goYmFsbCk7XG4gICAgICBwYXJ0cy5wdXNoKGN5bEF0KHgsIHkwICsgMC44NCAqIHMsIHosIDAuMDQ1ICogcywgMC4wNTUgKiBzLCAwLjIyICogcywgMTApKTtcbiAgICAgIGNvbnN0IGJ1bGIgPSBsYXRoZShbWzAsIDBdLCBbMC4xMCwgMC4wM10sIFswLjEyLCAwLjEwXSwgWzAuMDg1LCAwLjE5XSwgWzAuMDQsIDAuMjddLCBbMC4wMywgMC4zMV1dLCAxMik7XG4gICAgICBidWxiLnNjYWxlKHMsIHMsIHMpOyBidWxiLnRyYW5zbGF0ZSh4LCB5MCArIDAuOTIgKiBzLCB6KTsgcGFydHMucHVzaChidWxiKTtcbiAgICAgIGNvbnN0IHNwaWtlQmFzZSA9IHkwICsgMS4yMCAqIHMsIGNCb3R0b20gPSB5MCArIHRvdGFsSCAtIDIgKiBSICsgMC4wMztcbiAgICAgIGlmIChjQm90dG9tID4gc3Bpa2VCYXNlICsgMC4wMikgcGFydHMucHVzaChjeWxBdCh4LCAoc3Bpa2VCYXNlICsgY0JvdHRvbSkgLyAyLCB6LCAwLjAyNSAqIHMsIDAuMDMyICogcywgY0JvdHRvbSAtIHNwaWtlQmFzZSwgOCkpO1xuICAgICAgY29uc3QgdCA9IE1hdGgubWF4KDAuMDM1LCAwLjE2ICogUik7XG4gICAgICBjb25zdCBjZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoY3Jlc2NlbnRTaGFwZShSLCAwLjg1ICogUiwgMC4yOCAqIFIsIDE0KSwgeyBkZXB0aDogdCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICAgIGNnLnRyYW5zbGF0ZSgwLCAwLCAtdCAvIDIpO1xuICAgICAgY2cucm90YXRlWihNYXRoLlBJICogMC4yOCk7XG4gICAgICBjZy50cmFuc2xhdGUoeCwgeTAgKyB0b3RhbEggLSBSLCB6KTtcbiAgICAgIGNnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgICBwYXJ0cy5wdXNoKGNnKTtcbiAgICB9XG4gICAgYWRkKCdmaW5pYWxzJywgJ0dpbHQgZmluaWFscyBhbmQgY3Jlc2NlbnRzJywgbWVyZ2VHZW9zKHBhcnRzKSwgJ2dvbGQnKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gd2VhdGhlcmluZ1xuICAgKiBUaHJlZSBwb3N0LWNvbnN0cnVjdGlvbiBDYW52YXMgMkQgdGlsZXMsIGJvdW5kIGFzIG1hcCBhbmQgYnVtcE1hcCwgaW4gTVVMVElQTElFUiBzcGFjZSBvdmVyXG4gICAqIHdoaXRlOiB0aGUgbWF0ZXJpYWxzIGtlZXAgdGhlaXIgbWVhc3VyZWQgY29sb3VyIGFuZCBzdGF5IGRlY2xhcmVkIHRleHR1cmVsZXNzLCBhbmQgdW5kZXIgTm9kZVxuICAgKiAoYmFuZHMsIGNoZWNrLWNvcGxhbmFyLCB0aGUgY29sbGlkZXIgZGVyaXZhdGlvbikgdGhlcmUgaXMgbm8gY2FudmFzIGFuZCB0aGV5IHJlbmRlciBmbGF0LlxuICAgKiBFdmVyeSBtYXJrIGlzIGJ1aWx0IG9uY2UgYXMgYSBQYXRoMkQgYW5kIGZpbGxlZCBhdCBuaW5lIHdyYXBwZWQgb2Zmc2V0cyBzbyBSZXBlYXRXcmFwcGluZyBpc1xuICAgKiBzZWFtbGVzcy4gdiBydW5zIERPV04gdGhlIHRpbGUgZnJvbSB0aGUgdG9wIG9mIHRoZSBwYXJ0ICh0b3BVdiksIHNvIHRoZSBzdHJlYWsgYmFuZCBhbmQgdGhlXG4gICAqIGRyaXBzIGhhbmdpbmcgZnJvbSBpdCBsYW5kIG9uIGVhY2ggY29waW5nIC0tIHRoZSBwbGF0ZSdzIGRpcnQgcnVucyB0b3AtZG93bi4gKi9cbiAgaWYgKGluQnJvd3Nlcikge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLm1pbihXLnNpemUsIG9wdGlvbnMudGV4dHVyZVNpemUgPz8gVy5zaXplKTtcbiAgICBjb25zdCBjc3MgPSAodDogbnVtYmVyW10sIGE6IG51bWJlcikgPT5cbiAgICAgICdyZ2JhKCcgKyBNYXRoLnJvdW5kKHRbMF0gKiAyNTUpICsgJywnICsgTWF0aC5yb3VuZCh0WzFdICogMjU1KSArICcsJyArIE1hdGgucm91bmQodFsyXSAqIDI1NSkgKyAnLCcgKyBhICsgJyknO1xuICAgIGNvbnN0IHJuZyA9IChzZWVkOiBudW1iZXIpID0+ICgpID0+IHsgc2VlZCA9IChzZWVkICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gc2VlZCAvIDQyOTQ5NjcyOTY7IH07XG4gICAgY29uc3QgbWFrZVRpbGUgPSAoa2luZDogJ3JlbmRlcicgfCAncGFuZWwnIHwgJ2RlY2snLCBzZWVkOiBudW1iZXIpOiBIVE1MQ2FudmFzRWxlbWVudCB8IG51bGwgPT4ge1xuICAgICAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcbiAgICAgIGN2LndpZHRoID0gY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgICAgIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSBhcyBhbnkpO1xuICAgICAgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICAgICAgY29uc3QgciA9IHJuZyhzZWVkKSwgUyA9IHNpemU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgUywgUyk7XG4gICAgICBjb25zdCB3cmFwcGVkID0gKGZuOiAoKSA9PiB2b2lkKSA9PiB7XG4gICAgICAgIGZvciAobGV0IG94ID0gLTE7IG94IDw9IDE7IG94KyspIGZvciAobGV0IG95ID0gLTE7IG95IDw9IDE7IG95KyspIHsgY3R4LnNhdmUoKTsgY3R4LnRyYW5zbGF0ZShveCAqIFMsIG95ICogUyk7IGZuKCk7IGN0eC5yZXN0b3JlKCk7IH1cbiAgICAgIH07XG4gICAgICAvLyBzb2Z0IGNsb3VkeSBtb3R0bGU6IHdpZGUgZWxsaXBzZXMsIGxvdyBhbHBoYVxuICAgICAgY29uc3QgbW90dGxlID0gKHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyLCByeDA6IG51bWJlciwgcnkwOiBudW1iZXIsIHlNaW4gPSAwLCB5TWF4ID0gMSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gcigpICogUywgeSA9ICh5TWluICsgKHlNYXggLSB5TWluKSAqIHIoKSkgKiBTLCByeCA9IFMgKiByeDAgKiAoMC41ICsgcigpKSwgcnkgPSBTICogcnkwICogKDAuNSArIHIoKSk7XG4gICAgICAgICAgY29uc3QgYSA9IGFscGhhICogKDAuNSArIDAuNSAqIHIoKSk7XG4gICAgICAgICAgd3JhcHBlZCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBnID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDAsIDAsIDAsIDAsIDAsIDEpO1xuICAgICAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgY3NzKHRvbmUsIGEpKTsgZy5hZGRDb2xvclN0b3AoMSwgY3NzKHRvbmUsIDApKTtcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7IGN0eC50cmFuc2xhdGUoeCwgeSk7IGN0eC5zY2FsZShyeCwgcnkpOyBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KC0xLCAtMSwgMiwgMik7IGN0eC5yZXN0b3JlKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICAvLyBhIHJhbmRvbS13YWxrIHBhdGNoIGZpbGxlZCBhcyBhIHVuaW9uOiByYWdnZWQgZWRnZSwgZmxhdCBpbnNpZGVcbiAgICAgIGNvbnN0IGJsb3RjaCA9ICh0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgcmFkOiBudW1iZXIsIGFscGhhOiBudW1iZXIsIHlNaW4gPSAwLCB5TWF4ID0gMSkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAgIGxldCBjeCA9IHIoKSAqIFMsIGN5ID0gKHlNaW4gKyAoeU1heCAtIHlNaW4pICogcigpKSAqIFMsIGEgPSByKCkgKiBNYXRoLlBJICogMjtcbiAgICAgICAgICBjb25zdCBSID0gcmFkICogUyAqICgwLjUgKyByKCkpLCBuID0gNiArIE1hdGguZmxvb3IocigpICogMTIpO1xuICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgbjsgaysrKSB7XG4gICAgICAgICAgICBhICs9IChyKCkgLSAwLjUpICogMi4yOyBjeCArPSBNYXRoLmNvcyhhKSAqIFIgKiAwLjQ7IGN5ICs9IE1hdGguc2luKGEpICogUiAqIDAuNDtcbiAgICAgICAgICAgIGNvbnN0IHJyID0gUiAqICgwLjM1ICsgMC41ICogcigpKTsgcC5tb3ZlVG8oY3ggKyByciwgY3kpOyBwLmFyYyhjeCwgY3ksIHJyLCAwLCBNYXRoLlBJICogMik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGNvbnN0IGFsID0gYWxwaGEgKiAoMC42ICsgMC40ICogcigpKTtcbiAgICAgICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbCk7IGN0eC5maWxsKHApOyB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIC8vIHN0cmVha3MgaGFuZ2luZyBET1dOIGZyb20geTA6IGEgbmFycm93IGJhbmQgdGhhdCBmYWRlcyB3aXRoIGxlbmd0aCwgc2xpZ2h0bHkgd2FuZGVyaW5nXG4gICAgICBjb25zdCBkcmlwcyA9ICh0b25lOiBudW1iZXJbXSwgY291bnQ6IG51bWJlciwgYWxwaGE6IG51bWJlciwgeTA6IG51bWJlciwgbGVuTWluOiBudW1iZXIsIGxlbk1heDogbnVtYmVyLCB3TWluOiBudW1iZXIsIHdNYXg6IG51bWJlcikgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gcigpICogUywgbGVuID0gUyAqIChsZW5NaW4gKyAobGVuTWF4IC0gbGVuTWluKSAqIHIoKSksIHcgPSB3TWluICsgKHdNYXggLSB3TWluKSAqIHIoKTtcbiAgICAgICAgICBjb25zdCBhID0gYWxwaGEgKiAoMC40ICsgMC42ICogcigpKSwgeXkgPSB5MCAqIFMgKyByKCkgKiBTICogMC4wMjtcbiAgICAgICAgICBjb25zdCBwID0gbmV3IFBhdGgyRCgpO1xuICAgICAgICAgIGxldCBweCA9IHg7IHAubW92ZVRvKHB4IC0gdyAvIDIsIHl5KTtcbiAgICAgICAgICBjb25zdCBuID0gNjtcbiAgICAgICAgICBmb3IgKGxldCBrID0gMTsgayA8PSBuOyBrKyspIHsgcHggKz0gKHIoKSAtIDAuNSkgKiB3ICogMC44OyBwLmxpbmVUbyhweCAtIHcgLyAyICogKDEgLSAwLjUgKiBrIC8gbiksIHl5ICsgbGVuICogayAvIG4pOyB9XG4gICAgICAgICAgZm9yIChsZXQgayA9IG47IGsgPj0gMDsgay0tKSB7IHAubGluZVRvKHB4ICsgdyAvIDIgKiAoMSAtIDAuNSAqIGsgLyBuKSwgeXkgKyBsZW4gKiBrIC8gbik7IHB4IC09IDA7IH1cbiAgICAgICAgICBwLmNsb3NlUGF0aCgpO1xuICAgICAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5eSwgMCwgeXkgKyBsZW4pO1xuICAgICAgICAgICAgZy5hZGRDb2xvclN0b3AoMCwgY3NzKHRvbmUsIGEpKTsgZy5hZGRDb2xvclN0b3AoMC4zNSwgY3NzKHRvbmUsIGEgKiAwLjcpKTsgZy5hZGRDb2xvclN0b3AoMSwgY3NzKHRvbmUsIDApKTtcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBnOyBjdHguZmlsbChwKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIGNvbnN0IGdyYWluID0gKHRvbmU6IG51bWJlcltdLCBjb3VudDogbnVtYmVyLCBhbHBoYTogbnVtYmVyKSA9PiB7XG4gICAgICAgIGNvbnN0IHAgPSBuZXcgUGF0aDJEKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKykgeyBjb25zdCB4ID0gcigpICogUywgeSA9IHIoKSAqIFMsIGQgPSAwLjYgKyByKCkgKiAxLjY7IHAucmVjdCh4LCB5LCBkLCBkKTsgfVxuICAgICAgICB3cmFwcGVkKCgpID0+IHsgY3R4LmZpbGxTdHlsZSA9IGNzcyh0b25lLCBhbHBoYSk7IGN0eC5maWxsKHApOyB9KTtcbiAgICAgIH07XG4gICAgICBpZiAoa2luZCA9PT0gJ3JlbmRlcicgfHwga2luZCA9PT0gJ3BhbmVsJykge1xuICAgICAgICBjb25zdCBrID0ga2luZCA9PT0gJ3BhbmVsJyA/IDAuNzUgOiAxLjA7XG4gICAgICAgIG1vdHRsZShXLm1vdHRsZSwgMzAsIDAuMzAsIDAuMTYsIDAuMTApO1xuICAgICAgICBtb3R0bGUoVy5kYW1wLCAxNiwgMC4yMiAqIGssIDAuMTIsIDAuMDcsIDAuMywgMS4wKTtcbiAgICAgICAgLy8gdGhlIGJsYWNrLW1vdWxkIGJhbmQgdW5kZXIgdGhlIGNvcGluZywgY29udGludW91cyBhbmQgY2xvdWR5XG4gICAgICAgIHdyYXBwZWQoKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgMCwgMCwgUyAqIDAuMDcpO1xuICAgICAgICAgIGcuYWRkQ29sb3JTdG9wKDAsIGNzcyhXLmJhbmQsIDAuNjAgKiBrKSk7IGcuYWRkQ29sb3JTdG9wKDEsIGNzcyhXLmJhbmQsIDApKTtcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gZzsgY3R4LmZpbGxSZWN0KDAsIDAsIFMsIFMgKiAwLjA3KTtcbiAgICAgICAgfSk7XG4gICAgICAgIG1vdHRsZShXLmJhbmQsIDI0LCAwLjQ1ICogaywgMC4wNSwgMC4wMTQsIDAuMCwgMC4wNSk7XG4gICAgICAgIGRyaXBzKFcuc3RyZWFrLCAxNSwgMC42MiAqIGssIDAuMDA0LCAwLjE0LCAwLjUwLCAzLCAxNCk7XG4gICAgICAgIGRyaXBzKFcuc3RyZWFrLCAxNiwgMC40NSAqIGssIDAuMDA0LCAwLjA1LCAwLjIwLCAyLCA3KTtcbiAgICAgICAgZHJpcHMoVy5zdHJlYWssIDIyLCAwLjM1ICogaywgMC4wMDQsIDAuMDE1LCAwLjA3LCAyLCA1KTtcbiAgICAgICAgZ3JhaW4oVy5ncmFpbiwgMTgwMCwgMC4wOSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBtb3R0bGUoVy5kZWNrTW90dGxlLCA0MCwgMC41LCAwLjE2LCAwLjExKTtcbiAgICAgICAgbW90dGxlKFcuZGVja1N0YWluLCAxNCwgMC4zMCwgMC4wOSwgMC4wNik7XG4gICAgICAgIGJsb3RjaChXLmRlY2tTdGFpbiwgMTAsIDAuMDIsIDAuMjIpO1xuICAgICAgICBncmFpbihXLmdyYWluLCAyMjAwLCAwLjEyKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjdjtcbiAgICB9O1xuICAgIGNvbnN0IGJpbmQgPSAobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgY3Y6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbCkgPT4ge1xuICAgICAgaWYgKCFjdikgcmV0dXJuO1xuICAgICAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICAgICAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gICAgICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICAgICAgdGV4LmZsaXBZID0gZmFsc2U7ICAgLy8gdiBydW5zIERPV04gdGhlIHRpbGUgZnJvbSBlYWNoIHBhcnQncyB0b3AgKHRvcFV2KSwgc28gcm93IDAgaXMgdGhlIGNvcGluZ1xuICAgICAgdGV4LmFuaXNvdHJvcHkgPSBvcHRpb25zLnRleHR1cmVBbmlzb3Ryb3B5ID8/IDQ7XG4gICAgICBtYXQubWFwID0gdGV4OyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IFcuYnVtcDsgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9O1xuICAgIGJpbmQobWF0ZXJpYWxzLndoaXRlLCBtYWtlVGlsZSgncmVuZGVyJywgMjAyNjA5MDEpKTtcbiAgICBiaW5kKG1hdGVyaWFscy5wYW5lbCwgbWFrZVRpbGUoJ3BhbmVsJywgOTAxMjAyNikpO1xuICAgIGJpbmQobWF0ZXJpYWxzLmRlY2ssIG1ha2VUaWxlKCdkZWNrJywgMTIwMjYwOSkpO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlTW9zcXVlTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiBPTkUuIFN0YXRpYyBsYW5kbWFyayBnZW9tZXRyeSAtLSBub3RoaW5nIG9wZW5zLCB0dXJucyBvciBzd2luZ3MuIEEgbmFtZWQgcGl2b3QgaXMgYVxuICAgIC8vIHByb21pc2UgdGhhdCBhIHBhcnQgdHVybnMgb24gaXQsIGFuZCBhIHByb3AgdGhhdCBkZWNsYXJlcyBwaXZvdHMgaXQgaGFzIG5vIG1lY2hhbmlzbXMgZm9yXG4gICAgLy8gaGFzIGRlc2NyaWJlZCBhIG1hY2hpbmUgdGhhdCBkb2VzIG5vdCBleGlzdC5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcblxuICAgIC8vIFNvY2tldHM6IE5PTkUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gdGhpcyBwcm9wIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cblxuLyoqXG4gKiB2aWJlM2QncyBvbmUtYXJndW1lbnQgZW50cnk6IHRoZSBzYW1lIGZhY3RvcnkgdW5kZXIgdGhlIG5hbWUgYSBwYWNrIGNvbnN1bWVyIGluc3RhbGxzIGFuZFxuICogY2FsbHMuIGBtb2RlbC50c2AgYmVzaWRlIHRoaXMgZmlsZSByZS1leHBvcnRzIGl0IGFzIHRoZSBpdGVtJ3MgYGNyZWF0ZU1vZGVsYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFxQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxJQUNmO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsSUFDZjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLG1CQUFtQjtBQUFBLElBQ3JCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsS0FBSztBQUFBLE1BQ0wsV0FBVztBQUFBLE1BQ1gsZUFBZTtBQUFBLE1BQ2YsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFVBQ04sS0FBSztBQUFBLFVBQ0wsVUFBVTtBQUFBLFVBQ1YsUUFBUTtBQUFBLFVBQ1IsWUFBWTtBQUFBLFFBQ2Q7QUFBQSxRQUNBLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFdBQVc7QUFBQSxNQUNYLGVBQWU7QUFBQSxNQUNmLFVBQVU7QUFBQSxRQUNSLFNBQVM7QUFBQSxRQUNULFdBQVc7QUFBQSxRQUNYLFdBQVc7QUFBQSxRQUNYLGVBQWU7QUFBQSxNQUNqQjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLFNBQVM7QUFBQSxRQUNULGFBQWE7QUFBQSxNQUNmO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsVUFDSjtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsVUFBVTtBQUFBLFFBQ1YsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLE1BQ2Q7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQLE1BQU07QUFBQSxVQUNKO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLFVBQVU7QUFBQSxRQUNWLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFlBQVk7QUFBQSxRQUNaLFNBQVM7QUFBQSxVQUNQLFNBQVM7QUFBQSxVQUNULFFBQVE7QUFBQSxVQUNSLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1AsUUFBUTtBQUFBLFFBQ1IsU0FBUztBQUFBLFFBQ1QsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ04sS0FBSztBQUFBLE1BQ0wsVUFBVTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFVBQVU7QUFBQSxRQUNWLE9BQU87QUFBQSxRQUNQLFdBQVc7QUFBQSxVQUNULEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsT0FBTztBQUFBLFFBQ0wsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxNQUNBO0FBQUEsTUFDQTtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxJQUNULFNBQVM7QUFBQSxNQUNQLE1BQU07QUFBQSxRQUNKO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sU0FBUztBQUFBLFFBQ1QsVUFBVTtBQUFBLFFBQ1YsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNULEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLFlBQVk7QUFBQSxNQUNaLFdBQVc7QUFBQSxNQUNYLFlBQVk7QUFBQSxNQUNaLFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsT0FBTztBQUFBLE1BQ1Q7QUFBQSxNQUNBLFdBQVc7QUFBQSxRQUNULEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxVQUNWLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLEtBQUs7QUFBQSxVQUNMLE1BQU07QUFBQSxVQUNOLFNBQVM7QUFBQSxRQUNYO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLFFBQ1QsS0FBSztBQUFBLFFBQ0wsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLE1BQ1I7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxRQUNQLE9BQU87QUFBQSxRQUNQLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsYUFBYTtBQUFBLE1BQ1g7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDUjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFVBQVU7QUFBQSxRQUNSO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsUUFDQTtB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
