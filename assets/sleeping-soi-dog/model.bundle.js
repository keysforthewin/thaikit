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

// scratch/sleeping-soi-dog/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createObjectModel: () => createObjectModel,
  createSleepingSoiDogModel: () => createSleepingSoiDogModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "sleeping-soi-dog",
  "name": "Sleeping Soi Dog",
  "exportName": "SleepingSoiDog",
  "envelope": "Envelope 0.35 x 0.28 x 0.95 m, origin base-center, +Y up, +Z the head end, legs toward +X.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=6 materials, <=6 unique geometries.",
  "materials": [
    {
      "id": "fur",
      "color": 16777215,
      "roughness": 0.9,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "fur",
      "kind": "fur",
      "size": 512,
      "seed": 231,
      "tone": [
        0.7,
        0.63,
        0.55
      ],
      "strokes": 5200,
      "length": 0.024,
      "clouds": 24,
      "patches": 3,
      "bump": 25e-4
    }
  ],
  "geometry": {
    "components": [
      {
        "id": "body",
        "name": "Body, legs and tail",
        "material": "fur",
        "uv": "world",
        "uvScale": 0.3,
        "collider": {
          "shape": "convex",
          "localCenter": [
            0.03,
            0.085,
            0
          ],
          "halfExtents": [
            0.175,
            0.085,
            0.475
          ],
          "notes": "Declared on the asset as convex: one hull over the sprawled dog, 0.17 m high as built."
        },
        "tint": {
          "axis": "x",
          "from": -0.055,
          "to": 0.04000000000000001,
          "c0": 12159573,
          "c1": 14209736,
          "keep": true
        },
        "tubesAlong": [
          {
            "stations": [
              [
                -0.36,
                -0.045,
                0.066,
                0.024,
                0.024
              ],
              [
                -0.35866666666666663,
                -0.045518518518518514,
                0.06625925925925927,
                0.029777777777777775,
                0.02814814814814815
              ],
              [
                -0.35666666666666674,
                -0.046259259259259264,
                0.06662962962962964,
                0.038,
                0.034074074074074076
              ],
              [
                -0.354,
                -0.047,
                0.067,
                0.046,
                0.04
              ],
              [
                -0.3507407407407407,
                -0.04774074074074074,
                0.06722222222222224,
                0.05296296296296296,
                0.045481481481481484
              ],
              [
                -0.3468148148148148,
                -0.048481481481481487,
                0.06744444444444445,
                0.0597037037037037,
                0.05096296296296295
              ],
              [
                -0.342,
                -0.049,
                0.068,
                0.066,
                0.056
              ],
              [
                -0.3363703703703704,
                -0.049296296296296296,
                0.0691111111111111,
                0.07177777777777779,
                0.06051851851851852
              ],
              [
                -0.32985185185185184,
                -0.04937037037037038,
                0.07055555555555555,
                0.07711111111111112,
                0.0645925925925926
              ],
              [
                -0.322,
                -0.049,
                0.072,
                0.082,
                0.068
              ],
              [
                -0.3143703703703704,
                -0.047740740740740736,
                0.07348148148148148,
                0.08681481481481482,
                0.07070370370370371
              ],
              [
                -0.30540740740740735,
                -0.046037037037037036,
                0.07496296296296297,
                0.09118518518518517,
                0.07274074074074074
              ],
              [
                -0.29,
                -0.045,
                0.076,
                0.094,
                0.074
              ],
              [
                -0.26503703703703707,
                -0.04551851851851852,
                0.07618518518518518,
                0.0941111111111111,
                0.074
              ],
              [
                -0.2336296296296296,
                -0.046703703703703706,
                0.07592592592592592,
                0.09266666666666666,
                0.07322222222222222
              ],
              [
                -0.2,
                -0.047,
                0.076,
                0.092,
                0.073
              ],
              [
                -0.16518518518518518,
                -0.04544444444444444,
                0.07681481481481481,
                0.09322222222222223,
                0.07399999999999998
              ],
              [
                -0.12814814814814818,
                -0.043000000000000003,
                0.07796296296296297,
                0.09522222222222222,
                0.07555555555555554
              ],
              [
                -0.09,
                -0.040999999999999995,
                0.079,
                0.097,
                0.077
              ],
              [
                -0.05037037037037037,
                -0.03981481481481481,
                0.0798888888888889,
                0.09848148148148149,
                0.0782962962962963
              ],
              [
                -0.009629629629629651,
                -0.03907407407407408,
                0.08066666666666666,
                0.09974074074074074,
                0.07948148148148147
              ],
              [
                0.03,
                -0.039,
                0.081,
                0.1,
                0.08
              ],
              [
                0.0687037037037037,
                -0.03959259259259259,
                0.08074074074074074,
                0.09896296296296296,
                0.0795925925925926
              ],
              [
                0.1062962962962963,
                -0.04085185185185185,
                0.08003703703703703,
                0.09692592592592593,
                0.07851851851851852
              ],
              [
                0.14,
                -0.043,
                0.079,
                0.094,
                0.077
              ],
              [
                0.1685185185185185,
                -0.04648148148148148,
                0.07751851851851851,
                0.08992592592592594,
                0.07500000000000001
              ],
              [
                0.1931481481481481,
                -0.05085185185185186,
                0.07570370370370369,
                0.08496296296296298,
                0.07255555555555557
              ],
              [
                0.215,
                -0.055,
                0.074,
                0.08,
                0.07
              ],
              [
                0.23437037037037037,
                -0.0587037037037037,
                0.07251851851851851,
                0.07518518518518519,
                0.0674074074074074
              ],
              [
                0.250962962962963,
                -0.06218518518518519,
                0.07114814814814813,
                0.07037037037037036,
                0.0647037037037037
              ],
              [
                0.265,
                -0.065,
                0.07,
                0.066,
                0.062
              ],
              [
                0.27622222222222215,
                -0.06692592592592594,
                0.06911111111111111,
                0.06333333333333332,
                0.0602962962962963
              ],
              [
                0.28488888888888886,
                -0.06818518518518518,
                0.06844444444444445,
                0.061111111111111116,
                0.058592592592592585
              ],
              [
                0.292,
                -0.069,
                0.068,
                0.056,
                0.054
              ],
              [
                0.2978518518518518,
                -0.0692962962962963,
                0.06785185185185184,
                0.04459259259259259,
                0.043333333333333335
              ],
              [
                0.3021481481481481,
                -0.06914814814814815,
                0.06792592592592593,
                0.0302962962962963,
                0.029777777777777778
              ],
              [
                0.305,
                -0.069,
                0.068,
                0.02,
                0.02
              ]
            ],
            "seg": 16,
            "hex": 16777215
          }
        ],
        "tubes": [
          {
            "pts": [
              [
                -0.0049999999999999975,
                0.055,
                0.205
              ],
              [
                0.085,
                0.042,
                0.18
              ],
              [
                0.168,
                0.032,
                0.135
              ]
            ],
            "r": 0.029,
            "seg": 8,
            "hex": 16777215
          },
          {
            "pts": [
              [
                -0.009999999999999995,
                0.105,
                0.165
              ],
              [
                0.08,
                0.078,
                0.14
              ],
              [
                0.165,
                0.062,
                0.09
              ]
            ],
            "r": 0.028,
            "seg": 8,
            "hex": 16777215
          },
          {
            "pts": [
              [
                0.065,
                0.048,
                -0.3
              ],
              [
                0.12,
                0.04,
                -0.36
              ],
              [
                0.168,
                0.032,
                -0.395
              ]
            ],
            "r": 0.026,
            "seg": 8,
            "hex": 16777215
          },
          {
            "pts": [
              [
                0.06,
                0.082,
                -0.275
              ],
              [
                0.115,
                0.068,
                -0.335
              ],
              [
                0.165,
                0.058,
                -0.37
              ]
            ],
            "r": 0.026,
            "seg": 8,
            "hex": 16777215
          },
          {
            "pts": [
              [
                -0.049999999999999996,
                0.06,
                -0.33
              ],
              [
                -0.015,
                0.045,
                -0.395
              ],
              [
                0.015,
                0.034,
                -0.432
              ]
            ],
            "r": 0.022,
            "seg": 7,
            "hex": 16777215
          },
          {
            "pts": [
              [
                0.015,
                0.034,
                -0.432
              ],
              [
                0.043,
                0.025,
                -0.45
              ],
              [
                0.07,
                0.019,
                -0.462
              ]
            ],
            "r": 0.015,
            "seg": 7,
            "hex": 16777215
          }
        ],
        "ellipsoids": [
          [
            16777215,
            0.020000000000000004,
            0.054,
            -0.275,
            0.069478150704935,
            0.042,
            0.042,
            0,
            0.507098504392337,
            0,
            12,
            8
          ],
          [
            16777215,
            75e-4,
            0.0835,
            -0.25,
            0.07614851674806504,
            0.047,
            0.047,
            0,
            0.44441920990109907,
            0,
            12,
            8
          ],
          [
            16777215,
            0.085,
            0.042,
            0.18,
            0.034,
            0.034,
            0.034,
            0,
            0,
            0,
            8,
            5
          ],
          [
            16777215,
            0.08,
            0.078,
            0.14,
            0.033,
            0.033,
            0.033,
            0,
            0,
            0,
            8,
            5
          ],
          [
            16777215,
            0.12,
            0.04,
            -0.36,
            0.031,
            0.031,
            0.031,
            0,
            0,
            0,
            8,
            5
          ],
          [
            16777215,
            0.115,
            0.068,
            -0.335,
            0.031,
            0.031,
            0.031,
            0,
            0,
            0,
            8,
            5
          ],
          [
            16777215,
            0.17400000000000002,
            0.032,
            0.135,
            0.042,
            0.033,
            0.035,
            0,
            0,
            0,
            8,
            5
          ],
          [
            8024944,
            0.198,
            0.028,
            0.135,
            0.014,
            0.022,
            0.026,
            0,
            0,
            0,
            8,
            6
          ],
          [
            16777215,
            0.171,
            0.062,
            0.09,
            0.042,
            0.033,
            0.035,
            0,
            0,
            0,
            8,
            5
          ],
          [
            8024944,
            0.195,
            0.057999999999999996,
            0.09,
            0.014,
            0.022,
            0.026,
            0,
            0,
            0,
            8,
            6
          ],
          [
            16777215,
            0.17400000000000002,
            0.032,
            -0.395,
            0.042,
            0.033,
            0.035,
            0,
            0,
            0,
            8,
            5
          ],
          [
            8024944,
            0.198,
            0.028,
            -0.395,
            0.014,
            0.022,
            0.026,
            0,
            0,
            0,
            8,
            6
          ],
          [
            16777215,
            0.171,
            0.058,
            -0.37,
            0.042,
            0.033,
            0.035,
            0,
            0,
            0,
            8,
            5
          ],
          [
            8024944,
            0.195,
            0.054000000000000006,
            -0.37,
            0.014,
            0.022,
            0.026,
            0,
            0,
            0,
            8,
            6
          ],
          [
            16777215,
            0.015,
            0.034,
            -0.432,
            0.023,
            0.023,
            0.023,
            0,
            0,
            0,
            8,
            6
          ],
          [
            16777215,
            0.073,
            0.019,
            -0.463,
            0.016,
            0.015,
            0.015,
            0,
            0,
            0,
            8,
            6
          ]
        ]
      },
      {
        "id": "head",
        "name": "Head, ears and nose",
        "material": "fur",
        "parent": "body",
        "uv": "world",
        "uvScale": 0.3,
        "tint": {
          "axis": "z",
          "from": 0.385,
          "to": 0.45,
          "c0": 16777215,
          "c1": 8156270,
          "keep": true
        },
        "ellipsoids": [
          [
            11042895,
            -0.065,
            0.066,
            0.32,
            0.074,
            0.064,
            0.08,
            0,
            0,
            0,
            16,
            12
          ],
          [
            11042895,
            -0.075,
            0.062,
            0.272,
            0.054,
            0.054,
            0.045,
            0,
            0,
            0,
            10,
            7
          ],
          [
            2762276,
            -0.023,
            0.042,
            0.463,
            0.019,
            0.017,
            0.015,
            0,
            0,
            0,
            10,
            6
          ]
        ],
        "tubesAlong": [
          {
            "stations": [
              [
                0.345,
                -0.045,
                0.054,
                0.02,
                0.02
              ],
              [
                0.34748148148148145,
                -0.044962962962962955,
                0.052925925925925925,
                0.029666666666666664,
                0.024851851851851854
              ],
              [
                0.35140740740740745,
                -0.044814814814814814,
                0.0514074074074074,
                0.042888888888888886,
                0.031481481481481485
              ],
              [
                0.358,
                -0.044,
                0.05,
                0.052,
                0.036
              ],
              [
                0.3685555555555555,
                -0.04211111111111111,
                0.048925925925925935,
                0.05314814814814814,
                0.03644444444444444
              ],
              [
                0.3817777777777777,
                -0.03955555555555556,
                0.047962962962962964,
                0.05018518518518518,
                0.03477777777777778
              ],
              [
                0.395,
                -0.037,
                0.047,
                0.047,
                0.033
              ],
              [
                0.40774074074074074,
                -0.03459259259259259,
                0.046,
                0.044814814814814814,
                0.03174074074074075
              ],
              [
                0.42048148148148146,
                -0.03218518518518518,
                0.045,
                0.042407407407407414,
                0.03037037037037037
              ],
              [
                0.432,
                -0.03,
                0.044,
                0.04,
                0.029
              ],
              [
                0.442,
                -0.02807407407407407,
                0.04292592592592592,
                0.03774074074074074,
                0.027740740740740743
              ],
              [
                0.4507777777777778,
                -0.026370370370370367,
                0.041851851851851855,
                0.03548148148148148,
                0.026481481481481477
              ],
              [
                0.458,
                -0.024999999999999998,
                0.041,
                0.033,
                0.025
              ],
              [
                0.46331481481481485,
                -0.024,
                0.04048148148148148,
                0.03048148148148148,
                0.023407407407407408
              ],
              [
                0.4670740740740741,
                -0.023333333333333334,
                0.040185185185185185,
                0.027740740740740743,
                0.021592592592592594
              ],
              [
                0.47,
                -0.023,
                0.04,
                0.024,
                0.019
              ],
              [
                0.47222222222222215,
                -0.023148148148148147,
                0.03992592592592592,
                0.018000000000000002,
                0.014703703703703701
              ],
              [
                0.4736111111111111,
                -0.02362962962962963,
                0.039962962962962964,
                0.011000000000000003,
                0.009629629629629629
              ],
              [
                0.4745,
                -0.023999999999999997,
                0.04,
                6e-3,
                6e-3
              ]
            ],
            "seg": 12,
            "hex": 11042895
          }
        ],
        "extrudes": [
          {
            "poly": [
              [
                -0.03,
                0
              ],
              [
                0.03,
                0
              ],
              [
                0.033,
                -0.02975
              ],
              [
                0.0186,
                -0.0697
              ],
              [
                6e-3,
                -0.085
              ],
              [
                -6e-3,
                -0.085
              ],
              [
                -0.0186,
                -0.0697
              ],
              [
                -0.033,
                -0.02975
              ]
            ],
            "z0": -4e-3,
            "z1": 4e-3,
            "rx": 1.5707963267948966,
            "ry": 0.96,
            "rz": 0.55,
            "at": [
              -0.10200000000000001,
              0.117,
              0.296
            ],
            "hex": 10119772
          },
          {
            "poly": [
              [
                -0.026,
                0
              ],
              [
                0.026,
                0
              ],
              [
                0.0286,
                -0.025199999999999997
              ],
              [
                0.01612,
                -0.059039999999999995
              ],
              [
                52e-4,
                -0.072
              ],
              [
                -52e-4,
                -0.072
              ],
              [
                -0.01612,
                -0.059039999999999995
              ],
              [
                -0.0286,
                -0.025199999999999997
              ]
            ],
            "z0": -4e-3,
            "z1": 4e-3,
            "rx": 1.5707963267948966,
            "ry": 2.3,
            "at": [
              -0.107,
              8e-3,
              0.335
            ],
            "hex": 9069124
          }
        ],
        "boxes": [
          [
            3813936,
            -0.073,
            0.11,
            0.385,
            5e-3,
            4e-3,
            0.024,
            0,
            0,
            0.25
          ],
          [
            4866620,
            0.009000000000000001,
            0.04,
            0.43,
            6e-3,
            4e-3,
            0.06,
            0,
            0,
            0
          ]
        ]
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
function lathe(pts, seg, yOffset = 0) {
  const v = pts.map((p) => new THREE.Vector2(Math.max(p[0], 0), p[1] + yOffset));
  const g = new THREE.LatheGeometry(v, seg);
  g.computeVertexNormals();
  return g;
}
function extrudeAlongZ(shape, z0, z1) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: z1 - z0, bevelEnabled: false, curveSegments: 4 });
  g.translate(0, 0, z0);
  g.computeVertexNormals();
  return g;
}
function tubeAlong(stations, seg) {
  const pos = [], idx = [];
  for (let i = 0; i < stations.length; i++) {
    const [z, cx, cy, rx, ry] = stations[i];
    for (let j = 0; j < seg; j++) {
      const th = j * Math.PI * 2 / seg;
      pos.push(cx + Math.sin(th) * rx, cy + Math.cos(th) * ry, z);
    }
  }
  for (let i = 0; i < stations.length - 1; i++) {
    for (let j = 0; j < seg; j++) {
      const a = i * seg + j, b = (i + 1) * seg + j, c = (i + 1) * seg + (j + 1) % seg, d = i * seg + (j + 1) % seg;
      idx.push(a, b, c, a, c, d);
    }
  }
  const g = new THREE.BufferGeometry();
  g.setAttribute("position", new THREE.BufferAttribute(new Float32Array(pos), 3));
  g.setAttribute("uv", new THREE.BufferAttribute(new Float32Array(pos.length / 3 * 2), 2));
  g.setIndex(idx);
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
function mirrorX(list) {
  return list.flatMap((b) => [b, [b[0], -b[1], b[2], b[3], b[4], b[5], b[6], b[7] ?? 0, -(b[8] ?? 0), -(b[9] ?? 0)]]);
}
function canvasTile(size, draw) {
  if (typeof document === "undefined") return null;
  const cv = document.createElement("canvas");
  cv.width = size;
  cv.height = size;
  const ctx = cv.getContext("2d", { willReadFrequently: true });
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
function mudTile(size, base, seed, coverage = 0.33) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const toHex = (v) => "#" + v.map((c) => Math.round(Math.min(1, Math.max(0, c)) * 255).toString(16).padStart(2, "0")).join("");
    ctx.fillStyle = toHex(base);
    ctx.fillRect(0, 0, s, s);
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - coverage));
    grad.addColorStop(0, "rgba(255,255,255,0.88)");
    grad.addColorStop(0.45, "rgba(255,255,255,0.45)");
    grad.addColorStop(1, "rgba(255,255,255,0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 2.2) * s * coverage * 1.35;
      const r = 3 + rnd() * s * 0.05;
      const a = 0.08 + rnd() * 0.28;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(255,250,240,${a})`);
      g2.addColorStop(1, "rgba(255,250,240,0)");
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
function furTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const tone = o.tone ?? [0.72, 0.66, 0.58], m = s * 0.06;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.clouds ?? 26); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.08 + rnd() * 0.18), a = 0.04 + rnd() * 0.1;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(tone)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(tone)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y + dy, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < (o.patches ?? 0); i++) {
      const x = rnd() * s, y = rnd() * s, r = s * (0.04 + rnd() * 0.05), pc = o.patchTone ?? [0.72, 0.56, 0.52];
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(pc)},0.55)`);
      g2.addColorStop(0.6, `rgba(${rgb(pc)},0.3)`);
      g2.addColorStop(1, `rgba(${rgb(pc)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) for (const dy of [-s, 0, s]) {
        ctx.beginPath();
        ctx.ellipse(x + dx, y + dy, r * 1.3, r, rnd() * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    const strokes = o.strokes ?? 5e3, len = s * (o.length ?? 0.022);
    const drawStroke = (x, y, dx, dy, w) => {
      ctx.lineWidth = w;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + dx, y + dy);
      ctx.stroke();
      if (x < m) {
        ctx.beginPath();
        ctx.moveTo(x + s, y);
        ctx.lineTo(x + s + dx, y + dy);
        ctx.stroke();
      }
      if (x > s - m) {
        ctx.beginPath();
        ctx.moveTo(x - s, y);
        ctx.lineTo(x - s + dx, y + dy);
        ctx.stroke();
      }
      if (y < m) {
        ctx.beginPath();
        ctx.moveTo(x, y + s);
        ctx.lineTo(x + dx, y + s + dy);
        ctx.stroke();
      }
      if (y > s - m) {
        ctx.beginPath();
        ctx.moveTo(x, y - s);
        ctx.lineTo(x + dx, y - s + dy);
        ctx.stroke();
      }
    };
    ctx.lineCap = "round";
    for (let i = 0; i < strokes; i++) {
      const x = rnd() * s, y = rnd() * s, th = (rnd() - 0.5) * 0.78, l = len * (0.6 + rnd() * 0.8);
      const light = rnd() < 0.42;
      ctx.globalCompositeOperation = light ? "screen" : "multiply";
      ctx.strokeStyle = light ? `rgba(255,250,240,${0.05 + rnd() * 0.1})` : `rgba(${rgb(tone)},${0.06 + rnd() * 0.14})`;
      drawStroke(x, y, Math.sin(th) * l, Math.cos(th) * l, 0.6 + rnd() * 1.2);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function heightUV(geo, scale) {
  const p = geo.getAttribute("position"), nrm = geo.getAttribute("normal");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const ax = Math.abs(nrm.getX(i)), az = Math.abs(nrm.getZ(i));
    const u = ax >= az ? p.getZ(i) : p.getX(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = p.getY(i) / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
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
function panelUV(geo, scale, rot = false) {
  const p = geo.getAttribute("position");
  const uv = new Float32Array(p.count * 2);
  for (let i = 0; i < p.count; i++) {
    const u = rot ? p.getY(i) : p.getX(i), v = rot ? p.getX(i) : p.getY(i);
    uv[i * 2] = u / scale;
    uv[i * 2 + 1] = v / scale;
  }
  geo.setAttribute("uv", new THREE.BufferAttribute(uv, 2));
  return geo;
}
function spike(at, w, h) {
  const g = new THREE.ConeGeometry(w / Math.SQRT2, h, 4, 1, false);
  g.rotateY(Math.PI / 4);
  g.translate(at[0], at[1] + h / 2, at[2]);
  g.computeVertexNormals();
  return g;
}
function grimeTile(size, seed, o) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])}`;
    const wash = o.wash ?? [0.62, 0.62, 0.58], washA = o.washAlpha ?? 0.7, cov = o.coverage ?? 0.3;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < (o.streaks ?? 26); i++) {
      const x = rnd() * s, w = 1 + rnd() * s * 0.012, len = s * (0.15 + rnd() * 0.6), a = 0.05 + rnd() * 0.12;
      const g2 = ctx.createLinearGradient(0, 0, 0, len);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      ctx.fillRect(x, 0, w, len);
      ctx.fillRect(x - s, 0, w, len);
    }
    const grad = ctx.createLinearGradient(0, s, 0, s * (1 - cov));
    grad.addColorStop(0, `rgba(${rgb(wash)},${washA})`);
    grad.addColorStop(0.5, `rgba(${rgb(wash)},${washA * 0.45})`);
    grad.addColorStop(1, `rgba(${rgb(wash)},0)`);
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < (o.blotches ?? 40); i++) {
      const x = rnd() * s, y = s - Math.pow(rnd(), 1.6) * s, r = 3 + rnd() * s * 0.06, a = 0.08 + rnd() * 0.3;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(${rgb(wash)},${a})`);
      g2.addColorStop(1, `rgba(${rgb(wash)},0)`);
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    if (o.moss) {
      const m = o.moss, band = o.mossBand ?? 0.22;
      const mg = ctx.createLinearGradient(0, s, 0, s * (1 - band * 1.3));
      mg.addColorStop(0, `rgba(${rgb(m)},${o.mossWash ?? 0.35})`);
      mg.addColorStop(1, `rgba(${rgb(m)},0)`);
      ctx.fillStyle = mg;
      ctx.fillRect(0, 0, s, s);
      for (let k = 0; k < (o.mossClusters ?? 14); k++) {
        const cx = rnd() * s, cy = s - Math.pow(rnd(), 1.6) * s * band, cr = s * (0.015 + rnd() * 0.04);
        const cg = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
        cg.addColorStop(0, `rgba(${rgb(m)},0.7)`);
        cg.addColorStop(0.6, `rgba(${rgb(m)},0.35)`);
        cg.addColorStop(1, `rgba(${rgb(m)},0)`);
        ctx.fillStyle = cg;
        for (const dx of [-s, 0, s]) {
          ctx.beginPath();
          ctx.ellipse(cx + dx, cy, cr, cr * 0.6, 0, 0, Math.PI * 2);
          ctx.fill();
        }
        for (let i = 0; i < 24; i++) {
          const a = rnd() * Math.PI * 2, d = Math.sqrt(rnd()) * cr;
          const x = cx + Math.cos(a) * d, y = cy + Math.sin(a) * d * 0.6, r = 1 + rnd() * 3;
          ctx.fillStyle = `rgba(${rgb(m)},${0.35 + rnd() * 0.5})`;
          for (const dx of [-s, 0, s]) {
            ctx.beginPath();
            ctx.arc(x + dx, y, r, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }
    }
    for (let i = 0; i < 1500; i++) {
      const x = rnd() * s, y = rnd() * s, v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.12)`;
      ctx.fillRect(x, y, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
}
function chainlinkTile(size, wire, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    ctx.lineWidth = Math.max(1.5, wire * s);
    ctx.lineCap = "round";
    const v = 150 + Math.round(rnd() * 30);
    ctx.strokeStyle = `rgb(${v},${v + 2},${v + 4})`;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(s, s);
    ctx.moveTo(s, 0);
    ctx.lineTo(0, s);
    ctx.stroke();
    ctx.fillStyle = `rgb(${v - 20},${v - 18},${v - 16})`;
    for (const [x, y] of [[0, 0], [s, 0], [0, s], [s, s], [s / 2, s / 2]]) {
      ctx.beginPath();
      ctx.arc(x, y, ctx.lineWidth * 0.9, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}
function bambooTile(size, strips, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, s, s);
    const sw = s / strips;
    for (let b = 0; b < strips; b++) {
      const tone = 0.8 + rnd() * 0.2, v = Math.round(255 * tone);
      ctx.fillStyle = `rgb(${v},${v - 2},${v - 6})`;
      ctx.fillRect(b * sw, 0, sw, s);
      ctx.fillStyle = "rgba(50,42,34,0.6)";
      ctx.fillRect(b * sw, 0, Math.max(1, s * 6e-3), s);
      ctx.fillStyle = "rgba(255,255,255,0.10)";
      ctx.fillRect(b * sw + sw * 0.35, 0, sw * 0.25, s);
      const n = 1 + Math.floor(rnd() * 2);
      for (let k = 0; k < n; k++) {
        const y = rnd() * s;
        ctx.fillStyle = "rgba(70,60,48,0.45)";
        ctx.fillRect(b * sw, y, sw, Math.max(1, s * 8e-3));
      }
      for (let k = 0; k < 6; k++) {
        const x = b * sw + rnd() * sw;
        ctx.fillStyle = `rgba(80,70,58,${0.05 + rnd() * 0.1})`;
        ctx.fillRect(x, 0, 1, s);
      }
    }
    for (let i = 0; i < 300; i++) {
      const x = rnd() * s, y = rnd() * s;
      ctx.fillStyle = "rgba(30,28,24,0.18)";
      ctx.fillRect(x, y, 1 + rnd() * 2, 1 + rnd() * 2);
    }
  });
}
function posterTile(size, seed, lines) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    ctx.clearRect(0, 0, s, s);
    for (let k = 0; k < 4; k++) {
      const x = s * (0.02 + rnd() * 0.3), y = s * (0.15 + rnd() * 0.45), w = s * (0.14 + rnd() * 0.16), h = s * (0.18 + rnd() * 0.22);
      ctx.fillStyle = `rgba(${225 + Math.round(rnd() * 20)},${222 + Math.round(rnd() * 18)},${210 + Math.round(rnd() * 20)},0.96)`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      const n = 9;
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w * i / n, y + (rnd() - 0.5) * h * 0.08);
      for (let i = 1; i <= n; i++) ctx.lineTo(x + w + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + w * i / n, y + h + (rnd() - 0.5) * h * 0.12);
      for (let i = n - 1; i >= 0; i--) ctx.lineTo(x + (rnd() - 0.5) * w * 0.08, y + h * i / n);
      ctx.closePath();
      ctx.fill();
      ctx.fillStyle = "rgba(40,40,45,0.55)";
      for (let i = 0; i < 7; i++) ctx.fillRect(x + w * 0.1, y + h * (0.2 + i * 0.1), w * (0.3 + rnd() * 0.5), Math.max(1, s * 6e-3));
    }
    ctx.fillStyle = "rgba(20,20,22,0.88)";
    ctx.font = `bold ${Math.round(s * 0.07)}px sans-serif`;
    ctx.textBaseline = "middle";
    for (let i = 0; i < lines.length; i++) {
      const x = s * 0.4, y = s * (0.44 + i * 0.13);
      for (let k = 0; k < 3; k++) {
        ctx.globalAlpha = 0.6;
        ctx.fillText(lines[i], x + (rnd() - 0.5) * 3, y + (rnd() - 0.5) * 3);
      }
      ctx.globalAlpha = 1;
    }
  });
}
function stripeTile(size, bands, a, b, seed) {
  return canvasTile(size, (ctx, s) => {
    const rnd = lcg(seed);
    const rgb = (v) => `rgb(${Math.round(255 * v[0])},${Math.round(255 * v[1])},${Math.round(255 * v[2])})`;
    const w = s / bands;
    for (let i = 0; i < bands; i++) {
      ctx.fillStyle = rgb(i % 2 ? b : a);
      ctx.fillRect(Math.floor(i * w), 0, Math.ceil(w) + 1, s);
    }
    ctx.globalCompositeOperation = "multiply";
    for (let i = 0; i < 40; i++) {
      const x = rnd() * s, y = rnd() * s, r = 4 + rnd() * s * 0.08, al = 0.06 + rnd() * 0.18;
      const g2 = ctx.createRadialGradient(x, y, 0, x, y, r);
      g2.addColorStop(0, `rgba(150,140,125,${al})`);
      g2.addColorStop(1, "rgba(150,140,125,0)");
      ctx.fillStyle = g2;
      for (const dx of [-s, 0, s]) {
        ctx.beginPath();
        ctx.arc(x + dx, y, r, 0, Math.PI * 2);
        ctx.fill();
      }
    }
    for (let i = 0; i < 1200; i++) {
      const v = 200 + Math.round(rnd() * 55);
      ctx.fillStyle = `rgba(${v},${v},${v},0.10)`;
      ctx.fillRect(rnd() * s, rnd() * s, 1.5, 1.5);
    }
    ctx.globalCompositeOperation = "source-over";
  });
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
    if (s.emissive !== void 0) {
      m.emissive = new THREE.Color(s.emissive);
      m.emissiveIntensity = s.emissiveIntensity ?? 1;
    }
    if (s.opacity !== void 0) {
      m.transparent = true;
      m.opacity = s.opacity;
      m.depthWrite = true;
    }
    if (s.alphaTest !== void 0) {
      m.alphaTest = s.alphaTest;
      m.transparent = false;
    }
    m.name = s.id;
    map[s.id] = m;
  }
  return map;
}
function createSleepingSoiDogModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Sleeping Soi Dog";
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
  for (const c of G.components) {
    const gs = [];
    for (const b of c.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const b of mirrorX(c.boxesMirrored ?? [])) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const t of c.tubes ?? []) gs.push(tube(t.pts, t.r, t.seg ?? 8, t.hex));
    for (const cy of c.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    for (const l of c.lathes ?? []) {
      const g2 = lathe(l.pts, l.seg ?? 12);
      if (l.ry) g2.rotateY(l.ry);
      g2.translate(l.at[0], l.at[1], l.at[2]);
      gs.push(tintGeo(g2, l.hex));
    }
    for (const p of c.planes ?? []) {
      const g2 = new THREE.PlaneGeometry(p.w, p.h, 1, 1);
      g2.translate(p.at[0], p.at[1], p.at[2]);
      const uv = g2.getAttribute("uv");
      for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * (p.rep?.[0] ?? 1), uv.getY(i) * (p.rep?.[1] ?? 1));
      gs.push(tintGeo(g2, p.hex));
    }
    for (const e of c.extrudes ?? []) {
      const shape = new THREE.Shape();
      shape.moveTo(e.poly[0][0], e.poly[0][1]);
      for (let i = 1; i < e.poly.length; i++) shape.lineTo(e.poly[i][0], e.poly[i][1]);
      shape.closePath();
      for (const h of e.holes ?? []) {
        const hp = new THREE.Path();
        hp.moveTo(h[0][0], h[0][1]);
        for (let i = 1; i < h.length; i++) hp.lineTo(h[i][0], h[i][1]);
        hp.closePath();
        shape.holes.push(hp);
      }
      const g2 = extrudeAlongZ(shape, e.z0, e.z1);
      if (e.rx) g2.rotateX(e.rx);
      if (e.ry) g2.rotateY(e.ry);
      if (e.rz) g2.rotateZ(e.rz);
      if (e.at) g2.translate(e.at[0], e.at[1], e.at[2]);
      gs.push(tintGeo(g2, e.hex));
    }
    for (const e of c.ellipsoids ?? []) {
      const g2 = new THREE.SphereGeometry(1, e[10] ?? 16, e[11] ?? 12);
      g2.scale(e[4], e[5], e[6]);
      if (e[7]) g2.rotateX(e[7]);
      if (e[8]) g2.rotateY(e[8]);
      if (e[9]) g2.rotateZ(e[9]);
      g2.translate(e[1], e[2], e[3]);
      gs.push(tintGeo(g2, e[0]));
    }
    for (const s of c.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const t of c.tubesAlong ?? []) {
      const g2 = tubeAlong(t.stations, t.seg ?? 12);
      if (t.ry) g2.rotateY(t.ry);
      if (t.at) g2.translate(t.at[0], t.at[1], t.at[2]);
      gs.push(tintGeo(g2, t.hex ?? 16777215));
    }
    let g = mergeGeos(gs);
    if (c.scale) g.scale(c.scale[0], c.scale[1], c.scale[2]);
    if (c.tint) {
      const a = new THREE.Color(c.tint.c0), b = new THREE.Color(c.tint.c1);
      const p = g.getAttribute("position");
      let col = g.getAttribute("color");
      if (!col) {
        col = new THREE.BufferAttribute(new Float32Array(p.count * 3).fill(1), 3);
        g.setAttribute("color", col);
      }
      const ax = c.tint.axis === "x" ? 0 : c.tint.axis === "y" ? 1 : 2;
      for (let i = 0; i < p.count; i++) {
        const v = ax === 0 ? p.getX(i) : ax === 1 ? p.getY(i) : p.getZ(i);
        const t = Math.min(1, Math.max(0, (v - c.tint.from) / (c.tint.to - c.tint.from)));
        const r = a.r + (b.r - a.r) * t, gg = a.g + (b.g - a.g) * t, bb = a.b + (b.b - a.b) * t;
        if (c.tint.keep) col.setXYZ(i, col.getX(i) * r, col.getY(i) * gg, col.getZ(i) * bb);
        else col.setXYZ(i, r, gg, bb);
      }
      col.needsUpdate = true;
    }
    if (c.uv === "world") g = worldUV(g, c.uvScale ?? 1);
    if (c.uv === "height") g = heightUV(g, c.uvScale ?? 1);
    if (c.uv === "panel") g = panelUV(g, c.uvScale ?? 1);
    if (c.uv === "panel-rot") g = panelUV(g, c.uvScale ?? 1, true);
    add(c.id, c.name, g, c.material);
    if (c.collider) colliders[c.id] = c.collider;
  }
  for (const r of G.instanced ?? []) {
    const gs = [];
    for (const b of r.boxes ?? []) gs.push(tintGeo(rbox(b.slice(1)), b[0]));
    for (const s of r.spikes ?? []) gs.push(tintGeo(spike(s.at, s.w, s.h), s.hex));
    for (const cy of r.cyls ?? []) {
      const g2 = new THREE.CylinderGeometry(cy.rt, cy.rb, cy.h, cy.seg ?? 12);
      if (cy.rx) g2.rotateX(cy.rx);
      if (cy.rz) g2.rotateZ(cy.rz);
      g2.translate(cy.at[0], cy.at[1], cy.at[2]);
      gs.push(tintGeo(g2, cy.hex));
    }
    let g = mergeGeos(gs);
    if (r.uv === "world") g = worldUV(g, r.uvScale ?? 1);
    if (r.uv === "height") g = heightUV(g, r.uvScale ?? 1);
    const mats = [];
    for (const p of r.placements) {
      mats.push(new THREE.Matrix4().compose(
        new THREE.Vector3(p[0], p[1], p[2]),
        new THREE.Quaternion().setFromEuler(new THREE.Euler(p[3] ?? 0, p[4] ?? 0, p[5] ?? 0)),
        new THREE.Vector3(1, 1, 1)
      ));
    }
    addInst(r.id, r.name, g, r.material, mats, r.colors);
  }
  for (const t of CONFIG.tiles ?? []) {
    const mat = materials[t.material];
    if (!mat) continue;
    if (t.kind === "baked") {
      if (typeof document === "undefined") continue;
      const baked = new THREE.TextureLoader().load(t.uri);
      const srgb = THREE.SRGBColorSpace;
      if (srgb) baked.colorSpace = srgb;
      baked.anisotropy = 4;
      mat.map = baked;
      mat.needsUpdate = true;
      continue;
    }
    let tex = null;
    if (t.kind === "mud") tex = mudTile(t.size ?? 512, t.base, t.seed ?? 1, t.coverage ?? 0.33);
    if (t.kind === "dust") tex = dustTile(t.size ?? 512, t.dust, t.seed ?? 1, t.coverage ?? 0.3);
    if (t.kind === "plank") tex = plankTile(t.size ?? 512, t.boards ?? 6, t.seed ?? 5);
    if (t.kind === "rust") tex = rustTile(t.size ?? 512, t.ratio, t.seed ?? 7, t.density ?? 90);
    if (t.kind === "corrugation") tex = corrugationTile(t.size ?? 512, t.pitch ?? 12, t.low ?? 0.7, t.seed ?? 3);
    if (t.kind === "grime") tex = grimeTile(t.size ?? 512, t.seed ?? 11, t);
    if (t.kind === "fur") tex = furTile(t.size ?? 512, t.seed ?? 13, t);
    if (t.kind === "chainlink") tex = chainlinkTile(t.size ?? 256, t.wire ?? 0.09, t.seed ?? 4);
    if (t.kind === "bamboo") tex = bambooTile(t.size ?? 512, t.strips ?? 10, t.seed ?? 6);
    if (t.kind === "stripes") tex = stripeTile(t.size ?? 256, t.bands ?? 8, t.a, t.b, t.seed ?? 9);
    if (t.kind === "poster") tex = posterTile(t.size ?? 512, t.seed ?? 8, t.lines ?? []);
    bindTile(mat, tex, t.bump ?? 0);
  }
  root.userData.sculptRuntime = { nodes, meshes, sockets, colliders, destructionGroups };
  return root;
}
function createObjectModel(spec, options = {}) {
  const root = createSleepingSoiDogModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU2xlZXBpbmcgU29pIERvZyAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAwLjM1IHggMC4yOCB4IDAuOTUgbSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogdGhlIGhlYWQgZW5kLCBsZWdzIHRvd2FyZCArWC5cbiAqIEJ1ZGdldCAobGFyZ2UpOiA8PTQwMDAgdHJpYW5nbGVzLCA8PTQgZHJhdyBjYWxscywgPD02IG1hdGVyaWFscywgPD02IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBTVFJFRVQgQU5EIFZFTkRPUiBQUk9QUyAtLSBhIGNvbmUsIGEgYmFycmllciwgYSBjYXJ0LCBhIHN0b29sLiBUaGVcbiAqIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBUSU5URUQgQk9YIGFuZCB0aGUgcG9seWxpbmUgVFVCRSBtZXJnZWQgaW50byBvbmUgZ2VvbWV0cnkgcGVyIG1hdGVyaWFsLFxuICogd2l0aCBldmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgYSBtYXRlcmlhbCBjYXJyaWVkIGFzIGEgdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLFxuICogYW5kIHN1cmZhY2UgaWRlbnRpdHkgKGNvcnJ1Z2F0aW9uLCBncmltZSB3YXNoLCBtb3NzLCBwbGFuayBqb2ludHMsIHJ1c3QpIGRlbGl2ZXJlZCBhcyBPTkVcbiAqIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHBlciBtYXRlcmlhbCByYXRoZXIgdGhhbiBhcyBnZW9tZXRyeSBvciBhIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQuXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJzbGVlcGluZy1zb2ktZG9nXCIsXG4gICAgXCJuYW1lXCI6IFwiU2xlZXBpbmcgU29pIERvZ1wiLFxuICAgIFwiZXhwb3J0TmFtZVwiOiBcIlNsZWVwaW5nU29pRG9nXCIsXG4gICAgXCJlbnZlbG9wZVwiOiBcIkVudmVsb3BlIDAuMzUgeCAwLjI4IHggMC45NSBtLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiB0aGUgaGVhZCBlbmQsIGxlZ3MgdG93YXJkICtYLlxcbiAqIEJ1ZGdldCAobGFyZ2UpOiA8PTQwMDAgdHJpYW5nbGVzLCA8PTQgZHJhdyBjYWxscywgPD02IG1hdGVyaWFscywgPD02IHVuaXF1ZSBnZW9tZXRyaWVzLlwiLFxuICAgIFwibWF0ZXJpYWxzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBcImZ1clwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjksXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwiZnVyXCIsXG4gICAgICAgIFwia2luZFwiOiBcImZ1clwiLFxuICAgICAgICBcInNpemVcIjogNTEyLFxuICAgICAgICBcInNlZWRcIjogMjMxLFxuICAgICAgICBcInRvbmVcIjogW1xuICAgICAgICAgIDAuNyxcbiAgICAgICAgICAwLjYzLFxuICAgICAgICAgIDAuNTVcbiAgICAgICAgXSxcbiAgICAgICAgXCJzdHJva2VzXCI6IDUyMDAsXG4gICAgICAgIFwibGVuZ3RoXCI6IDAuMDI0LFxuICAgICAgICBcImNsb3Vkc1wiOiAyNCxcbiAgICAgICAgXCJwYXRjaGVzXCI6IDMsXG4gICAgICAgIFwiYnVtcFwiOiAwLjAwMjVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwiZ2VvbWV0cnlcIjoge1xuICAgICAgXCJjb21wb25lbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJib2R5XCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiQm9keSwgbGVncyBhbmQgdGFpbFwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJmdXJcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC4zLFxuICAgICAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICAgICAgXCJzaGFwZVwiOiBcImNvbnZleFwiLFxuICAgICAgICAgICAgXCJsb2NhbENlbnRlclwiOiBbXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDAuMDg1LFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgICAgIDAuMTc1LFxuICAgICAgICAgICAgICAwLjA4NSxcbiAgICAgICAgICAgICAgMC40NzVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIm5vdGVzXCI6IFwiRGVjbGFyZWQgb24gdGhlIGFzc2V0IGFzIGNvbnZleDogb25lIGh1bGwgb3ZlciB0aGUgc3ByYXdsZWQgZG9nLCAwLjE3IG0gaGlnaCBhcyBidWlsdC5cIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJ0aW50XCI6IHtcbiAgICAgICAgICAgIFwiYXhpc1wiOiBcInhcIixcbiAgICAgICAgICAgIFwiZnJvbVwiOiAtMC4wNTUsXG4gICAgICAgICAgICBcInRvXCI6IDAuMDQwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICBcImMwXCI6IDEyMTU5NTczLFxuICAgICAgICAgICAgXCJjMVwiOiAxNDIwOTczNixcbiAgICAgICAgICAgIFwia2VlcFwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcInR1YmVzQWxvbmdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInN0YXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zNixcbiAgICAgICAgICAgICAgICAgIC0wLjA0NSxcbiAgICAgICAgICAgICAgICAgIDAuMDY2LFxuICAgICAgICAgICAgICAgICAgMC4wMjQsXG4gICAgICAgICAgICAgICAgICAwLjAyNFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMzU4NjY2NjY2NjY2NjY2NjMsXG4gICAgICAgICAgICAgICAgICAtMC4wNDU1MTg1MTg1MTg1MTg1MTQsXG4gICAgICAgICAgICAgICAgICAwLjA2NjI1OTI1OTI1OTI1OTI3LFxuICAgICAgICAgICAgICAgICAgMC4wMjk3Nzc3Nzc3Nzc3Nzc3NzUsXG4gICAgICAgICAgICAgICAgICAwLjAyODE0ODE0ODE0ODE0ODE1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zNTY2NjY2NjY2NjY2NjY3NCxcbiAgICAgICAgICAgICAgICAgIC0wLjA0NjI1OTI1OTI1OTI1OTI2NCxcbiAgICAgICAgICAgICAgICAgIDAuMDY2NjI5NjI5NjI5NjI5NjQsXG4gICAgICAgICAgICAgICAgICAwLjAzOCxcbiAgICAgICAgICAgICAgICAgIDAuMDM0MDc0MDc0MDc0MDc0MDc2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zNTQsXG4gICAgICAgICAgICAgICAgICAtMC4wNDcsXG4gICAgICAgICAgICAgICAgICAwLjA2NyxcbiAgICAgICAgICAgICAgICAgIDAuMDQ2LFxuICAgICAgICAgICAgICAgICAgMC4wNFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMzUwNzQwNzQwNzQwNzQwNyxcbiAgICAgICAgICAgICAgICAgIC0wLjA0Nzc0MDc0MDc0MDc0MDc0LFxuICAgICAgICAgICAgICAgICAgMC4wNjcyMjIyMjIyMjIyMjIyNCxcbiAgICAgICAgICAgICAgICAgIDAuMDUyOTYyOTYyOTYyOTYyOTYsXG4gICAgICAgICAgICAgICAgICAwLjA0NTQ4MTQ4MTQ4MTQ4MTQ4NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMzQ2ODE0ODE0ODE0ODE0OCxcbiAgICAgICAgICAgICAgICAgIC0wLjA0ODQ4MTQ4MTQ4MTQ4MTQ4NyxcbiAgICAgICAgICAgICAgICAgIDAuMDY3NDQ0NDQ0NDQ0NDQ0NDUsXG4gICAgICAgICAgICAgICAgICAwLjA1OTcwMzcwMzcwMzcwMzcsXG4gICAgICAgICAgICAgICAgICAwLjA1MDk2Mjk2Mjk2Mjk2Mjk1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zNDIsXG4gICAgICAgICAgICAgICAgICAtMC4wNDksXG4gICAgICAgICAgICAgICAgICAwLjA2OCxcbiAgICAgICAgICAgICAgICAgIDAuMDY2LFxuICAgICAgICAgICAgICAgICAgMC4wNTZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjMzNjM3MDM3MDM3MDM3MDQsXG4gICAgICAgICAgICAgICAgICAtMC4wNDkyOTYyOTYyOTYyOTYyOTYsXG4gICAgICAgICAgICAgICAgICAwLjA2OTExMTExMTExMTExMTEsXG4gICAgICAgICAgICAgICAgICAwLjA3MTc3Nzc3Nzc3Nzc3Nzc5LFxuICAgICAgICAgICAgICAgICAgMC4wNjA1MTg1MTg1MTg1MTg1MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMzI5ODUxODUxODUxODUxODQsXG4gICAgICAgICAgICAgICAgICAtMC4wNDkzNzAzNzAzNzAzNzAzOCxcbiAgICAgICAgICAgICAgICAgIDAuMDcwNTU1NTU1NTU1NTU1NTUsXG4gICAgICAgICAgICAgICAgICAwLjA3NzExMTExMTExMTExMTEyLFxuICAgICAgICAgICAgICAgICAgMC4wNjQ1OTI1OTI1OTI1OTI2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4zMjIsXG4gICAgICAgICAgICAgICAgICAtMC4wNDksXG4gICAgICAgICAgICAgICAgICAwLjA3MixcbiAgICAgICAgICAgICAgICAgIDAuMDgyLFxuICAgICAgICAgICAgICAgICAgMC4wNjhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjMxNDM3MDM3MDM3MDM3MDQsXG4gICAgICAgICAgICAgICAgICAtMC4wNDc3NDA3NDA3NDA3NDA3MzYsXG4gICAgICAgICAgICAgICAgICAwLjA3MzQ4MTQ4MTQ4MTQ4MTQ4LFxuICAgICAgICAgICAgICAgICAgMC4wODY4MTQ4MTQ4MTQ4MTQ4MixcbiAgICAgICAgICAgICAgICAgIDAuMDcwNzAzNzAzNzAzNzAzNzFcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjMwNTQwNzQwNzQwNzQwNzM1LFxuICAgICAgICAgICAgICAgICAgLTAuMDQ2MDM3MDM3MDM3MDM3MDM2LFxuICAgICAgICAgICAgICAgICAgMC4wNzQ5NjI5NjI5NjI5NjI5NyxcbiAgICAgICAgICAgICAgICAgIDAuMDkxMTg1MTg1MTg1MTg1MTcsXG4gICAgICAgICAgICAgICAgICAwLjA3Mjc0MDc0MDc0MDc0MDc0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4yOSxcbiAgICAgICAgICAgICAgICAgIC0wLjA0NSxcbiAgICAgICAgICAgICAgICAgIDAuMDc2LFxuICAgICAgICAgICAgICAgICAgMC4wOTQsXG4gICAgICAgICAgICAgICAgICAwLjA3NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjY1MDM3MDM3MDM3MDM3MDcsXG4gICAgICAgICAgICAgICAgICAtMC4wNDU1MTg1MTg1MTg1MTg1MixcbiAgICAgICAgICAgICAgICAgIDAuMDc2MTg1MTg1MTg1MTg1MTgsXG4gICAgICAgICAgICAgICAgICAwLjA5NDExMTExMTExMTExMTEsXG4gICAgICAgICAgICAgICAgICAwLjA3NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMjMzNjI5NjI5NjI5NjI5NixcbiAgICAgICAgICAgICAgICAgIC0wLjA0NjcwMzcwMzcwMzcwMzcwNixcbiAgICAgICAgICAgICAgICAgIDAuMDc1OTI1OTI1OTI1OTI1OTIsXG4gICAgICAgICAgICAgICAgICAwLjA5MjY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgMC4wNzMyMjIyMjIyMjIyMjIyMlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMixcbiAgICAgICAgICAgICAgICAgIC0wLjA0NyxcbiAgICAgICAgICAgICAgICAgIDAuMDc2LFxuICAgICAgICAgICAgICAgICAgMC4wOTIsXG4gICAgICAgICAgICAgICAgICAwLjA3M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMTY1MTg1MTg1MTg1MTg1MTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNDU0NDQ0NDQ0NDQ0NDQ0NCxcbiAgICAgICAgICAgICAgICAgIDAuMDc2ODE0ODE0ODE0ODE0ODEsXG4gICAgICAgICAgICAgICAgICAwLjA5MzIyMjIyMjIyMjIyMjIzLFxuICAgICAgICAgICAgICAgICAgMC4wNzM5OTk5OTk5OTk5OTk5OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMTI4MTQ4MTQ4MTQ4MTQ4MTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNDMwMDAwMDAwMDAwMDAwMDMsXG4gICAgICAgICAgICAgICAgICAwLjA3Nzk2Mjk2Mjk2Mjk2Mjk3LFxuICAgICAgICAgICAgICAgICAgMC4wOTUyMjIyMjIyMjIyMjIyMixcbiAgICAgICAgICAgICAgICAgIDAuMDc1NTU1NTU1NTU1NTU1NTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjA5LFxuICAgICAgICAgICAgICAgICAgLTAuMDQwOTk5OTk5OTk5OTk5OTk1LFxuICAgICAgICAgICAgICAgICAgMC4wNzksXG4gICAgICAgICAgICAgICAgICAwLjA5NyxcbiAgICAgICAgICAgICAgICAgIDAuMDc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wNTAzNzAzNzAzNzAzNzAzNyxcbiAgICAgICAgICAgICAgICAgIC0wLjAzOTgxNDgxNDgxNDgxNDgxLFxuICAgICAgICAgICAgICAgICAgMC4wNzk4ODg4ODg4ODg4ODg5LFxuICAgICAgICAgICAgICAgICAgMC4wOTg0ODE0ODE0ODE0ODE0OSxcbiAgICAgICAgICAgICAgICAgIDAuMDc4Mjk2Mjk2Mjk2Mjk2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA5NjI5NjI5NjI5NjI5NjUxLFxuICAgICAgICAgICAgICAgICAgLTAuMDM5MDc0MDc0MDc0MDc0MDgsXG4gICAgICAgICAgICAgICAgICAwLjA4MDY2NjY2NjY2NjY2NjY2LFxuICAgICAgICAgICAgICAgICAgMC4wOTk3NDA3NDA3NDA3NDA3NCxcbiAgICAgICAgICAgICAgICAgIDAuMDc5NDgxNDgxNDgxNDgxNDdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgICAgICAtMC4wMzksXG4gICAgICAgICAgICAgICAgICAwLjA4MSxcbiAgICAgICAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgICAgICAgIDAuMDhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDY4NzAzNzAzNzAzNzAzNyxcbiAgICAgICAgICAgICAgICAgIC0wLjAzOTU5MjU5MjU5MjU5MjU5LFxuICAgICAgICAgICAgICAgICAgMC4wODA3NDA3NDA3NDA3NDA3NCxcbiAgICAgICAgICAgICAgICAgIDAuMDk4OTYyOTYyOTYyOTYyOTYsXG4gICAgICAgICAgICAgICAgICAwLjA3OTU5MjU5MjU5MjU5MjZcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMTA2Mjk2Mjk2Mjk2Mjk2MyxcbiAgICAgICAgICAgICAgICAgIC0wLjA0MDg1MTg1MTg1MTg1MTg1LFxuICAgICAgICAgICAgICAgICAgMC4wODAwMzcwMzcwMzcwMzcwMyxcbiAgICAgICAgICAgICAgICAgIDAuMDk2OTI1OTI1OTI1OTI1OTMsXG4gICAgICAgICAgICAgICAgICAwLjA3ODUxODUxODUxODUxODUyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAgICAgLTAuMDQzLFxuICAgICAgICAgICAgICAgICAgMC4wNzksXG4gICAgICAgICAgICAgICAgICAwLjA5NCxcbiAgICAgICAgICAgICAgICAgIDAuMDc3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjE2ODUxODUxODUxODUxODUsXG4gICAgICAgICAgICAgICAgICAtMC4wNDY0ODE0ODE0ODE0ODE0OCxcbiAgICAgICAgICAgICAgICAgIDAuMDc3NTE4NTE4NTE4NTE4NTEsXG4gICAgICAgICAgICAgICAgICAwLjA4OTkyNTkyNTkyNTkyNTk0LFxuICAgICAgICAgICAgICAgICAgMC4wNzUwMDAwMDAwMDAwMDAwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xOTMxNDgxNDgxNDgxNDgxLFxuICAgICAgICAgICAgICAgICAgLTAuMDUwODUxODUxODUxODUxODYsXG4gICAgICAgICAgICAgICAgICAwLjA3NTcwMzcwMzcwMzcwMzY5LFxuICAgICAgICAgICAgICAgICAgMC4wODQ5NjI5NjI5NjI5NjI5OCxcbiAgICAgICAgICAgICAgICAgIDAuMDcyNTU1NTU1NTU1NTU1NTdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjE1LFxuICAgICAgICAgICAgICAgICAgLTAuMDU1LFxuICAgICAgICAgICAgICAgICAgMC4wNzQsXG4gICAgICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAgICAgMC4wN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yMzQzNzAzNzAzNzAzNzAzNyxcbiAgICAgICAgICAgICAgICAgIC0wLjA1ODcwMzcwMzcwMzcwMzcsXG4gICAgICAgICAgICAgICAgICAwLjA3MjUxODUxODUxODUxODUxLFxuICAgICAgICAgICAgICAgICAgMC4wNzUxODUxODUxODUxODUxOSxcbiAgICAgICAgICAgICAgICAgIDAuMDY3NDA3NDA3NDA3NDA3NFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yNTA5NjI5NjI5NjI5NjMsXG4gICAgICAgICAgICAgICAgICAtMC4wNjIxODUxODUxODUxODUxOSxcbiAgICAgICAgICAgICAgICAgIDAuMDcxMTQ4MTQ4MTQ4MTQ4MTMsXG4gICAgICAgICAgICAgICAgICAwLjA3MDM3MDM3MDM3MDM3MDM2LFxuICAgICAgICAgICAgICAgICAgMC4wNjQ3MDM3MDM3MDM3MDM3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI2NSxcbiAgICAgICAgICAgICAgICAgIC0wLjA2NSxcbiAgICAgICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgICAgICAwLjA2NixcbiAgICAgICAgICAgICAgICAgIDAuMDYyXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI3NjIyMjIyMjIyMjIyMjE1LFxuICAgICAgICAgICAgICAgICAgLTAuMDY2OTI1OTI1OTI1OTI1OTQsXG4gICAgICAgICAgICAgICAgICAwLjA2OTExMTExMTExMTExMTExLFxuICAgICAgICAgICAgICAgICAgMC4wNjMzMzMzMzMzMzMzMzMzMixcbiAgICAgICAgICAgICAgICAgIDAuMDYwMjk2Mjk2Mjk2Mjk2M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4yODQ4ODg4ODg4ODg4ODg4NixcbiAgICAgICAgICAgICAgICAgIC0wLjA2ODE4NTE4NTE4NTE4NTE4LFxuICAgICAgICAgICAgICAgICAgMC4wNjg0NDQ0NDQ0NDQ0NDQ0NSxcbiAgICAgICAgICAgICAgICAgIDAuMDYxMTExMTExMTExMTExMTE2LFxuICAgICAgICAgICAgICAgICAgMC4wNTg1OTI1OTI1OTI1OTI1ODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMjkyLFxuICAgICAgICAgICAgICAgICAgLTAuMDY5LFxuICAgICAgICAgICAgICAgICAgMC4wNjgsXG4gICAgICAgICAgICAgICAgICAwLjA1NixcbiAgICAgICAgICAgICAgICAgIDAuMDU0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjI5Nzg1MTg1MTg1MTg1MTgsXG4gICAgICAgICAgICAgICAgICAtMC4wNjkyOTYyOTYyOTYyOTYzLFxuICAgICAgICAgICAgICAgICAgMC4wNjc4NTE4NTE4NTE4NTE4NCxcbiAgICAgICAgICAgICAgICAgIDAuMDQ0NTkyNTkyNTkyNTkyNTksXG4gICAgICAgICAgICAgICAgICAwLjA0MzMzMzMzMzMzMzMzMzMzNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4zMDIxNDgxNDgxNDgxNDgxLFxuICAgICAgICAgICAgICAgICAgLTAuMDY5MTQ4MTQ4MTQ4MTQ4MTUsXG4gICAgICAgICAgICAgICAgICAwLjA2NzkyNTkyNTkyNTkyNTkzLFxuICAgICAgICAgICAgICAgICAgMC4wMzAyOTYyOTYyOTYyOTYzLFxuICAgICAgICAgICAgICAgICAgMC4wMjk3Nzc3Nzc3Nzc3Nzc3NzhcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMzA1LFxuICAgICAgICAgICAgICAgICAgLTAuMDY5LFxuICAgICAgICAgICAgICAgICAgMC4wNjgsXG4gICAgICAgICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgICAgICAgMC4wMlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJzZWdcIjogMTYsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInR1YmVzXCI6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAwNDk5OTk5OTk5OTk5OTk5NzUsXG4gICAgICAgICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgICAgICAgIDAuMjA1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA4NSxcbiAgICAgICAgICAgICAgICAgIDAuMDQyLFxuICAgICAgICAgICAgICAgICAgMC4xOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNjgsXG4gICAgICAgICAgICAgICAgICAwLjAzMixcbiAgICAgICAgICAgICAgICAgIDAuMTM1XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJcIjogMC4wMjksXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA5OTk5OTk5OTk5OTk5OTk1LFxuICAgICAgICAgICAgICAgICAgMC4xMDUsXG4gICAgICAgICAgICAgICAgICAwLjE2NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgICAgIDAuMDc4LFxuICAgICAgICAgICAgICAgICAgMC4xNFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNjUsXG4gICAgICAgICAgICAgICAgICAwLjA2MixcbiAgICAgICAgICAgICAgICAgIDAuMDlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiclwiOiAwLjAyOCxcbiAgICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTY3NzcyMTVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjA2NSxcbiAgICAgICAgICAgICAgICAgIDAuMDQ4LFxuICAgICAgICAgICAgICAgICAgLTAuM1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAgICAgICAtMC4zNlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNjgsXG4gICAgICAgICAgICAgICAgICAwLjAzMixcbiAgICAgICAgICAgICAgICAgIC0wLjM5NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyXCI6IDAuMDI2LFxuICAgICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAgICAgICAwLjA4MixcbiAgICAgICAgICAgICAgICAgIC0wLjI3NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xMTUsXG4gICAgICAgICAgICAgICAgICAwLjA2OCxcbiAgICAgICAgICAgICAgICAgIC0wLjMzNVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4xNjUsXG4gICAgICAgICAgICAgICAgICAwLjA1OCxcbiAgICAgICAgICAgICAgICAgIC0wLjM3XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJcIjogMC4wMjYsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDQ5OTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgICAgICAgIC0wLjMzXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMTUsXG4gICAgICAgICAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAgICAgICAgIC0wLjM5NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAgICAgICAwLjAzNCxcbiAgICAgICAgICAgICAgICAgIC0wLjQzMlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJyXCI6IDAuMDIyLFxuICAgICAgICAgICAgICBcInNlZ1wiOiA3LFxuICAgICAgICAgICAgICBcImhleFwiOiAxNjc3NzIxNVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgICAgICAgICAgMC4wMzQsXG4gICAgICAgICAgICAgICAgICAtMC40MzJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDQzLFxuICAgICAgICAgICAgICAgICAgMC4wMjUsXG4gICAgICAgICAgICAgICAgICAtMC40NVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgICAgIDAuMDE5LFxuICAgICAgICAgICAgICAgICAgLTAuNDYyXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInJcIjogMC4wMTUsXG4gICAgICAgICAgICAgIFwic2VnXCI6IDcsXG4gICAgICAgICAgICAgIFwiaGV4XCI6IDE2Nzc3MjE1XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImVsbGlwc29pZHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMC4wMjAwMDAwMDAwMDAwMDAwMDQsXG4gICAgICAgICAgICAgIDAuMDU0LFxuICAgICAgICAgICAgICAtMC4yNzUsXG4gICAgICAgICAgICAgIDAuMDY5NDc4MTUwNzA0OTM1LFxuICAgICAgICAgICAgICAwLjA0MixcbiAgICAgICAgICAgICAgMC4wNDIsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuNTA3MDk4NTA0MzkyMzM3LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxMixcbiAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIDAuMDA3NSxcbiAgICAgICAgICAgICAgMC4wODM1LFxuICAgICAgICAgICAgICAtMC4yNSxcbiAgICAgICAgICAgICAgMC4wNzYxNDg1MTY3NDgwNjUwNCxcbiAgICAgICAgICAgICAgMC4wNDcsXG4gICAgICAgICAgICAgIDAuMDQ3LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLjQ0NDQxOTIwOTkwMTA5OTA3LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxMixcbiAgICAgICAgICAgICAgOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIDAuMDg1LFxuICAgICAgICAgICAgICAwLjA0MixcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4wMzQsXG4gICAgICAgICAgICAgIDAuMDM0LFxuICAgICAgICAgICAgICAwLjAzNCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAgIDAuMDc4LFxuICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAwLjAzMyxcbiAgICAgICAgICAgICAgMC4wMzMsXG4gICAgICAgICAgICAgIDAuMDMzLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMC4xMixcbiAgICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgICAgLTAuMzYsXG4gICAgICAgICAgICAgIDAuMDMxLFxuICAgICAgICAgICAgICAwLjAzMSxcbiAgICAgICAgICAgICAgMC4wMzEsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgIDVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLjExNSxcbiAgICAgICAgICAgICAgMC4wNjgsXG4gICAgICAgICAgICAgIC0wLjMzNSxcbiAgICAgICAgICAgICAgMC4wMzEsXG4gICAgICAgICAgICAgIDAuMDMxLFxuICAgICAgICAgICAgICAwLjAzMSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIDAuMTc0MDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgIDAuMDMyLFxuICAgICAgICAgICAgICAwLjEzNSxcbiAgICAgICAgICAgICAgMC4wNDIsXG4gICAgICAgICAgICAgIDAuMDMzLFxuICAgICAgICAgICAgICAwLjAzNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgODAyNDk0NCxcbiAgICAgICAgICAgICAgMC4xOTgsXG4gICAgICAgICAgICAgIDAuMDI4LFxuICAgICAgICAgICAgICAwLjEzNSxcbiAgICAgICAgICAgICAgMC4wMTQsXG4gICAgICAgICAgICAgIDAuMDIyLFxuICAgICAgICAgICAgICAwLjAyNixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTY3NzcyMTUsXG4gICAgICAgICAgICAgIDAuMTcxLFxuICAgICAgICAgICAgICAwLjA2MixcbiAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgMC4wNDIsXG4gICAgICAgICAgICAgIDAuMDMzLFxuICAgICAgICAgICAgICAwLjAzNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgODAyNDk0NCxcbiAgICAgICAgICAgICAgMC4xOTUsXG4gICAgICAgICAgICAgIDAuMDU3OTk5OTk5OTk5OTk5OTk2LFxuICAgICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgICAwLjAxNCxcbiAgICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAgIDAuMDI2LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICA2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMC4xNzQwMDAwMDAwMDAwMDAwMixcbiAgICAgICAgICAgICAgMC4wMzIsXG4gICAgICAgICAgICAgIC0wLjM5NSxcbiAgICAgICAgICAgICAgMC4wNDIsXG4gICAgICAgICAgICAgIDAuMDMzLFxuICAgICAgICAgICAgICAwLjAzNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgODAyNDk0NCxcbiAgICAgICAgICAgICAgMC4xOTgsXG4gICAgICAgICAgICAgIDAuMDI4LFxuICAgICAgICAgICAgICAtMC4zOTUsXG4gICAgICAgICAgICAgIDAuMDE0LFxuICAgICAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAgICAgMC4wMjYsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgIDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLjE3MSxcbiAgICAgICAgICAgICAgMC4wNTgsXG4gICAgICAgICAgICAgIC0wLjM3LFxuICAgICAgICAgICAgICAwLjA0MixcbiAgICAgICAgICAgICAgMC4wMzMsXG4gICAgICAgICAgICAgIDAuMDM1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICA1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICA4MDI0OTQ0LFxuICAgICAgICAgICAgICAwLjE5NSxcbiAgICAgICAgICAgICAgMC4wNTQwMDAwMDAwMDAwMDAwMDYsXG4gICAgICAgICAgICAgIC0wLjM3LFxuICAgICAgICAgICAgICAwLjAxNCxcbiAgICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAgIDAuMDI2LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICA4LFxuICAgICAgICAgICAgICA2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxNjc3NzIxNSxcbiAgICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAgIDAuMDM0LFxuICAgICAgICAgICAgICAtMC40MzIsXG4gICAgICAgICAgICAgIDAuMDIzLFxuICAgICAgICAgICAgICAwLjAyMyxcbiAgICAgICAgICAgICAgMC4wMjMsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDgsXG4gICAgICAgICAgICAgIDZcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDE2Nzc3MjE1LFxuICAgICAgICAgICAgICAwLjA3MyxcbiAgICAgICAgICAgICAgMC4wMTksXG4gICAgICAgICAgICAgIC0wLjQ2MyxcbiAgICAgICAgICAgICAgMC4wMTYsXG4gICAgICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgICAgICAwLjAxNSxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgOCxcbiAgICAgICAgICAgICAgNlxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJoZWFkXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiSGVhZCwgZWFycyBhbmQgbm9zZVwiLFxuICAgICAgICAgIFwibWF0ZXJpYWxcIjogXCJmdXJcIixcbiAgICAgICAgICBcInBhcmVudFwiOiBcImJvZHlcIixcbiAgICAgICAgICBcInV2XCI6IFwid29ybGRcIixcbiAgICAgICAgICBcInV2U2NhbGVcIjogMC4zLFxuICAgICAgICAgIFwidGludFwiOiB7XG4gICAgICAgICAgICBcImF4aXNcIjogXCJ6XCIsXG4gICAgICAgICAgICBcImZyb21cIjogMC4zODUsXG4gICAgICAgICAgICBcInRvXCI6IDAuNDUsXG4gICAgICAgICAgICBcImMwXCI6IDE2Nzc3MjE1LFxuICAgICAgICAgICAgXCJjMVwiOiA4MTU2MjcwLFxuICAgICAgICAgICAgXCJrZWVwXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiZWxsaXBzb2lkc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDExMDQyODk1LFxuICAgICAgICAgICAgICAtMC4wNjUsXG4gICAgICAgICAgICAgIDAuMDY2LFxuICAgICAgICAgICAgICAwLjMyLFxuICAgICAgICAgICAgICAwLjA3NCxcbiAgICAgICAgICAgICAgMC4wNjQsXG4gICAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDE2LFxuICAgICAgICAgICAgICAxMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMTEwNDI4OTUsXG4gICAgICAgICAgICAgIC0wLjA3NSxcbiAgICAgICAgICAgICAgMC4wNjIsXG4gICAgICAgICAgICAgIDAuMjcyLFxuICAgICAgICAgICAgICAwLjA1NCxcbiAgICAgICAgICAgICAgMC4wNTQsXG4gICAgICAgICAgICAgIDAuMDQ1LFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxMCxcbiAgICAgICAgICAgICAgN1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMjc2MjI3NixcbiAgICAgICAgICAgICAgLTAuMDIzLFxuICAgICAgICAgICAgICAwLjA0MixcbiAgICAgICAgICAgICAgMC40NjMsXG4gICAgICAgICAgICAgIDAuMDE5LFxuICAgICAgICAgICAgICAwLjAxNyxcbiAgICAgICAgICAgICAgMC4wMTUsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDEwLFxuICAgICAgICAgICAgICA2XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInR1YmVzQWxvbmdcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInN0YXRpb25zXCI6IFtcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjM0NSxcbiAgICAgICAgICAgICAgICAgIC0wLjA0NSxcbiAgICAgICAgICAgICAgICAgIDAuMDU0LFxuICAgICAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgICAgIDAuMDJcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMzQ3NDgxNDgxNDgxNDgxNDUsXG4gICAgICAgICAgICAgICAgICAtMC4wNDQ5NjI5NjI5NjI5NjI5NTUsXG4gICAgICAgICAgICAgICAgICAwLjA1MjkyNTkyNTkyNTkyNTkyNSxcbiAgICAgICAgICAgICAgICAgIDAuMDI5NjY2NjY2NjY2NjY2NjY0LFxuICAgICAgICAgICAgICAgICAgMC4wMjQ4NTE4NTE4NTE4NTE4NTRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMzUxNDA3NDA3NDA3NDA3NDUsXG4gICAgICAgICAgICAgICAgICAtMC4wNDQ4MTQ4MTQ4MTQ4MTQ4MTQsXG4gICAgICAgICAgICAgICAgICAwLjA1MTQwNzQwNzQwNzQwNzQsXG4gICAgICAgICAgICAgICAgICAwLjA0Mjg4ODg4ODg4ODg4ODg4NixcbiAgICAgICAgICAgICAgICAgIDAuMDMxNDgxNDgxNDgxNDgxNDg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjM1OCxcbiAgICAgICAgICAgICAgICAgIC0wLjA0NCxcbiAgICAgICAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAgICAgICAwLjA1MixcbiAgICAgICAgICAgICAgICAgIDAuMDM2XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjM2ODU1NTU1NTU1NTU1NTUsXG4gICAgICAgICAgICAgICAgICAtMC4wNDIxMTExMTExMTExMTExMSxcbiAgICAgICAgICAgICAgICAgIDAuMDQ4OTI1OTI1OTI1OTI1OTM1LFxuICAgICAgICAgICAgICAgICAgMC4wNTMxNDgxNDgxNDgxNDgxNCxcbiAgICAgICAgICAgICAgICAgIDAuMDM2NDQ0NDQ0NDQ0NDQ0NDRcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMzgxNzc3Nzc3Nzc3Nzc3NyxcbiAgICAgICAgICAgICAgICAgIC0wLjAzOTU1NTU1NTU1NTU1NTU2LFxuICAgICAgICAgICAgICAgICAgMC4wNDc5NjI5NjI5NjI5NjI5NjQsXG4gICAgICAgICAgICAgICAgICAwLjA1MDE4NTE4NTE4NTE4NTE4LFxuICAgICAgICAgICAgICAgICAgMC4wMzQ3Nzc3Nzc3Nzc3Nzc3OFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4zOTUsXG4gICAgICAgICAgICAgICAgICAtMC4wMzcsXG4gICAgICAgICAgICAgICAgICAwLjA0NyxcbiAgICAgICAgICAgICAgICAgIDAuMDQ3LFxuICAgICAgICAgICAgICAgICAgMC4wMzNcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDA3NzQwNzQwNzQwNzQwNzQsXG4gICAgICAgICAgICAgICAgICAtMC4wMzQ1OTI1OTI1OTI1OTI1OSxcbiAgICAgICAgICAgICAgICAgIDAuMDQ2LFxuICAgICAgICAgICAgICAgICAgMC4wNDQ4MTQ4MTQ4MTQ4MTQ4MTQsXG4gICAgICAgICAgICAgICAgICAwLjAzMTc0MDc0MDc0MDc0MDc1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQyMDQ4MTQ4MTQ4MTQ4MTQ2LFxuICAgICAgICAgICAgICAgICAgLTAuMDMyMTg1MTg1MTg1MTg1MTgsXG4gICAgICAgICAgICAgICAgICAwLjA0NSxcbiAgICAgICAgICAgICAgICAgIDAuMDQyNDA3NDA3NDA3NDA3NDE0LFxuICAgICAgICAgICAgICAgICAgMC4wMzAzNzAzNzAzNzAzNzAzN1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40MzIsXG4gICAgICAgICAgICAgICAgICAtMC4wMyxcbiAgICAgICAgICAgICAgICAgIDAuMDQ0LFxuICAgICAgICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgICAgICAgIDAuMDI5XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQ0MixcbiAgICAgICAgICAgICAgICAgIC0wLjAyODA3NDA3NDA3NDA3NDA3LFxuICAgICAgICAgICAgICAgICAgMC4wNDI5MjU5MjU5MjU5MjU5MixcbiAgICAgICAgICAgICAgICAgIDAuMDM3NzQwNzQwNzQwNzQwNzQsXG4gICAgICAgICAgICAgICAgICAwLjAyNzc0MDc0MDc0MDc0MDc0M1xuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40NTA3Nzc3Nzc3Nzc3Nzc4LFxuICAgICAgICAgICAgICAgICAgLTAuMDI2MzcwMzcwMzcwMzcwMzY3LFxuICAgICAgICAgICAgICAgICAgMC4wNDE4NTE4NTE4NTE4NTE4NTUsXG4gICAgICAgICAgICAgICAgICAwLjAzNTQ4MTQ4MTQ4MTQ4MTQ4LFxuICAgICAgICAgICAgICAgICAgMC4wMjY0ODE0ODE0ODE0ODE0NzdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDU4LFxuICAgICAgICAgICAgICAgICAgLTAuMDI0OTk5OTk5OTk5OTk5OTk4LFxuICAgICAgICAgICAgICAgICAgMC4wNDEsXG4gICAgICAgICAgICAgICAgICAwLjAzMyxcbiAgICAgICAgICAgICAgICAgIDAuMDI1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQ2MzMxNDgxNDgxNDgxNDg1LFxuICAgICAgICAgICAgICAgICAgLTAuMDI0LFxuICAgICAgICAgICAgICAgICAgMC4wNDA0ODE0ODE0ODE0ODE0OCxcbiAgICAgICAgICAgICAgICAgIDAuMDMwNDgxNDgxNDgxNDgxNDgsXG4gICAgICAgICAgICAgICAgICAwLjAyMzQwNzQwNzQwNzQwNzQwOFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40NjcwNzQwNzQwNzQwNzQxLFxuICAgICAgICAgICAgICAgICAgLTAuMDIzMzMzMzMzMzMzMzMzMzM0LFxuICAgICAgICAgICAgICAgICAgMC4wNDAxODUxODUxODUxODUxODUsXG4gICAgICAgICAgICAgICAgICAwLjAyNzc0MDc0MDc0MDc0MDc0MyxcbiAgICAgICAgICAgICAgICAgIDAuMDIxNTkyNTkyNTkyNTkyNTk0XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjQ3LFxuICAgICAgICAgICAgICAgICAgLTAuMDIzLFxuICAgICAgICAgICAgICAgICAgMC4wNCxcbiAgICAgICAgICAgICAgICAgIDAuMDI0LFxuICAgICAgICAgICAgICAgICAgMC4wMTlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDcyMjIyMjIyMjIyMjIyMTUsXG4gICAgICAgICAgICAgICAgICAtMC4wMjMxNDgxNDgxNDgxNDgxNDcsXG4gICAgICAgICAgICAgICAgICAwLjAzOTkyNTkyNTkyNTkyNTkyLFxuICAgICAgICAgICAgICAgICAgMC4wMTgwMDAwMDAwMDAwMDAwMDIsXG4gICAgICAgICAgICAgICAgICAwLjAxNDcwMzcwMzcwMzcwMzcwMVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC40NzM2MTExMTExMTExMTExLFxuICAgICAgICAgICAgICAgICAgLTAuMDIzNjI5NjI5NjI5NjI5NjMsXG4gICAgICAgICAgICAgICAgICAwLjAzOTk2Mjk2Mjk2Mjk2Mjk2NCxcbiAgICAgICAgICAgICAgICAgIDAuMDExMDAwMDAwMDAwMDAwMDAzLFxuICAgICAgICAgICAgICAgICAgMC4wMDk2Mjk2Mjk2Mjk2Mjk2MjlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuNDc0NSxcbiAgICAgICAgICAgICAgICAgIC0wLjAyMzk5OTk5OTk5OTk5OTk5NyxcbiAgICAgICAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAgICAgICAwLjAwNixcbiAgICAgICAgICAgICAgICAgIDAuMDA2XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTEwNDI4OTVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiZXh0cnVkZXNcIjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAzLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMyxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDMzLFxuICAgICAgICAgICAgICAgICAgLTAuMDI5NzVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDE4NixcbiAgICAgICAgICAgICAgICAgIC0wLjA2OTdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgICAgICAgLTAuMDg1XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMDYsXG4gICAgICAgICAgICAgICAgICAtMC4wODVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAxODYsXG4gICAgICAgICAgICAgICAgICAtMC4wNjk3XG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAtMC4wMzMsXG4gICAgICAgICAgICAgICAgICAtMC4wMjk3NVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJ6MFwiOiAtMC4wMDQsXG4gICAgICAgICAgICAgIFwiejFcIjogMC4wMDQsXG4gICAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgICBcInJ5XCI6IDAuOTYsXG4gICAgICAgICAgICAgIFwicnpcIjogMC41NSxcbiAgICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgICAgLTAuMTAyMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgICAgMC4xMTcsXG4gICAgICAgICAgICAgICAgMC4yOTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJoZXhcIjogMTAxMTk3NzJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDI2LFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgMC4wMjYsXG4gICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAwLjAyODYsXG4gICAgICAgICAgICAgICAgICAtMC4wMjUxOTk5OTk5OTk5OTk5OTdcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDE2MTIsXG4gICAgICAgICAgICAgICAgICAtMC4wNTkwMzk5OTk5OTk5OTk5OTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIDAuMDA1MixcbiAgICAgICAgICAgICAgICAgIC0wLjA3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDA1MixcbiAgICAgICAgICAgICAgICAgIC0wLjA3MlxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgLTAuMDE2MTIsXG4gICAgICAgICAgICAgICAgICAtMC4wNTkwMzk5OTk5OTk5OTk5OTVcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIC0wLjAyODYsXG4gICAgICAgICAgICAgICAgICAtMC4wMjUxOTk5OTk5OTk5OTk5OTdcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFwiejBcIjogLTAuMDA0LFxuICAgICAgICAgICAgICBcInoxXCI6IDAuMDA0LFxuICAgICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgICAgXCJyeVwiOiAyLjMsXG4gICAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAgIC0wLjEwNyxcbiAgICAgICAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAgICAgICAwLjMzNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBcImhleFwiOiA5MDY5MTI0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBcImJveGVzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMzgxMzkzNixcbiAgICAgICAgICAgICAgLTAuMDczLFxuICAgICAgICAgICAgICAwLjExLFxuICAgICAgICAgICAgICAwLjM4NSxcbiAgICAgICAgICAgICAgMC4wMDUsXG4gICAgICAgICAgICAgIDAuMDA0LFxuICAgICAgICAgICAgICAwLjAyNCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC4yNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgNDg2NjYyMCxcbiAgICAgICAgICAgICAgMC4wMDkwMDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAgIDAuNDMsXG4gICAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgICAwLjAwNCxcbiAgICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYW4/OiBudW1iZXJbXVtdLCBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB3aWR0aCwgYmV2ZWxFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM6IG9wdHMuY3VydmVTZWdtZW50cyA/PyA2IH0pO1xuICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUod2lkdGggLyAyLCAwLCAwKTtcbiAgc2hhcGVXaWR0aChnLCBvcHRzKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksXG4gICAgICAgICAgICAgICAgICAgIG9wdHM6IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdIH0pOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpOyBjb25zdCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGlmIChvcHRzLnR1bWJsZSkge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgICB4ICo9IDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgICB9XG4gICAgaWYgKG9wdHMucGxhbiAmJiBvcHRzLnBsYW4ubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3Qgc3QgPSBvcHRzLnBsYW47XG4gICAgICBsZXQgcyA9IHN0WzBdWzFdO1xuICAgICAgaWYgKHogPD0gc3RbMF1bMF0pIHMgPSBzdFswXVsxXTtcbiAgICAgIGVsc2UgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHMgPSBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICAgIGVsc2UgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgICBjb25zdCB1ID0gKHogLSBzdFtrXVswXSkgLyAoc3RbayArIDFdWzBdIC0gc3Rba11bMF0pO1xuICAgICAgICAgIHMgPSBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1OyBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeCAqPSBzO1xuICAgIH1cbiAgICBwLnNldFgoaSwgeCk7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEEgc2VtaWNpcmN1bGFyIHdoZWVsLWFyY2ggbm90Y2ggYXMgcHJvZmlsZSBwb2ludHMsIHRvIGJlIHNwbGljZWQgaW50byBhIHNpZGUgcHJvZmlsZSB0aGF0IHJ1bnNcbiAqICBhbG9uZyB0aGUgc2lsbCBmcm9tICt6IHRvIC16IChpLmUuIHogREVDUkVBU0lORykuIGBuYCBzZWdtZW50czsgdGhlIGFyYyBpcyB0aGUgVE9QIGhhbGYuICovXG5mdW5jdGlvbiBhcmNoTm90Y2goemM6IG51bWJlciwgeVNpbGw6IG51bWJlciwgcjogbnVtYmVyLCBuID0gNyk6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJIC8gbjsgICAgICAgICAgICAgICAvLyAwIC4uIFBJLCBmcm9tICt6IHJvdW5kIHRoZSB0b3AgdG8gLXpcbiAgICBwdHMucHVzaChbemMgKyBNYXRoLmNvcyhhKSAqIHIsIHlTaWxsICsgTWF0aC5zaW4oYSkgKiByXSk7XG4gIH1cbiAgcmV0dXJuIHB0cztcbn1cblxuLyoqXG4gKiBBIFdIRUVMOiBvbmUgbGF0aGUgYWJvdXQgdGhlIGF4bGUuIFRoZSBwcm9maWxlIHJ1bnMgZnJvbSB0aGUgaHViIGZhY2Ugb24gb25lIHNpZGUgb3ZlciB0aGUgcmltXG4gKiBsaXAsIHRoZSB0eXJlIHNpZGV3YWxsLCB0aGUgdHJlYWQgYW5kIGJhY2sgZG93biB0aGUgZmFyIHNpZGUsIHNvIHRoZSB3aGVlbCBpcyBhIGNsb3NlZCBzb2xpZCB3aXRoXG4gKiBubyBvcGVuIGVuZCBmb3IgdGhlIHR1cm50YWJsZSBnYXRlIHRvIHJlYWQgdGhyb3VnaC4gUmV2b2x2ZWQgYWJvdXQgWSBhbmQgdGhlbiBsYWlkIG9uIFgsIHNvIHRoZVxuICogYXhsZSBpcyB0aGUgeCBheGlzIGFuZCB0aGUgd2hlZWwgcm9sbHMgYWJvdXQgaXQgLS0gd2hpY2ggaXMgdGhlIGF4aXMgaXRzIHBpdm90IGRlY2xhcmVzLlxuICpcbiAqIFR3byB2ZXJ0ZXggY29sb3VyczogYHJpbUhleGAgb24gdGhlIGh1YiBhbmQgcmltIHBvaW50cywgYHR5cmVIZXhgIG9uIHRoZSBzaWRld2FsbCBhbmQgdHJlYWQuIFRoZVxuICogbGF0aGUgb3JkZXJzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IgKGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSwgd2hpY2ggaXMgd2hhdCBsZXRzIGFcbiAqIHBlci1wcm9maWxlLXBvaW50IGNvbG91ciBiZSB3cml0dGVuIHdpdGhvdXQgYSBzZWNvbmQgZ2VvbWV0cnkuXG4gKi9cbmZ1bmN0aW9uIHdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICB0eXJlSGV4OiBudW1iZXIsIHJpbUhleDogbnVtYmVyLCBkaXNoID0gMC41NSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVztcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjMwLCAtaHcgKiBkaXNoXSwgW3JSaW0gKiAwLjYyLCAtaHcgKiAwLjgwXSwgW3JSaW0sIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45OF0sXG4gICAgW3JUeXJlICogMC45MywgLWh3XSwgW3JUeXJlLCAtaHcgKiAwLjcyXSwgW3JUeXJlLCBodyAqIDAuNzJdLCBbclR5cmUgKiAwLjkzLCBod10sXG4gICAgW3JSaW0sIGh3ICogMC45OF0sIFtyUmltLCBodyAqIDAuODZdLCBbclJpbSAqIDAuNjIsIGh3ICogMC44MF0sIFtyUmltICogMC4zMCwgaHcgKiBkaXNoXSwgWzAsIGh3ICogZGlzaF0sXG4gIF07XG4gIGNvbnN0IHJpbVBvaW50ID0gKGo6IG51bWJlcikgPT4gaiA8PSA0IHx8IGogPj0gOTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIGNyID0gbmV3IFRIUkVFLkNvbG9yKHJpbUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYyA9IHJpbVBvaW50KGkgJSBwdHMubGVuZ3RoKSA/IGNyIDogY3Q7XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7ICAgIC8vIGxhdGhlIGF4aXMgWSAtPiBheGxlIG9uIFhcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIFdpcmUtc3Bva2VkIHdoZWVsIGRyZXNzaW5nOiBgbmAgdGhpbiBib3hlcyByYWRpYXRpbmcgZnJvbSB0aGUgaHViLCBsYWNlZCBhbHRlcm5hdGVseSB0byBlYWNoXG4gKiAgc2lkZSBvZiB0aGUgcmltIHNvIHRoZXkgY3Jvc3MgdGhlIHdheSByZWFsIHNwb2tlcyBkby4gTWVyZ2VkIGludG8gdGhlIHdoZWVsIGdlb21ldHJ5IHNvIHRoZVxuICogIHdoZWVsIHN0YXlzIE9ORSBpbnN0YW5jZWQgZ2VvbWV0cnkuICovXG5mdW5jdGlvbiBzcG9rZXMockh1YjogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIG46IG51bWJlciwgaGV4OiBudW1iZXIsIHQgPSAwLjAwNik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2VnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAqIDIgLyBuO1xuICAgIGNvbnN0IHNpZGUgPSAoaSAlIDIgPT09IDAgPyAxIDogLTEpICogaGFsZlcgKiAwLjM1O1xuICAgIGNvbnN0IGxlbiA9IHJSaW0gLSBySHViO1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodCwgbGVuLCB0KTtcbiAgICBnLnRyYW5zbGF0ZSgwLCBySHViICsgbGVuIC8gMiwgMCk7XG4gICAgZy5yb3RhdGVYKE1hdGguYXRhbjIoc2lkZSwgbGVuKSAqIDAuNik7XG4gICAgZy5yb3RhdGVYKDApOyBnLnRyYW5zbGF0ZSgwLCAwLCBzaWRlICogMC41KTtcbiAgICBnLnJvdGF0ZVgoYSk7ICAgICAgICAgICAgLy8gcmFkaWF0ZSBhcm91bmQgdGhlIGF4bGUgKHgpXG4gICAgc2Vncy5wdXNoKGcpO1xuICB9XG4gIHJldHVybiB0aW50R2VvKG1lcmdlR2VvcyhzZWdzKSwgaGV4KTtcbn1cblxuLyoqIEEgcG9seWxpbmUgVFVCRTogb25lIGN5bGluZGVyIHBlciBzZWdtZW50LCBlYWNoIHJvdGF0ZWQgb250byBpdHMgY2hvcmQsIHdpdGggYSBzbWFsbCBzcGhlcmUtbGVzc1xuICogIG92ZXJsYXAgc28gdGhlIGpvaW50cyBjbG9zZS4gSGFuZGxlYmFycywgY2Fub3B5IHJhaWxzLCByb2xsIGNhZ2VzIGFuZCBmcmFtZSB0dWJlcy4gKi9cbmZ1bmN0aW9uIHR1YmUocHRzOiBudW1iZXJbXVtdLCByOiBudW1iZXIsIHNlZyA9IDgsIGhleD86IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgZmFsc2UpO1xuICAgIGNvbnN0IHEgPSBuZXcgVEhSRUUuUXVhdGVybmlvbigpLnNldEZyb21Vbml0VmVjdG9ycyhuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgZC5ub3JtYWxpemUoKSk7XG4gICAgZy5hcHBseVF1YXRlcm5pb24ocSk7XG4gICAgY29uc3QgbSA9IGEuY2xvbmUoKS5hZGQoYikubXVsdGlwbHlTY2FsYXIoMC41KTtcbiAgICBnLnRyYW5zbGF0ZShtLngsIG0ueSwgbS56KTtcbiAgICBwYXJ0cy5wdXNoKGcpO1xuICB9XG4gIGNvbnN0IG91dCA9IG1lcmdlR2VvcyhwYXJ0cyk7XG4gIHJldHVybiBoZXggPT09IHVuZGVmaW5lZCA/IG91dCA6IHRpbnRHZW8ob3V0LCBoZXgpO1xufVxuXG4vKiogQSByb3RhdGVkIGJveDogW2N4LCBjeSwgY3osIHcsIGgsIGQsIHJ4LCByeSwgcnpdIHdpdGggdGhlIHJvdGF0aW9ucyBhcHBsaWVkIGluIHgsIHksIHogb3JkZXJcbiAqICBhYm91dCB0aGUgYm94J3Mgb3duIGNlbnRyZS4gQSBib25uZXQgbGlwLCBhIHJha2VkIG1pcnJvciBzdGVtLCBhIGNhbm9weSBzdGF5LiAqL1xuZnVuY3Rpb24gcmJveChiOiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeShiWzNdLCBiWzRdLCBiWzVdKTtcbiAgaWYgKGJbNl0pIGcucm90YXRlWChiWzZdKTsgaWYgKGJbN10pIGcucm90YXRlWShiWzddKTsgaWYgKGJbOF0pIGcucm90YXRlWihiWzhdKTtcbiAgZy50cmFuc2xhdGUoYlswXSwgYlsxXSwgYlsyXSk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSBiYXRjaCBvZiBib3hlcywgZWFjaCB0aW50ZWQsIG1lcmdlZDogW1toZXgsIGN4LCBjeSwgY3osIHcsIGgsIGQsIHJ4Pywgcnk/LCByej9dLCAuLi5dLiBUaGVcbiAqICB0cmltIGNvbXBvbmVudCBvZiBldmVyeSB2ZWhpY2xlIGlzIG9uZSBvZiB0aGVzZSAtLSBidW1wZXJzLCBncmlsbGUsIGxhbXBzLCBtaXJyb3JzLCBoYW5kbGVzLFxuICogIHN0ZXBzLCBhcmNoIGZsYXJlcyAtLSBzbyBmb3J0eSBwYXJ0cyByaWRlIG9uZSBzdWJtaXNzaW9uLiAqL1xuZnVuY3Rpb24gdGludGVkQm94ZXMobGlzdDogbnVtYmVyW11bXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gdGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSkpO1xufVxuXG4vKiogTWlycm9yIGEgYm94IGxpc3QgYWNyb3NzIHggPSAwIChsZWZ0L3JpZ2h0IHBhaXJzKS4gUm90YXRpb25zIGFib3V0IHkgYW5kIHogZmxpcCBzaWduLiAqL1xuZnVuY3Rpb24gbWlycm9yWChsaXN0OiBudW1iZXJbXVtdKTogbnVtYmVyW11bXSB7XG4gIHJldHVybiBsaXN0LmZsYXRNYXAoKGIpID0+IFtiLCBbYlswXSwgLWJbMV0sIGJbMl0sIGJbM10sIGJbNF0sIGJbNV0sIGJbNl0sIGJbN10gPz8gMCwgLShiWzhdID8/IDApLCAtKGJbOV0gPz8gMCldXSk7XG59XG5cbi8qKiBBIHNlYW1sZXNzIENhbnZhcyAyRCB0aWxlOiBgZHJhdyhjdHgsIHNpemUpYCBwYWludHMgaXQsIGFuZCB0aGUgcmVzdWx0IGlzIGEgcmVwZWF0aW5nIHRleHR1cmVcbiAqICBpbiBzUkdCLiBVc2VkIEFGVEVSIG1hdGVyaWFsIGNvbnN0cnVjdGlvbiwgc28gdGhlIHRleHR1cmVsZXNzIGRlY2xhcmF0aW9uIHN0YW5kcyBhbmQgbm9cbiAqICBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLiBSZXR1cm5zIG51bGwgd2hlcmUgdGhlcmUgaXMgbm8gRE9NICh0aGUgaGVhZGxlc3MgaGFybmVzc1xuICogIGhhcyBvbmU7IGEgbm9kZS1zaWRlIHByb2JlIGRvZXMgbm90KSwgYW5kIGV2ZXJ5IGNhbGxlciB0b2xlcmF0ZXMgbnVsbC4gKi9cbmZ1bmN0aW9uIGNhbnZhc1RpbGUoc2l6ZTogbnVtYmVyLCBkcmF3OiAoY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQsIHM6IG51bWJlcikgPT4gdm9pZCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gJ3VuZGVmaW5lZCcpIHJldHVybiBudWxsO1xuICBjb25zdCBjdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpOyBjdi53aWR0aCA9IHNpemU7IGN2LmhlaWdodCA9IHNpemU7XG4gIC8vIHdpbGxSZWFkRnJlcXVlbnRseSBrZWVwcyB0aGUgdGlsZSBvbiB0aGUgQ1BVIHJhc3RlciBwYXRoOiBhIEdQVS1iYWNrZWQgY2FudmFzIGNvc3RzIHNlY29uZHMgcGVyXG4gIC8vIHRob3VzYW5kIHBhdGggZmlsbHMgd2hlcmUgdGhlIHNvZnR3YXJlIHBhdGggdGFrZXMgdGVucyBvZiBtaWxsaXNlY29uZHMuXG4gIGNvbnN0IGN0eCA9IGN2LmdldENvbnRleHQoJzJkJywgeyB3aWxsUmVhZEZyZXF1ZW50bHk6IHRydWUgfSkgYXMgQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjM1O1xuICAgICAgY29uc3QgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA1O1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMjg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG4vKipcbiAqIFNIT1JUIEZVUjogYSBzZWFtbGVzcyB0aWxlIG9mIGRlbnNlLCBzaG9ydCwgZGlyZWN0aW9uYWwgaGFpciBzdHJva2VzIG92ZXIgYSBjbG91ZHkgdG9uZSBkcmlmdCwgYXMgYVxuICogbXVsdGlwbHkgbWFwIChhbmQgYnVtcCkgb24gYSB3aGl0ZSB2ZXJ0ZXgtY29sb3VyZWQgY29hdC4gVGhlIHN0cm9rZXMgcnVuIGFsb25nIHYgd2l0aCBhIGppdHRlcmVkXG4gKiBsZWFuIGFuZCBhIG5hcnJvdyB0b25lIHNwcmVhZCAtLSBhIHdpZGUgc3ByZWFkIHJlYWRzIGFzIHNjYWxlcywgYSBwZXJmZWN0IGxheSByZWFkcyBhcyBjb21iZWRcbiAqIHBsYXN0aWMuIGBwYXRjaGVzYCBhZGRzIGEgZmV3IHNvZnQgcGluay1ncmV5IGJhcmUgcGF0Y2hlcywgdGhlIG1hbmdlIG1hcmtzIG9mIGEgc3RyZWV0IGRvZy5cbiAqL1xuZnVuY3Rpb24gZnVyVGlsZShzaXplOiBudW1iZXIsIHNlZWQ6IG51bWJlciwgbzogYW55KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHJnYiA9ICh2OiBudW1iZXJbXSkgPT4gYCR7TWF0aC5yb3VuZCgyNTUgKiB2WzBdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMV0pfSwke01hdGgucm91bmQoMjU1ICogdlsyXSl9YDtcbiAgICBjb25zdCB0b25lID0gby50b25lID8/IFswLjcyLCAwLjY2LCAwLjU4XSwgbSA9IHMgKiAwLjA2O1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBjbG91ZHkgZHJpZnQgdW5kZXJuZWF0aCBzbyB0aGUgY29hdCBpcyBub3Qgb25lIGZsYXQgdmFsdWVcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IChvLmNsb3VkcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSAwLjA0ICsgcm5kKCkgKiAwLjEwO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IodG9uZSl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih0b25lKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGJhcmUgcGF0Y2hlczogc29mdCwgc3BhcnNlLCB3YXJtIGdyZXktcGlua1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8ucGF0Y2hlcyA/PyAwKTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjA1KSwgcGMgPSBvLnBhdGNoVG9uZSA/PyBbMC43MiwgMC41NiwgMC41Ml07XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3JnYihwYyl9LDAuNTUpYCk7IGcyLmFkZENvbG9yU3RvcCgwLjYsIGByZ2JhKCR7cmdiKHBjKX0sMC4zKWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2IocGMpfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZSh4ICsgZHgsIHkgKyBkeSwgciAqIDEuMywgciwgcm5kKCkgKiBNYXRoLlBJLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gaGFpciBzdHJva2VzOiBkYXJrIGFuZCBsaWdodCwgc2hvcnQsIGxlYW5pbmcgd2l0aGluICstMjIgZGVncmVlcyBvZiB2XG4gICAgY29uc3Qgc3Ryb2tlcyA9IG8uc3Ryb2tlcyA/PyA1MDAwLCBsZW4gPSBzICogKG8ubGVuZ3RoID8/IDAuMDIyKTtcbiAgICBjb25zdCBkcmF3U3Ryb2tlID0gKHg6IG51bWJlciwgeTogbnVtYmVyLCBkeDogbnVtYmVyLCBkeTogbnVtYmVyLCB3OiBudW1iZXIpID0+IHtcbiAgICAgIGN0eC5saW5lV2lkdGggPSB3OyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7XG4gICAgICBpZiAoeCA8IG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBzLCB5KTsgY3R4LmxpbmVUbyh4ICsgcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh4ID4gcyAtIG0pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGR4LCB5ICsgZHkpOyBjdHguc3Ryb2tlKCk7IH1cbiAgICAgIGlmICh5IDwgbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSArIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSArIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgICAgaWYgKHkgPiBzIC0gbSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSAtIHMpOyBjdHgubGluZVRvKHggKyBkeCwgeSAtIHMgKyBkeSk7IGN0eC5zdHJva2UoKTsgfVxuICAgIH07XG4gICAgY3R4LmxpbmVDYXAgPSAncm91bmQnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3Ryb2tlczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCB0aCA9IChybmQoKSAtIDAuNSkgKiAwLjc4LCBsID0gbGVuICogKDAuNiArIHJuZCgpICogMC44KTtcbiAgICAgIGNvbnN0IGxpZ2h0ID0gcm5kKCkgPCAwLjQyO1xuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9IGxpZ2h0ID8gJ3NjcmVlbicgOiAnbXVsdGlwbHknO1xuICAgICAgY3R4LnN0cm9rZVN0eWxlID0gbGlnaHQgPyBgcmdiYSgyNTUsMjUwLDI0MCwkezAuMDUgKyBybmQoKSAqIDAuMTB9KWAgOiBgcmdiYSgke3JnYih0b25lKX0sJHswLjA2ICsgcm5kKCkgKiAwLjE0fSlgO1xuICAgICAgZHJhd1N0cm9rZSh4LCB5LCBNYXRoLnNpbih0aCkgKiBsLCBNYXRoLmNvcyh0aCkgKiBsLCAwLjYgKyBybmQoKSAqIDEuMik7XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheiA9IE1hdGguYWJzKG5ybS5nZXRaKGkpKTtcbiAgICBjb25zdCB1ID0gYXggPj0gYXogPyBwLmdldFooaSkgOiBwLmdldFgoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogQmluZCBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIHRvIGEgbWF0ZXJpYWwgYXMgbWFwIChhbmQgYnVtcCksIGxlYXZpbmcgdGhlIHRleHR1cmVsZXNzXG4gKiAgZGVjbGFyYXRpb24gaW50YWN0OiBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzIHN5bnRoZXNpc2VkLCB0aGUgbWVhc3VyZWQgY29sb3VyIHN0YXlzIHRoZVxuICogIG11bHRpcGxpY2FuZCwgYW5kIHRoZSB3aG9sZSB0aGluZyBjb3N0cyBvbmUgY2FudmFzLiAqL1xuZnVuY3Rpb24gYmluZFRpbGUobWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCwgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCwgYnVtcCA9IDApOiB2b2lkIHtcbiAgaWYgKCF0ZXgpIHJldHVybjtcbiAgbWF0Lm1hcCA9IHRleDtcbiAgaWYgKGJ1bXAgPiAwKSB7IG1hdC5idW1wTWFwID0gdGV4OyBtYXQuYnVtcFNjYWxlID0gYnVtcDsgfVxuICBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xufVxuXG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBmZW5jZSBoZWxwZXJzICovXG5cbi8qKiBQYW5lbCBVVnM6IHUgYWxvbmcgd29ybGQgWCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB2IHdvcmxkIEhFSUdIVCBvdmVyIHRoZSBzYW1lLCByZWdhcmRsZXNzIG9mIHRoZVxuICogIGZhY2Ugbm9ybWFsLiBPbiBhIHRoaW4gc2xhYiB0aGlzIG1lYW5zIHRoZSBmcm9udCBhbmQgYmFjayBmYWNlcyBzaGFyZSB0aGUgc2FtZSB0aWxlIHBsYWNlbWVudFxuICogIGFuZCB0aGUgZWRnZXMgdGFrZSBhIHNsaXZlciBvZiBpdDsgYSBncmltZSB3YXNoIHRoYXQga2V5cyBvbiB2IHRoZW4gbGFuZHMgYXQgdGhlIHNhbWUgaGVpZ2h0IG9uXG4gKiAgZXZlcnkgZmFjZSwgd2hpY2ggaXMgd2hhdCByYWluIGFuZCBhbGdhZSBkby4gKi9cbmZ1bmN0aW9uIHBhbmVsVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlciwgcm90ID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICAvLyBgcm90YCBzd2FwcyB0aGUgYXhlcyBzbyBhIHRpbGUgb2YgVkVSVElDQUwgc3RyaXBzIHJlYWRzIGhvcml6b250YWwgLS0gdGhlIHdvdmVuIGJhbmRzIG9mIGFcbiAgLy8gYmFtYm9vIHBhbmVsIGFnYWluc3QgaXRzIHZlcnRpY2FsIG11bGxpb25zLCBvbmUgdGlsZSwgb25lIG1hdGVyaWFsLlxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHUgPSByb3QgPyBwLmdldFkoaSkgOiBwLmdldFgoaSksIHYgPSByb3QgPyBwLmdldFgoaSkgOiBwLmdldFkoaSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBzcXVhcmUgcHlyYW1pZCBTUElLRTogYmFzZSB3IHggdyBhdCBgYXRgLCBhcGV4IGggYWJvdmUuIEEgcGlja2V0J3Mgc3BlYXIgcG9pbnQsIGEgcGllciBjYXAuICovXG5mdW5jdGlvbiBzcGlrZShhdDogbnVtYmVyW10sIHc6IG51bWJlciwgaDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkNvbmVHZW9tZXRyeSh3IC8gTWF0aC5TUVJUMiwgaCwgNCwgMSwgZmFsc2UpO1xuICBnLnJvdGF0ZVkoTWF0aC5QSSAvIDQpO1xuICBnLnRyYW5zbGF0ZShhdFswXSwgYXRbMV0gKyBoIC8gMiwgYXRbMl0pO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEdSSU1FIHRpbGU6IGEgbXVsdGlwbGllciBvZiB3aGl0ZSB3aXRoIChhKSBhIGRhcmsgd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsXG4gKiAoYikgdmVydGljYWwgcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcCwgKGMpIHNvZnQgZGFyayBibG90Y2hlcywgKGQpIG9wdGlvbmFsIGdyZWVuIG1vc3MvYWxnYWVcbiAqIGJsb2JzIGNvbmNlbnRyYXRlZCBpbiB0aGUgYm90dG9tIGJhbmQsIGFuZCAoZSkgZmluZSBncmFpbi4gRXZlcnkgY29sb3VyIGlzIGEgZnJhY3Rpb24gb2YgdGhlXG4gKiBtYXRlcmlhbCdzIG1lYXN1cmVkIGFsYmVkbywgYW5kIHRoZSBkYXJrZXN0IGNvcmUgaXMgY2xhbXBlZCBzbyBub3RoaW5nIG9uIGEgd2hpdGUgb3IgY3JlYW1cbiAqIHN1cmZhY2UgZHJvcHMgdG93YXJkIHRoZSBob2xlIGdhdGUncyBsdW1hIDU4LlxuICovXG5mdW5jdGlvbiBncmltZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGAke01hdGgucm91bmQoMjU1ICogdlswXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzFdKX0sJHtNYXRoLnJvdW5kKDI1NSAqIHZbMl0pfWA7XG4gICAgY29uc3Qgd2FzaCA9IG8ud2FzaCA/PyBbMC42MiwgMC42MiwgMC41OF0sIHdhc2hBID0gby53YXNoQWxwaGEgPz8gMC43LCBjb3YgPSBvLmNvdmVyYWdlID8/IDAuMztcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgLy8gcmFpbiBzdHJlYWtzIGZyb20gdGhlIHRvcFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc3RyZWFrcyA/PyAyNik7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAxMiwgbGVuID0gcyAqICgwLjE1ICsgcm5kKCkgKiAwLjYpLCBhID0gMC4wNSArIHJuZCgpICogMC4xMjtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIDAsIDAsIGxlbik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2Iod2FzaCl9LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgY3R4LmZpbGxSZWN0KHgsIDAsIHcsIGxlbik7IGN0eC5maWxsUmVjdCh4IC0gcywgMCwgdywgbGVuKTtcbiAgICB9XG4gICAgLy8gZ3JvdW5kIHdhc2hcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdikpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke3dhc2hBfSlgKTsgZ3JhZC5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgke3JnYih3YXNoKX0sJHt3YXNoQSAqIDAuNDV9KWApOyBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYih3YXNoKX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGJsb3RjaGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5ibG90Y2hlcyA/PyA0MCk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMS42KSAqIHMsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNiwgYSA9IDAuMDggKyBybmQoKSAqIDAuMztcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7cmdiKHdhc2gpfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtyZ2Iod2FzaCl9LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIG1vc3MgLyBhbGdhZSBpbiB0aGUgYm90dG9tIGJhbmQ6IGNsdXN0ZXJlZCBzcGVja3MsIGJyaWdodGVyLXRoYW4td2FzaCBncmVlblxuICAgIGlmIChvLm1vc3MpIHtcbiAgICAgIGNvbnN0IG0gPSBvLm1vc3MsIGJhbmQgPSBvLm1vc3NCYW5kID8/IDAuMjI7XG4gICAgICAvLyBhIGZhaW50IGdyZWVuIHdhc2ggb3ZlciB0aGUgd2hvbGUgYmFuZCBmaXJzdCwgc28gdGhlIGNhcnBldHMgc2l0IGluIGRhbXAgZ3JvdW5kIHJhdGhlciB0aGFuXG4gICAgICAvLyBhcyBpc29sYXRlZCBkb3RzIG9uIGNsZWFuIHBhaW50XG4gICAgICBjb25zdCBtZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBiYW5kICogMS4zKSk7XG4gICAgICBtZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LCR7by5tb3NzV2FzaCA/PyAwLjM1fSlgKTsgbWcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7cmdiKG0pfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG1nOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IChvLm1vc3NDbHVzdGVycyA/PyAxNCk7IGsrKykge1xuICAgICAgICBjb25zdCBjeCA9IHJuZCgpICogcywgY3kgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuNikgKiBzICogYmFuZCwgY3IgPSBzICogKDAuMDE1ICsgcm5kKCkgKiAwLjA0KTtcbiAgICAgICAgLy8gdGhlIGNhcnBldDogYSBzb2Z0IGJsb2IsIHRoZW4gc3BlY2tzIG92ZXIgaXQgZm9yIHRoZSB0dWZ0ZWQgZWRnZVxuICAgICAgICBjb25zdCBjZyA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudChjeCwgY3ksIDAsIGN4LCBjeSwgY3IpO1xuICAgICAgICBjZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtyZ2IobSl9LDAuNylgKTsgY2cuYWRkQ29sb3JTdG9wKDAuNiwgYHJnYmEoJHtyZ2IobSl9LDAuMzUpYCk7IGNnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3JnYihtKX0sMClgKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNnO1xuICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguZWxsaXBzZShjeCArIGR4LCBjeSwgY3IsIGNyICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyNDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgYSA9IHJuZCgpICogTWF0aC5QSSAqIDIsIGQgPSBNYXRoLnNxcnQocm5kKCkpICogY3I7XG4gICAgICAgICAgY29uc3QgeCA9IGN4ICsgTWF0aC5jb3MoYSkgKiBkLCB5ID0gY3kgKyBNYXRoLnNpbihhKSAqIGQgKiAwLjYsIHIgPSAxICsgcm5kKCkgKiAzO1xuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3JnYihtKX0sJHswLjM1ICsgcm5kKCkgKiAwLjV9KWA7XG4gICAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGdyYWluXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNTAwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHYgPSAyMDAgKyBNYXRoLnJvdW5kKHJuZCgpICogNTUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMTIpYDsgY3R4LmZpbGxSZWN0KHgsIHksIDEuNSwgMS41KTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogQ0hBSU4tTElOSyB0aWxlOiBhIGRpYW1vbmQgd2lyZSBsYXR0aWNlIGRyYXduIG9wYXF1ZSBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLCBib3VuZCBhcyBtYXBcbiAqICBvbiBhbiBhbHBoYS10ZXN0ZWQgbWF0ZXJpYWwgc28gdGhlIGNlbGxzIGFyZSBvcGVuLiBPbmUgdGlsZSBpcyBvbmUgZGlhbW9uZCBjZWxsOyB0aGUgcGFuZSdzXG4gKiAgVVZzIHJlcGVhdCBpdCBhdCB0aGUgcmVhbCBtZXNoIHBpdGNoLiBgd2lyZWAgaXMgdGhlIHdpcmUgd2lkdGggYXMgYSBmcmFjdGlvbiBvZiB0aGUgY2VsbC4gKi9cbmZ1bmN0aW9uIGNoYWlubGlua1RpbGUoc2l6ZTogbnVtYmVyLCB3aXJlOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5saW5lV2lkdGggPSBNYXRoLm1heCgxLjUsIHdpcmUgKiBzKTtcbiAgICBjdHgubGluZUNhcCA9ICdyb3VuZCc7XG4gICAgY29uc3QgdiA9IDE1MCArIE1hdGgucm91bmQocm5kKCkgKiAzMCk7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYigke3Z9LCR7diArIDJ9LCR7diArIDR9KWA7XG4gICAgLy8gdHdvIGRpYWdvbmFscyB0aHJvdWdoIHRoZSB0aWxlLCBvZmZzZXQgc28gdGhlIHdyYXAgbWFrZXMgYSBjb250aW51b3VzIGRpYW1vbmQgbGF0dGljZVxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKDAsIDApOyBjdHgubGluZVRvKHMsIHMpO1xuICAgIGN0eC5tb3ZlVG8ocywgMCk7IGN0eC5saW5lVG8oMCwgcyk7XG4gICAgY3R4LnN0cm9rZSgpO1xuICAgIC8vIHRoZSBrbnVja2xlIHdoZXJlIHdpcmVzIHR3aXN0IHJvdW5kIGVhY2ggb3RoZXIsIGF0IHRoZSB0d28gY3Jvc3NpbmdzIG9uIHRoZSB0aWxlIGVkZ2VzXG4gICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2IC0gMjB9LCR7diAtIDE4fSwke3YgLSAxNn0pYDtcbiAgICBmb3IgKGNvbnN0IFt4LCB5XSBvZiBbWzAsIDBdLCBbcywgMF0sIFswLCBzXSwgW3MsIHNdLCBbcyAvIDIsIHMgLyAyXV0pIHtcbiAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4LCB5LCBjdHgubGluZVdpZHRoICogMC45LCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEJBTUJPTyBTVFJJUCB0aWxlOiB2ZXJ0aWNhbCBzcGxpdC1iYW1ib28gc3RyaXBzIHdpdGggcGFsZSBjdWxtIGZhY2VzLCBkYXJrIGpvaW50cyBiZXR3ZWVuIHRoZW1cbiAqICBhbmQgYSBub2RlIGxpbmUgb3IgdHdvIC0tIGEgbXVsdGlwbGllciBvbiB0aGUgbWVhc3VyZWQgc2lsdmVyLWdyZXkuICovXG5mdW5jdGlvbiBiYW1ib29UaWxlKHNpemU6IG51bWJlciwgc3RyaXBzOiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3Qgc3cgPSBzIC8gc3RyaXBzO1xuICAgIGZvciAobGV0IGIgPSAwOyBiIDwgc3RyaXBzOyBiKyspIHtcbiAgICAgIGNvbnN0IHRvbmUgPSAwLjgwICsgcm5kKCkgKiAwLjIsIHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3YgLSAyfSwke3YgLSA2fSlgOyBjdHguZmlsbFJlY3QoYiAqIHN3LCAwLCBzdywgcyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNTAsNDIsMzQsMC42KSc7IGN0eC5maWxsUmVjdChiICogc3csIDAsIE1hdGgubWF4KDEsIHMgKiAwLjAwNiksIHMpO1xuICAgICAgLy8gYSBoaWdobGlnaHQgZG93biB0aGUgY3VsbSdzIHJvdW5kXG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC4xMCknOyBjdHguZmlsbFJlY3QoYiAqIHN3ICsgc3cgKiAwLjM1LCAwLCBzdyAqIDAuMjUsIHMpO1xuICAgICAgLy8gbm9kZSByaW5nc1xuICAgICAgY29uc3QgbiA9IDEgKyBNYXRoLmZsb29yKHJuZCgpICogMik7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IG47IGsrKykgeyBjb25zdCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNzAsNjAsNDgsMC40NSknOyBjdHguZmlsbFJlY3QoYiAqIHN3LCB5LCBzdywgTWF0aC5tYXgoMSwgcyAqIDAuMDA4KSk7IH1cbiAgICAgIC8vIGZpbmUgZ3JhaW4gbGluZXNcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNjsgaysrKSB7IGNvbnN0IHggPSBiICogc3cgKyBybmQoKSAqIHN3OyBjdHguZmlsbFN0eWxlID0gYHJnYmEoODAsNzAsNTgsJHswLjA1ICsgcm5kKCkgKiAwLjF9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTsgfVxuICAgIH1cbiAgICAvLyBtb3VsZCBzcGVja2xlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDA7IGkrKykgeyBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjdHguZmlsbFN0eWxlID0gJ3JnYmEoMzAsMjgsMjQsMC4xOCknOyBjdHguZmlsbFJlY3QoeCwgeSwgMSArIHJuZCgpICogMiwgMSArIHJuZCgpICogMik7IH1cbiAgfSk7XG59XG5cbi8qKiBQT1NURVIgdGlsZSBmb3IgYSBob2FyZGluZzogdG9ybiBwYXN0ZS11cCBzaGVldHMgYW5kIGEgc3ByYXkgc3RlbmNpbCBvdmVyIGEgVFJBTlNQQVJFTlQgZ3JvdW5kLFxuICogIGJvdW5kIG9uIGFuIGFscGhhLXRlc3RlZCBwYW5lIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBzaGVldC4gYGxpbmVzYCBhcmUgdGhlIHN0ZW5jaWxcbiAqICBzdHJpbmdzOyBhIHByaW50ZWQgZ3JhcGhpYyBpcyBleGFjdGx5IHRoZSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgY2FzZS4gKi9cbmZ1bmN0aW9uIHBvc3RlclRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIGxpbmVzOiBzdHJpbmdbXSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHBhc3RlLXVwczogb3ZlcmxhcHBpbmcgb2ZmLXdoaXRlIHJlY3RhbmdsZXMgd2l0aCB0b3JuIGVkZ2VzIGFuZCBmYWludCBwcmludCBsaW5lc1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgNDsgaysrKSB7XG4gICAgICBjb25zdCB4ID0gcyAqICgwLjAyICsgcm5kKCkgKiAwLjMwKSwgeSA9IHMgKiAoMC4xNSArIHJuZCgpICogMC40NSksIHcgPSBzICogKDAuMTQgKyBybmQoKSAqIDAuMTYpLCBoID0gcyAqICgwLjE4ICsgcm5kKCkgKiAwLjIyKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgkezIyNSArIE1hdGgucm91bmQocm5kKCkgKiAyMCl9LCR7MjIyICsgTWF0aC5yb3VuZChybmQoKSAqIDE4KX0sJHsyMTAgKyBNYXRoLnJvdW5kKHJuZCgpICogMjApfSwwLjk2KWA7XG4gICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCwgeSk7XG4gICAgICBjb25zdCBuID0gOTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyAqIGkgLyBuLCB5ICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjA4KTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IG47IGkrKykgY3R4LmxpbmVUbyh4ICsgdyArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBmb3IgKGxldCBpID0gbiAtIDE7IGkgPj0gMDsgaS0tKSBjdHgubGluZVRvKHggKyB3ICogaSAvIG4sIHkgKyBoICsgKHJuZCgpIC0gMC41KSAqIGggKiAwLjEyKTtcbiAgICAgIGZvciAobGV0IGkgPSBuIC0gMTsgaSA+PSAwOyBpLS0pIGN0eC5saW5lVG8oeCArIChybmQoKSAtIDAuNSkgKiB3ICogMC4wOCwgeSArIGggKiBpIC8gbik7XG4gICAgICBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gJ3JnYmEoNDAsNDAsNDUsMC41NSknO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA3OyBpKyspIGN0eC5maWxsUmVjdCh4ICsgdyAqIDAuMSwgeSArIGggKiAoMC4yICsgaSAqIDAuMSksIHcgKiAoMC4zICsgcm5kKCkgKiAwLjUpLCBNYXRoLm1heCgxLCBzICogMC4wMDYpKTtcbiAgICB9XG4gICAgLy8gc3ByYXkgc3RlbmNpbCwgc2xpZ2h0bHkgc29mdCBhbmQgdW5ldmVuXG4gICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDIwLDIwLDIyLDAuODgpJztcbiAgICBjdHguZm9udCA9IGBib2xkICR7TWF0aC5yb3VuZChzICogMC4wNyl9cHggc2Fucy1zZXJpZmA7XG4gICAgY3R4LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGluZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBzICogMC40MCwgeSA9IHMgKiAoMC40NCArIGkgKiAwLjEzKTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgMzsgaysrKSB7IGN0eC5nbG9iYWxBbHBoYSA9IDAuNjsgY3R4LmZpbGxUZXh0KGxpbmVzW2ldLCB4ICsgKHJuZCgpIC0gMC41KSAqIDMsIHkgKyAocm5kKCkgLSAwLjUpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IDE7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIFNUUklQRSB0aWxlOiBhbHRlcm5hdGluZyBjb2xvdXIgYmFuZHMgYWxvbmcgdSAoYW4gYXduaW5nKSwgd2l0aCBhIHNvZnQgZ3JpbWUgbXVsdGlwbHkgc28gdGhlIGNsb3RoXG4gKiAgcmVhZHMgd29ybiByYXRoZXIgdGhhbiBwcmludGVkLiBgYWAvYGJgIGFyZSB0aGUgdHdvIGJhbmQgY29sb3VycyBhcyBbcixnLGJdIDAtMS4gQm91bmQgYXMgbWFwIG9uIGFcbiAqICBXSElURSBtYXRlcmlhbCBzbyB0aGUgYmFuZHMgY2FycnkgdGhlIHdob2xlIGFsYmVkby4gKi9cbmZ1bmN0aW9uIHN0cmlwZVRpbGUoc2l6ZTogbnVtYmVyLCBiYW5kczogbnVtYmVyLCBhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCByZ2IgPSAodjogbnVtYmVyW10pID0+IGByZ2IoJHtNYXRoLnJvdW5kKDI1NSAqIHZbMF0pfSwke01hdGgucm91bmQoMjU1ICogdlsxXSl9LCR7TWF0aC5yb3VuZCgyNTUgKiB2WzJdKX0pYDtcbiAgICBjb25zdCB3ID0gcyAvIGJhbmRzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYmFuZHM7IGkrKykgeyBjdHguZmlsbFN0eWxlID0gcmdiKGkgJSAyID8gYiA6IGEpOyBjdHguZmlsbFJlY3QoTWF0aC5mbG9vcihpICogdyksIDAsIE1hdGguY2VpbCh3KSArIDEsIHMpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDgsIGFsID0gMC4wNiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDE1MCwxNDAsMTI1LCR7YWx9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTUwLDE0MCwxMjUsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMjAwOyBpKyspIHsgY29uc3QgdiA9IDIwMCArIE1hdGgucm91bmQocm5kKCkgKiA1NSk7IGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjEwKWA7IGN0eC5maWxsUmVjdChybmQoKSAqIHMsIHJuZCgpICogcywgMS41LCAxLjUpOyB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICAvLyBBIExJVCBzdXJmYWNlIChhIGZsdW9yZXNjZW50IHR1YmUsIGEgY2hhcmNvYWwgZW1iZXIgYmVkKTogZW1pc3NpdmUgY2FycmllcyB0aGUgZ2xvdyB3aXRob3V0IGFcbiAgICAvLyBsaWdodCBzb3VyY2UsIHdoaWNoIHRoZSBraXQncyBwcm9wcyBuZXZlciBvd24gLS0gdGhlIGhvc3Qgc2NlbmUgb3ducyBsaWdodGluZy5cbiAgICBpZiAocy5lbWlzc2l2ZSAhPT0gdW5kZWZpbmVkKSB7IG0uZW1pc3NpdmUgPSBuZXcgVEhSRUUuQ29sb3Iocy5lbWlzc2l2ZSk7IG0uZW1pc3NpdmVJbnRlbnNpdHkgPSBzLmVtaXNzaXZlSW50ZW5zaXR5ID8/IDE7IH1cbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIC8vIEFuIEFMUEhBLUNVVCBwYW5lIChjaGFpbi1saW5rIG1lc2gpOiB0aGUgY2FudmFzIHRpbGUgY2FycmllcyB0aGUgY3V0LW91dCBpbiBpdHMgYWxwaGEgY2hhbm5lbCBhbmRcbiAgICAvLyBhbHBoYVRlc3QgZGlzY2FyZHMgdGhlIG9wZW4gY2VsbHMsIHNvIHRoZSB3aXJlIHN0YXlzIG9wYXF1ZSBhbmQgc29ydHMgbGlrZSBhIHNvbGlkLlxuICAgIGlmIChzLmFscGhhVGVzdCAhPT0gdW5kZWZpbmVkKSB7IG0uYWxwaGFUZXN0ID0gcy5hbHBoYVRlc3Q7IG0udHJhbnNwYXJlbnQgPSBmYWxzZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVTbGVlcGluZ1NvaURvZ01vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgY29uc3Qgcm9vdCA9IG5ldyBUSFJFRS5Hcm91cCgpO1xuICByb290Lm5hbWUgPSAnU2xlZXBpbmcgU29pIERvZyc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cblxuICAvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIGNvbXBvbmVudHNcbiAgICogRWFjaCBlbnRyeSBvZiBDT05GSUcuZ2VvbWV0cnkuY29tcG9uZW50cyBpcyBPTkUgbWVyZ2VkIGdlb21ldHJ5IG9uIE9ORSBtYXRlcmlhbCAtLSBvbmUgZHJhd1xuICAgKiBjYWxsLiBFdmVyeSBwYXJ0IGluc2lkZSBpdCBpcyBhIHRpbnRlZCBib3gsIHR1YmUsIGN5bGluZGVyLCBsYXRoZSBvciBwbGFuZTsgY29sb3VyIGRpZmZlcmVuY2VzXG4gICAqIGFyZSB2ZXJ0ZXggY29sb3Vycy4gYHV2YCBwaWNrcyBob3cgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSByZXBlYXRzIG92ZXIgaXQuICovXG4gIGZvciAoY29uc3QgYyBvZiBHLmNvbXBvbmVudHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoYy5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoYy5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGMudHViZXMgPz8gW10pIGFzIGFueVtdKSBncy5wdXNoKHR1YmUodC5wdHMsIHQuciwgdC5zZWcgPz8gOCwgdC5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChjLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIpO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGwgb2YgKGMubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gYHJ5YCB5YXdzIHRoZSByZXZvbHV0aW9uOiBhIDQtc2VnbWVudCBsYXRoZSB0dXJuZWQgNDUgZGVncmVlcyBpcyBhIGNoYW1mZXJlZCBTUVVBUkUgc2xhYiBpbiBvbmVcbiAgICAgIC8vIGdlb21ldHJ5IChhIGNvbmUncyBydWJiZXIgYmFzZSksIHdoZXJlIHR3byBzdGFja2VkIGJveGVzIHdvdWxkIGNvc3QgdHdvIGFuZCBhIGNvcGxhbmFyIHBhaXIuXG4gICAgICBjb25zdCBnID0gbGF0aGUobC5wdHMsIGwuc2VnID8/IDEyKTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IGdzLnB1c2godGludEdlbyhnLCBsLmhleCkpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHAgb2YgKGMucGxhbmVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBQQU5FOiBhIHNpbmdsZSBxdWFkIGluIHRoZSBYWSBwbGFuZSBhdCBkZXB0aCB6LCBkb3VibGUtc2lkZWQgYnkgaXRzIG1hdGVyaWFsLiBJdHMgVVZzIHJ1blxuICAgICAgLy8gMC4uMSBhY3Jvc3MgdGhlIHBhbmUgc28gYW4gYWxwaGEtY3V0IHRpbGUgcmVwZWF0cyBgcmVwYCB0aW1lcyBhY3Jvc3MgYW5kIGRvd24uXG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlBsYW5lR2VvbWV0cnkocC53LCBwLmgsIDEsIDEpO1xuICAgICAgZy50cmFuc2xhdGUocC5hdFswXSwgcC5hdFsxXSwgcC5hdFsyXSk7XG4gICAgICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1di5nZXRYKGkpICogKHAucmVwPy5bMF0gPz8gMSksIHV2LmdldFkoaSkgKiAocC5yZXA/LlsxXSA/PyAxKSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgcC5oZXgpKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBlIG9mIChjLmV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgLy8gQSBwcm9maWxlIGluIHRoZSBYWSBwbGFuZSBleHRydWRlZCBhbG9uZyBaIGJldHdlZW4gejAgYW5kIHoxIC0tIGEgc2xhYiB3aXRoIGEgbW91bGRlZCBlZGdlLFxuICAgICAgLy8gYSBweXJhbWlkIGNhcCBhcyBhIHN0ZXBwZWQgcHJvZmlsZSwgYSBzcGVhciBmaW5pYWwuXG4gICAgICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICAgICAgc2hhcGUubW92ZVRvKGUucG9seVswXVswXSwgZS5wb2x5WzBdWzFdKTtcbiAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZS5wb2x5Lmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8oZS5wb2x5W2ldWzBdLCBlLnBvbHlbaV1bMV0pO1xuICAgICAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gICAgICBmb3IgKGNvbnN0IGggb2YgKGUuaG9sZXMgPz8gW10pIGFzIG51bWJlcltdW11bXSkge1xuICAgICAgICBjb25zdCBocCA9IG5ldyBUSFJFRS5QYXRoKCk7IGhwLm1vdmVUbyhoWzBdWzBdLCBoWzBdWzFdKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCBoLmxlbmd0aDsgaSsrKSBocC5saW5lVG8oaFtpXVswXSwgaFtpXVsxXSk7XG4gICAgICAgIGhwLmNsb3NlUGF0aCgpOyBzaGFwZS5ob2xlcy5wdXNoKGhwKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGcgPSBleHRydWRlQWxvbmdaKHNoYXBlLCBlLnowLCBlLnoxKTtcbiAgICAgIGlmIChlLnJ4KSBnLnJvdGF0ZVgoZS5yeCk7XG4gICAgICBpZiAoZS5yeSkgZy5yb3RhdGVZKGUucnkpO1xuICAgICAgaWYgKGUucnopIGcucm90YXRlWihlLnJ6KTtcbiAgICAgIGlmIChlLmF0KSBnLnRyYW5zbGF0ZShlLmF0WzBdLCBlLmF0WzFdLCBlLmF0WzJdKTtcbiAgICAgIGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpO1xuICAgIH1cbiAgICAvLyBFTExJUFNPSURTOiBbaGV4LCBjeCwgY3ksIGN6LCByeCwgcnksIHJ6LCByb3RYPywgcm90WT8sIHJvdFo/XSAtLSBhIHVuaXQgc3BoZXJlIHNjYWxlZCBwZXIgYXhpc1xuICAgIC8vIGFuZCB0dXJuZWQgYWJvdXQgaXRzIG93biBjZW50cmUuIEEgc2t1bGwgZG9tZSwgYSBwYXcsIGEgbm9zZSBwYWQ6IHRoZSByb3VuZGVkIHNvbGlkcyBvZiBhblxuICAgIC8vIGFuaW1hbCB0aGF0IGEgYm94IG9yIGEgc3RhdGlvbiB0dWJlIGNhbm5vdCBnaXZlLCBzaGFyaW5nIHNtb290aCBub3JtYWxzIHRocm91Z2ggdGhlIG1lcmdlLlxuICAgIGZvciAoY29uc3QgZSBvZiAoYy5lbGxpcHNvaWRzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLlNwaGVyZUdlb21ldHJ5KDEsIGVbMTBdID8/IDE2LCBlWzExXSA/PyAxMik7XG4gICAgICBnLnNjYWxlKGVbNF0sIGVbNV0sIGVbNl0pO1xuICAgICAgaWYgKGVbN10pIGcucm90YXRlWChlWzddKTsgaWYgKGVbOF0pIGcucm90YXRlWShlWzhdKTsgaWYgKGVbOV0pIGcucm90YXRlWihlWzldKTtcbiAgICAgIGcudHJhbnNsYXRlKGVbMV0sIGVbMl0sIGVbM10pO1xuICAgICAgZ3MucHVzaCh0aW50R2VvKGcsIGVbMF0pKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBzIG9mIChjLnNwaWtlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godGludEdlbyhzcGlrZShzLmF0LCBzLncsIHMuaCksIHMuaGV4KSk7XG4gICAgLy8gT1JHQU5JQyBzdGF0aW9uIHR1YmVzOiBbeiwgY3gsIGN5LCByeCwgcnldIHN0YXRpb25zIHN3ZXB0IGFsb25nIFogLS0gdGhlIG9ubHkgc29mdCBmb3JtIGluIHRoZVxuICAgIC8vIGtpdCwgYSBseWluZyBhbmltYWwuIExpdCBzbW9vdGggYnkgdGhlIGhlbHBlcidzIHNoYXJlZCByaW5nIHZlcnRpY2VzLlxuICAgIGZvciAoY29uc3QgdCBvZiAoYy50dWJlc0Fsb25nID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgZyA9IHR1YmVBbG9uZyh0LnN0YXRpb25zLCB0LnNlZyA/PyAxMik7XG4gICAgICBpZiAodC5yeSkgZy5yb3RhdGVZKHQucnkpOyBpZiAodC5hdCkgZy50cmFuc2xhdGUodC5hdFswXSwgdC5hdFsxXSwgdC5hdFsyXSk7XG4gICAgICBncy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gMHhmZmZmZmYpKTtcbiAgICB9XG4gICAgbGV0IGcgPSBtZXJnZUdlb3MoZ3MpO1xuICAgIC8vIGEgcGVyLWNvbXBvbmVudCBzY2FsZSwgYXBwbGllZCB0byB0aGUgbWVyZ2UgYmVmb3JlIHRpbnRpbmc6IGhvdyBhIGx5aW5nIGFuaW1hbCBhdXRob3JlZCBhdFxuICAgIC8vIGl0cyBvd24gcHJvcG9ydGlvbnMgaXMgZml0dGVkIGludG8gdGhlIGRlY2xhcmVkIGVudmVsb3BlIHdpdGhvdXQgcmUtcmVhZGluZyBldmVyeSBzdGF0aW9uXG4gICAgaWYgKGMuc2NhbGUpIGcuc2NhbGUoYy5zY2FsZVswXSwgYy5zY2FsZVsxXSwgYy5zY2FsZVsyXSk7XG4gICAgLy8gQVhJUyBUSU5UOiBhIHBlci12ZXJ0ZXggYmxlbmQgZnJvbSBjMCBhdCBgZnJvbWAgdG8gYzEgYXQgYHRvYCBhbG9uZyBvbmUgYXhpcywgb3ZlciB0aGUgd2hvbGVcbiAgICAvLyBtZXJnZSAtLSBhIHRhbiBiYWNrIGZhZGluZyB0byBhIHdoaXRlIGJlbGx5IGNvc3RzIGFuIGF0dHJpYnV0ZSwgbm90IGEgc2Vjb25kIG1hdGVyaWFsLiBBcHBsaWVkXG4gICAgLy8gaW4gTElORUFSIHNwYWNlIHRocm91Z2ggVEhSRUUuQ29sb3IuIGBrZWVwYCBtdWx0aXBsaWVzIHRoZSBibGVuZCBpbnRvIHRoZSBleGlzdGluZyB0aW50IGluc3RlYWRcbiAgICAvLyBvZiByZXBsYWNpbmcgaXQsIHNvIGEgZGFyayBub3NlIHN0YXlzIGRhcmsuXG4gICAgaWYgKGMudGludCkge1xuICAgICAgY29uc3QgYSA9IG5ldyBUSFJFRS5Db2xvcihjLnRpbnQuYzApLCBiID0gbmV3IFRIUkVFLkNvbG9yKGMudGludC5jMSk7XG4gICAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGxldCBjb2wgPSBnLmdldEF0dHJpYnV0ZSgnY29sb3InKSBhcyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUgfCBudWxsO1xuICAgICAgaWYgKCFjb2wpIHsgY29sID0gbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKS5maWxsKDEpLCAzKTsgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgY29sKTsgfVxuICAgICAgY29uc3QgYXggPSBjLnRpbnQuYXhpcyA9PT0gJ3gnID8gMCA6IGMudGludC5heGlzID09PSAneScgPyAxIDogMjtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHYgPSBheCA9PT0gMCA/IHAuZ2V0WChpKSA6IGF4ID09PSAxID8gcC5nZXRZKGkpIDogcC5nZXRaKGkpO1xuICAgICAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHYgLSBjLnRpbnQuZnJvbSkgLyAoYy50aW50LnRvIC0gYy50aW50LmZyb20pKSk7XG4gICAgICAgIGNvbnN0IHIgPSBhLnIgKyAoYi5yIC0gYS5yKSAqIHQsIGdnID0gYS5nICsgKGIuZyAtIGEuZykgKiB0LCBiYiA9IGEuYiArIChiLmIgLSBhLmIpICogdDtcbiAgICAgICAgaWYgKGMudGludC5rZWVwKSBjb2wuc2V0WFlaKGksIGNvbC5nZXRYKGkpICogciwgY29sLmdldFkoaSkgKiBnZywgY29sLmdldFooaSkgKiBiYik7IGVsc2UgY29sLnNldFhZWihpLCByLCBnZywgYmIpO1xuICAgICAgfVxuICAgICAgY29sLm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKGMudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBjLnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGMudXYgPT09ICdwYW5lbCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoYy51diA9PT0gJ3BhbmVsLXJvdCcpIGcgPSBwYW5lbFVWKGcsIGMudXZTY2FsZSA/PyAxLCB0cnVlKTtcbiAgICBhZGQoYy5pZCwgYy5uYW1lLCBnLCBjLm1hdGVyaWFsKTtcbiAgICBpZiAoYy5jb2xsaWRlcikgY29sbGlkZXJzW2MuaWRdID0gYy5jb2xsaWRlcjtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcmVwZXRpdGlvbiBzeXN0ZW1zXG4gICAqIFBpY2tldHMsIHNsYXRzLCBsYXR0aWNlIHN0cmlwczogb25lIGdlb21ldHJ5LCBvbmUgSW5zdGFuY2VkTWVzaCwgb25lIGRyYXcgY2FsbC4gKi9cbiAgZm9yIChjb25zdCByIG9mIChHLmluc3RhbmNlZCA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgYiBvZiAoci5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHMgb2YgKHIuc3Bpa2VzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0aW50R2VvKHNwaWtlKHMuYXQsIHMudywgcy5oKSwgcy5oZXgpKTtcbiAgICBmb3IgKGNvbnN0IGN5IG9mIChyLmN5bHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoY3kucnQsIGN5LnJiLCBjeS5oLCBjeS5zZWcgPz8gMTIpO1xuICAgICAgaWYgKGN5LnJ4KSBnLnJvdGF0ZVgoY3kucngpOyBpZiAoY3kucnopIGcucm90YXRlWihjeS5yeik7XG4gICAgICBnLnRyYW5zbGF0ZShjeS5hdFswXSwgY3kuYXRbMV0sIGN5LmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGN5LmhleCkpO1xuICAgIH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKHIudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIHIudXZTY2FsZSA/PyAxKTtcbiAgICBpZiAoci51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCByLnV2U2NhbGUgPz8gMSk7XG4gICAgY29uc3QgbWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gICAgZm9yIChjb25zdCBwIG9mIHIucGxhY2VtZW50cyBhcyBudW1iZXJbXVtdKSB7XG4gICAgICBtYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKFxuICAgICAgICBuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tRXVsZXIobmV3IFRIUkVFLkV1bGVyKHBbM10gPz8gMCwgcFs0XSA/PyAwLCBwWzVdID8/IDApKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpKTtcbiAgICB9XG4gICAgYWRkSW5zdChyLmlkLCByLm5hbWUsIGcsIHIubWF0ZXJpYWwsIG1hdHMsIHIuY29sb3JzKTtcbiAgfVxuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzZXMgKi9cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICAvLyBBIEJBS0VEIGdyYXBoaWMgKGEgcHJpbnRlZCBzaWduIGZhY2UpOiBvbmUgV2ViUCBkYXRhIFVSSSBjb21wb3NlZCBvZmZsaW5lIGZyb20gdGhlIHBsYXRlJ3Mgb3duXG4gICAgLy8gcHJpbnRlZCByZWdpb24gYW5kIHZlY3RvciBtYXJrcywgbG9hZGVkIHRocm91Z2ggVGV4dHVyZUxvYWRlci4gQXNzaWduZWQgc3luY2hyb25vdXNseSBzbyB0aGVcbiAgICAvLyBoYXJuZXNzIHdhaXRzIG9uIHRoZSBkZWNvZGUuIEl0IGJlYXRzIGZpbGxUZXh0LCB3aGljaCBkcmF3cyBhIGRpZmZlcmVudCB3b3JkbWFyayBwZXIgbWFjaGluZS5cbiAgICBpZiAodC5raW5kID09PSAnYmFrZWQnKSB7XG4gICAgICAvLyBVbmRlciBwbGFpbiBOb2RlICh0aGUgY29wbGFuYXIgY2hlY2ssIHRoZSBydW50aW1lIHByb2JlKSB0aGVyZSBpcyBubyBkb2N1bWVudCBmb3IgSW1hZ2VMb2FkZXI6XG4gICAgICAvLyBrZWVwIHRoZSB3aGl0ZSBmYWxsYmFjayByYXRoZXIgdGhhbiB0aHJvdywgZXhhY3RseSBhcyB0aGUgcmV0YWlsIGdsYXppbmcgZG9lcy5cbiAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IGJha2VkID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKHQudXJpKTtcbiAgICAgIGNvbnN0IHNyZ2IgPSAoVEhSRUUgYXMgYW55KS5TUkdCQ29sb3JTcGFjZTtcbiAgICAgIGlmIChzcmdiKSBiYWtlZC5jb2xvclNwYWNlID0gc3JnYjtcbiAgICAgIGJha2VkLmFuaXNvdHJvcHkgPSA0O1xuICAgICAgbWF0Lm1hcCA9IGJha2VkOyBtYXQubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NvcnJ1Z2F0aW9uJykgdGV4ID0gY29ycnVnYXRpb25UaWxlKHQuc2l6ZSA/PyA1MTIsIHQucGl0Y2ggPz8gMTIsIHQubG93ID8/IDAuNywgdC5zZWVkID8/IDMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdncmltZScpIHRleCA9IGdyaW1lVGlsZSh0LnNpemUgPz8gNTEyLCB0LnNlZWQgPz8gMTEsIHQpO1xuICAgIGlmICh0LmtpbmQgPT09ICdmdXInKSB0ZXggPSBmdXJUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuc2VlZCA/PyAxMywgdCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ2NoYWlubGluaycpIHRleCA9IGNoYWlubGlua1RpbGUodC5zaXplID8/IDI1NiwgdC53aXJlID8/IDAuMDksIHQuc2VlZCA/PyA0KTtcbiAgICBpZiAodC5raW5kID09PSAnYmFtYm9vJykgdGV4ID0gYmFtYm9vVGlsZSh0LnNpemUgPz8gNTEyLCB0LnN0cmlwcyA/PyAxMCwgdC5zZWVkID8/IDYpO1xuICAgIGlmICh0LmtpbmQgPT09ICdzdHJpcGVzJykgdGV4ID0gc3RyaXBlVGlsZSh0LnNpemUgPz8gMjU2LCB0LmJhbmRzID8/IDgsIHQuYSwgdC5iLCB0LnNlZWQgPz8gOSk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3Bvc3RlcicpIHRleCA9IHBvc3RlclRpbGUodC5zaXplID8/IDUxMiwgdC5zZWVkID8/IDgsIHQubGluZXMgPz8gW10pO1xuICAgIGJpbmRUaWxlKG1hdCwgdGV4LCB0LmJ1bXAgPz8gMCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVTbGVlcGluZ1NvaURvZ01vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQXVCO0FBc0N2QixJQUFNLFNBQVM7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFFBQVE7QUFBQSxFQUNSLGNBQWM7QUFBQSxFQUNkLFlBQVk7QUFBQSxFQUNaLGFBQWE7QUFBQSxJQUNYO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsV0FBVztBQUFBLE1BQ1gsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixjQUFjO0FBQUEsTUFDWjtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsWUFBWTtBQUFBLFVBQ1YsU0FBUztBQUFBLFVBQ1QsZUFBZTtBQUFBLFlBQ2I7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLGVBQWU7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsUUFDWDtBQUFBLFFBQ0EsUUFBUTtBQUFBLFVBQ04sUUFBUTtBQUFBLFVBQ1IsUUFBUTtBQUFBLFVBQ1IsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBLGNBQWM7QUFBQSxVQUNaO0FBQUEsWUFDRSxZQUFZO0FBQUEsY0FDVjtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxTQUFTO0FBQUEsVUFDUDtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsVUFDQTtBQUFBLFlBQ0UsT0FBTztBQUFBLGNBQ0w7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE9BQU87QUFBQSxVQUNUO0FBQUEsUUFDRjtBQUFBLFFBQ0EsY0FBYztBQUFBLFVBQ1o7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxNQUFNO0FBQUEsUUFDTixRQUFRO0FBQUEsUUFDUixZQUFZO0FBQUEsUUFDWixVQUFVO0FBQUEsUUFDVixNQUFNO0FBQUEsUUFDTixXQUFXO0FBQUEsUUFDWCxRQUFRO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixRQUFRO0FBQUEsVUFDUixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0EsY0FBYztBQUFBLFVBQ1o7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLGNBQWM7QUFBQSxVQUNaO0FBQUEsWUFDRSxZQUFZO0FBQUEsY0FDVjtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsY0FDQTtBQUFBLGdCQUNFO0FBQUEsZ0JBQ0E7QUFBQSxnQkFDQTtBQUFBLGdCQUNBO0FBQUEsZ0JBQ0E7QUFBQSxjQUNGO0FBQUEsWUFDRjtBQUFBLFlBQ0EsT0FBTztBQUFBLFlBQ1AsT0FBTztBQUFBLFVBQ1Q7QUFBQSxRQUNGO0FBQUEsUUFDQSxZQUFZO0FBQUEsVUFDVjtBQUFBLFlBQ0UsUUFBUTtBQUFBLGNBQ047QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLGNBQ0E7QUFBQSxnQkFDRTtBQUFBLGdCQUNBO0FBQUEsY0FDRjtBQUFBLFlBQ0Y7QUFBQSxZQUNBLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxZQUNOLE1BQU07QUFBQSxjQUNKO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQSxPQUFPO0FBQUEsVUFDVDtBQUFBLFVBQ0E7QUFBQSxZQUNFLFFBQVE7QUFBQSxjQUNOO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFBQSxjQUNBO0FBQUEsZ0JBQ0U7QUFBQSxnQkFDQTtBQUFBLGNBQ0Y7QUFB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R0FBRyxHQUFHLENBQUMsRUFBRyxZQUFXLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUc7QUFBRSxZQUFJLFVBQVU7QUFBRyxZQUFJLFFBQVEsSUFBSSxJQUFJLElBQUksSUFBSSxJQUFJLEtBQUssR0FBRyxJQUFJLElBQUksS0FBSyxJQUFJLEdBQUcsS0FBSyxLQUFLLENBQUM7QUFBRyxZQUFJLEtBQUs7QUFBQSxNQUFHO0FBQUEsSUFDcks7QUFFQSxVQUFNLFVBQVUsRUFBRSxXQUFXLEtBQU0sTUFBTSxLQUFLLEVBQUUsVUFBVTtBQUMxRCxVQUFNLGFBQWEsQ0FBQyxHQUFXLEdBQVcsSUFBWSxJQUFZLE1BQWM7QUFDOUUsVUFBSSxZQUFZO0FBQUcsVUFBSSxVQUFVO0FBQUcsVUFBSSxPQUFPLEdBQUcsQ0FBQztBQUFHLFVBQUksT0FBTyxJQUFJLElBQUksSUFBSSxFQUFFO0FBQUcsVUFBSSxPQUFPO0FBQzdGLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLElBQUksR0FBRyxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7QUFBRyxZQUFJLE9BQU87QUFBQSxNQUFHO0FBQ3RHLFVBQUksSUFBSSxHQUFHO0FBQUUsWUFBSSxVQUFVO0FBQUcsWUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDO0FBQUcsWUFBSSxPQUFPLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtBQUFHLFlBQUksT0FBTztBQUFBLE1BQUc7QUFDbEcsVUFBSSxJQUFJLElBQUksR0FBRztBQUFFLFlBQUksVUFBVTtBQUFHLFlBQUksT0FBTyxHQUFHLElBQUksQ0FBQztBQUFHLFlBQUksT0FBTyxJQUFJLElBQUksSUFB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
