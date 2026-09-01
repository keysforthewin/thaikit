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

// assets/sidecar-motorcycle/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createModel: () => createModel,
  createObjectModel: () => createObjectModel,
  createSidecarMotorcycleModel: () => createSidecarMotorcycleModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "sidecar-motorcycle",
  "name": "Sidecar Motorcycle",
  "exportName": "SidecarMotorcycle",
  "envelope": "Envelope 1.70 x 1.48 x 1.85 m (proxy W:H:D 1 : 0.886 : 1.10 anchored on the 0.52 m wheel), origin base-center, +Y up, +Z forward.\n * Budget (large): <=4000 triangles, <=4 draw calls, <=4 materials, <=8 unique geometries.",
  "materials": [
    {
      "id": "paint",
      "color": 16777215,
      "roughness": 0.55,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "trim",
      "color": 16777215,
      "roughness": 0.65,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "wood",
      "color": 16777215,
      "roughness": 0.92,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "rubber",
      "color": 16777215,
      "roughness": 0.88,
      "metalness": 0,
      "vertexColors": true
    }
  ],
  "tiles": [
    {
      "material": "wood",
      "kind": "plank",
      "boards": 7,
      "seed": 81,
      "size": 512,
      "bump": 0.01
    },
    {
      "material": "rubber",
      "kind": "tyre",
      "size": 256,
      "seed": 29,
      "base": 200,
      "band": [
        0.36,
        0.64
      ],
      "groove": 0.3,
      "grooves": 3,
      "sipes": 2,
      "sipeWidth": 0.09,
      "dustAlpha": 0.3,
      "scuffs": 12,
      "bump": 0.08
    }
  ],
  "pivots": [
    {
      "name": "wheel-front",
      "position": [
        -0.52,
        0.26,
        0.66
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
      "name": "wheel-rear",
      "position": [
        -0.52,
        0.26,
        -0.5599999999999999
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 1,
      "note": "rear hub"
    },
    {
      "name": "wheel-sidecar",
      "position": [
        0.8,
        0.24,
        -0.34
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 2,
      "note": "sidecar hub, outboard of the box; the third instance of the wheel geometry at 0.923 scale"
    }
  ],
  "geometry": {
    "mudScale": 1.4,
    "collider": {
      "shape": "convex",
      "localCenter": [
        0,
        0.74,
        0
      ],
      "halfExtents": [
        0.855,
        0.74,
        0.925
      ],
      "notes": "Declared on the asset as convex: one hull over bike and sidecar."
    },
    "sheets": [
      {
        "x0": -0.13,
        "x1": 0.79,
        "z0": 0.44,
        "z1": -0.73,
        "nx": 8,
        "nz": 10,
        "t": 0.014,
        "heights": [
          [
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31
          ],
          [
            1.31,
            1.3739,
            1.3926,
            1.4011,
            1.4034,
            1.4011,
            1.3926,
            1.3739,
            1.31
          ],
          [
            1.31,
            1.3855,
            1.4075,
            1.4176,
            1.4202,
            1.4176,
            1.4075,
            1.3855,
            1.31
          ],
          [
            1.31,
            1.3903,
            1.4137,
            1.4244,
            1.4273,
            1.4244,
            1.4137,
            1.3903,
            1.31
          ],
          [
            1.31,
            1.3919,
            1.4158,
            1.4268,
            1.4297,
            1.4268,
            1.4158,
            1.3919,
            1.31
          ],
          [
            1.31,
            1.3922,
            1.4161,
            1.4271,
            1.43,
            1.4271,
            1.4161,
            1.3922,
            1.31
          ],
          [
            1.31,
            1.3919,
            1.4158,
            1.4268,
            1.4297,
            1.4268,
            1.4158,
            1.3919,
            1.31
          ],
          [
            1.31,
            1.3903,
            1.4137,
            1.4244,
            1.4273,
            1.4244,
            1.4137,
            1.3903,
            1.31
          ],
          [
            1.31,
            1.3855,
            1.4075,
            1.4176,
            1.4202,
            1.4176,
            1.4075,
            1.3855,
            1.31
          ],
          [
            1.31,
            1.3739,
            1.3926,
            1.4011,
            1.4034,
            1.4011,
            1.3926,
            1.3739,
            1.31
          ],
          [
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31,
            1.31
          ]
        ],
        "hex": 12890516
      }
    ],
    "trim": [
      [
        12890516,
        0.33,
        1.235,
        -0.6900000000000001,
        0.72,
        0.12,
        0.02
      ]
    ],
    "tubes": [
      {
        "pts": [
          [
            -0.08,
            0.34,
            0.38
          ],
          [
            0.74,
            0.34,
            0.38
          ],
          [
            0.74,
            0.34,
            -0.67
          ],
          [
            -0.08,
            0.34,
            -0.67
          ],
          [
            -0.08,
            0.34,
            0.38
          ]
        ],
        "r": 0.02,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.62,
            0.38
          ],
          [
            0.74,
            0.62,
            0.38
          ],
          [
            0.74,
            0.62,
            -0.67
          ],
          [
            -0.08,
            0.62,
            -0.67
          ],
          [
            -0.08,
            0.62,
            0.38
          ]
        ],
        "r": 0.016,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.48,
            -0.67
          ],
          [
            0.74,
            0.48,
            -0.67
          ]
        ],
        "r": 0.014,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            0.74,
            0.48,
            0.38
          ],
          [
            0.74,
            0.48,
            -0.67
          ]
        ],
        "r": 0.014,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.32,
            0.38
          ],
          [
            -0.08,
            1.28,
            0.38
          ]
        ],
        "r": 0.018,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            0.74,
            0.32,
            0.38
          ],
          [
            0.74,
            1.28,
            0.38
          ]
        ],
        "r": 0.018,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.32,
            -0.67
          ],
          [
            -0.08,
            1.28,
            -0.67
          ]
        ],
        "r": 0.018,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            0.74,
            0.32,
            -0.67
          ],
          [
            0.74,
            1.28,
            -0.67
          ]
        ],
        "r": 0.018,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            1.28,
            0.38
          ],
          [
            0.74,
            1.28,
            0.38
          ],
          [
            0.74,
            1.28,
            -0.67
          ],
          [
            -0.08,
            1.28,
            -0.67
          ],
          [
            -0.08,
            1.28,
            0.38
          ]
        ],
        "r": 0.016,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.34,
            0.1
          ],
          [
            -0.48000000000000004,
            0.36,
            0.1
          ]
        ],
        "r": 0.02,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            -0.08,
            0.34,
            -0.42
          ],
          [
            -0.48000000000000004,
            0.34,
            -0.42
          ]
        ],
        "r": 0.02,
        "hex": 5917247,
        "open": true
      },
      {
        "pts": [
          [
            0.74,
            0.34,
            -0.34
          ],
          [
            0.8,
            0.24,
            -0.34
          ]
        ],
        "r": 0.016,
        "hex": 5917247,
        "open": true
      }
    ],
    "bike": {
      "x": -0.52,
      "z": -0.22,
      "r": 0.26,
      "rim": 0.2,
      "halfW": 0.035,
      "zF": 0.66,
      "zR": -0.5599999999999999,
      "seg": 16,
      "spokes": 20,
      "tyreHex": 7235421,
      "rimHex": 11118498,
      "spokeHex": 11579049,
      "open": {
        "pitch": 0.05,
        "hubR": 0.065,
        "hubW": 0.11,
        "hubHex": 9077624,
        "capHex": 12172479,
        "spokeT": 6e-3
      },
      "wheelMaterial": "rubber",
      "paintHex": 3358767,
      "chromeHex": 12172479,
      "darkHex": 4867906,
      "bodyName": "Bodywork: leg shield, tank, fenders",
      "positions": [
        [
          -0.52,
          0.26,
          0.66
        ],
        [
          -0.52,
          0.26,
          -0.5599999999999999
        ],
        [
          0.8,
          0.24,
          -0.34,
          0.923076923076923
        ]
      ],
      "paintExtrudes": [
        {
          "poly": [
            [
              0.6,
              0.31
            ],
            [
              0.66,
              0.42
            ],
            [
              0.64,
              0.56
            ],
            [
              0.57,
              0.7
            ],
            [
              0.5,
              0.82
            ],
            [
              0.46,
              0.9
            ],
            [
              0.38,
              0.9
            ],
            [
              0.41,
              0.8
            ],
            [
              0.46,
              0.68
            ],
            [
              0.52,
              0.56
            ],
            [
              0.55,
              0.44
            ],
            [
              0.55,
              0.31
            ]
          ],
          "width": 0.4,
          "hex": 13552315,
          "shape": {
            "tumble": {
              "belt": 0.36,
              "roof": 0.9,
              "k": 0.25
            }
          }
        },
        {
          "poly": [
            [
              0.12,
              0.44
            ],
            [
              0.14,
              0.5
            ],
            [
              0.04,
              0.6
            ],
            [
              -0.5,
              0.6
            ],
            [
              -0.64,
              0.55
            ],
            [
              -0.66,
              0.47
            ],
            [
              -0.56,
              0.4
            ],
            [
              -0.2,
              0.4
            ]
          ],
          "width": 0.28,
          "hex": 13552315,
          "shape": {
            "tumble": {
              "belt": 0.44,
              "roof": 0.6,
              "k": 0.2
            }
          }
        },
        {
          "poly": [
            [
              0.02,
              0.61
            ],
            [
              0,
              0.69
            ],
            [
              -0.08,
              0.72
            ],
            [
              -0.44,
              0.71
            ],
            [
              -0.56,
              0.67
            ],
            [
              -0.55,
              0.61
            ],
            [
              -0.2,
              0.6
            ]
          ],
          "width": 0.24,
          "hex": 3026474,
          "shape": {
            "tumble": {
              "belt": 0.61,
              "roof": 0.72,
              "k": 0.3
            }
          }
        },
        {
          "poly": [
            [
              1.1713,
              0.154
            ],
            [
              1.1886,
              0.2303
            ],
            [
              1.1862,
              0.3085
            ],
            [
              1.1643,
              0.3836
            ],
            [
              1.1243,
              0.4509
            ],
            [
              1.0687,
              0.5059
            ],
            [
              1.0011,
              0.5454
            ],
            [
              0.9258,
              0.5666
            ],
            [
              0.8476,
              0.5683
            ],
            [
              0.7714,
              0.5504
            ],
            [
              0.7022,
              0.5139
            ],
            [
              0.7165,
              0.4935
            ],
            [
              0.7802,
              0.527
            ],
            [
              0.8502,
              0.5434
            ],
            [
              0.9221,
              0.5419
            ],
            [
              0.9914,
              0.5223
            ],
            [
              1.0535,
              0.4861
            ],
            [
              1.1046,
              0.4355
            ],
            [
              1.1414,
              0.3736
            ],
            [
              1.1615,
              0.3046
            ],
            [
              1.1637,
              0.2327
            ],
            [
              1.1478,
              0.1625
            ]
          ],
          "width": 0.12,
          "hex": 3358767
        },
        {
          "poly": [
            [
              -0.2598,
              0.5594
            ],
            [
              -0.337,
              0.57
            ],
            [
              -0.4144,
              0.5609
            ],
            [
              -0.4871,
              0.5329
            ],
            [
              -0.5505,
              0.4875
            ],
            [
              -0.6006,
              0.4278
            ],
            [
              -0.6343,
              0.3575
            ],
            [
              -0.6493,
              0.281
            ],
            [
              -0.6448,
              0.2032
            ],
            [
              -0.621,
              0.129
            ],
            [
              -0.5983,
              0.1396
            ],
            [
              -0.6202,
              0.2078
            ],
            [
              -0.6243,
              0.2793
            ],
            [
              -0.6105,
              0.3496
            ],
            [
              -0.5796,
              0.4143
            ],
            [
              -0.5336,
              0.4692
            ],
            [
              -0.4753,
              0.5109
            ],
            [
              -0.4084,
              0.5367
            ],
            [
              -0.3372,
              0.545
            ],
            [
              -0.2662,
              0.5353
            ]
          ],
          "width": 0.12,
          "hex": 3358767
        }
      ],
      "paintBoxes": [
        [
          3358767,
          0,
          0.36,
          0.05,
          0.14,
          0.06,
          0.76
        ],
        [
          3881784,
          0,
          0.66,
          0.605,
          0.11,
          0.07,
          0.02
        ]
      ],
      "paintTubes": [
        {
          "pts": [
            [
              0.068,
              0.54,
              0.787
            ],
            [
              0.068,
              0.8,
              0.7
            ]
          ],
          "r": 0.026,
          "hex": 3358767,
          "open": true
        },
        {
          "pts": [
            [
              -0.068,
              0.54,
              0.787
            ],
            [
              -0.068,
              0.8,
              0.7
            ]
          ],
          "r": 0.026,
          "hex": 3358767,
          "open": true
        }
      ],
      "lathes": [
        {
          "pts": [
            [
              0,
              -0.09
            ],
            [
              0.05,
              -0.09
            ],
            [
              0.085,
              -0.05
            ],
            [
              0.095,
              0
            ],
            [
              0.09,
              0.05
            ],
            [
              0.075,
              0.07
            ],
            [
              0,
              0.07
            ]
          ],
          "seg": 14,
          "rx": 1.5707963267948966,
          "at": [
            0,
            0.88,
            0.62
          ],
          "hex": 3358767,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.092,
              0
            ],
            [
              0.092,
              0.02
            ],
            [
              0,
              0.02
            ]
          ],
          "seg": 14,
          "rx": 1.5707963267948966,
          "at": [
            0,
            0.88,
            0.69
          ],
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0.076,
              0
            ],
            [
              0.076,
              0.012
            ],
            [
              0,
              0.012
            ]
          ],
          "seg": 14,
          "rx": 1.5707963267948966,
          "at": [
            0,
            0.88,
            0.71
          ],
          "hex": 14212576
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.036,
              0
            ],
            [
              0.036,
              0.03
            ],
            [
              0,
              0.03
            ]
          ],
          "seg": 12,
          "at": [
            0,
            0.955,
            0.66
          ],
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.024,
              0
            ],
            [
              0.024,
              0.03
            ],
            [
              0,
              0.03
            ]
          ],
          "seg": 8,
          "rx": 1.5707963267948966,
          "at": [
            0.17,
            0.9,
            0.61
          ],
          "hex": 13141550
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.024,
              0
            ],
            [
              0.024,
              0.03
            ],
            [
              0,
              0.03
            ]
          ],
          "seg": 8,
          "rx": 1.5707963267948966,
          "at": [
            -0.17,
            0.9,
            0.61
          ],
          "hex": 13141550
        }
      ],
      "tubes": [
        {
          "pts": [
            [
              0.068,
              0.26,
              0.88
            ],
            [
              0.068,
              0.56,
              0.78
            ]
          ],
          "r": 0.015,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.068,
              0.26,
              0.88
            ],
            [
              -0.068,
              0.56,
              0.78
            ]
          ],
          "r": 0.015,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0.8,
              0.7
            ],
            [
              0,
              0.985,
              0.6
            ]
          ],
          "r": 0.02,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.33,
              0.95,
              0.4
            ],
            [
              0.14,
              0.99,
              0.58
            ],
            [
              -0.14,
              0.99,
              0.58
            ],
            [
              -0.33,
              0.95,
              0.4
            ]
          ],
          "r": 0.013,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.09,
              0.88,
              0.6
            ],
            [
              0.16,
              0.9,
              0.6
            ]
          ],
          "r": 6e-3,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              -0.09,
              0.88,
              0.6
            ],
            [
              -0.16,
              0.9,
              0.6
            ]
          ],
          "r": 6e-3,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0.4,
              0.3
            ],
            [
              0,
              0.44,
              -0.2
            ]
          ],
          "r": 0.02,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.06,
              0.3,
              -0.1
            ],
            [
              0.06,
              0.26,
              -0.34
            ]
          ],
          "r": 0.014,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              -0.06,
              0.3,
              -0.1
            ],
            [
              -0.06,
              0.26,
              -0.34
            ]
          ],
          "r": 0.014,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.09,
              0.28,
              -0.3
            ],
            [
              0.09,
              0.56,
              -0.42
            ]
          ],
          "r": 0.012,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.09,
              0.28,
              -0.3
            ],
            [
              -0.09,
              0.56,
              -0.42
            ]
          ],
          "r": 0.012,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.12,
              0.3,
              -0.1
            ],
            [
              -0.16,
              0.24,
              0.1
            ],
            [
              -0.16,
              0.22,
              -0.5
            ],
            [
              -0.16,
              0.25,
              -0.66
            ]
          ],
          "r": 0.02,
          "hex": 9078144
        }
      ],
      "trim": [
        [
          4867906,
          0,
          0.8,
          0.7,
          0.2,
          0.035,
          0.06
        ],
        [
          7105126,
          0,
          0.3,
          -0.15,
          0.22,
          0.22,
          0.3
        ],
        [
          4867906,
          0,
          0.24,
          -0.2,
          0.16,
          0.12,
          0.4
        ],
        [
          11546672,
          0,
          0.42,
          -0.63,
          0.1,
          0.06,
          0.02
        ]
      ],
      "cyls": [
        {
          "at": [
            0.3,
            0.955,
            0.415
          ],
          "rt": 0.017,
          "rb": 0.017,
          "h": 0.11,
          "rz": 1.5707963267948966,
          "hex": 2763304
        },
        {
          "at": [
            -0.3,
            0.955,
            0.415
          ],
          "rt": 0.017,
          "rb": 0.017,
          "h": 0.11,
          "rz": 1.5707963267948966,
          "hex": 2763304
        },
        {
          "at": [
            0.18,
            0.32,
            -0.1
          ],
          "rt": 0.03,
          "rb": 0.03,
          "h": 0.05,
          "rz": 1.5707963267948966,
          "hex": 4867906
        },
        {
          "at": [
            -0.18,
            0.32,
            -0.1
          ],
          "rt": 0.03,
          "rb": 0.03,
          "h": 0.05,
          "rz": 1.5707963267948966,
          "hex": 4867906
        }
      ]
    },
    "extras": [
      {
        "id": "sidecar",
        "name": "Sidecar planked deck",
        "material": "wood",
        "uv": "world",
        "uvScale": 0.8,
        "boxes": [
          [
            4668980,
            0.33,
            0.36500000000000005,
            -0.14500000000000002,
            0.7999999999999999,
            0.03,
            1.03
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
function createSidecarMotorcycleModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Sidecar Motorcycle";
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
      wheelGeo(w.r, w.rim, w.halfW, w.seg ?? 18, w.tyreHex, w.rimHex, w.dish ?? 0.5),
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
    wheelGeo(rW, rimR, hw, B.seg ?? 20, B.tyreHex, B.rimHex, B.dish ?? 0.5),
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
  const root = createSidecarMotorcycleModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogU2lkZWNhciBNb3RvcmN5Y2xlIC0tIHByb2NlZHVyYWwgVGhyZWUuanMgZmFjdG9yeS5cbiAqXG4gKiBgdGhyZWVgIGlzIGltcG9ydGVkIGFzIGEgYmFyZSBzcGVjaWZpZXIgYW5kIE5PVEhJTkcgZWxzZS4gVGhlIGJ1bmRsZSBpcyBDb21tb25KUyB3aXRoIGEgYmFyZVxuICogcmVxdWlyZShcInRocmVlXCIpIGFuZCB0aGUgaG9zdCBwYWdlIGluamVjdHMgaXRzIE9XTiB0aHJlZSBpbnN0YW5jZTsgYSBzZWNvbmQgY29weSBtZWFucyB0aGlzXG4gKiBmaWxlJ3MgTWVzaCBpcyBub3QgdGhlIHJlbmRlcmVyJ3MgTWVzaCBhbmQgbm90aGluZyBkcmF3cy4gVGhhdCBpcyBhbHNvIHdoeSBnZW9tZXRyeSBtZXJnaW5nLFxuICogaW5zdGFuY2luZyBhbmQgdGhlIGxhdGhlIGhlbHBlcnMgYmVsb3cgYXJlIGhhbmQtcm9sbGVkIC0tIGFueXRoaW5nIHVuZGVyIHRocmVlL2V4YW1wbGVzL2pzbSBpc1xuICogYSBzZWNvbmQgaW1wb3J0LlxuICpcbiAqIEVudmVsb3BlIDEuNzAgeCAxLjQ4IHggMS44NSBtIChwcm94eSBXOkg6RCAxIDogMC44ODYgOiAxLjEwIGFuY2hvcmVkIG9uIHRoZSAwLjUyIG0gd2hlZWwpLCBvcmlnaW4gYmFzZS1jZW50ZXIsICtZIHVwLCArWiBmb3J3YXJkLlxuICogQnVkZ2V0IChsYXJnZSk6IDw9NDAwMCB0cmlhbmdsZXMsIDw9NCBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXG4gKlxuICogVGhpcyBpcyBvbmUgb2YgdGhhaWtpdCdzIFZFSElDTEVTLiBUaGUgc2hhcmVkIHZvY2FidWxhcnkgaXMgdGhlIFNJREUtUFJPRklMRSBFWFRSVVNJT04gLS0gYVxuICogY2xvc2VkIHBvbHlnb24gaW4gdGhlICh6LCB5KSBwbGFuZSBzd2VwdCBhY3Jvc3MgdGhlIHdpZHRoIGFuZCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4IGZvclxuICogdHVtYmxlaG9tZSBhbmQgcGxhbiByb3VuZGluZyAtLSBwbHVzIGEgbGF0aGVkIFdIRUVMIHJldm9sdmVkIGFib3V0IGl0cyBheGxlIGFuZCBhIHBvbHlsaW5lIFRVQkVcbiAqIGZvciBoYW5kbGViYXJzLCByYWlscyBhbmQgZnJhbWVzLiBFdmVyeSBjb2xvdXIgZGlmZmVyZW5jZSBpbnNpZGUgb25lIG1hdGVyaWFsIGlzIGNhcnJpZWQgYXMgYVxuICogdmVydGV4IGNvbG91ciBvbiBhIFdISVRFIG1hdGVyaWFsLCBzbyBhIHR3by10b25lIGJvZHksIGEgYmxhY2sgdHlyZSBvbiBhIHNpbHZlciByaW0gYW5kIGFuIGFtYmVyXG4gKiBpbmRpY2F0b3IgYWxsIHJpZGUgb25lIHNoYWRlciBhbmQgb25lIHN1Ym1pc3Npb24uXG4gKi9cblxuZXhwb3J0IHR5cGUgUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHtcbiAgLyoqXG4gICAqIFdoZXJlIHRoaXMgcHJvcCdzIHNoaXBwZWQgZmlsZXMgbGl2ZSwgd2l0aCBhIHRyYWlsaW5nIHNsYXNoLlxuICAgKlxuICAgKiBUaGUgbWFwcyBhcmUgcmVjb3JkZWQgYXMgYmFyZSBmaWxlbmFtZXMgYmVjYXVzZSB0aGUgYnVuZGxlIGlzIEVWQUxVQVRFRFxuICAgKiByYXRoZXIgdGhhbiBpbXBvcnRlZDogaXQgaGFzIG5vIGltcG9ydC5tZXRhIGFuZCBubyBjdXJyZW50U2NyaXB0LCBzbyBpdFxuICAgKiBjYW5ub3Qgc2VlIGl0cyBvd24gVVJMLiBFdmVyeSBob3N0IGRlcml2ZXMgdGhpcyBmcm9tIHRoZSBtb2R1bGUgVVJMLlxuICAgKi9cbiAgYmFzZVVybD86IHN0cmluZztcbiAgd2lyZWZyYW1lPzogYm9vbGVhbjtcbiAgY2FzdFNoYWRvdz86IGJvb2xlYW47XG4gIHJlY2VpdmVTaGFkb3c/OiBib29sZWFuO1xuICB0ZXh0dXJlU2l6ZT86IG51bWJlcjtcbiAgdGV4dHVyZUFuaXNvdHJvcHk/OiBudW1iZXI7XG4gIHF1YWxpdHlQcmlvcml0eT86ICdyZWZlcmVuY2UtZmlkZWxpdHknIHwgJ2JhbGFuY2VkJztcbn07XG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWUgPSB7XG4gIG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD47XG4gIHNvY2tldHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcbiAgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPjtcbiAgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+O1xufTtcblxuY29uc3QgQ09ORklHID0ge1xuICAgIFwiaWRcIjogXCJzaWRlY2FyLW1vdG9yY3ljbGVcIixcbiAgICBcIm5hbWVcIjogXCJTaWRlY2FyIE1vdG9yY3ljbGVcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJTaWRlY2FyTW90b3JjeWNsZVwiLFxuICAgIFwiZW52ZWxvcGVcIjogXCJFbnZlbG9wZSAxLjcwIHggMS40OCB4IDEuODUgbSAocHJveHkgVzpIOkQgMSA6IDAuODg2IDogMS4xMCBhbmNob3JlZCBvbiB0aGUgMC41MiBtIHdoZWVsKSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogZm9yd2FyZC5cXG4gKiBCdWRnZXQgKGxhcmdlKTogPD00MDAwIHRyaWFuZ2xlcywgPD00IGRyYXcgY2FsbHMsIDw9NCBtYXRlcmlhbHMsIDw9OCB1bmlxdWUgZ2VvbWV0cmllcy5cIixcbiAgICBcIm1hdGVyaWFsc1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogXCJwYWludFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwidHJpbVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjY1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwid29vZFwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjkyLFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicnViYmVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwid29vZFwiLFxuICAgICAgICBcImtpbmRcIjogXCJwbGFua1wiLFxuICAgICAgICBcImJvYXJkc1wiOiA3LFxuICAgICAgICBcInNlZWRcIjogODEsXG4gICAgICAgIFwic2l6ZVwiOiA1MTIsXG4gICAgICAgIFwiYnVtcFwiOiAwLjAxXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicnViYmVyXCIsXG4gICAgICAgIFwia2luZFwiOiBcInR5cmVcIixcbiAgICAgICAgXCJzaXplXCI6IDI1NixcbiAgICAgICAgXCJzZWVkXCI6IDI5LFxuICAgICAgICBcImJhc2VcIjogMjAwLFxuICAgICAgICBcImJhbmRcIjogW1xuICAgICAgICAgIDAuMzYsXG4gICAgICAgICAgMC42NFxuICAgICAgICBdLFxuICAgICAgICBcImdyb292ZVwiOiAwLjMsXG4gICAgICAgIFwiZ3Jvb3Zlc1wiOiAzLFxuICAgICAgICBcInNpcGVzXCI6IDIsXG4gICAgICAgIFwic2lwZVdpZHRoXCI6IDAuMDksXG4gICAgICAgIFwiZHVzdEFscGhhXCI6IDAuMyxcbiAgICAgICAgXCJzY3VmZnNcIjogMTIsXG4gICAgICAgIFwiYnVtcFwiOiAwLjA4XG4gICAgICB9XG4gICAgXSxcbiAgICBcInBpdm90c1wiOiBbXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLWZyb250XCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIC0wLjUyLFxuICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgMC42NlxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMCxcbiAgICAgICAgXCJub3RlXCI6IFwiZnJvbnQgaHViLCByb2xscyBhYm91dCB0aGUgYXhsZVwiXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcIm5hbWVcIjogXCJ3aGVlbC1yZWFyXCIsXG4gICAgICAgIFwicG9zaXRpb25cIjogW1xuICAgICAgICAgIC0wLjUyLFxuICAgICAgICAgIDAuMjYsXG4gICAgICAgICAgLTAuNTU5OTk5OTk5OTk5OTk5OVxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMSxcbiAgICAgICAgXCJub3RlXCI6IFwicmVhciBodWJcIlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtc2lkZWNhclwiLFxuICAgICAgICBcInBvc2l0aW9uXCI6IFtcbiAgICAgICAgICAwLjgsXG4gICAgICAgICAgMC4yNCxcbiAgICAgICAgICAtMC4zNFxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMixcbiAgICAgICAgXCJub3RlXCI6IFwic2lkZWNhciBodWIsIG91dGJvYXJkIG9mIHRoZSBib3g7IHRoZSB0aGlyZCBpbnN0YW5jZSBvZiB0aGUgd2hlZWwgZ2VvbWV0cnkgYXQgMC45MjMgc2NhbGVcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcIm11ZFNjYWxlXCI6IDEuNCxcbiAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICBcInNoYXBlXCI6IFwiY29udmV4XCIsXG4gICAgICAgIFwibG9jYWxDZW50ZXJcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC43NCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiaGFsZkV4dGVudHNcIjogW1xuICAgICAgICAgIDAuODU1LFxuICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgMC45MjVcbiAgICAgICAgXSxcbiAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjb252ZXg6IG9uZSBodWxsIG92ZXIgYmlrZSBhbmQgc2lkZWNhci5cIlxuICAgICAgfSxcbiAgICAgIFwic2hlZXRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwieDBcIjogLTAuMTMsXG4gICAgICAgICAgXCJ4MVwiOiAwLjc5LFxuICAgICAgICAgIFwiejBcIjogMC40NCxcbiAgICAgICAgICBcInoxXCI6IC0wLjczLFxuICAgICAgICAgIFwibnhcIjogOCxcbiAgICAgICAgICBcIm56XCI6IDEwLFxuICAgICAgICAgIFwidFwiOiAwLjAxNCxcbiAgICAgICAgICBcImhlaWdodHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjMxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjM3MzksXG4gICAgICAgICAgICAgIDEuMzkyNixcbiAgICAgICAgICAgICAgMS40MDExLFxuICAgICAgICAgICAgICAxLjQwMzQsXG4gICAgICAgICAgICAgIDEuNDAxMSxcbiAgICAgICAgICAgICAgMS4zOTI2LFxuICAgICAgICAgICAgICAxLjM3MzksXG4gICAgICAgICAgICAgIDEuMzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMzEsXG4gICAgICAgICAgICAgIDEuMzg1NSxcbiAgICAgICAgICAgICAgMS40MDc1LFxuICAgICAgICAgICAgICAxLjQxNzYsXG4gICAgICAgICAgICAgIDEuNDIwMixcbiAgICAgICAgICAgICAgMS40MTc2LFxuICAgICAgICAgICAgICAxLjQwNzUsXG4gICAgICAgICAgICAgIDEuMzg1NSxcbiAgICAgICAgICAgICAgMS4zMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zOTAzLFxuICAgICAgICAgICAgICAxLjQxMzcsXG4gICAgICAgICAgICAgIDEuNDI0NCxcbiAgICAgICAgICAgICAgMS40MjczLFxuICAgICAgICAgICAgICAxLjQyNDQsXG4gICAgICAgICAgICAgIDEuNDEzNyxcbiAgICAgICAgICAgICAgMS4zOTAzLFxuICAgICAgICAgICAgICAxLjMxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjM5MTksXG4gICAgICAgICAgICAgIDEuNDE1OCxcbiAgICAgICAgICAgICAgMS40MjY4LFxuICAgICAgICAgICAgICAxLjQyOTcsXG4gICAgICAgICAgICAgIDEuNDI2OCxcbiAgICAgICAgICAgICAgMS40MTU4LFxuICAgICAgICAgICAgICAxLjM5MTksXG4gICAgICAgICAgICAgIDEuMzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMzEsXG4gICAgICAgICAgICAgIDEuMzkyMixcbiAgICAgICAgICAgICAgMS40MTYxLFxuICAgICAgICAgICAgICAxLjQyNzEsXG4gICAgICAgICAgICAgIDEuNDMsXG4gICAgICAgICAgICAgIDEuNDI3MSxcbiAgICAgICAgICAgICAgMS40MTYxLFxuICAgICAgICAgICAgICAxLjM5MjIsXG4gICAgICAgICAgICAgIDEuMzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMzEsXG4gICAgICAgICAgICAgIDEuMzkxOSxcbiAgICAgICAgICAgICAgMS40MTU4LFxuICAgICAgICAgICAgICAxLjQyNjgsXG4gICAgICAgICAgICAgIDEuNDI5NyxcbiAgICAgICAgICAgICAgMS40MjY4LFxuICAgICAgICAgICAgICAxLjQxNTgsXG4gICAgICAgICAgICAgIDEuMzkxOSxcbiAgICAgICAgICAgICAgMS4zMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zOTAzLFxuICAgICAgICAgICAgICAxLjQxMzcsXG4gICAgICAgICAgICAgIDEuNDI0NCxcbiAgICAgICAgICAgICAgMS40MjczLFxuICAgICAgICAgICAgICAxLjQyNDQsXG4gICAgICAgICAgICAgIDEuNDEzNyxcbiAgICAgICAgICAgICAgMS4zOTAzLFxuICAgICAgICAgICAgICAxLjMxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAxLjMxLFxuICAgICAgICAgICAgICAxLjM4NTUsXG4gICAgICAgICAgICAgIDEuNDA3NSxcbiAgICAgICAgICAgICAgMS40MTc2LFxuICAgICAgICAgICAgICAxLjQyMDIsXG4gICAgICAgICAgICAgIDEuNDE3NixcbiAgICAgICAgICAgICAgMS40MDc1LFxuICAgICAgICAgICAgICAxLjM4NTUsXG4gICAgICAgICAgICAgIDEuMzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDEuMzEsXG4gICAgICAgICAgICAgIDEuMzczOSxcbiAgICAgICAgICAgICAgMS4zOTI2LFxuICAgICAgICAgICAgICAxLjQwMTEsXG4gICAgICAgICAgICAgIDEuNDAzNCxcbiAgICAgICAgICAgICAgMS40MDExLFxuICAgICAgICAgICAgICAxLjM5MjYsXG4gICAgICAgICAgICAgIDEuMzczOSxcbiAgICAgICAgICAgICAgMS4zMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMSxcbiAgICAgICAgICAgICAgMS4zMVxuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJoZXhcIjogMTI4OTA1MTZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwidHJpbVwiOiBbXG4gICAgICAgIFtcbiAgICAgICAgICAxMjg5MDUxNixcbiAgICAgICAgICAwLjMzLFxuICAgICAgICAgIDEuMjM1LFxuICAgICAgICAgIC0wLjY5MDAwMDAwMDAwMDAwMDEsXG4gICAgICAgICAgMC43MixcbiAgICAgICAgICAwLjEyLFxuICAgICAgICAgIDAuMDJcbiAgICAgICAgXVxuICAgICAgXSxcbiAgICAgIFwidHViZXNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgICAgMC4zOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgICAgMC4zOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgICAtMC42N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgIFwiaGV4XCI6IDU5MTcyNDcsXG4gICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgICAgIDAuNjIsXG4gICAgICAgICAgICAgIC0wLjY3XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMC42MixcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAwLjM4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJcIjogMC4wMTYsXG4gICAgICAgICAgXCJoZXhcIjogNTkxNzI0NyxcbiAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMC40OCxcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgICAgIDAuNDgsXG4gICAgICAgICAgICAgIC0wLjY3XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJcIjogMC4wMTQsXG4gICAgICAgICAgXCJoZXhcIjogNTkxNzI0NyxcbiAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAwLjQ4LFxuICAgICAgICAgICAgICAwLjM4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAwLjQ4LFxuICAgICAgICAgICAgICAtMC42N1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJyXCI6IDAuMDE0LFxuICAgICAgICAgIFwiaGV4XCI6IDU5MTcyNDcsXG4gICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDAuMzIsXG4gICAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAxLjI4LFxuICAgICAgICAgICAgICAwLjM4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJcIjogMC4wMTgsXG4gICAgICAgICAgXCJoZXhcIjogNTkxNzI0NyxcbiAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAwLjMyLFxuICAgICAgICAgICAgICAwLjM4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAwLjc0LFxuICAgICAgICAgICAgICAxLjI4LFxuICAgICAgICAgICAgICAwLjM4XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJcIjogMC4wMTgsXG4gICAgICAgICAgXCJoZXhcIjogNTkxNzI0NyxcbiAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMC4zMixcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAxLjI4LFxuICAgICAgICAgICAgICAtMC42N1xuICAgICAgICAgICAgXVxuICAgICAgICAgIF0sXG4gICAgICAgICAgXCJyXCI6IDAuMDE4LFxuICAgICAgICAgIFwiaGV4XCI6IDU5MTcyNDcsXG4gICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMC4zMixcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuNzQsXG4gICAgICAgICAgICAgIDEuMjgsXG4gICAgICAgICAgICAgIC0wLjY3XG4gICAgICAgICAgICBdXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJcIjogMC4wMTgsXG4gICAgICAgICAgXCJoZXhcIjogNTkxNzI0NyxcbiAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgMS4yOCxcbiAgICAgICAgICAgICAgMC4zOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMS4yOCxcbiAgICAgICAgICAgICAgMC4zOFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMS4yOCxcbiAgICAgICAgICAgICAgLTAuNjdcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAxLjI4LFxuICAgICAgICAgICAgICAtMC42N1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDEuMjgsXG4gICAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiclwiOiAwLjAxNixcbiAgICAgICAgICBcImhleFwiOiA1OTE3MjQ3LFxuICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIC0wLjQ4MDAwMDAwMDAwMDAwMDA0LFxuICAgICAgICAgICAgICAwLjM2LFxuICAgICAgICAgICAgICAwLjFcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgIFwiaGV4XCI6IDU5MTcyNDcsXG4gICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgLTAuMDgsXG4gICAgICAgICAgICAgIDAuMzQsXG4gICAgICAgICAgICAgIC0wLjQyXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAtMC40ODAwMDAwMDAwMDAwMDAwNCxcbiAgICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgICAgLTAuNDJcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgIFwiaGV4XCI6IDU5MTcyNDcsXG4gICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgMC43NCxcbiAgICAgICAgICAgICAgMC4zNCxcbiAgICAgICAgICAgICAgLTAuMzRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgICAgLTAuMzRcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdLFxuICAgICAgICAgIFwiclwiOiAwLjAxNixcbiAgICAgICAgICBcImhleFwiOiA1OTE3MjQ3LFxuICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImJpa2VcIjoge1xuICAgICAgICBcInhcIjogLTAuNTIsXG4gICAgICAgIFwielwiOiAtMC4yMixcbiAgICAgICAgXCJyXCI6IDAuMjYsXG4gICAgICAgIFwicmltXCI6IDAuMixcbiAgICAgICAgXCJoYWxmV1wiOiAwLjAzNSxcbiAgICAgICAgXCJ6RlwiOiAwLjY2LFxuICAgICAgICBcInpSXCI6IC0wLjU1OTk5OTk5OTk5OTk5OTksXG4gICAgICAgIFwic2VnXCI6IDE2LFxuICAgICAgICBcInNwb2tlc1wiOiAyMCxcbiAgICAgICAgXCJ0eXJlSGV4XCI6IDcyMzU0MjEsXG4gICAgICAgIFwicmltSGV4XCI6IDExMTE4NDk4LFxuICAgICAgICBcInNwb2tlSGV4XCI6IDExNTc5MDQ5LFxuICAgICAgICBcIm9wZW5cIjoge1xuICAgICAgICAgIFwicGl0Y2hcIjogMC4wNSxcbiAgICAgICAgICBcImh1YlJcIjogMC4wNjUsXG4gICAgICAgICAgXCJodWJXXCI6IDAuMTEsXG4gICAgICAgICAgXCJodWJIZXhcIjogOTA3NzYyNCxcbiAgICAgICAgICBcImNhcEhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICBcInNwb2tlVFwiOiAwLjAwNlxuICAgICAgICB9LFxuICAgICAgICBcIndoZWVsTWF0ZXJpYWxcIjogXCJydWJiZXJcIixcbiAgICAgICAgXCJwYWludEhleFwiOiAzMzU4NzY3LFxuICAgICAgICBcImNocm9tZUhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgXCJkYXJrSGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgIFwiYm9keU5hbWVcIjogXCJCb2R5d29yazogbGVnIHNoaWVsZCwgdGFuaywgZmVuZGVyc1wiLFxuICAgICAgICBcInBvc2l0aW9uc1wiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTIsXG4gICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgMC42NlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgLTAuNTIsXG4gICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgLTAuNTU5OTk5OTk5OTk5OTk5OVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgIC0wLjM0LFxuICAgICAgICAgICAgMC45MjMwNzY5MjMwNzY5MjNcbiAgICAgICAgICBdXG4gICAgICAgIF0sXG4gICAgICAgIFwicGFpbnRFeHRydWRlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgICAwLjMxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjY2LFxuICAgICAgICAgICAgICAgIDAuNDJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAgICAgMC41NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41NyxcbiAgICAgICAgICAgICAgICAwLjdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNSxcbiAgICAgICAgICAgICAgICAwLjgyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQ2LFxuICAgICAgICAgICAgICAgIDAuOVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4zOCxcbiAgICAgICAgICAgICAgICAwLjlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNDEsXG4gICAgICAgICAgICAgICAgMC44XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQ2LFxuICAgICAgICAgICAgICAgIDAuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgICAgICAgMC41NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41NSxcbiAgICAgICAgICAgICAgICAwLjQ0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjU1LFxuICAgICAgICAgICAgICAgIDAuMzFcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMC40LFxuICAgICAgICAgICAgXCJoZXhcIjogMTM1NTIzMTUsXG4gICAgICAgICAgICBcInNoYXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmVsdFwiOiAwLjM2LFxuICAgICAgICAgICAgICAgIFwicm9vZlwiOiAwLjksXG4gICAgICAgICAgICAgICAgXCJrXCI6IDAuMjVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAgICAgMC40NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDQsXG4gICAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC41LFxuICAgICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjQsXG4gICAgICAgICAgICAgICAgMC41NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjYsXG4gICAgICAgICAgICAgICAgMC40N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNTYsXG4gICAgICAgICAgICAgICAgMC40XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjI4LFxuICAgICAgICAgICAgXCJoZXhcIjogMTM1NTIzMTUsXG4gICAgICAgICAgICBcInNoYXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmVsdFwiOiAwLjQ0LFxuICAgICAgICAgICAgICAgIFwicm9vZlwiOiAwLjYsXG4gICAgICAgICAgICAgICAgXCJrXCI6IDAuMlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgICAgICAwLjYxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuNjlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAgIDAuNzJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjQ0LFxuICAgICAgICAgICAgICAgIDAuNzFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjU2LFxuICAgICAgICAgICAgICAgIDAuNjdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjU1LFxuICAgICAgICAgICAgICAgIDAuNjFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjIsXG4gICAgICAgICAgICAgICAgMC42XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAuMjQsXG4gICAgICAgICAgICBcImhleFwiOiAzMDI2NDc0LFxuICAgICAgICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgICAgICAgIFwidHVtYmxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJlbHRcIjogMC42MSxcbiAgICAgICAgICAgICAgICBcInJvb2ZcIjogMC43MixcbiAgICAgICAgICAgICAgICBcImtcIjogMC4zXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAxLjE3MTMsXG4gICAgICAgICAgICAgICAgMC4xNTRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMTg4NixcbiAgICAgICAgICAgICAgICAwLjIzMDNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMTg2MixcbiAgICAgICAgICAgICAgICAwLjMwODVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMTY0MyxcbiAgICAgICAgICAgICAgICAwLjM4MzZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMTI0MyxcbiAgICAgICAgICAgICAgICAwLjQ1MDlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMDY4NyxcbiAgICAgICAgICAgICAgICAwLjUwNTlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDEuMDAxMSxcbiAgICAgICAgICAgICAgICAwLjU0NTRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuOTI1OCxcbiAgICAgICAgICAgICAgICAwLjU2NjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuODQ3NixcbiAgICAgICAgICAgICAgICAwLjU2ODNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzcxNCxcbiAgICAgICAgICAgICAgICAwLjU1MDRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzAyMixcbiAgICAgICAgICAgICAgICAwLjUxMzlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzE2NSxcbiAgICAgICAgICAgICAgICAwLjQ5MzVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzgwMixcbiAgICAgICAgICAgICAgICAwLjUyN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC44NTAyLFxuICAgICAgICAgICAgICAgIDAuNTQzNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45MjIxLFxuICAgICAgICAgICAgICAgIDAuNTQxOVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45OTE0LFxuICAgICAgICAgICAgICAgIDAuNTIyM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4wNTM1LFxuICAgICAgICAgICAgICAgIDAuNDg2MVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xMDQ2LFxuICAgICAgICAgICAgICAgIDAuNDM1NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xNDE0LFxuICAgICAgICAgICAgICAgIDAuMzczNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xNjE1LFxuICAgICAgICAgICAgICAgIDAuMzA0NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xNjM3LFxuICAgICAgICAgICAgICAgIDAuMjMyN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMS4xNDc4LFxuICAgICAgICAgICAgICAgIDAuMTYyNVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjEyLFxuICAgICAgICAgICAgXCJoZXhcIjogMzM1ODc2N1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjI1OTgsXG4gICAgICAgICAgICAgICAgMC41NTk0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zMzcsXG4gICAgICAgICAgICAgICAgMC41N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNDE0NCxcbiAgICAgICAgICAgICAgICAwLjU2MDlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjQ4NzEsXG4gICAgICAgICAgICAgICAgMC41MzI5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC41NTA1LFxuICAgICAgICAgICAgICAgIDAuNDg3NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjAwNixcbiAgICAgICAgICAgICAgICAwLjQyNzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjYzNDMsXG4gICAgICAgICAgICAgICAgMC4zNTc1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42NDkzLFxuICAgICAgICAgICAgICAgIDAuMjgxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42NDQ4LFxuICAgICAgICAgICAgICAgIDAuMjAzMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjIxLFxuICAgICAgICAgICAgICAgIDAuMTI5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC41OTgzLFxuICAgICAgICAgICAgICAgIDAuMTM5NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjIwMixcbiAgICAgICAgICAgICAgICAwLjIwNzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjYyNDMsXG4gICAgICAgICAgICAgICAgMC4yNzkzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42MTA1LFxuICAgICAgICAgICAgICAgIDAuMzQ5NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNTc5NixcbiAgICAgICAgICAgICAgICAwLjQxNDNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjUzMzYsXG4gICAgICAgICAgICAgICAgMC40NjkyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC40NzUzLFxuICAgICAgICAgICAgICAgIDAuNTEwOVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNDA4NCxcbiAgICAgICAgICAgICAgICAwLjUzNjdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjMzNzIsXG4gICAgICAgICAgICAgICAgMC41NDVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjI2NjIsXG4gICAgICAgICAgICAgICAgMC41MzUzXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAuMTIsXG4gICAgICAgICAgICBcImhleFwiOiAzMzU4NzY3XG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcInBhaW50Qm94ZXNcIjogW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIDMzNTg3NjcsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4zNixcbiAgICAgICAgICAgIDAuMDUsXG4gICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgIDAuNzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDM4ODE3ODQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgIDAuNjA1LFxuICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAwLjAyXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInBhaW50VHViZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDY4LFxuICAgICAgICAgICAgICAgIDAuNTQsXG4gICAgICAgICAgICAgICAgMC43ODdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDY4LFxuICAgICAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgICAgICAwLjdcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyNixcbiAgICAgICAgICAgIFwiaGV4XCI6IDMzNTg3NjcsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMDY4LFxuICAgICAgICAgICAgICAgIDAuNTQsXG4gICAgICAgICAgICAgICAgMC43ODdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA2OCxcbiAgICAgICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAgICAgMC43XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMjYsXG4gICAgICAgICAgICBcImhleFwiOiAzMzU4NzY3LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwibGF0aGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIC0wLjA5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA1LFxuICAgICAgICAgICAgICAgIC0wLjA5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA4NSxcbiAgICAgICAgICAgICAgICAtMC4wNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wOTUsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wOSxcbiAgICAgICAgICAgICAgICAwLjA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgICAgICAwLjA3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDdcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDE0LFxuICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC44OCxcbiAgICAgICAgICAgICAgMC42MlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDMzNTg3NjcsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA5MixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA5MixcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDE0LFxuICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMC44OCxcbiAgICAgICAgICAgICAgMC42OVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDc2LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDc2LFxuICAgICAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNlZ1wiOiAxNCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuODgsXG4gICAgICAgICAgICAgIDAuNzFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxNDIxMjU3NlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAzNixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAzNixcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDEyLFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDAuOTU1LFxuICAgICAgICAgICAgICAwLjY2XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNixcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDI0LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDI0LFxuICAgICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wM1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgIDAuOSxcbiAgICAgICAgICAgICAgMC42MVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEzMTQxNTUwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDI0LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDI0LFxuICAgICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wM1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0wLjE3LFxuICAgICAgICAgICAgICAwLjksXG4gICAgICAgICAgICAgIDAuNjFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxMzE0MTU1MFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0dWJlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNjgsXG4gICAgICAgICAgICAgICAgMC4yNixcbiAgICAgICAgICAgICAgICAwLjg4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA2OCxcbiAgICAgICAgICAgICAgICAwLjU2LFxuICAgICAgICAgICAgICAgIDAuNzhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxNSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA2OCxcbiAgICAgICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgICAgIDAuODhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA2OCxcbiAgICAgICAgICAgICAgICAwLjU2LFxuICAgICAgICAgICAgICAgIDAuNzhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxNSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgICAgIDAuN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjk4NSxcbiAgICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNixcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjMzLFxuICAgICAgICAgICAgICAgIDAuOTUsXG4gICAgICAgICAgICAgICAgMC40XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjE0LFxuICAgICAgICAgICAgICAgIDAuOTksXG4gICAgICAgICAgICAgICAgMC41OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTQsXG4gICAgICAgICAgICAgICAgMC45OSxcbiAgICAgICAgICAgICAgICAwLjU4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zMyxcbiAgICAgICAgICAgICAgICAwLjk1LFxuICAgICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEzLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgICAgMC44OCxcbiAgICAgICAgICAgICAgICAwLjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTYsXG4gICAgICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA2LFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNixcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wOSxcbiAgICAgICAgICAgICAgICAwLjg4LFxuICAgICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTYsXG4gICAgICAgICAgICAgICAgMC45LFxuICAgICAgICAgICAgICAgIDAuNlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA2LFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNixcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC40NCxcbiAgICAgICAgICAgICAgICAtMC4yXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMixcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgLTAuMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNixcbiAgICAgICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgICAgIC0wLjM0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTQsXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA2LFxuICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNixcbiAgICAgICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgICAgIC0wLjM0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTQsXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDksXG4gICAgICAgICAgICAgICAgMC4yOCxcbiAgICAgICAgICAgICAgICAtMC4zXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAgICAgLTAuNDJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxMixcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA5LFxuICAgICAgICAgICAgICAgIDAuMjgsXG4gICAgICAgICAgICAgICAgLTAuM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMDksXG4gICAgICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgICAgICAtMC40MlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEyLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzksXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTIsXG4gICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgIC0wLjFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjE2LFxuICAgICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgICAgMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xNixcbiAgICAgICAgICAgICAgICAwLjIyLFxuICAgICAgICAgICAgICAgIC0wLjVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjE2LFxuICAgICAgICAgICAgICAgIDAuMjUsXG4gICAgICAgICAgICAgICAgLTAuNjZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgICAgXCJoZXhcIjogOTA3ODE0NFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0cmltXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0ODY3OTA2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuOCxcbiAgICAgICAgICAgIDAuNyxcbiAgICAgICAgICAgIDAuMixcbiAgICAgICAgICAgIDAuMDM1LFxuICAgICAgICAgICAgMC4wNlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNzEwNTEyNixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAgIDAuMjIsXG4gICAgICAgICAgICAwLjIyLFxuICAgICAgICAgICAgMC4zXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0ODY3OTA2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgMC4xNixcbiAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAwLjRcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDExNTQ2NjcyLFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAtMC42MyxcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAuMDYsXG4gICAgICAgICAgICAwLjAyXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgIDAuOTU1LFxuICAgICAgICAgICAgICAwLjQxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicnRcIjogMC4wMTcsXG4gICAgICAgICAgICBcInJiXCI6IDAuMDE3LFxuICAgICAgICAgICAgXCJoXCI6IDAuMTEsXG4gICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwiaGV4XCI6IDI3NjMzMDRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMC4zLFxuICAgICAgICAgICAgICAwLjk1NSxcbiAgICAgICAgICAgICAgMC40MTVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJ0XCI6IDAuMDE3LFxuICAgICAgICAgICAgXCJyYlwiOiAwLjAxNyxcbiAgICAgICAgICAgIFwiaFwiOiAwLjExLFxuICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImhleFwiOiAyNzYzMzA0XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMC4xOCxcbiAgICAgICAgICAgICAgMC4zMixcbiAgICAgICAgICAgICAgLTAuMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicnRcIjogMC4wMyxcbiAgICAgICAgICAgIFwicmJcIjogMC4wMyxcbiAgICAgICAgICAgIFwiaFwiOiAwLjA1LFxuICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgLTAuMTgsXG4gICAgICAgICAgICAgIDAuMzIsXG4gICAgICAgICAgICAgIC0wLjFcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJ0XCI6IDAuMDMsXG4gICAgICAgICAgICBcInJiXCI6IDAuMDMsXG4gICAgICAgICAgICBcImhcIjogMC4wNSxcbiAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwiZXh0cmFzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogXCJzaWRlY2FyXCIsXG4gICAgICAgICAgXCJuYW1lXCI6IFwiU2lkZWNhciBwbGFua2VkIGRlY2tcIixcbiAgICAgICAgICBcIm1hdGVyaWFsXCI6IFwid29vZFwiLFxuICAgICAgICAgIFwidXZcIjogXCJ3b3JsZFwiLFxuICAgICAgICAgIFwidXZTY2FsZVwiOiAwLjgsXG4gICAgICAgICAgXCJib3hlc1wiOiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIDQ2Njg5ODAsXG4gICAgICAgICAgICAgIDAuMzMsXG4gICAgICAgICAgICAgIDAuMzY1MDAwMDAwMDAwMDAwMDUsXG4gICAgICAgICAgICAgIC0wLjE0NTAwMDAwMDAwMDAwMDAyLFxuICAgICAgICAgICAgICAwLjc5OTk5OTk5OTk5OTk5OTksXG4gICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgIDEuMDNcbiAgICAgICAgICAgIF1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9XG4gIH0gYXMgYW55O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gZ2VvbWV0cnkgaGVscGVycyAqL1xuXG4vKiogTG9jYWwgc3RhbmQtaW4gZm9yIEJ1ZmZlckdlb21ldHJ5VXRpbHMubWVyZ2VHZW9tZXRyaWVzLCB3aGljaCBjYW5ub3QgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqICBFdmVyeXRoaW5nIGlzIGNvbnZlcnRlZCB0byBub24taW5kZXhlZCBzbyBhdHRyaWJ1dGUgYXJyYXlzIGNhbiBiZSBhcHBlbmRlZDsgdGhhdCBjaGFuZ2VzIHRoZVxuICogIHZlcnRleCBjb3VudCBidXQgTk9UIHRoZSB0cmlhbmdsZSBjb3VudCwgd2hpY2ggaXMgdGhlIGF4aXMgdGhlIGJ1ZGdldCBtZWFzdXJlcy4gKi9cbmZ1bmN0aW9uIG1lcmdlR2VvcyhnZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwYXJ0czogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBjb25zdCB0ZW1wOiBib29sZWFuW10gPSBbXTtcbiAgZm9yIChjb25zdCBnIG9mIGdlb3MpIHtcbiAgICBpZiAoZy5pbmRleCkgeyBwYXJ0cy5wdXNoKGcudG9Ob25JbmRleGVkKCkpOyB0ZW1wLnB1c2godHJ1ZSk7IH1cbiAgICBlbHNlIHsgcGFydHMucHVzaChnKTsgdGVtcC5wdXNoKGZhbHNlKTsgfVxuICB9XG4gIGxldCB0b3RhbCA9IDA7XG4gIGZvciAoY29uc3QgZyBvZiBwYXJ0cykgdG90YWwgKz0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IHBvc2l0aW9uID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDMpO1xuICBjb25zdCBub3JtYWwgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IHV2ID0gbmV3IEZsb2F0MzJBcnJheSh0b3RhbCAqIDIpO1xuICAvLyBDT0xPUiBoYXMgdG8gYmUgY2FycmllZCB0b28sIGFuZCBpdCBpcyBlYXN5IHRvIGZvcmdldDogdGhpcyBmdW5jdGlvbiBjb3BpZWQgcG9zaXRpb24sIG5vcm1hbFxuICAvLyBhbmQgdXYgb25seSwgYW5kIHRoZSBtb3NxdWUncyByaWJiZWQgZG9tZXMgbG9zdCB0aGVpciBncmVlbi1hbmQtcGFsZSBzdHJpcGluZyB0aGUgbW9tZW50IHRoZXlcbiAgLy8gd2VyZSBtZXJnZWQgd2l0aCBhbnl0aGluZy4gVGhlIGZhaWx1cmUgaXMgc2lsZW50IC0tIHRoZSBkb21lIHJlbmRlcnMsIGluIG9uZSBmbGF0IGNvbG91ciAtLSBhbmRcbiAgLy8gdG9vayBhIHdyb25nIHRoZW9yeSBhYm91dCBzUkdCIGdhbW1hIGJlZm9yZSB0aGUgYXR0cmlidXRlIGxpc3Qgd2FzIHJlYWQuIEFueSBpbnB1dCBjYXJyeWluZyBhXG4gIC8vIGNvbG91ciBtZWFucyBldmVyeSBpbnB1dCBnZXRzIG9uZSwgd2hpdGUgd2hlcmUgaXQgaGFkIG5vbmUuXG4gIGNvbnN0IGFueUNvbG9yID0gcGFydHMuc29tZSgoZykgPT4gISFnLmdldEF0dHJpYnV0ZSgnY29sb3InKSk7XG4gIGNvbnN0IGNvbG9yID0gYW55Q29sb3IgPyBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMykuZmlsbCgxKSA6IG51bGw7XG4gIGxldCB2ID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB7XG4gICAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBuID0gZy5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpLCB0ID0gZy5nZXRBdHRyaWJ1dGUoJ3V2Jyk7XG4gICAgY29uc3QgYyA9IGcuZ2V0QXR0cmlidXRlKCdjb2xvcicpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgICBwb3NpdGlvblsodiArIGkpICogM10gPSBwLmdldFgoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMV0gPSBwLmdldFkoaSk7IHBvc2l0aW9uWyh2ICsgaSkgKiAzICsgMl0gPSBwLmdldFooaSk7XG4gICAgICBpZiAobikgeyBub3JtYWxbKHYgKyBpKSAqIDNdID0gbi5nZXRYKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAxXSA9IG4uZ2V0WShpKTsgbm9ybWFsWyh2ICsgaSkgKiAzICsgMl0gPSBuLmdldFooaSk7IH1cbiAgICAgIGlmICh0KSB7IHV2Wyh2ICsgaSkgKiAyXSA9IHQuZ2V0WChpKTsgdXZbKHYgKyBpKSAqIDIgKyAxXSA9IHQuZ2V0WShpKTsgfVxuICAgICAgaWYgKGNvbG9yICYmIGMpIHsgY29sb3JbKHYgKyBpKSAqIDNdID0gYy5nZXRYKGkpOyBjb2xvclsodiArIGkpICogMyArIDFdID0gYy5nZXRZKGkpOyBjb2xvclsodiArIGkpICogMyArIDJdID0gYy5nZXRaKGkpOyB9XG4gICAgfVxuICAgIHYgKz0gcC5jb3VudDtcbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7IGlmICh0ZW1wW2ldKSBwYXJ0c1tpXS5kaXNwb3NlKCk7IGdlb3NbaV0uZGlzcG9zZSgpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb24sIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShub3JtYWwsIDMpKTtcbiAgb3V0LnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIGlmIChjb2xvcikgb3V0LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbG9yLCAzKSk7XG4gIG91dC5jb21wdXRlQm91bmRpbmdCb3goKTsgb3V0LmNvbXB1dGVCb3VuZGluZ1NwaGVyZSgpO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBib3hBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZDogbnVtYmVyKSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgaCwgZCk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cbmZ1bmN0aW9uIGJveGVzKGxpc3Q6IG51bWJlcltdW10pIHsgcmV0dXJuIG1lcmdlR2VvcyhsaXN0Lm1hcCgoYikgPT4gYm94QXQoYlswXSwgYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSkpKTsgfVxuZnVuY3Rpb24gY3lsQXQoY3g6IG51bWJlciwgY3k6IG51bWJlciwgY3o6IG51bWJlciwgclRvcDogbnVtYmVyLCByQm90OiBudW1iZXIsIGg6IG51bWJlciwgc2VnID0gMTYpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHJUb3AsIHJCb3QsIGgsIHNlZyk7IGcudHJhbnNsYXRlKGN4LCBjeSwgY3opOyByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBSZXZvbHZlIGEgcHJvZmlsZSBhYm91dCArWS4gYHB0c2AgYXJlIFtyYWRpdXMsIHldIGluIG1ldHJlcywgYm90dG9tIHRvIHRvcC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBzaGFwZSB2b2NhYnVsYXJ5IHRoZSB3aG9sZSBtb251bWVudGFsIHNldCBpcyBidWlsdCBmcm9tIC0tIGEgY2hlZGkncyBiZWxsLCBhIHByYW5nJ3NcbiAqIGNvcm4tY29iIHRhcGVyLCBhIGRvbWUsIGEgcmluZ2VkIHNwaXJlIGFyZSBhbGwgb25lIHByb2ZpbGUgZWFjaC4gVHdvIHRoaW5ncyBhcmUgd29ydGggc3RhdGluZ1xuICogYmVjYXVzZSBib3RoIGNvc3QgYSByZWJ1aWxkIHRvIGxlYXJuOlxuICpcbiAqIC0gTGF0aGVHZW9tZXRyeSBpcyBPUEVOIGF0IHRvcCBhbmQgYm90dG9tLiBBIHByb2ZpbGUgdGhhdCBkb2VzIG5vdCBjbG9zZSBvbiB0aGUgYXhpcyAocmFkaXVzIDApXG4gKiAgIGxlYXZlcyBhIGhvbGUgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWRzIGFzIGJhY2tncm91bmQgZW5jbG9zZWQgYnkgdGhlIHNpbGhvdWV0dGUuIENsb3NlIGl0LCBvclxuICogICBjYXAgaXQgd2l0aCB3aGF0IHNpdHMgYWJvdmUuXG4gKiAtIFJBRElBTCBTRUdNRU5UIENPVU5UIGlzIHRoZSB0cmlhbmdsZSBidWRnZXQncyBtYWluIGxldmVyIGhlcmUgYW5kIGl0IGlzIHBlci1sYXRoZTogYSBwcm9maWxlIG9mXG4gKiAgIG4gcG9pbnRzIGF0IHMgc2VnbWVudHMgaXMgMioobi0xKSpzIHRyaWFuZ2xlcy4gQSAyNC1yaW5nIHNwaXJlIGF0IDMyIHNlZ21lbnRzIGlzIDEsNDcyXG4gKiAgIHRyaWFuZ2xlcyBvbiBpdHMgb3duLCB3aGljaCBpcyB3aHkgdGhlIGxvdy1yZWxpZWYgcmluZ3MgYXJlIGEgcHJvZmlsZSByYXRoZXIgdGhhbiAyNCByaW5ncy5cbiAqL1xuZnVuY3Rpb24gbGF0aGUocHRzOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlciwgeU9mZnNldCA9IDApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHYgPSBwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihNYXRoLm1heChwWzBdLCAwKSwgcFsxXSArIHlPZmZzZXQpKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHYsIHNlZyk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIHN0ZXBwZWQgdGFwZXIgYXMgYSBsYXRoZSBwcm9maWxlOiBgcmluZ3NgIGFsdGVybmF0aW5nIG91dC9pbiByYWRpaSBjbGltYmluZyBmcm9tIHkwIHRvIHkxLlxuICogIE9uZSBnZW9tZXRyeSwgb25lIGRyYXcgY2FsbCwgYW5kIHRoZSBzdGVwIGNvdW50IGlzIGEgcHJvZmlsZS1wb2ludCBjb3VudCByYXRoZXIgdGhhbiBhIG1lc2hcbiAqICBjb3VudCAtLSB3aGljaCBpcyB3aGF0IGtlZXBzIGEgMjAtcmluZyBjaGVkaSBzcGlyZSBpbnNpZGUgYSAzMi1nZW9tZXRyeSBjZWlsaW5nLiAqL1xuZnVuY3Rpb24gcmluZ2VkVGFwZXIoeTA6IG51bWJlciwgeTE6IG51bWJlciwgcjA6IG51bWJlciwgcjE6IG51bWJlciwgcmluZ3M6IG51bWJlciwgYnVsZ2U6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gcmluZ3M7IGkrKykge1xuICAgIGNvbnN0IHQgPSBpIC8gcmluZ3M7XG4gICAgY29uc3QgeSA9IHkwICsgKHkxIC0geTApICogdDtcbiAgICBjb25zdCByID0gcjAgKyAocjEgLSByMCkgKiB0O1xuICAgIGNvbnN0IHN0ZXAgPSAoeTEgLSB5MCkgLyByaW5ncztcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5XSk7XG4gICAgcHRzLnB1c2goW3IgKyBidWxnZSwgeSArIHN0ZXAgKiAwLjQ1XSk7XG4gICAgcHRzLnB1c2goW3IsIHkgKyBzdGVwICogMC41NV0pO1xuICB9XG4gIHB0cy5wdXNoKFtyMSwgeTFdKTtcbiAgcmV0dXJuIHB0cztcbn1cblxuXG4vKipcbiAqIFRoZSBSRURFTlRFRCBzcXVhcmUgcGxhbiAtLSBhIHNxdWFyZSB3aG9zZSBmb3VyIGNvcm5lcnMgYXJlIGN1dCBiYWNrIGluIHR3byByaWdodC1hbmdsZWQgc3RlcHMuXG4gKiBJdCBpcyB0aGUgcGxhbiBvZiBhIFRoYWkgY2hlZGkncyB0ZXJyYWNlIGFuZCBvZiBhIHByYW5nJ3MgYmFzZSwgYW5kIGJ1aWxkaW5nIGl0IGFzIGEgU2hhcGUgdGhhdFxuICogaXMgdGhlbiBleHRydWRlZCBpcyBub3QgYSBzdHlsaXN0aWMgY2hvaWNlOiB0aGUgb2J2aW91cyBhbHRlcm5hdGl2ZSwgYSB3aWRlIGJveCBjcm9zc2VkIGJ5IGFcbiAqIGRlZXAgYm94LCBwdXRzIHRoZSB0d28gYm94ZXMnIHRvcCBmYWNlcyBpbiB0aGUgc2FtZSBwbGFuZSBmYWNpbmcgdGhlIHNhbWUgd2F5IG92ZXIgdGhlaXIgd2hvbGVcbiAqIGludGVyc2VjdGlvbiwgd2hpY2ggei1maWdodHMuIE9uZSBleHRydXNpb24gb2Ygb25lIGNsb3NlZCBwbGFuIGhhcyBubyBpbnRlcmlvciBjb2luY2lkZW5jZSBhdFxuICogYWxsLlxuICpcbiAqIGBhYCBpcyB0aGUgaGFsZi13aWR0aCBhY3Jvc3MgdGhlIGZsYXRzOyBgcmAgaXMgdGhlIGRlcHRoIG9mIGVhY2ggcmVkZW50IHN0ZXAuXG4gKi9cbmZ1bmN0aW9uIHJlZGVudGVkU2hhcGUoYTogbnVtYmVyLCByOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHF1YWQgPSBbW2EsIGEgLSAyICogcl0sIFthIC0gciwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gcl0sIFthIC0gMiAqIHIsIGEgLSByXSwgW2EgLSAyICogciwgYV1dO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXTtcbiAgZm9yIChsZXQgayA9IDA7IGsgPCA0OyBrKyspIHtcbiAgICBmb3IgKGNvbnN0IFt4LCB6XSBvZiBxdWFkKSB7XG4gICAgICAvLyByb3Q5MF5rLCBhcHBsaWVkIGsgdGltZXM6ICh4LCB6KSAtPiAoLXosIHgpXG4gICAgICBsZXQgcHggPSB4LCBweiA9IHo7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGs7IGkrKykgeyBjb25zdCB0ID0gcHg7IHB4ID0gLXB6OyBweiA9IHQ7IH1cbiAgICAgIHB0cy5wdXNoKFtweCwgcHpdKTtcbiAgICB9XG4gIH1cbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBiZXR3ZWVuIHR3byBoZWlnaHRzLiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGFsb25nICtaLCBzbyB0aGUgcmVzdWx0IGlzXG4gKiAgcm90YXRlZCBvbnRvICtZOyBgLU1hdGguUEkgLyAyYCBhYm91dCBYIG1hcHMgK1ogdG8gK1kgYW5kIGxlYXZlcyB0aGUgcGxhbidzIG93biB4IGFzIHguICovXG5mdW5jdGlvbiBleHRydWRlU2xhYihzaGFwZTogVEhSRUUuU2hhcGUsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB5MSAtIHkwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBjdXJ2ZVNlZ21lbnRzOiA0IH0pO1xuICAvLyByb3RhdGVYKC1QSS8yKSBtYXBzICh4LCB5LCB6KSAtPiAoeCwgeiwgLXkpLCBzbyB0aGUgZXh0cnVzaW9uIGRlcHRoIGJlY29tZXMgaGVpZ2h0IGFuZCB0aGVcbiAgLy8gcGxhbidzIG93biBzZWNvbmQgYXhpcyBiZWNvbWVzIC16LiBFdmVyeSBwbGFuIGhlcmUgaXMgZm91ci1mb2xkIHN5bW1ldHJpYywgc28gdGhhdCBzaWduIGlzXG4gIC8vIGltbWF0ZXJpYWw7IHdoYXQgbWF0dGVycyBpcyB0aGF0IHRoZSBzbGFiIG5vdyBydW5zIFVQIGZyb20geT0wIGFuZCBuZWVkcyBsaWZ0aW5nIGJ5IHkwLlxuICBnLnJvdGF0ZVgoLU1hdGguUEkgLyAyKTtcbiAgZy50cmFuc2xhdGUoMCwgeTAsIDApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgc3F1YXJlIHBsYW4gd2l0aCBhIHJlY3Rhbmd1bGFyIE5PVENIIGN1dCBpbnRvIGl0cyArWCBmYWNlIC0tIHRoZSBzdGFpciB3ZWxsIG9mIGEgdGVtcGxlXG4gKiB0ZXJyYWNlLiBDdXR0aW5nIHRoZSBzdGFpciBvdXQgb2YgdGhlIHBsYW4gcmF0aGVyIHRoYW4gaGFuZ2luZyBpdCBvZmYgdGhlIG91dHNpZGUgaXMgd2hhdCBrZWVwc1xuICogYW4gYXN5bW1ldHJpYyBmZWF0dXJlIGluc2lkZSBhIHN5bW1ldHJpYyBkZWNsYXJlZCBlbnZlbG9wZTogYSBmbGlnaHQgcHJvamVjdGluZyBwYXN0IGEgOSBtXG4gKiB0ZXJyYWNlIHdvdWxkIHB1dCB0aGUgcHJvcCdzIGJvdW5kaW5nIGJveCBvZmYtY2VudHJlIGFuZCBvdmVyIGl0cyBkZWNsYXJlZCB3aWR0aCBvbiBvbmUgc2lkZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFNxdWFyZShhOiBudW1iZXIsIG5vdGNoSGFsZlo6IG51bWJlciwgeElubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbYSwgLWFdLCBbYSwgLW5vdGNoSGFsZlpdLCBbeElubmVyLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIG5vdGNoSGFsZlpdLFxuICAgICAgICAgICAgICAgW2EsIG5vdGNoSGFsZlpdLCBbYSwgYV0sIFstYSwgYV0sIFstYSwgLWFdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBSRUNUQU5HVUxBUiBwbGFuIHdpdGggYSBub3RjaCBjdXQgaW50byBpdHMgK1ogZmFjZS4gVGhlIHNxdWFyZSB2ZXJzaW9uIGFib3ZlIGlzIHdoYXQgYSBjaGVkaSBvclxuICogYSBwcmFuZyB0ZXJyYWNlIG5lZWRzOyBhIGhhbGwgdGhhdCBpcyB0d2ljZSBhcyBsb25nIGFzIGl0IGlzIHdpZGUgbmVlZHMgdGhlIHR3byBoYWxmLWV4dGVudHMga2VwdFxuICogYXBhcnQsIGFuZCBpdHMgc3RhaXIgaXMgb24gYSBzaG9ydCBlbmQgcmF0aGVyIHRoYW4gYSBsb25nIG9uZS5cbiAqL1xuZnVuY3Rpb24gbm90Y2hlZFJlY3QoaHg6IG51bWJlciwgaHo6IG51bWJlciwgbng6IG51bWJlciwgeklubmVyOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHB0cyA9IFtbaHgsIC1oel0sIFtoeCwgaHpdLCBbbngsIGh6XSwgW254LCB6SW5uZXJdLCBbLW54LCB6SW5uZXJdLCBbLW54LCBoel0sIFstaHgsIGh6XSwgWy1oeCwgLWh6XV07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwdHNbMF1bMF0sIHB0c1swXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHRzLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHRzW2ldWzBdLCBwdHNbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIFRoZSBjcm9zcy1zZWN0aW9uIG9mIG9uZSByb29mIHRpZXIsIGFzIGEgY2xvc2VkIHRyYXBlem9pZCBpbiBYWTogZWF2ZXMgYXQgKCstaGFsZkJhc2UsIHkwKVxuICogcmlzaW5nIGF0IGBwaXRjaGAgKGFzIGEgdGFuZ2VudCkgdG8gYSBmbGF0IHRvcCBhdCB5MS5cbiAqXG4gKiBUaGFpIHRlbXBsZSByb29mcyBuZXN0LCBhbmQgdGhhdCBpcyB0aGUgcmVhc29uIGZvciB0aGUgVFJVTkNBVElPTi4gVGhyZWUgZnVsbCBnYWJsZXMgYXQgb25lXG4gKiBwaXRjaCBjYW5ub3QgbmVzdCAtLSB0aGUgd2lkZXN0IHRpZXIncyByaWRnZSB3b3VsZCBiZSB0aGUgaGlnaGVzdCwgd2hpY2ggaXMgdXBzaWRlIGRvd24uIFdoYXRcbiAqIGFjdHVhbGx5IGhhcHBlbnMgaXMgdGhhdCBlYWNoIGxvd2VyIHRpZXIgaXMgY3V0IG9mZiBhdCB0aGUgaGVpZ2h0IHdoZXJlIHRoZSBuZXh0IHRpZXIncyBlYXZlc1xuICogYmVnaW4sIGFuZCBpdHMgdXBwZXIgcGFydCBpcyBoaWRkZW4gYmVoaW5kIHRoYXQgdGllcjsgb25seSB0aGUgdG9wbW9zdCB0aWVyIGlzIGEgcmVhbCBnYWJsZSxcbiAqIGNsb3NlZCBieSBwYXNzaW5nIHkxIGF0IHRoZSBhcGV4LlxuICovXG5mdW5jdGlvbiB0aWVyUHJvZmlsZShoYWxmQmFzZTogbnVtYmVyLCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCBwaXRjaDogbnVtYmVyKTogVEhSRUUuU2hhcGUge1xuICBjb25zdCBpbnNldCA9ICh5MSAtIHkwKSAvIHBpdGNoO1xuICBjb25zdCBoYWxmVG9wID0gaGFsZkJhc2UgLSBpbnNldDtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC1oYWxmQmFzZSwgeTApO1xuICBzaGFwZS5saW5lVG8oaGFsZkJhc2UsIHkwKTtcbiAgaWYgKGhhbGZUb3AgPiAwLjAyKSB7XG4gICAgc2hhcGUubGluZVRvKGhhbGZUb3AsIHkxKTtcbiAgICBzaGFwZS5saW5lVG8oLWhhbGZUb3AsIHkxKTtcbiAgfSBlbHNlIHtcbiAgICBzaGFwZS5saW5lVG8oMCwgeTAgKyBoYWxmQmFzZSAqIHBpdGNoKTsgICAvLyBhIHJlYWwgcmlkZ2U6IHRoZSB0b3Btb3N0IHRpZXIgY2xvc2VzIHRvIGEgcG9pbnRcbiAgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKiogRXh0cnVkZSBhIHBsYW4gU2hhcGUgYWxvbmcgK1ogYmV0d2VlbiB0d28gZGVwdGhzLCB3aXRoIG5vIHJvdGF0aW9uIC0tIHRoZSBuYXRpdmUgZGlyZWN0aW9uIG9mXG4gKiAgRXh0cnVkZUdlb21ldHJ5LiBVc2VkIHdoZXJlIHRoZSBwcm9maWxlIGdlbnVpbmVseSBsaXZlcyBpbiB0aGUgWFkgcGxhbmUsIHN1Y2ggYXMgdGhlIHJha2luZ1xuICogIHRyaWFuZ2xlIG9mIGEgc3RhaXIgY2hlZWsuICovXG5mdW5jdGlvbiBleHRydWRlQWxvbmdaKHNoYXBlOiBUSFJFRS5TaGFwZSwgejA6IG51bWJlciwgejE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHoxIC0gejAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIGcudHJhbnNsYXRlKDAsIDAsIHowKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgcmVjdGFuZ3VsYXIgcGxhdGUgd2hvc2UgaGVhZCBpcyBhIGhhbGYtcm91bmQgYXJjaCwgb3B0aW9uYWxseSBjYXJyeWluZyBhbiBhcmNoZWQgYXBlcnR1cmUgb2ZcbiAqICB0aGUgc2FtZSBmb3JtLiBUaGUgYXBlcnR1cmUgYXJjIGlzIEFMV0FZUyBzd2VwdCBmcm9tIGFuZ2xlIDAgdG8gUEk6IHdyaXR0ZW4gdGhlIG90aGVyIHdheSBpdFxuICogIHJ1bnMgdW5kZXIgdGhlIGNpcmNsZSBpbnN0ZWFkIG9mIG92ZXIgaXQgYW5kIGxlYXZlcyB0aGUgYXJjaCBoZWFkIGZpbGxlZCBzb2xpZCwgd2hpY2ggcmVhZHMgYXNcbiAqICBhIHNxdWFyZSB3aW5kb3cgd2l0aCBhIGdob3N0IGFyY2ggZHJhd24gYWNyb3NzIGl0LiAqL1xuZnVuY3Rpb24gYXJjaGVkUGxhdGUodzogbnVtYmVyLCBoOiBudW1iZXIsIGFyY2hSOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgcjogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbygtdyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIDApO1xuICBzaGFwZS5saW5lVG8odyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmFic2FyYygwLCBzcHJpbmcsIGFyY2hSLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gIHNoYXBlLmxpbmVUbygtdyAvIDIsIHNwcmluZyk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIHAubW92ZVRvKGhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmxpbmVUbyhob2xlLnIsIGhvbGUuc3ByaW5nKTtcbiAgICBwLmFic2FyYygwLCBob2xlLnNwcmluZywgaG9sZS5yLCAwLCBNYXRoLlBJLCBmYWxzZSk7XG4gICAgcC5saW5lVG8oLWhvbGUuciwgaG9sZS5zaWxsKTtcbiAgICBwLmNsb3NlUGF0aCgpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgSElQIFJPT0Ygd2l0aCBhIGNvbmNhdmUgc2xvcGUgYW5kIHVwc3dlcHQgY29ybmVycyAtLSB0aGUgRWFzdCBBc2lhbiByb29mLCB3aGljaCBub25lIG9mIHRoZVxuICogb3RoZXIgc2hhcGUgaGVscGVycyBoZXJlIGNhbiBleHByZXNzLlxuICpcbiAqIEl0IGlzIGdlbmVyYXRlZCBhcyBhIHJpbmcgb2YgcmVjdGFuZ2xlcyBjbGltYmluZyBmcm9tIHRoZSBlYXZlcyB0byB0aGUgcmlkZ2UgcmF0aGVyIHRoYW4gYXMgYW5cbiAqIGV4dHJ1ZGVkIHByb2ZpbGUsIGJlY2F1c2UgYSBoaXAgc2xvcGVzIG9uIGFsbCBmb3VyIHNpZGVzOiBhbiBleHRydXNpb24gZ2l2ZXMgdmVydGljYWwgZ2FibGUgZW5kcyxcbiAqIHdoaWNoIGlzIGEgZGlmZmVyZW50IGJ1aWxkaW5nLlxuICpcbiAqIFRoZSBob3Jpem9udGFsIHNocmluayBmb2xsb3dzIGAoMSAtIHQpXmN1cnZlRXhwYCwgYW5kIHRoZSBleHBvbmVudCBtdXN0IGJlIEFCT1ZFIG9uZS4gVGhlIHNsb3BlXG4gKiBhdCBhbnkgaGVpZ2h0IGlzIGR5L2R4LCBzbyBhIHBsYW4gdGhhdCBzaHJpbmtzIEZBU1QgZm9yIGEgZ2l2ZW4gcmlzZSBpcyBhIHNoYWxsb3cgc2xvcGU6IHdpdGhcbiAqIHEgPiAxIHRoZSBkZXJpdmF0aXZlIHEoMS10KV4ocS0xKSBpcyBsYXJnZSBhdCB0aGUgZWF2ZXMgYW5kIHNtYWxsIGF0IHRoZSByaWRnZSwgd2hpY2ggaXMgc2hhbGxvd1xuICogZWF2ZXMgYW5kIGEgc3RlZXAgcmlkZ2UgLS0gdGhlIEVhc3QgQXNpYW4gcm9vZi4gQmVsb3cgb25lIGl0IGlzIHRoZSBvdGhlciB3YXkgcm91bmQgYW5kIGJ1aWxkcyBhXG4gKiBmbGF0LXRvcHBlZCB0ZW50LCB3aGljaCBpcyB3aGF0IHRoZSBmaXJzdCBhdHRlbXB0IGhlcmUgcmVuZGVyZWQuIEEgbGluZWFyIHNocmluayBnaXZlcyB0aGVcbiAqIHN0cmFpZ2h0IHB5cmFtaWQgb2YgYSBoaXAgcm9vZiBhbnl3aGVyZSBlbHNlIGluIHRoZSB3b3JsZC5cbiAqXG4gKiBgY29ybmVyTGlmdGAgcmFpc2VzIGFuZCBwdXNoZXMgb3V0IHRoZSBmb3VyIGVhdmVzIGNvcm5lcnMsIHRhcGVyaW5nIGF3YXkgYnkgYSB0aGlyZCBvZiB0aGUgd2F5XG4gKiB1cC4gVGhhdCB1cHN3ZWVwIGlzIHRoZSBzaW5nbGUgbW9zdCBpZGVudGlmeWluZyB0aGluZyBhYm91dCB0aGUgcm9vZiwgYW5kIGl0IGlzIHdoeSB0aGUgcGxhblxuICogaGFsZi13aWR0aCBwYXNzZWQgaW4gbXVzdCBsZWF2ZSByb29tOiB0aGUgY29ybmVycyBlbmQgdXAgZnVydGhlciBvdXQgdGhhbiB0aGUgZWF2ZXMgbGluZS5cbiAqXG4gKiBUaGUgcmVzdWx0IGlzIGEgY2xvc2VkIHNvbGlkIC0tIG91dGVyIHN1cmZhY2UsIGEgc29mZml0IGBkcm9wYCBiZWxvdyB0aGUgZWF2ZXMsIGFuZCBhIGZhc2NpYSBiYW5kXG4gKiBiZXR3ZWVuIHRoZW0uIEFuIG9wZW4gc2hlbGwgd291bGQgbGV0IHRoZSB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnlcbiAqIGxvdyBhbmdsZS5cbiAqL1xuZnVuY3Rpb24gaGlwUm9vZihoeDogbnVtYmVyLCBoejogbnVtYmVyLCByaWRnZUhhbGZaOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgIGN1cnZlRXhwOiBudW1iZXIsIHN0ZXBzOiBudW1iZXIsIGRyb3A6IG51bWJlciwgY29ybmVyTGlmdDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICAvLyBFSUdIVCBwb2ludHMgcGVyIHJpbmcsIG5vdCBmb3VyOiB0aGUgZm91ciBjb3JuZXJzIGFuZCB0aGUgZm91ciBlZGdlIG1pZHBvaW50cy4gV2l0aCBmb3VyIHRoZVxuICAvLyBjb3JuZXIgbGlmdCBoYXMgbm93aGVyZSB0byBmYWxsIGF3YXkgdG8gYW5kIHJhaXNlcyB0aGUgRU5USVJFIGVhdmVzIGxpbmUsIHdoaWNoIGJ1aWx0IGEgc2FkZGxlXG4gIC8vIGluc3RlYWQgb2YgYSByb29mLiBUaGUgbWlkcG9pbnRzIGFyZSB3aGF0IGhvbGQgdGhlIGVhdmVzIGRvd24gYmV0d2VlbiB0aGUgY29ybmVycy5cbiAgLy9cbiAgLy8gVGhlIG9yZGVyIGlzICgreCwteiksIG1pZCwgKC14LC16KSwgbWlkLCAoLXgsK3opLCBtaWQsICgreCwreiksIG1pZCwgd2hpY2ggaXMgY291bnRlci1jbG9ja3dpc2VcbiAgLy8gc2VlbiBmcm9tIEFCT1ZFIC0tIHRoZSB3aW5kaW5nIGFuIHVwd2FyZC1mYWNpbmcgc3VyZmFjZSBuZWVkcy4gV291bmQgdGhlIG90aGVyIHdheSB0aGUgd2hvbGVcbiAgLy8gcm9vZiByZW5kZXJzIGluc2lkZSBvdXQsIHdoaWNoIGxvb2tzIGxpa2UgYSB0aGluIGJsYWNrIG1lbWJyYW5lIHJhdGhlciB0aGFuIGEgbWlzdGFrZS5cbiAgY29uc3QgcmluZyA9ICh0OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBmID0gTWF0aC5wb3coMSAtIHQsIGN1cnZlRXhwKTtcbiAgICBjb25zdCBnID0gTWF0aC5wb3coTWF0aC5tYXgoMCwgMSAtIHQgLyAwLjM0KSwgMik7XG4gICAgY29uc3QgbGlmdCA9IGNvcm5lckxpZnQgKiBnLCBvdXQgPSAxICsgMC4wNDUgKiBnO1xuICAgIGNvbnN0IGF4ID0gaHggKiBmICogb3V0LCBheiA9IChyaWRnZUhhbGZaICsgKGh6IC0gcmlkZ2VIYWxmWikgKiBmKSAqIG91dDtcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IGMgPSAoeDogbnVtYmVyLCB6OiBudW1iZXIpID0+IFt4LCB5ICsgbGlmdCwgel07XG4gICAgY29uc3QgbSA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHksIHpdO1xuICAgIHJldHVybiBbYyhheCwgLWF6KSwgbSgwLCAtYXopLCBjKC1heCwgLWF6KSwgbSgtYXgsIDApLFxuICAgICAgICAgICAgYygtYXgsIGF6KSwgbSgwLCBheiksIGMoYXgsIGF6KSwgbShheCwgMCldO1xuICB9O1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGxldCBwcmV2ID0gcmluZygwKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gc3RlcHM7IGkrKykge1xuICAgIGNvbnN0IGN1ciA9IHJpbmcoaSAvIHN0ZXBzKTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICAgIHB1c2gocHJldltrXSwgcHJldltrMl0sIGN1cltrMl0pO1xuICAgICAgcHVzaChwcmV2W2tdLCBjdXJbazJdLCBjdXJba10pO1xuICAgIH1cbiAgICBwcmV2ID0gY3VyO1xuICB9XG4gIC8vIEZhc2NpYSBiYW5kIGFuZCBzb2ZmaXQsIHNvIHRoZSByb29mIGlzIGEgc29saWQgcmF0aGVyIHRoYW4gYSBzaGVsbC4gQW4gb3BlbiBzaGVsbCBsZXRzIHRoZVxuICAvLyB0dXJudGFibGUgZ2F0ZSByZWFkIHN0cmFpZ2h0IHRocm91Z2ggdGhlIHJvb2YgZnJvbSBhbnkgbG93IGFuZ2xlLlxuICBjb25zdCBlID0gcmluZygwKTtcbiAgY29uc3QgbG93ID0gZS5tYXAoKHApID0+IFtwWzBdLCBwWzFdIC0gZHJvcCwgcFsyXV0pO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDg7IGsrKykge1xuICAgIGNvbnN0IGsyID0gKGsgKyAxKSAlIDg7XG4gICAgcHVzaChsb3dba10sIGVba10sIGVbazJdKTtcbiAgICBwdXNoKGxvd1trXSwgZVtrMl0sIGxvd1trMl0pO1xuICB9XG4gIGZvciAobGV0IGsgPSAxOyBrIDwgNzsgaysrKSBwdXNoKGxvd1swXSwgbG93W2sgKyAxXSwgbG93W2tdKTsgICAvLyBzb2ZmaXQgZmFuLCBmYWNpbmcgZG93blxuXG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUklCQkVEIGRvbWUgLS0gYSBzdXJmYWNlIG9mIHJldm9sdXRpb24gd2hvc2UgcmFkaXVzIGlzIG1vZHVsYXRlZCBhcm91bmQgdGhlIGF4aXMsIHNvIGl0IHJlYWRzXG4gKiBhcyB0aGUgbWVsb24tcmliYmVkIGRvbWUgb2YgYSBtb3NxdWUgcmF0aGVyIHRoYW4gYSBzbW9vdGggaGVtaXNwaGVyZS5cbiAqXG4gKiBMYXRoZUdlb21ldHJ5IGNhbm5vdCBkbyB0aGlzOiBhIGxhdGhlIHJldm9sdmVzIG9uZSBwcm9maWxlIGF0IG9uZSByYWRpdXMgcGVyIGhlaWdodCwgYW5kIHJpYnMgYXJlXG4gKiBhIHZhcmlhdGlvbiBBUk9VTkQgdGhlIGF4aXMsIG5vdCBhbG9uZyBpdC4gU28gdGhlIHN1cmZhY2UgaXMgZ2VuZXJhdGVkIGRpcmVjdGx5LCBzYW1wbGluZ1xuICogYDEgKyBhbXAgKiBjb3MocmlicyAqIHRoZXRhKWAgcGVyIHNlY3Rvci4gVGhlIHJpYnMgYXJlIHRoZSByZWFzb24gdGhlIGRvbWUgaXMgcmVjb2duaXNhYmxlIGF0IHRoZVxuICogZGlzdGFuY2UgYSB2aWxsYWdlIHNreWxpbmUgaXMgcmVhZCBmcm9tIC0tIGEgc21vb3RoIGdyZWVuIGhlbWlzcGhlcmUgcmVhZHMgYXMgYSB3YXRlciB0YW5rLlxuICovXG5mdW5jdGlvbiByaWJiZWREb21lKHByb2ZpbGU6IG51bWJlcltdW10sIHJpYnM6IG51bWJlciwgYW1wOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICB2YWxsZXk/OiBudW1iZXJbXSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdHJpOiBudW1iZXJbXSA9IFtdO1xuICBjb25zdCBjb2w6IG51bWJlcltdID0gW107XG4gIC8vIFRoZSByaWJzIGFyZSBub3Qgb25seSBhIHNoYXBlLiBPbiB0aGUgbW9zcXVlJ3MgZG9tZXMgdGhlIGNyZXN0cyBhcmUgcGFsZSBhbmQgdGhlIHZhbGxleXMgYXJlXG4gIC8vIGdyZWVuLCBhbmQgdGhhdCBzdHJpcGUgaXMgbW9zdCBvZiB3aGF0IHRoZSBkb21lIHJlYWRzIGFzIGF0IGRpc3RhbmNlLiBJdCBpcyBjYXJyaWVkIGFzIGFcbiAgLy8gcGVyLXZlcnRleCBNVUxUSVBMSUVSIG9mZiB0aGUgc2FtZSBjb3NpbmUgdGhhdCBzaGFwZXMgdGhlIHJpYiAtLSB0d28gbWVhc3VyZW1lbnRzLCB0aGUgY3Jlc3RcbiAgLy8gY29sb3VyIG9uIHRoZSBtYXRlcmlhbCBhbmQgdGhlIHZhbGxleSBhcyB0aGUgcmF0aW8gYmV0d2VlbiB0aGVtIC0tIHNvIHRoZSBzdHJpcGluZyBjb3N0cyBhblxuICAvLyBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSB0ZXh0dXJlIHNldCBvciBhIHNlY29uZCBkcmF3IGNhbGwuXG4gIGNvbnN0IHRpbnQgPSAoajogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCF2YWxsZXkpIHJldHVybiBbMSwgMSwgMV07XG4gICAgLy8gUmFpc2VkIHRvIDAuNTUgcmF0aGVyIHRoYW4gbGVmdCBsaW5lYXIuIEEgY29zaW5lIHNwZW5kcyBoYWxmIGl0cyBhcmVhIG5lYXIgZWFjaCBleHRyZW1lLCBhbmRcbiAgICAvLyB0aGF0IHJlbmRlcnMgYSBkb21lIHRoYXQgaXMgcGFsZSBvdmVyYWxsIHdoZXJlIHRoZSBwbGF0ZSdzIGlzIGdyZWVuIG92ZXJhbGw6IHRoZSBjcmVzdCBpcyBhXG4gICAgLy8gbmFycm93IGhpZ2hsaWdodCBvbiBhIHJlYWwgcmliLCBub3QgaGFsZiBvZiBpdC4gVGhlIGV4cG9uZW50IHdpZGVucyB0aGUgdmFsbGV5LlxuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygoMSAtIE1hdGguY29zKHJpYnMgKiAoKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWcpKSkgLyAyLCAwLjU1KTtcbiAgICByZXR1cm4gWzEgKyAodmFsbGV5WzBdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsxXSAtIDEpICogZiwgMSArICh2YWxsZXlbMl0gLSAxKSAqIGZdO1xuICB9O1xuICBjb25zdCBwdXNoID0gKGE6IG51bWJlcltdLCBiOiBudW1iZXJbXSwgYzogbnVtYmVyW10pID0+IHRyaS5wdXNoKC4uLmEsIC4uLmIsIC4uLmMpO1xuICBjb25zdCBhdCA9IChpOiBudW1iZXIsIGo6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IHRoID0gKGogJSBzZWcpICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgY29uc3QgZiA9IDEgKyBhbXAgKiBNYXRoLmNvcyhyaWJzICogdGgpO1xuICAgIGNvbnN0IHIgPSBwcm9maWxlW2ldWzBdICogZjtcbiAgICByZXR1cm4gW01hdGguc2luKHRoKSAqIHIsIHByb2ZpbGVbaV1bMV0sIE1hdGguY29zKHRoKSAqIHJdO1xuICB9O1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2ZpbGUubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgYSA9IGF0KGksIGopLCBiID0gYXQoaSwgaiArIDEpLCBjID0gYXQoaSArIDEsIGogKyAxKSwgZCA9IGF0KGkgKyAxLCBqKTtcbiAgICAgIHB1c2goYSwgYiwgYyk7XG4gICAgICBwdXNoKGEsIGMsIGQpO1xuICAgICAgY29uc3QgdGEgPSB0aW50KGopLCB0YiA9IHRpbnQoaiArIDEpO1xuICAgICAgY29sLnB1c2goLi4udGEsIC4uLnRiLCAuLi50YiwgLi4udGEsIC4uLnRiLCAuLi50YSk7XG4gICAgfVxuICB9XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRyaSksIDMpKTtcbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KCh0cmkubGVuZ3RoIC8gMykgKiAyKSwgMikpO1xuICBpZiAodmFsbGV5KSBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sKSwgMykpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgUE9JTlRFRCBhcmNoIHBsYXRlIC0tIHRoZSB0d28tY2VudHJlZCBhcmNoIG9mIGEgbW9zcXVlLCBub3QgdGhlIGhhbGYtcm91bmQgb2YgYSBSb21hbiBvbmUuXG4gKiBgYXJjaGVkUGxhdGVgIGFib3ZlIHN3ZWVwcyBhIHNpbmdsZSBzZW1pY2lyY2xlLCB3aGljaCBpcyB0aGUgd3JvbmcgYXJjaCBoZXJlIGFuZCByZWFkcyBhcyBhXG4gKiByYWlsd2F5IHZpYWR1Y3Q7IHRoaXMgb25lIHJ1bnMgZWFjaCBzaWRlIHVwIHRvIGEgc2hhcmVkIGFwZXggdGhyb3VnaCBhIHF1YWRyYXRpYywgd2hpY2ggZ2l2ZXMgdGhlXG4gKiBvZ2VlIHBvaW50LlxuICovXG5mdW5jdGlvbiBwb2ludGVkQXJjaFNoYXBlKHc6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsIGFwZXhSaXNlOiBudW1iZXIsIHNpbGw6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaG9sZT86IHsgdzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyIH0pOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGJ1aWxkID0gKHRhcmdldDogVEhSRUUuU2hhcGUgfCBUSFJFRS5QYXRoLCB3dzogbnVtYmVyLCBzcDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHNsOiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBodyA9IHd3IC8gMjtcbiAgICB0YXJnZXQubW92ZVRvKGh3LCBzbCk7XG4gICAgdGFyZ2V0LmxpbmVUbyhodywgc3ApO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKGh3LCBzcCArIHJpc2UgKiAwLjcyLCAwLCBzcCArIHJpc2UpO1xuICAgIHRhcmdldC5xdWFkcmF0aWNDdXJ2ZVRvKC1odywgc3AgKyByaXNlICogMC43MiwgLWh3LCBzcCk7XG4gICAgdGFyZ2V0LmxpbmVUbygtaHcsIHNsKTtcbiAgICB0YXJnZXQuY2xvc2VQYXRoKCk7XG4gIH07XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIGJ1aWxkKHNoYXBlLCB3LCBzcHJpbmcsIGFwZXhSaXNlLCBzaWxsKTtcbiAgaWYgKGhvbGUpIHtcbiAgICBjb25zdCBwID0gbmV3IFRIUkVFLlBhdGgoKTtcbiAgICBidWlsZChwLCBob2xlLncsIGhvbGUuc3ByaW5nLCBob2xlLmFwZXhSaXNlLCBob2xlLnNpbGwpO1xuICAgIHNoYXBlLmhvbGVzLnB1c2gocCk7XG4gIH1cbiAgcmV0dXJuIHNoYXBlO1xufVxuXG4vKipcbiAqIEEgVEFQRVJJTkcgVFVCRSBhbG9uZyArWiwgYnVpbHQgZnJvbSBhIGxpc3Qgb2Ygc3RhdGlvbnMuIEVhY2ggc3RhdGlvbiBpc1xuICogW3osIGNlbnRyZVgsIGNlbnRyZVksIHJhZGl1c1gsIHJhZGl1c1ldLCBhbmQgY29uc2VjdXRpdmUgc3RhdGlvbnMgYXJlIGpvaW5lZCBieSBhIHJpbmcgb2YgYHNlZ2BcbiAqIHBvaW50cywgc28gdGhlIHJhZGl1cywgdGhlIGNlbnRyZSBhbmQgdGhlIGVsbGlwc2UgcmF0aW8gY2FuIGFsbCB2YXJ5IGFsb25nIHRoZSBsZW5ndGguXG4gKlxuICogVGhpcyBpcyB0aGUgb25seSBPUkdBTklDIGZvcm0gaW4gdGhlIHdob2xlIGtpdCwgYW5kIGl0IGV4aXN0cyBmb3Igb25lIHByb3A6IGEgcmVjbGluaW5nIGZpZ3VyZSBpc1xuICogYSBsb25nIHNvZnQgbWFzcyB3aG9zZSBzZWN0aW9uIGNoYW5nZXMgYXQgZXZlcnkgcG9pbnQgYWxvbmcgaXQgLS0gc2hvdWxkZXIgdG8gd2Fpc3QgdG8gaGlwIHRvXG4gKiBjYWxmIC0tIGFuZCBuZWl0aGVyIGEgbGF0aGUgbm9yIGEgc3RhY2sgb2YgYm94ZXMgY2FuIHNheSB0aGF0LiBBIGJveCBkZWNvbXBvc2l0aW9uIG9mIGEgbHlpbmdcbiAqIGJvZHkgaXMgbm90IGEgbG93LXBvbHkgYm9keSwgaXQgaXMgYSBwaWxlIG9mIGx1Z2dhZ2UuXG4gKlxuICogQSBzdGF0aW9uIHdpdGggYSByYWRpdXMgYXQgb3IgbmVhciB6ZXJvIGNsb3NlcyB0aGUgdHViZSwgc28gdGhlIGVuZHMgY2FuIGJlIGNhcHBlZCBieSB0aGVcbiAqIHN0YXRpb24gbGlzdCBpdHNlbGYgcmF0aGVyIHRoYW4gYnkgYSBzZXBhcmF0ZSBmYW4uXG4gKi9cbmZ1bmN0aW9uIHR1YmVBbG9uZyhzdGF0aW9uczogbnVtYmVyW11bXSwgc2VnOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIElOREVYRUQsIHdpdGggc2hhcmVkIHJpbmcgdmVydGljZXMsIHNvIGNvbXB1dGVWZXJ0ZXhOb3JtYWxzIGF2ZXJhZ2VzIGFjcm9zcyB0aGUgcXVhZHMgYW5kIHRoZVxuICAvLyBzdXJmYWNlIHNoYWRlcyBzbW9vdGguIFRoZSBmaXJzdCBidWlsZCBlbWl0dGVkIGxvb3NlIHRyaWFuZ2xlcywgYW5kIGEgZmxhdC1zaGFkZWQgc29mdCBib2R5XG4gIC8vIHNob3dzIGV2ZXJ5IHN0YXRpb24gYXMgYSBjcmVhc2UgLS0gYSByZWNsaW5pbmcgZmlndXJlIHRoYXQgbG9va2VkIGNydW1wbGVkIHJhdGhlciB0aGFuIGRyYXBlZC5cbiAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCBpZHg6IG51bWJlcltdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBbeiwgY3gsIGN5LCByeCwgcnldID0gc3RhdGlvbnNbaV07XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBzZWc7IGorKykge1xuICAgICAgY29uc3QgdGggPSBqICogTWF0aC5QSSAqIDIgLyBzZWc7XG4gICAgICBwb3MucHVzaChjeCArIE1hdGguc2luKHRoKSAqIHJ4LCBjeSArIE1hdGguY29zKHRoKSAqIHJ5LCB6KTtcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gaSAqIHNlZyArIGosIGIgPSAoaSArIDEpICogc2VnICsgaiwgYyA9IChpICsgMSkgKiBzZWcgKyAoaiArIDEpICUgc2VnLCBkID0gaSAqIHNlZyArIChqICsgMSkgJSBzZWc7XG4gICAgICBpZHgucHVzaChhLCBiLCBjLCBhLCBjLCBkKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkocG9zKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHBvcy5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuc2V0SW5kZXgoaWR4KTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBIGN1cmxlZCBob3JuOiBgbmAgdGFwZXJpbmcgYm94IHNlZ21lbnRzIHNhbXBsZWQgYWxvbmcgYSBzaW5lLCBlYWNoIHJvdGF0ZWQgdG8gaXRzIG93biB0YW5nZW50LlxuICogU2hhcmVkIGJ5IHRoZSB1Ym9zb3QncyBjaG9mYSwgdGhlIHByYW5nJ3MgdHJpZGVudCBwcm9uZ3MgYW5kIHRoZSBDaGluZXNlIHNocmluZSdzIGZseWluZyBlYXZlcyxcbiAqIGJlY2F1c2UgYWxsIHRocmVlIGFyZSB0aGUgc2FtZSBwcm9ibGVtIC0tIGEgc3RyYWlnaHQgc3Bpa2UgYXQgYSByb29mIGVuZCByZWFkcyBhcyBhIGxpZ2h0bmluZyByb2RcbiAqIGFuZCB0aGUgY3VybCBpcyB0aGUgd2hvbGUgZmVhdHVyZS5cbiAqL1xuZnVuY3Rpb24gY3VybGVkSG9ybihyZWFjaDogbnVtYmVyLCByaXNlOiBudW1iZXIsIHRoaWNrOiBudW1iZXIsIG4gPSA2KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IGF0ID0gKHU6IG51bWJlcikgPT4gW3JlYWNoICogTWF0aC5zaW4odSAqIE1hdGguUEkgKiAwLjQ2KSwgcmlzZSAqIHVdO1xuICBmb3IgKGxldCBqID0gMDsgaiA8IG47IGorKykge1xuICAgIGNvbnN0IGEgPSBhdChqIC8gbiksIGIgPSBhdCgoaiArIDEpIC8gbik7XG4gICAgY29uc3QgZHggPSBiWzBdIC0gYVswXSwgZHkgPSBiWzFdIC0gYVsxXTtcbiAgICBjb25zdCB3ID0gdGhpY2sgKiAoMSAtIGogLyBuKSArIHRoaWNrICogMC4yODtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KHcsIE1hdGguaHlwb3QoZHgsIGR5KSArIHRoaWNrICogMC4yLCB3KTtcbiAgICBnLnJvdGF0ZVooTWF0aC5hdGFuMigtZHgsIGR5KSk7XG4gICAgZy50cmFuc2xhdGUoKGFbMF0gKyBiWzBdKSAvIDIsIChhWzFdICsgYlsxXSkgLyAyLCAwKTtcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIG1lcmdlR2VvcyhzZWdzKTtcbn1cblxuLyoqXG4gKiBSYW1wIGEgcGVyLXZlcnRleCB0aW50IG92ZXIgYSBoZWlnaHQgYmFuZCwgYXMgYSBNVUxUSVBMSUVSIG9uIHRoZSBtYXRlcmlhbCBjb2xvdXIuXG4gKlxuICogVGhpcyBpcyBob3cgYSBsb2NhbCBtYXRlcmlhbCBvdmVycmlkZSBnZXRzIGRlbGl2ZXJlZCBvbiBhIG1lcmdlZCBjb21wb25lbnQgdGhhdCBpcyBvbmUgbWVzaCBhbmRcbiAqIG11c3Qgc3RheSBvbmUgZHJhdyBjYWxsOiBhIHNlY29uZCBtYXRlcmlhbCB3b3VsZCBjb3N0IGEgc3VibWlzc2lvbiBhbmQgYSBzaGFkZXIgc3dpdGNoIHRvIHNheVxuICogdGhhdCB0aGUgYm90dG9tIG9mIGEgd2FsbCBpcyBkaXJ0aWVyIHRoYW4gdGhlIHRvcC4gYHJnYjBgIGlzIHRoZSBtZWFzdXJlZCB0aW50IGF0IHkwIGV4cHJlc3NlZFxuICogYXMgYSBmcmFjdGlvbiBvZiB0aGUgbWF0ZXJpYWwncyBvd24gbWVhc3VyZWQgYWxiZWRvLCBzbyB0aGUgdG9wIG9mIHRoZSBiYW5kIGlzIHVudGludGVkIDEuMCBhbmRcbiAqIHRoZSBudW1iZXJzIGJlbG93IHN0YXkgdHJhY2VhYmxlIHRvIHR3byBjcm9wIG1lYXN1cmVtZW50cyByYXRoZXIgdGhhbiB0byBhIGNob3NlbiBkYXJrZW5pbmcuXG4gKi9cbmZ1bmN0aW9uIHRpbnRCeUhlaWdodChnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByZ2IwOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShwLmNvdW50ICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsIChwLmdldFkoaSkgLSB5MCkgLyAoeTEgLSB5MCkpKTtcbiAgICBmb3IgKGxldCBjID0gMDsgYyA8IDM7IGMrKykgY29sW2kgKiAzICsgY10gPSByZ2IwW2NdICsgKDEgLSByZ2IwW2NdKSAqIHQ7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdmVoaWNsZSBoZWxwZXJzICovXG5cbi8qKiBQYWludCBhIHdob2xlIGdlb21ldHJ5IG9uZSB2ZXJ0ZXggY29sb3VyLiBFdmVyeSB2ZWhpY2xlIG1hdGVyaWFsIGhlcmUgaXMgV0hJVEUgd2l0aFxuICogIHZlcnRleENvbG9ycyBvbiwgc28gYSBjb2xvdXIgZGlmZmVyZW5jZSBjb3N0cyBhbiBhdHRyaWJ1dGUgcmF0aGVyIHRoYW4gYSBtYXRlcmlhbDogdGhlIGJvZHknc1xuICogIHR3by10b25lLCB0aGUgdHlyZSBhZ2FpbnN0IGl0cyByaW0sIGFuIGFtYmVyIGluZGljYXRvciBvbiBhIGJsYWNrIGJ1bXBlciBhbGwgcmlkZSBvbmUgc2hhZGVyLlxuICogIFZlcnRleCBjb2xvdXJzIG11bHRpcGx5IGluIExJTkVBUiBzcGFjZSwgc28gdGhlIGhleCBpcyBjb252ZXJ0ZWQgdGhyb3VnaCBUSFJFRS5Db2xvciwgd2hpY2hcbiAqICBkb2VzIHRoZSBzUkdCLXRvLWxpbmVhciBzdGVwLiAqL1xuZnVuY3Rpb24gdGludEdlbyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBoZXg6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgYyA9IG5ldyBUSFJFRS5Db2xvcihoZXgpO1xuICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7IGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjsgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBCb3gtcHJvamVjdCB3b3JsZC1tZXRyZSBVVnMgc28gYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSAobXVkLCBydXN0LCBjb3JydWdhdGlvbikgcmVwZWF0c1xuICogIGF0IGEgcmVhbCBzaXplIG9uIGV2ZXJ5IGZhY2UuIGBzY2FsZWAgaXMgbWV0cmVzIHBlciB0aWxlLiBUaGUgZG9taW5hbnQgbm9ybWFsIGF4aXMgcGlja3MgdGhlXG4gKiAgcGFpciBvZiB3b3JsZCBheGVzIHVzZWQsIHNvIGEgcm9vZiByZWFkcyAoeCwgeikgYW5kIGEgc2lkZSByZWFkcyAoeiwgeSkuICovXG5mdW5jdGlvbiB3b3JsZFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGxldCB1OiBudW1iZXIsIHY6IG51bWJlcjtcbiAgICBpZiAoYXggPj0gYXkgJiYgYXggPj0gYXopIHsgdSA9IHAuZ2V0WihpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIGVsc2UgaWYgKGF5ID49IGF6KSB7IHUgPSBwLmdldFgoaSk7IHYgPSBwLmdldFooaSk7IH1cbiAgICBlbHNlIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WShpKTsgfVxuICAgIHV2W2kgKiAyXSA9IHUgLyBzY2FsZTsgdXZbaSAqIDIgKyAxXSA9IHYgLyBzY2FsZTtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqXG4gKiBTSURFLVBST0ZJTEUgRVhUUlVTSU9OOiBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgKHRoZSB2ZWhpY2xlJ3Mgc2lkZSBzaWxob3VldHRlLCB3aGVlbFxuICogYXJjaGVzIGluY2x1ZGVkIGFzIG5vdGNoZXMpIHN3ZXB0IGFjcm9zcyB0aGUgZnVsbCB3aWR0aCwgdGhlbiBzaGFwZWQgcGVyIHZlcnRleDpcbiAqXG4gKiAgLSBgdHVtYmxlYCAgbmFycm93cyB0aGUgc2VjdGlvbiBhYm92ZSB0aGUgYmVsdCBsaW5lIC0tIHggaXMgc2NhbGVkIGJ5ICgxIC0gayAqIHQpIHdoZXJlIHQgcnVuc1xuICogICAgICAgICAgICAgIDAgYXQgYGJlbHRgIHRvIDEgYXQgYHJvb2ZgLiBUaGF0IGlzIHRoZSB0dW1ibGVob21lIG9mIGEgcmVhbCBjYXIgYm9keSBhbmQgaXMgd2hhdFxuICogICAgICAgICAgICAgIHN0b3BzIHRoZSBnbGFzc2hvdXNlIHJlYWRpbmcgYXMgYSBib3ggb24gYSBib3guXG4gKiAgLSBgcGxhbmAgICAgcm91bmRzIHRoZSBwbGFuIGF0IHRoZSBub3NlIGFuZCB0YWlsOiBhbiBvcHRpb25hbCBsaXN0IG9mIFt6LCB4U2NhbGVdIHN0YXRpb25zXG4gKiAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkIGFsb25nIHosIHNvIGEgYm9ubmV0IGNhbiB0YXBlciB0byAwLjkgb2YgdGhlIHdpZHRoIGF0IHRoZSBidW1wZXIgbGluZS5cbiAqXG4gKiBFeHRydWRlR2VvbWV0cnkgYnVpbGRzIGluIGl0cyBvd24gKHUsIHYsIGRlcHRoKSBmcmFtZTsgcm90YXRlWSgtUEkvMikgbWFwcyBkZXB0aCB0byAteCBhbmQgdSB0b1xuICogd29ybGQgeiwgYW5kIHRoZSB0cmFuc2xhdGUgcmUtY2VudHJlcyB0aGUgc2xhYiBvbiB4ID0gMC4gQW55IHNoYXBpbmcgaXMgYXBwbGllZCBBRlRFUiB0aGF0LCBhbmRcbiAqIG5vcm1hbHMgYXJlIHJlY29tcHV0ZWQgbGFzdCBzbyB0aGUgc2hhZGVkIGZhY2VzIGZvbGxvdyB0aGUgc2hhcGVkIHN1cmZhY2UuXG4gKi9cbmZ1bmN0aW9uIHNpZGVFeHRydWRlKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHdpZHRoLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VydmVTZWdtZW50czogb3B0cy5jdXJ2ZVNlZ21lbnRzID8/IDYsIHN0ZXBzOiBvcHRzLnN0ZXBzID8/IDEgfSk7XG4gIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApO1xuICBpZiAob3B0cy5lZGdlQmlhcyAmJiAob3B0cy5zdGVwcyA/PyAxKSA+IDEpIHtcbiAgICAvLyBQdWxsIHRoZSB3aWR0aCBjb2x1bW5zIHRvd2FyZCB0aGUgdHdvIGVkZ2VzICh8dHxecCwgcCA8IDEpIHNvIGEgc2hvdWxkZXIgZmlsbGV0IGdldHMgZm91clxuICAgIC8vIHJlYWwgc2VnbWVudHMgaW5zdGVhZCBvZiBvbmUgY2hhbWZlciBhdCB0aGUgb3V0ZXJtb3N0IGNvbHVtbjsgdGhlIGZsYXQgbWlkZGxlIG5lZWRzIG5vbmUuXG4gICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBodyA9IHdpZHRoIC8gMjtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHEuY291bnQ7IGkrKykge1xuICAgICAgY29uc3QgdCA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBxLmdldFgoaSkgLyBodykpO1xuICAgICAgcS5zZXRYKGksIGh3ICogTWF0aC5zaWduKHQpICogTWF0aC5wb3coTWF0aC5hYnModCksIG9wdHMuZWRnZUJpYXMpKTtcbiAgICB9XG4gIH1cbiAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gIGlmIChvcHRzLnNtb290aCkgc21vb3RoTm9ybWFscyhnLCBvcHRzLnNtb290aCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogU2hhcGluZyBvcHRpb25zIHNoYXJlZCBieSBhIGJvZHkgYW5kIGV2ZXJ5dGhpbmcgc3dlcHQgcHJvdWQgb2YgaXQgKGdsYXNzIGJhbmQsIHBpbGxhcnMpLlxuICogIGBzaG91bGRlcmAsIGBub3NlYCBhbmQgYHRhaWxgIGFyZSBST1VORElOR1MgLS0gc2VlIHNoYXBlV2lkdGggLS0gYW5kIG5lZWQgYHN0ZXBzYCA+IDEgc28gdGhlXG4gKiAgc3dlcHQgZmFjZXMgY2FycnkgdmVydGljZXMgYWNyb3NzIHRoZSB3aWR0aCB0byBiZW5kOyBgYmFzZVdpZHRoYCBpcyB0aGUgYm9keSdzIHdpZHRoLCBzbyBhXG4gKiAgYmFuZCBzd2VwdCB3aWRlciB0aGFuIGl0IGlzIHJvdW5kZWQgYWJvdXQgdGhlIFNBTUUgY2VudHJlcyBhdCBhIGxhcmdlciByYWRpdXMgYW5kIHN0YXlzXG4gKiAgZXhhY3RseSBhcyBwcm91ZCBhcyBpdCB3YXMgYXV0aG9yZWQ7IGB0b3BPZmAgaXMgdGhlIGJvZHkncyBvd24gcHJvZmlsZSwgd2hpY2ggaXMgd2hlcmUgdGhlXG4gKiAgcm9vZiBsaW5lIGV2ZXJ5IHNob3VsZGVyIGhhbmdzIG9mZiBpcyByZWFkLiBBbGwgb3B0aW9uYWw6IHVuc2V0LCB0aGUgc3dlZXAgaXMgdGhlIG9sZCBzbGFiLiAqL1xudHlwZSBTaGFwZU9wdHMgPSB7IHR1bWJsZT86IHsgYmVsdDogbnVtYmVyLCByb29mOiBudW1iZXIsIGs6IG51bWJlciB9LCBwbGFuPzogbnVtYmVyW11bXSxcbiAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzPzogbnVtYmVyLCBzdGVwcz86IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICBzaG91bGRlcj86IHsgcjogbnVtYmVyLCB6TWluPzogbnVtYmVyLCB6TWF4PzogbnVtYmVyLCBmYWRlPzogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgbm9zZT86IHsgcjogbnVtYmVyIH0sIHRhaWw/OiB7IHI6IG51bWJlciB9LFxuICAgICAgICAgICAgICAgICAgIHNtb290aD86IG51bWJlciwgZWRnZUJpYXM/OiBudW1iZXIsIGJhc2VXaWR0aD86IG51bWJlciwgdG9wT2Y/OiBudW1iZXJbXVtdIH07XG5cbi8qKiBIaWdoZXN0IHkgb2YgYSBjbG9zZWQgW3osIHldIHByb2ZpbGUgb24gdGhlIHZlcnRpY2FsIGxpbmUgYXQgeiAtLSB0aGUgcm9vZiBsaW5lIGF0IHRoYXRcbiAqICBzdGF0aW9uLiBWZXJ0aWNhbCBlZGdlcyBjb3VudCBieSB0aGVpciBvd24gdG9wOyBhIHogb3V0c2lkZSB0aGUgcHJvZmlsZSByZXR1cm5zIC1JbmZpbml0eS4gKi9cbmZ1bmN0aW9uIHByb2ZpbGVUb3AocHJvZmlsZTogbnVtYmVyW11bXSwgejogbnVtYmVyLCB0b2wgPSAwKTogbnVtYmVyIHtcbiAgbGV0IHRvcCA9IC1JbmZpbml0eTtcbiAgY29uc3QgbiA9IHByb2ZpbGUubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwcm9maWxlW2ldLCBiID0gcHJvZmlsZVsoaSArIDEpICUgbl07XG4gICAgY29uc3QgbG8gPSBNYXRoLm1pbihhWzBdLCBiWzBdKSwgaGkgPSBNYXRoLm1heChhWzBdLCBiWzBdKTtcbiAgICBpZiAoeiA8IGxvIC0gdG9sIC0gMWUtNiB8fCB6ID4gaGkgKyB0b2wgKyAxZS02KSBjb250aW51ZTtcbiAgICAvLyBgdG9sYCBsZXRzIGEgYmFuZCBzdGFuZGluZyBhIGZldyBtbSBwcm91ZCBvZiBhIHZlcnRpY2FsIGZhY2UgKGEgcmVhciBwYW5lLCBhIEMtcGlsbGFyIHN0cmlwXG4gICAgLy8gYmVoaW5kIHRoZSBjYWIgYmFjaykgcmVhZCB0aGUgcm9vZiBsaW5lIG9mIHRoZSBmYWNlIGl0IHN0YW5kcyBvbiwgbm90IHRoZSBiZWQgZmxvb3IgYmVoaW5kIGl0XG4gICAgY29uc3QgemMgPSBNYXRoLm1heChsbywgTWF0aC5taW4oaGksIHopKTtcbiAgICBjb25zdCB5ID0gaGkgLSBsbyA8IDFlLTYgPyBNYXRoLm1heChhWzFdLCBiWzFdKSA6IGFbMV0gKyAoYlsxXSAtIGFbMV0pICogKHpjIC0gYVswXSkgLyAoYlswXSAtIGFbMF0pO1xuICAgIGlmICh5ID4gdG9wKSB0b3AgPSB5O1xuICB9XG4gIHJldHVybiB0b3A7XG59XG5cbi8qKiBUaGUgcGVyLXZlcnRleCB4IHNoYXBpbmcgc2hhcmVkIGJ5IHRoZSBib2R5IGFuZCBpdHMgZ2xhc3MgYmFuZCwgc28gYSBwYW5lIG9mZnNldCA1IG1tIHByb3VkIG9mXG4gKiAgdGhlIGJvZHkgc3RheXMgNSBtbSBwcm91ZCBhZnRlciBib3RoIGFyZSBuYXJyb3dlZCBieSB0aGUgc2FtZSBmdW5jdGlvbi4gKi9cbmZ1bmN0aW9uIHNoYXBlV2lkdGgoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG9wdHM6IFNoYXBlT3B0cywgd2lkdGggPSAwKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgY29uc3QgdHVtYmxlQXQgPSAoeTogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnR1bWJsZSkgcmV0dXJuIDE7XG4gICAgY29uc3QgdCA9IE1hdGgubWluKDEsIE1hdGgubWF4KDAsICh5IC0gb3B0cy50dW1ibGUuYmVsdCkgLyAob3B0cy50dW1ibGUucm9vZiAtIG9wdHMudHVtYmxlLmJlbHQpKSk7XG4gICAgcmV0dXJuIDEgLSBvcHRzLnR1bWJsZS5rICogdDtcbiAgfTtcbiAgY29uc3QgcGxhbkF0ID0gKHo6IG51bWJlcikgPT4ge1xuICAgIGlmICghb3B0cy5wbGFuIHx8IG9wdHMucGxhbi5sZW5ndGggPCAyKSByZXR1cm4gMTtcbiAgICBjb25zdCBzdCA9IG9wdHMucGxhbjtcbiAgICBpZiAoeiA8PSBzdFswXVswXSkgcmV0dXJuIHN0WzBdWzFdO1xuICAgIGlmICh6ID49IHN0W3N0Lmxlbmd0aCAtIDFdWzBdKSByZXR1cm4gc3Rbc3QubGVuZ3RoIC0gMV1bMV07XG4gICAgZm9yIChsZXQgayA9IDA7IGsgPCBzdC5sZW5ndGggLSAxOyBrKyspIHtcbiAgICAgIGlmICh6ID49IHN0W2tdWzBdICYmIHogPD0gc3RbayArIDFdWzBdKSB7XG4gICAgICAgIGNvbnN0IHUgPSAoeiAtIHN0W2tdWzBdKSAvIChzdFtrICsgMV1bMF0gLSBzdFtrXVswXSk7XG4gICAgICAgIHJldHVybiBzdFtrXVsxXSArIChzdFtrICsgMV1bMV0gLSBzdFtrXVsxXSkgKiB1O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gMTtcbiAgfTtcbiAgLy8gUk9VTkRJTkdTLiBBIHN3ZWVwIGlzIGEgc2xhYjogaXRzIHJvb2YgbWVldHMgaXRzIHNpZGUgYXQgYSBoYXJkIGVkZ2UsIGFuZCBpdHMgbm9zZSBtZWV0cyBib3RoXG4gIC8vIHNpZGVzIGF0IHR3byBtb3JlLiBSZWFsIHNoZWV0IG1ldGFsIGNyb3ducyBvdmVyIHRoZSBmZW5kZXIgYW5kIHdyYXBzIHJvdW5kIHRoZSBub3NlLCBzbyBhbnlcbiAgLy8gdmVydGV4IGluc2lkZSBhIGNvcm5lciBxdWFkcmFudCAod2l0aGluIHIgb2YgdGhlIHRvcCBBTkQgd2l0aGluIHIgb2YgdGhlIHNpZGUpIGlzIHByb2plY3RlZFxuICAvLyBvbnRvIHRoZSBjaXJjbGUgb2YgcmFkaXVzIHIgYWJvdXQgdGhhdCBjb3JuZXIncyBjZW50cmUgLS0gYSBmaWxsZXQsIGluIHgveSBmb3IgdGhlIHNob3VsZGVyXG4gIC8vIGFuZCBpbiB4L3ogYXQgdGhlIHR3byBlbmRzLiBUaGUgY2VudHJlcyBhcmUgcGxhY2VkIG9mZiB0aGUgQk9EWSdzIHdpZHRoIChgYmFzZVdpZHRoYCkgYW5kXG4gIC8vIHJvb2YgbGluZSAoYHRvcE9mYCksIHNvIGEgZ2xhc3MgYmFuZCBzd2VwdCBgZWAgd2lkZXIgaXMgZmlsbGV0ZWQgYXQgciArIGUgYWJvdXQgdGhlIHNhbWVcbiAgLy8gY2VudHJlIGFuZCBzdGF5cyBgZWAgcHJvdWQgYWxsIHRoZSB3YXkgcm91bmQgdGhlIGNvcm5lci5cbiAgY29uc3QgZXh0cmEgPSBvcHRzLmJhc2VXaWR0aCA/ICh3aWR0aCAtIG9wdHMuYmFzZVdpZHRoKSAvIDIgOiAwO1xuICBjb25zdCBiYXNlSGFsZiA9IChvcHRzLmJhc2VXaWR0aCA/PyB3aWR0aCkgLyAyO1xuICBjb25zdCB0b3AgPSBvcHRzLnRvcE9mID8/IG51bGw7XG4gIGxldCB6TWF4ID0gLUluZmluaXR5LCB6TWluID0gSW5maW5pdHk7XG4gIGlmICh0b3ApIGZvciAoY29uc3QgcSBvZiB0b3ApIHsgaWYgKHFbMF0gPiB6TWF4KSB6TWF4ID0gcVswXTsgaWYgKHFbMF0gPCB6TWluKSB6TWluID0gcVswXTsgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGxldCB4ID0gcC5nZXRYKGkpLCB5ID0gcC5nZXRZKGkpLCB6ID0gcC5nZXRaKGkpO1xuICAgIGNvbnN0IHRmID0gdHVtYmxlQXQoeSksIHBmID0gcGxhbkF0KHopO1xuICAgIHggKj0gdGYgKiBwZjtcbiAgICBpZiAob3B0cy5zaG91bGRlciAmJiB0b3ApIHtcbiAgICAgIGNvbnN0IHNoID0gb3B0cy5zaG91bGRlcjtcbiAgICAgIC8vIFRoZSBmaWxsZXQgbGl2ZXMgb24gYSB6LXJhbmdlOiBoYXJkIGF0IHpNaW4gKHRoZSBjYWIgYmFjayksIGZhZGVkIG92ZXIgYGZhZGVgIG1ldHJlcyBhdFxuICAgICAgLy8gek1heCAodGhlIHRvcCBvZiB0aGUgd2luZHNjcmVlbiByYWtlIC0tIGEgcmFrZSBpcyBhIHBsYW5lLCBpdHMgZWRnZSBhIGNyZWFzZSwgYW5kIGEgZmFkZVxuICAgICAgLy8ga2V5ZWQgb24gdGhlIHJvb2YgbGluZSdzIFNMT1BFIHZhcmllZCBpbnNpZGUgdGhlIHJlYXIgY29ybmVyIGFuZCBmb2xkZWQgaXQpLlxuICAgICAgY29uc3QgekxvID0gc2guek1pbiA/PyAtSW5maW5pdHksIHpIaSA9IHNoLnpNYXggPz8gSW5maW5pdHksIGZkID0gc2guZmFkZSA/PyAwO1xuICAgICAgY29uc3QgdyA9IHogPCB6TG8gfHwgeiA+IHpIaSA/IDAgOiBmZCA+IDAgPyBNYXRoLm1pbigxLCAoekhpIC0geikgLyBmZCkgOiAxO1xuICAgICAgY29uc3QgeXQgPSBwcm9maWxlVG9wKHRvcCwgeiwgMC4wMyk7XG4gICAgICBpZiAodyA+IDAgJiYgaXNGaW5pdGUoeXQpKSB7XG4gICAgICAgIGNvbnN0IHIgPSBzaC5yICsgZXh0cmEsIGN5ID0geXQgLSBzaC5yO1xuICAgICAgICBjb25zdCBodyA9IGJhc2VIYWxmICogdHVtYmxlQXQoY3kpICogcGYsIGN4ID0gaHcgLSBzaC5yO1xuICAgICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpO1xuICAgICAgICBpZiAoeSA+IGN5ICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgICBjb25zdCBkeCA9IGF4IC0gY3gsIGR5ID0geSAtIGN5LCBkID0gTWF0aC5oeXBvdChkeCwgZHkpIHx8IDE7XG4gICAgICAgICAgbGV0IG54ID0gYXgsIG55ID0geSwgaGl0ID0gZmFsc2U7XG4gICAgICAgICAgaWYgKGR4ID49IHIgLSAxZS00KSB7XG4gICAgICAgICAgICAvLyB0aGUgRURHRSBjb2x1bW4sIHNoYXJlZCB3aXRoIHRoZSBzaWRlOiB0aGUgYXJjJ3MgZm9vdCwgdGFuZ2VudCB0byB0aGUgc2lkZSBhdCBjeVxuICAgICAgICAgICAgbnggPSBjeCArIHI7IG55ID0gY3k7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfSBlbHNlIGlmIChkeSA+PSBzaC5yIC0gMWUtNCAmJiBkeCA8PSByICsgMWUtNikge1xuICAgICAgICAgICAgLy8gYSB0b3Atcm93IHZlcnRleDogaXRzIGNvbHVtbiBwb3NpdGlvbiBwaWNrcyBpdHMgYW5nbGUgb24gdGhlIGFyY1xuICAgICAgICAgICAgY29uc3QgdGggPSBNYXRoLlBJIC8gMiAqICgxIC0gZHggLyByKTtcbiAgICAgICAgICAgIG54ID0gY3ggKyBNYXRoLmNvcyh0aCkgKiByOyBueSA9IGN5ICsgTWF0aC5zaW4odGgpICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR4IDw9IHIgKyAxZS02ICYmIGR5IDw9IHIgKyAxZS02ICYmIGQgPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIGEgcHJvdWQgYmFuZCdzIG91dGVyIHZlcnRleCBiZWxvdyB0aGUgdG9wOiBvbnRvIGl0cyBvd24gY2lyY2xlOyBpbnNpZGUgaXQsIGxlYXZlXG4gICAgICAgICAgICBueCA9IGN4ICsgZHggLyBkICogcjsgbnkgPSBjeSArIGR5IC8gZCAqIHI7IGhpdCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoaXQpIHsgeCA9IE1hdGguc2lnbih4IHx8IDEpICogKGF4ICsgKG54IC0gYXgpICogdyk7IHkgPSB5ICsgKG55IC0geSkgKiB3OyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yIChjb25zdCBlbmQgb2YgW29wdHMubm9zZSA/IHsgcjogb3B0cy5ub3NlLnIsIHpjOiB6TWF4IC0gb3B0cy5ub3NlLnIsIHM6IDEgfSA6IG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgIG9wdHMudGFpbCA/IHsgcjogb3B0cy50YWlsLnIsIHpjOiB6TWluICsgb3B0cy50YWlsLnIsIHM6IC0xIH0gOiBudWxsXSkge1xuICAgICAgaWYgKCFlbmQgfHwgIXRvcCkgY29udGludWU7XG4gICAgICBjb25zdCByID0gZW5kLnIgKyBleHRyYTtcbiAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdCh5KSAqIHBsYW5BdChlbmQuemMpLCBjeCA9IGh3IC0gZW5kLnI7XG4gICAgICBjb25zdCBheCA9IE1hdGguYWJzKHgpLCBkeiA9ICh6IC0gZW5kLnpjKSAqIGVuZC5zO1xuICAgICAgaWYgKGR6ID4gMCAmJiBheCA+IGN4ICYmIHIgPiAxZS02KSB7XG4gICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZCA9IE1hdGguaHlwb3QoZHgsIGR6KSB8fCAxO1xuICAgICAgICAvLyBPbmx5IGEgdmVydGV4IE9VVFNJREUgdGhlIGNpcmNsZSBpcyBwcm9qZWN0ZWQgb250byBpdCAodGhlIHNob3VsZGVyJ3MgcnVsZSk6IGEgc2lkZVxuICAgICAgICAvLyBzdHJpcCdzIGlubmVyIGZhY2UgbGllcyBpbnNpZGUsIGFuZCBwcm9qZWN0aW5nIGl0IHRvbyBsYW5kcyBpdCBvbiB0aGUgb3V0ZXIgZmFjZSxcbiAgICAgICAgLy8gd2hpY2ggei1maWdodHMgLS0gdGhlIENvbW11dGVyIHZhbidzIHdyYXBwZWQgQS1waWxsYXJzIGNydW1wbGVkIGZyb20gZXhhY3RseSB0aGF0LlxuICAgICAgICBpZiAoZCA+PSByIC0gMWUtNCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoY3ggKyBkeCAvIGQgKiByKTsgeiA9IGVuZC56YyArIGVuZC5zICogKGR6IC8gZCAqIHIpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIHAuc2V0WFlaKGksIHgsIHksIHopO1xuICB9XG4gIHAubmVlZHNVcGRhdGUgPSB0cnVlO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG59XG5cbi8qKiBBbmdsZS1saW1pdGVkIFNNT09USCBOT1JNQUxTIG9uIGEgbm9uLWluZGV4ZWQgZ2VvbWV0cnkuIEV2ZXJ5IHZlcnRleCBzaGFyaW5nIGEgcG9zaXRpb25cbiAqICBhdmVyYWdlcyB0aGUgZmFjZSBub3JtYWxzIG9mIGl0cyBuZWlnaGJvdXJzIHRoYXQgbGllIHdpdGhpbiBgbWF4RGVnYCBvZiBpdHMgb3duIGZhY2UsIHNvIGFcbiAqICBmaWxsZXRlZCBzaG91bGRlciwgYSBwbGFuLXJvdW5kZWQgbm9zZSBhbmQgdGhlIHR1bWJsZWhvbWUga2luayBhdCB0aGUgYmVsdCBzaGFkZSBhcyBvbmVcbiAqICBjb250aW51b3VzIHN1cmZhY2UsIHdoaWxlIGEgOTAtZGVncmVlIGVkZ2UgLS0gdGhlIGFyY2ggY3V0LCB0aGUgbm9zZSBhZ2FpbnN0IHRoZSBidW1wZXIgLS1cbiAqICBzdGF5cyBhIGNyZWFzZS4gV2l0aG91dCB0aGlzIGV2ZXJ5IHF1YWQgdGhlIHJvdW5kaW5ncyBiZW5kIHNwbGl0cyBpbnRvIHR3byBkaWZmZXJlbnRseSBsaXRcbiAqICB0cmlhbmdsZXMsIHdoaWNoIGlzIHRoZSBcImJsb2NreVwiIGEgdmlld2VyIHNlZXMgYmVmb3JlIGFueSBzaWxob3VldHRlLiAqL1xuZnVuY3Rpb24gc21vb3RoTm9ybWFscyhnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXhEZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBpZiAoIW5ybSB8fCBnZW8uZ2V0SW5kZXgoKSkgcmV0dXJuIGdlbztcbiAgY29uc3QgbiA9IHAuY291bnQsIGNvc0xpbSA9IE1hdGguY29zKG1heERlZyAqIE1hdGguUEkgLyAxODApO1xuICBjb25zdCBncm91cHMgPSBuZXcgTWFwPHN0cmluZywgbnVtYmVyW10+KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgayA9IGAke01hdGgucm91bmQocC5nZXRYKGkpICogMjAwMCl9LCR7TWF0aC5yb3VuZChwLmdldFkoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WihpKSAqIDIwMDApfWA7XG4gICAgY29uc3QgZyA9IGdyb3Vwcy5nZXQoayk7IGlmIChnKSBnLnB1c2goaSk7IGVsc2UgZ3JvdXBzLnNldChrLCBbaV0pO1xuICB9XG4gIGNvbnN0IGZhY2UgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgZmFjZVtpICogM10gPSBucm0uZ2V0WChpKTsgZmFjZVtpICogMyArIDFdID0gbnJtLmdldFkoaSk7IGZhY2VbaSAqIDMgKyAyXSA9IG5ybS5nZXRaKGkpOyB9XG4gIGNvbnN0IG91dCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGNvbnN0IGcgb2YgZ3JvdXBzLnZhbHVlcygpKSB7XG4gICAgZm9yIChjb25zdCBpIG9mIGcpIHtcbiAgICAgIGxldCBzeCA9IDAsIHN5ID0gMCwgc3ogPSAwO1xuICAgICAgY29uc3QgYXggPSBmYWNlW2kgKiAzXSwgYXkgPSBmYWNlW2kgKiAzICsgMV0sIGF6ID0gZmFjZVtpICogMyArIDJdO1xuICAgICAgZm9yIChjb25zdCBqIG9mIGcpIHtcbiAgICAgICAgY29uc3QgYnggPSBmYWNlW2ogKiAzXSwgYnkgPSBmYWNlW2ogKiAzICsgMV0sIGJ6ID0gZmFjZVtqICogMyArIDJdO1xuICAgICAgICBpZiAoYXggKiBieCArIGF5ICogYnkgKyBheiAqIGJ6ID49IGNvc0xpbSkgeyBzeCArPSBieDsgc3kgKz0gYnk7IHN6ICs9IGJ6OyB9XG4gICAgICB9XG4gICAgICBjb25zdCBsID0gTWF0aC5oeXBvdChzeCwgc3ksIHN6KSB8fCAxO1xuICAgICAgb3V0W2kgKiAzXSA9IHN4IC8gbDsgb3V0W2kgKiAzICsgMV0gPSBzeSAvIGw7IG91dFtpICogMyArIDJdID0gc3ogLyBsO1xuICAgIH1cbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG91dCwgMykpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKiogQSBQSUxMQVIgU1RSSVA6IHRoZSBwaWxsYXIgcG9seWdvbiBzd2VwdCBvbmx5IGBzdHJpcFdgIGRlZXAgYXQgZWFjaCBvdXRlciBlZGdlIG9mIGB3aWR0aGAsXG4gKiAgbWlycm9yZWQsIGFuZCBzaGFwZWQgZXhhY3RseSBhcyB0aGUgYm9keS4gVGhlIG9sZCBmdWxsLXdpZHRoIHN3ZWVwIHB1dCBhIHNsYWIgYWNyb3NzIHRoZVxuICogIHdpbmRzY3JlZW4gd2hlcmV2ZXIgdGhlIEEtcGlsbGFyIHBvbHlnb24gbGF5IG9uIHRoZSByYWtlIC0tIGEgcGlsbGFyIGlzIGF0IHRoZSBzaWRlIG9mIHRoZVxuICogIGdsYXNzLCBub3QgdGhyb3VnaCBpdC4gVGhlIG1pcnJvcmVkIGhhbGYgaGFzIGl0cyB3aW5kaW5nIHJlc3RvcmVkLiAqL1xuZnVuY3Rpb24gc2lkZVN0cmlwKHByb2ZpbGU6IG51bWJlcltdW10sIHdpZHRoOiBudW1iZXIsIHN0cmlwVzogbnVtYmVyLCBvcHRzOiBTaGFwZU9wdHMgPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHByb2ZpbGVbMF1bMF0sIHByb2ZpbGVbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHByb2ZpbGUubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwcm9maWxlW2ldWzBdLCBwcm9maWxlW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogc3RyaXBXLCBiZXZlbEVuYWJsZWQ6IGZhbHNlLCBzdGVwczogMiB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgIC8vIGRlcHRoIG5vdyBydW5zIGFsb25nIC14IGZyb20geCA9IDBcbiAgICBnLnRyYW5zbGF0ZSh3aWR0aCAvIDIsIDAsIDApOyAgICAgICAgICAgIC8vIG91dGVyIGZhY2UgYXQgK3dpZHRoLzIsIGlubmVyIGF0IHdpZHRoLzIgLSBzdHJpcFdcbiAgICBpZiAoc3ggPCAwKSB7XG4gICAgICBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICAgIGNvbnN0IHEgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSArPSAzKSB7XG4gICAgICAgIGNvbnN0IHgxID0gcS5nZXRYKGkgKyAxKSwgeTEgPSBxLmdldFkoaSArIDEpLCB6MSA9IHEuZ2V0WihpICsgMSk7XG4gICAgICAgIHEuc2V0WFlaKGkgKyAxLCBxLmdldFgoaSArIDIpLCBxLmdldFkoaSArIDIpLCBxLmdldFooaSArIDIpKTsgcS5zZXRYWVooaSArIDIsIHgxLCB5MSwgejEpO1xuICAgICAgfVxuICAgIH1cbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gICAgc2hhcGVXaWR0aChnLCBvcHRzLCB3aWR0aCk7XG4gICAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgICByZXR1cm4gZztcbiAgfTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbWsoMSksIG1rKC0xKV0pO1xufVxuXG4vKiogQSBzZW1pY2lyY3VsYXIgd2hlZWwtYXJjaCBub3RjaCBhcyBwcm9maWxlIHBvaW50cywgdG8gYmUgc3BsaWNlZCBpbnRvIGEgc2lkZSBwcm9maWxlIHRoYXQgcnVuc1xuICogIGFsb25nIHRoZSBzaWxsIGZyb20gK3ogdG8gLXogKGkuZS4geiBERUNSRUFTSU5HKS4gYG5gIHNlZ21lbnRzOyB0aGUgYXJjIGlzIHRoZSBUT1AgaGFsZi4gKi9cbmZ1bmN0aW9uIGFyY2hOb3RjaCh6YzogbnVtYmVyLCB5U2lsbDogbnVtYmVyLCByOiBudW1iZXIsIG4gPSA3KTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgLyBuOyAgICAgICAgICAgICAgIC8vIDAgLi4gUEksIGZyb20gK3ogcm91bmQgdGhlIHRvcCB0byAtelxuICAgIHB0cy5wdXNoKFt6YyArIE1hdGguY29zKGEpICogciwgeVNpbGwgKyBNYXRoLnNpbihhKSAqIHJdKTtcbiAgfVxuICByZXR1cm4gcHRzO1xufVxuXG4vKipcbiAqIEEgV0hFRUw6IG9uZSBsYXRoZSBhYm91dCB0aGUgYXhsZS4gVGhlIHByb2ZpbGUgcnVucyBmcm9tIHRoZSBodWIgZmFjZSBvbiBvbmUgc2lkZSBvdmVyIHRoZSByaW1cbiAqIGxpcCwgdGhlIHR5cmUgc2lkZXdhbGwsIHRoZSB0cmVhZCBhbmQgYmFjayBkb3duIHRoZSBmYXIgc2lkZSwgc28gdGhlIHdoZWVsIGlzIGEgY2xvc2VkIHNvbGlkIHdpdGhcbiAqIG5vIG9wZW4gZW5kIGZvciB0aGUgdHVybnRhYmxlIGdhdGUgdG8gcmVhZCB0aHJvdWdoLiBSZXZvbHZlZCBhYm91dCBZIGFuZCB0aGVuIGxhaWQgb24gWCwgc28gdGhlXG4gKiBheGxlIGlzIHRoZSB4IGF4aXMgYW5kIHRoZSB3aGVlbCByb2xscyBhYm91dCBpdCAtLSB3aGljaCBpcyB0aGUgYXhpcyBpdHMgcGl2b3QgZGVjbGFyZXMuXG4gKlxuICogVHdvIHZlcnRleCBjb2xvdXJzOiBgcmltSGV4YCBvbiB0aGUgaHViIGFuZCByaW0gcG9pbnRzLCBgdHlyZUhleGAgb24gdGhlIHNpZGV3YWxsIGFuZCB0cmVhZC4gVGhlXG4gKiBsYXRoZSBvcmRlcnMgdmVydGljZXMgc2VnbWVudC1tYWpvciAoaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpLCB3aGljaCBpcyB3aGF0IGxldHMgYVxuICogcGVyLXByb2ZpbGUtcG9pbnQgY29sb3VyIGJlIHdyaXR0ZW4gd2l0aG91dCBhIHNlY29uZCBnZW9tZXRyeS5cbiAqL1xuZnVuY3Rpb24gd2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIGRpc2ggPSAwLjU1KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXO1xuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuMzAsIC1odyAqIGRpc2hdLCBbclJpbSAqIDAuNjIsIC1odyAqIDAuODBdLCBbclJpbSwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjk4XSxcbiAgICBbclR5cmUgKiAwLjkzLCAtaHddLCBbclR5cmUsIC1odyAqIDAuNzJdLCBbclR5cmUsIGh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTMsIGh3XSxcbiAgICBbclJpbSwgaHcgKiAwLjk4XSwgW3JSaW0sIGh3ICogMC44Nl0sIFtyUmltICogMC42MiwgaHcgKiAwLjgwXSwgW3JSaW0gKiAwLjMwLCBodyAqIGRpc2hdLCBbMCwgaHcgKiBkaXNoXSxcbiAgXTtcbiAgY29uc3QgcmltUG9pbnQgPSAoajogbnVtYmVyKSA9PiBqIDw9IDQgfHwgaiA+PSA5O1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocHRzLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBjb25zdCBuID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gIGNvbnN0IGNvbCA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBjb25zdCBjdCA9IG5ldyBUSFJFRS5Db2xvcih0eXJlSGV4KSwgY3IgPSBuZXcgVEhSRUUuQ29sb3IocmltSGV4KTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBjID0gcmltUG9pbnQoaSAlIHB0cy5sZW5ndGgpID8gY3IgOiBjdDtcbiAgICBjb2xbaSAqIDNdID0gYy5yOyBjb2xbaSAqIDMgKyAxXSA9IGMuZzsgY29sW2kgKiAzICsgMl0gPSBjLmI7XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgLy8gbGF0aGUgYXhpcyBZIC0+IGF4bGUgb24gWFxuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgU1RFRUwgV0hFRUw6IHRoZSBzYW1lIGNsb3NlZCBsYXRoZSBhcyB3aGVlbEdlbywgd2l0aCB0aGUgcHJvZmlsZSBvZiBhIHByZXNzZWQtc3RlZWwgcmltIC0tIGFcbiAqIGZsYXQgb3V0ZXIgZmFjZSwgYSBkaXNoZWQgY2VudHJlIHN0ZXBwaW5nIGluIHBhc3QgYSBkYXJrIFZFTlQgUklORyAodGhlIHJvdyBvZiBvdmFsIGhvbGVzLFxuICogZGVsaXZlcmVkIGFzIGEgYmFuZCBvZiB2ZXJ0ZXggY29sb3VyIHJhdGhlciB0aGFuIGFzIGhvbGVzIGEgdHVybnRhYmxlIGdhdGUgd291bGQgcmVhZCB0aHJvdWdoKSxcbiAqIGEgc21hbGwgaHViIGNhcCBzdGFuZGluZyBwcm91ZCAtLSBhbmQgYSBjaHVua2llciB0eXJlIHdob3NlIHRyZWFkIHJpbmcgYWx0ZXJuYXRlcyBhIGxpZ2h0ZXIgYW5kXG4gKiBhIGRhcmtlciB0b25lIHNlZ21lbnQgYnkgc2VnbWVudCwgc28gdGhlIGx1Z3MgcmVhZCBhdCBwcm9wIGRpc3RhbmNlIGZvciB6ZXJvIGdlb21ldHJ5LiBQZXItcG9pbnRcbiAqIGNvbG91cnMgcmlkZSB0aGUgbGF0aGUncyBzZWdtZW50LW1ham9yIHZlcnRleCBvcmRlciBleGFjdGx5IGFzIGluIHdoZWVsR2VvLlxuICovXG5mdW5jdGlvbiBzdGVlbFdoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgIHR5cmVIZXg6IG51bWJlciwgcmltSGV4OiBudW1iZXIsIHZlbnRIZXg6IG51bWJlciwgbHVnSGV4OiBudW1iZXIsIGRpc2ggPSAwLjUwKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCBkID0gaHcgKiBkaXNoO1xuICAvLyBbcmFkaXVzLCBheGlhbF0gYW5kIGEgY29sb3VyIGNsYXNzIHBlciBwb2ludDogMCByaW0sIDEgdmVudCByaW5nLCAyIHR5cmUgc2lkZXdhbGwsIDMgdHJlYWRcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW1xuICAgIFswLCAtZCArIDAuMDJdLCBbclJpbSAqIDAuMjIsIC1kICsgMC4wMl0sIFtyUmltICogMC4yNCwgLWRdLCAgICAgICAgICAgICAgICAgICAgICAgLy8gaHViIGNhcFxuICAgIFtyUmltICogMC40MCwgLWRdLCBbclJpbSAqIDAuNDIsIC1kIC0gMC4wMDZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkaXNoIGZsb29yXG4gICAgW3JSaW0gKiAwLjYyLCAtZCAtIDAuMDA2XSwgW3JSaW0gKiAwLjY0LCAtaHcgKiAwLjg2XSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZlbnQgcmluZyAoZGFyaylcbiAgICBbclJpbSAqIDAuOTAsIC1odyAqIDAuODZdLCBbclJpbSwgLWh3ICogMC45MF0sIFtyUmltLCAtaHcgKiAwLjk4XSwgICAgICAgICAgICAgICAgICAvLyByaW0gZmFjZSBhbmQgbGlwXG4gICAgW3JUeXJlICogMC44OCwgLWh3XSwgW3JUeXJlICogMC45NywgLWh3ICogMC44Nl0sIFtyVHlyZSwgLWh3ICogMC43MF0sICAgICAgICAgICAgICAgLy8gc2lkZXdhbGxcbiAgICBbclR5cmUsIGh3ICogMC43MF0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHJlYWRcbiAgICBbclR5cmUgKiAwLjk3LCBodyAqIDAuODZdLCBbclR5cmUgKiAwLjg4LCBod10sIFtyUmltLCBodyAqIDAuOThdLCAgICAgICAgICAgICAgICAgICAvLyBmYXIgc2lkZXdhbGxcbiAgICBbclJpbSwgaHcgKiAwLjg4XSwgW3JSaW0gKiAwLjMwLCBodyAqIDAuODBdLCBbMCwgaHcgKiAwLjgwXSwgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJhY2sgb2YgdGhlIHJpbVxuICBdO1xuICBjb25zdCBjbHMgPSBbMCwgMCwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCwgMiwgMiwgMywgMywgMiwgMiwgMCwgMCwgMCwgMF07XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IEMgPSBbbmV3IFRIUkVFLkNvbG9yKHJpbUhleCksIG5ldyBUSFJFRS5Db2xvcih2ZW50SGV4KSwgbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBuZXcgVEhSRUUuQ29sb3IobHVnSGV4KV07XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGogPSBpICUgcHRzLmxlbmd0aCwgcyA9IE1hdGguZmxvb3IoaSAvIHB0cy5sZW5ndGgpO1xuICAgIGxldCBjID0gQ1tjbHNbal1dO1xuICAgIGlmIChjbHNbal0gPT09IDMpIGMgPSAocyAlIDIgPT09IDApID8gY3QgOiBDWzNdO1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogV2lyZS1zcG9rZWQgd2hlZWwgZHJlc3Npbmc6IGBuYCB0aGluIGJveGVzIHJhZGlhdGluZyBmcm9tIHRoZSBodWIsIGxhY2VkIGFsdGVybmF0ZWx5IHRvIGVhY2hcbiAqICBzaWRlIG9mIHRoZSByaW0gc28gdGhleSBjcm9zcyB0aGUgd2F5IHJlYWwgc3Bva2VzIGRvLiBNZXJnZWQgaW50byB0aGUgd2hlZWwgZ2VvbWV0cnkgc28gdGhlXG4gKiAgd2hlZWwgc3RheXMgT05FIGluc3RhbmNlZCBnZW9tZXRyeS4gKi9cbmZ1bmN0aW9uIHNwb2tlcyhySHViOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgbjogbnVtYmVyLCBoZXg6IG51bWJlciwgdCA9IDAuMDA2LCBwcmlzbSA9IGZhbHNlKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzZWdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IGkgKiBNYXRoLlBJICogMiAvIG47XG4gICAgY29uc3Qgc2lkZSA9IChpICUgMiA9PT0gMCA/IDEgOiAtMSkgKiBoYWxmVyAqIDAuMzU7XG4gICAgY29uc3QgbGVuID0gclJpbSAtIHJIdWI7XG4gICAgLy8gYHByaXNtYDogYW4gb3BlbiB0aHJlZS1zaWRlZCBwcmlzbSBhdCBzaXggdHJpYW5nbGVzIHdoZXJlIHRoZSBib3ggY29zdHMgdHdlbHZlIC0tIGEgd2lyZVxuICAgIC8vIHNwb2tlIGhhcyBubyByZXNvbHZhYmxlIHNlY3Rpb24gYXQgcHJvcCBkaXN0YW5jZSwgYW5kIHNpeHR5IG9mIHRoZW0gb24gdGhyZWUgd2hlZWxzIGlzIHRoZVxuICAgIC8vIGRpZmZlcmVuY2UgYmV0d2VlbiBhIGxhcmdlIHByb3AgaW5zaWRlIGl0cyB0cmlhbmdsZSBjZWlsaW5nIGFuZCBvbmUgb3ZlciBpdFxuICAgIGNvbnN0IGcgPSBwcmlzbSA/IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHQgKiAwLjYyLCB0ICogMC42MiwgbGVuLCAzLCAxLCB0cnVlKSA6IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh0LCBsZW4sIHQpO1xuICAgIGcudHJhbnNsYXRlKDAsIHJIdWIgKyBsZW4gLyAyLCAwKTtcbiAgICBnLnJvdGF0ZVgoTWF0aC5hdGFuMihzaWRlLCBsZW4pICogMC42KTtcbiAgICBnLnJvdGF0ZVgoMCk7IGcudHJhbnNsYXRlKDAsIDAsIHNpZGUgKiAwLjUpO1xuICAgIGcucm90YXRlWChhKTsgICAgICAgICAgICAvLyByYWRpYXRlIGFyb3VuZCB0aGUgYXhsZSAoeClcbiAgICBzZWdzLnB1c2goZyk7XG4gIH1cbiAgcmV0dXJuIHRpbnRHZW8obWVyZ2VHZW9zKHNlZ3MpLCBoZXgpO1xufVxuXG4vKiogQSBwb2x5bGluZSBUVUJFOiBvbmUgY3lsaW5kZXIgcGVyIHNlZ21lbnQsIGVhY2ggcm90YXRlZCBvbnRvIGl0cyBjaG9yZCwgd2l0aCBhIHNtYWxsIHNwaGVyZS1sZXNzXG4gKiAgb3ZlcmxhcCBzbyB0aGUgam9pbnRzIGNsb3NlLiBIYW5kbGViYXJzLCBjYW5vcHkgcmFpbHMsIHJvbGwgY2FnZXMgYW5kIGZyYW1lIHR1YmVzLiAqL1xuZnVuY3Rpb24gdHViZShwdHM6IG51bWJlcltdW10sIHI6IG51bWJlciwgc2VnID0gOCwgaGV4PzogbnVtYmVyLCBvcGVuID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGNvbnN0IGEgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaV1bMF0sIHB0c1tpXVsxXSwgcHRzW2ldWzJdKTtcbiAgICBjb25zdCBiID0gbmV3IFRIUkVFLlZlY3RvcjMocHRzW2kgKyAxXVswXSwgcHRzW2kgKyAxXVsxXSwgcHRzW2kgKyAxXVsyXSk7XG4gICAgY29uc3QgZCA9IGIuY2xvbmUoKS5zdWIoYSk7IGNvbnN0IGxlbiA9IGQubGVuZ3RoKCk7XG4gICAgaWYgKGxlbiA8IDFlLTYpIGNvbnRpbnVlO1xuICAgIC8vIGBvcGVuYDogbm8gZW5kIGRpc2NzIC0tIGZvciBhIHJ1biB3aG9zZSBldmVyeSBlbmQgaXMgYnVyaWVkIGluIGEgam9pbnQsIGEgcmluZyBvciBhIGh1YiwgdGhlXG4gICAgLy8gdHdvIGNhcHMgYXJlIGhhbGYgdGhlIHNlZ21lbnQncyB0cmlhbmdsZXMgc3BlbnQgb24gZmFjZXMgbm90aGluZyBjYW4gc2VlXG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KHIsIHIsIGxlbiArIHIgKiAxLjIsIHNlZywgMSwgb3Blbik7XG4gICAgY29uc3QgcSA9IG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbVVuaXRWZWN0b3JzKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBkLm5vcm1hbGl6ZSgpKTtcbiAgICBnLmFwcGx5UXVhdGVybmlvbihxKTtcbiAgICBjb25zdCBtID0gYS5jbG9uZSgpLmFkZChiKS5tdWx0aXBseVNjYWxhcigwLjUpO1xuICAgIGcudHJhbnNsYXRlKG0ueCwgbS55LCBtLnopO1xuICAgIHBhcnRzLnB1c2goZyk7XG4gIH1cbiAgY29uc3Qgb3V0ID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgcmV0dXJuIGhleCA9PT0gdW5kZWZpbmVkID8gb3V0IDogdGludEdlbyhvdXQsIGhleCk7XG59XG5cbi8qKiBBIHJvdGF0ZWQgYm94OiBbY3gsIGN5LCBjeiwgdywgaCwgZCwgcngsIHJ5LCByel0gd2l0aCB0aGUgcm90YXRpb25zIGFwcGxpZWQgaW4geCwgeSwgeiBvcmRlclxuICogIGFib3V0IHRoZSBib3gncyBvd24gY2VudHJlLiBBIGJvbm5ldCBsaXAsIGEgcmFrZWQgbWlycm9yIHN0ZW0sIGEgY2Fub3B5IHN0YXkuICovXG5mdW5jdGlvbiByYm94KGI6IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KGJbM10sIGJbNF0sIGJbNV0pO1xuICBpZiAoYls2XSkgZy5yb3RhdGVYKGJbNl0pOyBpZiAoYls3XSkgZy5yb3RhdGVZKGJbN10pOyBpZiAoYls4XSkgZy5yb3RhdGVaKGJbOF0pO1xuICBnLnRyYW5zbGF0ZShiWzBdLCBiWzFdLCBiWzJdKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBBIGJhdGNoIG9mIGJveGVzLCBlYWNoIHRpbnRlZCwgbWVyZ2VkOiBbW2hleCwgY3gsIGN5LCBjeiwgdywgaCwgZCwgcng/LCByeT8sIHJ6P10sIC4uLl0uIFRoZVxuICogIHRyaW0gY29tcG9uZW50IG9mIGV2ZXJ5IHZlaGljbGUgaXMgb25lIG9mIHRoZXNlIC0tIGJ1bXBlcnMsIGdyaWxsZSwgbGFtcHMsIG1pcnJvcnMsIGhhbmRsZXMsXG4gKiAgc3RlcHMsIGFyY2ggZmxhcmVzIC0tIHNvIGZvcnR5IHBhcnRzIHJpZGUgb25lIHN1Ym1pc3Npb24uICovXG5mdW5jdGlvbiB0aW50ZWRCb3hlcyhsaXN0OiBudW1iZXJbXVtdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiB0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKSk7XG59XG5cbi8qKiBNaXJyb3IgYSBib3ggbGlzdCBhY3Jvc3MgeCA9IDAgKGxlZnQvcmlnaHQgcGFpcnMpLiBSb3RhdGlvbnMgYWJvdXQgeSBhbmQgeiBmbGlwIHNpZ24uICovXG5mdW5jdGlvbiBtaXJyb3JYKGxpc3Q6IG51bWJlcltdW10pOiBudW1iZXJbXVtdIHtcbiAgcmV0dXJuIGxpc3QuZmxhdE1hcCgoYikgPT4gW2IsIFtiWzBdLCAtYlsxXSwgYlsyXSwgYlszXSwgYls0XSwgYls1XSwgYls2XSwgYls3XSA/PyAwLCAtKGJbOF0gPz8gMCksIC0oYls5XSA/PyAwKV1dKTtcbn1cblxuLyoqIEEgc2VhbWxlc3MgQ2FudmFzIDJEIHRpbGU6IGBkcmF3KGN0eCwgc2l6ZSlgIHBhaW50cyBpdCwgYW5kIHRoZSByZXN1bHQgaXMgYSByZXBlYXRpbmcgdGV4dHVyZVxuICogIGluIHNSR0IuIFVzZWQgQUZURVIgbWF0ZXJpYWwgY29uc3RydWN0aW9uLCBzbyB0aGUgdGV4dHVyZWxlc3MgZGVjbGFyYXRpb24gc3RhbmRzIGFuZCBub1xuICogIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQuIFJldHVybnMgbnVsbCB3aGVyZSB0aGVyZSBpcyBubyBET00gKHRoZSBoZWFkbGVzcyBoYXJuZXNzXG4gKiAgaGFzIG9uZTsgYSBub2RlLXNpZGUgcHJvYmUgZG9lcyBub3QpLCBhbmQgZXZlcnkgY2FsbGVyIHRvbGVyYXRlcyBudWxsLiAqL1xuZnVuY3Rpb24gY2FudmFzVGlsZShzaXplOiBudW1iZXIsIGRyYXc6IChjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCwgczogbnVtYmVyKSA9PiB2b2lkKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSAndW5kZWZpbmVkJykgcmV0dXJuIG51bGw7XG4gIGNvbnN0IGN2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7IGN2LndpZHRoID0gc2l6ZTsgY3YuaGVpZ2h0ID0gc2l6ZTtcbiAgY29uc3QgY3R4ID0gY3YuZ2V0Q29udGV4dCgnMmQnKTsgaWYgKCFjdHgpIHJldHVybiBudWxsO1xuICBkcmF3KGN0eCwgc2l6ZSk7XG4gIGNvbnN0IHRleCA9IG5ldyBUSFJFRS5DYW52YXNUZXh0dXJlKGN2KTtcbiAgdGV4LndyYXBTID0gdGV4LndyYXBUID0gVEhSRUUuUmVwZWF0V3JhcHBpbmc7XG4gIHRleC5jb2xvclNwYWNlID0gVEhSRUUuU1JHQkNvbG9yU3BhY2U7XG4gIHRleC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIHJldHVybiB0ZXg7XG59XG5cbi8qKiBEZXRlcm1pbmlzdGljIHBzZXVkby1yYW5kb20gZm9yIGNhbnZhcyBkcmVzc2luZyAtLSBhc3NpZ25lZCBieSBpbmRleCwgbmV2ZXIgTWF0aC5yYW5kb20sIHNvIHRoZVxuICogIG1vZGVsIGlzIGJ5dGUtaWRlbnRpY2FsIG9uIGV2ZXJ5IGJ1aWxkLiAqL1xuZnVuY3Rpb24gbGNnKHNlZWQ6IG51bWJlcik6ICgpID0+IG51bWJlciB7XG4gIGxldCBzID0gc2VlZCA+Pj4gMDtcbiAgcmV0dXJuICgpID0+IHsgcyA9IChzICogMTY2NDUyNSArIDEwMTM5MDQyMjMpID4+PiAwOyByZXR1cm4gcyAvIDQyOTQ5NjcyOTY7IH07XG59XG5cbi8qKlxuICogTVVEIC8gUk9BRC1HUklNRSB0aWxlLCBSRS1CQVNFRC4gVGhhaSByb2FkIG11ZCBpcyB0YW4gYW5kIEJSSUdIVEVSIHRoYW4gbW9zdCBwYWludCwgYW5kIGFcbiAqIG11bHRpcGxpZXIgY2Fubm90IGJyaWdodGVuOiBzbyB0aGUgcGFpbnQgbWF0ZXJpYWwgY2FycmllcyB0aGUgTVVEIEVOVkVMT1BFIGNvbG91ciAobWVhc3VyZWQgb25cbiAqIHRoZSBtdWRkeSBzaWxsKSwgdGhpcyB0aWxlIGNhcnJpZXMgdGhlIGNsZWFuIHBhaW50IGFzIGEgUkFUSU8gb2YgdGhhdCBlbnZlbG9wZSBvdmVyIG1vc3Qgb2YgaXRzXG4gKiBhcmVhIChgYmFzZWApLCBhbmQgdGhlIG11ZCBpcyBwYWludGVkIGFzIHdoaXRlIC0tIGkuZS4gdGhlIGVudmVsb3BlIGl0c2VsZiAtLSBpbiBhIHdhc2ggcmlzaW5nXG4gKiBmcm9tIHRoZSBib3R0b20gdG8gYGNvdmVyYWdlYCBvZiB0aGUgdGlsZSBoZWlnaHQgcGx1cyBzcGxhdHRlciBhYm92ZSBpdC4gQm91bmQgd2l0aCBoZWlnaHQgVVZzXG4gKiBzbyB2ID0gMCBpcyB0aGUgZ3JvdW5kIGFuZCB0aGUgd2FzaCBzaXRzIG9uIHRoZSBzaWxscyBhbmQgYXJjaGVzLlxuICovXG5mdW5jdGlvbiBtdWRUaWxlKHNpemU6IG51bWJlciwgYmFzZTogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMzLFxuICAgICAgICAgICAgICAgICBvcHRzOiB7IGZsb29yPzogbnVtYmVyLCBzdHJlYWtzPzogbnVtYmVyLCBjbG91ZD86IG51bWJlciwgc3BlY2tsZT86IG51bWJlciwgdG9uZT86IG51bWJlcltdLCB6b25lcz86IG51bWJlcltdW10gfSA9IHt9KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IHRvSGV4ID0gKHY6IG51bWJlcltdKSA9PiAnIycgKyB2Lm1hcCgoYykgPT4gTWF0aC5yb3VuZChNYXRoLm1pbigxLCBNYXRoLm1heCgwLCBjKSkgKiAyNTUpLnRvU3RyaW5nKDE2KS5wYWRTdGFydCgyLCAnMCcpKS5qb2luKCcnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gdG9IZXgoYmFzZSk7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyBgZmxvb3JgIGlzIHRoZSBmcmFjdGlvbiBvZiB0aGUgdGlsZSBoZWlnaHQgKGkuZS4gb2YgdGhlIHdvcmxkIGhlaWdodCB0aGUgdGlsZSBzcGFucykgYmVsb3dcbiAgICAvLyB3aGljaCB0aGUgd2FzaCBpcyBGVUxMOiBhIGJvZHkgd2hvc2Ugc2lsbCBpcyAwLjQ2IG0gdXAgYSAyIG0gdGlsZSB3YW50cyB0aGUgbXVkIHNvbGlkIHRvXG4gICAgLy8gMC4yMyBhbmQgZmFkaW5nIGZyb20gdGhlcmUsIG5vdCBmYWRpbmcgZnJvbSB0aGUgZ3JvdW5kIGl0IG5ldmVyIHJlYWNoZXMuXG4gICAgY29uc3QgZmwgPSBNYXRoLm1pbihjb3ZlcmFnZSwgb3B0cy5mbG9vciA/PyAwKTtcbiAgICAvLyBgdG9uZWAgaXMgdGhlIE1VRCBhcyBhIHJhdGlvIG9mIHRoZSBlbnZlbG9wZSwgZm9yIGEgcGFpbnQgd2hvc2UgZW52ZWxvcGUgaXMgdGhlIHBlci1jaGFubmVsXG4gICAgLy8gbWF4IG9mIGNsZWFuIHBhaW50IGFuZCBtdWQgKGEgZ3JlZW4gd2hvc2UgbXVkIGlzIHRhbiBpcyBicmlnaHRlciBpbiByZWQsIGRhcmtlciBpbiBncmVlbik6XG4gICAgLy8gdW5zZXQsIHRoZSBtdWQgaXMgd2hpdGUgLS0gdGhlIGVudmVsb3BlIGl0c2VsZi5cbiAgICBjb25zdCBUID0gb3B0cy50b25lID8gb3B0cy50b25lLm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCBNYXRoLm1heCgwLCB2KSkpKSA6IG51bGw7XG4gICAgY29uc3QgbXVkID0gKGE6IG51bWJlcikgPT4gVCA/IGByZ2JhKCR7VFswXX0sJHtUWzFdfSwke1RbMl19LCR7YX0pYCA6IGByZ2JhKDI1NSwyNTIsMjQ0LCR7YX0pYDtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMgKiAoMSAtIGZsKSwgMCwgcyAqICgxIC0gY292ZXJhZ2UpKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBUID8gbXVkKDAuODgpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC44OCknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCBUID8gbXVkKDAuNDUpIDogJ3JnYmEoMjU1LDI1NSwyNTUsMC40NSknKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGB6b25lc2AgYXJlIFt1MCwgdTEsIHdlaWdodF0gc3BhbnMgb2YgdGhlIHRpbGUncyB3aWR0aCB0aGUgc3ByYXkgY29uY2VudHJhdGVzIGluIC0tIHdpdGhcbiAgICAvLyB0aGUgdGlsZSBmaXR0ZWQgdG8gdGhlIHZlaGljbGUncyBsZW5ndGggKGhlaWdodFVWIHVTY2FsZSA9IEwpLCB0aGF0IGlzIFwiYmVoaW5kIHRoZSBmcm9udFxuICAgIC8vIHdoZWVsXCIsIFwiYWhlYWQgb2YgdGhlIHJlYXIgYXJjaFwiLCBcImFsb25nIHRoZSBiZWQgc2lkZVwiOiB3aGVyZSBhIHdoZWVsIGFjdHVhbGx5IHRocm93cyBtdWQuXG4gICAgY29uc3Qgem9uZXMgPSBvcHRzLnpvbmVzID8/IFtbMCwgMSwgMV1dO1xuICAgIGNvbnN0IHpzdW0gPSB6b25lcy5yZWR1Y2UoKGFjYywgem4pID0+IGFjYyArIHpuWzJdLCAwKTtcbiAgICBjb25zdCBwaWNrVSA9ICgpID0+IHsgbGV0IHQgPSBybmQoKSAqIHpzdW07IGZvciAoY29uc3Qgem4gb2Ygem9uZXMpIHsgaWYgKHQgPCB6blsyXSkgcmV0dXJuICh6blswXSArIHJuZCgpICogKHpuWzFdIC0gem5bMF0pKSAqIHM7IHQgLT0gem5bMl07IH0gcmV0dXJuIHJuZCgpICogczsgfTtcbiAgICAvLyBEVVNUIEZJTE06IHNvZnQgY2xvdWR5IHBhdGNoZXMgb2YgdGhlIGVudmVsb3BlIG92ZXIgdGhlIGNsZWFuIHBhaW50IGV2ZXJ5d2hlcmUsIHNvIHRoZVxuICAgIC8vIHVwcGVyIGJvZHkgaXMgbm90IGEgZmxhdCBmaWxsIC0tIHRoZSBwbGF0ZSdzIGdyZWVuIGlzIGEgZHVsbCwgZHVzdHkgZ3JlZW4uXG4gICAgaWYgKG9wdHMuY2xvdWQpIGZvciAobGV0IGkgPSAwOyBpIDwgNDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IHMgKiAoMC4wOCArIHJuZCgpICogMC4xOCksIGEgPSBvcHRzLmNsb3VkICogKDAuNCArIHJuZCgpICogMC42KTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIG11ZChhKSk7IGcyLmFkZENvbG9yU3RvcCgxLCBtdWQoMCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gU1BSQVk6IHRoZSBtdWQgYSB3aGVlbCB0aHJvd3MgaXMgYSBmaWVsZCBvZiBzbWFsbCBzcGxhdHMgc3RyZWFrZWQgYWxvbmcgdGhlIGRpcmVjdGlvbiBvZlxuICAgIC8vIHRyYXZlbCAodSksIGRlbnNlc3QganVzdCBhYm92ZSB0aGUgd2FzaCBhbmQgdGhpbm5pbmcgdXB3YXJkIGluIGNsdXN0ZXJzIC0tIG5vdCBhIGdyYWRpZW50LlxuICAgIGlmIChvcHRzLnN0cmVha3MpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IGN4MCA9IHBpY2tVKCksIGJhbmQgPSBjb3ZlcmFnZTtcbiAgICAgIGNvbnN0IGN5MCA9IHMgLSBzICogKGZsICsgTWF0aC5wb3cocm5kKCksIDEuNikgKiAoYmFuZCAtIGZsKSk7XG4gICAgICBjb25zdCBjb3VudCA9IDYgKyBNYXRoLmZsb29yKHJuZCgpICogMTgpLCBzcHJlYWQgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBjb3VudDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHggPSBjeDAgKyAocm5kKCkgLSAwLjUpICogc3ByZWFkICogMywgeSA9IGN5MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQ7XG4gICAgICAgIGNvbnN0IHcgPSAxICsgcm5kKCkgKiBzICogMC4wMDYsIGggPSAwLjggKyBybmQoKSAqIHMgKiAwLjAwMywgYSA9IDAuMzUgKyBybmQoKSAqIDAuNTU7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgdywgaCwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChvcHRzLnNwZWNrbGUpIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0cy5zcGVja2xlOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBwaWNrVSgpLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAxLjMpICogcyAqIGNvdmVyYWdlLCByID0gMC42ICsgcm5kKCkgKiAxLjQsIGEgPSAwLjMgKyBybmQoKSAqIDAuNjtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBtdWQoYSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOTA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHMgLSBNYXRoLnBvdyhybmQoKSwgMi4yKSAqIHMgKiBjb3ZlcmFnZSAqIDEuMzU7XG4gICAgICBjb25zdCByID0gMyArIHJuZCgpICogcyAqIDAuMDU7XG4gICAgICBjb25zdCBhID0gMC4wOCArIHJuZCgpICogMC4yODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoYSkgOiBgcmdiYSgyNTUsMjUwLDI0MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgVCA/IG11ZCgwKSA6ICdyZ2JhKDI1NSwyNTAsMjQwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIC8vIGEgbGl0dGxlIGdyYWluIHNvIHRoZSBjbGVhbiBwYWludCBpcyBub3QgYSBmbGF0IGZpbGxcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEyMDA7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogczsgY29uc3QgdiA9IHJuZCgpIDwgMC41ID8gMCA6IDI1NTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjAzNSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMS41LCAxLjUpO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBEVVNUIHRpbGUgZm9yIHBhaW50IHRoYXQgaXMgQlJJR0hURVIgdGhhbiBpdHMgZGlydCAoYSB3aGl0ZSB2YW4pOiBhIHBsYWluIG11bHRpcGxpZXIsIHdoaXRlXG4gKiAgYmFzZSBhbmQgYSBncmV5LWJyb3duIHdhc2ggcmlzaW5nIGZyb20gdGhlIGdyb3VuZCB0byBgY292ZXJhZ2VgLCBwbHVzIHNvZnQgYmxvYnMuICovXG5mdW5jdGlvbiBkdXN0VGlsZShzaXplOiBudW1iZXIsIGR1c3Q6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIGNvdmVyYWdlID0gMC4zMCk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgY29uc3QgYyA9IGR1c3QubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuOSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDAuNClgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA4MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS40LCByID0gMyArIHJuZCgpICogcyAqIDAuMDUsIGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI1O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIEdMQVNTIHRpbGUgZm9yIGEgdmVoaWNsZSdzIGdsYXppbmcgYmFuZCwgYm91bmQgYXMgYG1hcGAgb24gdGhlIGdsYXNzIG1hdGVyaWFsIEFGVEVSXG4gKiAgY29uc3RydWN0aW9uICh0aGUgbWF0ZXJpYWwgc3RheXMgdGV4dHVyZWxlc3MtZGVjbGFyZWQpLiBUaGUgcGFuZSdzIFVWcyBhcmUgaGVpZ2h0LWtleWVkXG4gKiAgKGBoZWlnaHRVVmApLCBzbyB2IHJ1bnMgc2lsbC10by1yb29mOiB0aGUgdGlsZSBpcyBhIHZlcnRpY2FsIGdyYWRpZW50IGZyb20gdGhlIG1hdGVyaWFsJ3NcbiAqICBvd24gdG9uZSBhdCB0aGUgdG9wICh3aGl0ZSwgaS5lLiB0aGUgc2t5LWxpdCB2YWx1ZSB0aGUgbWF0ZXJpYWwgaXMgcmUtYmFzZWQgdG8pIGRvd24gdG9cbiAqICBgbG93YCBhdCB0aGUgYm90dG9tIC0tIGEgcmVhbCBzY3JlZW4gcmVmbGVjdHMgc2t5IGF0IHRoZSB0b3AgYW5kIHRoZSBkYXJrIGRhc2ggYW5kIHJvYWQgYmVsb3dcbiAqICAtLSBwbHVzIGEgZmV3IHNvZnQgZGlhZ29uYWwgcmVmbGVjdGlvbiBzdHJlYWtzIGFuZCBhIGZhaW50IHRpbnQgYmFuZC4gYGxvd2AgaXMgYSBsaW5lYXItc3BhY2VcbiAqICByYXRpbyAoc2VlIGVtaXQubWpzIGByYXRpb2ApIG9mIHRoZSBtZWFzdXJlZCBzaWRlLWdsYXNzIHRvbmUgb3ZlciB0aGUgc2t5LWxpdCB0b25lLiAqL1xuZnVuY3Rpb24gZ2xhc3NUaWxlKHNpemU6IG51bWJlciwgbG93OiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBzdHJlYWtzID0gNSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBjID0gbG93Lm1hcCgodikgPT4gTWF0aC5yb3VuZCgyNTUgKiBNYXRoLm1pbigxLCB2KSkpO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgMCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYigke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSlgKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLjQ1LCBgcmdiKCR7TWF0aC5yb3VuZCgoY1swXSArIDI1NSkgLyAyKX0sJHtNYXRoLnJvdW5kKChjWzFdICsgMjU1KSAvIDIpfSwke01hdGgucm91bmQoKGNbMl0gKyAyNTUpIC8gMil9KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsICcjZmZmZmZmJyk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICAvLyByZWZsZWN0aW9uIHN0cmVha3M6IGxvbmcgc29mdCBkaWFnb25hbCBiYW5kcywgbGlnaHRlciwgdGlsZWQgaW4gdSBzbyB0aGUgc2VhbSBuZXZlciBzaG93c1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyZWFrczsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB3ID0gcyAqICgwLjA0ICsgcm5kKCkgKiAwLjEwKSwgYSA9IDAuMTAgKyBybmQoKSAqIDAuMTYsIHRpbHQgPSBzICogKDAuMjUgKyBybmQoKSAqIDAuMzUpO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7XG4gICAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KHggKyBkeCwgMCwgeCArIGR4ICsgdywgMCk7XG4gICAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpOyBnMi5hZGRDb2xvclN0b3AoMC41LCBgcmdiYSgyNTUsMjU1LDI1NSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LDI1NSwyNTUsMCknKTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCBzKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCBzKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3ICsgdGlsdCwgMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdGlsdCwgMCk7IGN0eC5jbG9zZVBhdGgoKTsgY3R4LmZpbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gYSBkYXJrZXIgZmlsbSBpbiB0aGUgbG93ZXN0IHRlbnRoOiB0aGUgZGFzaCAvIGNvd2wgc2hhZG93IGJlaGluZCB0aGUgcGFuZVxuICAgIGNvbnN0IGczID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAwLjg4KTtcbiAgICBnMy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC41NSlgKTsgZzMuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGczOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gIH0pO1xufVxuXG4vKiogQ09SUlVHQVRFRCBTSEVFVCB0aWxlOiB2ZXJ0aWNhbCByaWRnZXMgYXMgYSBzaW5lLXNoYWRlZCBzdHJpcGUgZmllbGQsIHVzZWQgYXMgbWFwIEFORCBidW1wTWFwIG9uXG4gKiAgYSBzb25ndGhhZXcgcm9vZiBzbyB0aGUgcmlkZ2VzIGNhdGNoIGxpZ2h0LiBgcGl0Y2hgIHJpZGdlcyBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIGNvcnJ1Z2F0aW9uVGlsZShzaXplOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIGxvdzogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCBzOyB4KyspIHtcbiAgICAgIGNvbnN0IHQgPSAoTWF0aC5jb3MoeCAvIHMgKiBNYXRoLlBJICogMiAqIHBpdGNoKSArIDEpIC8gMjsgICAvLyAxIGF0IGNyZXN0LCAwIGluIHRyb3VnaFxuICAgICAgY29uc3QgdiA9IE1hdGgucm91bmQoMjU1ICogKGxvdyArICgxIC0gbG93KSAqIHQpKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCh4LCAwLCAxLCBzKTtcbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdtdWx0aXBseSc7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gNCArIHJuZCgpICogcyAqIDAuMDg7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjE4O1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKDEyMCw5MCw2MCwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMTIwLDkwLDYwLDApJyk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBQTEFOSyB0aWxlOiBib2FyZHMgcnVubmluZyBhbG9uZyB1IHdpdGggZGFyayBqb2ludHMgYW5kIGdyYWluIHN0cmVha3MsIGEgbXVsdGlwbGllciBvbiBhXG4gKiAgbWVhc3VyZWQgdGltYmVyIGFsYmVkby4gYGJvYXJkc2AgcGVyIHRpbGUuICovXG5mdW5jdGlvbiBwbGFua1RpbGUoc2l6ZTogbnVtYmVyLCBib2FyZHM6IG51bWJlciwgc2VlZDogbnVtYmVyKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBiaCA9IHMgLyBib2FyZHM7XG4gICAgZm9yIChsZXQgYiA9IDA7IGIgPCBib2FyZHM7IGIrKykge1xuICAgICAgY29uc3QgdG9uZSA9IDAuODIgKyBybmQoKSAqIDAuMTg7XG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiB0b25lKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHt2fSwke3Z9KWA7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIGJoKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAncmdiYSg0MCwzMCwyMCwwLjU1KSc7IGN0eC5maWxsUmVjdCgwLCBiICogYmgsIHMsIE1hdGgubWF4KDEsIHMgKiAwLjAwNikpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCAxNDsgaysrKSB7XG4gICAgICAgIGNvbnN0IHkgPSBiICogYmggKyBybmQoKSAqIGJoLCBsZW4gPSBzICogKDAuMiArIHJuZCgpICogMC42KSwgeCA9IHJuZCgpICogcztcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYHJnYmEoNjAsNDUsMzAsJHswLjA1ICsgcm5kKCkgKiAwLjEyfSlgOyBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggLSBzLCB5KTsgY3R4LmxpbmVUbyh4IC0gcyArIGxlbiwgeSk7IGN0eC5tb3ZlVG8oeCwgeSk7IGN0eC5saW5lVG8oeCArIGxlbiwgeSk7IGN0eC5zdHJva2UoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogUlVTVCB0aWxlOiBhIG11bHRpcGxpZXIgb2YgYmxvdGNoZWQgb3JhbmdlLWJyb3duIG92ZXIgYSBiYXNlLCBkYXJrIGNvcmVzIGxpZnRlZCBzbyBub3RoaW5nIGxhbmRzXG4gKiAgb24gdGhlIGx1bWEtNTggaG9sZSBnYXRlLiAqL1xuZnVuY3Rpb24gcnVzdFRpbGUoc2l6ZTogbnVtYmVyLCByYXRpbzogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgZGVuc2l0eSA9IDkwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbnNpdHk7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpICogcywgciA9IDMgKyBybmQoKSAqIHMgKiAwLjA5O1xuICAgICAgY29uc3QgYSA9IDAuMTUgKyBybmQoKSAqIDAuNDU7XG4gICAgICBjb25zdCBjID0gcmF0aW8ubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIHYpKTtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGcyO1xuICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSBmb3IgKGNvbnN0IGR5IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHguYXJjKHggKyBkeCwgeSArIGR5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gIH0pO1xufVxuXG4vKiogSGVpZ2h0LWtleWVkIFVWczogdiBpcyB3b3JsZCBIRUlHSFQgb3ZlciBgc2NhbGVgIG1ldHJlcywgdSBydW5zIGFsb25nIHRoZSBkb21pbmFudCBob3Jpem9udGFsXG4gKiAgYXhpcy4gQSBtdWQgdGlsZSBib3VuZCB0aGlzIHdheSBkYXJrZW5zIHRoZSBzaWxscyBhbmQgc3RheXMgY2xlYW4gb24gdGhlIHJvb2YgLS0gYSBwbGFpbiBib3hcbiAqICBwcm9qZWN0aW9uIHdvdWxkIHJlcGVhdCB0aGUgdGlsZSdzIGRpcnR5IGJhbmQgYWNyb3NzIHRoZSByb29mIGFzIHN0cmlwZXMuICovXG5mdW5jdGlvbiBoZWlnaHRVVihnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBzY2FsZTogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgb3B0czogeyB1U2NhbGU/OiBudW1iZXIsIHRvcENsZWFuPzogYm9vbGVhbiB9ID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLCBucm0gPSBnZW8uZ2V0QXR0cmlidXRlKCdub3JtYWwnKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgY29uc3QgdXMgPSBvcHRzLnVTY2FsZSA/PyBzY2FsZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBheCA9IE1hdGguYWJzKG5ybS5nZXRYKGkpKSwgYXkgPSBNYXRoLmFicyhucm0uZ2V0WShpKSksIGF6ID0gTWF0aC5hYnMobnJtLmdldFooaSkpO1xuICAgIGNvbnN0IHUgPSBheCA+PSBheiA/IHAuZ2V0WihpKSA6IHAuZ2V0WChpKTtcbiAgICBsZXQgdiA9IHAuZ2V0WShpKSAvIHNjYWxlO1xuICAgIC8vIEEgdGlsZSBrZXllZCBvbiBoZWlnaHQgY2Fubm90IHRlbGwgYSBib25uZXQgZnJvbSBhIGRvb3IgYXQgdGhlIHNhbWUgaGVpZ2h0LCBhbmQgYSBib25uZXRcbiAgICAvLyBpcyBjbGVhbiB3aGVyZSBhIGRvb3IgaXMgc3ByYXllZDogYHRvcENsZWFuYCBzZW5kcyBldmVyeSB1cHdhcmQgZmFjZSBpbnRvIHRoZSB0aWxlJ3MgdG9wXG4gICAgLy8gYmFuZCAodiAwLjc1Li4wLjk1KSwgYWJvdmUgYW55IHdhc2gsIHdoZXJlIG9ubHkgdGhlIGR1c3QgZmlsbSBhcHBsaWVzLlxuICAgIGlmIChvcHRzLnRvcENsZWFuICYmIGF5ID49IDAuOCkgdiA9IDAuNzUgKyAwLjIgKiAodiAtIE1hdGguZmxvb3IodikpO1xuICAgIHV2W2kgKiAyXSA9IHUgLyB1czsgdXZbaSAqIDIgKyAxXSA9IHY7XG4gIH1cbiAgZ2VvLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBPZmZzZXQgYSBjbG9zZWQgcG9seWdvbiBvZiBbeiwgeV0gcG9pbnRzIG91dHdhcmQgYnkgYGRgIGFsb25nIHRoZSBhdmVyYWdlZCBlZGdlIG5vcm1hbHMuIFVzZWRcbiAqICB0byBzdGFuZCB0aGUgZ2xhc3MgYmFuZCBhIGZldyBtaWxsaW1ldHJlcyBwcm91ZCBvZiB0aGUgYm9keSdzIHJha2VkIHdpbmRzY3JlZW4gYW5kIHJlYXIgZ2xhc3NcbiAqICBmYWNlcywgc28gdGhlIHBhbmUgYW5kIHRoZSBib2R5IG5ldmVyIHNoYXJlIGEgcGxhbmUuIFdpbmRpbmc6IGNvdW50ZXItY2xvY2t3aXNlIGluICh6LCB5KS4gKi9cbmZ1bmN0aW9uIG9mZnNldFBvbHkocHRzOiBudW1iZXJbXVtdLCBkOiBudW1iZXIpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgbiA9IHB0cy5sZW5ndGgsIG91dDogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBwdHNbKGkgKyBuIC0gMSkgJSBuXSwgYiA9IHB0c1tpXSwgYyA9IHB0c1soaSArIDEpICUgbl07XG4gICAgY29uc3QgZTEgPSBbYlswXSAtIGFbMF0sIGJbMV0gLSBhWzFdXSwgZTIgPSBbY1swXSAtIGJbMF0sIGNbMV0gLSBiWzFdXTtcbiAgICBjb25zdCBsMSA9IE1hdGguaHlwb3QoZTFbMF0sIGUxWzFdKSB8fCAxLCBsMiA9IE1hdGguaHlwb3QoZTJbMF0sIGUyWzFdKSB8fCAxO1xuICAgIC8vIG91dHdhcmQgbm9ybWFsIG9mIGEgQ0NXIGVkZ2UgKGR6LCBkeSkgaXMgKGR5LCAtZHopXG4gICAgY29uc3QgbjEgPSBbZTFbMV0gLyBsMSwgLWUxWzBdIC8gbDFdLCBuMiA9IFtlMlsxXSAvIGwyLCAtZTJbMF0gLyBsMl07XG4gICAgbGV0IG54ID0gbjFbMF0gKyBuMlswXSwgbnkgPSBuMVsxXSArIG4yWzFdO1xuICAgIGNvbnN0IG5sID0gTWF0aC5oeXBvdChueCwgbnkpIHx8IDE7IG54IC89IG5sOyBueSAvPSBubDtcbiAgICBjb25zdCBjb3NIYWxmID0gTWF0aC5tYXgoMC4zNSwgbnggKiBuMVswXSArIG55ICogbjFbMV0pO1xuICAgIG91dC5wdXNoKFtiWzBdICsgbnggKiBkIC8gY29zSGFsZiwgYlsxXSArIG55ICogZCAvIGNvc0hhbGZdKTtcbiAgfVxuICByZXR1cm4gb3V0O1xufVxuXG4vKiogQSB3aGVlbC1hcmNoIEZMQVJFOiBhIGhhbGYtYW5udWx1cyBpbiB0aGUgKHosIHkpIHBsYW5lLCBleHRydWRlZCBhY3Jvc3MgeDAuLngxIG9uIGJvdGggc2lkZXNcbiAqICBhbmQgdGludGVkLiBTdGFuZHMgcHJvdWQgb2YgdGhlIGJvZHkgc2lkZSBhbmQgaGlkZXMgdGhlIGFyY2gncyBjdXQgZWRnZS4gKi9cbmZ1bmN0aW9uIGZsYXJlKHpjOiBudW1iZXIsIHljOiBudW1iZXIsIHJJbjogbnVtYmVyLCByT3V0OiBudW1iZXIsIHgwOiBudW1iZXIsIHgxOiBudW1iZXIsIGhleDogbnVtYmVyLCBuID0gOSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPD0gbjsgaSsrKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBjb25zdCB6ID0gemMgKyBNYXRoLmNvcyhhKSAqIHJPdXQsIHkgPSB5YyArIE1hdGguc2luKGEpICogck91dDsgaWYgKGkgPT09IDApIHNoYXBlLm1vdmVUbyh6LCB5KTsgZWxzZSBzaGFwZS5saW5lVG8oeiwgeSk7IH1cbiAgZm9yIChsZXQgaSA9IG47IGkgPj0gMDsgaS0tKSB7IGNvbnN0IGEgPSBNYXRoLlBJIC0gaSAqIE1hdGguUEkgLyBuOyBzaGFwZS5saW5lVG8oemMgKyBNYXRoLmNvcyhhKSAqIHJJbiwgeWMgKyBNYXRoLnNpbihhKSAqIHJJbik7IH1cbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGNvbnN0IG1rID0gKHN4OiBudW1iZXIpID0+IHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogeDEgLSB4MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSB9KTtcbiAgICBnLnJvdGF0ZVkoLU1hdGguUEkgLyAyKTsgZy50cmFuc2xhdGUoeDEsIDAsIDApOyBpZiAoc3ggPCAwKSBnLnNjYWxlKC0xLCAxLCAxKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiB0aW50R2VvKGcsIGhleCk7XG4gIH07XG4gIGNvbnN0IGwgPSBtaygtMSksIHIgPSBtaygxKTtcbiAgLy8gYSBuZWdhdGl2ZSBzY2FsZSBmbGlwcyB0aGUgd2luZGluZzsgcmVzdG9yZSBpdCBzbyB0aGUgZmxhcmUgaXMgbm90IGluc2lkZSBvdXRcbiAgY29uc3QgaWR4ID0gbC5nZXRJbmRleCgpOyBpZiAoaWR4KSB7IGNvbnN0IGEgPSBpZHguYXJyYXkgYXMgYW55OyBmb3IgKGxldCBpID0gMDsgaSA8IGEubGVuZ3RoOyBpICs9IDMpIHsgY29uc3QgdCA9IGFbaSArIDFdOyBhW2kgKyAxXSA9IGFbaSArIDJdOyBhW2kgKyAyXSA9IHQ7IH0gaWR4Lm5lZWRzVXBkYXRlID0gdHJ1ZTsgfVxuICBlbHNlIHsgY29uc3QgcCA9IGwuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpOyBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkgKz0gMykgeyBjb25zdCB4MV8gPSBwLmdldFgoaSArIDEpLCB5MV8gPSBwLmdldFkoaSArIDEpLCB6MV8gPSBwLmdldFooaSArIDEpOyBwLnNldFhZWihpICsgMSwgcC5nZXRYKGkgKyAyKSwgcC5nZXRZKGkgKyAyKSwgcC5nZXRaKGkgKyAyKSk7IHAuc2V0WFlaKGkgKyAyLCB4MV8sIHkxXywgejFfKTsgfSB9XG4gIGwuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhbbCwgcl0pO1xufVxuXG4vKiogU2VhbWxlc3MgYXJvdW5kLWJ5LXByb2ZpbGUgVVZzIGZvciBhIExhdGhlR2VvbWV0cnkgcmV2b2x2ZWQgYWJvdXQgWTogdSBmcm9tIHRoZSBTRUdNRU5UIGluZGV4XG4gKiAgKHRoZSBsYXRoZSBvcmRlcnMgaXRzIHZlcnRpY2VzIHNlZ21lbnQtbWFqb3IsIGluZGV4ID0gc2VnICogcG9pbnRDb3VudCArIHBvaW50KSBzbyB0aGUgZHVwbGljYXRlZFxuICogIHNlYW0gY29sdW1uIHJlYWRzIHUgPSByZXBlYXRzIGV4YWN0bHkgYW5kIFJlcGVhdFdyYXBwaW5nIGNsb3NlcyBpdDsgdiBwZXIgUFJPRklMRSBQT0lOVCBmcm9tXG4gKiAgYHZzYCAob25lIHZhbHVlIHBlciBwcm9maWxlIHBvaW50KSwgc28gdGhlIGNhbGxlciBkZWNpZGVzIHdoaWNoIHRpbGUgcm93cyBsYW5kIG9uIHRoZSB0cmVhZCBhbmRcbiAqICB3aGljaCBvbiB0aGUgc2lkZXdhbGxzLiBgcGl0Y2hgIGlzIHRoZSB0aWxlIHNpemUgaW4gbWV0cmVzIGFyb3VuZCB0aGUgd2lkZXN0IHJhZGl1cy4gKi9cbmZ1bmN0aW9uIGxhdGhlVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHBvaW50Q291bnQ6IG51bWJlciwgc2VnOiBudW1iZXIsIHBpdGNoOiBudW1iZXIsIHZzOiBudW1iZXJbXSk6IHZvaWQge1xuICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7XG4gIGxldCByTWF4ID0gMDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHJNYXggPSBNYXRoLm1heChyTWF4LCBNYXRoLmh5cG90KHAuZ2V0WChpKSwgcC5nZXRaKGkpKSk7XG4gIGNvbnN0IHJlcCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQoMiAqIE1hdGguUEkgKiByTWF4IC8gcGl0Y2gpKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAyKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCBzID0gTWF0aC5mbG9vcihpIC8gcG9pbnRDb3VudCksIGogPSBpICUgcG9pbnRDb3VudDtcbiAgICB1dltpICogMl0gPSAocyAvIHNlZykgKiByZXA7IHV2W2kgKiAyICsgMV0gPSB2c1tNYXRoLm1pbihqLCB2cy5sZW5ndGggLSAxKV07XG4gIH1cbiAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xufVxuXG4vKiogUGluIGV2ZXJ5IFVWIG9mIGEgZ2VvbWV0cnkgdG8gb25lIHRleGVsIC0tIHRoZSBXSElURSBiYW5kIGEgdHlyZSB0aWxlIGtlZXBzIGF0IGl0cyB0b3AgLS0gc28gYVxuICogIHJpbSwgaHViIG9yIHNwb2tlIHNoYXJpbmcgdGhlIHR5cmUncyBtYXRlcmlhbCByZW5kZXJzIGl0cyB2ZXJ0ZXggY29sb3VyIHVubXVsdGlwbGllZC4gKi9cbmZ1bmN0aW9uIHBpblVWKGc6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCB1OiBudW1iZXIsIHY6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdXYgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB1di5jb3VudDsgaSsrKSB1di5zZXRYWShpLCB1LCB2KTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQW4gT1BFTiBzcG9rZWQgd2hlZWwgYWJvdXQgdGhlIFggYXhsZTogYSB0eXJlIFJJTkcgbGF0aGUgKGJlYWQsIHNpZGV3YWxsLCBzaG91bGRlciwgdHJlYWQgYW5kIGJhY2tcbiAqIGRvd24gdGhlIGZhciBzaWRlIC0tIGEgY2xvc2VkIHRvcnVzLWxpa2UgcHJvZmlsZSwgc28gbm90aGluZyBpcyBvcGVuIHRvIHRoZSBnYXRlKSwgYSByaW0gcmluZywgYVxuICogYnJha2UtZHJ1bSBodWIsIGFuZCB3aXJlIHNwb2tlcyBhcyB0aHJlZS1zaWRlZCBwcmlzbXMuIFRoZSBjbG9zZWQgZGlzaCBgd2hlZWxHZW9gIGZpbGxzIHRoZSB3aGVlbFxuICogd2l0aCBhIHNvbGlkIGRpc2MgdGhhdCBISURFUyB0aGUgc3Bva2VzIGl0IGNhcnJpZXM7IGEgbW90b3JjeWNsZSdzIHdpcmUgd2hlZWwgcmVhZHMgYnkgdGhlIGRheWxpZ2h0XG4gKiB0aHJvdWdoIGl0LCBzbyB0aGUgZGlzaCBpcyBnb25lLiBUeXJlIFVWcyBhcmUgYXJvdW5kLWJ5LXByb2ZpbGUgZm9yIGEgdHJlYWQgdGlsZSAoYG8ucGl0Y2hgIG1ldHJlc1xuICogcGVyIHJlcGVhdCBhcm91bmQ7IHYgMC41Li4wLjk2IGlzIHRoZSB0cmVhZGVkIHN0cmlwIG9mIGB0eXJlVGlsZWApLCByaW0sIGh1YiBhbmQgc3Bva2VzIGFyZSBwaW5uZWRcbiAqIHRvIHRoZSB0aWxlJ3Mgd2hpdGUgYmFuZC4gUmV2b2x2ZWQgYWJvdXQgWSwgdGhlbiBsYWlkIG9udG8gWC5cbiAqL1xuZnVuY3Rpb24gb3BlbldoZWVsR2VvKHJUeXJlOiBudW1iZXIsIHJSaW06IG51bWJlciwgaGFsZlc6IG51bWJlciwgc2VnOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgaHcgPSBoYWxmVywgcnIgPSByUmltICogMS4wMjtcbiAgY29uc3QgcHJvZjogbnVtYmVyW11bXSA9IFtcbiAgICBbcnIsIC1odyAqIDAuNzJdLCBbclR5cmUgKiAwLjkwLCAtaHcgKiAwLjk4XSwgW3JUeXJlICogMC45ODUsIC1odyAqIDAuNjZdLCBbclR5cmUsIC1odyAqIDAuMzBdLFxuICAgIFtyVHlyZSwgaHcgKiAwLjMwXSwgW3JUeXJlICogMC45ODUsIGh3ICogMC42Nl0sIFtyVHlyZSAqIDAuOTAsIGh3ICogMC45OF0sIFtyciwgaHcgKiAwLjcyXSwgW3JyLCAtaHcgKiAwLjcyXSxcbiAgXTtcbiAgLy8gdiBwZXIgcHJvZmlsZSBwb2ludDogc2lkZXdhbGwgMC41MC4uMC42NiwgdHJlYWQgMC42Ni4uMC44MCwgc2lkZXdhbGwgMC44MC4uMC45NiAoMC45Ni4uMSBpcyB3aGl0ZSlcbiAgY29uc3QgdnMgPSBbMC41MCwgMC41NiwgMC42NCwgMC42OCwgMC43OCwgMC44MiwgMC45MCwgMC45NiwgMC45Nl07XG4gIGNvbnN0IHR5cmUgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwcm9mLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICBsYXRoZVVWKHR5cmUsIHByb2YubGVuZ3RoLCBzZWcsIG8ucGl0Y2ggPz8gMC4wNSwgdnMpO1xuICB0eXJlLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGNvbnN0IHJpbVByb2YgPSBbW3JSaW0gKiAwLjkwLCAtaHcgKiAwLjUwXSwgW3JSaW0sIC1odyAqIDAuNjJdLCBbclJpbSwgaHcgKiAwLjYyXSwgW3JSaW0gKiAwLjkwLCBodyAqIDAuNTBdLCBbclJpbSAqIDAuOTAsIC1odyAqIDAuNTBdXTtcbiAgY29uc3QgcmltID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkocmltUHJvZi5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgcmltLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIGNvbnN0IGh1YlIgPSBvLmh1YlIgPz8gclJpbSAqIDAuMzIsIGh1YlcgPSBvLmh1YlcgPz8gaHcgKiAyLjY7XG4gIGNvbnN0IGh1YiA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGh1YlIsIGh1YlIsIGh1YlcsIG8uaHViU2VnID8/IDEyKTtcbiAgY29uc3QgaHViQ2FwID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoaHViUiAqIDAuNTUsIGh1YlIgKiAwLjU1LCBodWJXICogMS4yNSwgby5odWJTZWcgPz8gMTIpO1xuICBjb25zdCBwYXJ0cyA9IFt0aW50R2VvKHR5cmUsIG8udHlyZUhleCksIHBpblVWKHRpbnRHZW8ocmltLCBvLnJpbUhleCksIDAuNSwgMC45ODUpLFxuICAgICAgICAgICAgICAgICBwaW5VVih0aW50R2VvKGh1Yiwgby5odWJIZXggPz8gby5yaW1IZXgpLCAwLjUsIDAuOTg1KSwgcGluVVYodGludEdlbyhodWJDYXAsIG8uY2FwSGV4ID8/IG8ucmltSGV4KSwgMC41LCAwLjk4NSldO1xuICBjb25zdCBnID0gbWVyZ2VHZW9zKHBhcnRzKTtcbiAgZy5yb3RhdGVaKE1hdGguUEkgLyAyKTsgICAgICAgICAgICAgICAgICAgICAvLyBsYXRoZSBheGlzIFkgLT4gdGhlIGF4bGUgb24gWFxuICBjb25zdCBzcCA9IHBpblVWKHNwb2tlcyhodWJSICogMC45LCByUmltICogMC45NSwgaHcsIG8uc3Bva2VzID8/IDIwLCBvLnNwb2tlSGV4ID8/IDB4YjBhZWE5LCBvLnNwb2tlVCA/PyAwLjAwNiwgdHJ1ZSksIDAuNSwgMC45ODUpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtnLCBzcF0pO1xufVxuXG4vKiogVFlSRSB0aWxlLCBwb3J0ZWQgZnJvbSB0aGUgcHJvcCB0ZW1wbGF0ZTogYG8ucGl0Y2hgIG1ldHJlcyBhcm91bmQgKHZpYSBsYXRoZVVWKSwgdGhlIHN0cmlwIGF0XG4gKiAgdiAwLjUuLjAuOTYgYSB0cmVhZGVkIHR5cmUgKGNpcmN1bWZlcmVudGlhbCBncm9vdmVzIGN1dCBieSBzdGFnZ2VyZWQgc2lwZXMsIGJlYWQgcmluZ3MsIG1vdWxkXG4gKiAgbGluZXMsIHJvYWQgZHVzdCBvbiB0aGUgbG93ZXIgc2hvdWxkZXIsIGdyZXkgc2N1ZmZzLCBncmFpbiksIHYgMC4uMC41IGEgd29ybiBzbGljaywgYW5kIHRoZSB0b3BcbiAqICA0JSBwdXJlIFdISVRFIHNvIHBpbm5lZCBwYXJ0cyByZW5kZXIgdGhlaXIgdmVydGV4IGNvbG91ci4gRHJhd24gYXMgUkFUSU9TIGFnYWluc3QgdGhlXG4gKiAgdmVydGV4LWNvbG91cmVkIHJ1YmJlciBhdCBgYmFzZWAgKDIwMC8yNTUgLT4gdGhlIHR5cmUgdG9uZSBpcyBhdXRob3JlZCAxLjI3NXggaXRzIGFsYmVkbyBzbyBkdXN0XG4gKiAgYW5kIHNjdWZmcyBjYW4gZ28gQlJJR0hURVIgdGhhbiB0aGUgcnViYmVyIHVuZGVyIGEgbXVsdGlwbHkgY2FudmFzKS4gYG8uYmFuZGAgaXMgdGhlIHRyZWFkJ3NcbiAqICBzaGFyZSBvZiB0aGUgc3RyaXAsIHRvcCB0byBib3R0b20sIGFuZCBtdXN0IGFncmVlIHdpdGggb3BlbldoZWVsR2VvJ3MgdHJlYWQgcm93cy4gKi9cbmZ1bmN0aW9uIHR5cmVUaWxlKHNpemU6IG51bWJlciwgc2VlZDogbnVtYmVyLCBvOiBhbnkpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgYmFzZSA9IG8uYmFzZSA/PyAyMDAsIGJhbmQgPSBvLmJhbmQgPz8gWzAuMzUsIDAuNjVdLCBncm9vdmUgPSBvLmdyb292ZSA/PyAwLjQ1O1xuICAgIGNvbnN0IGd2ID0gTWF0aC5yb3VuZChiYXNlICogZ3Jvb3ZlKSwgcnYgPSBNYXRoLnJvdW5kKGJhc2UgKiAwLjcpLCBtdiA9IE1hdGgucm91bmQoYmFzZSAqIDAuOSk7XG4gICAgY29uc3QgZHVzdCA9IG8uZHVzdCA/PyBbMjMyLCAyMTQsIDE5MF07XG4gICAgY29uc3Qgd2hpdGUgPSBNYXRoLnJvdW5kKHMgKiAwLjA0KTtcbiAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2Jhc2V9LCR7YmFzZX0sJHtiYXNlfSlgOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzICogcyAvIDY7IGkrKykgeyBjb25zdCB2ID0gYmFzZSArIE1hdGgucm91bmQoKHJuZCgpIC0gMC41KSAqIDIyKTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHJuZCgpICogcywgcm5kKCkgKiBzLCAyLCAyKTsgfVxuICAgIGNvbnN0IHN0cmlwID0gKHlhOiBudW1iZXIsIHliOiBudW1iZXIsIHRyZWFkZWQ6IGJvb2xlYW4pID0+IHtcbiAgICAgIGNvbnN0IGggPSB5YiAtIHlhLCBiMCA9IHlhICsgaCAqICgxIC0gYmFuZFsxXSksIGIxID0geWEgKyBoICogKDEgLSBiYW5kWzBdKTtcbiAgICAgIGNvbnN0IG5nID0gby5ncm9vdmVzID8/IDMsIGd3ID0gaCAqIDAuMDI0O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHtndn0sJHtndn0sJHtndn0pYDtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmc7IGkrKykgeyBjb25zdCB5ID0gYjAgKyAoYjEgLSBiMCkgKiAoaSArIDEpIC8gKG5nICsgMSk7IGN0eC5maWxsUmVjdCgwLCB5IC0gZ3cgLyAyLCBzLCBndyk7IH1cbiAgICAgIGNvbnN0IG5zID0gby5zaXBlcyA/PyAyLCB3ID0gcyAqIChvLnNpcGVXaWR0aCA/PyAwLjA1KTtcbiAgICAgIGZvciAobGV0IGsgPSAwOyBrIDw9IG5nOyBrKyspIHtcbiAgICAgICAgY29uc3QgeTAgPSBrID09PSAwID8gYjAgOiBiMCArIChiMSAtIGIwKSAqIGsgLyAobmcgKyAxKSArIGd3IC8gMiwgeTEgPSBrID09PSBuZyA/IGIxIDogYjAgKyAoYjEgLSBiMCkgKiAoayArIDEpIC8gKG5nICsgMSkgLSBndyAvIDI7XG4gICAgICAgIGNvbnN0IG91dGVyID0gayA9PT0gMCB8fCBrID09PSBuZztcbiAgICAgICAgaWYgKCF0cmVhZGVkICYmICFvdXRlcikgY29udGludWU7XG4gICAgICAgIGNvbnN0IHlzMCA9IHRyZWFkZWQgPyB5MCA6IChrID09PSAwID8geTAgOiB5MSAtICh5MSAtIHkwKSAqIDAuNDUpLCB5czEgPSB0cmVhZGVkID8geTEgOiAoayA9PT0gMCA/IHkwICsgKHkxIC0geTApICogMC40NSA6IHkxKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuczsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgeCA9ICgoaSArIDAuNSkgLyBucyArIChrICUgMikgKiAwLjUgLyBucykgKiBzICsgKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA2LCBzbCA9IChybmQoKSAtIDAuNSkgKiBzICogMC4wODtcbiAgICAgICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHsgY3R4LmJlZ2luUGF0aCgpOyBjdHgubW92ZVRvKHggKyBkeCwgeXMwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB3LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyBzbCwgeXMxKTsgY3R4LmxpbmVUbyh4ICsgZHggKyBzbCwgeXMxKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpOyB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IHNoID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIGIwIC0gaCAqIDAuMDMsIDAsIGIwICsgaCAqIDAuMDIpOyBzaC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMClgKTsgc2guYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Z3Z9LCR7Z3Z9LCR7Z3Z9LDAuNDUpYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gc2g7IGN0eC5maWxsUmVjdCgwLCBiMCAtIGggKiAwLjAzLCBzLCBoICogMC4wNSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke3J2fSwke3J2fSwke3J2fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4wNDUsIHMsIGggKiAwLjAxMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjk0LCBzLCBoICogMC4wMTIpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHttdn0sJHttdn0sJHttdn0pYDsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuMTEsIHMsIDIpOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC44OCwgcywgMik7XG4gICAgICBjb25zdCBkZyA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCB5YiwgMCwgeWEgKyBoICogMC42KTsgZGcuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LCR7by5kdXN0QWxwaGEgPz8gMC4zNX0pYCk7IGRnLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke2R1c3RbMF19LCR7ZHVzdFsxXX0sJHtkdXN0WzJdfSwwKWApO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGRnOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC42LCBzLCBoICogMC40KTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKG8uc2N1ZmZzID8/IDE0KTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSA8IDAuNSA/IGIwICsgKHJuZCgpIC0gMC4zKSAqIGggKiAwLjA4IDogYjEgKyAocm5kKCkgLSAwLjcpICogaCAqIDAuMDgsIHIgPSBzICogKDAuMDIgKyBybmQoKSAqIDAuMDUpLCB2ID0gMjI1ICsgTWF0aC5yb3VuZChybmQoKSAqIDI1KTtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7IGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwLjUpYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBgcmdiYSgke3Z9LCR7dn0sJHt2fSwwKWApO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7IGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5lbGxpcHNlKHggKyBkeCwgeSwgciAqIDIuMiwgciAqIDAuNiwgMCwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgICB9XG4gICAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ2xpZ2h0ZXInO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2MDsgaSsrKSB7IGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBiMCArIHJuZCgpICogKGIxIC0gYjApLCB2ID0gNiArIE1hdGgucm91bmQocm5kKCkgKiAxNCk7IGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7dn0sJHtNYXRoLnJvdW5kKHYgKiAwLjkpfSwke01hdGgucm91bmQodiAqIDAuNzUpfSlgOyBjdHguZmlsbFJlY3QoeCwgeSwgMiArIHJuZCgpICogNiwgMiArIHJuZCgpICogMyk7IH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICAgIH07XG4gICAgc3RyaXAod2hpdGUsIHMgLyAyLCB0cnVlKTsgICAvLyB2IDAuNS4uMC45NjogdHJlYWRlZFxuICAgIHN0cmlwKHMgLyAyLCBzLCBmYWxzZSk7ICAgICAgLy8gdiAwLi4wLjU6IHNsaWNrXG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHdoaXRlKTsgICAvLyB2IDAuOTYuLjE6IHdoaXRlLCBmb3IgcGlubmVkIHBhcnRzXG4gIH0pO1xufVxuXG4vKipcbiAqIEEgRFJBUEVEIFNIRUVUIChwb3J0ZWQgZnJvbSB0aGUgcHJvcCB0ZW1wbGF0ZSk6IGBoZWlnaHRzW2pdW2ldYCBpcyB0aGUgdG9wIHN1cmZhY2UgYXQgeCA9IHgwLi54MVxuICogKGkgb3ZlciBueCkgYW5kIHogPSB6MC4uejEgKGogb3ZlciBueik7IHRoZSBzaGVldCBpcyBgdGAgdGhpY2suIFRvcCBhbmQgdW5kZXJzaWRlIGFyZSBzbW9vdGgtc2hhZGVkXG4gKiBncmlkcywgdGhlIGZvdXIgZWRnZXMgYXJlIGZsYXQgc3RyaXBzIHdvdW5kIG91dHdhcmQuIEEgY2FudmFzIGNhbm9weSBpcyBhIHJpZGdlIGxpbmUgbWludXMgdGhlIHNhZ1xuICogYmV0d2VlbiBpdHMgcG9zdHMgbWludXMgdGhlIGRyb29wIG9mIGl0cyBmcmVlIGVkZ2VzIC0tIGNsb3RoLCB3aGVyZSBhIHNsYWIgcmVhZHMgYXMgYSBwYWludGVkIGJveC5cbiAqL1xuZnVuY3Rpb24gc2hlZXQoczogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBueDogbnVtYmVyID0gcy5ueCwgbno6IG51bWJlciA9IHMubnosIEhoOiBudW1iZXJbXVtdID0gcy5oZWlnaHRzLCB0OiBudW1iZXIgPSBzLnQgPz8gMC4wMTI7XG4gIGNvbnN0IFggPSAoaTogbnVtYmVyKSA9PiBzLngwICsgKHMueDEgLSBzLngwKSAqIGkgLyBueDtcbiAgY29uc3QgWiA9IChqOiBudW1iZXIpID0+IHMuejAgKyAocy56MSAtIHMuejApICogaiAvIG56O1xuICBjb25zdCBncmlkID0gKHlPZmY6IG51bWJlciwgZmxpcDogYm9vbGVhbikgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8PSBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8PSBueDsgaSsrKSB7IHBvcy5wdXNoKFgoaSksIEhoW2pdW2ldICsgeU9mZiwgWihqKSk7IHV2LnB1c2goaSAvIG54LCBqIC8gbnopOyB9XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBuejsgaisrKSBmb3IgKGxldCBpID0gMDsgaSA8IG54OyBpKyspIHtcbiAgICAgIGNvbnN0IGEgPSBqICogKG54ICsgMSkgKyBpLCBiID0gYSArIDEsIGMgPSBhICsgbnggKyAxLCBkID0gYyArIDE7XG4gICAgICBpZiAoZmxpcCkgaWR4LnB1c2goYSwgYiwgYywgYiwgZCwgYyk7IGVsc2UgaWR4LnB1c2goYSwgYywgYiwgYiwgYywgZCk7XG4gICAgfVxuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3MsIDMpKTtcbiAgICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICAgIGcuc2V0SW5kZXgoaWR4KTsgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgcGFydHMgPSBbZ3JpZCgwLCBmYWxzZSksIGdyaWQoLXQsIHRydWUpXTtcbiAgY29uc3Qgc3RyaXAgPSAocHRzOiBudW1iZXJbXVtdW10sIG91dDogbnVtYmVyW10pID0+IHtcbiAgICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIHV2OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW3AwLCBwMV0gb2YgcHRzKSB7XG4gICAgICBjb25zdCBxMCA9IHAwLCBxMSA9IHAxLCBxMiA9IFtwMVswXSwgcDFbMV0gLSB0LCBwMVsyXV0sIHEzID0gW3AwWzBdLCBwMFsxXSAtIHQsIHAwWzJdXTtcbiAgICAgIGNvbnN0IGUxID0gW3ExWzBdIC0gcTBbMF0sIHExWzFdIC0gcTBbMV0sIHExWzJdIC0gcTBbMl1dLCBlMiA9IFtxMlswXSAtIHEwWzBdLCBxMlsxXSAtIHEwWzFdLCBxMlsyXSAtIHEwWzJdXTtcbiAgICAgIGNvbnN0IG4gPSBbZTFbMV0gKiBlMlsyXSAtIGUxWzJdICogZTJbMV0sIGUxWzJdICogZTJbMF0gLSBlMVswXSAqIGUyWzJdLCBlMVswXSAqIGUyWzFdIC0gZTFbMV0gKiBlMlswXV07XG4gICAgICBjb25zdCB0cmkgPSBuWzBdICogb3V0WzBdICsgblsxXSAqIG91dFsxXSArIG5bMl0gKiBvdXRbMl0gPj0gMCA/IFtxMCwgcTEsIHEyLCBxMCwgcTIsIHEzXSA6IFtxMCwgcTIsIHExLCBxMCwgcTMsIHEyXTtcbiAgICAgIGZvciAoY29uc3QgcSBvZiB0cmkpIHsgcG9zLnB1c2gocVswXSwgcVsxXSwgcVsyXSk7IHV2LnB1c2goMCwgMCk7IH1cbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpOyByZXR1cm4gZztcbiAgfTtcbiAgY29uc3QgdG9wID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiBbWChpKSwgSGhbal1baV0sIFooaildO1xuICBjb25zdCBlMDogbnVtYmVyW11bXVtdID0gW10sIGUxOiBudW1iZXJbXVtdW10gPSBbXSwgZTI6IG51bWJlcltdW11bXSA9IFtdLCBlMzogbnVtYmVyW11bXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykgeyBlMC5wdXNoKFt0b3AoaSwgMCksIHRvcChpICsgMSwgMCldKTsgZTEucHVzaChbdG9wKGksIG56KSwgdG9wKGkgKyAxLCBueildKTsgfVxuICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIHsgZTIucHVzaChbdG9wKDAsIGopLCB0b3AoMCwgaiArIDEpXSk7IGUzLnB1c2goW3RvcChueCwgaiksIHRvcChueCwgaiArIDEpXSk7IH1cbiAgcGFydHMucHVzaChzdHJpcChlMCwgWzAsIDAsIC0xXSksIHN0cmlwKGUxLCBbMCwgMCwgMV0pLCBzdHJpcChlMiwgWy0xLCAwLCAwXSksIHN0cmlwKGUzLCBbMSwgMCwgMF0pKTtcbiAgcmV0dXJuIG1lcmdlR2VvcyhwYXJ0cyk7XG59XG5cbi8qKiBCaW5kIGEgcG9zdC1jb25zdHJ1Y3Rpb24gY2FudmFzIHRpbGUgdG8gYSBtYXRlcmlhbCBhcyBtYXAgKGFuZCBidW1wKSwgbGVhdmluZyB0aGUgdGV4dHVyZWxlc3NcbiAqICBkZWNsYXJhdGlvbiBpbnRhY3Q6IG5vIHByb2NlZHVyYWwgdGV4dHVyZSBzZXQgaXMgc3ludGhlc2lzZWQsIHRoZSBtZWFzdXJlZCBjb2xvdXIgc3RheXMgdGhlXG4gKiAgbXVsdGlwbGljYW5kLCBhbmQgdGhlIHdob2xlIHRoaW5nIGNvc3RzIG9uZSBjYW52YXMuICovXG5mdW5jdGlvbiBiaW5kVGlsZShtYXQ6IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsLCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsLCBidW1wID0gMCk6IHZvaWQge1xuICBpZiAoIXRleCkgcmV0dXJuO1xuICBtYXQubWFwID0gdGV4O1xuICBpZiAoYnVtcCA+IDApIHsgbWF0LmJ1bXBNYXAgPSB0ZXg7IG1hdC5idW1wU2NhbGUgPSBidW1wOyB9XG4gIG1hdC5uZWVkc1VwZGF0ZSA9IHRydWU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtYXRlcmlhbHMgKi9cblxuLyoqXG4gKiBFdmVyeSBtYXRlcmlhbCBpcyBkZWNsYXJlZCBgdGV4dHVyZWxlc3NgIGluIHRoZSBzY3VscHQgc3BlYywgc28gbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpc1xuICogc3ludGhlc2lzZWQuIFRoYXQgbWF0dGVycyB0d2ljZS4gU3BlZWQ6IG1ha2VQcm9jZWR1cmFsVGV4dHVyZVNldCB3cml0ZXMgRklWRSBjYW52YXNlcyBwZXJcbiAqIG1hdGVyaWFsIHBpeGVsIGJ5IHBpeGVsIGluIEphdmFTY3JpcHQsIGF0IGEgY29zdCB0aGF0IGlzIHRoZSBTUVVBUkUgb2YgdGhlIHJlc29sdXRpb24uXG4gKiBDb3JyZWN0bmVzczogd2hlbmV2ZXIgYSB0ZXh0dXJlIHNldCBleGlzdHMgdGhlIGdlbmVyYXRvciBmb3JjZXMgY29sb3IgdG8gd2hpdGUgYW5kIHJvdWdobmVzc1xuICogdG8gMSBhbmQgcmVhZHMgYm90aCBiYWNrIGZyb20gdGhlIGdlbmVyYXRlZCBtYXBzLCBkaXNjYXJkaW5nIHRoZSBtZWFzdXJlZCBhbGJlZG8uXG4gKlxuICogTWV0YWxuZXNzIGlzIGNhcHBlZCB3ZWxsIGJlbG93IHBoeXNpY2FsIGZvciB0aGUgZ2lsZGVkIHN1cmZhY2VzLiBUaGUgdGhhaWtpdCBoYXJuZXNzIHN1cHBsaWVzIGFcbiAqIGhlbWlzcGhlcmUgbGlnaHQgYW5kIHRocmVlIGRpcmVjdGlvbmFscyBhbmQgTk8gZW52aXJvbm1lbnQgbWFwLCBhbmQgYSBtZXRhbCB3aXRoIG5vdGhpbmcgdG9cbiAqIHJlZmxlY3QgcmVuZGVycyBibGFjayAtLSB3aGljaCBvbiBhIGdvbGQgZmluaWFsIGlzIHRoZSB3aG9sZSBmZWF0dXJlIGxvc3QuIFRoZSBhbGJlZG8gc3RheXNcbiAqIG1lYXN1cmVkOyB0aGUgbWV0YWxuZXNzIGlzIHdoYXQgaXMgd3JvbmcgZm9yIHRoaXMgcmlnLlxuICovXG5mdW5jdGlvbiBidWlsZE1hdGVyaWFscyhvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zKTogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWw+IHtcbiAgY29uc3QgbWFwOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4gPSB7fTtcbiAgZm9yIChjb25zdCBzIG9mIENPTkZJRy5tYXRlcmlhbHMgYXMgYW55W10pIHtcbiAgICBjb25zdCBtID0gbmV3IFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsKHtcbiAgICAgIGNvbG9yOiBuZXcgVEhSRUUuQ29sb3Iocy5jb2xvciksXG4gICAgICByb3VnaG5lc3M6IHMucm91Z2huZXNzLFxuICAgICAgbWV0YWxuZXNzOiBzLm1ldGFsbmVzcyxcbiAgICAgIHdpcmVmcmFtZTogb3B0aW9ucy53aXJlZnJhbWUgPz8gZmFsc2UsXG4gICAgICBzaWRlOiBzLmRvdWJsZVNpZGVkID8gVEhSRUUuRG91YmxlU2lkZSA6IFRIUkVFLkZyb250U2lkZSxcbiAgICAgIHZlcnRleENvbG9yczogcy52ZXJ0ZXhDb2xvcnMgPT09IHRydWUsXG4gICAgfSk7XG4gICAgaWYgKHMuZW52TWFwSW50ZW5zaXR5ICE9PSB1bmRlZmluZWQpIG0uZW52TWFwSW50ZW5zaXR5ID0gcy5lbnZNYXBJbnRlbnNpdHk7XG4gICAgaWYgKHMub3BhY2l0eSAhPT0gdW5kZWZpbmVkKSB7IG0udHJhbnNwYXJlbnQgPSB0cnVlOyBtLm9wYWNpdHkgPSBzLm9wYWNpdHk7IG0uZGVwdGhXcml0ZSA9IHRydWU7IH1cbiAgICBtLm5hbWUgPSBzLmlkO1xuICAgIG1hcFtzLmlkXSA9IG07XG4gIH1cbiAgcmV0dXJuIG1hcDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIHRoZSBtb2RlbCAqL1xuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlU2lkZWNhck1vdG9yY3ljbGVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ1NpZGVjYXIgTW90b3JjeWNsZSc7XG5cbiAgY29uc3QgbWF0ZXJpYWxzID0gYnVpbGRNYXRlcmlhbHMob3B0aW9ucyk7XG4gIGNvbnN0IG5vZGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgbWVzaGVzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoPiA9IHt9O1xuICBjb25zdCBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD4gPSB7fTtcbiAgY29uc3QgY29sbGlkZXJzOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiA9IHt9O1xuICBjb25zdCBkZXN0cnVjdGlvbkdyb3VwczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4gPSB7fTtcbiAgY29uc3QgY2FzdFNoYWRvdyA9IG9wdGlvbnMuY2FzdFNoYWRvdyA/PyB0cnVlO1xuICBjb25zdCByZWNlaXZlU2hhZG93ID0gb3B0aW9ucy5yZWNlaXZlU2hhZG93ID8/IHRydWU7XG5cbiAgLyoqXG4gICAqIEEgbWF0ZXJpYWwgd2l0aCBgdmVydGV4Q29sb3JzYCByZWFkcyBhIGBjb2xvcmAgYXR0cmlidXRlIG91dCBvZiBFVkVSWSBnZW9tZXRyeSBib3VuZCB0byBpdCwgYW5kXG4gICAqIGEgZ2VvbWV0cnkgdGhhdCBoYXMgbm9uZSBoYW5kcyB0aGUgc2hhZGVyIGFuIHVuZGVmaW5lZCBhdHRyaWJ1dGUgLS0gd2hpY2ggY29tZXMgYmFjayBhc1xuICAgKiAoMCwgMCwgMCkgYW5kIHJlbmRlcnMgdGhlIG1lc2ggQkxBQ0suIFRoYXQgaXMgbm90IGEgaHlwb3RoZXRpY2FsOiB0aGUgdWJvc290J3Mgd2FsbCBib2R5IGFuZFxuICAgKiBpdHMgZWlnaHQgYm91bmRhcnkgc3RvbmVzIHNoaXBwZWQgYXMgYmxhY2sgc2lsaG91ZXR0ZXMgZnJvbSBvbmUgdGludGVkIHBsYXRmb3JtIHNoYXJpbmcgdGhlaXJcbiAgICogc3RvbmUgbWF0ZXJpYWwsIGFuZCB0aGUgZmFpbHVyZSBpcyBzaWxlbnQgYmVjYXVzZSB0aGUgdGludGVkIGNvbXBvbmVudCBpdHNlbGYgbG9va3MgcGVyZmVjdC5cbiAgICpcbiAgICogQW4gSW5zdGFuY2VkTWVzaCBoaWRlcyBpdCAtLSBpdCBmYWxscyBiYWNrIHRvIGluc3RhbmNlQ29sb3IgYW5kIGNvbWVzIG91dCB3aGl0ZSAtLSBzbyB0aGUgc2FtZVxuICAgKiBtaXN0YWtlIG9uIHRoZSBjaGVkaSdzIG5pY2hlIGZyYW1lcyByZW5kZXJlZCBjb3JyZWN0bHkgYW5kIHRhdWdodCBub3RoaW5nLiBHdWFyZCBpdCBoZXJlLCBvbmNlLFxuICAgKiBmb3IgZXZlcnkgZ2VvbWV0cnk6IG5vIGNvbG9yIGF0dHJpYnV0ZSBhbmQgYSB2ZXJ0ZXhDb2xvcnMgbWF0ZXJpYWwgbWVhbnMgZmlsbCB3aXRoIHdoaXRlLlxuICAgKi9cbiAgZnVuY3Rpb24gZ3VhcmRWZXJ0ZXhDb2xvcnMoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0OiBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbCkge1xuICAgIGlmICghbWF0IHx8ICFtYXQudmVydGV4Q29sb3JzIHx8IGdlby5nZXRBdHRyaWJ1dGUoJ2NvbG9yJykpIHJldHVybjtcbiAgICBjb25zdCBuID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShuICogMykuZmlsbCgxKSwgMykpO1xuICB9XG5cbiAgZnVuY3Rpb24gYWRkKGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgbWVzaC5uYW1lID0gbmFtZTsgbWVzaC5jYXN0U2hhZG93ID0gY2FzdFNoYWRvdzsgbWVzaC5yZWNlaXZlU2hhZG93ID0gcmVjZWl2ZVNoYWRvdztcbiAgICBub2RlLmFkZChtZXNoKTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IG1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBtZXNoO1xuICB9XG4gIGZ1bmN0aW9uIGFkZEluc3QoaWQ6IHN0cmluZywgbmFtZTogc3RyaW5nLCBnZW86IFRIUkVFLkJ1ZmZlckdlb21ldHJ5LCBtYXRJZDogc3RyaW5nLCBtYXRzOiBUSFJFRS5NYXRyaXg0W10sIGNvbHM/OiBudW1iZXJbXSkge1xuICAgIGNvbnN0IG5vZGUgPSBuZXcgVEhSRUUuR3JvdXAoKTsgbm9kZS5uYW1lID0gbmFtZSArICdfX25vZGUnO1xuICAgIGd1YXJkVmVydGV4Q29sb3JzKGdlbywgbWF0ZXJpYWxzW21hdElkXSk7XG4gICAgY29uc3QgaW5zdCA9IG5ldyBUSFJFRS5JbnN0YW5jZWRNZXNoKGdlbywgbWF0ZXJpYWxzW21hdElkXSwgbWF0cy5sZW5ndGgpO1xuICAgIGluc3QubmFtZSA9IG5hbWU7IGluc3QuY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IGluc3QucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXRzLmxlbmd0aDsgaSsrKSBpbnN0LnNldE1hdHJpeEF0KGksIG1hdHNbaV0pO1xuICAgIGlmIChjb2xzKSB7XG4gICAgICAvLyBzZXRDb2xvckF0IE1VTFRJUExJRVMgd2l0aCBtYXRlcmlhbC5jb2xvciwgc28gYW4gaW5zdGFuY2VkIG1hdGVyaWFsIGNhcnJ5aW5nIHBlci1pbnN0YW5jZVxuICAgICAgLy8gdG9uZXMgbXVzdCBiZSB3aGl0ZSBvciBldmVyeSB0b25lIGNvbWVzIG91dCBkYXJrZW5lZCBieSB0aGUgYmFzZS5cbiAgICAgIGNvbnN0IGMgPSBuZXcgVEhSRUUuQ29sb3IoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29scy5sZW5ndGg7IGkrKykgaW5zdC5zZXRDb2xvckF0KGksIGMuc2V0SGV4KGNvbHNbaV0pKTtcbiAgICAgIGlmIChpbnN0Lmluc3RhbmNlQ29sb3IpIGluc3QuaW5zdGFuY2VDb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIGluc3QuaW5zdGFuY2VNYXRyaXgubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIG5vZGUuYWRkKGluc3QpOyByb290LmFkZChub2RlKTtcbiAgICBub2Rlc1tpZF0gPSBub2RlOyBtZXNoZXNbaWRdID0gaW5zdCBhcyB1bmtub3duIGFzIFRIUkVFLk1lc2g7IGNvbGxpZGVyc1tpZF0gPSBudWxsO1xuICAgIHJldHVybiBpbnN0O1xuICB9XG4gIC8qKiBGb3VyIGluc3RhbmNlcyBhdCA5MC1kZWdyZWUgeWF3IGFib3V0IHRoZSBheGlzIC0tIHRoZSBjb3JuZXIvZmFjZSByZXBldGl0aW9uIHRoYXQgZXZlcnlcbiAgICogIGJ1aWxkaW5nIGluIHRoaXMgc2V0IHVzZXMgZm9yIG5pY2hlcywgZmluaWFscywgYm91bmRhcnkgc3RvbmVzIGFuZCBjb3JuZXIgZG9tZXMuICovXG4gIGZ1bmN0aW9uIHF1YWQocmFkaXVzOiBudW1iZXIsIHk6IG51bWJlciwgcGhhc2UgPSAwKTogVEhSRUUuTWF0cml4NFtdIHtcbiAgICByZXR1cm4gWzAsIDEsIDIsIDNdLm1hcCgoaSkgPT4ge1xuICAgICAgY29uc3QgYSA9IHBoYXNlICsgaSAqIE1hdGguUEkgLyAyO1xuICAgICAgcmV0dXJuIG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoTWF0aC5zaW4oYSkgKiByYWRpdXMsIHksIE1hdGguY29zKGEpICogcmFkaXVzKSxcbiAgICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tQXhpc0FuZ2xlKG5ldyBUSFJFRS5WZWN0b3IzKDAsIDEsIDApLCBhKSxcbiAgICAgICAgbmV3IFRIUkVFLlZlY3RvcjMoMSwgMSwgMSkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgRyA9IENPTkZJRy5nZW9tZXRyeSBhcyBhbnk7XG5cbiAgLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBtb3RvcmN5Y2xlIChzaGFyZWQgdGVtcGxhdGUpICovXG4gIGNvbnN0IEIgPSBHLmJpa2UgYXMgYW55O1xuICBjb25zdCBveCA9IEIueCA/PyAwOyAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGJpa2UncyBjZW50cmVsaW5lIGluIHggKGEgc2lkZWNhciBvZmZzZXRzIGl0KVxuICBjb25zdCBveiA9IEIueiA/PyAwOyAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGFsb25nIHosIHNvIGEgcmlnIGNhbiBiZSByZS1jZW50cmVkIG9uIGl0cyBvcmlnaW5cbiAgY29uc3QgclcgPSBCLnIsIHJpbVIgPSBCLnJpbSwgaHcgPSBCLmhhbGZXO1xuICBjb25zdCB6RiA9IEIuekYsIHpSID0gQi56UjtcbiAgY29uc3QgUCA9IEIucGFpbnRIZXgsIENIID0gQi5jaHJvbWVIZXggPz8gMHhiOWJjYmYsIERLID0gQi5kYXJrSGV4ID8/IDB4NGE0NzQyO1xuXG4gIC8vIFBBSU5URUQgQk9EWVdPUks6IGxlZyBzaGllbGQsIGZyb250IGZlbmRlciwgcmVhciBib2R5LCB0YW5rL3N0ZXAtdGhyb3VnaCBjb3ZlciAtLSBvbmUgbWVyZ2UuXG4gIGNvbnN0IHBhaW50R2VvczogVEhSRUUuQnVmZmVyR2VvbWV0cnlbXSA9IFtdO1xuICBmb3IgKGNvbnN0IGV4IG9mIChCLnBhaW50RXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZyA9IHNpZGVFeHRydWRlKGV4LnBvbHksIGV4LndpZHRoLCBleC5zaGFwZSA/PyB7fSk7IGlmIChleC54KSBnLnRyYW5zbGF0ZShleC54LCAwLCAwKTtcbiAgICBnLnRyYW5zbGF0ZShveCwgMCwgb3opOyBwYWludEdlb3MucHVzaCh0aW50R2VvKGcsIGV4LmhleCA/PyBQKSk7XG4gIH1cbiAgZm9yIChjb25zdCBiIG9mIChCLnBhaW50Qm94ZXMgPz8gW10pIGFzIG51bWJlcltdW10pIHsgY29uc3QgZyA9IHJib3goYi5zbGljZSgxKSk7IGcudHJhbnNsYXRlKG94LCAwLCBveik7IHBhaW50R2Vvcy5wdXNoKHRpbnRHZW8oZywgYlswXSkpOyB9XG4gIGZvciAoY29uc3QgdCBvZiAoQi5wYWludFR1YmVzID8/IFtdKSBhcyBhbnlbXSkgeyBjb25zdCBnID0gdHViZSh0LnB0cy5tYXAoKHA6IG51bWJlcltdKSA9PiBbcFswXSArIG94LCBwWzFdLCBwWzJdICsgb3pdKSwgdC5yLCB0LnNlZyA/PyA4LCB1bmRlZmluZWQsIHQub3BlbiA/PyBmYWxzZSk7IHBhaW50R2Vvcy5wdXNoKHRpbnRHZW8oZywgdC5oZXggPz8gUCkpOyB9XG4gIGNvbnN0IGJvZHlHZW8gPSBoZWlnaHRVVihtZXJnZUdlb3MocGFpbnRHZW9zKSwgRy5tdWRTY2FsZSA/PyAxLjIpO1xuICBhZGQoJ2JvZHknLCBCLmJvZHlOYW1lID8/ICdCb2R5d29yaycsIGJvZHlHZW8sICdwYWludCcpO1xuICBpZiAoRy5jb2xsaWRlcikgY29sbGlkZXJzWydib2R5J10gPSBHLmNvbGxpZGVyO1xuXG4gIC8vIEZSQU1FLCBGT1JLUywgQkFSUywgRU5HSU5FLCBTRUFULCBSQUNLLCBMQU1QUyAtLSBldmVyeSB0b25lIGEgdmVydGV4IGNvbG91ciBvbiBvbmUgd2hpdGUgdHJpbS5cbiAgY29uc3QgdHJpbUdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3Qgc2hpZnQgPSAocHRzOiBudW1iZXJbXVtdKSA9PiBwdHMubWFwKChwKSA9PiBbcFswXSArIG94LCBwWzFdLCBwWzJdICsgb3pdKTtcbiAgZm9yIChjb25zdCB0IG9mIChCLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgdHJpbUdlb3MucHVzaCh0dWJlKHNoaWZ0KHQucHRzKSwgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCA/PyBDSCwgdC5vcGVuID8/IGZhbHNlKSk7XG4gIGNvbnN0IHRiOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAoY29uc3QgYiBvZiAoQi50cmltID8/IFtdKSBhcyBudW1iZXJbXVtdKSB0Yi5wdXNoKFtiWzBdLCBiWzFdICsgb3gsIGJbMl0sIGJbM10gKyBveiwgLi4uYi5zbGljZSg0KV0pO1xuICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoQi50cmltTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSB0Yi5wdXNoKFtiWzBdLCBiWzFdICsgb3gsIGJbMl0sIGJbM10gKyBveiwgLi4uYi5zbGljZSg0KV0pO1xuICBpZiAodGIubGVuZ3RoKSB0cmltR2Vvcy5wdXNoKHRpbnRlZEJveGVzKHRiKSk7XG4gIGZvciAoY29uc3QgYyBvZiAoQi5jeWxzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShjLnJ0LCBjLnJiLCBjLmgsIGMuc2VnID8/IDEyKTtcbiAgICBpZiAoYy5yeCkgZy5yb3RhdGVYKGMucngpOyBpZiAoYy5yeikgZy5yb3RhdGVaKGMucnopO1xuICAgIGcudHJhbnNsYXRlKGMuYXRbMF0gKyBveCwgYy5hdFsxXSwgYy5hdFsyXSArIG96KTtcbiAgICB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oZywgYy5oZXggPz8gREspKTtcbiAgfVxuICAvLyBleHRyYSBsb29zZSBsYXRoZXMgKGEgc2lkZWNhcidzIHRoaXJkIHdoZWVsLCBhIHRyYWlsZXIncyBzbWFsbCB3aGVlbHMpIG1lcmdlZCBpbnRvIHRoZSB0cmltXG4gIGZvciAoY29uc3QgdyBvZiAoRy5sb29zZVdoZWVscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnID0gbWVyZ2VHZW9zKFt3aGVlbEdlbyh3LnIsIHcucmltLCB3LmhhbGZXLCB3LnNlZyA/PyAxOCwgdy50eXJlSGV4LCB3LnJpbUhleCwgdy5kaXNoID8/IDAuNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgLi4uKHcuc3Bva2VzID8gW3Nwb2tlcyh3LnJpbSAqIDAuMjgsIHcucmltICogMC45OCwgdy5oYWxmVywgdy5zcG9rZXMsIHcuc3Bva2VIZXggPz8gQ0gpXSA6IFtdKV0pO1xuICAgIGcudHJhbnNsYXRlKHcuYXRbMF0sIHcuYXRbMV0sIHcuYXRbMl0pOyB0cmltR2Vvcy5wdXNoKGcpO1xuICB9XG4gIC8vIGxhdGhlcyBvbiB0aGUgYmlrZSAoYSBoZWFkbGFtcCBuYWNlbGxlLCBhIGJlemVsKSBhbmQgb24gdGhlIHJpZzogW3JhZGl1cywgYXhpYWxdIHByb2ZpbGVzXG4gIC8vIHJldm9sdmVkIGFib3V0IFksIHRoZW4gcm90YXRlZCBvbnRvIHRoZWlyIGF4aXMgYW5kIHBsYWNlZFxuICBmb3IgKGNvbnN0IGwgb2YgWy4uLigoQi5sYXRoZXMgPz8gW10pIGFzIGFueVtdKS5tYXAoKGw6IGFueSkgPT4gKHsgLi4ubCwgYXQ6IFtsLmF0WzBdICsgb3gsIGwuYXRbMV0sIGwuYXRbMl0gKyBvel0gfSkpLCAuLi4oKEcubGF0aGVzID8/IFtdKSBhcyBhbnlbXSldKSB7XG4gICAgY29uc3QgZyA9IGxhdGhlKGwucHRzLCBsLnNlZyA/PyAxMik7XG4gICAgaWYgKGwucngpIGcucm90YXRlWChsLnJ4KTsgaWYgKGwucnkpIGcucm90YXRlWShsLnJ5KTsgaWYgKGwucnopIGcucm90YXRlWihsLnJ6KTtcbiAgICBnLnRyYW5zbGF0ZShsLmF0WzBdLCBsLmF0WzFdLCBsLmF0WzJdKTsgdHJpbUdlb3MucHVzaCh0aW50R2VvKGcsIGwuaGV4ID8/IENIKSk7XG4gIH1cbiAgLy8gZHJhcGVkIHNoZWV0cyAoYSBjYW52YXMgY2Fub3B5KSBhcyBoZWlnaHQgZ3JpZHMgLS0gY2xvdGgsIG5vdCBhIHNsYWJcbiAgZm9yIChjb25zdCBzIG9mIChHLnNoZWV0cyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godGludEdlbyhzaGVldChzKSwgcy5oZXgpKTtcbiAgZm9yIChjb25zdCB0IG9mIChHLnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgdHJpbUdlb3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4LCB0Lm9wZW4gPz8gZmFsc2UpKTtcbiAgZm9yIChjb25zdCBiIG9mIChHLnRyaW0gPz8gW10pIGFzIG51bWJlcltdW10pIHRyaW1HZW9zLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChHLnRyaW1NaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIHRyaW1HZW9zLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gIGFkZCgndHJpbScsIEIudHJpbU5hbWUgPz8gJ0ZyYW1lLCBmb3JrcywgZW5naW5lLCBzZWF0IGFuZCBmaXR0aW5ncycsIG1lcmdlR2Vvcyh0cmltR2VvcyksICd0cmltJyk7XG5cbiAgLy8gV0hFRUxTOiBvbmUgc3Bva2VkIGxhdGhlLCBpbnN0YW5jZWQgYXQgZXZlcnkgaHViIHRoZSBjZmcgbGlzdHMsIGVhY2ggYSBuYW1lZCBwaXZvdC5cbiAgLy8gYG9wZW5gOiBhIHdpcmUgd2hlZWwgd2l0aCBkYXlsaWdodCB0aHJvdWdoIGl0ICh0eXJlIHJpbmcsIHJpbSByaW5nLCBkcnVtIGh1YiwgcHJpc20gc3Bva2VzKSBhbmRcbiAgLy8gdHJlYWQgVVZzIGZvciBhIHR5cmUgdGlsZSBvbiBgQi53aGVlbE1hdGVyaWFsYDsgb3RoZXJ3aXNlIHRoZSBjbG9zZWQgZGlzaGVkIGxhdGhlLlxuICBjb25zdCB3aGVlbEcgPSBCLm9wZW5cbiAgICA/IG9wZW5XaGVlbEdlbyhyVywgcmltUiwgaHcsIEIuc2VnID8/IDIwLCB7IC4uLkIub3BlbiwgdHlyZUhleDogQi50eXJlSGV4LCByaW1IZXg6IEIucmltSGV4LCBzcG9rZXM6IEIuc3Bva2VzLCBzcG9rZUhleDogQi5zcG9rZUhleCA/PyBDSCB9KVxuICAgIDogbWVyZ2VHZW9zKFt3aGVlbEdlbyhyVywgcmltUiwgaHcsIEIuc2VnID8/IDIwLCBCLnR5cmVIZXgsIEIucmltSGV4LCBCLmRpc2ggPz8gMC41KSxcbiAgICAgICAgICAgICAgICAgLi4uKEIuc3Bva2VzID8gW3Nwb2tlcyhyaW1SICogMC4yOCwgcmltUiAqIDAuOTgsIGh3LCBCLnNwb2tlcywgQi5zcG9rZUhleCA/PyBDSCldIDogW10pXSk7XG4gIGNvbnN0IHdoZWVsTWF0czogVEhSRUUuTWF0cml4NFtdID0gW107XG4gIGZvciAoY29uc3QgcCBvZiBCLnBvc2l0aW9ucyBhcyBudW1iZXJbXVtdKSB7XG4gICAgd2hlZWxNYXRzLnB1c2gobmV3IFRIUkVFLk1hdHJpeDQoKS5jb21wb3NlKG5ldyBUSFJFRS5WZWN0b3IzKHBbMF0sIHBbMV0sIHBbMl0pLFxuICAgICAgbmV3IFRIUkVFLlF1YXRlcm5pb24oKSwgbmV3IFRIUkVFLlZlY3RvcjMocFszXSA/PyAxLCBwWzNdID8/IDEsIHBbM10gPz8gMSkpKTtcbiAgfVxuICBhZGRJbnN0KCd3aGVlbHMnLCAnV2hlZWxzJywgd2hlZWxHLCBCLndoZWVsTWF0ZXJpYWwgPz8gJ3RyaW0nLCB3aGVlbE1hdHMpO1xuXG4gIC8vIEVYVFJBIGNvbXBvbmVudHMgKGEgc2lkZWNhciBib3gsIGEgY2FudmFzIGNhbm9weSwgYSB0dWstdHVrIGNhYmluKSAtLSBvd24gbWF0ZXJpYWwgZWFjaC5cbiAgZm9yIChjb25zdCBleCBvZiAoRy5leHRyYXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgKGV4LmJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSBncy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICAgIGZvciAoY29uc3QgYiBvZiBtaXJyb3JYKChleC5ib3hlc01pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IHQgb2YgKGV4LnR1YmVzID8/IFtdKSBhcyBhbnlbXSkgZ3MucHVzaCh0dWJlKHQucHRzLCB0LnIsIHQuc2VnID8/IDgsIHQuaGV4KSk7XG4gICAgZm9yIChjb25zdCBlIG9mIChleC5leHRydWRlcyA/PyBbXSkgYXMgYW55W10pIHsgY29uc3QgZyA9IHNpZGVFeHRydWRlKGUucG9seSwgZS53aWR0aCwgZS5zaGFwZSA/PyB7fSk7IGlmIChlLngpIGcudHJhbnNsYXRlKGUueCwgMCwgMCk7IGdzLnB1c2godGludEdlbyhnLCBlLmhleCkpOyB9XG4gICAgZm9yIChjb25zdCBjIG9mIChleC5jeWxzID8/IFtdKSBhcyBhbnlbXSkgeyBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoYy5ydCwgYy5yYiwgYy5oLCBjLnNlZyA/PyAxMik7IGlmIChjLnJ4KSBnLnJvdGF0ZVgoYy5yeCk7IGlmIChjLnJ6KSBnLnJvdGF0ZVooYy5yeik7IGcudHJhbnNsYXRlKGMuYXRbMF0sIGMuYXRbMV0sIGMuYXRbMl0pOyBncy5wdXNoKHRpbnRHZW8oZywgYy5oZXgpKTsgfVxuICAgIGxldCBnID0gbWVyZ2VHZW9zKGdzKTtcbiAgICBpZiAoZXgudXYgPT09ICd3b3JsZCcpIGcgPSB3b3JsZFVWKGcsIGV4LnV2U2NhbGUgPz8gMSk7XG4gICAgaWYgKGV4LnV2ID09PSAnaGVpZ2h0JykgZyA9IGhlaWdodFVWKGcsIGV4LnV2U2NhbGUgPz8gMSk7XG4gICAgYWRkKGV4LmlkLCBleC5uYW1lLCBnLCBleC5tYXRlcmlhbCk7XG4gIH1cblxuICBmb3IgKGNvbnN0IHQgb2YgKENPTkZJRy50aWxlcyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBtYXQgPSBtYXRlcmlhbHNbdC5tYXRlcmlhbF07XG4gICAgaWYgKCFtYXQpIGNvbnRpbnVlO1xuICAgIGxldCB0ZXg6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsID0gbnVsbDtcbiAgICBpZiAodC5raW5kID09PSAnbXVkJykgdGV4ID0gbXVkVGlsZSh0LnNpemUgPz8gNTEyLCB0LmJhc2UsIHQuc2VlZCA/PyAxLCB0LmNvdmVyYWdlID8/IDAuMzMpO1xuICAgIGlmICh0LmtpbmQgPT09ICdkdXN0JykgdGV4ID0gZHVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5kdXN0LCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMwKTtcbiAgICBpZiAodC5raW5kID09PSAncGxhbmsnKSB0ZXggPSBwbGFua1RpbGUodC5zaXplID8/IDUxMiwgdC5ib2FyZHMgPz8gNiwgdC5zZWVkID8/IDUpO1xuICAgIGlmICh0LmtpbmQgPT09ICdydXN0JykgdGV4ID0gcnVzdFRpbGUodC5zaXplID8/IDUxMiwgdC5yYXRpbywgdC5zZWVkID8/IDcsIHQuZGVuc2l0eSA/PyA5MCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3R5cmUnKSB0ZXggPSB0eXJlVGlsZSh0LnNpemUgPz8gMjU2LCB0LnNlZWQgPz8gMjksIHQpO1xuICAgIGJpbmRUaWxlKG1hdCwgdGV4LCB0LmJ1bXAgPz8gMCk7XG4gIH1cblxuICByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgPSB7IG5vZGVzLCBtZXNoZXMsIHNvY2tldHMsIGNvbGxpZGVycywgZGVzdHJ1Y3Rpb25Hcm91cHMgfSBzYXRpc2ZpZXMgUHJvY2VkdXJhbE1vZGVsUnVudGltZTtcbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB0aGFpa2l0IGVudHJ5IHBvaW50ICovXG5cbi8qKlxuICogdGhhaWtpdCBlbnRyeSBwb2ludC4gVGhlIHJlZ2lzdHJ5IHJlY29yZHMgYGNyZWF0ZU9iamVjdE1vZGVsYCBhcyB0aGUgZXhwb3J0IGFuZCBjYWxscyBpdCB3aXRoXG4gKiAoc3BlYywgb3B0aW9ucykuIGBzcGVjYCBpcyBhY2NlcHRlZCBhbmQgYXR0YWNoZWQgZm9yIGhvc3Qtc2lkZSBpbnNwZWN0aW9uIC0tIHRoZSByZWNvbnN0cnVjdGlvblxuICogZGF0YSBhbHJlYWR5IGxpdmVzIGluIHRoaXMgbW9kdWxlLCBzbyBpdCBpcyBkZWxpYmVyYXRlbHkgbm90IGEgc2Vjb25kIHNvdXJjZSBvZiB0cnV0aC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU9iamVjdE1vZGVsKHNwZWM/OiB1bmtub3duLCBvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVTaWRlY2FyTW90b3JjeWNsZU1vZGVsKG9wdGlvbnMpO1xuICBpZiAoc3BlYyAhPT0gdW5kZWZpbmVkICYmIHNwZWMgIT09IG51bGwpIHJvb3QudXNlckRhdGEuc2N1bHB0U3BlYyA9IHNwZWM7XG5cbiAgY29uc3QgcnQgPSByb290LnVzZXJEYXRhLnNjdWxwdFJ1bnRpbWUgYXMgUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZDtcbiAgaWYgKHJ0KSB7XG4gICAgY29uc3Qgbm9kZXMgPSAocnQubm9kZXMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPjtcblxuICAgIC8vIFBpdm90czogdGhlIHJvb3QsIHBsdXMgT05FIFBFUiBXSEVFTCAoYW5kIGFueSBvdGhlciBtZWNoYW5pc20gQ09ORklHLnBpdm90cyBuYW1lcyAtLSBhXG4gICAgLy8gc3RlZXJpbmcgaGVhZCwgYSBjYW5vcHkgc3RheSkuIEEgdmVoaWNsZSdzIHdoZWVscyBnZW51aW5lbHkgdHVybiwgc28gZWFjaCBvbmUgaXMgYSBwcm9taXNlXG4gICAgLy8ga2VwdDogdGhlIHBpdm90IHNpdHMgYXQgdGhlIGh1YiwgaXRzIGF4aXMgaXMgdGhlIGF4bGUsIGFuZCBgaW5zdGFuY2VgIG5hbWVzIHdoaWNoIGluc3RhbmNlXG4gICAgLy8gb2YgdGhlIHdoZWVsIEluc3RhbmNlZE1lc2ggaXQgZHJpdmVzLiBOb3RoaW5nIGVsc2Ugb24gdGhlIHByb3AgbW92ZXMgLS0gdGhlIGRvb3JzIGFyZSBwYXJ0XG4gICAgLy8gb2YgdGhlIGJvZHkgc2hlbGwgLS0gc28gbm90aGluZyBlbHNlIGdldHMgYW4gYXhpcy5cbiAgICBjb25zdCBwaXZvdHM6IFRIUkVFLk9iamVjdDNEW10gPSBbXTtcbiAgICBjb25zdCByb290UGl2b3QgPSBuZXcgVEhSRUUuT2JqZWN0M0QoKTtcbiAgICByb290UGl2b3QubmFtZSA9ICdyb290JztcbiAgICByb290UGl2b3QucG9zaXRpb24uc2V0KDAsIDAsIDApO1xuICAgIHJvb3RQaXZvdC51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgYW5pbWF0aW9uUm9sZTogJ3Jvb3QnLFxuICAgICAgcGl2b3Q6IHsgbW9kZTogJ2N1c3RvbScsIGxvY2FsUG9zaXRpb246IFswLCAwLCAwXSwgYXhpczogWzAsIDEsIDBdLCBuYW1lOiAncm9vdCcgfSxcbiAgICB9O1xuICAgIHJvb3QuYWRkKHJvb3RQaXZvdCk7XG4gICAgcGl2b3RzLnB1c2gocm9vdFBpdm90KTtcbiAgICBmb3IgKGNvbnN0IHB2IG9mIChDT05GSUcucGl2b3RzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgICAgY29uc3QgbyA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgICAgby5uYW1lID0gcHYubmFtZTtcbiAgICAgIG8ucG9zaXRpb24uc2V0KHB2LnBvc2l0aW9uWzBdLCBwdi5wb3NpdGlvblsxXSwgcHYucG9zaXRpb25bMl0pO1xuICAgICAgby51c2VyRGF0YS5hY3Rpb25Qcm9maWxlID0ge1xuICAgICAgICBhbmltYXRpb25Sb2xlOiAnY2hpbGQnLFxuICAgICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogcHYucG9zaXRpb24sIGF4aXM6IHB2LmF4aXMsIG5hbWU6IHB2Lm5hbWUsXG4gICAgICAgICAgICAgICAgIGNvbXBvbmVudDogcHYuY29tcG9uZW50LCBpbnN0YW5jZTogcHYuaW5zdGFuY2UgPz8gbnVsbCwgbm90ZXM6IHB2Lm5vdGUgPz8gJycgfSxcbiAgICAgIH07XG4gICAgICByb290LmFkZChvKTtcbiAgICAgIHBpdm90cy5wdXNoKG8pO1xuICAgIH1cblxuICAgIC8vIFNvY2tldHM6IE5PTkUgdW5sZXNzIENPTkZJRy5zb2NrZXRzIG5hbWVzIG9uZS4gTm90aGluZyBhdHRhY2hlcyB0byBhIHZlaGljbGUgaW4gdGhpcyBraXRcbiAgICAvLyBhbmQgbm90aGluZyBpcyBlbWl0dGVkIGZyb20gaXQuXG5cbiAgICAvLyBDb2xsaWRlcnMgYXJlIHBsYWluIERBVEEsIG5vdCBPYmplY3QzRCwgc28gdGhleSBjYXJyeSBubyAubmFtZSBvZiB0aGVpciBvd24uIEdpdmUgZWFjaCB0aGVcbiAgICAvLyBpZCBvZiB0aGUgY29tcG9uZW50IGl0IG93bnMgYW5kIGRyb3AgdGhlIGVtcHR5IG9uZXMgLS0gYSBuYW1lbGVzcyBlbXB0eSBwcm94eSBpbiB0aGVcbiAgICAvLyBydW50aW1lIGxpc3QgcmVhZHMgYXMgYSBwaHlzaWNzIHNoYXBlIHRoYXQgZXhpc3RzIGFuZCBkb2VzIG5vdGhpbmcuXG4gICAgY29uc3QgY29sbGlkZXJzID0gT2JqZWN0LmVudHJpZXMoKHJ0LmNvbGxpZGVycyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgYW55PilcbiAgICAgIC5maWx0ZXIoKFssIGNdKSA9PiBjICYmIHR5cGVvZiBjID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyhjKS5sZW5ndGggPiAwKVxuICAgICAgLm1hcCgoW2lkLCBjXSkgPT4gKHsgbmFtZTogaWQsIC4uLihjIGFzIG9iamVjdCkgfSkpO1xuXG4gICAgLy8gRGVzdHJ1Y3Rpb24gZ3JvdXBzOiB0aGlzIHByb3AgZGVjbGFyZXMgTk9ORSwgYW5kIHByb21vdGlvbiBjaGVja3MgYnVpbHQgYWdhaW5zdCBkZWNsYXJlZCBhc1xuICAgIC8vIGFuIGVxdWFsaXR5IGluIEJPVEggZGlyZWN0aW9ucy4gRGVyaXZlZCByYXRoZXIgdGhhbiBhc3N1bWVkIGVtcHR5LCBzbyBhIGNvbXBvbmVudCB0aGF0XG4gICAgLy8gc29tZWhvdyBjYXJyaWVkIGEgZnJhY3R1cmVHcm91cCBmYWlscyB0aGUgZ2F0ZSBsb3VkbHkgaW5zdGVhZCBvZiBiZWluZyBkcm9wcGVkIGhlcmUuXG4gICAgY29uc3QgZ3JvdXBlZCA9IG5ldyBNYXA8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPigpO1xuICAgIGZvciAoY29uc3QgW25hbWUsIG1lbWJlcnNdIG9mIE9iamVjdC5lbnRyaWVzKChydC5kZXN0cnVjdGlvbkdyb3VwcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0RbXT4pKSB7XG4gICAgICBncm91cGVkLnNldChuYW1lLCBbLi4ubWVtYmVyc10pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IG5vZGUgb2YgT2JqZWN0LnZhbHVlcyhub2RlcykpIHtcbiAgICAgIGNvbnN0IGdyb3VwID0gKG5vZGUgYXMgYW55KT8udXNlckRhdGE/LmFjdGlvblByb2ZpbGU/LmRlc3RydWN0aW9uPy5mcmFjdHVyZUdyb3VwO1xuICAgICAgaWYgKHR5cGVvZiBncm91cCAhPT0gJ3N0cmluZycgfHwgIWdyb3VwKSBjb250aW51ZTtcbiAgICAgIGlmICghZ3JvdXBlZC5oYXMoZ3JvdXApKSBncm91cGVkLnNldChncm91cCwgW10pO1xuICAgICAgZ3JvdXBlZC5nZXQoZ3JvdXApIS5wdXNoKG5vZGUpO1xuICAgIH1cblxuICAgIHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSA9IHtcbiAgICAgIC4uLnJ0LFxuICAgICAgLy8gQSBDT1VOVCwgbm90IHRoZSBSZWNvcmQuIHRoYWlraXQncyBoYXJuZXNzIHJldHVybnMgdGhpcyBmaWVsZCBzdHJhaWdodCBhY3Jvc3MgdGhlXG4gICAgICAvLyBwdXBwZXRlZXIgYnJpZGdlIGFuZCBpdHMgcmVnaXN0cnkgZmllbGQgaXMgYSBudW1iZXI7IGEgUmVjb3JkIG9mIE9iamVjdDNEIGlzIGNpcmN1bGFyIGFuZFxuICAgICAgLy8gZmFpbHMgdG8gc2VyaWFsaXNlLCB3aGljaCBzdXJmYWNlcyBhcyB0aGUgd2hvbGUgc3RhdHMgb2JqZWN0IGFycml2aW5nIHVuZGVmaW5lZC4gVGhlXG4gICAgICAvLyBSZWNvcmQgc3RheXMgcmVhY2hhYmxlIHVuZGVyIGJ5SWQuXG4gICAgICBub2RlczogT2JqZWN0LmtleXMobm9kZXMpLmxlbmd0aCxcbiAgICAgIHBpdm90cyxcbiAgICAgIHNvY2tldHM6IE9iamVjdC52YWx1ZXMoKHJ0LnNvY2tldHMgPz8ge30pIGFzIFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEPiksXG4gICAgICBjb2xsaWRlcnMsXG4gICAgICBkZXN0cnVjdGlvbkdyb3VwczogWy4uLmdyb3VwZWQuZW50cmllcygpXS5tYXAoKFtuYW1lLCBtZW1iZXJzXSkgPT4gKHsgbmFtZSwgbWVtYmVycyB9KSksXG4gICAgICBieUlkOiB7IG5vZGVzLCBtZXNoZXM6IHJ0Lm1lc2hlcyA/PyB7fSwgc29ja2V0czogcnQuc29ja2V0cyA/PyB7fSB9LFxuICAgIH07XG4gIH1cbiAgcmV0dXJuIHJvb3Q7XG59XG5cbi8qKlxuICogVGhlIG9uZS1hcmd1bWVudCBlbnRyeSBwb2ludDogdmliZTNkJ3MgY29udHJhY3QsIGFuZCBpbWcydGhyZWVqcydzIG93bi5cbiAqXG4gKiBgY3JlYXRlT2JqZWN0TW9kZWxgIGFib3ZlIGtlZXBzIHRoYWlraXQncyBoaXN0b3JpY2FsIChzcGVjLCBvcHRpb25zKSBzaGFwZSBzb1xuICogdGhlIGhhcm5lc3MsIHRoZSBsZXZlbCBlZGl0b3IgYW5kIHRoZSBOb2RlLXNpZGUgZ2F0ZXMgY2Fycnkgb24gdW5jaGFuZ2VkLlxuICogYHNwZWNgIGhhcyBuZXZlciBiZWVuIHBhc3NlZCBieSBhbnkgY2FsbGVyIC0tIGl0IGlzIGluc3BlY3Rpb24gZGF0YSB0aGF0IGlzXG4gKiBhbHJlYWR5IGJha2VkIGludG8gdGhpcyBtb2R1bGUgLS0gc28gdGhpcyBpcyB0aGUgaG9uZXN0IHNpZ25hdHVyZSwgYW5kIGl0IGlzXG4gKiB3aGF0IGEgdmliZTNkIGNvbnN1bWVyIGluc3RhbGxzIGFuZCBjYWxscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZU1vZGVsKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7fSk6IFRIUkVFLkdyb3VwIHtcbiAgcmV0dXJuIGNyZWF0ZU9iamVjdE1vZGVsKHVuZGVmaW5lZCwgb3B0aW9ucyk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUErQ3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLElBQ0E7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1A7QUFBQSxNQUNFLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxNQUNSLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxRQUFRO0FBQUEsTUFDUixZQUFZO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxNQUNiLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsRUFDRjtBQUFBLEVBQ0EsWUFBWTtBQUFBLElBQ1YsWUFBWTtBQUFBLElBQ1osWUFBWTtBQUFBLE1BQ1YsU0FBUztBQUFBLE1BQ1QsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGVBQWU7QUFBQSxRQUNiO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsSUFDWDtBQUFBLElBQ0EsVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLEtBQUs7QUFBQSxRQUNMLFdBQVc7QUFBQSxVQUNUO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsT0FBTztBQUFBLE1BQ1Q7QUFBQSxJQUNGO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTjtBQUFBLFFBQ0U7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLElBQ0EsU0FBUztBQUFBLE1BQ1A7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0E7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0EsS0FBSztBQUFBLFFBQ0wsT0FBTztBQUFBLFFBQ1AsUUFBUTtBQUFBLE1BQ1Y7QUFBQSxNQUNBO0FBQUEsUUFDRSxPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBO0FBQUEsWUFDRTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFFBQ0Y7QUFBQSxRQUNBLEtBQUs7QUFBQSxRQUNMLE9BQU87QUFBQSxRQUNQLFFBQVE7QUFBQSxNQUNWO0FBQUEsTUFDQTtBQUFBLFFBQ0UsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQTtBQUFBLFlBQ0U7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQSxLQUFLO0FBQUEsUUFDTCxPQUFPO0FBQUEsUUFDUCxRQUFRO0FBQUEsTUFDVjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLEtBQUs7QUFBQSxNQUNMLE9BQU87QUFBQSxNQUNQLFNBQVM7QUFBQSxNQUNULE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLFVBQVU7QUFBQSxNQUNWLFdBQVc7QUFBQSxNQUNYLFVBQVU7QUFBQSxNQUNWLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxRQUNOLFNBQVM7QUFBQSxRQUNULFFBQVE7QUFBQSxRQUNSLFFBQVE7QUFBQSxRQUNSLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxRQUNWLFVBQVU7QUFBQSxNQUNaO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxNQUNqQixZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsTUFDYixXQUFXO0FBQUEsTUFDWCxZQUFZO0FBQUEsTUFDWixhQUFhO0FBQUEsUUFDWDtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGlCQUFpQjtBQUFBLFFBQ2Y7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsVUFDUCxTQUFTO0FBQUEsWUFDUCxVQUFVO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDUDtBQUFBLFVBQ0Y7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsS0FBSztBQUFBLFlBQ1A7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsS0FBSztBQUFBLFlBQ1A7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxRQUFRO0FBQUEsWUFDTjtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsVUFDVCxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxjQUFjO0FBQUEsUUFDWjtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUEsUUFDUDtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFD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
