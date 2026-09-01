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

// assets/toyota-commuter-van/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createToyotaCommuterVanModel: () => createToyotaCommuterVanModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "toyota-commuter-van",
  "name": "Toyota Commuter Van",
  "exportName": "ToyotaCommuterVan",
  "envelope": "Envelope 1.88 x 2.28 x 5.38 m (mirrors to 2.06), origin base-center, +Y up, +Z forward.\n * Budget (hero): <=8000 triangles, <=6 draw calls, <=4 materials, <=8 unique geometries.",
  "materials": [
    {
      "id": "paint",
      "color": 14146271,
      "roughness": 0.4,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "glass",
      "color": 5004387,
      "roughness": 0.45,
      "metalness": 0.05,
      "opacity": 0.92
    },
    {
      "id": "trim",
      "color": 16777215,
      "roughness": 0.6,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "paint",
      "kind": "mud",
      "base": [
        1,
        1,
        1
      ],
      "seed": 41,
      "coverage": 0.43,
      "size": 512,
      "opts": {
        "tone": [
          0.7190044754939415,
          0.6908091800452538,
          0.6483704250606476
        ],
        "floor": 0.17,
        "streaks": 260,
        "cloud": 0.1,
        "speckle": 4500,
        "zones": [
          [
            0,
            0.24,
            3
          ],
          [
            0.5,
            0.67,
            3
          ],
          [
            0.8,
            0.94,
            1.5
          ],
          [
            0.24,
            0.3,
            0.6
          ],
          [
            0.94,
            1,
            0.6
          ],
          [
            0.36,
            0.5,
            0.3
          ]
        ]
      }
    }
  ],
  "pivots": [
    {
      "name": "wheel-front-l",
      "position": [
        0.78,
        0.33,
        1.64
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
        -0.78,
        0.33,
        1.64
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
        0.78,
        0.33,
        -1.47
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
        -0.78,
        0.33,
        -1.47
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
    "width": 1.88,
    "sill": 0.4,
    "paintHex": 16777215,
    "mudScale": 2.3,
    "mudUScale": 5.38,
    "mudTopClean": true,
    "collider": {
      "shape": "convex",
      "localCenter": [
        0,
        1.14,
        0
      ],
      "halfExtents": [
        0.94,
        1.14,
        2.69
      ],
      "notes": "Declared on the asset as convex: the hull of the body shell."
    },
    "outline": [
      [
        2.62,
        0.4
      ],
      [
        2.69,
        0.6
      ],
      [
        2.69,
        1
      ],
      [
        2.6724,
        1.0424
      ],
      [
        2.63,
        1.06
      ],
      [
        2.6,
        1.14
      ],
      [
        2.58,
        1.2
      ],
      [
        2.5227,
        1.3562
      ],
      [
        2.4444,
        1.5033
      ],
      [
        2.3465,
        1.638
      ],
      [
        2.2309,
        1.7579
      ],
      [
        2.0998,
        1.8607
      ],
      [
        1.9016,
        1.9526
      ],
      [
        1.6958,
        2.0253
      ],
      [
        1.4839,
        2.0778
      ],
      [
        1.268,
        2.1094
      ],
      [
        1.05,
        2.12
      ],
      [
        -2.39,
        2.12
      ],
      [
        -2.5048,
        2.0972
      ],
      [
        -2.6021,
        2.0321
      ],
      [
        -2.6672,
        1.9348
      ],
      [
        -2.69,
        1.82
      ],
      [
        -2.69,
        0.6
      ],
      [
        -2.62,
        0.4
      ]
    ],
    "tumble": {
      "belt": 1.25,
      "roof": 2.12,
      "k": 0.2
    },
    "plan": [
      [
        -2.69,
        0.96
      ],
      [
        -2.4,
        1
      ],
      [
        2.3,
        1
      ],
      [
        2.69,
        0.95
      ]
    ],
    "shape": {
      "steps": 14,
      "edgeBias": 0.6,
      "shoulder": {
        "r": 0.28,
        "zMin": -2.7,
        "zMax": 1.8,
        "fade": 0.3
      },
      "nose": {
        "r": 0.42
      },
      "tail": {
        "r": 0.12
      },
      "smooth": 50
    },
    "bodyExtrudes": [
      {
        "poly": [
          [
            -1.9,
            2.06
          ],
          [
            -1.1,
            2.06
          ],
          [
            -1.1,
            2.19
          ],
          [
            -1.1107,
            2.23
          ],
          [
            -1.14,
            2.2593
          ],
          [
            -1.18,
            2.27
          ],
          [
            -1.82,
            2.27
          ],
          [
            -1.86,
            2.2593
          ],
          [
            -1.8893,
            2.23
          ],
          [
            -1.9,
            2.19
          ]
        ],
        "width": 0.86,
        "shape": {
          "steps": 8,
          "edgeBias": 0.6,
          "shoulder": {
            "r": 0.08,
            "zMin": -1.95,
            "zMax": -1.05
          },
          "nose": {
            "r": 0.12
          },
          "tail": {
            "r": 0.12
          },
          "smooth": 50,
          "topOf": [
            [
              -1.9,
              2.06
            ],
            [
              -1.1,
              2.06
            ],
            [
              -1.1,
              2.19
            ],
            [
              -1.1107,
              2.23
            ],
            [
              -1.14,
              2.2593
            ],
            [
              -1.18,
              2.27
            ],
            [
              -1.82,
              2.27
            ],
            [
              -1.86,
              2.2593
            ],
            [
              -1.8893,
              2.23
            ],
            [
              -1.9,
              2.19
            ]
          ],
          "baseWidth": 0.86
        }
      }
    ],
    "glass": {
      "poly": [
        [
          2.593,
          1.1904
        ],
        [
          2.5375,
          1.3475
        ],
        [
          2.4609,
          1.4956
        ],
        [
          2.3647,
          1.6318
        ],
        [
          2.2507,
          1.7534
        ],
        [
          2.121,
          1.8582
        ],
        [
          1.9,
          1.78
        ],
        [
          1.72,
          1.78
        ],
        [
          1.51,
          1.77
        ],
        [
          1.34,
          1.76
        ],
        [
          1.05,
          1.76
        ],
        [
          -2.52,
          1.76
        ],
        [
          -2.66,
          1.6
        ],
        [
          -2.66,
          1.22
        ]
      ],
      "proud": 6e-3,
      "hex": 16777215,
      "boxes": [
        [
          0,
          1.52,
          -2.697,
          1.3,
          0.5,
          0.014
        ]
      ]
    },
    "pillars": [
      {
        "poly": [
          [
            2.6246,
            1.2178
          ],
          [
            2.5462,
            1.4118
          ],
          [
            2.4354,
            1.5892
          ],
          [
            2.2954,
            1.7446
          ],
          [
            2.1306,
            1.8734
          ],
          [
            2.0306,
            1.8734
          ],
          [
            2.1954,
            1.7446
          ],
          [
            2.3354,
            1.5892
          ],
          [
            2.4462,
            1.4118
          ],
          [
            2.5246,
            1.2178
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            0.92,
            1.2
          ],
          [
            1.02,
            1.2
          ],
          [
            1.02,
            1.8
          ],
          [
            0.92,
            1.8
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            -0.3,
            1.2
          ],
          [
            -0.2,
            1.2
          ],
          [
            -0.2,
            1.8
          ],
          [
            -0.3,
            1.8
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            -1.5,
            1.2
          ],
          [
            -1.4,
            1.2
          ],
          [
            -1.4,
            1.8
          ],
          [
            -1.5,
            1.8
          ]
        ],
        "strip": 0.1
      },
      {
        "poly": [
          [
            -2.68,
            1.2
          ],
          [
            -2.56,
            1.2
          ],
          [
            -2.56,
            1.8
          ],
          [
            -2.68,
            1.8
          ]
        ],
        "strip": 0.1
      }
    ],
    "wheels": {
      "r": 0.33,
      "rim": 0.2,
      "halfW": 0.11,
      "track": 0.78,
      "zF": 1.64,
      "zR": -1.47,
      "seg": 24,
      "arch": 0.39,
      "style": "steel",
      "tyreHex": 5657421,
      "lugHex": 4736575,
      "rimHex": 9078655,
      "ventHex": 4868162,
      "dish": 0.5,
      "flare": 0,
      "wellHex": 4867906,
      "positions": [
        [
          0.78,
          0.33,
          1.64
        ],
        [
          -0.78,
          0.33,
          1.64
        ],
        [
          0.78,
          0.33,
          -1.47
        ],
        [
          -0.78,
          0.33,
          -1.47
        ]
      ]
    },
    "trim": [
      [
        9079432,
        0,
        0.52,
        2.7,
        1.1,
        0.26,
        0.1
      ],
      [
        5920850,
        0,
        0.84,
        2.705,
        0.9,
        0.12,
        0.02
      ],
      [
        12896460,
        0,
        0.82,
        2.72,
        0.86,
        0.025,
        0.015
      ],
      [
        12896460,
        0,
        0.87,
        2.72,
        0.86,
        0.025,
        0.015
      ],
      [
        4868680,
        0,
        0.44,
        2.71,
        0.7,
        0.05,
        0.02
      ],
      [
        3816508,
        0,
        1.225,
        2.6,
        1.1,
        0.05,
        0.05
      ],
      [
        9079432,
        0,
        0.52,
        -2.7,
        1.56,
        0.26,
        0.1
      ],
      [
        4867906,
        0,
        0.28,
        0,
        1.4,
        0.16,
        4.2
      ],
      [
        4868680,
        0,
        0.9,
        -2.697,
        4e-3,
        0.72,
        0.02
      ]
    ],
    "trimMirrored": [
      [
        9079432,
        0.68,
        0.52,
        2.6,
        0.44,
        0.26,
        0.1,
        0,
        0.62
      ],
      [
        9079432,
        0.84,
        0.52,
        -2.62,
        0.24,
        0.26,
        0.1,
        0,
        -0.9
      ],
      [
        14212576,
        0.58,
        0.92,
        2.69,
        0.32,
        0.2,
        0.04,
        0,
        0.28
      ],
      [
        12089914,
        0.8,
        0.74,
        2.555,
        0.1,
        0.06,
        0.03,
        0,
        0.75
      ],
      [
        11546672,
        0.84,
        1.1,
        -2.69,
        0.1,
        0.44,
        0.06
      ],
      [
        2763306,
        0.32,
        1.358,
        2.555,
        0.02,
        0.38,
        0.015,
        -0.41015237421866746,
        0,
        0.26
      ],
      [
        4868680,
        0.9,
        1.42,
        2.4,
        0.16,
        0.03,
        0.03
      ],
      [
        4868680,
        1,
        1.44,
        2.38,
        0.06,
        0.18,
        0.22
      ],
      [
        4868680,
        0.946,
        1.06,
        0.55,
        0.012,
        0.03,
        0.15
      ],
      [
        4868680,
        0.946,
        1.06,
        -0.05,
        0.012,
        0.12,
        0.05
      ],
      [
        4868680,
        0.946,
        0.8,
        0.97,
        4e-3,
        0.74,
        0.02
      ],
      [
        4868680,
        0.946,
        0.8,
        -0.25,
        4e-3,
        0.74,
        0.02
      ],
      [
        10107450,
        0.946,
        1.02,
        -0.15,
        4e-3,
        0.03,
        4.3
      ],
      [
        3832448,
        0.946,
        0.98,
        -0.15,
        4e-3,
        0.025,
        4.3
      ],
      [
        3820170,
        0.946,
        0.945,
        -0.15,
        4e-3,
        0.02,
        4.3
      ],
      [
        4868680,
        0.946,
        1.17,
        -0.75,
        4e-3,
        0.02,
        2.2
      ],
      [
        8487038,
        0.9,
        0.38,
        0,
        0.14,
        0.04,
        3.1
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
function createToyotaCommuterVanModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Toyota Commuter Van";
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
  if (glassGeos.length) add("glazing", "Glazing", tintGeo(mergeGeos(glassGeos), gl.hex ?? 16777215), "glass");
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
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createToyotaCommuterVanModel(options);
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVG95b3RhIENvbW11dGVyIFZhbiAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxLjg4IHggMi4yOCB4IDUuMzggbSAobWlycm9ycyB0byAyLjA2KSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogZm9yd2FyZC5cbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFZFSElDTEVTLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFNJREUtUFJPRklMRSBFWFRSVVNJT04gLS0gYVxuICogY2xvc2VkIHBvbHlnb24gaW4gdGhlICh6LCB5KSBwbGFuZSBzd2VwdCBhY3Jvc3MgdGhlIHdpZHRoIGFuZCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4IGZvclxuICogdHVtYmxlaG9tZSBhbmQgcGxhbiByb3VuZGluZyAtLSBwbHVzIGEgbGF0aGVkIFdIRUVMIHJldm9sdmVkIGFib3V0IGl0cyBheGxlIGFuZCBhIHBvbHlsaW5lIFRVQkVcbiAqIGZvciBoYW5kbGViYXJzLCByYWlscyBhbmQgZnJhbWVzLiBFdmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgb25lIG1hdGVyaWFsIGlzIGNhcnJpZWQgYXMgYVxuICogdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLCBzbyBhIHR3by10b25lIGJvZHksIGEgYmxhY2sgdHlyZSBvbiBhIHNpbHZlciByaW0gYW5kIGFuIGFtYmVyXG4gKiBpbmRpY2F0b3IgYWxsIHJpZGUgb25lIHNoYWRlciBhbmQgb25lIHN1Ym1pc3Npb24uXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwcyBhcmUgcmVjb3JkZWQgYXMgYmFyZSBmaWxlbmFtZXMgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLiBFdmVyeSBob3N0IGRlcml2ZXMgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJ0b3lvdGEtY29tbXV0ZXItdmFuXCIsXG4gICAgXCJuYW1lXCI6IFwiVG95b3RhIENvbW11dGVyIFZhblwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlRveW90YUNvbW11dGVyVmFuXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuODggeCAyLjI4IHggNS4zOCBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxcbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDE0NjI3MSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA1MDA0Mzg3LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjA1LFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45MlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRyaW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBcInRpbGVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBhaW50XCIsXG4gICAgICAgIFwia2luZFwiOiBcIm11ZFwiLFxuICAgICAgICBcImJhc2VcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VlZFwiOiA0MSxcbiAgICAgICAgXCJjb3ZlcmFnZVwiOiAwLjQzLFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcIm9wdHNcIjoge1xuICAgICAgICAgIFwidG9uZVwiOiBbXG4gICAgICAgICAgICAwLjcxOTAwNDQ3NTQ5Mzk0MTUsXG4gICAgICAgICAgICAwLjY5MDgwOTE4MDA0NTI1MzgsXG4gICAgICAgICAgICAwLjY0ODM3MDQyNTA2MDY0NzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZmxvb3JcIjogMC4xNyxcbiAgICAgICAgICBcInN0cmVha3NcIjogMjYwLFxuICAgICAgICAgIFwiY2xvdWRcIjogMC4xLFxuICAgICAgICAgIFwic3BlY2tsZVwiOiA0NTAwLFxuICAgICAgICAgIFwiem9uZXNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgIDAuNjcsXG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgMC45NCxcbiAgICAgICAgICAgICAgMS41XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45NCxcbiAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjM2LFxuICAgICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJwaXZvdHNcIjogW1xuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ3aGVlbC1mcm9udC1sXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgMC4zMyxcbiAgICAgICAgICAxLjY0XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAwLFxuICAgICAgICBcIm5vdGVcIjogXCJmcm9udCBsZWZ0IGh1Yiwgcm9sbHMgYWJvdXQgdGhlIGF4bGVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtZnJvbnQtclwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAtMC43OCxcbiAgICAgICAgICAwLjMzLFxuICAgICAgICAgIDEuNjRcbiAgICAgICAgXSxcbiAgICAgICAgXCJheGlzXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIndoZWVsc1wiLFxuICAgICAgICBcImluc3RhbmNlXCI6IDEsXG4gICAgICAgIFwibm90ZVwiOiBcImZyb250IHJpZ2h0IGh1YlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ3aGVlbC1yZWFyLWxcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMC43OCxcbiAgICAgICAgICAwLjMzLFxuICAgICAgICAgIC0xLjQ3XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAyLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIGxlZnQgaHViXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLXJlYXItclwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAtMC43OCxcbiAgICAgICAgICAwLjMzLFxuICAgICAgICAgIC0xLjQ3XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAzLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIHJpZ2h0IGh1YlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwid2lkdGhcIjogMS44OCxcbiAgICAgIFwic2lsbFwiOiAwLjQsXG4gICAgICBcInBhaW50SGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgXCJtdWRTY2FsZVwiOiAyLjMsXG4gICAgICBcIm11ZFVTY2FsZVwiOiA1LjM4LFxuICAgICAgXCJtdWRUb3BDbGVhblwiOiB0cnVlLFxuICAgICAgXCJjb2xsaWRlclwiOiB7XG4gICAgICAgIFwic2hhcGVcIjogXCJjb252ZXhcIixcbiAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjE0LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgMC45NCxcbiAgICAgICAgICAxLjE0LFxuICAgICAgICAgIDIuNjlcbiAgICAgICAgXSxcbiAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjb252ZXg6IHRoZSBodWxsIG9mIHRoZSBib2R5IHNoZWxsLlwiXG4gICAgICB9LFxuICAgICAgXCJvdXRsaW5lXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDIuNjIsXG4gICAgICAgICAgMC40XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDAuNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjY3MjQsXG4gICAgICAgICAgMS4wNDI0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjYzLFxuICAgICAgICAgIDEuMDZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNixcbiAgICAgICAgICAxLjE0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjU4LFxuICAgICAgICAgIDEuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi41MjI3LFxuICAgICAgICAgIDEuMzU2MlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi40NDQ0LFxuICAgICAgICAgIDEuNTAzM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4zNDY1LFxuICAgICAgICAgIDEuNjM4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjIzMDksXG4gICAgICAgICAgMS43NTc5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjA5OTgsXG4gICAgICAgICAgMS44NjA3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjkwMTYsXG4gICAgICAgICAgMS45NTI2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjY5NTgsXG4gICAgICAgICAgMi4wMjUzXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjQ4MzksXG4gICAgICAgICAgMi4wNzc4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjI2OCxcbiAgICAgICAgICAyLjEwOTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgMi4xMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuMzksXG4gICAgICAgICAgMi4xMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNTA0OCxcbiAgICAgICAgICAyLjA5NzJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjYwMjEsXG4gICAgICAgICAgMi4wMzIxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42NjcyLFxuICAgICAgICAgIDEuOTM0OFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNjksXG4gICAgICAgICAgMS44MlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNjksXG4gICAgICAgICAgMC42XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42MixcbiAgICAgICAgICAwLjRcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwidHVtYmxlXCI6IHtcbiAgICAgICAgXCJiZWx0XCI6IDEuMjUsXG4gICAgICAgIFwicm9vZlwiOiAyLjEyLFxuICAgICAgICBcImtcIjogMC4yXG4gICAgICB9LFxuICAgICAgXCJwbGFuXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjY5LFxuICAgICAgICAgIDAuOTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjQsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4zLFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNjksXG4gICAgICAgICAgMC45NVxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgIFwic3RlcHNcIjogMTQsXG4gICAgICAgIFwiZWRnZUJpYXNcIjogMC42LFxuICAgICAgICBcInNob3VsZGVyXCI6IHtcbiAgICAgICAgICBcInJcIjogMC4yOCxcbiAgICAgICAgICBcInpNaW5cIjogLTIuNyxcbiAgICAgICAgICBcInpNYXhcIjogMS44LFxuICAgICAgICAgIFwiZmFkZVwiOiAwLjNcbiAgICAgICAgfSxcbiAgICAgICAgXCJub3NlXCI6IHtcbiAgICAgICAgICBcInJcIjogMC40MlxuICAgICAgICB9LFxuICAgICAgICBcInRhaWxcIjoge1xuICAgICAgICAgIFwiclwiOiAwLjEyXG4gICAgICAgIH0sXG4gICAgICAgIFwic21vb3RoXCI6IDUwXG4gICAgICB9LFxuICAgICAgXCJib2R5RXh0cnVkZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuOSxcbiAgICAgICAgICAgICAgMi4wNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMSxcbiAgICAgICAgICAgICAgMi4wNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMSxcbiAgICAgICAgICAgICAgMi4xOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMTEwNyxcbiAgICAgICAgICAgICAgMi4yM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMTQsXG4gICAgICAgICAgICAgIDIuMjU5M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuMTgsXG4gICAgICAgICAgICAgIDIuMjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjgyLFxuICAgICAgICAgICAgICAyLjI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS44NixcbiAgICAgICAgICAgICAgMi4yNTkzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS44ODkzLFxuICAgICAgICAgICAgICAyLjIzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS45LFxuICAgICAgICAgICAgICAyLjE5XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcIndpZHRoXCI6IDAuODYsXG4gICAgICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgICAgICBcInN0ZXBzXCI6IDgsXG4gICAgICAgICAgICBcImVkZ2VCaWFzXCI6IDAuNixcbiAgICAgICAgICAgIFwic2hvdWxkZXJcIjoge1xuICAgICAgICAgICAgICBcInJcIjogMC4wOCxcbiAgICAgICAgICAgICAgXCJ6TWluXCI6IC0xLjk1LFxuICAgICAgICAgICAgICBcInpNYXhcIjogLTEuMDVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcIm5vc2VcIjoge1xuICAgICAgICAgICAgICBcInJcIjogMC4xMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwidGFpbFwiOiB7XG4gICAgICAgICAgICAgIFwiclwiOiAwLjEyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJzbW9vdGhcIjogNTAsXG4gICAgICAgICAgICBcInRvcE9mXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjksXG4gICAgICAgICAgICAgICAgMi4wNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMSxcbiAgICAgICAgICAgICAgICAyLjA2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4xLFxuICAgICAgICAgICAgICAgIDIuMTlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjExMDcsXG4gICAgICAgICAgICAgICAgMi4yM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMTQsXG4gICAgICAgICAgICAgICAgMi4yNTkzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4xOCxcbiAgICAgICAgICAgICAgICAyLjI3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS44MixcbiAgICAgICAgICAgICAgICAyLjI3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS44NixcbiAgICAgICAgICAgICAgICAyLjI1OTNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjg4OTMsXG4gICAgICAgICAgICAgICAgMi4yM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuOSxcbiAgICAgICAgICAgICAgICAyLjE5XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImJhc2VXaWR0aFwiOiAwLjg2XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJnbGFzc1wiOiB7XG4gICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi41OTMsXG4gICAgICAgICAgICAxLjE5MDRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNTM3NSxcbiAgICAgICAgICAgIDEuMzQ3NVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi40NjA5LFxuICAgICAgICAgICAgMS40OTU2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjM2NDcsXG4gICAgICAgICAgICAxLjYzMThcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuMjUwNyxcbiAgICAgICAgICAgIDEuNzUzNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi4xMjEsXG4gICAgICAgICAgICAxLjg1ODJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuOSxcbiAgICAgICAgICAgIDEuNzhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuNzIsXG4gICAgICAgICAgICAxLjc4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjUxLFxuICAgICAgICAgICAgMS43N1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS4zNCxcbiAgICAgICAgICAgIDEuNzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgICAxLjc2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi41MixcbiAgICAgICAgICAgIDEuNzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0yLjY2LFxuICAgICAgICAgICAgMS42XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi42NixcbiAgICAgICAgICAgIDEuMjJcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwicHJvdWRcIjogMC4wMDYsXG4gICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1LFxuICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS41MixcbiAgICAgICAgICAgIC0yLjY5NyxcbiAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgIDAuMDE0XG4gICAgICAgICAgXVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwaWxsYXJzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuNjI0NixcbiAgICAgICAgICAgICAgMS4yMTc4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjU0NjIsXG4gICAgICAgICAgICAgIDEuNDExOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi40MzU0LFxuICAgICAgICAgICAgICAxLjU4OTJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuMjk1NCxcbiAgICAgICAgICAgICAgMS43NDQ2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjEzMDYsXG4gICAgICAgICAgICAgIDEuODczNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi4wMzA2LFxuICAgICAgICAgICAgICAxLjg3MzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuMTk1NCxcbiAgICAgICAgICAgICAgMS43NDQ2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjMzNTQsXG4gICAgICAgICAgICAgIDEuNTg5MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi40NDYyLFxuICAgICAgICAgICAgICAxLjQxMThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuNTI0NixcbiAgICAgICAgICAgICAgMS4yMTc4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjIsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuNSxcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS40LFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjQsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuNSxcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNjgsXG4gICAgICAgICAgICAgIDEuMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgICAgIDEuMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNjgsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwid2hlZWxzXCI6IHtcbiAgICAgICAgXCJyXCI6IDAuMzMsXG4gICAgICAgIFwicmltXCI6IDAuMixcbiAgICAgICAgXCJoYWxmV1wiOiAwLjExLFxuICAgICAgICBcInRyYWNrXCI6IDAuNzgsXG4gICAgICAgIFwiekZcIjogMS42NCxcbiAgICAgICAgXCJ6UlwiOiAtMS40NyxcbiAgICAgICAgXCJzZWdcIjogMjQsXG4gICAgICAgIFwiYXJjaFwiOiAwLjM5LFxuICAgICAgICBcInN0eWxlXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJ0eXJlSGV4XCI6IDU2NTc0MjEsXG4gICAgICAgIFwibHVnSGV4XCI6IDQ3MzY1NzUsXG4gICAgICAgIFwicmltSGV4XCI6IDkwNzg2NTUsXG4gICAgICAgIFwidmVudEhleFwiOiA0ODY4MTYyLFxuICAgICAgICBcImRpc2hcIjogMC41LFxuICAgICAgICBcImZsYXJlXCI6IDAsXG4gICAgICAgIFwid2VsbEhleFwiOiA0ODY3OTA2LFxuICAgICAgICBcInBvc2l0aW9uc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43OCxcbiAgICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgICAxLjY0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC43OCxcbiAgICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgICAxLjY0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjc4LFxuICAgICAgICAgICAgMC4zMyxcbiAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC43OCxcbiAgICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgICAtMS40N1xuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwidHJpbVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICA5MDc5NDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAyLjcsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA1OTIwODUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC44NCxcbiAgICAgICAgICAyLjcwNSxcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgMC4xMixcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5NjQ2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuODIsXG4gICAgICAgICAgMi43MixcbiAgICAgICAgICAwLjg2LFxuICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgIDAuMDE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5NjQ2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuODcsXG4gICAgICAgICAgMi43MixcbiAgICAgICAgICAwLjg2LFxuICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgIDAuMDE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4NjgwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC40NCxcbiAgICAgICAgICAyLjcxLFxuICAgICAgICAgIDAuNyxcbiAgICAgICAgICAwLjA1LFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDM4MTY1MDgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjIyNSxcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgMC4wNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgOTA3OTQzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgLTIuNyxcbiAgICAgICAgICAxLjU2LFxuICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY3OTA2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4yOCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEuNCxcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDQuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAtMi42OTcsXG4gICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgMC43MixcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcInRyaW1NaXJyb3JlZFwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICA5MDc5NDMyLFxuICAgICAgICAgIDAuNjgsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMC40NCxcbiAgICAgICAgICAwLjI2LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDkwNzk0MzIsXG4gICAgICAgICAgMC44NCxcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIC0yLjYyLFxuICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgMC4yNixcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAtMC45XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNDIxMjU3NixcbiAgICAgICAgICAwLjU4LFxuICAgICAgICAgIDAuOTIsXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICAwLjMyLFxuICAgICAgICAgIDAuMixcbiAgICAgICAgICAwLjA0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4yOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTIwODk5MTQsXG4gICAgICAgICAgMC44LFxuICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgMi41NTUsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNzVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDExNTQ2NjcyLFxuICAgICAgICAgIDAuODQsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIC0yLjY5LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLjQ0LFxuICAgICAgICAgIDAuMDZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDI3NjMzMDYsXG4gICAgICAgICAgMC4zMixcbiAgICAgICAgICAxLjM1OCxcbiAgICAgICAgICAyLjU1NSxcbiAgICAgICAgICAwLjAyLFxuICAgICAgICAgIDAuMzgsXG4gICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgLTAuNDEwMTUyMzc0MjE4NjY3NDYsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjI2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4NjgwLFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAxLjQyLFxuICAgICAgICAgIDIuNCxcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4wM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDEuNDQsXG4gICAgICAgICAgMi4zOCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMTgsXG4gICAgICAgICAgMC4yMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAxLjA2LFxuICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLjE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4NjgwLFxuICAgICAgICAgIDAuOTQ2LFxuICAgICAgICAgIDEuMDYsXG4gICAgICAgICAgLTAuMDUsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4xMixcbiAgICAgICAgICAwLjA1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4NjgwLFxuICAgICAgICAgIDAuOTQ2LFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAwLjk3LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgLTAuMjUsXG4gICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgMC43NCxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMDEwNzQ1MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAxLjAyLFxuICAgICAgICAgIC0wLjE1LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgNC4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzODMyNDQ4LFxuICAgICAgICAgIDAuOTQ2LFxuICAgICAgICAgIDAuOTgsXG4gICAgICAgICAgLTAuMTUsXG4gICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgNC4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzODIwMTcwLFxuICAgICAgICAgIDAuOTQ2LFxuICAgICAgICAgIDAuOTQ1LFxuICAgICAgICAgIC0wLjE1LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgNC4zXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA0ODY4NjgwLFxuICAgICAgICAgIDAuOTQ2LFxuICAgICAgICAgIDEuMTcsXG4gICAgICAgICAgLTAuNzUsXG4gICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgMC4wMixcbiAgICAgICAgICAyLjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDg0ODcwMzgsXG4gICAgICAgICAgMC45LFxuICAgICAgICAgIDAuMzgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgMy4xXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYsIHN0ZXBzOiBvcHRzLnN0ZXBzID8/IDEgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBpZiAob3B0cy5lZGdlQmlhcyAmJiAob3B0cy5zdGVwcyA/PyAxKSA+IDEpIHtcbiAgICAvLyBQdWxsIHRoZSB3aWR0aCBjb2x1bW5zIHRvd2FyZCB0aGUgdHdvIGVkZ2VzICh8dHxecCwgcCA8IDEpIHNvIGEgc2hvdWxkZXIgZmlsbGV0IGdldHMgZm91clxuICAgIC8vIHJlYWwgc2VnbWVudHMgaW5zdGVhZCBvZiBvbmUgY2hhbWZlciBhdCB0aGUgb3V0ZXJtb3N0IGNvbHVtbjsgdGhlIGZsYXQgbWlkZGxlIG5lZWRzIG5vbmUuXG4gICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBodyA9IHdpZHRoIC8gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHEuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBxLmdldFgoaSkgLyBodykpO1xuICAgICAgcS5zZXRYKGksIGh3ICogTWF0aC5zaWduKHQpICogTWF0aC5wb3coTWF0aC5hYnModCksIG9wdHMuZWRnZUJpYXMpKTtcbiAgICB9XG4gIH1cbiAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gIGlmIChvcHRzLnNtb290aCkgc21vb3RoTm9ybWFscyhnLCBvcHRzLnNtb290aCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogU2hhcGluZyBvcHRpb25zIHNoYXJlZCBieSBhIGJvZHkgYW5kIGV2ZXJ5dGhpbmcgc3dlcHQgcHJvdWQgb2YgaXQgKGdsYXNzIGJhbmQsIHBpbGxhcnMpLlxuICogIGBzaG91bGRlcmAsIGBub3NlYCBhbmQgYHRhaWxgIGFyZSBST1VORElOR1MgLS0gc2VlIHNoYXBlV2lkdGggLS0gYW5kIG5lZWQgYHN0ZXBzYCA+IDEgc28gdGhlXG4gKiAgc3dlcHQgZmFjZXMgY2FycnkgdmVydGljZXMgYWNyb3NzIHRoZSB3aWR0aCB0byBiZW5kOyBgYmFzZVdpZHRoYCBpcyB0aGUgYm9keSdzIHdpZHRoLCBzbyBhXG4gKiAgYmFuZCBzd2VwdCB3aWRlciB0aGFuIGl0IGlzIHJvdW5kZWQgYWJvdXQgdGhlIFNBTUUgY2VudHJlcyBhdCBhIGxhcmdlciByYWRpdXMgYW5kIHN0YXlzXG4gKiAgZXhhY3RseSBhcyBwcm91ZCBhcyBpdCB3YXMgYXV0aG9yZWQ7IGB0b3BPZmAgaXMgdGhlIGJvZHkncyBvd24gcHJvZmlsZSwgd2hpY2ggaXMgd2hlcmUgdGhlXG4gKiAgcm9vZiBsaW5lIGV2ZXJ5IHNob3VsZGVyIGhhbmdzIG9mZiBpcyByZWFkLiBBbGwgb3B0aW9uYWw6IHVuc2V0LCB0aGUgc3dlZXAgaXMgdGhlIG9sZCBzbGFiLiAqL1xudHlwZSBTaGFwZU9wdHMgPSB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSxcbiAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyLCBzdGVwcz86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICBzaG91bGRlcj86IHsgcjogbnVtYmVyLCB6TWluPzogbnVtYmVyLCB6TWF4PzogbnVtYmVyLCBmYWRlPzogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgbm9zZT86IHsgcjogbnVtYmVyIH0sIHRhaWw/OiB7IHI6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgIHNtb290aD86IG51bWJlciwgZWRnZUJpYXM/OiBudW1iZXIsIGJhc2VXaWR0aD86IG51bWJlciwgdG9wT2Y/OiBudW1iZXJbXVtdIH07XG5cbi8qKiBIaWdoZXN0IHkgb2YgYSBjbG9zZWQgW3osIHldIHByb2ZpbGUgb24gdGhlIHZlcnRpY2FsIGxpbmUgYXQgeiAtLSB0aGUgcm9vZiBsaW5lIGF0IHRoYXRcbiAqICBzdGF0aW9uLiBWZXJ0aWNhbCBlZGdlcyBjb3VudCBieSB0aGVpciBvd24gdG9wOyBhIHogb3V0c2lkZSB0aGUgcHJvZmlsZSByZXR1cm5zIC1JbmZpbml0eS4gKi9cbmZ1bmN0aW9uIHByb2ZpbGVUb3AocHJvZmlsZTogbnVtYmVyW11bXSwgejogbnVtYmVyLCB0b2wgPSAwKTogbnVtYmVyIHtcbiAgbGV0IHRvcCA9IC1JbmZpbml0eTtcbiAgY29uc3QgbiA9IHByb2ZpbGUubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwcm9maWxlW2ldLCBiID0gcHJvZmlsZVsoaSArIDEpICUgbl07XG4gICAgY29uc3QgbG8gPSBNYXRoLm1pbihhWzBdLCBiWzBdKSwgaGkgPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICBpZiAoeiA8IGxvIC0gdG9sIC0gMWUtNiB8fCB6ID4gaGkgKyB0b2wgKyAxZS02KSBjb250aW51ZTtcbiAgICAvLyBgdG9sYCBsZXRzIGEgYmFuZCBzdGFuZGluZyBhIGZldyBtbSBwcm91ZCBvZiBhIHZlcnRpY2FsIGZhY2UgKGEgcmVhciBwYW5lLCBhIEMtcGlsbGFyIHN0cmlwXG4gICAgLy8gYmVoaW5kIHRoZSBjYWIgYmFjaykgcmVhZCB0aGUgcm9vZiBsaW5lIG9mIHRoZSBmYWNlIGl0IHN0YW5kcyBvbiwgbm90IHRoZSBiZWQgZmxvb3IgYmVoaW5kIGl0XG4gICAgY29uc3QgemMgPSBNYXRoLm1heChsbywgTWF0aC5taW4oaGksIHopKTtcbiAgICBjb25zdCB5ID0gaGkgLSBsbyA8IDFlLTYgPyBNYXRoLm1heChhWzFdLCBiWzFdKSA6IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogKHpjIC0gYVswXSkgLyAoYlswXSAtIGFbMF0pO1xuICAgIGlmICh5ID4gdG9wKSB0b3AgPSB5O1xuICB9XG4gIHJldHVybiB0b3A7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG9wdHM6IFNoYXBlT3B0cywgd2lkdGggPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdHVtYmxlQXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnR1bWJsZSkgcmV0dXJuIDE7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgcmV0dXJuIDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgfTtcbiAgY29uc3QgcGxhbkF0ID0gKHo6IG51bWJlcikgPT4ge1xuICAgIGlmICghb3B0cy5wbGFuIHx8IG9wdHMucGxhbi5sZW5ndGggPCAyKSByZXR1cm4gMTtcbiAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICBpZiAoeiA8PSBzdFswXVswXSkgcmV0dXJuIHN0WzBdWzFdO1xuICAgIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSByZXR1cm4gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgIHJldHVybiBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgLy8gUk9VTkRJTkdTLiBBIHN3ZWVwIGlzIGEgc2xhYjogaXRzIHJvb2YgbWVldHMgaXRzIHNpZGUgYXQgYSBoYXJkIGVkZ2UsIGFuZCBpdHMgbm9zZSBtZWV0cyBib3RoXG4gIC8vIHNpZGVzIGF0IHR3byBtb3JlLiBSZWFsIHNoZWV0IG1ldGFsIGNyb3ducyBvdmVyIHRoZSBmZW5kZXIgYW5kIHdyYXBzIHJvdW5kIHRoZSBub3NlLCBzbyBhbnlcbiAgLy8gdmVydGV4IGluc2lkZSBhIGNvcm5lciBxdWFkcmFudCAod2l0aGluIHIgb2YgdGhlIHRvcCBBTkQgd2l0aGluIHIgb2YgdGhlIHNpZGUpIGlzIHByb2plY3RlZFxuICAvLyBvbnRvIHRoZSBjaXJjbGUgb2YgcmFkaXVzIHIgYWJvdXQgdGhhdCBjb3JuZXIncyBjZW50cmUgLS0gYSBmaWxsZXQsIGluIHgveSBmb3IgdGhlIHNob3VsZGVyXG4gIC8vIGFuZCBpbiB4L3ogYXQgdGhlIHR3byBlbmRzLiBUaGUgY2VudHJlcyBhcmUgcGxhY2VkIG9mZiB0aGUgQk9EWSdzIHdpZHRoIChgYmFzZVdpZHRoYCkgYW5kXG4gIC8vIHJvb2YgbGluZSAoYHRvcE9mYCksIHNvIGEgZ2xhc3MgYmFuZCBzd2VwdCBgZWAgd2lkZXIgaXMgZmlsbGV0ZWQgYXQgciArIGUgYWJvdXQgdGhlIHNhbWVcbiAgLy8gY2VudHJlIGFuZCBzdGF5cyBgZWAgcHJvdWQgYWxsIHRoZSB3YXkgcm91bmQgdGhlIGNvcm5lci5cbiAgY29uc3QgZXh0cmEgPSBvcHRzLmJhc2VXaWR0aCA/ICh3aWR0aCAtIG9wdHMuYmFzZVdpZHRoKSAvIDIgOiAwO1xuICBjb25zdCBiYXNlSGFsZiA9IChvcHRzLmJhc2VXaWR0aCA/PyB3aWR0aCkgLyAyO1xuICBjb25zdCB0b3AgPSBvcHRzLnRvcE9mID8/IG51bGw7XG4gIGxldCB6TWF4ID0gLUluZmluaXR5LCB6TWluID0gSW5maW5pdHk7XG4gIGlmICh0b3ApIGZvciAoY29uc3QgcSBvZiB0b3ApIHsgaWYgKHFbMF0gPiB6TWF4KSB6TWF4ID0gcVswXTsgaWYgKHFbMF0gPCB6TWluKSB6TWluID0gcVswXTsgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGNvbnN0IHRmID0gdHVtYmxlQXQoeSksIHBmID0gcGxhbkF0KHopO1xuICAgIHggKj0gdGYgKiBwZjtcbiAgICBpZiAob3B0cy5zaG91bGRlciAmJiB0b3ApIHtcbiAgICAgIGNvbnN0IHNoID0gb3B0cy5zaG91bGRlcjtcbiAgICAgIC8vIFRoZSBmaWxsZXQgbGl2ZXMgb24gYSB6LXJhbmdlOiBoYXJkIGF0IHpNaW4gKHRoZSBjYWIgYmFjayksIGZhZGVkIG92ZXIgYGZhZGVgIG1ldHJlcyBhdFxuICAgICAgLy8gek1heCAodGhlIHRvcCBvZiB0aGUgd2luZHNjcmVlbiByYWtlIC0tIGEgcmFrZSBpcyBhIHBsYW5lLCBpdHMgZWRnZSBhIGNyZWFzZSwgYW5kIGEgZmFkZVxuICAgICAgLy8ga2V5ZWQgb24gdGhlIHJvb2YgbGluZSdzIFNMT1BFIHZhcmllZCBpbnNpZGUgdGhlIHJlYXIgY29ybmVyIGFuZCBmb2xkZWQgaXQpLlxuICAgICAgY29uc3QgekxvID0gc2guek1pbiA/PyAtSW5maW5pdHksIHpIaSA9IHNoLnpNYXggPz8gSW5maW5pdHksIGZkID0gc2guZmFkZSA/PyAwO1xuICAgICAgY29uc3QgdyA9IHogPCB6TG8gfHwgeiA+IHpIaSA/IDAgOiBmZCA+IDAgPyBNYXRoLm1pbigxLCAoekhpIC0geikgLyBmZCkgOiAxO1xuICAgICAgY29uc3QgeXQgPSBwcm9maWxlVG9wKHRvcCwgeiwgMC4wMyk7XG4gICAgICBpZiAodyA+IDAgJiYgaXNGaW5pdGUoeXQpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzaC5yICsgZXh0cmEsIGN5ID0geXQgLSBzaC5yO1xuICAgICAgICBjb25zdCBodyA9IGJhc2VIYWxmICogdHVtYmxlQXQoY3kpICogcGYsIGN4ID0gaHcgLSBzaC5yO1xuICAgICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpO1xuICAgICAgICBpZiAoeSA+IGN5ICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgICBjb25zdCBkeCA9IGF4IC0gY3gsIGR5ID0geSAtIGN5LCBkID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgbGV0IG54ID0gYXgsIG55ID0geSwgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGR4ID49IHIgLSAxZS00KSB7XG4gICAgICAgICAgICAvLyB0aGUgRURHRSBjb2x1bW4sIHNoYXJlZCB3aXRoIHRoZSBzaWRlOiB0aGUgYXJjJ3MgZm9vdCwgdGFuZ2VudCB0byB0aGUgc2lkZSBhdCBjeVxuICAgICAgICAgICAgbnggPSBjeCArIHI7IG55ID0gY3k7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkeSA+PSBzaC5yIC0gMWUtNCAmJiBkeCA8PSByICsgMWUtNikge1xuICAgICAgICAgICAgLy8gYSB0b3Atcm93IHZlcnRleDogaXRzIGNvbHVtbiBwb3NpdGlvbiBwaWNrcyBpdHMgYW5nbGUgb24gdGhlIGFyY1xuICAgICAgICAgICAgY29uc3QgdGggPSBNYXRoLlBJIC8gMiAqICgxIC0gZHggLyByKTtcbiAgICAgICAgICAgIG54ID0gY3ggKyBNYXRoLmNvcyh0aCkgKiByOyBueSA9IGN5ICsgTWF0aC5zaW4odGgpICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR4IDw9IHIgKyAxZS02ICYmIGR5IDw9IHIgKyAxZS02ICYmIGQgPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIGEgcHJvdWQgYmFuZCdzIG91dGVyIHZlcnRleCBiZWxvdyB0aGUgdG9wOiBvbnRvIGl0cyBvd24gY2lyY2xlOyBpbnNpZGUgaXQsIGxlYXZlXG4gICAgICAgICAgICBueCA9IGN4ICsgZHggLyBkICogcjsgbnkgPSBjeSArIGR5IC8gZCAqIHI7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoaXQpIHsgeCA9IE1hdGguc2lnbih4IHx8IDEpICogKGF4ICsgKG54IC0gYXgpICogdyk7IHkgPSB5ICsgKG55IC0geSkgKiB3OyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbmQgb2YgW29wdHMubm9zZSA/IHsgcjogb3B0cy5ub3NlLnIsIHpjOiB6TWF4IC0gb3B0cy5ub3NlLnIsIHM6IDEgfSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHMudGFpbCA/IHsgcjogb3B0cy50YWlsLnIsIHpjOiB6TWluICsgb3B0cy50YWlsLnIsIHM6IC0xIH0gOiBudWxsXSkge1xuICAgICAgaWYgKCFlbmQgfHwgIXRvcCkgY29udGludWU7XG4gICAgICBjb25zdCByID0gZW5kLnIgKyBleHRyYTtcbiAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdCh5KSAqIHBsYW5BdChlbmQuemMpLCBjeCA9IGh3IC0gZW5kLnI7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpLCBkeiA9ICh6IC0gZW5kLnpjKSAqIGVuZC5zO1xuICAgICAgaWYgKGR6ID4gMCAmJiBheCA+IGN4ICYmIHIgPiAxZS02KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZCA9IE1hdGguaHlwb3QoZHgsIGR6KSB8fCAxO1xuICAgICAgICAvLyBPbmx5IGEgdmVydGV4IE9VVFNJREUgdGhlIGNpcmNsZSBpcyBwcm9qZWN0ZWQgb250byBpdCAodGhlIHNob3VsZGVyJ3MgcnVsZSk6IGEgc2lkZVxuICAgICAgICAvLyBzdHJpcCdzIGlubmVyIGZhY2UgbGllcyBpbnNpZGUsIGFuZCBwcm9qZWN0aW5nIGl0IHRvbyBsYW5kcyBpdCBvbiB0aGUgb3V0ZXIgZmFjZSxcbiAgICAgICAgLy8gd2hpY2ggei1maWdodHMgLS0gdGhlIENvbW11dGVyIHZhbidzIHdyYXBwZWQgQS1waWxsYXJzIGNydW1wbGVkIGZyb20gZXhhY3RseSB0aGF0LlxuICAgICAgICBpZiAoZCA+PSByIC0gMWUtNCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoY3ggKyBkeCAvIGQgKiByKTsgeiA9IGVuZC56YyArIGVuZC5zICogKGR6IC8gZCAqIHIpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHAuc2V0WFlaKGksIHgsIHksIHopO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBbmdsZS1saW1pdGVkIFNNT09USCBOT1JNQUxTIG9uIGEgbm9uLWluZGV4ZWQgZ2VvbWV0cnkuIEV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb25cbiAqICBhdmVyYWdlcyB0aGUgZmFjZSBub3JtYWxzIG9mIGl0cyBuZWlnaGJvdXJzIHRoYXQgbGllIHdpdGhpbiBgbWF4RGVnYCBvZiBpdHMgb3duIGZhY2UsIHNvIGFcbiAqICBmaWxsZXRlZCBzaG91bGRlciwgYSBwbGFuLXJvdW5kZWQgbm9zZSBhbmQgdGhlIHR1bWJsZWhvbWUga2luayBhdCB0aGUgYmVsdCBzaGFkZSBhcyBvbmVcbiAqICBjb250aW51b3VzIHN1cmZhY2UsIHdoaWxlIGEgOTAtZGVncmVlIGVkZ2UgLS0gdGhlIGFyY2ggY3V0LCB0aGUgbm9zZSBhZ2FpbnN0IHRoZSBidW1wZXIgLS1cbiAqICBzdGF5cyBhIGNyZWFzZS4gV2l0aG91dCB0aGlzIGV2ZXJ5IHF1YWQgdGhlIHJvdW5kaW5ncyBiZW5kIHNwbGl0cyBpbnRvIHR3byBkaWZmZXJlbnRseSBsaXRcbiAqICB0cmlhbmdsZXMsIHdoaWNoIGlzIHRoZSBcImJsb2NreVwiIGEgdmlld2VyIHNlZXMgYmVmb3JlIGFueSBzaWxob3VldHRlLiAqL1xuZnVuY3Rpb24gc21vb3RoTm9ybWFscyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXhEZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBpZiAoIW5ybSB8fCBnZW8uZ2V0SW5kZXgoKSkgcmV0dXJuIGdlbztcbiAgY29uc3QgbiA9IHAuY291bnQsIGNvc0xpbSA9IE1hdGguY29zKG1heERlZyAqIE1hdGguUEkgLyAxODApO1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgayA9IGAke01hdGgucm91bmQocC5nZXRYKGkpICogMjAwMCl9LCR7TWF0aC5yb3VuZChwLmdldFkoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WihpKSAqIDIwMDApfWA7XG4gICAgY29uc3QgZyA9IGdyb3Vwcy5nZXQoayk7IGlmIChnKSBnLnB1c2goaSk7IGVsc2UgZ3JvdXBzLnNldChrLCBbaV0pO1xuICB9XG4gIGNvbnN0IGZhY2UgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgZmFjZVtpICogM10gPSBucm0uZ2V0WChpKTsgZmFjZVtpICogMyArIDFdID0gbnJtLmdldFkoaSk7IGZhY2VbaSAqIDMgKyAyXSA9IG5ybS5nZXRaKGkpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGNvbnN0IGcgb2YgZ3JvdXBzLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCBpIG9mIGcpIHtcbiAgICAgIGxldCBzeCA9IDAsIHN5ID0gMCwgc3ogPSAwO1xuICAgICAgY29uc3QgYXggPSBmYWNlW2kgKiAzXSwgYXkgPSBmYWNlW2kgKiAzICsgMV0sIGF6ID0gZmFjZVtpICogMyArIDJdO1xuICAgICAgZm9yIChjb25zdCBqIG9mIGcpIHtcbiAgICAgICAgY29uc3QgYnggPSBmYWNlW2ogKiAzXSwgYnkgPSBmYWNlW2ogKiAzICsgMV0sIGJ6ID0gZmFjZVtqICogMyArIDJdO1xuICAgICAgICBpZiAoYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ID49IGNvc0xpbSkgeyBzeCArPSBieDsgc3kgKz0gYnk7IHN6ICs9IGJ6OyB9XG4gICAgICB9XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdChzeCwgc3ksIHN6KSB8fCAxO1xuICAgICAgb3V0W2kgKiAzXSA9IHN4IC8gbDsgb3V0W2kgKiAzICsgMV0gPSBzeSAvIGw7IG91dFtpICogMyArIDJdID0gc3ogLyBsO1xuICAgIH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBQSUxMQVIgU1RSSVA6IHRoZSBwaWxsYXIgcG9seWdvbiBzd2VwdCBvbmx5IGBzdHJpcFdgIGRlZXAgYXQgZWFjaCBvdXRlciBlZGdlIG9mIGB3aWR0aGAsXG4gKiAgbWlycm9yZWQsIGFuZCBzaGFwZWQgZXhhY3RseSBhcyB0aGUgYm9keS4gVGhlIG9sZCBmdWxsLXdpZHRoIHN3ZWVwIHB1dCBhIHNsYWIgYWNyb3NzIHRoZVxuICogIHdpbmRzY3JlZW4gd2hlcmV2ZXIgdGhlIEEtcGlsbGFyIHBvbHlnb24gbGF5IG9uIHRoZSByYWtlIC0tIGEgcGlsbGFyIGlzIGF0IHRoZSBzaWRlIG9mIHRoZVxuICogIGdsYXNzLCBub3QgdGhyb3VnaCBpdC4gVGhlIG1pcnJvcmVkIGhhbGYgaGFzIGl0cyB3aW5kaW5nIHJlc3RvcmVkLiAqL1xuZnVuY3Rpb24gc2lkZVN0cmlwKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIHN0cmlwVzogbnVtYmVyLCBvcHRzOiBTaGFwZU9wdHMgPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogc3RyaXBXLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBzdGVwczogMiB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgIC8vIGRlcHRoIG5vdyBydW5zIGFsb25nIC14IGZyb20geCA9IDBcbiAgICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApOyAgICAgICAgICAgIC8vIG91dGVyIGZhY2UgYXQgK3dpZHRoLzIsIGlubmVyIGF0IHdpZHRoLzIgLSBzdHJpcFdcbiAgICBpZiAoc3ggPCAwKSB7XG4gICAgICBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICAgIGNvbnN0IHEgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IHgxID0gcS5nZXRYKGkgKyAxKSwgeTEgPSBxLmdldFkoaSArIDEpLCB6MSA9IHEuZ2V0WihpICsgMSk7XG4gICAgICAgIHEuc2V0WFlaKGkgKyAxLCBxLmdldFgoaSArIDIpLCBxLmdldFkoaSArIDIpLCBxLmdldFooaSArIDIpKTsgcS5zZXRYWVooaSArIDIsIHgxLCB5MSwgejEpO1xuICAgICAgfVxuICAgIH1cbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gICAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgICByZXR1cm4gZztcbiAgfTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbWsoMSksIG1rKC0xKV0pO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgU1RFRUwgV0hFRUw6IHRoZSBzYW1lIGNsb3NlZCBsYXRoZSBhcyB3aGVlbEdlbywgd2l0aCB0aGUgcHJvZmlsZSBvZiBhIHByZXNzZWQtc3RlZWwgcmltIC0tIGFcbiAqIGZsYXQgb3V0ZXIgZmFjZSwgYSBkaXNoZWQgY2VudHJlIHN0ZXBwaW5nIGluIHBhc3QgYSBkYXJrIFZFTlQgUklORyAodGhlIHJvdyBvZiBvdmFsIGhvbGVzLFxuICogZGVsaXZlcmVkIGFzIGEgYmFuZCBvZiB2ZXJ0ZXggY29sb3VyIHJhdGhlciB0aGFuIGFzIGhvbGVzIGEgdHVybnRhYmxlIGdhdGUgd291bGQgcmVhZCB0aHJvdWdoKSxcbiAqIGEgc21hbGwgaHViIGNhcCBzdGFuZGluZyBwcm91ZCAtLSBhbmQgYSBjaHVua2llciB0eXJlIHdob3NlIHRyZWFkIHJpbmcgYWx0ZXJuYXRlcyBhIGxpZ2h0ZXIgYW5kXG4gKiBhIGRhcmtlciB0b25lIHNlZ21lbnQgYnkgc2VnbWVudCwgc28gdGhlIGx1Z3MgcmVhZCBhdCBwcm9wIGRpc3RhbmNlIGZvciB6ZXJvIGdlb21ldHJ5LiBQZXItcG9pbnRcbiAqIGNvbG91cnMgcmlkZSB0aGUgbGF0aGUncyBzZWdtZW50LW1ham9yIHZlcnRleCBvcmRlciBleGFjdGx5IGFzIGluIHdoZWVsR2VvLlxuICovXG5mdW5jdGlvbiBzdGVlbFdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIHZlbnRIZXg6IG51bWJlciwgbHVnSGV4OiBudW1iZXIsIGRpc2ggPSAwLjUwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCBkID0gaHcgKiBkaXNoO1xuICAvLyBbcmFkaXVzLCBheGlhbF0gYW5kIGEgY29sb3VyIGNsYXNzIHBlciBwb2ludDogMCByaW0sIDEgdmVudCByaW5nLCAyIHR5cmUgc2lkZXdhbGwsIDMgdHJlYWRcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtZCArIDAuMDJdLCBbclJpbSAqIDAuMjIsIC1kICsgMC4wMl0sIFtyUmltICogMC4yNCwgLWRdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gaHViIGNhcFxuICAgIFtyUmltICogMC40MCwgLWRdLCBbclJpbSAqIDAuNDIsIC1kIC0gMC4wMDZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNoIGZsb29yXG4gICAgW3JSaW0gKiAwLjYyLCAtZCAtIDAuMDA2XSwgW3JSaW0gKiAwLjY0LCAtaHcgKiAwLjg2XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlbnQgcmluZyAoZGFyaylcbiAgICBbclJpbSAqIDAuOTAsIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45MF0sIFtyUmltLCAtaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAvLyByaW0gZmFjZSBhbmQgbGlwXG4gICAgW3JUeXJlICogMC44OCwgLWh3XSwgW3JUeXJlICogMC45NywgLWh3ICogMC44Nl0sIFtyVHlyZSwgLWh3ICogMC43MF0sICAgICAgICAgICAgICAgLy8gc2lkZXdhbGxcbiAgICBbclR5cmUsIGh3ICogMC43MF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYWRcbiAgICBbclR5cmUgKiAwLjk3LCBodyAqIDAuODZdLCBbclR5cmUgKiAwLjg4LCBod10sIFtyUmltLCBodyAqIDAuOThdLCAgICAgICAgICAgICAgICAgICAvLyBmYXIgc2lkZXdhbGxcbiAgICBbclJpbSwgaHcgKiAwLjg4XSwgW3JSaW0gKiAwLjMwLCBodyAqIDAuODBdLCBbMCwgaHcgKiAwLjgwXSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2sgb2YgdGhlIHJpbVxuICBdO1xuICBjb25zdCBjbHMgPSBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMiwgMiwgMywgMywgMiwgMiwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IEMgPSBbbmV3IFRIUkVFLkNvbG9yKHJpbUhleCksIG5ldyBUSFJFRS5Db2xvcih2ZW50SGV4KSwgbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBuZXcgVEhSRUUuQ29sb3IobHVnSGV4KV07XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGogPSBpICUgcHRzLmxlbmd0aCwgcyA9IE1hdGguZmxvb3IoaSAvIHB0cy5sZW5ndGgpO1xuICAgIGxldCBjID0gQ1tjbHNbal1dO1xuICAgIGlmIChjbHNbal0gPT09IDMpIGMgPSAocyAlIDIgPT09IDApID8gY3QgOiBDWzNdO1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gOCwgaGV4PzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgbGVuICsgciAqIDEuMiwgc2VnLCAxLCBmYWxzZSk7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzLFxuICAgICAgICAgICAgICAgICBvcHRzOiB7IGZsb29yPzogbnVtYmVyLCBzdHJlYWtzPzogbnVtYmVyLCBjbG91ZD86IG51bWJlciwgc3BlY2tsZT86IG51bWJlciwgdG9uZT86IG51bWJlcltdLCB6b25lcz86IG51bWJlcltdW10gfSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBgZmxvb3JgIGlzIHRoZSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBoZWlnaHQgKGkuZS4gb2YgdGhlIHdvcmxkIGhlaWdodCB0aGUgdGlsZSBzcGFucykgYmVsb3dcbiAgICAvLyB3aGljaCB0aGUgd2FzaCBpcyBGVUxMOiBhIGJvZHkgd2hvc2Ugc2lsbCBpcyAwLjQ2IG0gdXAgYSAyIG0gdGlsZSB3YW50cyB0aGUgbXVkIHNvbGlkIHRvXG4gICAgLy8gMC4yMyBhbmQgZmFkaW5nIGZyb20gdGhlcmUsIG5vdCBmYWRpbmcgZnJvbSB0aGUgZ3JvdW5kIGl0IG5ldmVyIHJlYWNoZXMuXG4gICAgY29uc3QgZmwgPSBNYXRoLm1pbihjb3ZlcmFnZSwgb3B0cy5mbG9vciA/PyAwKTtcbiAgICAvLyBgdG9uZWAgaXMgdGhlIE1VRCBhcyBhIHJhdGlvIG9mIHRoZSBlbnZlbG9wZSwgZm9yIGEgcGFpbnQgd2hvc2UgZW52ZWxvcGUgaXMgdGhlIHBlci1jaGFubmVsXG4gICAgLy8gbWF4IG9mIGNsZWFuIHBhaW50IGFuZCBtdWQgKGEgZ3JlZW4gd2hvc2UgbXVkIGlzIHRhbiBpcyBicmlnaHRlciBpbiByZWQsIGRhcmtlciBpbiBncmVlbik6XG4gICAgLy8gdW5zZXQsIHRoZSBtdWQgaXMgd2hpdGUgLS0gdGhlIGVudmVsb3BlIGl0c2VsZi5cbiAgICBjb25zdCBUID0gb3B0cy50b25lID8gb3B0cy50b25lLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB2KSkpKSA6IG51bGw7XG4gICAgY29uc3QgbXVkID0gKGE6IG51bWJlcikgPT4gVCA/IGByZ2JhKCR7VFswXX0sJHtUWzFdfSwke1RbMl19LCR7YX0pYCA6IGByZ2JhKDI1NSwyNTIsMjQ0LCR7YX0pYDtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMgKiAoMSAtIGZsKSwgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBUID8gbXVkKDAuODgpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCBUID8gbXVkKDAuNDUpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGB6b25lc2AgYXJlIFt1MCwgdTEsIHdlaWdodF0gc3BhbnMgb2YgdGhlIHRpbGUncyB3aWR0aCB0aGUgc3ByYXkgY29uY2VudHJhdGVzIGluIC0tIHdpdGhcbiAgICAvLyB0aGUgdGlsZSBmaXR0ZWQgdG8gdGhlIHZlaGljbGUncyBsZW5ndGggKGhlaWdodFVWIHVTY2FsZSA9IEwpLCB0aGF0IGlzIFwiYmVoaW5kIHRoZSBmcm9udFxuICAgIC8vIHdoZWVsXCIsIFwiYWhlYWQgb2YgdGhlIHJlYXIgYXJjaFwiLCBcImFsb25nIHRoZSBiZWQgc2lkZVwiOiB3aGVyZSBhIHdoZWVsIGFjdHVhbGx5IHRocm93cyBtdWQuXG4gICAgY29uc3Qgem9uZXMgPSBvcHRzLnpvbmVzID8/IFtbMCwgMSwgMV1dO1xuICAgIGNvbnN0IHpzdW0gPSB6b25lcy5yZWR1Y2UoKGFjYywgem4pID0+IGFjYyArIHpuWzJdLCAwKTtcbiAgICBjb25zdCBwaWNrVSA9ICgpID0+IHsgbGV0IHQgPSBybmQoKSAqIHpzdW07IGZvciAoY29uc3Qgem4gb2Ygem9uZXMpIHsgaWYgKHQgPCB6blsyXSkgcmV0dXJuICh6blswXSArIHJuZCgpICogKHpuWzFdIC0gem5bMF0pKSAqIHM7IHQgLT0gem5bMl07IH0gcmV0dXJuIHJuZCgpICogczsgfTtcbiAgICAvLyBEVVNUIEZJTE06IHNvZnQgY2xvdWR5IHBhdGNoZXMgb2YgdGhlIGVudmVsb3BlIG92ZXIgdGhlIGNsZWFuIHBhaW50IGV2ZXJ5d2hlcmUsIHNvIHRoZVxuICAgIC8vIHVwcGVyIGJvZHkgaXMgbm90IGEgZmxhdCBmaWxsIC0tIHRoZSBwbGF0ZSdzIGdyZWVuIGlzIGEgZHVsbCwgZHVzdHkgZ3JlZW4uXG4gICAgaWYgKG9wdHMuY2xvdWQpIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSBvcHRzLmNsb3VkICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIG11ZChhKSk7IGcyLmFkZENvbG9yU3RvcCgxLCBtdWQoMCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BSQVk6IHRoZSBtdWQgYSB3aGVlbCB0aHJvd3MgaXMgYSBmaWVsZCBvZiBzbWFsbCBzcGxhdHMgc3RyZWFrZWQgYWxvbmcgdGhlIGRpcmVjdGlvbiBvZlxuICAgIC8vIHRyYXZlbCAodSksIGRlbnNlc3QganVzdCBhYm92ZSB0aGUgd2FzaCBhbmQgdGhpbm5pbmcgdXB3YXJkIGluIGNsdXN0ZXJzIC0tIG5vdCBhIGdyYWRpZW50LlxuICAgIGlmIChvcHRzLnN0cmVha3MpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IGN4MCA9IHBpY2tVKCksIGJhbmQgPSBjb3ZlcmFnZTtcbiAgICAgIGNvbnN0IGN5MCA9IHMgLSBzICogKGZsICsgTWF0aC5wb3cocm5kKCksIDEuNikgKiAoYmFuZCAtIGZsKSk7XG4gICAgICBjb25zdCBjb3VudCA9IDYgKyBNYXRoLmZsb29yKHJuZCgpICogMTgpLCBzcHJlYWQgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjeDAgKyAocm5kKCkgLSAwLjUpICogc3ByZWFkICogMywgeSA9IGN5MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQ7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGggPSAwLjggKyBybmQoKSAqIHMgKiAwLjAwMywgYSA9IDAuMzUgKyBybmQoKSAqIDAuNTU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgdywgaCwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRzLnNwZWNrbGUpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zcGVja2xlOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBwaWNrVSgpLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjMpICogcyAqIGNvdmVyYWdlLCByID0gMC42ICsgcm5kKCkgKiAxLjQsIGEgPSAwLjMgKyBybmQoKSAqIDAuNjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoYSkgOiBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgVCA/IG11ZCgwKSA6ICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdVNjYWxlPzogbnVtYmVyLCB0b3BDbGVhbj86IGJvb2xlYW4gfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGNvbnN0IHVzID0gb3B0cy51U2NhbGUgPz8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgbGV0IHYgPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgICAvLyBBIHRpbGUga2V5ZWQgb24gaGVpZ2h0IGNhbm5vdCB0ZWxsIGEgYm9ubmV0IGZyb20gYSBkb29yIGF0IHRoZSBzYW1lIGhlaWdodCwgYW5kIGEgYm9ubmV0XG4gICAgLy8gaXMgY2xlYW4gd2hlcmUgYSBkb29yIGlzIHNwcmF5ZWQ6IGB0b3BDbGVhbmAgc2VuZHMgZXZlcnkgdXB3YXJkIGZhY2UgaW50byB0aGUgdGlsZSdzIHRvcFxuICAgIC8vIGJhbmQgKHYgMC43NS4uMC45NSksIGFib3ZlIGFueSB3YXNoLCB3aGVyZSBvbmx5IHRoZSBkdXN0IGZpbG0gYXBwbGllcy5cbiAgICBpZiAob3B0cy50b3BDbGVhbiAmJiBheSA+PSAwLjgpIHYgPSAwLjc1ICsgMC4yICogKHYgLSBNYXRoLmZsb29yKHYpKTtcbiAgICB1dltpICogMl0gPSB1IC8gdXM7IHV2W2kgKiAyICsgMV0gPSB2O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3lvdGFDb21tdXRlclZhbk1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnVG95b3RhIENvbW11dGVyIFZhbic7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXIgYm9keSAoc2hhcmVkIHRlbXBsYXRlKSAqL1xuICBjb25zdCBXID0gRy53aWR0aCBhcyBudW1iZXI7XG4gIGNvbnN0IHdoID0gRy53aGVlbHMgYXMgYW55O1xuXG4gIC8vIDEuIEJPRFk6IHRoZSBzaWRlIG91dGxpbmUgY2xvc2VkIGFsb25nIHRoZSBzaWxsIHdpdGggYSB3aGVlbC1hcmNoIG5vdGNoIGF0IGVhY2ggYXhsZSwgc3dlcHRcbiAgLy8gICAgYWNyb3NzIHRoZSB3aWR0aCwgdGhlbiBuYXJyb3dlZCBhYm92ZSB0aGUgYmVsdCAodHVtYmxlaG9tZSkgYW5kIHJvdW5kZWQgaW4gcGxhbiBhdCB0aGUgZW5kcy5cbiAgY29uc3Qgb3V0bGluZTogbnVtYmVyW11bXSA9IChHLm91dGxpbmUgYXMgbnVtYmVyW11bXSkuc2xpY2UoKTtcbiAgY29uc3Qgc2lsbCA9IEcuc2lsbCBhcyBudW1iZXI7XG4gIGNvbnN0IHJBID0gd2guYXJjaCBhcyBudW1iZXI7XG4gIGNvbnN0IGFyY2hQdHMgPSAoemM6IG51bWJlcikgPT4geyBjb25zdCBwOiBudW1iZXJbXVtdID0gW107IGZvciAobGV0IGkgPSAwOyBpIDw9IDg7IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gODsgcC5wdXNoKFt6YyArIE1hdGguY29zKGEpICogckEsIHdoLnIgKyBNYXRoLnNpbihhKSAqIHJBXSk7IH0gcmV0dXJuIHA7IH07XG4gIGNvbnN0IHpSZWFyU2lsbCA9IG91dGxpbmVbb3V0bGluZS5sZW5ndGggLSAxXVswXSwgekZyb250U2lsbCA9IG91dGxpbmVbMF1bMF07XG4gIGNvbnN0IHNpbGxSdW46IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guelIsIHdoLnpGXSkge1xuICAgIGlmICh6YyAtIHJBID4gelJlYXJTaWxsICYmIHpjICsgckEgPCB6RnJvbnRTaWxsKSBzaWxsUnVuLnB1c2goLi4uYXJjaFB0cyh6YykpO1xuICB9XG4gIGNvbnN0IHByb2ZpbGUgPSBvdXRsaW5lLmNvbmNhdChzaWxsUnVuLmxlbmd0aCA/IHNpbGxSdW4gOiBbXSk7XG4gIC8vIGBzaGFwZWAgbWF5IGFkZCBzdGVwcyBhbmQgc2hvdWxkZXIgLyBub3NlIC8gdGFpbCByb3VuZGluZ3M7IHRoZSBib2R5J3Mgb3duIHByb2ZpbGUgYW5kIHdpZHRoXG4gIC8vIGFyZSB0aGUgcmVmZXJlbmNlIGV2ZXJ5IHByb3VkIGJhbmQgaXMgcm91bmRlZCBhZ2FpbnN0LCBzbyB0aGV5IGFyZSBzZXQgaGVyZSBhbmQgbm90IHBlciBjZmcuXG4gIGNvbnN0IHNoYXBlT3B0czogYW55ID0geyB0dW1ibGU6IEcudHVtYmxlLCBwbGFuOiBHLnBsYW4sIC4uLigoRy5zaGFwZSBhcyBhbnkpID8/IHt9KSwgYmFzZVdpZHRoOiBXLCB0b3BPZjogcHJvZmlsZSB9O1xuICBjb25zdCBib2R5R2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFt0aW50R2VvKHNpZGVFeHRydWRlKHByb2ZpbGUsIFcsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLmJvZHlCb3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgYm9keUdlb3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgZm9yIChjb25zdCBleCBvZiAoRy5ib2R5RXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgYm9keUdlb3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGV4LnBvbHksIGV4LndpZHRoID8/IFcsIGV4LnNoYXBlID8/IHt9KSwgZXguaGV4ID8/IEcucGFpbnRIZXgpKTtcbiAgfVxuICBjb25zdCB1dk9wdHMgPSB7IHVTY2FsZTogRy5tdWRVU2NhbGUgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLCB0b3BDbGVhbjogISFHLm11ZFRvcENsZWFuIH07XG4gIGNvbnN0IGJvZHlHZW8gPSBoZWlnaHRVVihtZXJnZUdlb3MoYm9keUdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgY29uc3QgYm9keSA9IGFkZCgnYm9keScsICdCb2R5IHNoZWxsJywgYm9keUdlbywgJ3BhaW50Jyk7XG4gIGlmIChHLmNvbGxpZGVyKSBjb2xsaWRlcnNbJ2JvZHknXSA9IEcuY29sbGlkZXI7XG5cbiAgLy8gMi4gR0xBU1M6IHRoZSBnbGFzc2hvdXNlIHBvbHlnb24gb2Zmc2V0IG91dHdhcmQgc28gZXZlcnkgcGFuZSBzdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkncyBvd25cbiAgLy8gICAgcmFrZWQgZmFjZXMsIHN3ZXB0IGF0IHRoZSBib2R5IHdpZHRoIHBsdXMgdGhlIHNhbWUgbWFyZ2luLCBuYXJyb3dlZCBieSB0aGUgc2FtZSB0dW1ibGVob21lLlxuICBjb25zdCBnbGFzc0dlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgZ2wgPSBHLmdsYXNzIGFzIGFueTtcbiAgaWYgKGdsPy5wb2x5KSBnbGFzc0dlb3MucHVzaChzaWRlRXh0cnVkZShvZmZzZXRQb2x5KGdsLnBvbHksIGdsLnByb3VkID8/IDAuMDA2KSwgVyArIDIgKiAoZ2wucHJvdWQgPz8gMC4wMDYpLCBzaGFwZU9wdHMpKTtcbiAgZm9yIChjb25zdCBiIG9mIChnbD8uYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdsYXNzR2Vvcy5wdXNoKHJib3goYikpO1xuICBpZiAoZ2xhc3NHZW9zLmxlbmd0aCkgYWRkKCdnbGF6aW5nJywgJ0dsYXppbmcnLCB0aW50R2VvKG1lcmdlR2VvcyhnbGFzc0dlb3MpLCBnbC5oZXggPz8gMHhmZmZmZmYpLCAnZ2xhc3MnKTtcblxuICAvLyAzLiBQSUxMQVJTIGFuZCByb29mIGRldGFpbHMgcmlkZSB0aGUgYm9keSdzIHBhaW50IGJ1dCBhcmUgYSBzZXBhcmF0ZSBtZXJnZSBzbyB0aGV5IGNhbiBzdGFuZFxuICAvLyAgICBwcm91ZCBvZiB0aGUgZ2xhc3M7IHRoZXkgam9pbiB0aGUgYm9keSBjb21wb25lbnQgKG9uZSBkcmF3IGNhbGwpIGJ5IGJlaW5nIG1lcmdlZCBpbi5cbiAgY29uc3QgcGlsbGFyR2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHBsIG9mIChHLnBpbGxhcnMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgLy8gYSBwbGFpbiBwb2x5Z29uIHN3ZWVwcyB0aGUgZnVsbCB3aWR0aCAodGhlIG9sZCBiZWhhdmlvdXIpOyB7IHBvbHksIHN0cmlwIH0gc3dlZXBzIG9ubHkgYVxuICAgIC8vIHN0cmlwIHRoYXQgZGVlcCBhdCBlYWNoIHNpZGUsIHdoaWNoIGlzIHdoYXQgYSBwaWxsYXIgYmVzaWRlIGEgcGFuZSBpc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBsKSkgcGlsbGFyR2Vvcy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUocGwsIFcgKyAyICogMC4wMTMsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgICBlbHNlIHBpbGxhckdlb3MucHVzaCh0aW50R2VvKHNpZGVTdHJpcChwbC5wb2x5LCBXICsgMiAqIChwbC5wcm91ZCA/PyAwLjAxMyksIHBsLnN0cmlwID8/IDAuMTAsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgfVxuICBpZiAocGlsbGFyR2Vvcy5sZW5ndGgpIHtcbiAgICBjb25zdCBwZyA9IGhlaWdodFVWKG1lcmdlR2VvcyhwaWxsYXJHZW9zKSwgRy5tdWRTY2FsZSA/PyAxLjIsIHV2T3B0cyk7XG4gICAgY29uc3QgbWVyZ2VkID0gaGVpZ2h0VVYobWVyZ2VHZW9zKFtib2R5Lmdlb21ldHJ5IGFzIFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwZ10pLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgICBib2R5Lmdlb21ldHJ5ID0gbWVyZ2VkO1xuICB9XG5cbiAgLy8gNC4gVFJJTTogYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcywgc3RlcHMsIGFyY2ggZmxhcmVzIGFuZCB0aGUgaW5uZXIgd2luZ3MgdGhhdFxuICAvLyAgICBzdG9wIHRoZSB0aHJvdWdoLWFyY2ggcmVhZGluZyBhcyBkYXlsaWdodCAtLSBldmVyeSBvbmUgYSB0aW50ZWQgYm94IG9uIE9ORSB3aGl0ZSBtYXRlcmlhbC5cbiAgY29uc3QgdHJpbUxpc3Q6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLnRyaW0gPz8gW10pIGFzIG51bWJlcltdW10pIHRyaW1MaXN0LnB1c2goYik7XG4gIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChHLnRyaW1NaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIHRyaW1MaXN0LnB1c2goYik7XG4gIGNvbnN0IHRyaW1HZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW3RpbnRlZEJveGVzKHRyaW1MaXN0KV07XG4gIGZvciAoY29uc3QgemMgb2YgW3doLnpGLCB3aC56Ul0pIHtcbiAgICBpZiAod2guZmxhcmUpIHRyaW1HZW9zLnB1c2goZmxhcmUoemMsIHdoLnIsIHJBICsgMC4wMDUsIHJBICsgd2guZmxhcmUsIFcgLyAyIC0gMC4wMTIsIFcgLyAyICsgKHdoLmZsYXJlT3V0ID8/IDAuMDMpLCB3aC5mbGFyZUhleCA/PyAweDJhMmEyYSkpO1xuICAgIC8vIGlubmVyIHdpbmc6IGEgZGFyayBib3ggYmV0d2VlbiB0aGUgd2hlZWxzJyBpbm5lciBmYWNlcyBmaWxsaW5nIHRoZSBhcmNoIHZvaWRcbiAgICBjb25zdCBpbm5lckhhbGYgPSB3aC50cmFjayAtIHdoLmhhbGZXIC0gMC4wMDU7XG4gICAgdHJpbUdlb3MucHVzaCh0aW50R2VvKGJveEF0KDAsIChzaWxsICsgd2guciArIHJBIC0gMC4wMikgLyAyICsgMC4wLCB6YywgaW5uZXJIYWxmICogMiwgKHdoLnIgKyByQSAtIDAuMDIpIC0gc2lsbCArIDAuMTAsIChyQSAtIDAuMDMpICogMiksIHdoLndlbGxIZXggPz8gMHgyYjI5MjYpKTtcbiAgfVxuICBmb3IgKGNvbnN0IHQgb2YgKEcudHViZXMgPz8gW10pIGFzIGFueVtdKSB0cmltR2Vvcy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgZm9yIChjb25zdCBjIG9mIChHLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGMucnQsIGMucmIsIGMuaCwgYy5zZWcgPz8gMTIpO1xuICAgIGlmIChjLnJ4KSBnLnJvdGF0ZVgoYy5yeCk7IGlmIChjLnJ6KSBnLnJvdGF0ZVooYy5yeik7XG4gICAgZy50cmFuc2xhdGUoYy5hdFswXSwgYy5hdFsxXSwgYy5hdFsyXSk7XG4gICAgdHJpbUdlb3MucHVzaCh0aW50R2VvKGcsIGMuaGV4KSk7XG4gIH1cbiAgYWRkKCd0cmltJywgJ1RyaW0sIGxhbXBzLCBidW1wZXJzIGFuZCB3aGVlbCB3ZWxscycsIG1lcmdlR2Vvcyh0cmltR2VvcyksICd0cmltJyk7XG5cbiAgLy8gNS4gV0hFRUxTOiBvbmUgbGF0aGUsIGZvdXIgKG9yIGhvd2V2ZXIgbWFueSkgaW5zdGFuY2VzLCBlYWNoIGEgbmFtZWQgcGl2b3Qgb24gdGhlIGF4bGUuXG4gIGNvbnN0IHdoZWVsRyA9IHdoLnN0eWxlID09PSAnc3RlZWwnXG4gICAgPyBzdGVlbFdoZWVsR2VvKHdoLnIsIHdoLnJpbSwgd2guaGFsZlcsIHdoLnNlZyA/PyAyNCwgd2gudHlyZUhleCwgd2gucmltSGV4LCB3aC52ZW50SGV4ID8/IDB4NGE0ODQyLCB3aC5sdWdIZXggPz8gd2gudHlyZUhleCwgd2guZGlzaCA/PyAwLjUwKVxuICAgIDogd2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDIwLCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLmRpc2ggPz8gMC41NSk7XG4gIGNvbnN0IHdoZWVsTWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gIGZvciAoY29uc3QgcCBvZiB3aC5wb3NpdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgIHdoZWVsTWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgcFswXSA8IDAgPyBNYXRoLlBJIDogMCksIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKSk7XG4gIH1cbiAgYWRkSW5zdCgnd2hlZWxzJywgJ1doZWVscycsIHdoZWVsRywgJ3RyaW0nLCB3aGVlbE1hdHMpO1xuXG4gIC8vIDYuIEVYVFJBIGNvbXBvbmVudHMgZGVjbGFyZWQgYnkgdGhlIGNmZyAoYSBjb3JydWdhdGVkIHJvb2YsIGEgYmVkIGZsb29yLCBhIGNhbm9weSkgLS0gZWFjaFxuICAvLyAgICBpdHMgb3duIG1hdGVyaWFsIGFuZCBzdWJtaXNzaW9uLCBjb3N0ZWQgaW4gdGhlIGJsb2Nrb3V0LlxuICBmb3IgKGNvbnN0IGV4IG9mIChHLmV4dHJhcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoZXguYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKGV4LmJveGVzTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgdCBvZiAoZXgudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGUgb2YgKGV4LmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGUucG9seSwgZS53aWR0aCwgZS5zaGFwZSA/PyB7fSksIGUuaGV4KSk7XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIGlmIChleC51diA9PT0gJ3dvcmxkJykgZyA9IHdvcmxkVVYoZywgZXgudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoZXgudXYgPT09ICdoZWlnaHQnKSBnID0gaGVpZ2h0VVYoZywgZXgudXZTY2FsZSA/PyAxKTtcbiAgICBhZGQoZXguaWQsIGV4Lm5hbWUsIGcsIGV4Lm1hdGVyaWFsKTtcbiAgfVxuXG4gIC8vIDcuIFBvc3QtY29uc3RydWN0aW9uIGNhbnZhc2VzOiBib3VuZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24gc28gdGhlIHRleHR1cmVsZXNzXG4gIC8vICAgIGRlY2xhcmF0aW9ucyBzdGFuZC4gRXZlcnkgdG9uZSBpcyBhIG1lYXN1cmVkIHJhdGlvIHJlY29yZGVkIG9uIHRoZSBtYXRlcmlhbCBpbiB0aGUgc3BlYy5cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzLCB0Lm9wdHMgPz8ge30pO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAnY29ycnVnYXRpb24nKSB0ZXggPSBjb3JydWdhdGlvblRpbGUodC5zaXplID8/IDI1NiwgdC5waXRjaCA/PyAyNCwgdC5sb3cgPz8gMC43MiwgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdwbGFuaycpIHRleCA9IHBsYW5rVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJvYXJkcyA/PyA2LCB0LnNlZWQgPz8gNSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3J1c3QnKSB0ZXggPSBydXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LnJhdGlvLCB0LnNlZWQgPz8gNywgdC5kZW5zaXR5ID8/IDkwKTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlVG95b3RhQ29tbXV0ZXJWYW5Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBK0N2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBLFVBQ1osWUFBWTtBQUFBLFlBQ1YsS0FBSztBQUFBLFlBQ0wsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLFFBQVE7QUFBQSxZQUNOLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDTixLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsU0FBUztBQUFBLFlBQ1A7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1Q7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsS0FBSztBQUFBLE1BQ0wsT0FBTztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsU0FBUztBQUFBLE1BQ1QsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLE1BQ1IsU0FBUztBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsYUFBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxnQkFBZ0I7QUFBQSxNQUNkO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtB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
