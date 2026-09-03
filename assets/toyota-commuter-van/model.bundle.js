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

// ../repo/scratch/toyota-commuter-van/src/createObjectModel.ts
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
      "color": 5793645,
      "roughness": 0.42,
      "metalness": 0.05,
      "opacity": 0.94
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
      "coverage": 0.4,
      "size": 512,
      "opts": {
        "tone": [
          0.8479860277262307,
          0.8272168947311712,
          0.7908026579474738
        ],
        "floor": 0.17,
        "streaks": 90,
        "cloud": 0.16,
        "speckle": 1500,
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
    },
    {
      "material": "glass",
      "kind": "glass",
      "low": [
        0.5863758882626806,
        0.5943174535355693,
        0.5969518390571021
      ],
      "seed": 43,
      "size": 256,
      "streaks": 5
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
      "uvY": [
        1.2,
        1.78
      ],
      "uScale": 1.6,
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
            2.5532,
            1.3977
          ],
          [
            2.4539,
            1.5638
          ],
          [
            2.3292,
            1.7118
          ],
          [
            2.1823,
            1.8378
          ],
          [
            2.0823,
            1.8378
          ],
          [
            2.2292,
            1.7118
          ],
          [
            2.3539,
            1.5638
          ],
          [
            2.4532,
            1.3977
          ],
          [
            2.5246,
            1.2178
          ]
        ],
        "strip": 0.1,
        "proud": 6e-3
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
      },
      {
        "poly": [
          [
            2.3,
            1.19
          ],
          [
            2.3,
            1.225
          ],
          [
            -2.55,
            1.225
          ],
          [
            -2.55,
            1.19
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
      },
      {
        "poly": [
          [
            1.05,
            1.76
          ],
          [
            1.05,
            1.79
          ],
          [
            -2.55,
            1.79
          ],
          [
            -2.55,
            1.76
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
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
      "tyreHex": 6182736,
      "lugHex": 4867133,
      "rimHex": 6050376,
      "ventHex": 3024416,
      "dish": 0.5,
      "flare": 0,
      "wellHex": 2828582,
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
        3024928,
        0,
        0.36,
        2.69,
        1.1,
        0.1,
        0.1
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
        2828582,
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
        11041914,
        0.946,
        1.02,
        -0.15,
        4e-3,
        0.03,
        4.3
      ],
      [
        8035484,
        0.946,
        0.98,
        -0.15,
        4e-3,
        0.025,
        4.3
      ],
      [
        8423592,
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
    if (opts.crown && y > opts.crown.yMin) {
      const hwc = Math.max(1e-3, baseHalf * tf * pf) + extra;
      const t = Math.min(1, Math.abs(x) / hwc), f = opts.crown.fade ? Math.min(1, (y - opts.crown.yMin) / opts.crown.fade) : 1;
      y += opts.crown.dy * (1 - t * t) * f;
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
function wheelGeo(rTyre, rRim, halfW, seg, tyreHex, rimHex, dish = 0.55, rimBand = 4) {
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
  const rimPoint = (j) => j <= rimBand || j >= pts.length - 1 - rimBand;
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
function alloyWheelGeo(rTyre, rRim, halfW, seg, tyreHex, rimHex, windowHex, lugHex, dish = 0.35, spokeN = 10, spokeW = 0.16) {
  const hw = halfW, d = hw * dish;
  const pts = [
    [0, -d + 0.015],
    [rRim * 0.16, -d + 0.015],
    [rRim * 0.18, -d],
    // centre cap
    [rRim * 0.2, -d],
    [rRim * 0.86, -d],
    // window floor (dark)
    [rRim * 0.88, -hw * 0.88],
    [rRim, -hw * 0.92],
    [rRim, -hw * 0.98],
    // rim lip
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
  const cls = [0, 0, 0, 1, 1, 0, 0, 0, 2, 2, 3, 3, 2, 2, 0, 0, 0, 0];
  const g = new THREE.LatheGeometry(pts.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  const n = g.getAttribute("position").count;
  const col = new Float32Array(n * 3);
  const C = [new THREE.Color(rimHex), new THREE.Color(windowHex), new THREE.Color(tyreHex), new THREE.Color(lugHex)];
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
  const bars = [];
  const r0 = rRim * 0.17, r1 = rRim * 0.89, len = r1 - r0, t = 0.024;
  for (let i = 0; i < spokeN; i++) {
    const b = new THREE.BoxGeometry(rRim * spokeW, t, len);
    b.translate(0, -d - 0.0115, r0 + len / 2);
    b.rotateY(i / spokeN * Math.PI * 2);
    bars.push(tintGeo(b, rimHex));
  }
  const all = mergeGeos([g, ...bars]);
  all.rotateZ(Math.PI / 2);
  all.computeVertexNormals();
  return all;
}
function tube(pts, r, seg = 8, hex, open = false) {
  const parts = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = new THREE.Vector3(pts[i][0], pts[i][1], pts[i][2]);
    const b = new THREE.Vector3(pts[i + 1][0], pts[i + 1][1], pts[i + 1][2]);
    const d = b.clone().sub(a);
    const len = d.length();
    if (len < 1e-6) continue;
    const g = new THREE.CylinderGeometry(r, r, len + r * 1.2, seg, 1, open);
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
function lugs(rTyre, halfW, o) {
  const n = o.n ?? 16, h = o.h ?? 0.04, parts = [];
  for (let i = 0; i < n; i++) {
    const g = new THREE.BoxGeometry(halfW * 2 * (o.w ?? 0.85), h, o.d ?? 0.06);
    g.rotateY((i % 2 === 0 ? 1 : -1) * (o.skew ?? 0.4));
    g.translate(0, rTyre - h * 0.35, 0);
    g.rotateX(i / n * Math.PI * 2 + (o.phase ?? 0));
    parts.push(g);
  }
  return tintGeo(mergeGeos(parts), o.hex ?? 5592405);
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
    else pillarGeos.push(tintGeo(sideStrip(pl.poly, W + 2 * (pl.proud ?? 0.013), pl.strip ?? 0.1, shapeOpts), pl.hex ?? G.paintHex));
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
  const wheelG = wh.style === "alloy" ? alloyWheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 24, wh.tyreHex, wh.rimHex, wh.windowHex ?? 2762790, wh.lugHex ?? wh.tyreHex, wh.dish ?? 0.35, wh.spokes ?? 10, wh.spokeW ?? 0.16) : wh.style === "steel" ? steelWheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 24, wh.tyreHex, wh.rimHex, wh.ventHex ?? 4868162, wh.lugHex ?? wh.tyreHex, wh.dish ?? 0.5) : wheelGeo(wh.r, wh.rim, wh.halfW, wh.seg ?? 20, wh.tyreHex, wh.rimHex, wh.dish ?? 0.55);
  const wheelG2 = wh.lugs ? mergeGeos([wheelG, lugs(wh.r, wh.halfW, wh.lugs)]) : wheelG;
  const wheelMats = [];
  for (const p of wh.positions) {
    wheelMats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(p[0], p[1], p[2]),
      new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0, 1, 0), p[0] < 0 ? Math.PI : 0),
      new THREE.Vector3(1, 1, 1)
    ));
  }
  addInst("wheels", "Wheels", wheelG2, "trim", wheelMats);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVG95b3RhIENvbW11dGVyIFZhbiAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxLjg4IHggMi4yOCB4IDUuMzggbSAobWlycm9ycyB0byAyLjA2KSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogZm9yd2FyZC5cbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFZFSElDTEVTLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFNJREUtUFJPRklMRSBFWFRSVVNJT04gLS0gYVxuICogY2xvc2VkIHBvbHlnb24gaW4gdGhlICh6LCB5KSBwbGFuZSBzd2VwdCBhY3Jvc3MgdGhlIHdpZHRoIGFuZCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4IGZvclxuICogdHVtYmxlaG9tZSBhbmQgcGxhbiByb3VuZGluZyAtLSBwbHVzIGEgbGF0aGVkIFdIRUVMIHJldm9sdmVkIGFib3V0IGl0cyBheGxlIGFuZCBhIHBvbHlsaW5lIFRVQkVcbiAqIGZvciBoYW5kbGViYXJzLCByYWlscyBhbmQgZnJhbWVzLiBFdmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgb25lIG1hdGVyaWFsIGlzIGNhcnJpZWQgYXMgYVxuICogdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLCBzbyBhIHR3by10b25lIGJvZHksIGEgYmxhY2sgdHlyZSBvbiBhIHNpbHZlciByaW0gYW5kIGFuIGFtYmVyXG4gKiBpbmRpY2F0b3IgYWxsIHJpZGUgb25lIHNoYWRlciBhbmQgb25lIHN1Ym1pc3Npb24uXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJ0b3lvdGEtY29tbXV0ZXItdmFuXCIsXG4gICAgXCJuYW1lXCI6IFwiVG95b3RhIENvbW11dGVyIFZhblwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlRveW90YUNvbW11dGVyVmFuXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuODggeCAyLjI4IHggNS4zOCBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxcbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNDE0NjI3MSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA1NzkzNjQ1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjA1LFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45NFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRyaW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9XG4gICAgXSxcbiAgICBcInRpbGVzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInBhaW50XCIsXG4gICAgICAgIFwia2luZFwiOiBcIm11ZFwiLFxuICAgICAgICBcImJhc2VcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VlZFwiOiA0MSxcbiAgICAgICAgXCJjb3ZlcmFnZVwiOiAwLjQsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwib3B0c1wiOiB7XG4gICAgICAgICAgXCJ0b25lXCI6IFtcbiAgICAgICAgICAgIDAuODQ3OTg2MDI3NzI2MjMwNyxcbiAgICAgICAgICAgIDAuODI3MjE2ODk0NzMxMTcxMixcbiAgICAgICAgICAgIDAuNzkwODAyNjU3OTQ3NDczOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJmbG9vclwiOiAwLjE3LFxuICAgICAgICAgIFwic3RyZWFrc1wiOiA5MCxcbiAgICAgICAgICBcImNsb3VkXCI6IDAuMTYsXG4gICAgICAgICAgXCJzcGVja2xlXCI6IDE1MDAsXG4gICAgICAgICAgXCJ6b25lc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgIDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgMC42NyxcbiAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgICAwLjk0LFxuICAgICAgICAgICAgICAxLjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjk0LFxuICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgMC4zXG4gICAgICAgICAgICBdXG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJraW5kXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJsb3dcIjogW1xuICAgICAgICAgIDAuNTg2Mzc1ODg4MjYyNjgwNixcbiAgICAgICAgICAwLjU5NDMxNzQ1MzUzNTU2OTMsXG4gICAgICAgICAgMC41OTY5NTE4MzkwNTcxMDIxXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VlZFwiOiA0MyxcbiAgICAgICAgXCJzaXplXCI6IDI1NixcbiAgICAgICAgXCJzdHJlYWtzXCI6IDVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGl2b3RzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtZnJvbnQtbFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAwLjc4LFxuICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgMS42NFxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMCxcbiAgICAgICAgXCJub3RlXCI6IFwiZnJvbnQgbGVmdCBodWIsIHJvbGxzIGFib3V0IHRoZSBheGxlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLWZyb250LXJcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgLTAuNzgsXG4gICAgICAgICAgMC4zMyxcbiAgICAgICAgICAxLjY0XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAxLFxuICAgICAgICBcIm5vdGVcIjogXCJmcm9udCByaWdodCBodWJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtcmVhci1sXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgMC4zMyxcbiAgICAgICAgICAtMS40N1xuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMixcbiAgICAgICAgXCJub3RlXCI6IFwicmVhciBsZWZ0IGh1YlwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ3aGVlbC1yZWFyLXJcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgLTAuNzgsXG4gICAgICAgICAgMC4zMyxcbiAgICAgICAgICAtMS40N1xuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMyxcbiAgICAgICAgXCJub3RlXCI6IFwicmVhciByaWdodCBodWJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcIndpZHRoXCI6IDEuODgsXG4gICAgICBcInNpbGxcIjogMC40LFxuICAgICAgXCJwYWludEhleFwiOiAxNjc3NzIxNSxcbiAgICAgIFwibXVkU2NhbGVcIjogMi4zLFxuICAgICAgXCJtdWRVU2NhbGVcIjogNS4zOCxcbiAgICAgIFwibXVkVG9wQ2xlYW5cIjogdHJ1ZSxcbiAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICBcInNoYXBlXCI6IFwiY29udmV4XCIsXG4gICAgICAgIFwibG9jYWxDZW50ZXJcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMS4xNCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgIDAuOTQsXG4gICAgICAgICAgMS4xNCxcbiAgICAgICAgICAyLjY5XG4gICAgICAgIF0sXG4gICAgICAgIFwibm90ZXNcIjogXCJEZWNsYXJlZCBvbiB0aGUgYXNzZXQgYXMgY29udmV4OiB0aGUgaHVsbCBvZiB0aGUgYm9keSBzaGVsbC5cIlxuICAgICAgfSxcbiAgICAgIFwib3V0bGluZVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAyLjYyLFxuICAgICAgICAgIDAuNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42OSxcbiAgICAgICAgICAwLjZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNjksXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42NzI0LFxuICAgICAgICAgIDEuMDQyNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42MyxcbiAgICAgICAgICAxLjA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMS4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi41OCxcbiAgICAgICAgICAxLjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNTIyNyxcbiAgICAgICAgICAxLjM1NjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNDQ0NCxcbiAgICAgICAgICAxLjUwMzNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMzQ2NSxcbiAgICAgICAgICAxLjYzOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4yMzA5LFxuICAgICAgICAgIDEuNzU3OVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4wOTk4LFxuICAgICAgICAgIDEuODYwN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS45MDE2LFxuICAgICAgICAgIDEuOTUyNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS42OTU4LFxuICAgICAgICAgIDIuMDI1M1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS40ODM5LFxuICAgICAgICAgIDIuMDc3OFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4yNjgsXG4gICAgICAgICAgMi4xMDk0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjA1LFxuICAgICAgICAgIDIuMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjM5LFxuICAgICAgICAgIDIuMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjUwNDgsXG4gICAgICAgICAgMi4wOTcyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42MDIxLFxuICAgICAgICAgIDIuMDMyMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNjY3MixcbiAgICAgICAgICAxLjkzNDhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjY5LFxuICAgICAgICAgIDEuODJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjY5LFxuICAgICAgICAgIDAuNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNjIsXG4gICAgICAgICAgMC40XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcInR1bWJsZVwiOiB7XG4gICAgICAgIFwiYmVsdFwiOiAxLjI1LFxuICAgICAgICBcInJvb2ZcIjogMi4xMixcbiAgICAgICAgXCJrXCI6IDAuMlxuICAgICAgfSxcbiAgICAgIFwicGxhblwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42OSxcbiAgICAgICAgICAwLjk2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi40LFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMyxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDAuOTVcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICBcInN0ZXBzXCI6IDE0LFxuICAgICAgICBcImVkZ2VCaWFzXCI6IDAuNixcbiAgICAgICAgXCJzaG91bGRlclwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuMjgsXG4gICAgICAgICAgXCJ6TWluXCI6IC0yLjcsXG4gICAgICAgICAgXCJ6TWF4XCI6IDEuOCxcbiAgICAgICAgICBcImZhZGVcIjogMC4zXG4gICAgICAgIH0sXG4gICAgICAgIFwibm9zZVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuNDJcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWlsXCI6IHtcbiAgICAgICAgICBcInJcIjogMC4xMlxuICAgICAgICB9LFxuICAgICAgICBcInNtb290aFwiOiA1MFxuICAgICAgfSxcbiAgICAgIFwiYm9keUV4dHJ1ZGVzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjksXG4gICAgICAgICAgICAgIDIuMDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjEsXG4gICAgICAgICAgICAgIDIuMDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjEsXG4gICAgICAgICAgICAgIDIuMTlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjExMDcsXG4gICAgICAgICAgICAgIDIuMjNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjE0LFxuICAgICAgICAgICAgICAyLjI1OTNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjE4LFxuICAgICAgICAgICAgICAyLjI3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS44MixcbiAgICAgICAgICAgICAgMi4yN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuODYsXG4gICAgICAgICAgICAgIDIuMjU5M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuODg5MyxcbiAgICAgICAgICAgICAgMi4yM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuOSxcbiAgICAgICAgICAgICAgMi4xOVxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJ3aWR0aFwiOiAwLjg2LFxuICAgICAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICAgICAgXCJzdGVwc1wiOiA4LFxuICAgICAgICAgICAgXCJlZGdlQmlhc1wiOiAwLjYsXG4gICAgICAgICAgICBcInNob3VsZGVyXCI6IHtcbiAgICAgICAgICAgICAgXCJyXCI6IDAuMDgsXG4gICAgICAgICAgICAgIFwiek1pblwiOiAtMS45NSxcbiAgICAgICAgICAgICAgXCJ6TWF4XCI6IC0xLjA1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgXCJub3NlXCI6IHtcbiAgICAgICAgICAgICAgXCJyXCI6IDAuMTJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBcInRhaWxcIjoge1xuICAgICAgICAgICAgICBcInJcIjogMC4xMlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwic21vb3RoXCI6IDUwLFxuICAgICAgICAgICAgXCJ0b3BPZlwiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS45LFxuICAgICAgICAgICAgICAgIDIuMDZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjEsXG4gICAgICAgICAgICAgICAgMi4wNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMSxcbiAgICAgICAgICAgICAgICAyLjE5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4xMTA3LFxuICAgICAgICAgICAgICAgIDIuMjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjE0LFxuICAgICAgICAgICAgICAgIDIuMjU5M1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMTgsXG4gICAgICAgICAgICAgICAgMi4yN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuODIsXG4gICAgICAgICAgICAgICAgMi4yN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuODYsXG4gICAgICAgICAgICAgICAgMi4yNTkzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS44ODkzLFxuICAgICAgICAgICAgICAgIDIuMjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjksXG4gICAgICAgICAgICAgICAgMi4xOVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJiYXNlV2lkdGhcIjogMC44NlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiZ2xhc3NcIjoge1xuICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNTkzLFxuICAgICAgICAgICAgMS4xOTA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjUzNzUsXG4gICAgICAgICAgICAxLjM0NzVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuNDYwOSxcbiAgICAgICAgICAgIDEuNDk1NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMi4zNjQ3LFxuICAgICAgICAgICAgMS42MzE4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyLjI1MDcsXG4gICAgICAgICAgICAxLjc1MzRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDIuMTIxLFxuICAgICAgICAgICAgMS44NTgyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjksXG4gICAgICAgICAgICAxLjc4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjcyLFxuICAgICAgICAgICAgMS43OFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMS41MSxcbiAgICAgICAgICAgIDEuNzdcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMzQsXG4gICAgICAgICAgICAxLjc2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjA1LFxuICAgICAgICAgICAgMS43NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuNTIsXG4gICAgICAgICAgICAxLjc2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMi42NixcbiAgICAgICAgICAgIDEuNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTIuNjYsXG4gICAgICAgICAgICAxLjIyXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInByb3VkXCI6IDAuMDA2LFxuICAgICAgICBcImhleFwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJ1dllcIjogW1xuICAgICAgICAgIDEuMixcbiAgICAgICAgICAxLjc4XG4gICAgICAgIF0sXG4gICAgICAgIFwidVNjYWxlXCI6IDEuNixcbiAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDEuNTIsXG4gICAgICAgICAgICAtMi42OTcsXG4gICAgICAgICAgICAxLjMsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAwLjAxNFxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicGlsbGFyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjYyNDYsXG4gICAgICAgICAgICAgIDEuMjE3OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi41NTMyLFxuICAgICAgICAgICAgICAxLjM5NzdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuNDUzOSxcbiAgICAgICAgICAgICAgMS41NjM4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjMyOTIsXG4gICAgICAgICAgICAgIDEuNzExOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi4xODIzLFxuICAgICAgICAgICAgICAxLjgzNzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuMDgyMyxcbiAgICAgICAgICAgICAgMS44Mzc4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjIyOTIsXG4gICAgICAgICAgICAgIDEuNzExOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi4zNTM5LFxuICAgICAgICAgICAgICAxLjU2MzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuNDUzMixcbiAgICAgICAgICAgICAgMS4zOTc3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAyLjUyNDYsXG4gICAgICAgICAgICAgIDEuMjE3OFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjEsXG4gICAgICAgICAgXCJwcm91ZFwiOiAwLjAwNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC45MixcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjIsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuNSxcbiAgICAgICAgICAgICAgMS4yXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMS40LFxuICAgICAgICAgICAgICAxLjJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0xLjQsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTEuNSxcbiAgICAgICAgICAgICAgMS44XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNjgsXG4gICAgICAgICAgICAgIDEuMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgICAgIDEuMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNjgsXG4gICAgICAgICAgICAgIDEuOFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDIuMyxcbiAgICAgICAgICAgICAgMS4xOVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMi4zLFxuICAgICAgICAgICAgICAxLjIyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTUsXG4gICAgICAgICAgICAgIDEuMjI1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMi41NSxcbiAgICAgICAgICAgICAgMS4xOVxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjEsXG4gICAgICAgICAgXCJoZXhcIjogMTE4NDI3MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4wNSxcbiAgICAgICAgICAgICAgMS43NlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4wNSxcbiAgICAgICAgICAgICAgMS43OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTIuNTUsXG4gICAgICAgICAgICAgIDEuNzlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0yLjU1LFxuICAgICAgICAgICAgICAxLjc2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInN0cmlwXCI6IDAuMSxcbiAgICAgICAgICBcImhleFwiOiAxMTg0MjcyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIndoZWVsc1wiOiB7XG4gICAgICAgIFwiclwiOiAwLjMzLFxuICAgICAgICBcInJpbVwiOiAwLjIsXG4gICAgICAgIFwiaGFsZldcIjogMC4xMSxcbiAgICAgICAgXCJ0cmFja1wiOiAwLjc4LFxuICAgICAgICBcInpGXCI6IDEuNjQsXG4gICAgICAgIFwielJcIjogLTEuNDcsXG4gICAgICAgIFwic2VnXCI6IDI0LFxuICAgICAgICBcImFyY2hcIjogMC4zOSxcbiAgICAgICAgXCJzdHlsZVwiOiBcInN0ZWVsXCIsXG4gICAgICAgIFwidHlyZUhleFwiOiA2MTgyNzM2LFxuICAgICAgICBcImx1Z0hleFwiOiA0ODY3MTMzLFxuICAgICAgICBcInJpbUhleFwiOiA2MDUwMzc2LFxuICAgICAgICBcInZlbnRIZXhcIjogMzAyNDQxNixcbiAgICAgICAgXCJkaXNoXCI6IDAuNSxcbiAgICAgICAgXCJmbGFyZVwiOiAwLFxuICAgICAgICBcIndlbGxIZXhcIjogMjgyODU4MixcbiAgICAgICAgXCJwb3NpdGlvbnNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgICAwLjMzLFxuICAgICAgICAgICAgMS42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNzgsXG4gICAgICAgICAgICAwLjMzLFxuICAgICAgICAgICAgMS42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC43OCxcbiAgICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgICAtMS40N1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNzgsXG4gICAgICAgICAgICAwLjMzLFxuICAgICAgICAgICAgLTEuNDdcbiAgICAgICAgICBdXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInRyaW1cIjogW1xuICAgICAgICBbXG4gICAgICAgICAgOTA3OTQzMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMi43LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAwLjI2LFxuICAgICAgICAgIDAuMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNTkyMDg1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuODQsXG4gICAgICAgICAgMi43MDUsXG4gICAgICAgICAgMC45LFxuICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTI4OTY0NjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjgyLFxuICAgICAgICAgIDIuNzIsXG4gICAgICAgICAgMC44NixcbiAgICAgICAgICAwLjAyNSxcbiAgICAgICAgICAwLjAxNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTI4OTY0NjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjg3LFxuICAgICAgICAgIDIuNzIsXG4gICAgICAgICAgMC44NixcbiAgICAgICAgICAwLjAyNSxcbiAgICAgICAgICAwLjAxNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNDQsXG4gICAgICAgICAgMi43MSxcbiAgICAgICAgICAwLjcsXG4gICAgICAgICAgMC4wNSxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzMDI0OTI4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4zNixcbiAgICAgICAgICAyLjY5LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMC4xXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzODE2NTA4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMS4yMjUsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAwLjA1LFxuICAgICAgICAgIDAuMDVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDkwNzk0MzIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjUyLFxuICAgICAgICAgIC0yLjcsXG4gICAgICAgICAgMS41NixcbiAgICAgICAgICAwLjI2LFxuICAgICAgICAgIDAuMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMjgyODU4MixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuMjgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjQsXG4gICAgICAgICAgMC4xNixcbiAgICAgICAgICA0LjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njg2ODAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgLTIuNjk3LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuNzIsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJ0cmltTWlycm9yZWRcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgOTA3OTQzMixcbiAgICAgICAgICAwLjY4LFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDAuNDQsXG4gICAgICAgICAgMC4yNixcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjYyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA5MDc5NDMyLFxuICAgICAgICAgIDAuODQsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAtMi42MixcbiAgICAgICAgICAwLjI0LFxuICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgLTAuOVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTQyMTI1NzYsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjkyLFxuICAgICAgICAgIDIuNjksXG4gICAgICAgICAgMC4zMixcbiAgICAgICAgICAwLjIsXG4gICAgICAgICAgMC4wNCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuMjhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyMDg5OTE0LFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAwLjc0LFxuICAgICAgICAgIDIuNTU1LFxuICAgICAgICAgIDAuMSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjc1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMTU0NjY3MixcbiAgICAgICAgICAwLjg0LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAtMi42OSxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMC40NCxcbiAgICAgICAgICAwLjA2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyNzYzMzA2LFxuICAgICAgICAgIDAuMzIsXG4gICAgICAgICAgMS4zNTgsXG4gICAgICAgICAgMi41NTUsXG4gICAgICAgICAgMC4wMixcbiAgICAgICAgICAwLjM4LFxuICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgIC0wLjQxMDE1MjM3NDIxODY2NzQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4yNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjksXG4gICAgICAgICAgMS40MixcbiAgICAgICAgICAyLjQsXG4gICAgICAgICAgMC4xNixcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njg2ODAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxLjQ0LFxuICAgICAgICAgIDIuMzgsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjE4LFxuICAgICAgICAgIDAuMjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njg2ODAsXG4gICAgICAgICAgMC45NDYsXG4gICAgICAgICAgMS4wNixcbiAgICAgICAgICAwLjU1LFxuICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4xNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAxLjA2LFxuICAgICAgICAgIC0wLjA1LFxuICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgMC4wNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMC45NyxcbiAgICAgICAgICAwLjAwNCxcbiAgICAgICAgICAwLjc0LFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njg2ODAsXG4gICAgICAgICAgMC45NDYsXG4gICAgICAgICAgMC44LFxuICAgICAgICAgIC0wLjI1LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTEwNDE5MTQsXG4gICAgICAgICAgMC45NDYsXG4gICAgICAgICAgMS4wMixcbiAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAwLjAwNCxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDQuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgODAzNTQ4NCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAwLjk4LFxuICAgICAgICAgIC0wLjE1LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgIDQuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgODQyMzU5MixcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAwLjk0NSxcbiAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAwLjAwNCxcbiAgICAgICAgICAwLjAyLFxuICAgICAgICAgIDQuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODY4MCxcbiAgICAgICAgICAwLjk0NixcbiAgICAgICAgICAxLjE3LFxuICAgICAgICAgIC0wLjc1LFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgMi4yXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA4NDg3MDM4LFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAwLjM4LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC4xNCxcbiAgICAgICAgICAwLjA0LFxuICAgICAgICAgIDMuMVxuICAgICAgICBdXG4gICAgICBdXG4gICAgfVxuICB9IGFzIGFueTtcblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGdlb21ldHJ5IGhlbHBlcnMgKi9cblxuLyoqIExvY2FsIHN0YW5kLWluIGZvciBCdWZmZXJHZW9tZXRyeVV0aWxzLm1lcmdlR2VvbWV0cmllcywgd2hpY2ggY2Fubm90IGJlIGltcG9ydGVkIGhlcmUuXG4gKiAgRXZlcnl0aGluZyBpcyBjb252ZXJ0ZWQgdG8gbm9uLWluZGV4ZWQgc28gYXR0cmlidXRlIGFycmF5cyBjYW4gYmUgYXBwZW5kZWQ7IHRoYXQgY2hhbmdlcyB0aGVcbiAqICB2ZXJ0ZXggY291bnQgYnV0IE5PVCB0aGUgdHJpYW5nbGUgY291bnQsIHdoaWNoIGlzIHRoZSBheGlzIHRoZSBidWRnZXQgbWVhc3VyZXMuICovXG5mdW5jdGlvbiBtZXJnZUdlb3MoZ2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgdGVtcDogYm9vbGVhbltdID0gW107XG4gIGZvciAoY29uc3QgZyBvZiBnZW9zKSB7XG4gICAgaWYgKGcuaW5kZXgpIHsgcGFydHMucHVzaChnLnRvTm9uSW5kZXhlZCgpKTsgdGVtcC5wdXNoKHRydWUpOyB9XG4gICAgZWxzZSB7IHBhcnRzLnB1c2goZyk7IHRlbXAucHVzaChmYWxzZSk7IH1cbiAgfVxuICBsZXQgdG90YWwgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHRvdGFsICs9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBwb3NpdGlvbiA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3Qgbm9ybWFsID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAyKTtcbiAgLy8gQ09MT1IgaGFzIHRvIGJlIGNhcnJpZWQgdG9vLCBhbmQgaXQgaXMgZWFzeSB0byBmb3JnZXQ6IHRoaXMgZnVuY3Rpb24gY29waWVkIHBvc2l0aW9uLCBub3JtYWxcbiAgLy8gYW5kIHV2IG9ubHksIGFuZCB0aGUgbW9zcXVlJ3MgcmliYmVkIGRvbWVzIGxvc3QgdGhlaXIgZ3JlZW4tYW5kLXBhbGUgc3RyaXBpbmcgdGhlIG1vbWVudCB0aGV5XG4gIC8vIHdlcmUgbWVyZ2VkIHdpdGggYW55dGhpbmcuIFRoZSBmYWlsdXJlIGlzIHNpbGVudCAtLSB0aGUgZG9tZSByZW5kZXJzLCBpbiBvbmUgZmxhdCBjb2xvdXIgLS0gYW5kXG4gIC8vIHRvb2sgYSB3cm9uZyB0aGVvcnkgYWJvdXQgc1JHQiBnYW1tYSBiZWZvcmUgdGhlIGF0dHJpYnV0ZSBsaXN0IHdhcyByZWFkLiBBbnkgaW5wdXQgY2FycnlpbmcgYVxuICAvLyBjb2xvdXIgbWVhbnMgZXZlcnkgaW5wdXQgZ2V0cyBvbmUsIHdoaXRlIHdoZXJlIGl0IGhhZCBub25lLlxuICBjb25zdCBhbnlDb2xvciA9IHBhcnRzLnNvbWUoKGcpID0+ICEhZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpO1xuICBjb25zdCBjb2xvciA9IGFueUNvbG9yID8gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpLmZpbGwoMSkgOiBudWxsO1xuICBsZXQgdiA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykge1xuICAgIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbiA9IGcuZ2V0QXR0cmlidXRlKCdub3JtYWwnKSwgdCA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgIGNvbnN0IGMgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgICAgcG9zaXRpb25bKHYgKyBpKSAqIDNdID0gcC5nZXRYKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDFdID0gcC5nZXRZKGkpOyBwb3NpdGlvblsodiArIGkpICogMyArIDJdID0gcC5nZXRaKGkpO1xuICAgICAgaWYgKG4pIHsgbm9ybWFsWyh2ICsgaSkgKiAzXSA9IG4uZ2V0WChpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMV0gPSBuLmdldFkoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDJdID0gbi5nZXRaKGkpOyB9XG4gICAgICBpZiAodCkgeyB1dlsodiArIGkpICogMl0gPSB0LmdldFgoaSk7IHV2Wyh2ICsgaSkgKiAyICsgMV0gPSB0LmdldFkoaSk7IH1cbiAgICAgIGlmIChjb2xvciAmJiBjKSB7IGNvbG9yWyh2ICsgaSkgKiAzXSA9IGMuZ2V0WChpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAxXSA9IGMuZ2V0WShpKTsgY29sb3JbKHYgKyBpKSAqIDMgKyAyXSA9IGMuZ2V0WihpKTsgfVxuICAgIH1cbiAgICB2ICs9IHAuY291bnQ7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykgeyBpZiAodGVtcFtpXSkgcGFydHNbaV0uZGlzcG9zZSgpOyBnZW9zW2ldLmRpc3Bvc2UoKTsgfVxuICBjb25zdCBvdXQgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9uLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobm9ybWFsLCAzKSk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICBpZiAoY29sb3IpIG91dC5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2xvciwgMykpO1xuICBvdXQuY29tcHV0ZUJvdW5kaW5nQm94KCk7IG91dC5jb21wdXRlQm91bmRpbmdTcGhlcmUoKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gYm94QXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGQ6IG51bWJlcikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIGgsIGQpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5mdW5jdGlvbiBib3hlcyhsaXN0OiBudW1iZXJbXVtdKSB7IHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IGJveEF0KGJbMF0sIGJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0pKSk7IH1cbmZ1bmN0aW9uIGN5bEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHJUb3A6IG51bWJlciwgckJvdDogbnVtYmVyLCBoOiBudW1iZXIsIHNlZyA9IDE2KSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyVG9wLCByQm90LCBoLCBzZWcpOyBnLnRyYW5zbGF0ZShjeCwgY3ksIGN6KTsgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogUmV2b2x2ZSBhIHByb2ZpbGUgYWJvdXQgK1kuIGBwdHNgIGFyZSBbcmFkaXVzLCB5XSBpbiBtZXRyZXMsIGJvdHRvbSB0byB0b3AuXG4gKlxuICogVGhpcyBpcyB0aGUgc2hhcGUgdm9jYWJ1bGFyeSB0aGUgd2hvbGUgbW9udW1lbnRhbCBzZXQgaXMgYnVpbHQgZnJvbSAtLSBhIGNoZWRpJ3MgYmVsbCwgYSBwcmFuZydzXG4gKiBjb3JuLWNvYiB0YXBlciwgYSBkb21lLCBhIHJpbmdlZCBzcGlyZSBhcmUgYWxsIG9uZSBwcm9maWxlIGVhY2guIFR3byB0aGluZ3MgYXJlIHdvcnRoIHN0YXRpbmdcbiAqIGJlY2F1c2UgYm90aCBjb3N0IGEgcmVidWlsZCB0byBsZWFybjpcbiAqXG4gKiAtIExhdGhlR2VvbWV0cnkgaXMgT1BFTiBhdCB0b3AgYW5kIGJvdHRvbS4gQSBwcm9maWxlIHRoYXQgZG9lcyBub3QgY2xvc2Ugb24gdGhlIGF4aXMgKHJhZGl1cyAwKVxuICogICBsZWF2ZXMgYSBob2xlIHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkcyBhcyBiYWNrZ3JvdW5kIGVuY2xvc2VkIGJ5IHRoZSBzaWxob3VldHRlLiBDbG9zZSBpdCwgb3JcbiAqICAgY2FwIGl0IHdpdGggd2hhdCBzaXRzIGFib3ZlLlxuICogLSBSQURJQUwgU0VHTUVOVCBDT1VOVCBpcyB0aGUgdHJpYW5nbGUgYnVkZ2V0J3MgbWFpbiBsZXZlciBoZXJlIGFuZCBpdCBpcyBwZXItbGF0aGU6IGEgcHJvZmlsZSBvZlxuICogICBuIHBvaW50cyBhdCBzIHNlZ21lbnRzIGlzIDIqKG4tMSkqcyB0cmlhbmdsZXMuIEEgMjQtcmluZyBzcGlyZSBhdCAzMiBzZWdtZW50cyBpcyAxLDQ3MlxuICogICB0cmlhbmdsZXMgb24gaXRzIG93biwgd2hpY2ggaXMgd2h5IHRoZSBsb3ctcmVsaWVmIHJpbmdzIGFyZSBhIHByb2ZpbGUgcmF0aGVyIHRoYW4gMjQgcmluZ3MuXG4gKi9cbmZ1bmN0aW9uIGxhdGhlKHB0czogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIsIHlPZmZzZXQgPSAwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB2ID0gcHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIoTWF0aC5tYXgocFswXSwgMCksIHBbMV0gKyB5T2Zmc2V0KSk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeSh2LCBzZWcpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBzdGVwcGVkIHRhcGVyIGFzIGEgbGF0aGUgcHJvZmlsZTogYHJpbmdzYCBhbHRlcm5hdGluZyBvdXQvaW4gcmFkaWkgY2xpbWJpbmcgZnJvbSB5MCB0byB5MS5cbiAqICBPbmUgZ2VvbWV0cnksIG9uZSBkcmF3IGNhbGwsIGFuZCB0aGUgc3RlcCBjb3VudCBpcyBhIHByb2ZpbGUtcG9pbnQgY291bnQgcmF0aGVyIHRoYW4gYSBtZXNoXG4gKiAgY291bnQgLS0gd2hpY2ggaXMgd2hhdCBrZWVwcyBhIDIwLXJpbmcgY2hlZGkgc3BpcmUgaW5zaWRlIGEgMzItZ2VvbWV0cnkgY2VpbGluZy4gKi9cbmZ1bmN0aW9uIHJpbmdlZFRhcGVyKHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHIwOiBudW1iZXIsIHIxOiBudW1iZXIsIHJpbmdzOiBudW1iZXIsIGJ1bGdlOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHJpbmdzOyBpKyspIHtcbiAgICBjb25zdCB0ID0gaSAvIHJpbmdzO1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgciA9IHIwICsgKHIxIC0gcjApICogdDtcbiAgICBjb25zdCBzdGVwID0gKHkxIC0geTApIC8gcmluZ3M7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeV0pO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHkgKyBzdGVwICogMC40NV0pO1xuICAgIHB0cy5wdXNoKFtyLCB5ICsgc3RlcCAqIDAuNTVdKTtcbiAgfVxuICBwdHMucHVzaChbcjEsIHkxXSk7XG4gIHJldHVybiBwdHM7XG59XG5cblxuLyoqXG4gKiBUaGUgUkVERU5URUQgc3F1YXJlIHBsYW4gLS0gYSBzcXVhcmUgd2hvc2UgZm91ciBjb3JuZXJzIGFyZSBjdXQgYmFjayBpbiB0d28gcmlnaHQtYW5nbGVkIHN0ZXBzLlxuICogSXQgaXMgdGhlIHBsYW4gb2YgYSBUaGFpIGNoZWRpJ3MgdGVycmFjZSBhbmQgb2YgYSBwcmFuZydzIGJhc2UsIGFuZCBidWlsZGluZyBpdCBhcyBhIFNoYXBlIHRoYXRcbiAqIGlzIHRoZW4gZXh0cnVkZWQgaXMgbm90IGEgc3R5bGlzdGljIGNob2ljZTogdGhlIG9idmlvdXMgYWx0ZXJuYXRpdmUsIGEgd2lkZSBib3ggY3Jvc3NlZCBieSBhXG4gKiBkZWVwIGJveCwgcHV0cyB0aGUgdHdvIGJveGVzJyB0b3AgZmFjZXMgaW4gdGhlIHNhbWUgcGxhbmUgZmFjaW5nIHRoZSBzYW1lIHdheSBvdmVyIHRoZWlyIHdob2xlXG4gKiBpbnRlcnNlY3Rpb24sIHdoaWNoIHotZmlnaHRzLiBPbmUgZXh0cnVzaW9uIG9mIG9uZSBjbG9zZWQgcGxhbiBoYXMgbm8gaW50ZXJpb3IgY29pbmNpZGVuY2UgYXRcbiAqIGFsbC5cbiAqXG4gKiBgYWAgaXMgdGhlIGhhbGYtd2lkdGggYWNyb3NzIHRoZSBmbGF0czsgYHJgIGlzIHRoZSBkZXB0aCBvZiBlYWNoIHJlZGVudCBzdGVwLlxuICovXG5mdW5jdGlvbiByZWRlbnRlZFNoYXBlKGE6IG51bWJlciwgcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBxdWFkID0gW1thLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGFdXTtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgZm9yIChjb25zdCBbeCwgel0gb2YgcXVhZCkge1xuICAgICAgLy8gcm90OTBeaywgYXBwbGllZCBrIHRpbWVzOiAoeCwgeikgLT4gKC16LCB4KVxuICAgICAgbGV0IHB4ID0geCwgcHogPSB6O1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrOyBpKyspIHsgY29uc3QgdCA9IHB4OyBweCA9IC1wejsgcHogPSB0OyB9XG4gICAgICBwdHMucHVzaChbcHgsIHB6XSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYmV0d2VlbiB0d28gaGVpZ2h0cy4gRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBhbG9uZyArWiwgc28gdGhlIHJlc3VsdCBpc1xuICogIHJvdGF0ZWQgb250byArWTsgYC1NYXRoLlBJIC8gMmAgYWJvdXQgWCBtYXBzICtaIHRvICtZIGFuZCBsZWF2ZXMgdGhlIHBsYW4ncyBvd24geCBhcyB4LiAqL1xuZnVuY3Rpb24gZXh0cnVkZVNsYWIoc2hhcGU6IFRIUkVFLlNoYXBlLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeTEgLSB5MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgLy8gcm90YXRlWCgtUEkvMikgbWFwcyAoeCwgeSwgeikgLT4gKHgsIHosIC15KSwgc28gdGhlIGV4dHJ1c2lvbiBkZXB0aCBiZWNvbWVzIGhlaWdodCBhbmQgdGhlXG4gIC8vIHBsYW4ncyBvd24gc2Vjb25kIGF4aXMgYmVjb21lcyAtei4gRXZlcnkgcGxhbiBoZXJlIGlzIGZvdXItZm9sZCBzeW1tZXRyaWMsIHNvIHRoYXQgc2lnbiBpc1xuICAvLyBpbW1hdGVyaWFsOyB3aGF0IG1hdHRlcnMgaXMgdGhhdCB0aGUgc2xhYiBub3cgcnVucyBVUCBmcm9tIHk9MCBhbmQgbmVlZHMgbGlmdGluZyBieSB5MC5cbiAgZy5yb3RhdGVYKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKDAsIHkwLCAwKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIHNxdWFyZSBwbGFuIHdpdGggYSByZWN0YW5ndWxhciBOT1RDSCBjdXQgaW50byBpdHMgK1ggZmFjZSAtLSB0aGUgc3RhaXIgd2VsbCBvZiBhIHRlbXBsZVxuICogdGVycmFjZS4gQ3V0dGluZyB0aGUgc3RhaXIgb3V0IG9mIHRoZSBwbGFuIHJhdGhlciB0aGFuIGhhbmdpbmcgaXQgb2ZmIHRoZSBvdXRzaWRlIGlzIHdoYXQga2VlcHNcbiAqIGFuIGFzeW1tZXRyaWMgZmVhdHVyZSBpbnNpZGUgYSBzeW1tZXRyaWMgZGVjbGFyZWQgZW52ZWxvcGU6IGEgZmxpZ2h0IHByb2plY3RpbmcgcGFzdCBhIDkgbVxuICogdGVycmFjZSB3b3VsZCBwdXQgdGhlIHByb3AncyBib3VuZGluZyBib3ggb2ZmLWNlbnRyZSBhbmQgb3ZlciBpdHMgZGVjbGFyZWQgd2lkdGggb24gb25lIHNpZGUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRTcXVhcmUoYTogbnVtYmVyLCBub3RjaEhhbGZaOiBudW1iZXIsIHhJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2EsIC1hXSwgW2EsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCBub3RjaEhhbGZaXSxcbiAgICAgICAgICAgICAgIFthLCBub3RjaEhhbGZaXSwgW2EsIGFdLCBbLWEsIGFdLCBbLWEsIC1hXV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgUkVDVEFOR1VMQVIgcGxhbiB3aXRoIGEgbm90Y2ggY3V0IGludG8gaXRzICtaIGZhY2UuIFRoZSBzcXVhcmUgdmVyc2lvbiBhYm92ZSBpcyB3aGF0IGEgY2hlZGkgb3JcbiAqIGEgcHJhbmcgdGVycmFjZSBuZWVkczsgYSBoYWxsIHRoYXQgaXMgdHdpY2UgYXMgbG9uZyBhcyBpdCBpcyB3aWRlIG5lZWRzIHRoZSB0d28gaGFsZi1leHRlbnRzIGtlcHRcbiAqIGFwYXJ0LCBhbmQgaXRzIHN0YWlyIGlzIG9uIGEgc2hvcnQgZW5kIHJhdGhlciB0aGFuIGEgbG9uZyBvbmUuXG4gKi9cbmZ1bmN0aW9uIG5vdGNoZWRSZWN0KGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIG54OiBudW1iZXIsIHpJbm5lcjogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBwdHMgPSBbW2h4LCAtaHpdLCBbaHgsIGh6XSwgW254LCBoel0sIFtueCwgeklubmVyXSwgWy1ueCwgeklubmVyXSwgWy1ueCwgaHpdLCBbLWh4LCBoel0sIFstaHgsIC1oel1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBUaGUgY3Jvc3Mtc2VjdGlvbiBvZiBvbmUgcm9vZiB0aWVyLCBhcyBhIGNsb3NlZCB0cmFwZXpvaWQgaW4gWFk6IGVhdmVzIGF0ICgrLWhhbGZCYXNlLCB5MClcbiAqIHJpc2luZyBhdCBgcGl0Y2hgIChhcyBhIHRhbmdlbnQpIHRvIGEgZmxhdCB0b3AgYXQgeTEuXG4gKlxuICogVGhhaSB0ZW1wbGUgcm9vZnMgbmVzdCwgYW5kIHRoYXQgaXMgdGhlIHJlYXNvbiBmb3IgdGhlIFRSVU5DQVRJT04uIFRocmVlIGZ1bGwgZ2FibGVzIGF0IG9uZVxuICogcGl0Y2ggY2Fubm90IG5lc3QgLS0gdGhlIHdpZGVzdCB0aWVyJ3MgcmlkZ2Ugd291bGQgYmUgdGhlIGhpZ2hlc3QsIHdoaWNoIGlzIHVwc2lkZSBkb3duLiBXaGF0XG4gKiBhY3R1YWxseSBoYXBwZW5zIGlzIHRoYXQgZWFjaCBsb3dlciB0aWVyIGlzIGN1dCBvZmYgYXQgdGhlIGhlaWdodCB3aGVyZSB0aGUgbmV4dCB0aWVyJ3MgZWF2ZXNcbiAqIGJlZ2luLCBhbmQgaXRzIHVwcGVyIHBhcnQgaXMgaGlkZGVuIGJlaGluZCB0aGF0IHRpZXI7IG9ubHkgdGhlIHRvcG1vc3QgdGllciBpcyBhIHJlYWwgZ2FibGUsXG4gKiBjbG9zZWQgYnkgcGFzc2luZyB5MSBhdCB0aGUgYXBleC5cbiAqL1xuZnVuY3Rpb24gdGllclByb2ZpbGUoaGFsZkJhc2U6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcGl0Y2g6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgaW5zZXQgPSAoeTEgLSB5MCkgLyBwaXRjaDtcbiAgY29uc3QgaGFsZlRvcCA9IGhhbGZCYXNlIC0gaW5zZXQ7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtaGFsZkJhc2UsIHkwKTtcbiAgc2hhcGUubGluZVRvKGhhbGZCYXNlLCB5MCk7XG4gIGlmIChoYWxmVG9wID4gMC4wMikge1xuICAgIHNoYXBlLmxpbmVUbyhoYWxmVG9wLCB5MSk7XG4gICAgc2hhcGUubGluZVRvKC1oYWxmVG9wLCB5MSk7XG4gIH0gZWxzZSB7XG4gICAgc2hhcGUubGluZVRvKDAsIHkwICsgaGFsZkJhc2UgKiBwaXRjaCk7ICAgLy8gYSByZWFsIHJpZGdlOiB0aGUgdG9wbW9zdCB0aWVyIGNsb3NlcyB0byBhIHBvaW50XG4gIH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGFsb25nICtaIGJldHdlZW4gdHdvIGRlcHRocywgd2l0aCBubyByb3RhdGlvbiAtLSB0aGUgbmF0aXZlIGRpcmVjdGlvbiBvZlxuICogIEV4dHJ1ZGVHZW9tZXRyeS4gVXNlZCB3aGVyZSB0aGUgcHJvZmlsZSBnZW51aW5lbHkgbGl2ZXMgaW4gdGhlIFhZIHBsYW5lLCBzdWNoIGFzIHRoZSByYWtpbmdcbiAqICB0cmlhbmdsZSBvZiBhIHN0YWlyIGNoZWVrLiAqL1xuZnVuY3Rpb24gZXh0cnVkZUFsb25nWihzaGFwZTogVEhSRUUuU2hhcGUsIHowOiBudW1iZXIsIHoxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB6MSAtIHowLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICBnLnRyYW5zbGF0ZSgwLCAwLCB6MCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHJlY3Rhbmd1bGFyIHBsYXRlIHdob3NlIGhlYWQgaXMgYSBoYWxmLXJvdW5kIGFyY2gsIG9wdGlvbmFsbHkgY2FycnlpbmcgYW4gYXJjaGVkIGFwZXJ0dXJlIG9mXG4gKiAgdGhlIHNhbWUgZm9ybS4gVGhlIGFwZXJ0dXJlIGFyYyBpcyBBTFdBWVMgc3dlcHQgZnJvbSBhbmdsZSAwIHRvIFBJOiB3cml0dGVuIHRoZSBvdGhlciB3YXkgaXRcbiAqICBydW5zIHVuZGVyIHRoZSBjaXJjbGUgaW5zdGVhZCBvZiBvdmVyIGl0IGFuZCBsZWF2ZXMgdGhlIGFyY2ggaGVhZCBmaWxsZWQgc29saWQsIHdoaWNoIHJlYWRzIGFzXG4gKiAgYSBzcXVhcmUgd2luZG93IHdpdGggYSBnaG9zdCBhcmNoIGRyYXduIGFjcm9zcyBpdC4gKi9cbmZ1bmN0aW9uIGFyY2hlZFBsYXRlKHc6IG51bWJlciwgaDogbnVtYmVyLCBhcmNoUjogbnVtYmVyLCBzcHJpbmc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLXcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCAwKTtcbiAgc2hhcGUubGluZVRvKHcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5hYnNhcmMoMCwgc3ByaW5nLCBhcmNoUiwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICBzaGFwZS5saW5lVG8oLXcgLyAyLCBzcHJpbmcpO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBwLm1vdmVUbyhob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5saW5lVG8oaG9sZS5yLCBob2xlLnNwcmluZyk7XG4gICAgcC5hYnNhcmMoMCwgaG9sZS5zcHJpbmcsIGhvbGUuciwgMCwgTWF0aC5QSSwgZmFsc2UpO1xuICAgIHAubGluZVRvKC1ob2xlLnIsIGhvbGUuc2lsbCk7XG4gICAgcC5jbG9zZVBhdGgoKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIEhJUCBST09GIHdpdGggYSBjb25jYXZlIHNsb3BlIGFuZCB1cHN3ZXB0IGNvcm5lcnMgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZiwgd2hpY2ggbm9uZSBvZiB0aGVcbiAqIG90aGVyIHNoYXBlIGhlbHBlcnMgaGVyZSBjYW4gZXhwcmVzcy5cbiAqXG4gKiBJdCBpcyBnZW5lcmF0ZWQgYXMgYSByaW5nIG9mIHJlY3RhbmdsZXMgY2xpbWJpbmcgZnJvbSB0aGUgZWF2ZXMgdG8gdGhlIHJpZGdlIHJhdGhlciB0aGFuIGFzIGFuXG4gKiBleHRydWRlZCBwcm9maWxlLCBiZWNhdXNlIGEgaGlwIHNsb3BlcyBvbiBhbGwgZm91ciBzaWRlczogYW4gZXh0cnVzaW9uIGdpdmVzIHZlcnRpY2FsIGdhYmxlIGVuZHMsXG4gKiB3aGljaCBpcyBhIGRpZmZlcmVudCBidWlsZGluZy5cbiAqXG4gKiBUaGUgaG9yaXpvbnRhbCBzaHJpbmsgZm9sbG93cyBgKDEgLSB0KV5jdXJ2ZUV4cGAsIGFuZCB0aGUgZXhwb25lbnQgbXVzdCBiZSBBQk9WRSBvbmUuIFRoZSBzbG9wZVxuICogYXQgYW55IGhlaWdodCBpcyBkeS9keCwgc28gYSBwbGFuIHRoYXQgc2hyaW5rcyBGQVNUIGZvciBhIGdpdmVuIHJpc2UgaXMgYSBzaGFsbG93IHNsb3BlOiB3aXRoXG4gKiBxID4gMSB0aGUgZGVyaXZhdGl2ZSBxKDEtdCleKHEtMSkgaXMgbGFyZ2UgYXQgdGhlIGVhdmVzIGFuZCBzbWFsbCBhdCB0aGUgcmlkZ2UsIHdoaWNoIGlzIHNoYWxsb3dcbiAqIGVhdmVzIGFuZCBhIHN0ZWVwIHJpZGdlIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YuIEJlbG93IG9uZSBpdCBpcyB0aGUgb3RoZXIgd2F5IHJvdW5kIGFuZCBidWlsZHMgYVxuICogZmxhdC10b3BwZWQgdGVudCwgd2hpY2ggaXMgd2hhdCB0aGUgZmlyc3QgYXR0ZW1wdCBoZXJlIHJlbmRlcmVkLiBBIGxpbmVhciBzaHJpbmsgZ2l2ZXMgdGhlXG4gKiBzdHJhaWdodCBweXJhbWlkIG9mIGEgaGlwIHJvb2YgYW55d2hlcmUgZWxzZSBpbiB0aGUgd29ybGQuXG4gKlxuICogYGNvcm5lckxpZnRgIHJhaXNlcyBhbmQgcHVzaGVzIG91dCB0aGUgZm91ciBlYXZlcyBjb3JuZXJzLCB0YXBlcmluZyBhd2F5IGJ5IGEgdGhpcmQgb2YgdGhlIHdheVxuICogdXAuIFRoYXQgdXBzd2VlcCBpcyB0aGUgc2luZ2xlIG1vc3QgaWRlbnRpZnlpbmcgdGhpbmcgYWJvdXQgdGhlIHJvb2YsIGFuZCBpdCBpcyB3aHkgdGhlIHBsYW5cbiAqIGhhbGYtd2lkdGggcGFzc2VkIGluIG11c3QgbGVhdmUgcm9vbTogdGhlIGNvcm5lcnMgZW5kIHVwIGZ1cnRoZXIgb3V0IHRoYW4gdGhlIGVhdmVzIGxpbmUuXG4gKlxuICogVGhlIHJlc3VsdCBpcyBhIGNsb3NlZCBzb2xpZCAtLSBvdXRlciBzdXJmYWNlLCBhIHNvZmZpdCBgZHJvcGAgYmVsb3cgdGhlIGVhdmVzLCBhbmQgYSBmYXNjaWEgYmFuZFxuICogYmV0d2VlbiB0aGVtLiBBbiBvcGVuIHNoZWxsIHdvdWxkIGxldCB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55XG4gKiBsb3cgYW5nbGUuXG4gKi9cbmZ1bmN0aW9uIGhpcFJvb2YoaHg6IG51bWJlciwgaHo6IG51bWJlciwgcmlkZ2VIYWxmWjogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICBjdXJ2ZUV4cDogbnVtYmVyLCBzdGVwczogbnVtYmVyLCBkcm9wOiBudW1iZXIsIGNvcm5lckxpZnQ6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gRUlHSFQgcG9pbnRzIHBlciByaW5nLCBub3QgZm91cjogdGhlIGZvdXIgY29ybmVycyBhbmQgdGhlIGZvdXIgZWRnZSBtaWRwb2ludHMuIFdpdGggZm91ciB0aGVcbiAgLy8gY29ybmVyIGxpZnQgaGFzIG5vd2hlcmUgdG8gZmFsbCBhd2F5IHRvIGFuZCByYWlzZXMgdGhlIEVOVElSRSBlYXZlcyBsaW5lLCB3aGljaCBidWlsdCBhIHNhZGRsZVxuICAvLyBpbnN0ZWFkIG9mIGEgcm9vZi4gVGhlIG1pZHBvaW50cyBhcmUgd2hhdCBob2xkIHRoZSBlYXZlcyBkb3duIGJldHdlZW4gdGhlIGNvcm5lcnMuXG4gIC8vXG4gIC8vIFRoZSBvcmRlciBpcyAoK3gsLXopLCBtaWQsICgteCwteiksIG1pZCwgKC14LCt6KSwgbWlkLCAoK3gsK3opLCBtaWQsIHdoaWNoIGlzIGNvdW50ZXItY2xvY2t3aXNlXG4gIC8vIHNlZW4gZnJvbSBBQk9WRSAtLSB0aGUgd2luZGluZyBhbiB1cHdhcmQtZmFjaW5nIHN1cmZhY2UgbmVlZHMuIFdvdW5kIHRoZSBvdGhlciB3YXkgdGhlIHdob2xlXG4gIC8vIHJvb2YgcmVuZGVycyBpbnNpZGUgb3V0LCB3aGljaCBsb29rcyBsaWtlIGEgdGhpbiBibGFjayBtZW1icmFuZSByYXRoZXIgdGhhbiBhIG1pc3Rha2UuXG4gIGNvbnN0IHJpbmcgPSAodDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZiA9IE1hdGgucG93KDEgLSB0LCBjdXJ2ZUV4cCk7XG4gICAgY29uc3QgZyA9IE1hdGgucG93KE1hdGgubWF4KDAsIDEgLSB0IC8gMC4zNCksIDIpO1xuICAgIGNvbnN0IGxpZnQgPSBjb3JuZXJMaWZ0ICogZywgb3V0ID0gMSArIDAuMDQ1ICogZztcbiAgICBjb25zdCBheCA9IGh4ICogZiAqIG91dCwgYXogPSAocmlkZ2VIYWxmWiArIChoeiAtIHJpZGdlSGFsZlopICogZikgKiBvdXQ7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCBjID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSArIGxpZnQsIHpdO1xuICAgIGNvbnN0IG0gPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5LCB6XTtcbiAgICByZXR1cm4gW2MoYXgsIC1heiksIG0oMCwgLWF6KSwgYygtYXgsIC1heiksIG0oLWF4LCAwKSxcbiAgICAgICAgICAgIGMoLWF4LCBheiksIG0oMCwgYXopLCBjKGF4LCBheiksIG0oYXgsIDApXTtcbiAgfTtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBsZXQgcHJldiA9IHJpbmcoMCk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDw9IHN0ZXBzOyBpKyspIHtcbiAgICBjb25zdCBjdXIgPSByaW5nKGkgLyBzdGVwcyk7XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgICBwdXNoKHByZXZba10sIHByZXZbazJdLCBjdXJbazJdKTtcbiAgICAgIHB1c2gocHJldltrXSwgY3VyW2syXSwgY3VyW2tdKTtcbiAgICB9XG4gICAgcHJldiA9IGN1cjtcbiAgfVxuICAvLyBGYXNjaWEgYmFuZCBhbmQgc29mZml0LCBzbyB0aGUgcm9vZiBpcyBhIHNvbGlkIHJhdGhlciB0aGFuIGEgc2hlbGwuIEFuIG9wZW4gc2hlbGwgbGV0cyB0aGVcbiAgLy8gdHVybnRhYmxlIGdhdGUgcmVhZCBzdHJhaWdodCB0aHJvdWdoIHRoZSByb29mIGZyb20gYW55IGxvdyBhbmdsZS5cbiAgY29uc3QgZSA9IHJpbmcoMCk7XG4gIGNvbnN0IGxvdyA9IGUubWFwKChwKSA9PiBbcFswXSwgcFsxXSAtIGRyb3AsIHBbMl1dKTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA4OyBrKyspIHtcbiAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgIHB1c2gobG93W2tdLCBlW2tdLCBlW2syXSk7XG4gICAgcHVzaChsb3dba10sIGVbazJdLCBsb3dbazJdKTtcbiAgfVxuICBmb3IgKGxldCBrID0gMTsgayA8IDc7IGsrKykgcHVzaChsb3dbMF0sIGxvd1trICsgMV0sIGxvd1trXSk7ICAgLy8gc29mZml0IGZhbiwgZmFjaW5nIGRvd25cblxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFJJQkJFRCBkb21lIC0tIGEgc3VyZmFjZSBvZiByZXZvbHV0aW9uIHdob3NlIHJhZGl1cyBpcyBtb2R1bGF0ZWQgYXJvdW5kIHRoZSBheGlzLCBzbyBpdCByZWFkc1xuICogYXMgdGhlIG1lbG9uLXJpYmJlZCBkb21lIG9mIGEgbW9zcXVlIHJhdGhlciB0aGFuIGEgc21vb3RoIGhlbWlzcGhlcmUuXG4gKlxuICogTGF0aGVHZW9tZXRyeSBjYW5ub3QgZG8gdGhpczogYSBsYXRoZSByZXZvbHZlcyBvbmUgcHJvZmlsZSBhdCBvbmUgcmFkaXVzIHBlciBoZWlnaHQsIGFuZCByaWJzIGFyZVxuICogYSB2YXJpYXRpb24gQVJPVU5EIHRoZSBheGlzLCBub3QgYWxvbmcgaXQuIFNvIHRoZSBzdXJmYWNlIGlzIGdlbmVyYXRlZCBkaXJlY3RseSwgc2FtcGxpbmdcbiAqIGAxICsgYW1wICogY29zKHJpYnMgKiB0aGV0YSlgIHBlciBzZWN0b3IuIFRoZSByaWJzIGFyZSB0aGUgcmVhc29uIHRoZSBkb21lIGlzIHJlY29nbmlzYWJsZSBhdCB0aGVcbiAqIGRpc3RhbmNlIGEgdmlsbGFnZSBza3lsaW5lIGlzIHJlYWQgZnJvbSAtLSBhIHNtb290aCBncmVlbiBoZW1pc3BoZXJlIHJlYWRzIGFzIGEgd2F0ZXIgdGFuay5cbiAqL1xuZnVuY3Rpb24gcmliYmVkRG9tZShwcm9maWxlOiBudW1iZXJbXVtdLCByaWJzOiBudW1iZXIsIGFtcDogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsbGV5PzogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgY29sOiBudW1iZXJbXSA9IFtdO1xuICAvLyBUaGUgcmlicyBhcmUgbm90IG9ubHkgYSBzaGFwZS4gT24gdGhlIG1vc3F1ZSdzIGRvbWVzIHRoZSBjcmVzdHMgYXJlIHBhbGUgYW5kIHRoZSB2YWxsZXlzIGFyZVxuICAvLyBncmVlbiwgYW5kIHRoYXQgc3RyaXBlIGlzIG1vc3Qgb2Ygd2hhdCB0aGUgZG9tZSByZWFkcyBhcyBhdCBkaXN0YW5jZS4gSXQgaXMgY2FycmllZCBhcyBhXG4gIC8vIHBlci12ZXJ0ZXggTVVMVElQTElFUiBvZmYgdGhlIHNhbWUgY29zaW5lIHRoYXQgc2hhcGVzIHRoZSByaWIgLS0gdHdvIG1lYXN1cmVtZW50cywgdGhlIGNyZXN0XG4gIC8vIGNvbG91ciBvbiB0aGUgbWF0ZXJpYWwgYW5kIHRoZSB2YWxsZXkgYXMgdGhlIHJhdGlvIGJldHdlZW4gdGhlbSAtLSBzbyB0aGUgc3RyaXBpbmcgY29zdHMgYW5cbiAgLy8gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgdGV4dHVyZSBzZXQgb3IgYSBzZWNvbmQgZHJhdyBjYWxsLlxuICBjb25zdCB0aW50ID0gKGo6IG51bWJlcikgPT4ge1xuICAgIGlmICghdmFsbGV5KSByZXR1cm4gWzEsIDEsIDFdO1xuICAgIC8vIFJhaXNlZCB0byAwLjU1IHJhdGhlciB0aGFuIGxlZnQgbGluZWFyLiBBIGNvc2luZSBzcGVuZHMgaGFsZiBpdHMgYXJlYSBuZWFyIGVhY2ggZXh0cmVtZSwgYW5kXG4gICAgLy8gdGhhdCByZW5kZXJzIGEgZG9tZSB0aGF0IGlzIHBhbGUgb3ZlcmFsbCB3aGVyZSB0aGUgcGxhdGUncyBpcyBncmVlbiBvdmVyYWxsOiB0aGUgY3Jlc3QgaXMgYVxuICAgIC8vIG5hcnJvdyBoaWdobGlnaHQgb24gYSByZWFsIHJpYiwgbm90IGhhbGYgb2YgaXQuIFRoZSBleHBvbmVudCB3aWRlbnMgdGhlIHZhbGxleS5cbiAgICBjb25zdCBmID0gTWF0aC5wb3coKDEgLSBNYXRoLmNvcyhyaWJzICogKChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnKSkpIC8gMiwgMC41NSk7XG4gICAgcmV0dXJuIFsxICsgKHZhbGxleVswXSAtIDEpICogZiwgMSArICh2YWxsZXlbMV0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzJdIC0gMSkgKiBmXTtcbiAgfTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgY29uc3QgYXQgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCB0aCA9IChqICUgc2VnKSAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgIGNvbnN0IGYgPSAxICsgYW1wICogTWF0aC5jb3MocmlicyAqIHRoKTtcbiAgICBjb25zdCByID0gcHJvZmlsZVtpXVswXSAqIGY7XG4gICAgcmV0dXJuIFtNYXRoLnNpbih0aCkgKiByLCBwcm9maWxlW2ldWzFdLCBNYXRoLmNvcyh0aCkgKiByXTtcbiAgfTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9maWxlLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBhdChpLCBqKSwgYiA9IGF0KGksIGogKyAxKSwgYyA9IGF0KGkgKyAxLCBqICsgMSksIGQgPSBhdChpICsgMSwgaik7XG4gICAgICBwdXNoKGEsIGIsIGMpO1xuICAgICAgcHVzaChhLCBjLCBkKTtcbiAgICAgIGNvbnN0IHRhID0gdGludChqKSwgdGIgPSB0aW50KGogKyAxKTtcbiAgICAgIGNvbC5wdXNoKC4uLnRhLCAuLi50YiwgLi4udGIsIC4uLnRhLCAuLi50YiwgLi4udGEpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0cmkpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgodHJpLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgaWYgKHZhbGxleSkgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbCksIDMpKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIFBPSU5URUQgYXJjaCBwbGF0ZSAtLSB0aGUgdHdvLWNlbnRyZWQgYXJjaCBvZiBhIG1vc3F1ZSwgbm90IHRoZSBoYWxmLXJvdW5kIG9mIGEgUm9tYW4gb25lLlxuICogYGFyY2hlZFBsYXRlYCBhYm92ZSBzd2VlcHMgYSBzaW5nbGUgc2VtaWNpcmNsZSwgd2hpY2ggaXMgdGhlIHdyb25nIGFyY2ggaGVyZSBhbmQgcmVhZHMgYXMgYVxuICogcmFpbHdheSB2aWFkdWN0OyB0aGlzIG9uZSBydW5zIGVhY2ggc2lkZSB1cCB0byBhIHNoYXJlZCBhcGV4IHRocm91Z2ggYSBxdWFkcmF0aWMsIHdoaWNoIGdpdmVzIHRoZVxuICogb2dlZSBwb2ludC5cbiAqL1xuZnVuY3Rpb24gcG9pbnRlZEFyY2hTaGFwZSh3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhvbGU/OiB7IHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlciB9KTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBidWlsZCA9ICh0YXJnZXQ6IFRIUkVFLlNoYXBlIHwgVEhSRUUuUGF0aCwgd3c6IG51bWJlciwgc3A6IG51bWJlciwgcmlzZTogbnVtYmVyLCBzbDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgaHcgPSB3dyAvIDI7XG4gICAgdGFyZ2V0Lm1vdmVUbyhodywgc2wpO1xuICAgIHRhcmdldC5saW5lVG8oaHcsIHNwKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbyhodywgc3AgKyByaXNlICogMC43MiwgMCwgc3AgKyByaXNlKTtcbiAgICB0YXJnZXQucXVhZHJhdGljQ3VydmVUbygtaHcsIHNwICsgcmlzZSAqIDAuNzIsIC1odywgc3ApO1xuICAgIHRhcmdldC5saW5lVG8oLWh3LCBzbCk7XG4gICAgdGFyZ2V0LmNsb3NlUGF0aCgpO1xuICB9O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBidWlsZChzaGFwZSwgdywgc3ByaW5nLCBhcGV4UmlzZSwgc2lsbCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgYnVpbGQocCwgaG9sZS53LCBob2xlLnNwcmluZywgaG9sZS5hcGV4UmlzZSwgaG9sZS5zaWxsKTtcbiAgICBzaGFwZS5ob2xlcy5wdXNoKHApO1xuICB9XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFRBUEVSSU5HIFRVQkUgYWxvbmcgK1osIGJ1aWx0IGZyb20gYSBsaXN0IG9mIHN0YXRpb25zLiBFYWNoIHN0YXRpb24gaXNcbiAqIFt6LCBjZW50cmVYLCBjZW50cmVZLCByYWRpdXNYLCByYWRpdXNZXSwgYW5kIGNvbnNlY3V0aXZlIHN0YXRpb25zIGFyZSBqb2luZWQgYnkgYSByaW5nIG9mIGBzZWdgXG4gKiBwb2ludHMsIHNvIHRoZSByYWRpdXMsIHRoZSBjZW50cmUgYW5kIHRoZSBlbGxpcHNlIHJhdGlvIGNhbiBhbGwgdmFyeSBhbG9uZyB0aGUgbGVuZ3RoLlxuICpcbiAqIFRoaXMgaXMgdGhlIG9ubHkgT1JHQU5JQyBmb3JtIGluIHRoZSB3aG9sZSBraXQsIGFuZCBpdCBleGlzdHMgZm9yIG9uZSBwcm9wOiBhIHJlY2xpbmluZyBmaWd1cmUgaXNcbiAqIGEgbG9uZyBzb2Z0IG1hc3Mgd2hvc2Ugc2VjdGlvbiBjaGFuZ2VzIGF0IGV2ZXJ5IHBvaW50IGFsb25nIGl0IC0tIHNob3VsZGVyIHRvIHdhaXN0IHRvIGhpcCB0b1xuICogY2FsZiAtLSBhbmQgbmVpdGhlciBhIGxhdGhlIG5vciBhIHN0YWNrIG9mIGJveGVzIGNhbiBzYXkgdGhhdC4gQSBib3ggZGVjb21wb3NpdGlvbiBvZiBhIGx5aW5nXG4gKiBib2R5IGlzIG5vdCBhIGxvdy1wb2x5IGJvZHksIGl0IGlzIGEgcGlsZSBvZiBsdWdnYWdlLlxuICpcbiAqIEEgc3RhdGlvbiB3aXRoIGEgcmFkaXVzIGF0IG9yIG5lYXIgemVybyBjbG9zZXMgdGhlIHR1YmUsIHNvIHRoZSBlbmRzIGNhbiBiZSBjYXBwZWQgYnkgdGhlXG4gKiBzdGF0aW9uIGxpc3QgaXRzZWxmIHJhdGhlciB0aGFuIGJ5IGEgc2VwYXJhdGUgZmFuLlxuICovXG5mdW5jdGlvbiB0dWJlQWxvbmcoc3RhdGlvbnM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBJTkRFWEVELCB3aXRoIHNoYXJlZCByaW5nIHZlcnRpY2VzLCBzbyBjb21wdXRlVmVydGV4Tm9ybWFscyBhdmVyYWdlcyBhY3Jvc3MgdGhlIHF1YWRzIGFuZCB0aGVcbiAgLy8gc3VyZmFjZSBzaGFkZXMgc21vb3RoLiBUaGUgZmlyc3QgYnVpbGQgZW1pdHRlZCBsb29zZSB0cmlhbmdsZXMsIGFuZCBhIGZsYXQtc2hhZGVkIHNvZnQgYm9keVxuICAvLyBzaG93cyBldmVyeSBzdGF0aW9uIGFzIGEgY3JlYXNlIC0tIGEgcmVjbGluaW5nIGZpZ3VyZSB0aGF0IGxvb2tlZCBjcnVtcGxlZCByYXRoZXIgdGhhbiBkcmFwZWQuXG4gIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgW3osIGN4LCBjeSwgcngsIHJ5XSA9IHN0YXRpb25zW2ldO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IHRoID0gaiAqIE1hdGguUEkgKiAyIC8gc2VnO1xuICAgICAgcG9zLnB1c2goY3ggKyBNYXRoLnNpbih0aCkgKiByeCwgY3kgKyBNYXRoLmNvcyh0aCkgKiByeSwgeik7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGkgKiBzZWcgKyBqLCBiID0gKGkgKyAxKSAqIHNlZyArIGosIGMgPSAoaSArIDEpICogc2VnICsgKGogKyAxKSAlIHNlZywgZCA9IGkgKiBzZWcgKyAoaiArIDEpICUgc2VnO1xuICAgICAgaWR4LnB1c2goYSwgYiwgYywgYSwgYywgZCk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHBvcyksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KChwb3MubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLnNldEluZGV4KGlkeCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBjdXJsZWQgaG9ybjogYG5gIHRhcGVyaW5nIGJveCBzZWdtZW50cyBzYW1wbGVkIGFsb25nIGEgc2luZSwgZWFjaCByb3RhdGVkIHRvIGl0cyBvd24gdGFuZ2VudC5cbiAqIFNoYXJlZCBieSB0aGUgdWJvc290J3MgY2hvZmEsIHRoZSBwcmFuZydzIHRyaWRlbnQgcHJvbmdzIGFuZCB0aGUgQ2hpbmVzZSBzaHJpbmUncyBmbHlpbmcgZWF2ZXMsXG4gKiBiZWNhdXNlIGFsbCB0aHJlZSBhcmUgdGhlIHNhbWUgcHJvYmxlbSAtLSBhIHN0cmFpZ2h0IHNwaWtlIGF0IGEgcm9vZiBlbmQgcmVhZHMgYXMgYSBsaWdodG5pbmcgcm9kXG4gKiBhbmQgdGhlIGN1cmwgaXMgdGhlIHdob2xlIGZlYXR1cmUuXG4gKi9cbmZ1bmN0aW9uIGN1cmxlZEhvcm4ocmVhY2g6IG51bWJlciwgcmlzZTogbnVtYmVyLCB0aGljazogbnVtYmVyLCBuID0gNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBhdCA9ICh1OiBudW1iZXIpID0+IFtyZWFjaCAqIE1hdGguc2luKHUgKiBNYXRoLlBJICogMC40NiksIHJpc2UgKiB1XTtcbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuOyBqKyspIHtcbiAgICBjb25zdCBhID0gYXQoaiAvIG4pLCBiID0gYXQoKGogKyAxKSAvIG4pO1xuICAgIGNvbnN0IGR4ID0gYlswXSAtIGFbMF0sIGR5ID0gYlsxXSAtIGFbMV07XG4gICAgY29uc3QgdyA9IHRoaWNrICogKDEgLSBqIC8gbikgKyB0aGljayAqIDAuMjg7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBNYXRoLmh5cG90KGR4LCBkeSkgKyB0aGljayAqIDAuMiwgdyk7XG4gICAgZy5yb3RhdGVaKE1hdGguYXRhbjIoLWR4LCBkeSkpO1xuICAgIGcudHJhbnNsYXRlKChhWzBdICsgYlswXSkgLyAyLCAoYVsxXSArIGJbMV0pIC8gMiwgMCk7XG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiBtZXJnZUdlb3Moc2Vncyk7XG59XG5cbi8qKlxuICogUmFtcCBhIHBlci12ZXJ0ZXggdGludCBvdmVyIGEgaGVpZ2h0IGJhbmQsIGFzIGEgTVVMVElQTElFUiBvbiB0aGUgbWF0ZXJpYWwgY29sb3VyLlxuICpcbiAqIFRoaXMgaXMgaG93IGEgbG9jYWwgbWF0ZXJpYWwgb3ZlcnJpZGUgZ2V0cyBkZWxpdmVyZWQgb24gYSBtZXJnZWQgY29tcG9uZW50IHRoYXQgaXMgb25lIG1lc2ggYW5kXG4gKiBtdXN0IHN0YXkgb25lIGRyYXcgY2FsbDogYSBzZWNvbmQgbWF0ZXJpYWwgd291bGQgY29zdCBhIHN1Ym1pc3Npb24gYW5kIGEgc2hhZGVyIHN3aXRjaCB0byBzYXlcbiAqIHRoYXQgdGhlIGJvdHRvbSBvZiBhIHdhbGwgaXMgZGlydGllciB0aGFuIHRoZSB0b3AuIGByZ2IwYCBpcyB0aGUgbWVhc3VyZWQgdGludCBhdCB5MCBleHByZXNzZWRcbiAqIGFzIGEgZnJhY3Rpb24gb2YgdGhlIG1hdGVyaWFsJ3Mgb3duIG1lYXN1cmVkIGFsYmVkbywgc28gdGhlIHRvcCBvZiB0aGUgYmFuZCBpcyB1bnRpbnRlZCAxLjAgYW5kXG4gKiB0aGUgbnVtYmVycyBiZWxvdyBzdGF5IHRyYWNlYWJsZSB0byB0d28gY3JvcCBtZWFzdXJlbWVudHMgcmF0aGVyIHRoYW4gdG8gYSBjaG9zZW4gZGFya2VuaW5nLlxuICovXG5mdW5jdGlvbiB0aW50QnlIZWlnaHQoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgeTA6IG51bWJlciwgeTE6IG51bWJlciwgcmdiMDogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCAocC5nZXRZKGkpIC0geTApIC8gKHkxIC0geTApKSk7XG4gICAgZm9yIChsZXQgYyA9IDA7IGMgPCAzOyBjKyspIGNvbFtpICogMyArIGNdID0gcmdiMFtjXSArICgxIC0gcmdiMFtjXSkgKiB0O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHZlaGljbGUgaGVscGVycyAqL1xuXG4vKiogUGFpbnQgYSB3aG9sZSBnZW9tZXRyeSBvbmUgdmVydGV4IGNvbG91ci4gRXZlcnkgdmVoaWNsZSBtYXRlcmlhbCBoZXJlIGlzIFdISVRFIHdpdGhcbiAqICB2ZXJ0ZXhDb2xvcnMgb24sIHNvIGEgY29sb3VyIGRpZmZlcmVuY2UgY29zdHMgYW4gYXR0cmlidXRlIHJhdGhlciB0aGFuIGEgbWF0ZXJpYWw6IHRoZSBib2R5J3NcbiAqICB0d28tdG9uZSwgdGhlIHR5cmUgYWdhaW5zdCBpdHMgcmltLCBhbiBhbWJlciBpbmRpY2F0b3Igb24gYSBibGFjayBidW1wZXIgYWxsIHJpZGUgb25lIHNoYWRlci5cbiAqICBWZXJ0ZXggY29sb3VycyBtdWx0aXBseSBpbiBMSU5FQVIgc3BhY2UsIHNvIHRoZSBoZXggaXMgY29udmVydGVkIHRocm91Z2ggVEhSRUUuQ29sb3IsIHdoaWNoXG4gKiAgZG9lcyB0aGUgc1JHQi10by1saW5lYXIgc3RlcC4gKi9cbmZ1bmN0aW9uIHRpbnRHZW8oZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgaGV4OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoaGV4KTtcbiAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7IH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQm94LXByb2plY3Qgd29ybGQtbWV0cmUgVVZzIHNvIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgKG11ZCwgcnVzdCwgY29ycnVnYXRpb24pIHJlcGVhdHNcbiAqICBhdCBhIHJlYWwgc2l6ZSBvbiBldmVyeSBmYWNlLiBgc2NhbGVgIGlzIG1ldHJlcyBwZXIgdGlsZS4gVGhlIGRvbWluYW50IG5vcm1hbCBheGlzIHBpY2tzIHRoZVxuICogIHBhaXIgb2Ygd29ybGQgYXhlcyB1c2VkLCBzbyBhIHJvb2YgcmVhZHMgKHgsIHopIGFuZCBhIHNpZGUgcmVhZHMgKHosIHkpLiAqL1xuZnVuY3Rpb24gd29ybGRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBsZXQgdTogbnVtYmVyLCB2OiBudW1iZXI7XG4gICAgaWYgKGF4ID49IGF5ICYmIGF4ID49IGF6KSB7IHUgPSBwLmdldFooaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICBlbHNlIGlmIChheSA+PSBheikgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRaKGkpOyB9XG4gICAgZWxzZSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFkoaSk7IH1cbiAgICB1dltpICogMl0gPSB1IC8gc2NhbGU7IHV2W2kgKiAyICsgMV0gPSB2IC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKlxuICogU0lERS1QUk9GSUxFIEVYVFJVU0lPTjogYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzICh0aGUgdmVoaWNsZSdzIHNpZGUgc2lsaG91ZXR0ZSwgd2hlZWxcbiAqIGFyY2hlcyBpbmNsdWRlZCBhcyBub3RjaGVzKSBzd2VwdCBhY3Jvc3MgdGhlIGZ1bGwgd2lkdGgsIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXg6XG4gKlxuICogIC0gYHR1bWJsZWAgIG5hcnJvd3MgdGhlIHNlY3Rpb24gYWJvdmUgdGhlIGJlbHQgbGluZSAtLSB4IGlzIHNjYWxlZCBieSAoMSAtIGsgKiB0KSB3aGVyZSB0IHJ1bnNcbiAqICAgICAgICAgICAgICAwIGF0IGBiZWx0YCB0byAxIGF0IGByb29mYC4gVGhhdCBpcyB0aGUgdHVtYmxlaG9tZSBvZiBhIHJlYWwgY2FyIGJvZHkgYW5kIGlzIHdoYXRcbiAqICAgICAgICAgICAgICBzdG9wcyB0aGUgZ2xhc3Nob3VzZSByZWFkaW5nIGFzIGEgYm94IG9uIGEgYm94LlxuICogIC0gYHBsYW5gICAgIHJvdW5kcyB0aGUgcGxhbiBhdCB0aGUgbm9zZSBhbmQgdGFpbDogYW4gb3B0aW9uYWwgbGlzdCBvZiBbeiwgeFNjYWxlXSBzdGF0aW9uc1xuICogICAgICAgICAgICAgIGludGVycG9sYXRlZCBhbG9uZyB6LCBzbyBhIGJvbm5ldCBjYW4gdGFwZXIgdG8gMC45IG9mIHRoZSB3aWR0aCBhdCB0aGUgYnVtcGVyIGxpbmUuXG4gKlxuICogRXh0cnVkZUdlb21ldHJ5IGJ1aWxkcyBpbiBpdHMgb3duICh1LCB2LCBkZXB0aCkgZnJhbWU7IHJvdGF0ZVkoLVBJLzIpIG1hcHMgZGVwdGggdG8gLXggYW5kIHUgdG9cbiAqIHdvcmxkIHosIGFuZCB0aGUgdHJhbnNsYXRlIHJlLWNlbnRyZXMgdGhlIHNsYWIgb24geCA9IDAuIEFueSBzaGFwaW5nIGlzIGFwcGxpZWQgQUZURVIgdGhhdCwgYW5kXG4gKiBub3JtYWxzIGFyZSByZWNvbXB1dGVkIGxhc3Qgc28gdGhlIHNoYWRlZCBmYWNlcyBmb2xsb3cgdGhlIHNoYXBlZCBzdXJmYWNlLlxuICovXG5mdW5jdGlvbiBzaWRlRXh0cnVkZShwcm9maWxlOiBudW1iZXJbXVtdLCB3aWR0aDogbnVtYmVyLCBvcHRzOiBTaGFwZU9wdHMgPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2LCBzdGVwczogb3B0cy5zdGVwcyA/PyAxIH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgaWYgKG9wdHMuZWRnZUJpYXMgJiYgKG9wdHMuc3RlcHMgPz8gMSkgPiAxKSB7XG4gICAgLy8gUHVsbCB0aGUgd2lkdGggY29sdW1ucyB0b3dhcmQgdGhlIHR3byBlZGdlcyAofHR8XnAsIHAgPCAxKSBzbyBhIHNob3VsZGVyIGZpbGxldCBnZXRzIGZvdXJcbiAgICAvLyByZWFsIHNlZ21lbnRzIGluc3RlYWQgb2Ygb25lIGNoYW1mZXIgYXQgdGhlIG91dGVybW9zdCBjb2x1bW47IHRoZSBmbGF0IG1pZGRsZSBuZWVkcyBub25lLlxuICAgIGNvbnN0IHEgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgaHcgPSB3aWR0aCAvIDI7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmNvdW50OyBpKyspIHtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgcS5nZXRYKGkpIC8gaHcpKTtcbiAgICAgIHEuc2V0WChpLCBodyAqIE1hdGguc2lnbih0KSAqIE1hdGgucG93KE1hdGguYWJzKHQpLCBvcHRzLmVkZ2VCaWFzKSk7XG4gICAgfVxuICB9XG4gIHNoYXBlV2lkdGgoZywgb3B0cywgd2lkdGgpO1xuICBpZiAob3B0cy5zbW9vdGgpIHNtb290aE5vcm1hbHMoZywgb3B0cy5zbW9vdGgpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFNoYXBpbmcgb3B0aW9ucyBzaGFyZWQgYnkgYSBib2R5IGFuZCBldmVyeXRoaW5nIHN3ZXB0IHByb3VkIG9mIGl0IChnbGFzcyBiYW5kLCBwaWxsYXJzKS5cbiAqICBgc2hvdWxkZXJgLCBgbm9zZWAgYW5kIGB0YWlsYCBhcmUgUk9VTkRJTkdTIC0tIHNlZSBzaGFwZVdpZHRoIC0tIGFuZCBuZWVkIGBzdGVwc2AgPiAxIHNvIHRoZVxuICogIHN3ZXB0IGZhY2VzIGNhcnJ5IHZlcnRpY2VzIGFjcm9zcyB0aGUgd2lkdGggdG8gYmVuZDsgYGJhc2VXaWR0aGAgaXMgdGhlIGJvZHkncyB3aWR0aCwgc28gYVxuICogIGJhbmQgc3dlcHQgd2lkZXIgdGhhbiBpdCBpcyByb3VuZGVkIGFib3V0IHRoZSBTQU1FIGNlbnRyZXMgYXQgYSBsYXJnZXIgcmFkaXVzIGFuZCBzdGF5c1xuICogIGV4YWN0bHkgYXMgcHJvdWQgYXMgaXQgd2FzIGF1dGhvcmVkOyBgdG9wT2ZgIGlzIHRoZSBib2R5J3Mgb3duIHByb2ZpbGUsIHdoaWNoIGlzIHdoZXJlIHRoZVxuICogIHJvb2YgbGluZSBldmVyeSBzaG91bGRlciBoYW5ncyBvZmYgaXMgcmVhZC4gQWxsIG9wdGlvbmFsOiB1bnNldCwgdGhlIHN3ZWVwIGlzIHRoZSBvbGQgc2xhYi4gKi9cbnR5cGUgU2hhcGVPcHRzID0geyB0dW1ibGU/OiB7IGJlbHQ6IG51bWJlciwgcm9vZjogbnVtYmVyLCBrOiBudW1iZXIgfSwgcGxhbj86IG51bWJlcltdW10sXG4gICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50cz86IG51bWJlciwgc3RlcHM/OiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgc2hvdWxkZXI/OiB7IHI6IG51bWJlciwgek1pbj86IG51bWJlciwgek1heD86IG51bWJlciwgZmFkZT86IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgIG5vc2U/OiB7IHI6IG51bWJlciB9LCB0YWlsPzogeyByOiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICBzbW9vdGg/OiBudW1iZXIsIGVkZ2VCaWFzPzogbnVtYmVyLCBiYXNlV2lkdGg/OiBudW1iZXIsIHRvcE9mPzogbnVtYmVyW11bXSxcbiAgICAgICAgICAgICAgICAgICBjcm93bj86IHsgeU1pbjogbnVtYmVyLCBkeTogbnVtYmVyLCBmYWRlPzogbnVtYmVyIH0gfTtcblxuLyoqIEhpZ2hlc3QgeSBvZiBhIGNsb3NlZCBbeiwgeV0gcHJvZmlsZSBvbiB0aGUgdmVydGljYWwgbGluZSBhdCB6IC0tIHRoZSByb29mIGxpbmUgYXQgdGhhdFxuICogIHN0YXRpb24uIFZlcnRpY2FsIGVkZ2VzIGNvdW50IGJ5IHRoZWlyIG93biB0b3A7IGEgeiBvdXRzaWRlIHRoZSBwcm9maWxlIHJldHVybnMgLUluZmluaXR5LiAqL1xuZnVuY3Rpb24gcHJvZmlsZVRvcChwcm9maWxlOiBudW1iZXJbXVtdLCB6OiBudW1iZXIsIHRvbCA9IDApOiBudW1iZXIge1xuICBsZXQgdG9wID0gLUluZmluaXR5O1xuICBjb25zdCBuID0gcHJvZmlsZS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHByb2ZpbGVbaV0sIGIgPSBwcm9maWxlWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBsbyA9IE1hdGgubWluKGFbMF0sIGJbMF0pLCBoaSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgIGlmICh6IDwgbG8gLSB0b2wgLSAxZS02IHx8IHogPiBoaSArIHRvbCArIDFlLTYpIGNvbnRpbnVlO1xuICAgIC8vIGB0b2xgIGxldHMgYSBiYW5kIHN0YW5kaW5nIGEgZmV3IG1tIHByb3VkIG9mIGEgdmVydGljYWwgZmFjZSAoYSByZWFyIHBhbmUsIGEgQy1waWxsYXIgc3RyaXBcbiAgICAvLyBiZWhpbmQgdGhlIGNhYiBiYWNrKSByZWFkIHRoZSByb29mIGxpbmUgb2YgdGhlIGZhY2UgaXQgc3RhbmRzIG9uLCBub3QgdGhlIGJlZCBmbG9vciBiZWhpbmQgaXRcbiAgICBjb25zdCB6YyA9IE1hdGgubWF4KGxvLCBNYXRoLm1pbihoaSwgeikpO1xuICAgIGNvbnN0IHkgPSBoaSAtIGxvIDwgMWUtNiA/IE1hdGgubWF4KGFbMV0sIGJbMV0pIDogYVsxXSArIChiWzFdIC0gYVsxXSkgKiAoemMgLSBhWzBdKSAvIChiWzBdIC0gYVswXSk7XG4gICAgaWYgKHkgPiB0b3ApIHRvcCA9IHk7XG4gIH1cbiAgcmV0dXJuIHRvcDtcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgb3B0czogU2hhcGVPcHRzLCB3aWR0aCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB0dW1ibGVBdCA9ICh5OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW9wdHMudHVtYmxlKSByZXR1cm4gMTtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICByZXR1cm4gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICB9O1xuICBjb25zdCBwbGFuQXQgPSAoejogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnBsYW4gfHwgb3B0cy5wbGFuLmxlbmd0aCA8IDIpIHJldHVybiAxO1xuICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgIGlmICh6IDw9IHN0WzBdWzBdKSByZXR1cm4gc3RbMF1bMV07XG4gICAgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHJldHVybiBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgcmV0dXJuIHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9O1xuICAvLyBST1VORElOR1MuIEEgc3dlZXAgaXMgYSBzbGFiOiBpdHMgcm9vZiBtZWV0cyBpdHMgc2lkZSBhdCBhIGhhcmQgZWRnZSwgYW5kIGl0cyBub3NlIG1lZXRzIGJvdGhcbiAgLy8gc2lkZXMgYXQgdHdvIG1vcmUuIFJlYWwgc2hlZXQgbWV0YWwgY3Jvd25zIG92ZXIgdGhlIGZlbmRlciBhbmQgd3JhcHMgcm91bmQgdGhlIG5vc2UsIHNvIGFueVxuICAvLyB2ZXJ0ZXggaW5zaWRlIGEgY29ybmVyIHF1YWRyYW50ICh3aXRoaW4gciBvZiB0aGUgdG9wIEFORCB3aXRoaW4gciBvZiB0aGUgc2lkZSkgaXMgcHJvamVjdGVkXG4gIC8vIG9udG8gdGhlIGNpcmNsZSBvZiByYWRpdXMgciBhYm91dCB0aGF0IGNvcm5lcidzIGNlbnRyZSAtLSBhIGZpbGxldCwgaW4geC95IGZvciB0aGUgc2hvdWxkZXJcbiAgLy8gYW5kIGluIHgveiBhdCB0aGUgdHdvIGVuZHMuIFRoZSBjZW50cmVzIGFyZSBwbGFjZWQgb2ZmIHRoZSBCT0RZJ3Mgd2lkdGggKGBiYXNlV2lkdGhgKSBhbmRcbiAgLy8gcm9vZiBsaW5lIChgdG9wT2ZgKSwgc28gYSBnbGFzcyBiYW5kIHN3ZXB0IGBlYCB3aWRlciBpcyBmaWxsZXRlZCBhdCByICsgZSBhYm91dCB0aGUgc2FtZVxuICAvLyBjZW50cmUgYW5kIHN0YXlzIGBlYCBwcm91ZCBhbGwgdGhlIHdheSByb3VuZCB0aGUgY29ybmVyLlxuICBjb25zdCBleHRyYSA9IG9wdHMuYmFzZVdpZHRoID8gKHdpZHRoIC0gb3B0cy5iYXNlV2lkdGgpIC8gMiA6IDA7XG4gIGNvbnN0IGJhc2VIYWxmID0gKG9wdHMuYmFzZVdpZHRoID8/IHdpZHRoKSAvIDI7XG4gIGNvbnN0IHRvcCA9IG9wdHMudG9wT2YgPz8gbnVsbDtcbiAgbGV0IHpNYXggPSAtSW5maW5pdHksIHpNaW4gPSBJbmZpbml0eTtcbiAgaWYgKHRvcCkgZm9yIChjb25zdCBxIG9mIHRvcCkgeyBpZiAocVswXSA+IHpNYXgpIHpNYXggPSBxWzBdOyBpZiAocVswXSA8IHpNaW4pIHpNaW4gPSBxWzBdOyB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSksIHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgY29uc3QgdGYgPSB0dW1ibGVBdCh5KSwgcGYgPSBwbGFuQXQoeik7XG4gICAgeCAqPSB0ZiAqIHBmO1xuICAgIGlmIChvcHRzLnNob3VsZGVyICYmIHRvcCkge1xuICAgICAgY29uc3Qgc2ggPSBvcHRzLnNob3VsZGVyO1xuICAgICAgLy8gVGhlIGZpbGxldCBsaXZlcyBvbiBhIHotcmFuZ2U6IGhhcmQgYXQgek1pbiAodGhlIGNhYiBiYWNrKSwgZmFkZWQgb3ZlciBgZmFkZWAgbWV0cmVzIGF0XG4gICAgICAvLyB6TWF4ICh0aGUgdG9wIG9mIHRoZSB3aW5kc2NyZWVuIHJha2UgLS0gYSByYWtlIGlzIGEgcGxhbmUsIGl0cyBlZGdlIGEgY3JlYXNlLCBhbmQgYSBmYWRlXG4gICAgICAvLyBrZXllZCBvbiB0aGUgcm9vZiBsaW5lJ3MgU0xPUEUgdmFyaWVkIGluc2lkZSB0aGUgcmVhciBjb3JuZXIgYW5kIGZvbGRlZCBpdCkuXG4gICAgICBjb25zdCB6TG8gPSBzaC56TWluID8/IC1JbmZpbml0eSwgekhpID0gc2guek1heCA/PyBJbmZpbml0eSwgZmQgPSBzaC5mYWRlID8/IDA7XG4gICAgICBjb25zdCB3ID0geiA8IHpMbyB8fCB6ID4gekhpID8gMCA6IGZkID4gMCA/IE1hdGgubWluKDEsICh6SGkgLSB6KSAvIGZkKSA6IDE7XG4gICAgICBjb25zdCB5dCA9IHByb2ZpbGVUb3AodG9wLCB6LCAwLjAzKTtcbiAgICAgIGlmICh3ID4gMCAmJiBpc0Zpbml0ZSh5dCkpIHtcbiAgICAgICAgY29uc3QgciA9IHNoLnIgKyBleHRyYSwgY3kgPSB5dCAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdChjeSkgKiBwZiwgY3ggPSBodyAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCk7XG4gICAgICAgIGlmICh5ID4gY3kgJiYgYXggPiBjeCAmJiByID4gMWUtNikge1xuICAgICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZHkgPSB5IC0gY3ksIGQgPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgMTtcbiAgICAgICAgICBsZXQgbnggPSBheCwgbnkgPSB5LCBoaXQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZHggPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBFREdFIGNvbHVtbiwgc2hhcmVkIHdpdGggdGhlIHNpZGU6IHRoZSBhcmMncyBmb290LCB0YW5nZW50IHRvIHRoZSBzaWRlIGF0IGN5XG4gICAgICAgICAgICBueCA9IGN4ICsgcjsgbnkgPSBjeTsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5ID49IHNoLnIgLSAxZS00ICYmIGR4IDw9IHIgKyAxZS02KSB7XG4gICAgICAgICAgICAvLyBhIHRvcC1yb3cgdmVydGV4OiBpdHMgY29sdW1uIHBvc2l0aW9uIHBpY2tzIGl0cyBhbmdsZSBvbiB0aGUgYXJjXG4gICAgICAgICAgICBjb25zdCB0aCA9IE1hdGguUEkgLyAyICogKDEgLSBkeCAvIHIpO1xuICAgICAgICAgICAgbnggPSBjeCArIE1hdGguY29zKHRoKSAqIHI7IG55ID0gY3kgKyBNYXRoLnNpbih0aCkgKiByOyBoaXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHggPD0gciArIDFlLTYgJiYgZHkgPD0gciArIDFlLTYgJiYgZCA+PSByIC0gMWUtNCkge1xuICAgICAgICAgICAgLy8gYSBwcm91ZCBiYW5kJ3Mgb3V0ZXIgdmVydGV4IGJlbG93IHRoZSB0b3A6IG9udG8gaXRzIG93biBjaXJjbGU7IGluc2lkZSBpdCwgbGVhdmVcbiAgICAgICAgICAgIG54ID0gY3ggKyBkeCAvIGQgKiByOyBueSA9IGN5ICsgZHkgLyBkICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhpdCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoYXggKyAobnggLSBheCkgKiB3KTsgeSA9IHkgKyAobnkgLSB5KSAqIHc7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVuZCBvZiBbb3B0cy5ub3NlID8geyByOiBvcHRzLm5vc2UuciwgemM6IHpNYXggLSBvcHRzLm5vc2UuciwgczogMSB9IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0cy50YWlsID8geyByOiBvcHRzLnRhaWwuciwgemM6IHpNaW4gKyBvcHRzLnRhaWwuciwgczogLTEgfSA6IG51bGxdKSB7XG4gICAgICBpZiAoIWVuZCB8fCAhdG9wKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHIgPSBlbmQuciArIGV4dHJhO1xuICAgICAgY29uc3QgaHcgPSBiYXNlSGFsZiAqIHR1bWJsZUF0KHkpICogcGxhbkF0KGVuZC56YyksIGN4ID0gaHcgLSBlbmQucjtcbiAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCksIGR6ID0gKHogLSBlbmQuemMpICogZW5kLnM7XG4gICAgICBpZiAoZHogPiAwICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgY29uc3QgZHggPSBheCAtIGN4LCBkID0gTWF0aC5oeXBvdChkeCwgZHopIHx8IDE7XG4gICAgICAgIC8vIE9ubHkgYSB2ZXJ0ZXggT1VUU0lERSB0aGUgY2lyY2xlIGlzIHByb2plY3RlZCBvbnRvIGl0ICh0aGUgc2hvdWxkZXIncyBydWxlKTogYSBzaWRlXG4gICAgICAgIC8vIHN0cmlwJ3MgaW5uZXIgZmFjZSBsaWVzIGluc2lkZSwgYW5kIHByb2plY3RpbmcgaXQgdG9vIGxhbmRzIGl0IG9uIHRoZSBvdXRlciBmYWNlLFxuICAgICAgICAvLyB3aGljaCB6LWZpZ2h0cyAtLSB0aGUgQ29tbXV0ZXIgdmFuJ3Mgd3JhcHBlZCBBLXBpbGxhcnMgY3J1bXBsZWQgZnJvbSBleGFjdGx5IHRoYXQuXG4gICAgICAgIGlmIChkID49IHIgLSAxZS00KSB7IHggPSBNYXRoLnNpZ24oeCB8fCAxKSAqIChjeCArIGR4IC8gZCAqIHIpOyB6ID0gZW5kLnpjICsgZW5kLnMgKiAoZHogLyBkICogcik7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdHMuY3Jvd24gJiYgeSA+IG9wdHMuY3Jvd24ueU1pbikge1xuICAgICAgLy8gQ1JPV04gYWNyb3NzIHRoZSB3aWR0aDogYSByb29mIGlzIGEgc2hhbGxvdyBkb21lIGluIEJPVEggYXhlcywgYW5kIGEgc2lkZSBleHRydXNpb24gaXMgZmxhdFxuICAgICAgLy8gYWNyb3NzIHguIFZlcnRpY2VzIGFib3ZlIGB5TWluYCAodGhlIHJvb2YgYmFuZCwgbmV2ZXIgYSByZWFyIHdhbGwgYmVsb3cgaXQpIHJpc2UgYnlcbiAgICAgIC8vIGR5ICogKDEgLSAoeC9odyleMiksIGZhZGVkIGluIG92ZXIgYGZhZGVgIG1ldHJlcyBhYm92ZSB5TWluIHNvIHRoZSBiYW5kJ3MgdW5kZXJzaWRlIGFuZCB0b3BcbiAgICAgIC8vIGNyb3duIHRvZ2V0aGVyIGFuZCB0aGUgZWRnZSBzdGF5cyB3aGVyZSB0aGUgc2hvdWxkZXIgcHV0IGl0LiBEZWZhdWx0LW9mZi5cbiAgICAgIGNvbnN0IGh3YyA9IE1hdGgubWF4KDFlLTMsIGJhc2VIYWxmICogdGYgKiBwZikgKyBleHRyYTtcbiAgICAgIGNvbnN0IHQgPSBNYXRoLm1pbigxLCBNYXRoLmFicyh4KSAvIGh3YyksIGYgPSBvcHRzLmNyb3duLmZhZGUgPyBNYXRoLm1pbigxLCAoeSAtIG9wdHMuY3Jvd24ueU1pbikgLyBvcHRzLmNyb3duLmZhZGUpIDogMTtcbiAgICAgIHkgKz0gb3B0cy5jcm93bi5keSAqICgxIC0gdCAqIHQpICogZjtcbiAgICB9XG4gICAgcC5zZXRYWVooaSwgeCwgeSwgeik7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEFuZ2xlLWxpbWl0ZWQgU01PT1RIIE5PUk1BTFMgb24gYSBub24taW5kZXhlZCBnZW9tZXRyeS4gRXZlcnkgdmVydGV4IHNoYXJpbmcgYSBwb3NpdGlvblxuICogIGF2ZXJhZ2VzIHRoZSBmYWNlIG5vcm1hbHMgb2YgaXRzIG5laWdoYm91cnMgdGhhdCBsaWUgd2l0aGluIGBtYXhEZWdgIG9mIGl0cyBvd24gZmFjZSwgc28gYVxuICogIGZpbGxldGVkIHNob3VsZGVyLCBhIHBsYW4tcm91bmRlZCBub3NlIGFuZCB0aGUgdHVtYmxlaG9tZSBraW5rIGF0IHRoZSBiZWx0IHNoYWRlIGFzIG9uZVxuICogIGNvbnRpbnVvdXMgc3VyZmFjZSwgd2hpbGUgYSA5MC1kZWdyZWUgZWRnZSAtLSB0aGUgYXJjaCBjdXQsIHRoZSBub3NlIGFnYWluc3QgdGhlIGJ1bXBlciAtLVxuICogIHN0YXlzIGEgY3JlYXNlLiBXaXRob3V0IHRoaXMgZXZlcnkgcXVhZCB0aGUgcm91bmRpbmdzIGJlbmQgc3BsaXRzIGludG8gdHdvIGRpZmZlcmVudGx5IGxpdFxuICogIHRyaWFuZ2xlcywgd2hpY2ggaXMgdGhlIFwiYmxvY2t5XCIgYSB2aWV3ZXIgc2VlcyBiZWZvcmUgYW55IHNpbGhvdWV0dGUuICovXG5mdW5jdGlvbiBzbW9vdGhOb3JtYWxzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1heERlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGlmICghbnJtIHx8IGdlby5nZXRJbmRleCgpKSByZXR1cm4gZ2VvO1xuICBjb25zdCBuID0gcC5jb3VudCwgY29zTGltID0gTWF0aC5jb3MobWF4RGVnICogTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBrID0gYCR7TWF0aC5yb3VuZChwLmdldFgoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WShpKSAqIDIwMDApfSwke01hdGgucm91bmQocC5nZXRaKGkpICogMjAwMCl9YDtcbiAgICBjb25zdCBnID0gZ3JvdXBzLmdldChrKTsgaWYgKGcpIGcucHVzaChpKTsgZWxzZSBncm91cHMuc2V0KGssIFtpXSk7XG4gIH1cbiAgY29uc3QgZmFjZSA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBmYWNlW2kgKiAzXSA9IG5ybS5nZXRYKGkpOyBmYWNlW2kgKiAzICsgMV0gPSBucm0uZ2V0WShpKTsgZmFjZVtpICogMyArIDJdID0gbnJtLmdldFooaSk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAoY29uc3QgZyBvZiBncm91cHMudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IGkgb2YgZykge1xuICAgICAgbGV0IHN4ID0gMCwgc3kgPSAwLCBzeiA9IDA7XG4gICAgICBjb25zdCBheCA9IGZhY2VbaSAqIDNdLCBheSA9IGZhY2VbaSAqIDMgKyAxXSwgYXogPSBmYWNlW2kgKiAzICsgMl07XG4gICAgICBmb3IgKGNvbnN0IGogb2YgZykge1xuICAgICAgICBjb25zdCBieCA9IGZhY2VbaiAqIDNdLCBieSA9IGZhY2VbaiAqIDMgKyAxXSwgYnogPSBmYWNlW2ogKiAzICsgMl07XG4gICAgICAgIGlmIChheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogPj0gY29zTGltKSB7IHN4ICs9IGJ4OyBzeSArPSBieTsgc3ogKz0gYno7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHN4LCBzeSwgc3opIHx8IDE7XG4gICAgICBvdXRbaSAqIDNdID0gc3ggLyBsOyBvdXRbaSAqIDMgKyAxXSA9IHN5IC8gbDsgb3V0W2kgKiAzICsgMl0gPSBzeiAvIGw7XG4gICAgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIFBJTExBUiBTVFJJUDogdGhlIHBpbGxhciBwb2x5Z29uIHN3ZXB0IG9ubHkgYHN0cmlwV2AgZGVlcCBhdCBlYWNoIG91dGVyIGVkZ2Ugb2YgYHdpZHRoYCxcbiAqICBtaXJyb3JlZCwgYW5kIHNoYXBlZCBleGFjdGx5IGFzIHRoZSBib2R5LiBUaGUgb2xkIGZ1bGwtd2lkdGggc3dlZXAgcHV0IGEgc2xhYiBhY3Jvc3MgdGhlXG4gKiAgd2luZHNjcmVlbiB3aGVyZXZlciB0aGUgQS1waWxsYXIgcG9seWdvbiBsYXkgb24gdGhlIHJha2UgLS0gYSBwaWxsYXIgaXMgYXQgdGhlIHNpZGUgb2YgdGhlXG4gKiAgZ2xhc3MsIG5vdCB0aHJvdWdoIGl0LiBUaGUgbWlycm9yZWQgaGFsZiBoYXMgaXRzIHdpbmRpbmcgcmVzdG9yZWQuICovXG5mdW5jdGlvbiBzaWRlU3RyaXAocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgc3RyaXBXOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiBzdHJpcFcsIGJldmVsRW5hYmxlZDogZmFsc2UsIHN0ZXBzOiAyIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyAgICAgICAgICAgICAgICAgLy8gZGVwdGggbm93IHJ1bnMgYWxvbmcgLXggZnJvbSB4ID0gMFxuICAgIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7ICAgICAgICAgICAgLy8gb3V0ZXIgZmFjZSBhdCArd2lkdGgvMiwgaW5uZXIgYXQgd2lkdGgvMiAtIHN0cmlwV1xuICAgIGlmIChzeCA8IDApIHtcbiAgICAgIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmNvdW50OyBpICs9IDMpIHtcbiAgICAgICAgY29uc3QgeDEgPSBxLmdldFgoaSArIDEpLCB5MSA9IHEuZ2V0WShpICsgMSksIHoxID0gcS5nZXRaKGkgKyAxKTtcbiAgICAgICAgcS5zZXRYWVooaSArIDEsIHEuZ2V0WChpICsgMiksIHEuZ2V0WShpICsgMiksIHEuZ2V0WihpICsgMikpOyBxLnNldFhZWihpICsgMiwgeDEsIHkxLCB6MSk7XG4gICAgICB9XG4gICAgfVxuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgICBpZiAob3B0cy5zbW9vdGgpIHNtb290aE5vcm1hbHMoZywgb3B0cy5zbW9vdGgpO1xuICAgIHJldHVybiBnO1xuICB9O1xuICByZXR1cm4gbWVyZ2VHZW9zKFttaygxKSwgbWsoLTEpXSk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUsIHJpbUJhbmQgPSA0KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgLy8gYHJpbUJhbmRgIGlzIHRoZSBMQVNUIHByb2ZpbGUgcG9pbnQgdGhhdCBjYXJyaWVzIHRoZSByaW0gY29sb3VyLiBWZXJ0ZXggY29sb3VycyBpbnRlcnBvbGF0ZSxcbiAgLy8gc28gd2l0aCB0aGUgZGVmYXVsdCA0IHRoZSB3aG9sZSBzaWRld2FsbCBmcm9tIHJSaW0gb3V0IHRvIHJUeXJlICogMC45MyBpcyBhIGdyYWRpZW50IGZyb20gdGhlXG4gIC8vIHJpbSB0b25lIHRvIHRoZSB0eXJlIHRvbmUgLS0gb24gYSB3aGVlbCB3aG9zZSByaW0gaXMgYSBzbWFsbCBodWIgdGhhdCBwYWludHMgbW9zdCBvZiB0aGUgdmlzaWJsZVxuICAvLyBkaXNjIHBhbGUsIGFuZCB0aGUgdHVrLXR1aydzIHdoZWVscyByZWFkIGFzIGdyZXkgcGxhdGVzIHJhdGhlciB0aGFuIGJsYWNrIHR5cmVzLiBQYXNzaW5nIDJcbiAgLy8gc3RvcHMgdGhlIGNocm9tZSBhdCB0aGUgaHViIGNhcCBhbmQgbWFrZXMgdGhlIHNpZGV3YWxsIHR5cmUgYWxsIHRoZSB3YXkgaW4uIFRoZSBkZWZhdWx0IGlzXG4gIC8vIHVuY2hhbmdlZCwgc28gZXZlcnkgZXhpc3RpbmcgcHJvcCBpcyBieXRlLWlkZW50aWNhbC5cbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IHJpbUJhbmQgfHwgaiA+PSBwdHMubGVuZ3RoIC0gMSAtIHJpbUJhbmQ7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBTVEVFTCBXSEVFTDogdGhlIHNhbWUgY2xvc2VkIGxhdGhlIGFzIHdoZWVsR2VvLCB3aXRoIHRoZSBwcm9maWxlIG9mIGEgcHJlc3NlZC1zdGVlbCByaW0gLS0gYVxuICogZmxhdCBvdXRlciBmYWNlLCBhIGRpc2hlZCBjZW50cmUgc3RlcHBpbmcgaW4gcGFzdCBhIGRhcmsgVkVOVCBSSU5HICh0aGUgcm93IG9mIG92YWwgaG9sZXMsXG4gKiBkZWxpdmVyZWQgYXMgYSBiYW5kIG9mIHZlcnRleCBjb2xvdXIgcmF0aGVyIHRoYW4gYXMgaG9sZXMgYSB0dXJudGFibGUgZ2F0ZSB3b3VsZCByZWFkIHRocm91Z2gpLFxuICogYSBzbWFsbCBodWIgY2FwIHN0YW5kaW5nIHByb3VkIC0tIGFuZCBhIGNodW5raWVyIHR5cmUgd2hvc2UgdHJlYWQgcmluZyBhbHRlcm5hdGVzIGEgbGlnaHRlciBhbmRcbiAqIGEgZGFya2VyIHRvbmUgc2VnbWVudCBieSBzZWdtZW50LCBzbyB0aGUgbHVncyByZWFkIGF0IHByb3AgZGlzdGFuY2UgZm9yIHplcm8gZ2VvbWV0cnkuIFBlci1wb2ludFxuICogY29sb3VycyByaWRlIHRoZSBsYXRoZSdzIHNlZ21lbnQtbWFqb3IgdmVydGV4IG9yZGVyIGV4YWN0bHkgYXMgaW4gd2hlZWxHZW8uXG4gKi9cbmZ1bmN0aW9uIHN0ZWVsV2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgdmVudEhleDogbnVtYmVyLCBsdWdIZXg6IG51bWJlciwgZGlzaCA9IDAuNTApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlcsIGQgPSBodyAqIGRpc2g7XG4gIC8vIFtyYWRpdXMsIGF4aWFsXSBhbmQgYSBjb2xvdXIgY2xhc3MgcGVyIHBvaW50OiAwIHJpbSwgMSB2ZW50IHJpbmcsIDIgdHlyZSBzaWRld2FsbCwgMyB0cmVhZFxuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1kICsgMC4wMl0sIFtyUmltICogMC4yMiwgLWQgKyAwLjAyXSwgW3JSaW0gKiAwLjI0LCAtZF0sICAgICAgICAgICAgICAgICAgICAgICAvLyBodWIgY2FwXG4gICAgW3JSaW0gKiAwLjQwLCAtZF0sIFtyUmltICogMC40MiwgLWQgLSAwLjAwNl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2ggZmxvb3JcbiAgICBbclJpbSAqIDAuNjIsIC1kIC0gMC4wMDZdLCBbclJpbSAqIDAuNjQsIC1odyAqIDAuODZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVudCByaW5nIChkYXJrKVxuICAgIFtyUmltICogMC45MCwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjkwXSwgW3JSaW0sIC1odyAqIDAuOThdLCAgICAgICAgICAgICAgICAgIC8vIHJpbSBmYWNlIGFuZCBsaXBcbiAgICBbclR5cmUgKiAwLjg4LCAtaHddLCBbclR5cmUgKiAwLjk3LCAtaHcgKiAwLjg2XSwgW3JUeXJlLCAtaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAvLyBzaWRld2FsbFxuICAgIFtyVHlyZSwgaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhZFxuICAgIFtyVHlyZSAqIDAuOTcsIGh3ICogMC44Nl0sIFtyVHlyZSAqIDAuODgsIGh3XSwgW3JSaW0sIGh3ICogMC45OF0sICAgICAgICAgICAgICAgICAgIC8vIGZhciBzaWRld2FsbFxuICAgIFtyUmltLCBodyAqIDAuODhdLCBbclJpbSAqIDAuMzAsIGh3ICogMC44MF0sIFswLCBodyAqIDAuODBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFjayBvZiB0aGUgcmltXG4gIF07XG4gIGNvbnN0IGNscyA9IFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAyLCAyLCAzLCAzLCAyLCAyLCAwLCAwLCAwLCAwXTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgQyA9IFtuZXcgVEhSRUUuQ29sb3IocmltSGV4KSwgbmV3IFRIUkVFLkNvbG9yKHZlbnRIZXgpLCBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIG5ldyBUSFJFRS5Db2xvcihsdWdIZXgpXTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgaiA9IGkgJSBwdHMubGVuZ3RoLCBzID0gTWF0aC5mbG9vcihpIC8gcHRzLmxlbmd0aCk7XG4gICAgbGV0IGMgPSBDW2Nsc1tqXV07XG4gICAgaWYgKGNsc1tqXSA9PT0gMykgYyA9IChzICUgMiA9PT0gMCkgPyBjdCA6IENbM107XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQW4gQUxMT1kgV0hFRUw6IHRoZSBzdGVlbCBsYXRoZSdzIHR5cmUgd2l0aCBhIHNoYWxsb3cgb3BlbiBkaXNoIC0tIGEgZGFyayBXSU5ET1cgZmxvb3IgYmV0d2VlbiBhXG4gKiBzbWFsbCBjZW50cmUgY2FwIGFuZCBhIGJyaWdodCByaW0gbGlwIC0tIGFuZCBgc3Bva2VOYCBmbGF0IHNwb2tlIGJhcnMgbGFpZCBhY3Jvc3MgdGhlIGRpc2ggaW4gdGhlXG4gKiBsYXRoZSdzIG93biBheGlhbCBmcmFtZSwgbWVyZ2VkIEJFRk9SRSB0aGUgYXhsZSByb3RhdGlvbiBzbyB0aGV5IHJpZGUgdGhlIHNhbWUgaW5zdGFuY2VkIGdlb21ldHJ5LlxuICogVGhlIGJhcnMgc3RhbmQgMTIgbW0gb2ZmIHRoZSBmbG9vciAob3Bwb3NlZCBmYWNlcywgbm8gei1maWdodCkgYW5kIHJlYWQgYXMgYSBtdWx0aS1zcG9rZSBhbGxveSBhdFxuICogcHJvcCBkaXN0YW5jZSB3aGVyZSBhIHBlci1zZWdtZW50IHZlcnRleC1jb2xvdXIgc3RhciB3b3VsZCBibHVyIGFjcm9zcyBldmVyeSBmYWNlLiBEZWZhdWx0LW9mZjpcbiAqIG9ubHkgYHdoZWVscy5zdHlsZTogJ2FsbG95J2AgZ2V0cyBpdC4gQ29sb3VyIGNsYXNzZXM6IDAgcmltLCAxIHdpbmRvdyBmbG9vciwgMiB0eXJlLCAzIHRyZWFkLlxuICovXG5mdW5jdGlvbiBhbGxveVdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIHdpbmRvd0hleDogbnVtYmVyLCBsdWdIZXg6IG51bWJlciwgZGlzaCA9IDAuMzUsXG4gICAgICAgICAgICAgICAgICAgICAgIHNwb2tlTiA9IDEwLCBzcG9rZVcgPSAwLjE2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCBkID0gaHcgKiBkaXNoO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1kICsgMC4wMTVdLCBbclJpbSAqIDAuMTYsIC1kICsgMC4wMTVdLCBbclJpbSAqIDAuMTgsIC1kXSwgICAgICAgICAgICAgICAgICAgICAgIC8vIGNlbnRyZSBjYXBcbiAgICBbclJpbSAqIDAuMjAsIC1kXSwgW3JSaW0gKiAwLjg2LCAtZF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2luZG93IGZsb29yIChkYXJrKVxuICAgIFtyUmltICogMC44OCwgLWh3ICogMC44OF0sIFtyUmltLCAtaHcgKiAwLjkyXSwgW3JSaW0sIC1odyAqIDAuOThdLCAgICAgICAgICAgICAgICAgICAvLyByaW0gbGlwXG4gICAgW3JUeXJlICogMC44OCwgLWh3XSwgW3JUeXJlICogMC45NywgLWh3ICogMC44Nl0sIFtyVHlyZSwgLWh3ICogMC43MF0sICAgICAgICAgICAgICAgIC8vIHNpZGV3YWxsXG4gICAgW3JUeXJlLCBodyAqIDAuNzBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRyZWFkXG4gICAgW3JUeXJlICogMC45NywgaHcgKiAwLjg2XSwgW3JUeXJlICogMC44OCwgaHddLCBbclJpbSwgaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAgIC8vIGZhciBzaWRld2FsbFxuICAgIFtyUmltLCBodyAqIDAuODhdLCBbclJpbSAqIDAuMzAsIGh3ICogMC44MF0sIFswLCBodyAqIDAuODBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFjayBvZiB0aGUgcmltXG4gIF07XG4gIGNvbnN0IGNscyA9IFswLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAyLCAyLCAzLCAzLCAyLCAyLCAwLCAwLCAwLCAwXTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgQyA9IFtuZXcgVEhSRUUuQ29sb3IocmltSGV4KSwgbmV3IFRIUkVFLkNvbG9yKHdpbmRvd0hleCksIG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgbmV3IFRIUkVFLkNvbG9yKGx1Z0hleCldO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBqID0gaSAlIHB0cy5sZW5ndGgsIHMgPSBNYXRoLmZsb29yKGkgLyBwdHMubGVuZ3RoKTtcbiAgICBsZXQgYyA9IENbY2xzW2pdXTtcbiAgICBpZiAoY2xzW2pdID09PSAzKSBjID0gKHMgJSAyID09PSAwKSA/IGN0IDogQ1szXTtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgLy8gc3Bva2VzOiBmbGF0IGJhcnMgZnJvbSB0aGUgY2FwIHRvIHRoZSBsaXAsIGluIHRoZSBsYXRoZSBmcmFtZSAoYXhpYWwgPSB5KSwgdGhlbiByb3RhdGVkIHdpdGggaXRcbiAgY29uc3QgYmFyczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCByMCA9IHJSaW0gKiAwLjE3LCByMSA9IHJSaW0gKiAwLjg5LCBsZW4gPSByMSAtIHIwLCB0ID0gMC4wMjQ7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3Bva2VOOyBpKyspIHtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHJSaW0gKiBzcG9rZVcsIHQsIGxlbik7XG4gICAgYi50cmFuc2xhdGUoMCwgLWQgLSAwLjAxMTUsIHIwICsgbGVuIC8gMik7XG4gICAgYi5yb3RhdGVZKChpIC8gc3Bva2VOKSAqIE1hdGguUEkgKiAyKTtcbiAgICBiYXJzLnB1c2godGludEdlbyhiLCByaW1IZXgpKTtcbiAgfVxuICBjb25zdCBhbGwgPSBtZXJnZUdlb3MoW2csIC4uLmJhcnNdKTtcbiAgYWxsLnJvdGF0ZVooTWF0aC5QSSAvIDIpO1xuICBhbGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGFsbDtcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNiwgcHJpc20gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIC8vIGBwcmlzbWA6IGFuIG9wZW4gdGhyZWUtc2lkZWQgcHJpc20gYXQgc2l4IHRyaWFuZ2xlcyB3aGVyZSB0aGUgYm94IGNvc3RzIHR3ZWx2ZSAtLSBhIHdpcmVcbiAgICAvLyBzcG9rZSBoYXMgbm8gcmVzb2x2YWJsZSBzZWN0aW9uIGF0IHByb3AgZGlzdGFuY2UsIGFuZCBzaXh0eSBvZiB0aGVtIG9uIHRocmVlIHdoZWVscyBpcyB0aGVcbiAgICAvLyBkaWZmZXJlbmNlIGJldHdlZW4gYSBsYXJnZSBwcm9wIGluc2lkZSBpdHMgdHJpYW5nbGUgY2VpbGluZyBhbmQgb25lIG92ZXIgaXRcbiAgICBjb25zdCBnID0gcHJpc20gPyBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeSh0ICogMC42MiwgdCAqIDAuNjIsIGxlbiwgMywgMSwgdHJ1ZSkgOiBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDgsIGhleD86IG51bWJlciwgb3BlbiA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHB0cy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBjb25zdCBhID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2ldWzBdLCBwdHNbaV1bMV0sIHB0c1tpXVsyXSk7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpICsgMV1bMF0sIHB0c1tpICsgMV1bMV0sIHB0c1tpICsgMV1bMl0pO1xuICAgIGNvbnN0IGQgPSBiLmNsb25lKCkuc3ViKGEpOyBjb25zdCBsZW4gPSBkLmxlbmd0aCgpO1xuICAgIGlmIChsZW4gPCAxZS02KSBjb250aW51ZTtcbiAgICAvLyBgb3BlbmA6IG5vIGVuZCBkaXNjcyAtLSBmb3IgYSBydW4gd2hvc2UgZXZlcnkgZW5kIGlzIGJ1cmllZCBpbiBhIGpvaW50LCBhIHJpbmcgb3IgYSBodWIsIHRoZVxuICAgIC8vIHR3byBjYXBzIGFyZSBoYWxmIHRoZSBzZWdtZW50J3MgdHJpYW5nbGVzIHNwZW50IG9uIGZhY2VzIG5vdGhpbmcgY2FuIHNlZVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShyLCByLCBsZW4gKyByICogMS4yLCBzZWcsIDEsIG9wZW4pO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJyk7IGlmICghY3R4KSByZXR1cm4gbnVsbDtcbiAgZHJhdyhjdHgsIHNpemUpO1xuICBjb25zdCB0ZXggPSBuZXcgVEhSRUUuQ2FudmFzVGV4dHVyZShjdik7XG4gIHRleC53cmFwUyA9IHRleC53cmFwVCA9IFRIUkVFLlJlcGVhdFdyYXBwaW5nO1xuICB0ZXguY29sb3JTcGFjZSA9IFRIUkVFLlNSR0JDb2xvclNwYWNlO1xuICB0ZXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICByZXR1cm4gdGV4O1xufVxuXG4vKiogRGV0ZXJtaW5pc3RpYyBwc2V1ZG8tcmFuZG9tIGZvciBjYW52YXMgZHJlc3NpbmcgLS0gYXNzaWduZWQgYnkgaW5kZXgsIG5ldmVyIE1hdGgucmFuZG9tLCBzbyB0aGVcbiAqICBtb2RlbCBpcyBieXRlLWlkZW50aWNhbCBvbiBldmVyeSBidWlsZC4gKi9cbmZ1bmN0aW9uIGxjZyhzZWVkOiBudW1iZXIpOiAoKSA9PiBudW1iZXIge1xuICBsZXQgcyA9IHNlZWQgPj4+IDA7XG4gIHJldHVybiAoKSA9PiB7IHMgPSAocyAqIDE2NjQ1MjUgKyAxMDEzOTA0MjIzKSA+Pj4gMDsgcmV0dXJuIHMgLyA0Mjk0OTY3Mjk2OyB9O1xufVxuXG4vKipcbiAqIE1VRCAvIFJPQUQtR1JJTUUgdGlsZSwgUkUtQkFTRUQuIFRoYWkgcm9hZCBtdWQgaXMgdGFuIGFuZCBCUklHSFRFUiB0aGFuIG1vc3QgcGFpbnQsIGFuZCBhXG4gKiBtdWx0aXBsaWVyIGNhbm5vdCBicmlnaHRlbjogc28gdGhlIHBhaW50IG1hdGVyaWFsIGNhcnJpZXMgdGhlIE1VRCBFTlZFTE9QRSBjb2xvdXIgKG1lYXN1cmVkIG9uXG4gKiB0aGUgbXVkZHkgc2lsbCksIHRoaXMgdGlsZSBjYXJyaWVzIHRoZSBjbGVhbiBwYWludCBhcyBhIFJBVElPIG9mIHRoYXQgZW52ZWxvcGUgb3ZlciBtb3N0IG9mIGl0c1xuICogYXJlYSAoYGJhc2VgKSwgYW5kIHRoZSBtdWQgaXMgcGFpbnRlZCBhcyB3aGl0ZSAtLSBpLmUuIHRoZSBlbnZlbG9wZSBpdHNlbGYgLS0gaW4gYSB3YXNoIHJpc2luZ1xuICogZnJvbSB0aGUgYm90dG9tIHRvIGBjb3ZlcmFnZWAgb2YgdGhlIHRpbGUgaGVpZ2h0IHBsdXMgc3BsYXR0ZXIgYWJvdmUgaXQuIEJvdW5kIHdpdGggaGVpZ2h0IFVWc1xuICogc28gdiA9IDAgaXMgdGhlIGdyb3VuZCBhbmQgdGhlIHdhc2ggc2l0cyBvbiB0aGUgc2lsbHMgYW5kIGFyY2hlcy5cbiAqL1xuZnVuY3Rpb24gbXVkVGlsZShzaXplOiBudW1iZXIsIGJhc2U6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMyxcbiAgICAgICAgICAgICAgICAgb3B0czogeyBmbG9vcj86IG51bWJlciwgc3RyZWFrcz86IG51bWJlciwgY2xvdWQ/OiBudW1iZXIsIHNwZWNrbGU/OiBudW1iZXIsIHRvbmU/OiBudW1iZXJbXSwgem9uZXM/OiBudW1iZXJbXVtdIH0gPSB7fSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCB0b0hleCA9ICh2OiBudW1iZXJbXSkgPT4gJyMnICsgdi5tYXAoKGMpID0+IE1hdGgucm91bmQoTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgYykpICogMjU1KS50b1N0cmluZygxNikucGFkU3RhcnQoMiwgJzAnKSkuam9pbignJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IHRvSGV4KGJhc2UpOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYGZsb29yYCBpcyB0aGUgZnJhY3Rpb24gb2YgdGhlIHRpbGUgaGVpZ2h0IChpLmUuIG9mIHRoZSB3b3JsZCBoZWlnaHQgdGhlIHRpbGUgc3BhbnMpIGJlbG93XG4gICAgLy8gd2hpY2ggdGhlIHdhc2ggaXMgRlVMTDogYSBib2R5IHdob3NlIHNpbGwgaXMgMC40NiBtIHVwIGEgMiBtIHRpbGUgd2FudHMgdGhlIG11ZCBzb2xpZCB0b1xuICAgIC8vIDAuMjMgYW5kIGZhZGluZyBmcm9tIHRoZXJlLCBub3QgZmFkaW5nIGZyb20gdGhlIGdyb3VuZCBpdCBuZXZlciByZWFjaGVzLlxuICAgIGNvbnN0IGZsID0gTWF0aC5taW4oY292ZXJhZ2UsIG9wdHMuZmxvb3IgPz8gMCk7XG4gICAgLy8gYHRvbmVgIGlzIHRoZSBNVUQgYXMgYSByYXRpbyBvZiB0aGUgZW52ZWxvcGUsIGZvciBhIHBhaW50IHdob3NlIGVudmVsb3BlIGlzIHRoZSBwZXItY2hhbm5lbFxuICAgIC8vIG1heCBvZiBjbGVhbiBwYWludCBhbmQgbXVkIChhIGdyZWVuIHdob3NlIG11ZCBpcyB0YW4gaXMgYnJpZ2h0ZXIgaW4gcmVkLCBkYXJrZXIgaW4gZ3JlZW4pOlxuICAgIC8vIHVuc2V0LCB0aGUgbXVkIGlzIHdoaXRlIC0tIHRoZSBlbnZlbG9wZSBpdHNlbGYuXG4gICAgY29uc3QgVCA9IG9wdHMudG9uZSA/IG9wdHMudG9uZS5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgdikpKSkgOiBudWxsO1xuICAgIGNvbnN0IG11ZCA9IChhOiBudW1iZXIpID0+IFQgPyBgcmdiYSgke1RbMF19LCR7VFsxXX0sJHtUWzJdfSwke2F9KWAgOiBgcmdiYSgyNTUsMjUyLDI0NCwke2F9KWA7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzICogKDEgLSBmbCksIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgVCA/IG11ZCgwLjg4KSA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuODgpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgVCA/IG11ZCgwLjQ1KSA6ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNDUpJyk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgVCA/IG11ZCgwKSA6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBgem9uZXNgIGFyZSBbdTAsIHUxLCB3ZWlnaHRdIHNwYW5zIG9mIHRoZSB0aWxlJ3Mgd2lkdGggdGhlIHNwcmF5IGNvbmNlbnRyYXRlcyBpbiAtLSB3aXRoXG4gICAgLy8gdGhlIHRpbGUgZml0dGVkIHRvIHRoZSB2ZWhpY2xlJ3MgbGVuZ3RoIChoZWlnaHRVViB1U2NhbGUgPSBMKSwgdGhhdCBpcyBcImJlaGluZCB0aGUgZnJvbnRcbiAgICAvLyB3aGVlbFwiLCBcImFoZWFkIG9mIHRoZSByZWFyIGFyY2hcIiwgXCJhbG9uZyB0aGUgYmVkIHNpZGVcIjogd2hlcmUgYSB3aGVlbCBhY3R1YWxseSB0aHJvd3MgbXVkLlxuICAgIGNvbnN0IHpvbmVzID0gb3B0cy56b25lcyA/PyBbWzAsIDEsIDFdXTtcbiAgICBjb25zdCB6c3VtID0gem9uZXMucmVkdWNlKChhY2MsIHpuKSA9PiBhY2MgKyB6blsyXSwgMCk7XG4gICAgY29uc3QgcGlja1UgPSAoKSA9PiB7IGxldCB0ID0gcm5kKCkgKiB6c3VtOyBmb3IgKGNvbnN0IHpuIG9mIHpvbmVzKSB7IGlmICh0IDwgem5bMl0pIHJldHVybiAoem5bMF0gKyBybmQoKSAqICh6blsxXSAtIHpuWzBdKSkgKiBzOyB0IC09IHpuWzJdOyB9IHJldHVybiBybmQoKSAqIHM7IH07XG4gICAgLy8gRFVTVCBGSUxNOiBzb2Z0IGNsb3VkeSBwYXRjaGVzIG9mIHRoZSBlbnZlbG9wZSBvdmVyIHRoZSBjbGVhbiBwYWludCBldmVyeXdoZXJlLCBzbyB0aGVcbiAgICAvLyB1cHBlciBib2R5IGlzIG5vdCBhIGZsYXQgZmlsbCAtLSB0aGUgcGxhdGUncyBncmVlbiBpcyBhIGR1bGwsIGR1c3R5IGdyZWVuLlxuICAgIGlmIChvcHRzLmNsb3VkKSBmb3IgKGxldCBpID0gMDsgaSA8IDQwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSBzICogKDAuMDggKyBybmQoKSAqIDAuMTgpLCBhID0gb3B0cy5jbG91ZCAqICgwLjQgKyBybmQoKSAqIDAuNik7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBtdWQoYSkpOyBnMi5hZGRDb2xvclN0b3AoMSwgbXVkKDApKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIFNQUkFZOiB0aGUgbXVkIGEgd2hlZWwgdGhyb3dzIGlzIGEgZmllbGQgb2Ygc21hbGwgc3BsYXRzIHN0cmVha2VkIGFsb25nIHRoZSBkaXJlY3Rpb24gb2ZcbiAgICAvLyB0cmF2ZWwgKHUpLCBkZW5zZXN0IGp1c3QgYWJvdmUgdGhlIHdhc2ggYW5kIHRoaW5uaW5nIHVwd2FyZCBpbiBjbHVzdGVycyAtLSBub3QgYSBncmFkaWVudC5cbiAgICBpZiAob3B0cy5zdHJlYWtzKSBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMuc3RyZWFrczsgaSsrKSB7XG4gICAgICBjb25zdCBjeDAgPSBwaWNrVSgpLCBiYW5kID0gY292ZXJhZ2U7XG4gICAgICBjb25zdCBjeTAgPSBzIC0gcyAqIChmbCArIE1hdGgucG93KHJuZCgpLCAxLjYpICogKGJhbmQgLSBmbCkpO1xuICAgICAgY29uc3QgY291bnQgPSA2ICsgTWF0aC5mbG9vcihybmQoKSAqIDE4KSwgc3ByZWFkID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgY291bnQ7IGsrKykge1xuICAgICAgICBjb25zdCB4ID0gY3gwICsgKHJuZCgpIC0gMC41KSAqIHNwcmVhZCAqIDMsIHkgPSBjeTAgKyAocm5kKCkgLSAwLjUpICogc3ByZWFkO1xuICAgICAgICBjb25zdCB3ID0gMSArIHJuZCgpICogcyAqIDAuMDA2LCBoID0gMC44ICsgcm5kKCkgKiBzICogMC4wMDMsIGEgPSAwLjM1ICsgcm5kKCkgKiAwLjU1O1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gbXVkKGEpO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHksIHcsIGgsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3B0cy5zcGVja2xlKSBmb3IgKGxldCBpID0gMDsgaSA8IG9wdHMuc3BlY2tsZTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcGlja1UoKSwgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS4zKSAqIHMgKiBjb3ZlcmFnZSwgciA9IDAuNiArIHJuZCgpICogMS40LCBhID0gMC4zICsgcm5kKCkgKiAwLjY7XG4gICAgICBjdHguZmlsbFN0eWxlID0gbXVkKGEpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBUID8gbXVkKGEpIDogYHJnYmEoMjU1LDI1MCwyNDAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIFQgPyBtdWQoMCkgOiAncmdiYSgyNTUsMjUwLDI0MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBhIGxpdHRsZSBncmFpbiBzbyB0aGUgY2xlYW4gcGFpbnQgaXMgbm90IGEgZmxhdCBmaWxsXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHM7IGNvbnN0IHYgPSBybmQoKSA8IDAuNSA/IDAgOiAyNTU7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC4wMzUpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiogRFVTVCB0aWxlIGZvciBwYWludCB0aGF0IGlzIEJSSUdIVEVSIHRoYW4gaXRzIGRpcnQgKGEgd2hpdGUgdmFuKTogYSBwbGFpbiBtdWx0aXBsaWVyLCB3aGl0ZVxuICogIGJhc2UgYW5kIGEgZ3JleS1icm93biB3YXNoIHJpc2luZyBmcm9tIHRoZSBncm91bmQgdG8gYGNvdmVyYWdlYCwgcGx1cyBzb2Z0IGJsb2JzLiAqL1xuZnVuY3Rpb24gZHVzdFRpbGUoc2l6ZTogbnVtYmVyLCBkdXN0OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGMgPSBkdXN0Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjkpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjQpYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuNCwgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1LCBhID0gMC4wOCArIHJuZCgpICogMC4yNTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBHTEFTUyB0aWxlIGZvciBhIHZlaGljbGUncyBnbGF6aW5nIGJhbmQsIGJvdW5kIGFzIGBtYXBgIG9uIHRoZSBnbGFzcyBtYXRlcmlhbCBBRlRFUlxuICogIGNvbnN0cnVjdGlvbiAodGhlIG1hdGVyaWFsIHN0YXlzIHRleHR1cmVsZXNzLWRlY2xhcmVkKS4gVGhlIHBhbmUncyBVVnMgYXJlIGhlaWdodC1rZXllZFxuICogIChgaGVpZ2h0VVZgKSwgc28gdiBydW5zIHNpbGwtdG8tcm9vZjogdGhlIHRpbGUgaXMgYSB2ZXJ0aWNhbCBncmFkaWVudCBmcm9tIHRoZSBtYXRlcmlhbCdzXG4gKiAgb3duIHRvbmUgYXQgdGhlIHRvcCAod2hpdGUsIGkuZS4gdGhlIHNreS1saXQgdmFsdWUgdGhlIG1hdGVyaWFsIGlzIHJlLWJhc2VkIHRvKSBkb3duIHRvXG4gKiAgYGxvd2AgYXQgdGhlIGJvdHRvbSAtLSBhIHJlYWwgc2NyZWVuIHJlZmxlY3RzIHNreSBhdCB0aGUgdG9wIGFuZCB0aGUgZGFyayBkYXNoIGFuZCByb2FkIGJlbG93XG4gKiAgLS0gcGx1cyBhIGZldyBzb2Z0IGRpYWdvbmFsIHJlZmxlY3Rpb24gc3RyZWFrcyBhbmQgYSBmYWludCB0aW50IGJhbmQuIGBsb3dgIGlzIGEgbGluZWFyLXNwYWNlXG4gKiAgcmF0aW8gKHNlZSBlbWl0Lm1qcyBgcmF0aW9gKSBvZiB0aGUgbWVhc3VyZWQgc2lkZS1nbGFzcyB0b25lIG92ZXIgdGhlIHNreS1saXQgdG9uZS4gKi9cbmZ1bmN0aW9uIGdsYXNzVGlsZShzaXplOiBudW1iZXIsIGxvdzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgc3RyZWFrcyA9IDUpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYyA9IGxvdy5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIDApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2IoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0pYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMC40NSwgYHJnYigke01hdGgucm91bmQoKGNbMF0gKyAyNTUpIC8gMil9LCR7TWF0aC5yb3VuZCgoY1sxXSArIDI1NSkgLyAyKX0sJHtNYXRoLnJvdW5kKChjWzJdICsgMjU1KSAvIDIpfSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCAnI2ZmZmZmZicpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gcmVmbGVjdGlvbiBzdHJlYWtzOiBsb25nIHNvZnQgZGlhZ29uYWwgYmFuZHMsIGxpZ2h0ZXIsIHRpbGVkIGluIHUgc28gdGhlIHNlYW0gbmV2ZXIgc2hvd3NcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0cmVha3M7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IHMgKiAoMC4wNCArIHJuZCgpICogMC4xMCksIGEgPSAwLjEwICsgcm5kKCkgKiAwLjE2LCB0aWx0ID0gcyAqICgwLjI1ICsgcm5kKCkgKiAwLjM1KTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkge1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCh4ICsgZHgsIDAsIHggKyBkeCArIHcsIDApO1xuICAgICAgICBnMi5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTsgZzIuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoMjU1LDI1NSwyNTUsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgcyk7IGN0eC5saW5lVG8oeCArIGR4ICsgdywgcyk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHRpbHQsIDApOyBjdHgubGluZVRvKHggKyBkeCArIHRpbHQsIDApOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGEgZGFya2VyIGZpbG0gaW4gdGhlIGxvd2VzdCB0ZW50aDogdGhlIGRhc2ggLyBjb3dsIHNoYWRvdyBiZWhpbmQgdGhlIHBhbmVcbiAgICBjb25zdCBnMyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogMC44OCk7XG4gICAgZzMuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNTUpYCk7IGczLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBnMzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICB9KTtcbn1cblxuLyoqIENPUlJVR0FURUQgU0hFRVQgdGlsZTogdmVydGljYWwgcmlkZ2VzIGFzIGEgc2luZS1zaGFkZWQgc3RyaXBlIGZpZWxkLCB1c2VkIGFzIG1hcCBBTkQgYnVtcE1hcCBvblxuICogIGEgc29uZ3RoYWV3IHJvb2Ygc28gdGhlIHJpZGdlcyBjYXRjaCBsaWdodC4gYHBpdGNoYCByaWRnZXMgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBjb3JydWdhdGlvblRpbGUoc2l6ZTogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCBsb3c6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgczsgeCsrKSB7XG4gICAgICBjb25zdCB0ID0gKE1hdGguY29zKHggLyBzICogTWF0aC5QSSAqIDIgKiBwaXRjaCkgKyAxKSAvIDI7ICAgLy8gMSBhdCBjcmVzdCwgMCBpbiB0cm91Z2hcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIChsb3cgKyAoMSAtIGxvdykgKiB0KSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoeCwgMCwgMSwgcyk7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDQgKyBybmQoKSAqIHMgKiAwLjA4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4xODtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgxMjAsOTAsNjAsJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDEyMCw5MCw2MCwwKScpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogUExBTksgdGlsZTogYm9hcmRzIHJ1bm5pbmcgYWxvbmcgdSB3aXRoIGRhcmsgam9pbnRzIGFuZCBncmFpbiBzdHJlYWtzLCBhIG11bHRpcGxpZXIgb24gYVxuICogIG1lYXN1cmVkIHRpbWJlciBhbGJlZG8uIGBib2FyZHNgIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gcGxhbmtUaWxlKHNpemU6IG51bWJlciwgYm9hcmRzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYmggPSBzIC8gYm9hcmRzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgYm9hcmRzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgyICsgcm5kKCkgKiAwLjE4O1xuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogdG9uZSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBiaCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsMzAsMjAsMC41NSknOyBjdHguZmlsbFJlY3QoMCwgYiAqIGJoLCBzLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMTQ7IGsrKykge1xuICAgICAgICBjb25zdCB5ID0gYiAqIGJoICsgcm5kKCkgKiBiaCwgbGVuID0gcyAqICgwLjIgKyBybmQoKSAqIDAuNiksIHggPSBybmQoKSAqIHM7XG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IGByZ2JhKDYwLDQ1LDMwLCR7MC4wNSArIHJuZCgpICogMC4xMn0pYDsgY3R4LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4IC0gcywgeSk7IGN0eC5saW5lVG8oeCAtIHMgKyBsZW4sIHkpOyBjdHgubW92ZVRvKHgsIHkpOyBjdHgubGluZVRvKHggKyBsZW4sIHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFJVU1QgdGlsZTogYSBtdWx0aXBsaWVyIG9mIGJsb3RjaGVkIG9yYW5nZS1icm93biBvdmVyIGEgYmFzZSwgZGFyayBjb3JlcyBsaWZ0ZWQgc28gbm90aGluZyBsYW5kc1xuICogIG9uIHRoZSBsdW1hLTU4IGhvbGUgZ2F0ZS4gKi9cbmZ1bmN0aW9uIHJ1c3RUaWxlKHNpemU6IG51bWJlciwgcmF0aW86IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGRlbnNpdHkgPSA5MCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZW5zaXR5OyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wOTtcbiAgICAgIGNvbnN0IGEgPSAwLjE1ICsgcm5kKCkgKiAwLjQ1O1xuICAgICAgY29uc3QgYyA9IHJhdGlvLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiB2KSk7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIEhlaWdodC1rZXllZCBVVnM6IHYgaXMgd29ybGQgSEVJR0hUIG92ZXIgYHNjYWxlYCBtZXRyZXMsIHUgcnVucyBhbG9uZyB0aGUgZG9taW5hbnQgaG9yaXpvbnRhbFxuICogIGF4aXMuIEEgbXVkIHRpbGUgYm91bmQgdGhpcyB3YXkgZGFya2VucyB0aGUgc2lsbHMgYW5kIHN0YXlzIGNsZWFuIG9uIHRoZSByb29mIC0tIGEgcGxhaW4gYm94XG4gKiAgcHJvamVjdGlvbiB3b3VsZCByZXBlYXQgdGhlIHRpbGUncyBkaXJ0eSBiYW5kIGFjcm9zcyB0aGUgcm9vZiBhcyBzdHJpcGVzLiAqL1xuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdVNjYWxlPzogbnVtYmVyLCB0b3BDbGVhbj86IGJvb2xlYW4gfSA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGNvbnN0IHVzID0gb3B0cy51U2NhbGUgPz8gc2NhbGU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgYXggPSBNYXRoLmFicyhucm0uZ2V0WChpKSksIGF5ID0gTWF0aC5hYnMobnJtLmdldFkoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgbGV0IHYgPSBwLmdldFkoaSkgLyBzY2FsZTtcbiAgICAvLyBBIHRpbGUga2V5ZWQgb24gaGVpZ2h0IGNhbm5vdCB0ZWxsIGEgYm9ubmV0IGZyb20gYSBkb29yIGF0IHRoZSBzYW1lIGhlaWdodCwgYW5kIGEgYm9ubmV0XG4gICAgLy8gaXMgY2xlYW4gd2hlcmUgYSBkb29yIGlzIHNwcmF5ZWQ6IGB0b3BDbGVhbmAgc2VuZHMgZXZlcnkgdXB3YXJkIGZhY2UgaW50byB0aGUgdGlsZSdzIHRvcFxuICAgIC8vIGJhbmQgKHYgMC43NS4uMC45NSksIGFib3ZlIGFueSB3YXNoLCB3aGVyZSBvbmx5IHRoZSBkdXN0IGZpbG0gYXBwbGllcy5cbiAgICBpZiAob3B0cy50b3BDbGVhbiAmJiBheSA+PSAwLjgpIHYgPSAwLjc1ICsgMC4yICogKHYgLSBNYXRoLmZsb29yKHYpKTtcbiAgICB1dltpICogMl0gPSB1IC8gdXM7IHV2W2kgKiAyICsgMV0gPSB2O1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogT2Zmc2V0IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyBvdXR3YXJkIGJ5IGBkYCBhbG9uZyB0aGUgYXZlcmFnZWQgZWRnZSBub3JtYWxzLiBVc2VkXG4gKiAgdG8gc3RhbmQgdGhlIGdsYXNzIGJhbmQgYSBmZXcgbWlsbGltZXRyZXMgcHJvdWQgb2YgdGhlIGJvZHkncyByYWtlZCB3aW5kc2NyZWVuIGFuZCByZWFyIGdsYXNzXG4gKiAgZmFjZXMsIHNvIHRoZSBwYW5lIGFuZCB0aGUgYm9keSBuZXZlciBzaGFyZSBhIHBsYW5lLiBXaW5kaW5nOiBjb3VudGVyLWNsb2Nrd2lzZSBpbiAoeiwgeSkuICovXG5mdW5jdGlvbiBvZmZzZXRQb2x5KHB0czogbnVtYmVyW11bXSwgZDogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IG4gPSBwdHMubGVuZ3RoLCBvdXQ6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gcHRzWyhpICsgbiAtIDEpICUgbl0sIGIgPSBwdHNbaV0sIGMgPSBwdHNbKGkgKyAxKSAlIG5dO1xuICAgIGNvbnN0IGUxID0gW2JbMF0gLSBhWzBdLCBiWzFdIC0gYVsxXV0sIGUyID0gW2NbMF0gLSBiWzBdLCBjWzFdIC0gYlsxXV07XG4gICAgY29uc3QgbDEgPSBNYXRoLmh5cG90KGUxWzBdLCBlMVsxXSkgfHwgMSwgbDIgPSBNYXRoLmh5cG90KGUyWzBdLCBlMlsxXSkgfHwgMTtcbiAgICAvLyBvdXR3YXJkIG5vcm1hbCBvZiBhIENDVyBlZGdlIChkeiwgZHkpIGlzIChkeSwgLWR6KVxuICAgIGNvbnN0IG4xID0gW2UxWzFdIC8gbDEsIC1lMVswXSAvIGwxXSwgbjIgPSBbZTJbMV0gLyBsMiwgLWUyWzBdIC8gbDJdO1xuICAgIGxldCBueCA9IG4xWzBdICsgbjJbMF0sIG55ID0gbjFbMV0gKyBuMlsxXTtcbiAgICBjb25zdCBubCA9IE1hdGguaHlwb3QobngsIG55KSB8fCAxOyBueCAvPSBubDsgbnkgLz0gbmw7XG4gICAgY29uc3QgY29zSGFsZiA9IE1hdGgubWF4KDAuMzUsIG54ICogbjFbMF0gKyBueSAqIG4xWzFdKTtcbiAgICBvdXQucHVzaChbYlswXSArIG54ICogZCAvIGNvc0hhbGYsIGJbMV0gKyBueSAqIGQgLyBjb3NIYWxmXSk7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn1cblxuLyoqIEEgd2hlZWwtYXJjaCBGTEFSRTogYSBoYWxmLWFubnVsdXMgaW4gdGhlICh6LCB5KSBwbGFuZSwgZXh0cnVkZWQgYWNyb3NzIHgwLi54MSBvbiBib3RoIHNpZGVzXG4gKiAgYW5kIHRpbnRlZC4gU3RhbmRzIHByb3VkIG9mIHRoZSBib2R5IHNpZGUgYW5kIGhpZGVzIHRoZSBhcmNoJ3MgY3V0IGVkZ2UuICovXG5mdW5jdGlvbiBmbGFyZSh6YzogbnVtYmVyLCB5YzogbnVtYmVyLCBySW46IG51bWJlciwgck91dDogbnVtYmVyLCB4MDogbnVtYmVyLCB4MTogbnVtYmVyLCBoZXg6IG51bWJlciwgbiA9IDkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgY29uc3QgeiA9IHpjICsgTWF0aC5jb3MoYSkgKiByT3V0LCB5ID0geWMgKyBNYXRoLnNpbihhKSAqIHJPdXQ7IGlmIChpID09PSAwKSBzaGFwZS5tb3ZlVG8oeiwgeSk7IGVsc2Ugc2hhcGUubGluZVRvKHosIHkpOyB9XG4gIGZvciAobGV0IGkgPSBuOyBpID49IDA7IGktLSkgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gbjsgc2hhcGUubGluZVRvKHpjICsgTWF0aC5jb3MoYSkgKiBySW4sIHljICsgTWF0aC5zaW4oYSkgKiBySW4pOyB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBtayA9IChzeDogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHgxIC0geDAsIGJldmVsRW5hYmxlZDogZmFsc2UgfSk7XG4gICAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7IGcudHJhbnNsYXRlKHgxLCAwLCAwKTsgaWYgKHN4IDwgMCkgZy5zY2FsZSgtMSwgMSwgMSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gdGludEdlbyhnLCBoZXgpO1xuICB9O1xuICBjb25zdCBsID0gbWsoLTEpLCByID0gbWsoMSk7XG4gIC8vIGEgbmVnYXRpdmUgc2NhbGUgZmxpcHMgdGhlIHdpbmRpbmc7IHJlc3RvcmUgaXQgc28gdGhlIGZsYXJlIGlzIG5vdCBpbnNpZGUgb3V0XG4gIGNvbnN0IGlkeCA9IGwuZ2V0SW5kZXgoKTsgaWYgKGlkeCkgeyBjb25zdCBhID0gaWR4LmFycmF5IGFzIGFueTsgZm9yIChsZXQgaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSArPSAzKSB7IGNvbnN0IHQgPSBhW2kgKyAxXTsgYVtpICsgMV0gPSBhW2kgKyAyXTsgYVtpICsgMl0gPSB0OyB9IGlkeC5uZWVkc1VwZGF0ZSA9IHRydWU7IH1cbiAgZWxzZSB7IGNvbnN0IHAgPSBsLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTsgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpICs9IDMpIHsgY29uc3QgeDFfID0gcC5nZXRYKGkgKyAxKSwgeTFfID0gcC5nZXRZKGkgKyAxKSwgejFfID0gcC5nZXRaKGkgKyAxKTsgcC5zZXRYWVooaSArIDEsIHAuZ2V0WChpICsgMiksIHAuZ2V0WShpICsgMiksIHAuZ2V0WihpICsgMikpOyBwLnNldFhZWihpICsgMiwgeDFfLCB5MV8sIHoxXyk7IH0gfVxuICBsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2wsIHJdKTtcbn1cblxuLyoqIFNlYW1sZXNzIGFyb3VuZC1ieS1wcm9maWxlIFVWcyBmb3IgYSBMYXRoZUdlb21ldHJ5IHJldm9sdmVkIGFib3V0IFk6IHUgZnJvbSB0aGUgU0VHTUVOVCBpbmRleFxuICogICh0aGUgbGF0aGUgb3JkZXJzIGl0cyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yLCBpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCkgc28gdGhlIGR1cGxpY2F0ZWRcbiAqICBzZWFtIGNvbHVtbiByZWFkcyB1ID0gcmVwZWF0cyBleGFjdGx5IGFuZCBSZXBlYXRXcmFwcGluZyBjbG9zZXMgaXQ7IHYgcGVyIFBST0ZJTEUgUE9JTlQgZnJvbVxuICogIGB2c2AgKG9uZSB2YWx1ZSBwZXIgcHJvZmlsZSBwb2ludCksIHNvIHRoZSBjYWxsZXIgZGVjaWRlcyB3aGljaCB0aWxlIHJvd3MgbGFuZCBvbiB0aGUgdHJlYWQgYW5kXG4gKiAgd2hpY2ggb24gdGhlIHNpZGV3YWxscy4gYHBpdGNoYCBpcyB0aGUgdGlsZSBzaXplIGluIG1ldHJlcyBhcm91bmQgdGhlIHdpZGVzdCByYWRpdXMuICovXG5mdW5jdGlvbiBsYXRoZVVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBwb2ludENvdW50OiBudW1iZXIsIHNlZzogbnVtYmVyLCBwaXRjaDogbnVtYmVyLCB2czogbnVtYmVyW10pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBsZXQgck1heCA9IDA7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSByTWF4ID0gTWF0aC5tYXgock1heCwgTWF0aC5oeXBvdChwLmdldFgoaSksIHAuZ2V0WihpKSkpO1xuICBjb25zdCByZXAgPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKDIgKiBNYXRoLlBJICogck1heCAvIHBpdGNoKSk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgcyA9IE1hdGguZmxvb3IoaSAvIHBvaW50Q291bnQpLCBqID0gaSAlIHBvaW50Q291bnQ7XG4gICAgdXZbaSAqIDJdID0gKHMgLyBzZWcpICogcmVwOyB1dltpICogMiArIDFdID0gdnNbTWF0aC5taW4oaiwgdnMubGVuZ3RoIC0gMSldO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbn1cblxuLyoqIFBpbiBldmVyeSBVViBvZiBhIGdlb21ldHJ5IHRvIG9uZSB0ZXhlbCAtLSB0aGUgV0hJVEUgYmFuZCBhIHR5cmUgdGlsZSBrZWVwcyBhdCBpdHMgdG9wIC0tIHNvIGFcbiAqICByaW0sIGh1YiBvciBzcG9rZSBzaGFyaW5nIHRoZSB0eXJlJ3MgbWF0ZXJpYWwgcmVuZGVycyBpdHMgdmVydGV4IGNvbG91ciB1bm11bHRpcGxpZWQuICovXG5mdW5jdGlvbiBwaW5VVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgdTogbnVtYmVyLCB2OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHV2ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdXYuY291bnQ7IGkrKykgdXYuc2V0WFkoaSwgdSwgdik7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEFuIE9QRU4gc3Bva2VkIHdoZWVsIGFib3V0IHRoZSBYIGF4bGU6IGEgdHlyZSBSSU5HIGxhdGhlIChiZWFkLCBzaWRld2FsbCwgc2hvdWxkZXIsIHRyZWFkIGFuZCBiYWNrXG4gKiBkb3duIHRoZSBmYXIgc2lkZSAtLSBhIGNsb3NlZCB0b3J1cy1saWtlIHByb2ZpbGUsIHNvIG5vdGhpbmcgaXMgb3BlbiB0byB0aGUgZ2F0ZSksIGEgcmltIHJpbmcsIGFcbiAqIGJyYWtlLWRydW0gaHViLCBhbmQgd2lyZSBzcG9rZXMgYXMgdGhyZWUtc2lkZWQgcHJpc21zLiBUaGUgY2xvc2VkIGRpc2ggYHdoZWVsR2VvYCBmaWxscyB0aGUgd2hlZWxcbiAqIHdpdGggYSBzb2xpZCBkaXNjIHRoYXQgSElERVMgdGhlIHNwb2tlcyBpdCBjYXJyaWVzOyBhIG1vdG9yY3ljbGUncyB3aXJlIHdoZWVsIHJlYWRzIGJ5IHRoZSBkYXlsaWdodFxuICogdGhyb3VnaCBpdCwgc28gdGhlIGRpc2ggaXMgZ29uZS4gVHlyZSBVVnMgYXJlIGFyb3VuZC1ieS1wcm9maWxlIGZvciBhIHRyZWFkIHRpbGUgKGBvLnBpdGNoYCBtZXRyZXNcbiAqIHBlciByZXBlYXQgYXJvdW5kOyB2IDAuNS4uMC45NiBpcyB0aGUgdHJlYWRlZCBzdHJpcCBvZiBgdHlyZVRpbGVgKSwgcmltLCBodWIgYW5kIHNwb2tlcyBhcmUgcGlubmVkXG4gKiB0byB0aGUgdGlsZSdzIHdoaXRlIGJhbmQuIFJldm9sdmVkIGFib3V0IFksIHRoZW4gbGFpZCBvbnRvIFguXG4gKi9cbmZ1bmN0aW9uIG9wZW5XaGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlcsIHJyID0gclJpbSAqIDEuMDI7XG4gIGNvbnN0IHByb2Y6IG51bWJlcltdW10gPSBbXG4gICAgW3JyLCAtaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MCwgLWh3ICogMC45OF0sIFtyVHlyZSAqIDAuOTg1LCAtaHcgKiAwLjY2XSwgW3JUeXJlLCAtaHcgKiAwLjMwXSxcbiAgICBbclR5cmUsIGh3ICogMC4zMF0sIFtyVHlyZSAqIDAuOTg1LCBodyAqIDAuNjZdLCBbclR5cmUgKiAwLjkwLCBodyAqIDAuOThdLCBbcnIsIGh3ICogMC43Ml0sIFtyciwgLWh3ICogMC43Ml0sXG4gIF07XG4gIC8vIHYgcGVyIHByb2ZpbGUgcG9pbnQ6IHNpZGV3YWxsIDAuNTAuLjAuNjYsIHRyZWFkIDAuNjYuLjAuODAsIHNpZGV3YWxsIDAuODAuLjAuOTYgKDAuOTYuLjEgaXMgd2hpdGUpXG4gIGNvbnN0IHZzID0gWzAuNTAsIDAuNTYsIDAuNjQsIDAuNjgsIDAuNzgsIDAuODIsIDAuOTAsIDAuOTYsIDAuOTZdO1xuICBjb25zdCB0eXJlID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHJvZi5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgbGF0aGVVVih0eXJlLCBwcm9mLmxlbmd0aCwgc2VnLCBvLnBpdGNoID8/IDAuMDUsIHZzKTtcbiAgdHlyZS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBjb25zdCByaW1Qcm9mID0gW1tyUmltICogMC45MCwgLWh3ICogMC41MF0sIFtyUmltLCAtaHcgKiAwLjYyXSwgW3JSaW0sIGh3ICogMC42Ml0sIFtyUmltICogMC45MCwgaHcgKiAwLjUwXSwgW3JSaW0gKiAwLjkwLCAtaHcgKiAwLjUwXV07XG4gIGNvbnN0IHJpbSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHJpbVByb2YubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIHJpbS5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICBjb25zdCBodWJSID0gby5odWJSID8/IHJSaW0gKiAwLjMyLCBodWJXID0gby5odWJXID8/IGh3ICogMi42O1xuICBjb25zdCBodWIgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShodWJSLCBodWJSLCBodWJXLCBvLmh1YlNlZyA/PyAxMik7XG4gIGNvbnN0IGh1YkNhcCA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGh1YlIgKiAwLjU1LCBodWJSICogMC41NSwgaHViVyAqIDEuMjUsIG8uaHViU2VnID8/IDEyKTtcbiAgY29uc3QgcGFydHMgPSBbdGludEdlbyh0eXJlLCBvLnR5cmVIZXgpLCBwaW5VVih0aW50R2VvKHJpbSwgby5yaW1IZXgpLCAwLjUsIDAuOTg1KSxcbiAgICAgICAgICAgICAgICAgcGluVVYodGludEdlbyhodWIsIG8uaHViSGV4ID8/IG8ucmltSGV4KSwgMC41LCAwLjk4NSksIHBpblVWKHRpbnRHZW8oaHViQ2FwLCBvLmNhcEhleCA/PyBvLnJpbUhleCksIDAuNSwgMC45ODUpXTtcbiAgY29uc3QgZyA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgICAgICAgICAgICAgICAgICAgLy8gbGF0aGUgYXhpcyBZIC0+IHRoZSBheGxlIG9uIFhcbiAgY29uc3Qgc3AgPSBwaW5VVihzcG9rZXMoaHViUiAqIDAuOSwgclJpbSAqIDAuOTUsIGh3LCBvLnNwb2tlcyA/PyAyMCwgby5zcG9rZUhleCA/PyAweGIwYWVhOSwgby5zcG9rZVQgPz8gMC4wMDYsIHRydWUpLCAwLjUsIDAuOTg1KTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbZywgc3BdKTtcbn1cblxuLyoqIFRZUkUgdGlsZSwgcG9ydGVkIGZyb20gdGhlIHByb3AgdGVtcGxhdGU6IGBvLnBpdGNoYCBtZXRyZXMgYXJvdW5kICh2aWEgbGF0aGVVViksIHRoZSBzdHJpcCBhdFxuICogIHYgMC41Li4wLjk2IGEgdHJlYWRlZCB0eXJlIChjaXJjdW1mZXJlbnRpYWwgZ3Jvb3ZlcyBjdXQgYnkgc3RhZ2dlcmVkIHNpcGVzLCBiZWFkIHJpbmdzLCBtb3VsZFxuICogIGxpbmVzLCByb2FkIGR1c3Qgb24gdGhlIGxvd2VyIHNob3VsZGVyLCBncmV5IHNjdWZmcywgZ3JhaW4pLCB2IDAuLjAuNSBhIHdvcm4gc2xpY2ssIGFuZCB0aGUgdG9wXG4gKiAgNCUgcHVyZSBXSElURSBzbyBwaW5uZWQgcGFydHMgcmVuZGVyIHRoZWlyIHZlcnRleCBjb2xvdXIuIERyYXduIGFzIFJBVElPUyBhZ2FpbnN0IHRoZVxuICogIHZlcnRleC1jb2xvdXJlZCBydWJiZXIgYXQgYGJhc2VgICgyMDAvMjU1IC0+IHRoZSB0eXJlIHRvbmUgaXMgYXV0aG9yZWQgMS4yNzV4IGl0cyBhbGJlZG8gc28gZHVzdFxuICogIGFuZCBzY3VmZnMgY2FuIGdvIEJSSUdIVEVSIHRoYW4gdGhlIHJ1YmJlciB1bmRlciBhIG11bHRpcGx5IGNhbnZhcykuIGBvLmJhbmRgIGlzIHRoZSB0cmVhZCdzXG4gKiAgc2hhcmUgb2YgdGhlIHN0cmlwLCB0b3AgdG8gYm90dG9tLCBhbmQgbXVzdCBhZ3JlZSB3aXRoIG9wZW5XaGVlbEdlbydzIHRyZWFkIHJvd3MuICovXG5mdW5jdGlvbiB0eXJlVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGJhc2UgPSBvLmJhc2UgPz8gMjAwLCBiYW5kID0gby5iYW5kID8/IFswLjM1LCAwLjY1XSwgZ3Jvb3ZlID0gby5ncm9vdmUgPz8gMC40NTtcbiAgICBjb25zdCBndiA9IE1hdGgucm91bmQoYmFzZSAqIGdyb292ZSksIHJ2ID0gTWF0aC5yb3VuZChiYXNlICogMC43KSwgbXYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjkpO1xuICAgIGNvbnN0IGR1c3QgPSBvLmR1c3QgPz8gWzIzMiwgMjE0LCAxOTBdO1xuICAgIGNvbnN0IHdoaXRlID0gTWF0aC5yb3VuZChzICogMC4wNCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtiYXNlfSwke2Jhc2V9LCR7YmFzZX0pYDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcyAqIHMgLyA2OyBpKyspIHsgY29uc3QgdiA9IGJhc2UgKyBNYXRoLnJvdW5kKChybmQoKSAtIDAuNSkgKiAyMik7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMiwgMik7IH1cbiAgICBjb25zdCBzdHJpcCA9ICh5YTogbnVtYmVyLCB5YjogbnVtYmVyLCB0cmVhZGVkOiBib29sZWFuKSA9PiB7XG4gICAgICBjb25zdCBoID0geWIgLSB5YSwgYjAgPSB5YSArIGggKiAoMSAtIGJhbmRbMV0pLCBiMSA9IHlhICsgaCAqICgxIC0gYmFuZFswXSk7XG4gICAgICBjb25zdCBuZyA9IG8uZ3Jvb3ZlcyA/PyAzLCBndyA9IGggKiAwLjAyNDtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9KWA7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5nOyBpKyspIHsgY29uc3QgeSA9IGIwICsgKGIxIC0gYjApICogKGkgKyAxKSAvIChuZyArIDEpOyBjdHguZmlsbFJlY3QoMCwgeSAtIGd3IC8gMiwgcywgZ3cpOyB9XG4gICAgICBjb25zdCBucyA9IG8uc2lwZXMgPz8gMiwgdyA9IHMgKiAoby5zaXBlV2lkdGggPz8gMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8PSBuZzsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkwID0gayA9PT0gMCA/IGIwIDogYjAgKyAoYjEgLSBiMCkgKiBrIC8gKG5nICsgMSkgKyBndyAvIDIsIHkxID0gayA9PT0gbmcgPyBiMSA6IGIwICsgKGIxIC0gYjApICogKGsgKyAxKSAvIChuZyArIDEpIC0gZ3cgLyAyO1xuICAgICAgICBjb25zdCBvdXRlciA9IGsgPT09IDAgfHwgayA9PT0gbmc7XG4gICAgICAgIGlmICghdHJlYWRlZCAmJiAhb3V0ZXIpIGNvbnRpbnVlO1xuICAgICAgICBjb25zdCB5czAgPSB0cmVhZGVkID8geTAgOiAoayA9PT0gMCA/IHkwIDogeTEgLSAoeTEgLSB5MCkgKiAwLjQ1KSwgeXMxID0gdHJlYWRlZCA/IHkxIDogKGsgPT09IDAgPyB5MCArICh5MSAtIHkwKSAqIDAuNDUgOiB5MSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnM7IGkrKykge1xuICAgICAgICAgIGNvbnN0IHggPSAoKGkgKyAwLjUpIC8gbnMgKyAoayAlIDIpICogMC41IC8gbnMpICogcyArIChybmQoKSAtIDAuNSkgKiBzICogMC4wNiwgc2wgPSAocm5kKCkgLSAwLjUpICogcyAqIDAuMDg7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdywgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgc2wsIHlzMSk7IGN0eC5saW5lVG8oeCArIGR4ICsgc2wsIHlzMSk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjb25zdCBzaCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBiMCAtIGggKiAwLjAzLCAwLCBiMCArIGggKiAwLjAyKTsgc2guYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDApYCk7IHNoLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwLjQ1KWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IHNoOyBjdHguZmlsbFJlY3QoMCwgYjAgLSBoICogMC4wMywgcywgaCAqIDAuMDUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtydn0sJHtydn0sJHtydn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMDQ1LCBzLCBoICogMC4wMTIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC45NCwgcywgaCAqIDAuMDEyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7bXZ9LCR7bXZ9LCR7bXZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjExLCBzLCAyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuODgsIHMsIDIpO1xuICAgICAgY29uc3QgZGcgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgeWIsIDAsIHlhICsgaCAqIDAuNik7IGRnLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwke28uZHVzdEFscGhhID8/IDAuMzV9KWApOyBkZy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBkZzsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuNiwgcywgaCAqIDAuNCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLnNjdWZmcyA/PyAxNCk7IGkrKykge1xuICAgICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgPCAwLjUgPyBiMCArIChybmQoKSAtIDAuMykgKiBoICogMC4wOCA6IGIxICsgKHJuZCgpIC0gMC43KSAqIGggKiAwLjA4LCByID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjA1KSwgdiA9IDIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyNSk7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpOyBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMC41KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHt2fSwke3Z9LCR7dn0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyOyBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHksIHIgKiAyLjIsIHIgKiAwLjYsIDAsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdsaWdodGVyJztcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gYjAgKyBybmQoKSAqIChiMSAtIGIwKSwgdiA9IDYgKyBNYXRoLnJvdW5kKHJuZCgpICogMTQpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7TWF0aC5yb3VuZCh2ICogMC45KX0sJHtNYXRoLnJvdW5kKHYgKiAwLjc1KX0pYDsgY3R4LmZpbGxSZWN0KHgsIHksIDIgKyBybmQoKSAqIDYsIDIgKyBybmQoKSAqIDMpOyB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgICB9O1xuICAgIHN0cmlwKHdoaXRlLCBzIC8gMiwgdHJ1ZSk7ICAgLy8gdiAwLjUuLjAuOTY6IHRyZWFkZWRcbiAgICBzdHJpcChzIC8gMiwgcywgZmFsc2UpOyAgICAgIC8vIHYgMC4uMC41OiBzbGlja1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCB3aGl0ZSk7ICAgLy8gdiAwLjk2Li4xOiB3aGl0ZSwgZm9yIHBpbm5lZCBwYXJ0c1xuICB9KTtcbn1cblxuLyoqXG4gKiBBIERSQVBFRCBTSEVFVCAocG9ydGVkIGZyb20gdGhlIHByb3AgdGVtcGxhdGUpOiBgaGVpZ2h0c1tqXVtpXWAgaXMgdGhlIHRvcCBzdXJmYWNlIGF0IHggPSB4MC4ueDFcbiAqIChpIG92ZXIgbngpIGFuZCB6ID0gejAuLnoxIChqIG92ZXIgbnopOyB0aGUgc2hlZXQgaXMgYHRgIHRoaWNrLiBUb3AgYW5kIHVuZGVyc2lkZSBhcmUgc21vb3RoLXNoYWRlZFxuICogZ3JpZHMsIHRoZSBmb3VyIGVkZ2VzIGFyZSBmbGF0IHN0cmlwcyB3b3VuZCBvdXR3YXJkLiBBIGNhbnZhcyBjYW5vcHkgaXMgYSByaWRnZSBsaW5lIG1pbnVzIHRoZSBzYWdcbiAqIGJldHdlZW4gaXRzIHBvc3RzIG1pbnVzIHRoZSBkcm9vcCBvZiBpdHMgZnJlZSBlZGdlcyAtLSBjbG90aCwgd2hlcmUgYSBzbGFiIHJlYWRzIGFzIGEgcGFpbnRlZCBib3guXG4gKi9cbmZ1bmN0aW9uIHNoZWV0KHM6IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgbng6IG51bWJlciA9IHMubngsIG56OiBudW1iZXIgPSBzLm56LCBIaDogbnVtYmVyW11bXSA9IHMuaGVpZ2h0cywgdDogbnVtYmVyID0gcy50ID8/IDAuMDEyO1xuICBjb25zdCBYID0gKGk6IG51bWJlcikgPT4gcy54MCArIChzLngxIC0gcy54MCkgKiBpIC8gbng7XG4gIGNvbnN0IFogPSAoajogbnVtYmVyKSA9PiBzLnowICsgKHMuejEgLSBzLnowKSAqIGogLyBuejtcbiAgY29uc3QgZ3JpZCA9ICh5T2ZmOiBudW1iZXIsIGZsaXA6IGJvb2xlYW4pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPD0gbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPD0gbng7IGkrKykgeyBwb3MucHVzaChYKGkpLCBIaFtqXVtpXSArIHlPZmYsIFooaikpOyB1di5wdXNoKGkgLyBueCwgaiAvIG56KTsgfVxuICAgIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7XG4gICAgICBjb25zdCBhID0gaiAqIChueCArIDEpICsgaSwgYiA9IGEgKyAxLCBjID0gYSArIG54ICsgMSwgZCA9IGMgKyAxO1xuICAgICAgaWYgKGZsaXApIGlkeC5wdXNoKGEsIGIsIGMsIGIsIGQsIGMpOyBlbHNlIGlkeC5wdXNoKGEsIGMsIGIsIGIsIGMsIGQpO1xuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLnNldEluZGV4KGlkeCk7IGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHBhcnRzID0gW2dyaWQoMCwgZmFsc2UpLCBncmlkKC10LCB0cnVlKV07XG4gIGNvbnN0IHN0cmlwID0gKHB0czogbnVtYmVyW11bXVtdLCBvdXQ6IG51bWJlcltdKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtwMCwgcDFdIG9mIHB0cykge1xuICAgICAgY29uc3QgcTAgPSBwMCwgcTEgPSBwMSwgcTIgPSBbcDFbMF0sIHAxWzFdIC0gdCwgcDFbMl1dLCBxMyA9IFtwMFswXSwgcDBbMV0gLSB0LCBwMFsyXV07XG4gICAgICBjb25zdCBlMSA9IFtxMVswXSAtIHEwWzBdLCBxMVsxXSAtIHEwWzFdLCBxMVsyXSAtIHEwWzJdXSwgZTIgPSBbcTJbMF0gLSBxMFswXSwgcTJbMV0gLSBxMFsxXSwgcTJbMl0gLSBxMFsyXV07XG4gICAgICBjb25zdCBuID0gW2UxWzFdICogZTJbMl0gLSBlMVsyXSAqIGUyWzFdLCBlMVsyXSAqIGUyWzBdIC0gZTFbMF0gKiBlMlsyXSwgZTFbMF0gKiBlMlsxXSAtIGUxWzFdICogZTJbMF1dO1xuICAgICAgY29uc3QgdHJpID0gblswXSAqIG91dFswXSArIG5bMV0gKiBvdXRbMV0gKyBuWzJdICogb3V0WzJdID49IDAgPyBbcTAsIHExLCBxMiwgcTAsIHEyLCBxM10gOiBbcTAsIHEyLCBxMSwgcTAsIHEzLCBxMl07XG4gICAgICBmb3IgKGNvbnN0IHEgb2YgdHJpKSB7IHBvcy5wdXNoKHFbMF0sIHFbMV0sIHFbMl0pOyB1di5wdXNoKDAsIDApOyB9XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIGc7XG4gIH07XG4gIGNvbnN0IHRvcCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4gW1goaSksIEhoW2pdW2ldLCBaKGopXTtcbiAgY29uc3QgZTA6IG51bWJlcltdW11bXSA9IFtdLCBlMTogbnVtYmVyW11bXVtdID0gW10sIGUyOiBudW1iZXJbXVtdW10gPSBbXSwgZTM6IG51bWJlcltdW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHsgZTAucHVzaChbdG9wKGksIDApLCB0b3AoaSArIDEsIDApXSk7IGUxLnB1c2goW3RvcChpLCBueiksIHRvcChpICsgMSwgbnopXSk7IH1cbiAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSB7IGUyLnB1c2goW3RvcCgwLCBqKSwgdG9wKDAsIGogKyAxKV0pOyBlMy5wdXNoKFt0b3AobngsIGopLCB0b3AobngsIGogKyAxKV0pOyB9XG4gIHBhcnRzLnB1c2goc3RyaXAoZTAsIFswLCAwLCAtMV0pLCBzdHJpcChlMSwgWzAsIDAsIDFdKSwgc3RyaXAoZTIsIFstMSwgMCwgMF0pLCBzdHJpcChlMywgWzEsIDAsIDBdKSk7XG4gIHJldHVybiBtZXJnZUdlb3MocGFydHMpO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuLyoqIFRyYWN0b3ItdHlyZSBMVUdTOiBgbmAgYmFycyBsYWlkIGFjcm9zcyB0aGUgdHJlYWQsIGVhY2ggeWF3ZWQgYWx0ZXJuYXRlbHkgKy1gc2tld2AgcmFkIGFib3V0XG4gKiAgaXRzIG93biByYWRpYWwgc28gY29uc2VjdXRpdmUgYmFycyByZWFkIGFzIHRoZSBjaGV2cm9uIG9mIGFuIGFncmljdWx0dXJhbCB0eXJlLCBzdGFuZGluZyBgaGBcbiAqICBwcm91ZCBvZiB0aGUgdHJlYWQgcmluZy4gQnVpbHQgYWJvdXQgdGhlIFggYXhsZSBsaWtlIHdoZWVsR2VvIGFuZCBtZXJnZWQgSU5UTyB0aGUgd2hlZWxcbiAqICBnZW9tZXRyeSwgc28gdGhlIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkgYW5kIHRoZSBsdWdzIGNvc3Qgbm90aGluZyBwZXIgaW5zdGFuY2UuXG4gKiAgRGVmYXVsdC1vZmY6IG9ubHkgYSBjZmcgdGhhdCBzZXRzIGBiaWtlLmx1Z3NgIGdldHMgdGhlbS4gKi9cbmZ1bmN0aW9uIGx1Z3MoclR5cmU6IG51bWJlciwgaGFsZlc6IG51bWJlciwgbzogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBuID0gby5uID8/IDE2LCBoID0gby5oID8/IDAuMDQsIHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShoYWxmVyAqIDIgKiAoby53ID8/IDAuODUpLCBoLCBvLmQgPz8gMC4wNik7XG4gICAgZy5yb3RhdGVZKChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiAoby5za2V3ID8/IDAuNCkpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJUeXJlIC0gaCAqIDAuMzUsIDApO1xuICAgIGcucm90YXRlWCgoaSAvIG4pICogTWF0aC5QSSAqIDIgKyAoby5waGFzZSA/PyAwKSk7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3MocGFydHMpLCBvLmhleCA/PyAweDU1NTU1NSk7XG59XG5cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUb3lvdGFDb21tdXRlclZhbk1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnVG95b3RhIENvbW11dGVyIFZhbic7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXIgYm9keSAoc2hhcmVkIHRlbXBsYXRlKSAqL1xuICBjb25zdCBXID0gRy53aWR0aCBhcyBudW1iZXI7XG4gIGNvbnN0IHdoID0gRy53aGVlbHMgYXMgYW55O1xuXG4gIC8vIDEuIEJPRFk6IHRoZSBzaWRlIG91dGxpbmUgY2xvc2VkIGFsb25nIHRoZSBzaWxsIHdpdGggYSB3aGVlbC1hcmNoIG5vdGNoIGF0IGVhY2ggYXhsZSwgc3dlcHRcbiAgLy8gICAgYWNyb3NzIHRoZSB3aWR0aCwgdGhlbiBuYXJyb3dlZCBhYm92ZSB0aGUgYmVsdCAodHVtYmxlaG9tZSkgYW5kIHJvdW5kZWQgaW4gcGxhbiBhdCB0aGUgZW5kcy5cbiAgY29uc3Qgb3V0bGluZTogbnVtYmVyW11bXSA9IChHLm91dGxpbmUgYXMgbnVtYmVyW11bXSkuc2xpY2UoKTtcbiAgY29uc3Qgc2lsbCA9IEcuc2lsbCBhcyBudW1iZXI7XG4gIGNvbnN0IHJBID0gd2guYXJjaCBhcyBudW1iZXI7XG4gIGNvbnN0IGFyY2hQdHMgPSAoemM6IG51bWJlcikgPT4geyBjb25zdCBwOiBudW1iZXJbXVtdID0gW107IGZvciAobGV0IGkgPSAwOyBpIDw9IDg7IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gODsgcC5wdXNoKFt6YyArIE1hdGguY29zKGEpICogckEsIHdoLnIgKyBNYXRoLnNpbihhKSAqIHJBXSk7IH0gcmV0dXJuIHA7IH07XG4gIGNvbnN0IHpSZWFyU2lsbCA9IG91dGxpbmVbb3V0bGluZS5sZW5ndGggLSAxXVswXSwgekZyb250U2lsbCA9IG91dGxpbmVbMF1bMF07XG4gIGNvbnN0IHNpbGxSdW46IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guelIsIHdoLnpGXSkge1xuICAgIGlmICh6YyAtIHJBID4gelJlYXJTaWxsICYmIHpjICsgckEgPCB6RnJvbnRTaWxsKSBzaWxsUnVuLnB1c2goLi4uYXJjaFB0cyh6YykpO1xuICB9XG4gIGNvbnN0IHByb2ZpbGUgPSBvdXRsaW5lLmNvbmNhdChzaWxsUnVuLmxlbmd0aCA/IHNpbGxSdW4gOiBbXSk7XG4gIC8vIGBzaGFwZWAgbWF5IGFkZCBzdGVwcyBhbmQgc2hvdWxkZXIgLyBub3NlIC8gdGFpbCByb3VuZGluZ3M7IHRoZSBib2R5J3Mgb3duIHByb2ZpbGUgYW5kIHdpZHRoXG4gIC8vIGFyZSB0aGUgcmVmZXJlbmNlIGV2ZXJ5IHByb3VkIGJhbmQgaXMgcm91bmRlZCBhZ2FpbnN0LCBzbyB0aGV5IGFyZSBzZXQgaGVyZSBhbmQgbm90IHBlciBjZmcuXG4gIGNvbnN0IHNoYXBlT3B0czogYW55ID0geyB0dW1ibGU6IEcudHVtYmxlLCBwbGFuOiBHLnBsYW4sIC4uLigoRy5zaGFwZSBhcyBhbnkpID8/IHt9KSwgYmFzZVdpZHRoOiBXLCB0b3BPZjogcHJvZmlsZSB9O1xuICBjb25zdCBib2R5R2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFt0aW50R2VvKHNpZGVFeHRydWRlKHByb2ZpbGUsIFcsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLmJvZHlCb3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgYm9keUdlb3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgZm9yIChjb25zdCBleCBvZiAoRy5ib2R5RXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgYm9keUdlb3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGV4LnBvbHksIGV4LndpZHRoID8/IFcsIGV4LnNoYXBlID8/IHt9KSwgZXguaGV4ID8/IEcucGFpbnRIZXgpKTtcbiAgfVxuICBjb25zdCB1dk9wdHMgPSB7IHVTY2FsZTogRy5tdWRVU2NhbGUgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLCB0b3BDbGVhbjogISFHLm11ZFRvcENsZWFuIH07XG4gIGNvbnN0IGJvZHlHZW8gPSBoZWlnaHRVVihtZXJnZUdlb3MoYm9keUdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgY29uc3QgYm9keSA9IGFkZCgnYm9keScsICdCb2R5IHNoZWxsJywgYm9keUdlbywgJ3BhaW50Jyk7XG4gIGlmIChHLmNvbGxpZGVyKSBjb2xsaWRlcnNbJ2JvZHknXSA9IEcuY29sbGlkZXI7XG5cbiAgLy8gMi4gR0xBU1M6IHRoZSBnbGFzc2hvdXNlIHBvbHlnb24gb2Zmc2V0IG91dHdhcmQgc28gZXZlcnkgcGFuZSBzdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkncyBvd25cbiAgLy8gICAgcmFrZWQgZmFjZXMsIHN3ZXB0IGF0IHRoZSBib2R5IHdpZHRoIHBsdXMgdGhlIHNhbWUgbWFyZ2luLCBuYXJyb3dlZCBieSB0aGUgc2FtZSB0dW1ibGVob21lLlxuICBjb25zdCBnbGFzc0dlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgZ2wgPSBHLmdsYXNzIGFzIGFueTtcbiAgaWYgKGdsPy5wb2x5KSBnbGFzc0dlb3MucHVzaChzaWRlRXh0cnVkZShvZmZzZXRQb2x5KGdsLnBvbHksIGdsLnByb3VkID8/IDAuMDA2KSwgVyArIDIgKiAoZ2wucHJvdWQgPz8gMC4wMDYpLCBzaGFwZU9wdHMpKTtcbiAgZm9yIChjb25zdCBiIG9mIChnbD8uYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdsYXNzR2Vvcy5wdXNoKHJib3goYikpO1xuICBpZiAoZ2xhc3NHZW9zLmxlbmd0aCkge1xuICAgIGxldCBnZyA9IHRpbnRHZW8obWVyZ2VHZW9zKGdsYXNzR2VvcyksIGdsLmhleCA/PyAweGZmZmZmZik7XG4gICAgLy8gcGFuZSBVVnM6IHYgcnVucyAwLi4xIGZyb20gdGhlIGdsYXNzIHNpbGwgYHV2WVswXWAgdG8gdGhlIHBhbmUgdG9wIGB1dllbMV1gLCB1IGFsb25nIHRoZVxuICAgIC8vIHBhbmUgaW4gbWV0cmVzIG92ZXIgYHVTY2FsZWAsIHNvIGEgZ2xhc3MgdGlsZSdzIHNreSBncmFkaWVudCBzcGFucyBldmVyeSBwYW5lIHRvcCB0b1xuICAgIC8vIGJvdHRvbTsgaGFybWxlc3Mgd2l0aG91dCBhIHRpbGVcbiAgICBpZiAoZ2wudXZZKSB7XG4gICAgICBjb25zdCBxID0gZ2cuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucSA9IGdnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHV2ID0gbmV3IEZsb2F0MzJBcnJheShxLmNvdW50ICogMik7XG4gICAgICBjb25zdCB1cyA9IGdsLnVTY2FsZSA/PyAxLjYsIHkwID0gZ2wudXZZWzBdLCB5MSA9IGdsLnV2WVsxXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHUgPSBNYXRoLmFicyhucS5nZXRYKGkpKSA+PSBNYXRoLmFicyhucS5nZXRaKGkpKSA/IHEuZ2V0WihpKSA6IHEuZ2V0WChpKTtcbiAgICAgICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHEuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgICAgfVxuICAgICAgZ2cuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICB9XG4gICAgYWRkKCdnbGF6aW5nJywgJ0dsYXppbmcnLCBnZywgJ2dsYXNzJyk7XG4gIH1cblxuICAvLyAzLiBQSUxMQVJTIGFuZCByb29mIGRldGFpbHMgcmlkZSB0aGUgYm9keSdzIHBhaW50IGJ1dCBhcmUgYSBzZXBhcmF0ZSBtZXJnZSBzbyB0aGV5IGNhbiBzdGFuZFxuICAvLyAgICBwcm91ZCBvZiB0aGUgZ2xhc3M7IHRoZXkgam9pbiB0aGUgYm9keSBjb21wb25lbnQgKG9uZSBkcmF3IGNhbGwpIGJ5IGJlaW5nIG1lcmdlZCBpbi5cbiAgY29uc3QgcGlsbGFyR2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHBsIG9mIChHLnBpbGxhcnMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgLy8gYSBwbGFpbiBwb2x5Z29uIHN3ZWVwcyB0aGUgZnVsbCB3aWR0aCAodGhlIG9sZCBiZWhhdmlvdXIpOyB7IHBvbHksIHN0cmlwIH0gc3dlZXBzIG9ubHkgYVxuICAgIC8vIHN0cmlwIHRoYXQgZGVlcCBhdCBlYWNoIHNpZGUsIHdoaWNoIGlzIHdoYXQgYSBwaWxsYXIgYmVzaWRlIGEgcGFuZSBpc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBsKSkgcGlsbGFyR2Vvcy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUocGwsIFcgKyAyICogMC4wMTMsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgICAvLyBgaGV4YCB0aW50cyBvbmUgc3RyaXAgYXdheSBmcm9tIHRoZSBwYWludCAoYSBibGFjayB3aW5kb3cgZ2Fza2V0IG9yIGRyaXAgcmFpbCk7IGRlZmF1bHQgdGhlIHBhaW50XG4gICAgZWxzZSBwaWxsYXJHZW9zLnB1c2godGludEdlbyhzaWRlU3RyaXAocGwucG9seSwgVyArIDIgKiAocGwucHJvdWQgPz8gMC4wMTMpLCBwbC5zdHJpcCA/PyAwLjEwLCBzaGFwZU9wdHMpLCBwbC5oZXggPz8gRy5wYWludEhleCkpO1xuICB9XG4gIGlmIChwaWxsYXJHZW9zLmxlbmd0aCkge1xuICAgIGNvbnN0IHBnID0gaGVpZ2h0VVYobWVyZ2VHZW9zKHBpbGxhckdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgICBjb25zdCBtZXJnZWQgPSBoZWlnaHRVVihtZXJnZUdlb3MoW2JvZHkuZ2VvbWV0cnkgYXMgVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBnXSksIEcubXVkU2NhbGUgPz8gMS4yLCB1dk9wdHMpO1xuICAgIGJvZHkuZ2VvbWV0cnkgPSBtZXJnZWQ7XG4gIH1cblxuICAvLyA0LiBUUklNOiBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLCBzdGVwcywgYXJjaCBmbGFyZXMgYW5kIHRoZSBpbm5lciB3aW5ncyB0aGF0XG4gIC8vICAgIHN0b3AgdGhlIHRocm91Z2gtYXJjaCByZWFkaW5nIGFzIGRheWxpZ2h0IC0tIGV2ZXJ5IG9uZSBhIHRpbnRlZCBib3ggb24gT05FIHdoaXRlIG1hdGVyaWFsLlxuICBjb25zdCB0cmltTGlzdDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGIgb2YgKEcudHJpbSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgdHJpbUxpc3QucHVzaChiKTtcbiAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKEcudHJpbU1pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgdHJpbUxpc3QucHVzaChiKTtcbiAgY29uc3QgdHJpbUdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbdGludGVkQm94ZXModHJpbUxpc3QpXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guekYsIHdoLnpSXSkge1xuICAgIGlmICh3aC5mbGFyZSkgdHJpbUdlb3MucHVzaChmbGFyZSh6Yywgd2guciwgckEgKyAwLjAwNSwgckEgKyB3aC5mbGFyZSwgVyAvIDIgLSAwLjAxMiwgVyAvIDIgKyAod2guZmxhcmVPdXQgPz8gMC4wMyksIHdoLmZsYXJlSGV4ID8/IDB4MmEyYTJhKSk7XG4gICAgLy8gaW5uZXIgd2luZzogYSBkYXJrIGJveCBiZXR3ZWVuIHRoZSB3aGVlbHMnIGlubmVyIGZhY2VzIGZpbGxpbmcgdGhlIGFyY2ggdm9pZFxuICAgIGNvbnN0IGlubmVySGFsZiA9IHdoLnRyYWNrIC0gd2guaGFsZlcgLSAwLjAwNTtcbiAgICB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oYm94QXQoMCwgKHNpbGwgKyB3aC5yICsgckEgLSAwLjAyKSAvIDIgKyAwLjAsIHpjLCBpbm5lckhhbGYgKiAyLCAod2guciArIHJBIC0gMC4wMikgLSBzaWxsICsgMC4xMCwgKHJBIC0gMC4wMykgKiAyKSwgd2gud2VsbEhleCA/PyAweDJiMjkyNikpO1xuICB9XG4gIGZvciAoY29uc3QgdCBvZiAoRy50dWJlcyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICBmb3IgKGNvbnN0IGMgb2YgKEcuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoYy5ydCwgYy5yYiwgYy5oLCBjLnNlZyA/PyAxMik7XG4gICAgaWYgKGMucngpIGcucm90YXRlWChjLnJ4KTsgaWYgKGMucnopIGcucm90YXRlWihjLnJ6KTtcbiAgICBnLnRyYW5zbGF0ZShjLmF0WzBdLCBjLmF0WzFdLCBjLmF0WzJdKTtcbiAgICB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oZywgYy5oZXgpKTtcbiAgfVxuICBhZGQoJ3RyaW0nLCAnVHJpbSwgbGFtcHMsIGJ1bXBlcnMgYW5kIHdoZWVsIHdlbGxzJywgbWVyZ2VHZW9zKHRyaW1HZW9zKSwgJ3RyaW0nKTtcblxuICAvLyA1LiBXSEVFTFM6IG9uZSBsYXRoZSwgZm91ciAob3IgaG93ZXZlciBtYW55KSBpbnN0YW5jZXMsIGVhY2ggYSBuYW1lZCBwaXZvdCBvbiB0aGUgYXhsZS5cbiAgY29uc3Qgd2hlZWxHID0gd2guc3R5bGUgPT09ICdhbGxveSdcbiAgICA/IGFsbG95V2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDI0LCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLndpbmRvd0hleCA/PyAweDJhMjgyNiwgd2gubHVnSGV4ID8/IHdoLnR5cmVIZXgsIHdoLmRpc2ggPz8gMC4zNSwgd2guc3Bva2VzID8/IDEwLCB3aC5zcG9rZVcgPz8gMC4xNilcbiAgICA6IHdoLnN0eWxlID09PSAnc3RlZWwnXG4gICAgPyBzdGVlbFdoZWVsR2VvKHdoLnIsIHdoLnJpbSwgd2guaGFsZlcsIHdoLnNlZyA/PyAyNCwgd2gudHlyZUhleCwgd2gucmltSGV4LCB3aC52ZW50SGV4ID8/IDB4NGE0ODQyLCB3aC5sdWdIZXggPz8gd2gudHlyZUhleCwgd2guZGlzaCA/PyAwLjUwKVxuICAgIDogd2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDIwLCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLmRpc2ggPz8gMC41NSk7XG4gIC8vIGBsdWdzYCBtZXJnZXMgYSByaW5nIG9mIHRyZWFkIGJsb2NrcyBpbnRvIHRoZSBTQU1FIHdoZWVsIGdlb21ldHJ5IChvbmUgdW5pcXVlIGdlb21ldHJ5LCBvbmVcbiAgLy8gaW5zdGFuY2VkIHN1Ym1pc3Npb24pOiBtdWQtdGVycmFpbiB0eXJlcyB3aG9zZSBsdWdzIHN0YW5kIG9mZiB0aGUgdHJlYWQgcmVhZCBhdCBwcm9wIGRpc3RhbmNlLlxuICBjb25zdCB3aGVlbEcyID0gd2gubHVncyA/IG1lcmdlR2Vvcyhbd2hlZWxHLCBsdWdzKHdoLnIsIHdoLmhhbGZXLCB3aC5sdWdzKV0pIDogd2hlZWxHO1xuICBjb25zdCB3aGVlbE1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHAgb2Ygd2gucG9zaXRpb25zIGFzIG51bWJlcltdW10pIHtcbiAgICB3aGVlbE1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UobmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHBbMF0gPCAwID8gTWF0aC5QSSA6IDApLCBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICB9XG4gIGFkZEluc3QoJ3doZWVscycsICdXaGVlbHMnLCB3aGVlbEcyLCAndHJpbScsIHdoZWVsTWF0cyk7XG5cbiAgLy8gNi4gRVhUUkEgY29tcG9uZW50cyBkZWNsYXJlZCBieSB0aGUgY2ZnIChhIGNvcnJ1Z2F0ZWQgcm9vZiwgYSBiZWQgZmxvb3IsIGEgY2Fub3B5KSAtLSBlYWNoXG4gIC8vICAgIGl0cyBvd24gbWF0ZXJpYWwgYW5kIHN1Ym1pc3Npb24sIGNvc3RlZCBpbiB0aGUgYmxvY2tvdXQuXG4gIGZvciAoY29uc3QgZXggb2YgKEcuZXh0cmFzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChleC5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoZXguYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChleC50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgZSBvZiAoZXguZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUoZS5wb2x5LCBlLndpZHRoLCBlLnNoYXBlID8/IHt9KSwgZS5oZXgpKTtcbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKGV4LnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGlmIChleC51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGFkZChleC5pZCwgZXgubmFtZSwgZywgZXgubWF0ZXJpYWwpO1xuICB9XG5cbiAgLy8gNy4gUG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXM6IGJvdW5kIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiBzbyB0aGUgdGV4dHVyZWxlc3NcbiAgLy8gICAgZGVjbGFyYXRpb25zIHN0YW5kLiBFdmVyeSB0b25lIGlzIGEgbWVhc3VyZWQgcmF0aW8gcmVjb3JkZWQgb24gdGhlIG1hdGVyaWFsIGluIHRoZSBzcGVjLlxuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMsIHQub3B0cyA/PyB7fSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gMjU2LCB0LnBpdGNoID8/IDI0LCB0LmxvdyA/PyAwLjcyLCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdnbGFzcycpIHRleCA9IGdsYXNzVGlsZSh0LnNpemUgPz8gMjU2LCB0LmxvdywgdC5zZWVkID8/IDksIHQuc3RyZWFrcyA/PyA1KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlVG95b3RhQ29tbXV0ZXJWYW5Nb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBdUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsT0FBTztBQUFBLFFBQ0w7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFdBQVc7QUFBQSxJQUNiO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLFVBQ1AsU0FBUztBQUFBLFVBQ1QsWUFBWTtBQUFBLFVBQ1osWUFBWTtBQUFBLFlBQ1YsS0FBSztBQUFBLFlBQ0wsUUFBUTtBQUFBLFlBQ1IsUUFBUTtBQUFBLFVBQ1Y7QUFBQSxVQUNBLFFBQVE7QUFBQSxZQUNOLEtBQUs7QUFBQSxVQUNQO0FBQUEsVUFDQSxRQUFRO0FBQUEsWUFDTixLQUFLO0FBQUEsVUFDUDtBQUFBLFVBQ0EsVUFBVTtBQUFBLFVBQ1YsU0FBUztBQUFBLFlBQ1A7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxPQUFPO0FBQUEsTUFDUCxPQUFPO0FBQUEsUUFDTDtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsTUFDVixTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLE1BQ1Q7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsTUFDWDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxVQUFVO0FBQUEsTUFDUixLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUEsTUFDUixTQUFTO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQU9GLFNBQVMsVUFBVSxNQUFv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
