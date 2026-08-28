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

// scratch/honda-wave/src/createObjectModel.ts
var createObjectModel_exports = {};
__export(createObjectModel_exports, {
  createHondaWaveModel: () => createHondaWaveModel,
  createObjectModel: () => createObjectModel
});
module.exports = __toCommonJS(createObjectModel_exports);
var THREE = __toESM(require("three"), 1);
var CONFIG = {
  "id": "honda-wave",
  "name": "Honda Wave",
  "exportName": "HondaWave",
  "envelope": "Envelope 0.71 x 1.25 x 1.92 m (proxy L:H:W 1 : 0.654 : 0.383, mirror tips), origin base-center, +Y up, +Z forward.\n * Budget (large): <=4000 triangles, <=8 draw calls, <=4 materials, <=8 unique geometries.",
  "materials": [
    {
      "id": "paint",
      "color": 16777215,
      "roughness": 0.4,
      "metalness": 0,
      "vertexColors": true
    },
    {
      "id": "trim",
      "color": 16777215,
      "roughness": 0.55,
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
      "material": "paint",
      "kind": "dust",
      "base": [
        1,
        1,
        1
      ],
      "dust": [
        0.72,
        0.7,
        0.66
      ],
      "seed": 61,
      "coverage": 0.25,
      "size": 256
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
      "dustAlpha": 0.32,
      "scuffs": 12,
      "bump": 0.08
    }
  ],
  "pivots": [
    {
      "name": "wheel-front",
      "position": [
        0,
        0.278,
        0.64
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
        0,
        0.278,
        -0.58
      ],
      "axis": [
        1,
        0,
        0
      ],
      "component": "wheels",
      "instance": 1,
      "note": "rear hub"
    }
  ],
  "geometry": {
    "mudScale": 1.2,
    "collider": {
      "shape": "convex",
      "localCenter": [
        0,
        0.625,
        -0.01
      ],
      "halfExtents": [
        0.355,
        0.625,
        0.956
      ],
      "notes": "Declared on the asset as convex: one hull over the whole machine."
    },
    "bike": {
      "x": 0,
      "r": 0.278,
      "rim": 0.216,
      "halfW": 0.038,
      "zF": 0.64,
      "zR": -0.58,
      "seg": 16,
      "spokes": 18,
      "tyreHex": 7235421,
      "rimHex": 11118498,
      "spokeHex": 11579049,
      "open": {
        "pitch": 0.05,
        "hubR": 0.082,
        "hubW": 0.1,
        "hubHex": 9077624,
        "capHex": 12172479,
        "spokeT": 6e-3
      },
      "wheelMaterial": "rubber",
      "paintHex": 3424088,
      "chromeHex": 12172479,
      "darkHex": 4867906,
      "bodyName": "Bodywork: leg shield, covers, fenders, cowl and seat",
      "positions": [
        [
          0,
          0.278,
          0.64
        ],
        [
          0,
          0.278,
          -0.58
        ]
      ],
      "paintExtrudes": [
        {
          "poly": [
            [
              0.56,
              0.3
            ],
            [
              0.575,
              0.4
            ],
            [
              0.555,
              0.54
            ],
            [
              0.505,
              0.68
            ],
            [
              0.44,
              0.8
            ],
            [
              0.4,
              0.87
            ],
            [
              0.3,
              0.87
            ],
            [
              0.33,
              0.79
            ],
            [
              0.38,
              0.68
            ],
            [
              0.43,
              0.54
            ],
            [
              0.455,
              0.4
            ],
            [
              0.45,
              0.3
            ]
          ],
          "width": 0.36,
          "shape": {
            "tumble": {
              "belt": 0.36,
              "roof": 0.87,
              "k": 0.28
            },
            "curveSegments": 8,
            "smooth": 34
          }
        },
        {
          "poly": [
            [
              0.055,
              0.47
            ],
            [
              0.08,
              0.56
            ],
            [
              0.015,
              0.66
            ],
            [
              -0.21,
              0.672
            ],
            [
              -0.38,
              0.646
            ],
            [
              -0.47,
              0.596
            ],
            [
              -0.455,
              0.53
            ],
            [
              -0.29,
              0.498
            ],
            [
              -0.02,
              0.482
            ]
          ],
          "width": 0.225,
          "shape": {
            "tumble": {
              "belt": 0.47,
              "roof": 0.672,
              "k": 0.24
            },
            "smooth": 34
          }
        },
        {
          "poly": [
            [
              0.11,
              0.688
            ],
            [
              0.092,
              0.742
            ],
            [
              -0.02,
              0.755
            ],
            [
              -0.34,
              0.752
            ],
            [
              -0.45,
              0.732
            ],
            [
              -0.458,
              0.696
            ],
            [
              -0.3,
              0.676
            ],
            [
              -0.05,
              0.674
            ]
          ],
          "width": 0.285,
          "hex": 5000270,
          "shape": {
            "tumble": {
              "belt": 0.688,
              "roof": 0.755,
              "k": 0.3
            },
            "smooth": 34
          }
        },
        {
          "poly": [
            [
              0.9529,
              0.234
            ],
            [
              0.9556,
              0.2941
            ],
            [
              0.9468,
              0.3536
            ],
            [
              0.9269,
              0.4104
            ],
            [
              0.8966,
              0.4624
            ],
            [
              0.8571,
              0.5077
            ],
            [
              0.8096,
              0.5446
            ],
            [
              0.756,
              0.5719
            ],
            [
              0.6982,
              0.5886
            ],
            [
              0.6383,
              0.594
            ],
            [
              0.5785,
              0.5879
            ],
            [
              0.5208,
              0.5707
            ],
            [
              0.4675,
              0.5428
            ],
            [
              0.4205,
              0.5053
            ],
            [
              0.4344,
              0.4909
            ],
            [
              0.4785,
              0.526
            ],
            [
              0.5284,
              0.5521
            ],
            [
              0.5824,
              0.5683
            ],
            [
              0.6384,
              0.574
            ],
            [
              0.6945,
              0.5689
            ],
            [
              0.7487,
              0.5533
            ],
            [
              0.7989,
              0.5278
            ],
            [
              0.8433,
              0.4931
            ],
            [
              0.8804,
              0.4507
            ],
            [
              0.9088,
              0.402
            ],
            [
              0.9274,
              0.3488
            ],
            [
              0.9356,
              0.2931
            ],
            [
              0.9331,
              0.2368
            ]
          ],
          "width": 0.13,
          "shape": {
            "smooth": 34
          }
        },
        {
          "poly": [
            [
              -0.4671,
              0.5881
            ],
            [
              -0.5279,
              0.6039
            ],
            [
              -0.5905,
              0.6078
            ],
            [
              -0.6527,
              0.5999
            ],
            [
              -0.7123,
              0.5803
            ],
            [
              -0.7671,
              0.5498
            ],
            [
              -0.8152,
              0.5095
            ],
            [
              -0.8547,
              0.4608
            ],
            [
              -0.8844,
              0.4055
            ],
            [
              -0.903,
              0.3456
            ],
            [
              -0.91,
              0.2832
            ],
            [
              -0.905,
              0.2207
            ],
            [
              -0.8754,
              0.2259
            ],
            [
              -0.88,
              0.2828
            ],
            [
              -0.8736,
              0.3394
            ],
            [
              -0.8567,
              0.3939
            ],
            [
              -0.8298,
              0.4442
            ],
            [
              -0.7938,
              0.4884
            ],
            [
              -0.7501,
              0.5251
            ],
            [
              -0.7003,
              0.5528
            ],
            [
              -0.6461,
              0.5706
            ],
            [
              -0.5895,
              0.5778
            ],
            [
              -0.5326,
              0.5742
            ],
            [
              -0.4774,
              0.5599
            ]
          ],
          "width": 0.155,
          "shape": {
            "smooth": 34
          }
        },
        {
          "poly": [
            [
              0.46,
              0.87
            ],
            [
              0.47,
              0.95
            ],
            [
              0.43,
              1.005
            ],
            [
              0.3,
              1.015
            ],
            [
              0.24,
              0.96
            ],
            [
              0.26,
              0.87
            ]
          ],
          "width": 0.28,
          "shape": {
            "tumble": {
              "belt": 0.87,
              "roof": 1.015,
              "k": 0.25
            },
            "smooth": 34
          }
        }
      ],
      "paintBoxes": [
        [
          3424088,
          0,
          0.3,
          0.175,
          0.25,
          0.036,
          0.31
        ],
        [
          3424088,
          0,
          0.315,
          -0.03,
          0.055,
          0.035,
          0.3
        ],
        [
          14212576,
          0.103,
          0.588,
          -0.2,
          6e-3,
          0.02,
          0.38
        ],
        [
          14212576,
          -0.103,
          0.588,
          -0.2,
          6e-3,
          0.02,
          0.38
        ],
        [
          14212576,
          0.108,
          0.55,
          -0.2,
          6e-3,
          0.014,
          0.38
        ],
        [
          14212576,
          -0.108,
          0.55,
          -0.2,
          6e-3,
          0.014,
          0.38
        ],
        [
          14212576,
          0.07,
          0.632,
          -0.47,
          6e-3,
          0.016,
          0.18
        ],
        [
          14212576,
          -0.07,
          0.632,
          -0.47,
          6e-3,
          0.016,
          0.18
        ]
      ],
      "paintTubes": [
        {
          "pts": [
            [
              0.075,
              0.3,
              -0.1
            ],
            [
              0.075,
              0.278,
              -0.58
            ]
          ],
          "r": 0.02,
          "open": true
        },
        {
          "pts": [
            [
              -0.075,
              0.3,
              -0.1
            ],
            [
              -0.075,
              0.278,
              -0.58
            ]
          ],
          "r": 0.02,
          "open": true
        },
        {
          "pts": [
            [
              0.075,
              0.3,
              -0.1
            ],
            [
              -0.075,
              0.3,
              -0.1
            ]
          ],
          "r": 0.018,
          "open": true
        },
        {
          "pts": [
            [
              0.07,
              0.6,
              0.469
            ],
            [
              0.07,
              0.81,
              0.362
            ]
          ],
          "r": 0.026,
          "open": true
        },
        {
          "pts": [
            [
              -0.07,
              0.6,
              0.469
            ],
            [
              -0.07,
              0.81,
              0.362
            ]
          ],
          "r": 0.026,
          "open": true
        },
        {
          "pts": [
            [
              0.105,
              0.42,
              -0.52
            ],
            [
              0.1,
              0.61,
              -0.435
            ]
          ],
          "r": 0.024,
          "open": true
        },
        {
          "pts": [
            [
              -0.105,
              0.42,
              -0.52
            ],
            [
              -0.1,
              0.61,
              -0.435
            ]
          ],
          "r": 0.024,
          "open": true
        }
      ],
      "lathes": [
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.028,
              0
            ],
            [
              0.028,
              0.035
            ],
            [
              0,
              0.035
            ]
          ],
          "seg": 8,
          "rx": 1.5707963267948966,
          "at": [
            0.132,
            0.902,
            0.458
          ],
          "hex": 12089914
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.028,
              0
            ],
            [
              0.028,
              0.035
            ],
            [
              0,
              0.035
            ]
          ],
          "seg": 8,
          "rx": 1.5707963267948966,
          "at": [
            -0.132,
            0.902,
            0.458
          ],
          "hex": 12089914
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.022,
              0
            ],
            [
              0.022,
              0.014
            ],
            [
              0,
              0.014
            ]
          ],
          "seg": 8,
          "rz": 1.5707963267948966,
          "at": [
            0.19,
            0.42,
            0.5
          ],
          "hex": 12089914
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.022,
              0
            ],
            [
              0.022,
              0.014
            ],
            [
              0,
              0.014
            ]
          ],
          "seg": 8,
          "rz": -1.5707963267948966,
          "at": [
            -0.19,
            0.42,
            0.5
          ],
          "hex": 12089914
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.07,
              0
            ],
            [
              0.082,
              0.012
            ],
            [
              0.082,
              0.03
            ],
            [
              0,
              0.03
            ]
          ],
          "seg": 12,
          "rz": 1.5707963267948966,
          "at": [
            0.093,
            0.266,
            -0.09
          ],
          "hex": 10198166
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.07,
              0
            ],
            [
              0.082,
              0.012
            ],
            [
              0.082,
              0.03
            ],
            [
              0,
              0.03
            ]
          ],
          "seg": 12,
          "rz": -1.5707963267948966,
          "at": [
            -0.093,
            0.266,
            -0.09
          ],
          "hex": 10198166
        },
        {
          "pts": [
            [
              0.03,
              0
            ],
            [
              0.088,
              0
            ],
            [
              0.088,
              8e-3
            ],
            [
              0.03,
              8e-3
            ]
          ],
          "seg": 14,
          "rz": 1.5707963267948966,
          "at": [
            0.055,
            0.278,
            -0.58
          ],
          "hex": 4867906
        },
        {
          "pts": [
            [
              0,
              0
            ],
            [
              0.029,
              0
            ],
            [
              0.029,
              0.012
            ],
            [
              0,
              0.012
            ]
          ],
          "seg": 10,
          "rx": 1.5707963267948966,
          "at": [
            0.13,
            0.268,
            -0.704
          ],
          "hex": 8025711
        }
      ],
      "tubes": [
        {
          "pts": [
            [
              0.07,
              0.278,
              0.64
            ],
            [
              0.07,
              0.62,
              0.466
            ]
          ],
          "r": 0.017,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.07,
              0.278,
              0.64
            ],
            [
              -0.07,
              0.62,
              0.466
            ]
          ],
          "r": 0.017,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0.068,
              0.395,
              0.782
            ],
            [
              0.07,
              0.47,
              0.686
            ]
          ],
          "r": 5e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.068,
              0.395,
              0.782
            ],
            [
              -0.07,
              0.47,
              0.686
            ]
          ],
          "r": 5e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0.8,
              0.375
            ],
            [
              0,
              0.995,
              0.276
            ]
          ],
          "r": 0.02,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.345,
              0.995,
              0.245
            ],
            [
              0.13,
              1.02,
              0.3
            ],
            [
              -0.13,
              1.02,
              0.3
            ],
            [
              -0.345,
              0.995,
              0.245
            ]
          ],
          "r": 0.013,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.135,
              1.005,
              0.295
            ],
            [
              0.23,
              1.11,
              0.305
            ],
            [
              0.262,
              1.178,
              0.312
            ]
          ],
          "r": 7e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.135,
              1.005,
              0.295
            ],
            [
              -0.23,
              1.11,
              0.305
            ],
            [
              -0.262,
              1.178,
              0.312
            ]
          ],
          "r": 7e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0,
              0.82,
              0.36
            ],
            [
              0,
              0.52,
              0.3
            ],
            [
              0,
              0.365,
              0.12
            ],
            [
              0,
              0.38,
              -0.12
            ],
            [
              0,
              0.56,
              -0.3
            ]
          ],
          "r": 0.021,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.08,
              0.43,
              -0.3
            ],
            [
              0.08,
              0.56,
              -0.48
            ]
          ],
          "r": 0.014,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              -0.08,
              0.43,
              -0.3
            ],
            [
              -0.08,
              0.56,
              -0.48
            ]
          ],
          "r": 0.014,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.108,
              0.29,
              -0.578
            ],
            [
              0.105,
              0.43,
              -0.516
            ]
          ],
          "r": 0.013,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.108,
              0.29,
              -0.578
            ],
            [
              -0.105,
              0.43,
              -0.516
            ]
          ],
          "r": 0.013,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0.055,
              0.3,
              -0.055
            ],
            [
              0.055,
              0.296,
              -0.58
            ]
          ],
          "r": 7e-3,
          "hex": 6973283,
          "open": true
        },
        {
          "pts": [
            [
              0.055,
              0.252,
              -0.055
            ],
            [
              0.055,
              0.26,
              -0.58
            ]
          ],
          "r": 7e-3,
          "hex": 6973283,
          "open": true
        },
        {
          "pts": [
            [
              0.045,
              0.42,
              0.215
            ],
            [
              0.085,
              0.262,
              0.095
            ],
            [
              0.112,
              0.232,
              -0.15
            ],
            [
              0.126,
              0.256,
              -0.345
            ]
          ],
          "r": 0.014,
          "hex": 8025711
        },
        {
          "pts": [
            [
              0.128,
              0.252,
              -0.35
            ],
            [
              0.13,
              0.268,
              -0.7
            ]
          ],
          "r": 0.026,
          "hex": 8025711,
          "open": true
        },
        {
          "pts": [
            [
              0.11,
              0.24,
              -0.1
            ],
            [
              0.158,
              0.196,
              -0.17
            ]
          ],
          "r": 0.01,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              -0.098,
              0.238,
              0.02
            ],
            [
              -0.15,
              0.222,
              0.07
            ]
          ],
          "r": 9e-3,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.115,
              0.13,
              -0.18
            ],
            [
              0.115,
              0.185,
              -0.07
            ]
          ],
          "r": 0.01,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              -0.115,
              0.13,
              -0.18
            ],
            [
              -0.115,
              0.185,
              -0.07
            ]
          ],
          "r": 0.01,
          "hex": 4867906,
          "open": true
        },
        {
          "pts": [
            [
              0.17,
              0.75,
              -0.46
            ],
            [
              0.17,
              0.75,
              -0.88
            ],
            [
              0.15,
              0.762,
              -0.93
            ],
            [
              -0.15,
              0.762,
              -0.93
            ],
            [
              -0.17,
              0.75,
              -0.88
            ],
            [
              -0.17,
              0.75,
              -0.46
            ]
          ],
          "r": 9e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.17,
              0.75,
              -0.8
            ],
            [
              0.165,
              0.8,
              -0.86
            ],
            [
              -0.165,
              0.8,
              -0.86
            ],
            [
              -0.17,
              0.75,
              -0.8
            ]
          ],
          "r": 8e-3,
          "hex": 12172479
        },
        {
          "pts": [
            [
              0.15,
              0.75,
              -0.47
            ],
            [
              0.13,
              0.64,
              -0.43
            ]
          ],
          "r": 8e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.15,
              0.75,
              -0.47
            ],
            [
              -0.13,
              0.64,
              -0.43
            ]
          ],
          "r": 8e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0.155,
              0.75,
              -0.87
            ],
            [
              0.13,
              0.64,
              -0.82
            ]
          ],
          "r": 8e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.155,
              0.75,
              -0.87
            ],
            [
              -0.13,
              0.64,
              -0.82
            ]
          ],
          "r": 8e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              0.068,
              0.613,
              -0.866
            ],
            [
              0.116,
              0.603,
              -0.88
            ]
          ],
          "r": 6e-3,
          "hex": 12172479,
          "open": true
        },
        {
          "pts": [
            [
              -0.068,
              0.613,
              -0.866
            ],
            [
              -0.116,
              0.603,
              -0.88
            ]
          ],
          "r": 6e-3,
          "hex": 12172479,
          "open": true
        }
      ],
      "trim": [
        [
          6513246,
          0,
          0.258,
          -0.07,
          0.165,
          0.165,
          0.235
        ],
        [
          10198166,
          0,
          0.34,
          0.068,
          0.126,
          0.112,
          0.158,
          0.35
        ],
        [
          10198166,
          0,
          0.386,
          0.164,
          0.146,
          0.122,
          0.072,
          0.35
        ],
        [
          10198166,
          0,
          0.352,
          0.098,
          0.152,
          0.013,
          0.024,
          0.35
        ],
        [
          10198166,
          0,
          0.372,
          0.134,
          0.152,
          0.013,
          0.024,
          0.35
        ],
        [
          4867906,
          0,
          0.828,
          0.352,
          0.2,
          0.032,
          0.07
        ],
        [
          4867906,
          0,
          0.66,
          0.428,
          0.15,
          0.03,
          0.06
        ],
        [
          12172479,
          0,
          1.01,
          0.298,
          0.09,
          0.028,
          0.052
        ],
        [
          12172479,
          0,
          0.916,
          0.478,
          0.146,
          0.126,
          0.032
        ],
        [
          14212576,
          0,
          0.916,
          0.499,
          0.12,
          0.102,
          0.01
        ],
        [
          4867906,
          0,
          1.014,
          0.372,
          0.1,
          0.022,
          0.09
        ],
        [
          9342866,
          0,
          1.028,
          0.372,
          0.082,
          8e-3,
          0.072
        ],
        [
          12172479,
          0.176,
          0.62,
          0.47,
          8e-3,
          0.14,
          0.048
        ],
        [
          12172479,
          -0.176,
          0.62,
          0.47,
          8e-3,
          0.14,
          0.048
        ],
        [
          12172479,
          0,
          0.752,
          -0.5325,
          0.3,
          8e-3,
          0.155
        ],
        [
          12172479,
          0,
          0.752,
          -0.68,
          0.3,
          8e-3,
          0.16
        ],
        [
          12172479,
          0,
          0.752,
          -0.84,
          0.3,
          8e-3,
          0.14
        ],
        [
          11546672,
          0,
          0.634,
          -0.862,
          0.1,
          0.072,
          0.03
        ],
        [
          12172479,
          0,
          0.59,
          -0.858,
          0.116,
          0.022,
          0.04
        ],
        [
          12089914,
          0.126,
          0.598,
          -0.876,
          0.052,
          0.046,
          0.036
        ],
        [
          12089914,
          -0.126,
          0.598,
          -0.876,
          0.052,
          0.046,
          0.036
        ],
        [
          5131337,
          0,
          0.235,
          -0.918,
          0.13,
          0.2,
          0.012
        ],
        [
          3881784,
          0,
          0.7,
          0.5,
          0.11,
          0.07,
          0.02
        ]
      ],
      "cyls": [
        {
          "at": [
            0.268,
            1.196,
            0.315
          ],
          "rt": 0.062,
          "rb": 0.062,
          "h": 8e-3,
          "rx": 1.5707963267948966,
          "seg": 14,
          "hex": 12172479
        },
        {
          "at": [
            -0.268,
            1.196,
            0.315
          ],
          "rt": 0.062,
          "rb": 0.062,
          "h": 8e-3,
          "rx": 1.5707963267948966,
          "seg": 14,
          "hex": 12172479
        },
        {
          "at": [
            0.3,
            0.997,
            0.253
          ],
          "rt": 0.017,
          "rb": 0.017,
          "h": 0.1,
          "rz": 1.5707963267948966,
          "seg": 10,
          "hex": 5658200
        },
        {
          "at": [
            -0.3,
            0.997,
            0.253
          ],
          "rt": 0.017,
          "rb": 0.017,
          "h": 0.1,
          "rz": 1.5707963267948966,
          "seg": 10,
          "hex": 5658200
        },
        {
          "at": [
            0.19,
            0.3,
            -0.02
          ],
          "rt": 0.022,
          "rb": 0.022,
          "h": 0.09,
          "rz": 1.5707963267948966,
          "seg": 8,
          "hex": 5658200
        },
        {
          "at": [
            -0.19,
            0.3,
            -0.02
          ],
          "rt": 0.022,
          "rb": 0.022,
          "h": 0.09,
          "rz": 1.5707963267948966,
          "seg": 8,
          "hex": 5658200
        },
        {
          "at": [
            0.078,
            0.276,
            -0.058
          ],
          "rt": 0.042,
          "rb": 0.042,
          "h": 0.026,
          "rz": 1.5707963267948966,
          "seg": 10,
          "hex": 6513246
        }
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
function createHondaWaveModel(options = {}) {
  const root = new THREE.Group();
  root.name = "Honda Wave";
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
  const root = createHondaWaveModel(options);
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL2NyZWF0ZU9iamVjdE1vZGVsLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSc7XG5cbi8qKlxuICogSG9uZGEgV2F2ZSAtLSBwcm9jZWR1cmFsIFRocmVlLmpzIGZhY3RvcnkuXG4gKlxuICogYHRocmVlYCBpcyBpbXBvcnRlZCBhcyBhIGJhcmUgc3BlY2lmaWVyIGFuZCBOT1RISU5HIGVsc2UuIFRoZSBidW5kbGUgaXMgQ29tbW9uSlMgd2l0aCBhIGJhcmVcbiAqIHJlcXVpcmUoXCJ0aHJlZVwiKSBhbmQgdGhlIGhvc3QgcGFnZSBpbmplY3RzIGl0cyBPV04gdGhyZWUgaW5zdGFuY2U7IGEgc2Vjb25kIGNvcHkgbWVhbnMgdGhpc1xuICogZmlsZSdzIE1lc2ggaXMgbm90IHRoZSByZW5kZXJlcidzIE1lc2ggYW5kIG5vdGhpbmcgZHJhd3MuIFRoYXQgaXMgYWxzbyB3aHkgZ2VvbWV0cnkgbWVyZ2luZyxcbiAqIGluc3RhbmNpbmcgYW5kIHRoZSBsYXRoZSBoZWxwZXJzIGJlbG93IGFyZSBoYW5kLXJvbGxlZCAtLSBhbnl0aGluZyB1bmRlciB0aHJlZS9leGFtcGxlcy9qc20gaXNcbiAqIGEgc2Vjb25kIGltcG9ydC5cbiAqXG4gKiBFbnZlbG9wZSAwLjcxIHggMS4yNSB4IDEuOTIgbSAocHJveHkgTDpIOlcgMSA6IDAuNjU0IDogMC4zODMsIG1pcnJvciB0aXBzKSwgb3JpZ2luIGJhc2UtY2VudGVyLCArWSB1cCwgK1ogZm9yd2FyZC5cbiAqIEJ1ZGdldCAobGFyZ2UpOiA8PTQwMDAgdHJpYW5nbGVzLCA8PTggZHJhdyBjYWxscywgPD00IG1hdGVyaWFscywgPD04IHVuaXF1ZSBnZW9tZXRyaWVzLlxuICpcbiAqIFRoaXMgaXMgb25lIG9mIHRoYWlraXQncyBWRUhJQ0xFUy4gVGhlIHNoYXJlZCB2b2NhYnVsYXJ5IGlzIHRoZSBTSURFLVBST0ZJTEUgRVhUUlVTSU9OIC0tIGFcbiAqIGNsb3NlZCBwb2x5Z29uIGluIHRoZSAoeiwgeSkgcGxhbmUgc3dlcHQgYWNyb3NzIHRoZSB3aWR0aCBhbmQgdGhlbiBzaGFwZWQgcGVyIHZlcnRleCBmb3JcbiAqIHR1bWJsZWhvbWUgYW5kIHBsYW4gcm91bmRpbmcgLS0gcGx1cyBhIGxhdGhlZCBXSEVFTCByZXZvbHZlZCBhYm91dCBpdHMgYXhsZSBhbmQgYSBwb2x5bGluZSBUVUJFXG4gKiBmb3IgaGFuZGxlYmFycywgcmFpbHMgYW5kIGZyYW1lcy4gRXZlcnkgY29sb3VyIGRpZmZlcmVuY2UgaW5zaWRlIG9uZSBtYXRlcmlhbCBpcyBjYXJyaWVkIGFzIGFcbiAqIHZlcnRleCBjb2xvdXIgb24gYSBXSElURSBtYXRlcmlhbCwgc28gYSB0d28tdG9uZSBib2R5LCBhIGJsYWNrIHR5cmUgb24gYSBzaWx2ZXIgcmltIGFuZCBhbiBhbWJlclxuICogaW5kaWNhdG9yIGFsbCByaWRlIG9uZSBzaGFkZXIgYW5kIG9uZSBzdWJtaXNzaW9uLlxuICovXG5cbmV4cG9ydCB0eXBlIFByb2NlZHVyYWxNb2RlbE9wdGlvbnMgPSB7XG4gIHdpcmVmcmFtZT86IGJvb2xlYW47XG4gIGNhc3RTaGFkb3c/OiBib29sZWFuO1xuICByZWNlaXZlU2hhZG93PzogYm9vbGVhbjtcbiAgdGV4dHVyZVNpemU/OiBudW1iZXI7XG4gIHRleHR1cmVBbmlzb3Ryb3B5PzogbnVtYmVyO1xuICBxdWFsaXR5UHJpb3JpdHk/OiAncmVmZXJlbmNlLWZpZGVsaXR5JyB8ICdiYWxhbmNlZCc7XG59O1xuXG5leHBvcnQgdHlwZSBQcm9jZWR1cmFsTW9kZWxSdW50aW1lID0ge1xuICBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuICBtZXNoZXM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2g+O1xuICBzb2NrZXRzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRD47XG4gIGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj47XG4gIGRlc3RydWN0aW9uR3JvdXBzOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPjtcbn07XG5cbmNvbnN0IENPTkZJRyA9IHtcbiAgICBcImlkXCI6IFwiaG9uZGEtd2F2ZVwiLFxuICAgIFwibmFtZVwiOiBcIkhvbmRhIFdhdmVcIixcbiAgICBcImV4cG9ydE5hbWVcIjogXCJIb25kYVdhdmVcIixcbiAgICBcImVudmVsb3BlXCI6IFwiRW52ZWxvcGUgMC43MSB4IDEuMjUgeCAxLjkyIG0gKHByb3h5IEw6SDpXIDEgOiAwLjY1NCA6IDAuMzgzLCBtaXJyb3IgdGlwcyksIG9yaWdpbiBiYXNlLWNlbnRlciwgK1kgdXAsICtaIGZvcndhcmQuXFxuICogQnVkZ2V0IChsYXJnZSk6IDw9NDAwMCB0cmlhbmdsZXMsIDw9OCBkcmF3IGNhbGxzLCA8PTQgbWF0ZXJpYWxzLCA8PTggdW5pcXVlIGdlb21ldHJpZXMuXCIsXG4gICAgXCJtYXRlcmlhbHNcIjogW1xuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJjb2xvclwiOiAxNjc3NzIxNSxcbiAgICAgICAgXCJyb3VnaG5lc3NcIjogMC40LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwidHJpbVwiLFxuICAgICAgICBcImNvbG9yXCI6IDE2Nzc3MjE1LFxuICAgICAgICBcInJvdWdobmVzc1wiOiAwLjU1LFxuICAgICAgICBcIm1ldGFsbmVzc1wiOiAwLFxuICAgICAgICBcInZlcnRleENvbG9yc1wiOiB0cnVlXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImlkXCI6IFwicnViYmVyXCIsXG4gICAgICAgIFwiY29sb3JcIjogMTY3NzcyMTUsXG4gICAgICAgIFwicm91Z2huZXNzXCI6IDAuODgsXG4gICAgICAgIFwibWV0YWxuZXNzXCI6IDAsXG4gICAgICAgIFwidmVydGV4Q29sb3JzXCI6IHRydWVcbiAgICAgIH1cbiAgICBdLFxuICAgIFwidGlsZXNcIjogW1xuICAgICAge1xuICAgICAgICBcIm1hdGVyaWFsXCI6IFwicGFpbnRcIixcbiAgICAgICAgXCJraW5kXCI6IFwiZHVzdFwiLFxuICAgICAgICBcImJhc2VcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxXG4gICAgICAgIF0sXG4gICAgICAgIFwiZHVzdFwiOiBbXG4gICAgICAgICAgMC43MixcbiAgICAgICAgICAwLjcsXG4gICAgICAgICAgMC42NlxuICAgICAgICBdLFxuICAgICAgICBcInNlZWRcIjogNjEsXG4gICAgICAgIFwiY292ZXJhZ2VcIjogMC4yNSxcbiAgICAgICAgXCJzaXplXCI6IDI1NlxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJtYXRlcmlhbFwiOiBcInJ1YmJlclwiLFxuICAgICAgICBcImtpbmRcIjogXCJ0eXJlXCIsXG4gICAgICAgIFwic2l6ZVwiOiAyNTYsXG4gICAgICAgIFwic2VlZFwiOiAyOSxcbiAgICAgICAgXCJiYXNlXCI6IDIwMCxcbiAgICAgICAgXCJiYW5kXCI6IFtcbiAgICAgICAgICAwLjM2LFxuICAgICAgICAgIDAuNjRcbiAgICAgICAgXSxcbiAgICAgICAgXCJncm9vdmVcIjogMC4zLFxuICAgICAgICBcImdyb292ZXNcIjogMyxcbiAgICAgICAgXCJzaXBlc1wiOiAyLFxuICAgICAgICBcInNpcGVXaWR0aFwiOiAwLjA5LFxuICAgICAgICBcImR1c3RBbHBoYVwiOiAwLjMyLFxuICAgICAgICBcInNjdWZmc1wiOiAxMixcbiAgICAgICAgXCJidW1wXCI6IDAuMDhcbiAgICAgIH1cbiAgICBdLFxuICAgIFwicGl2b3RzXCI6IFtcbiAgICAgIHtcbiAgICAgICAgXCJuYW1lXCI6IFwid2hlZWwtZnJvbnRcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjI3OCxcbiAgICAgICAgICAwLjY0XG4gICAgICAgIF0sXG4gICAgICAgIFwiYXhpc1wiOiBbXG4gICAgICAgICAgMSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDBcbiAgICAgICAgXSxcbiAgICAgICAgXCJjb21wb25lbnRcIjogXCJ3aGVlbHNcIixcbiAgICAgICAgXCJpbnN0YW5jZVwiOiAwLFxuICAgICAgICBcIm5vdGVcIjogXCJmcm9udCBodWIsIHJvbGxzIGFib3V0IHRoZSBheGxlXCJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwibmFtZVwiOiBcIndoZWVsLXJlYXJcIixcbiAgICAgICAgXCJwb3NpdGlvblwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwLjI3OCxcbiAgICAgICAgICAtMC41OFxuICAgICAgICBdLFxuICAgICAgICBcImF4aXNcIjogW1xuICAgICAgICAgIDEsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAwXG4gICAgICAgIF0sXG4gICAgICAgIFwiY29tcG9uZW50XCI6IFwid2hlZWxzXCIsXG4gICAgICAgIFwiaW5zdGFuY2VcIjogMSxcbiAgICAgICAgXCJub3RlXCI6IFwicmVhciBodWJcIlxuICAgICAgfVxuICAgIF0sXG4gICAgXCJnZW9tZXRyeVwiOiB7XG4gICAgICBcIm11ZFNjYWxlXCI6IDEuMixcbiAgICAgIFwiY29sbGlkZXJcIjoge1xuICAgICAgICBcInNoYXBlXCI6IFwiY29udmV4XCIsXG4gICAgICAgIFwibG9jYWxDZW50ZXJcIjogW1xuICAgICAgICAgIDAsXG4gICAgICAgICAgMC42MjUsXG4gICAgICAgICAgLTAuMDFcbiAgICAgICAgXSxcbiAgICAgICAgXCJoYWxmRXh0ZW50c1wiOiBbXG4gICAgICAgICAgMC4zNTUsXG4gICAgICAgICAgMC42MjUsXG4gICAgICAgICAgMC45NTZcbiAgICAgICAgXSxcbiAgICAgICAgXCJub3Rlc1wiOiBcIkRlY2xhcmVkIG9uIHRoZSBhc3NldCBhcyBjb252ZXg6IG9uZSBodWxsIG92ZXIgdGhlIHdob2xlIG1hY2hpbmUuXCJcbiAgICAgIH0sXG4gICAgICBcImJpa2VcIjoge1xuICAgICAgICBcInhcIjogMCxcbiAgICAgICAgXCJyXCI6IDAuMjc4LFxuICAgICAgICBcInJpbVwiOiAwLjIxNixcbiAgICAgICAgXCJoYWxmV1wiOiAwLjAzOCxcbiAgICAgICAgXCJ6RlwiOiAwLjY0LFxuICAgICAgICBcInpSXCI6IC0wLjU4LFxuICAgICAgICBcInNlZ1wiOiAxNixcbiAgICAgICAgXCJzcG9rZXNcIjogMTgsXG4gICAgICAgIFwidHlyZUhleFwiOiA3MjM1NDIxLFxuICAgICAgICBcInJpbUhleFwiOiAxMTExODQ5OCxcbiAgICAgICAgXCJzcG9rZUhleFwiOiAxMTU3OTA0OSxcbiAgICAgICAgXCJvcGVuXCI6IHtcbiAgICAgICAgICBcInBpdGNoXCI6IDAuMDUsXG4gICAgICAgICAgXCJodWJSXCI6IDAuMDgyLFxuICAgICAgICAgIFwiaHViV1wiOiAwLjEsXG4gICAgICAgICAgXCJodWJIZXhcIjogOTA3NzYyNCxcbiAgICAgICAgICBcImNhcEhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICBcInNwb2tlVFwiOiAwLjAwNlxuICAgICAgICB9LFxuICAgICAgICBcIndoZWVsTWF0ZXJpYWxcIjogXCJydWJiZXJcIixcbiAgICAgICAgXCJwYWludEhleFwiOiAzNDI0MDg4LFxuICAgICAgICBcImNocm9tZUhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgXCJkYXJrSGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgIFwiYm9keU5hbWVcIjogXCJCb2R5d29yazogbGVnIHNoaWVsZCwgY292ZXJzLCBmZW5kZXJzLCBjb3dsIGFuZCBzZWF0XCIsXG4gICAgICAgIFwicG9zaXRpb25zXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4yNzgsXG4gICAgICAgICAgICAwLjY0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4yNzgsXG4gICAgICAgICAgICAtMC41OFxuICAgICAgICAgIF1cbiAgICAgICAgXSxcbiAgICAgICAgXCJwYWludEV4dHJ1ZGVzXCI6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNTc1LFxuICAgICAgICAgICAgICAgIDAuNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41NTUsXG4gICAgICAgICAgICAgICAgMC41NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41MDUsXG4gICAgICAgICAgICAgICAgMC42OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40NCxcbiAgICAgICAgICAgICAgICAwLjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNCxcbiAgICAgICAgICAgICAgICAwLjg3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgMC44N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4zMyxcbiAgICAgICAgICAgICAgICAwLjc5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjM4LFxuICAgICAgICAgICAgICAgIDAuNjhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNDMsXG4gICAgICAgICAgICAgICAgMC41NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40NTUsXG4gICAgICAgICAgICAgICAgMC40XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQ1LFxuICAgICAgICAgICAgICAgIDAuM1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjM2LFxuICAgICAgICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgICAgICAgIFwidHVtYmxlXCI6IHtcbiAgICAgICAgICAgICAgICBcImJlbHRcIjogMC4zNixcbiAgICAgICAgICAgICAgICBcInJvb2ZcIjogMC44NyxcbiAgICAgICAgICAgICAgICBcImtcIjogMC4yOFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImN1cnZlU2VnbWVudHNcIjogOCxcbiAgICAgICAgICAgICAgXCJzbW9vdGhcIjogMzRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicG9seVwiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgICAgICAwLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA4LFxuICAgICAgICAgICAgICAgIDAuNTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDE1LFxuICAgICAgICAgICAgICAgIDAuNjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjIxLFxuICAgICAgICAgICAgICAgIDAuNjcyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zOCxcbiAgICAgICAgICAgICAgICAwLjY0NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNDcsXG4gICAgICAgICAgICAgICAgMC41OTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjQ1NSxcbiAgICAgICAgICAgICAgICAwLjUzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4yOSxcbiAgICAgICAgICAgICAgICAwLjQ5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMDIsXG4gICAgICAgICAgICAgICAgMC40ODJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwid2lkdGhcIjogMC4yMjUsXG4gICAgICAgICAgICBcInNoYXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmVsdFwiOiAwLjQ3LFxuICAgICAgICAgICAgICAgIFwicm9vZlwiOiAwLjY3MixcbiAgICAgICAgICAgICAgICBcImtcIjogMC4yNFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNtb290aFwiOiAzNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgMC42ODhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDkyLFxuICAgICAgICAgICAgICAgIDAuNzQyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wMixcbiAgICAgICAgICAgICAgICAwLjc1NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMzQsXG4gICAgICAgICAgICAgICAgMC43NTJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjQ1LFxuICAgICAgICAgICAgICAgIDAuNzMyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC40NTgsXG4gICAgICAgICAgICAgICAgMC42OTZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgICAgMC42NzZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA1LFxuICAgICAgICAgICAgICAgIDAuNjc0XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAuMjg1LFxuICAgICAgICAgICAgXCJoZXhcIjogNTAwMDI3MCxcbiAgICAgICAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICAgICAgICBcInR1bWJsZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJiZWx0XCI6IDAuNjg4LFxuICAgICAgICAgICAgICAgIFwicm9vZlwiOiAwLjc1NSxcbiAgICAgICAgICAgICAgICBcImtcIjogMC4zXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwic21vb3RoXCI6IDM0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45NTI5LFxuICAgICAgICAgICAgICAgIDAuMjM0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjk1NTYsXG4gICAgICAgICAgICAgICAgMC4yOTQxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjk0NjgsXG4gICAgICAgICAgICAgICAgMC4zNTM2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjkyNjksXG4gICAgICAgICAgICAgICAgMC40MTA0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjg5NjYsXG4gICAgICAgICAgICAgICAgMC40NjI0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjg1NzEsXG4gICAgICAgICAgICAgICAgMC41MDc3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjgwOTYsXG4gICAgICAgICAgICAgICAgMC41NDQ2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjc1NixcbiAgICAgICAgICAgICAgICAwLjU3MTlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjk4MixcbiAgICAgICAgICAgICAgICAwLjU4ODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjM4MyxcbiAgICAgICAgICAgICAgICAwLjU5NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41Nzg1LFxuICAgICAgICAgICAgICAgIDAuNTg3OVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC41MjA4LFxuICAgICAgICAgICAgICAgIDAuNTcwN1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40Njc1LFxuICAgICAgICAgICAgICAgIDAuNTQyOFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40MjA1LFxuICAgICAgICAgICAgICAgIDAuNTA1M1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40MzQ0LFxuICAgICAgICAgICAgICAgIDAuNDkwOVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40Nzg1LFxuICAgICAgICAgICAgICAgIDAuNTI2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjUyODQsXG4gICAgICAgICAgICAgICAgMC41NTIxXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjU4MjQsXG4gICAgICAgICAgICAgICAgMC41NjgzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjYzODQsXG4gICAgICAgICAgICAgICAgMC41NzRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNjk0NSxcbiAgICAgICAgICAgICAgICAwLjU2ODlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzQ4NyxcbiAgICAgICAgICAgICAgICAwLjU1MzNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNzk4OSxcbiAgICAgICAgICAgICAgICAwLjUyNzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuODQzMyxcbiAgICAgICAgICAgICAgICAwLjQ5MzFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuODgwNCxcbiAgICAgICAgICAgICAgICAwLjQ1MDdcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuOTA4OCxcbiAgICAgICAgICAgICAgICAwLjQwMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45Mjc0LFxuICAgICAgICAgICAgICAgIDAuMzQ4OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45MzU2LFxuICAgICAgICAgICAgICAgIDAuMjkzMVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC45MzMxLFxuICAgICAgICAgICAgICAgIDAuMjM2OFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjEzLFxuICAgICAgICAgICAgXCJzaGFwZVwiOiB7XG4gICAgICAgICAgICAgIFwic21vb3RoXCI6IDM0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBvbHlcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNDY3MSxcbiAgICAgICAgICAgICAgICAwLjU4ODFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjUyNzksXG4gICAgICAgICAgICAgICAgMC42MDM5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC41OTA1LFxuICAgICAgICAgICAgICAgIDAuNjA3OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNjUyNyxcbiAgICAgICAgICAgICAgICAwLjU5OTlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjcxMjMsXG4gICAgICAgICAgICAgICAgMC41ODAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC43NjcxLFxuICAgICAgICAgICAgICAgIDAuNTQ5OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuODE1MixcbiAgICAgICAgICAgICAgICAwLjUwOTVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjg1NDcsXG4gICAgICAgICAgICAgICAgMC40NjA4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC44ODQ0LFxuICAgICAgICAgICAgICAgIDAuNDA1NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuOTAzLFxuICAgICAgICAgICAgICAgIDAuMzQ1NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuOTEsXG4gICAgICAgICAgICAgICAgMC4yODMyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC45MDUsXG4gICAgICAgICAgICAgICAgMC4yMjA3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC44NzU0LFxuICAgICAgICAgICAgICAgIDAuMjI1OVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuODgsXG4gICAgICAgICAgICAgICAgMC4yODI4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC44NzM2LFxuICAgICAgICAgICAgICAgIDAuMzM5NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuODU2NyxcbiAgICAgICAgICAgICAgICAwLjM5MzlcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjgyOTgsXG4gICAgICAgICAgICAgICAgMC40NDQyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC43OTM4LFxuICAgICAgICAgICAgICAgIDAuNDg4NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNzUwMSxcbiAgICAgICAgICAgICAgICAwLjUyNTFcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjcwMDMsXG4gICAgICAgICAgICAgICAgMC41NTI4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC42NDYxLFxuICAgICAgICAgICAgICAgIDAuNTcwNlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuNTg5NSxcbiAgICAgICAgICAgICAgICAwLjU3NzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjUzMjYsXG4gICAgICAgICAgICAgICAgMC41NzQyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC40Nzc0LFxuICAgICAgICAgICAgICAgIDAuNTU5OVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJ3aWR0aFwiOiAwLjE1NSxcbiAgICAgICAgICAgIFwic2hhcGVcIjoge1xuICAgICAgICAgICAgICBcInNtb290aFwiOiAzNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwb2x5XCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuNDYsXG4gICAgICAgICAgICAgICAgMC44N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC40NyxcbiAgICAgICAgICAgICAgICAwLjk1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjQzLFxuICAgICAgICAgICAgICAgIDEuMDA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAgICAgMS4wMTVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMjQsXG4gICAgICAgICAgICAgICAgMC45NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4yNixcbiAgICAgICAgICAgICAgICAwLjg3XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcIndpZHRoXCI6IDAuMjgsXG4gICAgICAgICAgICBcInNoYXBlXCI6IHtcbiAgICAgICAgICAgICAgXCJ0dW1ibGVcIjoge1xuICAgICAgICAgICAgICAgIFwiYmVsdFwiOiAwLjg3LFxuICAgICAgICAgICAgICAgIFwicm9vZlwiOiAxLjAxNSxcbiAgICAgICAgICAgICAgICBcImtcIjogMC4yNVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcInNtb290aFwiOiAzNFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJwYWludEJveGVzXCI6IFtcbiAgICAgICAgICBbXG4gICAgICAgICAgICAzNDI0MDg4LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgIDAuMTc1LFxuICAgICAgICAgICAgMC4yNSxcbiAgICAgICAgICAgIDAuMDM2LFxuICAgICAgICAgICAgMC4zMVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMzQyNDA4OCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjMxNSxcbiAgICAgICAgICAgIC0wLjAzLFxuICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAwLjAzNSxcbiAgICAgICAgICAgIDAuM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQyMTI1NzYsXG4gICAgICAgICAgICAwLjEwMyxcbiAgICAgICAgICAgIDAuNTg4LFxuICAgICAgICAgICAgLTAuMixcbiAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgMC4wMixcbiAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDE0MjEyNTc2LFxuICAgICAgICAgICAgLTAuMTAzLFxuICAgICAgICAgICAgMC41ODgsXG4gICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgMC4wMDYsXG4gICAgICAgICAgICAwLjAyLFxuICAgICAgICAgICAgMC4zOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQyMTI1NzYsXG4gICAgICAgICAgICAwLjEwOCxcbiAgICAgICAgICAgIDAuNTUsXG4gICAgICAgICAgICAtMC4yLFxuICAgICAgICAgICAgMC4wMDYsXG4gICAgICAgICAgICAwLjAxNCxcbiAgICAgICAgICAgIDAuMzhcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDE0MjEyNTc2LFxuICAgICAgICAgICAgLTAuMTA4LFxuICAgICAgICAgICAgMC41NSxcbiAgICAgICAgICAgIC0wLjIsXG4gICAgICAgICAgICAwLjAwNixcbiAgICAgICAgICAgIDAuMDE0LFxuICAgICAgICAgICAgMC4zOFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQyMTI1NzYsXG4gICAgICAgICAgICAwLjA3LFxuICAgICAgICAgICAgMC42MzIsXG4gICAgICAgICAgICAtMC40NyxcbiAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgMC4wMTYsXG4gICAgICAgICAgICAwLjE4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxNDIxMjU3NixcbiAgICAgICAgICAgIC0wLjA3LFxuICAgICAgICAgICAgMC42MzIsXG4gICAgICAgICAgICAtMC40NyxcbiAgICAgICAgICAgIDAuMDA2LFxuICAgICAgICAgICAgMC4wMTYsXG4gICAgICAgICAgICAwLjE4XG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcInBhaW50VHViZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3NSxcbiAgICAgICAgICAgICAgICAwLjI3OCxcbiAgICAgICAgICAgICAgICAtMC41OFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDIsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMDc1LFxuICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNzUsXG4gICAgICAgICAgICAgICAgMC4yNzgsXG4gICAgICAgICAgICAgICAgLTAuNThcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyLFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDc1LFxuICAgICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNzUsXG4gICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgIC0wLjFcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxOCxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3LFxuICAgICAgICAgICAgICAgIDAuNixcbiAgICAgICAgICAgICAgICAwLjQ2OVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgICAwLjgxLFxuICAgICAgICAgICAgICAgIDAuMzYyXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMjYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMDcsXG4gICAgICAgICAgICAgICAgMC42LFxuICAgICAgICAgICAgICAgIDAuNDY5XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNyxcbiAgICAgICAgICAgICAgICAwLjgxLFxuICAgICAgICAgICAgICAgIDAuMzYyXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMjYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xMDUsXG4gICAgICAgICAgICAgICAgMC40MixcbiAgICAgICAgICAgICAgICAtMC41MlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xLFxuICAgICAgICAgICAgICAgIDAuNjEsXG4gICAgICAgICAgICAgICAgLTAuNDM1XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMjQsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTA1LFxuICAgICAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAgICAgLTAuNTJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjEsXG4gICAgICAgICAgICAgICAgMC42MSxcbiAgICAgICAgICAgICAgICAtMC40MzVcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyNCxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBcImxhdGhlc1wiOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyOCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyOCxcbiAgICAgICAgICAgICAgICAwLjAzNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAzNVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAuMTMyLFxuICAgICAgICAgICAgICAwLjkwMixcbiAgICAgICAgICAgICAgMC40NThcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxMjA4OTkxNFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyOCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyOCxcbiAgICAgICAgICAgICAgICAwLjAzNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAzNVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgIFwicnhcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0wLjEzMixcbiAgICAgICAgICAgICAgMC45MDIsXG4gICAgICAgICAgICAgIDAuNDU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIwODk5MTRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAgICAgMC4wMTRcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wMTRcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAwLjE5LFxuICAgICAgICAgICAgICAwLjQyLFxuICAgICAgICAgICAgICAwLjVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxMjA4OTkxNFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjAyMixcbiAgICAgICAgICAgICAgICAwLjAxNFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAxNFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJzZWdcIjogOCxcbiAgICAgICAgICAgIFwicnpcIjogLTEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMC4xOSxcbiAgICAgICAgICAgICAgMC40MixcbiAgICAgICAgICAgICAgMC41XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIwODk5MTRcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA4MixcbiAgICAgICAgICAgICAgICAwLjAxMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wODIsXG4gICAgICAgICAgICAgICAgMC4wM1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInNlZ1wiOiAxMixcbiAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAuMDkzLFxuICAgICAgICAgICAgICAwLjI2NixcbiAgICAgICAgICAgICAgLTAuMDlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcImhleFwiOiAxMDE5ODE2NlxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA3LFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDgyLFxuICAgICAgICAgICAgICAgIDAuMDEyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA4MixcbiAgICAgICAgICAgICAgICAwLjAzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMDNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDEyLFxuICAgICAgICAgICAgXCJyelwiOiAtMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0wLjA5MyxcbiAgICAgICAgICAgICAgMC4yNjYsXG4gICAgICAgICAgICAgIC0wLjA5XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJoZXhcIjogMTAxOTgxNjZcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wODgsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wODgsXG4gICAgICAgICAgICAgICAgMC4wMDhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAgICAgMC4wMDhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDE0LFxuICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAgIDAuMjc4LFxuICAgICAgICAgICAgICAtMC41OFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDZcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMjksXG4gICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wMjksXG4gICAgICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMC4xMyxcbiAgICAgICAgICAgICAgMC4yNjgsXG4gICAgICAgICAgICAgIC0wLjcwNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDgwMjU3MTFcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwidHViZXNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAgICAgMC4yNzgsXG4gICAgICAgICAgICAgICAgMC42NFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAgIDAuNDY2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTcsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNyxcbiAgICAgICAgICAgICAgICAwLjI3OCxcbiAgICAgICAgICAgICAgICAwLjY0XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNyxcbiAgICAgICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgICAgIDAuNDY2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTcsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA2OCxcbiAgICAgICAgICAgICAgICAwLjM5NSxcbiAgICAgICAgICAgICAgICAwLjc4MlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNyxcbiAgICAgICAgICAgICAgICAwLjQ3LFxuICAgICAgICAgICAgICAgIDAuNjg2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDUsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNjgsXG4gICAgICAgICAgICAgICAgMC4zOTUsXG4gICAgICAgICAgICAgICAgMC43ODJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA3LFxuICAgICAgICAgICAgICAgIDAuNDcsXG4gICAgICAgICAgICAgICAgMC42ODZcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwNSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44LFxuICAgICAgICAgICAgICAgIDAuMzc1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuOTk1LFxuICAgICAgICAgICAgICAgIDAuMjc2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMixcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4zNDUsXG4gICAgICAgICAgICAgICAgMC45OTUsXG4gICAgICAgICAgICAgICAgMC4yNDVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgICAgMS4wMixcbiAgICAgICAgICAgICAgICAwLjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjEzLFxuICAgICAgICAgICAgICAgIDEuMDIsXG4gICAgICAgICAgICAgICAgMC4zXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4zNDUsXG4gICAgICAgICAgICAgICAgMC45OTUsXG4gICAgICAgICAgICAgICAgMC4yNDVcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxMyxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjEzNSxcbiAgICAgICAgICAgICAgICAxLjAwNSxcbiAgICAgICAgICAgICAgICAwLjI5NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4yMyxcbiAgICAgICAgICAgICAgICAxLjExLFxuICAgICAgICAgICAgICAgIDAuMzA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjI2MixcbiAgICAgICAgICAgICAgICAxLjE3OCxcbiAgICAgICAgICAgICAgICAwLjMxMlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA3LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzksXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTM1LFxuICAgICAgICAgICAgICAgIDEuMDA1LFxuICAgICAgICAgICAgICAgIDAuMjk1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4yMyxcbiAgICAgICAgICAgICAgICAxLjExLFxuICAgICAgICAgICAgICAgIDAuMzA1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4yNjIsXG4gICAgICAgICAgICAgICAgMS4xNzgsXG4gICAgICAgICAgICAgICAgMC4zMTJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwNyxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC44MixcbiAgICAgICAgICAgICAgICAwLjM2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuNTIsXG4gICAgICAgICAgICAgICAgMC4zXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgIDAuMzY1LFxuICAgICAgICAgICAgICAgIDAuMTJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgICAgMC4zOCxcbiAgICAgICAgICAgICAgICAtMC4xMlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAwLjU2LFxuICAgICAgICAgICAgICAgIC0wLjNcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAyMSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wOCxcbiAgICAgICAgICAgICAgICAwLjQzLFxuICAgICAgICAgICAgICAgIC0wLjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDgsXG4gICAgICAgICAgICAgICAgMC41NixcbiAgICAgICAgICAgICAgICAtMC40OFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDE0LFxuICAgICAgICAgICAgXCJoZXhcIjogNDg2NzkwNixcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wOCxcbiAgICAgICAgICAgICAgICAwLjQzLFxuICAgICAgICAgICAgICAgIC0wLjNcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA4LFxuICAgICAgICAgICAgICAgIDAuNTYsXG4gICAgICAgICAgICAgICAgLTAuNDhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAxNCxcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xMDgsXG4gICAgICAgICAgICAgICAgMC4yOSxcbiAgICAgICAgICAgICAgICAtMC41NzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTA1LFxuICAgICAgICAgICAgICAgIDAuNDMsXG4gICAgICAgICAgICAgICAgLTAuNTE2XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTMsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xMDgsXG4gICAgICAgICAgICAgICAgMC4yOSxcbiAgICAgICAgICAgICAgICAtMC41NzhcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjEwNSxcbiAgICAgICAgICAgICAgICAwLjQzLFxuICAgICAgICAgICAgICAgIC0wLjUxNlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEzLFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzksXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAgIC0wLjA1NVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAgICAgMC4yOTYsXG4gICAgICAgICAgICAgICAgLTAuNThcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwNyxcbiAgICAgICAgICAgIFwiaGV4XCI6IDY5NzMyODMsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4wNTUsXG4gICAgICAgICAgICAgICAgMC4yNTIsXG4gICAgICAgICAgICAgICAgLTAuMDU1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA1NSxcbiAgICAgICAgICAgICAgICAwLjI2LFxuICAgICAgICAgICAgICAgIC0wLjU4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDcsXG4gICAgICAgICAgICBcImhleFwiOiA2OTczMjgzLFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDQ1LFxuICAgICAgICAgICAgICAgIDAuNDIsXG4gICAgICAgICAgICAgICAgMC4yMTVcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMDg1LFxuICAgICAgICAgICAgICAgIDAuMjYyLFxuICAgICAgICAgICAgICAgIDAuMDk1XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjExMixcbiAgICAgICAgICAgICAgICAwLjIzMixcbiAgICAgICAgICAgICAgICAtMC4xNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xMjYsXG4gICAgICAgICAgICAgICAgMC4yNTYsXG4gICAgICAgICAgICAgICAgLTAuMzQ1XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMTQsXG4gICAgICAgICAgICBcImhleFwiOiA4MDI1NzExXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjEyOCxcbiAgICAgICAgICAgICAgICAwLjI1MixcbiAgICAgICAgICAgICAgICAtMC4zNVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xMyxcbiAgICAgICAgICAgICAgICAwLjI2OCxcbiAgICAgICAgICAgICAgICAtMC43XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMjYsXG4gICAgICAgICAgICBcImhleFwiOiA4MDI1NzExLFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTEsXG4gICAgICAgICAgICAgICAgMC4yNCxcbiAgICAgICAgICAgICAgICAtMC4xXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjE1OCxcbiAgICAgICAgICAgICAgICAwLjE5NixcbiAgICAgICAgICAgICAgICAtMC4xN1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEsXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjA5OCxcbiAgICAgICAgICAgICAgICAwLjIzOCxcbiAgICAgICAgICAgICAgICAwLjAyXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAgICAgICAwLjIyMixcbiAgICAgICAgICAgICAgICAwLjA3XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDksXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTE1LFxuICAgICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgICAgLTAuMThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTE1LFxuICAgICAgICAgICAgICAgIDAuMTg1LFxuICAgICAgICAgICAgICAgIC0wLjA3XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMSxcbiAgICAgICAgICAgIFwiaGV4XCI6IDQ4Njc5MDYsXG4gICAgICAgICAgICBcIm9wZW5cIjogdHJ1ZVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwdHNcIjogW1xuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTE1LFxuICAgICAgICAgICAgICAgIDAuMTMsXG4gICAgICAgICAgICAgICAgLTAuMThcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjExNSxcbiAgICAgICAgICAgICAgICAwLjE4NSxcbiAgICAgICAgICAgICAgICAtMC4wN1xuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDEsXG4gICAgICAgICAgICBcImhleFwiOiA0ODY3OTA2LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAtMC40NlxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xNyxcbiAgICAgICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgICAgIC0wLjg4XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjE1LFxuICAgICAgICAgICAgICAgIDAuNzYyLFxuICAgICAgICAgICAgICAgIC0wLjkzXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAgICAgICAwLjc2MixcbiAgICAgICAgICAgICAgICAtMC45M1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTcsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAtMC44OFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgLTAuMTcsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAtMC40NlxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA5LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTcsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAtMC44XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjE2NSxcbiAgICAgICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAgICAgLTAuODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjE2NSxcbiAgICAgICAgICAgICAgICAwLjgsXG4gICAgICAgICAgICAgICAgLTAuODZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjE3LFxuICAgICAgICAgICAgICAgIDAuNzUsXG4gICAgICAgICAgICAgICAgLTAuOFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJyXCI6IDAuMDA4LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTUsXG4gICAgICAgICAgICAgICAgMC43NSxcbiAgICAgICAgICAgICAgICAtMC40N1xuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgMC4xMyxcbiAgICAgICAgICAgICAgICAwLjY0LFxuICAgICAgICAgICAgICAgIC0wLjQzXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDgsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xNSxcbiAgICAgICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgICAgIC0wLjQ3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xMyxcbiAgICAgICAgICAgICAgICAwLjY0LFxuICAgICAgICAgICAgICAgIC0wLjQzXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDgsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjE1NSxcbiAgICAgICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgICAgIC0wLjg3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjEzLFxuICAgICAgICAgICAgICAgIDAuNjQsXG4gICAgICAgICAgICAgICAgLTAuODJcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwOCxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHRzXCI6IFtcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIC0wLjE1NSxcbiAgICAgICAgICAgICAgICAwLjc1LFxuICAgICAgICAgICAgICAgIC0wLjg3XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xMyxcbiAgICAgICAgICAgICAgICAwLjY0LFxuICAgICAgICAgICAgICAgIC0wLjgyXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDgsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAwLjA2OCxcbiAgICAgICAgICAgICAgICAwLjYxMyxcbiAgICAgICAgICAgICAgICAtMC44NjZcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIDAuMTE2LFxuICAgICAgICAgICAgICAgIDAuNjAzLFxuICAgICAgICAgICAgICAgIC0wLjg4XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJcIjogMC4wMDYsXG4gICAgICAgICAgICBcImhleFwiOiAxMjE3MjQ3OSxcbiAgICAgICAgICAgIFwib3BlblwiOiB0cnVlXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB0c1wiOiBbXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4wNjgsXG4gICAgICAgICAgICAgICAgMC42MTMsXG4gICAgICAgICAgICAgICAgLTAuODY2XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAtMC4xMTYsXG4gICAgICAgICAgICAgICAgMC42MDMsXG4gICAgICAgICAgICAgICAgLTAuODhcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiclwiOiAwLjAwNixcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5LFxuICAgICAgICAgICAgXCJvcGVuXCI6IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIFwidHJpbVwiOiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAgNjUxMzI0NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjI1OCxcbiAgICAgICAgICAgIC0wLjA3LFxuICAgICAgICAgICAgMC4xNjUsXG4gICAgICAgICAgICAwLjE2NSxcbiAgICAgICAgICAgIDAuMjM1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMDE5ODE2NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjM0LFxuICAgICAgICAgICAgMC4wNjgsXG4gICAgICAgICAgICAwLjEyNixcbiAgICAgICAgICAgIDAuMTEyLFxuICAgICAgICAgICAgMC4xNTgsXG4gICAgICAgICAgICAwLjM1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMDE5ODE2NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjM4NixcbiAgICAgICAgICAgIDAuMTY0LFxuICAgICAgICAgICAgMC4xNDYsXG4gICAgICAgICAgICAwLjEyMixcbiAgICAgICAgICAgIDAuMDcyLFxuICAgICAgICAgICAgMC4zNVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTAxOTgxNjYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4zNTIsXG4gICAgICAgICAgICAwLjA5OCxcbiAgICAgICAgICAgIDAuMTUyLFxuICAgICAgICAgICAgMC4wMTMsXG4gICAgICAgICAgICAwLjAyNCxcbiAgICAgICAgICAgIDAuMzVcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEwMTk4MTY2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuMzcyLFxuICAgICAgICAgICAgMC4xMzQsXG4gICAgICAgICAgICAwLjE1MixcbiAgICAgICAgICAgIDAuMDEzLFxuICAgICAgICAgICAgMC4wMjQsXG4gICAgICAgICAgICAwLjM1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICA0ODY3OTA2LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAuODI4LFxuICAgICAgICAgICAgMC4zNTIsXG4gICAgICAgICAgICAwLjIsXG4gICAgICAgICAgICAwLjAzMixcbiAgICAgICAgICAgIDAuMDdcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQ4Njc5MDYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC42NixcbiAgICAgICAgICAgIDAuNDI4LFxuICAgICAgICAgICAgMC4xNSxcbiAgICAgICAgICAgIDAuMDMsXG4gICAgICAgICAgICAwLjA2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjE3MjQ3OSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLjAxLFxuICAgICAgICAgICAgMC4yOTgsXG4gICAgICAgICAgICAwLjA5LFxuICAgICAgICAgICAgMC4wMjgsXG4gICAgICAgICAgICAwLjA1MlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTIxNzI0NzksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC45MTYsXG4gICAgICAgICAgICAwLjQ3OCxcbiAgICAgICAgICAgIDAuMTQ2LFxuICAgICAgICAgICAgMC4xMjYsXG4gICAgICAgICAgICAwLjAzMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTQyMTI1NzYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC45MTYsXG4gICAgICAgICAgICAwLjQ5OSxcbiAgICAgICAgICAgIDAuMTIsXG4gICAgICAgICAgICAwLjEwMixcbiAgICAgICAgICAgIDAuMDFcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDQ4Njc5MDYsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMS4wMTQsXG4gICAgICAgICAgICAwLjM3MixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAuMDIyLFxuICAgICAgICAgICAgMC4wOVxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgOTM0Mjg2NixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAxLjAyOCxcbiAgICAgICAgICAgIDAuMzcyLFxuICAgICAgICAgICAgMC4wODIsXG4gICAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAgIDAuMDcyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjE3MjQ3OSxcbiAgICAgICAgICAgIDAuMTc2LFxuICAgICAgICAgICAgMC42MixcbiAgICAgICAgICAgIDAuNDcsXG4gICAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAgIDAuMTQsXG4gICAgICAgICAgICAwLjA0OFxuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTIxNzI0NzksXG4gICAgICAgICAgICAtMC4xNzYsXG4gICAgICAgICAgICAwLjYyLFxuICAgICAgICAgICAgMC40NyxcbiAgICAgICAgICAgIDAuMDA4LFxuICAgICAgICAgICAgMC4xNCxcbiAgICAgICAgICAgIDAuMDQ4XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjE3MjQ3OSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjc1MixcbiAgICAgICAgICAgIC0wLjUzMjUsXG4gICAgICAgICAgICAwLjMsXG4gICAgICAgICAgICAwLjAwOCxcbiAgICAgICAgICAgIDAuMTU1XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjE3MjQ3OSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjc1MixcbiAgICAgICAgICAgIC0wLjY4LFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgMC4wMDgsXG4gICAgICAgICAgICAwLjE2XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjE3MjQ3OSxcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjc1MixcbiAgICAgICAgICAgIC0wLjg0LFxuICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgMC4wMDgsXG4gICAgICAgICAgICAwLjE0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMTU0NjY3MixcbiAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAwLjYzNCxcbiAgICAgICAgICAgIC0wLjg2MixcbiAgICAgICAgICAgIDAuMSxcbiAgICAgICAgICAgIDAuMDcyLFxuICAgICAgICAgICAgMC4wM1xuICAgICAgICAgIF0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgMTIxNzI0NzksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC41OSxcbiAgICAgICAgICAgIC0wLjg1OCxcbiAgICAgICAgICAgIDAuMTE2LFxuICAgICAgICAgICAgMC4wMjIsXG4gICAgICAgICAgICAwLjA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICAxMjA4OTkxNCxcbiAgICAgICAgICAgIDAuMTI2LFxuICAgICAgICAgICAgMC41OTgsXG4gICAgICAgICAgICAtMC44NzYsXG4gICAgICAgICAgICAwLjA1MixcbiAgICAgICAgICAgIDAuMDQ2LFxuICAgICAgICAgICAgMC4wMzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDEyMDg5OTE0LFxuICAgICAgICAgICAgLTAuMTI2LFxuICAgICAgICAgICAgMC41OTgsXG4gICAgICAgICAgICAtMC44NzYsXG4gICAgICAgICAgICAwLjA1MixcbiAgICAgICAgICAgIDAuMDQ2LFxuICAgICAgICAgICAgMC4wMzZcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDUxMzEzMzcsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC4yMzUsXG4gICAgICAgICAgICAtMC45MTgsXG4gICAgICAgICAgICAwLjEzLFxuICAgICAgICAgICAgMC4yLFxuICAgICAgICAgICAgMC4wMTJcbiAgICAgICAgICBdLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIDM4ODE3ODQsXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICAgMC43LFxuICAgICAgICAgICAgMC41LFxuICAgICAgICAgICAgMC4xMSxcbiAgICAgICAgICAgIDAuMDcsXG4gICAgICAgICAgICAwLjAyXG4gICAgICAgICAgXVxuICAgICAgICBdLFxuICAgICAgICBcImN5bHNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAwLjI2OCxcbiAgICAgICAgICAgICAgMS4xOTYsXG4gICAgICAgICAgICAgIDAuMzE1XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJydFwiOiAwLjA2MixcbiAgICAgICAgICAgIFwicmJcIjogMC4wNjIsXG4gICAgICAgICAgICBcImhcIjogMC4wMDgsXG4gICAgICAgICAgICBcInJ4XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwic2VnXCI6IDE0LFxuICAgICAgICAgICAgXCJoZXhcIjogMTIxNzI0NzlcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiYXRcIjogW1xuICAgICAgICAgICAgICAtMC4yNjgsXG4gICAgICAgICAgICAgIDEuMTk2LFxuICAgICAgICAgICAgICAwLjMxNVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicnRcIjogMC4wNjIsXG4gICAgICAgICAgICBcInJiXCI6IDAuMDYyLFxuICAgICAgICAgICAgXCJoXCI6IDAuMDA4LFxuICAgICAgICAgICAgXCJyeFwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcInNlZ1wiOiAxNCxcbiAgICAgICAgICAgIFwiaGV4XCI6IDEyMTcyNDc5XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAwLjk5NyxcbiAgICAgICAgICAgICAgMC4yNTNcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJ0XCI6IDAuMDE3LFxuICAgICAgICAgICAgXCJyYlwiOiAwLjAxNyxcbiAgICAgICAgICAgIFwiaFwiOiAwLjEsXG4gICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgXCJoZXhcIjogNTY1ODIwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIC0wLjMsXG4gICAgICAgICAgICAgIDAuOTk3LFxuICAgICAgICAgICAgICAwLjI1M1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicnRcIjogMC4wMTcsXG4gICAgICAgICAgICBcInJiXCI6IDAuMDE3LFxuICAgICAgICAgICAgXCJoXCI6IDAuMSxcbiAgICAgICAgICAgIFwicnpcIjogMS41NzA3OTYzMjY3OTQ4OTY2LFxuICAgICAgICAgICAgXCJzZWdcIjogMTAsXG4gICAgICAgICAgICBcImhleFwiOiA1NjU4MjAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgMC4xOSxcbiAgICAgICAgICAgICAgMC4zLFxuICAgICAgICAgICAgICAtMC4wMlxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwicnRcIjogMC4wMjIsXG4gICAgICAgICAgICBcInJiXCI6IDAuMDIyLFxuICAgICAgICAgICAgXCJoXCI6IDAuMDksXG4gICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwic2VnXCI6IDgsXG4gICAgICAgICAgICBcImhleFwiOiA1NjU4MjAwXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImF0XCI6IFtcbiAgICAgICAgICAgICAgLTAuMTksXG4gICAgICAgICAgICAgIDAuMyxcbiAgICAgICAgICAgICAgLTAuMDJcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcInJ0XCI6IDAuMDIyLFxuICAgICAgICAgICAgXCJyYlwiOiAwLjAyMixcbiAgICAgICAgICAgIFwiaFwiOiAwLjA5LFxuICAgICAgICAgICAgXCJyelwiOiAxLjU3MDc5NjMyNjc5NDg5NjYsXG4gICAgICAgICAgICBcInNlZ1wiOiA4LFxuICAgICAgICAgICAgXCJoZXhcIjogNTY1ODIwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJhdFwiOiBbXG4gICAgICAgICAgICAgIDAuMDc4LFxuICAgICAgICAgICAgICAwLjI3NixcbiAgICAgICAgICAgICAgLTAuMDU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgXCJydFwiOiAwLjA0MixcbiAgICAgICAgICAgIFwicmJcIjogMC4wNDIsXG4gICAgICAgICAgICBcImhcIjogMC4wMjYsXG4gICAgICAgICAgICBcInJ6XCI6IDEuNTcwNzk2MzI2Nzk0ODk2NixcbiAgICAgICAgICAgIFwic2VnXCI6IDEwLFxuICAgICAgICAgICAgXCJoZXhcIjogNjUxMzI0NlxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgfSBhcyBhbnk7XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBnZW9tZXRyeSBoZWxwZXJzICovXG5cbi8qKiBMb2NhbCBzdGFuZC1pbiBmb3IgQnVmZmVyR2VvbWV0cnlVdGlscy5tZXJnZUdlb21ldHJpZXMsIHdoaWNoIGNhbm5vdCBiZSBpbXBvcnRlZCBoZXJlLlxuICogIEV2ZXJ5dGhpbmcgaXMgY29udmVydGVkIHRvIG5vbi1pbmRleGVkIHNvIGF0dHJpYnV0ZSBhcnJheXMgY2FuIGJlIGFwcGVuZGVkOyB0aGF0IGNoYW5nZXMgdGhlXG4gKiAgdmVydGV4IGNvdW50IGJ1dCBOT1QgdGhlIHRyaWFuZ2xlIGNvdW50LCB3aGljaCBpcyB0aGUgYXhpcyB0aGUgYnVkZ2V0IG1lYXN1cmVzLiAqL1xuZnVuY3Rpb24gbWVyZ2VHZW9zKGdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHBhcnRzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHRlbXA6IGJvb2xlYW5bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGcgb2YgZ2Vvcykge1xuICAgIGlmIChnLmluZGV4KSB7IHBhcnRzLnB1c2goZy50b05vbkluZGV4ZWQoKSk7IHRlbXAucHVzaCh0cnVlKTsgfVxuICAgIGVsc2UgeyBwYXJ0cy5wdXNoKGcpOyB0ZW1wLnB1c2goZmFsc2UpOyB9XG4gIH1cbiAgbGV0IHRvdGFsID0gMDtcbiAgZm9yIChjb25zdCBnIG9mIHBhcnRzKSB0b3RhbCArPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgcG9zaXRpb24gPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMyk7XG4gIGNvbnN0IG5vcm1hbCA9IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKTtcbiAgY29uc3QgdXYgPSBuZXcgRmxvYXQzMkFycmF5KHRvdGFsICogMik7XG4gIC8vIENPTE9SIGhhcyB0byBiZSBjYXJyaWVkIHRvbywgYW5kIGl0IGlzIGVhc3kgdG8gZm9yZ2V0OiB0aGlzIGZ1bmN0aW9uIGNvcGllZCBwb3NpdGlvbiwgbm9ybWFsXG4gIC8vIGFuZCB1diBvbmx5LCBhbmQgdGhlIG1vc3F1ZSdzIHJpYmJlZCBkb21lcyBsb3N0IHRoZWlyIGdyZWVuLWFuZC1wYWxlIHN0cmlwaW5nIHRoZSBtb21lbnQgdGhleVxuICAvLyB3ZXJlIG1lcmdlZCB3aXRoIGFueXRoaW5nLiBUaGUgZmFpbHVyZSBpcyBzaWxlbnQgLS0gdGhlIGRvbWUgcmVuZGVycywgaW4gb25lIGZsYXQgY29sb3VyIC0tIGFuZFxuICAvLyB0b29rIGEgd3JvbmcgdGhlb3J5IGFib3V0IHNSR0IgZ2FtbWEgYmVmb3JlIHRoZSBhdHRyaWJ1dGUgbGlzdCB3YXMgcmVhZC4gQW55IGlucHV0IGNhcnJ5aW5nIGFcbiAgLy8gY29sb3VyIG1lYW5zIGV2ZXJ5IGlucHV0IGdldHMgb25lLCB3aGl0ZSB3aGVyZSBpdCBoYWQgbm9uZS5cbiAgY29uc3QgYW55Q29sb3IgPSBwYXJ0cy5zb21lKChnKSA9PiAhIWcuZ2V0QXR0cmlidXRlKCdjb2xvcicpKTtcbiAgY29uc3QgY29sb3IgPSBhbnlDb2xvciA/IG5ldyBGbG9hdDMyQXJyYXkodG90YWwgKiAzKS5maWxsKDEpIDogbnVsbDtcbiAgbGV0IHYgPSAwO1xuICBmb3IgKGNvbnN0IGcgb2YgcGFydHMpIHtcbiAgICBjb25zdCBwID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG4gPSBnLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyksIHQgPSBnLmdldEF0dHJpYnV0ZSgndXYnKTtcbiAgICBjb25zdCBjID0gZy5nZXRBdHRyaWJ1dGUoJ2NvbG9yJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICAgIHBvc2l0aW9uWyh2ICsgaSkgKiAzXSA9IHAuZ2V0WChpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAxXSA9IHAuZ2V0WShpKTsgcG9zaXRpb25bKHYgKyBpKSAqIDMgKyAyXSA9IHAuZ2V0WihpKTtcbiAgICAgIGlmIChuKSB7IG5vcm1hbFsodiArIGkpICogM10gPSBuLmdldFgoaSk7IG5vcm1hbFsodiArIGkpICogMyArIDFdID0gbi5nZXRZKGkpOyBub3JtYWxbKHYgKyBpKSAqIDMgKyAyXSA9IG4uZ2V0WihpKTsgfVxuICAgICAgaWYgKHQpIHsgdXZbKHYgKyBpKSAqIDJdID0gdC5nZXRYKGkpOyB1dlsodiArIGkpICogMiArIDFdID0gdC5nZXRZKGkpOyB9XG4gICAgICBpZiAoY29sb3IgJiYgYykgeyBjb2xvclsodiArIGkpICogM10gPSBjLmdldFgoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMV0gPSBjLmdldFkoaSk7IGNvbG9yWyh2ICsgaSkgKiAzICsgMl0gPSBjLmdldFooaSk7IH1cbiAgICB9XG4gICAgdiArPSBwLmNvdW50O1xuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHsgaWYgKHRlbXBbaV0pIHBhcnRzW2ldLmRpc3Bvc2UoKTsgZ2Vvc1tpXS5kaXNwb3NlKCk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIG91dC5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbiwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5vcm1hbCwgMykpO1xuICBvdXQuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgaWYgKGNvbG9yKSBvdXQuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sb3IsIDMpKTtcbiAgb3V0LmNvbXB1dGVCb3VuZGluZ0JveCgpOyBvdXQuY29tcHV0ZUJvdW5kaW5nU3BoZXJlKCk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGJveEF0KGN4OiBudW1iZXIsIGN5OiBudW1iZXIsIGN6OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBkOiBudW1iZXIpIHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSh3LCBoLCBkKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuZnVuY3Rpb24gYm94ZXMobGlzdDogbnVtYmVyW11bXSkgeyByZXR1cm4gbWVyZ2VHZW9zKGxpc3QubWFwKChiKSA9PiBib3hBdChiWzBdLCBiWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdKSkpOyB9XG5mdW5jdGlvbiBjeWxBdChjeDogbnVtYmVyLCBjeTogbnVtYmVyLCBjejogbnVtYmVyLCByVG9wOiBudW1iZXIsIHJCb3Q6IG51bWJlciwgaDogbnVtYmVyLCBzZWcgPSAxNikge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoclRvcCwgckJvdCwgaCwgc2VnKTsgZy50cmFuc2xhdGUoY3gsIGN5LCBjeik7IHJldHVybiBnO1xufVxuXG4vKipcbiAqIFJldm9sdmUgYSBwcm9maWxlIGFib3V0ICtZLiBgcHRzYCBhcmUgW3JhZGl1cywgeV0gaW4gbWV0cmVzLCBib3R0b20gdG8gdG9wLlxuICpcbiAqIFRoaXMgaXMgdGhlIHNoYXBlIHZvY2FidWxhcnkgdGhlIHdob2xlIG1vbnVtZW50YWwgc2V0IGlzIGJ1aWx0IGZyb20gLS0gYSBjaGVkaSdzIGJlbGwsIGEgcHJhbmcnc1xuICogY29ybi1jb2IgdGFwZXIsIGEgZG9tZSwgYSByaW5nZWQgc3BpcmUgYXJlIGFsbCBvbmUgcHJvZmlsZSBlYWNoLiBUd28gdGhpbmdzIGFyZSB3b3J0aCBzdGF0aW5nXG4gKiBiZWNhdXNlIGJvdGggY29zdCBhIHJlYnVpbGQgdG8gbGVhcm46XG4gKlxuICogLSBMYXRoZUdlb21ldHJ5IGlzIE9QRU4gYXQgdG9wIGFuZCBib3R0b20uIEEgcHJvZmlsZSB0aGF0IGRvZXMgbm90IGNsb3NlIG9uIHRoZSBheGlzIChyYWRpdXMgMClcbiAqICAgbGVhdmVzIGEgaG9sZSB0aGUgdHVybnRhYmxlIGdhdGUgcmVhZHMgYXMgYmFja2dyb3VuZCBlbmNsb3NlZCBieSB0aGUgc2lsaG91ZXR0ZS4gQ2xvc2UgaXQsIG9yXG4gKiAgIGNhcCBpdCB3aXRoIHdoYXQgc2l0cyBhYm92ZS5cbiAqIC0gUkFESUFMIFNFR01FTlQgQ09VTlQgaXMgdGhlIHRyaWFuZ2xlIGJ1ZGdldCdzIG1haW4gbGV2ZXIgaGVyZSBhbmQgaXQgaXMgcGVyLWxhdGhlOiBhIHByb2ZpbGUgb2ZcbiAqICAgbiBwb2ludHMgYXQgcyBzZWdtZW50cyBpcyAyKihuLTEpKnMgdHJpYW5nbGVzLiBBIDI0LXJpbmcgc3BpcmUgYXQgMzIgc2VnbWVudHMgaXMgMSw0NzJcbiAqICAgdHJpYW5nbGVzIG9uIGl0cyBvd24sIHdoaWNoIGlzIHdoeSB0aGUgbG93LXJlbGllZiByaW5ncyBhcmUgYSBwcm9maWxlIHJhdGhlciB0aGFuIDI0IHJpbmdzLlxuICovXG5mdW5jdGlvbiBsYXRoZShwdHM6IG51bWJlcltdW10sIHNlZzogbnVtYmVyLCB5T2Zmc2V0ID0gMCk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgdiA9IHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKE1hdGgubWF4KHBbMF0sIDApLCBwWzFdICsgeU9mZnNldCkpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkxhdGhlR2VvbWV0cnkodiwgc2VnKTtcbiAgZy5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgc3RlcHBlZCB0YXBlciBhcyBhIGxhdGhlIHByb2ZpbGU6IGByaW5nc2AgYWx0ZXJuYXRpbmcgb3V0L2luIHJhZGlpIGNsaW1iaW5nIGZyb20geTAgdG8geTEuXG4gKiAgT25lIGdlb21ldHJ5LCBvbmUgZHJhdyBjYWxsLCBhbmQgdGhlIHN0ZXAgY291bnQgaXMgYSBwcm9maWxlLXBvaW50IGNvdW50IHJhdGhlciB0aGFuIGEgbWVzaFxuICogIGNvdW50IC0tIHdoaWNoIGlzIHdoYXQga2VlcHMgYSAyMC1yaW5nIGNoZWRpIHNwaXJlIGluc2lkZSBhIDMyLWdlb21ldHJ5IGNlaWxpbmcuICovXG5mdW5jdGlvbiByaW5nZWRUYXBlcih5MDogbnVtYmVyLCB5MTogbnVtYmVyLCByMDogbnVtYmVyLCByMTogbnVtYmVyLCByaW5nczogbnVtYmVyLCBidWxnZTogbnVtYmVyKTogbnVtYmVyW11bXSB7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSByaW5nczsgaSsrKSB7XG4gICAgY29uc3QgdCA9IGkgLyByaW5ncztcbiAgICBjb25zdCB5ID0geTAgKyAoeTEgLSB5MCkgKiB0O1xuICAgIGNvbnN0IHIgPSByMCArIChyMSAtIHIwKSAqIHQ7XG4gICAgY29uc3Qgc3RlcCA9ICh5MSAtIHkwKSAvIHJpbmdzO1xuICAgIHB0cy5wdXNoKFtyICsgYnVsZ2UsIHldKTtcbiAgICBwdHMucHVzaChbciArIGJ1bGdlLCB5ICsgc3RlcCAqIDAuNDVdKTtcbiAgICBwdHMucHVzaChbciwgeSArIHN0ZXAgKiAwLjU1XSk7XG4gIH1cbiAgcHRzLnB1c2goW3IxLCB5MV0pO1xuICByZXR1cm4gcHRzO1xufVxuXG5cbi8qKlxuICogVGhlIFJFREVOVEVEIHNxdWFyZSBwbGFuIC0tIGEgc3F1YXJlIHdob3NlIGZvdXIgY29ybmVycyBhcmUgY3V0IGJhY2sgaW4gdHdvIHJpZ2h0LWFuZ2xlZCBzdGVwcy5cbiAqIEl0IGlzIHRoZSBwbGFuIG9mIGEgVGhhaSBjaGVkaSdzIHRlcnJhY2UgYW5kIG9mIGEgcHJhbmcncyBiYXNlLCBhbmQgYnVpbGRpbmcgaXQgYXMgYSBTaGFwZSB0aGF0XG4gKiBpcyB0aGVuIGV4dHJ1ZGVkIGlzIG5vdCBhIHN0eWxpc3RpYyBjaG9pY2U6IHRoZSBvYnZpb3VzIGFsdGVybmF0aXZlLCBhIHdpZGUgYm94IGNyb3NzZWQgYnkgYVxuICogZGVlcCBib3gsIHB1dHMgdGhlIHR3byBib3hlcycgdG9wIGZhY2VzIGluIHRoZSBzYW1lIHBsYW5lIGZhY2luZyB0aGUgc2FtZSB3YXkgb3ZlciB0aGVpciB3aG9sZVxuICogaW50ZXJzZWN0aW9uLCB3aGljaCB6LWZpZ2h0cy4gT25lIGV4dHJ1c2lvbiBvZiBvbmUgY2xvc2VkIHBsYW4gaGFzIG5vIGludGVyaW9yIGNvaW5jaWRlbmNlIGF0XG4gKiBhbGwuXG4gKlxuICogYGFgIGlzIHRoZSBoYWxmLXdpZHRoIGFjcm9zcyB0aGUgZmxhdHM7IGByYCBpcyB0aGUgZGVwdGggb2YgZWFjaCByZWRlbnQgc3RlcC5cbiAqL1xuZnVuY3Rpb24gcmVkZW50ZWRTaGFwZShhOiBudW1iZXIsIHI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcXVhZCA9IFtbYSwgYSAtIDIgKiByXSwgW2EgLSByLCBhIC0gMiAqIHJdLCBbYSAtIHIsIGEgLSByXSwgW2EgLSAyICogciwgYSAtIHJdLCBbYSAtIDIgKiByLCBhXV07XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGxldCBrID0gMDsgayA8IDQ7IGsrKykge1xuICAgIGZvciAoY29uc3QgW3gsIHpdIG9mIHF1YWQpIHtcbiAgICAgIC8vIHJvdDkwXmssIGFwcGxpZWQgayB0aW1lczogKHgsIHopIC0+ICgteiwgeClcbiAgICAgIGxldCBweCA9IHgsIHB6ID0gejtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgazsgaSsrKSB7IGNvbnN0IHQgPSBweDsgcHggPSAtcHo7IHB6ID0gdDsgfVxuICAgICAgcHRzLnB1c2goW3B4LCBwel0pO1xuICAgIH1cbiAgfVxuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqIEV4dHJ1ZGUgYSBwbGFuIFNoYXBlIGJldHdlZW4gdHdvIGhlaWdodHMuIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgYWxvbmcgK1osIHNvIHRoZSByZXN1bHQgaXNcbiAqICByb3RhdGVkIG9udG8gK1k7IGAtTWF0aC5QSSAvIDJgIGFib3V0IFggbWFwcyArWiB0byArWSBhbmQgbGVhdmVzIHRoZSBwbGFuJ3Mgb3duIHggYXMgeC4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVTbGFiKHNoYXBlOiBUSFJFRS5TaGFwZSwgeTA6IG51bWJlciwgeTE6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5FeHRydWRlR2VvbWV0cnkoc2hhcGUsIHsgZGVwdGg6IHkxIC0geTAsIGJldmVsRW5hYmxlZDogZmFsc2UsIGN1cnZlU2VnbWVudHM6IDQgfSk7XG4gIC8vIHJvdGF0ZVgoLVBJLzIpIG1hcHMgKHgsIHksIHopIC0+ICh4LCB6LCAteSksIHNvIHRoZSBleHRydXNpb24gZGVwdGggYmVjb21lcyBoZWlnaHQgYW5kIHRoZVxuICAvLyBwbGFuJ3Mgb3duIHNlY29uZCBheGlzIGJlY29tZXMgLXouIEV2ZXJ5IHBsYW4gaGVyZSBpcyBmb3VyLWZvbGQgc3ltbWV0cmljLCBzbyB0aGF0IHNpZ24gaXNcbiAgLy8gaW1tYXRlcmlhbDsgd2hhdCBtYXR0ZXJzIGlzIHRoYXQgdGhlIHNsYWIgbm93IHJ1bnMgVVAgZnJvbSB5PTAgYW5kIG5lZWRzIGxpZnRpbmcgYnkgeTAuXG4gIGcucm90YXRlWCgtTWF0aC5QSSAvIDIpO1xuICBnLnRyYW5zbGF0ZSgwLCB5MCwgMCk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBzcXVhcmUgcGxhbiB3aXRoIGEgcmVjdGFuZ3VsYXIgTk9UQ0ggY3V0IGludG8gaXRzICtYIGZhY2UgLS0gdGhlIHN0YWlyIHdlbGwgb2YgYSB0ZW1wbGVcbiAqIHRlcnJhY2UuIEN1dHRpbmcgdGhlIHN0YWlyIG91dCBvZiB0aGUgcGxhbiByYXRoZXIgdGhhbiBoYW5naW5nIGl0IG9mZiB0aGUgb3V0c2lkZSBpcyB3aGF0IGtlZXBzXG4gKiBhbiBhc3ltbWV0cmljIGZlYXR1cmUgaW5zaWRlIGEgc3ltbWV0cmljIGRlY2xhcmVkIGVudmVsb3BlOiBhIGZsaWdodCBwcm9qZWN0aW5nIHBhc3QgYSA5IG1cbiAqIHRlcnJhY2Ugd291bGQgcHV0IHRoZSBwcm9wJ3MgYm91bmRpbmcgYm94IG9mZi1jZW50cmUgYW5kIG92ZXIgaXRzIGRlY2xhcmVkIHdpZHRoIG9uIG9uZSBzaWRlLlxuICovXG5mdW5jdGlvbiBub3RjaGVkU3F1YXJlKGE6IG51bWJlciwgbm90Y2hIYWxmWjogbnVtYmVyLCB4SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1thLCAtYV0sIFthLCAtbm90Y2hIYWxmWl0sIFt4SW5uZXIsIC1ub3RjaEhhbGZaXSwgW3hJbm5lciwgbm90Y2hIYWxmWl0sXG4gICAgICAgICAgICAgICBbYSwgbm90Y2hIYWxmWl0sIFthLCBhXSwgWy1hLCBhXSwgWy1hLCAtYV1dO1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHRzWzBdWzBdLCBwdHNbMF1bMV0pO1xuICBmb3IgKGxldCBpID0gMTsgaSA8IHB0cy5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHB0c1tpXVswXSwgcHRzW2ldWzFdKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIHJldHVybiBzaGFwZTtcbn1cblxuLyoqXG4gKiBBIFJFQ1RBTkdVTEFSIHBsYW4gd2l0aCBhIG5vdGNoIGN1dCBpbnRvIGl0cyArWiBmYWNlLiBUaGUgc3F1YXJlIHZlcnNpb24gYWJvdmUgaXMgd2hhdCBhIGNoZWRpIG9yXG4gKiBhIHByYW5nIHRlcnJhY2UgbmVlZHM7IGEgaGFsbCB0aGF0IGlzIHR3aWNlIGFzIGxvbmcgYXMgaXQgaXMgd2lkZSBuZWVkcyB0aGUgdHdvIGhhbGYtZXh0ZW50cyBrZXB0XG4gKiBhcGFydCwgYW5kIGl0cyBzdGFpciBpcyBvbiBhIHNob3J0IGVuZCByYXRoZXIgdGhhbiBhIGxvbmcgb25lLlxuICovXG5mdW5jdGlvbiBub3RjaGVkUmVjdChoeDogbnVtYmVyLCBoejogbnVtYmVyLCBueDogbnVtYmVyLCB6SW5uZXI6IG51bWJlcik6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgcHRzID0gW1toeCwgLWh6XSwgW2h4LCBoel0sIFtueCwgaHpdLCBbbngsIHpJbm5lcl0sIFstbngsIHpJbm5lcl0sIFstbngsIGh6XSwgWy1oeCwgaHpdLCBbLWh4LCAtaHpdXTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKHB0c1swXVswXSwgcHRzWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwdHMubGVuZ3RoOyBpKyspIHNoYXBlLmxpbmVUbyhwdHNbaV1bMF0sIHB0c1tpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogVGhlIGNyb3NzLXNlY3Rpb24gb2Ygb25lIHJvb2YgdGllciwgYXMgYSBjbG9zZWQgdHJhcGV6b2lkIGluIFhZOiBlYXZlcyBhdCAoKy1oYWxmQmFzZSwgeTApXG4gKiByaXNpbmcgYXQgYHBpdGNoYCAoYXMgYSB0YW5nZW50KSB0byBhIGZsYXQgdG9wIGF0IHkxLlxuICpcbiAqIFRoYWkgdGVtcGxlIHJvb2ZzIG5lc3QsIGFuZCB0aGF0IGlzIHRoZSByZWFzb24gZm9yIHRoZSBUUlVOQ0FUSU9OLiBUaHJlZSBmdWxsIGdhYmxlcyBhdCBvbmVcbiAqIHBpdGNoIGNhbm5vdCBuZXN0IC0tIHRoZSB3aWRlc3QgdGllcidzIHJpZGdlIHdvdWxkIGJlIHRoZSBoaWdoZXN0LCB3aGljaCBpcyB1cHNpZGUgZG93bi4gV2hhdFxuICogYWN0dWFsbHkgaGFwcGVucyBpcyB0aGF0IGVhY2ggbG93ZXIgdGllciBpcyBjdXQgb2ZmIGF0IHRoZSBoZWlnaHQgd2hlcmUgdGhlIG5leHQgdGllcidzIGVhdmVzXG4gKiBiZWdpbiwgYW5kIGl0cyB1cHBlciBwYXJ0IGlzIGhpZGRlbiBiZWhpbmQgdGhhdCB0aWVyOyBvbmx5IHRoZSB0b3Btb3N0IHRpZXIgaXMgYSByZWFsIGdhYmxlLFxuICogY2xvc2VkIGJ5IHBhc3NpbmcgeTEgYXQgdGhlIGFwZXguXG4gKi9cbmZ1bmN0aW9uIHRpZXJQcm9maWxlKGhhbGZCYXNlOiBudW1iZXIsIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHBpdGNoOiBudW1iZXIpOiBUSFJFRS5TaGFwZSB7XG4gIGNvbnN0IGluc2V0ID0gKHkxIC0geTApIC8gcGl0Y2g7XG4gIGNvbnN0IGhhbGZUb3AgPSBoYWxmQmFzZSAtIGluc2V0O1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8oLWhhbGZCYXNlLCB5MCk7XG4gIHNoYXBlLmxpbmVUbyhoYWxmQmFzZSwgeTApO1xuICBpZiAoaGFsZlRvcCA+IDAuMDIpIHtcbiAgICBzaGFwZS5saW5lVG8oaGFsZlRvcCwgeTEpO1xuICAgIHNoYXBlLmxpbmVUbygtaGFsZlRvcCwgeTEpO1xuICB9IGVsc2Uge1xuICAgIHNoYXBlLmxpbmVUbygwLCB5MCArIGhhbGZCYXNlICogcGl0Y2gpOyAgIC8vIGEgcmVhbCByaWRnZTogdGhlIHRvcG1vc3QgdGllciBjbG9zZXMgdG8gYSBwb2ludFxuICB9XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKiBFeHRydWRlIGEgcGxhbiBTaGFwZSBhbG9uZyArWiBiZXR3ZWVuIHR3byBkZXB0aHMsIHdpdGggbm8gcm90YXRpb24gLS0gdGhlIG5hdGl2ZSBkaXJlY3Rpb24gb2ZcbiAqICBFeHRydWRlR2VvbWV0cnkuIFVzZWQgd2hlcmUgdGhlIHByb2ZpbGUgZ2VudWluZWx5IGxpdmVzIGluIHRoZSBYWSBwbGFuZSwgc3VjaCBhcyB0aGUgcmFraW5nXG4gKiAgdHJpYW5nbGUgb2YgYSBzdGFpciBjaGVlay4gKi9cbmZ1bmN0aW9uIGV4dHJ1ZGVBbG9uZ1ooc2hhcGU6IFRIUkVFLlNoYXBlLCB6MDogbnVtYmVyLCB6MTogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogejEgLSB6MCwgYmV2ZWxFbmFibGVkOiBmYWxzZSwgY3VydmVTZWdtZW50czogNCB9KTtcbiAgZy50cmFuc2xhdGUoMCwgMCwgejApO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKiogQSByZWN0YW5ndWxhciBwbGF0ZSB3aG9zZSBoZWFkIGlzIGEgaGFsZi1yb3VuZCBhcmNoLCBvcHRpb25hbGx5IGNhcnJ5aW5nIGFuIGFyY2hlZCBhcGVydHVyZSBvZlxuICogIHRoZSBzYW1lIGZvcm0uIFRoZSBhcGVydHVyZSBhcmMgaXMgQUxXQVlTIHN3ZXB0IGZyb20gYW5nbGUgMCB0byBQSTogd3JpdHRlbiB0aGUgb3RoZXIgd2F5IGl0XG4gKiAgcnVucyB1bmRlciB0aGUgY2lyY2xlIGluc3RlYWQgb2Ygb3ZlciBpdCBhbmQgbGVhdmVzIHRoZSBhcmNoIGhlYWQgZmlsbGVkIHNvbGlkLCB3aGljaCByZWFkcyBhc1xuICogIGEgc3F1YXJlIHdpbmRvdyB3aXRoIGEgZ2hvc3QgYXJjaCBkcmF3biBhY3Jvc3MgaXQuICovXG5mdW5jdGlvbiBhcmNoZWRQbGF0ZSh3OiBudW1iZXIsIGg6IG51bWJlciwgYXJjaFI6IG51bWJlciwgc3ByaW5nOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICBob2xlPzogeyByOiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgc2hhcGUubW92ZVRvKC13IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgMCk7XG4gIHNoYXBlLmxpbmVUbyh3IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuYWJzYXJjKDAsIHNwcmluZywgYXJjaFIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgc2hhcGUubGluZVRvKC13IC8gMiwgc3ByaW5nKTtcbiAgc2hhcGUuY2xvc2VQYXRoKCk7XG4gIGlmIChob2xlKSB7XG4gICAgY29uc3QgcCA9IG5ldyBUSFJFRS5QYXRoKCk7XG4gICAgcC5tb3ZlVG8oaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAubGluZVRvKGhvbGUuciwgaG9sZS5zcHJpbmcpO1xuICAgIHAuYWJzYXJjKDAsIGhvbGUuc3ByaW5nLCBob2xlLnIsIDAsIE1hdGguUEksIGZhbHNlKTtcbiAgICBwLmxpbmVUbygtaG9sZS5yLCBob2xlLnNpbGwpO1xuICAgIHAuY2xvc2VQYXRoKCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBISVAgUk9PRiB3aXRoIGEgY29uY2F2ZSBzbG9wZSBhbmQgdXBzd2VwdCBjb3JuZXJzIC0tIHRoZSBFYXN0IEFzaWFuIHJvb2YsIHdoaWNoIG5vbmUgb2YgdGhlXG4gKiBvdGhlciBzaGFwZSBoZWxwZXJzIGhlcmUgY2FuIGV4cHJlc3MuXG4gKlxuICogSXQgaXMgZ2VuZXJhdGVkIGFzIGEgcmluZyBvZiByZWN0YW5nbGVzIGNsaW1iaW5nIGZyb20gdGhlIGVhdmVzIHRvIHRoZSByaWRnZSByYXRoZXIgdGhhbiBhcyBhblxuICogZXh0cnVkZWQgcHJvZmlsZSwgYmVjYXVzZSBhIGhpcCBzbG9wZXMgb24gYWxsIGZvdXIgc2lkZXM6IGFuIGV4dHJ1c2lvbiBnaXZlcyB2ZXJ0aWNhbCBnYWJsZSBlbmRzLFxuICogd2hpY2ggaXMgYSBkaWZmZXJlbnQgYnVpbGRpbmcuXG4gKlxuICogVGhlIGhvcml6b250YWwgc2hyaW5rIGZvbGxvd3MgYCgxIC0gdCleY3VydmVFeHBgLCBhbmQgdGhlIGV4cG9uZW50IG11c3QgYmUgQUJPVkUgb25lLiBUaGUgc2xvcGVcbiAqIGF0IGFueSBoZWlnaHQgaXMgZHkvZHgsIHNvIGEgcGxhbiB0aGF0IHNocmlua3MgRkFTVCBmb3IgYSBnaXZlbiByaXNlIGlzIGEgc2hhbGxvdyBzbG9wZTogd2l0aFxuICogcSA+IDEgdGhlIGRlcml2YXRpdmUgcSgxLXQpXihxLTEpIGlzIGxhcmdlIGF0IHRoZSBlYXZlcyBhbmQgc21hbGwgYXQgdGhlIHJpZGdlLCB3aGljaCBpcyBzaGFsbG93XG4gKiBlYXZlcyBhbmQgYSBzdGVlcCByaWRnZSAtLSB0aGUgRWFzdCBBc2lhbiByb29mLiBCZWxvdyBvbmUgaXQgaXMgdGhlIG90aGVyIHdheSByb3VuZCBhbmQgYnVpbGRzIGFcbiAqIGZsYXQtdG9wcGVkIHRlbnQsIHdoaWNoIGlzIHdoYXQgdGhlIGZpcnN0IGF0dGVtcHQgaGVyZSByZW5kZXJlZC4gQSBsaW5lYXIgc2hyaW5rIGdpdmVzIHRoZVxuICogc3RyYWlnaHQgcHlyYW1pZCBvZiBhIGhpcCByb29mIGFueXdoZXJlIGVsc2UgaW4gdGhlIHdvcmxkLlxuICpcbiAqIGBjb3JuZXJMaWZ0YCByYWlzZXMgYW5kIHB1c2hlcyBvdXQgdGhlIGZvdXIgZWF2ZXMgY29ybmVycywgdGFwZXJpbmcgYXdheSBieSBhIHRoaXJkIG9mIHRoZSB3YXlcbiAqIHVwLiBUaGF0IHVwc3dlZXAgaXMgdGhlIHNpbmdsZSBtb3N0IGlkZW50aWZ5aW5nIHRoaW5nIGFib3V0IHRoZSByb29mLCBhbmQgaXQgaXMgd2h5IHRoZSBwbGFuXG4gKiBoYWxmLXdpZHRoIHBhc3NlZCBpbiBtdXN0IGxlYXZlIHJvb206IHRoZSBjb3JuZXJzIGVuZCB1cCBmdXJ0aGVyIG91dCB0aGFuIHRoZSBlYXZlcyBsaW5lLlxuICpcbiAqIFRoZSByZXN1bHQgaXMgYSBjbG9zZWQgc29saWQgLS0gb3V0ZXIgc3VyZmFjZSwgYSBzb2ZmaXQgYGRyb3BgIGJlbG93IHRoZSBlYXZlcywgYW5kIGEgZmFzY2lhIGJhbmRcbiAqIGJldHdlZW4gdGhlbS4gQW4gb3BlbiBzaGVsbCB3b3VsZCBsZXQgdGhlIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueVxuICogbG93IGFuZ2xlLlxuICovXG5mdW5jdGlvbiBoaXBSb29mKGh4OiBudW1iZXIsIGh6OiBudW1iZXIsIHJpZGdlSGFsZlo6IG51bWJlciwgeTA6IG51bWJlciwgeTE6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgY3VydmVFeHA6IG51bWJlciwgc3RlcHM6IG51bWJlciwgZHJvcDogbnVtYmVyLCBjb3JuZXJMaWZ0OiBudW1iZXIpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIC8vIEVJR0hUIHBvaW50cyBwZXIgcmluZywgbm90IGZvdXI6IHRoZSBmb3VyIGNvcm5lcnMgYW5kIHRoZSBmb3VyIGVkZ2UgbWlkcG9pbnRzLiBXaXRoIGZvdXIgdGhlXG4gIC8vIGNvcm5lciBsaWZ0IGhhcyBub3doZXJlIHRvIGZhbGwgYXdheSB0byBhbmQgcmFpc2VzIHRoZSBFTlRJUkUgZWF2ZXMgbGluZSwgd2hpY2ggYnVpbHQgYSBzYWRkbGVcbiAgLy8gaW5zdGVhZCBvZiBhIHJvb2YuIFRoZSBtaWRwb2ludHMgYXJlIHdoYXQgaG9sZCB0aGUgZWF2ZXMgZG93biBiZXR3ZWVuIHRoZSBjb3JuZXJzLlxuICAvL1xuICAvLyBUaGUgb3JkZXIgaXMgKCt4LC16KSwgbWlkLCAoLXgsLXopLCBtaWQsICgteCwreiksIG1pZCwgKCt4LCt6KSwgbWlkLCB3aGljaCBpcyBjb3VudGVyLWNsb2Nrd2lzZVxuICAvLyBzZWVuIGZyb20gQUJPVkUgLS0gdGhlIHdpbmRpbmcgYW4gdXB3YXJkLWZhY2luZyBzdXJmYWNlIG5lZWRzLiBXb3VuZCB0aGUgb3RoZXIgd2F5IHRoZSB3aG9sZVxuICAvLyByb29mIHJlbmRlcnMgaW5zaWRlIG91dCwgd2hpY2ggbG9va3MgbGlrZSBhIHRoaW4gYmxhY2sgbWVtYnJhbmUgcmF0aGVyIHRoYW4gYSBtaXN0YWtlLlxuICBjb25zdCByaW5nID0gKHQ6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGYgPSBNYXRoLnBvdygxIC0gdCwgY3VydmVFeHApO1xuICAgIGNvbnN0IGcgPSBNYXRoLnBvdyhNYXRoLm1heCgwLCAxIC0gdCAvIDAuMzQpLCAyKTtcbiAgICBjb25zdCBsaWZ0ID0gY29ybmVyTGlmdCAqIGcsIG91dCA9IDEgKyAwLjA0NSAqIGc7XG4gICAgY29uc3QgYXggPSBoeCAqIGYgKiBvdXQsIGF6ID0gKHJpZGdlSGFsZlogKyAoaHogLSByaWRnZUhhbGZaKSAqIGYpICogb3V0O1xuICAgIGNvbnN0IHkgPSB5MCArICh5MSAtIHkwKSAqIHQ7XG4gICAgY29uc3QgYyA9ICh4OiBudW1iZXIsIHo6IG51bWJlcikgPT4gW3gsIHkgKyBsaWZ0LCB6XTtcbiAgICBjb25zdCBtID0gKHg6IG51bWJlciwgejogbnVtYmVyKSA9PiBbeCwgeSwgel07XG4gICAgcmV0dXJuIFtjKGF4LCAtYXopLCBtKDAsIC1heiksIGMoLWF4LCAtYXopLCBtKC1heCwgMCksXG4gICAgICAgICAgICBjKC1heCwgYXopLCBtKDAsIGF6KSwgYyhheCwgYXopLCBtKGF4LCAwKV07XG4gIH07XG4gIGNvbnN0IHRyaTogbnVtYmVyW10gPSBbXTtcbiAgY29uc3QgcHVzaCA9IChhOiBudW1iZXJbXSwgYjogbnVtYmVyW10sIGM6IG51bWJlcltdKSA9PiB0cmkucHVzaCguLi5hLCAuLi5iLCAuLi5jKTtcbiAgbGV0IHByZXYgPSByaW5nKDApO1xuICBmb3IgKGxldCBpID0gMTsgaSA8PSBzdGVwczsgaSsrKSB7XG4gICAgY29uc3QgY3VyID0gcmluZyhpIC8gc3RlcHMpO1xuICAgIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgICBjb25zdCBrMiA9IChrICsgMSkgJSA4O1xuICAgICAgcHVzaChwcmV2W2tdLCBwcmV2W2syXSwgY3VyW2syXSk7XG4gICAgICBwdXNoKHByZXZba10sIGN1cltrMl0sIGN1cltrXSk7XG4gICAgfVxuICAgIHByZXYgPSBjdXI7XG4gIH1cbiAgLy8gRmFzY2lhIGJhbmQgYW5kIHNvZmZpdCwgc28gdGhlIHJvb2YgaXMgYSBzb2xpZCByYXRoZXIgdGhhbiBhIHNoZWxsLiBBbiBvcGVuIHNoZWxsIGxldHMgdGhlXG4gIC8vIHR1cm50YWJsZSBnYXRlIHJlYWQgc3RyYWlnaHQgdGhyb3VnaCB0aGUgcm9vZiBmcm9tIGFueSBsb3cgYW5nbGUuXG4gIGNvbnN0IGUgPSByaW5nKDApO1xuICBjb25zdCBsb3cgPSBlLm1hcCgocCkgPT4gW3BbMF0sIHBbMV0gLSBkcm9wLCBwWzJdXSk7XG4gIGZvciAobGV0IGsgPSAwOyBrIDwgODsgaysrKSB7XG4gICAgY29uc3QgazIgPSAoayArIDEpICUgODtcbiAgICBwdXNoKGxvd1trXSwgZVtrXSwgZVtrMl0pO1xuICAgIHB1c2gobG93W2tdLCBlW2syXSwgbG93W2syXSk7XG4gIH1cbiAgZm9yIChsZXQgayA9IDE7IGsgPCA3OyBrKyspIHB1c2gobG93WzBdLCBsb3dbayArIDFdLCBsb3dba10pOyAgIC8vIHNvZmZpdCBmYW4sIGZhY2luZyBkb3duXG5cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBSSUJCRUQgZG9tZSAtLSBhIHN1cmZhY2Ugb2YgcmV2b2x1dGlvbiB3aG9zZSByYWRpdXMgaXMgbW9kdWxhdGVkIGFyb3VuZCB0aGUgYXhpcywgc28gaXQgcmVhZHNcbiAqIGFzIHRoZSBtZWxvbi1yaWJiZWQgZG9tZSBvZiBhIG1vc3F1ZSByYXRoZXIgdGhhbiBhIHNtb290aCBoZW1pc3BoZXJlLlxuICpcbiAqIExhdGhlR2VvbWV0cnkgY2Fubm90IGRvIHRoaXM6IGEgbGF0aGUgcmV2b2x2ZXMgb25lIHByb2ZpbGUgYXQgb25lIHJhZGl1cyBwZXIgaGVpZ2h0LCBhbmQgcmlicyBhcmVcbiAqIGEgdmFyaWF0aW9uIEFST1VORCB0aGUgYXhpcywgbm90IGFsb25nIGl0LiBTbyB0aGUgc3VyZmFjZSBpcyBnZW5lcmF0ZWQgZGlyZWN0bHksIHNhbXBsaW5nXG4gKiBgMSArIGFtcCAqIGNvcyhyaWJzICogdGhldGEpYCBwZXIgc2VjdG9yLiBUaGUgcmlicyBhcmUgdGhlIHJlYXNvbiB0aGUgZG9tZSBpcyByZWNvZ25pc2FibGUgYXQgdGhlXG4gKiBkaXN0YW5jZSBhIHZpbGxhZ2Ugc2t5bGluZSBpcyByZWFkIGZyb20gLS0gYSBzbW9vdGggZ3JlZW4gaGVtaXNwaGVyZSByZWFkcyBhcyBhIHdhdGVyIHRhbmsuXG4gKi9cbmZ1bmN0aW9uIHJpYmJlZERvbWUocHJvZmlsZTogbnVtYmVyW11bXSwgcmliczogbnVtYmVyLCBhbXA6IG51bWJlciwgc2VnOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICAgIHZhbGxleT86IG51bWJlcltdKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB0cmk6IG51bWJlcltdID0gW107XG4gIGNvbnN0IGNvbDogbnVtYmVyW10gPSBbXTtcbiAgLy8gVGhlIHJpYnMgYXJlIG5vdCBvbmx5IGEgc2hhcGUuIE9uIHRoZSBtb3NxdWUncyBkb21lcyB0aGUgY3Jlc3RzIGFyZSBwYWxlIGFuZCB0aGUgdmFsbGV5cyBhcmVcbiAgLy8gZ3JlZW4sIGFuZCB0aGF0IHN0cmlwZSBpcyBtb3N0IG9mIHdoYXQgdGhlIGRvbWUgcmVhZHMgYXMgYXQgZGlzdGFuY2UuIEl0IGlzIGNhcnJpZWQgYXMgYVxuICAvLyBwZXItdmVydGV4IE1VTFRJUExJRVIgb2ZmIHRoZSBzYW1lIGNvc2luZSB0aGF0IHNoYXBlcyB0aGUgcmliIC0tIHR3byBtZWFzdXJlbWVudHMsIHRoZSBjcmVzdFxuICAvLyBjb2xvdXIgb24gdGhlIG1hdGVyaWFsIGFuZCB0aGUgdmFsbGV5IGFzIHRoZSByYXRpbyBiZXR3ZWVuIHRoZW0gLS0gc28gdGhlIHN0cmlwaW5nIGNvc3RzIGFuXG4gIC8vIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIHRleHR1cmUgc2V0IG9yIGEgc2Vjb25kIGRyYXcgY2FsbC5cbiAgY29uc3QgdGludCA9IChqOiBudW1iZXIpID0+IHtcbiAgICBpZiAoIXZhbGxleSkgcmV0dXJuIFsxLCAxLCAxXTtcbiAgICAvLyBSYWlzZWQgdG8gMC41NSByYXRoZXIgdGhhbiBsZWZ0IGxpbmVhci4gQSBjb3NpbmUgc3BlbmRzIGhhbGYgaXRzIGFyZWEgbmVhciBlYWNoIGV4dHJlbWUsIGFuZFxuICAgIC8vIHRoYXQgcmVuZGVycyBhIGRvbWUgdGhhdCBpcyBwYWxlIG92ZXJhbGwgd2hlcmUgdGhlIHBsYXRlJ3MgaXMgZ3JlZW4gb3ZlcmFsbDogdGhlIGNyZXN0IGlzIGFcbiAgICAvLyBuYXJyb3cgaGlnaGxpZ2h0IG9uIGEgcmVhbCByaWIsIG5vdCBoYWxmIG9mIGl0LiBUaGUgZXhwb25lbnQgd2lkZW5zIHRoZSB2YWxsZXkuXG4gICAgY29uc3QgZiA9IE1hdGgucG93KCgxIC0gTWF0aC5jb3MocmlicyAqICgoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZykpKSAvIDIsIDAuNTUpO1xuICAgIHJldHVybiBbMSArICh2YWxsZXlbMF0gLSAxKSAqIGYsIDEgKyAodmFsbGV5WzFdIC0gMSkgKiBmLCAxICsgKHZhbGxleVsyXSAtIDEpICogZl07XG4gIH07XG4gIGNvbnN0IHB1c2ggPSAoYTogbnVtYmVyW10sIGI6IG51bWJlcltdLCBjOiBudW1iZXJbXSkgPT4gdHJpLnB1c2goLi4uYSwgLi4uYiwgLi4uYyk7XG4gIGNvbnN0IGF0ID0gKGk6IG51bWJlciwgajogbnVtYmVyKSA9PiB7XG4gICAgY29uc3QgdGggPSAoaiAlIHNlZykgKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICBjb25zdCBmID0gMSArIGFtcCAqIE1hdGguY29zKHJpYnMgKiB0aCk7XG4gICAgY29uc3QgciA9IHByb2ZpbGVbaV1bMF0gKiBmO1xuICAgIHJldHVybiBbTWF0aC5zaW4odGgpICogciwgcHJvZmlsZVtpXVsxXSwgTWF0aC5jb3ModGgpICogcl07XG4gIH07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvZmlsZS5sZW5ndGggLSAxOyBpKyspIHtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCBhID0gYXQoaSwgaiksIGIgPSBhdChpLCBqICsgMSksIGMgPSBhdChpICsgMSwgaiArIDEpLCBkID0gYXQoaSArIDEsIGopO1xuICAgICAgcHVzaChhLCBiLCBjKTtcbiAgICAgIHB1c2goYSwgYywgZCk7XG4gICAgICBjb25zdCB0YSA9IHRpbnQoaiksIHRiID0gdGludChqICsgMSk7XG4gICAgICBjb2wucHVzaCguLi50YSwgLi4udGIsIC4uLnRiLCAuLi50YSwgLi4udGIsIC4uLnRhKTtcbiAgICB9XG4gIH1cbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICBnLnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodHJpKSwgMykpO1xuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoKHRyaS5sZW5ndGggLyAzKSAqIDIpLCAyKSk7XG4gIGlmICh2YWxsZXkpIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2wpLCAzKSk7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBQT0lOVEVEIGFyY2ggcGxhdGUgLS0gdGhlIHR3by1jZW50cmVkIGFyY2ggb2YgYSBtb3NxdWUsIG5vdCB0aGUgaGFsZi1yb3VuZCBvZiBhIFJvbWFuIG9uZS5cbiAqIGBhcmNoZWRQbGF0ZWAgYWJvdmUgc3dlZXBzIGEgc2luZ2xlIHNlbWljaXJjbGUsIHdoaWNoIGlzIHRoZSB3cm9uZyBhcmNoIGhlcmUgYW5kIHJlYWRzIGFzIGFcbiAqIHJhaWx3YXkgdmlhZHVjdDsgdGhpcyBvbmUgcnVucyBlYWNoIHNpZGUgdXAgdG8gYSBzaGFyZWQgYXBleCB0aHJvdWdoIGEgcXVhZHJhdGljLCB3aGljaCBnaXZlcyB0aGVcbiAqIG9nZWUgcG9pbnQuXG4gKi9cbmZ1bmN0aW9uIHBvaW50ZWRBcmNoU2hhcGUodzogbnVtYmVyLCBzcHJpbmc6IG51bWJlciwgYXBleFJpc2U6IG51bWJlciwgc2lsbDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBob2xlPzogeyB3OiBudW1iZXIsIHNwcmluZzogbnVtYmVyLCBhcGV4UmlzZTogbnVtYmVyLCBzaWxsOiBudW1iZXIgfSk6IFRIUkVFLlNoYXBlIHtcbiAgY29uc3QgYnVpbGQgPSAodGFyZ2V0OiBUSFJFRS5TaGFwZSB8IFRIUkVFLlBhdGgsIHd3OiBudW1iZXIsIHNwOiBudW1iZXIsIHJpc2U6IG51bWJlciwgc2w6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGh3ID0gd3cgLyAyO1xuICAgIHRhcmdldC5tb3ZlVG8oaHcsIHNsKTtcbiAgICB0YXJnZXQubGluZVRvKGh3LCBzcCk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oaHcsIHNwICsgcmlzZSAqIDAuNzIsIDAsIHNwICsgcmlzZSk7XG4gICAgdGFyZ2V0LnF1YWRyYXRpY0N1cnZlVG8oLWh3LCBzcCArIHJpc2UgKiAwLjcyLCAtaHcsIHNwKTtcbiAgICB0YXJnZXQubGluZVRvKC1odywgc2wpO1xuICAgIHRhcmdldC5jbG9zZVBhdGgoKTtcbiAgfTtcbiAgY29uc3Qgc2hhcGUgPSBuZXcgVEhSRUUuU2hhcGUoKTtcbiAgYnVpbGQoc2hhcGUsIHcsIHNwcmluZywgYXBleFJpc2UsIHNpbGwpO1xuICBpZiAoaG9sZSkge1xuICAgIGNvbnN0IHAgPSBuZXcgVEhSRUUuUGF0aCgpO1xuICAgIGJ1aWxkKHAsIGhvbGUudywgaG9sZS5zcHJpbmcsIGhvbGUuYXBleFJpc2UsIGhvbGUuc2lsbCk7XG4gICAgc2hhcGUuaG9sZXMucHVzaChwKTtcbiAgfVxuICByZXR1cm4gc2hhcGU7XG59XG5cbi8qKlxuICogQSBUQVBFUklORyBUVUJFIGFsb25nICtaLCBidWlsdCBmcm9tIGEgbGlzdCBvZiBzdGF0aW9ucy4gRWFjaCBzdGF0aW9uIGlzXG4gKiBbeiwgY2VudHJlWCwgY2VudHJlWSwgcmFkaXVzWCwgcmFkaXVzWV0sIGFuZCBjb25zZWN1dGl2ZSBzdGF0aW9ucyBhcmUgam9pbmVkIGJ5IGEgcmluZyBvZiBgc2VnYFxuICogcG9pbnRzLCBzbyB0aGUgcmFkaXVzLCB0aGUgY2VudHJlIGFuZCB0aGUgZWxsaXBzZSByYXRpbyBjYW4gYWxsIHZhcnkgYWxvbmcgdGhlIGxlbmd0aC5cbiAqXG4gKiBUaGlzIGlzIHRoZSBvbmx5IE9SR0FOSUMgZm9ybSBpbiB0aGUgd2hvbGUga2l0LCBhbmQgaXQgZXhpc3RzIGZvciBvbmUgcHJvcDogYSByZWNsaW5pbmcgZmlndXJlIGlzXG4gKiBhIGxvbmcgc29mdCBtYXNzIHdob3NlIHNlY3Rpb24gY2hhbmdlcyBhdCBldmVyeSBwb2ludCBhbG9uZyBpdCAtLSBzaG91bGRlciB0byB3YWlzdCB0byBoaXAgdG9cbiAqIGNhbGYgLS0gYW5kIG5laXRoZXIgYSBsYXRoZSBub3IgYSBzdGFjayBvZiBib3hlcyBjYW4gc2F5IHRoYXQuIEEgYm94IGRlY29tcG9zaXRpb24gb2YgYSBseWluZ1xuICogYm9keSBpcyBub3QgYSBsb3ctcG9seSBib2R5LCBpdCBpcyBhIHBpbGUgb2YgbHVnZ2FnZS5cbiAqXG4gKiBBIHN0YXRpb24gd2l0aCBhIHJhZGl1cyBhdCBvciBuZWFyIHplcm8gY2xvc2VzIHRoZSB0dWJlLCBzbyB0aGUgZW5kcyBjYW4gYmUgY2FwcGVkIGJ5IHRoZVxuICogc3RhdGlvbiBsaXN0IGl0c2VsZiByYXRoZXIgdGhhbiBieSBhIHNlcGFyYXRlIGZhbi5cbiAqL1xuZnVuY3Rpb24gdHViZUFsb25nKHN0YXRpb25zOiBudW1iZXJbXVtdLCBzZWc6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgLy8gSU5ERVhFRCwgd2l0aCBzaGFyZWQgcmluZyB2ZXJ0aWNlcywgc28gY29tcHV0ZVZlcnRleE5vcm1hbHMgYXZlcmFnZXMgYWNyb3NzIHRoZSBxdWFkcyBhbmQgdGhlXG4gIC8vIHN1cmZhY2Ugc2hhZGVzIHNtb290aC4gVGhlIGZpcnN0IGJ1aWxkIGVtaXR0ZWQgbG9vc2UgdHJpYW5nbGVzLCBhbmQgYSBmbGF0LXNoYWRlZCBzb2Z0IGJvZHlcbiAgLy8gc2hvd3MgZXZlcnkgc3RhdGlvbiBhcyBhIGNyZWFzZSAtLSBhIHJlY2xpbmluZyBmaWd1cmUgdGhhdCBsb29rZWQgY3J1bXBsZWQgcmF0aGVyIHRoYW4gZHJhcGVkLlxuICBjb25zdCBwb3M6IG51bWJlcltdID0gW10sIGlkeDogbnVtYmVyW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IFt6LCBjeCwgY3ksIHJ4LCByeV0gPSBzdGF0aW9uc1tpXTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNlZzsgaisrKSB7XG4gICAgICBjb25zdCB0aCA9IGogKiBNYXRoLlBJICogMiAvIHNlZztcbiAgICAgIHBvcy5wdXNoKGN4ICsgTWF0aC5zaW4odGgpICogcngsIGN5ICsgTWF0aC5jb3ModGgpICogcnksIHopO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRpb25zLmxlbmd0aCAtIDE7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2VnOyBqKyspIHtcbiAgICAgIGNvbnN0IGEgPSBpICogc2VnICsgaiwgYiA9IChpICsgMSkgKiBzZWcgKyBqLCBjID0gKGkgKyAxKSAqIHNlZyArIChqICsgMSkgJSBzZWcsIGQgPSBpICogc2VnICsgKGogKyAxKSAlIHNlZztcbiAgICAgIGlkeC5wdXNoKGEsIGIsIGMsIGEsIGMsIGQpO1xuICAgIH1cbiAgfVxuICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShwb3MpLCAzKSk7XG4gIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSgocG9zLmxlbmd0aCAvIDMpICogMiksIDIpKTtcbiAgZy5zZXRJbmRleChpZHgpO1xuICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7XG4gIHJldHVybiBnO1xufVxuXG4vKipcbiAqIEEgY3VybGVkIGhvcm46IGBuYCB0YXBlcmluZyBib3ggc2VnbWVudHMgc2FtcGxlZCBhbG9uZyBhIHNpbmUsIGVhY2ggcm90YXRlZCB0byBpdHMgb3duIHRhbmdlbnQuXG4gKiBTaGFyZWQgYnkgdGhlIHVib3NvdCdzIGNob2ZhLCB0aGUgcHJhbmcncyB0cmlkZW50IHByb25ncyBhbmQgdGhlIENoaW5lc2Ugc2hyaW5lJ3MgZmx5aW5nIGVhdmVzLFxuICogYmVjYXVzZSBhbGwgdGhyZWUgYXJlIHRoZSBzYW1lIHByb2JsZW0gLS0gYSBzdHJhaWdodCBzcGlrZSBhdCBhIHJvb2YgZW5kIHJlYWRzIGFzIGEgbGlnaHRuaW5nIHJvZFxuICogYW5kIHRoZSBjdXJsIGlzIHRoZSB3aG9sZSBmZWF0dXJlLlxuICovXG5mdW5jdGlvbiBjdXJsZWRIb3JuKHJlYWNoOiBudW1iZXIsIHJpc2U6IG51bWJlciwgdGhpY2s6IG51bWJlciwgbiA9IDYpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgY29uc3QgYXQgPSAodTogbnVtYmVyKSA9PiBbcmVhY2ggKiBNYXRoLnNpbih1ICogTWF0aC5QSSAqIDAuNDYpLCByaXNlICogdV07XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbjsgaisrKSB7XG4gICAgY29uc3QgYSA9IGF0KGogLyBuKSwgYiA9IGF0KChqICsgMSkgLyBuKTtcbiAgICBjb25zdCBkeCA9IGJbMF0gLSBhWzBdLCBkeSA9IGJbMV0gLSBhWzFdO1xuICAgIGNvbnN0IHcgPSB0aGljayAqICgxIC0gaiAvIG4pICsgdGhpY2sgKiAwLjI4O1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkodywgTWF0aC5oeXBvdChkeCwgZHkpICsgdGhpY2sgKiAwLjIsIHcpO1xuICAgIGcucm90YXRlWihNYXRoLmF0YW4yKC1keCwgZHkpKTtcbiAgICBnLnRyYW5zbGF0ZSgoYVswXSArIGJbMF0pIC8gMiwgKGFbMV0gKyBiWzFdKSAvIDIsIDApO1xuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gbWVyZ2VHZW9zKHNlZ3MpO1xufVxuXG4vKipcbiAqIFJhbXAgYSBwZXItdmVydGV4IHRpbnQgb3ZlciBhIGhlaWdodCBiYW5kLCBhcyBhIE1VTFRJUExJRVIgb24gdGhlIG1hdGVyaWFsIGNvbG91ci5cbiAqXG4gKiBUaGlzIGlzIGhvdyBhIGxvY2FsIG1hdGVyaWFsIG92ZXJyaWRlIGdldHMgZGVsaXZlcmVkIG9uIGEgbWVyZ2VkIGNvbXBvbmVudCB0aGF0IGlzIG9uZSBtZXNoIGFuZFxuICogbXVzdCBzdGF5IG9uZSBkcmF3IGNhbGw6IGEgc2Vjb25kIG1hdGVyaWFsIHdvdWxkIGNvc3QgYSBzdWJtaXNzaW9uIGFuZCBhIHNoYWRlciBzd2l0Y2ggdG8gc2F5XG4gKiB0aGF0IHRoZSBib3R0b20gb2YgYSB3YWxsIGlzIGRpcnRpZXIgdGhhbiB0aGUgdG9wLiBgcmdiMGAgaXMgdGhlIG1lYXN1cmVkIHRpbnQgYXQgeTAgZXhwcmVzc2VkXG4gKiBhcyBhIGZyYWN0aW9uIG9mIHRoZSBtYXRlcmlhbCdzIG93biBtZWFzdXJlZCBhbGJlZG8sIHNvIHRoZSB0b3Agb2YgdGhlIGJhbmQgaXMgdW50aW50ZWQgMS4wIGFuZFxuICogdGhlIG51bWJlcnMgYmVsb3cgc3RheSB0cmFjZWFibGUgdG8gdHdvIGNyb3AgbWVhc3VyZW1lbnRzIHJhdGhlciB0aGFuIHRvIGEgY2hvc2VuIGRhcmtlbmluZy5cbiAqL1xuZnVuY3Rpb24gdGludEJ5SGVpZ2h0KGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHkwOiBudW1iZXIsIHkxOiBudW1iZXIsIHJnYjA6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KHAuY291bnQgKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmNvdW50OyBpKyspIHtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHAuZ2V0WShpKSAtIHkwKSAvICh5MSAtIHkwKSkpO1xuICAgIGZvciAobGV0IGMgPSAwOyBjIDwgMzsgYysrKSBjb2xbaSAqIDMgKyBjXSA9IHJnYjBbY10gKyAoMSAtIHJnYjBbY10pICogdDtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSB2ZWhpY2xlIGhlbHBlcnMgKi9cblxuLyoqIFBhaW50IGEgd2hvbGUgZ2VvbWV0cnkgb25lIHZlcnRleCBjb2xvdXIuIEV2ZXJ5IHZlaGljbGUgbWF0ZXJpYWwgaGVyZSBpcyBXSElURSB3aXRoXG4gKiAgdmVydGV4Q29sb3JzIG9uLCBzbyBhIGNvbG91ciBkaWZmZXJlbmNlIGNvc3RzIGFuIGF0dHJpYnV0ZSByYXRoZXIgdGhhbiBhIG1hdGVyaWFsOiB0aGUgYm9keSdzXG4gKiAgdHdvLXRvbmUsIHRoZSB0eXJlIGFnYWluc3QgaXRzIHJpbSwgYW4gYW1iZXIgaW5kaWNhdG9yIG9uIGEgYmxhY2sgYnVtcGVyIGFsbCByaWRlIG9uZSBzaGFkZXIuXG4gKiAgVmVydGV4IGNvbG91cnMgbXVsdGlwbHkgaW4gTElORUFSIHNwYWNlLCBzbyB0aGUgaGV4IGlzIGNvbnZlcnRlZCB0aHJvdWdoIFRIUkVFLkNvbG9yLCB3aGljaFxuICogIGRvZXMgdGhlIHNSR0ItdG8tbGluZWFyIHN0ZXAuICovXG5mdW5jdGlvbiB0aW50R2VvKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIGhleDogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKGhleCk7XG4gIGNvbnN0IG4gPSBnZW8uZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHsgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iOyB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShjb2wsIDMpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIEJveC1wcm9qZWN0IHdvcmxkLW1ldHJlIFVWcyBzbyBhIHBvc3QtY29uc3RydWN0aW9uIGNhbnZhcyB0aWxlIChtdWQsIHJ1c3QsIGNvcnJ1Z2F0aW9uKSByZXBlYXRzXG4gKiAgYXQgYSByZWFsIHNpemUgb24gZXZlcnkgZmFjZS4gYHNjYWxlYCBpcyBtZXRyZXMgcGVyIHRpbGUuIFRoZSBkb21pbmFudCBub3JtYWwgYXhpcyBwaWNrcyB0aGVcbiAqICBwYWlyIG9mIHdvcmxkIGF4ZXMgdXNlZCwgc28gYSByb29mIHJlYWRzICh4LCB6KSBhbmQgYSBzaWRlIHJlYWRzICh6LCB5KS4gKi9cbmZ1bmN0aW9uIHdvcmxkVVYoZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgc2NhbGU6IG51bWJlcik6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgbGV0IHU6IG51bWJlciwgdjogbnVtYmVyO1xuICAgIGlmIChheCA+PSBheSAmJiBheCA+PSBheikgeyB1ID0gcC5nZXRaKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgZWxzZSBpZiAoYXkgPj0gYXopIHsgdSA9IHAuZ2V0WChpKTsgdiA9IHAuZ2V0WihpKTsgfVxuICAgIGVsc2UgeyB1ID0gcC5nZXRYKGkpOyB2ID0gcC5nZXRZKGkpOyB9XG4gICAgdXZbaSAqIDJdID0gdSAvIHNjYWxlOyB1dltpICogMiArIDFdID0gdiAvIHNjYWxlO1xuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZSh1diwgMikpO1xuICByZXR1cm4gZ2VvO1xufVxuXG4vKipcbiAqIFNJREUtUFJPRklMRSBFWFRSVVNJT046IGEgY2xvc2VkIHBvbHlnb24gb2YgW3osIHldIHBvaW50cyAodGhlIHZlaGljbGUncyBzaWRlIHNpbGhvdWV0dGUsIHdoZWVsXG4gKiBhcmNoZXMgaW5jbHVkZWQgYXMgbm90Y2hlcykgc3dlcHQgYWNyb3NzIHRoZSBmdWxsIHdpZHRoLCB0aGVuIHNoYXBlZCBwZXIgdmVydGV4OlxuICpcbiAqICAtIGB0dW1ibGVgICBuYXJyb3dzIHRoZSBzZWN0aW9uIGFib3ZlIHRoZSBiZWx0IGxpbmUgLS0geCBpcyBzY2FsZWQgYnkgKDEgLSBrICogdCkgd2hlcmUgdCBydW5zXG4gKiAgICAgICAgICAgICAgMCBhdCBgYmVsdGAgdG8gMSBhdCBgcm9vZmAuIFRoYXQgaXMgdGhlIHR1bWJsZWhvbWUgb2YgYSByZWFsIGNhciBib2R5IGFuZCBpcyB3aGF0XG4gKiAgICAgICAgICAgICAgc3RvcHMgdGhlIGdsYXNzaG91c2UgcmVhZGluZyBhcyBhIGJveCBvbiBhIGJveC5cbiAqICAtIGBwbGFuYCAgICByb3VuZHMgdGhlIHBsYW4gYXQgdGhlIG5vc2UgYW5kIHRhaWw6IGFuIG9wdGlvbmFsIGxpc3Qgb2YgW3osIHhTY2FsZV0gc3RhdGlvbnNcbiAqICAgICAgICAgICAgICBpbnRlcnBvbGF0ZWQgYWxvbmcgeiwgc28gYSBib25uZXQgY2FuIHRhcGVyIHRvIDAuOSBvZiB0aGUgd2lkdGggYXQgdGhlIGJ1bXBlciBsaW5lLlxuICpcbiAqIEV4dHJ1ZGVHZW9tZXRyeSBidWlsZHMgaW4gaXRzIG93biAodSwgdiwgZGVwdGgpIGZyYW1lOyByb3RhdGVZKC1QSS8yKSBtYXBzIGRlcHRoIHRvIC14IGFuZCB1IHRvXG4gKiB3b3JsZCB6LCBhbmQgdGhlIHRyYW5zbGF0ZSByZS1jZW50cmVzIHRoZSBzbGFiIG9uIHggPSAwLiBBbnkgc2hhcGluZyBpcyBhcHBsaWVkIEFGVEVSIHRoYXQsIGFuZFxuICogbm9ybWFscyBhcmUgcmVjb21wdXRlZCBsYXN0IHNvIHRoZSBzaGFkZWQgZmFjZXMgZm9sbG93IHRoZSBzaGFwZWQgc3VyZmFjZS5cbiAqL1xuZnVuY3Rpb24gc2lkZUV4dHJ1ZGUocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgb3B0czogU2hhcGVPcHRzID0ge30pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNoYXBlID0gbmV3IFRIUkVFLlNoYXBlKCk7XG4gIHNoYXBlLm1vdmVUbyhwcm9maWxlWzBdWzBdLCBwcm9maWxlWzBdWzFdKTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBwcm9maWxlLmxlbmd0aDsgaSsrKSBzaGFwZS5saW5lVG8ocHJvZmlsZVtpXVswXSwgcHJvZmlsZVtpXVsxXSk7XG4gIHNoYXBlLmNsb3NlUGF0aCgpO1xuICBjb25zdCBnID0gbmV3IFRIUkVFLkV4dHJ1ZGVHZW9tZXRyeShzaGFwZSwgeyBkZXB0aDogd2lkdGgsIGJldmVsRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJ2ZVNlZ21lbnRzOiBvcHRzLmN1cnZlU2VnbWVudHMgPz8gNiwgc3RlcHM6IG9wdHMuc3RlcHMgPz8gMSB9KTtcbiAgZy5yb3RhdGVZKC1NYXRoLlBJIC8gMik7XG4gIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7XG4gIGlmIChvcHRzLmVkZ2VCaWFzICYmIChvcHRzLnN0ZXBzID8/IDEpID4gMSkge1xuICAgIC8vIFB1bGwgdGhlIHdpZHRoIGNvbHVtbnMgdG93YXJkIHRoZSB0d28gZWRnZXMgKHx0fF5wLCBwIDwgMSkgc28gYSBzaG91bGRlciBmaWxsZXQgZ2V0cyBmb3VyXG4gICAgLy8gcmVhbCBzZWdtZW50cyBpbnN0ZWFkIG9mIG9uZSBjaGFtZmVyIGF0IHRoZSBvdXRlcm1vc3QgY29sdW1uOyB0aGUgZmxhdCBtaWRkbGUgbmVlZHMgbm9uZS5cbiAgICBjb25zdCBxID0gZy5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIGh3ID0gd2lkdGggLyAyO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcS5jb3VudDsgaSsrKSB7XG4gICAgICBjb25zdCB0ID0gTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIHEuZ2V0WChpKSAvIGh3KSk7XG4gICAgICBxLnNldFgoaSwgaHcgKiBNYXRoLnNpZ24odCkgKiBNYXRoLnBvdyhNYXRoLmFicyh0KSwgb3B0cy5lZGdlQmlhcykpO1xuICAgIH1cbiAgfVxuICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgaWYgKG9wdHMuc21vb3RoKSBzbW9vdGhOb3JtYWxzKGcsIG9wdHMuc21vb3RoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBTaGFwaW5nIG9wdGlvbnMgc2hhcmVkIGJ5IGEgYm9keSBhbmQgZXZlcnl0aGluZyBzd2VwdCBwcm91ZCBvZiBpdCAoZ2xhc3MgYmFuZCwgcGlsbGFycykuXG4gKiAgYHNob3VsZGVyYCwgYG5vc2VgIGFuZCBgdGFpbGAgYXJlIFJPVU5ESU5HUyAtLSBzZWUgc2hhcGVXaWR0aCAtLSBhbmQgbmVlZCBgc3RlcHNgID4gMSBzbyB0aGVcbiAqICBzd2VwdCBmYWNlcyBjYXJyeSB2ZXJ0aWNlcyBhY3Jvc3MgdGhlIHdpZHRoIHRvIGJlbmQ7IGBiYXNlV2lkdGhgIGlzIHRoZSBib2R5J3Mgd2lkdGgsIHNvIGFcbiAqICBiYW5kIHN3ZXB0IHdpZGVyIHRoYW4gaXQgaXMgcm91bmRlZCBhYm91dCB0aGUgU0FNRSBjZW50cmVzIGF0IGEgbGFyZ2VyIHJhZGl1cyBhbmQgc3RheXNcbiAqICBleGFjdGx5IGFzIHByb3VkIGFzIGl0IHdhcyBhdXRob3JlZDsgYHRvcE9mYCBpcyB0aGUgYm9keSdzIG93biBwcm9maWxlLCB3aGljaCBpcyB3aGVyZSB0aGVcbiAqICByb29mIGxpbmUgZXZlcnkgc2hvdWxkZXIgaGFuZ3Mgb2ZmIGlzIHJlYWQuIEFsbCBvcHRpb25hbDogdW5zZXQsIHRoZSBzd2VlcCBpcyB0aGUgb2xkIHNsYWIuICovXG50eXBlIFNoYXBlT3B0cyA9IHsgdHVtYmxlPzogeyBiZWx0OiBudW1iZXIsIHJvb2Y6IG51bWJlciwgazogbnVtYmVyIH0sIHBsYW4/OiBudW1iZXJbXVtdLFxuICAgICAgICAgICAgICAgICAgIGN1cnZlU2VnbWVudHM/OiBudW1iZXIsIHN0ZXBzPzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgIHNob3VsZGVyPzogeyByOiBudW1iZXIsIHpNaW4/OiBudW1iZXIsIHpNYXg/OiBudW1iZXIsIGZhZGU/OiBudW1iZXIgfSxcbiAgICAgICAgICAgICAgICAgICBub3NlPzogeyByOiBudW1iZXIgfSwgdGFpbD86IHsgcjogbnVtYmVyIH0sXG4gICAgICAgICAgICAgICAgICAgc21vb3RoPzogbnVtYmVyLCBlZGdlQmlhcz86IG51bWJlciwgYmFzZVdpZHRoPzogbnVtYmVyLCB0b3BPZj86IG51bWJlcltdW10gfTtcblxuLyoqIEhpZ2hlc3QgeSBvZiBhIGNsb3NlZCBbeiwgeV0gcHJvZmlsZSBvbiB0aGUgdmVydGljYWwgbGluZSBhdCB6IC0tIHRoZSByb29mIGxpbmUgYXQgdGhhdFxuICogIHN0YXRpb24uIFZlcnRpY2FsIGVkZ2VzIGNvdW50IGJ5IHRoZWlyIG93biB0b3A7IGEgeiBvdXRzaWRlIHRoZSBwcm9maWxlIHJldHVybnMgLUluZmluaXR5LiAqL1xuZnVuY3Rpb24gcHJvZmlsZVRvcChwcm9maWxlOiBudW1iZXJbXVtdLCB6OiBudW1iZXIsIHRvbCA9IDApOiBudW1iZXIge1xuICBsZXQgdG9wID0gLUluZmluaXR5O1xuICBjb25zdCBuID0gcHJvZmlsZS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHByb2ZpbGVbaV0sIGIgPSBwcm9maWxlWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBsbyA9IE1hdGgubWluKGFbMF0sIGJbMF0pLCBoaSA9IE1hdGgubWF4KGFbMF0sIGJbMF0pO1xuICAgIGlmICh6IDwgbG8gLSB0b2wgLSAxZS02IHx8IHogPiBoaSArIHRvbCArIDFlLTYpIGNvbnRpbnVlO1xuICAgIC8vIGB0b2xgIGxldHMgYSBiYW5kIHN0YW5kaW5nIGEgZmV3IG1tIHByb3VkIG9mIGEgdmVydGljYWwgZmFjZSAoYSByZWFyIHBhbmUsIGEgQy1waWxsYXIgc3RyaXBcbiAgICAvLyBiZWhpbmQgdGhlIGNhYiBiYWNrKSByZWFkIHRoZSByb29mIGxpbmUgb2YgdGhlIGZhY2UgaXQgc3RhbmRzIG9uLCBub3QgdGhlIGJlZCBmbG9vciBiZWhpbmQgaXRcbiAgICBjb25zdCB6YyA9IE1hdGgubWF4KGxvLCBNYXRoLm1pbihoaSwgeikpO1xuICAgIGNvbnN0IHkgPSBoaSAtIGxvIDwgMWUtNiA/IE1hdGgubWF4KGFbMV0sIGJbMV0pIDogYVsxXSArIChiWzFdIC0gYVsxXSkgKiAoemMgLSBhWzBdKSAvIChiWzBdIC0gYVswXSk7XG4gICAgaWYgKHkgPiB0b3ApIHRvcCA9IHk7XG4gIH1cbiAgcmV0dXJuIHRvcDtcbn1cblxuLyoqIFRoZSBwZXItdmVydGV4IHggc2hhcGluZyBzaGFyZWQgYnkgdGhlIGJvZHkgYW5kIGl0cyBnbGFzcyBiYW5kLCBzbyBhIHBhbmUgb2Zmc2V0IDUgbW0gcHJvdWQgb2ZcbiAqICB0aGUgYm9keSBzdGF5cyA1IG1tIHByb3VkIGFmdGVyIGJvdGggYXJlIG5hcnJvd2VkIGJ5IHRoZSBzYW1lIGZ1bmN0aW9uLiAqL1xuZnVuY3Rpb24gc2hhcGVXaWR0aChnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgb3B0czogU2hhcGVPcHRzLCB3aWR0aCA9IDApOiB2b2lkIHtcbiAgY29uc3QgcCA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICBjb25zdCB0dW1ibGVBdCA9ICh5OiBudW1iZXIpID0+IHtcbiAgICBpZiAoIW9wdHMudHVtYmxlKSByZXR1cm4gMTtcbiAgICBjb25zdCB0ID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgKHkgLSBvcHRzLnR1bWJsZS5iZWx0KSAvIChvcHRzLnR1bWJsZS5yb29mIC0gb3B0cy50dW1ibGUuYmVsdCkpKTtcbiAgICByZXR1cm4gMSAtIG9wdHMudHVtYmxlLmsgKiB0O1xuICB9O1xuICBjb25zdCBwbGFuQXQgPSAoejogbnVtYmVyKSA9PiB7XG4gICAgaWYgKCFvcHRzLnBsYW4gfHwgb3B0cy5wbGFuLmxlbmd0aCA8IDIpIHJldHVybiAxO1xuICAgIGNvbnN0IHN0ID0gb3B0cy5wbGFuO1xuICAgIGlmICh6IDw9IHN0WzBdWzBdKSByZXR1cm4gc3RbMF1bMV07XG4gICAgaWYgKHogPj0gc3Rbc3QubGVuZ3RoIC0gMV1bMF0pIHJldHVybiBzdFtzdC5sZW5ndGggLSAxXVsxXTtcbiAgICBmb3IgKGxldCBrID0gMDsgayA8IHN0Lmxlbmd0aCAtIDE7IGsrKykge1xuICAgICAgaWYgKHogPj0gc3Rba11bMF0gJiYgeiA8PSBzdFtrICsgMV1bMF0pIHtcbiAgICAgICAgY29uc3QgdSA9ICh6IC0gc3Rba11bMF0pIC8gKHN0W2sgKyAxXVswXSAtIHN0W2tdWzBdKTtcbiAgICAgICAgcmV0dXJuIHN0W2tdWzFdICsgKHN0W2sgKyAxXVsxXSAtIHN0W2tdWzFdKSAqIHU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAxO1xuICB9O1xuICAvLyBST1VORElOR1MuIEEgc3dlZXAgaXMgYSBzbGFiOiBpdHMgcm9vZiBtZWV0cyBpdHMgc2lkZSBhdCBhIGhhcmQgZWRnZSwgYW5kIGl0cyBub3NlIG1lZXRzIGJvdGhcbiAgLy8gc2lkZXMgYXQgdHdvIG1vcmUuIFJlYWwgc2hlZXQgbWV0YWwgY3Jvd25zIG92ZXIgdGhlIGZlbmRlciBhbmQgd3JhcHMgcm91bmQgdGhlIG5vc2UsIHNvIGFueVxuICAvLyB2ZXJ0ZXggaW5zaWRlIGEgY29ybmVyIHF1YWRyYW50ICh3aXRoaW4gciBvZiB0aGUgdG9wIEFORCB3aXRoaW4gciBvZiB0aGUgc2lkZSkgaXMgcHJvamVjdGVkXG4gIC8vIG9udG8gdGhlIGNpcmNsZSBvZiByYWRpdXMgciBhYm91dCB0aGF0IGNvcm5lcidzIGNlbnRyZSAtLSBhIGZpbGxldCwgaW4geC95IGZvciB0aGUgc2hvdWxkZXJcbiAgLy8gYW5kIGluIHgveiBhdCB0aGUgdHdvIGVuZHMuIFRoZSBjZW50cmVzIGFyZSBwbGFjZWQgb2ZmIHRoZSBCT0RZJ3Mgd2lkdGggKGBiYXNlV2lkdGhgKSBhbmRcbiAgLy8gcm9vZiBsaW5lIChgdG9wT2ZgKSwgc28gYSBnbGFzcyBiYW5kIHN3ZXB0IGBlYCB3aWRlciBpcyBmaWxsZXRlZCBhdCByICsgZSBhYm91dCB0aGUgc2FtZVxuICAvLyBjZW50cmUgYW5kIHN0YXlzIGBlYCBwcm91ZCBhbGwgdGhlIHdheSByb3VuZCB0aGUgY29ybmVyLlxuICBjb25zdCBleHRyYSA9IG9wdHMuYmFzZVdpZHRoID8gKHdpZHRoIC0gb3B0cy5iYXNlV2lkdGgpIC8gMiA6IDA7XG4gIGNvbnN0IGJhc2VIYWxmID0gKG9wdHMuYmFzZVdpZHRoID8/IHdpZHRoKSAvIDI7XG4gIGNvbnN0IHRvcCA9IG9wdHMudG9wT2YgPz8gbnVsbDtcbiAgbGV0IHpNYXggPSAtSW5maW5pdHksIHpNaW4gPSBJbmZpbml0eTtcbiAgaWYgKHRvcCkgZm9yIChjb25zdCBxIG9mIHRvcCkgeyBpZiAocVswXSA+IHpNYXgpIHpNYXggPSBxWzBdOyBpZiAocVswXSA8IHpNaW4pIHpNaW4gPSBxWzBdOyB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSsrKSB7XG4gICAgbGV0IHggPSBwLmdldFgoaSksIHkgPSBwLmdldFkoaSksIHogPSBwLmdldFooaSk7XG4gICAgY29uc3QgdGYgPSB0dW1ibGVBdCh5KSwgcGYgPSBwbGFuQXQoeik7XG4gICAgeCAqPSB0ZiAqIHBmO1xuICAgIGlmIChvcHRzLnNob3VsZGVyICYmIHRvcCkge1xuICAgICAgY29uc3Qgc2ggPSBvcHRzLnNob3VsZGVyO1xuICAgICAgLy8gVGhlIGZpbGxldCBsaXZlcyBvbiBhIHotcmFuZ2U6IGhhcmQgYXQgek1pbiAodGhlIGNhYiBiYWNrKSwgZmFkZWQgb3ZlciBgZmFkZWAgbWV0cmVzIGF0XG4gICAgICAvLyB6TWF4ICh0aGUgdG9wIG9mIHRoZSB3aW5kc2NyZWVuIHJha2UgLS0gYSByYWtlIGlzIGEgcGxhbmUsIGl0cyBlZGdlIGEgY3JlYXNlLCBhbmQgYSBmYWRlXG4gICAgICAvLyBrZXllZCBvbiB0aGUgcm9vZiBsaW5lJ3MgU0xPUEUgdmFyaWVkIGluc2lkZSB0aGUgcmVhciBjb3JuZXIgYW5kIGZvbGRlZCBpdCkuXG4gICAgICBjb25zdCB6TG8gPSBzaC56TWluID8/IC1JbmZpbml0eSwgekhpID0gc2guek1heCA/PyBJbmZpbml0eSwgZmQgPSBzaC5mYWRlID8/IDA7XG4gICAgICBjb25zdCB3ID0geiA8IHpMbyB8fCB6ID4gekhpID8gMCA6IGZkID4gMCA/IE1hdGgubWluKDEsICh6SGkgLSB6KSAvIGZkKSA6IDE7XG4gICAgICBjb25zdCB5dCA9IHByb2ZpbGVUb3AodG9wLCB6LCAwLjAzKTtcbiAgICAgIGlmICh3ID4gMCAmJiBpc0Zpbml0ZSh5dCkpIHtcbiAgICAgICAgY29uc3QgciA9IHNoLnIgKyBleHRyYSwgY3kgPSB5dCAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGh3ID0gYmFzZUhhbGYgKiB0dW1ibGVBdChjeSkgKiBwZiwgY3ggPSBodyAtIHNoLnI7XG4gICAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCk7XG4gICAgICAgIGlmICh5ID4gY3kgJiYgYXggPiBjeCAmJiByID4gMWUtNikge1xuICAgICAgICAgIGNvbnN0IGR4ID0gYXggLSBjeCwgZHkgPSB5IC0gY3ksIGQgPSBNYXRoLmh5cG90KGR4LCBkeSkgfHwgMTtcbiAgICAgICAgICBsZXQgbnggPSBheCwgbnkgPSB5LCBoaXQgPSBmYWxzZTtcbiAgICAgICAgICBpZiAoZHggPj0gciAtIDFlLTQpIHtcbiAgICAgICAgICAgIC8vIHRoZSBFREdFIGNvbHVtbiwgc2hhcmVkIHdpdGggdGhlIHNpZGU6IHRoZSBhcmMncyBmb290LCB0YW5nZW50IHRvIHRoZSBzaWRlIGF0IGN5XG4gICAgICAgICAgICBueCA9IGN4ICsgcjsgbnkgPSBjeTsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGR5ID49IHNoLnIgLSAxZS00ICYmIGR4IDw9IHIgKyAxZS02KSB7XG4gICAgICAgICAgICAvLyBhIHRvcC1yb3cgdmVydGV4OiBpdHMgY29sdW1uIHBvc2l0aW9uIHBpY2tzIGl0cyBhbmdsZSBvbiB0aGUgYXJjXG4gICAgICAgICAgICBjb25zdCB0aCA9IE1hdGguUEkgLyAyICogKDEgLSBkeCAvIHIpO1xuICAgICAgICAgICAgbnggPSBjeCArIE1hdGguY29zKHRoKSAqIHI7IG55ID0gY3kgKyBNYXRoLnNpbih0aCkgKiByOyBoaXQgPSB0cnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoZHggPD0gciArIDFlLTYgJiYgZHkgPD0gciArIDFlLTYgJiYgZCA+PSByIC0gMWUtNCkge1xuICAgICAgICAgICAgLy8gYSBwcm91ZCBiYW5kJ3Mgb3V0ZXIgdmVydGV4IGJlbG93IHRoZSB0b3A6IG9udG8gaXRzIG93biBjaXJjbGU7IGluc2lkZSBpdCwgbGVhdmVcbiAgICAgICAgICAgIG54ID0gY3ggKyBkeCAvIGQgKiByOyBueSA9IGN5ICsgZHkgLyBkICogcjsgaGl0ID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhpdCkgeyB4ID0gTWF0aC5zaWduKHggfHwgMSkgKiAoYXggKyAobnggLSBheCkgKiB3KTsgeSA9IHkgKyAobnkgLSB5KSAqIHc7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGNvbnN0IGVuZCBvZiBbb3B0cy5ub3NlID8geyByOiBvcHRzLm5vc2UuciwgemM6IHpNYXggLSBvcHRzLm5vc2UuciwgczogMSB9IDogbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgb3B0cy50YWlsID8geyByOiBvcHRzLnRhaWwuciwgemM6IHpNaW4gKyBvcHRzLnRhaWwuciwgczogLTEgfSA6IG51bGxdKSB7XG4gICAgICBpZiAoIWVuZCB8fCAhdG9wKSBjb250aW51ZTtcbiAgICAgIGNvbnN0IHIgPSBlbmQuciArIGV4dHJhO1xuICAgICAgY29uc3QgaHcgPSBiYXNlSGFsZiAqIHR1bWJsZUF0KHkpICogcGxhbkF0KGVuZC56YyksIGN4ID0gaHcgLSBlbmQucjtcbiAgICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMoeCksIGR6ID0gKHogLSBlbmQuemMpICogZW5kLnM7XG4gICAgICBpZiAoZHogPiAwICYmIGF4ID4gY3ggJiYgciA+IDFlLTYpIHtcbiAgICAgICAgY29uc3QgZHggPSBheCAtIGN4LCBkID0gTWF0aC5oeXBvdChkeCwgZHopIHx8IDE7XG4gICAgICAgIC8vIE9ubHkgYSB2ZXJ0ZXggT1VUU0lERSB0aGUgY2lyY2xlIGlzIHByb2plY3RlZCBvbnRvIGl0ICh0aGUgc2hvdWxkZXIncyBydWxlKTogYSBzaWRlXG4gICAgICAgIC8vIHN0cmlwJ3MgaW5uZXIgZmFjZSBsaWVzIGluc2lkZSwgYW5kIHByb2plY3RpbmcgaXQgdG9vIGxhbmRzIGl0IG9uIHRoZSBvdXRlciBmYWNlLFxuICAgICAgICAvLyB3aGljaCB6LWZpZ2h0cyAtLSB0aGUgQ29tbXV0ZXIgdmFuJ3Mgd3JhcHBlZCBBLXBpbGxhcnMgY3J1bXBsZWQgZnJvbSBleGFjdGx5IHRoYXQuXG4gICAgICAgIGlmIChkID49IHIgLSAxZS00KSB7IHggPSBNYXRoLnNpZ24oeCB8fCAxKSAqIChjeCArIGR4IC8gZCAqIHIpOyB6ID0gZW5kLnpjICsgZW5kLnMgKiAoZHogLyBkICogcik7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgcC5zZXRYWVooaSwgeCwgeSwgeik7XG4gIH1cbiAgcC5uZWVkc1VwZGF0ZSA9IHRydWU7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbn1cblxuLyoqIEFuZ2xlLWxpbWl0ZWQgU01PT1RIIE5PUk1BTFMgb24gYSBub24taW5kZXhlZCBnZW9tZXRyeS4gRXZlcnkgdmVydGV4IHNoYXJpbmcgYSBwb3NpdGlvblxuICogIGF2ZXJhZ2VzIHRoZSBmYWNlIG5vcm1hbHMgb2YgaXRzIG5laWdoYm91cnMgdGhhdCBsaWUgd2l0aGluIGBtYXhEZWdgIG9mIGl0cyBvd24gZmFjZSwgc28gYVxuICogIGZpbGxldGVkIHNob3VsZGVyLCBhIHBsYW4tcm91bmRlZCBub3NlIGFuZCB0aGUgdHVtYmxlaG9tZSBraW5rIGF0IHRoZSBiZWx0IHNoYWRlIGFzIG9uZVxuICogIGNvbnRpbnVvdXMgc3VyZmFjZSwgd2hpbGUgYSA5MC1kZWdyZWUgZWRnZSAtLSB0aGUgYXJjaCBjdXQsIHRoZSBub3NlIGFnYWluc3QgdGhlIGJ1bXBlciAtLVxuICogIHN0YXlzIGEgY3JlYXNlLiBXaXRob3V0IHRoaXMgZXZlcnkgcXVhZCB0aGUgcm91bmRpbmdzIGJlbmQgc3BsaXRzIGludG8gdHdvIGRpZmZlcmVudGx5IGxpdFxuICogIHRyaWFuZ2xlcywgd2hpY2ggaXMgdGhlIFwiYmxvY2t5XCIgYSB2aWV3ZXIgc2VlcyBiZWZvcmUgYW55IHNpbGhvdWV0dGUuICovXG5mdW5jdGlvbiBzbW9vdGhOb3JtYWxzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1heERlZzogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBwID0gZ2VvLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKSwgbnJtID0gZ2VvLmdldEF0dHJpYnV0ZSgnbm9ybWFsJyk7XG4gIGlmICghbnJtIHx8IGdlby5nZXRJbmRleCgpKSByZXR1cm4gZ2VvO1xuICBjb25zdCBuID0gcC5jb3VudCwgY29zTGltID0gTWF0aC5jb3MobWF4RGVnICogTWF0aC5QSSAvIDE4MCk7XG4gIGNvbnN0IGdyb3VwcyA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXJbXT4oKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBrID0gYCR7TWF0aC5yb3VuZChwLmdldFgoaSkgKiAyMDAwKX0sJHtNYXRoLnJvdW5kKHAuZ2V0WShpKSAqIDIwMDApfSwke01hdGgucm91bmQocC5nZXRaKGkpICogMjAwMCl9YDtcbiAgICBjb25zdCBnID0gZ3JvdXBzLmdldChrKTsgaWYgKGcpIGcucHVzaChpKTsgZWxzZSBncm91cHMuc2V0KGssIFtpXSk7XG4gIH1cbiAgY29uc3QgZmFjZSA9IG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykgeyBmYWNlW2kgKiAzXSA9IG5ybS5nZXRYKGkpOyBmYWNlW2kgKiAzICsgMV0gPSBucm0uZ2V0WShpKTsgZmFjZVtpICogMyArIDJdID0gbnJtLmdldFooaSk7IH1cbiAgY29uc3Qgb3V0ID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGZvciAoY29uc3QgZyBvZiBncm91cHMudmFsdWVzKCkpIHtcbiAgICBmb3IgKGNvbnN0IGkgb2YgZykge1xuICAgICAgbGV0IHN4ID0gMCwgc3kgPSAwLCBzeiA9IDA7XG4gICAgICBjb25zdCBheCA9IGZhY2VbaSAqIDNdLCBheSA9IGZhY2VbaSAqIDMgKyAxXSwgYXogPSBmYWNlW2kgKiAzICsgMl07XG4gICAgICBmb3IgKGNvbnN0IGogb2YgZykge1xuICAgICAgICBjb25zdCBieCA9IGZhY2VbaiAqIDNdLCBieSA9IGZhY2VbaiAqIDMgKyAxXSwgYnogPSBmYWNlW2ogKiAzICsgMl07XG4gICAgICAgIGlmIChheCAqIGJ4ICsgYXkgKiBieSArIGF6ICogYnogPj0gY29zTGltKSB7IHN4ICs9IGJ4OyBzeSArPSBieTsgc3ogKz0gYno7IH1cbiAgICAgIH1cbiAgICAgIGNvbnN0IGwgPSBNYXRoLmh5cG90KHN4LCBzeSwgc3opIHx8IDE7XG4gICAgICBvdXRbaSAqIDNdID0gc3ggLyBsOyBvdXRbaSAqIDMgKyAxXSA9IHN5IC8gbDsgb3V0W2kgKiAzICsgMl0gPSBzeiAvIGw7XG4gICAgfVxuICB9XG4gIGdlby5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUob3V0LCAzKSk7XG4gIHJldHVybiBnZW87XG59XG5cbi8qKiBBIFBJTExBUiBTVFJJUDogdGhlIHBpbGxhciBwb2x5Z29uIHN3ZXB0IG9ubHkgYHN0cmlwV2AgZGVlcCBhdCBlYWNoIG91dGVyIGVkZ2Ugb2YgYHdpZHRoYCxcbiAqICBtaXJyb3JlZCwgYW5kIHNoYXBlZCBleGFjdGx5IGFzIHRoZSBib2R5LiBUaGUgb2xkIGZ1bGwtd2lkdGggc3dlZXAgcHV0IGEgc2xhYiBhY3Jvc3MgdGhlXG4gKiAgd2luZHNjcmVlbiB3aGVyZXZlciB0aGUgQS1waWxsYXIgcG9seWdvbiBsYXkgb24gdGhlIHJha2UgLS0gYSBwaWxsYXIgaXMgYXQgdGhlIHNpZGUgb2YgdGhlXG4gKiAgZ2xhc3MsIG5vdCB0aHJvdWdoIGl0LiBUaGUgbWlycm9yZWQgaGFsZiBoYXMgaXRzIHdpbmRpbmcgcmVzdG9yZWQuICovXG5mdW5jdGlvbiBzaWRlU3RyaXAocHJvZmlsZTogbnVtYmVyW11bXSwgd2lkdGg6IG51bWJlciwgc3RyaXBXOiBudW1iZXIsIG9wdHM6IFNoYXBlT3B0cyA9IHt9KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBzaGFwZS5tb3ZlVG8ocHJvZmlsZVswXVswXSwgcHJvZmlsZVswXVsxXSk7XG4gIGZvciAobGV0IGkgPSAxOyBpIDwgcHJvZmlsZS5sZW5ndGg7IGkrKykgc2hhcGUubGluZVRvKHByb2ZpbGVbaV1bMF0sIHByb2ZpbGVbaV1bMV0pO1xuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiBzdHJpcFcsIGJldmVsRW5hYmxlZDogZmFsc2UsIHN0ZXBzOiAyIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyAgICAgICAgICAgICAgICAgLy8gZGVwdGggbm93IHJ1bnMgYWxvbmcgLXggZnJvbSB4ID0gMFxuICAgIGcudHJhbnNsYXRlKHdpZHRoIC8gMiwgMCwgMCk7ICAgICAgICAgICAgLy8gb3V0ZXIgZmFjZSBhdCArd2lkdGgvMiwgaW5uZXIgYXQgd2lkdGgvMiAtIHN0cmlwV1xuICAgIGlmIChzeCA8IDApIHtcbiAgICAgIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgICAgY29uc3QgcSA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxLmNvdW50OyBpICs9IDMpIHtcbiAgICAgICAgY29uc3QgeDEgPSBxLmdldFgoaSArIDEpLCB5MSA9IHEuZ2V0WShpICsgMSksIHoxID0gcS5nZXRaKGkgKyAxKTtcbiAgICAgICAgcS5zZXRYWVooaSArIDEsIHEuZ2V0WChpICsgMiksIHEuZ2V0WShpICsgMiksIHEuZ2V0WihpICsgMikpOyBxLnNldFhZWihpICsgMiwgeDEsIHkxLCB6MSk7XG4gICAgICB9XG4gICAgfVxuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgICBzaGFwZVdpZHRoKGcsIG9wdHMsIHdpZHRoKTtcbiAgICBpZiAob3B0cy5zbW9vdGgpIHNtb290aE5vcm1hbHMoZywgb3B0cy5zbW9vdGgpO1xuICAgIHJldHVybiBnO1xuICB9O1xuICByZXR1cm4gbWVyZ2VHZW9zKFttaygxKSwgbWsoLTEpXSk7XG59XG5cbi8qKiBBIHNlbWljaXJjdWxhciB3aGVlbC1hcmNoIG5vdGNoIGFzIHByb2ZpbGUgcG9pbnRzLCB0byBiZSBzcGxpY2VkIGludG8gYSBzaWRlIHByb2ZpbGUgdGhhdCBydW5zXG4gKiAgYWxvbmcgdGhlIHNpbGwgZnJvbSAreiB0byAteiAoaS5lLiB6IERFQ1JFQVNJTkcpLiBgbmAgc2VnbWVudHM7IHRoZSBhcmMgaXMgdGhlIFRPUCBoYWxmLiAqL1xuZnVuY3Rpb24gYXJjaE5vdGNoKHpjOiBudW1iZXIsIHlTaWxsOiBudW1iZXIsIHI6IG51bWJlciwgbiA9IDcpOiBudW1iZXJbXVtdIHtcbiAgY29uc3QgcHRzOiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IG47IGkrKykge1xuICAgIGNvbnN0IGEgPSBpICogTWF0aC5QSSAvIG47ICAgICAgICAgICAgICAgLy8gMCAuLiBQSSwgZnJvbSAreiByb3VuZCB0aGUgdG9wIHRvIC16XG4gICAgcHRzLnB1c2goW3pjICsgTWF0aC5jb3MoYSkgKiByLCB5U2lsbCArIE1hdGguc2luKGEpICogcl0pO1xuICB9XG4gIHJldHVybiBwdHM7XG59XG5cbi8qKlxuICogQSBXSEVFTDogb25lIGxhdGhlIGFib3V0IHRoZSBheGxlLiBUaGUgcHJvZmlsZSBydW5zIGZyb20gdGhlIGh1YiBmYWNlIG9uIG9uZSBzaWRlIG92ZXIgdGhlIHJpbVxuICogbGlwLCB0aGUgdHlyZSBzaWRld2FsbCwgdGhlIHRyZWFkIGFuZCBiYWNrIGRvd24gdGhlIGZhciBzaWRlLCBzbyB0aGUgd2hlZWwgaXMgYSBjbG9zZWQgc29saWQgd2l0aFxuICogbm8gb3BlbiBlbmQgZm9yIHRoZSB0dXJudGFibGUgZ2F0ZSB0byByZWFkIHRocm91Z2guIFJldm9sdmVkIGFib3V0IFkgYW5kIHRoZW4gbGFpZCBvbiBYLCBzbyB0aGVcbiAqIGF4bGUgaXMgdGhlIHggYXhpcyBhbmQgdGhlIHdoZWVsIHJvbGxzIGFib3V0IGl0IC0tIHdoaWNoIGlzIHRoZSBheGlzIGl0cyBwaXZvdCBkZWNsYXJlcy5cbiAqXG4gKiBUd28gdmVydGV4IGNvbG91cnM6IGByaW1IZXhgIG9uIHRoZSBodWIgYW5kIHJpbSBwb2ludHMsIGB0eXJlSGV4YCBvbiB0aGUgc2lkZXdhbGwgYW5kIHRyZWFkLiBUaGVcbiAqIGxhdGhlIG9yZGVycyB2ZXJ0aWNlcyBzZWdtZW50LW1ham9yIChpbmRleCA9IHNlZyAqIHBvaW50Q291bnQgKyBwb2ludCksIHdoaWNoIGlzIHdoYXQgbGV0cyBhXG4gKiBwZXItcHJvZmlsZS1wb2ludCBjb2xvdXIgYmUgd3JpdHRlbiB3aXRob3V0IGEgc2Vjb25kIGdlb21ldHJ5LlxuICovXG5mdW5jdGlvbiB3aGVlbEdlbyhyVHlyZTogbnVtYmVyLCByUmltOiBudW1iZXIsIGhhbGZXOiBudW1iZXIsIHNlZzogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgZGlzaCA9IDAuNTUpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlc7XG4gIGNvbnN0IHB0czogbnVtYmVyW11bXSA9IFtcbiAgICBbMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC4zMCwgLWh3ICogZGlzaF0sIFtyUmltICogMC42MiwgLWh3ICogMC44MF0sIFtyUmltLCAtaHcgKiAwLjg2XSwgW3JSaW0sIC1odyAqIDAuOThdLFxuICAgIFtyVHlyZSAqIDAuOTMsIC1od10sIFtyVHlyZSwgLWh3ICogMC43Ml0sIFtyVHlyZSwgaHcgKiAwLjcyXSwgW3JUeXJlICogMC45MywgaHddLFxuICAgIFtyUmltLCBodyAqIDAuOThdLCBbclJpbSwgaHcgKiAwLjg2XSwgW3JSaW0gKiAwLjYyLCBodyAqIDAuODBdLCBbclJpbSAqIDAuMzAsIGh3ICogZGlzaF0sIFswLCBodyAqIGRpc2hdLFxuICBdO1xuICBjb25zdCByaW1Qb2ludCA9IChqOiBudW1iZXIpID0+IGogPD0gNCB8fCBqID49IDk7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShwdHMubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGNvbnN0IG4gPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKS5jb3VudDtcbiAgY29uc3QgY29sID0gbmV3IEZsb2F0MzJBcnJheShuICogMyk7XG4gIGNvbnN0IGN0ID0gbmV3IFRIUkVFLkNvbG9yKHR5cmVIZXgpLCBjciA9IG5ldyBUSFJFRS5Db2xvcihyaW1IZXgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IG47IGkrKykge1xuICAgIGNvbnN0IGMgPSByaW1Qb2ludChpICUgcHRzLmxlbmd0aCkgPyBjciA6IGN0O1xuICAgIGNvbFtpICogM10gPSBjLnI7IGNvbFtpICogMyArIDFdID0gYy5nOyBjb2xbaSAqIDMgKyAyXSA9IGMuYjtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKGNvbCwgMykpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAvLyBsYXRoZSBheGlzIFkgLT4gYXhsZSBvbiBYXG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKlxuICogQSBTVEVFTCBXSEVFTDogdGhlIHNhbWUgY2xvc2VkIGxhdGhlIGFzIHdoZWVsR2VvLCB3aXRoIHRoZSBwcm9maWxlIG9mIGEgcHJlc3NlZC1zdGVlbCByaW0gLS0gYVxuICogZmxhdCBvdXRlciBmYWNlLCBhIGRpc2hlZCBjZW50cmUgc3RlcHBpbmcgaW4gcGFzdCBhIGRhcmsgVkVOVCBSSU5HICh0aGUgcm93IG9mIG92YWwgaG9sZXMsXG4gKiBkZWxpdmVyZWQgYXMgYSBiYW5kIG9mIHZlcnRleCBjb2xvdXIgcmF0aGVyIHRoYW4gYXMgaG9sZXMgYSB0dXJudGFibGUgZ2F0ZSB3b3VsZCByZWFkIHRocm91Z2gpLFxuICogYSBzbWFsbCBodWIgY2FwIHN0YW5kaW5nIHByb3VkIC0tIGFuZCBhIGNodW5raWVyIHR5cmUgd2hvc2UgdHJlYWQgcmluZyBhbHRlcm5hdGVzIGEgbGlnaHRlciBhbmRcbiAqIGEgZGFya2VyIHRvbmUgc2VnbWVudCBieSBzZWdtZW50LCBzbyB0aGUgbHVncyByZWFkIGF0IHByb3AgZGlzdGFuY2UgZm9yIHplcm8gZ2VvbWV0cnkuIFBlci1wb2ludFxuICogY29sb3VycyByaWRlIHRoZSBsYXRoZSdzIHNlZ21lbnQtbWFqb3IgdmVydGV4IG9yZGVyIGV4YWN0bHkgYXMgaW4gd2hlZWxHZW8uXG4gKi9cbmZ1bmN0aW9uIHN0ZWVsV2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlcixcbiAgICAgICAgICAgICAgICAgICAgICAgdHlyZUhleDogbnVtYmVyLCByaW1IZXg6IG51bWJlciwgdmVudEhleDogbnVtYmVyLCBsdWdIZXg6IG51bWJlciwgZGlzaCA9IDAuNTApOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGh3ID0gaGFsZlcsIGQgPSBodyAqIGRpc2g7XG4gIC8vIFtyYWRpdXMsIGF4aWFsXSBhbmQgYSBjb2xvdXIgY2xhc3MgcGVyIHBvaW50OiAwIHJpbSwgMSB2ZW50IHJpbmcsIDIgdHlyZSBzaWRld2FsbCwgMyB0cmVhZFxuICBjb25zdCBwdHM6IG51bWJlcltdW10gPSBbXG4gICAgWzAsIC1kICsgMC4wMl0sIFtyUmltICogMC4yMiwgLWQgKyAwLjAyXSwgW3JSaW0gKiAwLjI0LCAtZF0sICAgICAgICAgICAgICAgICAgICAgICAvLyBodWIgY2FwXG4gICAgW3JSaW0gKiAwLjQwLCAtZF0sIFtyUmltICogMC40MiwgLWQgLSAwLjAwNl0sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGRpc2ggZmxvb3JcbiAgICBbclJpbSAqIDAuNjIsIC1kIC0gMC4wMDZdLCBbclJpbSAqIDAuNjQsIC1odyAqIDAuODZdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdmVudCByaW5nIChkYXJrKVxuICAgIFtyUmltICogMC45MCwgLWh3ICogMC44Nl0sIFtyUmltLCAtaHcgKiAwLjkwXSwgW3JSaW0sIC1odyAqIDAuOThdLCAgICAgICAgICAgICAgICAgIC8vIHJpbSBmYWNlIGFuZCBsaXBcbiAgICBbclR5cmUgKiAwLjg4LCAtaHddLCBbclR5cmUgKiAwLjk3LCAtaHcgKiAwLjg2XSwgW3JUeXJlLCAtaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAvLyBzaWRld2FsbFxuICAgIFtyVHlyZSwgaHcgKiAwLjcwXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0cmVhZFxuICAgIFtyVHlyZSAqIDAuOTcsIGh3ICogMC44Nl0sIFtyVHlyZSAqIDAuODgsIGh3XSwgW3JSaW0sIGh3ICogMC45OF0sICAgICAgICAgICAgICAgICAgIC8vIGZhciBzaWRld2FsbFxuICAgIFtyUmltLCBodyAqIDAuODhdLCBbclJpbSAqIDAuMzAsIGh3ICogMC44MF0sIFswLCBodyAqIDAuODBdLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYmFjayBvZiB0aGUgcmltXG4gIF07XG4gIGNvbnN0IGNscyA9IFswLCAwLCAwLCAwLCAwLCAxLCAxLCAwLCAwLCAwLCAyLCAyLCAzLCAzLCAyLCAyLCAwLCAwLCAwLCAwXTtcbiAgY29uc3QgZyA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHB0cy5tYXAoKHApID0+IG5ldyBUSFJFRS5WZWN0b3IyKHBbMF0sIHBbMV0pKSwgc2VnKTtcbiAgY29uc3QgbiA9IGcuZ2V0QXR0cmlidXRlKCdwb3NpdGlvbicpLmNvdW50O1xuICBjb25zdCBjb2wgPSBuZXcgRmxvYXQzMkFycmF5KG4gKiAzKTtcbiAgY29uc3QgQyA9IFtuZXcgVEhSRUUuQ29sb3IocmltSGV4KSwgbmV3IFRIUkVFLkNvbG9yKHZlbnRIZXgpLCBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCksIG5ldyBUSFJFRS5Db2xvcihsdWdIZXgpXTtcbiAgY29uc3QgY3QgPSBuZXcgVEhSRUUuQ29sb3IodHlyZUhleCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgaiA9IGkgJSBwdHMubGVuZ3RoLCBzID0gTWF0aC5mbG9vcihpIC8gcHRzLmxlbmd0aCk7XG4gICAgbGV0IGMgPSBDW2Nsc1tqXV07XG4gICAgaWYgKGNsc1tqXSA9PT0gMykgYyA9IChzICUgMiA9PT0gMCkgPyBjdCA6IENbM107XG4gICAgY29sW2kgKiAzXSA9IGMucjsgY29sW2kgKiAzICsgMV0gPSBjLmc7IGNvbFtpICogMyArIDJdID0gYy5iO1xuICB9XG4gIGcuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUoY29sLCAzKSk7XG4gIGcucm90YXRlWihNYXRoLlBJIC8gMik7XG4gIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgcmV0dXJuIGc7XG59XG5cbi8qKiBXaXJlLXNwb2tlZCB3aGVlbCBkcmVzc2luZzogYG5gIHRoaW4gYm94ZXMgcmFkaWF0aW5nIGZyb20gdGhlIGh1YiwgbGFjZWQgYWx0ZXJuYXRlbHkgdG8gZWFjaFxuICogIHNpZGUgb2YgdGhlIHJpbSBzbyB0aGV5IGNyb3NzIHRoZSB3YXkgcmVhbCBzcG9rZXMgZG8uIE1lcmdlZCBpbnRvIHRoZSB3aGVlbCBnZW9tZXRyeSBzbyB0aGVcbiAqICB3aGVlbCBzdGF5cyBPTkUgaW5zdGFuY2VkIGdlb21ldHJ5LiAqL1xuZnVuY3Rpb24gc3Bva2VzKHJIdWI6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBuOiBudW1iZXIsIGhleDogbnVtYmVyLCB0ID0gMC4wMDYsIHByaXNtID0gZmFsc2UpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IHNlZ3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBjb25zdCBhID0gaSAqIE1hdGguUEkgKiAyIC8gbjtcbiAgICBjb25zdCBzaWRlID0gKGkgJSAyID09PSAwID8gMSA6IC0xKSAqIGhhbGZXICogMC4zNTtcbiAgICBjb25zdCBsZW4gPSByUmltIC0gckh1YjtcbiAgICAvLyBgcHJpc21gOiBhbiBvcGVuIHRocmVlLXNpZGVkIHByaXNtIGF0IHNpeCB0cmlhbmdsZXMgd2hlcmUgdGhlIGJveCBjb3N0cyB0d2VsdmUgLS0gYSB3aXJlXG4gICAgLy8gc3Bva2UgaGFzIG5vIHJlc29sdmFibGUgc2VjdGlvbiBhdCBwcm9wIGRpc3RhbmNlLCBhbmQgc2l4dHkgb2YgdGhlbSBvbiB0aHJlZSB3aGVlbHMgaXMgdGhlXG4gICAgLy8gZGlmZmVyZW5jZSBiZXR3ZWVuIGEgbGFyZ2UgcHJvcCBpbnNpZGUgaXRzIHRyaWFuZ2xlIGNlaWxpbmcgYW5kIG9uZSBvdmVyIGl0XG4gICAgY29uc3QgZyA9IHByaXNtID8gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkodCAqIDAuNjIsIHQgKiAwLjYyLCBsZW4sIDMsIDEsIHRydWUpIDogbmV3IFRIUkVFLkJveEdlb21ldHJ5KHQsIGxlbiwgdCk7XG4gICAgZy50cmFuc2xhdGUoMCwgckh1YiArIGxlbiAvIDIsIDApO1xuICAgIGcucm90YXRlWChNYXRoLmF0YW4yKHNpZGUsIGxlbikgKiAwLjYpO1xuICAgIGcucm90YXRlWCgwKTsgZy50cmFuc2xhdGUoMCwgMCwgc2lkZSAqIDAuNSk7XG4gICAgZy5yb3RhdGVYKGEpOyAgICAgICAgICAgIC8vIHJhZGlhdGUgYXJvdW5kIHRoZSBheGxlICh4KVxuICAgIHNlZ3MucHVzaChnKTtcbiAgfVxuICByZXR1cm4gdGludEdlbyhtZXJnZUdlb3Moc2VncyksIGhleCk7XG59XG5cbi8qKiBBIHBvbHlsaW5lIFRVQkU6IG9uZSBjeWxpbmRlciBwZXIgc2VnbWVudCwgZWFjaCByb3RhdGVkIG9udG8gaXRzIGNob3JkLCB3aXRoIGEgc21hbGwgc3BoZXJlLWxlc3NcbiAqICBvdmVybGFwIHNvIHRoZSBqb2ludHMgY2xvc2UuIEhhbmRsZWJhcnMsIGNhbm9weSByYWlscywgcm9sbCBjYWdlcyBhbmQgZnJhbWUgdHViZXMuICovXG5mdW5jdGlvbiB0dWJlKHB0czogbnVtYmVyW11bXSwgcjogbnVtYmVyLCBzZWcgPSA4LCBoZXg/OiBudW1iZXIsIG9wZW4gPSBmYWxzZSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcGFydHM6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwdHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgY29uc3QgYSA9IG5ldyBUSFJFRS5WZWN0b3IzKHB0c1tpXVswXSwgcHRzW2ldWzFdLCBwdHNbaV1bMl0pO1xuICAgIGNvbnN0IGIgPSBuZXcgVEhSRUUuVmVjdG9yMyhwdHNbaSArIDFdWzBdLCBwdHNbaSArIDFdWzFdLCBwdHNbaSArIDFdWzJdKTtcbiAgICBjb25zdCBkID0gYi5jbG9uZSgpLnN1YihhKTsgY29uc3QgbGVuID0gZC5sZW5ndGgoKTtcbiAgICBpZiAobGVuIDwgMWUtNikgY29udGludWU7XG4gICAgLy8gYG9wZW5gOiBubyBlbmQgZGlzY3MgLS0gZm9yIGEgcnVuIHdob3NlIGV2ZXJ5IGVuZCBpcyBidXJpZWQgaW4gYSBqb2ludCwgYSByaW5nIG9yIGEgaHViLCB0aGVcbiAgICAvLyB0d28gY2FwcyBhcmUgaGFsZiB0aGUgc2VnbWVudCdzIHRyaWFuZ2xlcyBzcGVudCBvbiBmYWNlcyBub3RoaW5nIGNhbiBzZWVcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkociwgciwgbGVuICsgciAqIDEuMiwgc2VnLCAxLCBvcGVuKTtcbiAgICBjb25zdCBxID0gbmV3IFRIUkVFLlF1YXRlcm5pb24oKS5zZXRGcm9tVW5pdFZlY3RvcnMobmV3IFRIUkVFLlZlY3RvcjMoMCwgMSwgMCksIGQubm9ybWFsaXplKCkpO1xuICAgIGcuYXBwbHlRdWF0ZXJuaW9uKHEpO1xuICAgIGNvbnN0IG0gPSBhLmNsb25lKCkuYWRkKGIpLm11bHRpcGx5U2NhbGFyKDAuNSk7XG4gICAgZy50cmFuc2xhdGUobS54LCBtLnksIG0ueik7XG4gICAgcGFydHMucHVzaChnKTtcbiAgfVxuICBjb25zdCBvdXQgPSBtZXJnZUdlb3MocGFydHMpO1xuICByZXR1cm4gaGV4ID09PSB1bmRlZmluZWQgPyBvdXQgOiB0aW50R2VvKG91dCwgaGV4KTtcbn1cblxuLyoqIEEgcm90YXRlZCBib3g6IFtjeCwgY3ksIGN6LCB3LCBoLCBkLCByeCwgcnksIHJ6XSB3aXRoIHRoZSByb3RhdGlvbnMgYXBwbGllZCBpbiB4LCB5LCB6IG9yZGVyXG4gKiAgYWJvdXQgdGhlIGJveCdzIG93biBjZW50cmUuIEEgYm9ubmV0IGxpcCwgYSByYWtlZCBtaXJyb3Igc3RlbSwgYSBjYW5vcHkgc3RheS4gKi9cbmZ1bmN0aW9uIHJib3goYjogbnVtYmVyW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IGcgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoYlszXSwgYls0XSwgYls1XSk7XG4gIGlmIChiWzZdKSBnLnJvdGF0ZVgoYls2XSk7IGlmIChiWzddKSBnLnJvdGF0ZVkoYls3XSk7IGlmIChiWzhdKSBnLnJvdGF0ZVooYls4XSk7XG4gIGcudHJhbnNsYXRlKGJbMF0sIGJbMV0sIGJbMl0pO1xuICByZXR1cm4gZztcbn1cblxuLyoqIEEgYmF0Y2ggb2YgYm94ZXMsIGVhY2ggdGludGVkLCBtZXJnZWQ6IFtbaGV4LCBjeCwgY3ksIGN6LCB3LCBoLCBkLCByeD8sIHJ5Pywgcno/XSwgLi4uXS4gVGhlXG4gKiAgdHJpbSBjb21wb25lbnQgb2YgZXZlcnkgdmVoaWNsZSBpcyBvbmUgb2YgdGhlc2UgLS0gYnVtcGVycywgZ3JpbGxlLCBsYW1wcywgbWlycm9ycywgaGFuZGxlcyxcbiAqICBzdGVwcywgYXJjaCBmbGFyZXMgLS0gc28gZm9ydHkgcGFydHMgcmlkZSBvbmUgc3VibWlzc2lvbi4gKi9cbmZ1bmN0aW9uIHRpbnRlZEJveGVzKGxpc3Q6IG51bWJlcltdW10pOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIHJldHVybiBtZXJnZUdlb3MobGlzdC5tYXAoKGIpID0+IHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpKTtcbn1cblxuLyoqIE1pcnJvciBhIGJveCBsaXN0IGFjcm9zcyB4ID0gMCAobGVmdC9yaWdodCBwYWlycykuIFJvdGF0aW9ucyBhYm91dCB5IGFuZCB6IGZsaXAgc2lnbi4gKi9cbmZ1bmN0aW9uIG1pcnJvclgobGlzdDogbnVtYmVyW11bXSk6IG51bWJlcltdW10ge1xuICByZXR1cm4gbGlzdC5mbGF0TWFwKChiKSA9PiBbYiwgW2JbMF0sIC1iWzFdLCBiWzJdLCBiWzNdLCBiWzRdLCBiWzVdLCBiWzZdLCBiWzddID8/IDAsIC0oYls4XSA/PyAwKSwgLShiWzldID8/IDApXV0pO1xufVxuXG4vKiogQSBzZWFtbGVzcyBDYW52YXMgMkQgdGlsZTogYGRyYXcoY3R4LCBzaXplKWAgcGFpbnRzIGl0LCBhbmQgdGhlIHJlc3VsdCBpcyBhIHJlcGVhdGluZyB0ZXh0dXJlXG4gKiAgaW4gc1JHQi4gVXNlZCBBRlRFUiBtYXRlcmlhbCBjb25zdHJ1Y3Rpb24sIHNvIHRoZSB0ZXh0dXJlbGVzcyBkZWNsYXJhdGlvbiBzdGFuZHMgYW5kIG5vXG4gKiAgcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZC4gUmV0dXJucyBudWxsIHdoZXJlIHRoZXJlIGlzIG5vIERPTSAodGhlIGhlYWRsZXNzIGhhcm5lc3NcbiAqICBoYXMgb25lOyBhIG5vZGUtc2lkZSBwcm9iZSBkb2VzIG5vdCksIGFuZCBldmVyeSBjYWxsZXIgdG9sZXJhdGVzIG51bGwuICovXG5mdW5jdGlvbiBjYW52YXNUaWxlKHNpemU6IG51bWJlciwgZHJhdzogKGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJELCBzOiBudW1iZXIpID0+IHZvaWQpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09ICd1bmRlZmluZWQnKSByZXR1cm4gbnVsbDtcbiAgY29uc3QgY3YgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTsgY3Yud2lkdGggPSBzaXplOyBjdi5oZWlnaHQgPSBzaXplO1xuICBjb25zdCBjdHggPSBjdi5nZXRDb250ZXh0KCcyZCcpOyBpZiAoIWN0eCkgcmV0dXJuIG51bGw7XG4gIGRyYXcoY3R4LCBzaXplKTtcbiAgY29uc3QgdGV4ID0gbmV3IFRIUkVFLkNhbnZhc1RleHR1cmUoY3YpO1xuICB0ZXgud3JhcFMgPSB0ZXgud3JhcFQgPSBUSFJFRS5SZXBlYXRXcmFwcGluZztcbiAgdGV4LmNvbG9yU3BhY2UgPSBUSFJFRS5TUkdCQ29sb3JTcGFjZTtcbiAgdGV4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgcmV0dXJuIHRleDtcbn1cblxuLyoqIERldGVybWluaXN0aWMgcHNldWRvLXJhbmRvbSBmb3IgY2FudmFzIGRyZXNzaW5nIC0tIGFzc2lnbmVkIGJ5IGluZGV4LCBuZXZlciBNYXRoLnJhbmRvbSwgc28gdGhlXG4gKiAgbW9kZWwgaXMgYnl0ZS1pZGVudGljYWwgb24gZXZlcnkgYnVpbGQuICovXG5mdW5jdGlvbiBsY2coc2VlZDogbnVtYmVyKTogKCkgPT4gbnVtYmVyIHtcbiAgbGV0IHMgPSBzZWVkID4+PiAwO1xuICByZXR1cm4gKCkgPT4geyBzID0gKHMgKiAxNjY0NTI1ICsgMTAxMzkwNDIyMykgPj4+IDA7IHJldHVybiBzIC8gNDI5NDk2NzI5NjsgfTtcbn1cblxuLyoqXG4gKiBNVUQgLyBST0FELUdSSU1FIHRpbGUsIFJFLUJBU0VELiBUaGFpIHJvYWQgbXVkIGlzIHRhbiBhbmQgQlJJR0hURVIgdGhhbiBtb3N0IHBhaW50LCBhbmQgYVxuICogbXVsdGlwbGllciBjYW5ub3QgYnJpZ2h0ZW46IHNvIHRoZSBwYWludCBtYXRlcmlhbCBjYXJyaWVzIHRoZSBNVUQgRU5WRUxPUEUgY29sb3VyIChtZWFzdXJlZCBvblxuICogdGhlIG11ZGR5IHNpbGwpLCB0aGlzIHRpbGUgY2FycmllcyB0aGUgY2xlYW4gcGFpbnQgYXMgYSBSQVRJTyBvZiB0aGF0IGVudmVsb3BlIG92ZXIgbW9zdCBvZiBpdHNcbiAqIGFyZWEgKGBiYXNlYCksIGFuZCB0aGUgbXVkIGlzIHBhaW50ZWQgYXMgd2hpdGUgLS0gaS5lLiB0aGUgZW52ZWxvcGUgaXRzZWxmIC0tIGluIGEgd2FzaCByaXNpbmdcbiAqIGZyb20gdGhlIGJvdHRvbSB0byBgY292ZXJhZ2VgIG9mIHRoZSB0aWxlIGhlaWdodCBwbHVzIHNwbGF0dGVyIGFib3ZlIGl0LiBCb3VuZCB3aXRoIGhlaWdodCBVVnNcbiAqIHNvIHYgPSAwIGlzIHRoZSBncm91bmQgYW5kIHRoZSB3YXNoIHNpdHMgb24gdGhlIHNpbGxzIGFuZCBhcmNoZXMuXG4gKi9cbmZ1bmN0aW9uIG11ZFRpbGUoc2l6ZTogbnVtYmVyLCBiYXNlOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBjb3ZlcmFnZSA9IDAuMzMsXG4gICAgICAgICAgICAgICAgIG9wdHM6IHsgZmxvb3I/OiBudW1iZXIsIHN0cmVha3M/OiBudW1iZXIsIGNsb3VkPzogbnVtYmVyLCBzcGVja2xlPzogbnVtYmVyLCB0b25lPzogbnVtYmVyW10sIHpvbmVzPzogbnVtYmVyW11bXSB9ID0ge30pOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY29uc3QgdG9IZXggPSAodjogbnVtYmVyW10pID0+ICcjJyArIHYubWFwKChjKSA9PiBNYXRoLnJvdW5kKE1hdGgubWluKDEsIE1hdGgubWF4KDAsIGMpKSAqIDI1NSkudG9TdHJpbmcoMTYpLnBhZFN0YXJ0KDIsICcwJykpLmpvaW4oJycpO1xuICAgIGN0eC5maWxsU3R5bGUgPSB0b0hleChiYXNlKTsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIGBmbG9vcmAgaXMgdGhlIGZyYWN0aW9uIG9mIHRoZSB0aWxlIGhlaWdodCAoaS5lLiBvZiB0aGUgd29ybGQgaGVpZ2h0IHRoZSB0aWxlIHNwYW5zKSBiZWxvd1xuICAgIC8vIHdoaWNoIHRoZSB3YXNoIGlzIEZVTEw6IGEgYm9keSB3aG9zZSBzaWxsIGlzIDAuNDYgbSB1cCBhIDIgbSB0aWxlIHdhbnRzIHRoZSBtdWQgc29saWQgdG9cbiAgICAvLyAwLjIzIGFuZCBmYWRpbmcgZnJvbSB0aGVyZSwgbm90IGZhZGluZyBmcm9tIHRoZSBncm91bmQgaXQgbmV2ZXIgcmVhY2hlcy5cbiAgICBjb25zdCBmbCA9IE1hdGgubWluKGNvdmVyYWdlLCBvcHRzLmZsb29yID8/IDApO1xuICAgIC8vIGB0b25lYCBpcyB0aGUgTVVEIGFzIGEgcmF0aW8gb2YgdGhlIGVudmVsb3BlLCBmb3IgYSBwYWludCB3aG9zZSBlbnZlbG9wZSBpcyB0aGUgcGVyLWNoYW5uZWxcbiAgICAvLyBtYXggb2YgY2xlYW4gcGFpbnQgYW5kIG11ZCAoYSBncmVlbiB3aG9zZSBtdWQgaXMgdGFuIGlzIGJyaWdodGVyIGluIHJlZCwgZGFya2VyIGluIGdyZWVuKTpcbiAgICAvLyB1bnNldCwgdGhlIG11ZCBpcyB3aGl0ZSAtLSB0aGUgZW52ZWxvcGUgaXRzZWxmLlxuICAgIGNvbnN0IFQgPSBvcHRzLnRvbmUgPyBvcHRzLnRvbmUubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIE1hdGgubWF4KDAsIHYpKSkpIDogbnVsbDtcbiAgICBjb25zdCBtdWQgPSAoYTogbnVtYmVyKSA9PiBUID8gYHJnYmEoJHtUWzBdfSwke1RbMV19LCR7VFsyXX0sJHthfSlgIDogYHJnYmEoMjU1LDI1MiwyNDQsJHthfSlgO1xuICAgIGNvbnN0IGdyYWQgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcyAqICgxIC0gZmwpLCAwLCBzICogKDEgLSBjb3ZlcmFnZSkpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAsIFQgPyBtdWQoMC44OCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjg4KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIFQgPyBtdWQoMC40NSkgOiAncmdiYSgyNTUsMjU1LDI1NSwwLjQ1KScpO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIFQgPyBtdWQoMCkgOiAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBncmFkOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgcyk7XG4gICAgLy8gYHpvbmVzYCBhcmUgW3UwLCB1MSwgd2VpZ2h0XSBzcGFucyBvZiB0aGUgdGlsZSdzIHdpZHRoIHRoZSBzcHJheSBjb25jZW50cmF0ZXMgaW4gLS0gd2l0aFxuICAgIC8vIHRoZSB0aWxlIGZpdHRlZCB0byB0aGUgdmVoaWNsZSdzIGxlbmd0aCAoaGVpZ2h0VVYgdVNjYWxlID0gTCksIHRoYXQgaXMgXCJiZWhpbmQgdGhlIGZyb250XG4gICAgLy8gd2hlZWxcIiwgXCJhaGVhZCBvZiB0aGUgcmVhciBhcmNoXCIsIFwiYWxvbmcgdGhlIGJlZCBzaWRlXCI6IHdoZXJlIGEgd2hlZWwgYWN0dWFsbHkgdGhyb3dzIG11ZC5cbiAgICBjb25zdCB6b25lcyA9IG9wdHMuem9uZXMgPz8gW1swLCAxLCAxXV07XG4gICAgY29uc3QgenN1bSA9IHpvbmVzLnJlZHVjZSgoYWNjLCB6bikgPT4gYWNjICsgem5bMl0sIDApO1xuICAgIGNvbnN0IHBpY2tVID0gKCkgPT4geyBsZXQgdCA9IHJuZCgpICogenN1bTsgZm9yIChjb25zdCB6biBvZiB6b25lcykgeyBpZiAodCA8IHpuWzJdKSByZXR1cm4gKHpuWzBdICsgcm5kKCkgKiAoem5bMV0gLSB6blswXSkpICogczsgdCAtPSB6blsyXTsgfSByZXR1cm4gcm5kKCkgKiBzOyB9O1xuICAgIC8vIERVU1QgRklMTTogc29mdCBjbG91ZHkgcGF0Y2hlcyBvZiB0aGUgZW52ZWxvcGUgb3ZlciB0aGUgY2xlYW4gcGFpbnQgZXZlcnl3aGVyZSwgc28gdGhlXG4gICAgLy8gdXBwZXIgYm9keSBpcyBub3QgYSBmbGF0IGZpbGwgLS0gdGhlIHBsYXRlJ3MgZ3JlZW4gaXMgYSBkdWxsLCBkdXN0eSBncmVlbi5cbiAgICBpZiAob3B0cy5jbG91ZCkgZm9yIChsZXQgaSA9IDA7IGkgPCA0MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gcyAqICgwLjA4ICsgcm5kKCkgKiAwLjE4KSwgYSA9IG9wdHMuY2xvdWQgKiAoMC40ICsgcm5kKCkgKiAwLjYpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgbXVkKGEpKTsgZzIuYWRkQ29sb3JTdG9wKDEsIG11ZCgwKSk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICAvLyBTUFJBWTogdGhlIG11ZCBhIHdoZWVsIHRocm93cyBpcyBhIGZpZWxkIG9mIHNtYWxsIHNwbGF0cyBzdHJlYWtlZCBhbG9uZyB0aGUgZGlyZWN0aW9uIG9mXG4gICAgLy8gdHJhdmVsICh1KSwgZGVuc2VzdCBqdXN0IGFib3ZlIHRoZSB3YXNoIGFuZCB0aGlubmluZyB1cHdhcmQgaW4gY2x1c3RlcnMgLS0gbm90IGEgZ3JhZGllbnQuXG4gICAgaWYgKG9wdHMuc3RyZWFrcykgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnN0cmVha3M7IGkrKykge1xuICAgICAgY29uc3QgY3gwID0gcGlja1UoKSwgYmFuZCA9IGNvdmVyYWdlO1xuICAgICAgY29uc3QgY3kwID0gcyAtIHMgKiAoZmwgKyBNYXRoLnBvdyhybmQoKSwgMS42KSAqIChiYW5kIC0gZmwpKTtcbiAgICAgIGNvbnN0IGNvdW50ID0gNiArIE1hdGguZmxvb3Iocm5kKCkgKiAxOCksIHNwcmVhZCA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IGNvdW50OyBrKyspIHtcbiAgICAgICAgY29uc3QgeCA9IGN4MCArIChybmQoKSAtIDAuNSkgKiBzcHJlYWQgKiAzLCB5ID0gY3kwICsgKHJuZCgpIC0gMC41KSAqIHNwcmVhZDtcbiAgICAgICAgY29uc3QgdyA9IDEgKyBybmQoKSAqIHMgKiAwLjAwNiwgaCA9IDAuOCArIHJuZCgpICogcyAqIDAuMDAzLCBhID0gMC4zNSArIHJuZCgpICogMC41NTtcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgICAgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCB3LCBoLCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9wdHMuc3BlY2tsZSkgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRzLnNwZWNrbGU7IGkrKykge1xuICAgICAgY29uc3QgeCA9IHBpY2tVKCksIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDEuMykgKiBzICogY292ZXJhZ2UsIHIgPSAwLjYgKyBybmQoKSAqIDEuNCwgYSA9IDAuMyArIHJuZCgpICogMC42O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IG11ZChhKTtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5MDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcyAtIE1hdGgucG93KHJuZCgpLCAyLjIpICogcyAqIGNvdmVyYWdlICogMS4zNTtcbiAgICAgIGNvbnN0IHIgPSAzICsgcm5kKCkgKiBzICogMC4wNTtcbiAgICAgIGNvbnN0IGEgPSAwLjA4ICsgcm5kKCkgKiAwLjI4O1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgVCA/IG11ZChhKSA6IGByZ2JhKDI1NSwyNTAsMjQwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCBUID8gbXVkKDApIDogJ3JnYmEoMjU1LDI1MCwyNDAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gICAgLy8gYSBsaXR0bGUgZ3JhaW4gc28gdGhlIGNsZWFuIHBhaW50IGlzIG5vdCBhIGZsYXQgZmlsbFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTIwMDsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzOyBjb25zdCB2ID0gcm5kKCkgPCAwLjUgPyAwIDogMjU1O1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuMDM1KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAxLjUsIDEuNSk7XG4gICAgfVxuICB9KTtcbn1cblxuLyoqIERVU1QgdGlsZSBmb3IgcGFpbnQgdGhhdCBpcyBCUklHSFRFUiB0aGFuIGl0cyBkaXJ0IChhIHdoaXRlIHZhbik6IGEgcGxhaW4gbXVsdGlwbGllciwgd2hpdGVcbiAqICBiYXNlIGFuZCBhIGdyZXktYnJvd24gd2FzaCByaXNpbmcgZnJvbSB0aGUgZ3JvdW5kIHRvIGBjb3ZlcmFnZWAsIHBsdXMgc29mdCBibG9icy4gKi9cbmZ1bmN0aW9uIGR1c3RUaWxlKHNpemU6IG51bWJlciwgZHVzdDogbnVtYmVyW10sIHNlZWQ6IG51bWJlciwgY292ZXJhZ2UgPSAwLjMwKTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSAnI2ZmZmZmZic7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBjb25zdCBjID0gZHVzdC5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogTWF0aC5taW4oMSwgdikpKTtcbiAgICBjb25zdCBncmFkID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHMsIDAsIHMgKiAoMSAtIGNvdmVyYWdlKSk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC45KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMC40KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGdyYWQ7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDgwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBzIC0gTWF0aC5wb3cocm5kKCksIDIuMikgKiBzICogY292ZXJhZ2UgKiAxLjQsIHIgPSAzICsgcm5kKCkgKiBzICogMC4wNSwgYSA9IDAuMDggKyBybmQoKSAqIDAuMjU7XG4gICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTtcbiAgICAgIGcyLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwke2F9KWApOyBnMi5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5LCByLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICB9XG4gIH0pO1xufVxuXG4vKiogR0xBU1MgdGlsZSBmb3IgYSB2ZWhpY2xlJ3MgZ2xhemluZyBiYW5kLCBib3VuZCBhcyBgbWFwYCBvbiB0aGUgZ2xhc3MgbWF0ZXJpYWwgQUZURVJcbiAqICBjb25zdHJ1Y3Rpb24gKHRoZSBtYXRlcmlhbCBzdGF5cyB0ZXh0dXJlbGVzcy1kZWNsYXJlZCkuIFRoZSBwYW5lJ3MgVVZzIGFyZSBoZWlnaHQta2V5ZWRcbiAqICAoYGhlaWdodFVWYCksIHNvIHYgcnVucyBzaWxsLXRvLXJvb2Y6IHRoZSB0aWxlIGlzIGEgdmVydGljYWwgZ3JhZGllbnQgZnJvbSB0aGUgbWF0ZXJpYWwnc1xuICogIG93biB0b25lIGF0IHRoZSB0b3AgKHdoaXRlLCBpLmUuIHRoZSBza3ktbGl0IHZhbHVlIHRoZSBtYXRlcmlhbCBpcyByZS1iYXNlZCB0bykgZG93biB0b1xuICogIGBsb3dgIGF0IHRoZSBib3R0b20gLS0gYSByZWFsIHNjcmVlbiByZWZsZWN0cyBza3kgYXQgdGhlIHRvcCBhbmQgdGhlIGRhcmsgZGFzaCBhbmQgcm9hZCBiZWxvd1xuICogIC0tIHBsdXMgYSBmZXcgc29mdCBkaWFnb25hbCByZWZsZWN0aW9uIHN0cmVha3MgYW5kIGEgZmFpbnQgdGludCBiYW5kLiBgbG93YCBpcyBhIGxpbmVhci1zcGFjZVxuICogIHJhdGlvIChzZWUgZW1pdC5tanMgYHJhdGlvYCkgb2YgdGhlIG1lYXN1cmVkIHNpZGUtZ2xhc3MgdG9uZSBvdmVyIHRoZSBza3ktbGl0IHRvbmUuICovXG5mdW5jdGlvbiBnbGFzc1RpbGUoc2l6ZTogbnVtYmVyLCBsb3c6IG51bWJlcltdLCBzZWVkOiBudW1iZXIsIHN0cmVha3MgPSA1KTogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwge1xuICByZXR1cm4gY2FudmFzVGlsZShzaXplLCAoY3R4LCBzKSA9PiB7XG4gICAgY29uc3Qgcm5kID0gbGNnKHNlZWQpO1xuICAgIGNvbnN0IGMgPSBsb3cubWFwKCh2KSA9PiBNYXRoLnJvdW5kKDI1NSAqIE1hdGgubWluKDEsIHYpKSk7XG4gICAgY29uc3QgZ3JhZCA9IGN0eC5jcmVhdGVMaW5lYXJHcmFkaWVudCgwLCBzLCAwLCAwKTtcbiAgICBncmFkLmFkZENvbG9yU3RvcCgwLCBgcmdiKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19KWApO1xuICAgIGdyYWQuYWRkQ29sb3JTdG9wKDAuNDUsIGByZ2IoJHtNYXRoLnJvdW5kKChjWzBdICsgMjU1KSAvIDIpfSwke01hdGgucm91bmQoKGNbMV0gKyAyNTUpIC8gMil9LCR7TWF0aC5yb3VuZCgoY1syXSArIDI1NSkgLyAyKX0pYCk7XG4gICAgZ3JhZC5hZGRDb2xvclN0b3AoMSwgJyNmZmZmZmYnKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZ3JhZDsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIC8vIHJlZmxlY3Rpb24gc3RyZWFrczogbG9uZyBzb2Z0IGRpYWdvbmFsIGJhbmRzLCBsaWdodGVyLCB0aWxlZCBpbiB1IHNvIHRoZSBzZWFtIG5ldmVyIHNob3dzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdHJlYWtzOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHcgPSBzICogKDAuMDQgKyBybmQoKSAqIDAuMTApLCBhID0gMC4xMCArIHJuZCgpICogMC4xNiwgdGlsdCA9IHMgKiAoMC4yNSArIHJuZCgpICogMC4zNSk7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIHtcbiAgICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoeCArIGR4LCAwLCB4ICsgZHggKyB3LCAwKTtcbiAgICAgICAgZzIuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwyNTUsMjU1LDApJyk7IGcyLmFkZENvbG9yU3RvcCgwLjUsIGByZ2JhKDI1NSwyNTUsMjU1LCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsMjU1LDI1NSwwKScpO1xuICAgICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTsgY3R4Lm1vdmVUbyh4ICsgZHgsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHMpOyBjdHgubGluZVRvKHggKyBkeCArIHcgKyB0aWx0LCAwKTsgY3R4LmxpbmVUbyh4ICsgZHggKyB0aWx0LCAwKTsgY3R4LmNsb3NlUGF0aCgpOyBjdHguZmlsbCgpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBhIGRhcmtlciBmaWxtIGluIHRoZSBsb3dlc3QgdGVudGg6IHRoZSBkYXNoIC8gY293bCBzaGFkb3cgYmVoaW5kIHRoZSBwYW5lXG4gICAgY29uc3QgZzMgPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgcywgMCwgcyAqIDAuODgpO1xuICAgIGczLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2NbMF19LCR7Y1sxXX0sJHtjWzJdfSwwLjU1KWApOyBnMy5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sMClgKTtcbiAgICBjdHguZmlsbFN0eWxlID0gZzM7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgfSk7XG59XG5cbi8qKiBDT1JSVUdBVEVEIFNIRUVUIHRpbGU6IHZlcnRpY2FsIHJpZGdlcyBhcyBhIHNpbmUtc2hhZGVkIHN0cmlwZSBmaWVsZCwgdXNlZCBhcyBtYXAgQU5EIGJ1bXBNYXAgb25cbiAqICBhIHNvbmd0aGFldyByb29mIHNvIHRoZSByaWRnZXMgY2F0Y2ggbGlnaHQuIGBwaXRjaGAgcmlkZ2VzIHBlciB0aWxlLiAqL1xuZnVuY3Rpb24gY29ycnVnYXRpb25UaWxlKHNpemU6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgbG93OiBudW1iZXIsIHNlZWQ6IG51bWJlcik6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHM7IHgrKykge1xuICAgICAgY29uc3QgdCA9IChNYXRoLmNvcyh4IC8gcyAqIE1hdGguUEkgKiAyICogcGl0Y2gpICsgMSkgLyAyOyAgIC8vIDEgYXQgY3Jlc3QsIDAgaW4gdHJvdWdoXG4gICAgICBjb25zdCB2ID0gTWF0aC5yb3VuZCgyNTUgKiAobG93ICsgKDEgLSBsb3cpICogdCkpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KHgsIDAsIDEsIHMpO1xuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ211bHRpcGx5JztcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHtcbiAgICAgIGNvbnN0IHggPSBybmQoKSAqIHMsIHkgPSBybmQoKSAqIHMsIHIgPSA0ICsgcm5kKCkgKiBzICogMC4wODtcbiAgICAgIGNvbnN0IGcyID0gY3R4LmNyZWF0ZVJhZGlhbEdyYWRpZW50KHgsIHksIDAsIHgsIHksIHIpO1xuICAgICAgY29uc3QgYSA9IDAuMDggKyBybmQoKSAqIDAuMTg7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoMTIwLDkwLDYwLCR7YX0pYCk7IGcyLmFkZENvbG9yU3RvcCgxLCAncmdiYSgxMjAsOTAsNjAsMCknKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjtcbiAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgZm9yIChjb25zdCBkeSBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmFyYyh4ICsgZHgsIHkgKyBkeSwgciwgMCwgTWF0aC5QSSAqIDIpOyBjdHguZmlsbCgpOyB9XG4gICAgfVxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnc291cmNlLW92ZXInO1xuICB9KTtcbn1cblxuLyoqIFBMQU5LIHRpbGU6IGJvYXJkcyBydW5uaW5nIGFsb25nIHUgd2l0aCBkYXJrIGpvaW50cyBhbmQgZ3JhaW4gc3RyZWFrcywgYSBtdWx0aXBsaWVyIG9uIGFcbiAqICBtZWFzdXJlZCB0aW1iZXIgYWxiZWRvLiBgYm9hcmRzYCBwZXIgdGlsZS4gKi9cbmZ1bmN0aW9uIHBsYW5rVGlsZShzaXplOiBudW1iZXIsIGJvYXJkczogbnVtYmVyLCBzZWVkOiBudW1iZXIpOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGNvbnN0IGJoID0gcyAvIGJvYXJkcztcbiAgICBmb3IgKGxldCBiID0gMDsgYiA8IGJvYXJkczsgYisrKSB7XG4gICAgICBjb25zdCB0b25lID0gMC44MiArIHJuZCgpICogMC4xODtcbiAgICAgIGNvbnN0IHYgPSBNYXRoLnJvdW5kKDI1NSAqIHRvbmUpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke3Z9LCR7dn0pYDsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgYmgpO1xuICAgICAgY3R4LmZpbGxTdHlsZSA9ICdyZ2JhKDQwLDMwLDIwLDAuNTUpJzsgY3R4LmZpbGxSZWN0KDAsIGIgKiBiaCwgcywgTWF0aC5tYXgoMSwgcyAqIDAuMDA2KSk7XG4gICAgICBmb3IgKGxldCBrID0gMDsgayA8IDE0OyBrKyspIHtcbiAgICAgICAgY29uc3QgeSA9IGIgKiBiaCArIHJuZCgpICogYmgsIGxlbiA9IHMgKiAoMC4yICsgcm5kKCkgKiAwLjYpLCB4ID0gcm5kKCkgKiBzO1xuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBgcmdiYSg2MCw0NSwzMCwkezAuMDUgKyBybmQoKSAqIDAuMTJ9KWA7IGN0eC5saW5lV2lkdGggPSAxO1xuICAgICAgICBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCAtIHMsIHkpOyBjdHgubGluZVRvKHggLSBzICsgbGVuLCB5KTsgY3R4Lm1vdmVUbyh4LCB5KTsgY3R4LmxpbmVUbyh4ICsgbGVuLCB5KTsgY3R4LnN0cm9rZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59XG5cbi8qKiBSVVNUIHRpbGU6IGEgbXVsdGlwbGllciBvZiBibG90Y2hlZCBvcmFuZ2UtYnJvd24gb3ZlciBhIGJhc2UsIGRhcmsgY29yZXMgbGlmdGVkIHNvIG5vdGhpbmcgbGFuZHNcbiAqICBvbiB0aGUgbHVtYS01OCBob2xlIGdhdGUuICovXG5mdW5jdGlvbiBydXN0VGlsZShzaXplOiBudW1iZXIsIHJhdGlvOiBudW1iZXJbXSwgc2VlZDogbnVtYmVyLCBkZW5zaXR5ID0gOTApOiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCB7XG4gIHJldHVybiBjYW52YXNUaWxlKHNpemUsIChjdHgsIHMpID0+IHtcbiAgICBjb25zdCBybmQgPSBsY2coc2VlZCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICcjZmZmZmZmJzsgY3R4LmZpbGxSZWN0KDAsIDAsIHMsIHMpO1xuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbXVsdGlwbHknO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVuc2l0eTsgaSsrKSB7XG4gICAgICBjb25zdCB4ID0gcm5kKCkgKiBzLCB5ID0gcm5kKCkgKiBzLCByID0gMyArIHJuZCgpICogcyAqIDAuMDk7XG4gICAgICBjb25zdCBhID0gMC4xNSArIHJuZCgpICogMC40NTtcbiAgICAgIGNvbnN0IGMgPSByYXRpby5tYXAoKHYpID0+IE1hdGgucm91bmQoMjU1ICogdikpO1xuICAgICAgY29uc3QgZzIgPSBjdHguY3JlYXRlUmFkaWFsR3JhZGllbnQoeCwgeSwgMCwgeCwgeSwgcik7XG4gICAgICBnMi5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtjWzBdfSwke2NbMV19LCR7Y1syXX0sJHthfSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7Y1swXX0sJHtjWzFdfSwke2NbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZzI7XG4gICAgICBmb3IgKGNvbnN0IGR4IG9mIFstcywgMCwgc10pIGZvciAoY29uc3QgZHkgb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5hcmMoeCArIGR4LCB5ICsgZHksIHIsIDAsIE1hdGguUEkgKiAyKTsgY3R4LmZpbGwoKTsgfVxuICAgIH1cbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcbiAgfSk7XG59XG5cbi8qKiBIZWlnaHQta2V5ZWQgVVZzOiB2IGlzIHdvcmxkIEhFSUdIVCBvdmVyIGBzY2FsZWAgbWV0cmVzLCB1IHJ1bnMgYWxvbmcgdGhlIGRvbWluYW50IGhvcml6b250YWxcbiAqICBheGlzLiBBIG11ZCB0aWxlIGJvdW5kIHRoaXMgd2F5IGRhcmtlbnMgdGhlIHNpbGxzIGFuZCBzdGF5cyBjbGVhbiBvbiB0aGUgcm9vZiAtLSBhIHBsYWluIGJveFxuICogIHByb2plY3Rpb24gd291bGQgcmVwZWF0IHRoZSB0aWxlJ3MgZGlydHkgYmFuZCBhY3Jvc3MgdGhlIHJvb2YgYXMgc3RyaXBlcy4gKi9cbmZ1bmN0aW9uIGhlaWdodFVWKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHNjYWxlOiBudW1iZXIsXG4gICAgICAgICAgICAgICAgICBvcHRzOiB7IHVTY2FsZT86IG51bWJlciwgdG9wQ2xlYW4/OiBib29sZWFuIH0gPSB7fSk6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5IHtcbiAgY29uc3QgcCA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyksIG5ybSA9IGdlby5nZXRBdHRyaWJ1dGUoJ25vcm1hbCcpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBjb25zdCB1cyA9IG9wdHMudVNjYWxlID8/IHNjYWxlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IGF4ID0gTWF0aC5hYnMobnJtLmdldFgoaSkpLCBheSA9IE1hdGguYWJzKG5ybS5nZXRZKGkpKSwgYXogPSBNYXRoLmFicyhucm0uZ2V0WihpKSk7XG4gICAgY29uc3QgdSA9IGF4ID49IGF6ID8gcC5nZXRaKGkpIDogcC5nZXRYKGkpO1xuICAgIGxldCB2ID0gcC5nZXRZKGkpIC8gc2NhbGU7XG4gICAgLy8gQSB0aWxlIGtleWVkIG9uIGhlaWdodCBjYW5ub3QgdGVsbCBhIGJvbm5ldCBmcm9tIGEgZG9vciBhdCB0aGUgc2FtZSBoZWlnaHQsIGFuZCBhIGJvbm5ldFxuICAgIC8vIGlzIGNsZWFuIHdoZXJlIGEgZG9vciBpcyBzcHJheWVkOiBgdG9wQ2xlYW5gIHNlbmRzIGV2ZXJ5IHVwd2FyZCBmYWNlIGludG8gdGhlIHRpbGUncyB0b3BcbiAgICAvLyBiYW5kICh2IDAuNzUuLjAuOTUpLCBhYm92ZSBhbnkgd2FzaCwgd2hlcmUgb25seSB0aGUgZHVzdCBmaWxtIGFwcGxpZXMuXG4gICAgaWYgKG9wdHMudG9wQ2xlYW4gJiYgYXkgPj0gMC44KSB2ID0gMC43NSArIDAuMiAqICh2IC0gTWF0aC5mbG9vcih2KSk7XG4gICAgdXZbaSAqIDJdID0gdSAvIHVzOyB1dltpICogMiArIDFdID0gdjtcbiAgfVxuICBnZW8uc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgcmV0dXJuIGdlbztcbn1cblxuLyoqIE9mZnNldCBhIGNsb3NlZCBwb2x5Z29uIG9mIFt6LCB5XSBwb2ludHMgb3V0d2FyZCBieSBgZGAgYWxvbmcgdGhlIGF2ZXJhZ2VkIGVkZ2Ugbm9ybWFscy4gVXNlZFxuICogIHRvIHN0YW5kIHRoZSBnbGFzcyBiYW5kIGEgZmV3IG1pbGxpbWV0cmVzIHByb3VkIG9mIHRoZSBib2R5J3MgcmFrZWQgd2luZHNjcmVlbiBhbmQgcmVhciBnbGFzc1xuICogIGZhY2VzLCBzbyB0aGUgcGFuZSBhbmQgdGhlIGJvZHkgbmV2ZXIgc2hhcmUgYSBwbGFuZS4gV2luZGluZzogY291bnRlci1jbG9ja3dpc2UgaW4gKHosIHkpLiAqL1xuZnVuY3Rpb24gb2Zmc2V0UG9seShwdHM6IG51bWJlcltdW10sIGQ6IG51bWJlcik6IG51bWJlcltdW10ge1xuICBjb25zdCBuID0gcHRzLmxlbmd0aCwgb3V0OiBudW1iZXJbXVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgY29uc3QgYSA9IHB0c1soaSArIG4gLSAxKSAlIG5dLCBiID0gcHRzW2ldLCBjID0gcHRzWyhpICsgMSkgJSBuXTtcbiAgICBjb25zdCBlMSA9IFtiWzBdIC0gYVswXSwgYlsxXSAtIGFbMV1dLCBlMiA9IFtjWzBdIC0gYlswXSwgY1sxXSAtIGJbMV1dO1xuICAgIGNvbnN0IGwxID0gTWF0aC5oeXBvdChlMVswXSwgZTFbMV0pIHx8IDEsIGwyID0gTWF0aC5oeXBvdChlMlswXSwgZTJbMV0pIHx8IDE7XG4gICAgLy8gb3V0d2FyZCBub3JtYWwgb2YgYSBDQ1cgZWRnZSAoZHosIGR5KSBpcyAoZHksIC1keilcbiAgICBjb25zdCBuMSA9IFtlMVsxXSAvIGwxLCAtZTFbMF0gLyBsMV0sIG4yID0gW2UyWzFdIC8gbDIsIC1lMlswXSAvIGwyXTtcbiAgICBsZXQgbnggPSBuMVswXSArIG4yWzBdLCBueSA9IG4xWzFdICsgbjJbMV07XG4gICAgY29uc3QgbmwgPSBNYXRoLmh5cG90KG54LCBueSkgfHwgMTsgbnggLz0gbmw7IG55IC89IG5sO1xuICAgIGNvbnN0IGNvc0hhbGYgPSBNYXRoLm1heCgwLjM1LCBueCAqIG4xWzBdICsgbnkgKiBuMVsxXSk7XG4gICAgb3V0LnB1c2goW2JbMF0gKyBueCAqIGQgLyBjb3NIYWxmLCBiWzFdICsgbnkgKiBkIC8gY29zSGFsZl0pO1xuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbi8qKiBBIHdoZWVsLWFyY2ggRkxBUkU6IGEgaGFsZi1hbm51bHVzIGluIHRoZSAoeiwgeSkgcGxhbmUsIGV4dHJ1ZGVkIGFjcm9zcyB4MC4ueDEgb24gYm90aCBzaWRlc1xuICogIGFuZCB0aW50ZWQuIFN0YW5kcyBwcm91ZCBvZiB0aGUgYm9keSBzaWRlIGFuZCBoaWRlcyB0aGUgYXJjaCdzIGN1dCBlZGdlLiAqL1xuZnVuY3Rpb24gZmxhcmUoemM6IG51bWJlciwgeWM6IG51bWJlciwgckluOiBudW1iZXIsIHJPdXQ6IG51bWJlciwgeDA6IG51bWJlciwgeDE6IG51bWJlciwgaGV4OiBudW1iZXIsIG4gPSA5KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBzaGFwZSA9IG5ldyBUSFJFRS5TaGFwZSgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8PSBuOyBpKyspIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IGNvbnN0IHogPSB6YyArIE1hdGguY29zKGEpICogck91dCwgeSA9IHljICsgTWF0aC5zaW4oYSkgKiByT3V0OyBpZiAoaSA9PT0gMCkgc2hhcGUubW92ZVRvKHosIHkpOyBlbHNlIHNoYXBlLmxpbmVUbyh6LCB5KTsgfVxuICBmb3IgKGxldCBpID0gbjsgaSA+PSAwOyBpLS0pIHsgY29uc3QgYSA9IE1hdGguUEkgLSBpICogTWF0aC5QSSAvIG47IHNoYXBlLmxpbmVUbyh6YyArIE1hdGguY29zKGEpICogckluLCB5YyArIE1hdGguc2luKGEpICogckluKTsgfVxuICBzaGFwZS5jbG9zZVBhdGgoKTtcbiAgY29uc3QgbWsgPSAoc3g6IG51bWJlcikgPT4ge1xuICAgIGNvbnN0IGcgPSBuZXcgVEhSRUUuRXh0cnVkZUdlb21ldHJ5KHNoYXBlLCB7IGRlcHRoOiB4MSAtIHgwLCBiZXZlbEVuYWJsZWQ6IGZhbHNlIH0pO1xuICAgIGcucm90YXRlWSgtTWF0aC5QSSAvIDIpOyBnLnRyYW5zbGF0ZSh4MSwgMCwgMCk7IGlmIChzeCA8IDApIGcuc2NhbGUoLTEsIDEsIDEpO1xuICAgIGcuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTsgcmV0dXJuIHRpbnRHZW8oZywgaGV4KTtcbiAgfTtcbiAgY29uc3QgbCA9IG1rKC0xKSwgciA9IG1rKDEpO1xuICAvLyBhIG5lZ2F0aXZlIHNjYWxlIGZsaXBzIHRoZSB3aW5kaW5nOyByZXN0b3JlIGl0IHNvIHRoZSBmbGFyZSBpcyBub3QgaW5zaWRlIG91dFxuICBjb25zdCBpZHggPSBsLmdldEluZGV4KCk7IGlmIChpZHgpIHsgY29uc3QgYSA9IGlkeC5hcnJheSBhcyBhbnk7IGZvciAobGV0IGkgPSAwOyBpIDwgYS5sZW5ndGg7IGkgKz0gMykgeyBjb25zdCB0ID0gYVtpICsgMV07IGFbaSArIDFdID0gYVtpICsgMl07IGFbaSArIDJdID0gdDsgfSBpZHgubmVlZHNVcGRhdGUgPSB0cnVlOyB9XG4gIGVsc2UgeyBjb25zdCBwID0gbC5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJyk7IGZvciAobGV0IGkgPSAwOyBpIDwgcC5jb3VudDsgaSArPSAzKSB7IGNvbnN0IHgxXyA9IHAuZ2V0WChpICsgMSksIHkxXyA9IHAuZ2V0WShpICsgMSksIHoxXyA9IHAuZ2V0WihpICsgMSk7IHAuc2V0WFlaKGkgKyAxLCBwLmdldFgoaSArIDIpLCBwLmdldFkoaSArIDIpLCBwLmdldFooaSArIDIpKTsgcC5zZXRYWVooaSArIDIsIHgxXywgeTFfLCB6MV8pOyB9IH1cbiAgbC5jb21wdXRlVmVydGV4Tm9ybWFscygpO1xuICByZXR1cm4gbWVyZ2VHZW9zKFtsLCByXSk7XG59XG5cbi8qKiBTZWFtbGVzcyBhcm91bmQtYnktcHJvZmlsZSBVVnMgZm9yIGEgTGF0aGVHZW9tZXRyeSByZXZvbHZlZCBhYm91dCBZOiB1IGZyb20gdGhlIFNFR01FTlQgaW5kZXhcbiAqICAodGhlIGxhdGhlIG9yZGVycyBpdHMgdmVydGljZXMgc2VnbWVudC1tYWpvciwgaW5kZXggPSBzZWcgKiBwb2ludENvdW50ICsgcG9pbnQpIHNvIHRoZSBkdXBsaWNhdGVkXG4gKiAgc2VhbSBjb2x1bW4gcmVhZHMgdSA9IHJlcGVhdHMgZXhhY3RseSBhbmQgUmVwZWF0V3JhcHBpbmcgY2xvc2VzIGl0OyB2IHBlciBQUk9GSUxFIFBPSU5UIGZyb21cbiAqICBgdnNgIChvbmUgdmFsdWUgcGVyIHByb2ZpbGUgcG9pbnQpLCBzbyB0aGUgY2FsbGVyIGRlY2lkZXMgd2hpY2ggdGlsZSByb3dzIGxhbmQgb24gdGhlIHRyZWFkIGFuZFxuICogIHdoaWNoIG9uIHRoZSBzaWRld2FsbHMuIGBwaXRjaGAgaXMgdGhlIHRpbGUgc2l6ZSBpbiBtZXRyZXMgYXJvdW5kIHRoZSB3aWRlc3QgcmFkaXVzLiAqL1xuZnVuY3Rpb24gbGF0aGVVVihnOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgcG9pbnRDb3VudDogbnVtYmVyLCBzZWc6IG51bWJlciwgcGl0Y2g6IG51bWJlciwgdnM6IG51bWJlcltdKTogdm9pZCB7XG4gIGNvbnN0IHAgPSBnLmdldEF0dHJpYnV0ZSgncG9zaXRpb24nKTtcbiAgbGV0IHJNYXggPSAwO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykgck1heCA9IE1hdGgubWF4KHJNYXgsIE1hdGguaHlwb3QocC5nZXRYKGkpLCBwLmdldFooaSkpKTtcbiAgY29uc3QgcmVwID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZCgyICogTWF0aC5QSSAqIHJNYXggLyBwaXRjaCkpO1xuICBjb25zdCB1diA9IG5ldyBGbG9hdDMyQXJyYXkocC5jb3VudCAqIDIpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHAuY291bnQ7IGkrKykge1xuICAgIGNvbnN0IHMgPSBNYXRoLmZsb29yKGkgLyBwb2ludENvdW50KSwgaiA9IGkgJSBwb2ludENvdW50O1xuICAgIHV2W2kgKiAyXSA9IChzIC8gc2VnKSAqIHJlcDsgdXZbaSAqIDIgKyAxXSA9IHZzW01hdGgubWluKGosIHZzLmxlbmd0aCAtIDEpXTtcbiAgfVxuICBnLnNldEF0dHJpYnV0ZSgndXYnLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG59XG5cbi8qKiBQaW4gZXZlcnkgVVYgb2YgYSBnZW9tZXRyeSB0byBvbmUgdGV4ZWwgLS0gdGhlIFdISVRFIGJhbmQgYSB0eXJlIHRpbGUga2VlcHMgYXQgaXRzIHRvcCAtLSBzbyBhXG4gKiAgcmltLCBodWIgb3Igc3Bva2Ugc2hhcmluZyB0aGUgdHlyZSdzIG1hdGVyaWFsIHJlbmRlcnMgaXRzIHZlcnRleCBjb2xvdXIgdW5tdWx0aXBsaWVkLiAqL1xuZnVuY3Rpb24gcGluVVYoZzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIHU6IG51bWJlciwgdjogbnVtYmVyKTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCB1diA9IGcuZ2V0QXR0cmlidXRlKCd1dicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHV2LmNvdW50OyBpKyspIHV2LnNldFhZKGksIHUsIHYpO1xuICByZXR1cm4gZztcbn1cblxuLyoqXG4gKiBBbiBPUEVOIHNwb2tlZCB3aGVlbCBhYm91dCB0aGUgWCBheGxlOiBhIHR5cmUgUklORyBsYXRoZSAoYmVhZCwgc2lkZXdhbGwsIHNob3VsZGVyLCB0cmVhZCBhbmQgYmFja1xuICogZG93biB0aGUgZmFyIHNpZGUgLS0gYSBjbG9zZWQgdG9ydXMtbGlrZSBwcm9maWxlLCBzbyBub3RoaW5nIGlzIG9wZW4gdG8gdGhlIGdhdGUpLCBhIHJpbSByaW5nLCBhXG4gKiBicmFrZS1kcnVtIGh1YiwgYW5kIHdpcmUgc3Bva2VzIGFzIHRocmVlLXNpZGVkIHByaXNtcy4gVGhlIGNsb3NlZCBkaXNoIGB3aGVlbEdlb2AgZmlsbHMgdGhlIHdoZWVsXG4gKiB3aXRoIGEgc29saWQgZGlzYyB0aGF0IEhJREVTIHRoZSBzcG9rZXMgaXQgY2FycmllczsgYSBtb3RvcmN5Y2xlJ3Mgd2lyZSB3aGVlbCByZWFkcyBieSB0aGUgZGF5bGlnaHRcbiAqIHRocm91Z2ggaXQsIHNvIHRoZSBkaXNoIGlzIGdvbmUuIFR5cmUgVVZzIGFyZSBhcm91bmQtYnktcHJvZmlsZSBmb3IgYSB0cmVhZCB0aWxlIChgby5waXRjaGAgbWV0cmVzXG4gKiBwZXIgcmVwZWF0IGFyb3VuZDsgdiAwLjUuLjAuOTYgaXMgdGhlIHRyZWFkZWQgc3RyaXAgb2YgYHR5cmVUaWxlYCksIHJpbSwgaHViIGFuZCBzcG9rZXMgYXJlIHBpbm5lZFxuICogdG8gdGhlIHRpbGUncyB3aGl0ZSBiYW5kLiBSZXZvbHZlZCBhYm91dCBZLCB0aGVuIGxhaWQgb250byBYLlxuICovXG5mdW5jdGlvbiBvcGVuV2hlZWxHZW8oclR5cmU6IG51bWJlciwgclJpbTogbnVtYmVyLCBoYWxmVzogbnVtYmVyLCBzZWc6IG51bWJlciwgbzogYW55KTogVEhSRUUuQnVmZmVyR2VvbWV0cnkge1xuICBjb25zdCBodyA9IGhhbGZXLCByciA9IHJSaW0gKiAxLjAyO1xuICBjb25zdCBwcm9mOiBudW1iZXJbXVtdID0gW1xuICAgIFtyciwgLWh3ICogMC43Ml0sIFtyVHlyZSAqIDAuOTAsIC1odyAqIDAuOThdLCBbclR5cmUgKiAwLjk4NSwgLWh3ICogMC42Nl0sIFtyVHlyZSwgLWh3ICogMC4zMF0sXG4gICAgW3JUeXJlLCBodyAqIDAuMzBdLCBbclR5cmUgKiAwLjk4NSwgaHcgKiAwLjY2XSwgW3JUeXJlICogMC45MCwgaHcgKiAwLjk4XSwgW3JyLCBodyAqIDAuNzJdLCBbcnIsIC1odyAqIDAuNzJdLFxuICBdO1xuICAvLyB2IHBlciBwcm9maWxlIHBvaW50OiBzaWRld2FsbCAwLjUwLi4wLjY2LCB0cmVhZCAwLjY2Li4wLjgwLCBzaWRld2FsbCAwLjgwLi4wLjk2ICgwLjk2Li4xIGlzIHdoaXRlKVxuICBjb25zdCB2cyA9IFswLjUwLCAwLjU2LCAwLjY0LCAwLjY4LCAwLjc4LCAwLjgyLCAwLjkwLCAwLjk2LCAwLjk2XTtcbiAgY29uc3QgdHlyZSA9IG5ldyBUSFJFRS5MYXRoZUdlb21ldHJ5KHByb2YubWFwKChwKSA9PiBuZXcgVEhSRUUuVmVjdG9yMihwWzBdLCBwWzFdKSksIHNlZyk7XG4gIGxhdGhlVVYodHlyZSwgcHJvZi5sZW5ndGgsIHNlZywgby5waXRjaCA/PyAwLjA1LCB2cyk7XG4gIHR5cmUuY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgY29uc3QgcmltUHJvZiA9IFtbclJpbSAqIDAuOTAsIC1odyAqIDAuNTBdLCBbclJpbSwgLWh3ICogMC42Ml0sIFtyUmltLCBodyAqIDAuNjJdLCBbclJpbSAqIDAuOTAsIGh3ICogMC41MF0sIFtyUmltICogMC45MCwgLWh3ICogMC41MF1dO1xuICBjb25zdCByaW0gPSBuZXcgVEhSRUUuTGF0aGVHZW9tZXRyeShyaW1Qcm9mLm1hcCgocCkgPT4gbmV3IFRIUkVFLlZlY3RvcjIocFswXSwgcFsxXSkpLCBzZWcpO1xuICByaW0uY29tcHV0ZVZlcnRleE5vcm1hbHMoKTtcbiAgY29uc3QgaHViUiA9IG8uaHViUiA/PyByUmltICogMC4zMiwgaHViVyA9IG8uaHViVyA/PyBodyAqIDIuNjtcbiAgY29uc3QgaHViID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoaHViUiwgaHViUiwgaHViVywgby5odWJTZWcgPz8gMTIpO1xuICBjb25zdCBodWJDYXAgPSBuZXcgVEhSRUUuQ3lsaW5kZXJHZW9tZXRyeShodWJSICogMC41NSwgaHViUiAqIDAuNTUsIGh1YlcgKiAxLjI1LCBvLmh1YlNlZyA/PyAxMik7XG4gIGNvbnN0IHBhcnRzID0gW3RpbnRHZW8odHlyZSwgby50eXJlSGV4KSwgcGluVVYodGludEdlbyhyaW0sIG8ucmltSGV4KSwgMC41LCAwLjk4NSksXG4gICAgICAgICAgICAgICAgIHBpblVWKHRpbnRHZW8oaHViLCBvLmh1YkhleCA/PyBvLnJpbUhleCksIDAuNSwgMC45ODUpLCBwaW5VVih0aW50R2VvKGh1YkNhcCwgby5jYXBIZXggPz8gby5yaW1IZXgpLCAwLjUsIDAuOTg1KV07XG4gIGNvbnN0IGcgPSBtZXJnZUdlb3MocGFydHMpO1xuICBnLnJvdGF0ZVooTWF0aC5QSSAvIDIpOyAgICAgICAgICAgICAgICAgICAgIC8vIGxhdGhlIGF4aXMgWSAtPiB0aGUgYXhsZSBvbiBYXG4gIGNvbnN0IHNwID0gcGluVVYoc3Bva2VzKGh1YlIgKiAwLjksIHJSaW0gKiAwLjk1LCBodywgby5zcG9rZXMgPz8gMjAsIG8uc3Bva2VIZXggPz8gMHhiMGFlYTksIG8uc3Bva2VUID8/IDAuMDA2LCB0cnVlKSwgMC41LCAwLjk4NSk7XG4gIHJldHVybiBtZXJnZUdlb3MoW2csIHNwXSk7XG59XG5cbi8qKiBUWVJFIHRpbGUsIHBvcnRlZCBmcm9tIHRoZSBwcm9wIHRlbXBsYXRlOiBgby5waXRjaGAgbWV0cmVzIGFyb3VuZCAodmlhIGxhdGhlVVYpLCB0aGUgc3RyaXAgYXRcbiAqICB2IDAuNS4uMC45NiBhIHRyZWFkZWQgdHlyZSAoY2lyY3VtZmVyZW50aWFsIGdyb292ZXMgY3V0IGJ5IHN0YWdnZXJlZCBzaXBlcywgYmVhZCByaW5ncywgbW91bGRcbiAqICBsaW5lcywgcm9hZCBkdXN0IG9uIHRoZSBsb3dlciBzaG91bGRlciwgZ3JleSBzY3VmZnMsIGdyYWluKSwgdiAwLi4wLjUgYSB3b3JuIHNsaWNrLCBhbmQgdGhlIHRvcFxuICogIDQlIHB1cmUgV0hJVEUgc28gcGlubmVkIHBhcnRzIHJlbmRlciB0aGVpciB2ZXJ0ZXggY29sb3VyLiBEcmF3biBhcyBSQVRJT1MgYWdhaW5zdCB0aGVcbiAqICB2ZXJ0ZXgtY29sb3VyZWQgcnViYmVyIGF0IGBiYXNlYCAoMjAwLzI1NSAtPiB0aGUgdHlyZSB0b25lIGlzIGF1dGhvcmVkIDEuMjc1eCBpdHMgYWxiZWRvIHNvIGR1c3RcbiAqICBhbmQgc2N1ZmZzIGNhbiBnbyBCUklHSFRFUiB0aGFuIHRoZSBydWJiZXIgdW5kZXIgYSBtdWx0aXBseSBjYW52YXMpLiBgby5iYW5kYCBpcyB0aGUgdHJlYWQnc1xuICogIHNoYXJlIG9mIHRoZSBzdHJpcCwgdG9wIHRvIGJvdHRvbSwgYW5kIG11c3QgYWdyZWUgd2l0aCBvcGVuV2hlZWxHZW8ncyB0cmVhZCByb3dzLiAqL1xuZnVuY3Rpb24gdHlyZVRpbGUoc2l6ZTogbnVtYmVyLCBzZWVkOiBudW1iZXIsIG86IGFueSk6IFRIUkVFLkNhbnZhc1RleHR1cmUgfCBudWxsIHtcbiAgcmV0dXJuIGNhbnZhc1RpbGUoc2l6ZSwgKGN0eCwgcykgPT4ge1xuICAgIGNvbnN0IHJuZCA9IGxjZyhzZWVkKTtcbiAgICBjb25zdCBiYXNlID0gby5iYXNlID8/IDIwMCwgYmFuZCA9IG8uYmFuZCA/PyBbMC4zNSwgMC42NV0sIGdyb292ZSA9IG8uZ3Jvb3ZlID8/IDAuNDU7XG4gICAgY29uc3QgZ3YgPSBNYXRoLnJvdW5kKGJhc2UgKiBncm9vdmUpLCBydiA9IE1hdGgucm91bmQoYmFzZSAqIDAuNyksIG12ID0gTWF0aC5yb3VuZChiYXNlICogMC45KTtcbiAgICBjb25zdCBkdXN0ID0gby5kdXN0ID8/IFsyMzIsIDIxNCwgMTkwXTtcbiAgICBjb25zdCB3aGl0ZSA9IE1hdGgucm91bmQocyAqIDAuMDQpO1xuICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7YmFzZX0sJHtiYXNlfSwke2Jhc2V9KWA7IGN0eC5maWxsUmVjdCgwLCAwLCBzLCBzKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHMgKiBzIC8gNjsgaSsrKSB7IGNvbnN0IHYgPSBiYXNlICsgTWF0aC5yb3VuZCgocm5kKCkgLSAwLjUpICogMjIpOyBjdHguZmlsbFN0eWxlID0gYHJnYigke3Z9LCR7dn0sJHt2fSlgOyBjdHguZmlsbFJlY3Qocm5kKCkgKiBzLCBybmQoKSAqIHMsIDIsIDIpOyB9XG4gICAgY29uc3Qgc3RyaXAgPSAoeWE6IG51bWJlciwgeWI6IG51bWJlciwgdHJlYWRlZDogYm9vbGVhbikgPT4ge1xuICAgICAgY29uc3QgaCA9IHliIC0geWEsIGIwID0geWEgKyBoICogKDEgLSBiYW5kWzFdKSwgYjEgPSB5YSArIGggKiAoMSAtIGJhbmRbMF0pO1xuICAgICAgY29uc3QgbmcgPSBvLmdyb292ZXMgPz8gMywgZ3cgPSBoICogMC4wMjQ7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke2d2fSwke2d2fSwke2d2fSlgO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuZzsgaSsrKSB7IGNvbnN0IHkgPSBiMCArIChiMSAtIGIwKSAqIChpICsgMSkgLyAobmcgKyAxKTsgY3R4LmZpbGxSZWN0KDAsIHkgLSBndyAvIDIsIHMsIGd3KTsgfVxuICAgICAgY29uc3QgbnMgPSBvLnNpcGVzID8/IDIsIHcgPSBzICogKG8uc2lwZVdpZHRoID8/IDAuMDUpO1xuICAgICAgZm9yIChsZXQgayA9IDA7IGsgPD0gbmc7IGsrKykge1xuICAgICAgICBjb25zdCB5MCA9IGsgPT09IDAgPyBiMCA6IGIwICsgKGIxIC0gYjApICogayAvIChuZyArIDEpICsgZ3cgLyAyLCB5MSA9IGsgPT09IG5nID8gYjEgOiBiMCArIChiMSAtIGIwKSAqIChrICsgMSkgLyAobmcgKyAxKSAtIGd3IC8gMjtcbiAgICAgICAgY29uc3Qgb3V0ZXIgPSBrID09PSAwIHx8IGsgPT09IG5nO1xuICAgICAgICBpZiAoIXRyZWFkZWQgJiYgIW91dGVyKSBjb250aW51ZTtcbiAgICAgICAgY29uc3QgeXMwID0gdHJlYWRlZCA/IHkwIDogKGsgPT09IDAgPyB5MCA6IHkxIC0gKHkxIC0geTApICogMC40NSksIHlzMSA9IHRyZWFkZWQgPyB5MSA6IChrID09PSAwID8geTAgKyAoeTEgLSB5MCkgKiAwLjQ1IDogeTEpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5zOyBpKyspIHtcbiAgICAgICAgICBjb25zdCB4ID0gKChpICsgMC41KSAvIG5zICsgKGsgJSAyKSAqIDAuNSAvIG5zKSAqIHMgKyAocm5kKCkgLSAwLjUpICogcyAqIDAuMDYsIHNsID0gKHJuZCgpIC0gMC41KSAqIHMgKiAwLjA4O1xuICAgICAgICAgIGZvciAoY29uc3QgZHggb2YgWy1zLCAwLCBzXSkgeyBjdHguYmVnaW5QYXRoKCk7IGN0eC5tb3ZlVG8oeCArIGR4LCB5czApOyBjdHgubGluZVRvKHggKyBkeCArIHcsIHlzMCk7IGN0eC5saW5lVG8oeCArIGR4ICsgdyArIHNsLCB5czEpOyBjdHgubGluZVRvKHggKyBkeCArIHNsLCB5czEpOyBjdHguY2xvc2VQYXRoKCk7IGN0eC5maWxsKCk7IH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY29uc3Qgc2ggPSBjdHguY3JlYXRlTGluZWFyR3JhZGllbnQoMCwgYjAgLSBoICogMC4wMywgMCwgYjAgKyBoICogMC4wMik7IHNoLmFkZENvbG9yU3RvcCgwLCBgcmdiYSgke2d2fSwke2d2fSwke2d2fSwwKWApOyBzaC5hZGRDb2xvclN0b3AoMSwgYHJnYmEoJHtndn0sJHtndn0sJHtndn0sMC40NSlgKTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBzaDsgY3R4LmZpbGxSZWN0KDAsIGIwIC0gaCAqIDAuMDMsIHMsIGggKiAwLjA1KTtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSBgcmdiKCR7cnZ9LCR7cnZ9LCR7cnZ9KWA7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjA0NSwgcywgaCAqIDAuMDEyKTsgY3R4LmZpbGxSZWN0KDAsIHlhICsgaCAqIDAuOTQsIHMsIGggKiAwLjAxMik7XG4gICAgICBjdHguZmlsbFN0eWxlID0gYHJnYigke212fSwke212fSwke212fSlgOyBjdHguZmlsbFJlY3QoMCwgeWEgKyBoICogMC4xMSwgcywgMik7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjg4LCBzLCAyKTtcbiAgICAgIGNvbnN0IGRnID0gY3R4LmNyZWF0ZUxpbmVhckdyYWRpZW50KDAsIHliLCAwLCB5YSArIGggKiAwLjYpOyBkZy5hZGRDb2xvclN0b3AoMCwgYHJnYmEoJHtkdXN0WzBdfSwke2R1c3RbMV19LCR7ZHVzdFsyXX0sJHtvLmR1c3RBbHBoYSA/PyAwLjM1fSlgKTsgZGcuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7ZHVzdFswXX0sJHtkdXN0WzFdfSwke2R1c3RbMl19LDApYCk7XG4gICAgICBjdHguZmlsbFN0eWxlID0gZGc7IGN0eC5maWxsUmVjdCgwLCB5YSArIGggKiAwLjYsIHMsIGggKiAwLjQpO1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoby5zY3VmZnMgPz8gMTQpOyBpKyspIHtcbiAgICAgICAgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IHJuZCgpIDwgMC41ID8gYjAgKyAocm5kKCkgLSAwLjMpICogaCAqIDAuMDggOiBiMSArIChybmQoKSAtIDAuNykgKiBoICogMC4wOCwgciA9IHMgKiAoMC4wMiArIHJuZCgpICogMC4wNSksIHYgPSAyMjUgKyBNYXRoLnJvdW5kKHJuZCgpICogMjUpO1xuICAgICAgICBjb25zdCBnMiA9IGN0eC5jcmVhdGVSYWRpYWxHcmFkaWVudCh4LCB5LCAwLCB4LCB5LCByKTsgZzIuYWRkQ29sb3JTdG9wKDAsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDAuNSlgKTsgZzIuYWRkQ29sb3JTdG9wKDEsIGByZ2JhKCR7dn0sJHt2fSwke3Z9LDApYCk7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBnMjsgZm9yIChjb25zdCBkeCBvZiBbLXMsIDAsIHNdKSB7IGN0eC5iZWdpblBhdGgoKTsgY3R4LmVsbGlwc2UoeCArIGR4LCB5LCByICogMi4yLCByICogMC42LCAwLCAwLCBNYXRoLlBJICogMik7IGN0eC5maWxsKCk7IH1cbiAgICAgIH1cbiAgICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnbGlnaHRlcic7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDYwOyBpKyspIHsgY29uc3QgeCA9IHJuZCgpICogcywgeSA9IGIwICsgcm5kKCkgKiAoYjEgLSBiMCksIHYgPSA2ICsgTWF0aC5yb3VuZChybmQoKSAqIDE0KTsgY3R4LmZpbGxTdHlsZSA9IGByZ2IoJHt2fSwke01hdGgucm91bmQodiAqIDAuOSl9LCR7TWF0aC5yb3VuZCh2ICogMC43NSl9KWA7IGN0eC5maWxsUmVjdCh4LCB5LCAyICsgcm5kKCkgKiA2LCAyICsgcm5kKCkgKiAzKTsgfVxuICAgICAgY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcbiAgICBzdHJpcCh3aGl0ZSwgcyAvIDIsIHRydWUpOyAgIC8vIHYgMC41Li4wLjk2OiB0cmVhZGVkXG4gICAgc3RyaXAocyAvIDIsIHMsIGZhbHNlKTsgICAgICAvLyB2IDAuLjAuNTogc2xpY2tcbiAgICBjdHguZmlsbFN0eWxlID0gJyNmZmZmZmYnOyBjdHguZmlsbFJlY3QoMCwgMCwgcywgd2hpdGUpOyAgIC8vIHYgMC45Ni4uMTogd2hpdGUsIGZvciBwaW5uZWQgcGFydHNcbiAgfSk7XG59XG5cbi8qKlxuICogQSBEUkFQRUQgU0hFRVQgKHBvcnRlZCBmcm9tIHRoZSBwcm9wIHRlbXBsYXRlKTogYGhlaWdodHNbal1baV1gIGlzIHRoZSB0b3Agc3VyZmFjZSBhdCB4ID0geDAuLngxXG4gKiAoaSBvdmVyIG54KSBhbmQgeiA9IHowLi56MSAoaiBvdmVyIG56KTsgdGhlIHNoZWV0IGlzIGB0YCB0aGljay4gVG9wIGFuZCB1bmRlcnNpZGUgYXJlIHNtb290aC1zaGFkZWRcbiAqIGdyaWRzLCB0aGUgZm91ciBlZGdlcyBhcmUgZmxhdCBzdHJpcHMgd291bmQgb3V0d2FyZC4gQSBjYW52YXMgY2Fub3B5IGlzIGEgcmlkZ2UgbGluZSBtaW51cyB0aGUgc2FnXG4gKiBiZXR3ZWVuIGl0cyBwb3N0cyBtaW51cyB0aGUgZHJvb3Agb2YgaXRzIGZyZWUgZWRnZXMgLS0gY2xvdGgsIHdoZXJlIGEgc2xhYiByZWFkcyBhcyBhIHBhaW50ZWQgYm94LlxuICovXG5mdW5jdGlvbiBzaGVldChzOiBhbnkpOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSB7XG4gIGNvbnN0IG54OiBudW1iZXIgPSBzLm54LCBuejogbnVtYmVyID0gcy5ueiwgSGg6IG51bWJlcltdW10gPSBzLmhlaWdodHMsIHQ6IG51bWJlciA9IHMudCA/PyAwLjAxMjtcbiAgY29uc3QgWCA9IChpOiBudW1iZXIpID0+IHMueDAgKyAocy54MSAtIHMueDApICogaSAvIG54O1xuICBjb25zdCBaID0gKGo6IG51bWJlcikgPT4gcy56MCArIChzLnoxIC0gcy56MCkgKiBqIC8gbno7XG4gIGNvbnN0IGdyaWQgPSAoeU9mZjogbnVtYmVyLCBmbGlwOiBib29sZWFuKSA9PiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXJbXSA9IFtdLCB1djogbnVtYmVyW10gPSBbXSwgaWR4OiBudW1iZXJbXSA9IFtdO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDw9IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDw9IG54OyBpKyspIHsgcG9zLnB1c2goWChpKSwgSGhbal1baV0gKyB5T2ZmLCBaKGopKTsgdXYucHVzaChpIC8gbngsIGogLyBueik7IH1cbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IG56OyBqKyspIGZvciAobGV0IGkgPSAwOyBpIDwgbng7IGkrKykge1xuICAgICAgY29uc3QgYSA9IGogKiAobnggKyAxKSArIGksIGIgPSBhICsgMSwgYyA9IGEgKyBueCArIDEsIGQgPSBjICsgMTtcbiAgICAgIGlmIChmbGlwKSBpZHgucHVzaChhLCBiLCBjLCBiLCBkLCBjKTsgZWxzZSBpZHgucHVzaChhLCBjLCBiLCBiLCBjLCBkKTtcbiAgICB9XG4gICAgY29uc3QgZyA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xuICAgIGcuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvcywgMykpO1xuICAgIGcuc2V0QXR0cmlidXRlKCd1dicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHV2LCAyKSk7XG4gICAgZy5zZXRJbmRleChpZHgpOyBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCBwYXJ0cyA9IFtncmlkKDAsIGZhbHNlKSwgZ3JpZCgtdCwgdHJ1ZSldO1xuICBjb25zdCBzdHJpcCA9IChwdHM6IG51bWJlcltdW11bXSwgb3V0OiBudW1iZXJbXSkgPT4ge1xuICAgIGNvbnN0IHBvczogbnVtYmVyW10gPSBbXSwgdXY6IG51bWJlcltdID0gW107XG4gICAgZm9yIChjb25zdCBbcDAsIHAxXSBvZiBwdHMpIHtcbiAgICAgIGNvbnN0IHEwID0gcDAsIHExID0gcDEsIHEyID0gW3AxWzBdLCBwMVsxXSAtIHQsIHAxWzJdXSwgcTMgPSBbcDBbMF0sIHAwWzFdIC0gdCwgcDBbMl1dO1xuICAgICAgY29uc3QgZTEgPSBbcTFbMF0gLSBxMFswXSwgcTFbMV0gLSBxMFsxXSwgcTFbMl0gLSBxMFsyXV0sIGUyID0gW3EyWzBdIC0gcTBbMF0sIHEyWzFdIC0gcTBbMV0sIHEyWzJdIC0gcTBbMl1dO1xuICAgICAgY29uc3QgbiA9IFtlMVsxXSAqIGUyWzJdIC0gZTFbMl0gKiBlMlsxXSwgZTFbMl0gKiBlMlswXSAtIGUxWzBdICogZTJbMl0sIGUxWzBdICogZTJbMV0gLSBlMVsxXSAqIGUyWzBdXTtcbiAgICAgIGNvbnN0IHRyaSA9IG5bMF0gKiBvdXRbMF0gKyBuWzFdICogb3V0WzFdICsgblsyXSAqIG91dFsyXSA+PSAwID8gW3EwLCBxMSwgcTIsIHEwLCBxMiwgcTNdIDogW3EwLCBxMiwgcTEsIHEwLCBxMywgcTJdO1xuICAgICAgZm9yIChjb25zdCBxIG9mIHRyaSkgeyBwb3MucHVzaChxWzBdLCBxWzFdLCBxWzJdKTsgdXYucHVzaCgwLCAwKTsgfVxuICAgIH1cbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zLCAzKSk7XG4gICAgZy5zZXRBdHRyaWJ1dGUoJ3V2JywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodXYsIDIpKTtcbiAgICBnLmNvbXB1dGVWZXJ0ZXhOb3JtYWxzKCk7IHJldHVybiBnO1xuICB9O1xuICBjb25zdCB0b3AgPSAoaTogbnVtYmVyLCBqOiBudW1iZXIpID0+IFtYKGkpLCBIaFtqXVtpXSwgWihqKV07XG4gIGNvbnN0IGUwOiBudW1iZXJbXVtdW10gPSBbXSwgZTE6IG51bWJlcltdW11bXSA9IFtdLCBlMjogbnVtYmVyW11bXVtdID0gW10sIGUzOiBudW1iZXJbXVtdW10gPSBbXTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBueDsgaSsrKSB7IGUwLnB1c2goW3RvcChpLCAwKSwgdG9wKGkgKyAxLCAwKV0pOyBlMS5wdXNoKFt0b3AoaSwgbnopLCB0b3AoaSArIDEsIG56KV0pOyB9XG4gIGZvciAobGV0IGogPSAwOyBqIDwgbno7IGorKykgeyBlMi5wdXNoKFt0b3AoMCwgaiksIHRvcCgwLCBqICsgMSldKTsgZTMucHVzaChbdG9wKG54LCBqKSwgdG9wKG54LCBqICsgMSldKTsgfVxuICBwYXJ0cy5wdXNoKHN0cmlwKGUwLCBbMCwgMCwgLTFdKSwgc3RyaXAoZTEsIFswLCAwLCAxXSksIHN0cmlwKGUyLCBbLTEsIDAsIDBdKSwgc3RyaXAoZTMsIFsxLCAwLCAwXSkpO1xuICByZXR1cm4gbWVyZ2VHZW9zKHBhcnRzKTtcbn1cblxuLyoqIEJpbmQgYSBwb3N0LWNvbnN0cnVjdGlvbiBjYW52YXMgdGlsZSB0byBhIG1hdGVyaWFsIGFzIG1hcCAoYW5kIGJ1bXApLCBsZWF2aW5nIHRoZSB0ZXh0dXJlbGVzc1xuICogIGRlY2xhcmF0aW9uIGludGFjdDogbm8gcHJvY2VkdXJhbCB0ZXh0dXJlIHNldCBpcyBzeW50aGVzaXNlZCwgdGhlIG1lYXN1cmVkIGNvbG91ciBzdGF5cyB0aGVcbiAqICBtdWx0aXBsaWNhbmQsIGFuZCB0aGUgd2hvbGUgdGhpbmcgY29zdHMgb25lIGNhbnZhcy4gKi9cbmZ1bmN0aW9uIGJpbmRUaWxlKG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwsIHRleDogVEhSRUUuQ2FudmFzVGV4dHVyZSB8IG51bGwsIGJ1bXAgPSAwKTogdm9pZCB7XG4gIGlmICghdGV4KSByZXR1cm47XG4gIG1hdC5tYXAgPSB0ZXg7XG4gIGlmIChidW1wID4gMCkgeyBtYXQuYnVtcE1hcCA9IHRleDsgbWF0LmJ1bXBTY2FsZSA9IGJ1bXA7IH1cbiAgbWF0Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIG1hdGVyaWFscyAqL1xuXG4vKipcbiAqIEV2ZXJ5IG1hdGVyaWFsIGlzIGRlY2xhcmVkIGB0ZXh0dXJlbGVzc2AgaW4gdGhlIHNjdWxwdCBzcGVjLCBzbyBubyBwcm9jZWR1cmFsIHRleHR1cmUgc2V0IGlzXG4gKiBzeW50aGVzaXNlZC4gVGhhdCBtYXR0ZXJzIHR3aWNlLiBTcGVlZDogbWFrZVByb2NlZHVyYWxUZXh0dXJlU2V0IHdyaXRlcyBGSVZFIGNhbnZhc2VzIHBlclxuICogbWF0ZXJpYWwgcGl4ZWwgYnkgcGl4ZWwgaW4gSmF2YVNjcmlwdCwgYXQgYSBjb3N0IHRoYXQgaXMgdGhlIFNRVUFSRSBvZiB0aGUgcmVzb2x1dGlvbi5cbiAqIENvcnJlY3RuZXNzOiB3aGVuZXZlciBhIHRleHR1cmUgc2V0IGV4aXN0cyB0aGUgZ2VuZXJhdG9yIGZvcmNlcyBjb2xvciB0byB3aGl0ZSBhbmQgcm91Z2huZXNzXG4gKiB0byAxIGFuZCByZWFkcyBib3RoIGJhY2sgZnJvbSB0aGUgZ2VuZXJhdGVkIG1hcHMsIGRpc2NhcmRpbmcgdGhlIG1lYXN1cmVkIGFsYmVkby5cbiAqXG4gKiBNZXRhbG5lc3MgaXMgY2FwcGVkIHdlbGwgYmVsb3cgcGh5c2ljYWwgZm9yIHRoZSBnaWxkZWQgc3VyZmFjZXMuIFRoZSB0aGFpa2l0IGhhcm5lc3Mgc3VwcGxpZXMgYVxuICogaGVtaXNwaGVyZSBsaWdodCBhbmQgdGhyZWUgZGlyZWN0aW9uYWxzIGFuZCBOTyBlbnZpcm9ubWVudCBtYXAsIGFuZCBhIG1ldGFsIHdpdGggbm90aGluZyB0b1xuICogcmVmbGVjdCByZW5kZXJzIGJsYWNrIC0tIHdoaWNoIG9uIGEgZ29sZCBmaW5pYWwgaXMgdGhlIHdob2xlIGZlYXR1cmUgbG9zdC4gVGhlIGFsYmVkbyBzdGF5c1xuICogbWVhc3VyZWQ7IHRoZSBtZXRhbG5lc3MgaXMgd2hhdCBpcyB3cm9uZyBmb3IgdGhpcyByaWcuXG4gKi9cbmZ1bmN0aW9uIGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnM6IFByb2NlZHVyYWxNb2RlbE9wdGlvbnMpOiBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5NZXNoU3RhbmRhcmRNYXRlcmlhbD4ge1xuICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk1lc2hTdGFuZGFyZE1hdGVyaWFsPiA9IHt9O1xuICBmb3IgKGNvbnN0IHMgb2YgQ09ORklHLm1hdGVyaWFscyBhcyBhbnlbXSkge1xuICAgIGNvbnN0IG0gPSBuZXcgVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwoe1xuICAgICAgY29sb3I6IG5ldyBUSFJFRS5Db2xvcihzLmNvbG9yKSxcbiAgICAgIHJvdWdobmVzczogcy5yb3VnaG5lc3MsXG4gICAgICBtZXRhbG5lc3M6IHMubWV0YWxuZXNzLFxuICAgICAgd2lyZWZyYW1lOiBvcHRpb25zLndpcmVmcmFtZSA/PyBmYWxzZSxcbiAgICAgIHNpZGU6IHMuZG91YmxlU2lkZWQgPyBUSFJFRS5Eb3VibGVTaWRlIDogVEhSRUUuRnJvbnRTaWRlLFxuICAgICAgdmVydGV4Q29sb3JzOiBzLnZlcnRleENvbG9ycyA9PT0gdHJ1ZSxcbiAgICB9KTtcbiAgICBpZiAocy5lbnZNYXBJbnRlbnNpdHkgIT09IHVuZGVmaW5lZCkgbS5lbnZNYXBJbnRlbnNpdHkgPSBzLmVudk1hcEludGVuc2l0eTtcbiAgICBpZiAocy5vcGFjaXR5ICE9PSB1bmRlZmluZWQpIHsgbS50cmFuc3BhcmVudCA9IHRydWU7IG0ub3BhY2l0eSA9IHMub3BhY2l0eTsgbS5kZXB0aFdyaXRlID0gdHJ1ZTsgfVxuICAgIG0ubmFtZSA9IHMuaWQ7XG4gICAgbWFwW3MuaWRdID0gbTtcbiAgfVxuICByZXR1cm4gbWFwO1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhlIG1vZGVsICovXG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVIb25kYVdhdmVNb2RlbChvcHRpb25zOiBQcm9jZWR1cmFsTW9kZWxPcHRpb25zID0ge30pOiBUSFJFRS5Hcm91cCB7XG4gIGNvbnN0IHJvb3QgPSBuZXcgVEhSRUUuR3JvdXAoKTtcbiAgcm9vdC5uYW1lID0gJ0hvbmRhIFdhdmUnO1xuXG4gIGNvbnN0IG1hdGVyaWFscyA9IGJ1aWxkTWF0ZXJpYWxzKG9wdGlvbnMpO1xuICBjb25zdCBub2RlczogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IG1lc2hlczogUmVjb3JkPHN0cmluZywgVEhSRUUuTWVzaD4gPSB7fTtcbiAgY29uc3Qgc29ja2V0czogUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+ID0ge307XG4gIGNvbnN0IGNvbGxpZGVyczogUmVjb3JkPHN0cmluZywgdW5rbm93bj4gPSB7fTtcbiAgY29uc3QgZGVzdHJ1Y3Rpb25Hcm91cHM6IFJlY29yZDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+ID0ge307XG4gIGNvbnN0IGNhc3RTaGFkb3cgPSBvcHRpb25zLmNhc3RTaGFkb3cgPz8gdHJ1ZTtcbiAgY29uc3QgcmVjZWl2ZVNoYWRvdyA9IG9wdGlvbnMucmVjZWl2ZVNoYWRvdyA/PyB0cnVlO1xuXG4gIC8qKlxuICAgKiBBIG1hdGVyaWFsIHdpdGggYHZlcnRleENvbG9yc2AgcmVhZHMgYSBgY29sb3JgIGF0dHJpYnV0ZSBvdXQgb2YgRVZFUlkgZ2VvbWV0cnkgYm91bmQgdG8gaXQsIGFuZFxuICAgKiBhIGdlb21ldHJ5IHRoYXQgaGFzIG5vbmUgaGFuZHMgdGhlIHNoYWRlciBhbiB1bmRlZmluZWQgYXR0cmlidXRlIC0tIHdoaWNoIGNvbWVzIGJhY2sgYXNcbiAgICogKDAsIDAsIDApIGFuZCByZW5kZXJzIHRoZSBtZXNoIEJMQUNLLiBUaGF0IGlzIG5vdCBhIGh5cG90aGV0aWNhbDogdGhlIHVib3NvdCdzIHdhbGwgYm9keSBhbmRcbiAgICogaXRzIGVpZ2h0IGJvdW5kYXJ5IHN0b25lcyBzaGlwcGVkIGFzIGJsYWNrIHNpbGhvdWV0dGVzIGZyb20gb25lIHRpbnRlZCBwbGF0Zm9ybSBzaGFyaW5nIHRoZWlyXG4gICAqIHN0b25lIG1hdGVyaWFsLCBhbmQgdGhlIGZhaWx1cmUgaXMgc2lsZW50IGJlY2F1c2UgdGhlIHRpbnRlZCBjb21wb25lbnQgaXRzZWxmIGxvb2tzIHBlcmZlY3QuXG4gICAqXG4gICAqIEFuIEluc3RhbmNlZE1lc2ggaGlkZXMgaXQgLS0gaXQgZmFsbHMgYmFjayB0byBpbnN0YW5jZUNvbG9yIGFuZCBjb21lcyBvdXQgd2hpdGUgLS0gc28gdGhlIHNhbWVcbiAgICogbWlzdGFrZSBvbiB0aGUgY2hlZGkncyBuaWNoZSBmcmFtZXMgcmVuZGVyZWQgY29ycmVjdGx5IGFuZCB0YXVnaHQgbm90aGluZy4gR3VhcmQgaXQgaGVyZSwgb25jZSxcbiAgICogZm9yIGV2ZXJ5IGdlb21ldHJ5OiBubyBjb2xvciBhdHRyaWJ1dGUgYW5kIGEgdmVydGV4Q29sb3JzIG1hdGVyaWFsIG1lYW5zIGZpbGwgd2l0aCB3aGl0ZS5cbiAgICovXG4gIGZ1bmN0aW9uIGd1YXJkVmVydGV4Q29sb3JzKGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdDogVEhSRUUuTWVzaFN0YW5kYXJkTWF0ZXJpYWwpIHtcbiAgICBpZiAoIW1hdCB8fCAhbWF0LnZlcnRleENvbG9ycyB8fCBnZW8uZ2V0QXR0cmlidXRlKCdjb2xvcicpKSByZXR1cm47XG4gICAgY29uc3QgbiA9IGdlby5nZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJykuY291bnQ7XG4gICAgZ2VvLnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkobiAqIDMpLmZpbGwoMSksIDMpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGFkZChpZDogc3RyaW5nLCBuYW1lOiBzdHJpbmcsIGdlbzogVEhSRUUuQnVmZmVyR2VvbWV0cnksIG1hdElkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIG1lc2gubmFtZSA9IG5hbWU7IG1lc2guY2FzdFNoYWRvdyA9IGNhc3RTaGFkb3c7IG1lc2gucmVjZWl2ZVNoYWRvdyA9IHJlY2VpdmVTaGFkb3c7XG4gICAgbm9kZS5hZGQobWVzaCk7IHJvb3QuYWRkKG5vZGUpO1xuICAgIG5vZGVzW2lkXSA9IG5vZGU7IG1lc2hlc1tpZF0gPSBtZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gbWVzaDtcbiAgfVxuICBmdW5jdGlvbiBhZGRJbnN0KGlkOiBzdHJpbmcsIG5hbWU6IHN0cmluZywgZ2VvOiBUSFJFRS5CdWZmZXJHZW9tZXRyeSwgbWF0SWQ6IHN0cmluZywgbWF0czogVEhSRUUuTWF0cml4NFtdLCBjb2xzPzogbnVtYmVyW10pIHtcbiAgICBjb25zdCBub2RlID0gbmV3IFRIUkVFLkdyb3VwKCk7IG5vZGUubmFtZSA9IG5hbWUgKyAnX19ub2RlJztcbiAgICBndWFyZFZlcnRleENvbG9ycyhnZW8sIG1hdGVyaWFsc1ttYXRJZF0pO1xuICAgIGNvbnN0IGluc3QgPSBuZXcgVEhSRUUuSW5zdGFuY2VkTWVzaChnZW8sIG1hdGVyaWFsc1ttYXRJZF0sIG1hdHMubGVuZ3RoKTtcbiAgICBpbnN0Lm5hbWUgPSBuYW1lOyBpbnN0LmNhc3RTaGFkb3cgPSBjYXN0U2hhZG93OyBpbnN0LnJlY2VpdmVTaGFkb3cgPSByZWNlaXZlU2hhZG93O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWF0cy5sZW5ndGg7IGkrKykgaW5zdC5zZXRNYXRyaXhBdChpLCBtYXRzW2ldKTtcbiAgICBpZiAoY29scykge1xuICAgICAgLy8gc2V0Q29sb3JBdCBNVUxUSVBMSUVTIHdpdGggbWF0ZXJpYWwuY29sb3IsIHNvIGFuIGluc3RhbmNlZCBtYXRlcmlhbCBjYXJyeWluZyBwZXItaW5zdGFuY2VcbiAgICAgIC8vIHRvbmVzIG11c3QgYmUgd2hpdGUgb3IgZXZlcnkgdG9uZSBjb21lcyBvdXQgZGFya2VuZWQgYnkgdGhlIGJhc2UuXG4gICAgICBjb25zdCBjID0gbmV3IFRIUkVFLkNvbG9yKCk7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbHMubGVuZ3RoOyBpKyspIGluc3Quc2V0Q29sb3JBdChpLCBjLnNldEhleChjb2xzW2ldKSk7XG4gICAgICBpZiAoaW5zdC5pbnN0YW5jZUNvbG9yKSBpbnN0Lmluc3RhbmNlQ29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xuICAgIH1cbiAgICBpbnN0Lmluc3RhbmNlTWF0cml4Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcbiAgICBub2RlLmFkZChpbnN0KTsgcm9vdC5hZGQobm9kZSk7XG4gICAgbm9kZXNbaWRdID0gbm9kZTsgbWVzaGVzW2lkXSA9IGluc3QgYXMgdW5rbm93biBhcyBUSFJFRS5NZXNoOyBjb2xsaWRlcnNbaWRdID0gbnVsbDtcbiAgICByZXR1cm4gaW5zdDtcbiAgfVxuICAvKiogRm91ciBpbnN0YW5jZXMgYXQgOTAtZGVncmVlIHlhdyBhYm91dCB0aGUgYXhpcyAtLSB0aGUgY29ybmVyL2ZhY2UgcmVwZXRpdGlvbiB0aGF0IGV2ZXJ5XG4gICAqICBidWlsZGluZyBpbiB0aGlzIHNldCB1c2VzIGZvciBuaWNoZXMsIGZpbmlhbHMsIGJvdW5kYXJ5IHN0b25lcyBhbmQgY29ybmVyIGRvbWVzLiAqL1xuICBmdW5jdGlvbiBxdWFkKHJhZGl1czogbnVtYmVyLCB5OiBudW1iZXIsIHBoYXNlID0gMCk6IFRIUkVFLk1hdHJpeDRbXSB7XG4gICAgcmV0dXJuIFswLCAxLCAyLCAzXS5tYXAoKGkpID0+IHtcbiAgICAgIGNvbnN0IGEgPSBwaGFzZSArIGkgKiBNYXRoLlBJIC8gMjtcbiAgICAgIHJldHVybiBuZXcgVEhSRUUuTWF0cml4NCgpLmNvbXBvc2UoXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKE1hdGguc2luKGEpICogcmFkaXVzLCB5LCBNYXRoLmNvcyhhKSAqIHJhZGl1cyksXG4gICAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCkuc2V0RnJvbUF4aXNBbmdsZShuZXcgVEhSRUUuVmVjdG9yMygwLCAxLCAwKSwgYSksXG4gICAgICAgIG5ldyBUSFJFRS5WZWN0b3IzKDEsIDEsIDEpKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IEcgPSBDT05GSUcuZ2VvbWV0cnkgYXMgYW55O1xuXG4gIC8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gbW90b3JjeWNsZSAoc2hhcmVkIHRlbXBsYXRlKSAqL1xuICBjb25zdCBCID0gRy5iaWtlIGFzIGFueTtcbiAgY29uc3Qgb3ggPSBCLnggPz8gMDsgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBiaWtlJ3MgY2VudHJlbGluZSBpbiB4IChhIHNpZGVjYXIgb2Zmc2V0cyBpdClcbiAgY29uc3Qgb3ogPSBCLnogPz8gMDsgICAgICAgICAgICAgICAgICAgICAgIC8vIGFuZCBhbG9uZyB6LCBzbyBhIHJpZyBjYW4gYmUgcmUtY2VudHJlZCBvbiBpdHMgb3JpZ2luXG4gIGNvbnN0IHJXID0gQi5yLCByaW1SID0gQi5yaW0sIGh3ID0gQi5oYWxmVztcbiAgY29uc3QgekYgPSBCLnpGLCB6UiA9IEIuelI7XG4gIGNvbnN0IFAgPSBCLnBhaW50SGV4LCBDSCA9IEIuY2hyb21lSGV4ID8/IDB4YjliY2JmLCBESyA9IEIuZGFya0hleCA/PyAweDRhNDc0MjtcblxuICAvLyBQQUlOVEVEIEJPRFlXT1JLOiBsZWcgc2hpZWxkLCBmcm9udCBmZW5kZXIsIHJlYXIgYm9keSwgdGFuay9zdGVwLXRocm91Z2ggY292ZXIgLS0gb25lIG1lcmdlLlxuICBjb25zdCBwYWludEdlb3M6IFRIUkVFLkJ1ZmZlckdlb21ldHJ5W10gPSBbXTtcbiAgZm9yIChjb25zdCBleCBvZiAoQi5wYWludEV4dHJ1ZGVzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGcgPSBzaWRlRXh0cnVkZShleC5wb2x5LCBleC53aWR0aCwgZXguc2hhcGUgPz8ge30pOyBpZiAoZXgueCkgZy50cmFuc2xhdGUoZXgueCwgMCwgMCk7XG4gICAgZy50cmFuc2xhdGUob3gsIDAsIG96KTsgcGFpbnRHZW9zLnB1c2godGludEdlbyhnLCBleC5oZXggPz8gUCkpO1xuICB9XG4gIGZvciAoY29uc3QgYiBvZiAoQi5wYWludEJveGVzID8/IFtdKSBhcyBudW1iZXJbXVtdKSB7IGNvbnN0IGcgPSByYm94KGIuc2xpY2UoMSkpOyBnLnRyYW5zbGF0ZShveCwgMCwgb3opOyBwYWludEdlb3MucHVzaCh0aW50R2VvKGcsIGJbMF0pKTsgfVxuICBmb3IgKGNvbnN0IHQgb2YgKEIucGFpbnRUdWJlcyA/PyBbXSkgYXMgYW55W10pIHsgY29uc3QgZyA9IHR1YmUodC5wdHMubWFwKChwOiBudW1iZXJbXSkgPT4gW3BbMF0gKyBveCwgcFsxXSwgcFsyXSArIG96XSksIHQuciwgdC5zZWcgPz8gOCwgdW5kZWZpbmVkLCB0Lm9wZW4gPz8gZmFsc2UpOyBwYWludEdlb3MucHVzaCh0aW50R2VvKGcsIHQuaGV4ID8/IFApKTsgfVxuICBjb25zdCBib2R5R2VvID0gaGVpZ2h0VVYobWVyZ2VHZW9zKHBhaW50R2VvcyksIEcubXVkU2NhbGUgPz8gMS4yKTtcbiAgYWRkKCdib2R5JywgQi5ib2R5TmFtZSA/PyAnQm9keXdvcmsnLCBib2R5R2VvLCAncGFpbnQnKTtcbiAgaWYgKEcuY29sbGlkZXIpIGNvbGxpZGVyc1snYm9keSddID0gRy5jb2xsaWRlcjtcblxuICAvLyBGUkFNRSwgRk9SS1MsIEJBUlMsIEVOR0lORSwgU0VBVCwgUkFDSywgTEFNUFMgLS0gZXZlcnkgdG9uZSBhIHZlcnRleCBjb2xvdXIgb24gb25lIHdoaXRlIHRyaW0uXG4gIGNvbnN0IHRyaW1HZW9zOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gIGNvbnN0IHNoaWZ0ID0gKHB0czogbnVtYmVyW11bXSkgPT4gcHRzLm1hcCgocCkgPT4gW3BbMF0gKyBveCwgcFsxXSwgcFsyXSArIG96XSk7XG4gIGZvciAoY29uc3QgdCBvZiAoQi50dWJlcyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godHViZShzaGlmdCh0LnB0cyksIHQuciwgdC5zZWcgPz8gOCwgdC5oZXggPz8gQ0gsIHQub3BlbiA/PyBmYWxzZSkpO1xuICBjb25zdCB0YjogbnVtYmVyW11bXSA9IFtdO1xuICBmb3IgKGNvbnN0IGIgb2YgKEIudHJpbSA/PyBbXSkgYXMgbnVtYmVyW11bXSkgdGIucHVzaChbYlswXSwgYlsxXSArIG94LCBiWzJdLCBiWzNdICsgb3osIC4uLmIuc2xpY2UoNCldKTtcbiAgZm9yIChjb25zdCBiIG9mIG1pcnJvclgoKEIudHJpbU1pcnJvcmVkID8/IFtdKSBhcyBudW1iZXJbXVtdKSkgdGIucHVzaChbYlswXSwgYlsxXSArIG94LCBiWzJdLCBiWzNdICsgb3osIC4uLmIuc2xpY2UoNCldKTtcbiAgaWYgKHRiLmxlbmd0aCkgdHJpbUdlb3MucHVzaCh0aW50ZWRCb3hlcyh0YikpO1xuICBmb3IgKGNvbnN0IGMgb2YgKEIuY3lscyA/PyBbXSkgYXMgYW55W10pIHtcbiAgICBjb25zdCBnID0gbmV3IFRIUkVFLkN5bGluZGVyR2VvbWV0cnkoYy5ydCwgYy5yYiwgYy5oLCBjLnNlZyA/PyAxMik7XG4gICAgaWYgKGMucngpIGcucm90YXRlWChjLnJ4KTsgaWYgKGMucnopIGcucm90YXRlWihjLnJ6KTtcbiAgICBnLnRyYW5zbGF0ZShjLmF0WzBdICsgb3gsIGMuYXRbMV0sIGMuYXRbMl0gKyBveik7XG4gICAgdHJpbUdlb3MucHVzaCh0aW50R2VvKGcsIGMuaGV4ID8/IERLKSk7XG4gIH1cbiAgLy8gZXh0cmEgbG9vc2UgbGF0aGVzIChhIHNpZGVjYXIncyB0aGlyZCB3aGVlbCwgYSB0cmFpbGVyJ3Mgc21hbGwgd2hlZWxzKSBtZXJnZWQgaW50byB0aGUgdHJpbVxuICBmb3IgKGNvbnN0IHcgb2YgKEcubG9vc2VXaGVlbHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgZyA9IG1lcmdlR2Vvcyhbd2hlZWxHZW8ody5yLCB3LnJpbSwgdy5oYWxmVywgdy5zZWcgPz8gMTgsIHcudHlyZUhleCwgdy5yaW1IZXgsIHcuZGlzaCA/PyAwLjUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgIC4uLih3LnNwb2tlcyA/IFtzcG9rZXMody5yaW0gKiAwLjI4LCB3LnJpbSAqIDAuOTgsIHcuaGFsZlcsIHcuc3Bva2VzLCB3LnNwb2tlSGV4ID8/IENIKV0gOiBbXSldKTtcbiAgICBnLnRyYW5zbGF0ZSh3LmF0WzBdLCB3LmF0WzFdLCB3LmF0WzJdKTsgdHJpbUdlb3MucHVzaChnKTtcbiAgfVxuICAvLyBsYXRoZXMgb24gdGhlIGJpa2UgKGEgaGVhZGxhbXAgbmFjZWxsZSwgYSBiZXplbCkgYW5kIG9uIHRoZSByaWc6IFtyYWRpdXMsIGF4aWFsXSBwcm9maWxlc1xuICAvLyByZXZvbHZlZCBhYm91dCBZLCB0aGVuIHJvdGF0ZWQgb250byB0aGVpciBheGlzIGFuZCBwbGFjZWRcbiAgZm9yIChjb25zdCBsIG9mIFsuLi4oKEIubGF0aGVzID8/IFtdKSBhcyBhbnlbXSkubWFwKChsOiBhbnkpID0+ICh7IC4uLmwsIGF0OiBbbC5hdFswXSArIG94LCBsLmF0WzFdLCBsLmF0WzJdICsgb3pdIH0pKSwgLi4uKChHLmxhdGhlcyA/PyBbXSkgYXMgYW55W10pXSkge1xuICAgIGNvbnN0IGcgPSBsYXRoZShsLnB0cywgbC5zZWcgPz8gMTIpO1xuICAgIGlmIChsLnJ4KSBnLnJvdGF0ZVgobC5yeCk7IGlmIChsLnJ5KSBnLnJvdGF0ZVkobC5yeSk7IGlmIChsLnJ6KSBnLnJvdGF0ZVoobC5yeik7XG4gICAgZy50cmFuc2xhdGUobC5hdFswXSwgbC5hdFsxXSwgbC5hdFsyXSk7IHRyaW1HZW9zLnB1c2godGludEdlbyhnLCBsLmhleCA/PyBDSCkpO1xuICB9XG4gIC8vIGRyYXBlZCBzaGVldHMgKGEgY2FudmFzIGNhbm9weSkgYXMgaGVpZ2h0IGdyaWRzIC0tIGNsb3RoLCBub3QgYSBzbGFiXG4gIGZvciAoY29uc3QgcyBvZiAoRy5zaGVldHMgPz8gW10pIGFzIGFueVtdKSB0cmltR2Vvcy5wdXNoKHRpbnRHZW8oc2hlZXQocyksIHMuaGV4KSk7XG4gIGZvciAoY29uc3QgdCBvZiAoRy50dWJlcyA/PyBbXSkgYXMgYW55W10pIHRyaW1HZW9zLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCwgdC5vcGVuID8/IGZhbHNlKSk7XG4gIGZvciAoY29uc3QgYiBvZiAoRy50cmltID8/IFtdKSBhcyBudW1iZXJbXVtdKSB0cmltR2Vvcy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoRy50cmltTWlycm9yZWQgPz8gW10pIGFzIG51bWJlcltdW10pKSB0cmltR2Vvcy5wdXNoKHRpbnRHZW8ocmJveChiLnNsaWNlKDEpKSwgYlswXSkpO1xuICBhZGQoJ3RyaW0nLCBCLnRyaW1OYW1lID8/ICdGcmFtZSwgZm9ya3MsIGVuZ2luZSwgc2VhdCBhbmQgZml0dGluZ3MnLCBtZXJnZUdlb3ModHJpbUdlb3MpLCAndHJpbScpO1xuXG4gIC8vIFdIRUVMUzogb25lIHNwb2tlZCBsYXRoZSwgaW5zdGFuY2VkIGF0IGV2ZXJ5IGh1YiB0aGUgY2ZnIGxpc3RzLCBlYWNoIGEgbmFtZWQgcGl2b3QuXG4gIC8vIGBvcGVuYDogYSB3aXJlIHdoZWVsIHdpdGggZGF5bGlnaHQgdGhyb3VnaCBpdCAodHlyZSByaW5nLCByaW0gcmluZywgZHJ1bSBodWIsIHByaXNtIHNwb2tlcykgYW5kXG4gIC8vIHRyZWFkIFVWcyBmb3IgYSB0eXJlIHRpbGUgb24gYEIud2hlZWxNYXRlcmlhbGA7IG90aGVyd2lzZSB0aGUgY2xvc2VkIGRpc2hlZCBsYXRoZS5cbiAgY29uc3Qgd2hlZWxHID0gQi5vcGVuXG4gICAgPyBvcGVuV2hlZWxHZW8oclcsIHJpbVIsIGh3LCBCLnNlZyA/PyAyMCwgeyAuLi5CLm9wZW4sIHR5cmVIZXg6IEIudHlyZUhleCwgcmltSGV4OiBCLnJpbUhleCwgc3Bva2VzOiBCLnNwb2tlcywgc3Bva2VIZXg6IEIuc3Bva2VIZXggPz8gQ0ggfSlcbiAgICA6IG1lcmdlR2Vvcyhbd2hlZWxHZW8oclcsIHJpbVIsIGh3LCBCLnNlZyA/PyAyMCwgQi50eXJlSGV4LCBCLnJpbUhleCwgQi5kaXNoID8/IDAuNSksXG4gICAgICAgICAgICAgICAgIC4uLihCLnNwb2tlcyA/IFtzcG9rZXMocmltUiAqIDAuMjgsIHJpbVIgKiAwLjk4LCBodywgQi5zcG9rZXMsIEIuc3Bva2VIZXggPz8gQ0gpXSA6IFtdKV0pO1xuICBjb25zdCB3aGVlbE1hdHM6IFRIUkVFLk1hdHJpeDRbXSA9IFtdO1xuICBmb3IgKGNvbnN0IHAgb2YgQi5wb3NpdGlvbnMgYXMgbnVtYmVyW11bXSkge1xuICAgIHdoZWVsTWF0cy5wdXNoKG5ldyBUSFJFRS5NYXRyaXg0KCkuY29tcG9zZShuZXcgVEhSRUUuVmVjdG9yMyhwWzBdLCBwWzFdLCBwWzJdKSxcbiAgICAgIG5ldyBUSFJFRS5RdWF0ZXJuaW9uKCksIG5ldyBUSFJFRS5WZWN0b3IzKHBbM10gPz8gMSwgcFszXSA/PyAxLCBwWzNdID8/IDEpKSk7XG4gIH1cbiAgYWRkSW5zdCgnd2hlZWxzJywgJ1doZWVscycsIHdoZWVsRywgQi53aGVlbE1hdGVyaWFsID8/ICd0cmltJywgd2hlZWxNYXRzKTtcblxuICAvLyBFWFRSQSBjb21wb25lbnRzIChhIHNpZGVjYXIgYm94LCBhIGNhbnZhcyBjYW5vcHksIGEgdHVrLXR1ayBjYWJpbikgLS0gb3duIG1hdGVyaWFsIGVhY2guXG4gIGZvciAoY29uc3QgZXggb2YgKEcuZXh0cmFzID8/IFtdKSBhcyBhbnlbXSkge1xuICAgIGNvbnN0IGdzOiBUSFJFRS5CdWZmZXJHZW9tZXRyeVtdID0gW107XG4gICAgZm9yIChjb25zdCBiIG9mIChleC5ib3hlcyA/PyBbXSkgYXMgbnVtYmVyW11bXSkgZ3MucHVzaCh0aW50R2VvKHJib3goYi5zbGljZSgxKSksIGJbMF0pKTtcbiAgICBmb3IgKGNvbnN0IGIgb2YgbWlycm9yWCgoZXguYm94ZXNNaXJyb3JlZCA/PyBbXSkgYXMgbnVtYmVyW11bXSkpIGdzLnB1c2godGludEdlbyhyYm94KGIuc2xpY2UoMSkpLCBiWzBdKSk7XG4gICAgZm9yIChjb25zdCB0IG9mIChleC50dWJlcyA/PyBbXSkgYXMgYW55W10pIGdzLnB1c2godHViZSh0LnB0cywgdC5yLCB0LnNlZyA/PyA4LCB0LmhleCkpO1xuICAgIGZvciAoY29uc3QgZSBvZiAoZXguZXh0cnVkZXMgPz8gW10pIGFzIGFueVtdKSB7IGNvbnN0IGcgPSBzaWRlRXh0cnVkZShlLnBvbHksIGUud2lkdGgsIGUuc2hhcGUgPz8ge30pOyBpZiAoZS54KSBnLnRyYW5zbGF0ZShlLngsIDAsIDApOyBncy5wdXNoKHRpbnRHZW8oZywgZS5oZXgpKTsgfVxuICAgIGZvciAoY29uc3QgYyBvZiAoZXguY3lscyA/PyBbXSkgYXMgYW55W10pIHsgY29uc3QgZyA9IG5ldyBUSFJFRS5DeWxpbmRlckdlb21ldHJ5KGMucnQsIGMucmIsIGMuaCwgYy5zZWcgPz8gMTIpOyBpZiAoYy5yeCkgZy5yb3RhdGVYKGMucngpOyBpZiAoYy5yeikgZy5yb3RhdGVaKGMucnopOyBnLnRyYW5zbGF0ZShjLmF0WzBdLCBjLmF0WzFdLCBjLmF0WzJdKTsgZ3MucHVzaCh0aW50R2VvKGcsIGMuaGV4KSk7IH1cbiAgICBsZXQgZyA9IG1lcmdlR2Vvcyhncyk7XG4gICAgaWYgKGV4LnV2ID09PSAnd29ybGQnKSBnID0gd29ybGRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGlmIChleC51diA9PT0gJ2hlaWdodCcpIGcgPSBoZWlnaHRVVihnLCBleC51dlNjYWxlID8/IDEpO1xuICAgIGFkZChleC5pZCwgZXgubmFtZSwgZywgZXgubWF0ZXJpYWwpO1xuICB9XG5cbiAgZm9yIChjb25zdCB0IG9mIChDT05GSUcudGlsZXMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgY29uc3QgbWF0ID0gbWF0ZXJpYWxzW3QubWF0ZXJpYWxdO1xuICAgIGlmICghbWF0KSBjb250aW51ZTtcbiAgICBsZXQgdGV4OiBUSFJFRS5DYW52YXNUZXh0dXJlIHwgbnVsbCA9IG51bGw7XG4gICAgaWYgKHQua2luZCA9PT0gJ211ZCcpIHRleCA9IG11ZFRpbGUodC5zaXplID8/IDUxMiwgdC5iYXNlLCB0LnNlZWQgPz8gMSwgdC5jb3ZlcmFnZSA/PyAwLjMzKTtcbiAgICBpZiAodC5raW5kID09PSAnZHVzdCcpIHRleCA9IGR1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuZHVzdCwgdC5zZWVkID8/IDEsIHQuY292ZXJhZ2UgPz8gMC4zMCk7XG4gICAgaWYgKHQua2luZCA9PT0gJ3BsYW5rJykgdGV4ID0gcGxhbmtUaWxlKHQuc2l6ZSA/PyA1MTIsIHQuYm9hcmRzID8/IDYsIHQuc2VlZCA/PyA1KTtcbiAgICBpZiAodC5raW5kID09PSAncnVzdCcpIHRleCA9IHJ1c3RUaWxlKHQuc2l6ZSA/PyA1MTIsIHQucmF0aW8sIHQuc2VlZCA/PyA3LCB0LmRlbnNpdHkgPz8gOTApO1xuICAgIGlmICh0LmtpbmQgPT09ICd0eXJlJykgdGV4ID0gdHlyZVRpbGUodC5zaXplID8/IDI1NiwgdC5zZWVkID8/IDI5LCB0KTtcbiAgICBiaW5kVGlsZShtYXQsIHRleCwgdC5idW1wID8/IDApO1xuICB9XG5cbiAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0geyBub2RlcywgbWVzaGVzLCBzb2NrZXRzLCBjb2xsaWRlcnMsIGRlc3RydWN0aW9uR3JvdXBzIH0gc2F0aXNmaWVzIFByb2NlZHVyYWxNb2RlbFJ1bnRpbWU7XG4gIHJldHVybiByb290O1xufVxuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gdGhhaWtpdCBlbnRyeSBwb2ludCAqL1xuXG4vKipcbiAqIHRoYWlraXQgZW50cnkgcG9pbnQuIFRoZSByZWdpc3RyeSByZWNvcmRzIGBjcmVhdGVPYmplY3RNb2RlbGAgYXMgdGhlIGV4cG9ydCBhbmQgY2FsbHMgaXQgd2l0aFxuICogKHNwZWMsIG9wdGlvbnMpLiBgc3BlY2AgaXMgYWNjZXB0ZWQgYW5kIGF0dGFjaGVkIGZvciBob3N0LXNpZGUgaW5zcGVjdGlvbiAtLSB0aGUgcmVjb25zdHJ1Y3Rpb25cbiAqIGRhdGEgYWxyZWFkeSBsaXZlcyBpbiB0aGlzIG1vZHVsZSwgc28gaXQgaXMgZGVsaWJlcmF0ZWx5IG5vdCBhIHNlY29uZCBzb3VyY2Ugb2YgdHJ1dGguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVPYmplY3RNb2RlbChzcGVjPzogdW5rbm93biwgb3B0aW9uczogUHJvY2VkdXJhbE1vZGVsT3B0aW9ucyA9IHt9KTogVEhSRUUuR3JvdXAge1xuICBjb25zdCByb290ID0gY3JlYXRlSG9uZGFXYXZlTW9kZWwob3B0aW9ucyk7XG4gIGlmIChzcGVjICE9PSB1bmRlZmluZWQgJiYgc3BlYyAhPT0gbnVsbCkgcm9vdC51c2VyRGF0YS5zY3VscHRTcGVjID0gc3BlYztcblxuICBjb25zdCBydCA9IHJvb3QudXNlckRhdGEuc2N1bHB0UnVudGltZSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkO1xuICBpZiAocnQpIHtcbiAgICBjb25zdCBub2RlcyA9IChydC5ub2RlcyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+O1xuXG4gICAgLy8gUGl2b3RzOiB0aGUgcm9vdCwgcGx1cyBPTkUgUEVSIFdIRUVMIChhbmQgYW55IG90aGVyIG1lY2hhbmlzbSBDT05GSUcucGl2b3RzIG5hbWVzIC0tIGFcbiAgICAvLyBzdGVlcmluZyBoZWFkLCBhIGNhbm9weSBzdGF5KS4gQSB2ZWhpY2xlJ3Mgd2hlZWxzIGdlbnVpbmVseSB0dXJuLCBzbyBlYWNoIG9uZSBpcyBhIHByb21pc2VcbiAgICAvLyBrZXB0OiB0aGUgcGl2b3Qgc2l0cyBhdCB0aGUgaHViLCBpdHMgYXhpcyBpcyB0aGUgYXhsZSwgYW5kIGBpbnN0YW5jZWAgbmFtZXMgd2hpY2ggaW5zdGFuY2VcbiAgICAvLyBvZiB0aGUgd2hlZWwgSW5zdGFuY2VkTWVzaCBpdCBkcml2ZXMuIE5vdGhpbmcgZWxzZSBvbiB0aGUgcHJvcCBtb3ZlcyAtLSB0aGUgZG9vcnMgYXJlIHBhcnRcbiAgICAvLyBvZiB0aGUgYm9keSBzaGVsbCAtLSBzbyBub3RoaW5nIGVsc2UgZ2V0cyBhbiBheGlzLlxuICAgIGNvbnN0IHBpdm90czogVEhSRUUuT2JqZWN0M0RbXSA9IFtdO1xuICAgIGNvbnN0IHJvb3RQaXZvdCA9IG5ldyBUSFJFRS5PYmplY3QzRCgpO1xuICAgIHJvb3RQaXZvdC5uYW1lID0gJ3Jvb3QnO1xuICAgIHJvb3RQaXZvdC5wb3NpdGlvbi5zZXQoMCwgMCwgMCk7XG4gICAgcm9vdFBpdm90LnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICBhbmltYXRpb25Sb2xlOiAncm9vdCcsXG4gICAgICBwaXZvdDogeyBtb2RlOiAnY3VzdG9tJywgbG9jYWxQb3NpdGlvbjogWzAsIDAsIDBdLCBheGlzOiBbMCwgMSwgMF0sIG5hbWU6ICdyb290JyB9LFxuICAgIH07XG4gICAgcm9vdC5hZGQocm9vdFBpdm90KTtcbiAgICBwaXZvdHMucHVzaChyb290UGl2b3QpO1xuICAgIGZvciAoY29uc3QgcHYgb2YgKENPTkZJRy5waXZvdHMgPz8gW10pIGFzIGFueVtdKSB7XG4gICAgICBjb25zdCBvID0gbmV3IFRIUkVFLk9iamVjdDNEKCk7XG4gICAgICBvLm5hbWUgPSBwdi5uYW1lO1xuICAgICAgby5wb3NpdGlvbi5zZXQocHYucG9zaXRpb25bMF0sIHB2LnBvc2l0aW9uWzFdLCBwdi5wb3NpdGlvblsyXSk7XG4gICAgICBvLnVzZXJEYXRhLmFjdGlvblByb2ZpbGUgPSB7XG4gICAgICAgIGFuaW1hdGlvblJvbGU6ICdjaGlsZCcsXG4gICAgICAgIHBpdm90OiB7IG1vZGU6ICdjdXN0b20nLCBsb2NhbFBvc2l0aW9uOiBwdi5wb3NpdGlvbiwgYXhpczogcHYuYXhpcywgbmFtZTogcHYubmFtZSxcbiAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBwdi5jb21wb25lbnQsIGluc3RhbmNlOiBwdi5pbnN0YW5jZSA/PyBudWxsLCBub3RlczogcHYubm90ZSA/PyAnJyB9LFxuICAgICAgfTtcbiAgICAgIHJvb3QuYWRkKG8pO1xuICAgICAgcGl2b3RzLnB1c2gobyk7XG4gICAgfVxuXG4gICAgLy8gU29ja2V0czogTk9ORSB1bmxlc3MgQ09ORklHLnNvY2tldHMgbmFtZXMgb25lLiBOb3RoaW5nIGF0dGFjaGVzIHRvIGEgdmVoaWNsZSBpbiB0aGlzIGtpdFxuICAgIC8vIGFuZCBub3RoaW5nIGlzIGVtaXR0ZWQgZnJvbSBpdC5cblxuICAgIC8vIENvbGxpZGVycyBhcmUgcGxhaW4gREFUQSwgbm90IE9iamVjdDNELCBzbyB0aGV5IGNhcnJ5IG5vIC5uYW1lIG9mIHRoZWlyIG93bi4gR2l2ZSBlYWNoIHRoZVxuICAgIC8vIGlkIG9mIHRoZSBjb21wb25lbnQgaXQgb3ducyBhbmQgZHJvcCB0aGUgZW1wdHkgb25lcyAtLSBhIG5hbWVsZXNzIGVtcHR5IHByb3h5IGluIHRoZVxuICAgIC8vIHJ1bnRpbWUgbGlzdCByZWFkcyBhcyBhIHBoeXNpY3Mgc2hhcGUgdGhhdCBleGlzdHMgYW5kIGRvZXMgbm90aGluZy5cbiAgICBjb25zdCBjb2xsaWRlcnMgPSBPYmplY3QuZW50cmllcygocnQuY29sbGlkZXJzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBhbnk+KVxuICAgICAgLmZpbHRlcigoWywgY10pID0+IGMgJiYgdHlwZW9mIGMgPT09ICdvYmplY3QnICYmIE9iamVjdC5rZXlzKGMpLmxlbmd0aCA+IDApXG4gICAgICAubWFwKChbaWQsIGNdKSA9PiAoeyBuYW1lOiBpZCwgLi4uKGMgYXMgb2JqZWN0KSB9KSk7XG5cbiAgICAvLyBEZXN0cnVjdGlvbiBncm91cHM6IHRoaXMgcHJvcCBkZWNsYXJlcyBOT05FLCBhbmQgcHJvbW90aW9uIGNoZWNrcyBidWlsdCBhZ2FpbnN0IGRlY2xhcmVkIGFzXG4gICAgLy8gYW4gZXF1YWxpdHkgaW4gQk9USCBkaXJlY3Rpb25zLiBEZXJpdmVkIHJhdGhlciB0aGFuIGFzc3VtZWQgZW1wdHksIHNvIGEgY29tcG9uZW50IHRoYXRcbiAgICAvLyBzb21laG93IGNhcnJpZWQgYSBmcmFjdHVyZUdyb3VwIGZhaWxzIHRoZSBnYXRlIGxvdWRseSBpbnN0ZWFkIG9mIGJlaW5nIGRyb3BwZWQgaGVyZS5cbiAgICBjb25zdCBncm91cGVkID0gbmV3IE1hcDxzdHJpbmcsIFRIUkVFLk9iamVjdDNEW10+KCk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgbWVtYmVyc10gb2YgT2JqZWN0LmVudHJpZXMoKHJ0LmRlc3RydWN0aW9uR3JvdXBzID8/IHt9KSBhcyBSZWNvcmQ8c3RyaW5nLCBUSFJFRS5PYmplY3QzRFtdPikpIHtcbiAgICAgIGdyb3VwZWQuc2V0KG5hbWUsIFsuLi5tZW1iZXJzXSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qgbm9kZSBvZiBPYmplY3QudmFsdWVzKG5vZGVzKSkge1xuICAgICAgY29uc3QgZ3JvdXAgPSAobm9kZSBhcyBhbnkpPy51c2VyRGF0YT8uYWN0aW9uUHJvZmlsZT8uZGVzdHJ1Y3Rpb24/LmZyYWN0dXJlR3JvdXA7XG4gICAgICBpZiAodHlwZW9mIGdyb3VwICE9PSAnc3RyaW5nJyB8fCAhZ3JvdXApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFncm91cGVkLmhhcyhncm91cCkpIGdyb3VwZWQuc2V0KGdyb3VwLCBbXSk7XG4gICAgICBncm91cGVkLmdldChncm91cCkhLnB1c2gobm9kZSk7XG4gICAgfVxuXG4gICAgcm9vdC51c2VyRGF0YS5zY3VscHRSdW50aW1lID0ge1xuICAgICAgLi4ucnQsXG4gICAgICAvLyBBIENPVU5ULCBub3QgdGhlIFJlY29yZC4gdGhhaWtpdCdzIGhhcm5lc3MgcmV0dXJucyB0aGlzIGZpZWxkIHN0cmFpZ2h0IGFjcm9zcyB0aGVcbiAgICAgIC8vIHB1cHBldGVlciBicmlkZ2UgYW5kIGl0cyByZWdpc3RyeSBmaWVsZCBpcyBhIG51bWJlcjsgYSBSZWNvcmQgb2YgT2JqZWN0M0QgaXMgY2lyY3VsYXIgYW5kXG4gICAgICAvLyBmYWlscyB0byBzZXJpYWxpc2UsIHdoaWNoIHN1cmZhY2VzIGFzIHRoZSB3aG9sZSBzdGF0cyBvYmplY3QgYXJyaXZpbmcgdW5kZWZpbmVkLiBUaGVcbiAgICAgIC8vIFJlY29yZCBzdGF5cyByZWFjaGFibGUgdW5kZXIgYnlJZC5cbiAgICAgIG5vZGVzOiBPYmplY3Qua2V5cyhub2RlcykubGVuZ3RoLFxuICAgICAgcGl2b3RzLFxuICAgICAgc29ja2V0czogT2JqZWN0LnZhbHVlcygocnQuc29ja2V0cyA/PyB7fSkgYXMgUmVjb3JkPHN0cmluZywgVEhSRUUuT2JqZWN0M0Q+KSxcbiAgICAgIGNvbGxpZGVycyxcbiAgICAgIGRlc3RydWN0aW9uR3JvdXBzOiBbLi4uZ3JvdXBlZC5lbnRyaWVzKCldLm1hcCgoW25hbWUsIG1lbWJlcnNdKSA9PiAoeyBuYW1lLCBtZW1iZXJzIH0pKSxcbiAgICAgIGJ5SWQ6IHsgbm9kZXMsIG1lc2hlczogcnQubWVzaGVzID8/IHt9LCBzb2NrZXRzOiBydC5zb2NrZXRzID8/IHt9IH0sXG4gICAgfTtcbiAgfVxuICByZXR1cm4gcm9vdDtcbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUF1Q3ZCLElBQU0sU0FBUztBQUFBLEVBQ1gsTUFBTTtBQUFBLEVBQ04sUUFBUTtBQUFBLEVBQ1IsY0FBYztBQUFBLEVBQ2QsWUFBWTtBQUFBLEVBQ1osYUFBYTtBQUFBLElBQ1g7QUFBQSxNQUNFLE1BQU07QUFBQSxNQUNOLFNBQVM7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLGFBQWE7QUFBQSxNQUNiLGdCQUFnQjtBQUFBLElBQ2xCO0FBQUEsSUFDQTtBQUFBLE1BQ0UsTUFBTTtBQUFBLE1BQ04sU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsZ0JBQWdCO0FBQUEsSUFDbEI7QUFBQSxJQUNBO0FBQUEsTUFDRSxNQUFNO0FBQUEsTUFDTixTQUFTO0FBQUEsTUFDVCxhQUFhO0FBQUEsTUFDYixhQUFhO0FBQUEsTUFDYixnQkFBZ0I7QUFBQSxJQUNsQjtBQUFBLEVBQ0Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQO0FBQUEsTUFDRSxZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsTUFDUixRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxNQUNaLFFBQVE7QUFBQSxJQUNWO0FBQUEsSUFDQTtBQUFBLE1BQ0UsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLE1BQ1IsUUFBUTtBQUFBLFFBQ047QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLE1BQ1YsV0FBVztBQUFBLE1BQ1gsU0FBUztBQUFBLE1BQ1QsYUFBYTtBQUFBLE1BQ2IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxVQUFVO0FBQUEsSUFDUjtBQUFBLE1BQ0UsUUFBUTtBQUFBLE1BQ1IsWUFBWTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxhQUFhO0FBQUEsTUFDYixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsSUFDVjtBQUFBLElBQ0E7QUFBQSxNQUNFLFFBQVE7QUFBQSxNQUNSLFlBQVk7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxRQUFRO0FBQUEsUUFDTjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsYUFBYTtBQUFBLE1BQ2IsWUFBWTtBQUFBLE1BQ1osUUFBUTtBQUFBLElBQ1Y7QUFBQSxFQUNGO0FBQUEsRUFDQSxZQUFZO0FBQUEsSUFDVixZQUFZO0FBQUEsSUFDWixZQUFZO0FBQUEsTUFDVixTQUFTO0FBQUEsTUFDVCxlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsZUFBZTtBQUFBLFFBQ2I7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxJQUNYO0FBQUEsSUFDQSxRQUFRO0FBQUEsTUFDTixLQUFLO0FBQUEsTUFDTCxLQUFLO0FBQUEsTUFDTCxPQUFPO0FBQUEsTUFDUCxTQUFTO0FBQUEsTUFDVCxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixPQUFPO0FBQUEsTUFDUCxVQUFVO0FBQUEsTUFDVixXQUFXO0FBQUEsTUFDWCxVQUFVO0FBQUEsTUFDVixZQUFZO0FBQUEsTUFDWixRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsUUFDVCxRQUFRO0FBQUEsUUFDUixRQUFRO0FBQUEsUUFDUixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsUUFDVixVQUFVO0FBQUEsTUFDWjtBQUFBLE1BQ0EsaUJBQWlCO0FBQUEsTUFDakIsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLE1BQ2IsV0FBVztBQUFBLE1BQ1gsWUFBWTtBQUFBLE1BQ1osYUFBYTtBQUFBLFFBQ1g7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxpQkFBaUI7QUFBQSxRQUNmO0FBQUEsVUFDRSxRQUFRO0FBQUEsWUFDTjtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsS0FBSztBQUFBLFlBQ1A7QUFBQSxZQUNBLGlCQUFpQjtBQUFBLFlBQ2pCLFVBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsWUFDUCxVQUFVO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDUDtBQUFBLFlBQ0EsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsT0FBTztBQUFBLFVBQ1AsU0FBUztBQUFBLFlBQ1AsVUFBVTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsUUFBUTtBQUFBLGNBQ1IsS0FBSztBQUFBLFlBQ1A7QUFBQSxZQUNBLFVBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsU0FBUztBQUFBLFVBQ1QsU0FBUztBQUFBLFlBQ1AsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0UsUUFBUTtBQUFBLFlBQ047QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLFNBQVM7QUFBQSxVQUNULFNBQVM7QUFBQSxZQUNQLFVBQVU7QUFBQSxVQUNaO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLFFBQVE7QUFBQSxZQUNOO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxTQUFTO0FBQUEsVUFDVCxTQUFTO0FBQUEsWUFDUCxVQUFVO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixRQUFRO0FBQUEsY0FDUixLQUFLO0FBQUEsWUFDUDtBQUFBLFlBQ0EsVUFBVTtBQUFBLFVBQ1o7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsY0FBYztBQUFBLFFBQ1o7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGNBQWM7QUFBQSxRQUNaO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLFFBQVE7QUFBQSxRQUNWO0FBQUEsTUFDRjtBQUFBLE1BQ0EsVUFBVTtBQUFBLFFBQ1I7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFlBQ0o7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsVUFDUCxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsWUFDSjtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRjtBQUFBLFVBQ0EsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxPQUFPO0FBQUEsUUFDVDtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFNBQVM7QUFBQSxRQUNQO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxZQUNMO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFlBQ0E7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBLFVBQ0EsS0FBSztBQUFBLFVBQ0wsT0FBTztBQUFBLFVBQ1AsUUFBUTtBQUFBLFFBQ1Y7QUFBQSxRQUNBO0FBQUEsVUFDRSxPQUFPO0FBQUEsWUFDTDtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxZQUNBO0FBQUEsY0FDRTtBQUFBLGNBQ0E7QUFBQSxjQUNBO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQSxVQUNBLEtBQUs7QUFBQSxVQUNMLE9BQU87QUFBQSxVQUNQLFFBQVE7QUFBQSxRQUNWO0FBQUEsUUFDQTtBQUFBLFVBQ0UsT0FBTztBQUFBLFlBQ0w7QUFBQSxjQUNFO0FBQUEsY0FDQTtBQUFBLGNBQ0E7QUFBQSxZQUNGO0FBQUEsWUFDQTtBQUFBLGNBQ0U7QUFBQSxjQUNBO0FBQUEsY0FDQTtBQUFBLFlBQ0Y7QUFBQSxVQUNGO0FBQUEsVUFDQSxLQUFLO0FBQUEsVUFDTCxPQUFPO0FBQUEsVUFDUCxRQUFRO0FBQUEsUUFDVjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUNOO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFFBQ0Y7QUFBQSxRQUNBO0FBQUEsVUFDRTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsUUFDQTtBQUFBLFVBQ0U7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxVQUNBO0FBQUEsVUFDQTtBQUFBLFVBQ0E7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsUUFBUTtBQUFBLFFBQ047QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxPQUFPO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNFLE1BQU07QUFBQSxZQUNKO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNGO0FBQUEsVUFDQSxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixLQUFLO0FBQUEsVUFDTCxNQUFNO0FBQUEsVUFDTixPQUFPO0FBQUEsVUFDUCxP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QUEsRUFDcEQ7QUFDQSxRQUFNLFFBQVEsQ0FBQyxLQUFLLEdBQUcsS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztBQUM3QyxRQUFNLFFBQVEsQ0FBQyxLQUFtQixRQUFrQjtBQUNsRCxVQUFNLE1BQWdCLENBQUMsR0FBRyxLQUFlLENBQUM7QUFDMUMsZUFBVyxDQUFDLElBQUksRUFBRSxLQUFLLEtBQUs7QUFDMUIsWUFBTSxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDckYsWUFBTUEsTUFBSyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUdDLE1BQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQztBQUMzRyxZQUFNLElBQUksQ0FBQ0QsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxJQUFJRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLEdBQUdELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsSUFBSUQsSUFBRyxDQUFDLElBQUlDLElBQUcsQ0FBQyxHQUFHRCxJQUFHLENBQUMsSUFBSUMsSUFBRyxDQUFDLElBQUlELElBQUcsQ0FBQyxJQUFJQyxJQUFHLENBQUMsQ0FBQztBQUN0RyxZQUFNLE1BQU0sRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLElB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WixRQUFFLFNBQVMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQztBQUM3RCxRQUFFLFNBQVMsZ0JBQWdCO0FBQUEsUUFDekIsZUFBZTtBQUFBLFFBQ2YsT0FBTztBQUFBLFVBQUUsTUFBTTtBQUFBLFVBQVUsZUFBZSxHQUFHO0FBQUEsVUFBVSxNQUFNLEdBQUc7QUFBQSxVQUFNLE1BQU0sR0FBRztBQUFBLFVBQ3BFLFdBQVcsR0FBRztBQUFBLFVBQVcsVUFBVSxHQUFHLFlBQVk7QUFBQSxVQUFNLE9BQU8sR0FBRyxRQUFRO0FBQUEsUUFBRztBQUFBLE1BQ3hGO0FBQ0EsV0FBSyxJQUFJLENBQUM7QUFDVixhQUFPLEtBQUssQ0FBQztBQUFBLElBQ2Y7QUFRQSxVQUFNLFlBQVksT0FBTyxRQUFTLEdBQUcsYUFBYSxDQUFDLENBQXlCLEVBQ3pFLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxNQUFNLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLENBQUMsRUFBRSxTQUFTLENBQUMsRUFDekUsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxNQUFNLElBQUksR0FBSSxFQUFhLEVBQUU7QUFLcEQsVUFBTSxVQUFVLG9CQUFJLElBQThCO0FBQ2xELGVBQVcsQ0FBQyxNQUFNLE9BQU8sS0FBSyxPQUFPLFFBQVMsR0FBRyxxQkFBcUIsQ0FBQyxDQUFzQyxHQUFHO0FBQzlHLGNBQVEsSUFBSSxNQUFNLENBQUMsR0FBRyxPQUFPLENBQUM7QUFBQSxJQUNoQztBQUNBLGVBQVcsUUFBUSxPQUFPLE9BQU8sS0FBSyxHQUFHO0FBQ3ZDLFlBQU0sUUFBUyxNQUFjLFVBQVUsZUFBZSxhQUFhO0FBQ25FLFVBQUksT0FBTyxVQUFVLFlBQVksQ0FBQyxNQUFPO0FBQ3pDLFVBQUksQ0FBQyxRQUFRLElBQUksS0FBSyxFQUFHLFNBQVEsSUFBSSxPQUFPLENBQUMsQ0FBQztBQUM5QyxjQUFRLElBQUksS0FBSyxFQUFHLEtBQUssSUFBSTtBQUFBLElBQy9CO0FBRUEsU0FBSyxTQUFTLGdCQUFnQjtBQUFBLE1BQzVCLEdBQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BS0gsT0FBTyxPQUFPLEtBQUssS0FBSyxFQUFFO0FBQUEsTUFDMUI7QUFBQSxNQUNBLFNBQVMsT0FBTyxPQUFRLEdBQUcsV0FBVyxDQUFDLENBQW9DO0FBQUEsTUFDM0U7QUFBQSxNQUNBLG1CQUFtQixDQUFDLEdBQUcsUUFBUSxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxNQUFNLE9BQU8sT0FBTyxFQUFFLE1BQU0sUUFBUSxFQUFFO0FBQUEsTUFDdEYsTUFBTSxFQUFFLE9BQU8sUUFBUSxHQUFHLFVBQVUsQ0FBQyxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsRUFBRTtBQUFBLElBQ3BFO0FBQUEsRUFDRjtBQUNBLFNBQU87QUFDVDsiLAogICJuYW1lcyI6IFsiZTEiLCAiZTIiLCAibCIsICJnIl0KfQo=
