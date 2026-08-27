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

// scratch/toyota-hilux/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createToyotaHiluxModel: () => createToyotaHiluxModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "toyota-hilux",
  "name": "Toyota Hilux",
  "exportName": "ToyotaHilux",
  "envelope": "Envelope 1.86 x 1.82 x 5.33 m (mirrors to 2.06), origin base-center, +Y up, +Z forward.\n * Budget (hero): <=8000 triangles, <=6 draw calls, <=4 materials, <=8 unique geometries.",
  "materials": [
    {
      "id": "paint",
      "color": 9142389,
      "roughness": 0.42,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "glass",
      "color": 4608090,
      "roughness": 0.42,
      "metalness": 0.05,
      "opacity": 0.92
    },
    {
      "id": "trim",
      "color": 16777215,
      "roughness": 0.62,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "paint",
      "kind": "mud",
      "base": [
        0.42777323966672104,
        0.6508713254708676,
        0.9999999999999999
      ],
      "seed": 11,
      "coverage": 0.36,
      "size": 512,
      "bump": 0
    }
  ],
  "pivots": [
    {
      "name": "wheel-front-l",
      "position": [
        0.79,
        0.375,
        1.715
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 0,
      "note": "front left hub, rolls about the axle"
    },
    {
      "name": "wheel-front-r",
      "position": [
        -0.79,
        0.375,
        1.715
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 1,
      "note": "front right hub"
    },
    {
      "name": "wheel-rear-l",
      "position": [
        0.79,
        0.375,
        -1.3699999999999999
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 2,
      "note": "rear left hub"
    },
    {
      "name": "wheel-rear-r",
      "position": [
        -0.79,
        0.375,
        -1.3699999999999999
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 3,
      "note": "rear right hub"
    }
  ],
  "geometry": {
    "width": 1.86,
    "sill": 0.42,
    "paintHex": 16777215,
    "mudScale": 2,
    "collider": {
      "shape": "convex",
      "localCenter": [
        0,
        0.91,
        0
      ],
      "halfExtents": [
        0.93,
        0.91,
        2.665
      ],
      "notes": "Declared on the asset as convex: the hull of the body shell."
    },
    "outline": [
      [
        2.56,
        0.42
      ],
      [
        2.6,
        0.6
      ],
      [
        2.6,
        0.86
      ],
      [
        2.5879,
        0.905
      ],
      [
        2.555,
        0.9379
      ],
      [
        2.51,
        0.95
      ],
      [
        2.3,
        0.965
      ],
      [
        2.1,
        0.985
      ],
      [
        1.9,
        1.01
      ],
      [
        1.7,
        1.04
      ],
      [
        1.45,
        1.08
      ],
      [
        1.06,
        1.7
      ],
      [
        0.9771,
        1.7719
      ],
      [
        0.941,
        1.7928
      ],
      [
        0.9,
        1.8
      ],
      [
        -0.48,
        1.82
      ],
      [
        -0.6459,
        1.7909
      ],
      [
        -0.6849,
        1.7649
      ],
      [
        -0.7109,
        1.7259
      ],
      [
        -0.72,
        1.68
      ],
      [
        -0.72,
        1.2
      ],
      [
        -0.72,
        0.8
      ],
      [
        -2.56,
        0.8
      ],
      [
        -2.6,
        0.76
      ],
      [
        -2.6,
        0.55
      ],
      [
        -2.56,
        0.42
      ]
    ],
    "tumble": {
      "belt": 1.2,
      "roof": 1.82,
      "k": 0.17
    },
    "plan": [
      [
        -2.6,
        0.97
      ],
      [
        -2.5,
        1
      ],
      [
        2.05,
        1
      ],
      [
        2.6,
        0.94
      ]
    ],
    "shape": {
      "steps": 14,
      "edgeBias": 0.6,
      "shoulder": {
        "r": 0.13,
        "zMin": -0.76,
        "zMax": 1.06,
        "fade": 0.16
      },
      "nose": {
        "r": 0.24
      },
      "tail": {
        "r": 0.06
      },
      "smooth": 50
    },
    "bodyBoxes": [
      [
        16777215,
        0.9,
        1,
        -1.66,
        0.056,
        0.4,
        1.86
      ],
      [
        16777215,
        -0.9,
        1,
        -1.66,
        0.056,
        0.4,
        1.86
      ],
      [
        16777215,
        0,
        1,
        -0.768,
        1.74,
        0.4,
        0.055
      ],
      [
        16777215,
        0,
        1,
        -2.63,
        1.74,
        0.4,
        0.06
      ],
      [
        16777215,
        0.9,
        1.205,
        -1.66,
        0.07,
        0.03,
        1.94
      ],
      [
        16777215,
        -0.9,
        1.205,
        -1.66,
        0.07,
        0.03,
        1.94
      ],
      [
        16777215,
        0,
        1.205,
        -2.63,
        1.86,
        0.03,
        0.08
      ]
    ],
    "glass": {
      "poly": [
        [
          1.435,
          1.12
        ],
        [
          1.11,
          1.64
        ],
        [
          -0.6,
          1.64
        ],
        [
          -0.726,
          1.6
        ],
        [
          -0.726,
          1.16
        ]
      ],
      "proud": 6e-3,
      "hex": 16777215
    },
    "pillars": [
      {
        "poly": [
          [
            1.35,
            1.12
          ],
          [
            1.46,
            1.12
          ],
          [
            1.13,
            1.68
          ],
          [
            1.02,
            1.68
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            0.14,
            1.17
          ],
          [
            0.24,
            1.17
          ],
          [
            0.24,
            1.68
          ],
          [
            0.14,
            1.68
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            -0.735,
            1.17
          ],
          [
            -0.625,
            1.17
          ],
          [
            -0.625,
            1.68
          ],
          [
            -0.735,
            1.68
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            -0.3,
            1.17
          ],
          [
            -0.24,
            1.17
          ],
          [
            -0.24,
            1.68
          ],
          [
            -0.3,
            1.68
          ]
        ],
        "strip": 0.1
      }
    ],
    "wheels": {
      "r": 0.375,
      "rim": 0.215,
      "halfW": 0.125,
      "track": 0.79,
      "zF": 1.715,
      "zR": -1.3699999999999999,
      "seg": 20,
      "arch": 0.44,
      "tyreHex": 6182736,
      "rimHex": 9077370,
      "flare": 0.06,
      "flareOut": 0.035,
      "flareHex": 2763304,
      "wellHex": 4867906,
      "positions": [
        [
          0.79,
          0.375,
          1.715
        ],
        [
          -0.79,
          0.375,
          1.715
        ],
        [
          0.79,
          0.375,
          -1.3699999999999999
        ],
        [
          -0.79,
          0.375,
          -1.3699999999999999
        ]
      ]
    },
    "trim": [
      [
        4539455,
        0,
        0.52,
        2.6,
        1.4,
        0.22,
        0.14
      ],
      [
        5920850,
        0,
        0.78,
        2.61,
        1.14,
        0.14,
        0.02
      ],
      [
        12567752,
        0,
        0.745,
        2.625,
        1.1,
        0.025,
        0.015
      ],
      [
        12567752,
        0,
        0.8,
        2.625,
        1.1,
        0.025,
        0.015
      ],
      [
        12567752,
        0,
        0.855,
        2.625,
        1.1,
        0.025,
        0.015
      ],
      [
        4539455,
        0,
        0.52,
        -2.595,
        1.84,
        0.2,
        0.14
      ],
      [
        6051920,
        0,
        0.815,
        -1.66,
        1.74,
        0.03,
        1.8
      ],
      [
        6051920,
        0.862,
        1,
        -1.66,
        0.012,
        0.37,
        1.8
      ],
      [
        6051920,
        -0.862,
        1,
        -1.66,
        0.012,
        0.37,
        1.8
      ],
      [
        6051920,
        0,
        1,
        -0.802,
        1.71,
        0.37,
        0.012
      ],
      [
        6051920,
        0,
        1,
        -2.594,
        1.71,
        0.37,
        0.012
      ],
      [
        2828582,
        0,
        0.3,
        0.1,
        1.4,
        0.16,
        3.3
      ],
      [
        4868164,
        0,
        1,
        -2.664,
        1.2,
        0.3,
        0.012
      ],
      [
        12567752,
        0,
        0.945,
        2.565,
        0.3,
        0.03,
        0.02
      ]
    ],
    "trimMirrored": [
      [
        4539455,
        0.72,
        0.52,
        2.53,
        0.3,
        0.22,
        0.14,
        0,
        0.7
      ],
      [
        14212576,
        0.7,
        0.8,
        2.575,
        0.3,
        0.16,
        0.03,
        0,
        0.45
      ],
      [
        11546672,
        0.885,
        1,
        -2.625,
        0.06,
        0.34,
        0.07
      ],
      [
        2763304,
        0.98,
        1.27,
        1,
        0.1,
        0.03,
        0.03
      ],
      [
        2763304,
        1,
        1.3,
        0.98,
        0.06,
        0.15,
        0.2
      ],
      [
        2763304,
        0.936,
        1.05,
        0.62,
        0.012,
        0.03,
        0.15
      ],
      [
        2763304,
        0.936,
        1.05,
        -0.36,
        0.012,
        0.03,
        0.15
      ],
      [
        4539455,
        0.88,
        0.4,
        0.3,
        0.16,
        0.04,
        2.2
      ],
      [
        2763304,
        0.936,
        0.92,
        0.19,
        4e-3,
        0.48,
        0.02
      ],
      [
        12089914,
        0.88,
        0.64,
        2.46,
        0.08,
        0.05,
        0.02,
        0,
        0.7
      ]
    ],
    "cyls": [
      {
        "at": [
          -0.55,
          0.3,
          -2.56
        ],
        "rt": 0.035,
        "rb": 0.035,
        "h": 0.3,
        "rx": 1.5707963267948966,
        "hex": 7236198
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
function tintGeo(geo, hex) {
  const c = new THREE.Color(hex);
  const n = geo.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
  return geo;
}
function worldUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    let u, v;
    if (ax >= ay && ax >= az) {
      u = p.getZ(i);
      v = p.getY(i);
    } else if (ay >= az) {
      u = p.getX(i);
      v = p.getZ(i);
    } else {
      u = p.getX(i);
      v = p.getY(i);
    }
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function sideExtrude(profile, width, opts = {}) {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const g = new THREE.ExtrudeGeometry(shape, {
    depth: width,
    bevelEnabled: false,
    curveSegments: opts.curveSegments ?? 6,
    steps: opts.steps ?? 1
  });
  g.rotateY(-Math.PI / 2);
  g.translate(width / 2, 0, 0);
  if (opts.edgeBias && (opts.steps ?? 1) > 1) {
    const q = g.getAttribute("position"), hw = width / 2;
    for (let i = 0; i < q.count; i++) {
      const t = Math.max(-1, Math.min(1, q.getX(i) / hw));
      q.setX(i, hw * Math.sign(t) * Math.pow(Math.abs(t), opts.edgeBias));
    }
  }
  shapeWidth(g, opts, width);
  if (opts.smooth) smoothNormals(g, opts.smooth);
  return g;
}
function profileTop(profile, z, tol = 0) {
  let top = -Infinity;
  const n = profile.length;
  for (let i = 0; i < n; i++) {
    const a = profile[i], b = profile[(i + 1) % n];
    const lo = Math.min(a[0], b[0]), hi = Math.max(a[0], b[0]);
    if (z < lo - tol - 1e-6 || z > hi + tol + 1e-6) continue;
    const zc = Math.max(lo, Math.min(hi, z));
    const y = hi - lo < 1e-6 ? Math.max(a[1], b[1]) : a[1] + (b[1] - a[1]) * (zc - a[0]) / (b[0] - a[0]);
    if (y > top) top = y;
  }
  return top;
}
function shapeWidth(g, opts, width = 0) {
  const p = g.getAttribute("position");
  const tumbleAt = (y) => {
    if (!opts.tumble) return 1;
    const t = Math.min(1, Math.max(0, (y - opts.tumble.belt) / (opts.tumble.roof - opts.tumble.belt)));
    return 1 - opts.tumble.k * t;
  };
  const planAt = (z) => {
    if (!opts.plan || opts.plan.length < 2) return 1;
    const st = opts.plan;
    if (z <= st[0][0]) return st[0][1];
    if (z >= st[st.length - 1][0]) return st[st.length - 1][1];
    for (let k = 0; k < st.length - 1; k++) {
      if (z >= st[k][0] && z <= st[k + 1][0]) {
        const u = (z - st[k][0]) / (st[k + 1][0] - st[k][0]);
        return st[k][1] + (st[k + 1][1] - st[k][1]) * u;
      }
    }
    return 1;
  };
  const extra = opts.baseWidth ? (width - opts.baseWidth) / 2 : 0;
  const baseHalf = (opts.baseWidth ?? width) / 2;
  const top = opts.topOf ?? null;
  let zMax = -Infinity, zMin = Infinity;
  if (top) for (const q of top) {
    if (q[0] > zMax) zMax = q[0];
    if (q[0] < zMin) zMin = q[0];
  }
  for (let i = 0; i < p.count; i++) {
    let x = p.getX(i), y = p.getY(i), z = p.getZ(i);
    const tf = tumbleAt(y), pf = planAt(z);
    x *= tf * pf;
    if (opts.shoulder && top) {
      const sh = opts.shoulder;
      const zLo = sh.zMin ?? -Infinity, zHi = sh.zMax ?? Infinity, fd = sh.fade ?? 0;
      const w = z < zLo || z > zHi ? 0 : fd > 0 ? Math.min(1, (zHi - z) / fd) : 1;
      const yt = profileTop(top, z, 0.03);
      if (w > 0 && isFinite(yt)) {
        const r = sh.r + extra, cy = yt - sh.r;
        const hw = baseHalf * tumbleAt(cy) * pf, cx = hw - sh.r;
        const ax = Math.abs(x);
        if (y > cy && ax > cx && r > 1e-6) {
          const dx = ax - cx, dy = y - cy, d = Math.hypot(dx, dy) || 1;
          let nx = ax, ny = y, hit = false;
          if (dx >= r - 1e-4) {
            nx = cx + r;
            ny = cy;
            hit = true;
          } else if (dy >= sh.r - 1e-4 && dx <= r + 1e-6) {
            const th = Math.PI / 2 * (1 - dx / r);
            nx = cx + Math.cos(th) * r;
            ny = cy + Math.sin(th) * r;
            hit = true;
          } else if (dx <= r + 1e-6 && dy <= r + 1e-6 && d >= r - 1e-4) {
            nx = cx + dx / d * r;
            ny = cy + dy / d * r;
            hit = true;
          }
          if (hit) {
            x = Math.sign(x || 1) * (ax + (nx - ax) * w);
            y = y + (ny - y) * w;
          }
        }
      }
    }
    for (const end of [
      opts.nose ? { r: opts.nose.r, zc: zMax - opts.nose.r, s: 1 } : null,
      opts.tail ? { r: opts.tail.r, zc: zMin + opts.tail.r, s: -1 } : null
    ]) {
      if (!end || !top) continue;
      const r = end.r + extra;
      const hw = baseHalf * tumbleAt(y) * planAt(end.zc), cx = hw - end.r;
      const ax = Math.abs(x), dz = (z - end.zc) * end.s;
      if (dz > 0 && ax > cx && r > 1e-6) {
        const dx = ax - cx, d = Math.hypot(dx, dz) || 1;
        if (d >= r - 1e-4) {
          x = Math.sign(x || 1) * (cx + dx / d * r);
          z = end.zc + end.s * (dz / d * r);
        }
      }
    }
    p.setXYZ(i, x, y, z);
  }
  p.needsUpdate = true;
  g.computeVertexNormals();
}
function smoothNormals(geo, maxDeg) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  if (!nrm || geo.getIndex()) return geo;
  const n = p.count, cosLim = Math.cos(maxDeg * Math.PI / 180);
  const groups = /* @__PURE__ */ new Map();
  for (let i = 0; i < n; i++) {
    const k = `${Math.round(p.getX(i) * 2e3)},${Math.round(p.getY(i) * 2e3)},${Math.round(p.getZ(i) * 2e3)}`;
    const g = groups.get(k);
    if (g) g.push(i);
    else groups.set(k, [i]);
  }
  const face = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    face[i * 3] = nrm.getX(i);
    face[i * 3 + 1] = nrm.getY(i);
    face[i * 3 + 2] = nrm.getZ(i);
  }
  const out = new Float32Array(n * 3);
  for (const g of groups.values()) {
    for (const i of g) {
      let sx = 0, sy = 0, sz = 0;
      const ax = face[i * 3], ay = face[i * 3 + 1], az = face[i * 3 + 2];
      for (const j of g) {
        const bx = face[j * 3], by = face[j * 3 + 1], bz = face[j * 3 + 2];
        if (ax * bx + ay * by + az * bz >= cosLim) {
          sx += bx;
          sy += by;
          sz += bz;
        }
      }
      const l = Math.hypot(sx, sy, sz) || 1;
      out[i * 3] = sx / l;
      out[i * 3 + 1] = sy / l;
      out[i * 3 + 2] = sz / l;
    }
  }
  geo.setAttribute("normal", new THREE.BufferAttribute(out, 3));
  return geo;
}
function sideStrip(profile, width, stripW, opts = {}) {
  const shape = new THREE.Shape();
  shape.moveTo(profile[0][0], profile[0][1]);
  for (let i = 1; i < profile.length; i++) shape.lineTo(profile[i][0], profile[i][1]);
  shape.closePath();
  const mk = (sx) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: stripW, bevelEnabled: false, steps: 2 });
    g.rotateY(-Math.PI / 2);
    g.translate(width / 2, 0, 0);
    if (sx < 0) {
      g.scale(-1, 1, 1);
      const q = g.getAttribute("position");
      for (let i = 0; i < q.count; i += 3) {
        const x1 = q.getX(i + 1), y1 = q.getY(i + 1), z1 = q.getZ(i + 1);
        q.setXYZ(i + 1, q.getX(i + 2), q.getY(i + 2), q.getZ(i + 2));
        q.setXYZ(i + 2, x1, y1, z1);
      }
    }
    g.computeVertexNormals();
    shapeWidth(g, opts, width);
    if (opts.smooth) smoothNormals(g, opts.smooth);
    return g;
  };
  return mergeGeos([mk(1), mk(-1)]);
}
function wheelGeo(rTyre, rRim, halfW, seg, tyreHex, rimHex, dish = 0.55) {
  const hw = halfW;
  const pts = [
    [0, -hw * dish],
    [rRim * 0.3, -hw * dish],
    [rRim * 0.62, -hw * 0.8],
    [rRim, -hw * 0.86],
    [rRim, -hw * 0.98],
    [rTyre * 0.93, -hw],
    [rTyre, -hw * 0.72],
    [rTyre, hw * 0.72],
    [rTyre * 0.93, hw],
    [rRim, hw * 0.98],
    [rRim, hw * 0.86],
    [rRim * 0.62, hw * 0.8],
    [rRim * 0.3, hw * dish],
    [0, hw * dish]
  ];
  const rimPoint = (j) => j <= 4 || j >= 9;
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  const ct = new THREE.Color(tyreHex), cr = new THREE.Color(rimHex);
  for (let i = 0; i < n; i++) {
    const c = rimPoint(i % pts.length) ? cr : ct;
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  g.rotateZ(Math.PI / 2);
  g.computeVertexNormals();
  return g;
}
function steelWheelGeo(rTyre, rRim, halfW, seg, tyreHex, rimHex, ventHex, lugHex, dish = 0.5) {
  const hw = halfW, d = hw * dish;
  const pts = [
    [0, -d + 0.02],
    [rRim * 0.22, -d + 0.02],
    [rRim * 0.24, -d],
    // hub cap
    [rRim * 0.4, -d],
    [rRim * 0.42, -d - 6e-3],
    // dish floor
    [rRim * 0.62, -d - 6e-3],
    [rRim * 0.64, -hw * 0.86],
    // vent ring (dark)
    [rRim * 0.9, -hw * 0.86],
    [rRim, -hw * 0.9],
    [rRim, -hw * 0.98],
    // rim face and lip
    [rTyre * 0.88, -hw],
    [rTyre * 0.97, -hw * 0.86],
    [rTyre, -hw * 0.7],
    // sidewall
    [rTyre, hw * 0.7],
    // tread
    [rTyre * 0.97, hw * 0.86],
    [rTyre * 0.88, hw],
    [rRim, hw * 0.98],
    // far sidewall
    [rRim, hw * 0.88],
    [rRim * 0.3, hw * 0.8],
    [0, hw * 0.8]
    // back of the rim
  ];
  const cls = [0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0];
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  const C = [new THREE.Color(rimHex), new THREE.Color(ventHex), new THREE.Color(tyreHex), new THREE.Color(lugHex)];
  const ct = new THREE.Color(tyreHex);
  for (let i = 0; i < n; i++) {
    const j = i % pts.length, s = Math.floor(i / pts.length);
    let c = C[cls[j]];
    if (cls[j] === 3) c = s % 2 === 0 ? ct : C[3];
    col[i * 3] = c.r;
    col[i * 3 + 1] = c.g;
    col[i * 3 + 2] = c.b;
  }
  g.setAttribute("color", new THREE.BufferAttribute(col, 3));
  g.rotateZ(Math.PI / 2);
  g.computeVertexNormals();
  return g;
}
function tube(pts, r, seg = 8, hex) {
  const parts = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const g = new THREE.CylinderGeometry(r, r, len + r * 1.2, seg, 1, false);
    const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), d.normalize());
    g.applyQuaternion(q);
    const m = a.clone().add(b).multiplyScalar(0.5);
    g.translate(m.x, m.y, m.z);
    parts.push(g);
  }
  const out = mergeGeos(parts);
  return hex === void 0 ? out : tintGeo(out, hex);
}
function rbox(b) {
  const g = new THREE.BoxGeometry(b[3], b[4], b[5]);
  if (b[6]) g.rotateX(b[6]);
  if (b[7]) g.rotateY(b[7]);
  if (b[8]) g.rotateZ(b[8]);
  g.translate(b[0], b[1], b[2]);
  return g;
}
function tintedBoxes(list) {
  return mergeGeos(list.map((b) => tintGeo(rbox(b.slice(1)), b[0])));
}
function mirrorX(list) {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}
function canvasTile(size, draw) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d");
  if (!ctx) return null;
  draw(ctx, size);
  const tex = new THREE.CanvasTexture(cv);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.needsUpdate = true;
  return tex;
}
function lcg(seed) {
  let s = seed >>> 0;
  return () => {
    s = s * 1664525 + 1013904223 >>> 0;
    return s / 4294967296;
  };
}
function mudTile(size, base, seed, coverage = 0.33, opts = {}) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v) => "#" + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, "0")).join("");
    ctx.fillStyle = toHex(base);
    ctx.fillRect(0, 0, s, s);
    const fl = Math.min(coverage, opts.floor ?? 0);
    const T = opts.tone ? opts.tone.map((v) => Math.round(255 * Math.min(1, Math.max(0, v)))) : null;
    const mud = (a) => T ? `rgba(${T[0]},${T[1]},${T[2]},${a})` : `rgba(255,252,244,${a})`;
    const grad = ctx.createLinearGradient(0, s * (1 - fl), 0, s * (1 - coverage));
    grad.addColorStop(0, T ? mud(0.88) : "rgba(255,255,255,0.88)");
    grad.addColorStop(0.45, T ? mud(0.45) : "rgba(255,255,255,0.45)");
    grad.addColorStop(1, T ? mud(0) : "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    const zones = opts.zones ?? [[0, 1, 1]];
    const zsum = zones.reduce((acc, zn) => acc + zn[2], 0);
    const pickU = () => {
      let t = rnd() * zsum;
      for (const zn of zones) {
        if (t < zn[2]) return (zn[0] + rnd() * (zn[1] - zn[0])) * s;
        t -= zn[2];
      }
      return rnd() * s;
    };
    if (opts.cloud) for (let i = 0; i < 40; i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = opts.cloud * (0.4 + rnd() * 0.6);
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, mud(a));
      g2.addColorStop(1, mud(0));
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (opts.streaks) for (let i = 0; i < opts.streaks; i++) {
      const cx0 = pickU(), band = coverage;
      const cy0 = s - s * (fl + Math.pow(rnd(), 1.6) * (band - fl));
      const count = 6 + Math.floor(rnd() * 18), spread = s * (0.02 + rnd() * 0.05);
      for (let k = 0; k < count; k++) {
        const x = cx0 + (rnd() - 0.5) * spread * 3, y = cy0 + (rnd() - 0.5) * spread;
        const w = 1 + rnd() * s * 6e-3, h = 0.8 + rnd() * s * 3e-3, a = 0.35 + rnd() * 0.55;
        ctx.fillStyle = mud(a);
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y, w, h, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
    if (opts.speckle) for (let i = 0; i < opts.speckle; i++) {
      const x = pickU(), y = s - Math.pow(rnd(), 1.3) * s * coverage, r = 0.6 + rnd() * 1.4, a = 0.3 + rnd() * 0.6;
      ctx.fillStyle = mud(a);
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, T ? mud(a) : `rgba(255,250,240,${a})`);
      g2.addColorStop(1, T ? mud(0) : "rgba(255,250,240,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const x = rnd() * s, y = rnd() * s;
      const v = rnd() < 0.5 ? 0 : 255;
      ctx.fillStyle = `rgba(${v},${v},${v},0.035)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
  });
}
function dustTile(size, dust, seed, coverage = 0.3) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const c = dust.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.9)`);
    grad.addColorStop(0.5, `rgba(${c[0]},${c[1]},${c[2]},0.4)`);
    grad.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 80; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.4, r = 3 + rnd() * s * 0.05, a = 0.08 + rnd() * 0.25;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  });
}
function glassTile(size, low, seed, streaks = 5) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const c = low.map((v) => Math.round(255 * Math.min(1, v)));
    const grad = ctx.createLinearGradient(0, s, 0, 0);
    grad.addColorStop(0, `rgb(${c[0]},${c[1]},${c[2]})`);
    grad.addColorStop(0.45, `rgb(${Math.round((c[0] + 255) / 2)},${Math.round((c[1] + 255) / 2)},${Math.round((c[2] + 255) / 2)})`);
    grad.addColorStop(1, "#ffffff");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < streaks; i++) {
      const x = rnd() * s, w = s * (0.04 + rnd() * 0.1), a = 0.1 + rnd() * 0.16, tilt = s * (0.25 + rnd() * 0.35);
      for (const dx of [-s, 0, s]) {
        const g2 = ctx.createLinearGradient(x + dx, 0, x + dx + w, 0);
        g2.addColorStop(0, "rgba(255,255,255,0)");
        g2.addColorStop(0.5, `rgba(255,255,255,${a})`);
        g2.addColorStop(1, "rgba(255,255,255,0)");
        ctx.fillStyle = g2;
        ctx.beginPath();
        ctx.moveTo(x + dx, s);
        ctx.lineTo(x + dx + w, s);
        ctx.lineTo(x + dx + w + tilt, 0);
        ctx.lineTo(x + dx + tilt, 0);
        ctx.closePath();
        ctx.fill();
      }
    }
    const g3 = ctx.createLinearGradient(0, s, 0, s * 0.88);
    g3.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},0.55)`);
    g3.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
    ctx.fillStyle = g3;
    ctx.fillRect(0, 0, s, s);
  });
}
function corrugationTile(size, pitch, low, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    for (let x = 0; x < s; x++) {
      const t = (Math.cos(x / s * Math.PI * 2 * pitch) + 1) / 2;
      const v = Math.round(255 * (low + (1 - low) * t));
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(x, 0, 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 60; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      const a = 0.08 + rnd() * 0.18;
      g2.addColorStop(0, `rgba(120,90,60,${a})`);
      g2.addColorStop(1, "rgba(120,90,60,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function plankTile(size, boards, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const bh = s / boards;
    for (let b = 0; b < boards; b++) {
      const tone = 0.82 + rnd() * 0.18;
      const v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(0, b * bh, s, bh);
      ctx.fillStyle = "rgba(40,30,20,0.55)";
      ctx.fillRect(0, b * bh, s, Math.max(1, s * 6e-3));
      for (let k = 0; k < 14; k++) {
        const y = b * bh + rnd() * bh, len = s * (0.2 + rnd() * 0.6), x = rnd() * s;
        ctx.strokeStyle = `rgba(60,45,30,${0.05 + rnd() * 0.12})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + len, y);
        ctx.moveTo(x, y);
        ctx.lineTo(x + len, y);
        ctx.stroke();
      }
    }
  });
}
function rustTile(size, ratio, seed, density = 90) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < density; i++) {
      const x = rnd() * s, y = rnd() * s, r = 3 + rnd() * s * 0.09;
      const a = 0.15 + rnd() * 0.45;
      const c = ratio.map((v) => Math.round(255 * v));
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${c[0]},${c[1]},${c[2]},${a})`);
      g2.addColorStop(1, `rgba(${c[0]},${c[1]},${c[2]},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function heightUV(geo, scale, opts = {}) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  const us = opts.uScale ?? scale;
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), ay = Math.abs(nrm.getY(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    let v = p.getY(i) / scale;
    if (opts.topClean && ay >= 0.8) v = 0.75 + 0.2 * (v - Math.floor(v));
    uv[i * 2] = u / us;
    uv[i * 2 + 1] = v;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function offsetPoly(pts, d) {
  const n = pts.length, out = [];
  for (let i = 0; i < n; i++) {
    const a = pts[(i + n - 1) % n], b = pts[i], c = pts[(i + 1) % n];
    const e1 = [b[0] - a[0], b[1] - a[1]], e2 = [c[0] - b[0], c[1] - b[1]];
    const l1 = Math.hypot(e1[0], e1[1]) || 1, l2 = Math.hypot(e2[0], e2[1]) || 1;
    const n1 = [e1[1] / l1, -e1[0] / l1], n2 = [e2[1] / l2, -e2[0] / l2];
    let nx = n1[0] + n2[0], ny = n1[1] + n2[1];
    const nl = Math.hypot(nx, ny) || 1;
    nx /= nl;
    ny /= nl;
    const cosHalf = Math.max(0.35, nx * n1[0] + ny * n1[1]);
    out.push([b[0] + nx * d / cosHalf, b[1] + ny * d / cosHalf]);
  }
  return out;
}
function flare(zc, yc, rIn, rOut, x0, x1, hex, n = 9) {
  const shape = new THREE.Shape();
  for (let i = 0; i <= n; i++) {
    const a = Math.PI - i * Math.PI / n;
    const z = zc + Math.cos(a) * rOut, y = yc + Math.sin(a) * rOut;
    if (i === 0) shape.moveTo(z, y);
    else shape.lineTo(z, y);
  }
  for (let i = n; i >= 0; i--) {
    const a = Math.PI - i * Math.PI / n;
    shape.lineTo(zc + Math.cos(a) * rIn, yc + Math.sin(a) * rIn);
  }
  shape.closePath();
  const mk = (sx) => {
    const g = new THREE.ExtrudeGeometry(shape, { depth: x1 - x0, bevelEnabled: false });
    g.rotateY(-Math.PI / 2);
    g.translate(x1, 0, 0);
    if (sx < 0) g.scale(-1, 1, 1);
    g.computeVertexNormals();
    return tintGeo(g, hex);
  };
  const l = mk(-1), r = mk(1);
  const idx = l.getIndex();
  if (idx) {
    const a = idx.array;
    for (let i = 0; i < a.length; i += 3) {
      const t = a[i + 1];
      a[i + 1] = a[i + 2];
      a[i + 2] = t;
    }
    idx.needsUpdate = true;
  } else {
    const p = l.getAttribute("position");
    for (let i = 0; i < p.count; i += 3) {
      const x1_ = p.getX(i + 1), y1_ = p.getY(i + 1), z1_ = p.getZ(i + 1);
      p.setXYZ(i + 1, p.getX(i + 2), p.getY(i + 2), p.getZ(i + 2));
      p.setXYZ(i + 2, x1_, y1_, z1_);
    }
  }
  l.computeVertexNormals();
  return mergeGeos([l, r]);
}
function bindTile(mat, tex, bump = 0) {
  if (!tex) return;
  mat.map = tex;
  if (bump > 0) {
    mat.bumpMap = tex;
    mat.bumpScale = bump;
  }
  mat.needsUpdate = true;
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
function createToyotaHiluxModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Toyota Hilux";
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
  const W = G.width;
  const wh = G.wheels;
  const outline = G.outline.slice();
  const sill = G.sill;
  const rA = wh.arch;
  const archPts = (zc) => {
    const p = [];
    for (let i = 0; i <= 8; i++) {
      const a = Math.PI - i * Math.PI / 8;
      p.push([zc + Math.cos(a) * rA, wh.r + Math.sin(a) * rA]);
    }
    return p;
  };
  const zRearSill = outline[outline.length - 1][0], zFrontSill = outline[0][0];
  const sillRun = [];
  for (const zc of [wh.zR, wh.zF]) {
    if (zc - rA > zRearSill && zc + rA < zFrontSill) sillRun.push(...archPts(zc));
  }
  const profile = outline.concat(sillRun.length ? sillRun : []);
  const shapeOpts = { tumble: G.tumble, plan: G.plan, ...G.shape ?? {}, baseWidth: W, topOf: profile };
  const bodyGeos = [tintGeo(sideExtrude(profile, W, shapeOpts), G.paintHex)];
  for (const b of G.bodyBoxes ?? []) bodyGeos.push(tintGeo(rbox(b.slice(1)), b[0]));
  for (const ex of G.bodyExtrudes ?? []) {
    bodyGeos.push(tintGeo(sideExtrude(ex.poly, ex.width ?? W, ex.shape ?? {}), ex.hex ?? G.paintHex));
  }
  const uvOpts = { uScale: G.mudUScale, topClean: !!G.mudTopClean };
  const bodyGeo = heightUV(mergeGeos(bodyGeos), G.mudScale ?? 1.2, uvOpts);
  const body = add("body", "Body shell", bodyGeo, "paint");
  if (G.collider) colliders["body"] = G.collider;
  const glassGeos = [];
  const gl = G.glass;
  if (gl?.poly) glassGeos.push(sideExtrude(offsetPoly(gl.poly, gl.proud ?? 6e-3), W + 2 * (gl.proud ?? 6e-3), shapeOpts));
  for (const b of gl?.boxes ?? []) glassGeos.push(rbox(b));
  if (glassGeos.length) {
    let gg = tintGeo(mergeGeos(glassGeos), gl.hex ?? 16777215);
    if (gl.uvY) {
      const q = gg.getAttribute("position"), nq = gg.getAttribute("normal"), uv = new Float32Array(q.count * 2);
      const us = gl.uScale ?? 1.6, y0 = gl.uvY[0], y1 = gl.uvY[1];
      for (let i = 0; i < q.count; i++) {
        const u = Math.abs(nq.getX(i)) >= Math.abs(nq.getZ(i)) ? q.getZ(i) : q.getX(i);
        uv[i * 2] = u / us;
        uv[i * 2 + 1] = Math.min(1, Math.max(0, (q.getY(i) - y0) / (y1 - y0)));
      }
      gg.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
    }
    add("glazing", "Glazing", gg, "glass");
  }
  const pillarGeos = [];
  for (const pl of G.pillars ?? []) {
    if (Array.isArray(pl)) pillarGeos.push(tintGeo(sideExtrude(pl, W + 2 * 0.013, shapeOpts), G.paintHex));
    else pillarGeos.push(tintGeo(sideStrip(pl.poly, W + 2 * (pl.proud ?? 0.013), pl.strip ?? 0.1, shapeOpts), G.paintHex));
  }
  if (pillarGeos.length) {
    const pg = heightUV(mergeGeos(pillarGeos), G.mudScale ?? 1.2, uvOpts);
    const merged = heightUV(mergeGeos([body.geometry, pg]), G.mudScale ?? 1.2, uvOpts);
    body.geometry = merged;
  }
  const trimList = [];
  for (const b of G.trim ?? []) trimList.push(b);
  for (const b of mirrorX(G.trimMirrored ?? [])) trimList.push(b);
  const trimGeos = [tintedBoxes(trimList)];
  for (const zc of [wh.zF, wh.zR]) {
    if (wh.flare) trimGeos.push(flare(zc, wh.r, rA + 5e-3, rA + wh.flare, W / 2 - 0.012, W / 2 + (wh.flareOut ?? 0.03), wh.flareHex ?? 2763306));
    const innerHalf = wh.track - wh.halfW - 5e-3;
    trimGeos.push(tintGeo(boxAt(0, (sill + wh.r + rA - 0.02) / 2 + 0, zc, innerHalf * 2, wh.r + rA - 0.02 - sill + 0.1, (rA - 0.03) * 2), wh.wellHex ?? 2828582));
  }
  for (const t of G.tubes ?? []) trimGeos.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
  for (const c of G.cyls ?? []) {
    const g = new THREE.CylinderGeometry(c.rt, c.rb, c.h, c.seg ?? 12);
    if (c.rx) g.rotateX(c.rx);
    if (c.rz) g.rotateZ(c.rz);
    g.translate(c.at[0], c.at[1], c.at[2]);
    trimGeos.push(tintGeo(g, c.hex));
  }
  add("trim", "Trim, lamps, bumpers and wheel wells", mergeGeos(trimGeos), "trim");
  const wheelG = wh.style === "steel" ? steelWheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 24, wh.tyreHex, wh.rimHex, wh.ventHex ?? 4868162, wh.lugHex ?? wh.tyreHex, wh.dish ?? 0.5) : wheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 20, wh.tyreHex, wh.rimHex, wh.dish ?? 0.55);
  const wheelMats = [];
  for (const p of wh.positions) {
    wheelMats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(p[0], p[1], p[2]),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), p[0] < 0 ? Math.PI : 0),
      new THREE.Vector3(1, 1, 1)
    ));
  }
  addInst("wheels", "Wheels", wheelG, "trim", wheelMats);
  for (const ex of G.extras ?? []) {
    const gs = [];
    for (const b of ex.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(ex.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of ex.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const e of ex.extrudes ?? []) gs.push(tintGeo(sideExtrude(e.poly, e.width, e.shape ?? {}), e.hex));
    let g = mergeGeos(gs);
    if (ex.uv === "world") g = worldUV(g, ex.uvScale ?? 1);
    if (ex.uv === "height") g = heightUV(g, ex.uvScale ?? 1);
    add(ex.id, ex.name, g, ex.material);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33, t.opts ?? {});
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 256, t.pitch ?? 24, t.low ?? 0.72, t.seed ?? 3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "glass") tex = glassTile(t.size ?? 256, t.low, t.seed ?? 9, t.streaks ?? 5);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createToyotaHiluxModel(options);
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
    for (const pv of CONFIG.pivots ?? []) {
      const o = new THREE.Object3D();
      o.name = pv.name;
      o.position.set(pv.position[0], pv.position[1], pv.position[2]);
      o.userData.actionProfile = {
        animationRole: "child",
        pivot: {
          mode: "custom",
          localPosition: pv.position,
          axis: pv.axis,
          name: pv.name,
          component: pv.component,
          instance: pv.instance ?? null,
          notes: pv.note ?? ""
        }
      };
      root.add(o);
      pivots.push(o);
    }
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVG95b3RhIEhpbHV4IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuODYgeCAxLjgyIHggNS4zMyBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxuICogQnVkZ2V0IChoZXJvKTogPD04MDAwIHRyaWFuZ2xlcywgPD02IGRyYXcgY2FsbHMsIDw9NCBtYXRlcmlhbHMsIDw9OCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgVkVISUNMRVMuIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgU0lERS1QUk9GSUxFIEVYVFJVU0lPTiAtLSBhXG4gKiBjbG9zZWQgcG9seWdvbiBpbiB0aGUgKHosIHkpIHBsYW5lIHN3ZXB0IGFjcm9zcyB0aGUgd2lkdGggYW5kIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXggZm9yXG4gKiB0dW1ibGVob21lIGFuZCBwbGFuIHJvdW5kaW5nIC0tIHBsdXMgYSBsYXRoZWQgV0hFRUwgcmV2b2x2ZWQgYWJvdXQgaXRzIGF4bGUgYW5kIGEgcG9seWxpbmUgVFVCRVxuICogZm9yIGhhbmRsZWJhcnMsIHJhaWxzIGFuZCBmcmFtZXMuIEV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBvbmUgbWF0ZXJpYWwgaXMgY2FycmllZCBhcyBhXG4gKiB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsIHNvIGEgdHdvLXRvbmUgYm9keSwgYSBibGFjayB0eXJlIG9uIGEgc2lsdmVyIHJpbSBhbmQgYW4gYW1iZXJcbiAqIGluZGljYXRvciBhbGwgcmlkZSBvbmUgc2hhZGVyIGFuZCBvbmUgc3VibWlzc2lvbi5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInRveW90YS1oaWx1eFwiLFxuICAgIFwibmFtZVwiOiBcIlRveW90YSBIaWx1eFwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlRveW90YUhpbHV4XCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuODYgeCAxLjgyIHggNS4zMyBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxcbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5MTQyMzg5LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA0NjA4MDkwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjA1LFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45MlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRyaW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwYWludFwiLFxuICAgICAgICBcImtpbmRcIjogXCJtdWRcIixcbiAgICAgICAgXCJiYXNlXCI6IFtcbiAgICAgICAgICAwLjQyNzc3MzIzOTY2NjcyMTA0LFxuICAgICAgICAgIDAuNjUwODcxMzI1NDcwODY3NixcbiAgICAgICAgICAwLjk5OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgXSxcbiAgICAgICAgXCJzZWVkXCI6IDExLFxuICAgICAgICBcImNvdmVyYWdlXCI6IDAuMzYsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwiYnVtcFwiOiAwXG4gICAgICB9XG4gICAgXSxcbiAgICBcInBpdm90c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLWZyb250LWxcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMC43OSxcbiAgICAgICAgICAwLjM3NSxcbiAgICAgICAgICAxLjcxNVxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMCxcbiAgICAgICAgXCJub3RlXCI6IFwiZnJvbnQgbGVmdCBodWIsIHJvbGxzIGFib3V0IHRoZSBheGxlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLWZyb250LXJcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgLTAuNzksXG4gICAgICAgICAgMC4zNzUsXG4gICAgICAgICAgMS43MTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJheGlzXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIndoZWVsc1wiLFxuICAgICAgICBcImluc3RhbmNlXCI6IDEsXG4gICAgICAgIFwibm90ZVwiOiBcImZyb250IHJpZ2h0IGh1YlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ3aGVlbC1yZWFyLWxcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMC43OSxcbiAgICAgICAgICAwLjM3NSxcbiAgICAgICAgICAtMS4zNjk5OTk5OTk5OTk5OTk5XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAyLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIGxlZnQgaHViXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLXJlYXItclwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAtMC43OSxcbiAgICAgICAgICAwLjM3NSxcbiAgICAgICAgICAtMS4zNjk5OTk5OTk5OTk5OTk5XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAzLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIHJpZ2h0IGh1YlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwid2lkdGhcIjogMS44NixcbiAgICAgIFwic2lsbFwiOiAwLjQyLFxuICAgICAgXCJwYWludEhleFwiOiAxNjc3NzIxNSxcbiAgICAgIFwibXVkU2NhbGVcIjogMixcbiAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICBcInNoYXBlXCI6IFwiY29udmV4XCIsXG4gICAgICAgIFwibG9jYWxDZW50ZXJcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC45MSxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgIDAuOTMsXG4gICAgICAgICAgMC45MSxcbiAgICAgICAgICAyLjY2NVxuICAgICAgICBdLFxuICAgICAgICBcIm5vdGVzXCI6IFwiRGVjbGFyZWQgb24gdGhlIGFzc2V0IGFzIGNvbnZleDogdGhlIGh1bGwgb2YgdGhlIGJvZHkgc2hlbGwuXCJcbiAgICAgIH0sXG4gICAgICBcIm91dGxpbmVcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMi41NixcbiAgICAgICAgICAwLjQyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC42XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC44NlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi41ODc5LFxuICAgICAgICAgIDAuOTA1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjU1NSxcbiAgICAgICAgICAwLjkzNzlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNTEsXG4gICAgICAgICAgMC45NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4zLFxuICAgICAgICAgIDAuOTY1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjEsXG4gICAgICAgICAgMC45ODVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuOSxcbiAgICAgICAgICAxLjAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjcsXG4gICAgICAgICAgMS4wNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS40NSxcbiAgICAgICAgICAxLjA4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjA2LFxuICAgICAgICAgIDEuN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC45NzcxLFxuICAgICAgICAgIDEuNzcxOVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMC45NDEsXG4gICAgICAgICAgMS43OTI4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgMS44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC40OCxcbiAgICAgICAgICAxLjgyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC42NDU5LFxuICAgICAgICAgIDEuNzkwOVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTAuNjg0OSxcbiAgICAgICAgICAxLjc2NDlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjcxMDksXG4gICAgICAgICAgMS43MjU5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC43MixcbiAgICAgICAgICAxLjY4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC43MixcbiAgICAgICAgICAxLjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjcyLFxuICAgICAgICAgIDAuOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgMC44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42LFxuICAgICAgICAgIDAuNzZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjYsXG4gICAgICAgICAgMC41NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgMC40MlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICBcImJlbHRcIjogMS4yLFxuICAgICAgICBcInJvb2ZcIjogMS44MixcbiAgICAgICAgXCJrXCI6IDAuMTdcbiAgICAgIH0sXG4gICAgICBcInBsYW5cIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTIuNixcbiAgICAgICAgICAwLjk3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi41LFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDAuOTRcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICBcInN0ZXBzXCI6IDE0LFxuICAgICAgICBcImVkZ2VCaWFzXCI6IDAuNixcbiAgICAgICAgXCJzaG91bGRlclwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuMTMsXG4gICAgICAgICAgXCJ6TWluXCI6IC0wLjc2LFxuICAgICAgICAgIFwiek1heFwiOiAxLjA2LFxuICAgICAgICAgIFwiZmFkZVwiOiAwLjE2XG4gICAgICAgIH0sXG4gICAgICAgIFwibm9zZVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWlsXCI6IHtcbiAgICAgICAgICBcInJcIjogMC4wNlxuICAgICAgICB9LFxuICAgICAgICBcInNtb290aFwiOiA1MFxuICAgICAgfSxcbiAgICAgIFwiYm9keUJveGVzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIC0xLjY2LFxuICAgICAgICAgIDAuMDU2LFxuICAgICAgICAgIDAuNCxcbiAgICAgICAgICAxLjg2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAtMC45LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNTYsXG4gICAgICAgICAgMC40LFxuICAgICAgICAgIDEuODZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMC43NjgsXG4gICAgICAgICAgMS43NCxcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC4wNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMi42MyxcbiAgICAgICAgICAxLjc0LFxuICAgICAgICAgIDAuNCxcbiAgICAgICAgICAwLjA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgMS4yMDUsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDEuOTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIC0wLjksXG4gICAgICAgICAgMS4yMDUsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDEuOTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMS4yMDUsXG4gICAgICAgICAgLTIuNjMsXG4gICAgICAgICAgMS44NixcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDhcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiZ2xhc3NcIjoge1xuICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuNDM1LFxuICAgICAgICAgICAgMS4xMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4xMSxcbiAgICAgICAgICAgIDEuNjRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgICAxLjY0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC43MjYsXG4gICAgICAgICAgICAxLjZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjcyNixcbiAgICAgICAgICAgIDEuMTZcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwicHJvdWRcIjogMC4wMDYsXG4gICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICB9LFxuICAgICAgXCJwaWxsYXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMzUsXG4gICAgICAgICAgICAgIDEuMTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuNDYsXG4gICAgICAgICAgICAgIDEuMTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMTMsXG4gICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAgIDEuNjhcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3RyaXBcIjogMC4xXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAxLjE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAxLjE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNzM1LFxuICAgICAgICAgICAgICAxLjE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC42MjUsXG4gICAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjYyNSxcbiAgICAgICAgICAgICAgMS42OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNzM1LFxuICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS4xN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMjQsXG4gICAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjI0LFxuICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgICAxLjY4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3aGVlbHNcIjoge1xuICAgICAgICBcInJcIjogMC4zNzUsXG4gICAgICAgIFwicmltXCI6IDAuMjE1LFxuICAgICAgICBcImhhbGZXXCI6IDAuMTI1LFxuICAgICAgICBcInRyYWNrXCI6IDAuNzksXG4gICAgICAgIFwiekZcIjogMS43MTUsXG4gICAgICAgIFwielJcIjogLTEuMzY5OTk5OTk5OTk5OTk5OSxcbiAgICAgICAgXCJzZWdcIjogMjAsXG4gICAgICAgIFwiYXJjaFwiOiAwLjQ0LFxuICAgICAgICBcInR5cmVIZXhcIjogNjE4MjczNixcbiAgICAgICAgXCJyaW1IZXhcIjogOTA3NzM3MCxcbiAgICAgICAgXCJmbGFyZVwiOiAwLjA2LFxuICAgICAgICBcImZsYXJlT3V0XCI6IDAuMDM1LFxuICAgICAgICBcImZsYXJlSGV4XCI6IDI3NjMzMDQsXG4gICAgICAgIFwid2VsbEhleFwiOiA0ODY3OTA2LFxuICAgICAgICBcInBvc2l0aW9uc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43OSxcbiAgICAgICAgICAgIDAuMzc1LFxuICAgICAgICAgICAgMS43MTVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjc5LFxuICAgICAgICAgICAgMC4zNzUsXG4gICAgICAgICAgICAxLjcxNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43OSxcbiAgICAgICAgICAgIDAuMzc1LFxuICAgICAgICAgICAgLTEuMzY5OTk5OTk5OTk5OTk5OVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNzksXG4gICAgICAgICAgICAwLjM3NSxcbiAgICAgICAgICAgIC0xLjM2OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInRyaW1cIjogW1xuICAgICAgICBbXG4gICAgICAgICAgNDUzOTQ1NSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDEuNCxcbiAgICAgICAgICAwLjIyLFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDU5MjA4NTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjc4LFxuICAgICAgICAgIDIuNjEsXG4gICAgICAgICAgMS4xNCxcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyNTY3NzUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC43NDUsXG4gICAgICAgICAgMi42MjUsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgIDAuMDE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjU2Nzc1MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAyLjYyNSxcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgMC4wMTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyNTY3NzUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC44NTUsXG4gICAgICAgICAgMi42MjUsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgIDAuMDE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0NTM5NDU1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAtMi41OTUsXG4gICAgICAgICAgMS44NCxcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNjA1MTkyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuODE1LFxuICAgICAgICAgIC0xLjY2LFxuICAgICAgICAgIDEuNzQsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAxLjhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDYwNTE5MjAsXG4gICAgICAgICAgMC44NjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMS42NixcbiAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAwLjM3LFxuICAgICAgICAgIDEuOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNjA1MTkyMCxcbiAgICAgICAgICAtMC44NjIsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMS42NixcbiAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAwLjM3LFxuICAgICAgICAgIDEuOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNjA1MTkyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTAuODAyLFxuICAgICAgICAgIDEuNzEsXG4gICAgICAgICAgMC4zNyxcbiAgICAgICAgICAwLjAxMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNjA1MTkyMCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTIuNTk0LFxuICAgICAgICAgIDEuNzEsXG4gICAgICAgICAgMC4zNyxcbiAgICAgICAgICAwLjAxMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMjgyODU4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMS40LFxuICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgMy4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4MTY0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMi42NjQsXG4gICAgICAgICAgMS4yLFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjAxMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTI1Njc3NTIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjk0NSxcbiAgICAgICAgICAyLjU2NSxcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcInRyaW1NaXJyb3JlZFwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICA0NTM5NDU1LFxuICAgICAgICAgIDAuNzIsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAyLjUzLFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjIyLFxuICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjdcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE0MjEyNTc2LFxuICAgICAgICAgIDAuNyxcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMi41NzUsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDExNTQ2NjcyLFxuICAgICAgICAgIDAuODg1LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTIuNjI1LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4zNCxcbiAgICAgICAgICAwLjA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyNzYzMzA0LFxuICAgICAgICAgIDAuOTgsXG4gICAgICAgICAgMS4yNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDI3NjMzMDQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLjMsXG4gICAgICAgICAgMC45OCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgMC4yXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyNzYzMzA0LFxuICAgICAgICAgIDAuOTM2LFxuICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgMC42MixcbiAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDI3NjMzMDQsXG4gICAgICAgICAgMC45MzYsXG4gICAgICAgICAgMS4wNSxcbiAgICAgICAgICAtMC4zNixcbiAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ1Mzk0NTUsXG4gICAgICAgICAgMC44OCxcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgMC4wNCxcbiAgICAgICAgICAyLjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDI3NjMzMDQsXG4gICAgICAgICAgMC45MzYsXG4gICAgICAgICAgMC45MixcbiAgICAgICAgICAwLjE5LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuNDgsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTIwODk5MTQsXG4gICAgICAgICAgMC44OCxcbiAgICAgICAgICAwLjY0LFxuICAgICAgICAgIDIuNDYsXG4gICAgICAgICAgMC4wOCxcbiAgICAgICAgICAwLjA1LFxuICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjdcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgIC0wLjU1LFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgLTIuNTZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicnRcIjogMC4wMzUsXG4gICAgICAgICAgXCJyYlwiOiAwLjAzNSxcbiAgICAgICAgICBcImhcIjogMC4zLFxuICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgIFwiaGV4XCI6IDcyMzYxOThcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgb3B0czogU2hhcGVPcHRzID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiwgc3RlcHM6IG9wdHMuc3RlcHMgPz8gMSB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIGlmIChvcHRzLmVkZ2VCaWFzICYmIChvcHRzLnN0ZXBzID8/IDEpID4gMSkge1xuICAgIC8vIFB1bGwgdGhlIHdpZHRoIGNvbHVtbnMgdG93YXJkIHRoZSB0d28gZWRnZXMgKHx0fF5wLCBwIDwgMSkgc28gYSBzaG91bGRlciBmaWxsZXQgZ2V0cyBmb3VyXG4gICAgLy8gcmVhbCBzZWdtZW50cyBpbnN0ZWFkIG9mIG9uZSBjaGFtZmVyIGF0IHRoZSBvdXRlcm1vc3QgY29sdW1uOyB0aGUgZmxhdCBtaWRkbGUgbmVlZHMgbm9uZS5cbiAgICBjb25zdCBxID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIGh3ID0gd2lkdGggLyAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHEuZ2V0WChpKSAvIGh3KSk7XG4gICAgICBxLnNldFgoaSwgaHcgKiBNYXRoLnNpZ24odCkgKiBNYXRoLnBvdyhNYXRoLmFicyh0KSwgb3B0cy5lZGdlQmlhcykpO1xuICAgIH1cbiAgfVxuICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBTaGFwaW5nIG9wdGlvbnMgc2hhcmVkIGJ5IGEgYm9keSBhbmQgZXZlcnl0aGluZyBzd2VwdCBwcm91ZCBvZiBpdCAoZ2xhc3MgYmFuZCwgcGlsbGFycykuXG4gKiAgYHNob3VsZGVyYCwgYG5vc2VgIGFuZCBgdGFpbGAgYXJlIFJPVU5ESU5HUyAtLSBzZWUgc2hhcGVXaWR0aCAtLSBhbmQgbmVlZCBgc3RlcHNgID4gMSBzbyB0aGVcbiAqICBzd2VwdCBmYWNlcyBjYXJyeSB2ZXJ0aWNlcyBhY3Jvc3MgdGhlIHdpZHRoIHRvIGJlbmQ7IGBiYXNlV2lkdGhgIGlzIHRoZSBib2R5J3Mgd2lkdGgsIHNvIGFcbiAqICBiYW5kIHN3ZXB0IHdpZGVyIHRoYW4gaXQgaXMgcm91bmRlZCBhYm91dCB0aGUgU0FNRSBjZW50cmVzIGF0IGEgbGFyZ2VyIHJhZGl1cyBhbmQgc3RheXNcbiAqICBleGFjdGx5IGFzIHByb3VkIGFzIGl0IHdhcyBhdXRob3JlZDsgYHRvcE9mYCBpcyB0aGUgYm9keSdzIG93biBwcm9maWxlLCB3aGljaCBpcyB3aGVyZSB0aGVcbiAqICByb29mIGxpbmUgZXZlcnkgc2hvdWxkZXIgaGFuZ3Mgb2ZmIGlzIHJlYWQuIEFsbCBvcHRpb25hbDogdW5zZXQsIHRoZSBzd2VlcCBpcyB0aGUgb2xkIHNsYWIuICovXG50eXBlIFNoYXBlT3B0cyA9IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdLFxuICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM/OiBudW1iZXIsIHN0ZXBzPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgIHNob3VsZGVyPzogeyByOiBudW1iZXIsIHpNaW4/OiBudW1iZXIsIHpNYXg/OiBudW1iZXIsIGZhZGU/OiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICBub3NlPzogeyByOiBudW1iZXIgfSwgdGFpbD86IHsgcjogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgc21vb3RoPzogbnVtYmVyLCBlZGdlQmlhcz86IG51bWJlciwgYmFzZVdpZHRoPzogbnVtYmVyLCB0b3BPZj86IG51bWJlcltdW10gfTtcblxuLyoqIEhpZ2hlc3QgeSBvZiBhIGNsb3NlZCBbeiwgeV0gcHJvZmlsZSBvbiB0aGUgdmVydGljYWwgbGluZSBhdCB6IC0tIHRoZSByb29mIGxpbmUgYXQgdGhhdFxuICogIHN0YXRpb24uIFZlcnRpY2FsIGVkZ2VzIGNvdW50IGJ5IHRoZWlyIG93biB0b3A7IGEgeiBvdXRzaWRlIHRoZSBwcm9maWxlIHJldHVybnMgLUluZmluaXR5LiAqL1xuZnVuY3Rpb24gcHJvZmlsZVRvcChwcm9maWxlOiBudW1iZXJbXVtdLCB6OiBudW1iZXIsIHRvbCA9IDApOiBudW1iZXIge1xuICBsZXQgdG9wID0gLUluZmluaXR5O1xuICBjb25zdCBuID0gcHJvZmlsZS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHByb2ZpbGVbaV0sIGIgPSBwcm9maWxlWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBsbyA9IE1hdGgubWluKGFbMF0sIGJbMF0pLCBoaSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgIGlmICh6IDwgbG8gLSB0b2wgLSAxZS02IHx8IHogPiBoaSArIHRvbCArIDFlLTYpIGNvbnRpbnVlO1xuICAgIC8vIGB0b2xgIGxldHMgYSBiYW5kIHN0YW5kaW5nIGEgZmV3IG1tIHByb3VkIG9mIGEgdmVydGljYWwgZmFjZSAoYSByZWFyIHBhbmUsIGEgQy1waWxsYXIgc3RyaXBcbiAgICAvLyBiZWhpbmQgdGhlIGNhYiBiYWNrKSByZWFkIHRoZSByb29mIGxpbmUgb2YgdGhlIGZhY2UgaXQgc3RhbmRzIG9uLCBub3QgdGhlIGJlZCBmbG9vciBiZWhpbmQgaXRcbiAgICBjb25zdCB6YyA9IE1hdGgubWF4KGxvLCBNYXRoLm1pbihoaSwgeikpO1xuICAgIGNvbnN0IHkgPSBoaSAtIGxvIDwgMWUtNiA/IE1hdGgubWF4KGFbMV0sIGJbMV0pIDogYVsxXSArIChiWzFdIC0gYVsxXSkgKiAoemMgLSBhWzBdKSAvIChiWzBdIC0gYVswXSk7XG4gICAgaWYgKHkgPiB0b3ApIHRvcCA9IHk7XG4gIH1cbiAgcmV0dXJuIHRvcDtcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgb3B0czogU2hhcGVPcHRzLCB3aWR0aCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB0dW1ibGVBdCA9ICh5OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW9wdHMudHVtYmxlKSByZXR1cm4gMTtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICByZXR1cm4gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICB9O1xuICBjb25zdCBwbGFuQXQgPSAoejogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnBsYW4gfHwgb3B0cy5wbGFuLmxlbmd0aCA8IDIpIHJldHVybiAxO1xuICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgIGlmICh6IDw9IHN0WzBdWzBdKSByZXR1cm4gc3RbMF1bMV07XG4gICAgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHJldHVybiBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgcmV0dXJuIHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9O1xuICAvLyBST1VORElOR1MuIEEgc3dlZXAgaXMgYSBzbGFiOiBpdHMgcm9vZiBtZWV0cyBpdHMgc2lkZSBhdCBhIGhhcmQgZWRnZSwgYW5kIGl0cyBub3NlIG1lZXRzIGJvdGhcbiAgLy8gc2lkZXMgYXQgdHdvIG1vcmUuIFJlYWwgc2hlZXQgbWV0YWwgY3Jvd25zIG92ZXIgdGhlIGZlbmRlciBhbmQgd3JhcHMgcm91bmQgdGhlIG5vc2UsIHNvIGFueVxuICAvLyB2ZXJ0ZXggaW5zaWRlIGEgY29ybmVyIHF1YWRyYW50ICh3aXRoaW4gciBvZiB0aGUgdG9wIEFORCB3aXRoaW4gciBvZiB0aGUgc2lkZSkgaXMgcHJvamVjdGVkXG4gIC8vIG9udG8gdGhlIGNpcmNsZSBvZiByYWRpdXMgciBhYm91dCB0aGF0IGNvcm5lcidzIGNlbnRyZSAtLSBhIGZpbGxldCwgaW4geC95IGZvciB0aGUgc2hvdWxkZXJcbiAgLy8gYW5kIGluIHgveiBhdCB0aGUgdHdvIGVuZHMuIFRoZSBjZW50cmVzIGFyZSBwbGFjZWQgb2ZmIHRoZSBCT0RZJ3Mgd2lkdGggKGBiYXNlV2lkdGhgKSBhbmRcbiAgLy8gcm9vZiBsaW5lIChgdG9wT2ZgKSwgc28gYSBnbGFzcyBiYW5kIHN3ZXB0IGBlYCB3aWRlciBpcyBmaWxsZXRlZCBhdCByICsgZSBhYm91dCB0aGUgc2FtZVxuICAvLyBjZW50cmUgYW5kIHN0YXlzIGBlYCBwcm91ZCBhbGwgdGhlIHdheSByb3VuZCB0aGUgY29ybmVyLlxuICBjb25zdCBleHRyYSA9IG9wdHMuYmFzZVdpZHRoID8gKHdpZHRoIC0gb3B0cy5iYXNlV2lkdGgpIC8gMiA6IDA7XG4gIGNvbnN0IGJhc2VIYWxmID0gKG9wdHMuYmFzZVdpZHRoID8/IHdpZHRoKSAvIDI7XG4gIGNvbnN0IHRvcCA9IG9wdHMudG9wT2YgPz8gbnVsbDtcbiAgbGV0IHpNYXggPSAtSW5maW5pdHksIHpNaW4gPSBJbmZpbml0eTtcbiAgaWYgKHRvcCkgZm9yIChjb25zdCBxIG9mIHRvcCkgeyBpZiAocVswXSA+IHpNYXgpIHpNYXggPSBxWzBdOyBpZiAocVswXSA8IHpNaW4pIHpNaW4gPSBxWzBdOyB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSksIHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgY29uc3QgdGYgPSB0dW1ibGVBdCh5KSwgcGYgPSBwbGFuQXQoeik7XG4gICAgeCAqPSB0ZiAqIHBmO1xuICAgIGlmIChvcHRzLnNob3VsZGVyICYmIHRvcCkge1xuICAgICAgY29uc3Qgc2ggPSBvcHRzLnNob3VsZGVyO1xuICAgICAgLy8gVGhlIGZpbGxldCBsaXZlcyBvbiBhIHotcmFuZ2U6IGhhcmQgYXQgek1pbiAodGhlIGNhYiBiYWNrKSwgZmFkZWQgb3ZlciBgZmFkZWAgbWV0cmVzIGF0XG4gICAgICAvLyB6TWF4ICh0aGUgdG9wIG9mIHRoZSB3aW5kc2NyZWVuIHJha2UgLS0gYSByYWtlIGlzIGEgcGxhbmUsIGl0cyBlZGdlIGEgY3JlYXNlLCBhbmQgYSBmYWRlXG4gICAgICAvLyBrZXllZCBvbiB0aGUgcm9vZiBsaW5lJ3MgU0xPUEUgdmFyaWVkIGluc2lkZSB0aGUgcmVhciBjb3JuZXIgYW5kIGZvbGRlZCBpdCkuXG4gICAgICBjb25zdCB6TG8gPSBzaC56TWluID8/IC1JbmZpbml0eSwgekhpID0gc2guek1heCA/PyBJbmZpbml0eSwgZmQgPSBzaC5mYWRlID8/IDA7XG4gICAgICBjb25zdCB3ID0geiA8IHpMbyB8fCB6ID4gekhpID8gMCA6IGZkID4gMCA/IE1hdGgubWluKDEsICh6SGkgLSB6KSAvIGZkKSA6IDE7XG4gICAgICBjb25zdCB5dCA9IHByb2ZpbGVUb3AodG9wLCB6LCAwLjAzKTtcbiAgICAgIGlmICh3ID4gMCAmJiBpc0Zpbml0ZSh5dCkpIHtcbiAgICAgICAgY29uc3QgciA9IHNoLnIgKyBleHRyYSwgY3kgPSB5dCAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdChjeSkgKiBwZiwgY3ggPSBodyAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCk7XG4gICAgICAgIGlmICh5ID4gY3kgJiYgYXggPiBjeCAmJiByID4gMWUtNikge1xuICAgICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZHkgPSB5IC0gY3ksIGQgPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgMTtcbiAgICAgICAgICBsZXQgbnggPSBheCwgbnkgPSB5LCBoaXQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZHggPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBFREdFIGNvbHVtbiwgc2hhcmVkIHdpdGggdGhlIHNpZGU6IHRoZSBhcmMncyBmb290LCB0YW5nZW50IHRvIHRoZSBzaWRlIGF0IGN5XG4gICAgICAgICAgICBueCA9IGN4ICsgcjsgbnkgPSBjeTsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5ID49IHNoLnIgLSAxZS00ICYmIGR4IDw9IHIgKyAxZS02KSB7XG4gICAgICAgICAgICAvLyBhIHRvcC1yb3cgdmVydGV4OiBpdHMgY29sdW1uIHBvc2l0aW9uIHBpY2tzIGl0cyBhbmdsZSBvbiB0aGUgYXJjXG4gICAgICAgICAgICBjb25zdCB0aCA9IE1hdGguUEkgLyAyICogKDEgLSBkeCAvIHIpO1xuICAgICAgICAgICAgbnggPSBjeCArIE1hdGguY29zKHRoKSAqIHI7IG55ID0gY3kgKyBNYXRoLnNpbih0aCkgKiByOyBoaXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHggPD0gciArIDFlLTYgJiYgZHkgPD0gciArIDFlLTYgJiYgZCA+PSByIC0gMWUtNCkge1xuICAgICAgICAgICAgLy8gYSBwcm91ZCBiYW5kJ3Mgb3V0ZXIgdmVydGV4IGJlbG93IHRoZSB0b3A6IG9udG8gaXRzIG93biBjaXJjbGU7IGluc2lkZSBpdCwgbGVhdmVcbiAgICAgICAgICAgIG54ID0gY3ggKyBkeCAvIGQgKiByOyBueSA9IGN5ICsgZHkgLyBkICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhpdCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoYXggKyAobnggLSBheCkgKiB3KTsgeSA9IHkgKyAobnkgLSB5KSAqIHc7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVuZCBvZiBbb3B0cy5ub3NlID8geyByOiBvcHRzLm5vc2UuciwgemM6IHpNYXggLSBvcHRzLm5vc2UuciwgczogMSB9IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0cy50YWlsID8geyByOiBvcHRzLnRhaWwuciwgemM6IHpNaW4gKyBvcHRzLnRhaWwuciwgczogLTEgfSA6IG51bGxdKSB7XG4gICAgICBpZiAoIWVuZCB8fCAhdG9wKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHIgPSBlbmQuciArIGV4dHJhO1xuICAgICAgY29uc3QgaHcgPSBiYXNlSGFsZiAqIHR1bWJsZUF0KHkpICogcGxhbkF0KGVuZC56YyksIGN4ID0gaHcgLSBlbmQucjtcbiAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCksIGR6ID0gKHogLSBlbmQuemMpICogZW5kLnM7XG4gICAgICBpZiAoZHogPiAwICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgY29uc3QgZHggPSBheCAtIGN4LCBkID0gTWF0aC5oeXBvdChkeCwgZHopIHx8IDE7XG4gICAgICAgIC8vIE9ubHkgYSB2ZXJ0ZXggT1VUU0lERSB0aGUgY2lyY2xlIGlzIHByb2plY3RlZCBvbnRvIGl0ICh0aGUgc2hvdWxkZXIncyBydWxlKTogYSBzaWRlXG4gICAgICAgIC8vIHN0cmlwJ3MgaW5uZXIgZmFjZSBsaWVzIGluc2lkZSwgYW5kIHByb2plY3RpbmcgaXQgdG9vIGxhbmRzIGl0IG9uIHRoZSBvdXRlciBmYWNlLFxuICAgICAgICAvLyB3aGljaCB6LWZpZ2h0cyAtLSB0aGUgQ29tbXV0ZXIgdmFuJ3Mgd3JhcHBlZCBBLXBpbGxhcnMgY3J1bXBsZWQgZnJvbSBleGFjdGx5IHRoYXQuXG4gICAgICAgIGlmIChkID49IHIgLSAxZS00KSB7IHggPSBNYXRoLnNpZ24oeCB8fCAxKSAqIChjeCArIGR4IC8gZCAqIHIpOyB6ID0gZW5kLnpjICsgZW5kLnMgKiAoZHogLyBkICogcik7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcC5zZXRYWVooaSwgeCwgeSwgeik7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEFuZ2xlLWxpbWl0ZWQgU01PT1RIIE5PUk1BTFMgb24gYSBub24taW5kZXhlZCBnZW9tZXRyeS4gRXZlcnkgdmVydGV4IHNoYXJpbmcgYSBwb3NpdGlvblxuICogIGF2ZXJhZ2VzIHRoZSBmYWNlIG5vcm1hbHMgb2YgaXRzIG5laWdoYm91cnMgdGhhdCBsaWUgd2l0aGluIGBtYXhEZWdgIG9mIGl0cyBvd24gZmFjZSwgc28gYVxuICogIGZpbGxldGVkIHNob3VsZGVyLCBhIHBsYW4tcm91bmRlZCBub3NlIGFuZCB0aGUgdHVtYmxlaG9tZSBraW5rIGF0IHRoZSBiZWx0IHNoYWRlIGFzIG9uZVxuICogIGNvbnRpbnVvdXMgc3VyZmFjZSwgd2hpbGUgYSA5MC1kZWdyZWUgZWRnZSAtLSB0aGUgYXJjaCBjdXQsIHRoZSBub3NlIGFnYWluc3QgdGhlIGJ1bXBlciAtLVxuICogIHN0YXlzIGEgY3JlYXNlLiBXaXRob3V0IHRoaXMgZXZlcnkgcXVhZCB0aGUgcm91bmRpbmdzIGJlbmQgc3BsaXRzIGludG8gdHdvIGRpZmZlcmVudGx5IGxpdFxuICogIHRyaWFuZ2xlcywgd2hpY2ggaXMgdGhlIFwiYmxvY2t5XCIgYSB2aWV3ZXIgc2VlcyBiZWZvcmUgYW55IHNpbGhvdWV0dGUuICovXG5mdW5jdGlvbiBzbW9vdGhOb3JtYWxzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1heERlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGlmICghbnJtIHx8IGdlby5nZXRJbmRleCgpKSByZXR1cm4gZ2VvO1xuICBjb25zdCBuID0gcC5jb3VudCwgY29zTGltID0gTWF0aC5jb3MobWF4RGVnICogTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBrID0gYCR7TWF0aC5yb3VuZChwLmdldFgoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WShpKSAqIDIwMDApfSwke01hdGgucm91bmQocC5nZXRaKGkpICogMjAwMCl9YDtcbiAgICBjb25zdCBnID0gZ3JvdXBzLmdldChrKTsgaWYgKGcpIGcucHVzaChpKTsgZWxzZSBncm91cHMuc2V0KGssIFtpXSk7XG4gIH1cbiAgY29uc3QgZmFjZSA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBmYWNlW2kgKiAzXSA9IG5ybS5nZXRYKGkpOyBmYWNlW2kgKiAzICsgMV0gPSBucm0uZ2V0WShpKTsgZmFjZVtpICogMyArIDJdID0gbnJtLmdldFooaSk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAoY29uc3QgZyBvZiBncm91cHMudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IGkgb2YgZykge1xuICAgICAgbGV0IHN4ID0gMCwgc3kgPSAwLCBzeiA9IDA7XG4gICAgICBjb25zdCBheCA9IGZhY2VbaSAqIDNdLCBheSA9IGZhY2VbaSAqIDMgKyAxXSwgYXogPSBmYWNlW2kgKiAzICsgMl07XG4gICAgICBmb3IgKGNvbnN0IGogb2YgZykge1xuICAgICAgICBjb25zdCBieCA9IGZhY2VbaiAqIDNdLCBieSA9IGZhY2VbaiAqIDMgKyAxXSwgYnogPSBmYWNlW2ogKiAzICsgMl07XG4gICAgICAgIGlmIChheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogPj0gY29zTGltKSB7IHN4ICs9IGJ4OyBzeSArPSBieTsgc3ogKz0gYno7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHN4LCBzeSwgc3opIHx8IDE7XG4gICAgICBvdXRbaSAqIDNdID0gc3ggLyBsOyBvdXRbaSAqIDMgKyAxXSA9IHN5IC8gbDsgb3V0W2kgKiAzICsgMl0gPSBzeiAvIGw7XG4gICAgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIFBJTExBUiBTVFJJUDogdGhlIHBpbGxhciBwb2x5Z29uIHN3ZXB0IG9ubHkgYHN0cmlwV2AgZGVlcCBhdCBlYWNoIG91dGVyIGVkZ2Ugb2YgYHdpZHRoYCxcbiAqICBtaXJyb3JlZCwgYW5kIHNoYXBlZCBleGFjdGx5IGFzIHRoZSBib2R5LiBUaGUgb2xkIGZ1bGwtd2lkdGggc3dlZXAgcHV0IGEgc2xhYiBhY3Jvc3MgdGhlXG4gKiAgd2luZHNjcmVlbiB3aGVyZXZlciB0aGUgQS1waWxsYXIgcG9seWdvbiBsYXkgb24gdGhlIHJha2UgLS0gYSBwaWxsYXIgaXMgYXQgdGhlIHNpZGUgb2YgdGhlXG4gKiAgZ2xhc3MsIG5vdCB0aHJvdWdoIGl0LiBUaGUgbWlycm9yZWQgaGFsZiBoYXMgaXRzIHdpbmRpbmcgcmVzdG9yZWQuICovXG5mdW5jdGlvbiBzaWRlU3RyaXAocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgc3RyaXBXOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiBzdHJpcFcsIGJldmVsRW5hYmxlZDogZmFsc2UsIHN0ZXBzOiAyIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyAgICAgICAgICAgICAgICAgLy8gZGVwdGggbm93IHJ1bnMgYWxvbmcgLXggZnJvbSB4ID0gMFxuICAgIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7ICAgICAgICAgICAgLy8gb3V0ZXIgZmFjZSBhdCArd2lkdGgvMiwgaW5uZXIgYXQgd2lkdGgvMiAtIHN0cmlwV1xuICAgIGlmIChzeCA8IDApIHtcbiAgICAgIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmNvdW50OyBpICs9IDMpIHtcbiAgICAgICAgY29uc3QgeDEgPSBxLmdldFgoaSArIDEpLCB5MSA9IHEuZ2V0WShpICsgMSksIHoxID0gcS5nZXRaKGkgKyAxKTtcbiAgICAgICAgcS5zZXRYWVooaSArIDEsIHEuZ2V0WChpICsgMiksIHEuZ2V0WShpICsgMiksIHEuZ2V0WihpICsgMikpOyBxLnNldFhZWihpICsgMiwgeDEsIHkxLCB6MSk7XG4gICAgICB9XG4gICAgfVxuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgICBpZiAob3B0cy5zbW9vdGgpIHNtb290aE5vcm1hbHMoZywgb3B0cy5zbW9vdGgpO1xuICAgIHJldHVybiBnO1xuICB9O1xuICByZXR1cm4gbWVyZ2VHZW9zKFttaygxKSwgbWsoLTEpXSk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBTVEVFTCBXSEVFTDogdGhlIHNhbWUgY2xvc2VkIGxhdGhlIGFzIHdoZWVsR2VvLCB3aXRoIHRoZSBwcm9maWxlIG9mIGEgcHJlc3NlZC1zdGVlbCByaW0gLS0gYVxuICogZmxhdCBvdXRlciBmYWNlLCBhIGRpc2hlZCBjZW50cmUgc3RlcHBpbmcgaW4gcGFzdCBhIGRhcmsgVkVOVCBSSU5HICh0aGUgcm93IG9mIG92YWwgaG9sZXMsXG4gKiBkZWxpdmVyZWQgYXMgYSBiYW5kIG9mIHZlcnRleCBjb2xvdXIgcmF0aGVyIHRoYW4gYXMgaG9sZXMgYSB0dXJudGFibGUgZ2F0ZSB3b3VsZCByZWFkIHRocm91Z2gpLFxuICogYSBzbWFsbCBodWIgY2FwIHN0YW5kaW5nIHByb3VkIC0tIGFuZCBhIGNodW5raWVyIHR5cmUgd2hvc2UgdHJlYWQgcmluZyBhbHRlcm5hdGVzIGEgbGlnaHRlciBhbmRcbiAqIGEgZGFya2VyIHRvbmUgc2VnbWVudCBieSBzZWdtZW50LCBzbyB0aGUgbHVncyByZWFkIGF0IHByb3AgZGlzdGFuY2UgZm9yIHplcm8gZ2VvbWV0cnkuIFBlci1wb2ludFxuICogY29sb3VycyByaWRlIHRoZSBsYXRoZSdzIHNlZ21lbnQtbWFqb3IgdmVydGV4IG9yZGVyIGV4YWN0bHkgYXMgaW4gd2hlZWxHZW8uXG4gKi9cbmZ1bmN0aW9uIHN0ZWVsV2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgdmVudEhleDogbnVtYmVyLCBsdWdIZXg6IG51bWJlciwgZGlzaCA9IDAuNTApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlcsIGQgPSBodyAqIGRpc2g7XG4gIC8vIFtyYWRpdXMsIGF4aWFsXSBhbmQgYSBjb2xvdXIgY2xhc3MgcGVyIHBvaW50OiAwIHJpbSwgMSB2ZW50IHJpbmcsIDIgdHlyZSBzaWRld2FsbCwgMyB0cmVhZFxuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1kICsgMC4wMl0sIFtyUmltICogMC4yMiwgLWQgKyAwLjAyXSwgW3JSaW0gKiAwLjI0LCAtZF0sICAgICAgICAgICAgICAgICAgICAgICAvLyBodWIgY2FwXG4gICAgW3JSaW0gKiAwLjQwLCAtZF0sIFtyUmltICogMC40MiwgLWQgLSAwLjAwNl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2ggZmxvb3JcbiAgICBbclJpbSAqIDAuNjIsIC1kIC0gMC4wMDZdLCBbclJpbSAqIDAuNjQsIC1odyAqIDAuODZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVudCByaW5nIChkYXJrKVxuICAgIFtyUmltICogMC45MCwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjkwXSwgW3JSaW0sIC1odyAqIDAuOThdLCAgICAgICAgICAgICAgICAgIC8vIHJpbSBmYWNlIGFuZCBsaXBcbiAgICBbclR5cmUgKiAwLjg4LCAtaHddLCBbclR5cmUgKiAwLjk3LCAtaHcgKiAwLjg2XSwgW3JUeXJlLCAtaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAvLyBzaWRld2FsbFxuICAgIFtyVHlyZSwgaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhZFxuICAgIFtyVHlyZSAqIDAuOTcsIGh3ICogMC44Nl0sIFtyVHlyZSAqIDAuODgsIGh3XSwgW3JSaW0sIGh3ICogMC45OF0sICAgICAgICAgICAgICAgICAgIC8vIGZhciBzaWRld2FsbFxuICAgIFtyUmltLCBodyAqIDAuODhdLCBbclJpbSAqIDAuMzAsIGh3ICogMC44MF0sIFswLCBodyAqIDAuODBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFjayBvZiB0aGUgcmltXG4gIF07XG4gIGNvbnN0IGNscyA9IFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAyLCAyLCAzLCAzLCAyLCAyLCAwLCAwLCAwLCAwXTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgQyA9IFtuZXcgVEhSRUUuQ29sb3IocmltSGV4KSwgbmV3IFRIUkVFLkNvbG9yKHZlbnRIZXgpLCBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIG5ldyBUSFJFRS5Db2xvcihsdWdIZXgpXTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgaiA9IGkgJSBwdHMubGVuZ3RoLCBzID0gTWF0aC5mbG9vcihpIC8gcHRzLmxlbmd0aCk7XG4gICAgbGV0IGMgPSBDW2Nsc1tqXV07XG4gICAgaWYgKGNsc1tqXSA9PT0gMykgYyA9IChzICUgMiA9PT0gMCkgPyBjdCA6IENbM107XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBsZW4gKyByICogMS4yLCBzZWcsIDEsIGZhbHNlKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcpOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMsXG4gICAgICAgICAgICAgICAgIG9wdHM6IHsgZmxvb3I/OiBudW1iZXIsIHN0cmVha3M/OiBudW1iZXIsIGNsb3VkPzogbnVtYmVyLCBzcGVja2xlPzogbnVtYmVyLCB0b25lPzogbnVtYmVyW10sIHpvbmVzPzogbnVtYmVyW11bXSB9ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGBmbG9vcmAgaXMgdGhlIGZyYWN0aW9uIG9mIHRoZSB0aWxlIGhlaWdodCAoaS5lLiBvZiB0aGUgd29ybGQgaGVpZ2h0IHRoZSB0aWxlIHNwYW5zKSBiZWxvd1xuICAgIC8vIHdoaWNoIHRoZSB3YXNoIGlzIEZVTEw6IGEgYm9keSB3aG9zZSBzaWxsIGlzIDAuNDYgbSB1cCBhIDIgbSB0aWxlIHdhbnRzIHRoZSBtdWQgc29saWQgdG9cbiAgICAvLyAwLjIzIGFuZCBmYWRpbmcgZnJvbSB0aGVyZSwgbm90IGZhZGluZyBmcm9tIHRoZSBncm91bmQgaXQgbmV2ZXIgcmVhY2hlcy5cbiAgICBjb25zdCBmbCA9IE1hdGgubWluKGNvdmVyYWdlLCBvcHRzLmZsb29yID8/IDApO1xuICAgIC8vIGB0b25lYCBpcyB0aGUgTVVEIGFzIGEgcmF0aW8gb2YgdGhlIGVudmVsb3BlLCBmb3IgYSBwYWludCB3aG9zZSBlbnZlbG9wZSBpcyB0aGUgcGVyLWNoYW5uZWxcbiAgICAvLyBtYXggb2YgY2xlYW4gcGFpbnQgYW5kIG11ZCAoYSBncmVlbiB3aG9zZSBtdWQgaXMgdGFuIGlzIGJyaWdodGVyIGluIHJlZCwgZGFya2VyIGluIGdyZWVuKTpcbiAgICAvLyB1bnNldCwgdGhlIG11ZCBpcyB3aGl0ZSAtLSB0aGUgZW52ZWxvcGUgaXRzZWxmLlxuICAgIGNvbnN0IFQgPSBvcHRzLnRvbmUgPyBvcHRzLnRvbmUubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHYpKSkpIDogbnVsbDtcbiAgICBjb25zdCBtdWQgPSAoYTogbnVtYmVyKSA9PiBUID8gYHJnYmEoJHtUWzBdfSwke1RbMV19LCR7VFsyXX0sJHthfSlgIDogYHJnYmEoMjU1LDI1MiwyNDQsJHthfSlgO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcyAqICgxIC0gZmwpLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoMC44OCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIFQgPyBtdWQoMC40NSkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIFQgPyBtdWQoMCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYHpvbmVzYCBhcmUgW3UwLCB1MSwgd2VpZ2h0XSBzcGFucyBvZiB0aGUgdGlsZSdzIHdpZHRoIHRoZSBzcHJheSBjb25jZW50cmF0ZXMgaW4gLS0gd2l0aFxuICAgIC8vIHRoZSB0aWxlIGZpdHRlZCB0byB0aGUgdmVoaWNsZSdzIGxlbmd0aCAoaGVpZ2h0VVYgdVNjYWxlID0gTCksIHRoYXQgaXMgXCJiZWhpbmQgdGhlIGZyb250XG4gICAgLy8gd2hlZWxcIiwgXCJhaGVhZCBvZiB0aGUgcmVhciBhcmNoXCIsIFwiYWxvbmcgdGhlIGJlZCBzaWRlXCI6IHdoZXJlIGEgd2hlZWwgYWN0dWFsbHkgdGhyb3dzIG11ZC5cbiAgICBjb25zdCB6b25lcyA9IG9wdHMuem9uZXMgPz8gW1swLCAxLCAxXV07XG4gICAgY29uc3QgenN1bSA9IHpvbmVzLnJlZHVjZSgoYWNjLCB6bikgPT4gYWNjICsgem5bMl0sIDApO1xuICAgIGNvbnN0IHBpY2tVID0gKCkgPT4geyBsZXQgdCA9IHJuZCgpICogenN1bTsgZm9yIChjb25zdCB6biBvZiB6b25lcykgeyBpZiAodCA8IHpuWzJdKSByZXR1cm4gKHpuWzBdICsgcm5kKCkgKiAoem5bMV0gLSB6blswXSkpICogczsgdCAtPSB6blsyXTsgfSByZXR1cm4gcm5kKCkgKiBzOyB9O1xuICAgIC8vIERVU1QgRklMTTogc29mdCBjbG91ZHkgcGF0Y2hlcyBvZiB0aGUgZW52ZWxvcGUgb3ZlciB0aGUgY2xlYW4gcGFpbnQgZXZlcnl3aGVyZSwgc28gdGhlXG4gICAgLy8gdXBwZXIgYm9keSBpcyBub3QgYSBmbGF0IGZpbGwgLS0gdGhlIHBsYXRlJ3MgZ3JlZW4gaXMgYSBkdWxsLCBkdXN0eSBncmVlbi5cbiAgICBpZiAob3B0cy5jbG91ZCkgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IG9wdHMuY2xvdWQgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgbXVkKGEpKTsgZzIuYWRkQ29sb3JTdG9wKDEsIG11ZCgwKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTUFJBWTogdGhlIG11ZCBhIHdoZWVsIHRocm93cyBpcyBhIGZpZWxkIG9mIHNtYWxsIHNwbGF0cyBzdHJlYWtlZCBhbG9uZyB0aGUgZGlyZWN0aW9uIG9mXG4gICAgLy8gdHJhdmVsICh1KSwgZGVuc2VzdCBqdXN0IGFib3ZlIHRoZSB3YXNoIGFuZCB0aGlubmluZyB1cHdhcmQgaW4gY2x1c3RlcnMgLS0gbm90IGEgZ3JhZGllbnQuXG4gICAgaWYgKG9wdHMuc3RyZWFrcykgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnN0cmVha3M7IGkrKykge1xuICAgICAgY29uc3QgY3gwID0gcGlja1UoKSwgYmFuZCA9IGNvdmVyYWdlO1xuICAgICAgY29uc3QgY3kwID0gcyAtIHMgKiAoZmwgKyBNYXRoLnBvdyhybmQoKSwgMS42KSAqIChiYW5kIC0gZmwpKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gNiArIE1hdGguZmxvb3Iocm5kKCkgKiAxOCksIHNwcmVhZCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50OyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQgKiAzLCB5ID0gY3kwICsgKHJuZCgpIC0gMC41KSAqIHNwcmVhZDtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgaCA9IDAuOCArIHJuZCgpICogcyAqIDAuMDAzLCBhID0gMC4zNSArIHJuZCgpICogMC41NTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCB3LCBoLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdHMuc3BlY2tsZSkgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnNwZWNrbGU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHBpY2tVKCksIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuMykgKiBzICogY292ZXJhZ2UsIHIgPSAwLjYgKyBybmQoKSAqIDEuNCwgYSA9IDAuMyArIHJuZCgpICogMC42O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgVCA/IG11ZChhKSA6IGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogR0xBU1MgdGlsZSBmb3IgYSB2ZWhpY2xlJ3MgZ2xhemluZyBiYW5kLCBib3VuZCBhcyBgbWFwYCBvbiB0aGUgZ2xhc3MgbWF0ZXJpYWwgQUZURVJcbiAqICBjb25zdHJ1Y3Rpb24gKHRoZSBtYXRlcmlhbCBzdGF5cyB0ZXh0dXJlbGVzcy1kZWNsYXJlZCkuIFRoZSBwYW5lJ3MgVVZzIGFyZSBoZWlnaHQta2V5ZWRcbiAqICAoYGhlaWdodFVWYCksIHNvIHYgcnVucyBzaWxsLXRvLXJvb2Y6IHRoZSB0aWxlIGlzIGEgdmVydGljYWwgZ3JhZGllbnQgZnJvbSB0aGUgbWF0ZXJpYWwnc1xuICogIG93biB0b25lIGF0IHRoZSB0b3AgKHdoaXRlLCBpLmUuIHRoZSBza3ktbGl0IHZhbHVlIHRoZSBtYXRlcmlhbCBpcyByZS1iYXNlZCB0bykgZG93biB0b1xuICogIGBsb3dgIGF0IHRoZSBib3R0b20gLS0gYSByZWFsIHNjcmVlbiByZWZsZWN0cyBza3kgYXQgdGhlIHRvcCBhbmQgdGhlIGRhcmsgZGFzaCBhbmQgcm9hZCBiZWxvd1xuICogIC0tIHBsdXMgYSBmZXcgc29mdCBkaWFnb25hbCByZWZsZWN0aW9uIHN0cmVha3MgYW5kIGEgZmFpbnQgdGludCBiYW5kLiBgbG93YCBpcyBhIGxpbmVhci1zcGFjZVxuICogIHJhdGlvIChzZWUgZW1pdC5tanMgYHJhdGlvYCkgb2YgdGhlIG1lYXN1cmVkIHNpZGUtZ2xhc3MgdG9uZSBvdmVyIHRoZSBza3ktbGl0IHRvbmUuICovXG5mdW5jdGlvbiBnbGFzc1RpbGUoc2l6ZTogbnVtYmVyLCBsb3c6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIHN0cmVha3MgPSA1KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGMgPSBsb3cubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCAwKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2IoJHtNYXRoLnJvdW5kKChjWzBdICsgMjU1KSAvIDIpfSwke01hdGgucm91bmQoKGNbMV0gKyAyNTUpIC8gMil9LCR7TWF0aC5yb3VuZCgoY1syXSArIDI1NSkgLyAyKX0pYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJyNmZmZmZmYnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHJlZmxlY3Rpb24gc3RyZWFrczogbG9uZyBzb2Z0IGRpYWdvbmFsIGJhbmRzLCBsaWdodGVyLCB0aWxlZCBpbiB1IHNvIHRoZSBzZWFtIG5ldmVyIHNob3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTApLCBhID0gMC4xMCArIHJuZCgpICogMC4xNiwgdGlsdCA9IHMgKiAoMC4yNSArIHJuZCgpICogMC4zNSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCArIGR4LCAwLCB4ICsgZHggKyB3LCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7IGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKDI1NSwyNTUsMjU1LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyB0aWx0LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB0aWx0LCAwKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhIGRhcmtlciBmaWxtIGluIHRoZSBsb3dlc3QgdGVudGg6IHRoZSBkYXNoIC8gY293bCBzaGFkb3cgYmVoaW5kIHRoZSBwYW5lXG4gICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqIDAuODgpO1xuICAgIGczLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjU1KWApOyBnMy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzM7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBvcHRzOiB7IHVTY2FsZT86IG51bWJlciwgdG9wQ2xlYW4/OiBib29sZWFuIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCB1cyA9IG9wdHMudVNjYWxlID8/IHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIGxldCB2ID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gICAgLy8gQSB0aWxlIGtleWVkIG9uIGhlaWdodCBjYW5ub3QgdGVsbCBhIGJvbm5ldCBmcm9tIGEgZG9vciBhdCB0aGUgc2FtZSBoZWlnaHQsIGFuZCBhIGJvbm5ldFxuICAgIC8vIGlzIGNsZWFuIHdoZXJlIGEgZG9vciBpcyBzcHJheWVkOiBgdG9wQ2xlYW5gIHNlbmRzIGV2ZXJ5IHVwd2FyZCBmYWNlIGludG8gdGhlIHRpbGUncyB0b3BcbiAgICAvLyBiYW5kICh2IDAuNzUuLjAuOTUpLCBhYm92ZSBhbnkgd2FzaCwgd2hlcmUgb25seSB0aGUgZHVzdCBmaWxtIGFwcGxpZXMuXG4gICAgaWYgKG9wdHMudG9wQ2xlYW4gJiYgYXkgPj0gMC44KSB2ID0gMC43NSArIDAuMiAqICh2IC0gTWF0aC5mbG9vcih2KSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gdjtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG95b3RhSGlsdXhNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1RveW90YSBIaWx1eCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXIgYm9keSAoc2hhcmVkIHRlbXBsYXRlKSAqL1xuICBjb25zdCBXID0gRy53aWR0aCBhcyBudW1iZXI7XG4gIGNvbnN0IHdoID0gRy53aGVlbHMgYXMgYW55O1xuXG4gIC8vIDEuIEJPRFk6IHRoZSBzaWRlIG91dGxpbmUgY2xvc2VkIGFsb25nIHRoZSBzaWxsIHdpdGggYSB3aGVlbC1hcmNoIG5vdGNoIGF0IGVhY2ggYXhsZSwgc3dlcHRcbiAgLy8gICAgYWNyb3NzIHRoZSB3aWR0aCwgdGhlbiBuYXJyb3dlZCBhYm92ZSB0aGUgYmVsdCAodHVtYmxlaG9tZSkgYW5kIHJvdW5kZWQgaW4gcGxhbiBhdCB0aGUgZW5kcy5cbiAgY29uc3Qgb3V0bGluZTogbnVtYmVyW11bXSA9IChHLm91dGxpbmUgYXMgbnVtYmVyW11bXSkuc2xpY2UoKTtcbiAgY29uc3Qgc2lsbCA9IEcuc2lsbCBhcyBudW1iZXI7XG4gIGNvbnN0IHJBID0gd2guYXJjaCBhcyBudW1iZXI7XG4gIGNvbnN0IGFyY2hQdHMgPSAoemM6IG51bWJlcikgPT4geyBjb25zdCBwOiBudW1iZXJbXVtdID0gW107IGZvciAobGV0IGkgPSAwOyBpIDw9IDg7IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gODsgcC5wdXNoKFt6YyArIE1hdGguY29zKGEpICogckEsIHdoLnIgKyBNYXRoLnNpbihhKSAqIHJBXSk7IH0gcmV0dXJuIHA7IH07XG4gIGNvbnN0IHpSZWFyU2lsbCA9IG91dGxpbmVbb3V0bGluZS5sZW5ndGggLSAxXVswXSwgekZyb250U2lsbCA9IG91dGxpbmVbMF1bMF07XG4gIGNvbnN0IHNpbGxSdW46IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guelIsIHdoLnpGXSkge1xuICAgIGlmICh6YyAtIHJBID4gelJlYXJTaWxsICYmIHpjICsgckEgPCB6RnJvbnRTaWxsKSBzaWxsUnVuLnB1c2goLi4uYXJjaFB0cyh6YykpO1xuICB9XG4gIGNvbnN0IHByb2ZpbGUgPSBvdXRsaW5lLmNvbmNhdChzaWxsUnVuLmxlbmd0aCA/IHNpbGxSdW4gOiBbXSk7XG4gIC8vIGBzaGFwZWAgbWF5IGFkZCBzdGVwcyBhbmQgc2hvdWxkZXIgLyBub3NlIC8gdGFpbCByb3VuZGluZ3M7IHRoZSBib2R5J3Mgb3duIHByb2ZpbGUgYW5kIHdpZHRoXG4gIC8vIGFyZSB0aGUgcmVmZXJlbmNlIGV2ZXJ5IHByb3VkIGJhbmQgaXMgcm91bmRlZCBhZ2FpbnN0LCBzbyB0aGV5IGFyZSBzZXQgaGVyZSBhbmQgbm90IHBlciBjZmcuXG4gIGNvbnN0IHNoYXBlT3B0czogYW55ID0geyB0dW1ibGU6IEcudHVtYmxlLCBwbGFuOiBHLnBsYW4sIC4uLigoRy5zaGFwZSBhcyBhbnkpID8/IHt9KSwgYmFzZVdpZHRoOiBXLCB0b3BPZjogcHJvZmlsZSB9O1xuICBjb25zdCBib2R5R2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFt0aW50R2VvKHNpZGVFeHRydWRlKHByb2ZpbGUsIFcsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLmJvZHlCb3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgYm9keUdlb3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgZm9yIChjb25zdCBleCBvZiAoRy5ib2R5RXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgYm9keUdlb3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGV4LnBvbHksIGV4LndpZHRoID8/IFcsIGV4LnNoYXBlID8/IHt9KSwgZXguaGV4ID8/IEcucGFpbnRIZXgpKTtcbiAgfVxuICBjb25zdCB1dk9wdHMgPSB7IHVTY2FsZTogRy5tdWRVU2NhbGUgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLCB0b3BDbGVhbjogISFHLm11ZFRvcENsZWFuIH07XG4gIGNvbnN0IGJvZHlHZW8gPSBoZWlnaHRVVihtZXJnZUdlb3MoYm9keUdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgY29uc3QgYm9keSA9IGFkZCgnYm9keScsICdCb2R5IHNoZWxsJywgYm9keUdlbywgJ3BhaW50Jyk7XG4gIGlmIChHLmNvbGxpZGVyKSBjb2xsaWRlcnNbJ2JvZHknXSA9IEcuY29sbGlkZXI7XG5cbiAgLy8gMi4gR0xBU1M6IHRoZSBnbGFzc2hvdXNlIHBvbHlnb24gb2Zmc2V0IG91dHdhcmQgc28gZXZlcnkgcGFuZSBzdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkncyBvd25cbiAgLy8gICAgcmFrZWQgZmFjZXMsIHN3ZXB0IGF0IHRoZSBib2R5IHdpZHRoIHBsdXMgdGhlIHNhbWUgbWFyZ2luLCBuYXJyb3dlZCBieSB0aGUgc2FtZSB0dW1ibGVob21lLlxuICBjb25zdCBnbGFzc0dlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgZ2wgPSBHLmdsYXNzIGFzIGFueTtcbiAgaWYgKGdsPy5wb2x5KSBnbGFzc0dlb3MucHVzaChzaWRlRXh0cnVkZShvZmZzZXRQb2x5KGdsLnBvbHksIGdsLnByb3VkID8/IDAuMDA2KSwgVyArIDIgKiAoZ2wucHJvdWQgPz8gMC4wMDYpLCBzaGFwZU9wdHMpKTtcbiAgZm9yIChjb25zdCBiIG9mIChnbD8uYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdsYXNzR2Vvcy5wdXNoKHJib3goYikpO1xuICBpZiAoZ2xhc3NHZW9zLmxlbmd0aCkge1xuICAgIGxldCBnZyA9IHRpbnRHZW8obWVyZ2VHZW9zKGdsYXNzR2VvcyksIGdsLmhleCA/PyAweGZmZmZmZik7XG4gICAgLy8gcGFuZSBVVnM6IHYgcnVucyAwLi4xIGZyb20gdGhlIGdsYXNzIHNpbGwgYHV2WVswXWAgdG8gdGhlIHBhbmUgdG9wIGB1dllbMV1gLCB1IGFsb25nIHRoZVxuICAgIC8vIHBhbmUgaW4gbWV0cmVzIG92ZXIgYHVTY2FsZWAsIHNvIGEgZ2xhc3MgdGlsZSdzIHNreSBncmFkaWVudCBzcGFucyBldmVyeSBwYW5lIHRvcCB0b1xuICAgIC8vIGJvdHRvbTsgaGFybWxlc3Mgd2l0aG91dCBhIHRpbGVcbiAgICBpZiAoZ2wudXZZKSB7XG4gICAgICBjb25zdCBxID0gZ2cuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucSA9IGdnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHV2ID0gbmV3IEZsb2F0MzJBcnJheShxLmNvdW50ICogMik7XG4gICAgICBjb25zdCB1cyA9IGdsLnVTY2FsZSA/PyAxLjYsIHkwID0gZ2wudXZZWzBdLCB5MSA9IGdsLnV2WVsxXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHUgPSBNYXRoLmFicyhucS5nZXRYKGkpKSA+PSBNYXRoLmFicyhucS5nZXRaKGkpKSA/IHEuZ2V0WihpKSA6IHEuZ2V0WChpKTtcbiAgICAgICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHEuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgICAgfVxuICAgICAgZ2cuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICB9XG4gICAgYWRkKCdnbGF6aW5nJywgJ0dsYXppbmcnLCBnZywgJ2dsYXNzJyk7XG4gIH1cblxuICAvLyAzLiBQSUxMQVJTIGFuZCByb29mIGRldGFpbHMgcmlkZSB0aGUgYm9keSdzIHBhaW50IGJ1dCBhcmUgYSBzZXBhcmF0ZSBtZXJnZSBzbyB0aGV5IGNhbiBzdGFuZFxuICAvLyAgICBwcm91ZCBvZiB0aGUgZ2xhc3M7IHRoZXkgam9pbiB0aGUgYm9keSBjb21wb25lbnQgKG9uZSBkcmF3IGNhbGwpIGJ5IGJlaW5nIG1lcmdlZCBpbi5cbiAgY29uc3QgcGlsbGFyR2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHBsIG9mIChHLnBpbGxhcnMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgLy8gYSBwbGFpbiBwb2x5Z29uIHN3ZWVwcyB0aGUgZnVsbCB3aWR0aCAodGhlIG9sZCBiZWhhdmlvdXIpOyB7IHBvbHksIHN0cmlwIH0gc3dlZXBzIG9ubHkgYVxuICAgIC8vIHN0cmlwIHRoYXQgZGVlcCBhdCBlYWNoIHNpZGUsIHdoaWNoIGlzIHdoYXQgYSBwaWxsYXIgYmVzaWRlIGEgcGFuZSBpc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBsKSkgcGlsbGFyR2Vvcy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUocGwsIFcgKyAyICogMC4wMTMsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgICBlbHNlIHBpbGxhckdlb3MucHVzaCh0aW50R2VvKHNpZGVTdHJpcChwbC5wb2x5LCBXICsgMiAqIChwbC5wcm91ZCA/PyAwLjAxMyksIHBsLnN0cmlwID8/IDAuMTAsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgfVxuICBpZiAocGlsbGFyR2Vvcy5sZW5ndGgpIHtcbiAgICBjb25zdCBwZyA9IGhlaWdodFVWKG1lcmdlR2VvcyhwaWxsYXJHZW9zKSwgRy5tdWRTY2FsZSA/PyAxLjIsIHV2T3B0cyk7XG4gICAgY29uc3QgbWVyZ2VkID0gaGVpZ2h0VVYobWVyZ2VHZW9zKFtib2R5Lmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwZ10pLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgICBib2R5Lmdlb21ldHJ5ID0gbWVyZ2VkO1xuICB9XG5cbiAgLy8gNC4gVFJJTTogYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcywgc3RlcHMsIGFyY2ggZmxhcmVzIGFuZCB0aGUgaW5uZXIgd2luZ3MgdGhhdFxuICAvLyAgICBzdG9wIHRoZSB0aHJvdWdoLWFyY2ggcmVhZGluZyBhcyBkYXlsaWdodCAtLSBldmVyeSBvbmUgYSB0aW50ZWQgYm94IG9uIE9ORSB3aGl0ZSBtYXRlcmlhbC5cbiAgY29uc3QgdHJpbUxpc3Q6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLnRyaW0gPz8gW10pIGFzIG51bWJlcltdW10pIHRyaW1MaXN0LnB1c2goYik7XG4gIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChHLnRyaW1NaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIHRyaW1MaXN0LnB1c2goYik7XG4gIGNvbnN0IHRyaW1HZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW3RpbnRlZEJveGVzKHRyaW1MaXN0KV07XG4gIGZvciAoY29uc3QgemMgb2YgW3doLnpGLCB3aC56Ul0pIHtcbiAgICBpZiAod2guZmxhcmUpIHRyaW1HZW9zLnB1c2goZmxhcmUoemMsIHdoLnIsIHJBICsgMC4wMDUsIHJBICsgd2guZmxhcmUsIFcgLyAyIC0gMC4wMTIsIFcgLyAyICsgKHdoLmZsYXJlT3V0ID8/IDAuMDMpLCB3aC5mbGFyZUhleCA/PyAweDJhMmEyYSkpO1xuICAgIC8vIGlubmVyIHdpbmc6IGEgZGFyayBib3ggYmV0d2VlbiB0aGUgd2hlZWxzJyBpbm5lciBmYWNlcyBmaWxsaW5nIHRoZSBhcmNoIHZvaWRcbiAgICBjb25zdCBpbm5lckhhbGYgPSB3aC50cmFjayAtIHdoLmhhbGZXIC0gMC4wMDU7XG4gICAgdHJpbUdlb3MucHVzaCh0aW50R2VvKGJveEF0KDAsIChzaWxsICsgd2guciArIHJBIC0gMC4wMikgLyAyICsgMC4wLCB6YywgaW5uZXJIYWxmICogMiwgKHdoLnIgKyByQSAtIDAuMDIpIC0gc2lsbCArIDAuMTAsIChyQSAtIDAuMDMpICogMiksIHdoLndlbGxIZXggPz8gMHgyYjI5MjYpKTtcbiAgfVxuICBmb3IgKGNvbnN0IHQgb2YgKEcudHViZXMgPz8gW10pIGFzIGFueVtdKSB0cmltR2Vvcy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgZm9yIChjb25zdCBjIG9mIChHLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGMucnQsIGMucmIsIGMuaCwgYy5zZWcgPz8gMTIpO1xuICAgIGlmIChjLnJ4KSBnLnJvdGF0ZVgoYy5yeCk7IGlmIChjLnJ6KSBnLnJvdGF0ZVooYy5yeik7XG4gICAgZy50cmFuc2xhdGUoYy5hdFswXSwgYy5hdFsxXSwgYy5hdFsyXSk7XG4gICAgdHJpbUdlb3MucHVzaCh0aW50R2VvKGcsIGMuaGV4KSk7XG4gIH1cbiAgYWRkKCd0cmltJywgJ1RyaW0sIGxhbXBzLCBidW1wZXJzIGFuZCB3aGVlbCB3ZWxscycsIG1lcmdlR2Vvcyh0cmltR2VvcyksICd0cmltJyk7XG5cbiAgLy8gNS4gV0hFRUxTOiBvbmUgbGF0aGUsIGZvdXIgKG9yIGhvd2V2ZXIgbWFueSkgaW5zdGFuY2VzLCBlYWNoIGEgbmFtZWQgcGl2b3Qgb24gdGhlIGF4bGUuXG4gIGNvbnN0IHdoZWVsRyA9IHdoLnN0eWxlID09PSAnc3RlZWwnXG4gICAgPyBzdGVlbFdoZWVsR2VvKHdoLnIsIHdoLnJpbSwgd2guaGFsZlcsIHdoLnNlZyA/PyAyNCwgd2gudHlyZUhleCwgd2gucmltSGV4LCB3aC52ZW50SGV4ID8/IDB4NGE0ODQyLCB3aC5sdWdIZXggPz8gd2gudHlyZUhleCwgd2guZGlzaCA/PyAwLjUwKVxuICAgIDogd2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDIwLCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLmRpc2ggPz8gMC41NSk7XG4gIGNvbnN0IHdoZWVsTWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gIGZvciAoY29uc3QgcCBvZiB3aC5wb3NpdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgIHdoZWVsTWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgcFswXSA8IDAgPyBNYXRoLlBJIDogMCksIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gIH1cbiAgYWRkSW5zdCgnd2hlZWxzJywgJ1doZWVscycsIHdoZWVsRywgJ3RyaW0nLCB3aGVlbE1hdHMpO1xuXG4gIC8vIDYuIEVYVFJBIGNvbXBvbmVudHMgZGVjbGFyZWQgYnkgdGhlIGNmZyAoYSBjb3JydWdhdGVkIHJvb2YsIGEgYmVkIGZsb29yLCBhIGNhbm9weSkgLS0gZWFjaFxuICAvLyAgICBpdHMgb3duIG1hdGVyaWFsIGFuZCBzdWJtaXNzaW9uLCBjb3N0ZWQgaW4gdGhlIGJsb2Nrb3V0LlxuICBmb3IgKGNvbnN0IGV4IG9mIChHLmV4dHJhcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoZXguYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGV4LmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoZXgudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGUgb2YgKGV4LmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGUucG9seSwgZS53aWR0aCwgZS5zaGFwZSA/PyB7fSksIGUuaGV4KSk7XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChleC51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgZXgudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoZXgudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgZXgudXZTY2FsZSA/PyAxKTtcbiAgICBhZGQoZXguaWQsIGV4Lm5hbWUsIGcsIGV4Lm1hdGVyaWFsKTtcbiAgfVxuXG4gIC8vIDcuIFBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzOiBib3VuZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24gc28gdGhlIHRleHR1cmVsZXNzXG4gIC8vICAgIGRlY2xhcmF0aW9ucyBzdGFuZC4gRXZlcnkgdG9uZSBpcyBhIG1lYXN1cmVkIHJhdGlvIHJlY29yZGVkIG9uIHRoZSBtYXRlcmlhbCBpbiB0aGUgc3BlYy5cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzLCB0Lm9wdHMgPz8ge30pO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDI1NiwgdC5waXRjaCA/PyAyNCwgdC5sb3cgPz8gMC43MiwgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBpZiAodC5raW5kID09PSAnZ2xhc3MnKSB0ZXggPSBnbGFzc1RpbGUodC5zaXplID8/IDI1NiwgdC5sb3csIHQuc2VlZCA/PyA5LCB0LnN0cmVha3MgPz8gNSk7XG4gICAgYmluZFRpbGUobWF0LCB0ZXgsIHQuYnVtcCA/PyAwKTtcbiAgfVxuXG4gIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHsgbm9kZXMsIG1lc2hlcywgc29ja2V0cywgY29sbGlkZXJzLCBkZXN0cnVjdGlvbkdyb3VwcyB9IHNhdGlzZmllcyBQcm9jZWR1cmFsTW9kZWxSdW50aW1lO1xuICByZXR1cm4gcm9vdDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoYWlraXQgZW50cnkgcG9pbnQgKi9cblxuLyoqXG4gKiB0aGFpa2l0IGVudHJ5IHBvaW50LiBUaGUgcmVnaXN0cnkgcmVjb3JkcyBgY3JlYXRlT2JqZWN0TW9kZWxgIGFzIHRoZSBleHBvcnQgYW5kIGNhbGxzIGl0IHdpdGhcbiAqIChzcGVjLCBvcHRpb25zKS4gYHNwZWNgIGlzIGFjY2VwdGVkIGFuZCBhdHRhY2hlZCBmb3IgaG9zdC1zaWRlIGluc3BlY3Rpb24gLS0gdGhlIHJlY29uc3RydWN0aW9uXG4gKiBkYXRhIGFscmVhZHkgbGl2ZXMgaW4gdGhpcyBtb2R1bGUsIHNvIGl0IGlzIGRlbGliZXJhdGVseSBub3QgYSBzZWNvbmQgc291cmNlIG9mIHRydXRoLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlT2JqZWN0TW9kZWwoc3BlYz86IHVua25vd24sIG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IGNyZWF0ZVRveW90YUhpbHV4TW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF1Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLElBQ2I7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFlBQVk7QUFBQSxJQUNWLFNBQVM7QUFBQSxJQUNULFFBQVE7QUFBQSxJQUNSLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxJQUNaLFlBQVk7QUFBQSxNQUNWLFNBQVM7QUFBQSxNQUNULGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLElBQ1g7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLEtBQUs7QUFBQSxJQUNQO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFNBQVM7QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFlBQVk7QUFBQSxNQUNaLFlBQVk7QUFBQSxRQUNWLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ04sS0FBSztBQUFBLE1BQ1A7QUFBQSxNQUNBLFVBQVU7QUFBQSxJQUNaO0FBQUEsSUFDQSxhQUFhO0FBQUEsTUFDWDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLE1BQ1osV0FBVztBQUFBLE1BQ1gsYUFBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFVBQ0o7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLE1BQU07QUFBQSxRQUNOLE9BQU87QUFBQSxNQUNUO0FBQUEsSUFDRjtBQUFB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
