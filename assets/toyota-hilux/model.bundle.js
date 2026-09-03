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

// ../repo/scratch/toyota-hilux/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
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
      "color": 9865078,
      "roughness": 0.45,
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
        0.3825331504343849,
        0.6106357993625228,
        0.9999999999999999
      ],
      "seed": 11,
      "coverage": 0.4,
      "size": 512,
      "bump": 0,
      "opts": {
        "tone": [
          0.9999999999999999,
          0.9999999999999999,
          0.9680363567506153
        ],
        "floor": 0.3,
        "streaks": 240,
        "cloud": 0.08,
        "speckle": 4e3,
        "zones": [
          [
            0.04,
            0.24,
            4
          ],
          [
            0.51,
            0.68,
            3
          ],
          [
            0.81,
            0.87,
            1.5
          ],
          [
            0,
            0.04,
            0.3
          ],
          [
            0.87,
            1,
            0.3
          ],
          [
            0.24,
            0.4,
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
        0.8,
        0.39,
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
        -0.8,
        0.39,
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
        0.8,
        0.39,
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
        -0.8,
        0.39,
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
    "mudUScale": 5.33,
    "mudTopClean": true,
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
        0.9892,
        1.7603
      ],
      [
        0.9705,
        1.7771
      ],
      [
        0.9488,
        1.7896
      ],
      [
        0.9249,
        1.7974
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
        -0.6311,
        1.7959
      ],
      [
        -0.66,
        1.7839
      ],
      [
        -0.6849,
        1.7649
      ],
      [
        -0.7039,
        1.74
      ],
      [
        -0.7159,
        1.7111
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
        "zMax": 1.75,
        "fade": 0.25
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
          1.54
        ],
        [
          0.8,
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
            1.279,
            1.58
          ],
          [
            1.169,
            1.58
          ]
        ],
        "strip": 0.1,
        "proud": 6e-3
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
            1.66
          ],
          [
            0.14,
            1.66
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
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
            1.6
          ],
          [
            -0.735,
            1.6
          ]
        ],
        "strip": 0.1,
        "proud": 6e-3
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
            1.66
          ],
          [
            -0.3,
            1.66
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
      },
      {
        "poly": [
          [
            1.4,
            1.125
          ],
          [
            1.4,
            1.155
          ],
          [
            -0.735,
            1.155
          ],
          [
            -0.735,
            1.125
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
      },
      {
        "poly": [
          [
            1.11,
            1.54
          ],
          [
            1.11,
            1.565
          ],
          [
            0.8,
            1.665
          ],
          [
            -0.62,
            1.665
          ],
          [
            -0.62,
            1.64
          ],
          [
            0.8,
            1.64
          ]
        ],
        "strip": 0.1,
        "hex": 1184272
      }
    ],
    "wheels": {
      "r": 0.375,
      "rim": 0.2,
      "halfW": 0.15,
      "track": 0.8,
      "zF": 1.715,
      "zR": -1.3699999999999999,
      "seg": 24,
      "arch": 0.475,
      "style": "steel",
      "tyreHex": 6182736,
      "lugHex": 4867133,
      "rimHex": 9077370,
      "ventHex": 4868162,
      "dish": 0.5,
      "lugs": {
        "n": 20,
        "h": 0.035,
        "w": 0.88,
        "d": 0.055,
        "skew": 0.35,
        "hex": 5656650
      },
      "flare": 0.1,
      "flareOut": 0.05,
      "flareHex": 1447444,
      "wellHex": 4867906,
      "positions": [
        [
          0.8,
          0.39,
          1.715
        ],
        [
          -0.8,
          0.39,
          1.715
        ],
        [
          0.8,
          0.39,
          -1.3699999999999999
        ],
        [
          -0.8,
          0.39,
          -1.3699999999999999
        ]
      ]
    },
    "trim": [
      [
        1710616,
        0,
        0.52,
        2.6,
        1.4,
        0.22,
        0.14
      ],
      [
        1447444,
        0,
        0.395,
        2.56,
        1.5,
        0.07,
        0.12
      ],
      [
        3160650,
        0,
        0.8,
        2.61,
        1.16,
        0.22,
        0.02
      ],
      [
        12896460,
        0,
        0.725,
        2.625,
        1.1,
        0.022,
        0.015
      ],
      [
        12896460,
        0,
        0.765,
        2.625,
        1.1,
        0.022,
        0.015
      ],
      [
        12896460,
        0,
        0.805,
        2.625,
        1.1,
        0.022,
        0.015
      ],
      [
        12896460,
        0,
        0.845,
        2.625,
        1.1,
        0.022,
        0.015
      ],
      [
        12896460,
        0,
        0.885,
        2.625,
        1.1,
        0.022,
        0.015
      ],
      [
        12896460,
        0,
        0.915,
        2.622,
        1.18,
        0.03,
        0.02
      ],
      [
        12896460,
        0,
        0.695,
        2.622,
        1.18,
        0.03,
        0.02
      ],
      [
        1315858,
        0.9,
        1.205,
        -1.66,
        0.07,
        0.03,
        1.94
      ],
      [
        1315858,
        -0.9,
        1.205,
        -1.66,
        0.07,
        0.03,
        1.94
      ],
      [
        1315858,
        0,
        1.205,
        -2.63,
        1.86,
        0.03,
        0.08
      ],
      [
        7235676,
        -0.6,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        7235676,
        -0.36,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        7235676,
        -0.12,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        7235676,
        0.12,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        7235676,
        0.36,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        7235676,
        0.6,
        0.834,
        -1.66,
        0.07,
        8e-3,
        1.76
      ],
      [
        3815477,
        0,
        0.93,
        -2.672,
        1.16,
        0.012,
        5e-3
      ],
      [
        3815477,
        0,
        1.07,
        -2.672,
        1.16,
        0.012,
        5e-3
      ],
      [
        1710616,
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
        7762015,
        0.862,
        1,
        -1.66,
        0.012,
        0.37,
        1.8
      ],
      [
        7762015,
        -0.862,
        1,
        -1.66,
        0.012,
        0.37,
        1.8
      ],
      [
        7762015,
        0,
        1,
        -0.802,
        1.71,
        0.37,
        0.012
      ],
      [
        7762015,
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
        1710616,
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
        1710616,
        0.98,
        1.27,
        1,
        0.1,
        0.03,
        0.03
      ],
      [
        3559546,
        1,
        1.3,
        0.98,
        0.06,
        0.15,
        0.2
      ],
      [
        1710616,
        0.936,
        1.05,
        0.62,
        0.012,
        0.03,
        0.15
      ],
      [
        1710616,
        0.936,
        1.05,
        -0.36,
        0.012,
        0.03,
        0.15
      ],
      [
        1710616,
        0.88,
        0.4,
        0.3,
        0.16,
        0.04,
        2.2
      ],
      [
        12896460,
        0.57,
        0.805,
        2.622,
        0.03,
        0.25,
        0.02
      ],
      [
        12089914,
        0.7,
        0.685,
        2.575,
        0.28,
        0.045,
        0.03,
        0,
        0.45
      ],
      [
        1184272,
        0.936,
        0.78,
        0.19,
        4e-3,
        0.66,
        0.02
      ],
      [
        1184272,
        0.936,
        0.78,
        1.3,
        4e-3,
        0.66,
        0.02
      ],
      [
        1184272,
        0.936,
        0.78,
        -0.735,
        4e-3,
        0.66,
        0.02
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
function createModel(options = {}) {
  return createObjectModel(void 0, options);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVG95b3RhIEhpbHV4IC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuODYgeCAxLjgyIHggNS4zMyBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxuICogQnVkZ2V0IChoZXJvKTogPD04MDAwIHRyaWFuZ2xlcywgPD02IGRyYXcgY2FsbHMsIDw9NCBtYXRlcmlhbHMsIDw9OCB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgVkVISUNMRVMuIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgU0lERS1QUk9GSUxFIEVYVFJVU0lPTiAtLSBhXG4gKiBjbG9zZWQgcG9seWdvbiBpbiB0aGUgKHosIHkpIHBsYW5lIHN3ZXB0IGFjcm9zcyB0aGUgd2lkdGggYW5kIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXggZm9yXG4gKiB0dW1ibGVob21lIGFuZCBwbGFuIHJvdW5kaW5nIC0tIHBsdXMgYSBsYXRoZWQgV0hFRUwgcmV2b2x2ZWQgYWJvdXQgaXRzIGF4bGUgYW5kIGEgcG9seWxpbmUgVFVCRVxuICogZm9yIGhhbmRsZWJhcnMsIHJhaWxzIGFuZCBmcmFtZXMuIEV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBvbmUgbWF0ZXJpYWwgaXMgY2FycmllZCBhcyBhXG4gKiB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsIHNvIGEgdHdvLXRvbmUgYm9keSwgYSBibGFjayB0eXJlIG9uIGEgc2lsdmVyIHJpbSBhbmQgYW4gYW1iZXJcbiAqIGluZGljYXRvciBhbGwgcmlkZSBvbmUgc2hhZGVyIGFuZCBvbmUgc3VibWlzc2lvbi5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInRveW90YS1oaWx1eFwiLFxuICAgIFwibmFtZVwiOiBcIlRveW90YSBIaWx1eFwiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlRveW90YUhpbHV4XCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuODYgeCAxLjgyIHggNS4zMyBtIChtaXJyb3JzIHRvIDIuMDYpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxcbiAqIEJ1ZGdldCAoaGVybyk6IDw9ODAwMCB0cmlhbmdsZXMsIDw9NiBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJjb2xvclwiOiA5ODY1MDc4LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQ1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwiZ2xhc3NcIixcbiAgICAgICAgXCJjb2xvclwiOiA0NjA4MDkwLFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjQyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLjA1LFxuICAgICAgICBcIm9wYWNpdHlcIjogMC45MlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcInRyaW1cIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC42MixcbiAgICAgICAgXCJtZXRhbG5lc3NcIjogMCxcbiAgICAgICAgXCJ2ZXJ0ZXhDb2xvcnNcIjogdHJ1ZVxuICAgICAgfVxuICAgIF0sXG4gICAgXCJ0aWxlc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibWF0ZXJpYWxcIjogXCJwYWludFwiLFxuICAgICAgICBcImtpbmRcIjogXCJtdWRcIixcbiAgICAgICAgXCJiYXNlXCI6IFtcbiAgICAgICAgICAwLjM4MjUzMzE1MDQzNDM4NDksXG4gICAgICAgICAgMC42MTA2MzU3OTkzNjI1MjI4LFxuICAgICAgICAgIDAuOTk5OTk5OTk5OTk5OTk5OVxuICAgICAgICBdLFxuICAgICAgICBcInNlZWRcIjogMTEsXG4gICAgICAgIFwiY292ZXJhZ2VcIjogMC40LFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcImJ1bXBcIjogMCxcbiAgICAgICAgXCJvcHRzXCI6IHtcbiAgICAgICAgICBcInRvbmVcIjogW1xuICAgICAgICAgICAgMC45OTk5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgMC45OTk5OTk5OTk5OTk5OTk5LFxuICAgICAgICAgICAgMC45NjgwMzYzNTY3NTA2MTUzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImZsb29yXCI6IDAuMyxcbiAgICAgICAgICBcInN0cmVha3NcIjogMjQwLFxuICAgICAgICAgIFwiY2xvdWRcIjogMC4wOCxcbiAgICAgICAgICBcInNwZWNrbGVcIjogNDAwMCxcbiAgICAgICAgICBcInpvbmVzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC41MSxcbiAgICAgICAgICAgICAgMC42OCxcbiAgICAgICAgICAgICAgM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC44MSxcbiAgICAgICAgICAgICAgMC44NyxcbiAgICAgICAgICAgICAgMS41XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjA0LFxuICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuODcsXG4gICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgICAgMC40LFxuICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGl2b3RzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtZnJvbnQtbFwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMC4zOSxcbiAgICAgICAgICAxLjcxNVxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMCxcbiAgICAgICAgXCJub3RlXCI6IFwiZnJvbnQgbGVmdCBodWIsIHJvbGxzIGFib3V0IHRoZSBheGxlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLWZyb250LXJcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgLTAuOCxcbiAgICAgICAgICAwLjM5LFxuICAgICAgICAgIDEuNzE1XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAxLFxuICAgICAgICBcIm5vdGVcIjogXCJmcm9udCByaWdodCBodWJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtcmVhci1sXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAwLjM5LFxuICAgICAgICAgIC0xLjM2OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgXSxcbiAgICAgICAgXCJheGlzXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIndoZWVsc1wiLFxuICAgICAgICBcImluc3RhbmNlXCI6IDIsXG4gICAgICAgIFwibm90ZVwiOiBcInJlYXIgbGVmdCBodWJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtcmVhci1yXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgMC4zOSxcbiAgICAgICAgICAtMS4zNjk5OTk5OTk5OTk5OTk5XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAzLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIHJpZ2h0IGh1YlwiXG4gICAgICB9XG4gICAgXSxcbiAgICBcImdlb21ldHJ5XCI6IHtcbiAgICAgIFwid2lkdGhcIjogMS44NixcbiAgICAgIFwic2lsbFwiOiAwLjQyLFxuICAgICAgXCJwYWludEhleFwiOiAxNjc3NzIxNSxcbiAgICAgIFwibXVkU2NhbGVcIjogMixcbiAgICAgIFwibXVkVVNjYWxlXCI6IDUuMzMsXG4gICAgICBcIm11ZFRvcENsZWFuXCI6IHRydWUsXG4gICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgXCJzaGFwZVwiOiBcImNvbnZleFwiLFxuICAgICAgICBcImxvY2FsQ2VudGVyXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOTEsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImhhbGZFeHRlbnRzXCI6IFtcbiAgICAgICAgICAwLjkzLFxuICAgICAgICAgIDAuOTEsXG4gICAgICAgICAgMi42NjVcbiAgICAgICAgXSxcbiAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjb252ZXg6IHRoZSBodWxsIG9mIHRoZSBib2R5IHNoZWxsLlwiXG4gICAgICB9LFxuICAgICAgXCJvdXRsaW5lXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDIuNTYsXG4gICAgICAgICAgMC40MlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDAuNlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDAuODZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuNTg3OSxcbiAgICAgICAgICAwLjkwNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi41NTUsXG4gICAgICAgICAgMC45Mzc5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAyLjUxLFxuICAgICAgICAgIDAuOTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMyxcbiAgICAgICAgICAwLjk2NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi4xLFxuICAgICAgICAgIDAuOTg1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxLjksXG4gICAgICAgICAgMS4wMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS43LFxuICAgICAgICAgIDEuMDRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEuNDUsXG4gICAgICAgICAgMS4wOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMS4wNixcbiAgICAgICAgICAxLjdcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOTg5MixcbiAgICAgICAgICAxLjc2MDNcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOTcwNSxcbiAgICAgICAgICAxLjc3NzFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOTQ4OCxcbiAgICAgICAgICAxLjc4OTZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOTI0OSxcbiAgICAgICAgICAxLjc5NzRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAxLjhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjQ4LFxuICAgICAgICAgIDEuODJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjYzMTEsXG4gICAgICAgICAgMS43OTU5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC42NixcbiAgICAgICAgICAxLjc4MzlcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjY4NDksXG4gICAgICAgICAgMS43NjQ5XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC43MDM5LFxuICAgICAgICAgIDEuNzRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjcxNTksXG4gICAgICAgICAgMS43MTExXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC43MixcbiAgICAgICAgICAxLjY4XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMC43MixcbiAgICAgICAgICAxLjJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0wLjcyLFxuICAgICAgICAgIDAuOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgMC44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi42LFxuICAgICAgICAgIDAuNzZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIC0yLjYsXG4gICAgICAgICAgMC41NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgLTIuNTYsXG4gICAgICAgICAgMC40MlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICBcImJlbHRcIjogMS4yLFxuICAgICAgICBcInJvb2ZcIjogMS44MixcbiAgICAgICAgXCJrXCI6IDAuMTdcbiAgICAgIH0sXG4gICAgICBcInBsYW5cIjogW1xuICAgICAgICBbXG4gICAgICAgICAgLTIuNixcbiAgICAgICAgICAwLjk3XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAtMi41LFxuICAgICAgICAgIDFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDIuMDUsXG4gICAgICAgICAgMVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMi42LFxuICAgICAgICAgIDAuOTRcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICBcInN0ZXBzXCI6IDE0LFxuICAgICAgICBcImVkZ2VCaWFzXCI6IDAuNixcbiAgICAgICAgXCJzaG91bGRlclwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuMTMsXG4gICAgICAgICAgXCJ6TWluXCI6IC0wLjc2LFxuICAgICAgICAgIFwiek1heFwiOiAxLjc1LFxuICAgICAgICAgIFwiZmFkZVwiOiAwLjI1XG4gICAgICAgIH0sXG4gICAgICAgIFwibm9zZVwiOiB7XG4gICAgICAgICAgXCJyXCI6IDAuMjRcbiAgICAgICAgfSxcbiAgICAgICAgXCJ0YWlsXCI6IHtcbiAgICAgICAgICBcInJcIjogMC4wNlxuICAgICAgICB9LFxuICAgICAgICBcInNtb290aFwiOiA1MFxuICAgICAgfSxcbiAgICAgIFwiYm9keUJveGVzXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAuOSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIC0xLjY2LFxuICAgICAgICAgIDAuMDU2LFxuICAgICAgICAgIDAuNCxcbiAgICAgICAgICAxLjg2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAtMC45LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNTYsXG4gICAgICAgICAgMC40LFxuICAgICAgICAgIDEuODZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMC43NjgsXG4gICAgICAgICAgMS43NCxcbiAgICAgICAgICAwLjQsXG4gICAgICAgICAgMC4wNTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAtMi42MyxcbiAgICAgICAgICAxLjc0LFxuICAgICAgICAgIDAuNCxcbiAgICAgICAgICAwLjA2XG4gICAgICAgIF1cbiAgICAgIF0sXG4gICAgICBcImdsYXNzXCI6IHtcbiAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxLjQzNSxcbiAgICAgICAgICAgIDEuMTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEuMTEsXG4gICAgICAgICAgICAxLjU0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAxLjY0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC42LFxuICAgICAgICAgICAgMS42NFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNzI2LFxuICAgICAgICAgICAgMS42XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAtMC43MjYsXG4gICAgICAgICAgICAxLjE2XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInByb3VkXCI6IDAuMDA2LFxuICAgICAgICBcImhleFwiOiAxNjc3NzIxNVxuICAgICAgfSxcbiAgICAgIFwicGlsbGFyc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjM1LFxuICAgICAgICAgICAgICAxLjEyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjQ2LFxuICAgICAgICAgICAgICAxLjEyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjI3OSxcbiAgICAgICAgICAgICAgMS41OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4xNjksXG4gICAgICAgICAgICAgIDEuNThcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3RyaXBcIjogMC4xLFxuICAgICAgICAgIFwicHJvdWRcIjogMC4wMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgIDEuNjZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAgIDEuNjZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3RyaXBcIjogMC4xLFxuICAgICAgICAgIFwiaGV4XCI6IDExODQyNzJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjczNSxcbiAgICAgICAgICAgICAgMS4xN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNjI1LFxuICAgICAgICAgICAgICAxLjE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC42MjUsXG4gICAgICAgICAgICAgIDEuNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNzM1LFxuICAgICAgICAgICAgICAxLjZcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwic3RyaXBcIjogMC4xLFxuICAgICAgICAgIFwicHJvdWRcIjogMC4wMDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjI0LFxuICAgICAgICAgICAgICAxLjE3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4yNCxcbiAgICAgICAgICAgICAgMS42NlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMyxcbiAgICAgICAgICAgICAgMS42NlxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjEsXG4gICAgICAgICAgXCJoZXhcIjogMTE4NDI3MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS40LFxuICAgICAgICAgICAgICAxLjEyNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS40LFxuICAgICAgICAgICAgICAxLjE1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNzM1LFxuICAgICAgICAgICAgICAxLjE1NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNzM1LFxuICAgICAgICAgICAgICAxLjEyNVxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjEsXG4gICAgICAgICAgXCJoZXhcIjogMTE4NDI3MlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4xMSxcbiAgICAgICAgICAgICAgMS41NFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4xMSxcbiAgICAgICAgICAgICAgMS41NjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgMS42NjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjYyLFxuICAgICAgICAgICAgICAxLjY2NVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuNjIsXG4gICAgICAgICAgICAgIDEuNjRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgMS42NFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJzdHJpcFwiOiAwLjEsXG4gICAgICAgICAgXCJoZXhcIjogMTE4NDI3MlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJ3aGVlbHNcIjoge1xuICAgICAgICBcInJcIjogMC4zNzUsXG4gICAgICAgIFwicmltXCI6IDAuMixcbiAgICAgICAgXCJoYWxmV1wiOiAwLjE1LFxuICAgICAgICBcInRyYWNrXCI6IDAuOCxcbiAgICAgICAgXCJ6RlwiOiAxLjcxNSxcbiAgICAgICAgXCJ6UlwiOiAtMS4zNjk5OTk5OTk5OTk5OTk5LFxuICAgICAgICBcInNlZ1wiOiAyNCxcbiAgICAgICAgXCJhcmNoXCI6IDAuNDc1LFxuICAgICAgICBcInN0eWxlXCI6IFwic3RlZWxcIixcbiAgICAgICAgXCJ0eXJlSGV4XCI6IDYxODI3MzYsXG4gICAgICAgIFwibHVnSGV4XCI6IDQ4NjcxMzMsXG4gICAgICAgIFwicmltSGV4XCI6IDkwNzczNzAsXG4gICAgICAgIFwidmVudEhleFwiOiA0ODY4MTYyLFxuICAgICAgICBcImRpc2hcIjogMC41LFxuICAgICAgICBcImx1Z3NcIjoge1xuICAgICAgICAgIFwiblwiOiAyMCxcbiAgICAgICAgICBcImhcIjogMC4wMzUsXG4gICAgICAgICAgXCJ3XCI6IDAuODgsXG4gICAgICAgICAgXCJkXCI6IDAuMDU1LFxuICAgICAgICAgIFwic2tld1wiOiAwLjM1LFxuICAgICAgICAgIFwiaGV4XCI6IDU2NTY2NTBcbiAgICAgICAgfSxcbiAgICAgICAgXCJmbGFyZVwiOiAwLjEsXG4gICAgICAgIFwiZmxhcmVPdXRcIjogMC4wNSxcbiAgICAgICAgXCJmbGFyZUhleFwiOiAxNDQ3NDQ0LFxuICAgICAgICBcIndlbGxIZXhcIjogNDg2NzkwNixcbiAgICAgICAgXCJwb3NpdGlvbnNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDAuMzksXG4gICAgICAgICAgICAxLjcxNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuOCxcbiAgICAgICAgICAgIDAuMzksXG4gICAgICAgICAgICAxLjcxNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMC4zOSxcbiAgICAgICAgICAgIC0xLjM2OTk5OTk5OTk5OTk5OTlcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIC0wLjgsXG4gICAgICAgICAgICAwLjM5LFxuICAgICAgICAgICAgLTEuMzY5OTk5OTk5OTk5OTk5OVxuICAgICAgICAgIF1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwidHJpbVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAxNzEwNjE2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC41MixcbiAgICAgICAgICAyLjYsXG4gICAgICAgICAgMS40LFxuICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgMC4xNFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTQ0NzQ0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuMzk1LFxuICAgICAgICAgIDIuNTYsXG4gICAgICAgICAgMS41LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMC4xMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMzE2MDY1MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOCxcbiAgICAgICAgICAyLjYxLFxuICAgICAgICAgIDEuMTYsXG4gICAgICAgICAgMC4yMixcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5NjQ2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNzI1LFxuICAgICAgICAgIDIuNjI1LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAwLjAxNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTI4OTY0NjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjc2NSxcbiAgICAgICAgICAyLjYyNSxcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgMC4wMTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyODk2NDYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC44MDUsXG4gICAgICAgICAgMi42MjUsXG4gICAgICAgICAgMS4xLFxuICAgICAgICAgIDAuMDIyLFxuICAgICAgICAgIDAuMDE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5NjQ2MCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuODQ1LFxuICAgICAgICAgIDIuNjI1LFxuICAgICAgICAgIDEuMSxcbiAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAwLjAxNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTI4OTY0NjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjg4NSxcbiAgICAgICAgICAyLjYyNSxcbiAgICAgICAgICAxLjEsXG4gICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgMC4wMTVcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyODk2NDYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC45MTUsXG4gICAgICAgICAgMi42MjIsXG4gICAgICAgICAgMS4xOCxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyODk2NDYwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC42OTUsXG4gICAgICAgICAgMi42MjIsXG4gICAgICAgICAgMS4xOCxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEzMTU4NTgsXG4gICAgICAgICAgMC45LFxuICAgICAgICAgIDEuMjA1LFxuICAgICAgICAgIC0xLjY2LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAxLjk0XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMzE1ODU4LFxuICAgICAgICAgIC0wLjksXG4gICAgICAgICAgMS4yMDUsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDEuOTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEzMTU4NTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLjIwNSxcbiAgICAgICAgICAtMi42MyxcbiAgICAgICAgICAxLjg2LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4wOFxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNzIzNTY3NixcbiAgICAgICAgICAtMC42LFxuICAgICAgICAgIDAuODM0LFxuICAgICAgICAgIC0xLjY2LFxuICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgMC4wMDgsXG4gICAgICAgICAgMS43NlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNzIzNTY3NixcbiAgICAgICAgICAtMC4zNixcbiAgICAgICAgICAwLjgzNCxcbiAgICAgICAgICAtMS42NixcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuMDA4LFxuICAgICAgICAgIDEuNzZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDcyMzU2NzYsXG4gICAgICAgICAgLTAuMTIsXG4gICAgICAgICAgMC44MzQsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAxLjc2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3MjM1Njc2LFxuICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgMC44MzQsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAxLjc2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3MjM1Njc2LFxuICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgMC44MzQsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wNyxcbiAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAxLjc2XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3MjM1Njc2LFxuICAgICAgICAgIDAuNixcbiAgICAgICAgICAwLjgzNCxcbiAgICAgICAgICAtMS42NixcbiAgICAgICAgICAwLjA3LFxuICAgICAgICAgIDAuMDA4LFxuICAgICAgICAgIDEuNzZcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDM4MTU0NzcsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjkzLFxuICAgICAgICAgIC0yLjY3MixcbiAgICAgICAgICAxLjE2LFxuICAgICAgICAgIDAuMDEyLFxuICAgICAgICAgIDAuMDA1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzODE1NDc3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMS4wNyxcbiAgICAgICAgICAtMi42NzIsXG4gICAgICAgICAgMS4xNixcbiAgICAgICAgICAwLjAxMixcbiAgICAgICAgICAwLjAwNVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTcxMDYxNixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgLTIuNTk1LFxuICAgICAgICAgIDEuODQsXG4gICAgICAgICAgMC4yLFxuICAgICAgICAgIDAuMTRcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDYwNTE5MjAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjgxNSxcbiAgICAgICAgICAtMS42NixcbiAgICAgICAgICAxLjc0LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMS44XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICA3NzYyMDE1LFxuICAgICAgICAgIDAuODYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4zNyxcbiAgICAgICAgICAxLjhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDc3NjIwMTUsXG4gICAgICAgICAgLTAuODYyLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTEuNjYsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4zNyxcbiAgICAgICAgICAxLjhcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDc3NjIwMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIC0wLjgwMixcbiAgICAgICAgICAxLjcxLFxuICAgICAgICAgIDAuMzcsXG4gICAgICAgICAgMC4wMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDc3NjIwMTUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIC0yLjU5NCxcbiAgICAgICAgICAxLjcxLFxuICAgICAgICAgIDAuMzcsXG4gICAgICAgICAgMC4wMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDI4Mjg1ODIsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIDEuNCxcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDMuM1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgNDg2ODE2NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgLTIuNjY0LFxuICAgICAgICAgIDEuMixcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC4wMTJcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDEyNTY3NzUyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC45NDUsXG4gICAgICAgICAgMi41NjUsXG4gICAgICAgICAgMC4zLFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdXG4gICAgICBdLFxuICAgICAgXCJ0cmltTWlycm9yZWRcIjogW1xuICAgICAgICBbXG4gICAgICAgICAgMTcxMDYxNixcbiAgICAgICAgICAwLjcyLFxuICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgMi41MyxcbiAgICAgICAgICAwLjMsXG4gICAgICAgICAgMC4yMixcbiAgICAgICAgICAwLjE0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC43XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNDIxMjU3NixcbiAgICAgICAgICAwLjcsXG4gICAgICAgICAgMC44LFxuICAgICAgICAgIDIuNTc1LFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjQ1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMTU0NjY3MixcbiAgICAgICAgICAwLjg4NSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIC0yLjYyNSxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgMC4wN1xuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTcxMDYxNixcbiAgICAgICAgICAwLjk4LFxuICAgICAgICAgIDEuMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLjEsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLjAzXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAzNTU5NTQ2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMS4zLFxuICAgICAgICAgIDAuOTgsXG4gICAgICAgICAgMC4wNixcbiAgICAgICAgICAwLjE1LFxuICAgICAgICAgIDAuMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTcxMDYxNixcbiAgICAgICAgICAwLjkzNixcbiAgICAgICAgICAxLjA1LFxuICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLjE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNzEwNjE2LFxuICAgICAgICAgIDAuOTM2LFxuICAgICAgICAgIDEuMDUsXG4gICAgICAgICAgLTAuMzYsXG4gICAgICAgICAgMC4wMTIsXG4gICAgICAgICAgMC4wMyxcbiAgICAgICAgICAwLjE1XG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxNzEwNjE2LFxuICAgICAgICAgIDAuODgsXG4gICAgICAgICAgMC40LFxuICAgICAgICAgIDAuMyxcbiAgICAgICAgICAwLjE2LFxuICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgMi4yXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5NjQ2MCxcbiAgICAgICAgICAwLjU3LFxuICAgICAgICAgIDAuODA1LFxuICAgICAgICAgIDIuNjIyLFxuICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgMC4yNSxcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMjA4OTkxNCxcbiAgICAgICAgICAwLjcsXG4gICAgICAgICAgMC42ODUsXG4gICAgICAgICAgMi41NzUsXG4gICAgICAgICAgMC4yOCxcbiAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAwLjAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMC40NVxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTE4NDI3MixcbiAgICAgICAgICAwLjkzNixcbiAgICAgICAgICAwLjc4LFxuICAgICAgICAgIDAuMTksXG4gICAgICAgICAgMC4wMDQsXG4gICAgICAgICAgMC42NixcbiAgICAgICAgICAwLjAyXG4gICAgICAgIF0sXG4gICAgICAgIFtcbiAgICAgICAgICAxMTg0MjcyLFxuICAgICAgICAgIDAuOTM2LFxuICAgICAgICAgIDAuNzgsXG4gICAgICAgICAgMS4zLFxuICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgMC4wMlxuICAgICAgICBdLFxuICAgICAgICBbXG4gICAgICAgICAgMTE4NDI3MixcbiAgICAgICAgICAwLjkzNixcbiAgICAgICAgICAwLjc4LFxuICAgICAgICAgIC0wLjczNSxcbiAgICAgICAgICAwLjAwNCxcbiAgICAgICAgICAwLjY2LFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwiY3lsc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgIC0wLjU1LFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgLTIuNTZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFwicnRcIjogMC4wMzUsXG4gICAgICAgICAgXCJyYlwiOiAwLjAzNSxcbiAgICAgICAgICBcImhcIjogMC4zLFxuICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgIFwiaGV4XCI6IDcyMzYxOThcbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgb3B0czogU2hhcGVPcHRzID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiwgc3RlcHM6IG9wdHMuc3RlcHMgPz8gMSB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIGlmIChvcHRzLmVkZ2VCaWFzICYmIChvcHRzLnN0ZXBzID8/IDEpID4gMSkge1xuICAgIC8vIFB1bGwgdGhlIHdpZHRoIGNvbHVtbnMgdG93YXJkIHRoZSB0d28gZWRnZXMgKHx0fF5wLCBwIDwgMSkgc28gYSBzaG91bGRlciBmaWxsZXQgZ2V0cyBmb3VyXG4gICAgLy8gcmVhbCBzZWdtZW50cyBpbnN0ZWFkIG9mIG9uZSBjaGFtZmVyIGF0IHRoZSBvdXRlcm1vc3QgY29sdW1uOyB0aGUgZmxhdCBtaWRkbGUgbmVlZHMgbm9uZS5cbiAgICBjb25zdCBxID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIGh3ID0gd2lkdGggLyAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHEuZ2V0WChpKSAvIGh3KSk7XG4gICAgICBxLnNldFgoaSwgaHcgKiBNYXRoLnNpZ24odCkgKiBNYXRoLnBvdyhNYXRoLmFicyh0KSwgb3B0cy5lZGdlQmlhcykpO1xuICAgIH1cbiAgfVxuICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBTaGFwaW5nIG9wdGlvbnMgc2hhcmVkIGJ5IGEgYm9keSBhbmQgZXZlcnl0aGluZyBzd2VwdCBwcm91ZCBvZiBpdCAoZ2xhc3MgYmFuZCwgcGlsbGFycykuXG4gKiAgYHNob3VsZGVyYCwgYG5vc2VgIGFuZCBgdGFpbGAgYXJlIFJPVU5ESU5HUyAtLSBzZWUgc2hhcGVXaWR0aCAtLSBhbmQgbmVlZCBgc3RlcHNgID4gMSBzbyB0aGVcbiAqICBzd2VwdCBmYWNlcyBjYXJyeSB2ZXJ0aWNlcyBhY3Jvc3MgdGhlIHdpZHRoIHRvIGJlbmQ7IGBiYXNlV2lkdGhgIGlzIHRoZSBib2R5J3Mgd2lkdGgsIHNvIGFcbiAqICBiYW5kIHN3ZXB0IHdpZGVyIHRoYW4gaXQgaXMgcm91bmRlZCBhYm91dCB0aGUgU0FNRSBjZW50cmVzIGF0IGEgbGFyZ2VyIHJhZGl1cyBhbmQgc3RheXNcbiAqICBleGFjdGx5IGFzIHByb3VkIGFzIGl0IHdhcyBhdXRob3JlZDsgYHRvcE9mYCBpcyB0aGUgYm9keSdzIG93biBwcm9maWxlLCB3aGljaCBpcyB3aGVyZSB0aGVcbiAqICByb29mIGxpbmUgZXZlcnkgc2hvdWxkZXIgaGFuZ3Mgb2ZmIGlzIHJlYWQuIEFsbCBvcHRpb25hbDogdW5zZXQsIHRoZSBzd2VlcCBpcyB0aGUgb2xkIHNsYWIuICovXG50eXBlIFNoYXBlT3B0cyA9IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdLFxuICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM/OiBudW1iZXIsIHN0ZXBzPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgIHNob3VsZGVyPzogeyByOiBudW1iZXIsIHpNaW4/OiBudW1iZXIsIHpNYXg/OiBudW1iZXIsIGZhZGU/OiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICBub3NlPzogeyByOiBudW1iZXIgfSwgdGFpbD86IHsgcjogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgc21vb3RoPzogbnVtYmVyLCBlZGdlQmlhcz86IG51bWJlciwgYmFzZVdpZHRoPzogbnVtYmVyLCB0b3BPZj86IG51bWJlcltdW10sXG4gICAgICAgICAgICAgICAgICAgY3Jvd24/OiB7IHlNaW46IG51bWJlciwgZHk6IG51bWJlciwgZmFkZT86IG51bWJlciB9IH07XG5cbi8qKiBIaWdoZXN0IHkgb2YgYSBjbG9zZWQgW3osIHldIHByb2ZpbGUgb24gdGhlIHZlcnRpY2FsIGxpbmUgYXQgeiAtLSB0aGUgcm9vZiBsaW5lIGF0IHRoYXRcbiAqICBzdGF0aW9uLiBWZXJ0aWNhbCBlZGdlcyBjb3VudCBieSB0aGVpciBvd24gdG9wOyBhIHogb3V0c2lkZSB0aGUgcHJvZmlsZSByZXR1cm5zIC1JbmZpbml0eS4gKi9cbmZ1bmN0aW9uIHByb2ZpbGVUb3AocHJvZmlsZTogbnVtYmVyW11bXSwgejogbnVtYmVyLCB0b2wgPSAwKTogbnVtYmVyIHtcbiAgbGV0IHRvcCA9IC1JbmZpbml0eTtcbiAgY29uc3QgbiA9IHByb2ZpbGUubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwcm9maWxlW2ldLCBiID0gcHJvZmlsZVsoaSArIDEpICUgbl07XG4gICAgY29uc3QgbG8gPSBNYXRoLm1pbihhWzBdLCBiWzBdKSwgaGkgPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICBpZiAoeiA8IGxvIC0gdG9sIC0gMWUtNiB8fCB6ID4gaGkgKyB0b2wgKyAxZS02KSBjb250aW51ZTtcbiAgICAvLyBgdG9sYCBsZXRzIGEgYmFuZCBzdGFuZGluZyBhIGZldyBtbSBwcm91ZCBvZiBhIHZlcnRpY2FsIGZhY2UgKGEgcmVhciBwYW5lLCBhIEMtcGlsbGFyIHN0cmlwXG4gICAgLy8gYmVoaW5kIHRoZSBjYWIgYmFjaykgcmVhZCB0aGUgcm9vZiBsaW5lIG9mIHRoZSBmYWNlIGl0IHN0YW5kcyBvbiwgbm90IHRoZSBiZWQgZmxvb3IgYmVoaW5kIGl0XG4gICAgY29uc3QgemMgPSBNYXRoLm1heChsbywgTWF0aC5taW4oaGksIHopKTtcbiAgICBjb25zdCB5ID0gaGkgLSBsbyA8IDFlLTYgPyBNYXRoLm1heChhWzFdLCBiWzFdKSA6IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogKHpjIC0gYVswXSkgLyAoYlswXSAtIGFbMF0pO1xuICAgIGlmICh5ID4gdG9wKSB0b3AgPSB5O1xuICB9XG4gIHJldHVybiB0b3A7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG9wdHM6IFNoYXBlT3B0cywgd2lkdGggPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdHVtYmxlQXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnR1bWJsZSkgcmV0dXJuIDE7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgcmV0dXJuIDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgfTtcbiAgY29uc3QgcGxhbkF0ID0gKHo6IG51bWJlcikgPT4ge1xuICAgIGlmICghb3B0cy5wbGFuIHx8IG9wdHMucGxhbi5sZW5ndGggPCAyKSByZXR1cm4gMTtcbiAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICBpZiAoeiA8PSBzdFswXVswXSkgcmV0dXJuIHN0WzBdWzFdO1xuICAgIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSByZXR1cm4gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgIHJldHVybiBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgLy8gUk9VTkRJTkdTLiBBIHN3ZWVwIGlzIGEgc2xhYjogaXRzIHJvb2YgbWVldHMgaXRzIHNpZGUgYXQgYSBoYXJkIGVkZ2UsIGFuZCBpdHMgbm9zZSBtZWV0cyBib3RoXG4gIC8vIHNpZGVzIGF0IHR3byBtb3JlLiBSZWFsIHNoZWV0IG1ldGFsIGNyb3ducyBvdmVyIHRoZSBmZW5kZXIgYW5kIHdyYXBzIHJvdW5kIHRoZSBub3NlLCBzbyBhbnlcbiAgLy8gdmVydGV4IGluc2lkZSBhIGNvcm5lciBxdWFkcmFudCAod2l0aGluIHIgb2YgdGhlIHRvcCBBTkQgd2l0aGluIHIgb2YgdGhlIHNpZGUpIGlzIHByb2plY3RlZFxuICAvLyBvbnRvIHRoZSBjaXJjbGUgb2YgcmFkaXVzIHIgYWJvdXQgdGhhdCBjb3JuZXIncyBjZW50cmUgLS0gYSBmaWxsZXQsIGluIHgveSBmb3IgdGhlIHNob3VsZGVyXG4gIC8vIGFuZCBpbiB4L3ogYXQgdGhlIHR3byBlbmRzLiBUaGUgY2VudHJlcyBhcmUgcGxhY2VkIG9mZiB0aGUgQk9EWSdzIHdpZHRoIChgYmFzZVdpZHRoYCkgYW5kXG4gIC8vIHJvb2YgbGluZSAoYHRvcE9mYCksIHNvIGEgZ2xhc3MgYmFuZCBzd2VwdCBgZWAgd2lkZXIgaXMgZmlsbGV0ZWQgYXQgciArIGUgYWJvdXQgdGhlIHNhbWVcbiAgLy8gY2VudHJlIGFuZCBzdGF5cyBgZWAgcHJvdWQgYWxsIHRoZSB3YXkgcm91bmQgdGhlIGNvcm5lci5cbiAgY29uc3QgZXh0cmEgPSBvcHRzLmJhc2VXaWR0aCA/ICh3aWR0aCAtIG9wdHMuYmFzZVdpZHRoKSAvIDIgOiAwO1xuICBjb25zdCBiYXNlSGFsZiA9IChvcHRzLmJhc2VXaWR0aCA/PyB3aWR0aCkgLyAyO1xuICBjb25zdCB0b3AgPSBvcHRzLnRvcE9mID8/IG51bGw7XG4gIGxldCB6TWF4ID0gLUluZmluaXR5LCB6TWluID0gSW5maW5pdHk7XG4gIGlmICh0b3ApIGZvciAoY29uc3QgcSBvZiB0b3ApIHsgaWYgKHFbMF0gPiB6TWF4KSB6TWF4ID0gcVswXTsgaWYgKHFbMF0gPCB6TWluKSB6TWluID0gcVswXTsgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGNvbnN0IHRmID0gdHVtYmxlQXQoeSksIHBmID0gcGxhbkF0KHopO1xuICAgIHggKj0gdGYgKiBwZjtcbiAgICBpZiAob3B0cy5zaG91bGRlciAmJiB0b3ApIHtcbiAgICAgIGNvbnN0IHNoID0gb3B0cy5zaG91bGRlcjtcbiAgICAgIC8vIFRoZSBmaWxsZXQgbGl2ZXMgb24gYSB6LXJhbmdlOiBoYXJkIGF0IHpNaW4gKHRoZSBjYWIgYmFjayksIGZhZGVkIG92ZXIgYGZhZGVgIG1ldHJlcyBhdFxuICAgICAgLy8gek1heCAodGhlIHRvcCBvZiB0aGUgd2luZHNjcmVlbiByYWtlIC0tIGEgcmFrZSBpcyBhIHBsYW5lLCBpdHMgZWRnZSBhIGNyZWFzZSwgYW5kIGEgZmFkZVxuICAgICAgLy8ga2V5ZWQgb24gdGhlIHJvb2YgbGluZSdzIFNMT1BFIHZhcmllZCBpbnNpZGUgdGhlIHJlYXIgY29ybmVyIGFuZCBmb2xkZWQgaXQpLlxuICAgICAgY29uc3QgekxvID0gc2guek1pbiA/PyAtSW5maW5pdHksIHpIaSA9IHNoLnpNYXggPz8gSW5maW5pdHksIGZkID0gc2guZmFkZSA/PyAwO1xuICAgICAgY29uc3QgdyA9IHogPCB6TG8gfHwgeiA+IHpIaSA/IDAgOiBmZCA+IDAgPyBNYXRoLm1pbigxLCAoekhpIC0geikgLyBmZCkgOiAxO1xuICAgICAgY29uc3QgeXQgPSBwcm9maWxlVG9wKHRvcCwgeiwgMC4wMyk7XG4gICAgICBpZiAodyA+IDAgJiYgaXNGaW5pdGUoeXQpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzaC5yICsgZXh0cmEsIGN5ID0geXQgLSBzaC5yO1xuICAgICAgICBjb25zdCBodyA9IGJhc2VIYWxmICogdHVtYmxlQXQoY3kpICogcGYsIGN4ID0gaHcgLSBzaC5yO1xuICAgICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpO1xuICAgICAgICBpZiAoeSA+IGN5ICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgICBjb25zdCBkeCA9IGF4IC0gY3gsIGR5ID0geSAtIGN5LCBkID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgbGV0IG54ID0gYXgsIG55ID0geSwgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGR4ID49IHIgLSAxZS00KSB7XG4gICAgICAgICAgICAvLyB0aGUgRURHRSBjb2x1bW4sIHNoYXJlZCB3aXRoIHRoZSBzaWRlOiB0aGUgYXJjJ3MgZm9vdCwgdGFuZ2VudCB0byB0aGUgc2lkZSBhdCBjeVxuICAgICAgICAgICAgbnggPSBjeCArIHI7IG55ID0gY3k7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkeSA+PSBzaC5yIC0gMWUtNCAmJiBkeCA8PSByICsgMWUtNikge1xuICAgICAgICAgICAgLy8gYSB0b3Atcm93IHZlcnRleDogaXRzIGNvbHVtbiBwb3NpdGlvbiBwaWNrcyBpdHMgYW5nbGUgb24gdGhlIGFyY1xuICAgICAgICAgICAgY29uc3QgdGggPSBNYXRoLlBJIC8gMiAqICgxIC0gZHggLyByKTtcbiAgICAgICAgICAgIG54ID0gY3ggKyBNYXRoLmNvcyh0aCkgKiByOyBueSA9IGN5ICsgTWF0aC5zaW4odGgpICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR4IDw9IHIgKyAxZS02ICYmIGR5IDw9IHIgKyAxZS02ICYmIGQgPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIGEgcHJvdWQgYmFuZCdzIG91dGVyIHZlcnRleCBiZWxvdyB0aGUgdG9wOiBvbnRvIGl0cyBvd24gY2lyY2xlOyBpbnNpZGUgaXQsIGxlYXZlXG4gICAgICAgICAgICBueCA9IGN4ICsgZHggLyBkICogcjsgbnkgPSBjeSArIGR5IC8gZCAqIHI7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoaXQpIHsgeCA9IE1hdGguc2lnbih4IHx8IDEpICogKGF4ICsgKG54IC0gYXgpICogdyk7IHkgPSB5ICsgKG55IC0geSkgKiB3OyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbmQgb2YgW29wdHMubm9zZSA/IHsgcjogb3B0cy5ub3NlLnIsIHpjOiB6TWF4IC0gb3B0cy5ub3NlLnIsIHM6IDEgfSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHMudGFpbCA/IHsgcjogb3B0cy50YWlsLnIsIHpjOiB6TWluICsgb3B0cy50YWlsLnIsIHM6IC0xIH0gOiBudWxsXSkge1xuICAgICAgaWYgKCFlbmQgfHwgIXRvcCkgY29udGludWU7XG4gICAgICBjb25zdCByID0gZW5kLnIgKyBleHRyYTtcbiAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdCh5KSAqIHBsYW5BdChlbmQuemMpLCBjeCA9IGh3IC0gZW5kLnI7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpLCBkeiA9ICh6IC0gZW5kLnpjKSAqIGVuZC5zO1xuICAgICAgaWYgKGR6ID4gMCAmJiBheCA+IGN4ICYmIHIgPiAxZS02KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZCA9IE1hdGguaHlwb3QoZHgsIGR6KSB8fCAxO1xuICAgICAgICAvLyBPbmx5IGEgdmVydGV4IE9VVFNJREUgdGhlIGNpcmNsZSBpcyBwcm9qZWN0ZWQgb250byBpdCAodGhlIHNob3VsZGVyJ3MgcnVsZSk6IGEgc2lkZVxuICAgICAgICAvLyBzdHJpcCdzIGlubmVyIGZhY2UgbGllcyBpbnNpZGUsIGFuZCBwcm9qZWN0aW5nIGl0IHRvbyBsYW5kcyBpdCBvbiB0aGUgb3V0ZXIgZmFjZSxcbiAgICAgICAgLy8gd2hpY2ggei1maWdodHMgLS0gdGhlIENvbW11dGVyIHZhbidzIHdyYXBwZWQgQS1waWxsYXJzIGNydW1wbGVkIGZyb20gZXhhY3RseSB0aGF0LlxuICAgICAgICBpZiAoZCA+PSByIC0gMWUtNCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoY3ggKyBkeCAvIGQgKiByKTsgeiA9IGVuZC56YyArIGVuZC5zICogKGR6IC8gZCAqIHIpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRzLmNyb3duICYmIHkgPiBvcHRzLmNyb3duLnlNaW4pIHtcbiAgICAgIC8vIENST1dOIGFjcm9zcyB0aGUgd2lkdGg6IGEgcm9vZiBpcyBhIHNoYWxsb3cgZG9tZSBpbiBCT1RIIGF4ZXMsIGFuZCBhIHNpZGUgZXh0cnVzaW9uIGlzIGZsYXRcbiAgICAgIC8vIGFjcm9zcyB4LiBWZXJ0aWNlcyBhYm92ZSBgeU1pbmAgKHRoZSByb29mIGJhbmQsIG5ldmVyIGEgcmVhciB3YWxsIGJlbG93IGl0KSByaXNlIGJ5XG4gICAgICAvLyBkeSAqICgxIC0gKHgvaHcpXjIpLCBmYWRlZCBpbiBvdmVyIGBmYWRlYCBtZXRyZXMgYWJvdmUgeU1pbiBzbyB0aGUgYmFuZCdzIHVuZGVyc2lkZSBhbmQgdG9wXG4gICAgICAvLyBjcm93biB0b2dldGhlciBhbmQgdGhlIGVkZ2Ugc3RheXMgd2hlcmUgdGhlIHNob3VsZGVyIHB1dCBpdC4gRGVmYXVsdC1vZmYuXG4gICAgICBjb25zdCBod2MgPSBNYXRoLm1heCgxZS0zLCBiYXNlSGFsZiAqIHRmICogcGYpICsgZXh0cmE7XG4gICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5hYnMoeCkgLyBod2MpLCBmID0gb3B0cy5jcm93bi5mYWRlID8gTWF0aC5taW4oMSwgKHkgLSBvcHRzLmNyb3duLnlNaW4pIC8gb3B0cy5jcm93bi5mYWRlKSA6IDE7XG4gICAgICB5ICs9IG9wdHMuY3Jvd24uZHkgKiAoMSAtIHQgKiB0KSAqIGY7XG4gICAgfVxuICAgIHAuc2V0WFlaKGksIHgsIHksIHopO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBbmdsZS1saW1pdGVkIFNNT09USCBOT1JNQUxTIG9uIGEgbm9uLWluZGV4ZWQgZ2VvbWV0cnkuIEV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb25cbiAqICBhdmVyYWdlcyB0aGUgZmFjZSBub3JtYWxzIG9mIGl0cyBuZWlnaGJvdXJzIHRoYXQgbGllIHdpdGhpbiBgbWF4RGVnYCBvZiBpdHMgb3duIGZhY2UsIHNvIGFcbiAqICBmaWxsZXRlZCBzaG91bGRlciwgYSBwbGFuLXJvdW5kZWQgbm9zZSBhbmQgdGhlIHR1bWJsZWhvbWUga2luayBhdCB0aGUgYmVsdCBzaGFkZSBhcyBvbmVcbiAqICBjb250aW51b3VzIHN1cmZhY2UsIHdoaWxlIGEgOTAtZGVncmVlIGVkZ2UgLS0gdGhlIGFyY2ggY3V0LCB0aGUgbm9zZSBhZ2FpbnN0IHRoZSBidW1wZXIgLS1cbiAqICBzdGF5cyBhIGNyZWFzZS4gV2l0aG91dCB0aGlzIGV2ZXJ5IHF1YWQgdGhlIHJvdW5kaW5ncyBiZW5kIHNwbGl0cyBpbnRvIHR3byBkaWZmZXJlbnRseSBsaXRcbiAqICB0cmlhbmdsZXMsIHdoaWNoIGlzIHRoZSBcImJsb2NreVwiIGEgdmlld2VyIHNlZXMgYmVmb3JlIGFueSBzaWxob3VldHRlLiAqL1xuZnVuY3Rpb24gc21vb3RoTm9ybWFscyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXhEZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBpZiAoIW5ybSB8fCBnZW8uZ2V0SW5kZXgoKSkgcmV0dXJuIGdlbztcbiAgY29uc3QgbiA9IHAuY291bnQsIGNvc0xpbSA9IE1hdGguY29zKG1heERlZyAqIE1hdGguUEkgLyAxODApO1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgayA9IGAke01hdGgucm91bmQocC5nZXRYKGkpICogMjAwMCl9LCR7TWF0aC5yb3VuZChwLmdldFkoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WihpKSAqIDIwMDApfWA7XG4gICAgY29uc3QgZyA9IGdyb3Vwcy5nZXQoayk7IGlmIChnKSBnLnB1c2goaSk7IGVsc2UgZ3JvdXBzLnNldChrLCBbaV0pO1xuICB9XG4gIGNvbnN0IGZhY2UgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgZmFjZVtpICogM10gPSBucm0uZ2V0WChpKTsgZmFjZVtpICogMyArIDFdID0gbnJtLmdldFkoaSk7IGZhY2VbaSAqIDMgKyAyXSA9IG5ybS5nZXRaKGkpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGNvbnN0IGcgb2YgZ3JvdXBzLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCBpIG9mIGcpIHtcbiAgICAgIGxldCBzeCA9IDAsIHN5ID0gMCwgc3ogPSAwO1xuICAgICAgY29uc3QgYXggPSBmYWNlW2kgKiAzXSwgYXkgPSBmYWNlW2kgKiAzICsgMV0sIGF6ID0gZmFjZVtpICogMyArIDJdO1xuICAgICAgZm9yIChjb25zdCBqIG9mIGcpIHtcbiAgICAgICAgY29uc3QgYnggPSBmYWNlW2ogKiAzXSwgYnkgPSBmYWNlW2ogKiAzICsgMV0sIGJ6ID0gZmFjZVtqICogMyArIDJdO1xuICAgICAgICBpZiAoYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ID49IGNvc0xpbSkgeyBzeCArPSBieDsgc3kgKz0gYnk7IHN6ICs9IGJ6OyB9XG4gICAgICB9XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdChzeCwgc3ksIHN6KSB8fCAxO1xuICAgICAgb3V0W2kgKiAzXSA9IHN4IC8gbDsgb3V0W2kgKiAzICsgMV0gPSBzeSAvIGw7IG91dFtpICogMyArIDJdID0gc3ogLyBsO1xuICAgIH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBQSUxMQVIgU1RSSVA6IHRoZSBwaWxsYXIgcG9seWdvbiBzd2VwdCBvbmx5IGBzdHJpcFdgIGRlZXAgYXQgZWFjaCBvdXRlciBlZGdlIG9mIGB3aWR0aGAsXG4gKiAgbWlycm9yZWQsIGFuZCBzaGFwZWQgZXhhY3RseSBhcyB0aGUgYm9keS4gVGhlIG9sZCBmdWxsLXdpZHRoIHN3ZWVwIHB1dCBhIHNsYWIgYWNyb3NzIHRoZVxuICogIHdpbmRzY3JlZW4gd2hlcmV2ZXIgdGhlIEEtcGlsbGFyIHBvbHlnb24gbGF5IG9uIHRoZSByYWtlIC0tIGEgcGlsbGFyIGlzIGF0IHRoZSBzaWRlIG9mIHRoZVxuICogIGdsYXNzLCBub3QgdGhyb3VnaCBpdC4gVGhlIG1pcnJvcmVkIGhhbGYgaGFzIGl0cyB3aW5kaW5nIHJlc3RvcmVkLiAqL1xuZnVuY3Rpb24gc2lkZVN0cmlwKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIHN0cmlwVzogbnVtYmVyLCBvcHRzOiBTaGFwZU9wdHMgPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogc3RyaXBXLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBzdGVwczogMiB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgIC8vIGRlcHRoIG5vdyBydW5zIGFsb25nIC14IGZyb20geCA9IDBcbiAgICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApOyAgICAgICAgICAgIC8vIG91dGVyIGZhY2UgYXQgK3dpZHRoLzIsIGlubmVyIGF0IHdpZHRoLzIgLSBzdHJpcFdcbiAgICBpZiAoc3ggPCAwKSB7XG4gICAgICBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICAgIGNvbnN0IHEgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IHgxID0gcS5nZXRYKGkgKyAxKSwgeTEgPSBxLmdldFkoaSArIDEpLCB6MSA9IHEuZ2V0WihpICsgMSk7XG4gICAgICAgIHEuc2V0WFlaKGkgKyAxLCBxLmdldFgoaSArIDIpLCBxLmdldFkoaSArIDIpLCBxLmdldFooaSArIDIpKTsgcS5zZXRYWVooaSArIDIsIHgxLCB5MSwgejEpO1xuICAgICAgfVxuICAgIH1cbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gICAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgICByZXR1cm4gZztcbiAgfTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbWsoMSksIG1rKC0xKV0pO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1LCByaW1CYW5kID0gNCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIC8vIGByaW1CYW5kYCBpcyB0aGUgTEFTVCBwcm9maWxlIHBvaW50IHRoYXQgY2FycmllcyB0aGUgcmltIGNvbG91ci4gVmVydGV4IGNvbG91cnMgaW50ZXJwb2xhdGUsXG4gIC8vIHNvIHdpdGggdGhlIGRlZmF1bHQgNCB0aGUgd2hvbGUgc2lkZXdhbGwgZnJvbSByUmltIG91dCB0byByVHlyZSAqIDAuOTMgaXMgYSBncmFkaWVudCBmcm9tIHRoZVxuICAvLyByaW0gdG9uZSB0byB0aGUgdHlyZSB0b25lIC0tIG9uIGEgd2hlZWwgd2hvc2UgcmltIGlzIGEgc21hbGwgaHViIHRoYXQgcGFpbnRzIG1vc3Qgb2YgdGhlIHZpc2libGVcbiAgLy8gZGlzYyBwYWxlLCBhbmQgdGhlIHR1ay10dWsncyB3aGVlbHMgcmVhZCBhcyBncmV5IHBsYXRlcyByYXRoZXIgdGhhbiBibGFjayB0eXJlcy4gUGFzc2luZyAyXG4gIC8vIHN0b3BzIHRoZSBjaHJvbWUgYXQgdGhlIGh1YiBjYXAgYW5kIG1ha2VzIHRoZSBzaWRld2FsbCB0eXJlIGFsbCB0aGUgd2F5IGluLiBUaGUgZGVmYXVsdCBpc1xuICAvLyB1bmNoYW5nZWQsIHNvIGV2ZXJ5IGV4aXN0aW5nIHByb3AgaXMgYnl0ZS1pZGVudGljYWwuXG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSByaW1CYW5kIHx8IGogPj0gcHRzLmxlbmd0aCAtIDEgLSByaW1CYW5kO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgU1RFRUwgV0hFRUw6IHRoZSBzYW1lIGNsb3NlZCBsYXRoZSBhcyB3aGVlbEdlbywgd2l0aCB0aGUgcHJvZmlsZSBvZiBhIHByZXNzZWQtc3RlZWwgcmltIC0tIGFcbiAqIGZsYXQgb3V0ZXIgZmFjZSwgYSBkaXNoZWQgY2VudHJlIHN0ZXBwaW5nIGluIHBhc3QgYSBkYXJrIFZFTlQgUklORyAodGhlIHJvdyBvZiBvdmFsIGhvbGVzLFxuICogZGVsaXZlcmVkIGFzIGEgYmFuZCBvZiB2ZXJ0ZXggY29sb3VyIHJhdGhlciB0aGFuIGFzIGhvbGVzIGEgdHVybnRhYmxlIGdhdGUgd291bGQgcmVhZCB0aHJvdWdoKSxcbiAqIGEgc21hbGwgaHViIGNhcCBzdGFuZGluZyBwcm91ZCAtLSBhbmQgYSBjaHVua2llciB0eXJlIHdob3NlIHRyZWFkIHJpbmcgYWx0ZXJuYXRlcyBhIGxpZ2h0ZXIgYW5kXG4gKiBhIGRhcmtlciB0b25lIHNlZ21lbnQgYnkgc2VnbWVudCwgc28gdGhlIGx1Z3MgcmVhZCBhdCBwcm9wIGRpc3RhbmNlIGZvciB6ZXJvIGdlb21ldHJ5LiBQZXItcG9pbnRcbiAqIGNvbG91cnMgcmlkZSB0aGUgbGF0aGUncyBzZWdtZW50LW1ham9yIHZlcnRleCBvcmRlciBleGFjdGx5IGFzIGluIHdoZWVsR2VvLlxuICovXG5mdW5jdGlvbiBzdGVlbFdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIHZlbnRIZXg6IG51bWJlciwgbHVnSGV4OiBudW1iZXIsIGRpc2ggPSAwLjUwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCBkID0gaHcgKiBkaXNoO1xuICAvLyBbcmFkaXVzLCBheGlhbF0gYW5kIGEgY29sb3VyIGNsYXNzIHBlciBwb2ludDogMCByaW0sIDEgdmVudCByaW5nLCAyIHR5cmUgc2lkZXdhbGwsIDMgdHJlYWRcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtZCArIDAuMDJdLCBbclJpbSAqIDAuMjIsIC1kICsgMC4wMl0sIFtyUmltICogMC4yNCwgLWRdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gaHViIGNhcFxuICAgIFtyUmltICogMC40MCwgLWRdLCBbclJpbSAqIDAuNDIsIC1kIC0gMC4wMDZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNoIGZsb29yXG4gICAgW3JSaW0gKiAwLjYyLCAtZCAtIDAuMDA2XSwgW3JSaW0gKiAwLjY0LCAtaHcgKiAwLjg2XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlbnQgcmluZyAoZGFyaylcbiAgICBbclJpbSAqIDAuOTAsIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45MF0sIFtyUmltLCAtaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAvLyByaW0gZmFjZSBhbmQgbGlwXG4gICAgW3JUeXJlICogMC44OCwgLWh3XSwgW3JUeXJlICogMC45NywgLWh3ICogMC44Nl0sIFtyVHlyZSwgLWh3ICogMC43MF0sICAgICAgICAgICAgICAgLy8gc2lkZXdhbGxcbiAgICBbclR5cmUsIGh3ICogMC43MF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYWRcbiAgICBbclR5cmUgKiAwLjk3LCBodyAqIDAuODZdLCBbclR5cmUgKiAwLjg4LCBod10sIFtyUmltLCBodyAqIDAuOThdLCAgICAgICAgICAgICAgICAgICAvLyBmYXIgc2lkZXdhbGxcbiAgICBbclJpbSwgaHcgKiAwLjg4XSwgW3JSaW0gKiAwLjMwLCBodyAqIDAuODBdLCBbMCwgaHcgKiAwLjgwXSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2sgb2YgdGhlIHJpbVxuICBdO1xuICBjb25zdCBjbHMgPSBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMiwgMiwgMywgMywgMiwgMiwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IEMgPSBbbmV3IFRIUkVFLkNvbG9yKHJpbUhleCksIG5ldyBUSFJFRS5Db2xvcih2ZW50SGV4KSwgbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBuZXcgVEhSRUUuQ29sb3IobHVnSGV4KV07XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGogPSBpICUgcHRzLmxlbmd0aCwgcyA9IE1hdGguZmxvb3IoaSAvIHB0cy5sZW5ndGgpO1xuICAgIGxldCBjID0gQ1tjbHNbal1dO1xuICAgIGlmIChjbHNbal0gPT09IDMpIGMgPSAocyAlIDIgPT09IDApID8gY3QgOiBDWzNdO1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEFuIEFMTE9ZIFdIRUVMOiB0aGUgc3RlZWwgbGF0aGUncyB0eXJlIHdpdGggYSBzaGFsbG93IG9wZW4gZGlzaCAtLSBhIGRhcmsgV0lORE9XIGZsb29yIGJldHdlZW4gYVxuICogc21hbGwgY2VudHJlIGNhcCBhbmQgYSBicmlnaHQgcmltIGxpcCAtLSBhbmQgYHNwb2tlTmAgZmxhdCBzcG9rZSBiYXJzIGxhaWQgYWNyb3NzIHRoZSBkaXNoIGluIHRoZVxuICogbGF0aGUncyBvd24gYXhpYWwgZnJhbWUsIG1lcmdlZCBCRUZPUkUgdGhlIGF4bGUgcm90YXRpb24gc28gdGhleSByaWRlIHRoZSBzYW1lIGluc3RhbmNlZCBnZW9tZXRyeS5cbiAqIFRoZSBiYXJzIHN0YW5kIDEyIG1tIG9mZiB0aGUgZmxvb3IgKG9wcG9zZWQgZmFjZXMsIG5vIHotZmlnaHQpIGFuZCByZWFkIGFzIGEgbXVsdGktc3Bva2UgYWxsb3kgYXRcbiAqIHByb3AgZGlzdGFuY2Ugd2hlcmUgYSBwZXItc2VnbWVudCB2ZXJ0ZXgtY29sb3VyIHN0YXIgd291bGQgYmx1ciBhY3Jvc3MgZXZlcnkgZmFjZS4gRGVmYXVsdC1vZmY6XG4gKiBvbmx5IGB3aGVlbHMuc3R5bGU6ICdhbGxveSdgIGdldHMgaXQuIENvbG91ciBjbGFzc2VzOiAwIHJpbSwgMSB3aW5kb3cgZmxvb3IsIDIgdHlyZSwgMyB0cmVhZC5cbiAqL1xuZnVuY3Rpb24gYWxsb3lXaGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCB3aW5kb3dIZXg6IG51bWJlciwgbHVnSGV4OiBudW1iZXIsIGRpc2ggPSAwLjM1LFxuICAgICAgICAgICAgICAgICAgICAgICBzcG9rZU4gPSAxMCwgc3Bva2VXID0gMC4xNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVywgZCA9IGh3ICogZGlzaDtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtZCArIDAuMDE1XSwgW3JSaW0gKiAwLjE2LCAtZCArIDAuMDE1XSwgW3JSaW0gKiAwLjE4LCAtZF0sICAgICAgICAgICAgICAgICAgICAgICAvLyBjZW50cmUgY2FwXG4gICAgW3JSaW0gKiAwLjIwLCAtZF0sIFtyUmltICogMC44NiwgLWRdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdyBmbG9vciAoZGFyaylcbiAgICBbclJpbSAqIDAuODgsIC1odyAqIDAuODhdLCBbclJpbSwgLWh3ICogMC45Ml0sIFtyUmltLCAtaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAgLy8gcmltIGxpcFxuICAgIFtyVHlyZSAqIDAuODgsIC1od10sIFtyVHlyZSAqIDAuOTcsIC1odyAqIDAuODZdLCBbclR5cmUsIC1odyAqIDAuNzBdLCAgICAgICAgICAgICAgICAvLyBzaWRld2FsbFxuICAgIFtyVHlyZSwgaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhZFxuICAgIFtyVHlyZSAqIDAuOTcsIGh3ICogMC44Nl0sIFtyVHlyZSAqIDAuODgsIGh3XSwgW3JSaW0sIGh3ICogMC45OF0sICAgICAgICAgICAgICAgICAgICAvLyBmYXIgc2lkZXdhbGxcbiAgICBbclJpbSwgaHcgKiAwLjg4XSwgW3JSaW0gKiAwLjMwLCBodyAqIDAuODBdLCBbMCwgaHcgKiAwLjgwXSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2sgb2YgdGhlIHJpbVxuICBdO1xuICBjb25zdCBjbHMgPSBbMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMiwgMiwgMywgMywgMiwgMiwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IEMgPSBbbmV3IFRIUkVFLkNvbG9yKHJpbUhleCksIG5ldyBUSFJFRS5Db2xvcih3aW5kb3dIZXgpLCBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIG5ldyBUSFJFRS5Db2xvcihsdWdIZXgpXTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgaiA9IGkgJSBwdHMubGVuZ3RoLCBzID0gTWF0aC5mbG9vcihpIC8gcHRzLmxlbmd0aCk7XG4gICAgbGV0IGMgPSBDW2Nsc1tqXV07XG4gICAgaWYgKGNsc1tqXSA9PT0gMykgYyA9IChzICUgMiA9PT0gMCkgPyBjdCA6IENbM107XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIC8vIHNwb2tlczogZmxhdCBiYXJzIGZyb20gdGhlIGNhcCB0byB0aGUgbGlwLCBpbiB0aGUgbGF0aGUgZnJhbWUgKGF4aWFsID0geSksIHRoZW4gcm90YXRlZCB3aXRoIGl0XG4gIGNvbnN0IGJhcnM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgcjAgPSByUmltICogMC4xNywgcjEgPSByUmltICogMC44OSwgbGVuID0gcjEgLSByMCwgdCA9IDAuMDI0O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHNwb2tlTjsgaSsrKSB7XG4gICAgY29uc3QgYiA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShyUmltICogc3Bva2VXLCB0LCBsZW4pO1xuICAgIGIudHJhbnNsYXRlKDAsIC1kIC0gMC4wMTE1LCByMCArIGxlbiAvIDIpO1xuICAgIGIucm90YXRlWSgoaSAvIHNwb2tlTikgKiBNYXRoLlBJICogMik7XG4gICAgYmFycy5wdXNoKHRpbnRHZW8oYiwgcmltSGV4KSk7XG4gIH1cbiAgY29uc3QgYWxsID0gbWVyZ2VHZW9zKFtnLCAuLi5iYXJzXSk7XG4gIGFsbC5yb3RhdGVaKE1hdGguUEkgLyAyKTtcbiAgYWxsLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBhbGw7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYsIHByaXNtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICAvLyBgcHJpc21gOiBhbiBvcGVuIHRocmVlLXNpZGVkIHByaXNtIGF0IHNpeCB0cmlhbmdsZXMgd2hlcmUgdGhlIGJveCBjb3N0cyB0d2VsdmUgLS0gYSB3aXJlXG4gICAgLy8gc3Bva2UgaGFzIG5vIHJlc29sdmFibGUgc2VjdGlvbiBhdCBwcm9wIGRpc3RhbmNlLCBhbmQgc2l4dHkgb2YgdGhlbSBvbiB0aHJlZSB3aGVlbHMgaXMgdGhlXG4gICAgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGFyZ2UgcHJvcCBpbnNpZGUgaXRzIHRyaWFuZ2xlIGNlaWxpbmcgYW5kIG9uZSBvdmVyIGl0XG4gICAgY29uc3QgZyA9IHByaXNtID8gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkodCAqIDAuNjIsIHQgKiAwLjYyLCBsZW4sIDMsIDEsIHRydWUpIDogbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIsIG9wZW4gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgLy8gYG9wZW5gOiBubyBlbmQgZGlzY3MgLS0gZm9yIGEgcnVuIHdob3NlIGV2ZXJ5IGVuZCBpcyBidXJpZWQgaW4gYSBqb2ludCwgYSByaW5nIG9yIGEgaHViLCB0aGVcbiAgICAvLyB0d28gY2FwcyBhcmUgaGFsZiB0aGUgc2VnbWVudCdzIHRyaWFuZ2xlcyBzcGVudCBvbiBmYWNlcyBub3RoaW5nIGNhbiBzZWVcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgbGVuICsgciAqIDEuMiwgc2VnLCAxLCBvcGVuKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcpOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMsXG4gICAgICAgICAgICAgICAgIG9wdHM6IHsgZmxvb3I/OiBudW1iZXIsIHN0cmVha3M/OiBudW1iZXIsIGNsb3VkPzogbnVtYmVyLCBzcGVja2xlPzogbnVtYmVyLCB0b25lPzogbnVtYmVyW10sIHpvbmVzPzogbnVtYmVyW11bXSB9ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGBmbG9vcmAgaXMgdGhlIGZyYWN0aW9uIG9mIHRoZSB0aWxlIGhlaWdodCAoaS5lLiBvZiB0aGUgd29ybGQgaGVpZ2h0IHRoZSB0aWxlIHNwYW5zKSBiZWxvd1xuICAgIC8vIHdoaWNoIHRoZSB3YXNoIGlzIEZVTEw6IGEgYm9keSB3aG9zZSBzaWxsIGlzIDAuNDYgbSB1cCBhIDIgbSB0aWxlIHdhbnRzIHRoZSBtdWQgc29saWQgdG9cbiAgICAvLyAwLjIzIGFuZCBmYWRpbmcgZnJvbSB0aGVyZSwgbm90IGZhZGluZyBmcm9tIHRoZSBncm91bmQgaXQgbmV2ZXIgcmVhY2hlcy5cbiAgICBjb25zdCBmbCA9IE1hdGgubWluKGNvdmVyYWdlLCBvcHRzLmZsb29yID8/IDApO1xuICAgIC8vIGB0b25lYCBpcyB0aGUgTVVEIGFzIGEgcmF0aW8gb2YgdGhlIGVudmVsb3BlLCBmb3IgYSBwYWludCB3aG9zZSBlbnZlbG9wZSBpcyB0aGUgcGVyLWNoYW5uZWxcbiAgICAvLyBtYXggb2YgY2xlYW4gcGFpbnQgYW5kIG11ZCAoYSBncmVlbiB3aG9zZSBtdWQgaXMgdGFuIGlzIGJyaWdodGVyIGluIHJlZCwgZGFya2VyIGluIGdyZWVuKTpcbiAgICAvLyB1bnNldCwgdGhlIG11ZCBpcyB3aGl0ZSAtLSB0aGUgZW52ZWxvcGUgaXRzZWxmLlxuICAgIGNvbnN0IFQgPSBvcHRzLnRvbmUgPyBvcHRzLnRvbmUubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHYpKSkpIDogbnVsbDtcbiAgICBjb25zdCBtdWQgPSAoYTogbnVtYmVyKSA9PiBUID8gYHJnYmEoJHtUWzBdfSwke1RbMV19LCR7VFsyXX0sJHthfSlgIDogYHJnYmEoMjU1LDI1MiwyNDQsJHthfSlgO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcyAqICgxIC0gZmwpLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoMC44OCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIFQgPyBtdWQoMC40NSkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIFQgPyBtdWQoMCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYHpvbmVzYCBhcmUgW3UwLCB1MSwgd2VpZ2h0XSBzcGFucyBvZiB0aGUgdGlsZSdzIHdpZHRoIHRoZSBzcHJheSBjb25jZW50cmF0ZXMgaW4gLS0gd2l0aFxuICAgIC8vIHRoZSB0aWxlIGZpdHRlZCB0byB0aGUgdmVoaWNsZSdzIGxlbmd0aCAoaGVpZ2h0VVYgdVNjYWxlID0gTCksIHRoYXQgaXMgXCJiZWhpbmQgdGhlIGZyb250XG4gICAgLy8gd2hlZWxcIiwgXCJhaGVhZCBvZiB0aGUgcmVhciBhcmNoXCIsIFwiYWxvbmcgdGhlIGJlZCBzaWRlXCI6IHdoZXJlIGEgd2hlZWwgYWN0dWFsbHkgdGhyb3dzIG11ZC5cbiAgICBjb25zdCB6b25lcyA9IG9wdHMuem9uZXMgPz8gW1swLCAxLCAxXV07XG4gICAgY29uc3QgenN1bSA9IHpvbmVzLnJlZHVjZSgoYWNjLCB6bikgPT4gYWNjICsgem5bMl0sIDApO1xuICAgIGNvbnN0IHBpY2tVID0gKCkgPT4geyBsZXQgdCA9IHJuZCgpICogenN1bTsgZm9yIChjb25zdCB6biBvZiB6b25lcykgeyBpZiAodCA8IHpuWzJdKSByZXR1cm4gKHpuWzBdICsgcm5kKCkgKiAoem5bMV0gLSB6blswXSkpICogczsgdCAtPSB6blsyXTsgfSByZXR1cm4gcm5kKCkgKiBzOyB9O1xuICAgIC8vIERVU1QgRklMTTogc29mdCBjbG91ZHkgcGF0Y2hlcyBvZiB0aGUgZW52ZWxvcGUgb3ZlciB0aGUgY2xlYW4gcGFpbnQgZXZlcnl3aGVyZSwgc28gdGhlXG4gICAgLy8gdXBwZXIgYm9keSBpcyBub3QgYSBmbGF0IGZpbGwgLS0gdGhlIHBsYXRlJ3MgZ3JlZW4gaXMgYSBkdWxsLCBkdXN0eSBncmVlbi5cbiAgICBpZiAob3B0cy5jbG91ZCkgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IG9wdHMuY2xvdWQgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgbXVkKGEpKTsgZzIuYWRkQ29sb3JTdG9wKDEsIG11ZCgwKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTUFJBWTogdGhlIG11ZCBhIHdoZWVsIHRocm93cyBpcyBhIGZpZWxkIG9mIHNtYWxsIHNwbGF0cyBzdHJlYWtlZCBhbG9uZyB0aGUgZGlyZWN0aW9uIG9mXG4gICAgLy8gdHJhdmVsICh1KSwgZGVuc2VzdCBqdXN0IGFib3ZlIHRoZSB3YXNoIGFuZCB0aGlubmluZyB1cHdhcmQgaW4gY2x1c3RlcnMgLS0gbm90IGEgZ3JhZGllbnQuXG4gICAgaWYgKG9wdHMuc3RyZWFrcykgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnN0cmVha3M7IGkrKykge1xuICAgICAgY29uc3QgY3gwID0gcGlja1UoKSwgYmFuZCA9IGNvdmVyYWdlO1xuICAgICAgY29uc3QgY3kwID0gcyAtIHMgKiAoZmwgKyBNYXRoLnBvdyhybmQoKSwgMS42KSAqIChiYW5kIC0gZmwpKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gNiArIE1hdGguZmxvb3Iocm5kKCkgKiAxOCksIHNwcmVhZCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50OyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQgKiAzLCB5ID0gY3kwICsgKHJuZCgpIC0gMC41KSAqIHNwcmVhZDtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgaCA9IDAuOCArIHJuZCgpICogcyAqIDAuMDAzLCBhID0gMC4zNSArIHJuZCgpICogMC41NTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCB3LCBoLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdHMuc3BlY2tsZSkgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnNwZWNrbGU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHBpY2tVKCksIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuMykgKiBzICogY292ZXJhZ2UsIHIgPSAwLjYgKyBybmQoKSAqIDEuNCwgYSA9IDAuMyArIHJuZCgpICogMC42O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgVCA/IG11ZChhKSA6IGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogR0xBU1MgdGlsZSBmb3IgYSB2ZWhpY2xlJ3MgZ2xhemluZyBiYW5kLCBib3VuZCBhcyBgbWFwYCBvbiB0aGUgZ2xhc3MgbWF0ZXJpYWwgQUZURVJcbiAqICBjb25zdHJ1Y3Rpb24gKHRoZSBtYXRlcmlhbCBzdGF5cyB0ZXh0dXJlbGVzcy1kZWNsYXJlZCkuIFRoZSBwYW5lJ3MgVVZzIGFyZSBoZWlnaHQta2V5ZWRcbiAqICAoYGhlaWdodFVWYCksIHNvIHYgcnVucyBzaWxsLXRvLXJvb2Y6IHRoZSB0aWxlIGlzIGEgdmVydGljYWwgZ3JhZGllbnQgZnJvbSB0aGUgbWF0ZXJpYWwnc1xuICogIG93biB0b25lIGF0IHRoZSB0b3AgKHdoaXRlLCBpLmUuIHRoZSBza3ktbGl0IHZhbHVlIHRoZSBtYXRlcmlhbCBpcyByZS1iYXNlZCB0bykgZG93biB0b1xuICogIGBsb3dgIGF0IHRoZSBib3R0b20gLS0gYSByZWFsIHNjcmVlbiByZWZsZWN0cyBza3kgYXQgdGhlIHRvcCBhbmQgdGhlIGRhcmsgZGFzaCBhbmQgcm9hZCBiZWxvd1xuICogIC0tIHBsdXMgYSBmZXcgc29mdCBkaWFnb25hbCByZWZsZWN0aW9uIHN0cmVha3MgYW5kIGEgZmFpbnQgdGludCBiYW5kLiBgbG93YCBpcyBhIGxpbmVhci1zcGFjZVxuICogIHJhdGlvIChzZWUgZW1pdC5tanMgYHJhdGlvYCkgb2YgdGhlIG1lYXN1cmVkIHNpZGUtZ2xhc3MgdG9uZSBvdmVyIHRoZSBza3ktbGl0IHRvbmUuICovXG5mdW5jdGlvbiBnbGFzc1RpbGUoc2l6ZTogbnVtYmVyLCBsb3c6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIHN0cmVha3MgPSA1KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGMgPSBsb3cubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCAwKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2IoJHtNYXRoLnJvdW5kKChjWzBdICsgMjU1KSAvIDIpfSwke01hdGgucm91bmQoKGNbMV0gKyAyNTUpIC8gMil9LCR7TWF0aC5yb3VuZCgoY1syXSArIDI1NSkgLyAyKX0pYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJyNmZmZmZmYnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHJlZmxlY3Rpb24gc3RyZWFrczogbG9uZyBzb2Z0IGRpYWdvbmFsIGJhbmRzLCBsaWdodGVyLCB0aWxlZCBpbiB1IHNvIHRoZSBzZWFtIG5ldmVyIHNob3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTApLCBhID0gMC4xMCArIHJuZCgpICogMC4xNiwgdGlsdCA9IHMgKiAoMC4yNSArIHJuZCgpICogMC4zNSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCArIGR4LCAwLCB4ICsgZHggKyB3LCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7IGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKDI1NSwyNTUsMjU1LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyB0aWx0LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB0aWx0LCAwKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhIGRhcmtlciBmaWxtIGluIHRoZSBsb3dlc3QgdGVudGg6IHRoZSBkYXNoIC8gY293bCBzaGFkb3cgYmVoaW5kIHRoZSBwYW5lXG4gICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqIDAuODgpO1xuICAgIGczLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjU1KWApOyBnMy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzM7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBvcHRzOiB7IHVTY2FsZT86IG51bWJlciwgdG9wQ2xlYW4/OiBib29sZWFuIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCB1cyA9IG9wdHMudVNjYWxlID8/IHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIGxldCB2ID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gICAgLy8gQSB0aWxlIGtleWVkIG9uIGhlaWdodCBjYW5ub3QgdGVsbCBhIGJvbm5ldCBmcm9tIGEgZG9vciBhdCB0aGUgc2FtZSBoZWlnaHQsIGFuZCBhIGJvbm5ldFxuICAgIC8vIGlzIGNsZWFuIHdoZXJlIGEgZG9vciBpcyBzcHJheWVkOiBgdG9wQ2xlYW5gIHNlbmRzIGV2ZXJ5IHVwd2FyZCBmYWNlIGludG8gdGhlIHRpbGUncyB0b3BcbiAgICAvLyBiYW5kICh2IDAuNzUuLjAuOTUpLCBhYm92ZSBhbnkgd2FzaCwgd2hlcmUgb25seSB0aGUgZHVzdCBmaWxtIGFwcGxpZXMuXG4gICAgaWYgKG9wdHMudG9wQ2xlYW4gJiYgYXkgPj0gMC44KSB2ID0gMC43NSArIDAuMiAqICh2IC0gTWF0aC5mbG9vcih2KSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gdjtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktcHJvZmlsZSBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeSByZXZvbHZlZCBhYm91dCBZOiB1IGZyb20gdGhlIFNFR01FTlQgaW5kZXhcbiAqICAodGhlIGxhdGhlIG9yZGVycyBpdHMgdmVydGljZXMgc2VnbWVudC1tYWpvciwgaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpIHNvIHRoZSBkdXBsaWNhdGVkXG4gKiAgc2VhbSBjb2x1bW4gcmVhZHMgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0OyB2IHBlciBQUk9GSUxFIFBPSU5UIGZyb21cbiAqICBgdnNgIChvbmUgdmFsdWUgcGVyIHByb2ZpbGUgcG9pbnQpLCBzbyB0aGUgY2FsbGVyIGRlY2lkZXMgd2hpY2ggdGlsZSByb3dzIGxhbmQgb24gdGhlIHRyZWFkIGFuZFxuICogIHdoaWNoIG9uIHRoZSBzaWRld2FsbHMuIGBwaXRjaGAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXMgYXJvdW5kIHRoZSB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgdnM6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgbGV0IHJNYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgck1heCA9IE1hdGgubWF4KHJNYXgsIE1hdGguaHlwb3QocC5nZXRYKGkpLCBwLmdldFooaSkpKTtcbiAgY29uc3QgcmVwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgyICogTWF0aC5QSSAqIHJNYXggLyBwaXRjaCkpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGkgLyBwb2ludENvdW50KSwgaiA9IGkgJSBwb2ludENvdW50O1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IHZzW01hdGgubWluKGosIHZzLmxlbmd0aCAtIDEpXTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBQaW4gZXZlcnkgVVYgb2YgYSBnZW9tZXRyeSB0byBvbmUgdGV4ZWwgLS0gdGhlIFdISVRFIGJhbmQgYSB0eXJlIHRpbGUga2VlcHMgYXQgaXRzIHRvcCAtLSBzbyBhXG4gKiAgcmltLCBodWIgb3Igc3Bva2Ugc2hhcmluZyB0aGUgdHlyZSdzIG1hdGVyaWFsIHJlbmRlcnMgaXRzIHZlcnRleCBjb2xvdXIgdW5tdWx0aXBsaWVkLiAqL1xuZnVuY3Rpb24gcGluVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHU6IG51bWJlciwgdjogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHUsIHYpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBbiBPUEVOIHNwb2tlZCB3aGVlbCBhYm91dCB0aGUgWCBheGxlOiBhIHR5cmUgUklORyBsYXRoZSAoYmVhZCwgc2lkZXdhbGwsIHNob3VsZGVyLCB0cmVhZCBhbmQgYmFja1xuICogZG93biB0aGUgZmFyIHNpZGUgLS0gYSBjbG9zZWQgdG9ydXMtbGlrZSBwcm9maWxlLCBzbyBub3RoaW5nIGlzIG9wZW4gdG8gdGhlIGdhdGUpLCBhIHJpbSByaW5nLCBhXG4gKiBicmFrZS1kcnVtIGh1YiwgYW5kIHdpcmUgc3Bva2VzIGFzIHRocmVlLXNpZGVkIHByaXNtcy4gVGhlIGNsb3NlZCBkaXNoIGB3aGVlbEdlb2AgZmlsbHMgdGhlIHdoZWVsXG4gKiB3aXRoIGEgc29saWQgZGlzYyB0aGF0IEhJREVTIHRoZSBzcG9rZXMgaXQgY2FycmllczsgYSBtb3RvcmN5Y2xlJ3Mgd2lyZSB3aGVlbCByZWFkcyBieSB0aGUgZGF5bGlnaHRcbiAqIHRocm91Z2ggaXQsIHNvIHRoZSBkaXNoIGlzIGdvbmUuIFR5cmUgVVZzIGFyZSBhcm91bmQtYnktcHJvZmlsZSBmb3IgYSB0cmVhZCB0aWxlIChgby5waXRjaGAgbWV0cmVzXG4gKiBwZXIgcmVwZWF0IGFyb3VuZDsgdiAwLjUuLjAuOTYgaXMgdGhlIHRyZWFkZWQgc3RyaXAgb2YgYHR5cmVUaWxlYCksIHJpbSwgaHViIGFuZCBzcG9rZXMgYXJlIHBpbm5lZFxuICogdG8gdGhlIHRpbGUncyB3aGl0ZSBiYW5kLiBSZXZvbHZlZCBhYm91dCBZLCB0aGVuIGxhaWQgb250byBYLlxuICovXG5mdW5jdGlvbiBvcGVuV2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlciwgbzogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCByciA9IHJSaW0gKiAxLjAyO1xuICBjb25zdCBwcm9mOiBudW1iZXJbXVtdID0gW1xuICAgIFtyciwgLWh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTAsIC1odyAqIDAuOThdLCBbclR5cmUgKiAwLjk4NSwgLWh3ICogMC42Nl0sIFtyVHlyZSwgLWh3ICogMC4zMF0sXG4gICAgW3JUeXJlLCBodyAqIDAuMzBdLCBbclR5cmUgKiAwLjk4NSwgaHcgKiAwLjY2XSwgW3JUeXJlICogMC45MCwgaHcgKiAwLjk4XSwgW3JyLCBodyAqIDAuNzJdLCBbcnIsIC1odyAqIDAuNzJdLFxuICBdO1xuICAvLyB2IHBlciBwcm9maWxlIHBvaW50OiBzaWRld2FsbCAwLjUwLi4wLjY2LCB0cmVhZCAwLjY2Li4wLjgwLCBzaWRld2FsbCAwLjgwLi4wLjk2ICgwLjk2Li4xIGlzIHdoaXRlKVxuICBjb25zdCB2cyA9IFswLjUwLCAwLjU2LCAwLjY0LCAwLjY4LCAwLjc4LCAwLjgyLCAwLjkwLCAwLjk2LCAwLjk2XTtcbiAgY29uc3QgdHlyZSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHByb2YubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGxhdGhlVVYodHlyZSwgcHJvZi5sZW5ndGgsIHNlZywgby5waXRjaCA/PyAwLjA1LCB2cyk7XG4gIHR5cmUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgY29uc3QgcmltUHJvZiA9IFtbclJpbSAqIDAuOTAsIC1odyAqIDAuNTBdLCBbclJpbSwgLWh3ICogMC42Ml0sIFtyUmltLCBodyAqIDAuNjJdLCBbclJpbSAqIDAuOTAsIGh3ICogMC41MF0sIFtyUmltICogMC45MCwgLWh3ICogMC41MF1dO1xuICBjb25zdCByaW0gPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShyaW1Qcm9mLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICByaW0uY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgY29uc3QgaHViUiA9IG8uaHViUiA/PyByUmltICogMC4zMiwgaHViVyA9IG8uaHViVyA/PyBodyAqIDIuNjtcbiAgY29uc3QgaHViID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoaHViUiwgaHViUiwgaHViVywgby5odWJTZWcgPz8gMTIpO1xuICBjb25zdCBodWJDYXAgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShodWJSICogMC41NSwgaHViUiAqIDAuNTUsIGh1YlcgKiAxLjI1LCBvLmh1YlNlZyA/PyAxMik7XG4gIGNvbnN0IHBhcnRzID0gW3RpbnRHZW8odHlyZSwgby50eXJlSGV4KSwgcGluVVYodGludEdlbyhyaW0sIG8ucmltSGV4KSwgMC41LCAwLjk4NSksXG4gICAgICAgICAgICAgICAgIHBpblVWKHRpbnRHZW8oaHViLCBvLmh1YkhleCA/PyBvLnJpbUhleCksIDAuNSwgMC45ODUpLCBwaW5VVih0aW50R2VvKGh1YkNhcCwgby5jYXBIZXggPz8gby5yaW1IZXgpLCAwLjUsIDAuOTg1KV07XG4gIGNvbnN0IGcgPSBtZXJnZUdlb3MocGFydHMpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGxhdGhlIGF4aXMgWSAtPiB0aGUgYXhsZSBvbiBYXG4gIGNvbnN0IHNwID0gcGluVVYoc3Bva2VzKGh1YlIgKiAwLjksIHJSaW0gKiAwLjk1LCBodywgby5zcG9rZXMgPz8gMjAsIG8uc3Bva2VIZXggPz8gMHhiMGFlYTksIG8uc3Bva2VUID8/IDAuMDA2LCB0cnVlKSwgMC41LCAwLjk4NSk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2csIHNwXSk7XG59XG5cbi8qKiBUWVJFIHRpbGUsIHBvcnRlZCBmcm9tIHRoZSBwcm9wIHRlbXBsYXRlOiBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAodmlhIGxhdGhlVVYpLCB0aGUgc3RyaXAgYXRcbiAqICB2IDAuNS4uMC45NiBhIHRyZWFkZWQgdHlyZSAoY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgY3V0IGJ5IHN0YWdnZXJlZCBzaXBlcywgYmVhZCByaW5ncywgbW91bGRcbiAqICBsaW5lcywgcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnMsIGdyYWluKSwgdiAwLi4wLjUgYSB3b3JuIHNsaWNrLCBhbmQgdGhlIHRvcFxuICogIDQlIHB1cmUgV0hJVEUgc28gcGlubmVkIHBhcnRzIHJlbmRlciB0aGVpciB2ZXJ0ZXggY29sb3VyLiBEcmF3biBhcyBSQVRJT1MgYWdhaW5zdCB0aGVcbiAqICB2ZXJ0ZXgtY29sb3VyZWQgcnViYmVyIGF0IGBiYXNlYCAoMjAwLzI1NSAtPiB0aGUgdHlyZSB0b25lIGlzIGF1dGhvcmVkIDEuMjc1eCBpdHMgYWxiZWRvIHNvIGR1c3RcbiAqICBhbmQgc2N1ZmZzIGNhbiBnbyBCUklHSFRFUiB0aGFuIHRoZSBydWJiZXIgdW5kZXIgYSBtdWx0aXBseSBjYW52YXMpLiBgby5iYW5kYCBpcyB0aGUgdHJlYWQnc1xuICogIHNoYXJlIG9mIHRoZSBzdHJpcCwgdG9wIHRvIGJvdHRvbSwgYW5kIG11c3QgYWdyZWUgd2l0aCBvcGVuV2hlZWxHZW8ncyB0cmVhZCByb3dzLiAqL1xuZnVuY3Rpb24gdHlyZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IDIwMCwgYmFuZCA9IG8uYmFuZCA/PyBbMC4zNSwgMC42NV0sIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuNDU7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKGJhc2UgKiBncm9vdmUpLCBydiA9IE1hdGgucm91bmQoYmFzZSAqIDAuNyksIG12ID0gTWF0aC5yb3VuZChiYXNlICogMC45KTtcbiAgICBjb25zdCBkdXN0ID0gby5kdXN0ID8/IFsyMzIsIDIxNCwgMTkwXTtcbiAgICBjb25zdCB3aGl0ZSA9IE1hdGgucm91bmQocyAqIDAuMDQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgY29uc3Qgc3RyaXAgPSAoeWE6IG51bWJlciwgeWI6IG51bWJlciwgdHJlYWRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IHliIC0geWEsIGIwID0geWEgKyBoICogKDEgLSBiYW5kWzFdKSwgYjEgPSB5YSArIGggKiAoMSAtIGJhbmRbMF0pO1xuICAgICAgY29uc3QgbmcgPSBvLmdyb292ZXMgPz8gMywgZ3cgPSBoICogMC4wMjQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZzsgaSsrKSB7IGNvbnN0IHkgPSBiMCArIChiMSAtIGIwKSAqIChpICsgMSkgLyAobmcgKyAxKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSBndyAvIDIsIHMsIGd3KTsgfVxuICAgICAgY29uc3QgbnMgPSBvLnNpcGVzID8/IDIsIHcgPSBzICogKG8uc2lwZVdpZHRoID8/IDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gbmc7IGsrKykge1xuICAgICAgICBjb25zdCB5MCA9IGsgPT09IDAgPyBiMCA6IGIwICsgKGIxIC0gYjApICogayAvIChuZyArIDEpICsgZ3cgLyAyLCB5MSA9IGsgPT09IG5nID8gYjEgOiBiMCArIChiMSAtIGIwKSAqIChrICsgMSkgLyAobmcgKyAxKSAtIGd3IC8gMjtcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCh3aGl0ZSwgcyAvIDIsIHRydWUpOyAgIC8vIHYgMC41Li4wLjk2OiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgICAvLyB2IDAuLjAuNTogc2xpY2tcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgd2hpdGUpOyAgIC8vIHYgMC45Ni4uMTogd2hpdGUsIGZvciBwaW5uZWQgcGFydHNcbiAgfSk7XG59XG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQgKHBvcnRlZCBmcm9tIHRoZSBwcm9wIHRlbXBsYXRlKTogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxXG4gKiAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWRcbiAqIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdCBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSBjYW52YXMgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnXG4gKiBiZXR3ZWVuIGl0cyBwb3N0cyBtaW51cyB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICBjb25zdCBaID0gKGo6IG51bWJlcikgPT4gcy56MCArIChzLnoxIC0gcy56MCkgKiBqIC8gbno7XG4gIGNvbnN0IGdyaWQgPSAoeU9mZjogbnVtYmVyLCBmbGlwOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgcG9zLnB1c2goWChpKSwgSGhbal1baV0gKyB5T2ZmLCBaKGopKTsgdXYucHVzaChpIC8gbngsIGogLyBueik7IH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGogKiAobnggKyAxKSArIGksIGIgPSBhICsgMSwgYyA9IGEgKyBueCArIDEsIGQgPSBjICsgMTtcbiAgICAgIGlmIChmbGlwKSBpZHgucHVzaChhLCBiLCBjLCBiLCBkLCBjKTsgZWxzZSBpZHgucHVzaChhLCBjLCBiLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5zZXRJbmRleChpZHgpOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCBwYXJ0cyA9IFtncmlkKDAsIGZhbHNlKSwgZ3JpZCgtdCwgdHJ1ZSldO1xuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBwYXJ0cy5wdXNoKHN0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSkpO1xuICByZXR1cm4gbWVyZ2VHZW9zKHBhcnRzKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbi8qKiBUcmFjdG9yLXR5cmUgTFVHUzogYG5gIGJhcnMgbGFpZCBhY3Jvc3MgdGhlIHRyZWFkLCBlYWNoIHlhd2VkIGFsdGVybmF0ZWx5ICstYHNrZXdgIHJhZCBhYm91dFxuICogIGl0cyBvd24gcmFkaWFsIHNvIGNvbnNlY3V0aXZlIGJhcnMgcmVhZCBhcyB0aGUgY2hldnJvbiBvZiBhbiBhZ3JpY3VsdHVyYWwgdHlyZSwgc3RhbmRpbmcgYGhgXG4gKiAgcHJvdWQgb2YgdGhlIHRyZWFkIHJpbmcuIEJ1aWx0IGFib3V0IHRoZSBYIGF4bGUgbGlrZSB3aGVlbEdlbyBhbmQgbWVyZ2VkIElOVE8gdGhlIHdoZWVsXG4gKiAgZ2VvbWV0cnksIHNvIHRoZSB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5IGFuZCB0aGUgbHVncyBjb3N0IG5vdGhpbmcgcGVyIGluc3RhbmNlLlxuICogIERlZmF1bHQtb2ZmOiBvbmx5IGEgY2ZnIHRoYXQgc2V0cyBgYmlrZS5sdWdzYCBnZXRzIHRoZW0uICovXG5mdW5jdGlvbiBsdWdzKHJUeXJlOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgbiA9IG8ubiA/PyAxNiwgaCA9IG8uaCA/PyAwLjA0LCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoaGFsZlcgKiAyICogKG8udyA/PyAwLjg1KSwgaCwgby5kID8/IDAuMDYpO1xuICAgIGcucm90YXRlWSgoaSAlIDIgPT09IDAgPyAxIDogLTEpICogKG8uc2tldyA/PyAwLjQpKTtcbiAgICBnLnRyYW5zbGF0ZSgwLCByVHlyZSAtIGggKiAwLjM1LCAwKTtcbiAgICBnLnJvdGF0ZVgoKGkgLyBuKSAqIE1hdGguUEkgKiAyICsgKG8ucGhhc2UgPz8gMCkpO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHBhcnRzKSwgby5oZXggPz8gMHg1NTU1NTUpO1xufVxuXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG95b3RhSGlsdXhNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1RveW90YSBIaWx1eCc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBjYXIgYm9keSAoc2hhcmVkIHRlbXBsYXRlKSAqL1xuICBjb25zdCBXID0gRy53aWR0aCBhcyBudW1iZXI7XG4gIGNvbnN0IHdoID0gRy53aGVlbHMgYXMgYW55O1xuXG4gIC8vIDEuIEJPRFk6IHRoZSBzaWRlIG91dGxpbmUgY2xvc2VkIGFsb25nIHRoZSBzaWxsIHdpdGggYSB3aGVlbC1hcmNoIG5vdGNoIGF0IGVhY2ggYXhsZSwgc3dlcHRcbiAgLy8gICAgYWNyb3NzIHRoZSB3aWR0aCwgdGhlbiBuYXJyb3dlZCBhYm92ZSB0aGUgYmVsdCAodHVtYmxlaG9tZSkgYW5kIHJvdW5kZWQgaW4gcGxhbiBhdCB0aGUgZW5kcy5cbiAgY29uc3Qgb3V0bGluZTogbnVtYmVyW11bXSA9IChHLm91dGxpbmUgYXMgbnVtYmVyW11bXSkuc2xpY2UoKTtcbiAgY29uc3Qgc2lsbCA9IEcuc2lsbCBhcyBudW1iZXI7XG4gIGNvbnN0IHJBID0gd2guYXJjaCBhcyBudW1iZXI7XG4gIGNvbnN0IGFyY2hQdHMgPSAoemM6IG51bWJlcikgPT4geyBjb25zdCBwOiBudW1iZXJbXVtdID0gW107IGZvciAobGV0IGkgPSAwOyBpIDw9IDg7IGkrKykgeyBjb25zdCBhID0gTWF0aC5QSSAtIGkgKiBNYXRoLlBJIC8gODsgcC5wdXNoKFt6YyArIE1hdGguY29zKGEpICogckEsIHdoLnIgKyBNYXRoLnNpbihhKSAqIHJBXSk7IH0gcmV0dXJuIHA7IH07XG4gIGNvbnN0IHpSZWFyU2lsbCA9IG91dGxpbmVbb3V0bGluZS5sZW5ndGggLSAxXVswXSwgekZyb250U2lsbCA9IG91dGxpbmVbMF1bMF07XG4gIGNvbnN0IHNpbGxSdW46IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guelIsIHdoLnpGXSkge1xuICAgIGlmICh6YyAtIHJBID4gelJlYXJTaWxsICYmIHpjICsgckEgPCB6RnJvbnRTaWxsKSBzaWxsUnVuLnB1c2goLi4uYXJjaFB0cyh6YykpO1xuICB9XG4gIGNvbnN0IHByb2ZpbGUgPSBvdXRsaW5lLmNvbmNhdChzaWxsUnVuLmxlbmd0aCA/IHNpbGxSdW4gOiBbXSk7XG4gIC8vIGBzaGFwZWAgbWF5IGFkZCBzdGVwcyBhbmQgc2hvdWxkZXIgLyBub3NlIC8gdGFpbCByb3VuZGluZ3M7IHRoZSBib2R5J3Mgb3duIHByb2ZpbGUgYW5kIHdpZHRoXG4gIC8vIGFyZSB0aGUgcmVmZXJlbmNlIGV2ZXJ5IHByb3VkIGJhbmQgaXMgcm91bmRlZCBhZ2FpbnN0LCBzbyB0aGV5IGFyZSBzZXQgaGVyZSBhbmQgbm90IHBlciBjZmcuXG4gIGNvbnN0IHNoYXBlT3B0czogYW55ID0geyB0dW1ibGU6IEcudHVtYmxlLCBwbGFuOiBHLnBsYW4sIC4uLigoRy5zaGFwZSBhcyBhbnkpID8/IHt9KSwgYmFzZVdpZHRoOiBXLCB0b3BPZjogcHJvZmlsZSB9O1xuICBjb25zdCBib2R5R2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFt0aW50R2VvKHNpZGVFeHRydWRlKHByb2ZpbGUsIFcsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpXTtcbiAgZm9yIChjb25zdCBiIG9mIChHLmJvZHlCb3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgYm9keUdlb3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgZm9yIChjb25zdCBleCBvZiAoRy5ib2R5RXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgYm9keUdlb3MucHVzaCh0aW50R2VvKHNpZGVFeHRydWRlKGV4LnBvbHksIGV4LndpZHRoID8/IFcsIGV4LnNoYXBlID8/IHt9KSwgZXguaGV4ID8/IEcucGFpbnRIZXgpKTtcbiAgfVxuICBjb25zdCB1dk9wdHMgPSB7IHVTY2FsZTogRy5tdWRVU2NhbGUgYXMgbnVtYmVyIHwgdW5kZWZpbmVkLCB0b3BDbGVhbjogISFHLm11ZFRvcENsZWFuIH07XG4gIGNvbnN0IGJvZHlHZW8gPSBoZWlnaHRVVihtZXJnZUdlb3MoYm9keUdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgY29uc3QgYm9keSA9IGFkZCgnYm9keScsICdCb2R5IHNoZWxsJywgYm9keUdlbywgJ3BhaW50Jyk7XG4gIGlmIChHLmNvbGxpZGVyKSBjb2xsaWRlcnNbJ2JvZHknXSA9IEcuY29sbGlkZXI7XG5cbiAgLy8gMi4gR0xBU1M6IHRoZSBnbGFzc2hvdXNlIHBvbHlnb24gb2Zmc2V0IG91dHdhcmQgc28gZXZlcnkgcGFuZSBzdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkncyBvd25cbiAgLy8gICAgcmFrZWQgZmFjZXMsIHN3ZXB0IGF0IHRoZSBib2R5IHdpZHRoIHBsdXMgdGhlIHNhbWUgbWFyZ2luLCBuYXJyb3dlZCBieSB0aGUgc2FtZSB0dW1ibGVob21lLlxuICBjb25zdCBnbGFzc0dlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgZ2wgPSBHLmdsYXNzIGFzIGFueTtcbiAgaWYgKGdsPy5wb2x5KSBnbGFzc0dlb3MucHVzaChzaWRlRXh0cnVkZShvZmZzZXRQb2x5KGdsLnBvbHksIGdsLnByb3VkID8/IDAuMDA2KSwgVyArIDIgKiAoZ2wucHJvdWQgPz8gMC4wMDYpLCBzaGFwZU9wdHMpKTtcbiAgZm9yIChjb25zdCBiIG9mIChnbD8uYm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIGdsYXNzR2Vvcy5wdXNoKHJib3goYikpO1xuICBpZiAoZ2xhc3NHZW9zLmxlbmd0aCkge1xuICAgIGxldCBnZyA9IHRpbnRHZW8obWVyZ2VHZW9zKGdsYXNzR2VvcyksIGdsLmhleCA/PyAweGZmZmZmZik7XG4gICAgLy8gcGFuZSBVVnM6IHYgcnVucyAwLi4xIGZyb20gdGhlIGdsYXNzIHNpbGwgYHV2WVswXWAgdG8gdGhlIHBhbmUgdG9wIGB1dllbMV1gLCB1IGFsb25nIHRoZVxuICAgIC8vIHBhbmUgaW4gbWV0cmVzIG92ZXIgYHVTY2FsZWAsIHNvIGEgZ2xhc3MgdGlsZSdzIHNreSBncmFkaWVudCBzcGFucyBldmVyeSBwYW5lIHRvcCB0b1xuICAgIC8vIGJvdHRvbTsgaGFybWxlc3Mgd2l0aG91dCBhIHRpbGVcbiAgICBpZiAoZ2wudXZZKSB7XG4gICAgICBjb25zdCBxID0gZ2cuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucSA9IGdnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHV2ID0gbmV3IEZsb2F0MzJBcnJheShxLmNvdW50ICogMik7XG4gICAgICBjb25zdCB1cyA9IGdsLnVTY2FsZSA/PyAxLjYsIHkwID0gZ2wudXZZWzBdLCB5MSA9IGdsLnV2WVsxXTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHUgPSBNYXRoLmFicyhucS5nZXRYKGkpKSA+PSBNYXRoLmFicyhucS5nZXRaKGkpKSA/IHEuZ2V0WihpKSA6IHEuZ2V0WChpKTtcbiAgICAgICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHEuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgICAgfVxuICAgICAgZ2cuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICB9XG4gICAgYWRkKCdnbGF6aW5nJywgJ0dsYXppbmcnLCBnZywgJ2dsYXNzJyk7XG4gIH1cblxuICAvLyAzLiBQSUxMQVJTIGFuZCByb29mIGRldGFpbHMgcmlkZSB0aGUgYm9keSdzIHBhaW50IGJ1dCBhcmUgYSBzZXBhcmF0ZSBtZXJnZSBzbyB0aGV5IGNhbiBzdGFuZFxuICAvLyAgICBwcm91ZCBvZiB0aGUgZ2xhc3M7IHRoZXkgam9pbiB0aGUgYm9keSBjb21wb25lbnQgKG9uZSBkcmF3IGNhbGwpIGJ5IGJlaW5nIG1lcmdlZCBpbi5cbiAgY29uc3QgcGlsbGFyR2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHBsIG9mIChHLnBpbGxhcnMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgLy8gYSBwbGFpbiBwb2x5Z29uIHN3ZWVwcyB0aGUgZnVsbCB3aWR0aCAodGhlIG9sZCBiZWhhdmlvdXIpOyB7IHBvbHksIHN0cmlwIH0gc3dlZXBzIG9ubHkgYVxuICAgIC8vIHN0cmlwIHRoYXQgZGVlcCBhdCBlYWNoIHNpZGUsIHdoaWNoIGlzIHdoYXQgYSBwaWxsYXIgYmVzaWRlIGEgcGFuZSBpc1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBsKSkgcGlsbGFyR2Vvcy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUocGwsIFcgKyAyICogMC4wMTMsIHNoYXBlT3B0cyksIEcucGFpbnRIZXgpKTtcbiAgICAvLyBgaGV4YCB0aW50cyBvbmUgc3RyaXAgYXdheSBmcm9tIHRoZSBwYWludCAoYSBibGFjayB3aW5kb3cgZ2Fza2V0IG9yIGRyaXAgcmFpbCk7IGRlZmF1bHQgdGhlIHBhaW50XG4gICAgZWxzZSBwaWxsYXJHZW9zLnB1c2godGludEdlbyhzaWRlU3RyaXAocGwucG9seSwgVyArIDIgKiAocGwucHJvdWQgPz8gMC4wMTMpLCBwbC5zdHJpcCA/PyAwLjEwLCBzaGFwZU9wdHMpLCBwbC5oZXggPz8gRy5wYWludEhleCkpO1xuICB9XG4gIGlmIChwaWxsYXJHZW9zLmxlbmd0aCkge1xuICAgIGNvbnN0IHBnID0gaGVpZ2h0VVYobWVyZ2VHZW9zKHBpbGxhckdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMiwgdXZPcHRzKTtcbiAgICBjb25zdCBtZXJnZWQgPSBoZWlnaHRVVihtZXJnZUdlb3MoW2JvZHkuZ2VvbWV0cnkgYXMgVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBnXSksIEcubXVkU2NhbGUgPz8gMS4yLCB1dk9wdHMpO1xuICAgIGJvZHkuZ2VvbWV0cnkgPSBtZXJnZWQ7XG4gIH1cblxuICAvLyA0LiBUUklNOiBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLCBzdGVwcywgYXJjaCBmbGFyZXMgYW5kIHRoZSBpbm5lciB3aW5ncyB0aGF0XG4gIC8vICAgIHN0b3AgdGhlIHRocm91Z2gtYXJjaCByZWFkaW5nIGFzIGRheWxpZ2h0IC0tIGV2ZXJ5IG9uZSBhIHRpbnRlZCBib3ggb24gT05FIHdoaXRlIG1hdGVyaWFsLlxuICBjb25zdCB0cmltTGlzdDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGIgb2YgKEcudHJpbSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgdHJpbUxpc3QucHVzaChiKTtcbiAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKEcudHJpbU1pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgdHJpbUxpc3QucHVzaChiKTtcbiAgY29uc3QgdHJpbUdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbdGludGVkQm94ZXModHJpbUxpc3QpXTtcbiAgZm9yIChjb25zdCB6YyBvZiBbd2guekYsIHdoLnpSXSkge1xuICAgIGlmICh3aC5mbGFyZSkgdHJpbUdlb3MucHVzaChmbGFyZSh6Yywgd2guciwgckEgKyAwLjAwNSwgckEgKyB3aC5mbGFyZSwgVyAvIDIgLSAwLjAxMiwgVyAvIDIgKyAod2guZmxhcmVPdXQgPz8gMC4wMyksIHdoLmZsYXJlSGV4ID8/IDB4MmEyYTJhKSk7XG4gICAgLy8gaW5uZXIgd2luZzogYSBkYXJrIGJveCBiZXR3ZWVuIHRoZSB3aGVlbHMnIGlubmVyIGZhY2VzIGZpbGxpbmcgdGhlIGFyY2ggdm9pZFxuICAgIGNvbnN0IGlubmVySGFsZiA9IHdoLnRyYWNrIC0gd2guaGFsZlcgLSAwLjAwNTtcbiAgICB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oYm94QXQoMCwgKHNpbGwgKyB3aC5yICsgckEgLSAwLjAyKSAvIDIgKyAwLjAsIHpjLCBpbm5lckhhbGYgKiAyLCAod2guciArIHJBIC0gMC4wMikgLSBzaWxsICsgMC4xMCwgKHJBIC0gMC4wMykgKiAyKSwgd2gud2VsbEhleCA/PyAweDJiMjkyNikpO1xuICB9XG4gIGZvciAoY29uc3QgdCBvZiAoRy50dWJlcyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICBmb3IgKGNvbnN0IGMgb2YgKEcuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoYy5ydCwgYy5yYiwgYy5oLCBjLnNlZyA/PyAxMik7XG4gICAgaWYgKGMucngpIGcucm90YXRlWChjLnJ4KTsgaWYgKGMucnopIGcucm90YXRlWihjLnJ6KTtcbiAgICBnLnRyYW5zbGF0ZShjLmF0WzBdLCBjLmF0WzFdLCBjLmF0WzJdKTtcbiAgICB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oZywgYy5oZXgpKTtcbiAgfVxuICBhZGQoJ3RyaW0nLCAnVHJpbSwgbGFtcHMsIGJ1bXBlcnMgYW5kIHdoZWVsIHdlbGxzJywgbWVyZ2VHZW9zKHRyaW1HZW9zKSwgJ3RyaW0nKTtcblxuICAvLyA1LiBXSEVFTFM6IG9uZSBsYXRoZSwgZm91ciAob3IgaG93ZXZlciBtYW55KSBpbnN0YW5jZXMsIGVhY2ggYSBuYW1lZCBwaXZvdCBvbiB0aGUgYXhsZS5cbiAgY29uc3Qgd2hlZWxHID0gd2guc3R5bGUgPT09ICdhbGxveSdcbiAgICA/IGFsbG95V2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDI0LCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLndpbmRvd0hleCA/PyAweDJhMjgyNiwgd2gubHVnSGV4ID8/IHdoLnR5cmVIZXgsIHdoLmRpc2ggPz8gMC4zNSwgd2guc3Bva2VzID8/IDEwLCB3aC5zcG9rZVcgPz8gMC4xNilcbiAgICA6IHdoLnN0eWxlID09PSAnc3RlZWwnXG4gICAgPyBzdGVlbFdoZWVsR2VvKHdoLnIsIHdoLnJpbSwgd2guaGFsZlcsIHdoLnNlZyA/PyAyNCwgd2gudHlyZUhleCwgd2gucmltSGV4LCB3aC52ZW50SGV4ID8/IDB4NGE0ODQyLCB3aC5sdWdIZXggPz8gd2gudHlyZUhleCwgd2guZGlzaCA/PyAwLjUwKVxuICAgIDogd2hlZWxHZW8od2guciwgd2gucmltLCB3aC5oYWxmVywgd2guc2VnID8/IDIwLCB3aC50eXJlSGV4LCB3aC5yaW1IZXgsIHdoLmRpc2ggPz8gMC41NSk7XG4gIC8vIGBsdWdzYCBtZXJnZXMgYSByaW5nIG9mIHRyZWFkIGJsb2NrcyBpbnRvIHRoZSBTQU1FIHdoZWVsIGdlb21ldHJ5IChvbmUgdW5pcXVlIGdlb21ldHJ5LCBvbmVcbiAgLy8gaW5zdGFuY2VkIHN1Ym1pc3Npb24pOiBtdWQtdGVycmFpbiB0eXJlcyB3aG9zZSBsdWdzIHN0YW5kIG9mZiB0aGUgdHJlYWQgcmVhZCBhdCBwcm9wIGRpc3RhbmNlLlxuICBjb25zdCB3aGVlbEcyID0gd2gubHVncyA/IG1lcmdlR2Vvcyhbd2hlZWxHLCBsdWdzKHdoLnIsIHdoLmhhbGZXLCB3aC5sdWdzKV0pIDogd2hlZWxHO1xuICBjb25zdCB3aGVlbE1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHAgb2Ygd2gucG9zaXRpb25zIGFzIG51bWJlcltdW10pIHtcbiAgICB3aGVlbE1hdHMucHVzaChuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UobmV3IFRIUkVFLlZlY3RvcjMocFswXSwgcFsxXSwgcFsyXSksXG4gICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIHBbMF0gPCAwID8gTWF0aC5QSSA6IDApLCBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSkpO1xuICB9XG4gIGFkZEluc3QoJ3doZWVscycsICdXaGVlbHMnLCB3aGVlbEcyLCAndHJpbScsIHdoZWVsTWF0cyk7XG5cbiAgLy8gNi4gRVhUUkEgY29tcG9uZW50cyBkZWNsYXJlZCBieSB0aGUgY2ZnIChhIGNvcnJ1Z2F0ZWQgcm9vZiwgYSBiZWQgZmxvb3IsIGEgY2Fub3B5KSAtLSBlYWNoXG4gIC8vICAgIGl0cyBvd24gbWF0ZXJpYWwgYW5kIHN1Ym1pc3Npb24sIGNvc3RlZCBpbiB0aGUgYmxvY2tvdXQuXG4gIGZvciAoY29uc3QgZXggb2YgKEcuZXh0cmFzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChleC5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoZXguYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChleC50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgZSBvZiAoZXguZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHRpbnRHZW8oc2lkZUV4dHJ1ZGUoZS5wb2x5LCBlLndpZHRoLCBlLnNoYXBlID8/IHt9KSwgZS5oZXgpKTtcbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKGV4LnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGlmIChleC51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGFkZChleC5pZCwgZXgubmFtZSwgZywgZXgubWF0ZXJpYWwpO1xuICB9XG5cbiAgLy8gNy4gUG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXM6IGJvdW5kIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiBzbyB0aGUgdGV4dHVyZWxlc3NcbiAgLy8gICAgZGVjbGFyYXRpb25zIHN0YW5kLiBFdmVyeSB0b25lIGlzIGEgbWVhc3VyZWQgcmF0aW8gcmVjb3JkZWQgb24gdGhlIG1hdGVyaWFsIGluIHRoZSBzcGVjLlxuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMsIHQub3B0cyA/PyB7fSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2R1c3QnKSB0ZXggPSBkdXN0VGlsZSh0LnNpemUgPz8gNTEyLCB0LmR1c3QsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzApO1xuICAgIGlmICh0LmtpbmQgPT09ICdjb3JydWdhdGlvbicpIHRleCA9IGNvcnJ1Z2F0aW9uVGlsZSh0LnNpemUgPz8gMjU2LCB0LnBpdGNoID8/IDI0LCB0LmxvdyA/PyAwLjcyLCB0LnNlZWQgPz8gMyk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICdnbGFzcycpIHRleCA9IGdsYXNzVGlsZSh0LnNpemUgPz8gMjU2LCB0LmxvdywgdC5zZWVkID8/IDksIHQuc3RyZWFrcyA/PyA1KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlVG95b3RhSGlsdXhNb2RlbChvcHRpb25zKTtcbiAgaWYgKHNwZWMgIT09IHVuZGVmaW5lZCAmJiBzcGVjICE9PSBudWxsKSByb290LnVzZXJEYXRhLnNjdWxwdFNwZWMgPSBzcGVjO1xuXG4gIGNvbnN0IHJ0ID0gcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lIGFzIFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWQ7XG4gIGlmIChydCkge1xuICAgIGNvbnN0IG5vZGVzID0gKHJ0Lm5vZGVzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG5cbiAgICAvLyBQaXZvdHM6IHRoZSByb290LCBwbHVzIE9ORSBQRVIgV0hFRUwgKGFuZCBhbnkgb3RoZXIgbWVjaGFuaXNtIENPTkZJRy5waXZvdHMgbmFtZXMgLS0gYVxuICAgIC8vIHN0ZWVyaW5nIGhlYWQsIGEgY2Fub3B5IHN0YXkpLiBBIHZlaGljbGUncyB3aGVlbHMgZ2VudWluZWx5IHR1cm4sIHNvIGVhY2ggb25lIGlzIGEgcHJvbWlzZVxuICAgIC8vIGtlcHQ6IHRoZSBwaXZvdCBzaXRzIGF0IHRoZSBodWIsIGl0cyBheGlzIGlzIHRoZSBheGxlLCBhbmQgYGluc3RhbmNlYCBuYW1lcyB3aGljaCBpbnN0YW5jZVxuICAgIC8vIG9mIHRoZSB3aGVlbCBJbnN0YW5jZWRNZXNoIGl0IGRyaXZlcy4gTm90aGluZyBlbHNlIG9uIHRoZSBwcm9wIG1vdmVzIC0tIHRoZSBkb29ycyBhcmUgcGFydFxuICAgIC8vIG9mIHRoZSBib2R5IHNoZWxsIC0tIHNvIG5vdGhpbmcgZWxzZSBnZXRzIGFuIGF4aXMuXG4gICAgY29uc3QgcGl2b3RzOiBUSFJFRS5PYmplY3QzRFtdID0gW107XG4gICAgY29uc3Qgcm9vdFBpdm90ID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgcm9vdFBpdm90Lm5hbWUgPSAncm9vdCc7XG4gICAgcm9vdFBpdm90LnBvc2l0aW9uLnNldCgwLCAwLCAwKTtcbiAgICByb290UGl2b3QudXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgIGFuaW1hdGlvblJvbGU6ICdyb290JyxcbiAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBbMCwgMCwgMF0sIGF4aXM6IFswLCAxLCAwXSwgbmFtZTogJ3Jvb3QnIH0sXG4gICAgfTtcbiAgICByb290LmFkZChyb290UGl2b3QpO1xuICAgIHBpdm90cy5wdXNoKHJvb3RQaXZvdCk7XG4gICAgZm9yIChjb25zdCBwdiBvZiAoQ09ORklHLnBpdm90cyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICAgIGNvbnN0IG8gPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICAgIG8ubmFtZSA9IHB2Lm5hbWU7XG4gICAgICBvLnBvc2l0aW9uLnNldChwdi5wb3NpdGlvblswXSwgcHYucG9zaXRpb25bMV0sIHB2LnBvc2l0aW9uWzJdKTtcbiAgICAgIG8udXNlckRhdGEuYWN0aW9uUHJvZmlsZSA9IHtcbiAgICAgICAgYW5pbWF0aW9uUm9sZTogJ2NoaWxkJyxcbiAgICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IHB2LnBvc2l0aW9uLCBheGlzOiBwdi5heGlzLCBuYW1lOiBwdi5uYW1lLFxuICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHB2LmNvbXBvbmVudCwgaW5zdGFuY2U6IHB2Lmluc3RhbmNlID8/IG51bGwsIG5vdGVzOiBwdi5ub3RlID8/ICcnIH0sXG4gICAgICB9O1xuICAgICAgcm9vdC5hZGQobyk7XG4gICAgICBwaXZvdHMucHVzaChvKTtcbiAgICB9XG5cbiAgICAvLyBTb2NrZXRzOiBOT05FIHVubGVzcyBDT05GSUcuc29ja2V0cyBuYW1lcyBvbmUuIE5vdGhpbmcgYXR0YWNoZXMgdG8gYSB2ZWhpY2xlIGluIHRoaXMga2l0XG4gICAgLy8gYW5kIG5vdGhpbmcgaXMgZW1pdHRlZCBmcm9tIGl0LlxuXG4gICAgLy8gQ29sbGlkZXJzIGFyZSBwbGFpbiBEQVRBLCBub3QgT2JqZWN0M0QsIHNvIHRoZXkgY2Fycnkgbm8gLm5hbWUgb2YgdGhlaXIgb3duLiBHaXZlIGVhY2ggdGhlXG4gICAgLy8gaWQgb2YgdGhlIGNvbXBvbmVudCBpdCBvd25zIGFuZCBkcm9wIHRoZSBlbXB0eSBvbmVzIC0tIGEgbmFtZWxlc3MgZW1wdHkgcHJveHkgaW4gdGhlXG4gICAgLy8gcnVudGltZSBsaXN0IHJlYWRzIGFzIGEgcGh5c2ljcyBzaGFwZSB0aGF0IGV4aXN0cyBhbmQgZG9lcyBub3RoaW5nLlxuICAgIGNvbnN0IGNvbGxpZGVycyA9IE9iamVjdC5lbnRyaWVzKChydC5jb2xsaWRlcnMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIGFueT4pXG4gICAgICAuZmlsdGVyKChbLCBjXSkgPT4gYyAmJiB0eXBlb2YgYyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmtleXMoYykubGVuZ3RoID4gMClcbiAgICAgIC5tYXAoKFtpZCwgY10pID0+ICh7IG5hbWU6IGlkLCAuLi4oYyBhcyBvYmplY3QpIH0pKTtcblxuICAgIC8vIERlc3RydWN0aW9uIGdyb3VwczogdGhpcyBwcm9wIGRlY2xhcmVzIE5PTkUsIGFuZCBwcm9tb3Rpb24gY2hlY2tzIGJ1aWx0IGFnYWluc3QgZGVjbGFyZWQgYXNcbiAgICAvLyBhbiBlcXVhbGl0eSBpbiBCT1RIIGRpcmVjdGlvbnMuIERlcml2ZWQgcmF0aGVyIHRoYW4gYXNzdW1lZCBlbXB0eSwgc28gYSBjb21wb25lbnQgdGhhdFxuICAgIC8vIHNvbWVob3cgY2FycmllZCBhIGZyYWN0dXJlR3JvdXAgZmFpbHMgdGhlIGdhdGUgbG91ZGx5IGluc3RlYWQgb2YgYmVpbmcgZHJvcHBlZCBoZXJlLlxuICAgIGNvbnN0IGdyb3VwZWQgPSBuZXcgTWFwPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4oKTtcbiAgICBmb3IgKGNvbnN0IFtuYW1lLCBtZW1iZXJzXSBvZiBPYmplY3QuZW50cmllcygocnQuZGVzdHJ1Y3Rpb25Hcm91cHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KSkge1xuICAgICAgZ3JvdXBlZC5zZXQobmFtZSwgWy4uLm1lbWJlcnNdKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBub2RlIG9mIE9iamVjdC52YWx1ZXMobm9kZXMpKSB7XG4gICAgICBjb25zdCBncm91cCA9IChub2RlIGFzIGFueSk/LnVzZXJEYXRhPy5hY3Rpb25Qcm9maWxlPy5kZXN0cnVjdGlvbj8uZnJhY3R1cmVHcm91cDtcbiAgICAgIGlmICh0eXBlb2YgZ3JvdXAgIT09ICdzdHJpbmcnIHx8ICFncm91cCkgY29udGludWU7XG4gICAgICBpZiAoIWdyb3VwZWQuaGFzKGdyb3VwKSkgZ3JvdXBlZC5zZXQoZ3JvdXAsIFtdKTtcbiAgICAgIGdyb3VwZWQuZ2V0KGdyb3VwKSEucHVzaChub2RlKTtcbiAgICB9XG5cbiAgICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7XG4gICAgICAuLi5ydCxcbiAgICAgIC8vIEEgQ09VTlQsIG5vdCB0aGUgUmVjb3JkLiB0aGFpa2l0J3MgaGFybmVzcyByZXR1cm5zIHRoaXMgZmllbGQgc3RyYWlnaHQgYWNyb3NzIHRoZVxuICAgICAgLy8gcHVwcGV0ZWVyIGJyaWRnZSBhbmQgaXRzIHJlZ2lzdHJ5IGZpZWxkIGlzIGEgbnVtYmVyOyBhIFJlY29yZCBvZiBPYmplY3QzRCBpcyBjaXJjdWxhciBhbmRcbiAgICAgIC8vIGZhaWxzIHRvIHNlcmlhbGlzZSwgd2hpY2ggc3VyZmFjZXMgYXMgdGhlIHdob2xlIHN0YXRzIG9iamVjdCBhcnJpdmluZyB1bmRlZmluZWQuIFRoZVxuICAgICAgLy8gUmVjb3JkIHN0YXlzIHJlYWNoYWJsZSB1bmRlciBieUlkLlxuICAgICAgbm9kZXM6IE9iamVjdC5rZXlzKG5vZGVzKS5sZW5ndGgsXG4gICAgICBwaXZvdHMsXG4gICAgICBzb2NrZXRzOiBPYmplY3QudmFsdWVzKChydC5zb2NrZXRzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4pLFxuICAgICAgY29sbGlkZXJzLFxuICAgICAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFsuLi5ncm91cGVkLmVudHJpZXMoKV0ubWFwKChbbmFtZSwgbWVtYmVyc10pID0+ICh7IG5hbWUsIG1lbWJlcnMgfSkpLFxuICAgICAgYnlJZDogeyBub2RlcywgbWVzaGVzOiBydC5tZXNoZXMgPz8ge30sIHNvY2tldHM6IHJ0LnNvY2tldHMgPz8ge30gfSxcbiAgICB9O1xuICB9XG4gIHJldHVybiByb290O1xufVxuXG4vKipcbiAqIFRoZSBvbmUtYXJndW1lbnQgZW50cnkgcG9pbnQ6IHZpYmUzZCdzIGNvbnRyYWN0LCBhbmQgaW1nMnRocmVlanMncyBvd24uXG4gKlxuICogYGNyZWF0ZU9iamVjdE1vZGVsYCBhYm92ZSBrZWVwcyB0aGFpa2l0J3MgaGlzdG9yaWNhbCAoc3BlYywgb3B0aW9ucykgc2hhcGUgc29cbiAqIHRoZSBoYXJuZXNzLCB0aGUgbGV2ZWwgZWRpdG9yIGFuZCB0aGUgTm9kZS1zaWRlIGdhdGVzIGNhcnJ5IG9uIHVuY2hhbmdlZC5cbiAqIGBzcGVjYCBoYXMgbmV2ZXIgYmVlbiBwYXNzZWQgYnkgYW55IGNhbGxlciAtLSBpdCBpcyBpbnNwZWN0aW9uIGRhdGEgdGhhdCBpc1xuICogYWxyZWFkeSBiYWtlZCBpbnRvIHRoaXMgbW9kdWxlIC0tIHNvIHRoaXMgaXMgdGhlIGhvbmVzdCBzaWduYXR1cmUsIGFuZCBpdCBpc1xuICogd2hhdCBhIHZpYmUzZCBjb25zdW1lciBpbnN0YWxscyBhbmQgY2FsbHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIHJldHVybiBjcmVhdGVPYmplY3RNb2RlbCh1bmRlZmluZWQsIG9wdGlvbnMpO1xufVxuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBdUN2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQSxVQUNOO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsVUFBVTtBQUFBLElBQ1I7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixTQUFTO0FBQUEsSUFDVCxRQUFRO0FBQUEsSUFDUixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsSUFDWixhQUFhO0FBQUEsSUFDYixlQUFlO0FBQUEsSUFDZixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxXQUFXO0FBQUEsTUFDVDtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsS0FBSztBQUFBLElBQ1A7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1AsU0FBUztBQUFBLE1BQ1QsWUFBWTtBQUFBLE1BQ1osWUFBWTtBQUFBLFFBQ1YsS0FBSztBQUFBLFFBQ0wsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLFFBQ1IsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxNQUNQO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTixLQUFLO0FBQUEsTUFDUDtBQUFBLE1BQ0EsVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGFBQWE7QUFBQSxNQUNYO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBLE1BQ1QsT0FBTztBQUFBLElBQ1Q7QUFBQSxJQUNBLFdBQVc7QUFBQSxNQUNUO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULFNBQVM7QUFBQSxNQUNYO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsU0FBUztBQUFBLFFBQ1QsU0FBUztBQUFBLE1BQ1g7QUFBQSxNQUNBO0FBQUEsUUFDRSxRQUFRO0FBQUEsVUFDTjtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLFNBQVM7QUFBQSxRQUNULE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQTtBQUFBLFFBQ0UsUUFBUTtBQUFBLFVBQ047QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBLE1BQ0E7QUFBQSxRQUNFLFFBQVE7QUFBQSxVQUNOO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsUUFDVCxPQUFPO0FBQUEsTUFDVDtBQUFBLElBQ0Y7QUFBQSxJQUNBLFVBQVU7QUFBQSxNQUNSLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxNQUNULFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLEtBQUs7QUFBQSxRQUNMLFFBQVE7QUFBQSxRQUNSLE9BQU87QUFBQSxNQUNUO0FBQUEsTUFDQSxTQUFTO0FBQUEsTUFDVCxZQUFZO0FBQUEsTUFDWixZQUFZO0FBQUEsTUFDWixXQUFXO0FBQUEsTUFDWCxhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsUUFBUTtBQUFBLE1BQ047QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLGdCQUFnQjtBQUFBLE1BQ2Q7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFD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QUFDLE9BQU8sTUFBTSxDQUFDLENBQUM7QUFBQTtBQUFBLElBQzFELENBQUMsT0FBTyxLQUFNLENBQUMsQ0FBQztBQUFBLElBQUcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxJQUFJLElBQUs7QUFBQTtBQUFBLElBQzNDLENBQUMsT0FBTyxNQUFNLENBQUMsSUFBSSxJQUFLO0FBQUEsSUFBRyxDQUFDLE9BQU8sTUFBTSxDQUFDLEtBQUssSUFBSTtBQUFBO0FBQUEsSUFDbkQsQ0FBQyxPQUFPLEtBQU0sQ0FBQyxLQUFLLElBQUk7QUFBQSxJQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBSTtBQUFBLElBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJO0FBQUE7QUFBQSxJQUNoRSxDQUFDLFFBQVEsTUFBTSxDQUFDLEVBQUU7QUFBQSxJQUFHLENBQUMsUUFBUSxNQUFNLENBQUMsS0FBSyxJQUFJO0FBQUEsSUFBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEdBQUk7QUFBQTtBQUFBLElBQ25FLENBQUMsT0FBTyxLQUFLLEdBQUk7QUFBQTtBQUFBLElBQ2pCLENBQUMsUUFBUSxNQUFNLEtBQUssSUFBSTtBQUFBLElBQUcsQ0FBQyxRQUFRLE1BQU0sRUFBRTtBQUFBLElBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSTtBQUFBO0FBQUEsSUFDL0QsQ0FBQyxNQUFNLEtBQUssSUFBSTtBQUFBLElBQUcsQ0FBQyxPQUFPLEtBQU0sS0FBSyxHQUFJO0FBQUEsSUFBRyxDQUFDLEdBQUcsS0FBSyxHQUFJO0FBQUE7QUFBQSxFQUM1RDtBQUNBLFFBQU0sTUFBTSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQztBQUN2RSxRQUFNLElBQUksSUFBVSxvQkFBYyxJQUFJLElBQUksQ0FBQyxNQUFNLElBQVUsY0FBUSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRztB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
