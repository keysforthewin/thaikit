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

// ../repo/scratch/tuk-tuk/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createTukTukModel: () => createTukTukModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "tuk-tuk",
  "name": "Tuk-tuk",
  "exportName": "TukTuk",
  "envelope": "Envelope 1.4 x 1.95 x 2.9 m, origin base-center, +Y up, +Z forward.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=3 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "paint",
      "color": 16777215,
      "roughness": 0.3,
      "metalness": 0.05,
      "vertexColors": true
    },
    {
      "id": "trim",
      "color": 16777215,
      "roughness": 0.55,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "paint",
      "kind": "dust",
      "base": [
        1,
        1,
        1
      ],
      "dust": [
        0.78,
        0.76,
        0.72
      ],
      "seed": 71,
      "coverage": 0.22,
      "size": 256
    }
  ],
  "pivots": [
    {
      "name": "wheel-front",
      "position": [
        0,
        0.26,
        1.17
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 0,
      "note": "front hub, rolls about the axle"
    },
    {
      "name": "wheel-rear-l",
      "position": [
        0.56,
        0.26,
        -0.6700000000000002
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 1,
      "note": "rear left hub"
    },
    {
      "name": "wheel-rear-r",
      "position": [
        -0.56,
        0.26,
        -0.6700000000000002
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 2,
      "note": "rear right hub"
    }
  ],
  "geometry": {
    "mudScale": 1.6,
    "collider": {
      "shape": "convex",
      "localCenter": [
        0,
        0.975,
        0
      ],
      "halfExtents": [
        0.7,
        0.975,
        1.45
      ],
      "notes": "Declared on the asset as convex: one hull over the whole machine."
    },
    "bike": {
      "x": 0,
      "r": 0.26,
      "rim": 0.105,
      "halfW": 0.06,
      "zF": 1.17,
      "zR": -0.6700000000000002,
      "seg": 18,
      "dish": 0.28,
      "rimBand": 2,
      "tyreHex": 3813413,
      "rimHex": 11907756,
      "paintHex": 2975042,
      "chromeHex": 12172479,
      "darkHex": 4867906,
      "bodyName": "Body: nose, floor pan, cabin and canopy",
      "positions": [
        [
          0,
          0.26,
          1.17
        ],
        [
          0.56,
          0.26,
          -0.6700000000000002
        ],
        [
          -0.56,
          0.26,
          -0.6700000000000002
        ]
      ],
      "paintExtrudes": [
        {
          "poly": [
            [
              1.02,
              0.34
            ],
            [
              1.06,
              0.4
            ],
            [
              1,
              0.78
            ],
            [
              0.92,
              1.02
            ],
            [
              0.8,
              1.02
            ],
            [
              0.86,
              0.78
            ],
            [
              0.9,
              0.4
            ]
          ],
          "width": 0.52,
          "shape": {
            "tumble": {
              "belt": 0.4,
              "roof": 1.02,
              "k": 0.3
            }
          }
        },
        {
          "poly": [
            [
              1.42,
              0.3
            ],
            [
              1.4,
              0.44
            ],
            [
              1.3,
              0.54
            ],
            [
              1.14,
              0.56
            ],
            [
              1,
              0.5
            ],
            [
              0.98,
              0.42
            ],
            [
              1.06,
              0.48
            ],
            [
              1.16,
              0.5
            ],
            [
              1.28,
              0.46
            ],
            [
              1.36,
              0.36
            ],
            [
              1.38,
              0.3
            ]
          ],
          "width": 0.16
        },
        {
          "poly": [
            [
              0.74,
              0.15
            ],
            [
              0.74,
              0.4
            ],
            [
              0.06,
              0.46
            ],
            [
              0.02,
              0.62
            ],
            [
              -0.98,
              0.62
            ],
            [
              -1.4,
              0.6
            ],
            [
              -1.45,
              0.5
            ],
            [
              -1.45,
              0.2
            ],
            [
              -1.3,
              0.15
            ]
          ],
          "width": 1.3,
          "shape": {
            "plan": [
              [
                -1.45,
                0.92
              ],
              [
                -1.3,
                1
              ],
              [
                0.02,
                1
              ],
              [
                0.74,
                0.84
              ]
            ]
          }
        },
        {
          "poly": [
            [
              0.02,
              0.6
            ],
            [
              0.02,
              0.7
            ],
            [
              -0.6,
              0.76
            ],
            [
              -1.06,
              0.86
            ],
            [
              -1.34,
              0.94
            ],
            [
              -1.45,
              0.94
            ],
            [
              -1.45,
              0.6
            ]
          ],
          "width": 0.085,
          "x": 0.6075
        },
        {
          "poly": [
            [
              0.02,
              0.6
            ],
            [
              0.02,
              0.7
            ],
            [
              -0.6,
              0.76
            ],
            [
              -1.06,
              0.86
            ],
            [
              -1.34,
              0.94
            ],
            [
              -1.45,
              0.94
            ],
            [
              -1.45,
              0.6
            ]
          ],
          "width": 0.085,
          "x": -0.6075
        },
        {
          "poly": [
            [
              -1.28,
              0.6
            ],
            [
              -1.28,
              0.96
            ],
            [
              -1.45,
              0.96
            ],
            [
              -1.45,
              0.6
            ]
          ],
          "width": 1.3
        },
        {
          "poly": [
            [
              1,
              1.775
            ],
            [
              1.045,
              1.845
            ],
            [
              0.7,
              1.912
            ],
            [
              -0.2,
              1.95
            ],
            [
              -1.1,
              1.925
            ],
            [
              -1.33,
              1.865
            ],
            [
              -1.35,
              1.79
            ],
            [
              -1.1,
              1.836
            ],
            [
              -0.2,
              1.858
            ],
            [
              0.7,
              1.826
            ]
          ],
          "width": 1.32,
          "shape": {
            "plan": [
              [
                -1.35,
                0.9
              ],
              [
                -1.12,
                1
              ],
              [
                0.6,
                1
              ],
              [
                1.045,
                0.88
              ]
            ],
            "shoulder": {
              "r": 0.085
            },
            "steps": 6,
            "edgeBias": 0.7,
            "baseWidth": 1.32,
            "smooth": 0.6
          }
        }
      ],
      "paintBoxes": [
        [
          14789904,
          0,
          0.6,
          1.045,
          0.5,
          0.28,
          0.02
        ],
        [
          14789904,
          0.654,
          0.52,
          -0.72,
          6e-3,
          0.1,
          0.9
        ],
        [
          14789904,
          -0.654,
          0.52,
          -0.72,
          6e-3,
          0.1,
          0.9
        ],
        [
          2975042,
          0,
          0.17,
          -0.58,
          1.26,
          0.06,
          1.7
        ],
        [
          2975042,
          0,
          0.44,
          0.42,
          0.76,
          0.05,
          0.46
        ],
        [
          2975042,
          0,
          0.62,
          -1.14,
          1.3,
          0.02,
          0.36
        ]
      ],
      "paintTubes": [
        {
          "pts": [
            [
              0.615,
              0.9,
              -1.3
            ],
            [
              0.615,
              1.22,
              -1.24
            ],
            [
              0.615,
              1.6,
              -1.2
            ],
            [
              0.615,
              1.8,
              -1.18
            ]
          ],
          "r": 0.045,
          "seg": 8,
          "hex": 2975042
        },
        {
          "pts": [
            [
              -0.615,
              0.9,
              -1.3
            ],
            [
              -0.615,
              1.22,
              -1.24
            ],
            [
              -0.615,
              1.6,
              -1.2
            ],
            [
              -0.615,
              1.8,
              -1.18
            ]
          ],
          "r": 0.045,
          "seg": 8,
          "hex": 2975042
        }
      ],
      "tubes": [
        {
          "pts": [
            [
              0.03,
              0.34,
              1.24
            ],
            [
              0.03,
              0.56,
              1.1
            ]
          ],
          "r": 0.016,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.03,
              0.34,
              1.24
            ],
            [
              -0.03,
              0.56,
              1.1
            ]
          ],
          "r": 0.016,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0,
              1.02,
              0.86
            ],
            [
              0,
              1.16,
              0.8
            ]
          ],
          "r": 0.022,
          "hex": 4867906
        },
        {
          "pts": [
            [
              0.34,
              1.14,
              0.7
            ],
            [
              0.12,
              1.16,
              0.8
            ],
            [
              -0.12,
              1.16,
              0.8
            ],
            [
              -0.34,
              1.14,
              0.7
            ]
          ],
          "r": 0.014,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.6,
              0.64,
              0.02
            ],
            [
              0.6,
              1.2,
              0.02
            ],
            [
              0.6,
              1.82,
              0.02
            ]
          ],
          "r": 0.014,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.6,
              0.64,
              0.02
            ],
            [
              -0.6,
              1.2,
              0.02
            ],
            [
              -0.6,
              1.82,
              0.02
            ]
          ],
          "r": 0.014,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.64,
              0.64,
              0.02
            ],
            [
              0.64,
              0.64,
              -1.1
            ]
          ],
          "r": 0.012,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.64,
              0.64,
              0.02
            ],
            [
              -0.64,
              0.64,
              -1.1
            ]
          ],
          "r": 0.012,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.66,
              1.79,
              0.86
            ],
            [
              0.66,
              1.79,
              -1.32
            ],
            [
              -0.66,
              1.79,
              -1.32
            ],
            [
              -0.66,
              1.79,
              0.86
            ],
            [
              0.66,
              1.79,
              0.86
            ]
          ],
          "r": 0.012,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.62,
              1,
              0.02
            ],
            [
              0.3,
              1,
              0.02
            ]
          ],
          "r": 0.012,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.62,
              1,
              0.02
            ],
            [
              -0.3,
              1,
              0.02
            ]
          ],
          "r": 0.012,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.4,
              0.66,
              -1.47
            ],
            [
              0.4,
              1,
              -1.47
            ],
            [
              -0.4,
              1,
              -1.47
            ],
            [
              -0.4,
              0.66,
              -1.47
            ]
          ],
          "r": 0.01,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.4,
              1,
              -1.47
            ],
            [
              0.4,
              1,
              -1.22
            ]
          ],
          "r": 0.01,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.4,
              1,
              -1.47
            ],
            [
              -0.4,
              1,
              -1.22
            ]
          ],
          "r": 0.01,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.2,
              0.66,
              -1.47
            ],
            [
              0.2,
              1,
              -1.47
            ]
          ],
          "r": 7e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              -0.2,
              0.66,
              -1.47
            ],
            [
              -0.2,
              1,
              -1.47
            ]
          ],
          "r": 7e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0,
              0.66,
              -1.47
            ],
            [
              0,
              1,
              -1.47
            ]
          ],
          "r": 7e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.4,
              0.84,
              -1.47
            ],
            [
              -0.4,
              0.84,
              -1.47
            ]
          ],
          "r": 7e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.22,
              0.3,
              -1.2
            ],
            [
              0.22,
              0.24,
              -1.5
            ]
          ],
          "r": 0.02,
          "hex": 9078144
        }
      ],
      "trim": [
        [
          4277302,
          0,
          0.685,
          0.36,
          0.46,
          0.13,
          0.42
        ],
        [
          3093034,
          0,
          0.615,
          0.36,
          0.44,
          0.06,
          0.4
        ],
        [
          4277302,
          0,
          0.72,
          -0.8,
          1.1,
          0.2,
          0.56
        ],
        [
          4277302,
          0,
          1,
          -1.02,
          1.1,
          0.44,
          0.1
        ],
        [
          5261631,
          0,
          0.205,
          -0.55,
          1.24,
          0.01,
          1.5
        ],
        [
          5261631,
          0,
          0.205,
          0.42,
          0.72,
          0.01,
          0.44
        ],
        [
          4143667,
          0,
          0.62,
          0.05,
          1.26,
          0.025,
          0.16
        ],
        [
          4143667,
          0,
          0.472,
          0.42,
          0.72,
          0.02,
          0.42
        ],
        [
          2763304,
          0.3,
          1.14,
          0.7,
          0.1,
          0.03,
          0.03
        ],
        [
          2763304,
          -0.3,
          1.14,
          0.7,
          0.1,
          0.03,
          0.03
        ],
        [
          2763304,
          0,
          0.26,
          -0.8,
          1,
          0.16,
          1
        ],
        [
          4867906,
          0,
          0.6,
          -1.45,
          0.6,
          0.1,
          0.04
        ],
        [
          11546672,
          0.44,
          0.52,
          -1.46,
          0.08,
          0.08,
          0.02
        ],
        [
          11546672,
          -0.44,
          0.52,
          -1.46,
          0.08,
          0.08,
          0.02
        ]
      ],
      "lathes": [
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.095,
              0
            ],
            [
              0.095,
              0.03
            ],
            [
              0.078,
              0.052
            ],
            [
              0,
              0.052
            ]
          ],
          "seg": 14,
          "rx": 1.5707963267948966,
          "at": [
            0,
            0.63,
            1.03
          ],
          "hex": 13028045
        },
        {
          "pts": [
            [
              0,
              0.052
            ],
            [
              0.076,
              0.052
            ],
            [
              0.07,
              0.072
            ],
            [
              0,
              0.078
            ]
          ],
          "seg": 14,
          "rx": 1.5707963267948966,
          "at": [
            0,
            0.63,
            1.03
          ],
          "hex": 15265007
        }
      ],
      "cyls": []
    },
    "trim": [
      [
        4867906,
        0.58,
        0.64,
        -0.54,
        0.06,
        0.02,
        1.1
      ],
      [
        4867906,
        -0.58,
        0.64,
        -0.54,
        0.06,
        0.02,
        1.1
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
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
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
function spokes(rHub, rRim, halfW, n, hex, t = 6e-3, prism = false) {
  const segs = [];
  for (let i = 0; i < n; i++) {
    const a = i * Math.PI * 2 / n;
    const side = (i % 2 === 0 ? 1 : -1) * halfW * 0.35;
    const len = rRim - rHub;
    const g = prism ? new THREE.CylinderGeometry(t * 0.62, t * 0.62, len, 3, 1, true) : new THREE.BoxGeometry(t, len, t);
    g.translate(0, rHub + len / 2, 0);
    g.rotateX(Math.atan2(side, len) * 0.6);
    g.rotateX(0);
    g.translate(0, 0, side * 0.5);
    g.rotateX(a);
    segs.push(g);
  }
  return tintGeo(mergeGeos(segs), hex);
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
function latheUV(g, pointCount, seg, pitch, vs) {
  const p = g.getAttribute("position");
  let rMax = 0;
  for (let i = 0; i < p.count; i++) rMax = Math.max(rMax, Math.hypot(p.getX(i), p.getZ(i)));
  const rep = Math.max(1, Math.round(2 * Math.PI * rMax / pitch));
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const s = Math.floor(i / pointCount), j = i % pointCount;
    uv[i * 2] = s / seg * rep;
    uv[i * 2 + 1] = vs[Math.min(j, vs.length - 1)];
  }
  g.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
}
function pinUV(g, u, v) {
  const uv = g.getAttribute("uv");
  for (let i = 0; i < uv.count; i++) uv.setXY(i, u, v);
  return g;
}
function openWheelGeo(rTyre, rRim, halfW, seg, o) {
  const hw = halfW, rr = rRim * 1.02;
  const prof = [
    [rr, -hw * 0.72],
    [rTyre * 0.9, -hw * 0.98],
    [rTyre * 0.985, -hw * 0.66],
    [rTyre, -hw * 0.3],
    [rTyre, hw * 0.3],
    [rTyre * 0.985, hw * 0.66],
    [rTyre * 0.9, hw * 0.98],
    [rr, hw * 0.72],
    [rr, -hw * 0.72]
  ];
  const vs = [0.5, 0.56, 0.64, 0.68, 0.78, 0.82, 0.9, 0.96, 0.96];
  const tyre = new THREE.LatheGeometry(prof.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  latheUV(tyre, prof.length, seg, o.pitch ?? 0.05, vs);
  tyre.computeVertexNormals();
  const rimProf = [[rRim * 0.9, -hw * 0.5], [rRim, -hw * 0.62], [rRim, hw * 0.62], [rRim * 0.9, hw * 0.5], [rRim * 0.9, -hw * 0.5]];
  const rim = new THREE.LatheGeometry(rimProf.map((p) => new THREE.Vector2(p[0], p[1])), seg);
  rim.computeVertexNormals();
  const hubR = o.hubR ?? rRim * 0.32, hubW = o.hubW ?? hw * 2.6;
  const hub = new THREE.CylinderGeometry(hubR, hubR, hubW, o.hubSeg ?? 12);
  const hubCap = new THREE.CylinderGeometry(hubR * 0.55, hubR * 0.55, hubW * 1.25, o.hubSeg ?? 12);
  const parts = [
    tintGeo(tyre, o.tyreHex),
    pinUV(tintGeo(rim, o.rimHex), 0.5, 0.985),
    pinUV(tintGeo(hub, o.hubHex ?? o.rimHex), 0.5, 0.985),
    pinUV(tintGeo(hubCap, o.capHex ?? o.rimHex), 0.5, 0.985)
  ];
  const g = mergeGeos(parts);
  g.rotateZ(Math.PI / 2);
  const sp = pinUV(spokes(hubR * 0.9, rRim * 0.95, hw, o.spokes ?? 20, o.spokeHex ?? 11579049, o.spokeT ?? 6e-3, true), 0.5, 0.985);
  return mergeGeos([g, sp]);
}
function tyreTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const base = o.base ?? 200, band = o.band ?? [0.35, 0.65], groove = o.groove ?? 0.45;
    const gv = Math.round(base * groove), rv = Math.round(base * 0.7), mv = Math.round(base * 0.9);
    const dust = o.dust ?? [232, 214, 190];
    const white = Math.round(s * 0.04);
    ctx.fillStyle = `rgb(${base},${base},${base})`;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < s * s / 6; i++) {
      const v = base + Math.round((rnd() - 0.5) * 22);
      ctx.fillStyle = `rgb(${v},${v},${v})`;
      ctx.fillRect(rnd() * s, rnd() * s, 2, 2);
    }
    const strip = (ya, yb, treaded) => {
      const h = yb - ya, b0 = ya + h * (1 - band[1]), b1 = ya + h * (1 - band[0]);
      const ng = o.grooves ?? 3, gw = h * 0.024;
      ctx.fillStyle = `rgb(${gv},${gv},${gv})`;
      for (let i = 0; i < ng; i++) {
        const y = b0 + (b1 - b0) * (i + 1) / (ng + 1);
        ctx.fillRect(0, y - gw / 2, s, gw);
      }
      const ns = o.sipes ?? 2, w = s * (o.sipeWidth ?? 0.05);
      for (let k = 0; k <= ng; k++) {
        const y0 = k === 0 ? b0 : b0 + (b1 - b0) * k / (ng + 1) + gw / 2, y1 = k === ng ? b1 : b0 + (b1 - b0) * (k + 1) / (ng + 1) - gw / 2;
        const outer = k === 0 || k === ng;
        if (!treaded && !outer) continue;
        const ys0 = treaded ? y0 : k === 0 ? y0 : y1 - (y1 - y0) * 0.45, ys1 = treaded ? y1 : k === 0 ? y0 + (y1 - y0) * 0.45 : y1;
        for (let i = 0; i < ns; i++) {
          const x = ((i + 0.5) / ns + k % 2 * 0.5 / ns) * s + (rnd() - 0.5) * s * 0.06, sl = (rnd() - 0.5) * s * 0.08;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.moveTo(x + dx, ys0);
            ctx.lineTo(x + dx + w, ys0);
            ctx.lineTo(x + dx + w + sl, ys1);
            ctx.lineTo(x + dx + sl, ys1);
            ctx.closePath();
            ctx.fill();
          }
        }
      }
      const sh = ctx.createLinearGradient(0, b0 - h * 0.03, 0, b0 + h * 0.02);
      sh.addColorStop(0, `rgba(${gv},${gv},${gv},0)`);
      sh.addColorStop(1, `rgba(${gv},${gv},${gv},0.45)`);
      ctx.fillStyle = sh;
      ctx.fillRect(0, b0 - h * 0.03, s, h * 0.05);
      ctx.fillStyle = `rgb(${rv},${rv},${rv})`;
      ctx.fillRect(0, ya + h * 0.045, s, h * 0.012);
      ctx.fillRect(0, ya + h * 0.94, s, h * 0.012);
      ctx.fillStyle = `rgb(${mv},${mv},${mv})`;
      ctx.fillRect(0, ya + h * 0.11, s, 2);
      ctx.fillRect(0, ya + h * 0.88, s, 2);
      const dg = ctx.createLinearGradient(0, yb, 0, ya + h * 0.6);
      dg.addColorStop(0, `rgba(${dust[0]},${dust[1]},${dust[2]},${o.dustAlpha ?? 0.35})`);
      dg.addColorStop(1, `rgba(${dust[0]},${dust[1]},${dust[2]},0)`);
      ctx.fillStyle = dg;
      ctx.fillRect(0, ya + h * 0.6, s, h * 0.4);
      for (let i = 0; i < (o.scuffs ?? 14); i++) {
        const x = rnd() * s, y = rnd() < 0.5 ? b0 + (rnd() - 0.3) * h * 0.08 : b1 + (rnd() - 0.7) * h * 0.08, r = s * (0.02 + rnd() * 0.05), v = 225 + Math.round(rnd() * 25);
        const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
        g2.addColorStop(0, `rgba(${v},${v},${v},0.5)`);
        g2.addColorStop(1, `rgba(${v},${v},${v},0)`);
        ctx.fillStyle = g2;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(x + dx, y, r * 2.2, r * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < 60; i++) {
        const x = rnd() * s, y = b0 + rnd() * (b1 - b0), v = 6 + Math.round(rnd() * 14);
        ctx.fillStyle = `rgb(${v},${Math.round(v * 0.9)},${Math.round(v * 0.75)})`;
        ctx.fillRect(x, y, 2 + rnd() * 6, 2 + rnd() * 3);
      }
      ctx.globalCompositeOperation = "source-over";
    };
    strip(white, s / 2, true);
    strip(s / 2, s, false);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, white);
  });
}
function sheet(s) {
  const nx = s.nx, nz = s.nz, Hh = s.heights, t = s.t ?? 0.012;
  const X = (i) => s.x0 + (s.x1 - s.x0) * i / nx;
  const Z = (j) => s.z0 + (s.z1 - s.z0) * j / nz;
  const grid = (yOff, flip) => {
    const pos = [], uv = [], idx = [];
    for (let j = 0; j <= nz; j++) for (let i = 0; i <= nx; i++) {
      pos.push(X(i), Hh[j][i] + yOff, Z(j));
      uv.push(i / nx, j / nz);
    }
    for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
      const a = j * (nx + 1) + i, b = a + 1, c = a + nx + 1, d = c + 1;
      if (flip) idx.push(a, b, c, b, d, c);
      else idx.push(a, c, b, b, c, d);
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.setIndex(idx);
    g.computeVertexNormals();
    return g;
  };
  const parts = [grid(0, false), grid(-t, true)];
  const strip = (pts, out) => {
    const pos = [], uv = [];
    for (const [p0, p1] of pts) {
      const q0 = p0, q1 = p1, q2 = [p1[0], p1[1] - t, p1[2]], q3 = [p0[0], p0[1] - t, p0[2]];
      const e12 = [q1[0] - q0[0], q1[1] - q0[1], q1[2] - q0[2]], e22 = [q2[0] - q0[0], q2[1] - q0[1], q2[2] - q0[2]];
      const n = [e12[1] * e22[2] - e12[2] * e22[1], e12[2] * e22[0] - e12[0] * e22[2], e12[0] * e22[1] - e12[1] * e22[0]];
      const tri = n[0] * out[0] + n[1] * out[1] + n[2] * out[2] >= 0 ? [q0, q1, q2, q0, q2, q3] : [q0, q2, q1, q0, q3, q2];
      for (const q of tri) {
        pos.push(q[0], q[1], q[2]);
        uv.push(0, 0);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
    g.setAttribute("uv", new THREE.Float32BufferAttribute(uv, 2));
    g.computeVertexNormals();
    return g;
  };
  const top = (i, j) => [X(i), Hh[j][i], Z(j)];
  const e0 = [], e1 = [], e2 = [], e3 = [];
  for (let i = 0; i < nx; i++) {
    e0.push([top(i, 0), top(i + 1, 0)]);
    e1.push([top(i, nz), top(i + 1, nz)]);
  }
  for (let j = 0; j < nz; j++) {
    e2.push([top(0, j), top(0, j + 1)]);
    e3.push([top(nx, j), top(nx, j + 1)]);
  }
  parts.push(strip(e0, [0, 0, -1]), strip(e1, [0, 0, 1]), strip(e2, [-1, 0, 0]), strip(e3, [1, 0, 0]));
  return mergeGeos(parts);
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
function createTukTukModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Tuk-tuk";
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
  const B = G.bike;
  const ox = B.x ?? 0;
  const oz = B.z ?? 0;
  const rW = B.r, rimR = B.rim, hw = B.halfW;
  const zF = B.zF, zR = B.zR;
  const P = B.paintHex, CH = B.chromeHex ?? 12172479, DK = B.darkHex ?? 4867906;
  const paintGeos = [];
  for (const ex of B.paintExtrudes ?? []) {
    const g = sideExtrude(ex.poly, ex.width, ex.shape ?? {});
    if (ex.x) g.translate(ex.x, 0, 0);
    g.translate(ox, 0, oz);
    paintGeos.push(tintGeo(g, ex.hex ?? P));
  }
  for (const b of B.paintBoxes ?? []) {
    const g = rbox(b.slice(1));
    g.translate(ox, 0, oz);
    paintGeos.push(tintGeo(g, b[0]));
  }
  for (const t of B.paintTubes ?? []) {
    const g = tube(t.pts.map((p) => [p[0] + ox, p[1], p[2] + oz]), t.r, t.seg ?? 8, void 0, t.open ?? false);
    paintGeos.push(tintGeo(g, t.hex ?? P));
  }
  const bodyGeo = heightUV(mergeGeos(paintGeos), G.mudScale ?? 1.2);
  add("body", B.bodyName ?? "Bodywork", bodyGeo, "paint");
  if (G.collider) colliders["body"] = G.collider;
  const trimGeos = [];
  const shift = (pts) => pts.map((p) => [p[0] + ox, p[1], p[2] + oz]);
  for (const t of B.tubes ?? []) trimGeos.push(tube(shift(t.pts), t.r, t.seg ?? 8, t.hex ?? CH, t.open ?? false));
  const tb = [];
  for (const b of B.trim ?? []) tb.push([b[0], b[1] + ox, b[2], b[3] + oz, ...b.slice(4)]);
  for (const b of mirrorX(B.trimMirrored ?? [])) tb.push([b[0], b[1] + ox, b[2], b[3] + oz, ...b.slice(4)]);
  if (tb.length) trimGeos.push(tintedBoxes(tb));
  for (const c of B.cyls ?? []) {
    const g = new THREE.CylinderGeometry(c.rt, c.rb, c.h, c.seg ?? 12);
    if (c.rx) g.rotateX(c.rx);
    if (c.rz) g.rotateZ(c.rz);
    g.translate(c.at[0] + ox, c.at[1], c.at[2] + oz);
    trimGeos.push(tintGeo(g, c.hex ?? DK));
  }
  for (const w of G.looseWheels ?? []) {
    const g = mergeGeos([
      wheelGeo(w.r, w.rim, w.halfW, w.seg ?? 18, w.tyreHex, w.rimHex, w.dish ?? 0.5, w.rimBand ?? 4),
      ...w.spokes ? [spokes(w.rim * 0.28, w.rim * 0.98, w.halfW, w.spokes, w.spokeHex ?? CH)] : []
    ]);
    g.translate(w.at[0], w.at[1], w.at[2]);
    trimGeos.push(g);
  }
  for (const l of [...(B.lathes ?? []).map((l2) => ({ ...l2, at: [l2.at[0] + ox, l2.at[1], l2.at[2] + oz] })), ...G.lathes ?? []]) {
    const g = lathe(l.pts, l.seg ?? 12);
    if (l.rx) g.rotateX(l.rx);
    if (l.ry) g.rotateY(l.ry);
    if (l.rz) g.rotateZ(l.rz);
    g.translate(l.at[0], l.at[1], l.at[2]);
    trimGeos.push(tintGeo(g, l.hex ?? CH));
  }
  for (const s of G.sheets ?? []) trimGeos.push(tintGeo(sheet(s), s.hex));
  for (const t of G.tubes ?? []) trimGeos.push(tube(t.pts, t.r, t.seg ?? 8, t.hex, t.open ?? false));
  for (const b of G.trim ?? []) trimGeos.push(tintGeo(rbox(b.slice(1)), b[0]));
  for (const b of mirrorX(G.trimMirrored ?? [])) trimGeos.push(tintGeo(rbox(b.slice(1)), b[0]));
  add("trim", B.trimName ?? "Frame, forks, engine, seat and fittings", mergeGeos(trimGeos), "trim");
  const wheelG = B.open ? openWheelGeo(rW, rimR, hw, B.seg ?? 20, { ...B.open, tyreHex: B.tyreHex, rimHex: B.rimHex, spokes: B.spokes, spokeHex: B.spokeHex ?? CH }) : mergeGeos([
    wheelGeo(rW, rimR, hw, B.seg ?? 20, B.tyreHex, B.rimHex, B.dish ?? 0.5, B.rimBand ?? 4),
    ...B.spokes ? [spokes(rimR * 0.28, rimR * 0.98, hw, B.spokes, B.spokeHex ?? CH)] : []
  ]);
  const wheelMats = [];
  for (const p of B.positions) {
    wheelMats.push(new THREE.Matrix4().compose(
      new THREE.Vector3(p[0], p[1], p[2]),
      new THREE.Quaternion(),
      new THREE.Vector3(p[3] ?? 1, p[3] ?? 1, p[3] ?? 1)
    ));
  }
  addInst("wheels", "Wheels", wheelG, B.wheelMaterial ?? "trim", wheelMats);
  for (const ex of G.extras ?? []) {
    const gs = [];
    for (const b of ex.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(ex.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of ex.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const e of ex.extrudes ?? []) {
      const g2 = sideExtrude(e.poly, e.width, e.shape ?? {});
      if (e.x) g2.translate(e.x, 0, 0);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const c of ex.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(c.rt, c.rb, c.h, c.seg ?? 12);
      if (c.rx) g2.rotateX(c.rx);
      if (c.rz) g2.rotateZ(c.rz);
      g2.translate(c.at[0], c.at[1], c.at[2]);
      gs.push(tintGeo(g2, c.hex));
    }
    let g = mergeGeos(gs);
    if (ex.uv === "world") g = worldUV(g, ex.uvScale ?? 1);
    if (ex.uv === "height") g = heightUV(g, ex.uvScale ?? 1);
    add(ex.id, ex.name, g, ex.material);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "tyre") tex = tyreTile(t.size ?? 256, t.seed ?? 29, t);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createTukTukModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogVHVrLXR1ayAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAxLjQgeCAxLjk1IHggMi45IG0sIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZvcndhcmQuXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9MyBtYXRlcmlhbHMsIDw9NiB1bmlxdWUgZ2VvbWV0cmllcy5cbiAqXG4gKiBUaGlzIGlzIG9uZSBvZiB0aGFpa2l0J3MgVkVISUNMRVMuIFRoZSBzaGFyZWQgdm9jYWJ1bGFyeSBpcyB0aGUgU0lERS1QUk9GSUxFIEVYVFJVU0lPTiAtLSBhXG4gKiBjbG9zZWQgcG9seWdvbiBpbiB0aGUgKHosIHkpIHBsYW5lIHN3ZXB0IGFjcm9zcyB0aGUgd2lkdGggYW5kIHRoZW4gc2hhcGVkIHBlciB2ZXJ0ZXggZm9yXG4gKiB0dW1ibGVob21lIGFuZCBwbGFuIHJvdW5kaW5nIC0tIHBsdXMgYSBsYXRoZWQgV0hFRUwgcmV2b2x2ZWQgYWJvdXQgaXRzIGF4bGUgYW5kIGEgcG9seWxpbmUgVFVCRVxuICogZm9yIGhhbmRsZWJhcnMsIHJhaWxzIGFuZCBmcmFtZXMuIEV2ZXJ5IGNvbG91ciBkaWZmZXJlbmNlIGluc2lkZSBvbmUgbWF0ZXJpYWwgaXMgY2FycmllZCBhcyBhXG4gKiB2ZXJ0ZXggY29sb3VyIG9uIGEgV0hJVEUgbWF0ZXJpYWwsIHNvIGEgdHdvLXRvbmUgYm9keSwgYSBibGFjayB0eXJlIG9uIGEgc2lsdmVyIHJpbSBhbmQgYW4gYW1iZXJcbiAqIGluZGljYXRvciBhbGwgcmlkZSBvbmUgc2hhZGVyIGFuZCBvbmUgc3VibWlzc2lvbi5cbiAqL1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge1xuICB3aXJlZnJhbWU/OiBib29sZWFuO1xuICBjYXN0U2hhZG93PzogYm9vbGVhbjtcbiAgcmVjZWl2ZVNoYWRvdz86IGJvb2xlYW47XG4gIHRleHR1cmVTaXplPzogbnVtYmVyO1xuICB0ZXh0dXJlQW5pc290cm9weT86IG51bWJlcjtcbiAgcXVhbGl0eVByaW9yaXR5PzogJ3JlZmVyZW5jZS1maWRlbGl0eScgfCAnYmFsYW5jZWQnO1xufTtcblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsUnVudGltZSA9IHtcbiAgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPjtcbiAgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+O1xuICBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT47XG59O1xuXG5jb25zdCBDT05GSUcgPSB7XG4gICAgXCJpZFwiOiBcInR1ay10dWtcIixcbiAgICBcIm5hbWVcIjogXCJUdWstdHVrXCIsXG4gICAgXCJleHBvcnROYW1lXCI6IFwiVHVrVHVrXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDEuNCB4IDEuOTUgeCAyLjkgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogZm9yd2FyZC5cXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9MyBtYXRlcmlhbHMsIDw9NiB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwYWludFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjMsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAuMDUsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJ0cmltXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuNTUsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJraW5kXCI6IFwiZHVzdFwiLFxuICAgICAgICBcImJhc2VcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFwiZHVzdFwiOiBbXG4gICAgICAgICAgMC43OCxcbiAgICAgICAgICAwLjc2LFxuICAgICAgICAgIDAuNzJcbiAgICAgICAgXSxcbiAgICAgICAgXCJzZWVkXCI6IDcxLFxuICAgICAgICBcImNvdmVyYWdlXCI6IDAuMjIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTZcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGl2b3RzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtZnJvbnRcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjI2LFxuICAgICAgICAgIDEuMTdcbiAgICAgICAgXSxcbiAgICAgICAgXCJheGlzXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIndoZWVsc1wiLFxuICAgICAgICBcImluc3RhbmNlXCI6IDAsXG4gICAgICAgIFwibm90ZVwiOiBcImZyb250IGh1Yiwgcm9sbHMgYWJvdXQgdGhlIGF4bGVcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtcmVhci1sXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgMC4yNixcbiAgICAgICAgICAtMC42NzAwMDAwMDAwMDAwMDAyXG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAxLFxuICAgICAgICBcIm5vdGVcIjogXCJyZWFyIGxlZnQgaHViXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLXJlYXItclwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAtMC41NixcbiAgICAgICAgICAwLjI2LFxuICAgICAgICAgIC0wLjY3MDAwMDAwMDAwMDAwMDJcbiAgICAgICAgXSxcbiAgICAgICAgXCJheGlzXCI6IFtcbiAgICAgICAgICAxLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMFxuICAgICAgICBdLFxuICAgICAgICBcImNvbXBvbmVudFwiOiBcIndoZWVsc1wiLFxuICAgICAgICBcImluc3RhbmNlXCI6IDIsXG4gICAgICAgIFwibm90ZVwiOiBcInJlYXIgcmlnaHQgaHViXCJcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJtdWRTY2FsZVwiOiAxLjYsXG4gICAgICBcImNvbGxpZGVyXCI6IHtcbiAgICAgICAgXCJzaGFwZVwiOiBcImNvbnZleFwiLFxuICAgICAgICBcImxvY2FsQ2VudGVyXCI6IFtcbiAgICAgICAgICAwLFxuICAgICAgICAgIDAuOTc1LFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgMC43LFxuICAgICAgICAgIDAuOTc1LFxuICAgICAgICAgIDEuNDVcbiAgICAgICAgXSxcbiAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjb252ZXg6IG9uZSBodWxsIG92ZXIgdGhlIHdob2xlIG1hY2hpbmUuXCJcbiAgICAgIH0sXG4gICAgICBcImJpa2VcIjoge1xuICAgICAgICBcInhcIjogMCxcbiAgICAgICAgXCJyXCI6IDAuMjYsXG4gICAgICAgIFwicmltXCI6IDAuMTA1LFxuICAgICAgICBcImhhbGZXXCI6IDAuMDYsXG4gICAgICAgIFwiekZcIjogMS4xNyxcbiAgICAgICAgXCJ6UlwiOiAtMC42NzAwMDAwMDAwMDAwMDAyLFxuICAgICAgICBcInNlZ1wiOiAxOCxcbiAgICAgICAgXCJkaXNoXCI6IDAuMjgsXG4gICAgICAgIFwicmltQmFuZFwiOiAyLFxuICAgICAgICBcInR5cmVIZXhcIjogMzgxMzQxMyxcbiAgICAgICAgXCJyaW1IZXhcIjogMTE5MDc3NTYsXG4gICAgICAgIFwicGFpbnRIZXhcIjogMjk3NTA0MixcbiAgICAgICAgXCJjaHJvbWVIZXhcIjogMTIxNzI0NzksXG4gICAgICAgIFwiZGFya0hleFwiOiA0ODY3OTA2LFxuICAgICAgICBcImJvZHlOYW1lXCI6IFwiQm9keTogbm9zZSwgZmxvb3IgcGFuLCBjYWJpbiBhbmQgY2Fub3B5XCIsXG4gICAgICAgIFwicG9zaXRpb25zXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4yNixcbiAgICAgICAgICAgIDEuMTdcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgLTAuNjcwMDAwMDAwMDAwMDAwMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTYsXG4gICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgLTAuNjcwMDAwMDAwMDAwMDAwMlxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJwYWludEV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4wMixcbiAgICAgICAgICAgICAgICAwLjM0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAxLjA2LFxuICAgICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjc4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjkyLFxuICAgICAgICAgICAgICAgIDEuMDJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgICAxLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjg2LFxuICAgICAgICAgICAgICAgIDAuNzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAwLjRcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMC41MixcbiAgICAgICAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICAgICAgICBcInR1bWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiZWx0XCI6IDAuNCxcbiAgICAgICAgICAgICAgICBcInJvb2ZcIjogMS4wMixcbiAgICAgICAgICAgICAgICBcImtcIjogMC4zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAxLjQyLFxuICAgICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS40LFxuICAgICAgICAgICAgICAgIDAuNDRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgICAgICAwLjU0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAxLjE0LFxuICAgICAgICAgICAgICAgIDAuNTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjk4LFxuICAgICAgICAgICAgICAgIDAuNDJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMDYsXG4gICAgICAgICAgICAgICAgMC40OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xNixcbiAgICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMjgsXG4gICAgICAgICAgICAgICAgMC40NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4zNixcbiAgICAgICAgICAgICAgICAwLjM2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAxLjM4LFxuICAgICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjE2XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgICAwLjE1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgICAgICAwLjQ2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgICAgIDAuNjJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjk4LFxuICAgICAgICAgICAgICAgIDAuNjJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjQsXG4gICAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS40NSxcbiAgICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjQ1LFxuICAgICAgICAgICAgICAgIDAuMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMyxcbiAgICAgICAgICAgICAgICAwLjE1XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEuMyxcbiAgICAgICAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICAgICAgICBcInBsYW5cIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0xLjQ1LFxuICAgICAgICAgICAgICAgICAgMC45MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTEuMyxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAgICAgMC44NFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgICAgIDAuN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNixcbiAgICAgICAgICAgICAgICAwLjc2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4wNixcbiAgICAgICAgICAgICAgICAwLjg2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4zNCxcbiAgICAgICAgICAgICAgICAwLjk0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS40NSxcbiAgICAgICAgICAgICAgICAwLjk0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS40NSxcbiAgICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMC4wODUsXG4gICAgICAgICAgICBcInhcIjogMC42MDc1XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42LFxuICAgICAgICAgICAgICAgIDAuNzZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjA2LFxuICAgICAgICAgICAgICAgIDAuODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjM0LFxuICAgICAgICAgICAgICAgIDAuOTRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjQ1LFxuICAgICAgICAgICAgICAgIDAuOTRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0xLjQ1LFxuICAgICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjA4NSxcbiAgICAgICAgICAgIFwieFwiOiAtMC42MDc1XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMjgsXG4gICAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4yOCxcbiAgICAgICAgICAgICAgICAwLjk2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS40NSxcbiAgICAgICAgICAgICAgICAwLjk2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS40NSxcbiAgICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMS4zXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAxLjc3NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4wNDUsXG4gICAgICAgICAgICAgICAgMS44NDVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgICAgICAxLjkxMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMixcbiAgICAgICAgICAgICAgICAxLjk1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4xLFxuICAgICAgICAgICAgICAgIDEuOTI1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMS4zMyxcbiAgICAgICAgICAgICAgICAxLjg2NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMzUsXG4gICAgICAgICAgICAgICAgMS43OVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTEuMSxcbiAgICAgICAgICAgICAgICAxLjgzNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMixcbiAgICAgICAgICAgICAgICAxLjg1OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgICAgIDEuODI2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDEuMzIsXG4gICAgICAgICAgICBcInNoYXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJwbGFuXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMS4zNSxcbiAgICAgICAgICAgICAgICAgIDAuOVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTEuMTIsXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjYsXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAxLjA0NSxcbiAgICAgICAgICAgICAgICAgIDAuODhcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwic2hvdWxkZXJcIjoge1xuICAgICAgICAgICAgICAgIFwiclwiOiAwLjA4NVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInN0ZXBzXCI6IDYsXG4gICAgICAgICAgICAgIFwiZWRnZUJpYXNcIjogMC43LFxuICAgICAgICAgICAgICBcImJhc2VXaWR0aFwiOiAxLjMyLFxuICAgICAgICAgICAgICBcInNtb290aFwiOiAwLjZcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwicGFpbnRCb3hlc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQ3ODk5MDQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgMS4wNDUsXG4gICAgICAgICAgICAwLjUsXG4gICAgICAgICAgICAwLjI4LFxuICAgICAgICAgICAgMC4wMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQ3ODk5MDQsXG4gICAgICAgICAgICAwLjY1NCxcbiAgICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgICAtMC43MixcbiAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMC45XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxNDc4OTkwNCxcbiAgICAgICAgICAgIC0wLjY1NCxcbiAgICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgICAtMC43MixcbiAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMC45XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyOTc1MDQyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAtMC41OCxcbiAgICAgICAgICAgIDEuMjYsXG4gICAgICAgICAgICAwLjA2LFxuICAgICAgICAgICAgMS43XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyOTc1MDQyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNDQsXG4gICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgMC43NixcbiAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAwLjQ2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyOTc1MDQyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAtMS4xNCxcbiAgICAgICAgICAgIDEuMyxcbiAgICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgICAwLjM2XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInBhaW50VHViZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjE1LFxuICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAtMS4zXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjYxNSxcbiAgICAgICAgICAgICAgICAxLjIyLFxuICAgICAgICAgICAgICAgIC0xLjI0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjYxNSxcbiAgICAgICAgICAgICAgICAxLjYsXG4gICAgICAgICAgICAgICAgLTEuMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC42MTUsXG4gICAgICAgICAgICAgICAgMS44LFxuICAgICAgICAgICAgICAgIC0xLjE4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wNDUsXG4gICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgXCJoZXhcIjogMjk3NTA0MlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjE1LFxuICAgICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgICAtMS4zXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42MTUsXG4gICAgICAgICAgICAgICAgMS4yMixcbiAgICAgICAgICAgICAgICAtMS4yNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjE1LFxuICAgICAgICAgICAgICAgIDEuNixcbiAgICAgICAgICAgICAgICAtMS4yXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42MTUsXG4gICAgICAgICAgICAgICAgMS44LFxuICAgICAgICAgICAgICAgIC0xLjE4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wNDUsXG4gICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgXCJoZXhcIjogMjk3NTA0MlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0dWJlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgICAgIDEuMjRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgICAgICAxLjFcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxNixcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wMyxcbiAgICAgICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgICAgIDEuMjRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjAzLFxuICAgICAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAgICAgMS4xXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTYsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAxLjAyLFxuICAgICAgICAgICAgICAgIDAuODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMS4xNixcbiAgICAgICAgICAgICAgICAwLjhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyMixcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgICAgICAgMS4xNCxcbiAgICAgICAgICAgICAgICAwLjdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAgICAgMS4xNixcbiAgICAgICAgICAgICAgICAwLjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjEyLFxuICAgICAgICAgICAgICAgIDEuMTYsXG4gICAgICAgICAgICAgICAgMC44XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zNCxcbiAgICAgICAgICAgICAgICAxLjE0LFxuICAgICAgICAgICAgICAgIDAuN1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDE0LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgICAwLjY0LFxuICAgICAgICAgICAgICAgIDAuMDJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgICAxLjIsXG4gICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgICAgIDEuODIsXG4gICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDE0LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjYsXG4gICAgICAgICAgICAgICAgMC42NCxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42LFxuICAgICAgICAgICAgICAgIDEuMixcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42LFxuICAgICAgICAgICAgICAgIDEuODIsXG4gICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDE0LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAgICAgMC42NCxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjY0LFxuICAgICAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAgICAgLTEuMVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEyLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjY0LFxuICAgICAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjQsXG4gICAgICAgICAgICAgICAgMC42NCxcbiAgICAgICAgICAgICAgICAtMS4xXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTIsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgICAgICAxLjc5LFxuICAgICAgICAgICAgICAgIDAuODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAgICAgMS43OSxcbiAgICAgICAgICAgICAgICAtMS4zMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjYsXG4gICAgICAgICAgICAgICAgMS43OSxcbiAgICAgICAgICAgICAgICAtMS4zMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjYsXG4gICAgICAgICAgICAgICAgMS43OSxcbiAgICAgICAgICAgICAgICAwLjg2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAgIDEuNzksXG4gICAgICAgICAgICAgICAgMC44NlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEyLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTIsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjIsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEyLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAtMS40N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNCxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC40LFxuICAgICAgICAgICAgICAgIDAuNjYsXG4gICAgICAgICAgICAgICAgLTEuNDdcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAtMS4yMlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNCxcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC40LFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgLTEuMjJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAgICAgMSxcbiAgICAgICAgICAgICAgICAtMS40N1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA3LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjIsXG4gICAgICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgICAgICAtMS40N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMixcbiAgICAgICAgICAgICAgICAxLFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDcsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDEsXG4gICAgICAgICAgICAgICAgLTEuNDdcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwNyxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQsXG4gICAgICAgICAgICAgICAgMC44NCxcbiAgICAgICAgICAgICAgICAtMS40N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNCxcbiAgICAgICAgICAgICAgICAwLjg0LFxuICAgICAgICAgICAgICAgIC0xLjQ3XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDcsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgLTEuMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4yMixcbiAgICAgICAgICAgICAgICAwLjI0LFxuICAgICAgICAgICAgICAgIC0xLjVcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgICAgXCJoZXhcIjogOTA3ODE0NFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0cmltXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0Mjc3MzAyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNjg1LFxuICAgICAgICAgICAgMC4zNixcbiAgICAgICAgICAgIDAuNDYsXG4gICAgICAgICAgICAwLjEzLFxuICAgICAgICAgICAgMC40MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMzA5MzAzNCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjYxNSxcbiAgICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgICAwLjQ0LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDAuNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNDI3NzMwMixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjcyLFxuICAgICAgICAgICAgLTAuOCxcbiAgICAgICAgICAgIDEuMSxcbiAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgIDAuNTZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQyNzczMDIsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIC0xLjAyLFxuICAgICAgICAgICAgMS4xLFxuICAgICAgICAgICAgMC40NCxcbiAgICAgICAgICAgIDAuMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNTI2MTYzMSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjIwNSxcbiAgICAgICAgICAgIC0wLjU1LFxuICAgICAgICAgICAgMS4yNCxcbiAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAxLjVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDUyNjE2MzEsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4yMDUsXG4gICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgMC43MixcbiAgICAgICAgICAgIDAuMDEsXG4gICAgICAgICAgICAwLjQ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0MTQzNjY3LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgMS4yNixcbiAgICAgICAgICAgIDAuMDI1LFxuICAgICAgICAgICAgMC4xNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNDE0MzY2NyxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjQ3MixcbiAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAwLjcyLFxuICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgIDAuNDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDI3NjMzMDQsXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAxLjE0LFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDI3NjMzMDQsXG4gICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgMS4xNCxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjAzXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAyNzYzMzA0LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgICAtMC44LFxuICAgICAgICAgICAgMSxcbiAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAxXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0ODY3OTA2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgIC0xLjQ1LFxuICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgMC4wNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTE1NDY2NzIsXG4gICAgICAgICAgICAwLjQ0LFxuICAgICAgICAgICAgMC41MixcbiAgICAgICAgICAgIC0xLjQ2LFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjAyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMTU0NjY3MixcbiAgICAgICAgICAgIC0wLjQ0LFxuICAgICAgICAgICAgMC41MixcbiAgICAgICAgICAgIC0xLjQ2LFxuICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAwLjAyXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImxhdGhlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA5NSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA5NSxcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3OCxcbiAgICAgICAgICAgICAgICAwLjA1MlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjA1MlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogMTQsXG4gICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjYzLFxuICAgICAgICAgICAgICAxLjAzXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoZXhcIjogMTMwMjgwNDVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wNTJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDc2LFxuICAgICAgICAgICAgICAgIDAuMDUyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3LFxuICAgICAgICAgICAgICAgIDAuMDcyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDc4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNlZ1wiOiAxNCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNjMsXG4gICAgICAgICAgICAgIDEuMDNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxNTI2NTAwN1xuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJjeWxzXCI6IFtdXG4gICAgICB9LFxuICAgICAgXCJ0cmltXCI6IFtcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njc5MDYsXG4gICAgICAgICAgMC41OCxcbiAgICAgICAgICAwLjY0LFxuICAgICAgICAgIC0wLjU0LFxuICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgMC4wMixcbiAgICAgICAgICAxLjFcbiAgICAgICAgXSxcbiAgICAgICAgW1xuICAgICAgICAgIDQ4Njc5MDYsXG4gICAgICAgICAgLTAuNTgsXG4gICAgICAgICAgMC42NCxcbiAgICAgICAgICAtMC41NCxcbiAgICAgICAgICAwLjA2LFxuICAgICAgICAgIDAuMDIsXG4gICAgICAgICAgMS4xXG4gICAgICAgIF1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYsIHN0ZXBzOiBvcHRzLnN0ZXBzID8/IDEgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBpZiAob3B0cy5lZGdlQmlhcyAmJiAob3B0cy5zdGVwcyA/PyAxKSA+IDEpIHtcbiAgICAvLyBQdWxsIHRoZSB3aWR0aCBjb2x1bW5zIHRvd2FyZCB0aGUgdHdvIGVkZ2VzICh8dHxecCwgcCA8IDEpIHNvIGEgc2hvdWxkZXIgZmlsbGV0IGdldHMgZm91clxuICAgIC8vIHJlYWwgc2VnbWVudHMgaW5zdGVhZCBvZiBvbmUgY2hhbWZlciBhdCB0aGUgb3V0ZXJtb3N0IGNvbHVtbjsgdGhlIGZsYXQgbWlkZGxlIG5lZWRzIG5vbmUuXG4gICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBodyA9IHdpZHRoIC8gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHEuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBxLmdldFgoaSkgLyBodykpO1xuICAgICAgcS5zZXRYKGksIGh3ICogTWF0aC5zaWduKHQpICogTWF0aC5wb3coTWF0aC5hYnModCksIG9wdHMuZWRnZUJpYXMpKTtcbiAgICB9XG4gIH1cbiAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gIGlmIChvcHRzLnNtb290aCkgc21vb3RoTm9ybWFscyhnLCBvcHRzLnNtb290aCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogU2hhcGluZyBvcHRpb25zIHNoYXJlZCBieSBhIGJvZHkgYW5kIGV2ZXJ5dGhpbmcgc3dlcHQgcHJvdWQgb2YgaXQgKGdsYXNzIGJhbmQsIHBpbGxhcnMpLlxuICogIGBzaG91bGRlcmAsIGBub3NlYCBhbmQgYHRhaWxgIGFyZSBST1VORElOR1MgLS0gc2VlIHNoYXBlV2lkdGggLS0gYW5kIG5lZWQgYHN0ZXBzYCA+IDEgc28gdGhlXG4gKiAgc3dlcHQgZmFjZXMgY2FycnkgdmVydGljZXMgYWNyb3NzIHRoZSB3aWR0aCB0byBiZW5kOyBgYmFzZVdpZHRoYCBpcyB0aGUgYm9keSdzIHdpZHRoLCBzbyBhXG4gKiAgYmFuZCBzd2VwdCB3aWRlciB0aGFuIGl0IGlzIHJvdW5kZWQgYWJvdXQgdGhlIFNBTUUgY2VudHJlcyBhdCBhIGxhcmdlciByYWRpdXMgYW5kIHN0YXlzXG4gKiAgZXhhY3RseSBhcyBwcm91ZCBhcyBpdCB3YXMgYXV0aG9yZWQ7IGB0b3BPZmAgaXMgdGhlIGJvZHkncyBvd24gcHJvZmlsZSwgd2hpY2ggaXMgd2hlcmUgdGhlXG4gKiAgcm9vZiBsaW5lIGV2ZXJ5IHNob3VsZGVyIGhhbmdzIG9mZiBpcyByZWFkLiBBbGwgb3B0aW9uYWw6IHVuc2V0LCB0aGUgc3dlZXAgaXMgdGhlIG9sZCBzbGFiLiAqL1xudHlwZSBTaGFwZU9wdHMgPSB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSxcbiAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyLCBzdGVwcz86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICBzaG91bGRlcj86IHsgcjogbnVtYmVyLCB6TWluPzogbnVtYmVyLCB6TWF4PzogbnVtYmVyLCBmYWRlPzogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgbm9zZT86IHsgcjogbnVtYmVyIH0sIHRhaWw/OiB7IHI6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgIHNtb290aD86IG51bWJlciwgZWRnZUJpYXM/OiBudW1iZXIsIGJhc2VXaWR0aD86IG51bWJlciwgdG9wT2Y/OiBudW1iZXJbXVtdIH07XG5cbi8qKiBIaWdoZXN0IHkgb2YgYSBjbG9zZWQgW3osIHldIHByb2ZpbGUgb24gdGhlIHZlcnRpY2FsIGxpbmUgYXQgeiAtLSB0aGUgcm9vZiBsaW5lIGF0IHRoYXRcbiAqICBzdGF0aW9uLiBWZXJ0aWNhbCBlZGdlcyBjb3VudCBieSB0aGVpciBvd24gdG9wOyBhIHogb3V0c2lkZSB0aGUgcHJvZmlsZSByZXR1cm5zIC1JbmZpbml0eS4gKi9cbmZ1bmN0aW9uIHByb2ZpbGVUb3AocHJvZmlsZTogbnVtYmVyW11bXSwgejogbnVtYmVyLCB0b2wgPSAwKTogbnVtYmVyIHtcbiAgbGV0IHRvcCA9IC1JbmZpbml0eTtcbiAgY29uc3QgbiA9IHByb2ZpbGUubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwcm9maWxlW2ldLCBiID0gcHJvZmlsZVsoaSArIDEpICUgbl07XG4gICAgY29uc3QgbG8gPSBNYXRoLm1pbihhWzBdLCBiWzBdKSwgaGkgPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICBpZiAoeiA8IGxvIC0gdG9sIC0gMWUtNiB8fCB6ID4gaGkgKyB0b2wgKyAxZS02KSBjb250aW51ZTtcbiAgICAvLyBgdG9sYCBsZXRzIGEgYmFuZCBzdGFuZGluZyBhIGZldyBtbSBwcm91ZCBvZiBhIHZlcnRpY2FsIGZhY2UgKGEgcmVhciBwYW5lLCBhIEMtcGlsbGFyIHN0cmlwXG4gICAgLy8gYmVoaW5kIHRoZSBjYWIgYmFjaykgcmVhZCB0aGUgcm9vZiBsaW5lIG9mIHRoZSBmYWNlIGl0IHN0YW5kcyBvbiwgbm90IHRoZSBiZWQgZmxvb3IgYmVoaW5kIGl0XG4gICAgY29uc3QgemMgPSBNYXRoLm1heChsbywgTWF0aC5taW4oaGksIHopKTtcbiAgICBjb25zdCB5ID0gaGkgLSBsbyA8IDFlLTYgPyBNYXRoLm1heChhWzFdLCBiWzFdKSA6IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogKHpjIC0gYVswXSkgLyAoYlswXSAtIGFbMF0pO1xuICAgIGlmICh5ID4gdG9wKSB0b3AgPSB5O1xuICB9XG4gIHJldHVybiB0b3A7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG9wdHM6IFNoYXBlT3B0cywgd2lkdGggPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdHVtYmxlQXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnR1bWJsZSkgcmV0dXJuIDE7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgcmV0dXJuIDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgfTtcbiAgY29uc3QgcGxhbkF0ID0gKHo6IG51bWJlcikgPT4ge1xuICAgIGlmICghb3B0cy5wbGFuIHx8IG9wdHMucGxhbi5sZW5ndGggPCAyKSByZXR1cm4gMTtcbiAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICBpZiAoeiA8PSBzdFswXVswXSkgcmV0dXJuIHN0WzBdWzFdO1xuICAgIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSByZXR1cm4gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgIHJldHVybiBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgLy8gUk9VTkRJTkdTLiBBIHN3ZWVwIGlzIGEgc2xhYjogaXRzIHJvb2YgbWVldHMgaXRzIHNpZGUgYXQgYSBoYXJkIGVkZ2UsIGFuZCBpdHMgbm9zZSBtZWV0cyBib3RoXG4gIC8vIHNpZGVzIGF0IHR3byBtb3JlLiBSZWFsIHNoZWV0IG1ldGFsIGNyb3ducyBvdmVyIHRoZSBmZW5kZXIgYW5kIHdyYXBzIHJvdW5kIHRoZSBub3NlLCBzbyBhbnlcbiAgLy8gdmVydGV4IGluc2lkZSBhIGNvcm5lciBxdWFkcmFudCAod2l0aGluIHIgb2YgdGhlIHRvcCBBTkQgd2l0aGluIHIgb2YgdGhlIHNpZGUpIGlzIHByb2plY3RlZFxuICAvLyBvbnRvIHRoZSBjaXJjbGUgb2YgcmFkaXVzIHIgYWJvdXQgdGhhdCBjb3JuZXIncyBjZW50cmUgLS0gYSBmaWxsZXQsIGluIHgveSBmb3IgdGhlIHNob3VsZGVyXG4gIC8vIGFuZCBpbiB4L3ogYXQgdGhlIHR3byBlbmRzLiBUaGUgY2VudHJlcyBhcmUgcGxhY2VkIG9mZiB0aGUgQk9EWSdzIHdpZHRoIChgYmFzZVdpZHRoYCkgYW5kXG4gIC8vIHJvb2YgbGluZSAoYHRvcE9mYCksIHNvIGEgZ2xhc3MgYmFuZCBzd2VwdCBgZWAgd2lkZXIgaXMgZmlsbGV0ZWQgYXQgciArIGUgYWJvdXQgdGhlIHNhbWVcbiAgLy8gY2VudHJlIGFuZCBzdGF5cyBgZWAgcHJvdWQgYWxsIHRoZSB3YXkgcm91bmQgdGhlIGNvcm5lci5cbiAgY29uc3QgZXh0cmEgPSBvcHRzLmJhc2VXaWR0aCA/ICh3aWR0aCAtIG9wdHMuYmFzZVdpZHRoKSAvIDIgOiAwO1xuICBjb25zdCBiYXNlSGFsZiA9IChvcHRzLmJhc2VXaWR0aCA/PyB3aWR0aCkgLyAyO1xuICBjb25zdCB0b3AgPSBvcHRzLnRvcE9mID8/IG51bGw7XG4gIGxldCB6TWF4ID0gLUluZmluaXR5LCB6TWluID0gSW5maW5pdHk7XG4gIGlmICh0b3ApIGZvciAoY29uc3QgcSBvZiB0b3ApIHsgaWYgKHFbMF0gPiB6TWF4KSB6TWF4ID0gcVswXTsgaWYgKHFbMF0gPCB6TWluKSB6TWluID0gcVswXTsgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGNvbnN0IHRmID0gdHVtYmxlQXQoeSksIHBmID0gcGxhbkF0KHopO1xuICAgIHggKj0gdGYgKiBwZjtcbiAgICBpZiAob3B0cy5zaG91bGRlciAmJiB0b3ApIHtcbiAgICAgIGNvbnN0IHNoID0gb3B0cy5zaG91bGRlcjtcbiAgICAgIC8vIFRoZSBmaWxsZXQgbGl2ZXMgb24gYSB6LXJhbmdlOiBoYXJkIGF0IHpNaW4gKHRoZSBjYWIgYmFjayksIGZhZGVkIG92ZXIgYGZhZGVgIG1ldHJlcyBhdFxuICAgICAgLy8gek1heCAodGhlIHRvcCBvZiB0aGUgd2luZHNjcmVlbiByYWtlIC0tIGEgcmFrZSBpcyBhIHBsYW5lLCBpdHMgZWRnZSBhIGNyZWFzZSwgYW5kIGEgZmFkZVxuICAgICAgLy8ga2V5ZWQgb24gdGhlIHJvb2YgbGluZSdzIFNMT1BFIHZhcmllZCBpbnNpZGUgdGhlIHJlYXIgY29ybmVyIGFuZCBmb2xkZWQgaXQpLlxuICAgICAgY29uc3QgekxvID0gc2guek1pbiA/PyAtSW5maW5pdHksIHpIaSA9IHNoLnpNYXggPz8gSW5maW5pdHksIGZkID0gc2guZmFkZSA/PyAwO1xuICAgICAgY29uc3QgdyA9IHogPCB6TG8gfHwgeiA+IHpIaSA/IDAgOiBmZCA+IDAgPyBNYXRoLm1pbigxLCAoekhpIC0geikgLyBmZCkgOiAxO1xuICAgICAgY29uc3QgeXQgPSBwcm9maWxlVG9wKHRvcCwgeiwgMC4wMyk7XG4gICAgICBpZiAodyA+IDAgJiYgaXNGaW5pdGUoeXQpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzaC5yICsgZXh0cmEsIGN5ID0geXQgLSBzaC5yO1xuICAgICAgICBjb25zdCBodyA9IGJhc2VIYWxmICogdHVtYmxlQXQoY3kpICogcGYsIGN4ID0gaHcgLSBzaC5yO1xuICAgICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpO1xuICAgICAgICBpZiAoeSA+IGN5ICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgICBjb25zdCBkeCA9IGF4IC0gY3gsIGR5ID0geSAtIGN5LCBkID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgbGV0IG54ID0gYXgsIG55ID0geSwgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGR4ID49IHIgLSAxZS00KSB7XG4gICAgICAgICAgICAvLyB0aGUgRURHRSBjb2x1bW4sIHNoYXJlZCB3aXRoIHRoZSBzaWRlOiB0aGUgYXJjJ3MgZm9vdCwgdGFuZ2VudCB0byB0aGUgc2lkZSBhdCBjeVxuICAgICAgICAgICAgbnggPSBjeCArIHI7IG55ID0gY3k7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkeSA+PSBzaC5yIC0gMWUtNCAmJiBkeCA8PSByICsgMWUtNikge1xuICAgICAgICAgICAgLy8gYSB0b3Atcm93IHZlcnRleDogaXRzIGNvbHVtbiBwb3NpdGlvbiBwaWNrcyBpdHMgYW5nbGUgb24gdGhlIGFyY1xuICAgICAgICAgICAgY29uc3QgdGggPSBNYXRoLlBJIC8gMiAqICgxIC0gZHggLyByKTtcbiAgICAgICAgICAgIG54ID0gY3ggKyBNYXRoLmNvcyh0aCkgKiByOyBueSA9IGN5ICsgTWF0aC5zaW4odGgpICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR4IDw9IHIgKyAxZS02ICYmIGR5IDw9IHIgKyAxZS02ICYmIGQgPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIGEgcHJvdWQgYmFuZCdzIG91dGVyIHZlcnRleCBiZWxvdyB0aGUgdG9wOiBvbnRvIGl0cyBvd24gY2lyY2xlOyBpbnNpZGUgaXQsIGxlYXZlXG4gICAgICAgICAgICBueCA9IGN4ICsgZHggLyBkICogcjsgbnkgPSBjeSArIGR5IC8gZCAqIHI7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoaXQpIHsgeCA9IE1hdGguc2lnbih4IHx8IDEpICogKGF4ICsgKG54IC0gYXgpICogdyk7IHkgPSB5ICsgKG55IC0geSkgKiB3OyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbmQgb2YgW29wdHMubm9zZSA/IHsgcjogb3B0cy5ub3NlLnIsIHpjOiB6TWF4IC0gb3B0cy5ub3NlLnIsIHM6IDEgfSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHMudGFpbCA/IHsgcjogb3B0cy50YWlsLnIsIHpjOiB6TWluICsgb3B0cy50YWlsLnIsIHM6IC0xIH0gOiBudWxsXSkge1xuICAgICAgaWYgKCFlbmQgfHwgIXRvcCkgY29udGludWU7XG4gICAgICBjb25zdCByID0gZW5kLnIgKyBleHRyYTtcbiAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdCh5KSAqIHBsYW5BdChlbmQuemMpLCBjeCA9IGh3IC0gZW5kLnI7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpLCBkeiA9ICh6IC0gZW5kLnpjKSAqIGVuZC5zO1xuICAgICAgaWYgKGR6ID4gMCAmJiBheCA+IGN4ICYmIHIgPiAxZS02KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZCA9IE1hdGguaHlwb3QoZHgsIGR6KSB8fCAxO1xuICAgICAgICAvLyBPbmx5IGEgdmVydGV4IE9VVFNJREUgdGhlIGNpcmNsZSBpcyBwcm9qZWN0ZWQgb250byBpdCAodGhlIHNob3VsZGVyJ3MgcnVsZSk6IGEgc2lkZVxuICAgICAgICAvLyBzdHJpcCdzIGlubmVyIGZhY2UgbGllcyBpbnNpZGUsIGFuZCBwcm9qZWN0aW5nIGl0IHRvbyBsYW5kcyBpdCBvbiB0aGUgb3V0ZXIgZmFjZSxcbiAgICAgICAgLy8gd2hpY2ggei1maWdodHMgLS0gdGhlIENvbW11dGVyIHZhbidzIHdyYXBwZWQgQS1waWxsYXJzIGNydW1wbGVkIGZyb20gZXhhY3RseSB0aGF0LlxuICAgICAgICBpZiAoZCA+PSByIC0gMWUtNCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoY3ggKyBkeCAvIGQgKiByKTsgeiA9IGVuZC56YyArIGVuZC5zICogKGR6IC8gZCAqIHIpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHAuc2V0WFlaKGksIHgsIHksIHopO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBbmdsZS1saW1pdGVkIFNNT09USCBOT1JNQUxTIG9uIGEgbm9uLWluZGV4ZWQgZ2VvbWV0cnkuIEV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb25cbiAqICBhdmVyYWdlcyB0aGUgZmFjZSBub3JtYWxzIG9mIGl0cyBuZWlnaGJvdXJzIHRoYXQgbGllIHdpdGhpbiBgbWF4RGVnYCBvZiBpdHMgb3duIGZhY2UsIHNvIGFcbiAqICBmaWxsZXRlZCBzaG91bGRlciwgYSBwbGFuLXJvdW5kZWQgbm9zZSBhbmQgdGhlIHR1bWJsZWhvbWUga2luayBhdCB0aGUgYmVsdCBzaGFkZSBhcyBvbmVcbiAqICBjb250aW51b3VzIHN1cmZhY2UsIHdoaWxlIGEgOTAtZGVncmVlIGVkZ2UgLS0gdGhlIGFyY2ggY3V0LCB0aGUgbm9zZSBhZ2FpbnN0IHRoZSBidW1wZXIgLS1cbiAqICBzdGF5cyBhIGNyZWFzZS4gV2l0aG91dCB0aGlzIGV2ZXJ5IHF1YWQgdGhlIHJvdW5kaW5ncyBiZW5kIHNwbGl0cyBpbnRvIHR3byBkaWZmZXJlbnRseSBsaXRcbiAqICB0cmlhbmdsZXMsIHdoaWNoIGlzIHRoZSBcImJsb2NreVwiIGEgdmlld2VyIHNlZXMgYmVmb3JlIGFueSBzaWxob3VldHRlLiAqL1xuZnVuY3Rpb24gc21vb3RoTm9ybWFscyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXhEZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBpZiAoIW5ybSB8fCBnZW8uZ2V0SW5kZXgoKSkgcmV0dXJuIGdlbztcbiAgY29uc3QgbiA9IHAuY291bnQsIGNvc0xpbSA9IE1hdGguY29zKG1heERlZyAqIE1hdGguUEkgLyAxODApO1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgayA9IGAke01hdGgucm91bmQocC5nZXRYKGkpICogMjAwMCl9LCR7TWF0aC5yb3VuZChwLmdldFkoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WihpKSAqIDIwMDApfWA7XG4gICAgY29uc3QgZyA9IGdyb3Vwcy5nZXQoayk7IGlmIChnKSBnLnB1c2goaSk7IGVsc2UgZ3JvdXBzLnNldChrLCBbaV0pO1xuICB9XG4gIGNvbnN0IGZhY2UgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgZmFjZVtpICogM10gPSBucm0uZ2V0WChpKTsgZmFjZVtpICogMyArIDFdID0gbnJtLmdldFkoaSk7IGZhY2VbaSAqIDMgKyAyXSA9IG5ybS5nZXRaKGkpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGNvbnN0IGcgb2YgZ3JvdXBzLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCBpIG9mIGcpIHtcbiAgICAgIGxldCBzeCA9IDAsIHN5ID0gMCwgc3ogPSAwO1xuICAgICAgY29uc3QgYXggPSBmYWNlW2kgKiAzXSwgYXkgPSBmYWNlW2kgKiAzICsgMV0sIGF6ID0gZmFjZVtpICogMyArIDJdO1xuICAgICAgZm9yIChjb25zdCBqIG9mIGcpIHtcbiAgICAgICAgY29uc3QgYnggPSBmYWNlW2ogKiAzXSwgYnkgPSBmYWNlW2ogKiAzICsgMV0sIGJ6ID0gZmFjZVtqICogMyArIDJdO1xuICAgICAgICBpZiAoYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ID49IGNvc0xpbSkgeyBzeCArPSBieDsgc3kgKz0gYnk7IHN6ICs9IGJ6OyB9XG4gICAgICB9XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdChzeCwgc3ksIHN6KSB8fCAxO1xuICAgICAgb3V0W2kgKiAzXSA9IHN4IC8gbDsgb3V0W2kgKiAzICsgMV0gPSBzeSAvIGw7IG91dFtpICogMyArIDJdID0gc3ogLyBsO1xuICAgIH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBQSUxMQVIgU1RSSVA6IHRoZSBwaWxsYXIgcG9seWdvbiBzd2VwdCBvbmx5IGBzdHJpcFdgIGRlZXAgYXQgZWFjaCBvdXRlciBlZGdlIG9mIGB3aWR0aGAsXG4gKiAgbWlycm9yZWQsIGFuZCBzaGFwZWQgZXhhY3RseSBhcyB0aGUgYm9keS4gVGhlIG9sZCBmdWxsLXdpZHRoIHN3ZWVwIHB1dCBhIHNsYWIgYWNyb3NzIHRoZVxuICogIHdpbmRzY3JlZW4gd2hlcmV2ZXIgdGhlIEEtcGlsbGFyIHBvbHlnb24gbGF5IG9uIHRoZSByYWtlIC0tIGEgcGlsbGFyIGlzIGF0IHRoZSBzaWRlIG9mIHRoZVxuICogIGdsYXNzLCBub3QgdGhyb3VnaCBpdC4gVGhlIG1pcnJvcmVkIGhhbGYgaGFzIGl0cyB3aW5kaW5nIHJlc3RvcmVkLiAqL1xuZnVuY3Rpb24gc2lkZVN0cmlwKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIHN0cmlwVzogbnVtYmVyLCBvcHRzOiBTaGFwZU9wdHMgPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogc3RyaXBXLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBzdGVwczogMiB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgIC8vIGRlcHRoIG5vdyBydW5zIGFsb25nIC14IGZyb20geCA9IDBcbiAgICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApOyAgICAgICAgICAgIC8vIG91dGVyIGZhY2UgYXQgK3dpZHRoLzIsIGlubmVyIGF0IHdpZHRoLzIgLSBzdHJpcFdcbiAgICBpZiAoc3ggPCAwKSB7XG4gICAgICBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICAgIGNvbnN0IHEgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IHgxID0gcS5nZXRYKGkgKyAxKSwgeTEgPSBxLmdldFkoaSArIDEpLCB6MSA9IHEuZ2V0WihpICsgMSk7XG4gICAgICAgIHEuc2V0WFlaKGkgKyAxLCBxLmdldFgoaSArIDIpLCBxLmdldFkoaSArIDIpLCBxLmdldFooaSArIDIpKTsgcS5zZXRYWVooaSArIDIsIHgxLCB5MSwgejEpO1xuICAgICAgfVxuICAgIH1cbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gICAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgICByZXR1cm4gZztcbiAgfTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbWsoMSksIG1rKC0xKV0pO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1LCByaW1CYW5kID0gNCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIC8vIGByaW1CYW5kYCBpcyB0aGUgTEFTVCBwcm9maWxlIHBvaW50IHRoYXQgY2FycmllcyB0aGUgcmltIGNvbG91ci4gVmVydGV4IGNvbG91cnMgaW50ZXJwb2xhdGUsXG4gIC8vIHNvIHdpdGggdGhlIGRlZmF1bHQgNCB0aGUgd2hvbGUgc2lkZXdhbGwgZnJvbSByUmltIG91dCB0byByVHlyZSAqIDAuOTMgaXMgYSBncmFkaWVudCBmcm9tIHRoZVxuICAvLyByaW0gdG9uZSB0byB0aGUgdHlyZSB0b25lIC0tIG9uIGEgd2hlZWwgd2hvc2UgcmltIGlzIGEgc21hbGwgaHViIHRoYXQgcGFpbnRzIG1vc3Qgb2YgdGhlIHZpc2libGVcbiAgLy8gZGlzYyBwYWxlLCBhbmQgdGhlIHR1ay10dWsncyB3aGVlbHMgcmVhZCBhcyBncmV5IHBsYXRlcyByYXRoZXIgdGhhbiBibGFjayB0eXJlcy4gUGFzc2luZyAyXG4gIC8vIHN0b3BzIHRoZSBjaHJvbWUgYXQgdGhlIGh1YiBjYXAgYW5kIG1ha2VzIHRoZSBzaWRld2FsbCB0eXJlIGFsbCB0aGUgd2F5IGluLiBUaGUgZGVmYXVsdCBpc1xuICAvLyB1bmNoYW5nZWQsIHNvIGV2ZXJ5IGV4aXN0aW5nIHByb3AgaXMgYnl0ZS1pZGVudGljYWwuXG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSByaW1CYW5kIHx8IGogPj0gcHRzLmxlbmd0aCAtIDEgLSByaW1CYW5kO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgU1RFRUwgV0hFRUw6IHRoZSBzYW1lIGNsb3NlZCBsYXRoZSBhcyB3aGVlbEdlbywgd2l0aCB0aGUgcHJvZmlsZSBvZiBhIHByZXNzZWQtc3RlZWwgcmltIC0tIGFcbiAqIGZsYXQgb3V0ZXIgZmFjZSwgYSBkaXNoZWQgY2VudHJlIHN0ZXBwaW5nIGluIHBhc3QgYSBkYXJrIFZFTlQgUklORyAodGhlIHJvdyBvZiBvdmFsIGhvbGVzLFxuICogZGVsaXZlcmVkIGFzIGEgYmFuZCBvZiB2ZXJ0ZXggY29sb3VyIHJhdGhlciB0aGFuIGFzIGhvbGVzIGEgdHVybnRhYmxlIGdhdGUgd291bGQgcmVhZCB0aHJvdWdoKSxcbiAqIGEgc21hbGwgaHViIGNhcCBzdGFuZGluZyBwcm91ZCAtLSBhbmQgYSBjaHVua2llciB0eXJlIHdob3NlIHRyZWFkIHJpbmcgYWx0ZXJuYXRlcyBhIGxpZ2h0ZXIgYW5kXG4gKiBhIGRhcmtlciB0b25lIHNlZ21lbnQgYnkgc2VnbWVudCwgc28gdGhlIGx1Z3MgcmVhZCBhdCBwcm9wIGRpc3RhbmNlIGZvciB6ZXJvIGdlb21ldHJ5LiBQZXItcG9pbnRcbiAqIGNvbG91cnMgcmlkZSB0aGUgbGF0aGUncyBzZWdtZW50LW1ham9yIHZlcnRleCBvcmRlciBleGFjdGx5IGFzIGluIHdoZWVsR2VvLlxuICovXG5mdW5jdGlvbiBzdGVlbFdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIHZlbnRIZXg6IG51bWJlciwgbHVnSGV4OiBudW1iZXIsIGRpc2ggPSAwLjUwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCBkID0gaHcgKiBkaXNoO1xuICAvLyBbcmFkaXVzLCBheGlhbF0gYW5kIGEgY29sb3VyIGNsYXNzIHBlciBwb2ludDogMCByaW0sIDEgdmVudCByaW5nLCAyIHR5cmUgc2lkZXdhbGwsIDMgdHJlYWRcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtZCArIDAuMDJdLCBbclJpbSAqIDAuMjIsIC1kICsgMC4wMl0sIFtyUmltICogMC4yNCwgLWRdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gaHViIGNhcFxuICAgIFtyUmltICogMC40MCwgLWRdLCBbclJpbSAqIDAuNDIsIC1kIC0gMC4wMDZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNoIGZsb29yXG4gICAgW3JSaW0gKiAwLjYyLCAtZCAtIDAuMDA2XSwgW3JSaW0gKiAwLjY0LCAtaHcgKiAwLjg2XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlbnQgcmluZyAoZGFyaylcbiAgICBbclJpbSAqIDAuOTAsIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45MF0sIFtyUmltLCAtaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAvLyByaW0gZmFjZSBhbmQgbGlwXG4gICAgW3JUeXJlICogMC44OCwgLWh3XSwgW3JUeXJlICogMC45NywgLWh3ICogMC44Nl0sIFtyVHlyZSwgLWh3ICogMC43MF0sICAgICAgICAgICAgICAgLy8gc2lkZXdhbGxcbiAgICBbclR5cmUsIGh3ICogMC43MF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYWRcbiAgICBbclR5cmUgKiAwLjk3LCBodyAqIDAuODZdLCBbclR5cmUgKiAwLjg4LCBod10sIFtyUmltLCBodyAqIDAuOThdLCAgICAgICAgICAgICAgICAgICAvLyBmYXIgc2lkZXdhbGxcbiAgICBbclJpbSwgaHcgKiAwLjg4XSwgW3JSaW0gKiAwLjMwLCBodyAqIDAuODBdLCBbMCwgaHcgKiAwLjgwXSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2sgb2YgdGhlIHJpbVxuICBdO1xuICBjb25zdCBjbHMgPSBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMiwgMiwgMywgMywgMiwgMiwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IEMgPSBbbmV3IFRIUkVFLkNvbG9yKHJpbUhleCksIG5ldyBUSFJFRS5Db2xvcih2ZW50SGV4KSwgbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBuZXcgVEhSRUUuQ29sb3IobHVnSGV4KV07XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGogPSBpICUgcHRzLmxlbmd0aCwgcyA9IE1hdGguZmxvb3IoaSAvIHB0cy5sZW5ndGgpO1xuICAgIGxldCBjID0gQ1tjbHNbal1dO1xuICAgIGlmIChjbHNbal0gPT09IDMpIGMgPSAocyAlIDIgPT09IDApID8gY3QgOiBDWzNdO1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIHNpeHR5IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gOCwgaGV4PzogbnVtYmVyLCBvcGVuID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIC8vIGBvcGVuYDogbm8gZW5kIGRpc2NzIC0tIGZvciBhIHJ1biB3aG9zZSBldmVyeSBlbmQgaXMgYnVyaWVkIGluIGEgam9pbnQsIGEgcmluZyBvciBhIGh1YiwgdGhlXG4gICAgLy8gdHdvIGNhcHMgYXJlIGhhbGYgdGhlIHNlZ21lbnQncyB0cmlhbmdsZXMgc3BlbnQgb24gZmFjZXMgbm90aGluZyBjYW4gc2VlXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgb3Blbik7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzLFxuICAgICAgICAgICAgICAgICBvcHRzOiB7IGZsb29yPzogbnVtYmVyLCBzdHJlYWtzPzogbnVtYmVyLCBjbG91ZD86IG51bWJlciwgc3BlY2tsZT86IG51bWJlciwgdG9uZT86IG51bWJlcltdLCB6b25lcz86IG51bWJlcltdW10gfSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBgZmxvb3JgIGlzIHRoZSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBoZWlnaHQgKGkuZS4gb2YgdGhlIHdvcmxkIGhlaWdodCB0aGUgdGlsZSBzcGFucykgYmVsb3dcbiAgICAvLyB3aGljaCB0aGUgd2FzaCBpcyBGVUxMOiBhIGJvZHkgd2hvc2Ugc2lsbCBpcyAwLjQ2IG0gdXAgYSAyIG0gdGlsZSB3YW50cyB0aGUgbXVkIHNvbGlkIHRvXG4gICAgLy8gMC4yMyBhbmQgZmFkaW5nIGZyb20gdGhlcmUsIG5vdCBmYWRpbmcgZnJvbSB0aGUgZ3JvdW5kIGl0IG5ldmVyIHJlYWNoZXMuXG4gICAgY29uc3QgZmwgPSBNYXRoLm1pbihjb3ZlcmFnZSwgb3B0cy5mbG9vciA/PyAwKTtcbiAgICAvLyBgdG9uZWAgaXMgdGhlIE1VRCBhcyBhIHJhdGlvIG9mIHRoZSBlbnZlbG9wZSwgZm9yIGEgcGFpbnQgd2hvc2UgZW52ZWxvcGUgaXMgdGhlIHBlci1jaGFubmVsXG4gICAgLy8gbWF4IG9mIGNsZWFuIHBhaW50IGFuZCBtdWQgKGEgZ3JlZW4gd2hvc2UgbXVkIGlzIHRhbiBpcyBicmlnaHRlciBpbiByZWQsIGRhcmtlciBpbiBncmVlbik6XG4gICAgLy8gdW5zZXQsIHRoZSBtdWQgaXMgd2hpdGUgLS0gdGhlIGVudmVsb3BlIGl0c2VsZi5cbiAgICBjb25zdCBUID0gb3B0cy50b25lID8gb3B0cy50b25lLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB2KSkpKSA6IG51bGw7XG4gICAgY29uc3QgbXVkID0gKGE6IG51bWJlcikgPT4gVCA/IGByZ2JhKCR7VFswXX0sJHtUWzFdfSwke1RbMl19LCR7YX0pYCA6IGByZ2JhKDI1NSwyNTIsMjQ0LCR7YX0pYDtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMgKiAoMSAtIGZsKSwgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBUID8gbXVkKDAuODgpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCBUID8gbXVkKDAuNDUpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGB6b25lc2AgYXJlIFt1MCwgdTEsIHdlaWdodF0gc3BhbnMgb2YgdGhlIHRpbGUncyB3aWR0aCB0aGUgc3ByYXkgY29uY2VudHJhdGVzIGluIC0tIHdpdGhcbiAgICAvLyB0aGUgdGlsZSBmaXR0ZWQgdG8gdGhlIHZlaGljbGUncyBsZW5ndGggKGhlaWdodFVWIHVTY2FsZSA9IEwpLCB0aGF0IGlzIFwiYmVoaW5kIHRoZSBmcm9udFxuICAgIC8vIHdoZWVsXCIsIFwiYWhlYWQgb2YgdGhlIHJlYXIgYXJjaFwiLCBcImFsb25nIHRoZSBiZWQgc2lkZVwiOiB3aGVyZSBhIHdoZWVsIGFjdHVhbGx5IHRocm93cyBtdWQuXG4gICAgY29uc3Qgem9uZXMgPSBvcHRzLnpvbmVzID8/IFtbMCwgMSwgMV1dO1xuICAgIGNvbnN0IHpzdW0gPSB6b25lcy5yZWR1Y2UoKGFjYywgem4pID0+IGFjYyArIHpuWzJdLCAwKTtcbiAgICBjb25zdCBwaWNrVSA9ICgpID0+IHsgbGV0IHQgPSBybmQoKSAqIHpzdW07IGZvciAoY29uc3Qgem4gb2Ygem9uZXMpIHsgaWYgKHQgPCB6blsyXSkgcmV0dXJuICh6blswXSArIHJuZCgpICogKHpuWzFdIC0gem5bMF0pKSAqIHM7IHQgLT0gem5bMl07IH0gcmV0dXJuIHJuZCgpICogczsgfTtcbiAgICAvLyBEVVNUIEZJTE06IHNvZnQgY2xvdWR5IHBhdGNoZXMgb2YgdGhlIGVudmVsb3BlIG92ZXIgdGhlIGNsZWFuIHBhaW50IGV2ZXJ5d2hlcmUsIHNvIHRoZVxuICAgIC8vIHVwcGVyIGJvZHkgaXMgbm90IGEgZmxhdCBmaWxsIC0tIHRoZSBwbGF0ZSdzIGdyZWVuIGlzIGEgZHVsbCwgZHVzdHkgZ3JlZW4uXG4gICAgaWYgKG9wdHMuY2xvdWQpIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSBvcHRzLmNsb3VkICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIG11ZChhKSk7IGcyLmFkZENvbG9yU3RvcCgxLCBtdWQoMCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BSQVk6IHRoZSBtdWQgYSB3aGVlbCB0aHJvd3MgaXMgYSBmaWVsZCBvZiBzbWFsbCBzcGxhdHMgc3RyZWFrZWQgYWxvbmcgdGhlIGRpcmVjdGlvbiBvZlxuICAgIC8vIHRyYXZlbCAodSksIGRlbnNlc3QganVzdCBhYm92ZSB0aGUgd2FzaCBhbmQgdGhpbm5pbmcgdXB3YXJkIGluIGNsdXN0ZXJzIC0tIG5vdCBhIGdyYWRpZW50LlxuICAgIGlmIChvcHRzLnN0cmVha3MpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IGN4MCA9IHBpY2tVKCksIGJhbmQgPSBjb3ZlcmFnZTtcbiAgICAgIGNvbnN0IGN5MCA9IHMgLSBzICogKGZsICsgTWF0aC5wb3cocm5kKCksIDEuNikgKiAoYmFuZCAtIGZsKSk7XG4gICAgICBjb25zdCBjb3VudCA9IDYgKyBNYXRoLmZsb29yKHJuZCgpICogMTgpLCBzcHJlYWQgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjeDAgKyAocm5kKCkgLSAwLjUpICogc3ByZWFkICogMywgeSA9IGN5MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQ7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGggPSAwLjggKyBybmQoKSAqIHMgKiAwLjAwMywgYSA9IDAuMzUgKyBybmQoKSAqIDAuNTU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgdywgaCwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRzLnNwZWNrbGUpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zcGVja2xlOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBwaWNrVSgpLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjMpICogcyAqIGNvdmVyYWdlLCByID0gMC42ICsgcm5kKCkgKiAxLjQsIGEgPSAwLjMgKyBybmQoKSAqIDAuNjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoYSkgOiBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgVCA/IG11ZCgwKSA6ICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEdMQVNTIHRpbGUgZm9yIGEgdmVoaWNsZSdzIGdsYXppbmcgYmFuZCwgYm91bmQgYXMgYG1hcGAgb24gdGhlIGdsYXNzIG1hdGVyaWFsIEFGVEVSXG4gKiAgY29uc3RydWN0aW9uICh0aGUgbWF0ZXJpYWwgc3RheXMgdGV4dHVyZWxlc3MtZGVjbGFyZWQpLiBUaGUgcGFuZSdzIFVWcyBhcmUgaGVpZ2h0LWtleWVkXG4gKiAgKGBoZWlnaHRVVmApLCBzbyB2IHJ1bnMgc2lsbC10by1yb29mOiB0aGUgdGlsZSBpcyBhIHZlcnRpY2FsIGdyYWRpZW50IGZyb20gdGhlIG1hdGVyaWFsJ3NcbiAqICBvd24gdG9uZSBhdCB0aGUgdG9wICh3aGl0ZSwgaS5lLiB0aGUgc2t5LWxpdCB2YWx1ZSB0aGUgbWF0ZXJpYWwgaXMgcmUtYmFzZWQgdG8pIGRvd24gdG9cbiAqICBgbG93YCBhdCB0aGUgYm90dG9tIC0tIGEgcmVhbCBzY3JlZW4gcmVmbGVjdHMgc2t5IGF0IHRoZSB0b3AgYW5kIHRoZSBkYXJrIGRhc2ggYW5kIHJvYWQgYmVsb3dcbiAqICAtLSBwbHVzIGEgZmV3IHNvZnQgZGlhZ29uYWwgcmVmbGVjdGlvbiBzdHJlYWtzIGFuZCBhIGZhaW50IHRpbnQgYmFuZC4gYGxvd2AgaXMgYSBsaW5lYXItc3BhY2VcbiAqICByYXRpbyAoc2VlIGVtaXQubWpzIGByYXRpb2ApIG9mIHRoZSBtZWFzdXJlZCBzaWRlLWdsYXNzIHRvbmUgb3ZlciB0aGUgc2t5LWxpdCB0b25lLiAqL1xuZnVuY3Rpb24gZ2xhc3NUaWxlKHNpemU6IG51bWJlciwgbG93OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBzdHJlYWtzID0gNSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBjID0gbG93Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgMCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYigke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiKCR7TWF0aC5yb3VuZCgoY1swXSArIDI1NSkgLyAyKX0sJHtNYXRoLnJvdW5kKChjWzFdICsgMjU1KSAvIDIpfSwke01hdGgucm91bmQoKGNbMl0gKyAyNTUpIC8gMil9KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICcjZmZmZmZmJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyByZWZsZWN0aW9uIHN0cmVha3M6IGxvbmcgc29mdCBkaWFnb25hbCBiYW5kcywgbGlnaHRlciwgdGlsZWQgaW4gdSBzbyB0aGUgc2VhbSBuZXZlciBzaG93c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyZWFrczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKSwgYSA9IDAuMTAgKyBybmQoKSAqIDAuMTYsIHRpbHQgPSBzICogKDAuMjUgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHggKyBkeCwgMCwgeCArIGR4ICsgdywgMCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpOyBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgyNTUsMjU1LDI1NSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCBzKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCBzKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgdGlsdCwgMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdGlsdCwgMCk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYSBkYXJrZXIgZmlsbSBpbiB0aGUgbG93ZXN0IHRlbnRoOiB0aGUgZGFzaCAvIGNvd2wgc2hhZG93IGJlaGluZCB0aGUgcGFuZVxuICAgIGNvbnN0IGczID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAwLjg4KTtcbiAgICBnMy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC41NSlgKTsgZzMuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGczOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgb3B0czogeyB1U2NhbGU/OiBudW1iZXIsIHRvcENsZWFuPzogYm9vbGVhbiB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgY29uc3QgdXMgPSBvcHRzLnVTY2FsZSA/PyBzY2FsZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICBsZXQgdiA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICAgIC8vIEEgdGlsZSBrZXllZCBvbiBoZWlnaHQgY2Fubm90IHRlbGwgYSBib25uZXQgZnJvbSBhIGRvb3IgYXQgdGhlIHNhbWUgaGVpZ2h0LCBhbmQgYSBib25uZXRcbiAgICAvLyBpcyBjbGVhbiB3aGVyZSBhIGRvb3IgaXMgc3ByYXllZDogYHRvcENsZWFuYCBzZW5kcyBldmVyeSB1cHdhcmQgZmFjZSBpbnRvIHRoZSB0aWxlJ3MgdG9wXG4gICAgLy8gYmFuZCAodiAwLjc1Li4wLjk1KSwgYWJvdmUgYW55IHdhc2gsIHdoZXJlIG9ubHkgdGhlIGR1c3QgZmlsbSBhcHBsaWVzLlxuICAgIGlmIChvcHRzLnRvcENsZWFuICYmIGF5ID49IDAuOCkgdiA9IDAuNzUgKyAwLjIgKiAodiAtIE1hdGguZmxvb3IodikpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyB1czsgdXZbaSAqIDIgKyAxXSA9IHY7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogU2VhbWxlc3MgYXJvdW5kLWJ5LXByb2ZpbGUgVVZzIGZvciBhIExhdGhlR2VvbWV0cnkgcmV2b2x2ZWQgYWJvdXQgWTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4XG4gKiAgKHRoZSBsYXRoZSBvcmRlcnMgaXRzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSBzbyB0aGUgZHVwbGljYXRlZFxuICogIHNlYW0gY29sdW1uIHJlYWRzIHUgPSByZXBlYXRzIGV4YWN0bHkgYW5kIFJlcGVhdFdyYXBwaW5nIGNsb3NlcyBpdDsgdiBwZXIgUFJPRklMRSBQT0lOVCBmcm9tXG4gKiAgYHZzYCAob25lIHZhbHVlIHBlciBwcm9maWxlIHBvaW50KSwgc28gdGhlIGNhbGxlciBkZWNpZGVzIHdoaWNoIHRpbGUgcm93cyBsYW5kIG9uIHRoZSB0cmVhZCBhbmRcbiAqICB3aGljaCBvbiB0aGUgc2lkZXdhbGxzLiBgcGl0Y2hgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzIGFyb3VuZCB0aGUgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIHZzOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gcGl0Y2gpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCksIGogPSBpICUgcG9pbnRDb3VudDtcbiAgICB1dltpICogMl0gPSAocyAvIHNlZykgKiByZXA7IHV2W2kgKiAyICsgMV0gPSB2c1tNYXRoLm1pbihqLCB2cy5sZW5ndGggLSAxKV07XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogUGluIGV2ZXJ5IFVWIG9mIGEgZ2VvbWV0cnkgdG8gb25lIHRleGVsIC0tIHRoZSBXSElURSBiYW5kIGEgdHlyZSB0aWxlIGtlZXBzIGF0IGl0cyB0b3AgLS0gc28gYVxuICogIHJpbSwgaHViIG9yIHNwb2tlIHNoYXJpbmcgdGhlIHR5cmUncyBtYXRlcmlhbCByZW5kZXJzIGl0cyB2ZXJ0ZXggY29sb3VyIHVubXVsdGlwbGllZC4gKi9cbmZ1bmN0aW9uIHBpblVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB1OiBudW1iZXIsIHY6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1LCB2KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQW4gT1BFTiBzcG9rZWQgd2hlZWwgYWJvdXQgdGhlIFggYXhsZTogYSB0eXJlIFJJTkcgbGF0aGUgKGJlYWQsIHNpZGV3YWxsLCBzaG91bGRlciwgdHJlYWQgYW5kIGJhY2tcbiAqIGRvd24gdGhlIGZhciBzaWRlIC0tIGEgY2xvc2VkIHRvcnVzLWxpa2UgcHJvZmlsZSwgc28gbm90aGluZyBpcyBvcGVuIHRvIHRoZSBnYXRlKSwgYSByaW0gcmluZywgYVxuICogYnJha2UtZHJ1bSBodWIsIGFuZCB3aXJlIHNwb2tlcyBhcyB0aHJlZS1zaWRlZCBwcmlzbXMuIFRoZSBjbG9zZWQgZGlzaCBgd2hlZWxHZW9gIGZpbGxzIHRoZSB3aGVlbFxuICogd2l0aCBhIHNvbGlkIGRpc2MgdGhhdCBISURFUyB0aGUgc3Bva2VzIGl0IGNhcnJpZXM7IGEgbW90b3JjeWNsZSdzIHdpcmUgd2hlZWwgcmVhZHMgYnkgdGhlIGRheWxpZ2h0XG4gKiB0aHJvdWdoIGl0LCBzbyB0aGUgZGlzaCBpcyBnb25lLiBUeXJlIFVWcyBhcmUgYXJvdW5kLWJ5LXByb2ZpbGUgZm9yIGEgdHJlYWQgdGlsZSAoYG8ucGl0Y2hgIG1ldHJlc1xuICogcGVyIHJlcGVhdCBhcm91bmQ7IHYgMC41Li4wLjk2IGlzIHRoZSB0cmVhZGVkIHN0cmlwIG9mIGB0eXJlVGlsZWApLCByaW0sIGh1YiBhbmQgc3Bva2VzIGFyZSBwaW5uZWRcbiAqIHRvIHRoZSB0aWxlJ3Mgd2hpdGUgYmFuZC4gUmV2b2x2ZWQgYWJvdXQgWSwgdGhlbiBsYWlkIG9udG8gWC5cbiAqL1xuZnVuY3Rpb24gb3BlbldoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVywgcnIgPSByUmltICogMS4wMjtcbiAgY29uc3QgcHJvZjogbnVtYmVyW11bXSA9IFtcbiAgICBbcnIsIC1odyAqIDAuNzJdLCBbclR5cmUgKiAwLjkwLCAtaHcgKiAwLjk4XSwgW3JUeXJlICogMC45ODUsIC1odyAqIDAuNjZdLCBbclR5cmUsIC1odyAqIDAuMzBdLFxuICAgIFtyVHlyZSwgaHcgKiAwLjMwXSwgW3JUeXJlICogMC45ODUsIGh3ICogMC42Nl0sIFtyVHlyZSAqIDAuOTAsIGh3ICogMC45OF0sIFtyciwgaHcgKiAwLjcyXSwgW3JyLCAtaHcgKiAwLjcyXSxcbiAgXTtcbiAgLy8gdiBwZXIgcHJvZmlsZSBwb2ludDogc2lkZXdhbGwgMC41MC4uMC42NiwgdHJlYWQgMC42Ni4uMC44MCwgc2lkZXdhbGwgMC44MC4uMC45NiAoMC45Ni4uMSBpcyB3aGl0ZSlcbiAgY29uc3QgdnMgPSBbMC41MCwgMC41NiwgMC42NCwgMC42OCwgMC43OCwgMC44MiwgMC45MCwgMC45NiwgMC45Nl07XG4gIGNvbnN0IHR5cmUgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwcm9mLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBsYXRoZVVWKHR5cmUsIHByb2YubGVuZ3RoLCBzZWcsIG8ucGl0Y2ggPz8gMC4wNSwgdnMpO1xuICB0eXJlLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGNvbnN0IHJpbVByb2YgPSBbW3JSaW0gKiAwLjkwLCAtaHcgKiAwLjUwXSwgW3JSaW0sIC1odyAqIDAuNjJdLCBbclJpbSwgaHcgKiAwLjYyXSwgW3JSaW0gKiAwLjkwLCBodyAqIDAuNTBdLCBbclJpbSAqIDAuOTAsIC1odyAqIDAuNTBdXTtcbiAgY29uc3QgcmltID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocmltUHJvZi5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgcmltLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGNvbnN0IGh1YlIgPSBvLmh1YlIgPz8gclJpbSAqIDAuMzIsIGh1YlcgPSBvLmh1YlcgPz8gaHcgKiAyLjY7XG4gIGNvbnN0IGh1YiA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGh1YlIsIGh1YlIsIGh1YlcsIG8uaHViU2VnID8/IDEyKTtcbiAgY29uc3QgaHViQ2FwID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoaHViUiAqIDAuNTUsIGh1YlIgKiAwLjU1LCBodWJXICogMS4yNSwgby5odWJTZWcgPz8gMTIpO1xuICBjb25zdCBwYXJ0cyA9IFt0aW50R2VvKHR5cmUsIG8udHlyZUhleCksIHBpblVWKHRpbnRHZW8ocmltLCBvLnJpbUhleCksIDAuNSwgMC45ODUpLFxuICAgICAgICAgICAgICAgICBwaW5VVih0aW50R2VvKGh1Yiwgby5odWJIZXggPz8gby5yaW1IZXgpLCAwLjUsIDAuOTg1KSwgcGluVVYodGludEdlbyhodWJDYXAsIG8uY2FwSGV4ID8/IG8ucmltSGV4KSwgMC41LCAwLjk4NSldO1xuICBjb25zdCBnID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgICAgICAvLyBsYXRoZSBheGlzIFkgLT4gdGhlIGF4bGUgb24gWFxuICBjb25zdCBzcCA9IHBpblVWKHNwb2tlcyhodWJSICogMC45LCByUmltICogMC45NSwgaHcsIG8uc3Bva2VzID8/IDIwLCBvLnNwb2tlSGV4ID8/IDB4YjBhZWE5LCBvLnNwb2tlVCA/PyAwLjAwNiwgdHJ1ZSksIDAuNSwgMC45ODUpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtnLCBzcF0pO1xufVxuXG4vKiogVFlSRSB0aWxlLCBwb3J0ZWQgZnJvbSB0aGUgcHJvcCB0ZW1wbGF0ZTogYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKHZpYSBsYXRoZVVWKSwgdGhlIHN0cmlwIGF0XG4gKiAgdiAwLjUuLjAuOTYgYSB0cmVhZGVkIHR5cmUgKGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGN1dCBieSBzdGFnZ2VyZWQgc2lwZXMsIGJlYWQgcmluZ3MsIG1vdWxkXG4gKiAgbGluZXMsIHJvYWQgZHVzdCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzLCBncmFpbiksIHYgMC4uMC41IGEgd29ybiBzbGljaywgYW5kIHRoZSB0b3BcbiAqICA0JSBwdXJlIFdISVRFIHNvIHBpbm5lZCBwYXJ0cyByZW5kZXIgdGhlaXIgdmVydGV4IGNvbG91ci4gRHJhd24gYXMgUkFUSU9TIGFnYWluc3QgdGhlXG4gKiAgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdGhlIHR5cmUgdG9uZSBpcyBhdXRob3JlZCAxLjI3NXggaXRzIGFsYmVkbyBzbyBkdXN0XG4gKiAgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS4gYG8uYmFuZGAgaXMgdGhlIHRyZWFkJ3NcbiAqICBzaGFyZSBvZiB0aGUgc3RyaXAsIHRvcCB0byBib3R0b20sIGFuZCBtdXN0IGFncmVlIHdpdGggb3BlbldoZWVsR2VvJ3MgdHJlYWQgcm93cy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMzUsIDAuNjVdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY29uc3Qgd2hpdGUgPSBNYXRoLnJvdW5kKHMgKiAwLjA0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzICogcyAvIDY7IGkrKykgeyBjb25zdCB2ID0gYmFzZSArIE1hdGgucm91bmQoKHJuZCgpIC0gMC41KSAqIDIyKTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAyLCAyKTsgfVxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGIwIC0gaCAqIDAuMDMsIDAsIGIwICsgaCAqIDAuMDIpOyBzaC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMClgKTsgc2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDAuNDUpYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2g7IGN0eC5maWxsUmVjdCgwLCBiMCAtIGggKiAwLjAzLCBzLCBoICogMC4wNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J2fSwke3J2fSwke3J2fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4wNDUsIHMsIGggKiAwLjAxMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjk0LCBzLCBoICogMC4wMTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHttdn0sJHttdn0sJHttdn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMTEsIHMsIDIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC44OCwgcywgMik7XG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAod2hpdGUsIHMgLyAyLCB0cnVlKTsgICAvLyB2IDAuNS4uMC45NjogdHJlYWRlZFxuICAgIHN0cmlwKHMgLyAyLCBzLCBmYWxzZSk7ICAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHdoaXRlKTsgICAvLyB2IDAuOTYuLjE6IHdoaXRlLCBmb3IgcGlubmVkIHBhcnRzXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUIChwb3J0ZWQgZnJvbSB0aGUgcHJvcCB0ZW1wbGF0ZSk6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MVxuICogKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlciBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkXG4gKiBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXQgc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgY2FudmFzIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZ1xuICogYmV0d2VlbiBpdHMgcG9zdHMgbWludXMgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56O1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgcGFydHMgPSBbZ3JpZCgwLCBmYWxzZSksIGdyaWQoLXQsIHRydWUpXTtcbiAgY29uc3Qgc3RyaXAgPSAocHRzOiBudW1iZXJbXVtdW10sIG91dDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3AwLCBwMV0gb2YgcHRzKSB7XG4gICAgICBjb25zdCBxMCA9IHAwLCBxMSA9IHAxLCBxMiA9IFtwMVswXSwgcDFbMV0gLSB0LCBwMVsyXV0sIHEzID0gW3AwWzBdLCBwMFsxXSAtIHQsIHAwWzJdXTtcbiAgICAgIGNvbnN0IGUxID0gW3ExWzBdIC0gcTBbMF0sIHExWzFdIC0gcTBbMV0sIHExWzJdIC0gcTBbMl1dLCBlMiA9IFtxMlswXSAtIHEwWzBdLCBxMlsxXSAtIHEwWzFdLCBxMlsyXSAtIHEwWzJdXTtcbiAgICAgIGNvbnN0IG4gPSBbZTFbMV0gKiBlMlsyXSAtIGUxWzJdICogZTJbMV0sIGUxWzJdICogZTJbMF0gLSBlMVswXSAqIGUyWzJdLCBlMVswXSAqIGUyWzFdIC0gZTFbMV0gKiBlMlswXV07XG4gICAgICBjb25zdCB0cmkgPSBuWzBdICogb3V0WzBdICsgblsxXSAqIG91dFsxXSArIG5bMl0gKiBvdXRbMl0gPj0gMCA/IFtxMCwgcTEsIHEyLCBxMCwgcTIsIHEzXSA6IFtxMCwgcTIsIHExLCBxMCwgcTMsIHEyXTtcbiAgICAgIGZvciAoY29uc3QgcSBvZiB0cmkpIHsgcG9zLnB1c2gocVswXSwgcVsxXSwgcVsyXSk7IHV2LnB1c2goMCwgMCk7IH1cbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbWChpKSwgSGhbal1baV0sIFooaildO1xuICBjb25zdCBlMDogbnVtYmVyW11bXVtdID0gW10sIGUxOiBudW1iZXJbXVtdW10gPSBbXSwgZTI6IG51bWJlcltdW11bXSA9IFtdLCBlMzogbnVtYmVyW11bXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykgeyBlMC5wdXNoKFt0b3AoaSwgMCksIHRvcChpICsgMSwgMCldKTsgZTEucHVzaChbdG9wKGksIG56KSwgdG9wKGkgKyAxLCBueildKTsgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIHsgZTIucHVzaChbdG9wKDAsIGopLCB0b3AoMCwgaiArIDEpXSk7IGUzLnB1c2goW3RvcChueCwgaiksIHRvcChueCwgaiArIDEpXSk7IH1cbiAgcGFydHMucHVzaChzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVHVrVHVrTW9kZWwob3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gbmV3IFRIUkVFLkdyb3VwKCk7XG4gIHJvb3QubmFtZSA9ICdUdWstdHVrJztcblxuICBjb25zdCBtYXRlcmlhbHMgPSBidWlsZE1hdGVyaWFscyhvcHRpb25zKTtcbiAgY29uc3Qgbm9kZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+ID0ge307XG4gIGNvbnN0IHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiA9IHt9O1xuICBjb25zdCBjb2xsaWRlcnM6IFJlY29yZDxzdHJpbmcsIHVua25vd24+ID0ge307XG4gIGNvbnN0IGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPiA9IHt9O1xuICBjb25zdCBjYXN0U2hhZG93ID0gb3B0aW9ucy5jYXN0U2hhZG93ID8/IHRydWU7XG4gIGNvbnN0IHJlY2VpdmVTaGFkb3cgPSBvcHRpb25zLnJlY2VpdmVTaGFkb3cgPz8gdHJ1ZTtcblxuICAvKipcbiAgICogQSBtYXRlcmlhbCB3aXRoIGB2ZXJ0ZXhDb2xvcnNgIHJlYWRzIGEgYGNvbG9yYCBhdHRyaWJ1dGUgb3V0IG9mIEVWRVJZIGdlb21ldHJ5IGJvdW5kIHRvIGl0LCBhbmRcbiAgICogYSBnZW9tZXRyeSB0aGF0IGhhcyBub25lIGhhbmRzIHRoZSBzaGFkZXIgYW4gdW5kZWZpbmVkIGF0dHJpYnV0ZSAtLSB3aGljaCBjb21lcyBiYWNrIGFzXG4gICAqICgwLCAwLCAwKSBhbmQgcmVuZGVycyB0aGUgbWVzaCBCTEFDSy4gVGhhdCBpcyBub3QgYSBoeXBvdGhldGljYWw6IHRoZSB1Ym9zb3QncyB3YWxsIGJvZHkgYW5kXG4gICAqIGl0cyBlaWdodCBib3VuZGFyeSBzdG9uZXMgc2hpcHBlZCBhcyBibGFjayBzaWxob3VldHRlcyBmcm9tIG9uZSB0aW50ZWQgcGxhdGZvcm0gc2hhcmluZyB0aGVpclxuICAgKiBzdG9uZSBtYXRlcmlhbCwgYW5kIHRoZSBmYWlsdXJlIGlzIHNpbGVudCBiZWNhdXNlIHRoZSB0aW50ZWQgY29tcG9uZW50IGl0c2VsZiBsb29rcyBwZXJmZWN0LlxuICAgKlxuICAgKiBBbiBJbnN0YW5jZWRNZXNoIGhpZGVzIGl0IC0tIGl0IGZhbGxzIGJhY2sgdG8gaW5zdGFuY2VDb2xvciBhbmQgY29tZXMgb3V0IHdoaXRlIC0tIHNvIHRoZSBzYW1lXG4gICAqIG1pc3Rha2Ugb24gdGhlIGNoZWRpJ3MgbmljaGUgZnJhbWVzIHJlbmRlcmVkIGNvcnJlY3RseSBhbmQgdGF1Z2h0IG5vdGhpbmcuIEd1YXJkIGl0IGhlcmUsIG9uY2UsXG4gICAqIGZvciBldmVyeSBnZW9tZXRyeTogbm8gY29sb3IgYXR0cmlidXRlIGFuZCBhIHZlcnRleENvbG9ycyBtYXRlcmlhbCBtZWFucyBmaWxsIHdpdGggd2hpdGUuXG4gICAqL1xuICBmdW5jdGlvbiBndWFyZFZlcnRleENvbG9ycyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKSB7XG4gICAgaWYgKCFtYXQgfHwgIW1hdC52ZXJ0ZXhDb2xvcnMgfHwgZ2VvLmdldEF0dHJpYnV0ZSgnY29sb3InKSkgcmV0dXJuO1xuICAgIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICAgIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KG4gKiAzKS5maWxsKDEpLCAzKSk7XG4gIH1cblxuICBmdW5jdGlvbiBhZGQoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBtZXNoLm5hbWUgPSBuYW1lOyBtZXNoLmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBtZXNoLnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIG5vZGUuYWRkKG1lc2gpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gbWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIG1lc2g7XG4gIH1cbiAgZnVuY3Rpb24gYWRkSW5zdChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcsIG1hdHM6IFRIUkVFLk1hdHJpeDRbXSwgY29scz86IG51bWJlcltdKSB7XG4gICAgY29uc3Qgbm9kZSA9IG5ldyBUSFJFRS5Hcm91cCgpOyBub2RlLm5hbWUgPSBuYW1lICsgJ19fbm9kZSc7XG4gICAgZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvLCBtYXRlcmlhbHNbbWF0SWRdKTtcbiAgICBjb25zdCBpbnN0ID0gbmV3IFRIUkVFLkluc3RhbmNlZE1lc2goZ2VvLCBtYXRlcmlhbHNbbWF0SWRdLCBtYXRzLmxlbmd0aCk7XG4gICAgaW5zdC5uYW1lID0gbmFtZTsgaW5zdC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgaW5zdC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1hdHMubGVuZ3RoOyBpKyspIGluc3Quc2V0TWF0cml4QXQoaSwgbWF0c1tpXSk7XG4gICAgaWYgKGNvbHMpIHtcbiAgICAgIC8vIHNldENvbG9yQXQgTVVMVElQTElFUyB3aXRoIG1hdGVyaWFsLmNvbG9yLCBzbyBhbiBpbnN0YW5jZWQgbWF0ZXJpYWwgY2FycnlpbmcgcGVyLWluc3RhbmNlXG4gICAgICAvLyB0b25lcyBtdXN0IGJlIHdoaXRlIG9yIGV2ZXJ5IHRvbmUgY29tZXMgb3V0IGRhcmtlbmVkIGJ5IHRoZSBiYXNlLlxuICAgICAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcigpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xzLmxlbmd0aDsgaSsrKSBpbnN0LnNldENvbG9yQXQoaSwgYy5zZXRIZXgoY29sc1tpXSkpO1xuICAgICAgaWYgKGluc3QuaW5zdGFuY2VDb2xvcikgaW5zdC5pbnN0YW5jZUNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaW5zdC5pbnN0YW5jZU1hdHJpeC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgbm9kZS5hZGQoaW5zdCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBpbnN0IGFzIHVua25vd24gYXMgVEhSRUUuTWVzaDsgY29sbGlkZXJzW2lkXSA9IG51bGw7XG4gICAgcmV0dXJuIGluc3Q7XG4gIH1cbiAgLyoqIEZvdXIgaW5zdGFuY2VzIGF0IDkwLWRlZ3JlZSB5YXcgYWJvdXQgdGhlIGF4aXMgLS0gdGhlIGNvcm5lci9mYWNlIHJlcGV0aXRpb24gdGhhdCBldmVyeVxuICAgKiAgYnVpbGRpbmcgaW4gdGhpcyBzZXQgdXNlcyBmb3IgbmljaGVzLCBmaW5pYWxzLCBib3VuZGFyeSBzdG9uZXMgYW5kIGNvcm5lciBkb21lcy4gKi9cbiAgZnVuY3Rpb24gcXVhZChyYWRpdXM6IG51bWJlciwgeTogbnVtYmVyLCBwaGFzZSA9IDApOiBUSFJFRS5NYXRyaXg0W10ge1xuICAgIHJldHVybiBbMCwgMSwgMiwgM10ubWFwKChpKSA9PiB7XG4gICAgICBjb25zdCBhID0gcGhhc2UgKyBpICogTWF0aC5QSSAvIDI7XG4gICAgICByZXR1cm4gbmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhNYXRoLnNpbihhKSAqIHJhZGl1cywgeSwgTWF0aC5jb3MoYSkgKiByYWRpdXMpLFxuICAgICAgICBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21BeGlzQW5nbGUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGEpLFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMygxLCAxLCAxKSk7XG4gICAgfSk7XG4gIH1cblxuICBjb25zdCBHID0gQ09ORklHLmdlb21ldHJ5IGFzIGFueTtcblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1vdG9yY3ljbGUgKHNoYXJlZCB0ZW1wbGF0ZSkgKi9cbiAgY29uc3QgQiA9IEcuYmlrZSBhcyBhbnk7XG4gIGNvbnN0IG94ID0gQi54ID8/IDA7ICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGUgYmlrZSdzIGNlbnRyZWxpbmUgaW4geCAoYSBzaWRlY2FyIG9mZnNldHMgaXQpXG4gIGNvbnN0IG96ID0gQi56ID8/IDA7ICAgICAgICAgICAgICAgICAgICAgICAvLyBhbmQgYWxvbmcgeiwgc28gYSByaWcgY2FuIGJlIHJlLWNlbnRyZWQgb24gaXRzIG9yaWdpblxuICBjb25zdCByVyA9IEIuciwgcmltUiA9IEIucmltLCBodyA9IEIuaGFsZlc7XG4gIGNvbnN0IHpGID0gQi56RiwgelIgPSBCLnpSO1xuICBjb25zdCBQID0gQi5wYWludEhleCwgQ0ggPSBCLmNocm9tZUhleCA/PyAweGI5YmNiZiwgREsgPSBCLmRhcmtIZXggPz8gMHg0YTQ3NDI7XG5cbiAgLy8gUEFJTlRFRCBCT0RZV09SSzogbGVnIHNoaWVsZCwgZnJvbnQgZmVuZGVyLCByZWFyIGJvZHksIHRhbmsvc3RlcC10aHJvdWdoIGNvdmVyIC0tIG9uZSBtZXJnZS5cbiAgY29uc3QgcGFpbnRHZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAoY29uc3QgZXggb2YgKEIucGFpbnRFeHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnID0gc2lkZUV4dHJ1ZGUoZXgucG9seSwgZXgud2lkdGgsIGV4LnNoYXBlID8/IHt9KTsgaWYgKGV4LngpIGcudHJhbnNsYXRlKGV4LngsIDAsIDApO1xuICAgIGcudHJhbnNsYXRlKG94LCAwLCBveik7IHBhaW50R2Vvcy5wdXNoKHRpbnRHZW8oZywgZXguaGV4ID8/IFApKTtcbiAgfVxuICBmb3IgKGNvbnN0IGIgb2YgKEIucGFpbnRCb3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgeyBjb25zdCBnID0gcmJveChiLnNsaWNlKDEpKTsgZy50cmFuc2xhdGUob3gsIDAsIG96KTsgcGFpbnRHZW9zLnB1c2godGludEdlbyhnLCBiWzBdKSk7IH1cbiAgZm9yIChjb25zdCB0IG9mIChCLnBhaW50VHViZXMgPz8gW10pIGFzIGFueVtdKSB7IGNvbnN0IGcgPSB0dWJlKHQucHRzLm1hcCgocDogbnVtYmVyW10pID0+IFtwWzBdICsgb3gsIHBbMV0sIHBbMl0gKyBvel0pLCB0LnIsIHQuc2VnID8/IDgsIHVuZGVmaW5lZCwgdC5vcGVuID8/IGZhbHNlKTsgcGFpbnRHZW9zLnB1c2godGludEdlbyhnLCB0LmhleCA/PyBQKSk7IH1cbiAgY29uc3QgYm9keUdlbyA9IGhlaWdodFVWKG1lcmdlR2VvcyhwYWludEdlb3MpLCBHLm11ZFNjYWxlID8/IDEuMik7XG4gIGFkZCgnYm9keScsIEIuYm9keU5hbWUgPz8gJ0JvZHl3b3JrJywgYm9keUdlbywgJ3BhaW50Jyk7XG4gIGlmIChHLmNvbGxpZGVyKSBjb2xsaWRlcnNbJ2JvZHknXSA9IEcuY29sbGlkZXI7XG5cbiAgLy8gRlJBTUUsIEZPUktTLCBCQVJTLCBFTkdJTkUsIFNFQVQsIFJBQ0ssIExBTVBTIC0tIGV2ZXJ5IHRvbmUgYSB2ZXJ0ZXggY29sb3VyIG9uIG9uZSB3aGl0ZSB0cmltLlxuICBjb25zdCB0cmltR2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCBzaGlmdCA9IChwdHM6IG51bWJlcltdW10pID0+IHB0cy5tYXAoKHApID0+IFtwWzBdICsgb3gsIHBbMV0sIHBbMl0gKyBvel0pO1xuICBmb3IgKGNvbnN0IHQgb2YgKEIudHViZXMgPz8gW10pIGFzIGFueVtdKSB0cmltR2Vvcy5wdXNoKHR1YmUoc2hpZnQodC5wdHMpLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4ID8/IENILCB0Lm9wZW4gPz8gZmFsc2UpKTtcbiAgY29uc3QgdGI6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChjb25zdCBiIG9mIChCLnRyaW0gPz8gW10pIGFzIG51bWJlcltdW10pIHRiLnB1c2goW2JbMF0sIGJbMV0gKyBveCwgYlsyXSwgYlszXSArIG96LCAuLi5iLnNsaWNlKDQpXSk7XG4gIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChCLnRyaW1NaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIHRiLnB1c2goW2JbMF0sIGJbMV0gKyBveCwgYlsyXSwgYlszXSArIG96LCAuLi5iLnNsaWNlKDQpXSk7XG4gIGlmICh0Yi5sZW5ndGgpIHRyaW1HZW9zLnB1c2godGludGVkQm94ZXModGIpKTtcbiAgZm9yIChjb25zdCBjIG9mIChCLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGMucnQsIGMucmIsIGMuaCwgYy5zZWcgPz8gMTIpO1xuICAgIGlmIChjLnJ4KSBnLnJvdGF0ZVgoYy5yeCk7IGlmIChjLnJ6KSBnLnJvdGF0ZVooYy5yeik7XG4gICAgZy50cmFuc2xhdGUoYy5hdFswXSArIG94LCBjLmF0WzFdLCBjLmF0WzJdICsgb3opO1xuICAgIHRyaW1HZW9zLnB1c2godGludEdlbyhnLCBjLmhleCA/PyBESykpO1xuICB9XG4gIC8vIGV4dHJhIGxvb3NlIGxhdGhlcyAoYSBzaWRlY2FyJ3MgdGhpcmQgd2hlZWwsIGEgdHJhaWxlcidzIHNtYWxsIHdoZWVscykgbWVyZ2VkIGludG8gdGhlIHRyaW1cbiAgZm9yIChjb25zdCB3IG9mIChHLmxvb3NlV2hlZWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGcgPSBtZXJnZUdlb3MoW3doZWVsR2VvKHcuciwgdy5yaW0sIHcuaGFsZlcsIHcuc2VnID8/IDE4LCB3LnR5cmVIZXgsIHcucmltSGV4LCB3LmRpc2ggPz8gMC41LCB3LnJpbUJhbmQgPz8gNCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHcuc3Bva2VzID8gW3Nwb2tlcyh3LnJpbSAqIDAuMjgsIHcucmltICogMC45OCwgdy5oYWxmVywgdy5zcG9rZXMsIHcuc3Bva2VIZXggPz8gQ0gpXSA6IFtdKV0pO1xuICAgIGcudHJhbnNsYXRlKHcuYXRbMF0sIHcuYXRbMV0sIHcuYXRbMl0pOyB0cmltR2Vvcy5wdXNoKGcpO1xuICB9XG4gIC8vIGxhdGhlcyBvbiB0aGUgYmlrZSAoYSBoZWFkbGFtcCBuYWNlbGxlLCBhIGJlemVsKSBhbmQgb24gdGhlIHJpZzogW3JhZGl1cywgYXhpYWxdIHByb2ZpbGVzXG4gIC8vIHJldm9sdmVkIGFib3V0IFksIHRoZW4gcm90YXRlZCBvbnRvIHRoZWlyIGF4aXMgYW5kIHBsYWNlZFxuICBmb3IgKGNvbnN0IGwgb2YgWy4uLigoQi5sYXRoZXMgPz8gW10pIGFzIGFueVtdKS5tYXAoKGw6IGFueSkgPT4gKHsgLi4ubCwgYXQ6IFtsLmF0WzBdICsgb3gsIGwuYXRbMV0sIGwuYXRbMl0gKyBvel0gfSkpLCAuLi4oKEcubGF0aGVzID8/IFtdKSBhcyBhbnlbXSldKSB7XG4gICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMik7XG4gICAgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgdHJpbUdlb3MucHVzaCh0aW50R2VvKGcsIGwuaGV4ID8/IENIKSk7XG4gIH1cbiAgLy8gZHJhcGVkIHNoZWV0cyAoYSBjYW52YXMgY2Fub3B5KSBhcyBoZWlnaHQgZ3JpZHMgLS0gY2xvdGgsIG5vdCBhIHNsYWJcbiAgZm9yIChjb25zdCBzIG9mIChHLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godGludEdlbyhzaGVldChzKSwgcy5oZXgpKTtcbiAgZm9yIChjb25zdCB0IG9mIChHLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgdHJpbUdlb3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4LCB0Lm9wZW4gPz8gZmFsc2UpKTtcbiAgZm9yIChjb25zdCBiIG9mIChHLnRyaW0gPz8gW10pIGFzIG51bWJlcltdW10pIHRyaW1HZW9zLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChHLnRyaW1NaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIHRyaW1HZW9zLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gIGFkZCgndHJpbScsIEIudHJpbU5hbWUgPz8gJ0ZyYW1lLCBmb3JrcywgZW5naW5lLCBzZWF0IGFuZCBmaXR0aW5ncycsIG1lcmdlR2Vvcyh0cmltR2VvcyksICd0cmltJyk7XG5cbiAgLy8gV0hFRUxTOiBvbmUgc3Bva2VkIGxhdGhlLCBpbnN0YW5jZWQgYXQgZXZlcnkgaHViIHRoZSBjZmcgbGlzdHMsIGVhY2ggYSBuYW1lZCBwaXZvdC5cbiAgLy8gYG9wZW5gOiBhIHdpcmUgd2hlZWwgd2l0aCBkYXlsaWdodCB0aHJvdWdoIGl0ICh0eXJlIHJpbmcsIHJpbSByaW5nLCBkcnVtIGh1YiwgcHJpc20gc3Bva2VzKSBhbmRcbiAgLy8gdHJlYWQgVVZzIGZvciBhIHR5cmUgdGlsZSBvbiBgQi53aGVlbE1hdGVyaWFsYDsgb3RoZXJ3aXNlIHRoZSBjbG9zZWQgZGlzaGVkIGxhdGhlLlxuICBjb25zdCB3aGVlbEcgPSBCLm9wZW5cbiAgICA/IG9wZW5XaGVlbEdlbyhyVywgcmltUiwgaHcsIEIuc2VnID8/IDIwLCB7IC4uLkIub3BlbiwgdHlyZUhleDogQi50eXJlSGV4LCByaW1IZXg6IEIucmltSGV4LCBzcG9rZXM6IEIuc3Bva2VzLCBzcG9rZUhleDogQi5zcG9rZUhleCA/PyBDSCB9KVxuICAgIDogbWVyZ2VHZW9zKFt3aGVlbEdlbyhyVywgcmltUiwgaHcsIEIuc2VnID8/IDIwLCBCLnR5cmVIZXgsIEIucmltSGV4LCBCLmRpc2ggPz8gMC41LCBCLnJpbUJhbmQgPz8gNCksXG4gICAgICAgICAgICAgICAgIC4uLihCLnNwb2tlcyA/IFtzcG9rZXMocmltUiAqIDAuMjgsIHJpbVIgKiAwLjk4LCBodywgQi5zcG9rZXMsIEIuc3Bva2VIZXggPz8gQ0gpXSA6IFtdKV0pO1xuICBjb25zdCB3aGVlbE1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHAgb2YgQi5wb3NpdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgIHdoZWVsTWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCksIG5ldyBUSFJFRS5WZWN0b3IzKHBbM10gPz8gMSwgcFszXSA/PyAxLCBwWzNdID8/IDEpKSk7XG4gIH1cbiAgYWRkSW5zdCgnd2hlZWxzJywgJ1doZWVscycsIHdoZWVsRywgQi53aGVlbE1hdGVyaWFsID8/ICd0cmltJywgd2hlZWxNYXRzKTtcblxuICAvLyBFWFRSQSBjb21wb25lbnRzIChhIHNpZGVjYXIgYm94LCBhIGNhbnZhcyBjYW5vcHksIGEgdHVrLXR1ayBjYWJpbikgLS0gb3duIG1hdGVyaWFsIGVhY2guXG4gIGZvciAoY29uc3QgZXggb2YgKEcuZXh0cmFzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChleC5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoZXguYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChleC50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgZSBvZiAoZXguZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7IGNvbnN0IGcgPSBzaWRlRXh0cnVkZShlLnBvbHksIGUud2lkdGgsIGUuc2hhcGUgPz8ge30pOyBpZiAoZS54KSBnLnRyYW5zbGF0ZShlLngsIDAsIDApOyBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTsgfVxuICAgIGZvciAoY29uc3QgYyBvZiAoZXguY3lscyA/PyBbXSkgYXMgYW55W10pIHsgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGMucnQsIGMucmIsIGMuaCwgYy5zZWcgPz8gMTIpOyBpZiAoYy5yeCkgZy5yb3RhdGVYKGMucngpOyBpZiAoYy5yeikgZy5yb3RhdGVaKGMucnopOyBnLnRyYW5zbGF0ZShjLmF0WzBdLCBjLmF0WzFdLCBjLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGMuaGV4KSk7IH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKGV4LnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGlmIChleC51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGFkZChleC5pZCwgZXgubmFtZSwgZywgZXgubWF0ZXJpYWwpO1xuICB9XG5cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlVHVrVHVrTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF1Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUDtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFVBQVU7QUFBQSxJQUNSO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxRQUFRO0FBQUEsTUFDUixXQUFXO0FBQUEsTUFDWCxXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsUUFDZjtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsWUFDUCxVQUFVO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDUDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFFBQ1g7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsWUFDTjtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsS0FBSztBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsWUFDTjtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVM7QUFBQSxVQUNULEtBQUs7QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLFlBQVk7QUFBQSxjQUNWLEtBQUs7QUFBQSxZQUNQO0FBQUEsWUFDQSxTQUFTO0FBQUEsWUFDVCxZQUFZO0FBQUEsWUFDWixhQUFhO0FBQUEsWUFDYixVQUFVO0FBQUEsVUFDWjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1o7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRLENBQUM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQU9GLFNBQVMsVUFBVSxNQUFvRDtBQUNyRSxRQUFNLFFB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
